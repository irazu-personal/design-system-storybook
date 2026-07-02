import { ModalFooter, ModalHeader } from './shared/ModalParts';
import { ModalScene } from './shared/ModalScene';
import './Modal.css';

const DEFAULT_BODY_TEXT =
  'You are about to save these changes. This will update the shared workspace settings. Are you sure you want to continue?';

export type ModalTextProps = {
  title?: string;
  subtitle?: string;
  showSubtitle?: boolean;
  showClose?: boolean;
  showOverlay?: boolean;
  content?: string;
  danger?: boolean;
  className?: string;
  onCloseClick?: () => void;
};

export function ModalText({
  title = 'Long title',
  subtitle = 'Subtitle',
  showSubtitle = true,
  showClose = true,
  showOverlay = true,
  content = DEFAULT_BODY_TEXT,
  danger = false,
  className = '',
  onCloseClick,
}: ModalTextProps) {
  const dialog = (
    <div
      className={['spark-modal', 'spark-modal-text', className].filter(Boolean).join(' ')}
      role="dialog"
      aria-modal="true"
      aria-labelledby="spark-modal-title"
    >
      <ModalHeader
        title={title}
        subtitle={subtitle}
        showSubtitle={showSubtitle}
        showClose={showClose}
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
