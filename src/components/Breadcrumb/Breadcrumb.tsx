import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { SparkIcon } from '../SparkIcon';
import './Breadcrumb.css';

export type BreadcrumbItemData = {
  label: string;
  href?: string;
  /** Optional icon rendered before the label (left side). */
  icon?: ReactNode;
  /** Renders a chevron-down after the label to signal a popover trigger. */
  chevron?: boolean;
  /** When true, shows chevron-up (popover open). Matches Figma `.Icon-Chevron` Open=Yes. */
  chevronOpen?: boolean;
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>['onClick'];
};

/** Matches Figma `.Breadcrumb-Item` type axis: Navigation | Steps. */
export type BreadcrumbType = 'navigation' | 'steps';
export type BreadcrumbSeparatorShape = 'slash' | 'chevron';
/** Matches Figma `.Icon-Chevron` state axis: Default | Active. */
export type BreadcrumbChevronState = 'default' | 'active';

export type BreadcrumbProps = {
  /** 2–4 items. The last item is the current page (active, non-interactive). */
  items: BreadcrumbItemData[];
  /** Navigation link styling, or steps styling with tertiary past links and brand active page. */
  type?: BreadcrumbType;
  /** Slash text or chevron-right icon between items. */
  separatorShape?: BreadcrumbSeparatorShape;
  className?: string;
};

type BreadcrumbSeparatorType = 'default' | 'primary' | 'brand';

function separatorTypeForIndex(
  itemIndex: number,
  itemCount: number,
  breadcrumbType: BreadcrumbType,
): BreadcrumbSeparatorType {
  if (itemIndex !== itemCount - 1) {
    return 'default';
  }
  return breadcrumbType === 'steps' ? 'brand' : 'primary';
}

export function BreadcrumbChevron({
  open = false,
  state = 'default',
}: {
  open?: boolean;
  state?: BreadcrumbChevronState;
}) {
  return (
    <span
      className={`spark-breadcrumb-chevron spark-breadcrumb-chevron-${state}${open ? ' spark-breadcrumb-chevron-open' : ''}`}
      aria-hidden="true"
    >
      <SparkIcon slug={open ? 'chevron-up' : 'chevron-down'} />
    </span>
  );
}

function BreadcrumbSeparator({
  shape,
  separatorType,
}: {
  shape: BreadcrumbSeparatorShape;
  separatorType: BreadcrumbSeparatorType;
}) {
  return (
    <span
      className={`spark-breadcrumb-separator spark-breadcrumb-separator-${separatorType} spark-breadcrumb-separator-${shape}`}
      aria-hidden="true"
    >
      {shape === 'chevron' ? <SparkIcon slug="chevron-right" size="small" /> : '/'}
    </span>
  );
}

function BreadcrumbLink({
  item,
  itemType,
}: {
  item: BreadcrumbItemData;
  itemType: BreadcrumbType;
}) {
  const linkClass =
    itemType === 'steps'
      ? 'spark-breadcrumb-item spark-breadcrumb-item-link spark-breadcrumb-item-link-steps'
      : 'spark-breadcrumb-item spark-breadcrumb-item-link spark-breadcrumb-item-link-navigation';

  return (
    <a href={item.href ?? '#'} className={linkClass} onClick={item.onClick}>
      {item.icon && <span className="spark-breadcrumb-icon">{item.icon}</span>}
      <span className="spark-breadcrumb-label">{item.label}</span>
      {item.chevron && (
        <BreadcrumbChevron open={item.chevronOpen} state="default" />
      )}
    </a>
  );
}

function BreadcrumbCurrent({
  item,
  itemType,
}: {
  item: BreadcrumbItemData;
  itemType: BreadcrumbType;
}) {
  const activeClass =
    itemType === 'steps'
      ? 'spark-breadcrumb-item-active-steps'
      : 'spark-breadcrumb-item-active';

  return (
    <span className={`spark-breadcrumb-item ${activeClass}`} aria-current="page">
      {item.icon && <span className="spark-breadcrumb-icon">{item.icon}</span>}
      <span className="spark-breadcrumb-label">{item.label}</span>
      {item.chevron && (
        <BreadcrumbChevron open={item.chevronOpen} state="active" />
      )}
    </span>
  );
}

export function Breadcrumb({
  items,
  type = 'navigation',
  separatorShape = 'slash',
  className = '',
}: BreadcrumbProps) {
  const clampedItems = items.slice(0, 4);

  return (
    <nav aria-label="Breadcrumb" className={`spark-breadcrumb${className ? ` ${className}` : ''}`}>
      <ol className="spark-breadcrumb-list">
        {clampedItems.map((item, index) => {
          const isLast = index === clampedItems.length - 1;
          const separatorType = separatorTypeForIndex(index, clampedItems.length, type);
          return (
            <li key={index} className="spark-breadcrumb-item-wrapper">
              {index > 0 && (
                <BreadcrumbSeparator shape={separatorShape} separatorType={separatorType} />
              )}
              {isLast ? (
                <BreadcrumbCurrent item={item} itemType={type} />
              ) : (
                <BreadcrumbLink item={item} itemType={type} />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
