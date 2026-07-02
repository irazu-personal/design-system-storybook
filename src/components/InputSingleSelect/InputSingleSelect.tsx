import { useId } from 'react';
import { InputChevron } from '../Input/InputChevron';
import { SparkIcon } from '../SparkIcon';
import { Label } from '../Label/Label';
import '../Input/shared/inputSelect.css';

export type InputSingleSelectSize = 'small' | 'medium';
export type InputSingleSelectState = 'default' | 'hover' | 'pressed' | 'disabled';
export type InputSingleSelectFill = 'empty' | 'filled';

export type InputSingleSelectProps = {
  label?: string;
  placeholder?: string;
  text?: string;
  size?: InputSingleSelectSize;
  fill?: InputSingleSelectFill;
  showLabel?: boolean;
  showAsterisk?: boolean;
  showHelpIcon?: boolean;
  showPrefixIcon?: boolean;
  disabled?: boolean;
  open?: boolean;
  visualState?: InputSingleSelectState;
  showFocus?: boolean;
  onToggle?: () => void;
  className?: string;
};

export function InputSingleSelect({
  label = 'Label',
  placeholder = 'Input',
  text,
  size = 'medium',
  fill,
  showLabel = true,
  showAsterisk = false,
  showHelpIcon = false,
  showPrefixIcon = false,
  disabled = false,
  open = false,
  visualState,
  showFocus = false,
  onToggle,
  className = '',
}: InputSingleSelectProps) {
  const labelId = useId();
  const resolvedState = disabled ? 'disabled' : visualState ?? 'default';
  const isFocused = showFocus || resolvedState === 'pressed';
  const displayText = text ?? placeholder;
  const resolvedFill = fill ?? (text !== undefined && text.length > 0 ? 'filled' : 'empty');
  const isInteractive = Boolean(onToggle) && !disabled;

  const rootClasses = [
    'spark-input-select',
    `spark-input-select-${size}`,
    `spark-input-select-fill-${resolvedFill}`,
    `spark-input-select-state-${resolvedState}`,
    disabled ? 'spark-input-select-disabled' : '',
    isFocused ? 'spark-input-select-show-focus' : '',
    isInteractive ? 'spark-input-select-interactive' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleFieldClick = () => {
    if (isInteractive) {
      onToggle?.();
    }
  };

  return (
    <div className={rootClasses}>
      {showLabel ? (
        <Label
          id={labelId}
          label={label}
          showAsterisk={showAsterisk}
          showIcon={showHelpIcon}
        />
      ) : null}
      <div className="spark-input-select-field-wrap">
        <div
          className="spark-input-select-field"
          role="combobox"
          aria-labelledby={showLabel ? labelId : undefined}
          aria-disabled={disabled || undefined}
          aria-expanded={isInteractive ? open : undefined}
          tabIndex={isInteractive ? 0 : undefined}
          onClick={handleFieldClick}
          onKeyDown={(event) => {
            if (!isInteractive) {
              return;
            }
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              onToggle?.();
            }
          }}
        >
          {showPrefixIcon ? <SparkIcon slug="user" size="small" className="spark-input-select-prefix" /> : null}
          <span className="spark-input-select-value">{displayText}</span>
          <InputChevron open={open} disabled={disabled} className="spark-input-select-chevron" />
        </div>
        {isFocused ? <span className="spark-input-select-focus" aria-hidden="true" /> : null}
      </div>
    </div>
  );
}
