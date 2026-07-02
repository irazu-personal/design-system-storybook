import type { Meta, StoryObj } from '@storybook/react';
import {
  storyCanvasDecorator,
  storyMatrixItemRowStartStyle,
  storyMatrixSectionStyle,
  variantLabelStyle,
} from '../Input/shared/storyHelpers';
import { PieChart, type PieChartTheme, type PieChartType } from './PieChart';

const meta: Meta<typeof PieChart> = {
  title: 'Components/Graphs/Pie Chart',
  component: PieChart,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: ['multi-color-4', 'multi-color-8', 'single-color'] satisfies PieChartTheme[],
    },
    type: { control: 'select', options: ['pie', 'donut'] satisfies PieChartType[] },
  },
  args: {
    theme: 'multi-color-4',
    type: 'donut',
  },
  decorators: [storyCanvasDecorator],
  parameters: {
    docs: {
      description: {
        component:
          'Pie Chart — part-to-whole relationships with pie or donut variants and 4- or 8-segment multi-color themes.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PieChart>;

const TYPES: PieChartType[] = ['pie', 'donut'];
const THEMES: PieChartTheme[] = ['multi-color-4', 'multi-color-8', 'single-color'];

export const Default: Story = {};

export const TypeMatrix: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {TYPES.map((type) => (
        <div key={type} style={storyMatrixItemRowStartStyle}>
          <p style={variantLabelStyle}>{type}</p>
          <PieChart type={type} />
        </div>
      ))}
    </div>
  ),
};

export const ThemeMatrix: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {THEMES.map((theme) => (
        <div key={theme} style={storyMatrixItemRowStartStyle}>
          <p style={variantLabelStyle}>{theme.replace(/-/g, ' ')}</p>
          <PieChart theme={theme} />
        </div>
      ))}
    </div>
  ),
};
