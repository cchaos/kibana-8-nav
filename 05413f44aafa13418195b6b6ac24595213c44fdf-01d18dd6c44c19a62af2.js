(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{ILuU:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n("q1tI"),i=n.n(r),a=n("Y4eJ"),o=n("bT+T"),l=n("BWMX"),u=n("lCo2"),s=n("9Dj+"),c=n("qhky"),d=n("TSYQ"),p=n.n(d);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var b=function(e){var t=e.breadcrumbs,n=e.headerLinks,d=e.solutionNav,b=e.children,g=e.pageTitle,y=e.pageHeader,m=e.pageProps,v=e.pageBodyProps,O=e.pageSideBarProps,E=e.fullHeight,z=Object(r.useContext)(s.KibanaChromeContext);Object(r.useEffect)((function(){z.setChrome({breadcrumbs:t,headerLinks:n})}),[t,n]);var S=d?i.a.createElement("div",O,d):void 0,h=y&&i.a.createElement(u.a,y),P=p()("kbnPage",{"kbnPage--fullHeight":E},m?m.className:"");return S?i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null,i.a.createElement("title",null,g," | Kibana 8 Prototype")),i.a.createElement(a.a,null,(function(e,t){return i.a.createElement(o.a,f({},m,{paddingSize:"none",className:P}),i.a.createElement(e,{mode:["collapsible",{position:"top"}],initialSize:17,minSize:"60px",maxSize:"300px",paddingSize:"none",className:"euiPageSideBar"},S),i.a.createElement(t,{className:"kbnPage__resizer",style:{}}),i.a.createElement(e,{mode:"main",initialSize:83,minSize:"600px",paddingSize:"none"},i.a.createElement(l.a,v,h,b)))}))):i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null,i.a.createElement("title",null,g," | Kibana 8 Prototype")),i.a.createElement(o.a,f({},m,{paddingSize:"none",className:P}),S,i.a.createElement(l.a,v,h,b)))}},Y4eJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return ue}));n("gu/5"),n("eoYm"),n("AqHK"),n("sc67"),n("MIFh"),n("m210"),n("YbXK"),n("cFtU"),n("pJf4"),n("q8oJ"),n("C9fy"),n("R48M"),n("+ar0"),n("xtjI"),n("JHok"),n("OeI1"),n("4DPX"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/");var r=n("q1tI"),i=n.n(r),a=n("TSYQ"),o=n.n(a),l=n("7qzp"),u=n("tffo"),s=Object(r.createContext)({});function c(e){var t=e.children,n=e.registry;return i.a.createElement(s.Provider,{value:{registry:n}},t)}var d=function(){var e=Object(r.useContext)(s);if(!e.registry)throw new Error("useEuiResizableContainerContext must be used within a <EuiResizableContainerContextProvider />");return e},p=n("wZnm"),f=n("geKu");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){i=!0,a=u}finally{try{r||null==l.return||l.return()}finally{if(i)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var v=Object(f.a)("resizable-button"),O=function(e){var t=e.isHorizontal,n=e.className,a=e.id,l=e.registration,u=e.disabled,s=e.onFocus,c=e.onBlur,f=m(e,["isHorizontal","className","id","registration","disabled","onFocus","onBlur"]),y=Object(r.useRef)(a||v()),O=d().registry,E=(O=void 0===O?{resizers:{}}:O).resizers,z=Object(r.useMemo)((function(){return u||E[y.current]&&E[y.current].isDisabled}),[E,u]),S=o()("euiResizableButton",{"euiResizableButton--vertical":!t,"euiResizableButton--horizontal":t,"euiResizableButton--disabled":z},n),h=Object(r.useRef)(),P=Object(r.useCallback)((function(e){if(l){var t=y.current;e?(h.current=e,l.register({id:t,ref:e,isFocused:!1,isDisabled:u||!1})):null!=h.current&&(l.deregister(t),h.current=void 0)}}),[l,u]),j=function(e){return e.currentTarget.focus()},I=function(){s&&s(y.current)};return i.a.createElement(p.a,{tokens:["euiResizableButton.horizontalResizerAriaLabel","euiResizableButton.verticalResizerAriaLabel"],defaults:["Press left or right to adjust panels size","Press up or down to adjust panels size"]},(function(e){var n=g(e,2),r=n[0],a=n[1];return i.a.createElement("button",b({id:y.current,ref:P,"aria-label":t?r:a,className:S,"data-test-subj":"euiResizableButton",type:"button",onClick:j,onFocus:I,onBlur:c,disabled:z},f))}))};var E=n("ZUzz"),z=n("kEB6");function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var P=function(e){var t=e.className,n=e.externalPosition,r=e.internalPosition,a=void 0===r?"middle":r,l=e.direction,u=void 0===l?"horizontal":l,s=e.isVisible,c=e.isCollapsed,d=h(e,["className","externalPosition","internalPosition","direction","isVisible","isCollapsed"]),p="horizontal"===u,f=o()("euiResizableToggleButton","euiResizableToggleButton--".concat(u),"euiResizableToggleButton--".concat(n),"euiResizableToggleButton--".concat(a),{"euiResizableToggleButton-isVisible":s,"euiResizableToggleButton-isCollapsed":c},t),b=p?"grab":"grabHorizontal",g=p?"grab":"grabHorizontal";switch(n){case"before":b=p?"menuLeft":"menuUp",g=p?"menuRight":"menuDown";break;case"after":b=p?"menuRight":"menuDown",g=p?"menuLeft":"menuUp"}return i.a.createElement(z.a,S({color:"text"},d,{className:f,iconType:c?b:g}))};function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var C={className:null,"data-test-subj":void 0,position:"middle"},A=function(e){return"object"===T(e)?e[0]:e},B={none:null,s:"euiResizablePanel--paddingSmall",m:"euiResizablePanel--paddingMedium",l:"euiResizablePanel--paddingLarge"},x=function(e){var t="middle";return e.matches(":first-of-type")?t="first":e.matches(":last-of-type")&&(t="last"),t},U=Object(f.a)("resizable-panel"),L=function(e){var t,n=e.children,a=e.className,l=e.id,u=e.isHorizontal,s=e.size,c=e.initialSize,f=e.minSize,b=void 0===f?"0px":f,g=e.scrollable,y=void 0===g||g,m=e.style,v=void 0===m?{}:m,O=e.mode,z=e.registration,S=e.onToggleCollapsed,h=e.onToggleCollapsedInternal,R=e.wrapperProps,w=e.hasShadow,L=void 0!==w&&w,D=e.borderRadius,N=void 0===D?"none":D,k=e.color,M=void 0===k?"transparent":k,Z=e.paddingSize,G=void 0===Z?"m":Z,F=e.wrapperPadding,H=void 0===F?"none":F,W=I(e,["children","className","id","isHorizontal","size","initialSize","minSize","scrollable","style","mode","registration","onToggleCollapsed","onToggleCollapsedInternal","wrapperProps","hasShadow","borderRadius","color","paddingSize","wrapperPadding"]),Y=d().registry,V=(Y=void 0===Y?{panels:{},resizers:{}}:Y).panels,q=Y.resizers,K=Object(r.useRef)(null),J=Object(r.useRef)(l||U()),X=Object(r.useRef)([]),$=Object(r.useMemo)((function(){return A(O)}),[O]),Q=Object(r.useMemo)((function(){return function(e){return"object"===T(e)?_(_({},C),e[1]):C}(O)}),[O]),ee=Object(r.useMemo)((function(){var e;return null!==(e=V[J.current]&&V[J.current].size)&&void 0!==e?e:c||0}),[V,c]),te=Object(r.useMemo)((function(){return V[J.current]&&V[J.current].isCollapsed||!1}),[V]),ne=Object(r.useMemo)((function(){return V[J.current]&&V[J.current].position||"middle"}),[V]),re=Object(r.useMemo)((function(){return"collapsible"===$}),[$]),ie=Object(r.useMemo)((function(){var e=null;if("middle"===ne&&(re||te)){var t=Object.keys(V),n=t.indexOf(J.current),r=V[t[n-1]],i=V[t[n+1]],a=r?A(r.mode):null,o=i?A(i.mode):null;"main"===a?e="right":"main"===o?e="left":a&&"collapsible"!==a?e="right":o&&"collapsible"!==o?e="left":r&&i?e=r.size>i.size?"right":"left":r?e="right":i&&(e="left")}return e}),[te,re,ne,V]),ae=Object(r.useMemo)((function(){return"".concat(2*E.b[G],"px")}),[G]),oe=o()("euiResizablePanel",B[H],{"euiResizablePanel--collapsible":re,"euiResizablePanel-isCollapsed":te},"euiResizablePanel--".concat(ne),R&&R.className),le=o()("euiResizablePanel__content",{"euiResizablePanel__content--scrollable":y},a);t=s?{width:u?"".concat(s,"%"):"100%",height:u?"auto":"".concat(s,"%")}:{width:u?"".concat(ee,"%"):"100%",height:u?"auto":"".concat(ee,"%")};var ue=_(_({},v),t);Object(r.useEffect)((function(){if(z){var e=J.current,t=null!=s?s:c||0;return X.current=[K.current.previousElementSibling?K.current.previousElementSibling.id:"",K.current.nextElementSibling?K.current.nextElementSibling.id:""],z.register({id:e,size:t,prevSize:t,getSizePx:function(){return u?K.current.getBoundingClientRect().width:K.current.getBoundingClientRect().height},minSize:[b,ae],mode:$,isCollapsed:!1,position:x(K.current)}),function(){z.deregister(e)}}}),[c,u,b,s,z,$,ae]);var se,ce=function(e){h&&h(J.current,e),S&&S(J.current,e)},de=Object(p.b)("euiResizablePanel.toggleButtonAriaLabel","Press to toggle this panel"),pe=(re||te)&&("last"===ne||"middle"===ne&&"right"===ie),fe=(re||te)&&("first"===ne||"middle"===ne&&"left"===ie),be="custom"===$&&te||re;return(re||"custom"===$)&&pe?se=i.a.createElement(P,{externalPosition:"before",direction:u?"horizontal":"vertical",isVisible:q[X.current[0]].isFocused||q[X.current[0]].isDisabled,isCollapsed:q[X.current[0]].isDisabled,internalPosition:Q.position,"data-test-subj":Q["data-test-subj"],"aria-label":de,onClick:function(e){ce({direction:"right"}),e.detail&&e.currentTarget.blur()}}):(re||"custom"===$)&&fe&&(se=i.a.createElement(P,{externalPosition:"after",direction:u?"horizontal":"vertical",isVisible:q[X.current[1]].isFocused||q[X.current[1]].isDisabled,isCollapsed:q[X.current[1]].isDisabled,internalPosition:Q.position,"data-test-subj":Q["data-test-subj"],"aria-label":de,onClick:function(e){ce({direction:"left"}),e.detail&&e.currentTarget.blur()}})),i.a.createElement("div",j({},R,{id:J.current,ref:K,style:ue,className:oe}),be&&pe&&se,i.a.createElement(E.a,j({className:le,hasShadow:L,borderRadius:N,color:M,paddingSize:te?"none":G},W),n),be&&fe&&se)};n("wZFJ"),n("cxuS"),n("U6Bt");var D=n("q1Cv");function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){i=!0,a=u}finally{try{r||null==l.return||l.return()}finally{if(i)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){G(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e){return"object"===F(e)&&"pageX"in e&&"pageY"in e}var W=function(e,t){return t<1||e<0?0:e/t*100},Y=function(e){return Object.values(e).reduce((function(e,t){return e[t.id]=t.size,e}),{})},V=function(e,t){var n=0,r=parseInt(e);return e.indexOf("px")>-1?n=W(r,t):e.indexOf("%")>-1&&(n=W(t*(r/100),t)),n},q=function(e,t){var n=V(e[1],t),r=V(e[0],t);return Math.max(r,n)},K=function(e,t){var n=H(e)?e.clientX:e.touches[0].clientX,r=H(e)?e.clientY:e.touches[0].clientY;return t?n:r},J=function(e,t){if(!e)return null;for(var n="prev"===t?"previousElementSibling":"nextElementSibling",r=e[n];r;){if(r.matches(".euiResizablePanel:not(.euiResizablePanel-isCollapsed)"))return r;r=r[n]}},X=function(e){return e},$=function(e){var t=e.initialState,n=e.containerRef,i=e.onPanelWidthChange;var a=N(Object(r.useReducer)((function(e,r){var a=function(e){var t;return t=e.panels,i&&i(Y(t)),e};switch(r.type){case"EUI_RESIZABLE_CONTAINER_INIT":return Z(Z({},e),{},{containerSize:e.isHorizontal?n.current.getBoundingClientRect().width:n.current.getBoundingClientRect().height});case"EUI_RESIZABLE_PANEL_REGISTER":var o=r.payload.panel;return Z(Z({},e),{},{panels:Z(Z({},e.panels),{},G({},o.id,o))});case"EUI_RESIZABLE_PANEL_DEREGISTER":var l=r.payload.panelId;return Z(Z({},e),{},{panels:Object.values(e.panels).reduce((function(e,t){return t.id!==l&&(e[t.id]=t),e}),{})});case"EUI_RESIZABLE_BUTTON_REGISTER":var u=r.payload.resizer;return Z(Z({},e),{},{resizers:Z(Z({},e.resizers),{},G({},u.id,u))});case"EUI_RESIZABLE_BUTTON_DEREGISTER":var s=r.payload.resizerId;return Z(Z({},e),{},{resizers:Object.values(e.resizers).reduce((function(e,t){return t.id!==s&&(e[t.id]=t),e}),{})});case"EUI_RESIZABLE_DRAG_START":var c=r.payload,d=c.position,p=c.prevPanelId,f=c.nextPanelId;return Z(Z({},e),{},{isDragging:!0,currentResizerPos:d,prevPanelId:p,nextPanelId:f});case"EUI_RESIZABLE_DRAG_MOVE":if(!e.isDragging)return e;var b,g=r.payload,y=g.position,m=g.prevPanelId,v=g.nextPanelId,O=e.panels[m],E=e.panels[v],z=y-e.currentResizerPos,S=q(O.minSize,e.containerSize),h=q(E.minSize,e.containerSize),P=W(O.getSizePx()+z,e.containerSize),j=W(E.getSizePx()-z,e.containerSize);return P>=S&&j>=h?a(Z(Z({},e),{},{currentResizerPos:y,panels:Z(Z({},e.panels),{},(b={},G(b,m,Z(Z({},e.panels[m]),{},{size:P})),G(b,v,Z(Z({},e.panels[v]),{},{size:j})),b))})):e;case"EUI_RESIZABLE_KEY_MOVE":var I,R=r.payload,_=R.prevPanelId,w=R.nextPanelId,T=R.direction,C=e.panels[_],A=e.panels[w],B=q(C.minSize,e.containerSize),x=q(A.minSize,e.containerSize),U=W(C.getSizePx()-("backward"===T?10:-10),e.containerSize),L=W(A.getSizePx()-("forward"===T?10:-10),e.containerSize);return U>=B&&L>=x?a(Z(Z({},e),{},{isDragging:!1,panels:Z(Z({},e.panels),{},(I={},G(I,_,Z(Z({},e.panels[_]),{},{size:U})),G(I,w,Z(Z({},e.panels[w]),{},{size:L})),I))})):e;case"EUI_RESIZABLE_TOGGLE":var N=r.payload,k=N.options,M=N.panelId,F=e.panels[M],H=!F.isCollapsed,V=document.getElementById(M),K=V.previousElementSibling,X=K?K.previousElementSibling:null,$=V.nextElementSibling,Q=$?$.nextElementSibling:null,ee={};K&&X&&(ee[K.id]=!!e.panels[X.id].isCollapsed||H),$&&Q&&(ee[$.id]=!!e.panels[Q.id].isCollapsed||H);var te={};X&&!e.panels[X.id].isCollapsed&&"right"===k.direction&&(te[X.id]=e.panels[X.id]),Q&&!e.panels[Q.id].isCollapsed&&"left"===k.direction&&(te[Q.id]=e.panels[Q.id]);var ne=Object.keys(te).length;if(!ne){var re=J(V,"prev"),ie=J(V,"next"),ae=re?e.panels[re.id]:null,oe=ie?e.panels[ie.id]:null;ae&&"right"===k.direction?te[ae.id]=ae:oe&&"left"===k.direction?te[oe.id]=oe:(ae&&(te[ae.id]=ae),oe&&(te[oe.id]=oe)),ne=Object.keys(te).length}var le=H?W(F.mode?24:0,e.containerSize):F.prevSize,ue=H?(F.size-le)/ne:(le-F.size)/ne*-1,se=Object.values(e.panels).reduce((function(e,t){return t.id!==M&&t.isCollapsed&&(e+=t.size),e}),0);H||ne||(le=100-se);var ce={};return ue<0&&Object.values(te).some((function(t){return t.size+ue<q(t.minSize,e.containerSize)}))?(te=Object.values(e.panels).reduce((function(e,t){return t.id===M||t.isCollapsed||(e[t.id]=Z({},t)),e}),{}),le=(100-se)/(Object.keys(te).length+1),ce=Object.values(te).reduce((function(e,t){return e[t.id]=Z(Z({},t),{},{size:le}),e}),{})):ce=Object.values(te).reduce((function(e,t){return e[t.id]=Z(Z({},t),{},{size:t.size+ue}),e}),{}),a(Z(Z({},e),{},{panels:Z(Z(Z({},e.panels),ce),{},G({},M,Z(Z({},e.panels[M]),{},{size:le,isCollapsed:H,prevSize:H?F.size:le}))),resizers:Object.values(e.resizers).reduce((function(e,t){var n;return e[t.id]=Z(Z({},t),{},{isFocused:!1,isDisabled:null!==(n=ee[t.id])&&void 0!==n?n:t.isDisabled}),e}),{})}));case"EUI_RESIZABLE_BUTTON_FOCUS":var de=r.payload.resizerId;return Z(Z({},e),{},{resizers:Object.values(e.resizers).reduce((function(e,t){return e[t.id]=Z(Z({},t),{},{isFocused:t.id===de}),e}),{})});case"EUI_RESIZABLE_BUTTON_BLUR":return Z(Z({},e),{},{resizers:Object.values(e.resizers).reduce((function(e,t){return e[t.id]=Z(Z({},t),{},{isFocused:!1}),e}),{})});case"EUI_RESIZABLE_RESET":return Z(Z({},t),{},{panels:e.panels,resizers:e.resizers,containerSize:e.containerSize});case"EUI_RESIZABLE_ONCHANGE":return i(Y(e.panels)),e;case"EUI_RESIZABLE_RESIZE":return e;default:return Object(D.a)(r),e}}),t,X),2),o=a[0],l=a[1];return[Object(r.useMemo)((function(){return{reset:function(){return l({type:"EUI_RESIZABLE_RESET"})},initContainer:function(){return l({type:"EUI_RESIZABLE_CONTAINER_INIT"})},registerPanel:function(e){return l({type:"EUI_RESIZABLE_PANEL_REGISTER",payload:{panel:e}})},deregisterPanel:function(e){return l({type:"EUI_RESIZABLE_PANEL_DEREGISTER",payload:{panelId:e}})},registerResizer:function(e){return l({type:"EUI_RESIZABLE_BUTTON_REGISTER",payload:{resizer:e}})},deregisterResizer:function(e){return l({type:"EUI_RESIZABLE_BUTTON_DEREGISTER",payload:{resizerId:e}})},dragStart:function(e){var t=e.prevPanelId,n=e.nextPanelId,r=e.position;return l({type:"EUI_RESIZABLE_DRAG_START",payload:{position:r,prevPanelId:t,nextPanelId:n}})},dragMove:function(e){var t=e.prevPanelId,n=e.nextPanelId,r=e.position;return l({type:"EUI_RESIZABLE_DRAG_MOVE",payload:{position:r,prevPanelId:t,nextPanelId:n}})},keyMove:function(e){var t=e.prevPanelId,n=e.nextPanelId,r=e.direction;return l({type:"EUI_RESIZABLE_KEY_MOVE",payload:{prevPanelId:t,nextPanelId:n,direction:r}})},togglePanel:function(e,t){return l({type:"EUI_RESIZABLE_TOGGLE",payload:{panelId:e,options:t}})},resizerFocus:function(e){return l({type:"EUI_RESIZABLE_BUTTON_FOCUS",payload:{resizerId:e}})},resizerBlur:function(){return l({type:"EUI_RESIZABLE_BUTTON_BLUR"})}}}),[]),o]};function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){ne(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function re(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){i=!0,a=u}finally{try{r||null==l.return||l.return()}finally{if(i)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ie(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ie(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ie(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ae(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var oe="horizontal",le={isDragging:!1,currentResizerPos:-1,prevPanelId:null,nextPanelId:null,containerSize:1,panels:{},resizers:{}},ue=function(e){var t=e.direction,n=void 0===t?"horizontal":t,a=e.children,s=e.className,d=e.onPanelWidthChange,p=e.onToggleCollapsed,f=ae(e,["direction","children","className","onPanelWidthChange","onToggleCollapsed"]),g=Object(r.useRef)(null),y=n===oe,m=o()("euiResizableContainer",{"euiResizableContainer--vertical":!y,"euiResizableContainer--horizontal":y},s),v=re($({initialState:te(te({},le),{},{isHorizontal:y}),containerRef:g,onPanelWidthChange:d}),2),E=v[0],z=v[1],S=Object(r.useCallback)((function(){E.initContainer()}),[E]),h=Object(u.b)(g.current,y?"width":"height");Object(r.useEffect)((function(){S()}),[S,h]);var P,I=Object(r.useCallback)((function(e){var t=e.currentTarget,n=t.previousElementSibling,r=t.nextElementSibling;if(n&&r){var i=n.id,a=r.id,o=K(e,y);E.dragStart({position:o,prevPanelId:i,nextPanelId:a})}}),[E,y]),R=Object(r.useCallback)((function(e){if(z.prevPanelId&&z.nextPanelId&&z.isDragging){var t=K(e,y);E.dragMove({position:t,prevPanelId:z.prevPanelId,nextPanelId:z.nextPanelId})}}),[E,y,z.prevPanelId,z.nextPanelId,z.isDragging]),_=Object(r.useCallback)((function(e){var t,n=e.key,r=e.currentTarget,i=y&&(n===l.a.ARROW_LEFT||n===l.a.ARROW_RIGHT),a=!y&&(n===l.a.ARROW_UP||n===l.a.ARROW_DOWN),o=r.previousElementSibling.id,u=r.nextElementSibling.id;n!==l.a.ARROW_DOWN&&n!==l.a.ARROW_RIGHT||(t="forward"),n!==l.a.ARROW_UP&&n!==l.a.ARROW_LEFT||(t="backward"),("forward"===t||"backward"===t&&(i||a)&&o&&u)&&(e.preventDefault(),E.keyMove({direction:t,prevPanelId:o,nextPanelId:u}))}),[E,y]),w=Object(r.useCallback)((function(){E.reset()}),[E]),T=Object(r.useCallback)((P={onKeyDown:_,onMouseDown:I,onTouchStart:I,onFocus:E.resizerFocus,onBlur:E.resizerBlur,isHorizontal:y,registration:{register:E.registerResizer,deregister:E.deregisterResizer}},function(e){return i.a.createElement(O,b({},P,e))}),[E,y]),C=Object(r.useCallback)(function(e){return function(t){return i.a.createElement(L,j({},e,t))}}({isHorizontal:y,registration:{register:E.registerPanel,deregister:E.deregisterPanel},onToggleCollapsed:p,onToggleCollapsedInternal:E.togglePanel}),[E,y]);return i.a.createElement(c,{registry:{panels:z.panels,resizers:z.resizers}},i.a.createElement("div",Q({className:m,ref:g,onMouseMove:z.isDragging?R:void 0,onMouseUp:w,onMouseLeave:w,onTouchMove:R,onTouchEnd:w},f),!!z.containerSize&&function(){var e=a(C,T,{togglePanel:E.togglePanel}),t=i.a.isValidElement(e)?e.props.children.map((function(e){return A(e.props.mode)||"custom"})):null;if(t&&(["collapsible","main"].every((function(e){return t.includes(e)}))||t.every((function(e){return"custom"===e}))))return e;throw new Error("Both `collapsible` and `main` mode panels are required.")}()))}}}]);
//# sourceMappingURL=05413f44aafa13418195b6b6ac24595213c44fdf-01d18dd6c44c19a62af2.js.map