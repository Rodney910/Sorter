import { DEFAULT_RESULT_IMAGE_COUNT } from '../../../utils/constants.js';

export const createInitialSorterState = () => ({
  status: 'idle',
  characterData: [],
  characterDataToSort: [],
  options: [],
  currentVersion: '',

  optTaken: [],
  optStr: '',
  suboptStr: '',

  timestamp: 0,
  timeTaken: 0,
  choices: '',
  timeError: false,

  sortedIndexList: [],
  recordDataList: [],
  parentIndexList: [],
  tiedDataList: [],

  leftIndex: 0,
  leftInnerIndex: 0,
  rightIndex: 0,
  rightInnerIndex: 0,
  battleNo: 1,
  sortedNo: 0,
  pointer: 0,

  previous: null,

  finalCharacters: [],
  resultRows: [],
  totalBattles: 0,
  loading: false,
  error: null,
  resultImageCount: DEFAULT_RESULT_IMAGE_COUNT,
  progressLabel: '',
  progressPercent: 0,
});
