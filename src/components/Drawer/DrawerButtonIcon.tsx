import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './DrawerButtonIcon.css';

export type DrawerButtonIconVisualState = 'default' | 'hover' | 'click-on' | 'disabled';

export type DrawerButtonIconProps = {
  /** Figma `Width=Yes` — tall pill for the resize handle. */
  width?: boolean;
  visualState?: DrawerButtonIconVisualState;
  icon?: ReactNode;
  ariaLabel: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
} & Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onPointerDown' | 'onPointerUp' | 'onPointerCancel' | 'onLostPointerCapture'
>;

export function DrawerButtonIcon({
  width = false,
  visualState = 'default',
  icon,
  ariaLabel,
  onClick,
  className = '',
  type = 'button',
  onPointerDown,
  onPointerUp,
  onPointerCancel,
  onLostPointerCapture,
}: DrawerButtonIconProps) {
  const isDisabled = visualState === 'disabled';

  const classes = [
    'spark-drawer-button-icon',
    width ? 'spark-drawer-button-icon-width' : '',
    width ? 'spark-drawer-button-icon-resize' : '',
    visualState === 'hover' ? 'spark-drawer-button-icon-hover' : '',
    visualState === 'click-on' ? 'spark-drawer-button-icon-click-on' : '',
    isDisabled ? 'spark-drawer-button-icon-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={classes}
      aria-label={ariaLabel}
      disabled={isDisabled}
      onClick={onClick}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      onLostPointerCapture={onLostPointerCapture}
    >
      {icon}
    </button>
  );
}
