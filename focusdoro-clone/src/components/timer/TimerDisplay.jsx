import { formatTime } from '../../utils/formatTime';

export default function TimerDisplay({ remainingSec }) {
  return (
    <span className="timer-display">
      {formatTime(remainingSec)}
    </span>
  );
}
