import { sparkAssetUrl } from '../utils/sparkAssetUrl';

export type IconEntry = {
  name: string;
  slug: string;
  medium: string;
  small: string;
};

export type IconGroup = {
  name: string;
  icons: IconEntry[];
};

function icon(name: string, slug: string): IconEntry {
  return {
    name,
    slug,
    medium: sparkAssetUrl(`icons/${slug}-medium.svg`),
    small: sparkAssetUrl(`icons/${slug}-small.svg`),
  };
}

export const iconGroups: IconGroup[] = [
  {
    name: 'Arrows',
    icons: [
      icon('Chevron up', 'chevron-up'),
      icon('Chevron down', 'chevron-down'),
      icon('Chevron left', 'chevron-left'),
      icon('Chevron right', 'chevron-right'),
      icon('Chevrons left', 'chevrons-left'),
      icon('Chevrons right', 'chevrons-right'),
      icon('Chevron left large', 'chevron-left-large'),
      icon('Chevron up large', 'chevron-up-large'),
      icon('Chevron right large', 'chevron-right-large'),
      icon('Chevron down large', 'chevron-down-large'),
      icon('Arrow back up', 'arrow-back-up'),
      icon('Arrow left', 'arrow-left'),
      icon('Arrow right', 'arrow-right'),
      icon('Arrows shuffle', 'arrows-shuffle'),
      icon('Switch horizontal', 'switch-horizontal'),
      icon('Arrows sort', 'arrows-sort'),
      icon('Sort', 'sort'),
      icon('Arrow narrow down', 'arrow-narrow-down'),
      icon('Arrow narrow up', 'arrow-narrow-up'),
      icon('Trending down', 'trending-down'),
      icon('Trending up', 'trending-up'),
    ],
  },
  {
    name: 'Feedback',
    icons: [
      icon('Circle check', 'circle-check'),
      icon('Circle x', 'circle-x'),
      icon('Circle minus', 'circle-minus'),
      icon('Circle info', 'circle-info'),
      icon('Circle alert', 'circle-alert'),
      icon('Circle help', 'circle-help'),
      icon('Circle alert triangle', 'circle-alert-triangle'),
    ],
  },
  {
    name: 'Actions',
    icons: [
      icon('Upload', 'upload'),
      icon('File upload', 'file-upload'),
      icon('Check', 'check'),
      icon('Loader', 'loader'),
      icon('Download', 'download'),
      icon('Export', 'export'),
      icon('External link', 'external-link-icons'),
      icon('Minimize arrows', 'minimize-arrows'),
      icon('Maximize arrow', 'maximize-arrow'),
      icon('Reload', 'reload'),
      icon('Refresh', 'refresh'),
      icon('Viewport tall', 'viewport-tall'),
      icon('Viewport wide', 'viewport-wide'),
      icon('Viewport narrow', 'viewport-narrow'),
      icon('Lines', 'lines'),
      icon('Close', 'close'),
      icon('Minus', 'minus'),
      icon('Plus', 'plus'),
      icon('Eye', 'eye'),
      icon('Eye closed', 'eye-closed'),
      icon('Heart', 'heart'),
      icon('Current location', 'current-location'),
      icon('Link', 'link'),
      icon('Attach', 'attach'),
      icon('Share', 'share'),
      icon('Layers linked', 'layers-linked'),
      icon('Trash', 'trash'),
      icon('Settings', 'settings'),
      icon('Search', 'search'),
      icon('Bell', 'bell'),
      icon('Home', 'home'),
      icon('Filter', 'filter'),
      icon('Edit', 'edit'),
      icon('Copy', 'copy'),
      icon('Menu', 'menu'),
      icon('Dots', 'dots'),
      icon('File close', 'file-close'),
      icon('Spreadsheet', 'spreadsheet'),
      icon('Description', 'description'),
      icon('Calendar', 'calendar'),
      icon('Calendar check', 'calendar-check'),
      icon('Clock hour', 'clock-hour-icon'),
    ],
  },
  {
    name: 'General',
    icons: [
      icon('User', 'user'),
      icon('Message', 'message-icon'),
      icon('Message circle', 'message-circle-icon'),
      icon('Microphone', 'microphone-icon'),
      icon('Lock password', 'lock-password-icon'),
      icon('Bookmark', 'bookmark'),
      icon('Bulb', 'bulb'),
      icon('Activity', 'activity'),
      icon('Library', 'library'),
      icon('Report analytics', 'report-analytics-icon'),
      icon('Task', 'task'),
      icon('Task check', 'task-check'),
      icon('Assembly', 'assembly'),
      icon('Category +', 'category-plus'),
      icon('Category', 'category'),
      icon('Crown', 'crown'),
      icon('Game', 'game'),
      icon('Layout', 'layout'),
      icon('Table', 'table'),
      icon('Layout rows', 'layout-rows'),
      icon('Tag', 'tag'),
      icon('Pinned', 'pinned'),
      icon('Pin', 'pin'),
      icon('Text', 'text'),
    ],
  },
  {
    name: 'Graphs',
    icons: [
      icon('WWW', 'www'),
      icon('Box graph', 'box-graph'),
      icon('Cohort chart', 'cohort-chart'),
      icon('Sitemap', 'sitemap'),
      icon('Pie chart', 'pie-chart'),
      icon('Donut chart', 'donut-chart'),
      icon('Bar chart center', 'bar-chart-center'),
      icon('Bar chart ascending', 'bar-chart-ascending'),
      icon('Chart area line', 'chart-area-line'),
      icon('Graph', 'graph'),
    ],
  },
  {
    name: 'Flow',
    icons: [
      icon('Git merge', 'git-merge'),
      icon('Git fork', 'git-fork'),
      icon('Hierarchy', 'hierarchy'),
      icon('Branch', 'branch'),
      icon('Merge', 'merge'),
      icon('Polygon', 'polygon'),
    ],
  },
  {
    name: 'Code',
    icons: [
      icon('Code dots', 'code-dots'),
      icon('Code circle', 'code-circle'),
      icon('Code circle 2', 'code-circle-2'),
      icon('Code', 'code'),
      icon('Codeblock', 'codeblock'),
    ],
  },
  {
    name: 'Cloud',
    icons: [
      icon('Cloud check', 'cloud-check'),
      icon('Cloud code', 'cloud-code'),
      icon('Cloud upload', 'cloud-upload'),
      icon('Cloud download', 'cloud-download'),
      icon('Cloud data connection', 'cloud-data-connection'),
      icon('Cloud computing', 'cloud-computing'),
      icon('Cloud', 'cloud'),
    ],
  },
  {
    name: 'AI',
    icons: [
      icon('Bolt', 'bolt'),
      icon('Agent', 'agent'),
      icon('Brain', 'brain-icon'),
      icon('Sparkles 2', 'sparkles-2'),
      icon('Sparkles 3', 'sparkles-3'),
      icon('File sparkles', 'file-sparkles'),
    ],
  },
  {
    name: 'Social',
    icons: [
      icon('Open AI', 'open-ai'),
      icon('DeepSeek', 'deepseek'),
      icon('Anthropic', 'anthropic'),
      icon('Google', 'google'),
      icon('Github', 'github'),
      icon('Huggingface', 'huggingface'),
    ],
  },
  {
    name: 'Model',
    icons: [
      icon('Data', 'data'),
      icon('Database', 'database'),
      icon('Rocket', 'rocket'),
      icon('Train', 'train'),
      icon('Model', 'model'),
    ],
  },
];
