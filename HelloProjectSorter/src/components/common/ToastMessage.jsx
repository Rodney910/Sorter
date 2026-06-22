import { Alert, Snackbar } from '@mui/material';

const AUTO_HIDE_DURATION = {
  success: 3000,
  warning: 4500,
  error: 6000,
};

export default function ToastMessage({ open, message, severity = 'warning', onClose }) {
  const handleClose = (_event, reason) => {
    if (reason === 'clickaway') return;
    onClose?.();
  };

  return (
    <Snackbar
      key={`${severity}-${message}`}
      open={open}
      autoHideDuration={AUTO_HIDE_DURATION[severity] || AUTO_HIDE_DURATION.warning}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      className="toast-snackbar"
    >
      <Alert
        severity={severity}
        variant="filled"
        onClose={() => onClose?.()}
        className={`toast-alert toast-alert--${severity}`}
        role={severity === 'success' ? 'status' : 'alert'}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
