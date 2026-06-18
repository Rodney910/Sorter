import { RANKING_SLOT_COUNT } from '../../../utils/constants.js';

export function getItemId(item) {
  return `${item.name}__${item.img}`;
}

export function createPyramidSlots() {
  return Array.from({ length: RANKING_SLOT_COUNT }, (_value, index) => index + 1).reduce((slots, slot) => {
    slots[slot] = null;
    return slots;
  }, {});
}

export function getPyramidRows() {
  return [[1], [2, 3], [4, 5, 6], [7, 8, 9, 10], [11, 12, 13, 14, 15]];
}

export function nextFreeSlot(pyramidSlots) {
  for (let slot = 1; slot <= RANKING_SLOT_COUNT; slot += 1) {
    if (!pyramidSlots[slot]) return slot;
  }
  return null;
}

export function getMaxUsedSlot(pyramidSlots) {
  return Object.entries(pyramidSlots).reduce((max, [slot, item]) => (item ? Math.max(max, Number(slot)) : max), 0);
}

export function getSelectedIds(pyramidSlots) {
  return Object.values(pyramidSlots)
    .filter(Boolean)
    .map((item) => getItemId(item));
}

export function filterRankingItems(items, activeGroups, search) {
  const query = search.trim().toLowerCase();

  return items.filter((item) => {
    const matchesGroup = item.opts.group?.some((group) => activeGroups.has(group));
    const matchesSearch = !query || item.name.toLowerCase().includes(query);
    return matchesGroup && matchesSearch;
  });
}
