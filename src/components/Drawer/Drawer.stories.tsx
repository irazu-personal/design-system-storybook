import type { CSSProperties, ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  sizeLabelStyle,
  storyMatrixItemRowStyle,
  storyMatrixSectionStyle,
  variantLabelStyle,
} from '../Input/shared/storyHelpers';
import { SparkIcon } from '../SparkIcon';
import { Drawer, type DrawerOverlay, type DrawerSlotPadding } from './Drawer';
import { DrawerButtonIcon, type DrawerButtonIconVisualState } from './DrawerButtonIcon';
import { DrawerHeader } from './DrawerHeader';
import { DrawerItem } from './DrawerItem';
import { DrawerToolBar, type DrawerToolBarType } from './DrawerToolBar';
import { DEFAULT_DRAWER_STEPS_ITEMS, DRAWER_FULL_WIDTH, type DrawerToolbarStepId } from './drawerConstants';

const DRAWER_MATRIX_ROW_HEIGHT = 874;

const drawerMatrixSectionStyle: CSSProperties = {
  ...storyMatrixSectionStyle,
  width: '100%',
};

const drawerCompactSectionStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: 'fit-content',
  maxWidth: '100%',
  padding: 'var(--dimension-spacing-32)',
  boxSizing: 'border-box',
};

const drawerMatrixRowStyle: CSSProperties = {
  ...storyMatrixItemRowStyle,
  width: '100%',
  minHeight: DRAWER_MATRIX_ROW_HEIGHT,
};

const drawerCompactRowStyle: CSSProperties = {
  ...storyMatrixItemRowStyle,
  alignItems: 'flex-start',
  width: '100%',
};

const drawerButtonIconMatrixRowStyle: CSSProperties = {
  ...storyMatrixItemRowStyle,
  alignItems: 'center',
  width: '100%',
};

const drawerHeaderMatrixRowStyle: CSSProperties = {
  ...storyMatrixItemRowStyle,
  alignItems: 'center',
  width: '100%',
};

const drawerHeaderMatrixExampleStyle: CSSProperties = {
  flex: '1 1 auto',
  width: '100%',
  minWidth: 0,
};

const drawerMatrixExampleStyle: CSSProperties = {
  flex: '1 1 auto',
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
};

function DrawerFullStoryDecorator(StoryComponent: () => ReactNode) {
  return (
    <div
      style={{
        background: 'var(--semantic-surface-canvas)',
        padding: '1.5rem',
        minHeight: '100vh',
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
      }}
    >
      <StoryComponent />
    </div>
  );
}

