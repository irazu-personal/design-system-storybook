import{j as e}from"./jsx-runtime-BYYWji4R.js";import{s as n,f as W,b as m,g as p,a as R}from"./storyHelpers-D7QoSJ90.js";import{S as s}from"./Search-BqI_KQCo.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./TooltipTrigger-CeqIspS_.js";import"./Tooltip-rWdCQlMf.js";/* empty css              */import"./SparkIcon-B877p_59.js";import"./sparkAssetUrl-FWf-EcJv.js";import"./TagGeneral-C8L_l4ta.js";const C=["Tag","Tag","Tag","Tag"],X={title:"Components/Search",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"]},fill:{control:"select",options:["empty","filled"]},multiSelect:{control:"boolean"},visualState:{control:"select",options:["default","hover","click-on","disabled"]}},args:{size:"medium",placeholder:"Search",multiSelect:!1},parameters:{docs:{description:{component:"Spark Search — keyword filter field with search icon on the right. **small** (28px), **medium** (36px), and **large** (40px). Filled single-select shows the Input Close Button (`231:4472`); multi-select uses **Tag General** default tags."}}}},D=["small","medium","large"],_=["default","hover","click-on","disabled"],q=["empty","filled"],r={},l={args:{defaultValue:"Search query",fill:"filled"}},a={args:{multiSelect:!0,tags:C,overflowCount:1,fill:"filled"}},i={render:()=>e.jsx("div",{style:n,children:D.map(t=>e.jsxs("div",{style:R,children:[e.jsx("p",{style:m,children:t}),e.jsx("div",{style:p,children:e.jsx(s,{size:t})})]},t))})},o={render:()=>e.jsx("div",{style:n,children:q.map(t=>e.jsxs("div",{style:W,children:[e.jsx("p",{style:m,children:t}),e.jsx("div",{style:p,children:e.jsx(s,{fill:t,defaultValue:t==="filled"?"Search query":void 0})})]},t))})},c={parameters:{docs:{description:{story:"Interaction states at medium size — default, hover, click-on (focused), and disabled."}}},render:()=>e.jsx("div",{style:n,children:_.map(t=>e.jsxs("div",{style:W,children:[e.jsx("p",{style:m,children:t==="click-on"?"click-on":t}),e.jsx("div",{style:p,children:e.jsx(s,{defaultValue:"Search",fill:"filled",visualState:t,disabled:t==="disabled",showFocus:t==="click-on"})})]},t))})},d={parameters:{docs:{description:{story:"Size × fill matrix from Figma — plain search and multi-select tags at each size."}}},render:()=>e.jsx("div",{style:n,children:D.map(t=>e.jsxs("div",{style:R,children:[e.jsx("p",{style:m,children:t}),e.jsxs("div",{className:"story-row",style:{gap:"1rem",flexWrap:"wrap"},children:[e.jsx(s,{size:t,fill:"empty"}),e.jsx(s,{size:t,multiSelect:!0,tags:C,overflowCount:1,fill:"filled"})]})]},t))})};var y,S,u;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(u=(S=r.parameters)==null?void 0:S.docs)==null?void 0:u.source}}};var f,x,h;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Search query',
    fill: 'filled'
  }
}`,...(h=(x=l.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var v,g,z;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    multiSelect: true,
    tags: DEFAULT_TAGS,
    overflowCount: 1,
    fill: 'filled'
  }
}`,...(z=(g=a.parameters)==null?void 0:g.docs)==null?void 0:z.source}}};var j,M,w;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {SIZES.map(size => <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <Search size={size} />
          </div>
        </div>)}
    </div>
}`,...(w=(M=i.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var T,k,F;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {FILLS.map(fill => <div key={fill} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{fill}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <Search fill={fill} defaultValue={fill === 'filled' ? 'Search query' : undefined} />
          </div>
        </div>)}
    </div>
}`,...(F=(k=o.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var b,I,L;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Interaction states at medium size — default, hover, click-on (focused), and disabled.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {STATES.map(visualState => <div key={visualState} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{visualState === 'click-on' ? 'click-on' : visualState}</p>
          <div style={storyMatrixFieldWrapStyle}>
            <Search defaultValue="Search" fill="filled" visualState={visualState} disabled={visualState === 'disabled'} showFocus={visualState === 'click-on'} />
          </div>
        </div>)}
    </div>
}`,...(L=(I=c.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var E,A,V;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Size × fill matrix from Figma — plain search and multi-select tags at each size.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {SIZES.map(size => <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <div className="story-row" style={{
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
            <Search size={size} fill="empty" />
            <Search size={size} multiSelect tags={DEFAULT_TAGS} overflowCount={1} fill="filled" />
          </div>
        </div>)}
    </div>
}`,...(V=(A=d.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};const Y=["Default","WithValue","MultiSelect","Sizes","FillTypes","StateMatrix","SizeStateMatrix"];export{r as Default,o as FillTypes,a as MultiSelect,d as SizeStateMatrix,i as Sizes,c as StateMatrix,l as WithValue,Y as __namedExportsOrder,X as default};
