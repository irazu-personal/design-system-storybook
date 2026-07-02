import{j as e}from"./jsx-runtime-BYYWji4R.js";import{b as u,s as J,a as f}from"./storyHelpers-D7QoSJ90.js";import{S as h}from"./SparkIcon-B877p_59.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./sparkAssetUrl-FWf-EcJv.js";function t({text:s="Button",showIconLeft:G=!0,showIconRight:C=!1,showFocus:M=!1,visualState:a,startIcon:V,endIcon:_,className:P="",disabled:U,type:W="button",...O}){const H=U||a==="disabled",$=["spark-floating-button",a&&a!=="default"?`spark-floating-button-state-${a}`:"",M?"spark-floating-button-show-focus":"",P].filter(Boolean).join(" "),p=V??(G?e.jsx(h,{slug:"game",size:"small"}):void 0),m=_??(C?e.jsx(h,{slug:"chevron-down",size:"small"}):void 0);return e.jsx("button",{type:W,className:$,disabled:H,...O,children:e.jsxs("span",{className:"spark-floating-button-content",children:[p?e.jsx("span",{className:"spark-floating-button-start-icon",children:p}):null,e.jsx("span",{className:"spark-floating-button-label",children:s}),m?e.jsx("span",{className:"spark-floating-button-end-icon",children:m}):null]})})}t.__docgenInfo={description:"",methods:[],displayName:"FloatingButton",props:{text:{required:!1,tsType:{name:"string"},description:"Figma `Text#506:865`",defaultValue:{value:"'Button'",computed:!1}},showIconLeft:{required:!1,tsType:{name:"boolean"},description:"Figma `Show Icon Left#513:53`",defaultValue:{value:"true",computed:!1}},showIconRight:{required:!1,tsType:{name:"boolean"},description:"Figma `Show Icon Right#509:0`",defaultValue:{value:"false",computed:!1}},showFocus:{required:!1,tsType:{name:"boolean"},description:"Figma `focus#191:0` — docs-only focus ring preview.",defaultValue:{value:"false",computed:!1}},visualState:{required:!1,tsType:{name:"union",raw:"'default' | 'hover' | 'click-on' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'click-on'"},{name:"literal",value:"'disabled'"}]},description:`Storybook-only visual state override for static matrices.
Leave undefined in product usage so native :hover/:active/:disabled apply.`},startIcon:{required:!1,tsType:{name:"ReactNode"},description:""},endIcon:{required:!1,tsType:{name:"ReactNode"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1},type:{defaultValue:{value:"'button'",computed:!1},required:!1}}};const oe={title:"Components/Floating Button",component:t,tags:["autodocs"],argTypes:{text:{control:"text"},showIconLeft:{control:"boolean"},showIconRight:{control:"boolean"},showFocus:{control:"boolean"},visualState:{control:"select",options:["default","hover","click-on","disabled"]},disabled:{control:"boolean"}},args:{text:"Button",showIconLeft:!0,showIconRight:!1,showFocus:!1,disabled:!1},parameters:{docs:{description:{component:"Spark Floating Button (`6958:67191`) — elevated pill control for contextual actions pinned above page content (for example, “Test in Playground”). Uses drawer icon-button shadow, detail typography, optional left game icon and right chevron. Use sentence-case labels only."}}}},K=["default","hover","click-on","disabled"],Q={display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"1rem"},o={},n={parameters:{docs:{description:{story:"Figma interaction matrix — Default, Hover, Pressed (Click-on), and Disabled. Static `visualState` mirrors documentation previews."}}},render:()=>e.jsx("div",{className:"story-row",style:{alignItems:"flex-start",gap:"2rem"},children:K.map(s=>e.jsxs("div",{style:Q,children:[e.jsx("p",{style:u,children:s==="click-on"?"Pressed":s}),e.jsx(t,{visualState:s,disabled:s==="disabled"})]},s))})},r={parameters:{docs:{description:{story:"Icon label — buttons may contain an icon on the left or right side to add context to the action."}}},render:()=>e.jsx(t,{text:"Add item",showIconLeft:!0,showIconRight:!1})},i={render:()=>e.jsx(t,{text:"Button",showIconLeft:!0,showIconRight:!0})},l={parameters:{docs:{description:{story:"Show a highly visible, high-contrast focus ring around the button when a user navigates to it via keyboard."}}},render:()=>e.jsx(t,{showFocus:!0})},c={parameters:{docs:{description:{story:"Use sentence-case capitalization. Do not use title case or all caps."}}},render:()=>e.jsxs("div",{style:J,children:[e.jsxs("div",{style:f,children:[e.jsx("p",{style:u,children:"Do"}),e.jsx(t,{text:"Get started"})]}),e.jsxs("div",{style:f,children:[e.jsx("p",{style:u,children:"Don't"}),e.jsxs("div",{className:"story-row",children:[e.jsx(t,{text:"Get Started",visualState:"default"}),e.jsx(t,{text:"GET STARTED",visualState:"default"})]})]})]})},d={render:()=>e.jsx(t,{disabled:!0})};var g,y,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var b,x,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Figma interaction matrix — Default, Hover, Pressed (Click-on), and Disabled. Static \`visualState\` mirrors documentation previews.'
      }
    }
  },
  render: () => <div className="story-row" style={{
    alignItems: 'flex-start',
    gap: '2rem'
  }}>
      {INTERACTION_STATES.map(state => <div key={state} style={stateColumnStyle}>
          <p style={sizeLabelStyle}>{state === 'click-on' ? 'Pressed' : state}</p>
          <FloatingButton visualState={state} disabled={state === 'disabled'} />
        </div>)}
    </div>
}`,...(S=(x=n.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var w,I,j;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Icon label — buttons may contain an icon on the left or right side to add context to the action.'
      }
    }
  },
  render: () => <FloatingButton text="Add item" showIconLeft showIconRight={false} />
}`,...(j=(I=r.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var F,T,k;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <FloatingButton text="Button" showIconLeft showIconRight />
}`,...(k=(T=i.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var D,B,R;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Show a highly visible, high-contrast focus ring around the button when a user navigates to it via keyboard.'
      }
    }
  },
  render: () => <FloatingButton showFocus />
}`,...(R=(B=l.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var N,L,E;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Use sentence-case capitalization. Do not use title case or all caps.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>Do</p>
        <FloatingButton text="Get started" />
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>Don&apos;t</p>
        <div className="story-row">
          <FloatingButton text="Get Started" visualState="default" />
          <FloatingButton text="GET STARTED" visualState="default" />
        </div>
      </div>
    </div>
}`,...(E=(L=c.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var q,z,A;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <FloatingButton disabled />
}`,...(A=(z=d.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const ne=["Default","InteractionStates","WithIcon","WithEndIcon","Focus","LabelGuidance","Disabled"];export{o as Default,d as Disabled,l as Focus,n as InteractionStates,c as LabelGuidance,i as WithEndIcon,r as WithIcon,ne as __namedExportsOrder,oe as default};
