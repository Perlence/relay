(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{218:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return u})),n.d(r,"metadata",(function(){return s})),n.d(r,"toc",(function(){return d})),n.d(r,"default",(function(){return b}));var t,a=n(3),o=n(7),i=(n(0),n(315)),c=n(321),l=n(316),u={id:"error-states",title:"Error States with ErrorBoundaries",slug:"/guided-tour/rendering/error-states/"},s={unversionedId:"guided-tour/rendering/error-states",id:"version-v11.0.0/guided-tour/rendering/error-states",isDocsHomePage:!1,title:"Error States with ErrorBoundaries",description:"As you may have noticed, we mentioned that using usePreloadedQuery will render data from a query that was (or is) being fetched from the server, but we didn't elaborate on how to render UI to show an error if an error occurred during fetch. We will cover that in this section.",source:"@site/versioned_docs/version-v11.0.0/guided-tour/rendering/error-states.md",slug:"/guided-tour/rendering/error-states/",permalink:"/docs/guided-tour/rendering/error-states/",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/versioned_docs/version-v11.0.0/guided-tour/rendering/error-states.md",version:"v11.0.0",lastUpdatedBy:"Robert Balicki",lastUpdatedAt:1615419391,sidebar:"version-v11.0.0/docs",previous:{title:"Loading States with Suspense",permalink:"/docs/guided-tour/rendering/loading-states/"},next:{title:"Environment",permalink:"/docs/guided-tour/rendering/environment/"}},d=[{value:"Retrying after an Error",id:"retrying-after-an-error",children:[{value:"When using <code>useQueryLoader</code> / <code>loadQuery</code>",id:"when-using-usequeryloader--loadquery",children:[]},{value:"When using <code>useLazyLoadQuery</code>",id:"when-using-uselazyloadquery",children:[]}]},{value:"Accessing errors in GraphQL Responses",id:"accessing-errors-in-graphql-responses",children:[]}],p=(t="FbErrorBoundary",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),h={toc:d};function b(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},h,n,{components:r,mdxType:"MDXLayout"}),Object(i.b)(p,{mdxType:"FbErrorBoundary"}),Object(i.b)("p",null,"As you may have noticed, we mentioned that using ",Object(i.b)("inlineCode",{parentName:"p"},"usePreloadedQuery")," will render data from a query that was (or is) being fetched from the server, but we didn't elaborate on how to render UI to show an error if an error occurred during fetch. We will cover that in this section."),Object(i.b)("p",null,"We can use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/error-boundaries.html"}),"Error Boundary")," components to catch errors that occur during render (due to a network error, or any kind of error), and render an alternative error UI when that occurs. The way it works is similar to how ",Object(i.b)("inlineCode",{parentName:"p"},"Suspense")," works, by wrapping a component tree in an error boundary, we can specify how we want to react when an error occurs, for example by rendering a fallback UI."),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/error-boundaries.html"}),"Error boundaries")," are simply components that implement the static ",Object(i.b)("inlineCode",{parentName:"p"},"getDerivedStateFromError")," method:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const React = require('React');\n\ntype State = {error: ?Error};\n\nclass ErrorBoundary extends React.Component<Props, State> {\n  static getDerivedStateFromError(error): State {\n    // Set some state derived from the caught error\n    return {error: error};\n  }\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/**\n * App.react.js\n */\n\nconst ErrorBoundary = require('ErrorBoundary');\nconst React = require('React');\n\nconst MainContent = require('./MainContent.react');\nconst SecondaryContent = require('./SecondaryContent.react');\n\nfunction App() {\n  return (\n    // Render an ErrorSection if an error occurs within\n    // MainContent or Secondary Content\n    <ErrorBoundary fallback={error => <ErrorUI error={error} />}>\n      <MainContent />\n      <SecondaryContent />\n    </ErrorBoundary>\n  );\n}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We can use the Error Boundary to wrap subtrees and show a different UI when an error occurs within that subtree. When an error occurs, the specified ",Object(i.b)("inlineCode",{parentName:"li"},"fallback")," will be rendered instead of the content inside the boundary."),Object(i.b)("li",{parentName:"ul"},"Note that we can also control the granularity at which we render error UIs, by wrapping components at different levels with error boundaries. In this example, if any error occurs within ",Object(i.b)("inlineCode",{parentName:"li"},"MainContent")," or ",Object(i.b)("inlineCode",{parentName:"li"},"SecondaryContent"),", we will render an ",Object(i.b)("inlineCode",{parentName:"li"},"ErrorSection")," in place of the entire app content.")),Object(i.b)("h2",{id:"retrying-after-an-error"},"Retrying after an Error"),Object(i.b)("h3",{id:"when-using-usequeryloader--loadquery"},"When using ",Object(i.b)("inlineCode",{parentName:"h3"},"useQueryLoader")," / ",Object(i.b)("inlineCode",{parentName:"h3"},"loadQuery")),Object(i.b)("p",null,"When using ",Object(i.b)("inlineCode",{parentName:"p"},"useQueryLoader"),"/",Object(i.b)("inlineCode",{parentName:"p"},"loadQuery")," to fetch a query, in order to retry after an error has occurred, you can call ",Object(i.b)("inlineCode",{parentName:"p"},"loadQuery")," again and pass the ",Object(i.b)("em",{parentName:"p"},"new")," query reference to ",Object(i.b)("inlineCode",{parentName:"p"},"usePreloadedQuery"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/**\n * ErrorBoundaryWithRetry.react.js\n */\n\nconst React = require('React');\n\n// NOTE: This is NOT actual production code;\n// it is only used to illustrate example\nclass ErrorBoundaryWithRetry extends React.Component<Props, State> {\n  state = {error: null};\n\n  static getDerivedStateFromError(error): State {\n    return {error: error};\n  }\n\n  _retry = () => {\n    // This ends up calling loadQuery again to get and render\n    // a new query reference\n    this.props.onRetry();\n    this.setState({\n      // Clear the error\n      error: null,\n    });\n  }\n\n  render() {\n    const {children, fallback} = this.props;\n    const {error} = this.state;\n    if (error) {\n      if (typeof fallback === 'function') {\n        return fallback({error, retry: this._retry});\n      }\n      return fallback;\n    }\n    return children;\n  }\n}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"When an error occurs, we render the provided ",Object(i.b)("inlineCode",{parentName:"li"},"fallback"),"."),Object(i.b)("li",{parentName:"ul"},"When ",Object(i.b)("inlineCode",{parentName:"li"},"retry")," is called, we will clear the error, and call ",Object(i.b)("inlineCode",{parentName:"li"},"loadQuery")," again. This will fetch the query again and provide us a new query reference, which we can then pass down to ",Object(i.b)("inlineCode",{parentName:"li"},"usePreloadedQuery"),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/**\n * App.react.js\n */\n\nconst ErrorBoundaryWithRetry = require('ErrorBoundaryWithRetry');\nconst React = require('React');\n\nconst MainContent = require('./MainContent.react');\n\nconst query = require('__generated__/MainContentQuery.graphql');\n\n// NOTE: This is NOT actual production code;\n// it is only used to illustrate example\nfunction App(props) {\n  // E.g., initialQueryRef provided by router\n  const [queryRef, loadQuery] = useQueryLoader(query, props.initialQueryRef);\n\n  return (\n    <ErrorBoundaryWithRetry\n      // On retry we call loadQuery again, which will update\n      // the value of queryRef from useQueryLoader with a new\n      // fresh query reference\n      onRetry={() => loadQuery(/* ... */)}\n      fallback={({error, retry}) =>\n        <>\n          <ErrorUI error={error} />\n          {/* Render a button to retry; this will attempt to re-render the\n          content inside the boundary, i.e. the query component */}\n          <Button onPress={retry}>Retry</Button>\n        </>\n      }>\n      {/* The value of queryRef will be updated after calling\n      loadQuery again */}\n      <MainContent queryRef={queryRef} />\n    </ErrorBoundaryWithRetry>\n  );\n}\n\n/**\n * MainContent.react.js\n */\nfunction MainContent(props) {\n  const data = usePreloadedQuery(\n    graphql`...`,\n    props.queryRef\n  );\n\n  return (/* ... */);\n}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The sample Error Boundary in this example code will provide a ",Object(i.b)("inlineCode",{parentName:"li"},"retry")," function to the ",Object(i.b)("inlineCode",{parentName:"li"},"fallback")," which we can use to clear the error, re-load the query, and re-render with a new query ref that we can pass to the component that uses ",Object(i.b)("inlineCode",{parentName:"li"},"usePreloadedQuery"),". That component will consume the new query ref and suspend if necessary on the new network request.")),Object(i.b)("h3",{id:"when-using-uselazyloadquery"},"When using ",Object(i.b)("inlineCode",{parentName:"h3"},"useLazyLoadQuery")),Object(i.b)("p",null,"When using ",Object(i.b)("inlineCode",{parentName:"p"},"useLazyLoadQuery")," to fetch a query, in order to retry after an error has occurred, you can attempt to re-mount ",Object(i.b)("em",{parentName:"p"},"and")," re-evaluate the query component by passing it a new ",Object(i.b)("inlineCode",{parentName:"p"},"fetchKey"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/**\n * ErrorBoundaryWithRetry.react.js\n */\n\nconst React = require('React');\n\n// NOTE: This is NOT actual production code;\n// it is only used to illustrate example\nclass ErrorBoundaryWithRetry extends React.Component<Props, State> {\n  state = {error: null, fetchKey: 0};\n\n  static getDerivedStateFromError(error): State {\n    return {error: error, fetchKey: 0};\n  }\n\n  _retry = () => {\n    this.setState(prev => ({\n      // Clear the error\n      error: null,\n      // Increment and set a new fetchKey in order\n      // to trigger a re-evaluation and refetching\n      // of the query using useLazyLoadQuery\n      fetchKey: prev.fetchKey + 1,\n    }));\n  }\n\n  render() {\n    const {children, fallback} = this.props;\n    const {error, fetchKey} = this.state;\n    if (error) {\n      if (typeof fallback === 'function') {\n        return fallback({error, retry: this._retry});\n      }\n      return fallback;\n    }\n    return children({fetchKey});\n  }\n}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"When an error occurs, we render the provided ",Object(i.b)("inlineCode",{parentName:"li"},"fallback"),"."),Object(i.b)("li",{parentName:"ul"},"When ",Object(i.b)("inlineCode",{parentName:"li"},"retry")," is called, we will clear the error, and increment our ",Object(i.b)("inlineCode",{parentName:"li"},"fetchKey")," which we can then pass down to ",Object(i.b)("inlineCode",{parentName:"li"},"useLazyLoadQuery"),". This will make it so we re-render the component that uses ",Object(i.b)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," with a new ",Object(i.b)("inlineCode",{parentName:"li"},"fetchKey"),", ensuring that the query is refetched upon the new call to ",Object(i.b)("inlineCode",{parentName:"li"},"useLazyLoadQuery"),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/**\n * App.react.js\n */\n\nconst ErrorBoundaryWithRetry = require('ErrorBoundaryWithRetry');\nconst React = require('React');\n\nconst MainContent = require('./MainContent.react');\n\n// NOTE: This is NOT actual production code;\n// it is only used to illustrate example\nfunction App() {\n  return (\n    <ErrorBoundaryWithRetry\n      fallback={({error, retry}) =>\n        <>\n          <ErrorUI error={error} />\n          {/* Render a button to retry; this will attempt to re-render the\n            content inside the boundary, i.e. the query component */}\n          <Button onPress={retry}>Retry</Button>\n        </>\n      }>\n      {({fetchKey}) => {\n        // If we have retried, use the new `retryQueryRef` provided\n        // by the Error Boundary\n        return <MainContent fetchKey={fetchKey} />;\n      }}\n    </ErrorBoundaryWithRetry>\n  );\n}\n\n/**\n * MainContent.react.js\n */\nfunction MainContent(props) {\n  const data = useLazyLoadQuery(\n    graphql`...`,\n    variables,\n    {fetchKey: props.fetchKey}\n  );\n\n  return (/* ... */);\n}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The sample Error Boundary in this example code will provide a ",Object(i.b)("inlineCode",{parentName:"li"},"retry")," function to the ",Object(i.b)("inlineCode",{parentName:"li"},"fallback")," which we can use to clear the error and re-render ",Object(i.b)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," with a new ",Object(i.b)("inlineCode",{parentName:"li"},"fetchKey"),". This will cause the query to be re-evaluated and refetched, and ",Object(i.b)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," start a new network request and suspend.")),Object(i.b)("h2",{id:"accessing-errors-in-graphql-responses"},"Accessing errors in GraphQL Responses"),Object(i.b)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(i.b)("p",null,"By default, internally at fb, Relay will ",Object(i.b)("em",{parentName:"p"},"only")," surface errors to React that are returned in the top-level ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphql.org/learn/validation/"}),Object(i.b)("inlineCode",{parentName:"a"},"errors")," field")," if they are ether:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"of ",Object(i.b)("inlineCode",{parentName:"li"},"CRITICAL")," severity,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"or")," if the top-level ",Object(i.b)("inlineCode",{parentName:"li"},"data")," field wasn't returned in the response."))),Object(i.b)("p",null,"If you wish to access error information in your application to display user friendly messages, the recommended approach is to model and expose the error information as part of your GraphQL schema."),Object(i.b)("p",null,"For example, you could expose a field in your schema that returns either the expected result, or an Error object if an error occurred while resolving that field (instead of returning null):"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"type Error {\n  # User friendly message\n  message: String!\n}\n\ntype Foo {\n  bar: Result | Error\n}\n")),Object(i.b)(c.a,{mdxType:"DocsRating"}))}b.isMDXComponent=!0},315:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"b",(function(){return b}));var t=n(0),a=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var r=a.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},d=function(e){var r=s(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},h=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=t,b=d["".concat(i,".").concat(h)]||d[h]||p[h]||o;return n?a.a.createElement(b,c(c({ref:r},u),{},{components:n})):a.a.createElement(b,c({ref:r},u))}));function b(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},316:function(e,r,n){"use strict";(function(e){var t=this&&this.__createBinding||(Object.create?function(e,r,n,t){void 0===t&&(t=n),Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[n]}})}:function(e,r,n,t){void 0===t&&(t=n),e[t]=r[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&t(r,e,n);return a(r,e),r};Object.defineProperty(r,"__esModule",{value:!0}),r.OssOnly=r.FbInternalOnly=r.isInternal=r.validateFbContentArgs=r.fbInternalOnly=r.fbContent=r.bloks=void 0,r.bloks=o(n(319));const i=["internal","external"];let c;try{c=n(317).usePluginData}catch(p){c=null}function l(e){return s(e),d()?"internal"in e?u(e.internal):[]:"external"in e?u(e.external):[]}function u(e){return"function"==typeof e?e():e}function s(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${i}. Instead got ${e}`);if(!Object.keys(e).find((e=>i.find((r=>r===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${i}`);const r=Object.keys(e).filter((e=>!i.find((r=>r===e))));if(r.length>0)throw new Error(`Unexpected keys ${r} found in fbContent() args. Accepted keys: ${i}`)}function d(){return e.env.FB_INTERNAL||c&&c("internaldocs-fb").FB_INTERNAL}r.fbContent=l,r.fbInternalOnly=function(e){return l({internal:e})},r.validateFbContentArgs=s,r.isInternal=d,r.FbInternalOnly=function(e){return d()?e.children:null},r.OssOnly=function(e){return d()?null:e.children}}).call(this,n(318))},317:function(e,r,n){"use strict";n.r(r),n.d(r,"default",(function(){return a})),n.d(r,"useAllPluginInstancesData",(function(){return o})),n.d(r,"usePluginData",(function(){return i}));var t=n(22);function a(){var e=Object(t.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function o(e){var r=a()[e];if(!r)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return r}function i(e,r){void 0===r&&(r="default");var n=o(e)[r];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+r);return n}},318:function(e,r){var n,t,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(r){try{return n.call(null,e,0)}catch(r){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{t="function"==typeof clearTimeout?clearTimeout:i}catch(e){t=i}}();var l,u=[],s=!1,d=-1;function p(){s&&l&&(s=!1,l.length?u=l.concat(u):d=-1,u.length&&h())}function h(){if(!s){var e=c(p);s=!0;for(var r=u.length;r;){for(l=u,u=[];++d<r;)l&&l[d].run();d=-1,r=u.length}l=null,s=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===i||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(r){try{return t.call(null,e)}catch(r){return t.call(this,e)}}}(e)}}function b(e,r){this.fun=e,this.array=r}function f(){}a.nextTick=function(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)r[n-1]=arguments[n];u.push(new b(e,r)),1!==u.length||s||c(h)},b.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=f,a.addListener=f,a.once=f,a.off=f,a.removeListener=f,a.removeAllListeners=f,a.emit=f,a.prependListener=f,a.prependOnceListener=f,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},319:function(e,r,n){"use strict";var t=this&&this.__awaiter||function(e,r,n,t){return new(n||(n=Promise))((function(a,o){function i(e){try{l(t.next(e))}catch(r){o(r)}}function c(e){try{l(t.throw(e))}catch(r){o(r)}}function l(e){var r;e.done?a(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,c)}l((t=t.apply(e,r||[])).next())}))};Object.defineProperty(r,"__esModule",{value:!0}),r.getSpecInfo=void 0;const a=n(320);r.getSpecInfo=function(e){return t(this,void 0,void 0,(function*(){return yield a.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},320:function(e,r,n){"use strict";var t=this&&this.__awaiter||function(e,r,n,t){return new(n||(n=Promise))((function(a,o){function i(e){try{l(t.next(e))}catch(r){o(r)}}function c(e){try{l(t.throw(e))}catch(r){o(r)}}function l(e){var r;e.done?a(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,c)}l((t=t.apply(e,r||[])).next())}))};Object.defineProperty(r,"__esModule",{value:!0}),r.call=void 0;let a=!1,o=0;const i={};r.call=function(e){return t(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));a||(a=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const r=e.data.id;r in i||console.error(`Recieved response for id: ${r} with no matching receiver`),"response"in e.data?i[r].resolve(e.data.response):i[r].reject(new Error(e.data.error)),delete i[r]})));const r=o++,n=new Promise(((e,n)=>{i[r]={resolve:e,reject:n}})),t={event:"static-docs-bridge-call",id:r,module:e.module,api:e.api,args:e.args},c="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(t,c),n}))}},321:function(e,r,n){"use strict";n(60);var t=n(316),a=n(0);var o=function(){var e=a.useState(!1),r=e[0],n=e[1],t=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return r?a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),"Thank you for letting us know!"):a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return t(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return t(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},i=function(){return null};r.a=function(){return Object(t.fbContent)({internal:a.createElement(i,null),external:a.createElement(o,null)})}}}]);