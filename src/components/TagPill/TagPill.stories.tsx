import type { Meta, StoryObj } from '@storybook/react';
import { TagPill } from './TagPill';

const meta: Meta<typeof TagPill> = {
  title: 'Components/Tags/Pill',
  component: TagPill,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TagPill>;

export const Default: Story = {};
