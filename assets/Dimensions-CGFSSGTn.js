import{j as i}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as c}from"./index-DUy19JZU.js";import{M as l}from"./index-RkjkVMra.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-EWtY0VPn.js";import"./index-BIandHEk.js";import"./index-Brl4xq4Y.js";import"./index-Bhelpi4i.js";function r(s){const n={code:"code",div:"div",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",strong:"strong",ul:"ul",...c(),...s.components};return i.jsxs(i.Fragment,{children:[i.jsx(l,{title:"Foundations/Dimensions"}),`
`,i.jsx(n.h1,{id:"dimensions",children:"Dimensions"}),`
`,i.jsxs(n.p,{children:["Spacing, radius, and line-width tokens from the Figma ",i.jsx(n.strong,{children:"Dimensions"})," collection."]}),`
`,i.jsx(n.h2,{id:"spacing-scale",children:"Spacing scale"}),`
`,i.jsx("div",{className:"spacing-scale",children:[["02","--dimension-spacing-02","2px"],["04","--dimension-spacing-04","4px"],["08","--dimension-spacing-08","8px"],["12","--dimension-spacing-12","12px"],["16","--dimension-spacing-16","16px"],["20","--dimension-spacing-20","20px"],["24","--dimension-spacing-24","24px"],["32","--dimension-spacing-32","32px"],["48","--dimension-spacing-48","48px"],["56","--dimension-spacing-56","56px"]].map(([d,e,o])=>i.jsxs(n.div,{className:"spacing-bar",children:[i.jsx(n.code,{children:e}),i.jsx(n.div,{className:"spacing-bar-fill",style:{width:`var(${e})`}}),i.jsx(n.span,{children:o})]},d))}),`
`,i.jsxs(n.p,{children:["Legacy aliases ",i.jsx(n.code,{children:"--dimension-size-*"}),", ",i.jsx(n.code,{children:"--dimension-space-margin-*"}),", and ",i.jsx(n.code,{children:"--dimension-space-padding-*"})," map to the spacing scale above for existing components."]}),`
`,i.jsx(n.h2,{id:"border-radius",children:"Border radius"}),`
`,i.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"1rem",marginTop:"1rem"},children:[["04","--dimension-border-radius-04"],["06","--dimension-border-radius-06"],["08","--dimension-border-radius-08"],["12","--dimension-border-radius-12"],["24","--dimension-border-radius-24"],["00 (pill)","--dimension-border-radius-00"]].map(([d,e])=>i.jsxs(n.div,{style:{textAlign:"center"},children:[i.jsx(n.div,{className:"radius-preview",style:{borderRadius:`var(${e})`}}),i.jsx(n.code,{children:e})]},d))}),`
`,i.jsx(n.h2,{id:"line-width",children:"Line width"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"--dimension-line-width-subtle"})," — 1px"]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"--dimension-line-width-strong"})," — 1.5px"]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"--dimension-line-width-bold"})," — 2px"]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"--dimension-line-width-focus"})," — 2px (focus ring)"]}),`
`]}),`
`,i.jsx(n.h2,{id:"screen-sizes",children:"Screen sizes"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"--dimension-screen-size-screenxs"})," — 640px"]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"--dimension-screen-size-screensm"})," — 1280px"]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"--dimension-screen-size-screenbase"})," — 1440px"]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"--dimension-screen-size-screenxl"})," — 1600px"]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"--dimension-screen-size-screenxlmax"})," — 1920px"]}),`
`]})]})}function b(s={}){const{wrapper:n}={...c(),...s.components};return n?i.jsx(n,{...s,children:i.jsx(r,{...s})}):r(s)}export{b as default};
