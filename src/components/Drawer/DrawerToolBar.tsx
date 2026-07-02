import type { PointerEvent as ReactPointerEvent, ReactElement } from 'react';
import { SparkIcon } from '../SparkIcon';
import { TooltipTrigger } from '../Tooltip/TooltipTrigger';
import { DrawerButtonIcon } from './DrawerButtonIcon';
import {
  DRAWER_RESIZE_TOOLTIP,
  DRAWER_TOOLBAR_STEPS,
  type DrawerToolbarStepId,
} from './drawerConstants';
import './DrawerToolBar.css';

export type DrawerToolBarType = 'expand' | 'collapse';

export type DrawerToolBarProps = {
  /** Expand shows viewport-wide; collapse shows viewport-narrow on the width toggle. */
  type?: DrawerToolBarType;
  /** Active step in the multi-step navigation group. */
  activeStep?: DrawerToolbarStepId;
  /** Figma bottom action — game icon “Test in Playground”. */
  showTestInPlayground?: boolean;
  isResizing?: boolean;
  onClose?: () => void;
  onStepClick?: (stepId: DrawerToolbarStepId) => void;
  onWidthToggle?: () => void;
  onResizePointerDown?: (event: ReactPointerEvent<HTMLButtonElement>) => void;
  onResizePointerEnd?: () => void;
  onTestInPlayground?: () => void;
  className?: string;
};

const TOOLTIP_PLACEMENT = 'left' as const;

function ToolbarIconButton({
  tooltip,
  children,
}: {
  tooltip: string;
  children: ReactElement;
}) {
  return (
    <TooltipTrigger text={tooltip} placement={TOOLTIP_PLACEMENT}>
      {children}
    </TooltipTrigger>
  );
}

export function DrawerToolBar({
  type = 'expand',
  activeStep,
  showTestInPlayground = true,
  isResizing = false,
  onClose,
  onStepClick,
  onWidthToggle,
  onResizePointerDown,
  onResizePointerEnd,
  onTestInPlayground,
  className = '',
}: DrawerToolBarProps) {
  const widthIcon = type === 'expand' ? 'viewport-wide' : 'viewport-narrow';
  const widthTooltip = type === 'expand' ? 'Expand view' : 'Collapse view';

  return (
    <aside className={['spark-drawer-toolbar', className].filter(Boolean).join(' ')}>
      <div className="spark-drawer-toolbar-top">
        <div className="spark-drawer-toolbar-actions">
          <ToolbarIconButton tooltip="Close">
            <DrawerButtonIcon
              ariaLabel="Close"
              icon={<SparkIcon slug="close" size="small" />}
              onClick={onClose}
            />
          </ToolbarIconButton>
          <ToolbarIconButton tooltip={widthTooltip}>
            <DrawerButtonIcon
              ariaLabel={widthTooltip}
              icon={<SparkIcon slug={widthIcon} size="small" />}
              onClick={onWidthToggle}
            />
          </ToolbarIconButton>
        </div>
        <div className="spark-drawer-toolbar-steps" role="group" aria-label="Drawer steps">
          {DRAWER_TOOLBAR_STEPS.map((step) => (
            <ToolbarIconButton key={step.id} tooltip={step.label}>
              <DrawerButtonIcon
                ariaLabel={step.label}
                visualState={activeStep === step.id ? 'click-on' : 'default'}
                icon={<SparkIcon slug={step.icon} size="small" />}
                onClick={() => onStepClick?.(step.id)}
              />
            </ToolbarIconButton>
          ))}
        </div>
      </div>
      <div className="spark-drawer-toolbar-middle">
        <TooltipTrigger text={DRAWER_RESIZE_TOOLTIP} placement={TOOLTIP_PLACEMENT} disabled={isResizing}>
          <DrawerButtonIcon
            width
            ariaLabel={DRAWER_RESIZE_TOOLTIP}
            visualState={isResizing ? 'click-on' : 'default'}
            icon={<SparkIcon slug="lines" size="medium" />}
            onPointerDown={onResizePointerDown}
            onPointerUp={onResizePointerEnd}
            onPointerCancel={onResizePointerEnd}
            onLostPointerCapture={onResizePointerEnd}
          />
        </TooltipTrigger>
      </div>
      {showTestInPlayground ? (
        <div className="spark-drawer-toolbar-bottom">
          <ToolbarIconButton tooltip="Test in Playground">
            <DrawerButtonIcon
              ariaLabel="Test in Playground"
              icon={<SparkIcon slug="game" size="small" />}
              onClick={onTestInPlayground}
            />
          </ToolbarIconButton>
        </div>
      ) : null}
    </aside>
  );
}
