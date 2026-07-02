import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyMatrixItemRowStyle,
  storyMatrixSectionStyle,
} from '../Input/shared/storyHelpers';
import { PopoverGeneral } from './PopoverGeneral';
import type { PopoverTipDirection } from './shared/PopoverShell';

const meta: Meta<typeof PopoverGeneral> = {
  title: 'Components/Popover/General',
  component: PopoverGeneral,
  tags: ['autodocs'],
  argTypes: {
    tipDirection: {
      control: 'select',
      options: ['right', 'left', 'bottom', 'top'] satisfies PopoverTipDirection[],
    },
    tip: { control: 'boolean' },
    header: { control: 'boolean' },
    footer: { control: 'boolean' },
    showMinimize: { control: 'boolean' },
    showClose: { control: 'boolean' },
    showFooterCancel: { control: 'boolean' },
    showFooterPrimary: { control: 'boolean' },
  },
  args: {
    tip: true,
    tipDirection: 'right',
    header: true,
    footer: true,
    showMinimize: true,
    showClose: true,
    showFooterCancel: true,
    showFooterPrimary: true,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Floating overlay for titles, custom slot content, and footer actions. Adjust tip direction or hide header/footer/tip per Figma `592:5476`.',
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
type Story = StoryObj<typeof PopoverGeneral>;

export const Default: Story = {};

export const NoTip: Story = {
  args: {
    tip: false,
  },
};

export const HeaderFooterOff: Story = {
  args: {
    header: false,
    footer: false,
  },
};

const TIP_DIRECTIONS: PopoverTipDirection[] = ['right', 'left', 'bottom', 'top'];

export const TipDirectionMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Figma `592:5476` — tip direction variants.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {TIP_DIRECTIONS.map((tipDirection) => (
        <div key={tipDirection} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{tipDirection}</p>
          <PopoverGeneral tipDirection={tipDirection} />
        </div>
      ))}
    </div>
  ),
};

export const FeatureMatrix: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>All on</p>
        <PopoverGeneral />
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>All off</p>
        <PopoverGeneral header={false} footer={false} tip={false} />
      </div>
    </div>
  ),
};
