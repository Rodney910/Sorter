import seedrandom from 'seedrandom';
import { DEFAULT_RESULT_IMAGE_COUNT, RESULT_ROW_LIMIT } from '../../../utils/constants.js';
import { createInitialSorterState } from './sorterInitialState.js';

export function cloneNestedArray(value) {
  return value.map((item) => (Array.isArray(item) ? [...item] : item));
}

function parseDatasetVersionDate(version) {
  const direct = new Date(version);
  if (!Number.isNaN(direct.getTime())) return direct.getTime();

  const match = String(version).match(/(\d{2})(\d{2})(\d{2,4})/);
  if (!match) return 0;

  const [, day, month, yearPart] = match;
  const year = yearPart.length === 2 ? Number(`20${yearPart}`) : Number(yearPart);
  return new Date(year, Number(month) - 1, Number(day)).getTime();
}

/**
 * Selecciona el dataset más reciente disponible.
 * Replica la intención de setLatestDataset(), pero entiende versiones legacy
 * como idolsR17062026 además de fechas ISO.
 */
export function getLatestDatasetVersion(dataSet, fallbackVersion = '') {
  const versions = Object.keys(dataSet || {});
  if (!versions.length) return fallbackVersion;

  return versions.reduce((latest, version) => {
    const latestTime = parseDatasetVersionDate(latest);
    const currentTime = parseDatasetVersionDate(version);
    return currentTime >= latestTime ? version : latest;
  }, versions[0]);
}

export function getDatasetVersionForTimestamp(dataSet, timestamp, timeError = false) {
  const versions = Object.keys(dataSet || {});
  if (!versions.length) return '';

  const seedTime = Number(timestamp);
  const mapped = versions
    .map((version) => ({ version, time: parseDatasetVersionDate(version) }))
    .sort((a, b) => a.time - b.time);

  const before = mapped.filter((item) => item.time <= seedTime).at(-1);
  const after = mapped.find((item) => item.time > seedTime);

  if (!before) return after?.version || mapped[0].version;
  if (!after) return before.version;
  return timeError ? after.version : before.version;
}

export function createSelectedOptionsFromDefaults(options) {
  return options.reduce((selection, opt) => {
    if (Array.isArray(opt.sub)) {
      selection[opt.key] = {
        enabled: opt.checked !== false,
        sub: opt.sub.reduce((subSelection, subopt) => {
          subSelection[subopt.key] = !!subopt.checked;
          return subSelection;
        }, {}),
      };
    } else {
      selection[opt.key] = !!opt.checked;
    }
    return selection;
  }, {});
}

/**
 * Convierte la selección visual de filtros a optTaken, optStr y suboptStr.
 * El formato resultante conserva el savedata legacy: top-level 0/1 y
 * subopciones separadas por pipes en el mismo orden del dataset.
 */
export function buildOptionState(options, selectedOptions) {
  const optTaken = options.map((opt) => {
    const selected = selectedOptions[opt.key];

    if (Array.isArray(opt.sub)) {
      if (!selected?.enabled) return false;
      return opt.sub.map((subopt) => !!selected.sub?.[subopt.key]);
    }

    return !!selected;
  });

  const optStr = optTaken.map((value) => (value ? '1' : '0')).join('');
  const suboptStr = optTaken
    .filter(Array.isArray)
    .map((value) => value.map((subValue) => (subValue ? '1' : '0')).join(''))
    .map((value) => `|${value}`)
    .join('');

  return { optTaken, optStr, suboptStr };
}

/**
 * Filtra characterData según options y optTaken.
 * Respeta opciones anidadas, char.opts[opt.key] y la lógica legacy de
 * conservar un item si al menos una subopción seleccionada coincide.
 */
