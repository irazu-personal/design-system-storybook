export const ICON_ACTION_LABELS: Record<string, string> = {
  close: 'Close',
  dots: 'More actions',
  filter: 'Filter',
  export: 'Export',
  'arrows-sort': 'Sort',
  trash: 'Remove',
  minus: 'Minimize',
  upload: 'Upload',
  'chevron-left': 'Previous',
  'chevron-right': 'Next',
  'chevrons-left': 'Previous year',
  'chevrons-right': 'Next year',
  'chevron-left-large': 'Go back',
  'viewport-wide': 'Expand drawer',
  'viewport-narrow': 'Collapse drawer',
  eye: 'Show password',
  'eye-closed': 'Hide password',
  plus: 'Add',
  game: 'Test in Playground',
};

export const ICON_BUTTON_TOOLTIP_PLACEHOLDER = 'placeholder';

export function resolveIconButtonTooltip({
  tooltip,
  ariaLabel,
  iconSlug,
}: {
  tooltip?: string;
  ariaLabel?: string;
  iconSlug?: string;
}): string {
  if (tooltip?.trim()) {
    return tooltip.trim();
  }
  if (ariaLabel?.trim()) {
    return ariaLabel.trim();
  }
  if (iconSlug && ICON_ACTION_LABELS[iconSlug]) {
    return ICON_ACTION_LABELS[iconSlug];
  }
  return ICON_BUTTON_TOOLTIP_PLACEHOLDER;
}
