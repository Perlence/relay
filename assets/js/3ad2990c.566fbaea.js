"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5281],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>p,withMDXComponents:()=>c});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){return function(t){var n=p(t.components);return i.createElement(e,r({},t,{components:n}))}},p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(o,".").concat(m)]||c[m]||u[m]||r;return n?i.createElement(f,d(d({ref:t},s),{},{components:n})):i.createElement(f,d({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=f;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68629:(e,t,n)=>{n.d(t,{Z:()=>u});var i=n(39960),a=n(86341),r=n(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function d(e){var t=e.children;return r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),t)}var l=function(){var e=r.useState(!1),t=e[0],n=e[1],i=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":r.createElement(r.Fragment,null,"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return i(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return i(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return r.createElement("p",null,"Let us know how these docs can be improved by",r.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},c=function(){return r.createElement("p",null,"Help us make the site even better by"," ",r.createElement(i.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},p=function(){return r.createElement(d,null,r.createElement(s,null),r.createElement(l,null),r.createElement(c,null))},m=function(){return r.createElement(d,null,r.createElement(l,null),r.createElement(c,null))};const u=function(){return(0,a.fbContent)({internal:r.createElement(p,null),external:r.createElement(m,null)})}},26407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var i=n(83117),a=n(80102),r=(n(67294),n(3905)),o=n(68629),d=["components"],l={id:"disallowed-id-types-error",title:"Disallowed Types for `id` Fields",slug:"/debugging/disallowed-id-types-error",description:"Disallowed types for `id` fields",keywords:["debugging","troubleshooting","disallowed","id","Object Identification"]},s=void 0,c={unversionedId:"debugging/disallowed-id-types-error",id:"debugging/disallowed-id-types-error",title:"Disallowed Types for `id` Fields",description:"Disallowed types for `id` fields",source:"@site/docs/debugging/disallowed-id-types-error.md",sourceDirName:"debugging",slug:"/debugging/disallowed-id-types-error",permalink:"/docs/next/debugging/disallowed-id-types-error",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/debugging/disallowed-id-types-error.md",tags:[],version:"current",lastUpdatedBy:"Gordy French",lastUpdatedAt:1715622694,formattedLastUpdatedAt:"May 13, 2024",frontMatter:{id:"disallowed-id-types-error",title:"Disallowed Types for `id` Fields",slug:"/debugging/disallowed-id-types-error",description:"Disallowed types for `id` fields",keywords:["debugging","troubleshooting","disallowed","id","Object Identification"]}},p={},m=[{value:"Disallowing <code>id</code> fields without type <code>ID</code>",id:"disallowing-id-fields-without-type-id",level:2},{value:"The significance of the <code>ID</code> type",id:"the-significance-of-the-id-type",level:3},{value:"Fix: Define your <code>id</code> fields as <code>ID</code>",id:"fix-define-your-id-fields-as-id",level:2}],u={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,d);return(0,r.mdx)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"If you see an error from the compiler that reads something like:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"Disallowed type `String` of field `id` on parent type `Foo` cannot be used by Relay to identify entities\n")),(0,r.mdx)("p",null,"This means that your GraphQL schema defines an object with a field named ",(0,r.mdx)("inlineCode",{parentName:"p"},"id")," that doesn't have a valid type. Valid types for this field are ",(0,r.mdx)("inlineCode",{parentName:"p"},"ID")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"ID!")," unless configured otherwise. While there may be a valid reason in your application to have that field defined that way, the Relay compiler and runtime will mishandle that field and cause refresh or data updating issues."),(0,r.mdx)("h2",{id:"disallowing-id-fields-without-type-id"},"Disallowing ",(0,r.mdx)("inlineCode",{parentName:"h2"},"id")," fields without type ",(0,r.mdx)("inlineCode",{parentName:"h2"},"ID")),(0,r.mdx)("p",null,"Recall that Relay uses ",(0,r.mdx)("a",{parentName:"p",href:"../../guides/graphql-server-specification/#object-identification"},"Object Identification")," to know which GraphQL objects to refetch. In the usual case, those GraphQL objects implement the ",(0,r.mdx)("a",{parentName:"p",href:"https://graphql.org/learn/global-object-identification/#node-interface"},(0,r.mdx)("inlineCode",{parentName:"a"},"Node")," interface")," and thus come with an ",(0,r.mdx)("inlineCode",{parentName:"p"},"id")," field with type ",(0,r.mdx)("inlineCode",{parentName:"p"},"ID"),". However, there are types in your GraphQL model that may not require unique identification. For that reason, Relay (by default) does not restrict object definitions, allowing ",(0,r.mdx)("inlineCode",{parentName:"p"},"id")," fields with non-",(0,r.mdx)("inlineCode",{parentName:"p"},"ID")," types (e.g. ",(0,r.mdx)("inlineCode",{parentName:"p"},"String"),") to be defined."),(0,r.mdx)("p",null,"This poses a bit of difficulty to both Relay's compiler and runtime. In short, the runtime and compiler only properly handle ",(0,r.mdx)("inlineCode",{parentName:"p"},"id")," fields as defined by the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Node")," interface. Any selections made with non-",(0,r.mdx)("inlineCode",{parentName:"p"},"Node")," ",(0,r.mdx)("inlineCode",{parentName:"p"},"id")," fields will likely exhibit undesirable and unintended Relay behavior on your components (e.g. components not re-rendering on re-fetched data)."),(0,r.mdx)("h3",{id:"the-significance-of-the-id-type"},"The significance of the ",(0,r.mdx)("inlineCode",{parentName:"h3"},"ID")," type"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://graphql.org/learn/global-object-identification/"},"Global Object Identification in GraphQL"),") is what underlies Relay's Object Identification. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"id")," field supplied by the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Node")," interface is specified to be a unique identifier that can be used for storage or caching."),(0,r.mdx)("h2",{id:"fix-define-your-id-fields-as-id"},"Fix: Define your ",(0,r.mdx)("inlineCode",{parentName:"h2"},"id")," fields as ",(0,r.mdx)("inlineCode",{parentName:"h2"},"ID")),(0,r.mdx)("p",null,"To ensure Relay correctly manages objects fetched to your application, here are two recommended courses of action:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Ensure all fields named ",(0,r.mdx)("inlineCode",{parentName:"li"},"id")," are typed with ",(0,r.mdx)("inlineCode",{parentName:"li"},"ID")),(0,r.mdx)("li",{parentName:"ul"},"Rename any fields named ",(0,r.mdx)("inlineCode",{parentName:"li"},"id")," (with a type that isn't ",(0,r.mdx)("inlineCode",{parentName:"li"},"ID"),") to a different name (e.g. ",(0,r.mdx)("inlineCode",{parentName:"li"},"special_purpose_id"),")")),(0,r.mdx)("p",null,"If your application truly requires that ",(0,r.mdx)("inlineCode",{parentName:"p"},"id")," field's definition to remain as-is and you are aware of the problems that may arise, you can add your GraphQL type and the type of its ",(0,r.mdx)("inlineCode",{parentName:"p"},"id")," field to the allowlist in ",(0,r.mdx)("inlineCode",{parentName:"p"},"nonNodeIdFields")," of the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/relay/tree/main/packages/relay-compiler"},"Relay Compiler's Configuration"),". Note that this will only bypass the error for that combination of object type and ",(0,r.mdx)("inlineCode",{parentName:"p"},"id")," field type."),(0,r.mdx)(o.Z,{mdxType:"DocsRating"}))}f.isMDXComponent=!0}}]);