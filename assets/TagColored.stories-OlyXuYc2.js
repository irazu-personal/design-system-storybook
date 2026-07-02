import{j as r}from"./jsx-runtime-BYYWji4R.js";import{T as h}from"./TagColored-Cd05E6u5.js";import{s as S,a as v,b as g}from"./storyHelpers-D7QoSJ90.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./SparkIcon-B877p_59.js";import"./sparkAssetUrl-FWf-EcJv.js";import"./TooltipTrigger-CeqIspS_.js";import"./Tooltip-rWdCQlMf.js";const O={title:"Components/Tags/Colored",component:h,tags:["autodocs"]},I=["pink","burgundy","purple","blue","cyan","lime","volcano","peach","yellow","disabled"],t={},a={render:()=>r.jsx("div",{style:S,children:I.map(e=>r.jsxs("div",{style:v,children:[r.jsx("p",{style:g,children:e}),r.jsx(h,{variant:e,label:e})]},e))})},o={args:{variant:"blue",showPrefixIcon:!0,showSuffixIcon:!0,label:"with icons"},parameters:{docs:{description:{story:"Optional prefix icon and suffix delete button (trash). The suffix icon acts as a remove/delete control."}}}},s={args:{variant:"disabled",showPrefixIcon:!0,showSuffixIcon:!0,label:"Tag"}};var n,i,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,d,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {VARIANTS.map(variant => <div key={variant} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{variant}</p>
          <TagColored variant={variant} label={variant} />
        </div>)}
    </div>
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'blue',
    showPrefixIcon: true,
    showSuffixIcon: true,
    label: 'with icons'
  },
  parameters: {
    docs: {
      description: {
        story: 'Optional prefix icon and suffix delete button (trash). The suffix icon acts as a remove/delete control.'
      }
    }
  }
}`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var x,y,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'disabled',
    showPrefixIcon: true,
    showSuffixIcon: true,
    label: 'Tag'
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const k=["Default","Palette","WithIcons","Disabled"];export{t as Default,s as Disabled,a as Palette,o as WithIcons,k as __namedExportsOrder,O as default};
