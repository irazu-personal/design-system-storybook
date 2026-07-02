import { Button } from '../Button/Button';
import { SparkIcon } from '../SparkIcon';
import { FeedbackIcon } from '../shared/FeedbackIcon';
import type { FeedbackType } from '../shared/feedbackHelpers';
import './Toast.css';
import '../shared/feedbackIcons.css';

export type ToastProps = {
  title?: string;
  content?: string;
  feedbackType?: FeedbackType;
  detailed?: boolean;
  showButtons?: boolean;
  showIconButton?: boolean;
  closeLabel?: string;
  actionLabel?: string;
  className?: string;
  onCloseClick?: () => void;
  onActionClick?: () => void;
  onDismissClick?: () => void;
};

export function Toast({
  title = 'Notification title',
  content = 'Interactively monetize corporate alignments and fully tested niche markets.',
  feedbackType = 'success',
  detailed = false,
  showButtons = true,
  showIconButton = true,
  closeLabel = 'Close',
  actionLabel = 'Action',
  className = '',
  onCloseClick,
  onActionClick,
  onDismissClick,
}: ToastProps) {
  if (detailed) {
    return (
      <div
        className={['spark-toast', 'spark-toast-detailed', `spark-toast-${feedbackType}`, className]
          .filter(Boolean)
          .join(' ')}
        role="status"
      >
        <div className="spark-toast-detailed-header">
          <div className="spark-toast-detailed-main">
            <div className="spark-toast-title-row">
              <FeedbackIcon feedbackType={feedbackType} className="spark-toast-icon" />
              <p className="spark-toast-detailed-title">{title}</p>
            </div>
            <p className="spark-toast-detailed-content">{content}</p>
          </div>
          {showIconButton ? (
            <Button
              variant="ghost"
              size="medium"
              type="button"
              className="spark-toast-icon-close"
              aria-label="Dismiss toast"
              onClick={onDismissClick ?? onCloseClick}
              icon={<SparkIcon slug="close" size="small" />}
            />
          ) : null}
        </div>
        {showButtons ? (
          <div className="spark-toast-footer">
            <Button variant="ghost" size="tiny" type="button" onClick={onCloseClick}>
              {closeLabel}
            </Button>
            <Button variant="primary" size="tiny" type="button" onClick={onActionClick}>
              {actionLabel}
            </Button>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className={['spark-toast', `spark-toast-${feedbackType}`, className].filter(Boolean).join(' ')}
      role="status"
    >
      <div className="spark-toast-simple-content">
        <FeedbackIcon feedbackType={feedbackType} className="spark-toast-icon" />
        <p className="spark-toast-simple-title">{title}</p>
      </div>
      {showButtons ? (
        <div className="spark-toast-simple-actions">
          <Button variant="tertiary" size="tiny" type="button" onClick={onCloseClick}>
            {closeLabel}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
