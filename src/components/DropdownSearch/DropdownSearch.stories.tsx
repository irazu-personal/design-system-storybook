import type { Meta, StoryObj } from '@storybook/react';
import { DropdownSearch } from './DropdownSearch';

const meta: Meta<typeof DropdownSearch> = {
  title: 'Components/Dropdown/Search',
  component: DropdownSearch,
  tags: ['autodocs'],
  args: {
    showFooter: true,
    showInfoIcon: false,
    showPrefixIcon: false,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Dropdown with built-in search field, item list, and optional footer (Tertiary Clear + Secondary Apply). Item prefix and info icons are optional.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownSearch>;

export const Default: Story = {};

export const WithoutFooter: Story = {
  args: { showFooter: false },
};

export const IconsOff: Story = {
  args: {
    showInfoIcon: false,
    items: Array.from({ length: 4 }, () => ({ label: 'Dropdown item text', showInfoIcon: false })),
  },
};
