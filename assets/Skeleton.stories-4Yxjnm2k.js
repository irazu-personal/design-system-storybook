import{j as e}from"./jsx-runtime-BYYWji4R.js";import{S as g,a as k,b as T}from"./Skeleton-AtzAHgKf.js";import{s as j,a as v,b as f}from"./storyHelpers-D7QoSJ90.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const R={title:"Components/Skeleton",component:g,tags:["autodocs"],argTypes:{shapeType:{control:"select",options:["circle","rectangle","h1","h2","paragraph"]}},args:{shapeType:"paragraph"},parameters:{docs:{description:{component:"Spark Skeleton — loading placeholders with shimmer animation. Use shapes to mimic avatars, images, headings, and text blocks."}}}},P=["circle","rectangle","h1","h2","paragraph"],r={},s={render:()=>e.jsx("div",{style:j,children:P.map(o=>e.jsxs("div",{style:v,children:[e.jsx("p",{style:f,children:o}),e.jsx(g,{shapeType:o})]},o))})},t={render:()=>e.jsx(T,{})},a={render:()=>e.jsx(k,{})};var n,p,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var l,i,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {SHAPES.map(shapeType => <div key={shapeType} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{shapeType}</p>
          <Skeleton shapeType={shapeType} />
        </div>)}
    </div>
}`,...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,S,y;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <SkeletonText />
}`,...(y=(S=t.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var h,x,u;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <SkeletonCard />
}`,...(u=(x=a.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const z=["Default","Shapes","SkeletonTextPreset","SkeletonCardPreset"];export{r as Default,s as Shapes,a as SkeletonCardPreset,t as SkeletonTextPreset,z as __namedExportsOrder,R as default};
