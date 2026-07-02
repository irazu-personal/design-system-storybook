import type { Meta, StoryObj } from '@storybook/react';
import { InputTextArea, type InputTextAreaFill, type InputTextAreaState } from './InputTextArea';
import {
  sizeLabelStyle,
  storyMatrixFieldWrapStyle,
  storyMatrixItemRowStartStyle,
  storyMatrixSectionStyle,
} from '../Input/shared/storyHelpers';

const meta: Meta<typeof InputTextArea> = {
  title: 'Components/Input/Text Area',
  component: InputTextArea,
  tags: ['autodocs'],
  argTypes: {
    fill: {
      control: 'select',
      options: ['empty', 'filled'],
      description: 'Optional override. When unset, empty/filled follows whether the field has content.',
    },
    showHelperText: { control: 'boolean', description: 'Optional helper text below the field.' },
    showExpand: {
      control: 'boolean',
      description: 'Optional expand control. Included automatically when showCharCount is on (Figma .Input-Show-Count).',
    },
    showCharCount: {
      control: 'boolean',
      description: 'Shows expand + character counter bar inside the field (4px bottom/right inset). Count uses disabled styling when the field is disabled.',
    },
  },
  args: {
    showHelperText: false,
    showExpand: false,
    showCharCount: false,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Multi-line text area with optional helper text, expand control (tiny tertiary button), and character count. Helper text and show count are boolean props, off by default. Character count renders **inside** the bordered field and inherits disabled styling with the field.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputTextArea>;

const STATES: InputTextAreaState[] = ['default', 'hover', 'pressed', 'disabled'];
const FILLS: InputTextAreaFill[] = ['empty', 'filled'];

export const Default: Story = {};

export const WithHelperAndCount: Story = {
  args: {
    showHelperText: true,
    showCharCount: true,
  },
};

export const CountDisabled: Story = {
  name: 'Count disabled',
  args: {
    showCharCount: true,
    disabled: true,
    value: '',
  },
};

export const FillTypes: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {FILLS.map((fill) => (
        <div key={fill} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{fill}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <InputTextArea
              fill={fill}
              showCharCount
              value={fill === 'filled' ? 'Longer text value in the text area.' : ''}
            />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const StateMatrix: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {STATES.map((visualState) => (
        <div key={visualState} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{visualState}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <InputTextArea
              value="Text area value"
              showCharCount
              visualState={visualState}
              disabled={visualState === 'disabled'}
              showFocus={visualState === 'pressed'}
            />
          </div>
        </div>
      ))}
    </div>
  ),
};
