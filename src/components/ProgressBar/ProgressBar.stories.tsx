import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyMatrixFieldWrapStyle,
  storyMatrixItemRowStyle,
  storyMatrixSectionStyle,
} from '../Input/shared/storyHelpers';
import { ProgressBar, type ProgressBarType } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/Progress Bar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['default', 'error', 'disabled'] },
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
  args: {
    value: 45,
    type: 'default',
    showPercentage: true,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Spark Progress Bar — determinate completion indicator (234px track, 8px height). **default**, **error**, and **disabled** types with optional percentage label.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

const TYPES: ProgressBarType[] = ['default', 'error', 'disabled'];

export const Default: Story = {};

export const TypeMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Figma `817:89490` — default (blue), error (critical), and disabled variants.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {TYPES.map((type) => (
        <div key={type} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{type}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <ProgressBar type={type} value={45} />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Values: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {[0, 25, 50, 75, 100].map((value) => (
        <div key={value} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{value}%</p>
          <div style={storyMatrixFieldWrapStyle}>
            <ProgressBar value={value} />
          </div>
        </div>
      ))}
    </div>
  ),
};
