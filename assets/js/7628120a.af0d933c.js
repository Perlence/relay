"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[33174],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>u,mdx:()=>y,useMDXComponents:()=>p,withMDXComponents:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){return function(t){var n=p(t.components);return r.createElement(e,a({},t,{components:n}))}},p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,m=d["".concat(i,".").concat(u)]||d[u]||f[u]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],s={id:"introduction-to-relay",title:"Introduction to Relay",original_id:"introduction-to-relay",slug:"/"},c=void 0,l={unversionedId:"introduction-to-relay",id:"version-v10.0.0/introduction-to-relay",title:"Introduction to Relay",description:"Relay is a JavaScript framework for building data-driven React applications powered by GraphQL, designed from the ground up to be easy to use, extensible and, most of all, performant. Relay accomplishes this with static queries and ahead-of-time code generation.",source:"@site/versioned_docs/version-v10.0.0/Introduction-IntroductionToRelay.md",sourceDirName:".",slug:"/",permalink:"/docs/v10.0.0/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v10.0.0/Introduction-IntroductionToRelay.md",tags:[],version:"v10.0.0",lastUpdatedBy:"Andres Suarez",lastUpdatedAt:1697915721,formattedLastUpdatedAt:"Oct 21, 2023",frontMatter:{id:"introduction-to-relay",title:"Introduction to Relay",original_id:"introduction-to-relay",slug:"/"},sidebar:"version-v10.0.0/docs",next:{title:"Prerequisites",permalink:"/docs/v10.0.0/prerequisites"}},d={},p=[],u={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Relay is a JavaScript framework for building data-driven React applications powered by GraphQL, designed from the ground up to be easy to use, extensible and, most of all, performant. Relay accomplishes this with static queries and ahead-of-time code generation."),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://facebook.github.io/react/"},"React")," allows views to be defined as components where every component is responsible for rendering a part of the UI. Composing other components is how to build complex UIs. Each React component doesn't need to know the inner workings of the composed components."),(0,a.mdx)("p",null,"Relay couples React with GraphQL and develops the idea of encapsulation further. It allows components to specify what data they need and the Relay framework provides the data. This makes the data needs of inner components opaque and allows composition of those needs. Thinking about what data an app needs becomes localized to the component making it easier to reason about what fields are needed or no longer needed."))}f.isMDXComponent=!0}}]);