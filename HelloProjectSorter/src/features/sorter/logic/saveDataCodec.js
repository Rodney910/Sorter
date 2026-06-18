import LZString from 'lz-string';
import { getDatasetVersionForTimestamp } from './sorterEngine.js';
import { setStoredSave, getStoredSave } from '../../../utils/storageUtils.js';

export function generateSaveData(state) {
  const saveData = `${state.timeError ? '|' : ''}${state.timestamp}|${state.timeTaken}|${state.choices}|${state.optStr}${state.suboptStr}`;
  return LZString.compressToEncodedURIComponent(saveData);
}

export function parseSaveData(encoded) {
  const raw = LZString.decompressFromEncodedURIComponent(encoded);
  if (!raw) throw new Error('Save data could not be decoded.');

  const decoded = raw.split('|');
  let timeError = false;

  if (!decoded[0]) {
    decoded.splice(0, 1);
    timeError = true;
  }

  return {
    timestamp: Number(decoded.splice(0, 1)[0]),
    timeTaken: Number(decoded.splice(0, 1)[0]),
    choices: decoded.splice(0, 1)[0] || '',
    optStr: decoded.splice(0, 1)[0] || '',
    suboptParts: decoded,
    timeError,
  };
}

export function decodeSelectedOptions(options, optStr, suboptParts) {
  let subIndex = 0;

  return options.reduce((selection, opt, index) => {
    if (Array.isArray(opt.sub)) {
      const enabled = optStr[index] === '1';
      const part = enabled ? suboptParts[subIndex] || '' : '';
      selection[opt.key] = {
        enabled,
        sub: opt.sub.reduce((subSelection, subopt, suboptIndex) => {
          subSelection[subopt.key] = enabled ? part[suboptIndex] === '1' : true;
          return subSelection;
        }, {}),
      };
      if (enabled) subIndex += 1;
    } else {
      selection[opt.key] = optStr[index] === '1';
    }
    return selection;
  }, {});
}

export function parseSaveForDataset(encoded, dataSet) {
  const parsed = parseSaveData(encoded);
  const version = getDatasetVersionForTimestamp(dataSet, parsed.timestamp, parsed.timeError);
  const options = dataSet[version].options;
  return {
    ...parsed,
    version,
    selectedOptions: decodeSelectedOptions(options, parsed.optStr, parsed.suboptParts),
  };
}

export function saveSorterProgress(storageKey, saveData, saveType) {
  setStoredSave(storageKey, saveData, saveType);
}

export function loadSorterProgress(storageKey) {
  return getStoredSave(storageKey);
}

export function buildShareUrl(encodedSaveData) {
  return `${window.location.origin}${window.location.pathname}?${encodedSaveData}`;
}
