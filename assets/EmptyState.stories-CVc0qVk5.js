import{j as t}from"./jsx-runtime-BYYWji4R.js";import{s as I,a as j,b as C}from"./storyHelpers-D7QoSJ90.js";import{E as T}from"./EmptyState-CuSzBGXt.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-CdN-AKPT.js";import"./SparkIcon-B877p_59.js";import"./sparkAssetUrl-FWf-EcJv.js";import"./TooltipTrigger-CeqIspS_.js";import"./Tooltip-rWdCQlMf.js";const _={title:"Components/Empty State",component:T,tags:["autodocs"],argTypes:{direction:{control:"select",options:["vertical","horizontal"]},size:{control:"select",options:["medium","small"]},showSubtitle:{control:"boolean"},showMainButton:{control:"boolean"}},args:{title:"Title",subtitle:"Subtitle",direction:"vertical",size:"medium",showSubtitle:!0,showMainButton:!1,ctaLabel:"CTA"},parameters:{docs:{description:{component:"Spark Empty State — explains when no data or content is available. Supports vertical and horizontal layouts with optional subtitle and CTA."}}}},D=["vertical","horizontal"],O=["medium","small"],e={},r={args:{showMainButton:!0}},o={args:{showSubtitle:!1,showMainButton:!1}},s={args:{direction:"horizontal",showMainButton:!0}},a={args:{size:"small",showMainButton:!0}},i={parameters:{docs:{description:{story:"Direction × size matrix from Figma — **medium** and **small** for **vertical** and **horizontal** layouts."}}},render:()=>t.jsx("div",{style:I,children:D.map(n=>t.jsxs("div",{style:j,children:[t.jsx("p",{style:C,children:n}),t.jsx("div",{className:"story-row",children:O.map(l=>t.jsx(T,{title:"Title",subtitle:"Subtitle",direction:n,size:l},l))})]},n))})};var c,m,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,u,S;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    showMainButton: true
  }
}`,...(S=(u=r.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var y,h,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    showSubtitle: false,
    showMainButton: false
  }
}`,...(w=(h=o.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var z,g,b;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    showMainButton: true
  }
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,x,f;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 'small',
    showMainButton: true
  }
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var M,E,B;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Direction × size matrix from Figma — **medium** and **small** for **vertical** and **horizontal** layouts.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {DIRECTIONS.map(direction => <div key={direction} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{direction}</p>
          <div className="story-row">
            {SIZES.map(size => <EmptyState key={size} title="Title" subtitle="Subtitle" direction={direction} size={size} />)}
          </div>
        </div>)}
    </div>
}`,...(B=(E=i.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};const q=["Default","WithCta","TitleOnly","Horizontal","Small","Variants"];export{e as Default,s as Horizontal,a as Small,o as TitleOnly,i as Variants,r as WithCta,q as __namedExportsOrder,_ as default};
