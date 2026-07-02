import type { ReactNode } from 'react';
import './popoverShared.css';

export type PopoverSlotProps = {
  children?: ReactNode;
  showPlaceholder?: boolean;
  className?: string;
};

export function PopoverSlot({ children, showPlaceholder = true, className = '' }: PopoverSlotProps) {
  return (
    <div className={['spark-popover-slot', className].filter(Boolean).join(' ')}>
      {children ?? (showPlaceholder ? <div className="spark-popover-slot-placeholder" aria-hidden="true" /> : null)}
    </div>
  );
}
