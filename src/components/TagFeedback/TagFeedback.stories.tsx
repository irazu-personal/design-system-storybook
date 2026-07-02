import type { Meta, StoryObj } from '@storybook/react';
import { TagFeedback, type TagFeedbackVariant } from './TagFeedback';
import { sizeLabelStyle, storyMatrixItemRowStyle, storyMatrixSectionStyle } from '../Input/shared/storyHelpers';

const meta: Meta<typeof TagFeedback> = {
  title: 'Components/Tags/Feedback',
  component: TagFeedback,
  tags: ['autodocs'],
  args: { showIcon: true },
};

export default meta;
type Story = StoryObj<typeof TagFeedback>;

const VARIANTS: TagFeedbackVariant[] = ['default', 'processing', 'success', 'warning', 'error'];

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {VARIANTS.map((variant) => (
        <div key={variant} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{variant}</p>
          <TagFeedback variant={variant} showIcon />
        </div>
      ))}
    </div>
  ),
};
