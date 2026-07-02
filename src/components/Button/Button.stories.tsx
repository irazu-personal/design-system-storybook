import type { Meta, StoryObj } from '@storybook/react';
import {
  Button,
  PlusIcon,
  ICON_BUTTON_DANGER_VARIANTS,
  ICON_BUTTON_VARIANTS,
  TEXT_BUTTON_DANGER_VARIANTS,
  type ButtonSize,
  type ButtonVariant,
} from './Button';
import { SparkIcon } from '../SparkIcon';
import { sizeLabelStyle, storyMatrixItemRowDocStyle, storyMatrixItemRowStyle, storyMatrixSectionStyle, storyMatrixSizeExampleWrapStyle, storyMatrixVariantExampleWrapStyle, variantLabelStyle } from '../Input/shared/storyHelpers';

function buttonIconSize(size: ButtonSize): 'small' | 'medium' {
  return size === 'tiny' || size === 'small' ? 'small' : 'medium';
}

function EndChevronIcon({ size }: { size: ButtonSize }) {
  return <SparkIcon slug="chevron-right" size={buttonIconSize(size)} />;
}

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['tiny', 'small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'ghost', 'link', 'text'],
    },
    danger: { control: 'boolean' },
    disabled: { control: 'boolean' },
    showStartIcon: { control: 'boolean', description: 'Default plus icon before the label.' },
    showEndIcon: { control: 'boolean', description: 'Default chevron-right icon after the label.' },
    startIcon: { control: false },
    endIcon: { control: false },
  },
  args: {
    children: 'Button',
    size: 'medium',
    variant: 'primary',
    danger: false,
    disabled: false,
    showStartIcon: false,
    showEndIcon: true,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Spark Button — matches Figma Button Main (text) and Button Icon (square/circle). When rendered without children it automatically becomes an icon button with a hover/focus tooltip. Provide `tooltip`, `aria-label`, or `iconSlug` for tooltip text (fallback: `placeholder`). Danger text buttons: Primary, Secondary, Ghost. Danger icon buttons: Primary, Secondary, Tertiary.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

const SIZES: ButtonSize[] = ['tiny', 'small', 'medium', 'large'];
const TEXT_VARIANTS: ButtonVariant[] = [
  'primary',
  'secondary',
  'tertiary',
  'ghost',
  'link',
  'text',
];

export const Default: Story = {};

export const AllSizes: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {SIZES.map((size) => (
        <div key={size} style={storyMatrixItemRowDocStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <div style={storyMatrixSizeExampleWrapStyle}>
            <Button size={size}>{size}</Button>
          </div>
        </div>
      ))}
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {TEXT_VARIANTS.map((variant) => (
        <div key={variant} style={storyMatrixItemRowDocStyle}>
          <p style={variantLabelStyle}>{variant}</p>
          <div style={storyMatrixVariantExampleWrapStyle}>
            <Button variant={variant}>{variant}</Button>
          </div>
        </div>
      ))}
    </div>
  ),
};

export const DangerVariants: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Figma Button Main danger types: Primary, Secondary, and Ghost only. Tertiary has no danger variant.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {TEXT_BUTTON_DANGER_VARIANTS.map((variant) => (
        <div key={variant} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{variant}</p>
          <Button
            variant={variant}
            danger
            startIcon={<PlusIcon size="medium" />}
            endIcon={<EndChevronIcon size="medium" />}
          >
            Button
          </Button>
        </div>
      ))}
    </div>
  ),
};

export const GhostButtons: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Text ghost: blue label with blue-tint hover/press. Danger ghost: transparent → pink hover → pink + red border on press.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>default</p>
        <Button
          variant="ghost"
          startIcon={<PlusIcon size="medium" />}
          endIcon={<EndChevronIcon size="medium" />}
        >
          Button
        </Button>
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>danger</p>
        <Button variant="ghost" danger startIcon={<PlusIcon size="medium" />} endIcon={<EndChevronIcon size="medium" />}>
          Button
        </Button>
      </div>
    </div>
  ),
};

