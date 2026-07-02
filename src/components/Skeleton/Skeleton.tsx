import type { CSSProperties } from 'react';
import './Skeleton.css';

export type SkeletonShapeType = 'circle' | 'rectangle' | 'h1' | 'h2' | 'paragraph';

export type SkeletonProps = {
  shapeType?: SkeletonShapeType;
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: CSSProperties;
};

const DEFAULT_WIDTH: Partial<Record<SkeletonShapeType, number | string>> = {
  circle: 38,
  rectangle: 144,
  h1: 162,
  h2: 81,
  paragraph: 162,
};

const DEFAULT_HEIGHT: Partial<Record<SkeletonShapeType, number | string>> = {
  circle: 38,
  rectangle: 144,
  h1: 32,
  h2: 24,
  paragraph: 12,
};

export function Skeleton({
  shapeType = 'paragraph',
  width,
  height,
  className = '',
  style,
}: SkeletonProps) {
  const rootClasses = [
    'spark-skeleton',
    `spark-skeleton-${shapeType}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const resolvedWidth = width ?? DEFAULT_WIDTH[shapeType];
  const resolvedHeight = height ?? DEFAULT_HEIGHT[shapeType];

  return (
    <div
      className={rootClasses}
      style={{
        width: resolvedWidth,
        height: resolvedHeight,
        ...style,
      }}
      aria-hidden="true"
    >
      <span className="spark-skeleton-shape" />
      <span className="spark-skeleton-shimmer" />
    </div>
  );
}

export function SkeletonText({ className = '' }: { className?: string }) {
  return (
    <div className={`spark-skeleton-text ${className}`.trim()}>
      <Skeleton shapeType="h1" width="100%" />
      <Skeleton shapeType="h2" />
    </div>
  );
}

export function SkeletonCard({ className = '' }: { className?: string }) {
  return (
    <div className={`spark-skeleton-card ${className}`.trim()}>
      <div className="spark-skeleton-card-header">
        <Skeleton shapeType="circle" />
        <div className="spark-skeleton-card-lines">
          <Skeleton shapeType="paragraph" width="100%" />
          <Skeleton shapeType="paragraph" width="100%" />
        </div>
      </div>
      <Skeleton shapeType="rectangle" width="100%" height={144} />
    </div>
  );
}
