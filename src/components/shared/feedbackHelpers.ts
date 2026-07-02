export type FeedbackType = 'success' | 'warning' | 'info' | 'error';

export type NotificationFeedbackType = FeedbackType | 'neutral';

export const FEEDBACK_TYPES: FeedbackType[] = ['success', 'warning', 'info', 'error'];

export const NOTIFICATION_FEEDBACK_TYPES: NotificationFeedbackType[] = [
  'success',
  'warning',
  'info',
  'error',
  'neutral',
];

export const FEEDBACK_ICONS: Record<FeedbackType, string> = {
  success: 'circle-check',
  warning: 'circle-alert',
  info: 'circle-info',
  error: 'circle-x',
};

export function feedbackIconSlug(feedback: NotificationFeedbackType): string | null {
  if (feedback === 'neutral') {
    return 'circle-alert-inline';
  }
  return FEEDBACK_ICONS[feedback];
}
