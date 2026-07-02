import type { ReactNode } from 'react';
import { Button } from '../Button/Button';
import { Checkbox, type CheckboxStatus } from '../Checkbox/Checkbox';
import { Skeleton } from '../Skeleton/Skeleton';
import { SparkIcon } from '../SparkIcon';
import { TableTitleCell } from './TableTitleCell';
import './Table.css';

export type TableCellKind =
  | 'checkbox'
  | 'title'
  | 'text'
  | 'link'
  | 'actions'
  | 'skeleton'
  | 'expand';

export type TableCellProps = {
  kind?: TableCellKind;
  label?: string;
  subtitle?: string;
  count?: string;
  header?: boolean;
  checked?: boolean;
  checkboxStatus?: CheckboxStatus;
  onCheckboxChange?: () => void;
  expanded?: boolean;
  disabled?: boolean;
  indentLevel?: number;
  children?: ReactNode;
  className?: string;
};

export function TableCell({
  kind = 'text',
  label = 'Text',
  subtitle,
  count,
  header = false,
  checked = false,
  checkboxStatus,
  onCheckboxChange,
  expanded = false,
  disabled = false,
  indentLevel = 0,
  children,
  className = '',
}: TableCellProps) {
  const cellClasses = [
    'spark-table-cell',
    kind === 'checkbox' || kind === 'expand' ? 'spark-table-cell-checkbox' : '',
    kind === 'expand' ? 'spark-table-cell-expand' : '',
    kind === 'title' || kind === 'link' ? 'spark-table-cell-title' : '',
    kind === 'actions' ? 'spark-table-cell-actions' : '',
    kind === 'text' || kind === 'skeleton' ? 'spark-table-cell-flex' : '',
    indentLevel > 0 ? `spark-table-cell-indent-${indentLevel}` : '',
    disabled ? 'spark-table-cell-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (kind === 'checkbox') {
    const resolvedStatus =
      checkboxStatus ?? (checked ? 'active' : 'inactive');

    return (
      <div className={cellClasses} role="cell">
        {header ? (
          <Checkbox
            label=""
            status={resolvedStatus}
            aria-label="Select all rows"
            onChange={onCheckboxChange}
          />
        ) : (
          <Checkbox
            label=""
            status={resolvedStatus}
            aria-label={`Select ${label}`}
            disabled={disabled}
            onChange={onCheckboxChange}
          />
        )}
      </div>
    );
  }

  if (kind === 'expand') {
    return (
      <div className={cellClasses} role="cell">
        <SparkIcon
          slug={expanded ? 'chevron-down-large' : 'chevron-right-large'}
          size="small"
          className={disabled ? 'spark-table-expand-icon-disabled' : ''}
        />
      </div>
    );
  }

  if (kind === 'title') {
    return (
      <div className={cellClasses} role="columnheader">
        <TableTitleCell type="primary" title={label} />
      </div>
    );
  }

  if (kind === 'link') {
    return (
      <div className={cellClasses} role="cell">
        <div className="spark-table-title-cell">
          <div className="spark-table-cell-title-line">
            <p className="spark-table-title-cell-link">{label}</p>
            {count ? <span className="spark-table-cell-count">{count}</span> : null}
          </div>
          {subtitle ? <p className="spark-table-title-cell-subtitle">{subtitle}</p> : null}
        </div>
      </div>
    );
  }

  if (kind === 'actions') {
    return (
      <div className={cellClasses} role="cell">
        <Button
          variant="tertiary"
          size="small"
          className="spark-table-row-action-btn"
          aria-label="Row actions"
          disabled={disabled}
          icon={<SparkIcon slug="dots" size="small" />}
        />
      </div>
    );
  }

  if (kind === 'skeleton') {
    return (
      <div className={cellClasses} role="cell">
        <Skeleton shapeType="rectangle" width="100%" height={12} />
      </div>
    );
  }

  return (
    <div className={cellClasses} role="cell">
      {children ?? (
        <p className="spark-table-cell-text">
          {label}
          {count ? <span className="spark-table-cell-count"> {count}</span> : null}
        </p>
      )}
    </div>
  );
}
