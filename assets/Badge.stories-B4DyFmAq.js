import{j as e}from"./jsx-runtime-BYYWji4R.js";import{s as b,a as y,b as v}from"./storyHelpers-D7QoSJ90.js";import{B as r}from"./Badge-Nok36i8c.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const k={title:"Components/Badge",component:r,tags:["autodocs"],argTypes:{amount:{control:"text"}},args:{amount:"21"},parameters:{docs:{description:{component:"Spark Badge — compact count indicator for navigation and tabs. Anchors to interactive elements to surface real-time updates."}}}},a={},t={parameters:{docs:{description:{story:"Common count values — single digit, double digit, and compact overflow."}}},render:()=>e.jsx("div",{style:b,children:["1","9","21","99+"].map(o=>e.jsxs("div",{style:y,children:[e.jsx("p",{style:v,children:o}),e.jsx(r,{amount:o})]},o))})},s={parameters:{docs:{description:{story:"Typical placement on a navigation label — badge sits beside the tab text, not inside table cells."}}},render:()=>e.jsxs("div",{className:"spark-badge-nav-demo",children:[e.jsx("span",{className:"spark-badge-nav-label",children:"Inbox"}),e.jsx(r,{amount:"21"})]})};var n,i,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,m,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Common count values — single digit, double digit, and compact overflow.'
      }
    }
  },
  render: () => <div style={storyMatrixSectionStyle}>
      {['1', '9', '21', '99+'].map(amount => <div key={amount} style={storyMatrixItemRowStyle}>
          <p style={sizeLabelStyle}>{amount}</p>
          <Badge amount={amount} />
        </div>)}
    </div>
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,u,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Typical placement on a navigation label — badge sits beside the tab text, not inside table cells.'
      }
    }
  },
  render: () => <div className="spark-badge-nav-demo">
      <span className="spark-badge-nav-label">Inbox</span>
      <Badge amount="21" />
    </div>
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const B=["Default","AmountMatrix","OnNavigation"];export{t as AmountMatrix,a as Default,s as OnNavigation,B as __namedExportsOrder,k as default};
