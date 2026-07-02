import { Button, PlusIcon } from '../Button/Button';
import { SparkIcon } from '../SparkIcon';
import './Header.css';

export type ActionBarProps = {
  showButtonIconLeft?: boolean;
  showButtonIconRight?: boolean;
  showMainCta?: boolean;
  showSecondaryButton?: boolean;
  secondaryLabel?: string;
  primaryLabel?: string;
  className?: string;
  onMoreClick?: () => void;
  onIconClick?: () => void;
  onSecondaryClick?: () => void;
  onPrimaryClick?: () => void;
};

export function ActionBar({
  showButtonIconLeft = true,
  showButtonIconRight = true,
  showMainCta = true,
  showSecondaryButton = true,
  secondaryLabel = 'Task Prompt',
  primaryLabel = 'Create New Project',
  className = '',
  onMoreClick,
  onIconClick,
  onSecondaryClick,
  onPrimaryClick,
}: ActionBarProps) {
  return (
    <div className={['spark-header-action-bar', className].filter(Boolean).join(' ')}>
      {showButtonIconLeft ? (
        <Button
          variant="tertiary"
          size="medium"
          type="button"
          aria-label="More actions"
          icon={<SparkIcon slug="dots" size="medium" />}
          onClick={onMoreClick}
        />
      ) : null}
      {showButtonIconRight ? (
        <Button
          variant="secondary"
          size="medium"
          type="button"
          aria-label="Add"
          icon={<PlusIcon size="medium" />}
          onClick={onIconClick}
        />
      ) : null}
      {showSecondaryButton ? (
        <Button variant="secondary" size="medium" type="button" onClick={onSecondaryClick}>
          {secondaryLabel}
        </Button>
      ) : null}
      {showMainCta ? (
        <Button
          variant="primary"
          size="medium"
          type="button"
          startIcon={<PlusIcon size="medium" />}
          onClick={onPrimaryClick}
        >
          {primaryLabel}
        </Button>
      ) : null}
    </div>
  );
}
