import { useState } from 'react';
import { Button } from '../Button/Button';
import { SegmentedControl } from '../SegmentedControl/SegmentedControl';
import { SparkIcon } from '../SparkIcon';
import { UploadArea } from './UploadArea';
import './UploadAreaModal.css';

export type UploadAreaModalProps = {
  title?: string;
  className?: string;
};

export function UploadAreaModal({
  title = 'Upload Benchmark',
  className = '',
}: UploadAreaModalProps) {
  const [activeTab, setActiveTab] = useState('classification');

  return (
    <div className={['spark-upload-area-modal', className].filter(Boolean).join(' ')}>
      <div className="spark-upload-area-modal-header">
        <h2 className="spark-upload-area-modal-title">{title}</h2>
        <Button type="button" size="tiny" variant="ghost" aria-label="Close">
          <SparkIcon slug="close" size="medium" />
        </Button>
      </div>
      <div className="spark-upload-area-modal-body">
        <SegmentedControl
          size="medium"
          style="outlined"
          fill
          items={[
            { id: 'classification', label: 'Classification' },
            { id: 'entity-extraction', label: 'Entity Extraction' },
          ]}
          activeId={activeTab}
          onChange={setActiveTab}
        />
        <UploadArea contentDirection="center" showHelperText={false} />
      </div>
    </div>
  );
}
