import { illustrationGroups } from '../tokens/illustrations';

export function IllustrationsPage() {
  return (
    <div className="illustrations-page sb-unstyled">
      <p className="illustrations-intro">
        Spark illustration set for empty states, onboarding, and marketing surfaces. Assets are SVG
        files on a 560×640 artboard.
      </p>

      {illustrationGroups.map((group) => (
        <section key={group.name} className="illustrations-group">
          <h3 className="illustrations-group-title">{group.name}</h3>
          <div className="illustrations-grid">
            {group.illustrations.map((entry) => (
              <article key={entry.slug} className="illustrations-card">
                <div className="illustrations-card-preview">
                  <img src={entry.src} alt="" className="illustrations-card-img" />
                </div>
                <p className="illustrations-card-name">{entry.name}</p>
                <p className="illustrations-card-slug">{entry.slug}.svg</p>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
