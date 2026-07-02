import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyMatrixFieldWrapStyle,
  storyMatrixItemRowStartStyle,
  storyMatrixSectionStyle,
} from '../Input/shared/storyHelpers';
import { CardProjects, type CardProjectsStatus } from './CardProjects';

const meta: Meta<typeof CardProjects> = {
  title: 'Components/Cards/Projects',
  component: CardProjects,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['success', 'processing', 'warning', 'error'] satisfies CardProjectsStatus[],
    },
    footer: { control: 'boolean' },
    showStatus: { control: 'boolean' },
  },
  args: {
    status: 'success',
    footer: true,
    showStatus: true,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Project dashboard card for task status, metadata, and footer actions. Keep text link + ghost actions — do not swap to solid primary buttons.',
      },
    },
  },
  decorators: [
    (StoryComponent) => (
      <div
        style={{
          background: 'var(--semantic-surface-canvas)',
          padding: '1.5rem',
          minHeight: '100%',
        }}
      >
        <div style={{ width: '100%', maxWidth: '400px' }}>
          <StoryComponent />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CardProjects>;

export const Default: Story = {};

export const WithoutFooter: Story = {
  args: {
    footer: false,
  },
};

const STATUSES: CardProjectsStatus[] = ['success', 'processing', 'warning', 'error'];

export const StatusMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Figma `5551:17807` — pipeline status badges.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {STATUSES.map((status) => (
        <div key={status} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{status}</p>
          <div style={{ ...storyMatrixFieldWrapStyle, maxWidth: '400px', width: '100%' }}>
            <CardProjects status={status} />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const GridPreview: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Documentation grid preview with mixed status cards.',
      },
    },
  },
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1rem',
        width: '100%',
        maxWidth: '720px',
      }}
    >
      <CardProjects status="success" />
      <CardProjects status="processing" />
      <CardProjects status="warning" />
      <CardProjects status="error" />
    </div>
  ),
};
