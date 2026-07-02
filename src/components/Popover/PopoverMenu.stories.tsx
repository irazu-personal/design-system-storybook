import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyMatrixItemRowStyle,
  storyMatrixSectionStyle,
  variantLabelStyle,
} from '../Input/shared/storyHelpers';
import { PopoverMenu, type PopoverMenuType } from './PopoverMenu';
import { PopoverMenuItem, type PopoverMenuItemProps, type PopoverMenuItemState } from './PopoverMenuItem';
import type { PopoverTipDirection } from './shared/PopoverShell';

const STATE_MATRIX_ITEMS: PopoverMenuItemProps[] = [
  { label: 'Popover item text', visualState: 'default' },
  { label: 'Popover item text', visualState: 'hover' },
  { label: 'Popover item text', visualState: 'selected' },
  { label: 'Popover item text', visualState: 'disabled' },
];

const meta: Meta<typeof PopoverMenu> = {
  title: 'Components/Popover/Menu',
  component: PopoverMenu,
  tags: ['autodocs'],
  argTypes: {
    tipDirection: {
      control: 'select',
      options: ['right', 'left', 'bottom', 'top'] satisfies PopoverTipDirection[],
    },
    type: {
      control: 'select',
      options: ['regular', 'cascading', 'two-lines'] satisfies PopoverMenuType[],
    },
    tip: { control: 'boolean' },
    items: { control: false },
  },
  args: {
    tip: true,
    tipDirection: 'right',
    type: 'regular',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Context menu popover for secondary actions. Supports regular, cascading, and two-line item types. Figma `656:32182`.',
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
        <StoryComponent />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof PopoverMenu>;

export const Default: Story = {};

export const Cascading: Story = {
  args: {
    type: 'cascading',
  },
};

export const TwoLines: Story = {
  args: {
    type: 'two-lines',
  },
};

export const ItemStates: Story = {
  args: {
    items: STATE_MATRIX_ITEMS,
  },
};

export const NoTip: Story = {
  args: {
    tip: false,
  },
};

const TIP_DIRECTIONS: PopoverTipDirection[] = ['right', 'left', 'bottom', 'top'];

export const TipDirectionMatrix: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {TIP_DIRECTIONS.map((tipDirection) => (
        <div key={tipDirection} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{tipDirection}</p>
          <PopoverMenu tipDirection={tipDirection} />
        </div>
      ))}
    </div>
  ),
};

const MENU_TYPES: PopoverMenuType[] = ['regular', 'cascading', 'two-lines'];

export const TypeMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Figma `656:32182` — regular, cascading, and two-line menu layouts.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {MENU_TYPES.map((type) => (
        <div key={type} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{type}</p>
          <PopoverMenu type={type} />
        </div>
      ))}
    </div>
  ),
};

const ITEM_TYPES: PopoverMenuType[] = ['regular', 'two-lines', 'cascading'];
const ITEM_STATES: PopoverMenuItemState[] = ['default', 'hover', 'selected', 'disabled'];

export const ItemStateMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Figma `656:31914` — menu item states across item types.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {ITEM_STATES.map((state) => (
        <div key={state} style={storyMatrixItemRowStyle}>
          <p style={variantLabelStyle}>{state}</p>
          <div className="story-row">
            {ITEM_TYPES.map((type) => (
              <PopoverMenuItem
                key={type}
                type={type}
                visualState={state}
                title="Title"
                label="Popover item text"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
