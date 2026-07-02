import { Button } from '../../Button/Button';
import { SparkIcon } from '../../SparkIcon';
import './cardShared.css';

export type CardRightContentProps = {
  /** Figma `Show Icon Button Prefix` */
  showIconButtonPrefix?: boolean;
  /** Figma `Show Icon Button Suffix` */
  showIconButtonSuffix?: boolean;
  showSecondaryButton?: boolean;
  showMainCta?: boolean;
  secondaryLabel?: string;
  primaryLabel?: string;
  onIconButtonPrefixClick?: () => void;
  onIconButtonSuffixClick?: () => void;
  onSecondaryClick?: () => void;
  onPrimaryClick?: () => void;
  className?: string;
};

export function CardRightContent({
  showIconButtonPrefix = false,
  showIconButtonSuffix = false,
  showSecondaryButton = false,
  showMainCta = false,
  secondaryLabel = 'Show more',
  primaryLabel = 'Show more',
  onIconButtonPrefixClick,
  onIconButtonSuffixClick,
  onSecondaryClick,
  onPrimaryClick,
  className = '',
}: CardRightContentProps) {
  if (
    !showIconButtonPrefix &&
    !showIconButtonSuffix &&
    !showSecondaryButton &&
    !showMainCta
  ) {
    return null;
  }

  return (
    <div className={['spark-card-right-content', className].filter(Boolean).join(' ')}>
      {showIconButtonPrefix ? (
        <Button
          variant="tertiary"
          size="small"
          type="button"
          aria-label="Close"
          iconSlug="close"
          icon={<SparkIcon slug="close" size="small" />}
          onClick={onIconButtonPrefixClick}
        />
      ) : null}
      {showIconButtonSuffix ? (
        <Button
          variant="tertiary"
          size="small"
          type="button"
          aria-label="Reload"
          iconSlug="reload"
          icon={<SparkIcon slug="reload" size="small" />}
          onClick={onIconButtonSuffixClick}
        />
      ) : null}
      {showSecondaryButton ? (
        <Button variant="tertiary" size="small" type="button" onClick={onSecondaryClick}>
          {secondaryLabel}
        </Button>
      ) : null}
      {showMainCta ? (
        <Button variant="primary" size="small" type="button" onClick={onPrimaryClick}>
          {primaryLabel}
        </Button>
      ) : null}
    </div>
  );
}
