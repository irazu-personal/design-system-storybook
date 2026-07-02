import type { Meta, StoryObj } from '@storybook/react';
import { UploadAreaModal } from './UploadAreaModal';

const meta: Meta<typeof UploadAreaModal> = {
  title: 'Components/Upload Area/Modal',
  component: UploadAreaModal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Spark File Upload Modal — dialog with segmented task tabs and a center-aligned upload row. Figma `775:32304`.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UploadAreaModal>;

export const Default: Story = {};
