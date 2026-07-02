#!/usr/bin/env python3
"""Generate tokens.css from Figma Design Tokens JSON export."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
INPUT = ROOT / "src/tokens/figma-tokens.json"
SHADOW_INPUT = ROOT / "src/tokens/shadow-tokens.json"
OUTPUT = ROOT / "src/styles/tokens.css"

SKIP_KEYS = {"$themes", "$metadata", "$extensions", "$description"}
COLORS_KEY = "Colors/Value"


def slug(part: str) -> str:
    return part.strip().lower().replace(" ", "-").replace("+", "-")


def path_to_var(parts: list[str], *, prefix: str | None = None) -> str:
    cleaned = [slug(p) for p in parts]
    if prefix:
        return f"--{prefix}-{'-'.join(cleaned)}"
    return f"--{'-'.join(cleaned)}"


def ref_to_var(ref: str) -> str:
    inner = ref.strip("{}")
    return path_to_var(inner.split("."))


def flatten(node: object, parts: list[str], out: dict[str, object]) -> None:
    if not isinstance(node, dict):
        return
    if "$value" in node:
        out[path_to_var(parts)] = node["$value"]
        return
    for key, value in node.items():
        if key in SKIP_KEYS or key.startswith("$"):
            continue
        flatten(value, [*parts, key], out)


def colors_collection(data: dict) -> dict:
    return data.get(COLORS_KEY) or data.get("Colors/Mode 1", {})


def shadow_value(props: dict) -> str | None:
    try:
        x = props["x"]["$value"]
        y = props["y"]["$value"]
        blur = props["blur"]["$value"]
        spread = props["spread"]["$value"]
        color = props["color"]["$value"]
    except (KeyError, TypeError):
        return None
    if not isinstance(color, str):
        return None
    color = color.upper()
    blur_str = f"{blur:g}px"
    return f"{x}px {y}px {blur_str} {spread}px {color}"


def collect_shadows(data: dict) -> dict[str, str]:
    tokens: dict[str, str] = {}
    for name, props in data.get("Tokens", {}).items():
        if not isinstance(props, dict):
            continue
        css = shadow_value(props)
        if css:
            tokens[f"--shadow-{slug(name)}"] = css
    return tokens


def collect_tokens(data: dict) -> dict[str, object]:
    tokens: dict[str, object] = {}

    colors = colors_collection(data)
    flatten(colors.get("primitive", {}), ["primitive"], tokens)
    flatten(colors.get("semantic", {}), ["semantic"], tokens)

    brand = data.get("Brnad colors/Mode 1", {})
    flatten(brand, [], tokens)

    typography = data.get("Typography/Default", {})
    flatten(typography, ["typography"], tokens)

    dimensions = data.get("Dimensions/Default", {})
    flatten(dimensions, ["dimension"], tokens)

    return tokens


def format_value(var_name: str, value: object) -> str:
    if isinstance(value, str) and value.startswith("{") and value.endswith("}"):
        return f"var({ref_to_var(value)})"

    if isinstance(value, str):
        if re.fullmatch(r"#[0-9a-fA-F]{3,8}", value):
            return value.upper()
        if "font-family" in var_name and var_name.endswith(("-base", "-platform", "-code")):
            return (
                f'"{value}", system-ui, -apple-system, BlinkMacSystemFont, '
                '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
            )
        return value

    if isinstance(value, (int, float)):
        if "font-weight" in var_name:
            return str(int(value))
        if "border-radius" in var_name and var_name.endswith("-00"):
            return "9999px"
        return f"{value}px"

    return str(value)


def resolve_tokens(raw: dict[str, object]) -> dict[str, str]:
    resolved: dict[str, str] = {}
    for name, value in sorted(raw.items()):
        resolved[name] = format_value(name, value)
    for _ in range(4):
        changed = False
        for name, value in list(resolved.items()):
            if not (isinstance(value, str) and value.startswith("var(") and value.endswith(")")):
                continue
            ref = value[4:-1]
            if ref in resolved and not resolved[ref].startswith("var("):
                resolved[name] = resolved[ref]
                changed = True
        if not changed:
            break
    return resolved


def section(title: str, names: list[str], resolved: dict[str, str]) -> list[str]:
    lines = [f"  /* {title} */"]
    for name in names:
        if name in resolved:
            lines.append(f"  {name}: {resolved[name]};")
    return lines


def brand_names(resolved: dict[str, str]) -> list[str]:
    reserved_prefixes = ("--primitive-", "--semantic-", "--typography-", "--dimension-")
    return sorted(
        name
        for name in resolved
        if not name.startswith(reserved_prefixes)
        and re.fullmatch(r"--[a-z0-9-]+", name)
    )


def compat_block() -> list[str]:
    spacing = [
        ("01", "02"),
        ("02", "04"),
        ("03", "08"),
        ("04", "12"),
        ("05", "16"),
        ("06", "20"),
        ("07", "24"),
        ("08", "32"),
        ("09", "48"),
    ]
    lines = [
        "  /* Compatibility aliases for Storybook components (not in Figma export) */",
        '  --typography-font-family-base: var(--typography-font-family-platform);',
        '  --primitive-font-family-sans: var(--typography-font-family-base);',
        '  --primitive-font-family-mono: var(--typography-font-family-code);',
        "  --primitive-border-width-1: var(--dimension-line-width-subtle);",
        "  --primitive-border-width-2: var(--dimension-line-width-bold);",
        "  --dimension-line-width-focus: 2px;",
        "",
    ]

    for old_step, new_step in spacing:
        token = f"var(--dimension-spacing-{new_step})"
        lines.append(f"  --dimension-size-{old_step}: {token};")
        lines.append(f"  --dimension-space-margin-{old_step}: {token};")
        lines.append(f"  --dimension-space-padding-{old_step}: {token};")

    radius_compat = [
        ("02", "04"),
        ("03", "04"),
        ("04", "06"),
        ("05", "08"),
        ("06", "12"),
        ("07", "24"),
    ]
    lines.extend(
        [
            "",
            "  --primitive-radius-sm: var(--dimension-border-radius-04);",
            "  --primitive-radius-md: var(--dimension-border-radius-08);",
            "  --primitive-radius-lg: var(--dimension-border-radius-12);",
            "  --primitive-radius-full: var(--dimension-border-radius-00);",
        ]
    )
    for old_step, new_step in radius_compat:
        lines.append(f"  --dimension-border-radius-{old_step}: var(--dimension-border-radius-{new_step});")

    lines.extend(
        [
            "",
            "  --semantic-surface-main: var(--semantic-surface-canvas);",
            "  --semantic-surface-elevated: var(--semantic-surface-white);",
            "  --semantic-surface-accent: var(--semantic-surface-brand);",
            "  --semantic-border-interactive: var(--semantic-border-active);",
            "  --semantic-border-subtle: var(--semantic-border-default);",
            "",
            "  --semantic-typography-body-font-family: var(--typography-font-family-base);",
            "  --semantic-typography-body-md-font-size: var(--typography-font-size-base);",
            "  --semantic-typography-body-line-height: var(--typography-line-height-base);",
            "  --semantic-typography-heading-font-family: var(--typography-font-family-base);",
            "  --semantic-typography-heading-font-weight: var(--typography-font-weight-semibold);",
            "  --semantic-typography-heading-xl-font-size: var(--typography-font-size-heading1);",
            "  --semantic-typography-heading-xl-line-height: var(--typography-line-height-heading1);",
            "  --semantic-typography-heading-lg-font-size: var(--typography-font-size-heading2);",
            "  --semantic-typography-heading-lg-line-height: var(--typography-line-height-heading2);",
            "  --semantic-typography-heading-md-font-size: var(--typography-font-size-heading3);",
            "  --semantic-typography-heading-md-line-height: var(--typography-line-height-heading3);",
            "  --semantic-typography-heading-sm-font-size: var(--typography-font-size-heading4);",
            "  --semantic-typography-heading-sm-line-height: var(--typography-line-height-heading4);",
            "  --semantic-typography-body-lg-font-size: var(--typography-font-size-lead);",
            "  --semantic-typography-body-sm-font-size: var(--typography-font-size-detail);",
            "  --semantic-typography-button-font-family: var(--typography-font-family-base);",
            "  --semantic-typography-button-tiny-font-size: var(--typography-font-size-detail);",
            "  --semantic-typography-button-tiny-font-weight: var(--typography-font-weight-regular);",
            "  --semantic-typography-button-tiny-line-height: var(--typography-line-height-detail);",
            "  --semantic-typography-button-small-font-size: var(--typography-font-size-base);",
            "  --semantic-typography-button-small-font-weight: var(--typography-font-weight-regular);",
            "  --semantic-typography-button-small-line-height: var(--typography-line-height-base);",
            "  --semantic-typography-button-medium-font-size: var(--typography-font-size-base);",
            "  --semantic-typography-button-medium-font-weight: var(--typography-font-weight-medium);",
            "  --semantic-typography-button-medium-line-height: var(--typography-line-height-base);",
            "  --semantic-typography-button-large-font-size: var(--typography-font-size-lead);",
            "  --semantic-typography-button-large-font-weight: var(--typography-font-weight-regular);",
            "  --semantic-typography-button-large-line-height: var(--typography-line-height-lead);",
            "",
            "  --semantic-button-height-tiny: 24px;",
            "  --semantic-button-height-small: 28px;",
            "  --semantic-button-height-medium: 36px;",
            "  --semantic-button-height-large: 40px;",
            "  --semantic-button-padding-x-tiny: var(--dimension-spacing-12);",
            "  --semantic-button-padding-x-small: var(--dimension-spacing-12);",
            "  --semantic-button-padding-x-medium: var(--dimension-spacing-16);",
            "  --semantic-button-padding-x-large: var(--dimension-spacing-16);",
            "  --semantic-button-gap-icon-label-tiny: var(--dimension-spacing-04);",
            "  --semantic-button-gap-icon-label-small: var(--dimension-spacing-08);",
            "  --semantic-button-gap-icon-label-medium: var(--dimension-spacing-08);",
            "  --semantic-button-gap-icon-label-large: var(--dimension-spacing-08);",
            "  --semantic-button-border-radius-small: var(--dimension-border-radius-08);",
            "  --semantic-button-border-radius-medium: var(--dimension-border-radius-08);",
            "  --semantic-button-icon-size-tiny: 16px;",
            "  --semantic-button-icon-size-small: 16px;",
            "  --semantic-button-icon-size-medium: 24px;",
            "  --semantic-button-icon-size-large: 24px;",
            "",
            "  --semantic-shadow-focus-ring-neutral: 0 0 0 2px var(--primitive-neutral-50), 0 0 0 calc(2px + var(--dimension-line-width-focus)) var(--semantic-button-border-focus);",
            "  --semantic-motion-button-transition: background 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), border-color 150ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);",
            "",
            "  --primitive-neutral-0: var(--primitive-neutral-50);",
            "  --primitive-neutral-900: var(--primitive-neutral-800);",
        ]
    )
    return lines


def shadow_section(shadows: dict[str, str]) -> list[str]:
    if not shadows:
        return []
    lines = ["  /* SHADOWS */"]
    for name in sorted(shadows):
        lines.append(f"  {name}: {shadows[name]};")
    return lines


def main() -> None:
    data = json.loads(INPUT.read_text())
    raw = collect_tokens(data)
    resolved = resolve_tokens(raw)

    shadows = collect_shadows(json.loads(SHADOW_INPUT.read_text())) if SHADOW_INPUT.exists() else {}

    primitive = [k for k in resolved if k.startswith("--primitive-")]
    semantic = [k for k in resolved if k.startswith("--semantic-")]
    brand = brand_names(resolved)
    typography = [k for k in resolved if k.startswith("--typography-")]
    dimension = [k for k in resolved if k.startswith("--dimension-")]

    lines = [
        "/* Generated from src/tokens/figma-tokens.json and shadow-tokens.json — do not edit by hand */",
        "/* Regenerate: .venv/bin/python docs/spark-ds/scripts/generate_tokens_css.py */",
        "",
        ":root {",
        *section("PRIMITIVE COLORS", primitive, resolved),
        "",
        *section("SEMANTIC COLORS", semantic, resolved),
        "",
        *section("BRAND COLORS", brand, resolved),
        "",
        *section("TYPOGRAPHY", typography, resolved),
        "",
        *section("DIMENSIONS", dimension, resolved),
        "",
        *shadow_section(shadows),
        "",
        *compat_block(),
        "}",
        "",
    ]

    OUTPUT.write_text("\n".join(lines))
    print(f"Wrote {len(resolved)} color/typography/dimension tokens and {len(shadows)} shadows to {OUTPUT}")


if __name__ == "__main__":
    main()
