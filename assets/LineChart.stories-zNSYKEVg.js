import{j as e}from"./jsx-runtime-BYYWji4R.js";import{h as A,s as x,f as l,b as n,v as L}from"./storyHelpers-D7QoSJ90.js";import{L as s}from"./LineChart-CIk3S4br.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./GraphChartParts-BUSdgGli.js";import"./Button-CdN-AKPT.js";import"./SparkIcon-B877p_59.js";import"./sparkAssetUrl-FWf-EcJv.js";import"./TooltipTrigger-CeqIspS_.js";import"./Tooltip-rWdCQlMf.js";import"./GraphHoverLayer-DrlKHWix.js";const G={title:"Components/Graphs/Line Chart",component:s,tags:["autodocs"],argTypes:{theme:{control:"select",options:["multi-color","single-color"]},axes:{control:"select",options:["shown","hidden"]},xAxisTitle:{control:"boolean"},xAxisTitleText:{control:"text"}},args:{theme:"multi-color",axes:"shown",xAxisTitle:!0,xAxisTitleText:"Text"},decorators:[A],parameters:{docs:{description:{component:"Line Chart — trends over time with multi- or single-color series. Toggle axes for full grid context or a minimalist data shape."}}}},g=["multi-color","single-color"],f=["shown","hidden"],r={},i={render:()=>e.jsx("div",{style:x,children:g.map(t=>e.jsxs("div",{style:l,children:[e.jsx("p",{style:L,children:t.replace("-"," ")}),e.jsx(s,{theme:t})]},t))})},o={render:()=>e.jsx("div",{style:x,children:f.map(t=>e.jsxs("div",{style:l,children:[e.jsx("p",{style:n,children:t}),e.jsx(s,{axes:t})]},t))})},a={render:()=>e.jsxs("div",{style:x,children:[e.jsxs("div",{style:l,children:[e.jsx("p",{style:n,children:"shown"}),e.jsx(s,{xAxisTitle:!0,xAxisTitleText:"Threshold"})]}),e.jsxs("div",{style:l,children:[e.jsx("p",{style:n,children:"hidden"}),e.jsx(s,{xAxisTitle:!1})]})]})};var d,c,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,y,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {THEMES.map(theme => <div key={theme} style={storyMatrixItemRowStartStyle}>
          <p style={variantLabelStyle}>{theme.replace('-', ' ')}</p>
          <LineChart theme={theme} />
        </div>)}
    </div>
}`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var S,v,T;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {AXES.map(axes => <div key={axes} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{axes}</p>
          <LineChart axes={axes} />
        </div>)}
    </div>
}`,...(T=(v=o.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var u,j,M;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>shown</p>
        <LineChart xAxisTitle xAxisTitleText="Threshold" />
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>hidden</p>
        <LineChart xAxisTitle={false} />
      </div>
    </div>
}`,...(M=(j=a.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};const O=["Default","ThemeMatrix","AxesMatrix","XAxisTitleMatrix"];export{o as AxesMatrix,r as Default,i as ThemeMatrix,a as XAxisTitleMatrix,O as __namedExportsOrder,G as default};
