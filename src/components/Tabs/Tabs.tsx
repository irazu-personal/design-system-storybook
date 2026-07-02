import { useState, type ReactNode } from 'react';
import { SparkIcon } from '../SparkIcon';
import './Tabs.css';

export type TabSize = 'large' | 'medium' | 'small';
export type TabPosition = 'top' | 'bottom' | 'left' | 'right';
export type TabVisualState = 'default' | 'hover' | 'disabled';

export type TabItemData = {
  id: string;
  label: string;
  disabled?: boolean;
};

export type TabProps = {
  label: string;
  active?: boolean;
  size?: TabSize;
  position?: TabPosition;
  disabled?: boolean;
  visualState?: TabVisualState;
  showIcon?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
};

export type TabsProps = {
  items: TabItemData[];
  activeId?: string;
  onChange?: (id: string) => void;
  size?: TabSize;
  position?: TabPosition;
  showIcon?: boolean;
  className?: string;
};

export function Tab({
  label,
  active = false,
  size = 'medium',
  position = 'top',
  disabled = false,
  visualState,
  showIcon = false,
  icon,
  onClick,
  className = '',
}: TabProps) {
  const isDisabled = disabled || visualState === 'disabled';

  const rootClasses = [
    'spark-tab',
    `spark-tab-${size}`,
    `spark-tab-${position}`,
    active ? 'spark-tab-active' : 'spark-tab-inactive',
    isDisabled ? 'spark-tab-disabled' : '',
    visualState ? `spark-tab-state-${visualState}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      role="tab"
      className={rootClasses}
      aria-selected={active}
      disabled={isDisabled}
      onClick={onClick}
    >
      {showIcon ? icon ?? <SparkIcon slug="assembly" size="medium" /> : null}
      <span className="spark-tab-label">{label}</span>
    </button>
  );
}

export function Tabs({
  items,
  activeId,
  onChange,
  size = 'medium',
  position = 'top',
  showIcon = false,
  className = '',
}: TabsProps) {
  const [internalActiveId, setInternalActiveId] = useState(items[0]?.id ?? '');
  const resolvedActiveId = activeId ?? internalActiveId;

  const rootClasses = [
    'spark-tabs',
    `spark-tabs-${size}`,
    `spark-tabs-${position}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleSelect = (id: string) => {
    if (activeId === undefined) {
      setInternalActiveId(id);
    }
    onChange?.(id);
  };

  return (
    <div className={rootClasses}>
      <div className="spark-tabs-list" role="tablist">
        {items.map((item) => (
          <Tab
            key={item.id}
            label={item.label}
            active={item.id === resolvedActiveId}
            size={size}
            position={position}
            disabled={item.disabled}
            showIcon={showIcon}
            onClick={() => {
              if (!item.disabled) {
                handleSelect(item.id);
              }
            }}
          />
        ))}
      </div>
      <div className="spark-tabs-divider" aria-hidden="true" />
    </div>
  );
}
