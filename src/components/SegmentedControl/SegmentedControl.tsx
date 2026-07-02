import type { ReactNode } from 'react';
import { SparkIcon } from '../SparkIcon';
import './SegmentedControl.css';

export type SegmentedControlSize = 'small' | 'medium' | 'large';
export type SegmentedControlStyle = 'outlined' | 'solid';
export type SegmentedControlItemPosition = 'first' | 'center' | 'last';
export type SegmentedControlItemVisualState = 'default' | 'hover' | 'disabled';

export type SegmentedControlItemData = {
  id: string;
  label: string;
  disabled?: boolean;
  icon?: ReactNode;
};

export type SegmentedControlItemProps = {
  label?: string;
  active?: boolean;
  size?: SegmentedControlSize;
  style?: SegmentedControlStyle;
  position?: SegmentedControlItemPosition;
  disabled?: boolean;
  showIcon?: boolean;
  icon?: ReactNode;
  visualState?: SegmentedControlItemVisualState;
  onClick?: () => void;
  className?: string;
};

export type SegmentedControlProps = {
  items: SegmentedControlItemData[];
  activeId?: string;
  onChange?: (id: string) => void;
  size?: SegmentedControlSize;
  style?: SegmentedControlStyle;
  fill?: boolean;
  showIcon?: boolean;
  className?: string;
};

function getItemPosition(index: number, total: number): SegmentedControlItemPosition {
  if (index === 0) {
    return 'first';
  }
  if (index === total - 1) {
    return 'last';
  }
  return 'center';
}

export function SegmentedControlItem({
  label = 'Text',
  active = false,
  size = 'medium',
  style = 'outlined',
  position = 'first',
  disabled = false,
  showIcon = false,
  icon,
  visualState,
  onClick,
  className = '',
}: SegmentedControlItemProps) {
  const isDisabled = disabled || visualState === 'disabled';

  const itemClasses = [
    'spark-segmented-control-item',
    `spark-segmented-control-item-${position}`,
    active ? 'spark-segmented-control-item-active' : '',
    isDisabled ? 'spark-segmented-control-item-disabled' : '',
    visualState === 'hover' && !active && !isDisabled ? 'spark-segmented-control-item-state-hover' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      className={itemClasses}
      disabled={isDisabled}
      aria-pressed={active}
      onClick={onClick}
      data-size={size}
      data-style={style}
    >
      <span className="spark-segmented-control-item-content">
        {showIcon ? (icon ?? <SparkIcon slug="home" size="small" className="spark-segmented-control-item-icon" />) : null}
        <span className="spark-segmented-control-item-label">{label}</span>
      </span>
    </button>
  );
}

export function SegmentedControl({
  items,
  activeId,
  onChange,
  size = 'medium',
  style = 'outlined',
  fill = false,
  showIcon = false,
  className = '',
}: SegmentedControlProps) {
  const rootClasses = [
    'spark-segmented-control',
    `spark-segmented-control-${size}`,
    `spark-segmented-control-${style}`,
    fill ? 'spark-segmented-control-fill' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClasses} role="group">
      {items.map((item, index) => (
        <SegmentedControlItem
          key={item.id}
          label={item.label}
          active={item.id === activeId}
          size={size}
          style={style}
          position={getItemPosition(index, items.length)}
          disabled={item.disabled}
          showIcon={showIcon || item.icon !== undefined}
          icon={item.icon}
          onClick={() => onChange?.(item.id)}
        />
      ))}
    </div>
  );
}
