import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyCanvasDecorator,
  storyMatrixItemRowStyle,
  storyMatrixSectionStyle,
  variantLabelStyle,
} from '../Input/shared/storyHelpers';
import {
  DEFAULT_KEY_METRICS_ITEMS,
  KEY_METRICS_TITLE_ICON_SLUGS,
  KeyMetrics,
  type KeyMetricsAmount,
  type KeyMetricsTitleIconSlug,
} from './KeyMetrics';

const meta: Meta<typeof KeyMetrics> = {
  title: 'Components/Widgets/Key Metrics',
  component: KeyMetrics,
  tags: ['autodocs'],
  argTypes: {
    amount: { control: 'select', options: ['1', '2', '3'] satisfies KeyMetricsAmount[] },
    showTitleIcon: { control: 'boolean', name: 'Show title icon' },
    iconSlug: {
      control: 'select',
      name: 'Swap title icon',
      options: [...KEY_METRICS_TITLE_ICON_SLUGS] satisfies KeyMetricsTitleIconSlug[],
    },
    showFeedbackIcons: { control: 'boolean', name: 'Show feedback icon' },
    items: { control: false },
  },
  args: {
    amount: '3',
    items: DEFAULT_KEY_METRICS_ITEMS,
    iconSlug: 'tag',
    showFeedbackIcons: true,
  },
  decorators: [storyCanvasDecorator],
  parameters: {
    docs: {
      description: {
        component:
          'Key Metrics widget — horizontal summary card with 1, 2, or 3 metric items separated by vertical dividers. Each item can set `showTitleIcon` (Examples in default data). The **Show title icon** control overrides all items when toggled. Swap the glyph with `iconSlug` and control the metric feedback icon with `showFeedbackIcons`.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KeyMetrics>;

const AMOUNTS: KeyMetricsAmount[] = ['1', '2', '3'];

export const Default: Story = {};

export const Amounts: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {AMOUNTS.map((amount) => (
        <div key={amount} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{amount}</p>
          <KeyMetrics amount={amount} />
        </div>
      ))}
    </div>
  ),
};

export const IconMatrix: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStyle}>
        <p style={variantLabelStyle}>Both icons</p>
        <KeyMetrics amount="1" showTitleIcon showFeedbackIcons />
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={variantLabelStyle}>Title icon only</p>
        <KeyMetrics amount="1" showTitleIcon showFeedbackIcons={false} />
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={variantLabelStyle}>Feedback icon only</p>
        <KeyMetrics amount="1" showTitleIcon={false} showFeedbackIcons />
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={variantLabelStyle}>No icons</p>
        <KeyMetrics amount="1" showTitleIcon={false} showFeedbackIcons={false} />
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={variantLabelStyle}>Swap title icon</p>
        <KeyMetrics
          amount="1"
          showTitleIcon
          iconSlug="description"
          items={[{ title: 'Documents', metrics: '14' }]}
        />
      </div>
    </div>
  ),
};
