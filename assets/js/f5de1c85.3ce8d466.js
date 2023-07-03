"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[7155],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3036:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},i="Get working!",l={unversionedId:"node/get-working",id:"node/get-working",title:"Get working!",description:"Get started on your API.",source:"@site/docs/5-node/4-get-working.mdx",sourceDirName:"5-node",slug:"/node/get-working",permalink:"/mern-workshop/docs/node/get-working",draft:!1,editUrl:"https://github.com/mongodb-developer/mern-workshop/blob/main/docs/5-node/4-get-working.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create more routes",permalink:"/mern-workshop/docs/node/more-routes"},next:{title:"Solutions",permalink:"/mern-workshop/docs/node/solution"}},s={},c=[],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-working"},"Get working!"),(0,o.kt)("p",null,"Get started on your API."),(0,o.kt)("p",null,'Start with a basic express server that has a "/" route that returns the server status.'),(0,o.kt)("p",null,"Then add a variable that will contain the data for your API. This variable should be an array of objects. Each object should represent a single item in your collection. Each object should have an id property that is a unique number and a name property that is a string."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You might want to reuse the same data from your previous project.")),(0,o.kt)("p",null,"Finally, create the following routes (changing ",(0,o.kt)("inlineCode",{parentName:"p"},"items")," to the name of your collection):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GET /items - returns the entire collection"),(0,o.kt)("li",{parentName:"ul"},"GET /items/:id - returns a single item"),(0,o.kt)("li",{parentName:"ul"},"POST /items - adds a new item to the collection"),(0,o.kt)("li",{parentName:"ul"},"PUT /items/:id - updates an item in the collection"),(0,o.kt)("li",{parentName:"ul"},"DELETE /items/:id - deletes an item from the collection")))}m.isMDXComponent=!0}}]);