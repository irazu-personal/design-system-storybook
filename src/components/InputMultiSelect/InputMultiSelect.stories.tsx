import type { Meta, StoryObj } from '@storybook/react';
import {
  InputMultiSelect,
  type InputMultiSelectFill,
  type InputMultiSelectSize,
  type InputMultiSelectState,
} from './InputMultiSelect';
import {
  sizeLabelStyle,
  SIZE_DOCS,
  storyMatrixFieldWrapStyle,
  storyMatrixItemRowStartStyle,
  storyMatrixItemRowStyle,
  storyMatrixSectionStyle,
} from '../Input/shared/storyHelpers';

const DEFAULT_TAGS = ['Tag', 'Tag', 'Tag', 'Tag'];

const meta: Meta<typeof InputMultiSelect> = {
  title: 'Components/Input/Multi Select',
  component: InputMultiSelect,
  tags: ['autodocs'],
  args: { size: 'medium' },
  parameters: {
    docs: {
      description: {
        component: `Multi-select field showing compact tags with overflow counter. **empty** / **filled** types. Sizes: ${SIZE_DOCS.small} and ${SIZE_DOCS.medium}.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputMultiSelect>;

const SIZES: InputMultiSelectSize[] = ['small', 'medium'];
const STATES: InputMultiSelectState[] = ['default', 'hover', 'pressed', 'disabled'];
const FILLS: InputMultiSelectFill[] = ['empty', 'filled'];

export const Default: Story = {
  args: { tags: DEFAULT_TAGS, overflowCount: 1 },
};

export const Sizes: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {SIZES.map((size) => (
        <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <InputMultiSelect size={size} tags={DEFAULT_TAGS} overflowCount={1} />
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
            <InputMultiSelect
              fill={fill}
              tags={fill === 'filled' ? DEFAULT_TAGS : []}
              overflowCount={fill === 'filled' ? 1 : 0}
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
            <InputMultiSelect
              tags={DEFAULT_TAGS}
              overflowCount={1}
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
