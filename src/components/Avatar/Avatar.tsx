import './Avatar.css';
import { sparkAssetUrl } from '../../utils/sparkAssetUrl';

export type AvatarSize = 'small' | 'medium' | 'large';
export type AvatarType = 'image' | 'initials';

export type AvatarProps = {
  size?: AvatarSize;
  type?: AvatarType;
  src?: string;
  alt?: string;
  /** Legacy override; only the first letter of `primaryText` (or this value) is shown. */
  initials?: string;
  primaryText?: string;
  secondaryText?: string;
  showContent?: boolean;
  className?: string;
};

function getAvatarInitial(name: string): string {
  const trimmed = name.trim();
  if (!trimmed) {
    return '';
  }
  return trimmed.charAt(0).toUpperCase();
}

export function Avatar({
  size = 'medium',
  type = 'initials',
  src = sparkAssetUrl('avatars/avatar-sample.svg'),
  alt = 'Avatar',
  initials,
  primaryText = 'Name',
  secondaryText = 'More details',
  showContent = false,
  className = '',
}: AvatarProps) {
  const displayInitial = getAvatarInitial(primaryText || initials || '');
  const rootClasses = [
    'spark-avatar',
    `spark-avatar-${size}`,
    type === 'initials' ? 'spark-avatar-initials' : '',
    showContent ? 'spark-avatar-with-content' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClasses}>
      <div className="spark-avatar-visual" aria-hidden={type === 'initials' ? undefined : false}>
        {type === 'image' ? (
          <img className="spark-avatar-image" src={src} alt={alt} />
        ) : (
          <span className="spark-avatar-initials">{displayInitial}</span>
        )}
      </div>
      {showContent ? (
        <div className="spark-avatar-content">
          <span className="spark-avatar-primary">{primaryText}</span>
          {size !== 'small' ? <span className="spark-avatar-secondary">{secondaryText}</span> : null}
        </div>
      ) : null}
    </div>
  );
}
