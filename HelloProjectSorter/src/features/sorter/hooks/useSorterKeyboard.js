import { useEffect } from 'react';

function shouldIgnoreKeyboardEvent(event) {
  const target = event.target;
  if (!target) return false;

  const tag = target.tagName?.toLowerCase();
  return (
    tag === 'input' ||
    tag === 'textarea' ||
    tag === 'select' ||
    tag === 'button' ||
    target.isContentEditable
  );
}

export function useSorterKeyboard({ state, loading, onStart, onLoad, onPick, onUndo, onSaveProgress, onSaveResult, onImage, onText }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (shouldIgnoreKeyboardEvent(event)) return;

      if (state.status === 'sorting' && !loading) {
        switch (event.key) {
          case 's':
          case '3':
            onSaveProgress();
            break;
          case 'h':
          case 'ArrowLeft':
            onPick('left');
            break;
          case 'l':
          case 'ArrowRight':
            onPick('right');
            break;
          case 'k':
          case '1':
          case 'ArrowUp':
            onPick('tie');
            break;
          case 'j':
          case '2':
          case 'ArrowDown':
            onUndo();
            break;
          default:
            break;
        }
      } else if (state.status === 'finished') {
        switch (event.key) {
          case 'k':
          case '1':
            onSaveResult();
            break;
          case 'j':
          case '2':
            onImage();
            break;
          case 's':
          case '3':
            onText();
            break;
          default:
            break;
        }
      } else {
        switch (event.key) {
          case 'Enter':
          case '1':
          case 's':
            onStart();
            break;
          case '2':
          case 'l':
            onLoad();
            break;
          default:
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [loading, onImage, onLoad, onPick, onSaveProgress, onSaveResult, onStart, onText, onUndo, state.status]);
}
