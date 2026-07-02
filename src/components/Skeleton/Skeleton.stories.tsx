import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton, SkeletonCard, SkeletonText, type SkeletonShapeType } from './Skeleton';
import { sizeLabelStyle, storyMatrixItemRowStyle, storyMatrixSectionStyle } from '../Input/shared/storyHelpers';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    shapeType: {
      control: 'select',
      options: ['circle', 'rectangle', 'h1', 'h2', 'paragraph'],
    },
  },
  args: {
    shapeType: 'paragraph',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Spark Skeleton — loading placeholders with shimmer animation. Use shapes to mimic avatars, images, headings, and text blocks.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

const SHAPES: SkeletonShapeType[] = ['circle', 'rectangle', 'h1', 'h2', 'paragraph'];

export const Default: Story = {};

export const Shapes: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {SHAPES.map((shapeType) => (
        <div key={shapeType} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{shapeType}</p>
          <Skeleton shapeType={shapeType} />
        </div>
      ))}
    </div>
  ),
};

export const SkeletonTextPreset: Story = {
  render: () => <SkeletonText />,
};

export const SkeletonCardPreset: Story = {
  render: () => <SkeletonCard />,
};
