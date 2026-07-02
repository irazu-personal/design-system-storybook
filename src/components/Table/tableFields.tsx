import { DropdownMenu, type DropdownMenuSize } from '../DropdownMenu/DropdownMenu';

export type TableDropdownFieldProps = {
  size?: DropdownMenuSize;
  placeholder?: string;
  text?: string;
  className?: string;
};

/** Table toolbar / master-row dropdown trigger with open, hover, and pressed states. */
export function TableDropdownField({
  size = 'medium',
  placeholder = 'Input',
  text,
  className = '',
}: TableDropdownFieldProps) {
  return (
    <DropdownMenu
      size={size}
      showLabel={false}
      placeholder={placeholder}
      text={text ?? placeholder}
      panelLayout="overlay"
      className={className}
    />
  );
}
