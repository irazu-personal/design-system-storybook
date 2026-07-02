import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyCanvasDecorator,
  storyMatrixItemRowStyle,
  storyMatrixSectionStyle,
  variantLabelStyle,
} from '../Input/shared/storyHelpers';
import { ValidationCard, type ValidationCardType } from './ValidationCard';

const meta: Meta<typeof ValidationCard> = {
  title: 'Components/Widgets/Validation Card',
  component: ValidationCard,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['text-only', 'tag'] satisfies ValidationCardType[] },
    border: { control: 'boolean' },
  },
  args: {
    type: 'text-only',
    border: false,
  },
  decorators: [storyCanvasDecorator],
  parameters: {
    docs: {
      description: {
        component:
          'Validation Card — structured metric counts with optional Tag Colored header. Turn border off when nesting inside parent containers.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ValidationCard>;

const TYPES: ValidationCardType[] = ['text-only', 'tag'];

export const Default: Story = {};

export const WithBorder: Story = {
  args: {
    border: true,
  },
};

export const Tag: Story = {
  args: {
    type: 'tag',
  },
};

export const TypeMatrix: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {TYPES.map((type) => (
        <div key={type} style={storyMatrixItemRowStyle}>
          <p style={variantLabelStyle}>{type}</p>
          <ValidationCard type={type} />
        </div>
      ))}
    </div>
  ),
};

export const BorderMatrix: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {[false, true].map((border) => (
        <div key={String(border)} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{border ? 'On' : 'Off'}</p>
          <div className="story-row">
            <ValidationCard type="text-only" border={border} />
            <ValidationCard type="tag" border={border} />
          </div>
        </div>
      ))}
    </div>
  ),
};
