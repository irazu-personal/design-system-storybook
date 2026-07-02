type DsVariableTokenProps = {
  label: string;
};

/** Storybook docs inline code chip (matches Dimensions `<code>` / css-1d8krqb). */
export function DsVariableToken({ label }: DsVariableTokenProps) {
  return <code className="ds-variable-token">{label}</code>;
}

/** Strip leading `--` and optional collection prefix for compact chip labels. */
export function tokenChipLabel(cssVar: string, collectionPrefix?: string): string {
  const bare = cssVar.startsWith('--') ? cssVar.slice(2) : cssVar;
  if (collectionPrefix && bare.startsWith(`${collectionPrefix}-`)) {
    return bare.slice(collectionPrefix.length + 1);
  }
  return bare;
}
