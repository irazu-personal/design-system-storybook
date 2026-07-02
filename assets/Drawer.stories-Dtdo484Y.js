import{j as e}from"./jsx-runtime-BYYWji4R.js";import{a as $,b as tr,v as R,s as vr}from"./storyHelpers-D7QoSJ90.js";import{S as h}from"./SparkIcon-B877p_59.js";import{O as yr}from"./Overlay-DPQ3zSyg.js";import{r as v}from"./index-ClcD9ViR.js";import{B as pe}from"./Button-CdN-AKPT.js";import{B as wr}from"./Breadcrumb-DieAPxQA.js";import{S as hr}from"./ScrollBar-Cp2nGFrO.js";import{T as nr}from"./TooltipTrigger-CeqIspS_.js";import"./sparkAssetUrl-FWf-EcJv.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Tooltip-rWdCQlMf.js";function C({divider:r=!0,stepsBreadcrumb:a=!1,breadcrumbItems:t=[],showCloseButton:n=!1,showPrimaryButton:i=!0,title:s="Long title",subtitle:m="Subtitle",showSubtitle:o=!0,closeLabel:p="Close",primaryLabel:y="Next",className:l="",onCloseClick:u,onPrimaryClick:f}){const c=e.jsxs("div",{className:"spark-drawer-header-actions",children:[n?e.jsx(pe,{variant:"tertiary",size:"small",type:"button",onClick:u,children:p}):null,i?e.jsx(pe,{variant:"primary",size:"small",type:"button",onClick:f,children:y}):null]});return a?e.jsxs("header",{className:["spark-drawer-header","spark-drawer-header-steps",r?"spark-drawer-header-divider":"",l].filter(Boolean).join(" "),children:[e.jsxs("div",{className:"spark-drawer-header-steps-row",children:[e.jsx(wr,{items:t,type:"steps",separatorShape:"chevron",className:"spark-drawer-header-breadcrumb"}),c]}),e.jsxs("div",{className:"spark-drawer-header-copy",children:[e.jsx("h2",{className:"spark-drawer-header-title",children:s}),o?e.jsx("p",{className:"spark-drawer-header-subtitle",children:m}):null]})]}):e.jsxs("header",{className:["spark-drawer-header",r?"spark-drawer-header-divider":"",l].filter(Boolean).join(" "),children:[e.jsx("div",{className:"spark-drawer-header-leading",children:e.jsxs("div",{className:"spark-drawer-header-copy",children:[e.jsx("h2",{className:"spark-drawer-header-title",children:s}),o?e.jsx("p",{className:"spark-drawer-header-subtitle",children:m}):null]})}),c]})}C.__docgenInfo={description:"",methods:[],displayName:"DrawerHeader",props:{divider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},stepsBreadcrumb:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},breadcrumbItems:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  href?: string;
  /** Optional icon rendered before the label (left side). */
  icon?: ReactNode;
  /** Renders a chevron-down after the label to signal a popover trigger. */
  chevron?: boolean;
  /** When true, shows chevron-up (popover open). Matches Figma \`.Icon-Chevron\` Open=Yes. */
  chevronOpen?: boolean;
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>['onClick'];
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1},description:"Optional icon rendered before the label (left side)."},{key:"chevron",value:{name:"boolean",required:!1},description:"Renders a chevron-down after the label to signal a popover trigger."},{key:"chevronOpen",value:{name:"boolean",required:!1},description:"When true, shows chevron-up (popover open). Matches Figma `.Icon-Chevron` Open=Yes."},{key:"onClick",value:{name:"AnchorHTMLAttributes['onClick']",raw:"AnchorHTMLAttributes<HTMLAnchorElement>['onClick']",required:!1}}]}}],raw:"BreadcrumbItemData[]"},description:"",defaultValue:{value:"[]",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showPrimaryButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Long title'",computed:!1}},subtitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Subtitle'",computed:!1}},showSubtitle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Close'",computed:!1}},primaryLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Next'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onCloseClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPrimaryClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function sr({children:r,slotPadding:a=!0,showPlaceholder:t=!0,showScrollBar:n=!1,className:i=""}){return e.jsxs("div",{className:["spark-drawer-body",a?"spark-drawer-body-padded":"",i].filter(Boolean).join(" "),children:[r??(t?e.jsx("div",{className:"spark-drawer-slot-placeholder","aria-hidden":"true"}):null),n?e.jsx(hr,{type:"vertical",className:"spark-drawer-scrollbar"}):null]})}sr.__docgenInfo={description:"",methods:[],displayName:"DrawerSlot",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},slotPadding:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showPlaceholder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showScrollBar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};function ne(r,a,t){return Math.min(t,Math.max(a,r))}function gr({initialWidth:r,minWidth:a,maxWidth:t,onWidthChange:n,onResizeEnd:i}){const[s,m]=v.useState(()=>ne(r,a,t)),[o,p]=v.useState(!1),y=v.useRef({startX:0,startWidth:s}),l=v.useRef(s),u=v.useRef(!1);v.useEffect(()=>{const d=ne(r,a,t);m(d),l.current=d},[r,a,t]),v.useEffect(()=>{l.current=s},[s]),v.useEffect(()=>{u.current=o},[o]);const f=v.useCallback(d=>{const w=ne(d,a,t);m(w),l.current=w,n==null||n(w)},[t,a,n]),c=v.useCallback(d=>{d.preventDefault(),d.currentTarget.setPointerCapture(d.pointerId),y.current={startX:d.clientX,startWidth:l.current},u.current=!0,p(!0)},[]),b=v.useCallback(()=>{u.current&&(u.current=!1,p(!1),i==null||i(l.current))},[i]);return v.useEffect(()=>{if(!o)return;const d=S=>{const{startX:k,startWidth:j}=y.current,q=k-S.clientX;f(j+q)},w=()=>{b()};return window.addEventListener("pointermove",d),window.addEventListener("pointerup",w),window.addEventListener("pointercancel",w),()=>{window.removeEventListener("pointermove",d),window.removeEventListener("pointerup",w),window.removeEventListener("pointercancel",w)}},[b,o,f]),{width:s,isResizing:o,handleResizePointerDown:c,endResize:b}}function x({width:r=!1,visualState:a="default",icon:t,ariaLabel:n,onClick:i,className:s="",type:m="button",onPointerDown:o,onPointerUp:p,onPointerCancel:y,onLostPointerCapture:l}){const u=a==="disabled",f=["spark-drawer-button-icon",r?"spark-drawer-button-icon-width":"",r?"spark-drawer-button-icon-resize":"",a==="hover"?"spark-drawer-button-icon-hover":"",a==="click-on"?"spark-drawer-button-icon-click-on":"",u?"spark-drawer-button-icon-disabled":"",s].filter(Boolean).join(" ");return e.jsx("button",{type:m,className:f,"aria-label":n,disabled:u,onClick:i,onPointerDown:o,onPointerUp:p,onPointerCancel:y,onLostPointerCapture:l,children:t})}x.__docgenInfo={description:"",methods:[],displayName:"DrawerButtonIcon",props:{width:{required:!1,tsType:{name:"boolean"},description:"Figma `Width=Yes` — tall pill for the resize handle.",defaultValue:{value:"false",computed:!1}},visualState:{required:!1,tsType:{name:"union",raw:"'default' | 'hover' | 'click-on' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'click-on'"},{name:"literal",value:"'disabled'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:""},ariaLabel:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"",defaultValue:{value:"'button'",computed:!1}}}};const N=1360,me=400,fe="Resize drawer",br=[{id:"setup",label:"Project Setup",icon:"layout"},{id:"overview",label:"Overview",icon:"graph"},{id:"configuration",label:"Configuration",icon:"book"},{id:"review",label:"Review",icon:"bar-chart-ascending"}],oe=[{label:"Project Setup",href:"#",icon:e.jsx(h,{slug:"layout",size:"small"})},{label:"Overview",href:"#",icon:e.jsx(h,{slug:"graph",size:"small"})},{label:"Configuration",href:"#",icon:e.jsx(h,{slug:"book",size:"small"})},{label:"Review",icon:e.jsx(h,{slug:"bar-chart-ascending",size:"small"})}],ir="left";function M({tooltip:r,children:a}){return e.jsx(nr,{text:r,placement:ir,children:a})}function le({type:r="expand",activeStep:a,showTestInPlayground:t=!0,isResizing:n=!1,onClose:i,onStepClick:s,onWidthToggle:m,onResizePointerDown:o,onResizePointerEnd:p,onTestInPlayground:y,className:l=""}){const u=r==="expand"?"viewport-wide":"viewport-narrow",f=r==="expand"?"Expand view":"Collapse view";return e.jsxs("aside",{className:["spark-drawer-toolbar",l].filter(Boolean).join(" "),children:[e.jsxs("div",{className:"spark-drawer-toolbar-top",children:[e.jsxs("div",{className:"spark-drawer-toolbar-actions",children:[e.jsx(M,{tooltip:"Close",children:e.jsx(x,{ariaLabel:"Close",icon:e.jsx(h,{slug:"close",size:"small"}),onClick:i})}),e.jsx(M,{tooltip:f,children:e.jsx(x,{ariaLabel:f,icon:e.jsx(h,{slug:u,size:"small"}),onClick:m})})]}),e.jsx("div",{className:"spark-drawer-toolbar-steps",role:"group","aria-label":"Drawer steps",children:br.map(c=>e.jsx(M,{tooltip:c.label,children:e.jsx(x,{ariaLabel:c.label,visualState:a===c.id?"click-on":"default",icon:e.jsx(h,{slug:c.icon,size:"small"}),onClick:()=>s==null?void 0:s(c.id)})},c.id))})]}),e.jsx("div",{className:"spark-drawer-toolbar-middle",children:e.jsx(nr,{text:fe,placement:ir,disabled:n,children:e.jsx(x,{width:!0,ariaLabel:fe,visualState:n?"click-on":"default",icon:e.jsx(h,{slug:"lines",size:"medium"}),onPointerDown:o,onPointerUp:p,onPointerCancel:p,onLostPointerCapture:p})})}),t?e.jsx("div",{className:"spark-drawer-toolbar-bottom",children:e.jsx(M,{tooltip:"Test in Playground",children:e.jsx(x,{ariaLabel:"Test in Playground",icon:e.jsx(h,{slug:"game",size:"small"}),onClick:y})})}):null]})}le.__docgenInfo={description:"",methods:[],displayName:"DrawerToolBar",props:{type:{required:!1,tsType:{name:"union",raw:"'expand' | 'collapse'",elements:[{name:"literal",value:"'expand'"},{name:"literal",value:"'collapse'"}]},description:"Expand shows viewport-wide; collapse shows viewport-narrow on the width toggle.",defaultValue:{value:"'expand'",computed:!1}},activeStep:{required:!1,tsType:{name:"union",raw:"'setup' | 'overview' | 'configuration' | 'review'",elements:[{name:"literal",value:"'setup'"},{name:"literal",value:"'overview'"},{name:"literal",value:"'configuration'"},{name:"literal",value:"'review'"}]},description:"Active step in the multi-step navigation group."},showTestInPlayground:{required:!1,tsType:{name:"boolean"},description:"Figma bottom action — game icon “Test in Playground”.",defaultValue:{value:"true",computed:!1}},isResizing:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onStepClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(stepId: DrawerToolbarStepId) => void",signature:{arguments:[{type:{name:"union",raw:"'setup' | 'overview' | 'configuration' | 'review'",elements:[{name:"literal",value:"'setup'"},{name:"literal",value:"'overview'"},{name:"literal",value:"'configuration'"},{name:"literal",value:"'review'"}]},name:"stepId"}],return:{name:"void"}}},description:""},onWidthToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onResizePointerDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ReactPointerEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactPointerEvent",elements:[{name:"HTMLButtonElement"}],raw:"ReactPointerEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:""},onResizePointerEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onTestInPlayground:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};function xr(r,a){if(r)return N;if(typeof a=="number")return a;const t=Number.parseInt(a,10);return Number.isFinite(t)?t:704}function de({toolbarType:r="expand",fullWidth:a=!1,width:t=704,resizable:n=!0,divider:i=!0,stepsBreadcrumb:s=!1,breadcrumbItems:m=oe,showCloseButton:o=!1,showPrimaryButton:p=!0,showSubtitle:y=!0,title:l="Long title",subtitle:u="Subtitle",closeLabel:f="Close",primaryLabel:c="Next",slotPadding:b=!0,showScrollBar:d=!1,showTestInPlayground:w=!0,children:S,className:k="",onToolbarClose:j,activeToolbarStep:q,onToolbarStepClick:G,onToolbarWidthToggle:Z,onToolbarResize:J,onToolbarWidthChange:K,onToolbarTestInPlayground:Q,onCloseClick:ee,onPrimaryClick:re}){const ae=v.useMemo(()=>xr(a,t),[a,t]),{width:te,isResizing:I,handleResizePointerDown:ur,endResize:cr}=gr({initialWidth:ae,minWidth:me,maxWidth:N,onWidthChange:K,onResizeEnd:J}),pr={width:`${te}px`,minWidth:`${me}px`,maxWidth:`${N}px`},mr=["spark-drawer-item-container","spark-drawer-item-container-fill",a&&!n?"spark-drawer-item-full-width":"",s?"spark-drawer-item-container-steps":""].filter(Boolean).join(" "),fr=["spark-drawer-item",I?"spark-drawer-item-resizing":"",k].filter(Boolean).join(" ");return e.jsxs("div",{className:fr,children:[e.jsx(le,{type:r,activeStep:q,showTestInPlayground:w,isResizing:I,onClose:j,onStepClick:G,onWidthToggle:Z,onResizePointerDown:n?ur:void 0,onResizePointerEnd:n?cr:void 0,onTestInPlayground:Q}),e.jsxs("div",{className:mr,style:pr,children:[e.jsx(C,{divider:i,stepsBreadcrumb:s,breadcrumbItems:m,showCloseButton:o,showPrimaryButton:p,showSubtitle:y,title:l,subtitle:u,closeLabel:f,primaryLabel:c,onCloseClick:ee,onPrimaryClick:re}),e.jsx(sr,{slotPadding:b,showScrollBar:d,children:S})]})]})}de.__docgenInfo={description:"",methods:[],displayName:"DrawerItem",props:{toolbarType:{required:!1,tsType:{name:"union",raw:"'expand' | 'collapse'",elements:[{name:"literal",value:"'expand'"},{name:"literal",value:"'collapse'"}]},description:"",defaultValue:{value:"'expand'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"704",computed:!1}},resizable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},divider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},stepsBreadcrumb:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},breadcrumbItems:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  href?: string;
  /** Optional icon rendered before the label (left side). */
  icon?: ReactNode;
  /** Renders a chevron-down after the label to signal a popover trigger. */
  chevron?: boolean;
  /** When true, shows chevron-up (popover open). Matches Figma \`.Icon-Chevron\` Open=Yes. */
  chevronOpen?: boolean;
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>['onClick'];
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1},description:"Optional icon rendered before the label (left side)."},{key:"chevron",value:{name:"boolean",required:!1},description:"Renders a chevron-down after the label to signal a popover trigger."},{key:"chevronOpen",value:{name:"boolean",required:!1},description:"When true, shows chevron-up (popover open). Matches Figma `.Icon-Chevron` Open=Yes."},{key:"onClick",value:{name:"AnchorHTMLAttributes['onClick']",raw:"AnchorHTMLAttributes<HTMLAnchorElement>['onClick']",required:!1}}]}}],raw:"BreadcrumbItemData[]"},description:"",defaultValue:{value:`[
  {
    label: 'Project Setup',
    href: '#',
    icon: <SparkIcon slug="layout" size="small" />,
  },
  {
    label: 'Overview',
    href: '#',
    icon: <SparkIcon slug="graph" size="small" />,
  },
  {
    label: 'Configuration',
    href: '#',
    icon: <SparkIcon slug="book" size="small" />,
  },
  { label: 'Review', icon: <SparkIcon slug="bar-chart-ascending" size="small" /> },
]`,computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showPrimaryButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showSubtitle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Long title'",computed:!1}},subtitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Subtitle'",computed:!1}},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Close'",computed:!1}},primaryLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Next'",computed:!1}},slotPadding:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showScrollBar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showTestInPlayground:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onToolbarClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},activeToolbarStep:{required:!1,tsType:{name:"union",raw:"'setup' | 'overview' | 'configuration' | 'review'",elements:[{name:"literal",value:"'setup'"},{name:"literal",value:"'overview'"},{name:"literal",value:"'configuration'"},{name:"literal",value:"'review'"}]},description:""},onToolbarStepClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(stepId: DrawerToolbarStepId) => void",signature:{arguments:[{type:{name:"union",raw:"'setup' | 'overview' | 'configuration' | 'review'",elements:[{name:"literal",value:"'setup'"},{name:"literal",value:"'overview'"},{name:"literal",value:"'configuration'"},{name:"literal",value:"'review'"}]},name:"stepId"}],return:{name:"void"}}},description:""},onToolbarWidthToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onToolbarResize:{required:!1,tsType:{name:"signature",type:"function",raw:"(width: number) => void",signature:{arguments:[{type:{name:"number"},name:"width"}],return:{name:"void"}}},description:""},onToolbarWidthChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(width: number) => void",signature:{arguments:[{type:{name:"number"},name:"width"}],return:{name:"void"}}},description:""},onToolbarTestInPlayground:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCloseClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPrimaryClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function T({overlay:r="yes",slotPadding:a="yes",fullWidth:t=!1,width:n=704,toolbarType:i="expand",activeToolbarStep:s,resizable:m=!0,showScrollBar:o=!1,showTestInPlayground:p=!0,divider:y=!0,stepsBreadcrumb:l=!1,breadcrumbItems:u,showCloseButton:f=!1,showPrimaryButton:c=!0,showSubtitle:b=!0,title:d="Long title",subtitle:w="Subtitle",closeLabel:S="Close",primaryLabel:k="Next",children:j,className:q="",onToolbarClose:G,onToolbarStepClick:Z,onToolbarWidthToggle:J,onToolbarResize:K,onToolbarWidthChange:Q,onToolbarTestInPlayground:ee,onCloseClick:re,onPrimaryClick:ae}){const te=["spark-drawer-panel",q].filter(Boolean).join(" "),I=e.jsx("div",{className:te,children:e.jsx(de,{toolbarType:i,activeToolbarStep:s,resizable:m,fullWidth:t,width:n,divider:y,stepsBreadcrumb:l,breadcrumbItems:u,showCloseButton:f,showPrimaryButton:c,showSubtitle:b,title:d,subtitle:w,closeLabel:S,primaryLabel:k,slotPadding:a==="yes",showScrollBar:o,showTestInPlayground:p,onToolbarClose:G,onToolbarStepClick:Z,onToolbarWidthToggle:J,onToolbarResize:K,onToolbarWidthChange:Q,onToolbarTestInPlayground:ee,onCloseClick:re,onPrimaryClick:ae,children:j})});return r==="no"?e.jsx("div",{className:"spark-drawer spark-drawer-no-overlay",children:I}):e.jsxs("div",{className:"spark-drawer spark-drawer-with-overlay",children:[e.jsx(yr,{}),I]})}T.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{overlay:{required:!1,tsType:{name:"union",raw:"'yes' | 'no'",elements:[{name:"literal",value:"'yes'"},{name:"literal",value:"'no'"}]},description:"",defaultValue:{value:"'yes'",computed:!1}},slotPadding:{required:!1,tsType:{name:"union",raw:"'yes' | 'no'",elements:[{name:"literal",value:"'yes'"},{name:"literal",value:"'no'"}]},description:"",defaultValue:{value:"'yes'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"704",computed:!1}},toolbarType:{required:!1,tsType:{name:"union",raw:"'expand' | 'collapse'",elements:[{name:"literal",value:"'expand'"},{name:"literal",value:"'collapse'"}]},description:"",defaultValue:{value:"'expand'",computed:!1}},activeToolbarStep:{required:!1,tsType:{name:"union",raw:"'setup' | 'overview' | 'configuration' | 'review'",elements:[{name:"literal",value:"'setup'"},{name:"literal",value:"'overview'"},{name:"literal",value:"'configuration'"},{name:"literal",value:"'review'"}]},description:""},resizable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showScrollBar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showTestInPlayground:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},divider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},stepsBreadcrumb:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},breadcrumbItems:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  href?: string;
  /** Optional icon rendered before the label (left side). */
  icon?: ReactNode;
  /** Renders a chevron-down after the label to signal a popover trigger. */
  chevron?: boolean;
  /** When true, shows chevron-up (popover open). Matches Figma \`.Icon-Chevron\` Open=Yes. */
  chevronOpen?: boolean;
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>['onClick'];
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1},description:"Optional icon rendered before the label (left side)."},{key:"chevron",value:{name:"boolean",required:!1},description:"Renders a chevron-down after the label to signal a popover trigger."},{key:"chevronOpen",value:{name:"boolean",required:!1},description:"When true, shows chevron-up (popover open). Matches Figma `.Icon-Chevron` Open=Yes."},{key:"onClick",value:{name:"AnchorHTMLAttributes['onClick']",raw:"AnchorHTMLAttributes<HTMLAnchorElement>['onClick']",required:!1}}]}}],raw:"BreadcrumbItemData[]"},description:""},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showPrimaryButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showSubtitle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Long title'",computed:!1}},subtitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Subtitle'",computed:!1}},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Close'",computed:!1}},primaryLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Next'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onToolbarClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onToolbarStepClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(stepId: DrawerToolbarStepId) => void",signature:{arguments:[{type:{name:"union",raw:"'setup' | 'overview' | 'configuration' | 'review'",elements:[{name:"literal",value:"'setup'"},{name:"literal",value:"'overview'"},{name:"literal",value:"'configuration'"},{name:"literal",value:"'review'"}]},name:"stepId"}],return:{name:"void"}}},description:""},onToolbarWidthToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onToolbarResize:{required:!1,tsType:{name:"signature",type:"function",raw:"(width: number) => void",signature:{arguments:[{type:{name:"number"},name:"width"}],return:{name:"void"}}},description:""},onToolbarWidthChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(width: number) => void",signature:{arguments:[{type:{name:"number"},name:"width"}],return:{name:"void"}}},description:""},onToolbarTestInPlayground:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCloseClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPrimaryClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Tr=874,ue={...vr,width:"100%"},ce={display:"flex",flexDirection:"column",gap:"1rem",width:"fit-content",maxWidth:"100%",padding:"var(--dimension-spacing-32)",boxSizing:"border-box"},Sr={...$,width:"100%",minHeight:Tr};({...$});const kr={...$,alignItems:"center",width:"100%"},se={...$,alignItems:"center",width:"100%"},ie={flex:"1 1 auto",width:"100%",minWidth:0},or={flex:"1 1 auto",display:"flex",justifyContent:"flex-end",width:"100%"};function jr(r){return e.jsx("div",{style:{background:"var(--semantic-surface-canvas)",padding:"1.5rem",minHeight:"100vh",width:"100%",boxSizing:"border-box",display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"center"},children:e.jsx(r,{})})}function qr(r){return e.jsx("div",{style:{background:"var(--semantic-surface-canvas)",padding:"1.5rem",width:"100%",boxSizing:"border-box"},children:e.jsx(r,{})})}const g={decorators:[jr]},X={decorators:[qr]},lr={...ce,minWidth:"640px"};function D({label:r,labelStyle:a=tr,children:t}){return e.jsxs("div",{style:Sr,children:[e.jsx("p",{style:a,children:r}),e.jsx("div",{style:or,children:t})]})}const Yr={title:"Components/Drawer",component:T,tags:["autodocs"],argTypes:{overlay:{control:"select",options:["yes","no"]},slotPadding:{control:"select",options:["yes","no"]},toolbarType:{control:"select",options:["expand","collapse"]},activeToolbarStep:{control:"select",options:["setup","overview","configuration","review"]},fullWidth:{control:"boolean"},width:{control:"number"},showScrollBar:{control:"boolean"},showTestInPlayground:{control:"boolean"},divider:{control:"boolean"},stepsBreadcrumb:{control:"boolean"},showCloseButton:{control:"boolean"},showPrimaryButton:{control:"boolean"},showSubtitle:{control:"boolean"}},args:{overlay:"yes",slotPadding:"yes",toolbarType:"expand",fullWidth:!1,width:704,showScrollBar:!1,showTestInPlayground:!0,divider:!0,stepsBreadcrumb:!1,showCloseButton:!1,showPrimaryButton:!0,showSubtitle:!0},parameters:{layout:"fullscreen",docs:{description:{component:"Right-side sliding panel with vertical toolbar anatomy. Drag the centered resize handle to adjust width between 400px (min) and 1360px (full). Figma `573:145681`."}}}},L={...g},B={...g,args:{overlay:"no"}},P={...g,args:{slotPadding:"no"}},O={...g,parameters:{docs:{description:{story:`Full width uses a fixed ${N}px container (Figma full-size).`}}},args:{fullWidth:!0,overlay:"no"}},E={...g,args:{stepsBreadcrumb:!0,overlay:"no",breadcrumbItems:oe}},Ir=["yes","no"],A={...g,parameters:{docs:{description:{story:"Overlay blocks background interaction; no overlay squeezes content and allows simultaneous page access."}}},render:()=>e.jsx("div",{style:ue,children:Ir.map(r=>e.jsx(D,{label:r,children:e.jsx(T,{overlay:r,width:704})},r))})},W={...g,parameters:{docs:{description:{story:"Minimum container width 400px and full-size maximum 1360px (Figma `573:145681`)."}}},render:()=>e.jsxs("div",{style:ue,children:[e.jsx(D,{label:"min (400px)",children:e.jsx(T,{overlay:"no",width:400})}),e.jsx(D,{label:"default (704px)",children:e.jsx(T,{overlay:"no",width:704})}),e.jsx(D,{label:`full (${N}px)`,children:e.jsx(T,{overlay:"no",fullWidth:!0})})]})},Dr=["yes","no"],_={...g,render:()=>e.jsx("div",{style:ue,children:Dr.map(r=>e.jsx(D,{label:r,children:e.jsx(T,{overlay:"no",width:704,slotPadding:r})},r))})},V={...X,render:()=>e.jsxs("div",{style:lr,children:[e.jsxs("div",{style:se,children:[e.jsx("p",{style:R,children:"With divider"}),e.jsx("div",{style:ie,children:e.jsx(C,{divider:!0,className:"spark-drawer-header-fill"})})]}),e.jsxs("div",{style:se,children:[e.jsx("p",{style:R,children:"Without divider"}),e.jsx("div",{style:ie,children:e.jsx(C,{divider:!1,className:"spark-drawer-header-fill"})})]})]})},H={...X,render:()=>e.jsx("div",{style:lr,children:e.jsxs("div",{style:se,children:[e.jsx("p",{style:R,children:"Steps breadcrumb"}),e.jsx("div",{style:ie,children:e.jsx(C,{stepsBreadcrumb:!0,breadcrumbItems:oe,className:"spark-drawer-header-fill"})})]})})},Rr=[!1,!0],Cr=["default","hover","click-on","disabled"],z={...X,parameters:{docs:{description:{story:"Figma `.Drawer-button-Icon` — `Width=No` (28×28) vs `Width=Yes` (28×48) with drawer icon-button shadow."}}},render:()=>e.jsx("div",{style:ce,children:Rr.map(r=>e.jsxs("div",{style:kr,children:[e.jsx("p",{style:tr,children:r?"Width=Yes":"Width=No"}),e.jsx("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:Cr.map(a=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("p",{style:R,children:a}),e.jsx(x,{width:r,visualState:a,ariaLabel:`${a} icon`,icon:r?e.jsx(h,{slug:"lines",size:"medium"}):e.jsx(h,{slug:"close",size:"small"})})]},a))})]},r?"width-yes":"width-no"))})},Nr=["expand","collapse"],dr=443,Mr={...ce,padding:"var(--dimension-spacing-32)",minHeight:`${dr+64}px`},F={...X,parameters:{docs:{description:{story:"Figma `.Drawer-tool-bar` (`6869:150292`) — top actions (Close, width toggle), multi-step navigation group, centered resize handle (tooltip: “Resize drawer”, drag to resize 400–1360px), and bottom “Test in Playground”. All icon buttons use `TooltipTrigger` (4px gap, placement left)."}}},render:()=>e.jsx("div",{style:Mr,children:e.jsx("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"4rem"},children:Nr.map(r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"1rem"},children:[e.jsx("p",{style:R,children:r}),e.jsx("div",{style:{position:"relative",height:dr,width:36},children:e.jsx(le,{type:r})})]},r))})})},Y={...g,parameters:{docs:{description:{story:"Figma `.Drawer-Item` — toolbar + header + slot anatomy (`1629:80664`)."}}},render:()=>e.jsx("div",{style:or,children:e.jsx(de,{width:704})})},U={...g,args:{showScrollBar:!0}};var ve,ye,we;L.parameters={...L.parameters,docs:{...(ve=L.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  ...drawerFullStory
}`,...(we=(ye=L.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var he,ge,be;B.parameters={...B.parameters,docs:{...(he=B.parameters)==null?void 0:he.docs,source:{originalSource:`{
  ...drawerFullStory,
  args: {
    overlay: 'no'
  }
}`,...(be=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var xe,Te,Se;P.parameters={...P.parameters,docs:{...(xe=P.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  ...drawerFullStory,
  args: {
    slotPadding: 'no'
  }
}`,...(Se=(Te=P.parameters)==null?void 0:Te.docs)==null?void 0:Se.source}}};var ke,je,qe;O.parameters={...O.parameters,docs:{...(ke=O.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  ...drawerFullStory,
  parameters: {
    docs: {
      description: {
        story: \`Full width uses a fixed \${DRAWER_FULL_WIDTH}px container (Figma full-size).\`
      }
    }
  },
  args: {
    fullWidth: true,
    overlay: 'no'
  }
}`,...(qe=(je=O.parameters)==null?void 0:je.docs)==null?void 0:qe.source}}};var Ie,De,Re;E.parameters={...E.parameters,docs:{...(Ie=E.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  ...drawerFullStory,
  args: {
    stepsBreadcrumb: true,
    overlay: 'no',
    breadcrumbItems: DEFAULT_DRAWER_STEPS_ITEMS
  }
}`,...(Re=(De=E.parameters)==null?void 0:De.docs)==null?void 0:Re.source}}};var Ce,Ne,Me;A.parameters={...A.parameters,docs:{...(Ce=A.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  ...drawerFullStory,
  parameters: {
    docs: {
      description: {
        story: 'Overlay blocks background interaction; no overlay squeezes content and allows simultaneous page access.'
      }
    }
  },
  render: () => <div style={drawerMatrixSectionStyle}>
      {OVERLAY_OPTIONS.map(overlay => <DrawerMatrixRow key={overlay} label={overlay}>
          <Drawer overlay={overlay} width={704} />
        </DrawerMatrixRow>)}
    </div>
}`,...(Me=(Ne=A.parameters)==null?void 0:Ne.docs)==null?void 0:Me.source}}};var Le,Be,Pe;W.parameters={...W.parameters,docs:{...(Le=W.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  ...drawerFullStory,
  parameters: {
    docs: {
      description: {
        story: 'Minimum container width 400px and full-size maximum 1360px (Figma \`573:145681\`).'
      }
    }
  },
  render: () => <div style={drawerMatrixSectionStyle}>
      <DrawerMatrixRow label="min (400px)">
        <Drawer overlay="no" width={400} />
      </DrawerMatrixRow>
      <DrawerMatrixRow label="default (704px)">
        <Drawer overlay="no" width={704} />
      </DrawerMatrixRow>
      <DrawerMatrixRow label={\`full (\${DRAWER_FULL_WIDTH}px)\`}>
        <Drawer overlay="no" fullWidth />
      </DrawerMatrixRow>
    </div>
}`,...(Pe=(Be=W.parameters)==null?void 0:Be.docs)==null?void 0:Pe.source}}};var Oe,Ee,Ae;_.parameters={..._.parameters,docs:{...(Oe=_.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  ...drawerFullStory,
  render: () => <div style={drawerMatrixSectionStyle}>
      {SLOT_PADDING_OPTIONS.map(slotPadding => <DrawerMatrixRow key={slotPadding} label={slotPadding}>
          <Drawer overlay="no" width={704} slotPadding={slotPadding} />
        </DrawerMatrixRow>)}
    </div>
}`,...(Ae=(Ee=_.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source}}};var We,_e,Ve;V.parameters={...V.parameters,docs:{...(We=V.parameters)==null?void 0:We.docs,source:{originalSource:`{
  ...drawerCompactStory,
  render: () => <div style={drawerCompactHeaderSectionStyle}>
      <div style={drawerHeaderMatrixRowStyle}>
        <p style={variantLabelStyle}>With divider</p>
        <div style={drawerHeaderMatrixExampleStyle}>
          <DrawerHeader divider className="spark-drawer-header-fill" />
        </div>
      </div>
      <div style={drawerHeaderMatrixRowStyle}>
        <p style={variantLabelStyle}>Without divider</p>
        <div style={drawerHeaderMatrixExampleStyle}>
          <DrawerHeader divider={false} className="spark-drawer-header-fill" />
        </div>
      </div>
    </div>
}`,...(Ve=(_e=V.parameters)==null?void 0:_e.docs)==null?void 0:Ve.source}}};var He,ze,Fe;H.parameters={...H.parameters,docs:{...(He=H.parameters)==null?void 0:He.docs,source:{originalSource:`{
  ...drawerCompactStory,
  render: () => <div style={drawerCompactHeaderSectionStyle}>
      <div style={drawerHeaderMatrixRowStyle}>
        <p style={variantLabelStyle}>Steps breadcrumb</p>
        <div style={drawerHeaderMatrixExampleStyle}>
          <DrawerHeader stepsBreadcrumb breadcrumbItems={DEFAULT_DRAWER_STEPS_ITEMS} className="spark-drawer-header-fill" />
        </div>
      </div>
    </div>
}`,...(Fe=(ze=H.parameters)==null?void 0:ze.docs)==null?void 0:Fe.source}}};var Ye,Ue,$e;z.parameters={...z.parameters,docs:{...(Ye=z.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  ...drawerCompactStory,
  parameters: {
    docs: {
      description: {
        story: 'Figma \`.Drawer-button-Icon\` — \`Width=No\` (28×28) vs \`Width=Yes\` (28×48) with drawer icon-button shadow.'
      }
    }
  },
  render: () => <div style={drawerCompactSectionStyle}>
      {BUTTON_ICON_WIDTH_OPTIONS.map(width => <div key={width ? 'width-yes' : 'width-no'} style={drawerButtonIconMatrixRowStyle}>
          <p style={sizeLabelStyle}>{width ? 'Width=Yes' : 'Width=No'}</p>
          <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
            {BUTTON_ICON_STATES.map(visualState => <div key={visualState} style={{
          textAlign: 'center'
        }}>
                <p style={variantLabelStyle}>{visualState}</p>
                <DrawerButtonIcon width={width} visualState={visualState} ariaLabel={\`\${visualState} icon\`} icon={width ? <SparkIcon slug="lines" size="medium" /> : <SparkIcon slug="close" size="small" />} />
              </div>)}
          </div>
        </div>)}
    </div>
}`,...($e=(Ue=z.parameters)==null?void 0:Ue.docs)==null?void 0:$e.source}}};var Xe,Ge,Ze;F.parameters={...F.parameters,docs:{...(Xe=F.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  ...drawerCompactStory,
  parameters: {
    docs: {
      description: {
        story: 'Figma \`.Drawer-tool-bar\` (\`6869:150292\`) — top actions (Close, width toggle), multi-step navigation group, centered resize handle (tooltip: “Resize drawer”, drag to resize 400–1360px), and bottom “Test in Playground”. All icon buttons use \`TooltipTrigger\` (4px gap, placement left).'
      }
    }
  },
  render: () => <div style={drawerToolbarMatrixSectionStyle}>
      <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: '4rem'
    }}>
        {TOOLBAR_TYPES.map(type => <div key={type} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '1rem'
      }}>
            <p style={variantLabelStyle}>{type}</p>
            <div style={{
          position: 'relative',
          height: DRAWER_TOOLBAR_MATRIX_HEIGHT,
          width: 36
        }}>
              <DrawerToolBar type={type} />
            </div>
          </div>)}
      </div>
    </div>
}`,...(Ze=(Ge=F.parameters)==null?void 0:Ge.docs)==null?void 0:Ze.source}}};var Je,Ke,Qe;Y.parameters={...Y.parameters,docs:{...(Je=Y.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  ...drawerFullStory,
  parameters: {
    docs: {
      description: {
        story: 'Figma \`.Drawer-Item\` — toolbar + header + slot anatomy (\`1629:80664\`).'
      }
    }
  },
  render: () => <div style={drawerMatrixExampleStyle}>
      <DrawerItem width={704} />
    </div>
}`,...(Qe=(Ke=Y.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var er,rr,ar;U.parameters={...U.parameters,docs:{...(er=U.parameters)==null?void 0:er.docs,source:{originalSource:`{
  ...drawerFullStory,
  args: {
    showScrollBar: true
  }
}`,...(ar=(rr=U.parameters)==null?void 0:rr.docs)==null?void 0:ar.source}}};const Ur=["Default","NoOverlay","WithoutSlotPadding","FullWidth","StepsBreadcrumb","OverlayMatrix","WidthConstraintsMatrix","SlotPaddingMatrix","HeaderDividerMatrix","HeaderStepsBreadcrumbMatrix","DrawerButtonIconMatrix","DrawerToolBarMatrix","DrawerItemAnatomy","WithScrollBar"];export{L as Default,z as DrawerButtonIconMatrix,Y as DrawerItemAnatomy,F as DrawerToolBarMatrix,O as FullWidth,V as HeaderDividerMatrix,H as HeaderStepsBreadcrumbMatrix,B as NoOverlay,A as OverlayMatrix,_ as SlotPaddingMatrix,E as StepsBreadcrumb,W as WidthConstraintsMatrix,U as WithScrollBar,P as WithoutSlotPadding,Ur as __namedExportsOrder,Yr as default};
