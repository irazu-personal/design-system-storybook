import type { Meta, StoryObj } from '@storybook/react';
import { TagColored, type TagColoredVariant } from './TagColored';
import { sizeLabelStyle, storyMatrixItemRowStyle, storyMatrixSectionStyle } from '../Input/shared/storyHelpers';

const meta: Meta<typeof TagColored> = {
  title: 'Components/Tags/Colored',
  component: TagColored,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TagColored>;

const VARIANTS: TagColoredVariant[] = [
  'pink',
  'burgundy',
  'purple',
  'blue',
  'cyan',
  'lime',
  'volcano',
  'peach',
  'yellow',
  'disabled',
];

export const Default: Story = {};

export const Palette: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {VARIANTS.map((variant) => (
        <div key={variant} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{variant}</p>
          <TagColored variant={variant} label={variant} />
        </div>
      ))}
    </div>
  ),
};

export const WithIcons: Story = {
  args: { variant: 'blue', showPrefixIcon: true, showSuffixIcon: true, label: 'with icons' },
  parameters: {
    docs: {
      description: {
        story: 'Optional prefix icon and suffix delete button (trash). The suffix icon acts as a remove/delete control.',
      },
    },
  },
};

export const Disabled: Story = {
  args: { variant: 'disabled', showPrefixIcon: true, showSuffixIcon: true, label: 'Tag' },
};
