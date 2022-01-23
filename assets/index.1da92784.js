var wt=Object.defineProperty,Ct=Object.defineProperties;var kt=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var ke=(t,r,o)=>r in t?wt(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,Se=(t,r)=>{for(var o in r||(r={}))we.call(r,o)&&ke(t,o,r[o]);if(Q)for(var o of Q(r))Ce.call(r,o)&&ke(t,o,r[o]);return t},Ee=(t,r)=>Ct(t,kt(r));var Ne=(t,r)=>{var o={};for(var i in t)we.call(t,i)&&r.indexOf(i)<0&&(o[i]=t[i]);if(t!=null&&Q)for(var i of Q(t))r.indexOf(i)<0&&Ce.call(t,i)&&(o[i]=t[i]);return o};import{s as St}from"./bookstoresOfResults.ca6574c5.js";import{q as De,D as ne,K as $e,F as Et,O as Nt,G as Dt,a as $t,b as Tt,c as It,d as Pt,u as Ot,S as Ft}from"./useNavigateToSearch.196bcab6.js";import{t as _t,v as Mt,r as d,_ as D,b as j,w as Te,F as Ie,x as Rt,y as Ht,N as Bt,z as oe,O as At,A as Lt}from"./vendor.fbb11802.js";import{i as Pe,w as J,_ as zt,A as jt,a as ae,u as Wt,b as ie,C as Oe,c as V,d as W,o as Fe,e as Xt,f as qt,g as Zt,h as _e,j as Me,k as Re,K as Kt,l as He,m as Ut,n as Be,p as se,P as Yt,t as Gt,q as Qt,B as Ae,r as Jt}from"./index.6d013260.js";import{j as $,B as E,a as m,b as Le,F as Vt}from"./index.853e367f.js";const er=new RegExp(/^\?/),tr="https://ebook.yuer.tw/v1/searches/",rr=t=>{const r=_t();if(!t)return{isLoading:!1,error:{message:"\u7F3A\u5C11\u641C\u5C0B\u95DC\u9375\u5B57\u3002"}};const o=!er.test(t),{data:i,isLoading:e,error:a}=Mt(["search",t],async()=>{const n=await fetch(`${tr}${t}`,{method:o?"GET":"POST"}),s=await n.json();if(o&&Pe(s))throw new Error("\u627E\u4E0D\u5230\u8A72\u7D00\u9304\uFF0C\u8ACB\u91CD\u65B0\u641C\u5C0B\u3002");if(!o&&!n.ok)throw new Error("oops\uFF01\u641C\u5C0B\u51FA\u4E86\u9EDE\u554F\u984C\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002");return s});return d.exports.useEffect(()=>{if(i&&o){const n=i.results.map(l=>l.bookstore.id),s=`?${De({bookstores:n,q:i.keywords},{arrayFormat:"bracket"})}`;r.setQueryData(["search",s],i)}i&&!o&&r.setQueryData(["search",i.id],i)},[i]),{searchResult:i,isLoading:e,error:a}};function nr(t){var r,o=function(a){return function(){r=null,t.apply(void 0,zt(a))}},i=function(){if(r==null){for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];r=J(o(n))}};return i.cancel=function(){return J.cancel(r)},i}function le(t){return t!=null&&t===t.window}function ze(t,r){var o;if(typeof window=="undefined")return 0;var i=r?"scrollTop":"scrollLeft",e=0;return le(t)?e=t[r?"pageYOffset":"pageXOffset"]:t instanceof Document?e=t.documentElement[i]:t&&(e=t[i]),t&&!le(t)&&typeof e!="number"&&(e=(o=(t.ownerDocument||t).documentElement)===null||o===void 0?void 0:o[i]),e}function or(t,r,o,i){var e=o-r;return t/=i/2,t<1?e/2*t*t*t+r:e/2*((t-=2)*t*t+2)+r}function ar(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.getContainer,i=o===void 0?function(){return window}:o,e=r.callback,a=r.duration,n=a===void 0?450:a,s=i(),l=ze(s,!0),c=Date.now(),f=function u(){var h=Date.now(),p=h-c,v=or(p>n?n:p,l,t,n);le(s)?s.scrollTo(window.pageXOffset,v):s instanceof HTMLDocument||s.constructor.name==="HTMLDocument"?s.documentElement.scrollTop=v:s.scrollTop=v,p<n?J(u):typeof e=="function"&&e()};J(f)}var ir={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"},sr=ir,je=function(r,o){return d.exports.createElement(jt,ae(ae({},r),{},{ref:o,icon:sr}))};je.displayName="VerticalAlignTopOutlined";var lr=d.exports.forwardRef(je),We=function(r){var o=Wt(!1,{value:r.visible}),i=ie(o,2),e=i[0],a=i[1],n=d.exports.createRef(),s=d.exports.useRef(),l=function(){return n.current&&n.current.ownerDocument?n.current.ownerDocument:window},c=nr(function(P){var b=r.visibilityHeight,S=ze(P.target,!0);a(S>b)}),f=function(){var b=r.target,S=b||l,T=S();s.current=Zt(T,"scroll",function(C){c(C)}),c({target:T})};d.exports.useEffect(function(){return f(),function(){s.current&&s.current.remove(),c.cancel()}},[r.target]);var u=function(b){var S=r.onClick,T=r.target,C=r.duration,M=C===void 0?450:C;ar(0,{getContainer:T||l,duration:M}),typeof S=="function"&&S(b)},h=function(b){var S=b.prefixCls,T=b.rootPrefixCls,C=r.children,M=d.exports.createElement("div",{className:"".concat(S,"-content")},d.exports.createElement("div",{className:"".concat(S,"-icon")},d.exports.createElement(lr,null)));return d.exports.createElement(Xt,{visible:e,motionName:"".concat(T,"-fade")},function(L){var K=L.className;return qt(C||M,function(O){var x=O.className;return{className:V(K,x)}})})},p=d.exports.useContext(Oe),v=p.getPrefixCls,y=p.direction,g=r.prefixCls,k=r.className,I=k===void 0?"":k,w=v("back-top",g),B=v(),q=V(w,W({},"".concat(w,"-rtl"),y==="rtl"),I),Z=Fe(r,["prefixCls","className","children","visibilityHeight","target","visible"]);return d.exports.createElement("div",D({},Z,{className:q,onClick:u,ref:n}),h({prefixCls:w,rootPrefixCls:B}))};We.defaultProps={visibilityHeight:400};var cr=d.exports.memo(We);function fr(t){return Array.isArray(t)?t:[t]}var Xe={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend"},qe=Object.keys(Xe).filter(function(t){if(typeof document=="undefined")return!1;var r=document.getElementsByTagName("html")[0];return t in(r?r.style:{})})[0],Ze=Xe[qe];function Ke(t,r,o,i){t.addEventListener?t.addEventListener(r,o,i):t.attachEvent&&t.attachEvent("on".concat(r),o)}function Ue(t,r,o,i){t.removeEventListener?t.removeEventListener(r,o,i):t.attachEvent&&t.detachEvent("on".concat(r),o)}function dr(t,r){var o=typeof t=="function"?t(r):t;return Array.isArray(o)?o.length===2?o:[o[0],o[1]]:[o]}var Ye=function(r){return!isNaN(parseFloat(r))&&isFinite(r)},ce=!(typeof window!="undefined"&&window.document&&window.document.createElement),ur=function t(r,o,i,e){if(!o||o===document||o instanceof Document)return!1;if(o===r.parentNode)return!0;var a=Math.max(Math.abs(i),Math.abs(e))===Math.abs(e),n=Math.max(Math.abs(i),Math.abs(e))===Math.abs(i),s=o.scrollHeight-o.clientHeight,l=o.scrollWidth-o.clientWidth,c=document.defaultView.getComputedStyle(o),f=c.overflowY==="auto"||c.overflowY==="scroll",u=c.overflowX==="auto"||c.overflowX==="scroll",h=s&&f,p=l&&u;return a&&(!h||h&&(o.scrollTop>=s&&e<0||o.scrollTop<=0&&e>0))||n&&(!p||p&&(o.scrollLeft>=l&&i<0||o.scrollLeft<=0&&i>0))?t(r,o.parentNode,i,e):!1},U={},Ge=function(t){_e(o,t);var r=Me(o);function o(i){var e;return Re(this,o),e=r.call(this,i),e.domFocus=function(){e.dom&&e.dom.focus()},e.removeStartHandler=function(a){a.touches.length>1||(e.startPos={x:a.touches[0].clientX,y:a.touches[0].clientY})},e.removeMoveHandler=function(a){if(!(a.changedTouches.length>1)){var n=a.currentTarget,s=a.changedTouches[0].clientX-e.startPos.x,l=a.changedTouches[0].clientY-e.startPos.y;(n===e.maskDom||n===e.handlerDom||n===e.contentDom&&ur(n,a.target,s,l))&&a.cancelable&&a.preventDefault()}},e.transitionEnd=function(a){var n=a.target;Ue(n,Ze,e.transitionEnd),n.style.transition=""},e.onKeyDown=function(a){if(a.keyCode===Kt.ESC){var n=e.props.onClose;a.stopPropagation(),n&&n(a)}},e.onWrapperTransitionEnd=function(a){var n=e.props,s=n.open,l=n.afterVisibleChange;a.target===e.contentWrapper&&a.propertyName.match(/transform$/)&&(e.dom.style.transition="",!s&&e.getCurrentDrawerSome()&&(document.body.style.overflowX="",e.maskDom&&(e.maskDom.style.left="",e.maskDom.style.width="")),l&&l(!!s))},e.openLevelTransition=function(){var a=e.props,n=a.open,s=a.width,l=a.height,c=e.getHorizontalBoolAndPlacementName(),f=c.isHorizontal,u=c.placementName,h=e.contentDom?e.contentDom.getBoundingClientRect()[f?"width":"height"]:0,p=(f?s:l)||h;e.setLevelAndScrolling(n,u,p)},e.setLevelTransform=function(a,n,s,l){var c=e.props,f=c.placement,u=c.levelMove,h=c.duration,p=c.ease,v=c.showMask;e.levelDom.forEach(function(y){y.style.transition="transform ".concat(h," ").concat(p),Ke(y,Ze,e.transitionEnd);var g=a?s:0;if(u){var k=dr(u,{target:y,open:a});g=a?k[0]:k[1]||0}var I=typeof g=="number"?"".concat(g,"px"):g,w=f==="left"||f==="top"?I:"-".concat(I);w=v&&f==="right"&&l?"calc(".concat(w," + ").concat(l,"px)"):w,y.style.transform=g?"".concat(n,"(").concat(w,")"):""})},e.setLevelAndScrolling=function(a,n,s){var l=e.props.onChange;if(!ce){var c=document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth?He(!0):0;e.setLevelTransform(a,n,s,c),e.toggleScrollingToDrawerAndBody(c)}l&&l(a)},e.toggleScrollingToDrawerAndBody=function(a){var n=e.props,s=n.getContainer,l=n.showMask,c=n.open,f=s&&s();if(f&&f.parentNode===document.body&&l){var u=["touchstart"],h=[document.body,e.maskDom,e.handlerDom,e.contentDom];c&&document.body.style.overflow!=="hidden"?(a&&e.addScrollingEffect(a),document.body.style.touchAction="none",h.forEach(function(p,v){!p||Ke(p,u[v]||"touchmove",v?e.removeMoveHandler:e.removeStartHandler,e.passive)})):e.getCurrentDrawerSome()&&(document.body.style.touchAction="",a&&e.remScrollingEffect(a),h.forEach(function(p,v){!p||Ue(p,u[v]||"touchmove",v?e.removeMoveHandler:e.removeStartHandler,e.passive)}))}},e.addScrollingEffect=function(a){var n=e.props,s=n.placement,l=n.duration,c=n.ease,f="width ".concat(l," ").concat(c),u="transform ".concat(l," ").concat(c);switch(e.dom.style.transition="none",s){case"right":e.dom.style.transform="translateX(-".concat(a,"px)");break;case"top":case"bottom":e.dom.style.width="calc(100% - ".concat(a,"px)"),e.dom.style.transform="translateZ(0)";break}clearTimeout(e.timeout),e.timeout=setTimeout(function(){e.dom&&(e.dom.style.transition="".concat(u,",").concat(f),e.dom.style.width="",e.dom.style.transform="")})},e.remScrollingEffect=function(a){var n=e.props,s=n.placement,l=n.duration,c=n.ease;qe&&(document.body.style.overflowX="hidden"),e.dom.style.transition="none";var f,u="width ".concat(l," ").concat(c),h="transform ".concat(l," ").concat(c);switch(s){case"left":{e.dom.style.width="100%",u="width 0s ".concat(c," ").concat(l);break}case"right":{e.dom.style.transform="translateX(".concat(a,"px)"),e.dom.style.width="100%",u="width 0s ".concat(c," ").concat(l),e.maskDom&&(e.maskDom.style.left="-".concat(a,"px"),e.maskDom.style.width="calc(100% + ".concat(a,"px)"));break}case"top":case"bottom":{e.dom.style.width="calc(100% + ".concat(a,"px)"),e.dom.style.height="100%",e.dom.style.transform="translateZ(0)",f="height 0s ".concat(c," ").concat(l);break}}clearTimeout(e.timeout),e.timeout=setTimeout(function(){e.dom&&(e.dom.style.transition="".concat(h,",").concat(f?"".concat(f,","):"").concat(u),e.dom.style.transform="",e.dom.style.width="",e.dom.style.height="")})},e.getCurrentDrawerSome=function(){return!Object.keys(U).some(function(a){return U[a]})},e.getLevelDom=function(a){var n=a.level,s=a.getContainer;if(!ce){var l=s&&s(),c=l?l.parentNode:null;if(e.levelDom=[],n==="all"){var f=c?Array.prototype.slice.call(c.children):[];f.forEach(function(u){u.nodeName!=="SCRIPT"&&u.nodeName!=="STYLE"&&u.nodeName!=="LINK"&&u!==l&&e.levelDom.push(u)})}else n&&fr(n).forEach(function(u){document.querySelectorAll(u).forEach(function(h){e.levelDom.push(h)})})}},e.getHorizontalBoolAndPlacementName=function(){var a=e.props.placement,n=a==="left"||a==="right",s="translate".concat(n?"X":"Y");return{isHorizontal:n,placementName:s}},e.state={_self:Ut(e)},e}return Be(o,[{key:"componentDidMount",value:function(){var e=this;if(!ce){var a=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){return a=!0,null}}))}catch{}this.passive=a?{passive:!1}:!1}var n=this.props,s=n.open,l=n.getContainer,c=n.showMask,f=l&&l();if(this.drawerId="drawer_id_".concat(Number((Date.now()+Math.random()).toString().replace(".",Math.round(Math.random()*9).toString())).toString(16)),this.getLevelDom(this.props),s&&(f&&f.parentNode===document.body&&(U[this.drawerId]=s),this.openLevelTransition(),this.forceUpdate(function(){e.domFocus()}),c)){var u;(u=this.props.scrollLocker)===null||u===void 0||u.lock()}}},{key:"componentDidUpdate",value:function(e){var a=this.props,n=a.open,s=a.getContainer,l=a.scrollLocker,c=a.showMask,f=s&&s();n!==e.open&&(f&&f.parentNode===document.body&&(U[this.drawerId]=!!n),this.openLevelTransition(),n?(this.domFocus(),c&&(l==null||l.lock())):l==null||l.unLock())}},{key:"componentWillUnmount",value:function(){var e=this.props,a=e.open,n=e.scrollLocker;delete U[this.drawerId],a&&(this.setLevelTransform(!1),document.body.style.touchAction=""),n==null||n.unLock()}},{key:"render",value:function(){var e,a=this,n=this.props,s=n.className,l=n.children,c=n.style,f=n.width,u=n.height;n.defaultOpen;var h=n.open,p=n.prefixCls,v=n.placement;n.level,n.levelMove,n.ease,n.duration,n.getContainer;var y=n.handler;n.onChange,n.afterVisibleChange;var g=n.showMask,k=n.maskClosable,I=n.maskStyle,w=n.onClose,B=n.onHandleClick,q=n.keyboard;n.getOpenCount,n.scrollLocker;var Z=n.contentWrapperStyle,P=se(n,["className","children","style","width","height","defaultOpen","open","prefixCls","placement","level","levelMove","ease","duration","getContainer","handler","onChange","afterVisibleChange","showMask","maskClosable","maskStyle","onClose","onHandleClick","keyboard","getOpenCount","scrollLocker","contentWrapperStyle"]),b=this.dom?h:!1,S=V(p,(e={},W(e,"".concat(p,"-").concat(v),!0),W(e,"".concat(p,"-open"),b),W(e,s||"",!!s),W(e,"no-mask",!g),e)),T=this.getHorizontalBoolAndPlacementName(),C=T.placementName,M=v==="left"||v==="top"?"-100%":"100%",L=b?"":"".concat(C,"(").concat(M,")"),K=y&&d.exports.cloneElement(y,{onClick:function(x){y.props.onClick&&y.props.onClick(),B&&B(x)},ref:function(x){a.handlerDom=x}});return d.exports.createElement("div",D({},Fe(P,["switchScrollingEffect"]),{tabIndex:-1,className:S,style:c,ref:function(x){a.dom=x},onKeyDown:b&&q?this.onKeyDown:void 0,onTransitionEnd:this.onWrapperTransitionEnd}),g&&d.exports.createElement("div",{className:"".concat(p,"-mask"),onClick:k?w:void 0,style:I,ref:function(x){a.maskDom=x}}),d.exports.createElement("div",{className:"".concat(p,"-content-wrapper"),style:ae({transform:L,msTransform:L,width:Ye(f)?"".concat(f,"px"):f,height:Ye(u)?"".concat(u,"px"):u},Z),ref:function(x){a.contentWrapper=x}},d.exports.createElement("div",{className:"".concat(p,"-content"),ref:function(x){a.contentDom=x},onTouchStart:b&&g?this.removeStartHandler:void 0,onTouchMove:b&&g?this.removeMoveHandler:void 0},l),K))}}],[{key:"getDerivedStateFromProps",value:function(e,a){var n=a.prevProps,s=a._self,l={prevProps:e};if(n!==void 0){var c=e.placement,f=e.level;c!==n.placement&&(s.contentDom=null),f!==n.level&&s.getLevelDom(e)}return l}}]),o}(d.exports.Component),Qe=function(t){_e(o,t);var r=Me(o);function o(i){var e;Re(this,o),e=r.call(this,i),e.onHandleClick=function(n){var s=e.props,l=s.onHandleClick,c=s.open;if(l&&l(n),typeof c=="undefined"){var f=e.state.open;e.setState({open:!f})}},e.onClose=function(n){var s=e.props,l=s.onClose,c=s.open;l&&l(n),typeof c=="undefined"&&e.setState({open:!1})};var a=typeof i.open!="undefined"?i.open:!!i.defaultOpen;return e.state={open:a},"onMaskClick"in i&&console.warn("`onMaskClick` are removed, please use `onClose` instead."),e}return Be(o,[{key:"render",value:function(){var e=this,a=this.props;a.defaultOpen;var n=a.getContainer,s=a.wrapperClassName,l=a.forceRender,c=a.handler,f=se(a,["defaultOpen","getContainer","wrapperClassName","forceRender","handler"]),u=this.state.open;if(!n)return d.exports.createElement("div",{className:s,ref:function(v){e.dom=v}},d.exports.createElement(Ge,D({},f,{open:u,handler:c,getContainer:function(){return e.dom},onClose:this.onClose,onHandleClick:this.onHandleClick})));var h=!!c||l;return d.exports.createElement(Yt,{visible:u,forceRender:h,getContainer:n,wrapperClassName:s},function(p){var v=p.visible,y=p.afterClose,g=se(p,["visible","afterClose"]);return d.exports.createElement(Ge,D({},f,g,{open:v!==void 0?v:u,afterVisibleChange:y!==void 0?y:f.afterVisibleChange,handler:c,onClose:e.onClose,onHandleClick:e.onHandleClick}))})}}],[{key:"getDerivedStateFromProps",value:function(e,a){var n=a.prevProps,s={prevProps:e};return typeof n!="undefined"&&e.open!==n.open&&(s.open=e.open),s}}]),o}(d.exports.Component);Qe.defaultProps={prefixCls:"drawer",placement:"left",getContainer:"body",defaultOpen:!1,level:"all",duration:".3s",ease:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",onChange:function(){},afterVisibleChange:function(){},handler:d.exports.createElement("div",{className:"drawer-handle"},d.exports.createElement("i",{className:"drawer-handle-icon"})),showMask:!0,maskClosable:!0,maskStyle:{},wrapperClassName:"",className:"",keyboard:!0,forceRender:!1};function pr(){var t=d.exports.useReducer(function(i){return i+1},0),r=ie(t,2),o=r[1];return o}var mr=globalThis&&globalThis.__rest||function(t,r){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&r.indexOf(i)<0&&(o[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,i=Object.getOwnPropertySymbols(t);e<i.length;e++)r.indexOf(i[e])<0&&Object.prototype.propertyIsEnumerable.call(t,i[e])&&(o[i[e]]=t[i[e]]);return o},Je=d.exports.createContext(null);Gt("top","right","bottom","left");var Ve={distance:180},et=d.exports.forwardRef(function(t,r){var o=t.width,i=o===void 0?256:o,e=t.height,a=e===void 0?256:e,n=t.closable,s=n===void 0?!0:n,l=t.placement,c=l===void 0?"right":l,f=t.maskClosable,u=f===void 0?!0:f,h=t.mask,p=h===void 0?!0:h,v=t.level,y=v===void 0?null:v,g=t.keyboard,k=g===void 0?!0:g,I=t.push,w=I===void 0?Ve:I,B=t.closeIcon,q=B===void 0?d.exports.createElement(Qt,null):B,Z=t.bodyStyle,P=t.drawerStyle,b=t.prefixCls,S=t.className,T=t.direction,C=t.visible,M=t.children,L=t.zIndex,K=t.destroyOnClose,O=t.style,x=t.title,it=t.headerStyle,he=t.onClose,ve=t.footer,st=t.footerStyle,lt=mr(t,["width","height","closable","placement","maskClosable","mask","level","keyboard","push","closeIcon","bodyStyle","drawerStyle","prefixCls","className","direction","visible","children","zIndex","destroyOnClose","style","title","headerStyle","onClose","footer","footerStyle"]),ct=pr(),ft=d.exports.useState(!1),be=ie(ft,2),dt=be[0],ge=be[1],A=d.exports.useContext(Je),te=d.exports.useRef(!1);d.exports.useEffect(function(){return C&&A&&A.push(),function(){A&&A.pull()}},[]),d.exports.useEffect(function(){A&&(C?A.push():A.pull())},[C]);var re=d.exports.useMemo(function(){return{push:function(){w&&ge(!0)},pull:function(){w&&ge(!1)}}},[w]);d.exports.useImperativeHandle(r,function(){return re},[re]);var ye=K&&!C,ut=function(){!ye||C||(te.current=!0,ct())},xe=function(){if(!C&&!p)return{};var _={};return c==="left"||c==="right"?_.width=i:_.height=a,_},pt=function(){var _=function(z){var R;if(typeof w=="boolean"?R=w?Ve.distance:0:R=w.distance,R=parseFloat(String(R||0)),z==="left"||z==="right")return"translateX(".concat(z==="left"?R:-R,"px)");if(z==="top"||z==="bottom")return"translateY(".concat(z==="top"?R:-R,"px)")},xt=p?{}:xe();return D(D({zIndex:L,transform:dt?_(c):void 0},xt),O)};function mt(){return s&&d.exports.createElement("button",{type:"button",onClick:he,"aria-label":"Close",className:"".concat(b,"-close"),style:{"--scroll-bar":"".concat(He(),"px")}},q)}function ht(){if(!x&&!s)return null;var F=x?"".concat(b,"-header"):"".concat(b,"-header-no-title");return d.exports.createElement("div",{className:F,style:it},x&&d.exports.createElement("div",{className:"".concat(b,"-title")},x),s&&mt())}function vt(){if(!ve)return null;var F="".concat(b,"-footer");return d.exports.createElement("div",{className:F,style:st},ve)}var bt=function(){if(te.current&&!C)return null;te.current=!1;var _={};return ye&&(_.opacity=0,_.transition="opacity .3s"),d.exports.createElement("div",{className:"".concat(b,"-wrapper-body"),style:D(D({},_),P),onTransitionEnd:ut},ht(),d.exports.createElement("div",{className:"".concat(b,"-body"),style:Z},M),vt())},gt=V(W({"no-mask":!p},"".concat(b,"-rtl"),T==="rtl"),S),yt=p?xe():{};return d.exports.createElement(Je.Provider,{value:re},d.exports.createElement(Qe,D({handler:!1},D({placement:c,prefixCls:b,maskClosable:u,level:y,keyboard:k,children:M,onClose:he},lt),yt,{open:C,showMask:p,style:pt(),className:gt}),bt()))});et.displayName="Drawer";var tt=d.exports.forwardRef(function(t,r){var o=t.prefixCls,i=t.getContainer,e=d.exports.useContext(Oe),a=e.getPopupContainer,n=e.getPrefixCls,s=e.direction,l=n("drawer",o),c=i===void 0&&a?function(){return a(document.body)}:i;return d.exports.createElement(et,D({},t,{ref:r,prefixCls:l,getContainer:c,direction:s}))});tt.displayName="DrawerWrapper";var hr=tt,vr="/assets/ebook-logo.6915cbf2.svg";const br=o=>{var i=o,{onConfirm:t}=i,r=Ne(i,["onConfirm"]);return $(hr,Ee(Se({placement:"left",width:"26rem",title:$(E,{display:"flex",justifyContent:"space-between",alignItems:"center",children:["\u641C\u5C0B",m(Ae,{type:"primary",onClick:t,children:"\u78BA\u8A8D"})]}),closable:!1},r),{children:[m(ne,{orientation:"center",plain:!0,children:"\u300C\u66F8\u540D\u95DC\u9375\u5B57\u300D\u6216\u300CISBN\u300D"}),m($e,{}),m(ne,{orientation:"center",plain:!0,children:"\u7BE9\u9078\u66F8\u5E97"}),m(Et,{}),m(ne,{orientation:"center",plain:!0,children:"\u7D50\u679C\u6392\u5E8F"}),m(Nt,{})]}))},gr=j.header`
  padding: 1rem;
  display: flex;
  background-color: var(--primary-color);
  color: var(--gray-1);
  z-index: 100;
  box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.3);
