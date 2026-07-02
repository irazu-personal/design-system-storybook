import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyMatrixFieldWrapStyle,
  storyMatrixItemRowStartStyle,
  storyMatrixItemRowStyle,
  storyMatrixSectionStyle,
} from '../Input/shared/storyHelpers';
import { UploadArea, type UploadAreaContentDirection, type UploadAreaState } from './UploadArea';

const meta: Meta<typeof UploadArea> = {
  title: 'Components/Upload Area/Upload Area',
  component: UploadArea,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hover', 'click-on', 'in-progress', 'success', 'failed'],
    },
    contentDirection: { control: 'select', options: ['left', 'center'] },
    showHelperText: { control: 'boolean' },
  },
  args: {
    state: 'default',
    contentDirection: 'left',
    showHelperText: false,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Spark Upload Area — compact row drop zone with **default**, **hover**, **click-on**, **in-progress**, **success**, and **failed** states. Helper text is hidden by default.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UploadArea>;

const STATES: UploadAreaState[] = [
  'default',
  'hover',
  'click-on',
  'in-progress',
  'success',
  'failed',
];

const DIRECTIONS: UploadAreaContentDirection[] = ['left', 'center'];

export const Default: Story = {};

export const StateMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Figma `776:39369` — all states with helper text enabled for documentation.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {STATES.map((state) => (
        <div
          key={state}
          style={state === 'success' || state === 'failed' ? storyMatrixItemRowStartStyle : storyMatrixItemRowStyle}
        >
          <p style={sizeLabelStyle}>{state}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <UploadArea state={state} showHelperText />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const ContentDirectionMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default state with left- and center-aligned content.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {DIRECTIONS.map((contentDirection) => (
        <div key={contentDirection} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{contentDirection}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <UploadArea contentDirection={contentDirection} />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const WithHelperText: Story = {
  args: {
    showHelperText: true,
  },
};
