import { Button } from '../Button/Button';
import { SparkIcon } from '../SparkIcon';
import './TableToolbar.css';

export type TableToolbarButtonsProps = {
  showActions?: boolean;
  showExport?: boolean;
  showSort?: boolean;
  showFilter?: boolean;
  actionsLabel?: string;
  className?: string;
};

export function TableToolbarButtons({
  showActions = true,
  showExport = true,
  showSort = true,
  showFilter = true,
  actionsLabel = 'Actions',
  className = '',
}: TableToolbarButtonsProps) {
  return (
    <div className={['spark-table-toolbar-buttons', className].filter(Boolean).join(' ')}>
      {showActions ? (
        <Button variant="tertiary" size="small">
          {actionsLabel}
        </Button>
      ) : null}
      {showExport ? (
        <Button
          variant="tertiary"
          size="small"
          className="spark-table-toolbar-icon-btn"
          aria-label="Export"
          icon={<SparkIcon slug="export" size="medium" />}
        />
      ) : null}
      {showSort ? (
        <Button
          variant="tertiary"
          size="small"
          className="spark-table-toolbar-icon-btn"
          aria-label="Sort"
          icon={<SparkIcon slug="arrows-sort" size="medium" />}
        />
      ) : null}
      {showFilter ? (
        <Button
          variant="tertiary"
          size="small"
          className="spark-table-toolbar-icon-btn"
          aria-label="Filter"
          icon={<SparkIcon slug="filter" size="medium" />}
        />
      ) : null}
    </div>
  );
}
