import { useMemo, useState } from 'react';
import { iconGroups, type IconEntry } from '../tokens/icons';

function matchesIconQuery(entry: IconEntry, query: string): boolean {
  return entry.name.toLowerCase().includes(query) || entry.slug.toLowerCase().includes(query);
}

async function downloadIcon(url: string, filename: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${filename}`);
  }

  const blob = await response.blob();
  const objectUrl = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = objectUrl;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(objectUrl);
}

export function IconsPage() {
  const [query, setQuery] = useState('');
  const normalizedQuery = query.toLowerCase().trim();

  const totalIconCount = useMemo(
    () => iconGroups.reduce((count, group) => count + group.icons.length, 0),
    [],
  );

  const filteredGroups = useMemo(
    () =>
      iconGroups
        .map((group) => ({
          ...group,
          icons: normalizedQuery
            ? group.icons.filter((entry) => matchesIconQuery(entry, normalizedQuery))
            : group.icons,
        }))
        .filter((group) => group.icons.length > 0),
    [normalizedQuery],
  );

  const filteredIconCount = useMemo(
    () => filteredGroups.reduce((count, group) => count + group.icons.length, 0),
    [filteredGroups],
  );

  return (
    <div className="icons-page sb-unstyled">
      <p className="icons-intro">
        Outlined icons from the Spark library. Each icon is available in two sizes:{' '}
        <strong>Small (16px)</strong> and <strong>Medium (24px)</strong>.
      </p>

      <div className="token-search-wrapper icons-search-wrapper">
        <input
          type="search"
          className="token-search"
          placeholder="Search icons by name or slug..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Search icons"
        />
        <div className="token-search-count">
          {normalizedQuery
            ? `${filteredIconCount} of ${totalIconCount} icons`
            : `${totalIconCount} icons`}
        </div>
      </div>

      {filteredGroups.length === 0 ? (
        <p className="icons-empty">No icons match your search.</p>
      ) : (
        filteredGroups.map((group) => (
          <section key={group.name} className="icons-group">
            <h3 className="icons-group-title">{group.name}</h3>
            <div className="icons-grid">
              {group.icons.map((entry) => (
                <article key={entry.slug} className="icons-card">
                  <div className="icons-card-preview">
                    <div className="icons-size-cell">
                      <img
                        src={entry.medium}
                        alt=""
                        width={24}
                        height={24}
                        className="icons-preview-img icons-preview-medium"
                      />
                      <span className="icons-size-label">24</span>
                    </div>
                    <div className="icons-size-cell">
                      <img
                        src={entry.small}
                        alt=""
                        width={16}
                        height={16}
                        className="icons-preview-img icons-preview-small"
                      />
                      <span className="icons-size-label">16</span>
                    </div>
                  </div>
                  <p className="icons-card-name">{entry.name}</p>
                  <p className="icons-card-slug">{entry.slug}</p>
                  <div className="icons-download-actions">
                    <button
                      type="button"
                      className="copy-btn icons-download-btn"
                      onClick={() => downloadIcon(entry.medium, `${entry.slug}-medium.svg`)}
                    >
                      Download 24px
                    </button>
                    <button
                      type="button"
                      className="copy-btn icons-download-btn"
                      onClick={() => downloadIcon(entry.small, `${entry.slug}-small.svg`)}
                    >
                      Download 16px
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
}
