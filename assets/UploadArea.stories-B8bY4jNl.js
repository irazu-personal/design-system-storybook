import{j as e}from"./jsx-runtime-BYYWji4R.js";import{s as v,a as g,b as w,g as M,f as T}from"./storyHelpers-D7QoSJ90.js";import{U as n}from"./UploadArea-0uT9aYA0.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./SparkIcon-B877p_59.js";import"./sparkAssetUrl-FWf-EcJv.js";import"./TooltipTrigger-CeqIspS_.js";import"./Tooltip-rWdCQlMf.js";const F={title:"Components/Upload Area/Upload Area",component:n,tags:["autodocs"],argTypes:{state:{control:"select",options:["default","hover","click-on","in-progress","success","failed"]},contentDirection:{control:"select",options:["left","center"]},showHelperText:{control:"boolean"}},args:{state:"default",contentDirection:"left",showHelperText:!1},parameters:{docs:{description:{component:"Spark Upload Area — compact row drop zone with **default**, **hover**, **click-on**, **in-progress**, **success**, and **failed** states. Helper text is hidden by default."}}}},D=["default","hover","click-on","in-progress","success","failed"],j=["left","center"],r={},s={parameters:{docs:{description:{story:"Figma `776:39369` — all states with helper text enabled for documentation."}}},render:()=>e.jsx("div",{style:v,children:D.map(t=>e.jsxs("div",{style:t==="success"||t==="failed"?T:g,children:[e.jsx("p",{style:w,children:t}),e.jsx("div",{style:M,children:e.jsx(n,{state:t,showHelperText:!0})})]},t))})},o={parameters:{docs:{description:{story:"Default state with left- and center-aligned content."}}},render:()=>e.jsx("div",{style:v,children:j.map(t=>e.jsxs("div",{style:g,children:[e.jsx("p",{style:w,children:t}),e.jsx("div",{style:M,children:e.jsx(n,{contentDirection:t})})]},t))})},a={args:{showHelperText:!0}};var i,l,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,p,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Figma \`776:39369\` — all states with helper text enabled for documentation.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {STATES.map(state => <div key={state} style={state === 'success' || state === 'failed' ? storyMatrixItemRowStartStyle : storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{state}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <UploadArea state={state} showHelperText />
          </div>
        </div>)}
    </div>
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var y,x,u;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default state with left- and center-aligned content.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {DIRECTIONS.map(contentDirection => <div key={contentDirection} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{contentDirection}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <UploadArea contentDirection={contentDirection} />
          </div>
        </div>)}
    </div>
}`,...(u=(x=o.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var S,f,h;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    showHelperText: true
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const W=["Default","StateMatrix","ContentDirectionMatrix","WithHelperText"];export{o as ContentDirectionMatrix,r as Default,s as StateMatrix,a as WithHelperText,W as __namedExportsOrder,F as default};
