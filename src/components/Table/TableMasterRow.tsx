import { useState } from 'react';
import { Search } from '../Search/Search';
import {
  SegmentedControlIcon,
  TABLE_VIEW_TOGGLE_ITEMS,
} from '../SegmentedControlIcon/SegmentedControlIcon';
import { TableDropdownField } from './tableFields';
import './Table.css';

export function TableMasterRow() {
  const [viewMode, setViewMode] = useState('list');

  return (
    <div className="spark-table-master-row">
      <div className="spark-table-master-inputs">
        <div className="spark-table-master-field">
          <TableDropdownField
            placeholder="Sort by newest"
            text="Sort by newest"
          />
        </div>
        <div className="spark-table-master-field">
          <TableDropdownField placeholder="Filter task type" text="Filter task type" />
        </div>
        <div className="spark-table-master-field">
          <Search size="medium" placeholder="Search" />
        </div>
      </div>
      <SegmentedControlIcon
        size="medium"
        items={TABLE_VIEW_TOGGLE_ITEMS}
        activeId={viewMode}
        onChange={setViewMode}
      />
    </div>
  );
}
