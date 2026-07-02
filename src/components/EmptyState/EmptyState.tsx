import { Button, PlusIcon } from '../Button/Button';
import { sparkAssetUrl } from '../../utils/sparkAssetUrl';
import './EmptyState.css';

export type EmptyStateDirection = 'vertical' | 'horizontal';
export type EmptyStateSize = 'medium' | 'small';

export type EmptyStateProps = {
  title?: string;
  subtitle?: string;
  direction?: EmptyStateDirection;
  size?: EmptyStateSize;
  showSubtitle?: boolean;
  showMainButton?: boolean;
  ctaLabel?: string;
  onCtaClick?: () => void;
  className?: string;
};

const ILLUSTRATION_SRC: Record<EmptyStateSize, string> = {
  medium: sparkAssetUrl('illustrations/empty-state-box-medium.svg'),
  small: sparkAssetUrl('illustrations/empty-state-box-small.svg'),
};

function EmptyStateIllustration({ size }: { size: EmptyStateSize }) {
  return (
    <div className={`spark-empty-state-illustration spark-empty-state-illustration-${size}`} aria-hidden="true">
      <img src={ILLUSTRATION_SRC[size]} alt="" />
    </div>
  );
}

export function EmptyState({
  title = 'Title',
  subtitle = 'Subtitle',
  direction = 'vertical',
  size = 'medium',
  showSubtitle = true,
  showMainButton = false,
  ctaLabel = 'CTA',
  onCtaClick,
  className = '',
}: EmptyStateProps) {
  const rootClasses = [
    'spark-empty-state',
    `spark-empty-state-${direction}`,
    `spark-empty-state-${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClasses}>
      <EmptyStateIllustration size={size} />
      <div className="spark-empty-state-content">
        <p className="spark-empty-state-title">{title}</p>
        {showSubtitle ? <p className="spark-empty-state-subtitle">{subtitle}</p> : null}
        {showMainButton ? (
          <Button
            className="spark-empty-state-cta"
            size="small"
            variant="ghost"
            startIcon={<PlusIcon size="small" />}
            onClick={onCtaClick}
          >
            {ctaLabel}
          </Button>
        ) : null}
      </div>
    </div>
  );
}
