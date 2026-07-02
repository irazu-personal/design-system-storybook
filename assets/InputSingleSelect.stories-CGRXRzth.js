import{j as e}from"./jsx-runtime-BYYWji4R.js";import{I as a}from"./InputSingleSelect-BLG0v0y4.js";import{S as c,s as d,f as g,b as o,g as n,a as w}from"./storyHelpers-D7QoSJ90.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./inputSelect-BHZOiibF.js";import"./SparkIcon-B877p_59.js";import"./sparkAssetUrl-FWf-EcJv.js";import"./Label-TmJXsGIj.js";const A={title:"Components/Input/Single Select",component:a,tags:["autodocs"],args:{size:"medium",showPrefixIcon:!1},parameters:{docs:{description:{component:`Single-select field with optional prefix icon and chevron. **empty** shows placeholder tone; **filled** shows selected value. Sizes: ${c.small} and ${c.medium}.`}}}},z=["small","medium"],b=["default","hover","pressed","disabled"],F=["empty","filled"],s={},r={render:()=>e.jsx("div",{style:d,children:z.map(t=>e.jsxs("div",{style:w,children:[e.jsx("p",{style:o,children:t}),e.jsx("div",{style:n,children:e.jsx(a,{size:t})})]},t))})},i={render:()=>e.jsx("div",{style:d,children:F.map(t=>e.jsxs("div",{style:g,children:[e.jsx("p",{style:o,children:t}),e.jsx("div",{style:n,children:e.jsx(a,{fill:t,text:t==="filled"?"Selected value":void 0})})]},t))})},l={render:()=>e.jsx("div",{style:d,children:b.map(t=>e.jsxs("div",{style:g,children:[e.jsx("p",{style:o,children:t}),e.jsx("div",{style:n,children:e.jsx(a,{text:"Selected value",visualState:t,disabled:t==="disabled",showFocus:t==="pressed"})})]},t))})};var p,S,y;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(y=(S=s.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var m,x,v;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {SIZES.map(size => <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <InputSingleSelect size={size} />
          </div>
        </div>)}
    </div>
}`,...(v=(x=r.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var u,h,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {FILLS.map(fill => <div key={fill} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{fill}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <InputSingleSelect fill={fill} text={fill === 'filled' ? 'Selected value' : undefined} />
          </div>
        </div>)}
    </div>
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var j,I,M;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {STATES.map(visualState => <div key={visualState} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{visualState}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <InputSingleSelect text="Selected value" visualState={visualState} disabled={visualState === 'disabled'} showFocus={visualState === 'pressed'} />
          </div>
        </div>)}
    </div>
}`,...(M=(I=l.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};const C=["Default","Sizes","FillTypes","StateMatrix"];export{s as Default,i as FillTypes,r as Sizes,l as StateMatrix,C as __namedExportsOrder,A as default};
