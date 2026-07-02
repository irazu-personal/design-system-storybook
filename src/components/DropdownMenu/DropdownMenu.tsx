import { useState } from 'react';
import { Dropdown, type DropdownType } from '../Dropdown/Dropdown';
import type { DropdownItemProps } from '../Dropdown/DropdownItem';
import { InputMultiSelect } from '../InputMultiSelect/InputMultiSelect';
import { InputSingleSelect } from '../InputSingleSelect/InputSingleSelect';
import './DropdownMenu.css';

export type DropdownMenuSize = 'small' | 'medium';
export type DropdownMenuSelectType = 'single-select' | 'multi-select';

export type DropdownMenuProps = {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  panelLayout?: 'inline' | 'overlay';
  size?: DropdownMenuSize;
  selectType?: DropdownMenuSelectType;
  label?: string;
  placeholder?: string;
  text?: string;
  showLabel?: boolean;
  showFooter?: boolean;
  showPrefixIcon?: boolean;
  showInfoIcon?: boolean;
  tags?: string[];
  overflowCount?: number;
  disabled?: boolean;
  items?: DropdownItemProps[];
  className?: string;
};

const DEFAULT_ITEMS: DropdownItemProps[] = Array.from({ length: 4 }, () => ({
  label: 'Dropdown item text',
}));

export function DropdownMenu({
  open,
  defaultOpen = false,
  onOpenChange,
  panelLayout = 'inline',
  size = 'medium',
  selectType = 'single-select',
  label = 'Label',
  placeholder = 'Input',
  text,
  showLabel = true,
  showFooter = false,
  showPrefixIcon = false,
  showInfoIcon = false,
  tags = [],
  overflowCount = 0,
  disabled = false,
  items = DEFAULT_ITEMS,
  className = '',
}: DropdownMenuProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const setOpen = (next: boolean) => {
    if (!isControlled) {
      setInternalOpen(next);
    }
    onOpenChange?.(next);
  };

  const dropdownType: DropdownType = selectType === 'multi-select' ? 'checkbox' : 'regular';
  const isFocused = isOpen && !disabled;

  const rootClasses = [
    'spark-dropdown-menu',
    `spark-dropdown-menu-${size}`,
    panelLayout === 'overlay' ? 'spark-dropdown-menu-overlay' : 'spark-dropdown-menu-inline',
    isOpen ? 'spark-dropdown-menu-open' : 'spark-dropdown-menu-closed',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleToggle = () => {
    if (!disabled) {
      setOpen(!isOpen);
    }
  };

  return (
    <div className={rootClasses}>
      {selectType === 'multi-select' ? (
        <InputMultiSelect
          size={size}
          label={label}
          placeholder={placeholder}
          showLabel={showLabel}
          showPrefixIcon={showPrefixIcon}
          tags={tags}
          overflowCount={overflowCount}
          disabled={disabled}
          open={isOpen}
          onToggle={handleToggle}
          visualState={isFocused ? 'pressed' : 'default'}
          showFocus={isFocused}
          fill={tags.length > 0 ? 'filled' : 'empty'}
        />
      ) : (
        <InputSingleSelect
          size={size}
          label={label}
          placeholder={placeholder}
          text={text}
          showLabel={showLabel}
          showPrefixIcon={showPrefixIcon}
          disabled={disabled}
          open={isOpen}
          onToggle={handleToggle}
          visualState={isFocused ? 'pressed' : 'default'}
          showFocus={isFocused}
          fill={text !== undefined && text.length > 0 ? 'filled' : 'empty'}
        />
      )}
      {isOpen ? (
        <div className="spark-dropdown-menu-panel">
          <Dropdown
            type={dropdownType}
            showFooter={showFooter}
            showPrefixIcon={showPrefixIcon}
            showInfoIcon={showInfoIcon}
            items={items}
          />
        </div>
      ) : null}
    </div>
  );
}
