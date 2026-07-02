import{j as e}from"./jsx-runtime-BYYWji4R.js";import{s as u,f as c,b as z,g as p,v as h}from"./storyHelpers-D7QoSJ90.js";import{F as y}from"./feedbackHelpers-DW71QCW8.js";import{B as i}from"./Button-CdN-AKPT.js";import{S as K}from"./SparkIcon-B877p_59.js";import{F as S}from"./FeedbackIcon-CrQBRW88.js";/* empty css                      */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./TooltipTrigger-CeqIspS_.js";import"./Tooltip-rWdCQlMf.js";import"./sparkAssetUrl-FWf-EcJv.js";function s({title:t="Notification title",content:E="Interactively monetize corporate alignments and fully tested niche markets.",feedbackType:a="success",detailed:L=!1,showButtons:x=!0,showIconButton:V=!0,closeLabel:f="Close",actionLabel:A="Action",className:v="",onCloseClick:m,onActionClick:_,onDismissClick:R}){return L?e.jsxs("div",{className:["spark-toast","spark-toast-detailed",`spark-toast-${a}`,v].filter(Boolean).join(" "),role:"status",children:[e.jsxs("div",{className:"spark-toast-detailed-header",children:[e.jsxs("div",{className:"spark-toast-detailed-main",children:[e.jsxs("div",{className:"spark-toast-title-row",children:[e.jsx(S,{feedbackType:a,className:"spark-toast-icon"}),e.jsx("p",{className:"spark-toast-detailed-title",children:t})]}),e.jsx("p",{className:"spark-toast-detailed-content",children:E})]}),V?e.jsx(i,{variant:"ghost",size:"medium",type:"button",className:"spark-toast-icon-close","aria-label":"Dismiss toast",onClick:R??m,icon:e.jsx(K,{slug:"close",size:"small"})}):null]}),x?e.jsxs("div",{className:"spark-toast-footer",children:[e.jsx(i,{variant:"ghost",size:"tiny",type:"button",onClick:m,children:f}),e.jsx(i,{variant:"primary",size:"tiny",type:"button",onClick:_,children:A})]}):null]}):e.jsxs("div",{className:["spark-toast",`spark-toast-${a}`,v].filter(Boolean).join(" "),role:"status",children:[e.jsxs("div",{className:"spark-toast-simple-content",children:[e.jsx(S,{feedbackType:a,className:"spark-toast-icon"}),e.jsx("p",{className:"spark-toast-simple-title",children:t})]}),x?e.jsx("div",{className:"spark-toast-simple-actions",children:e.jsx(i,{variant:"tertiary",size:"tiny",type:"button",onClick:m,children:f})}):null]})}s.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Notification title'",computed:!1}},content:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Interactively monetize corporate alignments and fully tested niche markets.'",computed:!1}},feedbackType:{required:!1,tsType:{name:"union",raw:"'success' | 'warning' | 'info' | 'error'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'success'",computed:!1}},detailed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showButtons:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showIconButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Close'",computed:!1}},actionLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Action'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onCloseClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onActionClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDismissClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const te={title:"Components/Toast",component:s,tags:["autodocs"],argTypes:{feedbackType:{control:"select",options:y},detailed:{control:"boolean"},showButtons:{control:"boolean"},showIconButton:{control:"boolean"}},args:{title:"Notification title",content:"Interactively monetize corporate alignments and fully tested niche markets.",feedbackType:"success",detailed:!1,showButtons:!0,showIconButton:!0,closeLabel:"Close",actionLabel:"Action"},parameters:{docs:{description:{component:"Toasts provide brief, temporary feedback about the outcome of a user action. They auto-dismiss after 4–6 seconds and appear non-modally."}}}},r={},n={args:{detailed:!0}},o={parameters:{docs:{description:{story:"Simple toast feedback types with icon, title, and Close action."}}},render:()=>e.jsx("div",{style:u,children:y.map(t=>e.jsxs("div",{style:c,children:[e.jsx("p",{style:z,children:t}),e.jsx("div",{style:{...p,maxWidth:"356px",width:"100%"},children:e.jsx(s,{feedbackType:t})})]},t))})},l={parameters:{docs:{description:{story:"Detailed toast with title, body, dismiss icon, and footer actions."}}},render:()=>e.jsx("div",{style:u,children:y.map(t=>e.jsxs("div",{style:c,children:[e.jsx("p",{style:z,children:t}),e.jsx("div",{style:{...p,maxWidth:"356px",width:"100%"},children:e.jsx(s,{feedbackType:t,detailed:!0})})]},t))})},d={render:()=>e.jsxs("div",{style:u,children:[e.jsxs("div",{style:c,children:[e.jsx("p",{style:h,children:"Simple"}),e.jsx("div",{style:{...p,maxWidth:"356px",width:"100%"},children:e.jsx(s,{})})]}),e.jsxs("div",{style:c,children:[e.jsx("p",{style:h,children:"Detailed"}),e.jsx("div",{style:{...p,maxWidth:"356px",width:"100%"},children:e.jsx(s,{detailed:!0})})]})]})};var j,k,b;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(b=(k=r.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var g,T,w;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    detailed: true
  }
}`,...(w=(T=n.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var M,N,D;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Simple toast feedback types with icon, title, and Close action.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {FEEDBACK_TYPES.map(feedbackType => <div key={feedbackType} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{feedbackType}</p>
          <div style={{
        ...storyMatrixFieldWrapStyle,
        maxWidth: '356px',
        width: '100%'
      }}>
            <Toast feedbackType={feedbackType} />
          </div>
        </div>)}
    </div>
}`,...(D=(N=o.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var I,C,F;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Detailed toast with title, body, dismiss icon, and footer actions.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {FEEDBACK_TYPES.map(feedbackType => <div key={feedbackType} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{feedbackType}</p>
          <div style={{
        ...storyMatrixFieldWrapStyle,
        maxWidth: '356px',
        width: '100%'
      }}>
            <Toast feedbackType={feedbackType} detailed />
          </div>
        </div>)}
    </div>
}`,...(F=(C=l.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var W,q,B;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={variantLabelStyle}>Simple</p>
        <div style={{
        ...storyMatrixFieldWrapStyle,
        maxWidth: '356px',
        width: '100%'
      }}>
          <Toast />
        </div>
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={variantLabelStyle}>Detailed</p>
        <div style={{
        ...storyMatrixFieldWrapStyle,
        maxWidth: '356px',
        width: '100%'
      }}>
          <Toast detailed />
        </div>
      </div>
    </div>
}`,...(B=(q=d.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const se=["Default","Detailed","FeedbackMatrix","DetailedMatrix","LayoutMatrix"];export{r as Default,n as Detailed,l as DetailedMatrix,o as FeedbackMatrix,d as LayoutMatrix,se as __namedExportsOrder,te as default};
