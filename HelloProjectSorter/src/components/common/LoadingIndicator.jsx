export default function LoadingIndicator({ label = 'Loading...' }) {
  return (
    <div className="loading-indicator" role="status" aria-live="polite">
      <span />
      <p>{label}</p>
    </div>
  );
}
