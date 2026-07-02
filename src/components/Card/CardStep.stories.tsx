import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyMatrixFieldWrapStyle,
  storyMatrixItemRowStartStyle,
  storyMatrixSectionStyle,
  variantLabelStyle,
} from '../Input/shared/storyHelpers';
import { CardStep } from './CardStep';

const meta: Meta<typeof CardStep> = {
  title: 'Components/Cards/Step',
  component: CardStep,
  tags: ['autodocs'],
  argTypes: {
    footer: { control: 'boolean' },
    showScrollBar: { control: 'boolean' },
    headerDivider: { control: 'boolean' },
    showIconButtonPrefix: { control: 'boolean' },
    showIconButtonSuffix: { control: 'boolean' },
    showSecondaryButton: { control: 'boolean' },
    showMainCta: { control: 'boolean' },
    showSubtitle: { control: 'boolean' },
  },
  args: {
    footer: true,
    showScrollBar: false,
    headerDivider: false,
    showIconButtonPrefix: false,
    showIconButtonSuffix: false,
    showSecondaryButton: false,
    showMainCta: false,
    showSubtitle: true,
    stepNumber: '1',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Step-based container for sequential configuration flows. Use for scannable data or text inputs — not unrelated topics or empty states.',
      },
    },
  },
  decorators: [
    (StoryComponent) => (
      <div style={{ width: '100%', maxWidth: '691px' }}>
        <StoryComponent />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CardStep>;

export const Default: Story = {};

export const HeaderDivider: Story = {
  args: {
    headerDivider: true,
  },
};

export const WithoutFooter: Story = {
  args: {
    footer: false,
  },
};

export const WithScrollBar: Story = {
  args: {
    showScrollBar: true,
  },
};

export const ToggleMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Figma `693:84999` — footer and scroll-bar toggles.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>Footer on</p>
        <div style={{ ...storyMatrixFieldWrapStyle, maxWidth: '691px', width: '100%' }}>
          <CardStep footer />
        </div>
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>Footer off</p>
        <div style={{ ...storyMatrixFieldWrapStyle, maxWidth: '691px', width: '100%' }}>
          <CardStep footer={false} />
        </div>
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={variantLabelStyle}>Scroll bar on</p>
        <div style={{ ...storyMatrixFieldWrapStyle, maxWidth: '691px', width: '100%' }}>
          <CardStep showScrollBar />
        </div>
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={variantLabelStyle}>Header divider</p>
        <div style={{ ...storyMatrixFieldWrapStyle, maxWidth: '691px', width: '100%' }}>
          <CardStep headerDivider />
        </div>
      </div>
    </div>
  ),
};
