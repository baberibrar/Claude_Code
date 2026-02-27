import Modal from '../common/Modal';
import ToggleSwitch from './ToggleSwitch';
import { useSettings } from '../../context/SettingsContext';

export default function SettingsModal({ isOpen, onClose, onApplySettings }) {
  const { settings, updateSettings } = useSettings();

  const handleChange = (key, value) => {
    const newSettings = { ...settings, [key]: value };
    updateSettings({ [key]: value });
    onApplySettings(newSettings);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--body-text)' }}>Settings</h3>
        <button
          onClick={onClose}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted-c)', padding: '4px' }}
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Duration inputs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '20px' }} className="settings-grid">
        <div>
          <label style={{ display: 'block', fontSize: '.75rem', fontWeight: 600, color: 'var(--label-c)', marginBottom: '6px' }}>
            Focus (min)
          </label>
          <input
            type="number"
            min="1"
            max="60"
            value={settings.focusDuration}
            onChange={(e) => handleChange('focusDuration', Number(e.target.value))}
            style={{
              width: '100%',
              padding: '8px 10px',
              borderRadius: '10px',
              border: '1.5px solid var(--input-bdr)',
              background: 'var(--input-bg)',
              color: 'var(--body-text)',
              fontSize: '.9rem',
              fontFamily: 'inherit',
              textAlign: 'center',
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '.75rem', fontWeight: 600, color: 'var(--label-c)', marginBottom: '6px' }}>
            Short (min)
          </label>
          <input
            type="number"
            min="1"
            max="30"
            value={settings.shortBreakDuration}
            onChange={(e) => handleChange('shortBreakDuration', Number(e.target.value))}
            style={{
              width: '100%',
              padding: '8px 10px',
              borderRadius: '10px',
              border: '1.5px solid var(--input-bdr)',
              background: 'var(--input-bg)',
              color: 'var(--body-text)',
              fontSize: '.9rem',
              fontFamily: 'inherit',
              textAlign: 'center',
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '.75rem', fontWeight: 600, color: 'var(--label-c)', marginBottom: '6px' }}>
            Long (min)
          </label>
          <input
            type="number"
            min="1"
            max="60"
            value={settings.longBreakDuration}
            onChange={(e) => handleChange('longBreakDuration', Number(e.target.value))}
            style={{
              width: '100%',
              padding: '8px 10px',
              borderRadius: '10px',
              border: '1.5px solid var(--input-bdr)',
              background: 'var(--input-bg)',
              color: 'var(--body-text)',
              fontSize: '.9rem',
              fontFamily: 'inherit',
              textAlign: 'center',
            }}
          />
        </div>
      </div>

      {/* Sessions goal */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', fontSize: '.75rem', fontWeight: 600, color: 'var(--label-c)', marginBottom: '6px' }}>
          Sessions before long break
        </label>
        <input
          type="number"
          min="2"
          max="8"
          value={settings.sessionsGoal}
          onChange={(e) => handleChange('sessionsGoal', Number(e.target.value))}
          style={{
            width: '80px',
            padding: '8px 10px',
            borderRadius: '10px',
            border: '1.5px solid var(--input-bdr)',
            background: 'var(--input-bg)',
            color: 'var(--body-text)',
            fontSize: '.9rem',
            fontFamily: 'inherit',
            textAlign: 'center',
          }}
        />
      </div>

      {/* Divider */}
      <hr style={{ border: 'none', borderTop: '1px solid var(--divider)', margin: '20px 0' }} />

      {/* Toggles */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '.875rem', fontWeight: 600, color: 'var(--body-text)' }}>Sound alerts</span>
          <ToggleSwitch checked={settings.soundEnabled} onChange={(v) => handleChange('soundEnabled', v)} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '.875rem', fontWeight: 600, color: 'var(--body-text)' }}>Auto-start breaks</span>
          <ToggleSwitch checked={settings.autoStartBreaks} onChange={(v) => handleChange('autoStartBreaks', v)} />
        </div>
      </div>

      {/* Save button */}
      <button
        onClick={onClose}
        style={{
          width: '100%',
          padding: '11px',
          borderRadius: '12px',
          border: 'none',
          background: '#6366f1',
          color: '#fff',
          fontSize: '.9rem',
          fontWeight: 700,
          cursor: 'pointer',
          marginTop: '24px',
          transition: 'background .15s',
          boxShadow: '0 4px 14px rgba(99,102,241,.35)',
        }}
        onMouseOver={(e) => (e.currentTarget.style.background = '#4f46e5')}
        onMouseOut={(e) => (e.currentTarget.style.background = '#6366f1')}
      >
        Save
      </button>
    </Modal>
  );
}
