(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{QPoK:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("Wbzz"),i=r("MrTG"),l=r("8V7x"),c=r("zCr/"),u=r("FYvP"),s=r("j7Ub"),f=r("eCDr"),p=r.n(f),m=[{text:"Deployments",onClick:function(){Object(o.navigate)("/cloud/deployments")}},{text:"Squirrel"}];t.default=function(){return a.a.createElement(s.a,{pageTitle:"Squirrel - Deployment overview",showSingleDeployment:!0,sideNavItem:"Overview",breadcrumbs:m,pageHeader:{pageTitle:a.a.createElement(i.a,{alignItems:"flexStart",direction:"column",component:"span",gutterSize:"none"},a.a.createElement(l.a,{component:"span"},a.a.createElement(c.a,{flush:"both",size:"s"},a.a.createElement("strong",null,"Squirrel"))),a.a.createElement(l.a,{component:"span"},"Deployment overview")),rightSideItems:[a.a.createElement(u.a,{iconType:"popout",iconSide:"right",onClick:function(){return Object(o.navigate)("/")}},"Open deployment")],style:{marginBottom:0}},bottomBar:a.a.createElement(u.a,{fill:!0},"Save")},a.a.createElement("div",{className:"pageScreenshot__TBD"},a.a.createElement("img",{className:"pageScreenshot pageScreenshot--fullWidth",alt:"Blank table",width:1168,src:p.a})))}},eCDr:function(e,t,r){e.exports=r.p+"static/Cloud Deployment - Squirrel-ebc3fa00d2d0f75e7655d79c9ab9f375.png"},g1nd:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var n=r("q1tI"),a=r.n(n),o=r("Sfr6"),i=r("tffo"),l=r("EoVf"),c=r("Yw/m");function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=function(e){var t,r=e.breadcrumbs,m=e.pageTitle,b=e.sideNav,d=e.bottomBar,y=e.pageBodyProps,g=void 0===y?{}:y,v=e.className,O=e.children,h=p(e,["breadcrumbs","pageTitle","sideNav","bottomBar","pageBodyProps","className","children"]),j=Object(o.a)(["xs","s"]),w=Object(n.useContext)(c.CloudChromeContext);if(Object(n.useEffect)((function(){w.setChrome({breadcrumbs:r,pageTitle:m})}),[r]),d){var S=Object(n.useRef)(null);t=a.a.createElement("div",{ref:S,className:"euiBottomBar euiBottomBar--paddingSmall",style:{left:j?0:240}},d);var E=Object(i.b)(S.current);g.style=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({paddingBottom:E.height+24},g.style)}return a.a.createElement("div",null,a.a.createElement(l.a,u({className:v,pageSideBar:b,pageBodyProps:g},h),O,t))}},j7Ub:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r("q1tI"),a=r.n(n),o=r("g1nd"),i=r("Wbzz"),l=r("JumW"),c=r("GFY/"),u=r("0ZAC"),s=r("a5Ba"),f=r("DoWT");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){a=!0,o=c}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var g=function(e){var t=e.currentItem,r=void 0===t?"management/stack":t,o=e.showSingleDeployment,p=void 0!==o&&o,b=d(Object(n.useState)(!1),2),y=b[0],g=b[1],v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return m({id:e,name:e,isSelected:e===r,disabled:!t.url,onClick:t.url?function(){Object(i.navigate)(t.url)}:void 0},t)},O=[v("Features",{disabled:!1,items:[v("All features"),v("API keys"),v("Traffic filters"),v("Extensions")]})];return p&&O.unshift(v("Squirrel",{disabled:!1,emphasize:!0,items:[v("Overview",{url:"/cloud/deployment"}),v("Logs & metrics"),v("Activity"),v("Settings")]})),a.a.createElement("div",{className:"euiPageSideBar--solutionNav"},a.a.createElement(l.a,{size:"xs"},a.a.createElement("h2",null,a.a.createElement(c.a,{color:"text",onClick:function(){return Object(i.navigate)("/cloud/deployments")}},a.a.createElement(u.a,{size:"l",type:"package"}),"  "," ",a.a.createElement("strong",null,"Deployments")))),a.a.createElement(s.a,null),a.a.createElement(f.a,{mobileTitle:a.a.createElement(a.a.Fragment,null,"Navigate within $APP_NAME"),toggleOpenOnMobile:function(){g(!y)},isOpenOnMobile:y,items:O}))};function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var h=function(e){var t=e.breadcrumbs,r=e.sideNavItem,n=e.showSingleDeployment,l=e.children,c=O(e,["breadcrumbs","sideNavItem","showSingleDeployment","children"]),u=[{text:"Overview",onClick:(null==t?void 0:t.length)?function(){return Object(i.navigate)("cloud")}:void 0}],s=u;return(null==t?void 0:t.length)&&(s=u.concat(t)),a.a.createElement(o.a,v({breadcrumbs:s,sideNav:a.a.createElement(g,{showSingleDeployment:n,currentItem:r})},c),l)}}}]);
//# sourceMappingURL=component---src-pages-cloud-deployment-tsx-f67f65244c28546db301.js.map