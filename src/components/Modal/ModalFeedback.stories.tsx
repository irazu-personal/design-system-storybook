import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyMatrixItemRowStartStyle,
  storyMatrixSectionStyle,
} from '../Input/shared/storyHelpers';
import { FEEDBACK_TYPES } from '../shared/feedbackHelpers';
import { ModalFeedback } from './ModalFeedback';
import { modalStoryDecorators, modalStoryParameters } from './shared/modalStoryShared';

const meta: Meta<typeof ModalFeedback> = {
  title: 'Components/Modal/Feedback',
  component: ModalFeedback,
  tags: ['autodocs'],
  argTypes: {
    feedbackType: { control: 'select', options: FEEDBACK_TYPES },
    showOverlay: { control: 'boolean' },
    showClose: { control: 'boolean' },
    danger: { control: 'boolean' },
  },
  args: {
    feedbackType: 'info',
    showOverlay: true,
    showClose: true,
    danger: false,
    title: 'Long title',
    content:
      'You are about to save these changes. This will update the shared workspace settings. Are you sure you want to continue?',
  },
  parameters: {
    ...modalStoryParameters,
    docs: {
      ...modalStoryParameters.docs,
      description: {
        component:
          'Feedback modals show a status icon beside the title for info, success, warning, and error alerts. Figma `677:65997`.',
      },
    },
  },
  decorators: modalStoryDecorators,
};

export default meta;
type Story = StoryObj<typeof ModalFeedback>;

export const Default: Story = {};

export const FeedbackMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Feedback type matrix — info, success, warning, and error.',
      },
    },
  },
  render: () => (
    <div style={{ ...storyMatrixSectionStyle, padding: '2rem 0' }}>
      {FEEDBACK_TYPES.map((feedbackType) => (
        <div key={feedbackType} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{feedbackType}</p>
          <ModalFeedback feedbackType={feedbackType} showOverlay />
        </div>
      ))}
    </div>
  ),
};
