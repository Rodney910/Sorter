import SorterOptionGroup from './SorterOptionGroup.jsx';

export default function SorterOptions({
  options,
  selectedOptions,
  imageRoot,
  version,
  disabled,
  onGroupChange,
  onSubChange,
}) {
  return (
    <div id="options" className="options sorter-options">
      {options.map((option) => (
        <SorterOptionGroup
          key={option.key}
          option={option}
          selection={selectedOptions[option.key]}
          imageRoot={imageRoot}
          version={version}
          disabled={disabled}
          onGroupChange={onGroupChange}
          onSubChange={onSubChange}
        />
      ))}
    </div>
  );
}
