import type { Meta, StoryObj } from '@storybook/react';
import { TableSkeleton } from './TableSkeleton';

const meta: Meta<typeof TableSkeleton> = {
  title: 'Components/Table/Table Skeleton',
  component: TableSkeleton,
  tags: ['autodocs'],
  args: {
    showMasterRow: false,
    showNotification: false,
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
type Story = StoryObj<typeof TableSkeleton>;

export const Default: Story = {};
