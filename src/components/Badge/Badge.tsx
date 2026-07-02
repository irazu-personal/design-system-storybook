import './Badge.css';

export type BadgeProps = {
  /** Numeric count displayed inside the badge. */
  amount?: string;
  className?: string;
};

export function Badge({ amount = '21', className = '' }: BadgeProps) {
  return (
    <span className={['spark-badge', className].filter(Boolean).join(' ')}>
      <span className="spark-badge-amount">{amount}</span>
    </span>
  );
}
