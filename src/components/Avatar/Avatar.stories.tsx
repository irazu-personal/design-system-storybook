import type { Meta, StoryObj } from '@storybook/react';
import { sizeLabelStyle, storyMatrixItemRowStyle, storyMatrixSectionStyle } from '../Input/shared/storyHelpers';
import { Avatar, type AvatarSize, type AvatarType } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    type: { control: 'select', options: ['image', 'initials'] },
    showContent: { control: 'boolean' },
  },
  args: {
    size: 'medium',
    type: 'initials',
    primaryText: 'Name',
    secondaryText: 'More details',
    showContent: false,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Spark Avatar — image or initials in **small** (24px), **medium** (32px), and **large** (48px). Optional name and details beside the visual.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

const SIZES: AvatarSize[] = ['small', 'medium', 'large'];
const TYPES: AvatarType[] = ['image', 'initials'];

export const Default: Story = {};

export const WithContent: Story = {
  args: {
    showContent: true,
  },
};

export const SizeTypeMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Size × type matrix from Figma — image and initials at each size.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {SIZES.map((size) => (
        <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <div className="story-row">
            {TYPES.map((type) => (
              <Avatar key={type} size={size} type={type} />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const ContentBySize: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {SIZES.map((size) => (
        <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <Avatar size={size} type="image" showContent />
        </div>
      ))}
    </div>
  ),
};
