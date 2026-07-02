import { Button } from '../../Button/Button';
import './cardShared.css';

export type CardFooterVariant = 'default' | 'step';

export type CardFooterProps = {
  variant?: CardFooterVariant;
  cancelLabel?: string;
  secondaryLabel?: string;
  linkLabel?: string;
  showCancel?: boolean;
  showSecondary?: boolean;
  onCancelClick?: () => void;
  onSecondaryClick?: () => void;
  onLinkClick?: () => void;
  className?: string;
};

export function CardFooter({
  variant = 'default',
  cancelLabel = 'Cancel',
  secondaryLabel = 'Show more',
  linkLabel = 'Show more',
  showCancel = true,
  showSecondary = true,
  onCancelClick,
  onSecondaryClick,
  onLinkClick,
  className = '',
}: CardFooterProps) {
  if (variant === 'step') {
    return (
      <div className={['spark-card-footer', className].filter(Boolean).join(' ')}>
        <Button
          variant="ghost"
          size="small"
          type="button"
          className="spark-card-footer-link"
          onClick={onLinkClick ?? onSecondaryClick}
        >
          {linkLabel}
        </Button>
      </div>
    );
  }

  return (
    <div className={['spark-card-footer', className].filter(Boolean).join(' ')}>
      {showCancel ? (
        <Button
          variant="ghost"
          size="small"
          type="button"
          className="spark-card-footer-cancel"
          onClick={onCancelClick}
        >
          {cancelLabel}
        </Button>
      ) : null}
      {showSecondary ? (
        <Button variant="tertiary" size="small" type="button" onClick={onSecondaryClick}>
          {secondaryLabel}
        </Button>
      ) : null}
    </div>
  );
}
