(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"3rsC":function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),i=r.n(n),a=r("IVB2"),o=r("FYvP"),l=r("99+X"),c=[{text:"APM",href:"#"},{text:"Settings"}];t.default=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{template:"centeredContent",pageTitle:"APM Settings",headerLinks:i.a.createElement(i.a.Fragment,null),breadcrumbs:c,navItem:"Agent configuration"},i.a.createElement(a.a,{iconType:"minusInCircle",title:i.a.createElement("h1",null,"No configurations found"),body:i.a.createElement("p",null,"Let's"," change that! You can fine-tune agent configuration directly from Kibana without having to redeploy. Get started by creating your first configuration."),actions:i.a.createElement(o.a,{fill:!0},"Create configuration")})))}},"99+X":function(e,t,r){"use strict";r.d(t,"a",(function(){return j}));var n=r("q1tI"),i=r.n(n),a=r("qBvR"),o=r("LuYx"),l=r("Wbzz"),c=r("JumW"),u=r("GFY/"),s=r("0ZAC"),b=r("DoWT");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,i=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(c){i=!0,a=c}finally{try{n||null==l.return||l.return()}finally{if(i)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e){var t=e.navItem,r=d(Object(n.useState)(!1),2),a=r[0],o=r[1],f=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return m({id:e,name:e,isSelected:r.url===t||e===t,disabled:!r.url,onClick:r.url?function(){Object(l.navigate)(r.url)}:void 0},r)},v=[f("Logs",{disabled:!1,items:[f("Stream",{disabled:!0,items:[f("Overview",{isSelected:!1})]}),f("Log rage"),f("Categories"),f("Settings")]}),f("Metrics",{disabled:!1,items:[f("Overview",{isSelected:!1})]}),f("APM",{disabled:!1,items:[f("Services"),f("Traces",{url:"observability/trace"}),f("Settings",{url:"observability/apm-settings",items:[f("Agent configuration",{disabled:!1}),f("Anomaly detection"),f("Customize app"),f("Indices")]})]}),f("Uptime",{disabled:!1,items:[f("Overview",{isSelected:!1})]})];return i.a.createElement("div",{className:"euiSolutionNav"},i.a.createElement(c.a,{className:"euiSolutionNav__title",size:"xs"},i.a.createElement("h2",null,i.a.createElement(u.a,{color:"text",onClick:function(){return Object(l.navigate)("/observability/overview")}},i.a.createElement(s.a,{className:"euiSolutionNav__titleIcon",size:"l",type:"logoObservability"}),i.a.createElement("strong",null,"Observability")))),i.a.createElement(b.a,{className:"euiSolutionNav__sideNav",mobileTitle:"MENU",toggleOpenOnMobile:function(){o(!a)},isOpenOnMobile:a,items:v}))}var y=r("UJ+I");function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var j=function(e){var t=e.breadcrumbs,r=e.headerLinks,c=e.navItem,u=e.children,s=e.pageTitle,b=h(e,["breadcrumbs","headerLinks","navItem","children","pageTitle"]),f=[{text:"Observability",onClick:(null==t?void 0:t.length)?function(){return Object(l.navigate)("/observability/overview")}:void 0}],m=f;(null==t?void 0:t.length)&&(m=f.concat(t));var v=i.a.createElement(a.a,null,r),d=Object(n.useContext)(y.KibanaChromeContext);return Object(n.useEffect)((function(){d.setChrome({breadcrumbs:m,headerLinks:v,pageTitle:s||"Observability"})}),[t,r]),i.a.createElement(o.a,O({solutionNav:i.a.createElement(p,{navItem:c})},b),u)}}}]);
//# sourceMappingURL=component---src-pages-observability-apm-settings-tsx-2a154bffe23e4410b987.js.map