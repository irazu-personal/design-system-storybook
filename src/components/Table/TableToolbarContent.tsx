import { SparkIcon } from '../SparkIcon';
import './TableToolbar.css';

export type TableToolbarContentProps = {
  title?: string;
  subtitle?: string;
  showSubtitle?: boolean;
  showInfoIconTitle?: boolean;
  showInfoIconSubtitle?: boolean;
  className?: string;
};

export function TableToolbarContent({
  title = 'Title',
  subtitle = 'Subtitle',
  showSubtitle = false,
  showInfoIconTitle = true,
  showInfoIconSubtitle = true,
  className = '',
}: TableToolbarContentProps) {
  return (
    <div className={['spark-table-toolbar-content', className].filter(Boolean).join(' ')}>
      <div className="spark-table-toolbar-content-title-row">
        <h3 className="spark-table-toolbar-content-title">{title}</h3>
        {showInfoIconTitle ? <SparkIcon slug="info-circle" size="small" /> : null}
      </div>
      {showSubtitle ? (
        <div className="spark-table-toolbar-content-title-row">
          <p className="spark-table-toolbar-content-subtitle">{subtitle}</p>
          {showInfoIconSubtitle ? <SparkIcon slug="info-circle" size="small" /> : null}
        </div>
      ) : null}
    </div>
  );
}
