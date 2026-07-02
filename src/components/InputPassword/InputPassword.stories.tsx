import type { Meta, StoryObj } from '@storybook/react';
import { InputPassword, type InputPasswordFill, type InputPasswordSize, type InputPasswordState } from './InputPassword';
import {
  sizeLabelStyle,
  SIZE_DOCS,
  storyMatrixFieldWrapStyle,
  storyMatrixItemRowStartStyle,
  storyMatrixItemRowStyle,
  storyMatrixSectionStyle,
} from '../Input/shared/storyHelpers';

const meta: Meta<typeof InputPassword> = {
  title: 'Components/Input/Password',
  component: InputPassword,
  tags: ['autodocs'],
  argTypes: {
    showHelperText: { control: 'boolean', description: 'Optional helper text below the field.' },
  },
  args: { size: 'medium', showHelperText: false },
  parameters: {
    docs: {
      description: {
        component: `Password field with show/hide toggle. **empty** / **filled** types. Helper text is an optional boolean prop, off by default. Sizes: ${SIZE_DOCS.small}, ${SIZE_DOCS.medium}, ${SIZE_DOCS.large}.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputPassword>;

const SIZES: InputPasswordSize[] = ['small', 'medium', 'large'];
const STATES: InputPasswordState[] = ['default', 'hover', 'click-on', 'disabled'];
const FILLS: InputPasswordFill[] = ['empty', 'filled'];

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {SIZES.map((size) => (
        <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <InputPassword size={size} fill="filled" />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const FillTypes: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {FILLS.map((fill) => (
        <div key={fill} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{fill}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <InputPassword fill={fill} />
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
          <p style={sizeLabelStyle}>{visualState === 'click-on' ? 'click-on' : visualState}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <InputPassword
              fill="filled"
              visualState={visualState}
              disabled={visualState === 'disabled'}
              showFocus={visualState === 'click-on'}
            />
          </div>
        </div>
      ))}
    </div>
  ),
};
