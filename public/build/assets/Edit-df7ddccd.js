import{a as e,d as l,r as c,j as r,n as h}from"./app-7bd055ca.js";import{A as u}from"./ApplicationLogo-2b8d2d4f.js";import{N as p,D as o}from"./NavLink-e8e2e25b.js";import x from"./DeleteUserForm-5607a471.js";import g from"./UpdatePasswordForm-e28a9082.js";import f from"./UpdateProfileInformationForm-65fd2e25.js";/* empty css            */import"./transition-547da5f9.js";import"./PrimaryButton-0874e1e7.js";import"./SecondaryButton-2914276a.js";import"./TextInput-db29b724.js";import"./InputLabel-336b843a.js";import"./dialog-1737187b.js";function d({method:i="get",as:a="a",href:t,active:s=!1,children:n}){return e(l,{method:i,as:a,href:t,className:`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${s?"border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out`,children:n})}function b({auth:i,header:a,children:t}){const[s,n]=c.useState(!1);return r("div",{className:"min-h-screen bg-gray-100",children:[r("nav",{className:"bg-white border-b border-gray-100",children:[e("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:r("div",{className:"flex justify-between h-16",children:[r("div",{className:"flex",children:[e("div",{className:"shrink-0 flex items-center",children:e(l,{href:"/",children:e(u,{className:"block h-9 w-auto fill-current text-gray-800"})})}),e("div",{className:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex",children:e(p,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"})})]}),e("div",{className:"hidden sm:flex sm:items-center sm:ml-6",children:e("div",{className:"ml-3 relative",children:r(o,{children:[e(o.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:r("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:[i.user.name,e("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),r(o.Content,{children:[e(o.Link,{href:route("profile.edit"),children:"Profile"}),e(o.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})})}),e("div",{className:"-mr-2 flex items-center sm:hidden",children:e("button",{onClick:()=>n(m=>!m),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:r("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e("path",{className:s?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e("path",{className:s?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),r("div",{className:(s?"block":"hidden")+" sm:hidden",children:[e("div",{className:"pt-2 pb-3 space-y-1",children:e(d,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"})}),r("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[r("div",{className:"px-4",children:[e("div",{className:"font-medium text-base text-gray-800",children:i.user.name}),e("div",{className:"font-medium text-sm text-gray-500",children:i.user.email})]}),r("div",{className:"mt-3 space-y-1",children:[e(d,{href:route("profile.edit"),children:"Profile"}),e(d,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]})]}),a&&e("header",{className:"bg-white shadow",children:e("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:a})}),e("main",{children:t})]})}function U({auth:i,mustVerifyEmail:a,status:t}){return r(b,{auth:i,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Profile"}),children:[e(h,{title:"Profile"}),e("div",{className:"py-12",children:r("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6",children:[e("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:e(f,{mustVerifyEmail:a,status:t,className:"max-w-xl"})}),e("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:e(g,{className:"max-w-xl"})}),e("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:e(x,{className:"max-w-xl"})})]})})]})}export{U as default};