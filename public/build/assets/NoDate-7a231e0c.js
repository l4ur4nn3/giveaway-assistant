import{j as c,F as a,a as e,n as r}from"./app-5c9e4cba.js";import{D as l}from"./Donation-0a66d4c6.js";import{N as o}from"./NavLink-87b3aeef.js";import{B as p}from"./Buttons-d2c5989d.js";import{R as m}from"./Responsive-7a5978a2.js";/* empty css            */import"./moment-fbc5633a.js";import"./transition-7f9b6245.js";import"./PrimaryButton-ff95da99.js";import"./SecondaryButton-da4c5f96.js";function k({donations:t}){return c(a,{children:[e(r,{title:"Scheduled w/o dates"}),c("div",{className:"mx-20",children:[e("header",{children:e(o,{auth:{user:"logged"}})}),c("div",{className:"max-md:hidden",children:[e("div",{className:"relative overflow-x-auto shadow-md sm:rounded-lg",children:c("table",{className:"w-full text-sm text-left text-gray-500",children:[e("thead",{className:"text-xs text-black-550 uppercase bg-gray-50",children:c("tr",{children:[e("th",{scope:"col",className:"px-6 py-3"}),e("th",{scope:"col",className:"px-6 py-3 truncate ...",children:"Date"}),e("th",{scope:"col",className:"px-6 py-3 truncate ...",children:"Status"}),e("th",{scope:"col",className:"px-6 py-3 truncate ...",children:"Notes"}),e("th",{scope:"col",className:"px-6 py-3 truncate ...",children:"Platform"}),e("th",{scope:"col",className:"px-6 py-3 truncate ...",children:"Shoutout ?"}),e("th",{scope:"col",className:"px-6 py-3 truncate ...",children:"Contact"}),e("th",{scope:"col",className:"px-6 py-3 truncate ...",children:"Discord user"}),e("th",{scope:"col",className:"px-6 py-3 truncate ...",children:"Discord ID"}),e("th",{scope:"col",className:"px-6 py-3 truncate ...",children:"Nookazon user"}),e("th",{scope:"col",className:"px-6 py-3 truncate ...",children:"Bells/NMTs"}),e("th",{scope:"col",className:"px-6 py-3 truncate ...",children:"Items"}),e("th",{scope:"col",className:"px-6 py-3 truncate ...",children:"Scheduled date"})]})}),e("tbody",{children:t.map(s=>e(l,{id:s.id,timestamp:s.timestamp,status:s.status,notes:s.notes,schedule_date:s.schedule_date,platform:s.platform,shoutout:s.shoutout,contact_method:s.contact_method,discord_username:s.discord_username,discord_id:s.discord_id,nookazon_username:s.nookazon_username,nookazon_link:s.nookazon_link,currencies:s.currencies,items:s.items},s.id))})]})}),e(p,{})]}),e(m,{})]})]})}export{k as default};
