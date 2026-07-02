#!/usr/bin/env python3
"""Generate src/tokens/colors.ts from Figma Design Tokens JSON export."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
INPUT = ROOT / "src/tokens/figma-tokens.json"
OUTPUT = ROOT / "src/tokens/colors.ts"

COLORS_KEY = "Colors/Value"
SKIP_KEYS = {"$themes", "$metadata", "$extensions", "$description"}


def slug(part: str) -> str:
    return part.strip().lower().replace(" ", "-").replace("+", "-")


def sort_step(step: str) -> tuple[int, str]:
    return (0, f"{int(step):09d}") if step.isdigit() else (1, step)


def extract_hex_values(node: object) -> dict[str, str]:
    if not isinstance(node, dict):
        return {}
    if "$value" in node:
        value = node["$value"]
        if isinstance(value, str) and value.startswith("#"):
            return {"": value.upper()}
        return {}
    out: dict[str, str] = {}
    for key, value in node.items():
        if key in SKIP_KEYS or key.startswith("$"):
            continue
        nested = extract_hex_values(value)
        for sub_key, hex_value in nested.items():
            path = key if not sub_key else f"{key}/{sub_key}"
            out[path] = hex_value
    return out


def js_string(value: str) -> str:
    return json.dumps(value)


def swatches_block(family: str, steps: dict[str, str], *, label_family: str | None = None) -> str:
    name_family = label_family or family
    lines = ["    swatches: swatches(" + js_string(family) + ", {"]
    for step in sorted(steps, key=sort_step):
        lines.append(f"      {js_string(step)}: {js_string(steps[step])},")
    lines.append("    }, " + js_string(name_family) + "),")
    return "\n".join(lines)


def brand_swatches_block(display_name: str, token_slug: str, steps: dict[str, str]) -> str:
    step_entries = ", ".join(
        f'{js_string(step)}: {js_string(steps[step])}'
        for step in sorted(steps, key=sort_step)
    )
    return "\n".join(
        [
            "  {",
            f"    name: {js_string(display_name)},",
            f"    swatches: Object.entries({{{step_entries}}}).map(([step, hex]) => ({{",
            f"      family: {js_string(token_slug)},",
            "      step,",
            "      hex: hex.toUpperCase(),",
            f"      cssVar: `--{token_slug}-${{step}}`,",
            f"      figmaToken: `--{token_slug}-${{step}}`,",
            f"      label: `{display_name} - ${{step}}`,",
            "    })),",
            "  },",
        ]
    )


def primitive_family_name(family: str) -> str:
    names = {
        "blue": "Blue",
        "deep-blue": "Deep Blue",
        "neutral": "Neutral",
        "orange": "Orange",
        "green": "Green",
        "red": "Red",
        "yellow": "Yellow",
        "alternative-bold": "Alternative Bold",
        "alternative-subtle": "Alternative Subtle",
    }
    return names.get(family, family.replace("-", " ").title())


def main() -> None:
    data = json.loads(INPUT.read_text())
    colors = data.get(COLORS_KEY) or data.get("Colors/Mode 1", {})
    primitive = colors.get("primitive", {})
    brand = data.get("Brnad colors/Mode 1", {})

    system_families: list[str] = []
    alternative_families: list[str] = []
    for family, node in sorted(primitive.items()):
        if family == "alternative" and isinstance(node, dict):
            for variant in ("bold", "subtle"):
                if variant not in node:
                    continue
                token_family = f"alternative-{variant}"
                steps = extract_hex_values(node[variant])
                flat_steps = {step.split("/")[-1]: hex_value for step, hex_value in steps.items()}
                alternative_families.append(
                    "\n".join(
                        [
                            "  {",
                            f"    name: {js_string(primitive_family_name(token_family))},",
                            swatches_block(token_family, flat_steps),
                            "  },",
                        ]
                    )
                )
            continue

        steps = extract_hex_values(node)
        flat_steps = {step.split("/")[-1]: hex_value for step, hex_value in steps.items()}
        if not flat_steps:
            continue
        system_families.append(
            "\n".join(
                [
                    "  {",
                    f"    name: {js_string(primitive_family_name(family))},",
                    swatches_block(family, flat_steps),
                    "  },",
                ]
            )
        )
    system_families.extend(alternative_families)

    brand_families: list[str] = []
    for display_name, node in sorted(brand.items()):
        steps = extract_hex_values(node)
        flat_steps = {step.split("/")[-1]: hex_value for step, hex_value in steps.items()}
        if not flat_steps:
            continue
        token_slug = slug(display_name)
        brand_families.append(brand_swatches_block(display_name, token_slug, flat_steps))

    semantic_tokens = [
        ("--semantic-content-primary", "Primary text"),
        ("--semantic-content-secondary", "Secondary text"),
        ("--semantic-content-tertiary", "Tertiary text"),
        ("--semantic-content-inverse", "Inverse text"),
        ("--semantic-surface-canvas", "Canvas background"),
        ("--semantic-surface-white", "Elevated white surface"),
        ("--semantic-surface-subtle", "Subtle surface"),
        ("--semantic-surface-muted", "Muted surface"),
        ("--semantic-surface-sunken", "Sunken surface"),
        ("--semantic-surface-brand", "Brand surface"),
        ("--semantic-border-default", "Default border"),
        ("--semantic-border-strong", "Strong border"),
        ("--semantic-border-active", "Active border"),
        ("--semantic-border-dark", "Dark border"),
    ]

    semantic_lines = [
        "export const semanticColorTokens: TokenRow[] = [",
        *[
            f"  {{ name: {js_string(name)}, value: {js_string(f'var({name})')}, description: {js_string(desc)} }},"
            for name, desc in semantic_tokens
        ],
        "];",
    ]

    content = f"""/* Generated from src/tokens/figma-tokens.json — do not edit by hand */
