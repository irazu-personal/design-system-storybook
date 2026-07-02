import type { Meta, StoryObj } from '@storybook/react';
import { sizeLabelStyle, storyMatrixItemRowStyle, storyMatrixSectionStyle } from '../Input/shared/storyHelpers';
import { EmptyState, type EmptyStateDirection, type EmptyStateSize } from './EmptyState';

const meta: Meta<typeof EmptyState> = {
  title: 'Components/Empty State',
  component: EmptyState,
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'select', options: ['vertical', 'horizontal'] },
    size: { control: 'select', options: ['medium', 'small'] },
    showSubtitle: { control: 'boolean' },
    showMainButton: { control: 'boolean' },
  },
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
    direction: 'vertical',
    size: 'medium',
    showSubtitle: true,
    showMainButton: false,
    ctaLabel: 'CTA',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Spark Empty State — explains when no data or content is available. Supports vertical and horizontal layouts with optional subtitle and CTA.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

const DIRECTIONS: EmptyStateDirection[] = ['vertical', 'horizontal'];
const SIZES: EmptyStateSize[] = ['medium', 'small'];

export const Default: Story = {};

export const WithCta: Story = {
  args: {
    showMainButton: true,
  },
};

export const TitleOnly: Story = {
  args: {
    showSubtitle: false,
    showMainButton: false,
  },
};

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
    showMainButton: true,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    showMainButton: true,
  },
};

export const Variants: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Direction × size matrix from Figma — **medium** and **small** for **vertical** and **horizontal** layouts.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {DIRECTIONS.map((direction) => (
        <div key={direction} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{direction}</p>
          <div className="story-row">
            {SIZES.map((size) => (
              <EmptyState
                key={size}
                title="Title"
                subtitle="Subtitle"
                direction={direction}
                size={size}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
