import{j as e}from"./jsx-runtime-BYYWji4R.js";import{s as f,a as y,b as S}from"./storyHelpers-D7QoSJ90.js";import{r as k}from"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function a({label:s,active:t=!0,size:ee="medium",disabled:u=!1,visualState:b,showFocus:h=!1,className:se="",id:ae,...j}){const[g,z]=k.useState(t);k.useEffect(()=>{z(t)},[t]);const w=ae??`spark-toggle-${Math.random().toString(36).slice(2,9)}`,te=!!(s!=null&&s.length),v=j.onChange,re=["spark-toggle",`spark-toggle-${ee}`,g?"spark-toggle-active":"spark-toggle-inactive",u?"spark-toggle-disabled":"",b?`spark-toggle-state-${b}`:"",h?"spark-toggle-show-focus":"",se].filter(Boolean).join(" "),ie=T=>{u||z(T.target.checked),v==null||v(T)};return e.jsxs("label",{className:re,htmlFor:w,children:[e.jsx("input",{id:w,className:"spark-toggle-input",type:"checkbox",role:"switch",checked:g,disabled:u,"aria-checked":g,onChange:ie,...j}),e.jsx("span",{className:"spark-toggle-track","aria-hidden":"true",children:e.jsx("span",{className:"spark-toggle-handle"})}),te?e.jsx("span",{className:"spark-toggle-label",children:s}):null,h?e.jsx("span",{className:"spark-toggle-focus","aria-hidden":"true"}):null]})}a.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{label:{required:!1,tsType:{name:"string"},description:""},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},visualState:{required:!1,tsType:{name:"union",raw:"'default' | 'pressed'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'pressed'"}]},description:`Storybook-only visual state override to display pressed static examples.
Keep undefined in real app usage.`},showFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const me={title:"Components/Toggle",component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:["medium","small"]},visualState:{control:"select",options:["default","pressed"]},active:{control:"boolean"},disabled:{control:"boolean"}},args:{active:!0,size:"medium",disabled:!1},parameters:{docs:{description:{component:"Spark Toggle (Switch) — instant on/off control with Medium and Small sizes. Supports Default, Pressed, and Disabled states. Use for settings that apply immediately."}}}},x=["medium","small"],oe=["default","pressed"],r={},i={render:()=>e.jsx("div",{className:"story-row",children:x.map(s=>e.jsx(a,{size:s,active:!0},s))})},o={render:()=>e.jsxs("div",{className:"story-row",children:[e.jsx(a,{active:!0}),e.jsx(a,{active:!1})]})},l={parameters:{docs:{description:{story:"Medium and Small sizes in on and off states."}}},render:()=>e.jsx("div",{style:f,children:x.map(s=>e.jsxs("div",{style:y,children:[e.jsx("p",{style:S,children:s}),e.jsxs("div",{className:"story-row",children:[e.jsx(a,{size:s,active:!0}),e.jsx(a,{size:s,active:!1})]})]},s))})},d={parameters:{docs:{description:{story:"Medium size state matrix from Figma: rows are interaction states, columns are active on/off."}}},render:()=>e.jsx("div",{style:f,children:["default","pressed","disabled"].map(s=>e.jsxs("div",{style:y,children:[e.jsx("p",{style:S,children:s==="pressed"?"Click-on":s}),e.jsxs("div",{className:"story-row",children:[e.jsx(a,{size:"medium",active:!0,disabled:s==="disabled",visualState:s==="pressed"?"pressed":"default"}),e.jsx(a,{size:"medium",active:!1,disabled:s==="disabled",visualState:s==="pressed"?"pressed":"default"})]})]},s))})},n={parameters:{docs:{description:{story:"Full matrix across both sizes and pressed/default states."}}},render:()=>e.jsx("div",{style:f,children:x.flatMap(s=>oe.map(t=>e.jsxs("div",{style:y,children:[e.jsx("p",{style:S,children:`${s} / ${t}`}),e.jsxs("div",{className:"story-row",children:[e.jsx(a,{size:s,active:!0,visualState:t}),e.jsx(a,{size:s,active:!1,visualState:t})]})]},`${s}-${t}`)))})},c={render:()=>e.jsxs("div",{className:"story-row",children:[e.jsx(a,{active:!0,disabled:!0}),e.jsx(a,{active:!1,disabled:!0}),e.jsx(a,{size:"small",active:!0,disabled:!0}),e.jsx(a,{size:"small",active:!1,disabled:!0})]})},m={parameters:{docs:{description:{story:"Toggle with an adjacent label — toggle first, label after (per Figma documentation)."}}},args:{label:"Dark mode",active:!0}},p={parameters:{docs:{description:{story:"Keyboard focus style preview."}}},render:()=>e.jsx(a,{showFocus:!0,active:!0})};var M,N,I;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:"{}",...(I=(N=r.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var $,A,E;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="story-row">
      {SIZES.map(size => <Toggle key={size} size={size} active />)}
    </div>
}`,...(E=(A=i.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var F,L,D;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="story-row">
      <Toggle active />
      <Toggle active={false} />
    </div>
}`,...(D=(L=o.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var q,V,C;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Medium and Small sizes in on and off states.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {SIZES.map(size => <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <div className="story-row">
            <Toggle size={size} active />
            <Toggle size={size} active={false} />
          </div>
        </div>)}
    </div>
}`,...(C=(V=l.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var _,R,Z;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Medium size state matrix from Figma: rows are interaction states, columns are active on/off.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {(['default', 'pressed', 'disabled'] as const).map(row => <div key={row} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{row === 'pressed' ? 'Click-on' : row}</p>
          <div className="story-row">
            <Toggle size="medium" active disabled={row === 'disabled'} visualState={row === 'pressed' ? 'pressed' : 'default'} />
            <Toggle size="medium" active={false} disabled={row === 'disabled'} visualState={row === 'pressed' ? 'pressed' : 'default'} />
          </div>
        </div>)}
    </div>
}`,...(Z=(R=d.parameters)==null?void 0:R.docs)==null?void 0:Z.source}}};var K,U,B;n.parameters={...n.parameters,docs:{...(K=n.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Full matrix across both sizes and pressed/default states.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {SIZES.flatMap(size => VISUAL_STATES.map(visualState => <div key={\`\${size}-\${visualState}\`} style={storyMatrixItemRowStyle}>
            <p style={sizeLabelStyle}>{\`\${size} / \${visualState}\`}</p>
            <div className="story-row">
              <Toggle size={size} active visualState={visualState} />
              <Toggle size={size} active={false} visualState={visualState} />
            </div>
          </div>))}
    </div>
}`,...(B=(U=n.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var W,O,G;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="story-row">
      <Toggle active disabled />
      <Toggle active={false} disabled />
      <Toggle size="small" active disabled />
      <Toggle size="small" active={false} disabled />
    </div>
}`,...(G=(O=c.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var H,J,P;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Toggle with an adjacent label — toggle first, label after (per Figma documentation).'
      }
    }
  },
  args: {
    label: 'Dark mode',
    active: true
  }
}`,...(P=(J=m.parameters)==null?void 0:J.docs)==null?void 0:P.source}}};var Q,X,Y;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Keyboard focus style preview.'
      }
    }
  },
  render: () => <Toggle showFocus active />
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const pe=["Default","Sizes","ActiveStates","AllSizes","StateMatrix","SizeStateMatrix","Disabled","WithLabel","Focused"];export{o as ActiveStates,l as AllSizes,r as Default,c as Disabled,p as Focused,n as SizeStateMatrix,i as Sizes,d as StateMatrix,m as WithLabel,pe as __namedExportsOrder,me as default};
