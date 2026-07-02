import type { Meta, StoryObj } from '@storybook/react';
import { Input, type InputFill, type InputSize, type InputState } from './Input';
import { sizeLabelStyle, SIZE_DOCS, storyMatrixFieldWrapStyle, storyMatrixItemRowStartStyle, storyMatrixItemRowStyle, storyMatrixSectionStyle } from './shared/storyHelpers';

const meta: Meta<typeof Input> = {
  title: 'Components/Input/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    fill: {
      control: 'select',
      options: ['empty', 'filled'],
      description: 'Optional override. When unset, empty/filled follows whether the field has content.',
    },
    visualState: {
      control: 'select',
      options: ['default', 'hover', 'danger', 'disabled', 'click-on'],
    },
    showHelperText: { control: 'boolean', description: 'Optional helper text below the field.' },
    showAsterisk: { control: 'boolean', description: 'Optional required-field asterisk on the label (brand blue).' },
    showHelpIcon: { control: 'boolean', description: 'Optional help icon on the label.' },
    showPrefixIcon: { control: 'boolean', description: 'Optional prefix icon inside the field.' },
    showInfoIcon: { control: 'boolean', description: 'Optional info icon inside the field.' },
    showCharCount: { control: 'boolean', description: 'Optional max-character counter inside the field.' },
  },
  args: {
    label: 'Label',
    helperText: 'Helper text',
    placeholder: 'Input',
    size: 'medium',
    showLabel: true,
    showHelperText: false,
    showAsterisk: false,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Spark Input — standard text field with optional label, helper text, and anatomy slots. **Empty** and **filled** states follow field content automatically unless `fill` is set explicitly. Helper text, asterisk, prefix icon, info icon, and max-character counter are optional boolean props (off by default). Sizes: **small** (28px), **medium** (36px), **large** (40px).',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

const SIZES: InputSize[] = ['small', 'medium', 'large'];
const STATES: InputState[] = ['default', 'hover', 'click-on', 'danger', 'disabled'];
const FILLS: InputFill[] = ['empty', 'filled'];

export const Default: Story = {};

export const Anatomy: Story = {
  args: {
    showAsterisk: true,
    showHelperText: true,
    showPrefixIcon: true,
    showInfoIcon: true,
    showCharCount: true,
    maxChars: 40,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Full field anatomy with all optional slots enabled. Toggle `showHelperText`, `showPrefixIcon`, `showInfoIcon`, and `showCharCount` off when a simpler field is needed.',
      },
    },
  },
};

export const FilledAnatomy: Story = {
  args: {
    showAsterisk: true,
    showHelperText: true,
    showPrefixIcon: true,
    showInfoIcon: true,
    showCharCount: true,
    maxChars: 40,
    defaultValue: 'Input value',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Filled state with all optional anatomy enabled. Content tone updates automatically when the user types; character count tracks input length.',
      },
    },
  },
};

export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story: `${SIZE_DOCS.small}, ${SIZE_DOCS.medium}, and ${SIZE_DOCS.large} field heights.`,
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {SIZES.map((size) => (
        <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <Input size={size} />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const FillTypes: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Explicit empty vs filled overrides. In product usage, leave `fill` unset so the state follows whether the user has entered content.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {FILLS.map((fill) => (
        <div key={fill} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{fill}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <Input
              fill={fill}
              value={fill === 'filled' ? 'Input value' : ''}
              showPrefixIcon
              showInfoIcon
              showCharCount
              charCount={fill === 'filled' ? 12 : 0}
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
          <p style={sizeLabelStyle}>{visualState === 'click-on' ? 'click-on' : visualState}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <Input
              visualState={visualState}
              danger={visualState === 'danger'}
              disabled={visualState === 'disabled'}
              showFocus={visualState === 'click-on'}
              defaultValue="Input value"
            />
          </div>
        </div>
      ))}
    </div>
  ),
};
