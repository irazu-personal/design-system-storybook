import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyMatrixFieldWrapStyle,
  storyMatrixItemRowStartStyle,
  storyMatrixSectionStyle,
  variantLabelStyle,
} from '../Input/shared/storyHelpers';
import { FEEDBACK_TYPES } from '../shared/feedbackHelpers';
import { AlertBanner, type AlertBannerButtonType } from './AlertBanner';

const meta: Meta<typeof AlertBanner> = {
  title: 'Components/Alert Banner',
  component: AlertBanner,
  tags: ['autodocs'],
  argTypes: {
    feedback: { control: 'select', options: FEEDBACK_TYPES },
    buttonType: { control: 'select', options: ['default', 'text'] satisfies AlertBannerButtonType[] },
    showIcon: { control: 'boolean' },
    showButton: { control: 'boolean' },
    showCloseButton: { control: 'boolean' },
  },
  args: {
    text: '{Project Name} was added to your Projects',
    feedback: 'success',
    buttonType: 'default',
    showIcon: true,
    showButton: true,
    showCloseButton: true,
    buttonLabel: 'Button',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Alert banners display important, task-related information or system updates at the top of the interface. Offer only one action per banner.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AlertBanner>;

export const Default: Story = {};

export const TextButton: Story = {
  args: {
    buttonType: 'text',
  },
};

export const MessageOnly: Story = {
  args: {
    showIcon: false,
    showButton: false,
    showCloseButton: false,
  },
};

export const FeedbackMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Feedback type matrix from Figma — success, warning, info, and error with icon, CTA, and close.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {FEEDBACK_TYPES.map((feedback) => (
        <div key={feedback} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{feedback}</p>
          <div style={{ ...storyMatrixFieldWrapStyle, maxWidth: '944px', width: '100%' }}>
            <AlertBanner feedback={feedback} />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const ButtonTypeMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default pill CTA vs lower-emphasis text link action.',
      },
    },
  },
  render: () => {
    const buttonTypes: AlertBannerButtonType[] = ['default', 'text'];
    return (
      <div style={storyMatrixSectionStyle}>
        {buttonTypes.map((buttonType) => (
          <div key={buttonType} style={storyMatrixItemRowStartStyle}>
            <p style={variantLabelStyle}>{buttonType}</p>
            <div style={{ ...storyMatrixFieldWrapStyle, maxWidth: '944px', width: '100%' }}>
              <AlertBanner buttonType={buttonType} />
            </div>
          </div>
        ))}
      </div>
    );
  },
};

export const OptionalElements: Story = {
  parameters: {
    docs: {
      description: {
        story: 'All optional elements on vs message text only.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>All on</p>
        <div style={{ ...storyMatrixFieldWrapStyle, maxWidth: '944px', width: '100%' }}>
          <AlertBanner />
        </div>
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>All off</p>
        <div style={{ ...storyMatrixFieldWrapStyle, maxWidth: '944px', width: '100%' }}>
          <AlertBanner showIcon={false} showButton={false} showCloseButton={false} />
        </div>
      </div>
    </div>
  ),
};
