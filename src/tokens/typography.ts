/** Typography text styles — aligned to Figma page node 1:230 and text style names. */

export type TypographyVariant = {
  figmaTextStyle: string;
  /** Semantic text-style token slug → `--semantic-typography-text-style-{slug}`. */
  textStyleSlug: string;
  label: string;
  fontWeight: string;
  fontWeightVar: string;
  description: string;
  usedIn?: string;
  underline?: boolean;
  uppercase?: boolean;
};

export type TypographyStyleGroup = {
  name: string;
  /** Omit title in the left column (second Uniq block in Figma). */
  hideName?: boolean;
  fontSizeVar: string;
  lineHeightVar: string;
  fontFamilyVar?: string;
  variants: TypographyVariant[];
};

const weightRegular = '--typography-font-weight-regular';
const weightMedium = '--typography-font-weight-medium';
const weightSemibold = '--typography-font-weight-semibold';
const weightBold = '--typography-font-weight-bold';

const regular = `var(${weightRegular})`;
const medium = `var(${weightMedium})`;
const semibold = `var(${weightSemibold})`;
const bold = `var(${weightBold})`;

/** Full CSS custom property for a semantic text-style token. */
export function textStyleVar(slug: string): string {
  return `--semantic-typography-text-style-${slug}`;
}

export function textStyleVarPart(slug: string, part: 'font-size' | 'line-height' | 'font-weight' | 'font-family'): string {
  return `${textStyleVar(slug)}-${part}`;
}

