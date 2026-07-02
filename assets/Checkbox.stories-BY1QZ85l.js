import{j as s}from"./jsx-runtime-BYYWji4R.js";import{s as N,a as U,b as D}from"./storyHelpers-D7QoSJ90.js";import{C as t}from"./Checkbox-BvtwKe_o.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const _={title:"Components/Checkbox",component:t,tags:["autodocs"],argTypes:{status:{control:"select",options:["inactive","active","indeterminate"]},visualState:{control:"select",options:["default","hover","pressed"]},disabled:{control:"boolean"}},args:{label:"Checkbox",status:"active",disabled:!1},parameters:{docs:{description:{component:"Spark Checkbox — supports Inactive, Active, and Indeterminate statuses across Default, Hover, Pressed, and Disabled states. Use for multi-select choices; for single-choice selection use Radio."}}}},d=["active","inactive","indeterminate"],F=["default","hover","pressed"],a={},r={render:()=>s.jsx("div",{className:"story-row",children:d.map(e=>s.jsx(t,{status:e,label:"Checkbox"},e))})},o={parameters:{docs:{description:{story:"State matrix from Figma component: rows are interaction states, columns are checkbox statuses."}}},render:()=>s.jsx("div",{style:N,children:F.map(e=>s.jsxs("div",{style:U,children:[s.jsx("p",{style:D,children:e}),s.jsx("div",{className:"story-row",children:d.map(l=>s.jsx(t,{status:l,visualState:e,label:"Checkbox"},`${e}-${l}`))})]},e))})},c={render:()=>s.jsx("div",{className:"story-row",children:d.map(e=>s.jsx(t,{status:e,disabled:!0,label:"Checkbox"},e))})},i={parameters:{docs:{description:{story:"Keyboard focus style preview."}}},render:()=>s.jsx(t,{showFocus:!0,status:"active",label:"Checkbox"})},n={parameters:{docs:{description:{story:"Standalone checkbox item variant used in dense matrix layouts."}}},render:()=>s.jsx("div",{className:"story-row",children:d.map(e=>s.jsx(t,{status:e,"aria-label":`Checkbox ${e}`,label:""},e))})};var m,p,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,x,S;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="story-row">
      {STATUSES.map(status => <Checkbox key={status} status={status} label="Checkbox" />)}
    </div>
}`,...(S=(x=r.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var y,h,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'State matrix from Figma component: rows are interaction states, columns are checkbox statuses.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {VISUAL_STATES.map(visualState => <div key={visualState} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{visualState}</p>
          <div className="story-row">
            {STATUSES.map(status => <Checkbox key={\`\${visualState}-\${status}\`} status={status} visualState={visualState} label="Checkbox" />)}
          </div>
        </div>)}
    </div>
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var k,C,f;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="story-row">
      {STATUSES.map(status => <Checkbox key={status} status={status} disabled label="Checkbox" />)}
    </div>
}`,...(f=(C=c.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var w,T,j;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Keyboard focus style preview.'
      }
    }
  },
  render: () => <Checkbox showFocus status="active" label="Checkbox" />
}`,...(j=(T=i.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var g,A,E;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Standalone checkbox item variant used in dense matrix layouts.'
      }
    }
  },
  render: () => <div className="story-row">
      {STATUSES.map(status => <Checkbox key={status} status={status} aria-label={\`Checkbox \${status}\`} label="" />)}
    </div>
}`,...(E=(A=n.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const z=["Default","Statuses","StateMatrix","Disabled","Focused","WithoutLabel"];export{a as Default,c as Disabled,i as Focused,o as StateMatrix,r as Statuses,n as WithoutLabel,z as __namedExportsOrder,_ as default};
