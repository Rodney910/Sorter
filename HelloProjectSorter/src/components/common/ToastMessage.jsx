import { Snackbar } from '@mui/material';

export default function ToastMessage({ open, message, onClose }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={2200}
      onClose={onClose}
      message={message}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      ContentProps={{ className: 'toast-message' }}
    />
  );
}
