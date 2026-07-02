/**
 * Resolve a path under `public/` for the current Storybook/Vite base URL.
 * Use for icons, illustrations, logo, and avatars served from static assets.
 */
export function sparkAssetUrl(path: string): string {
  const base = import.meta.env.BASE_URL ?? '/';
  const normalized = path.replace(/^\//, '');
  return `${base}${normalized}`;
}