function DrawerCompactStoryDecorator(StoryComponent: () => ReactNode) {
  return (
    <div
      style={{
        background: 'var(--semantic-surface-canvas)',
        padding: '1.5rem',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <StoryComponent />
    </div>
  );
}

const drawerFullStory: Partial<Story> = {
  decorators: [DrawerFullStoryDecorator],
};

const drawerCompactStory: Partial<Story> = {
  decorators: [DrawerCompactStoryDecorator],
};

const drawerCompactHeaderSectionStyle: CSSProperties = {
  ...drawerCompactSectionStyle,
  minWidth: '640px',
};

function DrawerMatrixRow({
  label,
  labelStyle = sizeLabelStyle,
  children,
}: {
  label: string;
  labelStyle?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <div style={drawerMatrixRowStyle}>
      <p style={labelStyle}>{label}</p>
      <div style={drawerMatrixExampleStyle}>{children}</div>
    </div>
  );
}

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    overlay: {
      control: 'select',
      options: ['yes', 'no'] satisfies DrawerOverlay[],
    },
    slotPadding: {
      control: 'select',
      options: ['yes', 'no'] satisfies DrawerSlotPadding[],
    },
    toolbarType: {
      control: 'select',
      options: ['expand', 'collapse'] satisfies DrawerToolBarType[],
    },
    activeToolbarStep: {
      control: 'select',
      options: ['setup', 'overview', 'configuration', 'review'] satisfies DrawerToolbarStepId[],
    },
    fullWidth: { control: 'boolean' },
    width: { control: 'number' },
    showScrollBar: { control: 'boolean' },
    showTestInPlayground: { control: 'boolean' },
    divider: { control: 'boolean' },
    stepsBreadcrumb: { control: 'boolean' },
    showCloseButton: { control: 'boolean' },
    showPrimaryButton: { control: 'boolean' },
    showSubtitle: { control: 'boolean' },
  },
  args: {
    overlay: 'yes',
    slotPadding: 'yes',
    toolbarType: 'expand',
    fullWidth: false,
    width: 704,
    showScrollBar: false,
    showTestInPlayground: true,
    divider: true,
    stepsBreadcrumb: false,
    showCloseButton: false,
    showPrimaryButton: true,
    showSubtitle: true,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Right-side sliding panel with vertical toolbar anatomy. Drag the centered resize handle to adjust width between 400px (min) and 1360px (full). Figma `573:145681`.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  ...drawerFullStory,
};

export const NoOverlay: Story = {
  ...drawerFullStory,
  args: {
    overlay: 'no',
  },
};

export const WithoutSlotPadding: Story = {
  ...drawerFullStory,
  args: {
    slotPadding: 'no',
  },
};

export const FullWidth: Story = {
  ...drawerFullStory,
  parameters: {
    docs: {
      description: {
        story: `Full width uses a fixed ${DRAWER_FULL_WIDTH}px container (Figma full-size).`,
      },
    },
  },
  args: {
    fullWidth: true,
    overlay: 'no',
  },
};

export const StepsBreadcrumb: Story = {
  ...drawerFullStory,
  args: {
    stepsBreadcrumb: true,
    overlay: 'no',
    breadcrumbItems: DEFAULT_DRAWER_STEPS_ITEMS,
  },
};

const OVERLAY_OPTIONS: DrawerOverlay[] = ['yes', 'no'];

export const OverlayMatrix: Story = {
  ...drawerFullStory,
  parameters: {
    docs: {
      description: {
        story:
          'Overlay blocks background interaction; no overlay squeezes content and allows simultaneous page access.',
      },
    },
  },
  render: () => (
    <div style={drawerMatrixSectionStyle}>
      {OVERLAY_OPTIONS.map((overlay) => (
        <DrawerMatrixRow key={overlay} label={overlay}>
          <Drawer overlay={overlay} width={704} />
        </DrawerMatrixRow>
      ))}
    </div>
  ),
};

export const WidthConstraintsMatrix: Story = {
  ...drawerFullStory,
  parameters: {
    docs: {
      description: {
        story: 'Minimum container width 400px and full-size maximum 1360px (Figma `573:145681`).',
      },
    },
  },
  render: () => (
    <div style={drawerMatrixSectionStyle}>
      <DrawerMatrixRow label="min (400px)">
        <Drawer overlay="no" width={400} />
      </DrawerMatrixRow>
      <DrawerMatrixRow label="default (704px)">
        <Drawer overlay="no" width={704} />
      </DrawerMatrixRow>
      <DrawerMatrixRow label={`full (${DRAWER_FULL_WIDTH}px)`}>
        <Drawer overlay="no" fullWidth />
      </DrawerMatrixRow>
    </div>
  ),
};

const SLOT_PADDING_OPTIONS: DrawerSlotPadding[] = ['yes', 'no'];

export const SlotPaddingMatrix: Story = {
  ...drawerFullStory,
  render: () => (
    <div style={drawerMatrixSectionStyle}>
      {SLOT_PADDING_OPTIONS.map((slotPadding) => (
        <DrawerMatrixRow key={slotPadding} label={slotPadding}>
          <Drawer overlay="no" width={704} slotPadding={slotPadding} />
        </DrawerMatrixRow>
      ))}
    </div>
  ),
};

export const HeaderDividerMatrix: Story = {
  ...drawerCompactStory,
  render: () => (
    <div style={drawerCompactHeaderSectionStyle}>
      <div style={drawerHeaderMatrixRowStyle}>
        <p style={variantLabelStyle}>With divider</p>
        <div style={drawerHeaderMatrixExampleStyle}>
          <DrawerHeader divider className="spark-drawer-header-fill" />
        </div>
      </div>
      <div style={drawerHeaderMatrixRowStyle}>
        <p style={variantLabelStyle}>Without divider</p>
        <div style={drawerHeaderMatrixExampleStyle}>
          <DrawerHeader divider={false} className="spark-drawer-header-fill" />
        </div>
      </div>
    </div>
  ),
};

export const HeaderStepsBreadcrumbMatrix: Story = {
  ...drawerCompactStory,
  render: () => (
    <div style={drawerCompactHeaderSectionStyle}>
      <div style={drawerHeaderMatrixRowStyle}>
        <p style={variantLabelStyle}>Steps breadcrumb</p>
        <div style={drawerHeaderMatrixExampleStyle}>
          <DrawerHeader
            stepsBreadcrumb
            breadcrumbItems={DEFAULT_DRAWER_STEPS_ITEMS}
            className="spark-drawer-header-fill"
          />
        </div>
      </div>
    </div>
  ),
};

const BUTTON_ICON_WIDTH_OPTIONS = [false, true] as const;
const BUTTON_ICON_STATES: DrawerButtonIconVisualState[] = [
  'default',
  'hover',
  'click-on',
  'disabled',
];

export const DrawerButtonIconMatrix: Story = {
  ...drawerCompactStory,
  parameters: {
    docs: {
      description: {
        story: 'Figma `.Drawer-button-Icon` — `Width=No` (28×28) vs `Width=Yes` (28×48) with drawer icon-button shadow.',
      },
    },
  },
  render: () => (
    <div style={drawerCompactSectionStyle}>
      {BUTTON_ICON_WIDTH_OPTIONS.map((width) => (
        <div key={width ? 'width-yes' : 'width-no'} style={drawerButtonIconMatrixRowStyle}>
          <p style={sizeLabelStyle}>{width ? 'Width=Yes' : 'Width=No'}</p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {BUTTON_ICON_STATES.map((visualState) => (
              <div key={visualState} style={{ textAlign: 'center' }}>
                <p style={variantLabelStyle}>{visualState}</p>
                <DrawerButtonIcon
                  width={width}
                  visualState={visualState}
                  ariaLabel={`${visualState} icon`}
                  icon={
                    width ? (
                      <SparkIcon slug="lines" size="medium" />
                    ) : (
                      <SparkIcon slug="close" size="small" />
                    )
                  }
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

const TOOLBAR_TYPES: DrawerToolBarType[] = ['expand', 'collapse'];

const DRAWER_TOOLBAR_MATRIX_HEIGHT = 443;

const drawerToolbarMatrixSectionStyle: CSSProperties = {
  ...drawerCompactSectionStyle,
  padding: 'var(--dimension-spacing-32)',
  minHeight: `${DRAWER_TOOLBAR_MATRIX_HEIGHT + 64}px`,
};

export const DrawerToolBarMatrix: Story = {
  ...drawerCompactStory,
  parameters: {
    docs: {
      description: {
        story:
          'Figma `.Drawer-tool-bar` (`6869:150292`) — top actions (Close, width toggle), multi-step navigation group, centered resize handle (tooltip: “Resize drawer”, drag to resize 400–1360px), and bottom “Test in Playground”. All icon buttons use `TooltipTrigger` (4px gap, placement left).',
      },
    },
  },
  render: () => (
    <div style={drawerToolbarMatrixSectionStyle}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: '4rem',
        }}
      >
        {TOOLBAR_TYPES.map((type) => (
          <div
            key={type}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '1rem',
            }}
          >
            <p style={variantLabelStyle}>{type}</p>
            <div
              style={{
                position: 'relative',
                height: DRAWER_TOOLBAR_MATRIX_HEIGHT,
                width: 36,
              }}
            >
              <DrawerToolBar type={type} />
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const DrawerItemAnatomy: Story = {
  ...drawerFullStory,
  parameters: {
    docs: {
      description: {
        story: 'Figma `.Drawer-Item` — toolbar + header + slot anatomy (`1629:80664`).',
      },
    },
  },
  render: () => (
    <div style={drawerMatrixExampleStyle}>
      <DrawerItem width={704} />
    </div>
  ),
};

export const WithScrollBar: Story = {
  ...drawerFullStory,
  args: {
    showScrollBar: true,
  },
};
