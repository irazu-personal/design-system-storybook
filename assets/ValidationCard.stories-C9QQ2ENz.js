import{j as e}from"./jsx-runtime-BYYWji4R.js";import{h as I,s as w,a as V,b as R,v as _}from"./storyHelpers-D7QoSJ90.js";import{T as D}from"./TagColored-Cd05E6u5.js";/* empty css                */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./SparkIcon-B877p_59.js";import"./sparkAssetUrl-FWf-EcJv.js";import"./TooltipTrigger-CeqIspS_.js";import"./Tooltip-rWdCQlMf.js";function t({type:a="text-only",border:j=!1,topTitle:k="Overview / Total extractions",bottomTitle:C="Entities Validated",topValue:N="189542",bottomValue:q="1",tagLabel:M="TEST",tagTopValue:E="2143",tagVariant:O="blue",className:B=""}){const L=["spark-validation-card",j?"spark-validation-card-border":"",a==="text-only"?"spark-validation-card-type-text-only":"spark-validation-card-type-tag",B].filter(Boolean).join(" ");return e.jsx("div",{className:L,children:e.jsxs("div",{className:"spark-widget-content",children:[e.jsxs("div",{className:"spark-widget-row",children:[a==="text-only"?e.jsx("p",{className:"spark-widget-label",children:k}):e.jsx(D,{label:M,variant:O}),e.jsx("p",{className:"spark-widget-value-lg",children:a==="text-only"?N:E})]}),e.jsxs("div",{className:"spark-widget-row",children:[e.jsx("p",{className:"spark-widget-label spark-widget-footer-label",children:C}),e.jsx("p",{className:"spark-widget-value-md",children:a==="tag"?"3":q})]})]})})}t.__docgenInfo={description:"",methods:[],displayName:"ValidationCard",props:{type:{required:!1,tsType:{name:"union",raw:"'text-only' | 'tag'",elements:[{name:"literal",value:"'text-only'"},{name:"literal",value:"'tag'"}]},description:"",defaultValue:{value:"'text-only'",computed:!1}},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},topTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Overview / Total extractions'",computed:!1}},bottomTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Entities Validated'",computed:!1}},topValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'189542'",computed:!1}},bottomValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'1'",computed:!1}},tagLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'TEST'",computed:!1}},tagTopValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'2143'",computed:!1}},tagVariant:{required:!1,tsType:{name:"union",raw:`| 'pink'
| 'burgundy'
| 'purple'
| 'blue'
| 'cyan'
| 'lime'
| 'volcano'
| 'peach'
| 'yellow'
| 'disabled'`,elements:[{name:"literal",value:"'pink'"},{name:"literal",value:"'burgundy'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'cyan'"},{name:"literal",value:"'lime'"},{name:"literal",value:"'volcano'"},{name:"literal",value:"'peach'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'disabled'"}]},description:"",defaultValue:{value:"'blue'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const U={title:"Components/Widgets/Validation Card",component:t,tags:["autodocs"],argTypes:{type:{control:"select",options:["text-only","tag"]},border:{control:"boolean"}},args:{type:"text-only",border:!1},decorators:[I],parameters:{docs:{description:{component:"Validation Card — structured metric counts with optional Tag Colored header. Turn border off when nesting inside parent containers."}}}},W=["text-only","tag"],r={},s={args:{border:!0}},l={args:{type:"tag"}},o={render:()=>e.jsx("div",{style:w,children:W.map(a=>e.jsxs("div",{style:V,children:[e.jsx("p",{style:_,children:a}),e.jsx(t,{type:a})]},a))})},i={render:()=>e.jsx("div",{style:w,children:[!1,!0].map(a=>e.jsxs("div",{style:V,children:[e.jsx("p",{style:R,children:a?"On":"Off"}),e.jsxs("div",{className:"story-row",children:[e.jsx(t,{type:"text-only",border:a}),e.jsx(t,{type:"tag",border:a})]})]},String(a)))})};var n,d,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,u,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    border: true
  }
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var y,v,g;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: 'tag'
  }
}`,...(g=(v=l.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var f,x,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {TYPES.map(type => <div key={type} style={storyMatrixItemRowStyle}>
          <p style={variantLabelStyle}>{type}</p>
          <ValidationCard type={type} />
        </div>)}
    </div>
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var T,h,S;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {[false, true].map(border => <div key={String(border)} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{border ? 'On' : 'Off'}</p>
          <div className="story-row">
            <ValidationCard type="text-only" border={border} />
            <ValidationCard type="tag" border={border} />
          </div>
        </div>)}
    </div>
}`,...(S=(h=i.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const X=["Default","WithBorder","Tag","TypeMatrix","BorderMatrix"];export{i as BorderMatrix,r as Default,l as Tag,o as TypeMatrix,s as WithBorder,X as __namedExportsOrder,U as default};
