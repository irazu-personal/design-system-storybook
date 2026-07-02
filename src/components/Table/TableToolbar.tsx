import { Notification } from '../Notification/Notification';
import { TableToolbarContent } from './TableToolbarContent';
import { TableToolbarItems, type TableToolbarItemsType } from './TableToolbarItems';
import './TableToolbar.css';

export type TableToolbarProps = {
  itemsType?: TableToolbarItemsType;
  title?: string;
  subtitle?: string;
  showNotification?: boolean;
  showTitle?: boolean;
  showItems?: boolean;
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

export function TableToolbar({
  itemsType = 'with-title',
  title = 'Title',
  subtitle = 'Subtitle',
  showNotification = false,
  showTitle = false,
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
}: TableToolbarProps) {
  return (
    <div className={['spark-table-toolbar', className].filter(Boolean).join(' ')}>
      {showNotification ? (
        <div className="spark-table-notification-wrap">
          <Notification
            feedback="info"
            wide
            elevated
            title="Notification title"
            content="Interactively monetize corporate alignments and fully tested niche markets."
          />
        </div>
      ) : null}
      {showTitle ? (
        <div className="spark-table-toolbar-title-block">
          <TableToolbarContent
            title={title}
            subtitle={subtitle}
            showSubtitle={showSubtitle}
            showInfoIconTitle={showInfoIconTitle}
            showInfoIconSubtitle={showInfoIconSubtitle}
          />
        </div>
      ) : null}
      {showItems ? (
        <TableToolbarItems
          itemsType={itemsType}
          title={title}
          subtitle={subtitle}
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
    </div>
  );
}
