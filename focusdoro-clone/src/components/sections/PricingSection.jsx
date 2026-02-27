import { FREE_FEATURES, PRO_FEATURES } from '../../constants/pricing';

function CheckIcon({ color = '#22c55e' }) {
  return (
    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" style={{ background: 'var(--sec2-bg)', padding: 'clamp(32px, 6vw, 48px) clamp(12px, 4vw, 16px)', transition: 'background .3s' }}>
      <div className="max-w-4xl mx-auto">
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
            Pricing
          </span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 1.875rem)', fontWeight: 800, color: 'var(--body-text)', marginBottom: '10px' }}>
            Simple, transparent pricing
          </h2>
          <p style={{ fontSize: '.9rem', color: 'var(--label-c)' }}>
            Start free. Upgrade when you want more.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {/* Free tier */}
          <div
            style={{
              background: 'var(--feat-bg)',
              border: '1px solid var(--feat-border)',
              borderRadius: '20px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 1px 3px rgba(0,0,0,.04)',
              transition: 'background .3s, border-color .3s',
            }}
          >
            <p style={{ fontSize: '.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--muted-c)', marginBottom: '10px' }}>Free</p>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', marginBottom: '24px' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--body-text)' }}>$0</span>
              <span style={{ fontSize: '.875rem', color: 'var(--muted-c)', marginBottom: '6px' }}>/month</span>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px', flex: 1 }}>
              {FREE_FEATURES.map((feat) => (
                <li key={feat} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '.875rem', color: 'var(--body-text)' }}>
                  <CheckIcon />
                  {feat}
                </li>
              ))}
            </ul>
            <button
              style={{
                border: '1.5px solid #6366f1',
                color: '#6366f1',
                background: 'transparent',
                borderRadius: '12px',
                width: '100%',
                padding: '11px',
                fontSize: '.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background .15s, color .15s',
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = '#6366f1'; e.currentTarget.style.color = '#fff'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#6366f1'; }}
            >
              Get started free
            </button>
          </div>

          {/* Pro tier */}
          <div
            style={{
              background: '#6366f1',
              borderRadius: '20px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(99,102,241,.30)',
            }}
          >
            <span style={{ position: 'absolute', top: '18px', right: '18px', background: '#22c55e', color: '#fff', fontSize: '.7rem', fontWeight: 700, padding: '3px 10px', borderRadius: '99px' }}>
              Save 33%
            </span>
            <p style={{ fontSize: '.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: 'rgba(255,255,255,.65)', marginBottom: '10px' }}>Pro</p>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', marginBottom: '4px' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff' }}>$6</span>
              <span style={{ fontSize: '.875rem', color: 'rgba(255,255,255,.6)', marginBottom: '6px' }}>/mo</span>
            </div>
            <p style={{ fontSize: '.8125rem', color: 'rgba(255,255,255,.5)', marginBottom: '24px' }}>or $48 billed yearly</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px', flex: 1 }}>
              {PRO_FEATURES.map((feat) => (
                <li key={feat} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '.875rem', color: 'rgba(255,255,255,.9)' }}>
                  <CheckIcon color="rgba(255,255,255,.7)" />
                  {feat}
                </li>
              ))}
            </ul>
            <button
              style={{
                border: '1.5px solid rgba(255,255,255,.3)',
                color: '#fff',
                background: 'rgba(255,255,255,.12)',
                borderRadius: '12px',
                width: '100%',
                padding: '11px',
                fontSize: '.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background .15s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,.22)')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,.12)')}
            >
              Upgrade to Pro
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
