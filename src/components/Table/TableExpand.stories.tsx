import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { storyMatrixSectionStyle, variantLabelStyle } from '../Input/shared/storyHelpers';
import { TableExpand } from './TableExpand';
import { TableRowExpandable, TableRowLevel, type TableRowExpandableState } from './TableRowExpandable';
import { EXPAND_NESTED_ROWS } from './tableShared';

const ROW_STATES: TableRowExpandableState[] = ['default', 'hover', 'disabled'];

const meta: Meta<typeof TableExpand> = {
  title: 'Components/Table/Table Expand',
  component: TableExpand,
  tags: ['autodocs'],
  args: {
    showMasterRow: false,
    showNotification: false,
  },
  parameters: { layout: 'fullscreen' },
  decorators: [
    (StoryComponent) => (
      <div style={{ background: 'var(--semantic-surface-canvas)', padding: '1.5rem', minHeight: '100%' }}>
        <StoryComponent />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TableExpand>;

function CollapseInteractionDemo() {
  const [expanded, setExpanded] = useState(true);

  return (
    <div style={storyMatrixSectionStyle}>
      <p style={variantLabelStyle}>Click the chevron to collapse or expand nested rows</p>
      <div className="spark-table-body-outer-border spark-table-expand" style={{ background: 'var(--semantic-surface-white)' }}>
        <TableRowExpandable
          expanded={expanded}
          onExpandedChange={setExpanded}
          className={expanded ? 'spark-table-row-expandable-open' : 'spark-table-row-last'}
          showTextButton
        />
        {expanded
          ? EXPAND_NESTED_ROWS.map((row, index) => (
              <TableRowLevel
                key={`collapse-demo-${index}`}
                title={row.title}
                subtitle={row.subtitle}
                count={row.count}
                className={index === EXPAND_NESTED_ROWS.length - 1 ? 'spark-table-row-last' : ''}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export const CollapseInteraction: Story = {
  render: () => <CollapseInteractionDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive expand/collapse — nested rows hide when the chevron is pressed.',
      },
    },
  },
};

export const Default: Story = {};

export const RowStates: Story = {
  render: () => (
    <div style={storyMatrixSectionStyle}>
      {ROW_STATES.map((state) => (
        <div key={state} style={storyMatrixSectionStyle}>
          <p style={variantLabelStyle}>{state}</p>
          <div
            className="spark-table-body-outer-border spark-table-grid-wrap spark-table-expand"
            style={{ background: 'var(--semantic-surface-white)' }}
          >
            <div className="spark-table-grid">
              <TableRowExpandable
                state={state}
                expanded
                className="spark-table-row-last"
                showTextButton
                showActionIcon
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Figma `984:34126` — default, hover, and disabled expandable parent row states.',
      },
    },
  },
};
