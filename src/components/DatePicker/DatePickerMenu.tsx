import { Button } from '../Button/Button';
import { SparkIcon } from '../SparkIcon';
import { DatePickerDay, type DatePickerDayState } from './DatePickerDay';
import { DatePickerPreset } from './DatePickerPreset';
import './DatePicker.css';

export type DatePickerRange = false | true;
export type DatePickerMenuProps = {
  range?: DatePickerRange;
  showPreset?: boolean;
  monthLabel?: string;
  secondMonthLabel?: string;
  className?: string;
};

type CalendarCell = {
  label: string;
  state?: DatePickerDayState;
};

const WEEKDAY_LABELS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const SINGLE_MONTH_ROWS: CalendarCell[][] = [
  [
    { label: '29', state: 'inactive' },
    { label: '30', state: 'inactive' },
    { label: '1', state: 'current' },
    { label: '2' },
    { label: '3' },
    { label: '4' },
    { label: '5' },
  ],
  [
    { label: '6' },
    { label: '7' },
    { label: '8' },
    { label: '9' },
    { label: '10' },
    { label: '11' },
    { label: '12' },
  ],
  [
    { label: '13' },
    { label: '14' },
    { label: '15' },
    { label: '16' },
    { label: '17' },
    { label: '18' },
    { label: '19' },
  ],
  [
    { label: '20' },
    { label: '21' },
    { label: '22' },
    { label: '23' },
    { label: '24' },
    { label: '25' },
    { label: '26' },
  ],
  [
    { label: '27' },
    { label: '28' },
    { label: '29' },
    { label: '30' },
    { label: '31' },
    { label: '1', state: 'inactive' },
    { label: '2', state: 'inactive' },
  ],
];

const RANGE_LEFT_ROWS: CalendarCell[][] = [
  [
    { label: '27', state: 'inactive' },
    { label: '28', state: 'inactive' },
    { label: '29', state: 'inactive' },
    { label: '30', state: 'inactive' },
    { label: '31', state: 'inactive' },
    { label: '1' },
    { label: '2' },
  ],
  [
    { label: '3', state: 'selected' },
    { label: '4', state: 'range' },
    { label: '5', state: 'range' },
    { label: '6', state: 'range' },
    { label: '7', state: 'range' },
    { label: '8', state: 'range' },
    { label: '9', state: 'selected' },
  ],
  [
    { label: '10' },
    { label: '11' },
    { label: '12' },
    { label: '13' },
    { label: '14' },
    { label: '15' },
    { label: '16' },
  ],
  [
    { label: '17' },
    { label: '18' },
    { label: '19' },
    { label: '20' },
    { label: '21' },
    { label: '22' },
    { label: '23' },
  ],
  [
    { label: '24' },
    { label: '25' },
    { label: '26' },
    { label: '27' },
    { label: '28' },
    { label: '29' },
    { label: '30' },
  ],
  [
    { label: '31' },
    { label: '1', state: 'inactive' },
    { label: '2', state: 'inactive' },
    { label: '3', state: 'inactive' },
    { label: '4', state: 'inactive' },
    { label: '5', state: 'inactive' },
    { label: '6', state: 'inactive' },
  ],
];

const RANGE_RIGHT_ROWS: CalendarCell[][] = [
  [
    { label: '28', state: 'inactive' },
    { label: '29', state: 'inactive' },
    { label: '30', state: 'inactive' },
    { label: '31', state: 'inactive' },
    { label: '1' },
    { label: '2' },
    { label: '3' },
  ],
  [
    { label: '4' },
    { label: '5' },
    { label: '6' },
    { label: '7' },
    { label: '8' },
    { label: '9' },
    { label: '10' },
  ],
  [
    { label: '11' },
    { label: '12' },
    { label: '13' },
    { label: '14' },
    { label: '15' },
    { label: '16' },
    { label: '17' },
  ],
  [
    { label: '18' },
    { label: '19' },
    { label: '20' },
    { label: '21' },
    { label: '22' },
    { label: '23' },
    { label: '24' },
  ],
  [
    { label: '25' },
    { label: '26' },
    { label: '27' },
    { label: '28' },
    { label: '29' },
    { label: '30' },
    { label: '31' },
  ],
];

