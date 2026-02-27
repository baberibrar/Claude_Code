import { MODES } from '../../constants/timer';

export default function ModeTabBar({ currentMode, onSwitchMode }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '4px',
        background: 'var(--tab-wrap)',
        border: '1px solid var(--tab-border)',
        borderRadius: '14px',
        padding: '4px',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 1px 4px rgba(0,0,0,.07)',
      }}
    >
      {Object.entries(MODES).map(([key, { label }]) => (
        <button
          key={key}
          className="mode-tab"
          onClick={() => onSwitchMode(key)}
          style={{
            padding: currentMode === key ? '6px 20px' : '6px 16px',
            background: currentMode === key ? '#6366f1' : 'var(--tab-idle)',
            color: currentMode === key ? '#fff' : 'var(--tab-idle-c)',
            fontWeight: currentMode === key ? 600 : 500,
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
