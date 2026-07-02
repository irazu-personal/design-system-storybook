import { Avatar } from '../Avatar/Avatar';
import { Badge } from '../Badge/Badge';
import { Divider } from '../Divider/Divider';
import { SparkIcon } from '../SparkIcon';
import { sparkAssetUrl } from '../../utils/sparkAssetUrl';
import { NavigationMainButton } from './NavigationMainButton';
import { NavigationTab, type NavigationTabState } from './NavigationTab';
import './Navigation.css';

export type NavigationTabItem = {
  label: string;
  state?: NavigationTabState;
  href?: string;
};

export type NavigationProps = {
  tabs?: NavigationTabItem[];
  showBeta?: boolean;
  gettingStartedLabel?: string;
  notificationCount?: string;
  className?: string;
};

const DEFAULT_TABS: NavigationTabItem[] = [
  { label: 'Projects', state: 'active' },
  { label: 'Analytics', state: 'inactive' },
  { label: 'Team', state: 'inactive' },
  { label: 'Docs', state: 'inactive' },
];

export function Navigation({
  tabs = DEFAULT_TABS,
  showBeta = true,
  gettingStartedLabel = 'Getting Started?',
  notificationCount = '21',
  className = '',
}: NavigationProps) {
  const rootClasses = ['spark-navigation', className].filter(Boolean).join(' ');

  return (
    <header className={rootClasses}>
      <div className="spark-navigation-left">
        <div className="spark-navigation-brand">
          <img
            className="spark-navigation-logo"
            src={sparkAssetUrl('logo/brandmark-white-logo-with-text.svg')}
            alt="Spark"
          />
          {showBeta ? <span className="spark-navigation-beta">Beta</span> : null}
        </div>
        <Divider direction="vertical" bg="on-dark" className="spark-navigation-divider spark-navigation-divider-fill" />
        <nav className="spark-navigation-tabs" aria-label="Main">
          {tabs.map((tab) => (
            <NavigationTab
              key={tab.label}
              label={tab.label}
              state={tab.state}
              href={tab.href}
            />
          ))}
        </nav>
      </div>
      <div className="spark-navigation-right">
        <span className="spark-navigation-help">{gettingStartedLabel}</span>
        <Divider direction="vertical" bg="on-dark" className="spark-navigation-divider spark-navigation-divider-inset" />
        <div className="spark-navigation-actions">
          <NavigationMainButton
            aria-label="Notifications"
            badge={<Badge amount={notificationCount} className="spark-navigation-badge" />}
          >
            <SparkIcon slug="bell" size="medium" />
          </NavigationMainButton>
          <NavigationMainButton aria-label="Settings">
            <SparkIcon slug="settings" size="medium" />
          </NavigationMainButton>
          <Avatar size="small" type="image" />
        </div>
      </div>
    </header>
  );
}

export { NavigationTab, type NavigationTabState } from './NavigationTab';
