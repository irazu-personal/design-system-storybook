import{j as e}from"./jsx-runtime-BYYWji4R.js";import{h as M,s as x,f as l,b as n,v as w}from"./storyHelpers-D7QoSJ90.js";import{A as r}from"./LineChart-CIk3S4br.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./GraphChartParts-BUSdgGli.js";import"./Button-CdN-AKPT.js";import"./SparkIcon-B877p_59.js";import"./sparkAssetUrl-FWf-EcJv.js";import"./TooltipTrigger-CeqIspS_.js";import"./Tooltip-rWdCQlMf.js";import"./GraphHoverLayer-DrlKHWix.js";const G={title:"Components/Graphs/Area Chart",component:r,tags:["autodocs"],argTypes:{theme:{control:"select",options:["multi-color","single-color"]},axes:{control:"select",options:["shown","hidden"]},xAxisTitle:{control:"boolean"},xAxisTitleText:{control:"text"}},args:{theme:"multi-color",axes:"shown",xAxisTitle:!0,xAxisTitleText:"Text"},decorators:[M],parameters:{docs:{description:{component:"Area Chart — volume and trends with filled areas emphasizing cumulative values over time."}}}},f=["multi-color","single-color"],g=["shown","hidden"],s={},a={render:()=>e.jsx("div",{style:x,children:f.map(t=>e.jsxs("div",{style:l,children:[e.jsx("p",{style:w,children:t.replace("-"," ")}),e.jsx(r,{theme:t})]},t))})},i={render:()=>e.jsx("div",{style:x,children:g.map(t=>e.jsxs("div",{style:l,children:[e.jsx("p",{style:n,children:t}),e.jsx(r,{axes:t})]},t))})},o={render:()=>e.jsxs("div",{style:x,children:[e.jsxs("div",{style:l,children:[e.jsx("p",{style:n,children:"shown"}),e.jsx(r,{xAxisTitle:!0,xAxisTitleText:"Text"})]}),e.jsxs("div",{style:l,children:[e.jsx("p",{style:n,children:"hidden"}),e.jsx(r,{xAxisTitle:!1})]})]})};var c,d,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,y,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {THEMES.map(theme => <div key={theme} style={storyMatrixItemRowStartStyle}>
          <p style={variantLabelStyle}>{theme.replace('-', ' ')}</p>
          <AreaChart theme={theme} />
        </div>)}
    </div>
}`,...(h=(y=a.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var S,v,u;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {AXES.map(axes => <div key={axes} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{axes}</p>
          <AreaChart axes={axes} />
        </div>)}
    </div>
}`,...(u=(v=i.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var A,T,j;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>shown</p>
        <AreaChart xAxisTitle xAxisTitleText="Text" />
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>hidden</p>
        <AreaChart xAxisTitle={false} />
      </div>
    </div>
}`,...(j=(T=o.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const O=["Default","ThemeMatrix","AxesMatrix","XAxisTitleMatrix"];export{i as AxesMatrix,s as Default,a as ThemeMatrix,o as XAxisTitleMatrix,O as __namedExportsOrder,G as default};
