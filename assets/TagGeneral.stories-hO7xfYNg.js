import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as t}from"./TagGeneral-C8L_l4ta.js";import{s as b,c as s,v as r,e as l}from"./storyHelpers-D7QoSJ90.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./SparkIcon-B877p_59.js";import"./sparkAssetUrl-FWf-EcJv.js";import"./TooltipTrigger-CeqIspS_.js";import"./Tooltip-rWdCQlMf.js";const R={title:"Components/Tags/General",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Spark Tag General — 22px detail tags. **closeable** shows the remove icon on hover (always visible when **checked**). **checked** applies the selected blue surface."}}}},k=["default","closeable","add-new"],o={},i={parameters:{docs:{description:{story:"Figma `711:100020` — types at Checkable=No (top) and Checkable=Yes / checked (bottom)."}}},render:()=>e.jsxs("div",{style:b,children:[e.jsxs("div",{style:s,children:[e.jsx("p",{style:r,children:"Checkable = No"}),e.jsx("div",{className:"story-row",style:{...l,gap:"0.75rem"},children:k.map(a=>e.jsx(t,{variant:a,showClose:a==="closeable"},a))})]}),e.jsxs("div",{style:s,children:[e.jsx("p",{style:r,children:"Checkable = Yes"}),e.jsxs("div",{className:"story-row",style:{...l,gap:"0.75rem"},children:[e.jsx(t,{checked:!0}),e.jsx(t,{variant:"closeable",checked:!0,showClose:!0})]})]})]})},c={render:()=>e.jsxs("div",{style:b,children:[k.map(a=>e.jsxs("div",{style:s,children:[e.jsx("p",{style:r,children:a}),e.jsx("div",{style:l,children:e.jsx(t,{variant:a,showClose:a==="closeable"})})]},a)),e.jsxs("div",{style:s,children:[e.jsx("p",{style:r,children:"checked"}),e.jsx("div",{style:l,children:e.jsx(t,{checked:!0})})]}),e.jsxs("div",{style:s,children:[e.jsx("p",{style:r,children:"closeable + checked"}),e.jsx("div",{style:l,children:e.jsx(t,{variant:"closeable",checked:!0,showClose:!0})})]})]})};var d,n,y;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(y=(n=o.parameters)==null?void 0:n.docs)==null?void 0:y.source}}};var p,m,v;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Figma \`711:100020\` — types at Checkable=No (top) and Checkable=Yes / checked (bottom).'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowDocStyle}>
        <p style={variantLabelStyle}>Checkable = No</p>
        <div className="story-row" style={{
        ...storyMatrixVariantExampleWrapStyle,
        gap: '0.75rem'
      }}>
          {VARIANTS.map(variant => <TagGeneral key={variant} variant={variant} showClose={variant === 'closeable'} />)}
        </div>
      </div>
      <div style={storyMatrixItemRowDocStyle}>
        <p style={variantLabelStyle}>Checkable = Yes</p>
        <div className="story-row" style={{
        ...storyMatrixVariantExampleWrapStyle,
        gap: '0.75rem'
      }}>
          <TagGeneral checked />
          <TagGeneral variant="closeable" checked showClose />
        </div>
      </div>
    </div>
}`,...(v=(m=i.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var h,x,S;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {VARIANTS.map(variant => <div key={variant} style={storyMatrixItemRowDocStyle}>
          <p style={variantLabelStyle}>{variant}</p>
          <div style={storyMatrixVariantExampleWrapStyle}>
            <TagGeneral variant={variant} showClose={variant === 'closeable'} />
          </div>
        </div>)}
      <div style={storyMatrixItemRowDocStyle}>
        <p style={variantLabelStyle}>checked</p>
        <div style={storyMatrixVariantExampleWrapStyle}>
          <TagGeneral checked />
        </div>
      </div>
      <div style={storyMatrixItemRowDocStyle}>
        <p style={variantLabelStyle}>closeable + checked</p>
        <div style={storyMatrixVariantExampleWrapStyle}>
          <TagGeneral variant="closeable" checked showClose />
        </div>
      </div>
    </div>
}`,...(S=(x=c.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const G=["Default","VariantMatrix","Variants"];export{o as Default,i as VariantMatrix,c as Variants,G as __namedExportsOrder,R as default};
