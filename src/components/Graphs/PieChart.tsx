import { useCallback, useState, type MouseEvent } from 'react';
import {
  PIE_LEGEND_4,
  PIE_LEGEND_8,
  PIE_SEGMENTS_4,
  PIE_SEGMENTS_8,
  pieSegmentPath,
  seriesColor,
  type GraphLegendItem,
  type GraphTheme,
} from './graphConstants';
import { GraphChartTooltip, GraphLegend } from './GraphChartParts';
import './Graphs.css';

export type PieChartType = 'pie' | 'donut';
export type PieChartTheme = GraphTheme | 'multi-color-4' | 'multi-color-8';

export type PieChartProps = {
  theme?: PieChartTheme;
  type?: PieChartType;
  legendTitle?: string;
  centerLabel?: string;
  className?: string;
};

const PIE_CENTER_X = 78;
const PIE_CENTER_Y = 90;
const PIE_DONUT_RADIUS = 62;
const PIE_FILLED_RADIUS = 76;
const PIE_DONUT_CIRCUMFERENCE = 2 * Math.PI * PIE_DONUT_RADIUS;

function normalizeTheme(theme: PieChartTheme): GraphTheme {
  if (theme === 'multi-color-4' || theme === 'multi-color-8') {
    return 'multi-color';
  }
  return theme;
}

type PieSegmentModel = {
  index: number;
  value: number;
  startAngle: number;
  endAngle: number;
  label: string;
  displayValue: string;
};

function buildPieSegments(segments: number[], legend: GraphLegendItem[]): PieSegmentModel[] {
  let startAngle = 0;
  return segments.map((value, index) => {
    const sweep = (value / 100) * 360;
    const model = {
      index,
      value,
      startAngle,
      endAngle: startAngle + sweep,
      label: legend[index]?.label ?? `Category ${index + 1}`,
      displayValue: legend[index]?.value ?? `${value}%`,
    };
    startAngle += sweep;
    return model;
  });
}

function PiePlot({
  segments,
  legend,
  theme,
  type,
  centerLabel,
  hoverIndex,
  onHoverIndexChange,
}: {
  segments: number[];
  legend: GraphLegendItem[];
  theme: GraphTheme;
  type: PieChartType;
  centerLabel?: string;
  hoverIndex: number | null;
  onHoverIndexChange: (index: number | null) => void;
}) {
  const segmentModels = buildPieSegments(segments, legend);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleSegmentMove = useCallback(
    (index: number, event: MouseEvent<SVGElement>) => {
      const rect = event.currentTarget.closest('.spark-graph-pie-wrap')?.getBoundingClientRect();
      if (!rect) {
        return;
      }

      onHoverIndexChange(index);
      setTooltipPos({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    },
    [onHoverIndexChange],
  );

  const handleSegmentLeave = useCallback(() => {
    onHoverIndexChange(null);
  }, [onHoverIndexChange]);

  const hoveredSegment = hoverIndex !== null ? segmentModels[hoverIndex] : null;

  return (
    <div className="spark-graph-pie-wrap">
      <svg className="spark-graph-pie-svg" viewBox="0 0 156 180" aria-hidden="true">
        <g transform={`translate(${PIE_CENTER_X} ${PIE_CENTER_Y})`}>
          {type === 'pie'
            ? segmentModels.map((segment) => (
                <path
                  key={segment.index}
                  className={[
                    'spark-graph-pie-wedge',
                    hoverIndex !== null && hoverIndex !== segment.index ? 'spark-graph-pie-wedge-dimmed' : '',
                    hoverIndex === segment.index ? 'spark-graph-pie-wedge-active' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  d={pieSegmentPath(0, 0, PIE_FILLED_RADIUS, segment.startAngle, segment.endAngle)}
                  fill={seriesColor(segment.index, theme)}
                  onMouseMove={(event) => handleSegmentMove(segment.index, event)}
                  onMouseLeave={handleSegmentLeave}
                />
              ))
            : null}
          {type === 'donut' ? (
            <g transform="rotate(-90)">
              {(() => {
                let offset = 0;
                return segmentModels.map((segment) => {
                  const dash = (segment.value / 100) * PIE_DONUT_CIRCUMFERENCE;
                  const element = (
                    <circle
                      key={segment.index}
                      className={[
                        'spark-graph-pie-segment',
                        hoverIndex !== null && hoverIndex !== segment.index ? 'spark-graph-pie-segment-dimmed' : '',
                        hoverIndex === segment.index ? 'spark-graph-pie-segment-active' : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                      cx={0}
                      cy={0}
                      r={PIE_DONUT_RADIUS}
                      stroke={seriesColor(segment.index, theme)}
                      strokeDasharray={`${dash} ${PIE_DONUT_CIRCUMFERENCE - dash}`}
                      strokeDashoffset={-offset}
                      onMouseMove={(event) => handleSegmentMove(segment.index, event)}
                      onMouseLeave={handleSegmentLeave}
                    />
                  );
                  offset += dash;
                  return element;
                });
              })()}
            </g>
          ) : null}
        </g>
        {type === 'donut' ? (
          <>
            <circle className="spark-graph-pie-donut-hole" cx={PIE_CENTER_X} cy={PIE_CENTER_Y} r="34" />
            {centerLabel ? (
              <text className="spark-graph-pie-center-label" x={PIE_CENTER_X} y="94" textAnchor="middle">
                {centerLabel}
              </text>
            ) : null}
          </>
        ) : null}
      </svg>
      {hoveredSegment ? (
        <GraphChartTooltip
          className="spark-graph-chart-tooltip-floating"
          heading={hoveredSegment.label}
          items={[
            {
              color: seriesColor(hoveredSegment.index, theme),
              label: hoveredSegment.label,
              value: hoveredSegment.displayValue,
            },
          ]}
          style={{ left: tooltipPos.x, top: tooltipPos.y }}
        />
      ) : null}
    </div>
  );
}

export function PieChart({
  theme = 'multi-color-4',
  type = 'donut',
  legendTitle = 'Revenue Split',
  centerLabel = '100%',
  className = '',
}: PieChartProps) {
  const graphTheme = normalizeTheme(theme);
  const segments = theme === 'multi-color-8' ? PIE_SEGMENTS_8 : PIE_SEGMENTS_4;
  const legend = theme === 'multi-color-8' ? PIE_LEGEND_8 : PIE_LEGEND_4;
  const rootClasses = ['spark-graph-card', 'spark-graph-card-pie', className].filter(Boolean).join(' ');
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const activeCenterLabel =
    hoverIndex !== null && legend[hoverIndex]?.value ? legend[hoverIndex].value : centerLabel;

  return (
    <div className={rootClasses}>
      <PiePlot
        segments={segments}
        legend={legend}
        theme={graphTheme}
        type={type}
        centerLabel={activeCenterLabel}
        hoverIndex={hoverIndex}
        onHoverIndexChange={setHoverIndex}
      />
      <GraphLegend
        items={legend}
        theme={graphTheme}
        variant="stacked"
        title={legendTitle}
        columns={theme === 'multi-color-8' ? 2 : 1}
        activeIndex={hoverIndex}
        onActiveIndexChange={setHoverIndex}
      />
    </div>
  );
}
