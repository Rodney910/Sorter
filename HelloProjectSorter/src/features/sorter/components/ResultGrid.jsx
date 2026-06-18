import ResultGridItem from './ResultGridItem.jsx';

export default function ResultGrid({ rows, imageRoot, version, resultRef }) {
  return (
    <div className="results double-border" ref={resultRef}>
      <h2>Ranking Result:</h2>
      {rows.map((row, rowIndex) => (
        <div className="result-grid-row" data-row-size={row.length} key={`row-${rowIndex}`}>
          {row.map((item) => (
            <ResultGridItem key={`${item.rank}-${item.character.name}-${item.character.img}`} item={item} imageRoot={imageRoot} version={version} />
          ))}
        </div>
      ))}
    </div>
  );
}
