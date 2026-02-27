import { useState, useRef, useEffect } from 'react';
import Modal from '../common/Modal';

export default function AddTaskModal({ isOpen, onClose, onAdd }) {
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 60);
    } else {
      setText('');
    }
  }, [isOpen]);

  const handleAdd = () => {
    if (!text.trim()) return;
    onAdd(text);
    setText('');
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAdd();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="380px">
      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '16px', color: 'var(--body-text)' }}>
        Add a task
      </h3>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="What are you working on?"
        style={{
          width: '100%',
          padding: '10px 14px',
          borderRadius: '10px',
          border: '1.5px solid var(--input-bdr)',
          fontSize: '.9rem',
          fontFamily: 'inherit',
          background: 'var(--input-bg)',
          color: 'var(--body-text)',
          marginBottom: '16px',
          boxSizing: 'border-box',
        }}
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
        <button
          onClick={onClose}
          style={{
            padding: '8px 18px',
            borderRadius: '10px',
            border: '1.5px solid var(--input-bdr)',
            background: 'transparent',
            color: 'var(--body-text)',
            fontSize: '.875rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Cancel
        </button>
        <button
          onClick={handleAdd}
          style={{
            padding: '8px 18px',
            borderRadius: '10px',
            border: 'none',
            background: '#6366f1',
            color: '#fff',
            fontSize: '.875rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Add
        </button>
      </div>
    </Modal>
  );
}
