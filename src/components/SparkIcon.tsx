import { sparkAssetUrl } from '../utils/sparkAssetUrl';

/**
 * Renders a foundation icon using CSS mask-image so it inherits `currentColor`.
 * Use this whenever an icon must respond to a CSS color token.
 *
 * @param slug  - icon slug from the foundation, e.g. "home", "chevron-down"
 * @param size  - "small" (16 px) | "medium" (24 px) | "large" (40 px), defaults to "small"
 */
export function SparkIcon({
  slug,
  size = 'small',
  className = '',
}: {
  slug: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}) {
  const px = size === 'large' ? 40 : size === 'medium' ? 24 : 16;
  const assetSize = size === 'large' ? 'medium' : size;
  const url = sparkAssetUrl(`icons/${slug}-${assetSize}.svg`);

  return (
    <span
      className={className || undefined}
      aria-hidden="true"
      style={{
        display: 'inline-block',
        width: px,
        height: px,
        flexShrink: 0,
        backgroundColor: 'currentColor',
        maskImage: `url(${url})`,
        WebkitMaskImage: `url(${url})`,
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
      }}
    />
  );
}
