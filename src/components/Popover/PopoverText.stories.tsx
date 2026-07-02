import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyMatrixItemRowStyle,
  storyMatrixSectionStyle,
} from '../Input/shared/storyHelpers';
import { PopoverText } from './PopoverText';
import type { PopoverTipDirection } from './shared/PopoverShell';

const meta: Meta<typeof PopoverText> = {
  title: 'Components/Popover/Text',
  component: PopoverText,
  tags: ['autodocs'],
  argTypes: {
    tipDirection: {
      control: 'select',
      options: ['right', 'left', 'bottom', 'top'] satisfies PopoverTipDirection[],
    },
    tip: { control: 'boolean' },
    header: { control: 'boolean' },
    footer: { control: 'boolean' },
    icon: { control: 'boolean' },
  },
  args: {
    tip: true,
    tipDirection: 'right',
    header: true,
    footer: true,
    icon: true,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Compact informational popover with optional icon header, body copy, and ghost Close action. Figma `652:31199`.',
      },
    },
  },
  decorators: [
    (StoryComponent) => (
      <div
        style={{
          background: 'var(--semantic-surface-canvas)',
          padding: '1.5rem',
          minHeight: '100%',
        }}
      >
        <StoryComponent />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof PopoverText>;

export const Default: Story = {};

export const NoHeader: Story = {
  args: {
    header: false,
  },
};

export const NoFooter: Story = {
  args: {
    footer: false,
  },
};

const TIP_DIRECTIONS: PopoverTipDirection[] = ['right', 'left', 'bottom', 'top'];

export const TipDirectionMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Figma `652:31199` — tip direction variants.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {TIP_DIRECTIONS.map((tipDirection) => (
        <div key={tipDirection} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{tipDirection}</p>
          <PopoverText tipDirection={tipDirection} />
        </div>
      ))}
    </div>
  ),
};

export const HeaderFooterMatrix: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>On</p>
        <PopoverText />
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>Off</p>
        <PopoverText header={false} footer={false} />
      </div>
    </div>
  ),
};
