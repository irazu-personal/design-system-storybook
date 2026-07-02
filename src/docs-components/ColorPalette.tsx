import type { ColorFamily } from '../tokens/colors';
import { ColorPaletteRow } from './ColorPaletteRow';

type ColorPaletteProps = {
  families: ColorFamily[];
};

export function ColorPalette({ families }: ColorPaletteProps) {
  return (
    <div className="color-palette">
      <div className="color-palette-header">
        <span className="color-palette-header-name">Name</span>
        <span className="color-palette-header-swatches">Swatches</span>
      </div>
      {families.map((family) => (
        <ColorPaletteRow key={family.name} title={family.name} swatches={family.swatches} />
      ))}
    </div>
  );
}
