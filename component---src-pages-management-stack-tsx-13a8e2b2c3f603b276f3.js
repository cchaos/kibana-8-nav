(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{IzW4:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("a5Ba"),o=n("JarC"),l=n("LuYx"),c=n("Wbzz"),s=n("JumW"),u=n("GFY/"),m=n("0ZAC"),p=n("DoWT");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(c){a=!0,i=c}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=function(e){var t=e.currentItem,n=void 0===t?"management/stack":t,i=g(Object(r.useState)(!1),2),o=i[0],l=i[1],f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return b({id:e,name:e,isSelected:e===n,disabled:!t.url,onClick:t.url?function(){Object(c.navigate)(t.url)}:void 0},t)},d=[f("Console",{disabled:!1,items:[f("Index Patterns"),f("Saved Objects"),f("Spaces"),f("Reporting"),f("Advanced settings",{items:[f("General"),f("Visualizations")]})]}),f("Security",{disabled:!1,items:[f("Users"),f("Roles"),f("API Keys"),f("Role Mappings")]}),f("Elasticsearch",{disabled:!1,items:[f("Index Management"),f("Index Lifecycle Policies"),f("Rolllup Jobs"),f("Transforms"),f("Watcher"),f("Snapshot and Restore"),f("8.0 Upgrade Assistant")]})];return a.a.createElement("div",{className:"euiSolutionNav"},a.a.createElement(s.a,{className:"euiSolutionNav__title",size:"xs"},a.a.createElement("h2",null,a.a.createElement(u.a,{color:"text",onClick:function(){return Object(c.navigate)("/management/stack")}},a.a.createElement(m.a,{className:"euiSolutionNav__titleIcon",size:"l",type:"managementApp"}),a.a.createElement("strong",null,"Management")))),a.a.createElement(p.a,{className:"euiSolutionNav__sideNav",mobileTitle:"MENU",toggleOpenOnMobile:function(){l(!o)},isOpenOnMobile:o,items:d}))},O=n("UJ+I");function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var w=function(e){var t=e.breadcrumbs,n=e.headerLinks,i=e.sideNavItem,o=e.pageTitle,s=e.children,u=j(e,["breadcrumbs","headerLinks","sideNavItem","pageTitle","children"]),m=[{text:"Management",onClick:(null==t?void 0:t.length)?function(){return Object(c.navigate)("management/stack")}:void 0}],p=m;(null==t?void 0:t.length)&&(p=m.concat(t));var f=Object(r.useContext)(O.KibanaChromeContext);return Object(r.useEffect)((function(){f.setChrome({breadcrumbs:p,headerLinks:n,pageTitle:o||"Management"})}),[t]),a.a.createElement(l.a,h({solutionNav:a.a.createElement(y,{currentItem:i})},u),s)};t.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(w,{template:"centeredBody",pageTitle:"Management Overview",sideNavItem:"Overview",pageHeader:{iconType:"managementApp",iconProps:{color:"inherit"},pageTitle:a.a.createElement(a.a.Fragment,null,"Welcome to",a.a.createElement(i.a,{size:"s"}),"Stack Management 7.9.1"),description:a.a.createElement(a.a.Fragment,null,"Manage your indices, index patterns, saved objects, Kibana settings, and more.",a.a.createElement(o.a,{size:"quarter"}),"A complete list of apps is in the menu on the left.")}}))}}}]);
//# sourceMappingURL=component---src-pages-management-stack-tsx-13a8e2b2c3f603b276f3.js.map