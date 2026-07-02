import type { ColorSwatch } from '../tokens/colors';
import { formatSwatchLabel } from '../tokens/colors';
import { ColorFamilyTitle } from './ColorFamilyTitle';
import { useCopyToClipboard } from './useCopyToClipboard';

type SwatchGridProps = {
  title?: string;
  swatches: ColorSwatch[];
};

export function SwatchGrid({ title, swatches }: SwatchGridProps) {
  const { copy, copied } = useCopyToClipboard();

  return (
    <div className="swatch-group">
      {title ? <ColorFamilyTitle>{title}</ColorFamilyTitle> : null}
      <div className="swatch-grid">
        {swatches.map((swatch) => {
          const tokenName = `var(${swatch.cssVar})`;
          const label = swatch.label ?? formatSwatchLabel(swatch.family, swatch.step);
          return (
            <button
              key={swatch.cssVar}
              type="button"
              className="swatch-card"
              onClick={() => copy(tokenName)}
              title={`Copy ${tokenName}`}
            >
              <div
                className="swatch-color"
                style={{ backgroundColor: `var(${swatch.cssVar}, ${swatch.hex})` }}
              />
              <div className="swatch-label-row">
                <span className="swatch-name-badge">{label}</span>
              </div>
              <div className="swatch-hex-row">
                <span className="swatch-hex-label">Hex</span>
                <span className="swatch-hex-value">
                  {copied === tokenName ? 'Copied!' : swatch.hex}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
