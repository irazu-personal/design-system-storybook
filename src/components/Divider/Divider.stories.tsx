import type { Meta, StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';
import {
  storyMatrixFieldWrapStyle,
  storyMatrixItemRowStartStyle,
  storyMatrixSectionStyle,
  storyMatrixVariantExampleWrapStyle,
  variantLabelStyle,
} from '../Input/shared/storyHelpers';
import { Divider, type DividerBg, type DividerDirection } from './Divider';

function DividerStorySurface({
  bg,
  inline = false,
  children,
}: {
  bg: DividerBg;
  inline?: boolean;
  children: ReactNode;
}) {
  const surfaceClasses = [
    'spark-divider-story-surface',
    `spark-divider-story-surface-${bg}`,
    inline ? 'spark-divider-story-surface-inline' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={surfaceClasses}>{children}</div>;
}

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'select', options: ['horizontal', 'vertical'] },
    bg: { control: 'select', options: ['on-light', 'on-dark'] },
  },
  args: {
    direction: 'horizontal',
    bg: 'on-light',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Spark Divider — 1px separator for grouping related content. **horizontal** or **vertical** direction; **on-light** or **on-dark** surface.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

const VARIANTS: { direction: DividerDirection; bg: DividerBg; label: string }[] = [
  { direction: 'horizontal', bg: 'on-light', label: 'Horizontal on light' },
  { direction: 'vertical', bg: 'on-light', label: 'Vertical on light' },
  { direction: 'horizontal', bg: 'on-dark', label: 'Horizontal on dark' },
  { direction: 'vertical', bg: 'on-dark', label: 'Vertical on dark' },
];

function DividerPreview({
  direction,
  bg,
}: {
  direction: DividerDirection;
  bg: DividerBg;
}) {
  if (direction === 'vertical') {
    return (
      <div className="spark-divider-preview spark-divider-preview-vertical">
        <Divider direction="vertical" bg={bg} />
      </div>
    );
  }

  return (
    <div className="spark-divider-preview spark-divider-preview-horizontal" style={storyMatrixFieldWrapStyle}>
      <Divider direction="horizontal" bg={bg} />
    </div>
  );
}

export const Default: Story = {
  render: (args) => (
    <DividerStorySurface bg={args.bg ?? 'on-light'}>
      <DividerPreview direction={args.direction ?? 'horizontal'} bg={args.bg ?? 'on-light'} />
    </DividerStorySurface>
  ),
};

export const VariantMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Figma `235:6021` — direction × background surface combinations.',
      },
    },
  },
  render: () => (
    <div style={{ ...storyMatrixSectionStyle, padding: '1.5rem' }}>
      {VARIANTS.map(({ direction, bg, label }) => (
        <div key={label} style={storyMatrixItemRowStartStyle}>
          <p style={variantLabelStyle}>{label}</p>
          <div style={storyMatrixVariantExampleWrapStyle}>
            <DividerStorySurface bg={bg} inline>
              <DividerPreview direction={direction} bg={bg} />
            </DividerStorySurface>
          </div>
        </div>
      ))}
    </div>
  ),
};

export const InList: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Horizontal dividers between stacked list items.',
      },
    },
  },
  render: () => (
    <DividerStorySurface bg="on-light">
      <div className="spark-divider-list-demo">
        <p>Projects</p>
        <Divider />
        <p>Datasets</p>
        <Divider />
        <p>Models</p>
      </div>
    </DividerStorySurface>
  ),
};
