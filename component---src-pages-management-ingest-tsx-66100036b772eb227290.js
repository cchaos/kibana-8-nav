(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{BCQ6:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("sc67"),a("4DPX"),a("E5k/");var n=a("q1tI"),r=a.n(n),l=a("TSYQ"),i=a.n(l),c=a("KVUY"),u=a("q4D5"),o=a("YRHT");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=function(e){var t=e.children,a=e.className,n=e.icon,l=e.isDisabled,d=void 0!==l&&l,p=e.isLoading,b=void 0!==p&&p,f=e.isSelected,g=void 0!==f&&f,y=e.quantity,v=e.buttonRef,E=m(e,["children","className","icon","isDisabled","isLoading","isSelected","quantity","buttonRef"]);d=!!b||d;var O,h,x=i()("euiFacetButton",{"euiFacetButton--isSelected":g,"euiFacetButton--unSelected":!g},a);return b?O=r.a.createElement(u.a,{className:"euiFacetButton__spinner",size:"m"}):"number"==typeof y&&(O=r.a.createElement(c.a,{className:"euiFacetButton__quantity",size:"m",color:!g||d?"subdued":"accent"},y)),r.a.isValidElement(n)&&(h=r.a.cloneElement(n,{className:i()(n.props.className,"euiFacetButton__icon")})),r.a.createElement(o.a,null,(function(e,a){return r.a.createElement("button",s({className:x,disabled:d,type:"button",ref:v,title:E["aria-label"]||a},E),r.a.createElement("span",{className:"euiFacetButton__content"},h,r.a.createElement("span",{className:"euiFacetButton__text","data-text":a,ref:e},t),O))}))}},X8vQ:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("sc67"),a("4DPX"),a("E5k/");var n=a("q1tI"),r=a.n(n),l=a("TSYQ"),i=a.n(l),c=a("q1Cv"),u=a("MrTG");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m={vertical:"euiFacetGroup--vertical",horizontal:"euiFacetGroup--horizontal"},d=(Object(c.b)(m),{none:"euiFacetGroup--gutterNone",s:"euiFacetGroup--gutterSmall",m:"euiFacetGroup--gutterMedium",l:"euiFacetGroup--gutterLarge"}),p=(Object(c.b)(d),function(e){var t=e.children,a=e.className,n=e.layout,l=void 0===n?"vertical":n,c=e.gutterSize,p=void 0===c?"m":c,b=s(e,["children","className","layout","gutterSize"]),f=i()("euiFacetGroup",m[l],d[p],a),g="vertical"===l?"column":"row",y="vertical"!==l;return r.a.createElement(u.a,o({className:f,direction:g,wrap:y,gutterSize:"none"},b),t)})},"o+uz":function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));a("AqHK"),a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("sc67"),a("4DPX"),a("E5k/");var n=a("q1tI"),r=a.n(n),l=a("TSYQ"),i=a.n(l),c=a("q1Cv");function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s={row:null,column:"euiFlexGrid--directionColumn"},m=(Object(c.b)(s),{none:"euiFlexGrid--gutterNone",s:"euiFlexGrid--gutterSmall",m:"euiFlexGrid--gutterMedium",l:"euiFlexGrid--gutterLarge",xl:"euiFlexGrid--gutterXLarge"}),d=(Object(c.b)(m),{0:"euiFlexGrid--wrap",1:"euiFlexGrid--single",2:"euiFlexGrid--halves",3:"euiFlexGrid--thirds",4:"euiFlexGrid--fourths"}),p=(Object.keys(d).map((function(e){return parseInt(e,10)})),function(e){var t=e.children,a=e.className,n=e.gutterSize,l=void 0===n?"l":n,c=e.direction,p=void 0===c?"row":c,b=e.responsive,f=void 0===b||b,g=e.columns,y=void 0===g?0:g,v=e.component,E=void 0===v?"div":v,O=o(e,["children","className","gutterSize","direction","responsive","columns","component"]),h=i()("euiFlexGrid",l?m[l]:void 0,null!=y?d[y]:void 0,p?s[p]:void 0,{"euiFlexGrid--responsive":f},a);return r.a.createElement(E,u({className:h},O),t)})},r1Pz:function(e,t,a){e.exports=a.p+"static/Illustration_3-89238d0c2fbd989532de79d8f08d3175.svg"},xYSX:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("8V7x"),i=(a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("sc67"),a("4DPX"),a("E5k/"),a("TSYQ")),c=a.n(i),u=a("K8PO"),o=a("BeAX"),s=a("ak8e");function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}for(var p=function(e){var t=e.isDisabled,a=e.label,n=e.children,l=e.className,i=e.betaBadgeLabel,p=e.betaBadgeTooltipContent,b=e.betaBadgeIconType,f=e.href,g=e.rel,y=e.target,v=d(e,["isDisabled","label","children","className","betaBadgeLabel","betaBadgeTooltipContent","betaBadgeIconType","href","rel","target"]),E=!f||Object(s.a)(f),O=t||!E,h=c()("euiKeyPadMenuItem",{"euiKeyPadMenuItem--hasBetaBadge":i},l),x=f&&!O?"a":"button",G={};return f&&!O?(G.href=f,G.target=y,G.rel=Object(o.a)({href:f,rel:g,target:y})):(G.type="button",G.disabled=O),r.a.createElement(x,m({className:h},G,v),function(e,t,a,n,l){return r.a.createElement("div",{className:"euiKeyPadMenuItem__inner"},a&&r.a.createElement("span",{className:"euiKeyPadMenuItem__betaBadgeWrapper"},r.a.createElement(u.a,{className:"euiKeyPadMenuItem__betaBadge",label:a,iconType:l,tooltipContent:n})),r.a.createElement("div",{className:"euiKeyPadMenuItem__icon"},e),r.a.createElement("p",{className:"euiKeyPadMenuItem__label"},t))}(n,a,i,p,b))},b=a("0ZAC"),f=a("xuGK"),g=a("a5Ba"),y=a("MrTG"),v=a("JumW"),E=a("X8vQ"),O=a("BCQ6"),h=a("JarC"),x=a("o+uz"),G=a("LuYx"),S=a("UJ+I"),j=a("r1Pz"),q=a.n(j),F=[{text:"Integrations"}],w=[],I=0;I<20;I++)w.push(r.a.createElement(l.a,null,r.a.createElement(p,{label:"Elastic",betaBadgeLabel:"Installed",betaBadgeIconType:"check"},r.a.createElement(b.a,{type:"logoElastic",size:"xl"}))));t.default=function(){var e=Object(n.useContext)(S.KibanaChromeContext);return Object(n.useEffect)((function(){e.setChrome({breadcrumbs:F,pageTitle:"Dev tools | Console"})}),[F]),r.a.createElement(G.a,{pageHeader:{pageTitle:"Integrations",description:"Browse integrations for popular apps and services.",alignItems:"center",rightSideItems:[r.a.createElement("img",{className:"pageScreenshot pageScreenshot--responsive",alt:"","aria-hidden":!0,width:240,src:q.a})]}},r.a.createElement(f.a,{fullWidth:!0,placeholder:"Search integrations..."}),r.a.createElement(g.a,{size:"xxl"}),r.a.createElement(y.a,{gutterSize:"xl"},r.a.createElement(l.a,{grow:!1},r.a.createElement("div",null,r.a.createElement(v.a,{size:"xs"},r.a.createElement("h2",null,"Installed")),r.a.createElement(g.a,{size:"s"}),r.a.createElement(E.a,null,r.a.createElement(O.a,{isSelected:!0,quantity:20},"All"),r.a.createElement(O.a,{quantity:0},"Updates available")),r.a.createElement(h.a,{margin:"xl"}),r.a.createElement(v.a,{size:"xs"},r.a.createElement("h2",null,"Available")),r.a.createElement(g.a,{size:"s"}),r.a.createElement(E.a,null,r.a.createElement(O.a,{quantity:35},"All"),r.a.createElement(O.a,{quantity:1},"Azure"),r.a.createElement(O.a,{quantity:2},"Cloud"),r.a.createElement(O.a,{quantity:1},"Config management"),r.a.createElement(O.a,{quantity:1},"Containers"),r.a.createElement(O.a,{quantity:1},"Custom"),r.a.createElement(O.a,{quantity:6},"Datastore"),r.a.createElement(O.a,{quantity:1},"Kubernetes"),r.a.createElement(O.a,{quantity:3},"Message Queue"),r.a.createElement(O.a,{quantity:2},"Monitoring"),r.a.createElement(O.a,{quantity:6},"Network 1"),r.a.createElement(O.a,{quantity:4},"OS & System"),r.a.createElement(O.a,{quantity:33},"Security"),r.a.createElement(O.a,{quantity:5},"Web")))),r.a.createElement(l.a,null,r.a.createElement(x.a,{style:{padding:24},columns:4,gutterSize:"xl"},w))))}}}]);
//# sourceMappingURL=component---src-pages-management-ingest-tsx-66100036b772eb227290.js.map