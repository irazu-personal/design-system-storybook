import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyMatrixItemRowStartStyle,
  storyMatrixItemRowStyle,
  storyMatrixSectionStyle,
  variantLabelStyle,
} from '../Input/shared/storyHelpers';
import { Modal, type ModalProps } from './Modal';
import { ModalFooter } from './shared/ModalParts';
import { modalStoryDecorators, modalStoryParameters } from './shared/modalStoryShared';
import { ModalText } from './ModalText';

export type ModalType = 'slot' | 'text';

export type ModalStoryArgs = ModalProps & {
  type?: ModalType;
  content?: string;
};

function ModalStory({ type = 'slot', content, children, ...args }: ModalStoryArgs) {
  if (type === 'text') {
    return <ModalText content={content} {...args} />;
  }

  return <Modal {...args}>{children}</Modal>;
}

const meta: Meta<ModalStoryArgs> = {
  title: 'Components/Modal',
  component: ModalStory,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['slot', 'text'] satisfies ModalType[],
      description: 'Figma `Type` axis — Slot for custom body content, Text for confirmation copy.',
    },
    showOverlay: { control: 'boolean' },
    showSubtitle: { control: 'boolean' },
    showClose: { control: 'boolean' },
    showScrollBar: {
      control: 'boolean',
      if: { arg: 'type', eq: 'slot' },
    },
    showFooterSlot: { control: 'boolean' },
    footerType: { control: 'select', options: ['default', 'checkbox'] },
    danger: { control: 'boolean' },
    content: {
      control: 'text',
      if: { arg: 'type', eq: 'text' },
    },
  },
  args: {
    type: 'slot',
    showOverlay: true,
    showSubtitle: true,
    showClose: true,
    showScrollBar: true,
    showFooterSlot: false,
    footerType: 'default',
    danger: false,
    content:
      'You are about to save these changes. This will update the shared workspace settings. Are you sure you want to continue?',
  },
  parameters: {
    ...modalStoryParameters,
    docs: {
      ...modalStoryParameters.docs,
      description: {
        component:
          'Modal dialogs lock focus for critical tasks. Use `type` to switch between Slot (custom body) and Text (confirmation copy). Overlay must obscure navigation. Figma `674:65629`.',
      },
    },
  },
  decorators: modalStoryDecorators,
  render: (args) => <ModalStory {...args} />,
};

export default meta;
type Story = StoryObj<ModalStoryArgs>;

export const Default: Story = {};

export const TypeMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Slot modal for custom content vs Text modal for confirmation copy.',
      },
    },
  },
  render: () => (
    <div style={{ ...storyMatrixSectionStyle, padding: '2rem 0' }}>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>Slot</p>
        <Modal showOverlay />
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>Text</p>
        <ModalText showOverlay />
      </div>
    </div>
  ),
};

export const FooterMatrix: Story = {
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Footer variants — default vs checkbox slot, with optional danger primary action.',
      },
    },
  },
  render: () => {
    const footerTypes = ['default', 'checkbox'] as const;
    const dangerStates = [false, true] as const;

    return (
      <div style={storyMatrixSectionStyle}>
        {footerTypes.map((footerType) => (
          <div key={footerType} style={storyMatrixItemRowStyle}>
            <p style={variantLabelStyle}>{footerType}</p>
            <div className="story-row">
              {dangerStates.map((danger) => (
                <div key={String(danger)} style={{ minWidth: 320 }}>
                  <p style={{ ...variantLabelStyle, marginBottom: '0.5rem' }}>
                    {danger ? 'Danger' : 'Default'}
                  </p>
                  <ModalFooter
                    footerType={footerType}
                    danger={danger}
                    showFooterSlot={footerType === 'default'}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};
