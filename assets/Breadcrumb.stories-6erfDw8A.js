import{j as e}from"./jsx-runtime-BYYWji4R.js";import{S as i}from"./SparkIcon-B877p_59.js";import{s as C,a as o,b as t}from"./storyHelpers-D7QoSJ90.js";import{B as a,a as s}from"./Breadcrumb-DieAPxQA.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./sparkAssetUrl-FWf-EcJv.js";const Ce=["home","agent","library"],Ae=[{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link"}];function T(r,n,c="home",d="small"){if(!n)return r.map(({icon:l,...A})=>A);const m=e.jsx(i,{slug:c,size:d});return r.map(l=>({...l,icon:m}))}const Oe={title:"Components/Breadcrumb",component:a,tags:["autodocs"],argTypes:{icon:{control:"boolean"},iconSlug:{control:"select",options:[...Ce]},iconSize:{control:"radio",options:["small","medium"]},items:{control:"object"},type:{control:"radio",options:["navigation","steps"]},separatorShape:{control:"radio",options:["slash","chevron"]}},args:{icon:!1,iconSlug:"agent",iconSize:"small",items:Ae,separatorShape:"slash"},render:({icon:r,iconSlug:n,iconSize:c,items:d,type:m,separatorShape:l,className:A})=>e.jsx(a,{type:m,separatorShape:l,className:A,items:T(d,r,n,c)}),parameters:{docs:{description:{component:'Spark Breadcrumb — matches Figma Breadcrumb component. Supports 2–4 levels of hierarchy. The last item is always the current page (active). Use `type="steps"` for step-style items (tertiary past links, brand-blue active page). Use `separatorShape="chevron"` for chevron-right separators instead of slash. Optional icon on the left and `.Icon-Chevron` popover trigger (`chevron`, `chevronOpen`) on individual items.'}}}},p={},b={name:"Amount = 2",args:{items:[{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link"}]}},u={name:"Amount = 3",args:{items:[{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link"}]}},h={name:"Amount = 4",args:{items:[{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link"}]}},v={name:"Type matrix",parameters:{docs:{description:{story:"Figma `.Breadcrumb-Item` type axis: Navigation (secondary links, primary active) or Steps (tertiary links, brand-blue active). Separator before the current page uses primary (navigation) or brand (steps)."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:["navigation","steps"].map(r=>e.jsxs("div",{style:C,children:[e.jsx("p",{style:{...t,minWidth:"auto",marginBottom:"0.25rem"},children:r}),e.jsx(a,{type:r,items:[{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link"}]}),e.jsx(a,{type:r,items:[{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link"}]}),e.jsx(a,{type:r,items:[{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link"}]})]},r))})},k={name:"Separator shape matrix",parameters:{docs:{description:{story:"Separator shape from Figma `.Breadcrumb-Separator`: slash (`/`) or chevron-right icon. The separator before the current page uses primary (navigation type) or brand color (steps type)."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:["slash","chevron"].map(r=>e.jsxs("div",{style:C,children:[e.jsx("p",{style:{...t,minWidth:"auto",marginBottom:"0.25rem"},children:r}),e.jsxs("div",{style:o,children:[e.jsx("p",{style:t,children:"Navigation"}),e.jsx(a,{separatorShape:r,items:[{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link"}]})]}),e.jsxs("div",{style:o,children:[e.jsx("p",{style:t,children:"Steps"}),e.jsx(a,{type:"steps",separatorShape:r,items:[{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link"}]})]})]},r))})},y={name:"Shape = Chevron, Amount = 4",args:{separatorShape:"chevron",items:[{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link"}]}},f={name:"Type = Steps, Amount = 2",args:{type:"steps",items:[{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link"}]}},g={name:"Type = Steps, Amount = 3",args:{type:"steps",items:[{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link"}]}},B={name:"Type = Steps, Amount = 4",args:{type:"steps",items:[{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link"}]}},L={name:"Item state matrix",parameters:{docs:{description:{story:"Figma `.Breadcrumb-Item` states (Default, Hover, Active) for Navigation and Steps types. Hover is shown via static preview classes."}}},render:()=>e.jsxs("div",{style:C,children:[e.jsxs("div",{style:o,children:[e.jsx("p",{style:t,children:"Default"}),e.jsxs("div",{className:"story-row",children:[e.jsxs("a",{href:"#default-navigation",className:"spark-breadcrumb-item spark-breadcrumb-item-link spark-breadcrumb-item-link-navigation",children:[e.jsx("span",{className:"spark-breadcrumb-icon",children:e.jsx(i,{slug:"home"})}),e.jsx("span",{className:"spark-breadcrumb-label",children:"Breadcrumb Link"}),e.jsx(s,{})]}),e.jsxs("a",{href:"#default-steps",className:"spark-breadcrumb-item spark-breadcrumb-item-link spark-breadcrumb-item-link-steps",children:[e.jsx("span",{className:"spark-breadcrumb-icon",children:e.jsx(i,{slug:"home"})}),e.jsx("span",{className:"spark-breadcrumb-label",children:"Breadcrumb Link"}),e.jsx(s,{})]})]})]}),e.jsxs("div",{style:o,children:[e.jsx("p",{style:t,children:"Hover"}),e.jsxs("div",{className:"story-row",children:[e.jsxs("a",{href:"#hover-navigation",className:"spark-breadcrumb-item spark-breadcrumb-item-link spark-breadcrumb-item-link-navigation spark-breadcrumb-item-link-navigation-hover-demo",children:[e.jsx("span",{className:"spark-breadcrumb-icon",children:e.jsx(i,{slug:"home"})}),e.jsx("span",{className:"spark-breadcrumb-label",children:"Breadcrumb Link"}),e.jsx(s,{state:"default"})]}),e.jsxs("a",{href:"#hover-steps",className:"spark-breadcrumb-item spark-breadcrumb-item-link spark-breadcrumb-item-link-steps spark-breadcrumb-item-link-steps-hover-demo",children:[e.jsx("span",{className:"spark-breadcrumb-icon",children:e.jsx(i,{slug:"home"})}),e.jsx("span",{className:"spark-breadcrumb-label",children:"Breadcrumb Link"}),e.jsx(s,{})]})]})]}),e.jsxs("div",{style:o,children:[e.jsx("p",{style:t,children:"Active"}),e.jsxs("div",{className:"story-row",children:[e.jsxs("span",{className:"spark-breadcrumb-item spark-breadcrumb-item-active","aria-current":"page",children:[e.jsx("span",{className:"spark-breadcrumb-icon",children:e.jsx(i,{slug:"home"})}),e.jsx("span",{className:"spark-breadcrumb-label",children:"Breadcrumb Link"}),e.jsx(s,{state:"active"})]}),e.jsxs("span",{className:"spark-breadcrumb-item spark-breadcrumb-item-active-steps","aria-current":"page",children:[e.jsx("span",{className:"spark-breadcrumb-icon",children:e.jsx(i,{slug:"home"})}),e.jsx("span",{className:"spark-breadcrumb-label",children:"Breadcrumb Link"}),e.jsx(s,{state:"active"})]})]})]})]})},x={name:"Icon chevron matrix",parameters:{docs:{description:{story:"Figma `.Icon-Chevron` axes: State (Default, Active) and Open (No = chevron-down, Yes = chevron-up). Navigation hover/active use Active chevron color; Steps hover keeps Default chevron color."}}},render:()=>e.jsx("div",{style:C,children:[["Closed",!1],["Open",!0]].map(([r,n])=>e.jsxs("div",{style:o,children:[e.jsx("p",{style:t,children:r}),e.jsxs("div",{className:"story-row",children:[e.jsx(s,{open:n,state:"default"}),e.jsx(s,{open:n,state:"active"})]})]},r))})},S={parameters:{docs:{description:{story:"All supported breadcrumb depths: 2, 3, and 4 levels."}}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsx(a,{items:[{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link"}]}),e.jsx(a,{items:[{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link"}]}),e.jsx(a,{items:[{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link"}]})]})},j={parameters:{docs:{description:{story:"Icon is presented on the left side of a breadcrumb item. Use consistently — if one item has an icon, all items should have an icon."}}},args:{icon:!0,iconSlug:"agent",iconSize:"small",items:[{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link"}]},render:({icon:r,iconSlug:n,iconSize:c,items:d,type:m,className:l})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsx(a,{type:m,className:l,items:T([{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link"}],r,n,c)}),e.jsx(a,{items:T([{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link"}],!0,"library",c)})]})},N={parameters:{docs:{description:{story:"Chevron signals a popover menu trigger. Keep 4px spacing between the popover and the breadcrumb bar."}}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsx(a,{items:[{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link",chevron:!0,chevronOpen:!0}]}),e.jsx(a,{items:[{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link",href:"#",chevron:!0},{label:"Breadcrumb Link",chevron:!0}]})]})},I={parameters:{docs:{description:{story:"Combined icon and chevron on breadcrumb items."}}},args:{icon:!0,iconSlug:"library",iconSize:"small",items:[{label:"Breadcrumb Link",href:"#"},{label:"Breadcrumb Link",chevron:!0}]}},Te=[{label:"Projects",href:"#projects"},{label:"Machine Learning",href:"#ml"},{label:"Sentiment Model"}],w={parameters:{docs:{description:{story:"Real-world usage inside a page header. Breadcrumbs let users navigate back through the hierarchy."}}},render:()=>e.jsxs("div",{style:{padding:"1.5rem",background:"var(--primitive-neutral-100)",borderRadius:"var(--dimension-border-radius-08)",display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(a,{items:Te}),e.jsx("h2",{style:{margin:0,fontFamily:"var(--typography-font-family-platform)",fontSize:"var(--typography-font-size-heading2)",fontWeight:"var(--typography-font-weight-semibold)",lineHeight:"var(--typography-line-height-heading2)",color:"var(--semantic-content-primary)"},children:"Sentiment Model"}),e.jsx("p",{style:{margin:0,fontFamily:"var(--typography-font-family-platform)",fontSize:"var(--typography-font-size-base)",color:"var(--semantic-content-secondary)"},children:"Create and manage your projects. Open any project to view details and collaborate with your team."})]})};var M,z,D;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:"{}",...(D=(z=p.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var F,R,W;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Amount = 2',
  args: {
    items: [{
      label: 'Breadcrumb Link',
      href: '#'
    }, {
      label: 'Breadcrumb Link'
    }]
  }
}`,...(W=(R=b.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var E,O,H;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Amount = 3',
  args: {
    items: [{
      label: 'Breadcrumb Link',
      href: '#'
    }, {
      label: 'Breadcrumb Link',
      href: '#'
    }, {
      label: 'Breadcrumb Link'
    }]
  }
}`,...(H=(O=u.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var _,U,K;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Amount = 4',
  args: {
    items: [{
      label: 'Breadcrumb Link',
      href: '#'
    }, {
      label: 'Breadcrumb Link',
      href: '#'
    }, {
      label: 'Breadcrumb Link',
      href: '#'
    }, {
      label: 'Breadcrumb Link'
    }]
  }
}`,...(K=(U=h.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var V,Y,G;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Type matrix',
  parameters: {
    docs: {
      description: {
        story: 'Figma \`.Breadcrumb-Item\` type axis: Navigation (secondary links, primary active) or Steps (tertiary links, brand-blue active). Separator before the current page uses primary (navigation) or brand (steps).'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      {(['navigation', 'steps'] as const).map(type => <div key={type} style={storyMatrixSectionStyle}>
          <p style={{
        ...sizeLabelStyle,
        minWidth: 'auto',
        marginBottom: '0.25rem'
      }}>{type}</p>
          <Breadcrumb type={type} items={[{
        label: 'Breadcrumb Link',
        href: '#'
      }, {
        label: 'Breadcrumb Link'
      }]} />
          <Breadcrumb type={type} items={[{
        label: 'Breadcrumb Link',
        href: '#'
      }, {
        label: 'Breadcrumb Link',
        href: '#'
      }, {
        label: 'Breadcrumb Link'
      }]} />
          <Breadcrumb type={type} items={[{
        label: 'Breadcrumb Link',
        href: '#'
      }, {
        label: 'Breadcrumb Link',
        href: '#'
      }, {
        label: 'Breadcrumb Link',
        href: '#'
      }, {
        label: 'Breadcrumb Link'
      }]} />
        </div>)}
    </div>
}`,...(G=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var P,q,J;k.parameters={...k.parameters,docs:{...(P=k.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Separator shape matrix',
  parameters: {
    docs: {
      description: {
        story: 'Separator shape from Figma \`.Breadcrumb-Separator\`: slash (\`/\`) or chevron-right icon. The separator before the current page uses primary (navigation type) or brand color (steps type).'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      {(['slash', 'chevron'] as const).map(separatorShape => <div key={separatorShape} style={storyMatrixSectionStyle}>
          <p style={{
        ...sizeLabelStyle,
        minWidth: 'auto',
        marginBottom: '0.25rem'
      }}>
            {separatorShape}
          </p>
          <div style={storyMatrixItemRowStyle}>
            <p style={sizeLabelStyle}>Navigation</p>
            <Breadcrumb separatorShape={separatorShape} items={[{
          label: 'Breadcrumb Link',
          href: '#'
        }, {
          label: 'Breadcrumb Link',
          href: '#'
        }, {
          label: 'Breadcrumb Link'
        }]} />
          </div>
          <div style={storyMatrixItemRowStyle}>
            <p style={sizeLabelStyle}>Steps</p>
            <Breadcrumb type="steps" separatorShape={separatorShape} items={[{
          label: 'Breadcrumb Link',
          href: '#'
        }, {
          label: 'Breadcrumb Link',
          href: '#'
        }, {
          label: 'Breadcrumb Link'
        }]} />
          </div>
        </div>)}
    </div>
}`,...(J=(q=k.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Q,X,Z;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Shape = Chevron, Amount = 4',
  args: {
    separatorShape: 'chevron',
    items: [{
      label: 'Breadcrumb Link',
      href: '#'
    }, {
      label: 'Breadcrumb Link',
      href: '#'
    }, {
      label: 'Breadcrumb Link',
      href: '#'
    }, {
      label: 'Breadcrumb Link'
    }]
  }
}`,...(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,re;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Type = Steps, Amount = 2',
  args: {
    type: 'steps',
    items: [{
      label: 'Breadcrumb Link',
      href: '#'
    }, {
      label: 'Breadcrumb Link'
    }]
  }
}`,...(re=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,ne,se;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Type = Steps, Amount = 3',
  args: {
    type: 'steps',
    items: [{
      label: 'Breadcrumb Link',
      href: '#'
    }, {
      label: 'Breadcrumb Link',
      href: '#'
    }, {
      label: 'Breadcrumb Link'
    }]
  }
}`,...(se=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var te,ie,ce;B.parameters={...B.parameters,docs:{...(te=B.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Type = Steps, Amount = 4',
  args: {
    type: 'steps',
    items: [{
      label: 'Breadcrumb Link',
      href: '#'
    }, {
      label: 'Breadcrumb Link',
      href: '#'
    }, {
      label: 'Breadcrumb Link',
      href: '#'
    }, {
      label: 'Breadcrumb Link'
    }]
  }
}`,...(ce=(ie=B.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,oe,me;L.parameters={...L.parameters,docs:{...(le=L.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Item state matrix',
  parameters: {
    docs: {
      description: {
        story: 'Figma \`.Breadcrumb-Item\` states (Default, Hover, Active) for Navigation and Steps types. Hover is shown via static preview classes.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>Default</p>
        <div className="story-row">
          <a href="#default-navigation" className="spark-breadcrumb-item spark-breadcrumb-item-link spark-breadcrumb-item-link-navigation">
            <span className="spark-breadcrumb-icon">
              <SparkIcon slug="home" />
            </span>
            <span className="spark-breadcrumb-label">Breadcrumb Link</span>
            <BreadcrumbChevron />
          </a>
          <a href="#default-steps" className="spark-breadcrumb-item spark-breadcrumb-item-link spark-breadcrumb-item-link-steps">
            <span className="spark-breadcrumb-icon">
              <SparkIcon slug="home" />
            </span>
            <span className="spark-breadcrumb-label">Breadcrumb Link</span>
            <BreadcrumbChevron />
          </a>
        </div>
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>Hover</p>
        <div className="story-row">
          <a href="#hover-navigation" className="spark-breadcrumb-item spark-breadcrumb-item-link spark-breadcrumb-item-link-navigation spark-breadcrumb-item-link-navigation-hover-demo">
            <span className="spark-breadcrumb-icon">
              <SparkIcon slug="home" />
            </span>
            <span className="spark-breadcrumb-label">Breadcrumb Link</span>
            <BreadcrumbChevron state="default" />
          </a>
          <a href="#hover-steps" className="spark-breadcrumb-item spark-breadcrumb-item-link spark-breadcrumb-item-link-steps spark-breadcrumb-item-link-steps-hover-demo">
            <span className="spark-breadcrumb-icon">
              <SparkIcon slug="home" />
            </span>
            <span className="spark-breadcrumb-label">Breadcrumb Link</span>
            <BreadcrumbChevron />
          </a>
        </div>
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>Active</p>
        <div className="story-row">
          <span className="spark-breadcrumb-item spark-breadcrumb-item-active" aria-current="page">
            <span className="spark-breadcrumb-icon">
              <SparkIcon slug="home" />
            </span>
            <span className="spark-breadcrumb-label">Breadcrumb Link</span>
            <BreadcrumbChevron state="active" />
          </span>
          <span className="spark-breadcrumb-item spark-breadcrumb-item-active-steps" aria-current="page">
            <span className="spark-breadcrumb-icon">
              <SparkIcon slug="home" />
            </span>
            <span className="spark-breadcrumb-label">Breadcrumb Link</span>
            <BreadcrumbChevron state="active" />
          </span>
        </div>
      </div>
    </div>
}`,...(me=(oe=L.parameters)==null?void 0:oe.docs)==null?void 0:me.source}}};var de,pe,be;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'Icon chevron matrix',
  parameters: {
    docs: {
      description: {
        story: 'Figma \`.Icon-Chevron\` axes: State (Default, Active) and Open (No = chevron-down, Yes = chevron-up). Navigation hover/active use Active chevron color; Steps hover keeps Default chevron color.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {([['Closed', false], ['Open', true]] as const).map(([label, open]) => <div key={label} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{label}</p>
          <div className="story-row">
            <BreadcrumbChevron open={open} state="default" />
            <BreadcrumbChevron open={open} state="active" />
          </div>
        </div>)}
    </div>
}`,...(be=(pe=x.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var ue,he,ve;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'All supported breadcrumb depths: 2, 3, and 4 levels.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }}>
      <Breadcrumb items={[{
      label: 'Breadcrumb Link',
      href: '#'
    }, {
      label: 'Breadcrumb Link'
    }]} />
      <Breadcrumb items={[{
      label: 'Breadcrumb Link',
      href: '#'
    }, {
      label: 'Breadcrumb Link',
      href: '#'
    }, {
      label: 'Breadcrumb Link'
    }]} />
      <Breadcrumb items={[{
      label: 'Breadcrumb Link',
      href: '#'
    }, {
      label: 'Breadcrumb Link',
      href: '#'
    }, {
      label: 'Breadcrumb Link',
      href: '#'
    }, {
      label: 'Breadcrumb Link'
    }]} />
    </div>
}`,...(ve=(he=S.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var ke,ye,fe;j.parameters={...j.parameters,docs:{...(ke=j.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Icon is presented on the left side of a breadcrumb item. Use consistently — if one item has an icon, all items should have an icon.'
      }
    }
  },
  args: {
    icon: true,
    iconSlug: 'agent',
    iconSize: 'small',
    items: [{
      label: 'Breadcrumb Link',
      href: '#'
    }, {
      label: 'Breadcrumb Link'
    }]
  },
  render: ({
    icon,
    iconSlug,
    iconSize,
    items,
    type,
    className
  }) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }}>
      <Breadcrumb type={type} className={className} items={itemsWithIcon([{
      label: 'Breadcrumb Link',
      href: '#'
    }, {
      label: 'Breadcrumb Link'
    }], icon, iconSlug, iconSize)} />
      <Breadcrumb items={itemsWithIcon([{
      label: 'Breadcrumb Link',
      href: '#'
    }, {
      label: 'Breadcrumb Link',
      href: '#'
    }, {
      label: 'Breadcrumb Link'
    }], true, 'library', iconSize)} />
    </div>
}`,...(fe=(ye=j.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var ge,Be,Le;N.parameters={...N.parameters,docs:{...(ge=N.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Chevron signals a popover menu trigger. Keep 4px spacing between the popover and the breadcrumb bar.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }}>
      <Breadcrumb items={[{
      label: 'Breadcrumb Link',
      href: '#'
    }, {
      label: 'Breadcrumb Link',
      chevron: true,
      chevronOpen: true
    }]} />
      <Breadcrumb items={[{
      label: 'Breadcrumb Link',
      href: '#'
    }, {
      label: 'Breadcrumb Link',
      href: '#',
      chevron: true
    }, {
      label: 'Breadcrumb Link',
      chevron: true
    }]} />
    </div>
}`,...(Le=(Be=N.parameters)==null?void 0:Be.docs)==null?void 0:Le.source}}};var xe,Se,je;I.parameters={...I.parameters,docs:{...(xe=I.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Combined icon and chevron on breadcrumb items.'
      }
    }
  },
  args: {
    icon: true,
    iconSlug: 'library',
    iconSize: 'small',
    items: [{
      label: 'Breadcrumb Link',
      href: '#'
    }, {
      label: 'Breadcrumb Link',
      chevron: true
    }]
  }
}`,...(je=(Se=I.parameters)==null?void 0:Se.docs)==null?void 0:je.source}}};var Ne,Ie,we;w.parameters={...w.parameters,docs:{...(Ne=w.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Real-world usage inside a page header. Breadcrumbs let users navigate back through the hierarchy.'
      }
    }
  },
  render: () => <div style={{
    padding: '1.5rem',
    background: 'var(--primitive-neutral-100)',
    borderRadius: 'var(--dimension-border-radius-08)',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }}>
      <Breadcrumb items={INTERACTIVE_ITEMS} />
      <h2 style={{
      margin: 0,
      fontFamily: 'var(--typography-font-family-platform)',
      fontSize: 'var(--typography-font-size-heading2)',
      fontWeight: 'var(--typography-font-weight-semibold)',
      lineHeight: 'var(--typography-line-height-heading2)',
      color: 'var(--semantic-content-primary)'
    }}>
        Sentiment Model
      </h2>
      <p style={{
      margin: 0,
      fontFamily: 'var(--typography-font-family-platform)',
      fontSize: 'var(--typography-font-size-base)',
      color: 'var(--semantic-content-secondary)'
    }}>
        Create and manage your projects. Open any project to view details and collaborate with your team.
      </p>
    </div>
}`,...(we=(Ie=w.parameters)==null?void 0:Ie.docs)==null?void 0:we.source}}};const He=["Default","TwoLevels","ThreeLevels","FourLevels","TypeMatrix","SeparatorShapeMatrix","ChevronFourLevels","StepsTwoLevels","StepsThreeLevels","StepsFourLevels","ItemStateMatrix","IconChevronMatrix","AllAmounts","WithIcon","WithChevron","WithIconAndChevron","NavigationExample"];export{S as AllAmounts,y as ChevronFourLevels,p as Default,h as FourLevels,x as IconChevronMatrix,L as ItemStateMatrix,w as NavigationExample,k as SeparatorShapeMatrix,B as StepsFourLevels,g as StepsThreeLevels,f as StepsTwoLevels,u as ThreeLevels,b as TwoLevels,v as TypeMatrix,N as WithChevron,j as WithIcon,I as WithIconAndChevron,He as __namedExportsOrder,Oe as default};
