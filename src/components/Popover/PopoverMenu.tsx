import { PopoverMenuItem, type PopoverMenuItemProps } from './PopoverMenuItem';
import { PopoverShell, type PopoverTipDirection } from './shared/PopoverShell';
import './PopoverMenu.css';
import './shared/popoverShared.css';

export type PopoverMenuType = 'regular' | 'cascading' | 'two-lines';

export type PopoverMenuProps = {
  tip?: boolean;
  tipDirection?: PopoverTipDirection;
  type?: PopoverMenuType;
  items?: PopoverMenuItemProps[];
  className?: string;
};

const DEFAULT_ITEMS: PopoverMenuItemProps[] = Array.from({ length: 4 }, () => ({
  label: 'Popover item text',
}));

const DEFAULT_TWO_LINE_ITEMS: PopoverMenuItemProps[] = Array.from({ length: 4 }, () => ({
  title: 'Title',
  label: 'Popover item text',
}));

function getDefaultItems(type: PopoverMenuType): PopoverMenuItemProps[] {
  if (type === 'two-lines') {
    return DEFAULT_TWO_LINE_ITEMS;
  }
  return DEFAULT_ITEMS;
}

export function PopoverMenu({
  tip = true,
  tipDirection = 'right',
  type = 'regular',
  items,
  className = '',
}: PopoverMenuProps) {
  const resolvedItems = items ?? getDefaultItems(type);

  return (
    <PopoverShell
      tip={tip}
      tipDirection={tipDirection}
      className={className}
      panelClassName={`spark-popover-menu-panel spark-popover-menu-panel-${type}`}
    >
      <div className="spark-popover-menu-list" role="menu">
        {resolvedItems.map((item, index) => (
          <PopoverMenuItem key={`${item.label ?? item.title ?? 'item'}-${index}`} type={type} {...item} />
        ))}
      </div>
    </PopoverShell>
  );
}
