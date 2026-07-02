import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyMatrixItemRowStyle,
  storyMatrixSectionStyle,
} from '../Input/shared/storyHelpers';
import {
  SegmentedControlIcon,
  SegmentedControlIconItem,
  TABLE_VIEW_TOGGLE_ITEMS,
  type SegmentedControlIconItemPosition,
  type SegmentedControlIconSize,
} from './SegmentedControlIcon';

const meta: Meta<typeof SegmentedControlIcon> = {
  title: 'Components/Segmented Control/Icon',
  component: SegmentedControlIcon,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium'] },
  },
  args: {
    items: TABLE_VIEW_TOGGLE_ITEMS,
    activeId: 'list',
    size: 'medium',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Icon-only segmented control for compact view toggles (e.g. grid vs list). **Small** (28px) and **medium** (36px) with 6px corner radius and 6px icon inset. Each option must have an accessible label; tooltips appear on hover/focus with a 4px overlay gap.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SegmentedControlIcon>;

const SIZES: SegmentedControlIconSize[] = ['small', 'medium'];
const POSITIONS: SegmentedControlIconItemPosition[] = ['first', 'last'];

export const Default: Story = {};

export const Interactive: Story = {
  render: () => {
    const [activeId, setActiveId] = useState('list');
    return (
      <SegmentedControlIcon
        items={TABLE_VIEW_TOGGLE_ITEMS}
        activeId={activeId}
        onChange={setActiveId}
      />
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {SIZES.map((size) => (
        <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <SegmentedControlIcon items={TABLE_VIEW_TOGGLE_ITEMS} activeId="list" size={size} />
        </div>
      ))}
    </div>
  ),
};

export const ActivePosition: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {[
        { label: 'First active', activeId: 'grid' },
        { label: 'Last active', activeId: 'list' },
      ].map(({ label, activeId }) => (
        <div key={label} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{label}</p>
          <SegmentedControlIcon items={TABLE_VIEW_TOGGLE_ITEMS} activeId={activeId} />
        </div>
      ))}
    </div>
  ),
};

export const ItemStates: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Per-item states (medium, first segment) — default, hover, pressed, active, and disabled.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {(
        [
          { label: 'default', active: false, visualState: undefined },
          { label: 'hover', active: false, visualState: 'hover' as const },
          { label: 'pressed', active: false, visualState: 'pressed' as const },
          { label: 'active', active: true, visualState: undefined },
          { label: 'disabled', active: false, visualState: 'disabled' as const },
        ] as const
      ).map(({ label, active, visualState }) => (
        <div key={label} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{label}</p>
          <div className="spark-segmented-control-icon spark-segmented-control-icon-medium">
            <SegmentedControlIconItem
              label="Grid view"
              active={active}
              position="first"
              size="medium"
              iconSlug="table"
              visualState={visualState}
            />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const ItemPositions: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Position × state matrix (medium) — table icon on first, layout-rows on last.',
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
                { label: 'pressed', active: false, visualState: 'pressed' as const },
                { label: 'active', active: true, visualState: undefined },
              ] as const
            ).map(({ label, active, visualState }) => (
              <div
                key={label}
                className="spark-segmented-control-icon spark-segmented-control-icon-medium"
              >
                <SegmentedControlIconItem
                  label={position === 'first' ? 'Grid view' : 'List view'}
                  active={active}
                  position={position}
                  size="medium"
                  iconSlug={position === 'first' ? 'table' : 'layout-rows'}
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
