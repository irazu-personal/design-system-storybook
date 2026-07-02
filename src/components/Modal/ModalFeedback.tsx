import type { FeedbackType } from '../shared/feedbackHelpers';
import { ModalFooter, ModalHeader } from './shared/ModalParts';
import { ModalScene } from './shared/ModalScene';
import './Modal.css';

const DEFAULT_BODY_TEXT =
  'You are about to save these changes. This will update the shared workspace settings. Are you sure you want to continue?';

export type ModalFeedbackProps = {
  feedbackType?: FeedbackType;
  title?: string;
  content?: string;
  showClose?: boolean;
  showOverlay?: boolean;
  danger?: boolean;
  className?: string;
  onCloseClick?: () => void;
};

export function ModalFeedback({
  feedbackType = 'info',
  title = 'Long title',
  content = DEFAULT_BODY_TEXT,
  showClose = true,
  showOverlay = true,
  danger = false,
  className = '',
  onCloseClick,
}: ModalFeedbackProps) {
  const dialog = (
    <div
      className={['spark-modal', 'spark-modal-text', 'spark-modal-feedback', className]
        .filter(Boolean)
        .join(' ')}
      role="dialog"
      aria-modal="true"
      aria-labelledby="spark-modal-title"
    >
      <ModalHeader
        title={title}
        showSubtitle={false}
        showClose={showClose}
        feedbackType={feedbackType}
        onCloseClick={onCloseClick}
      />
      <div className="spark-modal-body spark-modal-body-text">
        <p className="spark-modal-text-content">{content}</p>
      </div>
      <ModalFooter danger={danger} />
    </div>
  );

  return (
    <ModalScene showOverlay={showOverlay} size="text">
      {dialog}
    </ModalScene>
  );
}
