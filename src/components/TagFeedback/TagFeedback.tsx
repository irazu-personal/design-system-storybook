import { SparkIcon } from '../SparkIcon';
import './TagFeedback.css';

export type TagFeedbackVariant = 'default' | 'processing' | 'success' | 'warning' | 'error';

export type TagFeedbackProps = {
  label?: string;
  variant?: TagFeedbackVariant;
  showIcon?: boolean;
  className?: string;
};

const FEEDBACK_ICONS: Record<TagFeedbackVariant, string | null> = {
  default: null,
  processing: 'refresh',
  success: 'circle-check',
  warning: 'circle-alert',
  error: 'circle-x',
};

export function TagFeedback({
  label = 'Tag',
  variant = 'default',
  showIcon = false,
  className = '',
}: TagFeedbackProps) {
  const icon = FEEDBACK_ICONS[variant];

  return (
    <span className={['spark-tag-feedback', `spark-tag-feedback-${variant}`, className].filter(Boolean).join(' ')}>
      {showIcon && icon ? <SparkIcon slug={icon} size="small" className="spark-tag-feedback-icon" /> : null}
      <span className="spark-tag-feedback-label">{label}</span>
    </span>
  );
}
