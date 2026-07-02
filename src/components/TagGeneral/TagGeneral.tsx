import { SparkIcon } from '../SparkIcon';
import { TooltipTrigger } from '../Tooltip/TooltipTrigger';
import './TagGeneral.css';

export type TagGeneralVariant = 'default' | 'closeable' | 'add-new';

export type TagGeneralProps = {
  label?: string;
  variant?: TagGeneralVariant;
  /** Selected state — blue surface, inverse text (Figma Checkable=Yes). */
  checked?: boolean;
  onClose?: () => void;
  /** Storybook-only — force close icon visible for static matrices. */
  showClose?: boolean;
  className?: string;
};

export function TagGeneral({
  label = 'Tag',
  variant = 'default',
  checked = false,
  onClose,
  showClose = false,
  className = '',
}: TagGeneralProps) {
  const rootClasses = [
    'spark-tag-general',
    `spark-tag-general-${variant}`,
    checked ? 'spark-tag-general-checked' : '',
    showClose ? 'spark-tag-general-show-close' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const displayLabel = variant === 'add-new' ? 'New Tag' : label;

  return (
    <span className={rootClasses}>
      {variant === 'add-new' ? <SparkIcon slug="plus" size="small" className="spark-tag-general-icon" /> : null}
      <span className="spark-tag-general-label">{displayLabel}</span>
      {variant === 'closeable' ? (
        onClose ? (
          <TooltipTrigger text={`Remove ${label}`}>
            <button type="button" className="spark-tag-general-close" aria-label={`Remove ${label}`} onClick={onClose}>
              <SparkIcon slug="close" size="small" className="spark-tag-general-close-icon" />
            </button>
          </TooltipTrigger>
        ) : (
          <span className="spark-tag-general-close" aria-hidden="true">
            <SparkIcon slug="close" size="small" className="spark-tag-general-close-icon" />
          </span>
        )
      ) : null}
    </span>
  );
}
