import { useState } from 'react';
import { Button } from '../Button/Button';
import { SparkIcon } from '../SparkIcon';
import { TableCell } from './TableCell';
import { HEADER_TITLE } from './tableShared';
import './Table.css';

export type TableRowExpandableState = 'default' | 'hover' | 'disabled';

export type TableRowExpandableProps = {
  state?: TableRowExpandableState;
  expanded?: boolean;
  defaultExpanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  showTextButton?: boolean;
  showActionIcon?: boolean;
  title?: string;
  count?: string;
  subtitle?: string;
  textButtonLabel?: string;
  className?: string;
};

export function TableRowExpandable({
  state = 'default',
  expanded: expandedProp,
  defaultExpanded = true,
  onExpandedChange,
  showTextButton = true,
  showActionIcon = true,
  title = HEADER_TITLE,
  count = '(0)',
  subtitle = 'Subtitle',
  textButtonLabel = 'New Project Task',
  className = '',
}: TableRowExpandableProps) {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const expanded = expandedProp ?? internalExpanded;

  const rowClasses = [
    'spark-table-row',
    'spark-table-row-expandable',
    state === 'default' ? 'spark-table-row-interactive' : '',
    state === 'hover' ? 'spark-table-row-hover' : '',
    state === 'disabled' ? 'spark-table-row-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const disabled = state === 'disabled';

  const toggleExpanded = () => {
    if (disabled) return;
    const next = !expanded;
    if (expandedProp === undefined) {
      setInternalExpanded(next);
    }
    onExpandedChange?.(next);
  };

  return (
    <div className={rowClasses} role="row">
      <div className="spark-table-cell spark-table-cell-expand">
        <Button
          variant="ghost"
          size="small"
          className="spark-table-expand-toggle-btn"
          aria-expanded={expanded}
          aria-label={expanded ? 'Collapse row' : 'Expand row'}
          disabled={disabled}
          onClick={toggleExpanded}
          icon={
            <SparkIcon
              slug={expanded ? 'chevron-down-large' : 'chevron-right-large'}
              size="small"
              className={disabled ? 'spark-table-expand-icon-disabled' : ''}
            />
          }
        />
      </div>
      <div className="spark-table-cell spark-table-cell-expand-parent">
        <div className="spark-table-cell-two-lines-content">
          <div className="spark-table-cell-title-line">
            <p className="spark-table-cell-title-text">{title}</p>
            <p className="spark-table-cell-title-count">{count}</p>
          </div>
          <p className="spark-table-cell-subtitle-text">{subtitle}</p>
        </div>
        {showActionIcon ? (
          <Button
            variant="ghost"
            size="small"
            className="spark-table-row-action-btn spark-table-row-expandable-action-btn"
            aria-label="Row actions"
            disabled={disabled}
            icon={<SparkIcon slug="dots" size="small" />}
          />
        ) : null}
      </div>
      {showTextButton ? (
        <div className="spark-table-cell spark-table-cell-text-button">
          <Button variant="ghost" size="tiny" disabled={disabled}>
            {textButtonLabel}
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export type TableRowLevelProps = {
  title?: string;
  subtitle?: string;
  count?: string;
  className?: string;
};

export function TableRowLevel({
  title = 'Item 9',
  subtitle = 'Subtitle',
  count = '(0)',
  className = '',
}: TableRowLevelProps) {
  return (
    <div className={['spark-table-row', 'spark-table-row-level', className].filter(Boolean).join(' ')} role="row">
      <div className="spark-table-row-leading-group">
        <div className="spark-table-cell spark-table-cell-spacer" role="cell" aria-hidden="true" />
        <TableCell kind="link" label={title} subtitle={subtitle} count={count} />
      </div>
      <TableCell kind="text" label={HEADER_TITLE} />
      <TableCell kind="text" label={title} count={count} />
      <TableCell kind="text" label={HEADER_TITLE} />
      <TableCell kind="actions" />
    </div>
  );
}