export const typographyTextStyles: TypographyStyleGroup[] = [
  {
    name: 'Heading 1',
    fontSizeVar: '--typography-font-size-heading1',
    lineHeightVar: '--typography-line-height-heading1',
    variants: [
      {
        figmaTextStyle: 'Heading 1/Semibold',
        textStyleSlug: 'heading-1-semibold',
        label: 'Semibold',
        fontWeight: semibold,
        fontWeightVar: weightSemibold,
        description: 'Page-level hero titles and top-level section headings',
      },
    ],
  },
  {
    name: 'Heading 2',
    fontSizeVar: '--typography-font-size-heading2',
    lineHeightVar: '--typography-line-height-heading2',
    variants: [
      {
        figmaTextStyle: 'Heading 2/Semibold',
        textStyleSlug: 'heading-2-semibold',
        label: 'Semibold',
        fontWeight: semibold,
        fontWeightVar: weightSemibold,
        description: 'Major section headings and primary content titles',
      },
    ],
  },
  {
    name: 'Heading 3',
    fontSizeVar: '--typography-font-size-heading3',
    lineHeightVar: '--typography-line-height-heading3',
    variants: [
      {
        figmaTextStyle: 'Heading 3/Semibold',
        textStyleSlug: 'heading-3-semibold',
        label: 'Semibold',
        fontWeight: semibold,
        fontWeightVar: weightSemibold,
        description: 'Sub-section headings and secondary content titles',
      },
    ],
  },
  {
    name: 'Heading 4',
    fontSizeVar: '--typography-font-size-heading4',
    lineHeightVar: '--typography-line-height-heading4',
    variants: [
      {
        figmaTextStyle: 'Heading 4/Semibold',
        textStyleSlug: 'heading-4-semibold',
        label: 'Semibold',
        fontWeight: semibold,
        fontWeightVar: weightSemibold,
        description: 'Component-level titles',
        usedIn: 'Avatar name labels',
      },
    ],
  },
  {
    name: 'Heading 5',
    fontSizeVar: '--typography-font-size-heading5',
    lineHeightVar: '--typography-line-height-heading5',
    variants: [
      {
        figmaTextStyle: 'Heading 5/Semibold',
        textStyleSlug: 'heading-5-semibold',
        label: 'Semibold',
        fontWeight: semibold,
        fontWeightVar: weightSemibold,
        description: 'Component section headers.',
        usedIn: 'Drawer headers, Table toolbar titles, and File Upload modal headers',
      },
    ],
  },
  {
    name: 'Lead',
    fontSizeVar: '--typography-font-size-lead',
    lineHeightVar: '--typography-line-height-lead',
    variants: [
      {
        figmaTextStyle: 'Lead/Regular',
        textStyleSlug: 'lead-regular',
        label: 'Regular',
        fontWeight: regular,
        fontWeightVar: weightRegular,
        description: 'Lead body text for interactive elements.',
        usedIn: 'Buttons, Navigation, Tabs, Segmented Control, Drawer content, and Table rows',
      },
      {
        figmaTextStyle: 'Lead/Medium',
        textStyleSlug: 'lead-medium',
        label: 'Medium',
        fontWeight: medium,
        fontWeightVar: weightMedium,
        description: 'Emphasized lead text.',
        usedIn: 'Button Text labels, Segmented Control active items, and Toast messages',
      },
      {
        figmaTextStyle: 'Lead/Semibold',
        textStyleSlug: 'lead-semibold',
        label: 'Semibold',
        fontWeight: semibold,
        fontWeightVar: weightSemibold,
        description: 'Strong lead text for key elements.',
        usedIn: 'Accordion titles, Modal and Card headers, Tab titles, and primary Buttons',
      },
      {
        figmaTextStyle: 'Lead/Bold',
        textStyleSlug: 'lead-bold',
        label: 'Bold',
        fontWeight: bold,
        fontWeightVar: weightBold,
        description: 'Maximum lead-level weight.',
        usedIn: 'Main Navigation active labels',
      },
    ],
  },
  {
    name: 'Base',
    fontSizeVar: '--typography-font-size-base',
    lineHeightVar: '--typography-line-height-base',
    variants: [
      {
        figmaTextStyle: 'Base/Regular',
        textStyleSlug: 'base-regular',
        label: 'Regular',
        fontWeight: regular,
        fontWeightVar: weightRegular,
        description: 'Default body text used across the entire system.',
        usedIn:
          'Buttons, Cards, Inputs, Dropdowns, Modals, Tables, Popovers, Tooltips, and most other components',
      },
      {
        figmaTextStyle: 'Base/Medium',
        textStyleSlug: 'base-medium',
        label: 'Medium',
        fontWeight: medium,
        fontWeightVar: weightMedium,
        description: 'Medium-weight body text for in-content emphasis.',
        usedIn: 'Button labels, Drawer content, Modal body, Popover menus, and Table cells',
      },
      {
        figmaTextStyle: 'Base/Semibold',
        textStyleSlug: 'base-semibold',
        label: 'Semibold',
        fontWeight: semibold,
        fontWeightVar: weightSemibold,
        description: 'Semibold body text for secondary emphasis.',
        usedIn:
          'Avatar labels, Breadcrumb items, Notification headings, Popover headings, Empty State titles, and Buttons',
      },
    ],
  },
  {
    name: 'Detail',
    fontSizeVar: '--typography-font-size-detail',
    lineHeightVar: '--typography-line-height-detail',
    variants: [
      {
        figmaTextStyle: 'Detail/Regular',
        textStyleSlug: 'detail-regular',
        label: 'Regular',
        fontWeight: regular,
        fontWeightVar: weightRegular,
        description: 'Default body text used across the entire system.',
        usedIn:
          'Buttons, Cards, Inputs, Dropdowns, Modals, Tables, Popovers, Tooltips, and most other components',
      },
      {
        figmaTextStyle: 'Detail/Medium',
        textStyleSlug: 'detail-medium',
        label: 'Medium',
        fontWeight: medium,
        fontWeightVar: weightMedium,
        description: 'Medium-weight body text for in-content emphasis.',
        usedIn: 'Button labels, Drawer content, Modal body, Popover menus, and Table cells',
      },
      {
        figmaTextStyle: 'Detail/Semibold',
        textStyleSlug: 'detail-semibold',
        label: 'Semibold',
        fontWeight: semibold,
        fontWeightVar: weightSemibold,
        description: 'Semibold body text for secondary emphasis.',
        usedIn:
          'Avatar labels, Breadcrumb items, Notification headings, Popover headings, Empty State titles, and Buttons',
      },
    ],
  },
  {
    name: 'Uniq',
    fontSizeVar: '--typography-font-size-detail',
    lineHeightVar: '--typography-line-height-detail',
    variants: [
      {
        figmaTextStyle: 'Uniq/Regular-button-link',
        textStyleSlug: 'uniq-regular-button-link',
        label: 'Regular-button-link',
        fontWeight: regular,
        fontWeightVar: weightRegular,
        underline: true,
        description: 'Default (resting) state label for small Link Buttons',
      },
      {
        figmaTextStyle: 'Uniq/Semibold-button-link',
        textStyleSlug: 'uniq-semibold-button-link-small',
        label: 'Semibold-button-link',
        fontWeight: semibold,
        fontWeightVar: weightSemibold,
        underline: true,
        description: 'Hover and active state label for small Link Buttons',
      },
      {
        figmaTextStyle: 'Uniq/Semibold-table-CAPS',
        textStyleSlug: 'uniq-semibold-table-caps',
        label: 'Semibold-Table-CAPS',
        fontWeight: semibold,
        fontWeightVar: weightSemibold,
        uppercase: true,
        description:
          'Uppercase column headers in Tables; used in Title Cells, Column headers, and Table Row Titles',
      },
    ],
  },
  {
    name: 'Uniq',
    hideName: true,
    fontSizeVar: '--typography-font-size-base',
    lineHeightVar: '--typography-line-height-base',
    variants: [
      {
        figmaTextStyle: 'Uniq/Regular-table',
        textStyleSlug: 'uniq-regular-table',
        label: 'Regular-table',
        fontWeight: regular,
        fontWeightVar: weightRegular,
        underline: true,
        description: 'Table cells that contain text links',
      },
      {
        figmaTextStyle: 'Uniq/Medium-button-link',
        textStyleSlug: 'uniq-medium-button-link',
        label: 'Medium-button-link',
        fontWeight: medium,
        fontWeightVar: weightMedium,
        underline: true,
        description:
          'Default (resting) state label for medium Link Buttons; also used in Notification action links and Table row action links',
      },
      {
        figmaTextStyle: 'Uniq/Semibold-button-link',
        textStyleSlug: 'uniq-semibold-button-link-medium',
        label: 'Semibold-button-link',
        fontWeight: semibold,
        fontWeightVar: weightSemibold,
        underline: true,
        description:
          'Click-on (active) state label for medium Link Buttons and Notification action links',
      },
    ],
  },
];

export const platformFontWeights = [
  { label: 'Black', weight: 900, style: 'normal' as const },
  { label: 'Extrabold', weight: 800, style: 'normal' as const },
  { label: 'Bold', weight: 700, style: 'normal' as const },
  { label: 'Semibold', weight: 600, style: 'normal' as const },
  { label: 'Medium', weight: 500, style: 'normal' as const },
  { label: 'Regular', weight: 400, style: 'normal' as const },
  { label: 'Light', weight: 300, style: 'normal' as const },
  { label: 'Black Italic', weight: 900, style: 'italic' as const },
  { label: 'Extrabold Italic', weight: 800, style: 'italic' as const },
  { label: 'Bold Italic', weight: 700, style: 'italic' as const },
  { label: 'Semibold Italic', weight: 600, style: 'italic' as const },
  { label: 'Medium Italic', weight: 500, style: 'italic' as const },
  { label: 'Regular Italic', weight: 400, style: 'italic' as const },
  { label: 'Light Italic', weight: 300, style: 'italic' as const },
];

export const platformFontFamily = 'var(--typography-font-family-platform)';
export const codeFontFamily = 'var(--typography-font-family-code)';
