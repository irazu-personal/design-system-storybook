import { Dropdown } from '../Dropdown/Dropdown';
import type { DropdownItemProps } from '../Dropdown/DropdownItem';
import { Search, type SearchFill, type SearchState } from '../Search/Search';
import './AutoComplete.css';

export type AutoCompleteSize = 'small' | 'medium';
export type AutoCompleteType = 'default' | 'multi-select';

export type AutoCompleteProps = {
  open?: boolean;
  size?: AutoCompleteSize;
  type?: AutoCompleteType;
  placeholder?: string;
  value?: string;
  fill?: SearchFill;
  visualState?: SearchState;
  tags?: string[];
  overflowCount?: number;
  showFooter?: boolean;
  disabled?: boolean;
  items?: DropdownItemProps[];
  className?: string;
};

const DEFAULT_ITEMS: DropdownItemProps[] = Array.from({ length: 4 }, () => ({
  label: 'Dropdown item text',
}));

export function AutoComplete({
  open = false,
  size = 'medium',
  type = 'default',
  placeholder = 'Search',
  value,
  fill,
  visualState,
  tags = [],
  overflowCount = 0,
  showFooter = false,
  disabled = false,
  items = DEFAULT_ITEMS,
  className = '',
}: AutoCompleteProps) {
  const isMultiSelect = type === 'multi-select';
  const hasContent = isMultiSelect ? tags.length > 0 : value !== undefined && value.length > 0;
  const resolvedFill: SearchFill = fill ?? (hasContent ? 'filled' : 'empty');
  const showPanel = open && resolvedFill === 'filled' && !disabled;
  const resolvedVisualState: SearchState = disabled
    ? 'disabled'
    : showPanel
      ? 'click-on'
      : visualState ?? 'default';

  const rootClasses = [
    'spark-auto-complete',
    `spark-auto-complete-${size}`,
    showPanel ? 'spark-auto-complete-open' : 'spark-auto-complete-closed',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClasses}>
      <Search
        size={size}
        placeholder={placeholder}
        value={value}
        multiSelect={isMultiSelect}
        tags={tags}
        overflowCount={overflowCount}
        disabled={disabled}
        fill={resolvedFill}
        visualState={resolvedVisualState}
        showFocus={showPanel}
      />
      {showPanel ? (
        <div className="spark-auto-complete-panel">
          <Dropdown type="regular" showFooter={showFooter} items={items} />
        </div>
      ) : null}
    </div>
  );
}
