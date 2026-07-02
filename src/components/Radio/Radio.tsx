import { useEffect, useState, type ChangeEvent, type InputHTMLAttributes } from 'react';
import './Radio.css';

export type RadioStatus = 'inactive' | 'active';

export type RadioVisualState = 'default' | 'hover' | 'pressed';

export type RadioProps = {
  label?: string;
  status?: RadioStatus;
  disabled?: boolean;
  /**
   * Storybook-only visual state override to display hover/pressed static examples.
   * Keep undefined in real app usage.
   */
  visualState?: RadioVisualState;
  showFocus?: boolean;
  value?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'disabled'>;

export function Radio({
  label = 'Radio button',
  status = 'active',
  disabled = false,
  visualState,
  showFocus = false,
  className = '',
  id,
  value,
  ...rest
}: RadioProps) {
  const [currentStatus, setCurrentStatus] = useState<RadioStatus>(status);

  useEffect(() => {
    setCurrentStatus(status);
  }, [status]);

  const inputId = id ?? `spark-radio-${Math.random().toString(36).slice(2, 9)}`;
  const checked = currentStatus === 'active';
  const hasLabel = label.length > 0;
  const onChangeFromProps = rest.onChange;

  const rootClasses = [
    'spark-radio',
    `spark-radio-${currentStatus}`,
    disabled ? 'spark-radio-disabled' : '',
    visualState ? `spark-radio-state-${visualState}` : '',
    showFocus ? 'spark-radio-show-focus' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      setCurrentStatus('active');
    }
    onChangeFromProps?.(event);
  };

  return (
    <label className={rootClasses} htmlFor={inputId}>
      <input
        id={inputId}
        className="spark-radio-input"
        type="radio"
        checked={checked}
        disabled={disabled}
        value={value}
        onChange={handleChange}
        {...rest}
      />
       <span className="spark-radio-control" aria-hidden="true">
        {checked ? (
          <span className="spark-radio-dot" />
        ) : (
          <svg
            className="spark-radio-plate"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="7" cy="7" r="6.5" className="spark-radio-plate-shape" />
          </svg>
        )}
      </span>
      {hasLabel ? <span className="spark-radio-label">{label}</span> : null}
      {showFocus ? <span className="spark-radio-focus" aria-hidden="true" /> : null}
    </label>
  );
}
