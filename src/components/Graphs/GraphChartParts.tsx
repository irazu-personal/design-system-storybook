import type { CSSProperties } from 'react';
import { Button } from '../Button/Button';
import {
  DEFAULT_Y_LABELS,
  type GraphAxes,
  type GraphLegendItem,
  HORIZONTAL_VALUE_LABELS,
  seriesColor,
  type GraphTheme,
} from './graphConstants';
import './Graphs.css';

type GraphChartHeaderProps = {
  title: string;
  showConfigure?: boolean;
  subtitle?: string;
};

export function GraphChartHeader({ title, showConfigure = false, subtitle }: GraphChartHeaderProps) {
  return (
    <div className="spark-graph-header">
      <p className="spark-graph-title">{title}</p>
      {showConfigure ? (
        <Button variant="link" size="tiny">
          Configure
        </Button>
      ) : null}
      {subtitle ? <p className="spark-graph-subtitle">{subtitle}</p> : null}
    </div>
  );
}

type GraphYAxisGridProps = {
  axes: GraphAxes;
  labels?: string[];
};

export function GraphYAxisGrid({ axes, labels = DEFAULT_Y_LABELS }: GraphYAxisGridProps) {
  if (axes === 'hidden') {
    return <div className="spark-graph-grid-hidden" aria-hidden="true" />;
  }

  return (
    <div className="spark-graph-y-grid">
      {labels.map((label) => (
        <div key={label} className="spark-graph-y-row">
          <span className="spark-graph-y-label">{label}</span>
          <span className="spark-graph-grid-line" />
        </div>
      ))}
    </div>
  );
}

type GraphHorizontalAxisGridProps = {
  axes: GraphAxes;
};

