import { Outlet, useLocation } from 'react-router-dom';
import AppHeader from './AppHeader.jsx';
import AppFooter from './AppFooter.jsx';

function getThemeFromPath(pathname) {
  if (pathname.startsWith('/idols')) return 'idols';
  if (pathname.startsWith('/songs')) return 'songs';
  if (pathname.startsWith('/ranking')) return 'ranking';
  return 'home';
}

export default function AppLayout() {
  const location = useLocation();
  const theme = getThemeFromPath(location.pathname);

  return (
    <div className={`app-shell theme-${theme}`}>
      <AppHeader />
      <main className="main-content">
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
}
