import { Button } from '../Button/Button';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { TagColored, type TagColoredVariant } from '../TagColored/TagColored';
import './Widgets.css';

export type WorkflowCardType = 'overall-progress' | 'specific-progress';
export type WorkflowCardBorder = boolean;

export type WorkflowCardProps = {
  type?: WorkflowCardType;
  border?: WorkflowCardBorder;
  topTitle?: string;
  bottomTitle?: string;
  metricValue?: string;
  progressValue?: number;
  tagLabel?: string;
  tagVariant?: TagColoredVariant;
  reviewLabel?: string;
  className?: string;
};

export function WorkflowCard({
  type = 'overall-progress',
  border = false,
  topTitle = 'Overview / Total extractions',
  bottomTitle = 'Overall Progress',
  metricValue = '0',
  progressValue = 0,
  tagLabel = 'Low (89)',
  tagVariant = 'blue',
  reviewLabel = 'Review',
  className = '',
}: WorkflowCardProps) {
  const rootClasses = ['spark-workflow-card', border ? 'spark-workflow-card-border' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClasses}>
      <div className="spark-widget-content">
        <div className="spark-workflow-card-header">
          {type === 'overall-progress' ? (
            <p className="spark-workflow-card-title">{topTitle}</p>
          ) : (
            <>
              <TagColored label={tagLabel} variant={tagVariant} />
              <Button variant="link" size="tiny">
                {reviewLabel}
              </Button>
            </>
          )}
        </div>
        <div className="spark-workflow-card-footer">
          <p className="spark-workflow-card-metric">{type === 'specific-progress' ? '3' : metricValue}</p>
          <div className="spark-workflow-card-progress-wrap">
            <p className="spark-workflow-card-progress-label">
              {type === 'overall-progress' ? 'Labels Reviewed' : bottomTitle}
            </p>
            <ProgressBar value={progressValue} showPercentage />
          </div>
        </div>
      </div>
    </div>
  );
}
