import { Pagination } from '../Pagination/Pagination';
import { TableCell } from './TableCell';
import { TableMasterRow } from './TableMasterRow';
import { TableToolbar, type TableToolbarProps } from './TableToolbar';
import { SKELETON_ROW_COUNT, TableSkeletonHeaderRow, tableGridWrapClasses } from './tableShared';
import type { TableBorder, TableSize, TableView } from './Table.types';
import './Table.css';

export type TableSkeletonProps = {
  tableView?: TableView;
  outerBorder?: TableBorder;
  innerBorder?: TableBorder;
  size?: TableSize;
  showToolbar?: boolean;
  showMasterRow?: boolean;
  showPagination?: boolean;
  className?: string;
} & Pick<TableToolbarProps, 'title' | 'subtitle' | 'showNotification' | 'showTitle' | 'showItems'>;

function TableSkeletonBody() {
  return (
    <>
      {Array.from({ length: SKELETON_ROW_COUNT }, (_, index) => (
        <div
          key={`skeleton-row-${index}`}
          className={[
            'spark-table-row',
            index === SKELETON_ROW_COUNT - 1 ? 'spark-table-row-last' : '',
          ]
            .filter(Boolean)
            .join(' ')}
          role="row"
        >
          <TableCell kind="checkbox" label={`Row ${index + 1}`} />
          <TableCell kind="skeleton" />
          <TableCell kind="skeleton" />
          <TableCell kind="skeleton" />
          <TableCell kind="skeleton" />
          <TableCell kind="actions" />
        </div>
      ))}
    </>
  );
}

export function TableSkeleton({
  tableView = 'yes',
  outerBorder = 'yes',
  innerBorder = 'no',
  size = 'medium',
  showToolbar = true,
  showMasterRow = true,
  showPagination = true,
  showNotification = false,
  showTitle = false,
  showItems = true,
  title = 'Title',
  subtitle = 'Subtitle',
  className = '',
}: TableSkeletonProps) {
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
            <TableSkeletonHeaderRow innerBorder={innerBorder} />
            <TableSkeletonBody />
          </div>
        </div>
      </div>
      {showPagination && tableView === 'yes' ? (
        <div className="spark-table-pagination-wrap">
          <Pagination type="total-items" currentPage={1} totalPages={33} totalItems={296} pageSize={10} />
        </div>
      ) : null}
    </div>
  );
}
