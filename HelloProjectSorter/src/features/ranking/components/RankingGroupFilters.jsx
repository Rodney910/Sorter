export default function RankingGroupFilters({ options, activeGroups, onSelect }) {
  return (
    <div className="groups-filter" id="extra-groups">
      {options.map((option) => (
        <button
          type="button"
          key={option.key}
          className="group-btn"
          data-checked={activeGroups.has(option.key) ? '1' : '0'}
          onClick={() => onSelect(option.key)}
        >
          {option.name}
        </button>
      ))}
    </div>
  );
}
