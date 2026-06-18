import ResultGrid from './ResultGrid.jsx';
import { formatLegacyDate, msToReadableTime } from '../../../utils/timeUtils.js';

export default function SorterResults({ state, imageRoot, version, resultRef }) {
  if (state.status !== 'finished') return null;

  const completedAt = state.timestamp + state.timeTaken;

  return (
    <section className="sorter-results">
      <div className="time taken">
        <span>This sorter was completed on {formatLegacyDate(completedAt)}.</span>
        <br />
        <span>It took {msToReadableTime(state.timeTaken)} to complete.</span>
      </div>
      <ResultGrid rows={state.resultRows} imageRoot={imageRoot} version={version} resultRef={resultRef} />
    </section>
  );
}
