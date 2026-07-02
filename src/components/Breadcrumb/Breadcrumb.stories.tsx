import type { Meta, StoryObj } from '@storybook/react';
import type React from 'react';
import { SparkIcon } from '../SparkIcon';
import {
  sizeLabelStyle,
  storyMatrixItemRowStyle,
  storyMatrixSectionStyle,
} from '../Input/shared/storyHelpers';
import { Breadcrumb, BreadcrumbChevron, type BreadcrumbItemData } from './Breadcrumb';

const BREADCRUMB_ICON_SLUGS = ['home', 'agent', 'library'] as const;
type BreadcrumbIconSlug = (typeof BREADCRUMB_ICON_SLUGS)[number];

const DEFAULT_ITEMS: BreadcrumbItemData[] = [
  { label: 'Breadcrumb Link', href: '#' },
  { label: 'Breadcrumb Link', href: '#' },
  { label: 'Breadcrumb Link', href: '#' },
  { label: 'Breadcrumb Link' },
];

type BreadcrumbStoryArgs = React.ComponentProps<typeof Breadcrumb> & {
  /** Storybook control — applies the selected icon to every item when enabled. */
  icon?: boolean;
  iconSlug?: BreadcrumbIconSlug;
  iconSize?: 'small' | 'medium';
};

function itemsWithIcon(
  items: BreadcrumbItemData[],
  showIcon?: boolean,
  iconSlug: BreadcrumbIconSlug = 'home',
  iconSize: 'small' | 'medium' = 'small',
): BreadcrumbItemData[] {
  if (!showIcon) {
    return items.map(({ icon: _icon, ...item }) => item);
  }
  const iconNode = <SparkIcon slug={iconSlug} size={iconSize} />;
  return items.map((item) => ({ ...item, icon: iconNode }));
}

