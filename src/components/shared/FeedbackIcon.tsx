import type { FeedbackType } from './feedbackHelpers';
import { sparkAssetUrl } from '../../utils/sparkAssetUrl';

const FILLED_FEEDBACK_ICON_SLUGS: Record<FeedbackType, string> = {
  success: 'feedback-success-filled',
  warning: 'feedback-warning-filled',
  info: 'feedback-info-filled',
  error: 'feedback-error-filled',
};

/** Figma Feedback Icon (`677:65813`) — filled status glyphs used in Toast. */
export function FeedbackIcon({
  feedbackType,
  className = '',
}: {
  feedbackType: FeedbackType;
  className?: string;
}) {
  const slug = FILLED_FEEDBACK_ICON_SLUGS[feedbackType];

  return (
    <img
      src={sparkAssetUrl(`icons/${slug}-medium.svg`)}
      width={24}
      height={24}
      alt=""
      aria-hidden="true"
      className={['spark-feedback-icon', className].filter(Boolean).join(' ')}
    />
  );
}
