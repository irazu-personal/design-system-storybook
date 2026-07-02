import type { Meta, StoryObj } from '@storybook/react';
import { sizeLabelStyle, storyMatrixItemRowStyle, storyMatrixSectionStyle } from '../Input/shared/storyHelpers';
import { Checkbox, type CheckboxStatus, type CheckboxVisualState } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['inactive', 'active', 'indeterminate'],
    },
    visualState: {
      control: 'select',
      options: ['default', 'hover', 'pressed'],
    },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Checkbox',
    status: 'active',
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Spark Checkbox — supports Inactive, Active, and Indeterminate statuses across Default, Hover, Pressed, and Disabled states. Use for multi-select choices; for single-choice selection use Radio.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

const STATUSES: CheckboxStatus[] = ['active', 'inactive', 'indeterminate'];
const VISUAL_STATES: CheckboxVisualState[] = ['default', 'hover', 'pressed'];

export const Default: Story = {};

export const Statuses: Story = {
  render: () => (
    <div className="story-row">
      {STATUSES.map((status) => (
        <Checkbox key={status} status={status} label="Checkbox" />
      ))}
    </div>
  ),
};

export const StateMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'State matrix from Figma component: rows are interaction states, columns are checkbox statuses.',
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
              <Checkbox key={`${visualState}-${status}`} status={status} visualState={visualState} label="Checkbox" />
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
        <Checkbox key={status} status={status} disabled label="Checkbox" />
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
  render: () => <Checkbox showFocus status="active" label="Checkbox" />,
};

export const WithoutLabel: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Standalone checkbox item variant used in dense matrix layouts.',
      },
    },
  },
  render: () => (
    <div className="story-row">
      {STATUSES.map((status) => (
        <Checkbox key={status} status={status} aria-label={`Checkbox ${status}`} label="" />
      ))}
    </div>
  ),
};
