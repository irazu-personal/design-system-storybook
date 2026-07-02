import { DropdownItem, type DropdownItemProps } from './DropdownItem';
import { DropdownFooter } from './DropdownFooter';
import { ScrollBar } from '../ScrollBar/ScrollBar';
import './Dropdown.css';

export type DropdownType = 'regular' | 'checkbox';

export type DropdownProps = {
  type?: DropdownType;
  title?: string;
  showTitle?: boolean;
  showFooter?: boolean;
  showPrefixIcon?: boolean;
  showInfoIcon?: boolean;
  items?: DropdownItemProps[];
  className?: string;
};

const DEFAULT_ITEMS: DropdownItemProps[] = Array.from({ length: 4 }, () => ({
  label: 'Dropdown item text',
}));

const MAX_VISIBLE_ITEMS = 4;

export function Dropdown({
  type = 'regular',
  title = 'Title',
  showTitle = false,
  showFooter = false,
  showPrefixIcon = false,
  showInfoIcon = false,
  items = DEFAULT_ITEMS,
  className = '',
}: DropdownProps) {
  const showScrollBar = items.length > MAX_VISIBLE_ITEMS;
  const rootClasses = [
    'spark-dropdown',
    `spark-dropdown-${type}`,
    showScrollBar ? 'spark-dropdown-scrollable' : '',
    showFooter ? 'spark-dropdown-with-footer' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClasses} role="menu">
      {showTitle ? <div className="spark-dropdown-title">{title}</div> : null}
      <div className="spark-dropdown-list-wrap">
        <div className="spark-dropdown-body">
          {items.map((item, index) => (
            <DropdownItem
              key={`${item.label}-${index}`}
              {...item}
              type={type === 'checkbox' ? 'checkbox' : 'regular'}
              showPrefixIcon={item.showPrefixIcon ?? showPrefixIcon}
              showInfoIcon={item.showInfoIcon ?? showInfoIcon}
            />
          ))}
        </div>
        {showScrollBar ? <ScrollBar className="spark-dropdown-scrollbar" /> : null}
      </div>
      {showFooter ? <DropdownFooter /> : null}
    </div>
  );
}
