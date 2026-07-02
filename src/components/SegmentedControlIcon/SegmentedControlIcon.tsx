import { SparkIcon } from '../SparkIcon';
import { TooltipTrigger } from '../Tooltip/TooltipTrigger';
import './SegmentedControlIcon.css';

export type SegmentedControlIconSize = 'small' | 'medium';
export type SegmentedControlIconItemPosition = 'first' | 'last';
export type SegmentedControlIconItemVisualState = 'default' | 'hover' | 'pressed' | 'disabled';

export type SegmentedControlIconItemData = {
  id: string;
  /** Accessible name / tooltip text (required per Figma docs). */
  label: string;
  iconSlug: string;
  /** Override default icon size for this segment. */
  iconSize?: 'small' | 'medium';
  disabled?: boolean;
};

export type SegmentedControlIconItemProps = {
  label: string;
  active?: boolean;
  size?: SegmentedControlIconSize;
  position?: SegmentedControlIconItemPosition;
  disabled?: boolean;
  iconSlug?: string;
  iconSize?: 'small' | 'medium';
  visualState?: SegmentedControlIconItemVisualState;
  onClick?: () => void;
  className?: string;
};

export type SegmentedControlIconProps = {
  items: [SegmentedControlIconItemData, SegmentedControlIconItemData];
  activeId?: string;
  onChange?: (id: string) => void;
  size?: SegmentedControlIconSize;
  className?: string;
};

function defaultIconSize(controlSize: SegmentedControlIconSize): 'small' | 'medium' {
  return controlSize === 'small' ? 'small' : 'medium';
}

export function SegmentedControlIconItem({
  label,
  active = false,
  size = 'medium',
  position = 'first',
  disabled = false,
  iconSlug = 'table',
  iconSize,
  visualState,
  onClick,
  className = '',
}: SegmentedControlIconItemProps) {
  const isDisabled = disabled || visualState === 'disabled';
  const resolvedIconSize = iconSize ?? defaultIconSize(size);

  const itemClasses = [
    'spark-segmented-control-icon-item',
    `spark-segmented-control-icon-item-${position}`,
    active ? 'spark-segmented-control-icon-item-active' : '',
    isDisabled ? 'spark-segmented-control-icon-item-disabled' : '',
    visualState === 'hover' && !active && !isDisabled ? 'spark-segmented-control-icon-item-state-hover' : '',
    visualState === 'pressed' && !active && !isDisabled ? 'spark-segmented-control-icon-item-state-pressed' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <TooltipTrigger text={label} disabled={isDisabled}>
      <button
        type="button"
        className={itemClasses}
        disabled={isDisabled}
        aria-pressed={active}
        aria-label={label}
        onClick={onClick}
        data-size={size}
      >
        <SparkIcon slug={iconSlug} size={resolvedIconSize} className="spark-segmented-control-icon-item-icon" />
      </button>
    </TooltipTrigger>
  );
}

export function SegmentedControlIcon({
  items,
  activeId,
  onChange,
  size = 'medium',
  className = '',
}: SegmentedControlIconProps) {
  const rootClasses = [
    'spark-segmented-control-icon',
    `spark-segmented-control-icon-${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const positions: SegmentedControlIconItemPosition[] = ['first', 'last'];

  return (
    <div className={rootClasses} role="group" aria-label="View mode">
      {items.map((item, index) => (
        <SegmentedControlIconItem
          key={item.id}
          label={item.label}
          active={item.id === activeId}
          size={size}
          position={positions[index]}
          disabled={item.disabled}
          iconSlug={item.iconSlug}
          iconSize={item.iconSize}
          onClick={() => onChange?.(item.id)}
        />
      ))}
    </div>
  );
}

/** Default table master-row view toggle (Figma: table + layout-rows). */
export const TABLE_VIEW_TOGGLE_ITEMS: [SegmentedControlIconItemData, SegmentedControlIconItemData] = [
  { id: 'grid', label: 'Grid view', iconSlug: 'table' },
  { id: 'list', label: 'List view', iconSlug: 'layout-rows' },
];
