import{_ as f,r as h,j as s,a as e,n as g}from"./app-54d47fb5.js";import{C as b}from"./Checkbox-aed69db2.js";import{G as x}from"./GuestLayout-27883ca4.js";import{T as o,I as l}from"./TextInput-5d522b34.js";import{I as c}from"./InputLabel-024c8813.js";import{P as N}from"./PrimaryButton-eed4e8c7.js";/* empty css            */import"./ApplicationLogo-6c3e55c4.js";function P({status:m}){const{data:r,setData:i,post:u,processing:d,errors:n,reset:p}=f({username:"",password:"",remember:""});h.useEffect(()=>()=>{p("password")},[]);const t=a=>{i(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value)};return s(x,{children:[e(g,{title:"Log in"}),m&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:m}),s("form",{className:"",onSubmit:a=>{a.preventDefault(),u(route("login"))},children:[s("div",{className:"",children:[e(c,{forInput:"username",value:"Username"}),e(o,{id:"username",type:"text",name:"username",value:r.username,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,handleChange:t}),e(l,{message:n.username,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(c,{forInput:"password",value:"Password"}),e(o,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"current-password",handleChange:t}),e(l,{message:n.password,className:"mt-2"})]}),e("div",{className:"block mt-4",children:s("label",{className:"flex items-center",children:[e(b,{name:"remember",value:r.remember,handleChange:t}),e("span",{className:"ml-2 text-sm text-gray-600",children:"Remember me"})]})}),e("div",{className:"flex items-center justify-end mt-4",children:e(N,{className:"ml-4",processing:d,children:"Log in"})})]})]})}export{P as default};