import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyMatrixItemRowStyle,
  storyMatrixSectionStyle,
} from '../Input/shared/storyHelpers';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    amount: { control: 'text' },
  },
  args: {
    amount: '21',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Spark Badge — compact count indicator for navigation and tabs. Anchors to interactive elements to surface real-time updates.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const AmountMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Common count values — single digit, double digit, and compact overflow.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {['1', '9', '21', '99+'].map((amount) => (
        <div key={amount} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{amount}</p>
          <Badge amount={amount} />
        </div>
      ))}
    </div>
  ),
};

export const OnNavigation: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Typical placement on a navigation label — badge sits beside the tab text, not inside table cells.',
      },
    },
  },
  render: () => (
    <div className="spark-badge-nav-demo">
      <span className="spark-badge-nav-label">Inbox</span>
      <Badge amount="21" />
    </div>
  ),
};
