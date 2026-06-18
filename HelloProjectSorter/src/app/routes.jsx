import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout.jsx';
import HomePage from '../features/home/HomePage.jsx';
import SorterPage from '../features/sorter/components/SorterPage.jsx';
import RankingPage from '../features/ranking/components/RankingPage.jsx';
import { moduleRegistry } from './moduleRegistry.js';

function SorterRoute({ moduleId, language = 'en' }) {
  const moduleConfig = moduleRegistry[moduleId];
  const dataset = moduleConfig.datasets[language] || moduleConfig.datasets.en;

  return (
    <SorterPage
      moduleId={moduleId}
      title={moduleConfig.title[language] || moduleConfig.title.en}
      dataset={dataset}
      imageRoot={moduleConfig.imageRoot}
      theme={moduleConfig.theme}
      language={language}
    />
  );
}

function RankingRoute({ language = 'en' }) {
  const moduleConfig = moduleRegistry.ranking;
  const dataset = moduleConfig.datasets[language] || moduleConfig.datasets.en;

  return (
    <RankingPage
      moduleId="ranking"
      title={moduleConfig.title[language] || moduleConfig.title.en}
      dataset={dataset}
      imageRoot={moduleConfig.imageRoot}
      theme={moduleConfig.theme}
      language={language}
    />
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/idols" element={<SorterRoute moduleId="idols" />} />
        <Route path="/idols/ja" element={<SorterRoute moduleId="idols" language="ja" />} />
        <Route path="/songs" element={<SorterRoute moduleId="songs" />} />
        <Route path="/songs/ja" element={<SorterRoute moduleId="songs" language="ja" />} />
        <Route path="/ranking" element={<RankingRoute />} />
        <Route path="/ranking/ja" element={<RankingRoute language="ja" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
