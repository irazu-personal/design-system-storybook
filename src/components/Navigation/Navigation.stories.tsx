import type { Meta, StoryObj } from '@storybook/react';
import { sizeLabelStyle, storyMatrixItemRowStyle, storyMatrixSectionStyle } from '../Input/shared/storyHelpers';
import { Navigation, NavigationTab, type NavigationTabState } from './Navigation';

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Spark Main Navigation — 60px inverse bar with logo, Beta tag, primary tabs, help link, notifications, settings, and avatar.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Navigation>;

const TAB_STATES: NavigationTabState[] = ['active', 'inactive', 'hover', 'disabled'];

export const Default: Story = {
  render: (args) => (
    <div className="spark-navigation-story-wrap">
      <Navigation {...args} />
    </div>
  ),
};

export const TabStateMatrix: Story = {
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Figma `305:4125` — active, inactive, hover, and disabled tab states.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {TAB_STATES.map((state) => (
        <div key={state} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{state}</p>
          <div className="spark-navigation-tab-matrix">
            <NavigationTab label="Projects" state={state} />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const WithoutBeta: Story = {
  args: {
    showBeta: false,
  },
  render: (args) => (
    <div className="spark-navigation-story-wrap">
      <Navigation {...args} />
    </div>
  ),
};
