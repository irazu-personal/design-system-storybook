import{j as e}from"./jsx-runtime-BYYWji4R.js";import{s as b,a as v,b as w}from"./storyHelpers-D7QoSJ90.js";import{P as S,a as M}from"./Pagination-y-htr5bZ.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-CdN-AKPT.js";import"./SparkIcon-B877p_59.js";import"./sparkAssetUrl-FWf-EcJv.js";import"./TooltipTrigger-CeqIspS_.js";import"./Tooltip-rWdCQlMf.js";import"./DropdownMenu-DUOhqz4I.js";import"./Dropdown-QqzKQD6W.js";import"./DropdownFooter-BsuM-IbT.js";import"./Checkbox-BvtwKe_o.js";import"./DropdownCheckIcon-DuodM3sj.js";/* empty css                 */import"./ScrollBar-Cp2nGFrO.js";import"./InputMultiSelect-BlksuDW4.js";import"./inputSelect-BHZOiibF.js";import"./Label-TmJXsGIj.js";import"./TagGeneral-C8L_l4ta.js";import"./InputSingleSelect-BLG0v0y4.js";const K={title:"Components/Pagination",component:S,tags:["autodocs"],argTypes:{type:{control:"select",options:["basic","prev-and-next","total-items"]},currentPage:{control:{type:"number",min:1}},totalPages:{control:{type:"number",min:1}}},args:{type:"basic",currentPage:1,totalPages:9,totalItems:296,pageSize:10},parameters:{docs:{description:{component:"Spark Pagination — **basic** numbered pages, **prev-and-next** with page numbers, and **total-items** with range summary and page-size selector. Includes **View More** for incremental loading."}}}},h=["basic","prev-and-next","total-items"],t={},r={parameters:{docs:{description:{story:"Figma `778:67625` — basic, prev-and-next, and total-items layouts."}}},render:()=>e.jsx("div",{style:b,children:h.map(s=>e.jsxs("div",{style:v,children:[e.jsx("p",{style:w,children:s}),e.jsx(S,{type:s,currentPage:1})]},s))})},a={args:{currentPage:3}},o={render:()=>e.jsx(M,{}),parameters:{docs:{description:{story:"Figma `779:67870` — horizontal summary with View More and scroll-up icon button."}}}};var n,i,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Figma \`778:67625\` — basic, prev-and-next, and total-items layouts.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {TYPES.map(type => <div key={type} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{type}</p>
          <Pagination type={type} currentPage={1} />
        </div>)}
    </div>
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,u,y;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    currentPage: 3
  }
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var g,x,P;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <PaginationViewMore />,
  parameters: {
    docs: {
      description: {
        story: 'Figma \`779:67870\` — horizontal summary with View More and scroll-up icon button.'
      }
    }
  }
}`,...(P=(x=o.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};const N=["Default","TypeMatrix","ActivePage","ViewMore"];export{a as ActivePage,t as Default,r as TypeMatrix,o as ViewMore,N as __namedExportsOrder,K as default};
