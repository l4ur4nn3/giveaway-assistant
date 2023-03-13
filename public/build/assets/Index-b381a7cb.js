import{r as s,j as n,a as e,b as V,F as ne,n as re,d as le}from"./app-554e89a8.js";import{h as f}from"./moment-fbc5633a.js";import{k as oe,Q as ie}from"./react-toastify.esm-2a404e8c.js";import{F as g}from"./dialog-9cc9ce6c.js";import{t as h}from"./transition-b3776586.js";import{N as se}from"./NavLink-437482d7.js";import{R as de}from"./Responsive-97d69722.js";import{S as ce}from"./SecondaryButton-106f90e5.js";/* empty css            */import"./PrimaryButton-0514403d.js";const ue=o=>{const x=o.isNext;s.useState("");const y=t=>ie("Copied "+t+" to clipboard"),[a,N]=s.useState(x?new Date(Date.now()+28*24*60*60*1e3):new Date),[m,v]=s.useState({day:null,month:null,year:null}),[q,b]=s.useState(!1),[I,w]=s.useState(!1),[_,A]=s.useState(!1),[L,U]=s.useState(),[c,B]=s.useState({title:"title",imglink:"",description:"",shoutout:"",items:"",scheduled_date:"",discord_username:"",discord_id:"",nookazon_username:"",nookazon_link:"",formatted_shoutout:"",currencies:""});function E(t,i,r,u,l){switch(t){case"Yes - Shout out my Nookazon account":return i+" ("+r+")";case"Yes - shout out my Discord account":return u+" (<@"+l+">)";default:return"Anonymous Donor"}}async function G(){await navigator.clipboard.writeText(c.formatted_shoutout),await y("shoutout")}async function J(){await navigator.clipboard.writeText(c.items),await y("items")}async function P(){await navigator.clipboard.writeText(c.currencies),await y("NMT/Bells")}function R(t,i){if(o.auth.user!=null){const r={day:i,month:a.getMonth()+1,year:a.getFullYear()},u=f([r.day,r.month,r.year],"DD-MM-YYYY").format("YYYY-MM-DD");v(u);const l=M.filter(function(d){return d.schedule_date==u});if(l.length==0)return;w(!0);let S=[],Y=[],C=[],T=[],z=[],j=[],H=[],$=[];Object.keys(l).forEach(d=>{S.push(l[d].items),Y.push(l[d].shoutout),C.push(l[d].currencies),T.push(l[d].discord_username),z.push(l[d].discord_id),j.push(l[d].nookazon_username),H.push(l[d].nookazon_link),$.push(E(l[d].shoutout,l[d].nookazon_username,l[d].nookazon_link,l[d].discord_username,l[d].discord_id))}),console.log(l[0]),B({scheduled_date:l[0].schedule_date,title:l[0].title,imglink:l[0].img_link,shoutout:Y,description:l[0].description,items:S.join(", "),discord_username:T,discord_id:z,nookazon_username:j,nookazon_link:H,currencies:C.join(", "),formatted_shoutout:$.join(`
`)})}else t.ctrlKey?(v({day:i,month:a.getMonth()+1,year:a.getFullYear()}),console.log(m),b(!0)):(v({day:i,month:a.getMonth()+1,year:a.getFullYear()}),console.log(m),b(!0))}function k(t){A(!_),U(t)}const[D,W]=s.useState(o.appointments),M=o.donations,Q=()=>{N(new Date(a.setMonth(a.getMonth()+1)))},K=()=>{N(new Date(a.setMonth(a.getMonth()-1)))},X=()=>new Date(a.getFullYear(),a.getMonth()+1,0).getDate(),F=[];for(let t=1;t<=X();t++)F.push(t);const Z=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],p=["January","February","March","April","May","June","July","August","September","October","November","December"],ee=p[a.getMonth()];Z[a.getDay()],p[a.getMonth()-1]?p[a.getMonth()-1]:p[a.getMonth()+11];function te(t){t.preventDefault();const i={title:t.target.giveaway_title.value,img_link:t.target.giveaway_img_link.value,description:t.target.giveaway_description.value,schedule_date:t.target.giveaway_scheduled_date.value};V.put("/api/calendar/details/"+m,i).then(r=>{console.log(r)}),w(!1)}function ae(t){t.preventDefault();const i={nookazon_username:t.target.nookazon_username.value,discord_username:t.target.discord_username.value,appointment_date:f([m.day,m.month,m.year],"DD-MM-YYYY").format("YYYY-MM-DD"),appointment_time:t.target.appointment_time.value,contact_method:t.target.contact_method.value,email:t.target.email.value,appointment_type:"donor"};console.log(i),V.post("/api/appointments",i).then(r=>{W(r.data[0])}),b(!1),location.href="/thanks"}return n("div",{className:"mx-auto max-w-7xl mb-5 bg-gray-100",children:[e("div",{className:"flex justify-evenly w-full my-4",children:n("div",{className:"flex flex-row gap-4",children:[e("button",{className:"bg-sapin-500 text-lightgreen-500 rounded-lg w-24 py-2 hover:bg-lightgreen-500 hover:text-sapin-500",onClick:K,children:"Previous"}),n("h1",{className:"text-sapin-500 p-2 font-bold",children:[ee," ",a.getFullYear()]}),e("button",{className:"bg-sapin-500 text-lightgreen-500 rounded-lg w-24 py-2 hover:bg-lightgreen-500 hover:text-sapin-500",onClick:Q,children:"Next"})]})}),e("table",{className:"grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-7",children:F.map((t,i)=>n("td",{className:(t===new Date().getDate()&&a.getMonth()===new Date().getMonth()&&a.getFullYear()===new Date().getFullYear()?"border-red-500":"border-sapin-500")+" relative w-full h-32 border-2 cursor-pointer rounded-lg mx-auto bg-white",defaultValue:t,onMouseEnter:()=>{k(i)},onMouseLeave:()=>{k(i)},onClick:r=>{R(r,t)},children:[o.auth.user!=null&&M.map(r=>{if(r.schedule_date===`${a.getFullYear()}-${a.getMonth().toString().length==1?"0"+(a.getMonth()+1):a.getMonth()}-${t.toString().length==1?"0"+t:t}`)return e("div",{className:(r.status==="Queued for Discord"?"bg-[#d7ddf5]":"bg-[#d8f2df]")+" rounded-lg h-[99%] w-[99%] absolute"})}),o.auth.user!=null&&D.map((r,u)=>{if(r.appointment_date===`${a.getFullYear()}-${a.getMonth().toString().length==1?"0"+(a.getMonth()+1):a.getMonth()}-${t.toString().length==1?"0"+t:t}`)return n("div",{className:"absolute mt-2 ml-3 flex flex-row",children:[e("div",{className:r.appointment_type=="donor"?"bg-donatorblue-500 rounded-full w-3 h-3":"hidden"}),e("div",{className:r.appointment_type=="winner"?"bg-recevorgreen-500 rounded-full w-3 h-3 ml-3":"hidden"})]})}),n("div",{className:"flex absolute top-0.5 right-0 gap-2 items-center justify-end mr-5",children:[e("h4",{className:"text-lg font-semibold text-sapin-500",children:new Date(a.getFullYear(),a.getMonth(),t).toLocaleString("en-us",{weekday:"long"}).slice(0,3)}),e("h1",{className:"text-lg font-semibold text-gray-500",children:t})]}),e("hr",{className:(t===new Date().getDate()&&a.getMonth()===new Date().getMonth()&&a.getFullYear()===new Date().getFullYear()?"border-lightgreen-500":"border-sapin-500")+" border-1 absolute top-7 left-0 right-0 w-4/5 mx-auto"}),o.auth.user!=null&&_==!0&&L==i&&D.map((r,u)=>{if(r.appointment_date===`${a.getFullYear()}-${a.getMonth().toString().length==1?"0"+(a.getMonth()+1):a.getMonth()}-${t.toString().length==1?"0"+t:t}`)return e("div",{className:"flex flex-col gap-2 items-center justify-center text-center p-1 absolute left-0 right-0 top-8",children:e("h1",{className:r.contact_method=="Discord"?"bg-blurple-500 text-sm text-gray-500 p-1 text-center":"bg-pastelgreen-500 text-sm text-gray-500 p-1",children:r.nookazon_username?f(r.appointment_time,"HH:mm:ss").format("HH:mm")+" "+r.nookazon_username:f(r.appointment_time,"HH:mm:ss").format("HH:mm")+" "+r.discord_username})},u)})]},i))}),e(h,{appear:!0,show:q,as:s.Fragment,children:e(g,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:b,children:n("div",{className:"min-h-screen px-4 text-center bg-gray-500 bg-opacity-60",children:[e(h.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e(g.Overlay,{className:"fixed inset-0"})}),e("span",{className:"inline-block h-screen align-middle","aria-hidden":"true",children:"​"}),e(h.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:n("div",{className:" inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-300 shadow-xl rounded-2xl",children:[e(g.Title,{as:"h3",className:"text-xl font-bold leading-6 text-sapin-500 text-center p-2",children:"Create an appointment"}),e("div",{className:"mt-2",children:n("form",{onSubmit:ae,children:[n("div",{className:"mb-6",children:[e("label",{htmlFor:"username",className:"block mb-2 text-base font-semibold text-sapin-500",children:"Nookazon Username"}),e("input",{type:"text",id:"username",className:"bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-sapin-500 focus:border-sapin-500 block w-full p-2.50y-600r-gray-400-blue-500er-blue-500",placeholder:"Username",name:"nookazon_username"})]}),n("div",{className:"mb-6",children:[e("label",{htmlFor:"username",className:"block mb-2 text-base font-semibold text-sapin-500",children:"Discord Username"}),e("input",{type:"text",id:"username",className:"bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-sapin-500 focus:border-sapin-500 block w-full p-2.50y-600r-gray-400-blue-500er-blue-500",placeholder:"Username",name:"discord_username"})]}),n("div",{className:"mb-6",children:[e("label",{for:"email",className:"block mb-2 text-base font-semibold text-sapin-500",children:"email (optional)"}),e("input",{type:"email",id:"email",className:"bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-sapin-500 focus:border-sapin-500 block w-full p-2.50y-600r-gray-400-blue-500er-blue-500",placeholder:"email",name:"appointment_email"})]}),e("p",{className:"block mb-1 text-base font-semibold text-sapin-500",children:"Time for the exchange"}),e("div",{className:"flex flex-row justify-between",children:n("div",{className:"mb-6 w-full mr-2",children:[e("label",{htmlFor:"time",className:"block mb-2 text-base font-semibold text-gray-500"}),e("input",{type:"time",id:"time",min:"13:00",max:"21:30",className:"bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-sapin-500 focus:border-sapin-500 block w-full p-2.50y-600r-gray-400-blue-500er-blue-500",placeholder:"",required:!0,name:"appointment_time"})]})}),n("div",{className:"mb-6",children:[e("p",{className:"block mb-2 text-base font-semibold text-sapin-500",children:"Preferred way to be contacted"}),n("div",{className:"flex flex-col",children:[n("div",{children:[e("input",{type:"radio",id:"discord",value:"Discord",name:"contact_method",className:"hover:bg-lightgreen-500"}),e("label",{htmlFor:"discord",className:"pl-2 text-gray-500",children:"Discord"})]}),n("div",{children:[e("input",{type:"radio",id:"website",value:"Website",name:"contact_method",className:"hover:bg-lightgreen-500"}),e("label",{htmlFor:"website",className:"pl-2 text-gray-500",children:"Website"})]})]})]}),e("button",{type:"submit",className:"text-white bg-lightgreen-500 hover:bg-lightgreen-500 hover:text-sapin-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center0lue-700-blue-800",children:"Submit"})]})})]})})]})})}),e(h,{appear:!0,show:I,as:s.Fragment,children:e(g,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:w,children:n("div",{className:"min-h-screen px-4 text-center bg-gray-500 bg-opacity-60",children:[e(h.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e(g.Overlay,{className:"fixed inset-0"})}),e("span",{className:"inline-block h-screen align-middle","aria-hidden":"true",children:"​"}),e(h.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e("div",{className:" inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl",children:n("div",{className:"mt-2",children:[e(oe,{autoClose:1e3,position:"top-center"}),n("form",{onSubmit:te,children:[e("div",{className:"mb-6",children:e("input",{type:"text",id:"giveaway-title",className:"text-xl border-white w-full font-bold leading-6 text-sapin-500 text-center p-2",defaultValue:c.title?c.title:"Giveaway Title",name:"giveaway_title",required:!0})}),n("div",{className:"mb-6",children:[e("label",{htmlFor:"giveaway_img_link",className:"block mb-2 text-base font-semibold text-sapin-500 bg-white",children:"Image Link"}),e("input",{type:"text",id:"giveaway_img_link",className:"bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-sapin-500 focus:border-sapin-500 block w-full p-2.50y-600r-gray-400-blue-500er-blue-500",placeholder:"Image link...",name:"giveaway_img_link",defaultValue:c.imglink,required:!0})]}),n("div",{className:"mb-6",children:[e("label",{htmlFor:"giveaway_description",className:"block mb-2 text-base font-semibold text-sapin-500",children:"Giveaway Description"}),e("textarea",{id:"giveaway_description",className:"bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-sapin-500 focus:border-sapin-500 block w-full p-2.50y-600r-gray-400-blue-500er-blue-500",placeholder:"Giveaway description...",name:"giveaway_description",defaultValue:c.description,required:!0})]}),n("div",{className:"mb-6 text-center",children:[e("h4",{className:"block mb-2 text-base font-semibold text-sapin-500",children:"Shoutout"}),e("p",{className:"whitespace-pre overflow-hidden cursor-pointer",onClick:G,children:c.formatted_shoutout})]}),e("div",{className:"mb-6",children:n("table",{children:[n("tr",{children:[e("th",{className:"w-[50%] mb-2 text-base font-semibold text-center text-sapin-500",children:"Items"}),e("th",{className:"w-[50%] mb-2 text-base font-semibold text-center text-sapin-500",children:"NMT/Bells"})]}),n("tr",{children:[e("td",{className:"text-center cursor-pointer",onClick:J,children:c.items}),e("td",{className:"text-center cursor-pointer",onClick:P,children:c.currencies})]})]})}),n("div",{className:"mb-6",children:[e("label",{htmlFor:"giveaway_scheduled_date",className:"block mb-2 text-base font-semibold text-sapin-500",children:"Scheduled Date"}),e("input",{type:"date",id:"giveaway_scheduled_date",className:"text-center bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-sapin-500 focus:border-sapin-500 block w-full p-2.50y-600r-gray-400-blue-500er-blue-500",name:"giveaway_scheduled_date",defaultValue:c.scheduled_date,required:!0})]}),e("button",{type:"submit",className:"text-white bg-lightgreen-500 hover:bg-lightgreen-500 hover:text-sapin-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center0lue-700-blue-800",children:"Submit"})]})]})})})]})})})]})},O=ue;function Ne(o){function x(){return o.auth.user!=null?e(le,{href:"donations-nodate",children:e(ce,{children:"No Date!"})}):""}return n(ne,{children:[e(re,{title:"Calendar"}),n("div",{className:"mx-20 bg-gray-100",children:[e(se,{auth:o.auth}),n("div",{className:"max-md:hidden",children:[e(O,{auth:o.auth,appointments:o.appointments,donations:o.donations}),e("hr",{}),e(O,{auth:o.auth,appointments:o.appointments,donations:o.donations,isNext:1})]}),n("div",{className:"mb-6",children:[x(),e(de,{})]})]})]})}export{Ne as default};
