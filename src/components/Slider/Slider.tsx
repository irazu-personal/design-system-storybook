import type { CSSProperties } from 'react';
import { Tooltip } from '../Tooltip/Tooltip';
import './Slider.css';

export type SliderHandleState = 'default' | 'hover' | 'click-on' | 'disabled';

export type SliderHandleProps = {
  state?: SliderHandleState;
  /** Shown above handle when `state` is hover or click-on. */
  tooltipValue?: string | number;
  className?: string;
  style?: CSSProperties;
};

export function SliderHandle({
  state = 'default',
  tooltipValue,
  className = '',
  style,
}: SliderHandleProps) {
  const sizeClass =
    state === 'hover'
      ? 'spark-slider-handle-size-hover'
      : state === 'click-on'
        ? 'spark-slider-handle-size-click-on'
        : 'spark-slider-handle-size-default';

  const showTooltip =
    (state === 'hover' || state === 'click-on') && tooltipValue !== undefined;

  const rootClasses = [
    'spark-slider-handle',
    sizeClass,
    state === 'disabled' ? 'spark-slider-handle-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={rootClasses} style={style} aria-hidden="true">
      <span className="spark-slider-handle-ring" />
      {showTooltip ? (
        <span className="spark-slider-handle-tooltip-wrap">
          <Tooltip
            text={String(tooltipValue)}
            tipDirection="top-center"
            className="spark-slider-handle-tooltip"
          />
        </span>
      ) : null}
    </span>
  );
}

export type SliderType = 'basic' | 'range';

export type SliderProps = {
  type?: SliderType;
  /** Show 0–max scale labels and tick marks under the track. */
  values?: boolean;
  /** Show editable value input(s) beside the track. */
  showInput?: boolean;
  disabled?: boolean;
  min?: number;
  max?: number;
  /** Basic slider value (inclusive). */
  value?: number;
  /** Range slider lower bound. */
  from?: number;
  /** Range slider upper bound. */
  to?: number;
  className?: string;
};

function toPercent(value: number, min: number, max: number): number {
  if (max <= min) return 0;
  return Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));
}

function SliderInput({
  label,
  displayValue,
  disabled,
  noValuesPadding,
}: {
  label: string;
  displayValue: string | number;
  disabled?: boolean;
  noValuesPadding?: boolean;
}) {
  return (
    <div
      className={[
        'spark-slider-input-wrap',
        noValuesPadding ? 'spark-slider-input-wrap-no-values' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <p className="spark-slider-input-label">{label}</p>
      <div className="spark-slider-input-field" aria-hidden="true">
        {displayValue}
      </div>
    </div>
  );
}

function SliderScale({ min, max }: { min: number; max: number }) {
  return (
    <div className="spark-slider-values">
      <p className="spark-slider-values-label">{min}</p>
      <div className="spark-slider-ticks" aria-hidden="true">
        {Array.from({ length: 9 }, (_, i) => (
          <span key={i} className="spark-slider-tick" />
        ))}
      </div>
      <p className="spark-slider-values-label spark-slider-values-label-end">{max}</p>
    </div>
  );
}

function SliderBasic({
  values = true,
  showInput = true,
  disabled = false,
  min = 0,
  max = 10,
  value = 10,
  className = '',
}: Omit<SliderProps, 'type' | 'from' | 'to'>) {
  const percent = toPercent(value, min, max);
  const handleState: SliderHandleState = disabled ? 'disabled' : 'default';

  const rootClasses = ['spark-slider', disabled ? 'spark-slider-disabled' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClasses}>
      <div
        className={[
          'spark-slider-body',
          !values ? 'spark-slider-body-no-values' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <div className="spark-slider-control">
          <div className="spark-slider-rail" aria-hidden="true" />
          <div
            className="spark-slider-track"
            style={{ width: `${percent}%` }}
            aria-hidden="true"
          />
          <SliderHandle
            state={handleState}
            className="spark-slider-handle-pos"
            style={{ left: `${percent}%` }}
          />
        </div>
        {values ? <SliderScale min={min} max={max} /> : null}
      </div>
      {showInput ? (
        <SliderInput
          label="To"
          displayValue={value}
          disabled={disabled}
          noValuesPadding={!values}
        />
      ) : null}
    </div>
  );
}

function SliderRange({
  values = true,
  showInput = true,
  disabled = false,
  min = 0,
  max = 10,
  from = 0,
  to = 10,
  className = '',
}: Omit<SliderProps, 'type' | 'value'>) {
  const fromPercent = toPercent(from, min, max);
  const toPercentValue = toPercent(to, min, max);
  const handleState: SliderHandleState = disabled ? 'disabled' : 'default';

  const rootClasses = [
    'spark-slider-range-wrap',
    disabled ? 'spark-slider-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClasses}>
      {showInput ? (
        <SliderInput
          label="From"
          displayValue={from}
          disabled={disabled}
          noValuesPadding={!values}
        />
      ) : null}
      <div
        className={[
          'spark-slider-range-body',
          !values ? 'spark-slider-range-body-no-values' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <div className="spark-slider-control">
          <div className="spark-slider-rail spark-slider-rail-range" aria-hidden="true" />
          <div
            className="spark-slider-range-active"
            style={{ left: `${fromPercent}%`, width: `${toPercentValue - fromPercent}%` }}
            aria-hidden="true"
          />
          <SliderHandle
            state={handleState}
            className="spark-slider-handle-pos"
            style={{ left: `${fromPercent}%` }}
          />
          <SliderHandle
            state={handleState}
            className="spark-slider-handle-pos"
            style={{ left: `${toPercentValue}%` }}
          />
        </div>
        {values ? <SliderScale min={min} max={max} /> : null}
      </div>
      {showInput ? (
        <SliderInput
          label="To"
          displayValue={to}
          disabled={disabled}
          noValuesPadding={!values}
        />
      ) : null}
    </div>
  );
}

export function Slider({
  type = 'basic',
  values = true,
  showInput = true,
  disabled = false,
  min = 0,
  max = 10,
  value = 10,
  from = 0,
  to = 10,
  className = '',
}: SliderProps) {
  if (type === 'range') {
    return (
      <SliderRange
        values={values}
        showInput={showInput}
        disabled={disabled}
        min={min}
        max={max}
        from={from}
        to={to}
        className={className}
      />
    );
  }

  return (
    <SliderBasic
      values={values}
      showInput={showInput}
      disabled={disabled}
      min={min}
      max={max}
      value={value}
      className={className}
    />
  );
}
