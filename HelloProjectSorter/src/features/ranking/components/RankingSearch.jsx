import { TextField } from '@mui/material';

export default function RankingSearch({ value, onChange }) {
  return (
    <TextField
      className="ranking-search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Search..."
      fullWidth
      size="small"
      inputProps={{ 'aria-label': 'Search idols' }}
    />
  );
}
