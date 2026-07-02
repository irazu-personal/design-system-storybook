import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { sizeLabelStyle, storyMatrixItemRowStyle, storyMatrixSectionStyle } from '../Input/shared/storyHelpers';
import { Radio, type RadioStatus, type RadioVisualState } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['inactive', 'active'],
    },
    visualState: {
      control: 'select',
      options: ['default', 'hover', 'pressed'],
    },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Radio button',
    status: 'active',
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Spark Radio Button — supports Inactive and Active statuses across Default, Hover, Pressed, and Disabled states. Use for single-choice selection from a list.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

const STATUSES: RadioStatus[] = ['inactive', 'active'];
const VISUAL_STATES: RadioVisualState[] = ['default', 'hover', 'pressed'];

export const Default: Story = {};

export const Statuses: Story = {
  render: () => (
    <div className="story-row">
      {STATUSES.map((status) => (
        <Radio key={status} status={status} label="Radio button" />
      ))}
    </div>
  ),
};

export const StateMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'State matrix from Figma component: rows are interaction states, columns are checked statuses. Active has no hover/pressed variants in Figma.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {VISUAL_STATES.map((visualState) => (
        <div key={visualState} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{visualState}</p>
          <div className="story-row">
            {STATUSES.map((status) => (
              <Radio
                key={`${visualState}-${status}`}
                status={status}
                visualState={status === 'active' && visualState !== 'default' ? 'default' : visualState}
                label="Radio button"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="story-row">
      {STATUSES.map((status) => (
        <Radio key={status} status={status} disabled label="Radio button" />
      ))}
    </div>
  ),
};

export const Focused: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Keyboard focus style preview.',
      },
    },
  },
  render: () => <Radio showFocus status="active" label="Radio button" />,
};

export const WithoutLabel: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Standalone radio item variant used in dense matrix layouts.',
      },
    },
  },
  render: () => (
    <div className="story-row">
      {STATUSES.map((status) => (
        <Radio key={status} status={status} aria-label={`Radio button ${status}`} label="" />
      ))}
    </div>
  ),
};

export const RadioGroup: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Interactive radio group — only one option can be selected at a time.',
      },
    },
  },
  render: function RadioGroupStory() {
    const [selected, setSelected] = useState('option-a');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <Radio
          name="spark-radio-group-demo"
          value="option-a"
          status={selected === 'option-a' ? 'active' : 'inactive'}
          label="Option A"
          onChange={() => setSelected('option-a')}
        />
        <Radio
          name="spark-radio-group-demo"
          value="option-b"
          status={selected === 'option-b' ? 'active' : 'inactive'}
          label="Option B"
          onChange={() => setSelected('option-b')}
        />
        <Radio
          name="spark-radio-group-demo"
          value="option-c"
          status={selected === 'option-c' ? 'active' : 'inactive'}
          label="Option C"
          onChange={() => setSelected('option-c')}
        />
      </div>
    );
  },
};
