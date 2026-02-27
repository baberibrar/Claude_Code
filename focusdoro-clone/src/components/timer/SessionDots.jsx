export default function SessionDots({ completed, goal }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{ display: 'flex', gap: '6px' }}>
        {Array.from({ length: goal }, (_, i) => (
          <span
            key={i}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: i < completed ? '#6366f1' : 'var(--dot-empty)',
              transition: 'background .2s',
            }}
          />
        ))}
      </div>
      <span style={{ fontSize: '.8125rem', color: 'var(--muted-c)', fontWeight: 500 }}>
        {completed} / {goal} sessions
      </span>
    </div>
  );
}
