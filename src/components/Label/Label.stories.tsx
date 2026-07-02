import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyMatrixItemRowStyle,
  storyMatrixSectionStyle,
} from '../Input/shared/storyHelpers';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    showAsterisk: { control: 'boolean' },
    showIcon: { control: 'boolean' },
  },
  args: {
    label: 'Label',
    showAsterisk: true,
    showIcon: true,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Spark Label — Figma `211:3011`. Used above form fields with optional required asterisk and help icon. Medium weight base text on primary on-surface color.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const TextOnly: Story = {
  args: {
    showAsterisk: false,
    showIcon: false,
  },
};

export const VariantMatrix: Story = {
  name: 'Variant matrix',
  parameters: {
    docs: {
      description: {
        story: 'Optional asterisk and help icon combinations from Figma.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>Text only</p>
        <Label label="Label" />
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>Asterisk</p>
        <Label label="Label" showAsterisk />
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>Help icon</p>
        <Label label="Label" showIcon />
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>Asterisk + icon</p>
        <Label label="Label" showAsterisk showIcon />
      </div>
    </div>
  ),
};
