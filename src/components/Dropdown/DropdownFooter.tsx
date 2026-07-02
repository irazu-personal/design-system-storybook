import { Button } from '../Button/Button';
import './Dropdown.css';

export function DropdownFooter({
  clearLabel = 'Clear',
  applyLabel = 'Apply',
}: {
  clearLabel?: string;
  applyLabel?: string;
}) {
  return (
    <div className="spark-dropdown-footer">
      <Button variant="tertiary" size="small" fill className="spark-dropdown-footer-btn">
        {clearLabel}
      </Button>
      <Button variant="secondary" size="small" fill className="spark-dropdown-footer-btn">
        {applyLabel}
      </Button>
    </div>
  );
}
