import { getMaxUsedSlot, getPyramidRows } from '../logic/rankingUtils.js';
import RankingPyramidSlot from './RankingPyramidSlot.jsx';

export default function RankingPyramid({ pyramidSlots, imageRoot, version, onRemove, resultRef }) {
  const maxUsed = getMaxUsedSlot(pyramidSlots);
  const hasItems = maxUsed > 0;

  return (
    <div className="results double-border pyramid-container" id="pyramid-container" ref={resultRef}>
      <h2>Ranking Result:</h2>
      {!hasItems ? <div className="pyramid-message">Select up to 15 idols</div> : null}

      {getPyramidRows().map((row, index) => {
        const layoutSize = row.length;
        const visibleCount = row.filter((slot) => slot <= maxUsed || pyramidSlots[slot]).length;
        const cardLimitSize = visibleCount > 0 && visibleCount < layoutSize ? Math.max(1, index) : undefined;

        return (
          <div
            className="result-grid-row pyramid-row"
            data-row={index + 1}
            data-row-size={visibleCount}
            data-layout-size={layoutSize}
            data-visible-count={visibleCount}
            data-card-limit-size={cardLimitSize}
            key={`pyramid-row-${index + 1}`}
          >
            {row.map((slot) => (
              <RankingPyramidSlot
                key={slot}
                slot={slot}
                item={pyramidSlots[slot]}
                hidden={slot > maxUsed && !pyramidSlots[slot]}
                imageRoot={imageRoot}
                version={version}
                onRemove={onRemove}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}
