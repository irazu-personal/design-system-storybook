import './TagPill.css';

export type TagPillProps = {
  label?: string;
  className?: string;
};

export function TagPill({ label = 'Tag', className = '' }: TagPillProps) {
  return <span className={['spark-tag-pill', className].filter(Boolean).join(' ')}>{label}</span>;
}
