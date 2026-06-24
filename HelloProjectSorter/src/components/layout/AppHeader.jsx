import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';

const navItems = [
  { label: 'Idols Sorter', to: '/idols' },
  { label: 'Songs Sorter', to: '/songs' },
  { label: 'Ranking', to: '/ranking' },
];

export default function AppHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const closeDrawer = () => setOpen(false);

  return (
    <AppBar position="sticky" elevation={0} className="app-header">
      <Toolbar className="app-toolbar">
        <RouterLink to="/" className="brand-link" aria-label="Hello! Project Sorter home">
          <span className="brand-logo">
            <img src="/assets/icons/Hermandad.png" alt="" onError={(event) => event.currentTarget.remove()} />
          </span>
          <Typography component="span" className="brand-title">
            Hello! Project Sorter & Rankings
          </Typography>
        </RouterLink>

        <Box className="desktop-nav">
          {navItems.map((item) => (
            <Button
              key={item.to}
              component={RouterLink}
              to={item.to}
              className={`nav-button${location.pathname.startsWith(item.to) ? ' active' : ''}`}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <IconButton className="mobile-menu-button" aria-label="Open navigation" onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={open} onClose={closeDrawer} PaperProps={{ className: 'mobile-drawer' }}>
        <Box className="drawer-header">
          <Typography className="drawer-title">Navigation</Typography>
          <IconButton aria-label="Close navigation" onClick={closeDrawer}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItemButton key={item.to} component={RouterLink} to={item.to} onClick={closeDrawer}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}
