import{R as r,j as i,a as e,b as d}from"./app-735b3361.js";import{h}from"./moment-fbc5633a.js";import{Q as y}from"./react-toastify.esm-1d944ca3.js";const C=t=>{const m=a=>y("Copied "+a+" to clipboard"),[n,c]=r.useState({status:t.status}),[s,b]=r.useState({note:t.notes});r.useState(!1);const[u,g]=r.useState(0),x=()=>{switch(t.shoutout){case"Yes - Shout out my Nookazon account":return"Yes - Nookazon";case"Yes - shout out my Discord account":return"Yes - Discord";default:return"No"}},f=()=>{switch(n.status){case"Pending pick up":return"bg-cream-550 border-[#e5e5e5] py-1 truncate ...";case"Did Not Respond":return"bg-red-575 border-[#e5e5e5] py-1 truncate ...";case"Queued for Programs":return"bg-purple-550 border-[#e5e5e5] py-1 truncate ...";case"Queued for Website":return"bg-lightgreen-550 border-[#e5e5e5] py-1 truncate ...";case"Queued for Discord":return"bg-discord-550 border-[#e5e5e5] py-1 truncate ...";case"Donator Contacted":return"bg-yellow-550 border-[#e5e5e5] py-1 truncate ...";case"Items Collected":return"bg-orange-550 border-[#e5e5e5] py-1 truncate ...";case"Invalid":return"bg-red-575 border-[#e5e5e5] py-1 truncate ...";case"Cancelled":return"bg-red-575 border-[#e5e5e5] py-1 truncate ...";case"Complete":return"bg-gris-550 border-[#e5e5e5] py-1 truncate ...";default:return"bg-white border-[#e5e5e5] py-1"}},p=h(new Date).format("YYYY-MM-DD"),N=a=>{c({...n,[a.target.name]:a.target.value}),d.put("/api/donations/"+t.id,{status:a.target.value}).then(o=>{})},l=a=>{a.preventDefault(),d.put("/api/donations/"+t.id,{notes:s}).then(o=>{console.log(o)})};async function v(){await navigator.clipboard.writeText(t.discord_id),await m(t.discord_username+"'s ID ")}const D=a=>{c({...n,[a.target.name]:a.target.value}),d.put("/api/donations/"+t.id,{schedule_date:a.target.value}).then(o=>{console.log(o)})};return i("tr",{className:u?"bg-[#fffbab] border-b leading-tight":"bg-white border-b leading-tight",children:[e("td",{className:"pl-6",children:e("input",{type:"checkbox",tabIndex:"-1",id:"checkbox"+t.id,onChange:a=>g(!u)})}),e("td",{className:"pr-6 truncate ...",children:h(t.timestamp).format("DD-MM-YYYY")}),e("td",{className:"",children:e("form",{id:"form"+t.id,children:i("select",{name:"status",tabIndex:"-1",id:"status"+t.id,value:n.status,defaultValue:t.status,className:f(),onChange:N,children:[e("option",{value:"Invalid",children:"Invalid"}),e("option",{value:"Did Not Respond",children:"DNR"}),e("option",{value:"Donator Contacted",children:"Contacted"}),e("option",{value:"Pending pick up",children:"Pending Pickup"}),e("option",{value:"Items Collected",children:"Collected"}),e("option",{value:"Queued for Website",children:"Scheduled Web"}),e("option",{value:"Queued for Discord",children:"Scheduled Discord"}),e("option",{value:"Queued for Programs",children:"Scheduled Programs"}),e("option",{value:"Completed",children:"Done"}),e("option",{value:"Cancelled",children:"Cancelled"}),e("option",{value:""})]})})}),e("td",{className:"pl-6 truncate ...",children:e("form",{id:"note"+t.id,onSubmit:l,className:"flex flex-row",children:e("input",{type:"text",defaultValue:t.notes,className:"leading-3 p-1 border-[#e5e5e5]",onChange:a=>b(a.target.value),onBlur:t.notes===s.note?()=>console.log("If you see this, you are too curious."):l})})}),e("td",{className:"px-6 truncate ...",children:t.platform=="Nookazon Programs (i.e. Streams, Contests, etc.)"?"Nookazon Programs":t.platform}),e("td",{className:"px-6 text-center truncate ...",children:x()}),e("td",{className:"px-6 truncate ...",children:t.contact_method}),e("td",{className:"px-6 truncate max-w-[215px] hover:max-w-[5000px] ...",children:t.discord_username}),e("td",{className:"px-6 truncate max-w-[215px] hover:max-w-[5000px] hover:cursor-pointer ...",onClick:v,children:t.discord_id}),e("td",{className:"px-6 truncate ...",children:e("a",{href:t.nookazon_link,tabIndex:"-1",children:t.nookazon_username})}),e("td",{className:"px-6 max-w-[250px] hover:max-w-[5000px] truncate ...",children:t.currencies}),e("td",{className:"px-6 max-w-[250px] hover:max-w-[5000px] truncate ...",children:t.items}),e("td",{className:"px-6 truncate ...",children:e("input",{type:"date",min:p,tabIndex:"-1",className:t.schedule_date?"border-[#e5e5e5] py-1":"text-red-500 border-[#FED3CD] py-1",defaultValue:t.schedule_date,onChange:D})})]})},Y=C;export{Y as D};