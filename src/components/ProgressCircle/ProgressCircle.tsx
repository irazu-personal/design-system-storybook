import './ProgressCircle.css';

export type ProgressCircleStatus = 'not-started' | 'in-progress' | 'finish';

export type ProgressCircleProps = {
  status?: ProgressCircleStatus;
  /** 0–100 arc length when `status="in-progress"`. */
  value?: number;
  className?: string;
};

const RADIUS = 9;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/** Stroked check aligned to the r=9 ring — same 2px weight as the circle stroke. */
const FINISH_CHECK_PATH = 'M9 12.25 L11.05 14.05 L15.1 10.4';

export function ProgressCircle({
  status = 'not-started',
  value = 65,
  className = '',
}: ProgressCircleProps) {
  const clamped = Math.min(100, Math.max(0, value));
  const dash = (CIRCUMFERENCE * clamped) / 100;

  const rootClasses = ['spark-progress-circle', className].filter(Boolean).join(' ');

  if (status === 'finish') {
    return (
      <span className={rootClasses} role="img" aria-label="Complete">
        <svg className="spark-progress-circle-svg" viewBox="0 0 24 24" aria-hidden="true">
          <circle className="spark-progress-circle-finish-ring" cx="12" cy="12" r={RADIUS} />
          <path className="spark-progress-circle-finish-check" d={FINISH_CHECK_PATH} />
        </svg>
      </span>
    );
  }

  return (
    <span
      className={rootClasses}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={status === 'in-progress' ? clamped : 0}
      aria-label={status === 'not-started' ? 'Not started' : 'In progress'}
    >
      <svg className="spark-progress-circle-svg" viewBox="0 0 24 24" aria-hidden="true">
        <circle className="spark-progress-circle-track" cx="12" cy="12" r={RADIUS} />
        {status === 'in-progress' ? (
          <circle
            className="spark-progress-circle-arc"
            cx="12"
            cy="12"
            r={RADIUS}
            strokeDasharray={`${dash} ${CIRCUMFERENCE}`}
          />
        ) : null}
      </svg>
    </span>
  );
}
