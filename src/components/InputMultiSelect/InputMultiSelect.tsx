import { useId } from 'react';
import { InputChevron } from '../Input/InputChevron';
import { SparkIcon } from '../SparkIcon';
import { Label } from '../Label/Label';
import { TagGeneral } from '../TagGeneral/TagGeneral';
import '../Input/shared/inputSelect.css';

export type InputMultiSelectSize = 'small' | 'medium';
export type InputMultiSelectState = 'default' | 'hover' | 'pressed' | 'disabled';
export type InputMultiSelectFill = 'empty' | 'filled';

export type InputMultiSelectProps = {
  label?: string;
  placeholder?: string;
  size?: InputMultiSelectSize;
  fill?: InputMultiSelectFill;
  showLabel?: boolean;
  showAsterisk?: boolean;
  showHelpIcon?: boolean;
  showPrefixIcon?: boolean;
  tags?: string[];
  overflowCount?: number;
  disabled?: boolean;
  open?: boolean;
  visualState?: InputMultiSelectState;
  showFocus?: boolean;
  onToggle?: () => void;
  onTagRemove?: (tag: string, index: number) => void;
  className?: string;
};

export function InputMultiSelect({
  label = 'Label',
  placeholder = 'Input',
  size = 'medium',
  fill,
  showLabel = true,
  showAsterisk = false,
  showHelpIcon = false,
  showPrefixIcon = false,
  tags = [],
  overflowCount = 0,
  disabled = false,
  open = false,
  visualState,
  showFocus = false,
  onToggle,
  onTagRemove,
  className = '',
}: InputMultiSelectProps) {
  const labelId = useId();
  const resolvedState = disabled ? 'disabled' : visualState ?? 'default';
  const isFocused = showFocus || resolvedState === 'pressed';
  const resolvedFill = fill ?? (tags.length > 0 ? 'filled' : 'empty');
  const isFilled = resolvedFill === 'filled';
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
          {isFilled ? (
            <div className="spark-input-select-tags">
              {tags.map((tag, index) => (
                <TagGeneral
                  key={`${tag}-${index}`}
                  label={tag}
                  variant={onTagRemove ? 'closeable' : 'default'}
                  onClose={onTagRemove ? () => onTagRemove(tag, index) : undefined}
                />
              ))}
              {overflowCount > 0 ? (
                <TagGeneral label={`+${overflowCount}`} variant="default" className="spark-input-select-tag-overflow" />
              ) : null}
            </div>
          ) : (
            <span className="spark-input-select-value">{placeholder}</span>
          )}
          <InputChevron open={open} disabled={disabled} className="spark-input-select-chevron" />
        </div>
        {isFocused ? <span className="spark-input-select-focus" aria-hidden="true" /> : null}
      </div>
    </div>
  );
}
