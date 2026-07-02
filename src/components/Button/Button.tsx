import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { SparkIcon } from '../SparkIcon';
import { resolveIconButtonTooltip } from '../shared/iconActionLabels';
import { TooltipTrigger } from '../Tooltip/TooltipTrigger';
import './Button.css';

export type ButtonSize = 'tiny' | 'small' | 'medium' | 'large';

/** Text button variants (Button Main). */
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'ghost'
  | 'link'
  | 'text';

/** Icon-only button types from Figma Button Icon. */
export type IconButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost';

export const ICON_BUTTON_VARIANTS: IconButtonVariant[] = [
  'primary',
  'secondary',
  'tertiary',
  'ghost',
];

/** Danger icon buttons: Primary, Secondary, Tertiary only (no Ghost danger in Figma). */
export const ICON_BUTTON_DANGER_VARIANTS: Exclude<IconButtonVariant, 'ghost'>[] = [
  'primary',
  'secondary',
  'tertiary',
];

/** Danger text buttons: Primary, Secondary, Ghost only (no Tertiary danger in Figma). */
export const TEXT_BUTTON_DANGER_VARIANTS: ButtonVariant[] = [
  'primary',
  'secondary',
  'ghost',
];

export type ButtonProps = {
  size?: ButtonSize;
  variant?: ButtonVariant;
  danger?: boolean;
  /** Stretch to fill the parent width (Figma fill mode). */
  fill?: boolean;
  /** Renders the default plus icon before the label when no `startIcon` is passed. */
  showStartIcon?: boolean;
  /** Renders chevron-right after the label when no `endIcon` is passed. */
  showEndIcon?: boolean;
  /** Icon before the label. Alias: `icon`. */
  startIcon?: ReactNode;
  /** @deprecated Use `startIcon` */
  icon?: ReactNode;
  /** Icon after the label. */
  endIcon?: ReactNode;
  /** Visible tooltip for icon-only buttons. Falls back to aria-label, iconSlug map, then placeholder. */
  tooltip?: string;
  /** Foundation icon slug for tooltip inference on icon-only buttons. */
  iconSlug?: string;
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function PlusIcon({ size }: { size: ButtonSize }) {
  if (size === 'tiny' || size === 'small') {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M7.51659 12.5161V8.48436H3.48389C3.21675 8.48436 3.00017 8.26757 3 8.00047C3 7.73323 3.21664 7.51659 3.48389 7.51659H7.51659V3.48389C7.51659 3.21664 7.73323 3 8.00047 3C8.26757 3.00017 8.48436 3.21675 8.48436 3.48389V7.51659H12.5161C12.7834 7.51659 13 7.73323 13 8.00047C12.9998 8.26757 12.7833 8.48436 12.5161 8.48436H8.48436V12.5161C8.48436 12.7833 8.26757 12.9998 8.00047 13C7.73323 13 7.51659 12.7834 7.51659 12.5161Z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4.40039C12.3314 4.40039 12.5996 4.66863 12.5996 5V11.4004H19C19.3314 11.4004 19.5996 11.6686 19.5996 12C19.5996 12.3314 19.3314 12.5996 19 12.5996H12.5996V19C12.5996 19.3314 12.3314 19.5996 12 19.5996C11.6686 19.5996 11.4004 19.3314 11.4004 19V12.5996H5C4.66863 12.5996 4.40039 12.3314 4.40039 12C4.40039 11.6686 4.66863 11.4004 5 11.4004H11.4004V5C11.4004 4.66863 11.6686 4.40039 12 4.40039Z"
        fill="currentColor"
      />
    </svg>
  );
}

function buttonSparkIconSize(size: ButtonSize): 'small' | 'medium' {
  return size === 'tiny' || size === 'small' ? 'small' : 'medium';
}

function resolveIconOnlyVariant(
  variant: ButtonVariant,
  danger: boolean,
): ButtonVariant {
  if (!ICON_BUTTON_VARIANTS.includes(variant as IconButtonVariant)) {
    return 'tertiary';
  }
  if (danger && variant === 'ghost') {
    return 'tertiary';
  }
  return variant;
}

export function Button({
  size = 'medium',
  variant = 'primary',
  danger = false,
  fill = false,
  showStartIcon = false,
  showEndIcon = false,
  startIcon,
  icon,
  endIcon,
  children,
  className = '',
  disabled,
  type = 'button',
  tooltip,
  iconSlug,
  'aria-label': ariaLabel,
  ...rest
}: ButtonProps) {
  const explicitStartIcon = startIcon ?? icon;
  const resolvedStartIcon =
    explicitStartIcon ?? (showStartIcon ? <PlusIcon size={size} /> : undefined);
  const resolvedEndIcon =
    endIcon ?? (showEndIcon ? <SparkIcon slug="chevron-right" size={buttonSparkIconSize(size)} /> : undefined);
  const isIconOnly = !children;
  const resolvedVariant = isIconOnly ? resolveIconOnlyVariant(variant, danger) : variant;

  const classes = [
    'spark-btn',
    `spark-btn-${size}`,
    `spark-btn-${resolvedVariant}`,
    isIconOnly ? 'spark-btn-icon-only' : '',
    danger ? 'spark-btn-danger' : '',
    fill ? 'spark-btn-fill' : '',
    disabled ? 'spark-btn-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const resolvedAriaLabel = isIconOnly ? ariaLabel ?? 'Action' : ariaLabel;
  const anyIcon = resolvedStartIcon ?? resolvedEndIcon;

  const content = isIconOnly ? (
    <span className="spark-btn-icon">{anyIcon ?? <PlusIcon size={size} />}</span>
  ) : (
    <>
      {resolvedStartIcon ? (
        <span className="spark-btn-icon spark-btn-icon-start">{resolvedStartIcon}</span>
      ) : null}
      {children ? <span className="spark-btn-label">{children}</span> : null}
      {resolvedEndIcon ? <span className="spark-btn-icon spark-btn-icon-end">{resolvedEndIcon}</span> : null}
    </>
  );

  const button = (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      aria-label={resolvedAriaLabel}
      {...rest}
    >
      {content}
    </button>
  );

  if (isIconOnly) {
    const tooltipText = resolveIconButtonTooltip({
      tooltip,
      ariaLabel: resolvedAriaLabel,
      iconSlug,
    });
    return (
      <TooltipTrigger text={tooltipText} disabled={disabled}>
        {button}
      </TooltipTrigger>
    );
  }

  return button;
}
