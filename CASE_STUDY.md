# Case Study: Spark Design System

**Role:** System Product Designer  
**Timeline:** End of March – beginning of July  
**Scope:** End-to-end — visual language, Figma foundations, React components, and Storybook documentation

**Live Storybook:** [irazu-personal.github.io/design-system-storybook](https://irazu-personal.github.io/design-system-storybook/)

---

## The challenge

The product needed a cohesive UI language that designers and engineers could trust. Scattered patterns, inconsistent spacing, and one-off components slowed delivery and made accessibility hard to verify. The goal was a single source of truth: tokens in code, components with documented states, and a Storybook site teams could browse without opening Figma.

## My approach

### 1. Foundations first

I defined the primitive layer before shipping components:

- **Color** — primitive palettes, brand colors, and semantic token tiers
- **Typography** — Figtree-based type scale with documented usage
- **Dimensions** — spacing, radius, and layout tokens as CSS variables
- **Icons** — outlined icon set in Small (16px) and Medium (24px) sizes
- **Illustrations** — SVG set for empty states and onboarding
- **Logo** — brandmark variants for light and dark surfaces

Tokens live in `src/styles/tokens.css` and are surfaced in Storybook foundation pages so designers and developers see the same values.

### 2. Component library in React

I built and documented **50+ components**, including:

- **Actions:** Button, Floating Button, Toggle
- **Forms:** Input, Checkbox, Radio, Switch, Slider, DatePicker, AutoComplete, Upload
- **Navigation:** Breadcrumb, Tabs, Navigation bar, Pagination
- **Feedback:** Alert, Toast, Notification, Modal, Tooltip, Popover
- **Data display:** Table, Card variants, Tags, Badge, Avatar, Graphs
- **Layout:** Drawer, Header, Divider, Empty State, Skeleton

Each component has Storybook stories for variants, states, and accessibility review (via the a11y addon).

### 3. Documentation as product

Storybook is not a side artifact — it is the deliverable. Every foundation page and component doc is written for someone implementing UI without guessing:

- When to use which variant
- Token references instead of magic numbers
- Interactive controls to explore props
- Docs pages generated from MDX and CSF metadata

### 4. Design-to-code workflow

```
Figma variables → figma-tokens.json → CSS + TS generators → components → Storybook
```

This pipeline keeps hex values and naming aligned when foundations change, and gives engineers a clear path from design tokens to implementation.

## What I built (summary)

| Area | Deliverable |
|------|-------------|
| Visual design | Full Spark DS language — color, type, spacing, iconography |
| Figma | Foundation pages and component documentation frames |
| Code | React components + CSS modules / global token usage |
| Docs | Storybook foundations + component docs with stories |
| Tooling | Token sync scripts, icon manifest, GitHub Pages deploy |

**I owned everything** in this stack: from the new design direction through to the stories you see in Storybook.

## Highlights

### Token-driven components

Components consume CSS custom properties (`var(--dimension-spacing-04)`, semantic colors, etc.) so theme changes propagate without hunting hex values in component files.

### Complex patterns documented

Multi-step **Drawer** workflows, **Table** toolbars with empty states, **Modal** feedback patterns, and **Graph** components are documented with realistic layout examples — not isolated buttons in a vacuum.

### Accessibility built in

Storybook’s a11y addon runs on stories during development, catching contrast and labeling issues before handoff.

## Outcomes

- **Single source of truth** for UI foundations and component APIs
- **Faster handoff** — engineers browse Storybook instead of inspecting Figma frame by frame
- **Consistent patterns** across forms, navigation, feedback, and data-heavy screens
- **Portfolio-ready artifact** — this sanitized repo demonstrates systems thinking from tokens to shipped documentation

## Note on this repository

This is a **portfolio version** of professional work. Company logos, internal Figma links, and product-specific copy have been replaced with generic placeholders. The structure, tokens, components, and documentation patterns reflect the system as built.

---

*Questions? Reach out via your portfolio contact link.*
