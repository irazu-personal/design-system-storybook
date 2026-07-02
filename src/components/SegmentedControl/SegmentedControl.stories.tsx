import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyMatrixItemRowStyle,
  storyMatrixSectionStyle,
} from '../Input/shared/storyHelpers';
import {
  SegmentedControl,
  SegmentedControlItem,
  type SegmentedControlItemPosition,
  type SegmentedControlSize,
  type SegmentedControlStyle,
} from './SegmentedControl';

const SAMPLE_ITEMS = [
  { id: 'one', label: 'Text' },
  { id: 'two', label: 'Text' },
  { id: 'three', label: 'Text' },
];

const meta: Meta<typeof SegmentedControl> = {
  title: 'Components/Segmented Control',
  component: SegmentedControl,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    style: { control: 'select', options: ['outlined', 'solid'] },
    fill: { control: 'boolean' },
    showIcon: { control: 'boolean' },
  },
  args: {
    items: SAMPLE_ITEMS,
    activeId: 'one',
    size: 'medium',
    style: 'outlined',
    fill: true,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Spark Segmented Control — mutually exclusive view/mode switcher. **outlined** or **solid** style; **small** (28px), **medium** (36px), **large** (40px). Use for 2–5 side-by-side options.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

const SIZES: SegmentedControlSize[] = ['small', 'medium', 'large'];
const STYLES: SegmentedControlStyle[] = ['outlined', 'solid'];
const POSITIONS: SegmentedControlItemPosition[] = ['first', 'center', 'last'];

export const Default: Story = {};

export const Interactive: Story = {
  render: () => {
    const [activeId, setActiveId] = useState('one');
    return (
      <SegmentedControl items={SAMPLE_ITEMS} activeId={activeId} onChange={setActiveId} fill />
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {SIZES.map((size) => (
        <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <SegmentedControl items={SAMPLE_ITEMS} activeId="one" size={size} fill />
        </div>
      ))}
    </div>
  ),
};

export const Styles: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {STYLES.map((style) => (
        <div key={style} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{style}</p>
          <SegmentedControl items={SAMPLE_ITEMS} activeId="one" style={style} fill />
        </div>
      ))}
    </div>
  ),
};

export const FillTypes: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>off</p>
        <SegmentedControl items={SAMPLE_ITEMS} activeId="one" fill={false} />
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>on</p>
        <SegmentedControl items={SAMPLE_ITEMS} activeId="one" fill />
      </div>
    </div>
  ),
};

export const SizeStyleMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Size × style matrix from Figma — outlined and solid at each size.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {SIZES.map((size) => (
        <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <div className="story-row" style={{ gap: '1rem', flexWrap: 'wrap' }}>
            {STYLES.map((style) => (
              <SegmentedControl
                key={style}
                items={SAMPLE_ITEMS}
                activeId="one"
                size={size}
                style={style}
                fill
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const ItemStates: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Per-item states (outlined, medium, first segment) — default, hover, active, and disabled.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {(
        [
          { label: 'default', active: false, visualState: undefined },
          { label: 'hover', active: false, visualState: 'hover' as const },
          { label: 'active', active: true, visualState: undefined },
          { label: 'disabled', active: false, visualState: 'disabled' as const },
        ] as const
      ).map(({ label, active, visualState }) => (
        <div key={label} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{label}</p>
          <div className="spark-segmented-control spark-segmented-control-medium spark-segmented-control-outlined">
            <SegmentedControlItem
              label="Text"
              active={active}
              position="first"
              size="medium"
              style="outlined"
              showIcon
              visualState={visualState}
            />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const SolidItemStates: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Solid style item states (medium, first segment) with icons — updated hover uses secondary border on white fill.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {(
        [
          { label: 'default', active: false, visualState: undefined },
          { label: 'hover', active: false, visualState: 'hover' as const },
          { label: 'active', active: true, visualState: undefined },
          { label: 'disabled', active: false, visualState: 'disabled' as const },
        ] as const
      ).map(({ label, active, visualState }) => (
        <div key={label} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{label}</p>
          <div className="spark-segmented-control spark-segmented-control-medium spark-segmented-control-solid">
            <SegmentedControlItem
              label="Text"
              active={active}
              position="first"
              size="medium"
              style="solid"
              showIcon
              visualState={visualState}
            />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const WithIcons: Story = {
  args: {
    showIcon: true,
    items: SAMPLE_ITEMS,
    activeId: 'one',
    fill: true,
  },
};

export const ItemPositions: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Position × state (outlined, medium). Hover and active segments get a full box border on all four sides per Figma `183:997`.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {POSITIONS.map((position) => (
        <div key={position} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{position}</p>
          <div className="story-row" style={{ gap: '1rem', flexWrap: 'wrap' }}>
            {(
              [
                { label: 'default', active: false, visualState: undefined },
                { label: 'hover', active: false, visualState: 'hover' as const },
                { label: 'active', active: true, visualState: undefined },
              ] as const
            ).map(({ label, active, visualState }) => (
              <div
                key={label}
                className="spark-segmented-control spark-segmented-control-medium spark-segmented-control-outlined"
              >
                <SegmentedControlItem
                  label="Text"
                  active={active}
                  position={position}
                  size="medium"
                  style="outlined"
                  showIcon
                  visualState={visualState}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
