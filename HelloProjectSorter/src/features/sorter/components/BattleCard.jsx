import { resolveImageSrc } from '../../../utils/imageUtils.js';
import { reduceTextWidth } from '../../../utils/textUtils.js';

export default function BattleCard({ side, item, imageRoot, version, onPick }) {
  const name = item?.name || '';
  const reducedName = reduceTextWidth(name, '12.8px Arial', 220);

  return (
    <button type="button" className={`battle-card ${side}`} onClick={onPick} disabled={!item} aria-label={`Choose ${name}`}>
      <span className="battle-image-frame battle-card-imageFrame">
        {item ? (
          <img
            src={resolveImageSrc(item.img, { imageRoot, version })}
            alt={name}
            className="battle-card-image"
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
        ) : (
          <span className="battle-placeholder">{side === 'left' ? 'Left' : 'Right'}</span>
        )}
      </span>
      {item ? (
        <span className="battle-name battle-card-name" title={name !== reducedName ? name : ''}>
          {reducedName}
        </span>
      ) : null}
    </button>
  );
}
