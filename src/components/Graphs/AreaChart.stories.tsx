import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyCanvasDecorator,
  storyMatrixItemRowStartStyle,
  storyMatrixSectionStyle,
  variantLabelStyle,
} from '../Input/shared/storyHelpers';
import { AreaChart } from './LineChart';
import type { GraphAxes, GraphTheme } from './graphConstants';

const meta: Meta<typeof AreaChart> = {
  title: 'Components/Graphs/Area Chart',
  component: AreaChart,
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
          'Area Chart — volume and trends with filled areas emphasizing cumulative values over time.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AreaChart>;

const THEMES: GraphTheme[] = ['multi-color', 'single-color'];
const AXES: GraphAxes[] = ['shown', 'hidden'];

export const Default: Story = {};

export const ThemeMatrix: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {THEMES.map((theme) => (
        <div key={theme} style={storyMatrixItemRowStartStyle}>
          <p style={variantLabelStyle}>{theme.replace('-', ' ')}</p>
          <AreaChart theme={theme} />
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
          <AreaChart axes={axes} />
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
        <AreaChart xAxisTitle xAxisTitleText="Text" />
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>hidden</p>
        <AreaChart xAxisTitle={false} />
      </div>
    </div>
  ),
};