const meta: Meta<BreadcrumbStoryArgs> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'boolean' },
    iconSlug: { control: 'select', options: [...BREADCRUMB_ICON_SLUGS] },
    iconSize: { control: 'radio', options: ['small', 'medium'] },
    items: { control: 'object' },
    type: { control: 'radio', options: ['navigation', 'steps'] },
    separatorShape: { control: 'radio', options: ['slash', 'chevron'] },
  },
  args: {
    icon: false,
    iconSlug: 'agent',
    iconSize: 'small',
    items: DEFAULT_ITEMS,
    separatorShape: 'slash',
  },
  render: ({ icon, iconSlug, iconSize, items, type, separatorShape, className }) => (
    <Breadcrumb
      type={type}
      separatorShape={separatorShape}
      className={className}
      items={itemsWithIcon(items, icon, iconSlug, iconSize)}
    />
  ),
  parameters: {
    docs: {
      description: {
        component:
          'Spark Breadcrumb — matches Figma Breadcrumb component. Supports 2–4 levels of hierarchy. The last item is always the current page (active). Use `type="steps"` for step-style items (tertiary past links, brand-blue active page). Use `separatorShape="chevron"` for chevron-right separators instead of slash. Optional icon on the left and `.Icon-Chevron` popover trigger (`chevron`, `chevronOpen`) on individual items.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {};

export const TwoLevels: Story = {
  name: 'Amount = 2',
  args: {
    items: [
      { label: 'Breadcrumb Link', href: '#' },
      { label: 'Breadcrumb Link' },
    ],
  },
};

export const ThreeLevels: Story = {
  name: 'Amount = 3',
  args: {
    items: [
      { label: 'Breadcrumb Link', href: '#' },
      { label: 'Breadcrumb Link', href: '#' },
      { label: 'Breadcrumb Link' },
    ],
  },
};

export const FourLevels: Story = {
  name: 'Amount = 4',
  args: {
    items: [
      { label: 'Breadcrumb Link', href: '#' },
      { label: 'Breadcrumb Link', href: '#' },
      { label: 'Breadcrumb Link', href: '#' },
      { label: 'Breadcrumb Link' },
    ],
  },
};

export const TypeMatrix: Story = {
  name: 'Type matrix',
  parameters: {
    docs: {
      description: {
        story:
          'Figma `.Breadcrumb-Item` type axis: Navigation (secondary links, primary active) or Steps (tertiary links, brand-blue active). Separator before the current page uses primary (navigation) or brand (steps).',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {(['navigation', 'steps'] as const).map((type) => (
        <div key={type} style={storyMatrixSectionStyle}>
          <p style={{ ...sizeLabelStyle, minWidth: 'auto', marginBottom: '0.25rem' }}>{type}</p>
          <Breadcrumb
            type={type}
            items={[
              { label: 'Breadcrumb Link', href: '#' },
              { label: 'Breadcrumb Link' },
            ]}
          />
          <Breadcrumb
            type={type}
            items={[
              { label: 'Breadcrumb Link', href: '#' },
              { label: 'Breadcrumb Link', href: '#' },
              { label: 'Breadcrumb Link' },
            ]}
          />
          <Breadcrumb
            type={type}
            items={[
              { label: 'Breadcrumb Link', href: '#' },
              { label: 'Breadcrumb Link', href: '#' },
              { label: 'Breadcrumb Link', href: '#' },
              { label: 'Breadcrumb Link' },
            ]}
          />
        </div>
      ))}
    </div>
  ),
};

export const SeparatorShapeMatrix: Story = {
  name: 'Separator shape matrix',
  parameters: {
    docs: {
      description: {
        story:
          'Separator shape from Figma `.Breadcrumb-Separator`: slash (`/`) or chevron-right icon. The separator before the current page uses primary (navigation type) or brand color (steps type).',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {(['slash', 'chevron'] as const).map((separatorShape) => (
        <div key={separatorShape} style={storyMatrixSectionStyle}>
          <p style={{ ...sizeLabelStyle, minWidth: 'auto', marginBottom: '0.25rem' }}>
            {separatorShape}
          </p>
          <div style={storyMatrixItemRowStyle}>
            <p style={sizeLabelStyle}>Navigation</p>
            <Breadcrumb
              separatorShape={separatorShape}
              items={[
                { label: 'Breadcrumb Link', href: '#' },
                { label: 'Breadcrumb Link', href: '#' },
                { label: 'Breadcrumb Link' },
              ]}
            />
          </div>
          <div style={storyMatrixItemRowStyle}>
            <p style={sizeLabelStyle}>Steps</p>
            <Breadcrumb
              type="steps"
              separatorShape={separatorShape}
              items={[
                { label: 'Breadcrumb Link', href: '#' },
                { label: 'Breadcrumb Link', href: '#' },
                { label: 'Breadcrumb Link' },
              ]}
            />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const ChevronFourLevels: Story = {
  name: 'Shape = Chevron, Amount = 4',
  args: {
    separatorShape: 'chevron',
    items: [
      { label: 'Breadcrumb Link', href: '#' },
      { label: 'Breadcrumb Link', href: '#' },
      { label: 'Breadcrumb Link', href: '#' },
      { label: 'Breadcrumb Link' },
    ],
  },
};

export const StepsTwoLevels: Story = {
  name: 'Type = Steps, Amount = 2',
  args: {
    type: 'steps',
    items: [
      { label: 'Breadcrumb Link', href: '#' },
      { label: 'Breadcrumb Link' },
    ],
  },
};

export const StepsThreeLevels: Story = {
  name: 'Type = Steps, Amount = 3',
  args: {
    type: 'steps',
    items: [
      { label: 'Breadcrumb Link', href: '#' },
      { label: 'Breadcrumb Link', href: '#' },
      { label: 'Breadcrumb Link' },
    ],
  },
};

export const StepsFourLevels: Story = {
  name: 'Type = Steps, Amount = 4',
  args: {
    type: 'steps',
    items: [
      { label: 'Breadcrumb Link', href: '#' },
      { label: 'Breadcrumb Link', href: '#' },
      { label: 'Breadcrumb Link', href: '#' },
      { label: 'Breadcrumb Link' },
    ],
  },
};

export const ItemStateMatrix: Story = {
  name: 'Item state matrix',
  parameters: {
    docs: {
      description: {
        story:
          'Figma `.Breadcrumb-Item` states (Default, Hover, Active) for Navigation and Steps types. Hover is shown via static preview classes.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>Default</p>
        <div className="story-row">
          <a
            href="#default-navigation"
            className="spark-breadcrumb-item spark-breadcrumb-item-link spark-breadcrumb-item-link-navigation"
          >
            <span className="spark-breadcrumb-icon">
              <SparkIcon slug="home" />
            </span>
            <span className="spark-breadcrumb-label">Breadcrumb Link</span>
            <BreadcrumbChevron />
          </a>
          <a
            href="#default-steps"
            className="spark-breadcrumb-item spark-breadcrumb-item-link spark-breadcrumb-item-link-steps"
          >
            <span className="spark-breadcrumb-icon">
              <SparkIcon slug="home" />
            </span>
            <span className="spark-breadcrumb-label">Breadcrumb Link</span>
            <BreadcrumbChevron />
          </a>
        </div>
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>Hover</p>
        <div className="story-row">
          <a
            href="#hover-navigation"
            className="spark-breadcrumb-item spark-breadcrumb-item-link spark-breadcrumb-item-link-navigation spark-breadcrumb-item-link-navigation-hover-demo"
          >
            <span className="spark-breadcrumb-icon">
              <SparkIcon slug="home" />
            </span>
            <span className="spark-breadcrumb-label">Breadcrumb Link</span>
            <BreadcrumbChevron state="default" />
          </a>
          <a
            href="#hover-steps"
            className="spark-breadcrumb-item spark-breadcrumb-item-link spark-breadcrumb-item-link-steps spark-breadcrumb-item-link-steps-hover-demo"
          >
            <span className="spark-breadcrumb-icon">
              <SparkIcon slug="home" />
            </span>
            <span className="spark-breadcrumb-label">Breadcrumb Link</span>
            <BreadcrumbChevron />
          </a>
        </div>
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>Active</p>
        <div className="story-row">
          <span className="spark-breadcrumb-item spark-breadcrumb-item-active" aria-current="page">
            <span className="spark-breadcrumb-icon">
              <SparkIcon slug="home" />
            </span>
            <span className="spark-breadcrumb-label">Breadcrumb Link</span>
            <BreadcrumbChevron state="active" />
          </span>
          <span
            className="spark-breadcrumb-item spark-breadcrumb-item-active-steps"
            aria-current="page"
          >
            <span className="spark-breadcrumb-icon">
              <SparkIcon slug="home" />
            </span>
            <span className="spark-breadcrumb-label">Breadcrumb Link</span>
            <BreadcrumbChevron state="active" />
          </span>
        </div>
      </div>
    </div>
  ),
};

export const IconChevronMatrix: Story = {
  name: 'Icon chevron matrix',
  parameters: {
    docs: {
      description: {
        story:
          'Figma `.Icon-Chevron` axes: State (Default, Active) and Open (No = chevron-down, Yes = chevron-up). Navigation hover/active use Active chevron color; Steps hover keeps Default chevron color.',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {(
        [
          ['Closed', false],
          ['Open', true],
        ] as const
      ).map(([label, open]) => (
        <div key={label} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{label}</p>
          <div className="story-row">
            <BreadcrumbChevron open={open} state="default" />
            <BreadcrumbChevron open={open} state="active" />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const AllAmounts: Story = {
  parameters: {
    docs: {
      description: {
        story: 'All supported breadcrumb depths: 2, 3, and 4 levels.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <Breadcrumb
        items={[
          { label: 'Breadcrumb Link', href: '#' },
          { label: 'Breadcrumb Link' },
        ]}
      />
      <Breadcrumb
        items={[
          { label: 'Breadcrumb Link', href: '#' },
          { label: 'Breadcrumb Link', href: '#' },
          { label: 'Breadcrumb Link' },
        ]}
      />
      <Breadcrumb
        items={[
          { label: 'Breadcrumb Link', href: '#' },
          { label: 'Breadcrumb Link', href: '#' },
          { label: 'Breadcrumb Link', href: '#' },
          { label: 'Breadcrumb Link' },
        ]}
      />
    </div>
  ),
};

export const WithIcon: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Icon is presented on the left side of a breadcrumb item. Use consistently — if one item has an icon, all items should have an icon.',
      },
    },
  },
  args: {
    icon: true,
    iconSlug: 'agent',
    iconSize: 'small',
    items: [
      { label: 'Breadcrumb Link', href: '#' },
      { label: 'Breadcrumb Link' },
    ],
  },
  render: ({ icon, iconSlug, iconSize, items, type, className }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <Breadcrumb
        type={type}
        className={className}
        items={itemsWithIcon(
          [
            { label: 'Breadcrumb Link', href: '#' },
            { label: 'Breadcrumb Link' },
          ],
          icon,
          iconSlug,
          iconSize,
        )}
      />
      <Breadcrumb
        items={itemsWithIcon(
          [
            { label: 'Breadcrumb Link', href: '#' },
            { label: 'Breadcrumb Link', href: '#' },
            { label: 'Breadcrumb Link' },
          ],
          true,
          'library',
          iconSize,
        )}
      />
    </div>
  ),
};

export const WithChevron: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Chevron signals a popover menu trigger. Keep 4px spacing between the popover and the breadcrumb bar.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <Breadcrumb
        items={[
          { label: 'Breadcrumb Link', href: '#' },
          { label: 'Breadcrumb Link', chevron: true, chevronOpen: true },
        ]}
      />
      <Breadcrumb
        items={[
          { label: 'Breadcrumb Link', href: '#' },
          { label: 'Breadcrumb Link', href: '#', chevron: true },
          { label: 'Breadcrumb Link', chevron: true },
        ]}
      />
    </div>
  ),
};

export const WithIconAndChevron: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Combined icon and chevron on breadcrumb items.',
      },
    },
  },
  args: {
    icon: true,
    iconSlug: 'library',
    iconSize: 'small',
    items: [
      { label: 'Breadcrumb Link', href: '#' },
      { label: 'Breadcrumb Link', chevron: true },
    ],
  },
};

const INTERACTIVE_ITEMS: BreadcrumbItemData[] = [
  { label: 'Projects', href: '#projects' },
  { label: 'Machine Learning', href: '#ml' },
  { label: 'Sentiment Model' },
];

export const NavigationExample: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Real-world usage inside a page header. Breadcrumbs let users navigate back through the hierarchy.',
      },
    },
  },
  render: () => (
    <div
      style={{
        padding: '1.5rem',
        background: 'var(--primitive-neutral-100)',
        borderRadius: 'var(--dimension-border-radius-08)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}
    >
      <Breadcrumb items={INTERACTIVE_ITEMS} />
      <h2
        style={{
          margin: 0,
          fontFamily: 'var(--typography-font-family-platform)',
          fontSize: 'var(--typography-font-size-heading2)',
          fontWeight: 'var(--typography-font-weight-semibold)',
          lineHeight: 'var(--typography-line-height-heading2)',
          color: 'var(--semantic-content-primary)',
        }}
      >
        Sentiment Model
      </h2>
      <p
        style={{
          margin: 0,
          fontFamily: 'var(--typography-font-family-platform)',
          fontSize: 'var(--typography-font-size-base)',
          color: 'var(--semantic-content-secondary)',
        }}
      >
        Create and manage your projects. Open any project to view details and collaborate with your team.
      </p>
    </div>
  ),
};
