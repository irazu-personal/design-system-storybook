import{j as e}from"./jsx-runtime-BYYWji4R.js";import{h as F,s as x,a as o,b as E,v as i}from"./storyHelpers-D7QoSJ90.js";import{r as N}from"./index-ClcD9ViR.js";import{D as _}from"./Divider-dL0nXNxx.js";import{S as K}from"./SparkIcon-B877p_59.js";import{O as L}from"./OutlineFeedbackIcon-CpglJw42.js";/* empty css                      *//* empty css                */import"./_commonjsHelpers-Cpj98o6Y.js";import"./sparkAssetUrl-FWf-EcJv.js";const R=["tag","category","description","task","box-graph"],T=[{title:"Overview",metrics:"236"},{title:"Labels",metrics:"3"},{title:"Examples",metrics:"14",showTitleIcon:!0,iconSlug:"tag"}];function q({item:t,defaultShowTitleIcon:a,defaultIconSlug:c,defaultShowFeedbackIcons:m}){const d=a!==void 0?a:t.showTitleIcon??!1,u=t.iconSlug??c,p=t.showFeedbackIcons??m;return e.jsxs("div",{className:"spark-key-metrics-item",children:[e.jsxs("div",{className:"spark-key-metrics-label-row",children:[d?e.jsx(K,{slug:u,size:"small",className:"spark-key-metrics-title-icon"}):null,e.jsx("p",{className:"spark-key-metrics-label",children:t.title})]}),e.jsxs("div",{className:"spark-key-metrics-value-row",children:[e.jsx("p",{className:"spark-key-metrics-value",children:t.metrics}),p?e.jsx(L,{feedback:"warning",className:"spark-key-metrics-feedback-icon"}):null]})]})}function s({amount:t="3",items:a=T,showTitleIcon:c,iconSlug:m="tag",showFeedbackIcons:d=!0,className:u=""}){const p=a.slice(0,Number(t)),j=["spark-key-metrics",t==="1"?"spark-key-metrics-amount-1":"",t==="3"?"spark-key-metrics-amount-3":"",u].filter(Boolean).join(" ");return e.jsx("div",{className:j,children:p.map((y,M)=>e.jsxs(N.Fragment,{children:[M>0?e.jsx(_,{direction:"vertical",className:"spark-key-metrics-divider"}):null,e.jsx(q,{item:y,defaultShowTitleIcon:c,defaultIconSlug:m,defaultShowFeedbackIcons:d})]},y.title))})}s.__docgenInfo={description:"",methods:[],displayName:"KeyMetrics",props:{amount:{required:!1,tsType:{name:"union",raw:"'1' | '2' | '3'",elements:[{name:"literal",value:"'1'"},{name:"literal",value:"'2'"},{name:"literal",value:"'3'"}]},description:"",defaultValue:{value:"'3'",computed:!1}},items:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: string;
  metrics: string;
  /** Tag icon before the title (Figma: icon / show title icon). */
  showTitleIcon?: boolean;
  /** Which foundation icon to show when \`showTitleIcon\` is true. */
  iconSlug?: KeyMetricsTitleIconSlug;
  /** Warning feedback icon after the metric value (Figma: showFeedbackIcons). */
  showFeedbackIcons?: boolean;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"metrics",value:{name:"string",required:!0}},{key:"showTitleIcon",value:{name:"boolean",required:!1},description:"Tag icon before the title (Figma: icon / show title icon)."},{key:"iconSlug",value:{name:"unknown[number]",raw:"(typeof KEY_METRICS_TITLE_ICON_SLUGS)[number]",required:!1},description:"Which foundation icon to show when `showTitleIcon` is true."},{key:"showFeedbackIcons",value:{name:"boolean",required:!1},description:"Warning feedback icon after the metric value (Figma: showFeedbackIcons)."}]}}],raw:"KeyMetricsItem[]"},description:"",defaultValue:{value:`[
  { title: 'Overview', metrics: '236' },
  { title: 'Labels', metrics: '3' },
  { title: 'Examples', metrics: '14', showTitleIcon: true, iconSlug: 'tag' },
]`,computed:!1}},showTitleIcon:{required:!1,tsType:{name:"boolean"},description:"Master toggle for title icons on every item.\nWhen omitted, each item uses its own `showTitleIcon` (Examples only in default data)."},iconSlug:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof KEY_METRICS_TITLE_ICON_SLUGS)[number]"},description:"Default title icon slug when an item omits `iconSlug`.",defaultValue:{value:"'tag'",computed:!1}},showFeedbackIcons:{required:!1,tsType:{name:"boolean"},description:"Default for all items when an item omits `showFeedbackIcons`.",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const H={title:"Components/Widgets/Key Metrics",component:s,tags:["autodocs"],argTypes:{amount:{control:"select",options:["1","2","3"]},showTitleIcon:{control:"boolean",name:"Show title icon"},iconSlug:{control:"select",name:"Swap title icon",options:[...R]},showFeedbackIcons:{control:"boolean",name:"Show feedback icon"},items:{control:!1}},args:{amount:"3",items:T,iconSlug:"tag",showFeedbackIcons:!0},decorators:[F],parameters:{docs:{description:{component:"Key Metrics widget — horizontal summary card with 1, 2, or 3 metric items separated by vertical dividers. Each item can set `showTitleIcon` (Examples in default data). The **Show title icon** control overrides all items when toggled. Swap the glyph with `iconSlug` and control the metric feedback icon with `showFeedbackIcons`."}}}},C=["1","2","3"],n={},r={render:()=>e.jsx("div",{style:x,children:C.map(t=>e.jsxs("div",{style:o,children:[e.jsx("p",{style:E,children:t}),e.jsx(s,{amount:t})]},t))})},l={render:()=>e.jsxs("div",{style:x,children:[e.jsxs("div",{style:o,children:[e.jsx("p",{style:i,children:"Both icons"}),e.jsx(s,{amount:"1",showTitleIcon:!0,showFeedbackIcons:!0})]}),e.jsxs("div",{style:o,children:[e.jsx("p",{style:i,children:"Title icon only"}),e.jsx(s,{amount:"1",showTitleIcon:!0,showFeedbackIcons:!1})]}),e.jsxs("div",{style:o,children:[e.jsx("p",{style:i,children:"Feedback icon only"}),e.jsx(s,{amount:"1",showTitleIcon:!1,showFeedbackIcons:!0})]}),e.jsxs("div",{style:o,children:[e.jsx("p",{style:i,children:"No icons"}),e.jsx(s,{amount:"1",showTitleIcon:!1,showFeedbackIcons:!1})]}),e.jsxs("div",{style:o,children:[e.jsx("p",{style:i,children:"Swap title icon"}),e.jsx(s,{amount:"1",showTitleIcon:!0,iconSlug:"description",items:[{title:"Documents",metrics:"14"}]})]})]})};var h,w,I;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(I=(w=n.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var v,f,S;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {AMOUNTS.map(amount => <div key={amount} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{amount}</p>
          <KeyMetrics amount={amount} />
        </div>)}
    </div>
}`,...(S=(f=r.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var b,k,g;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStyle}>
        <p style={variantLabelStyle}>Both icons</p>
        <KeyMetrics amount="1" showTitleIcon showFeedbackIcons />
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={variantLabelStyle}>Title icon only</p>
        <KeyMetrics amount="1" showTitleIcon showFeedbackIcons={false} />
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={variantLabelStyle}>Feedback icon only</p>
        <KeyMetrics amount="1" showTitleIcon={false} showFeedbackIcons />
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={variantLabelStyle}>No icons</p>
        <KeyMetrics amount="1" showTitleIcon={false} showFeedbackIcons={false} />
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={variantLabelStyle}>Swap title icon</p>
        <KeyMetrics amount="1" showTitleIcon iconSlug="description" items={[{
        title: 'Documents',
        metrics: '14'
      }]} />
      </div>
    </div>
}`,...(g=(k=l.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};const J=["Default","Amounts","IconMatrix"];export{r as Amounts,n as Default,l as IconMatrix,J as __namedExportsOrder,H as default};
