import{j as e}from"./jsx-runtime-BYYWji4R.js";import{s as h,a as j,b as w}from"./storyHelpers-D7QoSJ90.js";import{A as o}from"./Avatar-Cm5kr-Jo.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./sparkAssetUrl-FWf-EcJv.js";const k={title:"Components/Avatar",component:o,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"]},type:{control:"select",options:["image","initials"]},showContent:{control:"boolean"}},args:{size:"medium",type:"initials",primaryText:"Name",secondaryText:"More details",showContent:!1},parameters:{docs:{description:{component:"Spark Avatar — image or initials in **small** (24px), **medium** (32px), and **large** (48px). Optional name and details beside the visual."}}}},C=["small","medium","large"],f=["image","initials"],s={},r={args:{showContent:!0}},a={parameters:{docs:{description:{story:"Size × type matrix from Figma — image and initials at each size."}}},render:()=>e.jsx("div",{style:h,children:C.map(t=>e.jsxs("div",{style:j,children:[e.jsx("p",{style:w,children:t}),e.jsx("div",{className:"story-row",children:f.map(n=>e.jsx(o,{size:t,type:n},n))})]},t))})},i={render:()=>e.jsx("div",{style:h,children:C.map(t=>e.jsxs("div",{style:j,children:[e.jsx("p",{style:w,children:t}),e.jsx(o,{size:t,type:"image",showContent:!0})]},t))})};var m,l,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,d,y;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    showContent: true
  }
}`,...(y=(d=r.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var S,x,u;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Size × type matrix from Figma — image and initials at each size.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {SIZES.map(size => <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <div className="story-row">
            {TYPES.map(type => <Avatar key={type} size={size} type={type} />)}
          </div>
        </div>)}
    </div>
}`,...(u=(x=a.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var g,v,z;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {SIZES.map(size => <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <Avatar size={size} type="image" showContent />
        </div>)}
    </div>
}`,...(z=(v=i.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};const R=["Default","WithContent","SizeTypeMatrix","ContentBySize"];export{i as ContentBySize,s as Default,a as SizeTypeMatrix,r as WithContent,R as __namedExportsOrder,k as default};
