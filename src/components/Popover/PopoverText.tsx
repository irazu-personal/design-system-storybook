import { Button } from '../Button/Button';
import { SparkIcon } from '../SparkIcon';
import { PopoverShell, type PopoverTipDirection } from './shared/PopoverShell';
import './PopoverText.css';
import './shared/popoverShared.css';

export type PopoverTextProps = {
  tip?: boolean;
  tipDirection?: PopoverTipDirection;
  header?: boolean;
  footer?: boolean;
  icon?: boolean;
  title?: string;
  content?: string;
  closeLabel?: string;
  className?: string;
  onCloseClick?: () => void;
};

const DEFAULT_CONTENT =
  'Conveniently initiate viral synergy without multi functional platforms.';

export function PopoverText({
  tip = true,
  tipDirection = 'right',
  header = true,
  footer = true,
  icon = true,
  title = 'Title',
  content = DEFAULT_CONTENT,
  closeLabel = 'Close',
  className = '',
  onCloseClick,
}: PopoverTextProps) {
  return (
    <PopoverShell
      tip={tip}
      tipDirection={tipDirection}
      className={className}
      panelClassName="spark-popover-text-panel"
    >
      {header ? (
        <div className="spark-popover-text-header">
          {icon ? (
            <SparkIcon slug="brain-icon" size="medium" className="spark-popover-text-header-icon" />
          ) : null}
          <h3 className="spark-popover-text-title">{title}</h3>
        </div>
      ) : null}
      <div className="spark-popover-text-body">
        <p className="spark-popover-text-content">{content}</p>
      </div>
      {footer ? (
        <footer className="spark-popover-text-footer">
          <Button
            variant="ghost"
            size="tiny"
            type="button"
            className="spark-popover-text-close"
            onClick={onCloseClick}
          >
            {closeLabel}
          </Button>
        </footer>
      ) : null}
    </PopoverShell>
  );
}
