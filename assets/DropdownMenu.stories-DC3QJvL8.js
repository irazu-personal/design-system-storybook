import{j as t}from"./jsx-runtime-BYYWji4R.js";import{s as I,f as C,b as E}from"./storyHelpers-D7QoSJ90.js";import{D as p}from"./DropdownMenu-DUOhqz4I.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Dropdown-QqzKQD6W.js";import"./DropdownFooter-BsuM-IbT.js";import"./SparkIcon-B877p_59.js";import"./sparkAssetUrl-FWf-EcJv.js";import"./Checkbox-BvtwKe_o.js";import"./DropdownCheckIcon-DuodM3sj.js";/* empty css                 */import"./Button-CdN-AKPT.js";import"./TooltipTrigger-CeqIspS_.js";import"./Tooltip-rWdCQlMf.js";import"./ScrollBar-Cp2nGFrO.js";import"./InputMultiSelect-BlksuDW4.js";import"./inputSelect-BHZOiibF.js";import"./Label-TmJXsGIj.js";import"./TagGeneral-C8L_l4ta.js";import"./InputSingleSelect-BLG0v0y4.js";const D=Array.from({length:4},()=>({label:"Dropdown item text"})),N={title:"Components/Dropdown Menu",component:p,tags:["autodocs"],argTypes:{open:{control:"boolean"},size:{control:"select",options:["small","medium"]},selectType:{control:"select",options:["single-select","multi-select"]},showLabel:{control:"boolean"},showFooter:{control:"boolean"}},args:{open:!0,size:"medium",selectType:"single-select",showLabel:!0,showFooter:!1,items:D},parameters:{docs:{description:{component:"Spark Dropdown Menu — `InputSingleSelect` or `InputMultiSelect` trigger with the Dropdown panel. Click the field or chevron to toggle open/closed. Figma `821:103642`."}}}},z=["small","medium"],b=["single-select","multi-select"],s={},r={args:{open:!1}},n={args:{open:void 0,defaultOpen:!1},argTypes:{open:{control:!1}}},a={args:{open:!0,selectType:"multi-select",tags:["Tag","Tag","Tag"],overflowCount:2}},l={parameters:{docs:{description:{story:"Figma `821:103642` — open/closed × size × select type."}}},render:()=>t.jsx("div",{style:{...I,gap:"32px"},children:b.map(e=>z.map(o=>t.jsxs("div",{style:C,children:[t.jsxs("p",{style:E,children:[e," / ",o]}),t.jsxs("div",{style:{display:"flex",gap:"32px",flexWrap:"wrap"},children:[t.jsx(p,{open:!1,size:o,selectType:e,text:e==="single-select"?"Input":void 0,tags:e==="multi-select"?["Tag","Tag"]:[],overflowCount:e==="multi-select"?2:0}),t.jsx(p,{open:!0,size:o,selectType:e,text:e==="single-select"?"Input":void 0,tags:e==="multi-select"?["Tag","Tag"]:[],overflowCount:e==="multi-select"?2:0})]})]},`${e}-${o}`)))})};var i,c,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,u,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    open: false
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,f,T;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    open: undefined,
    defaultOpen: false
  },
  argTypes: {
    open: {
      control: false
    }
  }
}`,...(T=(f=n.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var S,x,w;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    open: true,
    selectType: 'multi-select',
    tags: ['Tag', 'Tag', 'Tag'],
    overflowCount: 2
  }
}`,...(w=(x=a.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var v,M,h;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Figma \`821:103642\` — open/closed × size × select type.'
      }
    }
  },
  render: () => <div style={{
    ...storyMatrixSectionStyle,
    gap: '32px'
  }}>
      {SELECT_TYPES.map(selectType => SIZES.map(size => <div key={\`\${selectType}-\${size}\`} style={storyMatrixItemRowStartStyle}>
            <p style={sizeLabelStyle}>
              {selectType} / {size}
            </p>
            <div style={{
        display: 'flex',
        gap: '32px',
        flexWrap: 'wrap'
      }}>
              <DropdownMenu open={false} size={size} selectType={selectType} text={selectType === 'single-select' ? 'Input' : undefined} tags={selectType === 'multi-select' ? ['Tag', 'Tag'] : []} overflowCount={selectType === 'multi-select' ? 2 : 0} />
              <DropdownMenu open size={size} selectType={selectType} text={selectType === 'single-select' ? 'Input' : undefined} tags={selectType === 'multi-select' ? ['Tag', 'Tag'] : []} overflowCount={selectType === 'multi-select' ? 2 : 0} />
            </div>
          </div>))}
    </div>
}`,...(h=(M=l.parameters)==null?void 0:M.docs)==null?void 0:h.source}}};const Q=["Default","Closed","Interactive","MultiSelectOpen","VariantMatrix"];export{r as Closed,s as Default,n as Interactive,a as MultiSelectOpen,l as VariantMatrix,Q as __namedExportsOrder,N as default};
