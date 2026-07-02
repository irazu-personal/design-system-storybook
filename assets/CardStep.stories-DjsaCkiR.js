import{j as e}from"./jsx-runtime-BYYWji4R.js";import{s as O,f as r,b as c,g as a,v as u}from"./storyHelpers-D7QoSJ90.js";import{S as U}from"./ScrollBar-Cp2nGFrO.js";import{C as A,a as G,b as J,c as K}from"./CardSlot-48ALBOeZ.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-CdN-AKPT.js";import"./SparkIcon-B877p_59.js";import"./sparkAssetUrl-FWf-EcJv.js";import"./TooltipTrigger-CeqIspS_.js";import"./Tooltip-rWdCQlMf.js";function t({footer:d=!0,showScrollBar:q=!1,headerDivider:W=!1,stepNumber:M="1",showIconButtonPrefix:F=!1,showIconButtonSuffix:I=!1,showSecondaryButton:V=!1,showMainCta:D=!1,title:k="Long title",subtitle:L="Subtitle",showSubtitle:N=!0,linkLabel:R="Show more",children:H,className:P="",onIconButtonPrefixClick:_,onIconButtonSuffixClick:z,onLinkClick:E}){return e.jsxs("div",{className:["spark-card","spark-card-step","spark-card-bordered",P].filter(Boolean).join(" "),children:[e.jsx(A,{type:"step",divider:W,stepNumber:M,title:k,subtitle:L,showSubtitle:N,rightContent:e.jsx(G,{showIconButtonPrefix:F,showIconButtonSuffix:I,showSecondaryButton:V,showMainCta:D,onIconButtonPrefixClick:_,onIconButtonSuffixClick:z})}),e.jsxs("div",{className:"spark-card-body",children:[e.jsx(J,{children:H}),q?e.jsx("div",{className:"spark-card-scrollbar",children:e.jsx(U,{type:"vertical"})}):null]}),d?e.jsx(K,{variant:"step",linkLabel:R,onLinkClick:E}):null]})}t.__docgenInfo={description:"",methods:[],displayName:"CardStep",props:{footer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showScrollBar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},headerDivider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},stepNumber:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'1'",computed:!1}},showIconButtonPrefix:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showIconButtonSuffix:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showSecondaryButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showMainCta:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Long title'",computed:!1}},subtitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Subtitle'",computed:!1}},showSubtitle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},linkLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Show more'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onIconButtonPrefixClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onIconButtonSuffixClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onLinkClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ie={title:"Components/Cards/Step",component:t,tags:["autodocs"],argTypes:{footer:{control:"boolean"},showScrollBar:{control:"boolean"},headerDivider:{control:"boolean"},showIconButtonPrefix:{control:"boolean"},showIconButtonSuffix:{control:"boolean"},showSecondaryButton:{control:"boolean"},showMainCta:{control:"boolean"},showSubtitle:{control:"boolean"}},args:{footer:!0,showScrollBar:!1,headerDivider:!1,showIconButtonPrefix:!1,showIconButtonSuffix:!1,showSecondaryButton:!1,showMainCta:!1,showSubtitle:!0,stepNumber:"1"},parameters:{docs:{description:{component:"Step-based container for sequential configuration flows. Use for scannable data or text inputs — not unrelated topics or empty states."}}},decorators:[d=>e.jsx("div",{style:{width:"100%",maxWidth:"691px"},children:e.jsx(d,{})})]},s={},o={args:{headerDivider:!0}},i={args:{footer:!1}},l={args:{showScrollBar:!0}},n={parameters:{docs:{description:{story:"Figma `693:84999` — footer and scroll-bar toggles."}}},render:()=>e.jsxs("div",{style:O,children:[e.jsxs("div",{style:r,children:[e.jsx("p",{style:c,children:"Footer on"}),e.jsx("div",{style:{...a,maxWidth:"691px",width:"100%"},children:e.jsx(t,{footer:!0})})]}),e.jsxs("div",{style:r,children:[e.jsx("p",{style:c,children:"Footer off"}),e.jsx("div",{style:{...a,maxWidth:"691px",width:"100%"},children:e.jsx(t,{footer:!1})})]}),e.jsxs("div",{style:r,children:[e.jsx("p",{style:u,children:"Scroll bar on"}),e.jsx("div",{style:{...a,maxWidth:"691px",width:"100%"},children:e.jsx(t,{showScrollBar:!0})})]}),e.jsxs("div",{style:r,children:[e.jsx("p",{style:u,children:"Header divider"}),e.jsx("div",{style:{...a,maxWidth:"691px",width:"100%"},children:e.jsx(t,{headerDivider:!0})})]})]})};var p,f,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(m=(f=s.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var y,h,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    headerDivider: true
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var v,S,g;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    footer: false
  }
}`,...(g=(S=i.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var b,w,j;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    showScrollBar: true
  }
}`,...(j=(w=l.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var B,C,T;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Figma \`693:84999\` — footer and scroll-bar toggles.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>Footer on</p>
        <div style={{
        ...storyMatrixFieldWrapStyle,
        maxWidth: '691px',
        width: '100%'
      }}>
          <CardStep footer />
        </div>
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>Footer off</p>
        <div style={{
        ...storyMatrixFieldWrapStyle,
        maxWidth: '691px',
        width: '100%'
      }}>
          <CardStep footer={false} />
        </div>
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={variantLabelStyle}>Scroll bar on</p>
        <div style={{
        ...storyMatrixFieldWrapStyle,
        maxWidth: '691px',
        width: '100%'
      }}>
          <CardStep showScrollBar />
        </div>
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={variantLabelStyle}>Header divider</p>
        <div style={{
        ...storyMatrixFieldWrapStyle,
        maxWidth: '691px',
        width: '100%'
      }}>
          <CardStep headerDivider />
        </div>
      </div>
    </div>
}`,...(T=(C=n.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const le=["Default","HeaderDivider","WithoutFooter","WithScrollBar","ToggleMatrix"];export{s as Default,o as HeaderDivider,n as ToggleMatrix,l as WithScrollBar,i as WithoutFooter,le as __namedExportsOrder,ie as default};
