import TaskItem from './TaskItem';

export default function TaskPanel({ tasks, onToggle, onDelete, onOpenAdd }) {
  return (
    <div
      style={{
        background: 'var(--card-bg)',
        backdropFilter: 'blur(12px)',
        border: '1px solid var(--card-border)',
        borderRadius: '24px',
        boxShadow: '0 8px 24px -6px rgba(0,0,0,.08)',
        padding: 'clamp(16px, 4vw, 20px)',
        width: '100%',
        maxWidth: '480px',
        transition: 'background .3s, border-color .3s',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <span style={{ fontWeight: 600, fontSize: '.9375rem', color: 'var(--body-text)' }}>Tasks</span>
        <button
          onClick={onOpenAdd}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            background: 'transparent',
            border: 'none',
            color: '#6366f1',
            fontWeight: 600,
            fontSize: '.875rem',
            cursor: 'pointer',
            padding: '4px 8px',
            borderRadius: '8px',
            transition: 'background .15s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(99,102,241,.1)')}
          onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
        >
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Add task
        </button>
      </div>

      {/* Task list */}
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {tasks.length === 0 ? (
          <li style={{ fontSize: '.875rem', color: 'var(--muted-c)', textAlign: 'center', padding: '12px 0', fontStyle: 'italic' }}>
            No tasks yet — add one above
          </li>
        ) : (
          tasks.map((task) => (
            <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
          ))
        )}
      </ul>
    </div>
  );
}
