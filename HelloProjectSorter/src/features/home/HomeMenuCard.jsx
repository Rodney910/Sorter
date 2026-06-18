import { Link } from 'react-router-dom';

export default function HomeMenuCard({ to, theme, Icon, iconColor, glow, title, description }) {
  return (
    <Link
      to={to}
      className={`menu-card ${theme}`}
      style={{ '--card-icon-color': iconColor, '--card-glow': glow }}
    >
      <div className="menu-icon" aria-hidden="true">
        <Icon fontSize="inherit" />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </Link>
  );
}
