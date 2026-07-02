import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown, type DropdownType } from './Dropdown';
import { sizeLabelStyle, storyMatrixItemRowStartStyle, storyMatrixSectionStyle } from '../Input/shared/storyHelpers';

const DEFAULT_ITEMS = Array.from({ length: 4 }, () => ({ label: 'Dropdown item text' }));

const STATE_MATRIX_ITEMS = [
  { label: 'Dropdown item text', visualState: 'default' as const },
  { label: 'Dropdown item text', visualState: 'hover' as const },
  { label: 'Dropdown item text', visualState: 'selected' as const },
  { label: 'Dropdown item text', visualState: 'disabled' as const },
];

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['regular', 'checkbox'] },
    showTitle: { control: 'boolean' },
    showFooter: { control: 'boolean' },
    showPrefixIcon: { control: 'boolean', description: 'Optional prefix icon on each item.' },
    showInfoIcon: { control: 'boolean', description: 'Optional info icon on each item.' },
    items: { control: false },
  },
  args: {
    type: 'regular',
    showTitle: false,
    showFooter: true,
    showPrefixIcon: false,
    showInfoIcon: false,
    items: DEFAULT_ITEMS,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Spark Dropdown — regular and checkbox item types with optional title and footer (Tertiary Clear + Secondary Apply). Prefix and info icons are optional boolean props, off by default.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const TYPES: DropdownType[] = ['regular', 'checkbox'];

export const Default: Story = {};

export const WithoutFooter: Story = {
  args: { showFooter: false },
};

export const WithIcons: Story = {
  args: {
    showPrefixIcon: true,
    showInfoIcon: true,
  },
};

export const Scrollable: Story = {
  args: {
    showFooter: false,
    items: Array.from({ length: 6 }, (_, index) => ({
      label: `Dropdown item ${index + 1}`,
    })),
  },
  parameters: {
    docs: {
      description: {
        story: 'Scroll bar appears when there are more than 4 items.',
      },
    },
  },
};

export const ItemStates: Story = {
  args: {
    items: STATE_MATRIX_ITEMS,
  },
};

export const Types: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {TYPES.map((type) => (
        <div key={type} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{type}</p>
          <Dropdown type={type} items={DEFAULT_ITEMS} showFooter />
        </div>
      ))}
    </div>
  ),
};
