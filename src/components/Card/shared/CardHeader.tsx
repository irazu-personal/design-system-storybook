import type { ReactNode } from 'react';
import { SparkIcon } from '../../SparkIcon';
import './cardShared.css';

export type CardHeaderType = 'default' | 'step';

export type CardHeaderProps = {
  type?: CardHeaderType;
  divider?: boolean;
  stepNumber?: string;
  title?: string;
  subtitle?: string;
  showSubtitle?: boolean;
  rightContent?: ReactNode;
  /** Collapsed card — entire header toggles open/closed. */
  interactive?: boolean;
  open?: boolean;
  onToggle?: () => void;
  showChevron?: boolean;
  className?: string;
};

export function CardHeader({
  type = 'default',
  divider = false,
  stepNumber = '1',
  title = 'Long title',
  subtitle = 'Subtitle',
  showSubtitle = true,
  rightContent,
  interactive = false,
  open = false,
  onToggle,
  showChevron = false,
  className = '',
}: CardHeaderProps) {
  const headerClasses = [
    'spark-card-header',
    divider ? 'spark-card-header-divider' : '',
    interactive ? 'spark-card-header-interactive' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const headerMain = (
    <>
      <div className="spark-card-header-main">
        {type === 'step' ? (
          <div className="spark-card-header-step-badge">
            <span className="spark-card-step-badge" aria-hidden="true">
              {stepNumber}
            </span>
          </div>
        ) : null}
        <div className="spark-card-header-copy">
          <p className="spark-card-header-title">{title}</p>
          {showSubtitle ? <p className="spark-card-header-subtitle">{subtitle}</p> : null}
        </div>
      </div>
      {showChevron ? (
        <span className="spark-card-header-chevron" aria-hidden="true">
          <SparkIcon slug={open ? 'chevron-up' : 'chevron-down'} size="medium" />
        </span>
      ) : (
        rightContent
      )}
    </>
  );

  if (interactive) {
    return (
      <button
        type="button"
        className={headerClasses}
        aria-expanded={open}
        onClick={onToggle}
      >
        {headerMain}
      </button>
    );
  }

  return <div className={headerClasses}>{headerMain}</div>;
}
