import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as J}from"./index-ClcD9ViR.js";import{s as j,f as Q,b as w,a as K}from"./storyHelpers-D7QoSJ90.js";import{S as U}from"./SparkIcon-B877p_59.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./sparkAssetUrl-FWf-EcJv.js";function t({label:a,active:s=!1,size:i="medium",position:d="top",disabled:m=!1,visualState:l,showIcon:T=!1,icon:g,onClick:h,className:x=""}){const c=m||l==="disabled",I=["spark-tab",`spark-tab-${i}`,`spark-tab-${d}`,s?"spark-tab-active":"spark-tab-inactive",c?"spark-tab-disabled":"",l?`spark-tab-state-${l}`:"",x].filter(Boolean).join(" ");return e.jsxs("button",{type:"button",role:"tab",className:I,"aria-selected":s,disabled:c,onClick:h,children:[T?g??e.jsx(U,{slug:"assembly",size:"medium"}):null,e.jsx("span",{className:"spark-tab-label",children:a})]})}function o({items:a,activeId:s,onChange:i,size:d="medium",position:m="top",showIcon:l=!1,className:T=""}){var M;const[g,h]=J.useState(((M=a[0])==null?void 0:M.id)??""),x=s??g,c=["spark-tabs",`spark-tabs-${d}`,`spark-tabs-${m}`,T].filter(Boolean).join(" "),I=r=>{s===void 0&&h(r),i==null||i(r)};return e.jsxs("div",{className:c,children:[e.jsx("div",{className:"spark-tabs-list",role:"tablist",children:a.map(r=>e.jsx(t,{label:r.label,active:r.id===x,size:d,position:m,disabled:r.disabled,showIcon:l,onClick:()=>{r.disabled||I(r.id)}},r.id))}),e.jsx("div",{className:"spark-tabs-divider","aria-hidden":"true"})]})}t.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{label:{required:!0,tsType:{name:"string"},description:""},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'large' | 'medium' | 'small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},position:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},visualState:{required:!1,tsType:{name:"union",raw:"'default' | 'hover' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'disabled'"}]},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};o.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItemData[]"},description:""},activeId:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'large' | 'medium' | 'small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},position:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const oe={title:"Components/Tabs",component:o,tags:["autodocs"],argTypes:{items:{description:"Array of tab definitions (`{ id, label, disabled? }`). Add as many items as needed — each object renders one tab.",control:!1},size:{control:"select",options:["large","medium","small"],description:"Tab height and padding — **large** (56px), **medium** (48px), **small** (40px)."},position:{control:"select",options:["top","bottom","left","right"],description:"Active indicator edge — **top** (underline), **bottom** (overline), **left** (right border), **right** (left border)."},showIcon:{control:"boolean"}},args:{size:"medium",position:"top",showIcon:!1},parameters:{docs:{description:{component:"Spark Tabs — supports Top, Bottom, Left, and Right positions across Large, Medium, and Small sizes. Active tabs use a 2px brand indicator and semibold label. Pass any number of entries in the `items` array to add tabs."}}}},n=[{id:"tab-1",label:"Tab title"},{id:"tab-2",label:"Tab title"},{id:"tab-3",label:"Tab title"}],X=["large","medium","small"],Y=["top","bottom","left","right"],p={args:{items:n,activeId:"tab-1"}},u={render:()=>{const[a,s]=J.useState("tab-1");return e.jsx(o,{items:n,activeId:a,onChange:s})}},b={parameters:{docs:{description:{story:"**large** (56px), **medium** (48px), and **small** (40px) tab heights."}}},render:()=>e.jsx("div",{style:j,children:X.map(a=>e.jsxs("div",{style:K,children:[e.jsx("p",{style:w,children:a}),e.jsx(o,{items:n,activeId:"tab-1",size:a})]},a))})},v={parameters:{docs:{description:{story:"**top** (underline), **bottom** (overline), **left** (right border), and **right** (left border) indicator positions."}}},render:()=>e.jsx("div",{style:j,children:Y.map(a=>e.jsxs("div",{style:Q,children:[e.jsx("p",{style:w,children:a}),e.jsx(o,{items:n,activeId:"tab-1",position:a})]},a))})},f={args:{items:n,activeId:"tab-1",showIcon:!0}},y={render:()=>e.jsxs("div",{className:"story-row",children:[e.jsx(t,{label:"Tab title",active:!0}),e.jsx(t,{label:"Tab title"}),e.jsx(t,{label:"Tab title",visualState:"hover"}),e.jsx(t,{label:"Tab title",visualState:"disabled"})]})},ee=[{name:"active",tab:e.jsx(t,{label:"Tab title",active:!0,showIcon:!0})},{name:"default",tab:e.jsx(t,{label:"Tab title",showIcon:!0})},{name:"hover",tab:e.jsx(t,{label:"Tab title",visualState:"hover",showIcon:!0})},{name:"disabled",tab:e.jsx(t,{label:"Tab title",visualState:"disabled",showIcon:!0})}],S={parameters:{docs:{description:{story:"Per-tab state matrix from Figma: Active, Default, Hover, and Disabled."}}},render:()=>e.jsx("div",{style:j,children:ee.map(({name:a,tab:s})=>e.jsxs("div",{style:K,children:[e.jsx("p",{style:w,children:a}),s]},a))})};var k,A,q;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    items: SAMPLE_ITEMS,
    activeId: 'tab-1'
  }
}`,...(q=(A=p.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var E,z,N;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [activeId, setActiveId] = useState('tab-1');
    return <Tabs items={SAMPLE_ITEMS} activeId={activeId} onChange={setActiveId} />;
  }
}`,...(N=(z=u.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var _,P,L;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '**large** (56px), **medium** (48px), and **small** (40px) tab heights.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {SIZES.map(size => <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <Tabs items={SAMPLE_ITEMS} activeId="tab-1" size={size} />
        </div>)}
    </div>
}`,...(L=(P=b.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var V,D,R;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '**top** (underline), **bottom** (overline), **left** (right border), and **right** (left border) indicator positions.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {POSITIONS.map(position => <div key={position} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{position}</p>
          <Tabs items={SAMPLE_ITEMS} activeId="tab-1" position={position} />
        </div>)}
    </div>
}`,...(R=(D=v.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var B,O,$;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items: SAMPLE_ITEMS,
    activeId: 'tab-1',
    showIcon: true
  }
}`,...($=(O=f.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var C,F,H;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="story-row">
      <Tab label="Tab title" active />
      <Tab label="Tab title" />
      <Tab label="Tab title" visualState="hover" />
      <Tab label="Tab title" visualState="disabled" />
    </div>
}`,...(H=(F=y.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var W,Z,G;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Per-tab state matrix from Figma: Active, Default, Hover, and Disabled.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {TAB_STATES.map(({
      name,
      tab
    }) => <div key={name} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{name}</p>
          {tab}
        </div>)}
    </div>
}`,...(G=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:G.source}}};const ne=["Default","Interactive","Sizes","Positions","WithIcons","TabStates","StateMatrix"];export{p as Default,u as Interactive,v as Positions,b as Sizes,S as StateMatrix,y as TabStates,f as WithIcons,ne as __namedExportsOrder,oe as default};
