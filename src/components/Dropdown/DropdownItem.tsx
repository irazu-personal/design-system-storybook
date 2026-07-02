import { SparkIcon } from '../SparkIcon';
import { Checkbox } from '../Checkbox/Checkbox';
import { DropdownCheckIcon } from './DropdownCheckIcon';
import './Dropdown.css';

export type DropdownItemState = 'default' | 'hover' | 'selected' | 'disabled';

export type DropdownItemProps = {
  label?: string;
  state?: DropdownItemState;
  showPrefixIcon?: boolean;
  showInfoIcon?: boolean;
  checked?: boolean;
  /**
   * Storybook-only visual state override for static matrices.
   */
  visualState?: DropdownItemState;
  type?: 'regular' | 'checkbox';
  className?: string;
};

export function DropdownItem({
  label = 'Dropdown item text',
  state = 'default',
  showPrefixIcon = false,
  showInfoIcon = false,
  checked = false,
  visualState,
  type = 'regular',
  className = '',
}: DropdownItemProps) {
  const resolvedState = visualState ?? state;
  const isDisabled = resolvedState === 'disabled';
  const isSelected = resolvedState === 'selected';
  const isHover = resolvedState === 'hover';

  const rootClasses = [
    'spark-dropdown-item',
    isHover ? 'spark-dropdown-item-hover' : '',
    isSelected ? 'spark-dropdown-item-selected' : '',
    isDisabled ? 'spark-dropdown-item-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (type === 'checkbox') {
    return (
      <div className={rootClasses} role="menuitemcheckbox" aria-disabled={isDisabled || undefined}>
        <Checkbox
          label={label}
          status={checked ? 'active' : 'inactive'}
          disabled={isDisabled}
          visualState={isHover ? 'hover' : undefined}
        />
        {showInfoIcon ? <SparkIcon slug="circle-info" size="small" className="spark-dropdown-item-info" /> : null}
      </div>
    );
  }

  return (
    <div className={rootClasses} role="menuitem" aria-disabled={isDisabled || undefined}>
      <div className="spark-dropdown-item-content">
        {showPrefixIcon ? <SparkIcon slug="user" size="small" className="spark-dropdown-item-prefix" /> : null}
        <span className="spark-dropdown-item-label">{label}</span>
        {isSelected ? <DropdownCheckIcon className="spark-dropdown-item-check" /> : null}
      </div>
      {showInfoIcon ? <SparkIcon slug="circle-info" size="small" className="spark-dropdown-item-info" /> : null}
    </div>
  );
}
