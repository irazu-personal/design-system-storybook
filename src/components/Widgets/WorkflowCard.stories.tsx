import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyCanvasDecorator,
  storyMatrixItemRowStyle,
  storyMatrixSectionStyle,
  variantLabelStyle,
} from '../Input/shared/storyHelpers';
import { WorkflowCard, type WorkflowCardType } from './WorkflowCard';

const meta: Meta<typeof WorkflowCard> = {
  title: 'Components/Widgets/Workflow Card',
  component: WorkflowCard,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['overall-progress', 'specific-progress'] satisfies WorkflowCardType[] },
    border: { control: 'boolean' },
    progressValue: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
  args: {
    type: 'overall-progress',
    border: false,
    progressValue: 0,
  },
  decorators: [storyCanvasDecorator],
  parameters: {
    docs: {
      description: {
        component:
          'Workflow Card — overall progress summary or specific tier progress with inline Review action. Turn border off when nesting inside parent containers.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof WorkflowCard>;

const TYPES: WorkflowCardType[] = ['overall-progress', 'specific-progress'];

export const Default: Story = {};

export const SpecificProgress: Story = {
  args: {
    type: 'specific-progress',
    progressValue: 35,
  },
};

export const WithBorder: Story = {
  args: {
    border: true,
  },
};

export const TypeMatrix: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {TYPES.map((type) => (
        <div key={type} style={storyMatrixItemRowStyle}>
          <p style={variantLabelStyle}>{type.replace('-', ' ')}</p>
          <WorkflowCard type={type} progressValue={type === 'specific-progress' ? 35 : 0} />
        </div>
      ))}
    </div>
  ),
};

export const BorderMatrix: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {[false, true].map((border) => (
        <div key={String(border)} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{border ? 'On' : 'Off'}</p>
          <div className="story-row">
            <WorkflowCard type="overall-progress" border={border} />
            <WorkflowCard type="specific-progress" border={border} progressValue={35} />
          </div>
        </div>
      ))}
    </div>
  ),
};
