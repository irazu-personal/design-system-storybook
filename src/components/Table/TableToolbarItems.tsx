import { Button } from '../Button/Button';
import { Divider } from '../Divider/Divider';
import { Search } from '../Search/Search';
import { SparkIcon } from '../SparkIcon';
import { TagPill } from '../TagPill/TagPill';
import { TableToolbarButtons } from './TableToolbarButtons';
import { TableToolbarContent } from './TableToolbarContent';
import { TableDropdownField } from './tableFields';
import './TableToolbar.css';

export type TableToolbarItemsType =
  | 'with-title'
  | 'no-title'
  | 'actions-toolbar'
  | 'filter-with-tags';

const FILTER_TAGS = [
  'Aws',
  'GPU',
  'T4',
  'g4dn.xlarge',
  'Single Stream (1 concurrent request) concurrency',
  'Short input length',
];

export type TableToolbarItemsProps = {
  itemsType?: TableToolbarItemsType;
  title?: string;
  subtitle?: string;
  showSubtitle?: boolean;
  showInfoIconTitle?: boolean;
  showInfoIconSubtitle?: boolean;
  showRightContent?: boolean;
  search?: boolean;
  dropdown?: boolean;
  selectedCount?: number;
  totalCount?: number;
  className?: string;
};

export function TableToolbarItems({
  itemsType = 'with-title',
  title = 'Title',
  subtitle = 'Subtitle',
  showSubtitle = false,
  showInfoIconTitle = true,
  showInfoIconSubtitle = true,
  showRightContent = true,
  search = true,
  dropdown = true,
  selectedCount = 1,
  totalCount = 10,
  className = '',
}: TableToolbarItemsProps) {
  if (itemsType === 'no-title') {
    return (
      <div className={['spark-table-toolbar-items spark-table-toolbar-no-title', className].filter(Boolean).join(' ')}>
        <div className="spark-table-toolbar-no-title-left">
          {dropdown ? (
            <div className="spark-table-toolbar-no-title-dropdown">
              <TableDropdownField size="small" placeholder="Dropdown" text="Dropdown" />
            </div>
          ) : null}
        </div>
        {showRightContent ? (
          <div className="spark-table-toolbar-actions">
            {search ? (
              <div className="spark-table-toolbar-search">
                <Search size="small" placeholder="Search" />
              </div>
            ) : null}
            <TableToolbarButtons />
          </div>
        ) : null}
      </div>
    );
  }

  if (itemsType === 'actions-toolbar') {
    return (
      <div className={['spark-table-toolbar-items spark-table-toolbar-actions-row', className].filter(Boolean).join(' ')}>
        <div className="spark-table-toolbar-actions-left">
          <p className="spark-table-toolbar-selection-label">
            {selectedCount} of {totalCount} selected
          </p>
          <div className="spark-table-toolbar-page-size">
            <TableDropdownField size="small" placeholder="10" text="10" />
          </div>
          <div className="spark-table-toolbar-bulk-actions">
            <Button variant="tertiary" size="small">
              Delete
            </Button>
            <Button variant="tertiary" size="small">
              Download
            </Button>
            <Button variant="tertiary" size="small">
              Review
            </Button>
          </div>
        </div>
        <TableToolbarButtons showActions={false} />
      </div>
    );
  }

  if (itemsType === 'filter-with-tags') {
    return (
      <div className={['spark-table-toolbar-items spark-table-toolbar-filter-row', className].filter(Boolean).join(' ')}>
        <div className="spark-table-filter-tags">
          <p className="spark-table-filter-label">Filters Selected</p>
          {FILTER_TAGS.map((tag) => (
            <TagPill key={tag} label={tag} className="spark-table-toolbar-tag" />
          ))}
          <div className="spark-table-filter-clear">
            <Divider direction="vertical" />
            <Button variant="link" size="small">
              Clear All
            </Button>
          </div>
        </div>
        <Button variant="tertiary" size="small" startIcon={<SparkIcon slug="filter" size="small" />}>
          Filter Metrics (0)
        </Button>
      </div>
    );
  }

  return (
    <div className={['spark-table-toolbar-items spark-table-toolbar-with-title', className].filter(Boolean).join(' ')}>
      <TableToolbarContent
        title={title}
        subtitle={subtitle}
        showSubtitle={showSubtitle}
        showInfoIconTitle={showInfoIconTitle}
        showInfoIconSubtitle={showInfoIconSubtitle}
      />
      {showRightContent ? (
        <div className="spark-table-toolbar-actions">
          {dropdown ? (
            <div className="spark-table-toolbar-no-title-dropdown">
              <TableDropdownField size="small" placeholder="Input" text="Input" />
            </div>
          ) : null}
          {search ? (
            <div className="spark-table-toolbar-search">
              <Search size="small" placeholder="Search" />
            </div>
          ) : null}
          <TableToolbarButtons />
        </div>
      ) : null}
    </div>
  );
}
