"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[27745],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>u,withMDXComponents:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){return function(t){var n=u(t.components);return a.createElement(e,o({},t,{components:n}))}},u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,p=d["".concat(i,".").concat(m)]||d[m]||h[m]||o;return n?a.createElement(p,l(l({ref:t},s),{},{components:n})):a.createElement(p,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},68629:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(39960),r=n(86341),o=n(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var t=e.children;return o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),t)}var c=function(){var e=o.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":o.createElement(o.Fragment,null,"Is this page useful?",o.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),o.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return o.createElement("p",null,"Let us know how these docs can be improved by",o.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},d=function(){return o.createElement("p",null,"Help us make the site even better by"," ",o.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},u=function(){return o.createElement(l,null,o.createElement(s,null),o.createElement(c,null),o.createElement(d,null))},m=function(){return o.createElement(l,null,o.createElement(c,null),o.createElement(d,null))};const h=function(){return(0,r.fbContent)({internal:o.createElement(u,null),external:o.createElement(m,null)})}},6668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>h});var a,r=n(83117),o=n(80102),i=(n(67294),n(3905)),l=n(68629),c=(n(86341),["components"]),s={id:"presence-of-data",title:"Presence of Data",slug:"/guided-tour/reusing-cached-data/presence-of-data/",description:"Relay guide to the presence of data",keywords:["presence"]},d=void 0,u={unversionedId:"guided-tour/reusing-cached-data/presence-of-data",id:"version-v16.0.0/guided-tour/reusing-cached-data/presence-of-data",title:"Presence of Data",description:"Relay guide to the presence of data",source:"@site/versioned_docs/version-v16.0.0/guided-tour/reusing-cached-data/presence-of-data.md",sourceDirName:"guided-tour/reusing-cached-data",slug:"/guided-tour/reusing-cached-data/presence-of-data/",permalink:"/docs/guided-tour/reusing-cached-data/presence-of-data/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v16.0.0/guided-tour/reusing-cached-data/presence-of-data.md",tags:[],version:"v16.0.0",lastUpdatedBy:"eMerzh",lastUpdatedAt:1704909018,formattedLastUpdatedAt:"Jan 10, 2024",frontMatter:{id:"presence-of-data",title:"Presence of Data",slug:"/guided-tour/reusing-cached-data/presence-of-data/",description:"Relay guide to the presence of data",keywords:["presence"]},sidebar:"docs",previous:{title:"Fetch Policies",permalink:"/docs/guided-tour/reusing-cached-data/fetch-policies/"},next:{title:"Staleness of Data",permalink:"/docs/guided-tour/reusing-cached-data/staleness-of-data/"}},m={},h=[{value:"Garbage Collection in Relay",id:"garbage-collection-in-relay",level:2},{value:"Query Retention",id:"query-retention",level:2},{value:"Controlling Relay&#39;s Garbage Collection Policy",id:"controlling-relays-garbage-collection-policy",level:2},{value:"GC Scheduler",id:"gc-scheduler",level:3},{value:"GC Release Buffer Size",id:"gc-release-buffer-size",level:3}],p=(a="FbGarbageCollection",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),f={toc:h};function g(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.mdx)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"An important thing to keep in mind when attempting to reuse data that is cached in the Relay store is to understand the lifetime of that data; that is, if it is present in the store, and for how long it will be."),(0,i.mdx)("p",null,"Data in the Relay store for a given query will generally be present after the query has been fetched for the first time, as long as that query is being rendered on the screen. If we've never fetched data for a specific query, then it will be missing from the store."),(0,i.mdx)("p",null,"However, even after we've fetched data for different queries, we can't keep all of the data that we've fetched indefinitely in memory, since over time it would grow to be too large and too stale. In order to mitigate this, Relay runs a process called ",(0,i.mdx)("em",{parentName:"p"},"Garbage Collection"),", in order to delete data that we're no longer using."),(0,i.mdx)("h2",{id:"garbage-collection-in-relay"},"Garbage Collection in Relay"),(0,i.mdx)("p",null,"Specifically, Relay runs garbage collection on the local in-memory store by deleting any data that is no longer being referenced by any component in the app."),(0,i.mdx)("p",null,"However, this can be at odds with reusing cached data; if the data is deleted too soon, before we try to reuse it again later, that will prevent us from reusing that data to render a screen without having to wait on a network request. To address this, this section will cover what you need to do in order to ensure that the data you want to reuse is kept cached for as long as you need it."),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"NOTE: Usually, you shouldn't need to worry about configuring garbage collection and data retention, as this should be configured by the app infrastructure at the RelayEnvironment level; however, we will cover it here for reference.")),(0,i.mdx)(p,{mdxType:"FbGarbageCollection"}),(0,i.mdx)("h2",{id:"query-retention"},"Query Retention"),(0,i.mdx)("p",null,"Retaining a query indicates to Relay that the data for that query and variables shouldn't be deleted (i.e. garbage collected). Multiple callers might retain a single query, and as long as there is at least one caller retaining a query, it won't be deleted from the store."),(0,i.mdx)("p",null,"By default, any query components using ",(0,i.mdx)("inlineCode",{parentName:"p"},"useQueryLoader")," / ",(0,i.mdx)("inlineCode",{parentName:"p"},"usePreloadedQuery")," or our other APIs will retain the query for as long as they are mounted. After they unmount, they will release the query, which means that the query might be deleted at any point in the future after that occurs."),(0,i.mdx)("p",null,"If you need to retain a specific query outside of the components lifecycle, you can use the ",(0,i.mdx)("a",{parentName:"p",href:"../../accessing-data-without-react/retaining-queries/"},(0,i.mdx)("inlineCode",{parentName:"a"},"retain"))," operation:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"// Retain query; this will prevent the data for this query and\n// variables from being garbage collected by Relay\nconst disposable = environment.retain(queryDescriptor);\n\n// Disposing of the disposable will release the data for this query\n// and variables, meaning that it can be deleted at any moment\n// by Relay's garbage collection if it hasn't been retained elsewhere\ndisposable.dispose();\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"As mentioned, this will allow you to retain the query even after a query component has unmounted, allowing other components, or future instances of the same component, to reuse the retained data.")),(0,i.mdx)("h2",{id:"controlling-relays-garbage-collection-policy"},"Controlling Relay's Garbage Collection Policy"),(0,i.mdx)("p",null,"There are currently 2 options you can provide to your Relay Store in to control the behavior of garbage collection:"),(0,i.mdx)("h3",{id:"gc-scheduler"},"GC Scheduler"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"gcScheduler")," is a function you can provide to the Relay Store which will determine when a GC execution should be scheduled to run:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"// Sample scheduler function\n// Accepts a callback and schedules it to run at some future time.\nfunction gcScheduler(run: () => void) {\n  resolveImmediate(run);\n}\n\nconst store = new Store(source, {gcScheduler});\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"By default, if a ",(0,i.mdx)("inlineCode",{parentName:"li"},"gcScheduler")," option is not provided, Relay will schedule garbage collection using the ",(0,i.mdx)("inlineCode",{parentName:"li"},"resolveImmediate")," function."),(0,i.mdx)("li",{parentName:"ul"},"You can provide a scheduler function to make GC scheduling less aggressive than the default, for example based on time or ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/facebook/react/tree/main/packages/scheduler"},"scheduler")," priorities, or any other heuristic. By convention, implementations should not execute the callback immediately.")),(0,i.mdx)("h3",{id:"gc-release-buffer-size"},"GC Release Buffer Size"),(0,i.mdx)("p",null,"The Relay Store internally holds a release buffer to keep a specific (configurable) number of queries temporarily retained even ",(0,i.mdx)("em",{parentName:"p"},"after")," they have been released by their original owner  (which will happen by default when a component rendering that query unmounts). This makes it possible (and more likely) to be able to reuse data when navigating back to a page, tab or piece of content that has been visited before."),(0,i.mdx)("p",null,"In order to configure the size of the release buffer, we can specify the ",(0,i.mdx)("inlineCode",{parentName:"p"},"gcReleaseBufferSize")," option to the Relay Store:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"const store = new Store(source, {gcReleaseBufferSize: 10});\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Note that having a buffer size of 0 is equivalent to not having the release buffer, which means that queries will be immediately released and collected."),(0,i.mdx)("li",{parentName:"ul"},"By default, environments have a release buffer size of 10.")),(0,i.mdx)(l.Z,{mdxType:"DocsRating"}))}g.isMDXComponent=!0}}]);