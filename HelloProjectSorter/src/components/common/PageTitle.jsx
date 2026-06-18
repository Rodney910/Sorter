export default function PageTitle({ title, children }) {
  return (
    <header className="page-title">
      <h1>{title}</h1>
      {children}
    </header>
  );
}
