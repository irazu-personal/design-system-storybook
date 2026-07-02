import { SparkIcon } from '../SparkIcon';
import { DropdownItem, type DropdownItemProps } from '../Dropdown/DropdownItem';
import { DropdownFooter } from '../Dropdown/DropdownFooter';
import '../Dropdown/Dropdown.css';

export type DropdownSearchProps = {
  searchPlaceholder?: string;
  showFooter?: boolean;
  items?: DropdownItemProps[];
  showPrefixIcon?: boolean;
  showInfoIcon?: boolean;
  className?: string;
};

const DEFAULT_ITEMS: DropdownItemProps[] = Array.from({ length: 4 }, () => ({
  label: 'Dropdown item text',
}));

export function DropdownSearch({
  searchPlaceholder = 'Search',
  showFooter = true,
  items = DEFAULT_ITEMS,
  showPrefixIcon = false,
  showInfoIcon = false,
  className = '',
}: DropdownSearchProps) {
  const rootClasses = ['spark-dropdown', 'spark-dropdown-search', className].filter(Boolean).join(' ');

  return (
    <div className={rootClasses} role="menu">
      <div className="spark-dropdown-search-header">
        <div className="spark-dropdown-search-field">
          <input className="spark-dropdown-search-input" type="search" placeholder={searchPlaceholder} />
          <SparkIcon slug="search" size="small" className="spark-dropdown-search-icon" />
        </div>
      </div>
      <div className="spark-dropdown-body">
        {items.map((item, index) => (
          <DropdownItem
            key={`${item.label}-${index}`}
            {...item}
            showPrefixIcon={item.showPrefixIcon ?? showPrefixIcon}
            showInfoIcon={item.showInfoIcon ?? showInfoIcon}
          />
        ))}
      </div>
      {showFooter ? <DropdownFooter /> : null}
    </div>
  );
}
