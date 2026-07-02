import { Checkbox, type CheckboxStatus } from '../Checkbox/Checkbox';
import { SparkIcon } from '../SparkIcon';
import { TableDropdownField } from './tableFields';
import './Table.css';

export type TableTitleCellType =
  | 'space'
  | 'primary'
  | 'sort-up'
  | 'sort-down'
  | 'checkbox'
  | 'input-dropdown'
  | 'chevron';

export type TableTitleCellBorders = 'default' | 'right';

export type TableTitleCellProps = {
  type?: TableTitleCellType;
  borders?: TableTitleCellBorders;
  infoIcon?: boolean;
  sortIcon?: boolean;
  expanded?: boolean;
  title?: string;
  dropdownText?: string;
  className?: string;
  checkboxStatus?: CheckboxStatus;
  onCheckboxChange?: () => void;
};

function sortIconSlug(type: TableTitleCellType): string | null {
  if (type === 'primary') return 'arrows-sort';
  if (type === 'sort-up') return 'arrow-narrow-up';
  if (type === 'sort-down') return 'arrow-narrow-down';
  return null;
}

export function TableTitleCell({
  type = 'space',
  borders = 'default',
  infoIcon,
  sortIcon,
  expanded = false,
  title = 'TITLE',
  dropdownText = 'Text',
  className = '',
  checkboxStatus,
  onCheckboxChange,
}: TableTitleCellProps) {
  const showInfoIcon = infoIcon ?? false;
  const showSortIcon = sortIcon ?? false;
  const sortSlug = sortIconSlug(type);

  const rootClasses = [
    'spark-table-header-cell',
    `spark-table-header-cell-${type}`,
    borders === 'right' ? 'spark-table-header-cell-border-right' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (type === 'space') {
    return <div className={rootClasses} role="columnheader" />;
  }

  if (type === 'checkbox') {
    return (
      <div className={rootClasses} role="columnheader">
        <Checkbox
          label=""
          status={checkboxStatus ?? 'inactive'}
          aria-label="Select all rows"
          onChange={onCheckboxChange}
        />
      </div>
    );
  }

  if (type === 'chevron') {
    return (
      <div className={rootClasses} role="columnheader">
        <SparkIcon slug={expanded ? 'chevron-down-large' : 'chevron-right-large'} size="small" />
      </div>
    );
  }

  if (type === 'input-dropdown') {
    return (
      <div className={rootClasses} role="columnheader">
        <div className="spark-table-header-cell-content">
          <p className="spark-table-header-cell-label spark-table-header-cell-label-regular">{title}</p>
          {showInfoIcon ? <SparkIcon slug="info-circle" size="small" /> : null}
        </div>
        <div className="spark-table-header-cell-dropdown">
          <TableDropdownField size="small" placeholder={dropdownText} text={dropdownText} />
        </div>
      </div>
    );
  }

  return (
    <div className={rootClasses} role="columnheader">
      <div className="spark-table-header-cell-content">
        <p className="spark-table-header-cell-label">{title}</p>
        {showInfoIcon ? <SparkIcon slug="info-circle" size="small" /> : null}
      </div>
      {showSortIcon && sortSlug ? <SparkIcon slug={sortSlug} size="small" /> : null}
    </div>
  );
}
