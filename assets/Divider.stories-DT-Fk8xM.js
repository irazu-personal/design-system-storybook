import{j as r}from"./jsx-runtime-BYYWji4R.js";import{s as S,f,v as j,e as k,g as D}from"./storyHelpers-D7QoSJ90.js";import{D as t}from"./Divider-dL0nXNxx.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function d({bg:e,inline:i=!1,children:a}){const b=["spark-divider-story-surface",`spark-divider-story-surface-${e}`,i?"spark-divider-story-surface-inline":""].filter(Boolean).join(" ");return r.jsx("div",{className:b,children:a})}const P={title:"Components/Divider",component:t,tags:["autodocs"],argTypes:{direction:{control:"select",options:["horizontal","vertical"]},bg:{control:"select",options:["on-light","on-dark"]}},args:{direction:"horizontal",bg:"on-light"},parameters:{layout:"fullscreen",docs:{description:{component:"Spark Divider — 1px separator for grouping related content. **horizontal** or **vertical** direction; **on-light** or **on-dark** surface."}}}},z=[{direction:"horizontal",bg:"on-light",label:"Horizontal on light"},{direction:"vertical",bg:"on-light",label:"Vertical on light"},{direction:"horizontal",bg:"on-dark",label:"Horizontal on dark"},{direction:"vertical",bg:"on-dark",label:"Vertical on dark"}];function h({direction:e,bg:i}){return e==="vertical"?r.jsx("div",{className:"spark-divider-preview spark-divider-preview-vertical",children:r.jsx(t,{direction:"vertical",bg:i})}):r.jsx("div",{className:"spark-divider-preview spark-divider-preview-horizontal",style:D,children:r.jsx(t,{direction:"horizontal",bg:i})})}const o={render:e=>r.jsx(d,{bg:e.bg??"on-light",children:r.jsx(h,{direction:e.direction??"horizontal",bg:e.bg??"on-light"})})},s={parameters:{docs:{description:{story:"Figma `235:6021` — direction × background surface combinations."}}},render:()=>r.jsx("div",{style:{...S,padding:"1.5rem"},children:z.map(({direction:e,bg:i,label:a})=>r.jsxs("div",{style:f,children:[r.jsx("p",{style:j,children:a}),r.jsx("div",{style:k,children:r.jsx(d,{bg:i,inline:!0,children:r.jsx(h,{direction:e,bg:i})})})]},a))})},n={parameters:{docs:{description:{story:"Horizontal dividers between stacked list items."}}},render:()=>r.jsx(d,{bg:"on-light",children:r.jsxs("div",{className:"spark-divider-list-demo",children:[r.jsx("p",{children:"Projects"}),r.jsx(t,{}),r.jsx("p",{children:"Datasets"}),r.jsx(t,{}),r.jsx("p",{children:"Models"})]})})};var l,c,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <DividerStorySurface bg={args.bg ?? 'on-light'}>
      <DividerPreview direction={args.direction ?? 'horizontal'} bg={args.bg ?? 'on-light'} />
    </DividerStorySurface>
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var v,m,g;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Figma \`235:6021\` — direction × background surface combinations.'
      }
    }
  },
  render: () => <div style={{
    ...storyMatrixSectionStyle,
    padding: '1.5rem'
  }}>
      {VARIANTS.map(({
      direction,
      bg,
      label
    }) => <div key={label} style={storyMatrixItemRowStartStyle}>
          <p style={variantLabelStyle}>{label}</p>
          <div style={storyMatrixVariantExampleWrapStyle}>
            <DividerStorySurface bg={bg} inline>
              <DividerPreview direction={direction} bg={bg} />
            </DividerStorySurface>
          </div>
        </div>)}
    </div>
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var y,u,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Horizontal dividers between stacked list items.'
      }
    }
  },
  render: () => <DividerStorySurface bg="on-light">
      <div className="spark-divider-list-demo">
        <p>Projects</p>
        <Divider />
        <p>Datasets</p>
        <Divider />
        <p>Models</p>
      </div>
    </DividerStorySurface>
}`,...(x=(u=n.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const R=["Default","VariantMatrix","InList"];export{o as Default,n as InList,s as VariantMatrix,R as __namedExportsOrder,P as default};