export function filterCharacters(characterData, options, optTaken) {
  return options.reduce((items, opt, index) => {
    const taken = optTaken[index];

    if (Array.isArray(opt.sub)) {
      if (!taken) return items;
      const subArray = taken.reduce((subList, subBool, subIndex) => {
        if (subBool) subList.push(opt.sub[subIndex].key);
        return subList;
      }, []);

      return items.filter((char) => {
        if (!(opt.key in char.opts)) {
          console.warn(`Warning: ${opt.key} not set for ${char.name}.`);
        }
        return opt.key in char.opts && char.opts[opt.key].some((key) => subArray.includes(key));
      });
    }

    if (taken) {
      return items.filter((char) => !char.opts[opt.key]);
    }

    return items;
  }, characterData.slice(0));
}

function shuffleWithTimestamp(items, timestamp) {
  const rng = seedrandom(String(timestamp));
  return items
    .map((item) => [rng(), item])
    .sort((a, b) => a[0] - b[0])
    .map((entry) => entry[1]);
}

/**
 * Inicializa el merge sort interactivo.
 * sortedIndexList contiene índices hacia characterDataToSort; parentIndexList
 * registra de qué nodo salió cada mitad para volver a fusionar en el padre.
 */
export function initializeMergeSort(filteredCharacters) {
  const sortedIndexList = [];
  const parentIndexList = [];
  let totalBattles = 0;

  sortedIndexList[0] = filteredCharacters.map((_value, idx) => idx);
  parentIndexList[0] = -1;

  let marker = 1;
  for (let i = 0; i < sortedIndexList.length; i += 1) {
    if (sortedIndexList[i].length > 1) {
      const parent = sortedIndexList[i];
      const midpoint = Math.ceil(parent.length / 2);

      sortedIndexList[marker] = parent.slice(0, midpoint);
      totalBattles += sortedIndexList[marker].length;
      parentIndexList[marker] = i;
      marker += 1;

      sortedIndexList[marker] = parent.slice(midpoint, parent.length);
      totalBattles += sortedIndexList[marker].length;
      parentIndexList[marker] = i;
      marker += 1;
    }
  }

  return {
    sortedIndexList,
    parentIndexList,
    recordDataList: filteredCharacters.map(() => 0),
    tiedDataList: filteredCharacters.map(() => -1),
    leftIndex: sortedIndexList.length - 2,
    rightIndex: sortedIndexList.length - 1,
    leftInnerIndex: 0,
    rightInnerIndex: 0,
    battleNo: 1,
    sortedNo: 0,
    pointer: 0,
    totalBattles,
  };
}

export function createStartedSorterState({
  dataSet,
  fallbackVersion,
  version,
  selectedOptions,
  timestamp = Date.now(),
  resultImageCount = DEFAULT_RESULT_IMAGE_COUNT,
  timeError = false,
}) {
  const currentVersion = version || getLatestDatasetVersion(dataSet, fallbackVersion);
  const options = dataSet[currentVersion].options;
  const characterData = dataSet[currentVersion].characterData;
  const { optTaken, optStr, suboptStr } = buildOptionState(options, selectedOptions);
  const filteredCharacters = filterCharacters(characterData, options, optTaken);

  if (filteredCharacters.length < 2) {
    throw new Error('Cannot sort with less than two characters. Please reselect.');
  }

  const effectiveTimeError = timeError || timestamp < parseDatasetVersionDate(currentVersion);
  const characterDataToSort = shuffleWithTimestamp(filteredCharacters, timestamp);
  const mergeState = initializeMergeSort(characterDataToSort, timestamp);

  return {
    ...createInitialSorterState(),
    status: 'loading',
    loading: true,
    characterData,
    characterDataToSort,
    options,
    currentVersion,
    optTaken,
    optStr,
    suboptStr,
    timestamp,
    timeError: effectiveTimeError,
    resultImageCount,
    ...mergeState,
    progressLabel: 'Loading Image 0',
    progressPercent: 0,
  };
}

function cloneForMutation(state) {
  return {
    ...state,
    sortedIndexList: cloneNestedArray(state.sortedIndexList),
    recordDataList: [...state.recordDataList],
    parentIndexList: [...state.parentIndexList],
    tiedDataList: [...state.tiedDataList],
  };
}

