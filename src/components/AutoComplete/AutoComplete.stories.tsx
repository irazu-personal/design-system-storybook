import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  sizeLabelStyle,
  storyMatrixItemRowStartStyle,
  storyMatrixSectionStyle,
} from '../Input/shared/storyHelpers';
import { AutoComplete, type AutoCompleteSize, type AutoCompleteType } from './AutoComplete';

const DEFAULT_ITEMS = Array.from({ length: 4 }, () => ({ label: 'Dropdown item text' }));

const meta: Meta<typeof AutoComplete> = {
  title: 'Components/Auto-complete',
  component: AutoComplete,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    size: { control: 'select', options: ['small', 'medium'] },
    type: { control: 'select', options: ['default', 'multi-select'] },
    showFooter: { control: 'boolean' },
    fill: { control: 'select', options: ['empty', 'filled'] },
    visualState: { control: 'select', options: ['default', 'hover', 'click-on', 'disabled'] },
  },
  args: {
    open: true,
    size: 'medium',
    type: 'default',
    value: 'Search',
    fill: 'filled',
    showFooter: false,
    items: DEFAULT_ITEMS,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Spark Auto-complete — Search input with Dropdown suggestions. Figma `820:102093`. The dropdown panel appears only when the search field is **filled** and `open` is true.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AutoComplete>;

const SIZES: AutoCompleteSize[] = ['small', 'medium'];
const TYPES: AutoCompleteType[] = ['default', 'multi-select'];

export const Default: Story = {};

export const Closed: Story = {
  args: { open: false, fill: 'filled', value: 'Search' },
};

export const EmptyNoPanel: Story = {
  args: { open: true, fill: 'empty', value: '' },
};

export const Interactive: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: 256 }}>
        <button type="button" onClick={() => setOpen((value) => !value)}>
          Toggle panel ({open ? 'open' : 'closed'})
        </button>
        <AutoComplete open={open} value="Search" fill="filled" />
      </div>
    );
  },
};

export const MultiSelectOpen: Story = {
  args: {
    open: true,
    type: 'multi-select',
    fill: 'filled',
    tags: ['Tag', 'Tag', 'Tag'],
    overflowCount: 2,
  },
};

export const VariantMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Figma `820:102093` — open × size × type. Dropdown shows only with **filled** search input.',
      },
    },
  },
  render: () => (
    <div style={{ ...storyMatrixSectionStyle, gap: '32px' }}>
      {TYPES.map((type) =>
        SIZES.map((size) => (
          <div key={`${type}-${size}`} style={storyMatrixItemRowStartStyle}>
            <p style={sizeLabelStyle}>
              {type} / {size}
            </p>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              <AutoComplete
                open={false}
                size={size}
                type={type}
                fill="filled"
                value={type === 'default' ? 'Search' : undefined}
                tags={type === 'multi-select' ? ['Tag', 'Tag'] : []}
                overflowCount={type === 'multi-select' ? 2 : 0}
              />
              <AutoComplete
                open
                size={size}
                type={type}
                fill="filled"
                value={type === 'default' ? 'Search' : undefined}
                tags={type === 'multi-select' ? ['Tag', 'Tag'] : []}
                overflowCount={type === 'multi-select' ? 2 : 0}
              />
            </div>
          </div>
        )),
      )}
    </div>
  ),
};
