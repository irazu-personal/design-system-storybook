import{j as e}from"./jsx-runtime-BYYWji4R.js";import{s as x,a as v,b as S,g}from"./storyHelpers-D7QoSJ90.js";import{P as o}from"./ProgressBar-DCq07sLr.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const w={title:"Components/Progress Bar",component:o,tags:["autodocs"],argTypes:{type:{control:"select",options:["default","error","disabled"]},value:{control:{type:"range",min:0,max:100,step:1}}},args:{value:45,type:"default",showPercentage:!0},parameters:{docs:{description:{component:"Spark Progress Bar — determinate completion indicator (234px track, 8px height). **default**, **error**, and **disabled** types with optional percentage label."}}}},b=["default","error","disabled"],t={},s={parameters:{docs:{description:{story:"Figma `817:89490` — default (blue), error (critical), and disabled variants."}}},render:()=>e.jsx("div",{style:x,children:b.map(r=>e.jsxs("div",{style:v,children:[e.jsx("p",{style:S,children:r}),e.jsx("div",{style:g,children:e.jsx(o,{type:r,value:45})})]},r))})},a={render:()=>e.jsx("div",{style:x,children:[0,25,50,75,100].map(r=>e.jsxs("div",{style:v,children:[e.jsxs("p",{style:S,children:[r,"%"]}),e.jsx("div",{style:g,children:e.jsx(o,{value:r})})]},r))})};var i,l,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(n=(l=t.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var d,p,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Figma \`817:89490\` — default (blue), error (critical), and disabled variants.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {TYPES.map(type => <div key={type} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{type}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <ProgressBar type={type} value={45} />
          </div>
        </div>)}
    </div>
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var y,m,u;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {[0, 25, 50, 75, 100].map(value => <div key={value} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{value}%</p>
          <div style={storyMatrixFieldWrapStyle}>
            <ProgressBar value={value} />
          </div>
        </div>)}
    </div>
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const B=["Default","TypeMatrix","Values"];export{t as Default,s as TypeMatrix,a as Values,B as __namedExportsOrder,w as default};
