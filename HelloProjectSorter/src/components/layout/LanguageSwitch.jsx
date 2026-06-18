import { Link } from 'react-router-dom';

export default function LanguageSwitch({ moduleId, language }) {
  const isJapanese = language === 'ja';
  const target = isJapanese ? `/${moduleId}` : `/${moduleId}/ja`;
  const label = isJapanese ? 'EN' : '日本語';

  return (
    <Link className="language-switch" to={target}>
      {label}
    </Link>
  );
}
