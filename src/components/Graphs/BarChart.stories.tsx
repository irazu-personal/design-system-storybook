import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyCanvasDecorator,
  storyMatrixItemRowStartStyle,
  storyMatrixSectionStyle,
  variantLabelStyle,
} from '../Input/shared/storyHelpers';
import { BarChart, type BarChartOrientation } from './BarChart';
import type { GraphAxes, GraphTheme } from './graphConstants';

const meta: Meta<typeof BarChart> = {
  title: 'Components/Graphs/Bar Chart',
  component: BarChart,
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'select', options: ['multi-color', 'single-color'] satisfies GraphTheme[] },
    axes: { control: 'select', options: ['shown', 'hidden'] satisfies GraphAxes[] },
    orientation: { control: 'select', options: ['vertical', 'horizontal'] satisfies BarChartOrientation[] },
  },
  args: {
    theme: 'multi-color',
    axes: 'shown',
    orientation: 'vertical',
  },
  decorators: [storyCanvasDecorator],
  parameters: {
    docs: {
      description: {
        component:
          'Bar Chart — compares values across categories with grouped multi-series bars. Supports vertical and horizontal orientation.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BarChart>;

const ORIENTATIONS: BarChartOrientation[] = ['vertical', 'horizontal'];
const AXES: GraphAxes[] = ['shown', 'hidden'];

export const Default: Story = {};

export const OrientationMatrix: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {ORIENTATIONS.map((orientation) => (
        <div key={orientation} style={storyMatrixItemRowStartStyle}>
          <p style={variantLabelStyle}>{orientation}</p>
          <BarChart orientation={orientation} />
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
          <BarChart axes={axes} />
        </div>
      ))}
    </div>
  ),
};
