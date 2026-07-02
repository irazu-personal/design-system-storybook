import type { Meta, StoryObj } from '@storybook/react';
import { TagGeneral, type TagGeneralVariant } from './TagGeneral';
import {
  storyMatrixItemRowDocStyle,
  storyMatrixSectionStyle,
  storyMatrixVariantExampleWrapStyle,
  variantLabelStyle,
} from '../Input/shared/storyHelpers';

const meta: Meta<typeof TagGeneral> = {
  title: 'Components/Tags/General',
  component: TagGeneral,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Spark Tag General — 22px detail tags. **closeable** shows the remove icon on hover (always visible when **checked**). **checked** applies the selected blue surface.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TagGeneral>;

const VARIANTS: TagGeneralVariant[] = ['default', 'closeable', 'add-new'];

export const Default: Story = {};

export const VariantMatrix: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Figma `711:100020` — types at Checkable=No (top) and Checkable=Yes / checked (bottom).',
      },
    },
  },
  render: () => (
    <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowDocStyle}>
        <p style={variantLabelStyle}>Checkable = No</p>
        <div className="story-row" style={{ ...storyMatrixVariantExampleWrapStyle, gap: '0.75rem' }}>
          {VARIANTS.map((variant) => (
            <TagGeneral key={variant} variant={variant} showClose={variant === 'closeable'} />
          ))}
        </div>
      </div>
      <div style={storyMatrixItemRowDocStyle}>
        <p style={variantLabelStyle}>Checkable = Yes</p>
        <div className="story-row" style={{ ...storyMatrixVariantExampleWrapStyle, gap: '0.75rem' }}>
          <TagGeneral checked />
          <TagGeneral variant="closeable" checked showClose />
        </div>
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {VARIANTS.map((variant) => (
        <div key={variant} style={storyMatrixItemRowDocStyle}>
          <p style={variantLabelStyle}>{variant}</p>
          <div style={storyMatrixVariantExampleWrapStyle}>
            <TagGeneral variant={variant} showClose={variant === 'closeable'} />
          </div>
        </div>
      ))}
      <div style={storyMatrixItemRowDocStyle}>
        <p style={variantLabelStyle}>checked</p>
        <div style={storyMatrixVariantExampleWrapStyle}>
          <TagGeneral checked />
        </div>
      </div>
      <div style={storyMatrixItemRowDocStyle}>
        <p style={variantLabelStyle}>closeable + checked</p>
        <div style={storyMatrixVariantExampleWrapStyle}>
          <TagGeneral variant="closeable" checked showClose />
        </div>
      </div>
    </div>
  ),
};
