import type { ReactNode } from 'react';
import { ScrollBar } from '../../ScrollBar/ScrollBar';
import './drawerShared.css';

export type DrawerSlotProps = {
  children?: ReactNode;
  slotPadding?: boolean;
  showPlaceholder?: boolean;
  showScrollBar?: boolean;
  className?: string;
};

export function DrawerSlot({
  children,
  slotPadding = true,
  showPlaceholder = true,
  showScrollBar = false,
  className = '',
}: DrawerSlotProps) {
  return (
    <div
      className={[
        'spark-drawer-body',
        slotPadding ? 'spark-drawer-body-padded' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children ??
        (showPlaceholder ? (
          <div className="spark-drawer-slot-placeholder" aria-hidden="true" />
        ) : null)}
      {showScrollBar ? <ScrollBar type="vertical" className="spark-drawer-scrollbar" /> : null}
    </div>
  );
}
