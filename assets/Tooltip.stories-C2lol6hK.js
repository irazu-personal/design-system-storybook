import{j as t}from"./jsx-runtime-BYYWji4R.js";import{B as D}from"./Button-CdN-AKPT.js";import{T as a}from"./Tooltip-rWdCQlMf.js";import{T as w}from"./TooltipTrigger-CeqIspS_.js";import{s as j,a as M,b as I}from"./storyHelpers-D7QoSJ90.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./SparkIcon-B877p_59.js";import"./sparkAssetUrl-FWf-EcJv.js";const H={title:"Components/Tooltip",component:a,tags:["autodocs"],argTypes:{type:{control:"select",options:["text","slot"]},tipDirection:{control:"select",options:["no-tip","top-center","top-left","top-right","bottom-center","bottom-left","bottom-right","left-center","right-center"]},children:{control:!1}},args:{type:"text",tipDirection:"no-tip"},parameters:{docs:{description:{component:"Spark Tooltip — contextual information on hover or focus. Supports text and slot content with optional directional tips. Use `TooltipTrigger` for icon-only controls (4px gap via `--dimension-spacing-04`)."}}}},O=["no-tip","top-center","top-left","top-right","bottom-center","bottom-left","bottom-right","left-center","right-center"],E=t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",minHeight:48,background:"rgba(255, 255, 255, 0.12)",borderRadius:"var(--dimension-border-radius-04)",color:"var(--semantic-content-inverse)",fontSize:"var(--typography-font-size-base)",lineHeight:"var(--typography-line-height-base)"},children:"Slot"}),o={},r={args:{tipDirection:"top-center"}},i={parameters:{docs:{description:{story:"Slot type renders custom children instead of the text prop."}}},render:()=>t.jsx(a,{type:"slot",children:E})},s={render:()=>t.jsx("div",{style:j,children:O.filter(e=>e!=="no-tip").map(e=>t.jsxs("div",{style:M,children:[t.jsx("p",{style:I,children:e}),t.jsx(a,{tipDirection:e,text:"Tooltip text"})]},e))})},n={parameters:{docs:{description:{story:"TooltipTrigger wraps a single focusable child and shows the tooltip on hover and focus-within. Gap between trigger and panel is 4px (`--dimension-spacing-04`), excluding the 6px arrow."}}},render:()=>t.jsx("div",{style:{padding:"48px 24px"},children:t.jsx(w,{text:"More actions",children:t.jsx(D,{variant:"ghost","aria-label":"More actions",iconSlug:"dots"})})})};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,m,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    tipDirection: 'top-center'
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,x,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Slot type renders custom children instead of the text prop.'
      }
    }
  },
  render: () => <Tooltip type="slot">{SLOT_DEMO}</Tooltip>
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var u,T,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {TIP_DIRECTIONS.filter(d => d !== 'no-tip').map(tipDirection => <div key={tipDirection} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{tipDirection}</p>
          <Tooltip tipDirection={tipDirection} text="Tooltip text" />
        </div>)}
    </div>
}`,...(f=(T=s.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var S,b,v;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'TooltipTrigger wraps a single focusable child and shows the tooltip on hover and focus-within. Gap between trigger and panel is 4px (\`--dimension-spacing-04\`), excluding the 6px arrow.'
      }
    }
  },
  render: () => <div style={{
    padding: '48px 24px'
  }}>
      <TooltipTrigger text="More actions">
        <Button variant="ghost" aria-label="More actions" iconSlug="dots" />
      </TooltipTrigger>
    </div>
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const N=["Default","WithTip","SlotType","TipDirections","WithTrigger"];export{o as Default,i as SlotType,s as TipDirections,r as WithTip,n as WithTrigger,N as __namedExportsOrder,H as default};
