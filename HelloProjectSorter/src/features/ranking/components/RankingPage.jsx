import { useRef, useState } from 'react';
import LanguageSwitch from '../../../components/layout/LanguageSwitch.jsx';
import PageTitle from '../../../components/common/PageTitle.jsx';
import ParticlesBackground from '../../../components/particles/ParticlesBackground.jsx';
import ToastMessage from '../../../components/common/ToastMessage.jsx';
import NeonButton from '../../../components/common/NeonButton.jsx';
import { themeParticleColors } from '../../../utils/constants.js';
import { buildRankingExportModel } from '../../result-export/adapters/resultExportModel.js';
import ResultExportButton from '../../result-export/components/ResultExportButton.jsx';
import { exportResultImage } from '../../result-export/services/exportResultImage.jsx';
import { buildTimestampFilename } from '../../../utils/timeUtils.js';
import { useRanking } from '../hooks/useRanking.js';
import RankingPyramid from './RankingPyramid.jsx';
import RankingSidebar from './RankingSidebar.jsx';

export default function RankingPage({ moduleId, title, dataset, imageRoot, theme, language }) {
  const resultRef = useRef(null);
  const imageExportLockRef = useRef(false);
  const [isExportingImage, setIsExportingImage] = useState(false);
  const ranking = useRanking(dataset);

  const download = async () => {
    if (imageExportLockRef.current) return;

    imageExportLockRef.current = true;
    setIsExportingImage(true);
    ranking.setToast(null);

    try {
      const model = buildRankingExportModel({
        title,
        pyramidSlots: ranking.pyramidSlots,
        imageRoot,
        version: ranking.version,
        language,
      });

      await exportResultImage({ model, filename: buildTimestampFilename('pyramid', Date.now()) });
      ranking.setToast({ message: 'Image saved successfully.', severity: 'success' });
    } catch (error) {
      ranking.setToast({
        message: `Error generating image: ${error.message}`,
        severity: 'error',
      });
    } finally {
      imageExportLockRef.current = false;
      setIsExportingImage(false);
    }
  };

  return (
    <div className={`ranking-page theme-${theme}`}>
      <ParticlesBackground color={themeParticleColors[theme]} maxParticles={80} speed={0.6} />
      <section className="ranking-container main-container">
        <PageTitle title={title}>
          <LanguageSwitch moduleId={moduleId} language={language} />
        </PageTitle>

        <div className="ranking-layout">
          <section className="ranking-main">
            <div className="buttons ranking-actions">
              <ResultExportButton onClick={download} isExporting={isExportingImage}>
                Download
              </ResultExportButton>
              <NeonButton onClick={ranking.clear}>Clear</NeonButton>
            </div>
            <RankingPyramid
              pyramidSlots={ranking.pyramidSlots}
              imageRoot={imageRoot}
              version={ranking.version}
              onRemove={ranking.removeSlot}
              resultRef={resultRef}
            />
          </section>

          <RankingSidebar
            search={ranking.search}
            onSearch={ranking.setSearch}
            items={ranking.filteredItems}
            selectedIds={ranking.selectedIds}
            options={ranking.options}
            activeGroups={ranking.activeGroups}
            onGroupSelect={ranking.selectGroup}
            imageRoot={imageRoot}
            version={ranking.version}
            onToggle={ranking.toggleItem}
          />
        </div>
      </section>

      <div className="legacy-info">
        <p>
          By <a href="https://x.com/rodneyamarilla1">Nakajima</a> Modified from{' '}
          <a href="https://hello-project.github.io/?lang=ja">Hello! Project Ranking</a>
          <br />
          Data updated by <a href="https://x.com/rodneyamarilla1">Nakajima</a>
        </p>
      </div>

      <ToastMessage
        open={Boolean(ranking.toast)}
        message={ranking.toast?.message || ''}
        severity={ranking.toast?.severity}
        onClose={() => ranking.setToast(null)}
      />
    </div>
  );
}
