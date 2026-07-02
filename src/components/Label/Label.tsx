import type { LabelHTMLAttributes, ReactNode } from 'react';
import { SparkIcon } from '../SparkIcon';
import './Label.css';

export type LabelProps = {
  label?: ReactNode;
  showAsterisk?: boolean;
  showIcon?: boolean;
  className?: string;
} & Pick<LabelHTMLAttributes<HTMLLabelElement>, 'htmlFor' | 'id'>;

function LabelAsterisk() {
  return (
    <span className="spark-label-asterisk-wrap" aria-hidden="true">
      <svg
        className="spark-label-asterisk"
        width="7"
        height="7"
        viewBox="0 0 7 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.80902 7L1 6.39704L2.74007 3.94021L0 3.02615L0.309998 2.05163L3 2.94845V0H4V2.97598L6.69 2.05163L7 3.02723L4.28118 3.96124L6 6.39704L5.19 7L3.50269 4.60869L1.80902 7Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

export function Label({
  label = 'Label',
  showAsterisk = false,
  showIcon = false,
  htmlFor,
  id,
  className = '',
}: LabelProps) {
  const rootClass = ['spark-label', className].filter(Boolean).join(' ');
  const content = (
    <>
      <span className="spark-label-text">{label}</span>
      {showAsterisk ? <LabelAsterisk /> : null}
      {showIcon ? (
        <SparkIcon slug="circle-help" size="small" className="spark-label-help-icon" aria-hidden />
      ) : null}
    </>
  );

  if (htmlFor) {
    return (
      <label className={rootClass} htmlFor={htmlFor} id={id}>
        {content}
      </label>
    );
  }

  return (
    <div className={rootClass} id={id}>
      {content}
    </div>
  );
}
