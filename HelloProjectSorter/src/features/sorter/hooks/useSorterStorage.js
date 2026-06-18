import { useCallback, useEffect, useState } from 'react';
import { getStoredSave, setStoredSave } from '../../../utils/storageUtils.js';

export function useSorterStorage(storageKey) {
  const [storedSaveType, setStoredSaveType] = useState('');

  useEffect(() => {
    setStoredSaveType(getStoredSave(storageKey).saveType);
  }, [storageKey]);

  const save = useCallback(
    (saveData, saveType) => {
      setStoredSave(storageKey, saveData, saveType);
      setStoredSaveType(saveType);
    },
    [storageKey],
  );

  const load = useCallback(() => getStoredSave(storageKey), [storageKey]);

  return {
    storedSaveType,
    save,
    load,
  };
}
