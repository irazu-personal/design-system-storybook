import type { Meta, StoryObj } from '@storybook/react';
import {
  storyMatrixItemRowStyle,
  storyMatrixSectionStyle,
  variantLabelStyle,
} from '../Input/shared/storyHelpers';
import { TableTitleCell, type TableTitleCellBorders, type TableTitleCellType } from './TableTitleCell';

const TITLE_CELL_TYPES: TableTitleCellType[] = [
  'space',
  'primary',
  'sort-up',
  'sort-down',
  'checkbox',
  'chevron',
  'input-dropdown',
];

const TITLE_CELL_BORDERS: TableTitleCellBorders[] = ['default', 'right'];

const meta: Meta<typeof TableTitleCell> = {
  title: 'Components/Table/Title Cell',
  component: TableTitleCell,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: TITLE_CELL_TYPES },
    borders: { control: 'select', options: TITLE_CELL_BORDERS },
    infoIcon: { control: 'boolean' },
    sortIcon: { control: 'boolean' },
    title: { control: 'text' },
    dropdownText: { control: 'text' },
  },
  args: {
    type: 'primary',
    borders: 'default',
    title: 'TITLE',
    infoIcon: false,
    sortIcon: false,
  },
};

export default meta;
type Story = StoryObj<typeof TableTitleCell>;

export const Matrix: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {TITLE_CELL_BORDERS.map((borders) => (
        <div key={borders} style={storyMatrixSectionStyle}>
          <p style={variantLabelStyle}>borders: {borders}</p>
          {TITLE_CELL_TYPES.map((type) => (
            <div key={`${borders}-${type}`} style={storyMatrixItemRowStyle}>
              <p style={variantLabelStyle}>{type}</p>
              <div style={{ flex: '1 1 360px', maxWidth: 400 }}>
                <TableTitleCell type={type} borders={borders} infoIcon={false} sortIcon={false} />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
};

export const Primary: Story = {};
