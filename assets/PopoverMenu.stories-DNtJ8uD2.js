import{j as e}from"./jsx-runtime-BYYWji4R.js";import{s as b,a as k,v as Z,b as Q}from"./storyHelpers-D7QoSJ90.js";import{S as m}from"./SparkIcon-B877p_59.js";import{D as j}from"./DropdownCheckIcon-DuodM3sj.js";import{P as ee}from"./PopoverShell-CPs8Q5bc.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./sparkAssetUrl-FWf-EcJv.js";function I({label:a="Popover item text",title:r="Title",type:t="regular",state:S="default",visualState:h,showPrefixIcon:i=!1,showInfoIcon:s=!1,className:T="",onClick:w}){const o=h??S,l=o==="disabled",n=o==="selected",M=["spark-popover-menu-item",`spark-popover-menu-item-${t}`,o==="hover"?"spark-popover-menu-item-hover":"",o==="selected"?"spark-popover-menu-item-selected":"",l?"spark-popover-menu-item-disabled":"",T].filter(Boolean).join(" ");return t==="two-lines"?e.jsxs("div",{className:M,role:"menuitem","aria-disabled":l||void 0,"aria-selected":n||void 0,onClick:l?void 0:w,children:[e.jsxs("div",{className:"spark-popover-menu-item-two-lines",children:[e.jsxs("div",{className:"spark-popover-menu-item-title-row",children:[i?e.jsx(m,{slug:"user",size:"small",className:"spark-popover-menu-item-prefix"}):null,e.jsx("span",{className:"spark-popover-menu-item-title",children:r})]}),e.jsxs("div",{className:"spark-popover-menu-item-subtitle-row",children:[e.jsx("span",{className:"spark-popover-menu-item-subtitle",children:a}),s?e.jsx(m,{slug:"circle-info",size:"small",className:"spark-popover-menu-item-info"}):null]})]}),n?e.jsx(j,{className:"spark-popover-menu-item-check"}):null]}):e.jsxs("div",{className:M,role:"menuitem","aria-disabled":l||void 0,"aria-selected":n||void 0,onClick:l?void 0:w,children:[e.jsxs("div",{className:"spark-popover-menu-item-content",children:[i?e.jsx(m,{slug:"user",size:"small",className:"spark-popover-menu-item-prefix"}):null,e.jsx("span",{className:"spark-popover-menu-item-label",children:a})]}),n&&t==="regular"?e.jsx(j,{className:"spark-popover-menu-item-check"}):null,t==="cascading"?e.jsx(m,{slug:"chevron-right",size:"small",className:"spark-popover-menu-item-chevron"}):null]})}I.__docgenInfo={description:"",methods:[],displayName:"PopoverMenuItem",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Popover item text'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Title'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'regular' | 'cascading' | 'two-lines'",elements:[{name:"literal",value:"'regular'"},{name:"literal",value:"'cascading'"},{name:"literal",value:"'two-lines'"}]},description:"",defaultValue:{value:"'regular'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'hover' | 'selected' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'selected'"},{name:"literal",value:"'disabled'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},visualState:{required:!1,tsType:{name:"union",raw:"'default' | 'hover' | 'selected' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'selected'"},{name:"literal",value:"'disabled'"}]},description:"Storybook-only visual state override for static matrices."},showPrefixIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showInfoIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ae=Array.from({length:4},()=>({label:"Popover item text"})),te=Array.from({length:4},()=>({title:"Title",label:"Popover item text"}));function re(a){return a==="two-lines"?te:ae}function x({tip:a=!0,tipDirection:r="right",type:t="regular",items:S,className:h=""}){const i=S??re(t);return e.jsx(ee,{tip:a,tipDirection:r,className:h,panelClassName:`spark-popover-menu-panel spark-popover-menu-panel-${t}`,children:e.jsx("div",{className:"spark-popover-menu-list",role:"menu",children:i.map((s,T)=>e.jsx(I,{type:t,...s},`${s.label??s.title??"item"}-${T}`))})})}x.__docgenInfo={description:"",methods:[],displayName:"PopoverMenu",props:{tip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},tipDirection:{required:!1,tsType:{name:"union",raw:"'right' | 'left' | 'bottom' | 'top'",elements:[{name:"literal",value:"'right'"},{name:"literal",value:"'left'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'top'"}]},description:"",defaultValue:{value:"'right'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'regular' | 'cascading' | 'two-lines'",elements:[{name:"literal",value:"'regular'"},{name:"literal",value:"'cascading'"},{name:"literal",value:"'two-lines'"}]},description:"",defaultValue:{value:"'regular'",computed:!1}},items:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label?: string;
  title?: string;
  type?: PopoverMenuItemType;
  state?: PopoverMenuItemState;
  /**
   * Storybook-only visual state override for static matrices.
   */
  visualState?: PopoverMenuItemState;
  showPrefixIcon?: boolean;
  showInfoIcon?: boolean;
  className?: string;
  onClick?: () => void;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"title",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:"'regular' | 'cascading' | 'two-lines'",elements:[{name:"literal",value:"'regular'"},{name:"literal",value:"'cascading'"},{name:"literal",value:"'two-lines'"}],required:!1}},{key:"state",value:{name:"union",raw:"'default' | 'hover' | 'selected' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'selected'"},{name:"literal",value:"'disabled'"}],required:!1}},{key:"visualState",value:{name:"union",raw:"'default' | 'hover' | 'selected' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'selected'"},{name:"literal",value:"'disabled'"}],required:!1},description:"Storybook-only visual state override for static matrices."},{key:"showPrefixIcon",value:{name:"boolean",required:!1}},{key:"showInfoIcon",value:{name:"boolean",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"PopoverMenuItemProps[]"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const se=[{label:"Popover item text",visualState:"default"},{label:"Popover item text",visualState:"hover"},{label:"Popover item text",visualState:"selected"},{label:"Popover item text",visualState:"disabled"}],ge={title:"Components/Popover/Menu",component:x,tags:["autodocs"],argTypes:{tipDirection:{control:"select",options:["right","left","bottom","top"]},type:{control:"select",options:["regular","cascading","two-lines"]},tip:{control:"boolean"},items:{control:!1}},args:{tip:!0,tipDirection:"right",type:"regular"},parameters:{layout:"fullscreen",docs:{description:{component:"Context menu popover for secondary actions. Supports regular, cascading, and two-line item types. Figma `656:32182`."}}},decorators:[a=>e.jsx("div",{style:{background:"var(--semantic-surface-canvas)",padding:"1.5rem",minHeight:"100%"},children:e.jsx(a,{})})]},u={},p={args:{type:"cascading"}},c={args:{type:"two-lines"}},d={args:{items:se}},v={args:{tip:!1}},le=["right","left","bottom","top"],y={render:()=>e.jsx("div",{style:b,children:le.map(a=>e.jsxs("div",{style:k,children:[e.jsx("p",{style:Q,children:a}),e.jsx(x,{tipDirection:a})]},a))})},ie=["regular","cascading","two-lines"],f={parameters:{docs:{description:{story:"Figma `656:32182` — regular, cascading, and two-line menu layouts."}}},render:()=>e.jsx("div",{style:b,children:ie.map(a=>e.jsxs("div",{style:k,children:[e.jsx("p",{style:Q,children:a}),e.jsx(x,{type:a})]},a))})},oe=["regular","two-lines","cascading"],ne=["default","hover","selected","disabled"],g={parameters:{docs:{description:{story:"Figma `656:31914` — menu item states across item types."}}},render:()=>e.jsx("div",{style:b,children:ne.map(a=>e.jsxs("div",{style:k,children:[e.jsx("p",{style:Z,children:a}),e.jsx("div",{className:"story-row",children:oe.map(r=>e.jsx(I,{type:r,visualState:a,title:"Title",label:"Popover item text"},r))})]},a))})};var P,N,E;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:"{}",...(E=(N=u.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var q,_,D;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    type: 'cascading'
  }
}`,...(D=(_=p.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var C,A,V;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: 'two-lines'
  }
}`,...(V=(A=c.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var L,R,z;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    items: STATE_MATRIX_ITEMS
  }
}`,...(z=(R=d.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var F,O,U;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    tip: false
  }
}`,...(U=(O=v.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var Y,$,X;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {TIP_DIRECTIONS.map(tipDirection => <div key={tipDirection} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{tipDirection}</p>
          <PopoverMenu tipDirection={tipDirection} />
        </div>)}
    </div>
}`,...(X=($=y.parameters)==null?void 0:$.docs)==null?void 0:X.source}}};var B,H,W;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Figma \`656:32182\` — regular, cascading, and two-line menu layouts.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {MENU_TYPES.map(type => <div key={type} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{type}</p>
          <PopoverMenu type={type} />
        </div>)}
    </div>
}`,...(W=(H=f.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var G,J,K;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Figma \`656:31914\` — menu item states across item types.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {ITEM_STATES.map(state => <div key={state} style={storyMatrixItemRowStyle}>
          <p style={variantLabelStyle}>{state}</p>
          <div className="story-row">
            {ITEM_TYPES.map(type => <PopoverMenuItem key={type} type={type} visualState={state} title="Title" label="Popover item text" />)}
          </div>
        </div>)}
    </div>
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const xe=["Default","Cascading","TwoLines","ItemStates","NoTip","TipDirectionMatrix","TypeMatrix","ItemStateMatrix"];export{p as Cascading,u as Default,g as ItemStateMatrix,d as ItemStates,v as NoTip,y as TipDirectionMatrix,c as TwoLines,f as TypeMatrix,xe as __namedExportsOrder,ge as default};
