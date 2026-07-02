import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyMatrixFieldWrapStyle,
  storyMatrixItemRowStartStyle,
  storyMatrixItemRowStyle,
  storyMatrixSectionStyle,
} from '../Input/shared/storyHelpers';
import { Search, type SearchFill, type SearchSize, type SearchState } from './Search';

const DEFAULT_TAGS = ['Tag', 'Tag', 'Tag', 'Tag'];

const meta: Meta<typeof Search> = {
  title: 'Components/Search',
  component: Search,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    fill: { control: 'select', options: ['empty', 'filled'] },
    multiSelect: { control: 'boolean' },
    visualState: {
      control: 'select',
      options: ['default', 'hover', 'click-on', 'disabled'],
    },
  },
  args: {
    size: 'medium',
    placeholder: 'Search',
    multiSelect: false,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Spark Search — keyword filter field with search icon on the right. **small** (28px), **medium** (36px), and **large** (40px). Filled single-select shows the Input Close Button (`231:4472`); multi-select uses **Tag General** default tags.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Search>;

const SIZES: SearchSize[] = ['small', 'medium', 'large'];
const STATES: SearchState[] = ['default', 'hover', 'click-on', 'disabled'];
const FILLS: SearchFill[] = ['empty', 'filled'];

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue: 'Search query',
    fill: 'filled',
  },
};

export const MultiSelect: Story = {
  args: {
    multiSelect: true,
    tags: DEFAULT_TAGS,
    overflowCount: 1,
    fill: 'filled',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {SIZES.map((size) => (
        <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <Search size={size} />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const FillTypes: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {FILLS.map((fill) => (
        <div key={fill} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{fill}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <Search
              fill={fill}
              defaultValue={fill === 'filled' ? 'Search query' : undefined}
            />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const StateMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Interaction states at medium size — default, hover, click-on (focused), and disabled.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {STATES.map((visualState) => (
        <div key={visualState} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{visualState === 'click-on' ? 'click-on' : visualState}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <Search
              defaultValue="Search"
              fill="filled"
              visualState={visualState}
              disabled={visualState === 'disabled'}
              showFocus={visualState === 'click-on'}
            />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const SizeStateMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Size × fill matrix from Figma — plain search and multi-select tags at each size.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {SIZES.map((size) => (
        <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <div className="story-row" style={{ gap: '1rem', flexWrap: 'wrap' }}>
            <Search size={size} fill="empty" />
            <Search size={size} multiSelect tags={DEFAULT_TAGS} overflowCount={1} fill="filled" />
          </div>
        </div>
      ))}
    </div>
  ),
};
