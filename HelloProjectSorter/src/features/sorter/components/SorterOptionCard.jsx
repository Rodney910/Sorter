import { Checkbox } from '@mui/material';
import { resolveImageSrc } from '../../../utils/imageUtils.js';

export default function SorterOptionCard({ optionKey, subopt, checked, disabled, imageRoot, version, onChange }) {
  const imageSrc = resolveImageSrc(subopt.img, { imageRoot, version });
  const cardClassName = [
    'option-item',
    'sorter-option-card',
    checked ? 'is-selected' : '',
    disabled ? 'disabled' : '',
    subopt.img ? 'has-image' : 'text-only',
  ].filter(Boolean).join(' ');

  return (
    <label className={cardClassName} title={subopt.tooltip || subopt.name}>
      <Checkbox
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange(optionKey, subopt.key, event.target.checked)}
        className="option-checkbox"
      />
      <span className="image-wrapper sorter-option-cardInner">
        {subopt.img ? (
          <>
            <img
              src={imageSrc}
              alt=""
              className="option-image sorter-option-image"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />
            <span className="option-text sorter-option-label">{subopt.name}</span>
          </>
        ) : (
          <span className="option-text2 sorter-option-textOnly">{subopt.name}</span>
        )}
      </span>
    </label>
  );
}
