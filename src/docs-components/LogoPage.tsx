import { logoGroups } from '../tokens/logo';

export function LogoPage() {
  return (
    <div className="logo-page sb-unstyled">
      <p className="logo-intro">
        Spark brandmarks — logo-only, text-only, and lockup variants. Use **black** marks on light
        surfaces and **white** marks on dark surfaces.
      </p>

      {logoGroups.map((group) => (
        <section key={group.name} className="logo-group">
          <h3 className="logo-group-title">{group.name}</h3>
          <div className="logo-row">
            {group.logos.map((entry) => (
              <article key={entry.slug} className="logo-card">
                <div
                  className={[
                    'logo-card-preview',
                    group.surface === 'dark' ? 'logo-card-preview-dark' : 'logo-card-preview-light',
                  ].join(' ')}
                >
                  <img src={entry.src} alt="" className="logo-card-img" />
                </div>
                <p className="logo-card-name">{entry.name}</p>
                <p className="logo-card-slug">{entry.slug}.svg</p>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
