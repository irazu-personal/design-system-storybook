import { useEffect, useState, type ChangeEvent, type InputHTMLAttributes } from 'react';
import { InputCloseButton } from '../Input/InputCloseButton';
import { SparkIcon } from '../SparkIcon';
import { TagGeneral } from '../TagGeneral/TagGeneral';
import './Search.css';

export type SearchSize = 'small' | 'medium' | 'large';
export type SearchState = 'default' | 'hover' | 'click-on' | 'disabled';
export type SearchFill = 'empty' | 'filled';

export type SearchProps = {
  size?: SearchSize;
  fill?: SearchFill;
  multiSelect?: boolean;
  placeholder?: string;
  tags?: string[];
  overflowCount?: number;
  disabled?: boolean;
  visualState?: SearchState;
  showFocus?: boolean;
  showClearButton?: boolean;
  onClear?: () => void;
  onTagRemove?: (tag: string, index: number) => void;
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'disabled'>;

export function Search({
  size = 'medium',
  fill,
  multiSelect = false,
  placeholder = 'Search',
  tags = [],
  overflowCount = 0,
  disabled = false,
  visualState,
  showFocus = false,
  showClearButton,
  onClear,
  onTagRemove,
  className = '',
  value,
  defaultValue,
  onChange,
  ...rest
}: SearchProps) {
  const [internalValue, setInternalValue] = useState(
    (value as string | undefined) ?? (defaultValue as string | undefined) ?? '',
  );

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value as string);
    }
  }, [value]);

  const currentValue = value !== undefined ? String(value) : internalValue;
  const resolvedFill: SearchFill =
    fill ?? (multiSelect ? (tags.length > 0 ? 'filled' : 'empty') : currentValue.length > 0 ? 'filled' : 'empty');
  const resolvedState: SearchState = disabled ? 'disabled' : visualState ?? 'default';
  const isFocused = showFocus || resolvedState === 'click-on';
  const showClear =
    (showClearButton ?? resolvedFill === 'filled') && !multiSelect && !disabled && currentValue.length > 0;

  const rootClasses = [
    'spark-search',
    `spark-search-${size}`,
    multiSelect ? 'spark-search-multi-select' : '',
    `spark-search-fill-${resolvedFill}`,
    `spark-search-state-${isFocused ? 'click-on' : resolvedState}`,
    disabled ? 'spark-search-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleClear = () => {
    if (value === undefined) {
      setInternalValue('');
    }
    onClear?.();
    onChange?.({ target: { value: '' } } as ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className={rootClasses}>
      <div className="spark-search-field">
        {multiSelect ? (
          <div className="spark-search-tags" aria-hidden={tags.length === 0 && overflowCount === 0 ? true : undefined}>
            {tags.map((tag, index) => (
              <TagGeneral
                key={`${tag}-${index}`}
                label={tag}
                variant={onTagRemove ? 'closeable' : 'default'}
                onClose={onTagRemove ? () => onTagRemove(tag, index) : undefined}
              />
            ))}
            {overflowCount > 0 ? (
              <TagGeneral label={`+${overflowCount}`} variant="default" className="spark-search-tag-overflow" />
            ) : null}
          </div>
        ) : (
          <input
            className="spark-search-input"
            type="text"
            placeholder={placeholder}
            disabled={disabled}
            value={value !== undefined ? value : internalValue}
            onChange={(event) => {
              if (value === undefined) {
                setInternalValue(event.target.value);
              }
              onChange?.(event);
            }}
            aria-label={placeholder}
            {...rest}
          />
        )}
        {showClear ? (
          <InputCloseButton
            className="spark-search-clear"
            onClick={(event) => {
              event.preventDefault();
              handleClear();
            }}
          />
        ) : null}
        <SparkIcon slug="search" size="small" className="spark-search-icon" />
      </div>
    </div>
  );
}
