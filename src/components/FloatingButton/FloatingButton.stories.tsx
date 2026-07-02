import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyMatrixItemRowStyle,
  storyMatrixSectionStyle,
} from '../Input/shared/storyHelpers';
import {
  FloatingButton,
  type FloatingButtonVisualState,
} from './FloatingButton';

const meta: Meta<typeof FloatingButton> = {
  title: 'Components/Floating Button',
  component: FloatingButton,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    showIconLeft: { control: 'boolean' },
    showIconRight: { control: 'boolean' },
    showFocus: { control: 'boolean' },
    visualState: {
      control: 'select',
      options: ['default', 'hover', 'click-on', 'disabled'],
    },
    disabled: { control: 'boolean' },
  },
  args: {
    text: 'Button',
    showIconLeft: true,
    showIconRight: false,
    showFocus: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Spark Floating Button (`6958:67191`) — elevated pill control for contextual actions pinned above page content (for example, “Test in Playground”). Uses drawer icon-button shadow, detail typography, optional left game icon and right chevron. Use sentence-case labels only.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FloatingButton>;

const INTERACTION_STATES: FloatingButtonVisualState[] = [
  'default',
  'hover',
  'click-on',
  'disabled',
];

const stateColumnStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1rem',
};

export const Default: Story = {};

export const InteractionStates: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Figma interaction matrix — Default, Hover, Pressed (Click-on), and Disabled. Static `visualState` mirrors documentation previews.',
      },
    },
  },
  render: () => (
    <div className="story-row" style={{ alignItems: 'flex-start', gap: '2rem' }}>
      {INTERACTION_STATES.map((state) => (
        <div key={state} style={stateColumnStyle}>
          <p style={sizeLabelStyle}>{state === 'click-on' ? 'Pressed' : state}</p>
          <FloatingButton
            visualState={state}
            disabled={state === 'disabled'}
          />
        </div>
      ))}
    </div>
  ),
};

export const WithIcon: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Icon label — buttons may contain an icon on the left or right side to add context to the action.',
      },
    },
  },
  render: () => <FloatingButton text="Add item" showIconLeft showIconRight={false} />,
};

export const WithEndIcon: Story = {
  render: () => (
    <FloatingButton text="Button" showIconLeft showIconRight />
  ),
};

export const Focus: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Show a highly visible, high-contrast focus ring around the button when a user navigates to it via keyboard.',
      },
    },
  },
  render: () => <FloatingButton showFocus />,
};

export const LabelGuidance: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use sentence-case capitalization. Do not use title case or all caps.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>Do</p>
        <FloatingButton text="Get started" />
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>Don&apos;t</p>
        <div className="story-row">
          <FloatingButton text="Get Started" visualState="default" />
          <FloatingButton text="GET STARTED" visualState="default" />
        </div>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => <FloatingButton disabled />,
};
