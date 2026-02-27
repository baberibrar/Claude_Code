import { TESTIMONIALS, SOCIAL_TAGS } from '../../constants/testimonials';

export default function TestimonialsSection() {
  return (
    <section style={{ background: 'var(--sec1-bg)', padding: 'clamp(32px, 6vw, 48px) clamp(12px, 4vw, 16px)', transition: 'background .3s' }}>
      <div className="max-w-5xl mx-auto" style={{ textAlign: 'center' }}>
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
          Testimonials
        </span>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 1.875rem)', fontWeight: 800, color: 'var(--body-text)', marginBottom: '32px' }}>
          Loved by creators & students
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              style={{
                background: 'var(--feat-bg)',
                border: '1px solid var(--feat-border)',
                borderRadius: '18px',
                padding: '28px 24px',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <p style={{ fontSize: '.9rem', color: 'var(--body-text)', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                {t.quote}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: t.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '.8125rem',
                  }}
                >
                  {t.initial}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '.875rem', color: 'var(--body-text)' }}>{t.name}</div>
                  <div style={{ fontSize: '.75rem', color: 'var(--muted-c)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
          {SOCIAL_TAGS.map((tag) => (
            <span
              key={tag}
              style={{
                padding: '6px 16px',
                borderRadius: '99px',
                fontSize: '.8125rem',
                fontWeight: 600,
                background: 'var(--ghost-bg)',
                color: 'var(--body-text)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
