import ModeTabBar from '../timer/ModeTabBar';
import TimerCard from '../timer/TimerCard';
import TaskPanel from '../tasks/TaskPanel';

export default function HeroSection({ timer, sessionsGoal, tasks, onToggleTask, onDeleteTask, onOpenAddTask }) {
  return (
    <section
      style={{
        background: 'var(--hero-bg)',
        minHeight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 'clamp(20px, 5vw, 24px) clamp(12px, 4vw, 16px)',
        gap: 'clamp(12px, 3vw, 16px)',
        transition: 'background .3s',
      }}
    >
      <ModeTabBar currentMode={timer.currentMode} onSwitchMode={timer.switchMode} />

      <TimerCard timer={timer} sessionsGoal={sessionsGoal} />

      <TaskPanel
        tasks={tasks}
        onToggle={onToggleTask}
        onDelete={onDeleteTask}
        onOpenAdd={onOpenAddTask}
      />
    </section>
  );
}
