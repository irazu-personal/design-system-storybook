import type { Meta, StoryObj } from '@storybook/react';
import { sizeLabelStyle, storyMatrixItemRowStyle, storyMatrixSectionStyle } from '../Input/shared/storyHelpers';
import { Toggle, type ToggleSize, type ToggleVisualState } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['medium', 'small'],
    },
    visualState: {
      control: 'select',
      options: ['default', 'pressed'],
    },
    active: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    active: true,
    size: 'medium',
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Spark Toggle (Switch) — instant on/off control with Medium and Small sizes. Supports Default, Pressed, and Disabled states. Use for settings that apply immediately.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

const SIZES: ToggleSize[] = ['medium', 'small'];
const VISUAL_STATES: ToggleVisualState[] = ['default', 'pressed'];

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="story-row">
      {SIZES.map((size) => (
        <Toggle key={size} size={size} active />
      ))}
    </div>
  ),
};

export const ActiveStates: Story = {
  render: () => (
    <div className="story-row">
      <Toggle active />
      <Toggle active={false} />
    </div>
  ),
};

export const AllSizes: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Medium and Small sizes in on and off states.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {SIZES.map((size) => (
        <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <div className="story-row">
            <Toggle size={size} active />
            <Toggle size={size} active={false} />
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
        story: 'Medium size state matrix from Figma: rows are interaction states, columns are active on/off.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {(['default', 'pressed', 'disabled'] as const).map((row) => (
        <div key={row} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{row === 'pressed' ? 'Click-on' : row}</p>
          <div className="story-row">
            <Toggle
              size="medium"
              active
              disabled={row === 'disabled'}
              visualState={row === 'pressed' ? 'pressed' : 'default'}
            />
            <Toggle
              size="medium"
              active={false}
              disabled={row === 'disabled'}
              visualState={row === 'pressed' ? 'pressed' : 'default'}
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
        story: 'Full matrix across both sizes and pressed/default states.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {SIZES.flatMap((size) =>
        VISUAL_STATES.map((visualState) => (
          <div key={`${size}-${visualState}`} style={storyMatrixItemRowStyle}>
            <p style={sizeLabelStyle}>{`${size} / ${visualState}`}</p>
            <div className="story-row">
              <Toggle size={size} active visualState={visualState} />
              <Toggle size={size} active={false} visualState={visualState} />
            </div>
          </div>
        )),
      )}
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="story-row">
      <Toggle active disabled />
      <Toggle active={false} disabled />
      <Toggle size="small" active disabled />
      <Toggle size="small" active={false} disabled />
    </div>
  ),
};

export const WithLabel: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Toggle with an adjacent label — toggle first, label after (per Figma documentation).',
      },
    },
  },
  args: {
    label: 'Dark mode',
    active: true,
  },
};

export const Focused: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Keyboard focus style preview.',
      },
    },
  },
  render: () => <Toggle showFocus active />,
};
