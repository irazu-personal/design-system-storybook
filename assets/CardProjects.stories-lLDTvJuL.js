import{j as e}from"./jsx-runtime-BYYWji4R.js";import{s as z,f as A,b as F,g as I}from"./storyHelpers-D7QoSJ90.js";import{B as c}from"./Button-CdN-AKPT.js";import{S as r}from"./SparkIcon-B877p_59.js";import{T as _}from"./TagFeedback-DaAA8F0s.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./TooltipTrigger-CeqIspS_.js";import"./Tooltip-rWdCQlMf.js";import"./sparkAssetUrl-FWf-EcJv.js";const B={success:"Success",processing:"Processing",warning:"Warning",error:"Error"};function t({title:s="Task name 2 V1",description:w="Short description about this task.",status:n="success",statusLabel:k,showStatus:T=!0,deploymentStatus:b="4 waiting to distill, 1 deployed",taskType:N="Entity extraction",lastUpdated:C="Last updated: June 16, 2025",footer:V=!0,editLabel:q="Edit & View",moreActionsLabel:P="More Actions",className:E="",onEditClick:M,onMoreActionsClick:L}){const W=k??B[n];return e.jsxs("article",{className:["spark-card-projects",E].filter(Boolean).join(" "),children:[e.jsxs("div",{className:"spark-card-projects-body",children:[e.jsxs("div",{className:"spark-card-projects-heading",children:[e.jsxs("div",{className:"spark-card-projects-title-row",children:[e.jsx("h3",{className:"spark-card-projects-title",children:s}),T?e.jsx(_,{variant:n,label:W,className:"spark-card-projects-status"}):null]}),e.jsx("p",{className:"spark-card-projects-description",children:w})]}),e.jsxs("dl",{className:"spark-card-projects-details",children:[e.jsxs("div",{className:"spark-card-projects-detail-row",children:[e.jsx(r,{slug:"model",size:"small",className:"spark-card-projects-detail-icon"}),e.jsx("dd",{children:b})]}),e.jsxs("div",{className:"spark-card-projects-detail-row",children:[e.jsx(r,{slug:"circle-info",size:"small",className:"spark-card-projects-detail-icon"}),e.jsx("dd",{children:N})]}),e.jsxs("div",{className:"spark-card-projects-detail-row",children:[e.jsx(r,{slug:"calendar",size:"small",className:"spark-card-projects-detail-icon"}),e.jsx("dd",{children:C})]})]})]}),V?e.jsxs("footer",{className:"spark-card-projects-footer",children:[e.jsx(c,{variant:"text",size:"small",type:"button",className:"spark-card-projects-edit",startIcon:e.jsx(r,{slug:"edit",size:"small"}),onClick:M,children:q}),e.jsx(c,{variant:"ghost",size:"small",type:"button",className:"spark-card-projects-more",onClick:L,children:P})]}):null]})}t.__docgenInfo={description:"",methods:[],displayName:"CardProjects",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Task name 2 V1'",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Short description about this task.'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'success' | 'processing' | 'warning' | 'error'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'processing'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'success'",computed:!1}},statusLabel:{required:!1,tsType:{name:"string"},description:""},showStatus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},deploymentStatus:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'4 waiting to distill, 1 deployed'",computed:!1}},taskType:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Entity extraction'",computed:!1}},lastUpdated:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Last updated: June 16, 2025'",computed:!1}},footer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},editLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Edit & View'",computed:!1}},moreActionsLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'More Actions'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onEditClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onMoreActionsClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Z={title:"Components/Cards/Projects",component:t,tags:["autodocs"],argTypes:{status:{control:"select",options:["success","processing","warning","error"]},footer:{control:"boolean"},showStatus:{control:"boolean"}},args:{status:"success",footer:!0,showStatus:!0},parameters:{layout:"fullscreen",docs:{description:{component:"Project dashboard card for task status, metadata, and footer actions. Keep text link + ghost actions — do not swap to solid primary buttons."}}},decorators:[s=>e.jsx("div",{style:{background:"var(--semantic-surface-canvas)",padding:"1.5rem",minHeight:"100%"},children:e.jsx("div",{style:{width:"100%",maxWidth:"400px"},children:e.jsx(s,{})})})]},a={},i={args:{footer:!1}},D=["success","processing","warning","error"],o={parameters:{docs:{description:{story:"Figma `5551:17807` — pipeline status badges."}}},render:()=>e.jsx("div",{style:z,children:D.map(s=>e.jsxs("div",{style:A,children:[e.jsx("p",{style:F,children:s}),e.jsx("div",{style:{...I,maxWidth:"400px",width:"100%"},children:e.jsx(t,{status:s})})]},s))})},d={parameters:{docs:{description:{story:"Documentation grid preview with mixed status cards."}}},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"1rem",width:"100%",maxWidth:"720px"},children:[e.jsx(t,{status:"success"}),e.jsx(t,{status:"processing"}),e.jsx(t,{status:"warning"}),e.jsx(t,{status:"error"})]})};var l,p,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,f,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    footer: false
  }
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var x,j,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Figma \`5551:17807\` — pipeline status badges.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {STATUSES.map(status => <div key={status} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{status}</p>
          <div style={{
        ...storyMatrixFieldWrapStyle,
        maxWidth: '400px',
        width: '100%'
      }}>
            <CardProjects status={status} />
          </div>
        </div>)}
    </div>
}`,...(y=(j=o.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var h,v,S;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Documentation grid preview with mixed status cards.'
      }
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1rem',
    width: '100%',
    maxWidth: '720px'
  }}>
      <CardProjects status="success" />
      <CardProjects status="processing" />
      <CardProjects status="warning" />
      <CardProjects status="error" />
    </div>
}`,...(S=(v=d.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const $=["Default","WithoutFooter","StatusMatrix","GridPreview"];export{a as Default,d as GridPreview,o as StatusMatrix,i as WithoutFooter,$ as __namedExportsOrder,Z as default};
