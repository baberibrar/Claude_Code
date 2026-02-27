import ProgressRing from './ProgressRing';
import TimerDisplay from './TimerDisplay';
import TimerControls from './TimerControls';
import SessionDots from './SessionDots';

export default function TimerCard({ timer, sessionsGoal }) {
  return (
    <div
      style={{
        background: 'var(--card-bg)',
        backdropFilter: 'blur(12px)',
        border: '1px solid var(--card-border)',
        borderRadius: '28px',
        boxShadow: 'var(--card-shadow)',
        padding: 'clamp(20px, 6vw, 28px) clamp(28px, 8vw, 40px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'clamp(16px, 4vw, 20px)',
        width: '100%',
        maxWidth: '480px',
        transition: 'background .3s, border-color .3s, box-shadow .3s',
      }}
    >
      <ProgressRing
        remainingSec={timer.remainingSec}
        totalSec={timer.totalSec}
        ringColor={timer.ringColor}
      >
        <TimerDisplay remainingSec={timer.remainingSec} />
      </ProgressRing>

      <TimerControls
        isRunning={timer.isRunning}
        buttonLabel={timer.buttonLabel}
        onToggle={timer.toggle}
        onReset={timer.reset}
        onSkip={timer.skip}
      />

      <SessionDots
        completed={timer.sessionsCompleted}
        goal={sessionsGoal}
      />
    </div>
  );
}
