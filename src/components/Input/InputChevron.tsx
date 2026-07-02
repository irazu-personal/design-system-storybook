import { SparkIcon } from '../SparkIcon';
import './InputChevron.css';

export type InputChevronProps = {
  open?: boolean;
  disabled?: boolean;
  className?: string;
};

/** Figma Input Chevron (`682:81164`) — 18×18 hit area, 16px icon, toggles up/down. */
export function InputChevron({ open = false, disabled = false, className = '' }: InputChevronProps) {
  const classes = [
    'spark-input-chevron',
    open ? 'spark-input-chevron-open' : 'spark-input-chevron-closed',
    disabled ? 'spark-input-chevron-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes} aria-hidden="true">
      <SparkIcon slug={open ? 'chevron-up' : 'chevron-down'} size="small" />
    </span>
  );
}
