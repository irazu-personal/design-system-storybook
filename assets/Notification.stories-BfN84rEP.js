import{j as e}from"./jsx-runtime-BYYWji4R.js";import{s as x,f as s,b as m,g as y,v as u}from"./storyHelpers-D7QoSJ90.js";import{N as A}from"./feedbackHelpers-DW71QCW8.js";import{N as t}from"./Notification-SiXGWFHx.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-CdN-AKPT.js";import"./SparkIcon-B877p_59.js";import"./sparkAssetUrl-FWf-EcJv.js";import"./TooltipTrigger-CeqIspS_.js";import"./Tooltip-rWdCQlMf.js";import"./OutlineFeedbackIcon-CpglJw42.js";/* empty css                      */const ee={title:"Components/Notification",component:t,tags:["autodocs"],argTypes:{feedback:{control:"select",options:A},wide:{control:"boolean"},elevated:{control:"boolean"},showIcon:{control:"boolean"},showContent:{control:"boolean"},showButton:{control:"boolean"},showCloseButton:{control:"boolean"}},args:{title:"Notification title",content:"Interactively monetize corporate alignments and fully tested niche markets.",feedback:"success",wide:!1,elevated:!0,showIcon:!0,showContent:!0,showButton:!0,showCloseButton:!0,actionLabel:"Undo"},parameters:{docs:{description:{component:"Floating notifications show important messages, updates, or feedback. Use only one notification on a screen at a time."}}}},a={},n={args:{elevated:!1}},o={args:{wide:!0},decorators:[r=>e.jsx("div",{style:{width:"100%",maxWidth:"1071px"},children:e.jsx(r,{})})]},i={args:{showContent:!1}},d={args:{feedback:"neutral"},parameters:{docs:{description:{story:"Neutral feedback — sunken surface background and circle-alert status icon per Figma `995:43833`."}}}},l={parameters:{docs:{description:{story:"Feedback types including neutral — elevated style with icon, title, body, action, and close."}}},render:()=>e.jsx("div",{style:x,children:A.map(r=>e.jsxs("div",{style:s,children:[e.jsx("p",{style:m,children:r}),e.jsx("div",{style:{...y,maxWidth:"465px",width:"100%"},children:e.jsx(t,{feedback:r})})]},r))})},c={parameters:{docs:{description:{story:"Elevated (shadow) vs flat layout depth."}}},render:()=>e.jsxs("div",{style:x,children:[e.jsxs("div",{style:s,children:[e.jsx("p",{style:u,children:"Elevated"}),e.jsx("div",{style:{...y,maxWidth:"465px",width:"100%"},children:e.jsx(t,{elevated:!0})})]}),e.jsxs("div",{style:s,children:[e.jsx("p",{style:u,children:"Flat"}),e.jsx("div",{style:{...y,maxWidth:"465px",width:"100%"},children:e.jsx(t,{elevated:!1})})]})]})},p={render:()=>e.jsxs("div",{style:x,children:[e.jsxs("div",{style:s,children:[e.jsx("p",{style:m,children:"Default"}),e.jsx("div",{style:{...y,maxWidth:"465px",width:"100%"},children:e.jsx(t,{})})]}),e.jsxs("div",{style:s,children:[e.jsx("p",{style:m,children:"Wide"}),e.jsx("div",{style:{width:"100%",maxWidth:"1071px"},children:e.jsx(t,{wide:!0})})]})]})};var v,h,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(S=(h=a.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var f,w,b;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    elevated: false
  }
}`,...(b=(w=n.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var g,j,W;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    wide: true
  },
  decorators: [StoryComponent => <div style={{
    width: '100%',
    maxWidth: '1071px'
  }}>
        <StoryComponent />
      </div>]
}`,...(W=(j=o.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var M,k,F;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    showContent: false
  }
}`,...(F=(k=i.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var N,I,C;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    feedback: 'neutral'
  },
  parameters: {
    docs: {
      description: {
        story: 'Neutral feedback — sunken surface background and circle-alert status icon per Figma \`995:43833\`.'
      }
    }
  }
}`,...(C=(I=d.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var E,T,L;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Feedback types including neutral — elevated style with icon, title, body, action, and close.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {NOTIFICATION_FEEDBACK_TYPES.map(feedback => <div key={feedback} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{feedback}</p>
          <div style={{
        ...storyMatrixFieldWrapStyle,
        maxWidth: '465px',
        width: '100%'
      }}>
            <Notification feedback={feedback} />
          </div>
        </div>)}
    </div>
}`,...(L=(T=l.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var O,R,B;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Elevated (shadow) vs flat layout depth.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={variantLabelStyle}>Elevated</p>
        <div style={{
        ...storyMatrixFieldWrapStyle,
        maxWidth: '465px',
        width: '100%'
      }}>
          <Notification elevated />
        </div>
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={variantLabelStyle}>Flat</p>
        <div style={{
        ...storyMatrixFieldWrapStyle,
        maxWidth: '465px',
        width: '100%'
      }}>
          <Notification elevated={false} />
        </div>
      </div>
    </div>
}`,...(B=(R=c.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var D,_,z;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>Default</p>
        <div style={{
        ...storyMatrixFieldWrapStyle,
        maxWidth: '465px',
        width: '100%'
      }}>
          <Notification />
        </div>
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>Wide</p>
        <div style={{
        width: '100%',
        maxWidth: '1071px'
      }}>
          <Notification wide />
        </div>
      </div>
    </div>
}`,...(z=(_=p.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};const te=["Default","Flat","Wide","TitleOnly","Neutral","FeedbackMatrix","StyleMatrix","WideMatrix"];export{a as Default,l as FeedbackMatrix,n as Flat,d as Neutral,c as StyleMatrix,i as TitleOnly,o as Wide,p as WideMatrix,te as __namedExportsOrder,ee as default};
