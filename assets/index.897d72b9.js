import{s as mt}from"./bookstoresOfResults.5a901f75.js";import{u as ht,q as Pe,D as re,K as Oe,F as vt,O as gt,G as bt,a as yt,b as xt,c as wt,d as Ct,e as kt,S as St}from"./useNavigateToSearch.acc799fa.js";import{u as Et,r as d,_ as N,j as $,B as D,a as m,s as X,b as _e,c as Fe,F as Dt,d as Me,f as Nt,e as $t,N as Tt,R as ne,O as It,g as Pt}from"./index.610db3d7.js";import{i as Re,w as J,_ as Ot,A as _t,a as se,u as Ft,b as pe,C as He,c as V,d as W,o as Be,e as Mt,f as Rt,g as Ht,h as Le,j as Ae,k as ze,K as Bt,l as je,m as Lt,n as We,p as le,P as At,t as zt,q as jt,B as Xe,r as Wt}from"./index.07f23adb.js";const Xt=new RegExp(/^\?/),qt="https://ebook.yuer.tw/v1/searches/",Zt=t=>{const r=Et();if(!t)return{isLoading:!1,error:{message:"\u7F3A\u5C11\u641C\u5C0B\u95DC\u9375\u5B57\u3002"}};const a=!Xt.test(t),{data:i,isLoading:e,error:o}=ht(["search",t],async()=>{const n=await fetch(`${qt}${t}`,{method:a?"GET":"POST"}),s=await n.json();if(a&&Re(s))throw new Error("\u627E\u4E0D\u5230\u8A72\u7D00\u9304\uFF0C\u8ACB\u91CD\u65B0\u641C\u5C0B\u3002");if(!a&&!n.ok)throw new Error("oops\uFF01\u641C\u5C0B\u51FA\u4E86\u9EDE\u554F\u984C\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002");return s});return d.exports.useEffect(()=>{if(i&&a){const n=i.results.map(l=>l.bookstore.id),s=`?${Pe({bookstores:n,q:i.keywords},{arrayFormat:"bracket"})}`;r.setQueryData(["search",s],i)}i&&!a&&r.setQueryData(["search",i.id],i)},[i]),{searchResult:i,isLoading:e,error:o}};function Kt(t){var r,a=function(o){return function(){r=null,t.apply(void 0,Ot(o))}},i=function(){if(r==null){for(var o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];r=J(a(n))}};return i.cancel=function(){return J.cancel(r)},i}function ce(t){return t!=null&&t===t.window}function qe(t,r){var a;if(typeof window=="undefined")return 0;var i=r?"scrollTop":"scrollLeft",e=0;return ce(t)?e=t[r?"pageYOffset":"pageXOffset"]:t instanceof Document?e=t.documentElement[i]:t&&(e=t[i]),t&&!ce(t)&&typeof e!="number"&&(e=(a=(t.ownerDocument||t).documentElement)===null||a===void 0?void 0:a[i]),e}function Ut(t,r,a,i){var e=a-r;return t/=i/2,t<1?e/2*t*t*t+r:e/2*((t-=2)*t*t+2)+r}function Yt(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.getContainer,i=a===void 0?function(){return window}:a,e=r.callback,o=r.duration,n=o===void 0?450:o,s=i(),l=qe(s,!0),c=Date.now(),f=function u(){var h=Date.now(),p=h-c,v=Ut(p>n?n:p,l,t,n);ce(s)?s.scrollTo(window.pageXOffset,v):s instanceof HTMLDocument||s.constructor.name==="HTMLDocument"?s.documentElement.scrollTop=v:s.scrollTop=v,p<n?J(u):typeof e=="function"&&e()};J(f)}var Gt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"},Qt=Gt,Ze=function(r,a){return d.exports.createElement(_t,se(se({},r),{},{ref:a,icon:Qt}))};Ze.displayName="VerticalAlignTopOutlined";var Jt=d.exports.forwardRef(Ze),Ke=function(r){var a=Ft(!1,{value:r.visible}),i=pe(a,2),e=i[0],o=i[1],n=d.exports.createRef(),s=d.exports.useRef(),l=function(){return n.current&&n.current.ownerDocument?n.current.ownerDocument:window},c=Kt(function(P){var g=r.visibilityHeight,S=qe(P.target,!0);o(S>g)}),f=function(){var g=r.target,S=g||l,T=S();s.current=Mt(T,"scroll",function(C){c(C)}),c({target:T})};d.exports.useEffect(function(){return f(),function(){s.current&&s.current.remove(),c.cancel()}},[r.target]);var u=function(g){var S=r.onClick,T=r.target,C=r.duration,M=C===void 0?450:C;Yt(0,{getContainer:T||l,duration:M}),typeof S=="function"&&S(g)},h=function(g){var S=g.prefixCls,T=g.rootPrefixCls,C=r.children,M=d.exports.createElement("div",{className:"".concat(S,"-content")},d.exports.createElement("div",{className:"".concat(S,"-icon")},d.exports.createElement(Jt,null)));return d.exports.createElement(Rt,{visible:e,motionName:"".concat(T,"-fade")},function(A){var K=A.className;return Ht(C||M,function(O){var x=O.className;return{className:V(K,x)}})})},p=d.exports.useContext(He),v=p.getPrefixCls,y=p.direction,b=r.prefixCls,k=r.className,I=k===void 0?"":k,w=v("back-top",b),B=v(),q=V(w,W({},"".concat(w,"-rtl"),y==="rtl"),I),Z=Be(r,["prefixCls","className","children","visibilityHeight","target","visible"]);return d.exports.createElement("div",N({},Z,{className:q,onClick:u,ref:n}),h({prefixCls:w,rootPrefixCls:B}))};Ke.defaultProps={visibilityHeight:400};var Vt=d.exports.memo(Ke);function er(t){return Array.isArray(t)?t:[t]}var Ue={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend"},Ye=Object.keys(Ue).filter(function(t){if(typeof document=="undefined")return!1;var r=document.getElementsByTagName("html")[0];return t in(r?r.style:{})})[0],xe=Ue[Ye];function we(t,r,a,i){t.addEventListener?t.addEventListener(r,a,i):t.attachEvent&&t.attachEvent("on".concat(r),a)}function Ce(t,r,a,i){t.removeEventListener?t.removeEventListener(r,a,i):t.attachEvent&&t.detachEvent("on".concat(r),a)}function tr(t,r){var a=typeof t=="function"?t(r):t;return Array.isArray(a)?a.length===2?a:[a[0],a[1]]:[a]}var ke=function(r){return!isNaN(parseFloat(r))&&isFinite(r)},oe=!(typeof window!="undefined"&&window.document&&window.document.createElement),rr=function t(r,a,i,e){if(!a||a===document||a instanceof Document)return!1;if(a===r.parentNode)return!0;var o=Math.max(Math.abs(i),Math.abs(e))===Math.abs(e),n=Math.max(Math.abs(i),Math.abs(e))===Math.abs(i),s=a.scrollHeight-a.clientHeight,l=a.scrollWidth-a.clientWidth,c=document.defaultView.getComputedStyle(a),f=c.overflowY==="auto"||c.overflowY==="scroll",u=c.overflowX==="auto"||c.overflowX==="scroll",h=s&&f,p=l&&u;return o&&(!h||h&&(a.scrollTop>=s&&e<0||a.scrollTop<=0&&e>0))||n&&(!p||p&&(a.scrollLeft>=l&&i<0||a.scrollLeft<=0&&i>0))?t(r,a.parentNode,i,e):!1},U={},Se=function(t){Le(a,t);var r=Ae(a);function a(i){var e;return ze(this,a),e=r.call(this,i),e.domFocus=function(){e.dom&&e.dom.focus()},e.removeStartHandler=function(o){o.touches.length>1||(e.startPos={x:o.touches[0].clientX,y:o.touches[0].clientY})},e.removeMoveHandler=function(o){if(!(o.changedTouches.length>1)){var n=o.currentTarget,s=o.changedTouches[0].clientX-e.startPos.x,l=o.changedTouches[0].clientY-e.startPos.y;(n===e.maskDom||n===e.handlerDom||n===e.contentDom&&rr(n,o.target,s,l))&&o.cancelable&&o.preventDefault()}},e.transitionEnd=function(o){var n=o.target;Ce(n,xe,e.transitionEnd),n.style.transition=""},e.onKeyDown=function(o){if(o.keyCode===Bt.ESC){var n=e.props.onClose;o.stopPropagation(),n&&n(o)}},e.onWrapperTransitionEnd=function(o){var n=e.props,s=n.open,l=n.afterVisibleChange;o.target===e.contentWrapper&&o.propertyName.match(/transform$/)&&(e.dom.style.transition="",!s&&e.getCurrentDrawerSome()&&(document.body.style.overflowX="",e.maskDom&&(e.maskDom.style.left="",e.maskDom.style.width="")),l&&l(!!s))},e.openLevelTransition=function(){var o=e.props,n=o.open,s=o.width,l=o.height,c=e.getHorizontalBoolAndPlacementName(),f=c.isHorizontal,u=c.placementName,h=e.contentDom?e.contentDom.getBoundingClientRect()[f?"width":"height"]:0,p=(f?s:l)||h;e.setLevelAndScrolling(n,u,p)},e.setLevelTransform=function(o,n,s,l){var c=e.props,f=c.placement,u=c.levelMove,h=c.duration,p=c.ease,v=c.showMask;e.levelDom.forEach(function(y){y.style.transition="transform ".concat(h," ").concat(p),we(y,xe,e.transitionEnd);var b=o?s:0;if(u){var k=tr(u,{target:y,open:o});b=o?k[0]:k[1]||0}var I=typeof b=="number"?"".concat(b,"px"):b,w=f==="left"||f==="top"?I:"-".concat(I);w=v&&f==="right"&&l?"calc(".concat(w," + ").concat(l,"px)"):w,y.style.transform=b?"".concat(n,"(").concat(w,")"):""})},e.setLevelAndScrolling=function(o,n,s){var l=e.props.onChange;if(!oe){var c=document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth?je(!0):0;e.setLevelTransform(o,n,s,c),e.toggleScrollingToDrawerAndBody(c)}l&&l(o)},e.toggleScrollingToDrawerAndBody=function(o){var n=e.props,s=n.getContainer,l=n.showMask,c=n.open,f=s&&s();if(f&&f.parentNode===document.body&&l){var u=["touchstart"],h=[document.body,e.maskDom,e.handlerDom,e.contentDom];c&&document.body.style.overflow!=="hidden"?(o&&e.addScrollingEffect(o),document.body.style.touchAction="none",h.forEach(function(p,v){!p||we(p,u[v]||"touchmove",v?e.removeMoveHandler:e.removeStartHandler,e.passive)})):e.getCurrentDrawerSome()&&(document.body.style.touchAction="",o&&e.remScrollingEffect(o),h.forEach(function(p,v){!p||Ce(p,u[v]||"touchmove",v?e.removeMoveHandler:e.removeStartHandler,e.passive)}))}},e.addScrollingEffect=function(o){var n=e.props,s=n.placement,l=n.duration,c=n.ease,f="width ".concat(l," ").concat(c),u="transform ".concat(l," ").concat(c);switch(e.dom.style.transition="none",s){case"right":e.dom.style.transform="translateX(-".concat(o,"px)");break;case"top":case"bottom":e.dom.style.width="calc(100% - ".concat(o,"px)"),e.dom.style.transform="translateZ(0)";break}clearTimeout(e.timeout),e.timeout=setTimeout(function(){e.dom&&(e.dom.style.transition="".concat(u,",").concat(f),e.dom.style.width="",e.dom.style.transform="")})},e.remScrollingEffect=function(o){var n=e.props,s=n.placement,l=n.duration,c=n.ease;Ye&&(document.body.style.overflowX="hidden"),e.dom.style.transition="none";var f,u="width ".concat(l," ").concat(c),h="transform ".concat(l," ").concat(c);switch(s){case"left":{e.dom.style.width="100%",u="width 0s ".concat(c," ").concat(l);break}case"right":{e.dom.style.transform="translateX(".concat(o,"px)"),e.dom.style.width="100%",u="width 0s ".concat(c," ").concat(l),e.maskDom&&(e.maskDom.style.left="-".concat(o,"px"),e.maskDom.style.width="calc(100% + ".concat(o,"px)"));break}case"top":case"bottom":{e.dom.style.width="calc(100% + ".concat(o,"px)"),e.dom.style.height="100%",e.dom.style.transform="translateZ(0)",f="height 0s ".concat(c," ").concat(l);break}}clearTimeout(e.timeout),e.timeout=setTimeout(function(){e.dom&&(e.dom.style.transition="".concat(h,",").concat(f?"".concat(f,","):"").concat(u),e.dom.style.transform="",e.dom.style.width="",e.dom.style.height="")})},e.getCurrentDrawerSome=function(){return!Object.keys(U).some(function(o){return U[o]})},e.getLevelDom=function(o){var n=o.level,s=o.getContainer;if(!oe){var l=s&&s(),c=l?l.parentNode:null;if(e.levelDom=[],n==="all"){var f=c?Array.prototype.slice.call(c.children):[];f.forEach(function(u){u.nodeName!=="SCRIPT"&&u.nodeName!=="STYLE"&&u.nodeName!=="LINK"&&u!==l&&e.levelDom.push(u)})}else n&&er(n).forEach(function(u){document.querySelectorAll(u).forEach(function(h){e.levelDom.push(h)})})}},e.getHorizontalBoolAndPlacementName=function(){var o=e.props.placement,n=o==="left"||o==="right",s="translate".concat(n?"X":"Y");return{isHorizontal:n,placementName:s}},e.state={_self:Lt(e)},e}return We(a,[{key:"componentDidMount",value:function(){var e=this;if(!oe){var o=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){return o=!0,null}}))}catch{}this.passive=o?{passive:!1}:!1}var n=this.props,s=n.open,l=n.getContainer,c=n.showMask,f=l&&l();if(this.drawerId="drawer_id_".concat(Number((Date.now()+Math.random()).toString().replace(".",Math.round(Math.random()*9).toString())).toString(16)),this.getLevelDom(this.props),s&&(f&&f.parentNode===document.body&&(U[this.drawerId]=s),this.openLevelTransition(),this.forceUpdate(function(){e.domFocus()}),c)){var u;(u=this.props.scrollLocker)===null||u===void 0||u.lock()}}},{key:"componentDidUpdate",value:function(e){var o=this.props,n=o.open,s=o.getContainer,l=o.scrollLocker,c=o.showMask,f=s&&s();n!==e.open&&(f&&f.parentNode===document.body&&(U[this.drawerId]=!!n),this.openLevelTransition(),n?(this.domFocus(),c&&(l==null||l.lock())):l==null||l.unLock())}},{key:"componentWillUnmount",value:function(){var e=this.props,o=e.open,n=e.scrollLocker;delete U[this.drawerId],o&&(this.setLevelTransform(!1),document.body.style.touchAction=""),n==null||n.unLock()}},{key:"render",value:function(){var e,o=this,n=this.props,s=n.className,l=n.children,c=n.style,f=n.width,u=n.height;n.defaultOpen;var h=n.open,p=n.prefixCls,v=n.placement;n.level,n.levelMove,n.ease,n.duration,n.getContainer;var y=n.handler;n.onChange,n.afterVisibleChange;var b=n.showMask,k=n.maskClosable,I=n.maskStyle,w=n.onClose,B=n.onHandleClick,q=n.keyboard;n.getOpenCount,n.scrollLocker;var Z=n.contentWrapperStyle,P=le(n,["className","children","style","width","height","defaultOpen","open","prefixCls","placement","level","levelMove","ease","duration","getContainer","handler","onChange","afterVisibleChange","showMask","maskClosable","maskStyle","onClose","onHandleClick","keyboard","getOpenCount","scrollLocker","contentWrapperStyle"]),g=this.dom?h:!1,S=V(p,(e={},W(e,"".concat(p,"-").concat(v),!0),W(e,"".concat(p,"-open"),g),W(e,s||"",!!s),W(e,"no-mask",!b),e)),T=this.getHorizontalBoolAndPlacementName(),C=T.placementName,M=v==="left"||v==="top"?"-100%":"100%",A=g?"":"".concat(C,"(").concat(M,")"),K=y&&d.exports.cloneElement(y,{onClick:function(x){y.props.onClick&&y.props.onClick(),B&&B(x)},ref:function(x){o.handlerDom=x}});return d.exports.createElement("div",N({},Be(P,["switchScrollingEffect"]),{tabIndex:-1,className:S,style:c,ref:function(x){o.dom=x},onKeyDown:g&&q?this.onKeyDown:void 0,onTransitionEnd:this.onWrapperTransitionEnd}),b&&d.exports.createElement("div",{className:"".concat(p,"-mask"),onClick:k?w:void 0,style:I,ref:function(x){o.maskDom=x}}),d.exports.createElement("div",{className:"".concat(p,"-content-wrapper"),style:se({transform:A,msTransform:A,width:ke(f)?"".concat(f,"px"):f,height:ke(u)?"".concat(u,"px"):u},Z),ref:function(x){o.contentWrapper=x}},d.exports.createElement("div",{className:"".concat(p,"-content"),ref:function(x){o.contentDom=x},onTouchStart:g&&b?this.removeStartHandler:void 0,onTouchMove:g&&b?this.removeMoveHandler:void 0},l),K))}}],[{key:"getDerivedStateFromProps",value:function(e,o){var n=o.prevProps,s=o._self,l={prevProps:e};if(n!==void 0){var c=e.placement,f=e.level;c!==n.placement&&(s.contentDom=null),f!==n.level&&s.getLevelDom(e)}return l}}]),a}(d.exports.Component),Ge=function(t){Le(a,t);var r=Ae(a);function a(i){var e;ze(this,a),e=r.call(this,i),e.onHandleClick=function(n){var s=e.props,l=s.onHandleClick,c=s.open;if(l&&l(n),typeof c=="undefined"){var f=e.state.open;e.setState({open:!f})}},e.onClose=function(n){var s=e.props,l=s.onClose,c=s.open;l&&l(n),typeof c=="undefined"&&e.setState({open:!1})};var o=typeof i.open!="undefined"?i.open:!!i.defaultOpen;return e.state={open:o},"onMaskClick"in i&&console.warn("`onMaskClick` are removed, please use `onClose` instead."),e}return We(a,[{key:"render",value:function(){var e=this,o=this.props;o.defaultOpen;var n=o.getContainer,s=o.wrapperClassName,l=o.forceRender,c=o.handler,f=le(o,["defaultOpen","getContainer","wrapperClassName","forceRender","handler"]),u=this.state.open;if(!n)return d.exports.createElement("div",{className:s,ref:function(v){e.dom=v}},d.exports.createElement(Se,N({},f,{open:u,handler:c,getContainer:function(){return e.dom},onClose:this.onClose,onHandleClick:this.onHandleClick})));var h=!!c||l;return d.exports.createElement(At,{visible:u,forceRender:h,getContainer:n,wrapperClassName:s},function(p){var v=p.visible,y=p.afterClose,b=le(p,["visible","afterClose"]);return d.exports.createElement(Se,N({},f,b,{open:v!==void 0?v:u,afterVisibleChange:y!==void 0?y:f.afterVisibleChange,handler:c,onClose:e.onClose,onHandleClick:e.onHandleClick}))})}}],[{key:"getDerivedStateFromProps",value:function(e,o){var n=o.prevProps,s={prevProps:e};return typeof n!="undefined"&&e.open!==n.open&&(s.open=e.open),s}}]),a}(d.exports.Component);Ge.defaultProps={prefixCls:"drawer",placement:"left",getContainer:"body",defaultOpen:!1,level:"all",duration:".3s",ease:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",onChange:function(){},afterVisibleChange:function(){},handler:d.exports.createElement("div",{className:"drawer-handle"},d.exports.createElement("i",{className:"drawer-handle-icon"})),showMask:!0,maskClosable:!0,maskStyle:{},wrapperClassName:"",className:"",keyboard:!0,forceRender:!1};function nr(){var t=d.exports.useReducer(function(i){return i+1},0),r=pe(t,2),a=r[1];return a}var or=globalThis&&globalThis.__rest||function(t,r){var a={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&r.indexOf(i)<0&&(a[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,i=Object.getOwnPropertySymbols(t);e<i.length;e++)r.indexOf(i[e])<0&&Object.prototype.propertyIsEnumerable.call(t,i[e])&&(a[i[e]]=t[i[e]]);return a},Ee=d.exports.createContext(null);zt("top","right","bottom","left");var De={distance:180},Qe=d.exports.forwardRef(function(t,r){var a=t.width,i=a===void 0?256:a,e=t.height,o=e===void 0?256:e,n=t.closable,s=n===void 0?!0:n,l=t.placement,c=l===void 0?"right":l,f=t.maskClosable,u=f===void 0?!0:f,h=t.mask,p=h===void 0?!0:h,v=t.level,y=v===void 0?null:v,b=t.keyboard,k=b===void 0?!0:b,I=t.push,w=I===void 0?De:I,B=t.closeIcon,q=B===void 0?d.exports.createElement(jt,null):B,Z=t.bodyStyle,P=t.drawerStyle,g=t.prefixCls,S=t.className,T=t.direction,C=t.visible,M=t.children,A=t.zIndex,K=t.destroyOnClose,O=t.style,x=t.title,Ve=t.headerStyle,me=t.onClose,he=t.footer,et=t.footerStyle,tt=or(t,["width","height","closable","placement","maskClosable","mask","level","keyboard","push","closeIcon","bodyStyle","drawerStyle","prefixCls","className","direction","visible","children","zIndex","destroyOnClose","style","title","headerStyle","onClose","footer","footerStyle"]),rt=nr(),nt=d.exports.useState(!1),ve=pe(nt,2),ot=ve[0],ge=ve[1],L=d.exports.useContext(Ee),ee=d.exports.useRef(!1);d.exports.useEffect(function(){return C&&L&&L.push(),function(){L&&L.pull()}},[]),d.exports.useEffect(function(){L&&(C?L.push():L.pull())},[C]);var te=d.exports.useMemo(function(){return{push:function(){w&&ge(!0)},pull:function(){w&&ge(!1)}}},[w]);d.exports.useImperativeHandle(r,function(){return te},[te]);var be=K&&!C,at=function(){!be||C||(ee.current=!0,rt())},ye=function(){if(!C&&!p)return{};var F={};return c==="left"||c==="right"?F.width=i:F.height=o,F},it=function(){var F=function(z){var R;if(typeof w=="boolean"?R=w?De.distance:0:R=w.distance,R=parseFloat(String(R||0)),z==="left"||z==="right")return"translateX(".concat(z==="left"?R:-R,"px)");if(z==="top"||z==="bottom")return"translateY(".concat(z==="top"?R:-R,"px)")},pt=p?{}:ye();return N(N({zIndex:A,transform:ot?F(c):void 0},pt),O)};function st(){return s&&d.exports.createElement("button",{type:"button",onClick:me,"aria-label":"Close",className:"".concat(g,"-close"),style:{"--scroll-bar":"".concat(je(),"px")}},q)}function lt(){if(!x&&!s)return null;var _=x?"".concat(g,"-header"):"".concat(g,"-header-no-title");return d.exports.createElement("div",{className:_,style:Ve},x&&d.exports.createElement("div",{className:"".concat(g,"-title")},x),s&&st())}function ct(){if(!he)return null;var _="".concat(g,"-footer");return d.exports.createElement("div",{className:_,style:et},he)}var ft=function(){if(ee.current&&!C)return null;ee.current=!1;var F={};return be&&(F.opacity=0,F.transition="opacity .3s"),d.exports.createElement("div",{className:"".concat(g,"-wrapper-body"),style:N(N({},F),P),onTransitionEnd:at},lt(),d.exports.createElement("div",{className:"".concat(g,"-body"),style:Z},M),ct())},dt=V(W({"no-mask":!p},"".concat(g,"-rtl"),T==="rtl"),S),ut=p?ye():{};return d.exports.createElement(Ee.Provider,{value:te},d.exports.createElement(Ge,N({handler:!1},N({placement:c,prefixCls:g,maskClosable:u,level:y,keyboard:k,children:M,onClose:me},tt),ut,{open:C,showMask:p,style:it(),className:dt}),ft()))});Qe.displayName="Drawer";var Je=d.exports.forwardRef(function(t,r){var a=t.prefixCls,i=t.getContainer,e=d.exports.useContext(He),o=e.getPopupContainer,n=e.getPrefixCls,s=e.direction,l=n("drawer",a),c=i===void 0&&o?function(){return o(document.body)}:i;return d.exports.createElement(Qe,N({},t,{ref:r,prefixCls:l,getContainer:c,direction:s}))});Je.displayName="DrawerWrapper";var ar=Je,ir="/assets/ebook-logo.6915cbf2.svg";const sr=({onConfirm:t,...r})=>$(ar,{placement:"left",width:"26rem",title:$(D,{display:"flex",justifyContent:"space-between",alignItems:"center",children:["\u641C\u5C0B",m(Xe,{type:"primary",onClick:t,children:"\u78BA\u8A8D"})]}),closable:!1,...r,children:[m(re,{orientation:"center",plain:!0,children:"\u300C\u66F8\u540D\u95DC\u9375\u5B57\u300D\u6216\u300CISBN\u300D"}),m(Oe,{}),m(re,{orientation:"center",plain:!0,children:"\u7BE9\u9078\u66F8\u5E97"}),m(vt,{}),m(re,{orientation:"center",plain:!0,children:"\u7D50\u679C\u6392\u5E8F"}),m(gt,{})]}),lr=X.header`
  padding: 1rem;
  display: flex;
  background-color: var(--primary-color);
  color: var(--gray-1);
  z-index: 100;
  box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.3);