function snapshotState(state) {
  return {
    sortedIndexList: cloneNestedArray(state.sortedIndexList),
    recordDataList: [...state.recordDataList],
    parentIndexList: [...state.parentIndexList],
    tiedDataList: [...state.tiedDataList],
    leftIndex: state.leftIndex,
    leftInnerIndex: state.leftInnerIndex,
    rightIndex: state.rightIndex,
    rightInnerIndex: state.rightInnerIndex,
    battleNo: state.battleNo,
    sortedNo: state.sortedNo,
    pointer: state.pointer,
    choices: state.choices,
  };
}

/**
 * Registra datos desde la lista izquierda o derecha.
 * Mutar el draft local mantiene el algoritmo legible sin exponer variables
 * globales; el estado público sigue siendo inmutable.
 */
export function recordData(state, sortType) {
  if (sortType === 'left') {
    state.recordDataList[state.pointer] = state.sortedIndexList[state.leftIndex][state.leftInnerIndex];
    state.leftInnerIndex += 1;
  } else {
    state.recordDataList[state.pointer] = state.sortedIndexList[state.rightIndex][state.rightInnerIndex];
    state.rightInnerIndex += 1;
  }

  state.pointer += 1;
  state.sortedNo += 1;
}

/**
 * Ejecuta una elección de usuario: left, right o tie.
 * choices guarda 0/1/2 en orden de batalla para que save/load pueda reproducir
 * exactamente el recorrido del merge sort.
 */
export function applyPick(state, sortType, now = Date.now()) {
  if (state.status !== 'sorting' || state.loading || state.timeTaken) return state;

  const draft = cloneForMutation(state);
  draft.previous = snapshotState(state);

  switch (sortType) {
    case 'left': {
      if (draft.choices.length === draft.battleNo - 1) draft.choices += '0';
      recordData(draft, 'left');
      while (draft.tiedDataList[draft.recordDataList[draft.pointer - 1]] !== -1) recordData(draft, 'left');
      break;
    }
    case 'right': {
      if (draft.choices.length === draft.battleNo - 1) draft.choices += '1';
      recordData(draft, 'right');
      while (draft.tiedDataList[draft.recordDataList[draft.pointer - 1]] !== -1) recordData(draft, 'right');
      break;
    }
    case 'tie': {
      if (draft.choices.length === draft.battleNo - 1) draft.choices += '2';
      recordData(draft, 'left');
      while (draft.tiedDataList[draft.recordDataList[draft.pointer - 1]] !== -1) recordData(draft, 'left');
      draft.tiedDataList[draft.recordDataList[draft.pointer - 1]] =
        draft.sortedIndexList[draft.rightIndex][draft.rightInnerIndex];
      recordData(draft, 'right');
      while (draft.tiedDataList[draft.recordDataList[draft.pointer - 1]] !== -1) recordData(draft, 'right');
      break;
    }
    default:
      return state;
  }

  const leftListLen = draft.sortedIndexList[draft.leftIndex].length;
  const rightListLen = draft.sortedIndexList[draft.rightIndex].length;

  if (draft.leftInnerIndex < leftListLen && draft.rightInnerIndex === rightListLen) {
    while (draft.leftInnerIndex < leftListLen) recordData(draft, 'left');
  } else if (draft.leftInnerIndex === leftListLen && draft.rightInnerIndex < rightListLen) {
    while (draft.rightInnerIndex < rightListLen) recordData(draft, 'right');
  }

  if (draft.leftInnerIndex === leftListLen && draft.rightInnerIndex === rightListLen) {
    for (let i = 0; i < leftListLen + rightListLen; i += 1) {
      draft.sortedIndexList[draft.parentIndexList[draft.leftIndex]][i] = draft.recordDataList[i];
    }
    draft.sortedIndexList.pop();
    draft.sortedIndexList.pop();
    draft.leftIndex -= 2;
    draft.rightIndex -= 2;
    draft.leftInnerIndex = 0;
    draft.rightInnerIndex = 0;
    draft.recordDataList = draft.sortedIndexList.map(() => 0);
    draft.pointer = 0;
  }

  if (draft.leftIndex < 0) {
    draft.timeTaken = draft.timeTaken || now - draft.timestamp;
    draft.status = 'finished';
    draft.progressLabel = `Battle No. ${draft.battleNo} - Completed!`;
    draft.progressPercent = 100;
    const results = buildFinalResults(draft, draft.resultImageCount);
    draft.finalCharacters = results.finalCharacters;
    draft.resultRows = results.rows;
    return draft;
  }

  draft.battleNo += 1;
  draft.progressLabel = `Round N°: ${draft.battleNo}`;
  draft.progressPercent = Math.floor((draft.sortedNo * 100) / draft.totalBattles);
  return draft;
}

