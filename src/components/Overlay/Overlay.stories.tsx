import type { Meta, StoryObj } from '@storybook/react';
import { Overlay } from './Overlay';

const meta: Meta<typeof Overlay> = {
  title: 'Components/Overlay',
  component: Overlay,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Spark Overlay — full-viewport scrim (`primitive/neutral/700` at 30% opacity) that blocks background interaction for Modals and Drawers.',
      },
    },
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Overlay>;

export const Default: Story = {
  render: () => (
    <div className="spark-overlay-demo">
      <Overlay />
    </div>
  ),
};

export const WithDialog: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Typical usage behind a modal — overlay covers the viewport; dialog sits above.',
      },
    },
  },
  render: () => (
    <div className="spark-overlay-demo">
      <div className="spark-overlay-demo-content">
        <p className="spark-overlay-demo-title">Dashboard</p>
        <p className="spark-overlay-demo-body">Main application surface.</p>
      </div>
      <Overlay />
      <div className="spark-overlay-demo-dialog" role="dialog" aria-modal="true" aria-label="Example dialog">
        <p className="spark-overlay-demo-dialog-title">Confirm action</p>
        <p className="spark-overlay-demo-dialog-body">Modal content appears above the overlay.</p>
      </div>
    </div>
  ),
};
