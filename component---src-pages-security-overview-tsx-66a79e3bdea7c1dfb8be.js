(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"8yv9":function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var a=r("q1tI"),n=r.n(a),i=r("TSYQ"),l=r.n(i),c=r("Wbzz"),o=r("o+uz"),u=r("8V7x"),s=r("cgm7"),m=r("0ZAC"),d=r("FYvP");function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function f(e){var t=e.className,r=e.current,a=y(e,["className","current"]),i=l()("kbnSolutionCards",{"kbnSolutionCards--reduced":r},t);return n.a.createElement(o.a,p({columns:r?3:4,className:i},a),"Enterprise search"!==r&&n.a.createElement(u.a,null,n.a.createElement(s.a,{display:"plain",className:"euiPanel euiPanel--success",icon:n.a.createElement(m.a,{size:"xl",type:"logoEnterpriseSearch"}),title:"Enterprise search",description:"Build a powerful website search. Search any data from any application. Unify searchable workplace content.",footer:n.a.createElement(d.a,{color:"secondary",onClick:function(){Object(c.navigate)("enterprise-search/overview")},iconSide:"right",iconType:"arrowRight"},"Search everything")})),"Observability"!==r&&n.a.createElement(u.a,null,n.a.createElement(s.a,{display:"plain",className:"euiPanel euiPanel--accent",icon:n.a.createElement(m.a,{size:"xl",type:"logoObservability"}),title:"Observability",description:"Monitor all infrastructure metrics. Track application performance.",footer:n.a.createElement(d.a,{color:"danger",onClick:function(){Object(c.navigate)("observability/overview")},iconSide:"right",iconType:"arrowRight"},"Centralize & monitor")})),"Security"!==r&&n.a.createElement(u.a,null,n.a.createElement(s.a,{display:"plain",className:"euiPanel euiPanel--subdued",icon:n.a.createElement(m.a,{size:"xl",type:"logoSecurity"}),title:"Security",description:"Detect critical security events. Investigate incidents and collaborate. Prevent threats autonomously.",footer:n.a.createElement(d.a,{color:"text",onClick:function(){Object(c.navigate)("security/overview")},iconSide:"right",iconType:"arrowRight"},"Protect & prevent")})),"Analytics"!==r&&n.a.createElement(u.a,null,n.a.createElement(s.a,{display:"plain",className:"euiPanel euiPanel--primary",icon:n.a.createElement(m.a,{size:"xl",type:"logoKibana"}),title:"Analytics",description:"Visualize every aspect of your data. Search and explore your data. Plot your geographic information. Craft pixel-perfect reports.",footer:n.a.createElement(d.a,{color:"primary",onClick:function(){Object(c.navigate)("analytics/overview")},iconSide:"right",iconType:"arrowRight"},"Analyze everything")})))}},k4f9:function(e,t,r){"use strict";r.d(t,"a",(function(){return O}));var a=r("q1tI"),n=r.n(a),i=r("qBvR"),l=r("0j75"),c=r("ILuU"),o=r("Wbzz"),u=r("JumW"),s=r("0ZAC"),m=r("a5Ba"),d=r("DoWT");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],a=!0,n=!1,i=void 0;try{for(var l,c=e[Symbol.iterator]();!(a=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);a=!0);}catch(o){n=!0,i=o}finally{try{a||null==c.return||c.return()}finally{if(n)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function g(e){var t=e.navItem,r=v(Object(a.useState)(!1),2),i=r[0],l=r[1],c=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return y(y({},r),{},{id:e,name:e,isSelected:e===t,disabled:!r.url,onClick:r.url?function(){Object(o.navigate)(r.url)}:function(){return null}})},p=[c("Overview",{url:"security/overview"}),c("Alerts"),c("Hosts",{items:[c("All hosts",{disabled:!0}),c("Anamolies"),c("Authentication list"),c("Events",{url:"security/event"})]}),c("Network"),c("Investigations",{items:[c("Timelines"),c("Resolver"),c("Cases")]}),c("Management")];return n.a.createElement(n.a.Fragment,null,n.a.createElement(u.a,{size:"xs"},n.a.createElement("h2",null,n.a.createElement(s.a,{size:"l",type:"logoSecurity"}),"   Security")),n.a.createElement(m.a,null),n.a.createElement(d.a,{mobileTitle:"Navigate within security",toggleOpenOnMobile:function(){l(!i)},isOpenOnMobile:i,items:p}))}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var O=function(e){var t=e.breadcrumbs,r=void 0===t?[]:t,a=e.headerLinks,o=e.navItem,u=e.children,s=E(e,["breadcrumbs","headerLinks","navItem","children"]),m=[{text:"Security",href:(null==r?void 0:r.length)?"/security/overview":void 0}],d=m;(null==r?void 0:r.length)&&(d=m.concat(r));var p=n.a.createElement(i.a,null,a,n.a.createElement(l.a,{href:"#"},"Settings"));return n.a.createElement(c.a,h({breadcrumbs:d,headerLinks:p,solutionNav:n.a.createElement(g,{navItem:o})},s),u)}},riE8:function(e,t,r){"use strict";r.r(t);var a=r("q1tI"),n=r.n(a),i=r("+dxP"),l=r("3vKy"),c=r("ZUzz"),o=r("MrTG"),u=r("8V7x"),s=r("yk6V"),m=r("a5Ba"),d=r("FYvP"),p=r("cgm7"),y=r("JarC"),f=r("trv7"),v=r.n(f),b=r("8yv9"),g=r("k4f9");t.default=function(){return n.a.createElement(g.a,{pageTitle:"Security Overview",navItem:"Overview",pageHeader:{restrictWidth:!0,pageTitle:"Security",iconType:"logoSecurity"}},n.a.createElement(i.a,{className:"euiPageContent--restrictWidth"},n.a.createElement(l.a,null,n.a.createElement(c.a,{color:"subdued",paddingSize:"l",hasShadow:!1},n.a.createElement(o.a,{alignItems:"center"},n.a.createElement(u.a,null,n.a.createElement(s.a,null,n.a.createElement("h2",null,"Lets get you started"),n.a.createElement("p",null,"Elastic Security integrates the free and open Elastic SIEM with Elastic Endpoint Security to prevent, detect, and respond to threats. To begin, you’ll need to add security solution related data to the Elastic Stack. For additional information, you can view our getting started guide.")),n.a.createElement(m.a,null),n.a.createElement("div",null,n.a.createElement(d.a,{fill:!0,iconType:"popout",iconSide:"right"},"Getting started guide"))),n.a.createElement(u.a,{grow:!1},n.a.createElement("img",{className:"pageScreenshot",alt:"","aria-hidden":!0,width:254,src:v.a})))),n.a.createElement(m.a,{size:"xl"}),n.a.createElement(m.a,{size:"xl"}),n.a.createElement(o.a,null,n.a.createElement(u.a,null,n.a.createElement(p.a,{title:"Elastic Agent",description:"A simple, unified way to add monitoring to your hosts.",footer:n.a.createElement(d.a,null,"Add data with Elastic Agent")})),n.a.createElement(u.a,null,n.a.createElement(p.a,{title:"Beats",description:"Lightweight Beats can send data from hundreds or thousands of machines and systems.",footer:n.a.createElement(d.a,null,"Add data with Beats")})),n.a.createElement(u.a,null,n.a.createElement(p.a,{title:"Endpoint",description:"Protect your hosts with threat prevention, detection, and deep security data visibility.",footer:n.a.createElement(d.a,null,"Add Elastic Endpoint Security")}))),n.a.createElement(m.a,{size:"xxl"}),n.a.createElement(y.a,null),n.a.createElement(s.a,{textAlign:"center"},n.a.createElement("h2",null,"Do more with Elastic")),n.a.createElement(m.a,null),n.a.createElement(b.a,{current:"Security"}))))}},trv7:function(e,t,r){e.exports=r.p+"static/Illustration_2-9eecfd54fa09296f8b2c5e6b25f7b2df.png"}}]);
//# sourceMappingURL=component---src-pages-security-overview-tsx-66a79e3bdea7c1dfb8be.js.map