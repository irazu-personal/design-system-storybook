import { useEffect, useState, type ChangeEvent, type InputHTMLAttributes } from 'react';
import './Checkbox.css';

export type CheckboxStatus = 'inactive' | 'active' | 'indeterminate';

export type CheckboxVisualState = 'default' | 'hover' | 'pressed';

export type CheckboxProps = {
  label?: string;
  status?: CheckboxStatus;
  disabled?: boolean;
  /**
   * Storybook-only visual state override to display hover/pressed static examples.
   * Keep undefined in real app usage.
   */
  visualState?: CheckboxVisualState;
  showFocus?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'disabled'>;

export function Checkbox({
  label = 'Checkbox',
  status = 'active',
  disabled = false,
  visualState,
  showFocus = false,
  className = '',
  id,
  ...rest
}: CheckboxProps) {
  const [currentStatus, setCurrentStatus] = useState<CheckboxStatus>(status);

  useEffect(() => {
    setCurrentStatus(status);
  }, [status]);

  const inputId = id ?? `spark-checkbox-${Math.random().toString(36).slice(2, 9)}`;
  const checked = currentStatus === 'active';
  const indeterminate = currentStatus === 'indeterminate';

  const rootClasses = [
    'spark-checkbox',
    `spark-checkbox-${currentStatus}`,
    disabled ? 'spark-checkbox-disabled' : '',
    visualState ? `spark-checkbox-state-${visualState}` : '',
    showFocus ? 'spark-checkbox-show-focus' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const hasLabel = label.length > 0;
  const onChangeFromProps = rest.onChange;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      setCurrentStatus((prev) => {
        if (prev === 'indeterminate') return 'active';
        return prev === 'active' ? 'inactive' : 'active';
      });
    }
    onChangeFromProps?.(event);
  };

  return (
    <label className={rootClasses} htmlFor={inputId}>
      <input
        id={inputId}
        className="spark-checkbox-input"
        type="checkbox"
        checked={checked}
        disabled={disabled}
        aria-checked={indeterminate ? 'mixed' : checked}
        onChange={handleChange}
        {...rest}
      />
      <span className="spark-checkbox-box" aria-hidden="true">
        {currentStatus === 'active' ? (
          <svg
            className="spark-checkbox-glyph spark-checkbox-glyph-check"
            width="7.786"
            height="5.5"
            viewBox="0 0 7.78621 5.5"
            fill="none"
            aria-hidden="true"
          >
            {/* Figma layer `ic` — node 4405:31656 (7.786×5.5) */}
            <path
              d="M7.65202 0.134199C7.73794 0.220152 7.78621 0.336714 7.78621 0.458252C7.78621 0.57979 7.73794 0.696352 7.65202 0.782305L3.06852 5.3658C2.98257 5.45173 2.866 5.5 2.74447 5.5C2.62293 5.5 2.50637 5.45173 2.42041 5.3658L0.128664 3.07405C0.0451723 2.98761 -0.00102699 2.87183 1.73267e-05 2.75165C0.00106164 2.63147 0.0492659 2.51651 0.134248 2.43153C0.219229 2.34655 0.334189 2.29834 0.454367 2.2973C0.574545 2.29626 0.690325 2.34245 0.776771 2.42595L2.74447 4.39364L7.00391 0.134199C7.08986 0.0482713 7.20642 0 7.32796 0C7.4495 0 7.56606 0.0482713 7.65202 0.134199Z"
              fill="currentColor"
            />
          </svg>
        ) : null}
        {currentStatus === 'indeterminate' ? (
          <span className="spark-checkbox-glyph spark-checkbox-glyph-indeterminate" />
        ) : null}
      </span>
      {hasLabel ? <span className="spark-checkbox-label">{label}</span> : null}
      {showFocus ? <span className="spark-checkbox-focus" aria-hidden="true" /> : null}
    </label>
  );
}
