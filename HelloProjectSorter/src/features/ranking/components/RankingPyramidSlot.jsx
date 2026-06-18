import { FALLBACK_BORDER_COLOR } from '../../../utils/constants.js';
import { safeHexColor } from '../../../utils/colorUtils.js';
import { resolveImageSrc } from '../../../utils/imageUtils.js';
import { reduceTextWidth } from '../../../utils/textUtils.js';

export default function RankingPyramidSlot({ slot, item, hidden, imageRoot, version, onRemove }) {
  if (hidden) {
    return <div className="result-grid-item pyramid-slot hidden" data-slot={slot} />;
  }

  const color = safeHexColor(item?.color, FALLBACK_BORDER_COLOR);
  const reducedName = item ? reduceTextWidth(item.name, '12px Arial', 160) : '';

  return (
    <button
      type="button"
      className={`result-grid-item pyramid-slot${item ? ' result-image-card ranking-result-card' : ''}`}
      data-slot={slot}
      style={{ borderColor: color }}
      onClick={() => onRemove(slot)}
      aria-label={item ? `Remove ${item.name} from slot ${slot}` : `Empty slot ${slot}`}
    >
      {item ? (
        <>
          <img
            src={resolveImageSrc(item.img, { imageRoot, version })}
            alt={item.name}
            className="result-card-image"
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
          <span className="result-info result-card-caption">
            <span className="result-name" title={item.name !== reducedName ? item.name : ''}>
              <b>{slot}.</b> {reducedName}
            </span>
          </span>
        </>
      ) : (
        <span className="pyramid-placeholder" />
      )}
    </button>
  );
}
