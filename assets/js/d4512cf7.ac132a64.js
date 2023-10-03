"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[17604],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>p,MDXProvider:()=>d,mdx:()=>g,useMDXComponents:()=>u,withMDXComponents:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){return function(t){var a=u(t.components);return n.createElement(e,o({},t,{components:a}))}},u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,y=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return a?n.createElement(y,l(l({ref:t},p),{},{components:a})):n.createElement(y,l({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(67294),r=a(34334);const o="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},65488:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(83117),r=a(67294),o=a(34334),i=a(72389),l=a(67392),s=a(7094),p=a(12466);const m="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,a,i=e.lazy,d=e.block,c=e.defaultValue,y=e.values,g=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),x=null!=y?y:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(x,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(t=null!=c?c:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:h[0].props.value;if(null!==v&&!x.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+x.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var E=(0,s.U)(),w=E.tabGroupChoices,_=E.setTabGroupChoices,T=(0,r.useState)(v),k=T[0],C=T[1],F=[],N=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var Q=w[g];null!=Q&&Q!==k&&x.some((function(e){return e.value===Q}))&&C(Q)}var I=function(e){var t=e.currentTarget,a=F.indexOf(t),n=x[a].value;n!==k&&(N(t),C(n),null!=g&&_(g,String(n)))},D=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=F.indexOf(e.currentTarget)+1;a=null!=(n=F[r])?n:F[0];break;case"ArrowLeft":var o,i=F.indexOf(e.currentTarget)-1;a=null!=(o=F[i])?o:F[F.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},x.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:function(e){return F.push(e)},onKeyDown:D,onFocus:I,onClick:I},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":k===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(h.filter((function(e){return e.props.value===k}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}function c(e){var t=(0,i.default)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},68629:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(39960),r=a(86341),o=a(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var t=e.children;return o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),t)}var s=function(){var e=o.useState(!1),t=e[0],a=e[1],n=function(e){a(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":o.createElement(o.Fragment,null,"Is this page useful?",o.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),o.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},p=function(){return o.createElement("p",null,"Let us know how these docs can be improved by",o.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},m=function(){return o.createElement("p",null,"Help us make the site even better by"," ",o.createElement(n.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},u=function(){return o.createElement(l,null,o.createElement(p,null),o.createElement(s,null),o.createElement(m,null))},d=function(){return o.createElement(l,null,o.createElement(s,null),o.createElement(m,null))};const c=function(){return(0,r.fbContent)({internal:o.createElement(u,null),external:o.createElement(d,null)})}},21532:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>h,frontMatter:()=>u,metadata:()=>c,toc:()=>g});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=a(68629),l=a(86341),s=a(65488),p=a(85162),m=["components"],u={id:"type-emission",title:"Type Emission",slug:"/guides/type-emission/"},d=void 0,c={unversionedId:"guides/type-emission",id:"version-v11.0.0/guides/type-emission",title:"Type Emission",description:"As part of its normal work, the Relay Compiler will emit type information for your language of choice that helps you write type-safe application code. These types are included in the artifacts that relay-compiler generates to describe your operations and fragments.",source:"@site/versioned_docs/version-v11.0.0/guides/type-emission.md",sourceDirName:"guides",slug:"/guides/type-emission/",permalink:"/docs/v11.0.0/guides/type-emission/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v11.0.0/guides/type-emission.md",tags:[],version:"v11.0.0",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1696368668,formattedLastUpdatedAt:"Oct 3, 2023",frontMatter:{id:"type-emission",title:"Type Emission",slug:"/guides/type-emission/"},sidebar:"version-v11.0.0/docs",previous:{title:"Relay Compiler",permalink:"/docs/v11.0.0/guides/compiler/"},next:{title:"Persisted Queries",permalink:"/docs/v11.0.0/guides/persisted-queries/"}},y={},g=[{value:"Operation input data",id:"operation-input-data",level:2},{value:"Operation/Fragment selection-set data",id:"operationfragment-selection-set-data",level:2},{value:"Fragment references",id:"fragment-references",level:2},{value:"Single artifact directory",id:"single-artifact-directory",level:2},{value:"Background information",id:"background-information",level:3},{value:"Language plugins",id:"language-plugins",level:2}],f={toc:g};function h(e){var t=e.components,a=(0,r.Z)(e,m);return(0,o.mdx)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"As part of its normal work, the ",(0,o.mdx)("a",{parentName:"p",href:"../compiler"},(0,o.mdx)("strong",{parentName:"a"},"Relay Compiler"))," will emit type information for your language of choice that helps you write type-safe application code. These types are included in the artifacts that ",(0,o.mdx)("inlineCode",{parentName:"p"},"relay-compiler")," generates to describe your operations and fragments."),(0,o.mdx)("p",null,"Regardless of your choice of language, all language plugins will emit roughly the same sort of type-information, but be sure to read the documentation for other ",(0,o.mdx)("a",{parentName:"p",href:"#language-plugins"},"language plugins")," to learn about their specifics."),(0,o.mdx)("h2",{id:"operation-input-data"},"Operation input data"),(0,o.mdx)("p",null,"The shape of the variables object used for query, mutation, or subscription operations."),(0,o.mdx)("p",null,"In this example the emitted type-information would require the variables object to contain an ",(0,o.mdx)("inlineCode",{parentName:"p"},"artistID")," key with a non-null string."),(0,o.mdx)(s.default,{defaultValue:(0,l.fbContent)({internal:"Flow",external:"TypeScript"}),values:[{label:"Flow",value:"Flow"},{label:"TypeScript",value:"TypeScript"}],mdxType:"Tabs"},(0,o.mdx)(p.default,{value:"Flow",mdxType:"TabItem"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"/**\n * export type ExampleQueryVariables = {\n *   +artistID: string,\n * }\n * export type ExampleQueryResponse = {\n *   +artist: {\n *     +name: ?string,\n *   }\n * }\n * export type ExampleQuery = {\n *   +variables: ExampleQueryVariables,\n *   +response: ExampleQueryResponse,\n * }\n */\n\nimport type { ExampleQuery } from \"__generated__/ExampleQuery.graphql\"\n\nconst data = useLazyLoadQuery<ExampleQuery>(\n  graphql`\n    query ExampleQuery($artistID: ID!) {\n      artist(id: $artistID) {\n        name\n      }\n    }\n  `,\n  // variables are expected to be of type ExampleQueryVariables\n  {artistID: 'banksy'},\n);\n"))),(0,o.mdx)(p.default,{value:"TypeScript",mdxType:"TabItem"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"/**\n * export type ExampleQueryVariables = {\n *   readonly artistID: string\n * }\n * export type ExampleQueryResponse = {\n *   readonly artist?: {\n *     readonly name?: string\n *   }\n * }\n * export type ExampleQuery = {\n *   readonly variables: ExampleQueryVariables\n *   readonly response: ExampleQueryResponse\n * }\n */\n\nimport { ExampleQuery } from \"__generated__/ExampleQuery.graphql\"\n\nconst data = useLazyLoadQuery<ExampleQuery>(\n  graphql`\n    query ExampleQuery($artistID: ID!) {\n      artist(id: $artistID) {\n        name\n      }\n    }\n  `,\n  // variables are expected to be of type ExampleQueryVariables\n  {artistID: 'banksy'},\n);\n")))),(0,o.mdx)("h2",{id:"operationfragment-selection-set-data"},"Operation/Fragment selection-set data"),(0,o.mdx)("p",null,"The shape of the data selected in a operation or fragment, following the ",(0,o.mdx)("a",{parentName:"p",href:"../../principles-and-architecture/thinking-in-relay#data-masking"},"data-masking")," rules. That is, excluding any data selected by fragment spreads."),(0,o.mdx)("p",null,"In this example the emitted type-information describes the response data which is returned by ",(0,o.mdx)("inlineCode",{parentName:"p"},"useLazyLoadQuery")," (or ",(0,o.mdx)("inlineCode",{parentName:"p"},"usePreloadedQuery"),")."),(0,o.mdx)(s.default,{defaultValue:(0,l.fbContent)({internal:"Flow",external:"TypeScript"}),values:[{label:"Flow",value:"Flow"},{label:"TypeScript",value:"TypeScript"}],mdxType:"Tabs"},(0,o.mdx)(p.default,{value:"Flow",mdxType:"TabItem"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"/**\n * export type ExampleQueryVariables = {\n *   +artistID: string,\n * }\n * export type ExampleQueryResponse = {\n *   +artist: {\n *     +name: ?string,\n *   }\n * }\n * export type ExampleQuery = {\n *   +variables: ExampleQueryVariables,\n *   +response: ExampleQueryResponse,\n * }\n */\n\nimport type { ExampleQuery } from \"__generated__/ExampleQuery.graphql\"\n\n// data is of type ExampleQueryResponse\nconst data = useLazyLoadQuery<ExampleQuery>(\n  graphql`\n    query ExampleQuery($artistID: ID!) {\n      artist(id: $artistID) {\n        name\n      }\n    }\n  `,\n  {artistID: 'banksy'},\n);\n\nreturn props.artist && <div>{props.artist.name} is great!</div>\n"))),(0,o.mdx)(p.default,{value:"TypeScript",mdxType:"TabItem"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"/**\n * export type ExampleQueryVariables = {\n *   readonly artistID: string\n * }\n * export type ExampleQueryResponse = {\n *   readonly artist?: {\n *     readonly name?: string\n *   }\n * }\n * export type ExampleQuery = {\n *   readonly variables: ExampleQueryVariables\n *   readonly response: ExampleQueryResponse\n * }\n */\n\nimport { ExampleQuery } from \"__generated__/ExampleQuery.graphql\"\n\n// data is of type ExampleQueryResponse\nconst data = useLazyLoadQuery<ExampleQuery>(\n  graphql`\n    query ExampleQuery($artistID: ID!) {\n      artist(id: $artistID) {\n        name\n      }\n    }\n  `,\n  {artistID: 'banksy'},\n);\n\nreturn props.artist && <div>{props.artist.name} is great!</div>\n")))),(0,o.mdx)("p",null,"Similarly, in this example the emitted type-information describes the type of the prop to match the type of the fragment reference ",(0,o.mdx)("inlineCode",{parentName:"p"},"useFragment"),"  expects to receive."),(0,o.mdx)(s.default,{defaultValue:(0,l.fbContent)({internal:"Flow",external:"TypeScript"}),values:[{label:"Flow",value:"Flow"},{label:"TypeScript",value:"TypeScript"}],mdxType:"Tabs"},(0,o.mdx)(p.default,{value:"Flow",mdxType:"TabItem"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},'/**\n * export type ExampleFragmentComponent_artist$data = {\n *   +name: string\n * }\n *\n * export type ExampleFragmentComponent_artist$key = { ... }\n */\n\nimport type { ExampleFragmentComponent_artist$key } from "__generated__/ExampleFragmentComponent_artist.graphql"\n\ntype Props = {\n  artist: ExampleFragmentComponent_artist$key,\n};\n\nexport default ExampleFragmentComponent(props) {\n  // data is of type ExampleFragmentComponent_artist$data\n  const data = useFragment(\n    graphql`\n      fragment ExampleFragmentComponent_artist on Artist {\n        biography\n      }\n    `,\n    props.artist,\n  );\n\n  return <div>About the artist: {props.artist.biography}</div>;\n}\n'))),(0,o.mdx)(p.default,{value:"TypeScript",mdxType:"TabItem"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},'/**\n * export type ExampleFragmentComponent_artist$data = {\n *   readonly name: string\n * }\n *\n * export type ExampleFragmentComponent_artist$key = { ... }\n */\n\nimport { ExampleFragmentComponent_artist$key } from "__generated__/ExampleFragmentComponent_artist.graphql"\n\ninterface Props {\n  artist: ExampleFragmentComponent_artist$key,\n};\n\nexport default ExampleFragmentComponent(props: Props) {\n  // data is of type ExampleFragmentComponent_artist$data\n  const data = useFragment(\n    graphql`\n      fragment ExampleFragmentComponent_artist on Artist {\n        biography\n      }\n    `,\n    props.artist,\n  );\n\n  return <div>About the artist: {props.artist.biography}</div>;\n}\n')))),(0,o.mdx)("h2",{id:"fragment-references"},"Fragment references"),(0,o.mdx)("p",null,"The opaque identifier described in ",(0,o.mdx)("a",{parentName:"p",href:"../../principles-and-architecture/thinking-in-relay#data-masking"},"data-masking")," that a child container expects to receive from its parent, which represents the child container\u2019s fragment spread inside the parent\u2019s fragment."),(0,o.mdx)(l.OssOnly,{mdxType:"OssOnly"},(0,o.mdx)("admonition",{type:"important"},(0,o.mdx)("p",{parentName:"admonition"},"Please read ",(0,o.mdx)("a",{parentName:"p",href:"#single-artifact-directory"},"this important caveat")," about actually enabling type-safe fragment reference checking."))),(0,o.mdx)("p",null,"Consider a component that ",(0,o.mdx)("a",{parentName:"p",href:"../../guided-tour/rendering/fragments/#composing-fragments"},"composes")," the above fragment component example. In this example, the emitted type-information of the child component receives a unique opaque identifier type, called a fragment reference, which the type-information emitted for the parent\u2019s fragment references in the location where the child\u2019s fragment is spread. Thus ensuring that the child\u2019s fragment is spread into the parent\u2019s fragment ",(0,o.mdx)("em",{parentName:"p"},"and")," the correct fragment reference is passed to the child component at runtime."),(0,o.mdx)(s.default,{defaultValue:(0,l.fbContent)({internal:"Flow",external:"TypeScript"}),values:[{label:"Flow",value:"Flow"},{label:"TypeScript",value:"TypeScript"}],mdxType:"Tabs"},(0,o.mdx)(p.default,{value:"Flow",mdxType:"TabItem"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},'/**\n * import type { FragmentReference } from "relay-runtime";\n * declare export opaque type ExampleFragmentComponent_artist$ref: FragmentReference;\n *\n * export type ExampleFragmentComponent_artist$data = {\n *   +name: string,\n *   +$refType: ExampleFragmentComponent_artist$ref,\n * };\n */\n\nimport { ExampleFragmentComponent } from "./ExampleFragmentComponent"\n\n/**\n * import type { ExampleFragmentComponent_artist$ref } from "ExampleFragmentComponent_artist.graphql";\n *\n * export type ExampleQueryResponse = {\n *   +artist: ?{\n *     +$fragmentRefs: ExampleFragmentComponent_artist$ref,\n *   }\n * };\n * export type ExampleQueryVariables = {\n *   +artistID: string,\n * }\n * export type ExampleQuery = {\n *   +variables: ExampleQueryVariables,\n *   +response: ExampleQueryResponse,\n * }\n */\nimport type { ExampleQuery } from "__generated__/ExampleQuery.graphql"\n\n// data is of type ExampleQueryResponse\nconst data = useLazyLoadQuery<ExampleQuery>(\n  graphql`\n    query ExampleQuery($artistID: ID!) {\n      artist(id: $artistID) {\n        ...ExampleFragmentComponent_artist\n      }\n    }\n  `,\n  {artistID: \'banksy\'},\n);\n\n// Here only `data.artist` is an object typed as the appropriate type\n// for the `artist` prop of `ExampleFragmentComponent`.\nreturn <ExampleFragmentComponent artist={data.artist} />;\n'))),(0,o.mdx)(p.default,{value:"TypeScript",mdxType:"TabItem"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},'/**\n * declare const _ExampleFragmentComponent_artist$ref: unique symbol;\n * export type ExampleFragmentComponent_artist$ref = typeof _ExampleFragmentComponent_artist$ref;\n *\n * export type ExampleFragmentComponent_artist = {\n *   readonly name: string\n *   readonly " $refType": ExampleFragmentComponent_artist$ref\n * }\n */\nimport { ExampleFragmentComponent } from "./ExampleFragmentComponent"\n\n/**\n * import { ExampleFragmentComponent_artist$ref } from "ExampleFragmentComponent_artist.graphql";\n *\n * export type ExampleQueryResponse = {\n *   readonly artist?: {\n *     readonly " $fragmentRefs": ExampleFragmentComponent_artist$ref\n *   }\n * }\n * export type ExampleQueryVariables = {\n *   readonly artistID: string\n * }\n * export type ExampleQuery = {\n *   readonly variables: ExampleQueryVariables\n *   readonly response: ExampleQueryResponse\n * }\n */\nimport { ExampleQuery } from "__generated__/ExampleQuery.graphql"\n\n// data is of type ExampleQueryResponse\nconst data = useLazyLoadQuery<ExampleQuery>(\n  graphql`\n    query ExampleQuery($artistID: ID!) {\n      artist(id: $artistID) {\n        ...ExampleFragmentComponent_artist\n      }\n    }\n  `,\n  {artistID: \'banksy\'},\n);\n\n// Here only `data.artist` is an object typed as the appropriate type\n// for the `artist` prop of `ExampleFragmentComponent`.\nreturn <ExampleFragmentComponent artist={data.artist} />;\n')))),(0,o.mdx)(l.OssOnly,{mdxType:"OssOnly"},(0,o.mdx)("h2",{id:"single-artifact-directory"},"Single artifact directory"),(0,o.mdx)("p",null,"An important caveat to note is that by default strict fragment reference type-information will ",(0,o.mdx)("em",{parentName:"p"},"not")," be emitted, instead they will be typed as ",(0,o.mdx)("inlineCode",{parentName:"p"},"any")," and would allow you to pass in any data to the child component."),(0,o.mdx)("p",null,"To enable this feature, you will have to tell the compiler to store all the artifacts in a single directory, like so:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-shell"},"\n$ relay-compiler --artifactDirectory ./src/__generated__ [\u2026]\n\n")),(0,o.mdx)("p",null,"\u2026and additionally inform the babel plugin in your ",(0,o.mdx)("inlineCode",{parentName:"p"},".babelrc")," config where to look for the artifacts:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'\n{\n  "plugins": [\n    ["relay", { "artifactDirectory": "./src/__generated__" }]\n  ]\n}\n')),(0,o.mdx)("p",null,"It is recommended to alias this directory in your module resolution configuration such that you don\u2019t need to specify relative paths in your source files. This is what is also done in the above examples, where artifacts are imported from a ",(0,o.mdx)("inlineCode",{parentName:"p"},"__generated__")," alias, rather than relative paths like ",(0,o.mdx)("inlineCode",{parentName:"p"},"../../../../__generated__"),"."),(0,o.mdx)("h3",{id:"background-information"},"Background information"),(0,o.mdx)("p",null,"The reason is that ",(0,o.mdx)("inlineCode",{parentName:"p"},"relay-compiler")," and its artifact emission is stateless. Meaning that it does not keep track of locations of original source files and where the compiler previously saved the accompanying artifact on disk. Thus, if the compiler were to emit artifacts that try to import fragment reference types from ",(0,o.mdx)("em",{parentName:"p"},"other")," artifacts, the compiler would:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"first need to know where on disk that other artifact exists;"),(0,o.mdx)("li",{parentName:"ul"},"and update imports when the other artifact changes location on disk.")),(0,o.mdx)("p",null,"Facebook uses a module system called ",(0,o.mdx)("a",{parentName:"p",href:"https://twitter.com/dan_abramov/status/758655309212704768"},"Haste"),", in which all source files are considered in a flat namespace. This means that an import declaration does not need to specify the path to another module and thus there is no need for the compiler to ever consider the above issues. I.e. an import only needs to specify the basename of the module filename and Haste takes care of actually finding the right module at import time. Outside of Facebook, however, usage of the Haste module system is non-existent nor encouraged, thus the decision to not import fragment reference types but instead type them as ",(0,o.mdx)("inlineCode",{parentName:"p"},"any"),"."),(0,o.mdx)("p",null,"At its simplest, we can consider Haste as a single directory that contains all module files, thus all module imports always being safe to import using relative sibling paths. This is what is achieved by the single artifact directory feature. Rather than co-locating artifacts with their source files, all artifacts are stored in a single directory, allowing the compiler to emit imports of fragment reference types."),(0,o.mdx)("h2",{id:"language-plugins"},"Language plugins"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Flow: This is the default and builtin language plugin. You can explicitly enable it like so:"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-shell"},"\n$ relay-compiler --language javascript [\u2026]\n\n")))),(0,o.mdx)("p",null,"By default, Flow types are emitted inside of comments to avoid forcing your project to use Flow. Flow types inside of comments is perfectly valid Flow, however, some editors and IDEs (like WebStorm/IDEA) do not understand Flow unless it's in plain source code. In order to solve that, there's a language plugin maintained by the community that replicates the functionality of the default builtin plugin, but emits the Flow types as plain source and not inside comments. Installation and usage:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-shell"},"\n  $ yarn add --dev relay-compiler-language-js-flow-uncommented\n  $ relay-compiler --language js-flow-uncommented [\u2026]\n\n")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("a",{parentName:"p",href:"https://github.com/relay-tools/relay-compiler-language-typescript"},"TypeScript"),": This is a language plugin for the TypeScript language maintained by the community. Install and enable it like so:"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-shell"},"\n$ yarn add --dev relay-compiler-language-typescript @types/react-relay @types/relay-runtime\n$ relay-compiler --language typescript [\u2026]\n\n")))),(0,o.mdx)("p",null,"If you are looking to create your own language plugin, refer to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"relay-compiler")," ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/relay/blob/main/packages/relay-compiler/language/RelayLanguagePluginInterface.js"},"language plugin interface"),".")),(0,o.mdx)(i.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0}}]);