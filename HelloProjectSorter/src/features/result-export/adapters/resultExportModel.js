import { FALLBACK_BORDER_COLOR } from '../../../utils/constants.js';
import { safeHexColor } from '../../../utils/colorUtils.js';
import { resolveImageSrc } from '../../../utils/imageUtils.js';
import { getMaxUsedSlot, getPyramidRows } from '../../ranking/logic/rankingUtils.js';

function createExportEntry({ rank, name, img, color, showImage, imageRoot, version }) {
  return {
    rank,
    name: name || '',
    imageSrc: resolveImageSrc(img, { imageRoot, version }),
    borderColor: safeHexColor(color, FALLBACK_BORDER_COLOR),
    showImage: Boolean(showImage),
    isEmpty: false,
  };
}

function createEmptyEntry(rank) {
  return {
    rank,
    name: '',
    imageSrc: '',
    borderColor: FALLBACK_BORDER_COLOR,
    showImage: false,
    isEmpty: true,
  };
}

export function buildSorterExportModel({ title, state, imageRoot, version, language, theme }) {
  return {
    kind: 'sorter',
    title,
    theme,
    resultTitle: 'Ranking Result:',
    language,
    generatedAt: state.timestamp + state.timeTaken,
    timeTaken: state.timeTaken,
    emptyMessage: '',
    rows: state.resultRows.map((row) =>
      row.map((item) =>
        createExportEntry({
          rank: item.rank,
          name: item.character.name,
          img: item.character.img,
          color: item.character.color,
          showImage: item.showImage,
          imageRoot,
          version,
        }),
      ),
    ),
  };
}

export function buildRankingExportModel({ title, pyramidSlots, imageRoot, version, language, theme }) {
  const maxUsedSlot = getMaxUsedSlot(pyramidSlots);
  const rows = getPyramidRows()
    .map((row) =>
      row
        .filter((slot) => slot <= maxUsedSlot || pyramidSlots[slot])
        .map((slot) => {
          const item = pyramidSlots[slot];

          if (!item) return createEmptyEntry(slot);

          return createExportEntry({
            rank: slot,
            name: item.name,
            img: item.img,
            color: item.color,
            showImage: true,
            imageRoot,
            version,
          });
        }),
    )
    .filter((row) => row.length > 0);

  return {
    kind: 'ranking',
    title,
    theme,
    resultTitle: 'Ranking Result:',
    language,
    generatedAt: Date.now(),
    timeTaken: null,
    emptyMessage: 'Select up to 15 idols',
    rows,
  };
}
