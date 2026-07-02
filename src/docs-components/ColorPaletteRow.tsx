import type { ColorSwatch } from '../tokens/colors';
import { useCopyToClipboard } from './useCopyToClipboard';

type ColorPaletteRowProps = {
  title: string;
  swatches: ColorSwatch[];
};

export function ColorPaletteRow({ title, swatches }: ColorPaletteRowProps) {
  const { copy, copied } = useCopyToClipboard();

  return (
    <div className="color-palette-row">
      <div className="color-palette-row-name">{title}</div>
      <div className="color-palette-row-swatches">
        <div className="color-palette-stripe">
          <div className="color-palette-colors" role="list">
            {swatches.map((swatch) => (
              <button
                key={swatch.cssVar}
                type="button"
                className="color-palette-color"
                style={{ backgroundColor: `var(${swatch.cssVar}, ${swatch.hex})` }}
                onClick={() => copy(swatch.hex)}
                title={`Copy ${swatch.hex}`}
                aria-label={`${swatch.figmaToken}, ${swatch.hex}`}
              />
            ))}
          </div>
          <div className="color-palette-labels">
            {swatches.map((swatch) => (
              <code key={`${swatch.cssVar}-token`} className="color-palette-token">
                {swatch.figmaToken}
              </code>
            ))}
          </div>
          <div className="color-palette-values">
            {swatches.map((swatch) => (
              <button
                key={`${swatch.cssVar}-hex`}
                type="button"
                className="color-palette-hex"
                onClick={() => copy(swatch.hex)}
                title={`Copy ${swatch.hex}`}
              >
                {copied === swatch.hex ? 'Copied!' : swatch.hex}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
