import { Button } from '../Button/Button';
import { SparkIcon } from '../SparkIcon';
import './UploadAreaCard.css';

export type UploadAreaCardProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  showIcon?: boolean;
  showPrimaryButton?: boolean;
  className?: string;
};

export function UploadAreaCard({
  title = 'Data & Benchmark',
  description = 'CSV of JSON Format. Your file should include two columns: Example – the text to be classified, and Labels – the corresponding classification label(s). If an example has multiple labels, separate them with semicolons (;)',
  primaryLabel = 'Upload Data',
  secondaryLabel = 'Upload Benchmark',
  showIcon = true,
  showPrimaryButton = true,
  className = '',
}: UploadAreaCardProps) {
  return (
    <div className={['spark-upload-area-card', className].filter(Boolean).join(' ')}>
      <div className="spark-upload-area-card-content">
        {showIcon ? (
          <div className="spark-upload-area-card-icon" aria-hidden="true">
            <SparkIcon slug="file-upload" size="large" className="spark-upload-area-card-icon-graphic" />
          </div>
        ) : null}
        <div className="spark-upload-area-card-copy">
          <h3 className="spark-upload-area-card-title">{title}</h3>
          <p className="spark-upload-area-card-description">{description}</p>
        </div>
      </div>
      <div className="spark-upload-area-card-actions">
        {showPrimaryButton ? (
          <Button type="button" size="medium" variant="primary" startIcon={<SparkIcon slug="upload" size="medium" />}>
            {primaryLabel}
          </Button>
        ) : null}
        <Button type="button" size="medium" variant="ghost" startIcon={<SparkIcon slug="upload" size="medium" />}>
          {secondaryLabel}
        </Button>
      </div>
    </div>
  );
}
