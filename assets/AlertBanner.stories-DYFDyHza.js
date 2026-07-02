import{j as e}from"./jsx-runtime-BYYWji4R.js";import{s as m,f as c,v as R,g as p,b as u}from"./storyHelpers-D7QoSJ90.js";import{F as q}from"./feedbackHelpers-DW71QCW8.js";import{B as _}from"./Button-CdN-AKPT.js";import{O as z}from"./OutlineFeedbackIcon-CpglJw42.js";import{s as K}from"./sparkAssetUrl-FWf-EcJv.js";/* empty css                      */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./SparkIcon-B877p_59.js";import"./TooltipTrigger-CeqIspS_.js";import"./Tooltip-rWdCQlMf.js";function r({text:t="{Project Name} was added to your Projects",feedback:s="success",buttonType:E="default",showIcon:O=!0,showButton:P=!0,showCloseButton:V=!0,buttonLabel:y="Button",className:D="",onActionClick:x,onCloseClick:L}){return e.jsxs("div",{className:["spark-alert-banner",`spark-alert-banner-${s}`,D].filter(Boolean).join(" "),role:"status",children:[e.jsxs("div",{className:"spark-alert-banner-content",children:[O?e.jsx(z,{feedback:s,className:"spark-alert-banner-icon"}):null,e.jsx("p",{className:"spark-alert-banner-text",children:t}),P?E==="text"?e.jsx(_,{variant:"link",size:"medium",type:"button",onClick:x,children:y}):e.jsx("button",{type:"button",className:"spark-alert-banner-action",onClick:x,children:y}):null]}),V?e.jsx("button",{type:"button",className:"spark-alert-banner-close","aria-label":"Dismiss alert",onClick:L,children:e.jsx("img",{src:K("icons/close-inline-6.svg"),width:6,height:6,alt:"","aria-hidden":"true",className:"spark-alert-banner-close-icon"})}):null]})}r.__docgenInfo={description:"",methods:[],displayName:"AlertBanner",props:{text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'{Project Name} was added to your Projects'",computed:!1}},feedback:{required:!1,tsType:{name:"union",raw:"'success' | 'warning' | 'info' | 'error'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'success'",computed:!1}},buttonType:{required:!1,tsType:{name:"union",raw:"'default' | 'text'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'text'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},buttonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Button'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onActionClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCloseClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const re={title:"Components/Alert Banner",component:r,tags:["autodocs"],argTypes:{feedback:{control:"select",options:q},buttonType:{control:"select",options:["default","text"]},showIcon:{control:"boolean"},showButton:{control:"boolean"},showCloseButton:{control:"boolean"}},args:{text:"{Project Name} was added to your Projects",feedback:"success",buttonType:"default",showIcon:!0,showButton:!0,showCloseButton:!0,buttonLabel:"Button"},parameters:{docs:{description:{component:"Alert banners display important, task-related information or system updates at the top of the interface. Offer only one action per banner."}}}},a={},n={args:{buttonType:"text"}},o={args:{showIcon:!1,showButton:!1,showCloseButton:!1}},l={parameters:{docs:{description:{story:"Feedback type matrix from Figma — success, warning, info, and error with icon, CTA, and close."}}},render:()=>e.jsx("div",{style:m,children:q.map(t=>e.jsxs("div",{style:c,children:[e.jsx("p",{style:u,children:t}),e.jsx("div",{style:{...p,maxWidth:"944px",width:"100%"},children:e.jsx(r,{feedback:t})})]},t))})},i={parameters:{docs:{description:{story:"Default pill CTA vs lower-emphasis text link action."}}},render:()=>{const t=["default","text"];return e.jsx("div",{style:m,children:t.map(s=>e.jsxs("div",{style:c,children:[e.jsx("p",{style:R,children:s}),e.jsx("div",{style:{...p,maxWidth:"944px",width:"100%"},children:e.jsx(r,{buttonType:s})})]},s))})}},d={parameters:{docs:{description:{story:"All optional elements on vs message text only."}}},render:()=>e.jsxs("div",{style:m,children:[e.jsxs("div",{style:c,children:[e.jsx("p",{style:u,children:"All on"}),e.jsx("div",{style:{...p,maxWidth:"944px",width:"100%"},children:e.jsx(r,{})})]}),e.jsxs("div",{style:c,children:[e.jsx("p",{style:u,children:"All off"}),e.jsx("div",{style:{...p,maxWidth:"944px",width:"100%"},children:e.jsx(r,{showIcon:!1,showButton:!1,showCloseButton:!1})})]})]})};var f,h,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var b,w,g;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    buttonType: 'text'
  }
}`,...(g=(w=n.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var S,j,B;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    showIcon: false,
    showButton: false,
    showCloseButton: false
  }
}`,...(B=(j=o.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var T,k,A;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Feedback type matrix from Figma — success, warning, info, and error with icon, CTA, and close.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {FEEDBACK_TYPES.map(feedback => <div key={feedback} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{feedback}</p>
          <div style={{
        ...storyMatrixFieldWrapStyle,
        maxWidth: '944px',
        width: '100%'
      }}>
            <AlertBanner feedback={feedback} />
          </div>
        </div>)}
    </div>
}`,...(A=(k=l.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var M,C,F;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default pill CTA vs lower-emphasis text link action.'
      }
    }
  },
  render: () => {
    const buttonTypes: AlertBannerButtonType[] = ['default', 'text'];
    return <div style={storyMatrixSectionStyle}>
        {buttonTypes.map(buttonType => <div key={buttonType} style={storyMatrixItemRowStartStyle}>
            <p style={variantLabelStyle}>{buttonType}</p>
            <div style={{
          ...storyMatrixFieldWrapStyle,
          maxWidth: '944px',
          width: '100%'
        }}>
              <AlertBanner buttonType={buttonType} />
            </div>
          </div>)}
      </div>;
  }
}`,...(F=(C=i.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var I,W,N;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'All optional elements on vs message text only.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>All on</p>
        <div style={{
        ...storyMatrixFieldWrapStyle,
        maxWidth: '944px',
        width: '100%'
      }}>
          <AlertBanner />
        </div>
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>All off</p>
        <div style={{
        ...storyMatrixFieldWrapStyle,
        maxWidth: '944px',
        width: '100%'
      }}>
          <AlertBanner showIcon={false} showButton={false} showCloseButton={false} />
        </div>
      </div>
    </div>
}`,...(N=(W=d.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};const ae=["Default","TextButton","MessageOnly","FeedbackMatrix","ButtonTypeMatrix","OptionalElements"];export{i as ButtonTypeMatrix,a as Default,l as FeedbackMatrix,o as MessageOnly,d as OptionalElements,n as TextButton,ae as __namedExportsOrder,re as default};
