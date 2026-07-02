import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { sizeLabelStyle, storyMatrixItemRowStartStyle, storyMatrixItemRowStyle, storyMatrixSectionStyle } from '../Input/shared/storyHelpers';
import { Tab, Tabs, type TabPosition, type TabSize } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    items: {
      description:
        'Array of tab definitions (`{ id, label, disabled? }`). Add as many items as needed — each object renders one tab.',
      control: false,
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
      description: 'Tab height and padding — **large** (56px), **medium** (48px), **small** (40px).',
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description:
        'Active indicator edge — **top** (underline), **bottom** (overline), **left** (right border), **right** (left border).',
    },
    showIcon: { control: 'boolean' },
  },
  args: {
    size: 'medium',
    position: 'top',
    showIcon: false,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Spark Tabs — supports Top, Bottom, Left, and Right positions across Large, Medium, and Small sizes. Active tabs use a 2px brand indicator and semibold label. Pass any number of entries in the `items` array to add tabs.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const SAMPLE_ITEMS = [
  { id: 'tab-1', label: 'Tab title' },
  { id: 'tab-2', label: 'Tab title' },
  { id: 'tab-3', label: 'Tab title' },
];

const SIZES: TabSize[] = ['large', 'medium', 'small'];
const POSITIONS: TabPosition[] = ['top', 'bottom', 'left', 'right'];

export const Default: Story = {
  args: {
    items: SAMPLE_ITEMS,
    activeId: 'tab-1',
  },
};

export const Interactive: Story = {
  render: () => {
    const [activeId, setActiveId] = useState('tab-1');
    return (
      <Tabs items={SAMPLE_ITEMS} activeId={activeId} onChange={setActiveId} />
    );
  },
};

export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story: '**large** (56px), **medium** (48px), and **small** (40px) tab heights.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {SIZES.map((size) => (
        <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <Tabs items={SAMPLE_ITEMS} activeId="tab-1" size={size} />
        </div>
      ))}
    </div>
  ),
};

export const Positions: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '**top** (underline), **bottom** (overline), **left** (right border), and **right** (left border) indicator positions.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {POSITIONS.map((position) => (
        <div key={position} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{position}</p>
          <Tabs items={SAMPLE_ITEMS} activeId="tab-1" position={position} />
        </div>
      ))}
    </div>
  ),
};

export const WithIcons: Story = {
  args: {
    items: SAMPLE_ITEMS,
    activeId: 'tab-1',
    showIcon: true,
  },
};

export const TabStates: Story = {
  render: () => (
    <div className="story-row">
      <Tab label="Tab title" active />
      <Tab label="Tab title" />
      <Tab label="Tab title" visualState="hover" />
      <Tab label="Tab title" visualState="disabled" />
    </div>
  ),
};

const TAB_STATES = [
  { name: 'active', tab: <Tab label="Tab title" active showIcon /> },
  { name: 'default', tab: <Tab label="Tab title" showIcon /> },
  { name: 'hover', tab: <Tab label="Tab title" visualState="hover" showIcon /> },
  { name: 'disabled', tab: <Tab label="Tab title" visualState="disabled" showIcon /> },
] as const;

export const StateMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Per-tab state matrix from Figma: Active, Default, Hover, and Disabled.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {TAB_STATES.map(({ name, tab }) => (
        <div key={name} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{name}</p>
          {tab}
        </div>
      ))}
    </div>
  ),
};
