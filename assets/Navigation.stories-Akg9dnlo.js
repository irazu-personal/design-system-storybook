import{j as a}from"./jsx-runtime-BYYWji4R.js";import{s as w,a as B,b as q}from"./storyHelpers-D7QoSJ90.js";import{A}from"./Avatar-Cm5kr-Jo.js";import{B as _}from"./Badge-Nok36i8c.js";import{D as g}from"./Divider-dL0nXNxx.js";import{S as f}from"./SparkIcon-B877p_59.js";import{s as M}from"./sparkAssetUrl-FWf-EcJv.js";import{T as V}from"./TooltipTrigger-CeqIspS_.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Tooltip-rWdCQlMf.js";function m({children:e,badge:s,className:r="",type:n="button","aria-label":t,disabled:l,...i}){const u=a.jsx("button",{type:n,className:["spark-navigation-main-button",r].filter(Boolean).join(" "),"aria-label":t,disabled:l,...i,children:a.jsx("span",{className:"spark-navigation-main-button-content",children:e})});return a.jsxs("div",{className:"spark-navigation-main-button-wrap",children:[t?a.jsx(V,{text:t,disabled:l,children:u}):u,s]})}m.__docgenInfo={description:"",methods:[],displayName:"NavigationMainButton",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},badge:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},type:{defaultValue:{value:"'button'",computed:!1},required:!1}}};function v({label:e,state:s="inactive",href:r="#",className:n=""}){const t=["spark-navigation-tab",`spark-navigation-tab-${s}`,n].filter(Boolean).join(" ");return s==="disabled"?a.jsx("span",{className:t,"aria-disabled":"true",children:e}):a.jsx("a",{className:t,href:r,"aria-current":s==="active"?"page":void 0,children:e})}v.__docgenInfo={description:"",methods:[],displayName:"NavigationTab",props:{label:{required:!0,tsType:{name:"string"},description:""},state:{required:!1,tsType:{name:"union",raw:"'active' | 'inactive' | 'hover' | 'disabled'",elements:[{name:"literal",value:"'active'"},{name:"literal",value:"'inactive'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'disabled'"}]},description:"",defaultValue:{value:"'inactive'",computed:!1}},href:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const D=[{label:"Projects",state:"active"},{label:"Analytics",state:"inactive"},{label:"Team",state:"inactive"},{label:"Docs",state:"inactive"}];function p({tabs:e=D,showBeta:s=!0,gettingStartedLabel:r="Getting Started?",notificationCount:n="21",className:t=""}){const l=["spark-navigation",t].filter(Boolean).join(" ");return a.jsxs("header",{className:l,children:[a.jsxs("div",{className:"spark-navigation-left",children:[a.jsxs("div",{className:"spark-navigation-brand",children:[a.jsx("img",{className:"spark-navigation-logo",src:M("logo/brandmark-white-logo-with-text.svg"),alt:"Spark"}),s?a.jsx("span",{className:"spark-navigation-beta",children:"Beta"}):null]}),a.jsx(g,{direction:"vertical",bg:"on-dark",className:"spark-navigation-divider spark-navigation-divider-fill"}),a.jsx("nav",{className:"spark-navigation-tabs","aria-label":"Main",children:e.map(i=>a.jsx(v,{label:i.label,state:i.state,href:i.href},i.label))})]}),a.jsxs("div",{className:"spark-navigation-right",children:[a.jsx("span",{className:"spark-navigation-help",children:r}),a.jsx(g,{direction:"vertical",bg:"on-dark",className:"spark-navigation-divider spark-navigation-divider-inset"}),a.jsxs("div",{className:"spark-navigation-actions",children:[a.jsx(m,{"aria-label":"Notifications",badge:a.jsx(_,{amount:n,className:"spark-navigation-badge"}),children:a.jsx(f,{slug:"bell",size:"medium"})}),a.jsx(m,{"aria-label":"Settings",children:a.jsx(f,{slug:"settings",size:"medium"})}),a.jsx(A,{size:"small",type:"image"})]})]})]})}p.__docgenInfo={description:"",methods:[],displayName:"Navigation",props:{tabs:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  state?: NavigationTabState;
  href?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"state",value:{name:"union",raw:"'active' | 'inactive' | 'hover' | 'disabled'",elements:[{name:"literal",value:"'active'"},{name:"literal",value:"'inactive'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'disabled'"}],required:!1}},{key:"href",value:{name:"string",required:!1}}]}}],raw:"NavigationTabItem[]"},description:"",defaultValue:{value:`[
  { label: 'Projects', state: 'active' },
  { label: 'Analytics', state: 'inactive' },
  { label: 'Team', state: 'inactive' },
  { label: 'Docs', state: 'inactive' },
]`,computed:!1}},showBeta:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},gettingStartedLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Getting Started?'",computed:!1}},notificationCount:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'21'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const $={title:"Components/Navigation",component:p,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Spark Main Navigation — 60px inverse bar with logo, Beta tag, primary tabs, help link, notifications, settings, and avatar."}}}},I=["active","inactive","hover","disabled"],o={render:e=>a.jsx("div",{className:"spark-navigation-story-wrap",children:a.jsx(p,{...e})})},d={parameters:{layout:"padded",docs:{description:{story:"Figma `305:4125` — active, inactive, hover, and disabled tab states."}}},render:()=>a.jsx("div",{style:w,children:I.map(e=>a.jsxs("div",{style:B,children:[a.jsx("p",{style:q,children:e}),a.jsx("div",{className:"spark-navigation-tab-matrix",children:a.jsx(v,{label:"Projects",state:e})})]},e))})},c={args:{showBeta:!1},render:e=>a.jsx("div",{className:"spark-navigation-story-wrap",children:a.jsx(p,{...e})})};var b,y,h;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <div className="spark-navigation-story-wrap">
      <Navigation {...args} />
    </div>
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var x,N,j;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Figma \`305:4125\` — active, inactive, hover, and disabled tab states.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {TAB_STATES.map(state => <div key={state} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{state}</p>
          <div className="spark-navigation-tab-matrix">
            <NavigationTab label="Projects" state={state} />
          </div>
        </div>)}
    </div>
}`,...(j=(N=d.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var k,T,S;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    showBeta: false
  },
  render: args => <div className="spark-navigation-story-wrap">
      <Navigation {...args} />
    </div>
}`,...(S=(T=c.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};const H=["Default","TabStateMatrix","WithoutBeta"];export{o as Default,d as TabStateMatrix,c as WithoutBeta,H as __namedExportsOrder,$ as default};
