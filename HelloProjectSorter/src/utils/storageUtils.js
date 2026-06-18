export function getSorterStorageKey(moduleId, language) {
  return `hello-project-sorter:${moduleId}:${language}`;
}

export function getStoredSaveType(storageKey) {
  return localStorage.getItem(`${storageKey}:saveType`) || '';
}

export function setStoredSave(storageKey, saveData, saveType) {
  localStorage.setItem(`${storageKey}:saveData`, saveData);
  localStorage.setItem(`${storageKey}:saveType`, saveType);
}

export function getStoredSave(storageKey) {
  return {
    saveData: localStorage.getItem(`${storageKey}:saveData`) || '',
    saveType: getStoredSaveType(storageKey),
  };
}
