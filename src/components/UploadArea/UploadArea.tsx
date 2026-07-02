import { SparkIcon } from '../SparkIcon';
import { TooltipTrigger } from '../Tooltip/TooltipTrigger';
import './UploadArea.css';

export type UploadAreaState =
  | 'default'
  | 'hover'
  | 'click-on'
  | 'in-progress'
  | 'success'
  | 'failed';

export type UploadAreaContentDirection = 'left' | 'center';

export type UploadAreaProps = {
  state?: UploadAreaState;
  contentDirection?: UploadAreaContentDirection;
  showHelperText?: boolean;
  helperText?: string;
  title?: string;
  subtitle?: string;
  fileName?: string;
  fileSize?: string;
  progress?: number;
  onRemove?: () => void;
  className?: string;
};

function UploadAreaIcon({ state }: { state: UploadAreaState }) {
  if (state === 'in-progress') {
    return <SparkIcon slug="loader" size="large" className="spark-upload-area-icon-spin" />;
  }
  if (state === 'success') {
    return <SparkIcon slug="description" size="large" />;
  }
  if (state === 'failed') {
    return <SparkIcon slug="file-close" size="large" />;
  }
  return <SparkIcon slug="file-upload" size="large" />;
}

function defaultHelperText(state: UploadAreaState): string {
  if (state === 'failed') {
    return 'Check file format and try again';
  }
  return 'Helper text';
}

export function UploadArea({
  state = 'default',
  contentDirection = 'left',
  showHelperText = false,
  helperText,
  title = 'Click or drag file to upload',
  subtitle = 'Support for CSV or JSON files only',
  fileName = 'azurefile_name.xml',
  fileSize = '500 KB',
  progress = 43,
  onRemove,
  className = '',
}: UploadAreaProps) {
  const isOutcome = state === 'success' || state === 'failed';
  const isInteractive = state === 'default' || state === 'hover' || state === 'click-on';
  const resolvedHelperText = helperText ?? defaultHelperText(state);

  const primaryText =
    state === 'in-progress'
      ? 'Uploading File'
      : state === 'failed'
        ? 'Upload Failed'
        : state === 'success'
          ? fileName
          : title;
  const secondaryText =
    state === 'in-progress'
      ? `${progress}%`
      : state === 'success'
        ? fileSize
        : state === 'failed'
          ? undefined
          : subtitle;

  const rootClasses = ['spark-upload-area', className].filter(Boolean).join(' ');

  const zoneClasses = [
    'spark-upload-area-zone',
    `spark-upload-area-zone-${state}`,
    contentDirection === 'center' ? 'spark-upload-area-zone-center' : 'spark-upload-area-zone-left',
    isOutcome ? 'spark-upload-area-zone-outcome' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const copyClasses = [
    'spark-upload-area-copy',
    contentDirection === 'center' && isInteractive ? 'spark-upload-area-copy-center' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClasses}>
      <div
        className={zoneClasses}
        role={isInteractive ? 'button' : undefined}
        tabIndex={state === 'default' ? 0 : undefined}
      >
        <div className="spark-upload-area-content">
          <div className="spark-upload-area-icon" aria-hidden="true">
            <UploadAreaIcon state={state} />
          </div>
          <div className={copyClasses}>
            <p
              className={[
                'spark-upload-area-title',
                state === 'failed' ? 'spark-upload-area-title-failed' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {primaryText}
            </p>
            {secondaryText ? <p className="spark-upload-area-subtitle">{secondaryText}</p> : null}
          </div>
        </div>
        {isOutcome ? (
          <TooltipTrigger text="Remove file">
            <button
              type="button"
              className={[
                'spark-upload-area-remove',
                state === 'failed' ? 'spark-upload-area-remove-danger' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              aria-label="Remove file"
              onClick={onRemove}
            >
              <SparkIcon slug="trash" size="small" />
            </button>
          </TooltipTrigger>
        ) : null}
      </div>
      {showHelperText ? <p className="spark-upload-area-helper">{resolvedHelperText}</p> : null}
    </div>
  );
}
