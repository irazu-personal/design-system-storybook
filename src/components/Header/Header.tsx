import { Breadcrumb } from '../Breadcrumb/Breadcrumb';
import { Button } from '../Button/Button';
import { SparkIcon } from '../SparkIcon';
import { ActionBar } from './ActionBar';
import './Header.css';

export type HeaderProps = {
  showBackButton?: boolean;
  showBreadcrumb?: boolean;
  showTitle?: boolean;
  showSubtitleText?: boolean;
  showActionBar?: boolean;
  title?: string;
  subtitle?: string;
  className?: string;
  onBackClick?: () => void;
};

export function Header({
  showBackButton = false,
  showBreadcrumb = true,
  showTitle = true,
  showSubtitleText = true,
  showActionBar = true,
  title = 'Projects',
  subtitle = 'Create and manage your projects. Open any project to view details and collaborate with your team.',
  className = '',
  onBackClick,
}: HeaderProps) {
  const showLeadingCopy = showTitle || showSubtitleText;

  return (
    <header className={['spark-header', className].filter(Boolean).join(' ')}>
      <div className="spark-header-leading">
        {showBreadcrumb ? (
          <Breadcrumb
            items={[
              { label: 'Breadcrumb Link' },
              { label: 'Breadcrumb Link' },
            ]}
          />
        ) : null}
        {showLeadingCopy ? (
          <div className="spark-header-title-row">
            {showBackButton ? (
              <div className="spark-header-back">
                <Button
                  variant="ghost"
                  size="medium"
                  type="button"
                  aria-label="Go back"
                  icon={<SparkIcon slug="chevron-left-large" size="medium" />}
                  onClick={onBackClick}
                />
              </div>
            ) : null}
            <div className="spark-header-copy">
              {showTitle ? <h1 className="spark-header-title">{title}</h1> : null}
              {showSubtitleText ? <p className="spark-header-subtitle">{subtitle}</p> : null}
            </div>
          </div>
        ) : null}
      </div>
      {showActionBar ? <ActionBar /> : null}
    </header>
  );
}
