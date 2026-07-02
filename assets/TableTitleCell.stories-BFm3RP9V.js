import{j as t}from"./jsx-runtime-BYYWji4R.js";import{s as i,v as a,a as f}from"./storyHelpers-D7QoSJ90.js";import{T as y}from"./TableTitleCell-xg-nPQhw.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Checkbox-BvtwKe_o.js";import"./SparkIcon-B877p_59.js";import"./sparkAssetUrl-FWf-EcJv.js";import"./tableFields-CHegSlow.js";import"./DropdownMenu-DUOhqz4I.js";import"./Dropdown-QqzKQD6W.js";import"./DropdownFooter-BsuM-IbT.js";import"./DropdownCheckIcon-DuodM3sj.js";/* empty css                 */import"./Button-CdN-AKPT.js";import"./TooltipTrigger-CeqIspS_.js";import"./Tooltip-rWdCQlMf.js";import"./ScrollBar-Cp2nGFrO.js";import"./InputMultiSelect-BlksuDW4.js";import"./inputSelect-BHZOiibF.js";import"./Label-TmJXsGIj.js";import"./TagGeneral-C8L_l4ta.js";import"./InputSingleSelect-BLG0v0y4.js";const x=["space","primary","sort-up","sort-down","checkbox","chevron","input-dropdown"],T=["default","right"],q={title:"Components/Table/Title Cell",component:y,tags:["autodocs"],argTypes:{type:{control:"select",options:x},borders:{control:"select",options:T},infoIcon:{control:"boolean"},sortIcon:{control:"boolean"},title:{control:"text"},dropdownText:{control:"text"}},args:{type:"primary",borders:"default",title:"TITLE",infoIcon:!1,sortIcon:!1}},e={render:()=>t.jsx("div",{style:i,children:T.map(r=>t.jsxs("div",{style:i,children:[t.jsxs("p",{style:a,children:["borders: ",r]}),x.map(s=>t.jsxs("div",{style:f,children:[t.jsx("p",{style:a,children:s}),t.jsx("div",{style:{flex:"1 1 360px",maxWidth:400},children:t.jsx(y,{type:s,borders:r,infoIcon:!1,sortIcon:!1})})]},`${r}-${s}`))]},r))})},o={};var n,l,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {TITLE_CELL_BORDERS.map(borders => <div key={borders} style={storyMatrixSectionStyle}>
          <p style={variantLabelStyle}>borders: {borders}</p>
          {TITLE_CELL_TYPES.map(type => <div key={\`\${borders}-\${type}\`} style={storyMatrixItemRowStyle}>
              <p style={variantLabelStyle}>{type}</p>
              <div style={{
          flex: '1 1 360px',
          maxWidth: 400
        }}>
                <TableTitleCell type={type} borders={borders} infoIcon={false} sortIcon={false} />
              </div>
            </div>)}
        </div>)}
    </div>
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,c,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const z=["Matrix","Primary"];export{e as Matrix,o as Primary,z as __namedExportsOrder,q as default};
