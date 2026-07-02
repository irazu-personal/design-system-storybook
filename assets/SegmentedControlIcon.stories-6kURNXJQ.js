import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as A}from"./index-ClcD9ViR.js";import{s as c,a as d,b as m}from"./storyHelpers-D7QoSJ90.js";import{T as v,S as p,a as C}from"./SegmentedControlIcon-Dh-7pulQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./SparkIcon-B877p_59.js";import"./sparkAssetUrl-FWf-EcJv.js";import"./TooltipTrigger-CeqIspS_.js";import"./Tooltip-rWdCQlMf.js";const J={title:"Components/Segmented Control/Icon",component:p,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium"]}},args:{items:v,activeId:"list",size:"medium"},parameters:{docs:{description:{component:"Icon-only segmented control for compact view toggles (e.g. grid vs list). **Small** (28px) and **medium** (36px) with 6px corner radius and 6px icon inset. Each option must have an accessible label; tooltips appear on hover/focus with a 4px overlay gap."}}}},O=["small","medium"],N=["first","last"],a={},i={render:()=>{const[t,s]=A.useState("list");return e.jsx(p,{items:v,activeId:t,onChange:s})}},r={render:()=>e.jsx("div",{style:c,children:O.map(t=>e.jsxs("div",{style:d,children:[e.jsx("p",{style:m,children:t}),e.jsx(p,{items:v,activeId:"list",size:t})]},t))})},l={render:()=>e.jsx("div",{style:c,children:[{label:"First active",activeId:"grid"},{label:"Last active",activeId:"list"}].map(({label:t,activeId:s})=>e.jsxs("div",{style:d,children:[e.jsx("p",{style:m,children:t}),e.jsx(p,{items:v,activeId:s})]},t))})},o={parameters:{docs:{description:{story:"Per-item states (medium, first segment) — default, hover, pressed, active, and disabled."}}},render:()=>e.jsx("div",{style:c,children:[{label:"default",active:!1,visualState:void 0},{label:"hover",active:!1,visualState:"hover"},{label:"pressed",active:!1,visualState:"pressed"},{label:"active",active:!0,visualState:void 0},{label:"disabled",active:!1,visualState:"disabled"}].map(({label:t,active:s,visualState:u})=>e.jsxs("div",{style:d,children:[e.jsx("p",{style:m,children:t}),e.jsx("div",{className:"spark-segmented-control-icon spark-segmented-control-icon-medium",children:e.jsx(C,{label:"Grid view",active:s,position:"first",size:"medium",iconSlug:"table",visualState:u})})]},t))})},n={parameters:{docs:{description:{story:"Position × state matrix (medium) — table icon on first, layout-rows on last."}}},render:()=>e.jsx("div",{style:c,children:N.map(t=>e.jsxs("div",{style:d,children:[e.jsx("p",{style:m,children:t}),e.jsx("div",{className:"story-row",style:{gap:"1rem",flexWrap:"wrap"},children:[{label:"default",active:!1,visualState:void 0},{label:"hover",active:!1,visualState:"hover"},{label:"pressed",active:!1,visualState:"pressed"},{label:"active",active:!0,visualState:void 0}].map(({label:s,active:u,visualState:P})=>e.jsx("div",{className:"spark-segmented-control-icon spark-segmented-control-icon-medium",children:e.jsx(C,{label:t==="first"?"Grid view":"List view",active:u,position:t,size:"medium",iconSlug:t==="first"?"table":"layout-rows",visualState:P})},s))})]},t))})};var S,y,I;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(I=(y=a.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var b,f,x;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [activeId, setActiveId] = useState('list');
    return <SegmentedControlIcon items={TABLE_VIEW_TOGGLE_ITEMS} activeId={activeId} onChange={setActiveId} />;
  }
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var g,h,j;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {SIZES.map(size => <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <SegmentedControlIcon items={TABLE_VIEW_TOGGLE_ITEMS} activeId="list" size={size} />
        </div>)}
    </div>
}`,...(j=(h=r.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var w,E,L;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {[{
      label: 'First active',
      activeId: 'grid'
    }, {
      label: 'Last active',
      activeId: 'list'
    }].map(({
      label,
      activeId
    }) => <div key={label} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{label}</p>
          <SegmentedControlIcon items={TABLE_VIEW_TOGGLE_ITEMS} activeId={activeId} />
        </div>)}
    </div>
}`,...(L=(E=l.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var z,T,M;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Per-item states (medium, first segment) — default, hover, pressed, active, and disabled.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {([{
      label: 'default',
      active: false,
      visualState: undefined
    }, {
      label: 'hover',
      active: false,
      visualState: 'hover' as const
    }, {
      label: 'pressed',
      active: false,
      visualState: 'pressed' as const
    }, {
      label: 'active',
      active: true,
      visualState: undefined
    }, {
      label: 'disabled',
      active: false,
      visualState: 'disabled' as const
    }] as const).map(({
      label,
      active,
      visualState
    }) => <div key={label} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{label}</p>
          <div className="spark-segmented-control-icon spark-segmented-control-icon-medium">
            <SegmentedControlIconItem label="Grid view" active={active} position="first" size="medium" iconSlug="table" visualState={visualState} />
          </div>
        </div>)}
    </div>
}`,...(M=(T=o.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var _,k,G;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Position × state matrix (medium) — table icon on first, layout-rows on last.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {POSITIONS.map(position => <div key={position} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{position}</p>
          <div className="story-row" style={{
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
            {([{
          label: 'default',
          active: false,
          visualState: undefined
        }, {
          label: 'hover',
          active: false,
          visualState: 'hover' as const
        }, {
          label: 'pressed',
          active: false,
          visualState: 'pressed' as const
        }, {
          label: 'active',
          active: true,
          visualState: undefined
        }] as const).map(({
          label,
          active,
          visualState
        }) => <div key={label} className="spark-segmented-control-icon spark-segmented-control-icon-medium">
                <SegmentedControlIconItem label={position === 'first' ? 'Grid view' : 'List view'} active={active} position={position} size="medium" iconSlug={position === 'first' ? 'table' : 'layout-rows'} visualState={visualState} />
              </div>)}
          </div>
        </div>)}
    </div>
}`,...(G=(k=n.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};const K=["Default","Interactive","Sizes","ActivePosition","ItemStates","ItemPositions"];export{l as ActivePosition,a as Default,i as Interactive,n as ItemPositions,o as ItemStates,r as Sizes,K as __namedExportsOrder,J as default};
