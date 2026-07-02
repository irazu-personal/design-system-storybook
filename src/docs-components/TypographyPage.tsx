import { useEffect, useState, type CSSProperties } from 'react';
import { DsVariableToken, tokenChipLabel } from './DsVariableToken';
import {
  textStyleVar,
  textStyleVarPart,
  typographyTextStyles,
  type TypographyStyleGroup,
  type TypographyVariant,
} from '../tokens/typography';

function parsePx(cssVar: string): string {
  if (typeof window === 'undefined') return '';
  const value = getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
  return value || cssVar;
}

function groupSharedFontWeightVar(group: TypographyStyleGroup): string | null {
  const weightVars = [...new Set(group.variants.map((variant) => variant.fontWeightVar))];
  return weightVars.length === 1 ? weightVars[0] : null;
}

function TypographySpecs({ group }: { group: TypographyStyleGroup }) {
  const [fontSize, setFontSize] = useState('');
  const [lineHeight, setLineHeight] = useState('');
  const [fontWeight, setFontWeight] = useState('');
  const sharedFontWeightVar = groupSharedFontWeightVar(group);

  useEffect(() => {
    setFontSize(parsePx(group.fontSizeVar));
    setLineHeight(parsePx(group.lineHeightVar));
    if (sharedFontWeightVar) {
      setFontWeight(parsePx(sharedFontWeightVar));
    }
  }, [group.fontSizeVar, group.lineHeightVar, sharedFontWeightVar]);

  return (
    <div className="typography-style-specs">
      <div className="typography-spec-line">
        <p>Font size: {fontSize || `var(${group.fontSizeVar})`}</p>
        <DsVariableToken label={tokenChipLabel(group.fontSizeVar, 'typography')} />
      </div>
      <div className="typography-spec-line">
        <p>Line height: {lineHeight || `var(${group.lineHeightVar})`}</p>
        <DsVariableToken label={tokenChipLabel(group.lineHeightVar, 'typography')} />
      </div>
      {sharedFontWeightVar ? (
        <div className="typography-spec-line">
          <p>Font weight: {fontWeight || `var(${sharedFontWeightVar})`}</p>
          <DsVariableToken label={tokenChipLabel(sharedFontWeightVar, 'typography')} />
        </div>
      ) : null}
    </div>
  );
}

function TypographySampleCell({ variant }: { variant: TypographyVariant }) {
  return (
    <div className="typography-sample-cell">
      <p className="typography-sample" style={variantStyle(variant)}>
        {variant.label}
      </p>
      <div className="typography-spec-line">
        <DsVariableToken
          label={tokenChipLabel(textStyleVar(variant.textStyleSlug), 'semantic-typography-text-style')}
        />
      </div>
    </div>
  );
}

function variantStyle(variant: TypographyVariant): CSSProperties {
  const slug = variant.textStyleSlug;

  return {
    fontFamily: `var(${textStyleVarPart(slug, 'font-family')})`,
    fontSize: `var(${textStyleVarPart(slug, 'font-size')})`,
    lineHeight: `var(${textStyleVarPart(slug, 'line-height')})`,
    fontWeight: `var(${textStyleVarPart(slug, 'font-weight')})`,
    textDecoration: variant.underline ? 'underline' : undefined,
    textTransform: variant.uppercase ? 'uppercase' : undefined,
    color: 'rgba(0, 0, 0, 0.88)',
    margin: 0,
  };
}

function UsageText({ variant }: { variant: TypographyVariant }) {
  return (
    <div className="typography-usage">
      <p>{variant.description}</p>
      {variant.usedIn ? <p className="typography-usage-used-in">Used in: {variant.usedIn}</p> : null}
    </div>
  );
}

function TypographyStyleRow({ group }: { group: TypographyStyleGroup }) {
  return (
    <div className="typography-style-row">
      <div className="typography-style-header">
        {!group.hideName ? <h3 className="typography-style-name">{group.name}</h3> : null}
        <TypographySpecs group={group} />
      </div>

      <div className="typography-style-body">
        {group.variants.map((variant) => (
          <div key={variant.textStyleSlug} className="typography-variant-row">
            <TypographySampleCell variant={variant} />
            <UsageText variant={variant} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function TypographyPage() {
  return (
    <div className="typography-page sb-unstyled">
      <section className="typography-section">
        <h2 className="typography-section-title">Text styles</h2>
        <p className="typography-section-desc">
          Each row maps a Figma text style to semantic tokens{' '}
          (<code>--semantic-typography-text-style-*</code>) composed from font size, line height,
          and weight primitives. Weight variants show where each combination is used in the product.
        </p>

        <div className="typography-table">
          <div className="typography-table-header">
            <span>Text style</span>
            <span>Sample</span>
            <span>Where to use</span>
          </div>

          {typographyTextStyles.map((group, index) => (
            <TypographyStyleRow
              key={`${group.name}-${group.fontSizeVar}-${index}`}
              group={group}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
