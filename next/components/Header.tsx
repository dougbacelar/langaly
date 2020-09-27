export const Header = ({ children }: { children?: React.ReactNode }) => {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '2rem',
      }}>
      <a href="http://localhost:3000" style={{ fontSize: '2rem' }}>
        Langaly
      </a>
      {children}
    </header>
  );
};
