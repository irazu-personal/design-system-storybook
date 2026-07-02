import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as $}from"./index-ClcD9ViR.js";import{s as o,a,b as i}from"./storyHelpers-D7QoSJ90.js";import{S as r,a as g}from"./SegmentedControl-DNV2LoFR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./SparkIcon-B877p_59.js";import"./sparkAssetUrl-FWf-EcJv.js";const l=[{id:"one",label:"Text"},{id:"two",label:"Text"},{id:"three",label:"Text"}],de={title:"Components/Segmented Control",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"]},style:{control:"select",options:["outlined","solid"]},fill:{control:"boolean"},showIcon:{control:"boolean"}},args:{items:l,activeId:"one",size:"medium",style:"outlined",fill:!0},parameters:{docs:{description:{component:"Spark Segmented Control — mutually exclusive view/mode switcher. **outlined** or **solid** style; **small** (28px), **medium** (36px), **large** (40px). Use for 2–5 side-by-side options."}}}},Q=["small","medium","large"],V=["outlined","solid"],ee=["first","center","last"],n={},c={render:()=>{const[t,s]=$.useState("one");return e.jsx(r,{items:l,activeId:t,onChange:s,fill:!0})}},m={render:()=>e.jsx("div",{style:o,children:Q.map(t=>e.jsxs("div",{style:a,children:[e.jsx("p",{style:i,children:t}),e.jsx(r,{items:l,activeId:"one",size:t,fill:!0})]},t))})},v={render:()=>e.jsx("div",{style:o,children:V.map(t=>e.jsxs("div",{style:a,children:[e.jsx("p",{style:i,children:t}),e.jsx(r,{items:l,activeId:"one",style:t,fill:!0})]},t))})},p={render:()=>e.jsxs("div",{style:o,children:[e.jsxs("div",{style:a,children:[e.jsx("p",{style:i,children:"off"}),e.jsx(r,{items:l,activeId:"one",fill:!1})]}),e.jsxs("div",{style:a,children:[e.jsx("p",{style:i,children:"on"}),e.jsx(r,{items:l,activeId:"one",fill:!0})]})]})},u={parameters:{docs:{description:{story:"Size × style matrix from Figma — outlined and solid at each size."}}},render:()=>e.jsx("div",{style:o,children:Q.map(t=>e.jsxs("div",{style:a,children:[e.jsx("p",{style:i,children:t}),e.jsx("div",{className:"story-row",style:{gap:"1rem",flexWrap:"wrap"},children:V.map(s=>e.jsx(r,{items:l,activeId:"one",size:t,style:s,fill:!0},s))})]},t))})},y={parameters:{docs:{description:{story:"Per-item states (outlined, medium, first segment) — default, hover, active, and disabled."}}},render:()=>e.jsx("div",{style:o,children:[{label:"default",active:!1,visualState:void 0},{label:"hover",active:!1,visualState:"hover"},{label:"active",active:!0,visualState:void 0},{label:"disabled",active:!1,visualState:"disabled"}].map(({label:t,active:s,visualState:d})=>e.jsxs("div",{style:a,children:[e.jsx("p",{style:i,children:t}),e.jsx("div",{className:"spark-segmented-control spark-segmented-control-medium spark-segmented-control-outlined",children:e.jsx(g,{label:"Text",active:s,position:"first",size:"medium",style:"outlined",showIcon:!0,visualState:d})})]},t))})},S={parameters:{docs:{description:{story:"Solid style item states (medium, first segment) with icons — updated hover uses secondary border on white fill."}}},render:()=>e.jsx("div",{style:o,children:[{label:"default",active:!1,visualState:void 0},{label:"hover",active:!1,visualState:"hover"},{label:"active",active:!0,visualState:void 0},{label:"disabled",active:!1,visualState:"disabled"}].map(({label:t,active:s,visualState:d})=>e.jsxs("div",{style:a,children:[e.jsx("p",{style:i,children:t}),e.jsx("div",{className:"spark-segmented-control spark-segmented-control-medium spark-segmented-control-solid",children:e.jsx(g,{label:"Text",active:s,position:"first",size:"medium",style:"solid",showIcon:!0,visualState:d})})]},t))})},x={args:{showIcon:!0,items:l,activeId:"one",fill:!0}},f={parameters:{docs:{description:{story:"Position × state (outlined, medium). Hover and active segments get a full box border on all four sides per Figma `183:997`."}}},render:()=>e.jsx("div",{style:o,children:ee.map(t=>e.jsxs("div",{style:a,children:[e.jsx("p",{style:i,children:t}),e.jsx("div",{className:"story-row",style:{gap:"1rem",flexWrap:"wrap"},children:[{label:"default",active:!1,visualState:void 0},{label:"hover",active:!1,visualState:"hover"},{label:"active",active:!0,visualState:void 0}].map(({label:s,active:d,visualState:X})=>e.jsx("div",{className:"spark-segmented-control spark-segmented-control-medium spark-segmented-control-outlined",children:e.jsx(g,{label:"Text",active:d,position:t,size:"medium",style:"outlined",showIcon:!0,visualState:X})},s))})]},t))})};var I,b,h;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:"{}",...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var j,M,w;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [activeId, setActiveId] = useState('one');
    return <SegmentedControl items={SAMPLE_ITEMS} activeId={activeId} onChange={setActiveId} fill />;
  }
}`,...(w=(M=c.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var z,k,E;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {SIZES.map(size => <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <SegmentedControl items={SAMPLE_ITEMS} activeId="one" size={size} fill />
        </div>)}
    </div>
}`,...(E=(k=m.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var T,L,C;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      {STYLES.map(style => <div key={style} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{style}</p>
          <SegmentedControl items={SAMPLE_ITEMS} activeId="one" style={style} fill />
        </div>)}
    </div>
}`,...(C=(L=v.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var P,N,A;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={storyMatrixSectionStyle}>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>off</p>
        <SegmentedControl items={SAMPLE_ITEMS} activeId="one" fill={false} />
      </div>
      <div style={storyMatrixItemRowStyle}>
        <p style={sizeLabelStyle}>on</p>
        <SegmentedControl items={SAMPLE_ITEMS} activeId="one" fill />
      </div>
    </div>
}`,...(A=(N=p.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var R,_,F;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Size × style matrix from Figma — outlined and solid at each size.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {SIZES.map(size => <div key={size} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{size}</p>
          <div className="story-row" style={{
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
            {STYLES.map(style => <SegmentedControl key={style} items={SAMPLE_ITEMS} activeId="one" size={size} style={style} fill />)}
          </div>
        </div>)}
    </div>
}`,...(F=(_=u.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var W,O,Y;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Per-item states (outlined, medium, first segment) — default, hover, active, and disabled.'
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
          <div className="spark-segmented-control spark-segmented-control-medium spark-segmented-control-outlined">
            <SegmentedControlItem label="Text" active={active} position="first" size="medium" style="outlined" showIcon visualState={visualState} />
          </div>
        </div>)}
    </div>
}`,...(Y=(O=y.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var Z,D,H;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Solid style item states (medium, first segment) with icons — updated hover uses secondary border on white fill.'
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
          <div className="spark-segmented-control spark-segmented-control-medium spark-segmented-control-solid">
            <SegmentedControlItem label="Text" active={active} position="first" size="medium" style="solid" showIcon visualState={visualState} />
          </div>
        </div>)}
    </div>
}`,...(H=(D=S.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var U,q,B;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    showIcon: true,
    items: SAMPLE_ITEMS,
    activeId: 'one',
    fill: true
  }
}`,...(B=(q=x.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var G,J,K;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Position × state (outlined, medium). Hover and active segments get a full box border on all four sides per Figma \`183:997\`.'
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
          label: 'active',
          active: true,
          visualState: undefined
        }] as const).map(({
          label,
          active,
          visualState
        }) => <div key={label} className="spark-segmented-control spark-segmented-control-medium spark-segmented-control-outlined">
                <SegmentedControlItem label="Text" active={active} position={position} size="medium" style="outlined" showIcon visualState={visualState} />
              </div>)}
          </div>
        </div>)}
    </div>
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const ne=["Default","Interactive","Sizes","Styles","FillTypes","SizeStyleMatrix","ItemStates","SolidItemStates","WithIcons","ItemPositions"];export{n as Default,p as FillTypes,c as Interactive,f as ItemPositions,y as ItemStates,u as SizeStyleMatrix,m as Sizes,S as SolidItemStates,v as Styles,x as WithIcons,ne as __namedExportsOrder,de as default};
