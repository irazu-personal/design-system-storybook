import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyMatrixItemRowStyle,
  storyMatrixSectionStyle,
  variantLabelStyle,
} from '../Input/shared/storyHelpers';
import { ActionBar } from './ActionBar';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    showBackButton: { control: 'boolean' },
    showBreadcrumb: { control: 'boolean' },
    showTitle: { control: 'boolean' },
    showSubtitleText: { control: 'boolean' },
    showActionBar: { control: 'boolean' },
  },
  args: {
    showBackButton: false,
    showBreadcrumb: true,
    showTitle: true,
    showSubtitleText: true,
    showActionBar: true,
    title: 'Projects',
    subtitle:
      'Create and manage your projects. Open any project to view details and collaborate with your team.',
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Main Header anchors full-page layouts with breadcrumbs, optional back navigation, page title and description, and a right-aligned action bar. Use one primary CTA per page. Icon-only action bar buttons show hover/focus tooltips with a 4px overlay gap. Figma `1269:16923`.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};

export const WithBackButton: Story = {
  args: {
    showBackButton: true,
  },
};

export const ElementsMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Figma documentation matrix — full header vs action-bar-only strip. Keep a single primary CTA in the action bar.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>All off</p>
        <div style={{ flex: 1, minWidth: 0 }}>
          <Header />
        </div>
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>All on</p>
        <ActionBar />
      </div>
    </div>
  ),
};

export const BackButtonMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use the back button when users need a clear path backward through hierarchical pages.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {([false, true] as const).map((showBackButton) => (
        <div key={String(showBackButton)} style={storyMatrixItemRowStyle}>
          <p style={variantLabelStyle}>{showBackButton ? 'Back on' : 'Back off'}</p>
          <div style={{ flex: 1, minWidth: 0 }}>
            <Header showBackButton={showBackButton} />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const ActionBarMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Action bar anatomy — overflow menu, icon button, secondary action, and primary CTA.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStyle}>
        <p style={variantLabelStyle}>Default</p>
        <ActionBar />
      </div>
    </div>
  ),
};
