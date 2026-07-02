import {
  BAR_GROUP_VALUES,
  BAR_LEGEND,
  BAR_X_LABELS,
  seriesColor,
  type GraphAxes,
  type GraphTheme,
} from './graphConstants';
import { GraphBarHover } from './GraphHoverLayer';
import {
  GraphBarCategoryColumn,
  GraphChartHeader,
  GraphHorizontalAxisGrid,
  GraphHorizontalValueAxis,
  GraphLegend,
  GraphXAxisLabels,
  GraphYAxisGrid,
} from './GraphChartParts';
import './Graphs.css';

export type BarChartOrientation = 'vertical' | 'horizontal';

export type BarChartProps = {
  theme?: GraphTheme;
  axes?: GraphAxes;
  orientation?: BarChartOrientation;
  title?: string;
  showConfigure?: boolean;
  className?: string;
};

function VerticalBarPlot({
  theme,
  hoverIndex,
}: {
  theme: GraphTheme;
  hoverIndex: number | null;
}) {
  const seriesCount = theme === 'single-color' ? 1 : 3;

  return (
    <div className="spark-graph-bar-groups">
      {BAR_GROUP_VALUES.map((group, groupIndex) => (
        <div
          key={BAR_X_LABELS[groupIndex]}
          className={[
            'spark-graph-bar-group',
            hoverIndex !== null && hoverIndex !== groupIndex ? 'spark-graph-bar-group-dimmed' : '',
            hoverIndex === groupIndex ? 'spark-graph-bar-group-active' : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <div className="spark-graph-bar-stack">
            {group.slice(0, seriesCount).map((value, seriesIndex) => (
              <div key={seriesIndex} className="spark-graph-bar-track">
                <div
                  className={`spark-graph-bar spark-graph-bar-series-${seriesIndex + 1}`}
                  style={{
                    height: `${value}%`,
                    backgroundColor: seriesColor(seriesIndex, theme),
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function HorizontalBarPlot({
  theme,
  hoverIndex,
  showRowLabels,
}: {
  theme: GraphTheme;
  hoverIndex: number | null;
  showRowLabels: boolean;
}) {
  const seriesCount = theme === 'single-color' ? 1 : 3;

  return (
    <div className="spark-graph-bar-horizontal">
      {BAR_GROUP_VALUES.map((group, rowIndex) => (
        <div
          key={BAR_X_LABELS[rowIndex]}
          className={[
            'spark-graph-bar-horizontal-row',
            hoverIndex !== null && hoverIndex !== rowIndex ? 'spark-graph-bar-horizontal-row-dimmed' : '',
            hoverIndex === rowIndex ? 'spark-graph-bar-horizontal-row-active' : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {showRowLabels ? (
            <span className="spark-graph-bar-horizontal-label">{BAR_X_LABELS[rowIndex]}</span>
          ) : null}
          <div className="spark-graph-bar-horizontal-track">
            {group.slice(0, seriesCount).map((value, seriesIndex) => (
              <div
                key={seriesIndex}
                className="spark-graph-bar-horizontal-bar"
                style={{
                  width: `${value}%`,
                  backgroundColor: seriesColor(seriesIndex, theme),
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function buildBarHoverSeries(theme: GraphTheme) {
  const seriesCount = theme === 'single-color' ? 1 : 3;
  const legend = BAR_LEGEND.slice(0, seriesCount);

  return legend.map((item, seriesIndex) => ({
    label: item.label,
    color: seriesColor(seriesIndex, theme),
    points: BAR_GROUP_VALUES.map((group) => group[seriesIndex]),
  }));
}

export function BarChart({
  theme = 'multi-color',
  axes = 'shown',
  orientation = 'vertical',
  title = 'Quarterly Sales',
  showConfigure = true,
  className = '',
}: BarChartProps) {
  const rootClasses = ['spark-graph-card', className].filter(Boolean).join(' ');
  const hoverSeries = buildBarHoverSeries(theme);
  const showLeftCategoryColumn = orientation === 'horizontal' && theme === 'single-color' && axes === 'shown';
  const showRowLabels = orientation === 'horizontal' && axes === 'shown' && !showLeftCategoryColumn;
  const horizontalValueAxisOffset = showLeftCategoryColumn ? 30 : 32;

  return (
    <div className={rootClasses}>
      <GraphChartHeader title={title} showConfigure={showConfigure} />
      <div className="spark-graph-body">
        <div
          className={[
            'spark-graph-plot-wrap',
            orientation === 'horizontal' ? 'spark-graph-plot-wrap-horizontal' : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {orientation === 'vertical' ? (
            <>
              <GraphYAxisGrid axes={axes} />
              <div
                className={[
                  'spark-graph-plot-overlay',
                  'spark-graph-plot-overlay-bar',
                  axes === 'hidden' ? 'spark-graph-plot-overlay-bar-full' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <GraphBarHover xLabels={BAR_X_LABELS} series={hoverSeries} orientation="vertical">
                  {(hoverIndex) => <VerticalBarPlot theme={theme} hoverIndex={hoverIndex} />}
                </GraphBarHover>
              </div>
              {axes === 'shown' ? (
                <GraphXAxisLabels axes={axes} labels={BAR_X_LABELS} xAxisTitle={false} />
              ) : null}
            </>
          ) : (
            <>
              <div className="spark-graph-bar-horizontal-layout">
                {showLeftCategoryColumn ? <GraphBarCategoryColumn labels={BAR_X_LABELS} /> : null}
                <div
                  className={[
                    'spark-graph-bar-horizontal-plot',
                    showLeftCategoryColumn ? 'spark-graph-bar-horizontal-plot-with-column' : '',
                    axes === 'shown' && !showLeftCategoryColumn ? 'spark-graph-bar-horizontal-plot-offset' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  <GraphHorizontalAxisGrid axes={axes} />
                  <GraphBarHover xLabels={BAR_X_LABELS} series={hoverSeries} orientation="horizontal">
                    {(hoverIndex) => (
                      <HorizontalBarPlot
                        theme={theme}
                        hoverIndex={hoverIndex}
                        showRowLabels={showRowLabels}
                      />
                    )}
                  </GraphBarHover>
                </div>
              </div>
              <GraphHorizontalValueAxis axes={axes} offsetLeft={horizontalValueAxisOffset} />
            </>
          )}
        </div>
        <GraphLegend items={BAR_LEGEND.slice(0, theme === 'single-color' ? 1 : 3)} theme={theme} />
      </div>
    </div>
  );
}
