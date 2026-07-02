import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as v}from"./index-ClcD9ViR.js";import{s as Q,a as X,b as Y}from"./storyHelpers-D7QoSJ90.js";import"./_commonjsHelpers-Cpj98o6Y.js";function s({label:a="Radio button",status:t="active",disabled:o=!1,visualState:y,showFocus:S=!1,className:G="",id:K,value:z,...b}){const[f,h]=v.useState(t);v.useEffect(()=>{h(t)},[t]);const x=K??`spark-radio-${Math.random().toString(36).slice(2,9)}`,g=f==="active",W=a.length>0,m=b.onChange,H=["spark-radio",`spark-radio-${f}`,o?"spark-radio-disabled":"",y?`spark-radio-state-${y}`:"",S?"spark-radio-show-focus":"",G].filter(Boolean).join(" "),J=P=>{o||h("active"),m==null||m(P)};return e.jsxs("label",{className:H,htmlFor:x,children:[e.jsx("input",{id:x,className:"spark-radio-input",type:"radio",checked:g,disabled:o,value:z,onChange:J,...b}),e.jsx("span",{className:"spark-radio-control","aria-hidden":"true",children:g?e.jsx("span",{className:"spark-radio-dot"}):e.jsx("svg",{className:"spark-radio-plate",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:e.jsx("circle",{cx:"7",cy:"7",r:"6.5",className:"spark-radio-plate-shape"})})}),W?e.jsx("span",{className:"spark-radio-label",children:a}):null,S?e.jsx("span",{className:"spark-radio-focus","aria-hidden":"true"}):null]})}s.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Radio button'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'inactive' | 'active'",elements:[{name:"literal",value:"'inactive'"},{name:"literal",value:"'active'"}]},description:"",defaultValue:{value:"'active'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},visualState:{required:!1,tsType:{name:"union",raw:"'default' | 'hover' | 'pressed'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'pressed'"}]},description:`Storybook-only visual state override to display hover/pressed static examples.
Keep undefined in real app usage.`},showFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const oe={title:"Components/Radio",component:s,tags:["autodocs"],argTypes:{status:{control:"select",options:["inactive","active"]},visualState:{control:"select",options:["default","hover","pressed"]},disabled:{control:"boolean"}},args:{label:"Radio button",status:"active",disabled:!1},parameters:{docs:{description:{component:"Spark Radio Button — supports Inactive and Active statuses across Default, Hover, Pressed, and Disabled states. Use for single-choice selection from a list."}}}},u=["inactive","active"],Z=["default","hover","pressed"],r={},i={render:()=>e.jsx("div",{className:"story-row",children:u.map(a=>e.jsx(s,{status:a,label:"Radio button"},a))})},n={parameters:{docs:{description:{story:"State matrix from Figma component: rows are interaction states, columns are checked statuses. Active has no hover/pressed variants in Figma."}}},render:()=>e.jsx("div",{style:Q,children:Z.map(a=>e.jsxs("div",{style:X,children:[e.jsx("p",{style:Y,children:a}),e.jsx("div",{className:"story-row",children:u.map(t=>e.jsx(s,{status:t,visualState:t==="active"&&a!=="default"?"default":a,label:"Radio button"},`${a}-${t}`))})]},a))})},d={render:()=>e.jsx("div",{className:"story-row",children:u.map(a=>e.jsx(s,{status:a,disabled:!0,label:"Radio button"},a))})},l={parameters:{docs:{description:{story:"Keyboard focus style preview."}}},render:()=>e.jsx(s,{showFocus:!0,status:"active",label:"Radio button"})},c={parameters:{docs:{description:{story:"Standalone radio item variant used in dense matrix layouts."}}},render:()=>e.jsx("div",{className:"story-row",children:u.map(a=>e.jsx(s,{status:a,"aria-label":`Radio button ${a}`,label:""},a))})},p={parameters:{docs:{description:{story:"Interactive radio group — only one option can be selected at a time."}}},render:function(){const[t,o]=v.useState("option-a");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[e.jsx(s,{name:"spark-radio-group-demo",value:"option-a",status:t==="option-a"?"active":"inactive",label:"Option A",onChange:()=>o("option-a")}),e.jsx(s,{name:"spark-radio-group-demo",value:"option-b",status:t==="option-b"?"active":"inactive",label:"Option B",onChange:()=>o("option-b")}),e.jsx(s,{name:"spark-radio-group-demo",value:"option-c",status:t==="option-c"?"active":"inactive",label:"Option C",onChange:()=>o("option-c")})]})}};var R,k,j;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:"{}",...(j=(k=r.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var w,T,N;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="story-row">
      {STATUSES.map(status => <Radio key={status} status={status} label="Radio button" />)}
    </div>
}`,...(N=(T=i.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var A,C,E;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'State matrix from Figma component: rows are interaction states, columns are checked statuses. Active has no hover/pressed variants in Figma.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {VISUAL_STATES.map(visualState => <div key={visualState} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{visualState}</p>
          <div className="story-row">
            {STATUSES.map(status => <Radio key={\`\${visualState}-\${status}\`} status={status} visualState={status === 'active' && visualState !== 'default' ? 'default' : visualState} label="Radio button" />)}
          </div>
        </div>)}
    </div>
}`,...(E=(C=n.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var I,$,D;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="story-row">
      {STATUSES.map(status => <Radio key={status} status={status} disabled label="Radio button" />)}
    </div>
}`,...(D=($=d.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var F,U,q;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Keyboard focus style preview.'
      }
    }
  },
  render: () => <Radio showFocus status="active" label="Radio button" />
}`,...(q=(U=l.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var L,M,O;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Standalone radio item variant used in dense matrix layouts.'
      }
    }
  },
  render: () => <div className="story-row">
      {STATUSES.map(status => <Radio key={status} status={status} aria-label={\`Radio button \${status}\`} label="" />)}
    </div>
}`,...(O=(M=c.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var V,_,B;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Interactive radio group — only one option can be selected at a time.'
      }
    }
  },
  render: function RadioGroupStory() {
    const [selected, setSelected] = useState('option-a');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem'
    }}>
        <Radio name="spark-radio-group-demo" value="option-a" status={selected === 'option-a' ? 'active' : 'inactive'} label="Option A" onChange={() => setSelected('option-a')} />
        <Radio name="spark-radio-group-demo" value="option-b" status={selected === 'option-b' ? 'active' : 'inactive'} label="Option B" onChange={() => setSelected('option-b')} />
        <Radio name="spark-radio-group-demo" value="option-c" status={selected === 'option-c' ? 'active' : 'inactive'} label="Option C" onChange={() => setSelected('option-c')} />
      </div>;
  }
}`,...(B=(_=p.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};const re=["Default","Statuses","StateMatrix","Disabled","Focused","WithoutLabel","RadioGroup"];export{r as Default,d as Disabled,l as Focused,p as RadioGroup,n as StateMatrix,i as Statuses,c as WithoutLabel,re as __namedExportsOrder,oe as default};
