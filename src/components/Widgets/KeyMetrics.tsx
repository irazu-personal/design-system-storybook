import { Fragment } from 'react';
import { Divider } from '../Divider/Divider';
import { SparkIcon } from '../SparkIcon';
import { OutlineFeedbackIcon } from '../shared/OutlineFeedbackIcon';
import '../shared/feedbackIcons.css';
import './Widgets.css';

export type KeyMetricsAmount = '1' | '2' | '3';

/** Category icons for the title row (Figma: tag, label, document shapes). */
export const KEY_METRICS_TITLE_ICON_SLUGS = ['tag', 'category', 'description', 'task', 'box-graph'] as const;

export type KeyMetricsTitleIconSlug = (typeof KEY_METRICS_TITLE_ICON_SLUGS)[number];

export type KeyMetricsItem = {
  title: string;
  metrics: string;
  /** Tag icon before the title (Figma: icon / show title icon). */
  showTitleIcon?: boolean;
  /** Which foundation icon to show when `showTitleIcon` is true. */
  iconSlug?: KeyMetricsTitleIconSlug;
  /** Warning feedback icon after the metric value (Figma: showFeedbackIcons). */
  showFeedbackIcons?: boolean;
};

export const DEFAULT_KEY_METRICS_ITEMS: KeyMetricsItem[] = [
  { title: 'Overview', metrics: '236' },
  { title: 'Labels', metrics: '3' },
  { title: 'Examples', metrics: '14', showTitleIcon: true, iconSlug: 'tag' },
];

export type KeyMetricsProps = {
  amount?: KeyMetricsAmount;
  items?: KeyMetricsItem[];
  /**
   * Master toggle for title icons on every item.
   * When omitted, each item uses its own `showTitleIcon` (Examples only in default data).
   */
  showTitleIcon?: boolean;
  /** Default title icon slug when an item omits `iconSlug`. */
  iconSlug?: KeyMetricsTitleIconSlug;
  /** Default for all items when an item omits `showFeedbackIcons`. */
  showFeedbackIcons?: boolean;
  className?: string;
};

function KeyMetricsItemView({
  item,
  defaultShowTitleIcon,
  defaultIconSlug,
  defaultShowFeedbackIcons,
}: {
  item: KeyMetricsItem;
  defaultShowTitleIcon: boolean | undefined;
  defaultIconSlug: KeyMetricsTitleIconSlug;
  defaultShowFeedbackIcons: boolean;
}) {
  const showTitleIcon =
    defaultShowTitleIcon !== undefined ? defaultShowTitleIcon : (item.showTitleIcon ?? false);
  const titleIconSlug = item.iconSlug ?? defaultIconSlug;
  const showFeedbackIcon = item.showFeedbackIcons ?? defaultShowFeedbackIcons;

  return (
    <div className="spark-key-metrics-item">
      <div className="spark-key-metrics-label-row">
        {showTitleIcon ? (
          <SparkIcon slug={titleIconSlug} size="small" className="spark-key-metrics-title-icon" />
        ) : null}
        <p className="spark-key-metrics-label">{item.title}</p>
      </div>
      <div className="spark-key-metrics-value-row">
        <p className="spark-key-metrics-value">{item.metrics}</p>
        {showFeedbackIcon ? (
          <OutlineFeedbackIcon feedback="warning" className="spark-key-metrics-feedback-icon" />
        ) : null}
      </div>
    </div>
  );
}

export function KeyMetrics({
  amount = '3',
  items = DEFAULT_KEY_METRICS_ITEMS,
  showTitleIcon,
  iconSlug = 'tag',
  showFeedbackIcons = true,
  className = '',
}: KeyMetricsProps) {
  const visibleItems = items.slice(0, Number(amount));
  const rootClasses = [
    'spark-key-metrics',
    amount === '1' ? 'spark-key-metrics-amount-1' : '',
    amount === '3' ? 'spark-key-metrics-amount-3' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClasses}>
      {visibleItems.map((item, index) => (
        <Fragment key={item.title}>
          {index > 0 ? <Divider direction="vertical" className="spark-key-metrics-divider" /> : null}
          <KeyMetricsItemView
            item={item}
            defaultShowTitleIcon={showTitleIcon}
            defaultIconSlug={iconSlug}
            defaultShowFeedbackIcons={showFeedbackIcons}
          />
        </Fragment>
      ))}
    </div>
  );
}
