import { useCallback, useState } from 'react';
import type { CheckboxStatus } from '../Checkbox/Checkbox';
import { Button } from '../Button/Button';
import { SparkIcon } from '../SparkIcon';
import { TableCell } from './TableCell';
import { TableDataRow } from './TableRow';
import { TableTitleCell } from './TableTitleCell';
import type { TableBorder, TableSize } from './Table.types';

export const HEADER_TITLE = 'Title';

export const DEMO_ROWS = [
  { title: 'Item 1', subtitle: 'Subtitle', count: '(0)' },
  { title: 'Item 2', subtitle: 'Subtitle', count: '(0)' },
  { title: 'Item 3', subtitle: 'Subtitle', count: '(0)' },
  { title: 'Item 4', subtitle: 'Subtitle', count: '(0)' },
  { title: 'Item 5', subtitle: 'Subtitle', count: '(0)' },
  { title: 'Item 6', subtitle: 'Subtitle', count: '(0)' },
  { title: 'Item 7', subtitle: 'Subtitle', count: '(0)' },
  { title: 'Item 8', subtitle: 'Subtitle', count: '(0)' },
];

export const EXPAND_NESTED_ROWS = [
  { title: 'Item 9', subtitle: 'Subtitle', count: '(0)' },
  { title: 'Item 9', subtitle: 'Subtitle', count: '(0)' },
  { title: 'Item 9', subtitle: 'Subtitle', count: '(0)' },
  { title: 'Item 9', subtitle: 'Subtitle', count: '(0)' },
];

export const SKELETON_ROW_COUNT = 5;

export type TableRowSelectionState = {
  headerCheckboxStatus: CheckboxStatus;
  rowChecked: boolean[];
  onHeaderCheckboxChange: () => void;
  onRowCheckboxChange: (index: number) => void;
};

export function useTableRowSelection(rowCount: number): TableRowSelectionState {
  const [rowChecked, setRowChecked] = useState(() => Array.from({ length: rowCount }, () => false));
  const [headerCheckboxStatus, setHeaderCheckboxStatus] = useState<CheckboxStatus>('inactive');

  const onHeaderCheckboxChange = useCallback(() => {
    if (headerCheckboxStatus === 'inactive') {
      setHeaderCheckboxStatus('indeterminate');
      setRowChecked(Array.from({ length: rowCount }, () => true));
      return;
    }

    setHeaderCheckboxStatus('inactive');
    setRowChecked(Array.from({ length: rowCount }, () => false));
  }, [headerCheckboxStatus, rowCount]);

  const onRowCheckboxChange = useCallback(
    (index: number) => {
      setRowChecked((prev) => {
        const next = [...prev];
        next[index] = !next[index];
        const checkedCount = next.filter(Boolean).length;
        if (checkedCount === 0) {
          setHeaderCheckboxStatus('inactive');
        } else if (checkedCount === rowCount) {
          setHeaderCheckboxStatus('active');
        } else {
          setHeaderCheckboxStatus('indeterminate');
        }
        return next;
      });
    },
    [rowCount],
  );

  return { headerCheckboxStatus, rowChecked, onHeaderCheckboxChange, onRowCheckboxChange };
}

/** Title columns after checkbox (leading 250px title column + flex siblings). */
export const TITLE_HEADER_COLUMN_COUNT = 4;

export const TITLE_FLEX_COLUMN_COUNT = TITLE_HEADER_COLUMN_COUNT - 1;

export function TableTitleFlexHeaderColumns({ border }: { border: 'default' | 'right' }) {
  return (
    <>
      {Array.from({ length: TITLE_FLEX_COLUMN_COUNT }, (_, index) => (
        <TableTitleCell
          key={`title-flex-header-${index}`}
          type="primary"
          title={HEADER_TITLE}
          borders={border}
          className="spark-table-header-cell-flex-column"
        />
      ))}
    </>
  );
}

export function TableTitleHeaderColumns({ border }: { border: 'default' | 'right' }) {
  return (
    <>
      <TableTitleCell
        type="primary"
        title={HEADER_TITLE}
        borders={border}
        className="spark-table-header-cell-title-column"
      />
      <TableTitleFlexHeaderColumns border={border} />
    </>
  );
}

export function TableHeaderActionsCell() {
  return (
    <div className="spark-table-header-cell spark-table-header-cell-actions" role="columnheader" />
  );
}

export function TableHeaderRow({
  innerBorder,
  headerCheckboxStatus,
  onHeaderCheckboxChange,
}: {
  innerBorder: TableBorder;
  headerCheckboxStatus?: CheckboxStatus;
  onHeaderCheckboxChange?: () => void;
}) {
  const border = innerBorder === 'yes' ? 'right' : 'default';

  return (
    <div className="spark-table-row spark-table-header-row" role="row">
      <TableTitleCell
        type="checkbox"
        borders={border}
        checkboxStatus={headerCheckboxStatus}
        onCheckboxChange={onHeaderCheckboxChange}
      />
      <TableTitleHeaderColumns border={border} />
      <TableHeaderActionsCell />
    </div>
  );
}

