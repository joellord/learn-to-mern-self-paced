"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[3115],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),d=u(t),p=o,f=d["".concat(s,".").concat(p)]||d[p]||c[p]||i;return t?r.createElement(f,l(l({ref:n},m),{},{components:t})):r.createElement(f,l({ref:n},m))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=p;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[d]="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7658:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const i={},l="\ud83e\uddb8 Advanced - Get working!",a={unversionedId:"mongodb/exercises",id:"mongodb/exercises",title:"\ud83e\uddb8 Advanced - Get working!",description:"Time for you to explore the aggregation pipelines. Using the aggregation builder, can you find the following?",source:"@site/docs/6-mongodb/6-exercises.mdx",sourceDirName:"6-mongodb",slug:"/mongodb/exercises",permalink:"/learn-to-mern-self-paced/docs/mongodb/exercises",draft:!1,editUrl:"https://github.com/mongodb-developer/learn-to-mern-self-paced/blob/main/docs/6-mongodb/6-exercises.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddb8 Advanced - Aggregation Pipelines",permalink:"/learn-to-mern-self-paced/docs/mongodb/aggregations"},next:{title:"Connecting MongoDB and Express",permalink:"/learn-to-mern-self-paced/docs/category/connecting-mongodb-and-express"}},s={},u=[],m={toc:u},d="wrapper";function c(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-advanced---get-working"},"\ud83e\uddb8 Advanced - Get working!"),(0,o.kt)("p",null,"Time for you to explore the aggregation pipelines. Using the aggregation builder, can you find the following?"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"sample_mflix")," collection:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The number of movies released in 2000")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Hint"),(0,o.kt)("div",null,"Use $match to find the matching documents, then use $count to count the number of documents.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Answer"),(0,o.kt)("div",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'[\n  {\n    $match:\n      /**\n       * Provide any number of field/order pairs.\n       */\n      {\n        year: 2000,\n      },\n  },\n  {\n    $count:\n      /**\n       * newField: The new field name.\n       */\n      "movies",\n  },\n]\n')))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},'The number of movies with a title that starts with "C"')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Hint"),(0,o.kt)("div",null,"Use $match with a regular expression to find the matching documents, then use $count to count the number of documents.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Answer"),(0,o.kt)("div",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'[\n  {\n    $match:\n      /**\n       * Provide any number of field/order pairs.\n       */\n      {\n        title: {\n          $regex: /^C/,\n        },\n      },\n  },\n  {\n    $count:\n      /**\n       * newField: The new field name.\n       */\n      "movies",\n  },\n]\n')))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"The movie genre that occured the most in 2000")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Hint"),(0,o.kt)("div",null,"Use $match to find the matching documents, then use $unwind to unwind the array, then use $sortByCount to count the number of documents.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Answer"),(0,o.kt)("div",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'[\n  {\n    $match:\n      /**\n       * Provide any number of field/order pairs.\n       */\n      {\n        year: 2000,\n      },\n  },\n  {\n    $unwind:\n      /**\n       * path: The array field path.\n       * includeArrayIndex: Optional.\n       *   The name of a new field to hold\n       *   the array index of the element.\n       * preserveNullAndEmptyArrays: Optional.\n       *   If true, if the path is null,\n       *   missing, or an empty array,\n       *   $unwind outputs the document.\n       *   If false, if path is null,\n       *   missing, or an empty array,\n       *   $unwind does not output a document.\n       */\n      "$genres",\n  },\n  {\n    $sortByCount:\n      /**\n       * expression: The expression to group by.\n       */\n      "$genres",\n  },\n]\n')))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"The country with the most runtime minutes for comedies released in 2010")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Hint"),(0,o.kt)("div",null,"Similar to the previous one, but use a $sum operator in your $group stage.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Answer"),(0,o.kt)("div",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'[\n  {\n    $match:\n      /**\n       * Provide any number of field/order pairs.\n       */\n      {\n        year: 2010,\n        genres: "Comedy",\n      },\n  },\n  {\n    $unwind:\n      /**\n       * path: The array field path.\n       * includeArrayIndex: Optional.\n       *   The name of a new field to hold\n       *   the array index of the element.\n       * preserveNullAndEmptyArrays: Optional.\n       *   If true, if the path is null,\n       *   missing, or an empty array,\n       *   $unwind outputs the document.\n       *   If false, if path is null,\n       *   missing, or an empty array,\n       *   $unwind does not output a document.\n       */\n      "$countries",\n  },\n  {\n    $group:\n      /**\n       * _id: The id of the group.\n       * fieldN: The first field name.\n       */\n      {\n        _id: "$countries",\n        totalMinutes: {\n          $sum: "$runtime",\n        },\n      },\n  },\n  {\n    $sort:\n      /**\n       * Provide any number of field/order pairs.\n       */\n      {\n        totalMinutes: -1,\n      },\n  },\n]\n')))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Check if the value from ",(0,o.kt)("inlineCode",{parentName:"li"},"num_mflix_comments"),' matches the actual number of comments for the movie "The Godfather"')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Hint"),(0,o.kt)("div",null,"Use $match to find the matching document, then use a $lookup to join the comments collection and $count to count the number of comments.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Answer"),(0,o.kt)("div",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'[\n  {\n    $match:\n      /**\n       * Provide any number of field/order pairs.\n       */\n      {\n        title: "The Godfather",\n      },\n  },\n  {\n    $lookup:\n      /**\n       * from: The target collection.\n       * localField: The local join field.\n       * foreignField: The target join field.\n       * as: The name for the results.\n       * pipeline: Optional pipeline to run on the foreign collection.\n       * let: Optional variables to use in the pipeline field stages.\n       */\n      {\n        from: "comments",\n        localField: "_id",\n        foreignField: "movie_id",\n        as: "comments",\n      },\n  },\n  {\n    $addFields:\n      /**\n       * newField: The new field name.\n       * expression: The new field expression.\n       */\n      {\n        commentsCount: {\n          $size: "$comments",\n        },\n      },\n  },\n  {\n    $addFields:\n      /**\n       * newField: The new field name.\n       * expression: The new field expression.\n       */\n      {\n        commentCountMatch: {\n          $eq: [\n            "$num_mflix_comments",\n            "$commentsCount",\n          ],\n        },\n      },\n  },\n  {\n    $project:\n      /**\n       * specifications: The fields to\n       *   include or exclude.\n       */\n      {\n        commentCountMatch: 1,\n      },\n  },\n]\n')))),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"sample_airbnb")," collection:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The number of listings in the ",(0,o.kt)("inlineCode",{parentName:"li"},"sample_airbnb")," collection"),(0,o.kt)("li",{parentName:"ol"},"The number of listings with 3 or more bedrooms in Portugal"),(0,o.kt)("li",{parentName:"ol"},"The number of listings in Brazil with a review score greater than 8")),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"sample_training")," collection:"))}c.isMDXComponent=!0}}]);