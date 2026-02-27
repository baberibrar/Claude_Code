export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task-row">
      {/* Checkbox */}
      <button
        type="button"
        className={`custom-checkbox ${task.done ? 'checked' : ''}`}
        onClick={() => onToggle(task.id)}
        aria-label={task.done ? 'Mark incomplete' : 'Mark complete'}
      >
        {task.done && (
          <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      {/* Task text */}
      <span
        className={task.done ? 'task-done' : ''}
        style={{ flex: 1, fontSize: '.9rem', color: 'var(--body-text)' }}
      >
        {task.text}
      </span>

      {/* Delete button */}
      <button
        onClick={() => onDelete(task.id)}
        title="Delete task"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--muted-c)',
          padding: '4px',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '6px',
          transition: 'color .15s',
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = '#ef4444')}
        onMouseOut={(e) => (e.currentTarget.style.color = 'var(--muted-c)')}
      >
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </li>
  );
}
