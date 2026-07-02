import type { ReactNode } from 'react';
import './Tooltip.css';

export type TooltipType = 'text' | 'slot';
export type TooltipTipDirection =
  | 'no-tip'
  | 'top-center'
  | 'top-left'
  | 'top-right'
  | 'bottom-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'left-center'
  | 'right-center';

export type TooltipProps = {
  text?: string;
  type?: TooltipType;
  tipDirection?: TooltipTipDirection;
  children?: ReactNode;
  className?: string;
};

const DEFAULT_TEXT =
  'Distinctively monetize cost effective\nnetworks for cross-media bandwidth';

export function Tooltip({
  text = DEFAULT_TEXT,
  type = 'text',
  tipDirection = 'no-tip',
  children,
  className = '',
}: TooltipProps) {
  const rootClasses = [
    'spark-tooltip',
    `spark-tooltip-${type}`,
    tipDirection !== 'no-tip' ? `spark-tooltip--tip-${tipDirection}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClasses} role="tooltip">
      <div className="spark-tooltip-content">
        {type === 'slot' ? (
          <div className="spark-tooltip-slot">{children}</div>
        ) : (
          <p className="spark-tooltip-text">{text}</p>
        )}
        {tipDirection !== 'no-tip' ? <span className="spark-tooltip-tip" aria-hidden="true" /> : null}
      </div>
    </div>
  );
}
