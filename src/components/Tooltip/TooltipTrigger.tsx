import type { ReactElement, ReactNode } from 'react';
import { Tooltip, type TooltipTipDirection } from './Tooltip';
import './Tooltip.css';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

export type TooltipTriggerProps = {
  text: string;
  placement?: TooltipPlacement;
  disabled?: boolean;
  className?: string;
  children: ReactElement;
};

const PLACEMENT_TIP: Record<TooltipPlacement, TooltipTipDirection> = {
  top: 'top-center',
  bottom: 'bottom-center',
  left: 'left-center',
  right: 'right-center',
};

export function TooltipTrigger({
  text,
  placement = 'top',
  disabled = false,
  className = '',
  children,
}: TooltipTriggerProps) {
  const rootClasses = [
    'spark-tooltip-trigger',
    `spark-tooltip-trigger-placement-${placement}`,
    disabled ? 'spark-tooltip-trigger-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={rootClasses}>
      {children}
      {!disabled ? (
        <span className="spark-tooltip-trigger-popup" aria-hidden="true">
          <Tooltip text={text} tipDirection={PLACEMENT_TIP[placement]} className="spark-tooltip-trigger-tooltip" />
        </span>
      ) : null}
    </span>
  );
}

/** Wrap a native button when tooltip text is resolved outside Button. */
export function wrapIconButtonWithTooltip(
  button: ReactElement,
  text: string,
  options?: { placement?: TooltipPlacement; disabled?: boolean },
): ReactNode {
  return (
    <TooltipTrigger text={text} placement={options?.placement} disabled={options?.disabled}>
      {button}
    </TooltipTrigger>
  );
}
