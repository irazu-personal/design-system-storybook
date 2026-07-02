import type { Meta, StoryObj } from '@storybook/react';
import { DropdownSlot } from './DropdownSlot';

const meta: Meta<typeof DropdownSlot> = {
  title: 'Components/Dropdown/Slot',
  component: DropdownSlot,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Flexible dropdown panel with a blank slot area for custom layout injections (Figma Dropdown Slot).',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownSlot>;

export const Default: Story = {};

export const WithCustomContent: Story = {
  render: () => (
    <DropdownSlot>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          color: 'var(--semantic-content-secondary)',
          fontSize: 'var(--typography-font-size-base)',
        }}
      >
        Custom slot content
      </div>
    </DropdownSlot>
  ),
};
