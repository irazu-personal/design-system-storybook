# Spark Design System — Storybook

Portfolio case study: a full design system documented and implemented in Storybook.

**Live demo:** [irazu-personal.github.io/design-system-storybook](https://irazu-personal.github.io/design-system-storybook/)

## About

Spark is a React design system with foundations (color, typography, spacing, icons, illustrations) and 50+ documented components. This repository is a **sanitized portfolio version** — company-specific branding and internal links have been replaced with generic placeholders.

For the full case study narrative, see [CASE_STUDY.md](./CASE_STUDY.md).

## Run locally

```bash
npm install
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006).

## Build static site

```bash
npm run build-storybook
```

Output is written to `storybook-static/`.

## Tech stack

- React 18
- Storybook 8 (Vite builder)
- TypeScript
- CSS custom properties for design tokens
- Storybook Docs + a11y addon

## Structure

- `src/styles/tokens.css` — design tokens
- `src/stories/foundations/` — Colors, Typography, Dimensions, Icons, Logo, Illustrations
- `src/components/` — React components with stories
- `public/icons/` — SVG icon set
- `public/illustrations/` — SVG illustrations

## Token regeneration

If you update `src/tokens/figma-tokens.json`:

```bash
python3 scripts/generate_tokens_css.py
python3 scripts/generate_colors_ts.py
```

## Deployment

Pushes to `main` deploy via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) using **GitHub Actions** (not branch deploy).

**One-time setup:** **Settings → Pages → Build and deployment → Source: GitHub Actions**

If a deploy times out, re-run the workflow from the Actions tab (GitHub Pages can queue deployments for several minutes on first publish).

## License

Portfolio demonstration only. Component and token implementations shown here were created as part of professional design-system work. Do not redistribute without permission.
