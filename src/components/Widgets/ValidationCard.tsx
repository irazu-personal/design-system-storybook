import { TagColored, type TagColoredVariant } from '../TagColored/TagColored';
import './Widgets.css';

export type ValidationCardType = 'text-only' | 'tag';
export type ValidationCardBorder = boolean;

export type ValidationCardProps = {
  type?: ValidationCardType;
  border?: ValidationCardBorder;
  topTitle?: string;
  bottomTitle?: string;
  topValue?: string;
  bottomValue?: string;
  tagLabel?: string;
  tagTopValue?: string;
  tagVariant?: TagColoredVariant;
  className?: string;
};

export function ValidationCard({
  type = 'text-only',
  border = false,
  topTitle = 'Overview / Total extractions',
  bottomTitle = 'Entities Validated',
  topValue = '189542',
  bottomValue = '1',
  tagLabel = 'TEST',
  tagTopValue = '2143',
  tagVariant = 'blue',
  className = '',
}: ValidationCardProps) {
  const rootClasses = [
    'spark-validation-card',
    border ? 'spark-validation-card-border' : '',
    type === 'text-only' ? 'spark-validation-card-type-text-only' : 'spark-validation-card-type-tag',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClasses}>
      <div className="spark-widget-content">
        <div className="spark-widget-row">
          {type === 'text-only' ? (
            <p className="spark-widget-label">{topTitle}</p>
          ) : (
            <TagColored label={tagLabel} variant={tagVariant} />
          )}
          <p className="spark-widget-value-lg">{type === 'text-only' ? topValue : tagTopValue}</p>
        </div>
        <div className="spark-widget-row">
          <p className="spark-widget-label spark-widget-footer-label">{bottomTitle}</p>
          <p className="spark-widget-value-md">{type === 'tag' ? '3' : bottomValue}</p>
        </div>
      </div>
    </div>
  );
}
