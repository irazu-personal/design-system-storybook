import{j as e}from"./jsx-runtime-BYYWji4R.js";import{B as r,T as xe,P as o,I as he,a as Se}from"./Button-CdN-AKPT.js";import{S as Ie}from"./SparkIcon-B877p_59.js";import{s as a,c as ve,b as s,d as ge,v as be,e as je,a as n}from"./storyHelpers-D7QoSJ90.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./TooltipTrigger-CeqIspS_.js";import"./Tooltip-rWdCQlMf.js";import"./sparkAssetUrl-FWf-EcJv.js";function Be(t){return t==="tiny"||t==="small"?"small":"medium"}function i({size:t}){return e.jsx(Ie,{slug:"chevron-right",size:Be(t)})}const ke={title:"Components/Button",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["tiny","small","medium","large"]},variant:{control:"select",options:["primary","secondary","tertiary","ghost","link","text"]},danger:{control:"boolean"},disabled:{control:"boolean"},showStartIcon:{control:"boolean",description:"Default plus icon before the label."},showEndIcon:{control:"boolean",description:"Default chevron-right icon after the label."},startIcon:{control:!1},endIcon:{control:!1}},args:{children:"Button",size:"medium",variant:"primary",danger:!1,disabled:!1,showStartIcon:!1,showEndIcon:!0},parameters:{docs:{description:{component:"Spark Button — matches Figma Button Main (text) and Button Icon (square/circle). When rendered without children it automatically becomes an icon button with a hover/focus tooltip. Provide `tooltip`, `aria-label`, or `iconSlug` for tooltip text (fallback: `placeholder`). Danger text buttons: Primary, Secondary, Ghost. Danger icon buttons: Primary, Secondary, Tertiary."}}}},l=["tiny","small","medium","large"],ze=["primary","secondary","tertiary","ghost","link","text"],d={},c={render:()=>e.jsx("div",{style:a,children:l.map(t=>e.jsxs("div",{style:ve,children:[e.jsx("p",{style:s,children:t}),e.jsx("div",{style:ge,children:e.jsx(r,{size:t,children:t})})]},t))})},y={render:()=>e.jsx("div",{style:a,children:ze.map(t=>e.jsxs("div",{style:ve,children:[e.jsx("p",{style:be,children:t}),e.jsx("div",{style:je,children:e.jsx(r,{variant:t,children:t})})]},t))})},p={parameters:{docs:{description:{story:"Figma Button Main danger types: Primary, Secondary, and Ghost only. Tertiary has no danger variant."}}},render:()=>e.jsx("div",{style:a,children:xe.map(t=>e.jsxs("div",{style:n,children:[e.jsx("p",{style:s,children:t}),e.jsx(r,{variant:t,danger:!0,startIcon:e.jsx(o,{size:"medium"}),endIcon:e.jsx(i,{size:"medium"}),children:"Button"})]},t))})},m={parameters:{docs:{description:{story:"Text ghost: blue label with blue-tint hover/press. Danger ghost: transparent → pink hover → pink + red border on press."}}},render:()=>e.jsxs("div",{style:a,children:[e.jsxs("div",{style:n,children:[e.jsx("p",{style:s,children:"default"}),e.jsx(r,{variant:"ghost",startIcon:e.jsx(o,{size:"medium"}),endIcon:e.jsx(i,{size:"medium"}),children:"Button"})]}),e.jsxs("div",{style:n,children:[e.jsx("p",{style:s,children:"danger"}),e.jsx(r,{variant:"ghost",danger:!0,startIcon:e.jsx(o,{size:"medium"}),endIcon:e.jsx(i,{size:"medium"}),children:"Button"})]})]})},u={parameters:{docs:{description:{story:"Figma `507:36896` — neutral text button with transparent background. Disabled uses `--semantic-button-disabled-content-on-action`."}}},render:()=>e.jsx("div",{style:a,children:l.map(t=>e.jsxs("div",{style:n,children:[e.jsx("p",{style:s,children:t}),e.jsxs("div",{className:"story-row",children:[e.jsx(r,{size:t,variant:"text",children:"Button"}),e.jsx(r,{size:t,variant:"text",disabled:!0,children:"Button"})]})]},t))})},v={render:()=>e.jsx("div",{style:a,children:l.map(t=>e.jsxs("div",{style:n,children:[e.jsx("p",{style:s,children:t}),e.jsx(r,{size:t,startIcon:e.jsx(o,{size:t}),children:"Add item"})]},t))})},x={render:()=>e.jsx("div",{style:a,children:l.map(t=>e.jsxs("div",{style:n,children:[e.jsx("p",{style:s,children:t}),e.jsx(r,{size:t,endIcon:e.jsx(i,{size:t}),children:"Next"})]},t))})},h={render:()=>e.jsxs("div",{className:"story-row",children:[e.jsx(r,{startIcon:e.jsx(o,{size:"medium"}),endIcon:e.jsx(i,{size:"medium"}),children:"Button"}),e.jsx(r,{variant:"secondary",startIcon:e.jsx(o,{size:"medium"}),endIcon:e.jsx(i,{size:"medium"}),children:"Button"}),e.jsx(r,{variant:"ghost",startIcon:e.jsx(o,{size:"medium"}),endIcon:e.jsx(i,{size:"medium"}),children:"Button"}),e.jsx(r,{variant:"tertiary",startIcon:e.jsx(o,{size:"medium"}),endIcon:e.jsx(i,{size:"medium"}),children:"Button"})]})},S={parameters:{docs:{description:{story:"Icon button sizes — no children = auto icon-only. Primary variant."}}},render:()=>e.jsx("div",{style:a,children:l.map(t=>e.jsxs("div",{style:n,children:[e.jsx("p",{style:s,children:t}),e.jsx(r,{size:t,"aria-label":t})]},t))})},I={parameters:{docs:{description:{story:"Figma Button Icon types: Primary, Secondary, Tertiary, Ghost. Medium size."}}},render:()=>e.jsx("div",{style:a,children:he.map(t=>e.jsxs("div",{style:n,children:[e.jsx("p",{style:s,children:t}),e.jsx(r,{variant:t,"aria-label":t})]},t))})},g={parameters:{docs:{description:{story:"Figma Button Icon danger types: Primary, Secondary, and Tertiary only. No Ghost danger. Medium size."}}},render:()=>e.jsx("div",{style:a,children:Se.map(t=>e.jsxs("div",{style:n,children:[e.jsx("p",{style:s,children:t}),e.jsx(r,{variant:t,danger:!0,"aria-label":`${t} danger`})]},t))})},b={render:()=>e.jsx("div",{style:a,children:["primary","secondary","tertiary","ghost"].map(t=>e.jsxs("div",{style:n,children:[e.jsx("p",{style:s,children:t}),e.jsx(r,{variant:t,disabled:!0,"aria-label":`${t} disabled`})]},t))})},j={parameters:{docs:{description:{story:"Icon-only buttons show a tooltip on hover and keyboard focus. Tooltip text resolves from `tooltip` → `aria-label` → `iconSlug` map → `placeholder`. Overlay gap is 4px (`--dimension-spacing-04`). Disabled buttons do not show tooltips."}}},render:()=>e.jsxs("div",{style:{...a,padding:"48px 16px"},children:[e.jsxs("div",{style:n,children:[e.jsx("p",{style:s,children:"aria-label"}),e.jsx(r,{variant:"ghost","aria-label":"Filter",iconSlug:"filter"})]}),e.jsxs("div",{style:n,children:[e.jsx("p",{style:s,children:"iconSlug"}),e.jsx(r,{variant:"ghost",iconSlug:"export"})]}),e.jsxs("div",{style:n,children:[e.jsx("p",{style:s,children:"tooltip prop"}),e.jsx(r,{variant:"ghost",tooltip:"Custom label"})]}),e.jsxs("div",{style:n,children:[e.jsx("p",{style:s,children:"disabled"}),e.jsx(r,{variant:"ghost",disabled:!0,"aria-label":"No tooltip when disabled"})]})]})},B={render:()=>e.jsx("div",{style:a,children:["primary","secondary","tertiary","ghost"].map(t=>e.jsxs("div",{style:n,children:[e.jsx("p",{style:s,children:t}),e.jsx(r,{variant:t,disabled:!0,children:t})]},t))})};var z,T,M;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:"{}",...(M=(T=d.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var w,E,N;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {SIZES.map(size => <div key={size} style={storyMatrixItemRowDocStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <div style={storyMatrixSizeExampleWrapStyle}>
            <Button size={size}>{size}</Button>
          </div>
        </div>)}
    </div>
}`,...(N=(E=c.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var R,A,f;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {TEXT_VARIANTS.map(variant => <div key={variant} style={storyMatrixItemRowDocStyle}>
          <p style={variantLabelStyle}>{variant}</p>
          <div style={storyMatrixVariantExampleWrapStyle}>
            <Button variant={variant}>{variant}</Button>
          </div>
        </div>)}
    </div>
}`,...(f=(A=y.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var D,k,P;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Figma Button Main danger types: Primary, Secondary, and Ghost only. Tertiary has no danger variant.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {TEXT_BUTTON_DANGER_VARIANTS.map(variant => <div key={variant} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{variant}</p>
          <Button variant={variant} danger startIcon={<PlusIcon size="medium" />} endIcon={<EndChevronIcon size="medium" />}>
            Button
          </Button>
        </div>)}
    </div>
}`,...(P=(k=p.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var _,L,V;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Text ghost: blue label with blue-tint hover/press. Danger ghost: transparent → pink hover → pink + red border on press.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>default</p>
        <Button variant="ghost" startIcon={<PlusIcon size="medium" />} endIcon={<EndChevronIcon size="medium" />}>
          Button
        </Button>
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>danger</p>
        <Button variant="ghost" danger startIcon={<PlusIcon size="medium" />} endIcon={<EndChevronIcon size="medium" />}>
          Button
        </Button>
      </div>
    </div>
}`,...(V=(L=m.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var C,G,O;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Figma \`507:36896\` — neutral text button with transparent background. Disabled uses \`--semantic-button-disabled-content-on-action\`.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {SIZES.map(size => <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <div className="story-row">
            <Button size={size} variant="text">
              Button
            </Button>
            <Button size={size} variant="text" disabled>
              Button
            </Button>
          </div>
        </div>)}
    </div>
}`,...(O=(G=u.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var F,W,U;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {SIZES.map(size => <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <Button size={size} startIcon={<PlusIcon size={size} />}>
            Add item
          </Button>
        </div>)}
    </div>
}`,...(U=(W=v.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var Z,X,$;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {SIZES.map(size => <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <Button size={size} endIcon={<EndChevronIcon size={size} />}>
            Next
          </Button>
        </div>)}
    </div>
}`,...($=(X=x.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var q,H,J;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="story-row">
      <Button startIcon={<PlusIcon size="medium" />} endIcon={<EndChevronIcon size="medium" />}>
        Button
      </Button>
      <Button variant="secondary" startIcon={<PlusIcon size="medium" />} endIcon={<EndChevronIcon size="medium" />}>
        Button
      </Button>
      <Button variant="ghost" startIcon={<PlusIcon size="medium" />} endIcon={<EndChevronIcon size="medium" />}>
        Button
      </Button>
      <Button variant="tertiary" startIcon={<PlusIcon size="medium" />} endIcon={<EndChevronIcon size="medium" />}>
        Button
      </Button>
    </div>
}`,...(J=(H=h.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,Y;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Icon button sizes — no children = auto icon-only. Primary variant.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {SIZES.map(size => <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <Button size={size} aria-label={size} />
        </div>)}
    </div>
}`,...(Y=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var ee,te,re;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Figma Button Icon types: Primary, Secondary, Tertiary, Ghost. Medium size.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {ICON_BUTTON_VARIANTS.map(variant => <div key={variant} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{variant}</p>
          <Button variant={variant} aria-label={variant} />
        </div>)}
    </div>
}`,...(re=(te=I.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,ne,ae;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Figma Button Icon danger types: Primary, Secondary, and Tertiary only. No Ghost danger. Medium size.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {ICON_BUTTON_DANGER_VARIANTS.map(variant => <div key={variant} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{variant}</p>
          <Button variant={variant} danger aria-label={\`\${variant} danger\`} />
        </div>)}
    </div>
}`,...(ae=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,ie,le;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {(['primary', 'secondary', 'tertiary', 'ghost'] as const).map(variant => <div key={variant} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{variant}</p>
          <Button variant={variant} disabled aria-label={\`\${variant} disabled\`} />
        </div>)}
    </div>
}`,...(le=(ie=b.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var de,ce,ye;j.parameters={...j.parameters,docs:{...(de=j.parameters)==null?void 0:de.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Icon-only buttons show a tooltip on hover and keyboard focus. Tooltip text resolves from \`tooltip\` → \`aria-label\` → \`iconSlug\` map → \`placeholder\`. Overlay gap is 4px (\`--dimension-spacing-04\`). Disabled buttons do not show tooltips.'
      }
    }
  },
  render: () => <div style={{
    ...storyMatrixSectionStyle,
    padding: '48px 16px'
  }}>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>aria-label</p>
        <Button variant="ghost" aria-label="Filter" iconSlug="filter" />
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>iconSlug</p>
        <Button variant="ghost" iconSlug="export" />
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>tooltip prop</p>
        <Button variant="ghost" tooltip="Custom label" />
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>disabled</p>
        <Button variant="ghost" disabled aria-label="No tooltip when disabled" />
      </div>
    </div>
}`,...(ye=(ce=j.parameters)==null?void 0:ce.docs)==null?void 0:ye.source}}};var pe,me,ue;B.parameters={...B.parameters,docs:{...(pe=B.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {(['primary', 'secondary', 'tertiary', 'ghost'] as const).map(variant => <div key={variant} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{variant}</p>
          <Button variant={variant} disabled>
            {variant}
          </Button>
        </div>)}
    </div>
}`,...(ue=(me=B.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};const Pe=["Default","AllSizes","AllVariants","DangerVariants","GhostButtons","TextButtons","WithStartIcon","WithEndIcon","WithBothIcons","IconAllSizes","IconAllVariants","IconDangerVariants","IconDisabled","IconTooltip","Disabled"];export{c as AllSizes,y as AllVariants,p as DangerVariants,d as Default,B as Disabled,m as GhostButtons,S as IconAllSizes,I as IconAllVariants,g as IconDangerVariants,b as IconDisabled,j as IconTooltip,u as TextButtons,h as WithBothIcons,x as WithEndIcon,v as WithStartIcon,Pe as __namedExportsOrder,ke as default};
