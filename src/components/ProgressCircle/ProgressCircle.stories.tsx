import type { Meta, StoryObj } from '@storybook/react';
import { sizeLabelStyle, storyMatrixItemRowStyle, storyMatrixSectionStyle } from '../Input/shared/storyHelpers';
import { ProgressCircle, type ProgressCircleStatus } from './ProgressCircle';

const meta: Meta<typeof ProgressCircle> = {
  title: 'Components/Progress Circle',
  component: ProgressCircle,
  tags: ['autodocs'],
  argTypes: {
    status: { control: 'select', options: ['not-started', 'in-progress', 'finish'] },
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
  args: {
    status: 'in-progress',
    value: 65,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Spark Progress Circle — 24×24 compact status indicator. **not-started** (empty ring), **in-progress** (blue arc), **finish** (success check). Pair with supporting text in product UI.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressCircle>;

const STATUSES: ProgressCircleStatus[] = ['not-started', 'in-progress', 'finish'];

export const Default: Story = {};

export const StatusMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Figma `657:33779` — not started, in progress, and finish states.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {STATUSES.map((status) => (
        <div key={status} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{status}</p>
          <ProgressCircle status={status} value={65} />
        </div>
      ))}
    </div>
  ),
};
