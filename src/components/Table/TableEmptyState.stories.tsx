import type { Meta, StoryObj } from '@storybook/react';
import { TableEmptyState } from './TableEmptyState';

const meta: Meta<typeof TableEmptyState> = {
  title: 'Components/Table/Table Empty State',
  component: TableEmptyState,
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
type Story = StoryObj<typeof TableEmptyState>;

export const Default: Story = {};
