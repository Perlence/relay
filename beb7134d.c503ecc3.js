(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{246:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return f}));var i=n(3),r=n(7),a=(n(0),n(315)),o=n(321),c=n(316),s={id:"streaming-pagination",title:"Streaming Pagination",slug:"/guided-tour/list-data/streaming-pagination/"},l={unversionedId:"guided-tour/list-data/streaming-pagination",id:"guided-tour/list-data/streaming-pagination",isDocsHomePage:!1,title:"Streaming Pagination",description:"Additionally, we can combine usePaginationFragment with Relay's Incremental Data Delivery capabilities in order to fetch a connection and incrementally receive each item in the connection as it becomes ready, instead of waiting for the whole list of items to be returned in a single payload. This can be useful when for example computing each item in the connection is an expensive operation in the server, and we want to be able to show the first item(s) in the list as soon as possible without blocking on all the items that we need to become available; for example, on News Feed a user could ideally see and start interacting with the first story while additional stories loaded in below.",source:"@site/docs/current/guided-tour/list-data/streaming-pagination.md",slug:"/guided-tour/list-data/streaming-pagination/",permalink:"/docs/next/guided-tour/list-data/streaming-pagination/",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/current/guided-tour/list-data/streaming-pagination.md",version:"current",lastUpdatedBy:"Robert Balicki",lastUpdatedAt:1615419391,sidebar:"docs",previous:{title:"Pagination",permalink:"/docs/next/guided-tour/list-data/pagination/"},next:{title:"Refetching Connections (Using and Changing Filters)",permalink:"/docs/next/guided-tour/list-data/refetching-connections/"}},u=[],d={toc:u};function f(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(c.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(a.b)("p",null,"Additionally, we can combine ",Object(a.b)("inlineCode",{parentName:"p"},"usePaginationFragment")," with Relay's ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"../../../guides/incremental-data-delivery/"}),"Incremental Data Delivery")," capabilities in order to fetch a connection and incrementally receive each item in the connection as it becomes ready, instead of waiting for the whole list of items to be returned in a single payload. This can be useful when for example computing each item in the connection is an expensive operation in the server, and we want to be able to show the first item(s) in the list as soon as possible without blocking on ",Object(a.b)("em",{parentName:"p"},"all")," the items that we need to become available; for example, on News Feed a user could ideally see and start interacting with the first story while additional stories loaded in below.")),Object(a.b)(c.OssOnly,{mdxType:"OssOnly"},Object(a.b)("p",null,"Additionally, we can combine ",Object(a.b)("inlineCode",{parentName:"p"},"usePaginationFragment")," with Relay's Incremental Data Delivery capabilities in order to fetch a connection and incrementally receive each item in the connection as it becomes ready, instead of waiting for the whole list of items to be returned in a single payload. This can be useful when for example computing each item in the connection is an expensive operation in the server, and we want to be able to show the first item(s) in the list as soon as possible without blocking on ",Object(a.b)("em",{parentName:"p"},"all")," the items that we need to become available; for example, on News Feed a user could ideally see and start interacting with the first story while additional stories loaded in below.")),Object(a.b)("p",null,"In order to do so, we can use the ",Object(a.b)("inlineCode",{parentName:"p"},"@stream_connection")," directive instead of the ",Object(a.b)("inlineCode",{parentName:"p"},"@connection")," directive:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"import type {FriendsListPaginationQuery} from 'FriendsListPaginationQuery.graphql';\nimport type {FriendsListComponent_user$key} from 'FriendsList_user.graphql';\n\nconst React = require('React');\n\nconst {graphql, usePaginationFragment} = require('react-relay');\n\ntype Props = {\n  user: FriendsListComponent_user$key,\n};\n\nfunction FriendsListComponent(props: Props) {\n  // ...\n\n  const {\n    data,\n    loadNext,\n    hasNext,\n  } = usePaginationFragment<FriendsListPaginationQuery, _>(\n    graphql`\n      fragment FriendsListComponent_user on User\n      @refetchable(queryName: \"FriendsListPaginationQuery\") {\n        name\n        friends(first: $count, after: $cursor)\n        @stream_connection(key: \"FriendsList_user_friends\", initial_count: 2,) {\n          edges {\n            node {\n              name\n              age\n            }\n          }\n        }\n      }\n    `,\n    props.user,\n  );\n\n  return (...);\n}\n\nmodule.exports = FriendsListComponent;\n")),Object(a.b)("p",null,"Let's distill what's happening here:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"@stream_connection")," directive can be used directly in place of the ",Object(a.b)("inlineCode",{parentName:"li"},"@connection")," directive; it accepts the same arguments as @connection plus additional, ",Object(a.b)("em",{parentName:"li"},"optional")," parameters to control streaming:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"initial_count: Int"),": A number (defaulting to zero) that controls how many items will be included in the initial payload. Any subsequent items are streamed, so when set to zero the list will initially be empty and all items will be streamed. Note that this number does not affect how many items are returned ",Object(a.b)("em",{parentName:"li"},"total"),", only how many items are included in the initial payload. For example, consider a product that today makes an initial fetch for 2 items and then ",Object(a.b)("em",{parentName:"li"},"immediately")," issues a pagination query to fetch 3 more. With streaming, this product could instead choose to fetch 5 items in the initial query with initial_count=2, in order to fetch the 2 items quickly while avoiding a round trip for the subsequent 3 items."))),Object(a.b)("li",{parentName:"ul"},"As with regular usage of ",Object(a.b)("inlineCode",{parentName:"li"},"usePaginationFragment"),", the connection will be automatically updated as new items are streamed in from the server, and the component will re-render each time with the latest items in the connection.")),Object(a.b)(c.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(a.b)("p",null,"For more information, see our docs on ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"../../../guides/incremental-data-delivery/#stream_connection"}),"Incremental Data Delivery"),".")),Object(a.b)(o.a,{mdxType:"DocsRating"}))}f.isMDXComponent=!0},315:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,p=d["".concat(o,".").concat(m)]||d[m]||f[m]||a;return n?r.a.createElement(p,c(c({ref:t},l),{},{components:n})):r.a.createElement(p,c({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},316:function(e,t,n){"use strict";(function(e){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.bloks=void 0,t.bloks=a(n(319));const o=["internal","external"];let c;try{c=n(317).usePluginData}catch(f){c=null}function s(e){return u(e),d()?"internal"in e?l(e.internal):[]:"external"in e?l(e.external):[]}function l(e){return"function"==typeof e?e():e}function u(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const t=Object.keys(e).filter((e=>!o.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${o}`)}function d(){return e.env.FB_INTERNAL||c&&c("internaldocs-fb").FB_INTERNAL}t.fbContent=s,t.fbInternalOnly=function(e){return s({internal:e})},t.validateFbContentArgs=u,t.isInternal=d,t.FbInternalOnly=function(e){return d()?e.children:null},t.OssOnly=function(e){return d()?null:e.children}}).call(this,n(318))},317:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r})),n.d(t,"useAllPluginInstancesData",(function(){return a})),n.d(t,"usePluginData",(function(){return o}));var i=n(22);function r(){var e=Object(i.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function a(e){var t=r()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function o(e,t){void 0===t&&(t="default");var n=a(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},318:function(e,t){var n,i,r=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var s,l=[],u=!1,d=-1;function f(){u&&s&&(u=!1,s.length?l=s.concat(l):d=-1,l.length&&m())}function m(){if(!u){var e=c(f);u=!0;for(var t=l.length;t;){for(s=l,l=[];++d<t;)s&&s[d].run();d=-1,t=l.length}s=null,u=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||u||c(m)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},319:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,a){function o(e){try{s(i.next(e))}catch(t){a(t)}}function c(e){try{s(i.throw(e))}catch(t){a(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const r=n(320);t.getSpecInfo=function(e){return i(this,void 0,void 0,(function*(){return yield r.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},320:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,a){function o(e){try{s(i.next(e))}catch(t){a(t)}}function c(e){try{s(i.throw(e))}catch(t){a(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let r=!1,a=0;const o={};t.call=function(e){return i(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in o||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?o[t].resolve(e.data.response):o[t].reject(new Error(e.data.error)),delete o[t]})));const t=a++,n=new Promise(((e,n)=>{o[t]={resolve:e,reject:n}})),i={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},c="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(i,c),n}))}},321:function(e,t,n){"use strict";n(60);var i=n(316),r=n(0);var a=function(){var e=r.useState(!1),t=e[0],n=e[1],i=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),"Thank you for letting us know!"):r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return i(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return i(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},o=function(){return null};t.a=function(){return Object(i.fbContent)({internal:r.createElement(o,null),external:r.createElement(a,null)})}}}]);