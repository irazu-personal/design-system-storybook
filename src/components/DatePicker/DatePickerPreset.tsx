import './DatePicker.css';

export type DatePickerPresetState = 'default' | 'hover' | 'click-on' | 'disabled';

export type DatePickerPresetProps = {
  label: string;
  state?: DatePickerPresetState;
  /**
   * Storybook-only visual state override for static matrix examples.
   * Prefer `state` when set explicitly.
   */
  visualState?: DatePickerPresetState;
  className?: string;
  onClick?: () => void;
};

export function DatePickerPreset({
  label,
  state = 'default',
  visualState,
  className = '',
  onClick,
}: DatePickerPresetProps) {
  const resolvedState = visualState ?? state;
  const isDisabled = resolvedState === 'disabled';

  const classes = [
    'spark-date-picker-preset',
    resolvedState === 'hover' ? 'spark-date-picker-preset-hover spark-date-picker-preset-state-hover' : '',
    resolvedState === 'click-on' ? 'spark-date-picker-preset-click-on spark-date-picker-preset-state-click-on' : '',
    resolvedState === 'disabled' ? 'spark-date-picker-preset-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button type="button" className={classes} disabled={isDisabled} onClick={onClick}>
      {label}
    </button>
  );
}
