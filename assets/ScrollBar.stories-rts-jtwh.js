import{j as r}from"./jsx-runtime-BYYWji4R.js";import{s as m,a as d,b as y}from"./storyHelpers-D7QoSJ90.js";import{S as p}from"./ScrollBar-Cp2nGFrO.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const b={title:"Components/Scroll Bar",component:p,tags:["autodocs"],argTypes:{type:{control:"select",options:["vertical","horizontal"]}},args:{type:"vertical"},parameters:{docs:{description:{component:"Spark Scroll Bar — thumb indicator for overflow content. **vertical** for tall lists; **horizontal** for wide tables or views."}}}},S=["vertical","horizontal"],t={},e={parameters:{docs:{description:{story:"Vertical and horizontal scrollbar thumbs from Figma."}}},render:()=>r.jsx("div",{style:m,children:S.map(o=>r.jsxs("div",{style:d,children:[r.jsx("p",{style:y,children:o}),r.jsx(p,{type:o})]},o))})};var s,a,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var l,n,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Vertical and horizontal scrollbar thumbs from Figma.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {TYPES.map(type => <div key={type} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{type}</p>
          <ScrollBar type={type} />
        </div>)}
    </div>
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const g=["Default","Types"];export{t as Default,e as Types,g as __namedExportsOrder,b as default};
