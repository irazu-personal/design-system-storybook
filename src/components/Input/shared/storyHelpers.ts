/** Matrix / section labels — Inter, black, semibold (size, type, state, variant). */
import { createElement, type ReactNode } from 'react';
const matrixSectionLabelBase = {
  margin: 0,
  fontSize: '0.875rem',
  fontFamily: 'Inter, sans-serif',
  color: '#000000',
  fontWeight: 'var(--typography-font-weight-semibold)',
  textTransform: 'capitalize' as const,
  flexShrink: 0,
};

/** Short axis labels (size, amount, yes/no). */
export const sizeLabelStyle = {
  ...matrixSectionLabelBase,
  width: '5.5rem',
};

/** Descriptive variant/state labels — fixed width keeps example column aligned. */
export const variantLabelStyle = {
  ...matrixSectionLabelBase,
  width: '9rem',
};

export const matrixLabelStyle = variantLabelStyle;

/** Vertical stack of label + component rows. */
export const storyMatrixSectionStyle = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '1rem',
};

/** Single matrix row: label and UI element side-by-side. */
export const storyMatrixItemRowStyle = {
  display: 'flex',
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: '1rem',
};

/**
 * Figma DS doc matrix rows — examples align to a 230px column (no flex gap).
 * Pair with `variantLabelStyle` / `storyMatrixVariantExampleWrapStyle`.
 */
export const storyMatrixItemRowDocStyle = {
  display: 'flex',
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
};

/** Example offset after a 9rem variant label (Figma doc column at 230px). */
export const storyMatrixVariantExampleWrapStyle = {
  marginLeft: 'calc(230px - 9rem)',
};

/** Example offset after a 5.5rem size label (Figma doc column at 230px). */
export const storyMatrixSizeExampleWrapStyle = {
  marginLeft: 'calc(230px - 5.5rem)',
};

/** Matrix row aligned to top (tall components: dropdown, empty state, text area). */
export const storyMatrixItemRowStartStyle = {
  ...storyMatrixItemRowStyle,
  alignItems: 'flex-start' as const,
};

export const storyMatrixFieldWrapStyle = {
  flex: '1 1 360px',
  minWidth: '240px',
  maxWidth: '100%',
};

export const storyMatrixRowStyle = storyMatrixSectionStyle;

export const storyFieldColumnStyle = {
  ...storyMatrixItemRowStartStyle,
  flex: '1 1 100%',
};

/** Canvas background used in card/table/widget story sections. */
export const storyCanvasStyle = {
  background: 'var(--semantic-surface-canvas)',
  padding: '1.5rem',
} as const;

export const storyCanvasDecorator = (StoryComponent: () => ReactNode) =>
  createElement('div', { style: storyCanvasStyle }, createElement(StoryComponent));

export const SIZE_DOCS = {
  small: '**small** (28px)',
  medium: '**medium** (36px)',
  large: '**large** (40px)',
} as const;
