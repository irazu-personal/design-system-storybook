import{j as t}from"./jsx-runtime-BYYWji4R.js";import{I as o}from"./InputMultiSelect-BlksuDW4.js";import{S as c,s as n,f as j,b as d,g as p,a as I}from"./storyHelpers-D7QoSJ90.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./inputSelect-BHZOiibF.js";import"./SparkIcon-B877p_59.js";import"./sparkAssetUrl-FWf-EcJv.js";import"./Label-TmJXsGIj.js";import"./TagGeneral-C8L_l4ta.js";import"./TooltipTrigger-CeqIspS_.js";import"./Tooltip-rWdCQlMf.js";const a=["Tag","Tag","Tag","Tag"],O={title:"Components/Input/Multi Select",component:o,tags:["autodocs"],args:{size:"medium"},parameters:{docs:{description:{component:`Multi-select field showing compact tags with overflow counter. **empty** / **filled** types. Sizes: ${c.small} and ${c.medium}.`}}}},F=["small","medium"],L=["default","hover","pressed","disabled"],A=["empty","filled"],s={args:{tags:a,overflowCount:1}},r={render:()=>t.jsx("div",{style:n,children:F.map(e=>t.jsxs("div",{style:I,children:[t.jsx("p",{style:d,children:e}),t.jsx("div",{style:p,children:t.jsx(o,{size:e,tags:a,overflowCount:1})})]},e))})},i={render:()=>t.jsx("div",{style:n,children:A.map(e=>t.jsxs("div",{style:j,children:[t.jsx("p",{style:d,children:e}),t.jsx("div",{style:p,children:t.jsx(o,{fill:e,tags:e==="filled"?a:[],overflowCount:e==="filled"?1:0})})]},e))})},l={render:()=>t.jsx("div",{style:n,children:L.map(e=>t.jsxs("div",{style:j,children:[t.jsx("p",{style:d,children:e}),t.jsx("div",{style:p,children:t.jsx(o,{tags:a,overflowCount:1,visualState:e,disabled:e==="disabled",showFocus:e==="pressed"})})]},e))})};var y,m,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    tags: DEFAULT_TAGS,
    overflowCount: 1
  }
}`,...(S=(m=s.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};var u,v,x;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {SIZES.map(size => <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <InputMultiSelect size={size} tags={DEFAULT_TAGS} overflowCount={1} />
          </div>
        </div>)}
    </div>
}`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var f,g,M;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {FILLS.map(fill => <div key={fill} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{fill}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <InputMultiSelect fill={fill} tags={fill === 'filled' ? DEFAULT_TAGS : []} overflowCount={fill === 'filled' ? 1 : 0} />
          </div>
        </div>)}
    </div>
}`,...(M=(g=i.parameters)==null?void 0:g.docs)==null?void 0:M.source}}};var T,w,h;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {STATES.map(visualState => <div key={visualState} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{visualState}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <InputMultiSelect tags={DEFAULT_TAGS} overflowCount={1} visualState={visualState} disabled={visualState === 'disabled'} showFocus={visualState === 'pressed'} />
          </div>
        </div>)}
    </div>
}`,...(h=(w=l.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};const $=["Default","Sizes","FillTypes","StateMatrix"];export{s as Default,i as FillTypes,r as Sizes,l as StateMatrix,$ as __namedExportsOrder,O as default};
