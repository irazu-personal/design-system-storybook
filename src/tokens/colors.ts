/* Generated from src/tokens/figma-tokens.json — do not edit by hand */
/* Regenerate: .venv/bin/python docs/spark-ds/scripts/generate_colors_ts.py */

export type ColorSwatch = {
  family: string;
  step: string;
  hex: string;
  cssVar: string;
  /** CSS variable token name, e.g. --primitive-blue-500 */
  figmaToken: string;
  label?: string;
};

export type ColorFamily = {
  name: string;
  swatches: ColorSwatch[];
};

/** Maps a primitive swatch to its CSS variable name. */
export function figmaTokenPath(family: string, step: string): string {
  return `--${family}-${step}`;
}

function swatches(
  family: string,
  steps: Record<string, string>,
  labelFamily?: string,
): ColorSwatch[] {
  const nameFamily = labelFamily ?? family;
  return Object.entries(steps).map(([step, hex]) => ({
    family,
    step,
    hex: hex.toUpperCase(),
    cssVar: figmaTokenPath(nameFamily, step),
    figmaToken: figmaTokenPath(nameFamily, step),
    label: formatSwatchLabel(nameFamily, step),
  }));
}

export function formatSwatchLabel(family: string, step: string): string {
  const labels: Record<string, string> = {
    'deep-blue': 'Deep_blue',
    blue: 'Blue',
    neutral: 'Neutral',
    orange: 'Orange',
    green: 'Green',
    red: 'Red',
    yellow: 'Yellow',
    'alternative-bold': 'Alternative_bold',
    'alternative-subtle': 'Alternative_subtle',
  };
  const name = labels[family] ?? family.replace(/-/g, ' ');
  return `${name} - ${step}`;
}

/** Primitive palettes from figma-tokens.json (Colors/Value). */
export const systemColorFamilies: ColorFamily[] = [
  {
    name: "Blue",
    swatches: swatches("blue", {
      "100": "#F9FCFE",
      "200": "#F6F9FE",
      "300": "#ECF4FE",
      "400": "#CFE2FC",
      "500": "#008EF5",
      "600": "#376BBD",
      "700": "#2D579A",
      "800": "#214173",
    }, "blue"),
  },
  {
    name: "Deep Blue",
    swatches: swatches("deep-blue", {
      "100": "#F3F5F9",
      "200": "#DBDDF8",
      "300": "#B9BDF1",
      "400": "#8B90D7",
      "500": "#33377B",
      "600": "#373B65",
      "700": "#222649",
    }, "deep-blue"),
  },
  {
    name: "Green",
    swatches: swatches("green", {
      "100": "#FBFEFC",
      "200": "#CEEEDC",
      "300": "#B1E2C8",
      "400": "#69C497",
      "500": "#42A976",
      "600": "#32815A",
    }, "green"),
  },
  {
    name: "Neutral",
    swatches: swatches("neutral", {
      "50": "#FFFFFF",
      "100": "#FCFCFD",
      "200": "#F6F7F9",
      "300": "#E2E2E9",
      "400": "#CECEDA",
      "500": "#A7A9BE",
      "600": "#8C8EA1",
      "700": "#555768",
      "800": "#1A1B23",
    }, "neutral"),
  },
  {
    name: "Orange",
    swatches: swatches("orange", {
      "100": "#FFFCFA",
      "200": "#FDD6B9",
      "300": "#FCB887",
      "400": "#FB954B",
      "500": "#F96B05",
      "600": "#D75C05",
    }, "orange"),
  },
  {
    name: "Red",
    swatches: swatches("red", {
      "100": "#FFF6F5",
      "200": "#FFDAD6",
      "300": "#FFA8A3",
      "400": "#FF5552",
      "500": "#FF383A",
      "600": "#EF0B17",
      "700": "#C0121F",
      "800": "#8E0616",
    }, "red"),
  },
  {
    name: "Yellow",
    swatches: swatches("yellow", {
      "100": "#FEF9E6",
      "200": "#FEF3CD",
      "300": "#FDEDB5",
      "400": "#FDE79C",
      "500": "#FCE183",
    }, "yellow"),
  },
  {
    name: "Alternative Bold",
    swatches: swatches("alternative-bold", {
      "01": "#C81376",
      "02": "#A6119A",
      "03": "#6228B4",
      "04": "#163EE4",
      "05": "#0C7D7D",
      "06": "#5B7B0A",
      "07": "#D23805",
      "08": "#A5441F",
      "09": "#896015",
    }, "alternative-bold"),
  },
  {
    name: "Alternative Subtle",
    swatches: swatches("alternative-subtle", {
      "01": "#FFF0F6",
      "02": "#FDECFC",
      "03": "#F9F0FF",
      "05": "#E6FFFB",
      "06": "#FCFFE6",
      "07": "#FFF2E8",
      "08": "#FFEED2",
      "09": "#FFF9C2",
    }, "alternative-subtle"),
  },
];

