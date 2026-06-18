import idolsDatasetEn from '../data/idols/en/idolsR17062026.js';
import idolsDatasetJa from '../data/idols/ja/idolsR17062026.jp.js';
import songsDatasetEn from '../data/songs/en/songsR200824.js';
import songsDatasetJa from '../data/songs/ja/songsR200824.jp.js';
import rankingDatasetEn from '../data/ranking/en/extraR17062026.js';
import rankingDatasetJa from '../data/ranking/ja/extraR17062026.jp.js';

export const moduleRegistry = {
  idols: {
    id: 'idols',
    type: 'sorter',
    route: '/idols',
    title: {
      en: 'Hello! Project Member Sorter',
      ja: 'Hello! Project Member Sorter',
    },
    theme: 'idols',
    imageRoot: '/assets/idols/',
    datasets: {
      en: idolsDatasetEn,
      ja: idolsDatasetJa,
    },
  },
  songs: {
    id: 'songs',
    type: 'sorter',
    route: '/songs',
    title: {
      en: 'Hello! Project Songs Sorter',
      ja: 'Hello! Project Songs Sorter',
    },
    theme: 'songs',
    imageRoot: '/assets/songs/',
    datasets: {
      en: songsDatasetEn,
      ja: songsDatasetJa,
    },
  },
  ranking: {
    id: 'ranking',
    type: 'ranking',
    route: '/ranking',
    title: {
      en: 'Hello! Project Ranking',
      ja: 'Hello! Project Ranking',
    },
    theme: 'ranking',
    imageRoot: '/assets/idols/',
    datasets: {
      en: rankingDatasetEn,
      ja: rankingDatasetJa,
    },
  },
};
