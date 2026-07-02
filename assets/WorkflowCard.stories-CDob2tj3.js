import{j as e}from"./jsx-runtime-BYYWji4R.js";import{h as B,s as j,a as S,b as R,v as E}from"./storyHelpers-D7QoSJ90.js";import{B as I}from"./Button-CdN-AKPT.js";import{P as _}from"./ProgressBar-DCq07sLr.js";import{T as z}from"./TagColored-Cd05E6u5.js";/* empty css                */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./SparkIcon-B877p_59.js";import"./sparkAssetUrl-FWf-EcJv.js";import"./TooltipTrigger-CeqIspS_.js";import"./Tooltip-rWdCQlMf.js";function s({type:r="overall-progress",border:T=!1,topTitle:V="Overview / Total extractions",bottomTitle:N="Overall Progress",metricValue:C="0",progressValue:q=0,tagLabel:M="Low (89)",tagVariant:W="blue",reviewLabel:L="Review",className:O=""}){const P=["spark-workflow-card",T?"spark-workflow-card-border":"",O].filter(Boolean).join(" ");return e.jsx("div",{className:P,children:e.jsxs("div",{className:"spark-widget-content",children:[e.jsx("div",{className:"spark-workflow-card-header",children:r==="overall-progress"?e.jsx("p",{className:"spark-workflow-card-title",children:V}):e.jsxs(e.Fragment,{children:[e.jsx(z,{label:M,variant:W}),e.jsx(I,{variant:"link",size:"tiny",children:L})]})}),e.jsxs("div",{className:"spark-workflow-card-footer",children:[e.jsx("p",{className:"spark-workflow-card-metric",children:r==="specific-progress"?"3":C}),e.jsxs("div",{className:"spark-workflow-card-progress-wrap",children:[e.jsx("p",{className:"spark-workflow-card-progress-label",children:r==="overall-progress"?"Labels Reviewed":N}),e.jsx(_,{value:q,showPercentage:!0})]})]})]})})}s.__docgenInfo={description:"",methods:[],displayName:"WorkflowCard",props:{type:{required:!1,tsType:{name:"union",raw:"'overall-progress' | 'specific-progress'",elements:[{name:"literal",value:"'overall-progress'"},{name:"literal",value:"'specific-progress'"}]},description:"",defaultValue:{value:"'overall-progress'",computed:!1}},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},topTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Overview / Total extractions'",computed:!1}},bottomTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Overall Progress'",computed:!1}},metricValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'0'",computed:!1}},progressValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},tagLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Low (89)'",computed:!1}},tagVariant:{required:!1,tsType:{name:"union",raw:`| 'pink'
| 'burgundy'
| 'purple'
| 'blue'
| 'cyan'
| 'lime'
| 'volcano'
| 'peach'
| 'yellow'
| 'disabled'`,elements:[{name:"literal",value:"'pink'"},{name:"literal",value:"'burgundy'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'cyan'"},{name:"literal",value:"'lime'"},{name:"literal",value:"'volcano'"},{name:"literal",value:"'peach'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'disabled'"}]},description:"",defaultValue:{value:"'blue'",computed:!1}},reviewLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Review'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const ee={title:"Components/Widgets/Workflow Card",component:s,tags:["autodocs"],argTypes:{type:{control:"select",options:["overall-progress","specific-progress"]},border:{control:"boolean"},progressValue:{control:{type:"range",min:0,max:100,step:1}}},args:{type:"overall-progress",border:!1,progressValue:0},decorators:[B],parameters:{docs:{description:{component:"Workflow Card — overall progress summary or specific tier progress with inline Review action. Turn border off when nesting inside parent containers."}}}},D=["overall-progress","specific-progress"],a={},o={args:{type:"specific-progress",progressValue:35}},l={args:{border:!0}},t={render:()=>e.jsx("div",{style:j,children:D.map(r=>e.jsxs("div",{style:S,children:[e.jsx("p",{style:E,children:r.replace("-"," ")}),e.jsx(s,{type:r,progressValue:r==="specific-progress"?35:0})]},r))})},i={render:()=>e.jsx("div",{style:j,children:[!1,!0].map(r=>e.jsxs("div",{style:S,children:[e.jsx("p",{style:R,children:r?"On":"Off"}),e.jsxs("div",{className:"story-row",children:[e.jsx(s,{type:"overall-progress",border:r}),e.jsx(s,{type:"specific-progress",border:r,progressValue:35})]})]},String(r)))})};var p,n,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var d,u,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: 'specific-progress',
    progressValue: 35
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var f,v,g;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    border: true
  }
}`,...(g=(v=l.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var y,w,x;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {TYPES.map(type => <div key={type} style={storyMatrixItemRowStyle}>
          <p style={variantLabelStyle}>{type.replace('-', ' ')}</p>
          <WorkflowCard type={type} progressValue={type === 'specific-progress' ? 35 : 0} />
        </div>)}
    </div>
}`,...(x=(w=t.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var b,k,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {[false, true].map(border => <div key={String(border)} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{border ? 'On' : 'Off'}</p>
          <div className="story-row">
            <WorkflowCard type="overall-progress" border={border} />
            <WorkflowCard type="specific-progress" border={border} progressValue={35} />
          </div>
        </div>)}
    </div>
}`,...(h=(k=i.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};const re=["Default","SpecificProgress","WithBorder","TypeMatrix","BorderMatrix"];export{i as BorderMatrix,a as Default,o as SpecificProgress,t as TypeMatrix,l as WithBorder,re as __namedExportsOrder,ee as default};
