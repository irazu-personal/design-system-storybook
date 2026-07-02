import{j as e}from"./jsx-runtime-BYYWji4R.js";import{s as y,f as h,v as w,b as pe}from"./storyHelpers-D7QoSJ90.js";import{P as fe}from"./Pagination-y-htr5bZ.js";import{u as he,T as ye,a as we,b as be,t as Te,D as s,c as ve,d as a,H as v}from"./tableShared-nLh1TdQi.js";import{T as $}from"./TableToolbar-D7LzxCjJ.js";import"./TableTitleCell-xg-nPQhw.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-CdN-AKPT.js";import"./SparkIcon-B877p_59.js";import"./sparkAssetUrl-FWf-EcJv.js";import"./TooltipTrigger-CeqIspS_.js";import"./Tooltip-rWdCQlMf.js";import"./DropdownMenu-DUOhqz4I.js";import"./Dropdown-QqzKQD6W.js";import"./DropdownFooter-BsuM-IbT.js";import"./Checkbox-BvtwKe_o.js";import"./DropdownCheckIcon-DuodM3sj.js";/* empty css                 */import"./ScrollBar-Cp2nGFrO.js";import"./InputMultiSelect-BlksuDW4.js";import"./inputSelect-BHZOiibF.js";import"./Label-TmJXsGIj.js";import"./TagGeneral-C8L_l4ta.js";import"./InputSingleSelect-BLG0v0y4.js";import"./Search-BqI_KQCo.js";/* empty css              */import"./SegmentedControlIcon-Dh-7pulQ.js";import"./tableFields-CHegSlow.js";import"./Skeleton-AtzAHgKf.js";import"./Notification-SiXGWFHx.js";import"./OutlineFeedbackIcon-CpglJw42.js";/* empty css                      */import"./Divider-dL0nXNxx.js";import"./TagPill-BSgwlJyo.js";function r({tableView:t="yes",outerBorder:o="yes",innerBorder:b="no",size:Y="medium",showToolbar:Z=!0,showMasterRow:G=!0,showPagination:J=!0,toolbarType:T="with-title",title:K="Title",subtitle:Q="Subtitle",showNotification:X=!1,showTitle:ee,showItems:te=!0,showSubtitle:ae=!1,showInfoIconTitle:se=!0,showInfoIconSubtitle:oe=!0,showRightContent:re=!0,search:le=!0,dropdown:ie=!0,selectedCount:ne=1,totalCount:de=10,className:ue=""}){const ce=ee??T==="filter-with-tags",l=he(s.length),me=["spark-table",t==="no"?"spark-table-view-no":"",ue].filter(Boolean).join(" ");return e.jsxs("div",{className:me,children:[G?e.jsx(ye,{}):null,e.jsxs("div",{className:"spark-table-shell",children:[Z?e.jsx($,{itemsType:T,title:K,subtitle:Q,showNotification:X,showTitle:ce,showItems:te,showSubtitle:ae,showInfoIconTitle:se,showInfoIconSubtitle:oe,showRightContent:re,search:le,dropdown:ie,selectedCount:ne,totalCount:de}):null,e.jsx("div",{className:Te({size:Y,innerBorder:b,outerBorder:o}),children:e.jsxs("div",{className:"spark-table-grid",role:"table",children:[e.jsx(we,{innerBorder:b,headerCheckboxStatus:l.headerCheckboxStatus,onHeaderCheckboxChange:l.onHeaderCheckboxChange}),e.jsx(be,{rowChecked:l.rowChecked,onRowCheckboxChange:l.onRowCheckboxChange})]})})]}),J&&t==="yes"?e.jsx("div",{className:"spark-table-pagination-wrap",children:e.jsx(fe,{type:"total-items",currentPage:1,totalPages:33,totalItems:296,pageSize:10})}):null]})}r.__docgenInfo={description:"",methods:[],displayName:"Table",props:{tableView:{required:!1,tsType:{name:"union",raw:"'yes' | 'no'",elements:[{name:"literal",value:"'yes'"},{name:"literal",value:"'no'"}]},description:"",defaultValue:{value:"'yes'",computed:!1}},outerBorder:{required:!1,tsType:{name:"union",raw:"'yes' | 'no'",elements:[{name:"literal",value:"'yes'"},{name:"literal",value:"'no'"}]},description:"",defaultValue:{value:"'yes'",computed:!1}},innerBorder:{required:!1,tsType:{name:"union",raw:"'yes' | 'no'",elements:[{name:"literal",value:"'yes'"},{name:"literal",value:"'no'"}]},description:"",defaultValue:{value:"'no'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},showToolbar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showMasterRow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showPagination:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},toolbarType:{required:!1,tsType:{name:"TableToolbarItemsType"},description:"",defaultValue:{value:"'with-title'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Title'",computed:!1}},subtitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Subtitle'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},showNotification:{defaultValue:{value:"false",computed:!1},required:!1},showItems:{defaultValue:{value:"true",computed:!1},required:!1},showSubtitle:{defaultValue:{value:"false",computed:!1},required:!1},showInfoIconTitle:{defaultValue:{value:"true",computed:!1},required:!1},showInfoIconSubtitle:{defaultValue:{value:"true",computed:!1},required:!1},showRightContent:{defaultValue:{value:"true",computed:!1},required:!1},search:{defaultValue:{value:"true",computed:!1},required:!1},dropdown:{defaultValue:{value:"true",computed:!1},required:!1},selectedCount:{defaultValue:{value:"1",computed:!1},required:!1},totalCount:{defaultValue:{value:"10",computed:!1},required:!1}}};const U=["with-title","no-title","actions-toolbar","filter-with-tags"],lt={title:"Components/Table",component:r,tags:["autodocs"],argTypes:{tableView:{control:"select",options:["yes","no"]},outerBorder:{control:"select",options:["yes","no"]},innerBorder:{control:"select",options:["yes","no"]},size:{control:"select",options:["medium","small"]},toolbarType:{control:"select",options:U},showNotification:{control:"boolean"},showTitle:{control:"boolean"},showItems:{control:"boolean"}},args:{tableView:"yes",outerBorder:"yes",innerBorder:"no",size:"medium",showToolbar:!0,showNotification:!1,showTitle:!1,showItems:!0,showMasterRow:!0,showPagination:!0,toolbarType:"with-title",showSubtitle:!1},parameters:{layout:"fullscreen",docs:{description:{component:"Spark Table Rows — high-density data grid with toolbar, optional notification, filter tags, and pagination. Toggle outer/inner borders when nesting in cards."}}},decorators:[t=>e.jsx("div",{style:{background:"var(--semantic-surface-canvas)",padding:"1.5rem",minHeight:"100%"},children:e.jsx(t,{})})]},xe=["yes","no"],Se=["yes","no"],ge=["medium","small"],i={render:()=>e.jsx("div",{style:y,children:xe.map(t=>Se.map(o=>e.jsxs("div",{style:h,children:[e.jsxs("p",{style:w,children:[t," / ",o]}),e.jsx(r,{outerBorder:t,innerBorder:o,showMasterRow:!1,showNotification:!1})]},`${t}-${o}`)))})},n={},d={args:{toolbarType:"filter-with-tags",showTitle:!0}},Re=["default","hover","disabled"],u={parameters:{docs:{description:{story:"Figma table body row states — default rows are interactive (hover on pointer). Static matrices show hover and disabled."}}},render:()=>e.jsx("div",{style:y,children:Re.map(t=>e.jsxs("div",{style:h,children:[e.jsx("p",{style:w,children:t}),e.jsx("div",{style:{width:"100%",maxWidth:1350},children:e.jsxs(ve,{state:t,children:[e.jsx(a,{kind:"checkbox",label:s[0].title}),e.jsx(a,{kind:"link",label:s[0].title,subtitle:s[0].subtitle}),e.jsx(a,{kind:"text",label:v}),e.jsx(a,{kind:"text",label:s[0].title,count:s[0].count}),e.jsx(a,{kind:"text",label:v}),e.jsx(a,{kind:"actions"})]})})]},t))})},c={render:()=>e.jsx("div",{style:y,children:ge.map(t=>e.jsxs("div",{style:h,children:[e.jsx("p",{style:pe,children:t}),e.jsx(r,{size:t,showMasterRow:!1,showNotification:!1})]},t))})},m={render:()=>e.jsx($,{showNotification:!0,showTitle:!0,showItems:!0,itemsType:"filter-with-tags",showSubtitle:!1})},p={args:{tableView:"no"}},f={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:U.map(t=>e.jsxs("div",{style:h,children:[e.jsx("p",{style:w,children:t}),e.jsx(r,{toolbarType:t,showTitle:t==="filter-with-tags",showMasterRow:!1,showNotification:!1,showPagination:!1})]},t))})};var x,S,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {OUTER_BORDER.map(outerBorder => INNER_BORDER.map(innerBorder => <div key={\`\${outerBorder}-\${innerBorder}\`} style={storyMatrixItemRowStartStyle}>
            <p style={variantLabelStyle}>
              {outerBorder} / {innerBorder}
            </p>
            <Table outerBorder={outerBorder} innerBorder={innerBorder} showMasterRow={false} showNotification={false} />
          </div>))}
    </div>
}`,...(g=(S=i.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var R,j,k;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:"{}",...(k=(j=n.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var E,C,O;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    toolbarType: 'filter-with-tags',
    showTitle: true
  }
}`,...(O=(C=d.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var M,V,I;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Figma table body row states — default rows are interactive (hover on pointer). Static matrices show hover and disabled.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {ROW_STATES.map(state => <div key={state} style={storyMatrixItemRowStartStyle}>
          <p style={variantLabelStyle}>{state}</p>
          <div style={{
        width: '100%',
        maxWidth: 1350
      }}>
            <TableDataRow state={state}>
              <TableCell kind="checkbox" label={DEMO_ROWS[0].title} />
              <TableCell kind="link" label={DEMO_ROWS[0].title} subtitle={DEMO_ROWS[0].subtitle} />
              <TableCell kind="text" label={HEADER_TITLE} />
              <TableCell kind="text" label={DEMO_ROWS[0].title} count={DEMO_ROWS[0].count} />
              <TableCell kind="text" label={HEADER_TITLE} />
              <TableCell kind="actions" />
            </TableDataRow>
          </div>
        </div>)}
    </div>
}`,...(I=(V=u.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var B,D,N;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {SIZES.map(size => <div key={size} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <Table size={size} showMasterRow={false} showNotification={false} />
        </div>)}
    </div>
}`,...(N=(D=c.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var q,_,W;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <TableToolbar showNotification showTitle showItems itemsType="filter-with-tags" showSubtitle={false} />
}`,...(W=(_=m.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var z,L,P;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    tableView: 'no'
  }
}`,...(P=(L=p.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var H,A,F;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      {TOOLBAR_TYPES.map(toolbarType => <div key={toolbarType} style={storyMatrixItemRowStartStyle}>
          <p style={variantLabelStyle}>{toolbarType}</p>
          <Table toolbarType={toolbarType} showTitle={toolbarType === 'filter-with-tags'} showMasterRow={false} showNotification={false} showPagination={false} />
        </div>)}
    </div>
}`,...(F=(A=f.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const it=["BorderMatrix","Default","FilterWithTags","RowStates","Sizes","ToolBarComposite","ToolbarOnly","ToolbarTypes"];export{i as BorderMatrix,n as Default,d as FilterWithTags,u as RowStates,c as Sizes,m as ToolBarComposite,p as ToolbarOnly,f as ToolbarTypes,it as __namedExportsOrder,lt as default};
