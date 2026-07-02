import{j as e}from"./jsx-runtime-BYYWji4R.js";import{S as k}from"./SparkIcon-B877p_59.js";import{D as S,a as D}from"./DropdownFooter-BsuM-IbT.js";/* empty css                 */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./sparkAssetUrl-FWf-EcJv.js";import"./Checkbox-BvtwKe_o.js";import"./DropdownCheckIcon-DuodM3sj.js";import"./Button-CdN-AKPT.js";import"./TooltipTrigger-CeqIspS_.js";import"./Tooltip-rWdCQlMf.js";const q=Array.from({length:4},()=>({label:"Dropdown item text"}));function f({searchPlaceholder:h="Search",showFooter:w=!0,items:v=q,showPrefixIcon:I=!1,showInfoIcon:y=!1,className:b=""}){const g=["spark-dropdown","spark-dropdown-search",b].filter(Boolean).join(" ");return e.jsxs("div",{className:g,role:"menu",children:[e.jsx("div",{className:"spark-dropdown-search-header",children:e.jsxs("div",{className:"spark-dropdown-search-field",children:[e.jsx("input",{className:"spark-dropdown-search-input",type:"search",placeholder:h}),e.jsx(k,{slug:"search",size:"small",className:"spark-dropdown-search-icon"})]})}),e.jsx("div",{className:"spark-dropdown-body",children:v.map((a,x)=>e.jsx(S,{...a,showPrefixIcon:a.showPrefixIcon??I,showInfoIcon:a.showInfoIcon??y},`${a.label}-${x}`))}),w?e.jsx(D,{}):null]})}f.__docgenInfo={description:"",methods:[],displayName:"DropdownSearch",props:{searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search'",computed:!1}},showFooter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},items:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}))`,computed:!0}},showPrefixIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showInfoIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const $={title:"Components/Dropdown/Search",component:f,tags:["autodocs"],args:{showFooter:!0,showInfoIcon:!1,showPrefixIcon:!1},parameters:{docs:{description:{component:"Dropdown with built-in search field, item list, and optional footer (Tertiary Clear + Secondary Apply). Item prefix and info icons are optional."}}}},o={},r={args:{showFooter:!1}},s={args:{showInfoIcon:!1,items:Array.from({length:4},()=>({label:"Dropdown item text",showInfoIcon:!1}))}};var n,t,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(l=(t=o.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var i,c,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    showFooter: false
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,m,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    showInfoIcon: false,
    items: Array.from({
      length: 4
    }, () => ({
      label: 'Dropdown item text',
      showInfoIcon: false
    }))
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const z=["Default","WithoutFooter","IconsOff"];export{o as Default,s as IconsOff,r as WithoutFooter,z as __namedExportsOrder,$ as default};
