import { Button } from '../Button/Button';
import { SparkIcon } from '../SparkIcon';
import { TagFeedback, type TagFeedbackVariant } from '../TagFeedback/TagFeedback';
import './CardProjects.css';

export type CardProjectsStatus = 'success' | 'processing' | 'warning' | 'error';

export type CardProjectsProps = {
  title?: string;
  description?: string;
  status?: CardProjectsStatus;
  statusLabel?: string;
  showStatus?: boolean;
  deploymentStatus?: string;
  taskType?: string;
  lastUpdated?: string;
  footer?: boolean;
  editLabel?: string;
  moreActionsLabel?: string;
  className?: string;
  onEditClick?: () => void;
  onMoreActionsClick?: () => void;
};

const STATUS_LABELS: Record<CardProjectsStatus, string> = {
  success: 'Success',
  processing: 'Processing',
  warning: 'Warning',
  error: 'Error',
};

export function CardProjects({
  title = 'Task name 2 V1',
  description = 'Short description about this task.',
  status = 'success',
  statusLabel,
  showStatus = true,
  deploymentStatus = '4 waiting to distill, 1 deployed',
  taskType = 'Entity extraction',
  lastUpdated = 'Last updated: June 16, 2025',
  footer = true,
  editLabel = 'Edit & View',
  moreActionsLabel = 'More Actions',
  className = '',
  onEditClick,
  onMoreActionsClick,
}: CardProjectsProps) {
  const resolvedStatusLabel = statusLabel ?? STATUS_LABELS[status];

  return (
    <article className={['spark-card-projects', className].filter(Boolean).join(' ')}>
      <div className="spark-card-projects-body">
        <div className="spark-card-projects-heading">
          <div className="spark-card-projects-title-row">
            <h3 className="spark-card-projects-title">{title}</h3>
            {showStatus ? (
              <TagFeedback
                variant={status as TagFeedbackVariant}
                label={resolvedStatusLabel}
                className="spark-card-projects-status"
              />
            ) : null}
          </div>
          <p className="spark-card-projects-description">{description}</p>
        </div>
        <dl className="spark-card-projects-details">
          <div className="spark-card-projects-detail-row">
            <SparkIcon slug="model" size="small" className="spark-card-projects-detail-icon" />
            <dd>{deploymentStatus}</dd>
          </div>
          <div className="spark-card-projects-detail-row">
            <SparkIcon slug="circle-info" size="small" className="spark-card-projects-detail-icon" />
            <dd>{taskType}</dd>
          </div>
          <div className="spark-card-projects-detail-row">
            <SparkIcon slug="calendar" size="small" className="spark-card-projects-detail-icon" />
            <dd>{lastUpdated}</dd>
          </div>
        </dl>
      </div>
      {footer ? (
        <footer className="spark-card-projects-footer">
          <Button
            variant="text"
            size="small"
            type="button"
            className="spark-card-projects-edit"
            startIcon={<SparkIcon slug="edit" size="small" />}
            onClick={onEditClick}
          >
            {editLabel}
          </Button>
          <Button
            variant="ghost"
            size="small"
            type="button"
            className="spark-card-projects-more"
            onClick={onMoreActionsClick}
          >
            {moreActionsLabel}
          </Button>
        </footer>
      ) : null}
    </article>
  );
}
