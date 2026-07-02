/**
 * Dropdown selected-state check glyph (.Check-icon from Figma node 225:1488).
 * Uses the dedicated dropdown-check asset — not task-check.
 */
import { sparkAssetUrl } from '../../utils/sparkAssetUrl';

export function DropdownCheckIcon({ className = '' }: { className?: string }) {
  const iconUrl = sparkAssetUrl('icons/dropdown-check-small.svg');

  return (
    <span
      className={`spark-dropdown-check ${className}`.trim()}
      aria-hidden="true"
      style={{
        display: 'inline-block',
        width: 12,
        height: 8,
        flexShrink: 0,
        backgroundColor: 'currentColor',
        maskImage: `url(${iconUrl})`,
        WebkitMaskImage: `url(${iconUrl})`,
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
