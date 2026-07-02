import{j as l}from"./jsx-runtime-BYYWji4R.js";import{r as Y}from"./index-ClcD9ViR.js";import{s as Z,f as B,b as G}from"./storyHelpers-D7QoSJ90.js";import{D as H}from"./Dropdown-QqzKQD6W.js";import{S as J}from"./Search-BqI_KQCo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./DropdownFooter-BsuM-IbT.js";import"./SparkIcon-B877p_59.js";import"./sparkAssetUrl-FWf-EcJv.js";import"./Checkbox-BvtwKe_o.js";import"./DropdownCheckIcon-DuodM3sj.js";/* empty css                 */import"./Button-CdN-AKPT.js";import"./TooltipTrigger-CeqIspS_.js";import"./Tooltip-rWdCQlMf.js";import"./ScrollBar-Cp2nGFrO.js";/* empty css              */import"./TagGeneral-C8L_l4ta.js";const K=Array.from({length:4},()=>({label:"Dropdown item text"}));function t({open:e=!1,size:a="medium",type:d="default",placeholder:F="Search",value:c,fill:N,visualState:P,tags:f=[],overflowCount:O=0,showFooter:_=!1,disabled:m=!1,items:$=K,className:L=""}){const v=d==="multi-select",R=v?f.length>0:c!==void 0&&c.length>0,y=N??(R?"filled":"empty"),o=e&&y==="filled"&&!m,U=m?"disabled":o?"click-on":P??"default",W=["spark-auto-complete",`spark-auto-complete-${a}`,o?"spark-auto-complete-open":"spark-auto-complete-closed",L].filter(Boolean).join(" ");return l.jsxs("div",{className:W,children:[l.jsx(J,{size:a,placeholder:F,value:c,multiSelect:v,tags:f,overflowCount:O,disabled:m,fill:y,visualState:U,showFocus:o}),o?l.jsx("div",{className:"spark-auto-complete-panel",children:l.jsx(H,{type:"regular",showFooter:_,items:$})}):null]})}t.__docgenInfo={description:"",methods:[],displayName:"AutoComplete",props:{open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'default' | 'multi-select'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'multi-select'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},fill:{required:!1,tsType:{name:"union",raw:"'empty' | 'filled'",elements:[{name:"literal",value:"'empty'"},{name:"literal",value:"'filled'"}]},description:""},visualState:{required:!1,tsType:{name:"union",raw:"'default' | 'hover' | 'click-on' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'click-on'"},{name:"literal",value:"'disabled'"}]},description:""},tags:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},overflowCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},showFooter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},items:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label?: string;
  state?: DropdownItemState;
  showPrefixIcon?: boolean;
  showInfoIcon?: boolean;
  checked?: boolean;
  /**
   * Storybook-only visual state override for static matrices.
   */
  visualState?: DropdownItemState;
  type?: 'regular' | 'checkbox';
  className?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"state",value:{name:"union",raw:"'default' | 'hover' | 'selected' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'selected'"},{name:"literal",value:"'disabled'"}],required:!1}},{key:"showPrefixIcon",value:{name:"boolean",required:!1}},{key:"showInfoIcon",value:{name:"boolean",required:!1}},{key:"checked",value:{name:"boolean",required:!1}},{key:"visualState",value:{name:"union",raw:"'default' | 'hover' | 'selected' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'selected'"},{name:"literal",value:"'disabled'"}],required:!1},description:"Storybook-only visual state override for static matrices."},{key:"type",value:{name:"union",raw:"'regular' | 'checkbox'",elements:[{name:"literal",value:"'regular'"},{name:"literal",value:"'checkbox'"}],required:!1}},{key:"className",value:{name:"string",required:!1}}]}}],raw:"DropdownItemProps[]"},description:"",defaultValue:{value:`Array.from({ length: 4 }, () => ({
  label: 'Dropdown item text',
}))`,computed:!0}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const Q=Array.from({length:4},()=>({label:"Dropdown item text"})),Se={title:"Components/Auto-complete",component:t,tags:["autodocs"],argTypes:{open:{control:"boolean"},size:{control:"select",options:["small","medium"]},type:{control:"select",options:["default","multi-select"]},showFooter:{control:"boolean"},fill:{control:"select",options:["empty","filled"]},visualState:{control:"select",options:["default","hover","click-on","disabled"]}},args:{open:!0,size:"medium",type:"default",value:"Search",fill:"filled",showFooter:!1,items:Q},parameters:{docs:{description:{component:"Spark Auto-complete — Search input with Dropdown suggestions. Figma `820:102093`. The dropdown panel appears only when the search field is **filled** and `open` is true."}}}},X=["small","medium"],ee=["default","multi-select"],r={},s={args:{open:!1,fill:"filled",value:"Search"}},n={args:{open:!0,fill:"empty",value:""}},i={render:()=>{const[e,a]=Y.useState(!1);return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",width:256},children:[l.jsxs("button",{type:"button",onClick:()=>a(d=>!d),children:["Toggle panel (",e?"open":"closed",")"]}),l.jsx(t,{open:e,value:"Search",fill:"filled"})]})}},u={args:{open:!0,type:"multi-select",fill:"filled",tags:["Tag","Tag","Tag"],overflowCount:2}},p={parameters:{docs:{description:{story:"Figma `820:102093` — open × size × type. Dropdown shows only with **filled** search input."}}},render:()=>l.jsx("div",{style:{...Z,gap:"32px"},children:ee.map(e=>X.map(a=>l.jsxs("div",{style:B,children:[l.jsxs("p",{style:G,children:[e," / ",a]}),l.jsxs("div",{style:{display:"flex",gap:"32px",flexWrap:"wrap"},children:[l.jsx(t,{open:!1,size:a,type:e,fill:"filled",value:e==="default"?"Search":void 0,tags:e==="multi-select"?["Tag","Tag"]:[],overflowCount:e==="multi-select"?2:0}),l.jsx(t,{open:!0,size:a,type:e,fill:"filled",value:e==="default"?"Search":void 0,tags:e==="multi-select"?["Tag","Tag"]:[],overflowCount:e==="multi-select"?2:0})]})]},`${e}-${a}`)))})};var g,h,S;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(h=r.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var w,x,b;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    open: false,
    fill: 'filled',
    value: 'Search'
  }
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var T,k,q;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    open: true,
    fill: 'empty',
    value: ''
  }
}`,...(q=(k=n.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var C,I,j;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      width: 256
    }}>
        <button type="button" onClick={() => setOpen(value => !value)}>
          Toggle panel ({open ? 'open' : 'closed'})
        </button>
        <AutoComplete open={open} value="Search" fill="filled" />
      </div>;
  }
}`,...(j=(I=i.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var D,A,E;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    open: true,
    type: 'multi-select',
    fill: 'filled',
    tags: ['Tag', 'Tag', 'Tag'],
    overflowCount: 2
  }
}`,...(E=(A=u.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var V,M,z;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Figma \`820:102093\` — open × size × type. Dropdown shows only with **filled** search input.'
      }
    }
  },
  render: () => <div style={{
    ...storyMatrixSectionStyle,
    gap: '32px'
  }}>
      {TYPES.map(type => SIZES.map(size => <div key={\`\${type}-\${size}\`} style={storyMatrixItemRowStartStyle}>
            <p style={sizeLabelStyle}>
              {type} / {size}
            </p>
            <div style={{
        display: 'flex',
        gap: '32px',
        flexWrap: 'wrap'
      }}>
              <AutoComplete open={false} size={size} type={type} fill="filled" value={type === 'default' ? 'Search' : undefined} tags={type === 'multi-select' ? ['Tag', 'Tag'] : []} overflowCount={type === 'multi-select' ? 2 : 0} />
              <AutoComplete open size={size} type={type} fill="filled" value={type === 'default' ? 'Search' : undefined} tags={type === 'multi-select' ? ['Tag', 'Tag'] : []} overflowCount={type === 'multi-select' ? 2 : 0} />
            </div>
          </div>))}
    </div>
}`,...(z=(M=p.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};const we=["Default","Closed","EmptyNoPanel","Interactive","MultiSelectOpen","VariantMatrix"];export{s as Closed,r as Default,n as EmptyNoPanel,i as Interactive,u as MultiSelectOpen,p as VariantMatrix,we as __namedExportsOrder,Se as default};
