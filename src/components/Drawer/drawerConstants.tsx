import type { BreadcrumbItemData } from '../Breadcrumb/Breadcrumb';
import { SparkIcon } from '../SparkIcon';

/** Full-size drawer container width. */
export const DRAWER_FULL_WIDTH = 1360;

/** Drawer container minimum width. */
export const DRAWER_MIN_WIDTH = 400;

export const DRAWER_RESIZE_TOOLTIP = 'Resize drawer';

export type DrawerToolbarStepId = 'setup' | 'overview' | 'configuration' | 'review';

/** Multi-step navigation for complex workflows. */
export const DRAWER_TOOLBAR_STEPS: ReadonlyArray<{
  id: DrawerToolbarStepId;
  label: string;
  icon: string;
}> = [
  { id: 'setup', label: 'Project Setup', icon: 'layout' },
  { id: 'overview', label: 'Overview', icon: 'graph' },
  { id: 'configuration', label: 'Configuration', icon: 'book' },
  { id: 'review', label: 'Review', icon: 'bar-chart-ascending' },
];

/** Default steps breadcrumb trail for drawer header stories. */
export const DEFAULT_DRAWER_STEPS_ITEMS: BreadcrumbItemData[] = [
  {
    label: 'Project Setup',
    href: '#',
    icon: <SparkIcon slug="layout" size="small" />,
  },
  {
    label: 'Overview',
    href: '#',
    icon: <SparkIcon slug="graph" size="small" />,
  },
  {
    label: 'Configuration',
    href: '#',
    icon: <SparkIcon slug="book" size="small" />,
  },
  { label: 'Review', icon: <SparkIcon slug="bar-chart-ascending" size="small" /> },
];
