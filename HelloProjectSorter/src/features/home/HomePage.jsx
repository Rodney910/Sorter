import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ParticlesBackground from '../../components/particles/ParticlesBackground.jsx';
import HomeMenuCard from './HomeMenuCard.jsx';

const cards = [
  {
    to: '/idols',
    theme: 'idols',
    Icon: StarRoundedIcon,
    iconColor: '#9ff3ff',
    glow: 'rgba(0, 229, 255, 0.55)',
    title: 'Idols Sorter',
    description: 'Rank Hello! Project members through head-to-head battles.',
  },
  {
    to: '/songs',
    theme: 'songs',
    Icon: MusicNoteRoundedIcon,
    iconColor: '#ef9cff',
    glow: 'rgba(213, 0, 249, 0.55)',
    title: 'Songs Sorter',
    description: 'Compare songs across generations and units.',
  },
  {
    to: '/ranking',
    theme: 'ranking',
    Icon: AutoAwesomeRoundedIcon,
    iconColor: '#ffaaa8',
    glow: 'rgba(255, 82, 82, 0.55)',
    title: 'Ranking',
    description: 'Create your own ranking freely, without battles.',
  },
];

export default function HomePage() {
  return (
    <div className="home-page">
      <ParticlesBackground color="#d4af37" maxParticles={160} speed={0.5} glow />
      <section className="home-container">
        <div className="home-title">
          <h1>Hello! Project Sorter & Rankings</h1>
          <p>Sort idols, songs, or build your own rankings</p>
        </div>

        <div className="menu-grid">
          {cards.map((card) => (
            <HomeMenuCard key={card.to} {...card} />
          ))}
        </div>
      </section>
    </div>
  );
}
