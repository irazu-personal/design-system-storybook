import{j as a}from"./jsx-runtime-BYYWji4R.js";import{O as o}from"./Overlay-DPQ3zSyg.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const y={title:"Components/Overlay",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"Spark Overlay — full-viewport scrim (`primitive/neutral/700` at 30% opacity) that blocks background interaction for Modals and Drawers."}},layout:"fullscreen"}},e={render:()=>a.jsx("div",{className:"spark-overlay-demo",children:a.jsx(o,{})})},r={parameters:{docs:{description:{story:"Typical usage behind a modal — overlay covers the viewport; dialog sits above."}}},render:()=>a.jsxs("div",{className:"spark-overlay-demo",children:[a.jsxs("div",{className:"spark-overlay-demo-content",children:[a.jsx("p",{className:"spark-overlay-demo-title",children:"Dashboard"}),a.jsx("p",{className:"spark-overlay-demo-body",children:"Main application surface."})]}),a.jsx(o,{}),a.jsxs("div",{className:"spark-overlay-demo-dialog",role:"dialog","aria-modal":"true","aria-label":"Example dialog",children:[a.jsx("p",{className:"spark-overlay-demo-dialog-title",children:"Confirm action"}),a.jsx("p",{className:"spark-overlay-demo-dialog-body",children:"Modal content appears above the overlay."})]})]})};var s,l,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <div className="spark-overlay-demo">
      <Overlay />
    </div>
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var d,t,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Typical usage behind a modal — overlay covers the viewport; dialog sits above.'
      }
    }
  },
  render: () => <div className="spark-overlay-demo">
      <div className="spark-overlay-demo-content">
        <p className="spark-overlay-demo-title">Dashboard</p>
        <p className="spark-overlay-demo-body">Main application surface.</p>
      </div>
      <Overlay />
      <div className="spark-overlay-demo-dialog" role="dialog" aria-modal="true" aria-label="Example dialog">
        <p className="spark-overlay-demo-dialog-title">Confirm action</p>
        <p className="spark-overlay-demo-dialog-body">Modal content appears above the overlay.</p>
      </div>
    </div>
}`,...(p=(t=r.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};const u=["Default","WithDialog"];export{e as Default,r as WithDialog,u as __namedExportsOrder,y as default};
