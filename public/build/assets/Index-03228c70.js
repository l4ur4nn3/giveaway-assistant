import{r as N,_ as v,j as a,F as u,a as e,n as k}from"./app-73b21419.js";import{D as x}from"./Donation-d624035a.js";import{C as r}from"./Checkbox-5f5baaf3.js";import{F as y}from"./PlatformList-e61b734c.js";import{N as C}from"./NavLink-f143c7ae.js";import{B as w}from"./Buttons-c8f67ca4.js";import{k as _}from"./react-toastify.esm-c4626cbb.js";/* empty css                      *//* empty css            */import"./moment-fbc5633a.js";import"./transition-8f3b56a7.js";import"./PrimaryButton-edafdf8a.js";import"./SecondaryButton-f20cf29a.js";function D(c){const[n,o]=N.useState(!1),i=()=>o(!n);console.log(c);const{data:l,setData:s}=v({nostatus:c.status[0].visible,cancelled:c.status[1].visible,completed:c.status[2].visible,dnr:c.status[3].visible,contacted:c.status[4].visible,invalid:c.status[5].visible,collected:c.status[6].visible,pending:c.status[7].visible,scheduleddiscord:c.status[8].visible,scheduledprograms:c.status[9].visible,scheduledwebsite:c.status[10].visible});function h(d){d.preventDefault();for(const m of Object.keys(l)){const f=l[m];axios.put("/api/donations-status/"+m,{visible:f}).then(g=>{console.log(m+g)})}i(),setTimeout(function(){window.location.reload()},2e3)}const t=d=>{s(d.target.name,d.target.type==="checkbox"?d.target.checked:d.target.value)},p=()=>{s({nostatus:!1,cancelled:!1,completed:!1,dnr:!1,contacted:!1,invalid:!1,collected:!1,pending:!1,scheduleddiscord:!1,scheduledprograms:!1,scheduledwebsite:!1})},b=()=>{s({nostatus:!0,cancelled:!0,completed:!0,dnr:!0,contacted:!0,invalid:!0,collected:!0,pending:!0,scheduleddiscord:!0,scheduledprograms:!0,scheduledwebsite:!0})};return a(u,{children:[e("p",{onClick:i,className:"cursor-default",children:"status ⇅"}),n&&a("form",{className:"w-auto h-auto bg-white absolute top-[3em] left-[8em] p-2 grid grid-cols-2 rounded-md border-2 gap-2 fixed z-10",onSubmit:h,children:[a("label",{className:"mr-6",children:[e(r,{id:"dnr",name:"dnr",value:l.remember,checked:l.dnr,handleChange:t}),e("span",{className:"ml-2",children:"DNR"})]}),a("label",{children:[e(r,{id:"invalid",name:"invalid",value:l.remember,checked:l.invalid,handleChange:t}),e("span",{className:"ml-2",children:"Invalid"})]}),a("label",{className:"mr-6",children:[e(r,{id:"contacted",name:"contacted",value:l.remember,checked:l.contacted,handleChange:t}),e("span",{className:"ml-2",children:"Contacted"})]}),a("label",{children:[e(r,{id:"pending",name:"pending",value:l.remember,checked:l.pending,handleChange:t}),e("span",{className:"ml-2",children:"Pending Pickup"})]}),a("label",{className:"mr-6",children:[e(r,{id:"collected",name:"collected",value:l.remember,checked:l.collected,handleChange:t}),e("span",{className:"ml-2",children:"Collected"})]}),a("label",{children:[e(r,{id:"scheduledwebsite",name:"scheduledwebsite",value:l.remember,checked:l.scheduledwebsite,handleChange:t}),e("span",{className:"ml-2",children:"Scheduled Web"})]}),a("label",{className:"mr-6",children:[e(r,{id:"scheduleddiscord",name:"scheduleddiscord",value:l.remember,checked:l.scheduleddiscord,handleChange:t}),e("span",{className:"ml-2",children:"Scheduled Discord"})]}),a("label",{children:[e(r,{id:"scheduledprograms",name:"scheduledprograms",value:l.remember,checked:l.scheduledprograms,handleChange:t}),e("span",{className:"ml-2",children:"Scheduled Programs"})]}),a("label",{className:"mr-6",children:[e(r,{id:"completed",name:"completed",value:l.remember,checked:l.completed,handleChange:t}),e("span",{className:"ml-2",children:"Completed"})]}),a("label",{children:[e(r,{id:"cancelled",name:"cancelled",value:l.remember,checked:l.cancelled,handleChange:t}),e("span",{className:"ml-2",children:"Cancelled"})]}),a("label",{className:"col-span-2 text-center",children:[e(r,{id:"nostatus",name:"nostatus",value:l.remember,checked:l.nostatus,handleChange:t}),e("span",{className:"ml-2",children:"No Status"})]}),e("p",{onClick:p,className:"bg-red-200 text-center cursor-pointer",children:"Clear All"}),e("p",{onClick:b,className:"bg-green-200 text-center cursor-pointer",children:"Check All"}),e("button",{type:"submit",className:"bg-green-200 col-span-2",children:"Apply Filters"})]})]})}function O({donations:c,status:n,auth:o,link:i,platform:l}){return a(u,{children:[e(k,{title:"Items List"}),a("div",{className:"mx-20",children:[e("header",{children:e(C,{auth:o,link:i})}),e(_,{autoClose:1e3,position:"top-center"}),e("div",{className:"relative overflow-x-scroll overflow-y-scroll max-h-[68vh] shadow-md sm:rounded-lg",children:a("table",{className:"w-full text-sm text-left text-gray-500",children:[e("thead",{className:"text-xs text-black-550 uppercase bg-gray-50 z-20 sticky top-0",children:a("tr",{children:[e("th",{scope:"col",className:"px-6 py-3 bg-gray-50 sticky left-0"}),e("th",{scope:"col",className:"px-6 py-3 truncate bg-gray-50 sticky left-[3rem] cursor-default ...",children:"Date"}),e("th",{scope:"col",className:"px-6 py-3 truncate bg-gray-50 cursor-default sticky left-[9.5rem] ...",children:e(D,{status:n})}),e("th",{scope:"col",className:"px-6 py-3 truncate cursor-default text-left...",children:"Notes"}),e("th",{scope:"col",className:"px-6 py-3 truncate cursor-default ...",children:e(y,{platform:l})}),e("th",{scope:"col",className:"px-6 py-3 truncate cursor-default ...",children:"Shoutout ?"}),e("th",{scope:"col",className:"px-6 py-3 truncate cursor-default ...",children:"Contact"}),e("th",{scope:"col",className:"px-6 py-3 truncate cursor-default ...",children:"Discord user"}),e("th",{scope:"col",className:"px-6 py-3 truncate cursor-default ...",children:"Discord ID"}),e("th",{scope:"col",className:"px-6 py-3 truncate cursor-default ...",children:"Nookazon user"}),e("th",{scope:"col",className:"px-6 py-3 truncate cursor-default ...",children:"Bells/NMTs"}),e("th",{scope:"col",className:"px-6 py-3 truncate cursor-default ...",children:"Items"}),e("th",{scope:"col",className:"px-6 py-3 truncate cursor-default ...",children:"Scheduled date"})]})}),e("tbody",{children:c.map(s=>e(x,{id:s.id,timestamp:s.timestamp,status:s.status,notes:s.notes,schedule_date:s.schedule_date,platform:s.platform,shoutout:s.shoutout,contact_method:s.contact_method,discord_username:s.discord_username,discord_id:s.discord_id,nookazon_username:s.nookazon_username,nookazon_link:s.nookazon_link,currencies:s.currencies,items:s.items},s.id))})]})}),e(w,{})]})]})}export{O as default};