import { Button } from '../Button/Button';
import { SparkIcon } from '../SparkIcon';
import { OutlineFeedbackIcon } from '../shared/OutlineFeedbackIcon';
import type { NotificationFeedbackType } from '../shared/feedbackHelpers';
import './Notification.css';
import '../shared/feedbackIcons.css';

export type NotificationProps = {
  title?: string;
  content?: string;
  feedback?: NotificationFeedbackType;
  wide?: boolean;
  elevated?: boolean;
  showIcon?: boolean;
  showContent?: boolean;
  showButton?: boolean;
  showCloseButton?: boolean;
  actionLabel?: string;
  className?: string;
  onActionClick?: () => void;
  onCloseClick?: () => void;
};

export function Notification({
  title = 'Notification title',
  content = 'Interactively monetize corporate alignments and fully tested niche markets.',
  feedback = 'success',
  wide = false,
  elevated = true,
  showIcon = true,
  showContent = true,
  showButton = true,
  showCloseButton = true,
  actionLabel = 'Undo',
  className = '',
  onActionClick,
  onCloseClick,
}: NotificationProps) {
  return (
    <div
      className={[
        'spark-notification',
        `spark-notification-${feedback}`,
        wide ? 'spark-notification-wide' : '',
        !showContent ? 'spark-notification-title-only' : '',
        elevated ? 'spark-notification-elevated' : 'spark-notification-flat',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      role="status"
    >
      {showIcon ? (
        <div className="spark-notification-icon-wrap">
          <OutlineFeedbackIcon feedback={feedback} className="spark-notification-icon" />
        </div>
      ) : null}
      <div className="spark-notification-body">
        <div className={`spark-notification-content${wide ? ' spark-notification-content-wide' : ''}`}>
          <p className="spark-notification-title">{title}</p>
          {showContent ? <p className="spark-notification-text">{content}</p> : null}
        </div>
        {showButton ? (
          <Button variant="text" size="medium" type="button" className="spark-notification-action" onClick={onActionClick}>
            {actionLabel}
          </Button>
        ) : null}
      </div>
      {showCloseButton ? (
        <div className="spark-notification-close-wrap">
          <Button
            variant="ghost"
            size="medium"
            type="button"
            className="spark-notification-close"
            aria-label="Dismiss notification"
            onClick={onCloseClick}
            icon={<SparkIcon slug="close" size="small" />}
          />
        </div>
      ) : null}
    </div>
  );
}
