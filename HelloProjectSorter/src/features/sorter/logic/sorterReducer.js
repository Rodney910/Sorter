import { applyPick, buildFinalResults, undoPick } from './sorterEngine.js';
import { createInitialSorterState } from './sorterInitialState.js';

export function sorterReducer(state, action) {
  switch (action.type) {
    // Creates a fresh sorter run after options have been converted and filtered.
    case 'START_SORT':
      return action.payload;

    // Updates image preload progress while the battle state is already prepared.
    case 'IMAGES_LOADING':
      return {
        ...state,
        loading: true,
        status: 'loading',
        progressLabel: action.payload.label,
        progressPercent: action.payload.percent,
      };

    // Enables user choices after preload or replaces state with replayed save data.
    case 'IMAGES_LOADED':
    case 'LOAD':
      return {
        ...action.payload,
        loading: false,
      };

    // Applies a left, right or tie decision.
    case 'PICK':
      return applyPick(state, action.payload);

    // Restores the previous battle snapshot.
    case 'UNDO':
      return undoPick(state);

    // SAVE is intentionally state-neutral; persistence lives in useSorterStorage.
    case 'SAVE':
      return state;

    // Keeps result rows derived when the image display selector changes.
    case 'SET_RESULT_IMAGE_COUNT': {
      const resultImageCount = Number(action.payload);
      if (state.status !== 'finished') return { ...state, resultImageCount };
      const results = buildFinalResults(state, resultImageCount);
      return {
        ...state,
        resultImageCount,
        finalCharacters: results.finalCharacters,
        resultRows: results.rows,
      };
    }

    // Replaces option UI state in the hook; reducer stores only sorter run state.
    case 'SET_OPTIONS':
      return state;

    // DECODE_QUERY is implemented in the hook because it needs dataset/options context.
    case 'DECODE_QUERY':
      return state;

    // Clears all sorter runtime state.
    case 'RESET':
      return createInitialSorterState();

    case 'ERROR':
      return {
        ...state,
        status: 'idle',
        loading: false,
        error: action.payload,
      };

    // FINISH is available for explicit completion flows, though PICKS finish naturally.
    case 'FINISH':
      return { ...state, status: 'finished', timeTaken: action.payload.timeTaken };

    default:
      return state;
  }
}
