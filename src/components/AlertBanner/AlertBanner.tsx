import { Button } from '../Button/Button';
import { OutlineFeedbackIcon } from '../shared/OutlineFeedbackIcon';
import type { FeedbackType } from '../shared/feedbackHelpers';
import { sparkAssetUrl } from '../../utils/sparkAssetUrl';
import './AlertBanner.css';
import '../shared/feedbackIcons.css';

export type AlertBannerButtonType = 'default' | 'text';

export type AlertBannerProps = {
  text?: string;
  feedback?: FeedbackType;
  buttonType?: AlertBannerButtonType;
  showIcon?: boolean;
  showButton?: boolean;
  showCloseButton?: boolean;
  buttonLabel?: string;
  className?: string;
  onActionClick?: () => void;
  onCloseClick?: () => void;
};

export function AlertBanner({
  text = '{Project Name} was added to your Projects',
  feedback = 'success',
  buttonType = 'default',
  showIcon = true,
  showButton = true,
  showCloseButton = true,
  buttonLabel = 'Button',
  className = '',
  onActionClick,
  onCloseClick,
}: AlertBannerProps) {
  return (
    <div
      className={['spark-alert-banner', `spark-alert-banner-${feedback}`, className].filter(Boolean).join(' ')}
      role="status"
    >
      <div className="spark-alert-banner-content">
        {showIcon ? <OutlineFeedbackIcon feedback={feedback} className="spark-alert-banner-icon" /> : null}
        <p className="spark-alert-banner-text">{text}</p>
        {showButton ? (
          buttonType === 'text' ? (
            <Button variant="link" size="medium" type="button" onClick={onActionClick}>
              {buttonLabel}
            </Button>
          ) : (
            <button type="button" className="spark-alert-banner-action" onClick={onActionClick}>
              {buttonLabel}
            </button>
          )
        ) : null}
      </div>
      {showCloseButton ? (
        <button
          type="button"
          className="spark-alert-banner-close"
          aria-label="Dismiss alert"
          onClick={onCloseClick}
        >
          <img src={sparkAssetUrl('icons/close-inline-6.svg')} width={6} height={6} alt="" aria-hidden="true" className="spark-alert-banner-close-icon" />
        </button>
      ) : null}
    </div>
  );
}
