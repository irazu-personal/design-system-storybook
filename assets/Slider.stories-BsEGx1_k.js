import{j as e}from"./jsx-runtime-BYYWji4R.js";import{s as h,a as w,b as o,f as v,g as c}from"./storyHelpers-D7QoSJ90.js";import{T as X}from"./Tooltip-rWdCQlMf.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function m({state:s="default",tooltipValue:a,className:l="",style:t}){const r=s==="hover"?"spark-slider-handle-size-hover":s==="click-on"?"spark-slider-handle-size-click-on":"spark-slider-handle-size-default",i=(s==="hover"||s==="click-on")&&a!==void 0,d=["spark-slider-handle",r,s==="disabled"?"spark-slider-handle-disabled":"",l].filter(Boolean).join(" ");return e.jsxs("span",{className:d,style:t,"aria-hidden":"true",children:[e.jsx("span",{className:"spark-slider-handle-ring"}),i?e.jsx("span",{className:"spark-slider-handle-tooltip-wrap",children:e.jsx(X,{text:String(a),tipDirection:"top-center",className:"spark-slider-handle-tooltip"})}):null]})}function T(s,a,l){return l<=a?0:Math.min(100,Math.max(0,(s-a)/(l-a)*100))}function M({label:s,displayValue:a,disabled:l,noValuesPadding:t}){return e.jsxs("div",{className:["spark-slider-input-wrap",t?"spark-slider-input-wrap-no-values":""].filter(Boolean).join(" "),children:[e.jsx("p",{className:"spark-slider-input-label",children:s}),e.jsx("div",{className:"spark-slider-input-field","aria-hidden":"true",children:a})]})}function J({min:s,max:a}){return e.jsxs("div",{className:"spark-slider-values",children:[e.jsx("p",{className:"spark-slider-values-label",children:s}),e.jsx("div",{className:"spark-slider-ticks","aria-hidden":"true",children:Array.from({length:9},(l,t)=>e.jsx("span",{className:"spark-slider-tick"},t))}),e.jsx("p",{className:"spark-slider-values-label spark-slider-values-label-end",children:a})]})}function Z({values:s=!0,showInput:a=!0,disabled:l=!1,min:t=0,max:r=10,value:i=10,className:d=""}){const y=T(i,t,r),u=l?"disabled":"default",p=["spark-slider",l?"spark-slider-disabled":"",d].filter(Boolean).join(" ");return e.jsxs("div",{className:p,children:[e.jsxs("div",{className:["spark-slider-body",s?"":"spark-slider-body-no-values"].filter(Boolean).join(" "),children:[e.jsxs("div",{className:"spark-slider-control",children:[e.jsx("div",{className:"spark-slider-rail","aria-hidden":"true"}),e.jsx("div",{className:"spark-slider-track",style:{width:`${y}%`},"aria-hidden":"true"}),e.jsx(m,{state:u,className:"spark-slider-handle-pos",style:{left:`${y}%`}})]}),s?e.jsx(J,{min:t,max:r}):null]}),a?e.jsx(M,{label:"To",displayValue:i,disabled:l,noValuesPadding:!s}):null]})}function ee({values:s=!0,showInput:a=!0,disabled:l=!1,min:t=0,max:r=10,from:i=0,to:d=10,className:y=""}){const u=T(i,t,r),p=T(d,t,r),I=l?"disabled":"default",Q=["spark-slider-range-wrap",l?"spark-slider-disabled":"",y].filter(Boolean).join(" ");return e.jsxs("div",{className:Q,children:[a?e.jsx(M,{label:"From",displayValue:i,disabled:l,noValuesPadding:!s}):null,e.jsxs("div",{className:["spark-slider-range-body",s?"":"spark-slider-range-body-no-values"].filter(Boolean).join(" "),children:[e.jsxs("div",{className:"spark-slider-control",children:[e.jsx("div",{className:"spark-slider-rail spark-slider-rail-range","aria-hidden":"true"}),e.jsx("div",{className:"spark-slider-range-active",style:{left:`${u}%`,width:`${p-u}%`},"aria-hidden":"true"}),e.jsx(m,{state:I,className:"spark-slider-handle-pos",style:{left:`${u}%`}}),e.jsx(m,{state:I,className:"spark-slider-handle-pos",style:{left:`${p}%`}})]}),s?e.jsx(J,{min:t,max:r}):null]}),a?e.jsx(M,{label:"To",displayValue:d,disabled:l,noValuesPadding:!s}):null]})}function n({type:s="basic",values:a=!0,showInput:l=!0,disabled:t=!1,min:r=0,max:i=10,value:d=10,from:y=0,to:u=10,className:p=""}){return s==="range"?e.jsx(ee,{values:a,showInput:l,disabled:t,min:r,max:i,from:y,to:u,className:p}):e.jsx(Z,{values:a,showInput:l,disabled:t,min:r,max:i,value:d,className:p})}m.__docgenInfo={description:"",methods:[],displayName:"SliderHandle",props:{state:{required:!1,tsType:{name:"union",raw:"'default' | 'hover' | 'click-on' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'click-on'"},{name:"literal",value:"'disabled'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},tooltipValue:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Shown above handle when `state` is hover or click-on."},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};n.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{type:{required:!1,tsType:{name:"union",raw:"'basic' | 'range'",elements:[{name:"literal",value:"'basic'"},{name:"literal",value:"'range'"}]},description:"",defaultValue:{value:"'basic'",computed:!1}},values:{required:!1,tsType:{name:"boolean"},description:"Show 0–max scale labels and tick marks under the track.",defaultValue:{value:"true",computed:!1}},showInput:{required:!1,tsType:{name:"boolean"},description:"Show editable value input(s) beside the track.",defaultValue:{value:"true",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},value:{required:!1,tsType:{name:"number"},description:"Basic slider value (inclusive).",defaultValue:{value:"10",computed:!1}},from:{required:!1,tsType:{name:"number"},description:"Range slider lower bound.",defaultValue:{value:"0",computed:!1}},to:{required:!1,tsType:{name:"number"},description:"Range slider upper bound.",defaultValue:{value:"10",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const ue={title:"Components/Slider",component:n,tags:["autodocs"],argTypes:{type:{control:"select",options:["basic","range"]},values:{control:"boolean"},showInput:{control:"boolean"},disabled:{control:"boolean"},value:{control:{type:"range",min:0,max:10,step:1}},from:{control:{type:"range",min:0,max:10,step:1}},to:{control:{type:"range",min:0,max:10,step:1}}},args:{type:"basic",values:!0,showInput:!0,disabled:!1,value:10,from:0,to:10},parameters:{docs:{description:{component:"Spark Slider — select a value (**basic**) or range (**range**) along a track. Toggle **values** for the 0–10 scale, **showInput** for manual entry fields. Use for approximate selection; not for process progress."}}}},se=["basic","range"],K=["default","hover","click-on","disabled"],ae={default:"Default",hover:"Hover","click-on":"Click-on",disabled:"Disabled"},x={},f={parameters:{docs:{description:{story:"Figma documentation — **basic** (single value) and **range** (from/to boundaries)."}}},render:()=>e.jsx("div",{style:h,children:se.map(s=>e.jsxs("div",{style:v,children:[e.jsx("p",{style:o,children:s}),e.jsx("div",{style:c,children:e.jsx(n,{type:s,values:!0,showInput:!0})})]},s))})},S={render:()=>e.jsxs("div",{style:h,children:[e.jsxs("div",{style:v,children:[e.jsx("p",{style:o,children:"With values"}),e.jsx("div",{style:c,children:e.jsx(n,{values:!0,showInput:!0})})]}),e.jsxs("div",{style:v,children:[e.jsx("p",{style:o,children:"Without values"}),e.jsx("div",{style:c,children:e.jsx(n,{values:!1,showInput:!0})})]})]})},b={render:()=>e.jsxs("div",{style:h,children:[e.jsxs("div",{style:v,children:[e.jsx("p",{style:o,children:"With inputs"}),e.jsx("div",{style:c,children:e.jsx(n,{values:!0,showInput:!0})})]}),e.jsxs("div",{style:v,children:[e.jsx("p",{style:o,children:"Without inputs"}),e.jsx("div",{style:c,children:e.jsx(n,{values:!0,showInput:!1})})]})]})},j={render:()=>e.jsxs("div",{style:h,children:[e.jsxs("div",{style:w,children:[e.jsx("p",{style:o,children:"Default"}),e.jsx("div",{style:c,children:e.jsx(n,{values:!1,showInput:!1,value:7})})]}),e.jsxs("div",{style:w,children:[e.jsx("p",{style:o,children:"Disabled"}),e.jsx("div",{style:c,children:e.jsx(n,{values:!1,showInput:!1,value:7,disabled:!0})})]})]})},le={type:{table:{disable:!0}},values:{table:{disable:!0}},showInput:{table:{disable:!0}},disabled:{table:{disable:!0}},value:{table:{disable:!0}},from:{table:{disable:!0}},to:{table:{disable:!0}},state:{name:"Handle state",control:"select",options:K},tooltipValue:{control:{type:"number",min:0,max:10,step:1}}};function te(s,a){return s==="hover"||s==="click-on"?a:void 0}const g={component:m,argTypes:le,args:{state:"hover",tooltipValue:10},parameters:{docs:{description:{story:"Figma `772:16851` — handle default, hover (with tooltip), click-on (with tooltip), and disabled."}}},render:s=>e.jsx("div",{style:h,children:K.map(a=>e.jsxs("div",{style:w,children:[e.jsx("p",{style:o,children:ae[a]}),e.jsx("div",{className:a==="hover"||a==="click-on"?"spark-slider-handle-matrix-cell-has-tooltip":"spark-slider-handle-matrix-cell",children:e.jsx(m,{state:a,tooltipValue:te(a,s.tooltipValue)})})]},a))})},k={args:{type:"range",values:!0,showInput:!0,from:0,to:10}};var N,V,L;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:"{}",...(L=(V=x.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var R,W,q;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Figma documentation — **basic** (single value) and **range** (from/to boundaries).'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {TYPES.map(type => <div key={type} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{type}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <Slider type={type} values showInput />
          </div>
        </div>)}
    </div>
}`,...(q=(W=f.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var E,z,A;S.parameters={...S.parameters,docs:{...(E=S.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>With values</p>
        <div style={storyMatrixFieldWrapStyle}>
          <Slider values showInput />
        </div>
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>Without values</p>
        <div style={storyMatrixFieldWrapStyle}>
          <Slider values={false} showInput />
        </div>
      </div>
    </div>
}`,...(A=(z=S.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var D,F,_;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>With inputs</p>
        <div style={storyMatrixFieldWrapStyle}>
          <Slider values showInput />
        </div>
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>Without inputs</p>
        <div style={storyMatrixFieldWrapStyle}>
          <Slider values showInput={false} />
        </div>
      </div>
    </div>
}`,...(_=(F=b.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var H,B,P;j.parameters={...j.parameters,docs:{...(H=j.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>Default</p>
        <div style={storyMatrixFieldWrapStyle}>
          <Slider values={false} showInput={false} value={7} />
        </div>
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>Disabled</p>
        <div style={storyMatrixFieldWrapStyle}>
          <Slider values={false} showInput={false} value={7} disabled />
        </div>
      </div>
    </div>
}`,...(P=(B=j.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var C,$,Y;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  component: SliderHandle,
  argTypes: handleStateArgTypes,
  args: {
    state: 'hover',
    tooltipValue: 10
  },
  parameters: {
    docs: {
      description: {
        story: 'Figma \`772:16851\` — handle default, hover (with tooltip), click-on (with tooltip), and disabled.'
      }
    }
  },
  render: args => <div style={storyMatrixSectionStyle}>
      {HANDLE_STATES.map(state => <div key={state} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{HANDLE_STATE_LABELS[state]}</p>
          <div className={state === 'hover' || state === 'click-on' ? 'spark-slider-handle-matrix-cell-has-tooltip' : 'spark-slider-handle-matrix-cell'}>
            <SliderHandle state={state} tooltipValue={handleTooltipValue(state, args.tooltipValue)} />
          </div>
        </div>)}
    </div>
}`,...(Y=($=g.parameters)==null?void 0:$.docs)==null?void 0:Y.source}}};var O,U,G;k.parameters={...k.parameters,docs:{...(O=k.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    type: 'range',
    values: true,
    showInput: true,
    from: 0,
    to: 10
  }
}`,...(G=(U=k.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};const pe=["Default","TypeMatrix","ValuesMatrix","InputMatrix","StateMatrix","HandleStateMatrix","Range"];export{x as Default,g as HandleStateMatrix,b as InputMatrix,k as Range,j as StateMatrix,f as TypeMatrix,S as ValuesMatrix,pe as __namedExportsOrder,ue as default};
