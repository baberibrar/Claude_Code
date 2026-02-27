export default function Modal({ isOpen, onClose, maxWidth = '420px', children }) {
  if (!isOpen) return null;

  return (
    <div
      className="modal-wrap open"
      onClick={onClose}
    >
      <div
        style={{
          background: 'var(--modal-bg)',
          borderRadius: '20px',
          padding: 'clamp(20px, 6vw, 28px) 24px',
          width: '100%',
          maxWidth,
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
