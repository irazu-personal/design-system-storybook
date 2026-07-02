import{j as e}from"./jsx-runtime-BYYWji4R.js";import{s as C,a as l,b as p}from"./storyHelpers-D7QoSJ90.js";import{B as O}from"./Button-CdN-AKPT.js";import{S as R}from"./SparkIcon-B877p_59.js";import{P as _}from"./PopoverShell-CPs8Q5bc.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./TooltipTrigger-CeqIspS_.js";import"./Tooltip-rWdCQlMf.js";import"./sparkAssetUrl-FWf-EcJv.js";const z="Conveniently initiate viral synergy without multi functional platforms.";function r({tip:t=!0,tipDirection:k="right",header:D=!0,footer:I=!0,icon:M=!0,title:q="Title",content:P=z,closeLabel:w="Close",className:V="",onCloseClick:F}){return e.jsxs(_,{tip:t,tipDirection:k,className:V,panelClassName:"spark-popover-text-panel",children:[D?e.jsxs("div",{className:"spark-popover-text-header",children:[M?e.jsx(R,{slug:"brain-icon",size:"medium",className:"spark-popover-text-header-icon"}):null,e.jsx("h3",{className:"spark-popover-text-title",children:q})]}):null,e.jsx("div",{className:"spark-popover-text-body",children:e.jsx("p",{className:"spark-popover-text-content",children:P})}),I?e.jsx("footer",{className:"spark-popover-text-footer",children:e.jsx(O,{variant:"ghost",size:"tiny",type:"button",className:"spark-popover-text-close",onClick:F,children:w})}):null]})}r.__docgenInfo={description:"",methods:[],displayName:"PopoverText",props:{tip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},tipDirection:{required:!1,tsType:{name:"union",raw:"'right' | 'left' | 'bottom' | 'top'",elements:[{name:"literal",value:"'right'"},{name:"literal",value:"'left'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'top'"}]},description:"",defaultValue:{value:"'right'",computed:!1}},header:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},footer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},icon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Title'",computed:!1}},content:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Conveniently initiate viral synergy without multi functional platforms.'",computed:!1}},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Close'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onCloseClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const X={title:"Components/Popover/Text",component:r,tags:["autodocs"],argTypes:{tipDirection:{control:"select",options:["right","left","bottom","top"]},tip:{control:"boolean"},header:{control:"boolean"},footer:{control:"boolean"},icon:{control:"boolean"}},args:{tip:!0,tipDirection:"right",header:!0,footer:!0,icon:!0},parameters:{layout:"fullscreen",docs:{description:{component:"Compact informational popover with optional icon header, body copy, and ghost Close action. Figma `652:31199`."}}},decorators:[t=>e.jsx("div",{style:{background:"var(--semantic-surface-canvas)",padding:"1.5rem",minHeight:"100%"},children:e.jsx(t,{})})]},o={},a={args:{header:!1}},s={args:{footer:!1}},E=["right","left","bottom","top"],i={parameters:{docs:{description:{story:"Figma `652:31199` — tip direction variants."}}},render:()=>e.jsx("div",{style:C,children:E.map(t=>e.jsxs("div",{style:l,children:[e.jsx("p",{style:p,children:t}),e.jsx(r,{tipDirection:t})]},t))})},n={render:()=>e.jsxs("div",{style:C,children:[e.jsxs("div",{style:l,children:[e.jsx("p",{style:p,children:"On"}),e.jsx(r,{})]}),e.jsxs("div",{style:l,children:[e.jsx("p",{style:p,children:"Off"}),e.jsx(r,{header:!1,footer:!1})]})]})};var c,d,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,f,y;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    header: false
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,x,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    footer: false
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var g,T,S;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Figma \`652:31199\` — tip direction variants.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {TIP_DIRECTIONS.map(tipDirection => <div key={tipDirection} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{tipDirection}</p>
          <PopoverText tipDirection={tipDirection} />
        </div>)}
    </div>
}`,...(S=(T=i.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var b,j,N;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>On</p>
        <PopoverText />
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>Off</p>
        <PopoverText header={false} footer={false} />
      </div>
    </div>
}`,...(N=(j=n.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const Y=["Default","NoHeader","NoFooter","TipDirectionMatrix","HeaderFooterMatrix"];export{o as Default,n as HeaderFooterMatrix,s as NoFooter,a as NoHeader,i as TipDirectionMatrix,Y as __namedExportsOrder,X as default};
