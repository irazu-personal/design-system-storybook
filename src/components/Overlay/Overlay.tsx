import './Overlay.css';

export type OverlayProps = {
  className?: string;
};

export function Overlay({ className = '' }: OverlayProps) {
  return (
    <div
      className={['spark-overlay', className].filter(Boolean).join(' ')}
      aria-hidden="true"
    >
      <div className="spark-overlay-scrim" />
    </div>
  );
}