`,cr=X.img`
  height: 2.5rem;
  margin: 0 0.5rem;
  cursor: pointer;
`,fr=X.span`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  display: none;

  @media (min-width: ${_e.md}) {
    display: inline;
  }
`,dr=X(Xe)`
  color: var(--gray-1) !important;
`,ur=({onConfirm:t})=>{const r=Fe(),[a,i]=d.exports.useState(!1),e=()=>{i(!1),t&&t()};return $(Dt,{children:[$(lr,{children:[$(D,{flex:"2",display:"flex",alignItems:"center",flexDirection:["row-reverse",null,null,"row"],children:[$(D,{flex:"1",display:"flex",alignItems:"center",justifyContent:["center",null,null,"flex-start"],children:[m(cr,{src:ir,onClick:()=>r("/")}),m(fr,{children:"\u53F0\u7063\u96FB\u5B50\u66F8\u641C\u5C0B"})]}),m(D,{flex:"1",display:["flex",null,null,"none"],alignItems:"center",justifyContent:"flex-start",children:m(dr,{type:"text",onClick:()=>i(!0),children:m(Me,{icon:Nt,style:{fontSize:"1.5rem"}})})})]}),m(D,{flex:"1",display:"flex",justifyContent:"flex-end",children:m(bt,{textcolor:"white"})})]}),m(sr,{visible:a,onConfirm:e,onClose:e})]})};function pr(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function G(t,r){return G=Object.setPrototypeOf||function(i,e){return i.__proto__=e,i},G(t,r)}function mr(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,G(t,r)}function fe(t){return fe=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},fe(t)}function hr(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function vr(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Q(t,r,a){return vr()?Q=Reflect.construct:Q=function(e,o,n){var s=[null];s.push.apply(s,o);var l=Function.bind.apply(e,s),c=new l;return n&&G(c,n.prototype),c},Q.apply(null,arguments)}function de(t){var r=typeof Map=="function"?new Map:void 0;return de=function(i){if(i===null||!hr(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(typeof r!="undefined"){if(r.has(i))return r.get(i);r.set(i,e)}function e(){return Q(i,arguments,fe(this).constructor)}return e.prototype=Object.create(i.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),G(e,i)},de(t)}var H=function(t){mr(r,t);function r(a){var i;return i=t.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+a+" for more information.")||this,pr(i)}return r}(de(Error)),gr=/--[\S]*/g;function br(t,r){if(!t||!t.match(gr))throw new H(73);var a;if(typeof document!="undefined"&&document.documentElement!==null&&(a=getComputedStyle(document.documentElement).getPropertyValue(t)),a)return a.trim();if(r)return r;throw new H(74)}function ae(t){return Math.round(t*255)}function yr(t,r,a){return ae(t)+","+ae(r)+","+ae(a)}function Ne(t,r,a,i){if(i===void 0&&(i=yr),r===0)return i(a,a,a);var e=(t%360+360)%360/60,o=(1-Math.abs(2*a-1))*r,n=o*(1-Math.abs(e%2-1)),s=0,l=0,c=0;e>=0&&e<1?(s=o,l=n):e>=1&&e<2?(s=n,l=o):e>=2&&e<3?(l=o,c=n):e>=3&&e<4?(l=n,c=o):e>=4&&e<5?(s=n,c=o):e>=5&&e<6&&(s=o,c=n);var f=a-o/2,u=s+f,h=l+f,p=c+f;return i(u,h,p)}var $e={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function xr(t){if(typeof t!="string")return t;var r=t.toLowerCase();return $e[r]?"#"+$e[r]:t}var wr=/^#[a-fA-F0-9]{6}$/,Cr=/^#[a-fA-F0-9]{8}$/,kr=/^#[a-fA-F0-9]{3}$/,Sr=/^#[a-fA-F0-9]{4}$/,ie=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,Er=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i,Dr=/^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,Nr=/^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;function $r(t){if(typeof t!="string")throw new H(3);var r=xr(t);if(r.match(wr))return{red:parseInt(""+r[1]+r[2],16),green:parseInt(""+r[3]+r[4],16),blue:parseInt(""+r[5]+r[6],16)};if(r.match(Cr)){var a=parseFloat((parseInt(""+r[7]+r[8],16)/255).toFixed(2));return{red:parseInt(""+r[1]+r[2],16),green:parseInt(""+r[3]+r[4],16),blue:parseInt(""+r[5]+r[6],16),alpha:a}}if(r.match(kr))return{red:parseInt(""+r[1]+r[1],16),green:parseInt(""+r[2]+r[2],16),blue:parseInt(""+r[3]+r[3],16)};if(r.match(Sr)){var i=parseFloat((parseInt(""+r[4]+r[4],16)/255).toFixed(2));return{red:parseInt(""+r[1]+r[1],16),green:parseInt(""+r[2]+r[2],16),blue:parseInt(""+r[3]+r[3],16),alpha:i}}var e=ie.exec(r);if(e)return{red:parseInt(""+e[1],10),green:parseInt(""+e[2],10),blue:parseInt(""+e[3],10)};var o=Er.exec(r.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])};var n=Dr.exec(r);if(n){var s=parseInt(""+n[1],10),l=parseInt(""+n[2],10)/100,c=parseInt(""+n[3],10)/100,f="rgb("+Ne(s,l,c)+")",u=ie.exec(f);if(!u)throw new H(4,r,f);return{red:parseInt(""+u[1],10),green:parseInt(""+u[2],10),blue:parseInt(""+u[3],10)}}var h=Nr.exec(r.substring(0,50));if(h){var p=parseInt(""+h[1],10),v=parseInt(""+h[2],10)/100,y=parseInt(""+h[3],10)/100,b="rgb("+Ne(p,v,y)+")",k=ie.exec(b);if(!k)throw new H(4,r,b);return{red:parseInt(""+k[1],10),green:parseInt(""+k[2],10),blue:parseInt(""+k[3],10),alpha:parseFloat(""+h[4])}}throw new H(5)}var Te=function(r){return r.length===7&&r[1]===r[2]&&r[3]===r[4]&&r[5]===r[6]?"#"+r[1]+r[3]+r[5]:r};function j(t){var r=t.toString(16);return r.length===1?"0"+r:r}function Ie(t,r,a){if(typeof t=="number"&&typeof r=="number"&&typeof a=="number")return Te("#"+j(t)+j(r)+j(a));if(typeof t=="object"&&r===void 0&&a===void 0)return Te("#"+j(t.red)+j(t.green)+j(t.blue));throw new H(6)}function Tr(t,r,a,i){if(typeof t=="string"&&typeof r=="number"){var e=$r(t);return"rgba("+e.red+","+e.green+","+e.blue+","+r+")"}else{if(typeof t=="number"&&typeof r=="number"&&typeof a=="number"&&typeof i=="number")return i>=1?Ie(t,r,a):"rgba("+t+","+r+","+a+","+i+")";if(typeof t=="object"&&r===void 0&&a===void 0&&i===void 0)return t.alpha>=1?Ie(t.red,t.green,t.blue):"rgba("+t.red+","+t.green+","+t.blue+","+t.alpha+")"}throw new H(7)}const E=5,ue=2500,Y=ue/6,Ir=X.div`
  position: relative;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);

  .books_list {
    margin: 0 auto;
    width: 300px;
    padding: 0;
  }

  .book_item {
    position: absolute;
    top: -120px;
    box-sizing: border-box;
    list-style: none;
    width: 40px;
    height: 120px;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0);
    border: ${E}px solid var(--primary-color);
    transform-origin: bottom left;
    transform: translateX(300px);
    animation: travel ${ue}ms linear infinite;

    &.first {
      top: -140px;
      height: 140px;

      &:before,
      &:after {
        content: '';
        position: absolute;
        top: 10px;
        left: 0;
        width: 100%;
        height: ${E}px;
        background-color: var(--primary-color);
      }

      &:after {
        top: initial;
        bottom: 10px;
      }
    }

    &.second,
    &.fifth {
      &:before,
      &:after {
        box-sizing: border-box;
        content: '';
        position: absolute;
        top: 10px;
        left: 0;
        width: 100%;
        height: ${E*3.5}px;
        border-top: ${E}px solid var(--primary-color);
        border-bottom: ${E}px solid var(--primary-color);
      }

      &:after {
        top: initial;
        bottom: 10px;
      }
    }

    &.third {
      &:before,
      &:after {
        box-sizing: border-box;
        content: '';
        position: absolute;
        top: 10px;
        left: 9px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: ${E}px solid var(--primary-color);
      }

      &:after {
        top: initial;
        bottom: 10px;
      }
    }

    &.fourth {
      top: -130px;
      height: 130px;

      &:before {
        box-sizing: border-box;
        content: '';
        position: absolute;
        top: 46px;
        left: 0;
        width: 100%;
        height: ${E*3.5}px;
        border-top: ${E}px solid var(--primary-color);
        border-bottom: ${E}px solid var(--primary-color);
      }
    }

    &.fifth {
      top: -100px;
      height: 100px;
    }

    &.sixth {
      top: -140px;
      height: 140px;

      &:before {
        box-sizing: border-box;
        content: '';
        position: absolute;
        bottom: 31px;
        left: 0px;
        width: 100%;
        height: ${E}px;
        background-color: var(--primary-color);
      }

      &:after {
        box-sizing: border-box;
        content: '';
        position: absolute;
        bottom: 10px;
        left: 9px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: ${E}px solid var(--primary-color);
      }
    }

    &:nth-child(2) {
      animation-delay: ${Y*1}ms;
    }

    &:nth-child(3) {
      animation-delay: ${Y*2}ms;
    }

    &:nth-child(4) {
      animation-delay: ${Y*3}ms;
    }

    &:nth-child(5) {
      animation-delay: ${Y*4}ms;
    }

    &:nth-child(6) {
      animation-delay: ${Y*5}ms;
    }
  }

  .shelf {
    width: 300px;
    height: ${E}px;
    margin: 0 auto;
    background-color: var(--primary-color);
    position: relative;

    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0);
      background-image: radial-gradient(${Tr(br("--primary-color"),.5)} 30%, transparent 0);
      background-size: 10px 10px;
      background-position: 0 -2.5px;
      top: 200%;
      left: 5%;
      animation: move ${ue/10}ms linear infinite;
    }

    &:after {
      top: 400%;
      left: 7.5%;
    }
  }

  @keyframes move {
    from {
      background-position-x: 0;
    }
    to {
      background-position-x: 10px;
    }
  }

  @keyframes travel {
    0% {
      opacity: 0;
      transform: translateX(300px) rotateZ(0deg) scaleY(1);
    }
    6.5% {
      transform: translateX(279.5px) rotateZ(0deg) scaleY(1.1);
    }
    8.8% {
      transform: translateX(273.6px) rotateZ(0deg) scaleY(1);
    }
    10% {
      opacity: 1;
      transform: translateX(270px) rotateZ(0deg);
    }
    17.6% {
      transform: translateX(247.2px) rotateZ(-30deg);
    }
    45% {
      transform: translateX(165px) rotateZ(-30deg);
    }
    49.5% {
      transform: translateX(151.5px) rotateZ(-45deg);
    }
    61.5% {
      transform: translateX(115.5px) rotateZ(-45deg);
    }
    67% {
      transform: translateX(99px) rotateZ(-60deg);
    }
    76% {
      transform: translateX(72px) rotateZ(-60deg);
    }
    83.5% {
      opacity: 1;
      transform: translateX(49.5px) rotateZ(-90deg);
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 0;
      transform: translateX(0px) rotateZ(-90deg);
    }
  }