export const TextButtons: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Figma `507:36896` — neutral text button with transparent background. Disabled uses `--semantic-button-disabled-content-on-action`.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {SIZES.map((size) => (
        <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <div className="story-row">
            <Button size={size} variant="text">
              Button
            </Button>
            <Button size={size} variant="text" disabled>
              Button
            </Button>
          </div>
        </div>
      ))}
    </div>
  ),
};

export const WithStartIcon: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {SIZES.map((size) => (
        <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <Button size={size} startIcon={<PlusIcon size={size} />}>
            Add item
          </Button>
        </div>
      ))}
    </div>
  ),
};

export const WithEndIcon: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {SIZES.map((size) => (
        <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <Button size={size} endIcon={<EndChevronIcon size={size} />}>
            Next
          </Button>
        </div>
      ))}
    </div>
  ),
};

export const WithBothIcons: Story = {
  render: () => (
    <div className="story-row">
      <Button startIcon={<PlusIcon size="medium" />} endIcon={<EndChevronIcon size="medium" />}>
        Button
      </Button>
      <Button variant="secondary" startIcon={<PlusIcon size="medium" />} endIcon={<EndChevronIcon size="medium" />}>
        Button
      </Button>
      <Button variant="ghost" startIcon={<PlusIcon size="medium" />} endIcon={<EndChevronIcon size="medium" />}>
        Button
      </Button>
      <Button variant="tertiary" startIcon={<PlusIcon size="medium" />} endIcon={<EndChevronIcon size="medium" />}>
        Button
      </Button>
    </div>
  ),
};

export const IconAllSizes: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Icon button sizes — no children = auto icon-only. Primary variant.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {SIZES.map((size) => (
        <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <Button size={size} aria-label={size} />
        </div>
      ))}
    </div>
  ),
};

export const IconAllVariants: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Figma Button Icon types: Primary, Secondary, Tertiary, Ghost. Medium size.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {ICON_BUTTON_VARIANTS.map((variant) => (
        <div key={variant} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{variant}</p>
          <Button variant={variant} aria-label={variant} />
        </div>
      ))}
    </div>
  ),
};

export const IconDangerVariants: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Figma Button Icon danger types: Primary, Secondary, and Tertiary only. No Ghost danger. Medium size.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {ICON_BUTTON_DANGER_VARIANTS.map((variant) => (
        <div key={variant} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{variant}</p>
          <Button variant={variant} danger aria-label={`${variant} danger`} />
        </div>
      ))}
    </div>
  ),
};

export const IconDisabled: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {(['primary', 'secondary', 'tertiary', 'ghost'] as const).map((variant) => (
        <div key={variant} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{variant}</p>
          <Button variant={variant} disabled aria-label={`${variant} disabled`} />
        </div>
      ))}
    </div>
  ),
};

export const IconTooltip: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Icon-only buttons show a tooltip on hover and keyboard focus. Tooltip text resolves from `tooltip` → `aria-label` → `iconSlug` map → `placeholder`. Overlay gap is 4px (`--dimension-spacing-04`). Disabled buttons do not show tooltips.',
      },
    },
  },
  render: () => (
    <div style={{ ...storyMatrixSectionStyle, padding: '48px 16px' }}>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>aria-label</p>
        <Button variant="ghost" aria-label="Filter" iconSlug="filter" />
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>iconSlug</p>
        <Button variant="ghost" iconSlug="export" />
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>tooltip prop</p>
        <Button variant="ghost" tooltip="Custom label" />
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>disabled</p>
        <Button variant="ghost" disabled aria-label="No tooltip when disabled" />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {(['primary', 'secondary', 'tertiary', 'ghost'] as const).map((variant) => (
        <div key={variant} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{variant}</p>
          <Button variant={variant} disabled>
            {variant}
          </Button>
        </div>
      ))}
    </div>
  ),
};
