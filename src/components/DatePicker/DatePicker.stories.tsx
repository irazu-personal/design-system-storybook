import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyMatrixItemRowStyle,
  storyMatrixSectionStyle,
  variantLabelStyle,
} from '../Input/shared/storyHelpers';
import { DatePickerDay, type DatePickerDayState } from './DatePickerDay';
import { DatePickerMenu } from './DatePickerMenu';
import { DatePickerPreset, type DatePickerPresetState } from './DatePickerPreset';

const meta: Meta<typeof DatePickerMenu> = {
  title: 'Components/Datepicker',
  component: DatePickerMenu,
  tags: ['autodocs'],
  argTypes: {
    range: { control: 'boolean' },
    showPreset: { control: 'boolean' },
  },
  args: {
    range: false,
    showPreset: true,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Spark Datepicker menu — single-date and range calendars with optional preset shortcuts. Day cells support default, hover, current, current hover, selected, range, and inactive states. Presets support default, hover, click-on, and disabled states.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePickerMenu>;

const DAY_STATES: DatePickerDayState[] = [
  'default',
  'current',
  'current-hover',
  'hover',
  'inactive',
  'selected',
  'range',
];
const PRESET_STATES: DatePickerPresetState[] = ['default', 'hover', 'click-on', 'disabled'];

export const Default: Story = {};

export const Range: Story = {
  args: {
    range: true,
  },
};

export const WithoutPresets: Story = {
  args: {
    showPreset: false,
  },
};

export const DayStates: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {DAY_STATES.map((state) => (
        <div key={state} style={storyMatrixItemRowStyle}>
          <p style={variantLabelStyle}>{state.replace('-', ' ')}</p>
          <DatePickerDay label="24" state={state} interactive={false} />
        </div>
      ))}
    </div>
  ),
};

export const PresetStates: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {PRESET_STATES.map((state) => (
        <div key={state} style={storyMatrixItemRowStyle}>
          <p style={variantLabelStyle}>{state}</p>
          <div style={{ width: 120 }}>
            <DatePickerPreset label="Yesterday" visualState={state} />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const RangeSelection: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>Selected range</p>
        <div className="story-row">
          <DatePickerDay label="10" state="default" />
          <DatePickerDay label="11" state="selected" />
          <DatePickerDay label="12" state="range" />
          <DatePickerDay label="13" state="range" />
          <DatePickerDay label="14" state="range" />
          <DatePickerDay label="15" state="selected" />
          <DatePickerDay label="16" state="default" />
        </div>
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>In menu</p>
        <DatePickerMenu range showPreset={false} />
      </div>
    </div>
  ),
};

export const MenuVariants: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>Single</p>
        <DatePickerMenu range={false} />
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>Range</p>
        <DatePickerMenu range />
      </div>
    </div>
  ),
};
