import { useId, useState } from 'react';
import { Button } from '../Button/Button';
import { SparkIcon } from '../SparkIcon';
import { Label } from '../Label/Label';
import './InputTextArea.css';

export type InputTextAreaSize = 'small' | 'medium';
export type InputTextAreaState = 'default' | 'hover' | 'pressed' | 'disabled';
export type InputTextAreaFill = 'empty' | 'filled';

export type InputTextAreaProps = {
  label?: string;
  placeholder?: string;
  helperText?: string;
  value?: string;
  size?: InputTextAreaSize;
  fill?: InputTextAreaFill;
  showLabel?: boolean;
  showAsterisk?: boolean;
  showHelpIcon?: boolean;
  showHelperText?: boolean;
  /** Bundled with showCharCount in Figma (.Input-Show-Count). */
  showExpand?: boolean;
  showCharCount?: boolean;
  charCount?: number;
  maxChars?: number;
  disabled?: boolean;
  visualState?: InputTextAreaState;
  showFocus?: boolean;
  className?: string;
};

export function InputTextArea({
  label = 'Label',
  placeholder = 'Input',
  helperText = 'Helper text',
  value,
  size = 'medium',
  fill,
  showLabel = true,
  showAsterisk = false,
  showHelpIcon = false,
  showHelperText = false,
  showExpand = false,
  showCharCount = false,
  charCount,
  maxChars = 40,
  disabled = false,
  visualState,
  showFocus = false,
  className = '',
}: InputTextAreaProps) {
  const fieldId = useId();
  const [internalValue, setInternalValue] = useState(value ?? '');
  const currentValue = value !== undefined ? value : internalValue;
  const resolvedFill: InputTextAreaFill = fill ?? (currentValue.length > 0 ? 'filled' : 'empty');
  const resolvedCharCount = charCount ?? currentValue.length;
  const resolvedState = disabled ? 'disabled' : visualState ?? 'default';
  const isFocused = showFocus || resolvedState === 'pressed';
  const showCountBar = showCharCount;
  const showExpandControl = showCountBar || showExpand;

  const rootClasses = [
    'spark-input-textarea',
    `spark-input-textarea-${size}`,
    `spark-input-textarea-fill-${resolvedFill}`,
    `spark-input-textarea-state-${resolvedState}`,
    disabled ? 'spark-input-textarea-disabled' : '',
    isFocused ? 'spark-input-textarea-show-focus' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const boxClasses = [
    'spark-input-textarea-box',
    showCountBar ? 'spark-input-textarea-has-count' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClasses}>
      {showLabel ? (
        <Label
          label={label}
          htmlFor={fieldId}
          showAsterisk={showAsterisk}
          showIcon={showHelpIcon}
        />
      ) : null}
      <div className="spark-input-textarea-wrap">
        <div className={boxClasses}>
          <textarea
            id={fieldId}
            className="spark-input-textarea-field"
            placeholder={placeholder}
            disabled={disabled}
            value={currentValue}
            onChange={(event) => {
              if (value === undefined) {
                setInternalValue(event.target.value);
              }
            }}
          />
          {showCountBar ? (
            <div className="spark-input-textarea-show-count">
              {showExpandControl ? (
                <Button
                  type="button"
                  size="tiny"
                  variant="tertiary"
                  className="spark-input-textarea-expand"
                  disabled={disabled}
                  startIcon={<SparkIcon slug="viewport-tall" size="small" />}
                >
                  Expand
                </Button>
              ) : null}
              <span className="spark-input-textarea-count" aria-live="polite">
                <span>{resolvedCharCount}</span>
                <span>/</span>
                <span>{maxChars}</span>
              </span>
            </div>
          ) : null}
        </div>
        {isFocused ? <span className="spark-input-textarea-focus" aria-hidden="true" /> : null}
      </div>
      {showHelperText ? <span className="spark-input-textarea-helper">{helperText}</span> : null}
    </div>
  );
}
