import { getItemId } from '../logic/rankingUtils.js';
import RankingIdolItem from './RankingIdolItem.jsx';

export default function RankingIdolList({ items, selectedIds, imageRoot, version, onToggle }) {
  return (
    <div className="extra-list" id="extra-list">
      {items.map((item) => (
        <RankingIdolItem
          key={getItemId(item)}
          item={item}
          selected={selectedIds.has(getItemId(item))}
          imageRoot={imageRoot}
          version={version}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
