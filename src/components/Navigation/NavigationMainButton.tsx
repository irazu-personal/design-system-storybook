import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { TooltipTrigger } from '../Tooltip/TooltipTrigger';
import './NavigationMainButton.css';

export type NavigationMainButtonProps = {
  children: ReactNode;
  badge?: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function NavigationMainButton({
  children,
  badge,
  className = '',
  type = 'button',
  'aria-label': ariaLabel,
  disabled,
  ...rest
}: NavigationMainButtonProps) {
  const button = (
    <button
      type={type}
      className={['spark-navigation-main-button', className].filter(Boolean).join(' ')}
      aria-label={ariaLabel}
      disabled={disabled}
      {...rest}
    >
      <span className="spark-navigation-main-button-content">{children}</span>
    </button>
  );

  return (
    <div className="spark-navigation-main-button-wrap">
      {ariaLabel ? (
        <TooltipTrigger text={ariaLabel} disabled={disabled}>
          {button}
        </TooltipTrigger>
      ) : (
        button
      )}
      {badge}
    </div>
  );
}
