import { useMemo, useState } from 'react';
import { getLatestDatasetVersion } from '../../sorter/logic/sorterEngine.js';
import {
  createPyramidSlots,
  filterRankingItems,
  getItemId,
  getSelectedIds,
  nextFreeSlot,
} from '../logic/rankingUtils.js';

export function useRanking(dataset) {
  const dataSet = dataset.dataSet;
  const version = useMemo(() => getLatestDatasetVersion(dataSet, dataset.dataSetVersion), [dataSet, dataset.dataSetVersion]);
  const current = dataSet[version];
  const allItems = current.characterData;
  const options = current.options[0]?.sub || [];
  const [activeGroups, setActiveGroups] = useState(() => new Set(options.filter((option) => option.checked).map((option) => option.key)));
  const [search, setSearch] = useState('');
  const [pyramidSlots, setPyramidSlots] = useState(createPyramidSlots);
  const [toast, setToast] = useState(null);

  const filteredItems = useMemo(
    () => filterRankingItems(allItems, activeGroups, search),
    [activeGroups, allItems, search],
  );

  const selectedIds = useMemo(() => new Set(getSelectedIds(pyramidSlots)), [pyramidSlots]);

  const selectGroup = (groupKey) => {
    setActiveGroups(new Set([groupKey]));
  };

  const toggleItem = (item) => {
    const id = getItemId(item);
    const existingSlot = Object.entries(pyramidSlots).find(([_slot, slotItem]) => slotItem && getItemId(slotItem) === id)?.[0];

    if (existingSlot) {
      setPyramidSlots((previous) => ({ ...previous, [existingSlot]: null }));
      return;
    }

    const free = nextFreeSlot(pyramidSlots);
    if (!free) {
      setToast({
        message: 'You can only select up to 15 idols.',
        severity: 'warning',
      });
      return;
    }

    setPyramidSlots((previous) => ({
      ...previous,
      [free]: {
        ...item,
        slot: free,
      },
    }));
  };

  const removeSlot = (slot) => {
    if (!pyramidSlots[slot]) return;
    setPyramidSlots((previous) => ({ ...previous, [slot]: null }));
  };

  const clear = () => {
    setPyramidSlots(createPyramidSlots());
  };

  return {
    version,
    allItems,
    options,
    activeGroups,
    search,
    setSearch,
    pyramidSlots,
    filteredItems,
    selectedIds,
    toast,
    setToast,
    selectGroup,
    toggleItem,
    removeSlot,
    clear,
  };
}
