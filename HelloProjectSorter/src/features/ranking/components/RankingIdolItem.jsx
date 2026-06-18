import { resolveImageSrc } from '../../../utils/imageUtils.js';

export default function RankingIdolItem({ item, selected, imageRoot, version, onToggle }) {
  return (
    <button type="button" className={`idol-item${selected ? ' selected' : ''}`} onClick={() => onToggle(item)}>
      <img
        src={resolveImageSrc(item.img, { imageRoot, version })}
        alt=""
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />
      <span>{item.name}</span>
    </button>
  );
}
