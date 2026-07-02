import{j as t}from"./jsx-runtime-BYYWji4R.js";/* empty css                 */import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function n({children:l,className:p=""}){const m=["spark-dropdown-slot-panel",p].filter(Boolean).join(" ");return t.jsx("div",{className:m,children:t.jsx("div",{className:"spark-dropdown-slot-area",children:l})})}n.__docgenInfo={description:"",methods:[],displayName:"DropdownSlot",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const w={title:"Components/Dropdown/Slot",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Flexible dropdown panel with a blank slot area for custom layout injections (Figma Dropdown Slot)."}}}},e={},o={render:()=>t.jsx(n,{children:t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",color:"var(--semantic-content-secondary)",fontSize:"var(--typography-font-size-base)"},children:"Custom slot content"})})};var s,r,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var i,c,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <DropdownSlot>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      color: 'var(--semantic-content-secondary)',
      fontSize: 'var(--typography-font-size-base)'
    }}>
        Custom slot content
      </div>
    </DropdownSlot>
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const x=["Default","WithCustomContent"];export{e as Default,o as WithCustomContent,x as __namedExportsOrder,w as default};