export function TableSkeletonHeaderRow({ innerBorder }: { innerBorder: TableBorder }) {
  const border = innerBorder === 'yes' ? 'right' : 'default';

  return (
    <div className="spark-table-row spark-table-header-row" role="row">
      <TableTitleCell type="checkbox" borders={border} />
      {Array.from({ length: TITLE_HEADER_COLUMN_COUNT }, (_, index) => (
        <TableTitleCell
          key={`skeleton-title-header-${index}`}
          type="primary"
          title={HEADER_TITLE}
          borders={border}
          className="spark-table-header-cell-flex-column"
        />
      ))}
      <TableHeaderActionsCell />
    </div>
  );
}

export function TableEmptyStateHeaderRow({ innerBorder }: { innerBorder: TableBorder }) {
  const border = innerBorder === 'yes' ? 'right' : 'default';

  return (
    <div className="spark-table-row spark-table-header-row" role="row">
      {Array.from({ length: TITLE_HEADER_COLUMN_COUNT }, (_, index) => (
        <TableTitleCell
          key={`empty-title-header-${index}`}
          type="primary"
          title={HEADER_TITLE}
          borders={border}
          className="spark-table-header-cell-flex-column"
        />
      ))}
      <TableHeaderActionsCell />
    </div>
  );
}

export function TableExpandHeaderRow({
  innerBorder,
  allExpanded,
  onToggleAll,
}: {
  innerBorder: TableBorder;
  allExpanded: boolean;
  onToggleAll: () => void;
}) {
  const border = innerBorder === 'yes' ? 'right' : 'default';

  return (
    <div className="spark-table-row spark-table-header-row" role="row">
      <div className="spark-table-header-leading-group">
        <div
          className={[
            'spark-table-header-cell',
            'spark-table-header-cell-chevron',
            border === 'right' ? 'spark-table-header-cell-border-right' : '',
          ]
            .filter(Boolean)
            .join(' ')}
          role="columnheader"
        >
          <Button
            variant="ghost"
            size="small"
            className="spark-table-expand-toggle-btn"
            aria-expanded={allExpanded}
            aria-label={allExpanded ? 'Collapse all rows' : 'Expand all rows'}
            onClick={onToggleAll}
            icon={
              <SparkIcon
                slug={allExpanded ? 'chevron-down-large' : 'chevron-right-large'}
                size="small"
              />
            }
          />
        </div>
        <TableTitleCell
          type="primary"
          title={HEADER_TITLE}
          borders={border}
          className="spark-table-header-cell-title-column-in-group"
        />
      </div>
      {Array.from({ length: TITLE_HEADER_COLUMN_COUNT }, (_, index) => (
        <TableTitleCell
          key={`expand-title-header-${index}`}
          type="primary"
          title={HEADER_TITLE}
          borders={border}
          className="spark-table-header-cell-flex-column"
        />
      ))}
      <TableHeaderActionsCell />
    </div>
  );
}

export function TableDefaultBody({
  rowChecked,
  onRowCheckboxChange,
}: {
  rowChecked?: boolean[];
  onRowCheckboxChange?: (index: number) => void;
} = {}) {
  return (
    <>
      {DEMO_ROWS.map((row, index) => (
        <TableDataRow key={`demo-row-${index}`} isLast={index === DEMO_ROWS.length - 1}>
          <TableCell
            kind="checkbox"
            label={row.title}
            checkboxStatus={rowChecked ? (rowChecked[index] ? 'active' : 'inactive') : undefined}
            onCheckboxChange={
              onRowCheckboxChange ? () => onRowCheckboxChange(index) : undefined
            }
          />
          <TableCell kind="link" label={row.title} subtitle={row.subtitle} />
          <TableCell kind="text" label={HEADER_TITLE} />
          <TableCell kind="text" label={row.title} count={row.count} />
          <TableCell kind="text" label={HEADER_TITLE} />
          <TableCell kind="actions" />
        </TableDataRow>
      ))}
    </>
  );
}

export function tableGridWrapClasses({
  size,
  innerBorder,
  outerBorder,
  extraClass = '',
}: {
  size: TableSize;
  innerBorder: TableBorder;
  outerBorder: TableBorder;
  extraClass?: string;
}) {
  return [
    'spark-table-grid-wrap',
    `spark-table-size-${size}`,
    innerBorder === 'yes' ? 'spark-table-inner-border' : '',
    outerBorder === 'yes' ? 'spark-table-body-outer-border' : '',
    extraClass,
  ]
    .filter(Boolean)
    .join(' ');
}
