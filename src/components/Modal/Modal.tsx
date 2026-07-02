import type { ReactNode } from 'react';
import { ScrollBar } from '../ScrollBar/ScrollBar';
import { ModalFooter, ModalHeader } from './shared/ModalParts';
import { ModalScene } from './shared/ModalScene';
import './Modal.css';

export type ModalProps = {
  title?: string;
  subtitle?: string;
  showSubtitle?: boolean;
  showClose?: boolean;
  showScrollBar?: boolean;
  showFooterSlot?: boolean;
  showOverlay?: boolean;
  footerType?: 'default' | 'checkbox';
  danger?: boolean;
  children?: ReactNode;
  className?: string;
  onCloseClick?: () => void;
};

export function Modal({
  title = 'Long title',
  subtitle = 'Subtitle',
  showSubtitle = true,
  showClose = true,
  showScrollBar = true,
  showFooterSlot = false,
  showOverlay = true,
  footerType = 'default',
  danger = false,
  children,
  className = '',
  onCloseClick,
}: ModalProps) {
  const dialog = (
    <div
      className={['spark-modal', 'spark-modal-slot', className].filter(Boolean).join(' ')}
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
      <div className="spark-modal-body spark-modal-body-slot">
        {children ?? <div className="spark-modal-slot-placeholder" aria-hidden="true" />}
        {showScrollBar ? <ScrollBar className="spark-modal-scrollbar" /> : null}
      </div>
      <ModalFooter
        footerType={footerType}
        danger={danger}
        showFooterSlot={showFooterSlot}
      />
    </div>
  );

  return (
    <ModalScene showOverlay={showOverlay} size="slot">
      {dialog}
    </ModalScene>
  );
}
