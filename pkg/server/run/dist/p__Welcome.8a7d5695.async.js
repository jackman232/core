(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[185],{8212:function($,h,t){"use strict";t.d(h,{Z:function(){return m}});var f=t(28991),O=t(67294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},ne=i,j=t(27029),C=function(F,N){return O.createElement(j.Z,(0,f.Z)((0,f.Z)({},F),{},{ref:N,icon:ne}))};C.displayName="EditOutlined";var m=O.forwardRef(C)},8668:function($){$.exports={pre:"pre___3fTUI"}},70347:function(){},47828:function(){},24421:function($,h,t){"use strict";t.r(h),t.d(h,{default:function(){return ia}});var f=t(58024),O=t(39144),i=t(17462),ne=t(76772),j=t(38663),C=t(47828),m=t(22385),M=t(47673),F=t(22122),N=t(96156),r=t(67294),re=t(94184),B=t.n(re),ie=t(42550),ue=t(65632),b=t(21687),Se=function(e,a){var u={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(u[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)a.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(u[n[l]]=e[n[l]]);return u},mt=function(a,u){var n=a.prefixCls,l=a.component,g=l===void 0?"article":l,w=a.className,D=a["aria-label"],z=a.setContentRef,U=a.children,L=Se(a,["prefixCls","component","className","aria-label","setContentRef","children"]),X=u;return z&&((0,b.Z)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),X=(0,ie.sQ)(u,z)),r.createElement(ue.C,null,function(J){var le=J.getPrefixCls,R=J.direction,ee=g,Y=le("typography",n),A=B()(Y,(0,N.Z)({},"".concat(Y,"-rtl"),R==="rtl"),w);return r.createElement(ee,(0,F.Z)({className:A,"aria-label":D,ref:X},L),U)})},qe=r.forwardRef(mt);qe.displayName="Typography";var He=qe,et=He,o=t(90484),y=t(98423),d=t(28481),s=t(21770),E=t(50344),De=t(20640),Ee=t.n(De),pe=t(8212),me=t(79508),ye=t(99165),q=t(48717),ge=t(8410),Ze=t(42051),Ce=t(34952),Pe=t(79370),he=t(94199),we=t(15105),Le=t(28991),tt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},at=tt,yt=t(27029),nt=function(a,u){return r.createElement(yt.Z,(0,Le.Z)((0,Le.Z)({},a),{},{ref:u,icon:at}))};nt.displayName="EnterOutlined";var rt=r.forwardRef(nt),ut=t(94418),Ge=t(96159),Ae=function(a){var u=a.prefixCls,n=a["aria-label"],l=a.className,g=a.style,w=a.direction,D=a.maxLength,z=a.autoSize,U=z===void 0?!0:z,L=a.value,X=a.onSave,J=a.onCancel,le=a.onEnd,R=a.component,ee=a.enterIcon,Y=ee===void 0?r.createElement(rt,null):ee,A=r.useRef(),k=r.useRef(!1),oe=r.useRef(),I=r.useState(L),Re=(0,d.Z)(I,2),ce=Re[0],Me=Re[1];r.useEffect(function(){Me(L)},[L]),r.useEffect(function(){if(A.current&&A.current.resizableTextArea){var P=A.current.resizableTextArea.textArea;P.focus();var T=P.value.length;P.setSelectionRange(T,T)}},[]);var be=function(T){var W=T.target;Me(W.value.replace(/[\n\r]/g,""))},Z=function(){k.current=!0},te=function(){k.current=!1},ae=function(T){var W=T.keyCode;k.current||(oe.current=W)},xe=function(){X(ce.trim())},$e=function(T){var W=T.keyCode,Ye=T.ctrlKey,Ue=T.altKey,de=T.metaKey,_=T.shiftKey;oe.current===W&&!k.current&&!Ye&&!Ue&&!de&&!_&&(W===we.Z.ENTER?(xe(),le==null||le()):W===we.Z.ESC&&J())},Oe=function(){xe()},ze=R?"".concat(u,"-").concat(R):"",K=B()(u,"".concat(u,"-edit-content"),(0,N.Z)({},"".concat(u,"-rtl"),w==="rtl"),l,ze);return r.createElement("div",{className:K,style:g},r.createElement(ut.Z,{ref:A,maxLength:D,value:ce,onChange:be,onKeyDown:ae,onKeyUp:$e,onCompositionStart:Z,onCompositionEnd:te,onBlur:Oe,"aria-label":n,rows:1,autoSize:U}),Y!==null?(0,Ge.Tm)(Y,{className:"".concat(u,"-edit-content-confirm")}):null)},gt=Ae;function Ne(e,a){return r.useMemo(function(){var u=!!e;return[u,(0,F.Z)((0,F.Z)({},a),u&&(0,o.Z)(e)==="object"?e:null)]},[e])}var Ct=function(e,a){var u=r.useRef(!1);r.useEffect(function(){u.current?e():u.current=!0},a)};function lt(e){var a=(0,o.Z)(e);return a==="string"||a==="number"}function ht(e){var a=0;return e.forEach(function(u){lt(u)?a+=String(u).length:a+=1}),a}function Ve(e,a){for(var u=0,n=[],l=0;l<e.length;l+=1){if(u===a)return n;var g=e[l],w=lt(g),D=w?String(g).length:1,z=u+D;if(z>a){var U=a-u;return n.push(String(g).slice(0,U)),n}n.push(g),u=z}return e}var bt=0,je=1,S=2,Je=3,G=4,xt=function(a){var u=a.enabledMeasure,n=a.children,l=a.text,g=a.width,w=a.rows,D=a.onEllipsis,z=r.useState([0,0,0]),U=(0,d.Z)(z,2),L=U[0],X=U[1],J=r.useState(bt),le=(0,d.Z)(J,2),R=le[0],ee=le[1],Y=(0,d.Z)(L,3),A=Y[0],k=Y[1],oe=Y[2],I=r.useState(0),Re=(0,d.Z)(I,2),ce=Re[0],Me=Re[1],be=r.useRef(null),Z=r.useRef(null),te=r.useMemo(function(){return(0,E.Z)(l)},[l]),ae=r.useMemo(function(){return ht(te)},[te]),xe=r.useMemo(function(){return!u||R!==Je?n(te,!1):n(Ve(te,k),k<ae)},[u,R,n,te,k,ae]);(0,ge.Z)(function(){u&&g&&ae&&(ee(je),X([0,Math.ceil(ae/2),ae]))},[u,g,l,ae,w]),(0,ge.Z)(function(){var K;R===je&&Me(((K=be.current)===null||K===void 0?void 0:K.offsetHeight)||0)},[R]),(0,ge.Z)(function(){var K,P;if(ce){if(R===je){var T=((K=Z.current)===null||K===void 0?void 0:K.offsetHeight)||0,W=w*ce;T<=W?(ee(G),D(!1)):ee(S)}else if(R===S)if(A!==oe){var Ye=((P=Z.current)===null||P===void 0?void 0:P.offsetHeight)||0,Ue=w*ce,de=A,_=oe;A===oe-1?_=A:Ye<=Ue?de=k:_=k;var St=Math.ceil((de+_)/2);X([de,St,_])}else ee(Je),D(!0)}},[R,A,oe,w,ce]);var $e={width:g,whiteSpace:"normal",margin:0,padding:0},Oe=function(P,T,W){return r.createElement("span",{"aria-hidden":!0,ref:T,style:(0,F.Z)({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none"},W)},P)},ze=function(P,T){var W=Ve(te,P);return Oe(n(W,!0),T,$e)};return r.createElement(r.Fragment,null,xe,u&&R!==Je&&R!==G&&r.createElement(r.Fragment,null,Oe("lg",be,{wordBreak:"keep-all",whiteSpace:"nowrap"}),R===je?Oe(n(te,!1),Z,$e):ze(k,Z)))},ot=xt,Ot=function(a){var u=a.title,n=a.enabledEllipsis,l=a.isEllipsis,g=a.children;return!u||!n?g:r.createElement(he.Z,{title:u,visible:l?void 0:!1},g)},it=Ot,st=function(e,a){var u={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(u[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)a.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(u[n[l]]=e[n[l]]);return u};function Ft(e,a){var u=e.mark,n=e.code,l=e.underline,g=e.delete,w=e.strong,D=e.keyboard,z=e.italic,U=a;function L(X,J){!X||(U=r.createElement(J,{},U))}return L(w,"strong"),L(l,"u"),L(g,"del"),L(n,"code"),L(u,"mark"),L(D,"kbd"),L(z,"i"),U}function Ie(e,a,u){return e===!0||e===void 0?a:e||u&&a}function ct(e){return Array.isArray(e)?e:[e]}var Bt="...",dt=r.forwardRef(function(e,a){var u=e.prefixCls,n=e.className,l=e.style,g=e.type,w=e.disabled,D=e.children,z=e.ellipsis,U=e.editable,L=e.copyable,X=e.component,J=e.title,le=st(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),R=r.useContext(ue.E_),ee=R.getPrefixCls,Y=R.direction,A=(0,Ze.E)("Text")[0],k=r.useRef(null),oe=r.useRef(null),I=ee("typography",u),Re=(0,y.Z)(le,["mark","code","delete","underline","strong","keyboard","italic"]),ce=Ne(U),Me=(0,d.Z)(ce,2),be=Me[0],Z=Me[1],te=(0,s.Z)(!1,{value:Z.editing}),ae=(0,d.Z)(te,2),xe=ae[0],$e=ae[1],Oe=Z.triggerType,ze=Oe===void 0?["icon"]:Oe,K=function(c){var v;c&&((v=Z.onStart)===null||v===void 0||v.call(Z)),$e(c)};Ct(function(){var p;xe||(p=oe.current)===null||p===void 0||p.focus()},[xe]);var P=function(c){c==null||c.preventDefault(),K(!0)},T=function(c){var v;(v=Z.onChange)===null||v===void 0||v.call(Z,c),K(!1)},W=function(){var c;(c=Z.onCancel)===null||c===void 0||c.call(Z),K(!1)},Ye=Ne(L),Ue=(0,d.Z)(Ye,2),de=Ue[0],_=Ue[1],St=r.useState(!1),Pt=(0,d.Z)(St,2),vt=Pt[0],At=Pt[1],Tt=r.useRef(),Rt=function(){clearTimeout(Tt.current)},sa=function(c){var v;c==null||c.preventDefault(),c==null||c.stopPropagation(),Ee()(_.text||String(D)||""),At(!0),Rt(),Tt.current=setTimeout(function(){At(!1)},3e3),(v=_.onCopy)===null||v===void 0||v.call(_)};r.useEffect(function(){return Rt},[]);var ca=r.useState(!1),Mt=(0,d.Z)(ca,2),wt=Mt[0],da=Mt[1],va=r.useState(!1),Lt=(0,d.Z)(va,2),Nt=Lt[0],fa=Lt[1],Ea=r.useState(!1),jt=(0,d.Z)(Ea,2),pa=jt[0],ma=jt[1],ya=r.useState(!1),It=(0,d.Z)(ya,2),Kt=It[0],ga=It[1],Ca=r.useState(!1),Wt=(0,d.Z)(Ca,2),$t=Wt[0],ha=Wt[1],ba=Ne(z,{expandable:!1}),zt=(0,d.Z)(ba,2),Fe=zt[0],H=zt[1],ve=Fe&&!pa,Ut=H.rows,ke=Ut===void 0?1:Ut,ft=r.useMemo(function(){return!ve||H.suffix!==void 0||H.onEllipsis||H.expandable||be||de},[ve,H,be,de]);(0,ge.Z)(function(){Fe&&!ft&&(da((0,Pe.G)("webkitLineClamp")),fa((0,Pe.G)("textOverflow")))},[ft,Fe]);var fe=r.useMemo(function(){return ft?!1:ke===1?Nt:wt},[ft,Nt,wt]),kt=ve&&(fe?$t:Kt),xa=ve&&ke===1&&fe,Et=ve&&ke>1&&fe,Oa=function(c){var v;ma(!0),(v=H.onExpand)===null||v===void 0||v.call(H,c)},Fa=r.useState(0),Ht=(0,d.Z)(Fa,2),Ba=Ht[0],Sa=Ht[1],Da=function(c){var v=c.offsetWidth;Sa(v)},Za=function(c){var v;ga(c),Kt!==c&&((v=H.onEllipsis)===null||v===void 0||v.call(H,c))};r.useEffect(function(){var p=k.current;if(Fe&&fe&&p){var c=Et?p.offsetHeight<p.scrollHeight:p.offsetWidth<p.scrollWidth;$t!==c&&ha(c)}},[Fe,fe,D,Et]);var pt=H.tooltip===!0?D:H.tooltip,Gt=r.useMemo(function(){var p=function(v){return["string","number"].includes((0,o.Z)(v))};if(!(!Fe||fe)){if(p(D))return D;if(p(J))return J;if(p(pt))return pt}},[Fe,fe,J,pt,kt]);if(xe)return r.createElement(gt,{value:typeof D=="string"?D:"",onSave:T,onCancel:W,onEnd:Z.onEnd,prefixCls:I,className:n,style:l,direction:Y,component:X,maxLength:Z.maxLength,autoSize:Z.autoSize,enterIcon:Z.enterIcon});var Pa=function(){var c=H.expandable,v=H.symbol;if(!c)return null;var Q;return v?Q=v:Q=A.expand,r.createElement("a",{key:"expand",className:"".concat(I,"-expand"),onClick:Oa,"aria-label":A.expand},Q)},Aa=function(){if(!!be){var c=Z.icon,v=Z.tooltip,Q=(0,E.Z)(v)[0]||A.edit,Be=typeof Q=="string"?Q:"";return ze.includes("icon")?r.createElement(he.Z,{key:"edit",title:v===!1?"":Q},r.createElement(Ce.Z,{ref:oe,className:"".concat(I,"-edit"),onClick:P,"aria-label":Be},c||r.createElement(pe.Z,{role:"button"}))):null}},Ta=function(){if(!!de){var c=_.tooltips,v=_.icon,Q=ct(c),Be=ct(v),_e=vt?Ie(Q[1],A.copied):Ie(Q[0],A.copy),wa=vt?A.copied:A.copy,La=typeof _e=="string"?_e:wa;return r.createElement(he.Z,{key:"copy",title:_e},r.createElement(Ce.Z,{className:B()("".concat(I,"-copy"),vt&&"".concat(I,"-copy-success")),onClick:sa,"aria-label":La},vt?Ie(Be[1],r.createElement(me.Z,null),!0):Ie(Be[0],r.createElement(ye.Z,null),!0)))}},Ra=function(c){return[c&&Pa(),Aa(),Ta()]},Ma=function(c){return[c&&r.createElement("span",{"aria-hidden":!0,key:"ellipsis"},Bt),H.suffix,Ra(c)]};return r.createElement(q.Z,{onResize:Da,disabled:!ve||fe},function(p){var c;return r.createElement(it,{title:pt,enabledEllipsis:ve,isEllipsis:kt},r.createElement(et,(0,F.Z)({className:B()((c={},(0,N.Z)(c,"".concat(I,"-").concat(g),g),(0,N.Z)(c,"".concat(I,"-disabled"),w),(0,N.Z)(c,"".concat(I,"-ellipsis"),Fe),(0,N.Z)(c,"".concat(I,"-single-line"),ve&&ke===1),(0,N.Z)(c,"".concat(I,"-ellipsis-single-line"),xa),(0,N.Z)(c,"".concat(I,"-ellipsis-multiple-line"),Et),c),n),style:(0,F.Z)((0,F.Z)({},l),{WebkitLineClamp:Et?ke:void 0}),component:X,ref:(0,ie.sQ)(p,k,a),direction:Y,onClick:ze.includes("text")?P:null,"aria-label":Gt,title:J},Re),r.createElement(ot,{enabledMeasure:ve&&!fe,text:D,rows:ke,width:Ba,onEllipsis:Za},function(v,Q){var Be=v;v.length&&Q&&Gt&&(Be=r.createElement("span",{key:"show-content","aria-hidden":!0},Be));var _e=Ft(e,r.createElement(r.Fragment,null,Be,Ma(Q)));return _e})))})}),Ke=dt,Te=function(e,a){var u={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(u[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)a.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(u[n[l]]=e[n[l]]);return u},We=function(a){var u=a.ellipsis,n=Te(a,["ellipsis"]),l=r.useMemo(function(){return u&&(0,o.Z)(u)==="object"?(0,y.Z)(u,["expandable","rows"]):u},[u]);return(0,b.Z)((0,o.Z)(u)!=="object"||!u||!("expandable"in u)&&!("rows"in u),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),r.createElement(Ke,(0,F.Z)({},n,{ellipsis:l,component:"span"}))},se=We,Vt=function(e,a){var u={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(u[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)a.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(u[n[l]]=e[n[l]]);return u},Jt=function(a,u){var n=a.ellipsis,l=a.rel,g=Vt(a,["ellipsis","rel"]);(0,b.Z)((0,o.Z)(n)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var w=r.useRef(null);r.useImperativeHandle(u,function(){return w.current});var D=(0,F.Z)((0,F.Z)({},g),{rel:l===void 0&&g.target==="_blank"?"noopener noreferrer":l});return delete D.navigate,r.createElement(Ke,(0,F.Z)({},D,{ref:w,ellipsis:!!n,component:"a"}))},Qt=r.forwardRef(Jt),Xt=t(93355),Yt=function(e,a){var u={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(u[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)a.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(u[n[l]]=e[n[l]]);return u},_t=(0,Xt.a)(1,2,3,4,5),qt=function(a){var u=a.level,n=u===void 0?1:u,l=Yt(a,["level"]),g;return _t.indexOf(n)!==-1?g="h".concat(n):((0,b.Z)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),g="h1"),r.createElement(Ke,(0,F.Z)({},l,{component:g}))},ea=qt,ta=function(a){return r.createElement(Ke,(0,F.Z)({},a,{component:"div"}))},aa=ta,Qe=et;Qe.Text=se,Qe.Link=Qt,Qe.Title=ea,Qe.Paragraph=aa;var Xe=Qe,na=t(67265),ra=t(8668),ua=t.n(ra),x=t(85893),Dt=Xe.Title,V=Xe.Paragraph,Zt=Xe.Text,la=function(a){var u=a.children;return(0,x.jsx)("pre",{className:ua().pre,children:(0,x.jsx)("code",{children:(0,x.jsx)(Xe.Text,{copyable:!0,children:u})})})},oa=function(){return(0,x.jsx)(na.ZP,{children:(0,x.jsxs)(O.Z,{children:[(0,x.jsx)(ne.Z,{message:"\u6B22\u8FCE\u4F7F\u7528,\u6700\u65B0\u7684\u6846\u67B6\u5DF2\u7ECF\u53D1\u5E03\u5230GitHub\u4E0A\u4E86",type:"success",showIcon:!0,banner:!0,style:{margin:-12,marginBottom:24}}),(0,x.jsx)(V,{children:"https://github.com/Vincent2026/spot"}),(0,x.jsx)(Xe.Text,{strong:!0,children:"\u5FEB\u901F\u5F00\u59CB,\u672C\u9879\u76EE\u4E2D\u8FD0\u884C\u7684\u6240\u6709api,\u8BF7\u70B9\u51FB\u5DE6\u4E0B\u65B9\u7684OpenApi\u6587\u6863\u67E5\u9605"}),(0,x.jsx)(Dt,{level:5,children:"API\u8BF4\u660E"}),(0,x.jsx)(V,{children:"servermanage\u7C7B\u578B:/api/servermanage \u5F00\u5934\u7684\u8DEF\u7531\uFF0C\u8BE5\u7C7B\u8DEF\u7531\u7528\u4E8E\u7CFB\u7EDF\u7CFB\u7EDF\u7BA1\u7406\u548C\u7CFB\u7EDF\u8FD0\u884C\u72B6\u6001\u67E5\u8BE2\u7B49\uFF0C\u8BE5\u7C7B\u8DEF\u7531\u53EA\u80FD\u5728\u5185\u7F51\u8C03\u7528"}),(0,x.jsx)(V,{children:"manage\u7C7B\u578B:/api/manage/ \u5F00\u5934\u7684\u8DEF\u7531\uFF0C\u8BE5\u7C7B\u8DEF\u7531\u7528\u4E8E\u4E1A\u52A1\u7BA1\u7406\uFF0C\u5DE6\u4FA7\u7684\u7BA1\u7406\u754C\u9762\u7531\u8BE5\u7C7B\u8DEF\u7531\u751F\u6210\uFF0C\u7528\u4E8E\u521B\u5EFA\u6216\u7F16\u8F91\u4E1A\u52A1\u4E2D\u5E94\u7528\u7684\u57FA\u7840\u6570\u636E\u7B49\uFF0C\u524D\u7AEF\u505A\u4E1A\u52A1\u7684\u540E\u53F0\u7BA1\u7406\u65F6\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u8BE5\u7C7B\u8DEF\u7531"}),(0,x.jsx)(V,{children:"public\u7C7B\u578B:\u4ECEOpenApi\u6587\u6863\u4E2D\u53EF\u4EE5\u67E5\u9605\u8DEF\u7531\u662F\u5426\u4E3Apublic \u7C7B\u578B\uFF0C\u8DEF\u7531\u672C\u8EAB\u65E0\u6807\u8BC6\uFF0C\u8BE5\u7C7B\u8DEF\u7531\u7528\u4E8E\u63D0\u4F9B\u516C\u5171\u6570\u636E\u7ED9\u6240\u6709\u7528\u6237\uFF0C\u65E0\u9700\u7528\u6237\u8BC6\u522B\u7684\u4FE1\u606F\u8C03\u7528\u90FD\u7531\u8BE5\u7C7B\u578B\u7684\u8DEF\u7531\u63D0\u4F9B"}),(0,x.jsx)(V,{children:"private\u7C7B\u578B:\u4ECEOpenApi\u6587\u6863\u4E2D\u53EF\u4EE5\u67E5\u9605\u8DEF\u7531\u662F\u5426\u4E3Aprivate \u7C7B\u578B,\u8DEF\u7531\u672C\u8EAB\u65E0\u6807\u8BC6,\u8BE5\u7C7B\u8DEF\u7531\u7528\u4E8E\u9700\u8981\u7528\u6237\u8EAB\u4EFD\u8BC6\u522B\u7684\u8C03\u7528,\u8C03\u7528\u524D\u5FC5\u987B\u83B7\u53D6\u7528\u6237\u7684token,\u5E76\u5728\u8C03\u7528\u65F6\u4F20\u9012token"}),(0,x.jsx)(V,{children:"testtoken\u7684\u83B7\u53D6\u8DEF\u7531/api/servermanage/testtoken,\u4F8B\u5982:http://127.0.0.1:8082/api/servermanage/testtoken?userid=12345 \u5373\u53EF\u83B7\u53D6\u7528\u6237id\u4E3A12345\u7684token,\u7528\u4E8E\u8C03\u7528private\u7C7B\u578B\u7684\u8DEF\u7531"}),(0,x.jsx)(la,{children:""}),(0,x.jsx)(Dt,{level:5,children:"API\u4F7F\u7528\u8BF4\u660E"}),(0,x.jsx)(V,{children:"public\u548Cprivate\u7C7B\u578B\u7684api\u4F9B\u524D\u7AEF\u8C03\u7528,\u6709\u4E8C\u79CD\u8C03\u7528\u65B9\u5F0F,rest\u548Cwebsocket"}),(0,x.jsx)(V,{children:"rest\u65B9\u5F0F\u8C03\u7528,\u4F8B\u5982:\u8C03\u7528http://127.0.0.1:8081/api/wallets/gettokens \u9ED8\u8BA4\u9700\u8981POST\u65B9\u5F0F\u8C03\u7528,\u53C2\u6570\u901A\u8FC7json\u683C\u5F0F\u4F20\u9012"}),(0,x.jsx)(V,{children:"websocket\u65B9\u5F0F\u8C03\u7528,\u9700\u8981\u521B\u5EFAwebsocket\u7684\u8FDE\u63A5,\u9ED8\u8BA4\u6BCF\u4E2A\u670D\u52A1\u90FD\u6709\u4E8C\u4E2Awebsocket\u8FDE\u63A5\u5730\u5740 /ws \u548C /wsauth,\u4F8B\u5982:ws://127.0.0.1:8081/ws\u548Cws://127.0.0.1:8081/wsauth"}),(0,x.jsxs)(V,{children:["websocket\u65B9\u5F0F\u7684\u6807\u51C6\u53C2\u6570:",(0,x.jsx)(Zt,{children:'{"channel":"/api/wallets/gettokens","event":"sub|unsub|call","data":"{}"}'}),"channel\u53C2\u6570\u4E3Aapi\u5730\u5740,\u76F8\u540Cchannel\u53C2\u6570\u7684data\u53C2\u6570\u4E2D\u6570\u636E\u4E0D\u540C\u65F6,\u4F1A\u4EA7\u751F\u591A\u4E2A\u8BA2\u9605id"]}),(0,x.jsxs)(V,{children:["websocket\u65B9\u5F0F\u7684\u6807\u51C6\u8FD4\u56DE\u53C2\u6570:",(0,x.jsx)(Zt,{children:'{"channel":"/api/wallets/gettokens","event":"sub","data":"1234567"}'}),"data\u4E2D\u8FD4\u56DE\u7684\u4E3A\u8BA2\u9605id,\u540E\u7EED\u7684\u63A8\u9001\u6570\u636E\u65F6,event\u53C2\u6570\u4E2D\u4E3A\u8BE5id"]}),(0,x.jsx)(V,{children:"\u8FDE\u63A5\u5230/ws\u7684\u53EA\u53EF\u4EE5\u4F7F\u7528public\u7C7B\u578B\u7684\u8DEF\u7531,\u4F8B\u5982:ws://127.0.0.1/ws ,\u53EA\u53EF\u4EE5\u901A\u8FC7event\u8BA2\u9605(sub)\u6216\u8C03\u7528(call)public\u7C7B\u578B\u7684api"}),(0,x.jsx)(V,{children:"\u8FDE\u63A5\u5230/wsauth\u7684\u53EF\u4EE5\u4F7F\u7528public\u7C7B\u578B\u548Cprivate\u7C7B\u578B\u7684\u8DEF\u7531,\u4F8B\u5982:ws://127.0.0.1/wsauth ,\u901A\u8FC7event\u8C03\u7528(call)public\u7C7B\u578B\u548Cprivate\u7C7B\u578B\u7684api"})]})})},ia=oa},39144:function($,h,t){"use strict";t.d(h,{Z:function(){return et}});var f=t(96156),O=t(22122),i=t(67294),ne=t(94184),j=t.n(ne),C=t(98423),m=t(65632),M=function(o,y){var d={};for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&y.indexOf(s)<0&&(d[s]=o[s]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,s=Object.getOwnPropertySymbols(o);E<s.length;E++)y.indexOf(s[E])<0&&Object.prototype.propertyIsEnumerable.call(o,s[E])&&(d[s[E]]=o[s[E]]);return d},F=function(y){var d=y.prefixCls,s=y.className,E=y.hoverable,De=E===void 0?!0:E,Ee=M(y,["prefixCls","className","hoverable"]);return i.createElement(m.C,null,function(pe){var me=pe.getPrefixCls,ye=me("card",d),q=j()("".concat(ye,"-grid"),s,(0,f.Z)({},"".concat(ye,"-grid-hoverable"),De));return i.createElement("div",(0,O.Z)({},Ee,{className:q}))})},N=F,r=function(o,y){var d={};for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&y.indexOf(s)<0&&(d[s]=o[s]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,s=Object.getOwnPropertySymbols(o);E<s.length;E++)y.indexOf(s[E])<0&&Object.prototype.propertyIsEnumerable.call(o,s[E])&&(d[s[E]]=o[s[E]]);return d},re=function(y){return i.createElement(m.C,null,function(d){var s=d.getPrefixCls,E=y.prefixCls,De=y.className,Ee=y.avatar,pe=y.title,me=y.description,ye=r(y,["prefixCls","className","avatar","title","description"]),q=s("card",E),ge=j()("".concat(q,"-meta"),De),Ze=Ee?i.createElement("div",{className:"".concat(q,"-meta-avatar")},Ee):null,Ce=pe?i.createElement("div",{className:"".concat(q,"-meta-title")},pe):null,Pe=me?i.createElement("div",{className:"".concat(q,"-meta-description")},me):null,he=Ce||Pe?i.createElement("div",{className:"".concat(q,"-meta-detail")},Ce,Pe):null;return i.createElement("div",(0,O.Z)({},ye,{className:ge}),Ze,he)})},B=re,ie=t(58634),ue=t(71230),b=t(15746),Se=t(97647),mt=function(o,y){var d={};for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&y.indexOf(s)<0&&(d[s]=o[s]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,s=Object.getOwnPropertySymbols(o);E<s.length;E++)y.indexOf(s[E])<0&&Object.prototype.propertyIsEnumerable.call(o,s[E])&&(d[s[E]]=o[s[E]]);return d};function qe(o){var y=o.map(function(d,s){return i.createElement("li",{style:{width:"".concat(100/o.length,"%")},key:"action-".concat(s)},i.createElement("span",null,d))});return y}var He=i.forwardRef(function(o,y){var d,s,E=i.useContext(m.E_),De=E.getPrefixCls,Ee=E.direction,pe=i.useContext(Se.Z),me=function(We){var se;(se=o.onTabChange)===null||se===void 0||se.call(o,We)},ye=function(){var We;return i.Children.forEach(o.children,function(se){se&&se.type&&se.type===N&&(We=!0)}),We},q=o.prefixCls,ge=o.className,Ze=o.extra,Ce=o.headStyle,Pe=Ce===void 0?{}:Ce,he=o.bodyStyle,we=he===void 0?{}:he,Le=o.title,tt=o.loading,at=o.bordered,yt=at===void 0?!0:at,nt=o.size,rt=o.type,ut=o.cover,Ge=o.actions,Ae=o.tabList,gt=o.children,Ne=o.activeTabKey,Ct=o.defaultActiveTabKey,lt=o.tabBarExtraContent,ht=o.hoverable,Ve=o.tabProps,bt=Ve===void 0?{}:Ve,je=mt(o,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),S=De("card",q),Je=we.padding===0||we.padding==="0px"?{padding:24}:void 0,G=i.createElement("div",{className:"".concat(S,"-loading-block")}),xt=i.createElement("div",{className:"".concat(S,"-loading-content"),style:Je},i.createElement(ue.Z,{gutter:8},i.createElement(b.Z,{span:22},G)),i.createElement(ue.Z,{gutter:8},i.createElement(b.Z,{span:8},G),i.createElement(b.Z,{span:15},G)),i.createElement(ue.Z,{gutter:8},i.createElement(b.Z,{span:6},G),i.createElement(b.Z,{span:18},G)),i.createElement(ue.Z,{gutter:8},i.createElement(b.Z,{span:13},G),i.createElement(b.Z,{span:9},G)),i.createElement(ue.Z,{gutter:8},i.createElement(b.Z,{span:4},G),i.createElement(b.Z,{span:3},G),i.createElement(b.Z,{span:16},G))),ot=Ne!==void 0,Ot=(0,O.Z)((0,O.Z)({},bt),(d={},(0,f.Z)(d,ot?"activeKey":"defaultActiveKey",ot?Ne:Ct),(0,f.Z)(d,"tabBarExtraContent",lt),d)),it,st=Ae&&Ae.length?i.createElement(ie.Z,(0,O.Z)({size:"large"},Ot,{className:"".concat(S,"-head-tabs"),onChange:me}),Ae.map(function(Te){return i.createElement(ie.Z.TabPane,{tab:Te.tab,disabled:Te.disabled,key:Te.key})})):null;(Le||Ze||st)&&(it=i.createElement("div",{className:"".concat(S,"-head"),style:Pe},i.createElement("div",{className:"".concat(S,"-head-wrapper")},Le&&i.createElement("div",{className:"".concat(S,"-head-title")},Le),Ze&&i.createElement("div",{className:"".concat(S,"-extra")},Ze)),st));var Ft=ut?i.createElement("div",{className:"".concat(S,"-cover")},ut):null,Ie=i.createElement("div",{className:"".concat(S,"-body"),style:we},tt?xt:gt),ct=Ge&&Ge.length?i.createElement("ul",{className:"".concat(S,"-actions")},qe(Ge)):null,Bt=(0,C.Z)(je,["onTabChange"]),dt=nt||pe,Ke=j()(S,(s={},(0,f.Z)(s,"".concat(S,"-loading"),tt),(0,f.Z)(s,"".concat(S,"-bordered"),yt),(0,f.Z)(s,"".concat(S,"-hoverable"),ht),(0,f.Z)(s,"".concat(S,"-contain-grid"),ye()),(0,f.Z)(s,"".concat(S,"-contain-tabs"),Ae&&Ae.length),(0,f.Z)(s,"".concat(S,"-").concat(dt),dt),(0,f.Z)(s,"".concat(S,"-type-").concat(rt),!!rt),(0,f.Z)(s,"".concat(S,"-rtl"),Ee==="rtl"),s),ge);return i.createElement("div",(0,O.Z)({ref:y},Bt,{className:Ke}),it,Ft,Ie,ct)});He.Grid=N,He.Meta=B;var et=He},58024:function($,h,t){"use strict";var f=t(38663),O=t.n(f),i=t(70347),ne=t.n(i),j=t(18106),C=t(13062),m=t(89032)},15746:function($,h,t){"use strict";var f=t(21584);h.Z=f.Z},89032:function($,h,t){"use strict";var f=t(38663),O=t.n(f),i=t(6999)},71230:function($,h,t){"use strict";var f=t(92820);h.Z=f.Z},13062:function($,h,t){"use strict";var f=t(38663),O=t.n(f),i=t(6999)},20640:function($,h,t){"use strict";var f=t(11742),O={"text/plain":"Text","text/html":"Url",default:"Text"},i="Copy to clipboard: #{key}, Enter";function ne(C){var m=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return C.replace(/#{\s*key\s*}/g,m)}function j(C,m){var M,F,N,r,re,B,ie=!1;m||(m={}),M=m.debug||!1;try{N=f(),r=document.createRange(),re=document.getSelection(),B=document.createElement("span"),B.textContent=C,B.style.all="unset",B.style.position="fixed",B.style.top=0,B.style.clip="rect(0, 0, 0, 0)",B.style.whiteSpace="pre",B.style.webkitUserSelect="text",B.style.MozUserSelect="text",B.style.msUserSelect="text",B.style.userSelect="text",B.addEventListener("copy",function(b){if(b.stopPropagation(),m.format)if(b.preventDefault(),typeof b.clipboardData=="undefined"){M&&console.warn("unable to use e.clipboardData"),M&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var Se=O[m.format]||O.default;window.clipboardData.setData(Se,C)}else b.clipboardData.clearData(),b.clipboardData.setData(m.format,C);m.onCopy&&(b.preventDefault(),m.onCopy(b.clipboardData))}),document.body.appendChild(B),r.selectNodeContents(B),re.addRange(r);var ue=document.execCommand("copy");if(!ue)throw new Error("copy command was unsuccessful");ie=!0}catch(b){M&&console.error("unable to copy using execCommand: ",b),M&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(m.format||"text",C),m.onCopy&&m.onCopy(window.clipboardData),ie=!0}catch(Se){M&&console.error("unable to copy using clipboardData: ",Se),M&&console.error("falling back to prompt"),F=ne("message"in m?m.message:i),window.prompt(F,C)}}finally{re&&(typeof re.removeRange=="function"?re.removeRange(r):re.removeAllRanges()),B&&document.body.removeChild(B),N()}return ie}$.exports=j},79370:function($,h,t){"use strict";t.d(h,{G:function(){return ne}});var f=t(98924),O=function(C){if((0,f.Z)()&&window.document.documentElement){var m=Array.isArray(C)?C:[C],M=window.document.documentElement;return m.some(function(F){return F in M.style})}return!1},i=function(C,m){if(!O(C))return!1;var M=document.createElement("div"),F=M.style[C];return M.style[C]=m,M.style[C]!==F};function ne(j,C){return!Array.isArray(j)&&C!==void 0?i(j,C):O(j)}},11742:function($){$.exports=function(){var h=document.getSelection();if(!h.rangeCount)return function(){};for(var t=document.activeElement,f=[],O=0;O<h.rangeCount;O++)f.push(h.getRangeAt(O));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return h.removeAllRanges(),function(){h.type==="Caret"&&h.removeAllRanges(),h.rangeCount||f.forEach(function(i){h.addRange(i)}),t&&t.focus()}}}}]);
