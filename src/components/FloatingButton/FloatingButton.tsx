import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { SparkIcon } from '../SparkIcon';
import './FloatingButton.css';

export type FloatingButtonVisualState = 'default' | 'hover' | 'click-on' | 'disabled';

export type FloatingButtonProps = {
  /** Figma `Text#506:865` */
  text?: string;
  /** Figma `Show Icon Left#513:53` */
  showIconLeft?: boolean;
  /** Figma `Show Icon Right#509:0` */
  showIconRight?: boolean;
  /** Figma `focus#191:0` — docs-only focus ring preview. */
  showFocus?: boolean;
  /**
   * Storybook-only visual state override for static matrices.
   * Leave undefined in product usage so native :hover/:active/:disabled apply.
   */
  visualState?: FloatingButtonVisualState;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

export function FloatingButton({
  text = 'Button',
  showIconLeft = true,
  showIconRight = false,
  showFocus = false,
  visualState,
  startIcon,
  endIcon,
  className = '',
  disabled,
  type = 'button',
  ...rest
}: FloatingButtonProps) {
  const isMatrixDisabled = visualState === 'disabled';
  const isDisabled = disabled || isMatrixDisabled;

  const classes = [
    'spark-floating-button',
    visualState && visualState !== 'default' ? `spark-floating-button-state-${visualState}` : '',
    showFocus ? 'spark-floating-button-show-focus' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const resolvedStartIcon =
    startIcon ?? (showIconLeft ? <SparkIcon slug="game" size="small" /> : undefined);
  const resolvedEndIcon =
    endIcon ?? (showIconRight ? <SparkIcon slug="chevron-down" size="small" /> : undefined);

  return (
    <button type={type} className={classes} disabled={isDisabled} {...rest}>
      <span className="spark-floating-button-content">
        {resolvedStartIcon ? (
          <span className="spark-floating-button-start-icon">{resolvedStartIcon}</span>
        ) : null}
        <span className="spark-floating-button-label">{text}</span>
        {resolvedEndIcon ? (
          <span className="spark-floating-button-end-icon">{resolvedEndIcon}</span>
        ) : null}
      </span>
    </button>
  );
}
