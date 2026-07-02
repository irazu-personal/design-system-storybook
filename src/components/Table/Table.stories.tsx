import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyMatrixItemRowStartStyle,
  storyMatrixSectionStyle,
  variantLabelStyle,
} from '../Input/shared/storyHelpers';
import { Table, type TableBorder, type TableSize, type TableToolbarType, type TableView } from './Table';
import { TableToolbar } from './TableToolbar';
import type { TableToolbarItemsType } from './TableToolbarItems';
import { TableCell } from './TableCell';
import { TableDataRow, type TableRowState } from './TableRow';
import { DEMO_ROWS, HEADER_TITLE } from './tableShared';

const TOOLBAR_TYPES: TableToolbarItemsType[] = [
  'with-title',
  'no-title',
  'actions-toolbar',
  'filter-with-tags',
];

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    tableView: { control: 'select', options: ['yes', 'no'] satisfies TableView[] },
    outerBorder: { control: 'select', options: ['yes', 'no'] satisfies TableBorder[] },
    innerBorder: { control: 'select', options: ['yes', 'no'] satisfies TableBorder[] },
    size: { control: 'select', options: ['medium', 'small'] satisfies TableSize[] },
    toolbarType: { control: 'select', options: TOOLBAR_TYPES },
    showNotification: { control: 'boolean' },
    showTitle: { control: 'boolean' },
    showItems: { control: 'boolean' },
  },
  args: {
    tableView: 'yes',
    outerBorder: 'yes',
    innerBorder: 'no',
    size: 'medium',
    showToolbar: true,
    showNotification: false,
    showTitle: false,
    showItems: true,
    showMasterRow: true,
    showPagination: true,
    toolbarType: 'with-title',
    showSubtitle: false,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Spark Table Rows — high-density data grid with toolbar, optional notification, filter tags, and pagination. Toggle outer/inner borders when nesting in cards.',
      },
    },
  },
  decorators: [
    (StoryComponent) => (
      <div style={{ background: 'var(--semantic-surface-canvas)', padding: '1.5rem', minHeight: '100%' }}>
        <StoryComponent />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Table>;

const OUTER_BORDER: TableBorder[] = ['yes', 'no'];
const INNER_BORDER: TableBorder[] = ['yes', 'no'];
const SIZES: TableSize[] = ['medium', 'small'];

export const BorderMatrix: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {OUTER_BORDER.map((outerBorder) =>
        INNER_BORDER.map((innerBorder) => (
          <div key={`${outerBorder}-${innerBorder}`} style={storyMatrixItemRowStartStyle}>
            <p style={variantLabelStyle}>
              {outerBorder} / {innerBorder}
            </p>
            <Table outerBorder={outerBorder} innerBorder={innerBorder} showMasterRow={false} showNotification={false} />
          </div>
        )),
      )}
    </div>
  ),
};

export const Default: Story = {};

export const FilterWithTags: Story = {
  args: {
    toolbarType: 'filter-with-tags',
    showTitle: true,
  },
};

const ROW_STATES: TableRowState[] = ['default', 'hover', 'disabled'];

export const RowStates: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Figma table body row states — default rows are interactive (hover on pointer). Static matrices show hover and disabled.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {ROW_STATES.map((state) => (
        <div key={state} style={storyMatrixItemRowStartStyle}>
          <p style={variantLabelStyle}>{state}</p>
          <div style={{ width: '100%', maxWidth: 1350 }}>
            <TableDataRow state={state}>
              <TableCell kind="checkbox" label={DEMO_ROWS[0].title} />
              <TableCell kind="link" label={DEMO_ROWS[0].title} subtitle={DEMO_ROWS[0].subtitle} />
              <TableCell kind="text" label={HEADER_TITLE} />
              <TableCell kind="text" label={DEMO_ROWS[0].title} count={DEMO_ROWS[0].count} />
              <TableCell kind="text" label={HEADER_TITLE} />
              <TableCell kind="actions" />
            </TableDataRow>
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {SIZES.map((size) => (
        <div key={size} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <Table size={size} showMasterRow={false} showNotification={false} />
        </div>
      ))}
    </div>
  ),
};

export const ToolBarComposite: Story = {
  render: () => (
    <TableToolbar
      showNotification
      showTitle
      showItems
      itemsType="filter-with-tags"
      showSubtitle={false}
    />
  ),
};

export const ToolbarOnly: Story = {
  args: {
    tableView: 'no',
  },
};

export const ToolbarTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {TOOLBAR_TYPES.map((toolbarType) => (
        <div key={toolbarType} style={storyMatrixItemRowStartStyle}>
          <p style={variantLabelStyle}>{toolbarType}</p>
          <Table
            toolbarType={toolbarType}
            showTitle={toolbarType === 'filter-with-tags'}
            showMasterRow={false}
            showNotification={false}
            showPagination={false}
          />
        </div>
      ))}
    </div>
  ),
};
