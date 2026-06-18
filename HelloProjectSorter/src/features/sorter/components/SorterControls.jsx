import { MenuItem, Select } from '@mui/material';
import LoadingIndicator from '../../../components/common/LoadingIndicator.jsx';
import NeonButton from '../../../components/common/NeonButton.jsx';

const imageOptions = Array.from({ length: 201 }, (_value, index) => index);

export default function SorterControls({
  state,
  storedSaveType,
  onStart,
  onLoad,
  onPick,
  onUndo,
  onSaveProgress,
  onSaveResult,
  onGenerateImage,
  onGenerateText,
  onResultImageCount,
}) {
  if (state.status === 'loading') {
    return <LoadingIndicator label={state.progressLabel || 'Loading...'} />;
  }

  if (state.status === 'sorting') {
    return (
      <div className="buttons sorter-buttons sorter-controls">
        <NeonButton className="sorter-action-button" onClick={() => onPick('tie')}>Tie</NeonButton>
        <NeonButton className="sorter-action-button" onClick={onUndo} disabled={!state.previous}>
          Undo
        </NeonButton>
        <NeonButton className="sorter-action-button" onClick={onSaveProgress}>Save Progress</NeonButton>
      </div>
    );
  }

  if (state.status === 'finished') {
    return (
      <div className="buttons sorter-buttons sorter-controls">
        <NeonButton className="sorter-action-button" onClick={onSaveResult}>Generate Result URL</NeonButton>
        <NeonButton className="sorter-action-button" onClick={onGenerateImage}>Generate Image</NeonButton>
        <NeonButton className="sorter-action-button" onClick={onGenerateText}>Generate Text List</NeonButton>
        <label className="image-selector">
          <span>Display Images on Result:</span>
          <Select
            size="small"
            value={state.resultImageCount}
            onChange={(event) => onResultImageCount(event.target.value)}
            className="image-count-select"
          >
            {imageOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </label>
      </div>
    );
  }

  return (
    <div className="buttons sorter-buttons sorter-controls">
      <NeonButton className="sorter-action-button" onClick={onStart}>Click to Start!</NeonButton>
      {storedSaveType ? <NeonButton className="sorter-action-button" onClick={onLoad}>Load {storedSaveType}</NeonButton> : null}
    </div>
  );
}