/* Regenerate: .venv/bin/python docs/spark-ds/scripts/generate_colors_ts.py */

export type ColorSwatch = {{
  family: string;
  step: string;
  hex: string;
  cssVar: string;
  /** CSS variable token name, e.g. --primitive-blue-500 */
  figmaToken: string;
  label?: string;
}};

export type ColorFamily = {{
  name: string;
  swatches: ColorSwatch[];
}};

/** Maps a primitive swatch to its CSS variable name. */
export function figmaTokenPath(family: string, step: string): string {{
  return `--${{family}}-${{step}}`;
}}

function swatches(
  family: string,
  steps: Record<string, string>,
  labelFamily?: string,
): ColorSwatch[] {{
  const nameFamily = labelFamily ?? family;
  return Object.entries(steps).map(([step, hex]) => ({{
    family,
    step,
    hex: hex.toUpperCase(),
    cssVar: figmaTokenPath(nameFamily, step),
    figmaToken: figmaTokenPath(nameFamily, step),
    label: formatSwatchLabel(nameFamily, step),
  }}));
}}

export function formatSwatchLabel(family: string, step: string): string {{
  const labels: Record<string, string> = {{
    'deep-blue': 'Deep_blue',
    blue: 'Blue',
    neutral: 'Neutral',
    orange: 'Orange',
    green: 'Green',
    red: 'Red',
    yellow: 'Yellow',
    'alternative-bold': 'Alternative_bold',
    'alternative-subtle': 'Alternative_subtle',
  }};
  const name = labels[family] ?? family.replace(/-/g, ' ');
  return `${{name}} - ${{step}}`;
}}

/** Primitive palettes from figma-tokens.json ({COLORS_KEY}). */
export const systemColorFamilies: ColorFamily[] = [
{chr(10).join(system_families)}
];

/** Brand palettes from figma-tokens.json (Brnad colors/Mode 1). */
export const brandColorFamilies: ColorFamily[] = [
{chr(10).join(brand_families)}
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

export type TokenRow = {{
  name: string;
  value: string;
  description?: string;
  hex?: string;
}};

{chr(10).join(semantic_lines)}

export const allColorTokens: TokenRow[] = [
  ...foundationColorFamilies.flatMap((f) =>
    f.swatches.map((s) => ({{
      name: s.cssVar,
      value: s.hex,
      hex: s.hex,
      description: `${{f.name}} ${{s.step}}`,
    }})),
  ),
  ...semanticColorTokens,
];
"""

    OUTPUT.write_text(content)
    print(f"Wrote {OUTPUT}")


if __name__ == "__main__":
    main()
