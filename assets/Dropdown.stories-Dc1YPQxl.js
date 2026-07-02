import{j as o}from"./jsx-runtime-BYYWji4R.js";import{D as F}from"./Dropdown-QqzKQD6W.js";import{s as M,f as _,b as P}from"./storyHelpers-D7QoSJ90.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./DropdownFooter-BsuM-IbT.js";import"./SparkIcon-B877p_59.js";import"./sparkAssetUrl-FWf-EcJv.js";import"./Checkbox-BvtwKe_o.js";import"./DropdownCheckIcon-DuodM3sj.js";/* empty css                 */import"./Button-CdN-AKPT.js";import"./TooltipTrigger-CeqIspS_.js";import"./Tooltip-rWdCQlMf.js";import"./ScrollBar-Cp2nGFrO.js";const v=Array.from({length:4},()=>({label:"Dropdown item text"})),j=[{label:"Dropdown item text",visualState:"default"},{label:"Dropdown item text",visualState:"hover"},{label:"Dropdown item text",visualState:"selected"},{label:"Dropdown item text",visualState:"disabled"}],K={title:"Components/Dropdown/Dropdown",component:F,tags:["autodocs"],argTypes:{type:{control:"select",options:["regular","checkbox"]},showTitle:{control:"boolean"},showFooter:{control:"boolean"},showPrefixIcon:{control:"boolean",description:"Optional prefix icon on each item."},showInfoIcon:{control:"boolean",description:"Optional info icon on each item."},items:{control:!1}},args:{type:"regular",showTitle:!1,showFooter:!0,showPrefixIcon:!1,showInfoIcon:!1,items:v},parameters:{docs:{description:{component:"Spark Dropdown — regular and checkbox item types with optional title and footer (Tertiary Clear + Secondary Apply). Prefix and info icons are optional boolean props, off by default."}}}},k=["regular","checkbox"],r={},t={args:{showFooter:!1}},s={args:{showPrefixIcon:!0,showInfoIcon:!0}},a={args:{showFooter:!1,items:Array.from({length:6},(e,A)=>({label:`Dropdown item ${A+1}`}))},parameters:{docs:{description:{story:"Scroll bar appears when there are more than 4 items."}}}},n={args:{items:j}},i={render:()=>o.jsx("div",{style:M,children:k.map(e=>o.jsxs("div",{style:_,children:[o.jsx("p",{style:P,children:e}),o.jsx(F,{type:e,items:v,showFooter:!0})]},e))})};var c,l,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,d,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    showFooter: false
  }
}`,...(h=(d=t.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var u,S,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    showPrefixIcon: true,
    showInfoIcon: true
  }
}`,...(f=(S=s.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var w,y,x;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    showFooter: false,
    items: Array.from({
      length: 6
    }, (_, index) => ({
      label: \`Dropdown item \${index + 1}\`
    }))
  },
  parameters: {
    docs: {
      description: {
        story: 'Scroll bar appears when there are more than 4 items.'
      }
    }
  }
}`,...(x=(y=a.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var b,g,I;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    items: STATE_MATRIX_ITEMS
  }
}`,...(I=(g=n.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var T,D,E;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {TYPES.map(type => <div key={type} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{type}</p>
          <Dropdown type={type} items={DEFAULT_ITEMS} showFooter />
        </div>)}
    </div>
}`,...(E=(D=i.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const N=["Default","WithoutFooter","WithIcons","Scrollable","ItemStates","Types"];export{r as Default,n as ItemStates,a as Scrollable,i as Types,s as WithIcons,t as WithoutFooter,N as __namedExportsOrder,K as default};
