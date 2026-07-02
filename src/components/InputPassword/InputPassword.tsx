import { useId, useState } from 'react';
import { SparkIcon } from '../SparkIcon';
import { Label } from '../Label/Label';
import { TooltipTrigger } from '../Tooltip/TooltipTrigger';
import '../Input/Input.css';
import './InputPassword.css';

export type InputPasswordSize = 'small' | 'medium' | 'large';
export type InputPasswordState = 'default' | 'hover' | 'click-on' | 'disabled';
export type InputPasswordFill = 'empty' | 'filled';

export type InputPasswordProps = {
  label?: string;
  helperText?: string;
  placeholder?: string;
  size?: InputPasswordSize;
  fill?: InputPasswordFill;
  showLabel?: boolean;
  showAsterisk?: boolean;
  showHelpIcon?: boolean;
  showHelperText?: boolean;
  disabled?: boolean;
  visualState?: InputPasswordState;
  showFocus?: boolean;
  className?: string;
};

export function InputPassword({
  label = 'Label',
  helperText = 'Helper text',
  placeholder = 'Password',
  size = 'medium',
  fill,
  showLabel = true,
  showAsterisk = false,
  showHelpIcon = false,
  showHelperText = false,
  disabled = false,
  visualState,
  showFocus = false,
  className = '',
}: InputPasswordProps) {
  const inputId = useId();
  const [value, setValue] = useState('');
  const [visible, setVisible] = useState(false);
  const resolvedState = disabled ? 'disabled' : visualState ?? 'default';
  const isFocused = showFocus || resolvedState === 'click-on';
  const resolvedFill = fill ?? (value.length > 0 ? 'filled' : 'empty');

  const rootClasses = [
    'spark-input',
    'spark-input-password',
    `spark-input-${size}`,
    `spark-input-fill-${resolvedFill}`,
    `spark-input-state-${resolvedState}`,
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
        <div className="spark-input-anatomy spark-input-password-field">
          <input
            id={inputId}
            className="spark-input-control"
            type={visible ? 'text' : 'password'}
            placeholder={placeholder}
            disabled={disabled}
            value={fill === 'filled' && value.length === 0 ? '••••••••' : value}
            onChange={(event) => setValue(event.target.value)}
          />
          <TooltipTrigger text={visible ? 'Hide password' : 'Show password'} disabled={disabled}>
            <button
              type="button"
              className="spark-input-password-toggle"
              aria-label={visible ? 'Hide password' : 'Show password'}
              disabled={disabled}
              onClick={() => setVisible((current) => !current)}
            >
              <SparkIcon slug={visible ? 'eye-closed' : 'eye'} size="small" />
            </button>
          </TooltipTrigger>
        </div>
        {isFocused ? <span className="spark-input-focus" aria-hidden="true" /> : null}
      </div>
      {showHelperText ? <span className="spark-input-helper">{helperText}</span> : null}
    </div>
  );
}