/**
 * Construye los resultados finales respetando empates.
 * La salida es derivada desde sortedIndexList/tiedDataList para evitar el bug
 * legacy donde finalCharacters podía acumularse entre renders.
 */
export function buildFinalResults(state, imageDisplayCount = DEFAULT_RESULT_IMAGE_COUNT) {
  let rankNum = 1;
  let tiedRankNum = 1;
  let currentRowSize = 1;
  let imageDisplay = Number(imageDisplayCount);
  const finalCharacters = [];
  const rows = [];
  let rowItems = [];
  const finalSortedIndexes = state.sortedIndexList[0]?.slice(0) || [];

  finalSortedIndexes.forEach((characterIndex, idx) => {
    const character = state.characterDataToSort[characterIndex];
    const resultItem = {
      rank: rankNum,
      character,
      characterIndex,
      showImage: imageDisplay > 0,
    };

    imageDisplay -= 1;
    finalCharacters.push(resultItem);
    rowItems.push(resultItem);

    if (idx < finalSortedIndexes.length - 1) {
      if (state.tiedDataList[characterIndex] === finalSortedIndexes[idx + 1]) {
        tiedRankNum += 1;
      } else {
        rankNum += tiedRankNum;
        tiedRankNum = 1;
      }
    }

    const rowSize = currentRowSize <= RESULT_ROW_LIMIT ? currentRowSize : RESULT_ROW_LIMIT;
    if (rowItems.length >= rowSize) {
      rows.push(rowItems);
      rowItems = [];
      if (currentRowSize < RESULT_ROW_LIMIT) currentRowSize += 1;
    }
  });

  if (rowItems.length > 0) rows.push(rowItems);
  return { finalCharacters, rows };
}

/**
 * Restaura el estado anterior con copias profundas de arrays anidados.
 */
export function undoPick(state) {
  if (state.timeTaken || !state.previous) return state;

  return {
    ...state,
    ...state.previous,
    status: 'sorting',
    previous: null,
    progressLabel: `Round N°: ${state.previous.battleNo}`,
    progressPercent: Math.floor((state.previous.sortedNo * 100) / state.totalBattles),
  };
}

export function replayChoices(startState, choices, savedTimeTaken = 0) {
  let replayed = { ...startState, status: 'sorting', loading: false, choices: '' };
  const map = { 0: 'left', 1: 'right', 2: 'tie' };

  for (const choice of choices || '') {
    if (!map[choice] || replayed.status === 'finished') break;
    replayed = applyPick(replayed, map[choice], replayed.timestamp + (savedTimeTaken || 1));
  }

  if (savedTimeTaken && replayed.status === 'finished') {
    const results = buildFinalResults({ ...replayed, timeTaken: savedTimeTaken }, replayed.resultImageCount);
    replayed = {
      ...replayed,
      timeTaken: savedTimeTaken,
      finalCharacters: results.finalCharacters,
      resultRows: results.rows,
    };
  }

  return replayed;
}

export function getCurrentBattle(state) {
  if (state.status !== 'sorting' || state.leftIndex < 0 || state.rightIndex < 0) return null;

  const leftCharIndex = state.sortedIndexList[state.leftIndex]?.[state.leftInnerIndex];
  const rightCharIndex = state.sortedIndexList[state.rightIndex]?.[state.rightInnerIndex];
  if (leftCharIndex == null || rightCharIndex == null) return null;

  return {
    left: state.characterDataToSort[leftCharIndex],
    right: state.characterDataToSort[rightCharIndex],
  };
}
