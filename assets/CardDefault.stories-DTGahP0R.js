import{j as e}from"./jsx-runtime-BYYWji4R.js";import{s as w,f as r,b as l,g as a,v as C}from"./storyHelpers-D7QoSJ90.js";import{r as B}from"./index-ClcD9ViR.js";import{S as Ve}from"./ScrollBar-Cp2nGFrO.js";import{C as Le,a as De,b as Re,c as Oe}from"./CardSlot-48ALBOeZ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-CdN-AKPT.js";import"./SparkIcon-B877p_59.js";import"./sparkAssetUrl-FWf-EcJv.js";import"./TooltipTrigger-CeqIspS_.js";import"./Tooltip-rWdCQlMf.js";function t({border:s="no",type:de="default",open:g=!1,showFooter:ce=!1,showScrollBar:pe=!1,showIconButtonPrefix:ue=!1,showIconButtonSuffix:ye=!1,showSecondaryButton:me=!1,showMainCta:fe=!1,title:he="Long title",subtitle:xe="Subtitle",showSubtitle:ve=!0,secondaryLabel:Se="Show more",primaryLabel:we="Show more",cancelLabel:ge="Cancel",footerSecondaryLabel:be="Show more",children:Ce,className:je="",onToggle:b,onIconButtonPrefixClick:Fe,onIconButtonSuffixClick:Be,onSecondaryClick:Me,onPrimaryClick:We,onCancelClick:Te,onFooterSecondaryClick:Ie}){const o=de==="collapsed",[n,j]=B.useState(g);B.useEffect(()=>{j(g)},[g]);const qe=!o||n,ke=()=>{const F=!n;j(F),b==null||b(F)};return e.jsxs("div",{className:["spark-card","spark-card-default",s==="yes"?"spark-card-bordered":"",o?"spark-card-collapsible":"",o&&!n?"spark-card-collapsed-closed":"",o&&n?"spark-card-collapsed-open":"",je].filter(Boolean).join(" "),children:[e.jsx(Le,{title:he,subtitle:xe,showSubtitle:ve,interactive:o,open:n,onToggle:ke,showChevron:o,rightContent:o?void 0:e.jsx(De,{showIconButtonPrefix:ue,showIconButtonSuffix:ye,showSecondaryButton:me,showMainCta:fe,secondaryLabel:Se,primaryLabel:we,onIconButtonPrefixClick:Fe,onIconButtonSuffixClick:Be,onSecondaryClick:Me,onPrimaryClick:We})}),qe?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"spark-card-body",children:[e.jsx(Re,{children:Ce}),pe?e.jsx("div",{className:"spark-card-scrollbar",children:e.jsx(Ve,{type:"vertical"})}):null]}),ce?e.jsx(Oe,{variant:"default",cancelLabel:ge,secondaryLabel:be,onCancelClick:Te,onSecondaryClick:Ie}):null]}):null]})}t.__docgenInfo={description:"",methods:[],displayName:"CardDefault",props:{border:{required:!1,tsType:{name:"union",raw:"'no' | 'yes'",elements:[{name:"literal",value:"'no'"},{name:"literal",value:"'yes'"}]},description:"",defaultValue:{value:"'no'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'default' | 'collapsed'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'collapsed'"}]},description:"Figma `Type` — `collapsed` shows a chevron and toggles the content slot.",defaultValue:{value:"'default'",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:'Figma `Open` — only applies when `type="collapsed"`.',defaultValue:{value:"false",computed:!1}},showFooter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showScrollBar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showIconButtonPrefix:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showIconButtonSuffix:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showSecondaryButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showMainCta:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Long title'",computed:!1}},subtitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Subtitle'",computed:!1}},showSubtitle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},secondaryLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Show more'",computed:!1}},primaryLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Show more'",computed:!1}},cancelLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Cancel'",computed:!1}},footerSecondaryLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Show more'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},onIconButtonPrefixClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onIconButtonSuffixClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSecondaryClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPrimaryClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancelClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onFooterSecondaryClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Ke={title:"Components/Cards/Default",component:t,tags:["autodocs"],argTypes:{border:{control:"select",options:["no","yes"]},type:{control:"select",options:["default","collapsed"]},open:{control:"boolean"},showFooter:{control:"boolean"},showScrollBar:{control:"boolean"},showIconButtonPrefix:{control:"boolean"},showIconButtonSuffix:{control:"boolean"},showSecondaryButton:{control:"boolean"},showMainCta:{control:"boolean"},showSubtitle:{control:"boolean"}},args:{border:"no",type:"default",open:!1,showFooter:!1,showScrollBar:!1,showIconButtonPrefix:!1,showIconButtonSuffix:!1,showSecondaryButton:!1,showMainCta:!1,showSubtitle:!0},parameters:{layout:"fullscreen",docs:{description:{component:"Flexible container for grouping related UI. Use **border=yes** on white backgrounds; **border=no** on tinted canvases. Set **type=collapsed** for accordion-style expand/collapse with a header chevron. Only one primary button per page view."}}},decorators:[s=>e.jsx("div",{style:{background:"var(--semantic-surface-canvas)",padding:"1.5rem",minHeight:"100%"},children:e.jsx("div",{style:{width:"100%",maxWidth:"690px"},children:e.jsx(s,{})})})]},i={},d={args:{border:"yes"}},c={args:{showFooter:!0}},p={args:{showScrollBar:!0}},u={args:{showIconButtonPrefix:!0,showIconButtonSuffix:!0,showSecondaryButton:!0,showMainCta:!0,showFooter:!0}},y={parameters:{docs:{description:{story:"Figma `5558:47407` — all header action slots on vs off."}}},render:()=>e.jsxs("div",{style:w,children:[e.jsxs("div",{style:r,children:[e.jsx("p",{style:l,children:"all on"}),e.jsx("div",{style:{...a,maxWidth:"690px",width:"100%"},children:e.jsx(t,{showIconButtonPrefix:!0,showIconButtonSuffix:!0,showSecondaryButton:!0,showMainCta:!0})})]}),e.jsxs("div",{style:r,children:[e.jsx("p",{style:l,children:"all off"}),e.jsx("div",{style:{...a,maxWidth:"690px",width:"100%"},children:e.jsx(t,{showSubtitle:!1})})]})]})},m={parameters:{docs:{description:{story:"Figma `5340:16531` — border off vs on."}}},render:()=>e.jsx("div",{style:w,children:["no","yes"].map(s=>e.jsxs("div",{style:r,children:[e.jsx("p",{style:l,children:s}),e.jsx("div",{style:{...a,maxWidth:"690px",width:"100%"},children:e.jsx(t,{border:s})})]},s))})},f={render:()=>e.jsxs("div",{style:w,children:[e.jsxs("div",{style:r,children:[e.jsx("p",{style:C,children:"Footer off"}),e.jsx("div",{style:{...a,maxWidth:"690px",width:"100%"},children:e.jsx(t,{})})]}),e.jsxs("div",{style:r,children:[e.jsx("p",{style:C,children:"Footer on"}),e.jsx("div",{style:{...a,maxWidth:"690px",width:"100%"},children:e.jsx(t,{showFooter:!0})})]}),e.jsxs("div",{style:r,children:[e.jsx("p",{style:C,children:"Scroll bar"}),e.jsx("div",{style:{...a,maxWidth:"690px",width:"100%"},children:e.jsx(t,{showScrollBar:!0})})]})]})},h={args:{type:"collapsed",open:!1},parameters:{docs:{description:{story:"Figma `Type=Collpased`, `Open=No` — header with downward chevron; content hidden."}}}},x={args:{type:"collapsed",open:!0},parameters:{docs:{description:{story:"Figma `Type=Collpased`, `Open=Yes` — header with upward chevron; content visible."}}}},v={parameters:{docs:{description:{story:"Figma `5340:16531` — collapsed vs open accordion-style card."}}},render:()=>e.jsxs("div",{style:w,children:[e.jsxs("div",{style:r,children:[e.jsx("p",{style:l,children:"collapsed"}),e.jsx("div",{style:{...a,maxWidth:"690px",width:"100%"},children:e.jsx(t,{type:"collapsed"})})]}),e.jsxs("div",{style:r,children:[e.jsx("p",{style:l,children:"open"}),e.jsx("div",{style:{...a,maxWidth:"690px",width:"100%"},children:e.jsx(t,{type:"collapsed",open:!0})})]})]})},S={args:{type:"collapsed",border:"yes",open:!0}};var M,W,T;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:"{}",...(T=(W=i.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var I,q,k;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    border: 'yes'
  }
}`,...(k=(q=d.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};var V,L,D;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    showFooter: true
  }
}`,...(D=(L=c.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var R,O,P;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    showScrollBar: true
  }
}`,...(P=(O=p.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var N,z,E;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    showIconButtonPrefix: true,
    showIconButtonSuffix: true,
    showSecondaryButton: true,
    showMainCta: true,
    showFooter: true
  }
}`,...(E=(z=u.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var A,H,_;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Figma \`5558:47407\` — all header action slots on vs off.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>all on</p>
        <div style={{
        ...storyMatrixFieldWrapStyle,
        maxWidth: '690px',
        width: '100%'
      }}>
          <CardDefault showIconButtonPrefix showIconButtonSuffix showSecondaryButton showMainCta />
        </div>
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>all off</p>
        <div style={{
        ...storyMatrixFieldWrapStyle,
        maxWidth: '690px',
        width: '100%'
      }}>
          <CardDefault showSubtitle={false} />
        </div>
      </div>
    </div>
}`,...(_=(H=y.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var U,Y,G;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Figma \`5340:16531\` — border off vs on.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {(['no', 'yes'] as CardDefaultBorder[]).map(border => <div key={border} style={storyMatrixItemRowStartStyle}>
          <p style={sizeLabelStyle}>{border}</p>
          <div style={{
        ...storyMatrixFieldWrapStyle,
        maxWidth: '690px',
        width: '100%'
      }}>
            <CardDefault border={border} />
          </div>
        </div>)}
    </div>
}`,...(G=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var J,K,Q;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={variantLabelStyle}>Footer off</p>
        <div style={{
        ...storyMatrixFieldWrapStyle,
        maxWidth: '690px',
        width: '100%'
      }}>
          <CardDefault />
        </div>
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={variantLabelStyle}>Footer on</p>
        <div style={{
        ...storyMatrixFieldWrapStyle,
        maxWidth: '690px',
        width: '100%'
      }}>
          <CardDefault showFooter />
        </div>
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={variantLabelStyle}>Scroll bar</p>
        <div style={{
        ...storyMatrixFieldWrapStyle,
        maxWidth: '690px',
        width: '100%'
      }}>
          <CardDefault showScrollBar />
        </div>
      </div>
    </div>
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,$;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    type: 'collapsed',
    open: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Figma \`Type=Collpased\`, \`Open=No\` — header with downward chevron; content hidden.'
      }
    }
  }
}`,...($=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,re;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    type: 'collapsed',
    open: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Figma \`Type=Collpased\`, \`Open=Yes\` — header with upward chevron; content visible.'
      }
    }
  }
}`,...(re=(te=x.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ae,se,oe;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Figma \`5340:16531\` — collapsed vs open accordion-style card.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>collapsed</p>
        <div style={{
        ...storyMatrixFieldWrapStyle,
        maxWidth: '690px',
        width: '100%'
      }}>
          <CardDefault type="collapsed" />
        </div>
      </div>
      <div style={storyMatrixItemRowStartStyle}>
        <p style={sizeLabelStyle}>open</p>
        <div style={{
        ...storyMatrixFieldWrapStyle,
        maxWidth: '690px',
        width: '100%'
      }}>
          <CardDefault type="collapsed" open />
        </div>
      </div>
    </div>
}`,...(oe=(se=v.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ne,le,ie;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    type: 'collapsed',
    border: 'yes',
    open: true
  }
}`,...(ie=(le=S.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};const Qe=["Default","WithBorder","WithFooter","WithScrollBar","RightActionsAllOn","HeaderElementsMatrix","BorderMatrix","FeatureMatrix","CollapsedClosed","CollapsedOpen","CollapsedMatrix","CollapsedWithBorder"];export{m as BorderMatrix,h as CollapsedClosed,v as CollapsedMatrix,x as CollapsedOpen,S as CollapsedWithBorder,i as Default,f as FeatureMatrix,y as HeaderElementsMatrix,u as RightActionsAllOn,d as WithBorder,c as WithFooter,p as WithScrollBar,Qe as __namedExportsOrder,Ke as default};
