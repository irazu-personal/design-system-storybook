import type { ReactNode } from 'react';
import '../Dropdown/Dropdown.css';

export type DropdownSlotProps = {
  children?: ReactNode;
  className?: string;
};

export function DropdownSlot({ children, className = '' }: DropdownSlotProps) {
  const rootClasses = ['spark-dropdown-slot-panel', className].filter(Boolean).join(' ');

  return (
    <div className={rootClasses}>
      <div className="spark-dropdown-slot-area">{children}</div>
    </div>
  );
}
