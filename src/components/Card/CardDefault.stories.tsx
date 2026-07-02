import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyMatrixFieldWrapStyle,
  storyMatrixItemRowStartStyle,
  storyMatrixSectionStyle,
  variantLabelStyle,
} from '../Input/shared/storyHelpers';
import { CardDefault, type CardDefaultBorder, type CardDefaultType } from './CardDefault';

const meta: Meta<typeof CardDefault> = {
  title: 'Components/Cards/Default',
  component: CardDefault,
  tags: ['autodocs'],
  argTypes: {
    border: { control: 'select', options: ['no', 'yes'] satisfies CardDefaultBorder[] },
    type: { control: 'select', options: ['default', 'collapsed'] satisfies CardDefaultType[] },
    open: { control: 'boolean' },
    showFooter: { control: 'boolean' },
    showScrollBar: { control: 'boolean' },
    showIconButtonPrefix: { control: 'boolean' },
    showIconButtonSuffix: { control: 'boolean' },
    showSecondaryButton: { control: 'boolean' },
    showMainCta: { control: 'boolean' },
    showSubtitle: { control: 'boolean' },
  },
  args: {
    border: 'no',
    type: 'default',
    open: false,
    showFooter: false,
    showScrollBar: false,
    showIconButtonPrefix: false,
    showIconButtonSuffix: false,
    showSecondaryButton: false,
    showMainCta: false,
    showSubtitle: true,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Flexible container for grouping related UI. Use **border=yes** on white backgrounds; **border=no** on tinted canvases. Set **type=collapsed** for accordion-style expand/collapse with a header chevron. Only one primary button per page view.',
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
        <div style={{ width: '100%', maxWidth: '690px' }}>
          <StoryComponent />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CardDefault>;

export const Default: Story = {};

export const WithBorder: Story = {
  args: {
    border: 'yes',
  },
};

export const WithFooter: Story = {
  args: {
    showFooter: true,
  },
};

export const WithScrollBar: Story = {
  args: {
    showScrollBar: true,
  },
};

export const RightActionsAllOn: Story = {
  args: {
    showIconButtonPrefix: true,
    showIconButtonSuffix: true,
    showSecondaryButton: true,
    showMainCta: true,
    showFooter: true,
  },
};

export const HeaderElementsMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Figma `5558:47407` — all header action slots on vs off.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>all on</p>
        <div style={{ ...storyMatrixFieldWrapStyle, maxWidth: '690px', width: '100%' }}>
          <CardDefault
            showIconButtonPrefix
            showIconButtonSuffix
            showSecondaryButton
            showMainCta
          />
        </div>
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>all off</p>
        <div style={{ ...storyMatrixFieldWrapStyle, maxWidth: '690px', width: '100%' }}>
          <CardDefault showSubtitle={false} />
        </div>
      </div>
    </div>
  ),
};

export const BorderMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Figma `5340:16531` — border off vs on.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {(['no', 'yes'] as CardDefaultBorder[]).map((border) => (
        <div key={border} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{border}</p>
          <div style={{ ...storyMatrixFieldWrapStyle, maxWidth: '690px', width: '100%' }}>
            <CardDefault border={border} />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const FeatureMatrix: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={variantLabelStyle}>Footer off</p>
        <div style={{ ...storyMatrixFieldWrapStyle, maxWidth: '690px', width: '100%' }}>
          <CardDefault />
        </div>
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={variantLabelStyle}>Footer on</p>
        <div style={{ ...storyMatrixFieldWrapStyle, maxWidth: '690px', width: '100%' }}>
          <CardDefault showFooter />
        </div>
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={variantLabelStyle}>Scroll bar</p>
        <div style={{ ...storyMatrixFieldWrapStyle, maxWidth: '690px', width: '100%' }}>
          <CardDefault showScrollBar />
        </div>
      </div>
    </div>
  ),
};

export const CollapsedClosed: Story = {
  args: {
    type: 'collapsed',
    open: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Figma `Type=Collpased`, `Open=No` — header with downward chevron; content hidden.',
      },
    },
  },
};

export const CollapsedOpen: Story = {
  args: {
    type: 'collapsed',
    open: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Figma `Type=Collpased`, `Open=Yes` — header with upward chevron; content visible.',
      },
    },
  },
};

export const CollapsedMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Figma `5340:16531` — collapsed vs open accordion-style card.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>collapsed</p>
        <div style={{ ...storyMatrixFieldWrapStyle, maxWidth: '690px', width: '100%' }}>
          <CardDefault type="collapsed" />
        </div>
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>open</p>
        <div style={{ ...storyMatrixFieldWrapStyle, maxWidth: '690px', width: '100%' }}>
          <CardDefault type="collapsed" open />
        </div>
      </div>
    </div>
  ),
};

export const CollapsedWithBorder: Story = {
  args: {
    type: 'collapsed',
    border: 'yes',
    open: true,
  },
};
