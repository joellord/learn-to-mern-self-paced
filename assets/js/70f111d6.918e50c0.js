"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[1582],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9515:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},c="Get working",i={unversionedId:"express-react/get-working",id:"express-react/get-working",title:"Get working",description:"Time to get that last piece in place. You have a fully functional API, let's connect the front-end to it.",source:"@site/docs/8-express-react/4-get-working.mdx",sourceDirName:"8-express-react",slug:"/express-react/get-working",permalink:"/mern-workshop/docs/express-react/get-working",draft:!1,editUrl:"https://github.com/mongodb-developer/mern-workshop/blob/main/docs/8-express-react/4-get-working.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React useEffect",permalink:"/mern-workshop/docs/express-react/effect"},next:{title:"Solution",permalink:"/mern-workshop/docs/express-react/solution"}},s={},l=[],p={toc:l},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-working"},"Get working"),(0,o.kt)("p",null,"Time to get that last piece in place. You have a fully functional API, let's connect the front-end to it."),(0,o.kt)("p",null,"Replace the hard-coded data in your component with a call to the API. You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch")," API to do this. You can use the following code to retrieve data from the API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fetch('http://localhost:5050/books')\n  .then(response => response.json())\n  .then(data => console.log(data));\n")),(0,o.kt)("p",null,"Now use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useState")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hooks to store the data in the component's state and render it to the screen."))}f.isMDXComponent=!0}}]);