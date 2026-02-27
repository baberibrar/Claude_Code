import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

export default function Navbar({ onOpenSettings }) {
  const { theme, toggleTheme } = useTheme();

  const user = (() => {
    try {
      const data = localStorage.getItem('fd-user');
      return data ? JSON.parse(data) : null;
    } catch { return null; }
  })();

  const handleLogout = () => {
    localStorage.removeItem('fd-user');
    window.location.reload();
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 30,
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid var(--nav-border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontWeight: 800,
            fontSize: '.9375rem',
            textDecoration: 'none',
            color: 'var(--body-text)',
            flexShrink: 0,
          }}
        >
          <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" stroke="#6366f1" strokeWidth="2.5" />
            <path d="M16 9v7l4 4" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Focusdoro
        </Link>

        {/* Nav links */}
        <nav className="hidden sm:flex items-center gap-0.5">
          <a
            href="#features"
            style={{
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '.875rem',
              fontWeight: 500,
              textDecoration: 'none',
              color: 'var(--body-text)',
              background: 'transparent',
              transition: 'background .15s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = 'var(--ghost-hover)')}
            onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            Guides
          </a>
          <button
            onClick={onOpenSettings}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '.875rem',
              fontWeight: 500,
              border: 'none',
              background: 'transparent',
              color: 'var(--body-text)',
              cursor: 'pointer',
              transition: 'background .15s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = 'var(--ghost-hover)')}
            onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
          </button>
        </nav>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            title="Toggle dark mode"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: 'none',
              background: 'var(--ghost-bg)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--body-text)',
              transition: 'background .15s',
            }}
          >
            {theme === 'dark' ? (
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Sign in / User profile */}
          {user ? (
            <div className="flex items-center gap-2">
              {user.picture && (
                <img
                  src={user.picture}
                  alt={user.name}
                  style={{ width: 32, height: 32, borderRadius: '50%' }}
                />
              )}
              <span style={{ fontSize: '.875rem', fontWeight: 600, color: 'var(--body-text)' }}>
                {user.name}
              </span>
              <button
                onClick={handleLogout}
                style={{
                  padding: '6px 14px',
                  borderRadius: '10px',
                  fontSize: '.8125rem',
                  fontWeight: 600,
                  border: '1.5px solid var(--input-bdr)',
                  background: 'transparent',
                  color: 'var(--body-text)',
                  cursor: 'pointer',
                  transition: 'background .15s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = 'var(--ghost-hover)')}
                onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                Sign out
              </button>
            </div>
          ) : (
            <Link
              to="/signin"
              style={{
                background: '#6366f1',
                border: '1.5px solid #6366f1',
                color: '#fff',
                padding: '0 18px',
                height: '34px',
                borderRadius: '99px',
                fontSize: '.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'background .15s',
                display: 'inline-flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = '#4f46e5')}
              onMouseOut={(e) => (e.currentTarget.style.background = '#6366f1')}
            >
              Sign in
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
