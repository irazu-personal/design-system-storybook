import type { Meta, StoryObj } from '@storybook/react';
import { sizeLabelStyle, storyMatrixItemRowStyle, storyMatrixSectionStyle } from '../Input/shared/storyHelpers';
import { ScrollBar, type ScrollBarType } from './ScrollBar';

const meta: Meta<typeof ScrollBar> = {
  title: 'Components/Scroll Bar',
  component: ScrollBar,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['vertical', 'horizontal'] },
  },
  args: {
    type: 'vertical',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Spark Scroll Bar — thumb indicator for overflow content. **vertical** for tall lists; **horizontal** for wide tables or views.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollBar>;

const TYPES: ScrollBarType[] = ['vertical', 'horizontal'];

export const Default: Story = {};

export const Types: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Vertical and horizontal scrollbar thumbs from Figma.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {TYPES.map((type) => (
        <div key={type} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{type}</p>
          <ScrollBar type={type} />
        </div>
      ))}
    </div>
  ),
};
