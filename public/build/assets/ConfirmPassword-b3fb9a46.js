import{K as p,r as l,j as a,a as s,n as c}from"./app-3aace665.js";import{G as u}from"./GuestLayout-3a6fb33c.js";import{T as f,I as w}from"./TextInput-d72ea57b.js";import{I as h}from"./InputLabel-c10ae274.js";import{P as g}from"./PrimaryButton-94f97d06.js";/* empty css            */import"./ApplicationLogo-c1910f65.js";function j(){const{data:e,setData:t,post:o,processing:n,errors:m,reset:i}=p({password:""});l.useEffect(()=>()=>{i("password")},[]);const d=r=>{t(r.target.name,r.target.value)};return a(u,{children:[s(c,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),a("form",{onSubmit:r=>{r.preventDefault(),o(route("password.confirm"))},children:[a("div",{className:"mt-4",children:[s(h,{forInput:"password",value:"Password"}),s(f,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,handleChange:d}),s(w,{message:m.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(g,{className:"ml-4",processing:n,children:"Confirm"})})]})]})}export{j as default};