/** Brand palettes from figma-tokens.json (Brnad colors/Mode 1). */
export const brandColorFamilies: ColorFamily[] = [
  {
    name: "Arcadia",
    swatches: Object.entries({"100": "#CCCCE2", "200": "#9998C5", "300": "#6767AB", "400": "#34358A", "500": "#252A5C"}).map(([step, hex]) => ({
      family: "arcadia",
      step,
      hex: hex.toUpperCase(),
      cssVar: `--arcadia-${step}`,
      figmaToken: `--arcadia-${step}`,
      label: `Arcadia - ${step}`,
    })),
  },
  {
    name: "Bright Blue",
    swatches: Object.entries({"100": "#D1DDFF", "200": "#A2BAFF", "300": "#7498FF", "400": "#4575FF", "500": "#1753FF"}).map(([step, hex]) => ({
      family: "bright-blue",
      step,
      hex: hex.toUpperCase(),
      cssVar: `--bright-blue-${step}`,
      figmaToken: `--bright-blue-${step}`,
      label: `Bright Blue - ${step}`,
    })),
  },
  {
    name: "Cute Megenta",
    swatches: Object.entries({"100": "#FEEAFA", "200": "#FDD6F5", "300": "#FBC1F1", "400": "#FAADEC", "500": "#F998E7"}).map(([step, hex]) => ({
      family: "cute-megenta",
      step,
      hex: hex.toUpperCase(),
      cssVar: `--cute-megenta-${step}`,
      figmaToken: `--cute-megenta-${step}`,
      label: `Cute Megenta - ${step}`,
    })),
  },
  {
    name: "Neon Peach",
    swatches: Object.entries({"100": "#FCF0E6", "200": "#F9E1CD", "300": "#FED1B1", "400": "#FDC197", "500": "#FDB27D"}).map(([step, hex]) => ({
      family: "neon-peach",
      step,
      hex: hex.toUpperCase(),
      cssVar: `--neon-peach-${step}`,
      figmaToken: `--neon-peach-${step}`,
      label: `Neon Peach - ${step}`,
    })),
  },
  {
    name: "Sparkling Silver",
    swatches: Object.entries({"100": "#FAFAFC", "200": "#F4F5F8", "300": "#EFF1F5", "400": "#E9ECF1", "500": "#E4E7EE"}).map(([step, hex]) => ({
      family: "sparkling-silver",
      step,
      hex: hex.toUpperCase(),
      cssVar: `--sparkling-silver-${step}`,
      figmaToken: `--sparkling-silver-${step}`,
      label: `Sparkling Silver - ${step}`,
    })),
  },
  {
    name: "Accent Yellow",
    swatches: Object.entries({"100": "#FEF9E6", "200": "#FEF3CD", "300": "#FDEDB5", "400": "#FDE79C", "500": "#FCE183"}).map(([step, hex]) => ({
      family: "accent-yellow",
      step,
      hex: hex.toUpperCase(),
      cssVar: `--accent-yellow-${step}`,
      figmaToken: `--accent-yellow-${step}`,
      label: `Accent Yellow - ${step}`,
    })),
  },
  {
    name: "Vivid Lavender",
    swatches: Object.entries({"100": "#F3E6FE", "200": "#E7CDFD", "300": "#DCB5FD", "400": "#D09CFC", "500": "#C483FB"}).map(([step, hex]) => ({
      family: "vivid-lavender",
      step,
      hex: hex.toUpperCase(),
      cssVar: `--vivid-lavender-${step}`,
      figmaToken: `--vivid-lavender-${step}`,
      label: `Vivid Lavender - ${step}`,
    })),
  },
];

/** Foundation palettes for the Colors page. */
export const foundationColorFamilies: ColorFamily[] = [
  ...systemColorFamilies,
  ...brandColorFamilies,
];

/** @deprecated Use systemColorFamilies */
export const primitiveFamilies = systemColorFamilies;

/** @deprecated Use brandColorFamilies */
export const brandOrangeFamily = brandColorFamilies[0];

export type TokenRow = {
  name: string;
  value: string;
  description?: string;
  hex?: string;
};

export const semanticColorTokens: TokenRow[] = [
  { name: "--semantic-content-primary", value: "var(--semantic-content-primary)", description: "Primary text" },
  { name: "--semantic-content-secondary", value: "var(--semantic-content-secondary)", description: "Secondary text" },
  { name: "--semantic-content-tertiary", value: "var(--semantic-content-tertiary)", description: "Tertiary text" },
  { name: "--semantic-content-inverse", value: "var(--semantic-content-inverse)", description: "Inverse text" },
  { name: "--semantic-surface-canvas", value: "var(--semantic-surface-canvas)", description: "Canvas background" },
  { name: "--semantic-surface-white", value: "var(--semantic-surface-white)", description: "Elevated white surface" },
  { name: "--semantic-surface-subtle", value: "var(--semantic-surface-subtle)", description: "Subtle surface" },
  { name: "--semantic-surface-muted", value: "var(--semantic-surface-muted)", description: "Muted surface" },
  { name: "--semantic-surface-sunken", value: "var(--semantic-surface-sunken)", description: "Sunken surface" },
  { name: "--semantic-surface-brand", value: "var(--semantic-surface-brand)", description: "Brand surface" },
  { name: "--semantic-border-default", value: "var(--semantic-border-default)", description: "Default border" },
  { name: "--semantic-border-strong", value: "var(--semantic-border-strong)", description: "Strong border" },
  { name: "--semantic-border-active", value: "var(--semantic-border-active)", description: "Active border" },
  { name: "--semantic-border-dark", value: "var(--semantic-border-dark)", description: "Dark border" },
];

export const allColorTokens: TokenRow[] = [
  ...foundationColorFamilies.flatMap((f) =>
    f.swatches.map((s) => ({
      name: s.cssVar,
      value: s.hex,
      hex: s.hex,
      description: `${f.name} ${s.step}`,
    })),
  ),
  ...semanticColorTokens,
];
