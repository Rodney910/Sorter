import BattleCard from './BattleCard.jsx';

export default function BattleView({ currentBattle, imageRoot, version, onPick, controls }) {
  return (
    <div className="battle-view sorter-battle-layout">
      <BattleCard side="left" item={currentBattle?.left} imageRoot={imageRoot} version={version} onPick={() => onPick('left')} />
      <div className="battle-controls">{controls}</div>
      <BattleCard side="right" item={currentBattle?.right} imageRoot={imageRoot} version={version} onPick={() => onPick('right')} />
    </div>
  );
}
