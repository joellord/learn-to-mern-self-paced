"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[4572],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},l="Understanding JSX",s={unversionedId:"react/jsx",id:"react/jsx",title:"Understanding JSX",description:"You might have noticed this weird syntax in your App.js file:",source:"@site/docs/4-react/6-jsx.mdx",sourceDirName:"4-react",slug:"/react/jsx",permalink:"/mern-workshop/docs/react/jsx",draft:!1,editUrl:"https://github.com/mongodb-developer/mern-workshop/blob/main/docs/4-react/6-jsx.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Components",permalink:"/mern-workshop/docs/react/passing-data"},next:{title:"Get Working!",permalink:"/mern-workshop/docs/react/get-working"}},i={},c=[{value:"Why Use JSX?",id:"why-use-jsx",level:2},{value:"Using JavaScript with JSX components",id:"using-javascript-with-jsx-components",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"understanding-jsx"},"Understanding JSX"),(0,a.kt)("p",null,"You might have noticed this weird syntax in your ",(0,a.kt)("inlineCode",{parentName:"p"},"App.js")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const element = <h1>Hello, world!</h1>;\n")),(0,a.kt)("p",null,"This is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript."),(0,a.kt)("p",null,"JSX produces React \u201celements\u201d. We will explore rendering them to the DOM in the next section. Below, you can find the basics of JSX necessary to get you started."),(0,a.kt)("p",null,"At first, this syntax might look scary, but don't worry! It's simply a syntax extension of JavaScript and it's recommended to use it with React to describe what the UI should look like. It may remind you of a template language, but it comes with the full power of JavaScript."),(0,a.kt)("p",null,"In the end, it gets transpiled to JavaScript. The following two examples are identical:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'const element = (\n  <h1 className="greeting">\n    Hello, world!\n  </h1>\n);\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const element = React.createElement(\n  'h1',\n  {className: 'greeting'},\n  'Hello, world!'\n);\n")),(0,a.kt)("p",null,"When you have more complex objects, with embedded HTML tags, you really appreciate JSX. For example, this is a valid JSX expression:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const element = (\n  <div>\n    <h1>Hello!</h1>\n    <h2>Good to see you <i>here</i>.</h2>\n  </div>\n);\n")),(0,a.kt)("p",null,"If you type this in regular JavaScript, the equivalent would be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const element = React.createElement(\n  'div',\n  null,\n  React.createElement(\n    'h1',\n    null,\n    'Hello!'\n  ),\n  React.createElement(\n    'h2',\n    null,\n    'Good to see you ',\n    React.createElement(\n      'i',\n      null,\n      'here'\n    ),\n    '.'\n  )\n);\n")),(0,a.kt)("h2",{id:"why-use-jsx"},"Why Use JSX?"),(0,a.kt)("p",null,"React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display."),(0,a.kt)("p",null,"Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called \u201ccomponents\u201d that contain both. We will come back to components in a further section, but if you\u2019re not yet comfortable putting markup in JS, this talk might convince you otherwise."),(0,a.kt)("p",null,"React doesn\u2019t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages."),(0,a.kt)("h2",{id:"using-javascript-with-jsx-components"},"Using JavaScript with JSX components"),(0,a.kt)("p",null,"You can put any valid JavaScript expression inside the curly braces in JSX. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"2 + 2"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"user.firstName"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"formatName(user)")," are all valid JavaScript expressions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function formatName(user) {\n  return user.firstName + ' ' + user.lastName;\n}\n\nconst user = {\n  firstName: 'Harper',\n  lastName: 'Perez'\n};\n\nconst element = (\n  <h1>\n    Hello, {formatName(user)}!\n  </h1>\n);\n")),(0,a.kt)("p",null,"You can also do conditionals:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function Component() {\n  return (\n    <div>\n      {messages.length > 0 &&\n        <h2>\n          You have {messages.length} unread messages.\n        </h2>\n      }\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,"Or even loops:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function Component() {\n  return (\n    <ul>\n      {messages.map((message) =>\n        <li>{message}</li>\n      )}\n    </ul>\n  );\n}\n")))}m.isMDXComponent=!0}}]);