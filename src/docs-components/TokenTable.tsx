import { useMemo, useState } from 'react';
import type { TokenRow } from '../tokens/colors';
import { useCopyToClipboard } from './useCopyToClipboard';

type TokenTableProps = {
  tokens: TokenRow[];
  title?: string;
  showSearch?: boolean;
};

export function TokenTable({ tokens, title, showSearch = true }: TokenTableProps) {
  const [query, setQuery] = useState('');
  const { copy, copied } = useCopyToClipboard();

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return tokens;
    return tokens.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.value.toLowerCase().includes(q) ||
        (t.description?.toLowerCase().includes(q) ?? false),
    );
  }, [tokens, query]);

  return (
    <div className="token-category">
      {title ? <h3>{title}</h3> : null}
      {showSearch ? (
        <div className="token-search-wrapper">
          <input
            type="search"
            className="token-search"
            placeholder="Search tokens..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search tokens"
          />
          <div className="token-search-count">
            {query
              ? `${filtered.length} of ${tokens.length} tokens`
              : `${tokens.length} tokens`}
          </div>
        </div>
      ) : null}
      <div className="token-table-wrapper">
        <table className="token-table">
          <thead>
            <tr>
              <th>Token</th>
              <th>Value</th>
              <th>Description</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {filtered.map((token) => (
              <tr key={token.name}>
                <td>
                  <div className="token-name-cell">
                    {token.hex ? (
                      <span
                        className="token-swatch"
                        style={{ backgroundColor: token.hex }}
                      />
                    ) : null}
                    <span className="token-name">{token.name}</span>
                  </div>
                </td>
                <td className="token-value">{token.value}</td>
                <td>{token.description ?? '—'}</td>
                <td>
                  <button
                    type="button"
                    className="copy-btn"
                    onClick={() => copy(`var(${token.name})`)}
                  >
                    {copied === `var(${token.name})` ? 'Copied' : 'Copy'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
