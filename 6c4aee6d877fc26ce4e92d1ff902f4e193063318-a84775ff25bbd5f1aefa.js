(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"1+2M":function(e,t,r){"use strict";r.d(t,"a",(function(){return n.a}));r("q1tI"),r("TSYQ");var n=r("RCxc")},IVB2:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));r("AqHK"),r("MIFh"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("sc67"),r("4DPX"),r("E5k/");var n=r("q1tI"),a=r.n(n),i=r("TSYQ"),o=r.n(i),l=r("JumW"),c=r("MrTG"),u=r("8V7x"),s=r("a5Ba"),p=r("0ZAC"),d=r("yk6V"),f=r("pTXc");function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=function(e){var t,r,i,b,v,g,O=e.iconType,h=e.iconColor,E=void 0===h?"subdued":h,j=e.title,w=e.titleSize,S=void 0===w?"m":w,P=e.body,x=e.actions,T=e.className,z=y(e,["iconType","iconColor","title","titleSize","body","actions","className"]),I=o()("euiEmptyPrompt",T);(O&&(t=a.a.createElement(n.Fragment,null,a.a.createElement(p.a,{type:O,size:"xxl",color:E}),a.a.createElement(s.a,{size:"s"}))),P||j)&&(j&&(i=a.a.createElement(n.Fragment,null,a.a.createElement(l.a,{size:S},j),a.a.createElement(s.a,{size:"m"}))),P&&(b=a.a.createElement(n.Fragment,null,a.a.createElement(d.a,null,P))),r=a.a.createElement(f.a,{color:"subdued"},i,b));x&&(g=Array.isArray(x)?a.a.createElement(c.a,{gutterSize:"m",alignItems:"center",justifyContent:"center",direction:"column"},x.map((function(e,t){return a.a.createElement(u.a,{key:t,grow:!1},e)}))):x,v=a.a.createElement(n.Fragment,null,a.a.createElement(s.a,{size:"s"}),g));return a.a.createElement("div",m({className:I},z),t,r,P&&x&&a.a.createElement(s.a,{size:"l"}),v)}},LuYx:function(e,t,r){"use strict";r.d(t,"a",(function(){return E}));var n=r("q1tI"),a=r.n(n),i=r("Sfr6"),o=r("tffo"),l=r("EoVf"),c=r("bT+T"),u=r("BWMX"),s=r("+dxP"),p=r("IVB2"),d=r("QCJD"),f=r("pbrG"),m=r("3vKy"),y=r("oQQC"),b=r("1+2M");function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var E=function(e){var t,r,E,j,w=e.template,S=e.pageHeader,P=e.globals,x=void 0!==P&&P,T=e.solutionNav,z=e.children,I=e.bottomBar,k=e.restrictWidth,B=void 0===k||k,C=e.pageContentProps,N=void 0===C?{}:C,F=h(e,["template","pageHeader","globals","solutionNav","children","bottomBar","restrictWidth","pageContentProps"]),G=Object(i.a)(["xs","s"]);S&&S.time&&(S.rightSideItems=[a.a.createElement(b.a,null)],S.responsive="reverse",S.rightSideGroupProps={responsive:!0},S.time=void 0);var W,A,Q=T,D=x&&a.a.createElement(y.a,null);if(I){var q=Object(n.useRef)(null);W=a.a.createElement("div",{ref:q,className:"euiBottomBar euiBottomBar--paddingSmall",style:{position:x?"sticky":"fixed",bottom:0,top:x?0:void 0,left:G||!T?0:240}},I);var M=Object(o.b)(q.current);N.style=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({paddingBottom:x?void 0:M.height},N.style)}if("empty"===w)return a.a.createElement(l.a,v({template:"empty",restrictWidth:!D&&B,pageContentProps:N,paddingSize:D?"none":"l",pageSideBar:Q,pageHeader:S},F),D,z,W);if(D)switch(w){case"centeredBody":return a.a.createElement(c.a,{grow:!0,paddingSize:D?"none":"l"},a.a.createElement(u.a,null,D,a.a.createElement(s.a,v({},N,{verticalPosition:"center",horizontalPosition:"center",paddingSize:"none"}),a.a.createElement(p.a,{iconType:null===(t=S)||void 0===t?void 0:t.iconType,title:a.a.createElement("h2",null,null===(r=S)||void 0===r?void 0:r.pageTitle),body:a.a.createElement("p",null,null===(E=S)||void 0===E?void 0:E.description),actions:null===(j=S)||void 0===j?void 0:j.rightSideItems}))));default:return a.a.createElement(c.a,{paddingSize:"none"},a.a.createElement(d.a,{sticky:!0},Q),a.a.createElement(u.a,{panelled:!0,paddingSize:"none",restrictWidth:!1},D,a.a.createElement(f.a,v({restrictWidth:B,paddingSize:"l"},S)),a.a.createElement(s.a,v({},N,{hasBorder:!1,hasShadow:!1,paddingSize:"l",color:"transparent",borderRadius:"none"}),a.a.createElement(m.a,{restrictWidth:B},z)),W))}return"centeredBody"===w&&S&&(A=a.a.createElement(p.a,{iconType:S.iconType,title:a.a.createElement("h2",null,S.pageTitle),body:a.a.createElement("p",null,S.description),actions:S.rightSideItems}),S=void 0),a.a.createElement(l.a,v({template:w,pageContentProps:N,pageSideBar:Q,pageHeader:S,restrictWidth:B},F),A,z,W)}},RCxc:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var n=r("q1tI"),a=r.n(n),i=r("TSYQ"),o=r.n(i),l=r("MrTG"),c=r("8V7x"),u=r("saQl"),s=r("FYvP"),p=r("yk6V"),d=r("kEB6");function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(c){a=!0,i=c}finally{try{n||null==l.return||l.return()}finally{if(a)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function v(e){var t=e.className,r=b(e,["className"]),i=m(Object(n.useState)(!1),2),y=i[0],v=i[1],g=o()("euiSuperDatePicker_shim",t);return a.a.createElement(l.a,f({gutterSize:"s",responsive:!1,className:g},r),a.a.createElement(c.a,{grow:!1},a.a.createElement(u.a,{zIndex:999,buffer:108,anchorPosition:"leftCenter",button:a.a.createElement(s.a,{onClick:function(){return v((function(e){return!e}))},size:"s",iconType:"calendar"},"Last 15 min"),isOpen:y,closePopover:function(){return v(!1)}},a.a.createElement("div",{style:{width:200}},a.a.createElement(p.a,{size:"s"},a.a.createElement("p",null,"Example of a popover near the header with a buffer affording for the double fixed headers."))))),a.a.createElement(c.a,{grow:!1},a.a.createElement(d.a,{size:"s",iconType:"refresh",display:"base","aria-label":"Refresh"})))}},oQQC:function(e,t,r){"use strict";r.d(t,"a",(function(){return O}));var n=r("q1tI"),a=r.n(n),i=r("TSYQ"),o=r.n(i),l=r("MrTG"),c=r("8V7x"),u=r("kEB6"),s=(r("pJf4"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("sc67"),r("4DPX"),r("E5k/"),r("wsXB")),p=r("q2GH");function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=function(e){var t=e.id,r=e.name,n=e.placeholder,i=e.value,l=e.className,c=e.icon,u=e.isInvalid,m=e.inputRef,y=e.fullWidth,b=void 0!==y&&y,v=e.isLoading,g=e.compressed,O=e.prepend,h=e.append,E=e.readOnly,j=e.controlOnly,w=f(e,["id","name","placeholder","value","className","icon","isInvalid","inputRef","fullWidth","isLoading","compressed","prepend","append","readOnly","controlOnly"]),S=o()("euiFieldText",l,{"euiFieldText--withIcon":c,"euiFieldText--fullWidth":b,"euiFieldText--compressed":g,"euiFieldText--inGroup":O||h,"euiFieldText-isLoading":v}),P=a.a.createElement(p.a,{isInvalid:u},a.a.createElement("input",d({type:"text",id:t,name:r,placeholder:n,className:S,value:i,ref:m,readOnly:E},w)));return j?P:a.a.createElement(s.a,{icon:c,fullWidth:b,isLoading:v,compressed:g,readOnly:E,prepend:O,append:h,inputId:t},P)},y=r("zCr/"),b=r("1+2M");function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function O(e){var t=e.className,r=g(e,["className"]),n=o()("kbnGlobals",t);return a.a.createElement("div",{className:n},a.a.createElement(l.a,v({gutterSize:"s",responsive:!1},r),a.a.createElement(c.a,{grow:!1},a.a.createElement(u.a,{size:"s",iconType:"filter","aria-label":"Filter options",display:"base"})),a.a.createElement(c.a,{grow:!0},a.a.createElement(m,{placeholder:"Filter with KQL...",compressed:!0,fullWidth:!0,append:a.a.createElement(y.a,{size:"xs",iconType:"plusInCircle"},"Add")})),a.a.createElement(c.a,{grow:!1},a.a.createElement(b.a,null))))}}}]);
//# sourceMappingURL=6c4aee6d877fc26ce4e92d1ff902f4e193063318-a84775ff25bbd5f1aefa.js.map