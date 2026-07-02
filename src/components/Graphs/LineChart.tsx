import {
  AREA_LEGEND,
  AREA_SERIES_POINTS,
  AREA_X_LABELS,
  GRAPH_PLOT_VIEW_HEIGHT,
  GRAPH_PLOT_VIEW_WIDTH,
  LINE_LEGEND,
  LINE_SERIES_POINTS,
  LINE_X_LABELS,
  areaColor,
  pointsToAreaPath,
  pointsToPolyline,
  seriesColor,
  type GraphAxes,
  type GraphTheme,
} from './graphConstants';
import { GraphCartesianHover } from './GraphHoverLayer';
import { GraphChartHeader, GraphLegend, GraphXAxisLabels, GraphYAxisGrid } from './GraphChartParts';
import './Graphs.css';

export type LineChartProps = {
  theme?: GraphTheme;
  axes?: GraphAxes;
  title?: string;
  showConfigure?: boolean;
  xAxisTitle?: boolean;
  xAxisTitleText?: string;
  className?: string;
};

export type AreaChartProps = {
  theme?: GraphTheme;
  axes?: GraphAxes;
  title?: string;
  subtitle?: string;
  xAxisTitle?: boolean;
  xAxisTitleText?: string;
  className?: string;
};

function buildCartesianSeries(
  theme: GraphTheme,
  legend: typeof LINE_LEGEND,
  points: number[][],
): { label: string; points: number[]; color: string }[] {
  const seriesCount = theme === 'single-color' ? 1 : points.length;
  return legend.slice(0, seriesCount).map((item, index) => ({
    label: item.label,
    points: points[index],
    color: seriesColor(index, theme),
  }));
}

function LinePlot({ theme }: { theme: GraphTheme }) {
  const seriesCount = theme === 'single-color' ? 1 : LINE_SERIES_POINTS.length;
  const width = GRAPH_PLOT_VIEW_WIDTH;
  const height = GRAPH_PLOT_VIEW_HEIGHT;

  return (
    <svg className="spark-graph-line-svg" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" aria-hidden="true">
      {LINE_SERIES_POINTS.slice(0, seriesCount).map((points, index) => (
        <polyline
          key={index}
          className="spark-graph-line-path"
          points={pointsToPolyline(points, width, height)}
          stroke={seriesColor(index, theme)}
        />
      ))}
    </svg>
  );
}

function AreaPlot({ theme }: { theme: GraphTheme }) {
  const seriesCount = theme === 'single-color' ? 1 : AREA_SERIES_POINTS.length;
  const width = GRAPH_PLOT_VIEW_WIDTH;
  const height = GRAPH_PLOT_VIEW_HEIGHT;

  return (
    <svg className="spark-graph-area-svg" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" aria-hidden="true">
      {AREA_SERIES_POINTS.slice(0, seriesCount).map((points, index) => (
        <g key={index}>
          <path
            className="spark-graph-area-fill"
            d={pointsToAreaPath(points, width, height)}
            fill={areaColor(index, theme)}
            fillOpacity={0.35}
          />
          <polyline
            className="spark-graph-area-line"
            points={pointsToPolyline(points, width, height)}
            stroke={seriesColor(index, theme)}
          />
        </g>
      ))}
    </svg>
  );
}

export function LineChart({
  theme = 'multi-color',
  axes = 'shown',
  title = 'Quarterly Sales',
  showConfigure = true,
  xAxisTitle = true,
  xAxisTitleText = 'Text',
  className = '',
}: LineChartProps) {
  const rootClasses = ['spark-graph-card', 'spark-graph-card-line', className].filter(Boolean).join(' ');
  const hoverSeries = buildCartesianSeries(theme, LINE_LEGEND, LINE_SERIES_POINTS);

  return (
    <div className={rootClasses}>
      <GraphChartHeader title={title} showConfigure={showConfigure} />
      <div className="spark-graph-body">
        <div className="spark-graph-plot-wrap">
          <GraphYAxisGrid axes={axes} />
          <div className="spark-graph-plot-overlay">
            <GraphCartesianHover xLabels={LINE_X_LABELS} series={hoverSeries}>
              <LinePlot theme={theme} />
            </GraphCartesianHover>
          </div>
          <GraphXAxisLabels
            axes={axes}
            labels={LINE_X_LABELS}
            xAxisTitle={xAxisTitle}
            xAxisTitleText={xAxisTitleText}
          />
        </div>
        <GraphLegend items={LINE_LEGEND.slice(0, theme === 'single-color' ? 1 : 3)} theme={theme} />
      </div>
    </div>
  );
}

export function AreaChart({
  theme = 'multi-color',
  axes = 'shown',
  title = 'Website Traffic',
  subtitle = 'Past 6 weeks',
  xAxisTitle = true,
  xAxisTitleText = 'Text',
  className = '',
}: AreaChartProps) {
  const rootClasses = ['spark-graph-card', 'spark-graph-card-area', className].filter(Boolean).join(' ');
  const hoverSeries = buildCartesianSeries(theme, AREA_LEGEND, AREA_SERIES_POINTS);

  return (
    <div className={rootClasses}>
      <GraphChartHeader title={title} subtitle={subtitle} />
      <div className="spark-graph-body">
        <div className="spark-graph-plot-wrap">
          <div className="spark-graph-plot-area">
            <GraphYAxisGrid axes={axes} />
            <div
              className={[
                'spark-graph-plot-overlay',
                'spark-graph-plot-overlay-area',
                axes === 'shown' ? 'spark-graph-plot-overlay-area-shown' : '',
                axes === 'hidden' ? 'spark-graph-plot-overlay-area-full' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <GraphCartesianHover xLabels={AREA_X_LABELS} series={hoverSeries}>
                <AreaPlot theme={theme} />
              </GraphCartesianHover>
            </div>
          </div>
          <GraphXAxisLabels
            axes={axes}
            labels={AREA_X_LABELS}
            xAxisTitle={xAxisTitle}
            xAxisTitleText={xAxisTitleText}
          />
        </div>
        <GraphLegend items={AREA_LEGEND.slice(0, theme === 'single-color' ? 1 : 3)} theme={theme} />
      </div>
    </div>
  );
}
