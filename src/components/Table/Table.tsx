import { Pagination } from '../Pagination/Pagination';
import { TableMasterRow } from './TableMasterRow';
import { TableToolbar, type TableToolbarProps } from './TableToolbar';
import { TableDefaultBody, TableHeaderRow, tableGridWrapClasses, useTableRowSelection, DEMO_ROWS } from './tableShared';
import type { TableBorder, TableSize, TableToolbarItemsType, TableView } from './Table';
import './Table.css';

export type TableProps = {
  tableView?: TableView;
  outerBorder?: TableBorder;
  innerBorder?: TableBorder;
  size?: TableSize;
  showToolbar?: boolean;
  showMasterRow?: boolean;
  showPagination?: boolean;
  toolbarType?: TableToolbarItemsType;
  title?: string;
  subtitle?: string;
  className?: string;
} & Omit<TableToolbarProps, 'itemsType' | 'className'>;

export function Table({
  tableView = 'yes',
  outerBorder = 'yes',
  innerBorder = 'no',
  size = 'medium',
  showToolbar = true,
  showMasterRow = true,
  showPagination = true,
  toolbarType = 'with-title',
  title = 'Title',
  subtitle = 'Subtitle',
  showNotification = false,
  showTitle,
  showItems = true,
  showSubtitle = false,
  showInfoIconTitle = true,
  showInfoIconSubtitle = true,
  showRightContent = true,
  search = true,
  dropdown = true,
  selectedCount = 1,
  totalCount = 10,
  className = '',
}: TableProps) {
  const resolvedShowTitle = showTitle ?? toolbarType === 'filter-with-tags';
  const rowSelection = useTableRowSelection(DEMO_ROWS.length);

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
            itemsType={toolbarType}
            title={title}
            subtitle={subtitle}
            showNotification={showNotification}
            showTitle={resolvedShowTitle}
            showItems={showItems}
            showSubtitle={showSubtitle}
            showInfoIconTitle={showInfoIconTitle}
            showInfoIconSubtitle={showInfoIconSubtitle}
            showRightContent={showRightContent}
            search={search}
            dropdown={dropdown}
            selectedCount={selectedCount}
            totalCount={totalCount}
          />
        ) : null}
        <div className={tableGridWrapClasses({ size, innerBorder, outerBorder })}>
          <div className="spark-table-grid" role="table">
            <TableHeaderRow
              innerBorder={innerBorder}
              headerCheckboxStatus={rowSelection.headerCheckboxStatus}
              onHeaderCheckboxChange={rowSelection.onHeaderCheckboxChange}
            />
            <TableDefaultBody
              rowChecked={rowSelection.rowChecked}
              onRowCheckboxChange={rowSelection.onRowCheckboxChange}
            />
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

export type { TableView, TableBorder, TableSize } from './Table.types';
export type { TableToolbarItemsType as TableToolbarType } from './TableToolbarItems';
