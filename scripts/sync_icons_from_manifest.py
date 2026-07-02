#!/usr/bin/env python3
"""Regenerate src/tokens/icons.ts from public/icons/manifest.json."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "public" / "icons" / "manifest.json"
ICONS_TS = ROOT / "src" / "tokens" / "icons.ts"

DISPLAY_OVERRIDES: dict[str, str] = {
    "brain-icon": "Brain",
    "clock-hour-icon": "Clock hour",
    "external-link-icons": "External link",
    "lock-password-icon": "Lock password",
    "message-icon": "Message",
    "message-circle-icon": "Message circle",
    "microphone-icon": "Microphone",
    "report-analytics-icon": "Report analytics",
    "category-plus": "Category +",
    "open-ai": "Open AI",
    "deepseek": "DeepSeek",
    "github": "Github",
    "huggingface": "Huggingface",
    "www": "WWW",
    "code-circle-2": "Code circle 2",
    "sparkles-2": "Sparkles 2",
    "sparkles-3": "Sparkles 3",
}


def display_name(slug: str) -> str:
    if slug in DISPLAY_OVERRIDES:
        return DISPLAY_OVERRIDES[slug]
    cleaned = re.sub(r"-(?:icon|icons)$", "", slug)
    label = cleaned.replace("-", " ")
    return label[:1].upper() + label[1:] if label else label


def main() -> None:
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    lines = [
        "import { sparkAssetUrl } from '../utils/sparkAssetUrl';",
        "",
        "export type IconEntry = {",
        "  name: string;",
        "  slug: string;",
        "  medium: string;",
        "  small: string;",
        "};",
        "",
        "export type IconGroup = {",
        "  name: string;",
        "  icons: IconEntry[];",
        "};",
        "",
        "function icon(name: string, slug: string): IconEntry {",
        "  return {",
        "    name,",
        "    slug,",
        "    medium: sparkAssetUrl(`icons/${slug}-medium.svg`),",
        "    small: sparkAssetUrl(`icons/${slug}-small.svg`),",
        "  };",
        "}",
        "",
        "export const iconGroups: IconGroup[] = [",
    ]

    for group in manifest["groups"]:
        lines.append("  {")
        lines.append(f"    name: '{group['title']}',")
        lines.append("    icons: [")
        for slug in group["icons"]:
            name = display_name(slug).replace("'", "\\'")
            lines.append(f"      icon('{name}', '{slug}'),")
        lines.append("    ],")
        lines.append("  },")

    lines.append("];")
    lines.append("")
    ICONS_TS.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {ICONS_TS} ({manifest['count']} icons)")


if __name__ == "__main__":
    main()
