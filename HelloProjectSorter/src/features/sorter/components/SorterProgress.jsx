export default function SorterProgress({ label, percent }) {
  return (
    <div className="progress-section">
      <span className="progressbattle">{label}</span>
      <div className="progressbar">
        <div className="progressfill" style={{ width: `${percent}%` }}>
          <span className="progresstext">{percent}%</span>
        </div>
      </div>
    </div>
  );
}
