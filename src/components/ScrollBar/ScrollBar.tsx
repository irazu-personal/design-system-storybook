import './ScrollBar.css';

export type ScrollBarType = 'vertical' | 'horizontal';

export type ScrollBarProps = {
  type?: ScrollBarType;
  className?: string;
};

export function ScrollBar({ type = 'vertical', className = '' }: ScrollBarProps) {
  const rootClasses = [
    'spark-scrollbar',
    type === 'horizontal' ? 'spark-scrollbar-horizontal' : 'spark-scrollbar-vertical',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClasses} role="presentation" aria-hidden="true">
      <div className="spark-scrollbar-thumb" />
    </div>
  );
}
