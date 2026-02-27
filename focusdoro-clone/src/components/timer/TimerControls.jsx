export default function TimerControls({ isRunning, buttonLabel, onToggle, onReset, onSkip }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      {/* Reset */}
      <button
        onClick={onReset}
        title="Reset"
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: 'none',
          background: 'transparent',
          color: 'var(--muted-c)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'color .15s',
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = 'var(--body-text)')}
        onMouseOut={(e) => (e.currentTarget.style.color = 'var(--muted-c)')}
      >
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </button>

      {/* Start / Pause */}
      <button
        onClick={onToggle}
        className={isRunning ? 'running' : ''}
        style={{
          padding: '14px 44px',
          borderRadius: '16px',
          border: 'none',
          background: '#6366f1',
          color: '#fff',
          fontSize: '1rem',
          fontWeight: 700,
          cursor: 'pointer',
          transition: 'background .15s, box-shadow .15s',
          boxShadow: '0 8px 20px rgba(99,102,241,.35)',
        }}
        onMouseOver={(e) => (e.currentTarget.style.background = '#4f46e5')}
        onMouseOut={(e) => (e.currentTarget.style.background = '#6366f1')}
      >
        {buttonLabel}
      </button>

      {/* Skip */}
      <button
        onClick={onSkip}
        title="Skip"
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: 'none',
          background: 'transparent',
          color: 'var(--muted-c)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'color .15s',
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = 'var(--body-text)')}
        onMouseOut={(e) => (e.currentTarget.style.color = 'var(--muted-c)')}
      >
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
