import{j as e}from"./jsx-runtime-BYYWji4R.js";import{s as g,a as c,v as H,b as B}from"./storyHelpers-D7QoSJ90.js";import{B as t,P as j}from"./Button-CdN-AKPT.js";import{S as W}from"./SparkIcon-B877p_59.js";import{B as D}from"./Breadcrumb-DieAPxQA.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./TooltipTrigger-CeqIspS_.js";import"./Tooltip-rWdCQlMf.js";import"./sparkAssetUrl-FWf-EcJv.js";function u({showButtonIconLeft:a=!0,showButtonIconRight:m=!0,showMainCta:r=!0,showSecondaryButton:s=!0,secondaryLabel:y="Task Prompt",primaryLabel:f="Create New Project",className:h="",onMoreClick:v,onIconClick:b,onSecondaryClick:x,onPrimaryClick:_}){return e.jsxs("div",{className:["spark-header-action-bar",h].filter(Boolean).join(" "),children:[a?e.jsx(t,{variant:"tertiary",size:"medium",type:"button","aria-label":"More actions",icon:e.jsx(W,{slug:"dots",size:"medium"}),onClick:v}):null,m?e.jsx(t,{variant:"secondary",size:"medium",type:"button","aria-label":"Add",icon:e.jsx(j,{size:"medium"}),onClick:b}):null,s?e.jsx(t,{variant:"secondary",size:"medium",type:"button",onClick:x,children:y}):null,r?e.jsx(t,{variant:"primary",size:"medium",type:"button",startIcon:e.jsx(j,{size:"medium"}),onClick:_,children:f}):null]})}u.__docgenInfo={description:"",methods:[],displayName:"ActionBar",props:{showButtonIconLeft:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showButtonIconRight:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showMainCta:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showSecondaryButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},secondaryLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Task Prompt'",computed:!1}},primaryLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Create New Project'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onMoreClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onIconClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSecondaryClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPrimaryClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function p({showBackButton:a=!1,showBreadcrumb:m=!0,showTitle:r=!0,showSubtitleText:s=!0,showActionBar:y=!0,title:f="Projects",subtitle:h="Create and manage your projects. Open any project to view details and collaborate with your team.",className:v="",onBackClick:b}){const x=r||s;return e.jsxs("header",{className:["spark-header",v].filter(Boolean).join(" "),children:[e.jsxs("div",{className:"spark-header-leading",children:[m?e.jsx(D,{items:[{label:"Breadcrumb Link"},{label:"Breadcrumb Link"}]}):null,x?e.jsxs("div",{className:"spark-header-title-row",children:[a?e.jsx("div",{className:"spark-header-back",children:e.jsx(t,{variant:"ghost",size:"medium",type:"button","aria-label":"Go back",icon:e.jsx(W,{slug:"chevron-left-large",size:"medium"}),onClick:b})}):null,e.jsxs("div",{className:"spark-header-copy",children:[r?e.jsx("h1",{className:"spark-header-title",children:f}):null,s?e.jsx("p",{className:"spark-header-subtitle",children:h}):null]})]}):null]}),y?e.jsx(u,{}):null]})}p.__docgenInfo={description:"",methods:[],displayName:"Header",props:{showBackButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showBreadcrumb:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showTitle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showSubtitleText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showActionBar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Projects'",computed:!1}},subtitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Create and manage your projects. Open any project to view details and collaborate with your team.'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onBackClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Z={title:"Components/Header",component:p,tags:["autodocs"],argTypes:{showBackButton:{control:"boolean"},showBreadcrumb:{control:"boolean"},showTitle:{control:"boolean"},showSubtitleText:{control:"boolean"},showActionBar:{control:"boolean"}},args:{showBackButton:!1,showBreadcrumb:!0,showTitle:!0,showSubtitleText:!0,showActionBar:!0,title:"Projects",subtitle:"Create and manage your projects. Open any project to view details and collaborate with your team."},parameters:{layout:"padded",docs:{description:{component:"Main Header anchors full-page layouts with breadcrumbs, optional back navigation, page title and description, and a right-aligned action bar. Use one primary CTA per page. Icon-only action bar buttons show hover/focus tooltips with a 4px overlay gap. Figma `1269:16923`."}}}},n={},o={args:{showBackButton:!0}},i={parameters:{docs:{description:{story:"Figma documentation matrix — full header vs action-bar-only strip. Keep a single primary CTA in the action bar."}}},render:()=>e.jsxs("div",{style:g,children:[e.jsxs("div",{style:c,children:[e.jsx("p",{style:B,children:"All off"}),e.jsx("div",{style:{flex:1,minWidth:0},children:e.jsx(p,{})})]}),e.jsxs("div",{style:c,children:[e.jsx("p",{style:B,children:"All on"}),e.jsx(u,{})]})]})},l={parameters:{docs:{description:{story:"Use the back button when users need a clear path backward through hierarchical pages."}}},render:()=>e.jsx("div",{style:g,children:[!1,!0].map(a=>e.jsxs("div",{style:c,children:[e.jsx("p",{style:H,children:a?"Back on":"Back off"}),e.jsx("div",{style:{flex:1,minWidth:0},children:e.jsx(p,{showBackButton:a})})]},String(a)))})},d={parameters:{docs:{description:{story:"Action bar anatomy — overflow menu, icon button, secondary action, and primary CTA."}}},render:()=>e.jsx("div",{style:g,children:e.jsxs("div",{style:c,children:[e.jsx("p",{style:H,children:"Default"}),e.jsx(u,{})]})})};var w,k,S;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(S=(k=n.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var T,C,A;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    showBackButton: true
  }
}`,...(A=(C=o.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var q,M,V;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Figma documentation matrix — full header vs action-bar-only strip. Keep a single primary CTA in the action bar.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>All off</p>
        <div style={{
        flex: 1,
        minWidth: 0
      }}>
          <Header />
        </div>
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>All on</p>
        <ActionBar />
      </div>
    </div>
}`,...(V=(M=i.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var I,N,z;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Use the back button when users need a clear path backward through hierarchical pages.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {([false, true] as const).map(showBackButton => <div key={String(showBackButton)} style={storyMatrixItemRowStyle}>
          <p style={variantLabelStyle}>{showBackButton ? 'Back on' : 'Back off'}</p>
          <div style={{
        flex: 1,
        minWidth: 0
      }}>
            <Header showBackButton={showBackButton} />
          </div>
        </div>)}
    </div>
}`,...(z=(N=l.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var L,P,R;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Action bar anatomy — overflow menu, icon button, secondary action, and primary CTA.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStyle}>
        <p style={variantLabelStyle}>Default</p>
        <ActionBar />
      </div>
    </div>
}`,...(R=(P=d.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const $=["Default","WithBackButton","ElementsMatrix","BackButtonMatrix","ActionBarMatrix"];export{d as ActionBarMatrix,l as BackButtonMatrix,n as Default,i as ElementsMatrix,o as WithBackButton,$ as __namedExportsOrder,Z as default};
