import { useReducer, useEffect, useRef, useCallback } from 'react';
import { RING_COLORS } from '../constants/timer';
import { useSound } from './useSound';

function getModeDuration(mode, settings) {
  switch (mode) {
    case 'focus': return settings.focusDuration * 60;
    case 'short': return settings.shortBreakDuration * 60;
    case 'long':  return settings.longBreakDuration * 60;
    default:      return settings.focusDuration * 60;
  }
}

function timerReducer(state, action) {
  switch (action.type) {
    case 'TICK': {
      if (state.remainingSec <= 1) {
        return { ...state, remainingSec: 0, isRunning: false, sessionJustCompleted: true };
      }
      return { ...state, remainingSec: state.remainingSec - 1 };
    }
    case 'START':
      return { ...state, isRunning: true };
    case 'PAUSE':
      return { ...state, isRunning: false };
    case 'RESET': {
      const dur = getModeDuration(state.currentMode, action.settings);
      return { ...state, isRunning: false, totalSec: dur, remainingSec: dur, buttonLabel: 'Start' };
    }
    case 'SWITCH_MODE': {
      const dur = getModeDuration(action.mode, action.settings);
      return {
        ...state,
        currentMode: action.mode,
        totalSec: dur,
        remainingSec: dur,
        isRunning: false,
        buttonLabel: 'Start',
      };
    }
    case 'SESSION_COMPLETE': {
      const { settings } = action;
      let nextMode = state.currentMode;
      let sessions = state.sessionsCompleted;

      if (state.currentMode === 'focus') {
        sessions += 1;
        nextMode = sessions >= settings.sessionsGoal ? 'long' : 'short';
        if (sessions >= settings.sessionsGoal) sessions = 0;
      } else {
        nextMode = 'focus';
      }

      const dur = getModeDuration(nextMode, settings);
      return {
        ...state,
        currentMode: nextMode,
        totalSec: dur,
        remainingSec: dur,
        isRunning: settings.autoStartBreaks,
        sessionsCompleted: sessions,
        sessionJustCompleted: false,
        buttonLabel: settings.autoStartBreaks ? 'Pause' : 'Start',
      };
    }
    case 'CLEAR_SESSION_FLAG':
      return { ...state, sessionJustCompleted: false };
    case 'APPLY_SETTINGS': {
      if (state.isRunning) return state;
      const dur = getModeDuration(state.currentMode, action.settings);
      return { ...state, totalSec: dur, remainingSec: dur };
    }
    default:
      return state;
  }
}

export function useTimer(settings) {
  const [state, dispatch] = useReducer(timerReducer, {
    currentMode: 'focus',
    totalSec: settings.focusDuration * 60,
    remainingSec: settings.focusDuration * 60,
    isRunning: false,
    sessionsCompleted: 0,
    sessionJustCompleted: false,
    buttonLabel: 'Start',
  });

  const { playBeep } = useSound();
  const settingsRef = useRef(settings);
  settingsRef.current = settings;

  // Interval tick
  useEffect(() => {
    if (!state.isRunning) return;
    const id = setInterval(() => dispatch({ type: 'TICK' }), 1000);
    return () => clearInterval(id);
  }, [state.isRunning]);

  // Handle session complete
  useEffect(() => {
    if (state.sessionJustCompleted) {
      if (settingsRef.current.soundEnabled) playBeep();
      dispatch({ type: 'SESSION_COMPLETE', settings: settingsRef.current });
    }
  }, [state.sessionJustCompleted, playBeep]);

  // Update document title
  useEffect(() => {
    const m = Math.floor(state.remainingSec / 60);
    const s = state.remainingSec % 60;
    const time = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    document.title = `${time} – Focusdoro`;
  }, [state.remainingSec]);

  const toggle = useCallback(() => {
    dispatch({ type: state.isRunning ? 'PAUSE' : 'START' });
  }, [state.isRunning]);

  const reset = useCallback(() => {
    dispatch({ type: 'RESET', settings: settingsRef.current });
  }, []);

  const skip = useCallback(() => {
    if (settingsRef.current.soundEnabled) playBeep();
    dispatch({ type: 'SESSION_COMPLETE', settings: settingsRef.current });
  }, [playBeep]);

  const switchMode = useCallback((mode) => {
    dispatch({ type: 'SWITCH_MODE', mode, settings: settingsRef.current });
  }, []);

  const applySettings = useCallback((newSettings) => {
    dispatch({ type: 'APPLY_SETTINGS', settings: newSettings });
  }, []);

  return {
    currentMode: state.currentMode,
    remainingSec: state.remainingSec,
    totalSec: state.totalSec,
    isRunning: state.isRunning,
    sessionsCompleted: state.sessionsCompleted,
    buttonLabel: state.isRunning ? 'Pause' : (state.remainingSec < state.totalSec ? 'Resume' : 'Start'),
    ringColor: RING_COLORS[state.currentMode],
    toggle,
    reset,
    skip,
    switchMode,
    applySettings,
  };
}
