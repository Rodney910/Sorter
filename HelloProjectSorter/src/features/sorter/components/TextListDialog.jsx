import { useMemo } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { createResultText } from '../logic/resultBuilder.js';

export default function TextListDialog({ open, finalCharacters, onClose }) {
  const text = useMemo(() => createResultText(finalCharacters), [finalCharacters]);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Ranking Text List</DialogTitle>
      <DialogContent>
        <TextField value={text} multiline minRows={12} fullWidth InputProps={{ readOnly: true }} />
      </DialogContent>
      <DialogActions>
        <Button onClick={copy}>Copy</Button>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