`,yr=j.img`
  height: 2.5rem;
  margin: 0 0.5rem;
  cursor: pointer;
`,xr=j.span`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  display: none;

  @media (min-width: ${Le.md}) {
    display: inline;
  }
`,wr=j(Ae)`
  color: var(--gray-1) !important;
`,Cr=({onConfirm:t})=>{const r=Te(),[o,i]=d.exports.useState(!1),e=()=>{i(!1),t&&t()};return $(Vt,{children:[$(gr,{children:[$(E,{flex:"2",display:"flex",alignItems:"center",flexDirection:["row-reverse",null,null,"row"],children:[$(E,{flex:"1",display:"flex",alignItems:"center",justifyContent:["center",null,null,"flex-start"],children:[m(yr,{src:vr,onClick:()=>r("/")}),m(xr,{children:"\u53F0\u7063\u96FB\u5B50\u66F8\u641C\u5C0B"})]}),m(E,{flex:"1",display:["flex",null,null,"none"],alignItems:"center",justifyContent:"flex-start",children:m(wr,{type:"text",onClick:()=>i(!0),children:m(Ie,{icon:Rt,style:{fontSize:"1.5rem"}})})})]}),m(E,{flex:"1",display:"flex",justifyContent:"flex-end",children:m(Dt,{textcolor:"white"})})]}),m(br,{visible:o,onConfirm:e,onClose:e})]})};function kr(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Y(t,r){return Y=Object.setPrototypeOf||function(i,e){return i.__proto__=e,i},Y(t,r)}function Sr(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,Y(t,r)}function fe(t){return fe=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},fe(t)}function Er(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function Nr(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ee(t,r,o){return Nr()?ee=Reflect.construct:ee=function(e,a,n){var s=[null];s.push.apply(s,a);var l=Function.bind.apply(e,s),c=new l;return n&&Y(c,n.prototype),c},ee.apply(null,arguments)}function de(t){var r=typeof Map=="function"?new Map:void 0;return de=function(i){if(i===null||!Er(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(typeof r!="undefined"){if(r.has(i))return r.get(i);r.set(i,e)}function e(){return ee(i,arguments,fe(this).constructor)}return e.prototype=Object.create(i.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),Y(e,i)},de(t)}var H=function(t){Sr(r,t);function r(o){var i;return i=t.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+o+" for more information.")||this,kr(i)}return r}(de(Error)),Dr=/--[\S]*/g;function $r(t,r){if(!t||!t.match(Dr))throw new H(73);var o;if(typeof document!="undefined"&&document.documentElement!==null&&(o=getComputedStyle(document.documentElement).getPropertyValue(t)),o)return o.trim();if(r)return r;throw new H(74)}function ue(t){return Math.round(t*255)}function Tr(t,r,o){return ue(t)+","+ue(r)+","+ue(o)}function rt(t,r,o,i){if(i===void 0&&(i=Tr),r===0)return i(o,o,o);var e=(t%360+360)%360/60,a=(1-Math.abs(2*o-1))*r,n=a*(1-Math.abs(e%2-1)),s=0,l=0,c=0;e>=0&&e<1?(s=a,l=n):e>=1&&e<2?(s=n,l=a):e>=2&&e<3?(l=a,c=n):e>=3&&e<4?(l=n,c=a):e>=4&&e<5?(s=n,c=a):e>=5&&e<6&&(s=a,c=n);var f=o-a/2,u=s+f,h=l+f,p=c+f;return i(u,h,p)}var nt={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function Ir(t){if(typeof t!="string")return t;var r=t.toLowerCase();return nt[r]?"#"+nt[r]:t}var Pr=/^#[a-fA-F0-9]{6}$/,Or=/^#[a-fA-F0-9]{8}$/,Fr=/^#[a-fA-F0-9]{3}$/,_r=/^#[a-fA-F0-9]{4}$/,pe=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,Mr=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i,Rr=/^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,Hr=/^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;function Br(t){if(typeof t!="string")throw new H(3);var r=Ir(t);if(r.match(Pr))return{red:parseInt(""+r[1]+r[2],16),green:parseInt(""+r[3]+r[4],16),blue:parseInt(""+r[5]+r[6],16)};if(r.match(Or)){var o=parseFloat((parseInt(""+r[7]+r[8],16)/255).toFixed(2));return{red:parseInt(""+r[1]+r[2],16),green:parseInt(""+r[3]+r[4],16),blue:parseInt(""+r[5]+r[6],16),alpha:o}}if(r.match(Fr))return{red:parseInt(""+r[1]+r[1],16),green:parseInt(""+r[2]+r[2],16),blue:parseInt(""+r[3]+r[3],16)};if(r.match(_r)){var i=parseFloat((parseInt(""+r[4]+r[4],16)/255).toFixed(2));return{red:parseInt(""+r[1]+r[1],16),green:parseInt(""+r[2]+r[2],16),blue:parseInt(""+r[3]+r[3],16),alpha:i}}var e=pe.exec(r);if(e)return{red:parseInt(""+e[1],10),green:parseInt(""+e[2],10),blue:parseInt(""+e[3],10)};var a=Mr.exec(r.substring(0,50));if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10),alpha:parseFloat(""+a[4])};var n=Rr.exec(r);if(n){var s=parseInt(""+n[1],10),l=parseInt(""+n[2],10)/100,c=parseInt(""+n[3],10)/100,f="rgb("+rt(s,l,c)+")",u=pe.exec(f);if(!u)throw new H(4,r,f);return{red:parseInt(""+u[1],10),green:parseInt(""+u[2],10),blue:parseInt(""+u[3],10)}}var h=Hr.exec(r.substring(0,50));if(h){var p=parseInt(""+h[1],10),v=parseInt(""+h[2],10)/100,y=parseInt(""+h[3],10)/100,g="rgb("+rt(p,v,y)+")",k=pe.exec(g);if(!k)throw new H(4,r,g);return{red:parseInt(""+k[1],10),green:parseInt(""+k[2],10),blue:parseInt(""+k[3],10),alpha:parseFloat(""+h[4])}}throw new H(5)}var ot=function(r){return r.length===7&&r[1]===r[2]&&r[3]===r[4]&&r[5]===r[6]?"#"+r[1]+r[3]+r[5]:r};function X(t){var r=t.toString(16);return r.length===1?"0"+r:r}function at(t,r,o){if(typeof t=="number"&&typeof r=="number"&&typeof o=="number")return ot("#"+X(t)+X(r)+X(o));if(typeof t=="object"&&r===void 0&&o===void 0)return ot("#"+X(t.red)+X(t.green)+X(t.blue));throw new H(6)}function Ar(t,r,o,i){if(typeof t=="string"&&typeof r=="number"){var e=Br(t);return"rgba("+e.red+","+e.green+","+e.blue+","+r+")"}else{if(typeof t=="number"&&typeof r=="number"&&typeof o=="number"&&typeof i=="number")return i>=1?at(t,r,o):"rgba("+t+","+r+","+o+","+i+")";if(typeof t=="object"&&r===void 0&&o===void 0&&i===void 0)return t.alpha>=1?at(t.red,t.green,t.blue):"rgba("+t.red+","+t.green+","+t.blue+","+t.alpha+")"}throw new H(7)}const N=5,me=2500,G=me/6,Lr=j.div`
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
    border: ${N}px solid var(--primary-color);
    transform-origin: bottom left;
    transform: translateX(300px);
    animation: travel ${me}ms linear infinite;

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
        height: ${N}px;
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
        height: ${N*3.5}px;
        border-top: ${N}px solid var(--primary-color);
        border-bottom: ${N}px solid var(--primary-color);
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
        border: ${N}px solid var(--primary-color);
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
        height: ${N*3.5}px;
        border-top: ${N}px solid var(--primary-color);
        border-bottom: ${N}px solid var(--primary-color);
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
        height: ${N}px;
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
        border: ${N}px solid var(--primary-color);
      }
    }

    &:nth-child(2) {
      animation-delay: ${G*1}ms;
    }

    &:nth-child(3) {
      animation-delay: ${G*2}ms;
    }

    &:nth-child(4) {
      animation-delay: ${G*3}ms;
    }

    &:nth-child(5) {
      animation-delay: ${G*4}ms;
    }

    &:nth-child(6) {
      animation-delay: ${G*5}ms;
    }
  }

  .shelf {
    width: 300px;
    height: ${N}px;
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
      background-image: radial-gradient(${Ar($r("--primary-color"),.5)} 30%, transparent 0);
      background-size: 10px 10px;
      background-position: 0 -2.5px;
      top: 200%;
      left: 5%;
      animation: move ${me/10}ms linear infinite;
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
`,zr=()=>m(E,{height:"200px",width:"375px",position:"relative",children:$(Lr,{children:[$("ul",{className:"books_list",children:[m("li",{className:"book_item first"}),m("li",{className:"book_item second"}),m("li",{className:"book_item third"}),m("li",{className:"book_item fourth"}),m("li",{className:"book_item fifth"}),m("li",{className:"book_item sixth"})]}),m("div",{className:"shelf"})]})}),jr=j.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,Wr=({urlParams:t})=>{const r=Te(),{searchResult:o,isLoading:i,error:e}=rr(t),a=oe(St),n=oe(It),s=oe(Pt),l=Ot();return d.exports.useEffect(()=>{e&&Jt.warning(e.message)},[e]),d.exports.useEffect(()=>{if(o&&!Pe(o)){const c=o.results.map(f=>f.bookstore.id);s(c),n(o.keywords),r(`/searches/${o.id}`),a(o.results)}},[o,t]),$(jr,{children:[m(Cr,{onConfirm:l}),m(E,{display:["none",null,null,"flex"],justifyContent:"center",mt:"1.5rem",mb:"1rem",children:$(E,{display:"flex",alignItems:"center",maxWidth:Le.xl,width:"100%",px:["1rem",null,null,null,null,"0"],children:[m($e,{onSubmit:l}),m(Ft,{ml:"1.5rem",filterProps:{showConfirm:!0,onConfirm:l}})]})}),m(E,{display:"flex",justifyContent:"center",flex:"1",children:$(E,{width:"100%",children:[i&&m(E,{height:"100%",display:"flex",justifyContent:"center",alignItems:"center",children:m(zr,{})}),m(E,{display:!i&&o?"block":"none",children:m(At,{})})]})}),m(cr,{children:m(Ie,{icon:Lt,style:{fontSize:"2.5rem",color:"var(--primary-color)",backgroundColor:"var(--gray-1)",borderRadius:"50%"}})})]})},Qr=()=>{const{searchId:t}=Ht(),r=d.exports.useMemo(()=>$t(Tt(location.search)),[location.search]);return!t&&!r.q?m(Bt,{to:"/"}):m(Wr,{urlParams:t||`?${De(r,{arrayFormat:"bracket"})}`})};export{Qr as default};
