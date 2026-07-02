import './NavigationTab.css';

export type NavigationTabState = 'active' | 'inactive' | 'hover' | 'disabled';

export type NavigationTabProps = {
  label: string;
  state?: NavigationTabState;
  href?: string;
  className?: string;
};

export function NavigationTab({
  label,
  state = 'inactive',
  href = '#',
  className = '',
}: NavigationTabProps) {
  const rootClasses = [
    'spark-navigation-tab',
    `spark-navigation-tab-${state}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (state === 'disabled') {
    return (
      <span className={rootClasses} aria-disabled="true">
        {label}
      </span>
    );
  }

  return (
    <a className={rootClasses} href={href} aria-current={state === 'active' ? 'page' : undefined}>
      {label}
    </a>
  );
}
