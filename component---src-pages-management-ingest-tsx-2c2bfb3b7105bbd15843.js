(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{BCQ6:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("sc67"),a("4DPX"),a("E5k/");var n=a("q1tI"),r=a.n(n),i=a("TSYQ"),l=a.n(i),o=a("KVUY"),c=a("q4D5"),s=a("YRHT");function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=function(e){var t=e.children,a=e.className,n=e.icon,i=e.isDisabled,m=void 0!==i&&i,p=e.isLoading,b=void 0!==p&&p,f=e.isSelected,g=void 0!==f&&f,y=e.quantity,v=e.buttonRef,E=d(e,["children","className","icon","isDisabled","isLoading","isSelected","quantity","buttonRef"]);m=!!b||m;var O,h,S=l()("euiFacetButton",{"euiFacetButton--isSelected":g,"euiFacetButton--unSelected":!g},a);return b?O=r.a.createElement(c.a,{className:"euiFacetButton__spinner",size:"m"}):"number"==typeof y&&(O=r.a.createElement(o.a,{className:"euiFacetButton__quantity",size:"m",color:!g||m?"subdued":"accent"},y)),r.a.isValidElement(n)&&(h=r.a.cloneElement(n,{className:l()(n.props.className,"euiFacetButton__icon")})),r.a.createElement(s.a,null,(function(e,a){return r.a.createElement("button",u({className:S,disabled:m,type:"button",ref:v,title:E["aria-label"]||a},E),r.a.createElement("span",{className:"euiFacetButton__content"},h,r.a.createElement("span",{className:"euiFacetButton__text","data-text":a,ref:e},t),O))}))}},K8PO:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("sc67"),a("E5k/"),a("m210"),a("4DPX");var n=a("q1tI"),r=a.n(n),i=a("TSYQ"),l=a.n(i),o=a("dtKv"),c=a("0ZAC");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=function(e){var t,a=e.className,n=e.label,i=e.tooltipContent,m=e.tooltipPosition,p=void 0===m?"top":m,b=e.title,f=e.iconType,g=d(e,["className","label","tooltipContent","tooltipPosition","title","iconType"]),y=l()("euiBetaBadge",{"euiBetaBadge--iconOnly":f},a);if(f&&(t=r.a.createElement(c.a,{className:"euiBetaBadge__icon",type:f,size:"m","aria-hidden":"true"})),i)return r.a.createElement(o.a,{position:p,content:i,title:b||n},r.a.createElement("span",u({tabIndex:0,className:y},g),t||n));var v=b||n;return v&&"string"!=typeof v&&console.warn("Only string titles are permitted on badges that do not use tooltips. Found: ".concat(s(v))),r.a.createElement("span",u({className:y,title:v},g),t||n)}},X8vQ:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("sc67"),a("4DPX"),a("E5k/");var n=a("q1tI"),r=a.n(n),i=a("TSYQ"),l=a.n(i),o=a("q1Cv"),c=a("MrTG");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d={vertical:"euiFacetGroup--vertical",horizontal:"euiFacetGroup--horizontal"},m=(Object(o.b)(d),{none:"euiFacetGroup--gutterNone",s:"euiFacetGroup--gutterSmall",m:"euiFacetGroup--gutterMedium",l:"euiFacetGroup--gutterLarge"}),p=(Object(o.b)(m),function(e){var t=e.children,a=e.className,n=e.layout,i=void 0===n?"vertical":n,o=e.gutterSize,p=void 0===o?"m":o,b=u(e,["children","className","layout","gutterSize"]),f=l()("euiFacetGroup",d[i],m[p],a),g="vertical"===i?"column":"row",y="vertical"!==i;return r.a.createElement(c.a,s({className:f,direction:g,wrap:y,gutterSize:"none"},b),t)})},cgm7:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("sc67"),a("4DPX"),a("E5k/");var n=a("q1tI"),r=a.n(n),i=a("TSYQ"),l=a.n(i),o=a("q1Cv"),c=a("BeAX"),s=a("yk6V"),u=a("JumW"),d=a("K8PO"),m=a("zCr/"),p=a("wZnm");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=function(e){var t=e.className,a=e.isSelected,n=void 0!==a&&a,i=e.isDisabled,o=e.color,c=e.children,s=f(e,["className","isSelected","isDisabled","color","children"]),u=function(e,t,a){if(a)return a;var n;n=e?r.a.createElement(p.a,{token:"euiCardSelect.selected",default:"Selected"}):t?r.a.createElement(p.a,{token:"euiCardSelect.unavailable",default:"Unavailable"}):r.a.createElement(p.a,{token:"euiCardSelect.select",default:"Select"});return n}(n,i,c),d=l()("euiCardSelect","euiCardSelect--".concat(y(o,n)),t);return r.a.createElement(m.a,b({className:d,color:o||"text",size:"xs",isDisabled:i,iconType:n?"check":void 0,role:"switch","aria-checked":n},s),u)};function y(e,t){return e||(t?"success":"text")}var v=a("geKu"),E=a("ak8e"),O=a("ZUzz");function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var C={left:"euiCard--leftAligned",center:"euiCard--centerAligned",right:"euiCard--rightAligned"},j=(Object(o.b)(C),{vertical:"",horizontal:"euiCard--horizontal"}),x=(Object(o.b)(j),function(e){var t=e.className,a=e.description,i=e.isDisabled,o=e.title,m=e.titleElement,p=void 0===m?"span":m,b=e.titleSize,f=void 0===b?"s":b,x=e.icon,N=e.image,w=e.children,z=e.footer,B=e.onClick,P=e.href,_=e.rel,G=e.target,k=e.textAlign,q=void 0===k?"center":k,I=e.betaBadgeLabel,F=e.betaBadgeTooltipContent,D=e.betaBadgeTitle,T=e.layout,A=void 0===T?"vertical":T,K=e.selectable,W=e.display,M=e.paddingSize,L=S(e,["className","description","isDisabled","title","titleElement","titleSize","icon","image","children","footer","onClick","href","rel","target","textAlign","betaBadgeLabel","betaBadgeTooltipContent","betaBadgeTitle","layout","selectable","display","paddingSize"]),X=!P||Object(E.a)(P),Q=i||!X,Z=!Q&&(B||P||K&&!K.isDisabled),Y=null;if("horizontal"===A&&(N||z||"center"!==q))throw new Error('EuiCard: `layout="horizontal"` cannot be used in conjunction with `image`, `footer`, or `textAlign`.');var J,R,U,V,H=K?"euiCard--isSelectable--".concat(y(K.color,K.isSelected)):void 0,$=l()("euiCard",C[q],j[A],{"euiCard--isClickable":Z,"euiCard--hasBetaBadge":I,"euiCard--hasIcon":x,"euiCard--isSelectable":K,"euiCard-isSelected":K&&K.isSelected,"euiCard-isDisabled":Q},H,t),ee=Object(v.a)()(),te=a?"".concat(ee,"Description"):"";N&&"vertical"===A&&(J=Object(n.isValidElement)(N)||"string"==typeof N?r.a.createElement("div",{className:"euiCard__image"},Object(n.isValidElement)(N)?N:r.a.createElement("img",{src:N,alt:""})):null),x&&(R=r.a.cloneElement(x,{className:l()(x.props.className,"euiCard__icon")})),(J||R)&&(U=r.a.createElement("div",{className:"euiCard__top"},J,R));var ae,ne,re="";I&&(re="".concat(ee,"BetaBadge"),V=r.a.createElement("span",{className:"euiCard__betaBadgeWrapper"},r.a.createElement(d.a,{id:re,label:I,title:D,tooltipContent:F,className:"euiCard__betaBadge"})),M=M||"l"),K&&Q&&void 0===K.isDisabled&&(K.isDisabled=Q),K&&(ae=r.a.createElement(g,h({"aria-describedby":"".concat(ee,"Title ").concat(te)},K,{buttonRef:function(e){Y=e}}))),ne=!Q&&P?r.a.createElement("a",{className:"euiCard__titleAnchor",onClick:B,href:P,target:G,"aria-describedby":te,rel:Object(c.a)({href:P,target:G,rel:_}),ref:function(e){Y=e}},o):Q||B?r.a.createElement("button",{className:"euiCard__titleButton",onClick:B,disabled:Q,"aria-describedby":"".concat(re," ").concat(te),ref:function(e){Y=e}},o):o;var ie=p;return r.a.createElement(O.a,h({element:"div",className:$,onClick:Z?function(e){Y&&Y!==e.target&&Y.click()}:void 0,color:Q?"subdued":W,hasShadow:!Q&&!W,hasBorder:!W&&void 0,paddingSize:M},L),U,r.a.createElement("div",{className:"euiCard__content"},r.a.createElement(u.a,{id:"".concat(ee,"Title"),className:"euiCard__title",size:f},r.a.createElement(ie,null,ne)),a&&r.a.createElement(s.a,{id:te,size:"s",className:"euiCard__description"},r.a.createElement("p",null,a)),w&&r.a.createElement("div",{className:"euiCard__children"},w)),V,"vertical"===A&&z&&r.a.createElement("div",{className:"euiCard__footer"},z),ae)})},r1Pz:function(e,t,a){e.exports=a.p+"static/Illustration_3-89238d0c2fbd989532de79d8f08d3175.svg"},xYSX:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("8V7x"),l=(a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("sc67"),a("4DPX"),a("E5k/"),a("TSYQ")),o=a.n(l),c=a("K8PO"),s=a("BeAX"),u=a("ak8e");function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=function(e){var t=e.isDisabled,a=e.label,n=e.children,i=e.className,l=e.betaBadgeLabel,p=e.betaBadgeTooltipContent,b=e.betaBadgeIconType,f=e.href,g=e.rel,y=e.target,v=m(e,["isDisabled","label","children","className","betaBadgeLabel","betaBadgeTooltipContent","betaBadgeIconType","href","rel","target"]),E=!f||Object(u.a)(f),O=t||!E,h=o()("euiKeyPadMenuItem",{"euiKeyPadMenuItem--hasBetaBadge":l},i),S=f&&!O?"a":"button",C={};return f&&!O?(C.href=f,C.target=y,C.rel=Object(s.a)({href:f,rel:g,target:y})):(C.type="button",C.disabled=O),r.a.createElement(S,d({className:h},C,v),function(e,t,a,n,i){return r.a.createElement("div",{className:"euiKeyPadMenuItem__inner"},a&&r.a.createElement("span",{className:"euiKeyPadMenuItem__betaBadgeWrapper"},r.a.createElement(c.a,{className:"euiKeyPadMenuItem__betaBadge",label:a,iconType:i,tooltipContent:n})),r.a.createElement("div",{className:"euiKeyPadMenuItem__icon"},e),r.a.createElement("p",{className:"euiKeyPadMenuItem__label"},t))}(n,a,l,p,b))},b=a("0ZAC"),f=a("JumW"),g=a("a5Ba"),y=a("MrTG"),v=a("cgm7"),E=a("X8vQ"),O=a("BCQ6"),h=a("JarC"),S=a("ZUzz"),C=a("Sfr6");function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var N=function(e){var t=e.children,a=e.className,n=e.direction,i=void 0===n?"column":n,l=e.responsive,c=void 0===l?["xs","s"]:l,s=x(e,["children","className","direction","responsive"]),u=Object(C.a)(c,!!c),d=o()("euiSplitPanel",{"euiSplitPanel--row":"row"===i,"euiSplitPanel-isResponsive":u},a);return r.a.createElement(S.a,j({paddingSize:"none",grow:!1,className:d},s),t)},w=function(e){var t=e.children,a=e.className,n=x(e,["children","className"]),i=o()("euiSplitPanel__inner",a);return r.a.createElement(S.a,j({element:"div",className:i},{hasShadow:!1,color:"transparent",borderRadius:"none",hasBorder:!1},n),t)},z=a("xuGK"),B=(a("AqHK"),a("q1Cv"));function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}for(var G={row:null,column:"euiFlexGrid--directionColumn"},k=(Object(B.b)(G),{none:"euiFlexGrid--gutterNone",s:"euiFlexGrid--gutterSmall",m:"euiFlexGrid--gutterMedium",l:"euiFlexGrid--gutterLarge",xl:"euiFlexGrid--gutterXLarge"}),q=(Object(B.b)(k),{0:"euiFlexGrid--wrap",1:"euiFlexGrid--single",2:"euiFlexGrid--halves",3:"euiFlexGrid--thirds",4:"euiFlexGrid--fourths"}),I=(Object.keys(q).map((function(e){return parseInt(e,10)})),function(e){var t=e.children,a=e.className,n=e.gutterSize,i=void 0===n?"l":n,l=e.direction,c=void 0===l?"row":l,s=e.responsive,u=void 0===s||s,d=e.columns,m=void 0===d?0:d,p=e.component,b=void 0===p?"div":p,f=_(e,["children","className","gutterSize","direction","responsive","columns","component"]),g=o()("euiFlexGrid",i?k[i]:void 0,null!=m?q[m]:void 0,c?G[c]:void 0,{"euiFlexGrid--responsive":u},a);return r.a.createElement(b,P({className:g},f),t)}),F=a("LuYx"),D=a("UJ+I"),T=a("r1Pz"),A=a.n(T),K=[{text:"Integrations"}],W=[],M=0;M<20;M++)W.push(r.a.createElement(i.a,{grow:!1},r.a.createElement(p,{label:"Elastic",betaBadgeLabel:"Installed",betaBadgeIconType:"check"},r.a.createElement(b.a,{type:"logoElastic",size:"xl"}))));t.default=function(){var e=Object(n.useContext)(D.KibanaChromeContext);return Object(n.useEffect)((function(){e.setChrome({breadcrumbs:K,pageTitle:"Dev tools | Console"})}),[K]),r.a.createElement(F.a,{pageBodyProps:{panelled:!0,paddingSize:"none"},pageContentProps:{color:"subdued",hasBorder:!0},pageHeader:{pageTitle:"Integrations",description:"Browse integrations for popular apps and services.",alignItems:"center",rightSideItems:[r.a.createElement("img",{className:"pageScreenshot pageScreenshot--responsive",alt:"","aria-hidden":!0,width:240,src:A.a})]}},r.a.createElement(f.a,{size:"xs"},r.a.createElement("h2",null,"Suggestions for you")),r.a.createElement(g.a,null),r.a.createElement(y.a,{gutterSize:"xl"},r.a.createElement(i.a,null,r.a.createElement(v.a,{icon:r.a.createElement(b.a,{type:"logoAWS",size:"xl"}),title:"AWS EC2",description:"Example of a card’s description. Stick to one or two sentences."})),r.a.createElement(i.a,null,r.a.createElement(v.a,{icon:r.a.createElement(b.a,{type:"logoAWS",size:"xl"}),title:"AWS EC2",description:"Example of a card’s description. Stick to one or two sentences."})),r.a.createElement(i.a,null,r.a.createElement(v.a,{icon:r.a.createElement(b.a,{type:"logoAWS",size:"xl"}),title:"AWS EC2",description:"Example of a card’s description. Stick to one or two sentences."})),r.a.createElement(i.a,null,r.a.createElement(v.a,{icon:r.a.createElement(b.a,{type:"logoAWS",size:"xl"}),title:"AWS EC2",description:"Example of a card’s description. Stick to one or two sentences."}))),r.a.createElement(g.a,{size:"xxl"}),r.a.createElement(y.a,{gutterSize:"xl"},r.a.createElement(i.a,{grow:!1},r.a.createElement("div",null,r.a.createElement(f.a,{size:"xs"},r.a.createElement("h2",null,"Installed")),r.a.createElement(g.a,{size:"s"}),r.a.createElement(E.a,null,r.a.createElement(O.a,{isSelected:!0,quantity:20},"All"),r.a.createElement(O.a,{quantity:0},"Updates available")),r.a.createElement(h.a,{margin:"xl"}),r.a.createElement(f.a,{size:"xs"},r.a.createElement("h2",null,"Available")),r.a.createElement(g.a,{size:"s"}),r.a.createElement(E.a,{gutterSize:"none"},r.a.createElement(O.a,{quantity:35},"All"),r.a.createElement(O.a,{quantity:1},"Azure"),r.a.createElement(O.a,{quantity:2},"Cloud"),r.a.createElement(O.a,{quantity:1},"Config management"),r.a.createElement(O.a,{quantity:1},"Containers"),r.a.createElement(O.a,{quantity:1},"Custom"),r.a.createElement(O.a,{quantity:6},"Datastore"),r.a.createElement(O.a,{quantity:1},"Kubernetes"),r.a.createElement(O.a,{quantity:3},"Message Queue"),r.a.createElement(O.a,{quantity:2},"Monitoring"),r.a.createElement(O.a,{quantity:6},"Network 1"),r.a.createElement(O.a,{quantity:4},"OS & System"),r.a.createElement(O.a,{quantity:33},"Security"),r.a.createElement(O.a,{quantity:5},"Web")))),r.a.createElement(i.a,null,r.a.createElement(N,null,r.a.createElement(w,{color:"subdued"},r.a.createElement(z.a,{fullWidth:!0,placeholder:"Search integrations..."})),r.a.createElement(h.a,{margin:"none"}),r.a.createElement(w,null,r.a.createElement(I,{style:{padding:24,justifyContent:"space-between"},columns:4,gutterSize:"xl"},W))))))}}}]);
//# sourceMappingURL=component---src-pages-management-ingest-tsx-2c2bfb3b7105bbd15843.js.map