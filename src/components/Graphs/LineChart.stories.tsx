import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyCanvasDecorator,
  storyMatrixItemRowStartStyle,
  storyMatrixSectionStyle,
  variantLabelStyle,
} from '../Input/shared/storyHelpers';
import { LineChart } from './LineChart';
import type { GraphAxes, GraphTheme } from './graphConstants';

const meta: Meta<typeof LineChart> = {
  title: 'Components/Graphs/Line Chart',
  component: LineChart,
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'select', options: ['multi-color', 'single-color'] satisfies GraphTheme[] },
    axes: { control: 'select', options: ['shown', 'hidden'] satisfies GraphAxes[] },
    xAxisTitle: { control: 'boolean' },
    xAxisTitleText: { control: 'text' },
  },
  args: {
    theme: 'multi-color',
    axes: 'shown',
    xAxisTitle: true,
    xAxisTitleText: 'Text',
  },
  decorators: [storyCanvasDecorator],
  parameters: {
    docs: {
      description: {
        component:
          'Line Chart — trends over time with multi- or single-color series. Toggle axes for full grid context or a minimalist data shape.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LineChart>;

const THEMES: GraphTheme[] = ['multi-color', 'single-color'];
const AXES: GraphAxes[] = ['shown', 'hidden'];

export const Default: Story = {};

export const ThemeMatrix: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {THEMES.map((theme) => (
        <div key={theme} style={storyMatrixItemRowStartStyle}>
          <p style={variantLabelStyle}>{theme.replace('-', ' ')}</p>
          <LineChart theme={theme} />
        </div>
      ))}
    </div>
  ),
};

export const AxesMatrix: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {AXES.map((axes) => (
        <div key={axes} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{axes}</p>
          <LineChart axes={axes} />
        </div>
      ))}
    </div>
  ),
};

export const XAxisTitleMatrix: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>shown</p>
        <LineChart xAxisTitle xAxisTitleText="Threshold" />
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>hidden</p>
        <LineChart xAxisTitle={false} />
      </div>
    </div>
  ),
};
