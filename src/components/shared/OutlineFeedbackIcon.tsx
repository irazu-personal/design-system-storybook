import type { NotificationFeedbackType } from './feedbackHelpers';
import { sparkAssetUrl } from '../../utils/sparkAssetUrl';

const OUTLINE_FEEDBACK_ICON_SLUGS: Record<NotificationFeedbackType, string> = {
  success: 'circle-check-inline',
  warning: 'circle-alert-triangle-inline',
  info: 'circle-info-inline',
  error: 'circle-alert-inline',
  neutral: 'circle-alert-inline',
};

export function OutlineFeedbackIcon({
  feedback,
  className = '',
}: {
  feedback: NotificationFeedbackType;
  className?: string;
}) {
  const slug = OUTLINE_FEEDBACK_ICON_SLUGS[feedback];

  const iconUrl = sparkAssetUrl(`icons/${slug}-medium.svg`);

  return (
    <span
      className={['spark-outline-feedback-icon', className].filter(Boolean).join(' ')}
      aria-hidden="true"
    >
      <span
        className="spark-outline-feedback-icon-mark"
        style={{
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
    </span>
  );
}
