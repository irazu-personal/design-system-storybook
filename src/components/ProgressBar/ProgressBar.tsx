import './ProgressBar.css';

export type ProgressBarType = 'default' | 'error' | 'disabled';

export type ProgressBarProps = {
  value?: number;
  type?: ProgressBarType;
  showPercentage?: boolean;
  className?: string;
};

export function ProgressBar({
  value = 0,
  type = 'default',
  showPercentage = true,
  className = '',
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));
  const disabled = type === 'disabled';

  const rootClasses = [
    'spark-progress-bar',
    `spark-progress-bar-type-${type}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={rootClasses}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clamped}
      aria-disabled={disabled || undefined}
    >
      <div className="spark-progress-bar-track">
        <div className="spark-progress-bar-fill" style={{ width: `${clamped}%` }} />
      </div>
      {showPercentage ? <span className="spark-progress-bar-label">{clamped}%</span> : null}
    </div>
  );
}
