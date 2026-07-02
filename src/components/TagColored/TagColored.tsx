import { SparkIcon } from '../SparkIcon';
import { TooltipTrigger } from '../Tooltip/TooltipTrigger';
import './TagColored.css';

export type TagColoredVariant =
  | 'pink'
  | 'burgundy'
  | 'purple'
  | 'blue'
  | 'cyan'
  | 'lime'
  | 'volcano'
  | 'peach'
  | 'yellow'
  | 'disabled';

export type TagColoredProps = {
  label?: string;
  variant?: TagColoredVariant;
  showPrefixIcon?: boolean;
  showSuffixIcon?: boolean;
  onDelete?: () => void;
  className?: string;
};

export function TagColored({
  label = 'Tag',
  variant = 'pink',
  showPrefixIcon = false,
  showSuffixIcon = false,
  onDelete,
  className = '',
}: TagColoredProps) {
  const isDisabled = variant === 'disabled';

  return (
    <span className={['spark-tag-colored', `spark-tag-colored-${variant}`, className].filter(Boolean).join(' ')}>
      {showPrefixIcon ? <SparkIcon slug="plus" size="small" className="spark-tag-colored-icon" /> : null}
      <span className="spark-tag-colored-label">{label}</span>
      {showSuffixIcon ? (
        <TooltipTrigger text={`Remove ${label}`} disabled={isDisabled}>
          <button
            type="button"
            className="spark-tag-colored-delete"
            aria-label={`Remove ${label}`}
            disabled={isDisabled}
            onClick={onDelete}
          >
            <SparkIcon slug="trash" size="small" className="spark-tag-colored-icon" />
          </button>
        </TooltipTrigger>
      ) : null}
    </span>
  );
}
