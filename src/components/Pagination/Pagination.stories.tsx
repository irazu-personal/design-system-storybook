import type { Meta, StoryObj } from '@storybook/react';
import { sizeLabelStyle, storyMatrixItemRowStyle, storyMatrixSectionStyle } from '../Input/shared/storyHelpers';
import { Pagination, PaginationViewMore, type PaginationType } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['basic', 'prev-and-next', 'total-items'] },
    currentPage: { control: { type: 'number', min: 1 } },
    totalPages: { control: { type: 'number', min: 1 } },
  },
  args: {
    type: 'basic',
    currentPage: 1,
    totalPages: 9,
    totalItems: 296,
    pageSize: 10,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Spark Pagination — **basic** numbered pages, **prev-and-next** with page numbers, and **total-items** with range summary and page-size selector. Includes **View More** for incremental loading.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

const TYPES: PaginationType[] = ['basic', 'prev-and-next', 'total-items'];

export const Default: Story = {};

export const TypeMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Figma `778:67625` — basic, prev-and-next, and total-items layouts.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {TYPES.map((type) => (
        <div key={type} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{type}</p>
          <Pagination type={type} currentPage={1} />
        </div>
      ))}
    </div>
  ),
};

export const ActivePage: Story = {
  args: {
    currentPage: 3,
  },
};

export const ViewMore: Story = {
  render: () => <PaginationViewMore />,
  parameters: {
    docs: {
      description: {
        story: 'Figma `779:67870` — horizontal summary with View More and scroll-up icon button.',
      },
    },
  },
};
