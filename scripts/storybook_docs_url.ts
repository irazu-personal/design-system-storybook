/** Hosted Storybook base URL (GitHub Pages). */
export const STORYBOOK_BASE = 'https://irazu-personal.github.io/design-system-storybook/';

/** Build a Storybook Docs deep link from a CSF `meta.title` (e.g. `Components/Button`). */
export function storybookDocsUrl(metaTitle: string, base = STORYBOOK_BASE): string {
  const slug = metaTitle
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  return `${base}?path=/docs/${slug}--docs`;
}
