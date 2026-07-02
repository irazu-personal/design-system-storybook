import { useEffect, useState, type ReactNode } from 'react';
import { ScrollBar } from '../ScrollBar/ScrollBar';
import { CardFooter } from './shared/CardFooter';
import { CardHeader } from './shared/CardHeader';
import { CardRightContent } from './shared/CardRightContent';
import { CardSlot } from './shared/CardSlot';
import './CardDefault.css';
import './shared/cardShared.css';

export type CardDefaultBorder = 'no' | 'yes';

/** Figma `Type`: `Default` | `Collpased` */
export type CardDefaultType = 'default' | 'collapsed';

export type CardDefaultProps = {
  border?: CardDefaultBorder;
  /** Figma `Type` — `collapsed` shows a chevron and toggles the content slot. */
  type?: CardDefaultType;
  /** Figma `Open` — only applies when `type="collapsed"`. */
  open?: boolean;
  showFooter?: boolean;
  showScrollBar?: boolean;
  showIconButtonPrefix?: boolean;
  showIconButtonSuffix?: boolean;
  showSecondaryButton?: boolean;
  showMainCta?: boolean;
  title?: string;
  subtitle?: string;
  showSubtitle?: boolean;
  secondaryLabel?: string;
  primaryLabel?: string;
  cancelLabel?: string;
  footerSecondaryLabel?: string;
  children?: ReactNode;
  className?: string;
  onToggle?: (open: boolean) => void;
  onIconButtonPrefixClick?: () => void;
  onIconButtonSuffixClick?: () => void;
  onSecondaryClick?: () => void;
  onPrimaryClick?: () => void;
  onCancelClick?: () => void;
  onFooterSecondaryClick?: () => void;
};

export function CardDefault({
  border = 'no',
  type = 'default',
  open = false,
  showFooter = false,
  showScrollBar = false,
  showIconButtonPrefix = false,
  showIconButtonSuffix = false,
  showSecondaryButton = false,
  showMainCta = false,
  title = 'Long title',
  subtitle = 'Subtitle',
  showSubtitle = true,
  secondaryLabel = 'Show more',
  primaryLabel = 'Show more',
  cancelLabel = 'Cancel',
  footerSecondaryLabel = 'Show more',
  children,
  className = '',
  onToggle,
  onIconButtonPrefixClick,
  onIconButtonSuffixClick,
  onSecondaryClick,
  onPrimaryClick,
  onCancelClick,
  onFooterSecondaryClick,
}: CardDefaultProps) {
  const isCollapsedType = type === 'collapsed';
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const isContentVisible = !isCollapsedType || isOpen;

  const handleToggle = () => {
    const next = !isOpen;
    setIsOpen(next);
    onToggle?.(next);
  };

  return (
    <div
      className={[
        'spark-card',
        'spark-card-default',
        border === 'yes' ? 'spark-card-bordered' : '',
        isCollapsedType ? 'spark-card-collapsible' : '',
        isCollapsedType && !isOpen ? 'spark-card-collapsed-closed' : '',
        isCollapsedType && isOpen ? 'spark-card-collapsed-open' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <CardHeader
        title={title}
        subtitle={subtitle}
        showSubtitle={showSubtitle}
        interactive={isCollapsedType}
        open={isOpen}
        onToggle={handleToggle}
        showChevron={isCollapsedType}
        rightContent={
          isCollapsedType ? undefined : (
            <CardRightContent
              showIconButtonPrefix={showIconButtonPrefix}
              showIconButtonSuffix={showIconButtonSuffix}
              showSecondaryButton={showSecondaryButton}
              showMainCta={showMainCta}
              secondaryLabel={secondaryLabel}
              primaryLabel={primaryLabel}
              onIconButtonPrefixClick={onIconButtonPrefixClick}
              onIconButtonSuffixClick={onIconButtonSuffixClick}
              onSecondaryClick={onSecondaryClick}
              onPrimaryClick={onPrimaryClick}
            />
          )
        }
      />
      {isContentVisible ? (
        <>
          <div className="spark-card-body">
            <CardSlot>{children}</CardSlot>
            {showScrollBar ? (
              <div className="spark-card-scrollbar">
                <ScrollBar type="vertical" />
              </div>
            ) : null}
          </div>
          {showFooter ? (
            <CardFooter
              variant="default"
              cancelLabel={cancelLabel}
              secondaryLabel={footerSecondaryLabel}
              onCancelClick={onCancelClick}
              onSecondaryClick={onFooterSecondaryClick}
            />
          ) : null}
        </>
      ) : null}
    </div>
  );
}
