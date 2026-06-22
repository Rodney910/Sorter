import CircularProgress from '@mui/material/CircularProgress';
import NeonButton from '../../../components/common/NeonButton.jsx';

export default function ResultExportButton({ isExporting, disabled = false, children, ...props }) {
  return (
    <NeonButton
      {...props}
      disabled={disabled || isExporting}
      aria-busy={isExporting}
      startIcon={
        isExporting ? (
          <CircularProgress size={17} thickness={5} color="inherit" aria-hidden="true" />
        ) : undefined
      }
    >
      {isExporting ? 'Saving Image...' : children}
    </NeonButton>
  );
}
