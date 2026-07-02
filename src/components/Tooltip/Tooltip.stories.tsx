import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button/Button';
import { Tooltip, type TooltipTipDirection } from './Tooltip';
import { TooltipTrigger } from './TooltipTrigger';
import { sizeLabelStyle, storyMatrixItemRowStyle, storyMatrixSectionStyle } from '../Input/shared/storyHelpers';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['text', 'slot'] },
    tipDirection: {
      control: 'select',
      options: [
        'no-tip',
        'top-center',
        'top-left',
        'top-right',
        'bottom-center',
        'bottom-left',
        'bottom-right',
        'left-center',
        'right-center',
      ],
    },
    children: { control: false },
  },
  args: {
    type: 'text',
    tipDirection: 'no-tip',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Spark Tooltip — contextual information on hover or focus. Supports text and slot content with optional directional tips. Use `TooltipTrigger` for icon-only controls (4px gap via `--dimension-spacing-04`).',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

const TIP_DIRECTIONS: TooltipTipDirection[] = [
  'no-tip',
  'top-center',
  'top-left',
  'top-right',
  'bottom-center',
  'bottom-left',
  'bottom-right',
  'left-center',
  'right-center',
];

const SLOT_DEMO = (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      minHeight: 48,
      background: 'rgba(255, 255, 255, 0.12)',
      borderRadius: 'var(--dimension-border-radius-04)',
      color: 'var(--semantic-content-inverse)',
      fontSize: 'var(--typography-font-size-base)',
      lineHeight: 'var(--typography-line-height-base)',
    }}
  >
    Slot
  </div>
);

export const Default: Story = {};

export const WithTip: Story = {
  args: {
    tipDirection: 'top-center',
  },
};

export const SlotType: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Slot type renders custom children instead of the text prop.',
      },
    },
  },
  render: () => <Tooltip type="slot">{SLOT_DEMO}</Tooltip>,
};

export const TipDirections: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {TIP_DIRECTIONS.filter((d) => d !== 'no-tip').map((tipDirection) => (
        <div key={tipDirection} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{tipDirection}</p>
          <Tooltip tipDirection={tipDirection} text="Tooltip text" />
        </div>
      ))}
    </div>
  ),
};

export const WithTrigger: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'TooltipTrigger wraps a single focusable child and shows the tooltip on hover and focus-within. Gap between trigger and panel is 4px (`--dimension-spacing-04`), excluding the 6px arrow.',
      },
    },
  },
  render: () => (
    <div style={{ padding: '48px 24px' }}>
      <TooltipTrigger text="More actions">
        <Button variant="ghost" aria-label="More actions" iconSlug="dots" />
      </TooltipTrigger>
    </div>
  ),
};
