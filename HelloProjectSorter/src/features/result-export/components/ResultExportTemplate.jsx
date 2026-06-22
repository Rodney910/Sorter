import { reduceTextWidth } from '../../../utils/textUtils.js';
import '../styles/result-export.css';

// Mirrors the desktop export proportions in result-export.css.
// Keep these values aligned when adjusting card size, row gap or panel padding.
const RESULT_EXPORT_LAYOUT = {
  cardWidth: 150,
  rowGap: 10,
  panelPadding: 18,
  minWidth: 240,
};

function getResultExportWidth(rows) {
  const maxCardsPerRow = Math.max(1, ...rows.map((row) => row.length));
  const cardsWidth = RESULT_EXPORT_LAYOUT.cardWidth * maxCardsPerRow;
  const gapsWidth = RESULT_EXPORT_LAYOUT.rowGap * (maxCardsPerRow - 1);
  const panelPadding = RESULT_EXPORT_LAYOUT.panelPadding * 2;

  return Math.max(RESULT_EXPORT_LAYOUT.minWidth, cardsWidth + gapsWidth + panelPadding);
}

function ResultExportCard({ entry }) {
  if (entry.isEmpty) {
    return (
      <div className="result-export__card result-export__card--empty">
        <span className="result-export__placeholder" />
      </div>
    );
  }

  // Matches the current desktop sorter measurement so exported names truncate in the same place.
  const reducedName = reduceTextWidth(entry.name, '12px Arial', 160);

  return (
    <div className="result-export__card result-export__card--image" style={{ borderColor: entry.borderColor }}>
      {entry.showImage && entry.imageSrc ? (
        <img
          src={entry.imageSrc}
          alt=""
          className="result-export__image"
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
        />
      ) : null}

      <div className="result-export__caption">
        {entry.showImage ? null : <span className="result-export__rank">{entry.rank}</span>}
        <span className="result-export__name">
          {entry.showImage ? <strong>{entry.rank}. </strong> : null}
          {reducedName}
        </span>
      </div>
    </div>
  );
}

export default function ResultExportTemplate({ model }) {
  const resultWidth = getResultExportWidth(model.rows);

  return (
    <section
      className="result-export"
      data-result-export
      lang={model.language || 'en'}
      style={{ '--result-export-width': `${resultWidth}px` }}
    >
      <h2 className="result-export__title">{model.resultTitle}</h2>

      {model.rows.length === 0 && model.emptyMessage ? (
        <p className="result-export__empty-message">{model.emptyMessage}</p>
      ) : null}

      {model.rows.map((row, rowIndex) => (
        <div className="result-export__row" key={`export-row-${rowIndex + 1}`}>
          {row.map((entry, entryIndex) => (
            <ResultExportCard
              key={`${rowIndex + 1}-${entryIndex + 1}-${entry.rank}`}
              entry={entry}
            />
          ))}
        </div>
      ))}
    </section>
  );
}
