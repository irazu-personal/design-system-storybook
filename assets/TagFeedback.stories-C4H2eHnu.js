import{j as e}from"./jsx-runtime-BYYWji4R.js";import{T as p}from"./TagFeedback-DaAA8F0s.js";import{s as d,a as l,b as y}from"./storyHelpers-D7QoSJ90.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./SparkIcon-B877p_59.js";import"./sparkAssetUrl-FWf-EcJv.js";const h={title:"Components/Tags/Feedback",component:p,tags:["autodocs"],args:{showIcon:!0}},u=["default","processing","success","warning","error"],r={},t={render:()=>e.jsx("div",{style:d,children:u.map(s=>e.jsxs("div",{style:l,children:[e.jsx("p",{style:y,children:s}),e.jsx(p,{variant:s,showIcon:!0})]},s))})};var a,o,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var i,c,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {VARIANTS.map(variant => <div key={variant} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{variant}</p>
          <TagFeedback variant={variant} showIcon />
        </div>)}
    </div>
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const j=["Default","Variants"];export{r as Default,t as Variants,j as __namedExportsOrder,h as default};
