import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as k}from"./index-ClcD9ViR.js";import{S as T}from"./SparkIcon-B877p_59.js";import{L as me}from"./Label-TmJXsGIj.js";/* empty css              */import{S as m,s as f,f as Z,b as h,g as y,a as fe}from"./storyHelpers-D7QoSJ90.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./sparkAssetUrl-FWf-EcJv.js";function s({label:t="Label",helperText:W="Helper text",placeholder:B="Input",size:K="medium",fill:G,danger:u=!1,disabled:p=!1,showLabel:J=!0,showHelperText:Q=!1,showAsterisk:U=!1,showHelpIcon:X=!1,showPrefixIcon:Y=!1,showInfoIcon:ee=!1,showCharCount:te=!1,charCount:ae=0,maxChars:se=40,visualState:le,showFocus:re=!1,className:oe="",id:ne,value:a,defaultValue:ie,onChange:c,...de}){const[x,v]=k.useState(a??ie??"");k.useEffect(()=>{a!==void 0&&v(a)},[a]);const w=ne??`spark-input-${Math.random().toString(36).slice(2,9)}`,I=p?"disabled":le??(u?"danger":"default"),S=re||I==="click-on",b=a!==void 0?String(a):x,ue=G??(b.length>0?"filled":"empty"),pe=ae??b.length,ce=["spark-input",`spark-input-${K}`,`spark-input-state-${I}`,`spark-input-fill-${ue}`,u?"spark-input-danger":"",p?"spark-input-disabled":"",S?"spark-input-show-focus":"",oe].filter(Boolean).join(" ");return e.jsxs("div",{className:ce,children:[J?e.jsx(me,{label:t,htmlFor:w,showAsterisk:U,showIcon:X}):null,e.jsxs("div",{className:"spark-input-field-wrap",children:[e.jsxs("div",{className:"spark-input-field spark-input-anatomy",children:[Y?e.jsx(T,{slug:"user",size:"small",className:"spark-input-prefix-icon"}):null,e.jsx("input",{id:w,className:"spark-input-control",placeholder:B,disabled:p,value:a!==void 0?a:x,onChange:g=>{a===void 0&&v(g.target.value),c==null||c(g)},"aria-invalid":u||void 0,...de}),te?e.jsxs("span",{className:"spark-input-char-count","aria-hidden":"true",children:[pe," / ",se]}):null,ee?e.jsx(T,{slug:"circle-info",size:"small",className:"spark-input-info-icon"}):null]}),S?e.jsx("span",{className:"spark-input-focus","aria-hidden":"true"}):null]}),Q?e.jsx("span",{className:"spark-input-helper",children:W}):null]})}s.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Label'",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Helper text'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Input'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},fill:{required:!1,tsType:{name:"union",raw:"'empty' | 'filled'",elements:[{name:"literal",value:"'empty'"},{name:"literal",value:"'filled'"}]},description:""},danger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showHelperText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showAsterisk:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showHelpIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showPrefixIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showInfoIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showCharCount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},charCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},maxChars:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"40",computed:!1}},visualState:{required:!1,tsType:{name:"union",raw:"'default' | 'hover' | 'danger' | 'disabled' | 'click-on'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'disabled'"},{name:"literal",value:"'click-on'"}]},description:`Storybook-only visual state override for static matrices.
Keep undefined in real app usage.`},showFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const Ce={title:"Components/Input/Input",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"]},fill:{control:"select",options:["empty","filled"],description:"Optional override. When unset, empty/filled follows whether the field has content."},visualState:{control:"select",options:["default","hover","danger","disabled","click-on"]},showHelperText:{control:"boolean",description:"Optional helper text below the field."},showAsterisk:{control:"boolean",description:"Optional required-field asterisk on the label (brand blue)."},showHelpIcon:{control:"boolean",description:"Optional help icon on the label."},showPrefixIcon:{control:"boolean",description:"Optional prefix icon inside the field."},showInfoIcon:{control:"boolean",description:"Optional info icon inside the field."},showCharCount:{control:"boolean",description:"Optional max-character counter inside the field."}},args:{label:"Label",helperText:"Helper text",placeholder:"Input",size:"medium",showLabel:!0,showHelperText:!1,showAsterisk:!1},parameters:{docs:{description:{component:"Spark Input — standard text field with optional label, helper text, and anatomy slots. **Empty** and **filled** states follow field content automatically unless `fill` is set explicitly. Helper text, asterisk, prefix icon, info icon, and max-character counter are optional boolean props (off by default). Sizes: **small** (28px), **medium** (36px), **large** (40px)."}}}},he=["small","medium","large"],ye=["default","hover","click-on","danger","disabled"],xe=["empty","filled"],l={},r={args:{showAsterisk:!0,showHelperText:!0,showPrefixIcon:!0,showInfoIcon:!0,showCharCount:!0,maxChars:40},parameters:{docs:{description:{story:"Full field anatomy with all optional slots enabled. Toggle `showHelperText`, `showPrefixIcon`, `showInfoIcon`, and `showCharCount` off when a simpler field is needed."}}}},o={args:{showAsterisk:!0,showHelperText:!0,showPrefixIcon:!0,showInfoIcon:!0,showCharCount:!0,maxChars:40,defaultValue:"Input value"},parameters:{docs:{description:{story:"Filled state with all optional anatomy enabled. Content tone updates automatically when the user types; character count tracks input length."}}}},n={parameters:{docs:{description:{story:`${m.small}, ${m.medium}, and ${m.large} field heights.`}}},render:()=>e.jsx("div",{style:f,children:he.map(t=>e.jsxs("div",{style:fe,children:[e.jsx("p",{style:h,children:t}),e.jsx("div",{style:y,children:e.jsx(s,{size:t})})]},t))})},i={parameters:{docs:{description:{story:"Explicit empty vs filled overrides. In product usage, leave `fill` unset so the state follows whether the user has entered content."}}},render:()=>e.jsx("div",{style:f,children:xe.map(t=>e.jsxs("div",{style:Z,children:[e.jsx("p",{style:h,children:t}),e.jsx("div",{style:y,children:e.jsx(s,{fill:t,value:t==="filled"?"Input value":"",showPrefixIcon:!0,showInfoIcon:!0,showCharCount:!0,charCount:t==="filled"?12:0})})]},t))})},d={render:()=>e.jsx("div",{style:f,children:ye.map(t=>e.jsxs("div",{style:Z,children:[e.jsx("p",{style:h,children:t==="click-on"?"click-on":t}),e.jsx("div",{style:y,children:e.jsx(s,{visualState:t,danger:t==="danger",disabled:t==="disabled",showFocus:t==="click-on",defaultValue:"Input value"})})]},t))})};var C,j,V;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(V=(j=l.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var q,F,M;r.parameters={...r.parameters,docs:{...(q=r.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    showAsterisk: true,
    showHelperText: true,
    showPrefixIcon: true,
    showInfoIcon: true,
    showCharCount: true,
    maxChars: 40
  },
  parameters: {
    docs: {
      description: {
        story: 'Full field anatomy with all optional slots enabled. Toggle \`showHelperText\`, \`showPrefixIcon\`, \`showInfoIcon\`, and \`showCharCount\` off when a simpler field is needed.'
      }
    }
  }
}`,...(M=(F=r.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var z,E,H;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    showAsterisk: true,
    showHelperText: true,
    showPrefixIcon: true,
    showInfoIcon: true,
    showCharCount: true,
    maxChars: 40,
    defaultValue: 'Input value'
  },
  parameters: {
    docs: {
      description: {
        story: 'Filled state with all optional anatomy enabled. Content tone updates automatically when the user types; character count tracks input length.'
      }
    }
  }
}`,...(H=(E=o.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var L,A,O;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`\${SIZE_DOCS.small}, \${SIZE_DOCS.medium}, and \${SIZE_DOCS.large} field heights.\`
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {SIZES.map(size => <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <Input size={size} />
          </div>
        </div>)}
    </div>
}`,...(O=(A=n.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var N,P,$;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Explicit empty vs filled overrides. In product usage, leave \`fill\` unset so the state follows whether the user has entered content.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {FILLS.map(fill => <div key={fill} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{fill}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <Input fill={fill} value={fill === 'filled' ? 'Input value' : ''} showPrefixIcon showInfoIcon showCharCount charCount={fill === 'filled' ? 12 : 0} />
          </div>
        </div>)}
    </div>
}`,...($=(P=i.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var _,D,R;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {STATES.map(visualState => <div key={visualState} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{visualState === 'click-on' ? 'click-on' : visualState}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <Input visualState={visualState} danger={visualState === 'danger'} disabled={visualState === 'disabled'} showFocus={visualState === 'click-on'} defaultValue="Input value" />
          </div>
        </div>)}
    </div>
}`,...(R=(D=d.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const je=["Default","Anatomy","FilledAnatomy","Sizes","FillTypes","StateMatrix"];export{r as Anatomy,l as Default,i as FillTypes,o as FilledAnatomy,n as Sizes,d as StateMatrix,je as __namedExportsOrder,Ce as default};
