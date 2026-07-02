import type { ReactNode } from 'react';
import './cardShared.css';

export type CardSlotProps = {
  children?: ReactNode;
  showPlaceholder?: boolean;
  className?: string;
};

export function CardSlot({ children, showPlaceholder = true, className = '' }: CardSlotProps) {
  return (
    <div className={['spark-card-slot', className].filter(Boolean).join(' ')}>
      {children ?? (showPlaceholder ? <div className="spark-card-slot-placeholder" aria-hidden="true" /> : null)}
    </div>
  );
}
