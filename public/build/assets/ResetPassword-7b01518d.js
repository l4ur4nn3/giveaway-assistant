import{_ as f,r as h,j as a,a as s,n as v}from"./app-28e9b726.js";import{G as g}from"./GuestLayout-1cbb8493.js";import{T as m,I as n}from"./TextInput-e3039b5e.js";import{I as l}from"./InputLabel-6cc6f464.js";import{P as N}from"./PrimaryButton-ea37b4d9.js";/* empty css            */import"./ApplicationLogo-475a749f.js";function E({token:i,email:d}){const{data:r,setData:p,post:c,processing:u,errors:o,reset:w}=f({token:i,email:d,password:"",password_confirmation:""});h.useEffect(()=>()=>{w("password","password_confirmation")},[]);const t=e=>{p(e.target.name,e.target.value)};return a(g,{children:[s(v,{title:"Reset Password"}),a("form",{onSubmit:e=>{e.preventDefault(),c(route("password.store"))},children:[a("div",{children:[s(l,{forInput:"email",value:"Email"}),s(m,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",handleChange:t}),s(n,{message:o.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(l,{forInput:"password",value:"Password"}),s(m,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,handleChange:t}),s(n,{message:o.password,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(l,{forInput:"password_confirmation",value:"Confirm Password"}),s(m,{type:"password",name:"password_confirmation",value:r.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",handleChange:t}),s(n,{message:o.password_confirmation,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(N,{className:"ml-4",processing:u,children:"Reset Password"})})]})]})}export{E as default};