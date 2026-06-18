import { Checkbox } from '@mui/material';
import SorterOptionCard from './SorterOptionCard.jsx';

export default function SorterOptionGroup({
  option,
  selection,
  imageRoot,
  version,
  disabled,
  onGroupChange,
  onSubChange,
}) {
  if (!Array.isArray(option.sub)) {
    return (
      <div className="large-option-item sorter-option-group-title">
        <label>
          <Checkbox checked={!!selection} disabled={disabled} onChange={(event) => onGroupChange(option.key, event.target.checked)} />
          {option.name}
        </label>
      </div>
    );
  }

  return (
    <section className="option-group">
      <div className="large-option-item sorter-option-group-title">
        <label title={option.tooltip || option.name}>
          <Checkbox
            checked={!!selection?.enabled}
            disabled={disabled}
            onChange={(event) => onGroupChange(option.key, event.target.checked)}
          />
          {option.name}
        </label>
      </div>

      <div className="option-grid">
        {option.sub.map((subopt) => (
          <SorterOptionCard
            key={subopt.key}
            optionKey={option.key}
            subopt={subopt}
            checked={!!selection?.sub?.[subopt.key]}
            disabled={disabled}
            imageRoot={imageRoot}
            version={version}
            onChange={onSubChange}
          />
        ))}
      </div>
    </section>
  );
}
