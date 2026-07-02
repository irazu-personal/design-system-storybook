import type { ReactNode } from 'react';
import type { BreadcrumbItemData } from '../Breadcrumb/Breadcrumb';
import { Overlay } from '../Overlay/Overlay';
import { DrawerItem } from './DrawerItem';
import type { DrawerToolbarStepId } from './drawerConstants';
import type { DrawerToolBarType } from './DrawerToolBar';
import './Drawer.css';
import './DrawerItem.css';
import './DrawerHeader.css';
import './shared/drawerShared.css';

export type DrawerOverlay = 'yes' | 'no';
export type DrawerSlotPadding = 'yes' | 'no';

export type DrawerProps = {
  overlay?: DrawerOverlay;
  slotPadding?: DrawerSlotPadding;
  fullWidth?: boolean;
  width?: number | string;
  toolbarType?: DrawerToolBarType;
  activeToolbarStep?: DrawerToolbarStepId;
  resizable?: boolean;
  showScrollBar?: boolean;
  showTestInPlayground?: boolean;
  divider?: boolean;
  stepsBreadcrumb?: boolean;
  breadcrumbItems?: BreadcrumbItemData[];
  showCloseButton?: boolean;
  showPrimaryButton?: boolean;
  showSubtitle?: boolean;
  title?: string;
  subtitle?: string;
  closeLabel?: string;
  primaryLabel?: string;
  children?: ReactNode;
  className?: string;
  onToolbarClose?: () => void;
  onToolbarStepClick?: (stepId: DrawerToolbarStepId) => void;
  onToolbarWidthToggle?: () => void;
  onToolbarResize?: (width: number) => void;
  onToolbarWidthChange?: (width: number) => void;
  onToolbarTestInPlayground?: () => void;
  onCloseClick?: () => void;
  onPrimaryClick?: () => void;
};

export function Drawer({
  overlay = 'yes',
  slotPadding = 'yes',
  fullWidth = false,
  width = 704,
  toolbarType = 'expand',
  activeToolbarStep,
  resizable = true,
  showScrollBar = false,
  showTestInPlayground = true,
  divider = true,
  stepsBreadcrumb = false,
  breadcrumbItems,
  showCloseButton = false,
  showPrimaryButton = true,
  showSubtitle = true,
  title = 'Long title',
  subtitle = 'Subtitle',
  closeLabel = 'Close',
  primaryLabel = 'Next',
  children,
  className = '',
  onToolbarClose,
  onToolbarStepClick,
  onToolbarWidthToggle,
  onToolbarResize,
  onToolbarWidthChange,
  onToolbarTestInPlayground,
  onCloseClick,
  onPrimaryClick,
}: DrawerProps) {
  const panelClasses = ['spark-drawer-panel', className].filter(Boolean).join(' ');

  const panel = (
    <div className={panelClasses}>
      <DrawerItem
        toolbarType={toolbarType}
        activeToolbarStep={activeToolbarStep}
        resizable={resizable}
        fullWidth={fullWidth}
        width={width}
        divider={divider}
        stepsBreadcrumb={stepsBreadcrumb}
        breadcrumbItems={breadcrumbItems}
        showCloseButton={showCloseButton}
        showPrimaryButton={showPrimaryButton}
        showSubtitle={showSubtitle}
        title={title}
        subtitle={subtitle}
        closeLabel={closeLabel}
        primaryLabel={primaryLabel}
        slotPadding={slotPadding === 'yes'}
        showScrollBar={showScrollBar}
        showTestInPlayground={showTestInPlayground}
        onToolbarClose={onToolbarClose}
        onToolbarStepClick={onToolbarStepClick}
        onToolbarWidthToggle={onToolbarWidthToggle}
        onToolbarResize={onToolbarResize}
        onToolbarWidthChange={onToolbarWidthChange}
        onToolbarTestInPlayground={onToolbarTestInPlayground}
        onCloseClick={onCloseClick}
        onPrimaryClick={onPrimaryClick}
      >
        {children}
      </DrawerItem>
    </div>
  );

  if (overlay === 'no') {
    return <div className="spark-drawer spark-drawer-no-overlay">{panel}</div>;
  }

  return (
    <div className="spark-drawer spark-drawer-with-overlay">
      <Overlay />
      {panel}
    </div>
  );
}
