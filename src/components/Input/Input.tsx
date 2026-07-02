import { useEffect, useState, type InputHTMLAttributes } from 'react';
import { SparkIcon } from '../SparkIcon';
import { Label } from '../Label/Label';
import './Input.css';

export type InputSize = 'small' | 'medium' | 'large';
export type InputState = 'default' | 'hover' | 'danger' | 'disabled' | 'click-on';
export type InputFill = 'empty' | 'filled';

export type InputProps = {
  label?: string;
  helperText?: string;
  placeholder?: string;
  size?: InputSize;
  fill?: InputFill;
  danger?: boolean;
  disabled?: boolean;
  showLabel?: boolean;
  showHelperText?: boolean;
  showAsterisk?: boolean;
  showHelpIcon?: boolean;
  showPrefixIcon?: boolean;
  showInfoIcon?: boolean;
  showCharCount?: boolean;
  charCount?: number;
  maxChars?: number;
  /**
   * Storybook-only visual state override for static matrices.
   * Keep undefined in real app usage.
   */
  visualState?: InputState;
  showFocus?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'disabled'>;

export function Input({
  label = 'Label',
  helperText = 'Helper text',
  placeholder = 'Input',
  size = 'medium',
  fill,
  danger = false,
  disabled = false,
  showLabel = true,
  showHelperText = false,
  showAsterisk = false,
  showHelpIcon = false,
  showPrefixIcon = false,
  showInfoIcon = false,
  showCharCount = false,
  charCount = 0,
  maxChars = 40,
  visualState,
  showFocus = false,
  className = '',
  id,
  value,
  defaultValue,
  onChange,
  ...rest
}: InputProps) {
  const [internalValue, setInternalValue] = useState(
    (value as string | undefined) ?? (defaultValue as string | undefined) ?? '',
  );

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value as string);
    }
  }, [value]);

  const inputId = id ?? `spark-input-${Math.random().toString(36).slice(2, 9)}`;
  const resolvedState: InputState = disabled
    ? 'disabled'
    : visualState ?? (danger ? 'danger' : 'default');
  const isFocused = showFocus || resolvedState === 'click-on';
  const currentValue = value !== undefined ? String(value) : internalValue;
  const resolvedFill: InputFill = fill ?? (currentValue.length > 0 ? 'filled' : 'empty');
  const resolvedCharCount = charCount ?? currentValue.length;

  const rootClasses = [
    'spark-input',
    `spark-input-${size}`,
    `spark-input-state-${resolvedState}`,
    `spark-input-fill-${resolvedFill}`,
    danger ? 'spark-input-danger' : '',
    disabled ? 'spark-input-disabled' : '',
    isFocused ? 'spark-input-show-focus' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClasses}>
      {showLabel ? (
        <Label
          label={label}
          htmlFor={inputId}
          showAsterisk={showAsterisk}
          showIcon={showHelpIcon}
        />
      ) : null}
      <div className="spark-input-field-wrap">
        <div className="spark-input-field spark-input-anatomy">
          {showPrefixIcon ? <SparkIcon slug="user" size="small" className="spark-input-prefix-icon" /> : null}
          <input
            id={inputId}
            className="spark-input-control"
            placeholder={placeholder}
            disabled={disabled}
            value={value !== undefined ? value : internalValue}
            onChange={(event) => {
              if (value === undefined) {
                setInternalValue(event.target.value);
              }
              onChange?.(event);
            }}
            aria-invalid={danger || undefined}
            {...rest}
          />
          {showCharCount ? (
            <span className="spark-input-char-count" aria-hidden="true">
              {resolvedCharCount} / {maxChars}
            </span>
          ) : null}
          {showInfoIcon ? <SparkIcon slug="circle-info" size="small" className="spark-input-info-icon" /> : null}
        </div>
        {isFocused ? <span className="spark-input-focus" aria-hidden="true" /> : null}
      </div>
      {showHelperText ? <span className="spark-input-helper">{helperText}</span> : null}
    </div>
  );
}
