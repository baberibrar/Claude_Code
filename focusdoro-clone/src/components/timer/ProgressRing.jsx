import { CIRCUMFERENCE } from '../../constants/timer';

export default function ProgressRing({ remainingSec, totalSec, ringColor, children }) {
  const offset = CIRCUMFERENCE * (1 - remainingSec / totalSec);

  return (
    <div className="ring-wrap">
      <svg className="ring-svg" viewBox="0 0 260 260">
        <circle
          cx="130" cy="130" r="118"
          fill="none"
          stroke="var(--ring-track)"
          strokeWidth="9"
        />
        <circle
          cx="130" cy="130" r="118"
          fill="none"
          className="ring-fg"
          stroke={ringColor}
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
        />
      </svg>
      {children}
    </div>
  );
}
