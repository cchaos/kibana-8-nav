(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"B+jD":function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var r=n("q1tI"),a=n.n(r),i=n("qBvR"),l=n("0j75"),o=n("LuYx"),c=n("Wbzz"),u=n("JumW"),s=n("0ZAC"),d=n("a5Ba"),m=n("DoWT");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(r=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(c){a=!0,i=c}finally{try{r||null==o.return||o.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g(e){var t=e.navItem,n=y(Object(r.useState)(!1),2),i=n[0],l=n[1],o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p({id:e,name:e,isSelected:e===t,disabled:!n.url,onClick:n.url?function(){Object(c.navigate)(n.url)}:void 0},n)},f=[o("Alerts",{disabled:!1,items:[o("Overview",{isSelected:!1})]}),o("Hosts",{disabled:!1,items:[o("All hosts"),o("Anamolies"),o("Authentication list"),o("Events",{url:"security/event-suspicious-login"})]}),o("Network",{disabled:!1,items:[o("Overview",{isSelected:!1})]}),o("Investigations",{disabled:!1,items:[o("Timelines"),o("Resolver"),o("Cases")]}),o("Management",{disabled:!1,items:[o("Overview",{isSelected:!1})]})];return a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,{size:"xs"},a.a.createElement("h2",null,a.a.createElement(s.a,{size:"l",type:"logoSecurity"}),"   Security")),a.a.createElement(d.a,null),a.a.createElement(m.a,{mobileTitle:"Navigate within security",toggleOpenOnMobile:function(){l(!i)},isOpenOnMobile:i,items:f}))}var E=n("UJ+I");function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var w=function(e){var t=e.breadcrumbs,n=e.headerLinks,u=e.navItem,s=e.children,d=e.pageTitle,m=O(e,["breadcrumbs","headerLinks","navItem","children","pageTitle"]),f=[{text:"Security",onClick:(null==t?void 0:t.length)?function(){return Object(c.navigate)("/security/overview")}:void 0}],p=f;(null==t?void 0:t.length)&&(p=f.concat(t));var b=a.a.createElement(i.a,null,n,a.a.createElement(l.a,null,"Settings")),y=Object(r.useContext)(E.KibanaChromeContext);return Object(r.useEffect)((function(){y.setChrome({breadcrumbs:p,headerLinks:b,pageTitle:d||"Security"})}),[t,n]),a.a.createElement(o.a,h({solutionNav:a.a.createElement(g,{navItem:u})},m),s)}},riE8:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("ZUzz"),l=n("MrTG"),o=n("8V7x"),c=n("yk6V"),u=n("a5Ba"),s=n("FYvP"),d=n("cgm7"),m=n("JarC"),f=n("trv7"),p=n.n(f),b=n("siOs"),y=n("B+jD");t.default=function(){return a.a.createElement(y.a,{pageTitle:"Security Overview",navItem:"Overview"},a.a.createElement(i.a,{color:"subdued",paddingSize:"l",hasShadow:!1},a.a.createElement(l.a,{alignItems:"center"},a.a.createElement(o.a,null,a.a.createElement(c.a,null,a.a.createElement("h2",null,"Lets get you started"),a.a.createElement("p",null,"Elastic Security integrates the free and open Elastic SIEM with Elastic Endpoint Security to prevent, detect, and respond to threats. To begin, you’ll need to add security solution related data to the Elastic Stack. For additional information, you can view our getting started guide.")),a.a.createElement(u.a,null),a.a.createElement("div",null,a.a.createElement(s.a,{fill:!0,iconType:"popout",iconSide:"right"},"Getting started guide"))),a.a.createElement(o.a,{grow:!1},a.a.createElement("img",{className:"pageScreenshot",alt:"","aria-hidden":!0,width:254,src:p.a})))),a.a.createElement(u.a,{size:"xl"}),a.a.createElement(u.a,{size:"xl"}),a.a.createElement(l.a,null,a.a.createElement(o.a,null,a.a.createElement(d.a,{display:"plain",title:"Elastic Agent",description:"A simple, unified way to add monitoring to your hosts.",footer:a.a.createElement(s.a,null,"Add data with Elastic Agent")})),a.a.createElement(o.a,null,a.a.createElement(d.a,{display:"plain",title:"Beats",description:"Lightweight Beats can send data from hundreds or thousands of machines and systems.",footer:a.a.createElement(s.a,null,"Add data with Beats")})),a.a.createElement(o.a,null,a.a.createElement(d.a,{display:"plain",title:"Endpoint",description:"Protect your hosts with threat prevention, detection, and deep security data visibility.",footer:a.a.createElement(s.a,null,"Add Elastic Endpoint Security")}))),a.a.createElement(u.a,{size:"xxl"}),a.a.createElement(m.a,null),a.a.createElement(c.a,{textAlign:"center"},a.a.createElement("h2",null,"Do more with Elastic")),a.a.createElement(u.a,null),a.a.createElement(b.a,{current:"Security"}))}},trv7:function(e,t,n){e.exports=n.p+"static/Illustration_2-9eecfd54fa09296f8b2c5e6b25f7b2df.png"}}]);
//# sourceMappingURL=component---src-pages-security-overview-tsx-b3792b580b7c56b3f505.js.map