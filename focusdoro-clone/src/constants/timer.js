export const MODES = {
  focus: { label: 'Focus', default: 25 },
  short: { label: 'Short Break', default: 5 },
  long:  { label: 'Long Break', default: 15 },
};

export const CIRCUMFERENCE = 2 * Math.PI * 118; // ~741.42

export const RING_COLORS = {
  focus: '#6366f1',
  short: '#10b981',
  long:  '#f59e0b',
};

export const DEFAULT_SETTINGS = {
  focusDuration: 25,
  shortBreakDuration: 5,
  longBreakDuration: 15,
  sessionsGoal: 4,
  soundEnabled: true,
  autoStartBreaks: false,
};
