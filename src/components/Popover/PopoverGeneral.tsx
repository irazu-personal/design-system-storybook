import type { ReactNode } from 'react';
import { Button } from '../Button/Button';
import { SparkIcon } from '../SparkIcon';
import { PopoverShell, type PopoverTipDirection } from './shared/PopoverShell';
import { PopoverSlot } from './shared/PopoverSlot';
import './PopoverGeneral.css';
import './shared/popoverShared.css';

export type PopoverGeneralProps = {
  tip?: boolean;
  tipDirection?: PopoverTipDirection;
  header?: boolean;
  footer?: boolean;
  title?: string;
  showMinimize?: boolean;
  showClose?: boolean;
  showFooterCancel?: boolean;
  showFooterPrimary?: boolean;
  cancelLabel?: string;
  primaryLabel?: string;
  children?: ReactNode;
  className?: string;
  onMinimizeClick?: () => void;
  onCloseClick?: () => void;
  onCancelClick?: () => void;
  onPrimaryClick?: () => void;
};

export function PopoverGeneral({
  tip = true,
  tipDirection = 'right',
  header = true,
  footer = true,
  title = 'Title',
  showMinimize = true,
  showClose = true,
  showFooterCancel = true,
  showFooterPrimary = true,
  cancelLabel = 'Cancel',
  primaryLabel = 'Show more',
  children,
  className = '',
  onMinimizeClick,
  onCloseClick,
  onCancelClick,
  onPrimaryClick,
}: PopoverGeneralProps) {
  return (
    <PopoverShell
      tip={tip}
      tipDirection={tipDirection}
      className={className}
      panelClassName="spark-popover-general-panel"
    >
      {header ? (
        <div className="spark-popover-general-header">
          <h3 className="spark-popover-general-title">{title}</h3>
          <div className="spark-popover-general-actions">
            {showMinimize ? (
              <Button
                variant="ghost"
                size="tiny"
                type="button"
                aria-label="Minimize"
                icon={<SparkIcon slug="minus" size="small" />}
                onClick={onMinimizeClick}
              />
            ) : null}
            {showClose ? (
              <Button
                variant="ghost"
                size="tiny"
                type="button"
                aria-label="Close"
                icon={<SparkIcon slug="close" size="small" />}
                onClick={onCloseClick}
              />
            ) : null}
          </div>
        </div>
      ) : null}
      <PopoverSlot>{children}</PopoverSlot>
      {footer && (showFooterCancel || showFooterPrimary) ? (
        <footer className="spark-popover-general-footer">
          {showFooterCancel ? (
            <Button variant="tertiary" size="small" type="button" onClick={onCancelClick}>
              {cancelLabel}
            </Button>
          ) : null}
          {showFooterPrimary ? (
            <Button variant="primary" size="small" type="button" onClick={onPrimaryClick}>
              {primaryLabel}
            </Button>
          ) : null}
        </footer>
      ) : null}
    </PopoverShell>
  );
}
