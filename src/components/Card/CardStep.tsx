import type { ReactNode } from 'react';
import { ScrollBar } from '../ScrollBar/ScrollBar';
import { CardFooter } from './shared/CardFooter';
import { CardHeader } from './shared/CardHeader';
import { CardRightContent } from './shared/CardRightContent';
import { CardSlot } from './shared/CardSlot';
import './CardStep.css';
import './shared/cardShared.css';

export type CardStepProps = {
  footer?: boolean;
  showScrollBar?: boolean;
  headerDivider?: boolean;
  stepNumber?: string;
  showIconButtonPrefix?: boolean;
  showIconButtonSuffix?: boolean;
  showSecondaryButton?: boolean;
  showMainCta?: boolean;
  title?: string;
  subtitle?: string;
  showSubtitle?: boolean;
  linkLabel?: string;
  children?: ReactNode;
  className?: string;
  onIconButtonPrefixClick?: () => void;
  onIconButtonSuffixClick?: () => void;
  onLinkClick?: () => void;
};

export function CardStep({
  footer = true,
  showScrollBar = false,
  headerDivider = false,
  stepNumber = '1',
  showIconButtonPrefix = false,
  showIconButtonSuffix = false,
  showSecondaryButton = false,
  showMainCta = false,
  title = 'Long title',
  subtitle = 'Subtitle',
  showSubtitle = true,
  linkLabel = 'Show more',
  children,
  className = '',
  onIconButtonPrefixClick,
  onIconButtonSuffixClick,
  onLinkClick,
}: CardStepProps) {
  return (
    <div className={['spark-card', 'spark-card-step', 'spark-card-bordered', className].filter(Boolean).join(' ')}>
      <CardHeader
        type="step"
        divider={headerDivider}
        stepNumber={stepNumber}
        title={title}
        subtitle={subtitle}
        showSubtitle={showSubtitle}
        rightContent={
          <CardRightContent
            showIconButtonPrefix={showIconButtonPrefix}
            showIconButtonSuffix={showIconButtonSuffix}
            showSecondaryButton={showSecondaryButton}
            showMainCta={showMainCta}
            onIconButtonPrefixClick={onIconButtonPrefixClick}
            onIconButtonSuffixClick={onIconButtonSuffixClick}
          />
        }
      />
      <div className="spark-card-body">
        <CardSlot>{children}</CardSlot>
        {showScrollBar ? (
          <div className="spark-card-scrollbar">
            <ScrollBar type="vertical" />
          </div>
        ) : null}
      </div>
      {footer ? <CardFooter variant="step" linkLabel={linkLabel} onLinkClick={onLinkClick} /> : null}
    </div>
  );
}
