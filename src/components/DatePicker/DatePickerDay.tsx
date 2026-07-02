import './DatePicker.css';

export type DatePickerDayState =
  | 'default'
  | 'hover'
  | 'current'
  | 'current-hover'
  | 'selected'
  | 'inactive'
  | 'range';

export type DatePickerDayProps = {
  label: string;
  state?: DatePickerDayState;
  /** When false, renders a non-interactive label (weekday headers). */
  interactive?: boolean;
  className?: string;
};

export function DatePickerDay({
  label,
  state = 'default',
  interactive = true,
  className = '',
}: DatePickerDayProps) {
  const isInactive = state === 'inactive';
  const isStaticVisualState =
    state === 'hover' ||
    state === 'selected' ||
    state === 'range' ||
    state === 'current-hover';
  const canInteract = interactive && !isInactive && !isStaticVisualState;

  const classes = [
    'spark-date-picker-day',
    isInactive ? 'spark-date-picker-day-inactive' : '',
    state === 'current' || state === 'current-hover' ? 'spark-date-picker-day-current' : '',
    state === 'current-hover' ? 'spark-date-picker-day-current-hover' : '',
    state === 'selected' ? 'spark-date-picker-day-selected' : '',
    state === 'hover' ? 'spark-date-picker-day-hover' : '',
    state === 'range' ? 'spark-date-picker-day-range' : '',
    canInteract ? 'spark-date-picker-day-interactive' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (canInteract) {
    return (
      <button type="button" className={classes} aria-label={label}>
        {label}
      </button>
    );
  }

  return <span className={classes}>{label}</span>;
}
