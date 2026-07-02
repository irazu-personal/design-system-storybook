import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyMatrixFieldWrapStyle,
  storyMatrixItemRowStartStyle,
  storyMatrixSectionStyle,
  variantLabelStyle,
} from '../Input/shared/storyHelpers';
import { NOTIFICATION_FEEDBACK_TYPES } from '../shared/feedbackHelpers';
import { Notification } from './Notification';

const meta: Meta<typeof Notification> = {
  title: 'Components/Notification',
  component: Notification,
  tags: ['autodocs'],
  argTypes: {
    feedback: { control: 'select', options: NOTIFICATION_FEEDBACK_TYPES },
    wide: { control: 'boolean' },
    elevated: { control: 'boolean' },
    showIcon: { control: 'boolean' },
    showContent: { control: 'boolean' },
    showButton: { control: 'boolean' },
    showCloseButton: { control: 'boolean' },
  },
  args: {
    title: 'Notification title',
    content: 'Interactively monetize corporate alignments and fully tested niche markets.',
    feedback: 'success',
    wide: false,
    elevated: true,
    showIcon: true,
    showContent: true,
    showButton: true,
    showCloseButton: true,
    actionLabel: 'Undo',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Floating notifications show important messages, updates, or feedback. Use only one notification on a screen at a time.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Default: Story = {};

export const Flat: Story = {
  args: {
    elevated: false,
  },
};

export const Wide: Story = {
  args: {
    wide: true,
  },
  decorators: [
    (StoryComponent) => (
      <div style={{ width: '100%', maxWidth: '1071px' }}>
        <StoryComponent />
      </div>
    ),
  ],
};

export const TitleOnly: Story = {
  args: {
    showContent: false,
  },
};

export const Neutral: Story = {
  args: {
    feedback: 'neutral',
  },
  parameters: {
    docs: {
      description: {
        story: 'Neutral feedback — sunken surface background and circle-alert status icon per Figma `995:43833`.',
      },
    },
  },
};

export const FeedbackMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Feedback types including neutral — elevated style with icon, title, body, action, and close.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {NOTIFICATION_FEEDBACK_TYPES.map((feedback) => (
        <div key={feedback} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{feedback}</p>
          <div style={{ ...storyMatrixFieldWrapStyle, maxWidth: '465px', width: '100%' }}>
            <Notification feedback={feedback} />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const StyleMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Elevated (shadow) vs flat layout depth.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={variantLabelStyle}>Elevated</p>
        <div style={{ ...storyMatrixFieldWrapStyle, maxWidth: '465px', width: '100%' }}>
          <Notification elevated />
        </div>
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={variantLabelStyle}>Flat</p>
        <div style={{ ...storyMatrixFieldWrapStyle, maxWidth: '465px', width: '100%' }}>
          <Notification elevated={false} />
        </div>
      </div>
    </div>
  ),
};

export const WideMatrix: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>Default</p>
        <div style={{ ...storyMatrixFieldWrapStyle, maxWidth: '465px', width: '100%' }}>
          <Notification />
        </div>
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>Wide</p>
        <div style={{ width: '100%', maxWidth: '1071px' }}>
          <Notification wide />
        </div>
      </div>
    </div>
  ),
};
