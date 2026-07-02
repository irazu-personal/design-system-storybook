import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyMatrixFieldWrapStyle,
  storyMatrixItemRowStartStyle,
  storyMatrixSectionStyle,
  variantLabelStyle,
} from '../Input/shared/storyHelpers';
import { FEEDBACK_TYPES } from '../shared/feedbackHelpers';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    feedbackType: { control: 'select', options: FEEDBACK_TYPES },
    detailed: { control: 'boolean' },
    showButtons: { control: 'boolean' },
    showIconButton: { control: 'boolean' },
  },
  args: {
    title: 'Notification title',
    content: 'Interactively monetize corporate alignments and fully tested niche markets.',
    feedbackType: 'success',
    detailed: false,
    showButtons: true,
    showIconButton: true,
    closeLabel: 'Close',
    actionLabel: 'Action',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Toasts provide brief, temporary feedback about the outcome of a user action. They auto-dismiss after 4–6 seconds and appear non-modally.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {};

export const Detailed: Story = {
  args: {
    detailed: true,
  },
};

export const FeedbackMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Simple toast feedback types with icon, title, and Close action.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {FEEDBACK_TYPES.map((feedbackType) => (
        <div key={feedbackType} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{feedbackType}</p>
          <div style={{ ...storyMatrixFieldWrapStyle, maxWidth: '356px', width: '100%' }}>
            <Toast feedbackType={feedbackType} />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const DetailedMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Detailed toast with title, body, dismiss icon, and footer actions.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {FEEDBACK_TYPES.map((feedbackType) => (
        <div key={feedbackType} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{feedbackType}</p>
          <div style={{ ...storyMatrixFieldWrapStyle, maxWidth: '356px', width: '100%' }}>
            <Toast feedbackType={feedbackType} detailed />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const LayoutMatrix: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={variantLabelStyle}>Simple</p>
        <div style={{ ...storyMatrixFieldWrapStyle, maxWidth: '356px', width: '100%' }}>
          <Toast />
        </div>
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={variantLabelStyle}>Detailed</p>
        <div style={{ ...storyMatrixFieldWrapStyle, maxWidth: '356px', width: '100%' }}>
          <Toast detailed />
        </div>
      </div>
    </div>
  ),
};
