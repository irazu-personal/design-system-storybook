import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyMatrixItemRowStartStyle,
  storyMatrixSectionStyle,
} from '../Input/shared/storyHelpers';
import { DropdownMenu, type DropdownMenuSelectType, type DropdownMenuSize } from './DropdownMenu';

const DEFAULT_ITEMS = Array.from({ length: 4 }, () => ({ label: 'Dropdown item text' }));

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/Dropdown Menu',
  component: DropdownMenu,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    size: { control: 'select', options: ['small', 'medium'] },
    selectType: { control: 'select', options: ['single-select', 'multi-select'] },
    showLabel: { control: 'boolean' },
    showFooter: { control: 'boolean' },
  },
  args: {
    open: true,
    size: 'medium',
    selectType: 'single-select',
    showLabel: true,
    showFooter: false,
    items: DEFAULT_ITEMS,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Spark Dropdown Menu — `InputSingleSelect` or `InputMultiSelect` trigger with the Dropdown panel. Click the field or chevron to toggle open/closed. Figma `821:103642`.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

const SIZES: DropdownMenuSize[] = ['small', 'medium'];
const SELECT_TYPES: DropdownMenuSelectType[] = ['single-select', 'multi-select'];

export const Default: Story = {};

export const Closed: Story = {
  args: { open: false },
};

export const Interactive: Story = {
  args: { open: undefined, defaultOpen: false },
  argTypes: { open: { control: false } },
};

export const MultiSelectOpen: Story = {
  args: {
    open: true,
    selectType: 'multi-select',
    tags: ['Tag', 'Tag', 'Tag'],
    overflowCount: 2,
  },
};

export const VariantMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Figma `821:103642` — open/closed × size × select type.',
      },
    },
  },
  render: () => (
    <div style={{ ...storyMatrixSectionStyle, gap: '32px' }}>
      {SELECT_TYPES.map((selectType) =>
        SIZES.map((size) => (
          <div key={`${selectType}-${size}`} style={storyMatrixItemRowStartStyle}>
            <p style={sizeLabelStyle}>
              {selectType} / {size}
            </p>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              <DropdownMenu
                open={false}
                size={size}
                selectType={selectType}
                text={selectType === 'single-select' ? 'Input' : undefined}
                tags={selectType === 'multi-select' ? ['Tag', 'Tag'] : []}
                overflowCount={selectType === 'multi-select' ? 2 : 0}
              />
              <DropdownMenu
                open
                size={size}
                selectType={selectType}
                text={selectType === 'single-select' ? 'Input' : undefined}
                tags={selectType === 'multi-select' ? ['Tag', 'Tag'] : []}
                overflowCount={selectType === 'multi-select' ? 2 : 0}
              />
            </div>
          </div>
        )),
      )}
    </div>
  ),
};
