import type { Meta, StoryObj } from '@storybook/react';
import {
  InputSingleSelect,
  type InputSingleSelectFill,
  type InputSingleSelectSize,
  type InputSingleSelectState,
} from './InputSingleSelect';
import {
  sizeLabelStyle,
  SIZE_DOCS,
  storyMatrixFieldWrapStyle,
  storyMatrixItemRowStartStyle,
  storyMatrixItemRowStyle,
  storyMatrixSectionStyle,
} from '../Input/shared/storyHelpers';

const meta: Meta<typeof InputSingleSelect> = {
  title: 'Components/Input/Single Select',
  component: InputSingleSelect,
  tags: ['autodocs'],
  args: {
    size: 'medium',
    showPrefixIcon: false,
  },
  parameters: {
    docs: {
      description: {
        component: `Single-select field with optional prefix icon and chevron. **empty** shows placeholder tone; **filled** shows selected value. Sizes: ${SIZE_DOCS.small} and ${SIZE_DOCS.medium}.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputSingleSelect>;

const SIZES: InputSingleSelectSize[] = ['small', 'medium'];
const STATES: InputSingleSelectState[] = ['default', 'hover', 'pressed', 'disabled'];
const FILLS: InputSingleSelectFill[] = ['empty', 'filled'];

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {SIZES.map((size) => (
        <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <InputSingleSelect size={size} />
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
            <InputSingleSelect fill={fill} text={fill === 'filled' ? 'Selected value' : undefined} />
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
            <InputSingleSelect
              text="Selected value"
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
