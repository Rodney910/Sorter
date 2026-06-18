export default function NeonCard({ children, className = '', ...props }) {
  return (
    <section className={`neon-card ${className}`} {...props}>
      {children}
    </section>
  );
}
