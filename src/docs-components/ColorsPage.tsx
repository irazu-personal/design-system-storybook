import { useCallback, useEffect, useState } from 'react';
import { ColorPalette } from './ColorPalette';
import { brandColorFamilies, systemColorFamilies } from '../tokens/colors';

const TABS = ['Foundation tokens', 'Brand colors', 'Semantic tokens'] as const;
type ColorsTab = (typeof TABS)[number];

function tabFromHash(): ColorsTab {
  const hash = decodeURIComponent(window.location.hash.replace(/^#/, ''));
  if ((TABS as readonly string[]).includes(hash)) {
    return hash as ColorsTab;
  }
  return 'Foundation tokens';
}

export function ColorsPage() {
  const [activeTab, setActiveTab] = useState<ColorsTab>(() =>
    typeof window !== 'undefined' ? tabFromHash() : 'Foundation tokens',
  );

  const selectTab = useCallback((tab: ColorsTab) => {
    setActiveTab(tab);
    window.history.replaceState(
      null,
      '',
      `${window.location.pathname}${window.location.search}#${encodeURIComponent(tab)}`,
    );
  }, []);

  useEffect(() => {
    const onHashChange = () => setActiveTab(tabFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div className="colors-page sb-unstyled">
      <div className="colors-tabs" role="tablist" aria-label="Color token tiers">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            className={`colors-tab${activeTab === tab ? ' colors-tab-active' : ''}`}
            onClick={() => selectTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Foundation tokens' && (
        <div className="colors-tab-panel" role="tabpanel">
          <ColorPalette families={systemColorFamilies} />
        </div>
      )}

      {activeTab === 'Brand colors' && (
        <div className="colors-tab-panel" role="tabpanel">
          <ColorPalette families={brandColorFamilies} />
        </div>
      )}

      {activeTab === 'Semantic tokens' && (
        <div className="colors-tab-panel" role="tabpanel">
          <p className="colors-section-desc">
            Semantic color tokens map primitives to UI roles (content, surface, border, action, and
            more). Use them in components instead of hard-coded hex values.
          </p>
        </div>
      )}
    </div>
  );
}
