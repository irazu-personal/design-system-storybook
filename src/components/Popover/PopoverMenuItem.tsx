import { SparkIcon } from '../SparkIcon';
import { DropdownCheckIcon } from '../Dropdown/DropdownCheckIcon';
import './PopoverMenu.css';

export type PopoverMenuItemState = 'default' | 'hover' | 'selected' | 'disabled';
export type PopoverMenuItemType = 'regular' | 'cascading' | 'two-lines';

export type PopoverMenuItemProps = {
  label?: string;
  title?: string;
  type?: PopoverMenuItemType;
  state?: PopoverMenuItemState;
  /**
   * Storybook-only visual state override for static matrices.
   */
  visualState?: PopoverMenuItemState;
  showPrefixIcon?: boolean;
  showInfoIcon?: boolean;
  className?: string;
  onClick?: () => void;
};

export function PopoverMenuItem({
  label = 'Popover item text',
  title = 'Title',
  type = 'regular',
  state = 'default',
  visualState,
  showPrefixIcon = false,
  showInfoIcon = false,
  className = '',
  onClick,
}: PopoverMenuItemProps) {
  const resolvedState = visualState ?? state;
  const isDisabled = resolvedState === 'disabled';
  const isSelected = resolvedState === 'selected';

  const rootClasses = [
    'spark-popover-menu-item',
    `spark-popover-menu-item-${type}`,
    resolvedState === 'hover' ? 'spark-popover-menu-item-hover' : '',
    resolvedState === 'selected' ? 'spark-popover-menu-item-selected' : '',
    isDisabled ? 'spark-popover-menu-item-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (type === 'two-lines') {
    return (
      <div
        className={rootClasses}
        role="menuitem"
        aria-disabled={isDisabled || undefined}
        aria-selected={isSelected || undefined}
        onClick={isDisabled ? undefined : onClick}
      >
        <div className="spark-popover-menu-item-two-lines">
          <div className="spark-popover-menu-item-title-row">
            {showPrefixIcon ? (
              <SparkIcon slug="user" size="small" className="spark-popover-menu-item-prefix" />
            ) : null}
            <span className="spark-popover-menu-item-title">{title}</span>
          </div>
          <div className="spark-popover-menu-item-subtitle-row">
            <span className="spark-popover-menu-item-subtitle">{label}</span>
            {showInfoIcon ? (
              <SparkIcon slug="circle-info" size="small" className="spark-popover-menu-item-info" />
            ) : null}
          </div>
        </div>
        {isSelected ? <DropdownCheckIcon className="spark-popover-menu-item-check" /> : null}
      </div>
    );
  }

  return (
    <div
      className={rootClasses}
      role="menuitem"
      aria-disabled={isDisabled || undefined}
      aria-selected={isSelected || undefined}
      onClick={isDisabled ? undefined : onClick}
    >
      <div className="spark-popover-menu-item-content">
        {showPrefixIcon ? (
          <SparkIcon slug="user" size="small" className="spark-popover-menu-item-prefix" />
        ) : null}
        <span className="spark-popover-menu-item-label">{label}</span>
      </div>
      {isSelected && type === 'regular' ? (
        <DropdownCheckIcon className="spark-popover-menu-item-check" />
      ) : null}
      {type === 'cascading' ? (
        <SparkIcon slug="chevron-right" size="small" className="spark-popover-menu-item-chevron" />
      ) : null}
    </div>
  );
}
