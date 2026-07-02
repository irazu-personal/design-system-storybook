import type { ReactNode } from 'react';
import './popoverShared.css';

export type PopoverTipDirection = 'right' | 'left' | 'bottom' | 'top';

export type PopoverShellProps = {
  tip?: boolean;
  tipDirection?: PopoverTipDirection;
  panelClassName?: string;
  className?: string;
  children: ReactNode;
};

export function PopoverShell({
  tip = true,
  tipDirection = 'right',
  panelClassName = '',
  className = '',
  children,
}: PopoverShellProps) {
  const panelClasses = ['spark-popover-panel', panelClassName].filter(Boolean).join(' ');
  const tipNode = tip ? <span className="spark-popover-tip" aria-hidden="true" /> : null;

  if (!tip) {
    return (
      <div className={['spark-popover', 'spark-popover--tip-none', className].filter(Boolean).join(' ')}>
        <div className={panelClasses}>{children}</div>
      </div>
    );
  }

  const rootClasses = ['spark-popover', `spark-popover--tip-${tipDirection}`, className]
    .filter(Boolean)
    .join(' ');

  if (tipDirection === 'left') {
    return (
      <div className={rootClasses}>
        {tipNode}
        <div className={panelClasses}>{children}</div>
      </div>
    );
  }

  if (tipDirection === 'top') {
    return (
      <div className={rootClasses}>
        {tipNode}
        <div className={panelClasses}>{children}</div>
      </div>
    );
  }

  if (tipDirection === 'bottom') {
    return (
      <div className={rootClasses}>
        <div className={panelClasses}>{children}</div>
        {tipNode}
      </div>
    );
  }

  return (
    <div className={rootClasses}>
      <div className={panelClasses}>{children}</div>
      {tipNode}
    </div>
  );
}
