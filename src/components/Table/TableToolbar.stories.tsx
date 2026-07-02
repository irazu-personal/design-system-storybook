import type { Meta, StoryObj } from '@storybook/react';
import { storyMatrixItemRowStartStyle, storyMatrixSectionStyle, variantLabelStyle } from '../Input/shared/storyHelpers';
import { TableToolbar } from './TableToolbar';
import type { TableToolbarItemsType } from './TableToolbarItems';

const ITEMS_TYPES: TableToolbarItemsType[] = [
  'with-title',
  'no-title',
  'actions-toolbar',
  'filter-with-tags',
];

const meta: Meta<typeof TableToolbar> = {
  title: 'Components/Table/Tool Bar',
  component: TableToolbar,
  tags: ['autodocs'],
  argTypes: {
    itemsType: { control: 'select', options: ITEMS_TYPES },
    showNotification: { control: 'boolean' },
    showTitle: { control: 'boolean' },
    showItems: { control: 'boolean' },
    showSubtitle: { control: 'boolean' },
  },
  args: {
    showNotification: false,
    showTitle: false,
    showItems: true,
    showSubtitle: false,
    itemsType: 'with-title',
  },
  parameters: { layout: 'fullscreen' },
  decorators: [
    (StoryComponent) => (
      <div style={{ background: 'var(--semantic-surface-canvas)', padding: '1.5rem', minHeight: '100%' }}>
        <StoryComponent />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TableToolbar>;

export const Default: Story = {};

export const WithNotificationAndFilterTags: Story = {
  args: {
    showNotification: true,
    showTitle: true,
    showItems: true,
    itemsType: 'filter-with-tags',
  },
};

export const ItemsTypeMatrix: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {ITEMS_TYPES.map((itemsType) => (
        <div key={itemsType} style={storyMatrixItemRowStartStyle}>
          <p style={variantLabelStyle}>{itemsType}</p>
          <TableToolbar
            itemsType={itemsType}
            showTitle={itemsType === 'filter-with-tags'}
            showNotification={false}
          />
        </div>
      ))}
    </div>
  ),
};
