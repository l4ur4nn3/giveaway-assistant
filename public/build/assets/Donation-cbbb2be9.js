import{r as g,j as d,F as B,a as e,b,R as m}from"./app-45db63a0.js";import{h as D}from"./moment-fbc5633a.js";import{k as Q,Q as M}from"./react-toastify.esm-6aa8fb5f.js";import{P as W}from"./PrimaryButton-ed9128ec.js";import{t as w}from"./transition-6d6fc97f.js";import{F as _}from"./dialog-e9e7e677.js";function L(t){const n=t.props,[l,h]=g.useState({timestamp:n.timestamp,contact_method:n.contact_method,discord_id:n.discord_id,discord_username:n.discord_username,nookazon_link:n.nookazon_link,nookazon_username:n.nookazon_username,platform:n.platform,shoutout:n.shoutout,items:n.items,currencies:n.currencies,lines:1}),s=i=>{let o={};o={lines:i.target.value},h(r=>({...r,...o}))},x=i=>{let o={};o={items:i.target.value},h(r=>({...r,...o}))},v=i=>{let o={};o={currencies:i.target.value},h(r=>({...r,...o}))},[u,f]=g.useState(!1),p=()=>{f(!u),console.log(n)},c=i=>{i.preventDefault(),b.post("/api/donations-split",l).then(o=>{console.log(o)}),f(!1)};return d(B,{children:[e("p",{onClick:p,className:"underline border-green-300 text-l cursor-pointer hover:text-warmpink-500",children:"Split"}),e(w,{appear:!0,show:u,as:g.Fragment,children:e(_,{as:"div",className:"fixed inset-0 z-40 overflow-y-auto",onClose:p,children:d("div",{className:"min-h-screen px-4 text-center bg-gray-500 bg-opacity-60",children:[e(w.Child,{as:g.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e(_.Overlay,{className:"fixed inset-0"})}),e("span",{className:"inline-block h-screen align-middle","aria-hidden":"true",children:"​"}),e(w.Child,{as:g.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e("div",{className:" inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl",children:d("div",{className:"mt-2",children:[e(Q,{autoClose:1e3,position:"top-center"}),d("h1",{className:"text-center text-2xl pb-4",children:["Split ",n.contact_method=="Website"?n.nookazon_username:n.discord_username,"'s donation"]}),e("h2",{className:"font-bold",children:"Base NMT/Bells"}),e("p",{children:n.currencies}),e("h2",{className:"font-bold",children:"Base Items"}),e("p",{className:"pb-4",children:n.items}),d("form",{onSubmit:c,children:[e("label",{htmlFor:"split_currencies",className:"font-bold",children:"New NMT/Bells"}),e("br",{}),e("input",{type:"text",id:"split_currencies",defaultValue:l.currencies,onChange:i=>v(i),className:"w-full"}),e("br",{}),e("label",{htmlFor:"split_items",className:"font-bold",children:"New Items"})," ",e("br",{}),e("input",{type:"text",id:"split_items",defaultValue:l.items,onChange:i=>x(i),className:"w-full"}),e("br",{}),e("label",{htmlFor:"dropdown",className:"font-bold",children:"Number of Lines"})," ",e("br",{}),d("select",{name:"dropdown",id:"dropdown",defaultValue:l.lines,onChange:i=>s(i),children:[e("option",{children:"1"}),e("option",{children:"2"}),e("option",{children:"3"}),e("option",{children:"4"}),e("option",{children:"5"}),e("option",{children:"6"}),e("option",{children:"7"}),e("option",{children:"8"}),e("option",{children:"9"}),e("option",{children:"10"})]}),e("br",{}),e(W,{type:"submit",className:"mt-4",children:"Generate New Lines"})]})]})})})]})})})]})}const R=t=>{const n=a=>M("Copied "+a+" to clipboard"),[l,h]=m.useState({status:t.status}),[s,x]=m.useState({currencies:t.currencies}),[v,u]=m.useState(!1),[f,p]=m.useState({note:t.notes}),[c,i]=m.useState({items:t.items}),[o,r]=m.useState(!1),[C,I]=m.useState(0),F=()=>{switch(t.shoutout){case"Yes - Shout out my Nookazon account":return"Yes - Nookazon";case"Yes - Shout out my Discord account":return"Yes - Discord";case"No - I would like to remain anonymous":return"No";default:return"Something went wrong"}},z=()=>{switch(l.status){case"Pending pick up":return"bg-cream-550 border-[#f9fafb]";case"Did Not Respond":return"bg-red-575 border-[#f9fafb]";case"Queued for Programs":return"bg-purple-550 border-[#f9fafb]";case"Queued for Website":return"bg-lightgreen-550 border-[#f9fafb]";case"Queued for Discord":return"bg-discord-550 border-[#f9fafb]";case"Donator Contacted":return"bg-yellow-550 border-[#f9fafb]";case"Items Collected":return"bg-orange-550 border-[#f9fafb]";case"Invalid":return"bg-red-575 border-[#f9fafb]";case"Cancelled":return"bg-red-575 border-[#f9fafb]";case"Completed":return"bg-gris-550 border-[#f9fafb]";default:return"bg-white border-[#f9fafb]"}};D(new Date).format("YYYY-MM-DD");const y=a=>{a.preventDefault(),r(!1),i({items:c}),b.put("/api/donations/"+t.id,{items:c})},k=a=>{u(!1),a.preventDefault(),x({currencies:s}),b.put("/api/donations/"+t.id,{currencies:s})},E=a=>{h({...l,[a.target.name]:a.target.value}),b.put("/api/donations/"+t.id,{status:a.target.value}).then(N=>{})},S=a=>{a.preventDefault(),b.put("/api/donations/"+t.id,{notes:f}).then(N=>{console.log(N)})};async function Y(){await navigator.clipboard.writeText(t.discord_id),await n(t.discord_username+"'s ID ")}async function P(a){t.canEdit&&(a.shiftKey?r(!0):(await navigator.clipboard.writeText(t.items),await n('"'+t.items+'"')))}async function V(a){t.canEdit&&(a.shiftKey?u(!0):(await navigator.clipboard.writeText(t.currencies),await n('"'+t.currencies+'"')))}const T=a=>{h({...l,[a.target.name]:a.target.value}),b.put("/api/donations/"+t.id,{schedule_date:a.target.value}).then(N=>{console.log(N)})};return d("tr",{className:C?"bg-[#fffbab] border-b leading-tight":"bg-white border-b leading-tight",children:[e("td",{className:"pl-6 sticky z-10 bg-white left-0",children:e("input",{type:"checkbox",tabIndex:"-1",id:"checkbox"+t.id,onChange:a=>I(!C),disabled:!t.canEdit})}),e("td",{className:"pr-6 truncate z-10 bg-white sticky left-[3rem] ...",children:D(t.timestamp).format("DD-MM-YYYY")}),e("td",{className:"sticky z-10 left-[9.5rem]",children:e("form",{id:"form"+t.id,children:d("select",{name:"status",tabIndex:"-1",id:"status"+t.id,value:l.status,defaultValue:t.status,className:z()+" py-1 ml-[-2px] truncate ...",onChange:E,disabled:!t.canEdit,children:[e("option",{value:"Invalid",children:"Invalid"}),e("option",{value:"Splitted",children:"Splitted"}),e("option",{value:"Did Not Respond",children:"DNR"}),e("option",{value:"Donator Contacted",children:"Contacted"}),e("option",{value:"Pending pick up",children:"Pending Pickup"}),e("option",{value:"Items Collected",children:"Collected"}),e("option",{value:"Queued for Website",children:"Scheduled Web"}),e("option",{value:"Queued for Discord",children:"Scheduled Discord"}),e("option",{value:"Queued for Programs",children:"Scheduled Programs"}),e("option",{value:"Giveaway Live",children:"Giveaway Live"}),e("option",{value:"Completed",children:"Completed"}),e("option",{value:"Winner Contacted",children:"Winner Contacted"}),e("option",{value:"Cancelled",children:"Cancelled"}),e("option",{value:""})]})})}),e("td",{className:"pl-6 truncate ...",children:e("form",{id:"note"+t.id,onSubmit:t.notes===f.note?()=>console.log("If you see this, you are too curious."):S,className:"flex flex-row",children:e("input",{type:"text",defaultValue:t.notes,className:"leading-3 p-1 border-[#f9fafb]",onChange:a=>p(a.target.value),onBlur:t.notes===f.note?()=>console.log("If you see this, you are too curious."):S,disabled:!t.canEdit})})}),e("td",{className:"px-6 truncate ...",children:t.platform=="Nookazon Programs (i.e. Streams, Contests, etc.)"?"Nookazon Programs":t.platform}),e("td",{className:"px-6 text-center truncate ...",children:F()}),e("td",{className:"px-6 truncate ...",children:t.contact_method}),e("td",{className:"px-6 truncate max-w-[215px] hover:max-w-[5000px] ...",children:t.discord_username}),e("td",{className:"px-6 truncate max-w-[215px] hover:max-w-[5000px] hover:cursor-pointer ...",onClick:Y,children:t.discord_id}),e("td",{className:"px-6 truncate ...",children:e("a",{href:t.nookazon_link,tabIndex:"-1",target:"_blank",children:t.nookazon_username})}),e("td",{className:"px-6 max-w-[250px] hover:max-w-[5000px] truncate ...",children:e("form",{id:"currencies"+t.id,onSubmit:t.currencies===s.currencies?()=>u(!1):k,className:"flex flex-row",children:v?e("input",{type:"text",autoFocus:!0,defaultValue:s.currencies,className:"leading-3 p-1 border-[#f9fafb]",onChange:a=>x(a.target.value),onBlur:t.currencies===s.currencies?()=>u(!1):k}):e("p",{className:t.canEdit?"cursor-pointer":"cursor-text",onClick:V,children:s.currencies})})}),e("td",{className:"px-6 max-w-[250px] hover:max-w-[5000px] truncate ...",children:e("form",{id:"items"+t.id,onSubmit:t.items===c.items?()=>r(!1):y,className:"flex flex-row",children:o?e("input",{type:"text",autoFocus:!0,defaultValue:c.items,className:"leading-3 p-1 border-[#f9fafb] w-auto",onChange:a=>i(a.target.value),onBlur:t.items===c.items?()=>r(!1):y}):e("p",{className:t.canEdit?"cursor-pointer":"cursor-text",onClick:P,children:c.items})})}),e("td",{className:"px-6 truncate ...",children:e("input",{type:"date",tabIndex:"-1",className:t.schedule_date?"border-[#f9fafb] py-1":"text-red-500 border-[#FED3CD] py-1",defaultValue:t.schedule_date,onChange:T,disabled:!t.canEdit})}),e("td",{className:t.canEdit?"":"hidden px-6 truncate ...",children:e(L,{props:t})})]})},q=R;export{q as D};