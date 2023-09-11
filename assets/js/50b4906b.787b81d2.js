"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[75938],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>s,MDXProvider:()=>m,mdx:()=>y,useMDXComponents:()=>p,withMDXComponents:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){return function(t){var r=p(t.components);return n.createElement(e,o({},t,{components:r}))}},p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},31655:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],l={id:"fetch-query",title:"fetchQuery",original_id:"fetch-query"},u=void 0,s={unversionedId:"fetch-query",id:"version-v10.1.0/fetch-query",title:"fetchQuery",description:"You can use the fetchQuery function to imperatively make GraphQL Requests. This is useful for cases where you want to make requests outside of React but still utilize the Relay store and network layer.",source:"@site/versioned_docs/version-v10.1.0/Modern-fetchQuery.md",sourceDirName:".",slug:"/fetch-query",permalink:"/docs/v10.1.0/fetch-query",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v10.1.0/Modern-fetchQuery.md",tags:[],version:"v10.1.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1694470020,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{id:"fetch-query",title:"fetchQuery",original_id:"fetch-query"},sidebar:"version-v10.1.0/docs",previous:{title:"Relay Store",permalink:"/docs/v10.1.0/relay-store"},next:{title:"Routing",permalink:"/docs/v10.1.0/routing"}},c={},p=[{value:"Arguments",id:"arguments",level:2},{value:"Return Value",id:"return-value",level:2}],m={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.mdx)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"You can use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"fetchQuery")," function to imperatively make GraphQL Requests. This is useful for cases where you want to make requests outside of React but still utilize the Relay store and network layer."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"import {fetchQuery, graphql} from 'relay-runtime';\n\nconst query = graphql`\n  query ExampleQuery($pageID: ID!) {\n    page(id: $pageID) {\n      name\n    }\n  }\n`;\n\nconst variables = {\n  pageID: '110798995619330',\n};\n\nfetchQuery(environment, query, variables)\n  .then(data => {\n    // access the graphql response\n  });\n")),(0,o.mdx)("h2",{id:"arguments"},"Arguments"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"environment"),": The ",(0,o.mdx)("a",{parentName:"li",href:"/docs/v10.1.0/relay-environment"},"Relay Environment")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"query"),": The ",(0,o.mdx)("inlineCode",{parentName:"li"},"graphql")," tagged query. ",(0,o.mdx)("strong",{parentName:"li"},"Note:")," ",(0,o.mdx)("inlineCode",{parentName:"li"},"relay-compiler")," enforces the query to be named as ",(0,o.mdx)("inlineCode",{parentName:"li"},"<FileName>Query"),"."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"variables"),": Object containing set of variables to pass to the GraphQL query, i.e. a mapping from variable name to value."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"cacheConfig?"),": Optional object containing a set of cache configuration options, i.e. ",(0,o.mdx)("inlineCode",{parentName:"li"},"force: true")," requires the fetch to be issued regardless of the state of any configured response cache. See ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/relay-runtime/lib/util/RelayRuntimeTypes.d.ts#L22-L35"},"the types")," for more ",(0,o.mdx)("inlineCode",{parentName:"li"},"cacheConfig")," options.")),(0,o.mdx)("h2",{id:"return-value"},"Return Value"),(0,o.mdx)("p",null,"The function returns a ",(0,o.mdx)("inlineCode",{parentName:"p"},"Promise")," that resolves with an object containing data obtained from the query."))}d.isMDXComponent=!0}}]);