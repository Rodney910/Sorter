import { FALLBACK_BORDER_COLOR } from '../../../utils/constants.js';
import { safeHexColor } from '../../../utils/colorUtils.js';
import { resolveImageSrc } from '../../../utils/imageUtils.js';
import { reduceTextWidth } from '../../../utils/textUtils.js';

export default function ResultGridItem({ item, imageRoot, version }) {
  const color = safeHexColor(item.character.color, FALLBACK_BORDER_COLOR);
  const reducedName = reduceTextWidth(item.character.name, '12px Arial', 160);

  return (
    <div className="result-grid-item result-image-card sorter-result-card" style={{ borderColor: color }}>
      {item.showImage ? (
        <img
          src={resolveImageSrc(item.character.img, { imageRoot, version })}
          alt={item.character.name}
          className="result-card-image"
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
        />
      ) : null}
      <div className="result-info result-card-caption">
        {item.showImage ? null : <div className="result-rank">{item.rank}</div>}
        <div className="result-name" title={item.character.name !== reducedName ? item.character.name : ''}>
          {item.showImage ? <b>{item.rank}.</b> : null}
          {reducedName}
        </div>
      </div>
    </div>
  );
}
