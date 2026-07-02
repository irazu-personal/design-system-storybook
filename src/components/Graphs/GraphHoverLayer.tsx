import { useCallback, useState, type CSSProperties, type MouseEvent, type ReactNode } from 'react';
import {
  GRAPH_HOVER_MARKER_SIZE,
  GRAPH_HOVER_MARKER_STROKE_WIDTH,
  GRAPH_PLOT_VIEW_HEIGHT,
  GRAPH_PLOT_VIEW_WIDTH,
  plotPointCoordinates,
  snapPlotIndex,
} from './graphConstants';
import { GraphChartTooltip, type GraphChartTooltipItem } from './GraphChartParts';
import './Graphs.css';

export type GraphHoverSeries = {
  label: string;
  points: number[];
  color: string;
  formatValue?: (value: number) => string;
};

type GraphCartesianHoverProps = {
  xLabels: string[];
  series: GraphHoverSeries[];
  children: ReactNode;
  plotWidth?: number;
  plotHeight?: number;
};

function formatSeriesValue(value: number, formatter?: (value: number) => string): string {
  return formatter ? formatter(value) : String(value);
}

export function GraphCartesianHover({
  xLabels,
  series,
  children,
  plotWidth = GRAPH_PLOT_VIEW_WIDTH,
  plotHeight = GRAPH_PLOT_VIEW_HEIGHT,
}: GraphCartesianHoverProps) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const index = snapPlotIndex(event.clientX - rect.left, rect.width, xLabels.length);
      setHoverIndex(index);
      setTooltipPos({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    },
    [xLabels.length],
  );

  const handleMouseLeave = useCallback(() => {
    setHoverIndex(null);
  }, []);

  const crosshairLeft =
    hoverIndex !== null && xLabels.length > 1
      ? `${(hoverIndex / (xLabels.length - 1)) * 100}%`
      : undefined;

  const tooltipItems: GraphChartTooltipItem[] =
    hoverIndex === null
      ? []
      : series.map((item) => ({
          color: item.color,
          label: item.label,
          value: formatSeriesValue(item.points[hoverIndex] ?? 0, item.formatValue),
        }));

  const tooltipStyle: CSSProperties = {
    left: tooltipPos.x,
    top: tooltipPos.y,
  };

  return (
    <div
      className="spark-graph-plot-interactive"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {hoverIndex !== null ? (
        <>
          <div className="spark-graph-crosshair" style={{ left: crosshairLeft }} aria-hidden="true" />
          <div className="spark-graph-hover-markers" aria-hidden="true">
            {series.map((item) => {
              const value = item.points[hoverIndex];
              if (value === undefined) {
                return null;
              }

              const { x, y } = plotPointCoordinates(value, hoverIndex, item.points.length, plotWidth, plotHeight);
              return (
                <div
                  key={item.label}
                  className="spark-graph-hover-marker"
                  style={{
                    left: `${(x / plotWidth) * 100}%`,
                    top: `${(y / plotHeight) * 100}%`,
                    width: GRAPH_HOVER_MARKER_SIZE,
                    height: GRAPH_HOVER_MARKER_SIZE,
                    borderWidth: GRAPH_HOVER_MARKER_STROKE_WIDTH,
                    borderColor: item.color,
                  }}
                />
              );
            })}
          </div>
          <GraphChartTooltip
            className="spark-graph-chart-tooltip-floating"
            heading={xLabels[hoverIndex] ?? ''}
            items={tooltipItems}
            style={tooltipStyle}
          />
        </>
      ) : null}
    </div>
  );
}

type GraphBarHoverProps = {
  xLabels: string[];
  series: GraphHoverSeries[];
  orientation?: 'vertical' | 'horizontal';
  children: (hoverIndex: number | null) => ReactNode;
};

export function GraphBarHover({
  xLabels,
  series,
  orientation = 'vertical',
  children,
}: GraphBarHoverProps) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const relative =
        orientation === 'horizontal' ? event.clientY - rect.top : event.clientX - rect.left;
      const plotSize = orientation === 'horizontal' ? rect.height : rect.width;
      const index = snapPlotIndex(relative, plotSize, xLabels.length);
      setHoverIndex(index);
      setTooltipPos({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    },
    [orientation, xLabels.length],
  );

  const handleMouseLeave = useCallback(() => {
    setHoverIndex(null);
  }, []);

  const tooltipItems: GraphChartTooltipItem[] =
    hoverIndex === null
      ? []
      : series.map((item) => ({
          color: item.color,
          label: item.label,
          value: formatSeriesValue(item.points[hoverIndex] ?? 0, item.formatValue),
        }));

  return (
    <div
      className={[
        'spark-graph-plot-interactive',
        'spark-graph-plot-interactive-bar',
        orientation === 'horizontal' ? 'spark-graph-plot-interactive-bar-horizontal' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children(hoverIndex)}
      {hoverIndex !== null ? (
        <GraphChartTooltip
          className="spark-graph-chart-tooltip-floating"
          heading={xLabels[hoverIndex] ?? ''}
          items={tooltipItems}
          style={{ left: tooltipPos.x, top: tooltipPos.y }}
        />
      ) : null}
    </div>
  );
}
