import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

export default function SaveUrlDialog({ open, url, saveType, onClose }) {
  const copy = async () => {
    await navigator.clipboard.writeText(url);
  };

  const message =
    saveType === 'Last Result'
      ? 'You may use this URL to share this result, or click Load Last Result to view it again.'
      : 'You may click Load Progress after this to resume, or use this URL.';

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{saveType}</DialogTitle>
      <DialogContent>
        <p className="dialog-copy">{message}</p>
        <TextField value={url} fullWidth InputProps={{ readOnly: true }} />
      </DialogContent>
      <DialogActions>
        <Button onClick={copy}>Copy</Button>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