export function GraphHorizontalAxisGrid({ axes }: GraphHorizontalAxisGridProps) {
  if (axes === 'hidden') {
    return <div className="spark-graph-grid-hidden-horizontal" aria-hidden="true" />;
  }

  return (
    <div className="spark-graph-horizontal-grid">
      {HORIZONTAL_VALUE_LABELS.map((label, index) => (
        <div key={label} className="spark-graph-horizontal-grid-col">
          <span
            className={[
              'spark-graph-grid-line-vertical',
              index === 0 ? 'spark-graph-grid-line-vertical-axis' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          />
        </div>
      ))}
    </div>
  );
}

type GraphHorizontalValueAxisProps = {
  axes: GraphAxes;
  labels?: string[];
  offsetLeft?: number;
};

export function GraphHorizontalValueAxis({
  axes,
  labels = HORIZONTAL_VALUE_LABELS,
  offsetLeft = 32,
}: GraphHorizontalValueAxisProps) {
  if (axes === 'hidden') {
    return null;
  }

  return (
    <div className="spark-graph-horizontal-value-axis" style={{ paddingLeft: offsetLeft }}>
      {labels.map((label) => (
        <span key={label} className="spark-graph-horizontal-value-label">
          {label}
        </span>
      ))}
    </div>
  );
}

type GraphBarCategoryColumnProps = {
  labels: string[];
};

export function GraphBarCategoryColumn({ labels }: GraphBarCategoryColumnProps) {
  return (
    <div className="spark-graph-bar-category-column">
      {labels.map((label) => (
        <span key={label} className="spark-graph-bar-category-column-label">
          {label}
        </span>
      ))}
    </div>
  );
}

type GraphXAxisLabelsProps = {
  axes: GraphAxes;
  labels: string[];
  xAxisTitle?: boolean;
  xAxisTitleText?: string;
};

export function GraphXAxisLabels({
  axes,
  labels,
  xAxisTitle = true,
  xAxisTitleText = 'Text',
}: GraphXAxisLabelsProps) {
  if (axes === 'hidden') {
    return null;
  }

  return (
    <div className="spark-graph-x-axis">
      <div className="spark-graph-x-labels">
        {labels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
      {xAxisTitle ? <p className="spark-graph-x-title">{xAxisTitleText}</p> : null}
    </div>
  );
}

export type GraphChartTooltipItem = {
  color: string;
  label: string;
  value: string;
};

type GraphChartTooltipProps = {
  heading: string;
  items: GraphChartTooltipItem[];
  className?: string;
  style?: CSSProperties;
};

export function GraphChartTooltip({ heading, items, className = '', style }: GraphChartTooltipProps) {
  return (
    <div className={['spark-graph-chart-tooltip', className].filter(Boolean).join(' ')} style={style} role="tooltip">
      <p className="spark-graph-chart-tooltip-heading">{heading}</p>
      <div className="spark-graph-chart-tooltip-items">
        {items.map((item) => (
          <div key={item.label} className="spark-graph-chart-tooltip-item">
            <span className="spark-graph-chart-tooltip-swatch" style={{ backgroundColor: item.color }} />
            <span className="spark-graph-chart-tooltip-label">
              {item.label}: {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

type GraphLegendProps = {
  items: GraphLegendItem[];
  theme: GraphTheme;
  variant?: 'inline' | 'stacked';
  title?: string;
  columns?: number;
  activeIndex?: number | null;
  onActiveIndexChange?: (index: number | null) => void;
};

function splitLegendColumns(items: GraphLegendItem[], columnCount: number): GraphLegendItem[][] {
  if (columnCount <= 1) {
    return [items];
  }

  const perColumn = Math.ceil(items.length / columnCount);
  const columns: GraphLegendItem[][] = [];

  for (let columnIndex = 0; columnIndex < columnCount; columnIndex += 1) {
    const slice = items.slice(columnIndex * perColumn, (columnIndex + 1) * perColumn);
    if (slice.length > 0) {
      columns.push(slice);
    }
  }

  return columns;
}

function GraphLegendItemRow({
  item,
  colorIndex,
  theme,
  active,
  dimmed,
  onHover,
}: {
  item: GraphLegendItem;
  colorIndex: number;
  theme: GraphTheme;
  active?: boolean;
  dimmed?: boolean;
  onHover?: (active: boolean) => void;
}) {
  return (
    <div
      className={[
        'spark-graph-legend-item',
        active ? 'spark-graph-legend-item-active' : '',
        dimmed ? 'spark-graph-legend-item-dimmed' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      onMouseEnter={onHover ? () => onHover(true) : undefined}
      onMouseLeave={onHover ? () => onHover(false) : undefined}
    >
      <span
        className="spark-graph-legend-swatch"
        style={{ backgroundColor: seriesColor(colorIndex, theme) }}
      />
      <span className="spark-graph-legend-label">{item.label}</span>
      {item.value ? <span className="spark-graph-legend-value">{item.value}</span> : null}
    </div>
  );
}

export function GraphLegend({
  items,
  theme,
  variant = 'inline',
  title,
  columns = 1,
  activeIndex = null,
  onActiveIndexChange,
}: GraphLegendProps) {
  const legendColumns = variant === 'stacked' ? splitLegendColumns(items, columns) : [items];
  let colorIndex = 0;

  const renderItem = (item: GraphLegendItem, itemColorIndex: number) => (
    <GraphLegendItemRow
      key={item.label}
      item={item}
      colorIndex={itemColorIndex}
      theme={theme}
      active={activeIndex === itemColorIndex}
      dimmed={activeIndex !== null && activeIndex !== itemColorIndex}
      onHover={
        onActiveIndexChange
          ? (hovered) => onActiveIndexChange(hovered ? itemColorIndex : null)
          : undefined
      }
    />
  );

  return (
    <div className={`spark-graph-legend spark-graph-legend-${variant}`}>
      {title ? <p className="spark-graph-legend-title">{title}</p> : null}
      {variant === 'stacked' && columns > 1 ? (
        <div className="spark-graph-legend-columns">
          {legendColumns.map((columnItems, columnIndex) => (
            <div key={columnIndex} className="spark-graph-legend-list">
              {columnItems.map((item) => {
                const itemColorIndex = colorIndex;
                colorIndex += 1;
                return renderItem(item, itemColorIndex);
              })}
            </div>
          ))}
        </div>
      ) : (
        <div className={variant === 'stacked' ? 'spark-graph-legend-list' : 'spark-graph-legend-row'}>
          {items.map((item, index) => renderItem(item, index))}
        </div>
      )}
    </div>
  );
}
