import { useState } from 'react';
import { Pagination } from '../Pagination/Pagination';
import { TableMasterRow } from './TableMasterRow';
import { TableRowExpandable, TableRowLevel } from './TableRowExpandable';
import { TableToolbar, type TableToolbarProps } from './TableToolbar';
import { EXPAND_NESTED_ROWS, TableExpandHeaderRow, tableGridWrapClasses } from './tableShared';
import type { TableBorder, TableSize, TableView } from './Table.types';
import './Table.css';

export type TableExpandProps = {
  tableView?: TableView;
  outerBorder?: TableBorder;
  innerBorder?: TableBorder;
  size?: TableSize;
  showToolbar?: boolean;
  showMasterRow?: boolean;
  showPagination?: boolean;
  className?: string;
} & Pick<TableToolbarProps, 'title' | 'subtitle' | 'showNotification' | 'showTitle' | 'showItems'>;

const EXPAND_GROUP_COUNT = 2;

function TableExpandGroup({
  expanded,
  onExpandedChange,
  isLastGroup = false,
}: {
  expanded: boolean;
  onExpandedChange: (expanded: boolean) => void;
  isLastGroup?: boolean;
}) {
  return (
    <>
      <TableRowExpandable
        expanded={expanded}
        onExpandedChange={onExpandedChange}
        className={expanded ? 'spark-table-row-expandable-open' : isLastGroup && !expanded ? 'spark-table-row-last' : ''}
      />
      {expanded
        ? EXPAND_NESTED_ROWS.map((row, index) => (
            <TableRowLevel
              key={`${row.title}-${index}`}
              title={row.title}
              subtitle={row.subtitle}
              count={row.count}
              className={
                isLastGroup && index === EXPAND_NESTED_ROWS.length - 1 ? 'spark-table-row-last' : ''
              }
            />
          ))
        : null}
    </>
  );
}

function TableExpandBody({
  expandedGroups,
  onGroupExpandedChange,
}: {
  expandedGroups: boolean[];
  onGroupExpandedChange: (index: number, expanded: boolean) => void;
}) {
  return (
    <>
      {expandedGroups.map((expanded, index) => (
        <TableExpandGroup
          key={`expand-group-${index}`}
          expanded={expanded}
          onExpandedChange={(next) => onGroupExpandedChange(index, next)}
          isLastGroup={index === expandedGroups.length - 1}
        />
      ))}
    </>
  );
}

export function TableExpand({
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
}: TableExpandProps) {
  const [expandedGroups, setExpandedGroups] = useState(() => Array(EXPAND_GROUP_COUNT).fill(true));
  const allExpanded = expandedGroups.every(Boolean);

  const toggleAll = () => {
    const next = !allExpanded;
    setExpandedGroups(Array(EXPAND_GROUP_COUNT).fill(next));
  };

  const handleGroupExpandedChange = (index: number, expanded: boolean) => {
    setExpandedGroups((prev) => prev.map((value, groupIndex) => (groupIndex === index ? expanded : value)));
  };

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
        <div className={tableGridWrapClasses({ size, innerBorder, outerBorder, extraClass: 'spark-table-expand' })}>
          <div className="spark-table-grid" role="table">
            <TableExpandHeaderRow
              innerBorder={innerBorder}
              allExpanded={allExpanded}
              onToggleAll={toggleAll}
            />
            <TableExpandBody
              expandedGroups={expandedGroups}
              onGroupExpandedChange={handleGroupExpandedChange}
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

export { TableRowExpandable, TableRowLevel };
