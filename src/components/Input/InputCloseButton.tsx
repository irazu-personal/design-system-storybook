import { useState, type ButtonHTMLAttributes } from 'react';
import { TooltipTrigger } from '../Tooltip/TooltipTrigger';
import './Input.css';

export type InputCloseButtonState = 'default' | 'pressed';

export type InputCloseButtonProps = {
  /** Storybook-only visual state override. */
  visualState?: InputCloseButtonState;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

export function InputCloseButton({
  visualState,
  className = '',
  disabled,
  onMouseDown,
  onMouseUp,
  onMouseLeave,
  ...rest
}: InputCloseButtonProps) {
  const [pressed, setPressed] = useState(false);
  const isPressed = visualState === 'pressed' || pressed;

  return (
    <TooltipTrigger text="Clear" disabled={disabled}>
      <button
        type="button"
        className={[
          'spark-input-close-button',
          isPressed ? 'spark-input-close-button-pressed' : '',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        disabled={disabled}
        aria-label="Clear"
        onMouseDown={(event) => {
          if (!disabled) {
            setPressed(true);
          }
          onMouseDown?.(event);
        }}
        onMouseUp={(event) => {
          setPressed(false);
          onMouseUp?.(event);
        }}
        onMouseLeave={(event) => {
          setPressed(false);
          onMouseLeave?.(event);
        }}
        {...rest}
      >
        <svg
          className="spark-input-close-button-icon"
          width="14"
          height="14"
          viewBox="0 0 13.2222 13.2222"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.2222 6.61111C13.2222 10.2623 10.2623 13.2222 6.61111 13.2222C2.95989 13.2222 0 10.2623 0 6.61111C0 2.95989 2.95989 0 6.61111 0C10.2623 0 13.2222 2.95989 13.2222 6.61111ZM3.47641 4.30137L5.78615 6.61111L3.47641 8.92085L4.30137 9.74581L6.61111 7.43607L8.92085 9.74581L9.74581 8.92085L7.43607 6.61111L9.74581 4.30137L8.92085 3.47641L6.61111 5.78615L4.30137 3.47641L3.47641 4.30137Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </TooltipTrigger>
  );
}