`,Pr=()=>m(D,{height:"200px",width:"375px",position:"relative",children:$(Ir,{children:[$("ul",{className:"books_list",children:[m("li",{className:"book_item first"}),m("li",{className:"book_item second"}),m("li",{className:"book_item third"}),m("li",{className:"book_item fourth"}),m("li",{className:"book_item fifth"}),m("li",{className:"book_item sixth"})]}),m("div",{className:"shelf"})]})}),Or=X.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,_r=({urlParams:t})=>{const r=Fe(),{searchResult:a,isLoading:i,error:e}=Zt(t),o=ne(mt),n=ne(wt),s=ne(Ct),l=kt();return d.exports.useEffect(()=>{e&&Wt.warning(e.message)},[e]),d.exports.useEffect(()=>{if(a&&!Re(a)){const c=a.results.map(f=>f.bookstore.id);s(c),n(a.keywords),r(`/searches/${a.id}`),o(a.results)}},[a,t]),$(Or,{children:[m(ur,{onConfirm:l}),m(D,{display:["none",null,null,"flex"],justifyContent:"center",mt:"1.5rem",mb:"1rem",children:$(D,{display:"flex",alignItems:"center",maxWidth:_e.xl,width:"100%",px:["1rem",null,null,null,null,"0"],children:[m(Oe,{onSubmit:l}),m(St,{ml:"1.5rem",filterProps:{showConfirm:!0,onConfirm:l}})]})}),m(D,{display:"flex",justifyContent:"center",flex:"1",children:$(D,{width:"100%",children:[i&&m(D,{height:"100%",display:"flex",justifyContent:"center",alignItems:"center",children:m(Pr,{})}),m(D,{display:!i&&a?"block":"none",children:m(It,{})})]})}),m(Vt,{children:m(Me,{icon:Pt,style:{fontSize:"2.5rem",color:"var(--primary-color)",backgroundColor:"var(--gray-1)",borderRadius:"50%"}})})]})},Lr=()=>{const{searchId:t}=$t(),r=d.exports.useMemo(()=>yt(xt(location.search)),[location.search]);return!t&&!r.q?m(Tt,{to:"/"}):m(_r,{urlParams:t||`?${Pe(r,{arrayFormat:"bracket"})}`})};export{Lr as default};
