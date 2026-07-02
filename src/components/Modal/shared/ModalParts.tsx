import type { ReactNode } from 'react';
import { Button } from '../../Button/Button';
import { SparkIcon } from '../../SparkIcon';
import { FeedbackIcon } from '../../shared/FeedbackIcon';
import type { FeedbackType } from '../../shared/feedbackHelpers';
import '../Modal.css';

export type ModalHeaderProps = {
  title?: string;
  subtitle?: string;
  showSubtitle?: boolean;
  showClose?: boolean;
  feedbackType?: FeedbackType;
  className?: string;
  onCloseClick?: () => void;
};

export function ModalHeader({
  title = 'Long title',
  subtitle = 'Subtitle',
  showSubtitle = true,
  showClose = true,
  feedbackType,
  className = '',
  onCloseClick,
}: ModalHeaderProps) {
  return (
    <header className={['spark-modal-header', className].filter(Boolean).join(' ')}>
      <div className="spark-modal-header-leading">
        {feedbackType ? (
          <FeedbackIcon feedbackType={feedbackType} className="spark-modal-header-feedback-icon" />
        ) : null}
        <div className="spark-modal-header-copy">
          <h2 id="spark-modal-title" className="spark-modal-header-title">
            {title}
          </h2>
          {showSubtitle && !feedbackType ? (
            <p className="spark-modal-header-subtitle">{subtitle}</p>
          ) : null}
        </div>
      </div>
      {showClose ? (
        <Button
          variant="ghost"
          size="tiny"
          type="button"
          className="spark-modal-header-close"
          aria-label="Close modal"
          icon={<SparkIcon slug="close" size="small" />}
          onClick={onCloseClick}
        />
      ) : null}
    </header>
  );
}

export type ModalFooterType = 'default' | 'checkbox';

export type ModalFooterProps = {
  footerType?: ModalFooterType;
  danger?: boolean;
  showFooterSlot?: boolean;
  showTertiaryButton?: boolean;
  showMainButton?: boolean;
  checkboxLabel?: string;
  tertiaryLabel?: string;
  primaryLabel?: string;
  footerSlot?: ReactNode;
  className?: string;
  onTertiaryClick?: () => void;
  onPrimaryClick?: () => void;
};

export function ModalFooter({
  footerType = 'default',
  danger = false,
  showFooterSlot = false,
  showTertiaryButton = true,
  showMainButton = true,
  checkboxLabel = 'Checkbox',
  tertiaryLabel = 'Button',
  primaryLabel = 'Button',
  footerSlot,
  className = '',
  onTertiaryClick,
  onPrimaryClick,
}: ModalFooterProps) {
  return (
    <footer className={['spark-modal-footer', className].filter(Boolean).join(' ')}>
      {showFooterSlot || footerType === 'checkbox' ? (
        <div className="spark-modal-footer-slot">
          {footerSlot ??
            (footerType === 'checkbox' ? (
              <label className="spark-modal-footer-checkbox">
                <input type="checkbox" />
                <span>{checkboxLabel}</span>
              </label>
            ) : (
              <div className="spark-modal-footer-slot-placeholder" aria-hidden="true" />
            ))}
        </div>
      ) : null}
      <div className="spark-modal-footer-actions">
        {showTertiaryButton ? (
          <Button variant="tertiary" size="medium" type="button" onClick={onTertiaryClick}>
            {tertiaryLabel}
          </Button>
        ) : null}
        {showMainButton ? (
          <Button
            variant="primary"
            size="medium"
            type="button"
            danger={danger}
            onClick={onPrimaryClick}
          >
            {primaryLabel}
          </Button>
        ) : null}
      </div>
    </footer>
  );
}
