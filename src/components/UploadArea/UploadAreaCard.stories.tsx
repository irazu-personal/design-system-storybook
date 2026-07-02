import type { Meta, StoryObj } from '@storybook/react';
import { UploadAreaCard } from './UploadAreaCard';

const meta: Meta<typeof UploadAreaCard> = {
  title: 'Components/Upload Area/Card',
  component: UploadAreaCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Spark File Upload Card — large dashed card for bulk uploads with description, primary **Upload Data**, and secondary **Upload Benchmark** actions. Figma `775:35748`.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UploadAreaCard>;

export const Default: Story = {};
