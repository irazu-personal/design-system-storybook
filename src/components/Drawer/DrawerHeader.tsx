import { Button } from '../Button/Button';
import { Breadcrumb, type BreadcrumbItemData } from '../Breadcrumb/Breadcrumb';
import './DrawerHeader.css';

export type DrawerHeaderProps = {
  divider?: boolean;
  stepsBreadcrumb?: boolean;
  breadcrumbItems?: BreadcrumbItemData[];
  showCloseButton?: boolean;
  showPrimaryButton?: boolean;
  title?: string;
  subtitle?: string;
  showSubtitle?: boolean;
  closeLabel?: string;
  primaryLabel?: string;
  className?: string;
  onCloseClick?: () => void;
  onPrimaryClick?: () => void;
};

export function DrawerHeader({
  divider = true,
  stepsBreadcrumb = false,
  breadcrumbItems = [],
  showCloseButton = false,
  showPrimaryButton = true,
  title = 'Long title',
  subtitle = 'Subtitle',
  showSubtitle = true,
  closeLabel = 'Close',
  primaryLabel = 'Next',
  className = '',
  onCloseClick,
  onPrimaryClick,
}: DrawerHeaderProps) {
  const actions = (
    <div className="spark-drawer-header-actions">
      {showCloseButton ? (
        <Button variant="tertiary" size="small" type="button" onClick={onCloseClick}>
          {closeLabel}
        </Button>
      ) : null}
      {showPrimaryButton ? (
        <Button variant="primary" size="small" type="button" onClick={onPrimaryClick}>
          {primaryLabel}
        </Button>
      ) : null}
    </div>
  );

  if (stepsBreadcrumb) {
    return (
      <header
        className={[
          'spark-drawer-header',
          'spark-drawer-header-steps',
          divider ? 'spark-drawer-header-divider' : '',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <div className="spark-drawer-header-steps-row">
          <Breadcrumb
            items={breadcrumbItems}
            type="steps"
            separatorShape="chevron"
            className="spark-drawer-header-breadcrumb"
          />
          {actions}
        </div>
        <div className="spark-drawer-header-copy">
          <h2 className="spark-drawer-header-title">{title}</h2>
          {showSubtitle ? <p className="spark-drawer-header-subtitle">{subtitle}</p> : null}
        </div>
      </header>
    );
  }

  return (
    <header
      className={[
        'spark-drawer-header',
        divider ? 'spark-drawer-header-divider' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="spark-drawer-header-leading">
        <div className="spark-drawer-header-copy">
          <h2 className="spark-drawer-header-title">{title}</h2>
          {showSubtitle ? <p className="spark-drawer-header-subtitle">{subtitle}</p> : null}
        </div>
      </div>
      {actions}
    </header>
  );
}
