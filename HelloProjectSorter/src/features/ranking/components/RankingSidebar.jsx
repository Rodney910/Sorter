import RankingSearch from './RankingSearch.jsx';
import RankingIdolList from './RankingIdolList.jsx';
import RankingGroupFilters from './RankingGroupFilters.jsx';

export default function RankingSidebar({
  search,
  onSearch,
  items,
  selectedIds,
  options,
  activeGroups,
  onGroupSelect,
  imageRoot,
  version,
  onToggle,
}) {
  return (
    <aside className="ranking-sidebar">
      <RankingSearch value={search} onChange={onSearch} />
      <RankingIdolList items={items} selectedIds={selectedIds} imageRoot={imageRoot} version={version} onToggle={onToggle} />
      <RankingGroupFilters options={options} activeGroups={activeGroups} onSelect={onGroupSelect} />
    </aside>
  );
}
