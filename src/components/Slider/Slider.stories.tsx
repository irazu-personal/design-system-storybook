import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyMatrixFieldWrapStyle,
  storyMatrixItemRowStartStyle,
  storyMatrixItemRowStyle,
  storyMatrixSectionStyle,
} from '../Input/shared/storyHelpers';
import { Slider, SliderHandle, type SliderHandleState, type SliderType } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['basic', 'range'] },
    values: { control: 'boolean' },
    showInput: { control: 'boolean' },
    disabled: { control: 'boolean' },
    value: { control: { type: 'range', min: 0, max: 10, step: 1 } },
    from: { control: { type: 'range', min: 0, max: 10, step: 1 } },
    to: { control: { type: 'range', min: 0, max: 10, step: 1 } },
  },
  args: {
    type: 'basic',
    values: true,
    showInput: true,
    disabled: false,
    value: 10,
    from: 0,
    to: 10,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Spark Slider — select a value (**basic**) or range (**range**) along a track. Toggle **values** for the 0–10 scale, **showInput** for manual entry fields. Use for approximate selection; not for process progress.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

const TYPES: SliderType[] = ['basic', 'range'];
const HANDLE_STATES: SliderHandleState[] = ['default', 'hover', 'click-on', 'disabled'];

const HANDLE_STATE_LABELS: Record<SliderHandleState, string> = {
  default: 'Default',
  hover: 'Hover',
  'click-on': 'Click-on',
  disabled: 'Disabled',
};

export const Default: Story = {};

export const TypeMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Figma documentation — **basic** (single value) and **range** (from/to boundaries).',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {TYPES.map((type) => (
        <div key={type} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{type}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <Slider type={type} values showInput />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const ValuesMatrix: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>With values</p>
        <div style={storyMatrixFieldWrapStyle}>
          <Slider values showInput />
        </div>
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>Without values</p>
        <div style={storyMatrixFieldWrapStyle}>
          <Slider values={false} showInput />
        </div>
      </div>
    </div>
  ),
};

export const InputMatrix: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>With inputs</p>
        <div style={storyMatrixFieldWrapStyle}>
          <Slider values showInput />
        </div>
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>Without inputs</p>
        <div style={storyMatrixFieldWrapStyle}>
          <Slider values showInput={false} />
        </div>
      </div>
    </div>
  ),
};

export const StateMatrix: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>Default</p>
        <div style={storyMatrixFieldWrapStyle}>
          <Slider values={false} showInput={false} value={7} />
        </div>
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>Disabled</p>
        <div style={storyMatrixFieldWrapStyle}>
          <Slider values={false} showInput={false} value={7} disabled />
        </div>
      </div>
    </div>
  ),
};

const handleStateArgTypes = {
  type: { table: { disable: true } },
  values: { table: { disable: true } },
  showInput: { table: { disable: true } },
  disabled: { table: { disable: true } },
  value: { table: { disable: true } },
  from: { table: { disable: true } },
  to: { table: { disable: true } },
  state: {
    name: 'Handle state',
    control: 'select' as const,
    options: HANDLE_STATES,
  },
  tooltipValue: {
    control: { type: 'number', min: 0, max: 10, step: 1 },
  },
};

function handleTooltipValue(
  state: SliderHandleState,
  tooltipValue: number | undefined,
): number | undefined {
  return state === 'hover' || state === 'click-on' ? tooltipValue : undefined;
}

export const HandleStateMatrix: StoryObj<typeof SliderHandle> = {
  component: SliderHandle,
  argTypes: handleStateArgTypes,
  args: {
    state: 'hover',
    tooltipValue: 10,
  },
  parameters: {
    docs: {
      description: {
        story: 'Figma `772:16851` — handle default, hover (with tooltip), click-on (with tooltip), and disabled.',
      },
    },
  },
  render: (args) => (
    <div style={storyMatrixSectionStyle}>
      {HANDLE_STATES.map((state) => (
        <div key={state} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{HANDLE_STATE_LABELS[state]}</p>
          <div
            className={
              state === 'hover' || state === 'click-on'
                ? 'spark-slider-handle-matrix-cell-has-tooltip'
                : 'spark-slider-handle-matrix-cell'
            }
          >
            <SliderHandle
              state={state}
              tooltipValue={handleTooltipValue(state, args.tooltipValue)}
            />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Range: Story = {
  args: {
    type: 'range',
    values: true,
    showInput: true,
    from: 0,
    to: 10,
  },
};
