import{j as e}from"./jsx-runtime-BYYWji4R.js";import{s as L,a as I,v,f as x,b as g}from"./storyHelpers-D7QoSJ90.js";import{S as R}from"./ScrollBar-Cp2nGFrO.js";import{M as O,a as B,b as y,m as z,c as b}from"./modalStoryShared-DJsZuPpC.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-CdN-AKPT.js";import"./SparkIcon-B877p_59.js";import"./sparkAssetUrl-FWf-EcJv.js";import"./TooltipTrigger-CeqIspS_.js";import"./Tooltip-rWdCQlMf.js";import"./FeedbackIcon-CrQBRW88.js";import"./Overlay-DPQ3zSyg.js";function f({title:a="Long title",subtitle:s="Subtitle",showSubtitle:t=!0,showClose:o=!0,showScrollBar:n=!0,showFooterSlot:d=!1,showOverlay:u=!0,footerType:c="default",danger:p=!1,children:m,className:C="",onCloseClick:D}){const _=e.jsxs("div",{className:["spark-modal","spark-modal-slot",C].filter(Boolean).join(" "),role:"dialog","aria-modal":"true","aria-labelledby":"spark-modal-title",children:[e.jsx(B,{title:a,subtitle:s,showSubtitle:t,showClose:o,onCloseClick:D}),e.jsxs("div",{className:"spark-modal-body spark-modal-body-slot",children:[m??e.jsx("div",{className:"spark-modal-slot-placeholder","aria-hidden":"true"}),n?e.jsx(R,{className:"spark-modal-scrollbar"}):null]}),e.jsx(y,{footerType:c,danger:p,showFooterSlot:d})]});return e.jsx(O,{showOverlay:u,size:"slot",children:_})}f.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Long title'",computed:!1}},subtitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Subtitle'",computed:!1}},showSubtitle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showClose:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showScrollBar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showFooterSlot:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showOverlay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},footerType:{required:!1,tsType:{name:"union",raw:"'default' | 'checkbox'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'checkbox'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},danger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onCloseClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const A="You are about to save these changes. This will update the shared workspace settings. Are you sure you want to continue?";function h({title:a="Long title",subtitle:s="Subtitle",showSubtitle:t=!0,showClose:o=!0,showOverlay:n=!0,content:d=A,danger:u=!1,className:c="",onCloseClick:p}){const m=e.jsxs("div",{className:["spark-modal","spark-modal-text",c].filter(Boolean).join(" "),role:"dialog","aria-modal":"true","aria-labelledby":"spark-modal-title",children:[e.jsx(B,{title:a,subtitle:s,showSubtitle:t,showClose:o,onCloseClick:p}),e.jsx("div",{className:"spark-modal-body spark-modal-body-text",children:e.jsx("p",{className:"spark-modal-text-content",children:d})}),e.jsx(y,{danger:u})]});return e.jsx(O,{showOverlay:n,size:"text",children:m})}h.__docgenInfo={description:"",methods:[],displayName:"ModalText",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Long title'",computed:!1}},subtitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Subtitle'",computed:!1}},showSubtitle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showClose:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showOverlay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},content:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'You are about to save these changes. This will update the shared workspace settings. Are you sure you want to continue?'",computed:!1}},danger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onCloseClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function S({type:a="slot",content:s,children:t,...o}){return a==="text"?e.jsx(h,{content:s,...o}):e.jsx(f,{...o,children:t})}const ee={title:"Components/Modal",component:S,tags:["autodocs"],argTypes:{type:{control:"select",options:["slot","text"],description:"Figma `Type` axis — Slot for custom body content, Text for confirmation copy."},showOverlay:{control:"boolean"},showSubtitle:{control:"boolean"},showClose:{control:"boolean"},showScrollBar:{control:"boolean",if:{arg:"type",eq:"slot"}},showFooterSlot:{control:"boolean"},footerType:{control:"select",options:["default","checkbox"]},danger:{control:"boolean"},content:{control:"text",if:{arg:"type",eq:"text"}}},args:{type:"slot",showOverlay:!0,showSubtitle:!0,showClose:!0,showScrollBar:!0,showFooterSlot:!1,footerType:"default",danger:!1,content:"You are about to save these changes. This will update the shared workspace settings. Are you sure you want to continue?"},parameters:{...b,docs:{...b.docs,description:{component:"Modal dialogs lock focus for critical tasks. Use `type` to switch between Slot (custom body) and Text (confirmation copy). Overlay must obscure navigation. Figma `674:65629`."}}},decorators:z,render:a=>e.jsx(S,{...a})},r={},l={parameters:{docs:{description:{story:"Slot modal for custom content vs Text modal for confirmation copy."}}},render:()=>e.jsxs("div",{style:{...L,padding:"2rem 0"},children:[e.jsxs("div",{style:x,children:[e.jsx("p",{style:g,children:"Slot"}),e.jsx(f,{showOverlay:!0})]}),e.jsxs("div",{style:x,children:[e.jsx("p",{style:g,children:"Text"}),e.jsx(h,{showOverlay:!0})]})]})},i={parameters:{layout:"padded",docs:{description:{story:"Footer variants — default vs checkbox slot, with optional danger primary action."}}},render:()=>{const a=["default","checkbox"],s=[!1,!0];return e.jsx("div",{style:L,children:a.map(t=>e.jsxs("div",{style:I,children:[e.jsx("p",{style:v,children:t}),e.jsx("div",{className:"story-row",children:s.map(o=>e.jsxs("div",{style:{minWidth:320},children:[e.jsx("p",{style:{...v,marginBottom:"0.5rem"},children:o?"Danger":"Default"}),e.jsx(y,{footerType:t,danger:o,showFooterSlot:t==="default"})]},String(o)))})]},t))})}};var T,w,j;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(j=(w=r.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var k,M,q;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Slot modal for custom content vs Text modal for confirmation copy.'
      }
    }
  },
  render: () => <div style={{
    ...storyMatrixSectionStyle,
    padding: '2rem 0'
  }}>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>Slot</p>
        <Modal showOverlay />
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>Text</p>
        <ModalText showOverlay />
      </div>
    </div>
}`,...(q=(M=l.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var V,F,N;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Footer variants — default vs checkbox slot, with optional danger primary action.'
      }
    }
  },
  render: () => {
    const footerTypes = ['default', 'checkbox'] as const;
    const dangerStates = [false, true] as const;
    return <div style={storyMatrixSectionStyle}>
        {footerTypes.map(footerType => <div key={footerType} style={storyMatrixItemRowStyle}>
            <p style={variantLabelStyle}>{footerType}</p>
            <div className="story-row">
              {dangerStates.map(danger => <div key={String(danger)} style={{
            minWidth: 320
          }}>
                  <p style={{
              ...variantLabelStyle,
              marginBottom: '0.5rem'
            }}>
                    {danger ? 'Danger' : 'Default'}
                  </p>
                  <ModalFooter footerType={footerType} danger={danger} showFooterSlot={footerType === 'default'} />
                </div>)}
            </div>
          </div>)}
      </div>;
  }
}`,...(N=(F=i.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};const te=["Default","TypeMatrix","FooterMatrix"];export{r as Default,i as FooterMatrix,l as TypeMatrix,te as __namedExportsOrder,ee as default};
