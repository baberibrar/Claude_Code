export default function ToggleSwitch({ checked, onChange }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      className={`toggle-switch ${checked ? 'checked' : ''}`}
      onClick={() => onChange(!checked)}
    />
  );
}
