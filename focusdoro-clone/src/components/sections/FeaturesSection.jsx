import { FEATURES } from '../../constants/features';

const ICONS = {
  obs: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#6366f1" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  timer: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#6366f1" strokeWidth="2">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  task: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#6366f1" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  theme: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#6366f1" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path strokeLinecap="round" d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
    </svg>
  ),
  css: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#6366f1" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  sync: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#6366f1" strokeWidth="2">
      <polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 .49-4.5" />
    </svg>
  ),
};

export default function FeaturesSection() {
  return (
    <section
      id="features"
      style={{ background: 'var(--sec1-bg)', padding: 'clamp(32px, 6vw, 48px) clamp(12px, 4vw, 16px)', transition: 'background .3s' }}
    >
      <div className="max-w-5xl mx-auto">
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '3px 12px',
              border: '1.5px solid #6366f1',
              borderRadius: '99px',
              fontSize: '.7rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '.08em',
              color: '#6366f1',
              marginBottom: '12px',
            }}
          >
            Features
          </span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 1.875rem)', fontWeight: 800, color: 'var(--body-text)', marginBottom: '10px' }}>
            Everything you need to stay focused
          </h2>
          <p style={{ fontSize: '.9rem', color: 'var(--label-c)', maxWidth: '480px', margin: '0 auto' }}>
            Set up in under 60 seconds. No account required to start.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '20px',
          }}
        >
          {FEATURES.map((feat) => (
            <div
              key={feat.icon}
              className="feat-card"
              style={{
                background: 'var(--feat-bg)',
                border: '1px solid var(--feat-border)',
                borderRadius: '20px',
                padding: '24px',
                boxShadow: '0 1px 3px rgba(0,0,0,.04)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: 'rgba(99,102,241,.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                {ICONS[feat.icon]}
              </div>
              <h3 style={{ fontWeight: 700, fontSize: '.9375rem', color: 'var(--body-text)', marginBottom: '6px' }}>
                {feat.title}
              </h3>
              <p style={{ fontSize: '.875rem', color: 'var(--label-c)', lineHeight: 1.5, flex: 1 }}>
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
