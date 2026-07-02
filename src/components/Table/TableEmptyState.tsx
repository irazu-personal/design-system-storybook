import { EmptyState } from '../EmptyState/EmptyState';
import { TableMasterRow } from './TableMasterRow';
import { TableToolbar, type TableToolbarProps } from './TableToolbar';
import { TableEmptyStateHeaderRow, tableGridWrapClasses } from './tableShared';
import type { TableBorder, TableSize, TableView } from './Table.types';
import './Table.css';

export type TableEmptyStateProps = {
  tableView?: TableView;
  outerBorder?: TableBorder;
  innerBorder?: TableBorder;
  size?: TableSize;
  showToolbar?: boolean;
  showMasterRow?: boolean;
  className?: string;
} & Pick<TableToolbarProps, 'title' | 'subtitle' | 'showNotification' | 'showTitle' | 'showItems'>;

export function TableEmptyState({
  tableView = 'yes',
  outerBorder = 'yes',
  innerBorder = 'no',
  size = 'medium',
  showToolbar = true,
  showMasterRow = true,
  showNotification = false,
  showTitle = false,
  showItems = true,
  title = 'Title',
  subtitle = 'Subtitle',
  className = '',
}: TableEmptyStateProps) {
  const rootClasses = [
    'spark-table',
    tableView === 'no' ? 'spark-table-view-no' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClasses}>
      {showMasterRow ? <TableMasterRow /> : null}
      <div className="spark-table-shell">
        {showToolbar ? (
          <TableToolbar
            itemsType="with-title"
            title={title}
            subtitle={subtitle}
            showNotification={showNotification}
            showTitle={showTitle}
            showItems={showItems}
          />
        ) : null}
        <div className={tableGridWrapClasses({ size, innerBorder, outerBorder })}>
          <div className="spark-table-grid" role="table">
            <TableEmptyStateHeaderRow innerBorder={innerBorder} />
            <div className="spark-table-empty-wrap">
              <EmptyState
                title="No results found"
                subtitle="Try adjusting your filters or search terms."
                showMainButton={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
