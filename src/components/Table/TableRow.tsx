import type { ReactNode } from 'react';
import './Table.css';

export type TableRowState = 'default' | 'hover' | 'disabled';

export type TableDataRowProps = {
  children: ReactNode;
  state?: TableRowState;
  isLast?: boolean;
  className?: string;
};

export function TableDataRow({
  children,
  state = 'default',
  isLast = false,
  className = '',
}: TableDataRowProps) {
  const isDisabled = state === 'disabled';
  const isInteractive = !isDisabled && state === 'default';

  const rowClasses = [
    'spark-table-row',
    isInteractive ? 'spark-table-row-interactive' : '',
    state === 'hover' ? 'spark-table-row-hover' : '',
    isDisabled ? 'spark-table-row-disabled' : '',
    isLast ? 'spark-table-row-last' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rowClasses} role="row" aria-disabled={isDisabled || undefined}>
      {children}
    </div>
  );
}
