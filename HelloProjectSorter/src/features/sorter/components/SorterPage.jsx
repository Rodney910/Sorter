import { useRef, useState } from 'react';
import LanguageSwitch from '../../../components/layout/LanguageSwitch.jsx';
import PageTitle from '../../../components/common/PageTitle.jsx';
import ParticlesBackground from '../../../components/particles/ParticlesBackground.jsx';
import ToastMessage from '../../../components/common/ToastMessage.jsx';
import { themeParticleColors } from '../../../utils/constants.js';
import { buildSorterExportModel } from '../../result-export/adapters/resultExportModel.js';
import { exportResultImage } from '../../result-export/services/exportResultImage.jsx';
import { createResultFilename } from '../logic/resultBuilder.js';
import { useSorter } from '../hooks/useSorter.js';
import { useSorterKeyboard } from '../hooks/useSorterKeyboard.js';
import SorterOptions from './SorterOptions.jsx';
import SorterProgress from './SorterProgress.jsx';
import SorterControls from './SorterControls.jsx';
import BattleView from './BattleView.jsx';
import SorterResults from './SorterResults.jsx';
import SaveUrlDialog from './SaveUrlDialog.jsx';
import TextListDialog from './TextListDialog.jsx';

export default function SorterPage({ moduleId, title, dataset, imageRoot, theme, language }) {
  const resultRef = useRef(null);
  const imageExportLockRef = useRef(false);
  const [textListOpen, setTextListOpen] = useState(false);
  const [isExportingImage, setIsExportingImage] = useState(false);
  const sorter = useSorter({ moduleId, language, dataset, imageRoot });
  const activeVersion = sorter.state.currentVersion || dataset.dataSetVersion;

  const generateImage = async () => {
    if (sorter.state.status !== 'finished' || imageExportLockRef.current) return;

    imageExportLockRef.current = true;
    setIsExportingImage(true);
    sorter.setToast(null);

    try {
      const model = buildSorterExportModel({
        title,
        state: sorter.state,
        imageRoot,
        version: activeVersion,
        language,
        theme,
      });

      await exportResultImage({ model, filename: createResultFilename(sorter.state) });
      sorter.setToast({ message: 'Image saved successfully.', severity: 'success' });
    } catch (error) {
      sorter.setToast({
        message: `Error generating image: ${error.message}`,
        severity: 'error',
      });
    } finally {
      imageExportLockRef.current = false;
      setIsExportingImage(false);
    }
  };

  useSorterKeyboard({
    state: sorter.state,
    loading: sorter.state.loading,
    onStart: sorter.startSort,
    onLoad: sorter.loadProgress,
    onPick: sorter.pick,
    onUndo: sorter.undo,
    onSaveProgress: () => sorter.saveProgress('Progress'),
    onSaveResult: () => sorter.saveProgress('Last Result'),
    onImage: generateImage,
    onText: () => setTextListOpen(true),
  });

  const isSortingLocked = sorter.state.status === 'loading' || sorter.state.status === 'sorting' || sorter.state.status === 'finished';
  const sorterControls = (
    <SorterControls
      state={sorter.state}
      storedSaveType={sorter.storedSaveType}
      onStart={sorter.startSort}
      onLoad={sorter.loadProgress}
      onPick={sorter.pick}
      onUndo={sorter.undo}
      onSaveProgress={() => sorter.saveProgress('Progress')}
      onSaveResult={() => sorter.saveProgress('Last Result')}
      onGenerateImage={generateImage}
      isExportingImage={isExportingImage}
      onGenerateText={() => setTextListOpen(true)}
      onResultImageCount={sorter.setResultImageCount}
    />
  );

  return (
    <div className={`sorter-page theme-${theme}`}>
      <ParticlesBackground color={themeParticleColors[theme]} maxParticles={80} speed={0.6} />
      <section className="sorter-container main-container">
        {sorter.state.status !== 'sorting' ? (
          <PageTitle title={title}>
            <LanguageSwitch moduleId={moduleId} language={language} />
          </PageTitle>
        ) : null}

        {sorter.state.status === 'loading' || sorter.state.status === 'sorting' ? (
          <SorterProgress label={sorter.state.progressLabel || `Round N°: ${sorter.state.battleNo}`} percent={sorter.state.progressPercent} />
        ) : null}

        <div className="sorter-stage">
          {sorter.state.status === 'sorting' ? (
            <BattleView
              currentBattle={sorter.currentBattle}
              imageRoot={imageRoot}
              version={activeVersion}
              onPick={sorter.pick}
              controls={sorterControls}
            />
          ) : (
            sorterControls
          )}
        </div>

        {sorter.state.error ? <p className="error-message">{sorter.state.error}</p> : null}

        {sorter.state.status === 'idle' || sorter.state.status === 'loading' ? (
          <SorterOptions
            options={sorter.options}
            selectedOptions={sorter.selectedOptions}
            imageRoot={imageRoot}
            version={activeVersion}
            disabled={isSortingLocked}
            onGroupChange={sorter.setGroupEnabled}
            onSubChange={sorter.setSubOption}
          />
        ) : null}

        <SorterResults state={sorter.state} imageRoot={imageRoot} version={activeVersion} resultRef={resultRef} />
      </section>

      <div className="legacy-info">
        <p>
          By <a href="https://x.com/rodneyamarilla1">Nakajima</a> Modified from{' '}
          <a href="https://github.com/execfera/charasort/">charasort by execfera</a>
          <br />
          Data updated by <a href="https://x.com/rodneyamarilla1">Nakajima</a>
        </p>
      </div>

      <SaveUrlDialog
        open={sorter.saveDialog.open}
        url={sorter.saveDialog.url}
        saveType={sorter.saveDialog.saveType}
        onClose={() => sorter.setSaveDialog({ open: false, url: '', saveType: '' })}
      />
      <TextListDialog open={textListOpen} finalCharacters={sorter.state.finalCharacters} onClose={() => setTextListOpen(false)} />
      <ToastMessage
        open={Boolean(sorter.toast)}
        message={sorter.toast?.message || ''}
        severity={sorter.toast?.severity}
        onClose={() => sorter.setToast(null)}
      />
    </div>
  );
}
