import { buildResultTextList } from '../../../utils/textUtils.js';
import { buildTimestampFilename } from '../../../utils/timeUtils.js';

export function createResultText(finalCharacters) {
  return buildResultTextList(finalCharacters);
}

export function createResultFilename(state) {
  return buildTimestampFilename('sort', state.timestamp + state.timeTaken);
}
