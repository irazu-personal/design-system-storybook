type ColorFamilyTitleProps = {
  children: string;
};

export function ColorFamilyTitle({ children }: ColorFamilyTitleProps) {
  return <h3 className="color-family-title">{children}</h3>;
}
