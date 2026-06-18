import { Button } from '@mui/material';

export default function NeonButton({ children, className = '', ...props }) {
  return (
    <Button className={`neon-button ${className}`} variant="contained" {...props}>
      {children}
    </Button>
  );
}
