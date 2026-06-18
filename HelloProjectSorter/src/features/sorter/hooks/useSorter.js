import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { DEFAULT_RESULT_IMAGE_COUNT } from '../../../utils/constants.js';
import { getSorterStorageKey } from '../../../utils/storageUtils.js';
import {
  createSelectedOptionsFromDefaults,
  createStartedSorterState,
  getCurrentBattle,
  getLatestDatasetVersion,
  replayChoices,
} from '../logic/sorterEngine.js';
import { preloadImages } from '../logic/imagePreloader.js';
import { sorterReducer } from '../logic/sorterReducer.js';
import { createInitialSorterState } from '../logic/sorterInitialState.js';
import { buildShareUrl, generateSaveData, parseSaveForDataset } from '../logic/saveDataCodec.js';
import { useSorterStorage } from './useSorterStorage.js';

export function useSorter({ moduleId, language, dataset, imageRoot }) {
  const dataSet = dataset.dataSet;
  const fallbackVersion = dataset.dataSetVersion;
  const latestVersion = useMemo(() => getLatestDatasetVersion(dataSet, fallbackVersion), [dataSet, fallbackVersion]);
  const latestOptions = dataSet[latestVersion]?.options || [];
  const [selectedOptions, setSelectedOptions] = useState(() => createSelectedOptionsFromDefaults(latestOptions));
  const [state, dispatch] = useReducer(sorterReducer, undefined, createInitialSorterState);
  const [saveDialog, setSaveDialog] = useState({ open: false, url: '', saveType: '' });
  const [toast, setToast] = useState('');
  const decodedQueryRef = useRef(false);
  const lastAutosaveRef = useRef('');
  const storageKey = useMemo(() => getSorterStorageKey(moduleId, language), [language, moduleId]);
  const storage = useSorterStorage(storageKey);

  useEffect(() => {
    setSelectedOptions(createSelectedOptionsFromDefaults(latestOptions));
    dispatch({ type: 'RESET' });
    decodedQueryRef.current = false;
  }, [latestVersion]);

  const setGroupEnabled = useCallback(
    (optKey, enabled) => {
      const opt = latestOptions.find((option) => option.key === optKey);
      setSelectedOptions((previous) => {
        if (!opt || !Array.isArray(opt.sub)) return previous;
        return {
          ...previous,
          [optKey]: {
            enabled,
            sub: opt.sub.reduce((subs, subopt) => {
              subs[subopt.key] = enabled;
              return subs;
            }, {}),
          },
        };
      });
    },
    [latestOptions],
  );

  const setSubOption = useCallback((optKey, subKey, checked) => {
    setSelectedOptions((previous) => {
      const current = previous[optKey] || { enabled: false, sub: {} };
      const nextSub = { ...current.sub, [subKey]: checked };
      return {
        ...previous,
        [optKey]: {
          enabled: checked || Object.values(nextSub).some(Boolean),
          sub: nextSub,
        },
      };
    });
  }, []);

  const startSort = useCallback(
    async (overrides = {}) => {
      try {
        const requestedOptions = overrides.selectedOptions || selectedOptions;
        if (overrides.selectedOptions) setSelectedOptions(overrides.selectedOptions);

        const started = createStartedSorterState({
          dataSet,
          fallbackVersion,
          version: overrides.version,
          selectedOptions: requestedOptions,
          timestamp: overrides.timestamp || Date.now(),
          resultImageCount: state.resultImageCount || DEFAULT_RESULT_IMAGE_COUNT,
          timeError: overrides.timeError,
        });

        dispatch({ type: 'START_SORT', payload: started });

        await preloadImages(started.characterDataToSort, {
          imageRoot,
          version: started.currentVersion,
          onProgress: ({ label, percent }) => dispatch({ type: 'IMAGES_LOADING', payload: { label, percent } }),
        });

        const readyState = replayChoices(
          {
            ...started,
            status: 'sorting',
            loading: false,
            progressLabel: `Round N°: ${started.battleNo}`,
          },
          overrides.choices || '',
          overrides.timeTaken || 0,
        );

        dispatch({ type: 'IMAGES_LOADED', payload: readyState });
      } catch (error) {
        dispatch({ type: 'ERROR', payload: error.message });
        setToast(error.message);
      }
    },
    [dataSet, fallbackVersion, imageRoot, selectedOptions, state.resultImageCount],
  );

  const loadEncodedSave = useCallback(
    async (encoded) => {
      try {
        const parsed = parseSaveForDataset(encoded, dataSet);
        await startSort(parsed);
      } catch (error) {
        dispatch({ type: 'ERROR', payload: `Error loading shareable link: ${error.message}` });
        setToast(`Error loading shareable link: ${error.message}`);
      }
    },
    [dataSet, startSort],
  );

  useEffect(() => {
    if (decodedQueryRef.current) return;
    const query = window.location.search.slice(1);
    if (!query) return;
    decodedQueryRef.current = true;
    loadEncodedSave(query);
  }, [loadEncodedSave]);

  useEffect(() => {
    if (state.status !== 'sorting' || !state.timestamp || !state.choices) return;
    const saveData = generateSaveData(state);
    if (saveData === lastAutosaveRef.current) return;
    lastAutosaveRef.current = saveData;
    storage.save(saveData, 'Autosave');
  }, [state, storage]);

  const pick = useCallback((sortType) => dispatch({ type: 'PICK', payload: sortType }), []);
  const undo = useCallback(() => dispatch({ type: 'UNDO' }), []);
  const reset = useCallback(() => dispatch({ type: 'RESET' }), []);

  const saveProgress = useCallback(
    (saveType) => {
      if (!state.timestamp) return;
      const saveData = generateSaveData(state);
      storage.save(saveData, saveType);
      if (saveType !== 'Autosave') {
        setSaveDialog({
          open: true,
          url: buildShareUrl(saveData),
          saveType,
        });
      }
    },
    [state, storage],
  );

  const loadProgress = useCallback(() => {
    const { saveData } = storage.load();
    if (!saveData) {
      setToast('No saved progress found.');
      return;
    }
    loadEncodedSave(saveData);
  }, [loadEncodedSave, storage]);

  const setResultImageCount = useCallback((count) => {
    dispatch({ type: 'SET_RESULT_IMAGE_COUNT', payload: count });
  }, []);

  const currentBattle = useMemo(() => getCurrentBattle(state), [state]);

  return {
    state,
    options: latestOptions,
    selectedOptions,
    currentBattle,
    storedSaveType: storage.storedSaveType,
    saveDialog,
    toast,
    setToast,
    setSaveDialog,
    setGroupEnabled,
    setSubOption,
    startSort,
    loadProgress,
    saveProgress,
    pick,
    undo,
    reset,
    setResultImageCount,
  };
}
