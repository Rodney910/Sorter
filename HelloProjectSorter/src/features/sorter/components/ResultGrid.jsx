import ResultGridItem from './ResultGridItem.jsx';
import { RESULT_ROW_LIMIT } from '../../../utils/constants.js';

export default function ResultGrid({ rows, imageRoot, version, resultRef }) {
  return (
    <div className="results double-border" ref={resultRef}>
      <h2>Ranking Result:</h2>
      {rows.map((row, rowIndex) => {
        const layoutSize = Math.min(rowIndex + 1, RESULT_ROW_LIMIT);

        return (
          <div className="result-grid-row" data-row-size={layoutSize} data-visible-count={row.length} key={`row-${rowIndex}`}>
            {row.map((item) => (
              <ResultGridItem key={`${item.rank}-${item.character.name}-${item.character.img}`} item={item} imageRoot={imageRoot} version={version} />
            ))}
          </div>
        );
      })}
    </div>
  );
}
