import './Divider.css';

export type DividerDirection = 'horizontal' | 'vertical';
export type DividerBg = 'on-light' | 'on-dark';

export type DividerProps = {
  direction?: DividerDirection;
  bg?: DividerBg;
  className?: string;
};

export function Divider({ direction = 'horizontal', bg = 'on-light', className = '' }: DividerProps) {
  const rootClasses = [
    'spark-divider',
    direction === 'vertical' ? 'spark-divider-vertical' : 'spark-divider-horizontal',
    bg === 'on-dark' ? 'spark-divider-on-dark' : 'spark-divider-on-light',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClasses} role="separator" aria-orientation={direction}>
      <span className="spark-divider-line" />
    </div>
  );
}
