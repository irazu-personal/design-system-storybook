import{j as e}from"./jsx-runtime-BYYWji4R.js";import{s as h,a as t,b as r}from"./storyHelpers-D7QoSJ90.js";import{L as s}from"./Label-TmJXsGIj.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./SparkIcon-B877p_59.js";import"./sparkAssetUrl-FWf-EcJv.js";const j={title:"Components/Label",component:s,tags:["autodocs"],argTypes:{showAsterisk:{control:"boolean"},showIcon:{control:"boolean"}},args:{label:"Label",showAsterisk:!0,showIcon:!0},parameters:{docs:{description:{component:"Spark Label — Figma `211:3011`. Used above form fields with optional required asterisk and help icon. Medium weight base text on primary on-surface color."}}}},a={},o={args:{showAsterisk:!1,showIcon:!1}},l={name:"Variant matrix",parameters:{docs:{description:{story:"Optional asterisk and help icon combinations from Figma."}}},render:()=>e.jsxs("div",{style:h,children:[e.jsxs("div",{style:t,children:[e.jsx("p",{style:r,children:"Text only"}),e.jsx(s,{label:"Label"})]}),e.jsxs("div",{style:t,children:[e.jsx("p",{style:r,children:"Asterisk"}),e.jsx(s,{label:"Label",showAsterisk:!0})]}),e.jsxs("div",{style:t,children:[e.jsx("p",{style:r,children:"Help icon"}),e.jsx(s,{label:"Label",showIcon:!0})]}),e.jsxs("div",{style:t,children:[e.jsx("p",{style:r,children:"Asterisk + icon"}),e.jsx(s,{label:"Label",showAsterisk:!0,showIcon:!0})]})]})};var i,n,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,d,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    showAsterisk: false,
    showIcon: false
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var y,b,x;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Variant matrix',
  parameters: {
    docs: {
      description: {
        story: 'Optional asterisk and help icon combinations from Figma.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>Text only</p>
        <Label label="Label" />
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>Asterisk</p>
        <Label label="Label" showAsterisk />
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>Help icon</p>
        <Label label="Label" showIcon />
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>Asterisk + icon</p>
        <Label label="Label" showAsterisk showIcon />
      </div>
    </div>
}`,...(x=(b=l.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const I=["Default","TextOnly","VariantMatrix"];export{a as Default,o as TextOnly,l as VariantMatrix,I as __namedExportsOrder,j as default};
