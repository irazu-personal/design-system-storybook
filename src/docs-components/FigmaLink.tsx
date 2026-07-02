type FigmaLinkProps = {
  href: string;
  children: string;
};

export function FigmaLink({ href, children }: FigmaLinkProps) {
  return (
    <a
      className="colors-figma-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.preventDefault();
        window.open(href, '_blank', 'noopener,noreferrer');
      }}
    >
      {children}
    </a>
  );
}
