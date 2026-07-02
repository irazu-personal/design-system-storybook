import { useEffect, useState, type ChangeEvent, type InputHTMLAttributes } from 'react';
import './Toggle.css';

export type ToggleSize = 'medium' | 'small';

export type ToggleVisualState = 'default' | 'pressed';

export type ToggleProps = {
  label?: string;
  active?: boolean;
  size?: ToggleSize;
  disabled?: boolean;
  /**
   * Storybook-only visual state override to display pressed static examples.
   * Keep undefined in real app usage.
   */
  visualState?: ToggleVisualState;
  showFocus?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'disabled'>;

export function Toggle({
  label,
  active = true,
  size = 'medium',
  disabled = false,
  visualState,
  showFocus = false,
  className = '',
  id,
  ...rest
}: ToggleProps) {
  const [isActive, setIsActive] = useState(active);

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  const inputId = id ?? `spark-toggle-${Math.random().toString(36).slice(2, 9)}`;
  const hasLabel = Boolean(label?.length);
  const onChangeFromProps = rest.onChange;

  const rootClasses = [
    'spark-toggle',
    `spark-toggle-${size}`,
    isActive ? 'spark-toggle-active' : 'spark-toggle-inactive',
    disabled ? 'spark-toggle-disabled' : '',
    visualState ? `spark-toggle-state-${visualState}` : '',
    showFocus ? 'spark-toggle-show-focus' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      setIsActive(event.target.checked);
    }
    onChangeFromProps?.(event);
  };

  return (
    <label className={rootClasses} htmlFor={inputId}>
      <input
        id={inputId}
        className="spark-toggle-input"
        type="checkbox"
        role="switch"
        checked={isActive}
        disabled={disabled}
        aria-checked={isActive}
        onChange={handleChange}
        {...rest}
      />
      <span className="spark-toggle-track" aria-hidden="true">
        <span className="spark-toggle-handle" />
      </span>
      {hasLabel ? <span className="spark-toggle-label">{label}</span> : null}
      {showFocus ? <span className="spark-toggle-focus" aria-hidden="true" /> : null}
    </label>
  );
}
