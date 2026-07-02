export type GraphTheme = 'multi-color' | 'single-color';
export type GraphAxes = 'shown' | 'hidden';

export const GRAPH_SERIES_COLORS = [
  'var(--semantic-graph-series-01)',
  'var(--semantic-graph-series-02)',
  'var(--semantic-graph-series-03)',
  'var(--semantic-graph-series-04)',
  'var(--semantic-graph-series-05)',
  'var(--semantic-graph-series-06)',
  'var(--semantic-graph-series-07)',
  'var(--semantic-graph-series-08)',
] as const;

export const GRAPH_AREA_COLORS = [
  'var(--semantic-graph-area-01)',
  'var(--semantic-graph-area-02)',
  'var(--semantic-graph-area-03)',
] as const;

export const DEFAULT_Y_LABELS = ['100', '75', '50', '25', '0'];
export const HORIZONTAL_VALUE_LABELS = ['0', '25', '50', '75', '100'];

export const LINE_X_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
export const BAR_X_LABELS = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'];
export const AREA_X_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

export const GRAPH_PLOT_VIEW_WIDTH = 260;
export const GRAPH_PLOT_VIEW_HEIGHT = 120;

/** Hover dot on line/area charts — 16×16 px total including stroke. */
export const GRAPH_HOVER_MARKER_SIZE = 16;
export const GRAPH_HOVER_MARKER_STROKE_WIDTH = 2;

export type GraphLegendItem = {
  label: string;
  value?: string;
};

export const LINE_LEGEND: GraphLegendItem[] = [
  { label: 'Series A' },
  { label: 'Series B' },
  { label: 'Series C' },
];

export const BAR_LEGEND: GraphLegendItem[] = [
  { label: 'Product A' },
  { label: 'Product B' },
  { label: 'Product C' },
];

export const AREA_LEGEND: GraphLegendItem[] = [
  { label: 'Organic' },
  { label: 'Direct' },
  { label: 'Referral' },
];

export const PIE_LEGEND_4: GraphLegendItem[] = [
  { label: 'Category A', value: '30%' },
  { label: 'Category B', value: '25%' },
  { label: 'Category C', value: '25%' },
  { label: 'Category D', value: '20%' },
];

export const PIE_LEGEND_8: GraphLegendItem[] = [
  { label: 'Category A', value: '18%' },
  { label: 'Category B', value: '14%' },
  { label: 'Category C', value: '12%' },
  { label: 'Category D', value: '11%' },
  { label: 'Category E', value: '10%' },
  { label: 'Category F', value: '9%' },
  { label: 'Category G', value: '8%' },
  { label: 'Category H', value: '18%' },
];

export const PIE_SEGMENTS_4 = [30, 25, 25, 20];
export const PIE_SEGMENTS_8 = [18, 14, 12, 11, 10, 9, 8, 18];

/** Normalized 0–100 demo points for six-month line chart. */
export const LINE_SERIES_POINTS: number[][] = [
  [18, 42, 78, 55, 62, 48],
  [72, 38, 52, 88, 28, 74],
  [45, 82, 12, 58, 35, 22],
];

export const AREA_SERIES_POINTS: number[][] = [
  [28, 52, 44, 68, 58, 72],
  [18, 36, 48, 42, 52, 46],
  [12, 24, 32, 28, 22, 34],
];

export const BAR_GROUP_VALUES = [
  [55, 95, 35],
  [55, 95, 35],
  [55, 95, 35],
  [55, 95, 35],
  [55, 95, 35],
];

export const HORIZONTAL_BAR_VALUES = [
  { label: 'Item A', values: [72, 48, 36] },
  { label: 'Item B', values: [58, 82, 44] },
  { label: 'Item C', values: [64, 52, 38] },
  { label: 'Item D', values: [46, 68, 52] },
];

export function seriesColor(index: number, theme: GraphTheme): string {
  if (theme === 'single-color') {
    return GRAPH_SERIES_COLORS[0];
  }
  return GRAPH_SERIES_COLORS[index % GRAPH_SERIES_COLORS.length];
}

export function areaColor(index: number, theme: GraphTheme): string {
  if (theme === 'single-color') {
    return GRAPH_AREA_COLORS[0];
  }
  return GRAPH_AREA_COLORS[index % GRAPH_AREA_COLORS.length];
}

export function pointsToPolyline(points: number[], width: number, height: number): string {
  if (points.length === 0) {
    return '';
  }

  const stepX = points.length > 1 ? width / (points.length - 1) : 0;
  return points
    .map((value, index) => {
      const x = index * stepX;
      const y = height - (value / 100) * height;
      return `${x},${y}`;
    })
    .join(' ');
}

/** Gap between area fill baseline and the Y=0 grid line (px in SVG viewBox space). */
export const AREA_BASELINE_GAP = 1;

export function pointsToAreaPath(points: number[], width: number, height: number): string {
  if (points.length === 0) {
    return '';
  }

  const stepX = points.length > 1 ? width / (points.length - 1) : 0;
  const baselineY = height - AREA_BASELINE_GAP;
  const line = points
    .map((value, index) => {
      const x = index * stepX;
      const y = height - (value / 100) * height;
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    })
    .join(' ');

  const lastX = (points.length - 1) * stepX;
  return `${line} L ${lastX} ${baselineY} L 0 ${baselineY} Z`;
}

export function plotPointCoordinates(
  value: number,
  index: number,
  pointCount: number,
  width: number,
  height: number,
): { x: number; y: number } {
  const stepX = pointCount > 1 ? width / (pointCount - 1) : 0;
  return {
    x: index * stepX,
    y: height - (value / 100) * height,
  };
}

export function snapPlotIndex(relativeX: number, plotWidth: number, pointCount: number): number {
  if (pointCount <= 1) {
    return 0;
  }

  const ratio = Math.max(0, Math.min(1, relativeX / plotWidth));
  return Math.round(ratio * (pointCount - 1));
}

export function pieSegmentPath(
  cx: number,
  cy: number,
  radius: number,
  startAngle: number,
  endAngle: number,
): string {
  const start = polarToCartesian(cx, cy, radius, endAngle);
  const end = polarToCartesian(cx, cy, radius, startAngle);
  const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 0 ${end.x} ${end.y} Z`;
}

function polarToCartesian(cx: number, cy: number, radius: number, angleDegrees: number) {
  const angleRadians = ((angleDegrees - 90) * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(angleRadians),
    y: cy + radius * Math.sin(angleRadians),
  };
}