function NavButtons({ direction }: { direction: 'leading' | 'trailing' }) {
  if (direction === 'leading') {
    return (
      <div className="spark-date-picker-nav">
        <Button
          variant="ghost"
          size="small"
          className="spark-date-picker-icon-btn"
          aria-label="Previous year"
          icon={<SparkIcon slug="chevrons-left" size="small" />}
        />
        <Button
          variant="ghost"
          size="small"
          className="spark-date-picker-icon-btn"
          aria-label="Previous month"
          icon={<SparkIcon slug="chevron-left" size="small" />}
        />
      </div>
    );
  }

  return (
    <div className="spark-date-picker-nav">
      <Button
        variant="ghost"
        size="small"
        className="spark-date-picker-icon-btn"
        aria-label="Next month"
        icon={<SparkIcon slug="chevron-right" size="small" />}
      />
      <Button
        variant="ghost"
        size="small"
        className="spark-date-picker-icon-btn"
        aria-label="Next year"
        icon={<SparkIcon slug="chevrons-right" size="small" />}
      />
    </div>
  );
}

function CalendarMonth({
  monthLabel,
  rows,
  showTrailingNav = true,
  showLeadingNav = true,
}: {
  monthLabel: string;
  rows: CalendarCell[][];
  showTrailingNav?: boolean;
  showLeadingNav?: boolean;
}) {
  return (
    <div className="spark-date-picker-month">
      <div className="spark-date-picker-header">
        {showLeadingNav ? <NavButtons direction="leading" /> : <div className="spark-date-picker-nav" aria-hidden="true" />}
        <p className="spark-date-picker-month-label">{monthLabel}</p>
        {showTrailingNav ? <NavButtons direction="trailing" /> : <div className="spark-date-picker-nav" aria-hidden="true" />}
      </div>
      <div className="spark-date-picker-grid">
        <div className="spark-date-picker-row">
          {WEEKDAY_LABELS.map((day) => (
            <div key={day} className="spark-date-picker-cell-wrap">
              <DatePickerDay label={day} interactive={false} />
            </div>
          ))}
        </div>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="spark-date-picker-row">
            {row.map((cell) => (
              <div key={`${rowIndex}-${cell.label}`} className="spark-date-picker-cell-wrap">
                <DatePickerDay label={cell.label} state={cell.state} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function DatePickerMenu({
  range = false,
  showPreset = true,
  monthLabel = 'Dec 2020',
  secondMonthLabel = 'Jan 2026',
  className = '',
}: DatePickerMenuProps) {
  const rootClasses = [
    'spark-date-picker-menu',
    range ? 'spark-date-picker-menu-range' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClasses} role="dialog" aria-label="Date picker">
      {showPreset ? (
        <div className="spark-date-picker-presets">
          <DatePickerPreset label="Yesterday" />
          <DatePickerPreset label="Last Week" />
          <DatePickerPreset label="Last Month" />
        </div>
      ) : null}
      {range ? (
        <div className="spark-date-picker-body-range">
          <CalendarMonth monthLabel={monthLabel} rows={RANGE_LEFT_ROWS} showTrailingNav={false} />
          <CalendarMonth monthLabel={secondMonthLabel} rows={RANGE_RIGHT_ROWS} showLeadingNav={false} />
        </div>
      ) : (
        <div className="spark-date-picker-body">
          <CalendarMonth monthLabel={monthLabel} rows={SINGLE_MONTH_ROWS} />
          <div className="spark-date-picker-footer">
            <Button variant="ghost" size="small">
              Today
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
