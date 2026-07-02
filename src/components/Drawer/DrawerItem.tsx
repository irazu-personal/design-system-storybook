import { useMemo, type CSSProperties, type ReactNode } from 'react';
import type { BreadcrumbItemData } from '../Breadcrumb/Breadcrumb';
import { DrawerHeader } from './DrawerHeader';
import { DrawerSlot } from './shared/DrawerSlot';
import { useDrawerWidthResize } from './shared/useDrawerWidthResize';
import { DrawerToolBar, type DrawerToolBarType } from './DrawerToolBar';
import {
  DEFAULT_DRAWER_STEPS_ITEMS,
  DRAWER_FULL_WIDTH,
  DRAWER_MIN_WIDTH,
  type DrawerToolbarStepId,
} from './drawerConstants';
import './DrawerItem.css';
import './DrawerHeader.css';
import './shared/drawerShared.css';

export type DrawerItemProps = {
  toolbarType?: DrawerToolBarType;
  fullWidth?: boolean;
  width?: number | string;
  resizable?: boolean;
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
  slotPadding?: boolean;
  showScrollBar?: boolean;
  showTestInPlayground?: boolean;
  children?: ReactNode;
  className?: string;
  onToolbarClose?: () => void;
  activeToolbarStep?: DrawerToolbarStepId;
  onToolbarStepClick?: (stepId: DrawerToolbarStepId) => void;
  onToolbarWidthToggle?: () => void;
  onToolbarResize?: (width: number) => void;
  onToolbarWidthChange?: (width: number) => void;
  onToolbarTestInPlayground?: () => void;
  onCloseClick?: () => void;
  onPrimaryClick?: () => void;
};

function resolveInitialWidth(fullWidth: boolean, width: number | string): number {
  if (fullWidth) {
    return DRAWER_FULL_WIDTH;
  }
  if (typeof width === 'number') {
    return width;
  }
  const parsed = Number.parseInt(width, 10);
  return Number.isFinite(parsed) ? parsed : 704;
}

export function DrawerItem({
  toolbarType = 'expand',
  fullWidth = false,
  width = 704,
  resizable = true,
  divider = true,
  stepsBreadcrumb = false,
  breadcrumbItems = DEFAULT_DRAWER_STEPS_ITEMS,
  showCloseButton = false,
  showPrimaryButton = true,
  showSubtitle = true,
  title = 'Long title',
  subtitle = 'Subtitle',
  closeLabel = 'Close',
  primaryLabel = 'Next',
  slotPadding = true,
  showScrollBar = false,
  showTestInPlayground = true,
  children,
  className = '',
  onToolbarClose,
  activeToolbarStep,
  onToolbarStepClick,
  onToolbarWidthToggle,
  onToolbarResize,
  onToolbarWidthChange,
  onToolbarTestInPlayground,
  onCloseClick,
  onPrimaryClick,
}: DrawerItemProps) {
  const initialWidth = useMemo(
    () => resolveInitialWidth(fullWidth, width),
    [fullWidth, width],
  );

  const { width: containerWidth, isResizing, handleResizePointerDown, endResize } =
    useDrawerWidthResize({
      initialWidth,
      minWidth: DRAWER_MIN_WIDTH,
      maxWidth: DRAWER_FULL_WIDTH,
      onWidthChange: onToolbarWidthChange,
      onResizeEnd: onToolbarResize,
    });

  const containerStyle: CSSProperties = {
    width: `${containerWidth}px`,
    minWidth: `${DRAWER_MIN_WIDTH}px`,
    maxWidth: `${DRAWER_FULL_WIDTH}px`,
  };

  const containerClasses = [
    'spark-drawer-item-container',
    'spark-drawer-item-container-fill',
    fullWidth && !resizable ? 'spark-drawer-item-full-width' : '',
    stepsBreadcrumb ? 'spark-drawer-item-container-steps' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const itemClasses = [
    'spark-drawer-item',
    isResizing ? 'spark-drawer-item-resizing' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={itemClasses}>
      <DrawerToolBar
        type={toolbarType}
        activeStep={activeToolbarStep}
        showTestInPlayground={showTestInPlayground}
        isResizing={isResizing}
        onClose={onToolbarClose}
        onStepClick={onToolbarStepClick}
        onWidthToggle={onToolbarWidthToggle}
        onResizePointerDown={resizable ? handleResizePointerDown : undefined}
        onResizePointerEnd={resizable ? endResize : undefined}
        onTestInPlayground={onToolbarTestInPlayground}
      />
      <div className={containerClasses} style={containerStyle}>
        <DrawerHeader
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
          onCloseClick={onCloseClick}
          onPrimaryClick={onPrimaryClick}
        />
        <DrawerSlot slotPadding={slotPadding} showScrollBar={showScrollBar}>
          {children}
        </DrawerSlot>
      </div>
    </div>
  );
}
