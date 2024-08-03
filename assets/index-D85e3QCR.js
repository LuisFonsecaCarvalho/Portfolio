var Od=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);import"swiper/swiper-bundle.css";var Gx=Od((jx,ea)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */(function(r,e){typeof ea=="object"&&typeof ea.exports=="object"?ea.exports=r.document?e(r,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return e(t)}:e(r)})(typeof window<"u"?window:void 0,function(r,e){var t=[],n=Object.getPrototypeOf,i=t.slice,s=t.flat?function(o){return t.flat.call(o)}:function(o){return t.concat.apply([],o)},a=t.push,c=t.indexOf,l={},h=l.toString,f=l.hasOwnProperty,p=f.toString,g=p.call(Object),v={},M=function(o){return typeof o=="function"&&typeof o.nodeType!="number"},E=function(o){return o!=null&&o===o.window},x=r.document,y={type:!0,src:!0,nonce:!0,noModule:!0};function D(o,u,m){var _,S,b=(m=m||x).createElement("script");if(b.text=o,u)for(_ in y)(S=u[_]||u.getAttribute&&u.getAttribute(_))&&b.setAttribute(_,S);m.head.appendChild(b).parentNode.removeChild(b)}function P(o){return o==null?o+"":typeof o=="object"||typeof o=="function"?l[h.call(o)]||"object":typeof o}var N="3.5.1",d=function(o,u){return new d.fn.init(o,u)};function F(o){var u=!!o&&"length"in o&&o.length,m=P(o);return!M(o)&&!E(o)&&(m==="array"||u===0||typeof u=="number"&&0<u&&u-1 in o)}d.fn=d.prototype={jquery:N,constructor:d,length:0,toArray:function(){return i.call(this)},get:function(o){return o==null?i.call(this):o<0?this[o+this.length]:this[o]},pushStack:function(o){var u=d.merge(this.constructor(),o);return u.prevObject=this,u},each:function(o){return d.each(this,o)},map:function(o){return this.pushStack(d.map(this,function(u,m){return o.call(u,m,u)}))},slice:function(){return this.pushStack(i.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(d.grep(this,function(o,u){return(u+1)%2}))},odd:function(){return this.pushStack(d.grep(this,function(o,u){return u%2}))},eq:function(o){var u=this.length,m=+o+(o<0?u:0);return this.pushStack(0<=m&&m<u?[this[m]]:[])},end:function(){return this.prevObject||this.constructor()},push:a,sort:t.sort,splice:t.splice},d.extend=d.fn.extend=function(){var o,u,m,_,S,b,w=arguments[0]||{},k=1,z=arguments.length,j=!1;for(typeof w=="boolean"&&(j=w,w=arguments[k]||{},k++),typeof w=="object"||M(w)||(w={}),k===z&&(w=this,k--);k<z;k++)if((o=arguments[k])!=null)for(u in o)_=o[u],u!=="__proto__"&&w!==_&&(j&&_&&(d.isPlainObject(_)||(S=Array.isArray(_)))?(m=w[u],b=S&&!Array.isArray(m)?[]:S||d.isPlainObject(m)?m:{},S=!1,w[u]=d.extend(j,b,_)):_!==void 0&&(w[u]=_));return w},d.extend({expando:"jQuery"+(N+Math.random()).replace(/\D/g,""),isReady:!0,error:function(o){throw new Error(o)},noop:function(){},isPlainObject:function(o){var u,m;return!(!o||h.call(o)!=="[object Object]")&&(!(u=n(o))||typeof(m=f.call(u,"constructor")&&u.constructor)=="function"&&p.call(m)===g)},isEmptyObject:function(o){var u;for(u in o)return!1;return!0},globalEval:function(o,u,m){D(o,{nonce:u&&u.nonce},m)},each:function(o,u){var m,_=0;if(F(o))for(m=o.length;_<m&&u.call(o[_],_,o[_])!==!1;_++);else for(_ in o)if(u.call(o[_],_,o[_])===!1)break;return o},makeArray:function(o,u){var m=u||[];return o!=null&&(F(Object(o))?d.merge(m,typeof o=="string"?[o]:o):a.call(m,o)),m},inArray:function(o,u,m){return u==null?-1:c.call(u,o,m)},merge:function(o,u){for(var m=+u.length,_=0,S=o.length;_<m;_++)o[S++]=u[_];return o.length=S,o},grep:function(o,u,m){for(var _=[],S=0,b=o.length,w=!m;S<b;S++)!u(o[S],S)!==w&&_.push(o[S]);return _},map:function(o,u,m){var _,S,b=0,w=[];if(F(o))for(_=o.length;b<_;b++)(S=u(o[b],b,m))!=null&&w.push(S);else for(b in o)(S=u(o[b],b,m))!=null&&w.push(S);return s(w)},guid:1,support:v}),typeof Symbol=="function"&&(d.fn[Symbol.iterator]=t[Symbol.iterator]),d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(o,u){l["[object "+u+"]"]=u.toLowerCase()});var O=function(o){var u,m,_,S,b,w,k,z,j,ie,de,J,se,Oe,qe,He,jt,cn,Hn,Nt="sizzle"+1*new Date,ht=o.document,Nn=0,Rt=0,qt=ao(),As=ao(),ro=ao(),zn=ao(),hr=function(C,B){return C===B&&(de=!0),0},wr={}.hasOwnProperty,Un=[],Rr=Un.pop,Zn=Un.push,Yt=Un.push,Vn=Un.slice,Gn=function(C,B){for(var W=0,he=C.length;W<he;W++)if(C[W]===B)return W;return-1},gi="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",dt="[\\x20\\t\\r\\n\\f]",Lt="(?:\\\\[\\da-fA-F]{1,6}"+dt+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",ln="\\["+dt+"*("+Lt+")(?:"+dt+"*([*^$|!~]?=)"+dt+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Lt+"))|)"+dt+"*\\]",Wn=":("+Lt+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+ln+")*)|.*)\\)|)",nn=new RegExp(dt+"+","g"),Xn=new RegExp("^"+dt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+dt+"+$","g"),Cr=new RegExp("^"+dt+"*,"+dt+"*"),so=new RegExp("^"+dt+"*([>+~]|"+dt+")"+dt+"*"),bd=new RegExp(dt+"|>"),Ad=new RegExp(Wn),wd=new RegExp("^"+Lt+"$"),oo={ID:new RegExp("^#("+Lt+")"),CLASS:new RegExp("^\\.("+Lt+")"),TAG:new RegExp("^("+Lt+"|[*])"),ATTR:new RegExp("^"+ln),PSEUDO:new RegExp("^"+Wn),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+dt+"*(even|odd|(([+-]|)(\\d*)n|)"+dt+"*(?:([+-]|)"+dt+"*(\\d+)|))"+dt+"*\\)|)","i"),bool:new RegExp("^(?:"+gi+")$","i"),needsContext:new RegExp("^"+dt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+dt+"*((?:-\\d)?\\d*)"+dt+"*\\)|)(?=[^-]|$)","i")},Rd=/HTML$/i,Cd=/^(?:input|select|textarea|button)$/i,Pd=/^h\d$/i,ws=/^[^{]+\{\s*\[native \w/,Ld=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ba=/[+~]/,wi=new RegExp("\\\\[\\da-fA-F]{1,6}"+dt+"?|\\\\([^\\r\\n\\f])","g"),Ri=function(C,B){var W="0x"+C.slice(1)-65536;return B||(W<0?String.fromCharCode(W+65536):String.fromCharCode(W>>10|55296,1023&W|56320))},Nl=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,Ul=function(C,B){return B?C==="\0"?"�":C.slice(0,-1)+"\\"+C.charCodeAt(C.length-1).toString(16)+" ":"\\"+C},Ol=function(){J()},Id=lo(function(C){return C.disabled===!0&&C.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{Yt.apply(Un=Vn.call(ht.childNodes),ht.childNodes),Un[ht.childNodes.length].nodeType}catch{Yt={apply:Un.length?function(B,W){Zn.apply(B,Vn.call(W))}:function(B,W){for(var he=B.length,Y=0;B[he++]=W[Y++];);B.length=he-1}}}function Ft(C,B,W,he){var Y,me,xe,Ae,Ne,lt,nt,st=B&&B.ownerDocument,Et=B?B.nodeType:9;if(W=W||[],typeof C!="string"||!C||Et!==1&&Et!==9&&Et!==11)return W;if(!he&&(J(B),B=B||se,qe)){if(Et!==11&&(Ne=Ld.exec(C)))if(Y=Ne[1]){if(Et===9){if(!(xe=B.getElementById(Y)))return W;if(xe.id===Y)return W.push(xe),W}else if(st&&(xe=st.getElementById(Y))&&Hn(B,xe)&&xe.id===Y)return W.push(xe),W}else{if(Ne[2])return Yt.apply(W,B.getElementsByTagName(C)),W;if((Y=Ne[3])&&m.getElementsByClassName&&B.getElementsByClassName)return Yt.apply(W,B.getElementsByClassName(Y)),W}if(m.qsa&&!zn[C+" "]&&(!He||!He.test(C))&&(Et!==1||B.nodeName.toLowerCase()!=="object")){if(nt=C,st=B,Et===1&&(bd.test(C)||so.test(C))){for((st=ba.test(C)&&wa(B.parentNode)||B)===B&&m.scope||((Ae=B.getAttribute("id"))?Ae=Ae.replace(Nl,Ul):B.setAttribute("id",Ae=Nt)),me=(lt=w(C)).length;me--;)lt[me]=(Ae?"#"+Ae:":scope")+" "+co(lt[me]);nt=lt.join(",")}try{return Yt.apply(W,st.querySelectorAll(nt)),W}catch{zn(C,!0)}finally{Ae===Nt&&B.removeAttribute("id")}}}return z(C.replace(Xn,"$1"),B,W,he)}function ao(){var C=[];return function B(W,he){return C.push(W+" ")>_.cacheLength&&delete B[C.shift()],B[W+" "]=he}}function ii(C){return C[Nt]=!0,C}function ri(C){var B=se.createElement("fieldset");try{return!!C(B)}catch{return!1}finally{B.parentNode&&B.parentNode.removeChild(B),B=null}}function Aa(C,B){for(var W=C.split("|"),he=W.length;he--;)_.attrHandle[W[he]]=B}function Fl(C,B){var W=B&&C,he=W&&C.nodeType===1&&B.nodeType===1&&C.sourceIndex-B.sourceIndex;if(he)return he;if(W){for(;W=W.nextSibling;)if(W===B)return-1}return C?1:-1}function Dd(C){return function(B){return B.nodeName.toLowerCase()==="input"&&B.type===C}}function Nd(C){return function(B){var W=B.nodeName.toLowerCase();return(W==="input"||W==="button")&&B.type===C}}function Bl(C){return function(B){return"form"in B?B.parentNode&&B.disabled===!1?"label"in B?"label"in B.parentNode?B.parentNode.disabled===C:B.disabled===C:B.isDisabled===C||B.isDisabled!==!C&&Id(B)===C:B.disabled===C:"label"in B&&B.disabled===C}}function dr(C){return ii(function(B){return B=+B,ii(function(W,he){for(var Y,me=C([],W.length,B),xe=me.length;xe--;)W[Y=me[xe]]&&(W[Y]=!(he[Y]=W[Y]))})})}function wa(C){return C&&typeof C.getElementsByTagName<"u"&&C}for(u in m=Ft.support={},b=Ft.isXML=function(C){var B=C.namespaceURI,W=(C.ownerDocument||C).documentElement;return!Rd.test(B||W&&W.nodeName||"HTML")},J=Ft.setDocument=function(C){var B,W,he=C?C.ownerDocument||C:ht;return he!=se&&he.nodeType===9&&he.documentElement&&(Oe=(se=he).documentElement,qe=!b(se),ht!=se&&(W=se.defaultView)&&W.top!==W&&(W.addEventListener?W.addEventListener("unload",Ol,!1):W.attachEvent&&W.attachEvent("onunload",Ol)),m.scope=ri(function(Y){return Oe.appendChild(Y).appendChild(se.createElement("div")),typeof Y.querySelectorAll<"u"&&!Y.querySelectorAll(":scope fieldset div").length}),m.attributes=ri(function(Y){return Y.className="i",!Y.getAttribute("className")}),m.getElementsByTagName=ri(function(Y){return Y.appendChild(se.createComment("")),!Y.getElementsByTagName("*").length}),m.getElementsByClassName=ws.test(se.getElementsByClassName),m.getById=ri(function(Y){return Oe.appendChild(Y).id=Nt,!se.getElementsByName||!se.getElementsByName(Nt).length}),m.getById?(_.filter.ID=function(Y){var me=Y.replace(wi,Ri);return function(xe){return xe.getAttribute("id")===me}},_.find.ID=function(Y,me){if(typeof me.getElementById<"u"&&qe){var xe=me.getElementById(Y);return xe?[xe]:[]}}):(_.filter.ID=function(Y){var me=Y.replace(wi,Ri);return function(xe){var Ae=typeof xe.getAttributeNode<"u"&&xe.getAttributeNode("id");return Ae&&Ae.value===me}},_.find.ID=function(Y,me){if(typeof me.getElementById<"u"&&qe){var xe,Ae,Ne,lt=me.getElementById(Y);if(lt){if((xe=lt.getAttributeNode("id"))&&xe.value===Y)return[lt];for(Ne=me.getElementsByName(Y),Ae=0;lt=Ne[Ae++];)if((xe=lt.getAttributeNode("id"))&&xe.value===Y)return[lt]}return[]}}),_.find.TAG=m.getElementsByTagName?function(Y,me){return typeof me.getElementsByTagName<"u"?me.getElementsByTagName(Y):m.qsa?me.querySelectorAll(Y):void 0}:function(Y,me){var xe,Ae=[],Ne=0,lt=me.getElementsByTagName(Y);if(Y==="*"){for(;xe=lt[Ne++];)xe.nodeType===1&&Ae.push(xe);return Ae}return lt},_.find.CLASS=m.getElementsByClassName&&function(Y,me){if(typeof me.getElementsByClassName<"u"&&qe)return me.getElementsByClassName(Y)},jt=[],He=[],(m.qsa=ws.test(se.querySelectorAll))&&(ri(function(Y){var me;Oe.appendChild(Y).innerHTML="<a id='"+Nt+"'></a><select id='"+Nt+"-\r\\' msallowcapture=''><option selected=''></option></select>",Y.querySelectorAll("[msallowcapture^='']").length&&He.push("[*^$]="+dt+`*(?:''|"")`),Y.querySelectorAll("[selected]").length||He.push("\\["+dt+"*(?:value|"+gi+")"),Y.querySelectorAll("[id~="+Nt+"-]").length||He.push("~="),(me=se.createElement("input")).setAttribute("name",""),Y.appendChild(me),Y.querySelectorAll("[name='']").length||He.push("\\["+dt+"*name"+dt+"*="+dt+`*(?:''|"")`),Y.querySelectorAll(":checked").length||He.push(":checked"),Y.querySelectorAll("a#"+Nt+"+*").length||He.push(".#.+[+~]"),Y.querySelectorAll("\\\f"),He.push("[\\r\\n\\f]")}),ri(function(Y){Y.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var me=se.createElement("input");me.setAttribute("type","hidden"),Y.appendChild(me).setAttribute("name","D"),Y.querySelectorAll("[name=d]").length&&He.push("name"+dt+"*[*^$|!~]?="),Y.querySelectorAll(":enabled").length!==2&&He.push(":enabled",":disabled"),Oe.appendChild(Y).disabled=!0,Y.querySelectorAll(":disabled").length!==2&&He.push(":enabled",":disabled"),Y.querySelectorAll("*,:x"),He.push(",.*:")})),(m.matchesSelector=ws.test(cn=Oe.matches||Oe.webkitMatchesSelector||Oe.mozMatchesSelector||Oe.oMatchesSelector||Oe.msMatchesSelector))&&ri(function(Y){m.disconnectedMatch=cn.call(Y,"*"),cn.call(Y,"[s!='']:x"),jt.push("!=",Wn)}),He=He.length&&new RegExp(He.join("|")),jt=jt.length&&new RegExp(jt.join("|")),B=ws.test(Oe.compareDocumentPosition),Hn=B||ws.test(Oe.contains)?function(Y,me){var xe=Y.nodeType===9?Y.documentElement:Y,Ae=me&&me.parentNode;return Y===Ae||!(!Ae||Ae.nodeType!==1||!(xe.contains?xe.contains(Ae):Y.compareDocumentPosition&&16&Y.compareDocumentPosition(Ae)))}:function(Y,me){if(me){for(;me=me.parentNode;)if(me===Y)return!0}return!1},hr=B?function(Y,me){if(Y===me)return de=!0,0;var xe=!Y.compareDocumentPosition-!me.compareDocumentPosition;return xe||(1&(xe=(Y.ownerDocument||Y)==(me.ownerDocument||me)?Y.compareDocumentPosition(me):1)||!m.sortDetached&&me.compareDocumentPosition(Y)===xe?Y==se||Y.ownerDocument==ht&&Hn(ht,Y)?-1:me==se||me.ownerDocument==ht&&Hn(ht,me)?1:ie?Gn(ie,Y)-Gn(ie,me):0:4&xe?-1:1)}:function(Y,me){if(Y===me)return de=!0,0;var xe,Ae=0,Ne=Y.parentNode,lt=me.parentNode,nt=[Y],st=[me];if(!Ne||!lt)return Y==se?-1:me==se?1:Ne?-1:lt?1:ie?Gn(ie,Y)-Gn(ie,me):0;if(Ne===lt)return Fl(Y,me);for(xe=Y;xe=xe.parentNode;)nt.unshift(xe);for(xe=me;xe=xe.parentNode;)st.unshift(xe);for(;nt[Ae]===st[Ae];)Ae++;return Ae?Fl(nt[Ae],st[Ae]):nt[Ae]==ht?-1:st[Ae]==ht?1:0}),se},Ft.matches=function(C,B){return Ft(C,null,null,B)},Ft.matchesSelector=function(C,B){if(J(C),m.matchesSelector&&qe&&!zn[B+" "]&&(!jt||!jt.test(B))&&(!He||!He.test(B)))try{var W=cn.call(C,B);if(W||m.disconnectedMatch||C.document&&C.document.nodeType!==11)return W}catch{zn(B,!0)}return 0<Ft(B,se,null,[C]).length},Ft.contains=function(C,B){return(C.ownerDocument||C)!=se&&J(C),Hn(C,B)},Ft.attr=function(C,B){(C.ownerDocument||C)!=se&&J(C);var W=_.attrHandle[B.toLowerCase()],he=W&&wr.call(_.attrHandle,B.toLowerCase())?W(C,B,!qe):void 0;return he!==void 0?he:m.attributes||!qe?C.getAttribute(B):(he=C.getAttributeNode(B))&&he.specified?he.value:null},Ft.escape=function(C){return(C+"").replace(Nl,Ul)},Ft.error=function(C){throw new Error("Syntax error, unrecognized expression: "+C)},Ft.uniqueSort=function(C){var B,W=[],he=0,Y=0;if(de=!m.detectDuplicates,ie=!m.sortStable&&C.slice(0),C.sort(hr),de){for(;B=C[Y++];)B===C[Y]&&(he=W.push(Y));for(;he--;)C.splice(W[he],1)}return ie=null,C},S=Ft.getText=function(C){var B,W="",he=0,Y=C.nodeType;if(Y){if(Y===1||Y===9||Y===11){if(typeof C.textContent=="string")return C.textContent;for(C=C.firstChild;C;C=C.nextSibling)W+=S(C)}else if(Y===3||Y===4)return C.nodeValue}else for(;B=C[he++];)W+=S(B);return W},(_=Ft.selectors={cacheLength:50,createPseudo:ii,match:oo,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(C){return C[1]=C[1].replace(wi,Ri),C[3]=(C[3]||C[4]||C[5]||"").replace(wi,Ri),C[2]==="~="&&(C[3]=" "+C[3]+" "),C.slice(0,4)},CHILD:function(C){return C[1]=C[1].toLowerCase(),C[1].slice(0,3)==="nth"?(C[3]||Ft.error(C[0]),C[4]=+(C[4]?C[5]+(C[6]||1):2*(C[3]==="even"||C[3]==="odd")),C[5]=+(C[7]+C[8]||C[3]==="odd")):C[3]&&Ft.error(C[0]),C},PSEUDO:function(C){var B,W=!C[6]&&C[2];return oo.CHILD.test(C[0])?null:(C[3]?C[2]=C[4]||C[5]||"":W&&Ad.test(W)&&(B=w(W,!0))&&(B=W.indexOf(")",W.length-B)-W.length)&&(C[0]=C[0].slice(0,B),C[2]=W.slice(0,B)),C.slice(0,3))}},filter:{TAG:function(C){var B=C.replace(wi,Ri).toLowerCase();return C==="*"?function(){return!0}:function(W){return W.nodeName&&W.nodeName.toLowerCase()===B}},CLASS:function(C){var B=qt[C+" "];return B||(B=new RegExp("(^|"+dt+")"+C+"("+dt+"|$)"))&&qt(C,function(W){return B.test(typeof W.className=="string"&&W.className||typeof W.getAttribute<"u"&&W.getAttribute("class")||"")})},ATTR:function(C,B,W){return function(he){var Y=Ft.attr(he,C);return Y==null?B==="!=":!B||(Y+="",B==="="?Y===W:B==="!="?Y!==W:B==="^="?W&&Y.indexOf(W)===0:B==="*="?W&&-1<Y.indexOf(W):B==="$="?W&&Y.slice(-W.length)===W:B==="~="?-1<(" "+Y.replace(nn," ")+" ").indexOf(W):B==="|="&&(Y===W||Y.slice(0,W.length+1)===W+"-"))}},CHILD:function(C,B,W,he,Y){var me=C.slice(0,3)!=="nth",xe=C.slice(-4)!=="last",Ae=B==="of-type";return he===1&&Y===0?function(Ne){return!!Ne.parentNode}:function(Ne,lt,nt){var st,Et,en,pt,un,pn,wn=me!==xe?"nextSibling":"previousSibling",Bt=Ne.parentNode,_i=Ae&&Ne.nodeName.toLowerCase(),Mn=!nt&&!Ae,rn=!1;if(Bt){if(me){for(;wn;){for(pt=Ne;pt=pt[wn];)if(Ae?pt.nodeName.toLowerCase()===_i:pt.nodeType===1)return!1;pn=wn=C==="only"&&!pn&&"nextSibling"}return!0}if(pn=[xe?Bt.firstChild:Bt.lastChild],xe&&Mn){for(rn=(un=(st=(Et=(en=(pt=Bt)[Nt]||(pt[Nt]={}))[pt.uniqueID]||(en[pt.uniqueID]={}))[C]||[])[0]===Nn&&st[1])&&st[2],pt=un&&Bt.childNodes[un];pt=++un&&pt&&pt[wn]||(rn=un=0)||pn.pop();)if(pt.nodeType===1&&++rn&&pt===Ne){Et[C]=[Nn,un,rn];break}}else if(Mn&&(rn=un=(st=(Et=(en=(pt=Ne)[Nt]||(pt[Nt]={}))[pt.uniqueID]||(en[pt.uniqueID]={}))[C]||[])[0]===Nn&&st[1]),rn===!1)for(;(pt=++un&&pt&&pt[wn]||(rn=un=0)||pn.pop())&&!((Ae?pt.nodeName.toLowerCase()===_i:pt.nodeType===1)&&++rn&&(Mn&&((Et=(en=pt[Nt]||(pt[Nt]={}))[pt.uniqueID]||(en[pt.uniqueID]={}))[C]=[Nn,rn]),pt===Ne)););return(rn-=Y)===he||rn%he==0&&0<=rn/he}}},PSEUDO:function(C,B){var W,he=_.pseudos[C]||_.setFilters[C.toLowerCase()]||Ft.error("unsupported pseudo: "+C);return he[Nt]?he(B):1<he.length?(W=[C,C,"",B],_.setFilters.hasOwnProperty(C.toLowerCase())?ii(function(Y,me){for(var xe,Ae=he(Y,B),Ne=Ae.length;Ne--;)Y[xe=Gn(Y,Ae[Ne])]=!(me[xe]=Ae[Ne])}):function(Y){return he(Y,0,W)}):he}},pseudos:{not:ii(function(C){var B=[],W=[],he=k(C.replace(Xn,"$1"));return he[Nt]?ii(function(Y,me,xe,Ae){for(var Ne,lt=he(Y,null,Ae,[]),nt=Y.length;nt--;)(Ne=lt[nt])&&(Y[nt]=!(me[nt]=Ne))}):function(Y,me,xe){return B[0]=Y,he(B,null,xe,W),B[0]=null,!W.pop()}}),has:ii(function(C){return function(B){return 0<Ft(C,B).length}}),contains:ii(function(C){return C=C.replace(wi,Ri),function(B){return-1<(B.textContent||S(B)).indexOf(C)}}),lang:ii(function(C){return wd.test(C||"")||Ft.error("unsupported lang: "+C),C=C.replace(wi,Ri).toLowerCase(),function(B){var W;do if(W=qe?B.lang:B.getAttribute("xml:lang")||B.getAttribute("lang"))return(W=W.toLowerCase())===C||W.indexOf(C+"-")===0;while((B=B.parentNode)&&B.nodeType===1);return!1}}),target:function(C){var B=o.location&&o.location.hash;return B&&B.slice(1)===C.id},root:function(C){return C===Oe},focus:function(C){return C===se.activeElement&&(!se.hasFocus||se.hasFocus())&&!!(C.type||C.href||~C.tabIndex)},enabled:Bl(!1),disabled:Bl(!0),checked:function(C){var B=C.nodeName.toLowerCase();return B==="input"&&!!C.checked||B==="option"&&!!C.selected},selected:function(C){return C.parentNode&&C.parentNode.selectedIndex,C.selected===!0},empty:function(C){for(C=C.firstChild;C;C=C.nextSibling)if(C.nodeType<6)return!1;return!0},parent:function(C){return!_.pseudos.empty(C)},header:function(C){return Pd.test(C.nodeName)},input:function(C){return Cd.test(C.nodeName)},button:function(C){var B=C.nodeName.toLowerCase();return B==="input"&&C.type==="button"||B==="button"},text:function(C){var B;return C.nodeName.toLowerCase()==="input"&&C.type==="text"&&((B=C.getAttribute("type"))==null||B.toLowerCase()==="text")},first:dr(function(){return[0]}),last:dr(function(C,B){return[B-1]}),eq:dr(function(C,B,W){return[W<0?W+B:W]}),even:dr(function(C,B){for(var W=0;W<B;W+=2)C.push(W);return C}),odd:dr(function(C,B){for(var W=1;W<B;W+=2)C.push(W);return C}),lt:dr(function(C,B,W){for(var he=W<0?W+B:B<W?B:W;0<=--he;)C.push(he);return C}),gt:dr(function(C,B,W){for(var he=W<0?W+B:W;++he<B;)C.push(he);return C})}}).pseudos.nth=_.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})_.pseudos[u]=Dd(u);for(u in{submit:!0,reset:!0})_.pseudos[u]=Nd(u);function kl(){}function co(C){for(var B=0,W=C.length,he="";B<W;B++)he+=C[B].value;return he}function lo(C,B,W){var he=B.dir,Y=B.next,me=Y||he,xe=W&&me==="parentNode",Ae=Rt++;return B.first?function(Ne,lt,nt){for(;Ne=Ne[he];)if(Ne.nodeType===1||xe)return C(Ne,lt,nt);return!1}:function(Ne,lt,nt){var st,Et,en,pt=[Nn,Ae];if(nt){for(;Ne=Ne[he];)if((Ne.nodeType===1||xe)&&C(Ne,lt,nt))return!0}else for(;Ne=Ne[he];)if(Ne.nodeType===1||xe)if(Et=(en=Ne[Nt]||(Ne[Nt]={}))[Ne.uniqueID]||(en[Ne.uniqueID]={}),Y&&Y===Ne.nodeName.toLowerCase())Ne=Ne[he]||Ne;else{if((st=Et[me])&&st[0]===Nn&&st[1]===Ae)return pt[2]=st[2];if((Et[me]=pt)[2]=C(Ne,lt,nt))return!0}return!1}}function Ra(C){return 1<C.length?function(B,W,he){for(var Y=C.length;Y--;)if(!C[Y](B,W,he))return!1;return!0}:C[0]}function uo(C,B,W,he,Y){for(var me,xe=[],Ae=0,Ne=C.length,lt=B!=null;Ae<Ne;Ae++)(me=C[Ae])&&(W&&!W(me,he,Y)||(xe.push(me),lt&&B.push(Ae)));return xe}function Ca(C,B,W,he,Y,me){return he&&!he[Nt]&&(he=Ca(he)),Y&&!Y[Nt]&&(Y=Ca(Y,me)),ii(function(xe,Ae,Ne,lt){var nt,st,Et,en=[],pt=[],un=Ae.length,pn=xe||function(_i,Mn,rn){for(var si=0,ho=Mn.length;si<ho;si++)Ft(_i,Mn[si],rn);return rn}(B||"*",Ne.nodeType?[Ne]:Ne,[]),wn=!C||!xe&&B?pn:uo(pn,en,C,Ne,lt),Bt=W?Y||(xe?C:un||he)?[]:Ae:wn;if(W&&W(wn,Bt,Ne,lt),he)for(nt=uo(Bt,pt),he(nt,[],Ne,lt),st=nt.length;st--;)(Et=nt[st])&&(Bt[pt[st]]=!(wn[pt[st]]=Et));if(xe){if(Y||C){if(Y){for(nt=[],st=Bt.length;st--;)(Et=Bt[st])&&nt.push(wn[st]=Et);Y(null,Bt=[],nt,lt)}for(st=Bt.length;st--;)(Et=Bt[st])&&-1<(nt=Y?Gn(xe,Et):en[st])&&(xe[nt]=!(Ae[nt]=Et))}}else Bt=uo(Bt===Ae?Bt.splice(un,Bt.length):Bt),Y?Y(null,Ae,Bt,lt):Yt.apply(Ae,Bt)})}function Pa(C){for(var B,W,he,Y=C.length,me=_.relative[C[0].type],xe=me||_.relative[" "],Ae=me?1:0,Ne=lo(function(st){return st===B},xe,!0),lt=lo(function(st){return-1<Gn(B,st)},xe,!0),nt=[function(st,Et,en){var pt=!me&&(en||Et!==j)||((B=Et).nodeType?Ne(st,Et,en):lt(st,Et,en));return B=null,pt}];Ae<Y;Ae++)if(W=_.relative[C[Ae].type])nt=[lo(Ra(nt),W)];else{if((W=_.filter[C[Ae].type].apply(null,C[Ae].matches))[Nt]){for(he=++Ae;he<Y&&!_.relative[C[he].type];he++);return Ca(1<Ae&&Ra(nt),1<Ae&&co(C.slice(0,Ae-1).concat({value:C[Ae-2].type===" "?"*":""})).replace(Xn,"$1"),W,Ae<he&&Pa(C.slice(Ae,he)),he<Y&&Pa(C=C.slice(he)),he<Y&&co(C))}nt.push(W)}return Ra(nt)}return kl.prototype=_.filters=_.pseudos,_.setFilters=new kl,w=Ft.tokenize=function(C,B){var W,he,Y,me,xe,Ae,Ne,lt=As[C+" "];if(lt)return B?0:lt.slice(0);for(xe=C,Ae=[],Ne=_.preFilter;xe;){for(me in W&&!(he=Cr.exec(xe))||(he&&(xe=xe.slice(he[0].length)||xe),Ae.push(Y=[])),W=!1,(he=so.exec(xe))&&(W=he.shift(),Y.push({value:W,type:he[0].replace(Xn," ")}),xe=xe.slice(W.length)),_.filter)!(he=oo[me].exec(xe))||Ne[me]&&!(he=Ne[me](he))||(W=he.shift(),Y.push({value:W,type:me,matches:he}),xe=xe.slice(W.length));if(!W)break}return B?xe.length:xe?Ft.error(C):As(C,Ae).slice(0)},k=Ft.compile=function(C,B){var W,he,Y,me,xe,Ae,Ne=[],lt=[],nt=ro[C+" "];if(!nt){for(B||(B=w(C)),W=B.length;W--;)(nt=Pa(B[W]))[Nt]?Ne.push(nt):lt.push(nt);(nt=ro(C,(he=lt,me=0<(Y=Ne).length,xe=0<he.length,Ae=function(st,Et,en,pt,un){var pn,wn,Bt,_i=0,Mn="0",rn=st&&[],si=[],ho=j,Hl=st||xe&&_.find.TAG("*",un),zl=Nn+=ho==null?1:Math.random()||.1,Ud=Hl.length;for(un&&(j=Et==se||Et||un);Mn!==Ud&&(pn=Hl[Mn])!=null;Mn++){if(xe&&pn){for(wn=0,Et||pn.ownerDocument==se||(J(pn),en=!qe);Bt=he[wn++];)if(Bt(pn,Et||se,en)){pt.push(pn);break}un&&(Nn=zl)}me&&((pn=!Bt&&pn)&&_i--,st&&rn.push(pn))}if(_i+=Mn,me&&Mn!==_i){for(wn=0;Bt=Y[wn++];)Bt(rn,si,Et,en);if(st){if(0<_i)for(;Mn--;)rn[Mn]||si[Mn]||(si[Mn]=Rr.call(pt));si=uo(si)}Yt.apply(pt,si),un&&!st&&0<si.length&&1<_i+Y.length&&Ft.uniqueSort(pt)}return un&&(Nn=zl,j=ho),rn},me?ii(Ae):Ae))).selector=C}return nt},z=Ft.select=function(C,B,W,he){var Y,me,xe,Ae,Ne,lt=typeof C=="function"&&C,nt=!he&&w(C=lt.selector||C);if(W=W||[],nt.length===1){if(2<(me=nt[0]=nt[0].slice(0)).length&&(xe=me[0]).type==="ID"&&B.nodeType===9&&qe&&_.relative[me[1].type]){if(!(B=(_.find.ID(xe.matches[0].replace(wi,Ri),B)||[])[0]))return W;lt&&(B=B.parentNode),C=C.slice(me.shift().value.length)}for(Y=oo.needsContext.test(C)?0:me.length;Y--&&(xe=me[Y],!_.relative[Ae=xe.type]);)if((Ne=_.find[Ae])&&(he=Ne(xe.matches[0].replace(wi,Ri),ba.test(me[0].type)&&wa(B.parentNode)||B))){if(me.splice(Y,1),!(C=he.length&&co(me)))return Yt.apply(W,he),W;break}}return(lt||k(C,nt))(he,B,!qe,W,!B||ba.test(C)&&wa(B.parentNode)||B),W},m.sortStable=Nt.split("").sort(hr).join("")===Nt,m.detectDuplicates=!!de,J(),m.sortDetached=ri(function(C){return 1&C.compareDocumentPosition(se.createElement("fieldset"))}),ri(function(C){return C.innerHTML="<a href='#'></a>",C.firstChild.getAttribute("href")==="#"})||Aa("type|href|height|width",function(C,B,W){if(!W)return C.getAttribute(B,B.toLowerCase()==="type"?1:2)}),m.attributes&&ri(function(C){return C.innerHTML="<input/>",C.firstChild.setAttribute("value",""),C.firstChild.getAttribute("value")===""})||Aa("value",function(C,B,W){if(!W&&C.nodeName.toLowerCase()==="input")return C.defaultValue}),ri(function(C){return C.getAttribute("disabled")==null})||Aa(gi,function(C,B,W){var he;if(!W)return C[B]===!0?B.toLowerCase():(he=C.getAttributeNode(B))&&he.specified?he.value:null}),Ft}(r);d.find=O,d.expr=O.selectors,d.expr[":"]=d.expr.pseudos,d.uniqueSort=d.unique=O.uniqueSort,d.text=O.getText,d.isXMLDoc=O.isXML,d.contains=O.contains,d.escapeSelector=O.escape;var q=function(o,u,m){for(var _=[],S=m!==void 0;(o=o[u])&&o.nodeType!==9;)if(o.nodeType===1){if(S&&d(o).is(m))break;_.push(o)}return _},I=function(o,u){for(var m=[];o;o=o.nextSibling)o.nodeType===1&&o!==u&&m.push(o);return m},R=d.expr.match.needsContext;function G(o,u){return o.nodeName&&o.nodeName.toLowerCase()===u.toLowerCase()}var oe=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Q(o,u,m){return M(u)?d.grep(o,function(_,S){return!!u.call(_,S,_)!==m}):u.nodeType?d.grep(o,function(_){return _===u!==m}):typeof u!="string"?d.grep(o,function(_){return-1<c.call(u,_)!==m}):d.filter(u,o,m)}d.filter=function(o,u,m){var _=u[0];return m&&(o=":not("+o+")"),u.length===1&&_.nodeType===1?d.find.matchesSelector(_,o)?[_]:[]:d.find.matches(o,d.grep(u,function(S){return S.nodeType===1}))},d.fn.extend({find:function(o){var u,m,_=this.length,S=this;if(typeof o!="string")return this.pushStack(d(o).filter(function(){for(u=0;u<_;u++)if(d.contains(S[u],this))return!0}));for(m=this.pushStack([]),u=0;u<_;u++)d.find(o,S[u],m);return 1<_?d.uniqueSort(m):m},filter:function(o){return this.pushStack(Q(this,o||[],!1))},not:function(o){return this.pushStack(Q(this,o||[],!0))},is:function(o){return!!Q(this,typeof o=="string"&&R.test(o)?d(o):o||[],!1).length}});var ce,fe=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(d.fn.init=function(o,u,m){var _,S;if(!o)return this;if(m=m||ce,typeof o=="string"){if(!(_=o[0]==="<"&&o[o.length-1]===">"&&3<=o.length?[null,o,null]:fe.exec(o))||!_[1]&&u)return!u||u.jquery?(u||m).find(o):this.constructor(u).find(o);if(_[1]){if(u=u instanceof d?u[0]:u,d.merge(this,d.parseHTML(_[1],u&&u.nodeType?u.ownerDocument||u:x,!0)),oe.test(_[1])&&d.isPlainObject(u))for(_ in u)M(this[_])?this[_](u[_]):this.attr(_,u[_]);return this}return(S=x.getElementById(_[2]))&&(this[0]=S,this.length=1),this}return o.nodeType?(this[0]=o,this.length=1,this):M(o)?m.ready!==void 0?m.ready(o):o(d):d.makeArray(o,this)}).prototype=d.fn,ce=d(x);var ae=/^(?:parents|prev(?:Until|All))/,ye={children:!0,contents:!0,next:!0,prev:!0};function le(o,u){for(;(o=o[u])&&o.nodeType!==1;);return o}d.fn.extend({has:function(o){var u=d(o,this),m=u.length;return this.filter(function(){for(var _=0;_<m;_++)if(d.contains(this,u[_]))return!0})},closest:function(o,u){var m,_=0,S=this.length,b=[],w=typeof o!="string"&&d(o);if(!R.test(o)){for(;_<S;_++)for(m=this[_];m&&m!==u;m=m.parentNode)if(m.nodeType<11&&(w?-1<w.index(m):m.nodeType===1&&d.find.matchesSelector(m,o))){b.push(m);break}}return this.pushStack(1<b.length?d.uniqueSort(b):b)},index:function(o){return o?typeof o=="string"?c.call(d(o),this[0]):c.call(this,o.jquery?o[0]:o):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(o,u){return this.pushStack(d.uniqueSort(d.merge(this.get(),d(o,u))))},addBack:function(o){return this.add(o==null?this.prevObject:this.prevObject.filter(o))}}),d.each({parent:function(o){var u=o.parentNode;return u&&u.nodeType!==11?u:null},parents:function(o){return q(o,"parentNode")},parentsUntil:function(o,u,m){return q(o,"parentNode",m)},next:function(o){return le(o,"nextSibling")},prev:function(o){return le(o,"previousSibling")},nextAll:function(o){return q(o,"nextSibling")},prevAll:function(o){return q(o,"previousSibling")},nextUntil:function(o,u,m){return q(o,"nextSibling",m)},prevUntil:function(o,u,m){return q(o,"previousSibling",m)},siblings:function(o){return I((o.parentNode||{}).firstChild,o)},children:function(o){return I(o.firstChild)},contents:function(o){return o.contentDocument!=null&&n(o.contentDocument)?o.contentDocument:(G(o,"template")&&(o=o.content||o),d.merge([],o.childNodes))}},function(o,u){d.fn[o]=function(m,_){var S=d.map(this,u,m);return o.slice(-5)!=="Until"&&(_=m),_&&typeof _=="string"&&(S=d.filter(_,S)),1<this.length&&(ye[o]||d.uniqueSort(S),ae.test(o)&&S.reverse()),this.pushStack(S)}});var be=/[^\x20\t\r\n\f]+/g;function Pe(o){return o}function Be(o){throw o}function vt(o,u,m,_){var S;try{o&&M(S=o.promise)?S.call(o).done(u).fail(m):o&&M(S=o.then)?S.call(o,u,m):u.apply(void 0,[o].slice(_))}catch(b){m.apply(void 0,[b])}}d.Callbacks=function(o){var u,m;o=typeof o=="string"?(u=o,m={},d.each(u.match(be)||[],function(J,se){m[se]=!0}),m):d.extend({},o);var _,S,b,w,k=[],z=[],j=-1,ie=function(){for(w=w||o.once,b=_=!0;z.length;j=-1)for(S=z.shift();++j<k.length;)k[j].apply(S[0],S[1])===!1&&o.stopOnFalse&&(j=k.length,S=!1);o.memory||(S=!1),_=!1,w&&(k=S?[]:"")},de={add:function(){return k&&(S&&!_&&(j=k.length-1,z.push(S)),function J(se){d.each(se,function(Oe,qe){M(qe)?o.unique&&de.has(qe)||k.push(qe):qe&&qe.length&&P(qe)!=="string"&&J(qe)})}(arguments),S&&!_&&ie()),this},remove:function(){return d.each(arguments,function(J,se){for(var Oe;-1<(Oe=d.inArray(se,k,Oe));)k.splice(Oe,1),Oe<=j&&j--}),this},has:function(J){return J?-1<d.inArray(J,k):0<k.length},empty:function(){return k&&(k=[]),this},disable:function(){return w=z=[],k=S="",this},disabled:function(){return!k},lock:function(){return w=z=[],S||_||(k=S=""),this},locked:function(){return!!w},fireWith:function(J,se){return w||(se=[J,(se=se||[]).slice?se.slice():se],z.push(se),_||ie()),this},fire:function(){return de.fireWith(this,arguments),this},fired:function(){return!!b}};return de},d.extend({Deferred:function(o){var u=[["notify","progress",d.Callbacks("memory"),d.Callbacks("memory"),2],["resolve","done",d.Callbacks("once memory"),d.Callbacks("once memory"),0,"resolved"],["reject","fail",d.Callbacks("once memory"),d.Callbacks("once memory"),1,"rejected"]],m="pending",_={state:function(){return m},always:function(){return S.done(arguments).fail(arguments),this},catch:function(b){return _.then(null,b)},pipe:function(){var b=arguments;return d.Deferred(function(w){d.each(u,function(k,z){var j=M(b[z[4]])&&b[z[4]];S[z[1]](function(){var ie=j&&j.apply(this,arguments);ie&&M(ie.promise)?ie.promise().progress(w.notify).done(w.resolve).fail(w.reject):w[z[0]+"With"](this,j?[ie]:arguments)})}),b=null}).promise()},then:function(b,w,k){var z=0;function j(ie,de,J,se){return function(){var Oe=this,qe=arguments,He=function(){var cn,Hn;if(!(ie<z)){if((cn=J.apply(Oe,qe))===de.promise())throw new TypeError("Thenable self-resolution");Hn=cn&&(typeof cn=="object"||typeof cn=="function")&&cn.then,M(Hn)?se?Hn.call(cn,j(z,de,Pe,se),j(z,de,Be,se)):(z++,Hn.call(cn,j(z,de,Pe,se),j(z,de,Be,se),j(z,de,Pe,de.notifyWith))):(J!==Pe&&(Oe=void 0,qe=[cn]),(se||de.resolveWith)(Oe,qe))}},jt=se?He:function(){try{He()}catch(cn){d.Deferred.exceptionHook&&d.Deferred.exceptionHook(cn,jt.stackTrace),z<=ie+1&&(J!==Be&&(Oe=void 0,qe=[cn]),de.rejectWith(Oe,qe))}};ie?jt():(d.Deferred.getStackHook&&(jt.stackTrace=d.Deferred.getStackHook()),r.setTimeout(jt))}}return d.Deferred(function(ie){u[0][3].add(j(0,ie,M(k)?k:Pe,ie.notifyWith)),u[1][3].add(j(0,ie,M(b)?b:Pe)),u[2][3].add(j(0,ie,M(w)?w:Be))}).promise()},promise:function(b){return b!=null?d.extend(b,_):_}},S={};return d.each(u,function(b,w){var k=w[2],z=w[5];_[w[1]]=k.add,z&&k.add(function(){m=z},u[3-b][2].disable,u[3-b][3].disable,u[0][2].lock,u[0][3].lock),k.add(w[3].fire),S[w[0]]=function(){return S[w[0]+"With"](this===S?void 0:this,arguments),this},S[w[0]+"With"]=k.fireWith}),_.promise(S),o&&o.call(S,S),S},when:function(o){var u=arguments.length,m=u,_=Array(m),S=i.call(arguments),b=d.Deferred(),w=function(k){return function(z){_[k]=this,S[k]=1<arguments.length?i.call(arguments):z,--u||b.resolveWith(_,S)}};if(u<=1&&(vt(o,b.done(w(m)).resolve,b.reject,!u),b.state()==="pending"||M(S[m]&&S[m].then)))return b.then();for(;m--;)vt(S[m],w(m),b.reject);return b.promise()}});var bt=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;d.Deferred.exceptionHook=function(o,u){r.console&&r.console.warn&&o&&bt.test(o.name)&&r.console.warn("jQuery.Deferred exception: "+o.message,o.stack,u)},d.readyException=function(o){r.setTimeout(function(){throw o})};var ue=d.Deferred();function Me(){x.removeEventListener("DOMContentLoaded",Me),r.removeEventListener("load",Me),d.ready()}d.fn.ready=function(o){return ue.then(o).catch(function(u){d.readyException(u)}),this},d.extend({isReady:!1,readyWait:1,ready:function(o){(o===!0?--d.readyWait:d.isReady)||(d.isReady=!0)!==o&&0<--d.readyWait||ue.resolveWith(x,[d])}}),d.ready.then=ue.then,x.readyState==="complete"||x.readyState!=="loading"&&!x.documentElement.doScroll?r.setTimeout(d.ready):(x.addEventListener("DOMContentLoaded",Me),r.addEventListener("load",Me));var Le=function(o,u,m,_,S,b,w){var k=0,z=o.length,j=m==null;if(P(m)==="object")for(k in S=!0,m)Le(o,u,k,m[k],!0,b,w);else if(_!==void 0&&(S=!0,M(_)||(w=!0),j&&(w?(u.call(o,_),u=null):(j=u,u=function(ie,de,J){return j.call(d(ie),J)})),u))for(;k<z;k++)u(o[k],m,w?_:_.call(o[k],k,u(o[k],m)));return S?o:j?u.call(o):z?u(o[0],m):b},Fe=/^-ms-/,ut=/-([a-z])/g;function ft(o,u){return u.toUpperCase()}function Je(o){return o.replace(Fe,"ms-").replace(ut,ft)}var Pt=function(o){return o.nodeType===1||o.nodeType===9||!+o.nodeType};function H(){this.expando=d.expando+H.uid++}H.uid=1,H.prototype={cache:function(o){var u=o[this.expando];return u||(u={},Pt(o)&&(o.nodeType?o[this.expando]=u:Object.defineProperty(o,this.expando,{value:u,configurable:!0}))),u},set:function(o,u,m){var _,S=this.cache(o);if(typeof u=="string")S[Je(u)]=m;else for(_ in u)S[Je(_)]=u[_];return S},get:function(o,u){return u===void 0?this.cache(o):o[this.expando]&&o[this.expando][Je(u)]},access:function(o,u,m){return u===void 0||u&&typeof u=="string"&&m===void 0?this.get(o,u):(this.set(o,u,m),m!==void 0?m:u)},remove:function(o,u){var m,_=o[this.expando];if(_!==void 0){if(u!==void 0)for(m=(u=Array.isArray(u)?u.map(Je):(u=Je(u))in _?[u]:u.match(be)||[]).length;m--;)delete _[u[m]];(u===void 0||d.isEmptyObject(_))&&(o.nodeType?o[this.expando]=void 0:delete o[this.expando])}},hasData:function(o){var u=o[this.expando];return u!==void 0&&!d.isEmptyObject(u)}};var Ie=new H,ot=new H,At=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,We=/[A-Z]/g;function Ht(o,u,m){var _,S;if(m===void 0&&o.nodeType===1)if(_="data-"+u.replace(We,"-$&").toLowerCase(),typeof(m=o.getAttribute(_))=="string"){try{m=(S=m)==="true"||S!=="false"&&(S==="null"?null:S===+S+""?+S:At.test(S)?JSON.parse(S):S)}catch{}ot.set(o,u,m)}else m=void 0;return m}d.extend({hasData:function(o){return ot.hasData(o)||Ie.hasData(o)},data:function(o,u,m){return ot.access(o,u,m)},removeData:function(o,u){ot.remove(o,u)},_data:function(o,u,m){return Ie.access(o,u,m)},_removeData:function(o,u){Ie.remove(o,u)}}),d.fn.extend({data:function(o,u){var m,_,S,b=this[0],w=b&&b.attributes;if(o===void 0){if(this.length&&(S=ot.get(b),b.nodeType===1&&!Ie.get(b,"hasDataAttrs"))){for(m=w.length;m--;)w[m]&&(_=w[m].name).indexOf("data-")===0&&(_=Je(_.slice(5)),Ht(b,_,S[_]));Ie.set(b,"hasDataAttrs",!0)}return S}return typeof o=="object"?this.each(function(){ot.set(this,o)}):Le(this,function(k){var z;if(b&&k===void 0)return(z=ot.get(b,o))!==void 0||(z=Ht(b,o))!==void 0?z:void 0;this.each(function(){ot.set(this,o,k)})},null,u,1<arguments.length,null,!0)},removeData:function(o){return this.each(function(){ot.remove(this,o)})}}),d.extend({queue:function(o,u,m){var _;if(o)return u=(u||"fx")+"queue",_=Ie.get(o,u),m&&(!_||Array.isArray(m)?_=Ie.access(o,u,d.makeArray(m)):_.push(m)),_||[]},dequeue:function(o,u){u=u||"fx";var m=d.queue(o,u),_=m.length,S=m.shift(),b=d._queueHooks(o,u);S==="inprogress"&&(S=m.shift(),_--),S&&(u==="fx"&&m.unshift("inprogress"),delete b.stop,S.call(o,function(){d.dequeue(o,u)},b)),!_&&b&&b.empty.fire()},_queueHooks:function(o,u){var m=u+"queueHooks";return Ie.get(o,m)||Ie.access(o,m,{empty:d.Callbacks("once memory").add(function(){Ie.remove(o,[u+"queue",m])})})}}),d.fn.extend({queue:function(o,u){var m=2;return typeof o!="string"&&(u=o,o="fx",m--),arguments.length<m?d.queue(this[0],o):u===void 0?this:this.each(function(){var _=d.queue(this,o,u);d._queueHooks(this,o),o==="fx"&&_[0]!=="inprogress"&&d.dequeue(this,o)})},dequeue:function(o){return this.each(function(){d.dequeue(this,o)})},clearQueue:function(o){return this.queue(o||"fx",[])},promise:function(o,u){var m,_=1,S=d.Deferred(),b=this,w=this.length,k=function(){--_||S.resolveWith(b,[b])};for(typeof o!="string"&&(u=o,o=void 0),o=o||"fx";w--;)(m=Ie.get(b[w],o+"queueHooks"))&&m.empty&&(_++,m.empty.add(k));return k(),S.promise(u)}});var it=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Qe=new RegExp("^(?:([+-])=|)("+it+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],A=x.documentElement,ee=function(o){return d.contains(o.ownerDocument,o)},_e={composed:!0};A.getRootNode&&(ee=function(o){return d.contains(o.ownerDocument,o)||o.getRootNode(_e)===o.ownerDocument});var ve=function(o,u){return(o=u||o).style.display==="none"||o.style.display===""&&ee(o)&&d.css(o,"display")==="none"};function pe(o,u,m,_){var S,b,w=20,k=_?function(){return _.cur()}:function(){return d.css(o,u,"")},z=k(),j=m&&m[3]||(d.cssNumber[u]?"":"px"),ie=o.nodeType&&(d.cssNumber[u]||j!=="px"&&+z)&&Qe.exec(d.css(o,u));if(ie&&ie[3]!==j){for(z/=2,j=j||ie[3],ie=+z||1;w--;)d.style(o,u,ie+j),(1-b)*(1-(b=k()/z||.5))<=0&&(w=0),ie/=b;ie*=2,d.style(o,u,ie+j),m=m||[]}return m&&(ie=+ie||+z||0,S=m[1]?ie+(m[1]+1)*m[2]:+m[2],_&&(_.unit=j,_.start=ie,_.end=S)),S}var Ye={};function Te(o,u){for(var m,_,S,b,w,k,z,j=[],ie=0,de=o.length;ie<de;ie++)(_=o[ie]).style&&(m=_.style.display,u?(m==="none"&&(j[ie]=Ie.get(_,"display")||null,j[ie]||(_.style.display="")),_.style.display===""&&ve(_)&&(j[ie]=(z=w=b=void 0,w=(S=_).ownerDocument,k=S.nodeName,(z=Ye[k])||(b=w.body.appendChild(w.createElement(k)),z=d.css(b,"display"),b.parentNode.removeChild(b),z==="none"&&(z="block"),Ye[k]=z)))):m!=="none"&&(j[ie]="none",Ie.set(_,"display",m)));for(ie=0;ie<de;ie++)j[ie]!=null&&(o[ie].style.display=j[ie]);return o}d.fn.extend({show:function(){return Te(this,!0)},hide:function(){return Te(this)},toggle:function(o){return typeof o=="boolean"?o?this.show():this.hide():this.each(function(){ve(this)?d(this).show():d(this).hide()})}});var Re,rt,Se=/^(?:checkbox|radio)$/i,Ue=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,xt=/^$|^module$|\/(?:java|ecma)script/i;Re=x.createDocumentFragment().appendChild(x.createElement("div")),(rt=x.createElement("input")).setAttribute("type","radio"),rt.setAttribute("checked","checked"),rt.setAttribute("name","t"),Re.appendChild(rt),v.checkClone=Re.cloneNode(!0).cloneNode(!0).lastChild.checked,Re.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!Re.cloneNode(!0).lastChild.defaultValue,Re.innerHTML="<option></option>",v.option=!!Re.lastChild;var Ve={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function we(o,u){var m;return m=typeof o.getElementsByTagName<"u"?o.getElementsByTagName(u||"*"):typeof o.querySelectorAll<"u"?o.querySelectorAll(u||"*"):[],u===void 0||u&&G(o,u)?d.merge([o],m):m}function et(o,u){for(var m=0,_=o.length;m<_;m++)Ie.set(o[m],"globalEval",!u||Ie.get(u[m],"globalEval"))}Ve.tbody=Ve.tfoot=Ve.colgroup=Ve.caption=Ve.thead,Ve.th=Ve.td,v.option||(Ve.optgroup=Ve.option=[1,"<select multiple='multiple'>","</select>"]);var at=/<|&#?\w+;/;function Ot(o,u,m,_,S){for(var b,w,k,z,j,ie,de=u.createDocumentFragment(),J=[],se=0,Oe=o.length;se<Oe;se++)if((b=o[se])||b===0)if(P(b)==="object")d.merge(J,b.nodeType?[b]:b);else if(at.test(b)){for(w=w||de.appendChild(u.createElement("div")),k=(Ue.exec(b)||["",""])[1].toLowerCase(),z=Ve[k]||Ve._default,w.innerHTML=z[1]+d.htmlPrefilter(b)+z[2],ie=z[0];ie--;)w=w.lastChild;d.merge(J,w.childNodes),(w=de.firstChild).textContent=""}else J.push(u.createTextNode(b));for(de.textContent="",se=0;b=J[se++];)if(_&&-1<d.inArray(b,_))S&&S.push(b);else if(j=ee(b),w=we(de.appendChild(b),"script"),j&&et(w),m)for(ie=0;b=w[ie++];)xt.test(b.type||"")&&m.push(b);return de}var T=/^key/,$=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Z=/^([^.]*)(?:\.(.+)|)/;function re(){return!0}function ge(){return!1}function Xe(o,u){return o===function(){try{return x.activeElement}catch{}}()==(u==="focus")}function tt(o,u,m,_,S,b){var w,k;if(typeof u=="object"){for(k in typeof m!="string"&&(_=_||m,m=void 0),u)tt(o,k,m,_,u[k],b);return o}if(_==null&&S==null?(S=m,_=m=void 0):S==null&&(typeof m=="string"?(S=_,_=void 0):(S=_,_=m,m=void 0)),S===!1)S=ge;else if(!S)return o;return b===1&&(w=S,(S=function(z){return d().off(z),w.apply(this,arguments)}).guid=w.guid||(w.guid=d.guid++)),o.each(function(){d.event.add(this,u,S,_,m)})}function kt(o,u,m){m?(Ie.set(o,u,!1),d.event.add(o,u,{namespace:!1,handler:function(_){var S,b,w=Ie.get(this,u);if(1&_.isTrigger&&this[u]){if(w.length)(d.event.special[u]||{}).delegateType&&_.stopPropagation();else if(w=i.call(arguments),Ie.set(this,u,w),S=m(this,u),this[u](),w!==(b=Ie.get(this,u))||S?Ie.set(this,u,!1):b={},w!==b)return _.stopImmediatePropagation(),_.preventDefault(),b.value}else w.length&&(Ie.set(this,u,{value:d.event.trigger(d.extend(w[0],d.Event.prototype),w.slice(1),this)}),_.stopImmediatePropagation())}})):Ie.get(o,u)===void 0&&d.event.add(o,u,re)}d.event={global:{},add:function(o,u,m,_,S){var b,w,k,z,j,ie,de,J,se,Oe,qe,He=Ie.get(o);if(Pt(o))for(m.handler&&(m=(b=m).handler,S=b.selector),S&&d.find.matchesSelector(A,S),m.guid||(m.guid=d.guid++),(z=He.events)||(z=He.events=Object.create(null)),(w=He.handle)||(w=He.handle=function(jt){return typeof d<"u"&&d.event.triggered!==jt.type?d.event.dispatch.apply(o,arguments):void 0}),j=(u=(u||"").match(be)||[""]).length;j--;)se=qe=(k=Z.exec(u[j])||[])[1],Oe=(k[2]||"").split(".").sort(),se&&(de=d.event.special[se]||{},se=(S?de.delegateType:de.bindType)||se,de=d.event.special[se]||{},ie=d.extend({type:se,origType:qe,data:_,handler:m,guid:m.guid,selector:S,needsContext:S&&d.expr.match.needsContext.test(S),namespace:Oe.join(".")},b),(J=z[se])||((J=z[se]=[]).delegateCount=0,de.setup&&de.setup.call(o,_,Oe,w)!==!1||o.addEventListener&&o.addEventListener(se,w)),de.add&&(de.add.call(o,ie),ie.handler.guid||(ie.handler.guid=m.guid)),S?J.splice(J.delegateCount++,0,ie):J.push(ie),d.event.global[se]=!0)},remove:function(o,u,m,_,S){var b,w,k,z,j,ie,de,J,se,Oe,qe,He=Ie.hasData(o)&&Ie.get(o);if(He&&(z=He.events)){for(j=(u=(u||"").match(be)||[""]).length;j--;)if(se=qe=(k=Z.exec(u[j])||[])[1],Oe=(k[2]||"").split(".").sort(),se){for(de=d.event.special[se]||{},J=z[se=(_?de.delegateType:de.bindType)||se]||[],k=k[2]&&new RegExp("(^|\\.)"+Oe.join("\\.(?:.*\\.|)")+"(\\.|$)"),w=b=J.length;b--;)ie=J[b],!S&&qe!==ie.origType||m&&m.guid!==ie.guid||k&&!k.test(ie.namespace)||_&&_!==ie.selector&&(_!=="**"||!ie.selector)||(J.splice(b,1),ie.selector&&J.delegateCount--,de.remove&&de.remove.call(o,ie));w&&!J.length&&(de.teardown&&de.teardown.call(o,Oe,He.handle)!==!1||d.removeEvent(o,se,He.handle),delete z[se])}else for(se in z)d.event.remove(o,se+u[j],m,_,!0);d.isEmptyObject(z)&&Ie.remove(o,"handle events")}},dispatch:function(o){var u,m,_,S,b,w,k=new Array(arguments.length),z=d.event.fix(o),j=(Ie.get(this,"events")||Object.create(null))[z.type]||[],ie=d.event.special[z.type]||{};for(k[0]=z,u=1;u<arguments.length;u++)k[u]=arguments[u];if(z.delegateTarget=this,!ie.preDispatch||ie.preDispatch.call(this,z)!==!1){for(w=d.event.handlers.call(this,z,j),u=0;(S=w[u++])&&!z.isPropagationStopped();)for(z.currentTarget=S.elem,m=0;(b=S.handlers[m++])&&!z.isImmediatePropagationStopped();)z.rnamespace&&b.namespace!==!1&&!z.rnamespace.test(b.namespace)||(z.handleObj=b,z.data=b.data,(_=((d.event.special[b.origType]||{}).handle||b.handler).apply(S.elem,k))!==void 0&&(z.result=_)===!1&&(z.preventDefault(),z.stopPropagation()));return ie.postDispatch&&ie.postDispatch.call(this,z),z.result}},handlers:function(o,u){var m,_,S,b,w,k=[],z=u.delegateCount,j=o.target;if(z&&j.nodeType&&!(o.type==="click"&&1<=o.button)){for(;j!==this;j=j.parentNode||this)if(j.nodeType===1&&(o.type!=="click"||j.disabled!==!0)){for(b=[],w={},m=0;m<z;m++)w[S=(_=u[m]).selector+" "]===void 0&&(w[S]=_.needsContext?-1<d(S,this).index(j):d.find(S,this,null,[j]).length),w[S]&&b.push(_);b.length&&k.push({elem:j,handlers:b})}}return j=this,z<u.length&&k.push({elem:j,handlers:u.slice(z)}),k},addProp:function(o,u){Object.defineProperty(d.Event.prototype,o,{enumerable:!0,configurable:!0,get:M(u)?function(){if(this.originalEvent)return u(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[o]},set:function(m){Object.defineProperty(this,o,{enumerable:!0,configurable:!0,writable:!0,value:m})}})},fix:function(o){return o[d.expando]?o:new d.Event(o)},special:{load:{noBubble:!0},click:{setup:function(o){var u=this||o;return Se.test(u.type)&&u.click&&G(u,"input")&&kt(u,"click",re),!1},trigger:function(o){var u=this||o;return Se.test(u.type)&&u.click&&G(u,"input")&&kt(u,"click"),!0},_default:function(o){var u=o.target;return Se.test(u.type)&&u.click&&G(u,"input")&&Ie.get(u,"click")||G(u,"a")}},beforeunload:{postDispatch:function(o){o.result!==void 0&&o.originalEvent&&(o.originalEvent.returnValue=o.result)}}}},d.removeEvent=function(o,u,m){o.removeEventListener&&o.removeEventListener(u,m)},d.Event=function(o,u){if(!(this instanceof d.Event))return new d.Event(o,u);o&&o.type?(this.originalEvent=o,this.type=o.type,this.isDefaultPrevented=o.defaultPrevented||o.defaultPrevented===void 0&&o.returnValue===!1?re:ge,this.target=o.target&&o.target.nodeType===3?o.target.parentNode:o.target,this.currentTarget=o.currentTarget,this.relatedTarget=o.relatedTarget):this.type=o,u&&d.extend(this,u),this.timeStamp=o&&o.timeStamp||Date.now(),this[d.expando]=!0},d.Event.prototype={constructor:d.Event,isDefaultPrevented:ge,isPropagationStopped:ge,isImmediatePropagationStopped:ge,isSimulated:!1,preventDefault:function(){var o=this.originalEvent;this.isDefaultPrevented=re,o&&!this.isSimulated&&o.preventDefault()},stopPropagation:function(){var o=this.originalEvent;this.isPropagationStopped=re,o&&!this.isSimulated&&o.stopPropagation()},stopImmediatePropagation:function(){var o=this.originalEvent;this.isImmediatePropagationStopped=re,o&&!this.isSimulated&&o.stopImmediatePropagation(),this.stopPropagation()}},d.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(o){var u=o.button;return o.which==null&&T.test(o.type)?o.charCode!=null?o.charCode:o.keyCode:!o.which&&u!==void 0&&$.test(o.type)?1&u?1:2&u?3:4&u?2:0:o.which}},d.event.addProp),d.each({focus:"focusin",blur:"focusout"},function(o,u){d.event.special[o]={setup:function(){return kt(this,o,Xe),!1},trigger:function(){return kt(this,o),!0},delegateType:u}}),d.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(o,u){d.event.special[o]={delegateType:u,bindType:u,handle:function(m){var _,S=m.relatedTarget,b=m.handleObj;return S&&(S===this||d.contains(this,S))||(m.type=b.origType,_=b.handler.apply(this,arguments),m.type=u),_}}}),d.fn.extend({on:function(o,u,m,_){return tt(this,o,u,m,_)},one:function(o,u,m,_){return tt(this,o,u,m,_,1)},off:function(o,u,m){var _,S;if(o&&o.preventDefault&&o.handleObj)return _=o.handleObj,d(o.delegateTarget).off(_.namespace?_.origType+"."+_.namespace:_.origType,_.selector,_.handler),this;if(typeof o=="object"){for(S in o)this.off(S,u,o[S]);return this}return u!==!1&&typeof u!="function"||(m=u,u=void 0),m===!1&&(m=ge),this.each(function(){d.event.remove(this,o,m,u)})}});var Jt=/<script|<style|<link/i,St=/checked\s*(?:[^=]|=\s*.checked.)/i,Qt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Wt(o,u){return G(o,"table")&&G(u.nodeType!==11?u:u.firstChild,"tr")&&d(o).children("tbody")[0]||o}function mi(o){return o.type=(o.getAttribute("type")!==null)+"/"+o.type,o}function on(o){return(o.type||"").slice(0,5)==="true/"?o.type=o.type.slice(5):o.removeAttribute("type"),o}function $n(o,u){var m,_,S,b,w,k;if(u.nodeType===1){if(Ie.hasData(o)&&(k=Ie.get(o).events))for(S in Ie.remove(u,"handle events"),k)for(m=0,_=k[S].length;m<_;m++)d.event.add(u,S,k[S][m]);ot.hasData(o)&&(b=ot.access(o),w=d.extend({},b),ot.set(u,w))}}function Dn(o,u,m,_){u=s(u);var S,b,w,k,z,j,ie=0,de=o.length,J=de-1,se=u[0],Oe=M(se);if(Oe||1<de&&typeof se=="string"&&!v.checkClone&&St.test(se))return o.each(function(qe){var He=o.eq(qe);Oe&&(u[0]=se.call(this,qe,He.html())),Dn(He,u,m,_)});if(de&&(b=(S=Ot(u,o[0].ownerDocument,!1,o,_)).firstChild,S.childNodes.length===1&&(S=b),b||_)){for(k=(w=d.map(we(S,"script"),mi)).length;ie<de;ie++)z=S,ie!==J&&(z=d.clone(z,!0,!0),k&&d.merge(w,we(z,"script"))),m.call(o[ie],z,ie);if(k)for(j=w[w.length-1].ownerDocument,d.map(w,on),ie=0;ie<k;ie++)z=w[ie],xt.test(z.type||"")&&!Ie.access(z,"globalEval")&&d.contains(j,z)&&(z.src&&(z.type||"").toLowerCase()!=="module"?d._evalUrl&&!z.noModule&&d._evalUrl(z.src,{nonce:z.nonce||z.getAttribute("nonce")},j):D(z.textContent.replace(Qt,""),z,j))}return o}function Gi(o,u,m){for(var _,S=u?d.filter(u,o):o,b=0;(_=S[b])!=null;b++)m||_.nodeType!==1||d.cleanData(we(_)),_.parentNode&&(m&&ee(_)&&et(we(_,"script")),_.parentNode.removeChild(_));return o}d.extend({htmlPrefilter:function(o){return o},clone:function(o,u,m){var _,S,b,w,k,z,j,ie=o.cloneNode(!0),de=ee(o);if(!(v.noCloneChecked||o.nodeType!==1&&o.nodeType!==11||d.isXMLDoc(o)))for(w=we(ie),_=0,S=(b=we(o)).length;_<S;_++)k=b[_],z=w[_],(j=z.nodeName.toLowerCase())==="input"&&Se.test(k.type)?z.checked=k.checked:j!=="input"&&j!=="textarea"||(z.defaultValue=k.defaultValue);if(u)if(m)for(b=b||we(o),w=w||we(ie),_=0,S=b.length;_<S;_++)$n(b[_],w[_]);else $n(o,ie);return 0<(w=we(ie,"script")).length&&et(w,!de&&we(o,"script")),ie},cleanData:function(o){for(var u,m,_,S=d.event.special,b=0;(m=o[b])!==void 0;b++)if(Pt(m)){if(u=m[Ie.expando]){if(u.events)for(_ in u.events)S[_]?d.event.remove(m,_):d.removeEvent(m,_,u.handle);m[Ie.expando]=void 0}m[ot.expando]&&(m[ot.expando]=void 0)}}}),d.fn.extend({detach:function(o){return Gi(this,o,!0)},remove:function(o){return Gi(this,o)},text:function(o){return Le(this,function(u){return u===void 0?d.text(this):this.empty().each(function(){this.nodeType!==1&&this.nodeType!==11&&this.nodeType!==9||(this.textContent=u)})},null,o,arguments.length)},append:function(){return Dn(this,arguments,function(o){this.nodeType!==1&&this.nodeType!==11&&this.nodeType!==9||Wt(this,o).appendChild(o)})},prepend:function(){return Dn(this,arguments,function(o){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var u=Wt(this,o);u.insertBefore(o,u.firstChild)}})},before:function(){return Dn(this,arguments,function(o){this.parentNode&&this.parentNode.insertBefore(o,this)})},after:function(){return Dn(this,arguments,function(o){this.parentNode&&this.parentNode.insertBefore(o,this.nextSibling)})},empty:function(){for(var o,u=0;(o=this[u])!=null;u++)o.nodeType===1&&(d.cleanData(we(o,!1)),o.textContent="");return this},clone:function(o,u){return o=o!=null&&o,u=u??o,this.map(function(){return d.clone(this,o,u)})},html:function(o){return Le(this,function(u){var m=this[0]||{},_=0,S=this.length;if(u===void 0&&m.nodeType===1)return m.innerHTML;if(typeof u=="string"&&!Jt.test(u)&&!Ve[(Ue.exec(u)||["",""])[1].toLowerCase()]){u=d.htmlPrefilter(u);try{for(;_<S;_++)(m=this[_]||{}).nodeType===1&&(d.cleanData(we(m,!1)),m.innerHTML=u);m=0}catch{}}m&&this.empty().append(u)},null,o,arguments.length)},replaceWith:function(){var o=[];return Dn(this,arguments,function(u){var m=this.parentNode;d.inArray(this,o)<0&&(d.cleanData(we(this)),m&&m.replaceChild(u,this))},o)}}),d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(o,u){d.fn[o]=function(m){for(var _,S=[],b=d(m),w=b.length-1,k=0;k<=w;k++)_=k===w?this:this.clone(!0),d(b[k])[u](_),a.apply(S,_.get());return this.pushStack(S)}});var Wi=new RegExp("^("+it+")(?!px)[a-z%]+$","i"),lr=function(o){var u=o.ownerDocument.defaultView;return u&&u.opener||(u=r),u.getComputedStyle(o)},ur=function(o,u,m){var _,S,b={};for(S in u)b[S]=o.style[S],o.style[S]=u[S];for(S in _=m.call(o),u)o.style[S]=b[S];return _},Qs=new RegExp(U.join("|"),"i");function Xi(o,u,m){var _,S,b,w,k=o.style;return(m=m||lr(o))&&((w=m.getPropertyValue(u)||m[u])!==""||ee(o)||(w=d.style(o,u)),!v.pixelBoxStyles()&&Wi.test(w)&&Qs.test(u)&&(_=k.width,S=k.minWidth,b=k.maxWidth,k.minWidth=k.maxWidth=k.width=w,w=m.width,k.width=_,k.minWidth=S,k.maxWidth=b)),w!==void 0?w+"":w}function eo(o,u){return{get:function(){if(!o())return(this.get=u).apply(this,arguments);delete this.get}}}(function(){function o(){if(j){z.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",j.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",A.appendChild(z).appendChild(j);var ie=r.getComputedStyle(j);m=ie.top!=="1%",k=u(ie.marginLeft)===12,j.style.right="60%",b=u(ie.right)===36,_=u(ie.width)===36,j.style.position="absolute",S=u(j.offsetWidth/3)===12,A.removeChild(z),j=null}}function u(ie){return Math.round(parseFloat(ie))}var m,_,S,b,w,k,z=x.createElement("div"),j=x.createElement("div");j.style&&(j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle=j.style.backgroundClip==="content-box",d.extend(v,{boxSizingReliable:function(){return o(),_},pixelBoxStyles:function(){return o(),b},pixelPosition:function(){return o(),m},reliableMarginLeft:function(){return o(),k},scrollboxSize:function(){return o(),S},reliableTrDimensions:function(){var ie,de,J,se;return w==null&&(ie=x.createElement("table"),de=x.createElement("tr"),J=x.createElement("div"),ie.style.cssText="position:absolute;left:-11111px",de.style.height="1px",J.style.height="9px",A.appendChild(ie).appendChild(de).appendChild(J),se=r.getComputedStyle(de),w=3<parseInt(se.height),A.removeChild(ie)),w}}))})();var to=["Webkit","Moz","ms"],no=x.createElement("div").style,L={};function X(o){var u=d.cssProps[o]||L[o];return u||(o in no?o:L[o]=function(m){for(var _=m[0].toUpperCase()+m.slice(1),S=to.length;S--;)if((m=to[S]+_)in no)return m}(o)||o)}var te=/^(none|table(?!-c[ea]).+)/,ne=/^--/,K={position:"absolute",visibility:"hidden",display:"block"},Ee={letterSpacing:"0",fontWeight:"400"};function De(o,u,m){var _=Qe.exec(u);return _?Math.max(0,_[2]-(m||0))+(_[3]||"px"):u}function ke(o,u,m,_,S,b){var w=u==="width"?1:0,k=0,z=0;if(m===(_?"border":"content"))return 0;for(;w<4;w+=2)m==="margin"&&(z+=d.css(o,m+U[w],!0,S)),_?(m==="content"&&(z-=d.css(o,"padding"+U[w],!0,S)),m!=="margin"&&(z-=d.css(o,"border"+U[w]+"Width",!0,S))):(z+=d.css(o,"padding"+U[w],!0,S),m!=="padding"?z+=d.css(o,"border"+U[w]+"Width",!0,S):k+=d.css(o,"border"+U[w]+"Width",!0,S));return!_&&0<=b&&(z+=Math.max(0,Math.ceil(o["offset"+u[0].toUpperCase()+u.slice(1)]-b-z-k-.5))||0),z}function ze(o,u,m){var _=lr(o),S=(!v.boxSizingReliable()||m)&&d.css(o,"boxSizing",!1,_)==="border-box",b=S,w=Xi(o,u,_),k="offset"+u[0].toUpperCase()+u.slice(1);if(Wi.test(w)){if(!m)return w;w="auto"}return(!v.boxSizingReliable()&&S||!v.reliableTrDimensions()&&G(o,"tr")||w==="auto"||!parseFloat(w)&&d.css(o,"display",!1,_)==="inline")&&o.getClientRects().length&&(S=d.css(o,"boxSizing",!1,_)==="border-box",(b=k in o)&&(w=o[k])),(w=parseFloat(w)||0)+ke(o,u,m||(S?"border":"content"),b,_,w)+"px"}function Ge(o,u,m,_,S){return new Ge.prototype.init(o,u,m,_,S)}d.extend({cssHooks:{opacity:{get:function(o,u){if(u){var m=Xi(o,"opacity");return m===""?"1":m}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(o,u,m,_){if(o&&o.nodeType!==3&&o.nodeType!==8&&o.style){var S,b,w,k=Je(u),z=ne.test(u),j=o.style;if(z||(u=X(k)),w=d.cssHooks[u]||d.cssHooks[k],m===void 0)return w&&"get"in w&&(S=w.get(o,!1,_))!==void 0?S:j[u];(b=typeof m)=="string"&&(S=Qe.exec(m))&&S[1]&&(m=pe(o,u,S),b="number"),m!=null&&m==m&&(b!=="number"||z||(m+=S&&S[3]||(d.cssNumber[k]?"":"px")),v.clearCloneStyle||m!==""||u.indexOf("background")!==0||(j[u]="inherit"),w&&"set"in w&&(m=w.set(o,m,_))===void 0||(z?j.setProperty(u,m):j[u]=m))}},css:function(o,u,m,_){var S,b,w,k=Je(u);return ne.test(u)||(u=X(k)),(w=d.cssHooks[u]||d.cssHooks[k])&&"get"in w&&(S=w.get(o,!0,m)),S===void 0&&(S=Xi(o,u,_)),S==="normal"&&u in Ee&&(S=Ee[u]),m===""||m?(b=parseFloat(S),m===!0||isFinite(b)?b||0:S):S}}),d.each(["height","width"],function(o,u){d.cssHooks[u]={get:function(m,_,S){if(_)return!te.test(d.css(m,"display"))||m.getClientRects().length&&m.getBoundingClientRect().width?ze(m,u,S):ur(m,K,function(){return ze(m,u,S)})},set:function(m,_,S){var b,w=lr(m),k=!v.scrollboxSize()&&w.position==="absolute",z=(k||S)&&d.css(m,"boxSizing",!1,w)==="border-box",j=S?ke(m,u,S,z,w):0;return z&&k&&(j-=Math.ceil(m["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(w[u])-ke(m,u,"border",!1,w)-.5)),j&&(b=Qe.exec(_))&&(b[3]||"px")!=="px"&&(m.style[u]=_,_=d.css(m,u)),De(0,_,j)}}}),d.cssHooks.marginLeft=eo(v.reliableMarginLeft,function(o,u){if(u)return(parseFloat(Xi(o,"marginLeft"))||o.getBoundingClientRect().left-ur(o,{marginLeft:0},function(){return o.getBoundingClientRect().left}))+"px"}),d.each({margin:"",padding:"",border:"Width"},function(o,u){d.cssHooks[o+u]={expand:function(m){for(var _=0,S={},b=typeof m=="string"?m.split(" "):[m];_<4;_++)S[o+U[_]+u]=b[_]||b[_-2]||b[0];return S}},o!=="margin"&&(d.cssHooks[o+u].set=De)}),d.fn.extend({css:function(o,u){return Le(this,function(m,_,S){var b,w,k={},z=0;if(Array.isArray(_)){for(b=lr(m),w=_.length;z<w;z++)k[_[z]]=d.css(m,_[z],!1,b);return k}return S!==void 0?d.style(m,_,S):d.css(m,_)},o,u,1<arguments.length)}}),((d.Tween=Ge).prototype={constructor:Ge,init:function(o,u,m,_,S,b){this.elem=o,this.prop=m,this.easing=S||d.easing._default,this.options=u,this.start=this.now=this.cur(),this.end=_,this.unit=b||(d.cssNumber[m]?"":"px")},cur:function(){var o=Ge.propHooks[this.prop];return o&&o.get?o.get(this):Ge.propHooks._default.get(this)},run:function(o){var u,m=Ge.propHooks[this.prop];return this.options.duration?this.pos=u=d.easing[this.easing](o,this.options.duration*o,0,1,this.options.duration):this.pos=u=o,this.now=(this.end-this.start)*u+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),m&&m.set?m.set(this):Ge.propHooks._default.set(this),this}}).init.prototype=Ge.prototype,(Ge.propHooks={_default:{get:function(o){var u;return o.elem.nodeType!==1||o.elem[o.prop]!=null&&o.elem.style[o.prop]==null?o.elem[o.prop]:(u=d.css(o.elem,o.prop,""))&&u!=="auto"?u:0},set:function(o){d.fx.step[o.prop]?d.fx.step[o.prop](o):o.elem.nodeType!==1||!d.cssHooks[o.prop]&&o.elem.style[X(o.prop)]==null?o.elem[o.prop]=o.now:d.style(o.elem,o.prop,o.now+o.unit)}}}).scrollTop=Ge.propHooks.scrollLeft={set:function(o){o.elem.nodeType&&o.elem.parentNode&&(o.elem[o.prop]=o.now)}},d.easing={linear:function(o){return o},swing:function(o){return .5-Math.cos(o*Math.PI)/2},_default:"swing"},d.fx=Ge.prototype.init,d.fx.step={};var $e,Ke,yt,zt,Gt=/^(?:toggle|show|hide)$/,An=/queueHooks$/;function Tt(){Ke&&(x.hidden===!1&&r.requestAnimationFrame?r.requestAnimationFrame(Tt):r.setTimeout(Tt,d.fx.interval),d.fx.tick())}function je(){return r.setTimeout(function(){$e=void 0}),$e=Date.now()}function $t(o,u){var m,_=0,S={height:o};for(u=u?1:0;_<4;_+=2-u)S["margin"+(m=U[_])]=S["padding"+m]=o;return u&&(S.opacity=S.width=o),S}function wt(o,u,m){for(var _,S=(Xt.tweeners[u]||[]).concat(Xt.tweeners["*"]),b=0,w=S.length;b<w;b++)if(_=S[b].call(m,u,o))return _}function Xt(o,u,m){var _,S,b=0,w=Xt.prefilters.length,k=d.Deferred().always(function(){delete z.elem}),z=function(){if(S)return!1;for(var de=$e||je(),J=Math.max(0,j.startTime+j.duration-de),se=1-(J/j.duration||0),Oe=0,qe=j.tweens.length;Oe<qe;Oe++)j.tweens[Oe].run(se);return k.notifyWith(o,[j,se,J]),se<1&&qe?J:(qe||k.notifyWith(o,[j,1,0]),k.resolveWith(o,[j]),!1)},j=k.promise({elem:o,props:d.extend({},u),opts:d.extend(!0,{specialEasing:{},easing:d.easing._default},m),originalProperties:u,originalOptions:m,startTime:$e||je(),duration:m.duration,tweens:[],createTween:function(de,J){var se=d.Tween(o,j.opts,de,J,j.opts.specialEasing[de]||j.opts.easing);return j.tweens.push(se),se},stop:function(de){var J=0,se=de?j.tweens.length:0;if(S)return this;for(S=!0;J<se;J++)j.tweens[J].run(1);return de?(k.notifyWith(o,[j,1,0]),k.resolveWith(o,[j,de])):k.rejectWith(o,[j,de]),this}}),ie=j.props;for(!function(de,J){var se,Oe,qe,He,jt;for(se in de)if(qe=J[Oe=Je(se)],He=de[se],Array.isArray(He)&&(qe=He[1],He=de[se]=He[0]),se!==Oe&&(de[Oe]=He,delete de[se]),(jt=d.cssHooks[Oe])&&"expand"in jt)for(se in He=jt.expand(He),delete de[Oe],He)se in de||(de[se]=He[se],J[se]=qe);else J[Oe]=qe}(ie,j.opts.specialEasing);b<w;b++)if(_=Xt.prefilters[b].call(j,o,ie,j.opts))return M(_.stop)&&(d._queueHooks(j.elem,j.opts.queue).stop=_.stop.bind(_)),_;return d.map(ie,wt,j),M(j.opts.start)&&j.opts.start.call(o,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),d.fx.timer(d.extend(z,{elem:o,anim:j,queue:j.opts.queue})),j}d.Animation=d.extend(Xt,{tweeners:{"*":[function(o,u){var m=this.createTween(o,u);return pe(m.elem,o,Qe.exec(u),m),m}]},tweener:function(o,u){M(o)?(u=o,o=["*"]):o=o.match(be);for(var m,_=0,S=o.length;_<S;_++)m=o[_],Xt.tweeners[m]=Xt.tweeners[m]||[],Xt.tweeners[m].unshift(u)},prefilters:[function(o,u,m){var _,S,b,w,k,z,j,ie,de="width"in u||"height"in u,J=this,se={},Oe=o.style,qe=o.nodeType&&ve(o),He=Ie.get(o,"fxshow");for(_ in m.queue||((w=d._queueHooks(o,"fx")).unqueued==null&&(w.unqueued=0,k=w.empty.fire,w.empty.fire=function(){w.unqueued||k()}),w.unqueued++,J.always(function(){J.always(function(){w.unqueued--,d.queue(o,"fx").length||w.empty.fire()})})),u)if(S=u[_],Gt.test(S)){if(delete u[_],b=b||S==="toggle",S===(qe?"hide":"show")){if(S!=="show"||!He||He[_]===void 0)continue;qe=!0}se[_]=He&&He[_]||d.style(o,_)}if((z=!d.isEmptyObject(u))||!d.isEmptyObject(se))for(_ in de&&o.nodeType===1&&(m.overflow=[Oe.overflow,Oe.overflowX,Oe.overflowY],(j=He&&He.display)==null&&(j=Ie.get(o,"display")),(ie=d.css(o,"display"))==="none"&&(j?ie=j:(Te([o],!0),j=o.style.display||j,ie=d.css(o,"display"),Te([o]))),(ie==="inline"||ie==="inline-block"&&j!=null)&&d.css(o,"float")==="none"&&(z||(J.done(function(){Oe.display=j}),j==null&&(ie=Oe.display,j=ie==="none"?"":ie)),Oe.display="inline-block")),m.overflow&&(Oe.overflow="hidden",J.always(function(){Oe.overflow=m.overflow[0],Oe.overflowX=m.overflow[1],Oe.overflowY=m.overflow[2]})),z=!1,se)z||(He?"hidden"in He&&(qe=He.hidden):He=Ie.access(o,"fxshow",{display:j}),b&&(He.hidden=!qe),qe&&Te([o],!0),J.done(function(){for(_ in qe||Te([o]),Ie.remove(o,"fxshow"),se)d.style(o,_,se[_])})),z=wt(qe?He[_]:0,_,J),_ in He||(He[_]=z.start,qe&&(z.end=z.start,z.start=0))}],prefilter:function(o,u){u?Xt.prefilters.unshift(o):Xt.prefilters.push(o)}}),d.speed=function(o,u,m){var _=o&&typeof o=="object"?d.extend({},o):{complete:m||!m&&u||M(o)&&o,duration:o,easing:m&&u||u&&!M(u)&&u};return d.fx.off?_.duration=0:typeof _.duration!="number"&&(_.duration in d.fx.speeds?_.duration=d.fx.speeds[_.duration]:_.duration=d.fx.speeds._default),_.queue!=null&&_.queue!==!0||(_.queue="fx"),_.old=_.complete,_.complete=function(){M(_.old)&&_.old.call(this),_.queue&&d.dequeue(this,_.queue)},_},d.fn.extend({fadeTo:function(o,u,m,_){return this.filter(ve).css("opacity",0).show().end().animate({opacity:u},o,m,_)},animate:function(o,u,m,_){var S=d.isEmptyObject(o),b=d.speed(u,m,_),w=function(){var k=Xt(this,d.extend({},o),b);(S||Ie.get(this,"finish"))&&k.stop(!0)};return w.finish=w,S||b.queue===!1?this.each(w):this.queue(b.queue,w)},stop:function(o,u,m){var _=function(S){var b=S.stop;delete S.stop,b(m)};return typeof o!="string"&&(m=u,u=o,o=void 0),u&&this.queue(o||"fx",[]),this.each(function(){var S=!0,b=o!=null&&o+"queueHooks",w=d.timers,k=Ie.get(this);if(b)k[b]&&k[b].stop&&_(k[b]);else for(b in k)k[b]&&k[b].stop&&An.test(b)&&_(k[b]);for(b=w.length;b--;)w[b].elem!==this||o!=null&&w[b].queue!==o||(w[b].anim.stop(m),S=!1,w.splice(b,1));!S&&m||d.dequeue(this,o)})},finish:function(o){return o!==!1&&(o=o||"fx"),this.each(function(){var u,m=Ie.get(this),_=m[o+"queue"],S=m[o+"queueHooks"],b=d.timers,w=_?_.length:0;for(m.finish=!0,d.queue(this,o,[]),S&&S.stop&&S.stop.call(this,!0),u=b.length;u--;)b[u].elem===this&&b[u].queue===o&&(b[u].anim.stop(!0),b.splice(u,1));for(u=0;u<w;u++)_[u]&&_[u].finish&&_[u].finish.call(this);delete m.finish})}}),d.each(["toggle","show","hide"],function(o,u){var m=d.fn[u];d.fn[u]=function(_,S,b){return _==null||typeof _=="boolean"?m.apply(this,arguments):this.animate($t(u,!0),_,S,b)}}),d.each({slideDown:$t("show"),slideUp:$t("hide"),slideToggle:$t("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(o,u){d.fn[o]=function(m,_,S){return this.animate(u,m,_,S)}}),d.timers=[],d.fx.tick=function(){var o,u=0,m=d.timers;for($e=Date.now();u<m.length;u++)(o=m[u])()||m[u]!==o||m.splice(u--,1);m.length||d.fx.stop(),$e=void 0},d.fx.timer=function(o){d.timers.push(o),d.fx.start()},d.fx.interval=13,d.fx.start=function(){Ke||(Ke=!0,Tt())},d.fx.stop=function(){Ke=null},d.fx.speeds={slow:600,fast:200,_default:400},d.fn.delay=function(o,u){return o=d.fx&&d.fx.speeds[o]||o,u=u||"fx",this.queue(u,function(m,_){var S=r.setTimeout(m,o);_.stop=function(){r.clearTimeout(S)}})},yt=x.createElement("input"),zt=x.createElement("select").appendChild(x.createElement("option")),yt.type="checkbox",v.checkOn=yt.value!=="",v.optSelected=zt.selected,(yt=x.createElement("input")).value="t",yt.type="radio",v.radioValue=yt.value==="t";var Ai,an=d.expr.attrHandle;d.fn.extend({attr:function(o,u){return Le(this,d.attr,o,u,1<arguments.length)},removeAttr:function(o){return this.each(function(){d.removeAttr(this,o)})}}),d.extend({attr:function(o,u,m){var _,S,b=o.nodeType;if(b!==3&&b!==8&&b!==2)return typeof o.getAttribute>"u"?d.prop(o,u,m):(b===1&&d.isXMLDoc(o)||(S=d.attrHooks[u.toLowerCase()]||(d.expr.match.bool.test(u)?Ai:void 0)),m!==void 0?m===null?void d.removeAttr(o,u):S&&"set"in S&&(_=S.set(o,m,u))!==void 0?_:(o.setAttribute(u,m+""),m):S&&"get"in S&&(_=S.get(o,u))!==null?_:(_=d.find.attr(o,u))==null?void 0:_)},attrHooks:{type:{set:function(o,u){if(!v.radioValue&&u==="radio"&&G(o,"input")){var m=o.value;return o.setAttribute("type",u),m&&(o.value=m),u}}}},removeAttr:function(o,u){var m,_=0,S=u&&u.match(be);if(S&&o.nodeType===1)for(;m=S[_++];)o.removeAttribute(m)}}),Ai={set:function(o,u,m){return u===!1?d.removeAttr(o,m):o.setAttribute(m,m),m}},d.each(d.expr.match.bool.source.match(/\w+/g),function(o,u){var m=an[u]||d.find.attr;an[u]=function(_,S,b){var w,k,z=S.toLowerCase();return b||(k=an[z],an[z]=w,w=m(_,S,b)!=null?z:null,an[z]=k),w}});var Ms=/^(?:input|select|textarea|button)$/i,Zt=/^(?:a|area)$/i;function xn(o){return(o.match(be)||[]).join(" ")}function ni(o){return o.getAttribute&&o.getAttribute("class")||""}function yn(o){return Array.isArray(o)?o:typeof o=="string"&&o.match(be)||[]}d.fn.extend({prop:function(o,u){return Le(this,d.prop,o,u,1<arguments.length)},removeProp:function(o){return this.each(function(){delete this[d.propFix[o]||o]})}}),d.extend({prop:function(o,u,m){var _,S,b=o.nodeType;if(b!==3&&b!==8&&b!==2)return b===1&&d.isXMLDoc(o)||(u=d.propFix[u]||u,S=d.propHooks[u]),m!==void 0?S&&"set"in S&&(_=S.set(o,m,u))!==void 0?_:o[u]=m:S&&"get"in S&&(_=S.get(o,u))!==null?_:o[u]},propHooks:{tabIndex:{get:function(o){var u=d.find.attr(o,"tabindex");return u?parseInt(u,10):Ms.test(o.nodeName)||Zt.test(o.nodeName)&&o.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),v.optSelected||(d.propHooks.selected={get:function(o){var u=o.parentNode;return u&&u.parentNode&&u.parentNode.selectedIndex,null},set:function(o){var u=o.parentNode;u&&(u.selectedIndex,u.parentNode&&u.parentNode.selectedIndex)}}),d.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){d.propFix[this.toLowerCase()]=this}),d.fn.extend({addClass:function(o){var u,m,_,S,b,w,k,z=0;if(M(o))return this.each(function(j){d(this).addClass(o.call(this,j,ni(this)))});if((u=yn(o)).length){for(;m=this[z++];)if(S=ni(m),_=m.nodeType===1&&" "+xn(S)+" "){for(w=0;b=u[w++];)_.indexOf(" "+b+" ")<0&&(_+=b+" ");S!==(k=xn(_))&&m.setAttribute("class",k)}}return this},removeClass:function(o){var u,m,_,S,b,w,k,z=0;if(M(o))return this.each(function(j){d(this).removeClass(o.call(this,j,ni(this)))});if(!arguments.length)return this.attr("class","");if((u=yn(o)).length){for(;m=this[z++];)if(S=ni(m),_=m.nodeType===1&&" "+xn(S)+" "){for(w=0;b=u[w++];)for(;-1<_.indexOf(" "+b+" ");)_=_.replace(" "+b+" "," ");S!==(k=xn(_))&&m.setAttribute("class",k)}}return this},toggleClass:function(o,u){var m=typeof o,_=m==="string"||Array.isArray(o);return typeof u=="boolean"&&_?u?this.addClass(o):this.removeClass(o):M(o)?this.each(function(S){d(this).toggleClass(o.call(this,S,ni(this),u),u)}):this.each(function(){var S,b,w,k;if(_)for(b=0,w=d(this),k=yn(o);S=k[b++];)w.hasClass(S)?w.removeClass(S):w.addClass(S);else o!==void 0&&m!=="boolean"||((S=ni(this))&&Ie.set(this,"__className__",S),this.setAttribute&&this.setAttribute("class",S||o===!1?"":Ie.get(this,"__className__")||""))})},hasClass:function(o){var u,m,_=0;for(u=" "+o+" ";m=this[_++];)if(m.nodeType===1&&-1<(" "+xn(ni(m))+" ").indexOf(u))return!0;return!1}});var Ss=/\r/g;d.fn.extend({val:function(o){var u,m,_,S=this[0];return arguments.length?(_=M(o),this.each(function(b){var w;this.nodeType===1&&((w=_?o.call(this,b,d(this).val()):o)==null?w="":typeof w=="number"?w+="":Array.isArray(w)&&(w=d.map(w,function(k){return k==null?"":k+""})),(u=d.valHooks[this.type]||d.valHooks[this.nodeName.toLowerCase()])&&"set"in u&&u.set(this,w,"value")!==void 0||(this.value=w))})):S?(u=d.valHooks[S.type]||d.valHooks[S.nodeName.toLowerCase()])&&"get"in u&&(m=u.get(S,"value"))!==void 0?m:typeof(m=S.value)=="string"?m.replace(Ss,""):m??"":void 0}}),d.extend({valHooks:{option:{get:function(o){var u=d.find.attr(o,"value");return u??xn(d.text(o))}},select:{get:function(o){var u,m,_,S=o.options,b=o.selectedIndex,w=o.type==="select-one",k=w?null:[],z=w?b+1:S.length;for(_=b<0?z:w?b:0;_<z;_++)if(((m=S[_]).selected||_===b)&&!m.disabled&&(!m.parentNode.disabled||!G(m.parentNode,"optgroup"))){if(u=d(m).val(),w)return u;k.push(u)}return k},set:function(o,u){for(var m,_,S=o.options,b=d.makeArray(u),w=S.length;w--;)((_=S[w]).selected=-1<d.inArray(d.valHooks.option.get(_),b))&&(m=!0);return m||(o.selectedIndex=-1),b}}}}),d.each(["radio","checkbox"],function(){d.valHooks[this]={set:function(o,u){if(Array.isArray(u))return o.checked=-1<d.inArray(d(o).val(),u)}},v.checkOn||(d.valHooks[this].get=function(o){return o.getAttribute("value")===null?"on":o.value})}),v.focusin="onfocusin"in r;var io=/^(?:focusinfocus|focusoutblur)$/,Es=function(o){o.stopPropagation()};d.extend(d.event,{trigger:function(o,u,m,_){var S,b,w,k,z,j,ie,de,J=[m||x],se=f.call(o,"type")?o.type:o,Oe=f.call(o,"namespace")?o.namespace.split("."):[];if(b=de=w=m=m||x,m.nodeType!==3&&m.nodeType!==8&&!io.test(se+d.event.triggered)&&(-1<se.indexOf(".")&&(se=(Oe=se.split(".")).shift(),Oe.sort()),z=se.indexOf(":")<0&&"on"+se,(o=o[d.expando]?o:new d.Event(se,typeof o=="object"&&o)).isTrigger=_?2:3,o.namespace=Oe.join("."),o.rnamespace=o.namespace?new RegExp("(^|\\.)"+Oe.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,o.result=void 0,o.target||(o.target=m),u=u==null?[o]:d.makeArray(u,[o]),ie=d.event.special[se]||{},_||!ie.trigger||ie.trigger.apply(m,u)!==!1)){if(!_&&!ie.noBubble&&!E(m)){for(k=ie.delegateType||se,io.test(k+se)||(b=b.parentNode);b;b=b.parentNode)J.push(b),w=b;w===(m.ownerDocument||x)&&J.push(w.defaultView||w.parentWindow||r)}for(S=0;(b=J[S++])&&!o.isPropagationStopped();)de=b,o.type=1<S?k:ie.bindType||se,(j=(Ie.get(b,"events")||Object.create(null))[o.type]&&Ie.get(b,"handle"))&&j.apply(b,u),(j=z&&b[z])&&j.apply&&Pt(b)&&(o.result=j.apply(b,u),o.result===!1&&o.preventDefault());return o.type=se,_||o.isDefaultPrevented()||ie._default&&ie._default.apply(J.pop(),u)!==!1||!Pt(m)||z&&M(m[se])&&!E(m)&&((w=m[z])&&(m[z]=null),d.event.triggered=se,o.isPropagationStopped()&&de.addEventListener(se,Es),m[se](),o.isPropagationStopped()&&de.removeEventListener(se,Es),d.event.triggered=void 0,w&&(m[z]=w)),o.result}},simulate:function(o,u,m){var _=d.extend(new d.Event,m,{type:o,isSimulated:!0});d.event.trigger(_,null,u)}}),d.fn.extend({trigger:function(o,u){return this.each(function(){d.event.trigger(o,u,this)})},triggerHandler:function(o,u){var m=this[0];if(m)return d.event.trigger(o,u,m,!0)}}),v.focusin||d.each({focus:"focusin",blur:"focusout"},function(o,u){var m=function(_){d.event.simulate(u,_.target,d.event.fix(_))};d.event.special[u]={setup:function(){var _=this.ownerDocument||this.document||this,S=Ie.access(_,u);S||_.addEventListener(o,m,!0),Ie.access(_,u,(S||0)+1)},teardown:function(){var _=this.ownerDocument||this.document||this,S=Ie.access(_,u)-1;S?Ie.access(_,u,S):(_.removeEventListener(o,m,!0),Ie.remove(_,u))}}});var Ts=r.location,Al={guid:Date.now()},xa=/\?/;d.parseXML=function(o){var u;if(!o||typeof o!="string")return null;try{u=new r.DOMParser().parseFromString(o,"text/xml")}catch{u=void 0}return u&&!u.getElementsByTagName("parsererror").length||d.error("Invalid XML: "+o),u};var dd=/\[\]$/,wl=/\r?\n/g,fd=/^(?:submit|button|image|reset|file)$/i,pd=/^(?:input|select|textarea|keygen)/i;function ya(o,u,m,_){var S;if(Array.isArray(u))d.each(u,function(b,w){m||dd.test(o)?_(o,w):ya(o+"["+(typeof w=="object"&&w!=null?b:"")+"]",w,m,_)});else if(m||P(u)!=="object")_(o,u);else for(S in u)ya(o+"["+S+"]",u[S],m,_)}d.param=function(o,u){var m,_=[],S=function(b,w){var k=M(w)?w():w;_[_.length]=encodeURIComponent(b)+"="+encodeURIComponent(k??"")};if(o==null)return"";if(Array.isArray(o)||o.jquery&&!d.isPlainObject(o))d.each(o,function(){S(this.name,this.value)});else for(m in o)ya(m,o[m],u,S);return _.join("&")},d.fn.extend({serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var o=d.prop(this,"elements");return o?d.makeArray(o):this}).filter(function(){var o=this.type;return this.name&&!d(this).is(":disabled")&&pd.test(this.nodeName)&&!fd.test(o)&&(this.checked||!Se.test(o))}).map(function(o,u){var m=d(this).val();return m==null?null:Array.isArray(m)?d.map(m,function(_){return{name:u.name,value:_.replace(wl,`\r
`)}}):{name:u.name,value:m.replace(wl,`\r
`)}}).get()}});var md=/%20/g,gd=/#.*$/,_d=/([?&])_=[^&]*/,vd=/^(.*?):[ \t]*([^\r\n]*)$/gm,xd=/^(?:GET|HEAD)$/,yd=/^\/\//,Rl={},Ma={},Cl="*/".concat("*"),Sa=x.createElement("a");function Pl(o){return function(u,m){typeof u!="string"&&(m=u,u="*");var _,S=0,b=u.toLowerCase().match(be)||[];if(M(m))for(;_=b[S++];)_[0]==="+"?(_=_.slice(1)||"*",(o[_]=o[_]||[]).unshift(m)):(o[_]=o[_]||[]).push(m)}}function Ll(o,u,m,_){var S={},b=o===Ma;function w(k){var z;return S[k]=!0,d.each(o[k]||[],function(j,ie){var de=ie(u,m,_);return typeof de!="string"||b||S[de]?b?!(z=de):void 0:(u.dataTypes.unshift(de),w(de),!1)}),z}return w(u.dataTypes[0])||!S["*"]&&w("*")}function Ea(o,u){var m,_,S=d.ajaxSettings.flatOptions||{};for(m in u)u[m]!==void 0&&((S[m]?o:_||(_={}))[m]=u[m]);return _&&d.extend(!0,o,_),o}Sa.href=Ts.href,d.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ts.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ts.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Cl,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":d.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(o,u){return u?Ea(Ea(o,d.ajaxSettings),u):Ea(d.ajaxSettings,o)},ajaxPrefilter:Pl(Rl),ajaxTransport:Pl(Ma),ajax:function(o,u){typeof o=="object"&&(u=o,o=void 0),u=u||{};var m,_,S,b,w,k,z,j,ie,de,J=d.ajaxSetup({},u),se=J.context||J,Oe=J.context&&(se.nodeType||se.jquery)?d(se):d.event,qe=d.Deferred(),He=d.Callbacks("once memory"),jt=J.statusCode||{},cn={},Hn={},Nt="canceled",ht={readyState:0,getResponseHeader:function(Rt){var qt;if(z){if(!b)for(b={};qt=vd.exec(S);)b[qt[1].toLowerCase()+" "]=(b[qt[1].toLowerCase()+" "]||[]).concat(qt[2]);qt=b[Rt.toLowerCase()+" "]}return qt==null?null:qt.join(", ")},getAllResponseHeaders:function(){return z?S:null},setRequestHeader:function(Rt,qt){return z==null&&(Rt=Hn[Rt.toLowerCase()]=Hn[Rt.toLowerCase()]||Rt,cn[Rt]=qt),this},overrideMimeType:function(Rt){return z==null&&(J.mimeType=Rt),this},statusCode:function(Rt){var qt;if(Rt)if(z)ht.always(Rt[ht.status]);else for(qt in Rt)jt[qt]=[jt[qt],Rt[qt]];return this},abort:function(Rt){var qt=Rt||Nt;return m&&m.abort(qt),Nn(0,qt),this}};if(qe.promise(ht),J.url=((o||J.url||Ts.href)+"").replace(yd,Ts.protocol+"//"),J.type=u.method||u.type||J.method||J.type,J.dataTypes=(J.dataType||"*").toLowerCase().match(be)||[""],J.crossDomain==null){k=x.createElement("a");try{k.href=J.url,k.href=k.href,J.crossDomain=Sa.protocol+"//"+Sa.host!=k.protocol+"//"+k.host}catch{J.crossDomain=!0}}if(J.data&&J.processData&&typeof J.data!="string"&&(J.data=d.param(J.data,J.traditional)),Ll(Rl,J,u,ht),z)return ht;for(ie in(j=d.event&&J.global)&&d.active++==0&&d.event.trigger("ajaxStart"),J.type=J.type.toUpperCase(),J.hasContent=!xd.test(J.type),_=J.url.replace(gd,""),J.hasContent?J.data&&J.processData&&(J.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(J.data=J.data.replace(md,"+")):(de=J.url.slice(_.length),J.data&&(J.processData||typeof J.data=="string")&&(_+=(xa.test(_)?"&":"?")+J.data,delete J.data),J.cache===!1&&(_=_.replace(_d,"$1"),de=(xa.test(_)?"&":"?")+"_="+Al.guid+++de),J.url=_+de),J.ifModified&&(d.lastModified[_]&&ht.setRequestHeader("If-Modified-Since",d.lastModified[_]),d.etag[_]&&ht.setRequestHeader("If-None-Match",d.etag[_])),(J.data&&J.hasContent&&J.contentType!==!1||u.contentType)&&ht.setRequestHeader("Content-Type",J.contentType),ht.setRequestHeader("Accept",J.dataTypes[0]&&J.accepts[J.dataTypes[0]]?J.accepts[J.dataTypes[0]]+(J.dataTypes[0]!=="*"?", "+Cl+"; q=0.01":""):J.accepts["*"]),J.headers)ht.setRequestHeader(ie,J.headers[ie]);if(J.beforeSend&&(J.beforeSend.call(se,ht,J)===!1||z))return ht.abort();if(Nt="abort",He.add(J.complete),ht.done(J.success),ht.fail(J.error),m=Ll(Ma,J,u,ht)){if(ht.readyState=1,j&&Oe.trigger("ajaxSend",[ht,J]),z)return ht;J.async&&0<J.timeout&&(w=r.setTimeout(function(){ht.abort("timeout")},J.timeout));try{z=!1,m.send(cn,Nn)}catch(Rt){if(z)throw Rt;Nn(-1,Rt)}}else Nn(-1,"No Transport");function Nn(Rt,qt,As,ro){var zn,hr,wr,Un,Rr,Zn=qt;z||(z=!0,w&&r.clearTimeout(w),m=void 0,S=ro||"",ht.readyState=0<Rt?4:0,zn=200<=Rt&&Rt<300||Rt===304,As&&(Un=function(Yt,Vn,Gn){for(var gi,dt,Lt,ln,Wn=Yt.contents,nn=Yt.dataTypes;nn[0]==="*";)nn.shift(),gi===void 0&&(gi=Yt.mimeType||Vn.getResponseHeader("Content-Type"));if(gi){for(dt in Wn)if(Wn[dt]&&Wn[dt].test(gi)){nn.unshift(dt);break}}if(nn[0]in Gn)Lt=nn[0];else{for(dt in Gn){if(!nn[0]||Yt.converters[dt+" "+nn[0]]){Lt=dt;break}ln||(ln=dt)}Lt=Lt||ln}if(Lt)return Lt!==nn[0]&&nn.unshift(Lt),Gn[Lt]}(J,ht,As)),!zn&&-1<d.inArray("script",J.dataTypes)&&(J.converters["text script"]=function(){}),Un=function(Yt,Vn,Gn,gi){var dt,Lt,ln,Wn,nn,Xn={},Cr=Yt.dataTypes.slice();if(Cr[1])for(ln in Yt.converters)Xn[ln.toLowerCase()]=Yt.converters[ln];for(Lt=Cr.shift();Lt;)if(Yt.responseFields[Lt]&&(Gn[Yt.responseFields[Lt]]=Vn),!nn&&gi&&Yt.dataFilter&&(Vn=Yt.dataFilter(Vn,Yt.dataType)),nn=Lt,Lt=Cr.shift()){if(Lt==="*")Lt=nn;else if(nn!=="*"&&nn!==Lt){if(!(ln=Xn[nn+" "+Lt]||Xn["* "+Lt])){for(dt in Xn)if((Wn=dt.split(" "))[1]===Lt&&(ln=Xn[nn+" "+Wn[0]]||Xn["* "+Wn[0]])){ln===!0?ln=Xn[dt]:Xn[dt]!==!0&&(Lt=Wn[0],Cr.unshift(Wn[1]));break}}if(ln!==!0)if(ln&&Yt.throws)Vn=ln(Vn);else try{Vn=ln(Vn)}catch(so){return{state:"parsererror",error:ln?so:"No conversion from "+nn+" to "+Lt}}}}return{state:"success",data:Vn}}(J,Un,ht,zn),zn?(J.ifModified&&((Rr=ht.getResponseHeader("Last-Modified"))&&(d.lastModified[_]=Rr),(Rr=ht.getResponseHeader("etag"))&&(d.etag[_]=Rr)),Rt===204||J.type==="HEAD"?Zn="nocontent":Rt===304?Zn="notmodified":(Zn=Un.state,hr=Un.data,zn=!(wr=Un.error))):(wr=Zn,!Rt&&Zn||(Zn="error",Rt<0&&(Rt=0))),ht.status=Rt,ht.statusText=(qt||Zn)+"",zn?qe.resolveWith(se,[hr,Zn,ht]):qe.rejectWith(se,[ht,Zn,wr]),ht.statusCode(jt),jt=void 0,j&&Oe.trigger(zn?"ajaxSuccess":"ajaxError",[ht,J,zn?hr:wr]),He.fireWith(se,[ht,Zn]),j&&(Oe.trigger("ajaxComplete",[ht,J]),--d.active||d.event.trigger("ajaxStop")))}return ht},getJSON:function(o,u,m){return d.get(o,u,m,"json")},getScript:function(o,u){return d.get(o,void 0,u,"script")}}),d.each(["get","post"],function(o,u){d[u]=function(m,_,S,b){return M(_)&&(b=b||S,S=_,_=void 0),d.ajax(d.extend({url:m,type:u,dataType:b,data:_,success:S},d.isPlainObject(m)&&m))}}),d.ajaxPrefilter(function(o){var u;for(u in o.headers)u.toLowerCase()==="content-type"&&(o.contentType=o.headers[u]||"")}),d._evalUrl=function(o,u,m){return d.ajax({url:o,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(_){d.globalEval(_,u,m)}})},d.fn.extend({wrapAll:function(o){var u;return this[0]&&(M(o)&&(o=o.call(this[0])),u=d(o,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&u.insertBefore(this[0]),u.map(function(){for(var m=this;m.firstElementChild;)m=m.firstElementChild;return m}).append(this)),this},wrapInner:function(o){return M(o)?this.each(function(u){d(this).wrapInner(o.call(this,u))}):this.each(function(){var u=d(this),m=u.contents();m.length?m.wrapAll(o):u.append(o)})},wrap:function(o){var u=M(o);return this.each(function(m){d(this).wrapAll(u?o.call(this,m):o)})},unwrap:function(o){return this.parent(o).not("body").each(function(){d(this).replaceWith(this.childNodes)}),this}}),d.expr.pseudos.hidden=function(o){return!d.expr.pseudos.visible(o)},d.expr.pseudos.visible=function(o){return!!(o.offsetWidth||o.offsetHeight||o.getClientRects().length)},d.ajaxSettings.xhr=function(){try{return new r.XMLHttpRequest}catch{}};var Md={0:200,1223:204},bs=d.ajaxSettings.xhr();v.cors=!!bs&&"withCredentials"in bs,v.ajax=bs=!!bs,d.ajaxTransport(function(o){var u,m;if(v.cors||bs&&!o.crossDomain)return{send:function(_,S){var b,w=o.xhr();if(w.open(o.type,o.url,o.async,o.username,o.password),o.xhrFields)for(b in o.xhrFields)w[b]=o.xhrFields[b];for(b in o.mimeType&&w.overrideMimeType&&w.overrideMimeType(o.mimeType),o.crossDomain||_["X-Requested-With"]||(_["X-Requested-With"]="XMLHttpRequest"),_)w.setRequestHeader(b,_[b]);u=function(k){return function(){u&&(u=m=w.onload=w.onerror=w.onabort=w.ontimeout=w.onreadystatechange=null,k==="abort"?w.abort():k==="error"?typeof w.status!="number"?S(0,"error"):S(w.status,w.statusText):S(Md[w.status]||w.status,w.statusText,(w.responseType||"text")!=="text"||typeof w.responseText!="string"?{binary:w.response}:{text:w.responseText},w.getAllResponseHeaders()))}},w.onload=u(),m=w.onerror=w.ontimeout=u("error"),w.onabort!==void 0?w.onabort=m:w.onreadystatechange=function(){w.readyState===4&&r.setTimeout(function(){u&&m()})},u=u("abort");try{w.send(o.hasContent&&o.data||null)}catch(k){if(u)throw k}},abort:function(){u&&u()}}}),d.ajaxPrefilter(function(o){o.crossDomain&&(o.contents.script=!1)}),d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(o){return d.globalEval(o),o}}}),d.ajaxPrefilter("script",function(o){o.cache===void 0&&(o.cache=!1),o.crossDomain&&(o.type="GET")}),d.ajaxTransport("script",function(o){var u,m;if(o.crossDomain||o.scriptAttrs)return{send:function(_,S){u=d("<script>").attr(o.scriptAttrs||{}).prop({charset:o.scriptCharset,src:o.url}).on("load error",m=function(b){u.remove(),m=null,b&&S(b.type==="error"?404:200,b.type)}),x.head.appendChild(u[0])},abort:function(){m&&m()}}});var Il,Dl=[],Ta=/(=)\?(?=&|$)|\?\?/;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var o=Dl.pop()||d.expando+"_"+Al.guid++;return this[o]=!0,o}}),d.ajaxPrefilter("json jsonp",function(o,u,m){var _,S,b,w=o.jsonp!==!1&&(Ta.test(o.url)?"url":typeof o.data=="string"&&(o.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Ta.test(o.data)&&"data");if(w||o.dataTypes[0]==="jsonp")return _=o.jsonpCallback=M(o.jsonpCallback)?o.jsonpCallback():o.jsonpCallback,w?o[w]=o[w].replace(Ta,"$1"+_):o.jsonp!==!1&&(o.url+=(xa.test(o.url)?"&":"?")+o.jsonp+"="+_),o.converters["script json"]=function(){return b||d.error(_+" was not called"),b[0]},o.dataTypes[0]="json",S=r[_],r[_]=function(){b=arguments},m.always(function(){S===void 0?d(r).removeProp(_):r[_]=S,o[_]&&(o.jsonpCallback=u.jsonpCallback,Dl.push(_)),b&&M(S)&&S(b[0]),b=S=void 0}),"script"}),v.createHTMLDocument=((Il=x.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",Il.childNodes.length===2),d.parseHTML=function(o,u,m){return typeof o!="string"?[]:(typeof u=="boolean"&&(m=u,u=!1),u||(v.createHTMLDocument?((_=(u=x.implementation.createHTMLDocument("")).createElement("base")).href=x.location.href,u.head.appendChild(_)):u=x),b=!m&&[],(S=oe.exec(o))?[u.createElement(S[1])]:(S=Ot([o],u,b),b&&b.length&&d(b).remove(),d.merge([],S.childNodes)));var _,S,b},d.fn.load=function(o,u,m){var _,S,b,w=this,k=o.indexOf(" ");return-1<k&&(_=xn(o.slice(k)),o=o.slice(0,k)),M(u)?(m=u,u=void 0):u&&typeof u=="object"&&(S="POST"),0<w.length&&d.ajax({url:o,type:S||"GET",dataType:"html",data:u}).done(function(z){b=arguments,w.html(_?d("<div>").append(d.parseHTML(z)).find(_):z)}).always(m&&function(z,j){w.each(function(){m.apply(this,b||[z.responseText,j,z])})}),this},d.expr.pseudos.animated=function(o){return d.grep(d.timers,function(u){return o===u.elem}).length},d.offset={setOffset:function(o,u,m){var _,S,b,w,k,z,j=d.css(o,"position"),ie=d(o),de={};j==="static"&&(o.style.position="relative"),k=ie.offset(),b=d.css(o,"top"),z=d.css(o,"left"),(j==="absolute"||j==="fixed")&&-1<(b+z).indexOf("auto")?(w=(_=ie.position()).top,S=_.left):(w=parseFloat(b)||0,S=parseFloat(z)||0),M(u)&&(u=u.call(o,m,d.extend({},k))),u.top!=null&&(de.top=u.top-k.top+w),u.left!=null&&(de.left=u.left-k.left+S),"using"in u?u.using.call(o,de):(typeof de.top=="number"&&(de.top+="px"),typeof de.left=="number"&&(de.left+="px"),ie.css(de))}},d.fn.extend({offset:function(o){if(arguments.length)return o===void 0?this:this.each(function(S){d.offset.setOffset(this,o,S)});var u,m,_=this[0];return _?_.getClientRects().length?(u=_.getBoundingClientRect(),m=_.ownerDocument.defaultView,{top:u.top+m.pageYOffset,left:u.left+m.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var o,u,m,_=this[0],S={top:0,left:0};if(d.css(_,"position")==="fixed")u=_.getBoundingClientRect();else{for(u=this.offset(),m=_.ownerDocument,o=_.offsetParent||m.documentElement;o&&(o===m.body||o===m.documentElement)&&d.css(o,"position")==="static";)o=o.parentNode;o&&o!==_&&o.nodeType===1&&((S=d(o).offset()).top+=d.css(o,"borderTopWidth",!0),S.left+=d.css(o,"borderLeftWidth",!0))}return{top:u.top-S.top-d.css(_,"marginTop",!0),left:u.left-S.left-d.css(_,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var o=this.offsetParent;o&&d.css(o,"position")==="static";)o=o.offsetParent;return o||A})}}),d.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(o,u){var m=u==="pageYOffset";d.fn[o]=function(_){return Le(this,function(S,b,w){var k;if(E(S)?k=S:S.nodeType===9&&(k=S.defaultView),w===void 0)return k?k[u]:S[b];k?k.scrollTo(m?k.pageXOffset:w,m?w:k.pageYOffset):S[b]=w},o,_,arguments.length)}}),d.each(["top","left"],function(o,u){d.cssHooks[u]=eo(v.pixelPosition,function(m,_){if(_)return _=Xi(m,u),Wi.test(_)?d(m).position()[u]+"px":_})}),d.each({Height:"height",Width:"width"},function(o,u){d.each({padding:"inner"+o,content:u,"":"outer"+o},function(m,_){d.fn[_]=function(S,b){var w=arguments.length&&(m||typeof S!="boolean"),k=m||(S===!0||b===!0?"margin":"border");return Le(this,function(z,j,ie){var de;return E(z)?_.indexOf("outer")===0?z["inner"+o]:z.document.documentElement["client"+o]:z.nodeType===9?(de=z.documentElement,Math.max(z.body["scroll"+o],de["scroll"+o],z.body["offset"+o],de["offset"+o],de["client"+o])):ie===void 0?d.css(z,j,k):d.style(z,j,ie,k)},u,w?S:void 0,w)}})}),d.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(o,u){d.fn[u]=function(m){return this.on(u,m)}}),d.fn.extend({bind:function(o,u,m){return this.on(o,null,u,m)},unbind:function(o,u){return this.off(o,null,u)},delegate:function(o,u,m,_){return this.on(u,o,m,_)},undelegate:function(o,u,m){return arguments.length===1?this.off(o,"**"):this.off(u,o||"**",m)},hover:function(o,u){return this.mouseenter(o).mouseleave(u||o)}}),d.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(o,u){d.fn[u]=function(m,_){return 0<arguments.length?this.on(u,null,m,_):this.trigger(u)}});var Sd=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;d.proxy=function(o,u){var m,_,S;if(typeof u=="string"&&(m=o[u],u=o,o=m),M(o))return _=i.call(arguments,2),(S=function(){return o.apply(u||this,_.concat(i.call(arguments)))}).guid=o.guid=o.guid||d.guid++,S},d.holdReady=function(o){o?d.readyWait++:d.ready(!0)},d.isArray=Array.isArray,d.parseJSON=JSON.parse,d.nodeName=G,d.isFunction=M,d.isWindow=E,d.camelCase=Je,d.type=P,d.now=Date.now,d.isNumeric=function(o){var u=d.type(o);return(u==="number"||u==="string")&&!isNaN(o-parseFloat(o))},d.trim=function(o){return o==null?"":(o+"").replace(Sd,"")},typeof define=="function"&&define.amd&&define("jquery",[],function(){return d});var Ed=r.jQuery,Td=r.$;return d.noConflict=function(o){return r.$===d&&(r.$=Td),o&&r.jQuery===d&&(r.jQuery=Ed),d},typeof e>"u"&&(r.jQuery=r.$=d),d});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jc="167",Pr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Lr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fd=0,Vl=1,Bd=2,xh=1,kd=2,Oi=3,zi=0,Bn=1,ei=2,rr=0,es=1,Gl=2,Wl=3,Xl=4,Hd=5,Mr=100,zd=101,Vd=102,Gd=103,Wd=104,Xd=200,jd=201,qd=202,Yd=203,fc=204,pc=205,Kd=206,$d=207,Zd=208,Jd=209,Qd=210,ef=211,tf=212,nf=213,rf=214,sf=0,of=1,af=2,ta=3,cf=4,lf=5,uf=6,hf=7,yh=0,df=1,ff=2,sr=0,pf=1,mf=2,gf=3,_f=4,vf=5,xf=6,yf=7,jl="attached",Mf="detached",Mh=300,os=301,as=302,mc=303,gc=304,fa=306,or=1e3,nr=1001,na=1002,Tn=1003,Sh=1004,Bs=1005,Kn=1006,qo=1007,Bi=1008,Vi=1009,Eh=1010,Th=1011,Ws=1012,Qc=1013,Tr=1014,di=1015,Ks=1016,el=1017,tl=1018,cs=1020,bh=35902,Ah=1021,wh=1022,ti=1023,Rh=1024,Ch=1025,ts=1026,ls=1027,nl=1028,il=1029,Ph=1030,rl=1031,sl=1033,Yo=33776,Ko=33777,$o=33778,Zo=33779,_c=35840,vc=35841,xc=35842,yc=35843,Mc=36196,Sc=37492,Ec=37496,Tc=37808,bc=37809,Ac=37810,wc=37811,Rc=37812,Cc=37813,Pc=37814,Lc=37815,Ic=37816,Dc=37817,Nc=37818,Uc=37819,Oc=37820,Fc=37821,Jo=36492,Bc=36494,kc=36495,Lh=36283,Hc=36284,zc=36285,Vc=36286,Xs=2300,js=2301,La=2302,ql=2400,Yl=2401,Kl=2402,Sf=2500,Ef=0,Ih=1,Gc=2,Tf=3200,bf=3201,Dh=0,Af=1,tr="",Pn="srgb",vn="srgb-linear",ol="display-p3",pa="display-p3-linear",ia="linear",Vt="srgb",ra="rec709",sa="p3",Ir=7680,$l=519,wf=512,Rf=513,Cf=514,Nh=515,Pf=516,Lf=517,If=518,Df=519,Wc=35044,Zl="300 es",ki=2e3,oa=2001;class Ar{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jl=1234567;const ns=Math.PI/180,us=180/Math.PI;function pi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function _n(r,e,t){return Math.max(e,Math.min(t,r))}function al(r,e){return(r%e+e)%e}function Nf(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Uf(r,e,t){return r!==e?(t-r)/(e-r):0}function Hs(r,e,t){return(1-t)*r+t*e}function Of(r,e,t,n){return Hs(r,e,1-Math.exp(-t*n))}function Ff(r,e=1){return e-Math.abs(al(r,e*2)-e)}function Bf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function kf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Hf(r,e){return r+Math.floor(Math.random()*(e-r+1))}function zf(r,e){return r+Math.random()*(e-r)}function Vf(r){return r*(.5-Math.random())}function Gf(r){r!==void 0&&(Jl=r);let e=Jl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wf(r){return r*ns}function Xf(r){return r*us}function jf(r){return(r&r-1)===0&&r!==0}function qf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Yf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Kf(r,e,t,n,i){const s=Math.cos,a=Math.sin,c=s(t/2),l=a(t/2),h=s((e+n)/2),f=a((e+n)/2),p=s((e-n)/2),g=a((e-n)/2),v=s((n-e)/2),M=a((n-e)/2);switch(i){case"XYX":r.set(c*f,l*p,l*g,c*h);break;case"YZY":r.set(l*g,c*f,l*p,c*h);break;case"ZXZ":r.set(l*p,l*g,c*f,c*h);break;case"XZX":r.set(c*f,l*M,l*v,c*h);break;case"YXY":r.set(l*v,c*f,l*M,c*h);break;case"ZYZ":r.set(l*M,l*v,c*f,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ui(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function It(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const On={DEG2RAD:ns,RAD2DEG:us,generateUUID:pi,clamp:_n,euclideanModulo:al,mapLinear:Nf,inverseLerp:Uf,lerp:Hs,damp:Of,pingpong:Ff,smoothstep:Bf,smootherstep:kf,randInt:Hf,randFloat:zf,randFloatSpread:Vf,seededRandom:Gf,degToRad:Wf,radToDeg:Xf,isPowerOfTwo:jf,ceilPowerOfTwo:qf,floorPowerOfTwo:Yf,setQuaternionFromProperEuler:Kf,normalize:It,denormalize:ui};class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_n(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _t{constructor(e,t,n,i,s,a,c,l,h){_t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,c,l,h)}set(e,t,n,i,s,a,c,l,h){const f=this.elements;return f[0]=e,f[1]=i,f[2]=c,f[3]=t,f[4]=s,f[5]=l,f[6]=n,f[7]=a,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],c=n[3],l=n[6],h=n[1],f=n[4],p=n[7],g=n[2],v=n[5],M=n[8],E=i[0],x=i[3],y=i[6],D=i[1],P=i[4],N=i[7],d=i[2],F=i[5],O=i[8];return s[0]=a*E+c*D+l*d,s[3]=a*x+c*P+l*F,s[6]=a*y+c*N+l*O,s[1]=h*E+f*D+p*d,s[4]=h*x+f*P+p*F,s[7]=h*y+f*N+p*O,s[2]=g*E+v*D+M*d,s[5]=g*x+v*P+M*F,s[8]=g*y+v*N+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],c=e[5],l=e[6],h=e[7],f=e[8];return t*a*f-t*c*h-n*s*f+n*c*l+i*s*h-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],c=e[5],l=e[6],h=e[7],f=e[8],p=f*a-c*h,g=c*l-f*s,v=h*s-a*l,M=t*p+n*g+i*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=p*E,e[1]=(i*h-f*n)*E,e[2]=(c*n-i*a)*E,e[3]=g*E,e[4]=(f*t-i*l)*E,e[5]=(i*s-c*t)*E,e[6]=v*E,e[7]=(n*l-h*t)*E,e[8]=(a*t-n*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,c){const l=Math.cos(s),h=Math.sin(s);return this.set(n*l,n*h,-n*(l*a+h*c)+a+e,-i*h,i*l,-i*(-h*a+l*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Ia.makeScale(e,t)),this}rotate(e){return this.premultiply(Ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ia=new _t;function Uh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function qs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function $f(){const r=qs("canvas");return r.style.display="block",r}const Ql={};function is(r){r in Ql||(Ql[r]=!0,console.warn(r))}function Zf(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const eu=new _t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),tu=new _t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rs={[vn]:{transfer:ia,primaries:ra,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[Pn]:{transfer:Vt,primaries:ra,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[pa]:{transfer:ia,primaries:sa,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(tu),fromReference:r=>r.applyMatrix3(eu)},[ol]:{transfer:Vt,primaries:sa,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(tu),fromReference:r=>r.applyMatrix3(eu).convertLinearToSRGB()}},Jf=new Set([vn,pa]),Ct={enabled:!0,_workingColorSpace:vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Jf.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Rs[e].toReference,i=Rs[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Rs[r].primaries},getTransfer:function(r){return r===tr?ia:Rs[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(Rs[e].luminanceCoefficients)}};function rs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Da(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Dr;class Qf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Dr===void 0&&(Dr=qs("canvas")),Dr.width=e.width,Dr.height=e.height;const n=Dr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Dr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=rs(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(rs(t[n]/255)*255):t[n]=rs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ep=0;class Oh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=pi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,c=i.length;a<c;a++)i[a].isDataTexture?s.push(Na(i[a].image)):s.push(Na(i[a]))}else s=Na(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Na(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Qf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tp=0;class hn extends Ar{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,n=nr,i=nr,s=Kn,a=Bi,c=ti,l=Vi,h=hn.DEFAULT_ANISOTROPY,f=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=pi(),this.name="",this.source=new Oh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case or:e.x=e.x-Math.floor(e.x);break;case nr:e.x=e.x<0?0:1;break;case na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case or:e.y=e.y-Math.floor(e.y);break;case nr:e.y=e.y<0?0:1;break;case na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Mh;hn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,n=0,i=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,h=l[0],f=l[4],p=l[8],g=l[1],v=l[5],M=l[9],E=l[2],x=l[6],y=l[10];if(Math.abs(f-g)<.01&&Math.abs(p-E)<.01&&Math.abs(M-x)<.01){if(Math.abs(f+g)<.1&&Math.abs(p+E)<.1&&Math.abs(M+x)<.1&&Math.abs(h+v+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(h+1)/2,N=(v+1)/2,d=(y+1)/2,F=(f+g)/4,O=(p+E)/4,q=(M+x)/4;return P>N&&P>d?P<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(P),i=F/n,s=O/n):N>d?N<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(N),n=F/i,s=q/i):d<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(d),n=O/s,i=q/s),this.set(n,i,s,t),this}let D=Math.sqrt((x-M)*(x-M)+(p-E)*(p-E)+(g-f)*(g-f));return Math.abs(D)<.001&&(D=1),this.x=(x-M)/D,this.y=(p-E)/D,this.z=(g-f)/D,this.w=Math.acos((h+v+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class np extends Ar{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new hn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let c=0;c<a;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Oh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class br extends np{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Fh extends hn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ip extends hn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,c){let l=n[i+0],h=n[i+1],f=n[i+2],p=n[i+3];const g=s[a+0],v=s[a+1],M=s[a+2],E=s[a+3];if(c===0){e[t+0]=l,e[t+1]=h,e[t+2]=f,e[t+3]=p;return}if(c===1){e[t+0]=g,e[t+1]=v,e[t+2]=M,e[t+3]=E;return}if(p!==E||l!==g||h!==v||f!==M){let x=1-c;const y=l*g+h*v+f*M+p*E,D=y>=0?1:-1,P=1-y*y;if(P>Number.EPSILON){const d=Math.sqrt(P),F=Math.atan2(d,y*D);x=Math.sin(x*F)/d,c=Math.sin(c*F)/d}const N=c*D;if(l=l*x+g*N,h=h*x+v*N,f=f*x+M*N,p=p*x+E*N,x===1-c){const d=1/Math.sqrt(l*l+h*h+f*f+p*p);l*=d,h*=d,f*=d,p*=d}}e[t]=l,e[t+1]=h,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,s,a){const c=n[i],l=n[i+1],h=n[i+2],f=n[i+3],p=s[a],g=s[a+1],v=s[a+2],M=s[a+3];return e[t]=c*M+f*p+l*v-h*g,e[t+1]=l*M+f*g+h*p-c*v,e[t+2]=h*M+f*v+c*g-l*p,e[t+3]=f*M-c*p-l*g-h*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,c=Math.cos,l=Math.sin,h=c(n/2),f=c(i/2),p=c(s/2),g=l(n/2),v=l(i/2),M=l(s/2);switch(a){case"XYZ":this._x=g*f*p+h*v*M,this._y=h*v*p-g*f*M,this._z=h*f*M+g*v*p,this._w=h*f*p-g*v*M;break;case"YXZ":this._x=g*f*p+h*v*M,this._y=h*v*p-g*f*M,this._z=h*f*M-g*v*p,this._w=h*f*p+g*v*M;break;case"ZXY":this._x=g*f*p-h*v*M,this._y=h*v*p+g*f*M,this._z=h*f*M+g*v*p,this._w=h*f*p-g*v*M;break;case"ZYX":this._x=g*f*p-h*v*M,this._y=h*v*p+g*f*M,this._z=h*f*M-g*v*p,this._w=h*f*p+g*v*M;break;case"YZX":this._x=g*f*p+h*v*M,this._y=h*v*p+g*f*M,this._z=h*f*M-g*v*p,this._w=h*f*p-g*v*M;break;case"XZY":this._x=g*f*p-h*v*M,this._y=h*v*p-g*f*M,this._z=h*f*M+g*v*p,this._w=h*f*p+g*v*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],c=t[5],l=t[9],h=t[2],f=t[6],p=t[10],g=n+c+p;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(f-l)*v,this._y=(s-h)*v,this._z=(a-i)*v}else if(n>c&&n>p){const v=2*Math.sqrt(1+n-c-p);this._w=(f-l)/v,this._x=.25*v,this._y=(i+a)/v,this._z=(s+h)/v}else if(c>p){const v=2*Math.sqrt(1+c-n-p);this._w=(s-h)/v,this._x=(i+a)/v,this._y=.25*v,this._z=(l+f)/v}else{const v=2*Math.sqrt(1+p-n-c);this._w=(a-i)/v,this._x=(s+h)/v,this._y=(l+f)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_n(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,c=t._x,l=t._y,h=t._z,f=t._w;return this._x=n*f+a*c+i*h-s*l,this._y=i*f+a*l+s*c-n*h,this._z=s*f+a*h+n*l-i*c,this._w=a*f-n*c-i*l-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let c=a*e._w+n*e._x+i*e._y+s*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-c*c;if(l<=Number.EPSILON){const v=1-t;return this._w=v*a+t*this._w,this._x=v*n+t*this._x,this._y=v*i+t*this._y,this._z=v*s+t*this._z,this.normalize(),this}const h=Math.sqrt(l),f=Math.atan2(h,c),p=Math.sin((1-t)*f)/h,g=Math.sin(t*f)/h;return this._w=a*p+this._w*g,this._x=n*p+this._x*g,this._y=i*p+this._y*g,this._z=s*p+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,c=e.z,l=e.w,h=2*(a*i-c*n),f=2*(c*t-s*i),p=2*(s*n-a*t);return this.x=t+l*h+a*p-c*f,this.y=n+l*f+c*h-s*p,this.z=i+l*p+s*f-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,c=t.y,l=t.z;return this.x=i*l-s*c,this.y=s*a-n*l,this.z=n*c-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ua.copy(this).projectOnVector(e),this.sub(Ua)}reflect(e){return this.sub(Ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_n(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ua=new V,nu=new yi;class Si{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,c=s.count;a<c;a++)e.isMesh===!0?e.getVertexPosition(a,oi):oi.fromBufferAttribute(s,a),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fo.copy(n.boundingBox)),fo.applyMatrix4(e.matrixWorld),this.union(fo)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cs),po.subVectors(this.max,Cs),Nr.subVectors(e.a,Cs),Ur.subVectors(e.b,Cs),Or.subVectors(e.c,Cs),ji.subVectors(Ur,Nr),qi.subVectors(Or,Ur),fr.subVectors(Nr,Or);let t=[0,-ji.z,ji.y,0,-qi.z,qi.y,0,-fr.z,fr.y,ji.z,0,-ji.x,qi.z,0,-qi.x,fr.z,0,-fr.x,-ji.y,ji.x,0,-qi.y,qi.x,0,-fr.y,fr.x,0];return!Oa(t,Nr,Ur,Or,po)||(t=[1,0,0,0,1,0,0,0,1],!Oa(t,Nr,Ur,Or,po))?!1:(mo.crossVectors(ji,qi),t=[mo.x,mo.y,mo.z],Oa(t,Nr,Ur,Or,po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ci=[new V,new V,new V,new V,new V,new V,new V,new V],oi=new V,fo=new Si,Nr=new V,Ur=new V,Or=new V,ji=new V,qi=new V,fr=new V,Cs=new V,po=new V,mo=new V,pr=new V;function Oa(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){pr.fromArray(r,s);const c=i.x*Math.abs(pr.x)+i.y*Math.abs(pr.y)+i.z*Math.abs(pr.z),l=e.dot(pr),h=t.dot(pr),f=n.dot(pr);if(Math.max(-Math.max(l,h,f),Math.min(l,h,f))>c)return!1}return!0}const rp=new Si,Ps=new V,Fa=new V;class Ei{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):rp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ps.subVectors(e,this.center);const t=Ps.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ps,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ps.copy(e.center).add(Fa)),this.expandByPoint(Ps.copy(e.center).sub(Fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new V,Ba=new V,go=new V,Yi=new V,ka=new V,_o=new V,Ha=new V;class ms{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,t),Pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ba.copy(e).add(t).multiplyScalar(.5),go.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(Ba);const s=e.distanceTo(t)*.5,a=-this.direction.dot(go),c=Yi.dot(this.direction),l=-Yi.dot(go),h=Yi.lengthSq(),f=Math.abs(1-a*a);let p,g,v,M;if(f>0)if(p=a*l-c,g=a*c-l,M=s*f,p>=0)if(g>=-M)if(g<=M){const E=1/f;p*=E,g*=E,v=p*(p+a*g+2*c)+g*(a*p+g+2*l)+h}else g=s,p=Math.max(0,-(a*g+c)),v=-p*p+g*(g+2*l)+h;else g=-s,p=Math.max(0,-(a*g+c)),v=-p*p+g*(g+2*l)+h;else g<=-M?(p=Math.max(0,-(-a*s+c)),g=p>0?-s:Math.min(Math.max(-s,-l),s),v=-p*p+g*(g+2*l)+h):g<=M?(p=0,g=Math.min(Math.max(-s,-l),s),v=g*(g+2*l)+h):(p=Math.max(0,-(a*s+c)),g=p>0?s:Math.min(Math.max(-s,-l),s),v=-p*p+g*(g+2*l)+h);else g=a>0?-s:s,p=Math.max(0,-(a*g+c)),v=-p*p+g*(g+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(Ba).addScaledVector(go,g),v}intersectSphere(e,t){Pi.subVectors(e.center,this.origin);const n=Pi.dot(this.direction),i=Pi.dot(Pi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),c=n-a,l=n+a;return l<0?null:c<0?this.at(l,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,c,l;const h=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,g=this.origin;return h>=0?(n=(e.min.x-g.x)*h,i=(e.max.x-g.x)*h):(n=(e.max.x-g.x)*h,i=(e.min.x-g.x)*h),f>=0?(s=(e.min.y-g.y)*f,a=(e.max.y-g.y)*f):(s=(e.max.y-g.y)*f,a=(e.min.y-g.y)*f),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),p>=0?(c=(e.min.z-g.z)*p,l=(e.max.z-g.z)*p):(c=(e.max.z-g.z)*p,l=(e.min.z-g.z)*p),n>l||c>i)||((c>n||n!==n)&&(n=c),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,t,n,i,s){ka.subVectors(t,e),_o.subVectors(n,e),Ha.crossVectors(ka,_o);let a=this.direction.dot(Ha),c;if(a>0){if(i)return null;c=1}else if(a<0)c=-1,a=-a;else return null;Yi.subVectors(this.origin,e);const l=c*this.direction.dot(_o.crossVectors(Yi,_o));if(l<0)return null;const h=c*this.direction.dot(ka.cross(Yi));if(h<0||l+h>a)return null;const f=-c*Yi.dot(Ha);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,n,i,s,a,c,l,h,f,p,g,v,M,E,x){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,c,l,h,f,p,g,v,M,E,x)}set(e,t,n,i,s,a,c,l,h,f,p,g,v,M,E,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=i,y[1]=s,y[5]=a,y[9]=c,y[13]=l,y[2]=h,y[6]=f,y[10]=p,y[14]=g,y[3]=v,y[7]=M,y[11]=E,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Fr.setFromMatrixColumn(e,0).length(),s=1/Fr.setFromMatrixColumn(e,1).length(),a=1/Fr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),c=Math.sin(n),l=Math.cos(i),h=Math.sin(i),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const g=a*f,v=a*p,M=c*f,E=c*p;t[0]=l*f,t[4]=-l*p,t[8]=h,t[1]=v+M*h,t[5]=g-E*h,t[9]=-c*l,t[2]=E-g*h,t[6]=M+v*h,t[10]=a*l}else if(e.order==="YXZ"){const g=l*f,v=l*p,M=h*f,E=h*p;t[0]=g+E*c,t[4]=M*c-v,t[8]=a*h,t[1]=a*p,t[5]=a*f,t[9]=-c,t[2]=v*c-M,t[6]=E+g*c,t[10]=a*l}else if(e.order==="ZXY"){const g=l*f,v=l*p,M=h*f,E=h*p;t[0]=g-E*c,t[4]=-a*p,t[8]=M+v*c,t[1]=v+M*c,t[5]=a*f,t[9]=E-g*c,t[2]=-a*h,t[6]=c,t[10]=a*l}else if(e.order==="ZYX"){const g=a*f,v=a*p,M=c*f,E=c*p;t[0]=l*f,t[4]=M*h-v,t[8]=g*h+E,t[1]=l*p,t[5]=E*h+g,t[9]=v*h-M,t[2]=-h,t[6]=c*l,t[10]=a*l}else if(e.order==="YZX"){const g=a*l,v=a*h,M=c*l,E=c*h;t[0]=l*f,t[4]=E-g*p,t[8]=M*p+v,t[1]=p,t[5]=a*f,t[9]=-c*f,t[2]=-h*f,t[6]=v*p+M,t[10]=g-E*p}else if(e.order==="XZY"){const g=a*l,v=a*h,M=c*l,E=c*h;t[0]=l*f,t[4]=-p,t[8]=h*f,t[1]=g*p+E,t[5]=a*f,t[9]=v*p-M,t[2]=M*p-v,t[6]=c*f,t[10]=E*p+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sp,e,op)}lookAt(e,t,n){const i=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Ki.crossVectors(n,jn),Ki.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Ki.crossVectors(n,jn)),Ki.normalize(),vo.crossVectors(jn,Ki),i[0]=Ki.x,i[4]=vo.x,i[8]=jn.x,i[1]=Ki.y,i[5]=vo.y,i[9]=jn.y,i[2]=Ki.z,i[6]=vo.z,i[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],c=n[4],l=n[8],h=n[12],f=n[1],p=n[5],g=n[9],v=n[13],M=n[2],E=n[6],x=n[10],y=n[14],D=n[3],P=n[7],N=n[11],d=n[15],F=i[0],O=i[4],q=i[8],I=i[12],R=i[1],G=i[5],oe=i[9],Q=i[13],ce=i[2],fe=i[6],ae=i[10],ye=i[14],le=i[3],be=i[7],Pe=i[11],Be=i[15];return s[0]=a*F+c*R+l*ce+h*le,s[4]=a*O+c*G+l*fe+h*be,s[8]=a*q+c*oe+l*ae+h*Pe,s[12]=a*I+c*Q+l*ye+h*Be,s[1]=f*F+p*R+g*ce+v*le,s[5]=f*O+p*G+g*fe+v*be,s[9]=f*q+p*oe+g*ae+v*Pe,s[13]=f*I+p*Q+g*ye+v*Be,s[2]=M*F+E*R+x*ce+y*le,s[6]=M*O+E*G+x*fe+y*be,s[10]=M*q+E*oe+x*ae+y*Pe,s[14]=M*I+E*Q+x*ye+y*Be,s[3]=D*F+P*R+N*ce+d*le,s[7]=D*O+P*G+N*fe+d*be,s[11]=D*q+P*oe+N*ae+d*Pe,s[15]=D*I+P*Q+N*ye+d*Be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],c=e[5],l=e[9],h=e[13],f=e[2],p=e[6],g=e[10],v=e[14],M=e[3],E=e[7],x=e[11],y=e[15];return M*(+s*l*p-i*h*p-s*c*g+n*h*g+i*c*v-n*l*v)+E*(+t*l*v-t*h*g+s*a*g-i*a*v+i*h*f-s*l*f)+x*(+t*h*p-t*c*v-s*a*p+n*a*v+s*c*f-n*h*f)+y*(-i*c*f-t*l*p+t*c*g+i*a*p-n*a*g+n*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],c=e[5],l=e[6],h=e[7],f=e[8],p=e[9],g=e[10],v=e[11],M=e[12],E=e[13],x=e[14],y=e[15],D=p*x*h-E*g*h+E*l*v-c*x*v-p*l*y+c*g*y,P=M*g*h-f*x*h-M*l*v+a*x*v+f*l*y-a*g*y,N=f*E*h-M*p*h+M*c*v-a*E*v-f*c*y+a*p*y,d=M*p*l-f*E*l-M*c*g+a*E*g+f*c*x-a*p*x,F=t*D+n*P+i*N+s*d;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return e[0]=D*O,e[1]=(E*g*s-p*x*s-E*i*v+n*x*v+p*i*y-n*g*y)*O,e[2]=(c*x*s-E*l*s+E*i*h-n*x*h-c*i*y+n*l*y)*O,e[3]=(p*l*s-c*g*s-p*i*h+n*g*h+c*i*v-n*l*v)*O,e[4]=P*O,e[5]=(f*x*s-M*g*s+M*i*v-t*x*v-f*i*y+t*g*y)*O,e[6]=(M*l*s-a*x*s-M*i*h+t*x*h+a*i*y-t*l*y)*O,e[7]=(a*g*s-f*l*s+f*i*h-t*g*h-a*i*v+t*l*v)*O,e[8]=N*O,e[9]=(M*p*s-f*E*s-M*n*v+t*E*v+f*n*y-t*p*y)*O,e[10]=(a*E*s-M*c*s+M*n*h-t*E*h-a*n*y+t*c*y)*O,e[11]=(f*c*s-a*p*s-f*n*h+t*p*h+a*n*v-t*c*v)*O,e[12]=d*O,e[13]=(f*E*i-M*p*i+M*n*g-t*E*g-f*n*x+t*p*x)*O,e[14]=(M*c*i-a*E*i-M*n*l+t*E*l+a*n*x-t*c*x)*O,e[15]=(a*p*i-f*c*i+f*n*l-t*p*l-a*n*g+t*c*g)*O,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,c=e.y,l=e.z,h=s*a,f=s*c;return this.set(h*a+n,h*c-i*l,h*l+i*c,0,h*c+i*l,f*c+n,f*l-i*a,0,h*l-i*c,f*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,c=t._z,l=t._w,h=s+s,f=a+a,p=c+c,g=s*h,v=s*f,M=s*p,E=a*f,x=a*p,y=c*p,D=l*h,P=l*f,N=l*p,d=n.x,F=n.y,O=n.z;return i[0]=(1-(E+y))*d,i[1]=(v+N)*d,i[2]=(M-P)*d,i[3]=0,i[4]=(v-N)*F,i[5]=(1-(g+y))*F,i[6]=(x+D)*F,i[7]=0,i[8]=(M+P)*O,i[9]=(x-D)*O,i[10]=(1-(g+E))*O,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Fr.set(i[0],i[1],i[2]).length();const a=Fr.set(i[4],i[5],i[6]).length(),c=Fr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ai.copy(this);const h=1/s,f=1/a,p=1/c;return ai.elements[0]*=h,ai.elements[1]*=h,ai.elements[2]*=h,ai.elements[4]*=f,ai.elements[5]*=f,ai.elements[6]*=f,ai.elements[8]*=p,ai.elements[9]*=p,ai.elements[10]*=p,t.setFromRotationMatrix(ai),n.x=s,n.y=a,n.z=c,this}makePerspective(e,t,n,i,s,a,c=ki){const l=this.elements,h=2*s/(t-e),f=2*s/(n-i),p=(t+e)/(t-e),g=(n+i)/(n-i);let v,M;if(c===ki)v=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(c===oa)v=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=f,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,c=ki){const l=this.elements,h=1/(t-e),f=1/(n-i),p=1/(a-s),g=(t+e)*h,v=(n+i)*f;let M,E;if(c===ki)M=(a+s)*p,E=-2*p;else if(c===oa)M=s*p,E=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-g,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=E,l[14]=-M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Fr=new V,ai=new mt,sp=new V(0,0,0),op=new V(1,1,1),Ki=new V,vo=new V,jn=new V,iu=new mt,ru=new yi;class Mi{constructor(e=0,t=0,n=0,i=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],c=i[8],l=i[1],h=i[5],f=i[9],p=i[2],g=i[6],v=i[10];switch(t){case"XYZ":this._y=Math.asin(_n(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,v),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_n(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(_n(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-p,v),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_n(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(_n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-_n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-f,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return iu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(iu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ru.setFromEuler(this),this.setFromQuaternion(ru,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class cl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ap=0;const su=new V,Br=new yi,Li=new mt,xo=new V,Ls=new V,cp=new V,lp=new yi,ou=new V(1,0,0),au=new V(0,1,0),cu=new V(0,0,1),lu={type:"added"},up={type:"removed"},kr={type:"childadded",child:null},za={type:"childremoved",child:null};class Kt extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new V,t=new Mi,n=new yi,i=new V(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new mt},normalMatrix:{value:new _t}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(ou,e)}rotateY(e){return this.rotateOnAxis(au,e)}rotateZ(e){return this.rotateOnAxis(cu,e)}translateOnAxis(e,t){return su.copy(e).applyQuaternion(this.quaternion),this.position.add(su.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ou,e)}translateY(e){return this.translateOnAxis(au,e)}translateZ(e){return this.translateOnAxis(cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xo.copy(e):xo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Ls,xo,this.up):Li.lookAt(xo,Ls,this.up),this.quaternion.setFromRotationMatrix(Li),i&&(Li.extractRotation(i.matrixWorld),Br.setFromRotationMatrix(Li),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lu),kr.child=e,this.dispatchEvent(kr),kr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(up),za.child=e,this.dispatchEvent(za),za.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lu),kr.child=e,this.dispatchEvent(kr),kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,e,cp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,lp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const l=c.shapes;if(Array.isArray(l))for(let h=0,f=l.length;h<f;h++){const p=l[h];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let l=0,h=this.material.length;l<h;l++)c.push(s(e.materials,this.material[l]));i.material=c}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let c=0;c<this.children.length;c++)i.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let c=0;c<this.animations.length;c++){const l=this.animations[c];i.animations.push(s(e.animations,l))}}if(t){const c=a(e.geometries),l=a(e.materials),h=a(e.textures),f=a(e.images),p=a(e.shapes),g=a(e.skeletons),v=a(e.animations),M=a(e.nodes);c.length>0&&(n.geometries=c),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),g.length>0&&(n.skeletons=g),v.length>0&&(n.animations=v),M.length>0&&(n.nodes=M)}return n.object=i,n;function a(c){const l=[];for(const h in c){const f=c[h];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Kt.DEFAULT_UP=new V(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new V,Ii=new V,Va=new V,Di=new V,Hr=new V,zr=new V,uu=new V,Ga=new V,Wa=new V,Xa=new V;class hi{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ci.subVectors(e,t),i.cross(ci);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ci.subVectors(i,t),Ii.subVectors(n,t),Va.subVectors(e,t);const a=ci.dot(ci),c=ci.dot(Ii),l=ci.dot(Va),h=Ii.dot(Ii),f=Ii.dot(Va),p=a*h-c*c;if(p===0)return s.set(0,0,0),null;const g=1/p,v=(h*l-c*f)*g,M=(a*f-c*l)*g;return s.set(1-v-M,M,v)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,t,n,i,s,a,c,l){return this.getBarycoord(e,t,n,i,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Di.x),l.addScaledVector(a,Di.y),l.addScaledVector(c,Di.z),l)}static isFrontFacing(e,t,n,i){return ci.subVectors(n,t),Ii.subVectors(e,t),ci.cross(Ii).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ci.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return hi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,c;Hr.subVectors(i,n),zr.subVectors(s,n),Ga.subVectors(e,n);const l=Hr.dot(Ga),h=zr.dot(Ga);if(l<=0&&h<=0)return t.copy(n);Wa.subVectors(e,i);const f=Hr.dot(Wa),p=zr.dot(Wa);if(f>=0&&p<=f)return t.copy(i);const g=l*p-f*h;if(g<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(n).addScaledVector(Hr,a);Xa.subVectors(e,s);const v=Hr.dot(Xa),M=zr.dot(Xa);if(M>=0&&v<=M)return t.copy(s);const E=v*h-l*M;if(E<=0&&h>=0&&M<=0)return c=h/(h-M),t.copy(n).addScaledVector(zr,c);const x=f*M-v*p;if(x<=0&&p-f>=0&&v-M>=0)return uu.subVectors(s,i),c=(p-f)/(p-f+(v-M)),t.copy(i).addScaledVector(uu,c);const y=1/(x+E+g);return a=E*y,c=g*y,t.copy(n).addScaledVector(Hr,a).addScaledVector(zr,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},yo={h:0,s:0,l:0};function ja(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ct{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ct.workingColorSpace){if(e=al(e,1),t=_n(t,0,1),n=_n(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ja(a,s,e+1/3),this.g=ja(a,s,e),this.b=ja(a,s,e-1/3)}return Ct.toWorkingColorSpace(this,i),this}setStyle(e,t=Pn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],c=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pn){const n=Bh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}copyLinearToSRGB(e){return this.r=Da(e.r),this.g=Da(e.g),this.b=Da(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return Ct.fromWorkingColorSpace(En.copy(this),e),Math.round(_n(En.r*255,0,255))*65536+Math.round(_n(En.g*255,0,255))*256+Math.round(_n(En.b*255,0,255))}getHexString(e=Pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(En.copy(this),t);const n=En.r,i=En.g,s=En.b,a=Math.max(n,i,s),c=Math.min(n,i,s);let l,h;const f=(c+a)/2;if(c===a)l=0,h=0;else{const p=a-c;switch(h=f<=.5?p/(a+c):p/(2-a-c),a){case n:l=(i-s)/p+(i<s?6:0);break;case i:l=(s-n)/p+2;break;case s:l=(n-i)/p+4;break}l/=6}return e.h=l,e.s=h,e.l=f,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=Pn){Ct.fromWorkingColorSpace(En.copy(this),e);const t=En.r,n=En.g,i=En.b;return e!==Pn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(yo);const n=Hs($i.h,yo.h,t),i=Hs($i.s,yo.s,t),s=Hs($i.l,yo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new ct;ct.NAMES=Bh;let hp=0;class xi extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=es,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fc,this.blendDst=pc,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fc&&(n.blendSrc=this.blendSrc),this.blendDst!==pc&&(n.blendDst=this.blendDst),this.blendEquation!==Mr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ta&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$l&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ir&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ir&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ir&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const c in s){const l=s[c];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class fi extends xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new V,Mo=new Ze;class In{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return is("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mo.fromBufferAttribute(this,t),Mo.applyMatrix3(e),this.setXY(t,Mo.x,Mo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wc&&(e.usage=this.usage),e}}class kh extends In{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Hh extends In{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gn extends In{constructor(e,t,n){super(new Float32Array(e),t,n)}}let dp=0;const Jn=new mt,qa=new Kt,Vr=new V,qn=new Si,Is=new Si,mn=new V;class kn extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uh(e)?Hh:kh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new _t().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,n){return Jn.makeTranslation(e,t,n),this.applyMatrix4(Jn),this}scale(e,t,n){return Jn.makeScale(e,t,n),this.applyMatrix4(Jn),this}lookAt(e){return qa.lookAt(e),qa.updateMatrix(),this.applyMatrix4(qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new gn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];qn.setFromBufferAttribute(s),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const c=t[s];Is.setFromBufferAttribute(c),this.morphTargetsRelative?(mn.addVectors(qn.min,Is.min),qn.expandByPoint(mn),mn.addVectors(qn.max,Is.max),qn.expandByPoint(mn)):(qn.expandByPoint(Is.min),qn.expandByPoint(Is.max))}qn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)mn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(mn));if(t)for(let s=0,a=t.length;s<a;s++){const c=t[s],l=this.morphTargetsRelative;for(let h=0,f=c.count;h<f;h++)mn.fromBufferAttribute(c,h),l&&(Vr.fromBufferAttribute(e,h),mn.add(Vr)),i=Math.max(i,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),c=[],l=[];for(let q=0;q<n.count;q++)c[q]=new V,l[q]=new V;const h=new V,f=new V,p=new V,g=new Ze,v=new Ze,M=new Ze,E=new V,x=new V;function y(q,I,R){h.fromBufferAttribute(n,q),f.fromBufferAttribute(n,I),p.fromBufferAttribute(n,R),g.fromBufferAttribute(s,q),v.fromBufferAttribute(s,I),M.fromBufferAttribute(s,R),f.sub(h),p.sub(h),v.sub(g),M.sub(g);const G=1/(v.x*M.y-M.x*v.y);isFinite(G)&&(E.copy(f).multiplyScalar(M.y).addScaledVector(p,-v.y).multiplyScalar(G),x.copy(p).multiplyScalar(v.x).addScaledVector(f,-M.x).multiplyScalar(G),c[q].add(E),c[I].add(E),c[R].add(E),l[q].add(x),l[I].add(x),l[R].add(x))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let q=0,I=D.length;q<I;++q){const R=D[q],G=R.start,oe=R.count;for(let Q=G,ce=G+oe;Q<ce;Q+=3)y(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const P=new V,N=new V,d=new V,F=new V;function O(q){d.fromBufferAttribute(i,q),F.copy(d);const I=c[q];P.copy(I),P.sub(d.multiplyScalar(d.dot(I))).normalize(),N.crossVectors(F,I);const G=N.dot(l[q])<0?-1:1;a.setXYZW(q,P.x,P.y,P.z,G)}for(let q=0,I=D.length;q<I;++q){const R=D[q],G=R.start,oe=R.count;for(let Q=G,ce=G+oe;Q<ce;Q+=3)O(e.getX(Q+0)),O(e.getX(Q+1)),O(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,v=n.count;g<v;g++)n.setXYZ(g,0,0,0);const i=new V,s=new V,a=new V,c=new V,l=new V,h=new V,f=new V,p=new V;if(e)for(let g=0,v=e.count;g<v;g+=3){const M=e.getX(g+0),E=e.getX(g+1),x=e.getX(g+2);i.fromBufferAttribute(t,M),s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,x),f.subVectors(a,s),p.subVectors(i,s),f.cross(p),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,E),h.fromBufferAttribute(n,x),c.add(f),l.add(f),h.add(f),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(E,l.x,l.y,l.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let g=0,v=t.count;g<v;g+=3)i.fromBufferAttribute(t,g+0),s.fromBufferAttribute(t,g+1),a.fromBufferAttribute(t,g+2),f.subVectors(a,s),p.subVectors(i,s),f.cross(p),n.setXYZ(g+0,f.x,f.y,f.z),n.setXYZ(g+1,f.x,f.y,f.z),n.setXYZ(g+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(c,l){const h=c.array,f=c.itemSize,p=c.normalized,g=new h.constructor(l.length*f);let v=0,M=0;for(let E=0,x=l.length;E<x;E++){c.isInterleavedBufferAttribute?v=l[E]*c.data.stride+c.offset:v=l[E]*f;for(let y=0;y<f;y++)g[M++]=h[v++]}return new In(g,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,n=this.index.array,i=this.attributes;for(const c in i){const l=i[c],h=e(l,n);t.setAttribute(c,h)}const s=this.morphAttributes;for(const c in s){const l=[],h=s[c];for(let f=0,p=h.length;f<p;f++){const g=h[f],v=e(g,n);l.push(v)}t.morphAttributes[c]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let c=0,l=a.length;c<l;c++){const h=a[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const h=n[l];e.data.attributes[l]=h.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],f=[];for(let p=0,g=h.length;p<g;p++){const v=h[p];f.push(v.toJSON(e.data))}f.length>0&&(i[l]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const f=i[h];this.setAttribute(h,f.clone(t))}const s=e.morphAttributes;for(const h in s){const f=[],p=s[h];for(let g=0,v=p.length;g<v;g++)f.push(p[g].clone(t));this.morphAttributes[h]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,f=a.length;h<f;h++){const p=a[h];this.addGroup(p.start,p.count,p.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hu=new mt,mr=new ms,So=new Ei,du=new V,Gr=new V,Wr=new V,Xr=new V,Ya=new V,Eo=new V,To=new Ze,bo=new Ze,Ao=new Ze,fu=new V,pu=new V,mu=new V,wo=new V,Ro=new V;class bn extends Kt{constructor(e=new kn,t=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const c=this.morphTargetInfluences;if(s&&c){Eo.set(0,0,0);for(let l=0,h=s.length;l<h;l++){const f=c[l],p=s[l];f!==0&&(Ya.fromBufferAttribute(p,e),a?Eo.addScaledVector(Ya,f):Eo.addScaledVector(Ya.sub(t),f))}t.add(Eo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(s),mr.copy(e.ray).recast(e.near),!(So.containsPoint(mr.origin)===!1&&(mr.intersectSphere(So,du)===null||mr.origin.distanceToSquared(du)>(e.far-e.near)**2))&&(hu.copy(s).invert(),mr.copy(e.ray).applyMatrix4(hu),!(n.boundingBox!==null&&mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,c=s.index,l=s.attributes.position,h=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,g=s.groups,v=s.drawRange;if(c!==null)if(Array.isArray(a))for(let M=0,E=g.length;M<E;M++){const x=g[M],y=a[x.materialIndex],D=Math.max(x.start,v.start),P=Math.min(c.count,Math.min(x.start+x.count,v.start+v.count));for(let N=D,d=P;N<d;N+=3){const F=c.getX(N),O=c.getX(N+1),q=c.getX(N+2);i=Co(this,y,e,n,h,f,p,F,O,q),i&&(i.faceIndex=Math.floor(N/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const M=Math.max(0,v.start),E=Math.min(c.count,v.start+v.count);for(let x=M,y=E;x<y;x+=3){const D=c.getX(x),P=c.getX(x+1),N=c.getX(x+2);i=Co(this,a,e,n,h,f,p,D,P,N),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let M=0,E=g.length;M<E;M++){const x=g[M],y=a[x.materialIndex],D=Math.max(x.start,v.start),P=Math.min(l.count,Math.min(x.start+x.count,v.start+v.count));for(let N=D,d=P;N<d;N+=3){const F=N,O=N+1,q=N+2;i=Co(this,y,e,n,h,f,p,F,O,q),i&&(i.faceIndex=Math.floor(N/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const M=Math.max(0,v.start),E=Math.min(l.count,v.start+v.count);for(let x=M,y=E;x<y;x+=3){const D=x,P=x+1,N=x+2;i=Co(this,a,e,n,h,f,p,D,P,N),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}}function fp(r,e,t,n,i,s,a,c){let l;if(e.side===Bn?l=n.intersectTriangle(a,s,i,!0,c):l=n.intersectTriangle(i,s,a,e.side===zi,c),l===null)return null;Ro.copy(c),Ro.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(Ro);return h<t.near||h>t.far?null:{distance:h,point:Ro.clone(),object:r}}function Co(r,e,t,n,i,s,a,c,l,h){r.getVertexPosition(c,Gr),r.getVertexPosition(l,Wr),r.getVertexPosition(h,Xr);const f=fp(r,e,t,n,Gr,Wr,Xr,wo);if(f){i&&(To.fromBufferAttribute(i,c),bo.fromBufferAttribute(i,l),Ao.fromBufferAttribute(i,h),f.uv=hi.getInterpolation(wo,Gr,Wr,Xr,To,bo,Ao,new Ze)),s&&(To.fromBufferAttribute(s,c),bo.fromBufferAttribute(s,l),Ao.fromBufferAttribute(s,h),f.uv1=hi.getInterpolation(wo,Gr,Wr,Xr,To,bo,Ao,new Ze)),a&&(fu.fromBufferAttribute(a,c),pu.fromBufferAttribute(a,l),mu.fromBufferAttribute(a,h),f.normal=hi.getInterpolation(wo,Gr,Wr,Xr,fu,pu,mu,new V),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const p={a:c,b:l,c:h,normal:new V,materialIndex:0};hi.getNormal(Gr,Wr,Xr,p.normal),f.face=p}return f}class gs extends kn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const c=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],h=[],f=[],p=[];let g=0,v=0;M("z","y","x",-1,-1,n,t,e,a,s,0),M("z","y","x",1,-1,n,t,-e,a,s,1),M("x","z","y",1,1,e,n,t,i,a,2),M("x","z","y",1,-1,e,n,-t,i,a,3),M("x","y","z",1,-1,e,t,n,i,s,4),M("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new gn(h,3)),this.setAttribute("normal",new gn(f,3)),this.setAttribute("uv",new gn(p,2));function M(E,x,y,D,P,N,d,F,O,q,I){const R=N/O,G=d/q,oe=N/2,Q=d/2,ce=F/2,fe=O+1,ae=q+1;let ye=0,le=0;const be=new V;for(let Pe=0;Pe<ae;Pe++){const Be=Pe*G-Q;for(let vt=0;vt<fe;vt++){const bt=vt*R-oe;be[E]=bt*D,be[x]=Be*P,be[y]=ce,h.push(be.x,be.y,be.z),be[E]=0,be[x]=0,be[y]=F>0?1:-1,f.push(be.x,be.y,be.z),p.push(vt/O),p.push(1-Pe/q),ye+=1}}for(let Pe=0;Pe<q;Pe++)for(let Be=0;Be<O;Be++){const vt=g+Be+fe*Pe,bt=g+Be+fe*(Pe+1),ue=g+(Be+1)+fe*(Pe+1),Me=g+(Be+1)+fe*Pe;l.push(vt,bt,Me),l.push(bt,ue,Me),le+=6}c.addGroup(v,le,I),v+=le,g+=ye}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Cn(r){const e={};for(let t=0;t<r.length;t++){const n=hs(r[t]);for(const i in n)e[i]=n[i]}return e}function pp(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function zh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const mp={clone:hs,merge:Cn};var gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_p=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ar extends xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gp,this.fragmentShader=_p,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=pp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Vh extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new V,gu=new Ze,_u=new Ze;class Ln extends Vh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return us*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,t){return this.getViewBounds(e,gu,_u),t.subVectors(_u,gu)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ns*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/h,i*=a.width/l,n*=a.height/h}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const jr=-90,qr=1;class vp extends Kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ln(jr,qr,e,t);i.layers=this.layers,this.add(i);const s=new Ln(jr,qr,e,t);s.layers=this.layers,this.add(s);const a=new Ln(jr,qr,e,t);a.layers=this.layers,this.add(a);const c=new Ln(jr,qr,e,t);c.layers=this.layers,this.add(c);const l=new Ln(jr,qr,e,t);l.layers=this.layers,this.add(l);const h=new Ln(jr,qr,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,c,l]=t;for(const h of t)this.remove(h);if(e===ki)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===oa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,c,l,h,f]=this.children,p=e.getRenderTarget(),g=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,c),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,i),e.render(t,f),e.setRenderTarget(p,g,v),e.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class Gh extends hn{constructor(e,t,n,i,s,a,c,l,h,f){e=e!==void 0?e:[],t=t!==void 0?t:os,super(e,t,n,i,s,a,c,l,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xp extends br{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Gh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new gs(5,5,5),s=new ar({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bn,blending:rr});s.uniforms.tEquirect.value=t;const a=new bn(i,s),c=t.minFilter;return t.minFilter===Bi&&(t.minFilter=Kn),new vp(1,10,this).update(e,a),t.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Ka=new V,yp=new V,Mp=new _t;class Qi{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ka.subVectors(n,t).cross(yp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ka),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Mp.getNormalMatrix(e),i=this.coplanarPoint(Ka).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new Ei,Po=new V;class ll{constructor(e=new Qi,t=new Qi,n=new Qi,i=new Qi,s=new Qi,a=new Qi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(i),c[4].copy(s),c[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ki){const n=this.planes,i=e.elements,s=i[0],a=i[1],c=i[2],l=i[3],h=i[4],f=i[5],p=i[6],g=i[7],v=i[8],M=i[9],E=i[10],x=i[11],y=i[12],D=i[13],P=i[14],N=i[15];if(n[0].setComponents(l-s,g-h,x-v,N-y).normalize(),n[1].setComponents(l+s,g+h,x+v,N+y).normalize(),n[2].setComponents(l+a,g+f,x+M,N+D).normalize(),n[3].setComponents(l-a,g-f,x-M,N-D).normalize(),n[4].setComponents(l-c,g-p,x-E,N-P).normalize(),t===ki)n[5].setComponents(l+c,g+p,x+E,N+P).normalize();else if(t===oa)n[5].setComponents(c,p,E,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Po.x=i.normal.x>0?e.max.x:e.min.x,Po.y=i.normal.y>0?e.max.y:e.min.y,Po.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Po)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wh(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Sp(r){const e=new WeakMap;function t(c,l){const h=c.array,f=c.usage,p=h.byteLength,g=r.createBuffer();r.bindBuffer(l,g),r.bufferData(l,h,f),c.onUploadCallback();let v;if(h instanceof Float32Array)v=r.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?v=r.HALF_FLOAT:v=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=r.SHORT;else if(h instanceof Uint32Array)v=r.UNSIGNED_INT;else if(h instanceof Int32Array)v=r.INT;else if(h instanceof Int8Array)v=r.BYTE;else if(h instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function n(c,l,h){const f=l.array,p=l._updateRange,g=l.updateRanges;if(r.bindBuffer(h,c),p.count===-1&&g.length===0&&r.bufferSubData(h,0,f),g.length!==0){for(let v=0,M=g.length;v<M;v++){const E=g[v];r.bufferSubData(h,E.start*f.BYTES_PER_ELEMENT,f,E.start,E.count)}l.clearUpdateRanges()}p.count!==-1&&(r.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count),p.count=-1),l.onUploadCallback()}function i(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const l=e.get(c);l&&(r.deleteBuffer(l.buffer),e.delete(c))}function a(c,l){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const f=e.get(c);(!f||f.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,l));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,l),h.version=c.version}}return{get:i,remove:s,update:a}}class $s extends kn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,c=Math.floor(n),l=Math.floor(i),h=c+1,f=l+1,p=e/c,g=t/l,v=[],M=[],E=[],x=[];for(let y=0;y<f;y++){const D=y*g-a;for(let P=0;P<h;P++){const N=P*p-s;M.push(N,-D,0),E.push(0,0,1),x.push(P/c),x.push(1-y/l)}}for(let y=0;y<l;y++)for(let D=0;D<c;D++){const P=D+h*y,N=D+h*(y+1),d=D+1+h*(y+1),F=D+1+h*y;v.push(P,N,F),v.push(N,d,F)}this.setIndex(v),this.setAttribute("position",new gn(M,3)),this.setAttribute("normal",new gn(E,3)),this.setAttribute("uv",new gn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ap=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Np=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Up=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Op=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,jp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qp="gl_FragColor = linearToOutputTexel( gl_FragColor );",em=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,im=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,om=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,am=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,um=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_m=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ym=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Em=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Am=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Im=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Um=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Om=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Km=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ng=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ig=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,og=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ag=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_g=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Eg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Pg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Lg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ng=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ug=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Og=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,e_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:Ep,alphahash_pars_fragment:Tp,alphamap_fragment:bp,alphamap_pars_fragment:Ap,alphatest_fragment:wp,alphatest_pars_fragment:Rp,aomap_fragment:Cp,aomap_pars_fragment:Pp,batching_pars_vertex:Lp,batching_vertex:Ip,begin_vertex:Dp,beginnormal_vertex:Np,bsdfs:Up,iridescence_fragment:Op,bumpmap_pars_fragment:Fp,clipping_planes_fragment:Bp,clipping_planes_pars_fragment:kp,clipping_planes_pars_vertex:Hp,clipping_planes_vertex:zp,color_fragment:Vp,color_pars_fragment:Gp,color_pars_vertex:Wp,color_vertex:Xp,common:jp,cube_uv_reflection_fragment:qp,defaultnormal_vertex:Yp,displacementmap_pars_vertex:Kp,displacementmap_vertex:$p,emissivemap_fragment:Zp,emissivemap_pars_fragment:Jp,colorspace_fragment:Qp,colorspace_pars_fragment:em,envmap_fragment:tm,envmap_common_pars_fragment:nm,envmap_pars_fragment:im,envmap_pars_vertex:rm,envmap_physical_pars_fragment:mm,envmap_vertex:sm,fog_vertex:om,fog_pars_vertex:am,fog_fragment:cm,fog_pars_fragment:lm,gradientmap_pars_fragment:um,lightmap_pars_fragment:hm,lights_lambert_fragment:dm,lights_lambert_pars_fragment:fm,lights_pars_begin:pm,lights_toon_fragment:gm,lights_toon_pars_fragment:_m,lights_phong_fragment:vm,lights_phong_pars_fragment:xm,lights_physical_fragment:ym,lights_physical_pars_fragment:Mm,lights_fragment_begin:Sm,lights_fragment_maps:Em,lights_fragment_end:Tm,logdepthbuf_fragment:bm,logdepthbuf_pars_fragment:Am,logdepthbuf_pars_vertex:wm,logdepthbuf_vertex:Rm,map_fragment:Cm,map_pars_fragment:Pm,map_particle_fragment:Lm,map_particle_pars_fragment:Im,metalnessmap_fragment:Dm,metalnessmap_pars_fragment:Nm,morphinstance_vertex:Um,morphcolor_vertex:Om,morphnormal_vertex:Fm,morphtarget_pars_vertex:Bm,morphtarget_vertex:km,normal_fragment_begin:Hm,normal_fragment_maps:zm,normal_pars_fragment:Vm,normal_pars_vertex:Gm,normal_vertex:Wm,normalmap_pars_fragment:Xm,clearcoat_normal_fragment_begin:jm,clearcoat_normal_fragment_maps:qm,clearcoat_pars_fragment:Ym,iridescence_pars_fragment:Km,opaque_fragment:$m,packing:Zm,premultiplied_alpha_fragment:Jm,project_vertex:Qm,dithering_fragment:eg,dithering_pars_fragment:tg,roughnessmap_fragment:ng,roughnessmap_pars_fragment:ig,shadowmap_pars_fragment:rg,shadowmap_pars_vertex:sg,shadowmap_vertex:og,shadowmask_pars_fragment:ag,skinbase_vertex:cg,skinning_pars_vertex:lg,skinning_vertex:ug,skinnormal_vertex:hg,specularmap_fragment:dg,specularmap_pars_fragment:fg,tonemapping_fragment:pg,tonemapping_pars_fragment:mg,transmission_fragment:gg,transmission_pars_fragment:_g,uv_pars_fragment:vg,uv_pars_vertex:xg,uv_vertex:yg,worldpos_vertex:Mg,background_vert:Sg,background_frag:Eg,backgroundCube_vert:Tg,backgroundCube_frag:bg,cube_vert:Ag,cube_frag:wg,depth_vert:Rg,depth_frag:Cg,distanceRGBA_vert:Pg,distanceRGBA_frag:Lg,equirect_vert:Ig,equirect_frag:Dg,linedashed_vert:Ng,linedashed_frag:Ug,meshbasic_vert:Og,meshbasic_frag:Fg,meshlambert_vert:Bg,meshlambert_frag:kg,meshmatcap_vert:Hg,meshmatcap_frag:zg,meshnormal_vert:Vg,meshnormal_frag:Gg,meshphong_vert:Wg,meshphong_frag:Xg,meshphysical_vert:jg,meshphysical_frag:qg,meshtoon_vert:Yg,meshtoon_frag:Kg,points_vert:$g,points_frag:Zg,shadow_vert:Jg,shadow_frag:Qg,sprite_vert:e_,sprite_frag:t_},Ce={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},vi={basic:{uniforms:Cn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Cn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ct(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Cn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Cn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Cn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new ct(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Cn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Cn([Ce.points,Ce.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Cn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Cn([Ce.common,Ce.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Cn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Cn([Ce.sprite,Ce.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:Cn([Ce.common,Ce.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:Cn([Ce.lights,Ce.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};vi.physical={uniforms:Cn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Lo={r:0,b:0,g:0},_r=new Mi,n_=new mt;function i_(r,e,t,n,i,s,a){const c=new ct(0);let l=s===!0?0:1,h,f,p=null,g=0,v=null;function M(D){let P=D.isScene===!0?D.background:null;return P&&P.isTexture&&(P=(D.backgroundBlurriness>0?t:e).get(P)),P}function E(D){let P=!1;const N=M(D);N===null?y(c,l):N&&N.isColor&&(y(N,1),P=!0);const d=r.xr.getEnvironmentBlendMode();d==="additive"?n.buffers.color.setClear(0,0,0,1,a):d==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||P)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(D,P){const N=M(P);N&&(N.isCubeTexture||N.mapping===fa)?(f===void 0&&(f=new bn(new gs(1,1,1),new ar({name:"BackgroundCubeMaterial",uniforms:hs(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(d,F,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),_r.copy(P.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),f.material.uniforms.envMap.value=N,f.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(n_.makeRotationFromEuler(_r)),f.material.toneMapped=Ct.getTransfer(N.colorSpace)!==Vt,(p!==N||g!==N.version||v!==r.toneMapping)&&(f.material.needsUpdate=!0,p=N,g=N.version,v=r.toneMapping),f.layers.enableAll(),D.unshift(f,f.geometry,f.material,0,0,null)):N&&N.isTexture&&(h===void 0&&(h=new bn(new $s(2,2),new ar({name:"BackgroundMaterial",uniforms:hs(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=N,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.toneMapped=Ct.getTransfer(N.colorSpace)!==Vt,N.matrixAutoUpdate===!0&&N.updateMatrix(),h.material.uniforms.uvTransform.value.copy(N.matrix),(p!==N||g!==N.version||v!==r.toneMapping)&&(h.material.needsUpdate=!0,p=N,g=N.version,v=r.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null))}function y(D,P){D.getRGB(Lo,zh(r)),n.buffers.color.setClear(Lo.r,Lo.g,Lo.b,P,a)}return{getClearColor:function(){return c},setClearColor:function(D,P=1){c.set(D),l=P,y(c,l)},getClearAlpha:function(){return l},setClearAlpha:function(D){l=D,y(c,l)},render:E,addToRenderList:x}}function r_(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=g(null);let s=i,a=!1;function c(R,G,oe,Q,ce){let fe=!1;const ae=p(Q,oe,G);s!==ae&&(s=ae,h(s.object)),fe=v(R,Q,oe,ce),fe&&M(R,Q,oe,ce),ce!==null&&e.update(ce,r.ELEMENT_ARRAY_BUFFER),(fe||a)&&(a=!1,N(R,G,oe,Q),ce!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function l(){return r.createVertexArray()}function h(R){return r.bindVertexArray(R)}function f(R){return r.deleteVertexArray(R)}function p(R,G,oe){const Q=oe.wireframe===!0;let ce=n[R.id];ce===void 0&&(ce={},n[R.id]=ce);let fe=ce[G.id];fe===void 0&&(fe={},ce[G.id]=fe);let ae=fe[Q];return ae===void 0&&(ae=g(l()),fe[Q]=ae),ae}function g(R){const G=[],oe=[],Q=[];for(let ce=0;ce<t;ce++)G[ce]=0,oe[ce]=0,Q[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:oe,attributeDivisors:Q,object:R,attributes:{},index:null}}function v(R,G,oe,Q){const ce=s.attributes,fe=G.attributes;let ae=0;const ye=oe.getAttributes();for(const le in ye)if(ye[le].location>=0){const Pe=ce[le];let Be=fe[le];if(Be===void 0&&(le==="instanceMatrix"&&R.instanceMatrix&&(Be=R.instanceMatrix),le==="instanceColor"&&R.instanceColor&&(Be=R.instanceColor)),Pe===void 0||Pe.attribute!==Be||Be&&Pe.data!==Be.data)return!0;ae++}return s.attributesNum!==ae||s.index!==Q}function M(R,G,oe,Q){const ce={},fe=G.attributes;let ae=0;const ye=oe.getAttributes();for(const le in ye)if(ye[le].location>=0){let Pe=fe[le];Pe===void 0&&(le==="instanceMatrix"&&R.instanceMatrix&&(Pe=R.instanceMatrix),le==="instanceColor"&&R.instanceColor&&(Pe=R.instanceColor));const Be={};Be.attribute=Pe,Pe&&Pe.data&&(Be.data=Pe.data),ce[le]=Be,ae++}s.attributes=ce,s.attributesNum=ae,s.index=Q}function E(){const R=s.newAttributes;for(let G=0,oe=R.length;G<oe;G++)R[G]=0}function x(R){y(R,0)}function y(R,G){const oe=s.newAttributes,Q=s.enabledAttributes,ce=s.attributeDivisors;oe[R]=1,Q[R]===0&&(r.enableVertexAttribArray(R),Q[R]=1),ce[R]!==G&&(r.vertexAttribDivisor(R,G),ce[R]=G)}function D(){const R=s.newAttributes,G=s.enabledAttributes;for(let oe=0,Q=G.length;oe<Q;oe++)G[oe]!==R[oe]&&(r.disableVertexAttribArray(oe),G[oe]=0)}function P(R,G,oe,Q,ce,fe,ae){ae===!0?r.vertexAttribIPointer(R,G,oe,ce,fe):r.vertexAttribPointer(R,G,oe,Q,ce,fe)}function N(R,G,oe,Q){E();const ce=Q.attributes,fe=oe.getAttributes(),ae=G.defaultAttributeValues;for(const ye in fe){const le=fe[ye];if(le.location>=0){let be=ce[ye];if(be===void 0&&(ye==="instanceMatrix"&&R.instanceMatrix&&(be=R.instanceMatrix),ye==="instanceColor"&&R.instanceColor&&(be=R.instanceColor)),be!==void 0){const Pe=be.normalized,Be=be.itemSize,vt=e.get(be);if(vt===void 0)continue;const bt=vt.buffer,ue=vt.type,Me=vt.bytesPerElement,Le=ue===r.INT||ue===r.UNSIGNED_INT||be.gpuType===Qc;if(be.isInterleavedBufferAttribute){const Fe=be.data,ut=Fe.stride,ft=be.offset;if(Fe.isInstancedInterleavedBuffer){for(let Je=0;Je<le.locationSize;Je++)y(le.location+Je,Fe.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let Je=0;Je<le.locationSize;Je++)x(le.location+Je);r.bindBuffer(r.ARRAY_BUFFER,bt);for(let Je=0;Je<le.locationSize;Je++)P(le.location+Je,Be/le.locationSize,ue,Pe,ut*Me,(ft+Be/le.locationSize*Je)*Me,Le)}else{if(be.isInstancedBufferAttribute){for(let Fe=0;Fe<le.locationSize;Fe++)y(le.location+Fe,be.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Fe=0;Fe<le.locationSize;Fe++)x(le.location+Fe);r.bindBuffer(r.ARRAY_BUFFER,bt);for(let Fe=0;Fe<le.locationSize;Fe++)P(le.location+Fe,Be/le.locationSize,ue,Pe,Be*Me,Be/le.locationSize*Fe*Me,Le)}}else if(ae!==void 0){const Pe=ae[ye];if(Pe!==void 0)switch(Pe.length){case 2:r.vertexAttrib2fv(le.location,Pe);break;case 3:r.vertexAttrib3fv(le.location,Pe);break;case 4:r.vertexAttrib4fv(le.location,Pe);break;default:r.vertexAttrib1fv(le.location,Pe)}}}}D()}function d(){q();for(const R in n){const G=n[R];for(const oe in G){const Q=G[oe];for(const ce in Q)f(Q[ce].object),delete Q[ce];delete G[oe]}delete n[R]}}function F(R){if(n[R.id]===void 0)return;const G=n[R.id];for(const oe in G){const Q=G[oe];for(const ce in Q)f(Q[ce].object),delete Q[ce];delete G[oe]}delete n[R.id]}function O(R){for(const G in n){const oe=n[G];if(oe[R.id]===void 0)continue;const Q=oe[R.id];for(const ce in Q)f(Q[ce].object),delete Q[ce];delete oe[R.id]}}function q(){I(),a=!0,s!==i&&(s=i,h(s.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:c,reset:q,resetDefaultState:I,dispose:d,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:E,enableAttribute:x,disableUnusedAttributes:D}}function s_(r,e,t){let n;function i(h){n=h}function s(h,f){r.drawArrays(n,h,f),t.update(f,n,1)}function a(h,f,p){p!==0&&(r.drawArraysInstanced(n,h,f,p),t.update(f,n,p))}function c(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,f,0,p);let v=0;for(let M=0;M<p;M++)v+=f[M];t.update(v,n,1)}function l(h,f,p,g){if(p===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let M=0;M<h.length;M++)a(h[M],f[M],g[M]);else{v.multiDrawArraysInstancedWEBGL(n,h,0,f,0,g,0,p);let M=0;for(let E=0;E<p;E++)M+=f[E];for(let E=0;E<g.length;E++)t.update(M,n,g[E])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=c,this.renderMultiDrawInstances=l}function o_(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(F){return!(F!==ti&&n.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(F){const O=F===Ks&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Vi&&n.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==di&&!O)}function l(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const f=l(h);f!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const p=t.logarithmicDepthBuffer===!0,g=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),E=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),N=v>0,d=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:p,maxTextures:g,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:E,maxAttributes:x,maxVertexUniforms:y,maxVaryings:D,maxFragmentUniforms:P,vertexTextures:N,maxSamples:d}}function a_(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Qi,c=new _t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,g){const v=p.length!==0||g||n!==0||i;return i=g,n=p.length,v},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,g){t=f(p,g,0)},this.setState=function(p,g,v){const M=p.clippingPlanes,E=p.clipIntersection,x=p.clipShadows,y=r.get(p);if(!i||M===null||M.length===0||s&&!x)s?f(null):h();else{const D=s?0:n,P=D*4;let N=y.clippingState||null;l.value=N,N=f(M,g,P,v);for(let d=0;d!==P;++d)N[d]=t[d];y.clippingState=N,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=D}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(p,g,v,M){const E=p!==null?p.length:0;let x=null;if(E!==0){if(x=l.value,M!==!0||x===null){const y=v+E*4,D=g.matrixWorldInverse;c.getNormalMatrix(D),(x===null||x.length<y)&&(x=new Float32Array(y));for(let P=0,N=v;P!==E;++P,N+=4)a.copy(p[P]).applyMatrix4(D,c),a.normal.toArray(x,N),x[N+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}function c_(r){let e=new WeakMap;function t(a,c){return c===mc?a.mapping=os:c===gc&&(a.mapping=as),a}function n(a){if(a&&a.isTexture){const c=a.mapping;if(c===mc||c===gc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const h=new xp(l.height);return h.fromEquirectangularTexture(r,a),e.set(a,h),a.addEventListener("dispose",i),t(h.texture,a.mapping)}else return null}}return a}function i(a){const c=a.target;c.removeEventListener("dispose",i);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ul extends Vh{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,c=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,c-=f*this.view.offsetY,l=c-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,c,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zr=4,vu=[.125,.215,.35,.446,.526,.582],Sr=20,$a=new ul,xu=new ct;let Za=null,Ja=0,Qa=0,ec=!1;const yr=(1+Math.sqrt(5))/2,Yr=1/yr,yu=[new V(-yr,Yr,0),new V(yr,Yr,0),new V(-Yr,0,yr),new V(Yr,0,yr),new V(0,yr,-Yr),new V(0,yr,Yr),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class Mu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Za=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Za,Ja,Qa),this._renderer.xr.enabled=ec,e.scissorTest=!1,Io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===os||e.mapping===as?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Za=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:Ks,format:ti,colorSpace:vn,depthBuffer:!1},i=Su(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Su(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l_(s)),this._blurMaterial=u_(s,e,t)}return i}_compileMaterial(e){const t=new bn(this._lodPlanes[0],e);this._renderer.compile(t,$a)}_sceneToCubeUV(e,t,n,i){const c=new Ln(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,g=f.toneMapping;f.getClearColor(xu),f.toneMapping=sr,f.autoClear=!1;const v=new fi({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),M=new bn(new gs,v);let E=!1;const x=e.background;x?x.isColor&&(v.color.copy(x),e.background=null,E=!0):(v.color.copy(xu),E=!0);for(let y=0;y<6;y++){const D=y%3;D===0?(c.up.set(0,l[y],0),c.lookAt(h[y],0,0)):D===1?(c.up.set(0,0,l[y]),c.lookAt(0,h[y],0)):(c.up.set(0,l[y],0),c.lookAt(0,0,h[y]));const P=this._cubeSize;Io(i,D*P,y>2?P:0,P,P),f.setRenderTarget(i),E&&f.render(M,c),f.render(e,c)}M.geometry.dispose(),M.material.dispose(),f.toneMapping=g,f.autoClear=p,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===os||e.mapping===as;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eu());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new bn(this._lodPlanes[0],s),c=s.uniforms;c.envMap.value=e;const l=this._cubeSize;Io(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,$a)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=yu[(i-s-1)%yu.length];this._blur(e,s-1,s,a,c)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,c){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new bn(this._lodPlanes[i],h),g=h.uniforms,v=this._sizeLods[n]-1,M=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*Sr-1),E=s/M,x=isFinite(s)?1+Math.floor(f*E):Sr;x>Sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Sr}`);const y=[];let D=0;for(let O=0;O<Sr;++O){const q=O/E,I=Math.exp(-q*q/2);y.push(I),O===0?D+=I:O<x&&(D+=2*I)}for(let O=0;O<y.length;O++)y[O]=y[O]/D;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=y,g.latitudinal.value=a==="latitudinal",c&&(g.poleAxis.value=c);const{_lodMax:P}=this;g.dTheta.value=M,g.mipInt.value=P-n;const N=this._sizeLods[i],d=3*N*(i>P-Zr?i-P+Zr:0),F=4*(this._cubeSize-N);Io(t,d,F,3*N,2*N),l.setRenderTarget(t),l.render(p,$a)}}function l_(r){const e=[],t=[],n=[];let i=r;const s=r-Zr+1+vu.length;for(let a=0;a<s;a++){const c=Math.pow(2,i);t.push(c);let l=1/c;a>r-Zr?l=vu[a-r+Zr-1]:a===0&&(l=0),n.push(l);const h=1/(c-2),f=-h,p=1+h,g=[f,f,p,f,p,p,f,f,p,p,f,p],v=6,M=6,E=3,x=2,y=1,D=new Float32Array(E*M*v),P=new Float32Array(x*M*v),N=new Float32Array(y*M*v);for(let F=0;F<v;F++){const O=F%3*2/3-1,q=F>2?0:-1,I=[O,q,0,O+2/3,q,0,O+2/3,q+1,0,O,q,0,O+2/3,q+1,0,O,q+1,0];D.set(I,E*M*F),P.set(g,x*M*F);const R=[F,F,F,F,F,F];N.set(R,y*M*F)}const d=new kn;d.setAttribute("position",new In(D,E)),d.setAttribute("uv",new In(P,x)),d.setAttribute("faceIndex",new In(N,y)),e.push(d),i>Zr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Su(r,e,t){const n=new br(r,e,t);return n.texture.mapping=fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Io(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function u_(r,e,t){const n=new Float32Array(Sr),i=new V(0,1,0);return new ar({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Eu(){return new ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Tu(){return new ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function hl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function h_(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const l=c.mapping,h=l===mc||l===gc,f=l===os||l===as;if(h||f){let p=e.get(c);const g=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==g)return t===null&&(t=new Mu(r)),p=h?t.fromEquirectangular(c,p):t.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),p.texture;if(p!==void 0)return p.texture;{const v=c.image;return h&&v&&v.height>0||f&&v&&i(v)?(t===null&&(t=new Mu(r)),p=h?t.fromEquirectangular(c):t.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),c.addEventListener("dispose",s),p.texture):null}}}return c}function i(c){let l=0;const h=6;for(let f=0;f<h;f++)c[f]!==void 0&&l++;return l===h}function s(c){const l=c.target;l.removeEventListener("dispose",s);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function d_(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&is("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function f_(r,e,t,n){const i={},s=new WeakMap;function a(p){const g=p.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);for(const M in g.morphAttributes){const E=g.morphAttributes[M];for(let x=0,y=E.length;x<y;x++)e.remove(E[x])}g.removeEventListener("dispose",a),delete i[g.id];const v=s.get(g);v&&(e.remove(v),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(p,g){return i[g.id]===!0||(g.addEventListener("dispose",a),i[g.id]=!0,t.memory.geometries++),g}function l(p){const g=p.attributes;for(const M in g)e.update(g[M],r.ARRAY_BUFFER);const v=p.morphAttributes;for(const M in v){const E=v[M];for(let x=0,y=E.length;x<y;x++)e.update(E[x],r.ARRAY_BUFFER)}}function h(p){const g=[],v=p.index,M=p.attributes.position;let E=0;if(v!==null){const D=v.array;E=v.version;for(let P=0,N=D.length;P<N;P+=3){const d=D[P+0],F=D[P+1],O=D[P+2];g.push(d,F,F,O,O,d)}}else if(M!==void 0){const D=M.array;E=M.version;for(let P=0,N=D.length/3-1;P<N;P+=3){const d=P+0,F=P+1,O=P+2;g.push(d,F,F,O,O,d)}}else return;const x=new(Uh(g)?Hh:kh)(g,1);x.version=E;const y=s.get(p);y&&e.remove(y),s.set(p,x)}function f(p){const g=s.get(p);if(g){const v=p.index;v!==null&&g.version<v.version&&h(p)}else h(p);return s.get(p)}return{get:c,update:l,getWireframeAttribute:f}}function p_(r,e,t){let n;function i(g){n=g}let s,a;function c(g){s=g.type,a=g.bytesPerElement}function l(g,v){r.drawElements(n,v,s,g*a),t.update(v,n,1)}function h(g,v,M){M!==0&&(r.drawElementsInstanced(n,v,s,g*a,M),t.update(v,n,M))}function f(g,v,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,s,g,0,M);let x=0;for(let y=0;y<M;y++)x+=v[y];t.update(x,n,1)}function p(g,v,M,E){if(M===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<g.length;y++)h(g[y]/a,v[y],E[y]);else{x.multiDrawElementsInstancedWEBGL(n,v,0,s,g,0,E,0,M);let y=0;for(let D=0;D<M;D++)y+=v[D];for(let D=0;D<E.length;D++)t.update(y,n,E[D])}}this.setMode=i,this.setIndex=c,this.render=l,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function m_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,c){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=c*(s/3);break;case r.LINES:t.lines+=c*(s/2);break;case r.LINE_STRIP:t.lines+=c*(s-1);break;case r.LINE_LOOP:t.lines+=c*s;break;case r.POINTS:t.points+=c*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function g_(r,e,t){const n=new WeakMap,i=new Ut;function s(a,c,l){const h=a.morphTargetInfluences,f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=f!==void 0?f.length:0;let g=n.get(c);if(g===void 0||g.count!==p){let I=function(){O.dispose(),n.delete(c),c.removeEventListener("dispose",I)};g!==void 0&&g.texture.dispose();const v=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,E=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],D=c.morphAttributes.color||[];let P=0;v===!0&&(P=1),M===!0&&(P=2),E===!0&&(P=3);let N=c.attributes.position.count*P,d=1;N>e.maxTextureSize&&(d=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const F=new Float32Array(N*d*4*p),O=new Fh(F,N,d,p);O.type=di,O.needsUpdate=!0;const q=P*4;for(let R=0;R<p;R++){const G=x[R],oe=y[R],Q=D[R],ce=N*d*4*R;for(let fe=0;fe<G.count;fe++){const ae=fe*q;v===!0&&(i.fromBufferAttribute(G,fe),F[ce+ae+0]=i.x,F[ce+ae+1]=i.y,F[ce+ae+2]=i.z,F[ce+ae+3]=0),M===!0&&(i.fromBufferAttribute(oe,fe),F[ce+ae+4]=i.x,F[ce+ae+5]=i.y,F[ce+ae+6]=i.z,F[ce+ae+7]=0),E===!0&&(i.fromBufferAttribute(Q,fe),F[ce+ae+8]=i.x,F[ce+ae+9]=i.y,F[ce+ae+10]=i.z,F[ce+ae+11]=Q.itemSize===4?i.w:1)}}g={count:p,texture:O,size:new Ze(N,d)},n.set(c,g),c.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let v=0;for(let E=0;E<h.length;E++)v+=h[E];const M=c.morphTargetsRelative?1:1-v;l.getUniforms().setValue(r,"morphTargetBaseInfluence",M),l.getUniforms().setValue(r,"morphTargetInfluences",h)}l.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:s}}function __(r,e,t,n){let i=new WeakMap;function s(l){const h=n.render.frame,f=l.geometry,p=e.get(l,f);if(i.get(p)!==h&&(e.update(p),i.set(p,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),i.get(l)!==h&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,h))),l.isSkinnedMesh){const g=l.skeleton;i.get(g)!==h&&(g.update(),i.set(g,h))}return p}function a(){i=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:a}}class Xh extends hn{constructor(e,t,n,i,s,a,c,l,h,f=ts){if(f!==ts&&f!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===ts&&(n=Tr),n===void 0&&f===ls&&(n=cs),super(null,i,s,a,c,l,f,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Tn,this.minFilter=l!==void 0?l:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const jh=new hn,bu=new Xh(1,1),qh=new Fh,Yh=new ip,Kh=new Gh,Au=[],wu=[],Ru=new Float32Array(16),Cu=new Float32Array(9),Pu=new Float32Array(4);function _s(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Au[i];if(s===void 0&&(s=new Float32Array(i),Au[i]=s),e!==0){n.toArray(s,0);for(let a=1,c=0;a!==e;++a)c+=t,r[a].toArray(s,c)}return s}function dn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function fn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ma(r,e){let t=wu[e];t===void 0&&(t=new Int32Array(e),wu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function v_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function x_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2fv(this.addr,e),fn(t,e)}}function y_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;r.uniform3fv(this.addr,e),fn(t,e)}}function M_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4fv(this.addr,e),fn(t,e)}}function S_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;Pu.set(n),r.uniformMatrix2fv(this.addr,!1,Pu),fn(t,n)}}function E_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;Cu.set(n),r.uniformMatrix3fv(this.addr,!1,Cu),fn(t,n)}}function T_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;Ru.set(n),r.uniformMatrix4fv(this.addr,!1,Ru),fn(t,n)}}function b_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function A_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2iv(this.addr,e),fn(t,e)}}function w_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;r.uniform3iv(this.addr,e),fn(t,e)}}function R_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4iv(this.addr,e),fn(t,e)}}function C_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function P_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2uiv(this.addr,e),fn(t,e)}}function L_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;r.uniform3uiv(this.addr,e),fn(t,e)}}function I_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4uiv(this.addr,e),fn(t,e)}}function D_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(bu.compareFunction=Nh,s=bu):s=jh,t.setTexture2D(e||s,i)}function N_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Yh,i)}function U_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Kh,i)}function O_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||qh,i)}function F_(r){switch(r){case 5126:return v_;case 35664:return x_;case 35665:return y_;case 35666:return M_;case 35674:return S_;case 35675:return E_;case 35676:return T_;case 5124:case 35670:return b_;case 35667:case 35671:return A_;case 35668:case 35672:return w_;case 35669:case 35673:return R_;case 5125:return C_;case 36294:return P_;case 36295:return L_;case 36296:return I_;case 35678:case 36198:case 36298:case 36306:case 35682:return D_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return O_}}function B_(r,e){r.uniform1fv(this.addr,e)}function k_(r,e){const t=_s(e,this.size,2);r.uniform2fv(this.addr,t)}function H_(r,e){const t=_s(e,this.size,3);r.uniform3fv(this.addr,t)}function z_(r,e){const t=_s(e,this.size,4);r.uniform4fv(this.addr,t)}function V_(r,e){const t=_s(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function G_(r,e){const t=_s(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function W_(r,e){const t=_s(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function X_(r,e){r.uniform1iv(this.addr,e)}function j_(r,e){r.uniform2iv(this.addr,e)}function q_(r,e){r.uniform3iv(this.addr,e)}function Y_(r,e){r.uniform4iv(this.addr,e)}function K_(r,e){r.uniform1uiv(this.addr,e)}function $_(r,e){r.uniform2uiv(this.addr,e)}function Z_(r,e){r.uniform3uiv(this.addr,e)}function J_(r,e){r.uniform4uiv(this.addr,e)}function Q_(r,e,t){const n=this.cache,i=e.length,s=ma(t,i);dn(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||jh,s[a])}function e0(r,e,t){const n=this.cache,i=e.length,s=ma(t,i);dn(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Yh,s[a])}function t0(r,e,t){const n=this.cache,i=e.length,s=ma(t,i);dn(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Kh,s[a])}function n0(r,e,t){const n=this.cache,i=e.length,s=ma(t,i);dn(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||qh,s[a])}function i0(r){switch(r){case 5126:return B_;case 35664:return k_;case 35665:return H_;case 35666:return z_;case 35674:return V_;case 35675:return G_;case 35676:return W_;case 5124:case 35670:return X_;case 35667:case 35671:return j_;case 35668:case 35672:return q_;case 35669:case 35673:return Y_;case 5125:return K_;case 36294:return $_;case 36295:return Z_;case 36296:return J_;case 35678:case 36198:case 36298:case 36306:case 35682:return Q_;case 35679:case 36299:case 36307:return e0;case 35680:case 36300:case 36308:case 36293:return t0;case 36289:case 36303:case 36311:case 36292:return n0}}class r0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=F_(t.type)}}class s0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=i0(t.type)}}class o0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const c=i[s];c.setValue(e,t[c.id],n)}}}const tc=/(\w+)(\])?(\[|\.)?/g;function Lu(r,e){r.seq.push(e),r.map[e.id]=e}function a0(r,e,t){const n=r.name,i=n.length;for(tc.lastIndex=0;;){const s=tc.exec(n),a=tc.lastIndex;let c=s[1];const l=s[2]==="]",h=s[3];if(l&&(c=c|0),h===void 0||h==="["&&a+2===i){Lu(t,h===void 0?new r0(c,r,e):new s0(c,r,e));break}else{let p=t.map[c];p===void 0&&(p=new o0(c),Lu(t,p)),t=p}}}class Qo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);a0(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const c=t[s],l=n[c.id];l.needsUpdate!==!1&&c.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Iu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const c0=37297;let l0=0;function u0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const c=a+1;n.push(`${c===e?">":" "} ${c}: ${t[a]}`)}return n.join(`
`)}function h0(r){const e=Ct.getPrimaries(Ct.workingColorSpace),t=Ct.getPrimaries(r);let n;switch(e===t?n="":e===sa&&t===ra?n="LinearDisplayP3ToLinearSRGB":e===ra&&t===sa&&(n="LinearSRGBToLinearDisplayP3"),r){case vn:case pa:return[n,"LinearTransferOETF"];case Pn:case ol:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Du(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+u0(r.getShaderSource(e),a)}else return i}function d0(r,e){const t=h0(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function f0(r,e){let t;switch(e){case pf:t="Linear";break;case mf:t="Reinhard";break;case gf:t="OptimizedCineon";break;case _f:t="ACESFilmic";break;case xf:t="AgX";break;case yf:t="Neutral";break;case vf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Do=new V;function p0(){Ct.getLuminanceCoefficients(Do);const r=Do.x.toFixed(4),e=Do.y.toFixed(4),t=Do.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function g0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _0(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let c=1;s.type===r.FLOAT_MAT2&&(c=2),s.type===r.FLOAT_MAT3&&(c=3),s.type===r.FLOAT_MAT4&&(c=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:c}}return t}function ks(r){return r!==""}function Nu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const v0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xc(r){return r.replace(v0,y0)}const x0=new Map;function y0(r,e){let t=gt[e];if(t===void 0){const n=x0.get(e);if(n!==void 0)t=gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xc(t)}const M0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ou(r){return r.replace(M0,S0)}function S0(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Fu(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function E0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===xh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===kd?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function T0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case os:case as:e="ENVMAP_TYPE_CUBE";break;case fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function b0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case as:e="ENVMAP_MODE_REFRACTION";break}return e}function A0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case yh:e="ENVMAP_BLENDING_MULTIPLY";break;case df:e="ENVMAP_BLENDING_MIX";break;case ff:e="ENVMAP_BLENDING_ADD";break}return e}function w0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function R0(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,c=t.fragmentShader;const l=E0(t),h=T0(t),f=b0(t),p=A0(t),g=w0(t),v=m0(t),M=g0(s),E=i.createProgram();let x,y,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ks).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ks).join(`
`),y.length>0&&(y+=`
`)):(x=[Fu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),y=[Fu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==sr?"#define TONE_MAPPING":"",t.toneMapping!==sr?gt.tonemapping_pars_fragment:"",t.toneMapping!==sr?f0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,d0("linearToOutputTexel",t.outputColorSpace),p0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ks).join(`
`)),a=Xc(a),a=Nu(a,t),a=Uu(a,t),c=Xc(c),c=Nu(c,t),c=Uu(c,t),a=Ou(a),c=Ou(c),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,x=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",t.glslVersion===Zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=D+x+a,N=D+y+c,d=Iu(i,i.VERTEX_SHADER,P),F=Iu(i,i.FRAGMENT_SHADER,N);i.attachShader(E,d),i.attachShader(E,F),t.index0AttributeName!==void 0?i.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(E,0,"position"),i.linkProgram(E);function O(G){if(r.debug.checkShaderErrors){const oe=i.getProgramInfoLog(E).trim(),Q=i.getShaderInfoLog(d).trim(),ce=i.getShaderInfoLog(F).trim();let fe=!0,ae=!0;if(i.getProgramParameter(E,i.LINK_STATUS)===!1)if(fe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,E,d,F);else{const ye=Du(i,d,"vertex"),le=Du(i,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(E,i.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+oe+`
`+ye+`
`+le)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(Q===""||ce==="")&&(ae=!1);ae&&(G.diagnostics={runnable:fe,programLog:oe,vertexShader:{log:Q,prefix:x},fragmentShader:{log:ce,prefix:y}})}i.deleteShader(d),i.deleteShader(F),q=new Qo(i,E),I=_0(i,E)}let q;this.getUniforms=function(){return q===void 0&&O(this),q};let I;this.getAttributes=function(){return I===void 0&&O(this),I};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(E,c0)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=l0++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=d,this.fragmentShader=F,this}let C0=0;class P0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new L0(e),t.set(e,n)),n}}class L0{constructor(e){this.id=C0++,this.code=e,this.usedTimes=0}}function I0(r,e,t,n,i,s,a){const c=new cl,l=new P0,h=new Set,f=[],p=i.logarithmicDepthBuffer,g=i.vertexTextures;let v=i.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(I){return h.add(I),I===0?"uv":`uv${I}`}function x(I,R,G,oe,Q){const ce=oe.fog,fe=Q.geometry,ae=I.isMeshStandardMaterial?oe.environment:null,ye=(I.isMeshStandardMaterial?t:e).get(I.envMap||ae),le=ye&&ye.mapping===fa?ye.image.height:null,be=M[I.type];I.precision!==null&&(v=i.getMaxPrecision(I.precision),v!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",v,"instead."));const Pe=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Be=Pe!==void 0?Pe.length:0;let vt=0;fe.morphAttributes.position!==void 0&&(vt=1),fe.morphAttributes.normal!==void 0&&(vt=2),fe.morphAttributes.color!==void 0&&(vt=3);let bt,ue,Me,Le;if(be){const St=vi[be];bt=St.vertexShader,ue=St.fragmentShader}else bt=I.vertexShader,ue=I.fragmentShader,l.update(I),Me=l.getVertexShaderID(I),Le=l.getFragmentShaderID(I);const Fe=r.getRenderTarget(),ut=Q.isInstancedMesh===!0,ft=Q.isBatchedMesh===!0,Je=!!I.map,Pt=!!I.matcap,H=!!ye,Ie=!!I.aoMap,ot=!!I.lightMap,At=!!I.bumpMap,We=!!I.normalMap,Ht=!!I.displacementMap,it=!!I.emissiveMap,Qe=!!I.metalnessMap,U=!!I.roughnessMap,A=I.anisotropy>0,ee=I.clearcoat>0,_e=I.dispersion>0,ve=I.iridescence>0,pe=I.sheen>0,Ye=I.transmission>0,Te=A&&!!I.anisotropyMap,Re=ee&&!!I.clearcoatMap,rt=ee&&!!I.clearcoatNormalMap,Se=ee&&!!I.clearcoatRoughnessMap,Ue=ve&&!!I.iridescenceMap,xt=ve&&!!I.iridescenceThicknessMap,Ve=pe&&!!I.sheenColorMap,we=pe&&!!I.sheenRoughnessMap,et=!!I.specularMap,at=!!I.specularColorMap,Ot=!!I.specularIntensityMap,T=Ye&&!!I.transmissionMap,$=Ye&&!!I.thicknessMap,Z=!!I.gradientMap,re=!!I.alphaMap,ge=I.alphaTest>0,Xe=!!I.alphaHash,tt=!!I.extensions;let kt=sr;I.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(kt=r.toneMapping);const Jt={shaderID:be,shaderType:I.type,shaderName:I.name,vertexShader:bt,fragmentShader:ue,defines:I.defines,customVertexShaderID:Me,customFragmentShaderID:Le,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:v,batching:ft,batchingColor:ft&&Q._colorsTexture!==null,instancing:ut,instancingColor:ut&&Q.instanceColor!==null,instancingMorph:ut&&Q.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Fe===null?r.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:vn,alphaToCoverage:!!I.alphaToCoverage,map:Je,matcap:Pt,envMap:H,envMapMode:H&&ye.mapping,envMapCubeUVHeight:le,aoMap:Ie,lightMap:ot,bumpMap:At,normalMap:We,displacementMap:g&&Ht,emissiveMap:it,normalMapObjectSpace:We&&I.normalMapType===Af,normalMapTangentSpace:We&&I.normalMapType===Dh,metalnessMap:Qe,roughnessMap:U,anisotropy:A,anisotropyMap:Te,clearcoat:ee,clearcoatMap:Re,clearcoatNormalMap:rt,clearcoatRoughnessMap:Se,dispersion:_e,iridescence:ve,iridescenceMap:Ue,iridescenceThicknessMap:xt,sheen:pe,sheenColorMap:Ve,sheenRoughnessMap:we,specularMap:et,specularColorMap:at,specularIntensityMap:Ot,transmission:Ye,transmissionMap:T,thicknessMap:$,gradientMap:Z,opaque:I.transparent===!1&&I.blending===es&&I.alphaToCoverage===!1,alphaMap:re,alphaTest:ge,alphaHash:Xe,combine:I.combine,mapUv:Je&&E(I.map.channel),aoMapUv:Ie&&E(I.aoMap.channel),lightMapUv:ot&&E(I.lightMap.channel),bumpMapUv:At&&E(I.bumpMap.channel),normalMapUv:We&&E(I.normalMap.channel),displacementMapUv:Ht&&E(I.displacementMap.channel),emissiveMapUv:it&&E(I.emissiveMap.channel),metalnessMapUv:Qe&&E(I.metalnessMap.channel),roughnessMapUv:U&&E(I.roughnessMap.channel),anisotropyMapUv:Te&&E(I.anisotropyMap.channel),clearcoatMapUv:Re&&E(I.clearcoatMap.channel),clearcoatNormalMapUv:rt&&E(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&E(I.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&E(I.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&E(I.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&E(I.sheenColorMap.channel),sheenRoughnessMapUv:we&&E(I.sheenRoughnessMap.channel),specularMapUv:et&&E(I.specularMap.channel),specularColorMapUv:at&&E(I.specularColorMap.channel),specularIntensityMapUv:Ot&&E(I.specularIntensityMap.channel),transmissionMapUv:T&&E(I.transmissionMap.channel),thicknessMapUv:$&&E(I.thicknessMap.channel),alphaMapUv:re&&E(I.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(We||A),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!fe.attributes.uv&&(Je||re),fog:!!ce,useFog:I.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:Q.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:vt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:I.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:kt,decodeVideoTexture:Je&&I.map.isVideoTexture===!0&&Ct.getTransfer(I.map.colorSpace)===Vt,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===ei,flipSided:I.side===Bn,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:tt&&I.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&I.extensions.multiDraw===!0||ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return Jt.vertexUv1s=h.has(1),Jt.vertexUv2s=h.has(2),Jt.vertexUv3s=h.has(3),h.clear(),Jt}function y(I){const R=[];if(I.shaderID?R.push(I.shaderID):(R.push(I.customVertexShaderID),R.push(I.customFragmentShaderID)),I.defines!==void 0)for(const G in I.defines)R.push(G),R.push(I.defines[G]);return I.isRawShaderMaterial===!1&&(D(R,I),P(R,I),R.push(r.outputColorSpace)),R.push(I.customProgramCacheKey),R.join()}function D(I,R){I.push(R.precision),I.push(R.outputColorSpace),I.push(R.envMapMode),I.push(R.envMapCubeUVHeight),I.push(R.mapUv),I.push(R.alphaMapUv),I.push(R.lightMapUv),I.push(R.aoMapUv),I.push(R.bumpMapUv),I.push(R.normalMapUv),I.push(R.displacementMapUv),I.push(R.emissiveMapUv),I.push(R.metalnessMapUv),I.push(R.roughnessMapUv),I.push(R.anisotropyMapUv),I.push(R.clearcoatMapUv),I.push(R.clearcoatNormalMapUv),I.push(R.clearcoatRoughnessMapUv),I.push(R.iridescenceMapUv),I.push(R.iridescenceThicknessMapUv),I.push(R.sheenColorMapUv),I.push(R.sheenRoughnessMapUv),I.push(R.specularMapUv),I.push(R.specularColorMapUv),I.push(R.specularIntensityMapUv),I.push(R.transmissionMapUv),I.push(R.thicknessMapUv),I.push(R.combine),I.push(R.fogExp2),I.push(R.sizeAttenuation),I.push(R.morphTargetsCount),I.push(R.morphAttributeCount),I.push(R.numDirLights),I.push(R.numPointLights),I.push(R.numSpotLights),I.push(R.numSpotLightMaps),I.push(R.numHemiLights),I.push(R.numRectAreaLights),I.push(R.numDirLightShadows),I.push(R.numPointLightShadows),I.push(R.numSpotLightShadows),I.push(R.numSpotLightShadowsWithMaps),I.push(R.numLightProbes),I.push(R.shadowMapType),I.push(R.toneMapping),I.push(R.numClippingPlanes),I.push(R.numClipIntersection),I.push(R.depthPacking)}function P(I,R){c.disableAll(),R.supportsVertexTextures&&c.enable(0),R.instancing&&c.enable(1),R.instancingColor&&c.enable(2),R.instancingMorph&&c.enable(3),R.matcap&&c.enable(4),R.envMap&&c.enable(5),R.normalMapObjectSpace&&c.enable(6),R.normalMapTangentSpace&&c.enable(7),R.clearcoat&&c.enable(8),R.iridescence&&c.enable(9),R.alphaTest&&c.enable(10),R.vertexColors&&c.enable(11),R.vertexAlphas&&c.enable(12),R.vertexUv1s&&c.enable(13),R.vertexUv2s&&c.enable(14),R.vertexUv3s&&c.enable(15),R.vertexTangents&&c.enable(16),R.anisotropy&&c.enable(17),R.alphaHash&&c.enable(18),R.batching&&c.enable(19),R.dispersion&&c.enable(20),R.batchingColor&&c.enable(21),I.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.skinning&&c.enable(4),R.morphTargets&&c.enable(5),R.morphNormals&&c.enable(6),R.morphColors&&c.enable(7),R.premultipliedAlpha&&c.enable(8),R.shadowMapEnabled&&c.enable(9),R.doubleSided&&c.enable(10),R.flipSided&&c.enable(11),R.useDepthPacking&&c.enable(12),R.dithering&&c.enable(13),R.transmission&&c.enable(14),R.sheen&&c.enable(15),R.opaque&&c.enable(16),R.pointsUvs&&c.enable(17),R.decodeVideoTexture&&c.enable(18),R.alphaToCoverage&&c.enable(19),I.push(c.mask)}function N(I){const R=M[I.type];let G;if(R){const oe=vi[R];G=mp.clone(oe.uniforms)}else G=I.uniforms;return G}function d(I,R){let G;for(let oe=0,Q=f.length;oe<Q;oe++){const ce=f[oe];if(ce.cacheKey===R){G=ce,++G.usedTimes;break}}return G===void 0&&(G=new R0(r,R,I,s),f.push(G)),G}function F(I){if(--I.usedTimes===0){const R=f.indexOf(I);f[R]=f[f.length-1],f.pop(),I.destroy()}}function O(I){l.remove(I)}function q(){l.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:N,acquireProgram:d,releaseProgram:F,releaseShaderCache:O,programs:f,dispose:q}}function D0(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,c){r.get(s)[a]=c}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function N0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Bu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ku(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(p,g,v,M,E,x){let y=r[e];return y===void 0?(y={id:p.id,object:p,geometry:g,material:v,groupOrder:M,renderOrder:p.renderOrder,z:E,group:x},r[e]=y):(y.id=p.id,y.object=p,y.geometry=g,y.material=v,y.groupOrder=M,y.renderOrder=p.renderOrder,y.z=E,y.group=x),e++,y}function c(p,g,v,M,E,x){const y=a(p,g,v,M,E,x);v.transmission>0?n.push(y):v.transparent===!0?i.push(y):t.push(y)}function l(p,g,v,M,E,x){const y=a(p,g,v,M,E,x);v.transmission>0?n.unshift(y):v.transparent===!0?i.unshift(y):t.unshift(y)}function h(p,g){t.length>1&&t.sort(p||N0),n.length>1&&n.sort(g||Bu),i.length>1&&i.sort(g||Bu)}function f(){for(let p=e,g=r.length;p<g;p++){const v=r[p];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:f,sort:h}}function U0(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new ku,r.set(n,[a])):i>=s.length?(a=new ku,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function O0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new ct};break;case"SpotLight":t={position:new V,direction:new V,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new V,halfWidth:new V,halfHeight:new V};break}return r[e.id]=t,t}}}function F0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let B0=0;function k0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function H0(r){const e=new O0,t=F0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new V);const i=new V,s=new mt,a=new mt;function c(h){let f=0,p=0,g=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let v=0,M=0,E=0,x=0,y=0,D=0,P=0,N=0,d=0,F=0,O=0;h.sort(k0);for(let I=0,R=h.length;I<R;I++){const G=h[I],oe=G.color,Q=G.intensity,ce=G.distance,fe=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)f+=oe.r*Q,p+=oe.g*Q,g+=oe.b*Q;else if(G.isLightProbe){for(let ae=0;ae<9;ae++)n.probe[ae].addScaledVector(G.sh.coefficients[ae],Q);O++}else if(G.isDirectionalLight){const ae=e.get(G);if(ae.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const ye=G.shadow,le=t.get(G);le.shadowIntensity=ye.intensity,le.shadowBias=ye.bias,le.shadowNormalBias=ye.normalBias,le.shadowRadius=ye.radius,le.shadowMapSize=ye.mapSize,n.directionalShadow[v]=le,n.directionalShadowMap[v]=fe,n.directionalShadowMatrix[v]=G.shadow.matrix,D++}n.directional[v]=ae,v++}else if(G.isSpotLight){const ae=e.get(G);ae.position.setFromMatrixPosition(G.matrixWorld),ae.color.copy(oe).multiplyScalar(Q),ae.distance=ce,ae.coneCos=Math.cos(G.angle),ae.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),ae.decay=G.decay,n.spot[E]=ae;const ye=G.shadow;if(G.map&&(n.spotLightMap[d]=G.map,d++,ye.updateMatrices(G),G.castShadow&&F++),n.spotLightMatrix[E]=ye.matrix,G.castShadow){const le=t.get(G);le.shadowIntensity=ye.intensity,le.shadowBias=ye.bias,le.shadowNormalBias=ye.normalBias,le.shadowRadius=ye.radius,le.shadowMapSize=ye.mapSize,n.spotShadow[E]=le,n.spotShadowMap[E]=fe,N++}E++}else if(G.isRectAreaLight){const ae=e.get(G);ae.color.copy(oe).multiplyScalar(Q),ae.halfWidth.set(G.width*.5,0,0),ae.halfHeight.set(0,G.height*.5,0),n.rectArea[x]=ae,x++}else if(G.isPointLight){const ae=e.get(G);if(ae.color.copy(G.color).multiplyScalar(G.intensity),ae.distance=G.distance,ae.decay=G.decay,G.castShadow){const ye=G.shadow,le=t.get(G);le.shadowIntensity=ye.intensity,le.shadowBias=ye.bias,le.shadowNormalBias=ye.normalBias,le.shadowRadius=ye.radius,le.shadowMapSize=ye.mapSize,le.shadowCameraNear=ye.camera.near,le.shadowCameraFar=ye.camera.far,n.pointShadow[M]=le,n.pointShadowMap[M]=fe,n.pointShadowMatrix[M]=G.shadow.matrix,P++}n.point[M]=ae,M++}else if(G.isHemisphereLight){const ae=e.get(G);ae.skyColor.copy(G.color).multiplyScalar(Q),ae.groundColor.copy(G.groundColor).multiplyScalar(Q),n.hemi[y]=ae,y++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=g;const q=n.hash;(q.directionalLength!==v||q.pointLength!==M||q.spotLength!==E||q.rectAreaLength!==x||q.hemiLength!==y||q.numDirectionalShadows!==D||q.numPointShadows!==P||q.numSpotShadows!==N||q.numSpotMaps!==d||q.numLightProbes!==O)&&(n.directional.length=v,n.spot.length=E,n.rectArea.length=x,n.point.length=M,n.hemi.length=y,n.directionalShadow.length=D,n.directionalShadowMap.length=D,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=N,n.spotShadowMap.length=N,n.directionalShadowMatrix.length=D,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=N+d-F,n.spotLightMap.length=d,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=O,q.directionalLength=v,q.pointLength=M,q.spotLength=E,q.rectAreaLength=x,q.hemiLength=y,q.numDirectionalShadows=D,q.numPointShadows=P,q.numSpotShadows=N,q.numSpotMaps=d,q.numLightProbes=O,n.version=B0++)}function l(h,f){let p=0,g=0,v=0,M=0,E=0;const x=f.matrixWorldInverse;for(let y=0,D=h.length;y<D;y++){const P=h[y];if(P.isDirectionalLight){const N=n.directional[p];N.direction.setFromMatrixPosition(P.matrixWorld),i.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(i),N.direction.transformDirection(x),p++}else if(P.isSpotLight){const N=n.spot[v];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(x),N.direction.setFromMatrixPosition(P.matrixWorld),i.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(i),N.direction.transformDirection(x),v++}else if(P.isRectAreaLight){const N=n.rectArea[M];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(x),a.identity(),s.copy(P.matrixWorld),s.premultiply(x),a.extractRotation(s),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),N.halfWidth.applyMatrix4(a),N.halfHeight.applyMatrix4(a),M++}else if(P.isPointLight){const N=n.point[g];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(x),g++}else if(P.isHemisphereLight){const N=n.hemi[E];N.direction.setFromMatrixPosition(P.matrixWorld),N.direction.transformDirection(x),E++}}}return{setup:c,setupView:l,state:n}}function Hu(r){const e=new H0(r),t=[],n=[];function i(f){h.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function a(f){n.push(f)}function c(){e.setup(t)}function l(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:c,setupLightsView:l,pushLight:s,pushShadow:a}}function z0(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let c;return a===void 0?(c=new Hu(r),e.set(i,[c])):s>=a.length?(c=new Hu(r),a.push(c)):c=a[s],c}function n(){e=new WeakMap}return{get:t,dispose:n}}class V0 extends xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class G0 extends xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const W0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function j0(r,e,t){let n=new ll;const i=new Ze,s=new Ze,a=new Ut,c=new V0({depthPacking:bf}),l=new G0,h={},f=t.maxTextureSize,p={[zi]:Bn,[Bn]:zi,[ei]:ei},g=new ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:W0,fragmentShader:X0}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const M=new kn;M.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new bn(M,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xh;let y=this.type;this.render=function(F,O,q){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;const I=r.getRenderTarget(),R=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),oe=r.state;oe.setBlending(rr),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const Q=y!==Oi&&this.type===Oi,ce=y===Oi&&this.type!==Oi;for(let fe=0,ae=F.length;fe<ae;fe++){const ye=F[fe],le=ye.shadow;if(le===void 0){console.warn("THREE.WebGLShadowMap:",ye,"has no shadow.");continue}if(le.autoUpdate===!1&&le.needsUpdate===!1)continue;i.copy(le.mapSize);const be=le.getFrameExtents();if(i.multiply(be),s.copy(le.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/be.x),i.x=s.x*be.x,le.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/be.y),i.y=s.y*be.y,le.mapSize.y=s.y)),le.map===null||Q===!0||ce===!0){const Be=this.type!==Oi?{minFilter:Tn,magFilter:Tn}:{};le.map!==null&&le.map.dispose(),le.map=new br(i.x,i.y,Be),le.map.texture.name=ye.name+".shadowMap",le.camera.updateProjectionMatrix()}r.setRenderTarget(le.map),r.clear();const Pe=le.getViewportCount();for(let Be=0;Be<Pe;Be++){const vt=le.getViewport(Be);a.set(s.x*vt.x,s.y*vt.y,s.x*vt.z,s.y*vt.w),oe.viewport(a),le.updateMatrices(ye,Be),n=le.getFrustum(),N(O,q,le.camera,ye,this.type)}le.isPointLightShadow!==!0&&this.type===Oi&&D(le,q),le.needsUpdate=!1}y=this.type,x.needsUpdate=!1,r.setRenderTarget(I,R,G)};function D(F,O){const q=e.update(E);g.defines.VSM_SAMPLES!==F.blurSamples&&(g.defines.VSM_SAMPLES=F.blurSamples,v.defines.VSM_SAMPLES=F.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new br(i.x,i.y)),g.uniforms.shadow_pass.value=F.map.texture,g.uniforms.resolution.value=F.mapSize,g.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(O,null,q,g,E,null),v.uniforms.shadow_pass.value=F.mapPass.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(O,null,q,v,E,null)}function P(F,O,q,I){let R=null;const G=q.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(G!==void 0)R=G;else if(R=q.isPointLight===!0?l:c,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const oe=R.uuid,Q=O.uuid;let ce=h[oe];ce===void 0&&(ce={},h[oe]=ce);let fe=ce[Q];fe===void 0&&(fe=R.clone(),ce[Q]=fe,O.addEventListener("dispose",d)),R=fe}if(R.visible=O.visible,R.wireframe=O.wireframe,I===Oi?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:p[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,q.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const oe=r.properties.get(R);oe.light=q}return R}function N(F,O,q,I,R){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===Oi)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,F.matrixWorld);const Q=e.update(F),ce=F.material;if(Array.isArray(ce)){const fe=Q.groups;for(let ae=0,ye=fe.length;ae<ye;ae++){const le=fe[ae],be=ce[le.materialIndex];if(be&&be.visible){const Pe=P(F,be,I,R);F.onBeforeShadow(r,F,O,q,Q,Pe,le),r.renderBufferDirect(q,null,Q,Pe,F,le),F.onAfterShadow(r,F,O,q,Q,Pe,le)}}}else if(ce.visible){const fe=P(F,ce,I,R);F.onBeforeShadow(r,F,O,q,Q,fe,null),r.renderBufferDirect(q,null,Q,fe,F,null),F.onAfterShadow(r,F,O,q,Q,fe,null)}}const oe=F.children;for(let Q=0,ce=oe.length;Q<ce;Q++)N(oe[Q],O,q,I,R)}function d(F){F.target.removeEventListener("dispose",d);for(const q in h){const I=h[q],R=F.target.uuid;R in I&&(I[R].dispose(),delete I[R])}}}function q0(r){function e(){let T=!1;const $=new Ut;let Z=null;const re=new Ut(0,0,0,0);return{setMask:function(ge){Z!==ge&&!T&&(r.colorMask(ge,ge,ge,ge),Z=ge)},setLocked:function(ge){T=ge},setClear:function(ge,Xe,tt,kt,Jt){Jt===!0&&(ge*=kt,Xe*=kt,tt*=kt),$.set(ge,Xe,tt,kt),re.equals($)===!1&&(r.clearColor(ge,Xe,tt,kt),re.copy($))},reset:function(){T=!1,Z=null,re.set(-1,0,0,0)}}}function t(){let T=!1,$=null,Z=null,re=null;return{setTest:function(ge){ge?Le(r.DEPTH_TEST):Fe(r.DEPTH_TEST)},setMask:function(ge){$!==ge&&!T&&(r.depthMask(ge),$=ge)},setFunc:function(ge){if(Z!==ge){switch(ge){case sf:r.depthFunc(r.NEVER);break;case of:r.depthFunc(r.ALWAYS);break;case af:r.depthFunc(r.LESS);break;case ta:r.depthFunc(r.LEQUAL);break;case cf:r.depthFunc(r.EQUAL);break;case lf:r.depthFunc(r.GEQUAL);break;case uf:r.depthFunc(r.GREATER);break;case hf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Z=ge}},setLocked:function(ge){T=ge},setClear:function(ge){re!==ge&&(r.clearDepth(ge),re=ge)},reset:function(){T=!1,$=null,Z=null,re=null}}}function n(){let T=!1,$=null,Z=null,re=null,ge=null,Xe=null,tt=null,kt=null,Jt=null;return{setTest:function(St){T||(St?Le(r.STENCIL_TEST):Fe(r.STENCIL_TEST))},setMask:function(St){$!==St&&!T&&(r.stencilMask(St),$=St)},setFunc:function(St,Qt,Wt){(Z!==St||re!==Qt||ge!==Wt)&&(r.stencilFunc(St,Qt,Wt),Z=St,re=Qt,ge=Wt)},setOp:function(St,Qt,Wt){(Xe!==St||tt!==Qt||kt!==Wt)&&(r.stencilOp(St,Qt,Wt),Xe=St,tt=Qt,kt=Wt)},setLocked:function(St){T=St},setClear:function(St){Jt!==St&&(r.clearStencil(St),Jt=St)},reset:function(){T=!1,$=null,Z=null,re=null,ge=null,Xe=null,tt=null,kt=null,Jt=null}}}const i=new e,s=new t,a=new n,c=new WeakMap,l=new WeakMap;let h={},f={},p=new WeakMap,g=[],v=null,M=!1,E=null,x=null,y=null,D=null,P=null,N=null,d=null,F=new ct(0,0,0),O=0,q=!1,I=null,R=null,G=null,oe=null,Q=null;const ce=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let fe=!1,ae=0;const ye=r.getParameter(r.VERSION);ye.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(ye)[1]),fe=ae>=1):ye.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(ye)[1]),fe=ae>=2);let le=null,be={};const Pe=r.getParameter(r.SCISSOR_BOX),Be=r.getParameter(r.VIEWPORT),vt=new Ut().fromArray(Pe),bt=new Ut().fromArray(Be);function ue(T,$,Z,re){const ge=new Uint8Array(4),Xe=r.createTexture();r.bindTexture(T,Xe),r.texParameteri(T,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(T,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let tt=0;tt<Z;tt++)T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY?r.texImage3D($,0,r.RGBA,1,1,re,0,r.RGBA,r.UNSIGNED_BYTE,ge):r.texImage2D($+tt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ge);return Xe}const Me={};Me[r.TEXTURE_2D]=ue(r.TEXTURE_2D,r.TEXTURE_2D,1),Me[r.TEXTURE_CUBE_MAP]=ue(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[r.TEXTURE_2D_ARRAY]=ue(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Me[r.TEXTURE_3D]=ue(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Le(r.DEPTH_TEST),s.setFunc(ta),At(!1),We(Vl),Le(r.CULL_FACE),Ie(rr);function Le(T){h[T]!==!0&&(r.enable(T),h[T]=!0)}function Fe(T){h[T]!==!1&&(r.disable(T),h[T]=!1)}function ut(T,$){return f[T]!==$?(r.bindFramebuffer(T,$),f[T]=$,T===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=$),T===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=$),!0):!1}function ft(T,$){let Z=g,re=!1;if(T){Z=p.get($),Z===void 0&&(Z=[],p.set($,Z));const ge=T.textures;if(Z.length!==ge.length||Z[0]!==r.COLOR_ATTACHMENT0){for(let Xe=0,tt=ge.length;Xe<tt;Xe++)Z[Xe]=r.COLOR_ATTACHMENT0+Xe;Z.length=ge.length,re=!0}}else Z[0]!==r.BACK&&(Z[0]=r.BACK,re=!0);re&&r.drawBuffers(Z)}function Je(T){return v!==T?(r.useProgram(T),v=T,!0):!1}const Pt={[Mr]:r.FUNC_ADD,[zd]:r.FUNC_SUBTRACT,[Vd]:r.FUNC_REVERSE_SUBTRACT};Pt[Gd]=r.MIN,Pt[Wd]=r.MAX;const H={[Xd]:r.ZERO,[jd]:r.ONE,[qd]:r.SRC_COLOR,[fc]:r.SRC_ALPHA,[Qd]:r.SRC_ALPHA_SATURATE,[Zd]:r.DST_COLOR,[Kd]:r.DST_ALPHA,[Yd]:r.ONE_MINUS_SRC_COLOR,[pc]:r.ONE_MINUS_SRC_ALPHA,[Jd]:r.ONE_MINUS_DST_COLOR,[$d]:r.ONE_MINUS_DST_ALPHA,[ef]:r.CONSTANT_COLOR,[tf]:r.ONE_MINUS_CONSTANT_COLOR,[nf]:r.CONSTANT_ALPHA,[rf]:r.ONE_MINUS_CONSTANT_ALPHA};function Ie(T,$,Z,re,ge,Xe,tt,kt,Jt,St){if(T===rr){M===!0&&(Fe(r.BLEND),M=!1);return}if(M===!1&&(Le(r.BLEND),M=!0),T!==Hd){if(T!==E||St!==q){if((x!==Mr||P!==Mr)&&(r.blendEquation(r.FUNC_ADD),x=Mr,P=Mr),St)switch(T){case es:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gl:r.blendFunc(r.ONE,r.ONE);break;case Wl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case es:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Wl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}y=null,D=null,N=null,d=null,F.set(0,0,0),O=0,E=T,q=St}return}ge=ge||$,Xe=Xe||Z,tt=tt||re,($!==x||ge!==P)&&(r.blendEquationSeparate(Pt[$],Pt[ge]),x=$,P=ge),(Z!==y||re!==D||Xe!==N||tt!==d)&&(r.blendFuncSeparate(H[Z],H[re],H[Xe],H[tt]),y=Z,D=re,N=Xe,d=tt),(kt.equals(F)===!1||Jt!==O)&&(r.blendColor(kt.r,kt.g,kt.b,Jt),F.copy(kt),O=Jt),E=T,q=!1}function ot(T,$){T.side===ei?Fe(r.CULL_FACE):Le(r.CULL_FACE);let Z=T.side===Bn;$&&(Z=!Z),At(Z),T.blending===es&&T.transparent===!1?Ie(rr):Ie(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),s.setFunc(T.depthFunc),s.setTest(T.depthTest),s.setMask(T.depthWrite),i.setMask(T.colorWrite);const re=T.stencilWrite;a.setTest(re),re&&(a.setMask(T.stencilWriteMask),a.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),a.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),it(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?Le(r.SAMPLE_ALPHA_TO_COVERAGE):Fe(r.SAMPLE_ALPHA_TO_COVERAGE)}function At(T){I!==T&&(T?r.frontFace(r.CW):r.frontFace(r.CCW),I=T)}function We(T){T!==Fd?(Le(r.CULL_FACE),T!==R&&(T===Vl?r.cullFace(r.BACK):T===Bd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Fe(r.CULL_FACE),R=T}function Ht(T){T!==G&&(fe&&r.lineWidth(T),G=T)}function it(T,$,Z){T?(Le(r.POLYGON_OFFSET_FILL),(oe!==$||Q!==Z)&&(r.polygonOffset($,Z),oe=$,Q=Z)):Fe(r.POLYGON_OFFSET_FILL)}function Qe(T){T?Le(r.SCISSOR_TEST):Fe(r.SCISSOR_TEST)}function U(T){T===void 0&&(T=r.TEXTURE0+ce-1),le!==T&&(r.activeTexture(T),le=T)}function A(T,$,Z){Z===void 0&&(le===null?Z=r.TEXTURE0+ce-1:Z=le);let re=be[Z];re===void 0&&(re={type:void 0,texture:void 0},be[Z]=re),(re.type!==T||re.texture!==$)&&(le!==Z&&(r.activeTexture(Z),le=Z),r.bindTexture(T,$||Me[T]),re.type=T,re.texture=$)}function ee(){const T=be[le];T!==void 0&&T.type!==void 0&&(r.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function _e(){try{r.compressedTexImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ve(){try{r.compressedTexImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function pe(){try{r.texSubImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ye(){try{r.texSubImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Te(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Re(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function rt(){try{r.texStorage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Se(){try{r.texStorage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ue(){try{r.texImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function xt(){try{r.texImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ve(T){vt.equals(T)===!1&&(r.scissor(T.x,T.y,T.z,T.w),vt.copy(T))}function we(T){bt.equals(T)===!1&&(r.viewport(T.x,T.y,T.z,T.w),bt.copy(T))}function et(T,$){let Z=l.get($);Z===void 0&&(Z=new WeakMap,l.set($,Z));let re=Z.get(T);re===void 0&&(re=r.getUniformBlockIndex($,T.name),Z.set(T,re))}function at(T,$){const re=l.get($).get(T);c.get($)!==re&&(r.uniformBlockBinding($,re,T.__bindingPointIndex),c.set($,re))}function Ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},le=null,be={},f={},p=new WeakMap,g=[],v=null,M=!1,E=null,x=null,y=null,D=null,P=null,N=null,d=null,F=new ct(0,0,0),O=0,q=!1,I=null,R=null,G=null,oe=null,Q=null,vt.set(0,0,r.canvas.width,r.canvas.height),bt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:Le,disable:Fe,bindFramebuffer:ut,drawBuffers:ft,useProgram:Je,setBlending:Ie,setMaterial:ot,setFlipSided:At,setCullFace:We,setLineWidth:Ht,setPolygonOffset:it,setScissorTest:Qe,activeTexture:U,bindTexture:A,unbindTexture:ee,compressedTexImage2D:_e,compressedTexImage3D:ve,texImage2D:Ue,texImage3D:xt,updateUBOMapping:et,uniformBlockBinding:at,texStorage2D:rt,texStorage3D:Se,texSubImage2D:pe,texSubImage3D:Ye,compressedTexSubImage2D:Te,compressedTexSubImage3D:Re,scissor:Ve,viewport:we,reset:Ot}}function zu(r,e,t,n){const i=Y0(n);switch(t){case Ah:return r*e;case Rh:return r*e;case Ch:return r*e*2;case nl:return r*e/i.components*i.byteLength;case il:return r*e/i.components*i.byteLength;case Ph:return r*e*2/i.components*i.byteLength;case rl:return r*e*2/i.components*i.byteLength;case wh:return r*e*3/i.components*i.byteLength;case ti:return r*e*4/i.components*i.byteLength;case sl:return r*e*4/i.components*i.byteLength;case Yo:case Ko:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case $o:case Zo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case vc:case yc:return Math.max(r,16)*Math.max(e,8)/4;case _c:case xc:return Math.max(r,8)*Math.max(e,8)/2;case Mc:case Sc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ec:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case bc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case wc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ic:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Uc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Oc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Jo:case Bc:case kc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Lh:case Hc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case zc:case Vc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Y0(r){switch(r){case Vi:case Eh:return{byteLength:1,components:1};case Ws:case Th:case Ks:return{byteLength:2,components:1};case el:case tl:return{byteLength:2,components:4};case Tr:case Qc:case di:return{byteLength:4,components:1};case bh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function K0(r,e,t,n,i,s,a){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ze,f=new WeakMap;let p;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(U,A){return v?new OffscreenCanvas(U,A):qs("canvas")}function E(U,A,ee){let _e=1;const ve=Qe(U);if((ve.width>ee||ve.height>ee)&&(_e=ee/Math.max(ve.width,ve.height)),_e<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const pe=Math.floor(_e*ve.width),Ye=Math.floor(_e*ve.height);p===void 0&&(p=M(pe,Ye));const Te=A?M(pe,Ye):p;return Te.width=pe,Te.height=Ye,Te.getContext("2d").drawImage(U,0,0,pe,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+pe+"x"+Ye+")."),Te}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),U;return U}function x(U){return U.generateMipmaps&&U.minFilter!==Tn&&U.minFilter!==Kn}function y(U){r.generateMipmap(U)}function D(U,A,ee,_e,ve=!1){if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let pe=A;if(A===r.RED&&(ee===r.FLOAT&&(pe=r.R32F),ee===r.HALF_FLOAT&&(pe=r.R16F),ee===r.UNSIGNED_BYTE&&(pe=r.R8)),A===r.RED_INTEGER&&(ee===r.UNSIGNED_BYTE&&(pe=r.R8UI),ee===r.UNSIGNED_SHORT&&(pe=r.R16UI),ee===r.UNSIGNED_INT&&(pe=r.R32UI),ee===r.BYTE&&(pe=r.R8I),ee===r.SHORT&&(pe=r.R16I),ee===r.INT&&(pe=r.R32I)),A===r.RG&&(ee===r.FLOAT&&(pe=r.RG32F),ee===r.HALF_FLOAT&&(pe=r.RG16F),ee===r.UNSIGNED_BYTE&&(pe=r.RG8)),A===r.RG_INTEGER&&(ee===r.UNSIGNED_BYTE&&(pe=r.RG8UI),ee===r.UNSIGNED_SHORT&&(pe=r.RG16UI),ee===r.UNSIGNED_INT&&(pe=r.RG32UI),ee===r.BYTE&&(pe=r.RG8I),ee===r.SHORT&&(pe=r.RG16I),ee===r.INT&&(pe=r.RG32I)),A===r.RGB&&ee===r.UNSIGNED_INT_5_9_9_9_REV&&(pe=r.RGB9_E5),A===r.RGBA){const Ye=ve?ia:Ct.getTransfer(_e);ee===r.FLOAT&&(pe=r.RGBA32F),ee===r.HALF_FLOAT&&(pe=r.RGBA16F),ee===r.UNSIGNED_BYTE&&(pe=Ye===Vt?r.SRGB8_ALPHA8:r.RGBA8),ee===r.UNSIGNED_SHORT_4_4_4_4&&(pe=r.RGBA4),ee===r.UNSIGNED_SHORT_5_5_5_1&&(pe=r.RGB5_A1)}return(pe===r.R16F||pe===r.R32F||pe===r.RG16F||pe===r.RG32F||pe===r.RGBA16F||pe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function P(U,A){let ee;return U?A===null||A===Tr||A===cs?ee=r.DEPTH24_STENCIL8:A===di?ee=r.DEPTH32F_STENCIL8:A===Ws&&(ee=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Tr||A===cs?ee=r.DEPTH_COMPONENT24:A===di?ee=r.DEPTH_COMPONENT32F:A===Ws&&(ee=r.DEPTH_COMPONENT16),ee}function N(U,A){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==Tn&&U.minFilter!==Kn?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function d(U){const A=U.target;A.removeEventListener("dispose",d),O(A),A.isVideoTexture&&f.delete(A)}function F(U){const A=U.target;A.removeEventListener("dispose",F),I(A)}function O(U){const A=n.get(U);if(A.__webglInit===void 0)return;const ee=U.source,_e=g.get(ee);if(_e){const ve=_e[A.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&q(U),Object.keys(_e).length===0&&g.delete(ee)}n.remove(U)}function q(U){const A=n.get(U);r.deleteTexture(A.__webglTexture);const ee=U.source,_e=g.get(ee);delete _e[A.__cacheKey],a.memory.textures--}function I(U){const A=n.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(A.__webglFramebuffer[_e]))for(let ve=0;ve<A.__webglFramebuffer[_e].length;ve++)r.deleteFramebuffer(A.__webglFramebuffer[_e][ve]);else r.deleteFramebuffer(A.__webglFramebuffer[_e]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[_e])}else{if(Array.isArray(A.__webglFramebuffer))for(let _e=0;_e<A.__webglFramebuffer.length;_e++)r.deleteFramebuffer(A.__webglFramebuffer[_e]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let _e=0;_e<A.__webglColorRenderbuffer.length;_e++)A.__webglColorRenderbuffer[_e]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[_e]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ee=U.textures;for(let _e=0,ve=ee.length;_e<ve;_e++){const pe=n.get(ee[_e]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),a.memory.textures--),n.remove(ee[_e])}n.remove(U)}let R=0;function G(){R=0}function oe(){const U=R;return U>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),R+=1,U}function Q(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function ce(U,A){const ee=n.get(U);if(U.isVideoTexture&&Ht(U),U.isRenderTargetTexture===!1&&U.version>0&&ee.__version!==U.version){const _e=U.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{bt(ee,U,A);return}}t.bindTexture(r.TEXTURE_2D,ee.__webglTexture,r.TEXTURE0+A)}function fe(U,A){const ee=n.get(U);if(U.version>0&&ee.__version!==U.version){bt(ee,U,A);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ee.__webglTexture,r.TEXTURE0+A)}function ae(U,A){const ee=n.get(U);if(U.version>0&&ee.__version!==U.version){bt(ee,U,A);return}t.bindTexture(r.TEXTURE_3D,ee.__webglTexture,r.TEXTURE0+A)}function ye(U,A){const ee=n.get(U);if(U.version>0&&ee.__version!==U.version){ue(ee,U,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture,r.TEXTURE0+A)}const le={[or]:r.REPEAT,[nr]:r.CLAMP_TO_EDGE,[na]:r.MIRRORED_REPEAT},be={[Tn]:r.NEAREST,[Sh]:r.NEAREST_MIPMAP_NEAREST,[Bs]:r.NEAREST_MIPMAP_LINEAR,[Kn]:r.LINEAR,[qo]:r.LINEAR_MIPMAP_NEAREST,[Bi]:r.LINEAR_MIPMAP_LINEAR},Pe={[wf]:r.NEVER,[Df]:r.ALWAYS,[Rf]:r.LESS,[Nh]:r.LEQUAL,[Cf]:r.EQUAL,[If]:r.GEQUAL,[Pf]:r.GREATER,[Lf]:r.NOTEQUAL};function Be(U,A){if(A.type===di&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Kn||A.magFilter===qo||A.magFilter===Bs||A.magFilter===Bi||A.minFilter===Kn||A.minFilter===qo||A.minFilter===Bs||A.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,le[A.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,le[A.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,le[A.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,be[A.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,be[A.minFilter]),A.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,Pe[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Tn||A.minFilter!==Bs&&A.minFilter!==Bi||A.type===di&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function vt(U,A){let ee=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",d));const _e=A.source;let ve=g.get(_e);ve===void 0&&(ve={},g.set(_e,ve));const pe=Q(A);if(pe!==U.__cacheKey){ve[pe]===void 0&&(ve[pe]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,ee=!0),ve[pe].usedTimes++;const Ye=ve[U.__cacheKey];Ye!==void 0&&(ve[U.__cacheKey].usedTimes--,Ye.usedTimes===0&&q(A)),U.__cacheKey=pe,U.__webglTexture=ve[pe].texture}return ee}function bt(U,A,ee){let _e=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(_e=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(_e=r.TEXTURE_3D);const ve=vt(U,A),pe=A.source;t.bindTexture(_e,U.__webglTexture,r.TEXTURE0+ee);const Ye=n.get(pe);if(pe.version!==Ye.__version||ve===!0){t.activeTexture(r.TEXTURE0+ee);const Te=Ct.getPrimaries(Ct.workingColorSpace),Re=A.colorSpace===tr?null:Ct.getPrimaries(A.colorSpace),rt=A.colorSpace===tr||Te===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let Se=E(A.image,!1,i.maxTextureSize);Se=it(A,Se);const Ue=s.convert(A.format,A.colorSpace),xt=s.convert(A.type);let Ve=D(A.internalFormat,Ue,xt,A.colorSpace,A.isVideoTexture);Be(_e,A);let we;const et=A.mipmaps,at=A.isVideoTexture!==!0,Ot=Ye.__version===void 0||ve===!0,T=pe.dataReady,$=N(A,Se);if(A.isDepthTexture)Ve=P(A.format===ls,A.type),Ot&&(at?t.texStorage2D(r.TEXTURE_2D,1,Ve,Se.width,Se.height):t.texImage2D(r.TEXTURE_2D,0,Ve,Se.width,Se.height,0,Ue,xt,null));else if(A.isDataTexture)if(et.length>0){at&&Ot&&t.texStorage2D(r.TEXTURE_2D,$,Ve,et[0].width,et[0].height);for(let Z=0,re=et.length;Z<re;Z++)we=et[Z],at?T&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,we.width,we.height,Ue,xt,we.data):t.texImage2D(r.TEXTURE_2D,Z,Ve,we.width,we.height,0,Ue,xt,we.data);A.generateMipmaps=!1}else at?(Ot&&t.texStorage2D(r.TEXTURE_2D,$,Ve,Se.width,Se.height),T&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Se.width,Se.height,Ue,xt,Se.data)):t.texImage2D(r.TEXTURE_2D,0,Ve,Se.width,Se.height,0,Ue,xt,Se.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){at&&Ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,$,Ve,et[0].width,et[0].height,Se.depth);for(let Z=0,re=et.length;Z<re;Z++)if(we=et[Z],A.format!==ti)if(Ue!==null)if(at){if(T)if(A.layerUpdates.size>0){const ge=zu(we.width,we.height,A.format,A.type);for(const Xe of A.layerUpdates){const tt=we.data.subarray(Xe*ge/we.data.BYTES_PER_ELEMENT,(Xe+1)*ge/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,Xe,we.width,we.height,1,Ue,tt,0,0)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,we.width,we.height,Se.depth,Ue,we.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,Ve,we.width,we.height,Se.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?T&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,we.width,we.height,Se.depth,Ue,xt,we.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Z,Ve,we.width,we.height,Se.depth,0,Ue,xt,we.data)}else{at&&Ot&&t.texStorage2D(r.TEXTURE_2D,$,Ve,et[0].width,et[0].height);for(let Z=0,re=et.length;Z<re;Z++)we=et[Z],A.format!==ti?Ue!==null?at?T&&t.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,we.width,we.height,Ue,we.data):t.compressedTexImage2D(r.TEXTURE_2D,Z,Ve,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?T&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,we.width,we.height,Ue,xt,we.data):t.texImage2D(r.TEXTURE_2D,Z,Ve,we.width,we.height,0,Ue,xt,we.data)}else if(A.isDataArrayTexture)if(at){if(Ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,$,Ve,Se.width,Se.height,Se.depth),T)if(A.layerUpdates.size>0){const Z=zu(Se.width,Se.height,A.format,A.type);for(const re of A.layerUpdates){const ge=Se.data.subarray(re*Z/Se.data.BYTES_PER_ELEMENT,(re+1)*Z/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,re,Se.width,Se.height,1,Ue,xt,ge)}A.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Ue,xt,Se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ve,Se.width,Se.height,Se.depth,0,Ue,xt,Se.data);else if(A.isData3DTexture)at?(Ot&&t.texStorage3D(r.TEXTURE_3D,$,Ve,Se.width,Se.height,Se.depth),T&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Ue,xt,Se.data)):t.texImage3D(r.TEXTURE_3D,0,Ve,Se.width,Se.height,Se.depth,0,Ue,xt,Se.data);else if(A.isFramebufferTexture){if(Ot)if(at)t.texStorage2D(r.TEXTURE_2D,$,Ve,Se.width,Se.height);else{let Z=Se.width,re=Se.height;for(let ge=0;ge<$;ge++)t.texImage2D(r.TEXTURE_2D,ge,Ve,Z,re,0,Ue,xt,null),Z>>=1,re>>=1}}else if(et.length>0){if(at&&Ot){const Z=Qe(et[0]);t.texStorage2D(r.TEXTURE_2D,$,Ve,Z.width,Z.height)}for(let Z=0,re=et.length;Z<re;Z++)we=et[Z],at?T&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,Ue,xt,we):t.texImage2D(r.TEXTURE_2D,Z,Ve,Ue,xt,we);A.generateMipmaps=!1}else if(at){if(Ot){const Z=Qe(Se);t.texStorage2D(r.TEXTURE_2D,$,Ve,Z.width,Z.height)}T&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ue,xt,Se)}else t.texImage2D(r.TEXTURE_2D,0,Ve,Ue,xt,Se);x(A)&&y(_e),Ye.__version=pe.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function ue(U,A,ee){if(A.image.length!==6)return;const _e=vt(U,A),ve=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+ee);const pe=n.get(ve);if(ve.version!==pe.__version||_e===!0){t.activeTexture(r.TEXTURE0+ee);const Ye=Ct.getPrimaries(Ct.workingColorSpace),Te=A.colorSpace===tr?null:Ct.getPrimaries(A.colorSpace),Re=A.colorSpace===tr||Ye===Te?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const rt=A.isCompressedTexture||A.image[0].isCompressedTexture,Se=A.image[0]&&A.image[0].isDataTexture,Ue=[];for(let re=0;re<6;re++)!rt&&!Se?Ue[re]=E(A.image[re],!0,i.maxCubemapSize):Ue[re]=Se?A.image[re].image:A.image[re],Ue[re]=it(A,Ue[re]);const xt=Ue[0],Ve=s.convert(A.format,A.colorSpace),we=s.convert(A.type),et=D(A.internalFormat,Ve,we,A.colorSpace),at=A.isVideoTexture!==!0,Ot=pe.__version===void 0||_e===!0,T=ve.dataReady;let $=N(A,xt);Be(r.TEXTURE_CUBE_MAP,A);let Z;if(rt){at&&Ot&&t.texStorage2D(r.TEXTURE_CUBE_MAP,$,et,xt.width,xt.height);for(let re=0;re<6;re++){Z=Ue[re].mipmaps;for(let ge=0;ge<Z.length;ge++){const Xe=Z[ge];A.format!==ti?Ve!==null?at?T&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,ge,0,0,Xe.width,Xe.height,Ve,Xe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,ge,et,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?T&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,ge,0,0,Xe.width,Xe.height,Ve,we,Xe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,ge,et,Xe.width,Xe.height,0,Ve,we,Xe.data)}}}else{if(Z=A.mipmaps,at&&Ot){Z.length>0&&$++;const re=Qe(Ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,$,et,re.width,re.height)}for(let re=0;re<6;re++)if(Se){at?T&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ue[re].width,Ue[re].height,Ve,we,Ue[re].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,et,Ue[re].width,Ue[re].height,0,Ve,we,Ue[re].data);for(let ge=0;ge<Z.length;ge++){const tt=Z[ge].image[re].image;at?T&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,ge+1,0,0,tt.width,tt.height,Ve,we,tt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,ge+1,et,tt.width,tt.height,0,Ve,we,tt.data)}}else{at?T&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ve,we,Ue[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,et,Ve,we,Ue[re]);for(let ge=0;ge<Z.length;ge++){const Xe=Z[ge];at?T&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,ge+1,0,0,Ve,we,Xe.image[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,ge+1,et,Ve,we,Xe.image[re])}}}x(A)&&y(r.TEXTURE_CUBE_MAP),pe.__version=ve.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function Me(U,A,ee,_e,ve,pe){const Ye=s.convert(ee.format,ee.colorSpace),Te=s.convert(ee.type),Re=D(ee.internalFormat,Ye,Te,ee.colorSpace);if(!n.get(A).__hasExternalTextures){const Se=Math.max(1,A.width>>pe),Ue=Math.max(1,A.height>>pe);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?t.texImage3D(ve,pe,Re,Se,Ue,A.depth,0,Ye,Te,null):t.texImage2D(ve,pe,Re,Se,Ue,0,Ye,Te,null)}t.bindFramebuffer(r.FRAMEBUFFER,U),We(A)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,ve,n.get(ee).__webglTexture,0,At(A)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,_e,ve,n.get(ee).__webglTexture,pe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(U,A,ee){if(r.bindRenderbuffer(r.RENDERBUFFER,U),A.depthBuffer){const _e=A.depthTexture,ve=_e&&_e.isDepthTexture?_e.type:null,pe=P(A.stencilBuffer,ve),Ye=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=At(A);We(A)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Te,pe,A.width,A.height):ee?r.renderbufferStorageMultisample(r.RENDERBUFFER,Te,pe,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,pe,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ye,r.RENDERBUFFER,U)}else{const _e=A.textures;for(let ve=0;ve<_e.length;ve++){const pe=_e[ve],Ye=s.convert(pe.format,pe.colorSpace),Te=s.convert(pe.type),Re=D(pe.internalFormat,Ye,Te,pe.colorSpace),rt=At(A);ee&&We(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,Re,A.width,A.height):We(A)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,rt,Re,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Re,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Fe(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ce(A.depthTexture,0);const _e=n.get(A.depthTexture).__webglTexture,ve=At(A);if(A.depthTexture.format===ts)We(A)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0,ve):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0);else if(A.depthTexture.format===ls)We(A)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0,ve):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function ut(U){const A=n.get(U),ee=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");Fe(A.__webglFramebuffer,U)}else if(ee){A.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[_e]),A.__webglDepthbuffer[_e]=r.createRenderbuffer(),Le(A.__webglDepthbuffer[_e],U,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=r.createRenderbuffer(),Le(A.__webglDepthbuffer,U,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function ft(U,A,ee){const _e=n.get(U);A!==void 0&&Me(_e.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ee!==void 0&&ut(U)}function Je(U){const A=U.texture,ee=n.get(U),_e=n.get(A);U.addEventListener("dispose",F);const ve=U.textures,pe=U.isWebGLCubeRenderTarget===!0,Ye=ve.length>1;if(Ye||(_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture()),_e.__version=A.version,a.memory.textures++),pe){ee.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(A.mipmaps&&A.mipmaps.length>0){ee.__webglFramebuffer[Te]=[];for(let Re=0;Re<A.mipmaps.length;Re++)ee.__webglFramebuffer[Te][Re]=r.createFramebuffer()}else ee.__webglFramebuffer[Te]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Te=0;Te<A.mipmaps.length;Te++)ee.__webglFramebuffer[Te]=r.createFramebuffer()}else ee.__webglFramebuffer=r.createFramebuffer();if(Ye)for(let Te=0,Re=ve.length;Te<Re;Te++){const rt=n.get(ve[Te]);rt.__webglTexture===void 0&&(rt.__webglTexture=r.createTexture(),a.memory.textures++)}if(U.samples>0&&We(U)===!1){ee.__webglMultisampledFramebuffer=r.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Te=0;Te<ve.length;Te++){const Re=ve[Te];ee.__webglColorRenderbuffer[Te]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ee.__webglColorRenderbuffer[Te]);const rt=s.convert(Re.format,Re.colorSpace),Se=s.convert(Re.type),Ue=D(Re.internalFormat,rt,Se,Re.colorSpace,U.isXRRenderTarget===!0),xt=At(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,xt,Ue,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,ee.__webglColorRenderbuffer[Te])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(ee.__webglDepthRenderbuffer=r.createRenderbuffer(),Le(ee.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pe){t.bindTexture(r.TEXTURE_CUBE_MAP,_e.__webglTexture),Be(r.TEXTURE_CUBE_MAP,A);for(let Te=0;Te<6;Te++)if(A.mipmaps&&A.mipmaps.length>0)for(let Re=0;Re<A.mipmaps.length;Re++)Me(ee.__webglFramebuffer[Te][Re],U,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Re);else Me(ee.__webglFramebuffer[Te],U,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);x(A)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ye){for(let Te=0,Re=ve.length;Te<Re;Te++){const rt=ve[Te],Se=n.get(rt);t.bindTexture(r.TEXTURE_2D,Se.__webglTexture),Be(r.TEXTURE_2D,rt),Me(ee.__webglFramebuffer,U,rt,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,0),x(rt)&&y(r.TEXTURE_2D)}t.unbindTexture()}else{let Te=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Te=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Te,_e.__webglTexture),Be(Te,A),A.mipmaps&&A.mipmaps.length>0)for(let Re=0;Re<A.mipmaps.length;Re++)Me(ee.__webglFramebuffer[Re],U,A,r.COLOR_ATTACHMENT0,Te,Re);else Me(ee.__webglFramebuffer,U,A,r.COLOR_ATTACHMENT0,Te,0);x(A)&&y(Te),t.unbindTexture()}U.depthBuffer&&ut(U)}function Pt(U){const A=U.textures;for(let ee=0,_e=A.length;ee<_e;ee++){const ve=A[ee];if(x(ve)){const pe=U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ye=n.get(ve).__webglTexture;t.bindTexture(pe,Ye),y(pe),t.unbindTexture()}}}const H=[],Ie=[];function ot(U){if(U.samples>0){if(We(U)===!1){const A=U.textures,ee=U.width,_e=U.height;let ve=r.COLOR_BUFFER_BIT;const pe=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ye=n.get(U),Te=A.length>1;if(Te)for(let Re=0;Re<A.length;Re++)t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let Re=0;Re<A.length;Re++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),Te){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ye.__webglColorRenderbuffer[Re]);const rt=n.get(A[Re]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,rt,0)}r.blitFramebuffer(0,0,ee,_e,0,0,ee,_e,ve,r.NEAREST),l===!0&&(H.length=0,Ie.length=0,H.push(r.COLOR_ATTACHMENT0+Re),U.depthBuffer&&U.resolveDepthBuffer===!1&&(H.push(pe),Ie.push(pe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ie)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,H))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Te)for(let Re=0;Re<A.length;Re++){t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,Ye.__webglColorRenderbuffer[Re]);const rt=n.get(A[Re]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,rt,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const A=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function At(U){return Math.min(i.maxSamples,U.samples)}function We(U){const A=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ht(U){const A=a.render.frame;f.get(U)!==A&&(f.set(U,A),U.update())}function it(U,A){const ee=U.colorSpace,_e=U.format,ve=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ee!==vn&&ee!==tr&&(Ct.getTransfer(ee)===Vt?(_e!==ti||ve!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),A}function Qe(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=oe,this.resetTextureUnits=G,this.setTexture2D=ce,this.setTexture2DArray=fe,this.setTexture3D=ae,this.setTextureCube=ye,this.rebindTextures=ft,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=We}function $0(r,e){function t(n,i=tr){let s;const a=Ct.getTransfer(i);if(n===Vi)return r.UNSIGNED_BYTE;if(n===el)return r.UNSIGNED_SHORT_4_4_4_4;if(n===tl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===bh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Eh)return r.BYTE;if(n===Th)return r.SHORT;if(n===Ws)return r.UNSIGNED_SHORT;if(n===Qc)return r.INT;if(n===Tr)return r.UNSIGNED_INT;if(n===di)return r.FLOAT;if(n===Ks)return r.HALF_FLOAT;if(n===Ah)return r.ALPHA;if(n===wh)return r.RGB;if(n===ti)return r.RGBA;if(n===Rh)return r.LUMINANCE;if(n===Ch)return r.LUMINANCE_ALPHA;if(n===ts)return r.DEPTH_COMPONENT;if(n===ls)return r.DEPTH_STENCIL;if(n===nl)return r.RED;if(n===il)return r.RED_INTEGER;if(n===Ph)return r.RG;if(n===rl)return r.RG_INTEGER;if(n===sl)return r.RGBA_INTEGER;if(n===Yo||n===Ko||n===$o||n===Zo)if(a===Vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Yo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Yo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ko)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$o)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_c||n===vc||n===xc||n===yc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===_c)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mc||n===Sc||n===Ec)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Mc||n===Sc)return a===Vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ec)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Tc||n===bc||n===Ac||n===wc||n===Rc||n===Cc||n===Pc||n===Lc||n===Ic||n===Dc||n===Nc||n===Uc||n===Oc||n===Fc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Tc)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bc)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ac)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wc)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Rc)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cc)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pc)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lc)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ic)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dc)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nc)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uc)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oc)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fc)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jo||n===Bc||n===kc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Jo)return a===Vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lh||n===Hc||n===zc||n===Vc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Jo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Hc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class Z0 extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Er extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const J0={type:"move"};class nc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Er,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Er,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Er,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const c=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const E of e.hand.values()){const x=t.getJointPose(E,n),y=this._getHandJoint(h,E);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const f=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],g=f.position.distanceTo(p.position),v=.02,M=.005;h.inputState.pinching&&g>v+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=v-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));c!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(J0)))}return c!==null&&(c.visible=i!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Er;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ev=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new hn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ar({vertexShader:Q0,fragmentShader:ev,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bn(new $s(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nv extends Ar{constructor(e,t){super();const n=this;let i=null,s=1,a=null,c="local-floor",l=1,h=null,f=null,p=null,g=null,v=null,M=null;const E=new tv,x=t.getContextAttributes();let y=null,D=null;const P=[],N=[],d=new Ze;let F=null;const O=new Ln;O.layers.enable(1),O.viewport=new Ut;const q=new Ln;q.layers.enable(2),q.viewport=new Ut;const I=[O,q],R=new Z0;R.layers.enable(1),R.layers.enable(2);let G=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ue){let Me=P[ue];return Me===void 0&&(Me=new nc,P[ue]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(ue){let Me=P[ue];return Me===void 0&&(Me=new nc,P[ue]=Me),Me.getGripSpace()},this.getHand=function(ue){let Me=P[ue];return Me===void 0&&(Me=new nc,P[ue]=Me),Me.getHandSpace()};function Q(ue){const Me=N.indexOf(ue.inputSource);if(Me===-1)return;const Le=P[Me];Le!==void 0&&(Le.update(ue.inputSource,ue.frame,h||a),Le.dispatchEvent({type:ue.type,data:ue.inputSource}))}function ce(){i.removeEventListener("select",Q),i.removeEventListener("selectstart",Q),i.removeEventListener("selectend",Q),i.removeEventListener("squeeze",Q),i.removeEventListener("squeezestart",Q),i.removeEventListener("squeezeend",Q),i.removeEventListener("end",ce),i.removeEventListener("inputsourceschange",fe);for(let ue=0;ue<P.length;ue++){const Me=N[ue];Me!==null&&(N[ue]=null,P[ue].disconnect(Me))}G=null,oe=null,E.reset(),e.setRenderTarget(y),v=null,g=null,p=null,i=null,D=null,bt.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(d.width,d.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ue){s=ue,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ue){c=ue,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(ue){h=ue},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return p},this.getFrame=function(){return M},this.getSession=function(){return i},this.setSession=async function(ue){if(i=ue,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",Q),i.addEventListener("selectstart",Q),i.addEventListener("selectend",Q),i.addEventListener("squeeze",Q),i.addEventListener("squeezestart",Q),i.addEventListener("squeezeend",Q),i.addEventListener("end",ce),i.addEventListener("inputsourceschange",fe),x.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(d),i.renderState.layers===void 0){const Me={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(i,t,Me),i.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),D=new br(v.framebufferWidth,v.framebufferHeight,{format:ti,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let Me=null,Le=null,Fe=null;x.depth&&(Fe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=x.stencil?ls:ts,Le=x.stencil?cs:Tr);const ut={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:s};p=new XRWebGLBinding(i,t),g=p.createProjectionLayer(ut),i.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),D=new br(g.textureWidth,g.textureHeight,{format:ti,type:Vi,depthTexture:new Xh(g.textureWidth,g.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await i.requestReferenceSpace(c),bt.setContext(i),bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function fe(ue){for(let Me=0;Me<ue.removed.length;Me++){const Le=ue.removed[Me],Fe=N.indexOf(Le);Fe>=0&&(N[Fe]=null,P[Fe].disconnect(Le))}for(let Me=0;Me<ue.added.length;Me++){const Le=ue.added[Me];let Fe=N.indexOf(Le);if(Fe===-1){for(let ft=0;ft<P.length;ft++)if(ft>=N.length){N.push(Le),Fe=ft;break}else if(N[ft]===null){N[ft]=Le,Fe=ft;break}if(Fe===-1)break}const ut=P[Fe];ut&&ut.connect(Le)}}const ae=new V,ye=new V;function le(ue,Me,Le){ae.setFromMatrixPosition(Me.matrixWorld),ye.setFromMatrixPosition(Le.matrixWorld);const Fe=ae.distanceTo(ye),ut=Me.projectionMatrix.elements,ft=Le.projectionMatrix.elements,Je=ut[14]/(ut[10]-1),Pt=ut[14]/(ut[10]+1),H=(ut[9]+1)/ut[5],Ie=(ut[9]-1)/ut[5],ot=(ut[8]-1)/ut[0],At=(ft[8]+1)/ft[0],We=Je*ot,Ht=Je*At,it=Fe/(-ot+At),Qe=it*-ot;Me.matrixWorld.decompose(ue.position,ue.quaternion,ue.scale),ue.translateX(Qe),ue.translateZ(it),ue.matrixWorld.compose(ue.position,ue.quaternion,ue.scale),ue.matrixWorldInverse.copy(ue.matrixWorld).invert();const U=Je+it,A=Pt+it,ee=We-Qe,_e=Ht+(Fe-Qe),ve=H*Pt/A*U,pe=Ie*Pt/A*U;ue.projectionMatrix.makePerspective(ee,_e,ve,pe,U,A),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert()}function be(ue,Me){Me===null?ue.matrixWorld.copy(ue.matrix):ue.matrixWorld.multiplyMatrices(Me.matrixWorld,ue.matrix),ue.matrixWorldInverse.copy(ue.matrixWorld).invert()}this.updateCamera=function(ue){if(i===null)return;E.texture!==null&&(ue.near=E.depthNear,ue.far=E.depthFar),R.near=q.near=O.near=ue.near,R.far=q.far=O.far=ue.far,(G!==R.near||oe!==R.far)&&(i.updateRenderState({depthNear:R.near,depthFar:R.far}),G=R.near,oe=R.far,O.near=G,O.far=oe,q.near=G,q.far=oe,O.updateProjectionMatrix(),q.updateProjectionMatrix(),ue.updateProjectionMatrix());const Me=ue.parent,Le=R.cameras;be(R,Me);for(let Fe=0;Fe<Le.length;Fe++)be(Le[Fe],Me);Le.length===2?le(R,O,q):R.projectionMatrix.copy(O.projectionMatrix),Pe(ue,R,Me)};function Pe(ue,Me,Le){Le===null?ue.matrix.copy(Me.matrixWorld):(ue.matrix.copy(Le.matrixWorld),ue.matrix.invert(),ue.matrix.multiply(Me.matrixWorld)),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.updateMatrixWorld(!0),ue.projectionMatrix.copy(Me.projectionMatrix),ue.projectionMatrixInverse.copy(Me.projectionMatrixInverse),ue.isPerspectiveCamera&&(ue.fov=us*2*Math.atan(1/ue.projectionMatrix.elements[5]),ue.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(g===null&&v===null))return l},this.setFoveation=function(ue){l=ue,g!==null&&(g.fixedFoveation=ue),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=ue)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(R)};let Be=null;function vt(ue,Me){if(f=Me.getViewerPose(h||a),M=Me,f!==null){const Le=f.views;v!==null&&(e.setRenderTargetFramebuffer(D,v.framebuffer),e.setRenderTarget(D));let Fe=!1;Le.length!==R.cameras.length&&(R.cameras.length=0,Fe=!0);for(let ft=0;ft<Le.length;ft++){const Je=Le[ft];let Pt=null;if(v!==null)Pt=v.getViewport(Je);else{const Ie=p.getViewSubImage(g,Je);Pt=Ie.viewport,ft===0&&(e.setRenderTargetTextures(D,Ie.colorTexture,g.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(D))}let H=I[ft];H===void 0&&(H=new Ln,H.layers.enable(ft),H.viewport=new Ut,I[ft]=H),H.matrix.fromArray(Je.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(Je.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),ft===0&&(R.matrix.copy(H.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Fe===!0&&R.cameras.push(H)}const ut=i.enabledFeatures;if(ut&&ut.includes("depth-sensing")){const ft=p.getDepthInformation(Le[0]);ft&&ft.isValid&&ft.texture&&E.init(e,ft,i.renderState)}}for(let Le=0;Le<P.length;Le++){const Fe=N[Le],ut=P[Le];Fe!==null&&ut!==void 0&&ut.update(Fe,Me,h||a)}Be&&Be(ue,Me),Me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Me}),M=null}const bt=new Wh;bt.setAnimationLoop(vt),this.setAnimationLoop=function(ue){Be=ue},this.dispose=function(){}}}const vr=new Mi,iv=new mt;function rv(r,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function n(x,y){y.color.getRGB(x.fogColor.value,zh(r)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function i(x,y,D,P,N){y.isMeshBasicMaterial||y.isMeshLambertMaterial?s(x,y):y.isMeshToonMaterial?(s(x,y),p(x,y)):y.isMeshPhongMaterial?(s(x,y),f(x,y)):y.isMeshStandardMaterial?(s(x,y),g(x,y),y.isMeshPhysicalMaterial&&v(x,y,N)):y.isMeshMatcapMaterial?(s(x,y),M(x,y)):y.isMeshDepthMaterial?s(x,y):y.isMeshDistanceMaterial?(s(x,y),E(x,y)):y.isMeshNormalMaterial?s(x,y):y.isLineBasicMaterial?(a(x,y),y.isLineDashedMaterial&&c(x,y)):y.isPointsMaterial?l(x,y,D,P):y.isSpriteMaterial?h(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function s(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===Bn&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===Bn&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const D=e.get(y),P=D.envMap,N=D.envMapRotation;P&&(x.envMap.value=P,vr.copy(N),vr.x*=-1,vr.y*=-1,vr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),x.envMapRotation.value.setFromMatrix4(iv.makeRotationFromEuler(vr)),x.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function a(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function c(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function l(x,y,D,P){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*D,x.scale.value=P*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function h(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function f(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function p(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function g(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function v(x,y,D){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Bn&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=D.texture,x.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,y){y.matcap&&(x.matcap.value=y.matcap)}function E(x,y){const D=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(D.matrixWorld),x.nearDistance.value=D.shadow.camera.near,x.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function sv(r,e,t,n){let i={},s={},a=[];const c=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(D,P){const N=P.program;n.uniformBlockBinding(D,N)}function h(D,P){let N=i[D.id];N===void 0&&(M(D),N=f(D),i[D.id]=N,D.addEventListener("dispose",x));const d=P.program;n.updateUBOMapping(D,d);const F=e.render.frame;s[D.id]!==F&&(g(D),s[D.id]=F)}function f(D){const P=p();D.__bindingPointIndex=P;const N=r.createBuffer(),d=D.__size,F=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,d,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,N),N}function p(){for(let D=0;D<c;D++)if(a.indexOf(D)===-1)return a.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const P=i[D.id],N=D.uniforms,d=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let F=0,O=N.length;F<O;F++){const q=Array.isArray(N[F])?N[F]:[N[F]];for(let I=0,R=q.length;I<R;I++){const G=q[I];if(v(G,F,I,d)===!0){const oe=G.__offset,Q=Array.isArray(G.value)?G.value:[G.value];let ce=0;for(let fe=0;fe<Q.length;fe++){const ae=Q[fe],ye=E(ae);typeof ae=="number"||typeof ae=="boolean"?(G.__data[0]=ae,r.bufferSubData(r.UNIFORM_BUFFER,oe+ce,G.__data)):ae.isMatrix3?(G.__data[0]=ae.elements[0],G.__data[1]=ae.elements[1],G.__data[2]=ae.elements[2],G.__data[3]=0,G.__data[4]=ae.elements[3],G.__data[5]=ae.elements[4],G.__data[6]=ae.elements[5],G.__data[7]=0,G.__data[8]=ae.elements[6],G.__data[9]=ae.elements[7],G.__data[10]=ae.elements[8],G.__data[11]=0):(ae.toArray(G.__data,ce),ce+=ye.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,oe,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function v(D,P,N,d){const F=D.value,O=P+"_"+N;if(d[O]===void 0)return typeof F=="number"||typeof F=="boolean"?d[O]=F:d[O]=F.clone(),!0;{const q=d[O];if(typeof F=="number"||typeof F=="boolean"){if(q!==F)return d[O]=F,!0}else if(q.equals(F)===!1)return q.copy(F),!0}return!1}function M(D){const P=D.uniforms;let N=0;const d=16;for(let O=0,q=P.length;O<q;O++){const I=Array.isArray(P[O])?P[O]:[P[O]];for(let R=0,G=I.length;R<G;R++){const oe=I[R],Q=Array.isArray(oe.value)?oe.value:[oe.value];for(let ce=0,fe=Q.length;ce<fe;ce++){const ae=Q[ce],ye=E(ae),le=N%d,be=le%ye.boundary,Pe=le+be;N+=be,Pe!==0&&d-Pe<ye.storage&&(N+=d-Pe),oe.__data=new Float32Array(ye.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=N,N+=ye.storage}}}const F=N%d;return F>0&&(N+=d-F),D.__size=N,D.__cache={},this}function E(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),P}function x(D){const P=D.target;P.removeEventListener("dispose",x);const N=a.indexOf(P.__bindingPointIndex);a.splice(N,1),r.deleteBuffer(i[P.id]),delete i[P.id],delete s[P.id]}function y(){for(const D in i)r.deleteBuffer(i[D]);a=[],i={},s={}}return{bind:l,update:h,dispose:y}}class ov{constructor(e={}){const{canvas:t=$f(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:c=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const v=new Uint32Array(4),M=new Int32Array(4);let E=null,x=null;const y=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pn,this.toneMapping=sr,this.toneMappingExposure=1;const P=this;let N=!1,d=0,F=0,O=null,q=-1,I=null;const R=new Ut,G=new Ut;let oe=null;const Q=new ct(0);let ce=0,fe=t.width,ae=t.height,ye=1,le=null,be=null;const Pe=new Ut(0,0,fe,ae),Be=new Ut(0,0,fe,ae);let vt=!1;const bt=new ll;let ue=!1,Me=!1;const Le=new mt,Fe=new V,ut=new Ut,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function Pt(){return O===null?ye:1}let H=n;function Ie(L,X){return t.getContext(L,X)}try{const L={alpha:!0,depth:i,stencil:s,antialias:c,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jc}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",ge,!1),H===null){const X="webgl2";if(H=Ie(X,L),H===null)throw Ie(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ot,At,We,Ht,it,Qe,U,A,ee,_e,ve,pe,Ye,Te,Re,rt,Se,Ue,xt,Ve,we,et,at,Ot;function T(){ot=new d_(H),ot.init(),et=new $0(H,ot),At=new o_(H,ot,e,et),We=new q0(H),Ht=new m_(H),it=new D0,Qe=new K0(H,ot,We,it,At,et,Ht),U=new c_(P),A=new h_(P),ee=new Sp(H),at=new r_(H,ee),_e=new f_(H,ee,Ht,at),ve=new __(H,_e,ee,Ht),xt=new g_(H,At,Qe),rt=new a_(it),pe=new I0(P,U,A,ot,At,at,rt),Ye=new rv(P,it),Te=new U0,Re=new z0(ot),Ue=new i_(P,U,A,We,ve,g,l),Se=new j0(P,ve,At),Ot=new sv(H,Ht,At,We),Ve=new s_(H,ot,Ht),we=new p_(H,ot,Ht),Ht.programs=pe.programs,P.capabilities=At,P.extensions=ot,P.properties=it,P.renderLists=Te,P.shadowMap=Se,P.state=We,P.info=Ht}T();const $=new nv(P,H);this.xr=$,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const L=ot.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ot.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(L){L!==void 0&&(ye=L,this.setSize(fe,ae,!1))},this.getSize=function(L){return L.set(fe,ae)},this.setSize=function(L,X,te=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}fe=L,ae=X,t.width=Math.floor(L*ye),t.height=Math.floor(X*ye),te===!0&&(t.style.width=L+"px",t.style.height=X+"px"),this.setViewport(0,0,L,X)},this.getDrawingBufferSize=function(L){return L.set(fe*ye,ae*ye).floor()},this.setDrawingBufferSize=function(L,X,te){fe=L,ae=X,ye=te,t.width=Math.floor(L*te),t.height=Math.floor(X*te),this.setViewport(0,0,L,X)},this.getCurrentViewport=function(L){return L.copy(R)},this.getViewport=function(L){return L.copy(Pe)},this.setViewport=function(L,X,te,ne){L.isVector4?Pe.set(L.x,L.y,L.z,L.w):Pe.set(L,X,te,ne),We.viewport(R.copy(Pe).multiplyScalar(ye).round())},this.getScissor=function(L){return L.copy(Be)},this.setScissor=function(L,X,te,ne){L.isVector4?Be.set(L.x,L.y,L.z,L.w):Be.set(L,X,te,ne),We.scissor(G.copy(Be).multiplyScalar(ye).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(L){We.setScissorTest(vt=L)},this.setOpaqueSort=function(L){le=L},this.setTransparentSort=function(L){be=L},this.getClearColor=function(L){return L.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(L=!0,X=!0,te=!0){let ne=0;if(L){let K=!1;if(O!==null){const Ee=O.texture.format;K=Ee===sl||Ee===rl||Ee===il}if(K){const Ee=O.texture.type,De=Ee===Vi||Ee===Tr||Ee===Ws||Ee===cs||Ee===el||Ee===tl,ke=Ue.getClearColor(),ze=Ue.getClearAlpha(),Ge=ke.r,$e=ke.g,Ke=ke.b;De?(v[0]=Ge,v[1]=$e,v[2]=Ke,v[3]=ze,H.clearBufferuiv(H.COLOR,0,v)):(M[0]=Ge,M[1]=$e,M[2]=Ke,M[3]=ze,H.clearBufferiv(H.COLOR,0,M))}else ne|=H.COLOR_BUFFER_BIT}X&&(ne|=H.DEPTH_BUFFER_BIT),te&&(ne|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Te.dispose(),Re.dispose(),it.dispose(),U.dispose(),A.dispose(),ve.dispose(),at.dispose(),Ot.dispose(),pe.dispose(),$.dispose(),$.removeEventListener("sessionstart",Wt),$.removeEventListener("sessionend",mi),on.stop()};function Z(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const L=Ht.autoReset,X=Se.enabled,te=Se.autoUpdate,ne=Se.needsUpdate,K=Se.type;T(),Ht.autoReset=L,Se.enabled=X,Se.autoUpdate=te,Se.needsUpdate=ne,Se.type=K}function ge(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Xe(L){const X=L.target;X.removeEventListener("dispose",Xe),tt(X)}function tt(L){kt(L),it.remove(L)}function kt(L){const X=it.get(L).programs;X!==void 0&&(X.forEach(function(te){pe.releaseProgram(te)}),L.isShaderMaterial&&pe.releaseShaderCache(L))}this.renderBufferDirect=function(L,X,te,ne,K,Ee){X===null&&(X=ft);const De=K.isMesh&&K.matrixWorld.determinant()<0,ke=eo(L,X,te,ne,K);We.setMaterial(ne,De);let ze=te.index,Ge=1;if(ne.wireframe===!0){if(ze=_e.getWireframeAttribute(te),ze===void 0)return;Ge=2}const $e=te.drawRange,Ke=te.attributes.position;let yt=$e.start*Ge,zt=($e.start+$e.count)*Ge;Ee!==null&&(yt=Math.max(yt,Ee.start*Ge),zt=Math.min(zt,(Ee.start+Ee.count)*Ge)),ze!==null?(yt=Math.max(yt,0),zt=Math.min(zt,ze.count)):Ke!=null&&(yt=Math.max(yt,0),zt=Math.min(zt,Ke.count));const Gt=zt-yt;if(Gt<0||Gt===1/0)return;at.setup(K,ne,ke,te,ze);let An,Tt=Ve;if(ze!==null&&(An=ee.get(ze),Tt=we,Tt.setIndex(An)),K.isMesh)ne.wireframe===!0?(We.setLineWidth(ne.wireframeLinewidth*Pt()),Tt.setMode(H.LINES)):Tt.setMode(H.TRIANGLES);else if(K.isLine){let je=ne.linewidth;je===void 0&&(je=1),We.setLineWidth(je*Pt()),K.isLineSegments?Tt.setMode(H.LINES):K.isLineLoop?Tt.setMode(H.LINE_LOOP):Tt.setMode(H.LINE_STRIP)}else K.isPoints?Tt.setMode(H.POINTS):K.isSprite&&Tt.setMode(H.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Tt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))Tt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const je=K._multiDrawStarts,$t=K._multiDrawCounts,wt=K._multiDrawCount,Xt=ze?ee.get(ze).bytesPerElement:1,Ai=it.get(ne).currentProgram.getUniforms();for(let an=0;an<wt;an++)Ai.setValue(H,"_gl_DrawID",an),Tt.render(je[an]/Xt,$t[an])}else if(K.isInstancedMesh)Tt.renderInstances(yt,Gt,K.count);else if(te.isInstancedBufferGeometry){const je=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,$t=Math.min(te.instanceCount,je);Tt.renderInstances(yt,Gt,$t)}else Tt.render(yt,Gt)};function Jt(L,X,te){L.transparent===!0&&L.side===ei&&L.forceSinglePass===!1?(L.side=Bn,L.needsUpdate=!0,ur(L,X,te),L.side=zi,L.needsUpdate=!0,ur(L,X,te),L.side=ei):ur(L,X,te)}this.compile=function(L,X,te=null){te===null&&(te=L),x=Re.get(te),x.init(X),D.push(x),te.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),L!==te&&L.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),x.setupLights();const ne=new Set;return L.traverse(function(K){const Ee=K.material;if(Ee)if(Array.isArray(Ee))for(let De=0;De<Ee.length;De++){const ke=Ee[De];Jt(ke,te,K),ne.add(ke)}else Jt(Ee,te,K),ne.add(Ee)}),D.pop(),x=null,ne},this.compileAsync=function(L,X,te=null){const ne=this.compile(L,X,te);return new Promise(K=>{function Ee(){if(ne.forEach(function(De){it.get(De).currentProgram.isReady()&&ne.delete(De)}),ne.size===0){K(L);return}setTimeout(Ee,10)}ot.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let St=null;function Qt(L){St&&St(L)}function Wt(){on.stop()}function mi(){on.start()}const on=new Wh;on.setAnimationLoop(Qt),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(L){St=L,$.setAnimationLoop(L),L===null?on.stop():on.start()},$.addEventListener("sessionstart",Wt),$.addEventListener("sessionend",mi),this.render=function(L,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(X),X=$.getCamera()),L.isScene===!0&&L.onBeforeRender(P,L,X,O),x=Re.get(L,D.length),x.init(X),D.push(x),Le.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),bt.setFromProjectionMatrix(Le),Me=this.localClippingEnabled,ue=rt.init(this.clippingPlanes,Me),E=Te.get(L,y.length),E.init(),y.push(E),$.enabled===!0&&$.isPresenting===!0){const Ee=P.xr.getDepthSensingMesh();Ee!==null&&$n(Ee,X,-1/0,P.sortObjects)}$n(L,X,0,P.sortObjects),E.finish(),P.sortObjects===!0&&E.sort(le,be),Je=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Je&&Ue.addToRenderList(E,L),this.info.render.frame++,ue===!0&&rt.beginShadows();const te=x.state.shadowsArray;Se.render(te,L,X),ue===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=E.opaque,K=E.transmissive;if(x.setupLights(),X.isArrayCamera){const Ee=X.cameras;if(K.length>0)for(let De=0,ke=Ee.length;De<ke;De++){const ze=Ee[De];Gi(ne,K,L,ze)}Je&&Ue.render(L);for(let De=0,ke=Ee.length;De<ke;De++){const ze=Ee[De];Dn(E,L,ze,ze.viewport)}}else K.length>0&&Gi(ne,K,L,X),Je&&Ue.render(L),Dn(E,L,X);O!==null&&(Qe.updateMultisampleRenderTarget(O),Qe.updateRenderTargetMipmap(O)),L.isScene===!0&&L.onAfterRender(P,L,X),at.resetDefaultState(),q=-1,I=null,D.pop(),D.length>0?(x=D[D.length-1],ue===!0&&rt.setGlobalState(P.clippingPlanes,x.state.camera)):x=null,y.pop(),y.length>0?E=y[y.length-1]:E=null};function $n(L,X,te,ne){if(L.visible===!1)return;if(L.layers.test(X.layers)){if(L.isGroup)te=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(X);else if(L.isLight)x.pushLight(L),L.castShadow&&x.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||bt.intersectsSprite(L)){ne&&ut.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Le);const De=ve.update(L),ke=L.material;ke.visible&&E.push(L,De,ke,te,ut.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||bt.intersectsObject(L))){const De=ve.update(L),ke=L.material;if(ne&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),ut.copy(L.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),ut.copy(De.boundingSphere.center)),ut.applyMatrix4(L.matrixWorld).applyMatrix4(Le)),Array.isArray(ke)){const ze=De.groups;for(let Ge=0,$e=ze.length;Ge<$e;Ge++){const Ke=ze[Ge],yt=ke[Ke.materialIndex];yt&&yt.visible&&E.push(L,De,yt,te,ut.z,Ke)}}else ke.visible&&E.push(L,De,ke,te,ut.z,null)}}const Ee=L.children;for(let De=0,ke=Ee.length;De<ke;De++)$n(Ee[De],X,te,ne)}function Dn(L,X,te,ne){const K=L.opaque,Ee=L.transmissive,De=L.transparent;x.setupLightsView(te),ue===!0&&rt.setGlobalState(P.clippingPlanes,te),ne&&We.viewport(R.copy(ne)),K.length>0&&Wi(K,X,te),Ee.length>0&&Wi(Ee,X,te),De.length>0&&Wi(De,X,te),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function Gi(L,X,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ne.id]===void 0&&(x.state.transmissionRenderTarget[ne.id]=new br(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?Ks:Vi,minFilter:Bi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const Ee=x.state.transmissionRenderTarget[ne.id],De=ne.viewport||R;Ee.setSize(De.z,De.w);const ke=P.getRenderTarget();P.setRenderTarget(Ee),P.getClearColor(Q),ce=P.getClearAlpha(),ce<1&&P.setClearColor(16777215,.5),P.clear(),Je&&Ue.render(te);const ze=P.toneMapping;P.toneMapping=sr;const Ge=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),x.setupLightsView(ne),ue===!0&&rt.setGlobalState(P.clippingPlanes,ne),Wi(L,te,ne),Qe.updateMultisampleRenderTarget(Ee),Qe.updateRenderTargetMipmap(Ee),ot.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ke=0,yt=X.length;Ke<yt;Ke++){const zt=X[Ke],Gt=zt.object,An=zt.geometry,Tt=zt.material,je=zt.group;if(Tt.side===ei&&Gt.layers.test(ne.layers)){const $t=Tt.side;Tt.side=Bn,Tt.needsUpdate=!0,lr(Gt,te,ne,An,Tt,je),Tt.side=$t,Tt.needsUpdate=!0,$e=!0}}$e===!0&&(Qe.updateMultisampleRenderTarget(Ee),Qe.updateRenderTargetMipmap(Ee))}P.setRenderTarget(ke),P.setClearColor(Q,ce),Ge!==void 0&&(ne.viewport=Ge),P.toneMapping=ze}function Wi(L,X,te){const ne=X.isScene===!0?X.overrideMaterial:null;for(let K=0,Ee=L.length;K<Ee;K++){const De=L[K],ke=De.object,ze=De.geometry,Ge=ne===null?De.material:ne,$e=De.group;ke.layers.test(te.layers)&&lr(ke,X,te,ze,Ge,$e)}}function lr(L,X,te,ne,K,Ee){L.onBeforeRender(P,X,te,ne,K,Ee),L.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),K.transparent===!0&&K.side===ei&&K.forceSinglePass===!1?(K.side=Bn,K.needsUpdate=!0,P.renderBufferDirect(te,X,ne,K,L,Ee),K.side=zi,K.needsUpdate=!0,P.renderBufferDirect(te,X,ne,K,L,Ee),K.side=ei):P.renderBufferDirect(te,X,ne,K,L,Ee),L.onAfterRender(P,X,te,ne,K,Ee)}function ur(L,X,te){X.isScene!==!0&&(X=ft);const ne=it.get(L),K=x.state.lights,Ee=x.state.shadowsArray,De=K.state.version,ke=pe.getParameters(L,K.state,Ee,X,te),ze=pe.getProgramCacheKey(ke);let Ge=ne.programs;ne.environment=L.isMeshStandardMaterial?X.environment:null,ne.fog=X.fog,ne.envMap=(L.isMeshStandardMaterial?A:U).get(L.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&L.envMap===null?X.environmentRotation:L.envMapRotation,Ge===void 0&&(L.addEventListener("dispose",Xe),Ge=new Map,ne.programs=Ge);let $e=Ge.get(ze);if($e!==void 0){if(ne.currentProgram===$e&&ne.lightsStateVersion===De)return Xi(L,ke),$e}else ke.uniforms=pe.getUniforms(L),L.onBeforeCompile(ke,P),$e=pe.acquireProgram(ke,ze),Ge.set(ze,$e),ne.uniforms=ke.uniforms;const Ke=ne.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ke.clippingPlanes=rt.uniform),Xi(L,ke),ne.needsLights=no(L),ne.lightsStateVersion=De,ne.needsLights&&(Ke.ambientLightColor.value=K.state.ambient,Ke.lightProbe.value=K.state.probe,Ke.directionalLights.value=K.state.directional,Ke.directionalLightShadows.value=K.state.directionalShadow,Ke.spotLights.value=K.state.spot,Ke.spotLightShadows.value=K.state.spotShadow,Ke.rectAreaLights.value=K.state.rectArea,Ke.ltc_1.value=K.state.rectAreaLTC1,Ke.ltc_2.value=K.state.rectAreaLTC2,Ke.pointLights.value=K.state.point,Ke.pointLightShadows.value=K.state.pointShadow,Ke.hemisphereLights.value=K.state.hemi,Ke.directionalShadowMap.value=K.state.directionalShadowMap,Ke.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ke.spotShadowMap.value=K.state.spotShadowMap,Ke.spotLightMatrix.value=K.state.spotLightMatrix,Ke.spotLightMap.value=K.state.spotLightMap,Ke.pointShadowMap.value=K.state.pointShadowMap,Ke.pointShadowMatrix.value=K.state.pointShadowMatrix),ne.currentProgram=$e,ne.uniformsList=null,$e}function Qs(L){if(L.uniformsList===null){const X=L.currentProgram.getUniforms();L.uniformsList=Qo.seqWithValue(X.seq,L.uniforms)}return L.uniformsList}function Xi(L,X){const te=it.get(L);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.batchingColor=X.batchingColor,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.instancingMorph=X.instancingMorph,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function eo(L,X,te,ne,K){X.isScene!==!0&&(X=ft),Qe.resetTextureUnits();const Ee=X.fog,De=ne.isMeshStandardMaterial?X.environment:null,ke=O===null?P.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:vn,ze=(ne.isMeshStandardMaterial?A:U).get(ne.envMap||De),Ge=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,$e=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ke=!!te.morphAttributes.position,yt=!!te.morphAttributes.normal,zt=!!te.morphAttributes.color;let Gt=sr;ne.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Gt=P.toneMapping);const An=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Tt=An!==void 0?An.length:0,je=it.get(ne),$t=x.state.lights;if(ue===!0&&(Me===!0||L!==I)){const yn=L===I&&ne.id===q;rt.setState(ne,L,yn)}let wt=!1;ne.version===je.__version?(je.needsLights&&je.lightsStateVersion!==$t.state.version||je.outputColorSpace!==ke||K.isBatchedMesh&&je.batching===!1||!K.isBatchedMesh&&je.batching===!0||K.isBatchedMesh&&je.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&je.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&je.instancing===!1||!K.isInstancedMesh&&je.instancing===!0||K.isSkinnedMesh&&je.skinning===!1||!K.isSkinnedMesh&&je.skinning===!0||K.isInstancedMesh&&je.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&je.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&je.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&je.instancingMorph===!1&&K.morphTexture!==null||je.envMap!==ze||ne.fog===!0&&je.fog!==Ee||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==rt.numPlanes||je.numIntersection!==rt.numIntersection)||je.vertexAlphas!==Ge||je.vertexTangents!==$e||je.morphTargets!==Ke||je.morphNormals!==yt||je.morphColors!==zt||je.toneMapping!==Gt||je.morphTargetsCount!==Tt)&&(wt=!0):(wt=!0,je.__version=ne.version);let Xt=je.currentProgram;wt===!0&&(Xt=ur(ne,X,K));let Ai=!1,an=!1,Ms=!1;const Zt=Xt.getUniforms(),xn=je.uniforms;if(We.useProgram(Xt.program)&&(Ai=!0,an=!0,Ms=!0),ne.id!==q&&(q=ne.id,an=!0),Ai||I!==L){Zt.setValue(H,"projectionMatrix",L.projectionMatrix),Zt.setValue(H,"viewMatrix",L.matrixWorldInverse);const yn=Zt.map.cameraPosition;yn!==void 0&&yn.setValue(H,Fe.setFromMatrixPosition(L.matrixWorld)),At.logarithmicDepthBuffer&&Zt.setValue(H,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Zt.setValue(H,"isOrthographic",L.isOrthographicCamera===!0),I!==L&&(I=L,an=!0,Ms=!0)}if(K.isSkinnedMesh){Zt.setOptional(H,K,"bindMatrix"),Zt.setOptional(H,K,"bindMatrixInverse");const yn=K.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Zt.setValue(H,"boneTexture",yn.boneTexture,Qe))}K.isBatchedMesh&&(Zt.setOptional(H,K,"batchingTexture"),Zt.setValue(H,"batchingTexture",K._matricesTexture,Qe),Zt.setOptional(H,K,"batchingIdTexture"),Zt.setValue(H,"batchingIdTexture",K._indirectTexture,Qe),Zt.setOptional(H,K,"batchingColorTexture"),K._colorsTexture!==null&&Zt.setValue(H,"batchingColorTexture",K._colorsTexture,Qe));const ni=te.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&xt.update(K,te,Xt),(an||je.receiveShadow!==K.receiveShadow)&&(je.receiveShadow=K.receiveShadow,Zt.setValue(H,"receiveShadow",K.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(xn.envMap.value=ze,xn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&X.environment!==null&&(xn.envMapIntensity.value=X.environmentIntensity),an&&(Zt.setValue(H,"toneMappingExposure",P.toneMappingExposure),je.needsLights&&to(xn,Ms),Ee&&ne.fog===!0&&Ye.refreshFogUniforms(xn,Ee),Ye.refreshMaterialUniforms(xn,ne,ye,ae,x.state.transmissionRenderTarget[L.id]),Qo.upload(H,Qs(je),xn,Qe)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Qo.upload(H,Qs(je),xn,Qe),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Zt.setValue(H,"center",K.center),Zt.setValue(H,"modelViewMatrix",K.modelViewMatrix),Zt.setValue(H,"normalMatrix",K.normalMatrix),Zt.setValue(H,"modelMatrix",K.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const yn=ne.uniformsGroups;for(let Ss=0,io=yn.length;Ss<io;Ss++){const Es=yn[Ss];Ot.update(Es,Xt),Ot.bind(Es,Xt)}}return Xt}function to(L,X){L.ambientLightColor.needsUpdate=X,L.lightProbe.needsUpdate=X,L.directionalLights.needsUpdate=X,L.directionalLightShadows.needsUpdate=X,L.pointLights.needsUpdate=X,L.pointLightShadows.needsUpdate=X,L.spotLights.needsUpdate=X,L.spotLightShadows.needsUpdate=X,L.rectAreaLights.needsUpdate=X,L.hemisphereLights.needsUpdate=X}function no(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return d},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(L,X,te){it.get(L.texture).__webglTexture=X,it.get(L.depthTexture).__webglTexture=te;const ne=it.get(L);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=te===void 0,ne.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,X){const te=it.get(L);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(L,X=0,te=0){O=L,d=X,F=te;let ne=!0,K=null,Ee=!1,De=!1;if(L){const ze=it.get(L);ze.__useDefaultFramebuffer!==void 0?(We.bindFramebuffer(H.FRAMEBUFFER,null),ne=!1):ze.__webglFramebuffer===void 0?Qe.setupRenderTarget(L):ze.__hasExternalTextures&&Qe.rebindTextures(L,it.get(L.texture).__webglTexture,it.get(L.depthTexture).__webglTexture);const Ge=L.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(De=!0);const $e=it.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray($e[X])?K=$e[X][te]:K=$e[X],Ee=!0):L.samples>0&&Qe.useMultisampledRTT(L)===!1?K=it.get(L).__webglMultisampledFramebuffer:Array.isArray($e)?K=$e[te]:K=$e,R.copy(L.viewport),G.copy(L.scissor),oe=L.scissorTest}else R.copy(Pe).multiplyScalar(ye).floor(),G.copy(Be).multiplyScalar(ye).floor(),oe=vt;if(We.bindFramebuffer(H.FRAMEBUFFER,K)&&ne&&We.drawBuffers(L,K),We.viewport(R),We.scissor(G),We.setScissorTest(oe),Ee){const ze=it.get(L.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+X,ze.__webglTexture,te)}else if(De){const ze=it.get(L.texture),Ge=X||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,ze.__webglTexture,te||0,Ge)}q=-1},this.readRenderTargetPixels=function(L,X,te,ne,K,Ee,De){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=it.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&De!==void 0&&(ke=ke[De]),ke){We.bindFramebuffer(H.FRAMEBUFFER,ke);try{const ze=L.texture,Ge=ze.format,$e=ze.type;if(!At.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=L.width-ne&&te>=0&&te<=L.height-K&&H.readPixels(X,te,ne,K,et.convert(Ge),et.convert($e),Ee)}finally{const ze=O!==null?it.get(O).__webglFramebuffer:null;We.bindFramebuffer(H.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(L,X,te,ne,K,Ee,De){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=it.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&De!==void 0&&(ke=ke[De]),ke){We.bindFramebuffer(H.FRAMEBUFFER,ke);try{const ze=L.texture,Ge=ze.format,$e=ze.type;if(!At.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=L.width-ne&&te>=0&&te<=L.height-K){const Ke=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ke),H.bufferData(H.PIXEL_PACK_BUFFER,Ee.byteLength,H.STREAM_READ),H.readPixels(X,te,ne,K,et.convert(Ge),et.convert($e),0),H.flush();const yt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);await Zf(H,yt,4);try{H.bindBuffer(H.PIXEL_PACK_BUFFER,Ke),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ee)}finally{H.deleteBuffer(Ke),H.deleteSync(yt)}return Ee}}finally{const ze=O!==null?it.get(O).__webglFramebuffer:null;We.bindFramebuffer(H.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(L,X=null,te=0){L.isTexture!==!0&&(is("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,L=arguments[1]);const ne=Math.pow(2,-te),K=Math.floor(L.image.width*ne),Ee=Math.floor(L.image.height*ne),De=X!==null?X.x:0,ke=X!==null?X.y:0;Qe.setTexture2D(L,0),H.copyTexSubImage2D(H.TEXTURE_2D,te,0,0,De,ke,K,Ee),We.unbindTexture()},this.copyTextureToTexture=function(L,X,te=null,ne=null,K=0){L.isTexture!==!0&&(is("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,L=arguments[1],X=arguments[2],K=arguments[3]||0,te=null);let Ee,De,ke,ze,Ge,$e;te!==null?(Ee=te.max.x-te.min.x,De=te.max.y-te.min.y,ke=te.min.x,ze=te.min.y):(Ee=L.image.width,De=L.image.height,ke=0,ze=0),ne!==null?(Ge=ne.x,$e=ne.y):(Ge=0,$e=0);const Ke=et.convert(X.format),yt=et.convert(X.type);Qe.setTexture2D(X,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const zt=H.getParameter(H.UNPACK_ROW_LENGTH),Gt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),An=H.getParameter(H.UNPACK_SKIP_PIXELS),Tt=H.getParameter(H.UNPACK_SKIP_ROWS),je=H.getParameter(H.UNPACK_SKIP_IMAGES),$t=L.isCompressedTexture?L.mipmaps[K]:L.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,$t.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,$t.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ke),H.pixelStorei(H.UNPACK_SKIP_ROWS,ze),L.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,K,Ge,$e,Ee,De,Ke,yt,$t.data):L.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,K,Ge,$e,$t.width,$t.height,Ke,$t.data):H.texSubImage2D(H.TEXTURE_2D,K,Ge,$e,Ee,De,Ke,yt,$t),H.pixelStorei(H.UNPACK_ROW_LENGTH,zt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Gt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,An),H.pixelStorei(H.UNPACK_SKIP_ROWS,Tt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,je),K===0&&X.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),We.unbindTexture()},this.copyTextureToTexture3D=function(L,X,te=null,ne=null,K=0){L.isTexture!==!0&&(is("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ne=arguments[1]||null,L=arguments[2],X=arguments[3],K=arguments[4]||0);let Ee,De,ke,ze,Ge,$e,Ke,yt,zt;const Gt=L.isCompressedTexture?L.mipmaps[K]:L.image;te!==null?(Ee=te.max.x-te.min.x,De=te.max.y-te.min.y,ke=te.max.z-te.min.z,ze=te.min.x,Ge=te.min.y,$e=te.min.z):(Ee=Gt.width,De=Gt.height,ke=Gt.depth,ze=0,Ge=0,$e=0),ne!==null?(Ke=ne.x,yt=ne.y,zt=ne.z):(Ke=0,yt=0,zt=0);const An=et.convert(X.format),Tt=et.convert(X.type);let je;if(X.isData3DTexture)Qe.setTexture3D(X,0),je=H.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)Qe.setTexture2DArray(X,0),je=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const $t=H.getParameter(H.UNPACK_ROW_LENGTH),wt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Xt=H.getParameter(H.UNPACK_SKIP_PIXELS),Ai=H.getParameter(H.UNPACK_SKIP_ROWS),an=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Gt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Gt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ze),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ge),H.pixelStorei(H.UNPACK_SKIP_IMAGES,$e),L.isDataTexture||L.isData3DTexture?H.texSubImage3D(je,K,Ke,yt,zt,Ee,De,ke,An,Tt,Gt.data):X.isCompressedArrayTexture?H.compressedTexSubImage3D(je,K,Ke,yt,zt,Ee,De,ke,An,Gt.data):H.texSubImage3D(je,K,Ke,yt,zt,Ee,De,ke,An,Tt,Gt),H.pixelStorei(H.UNPACK_ROW_LENGTH,$t),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,wt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Xt),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ai),H.pixelStorei(H.UNPACK_SKIP_IMAGES,an),K===0&&X.generateMipmaps&&H.generateMipmap(je),We.unbindTexture()},this.initRenderTarget=function(L){it.get(L).__webglFramebuffer===void 0&&Qe.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?Qe.setTextureCube(L,0):L.isData3DTexture?Qe.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Qe.setTexture2DArray(L,0):Qe.setTexture2D(L,0),We.unbindTexture()},this.resetState=function(){d=0,F=0,O=null,We.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ol?"display-p3":"srgb",t.unpackColorSpace=Ct.workingColorSpace===pa?"display-p3":"srgb"}}class av extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class cv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return is("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Rn=new V;class dl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ui(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ui(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ui(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ui(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array),s=It(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new In(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new dl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Vu=new V,Gu=new Ut,Wu=new Ut,lv=new V,Xu=new mt,No=new V,ic=new Ei,ju=new mt,rc=new ms;class uv extends bn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=jl,this.bindMatrix=new mt,this.bindMatrixInverse=new mt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Si),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,No),this.boundingBox.expandByPoint(No)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ei),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,No),this.boundingSphere.expandByPoint(No)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ic.copy(this.boundingSphere),ic.applyMatrix4(i),e.ray.intersectsSphere(ic)!==!1&&(ju.copy(i).invert(),rc.copy(e.ray).applyMatrix4(ju),!(this.boundingBox!==null&&rc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,rc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ut,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===jl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Mf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Gu.fromBufferAttribute(i.attributes.skinIndex,e),Wu.fromBufferAttribute(i.attributes.skinWeight,e),Vu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Wu.getComponent(s);if(a!==0){const c=Gu.getComponent(s);Xu.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),t.addScaledVector(lv.copy(Vu).applyMatrix4(Xu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class $h extends Kt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Zh extends hn{constructor(e=null,t=1,n=1,i,s,a,c,l,h=Tn,f=Tn,p,g){super(null,a,c,l,h,f,i,s,p,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qu=new mt,hv=new mt;class fl{constructor(e=[],t=[]){this.uuid=pi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new mt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new mt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const c=e[s]?e[s].matrixWorld:hv;qu.multiplyMatrices(c,t[s]),qu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new fl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Zh(t,e,e,ti,di);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new $h),this.bones.push(a),this.boneInverses.push(new mt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const c=n[i];e.boneInverses.push(c.toArray())}return e}}class jc extends In{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Kr=new mt,Yu=new mt,Uo=[],Ku=new Si,dv=new mt,Ds=new bn,Ns=new Ei;class fv extends bn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,dv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Kr),Ku.copy(e.boundingBox).applyMatrix4(Kr),this.boundingBox.union(Ku)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Kr),Ns.copy(e.boundingSphere).applyMatrix4(Kr),this.boundingSphere.union(Ns)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let c=0;c<n.length;c++)n[c]=i[a+c]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ds.geometry=this.geometry,Ds.material=this.material,Ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ns.copy(this.boundingSphere),Ns.applyMatrix4(n),e.ray.intersectsSphere(Ns)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Kr),Yu.multiplyMatrices(n,Kr),Ds.matrixWorld=Yu,Ds.raycast(e,Uo);for(let a=0,c=Uo.length;a<c;a++){const l=Uo[a];l.instanceId=s,l.object=this,t.push(l)}Uo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new jc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zh(new Float32Array(i*this.count),i,this.count,nl,di));const s=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const c=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=c,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ys extends xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const aa=new V,ca=new V,$u=new mt,Us=new ms,Oo=new Ei,sc=new V,Zu=new V;class pl extends Kt{constructor(e=new kn,t=new Ys){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)aa.fromBufferAttribute(t,i-1),ca.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=aa.distanceTo(ca);e.setAttribute("lineDistance",new gn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(i),Oo.radius+=s,e.ray.intersectsSphere(Oo)===!1)return;$u.copy(i).invert(),Us.copy(e.ray).applyMatrix4($u);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=c*c,h=this.isLineSegments?2:1,f=n.index,g=n.attributes.position;if(f!==null){const v=Math.max(0,a.start),M=Math.min(f.count,a.start+a.count);for(let E=v,x=M-1;E<x;E+=h){const y=f.getX(E),D=f.getX(E+1),P=Fo(this,e,Us,l,y,D);P&&t.push(P)}if(this.isLineLoop){const E=f.getX(M-1),x=f.getX(v),y=Fo(this,e,Us,l,E,x);y&&t.push(y)}}else{const v=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let E=v,x=M-1;E<x;E+=h){const y=Fo(this,e,Us,l,E,E+1);y&&t.push(y)}if(this.isLineLoop){const E=Fo(this,e,Us,l,M-1,v);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function Fo(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(aa.fromBufferAttribute(a,i),ca.fromBufferAttribute(a,s),t.distanceSqToSegment(aa,ca,sc,Zu)>n)return;sc.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(sc);if(!(l<e.near||l>e.far))return{distance:l,point:Zu.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,object:r}}const Ju=new V,Qu=new V;class la extends pl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Ju.fromBufferAttribute(t,i),Qu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ju.distanceTo(Qu);e.setAttribute("lineDistance",new gn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pv extends pl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Jh extends xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const eh=new mt,qc=new ms,Bo=new Ei,ko=new V;class mv extends Kt{constructor(e=new kn,t=new Jh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(i),Bo.radius+=s,e.ray.intersectsSphere(Bo)===!1)return;eh.copy(i).invert(),qc.copy(e.ray).applyMatrix4(eh);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=c*c,h=n.index,p=n.attributes.position;if(h!==null){const g=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let M=g,E=v;M<E;M++){const x=h.getX(M);ko.fromBufferAttribute(p,x),th(ko,x,l,i,e,t,this)}}else{const g=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let M=g,E=v;M<E;M++)ko.fromBufferAttribute(p,M),th(ko,M,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function th(r,e,t,n,i,s,a){const c=qc.distanceSqToPoint(r);if(c<t){const l=new V;qc.closestPointToPoint(r,l),l.applyMatrix4(n);const h=i.ray.origin.distanceTo(l);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(c),point:l,index:e,face:null,object:a})}}class gv extends hn{constructor(e,t,n,i,s,a,c,l,h){super(e,t,n,i,s,a,c,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ml extends kn{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,c=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:c,thetaLength:l};const h=this;i=Math.floor(i),s=Math.floor(s);const f=[],p=[],g=[],v=[];let M=0;const E=[],x=n/2;let y=0;D(),a===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(f),this.setAttribute("position",new gn(p,3)),this.setAttribute("normal",new gn(g,3)),this.setAttribute("uv",new gn(v,2));function D(){const N=new V,d=new V;let F=0;const O=(t-e)/n;for(let q=0;q<=s;q++){const I=[],R=q/s,G=R*(t-e)+e;for(let oe=0;oe<=i;oe++){const Q=oe/i,ce=Q*l+c,fe=Math.sin(ce),ae=Math.cos(ce);d.x=G*fe,d.y=-R*n+x,d.z=G*ae,p.push(d.x,d.y,d.z),N.set(fe,O,ae).normalize(),g.push(N.x,N.y,N.z),v.push(Q,1-R),I.push(M++)}E.push(I)}for(let q=0;q<i;q++)for(let I=0;I<s;I++){const R=E[I][q],G=E[I+1][q],oe=E[I+1][q+1],Q=E[I][q+1];f.push(R,G,Q),f.push(G,oe,Q),F+=6}h.addGroup(y,F,0),y+=F}function P(N){const d=M,F=new Ze,O=new V;let q=0;const I=N===!0?e:t,R=N===!0?1:-1;for(let oe=1;oe<=i;oe++)p.push(0,x*R,0),g.push(0,R,0),v.push(.5,.5),M++;const G=M;for(let oe=0;oe<=i;oe++){const ce=oe/i*l+c,fe=Math.cos(ce),ae=Math.sin(ce);O.x=I*ae,O.y=x*R,O.z=I*fe,p.push(O.x,O.y,O.z),g.push(0,R,0),F.x=fe*.5+.5,F.y=ae*.5*R+.5,v.push(F.x,F.y),M++}for(let oe=0;oe<i;oe++){const Q=d+oe,ce=G+oe;N===!0?f.push(ce,ce+1,Q):f.push(ce+1,ce,Q),q+=3}h.addGroup(y,q,N===!0?1:2),y+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gl extends ml{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,c=Math.PI*2){super(0,e,t,n,i,s,a,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:c}}static fromJSON(e){return new gl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Ho=new V,zo=new V,oc=new V,Vo=new hi;class nh extends kn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(ns*t),a=e.getIndex(),c=e.getAttribute("position"),l=a?a.count:c.count,h=[0,0,0],f=["a","b","c"],p=new Array(3),g={},v=[];for(let M=0;M<l;M+=3){a?(h[0]=a.getX(M),h[1]=a.getX(M+1),h[2]=a.getX(M+2)):(h[0]=M,h[1]=M+1,h[2]=M+2);const{a:E,b:x,c:y}=Vo;if(E.fromBufferAttribute(c,h[0]),x.fromBufferAttribute(c,h[1]),y.fromBufferAttribute(c,h[2]),Vo.getNormal(oc),p[0]=`${Math.round(E.x*i)},${Math.round(E.y*i)},${Math.round(E.z*i)}`,p[1]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,p[2]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let D=0;D<3;D++){const P=(D+1)%3,N=p[D],d=p[P],F=Vo[f[D]],O=Vo[f[P]],q=`${N}_${d}`,I=`${d}_${N}`;I in g&&g[I]?(oc.dot(g[I].normal)<=s&&(v.push(F.x,F.y,F.z),v.push(O.x,O.y,O.z)),g[I]=null):q in g||(g[q]={index0:h[D],index1:h[P],normal:oc.clone()})}}for(const M in g)if(g[M]){const{index0:E,index1:x}=g[M];Ho.fromBufferAttribute(c,E),zo.fromBufferAttribute(c,x),v.push(Ho.x,Ho.y,Ho.z),v.push(zo.x,zo.y,zo.z)}this.setAttribute("position",new gn(v,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class _l extends kn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+c,Math.PI);let h=0;const f=[],p=new V,g=new V,v=[],M=[],E=[],x=[];for(let y=0;y<=n;y++){const D=[],P=y/n;let N=0;y===0&&a===0?N=.5/t:y===n&&l===Math.PI&&(N=-.5/t);for(let d=0;d<=t;d++){const F=d/t;p.x=-e*Math.cos(i+F*s)*Math.sin(a+P*c),p.y=e*Math.cos(a+P*c),p.z=e*Math.sin(i+F*s)*Math.sin(a+P*c),M.push(p.x,p.y,p.z),g.copy(p).normalize(),E.push(g.x,g.y,g.z),x.push(F+N,1-P),D.push(h++)}f.push(D)}for(let y=0;y<n;y++)for(let D=0;D<t;D++){const P=f[y][D+1],N=f[y][D],d=f[y+1][D],F=f[y+1][D+1];(y!==0||a>0)&&v.push(P,N,F),(y!==n-1||l<Math.PI)&&v.push(N,d,F)}this.setIndex(v),this.setAttribute("position",new gn(M,3)),this.setAttribute("normal",new gn(E,3)),this.setAttribute("uv",new gn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _l(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vl extends xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dh,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ti extends vl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _n(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Go(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function _v(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function vv(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ih(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const c=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[c+l]}return i}function Qh(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class Zs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let c=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const c=t[1];e<c&&(n=2,s=c);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const c=n+a>>>1;e<t[c]?a=c:n=c+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class xv extends Zs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ql,endingEnd:ql}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,c=i[s],l=i[a];if(c===void 0)switch(this.getSettings_().endingStart){case Yl:s=e,c=2*t-n;break;case Kl:s=i.length-2,c=t+i[s]-i[s+1];break;default:s=e,c=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Yl:a=e,l=2*n-t;break;case Kl:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const h=(n-t)*.5,f=this.valueSize;this._weightPrev=h/(t-c),this._weightNext=h/(l-n),this._offsetPrev=s*f,this._offsetNext=a*f}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,l=e*c,h=l-c,f=this._offsetPrev,p=this._offsetNext,g=this._weightPrev,v=this._weightNext,M=(n-t)/(i-t),E=M*M,x=E*M,y=-g*x+2*g*E-g*M,D=(1+g)*x+(-1.5-2*g)*E+(-.5+g)*M+1,P=(-1-v)*x+(1.5+v)*E+.5*M,N=v*x-v*E;for(let d=0;d!==c;++d)s[d]=y*a[f+d]+D*a[h+d]+P*a[l+d]+N*a[p+d];return s}}class yv extends Zs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,l=e*c,h=l-c,f=(n-t)/(i-t),p=1-f;for(let g=0;g!==c;++g)s[g]=a[h+g]*p+a[l+g]*f;return s}}class Mv extends Zs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class bi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Go(t,this.TimeBufferType),this.values=Go(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Go(e.times,Array),values:Go(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Mv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xs:t=this.InterpolantFactoryMethodDiscrete;break;case js:t=this.InterpolantFactoryMethodLinear;break;case La:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xs;case this.InterpolantFactoryMethodLinear:return js;case this.InterpolantFactoryMethodSmooth:return La}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const c=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*c,a*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let c=0;c!==s;c++){const l=n[c];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,l,a),e=!1;break}a=l}if(i!==void 0&&_v(i))for(let c=0,l=i.length;c!==l;++c){const h=i[c];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===La,s=e.length-1;let a=1;for(let c=1;c<s;++c){let l=!1;const h=e[c],f=e[c+1];if(h!==f&&(c!==1||h!==e[0]))if(i)l=!0;else{const p=c*n,g=p-n,v=p+n;for(let M=0;M!==n;++M){const E=t[p+M];if(E!==t[g+M]||E!==t[v+M]){l=!0;break}}}if(l){if(c!==a){e[a]=e[c];const p=c*n,g=a*n;for(let v=0;v!==n;++v)t[g+v]=t[p+v]}++a}}if(s>0){e[a]=e[s];for(let c=s*n,l=a*n,h=0;h!==n;++h)t[l+h]=t[c+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=js;class vs extends bi{constructor(e,t,n){super(e,t,n)}}vs.prototype.ValueTypeName="bool";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=Xs;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;class ed extends bi{}ed.prototype.ValueTypeName="color";class ds extends bi{}ds.prototype.ValueTypeName="number";class Sv extends Zs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,l=(n-t)/(i-t);let h=e*c;for(let f=h+c;h!==f;h+=4)yi.slerpFlat(s,0,a,h-c,a,h,l);return s}}class fs extends bi{InterpolantFactoryMethodLinear(e){return new Sv(this.times,this.values,this.getValueSize(),e)}}fs.prototype.ValueTypeName="quaternion";fs.prototype.InterpolantFactoryMethodSmooth=void 0;class xs extends bi{constructor(e,t,n){super(e,t,n)}}xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Xs;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;class ps extends bi{}ps.prototype.ValueTypeName="vector";class Ev{constructor(e="",t=-1,n=[],i=Sf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=pi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,c=n.length;a!==c;++a)t.push(bv(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(bi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let c=0;c<s;c++){let l=[],h=[];l.push((c+s-1)%s,c,(c+1)%s),h.push(0,1,0);const f=vv(l);l=ih(l,1,f),h=ih(h,1,f),!i&&l[0]===0&&(l.push(s),h.push(h[0])),a.push(new ds(".morphTargetInfluences["+t[c].name+"]",l,h).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let c=0,l=e.length;c<l;c++){const h=e[c],f=h.name.match(s);if(f&&f.length>1){const p=f[1];let g=i[p];g||(i[p]=g=[]),g.push(h)}}const a=[];for(const c in i)a.push(this.CreateFromMorphTargetSequence(c,i[c],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(p,g,v,M,E){if(v.length!==0){const x=[],y=[];Qh(v,x,y,M),x.length!==0&&E.push(new p(g,x,y))}},i=[],s=e.name||"default",a=e.fps||30,c=e.blendMode;let l=e.length||-1;const h=e.hierarchy||[];for(let p=0;p<h.length;p++){const g=h[p].keys;if(!(!g||g.length===0))if(g[0].morphTargets){const v={};let M;for(M=0;M<g.length;M++)if(g[M].morphTargets)for(let E=0;E<g[M].morphTargets.length;E++)v[g[M].morphTargets[E]]=-1;for(const E in v){const x=[],y=[];for(let D=0;D!==g[M].morphTargets.length;++D){const P=g[M];x.push(P.time),y.push(P.morphTarget===E?1:0)}i.push(new ds(".morphTargetInfluence["+E+"]",x,y))}l=v.length*a}else{const v=".bones["+t[p].name+"]";n(ps,v+".position",g,"pos",i),n(fs,v+".quaternion",g,"rot",i),n(ps,v+".scale",g,"scl",i)}}return i.length===0?null:new this(s,l,i,c)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Tv(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ds;case"vector":case"vector2":case"vector3":case"vector4":return ps;case"color":return ed;case"quaternion":return fs;case"bool":case"boolean":return vs;case"string":return xs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function bv(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Tv(r.type);if(r.times===void 0){const t=[],n=[];Qh(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const ir={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Av{constructor(e,t,n){const i=this;let s=!1,a=0,c=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){c++,s===!1&&i.onStart!==void 0&&i.onStart(f,a,c),s=!0},this.itemEnd=function(f){a++,i.onProgress!==void 0&&i.onProgress(f,a,c),a===c&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return h.push(f,p),this},this.removeHandler=function(f){const p=h.indexOf(f);return p!==-1&&h.splice(p,2),this},this.getHandler=function(f){for(let p=0,g=h.length;p<g;p+=2){const v=h[p],M=h[p+1];if(v.global&&(v.lastIndex=0),v.test(f))return M}return null}}}const wv=new Av;class ys{constructor(e){this.manager=e!==void 0?e:wv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ys.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ni={};class Rv extends Error{constructor(e,t){super(e),this.response=t}}class td extends ys{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ir.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ni[e]!==void 0){Ni[e].push({onLoad:t,onProgress:n,onError:i});return}Ni[e]=[],Ni[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,l=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const f=Ni[e],p=h.body.getReader(),g=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),v=g?parseInt(g):0,M=v!==0;let E=0;const x=new ReadableStream({start(y){D();function D(){p.read().then(({done:P,value:N})=>{if(P)y.close();else{E+=N.byteLength;const d=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:v});for(let F=0,O=f.length;F<O;F++){const q=f[F];q.onProgress&&q.onProgress(d)}y.enqueue(N),D()}},P=>{y.error(P)})}}});return new Response(x)}else throw new Rv(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(f=>new DOMParser().parseFromString(f,c));case"json":return h.json();default:if(c===void 0)return h.text();{const p=/charset="?([^;"\s]*)"?/i.exec(c),g=p&&p[1]?p[1].toLowerCase():void 0,v=new TextDecoder(g);return h.arrayBuffer().then(M=>v.decode(M))}}}).then(h=>{ir.add(e,h);const f=Ni[e];delete Ni[e];for(let p=0,g=f.length;p<g;p++){const v=f[p];v.onLoad&&v.onLoad(h)}}).catch(h=>{const f=Ni[e];if(f===void 0)throw this.manager.itemError(e),h;delete Ni[e];for(let p=0,g=f.length;p<g;p++){const v=f[p];v.onError&&v.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Cv extends ys{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ir.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const c=qs("img");function l(){f(),ir.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(p){f(),i&&i(p),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){c.removeEventListener("load",l,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",l,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),s.manager.itemStart(e),c.src=e,c}}class Pv extends ys{constructor(e){super(e)}load(e,t,n,i){const s=new hn,a=new Cv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(c){s.image=c,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ga extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ac=new mt,rh=new V,sh=new V;class xl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ll,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;rh.setFromMatrixPosition(e.matrixWorld),t.position.copy(rh),sh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sh),t.updateMatrixWorld(),ac.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ac),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ac)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Lv extends xl{constructor(){super(new Ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=us*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Iv extends ga{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Lv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const oh=new mt,Os=new V,cc=new V;class Dv extends xl{constructor(){super(new Ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new Ut(2,1,1,1),new Ut(0,1,1,1),new Ut(3,1,1,1),new Ut(1,1,1,1),new Ut(3,0,1,1),new Ut(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Os.setFromMatrixPosition(e.matrixWorld),n.position.copy(Os),cc.copy(n.position),cc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(cc),n.updateMatrixWorld(),i.makeTranslation(-Os.x,-Os.y,-Os.z),oh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oh)}}class _a extends ga{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Dv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Nv extends xl{constructor(){super(new ul(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uv extends ga{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new Nv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ov extends ga{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class zs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Fv extends ys{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ir.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(h=>{t&&t(h),s.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader;const l=fetch(e,c).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return ir.add(e,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){i&&i(h),ir.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});ir.add(e,l),s.manager.itemStart(e)}}const yl="\\[\\]\\.:\\/",Bv=new RegExp("["+yl+"]","g"),Ml="[^"+yl+"]",kv="[^"+yl.replace("\\.","")+"]",Hv=/((?:WC+[\/:])*)/.source.replace("WC",Ml),zv=/(WCOD+)?/.source.replace("WCOD",kv),Vv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ml),Gv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ml),Wv=new RegExp("^"+Hv+zv+Vv+Gv+"$"),Xv=["material","materials","bones","map"];class jv{constructor(e,t,n){const i=n||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Dt{constructor(e,t,n){this.path=t,this.parsedPath=n||Dt.parseTrackName(t),this.node=Dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Dt.Composite(e,t,n):new Dt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bv,"")}static parseTrackName(e){const t=Wv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Xv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const c=s[a];if(c.name===t||c.uuid===t)return c;const l=n(c.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Dt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===h){h=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const a=e[i];if(a===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Dt.Composite=jv;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const ah=new mt;class qv{constructor(e,t,n=0,i=1/0){this.ray=new ms(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new cl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ah.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ah),this}intersectObject(e,t=!0,n=[]){return Yc(e,this,n,t),n.sort(ch),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Yc(e[i],this,n,t);return n.sort(ch),n}}function ch(r,e){return r.distance-e.distance}function Yc(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,c=s.length;a<c;a++)Yc(s[a],e,t,!0)}}class lh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(_n(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Yv extends la{constructor(e=10,t=10,n=4473924,i=8947848){n=new ct(n),i=new ct(i);const s=t/2,a=e/t,c=e/2,l=[],h=[];for(let g=0,v=0,M=-c;g<=t;g++,M+=a){l.push(-c,0,M,c,0,M),l.push(M,0,-c,M,0,c);const E=g===s?n:i;E.toArray(h,v),v+=3,E.toArray(h,v),v+=3,E.toArray(h,v),v+=3,E.toArray(h,v),v+=3}const f=new kn;f.setAttribute("position",new gn(l,3)),f.setAttribute("color",new gn(h,3));const p=new Ys({vertexColors:!0,toneMapped:!1});super(f,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jc);const uh={type:"change"},lc={type:"start"},hh={type:"end"},Wo=new ms,dh=new Qi,Kv=Math.cos(70*On.DEG2RAD);class $v extends Ar{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pr.ROTATE,MIDDLE:Pr.DOLLY,RIGHT:Pr.PAN},this.touches={ONE:Lr.ROTATE,TWO:Lr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",Re),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Re),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(uh),n.update(),s=i.NONE},this.update=function(){const T=new V,$=new yi().setFromUnitVectors(e.up,new V(0,1,0)),Z=$.clone().invert(),re=new V,ge=new yi,Xe=new V,tt=2*Math.PI;return function(Jt=null){const St=n.object.position;T.copy(St).sub(n.target),T.applyQuaternion($),c.setFromVector3(T),n.autoRotate&&s===i.NONE&&oe(R(Jt)),n.enableDamping?(c.theta+=l.theta*n.dampingFactor,c.phi+=l.phi*n.dampingFactor):(c.theta+=l.theta,c.phi+=l.phi);let Qt=n.minAzimuthAngle,Wt=n.maxAzimuthAngle;isFinite(Qt)&&isFinite(Wt)&&(Qt<-Math.PI?Qt+=tt:Qt>Math.PI&&(Qt-=tt),Wt<-Math.PI?Wt+=tt:Wt>Math.PI&&(Wt-=tt),Qt<=Wt?c.theta=Math.max(Qt,Math.min(Wt,c.theta)):c.theta=c.theta>(Qt+Wt)/2?Math.max(Qt,c.theta):Math.min(Wt,c.theta)),c.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,c.phi)),c.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(f,n.dampingFactor):n.target.add(f),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let mi=!1;if(n.zoomToCursor&&F||n.object.isOrthographicCamera)c.radius=Pe(c.radius);else{const on=c.radius;c.radius=Pe(c.radius*h),mi=on!=c.radius}if(T.setFromSpherical(c),T.applyQuaternion(Z),St.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,f.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),f.set(0,0,0)),n.zoomToCursor&&F){let on=null;if(n.object.isPerspectiveCamera){const $n=T.length();on=Pe($n*h);const Dn=$n-on;n.object.position.addScaledVector(N,Dn),n.object.updateMatrixWorld(),mi=!!Dn}else if(n.object.isOrthographicCamera){const $n=new V(d.x,d.y,0);$n.unproject(n.object);const Dn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),n.object.updateProjectionMatrix(),mi=Dn!==n.object.zoom;const Gi=new V(d.x,d.y,0);Gi.unproject(n.object),n.object.position.sub(Gi).add($n),n.object.updateMatrixWorld(),on=T.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;on!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(on).add(n.object.position):(Wo.origin.copy(n.object.position),Wo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Wo.direction))<Kv?e.lookAt(n.target):(dh.setFromNormalAndCoplanarPoint(n.object.up,n.target),Wo.intersectPlane(dh,n.target))))}else if(n.object.isOrthographicCamera){const on=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),on!==n.object.zoom&&(n.object.updateProjectionMatrix(),mi=!0)}return h=1,F=!1,mi||re.distanceToSquared(n.object.position)>a||8*(1-ge.dot(n.object.quaternion))>a||Xe.distanceToSquared(n.target)>a?(n.dispatchEvent(uh),re.copy(n.object.position),ge.copy(n.object.quaternion),Xe.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ue),n.domElement.removeEventListener("pointerdown",Qe),n.domElement.removeEventListener("pointercancel",A),n.domElement.removeEventListener("wheel",ve),n.domElement.removeEventListener("pointermove",U),n.domElement.removeEventListener("pointerup",A),n.domElement.getRootNode().removeEventListener("keydown",Ye,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Re),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,c=new lh,l=new lh;let h=1;const f=new V,p=new Ze,g=new Ze,v=new Ze,M=new Ze,E=new Ze,x=new Ze,y=new Ze,D=new Ze,P=new Ze,N=new V,d=new Ze;let F=!1;const O=[],q={};let I=!1;function R(T){return T!==null?2*Math.PI/60*n.autoRotateSpeed*T:2*Math.PI/60/60*n.autoRotateSpeed}function G(T){const $=Math.abs(T*.01);return Math.pow(.95,n.zoomSpeed*$)}function oe(T){l.theta-=T}function Q(T){l.phi-=T}const ce=function(){const T=new V;return function(Z,re){T.setFromMatrixColumn(re,0),T.multiplyScalar(-Z),f.add(T)}}(),fe=function(){const T=new V;return function(Z,re){n.screenSpacePanning===!0?T.setFromMatrixColumn(re,1):(T.setFromMatrixColumn(re,0),T.crossVectors(n.object.up,T)),T.multiplyScalar(Z),f.add(T)}}(),ae=function(){const T=new V;return function(Z,re){const ge=n.domElement;if(n.object.isPerspectiveCamera){const Xe=n.object.position;T.copy(Xe).sub(n.target);let tt=T.length();tt*=Math.tan(n.object.fov/2*Math.PI/180),ce(2*Z*tt/ge.clientHeight,n.object.matrix),fe(2*re*tt/ge.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(ce(Z*(n.object.right-n.object.left)/n.object.zoom/ge.clientWidth,n.object.matrix),fe(re*(n.object.top-n.object.bottom)/n.object.zoom/ge.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function ye(T){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?h/=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function le(T){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?h*=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function be(T,$){if(!n.zoomToCursor)return;F=!0;const Z=n.domElement.getBoundingClientRect(),re=T-Z.left,ge=$-Z.top,Xe=Z.width,tt=Z.height;d.x=re/Xe*2-1,d.y=-(ge/tt)*2+1,N.set(d.x,d.y,1).unproject(n.object).sub(n.object.position).normalize()}function Pe(T){return Math.max(n.minDistance,Math.min(n.maxDistance,T))}function Be(T){p.set(T.clientX,T.clientY)}function vt(T){be(T.clientX,T.clientX),y.set(T.clientX,T.clientY)}function bt(T){M.set(T.clientX,T.clientY)}function ue(T){g.set(T.clientX,T.clientY),v.subVectors(g,p).multiplyScalar(n.rotateSpeed);const $=n.domElement;oe(2*Math.PI*v.x/$.clientHeight),Q(2*Math.PI*v.y/$.clientHeight),p.copy(g),n.update()}function Me(T){D.set(T.clientX,T.clientY),P.subVectors(D,y),P.y>0?ye(G(P.y)):P.y<0&&le(G(P.y)),y.copy(D),n.update()}function Le(T){E.set(T.clientX,T.clientY),x.subVectors(E,M).multiplyScalar(n.panSpeed),ae(x.x,x.y),M.copy(E),n.update()}function Fe(T){be(T.clientX,T.clientY),T.deltaY<0?le(G(T.deltaY)):T.deltaY>0&&ye(G(T.deltaY)),n.update()}function ut(T){let $=!1;switch(T.code){case n.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?Q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ae(0,n.keyPanSpeed),$=!0;break;case n.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?Q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ae(0,-n.keyPanSpeed),$=!0;break;case n.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?oe(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ae(n.keyPanSpeed,0),$=!0;break;case n.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?oe(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ae(-n.keyPanSpeed,0),$=!0;break}$&&(T.preventDefault(),n.update())}function ft(T){if(O.length===1)p.set(T.pageX,T.pageY);else{const $=at(T),Z=.5*(T.pageX+$.x),re=.5*(T.pageY+$.y);p.set(Z,re)}}function Je(T){if(O.length===1)M.set(T.pageX,T.pageY);else{const $=at(T),Z=.5*(T.pageX+$.x),re=.5*(T.pageY+$.y);M.set(Z,re)}}function Pt(T){const $=at(T),Z=T.pageX-$.x,re=T.pageY-$.y,ge=Math.sqrt(Z*Z+re*re);y.set(0,ge)}function H(T){n.enableZoom&&Pt(T),n.enablePan&&Je(T)}function Ie(T){n.enableZoom&&Pt(T),n.enableRotate&&ft(T)}function ot(T){if(O.length==1)g.set(T.pageX,T.pageY);else{const Z=at(T),re=.5*(T.pageX+Z.x),ge=.5*(T.pageY+Z.y);g.set(re,ge)}v.subVectors(g,p).multiplyScalar(n.rotateSpeed);const $=n.domElement;oe(2*Math.PI*v.x/$.clientHeight),Q(2*Math.PI*v.y/$.clientHeight),p.copy(g)}function At(T){if(O.length===1)E.set(T.pageX,T.pageY);else{const $=at(T),Z=.5*(T.pageX+$.x),re=.5*(T.pageY+$.y);E.set(Z,re)}x.subVectors(E,M).multiplyScalar(n.panSpeed),ae(x.x,x.y),M.copy(E)}function We(T){const $=at(T),Z=T.pageX-$.x,re=T.pageY-$.y,ge=Math.sqrt(Z*Z+re*re);D.set(0,ge),P.set(0,Math.pow(D.y/y.y,n.zoomSpeed)),ye(P.y),y.copy(D);const Xe=(T.pageX+$.x)*.5,tt=(T.pageY+$.y)*.5;be(Xe,tt)}function Ht(T){n.enableZoom&&We(T),n.enablePan&&At(T)}function it(T){n.enableZoom&&We(T),n.enableRotate&&ot(T)}function Qe(T){n.enabled!==!1&&(O.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",U),n.domElement.addEventListener("pointerup",A)),!we(T)&&(xt(T),T.pointerType==="touch"?rt(T):ee(T)))}function U(T){n.enabled!==!1&&(T.pointerType==="touch"?Se(T):_e(T))}function A(T){switch(Ve(T),O.length){case 0:n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",U),n.domElement.removeEventListener("pointerup",A),n.dispatchEvent(hh),s=i.NONE;break;case 1:const $=O[0],Z=q[$];rt({pointerId:$,pageX:Z.x,pageY:Z.y});break}}function ee(T){let $;switch(T.button){case 0:$=n.mouseButtons.LEFT;break;case 1:$=n.mouseButtons.MIDDLE;break;case 2:$=n.mouseButtons.RIGHT;break;default:$=-1}switch($){case Pr.DOLLY:if(n.enableZoom===!1)return;vt(T),s=i.DOLLY;break;case Pr.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;bt(T),s=i.PAN}else{if(n.enableRotate===!1)return;Be(T),s=i.ROTATE}break;case Pr.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;Be(T),s=i.ROTATE}else{if(n.enablePan===!1)return;bt(T),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(lc)}function _e(T){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ue(T);break;case i.DOLLY:if(n.enableZoom===!1)return;Me(T);break;case i.PAN:if(n.enablePan===!1)return;Le(T);break}}function ve(T){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(T.preventDefault(),n.dispatchEvent(lc),Fe(pe(T)),n.dispatchEvent(hh))}function pe(T){const $=T.deltaMode,Z={clientX:T.clientX,clientY:T.clientY,deltaY:T.deltaY};switch($){case 1:Z.deltaY*=16;break;case 2:Z.deltaY*=100;break}return T.ctrlKey&&!I&&(Z.deltaY*=10),Z}function Ye(T){T.key==="Control"&&(I=!0,n.domElement.getRootNode().addEventListener("keyup",Te,{passive:!0,capture:!0}))}function Te(T){T.key==="Control"&&(I=!1,n.domElement.getRootNode().removeEventListener("keyup",Te,{passive:!0,capture:!0}))}function Re(T){n.enabled===!1||n.enablePan===!1||ut(T)}function rt(T){switch(et(T),O.length){case 1:switch(n.touches.ONE){case Lr.ROTATE:if(n.enableRotate===!1)return;ft(T),s=i.TOUCH_ROTATE;break;case Lr.PAN:if(n.enablePan===!1)return;Je(T),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Lr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;H(T),s=i.TOUCH_DOLLY_PAN;break;case Lr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ie(T),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(lc)}function Se(T){switch(et(T),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ot(T),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;At(T),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ht(T),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;it(T),n.update();break;default:s=i.NONE}}function Ue(T){n.enabled!==!1&&T.preventDefault()}function xt(T){O.push(T.pointerId)}function Ve(T){delete q[T.pointerId];for(let $=0;$<O.length;$++)if(O[$]==T.pointerId){O.splice($,1);return}}function we(T){for(let $=0;$<O.length;$++)if(O[$]==T.pointerId)return!0;return!1}function et(T){let $=q[T.pointerId];$===void 0&&($=new Ze,q[T.pointerId]=$),$.set(T.pageX,T.pageY)}function at(T){const $=T.pointerId===O[0]?O[1]:O[0];return q[$]}n.domElement.addEventListener("contextmenu",Ue),n.domElement.addEventListener("pointerdown",Qe),n.domElement.addEventListener("pointercancel",A),n.domElement.addEventListener("wheel",ve,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Ye,{passive:!0,capture:!0}),this.update()}}function fh(r,e){if(e===Ef)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Gc||e===Ih){let t=r.getIndex();if(t===null){const a=[],c=r.getAttribute("position");if(c!==void 0){for(let l=0;l<c.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Gc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Zv extends ys{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new nx(t)}),this.register(function(t){return new ix(t)}),this.register(function(t){return new dx(t)}),this.register(function(t){return new fx(t)}),this.register(function(t){return new px(t)}),this.register(function(t){return new sx(t)}),this.register(function(t){return new ox(t)}),this.register(function(t){return new ax(t)}),this.register(function(t){return new cx(t)}),this.register(function(t){return new tx(t)}),this.register(function(t){return new lx(t)}),this.register(function(t){return new rx(t)}),this.register(function(t){return new hx(t)}),this.register(function(t){return new ux(t)}),this.register(function(t){return new Qv(t)}),this.register(function(t){return new mx(t)}),this.register(function(t){return new gx(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const h=zs.extractUrlBase(e);a=zs.resolveURL(h,this.path)}else a=zs.extractUrlBase(e);this.manager.itemStart(e);const c=function(h){i?i(h):console.error(h),s.manager.itemError(e),s.manager.itemEnd(e)},l=new td(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(h){try{s.parse(h,a,function(f){t(f),s.manager.itemEnd(e)},c)}catch(f){c(f)}},n,c)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},c={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===nd){try{a[Mt.KHR_BINARY_GLTF]=new _x(e)}catch(p){i&&i(p);return}s=JSON.parse(a[Mt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new Px(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){const p=this.pluginCallbacks[f](h);p.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),c[p.name]=p,a[p.name]=!0}if(s.extensionsUsed)for(let f=0;f<s.extensionsUsed.length;++f){const p=s.extensionsUsed[f],g=s.extensionsRequired||[];switch(p){case Mt.KHR_MATERIALS_UNLIT:a[p]=new ex;break;case Mt.KHR_DRACO_MESH_COMPRESSION:a[p]=new vx(s,this.dracoLoader);break;case Mt.KHR_TEXTURE_TRANSFORM:a[p]=new xx;break;case Mt.KHR_MESH_QUANTIZATION:a[p]=new yx;break;default:g.indexOf(p)>=0&&c[p]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+p+'".')}}h.setExtensions(a),h.setPlugins(c),h.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Jv(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Qv{constructor(e){this.parser=e,this.name=Mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let h;const f=new ct(16777215);l.color!==void 0&&f.setRGB(l.color[0],l.color[1],l.color[2],vn);const p=l.range!==void 0?l.range:0;switch(l.type){case"directional":h=new Uv(f),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new _a(f),h.distance=p;break;case"spot":h=new Iv(f),h.distance=p,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,h.angle=l.spot.outerConeAngle,h.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return h.position.set(0,0,0),h.decay=2,Fi(h,l),l.intensity!==void 0&&(h.intensity=l.intensity),h.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(h),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],c=(s.extensions&&s.extensions[this.name]||{}).light;return c===void 0?null:this._loadLight(c).then(function(l){return n._getNodeRef(t.cache,c,l)})}}class ex{constructor(){this.name=Mt.KHR_MATERIALS_UNLIT}getMaterialType(){return fi}extendParams(e,t,n){const i=[];e.color=new ct(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],vn),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Pn))}return Promise.all(i)}}class tx{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class nx{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const c=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ze(c,c)}return Promise.all(s)}}class ix{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class rx{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class sx{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ct(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const c=a.sheenColorFactor;t.sheenColor.setRGB(c[0],c[1],c[2],vn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Pn)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class ox{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class ax{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const c=a.attenuationColor||[1,1,1];return t.attenuationColor=new ct().setRGB(c[0],c[1],c[2],vn),Promise.all(s)}}class cx{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class lx{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const c=a.specularColorFactor||[1,1,1];return t.specularColor=new ct().setRGB(c[0],c[1],c[2],vn),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Pn)),Promise.all(s)}}class ux{constructor(e){this.parser=e,this.name=Mt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class hx{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class dx{constructor(e){this.parser=e,this.name=Mt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class fx{constructor(e){this.parser=e,this.name=Mt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],c=i.images[a.source];let l=n.textureLoader;if(c.uri){const h=n.options.manager.getHandler(c.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class px{constructor(e){this.parser=e,this.name=Mt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],c=i.images[a.source];let l=n.textureLoader;if(c.uri){const h=n.options.manager.getHandler(c.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class mx{constructor(e){this.name=Mt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(c){const l=i.byteOffset||0,h=i.byteLength||0,f=i.count,p=i.byteStride,g=new Uint8Array(c,l,h);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(f,p,g,i.mode,i.filter).then(function(v){return v.buffer}):a.ready.then(function(){const v=new ArrayBuffer(f*p);return a.decodeGltfBuffer(new Uint8Array(v),f,p,g,i.mode,i.filter),v})})}else return null}}class gx{constructor(e){this.name=Mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const h of i.primitives)if(h.mode!==Qn.TRIANGLES&&h.mode!==Qn.TRIANGLE_STRIP&&h.mode!==Qn.TRIANGLE_FAN&&h.mode!==void 0)return null;const a=n.extensions[this.name].attributes,c=[],l={};for(const h in a)c.push(this.parser.getDependency("accessor",a[h]).then(f=>(l[h]=f,l[h])));return c.length<1?null:(c.push(this.parser.createNodeMesh(e)),Promise.all(c).then(h=>{const f=h.pop(),p=f.isGroup?f.children:[f],g=h[0].count,v=[];for(const M of p){const E=new mt,x=new V,y=new yi,D=new V(1,1,1),P=new fv(M.geometry,M.material,g);for(let N=0;N<g;N++)l.TRANSLATION&&x.fromBufferAttribute(l.TRANSLATION,N),l.ROTATION&&y.fromBufferAttribute(l.ROTATION,N),l.SCALE&&D.fromBufferAttribute(l.SCALE,N),P.setMatrixAt(N,E.compose(x,y,D));for(const N in l)if(N==="_COLOR_0"){const d=l[N];P.instanceColor=new jc(d.array,d.itemSize,d.normalized)}else N!=="TRANSLATION"&&N!=="ROTATION"&&N!=="SCALE"&&M.geometry.setAttribute(N,l[N]);Kt.prototype.copy.call(P,M),this.parser.assignFinalMaterial(P),v.push(P)}return f.isGroup?(f.clear(),f.add(...v),f):v[0]}))}}const nd="glTF",Fs=12,ph={JSON:1313821514,BIN:5130562};class _x{constructor(e){this.name=Mt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Fs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==nd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Fs,s=new DataView(e,Fs);let a=0;for(;a<i;){const c=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===ph.JSON){const h=new Uint8Array(e,Fs+a,c);this.content=n.decode(h)}else if(l===ph.BIN){const h=Fs+a;this.body=e.slice(h,h+c)}a+=c}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class vx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,c={},l={},h={};for(const f in a){const p=Kc[f]||f.toLowerCase();c[p]=a[f]}for(const f in e.attributes){const p=Kc[f]||f.toLowerCase();if(a[f]!==void 0){const g=n.accessors[e.attributes[f]],v=ss[g.componentType];h[p]=v.name,l[p]=g.normalized===!0}}return t.getDependency("bufferView",s).then(function(f){return new Promise(function(p,g){i.decodeDracoFile(f,function(v){for(const M in v.attributes){const E=v.attributes[M],x=l[M];x!==void 0&&(E.normalized=x)}p(v)},c,h,vn,g)})})}}class xx{constructor(){this.name=Mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class yx{constructor(){this.name=Mt.KHR_MESH_QUANTIZATION}}class id extends Zs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,l=c*2,h=c*3,f=i-t,p=(n-t)/f,g=p*p,v=g*p,M=e*h,E=M-h,x=-2*v+3*g,y=v-g,D=1-x,P=y-g+p;for(let N=0;N!==c;N++){const d=a[E+N+c],F=a[E+N+l]*f,O=a[M+N+c],q=a[M+N]*f;s[N]=D*d+P*F+x*O+y*q}return s}}const Mx=new yi;class Sx extends id{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Mx.fromArray(s).normalize().toArray(s),s}}const Qn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ss={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},mh={9728:Tn,9729:Kn,9984:Sh,9985:qo,9986:Bs,9987:Bi},gh={33071:nr,33648:na,10497:or},uc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Kc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ex={CUBICSPLINE:void 0,LINEAR:js,STEP:Xs},hc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Tx(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new vl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zi})),r.DefaultMaterial}function xr(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Fi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function bx(r,e,t){let n=!1,i=!1,s=!1;for(let h=0,f=e.length;h<f;h++){const p=e[h];if(p.POSITION!==void 0&&(n=!0),p.NORMAL!==void 0&&(i=!0),p.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],c=[],l=[];for(let h=0,f=e.length;h<f;h++){const p=e[h];if(n){const g=p.POSITION!==void 0?t.getDependency("accessor",p.POSITION):r.attributes.position;a.push(g)}if(i){const g=p.NORMAL!==void 0?t.getDependency("accessor",p.NORMAL):r.attributes.normal;c.push(g)}if(s){const g=p.COLOR_0!==void 0?t.getDependency("accessor",p.COLOR_0):r.attributes.color;l.push(g)}}return Promise.all([Promise.all(a),Promise.all(c),Promise.all(l)]).then(function(h){const f=h[0],p=h[1],g=h[2];return n&&(r.morphAttributes.position=f),i&&(r.morphAttributes.normal=p),s&&(r.morphAttributes.color=g),r.morphTargetsRelative=!0,r})}function Ax(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function wx(r){let e;const t=r.extensions&&r.extensions[Mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+dc(t.attributes):e=r.indices+":"+dc(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+dc(r.targets[n]);return e}function dc(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function $c(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Rx(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Cx=new mt;class Px{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Jv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const c=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(c)===!0;const l=c.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=c.indexOf("Firefox")>-1,a=s?c.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new Pv(this.options.manager):this.textureLoader=new Fv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new td(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const c={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return xr(s,c,i),Fi(c,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(c)})).then(function(){for(const l of c.scenes)l.updateMatrixWorld();e(c)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let c=0,l=a.length;c<l;c++)e[a[c]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,c)=>{const l=this.associations.get(a);l!=null&&this.associations.set(c,l);for(const[h,f]of a.children.entries())s(f,c.children[h])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Mt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(zs.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=uc[i.type],c=ss[i.componentType],l=i.normalized===!0,h=new c(i.count*a);return Promise.resolve(new In(h,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const c=a[0],l=uc[i.type],h=ss[i.componentType],f=h.BYTES_PER_ELEMENT,p=f*l,g=i.byteOffset||0,v=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,M=i.normalized===!0;let E,x;if(v&&v!==p){const y=Math.floor(g/v),D="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+y+":"+i.count;let P=t.cache.get(D);P||(E=new h(c,y*v,i.count*v/f),P=new cv(E,v/f),t.cache.add(D,P)),x=new dl(P,l,g%v/f,M)}else c===null?E=new h(i.count*l):E=new h(c,g,i.count*l),x=new In(E,l,M);if(i.sparse!==void 0){const y=uc.SCALAR,D=ss[i.sparse.indices.componentType],P=i.sparse.indices.byteOffset||0,N=i.sparse.values.byteOffset||0,d=new D(a[1],P,i.sparse.count*y),F=new h(a[2],N,i.sparse.count*l);c!==null&&(x=new In(x.array.slice(),x.itemSize,x.normalized));for(let O=0,q=d.length;O<q;O++){const I=d[O];if(x.setX(I,F[O*l]),l>=2&&x.setY(I,F[O*l+1]),l>=3&&x.setZ(I,F[O*l+2]),l>=4&&x.setW(I,F[O*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return x})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let c=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(c=l)}return this.loadTextureImage(e,s,c)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],c=s.images[t],l=(c.uri||c.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const h=this.loadImageSource(t,n).then(function(f){f.flipY=!1,f.name=a.name||c.name||"",f.name===""&&typeof c.uri=="string"&&c.uri.startsWith("data:image/")===!1&&(f.name=c.uri);const g=(s.samplers||{})[a.sampler]||{};return f.magFilter=mh[g.magFilter]||Kn,f.minFilter=mh[g.minFilter]||Bi,f.wrapS=gh[g.wrapS]||or,f.wrapT=gh[g.wrapT]||or,i.associations.set(f,{textures:e}),f}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(p=>p.clone());const a=i.images[e],c=self.URL||self.webkitURL;let l=a.uri||"",h=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(p){h=!0;const g=new Blob([p],{type:a.mimeType});return l=c.createObjectURL(g),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const f=Promise.resolve(l).then(function(p){return new Promise(function(g,v){let M=g;t.isImageBitmapLoader===!0&&(M=function(E){const x=new hn(E);x.needsUpdate=!0,g(x)}),t.load(zs.resolveURL(p,s.path),M,void 0,v)})}).then(function(p){return h===!0&&c.revokeObjectURL(l),Fi(p,a),p.userData.mimeType=a.mimeType||Rx(a.uri),p}).catch(function(p){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),p});return this.sourceCache[e]=f,f}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Mt.KHR_TEXTURE_TRANSFORM]){const c=n.extensions!==void 0?n.extensions[Mt.KHR_TEXTURE_TRANSFORM]:void 0;if(c){const l=s.associations.get(a);a=s.extensions[Mt.KHR_TEXTURE_TRANSFORM].extendTexture(a,c),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const c="PointsMaterial:"+n.uuid;let l=this.cache.get(c);l||(l=new Jh,xi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(c,l)),n=l}else if(e.isLine){const c="LineBasicMaterial:"+n.uuid;let l=this.cache.get(c);l||(l=new Ys,xi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(c,l)),n=l}if(i||s||a){let c="ClonedMaterial:"+n.uuid+":";i&&(c+="derivative-tangents:"),s&&(c+="vertex-colors:"),a&&(c+="flat-shading:");let l=this.cache.get(c);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(c,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return vl}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const c={},l=s.extensions||{},h=[];if(l[Mt.KHR_MATERIALS_UNLIT]){const p=i[Mt.KHR_MATERIALS_UNLIT];a=p.getMaterialType(),h.push(p.extendParams(c,s,t))}else{const p=s.pbrMetallicRoughness||{};if(c.color=new ct(1,1,1),c.opacity=1,Array.isArray(p.baseColorFactor)){const g=p.baseColorFactor;c.color.setRGB(g[0],g[1],g[2],vn),c.opacity=g[3]}p.baseColorTexture!==void 0&&h.push(t.assignTexture(c,"map",p.baseColorTexture,Pn)),c.metalness=p.metallicFactor!==void 0?p.metallicFactor:1,c.roughness=p.roughnessFactor!==void 0?p.roughnessFactor:1,p.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(c,"metalnessMap",p.metallicRoughnessTexture)),h.push(t.assignTexture(c,"roughnessMap",p.metallicRoughnessTexture))),a=this._invokeOne(function(g){return g.getMaterialType&&g.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(g){return g.extendMaterialParams&&g.extendMaterialParams(e,c)})))}s.doubleSided===!0&&(c.side=ei);const f=s.alphaMode||hc.OPAQUE;if(f===hc.BLEND?(c.transparent=!0,c.depthWrite=!1):(c.transparent=!1,f===hc.MASK&&(c.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==fi&&(h.push(t.assignTexture(c,"normalMap",s.normalTexture)),c.normalScale=new Ze(1,1),s.normalTexture.scale!==void 0)){const p=s.normalTexture.scale;c.normalScale.set(p,p)}if(s.occlusionTexture!==void 0&&a!==fi&&(h.push(t.assignTexture(c,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(c.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==fi){const p=s.emissiveFactor;c.emissive=new ct().setRGB(p[0],p[1],p[2],vn)}return s.emissiveTexture!==void 0&&a!==fi&&h.push(t.assignTexture(c,"emissiveMap",s.emissiveTexture,Pn)),Promise.all(h).then(function(){const p=new a(c);return s.name&&(p.name=s.name),Fi(p,s),t.associations.set(p,{materials:e}),s.extensions&&xr(i,p,s),p})}createUniqueName(e){const t=Dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(c){return n[Mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c,t).then(function(l){return _h(l,c,t)})}const a=[];for(let c=0,l=e.length;c<l;c++){const h=e[c],f=wx(h),p=i[f];if(p)a.push(p.promise);else{let g;h.extensions&&h.extensions[Mt.KHR_DRACO_MESH_COMPRESSION]?g=s(h):g=_h(new kn,h,t),i[f]={primitive:h,promise:g},a.push(g)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,c=[];for(let l=0,h=a.length;l<h;l++){const f=a[l].material===void 0?Tx(this.cache):this.getDependency("material",a[l].material);c.push(f)}return c.push(t.loadGeometries(a)),Promise.all(c).then(function(l){const h=l.slice(0,l.length-1),f=l[l.length-1],p=[];for(let v=0,M=f.length;v<M;v++){const E=f[v],x=a[v];let y;const D=h[v];if(x.mode===Qn.TRIANGLES||x.mode===Qn.TRIANGLE_STRIP||x.mode===Qn.TRIANGLE_FAN||x.mode===void 0)y=s.isSkinnedMesh===!0?new uv(E,D):new bn(E,D),y.isSkinnedMesh===!0&&y.normalizeSkinWeights(),x.mode===Qn.TRIANGLE_STRIP?y.geometry=fh(y.geometry,Ih):x.mode===Qn.TRIANGLE_FAN&&(y.geometry=fh(y.geometry,Gc));else if(x.mode===Qn.LINES)y=new la(E,D);else if(x.mode===Qn.LINE_STRIP)y=new pl(E,D);else if(x.mode===Qn.LINE_LOOP)y=new pv(E,D);else if(x.mode===Qn.POINTS)y=new mv(E,D);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(y.geometry.morphAttributes).length>0&&Ax(y,s),y.name=t.createUniqueName(s.name||"mesh_"+e),Fi(y,s),x.extensions&&xr(i,y,x),t.assignFinalMaterial(y),p.push(y)}for(let v=0,M=p.length;v<M;v++)t.associations.set(p[v],{meshes:e,primitives:v});if(p.length===1)return s.extensions&&xr(i,p[0],s),p[0];const g=new Er;s.extensions&&xr(i,g,s),t.associations.set(g,{meshes:e});for(let v=0,M=p.length;v<M;v++)g.add(p[v]);return g})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ln(On.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ul(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Fi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,c=[],l=[];for(let h=0,f=a.length;h<f;h++){const p=a[h];if(p){c.push(p);const g=new mt;s!==null&&g.fromArray(s.array,h*16),l.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new fl(c,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],c=[],l=[],h=[],f=[];for(let p=0,g=i.channels.length;p<g;p++){const v=i.channels[p],M=i.samplers[v.sampler],E=v.target,x=E.node,y=i.parameters!==void 0?i.parameters[M.input]:M.input,D=i.parameters!==void 0?i.parameters[M.output]:M.output;E.node!==void 0&&(a.push(this.getDependency("node",x)),c.push(this.getDependency("accessor",y)),l.push(this.getDependency("accessor",D)),h.push(M),f.push(E))}return Promise.all([Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h),Promise.all(f)]).then(function(p){const g=p[0],v=p[1],M=p[2],E=p[3],x=p[4],y=[];for(let D=0,P=g.length;D<P;D++){const N=g[D],d=v[D],F=M[D],O=E[D],q=x[D];if(N===void 0)continue;N.updateMatrix&&N.updateMatrix();const I=n._createAnimationTracks(N,d,F,O,q);if(I)for(let R=0;R<I.length;R++)y.push(I[R])}return new Ev(s,void 0,y)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(c){if(c.isMesh)for(let l=0,h=i.weights.length;l<h;l++)c.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],c=i.children||[];for(let h=0,f=c.length;h<f;h++)a.push(n.getDependency("node",c[h]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(h){const f=h[0],p=h[1],g=h[2];g!==null&&f.traverse(function(v){v.isSkinnedMesh&&v.bind(g,Cx)});for(let v=0,M=p.length;v<M;v++)f.add(p[v]);return f})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",c=[],l=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return l&&c.push(l),s.camera!==void 0&&c.push(i.getDependency("camera",s.camera).then(function(h){return i._getNodeRef(i.cameraCache,s.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){c.push(h)}),this.nodeCache[e]=Promise.all(c).then(function(h){let f;if(s.isBone===!0?f=new $h:h.length>1?f=new Er:h.length===1?f=h[0]:f=new Kt,f!==h[0])for(let p=0,g=h.length;p<g;p++)f.add(h[p]);if(s.name&&(f.userData.name=s.name,f.name=a),Fi(f,s),s.extensions&&xr(n,f,s),s.matrix!==void 0){const p=new mt;p.fromArray(s.matrix),f.applyMatrix4(p)}else s.translation!==void 0&&f.position.fromArray(s.translation),s.rotation!==void 0&&f.quaternion.fromArray(s.rotation),s.scale!==void 0&&f.scale.fromArray(s.scale);return i.associations.has(f)||i.associations.set(f,{}),i.associations.get(f).nodes=e,f}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Er;n.name&&(s.name=i.createUniqueName(n.name)),Fi(s,n),n.extensions&&xr(t,s,n);const a=n.nodes||[],c=[];for(let l=0,h=a.length;l<h;l++)c.push(i.getDependency("node",a[l]));return Promise.all(c).then(function(l){for(let f=0,p=l.length;f<p;f++)s.add(l[f]);const h=f=>{const p=new Map;for(const[g,v]of i.associations)(g instanceof xi||g instanceof hn)&&p.set(g,v);return f.traverse(g=>{const v=i.associations.get(g);v!=null&&p.set(g,v)}),p};return i.associations=h(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],c=e.name?e.name:e.uuid,l=[];Ji[s.path]===Ji.weights?e.traverse(function(g){g.morphTargetInfluences&&l.push(g.name?g.name:g.uuid)}):l.push(c);let h;switch(Ji[s.path]){case Ji.weights:h=ds;break;case Ji.rotation:h=fs;break;case Ji.position:case Ji.scale:h=ps;break;default:switch(n.itemSize){case 1:h=ds;break;case 2:case 3:default:h=ps;break}break}const f=i.interpolation!==void 0?Ex[i.interpolation]:js,p=this._getArrayFromAccessor(n);for(let g=0,v=l.length;g<v;g++){const M=new h(l[g]+"."+Ji[s.path],t.array,p,f);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),a.push(M)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=$c(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof fs?Sx:id;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Lx(r,e,t){const n=e.attributes,i=new Si;if(n.POSITION!==void 0){const c=t.json.accessors[n.POSITION],l=c.min,h=c.max;if(l!==void 0&&h!==void 0){if(i.set(new V(l[0],l[1],l[2]),new V(h[0],h[1],h[2])),c.normalized){const f=$c(ss[c.componentType]);i.min.multiplyScalar(f),i.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const c=new V,l=new V;for(let h=0,f=s.length;h<f;h++){const p=s[h];if(p.POSITION!==void 0){const g=t.json.accessors[p.POSITION],v=g.min,M=g.max;if(v!==void 0&&M!==void 0){if(l.setX(Math.max(Math.abs(v[0]),Math.abs(M[0]))),l.setY(Math.max(Math.abs(v[1]),Math.abs(M[1]))),l.setZ(Math.max(Math.abs(v[2]),Math.abs(M[2]))),g.normalized){const E=$c(ss[g.componentType]);l.multiplyScalar(E)}c.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(c)}r.boundingBox=i;const a=new Ei;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function _h(r,e,t){const n=e.attributes,i=[];function s(a,c){return t.getDependency("accessor",a).then(function(l){r.setAttribute(c,l)})}for(const a in n){const c=Kc[a]||a.toLowerCase();c in r.attributes||i.push(s(n[a],c))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(c){r.setIndex(c)});i.push(a)}return Ct.workingColorSpace!==vn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ct.workingColorSpace}" not supported.`),Fi(r,e),Lx(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?bx(r,e.targets,t):r})}function ua(r){const e=new Map,t=new Map,n=r.clone();return rd(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,a=e.get(i),c=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=c.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function rd(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)rd(r.children[n],e.children[n],t)}const tn=new av,Hi=new Ln(75,window.innerWidth/innerHeight,.1,1e3);let cr=new ov({canvas:document.querySelector("#bg")});cr.setPixelRatio(window.devicePixelRatio);cr.setSize(window.innerWidth,innerHeight);Hi.position.setZ(800);Hi.position.setY(5);const Ix=new Ov(16777215),Dx=new Yv(2e3,800),va=new $v(Hi,cr.domElement);va.enableZoom=!1;va.noZoom=!0;va.enabled=!1;tn.add(Ix);tn.add(Dx);let Fn=new V(5,800,0);const vh=4500;let Vs=null;const sd=document.querySelector(".swiper-slide-num"),ha=document.querySelectorAll(".heading"),od=1500;var Jr=null;const Yn=new Swiper(".swiper",{direction:"vertical",loop:!0,speed:od,mousewheel:!1,keyboard:{enabled:!0},pagination:{el:".swiper-pagination-custom",loop:!0,bulletClass:"swiper-bullet-custom",bulletActiveClass:"is-active",bulletElement:"button",clickable:!0}}),li=new Swiper(".Swiper_Portfolio",{direction:"horizontal",slidesPerView:1,spaceBetween:30,speed:od,mousewheel:!1,pagination:{el:".swiper-pagination_2",clickable:!0}});document.body.addEventListener("wheel",r=>{r.preventDefault(),Yn.realIndex==3?li.realIndex==4&&r.wheelDeltaY<0||li.realIndex==0&&r.wheelDeltaY>0?r.wheelDeltaY<0?Yn.slideNext():Yn.slidePrev():r.wheelDeltaY<0?li.slideNext():li.slidePrev():r.wheelDeltaY<0?Yn.slideNext():Yn.slidePrev(),li.realIndex==0&&(Yn.slidePrev(),li.slideNext()),li.realIndex==4&&(Yn.slideNext(),li.slidePrev()),li.realIndex==2&&(tn.background=new ct(16777215)),(li.realIndex==1||li.realIndex==3)&&(tn.background=new ct(0))});Yn.on("slideNextTransitionStart",()=>{let r=Yn.realIndex;switch(sd.textContent=r+1,ha.forEach(e=>e.classList.remove("is-active")),ha[r].classList.add("is-active"),r){case 0:Fn=new V(0,5,800),document.querySelector(".navbar").style.display="grid";break;case 1:Fn=new V(0,5,400),document.querySelector(".navbar").style.display="none";break;case 2:Fn=new V(-400,5,200),document.querySelector(".navbar").style.display="none";break;case 3:Fn=new V(0,5,100),document.querySelector(".navbar").style.display="none";break;case 4:Fn=new V(0,100,0),document.querySelector(".navbar").style.display="none";break;default:Fn=new V(0,200,200),document.querySelector(".navbar").style.display="none";break}Vs=null,Jr=Fn,gsap.timeline({defaults:{duration:Sl/5e3}}).to(".front",{translateY:"100%"}).set(".front",{translateY:"-100%"}).to(".front",{translateY:"0%"})});Yn.on("slidePrevTransitionStart",()=>{let r=Yn.realIndex;switch(sd.textContent=r+1,ha.forEach(e=>e.classList.remove("is-active")),ha[r].classList.add("is-active"),r){case 0:Fn=new V(0,5,800),document.querySelector(".navbar").style.display="grid";break;case 1:Fn=new V(0,5,400),document.querySelector(".navbar").style.display="none";break;case 2:Fn=new V(-400,5,200),document.querySelector(".navbar").style.display="none";break;case 3:Fn=new V(0,5,100),document.querySelector(".navbar").style.display="none";break;case 4:Fn=new V(0,100,0),document.querySelector(".navbar").style.display="none";break;default:Fn=new V(0,5,800),document.querySelector(".navbar").style.display="none";break}Vs=null,Jr=Fn,gsap.timeline({defaults:{duration:Sl/2e3}}).to(".front",{translateY:"-100%"}).set(".front",{translateY:"100%"}).to(".front",{translateY:"0%"})});document.getElementById("go_To_Contacts").addEventListener("click",function(){Yn.slideTo(4)});document.getElementById("w-node-_475191de-f6e8-9024-5d0a-bd63c5d18fb7-67f9e306").addEventListener("click",function(){Yn.slideTo(1)});const er=[],Gs=[],Sl=.03;let Xo=0;function ad(r){if(requestAnimationFrame(ad),Jr!=null){Vs||(Vs=r);const e=r-Vs;if(e>=vh)Hi.position.copy(Jr),Jr=null;else{const t=e/vh;Hi.position.lerp(Jr,t)}}cd.forEach((e,t)=>{e.rotation.x+=Zc[t][0],e.rotation.y+=Zc[t][1]}),Xo+=Sl;for(let e=0;e<Qr.length;e++){let t=er[e]+(Gs[e]-er[e])*Math.sin(Xo);e%2,er[e]+(Gs[e]-er[e])*Math.sin(Xo),Qr[e].position.y=t}va.update(),cr.setSize(window.innerWidth,innerHeight),cr.render(tn,Hi)}const da=new qv;cr.domElement.addEventListener("mousemove",Nx);let $r;function Nx(r){const e=new Ze;e.x=r.clientX/window.innerWidth*2-1,e.y=-(r.clientY/window.innerHeight)*2+1,da.setFromCamera(e,Hi);const t=da.intersectObjects(tn.children,!0);if(t.length>0){t[0].object.name=="Space_Invader"?t[0].object.material.color.set(2223626):t[0].object.name=="Moon"||t[0].object.name=="Space_Invader_kill"||(t[0].object.name.indexOf("Сфера")==0?t[0].object.material.color.set(268435455):t[0].object.name.indexOf("Object")==0||t[0].object.type!="GridHelper"&&(t[0].object.material.color.set(16711680),document.getElementById("bg").style.cursor="default"));try{$r.object.id!=t[0].object.id&&$r.object.name=="Space_Invader"&&$r.object.material.color.set(16777215)}catch{$r=t[0]}if(t[0].object.name!="world")try{tn.getObjectByName("world").material.color.set(65793)}catch{$r=t[0]}$r=t[0],t[0].object.name.indexOf("Object")==0?document.getElementById("bg").style.cursor="pointer":document.getElementById("bg").style.cursor="default"}else document.getElementById("bg").style.cursor="default"}cr.domElement.addEventListener("click",Ux);function Ux(r){const e=new Ze;e.x=r.clientX/window.innerWidth*2-1,e.y=-(r.clientY/window.innerHeight)*2+1,da.setFromCamera(e,Hi);const t=da.intersectObjects(tn.children,!0);t.length>0&&t[0].object.name=="Space_Invader"&&(t[0].object.name="Space_Invader_kill",t[0].object.material.color.set(16711680))}function Ox(){const r=new _l(1,32,16),e=new fi({color:16777215}),t=new bn(r,e),n=On.randFloatSpread(800),i=On.randFloat(0,800),s=On.randFloatSpread(800);t.position.set(n,i,s),tn.add(t)}Array(1e3).fill().forEach(Ox);const Fx=new $s(150,80),Bx=new fi({color:0,side:ei}),El=new bn(Fx,Bx);El.rotation.x=90*Math.PI/180;El.position.set(0,-1,350);tn.add(El);const cd=[],Zc=[];function kx(){const r=new gs(20,20,20),e=new nh(r),t=new Ys({color:16777215});t.linewidth=5;const n=new la(e,t),i=On.randFloat(2,10),s=On.randFloat(0,10),a=On.randFloat(3,7),c=1,l=!1,h=0,f=On.randFloat(3.8786724068467,6.283185307179586),p=new gl(i,s,a,c,l,h,f),g=new fi({color:16777215}),v=new bn(p,g),M=new nh(p),E=new Ys({color:0,linewidth:2}),x=new la(M,E),y=On.randFloatSpread(1e3),D=On.randFloat(0,1e3),P=On.randFloatSpread(1e3);let N=On.randFloat(0,.01),d=On.randFloat(0,.01);n.position.set(y,D,P),v.position.set(y,D,P),x.position.set(y,D,P),Zc.push([N,d]),cd.push(n),tn.add(n),tn.add(v),tn.add(x)}Array(1050).fill().forEach(kx);const Tl=new Zv;var Qr=[];Tl.load("imgs/3d_space_invader.glb",function(r){let e=-60,t=0;for(let n=0;n<40;n+=10)for(let i=10;i<120;i+=10)i=i%50===0?i+31:i,Qr[Qr.length]=ua(r.scene),er[er.length]=n-5,Gs[Gs.length]=n+5,zx(Qr[Qr.length-1],e+i,t+n,350);ad()});const Ui={color:16777215,transmission:1,opacity:1,metalness:0,roughness:.26,ior:1.5,thickness:3.59,specularIntensity:0,specularColor:16777215,envMapIntensity:1,lightIntensity:1,exposure:1};function Hx(){const r=document.createElement("canvas");r.width=2,r.height=2;const e=r.getContext("2d");return e.fillStyle="white",e.fillRect(0,1,2,1),r}const Js=new gv(Hx());Js.magFilter=Tn;Js.wrapT=or;Js.wrapS=or;Js.repeat.set(1,3.5);function zx(r,e,t,n){const s=bl(r);r.scale.set(10/s,10/s,10/s);const a=new V(e,t,n);r.position.copy(a),r.traverse(c=>{c.isMesh&&(c.material=new fi({color:Ui.color,metalness:Ui.metalness,roughness:Ui.roughness,ior:Ui.ior,alphaMap:Js,envMapIntensity:Ui.envMapIntensity,transmission:Ui.transmission,specularIntensity:Ui.specularIntensity,specularColor:Ui.specularColor,opacity:Ui.opacity,side:ei,transparent:!0}))}),tn.add(r)}function bl(r){const e=new Si().setFromObject(r),t=new V;return e.getSize(t),t.length()}const ld=new _a(16777215,1,500);ld.position.set(0,35,70);tn.add(ld);Tl.load("imgs/world.glb",function(r){var e=ua(r.scene);const t=120,n=bl(e);e.scale.set(t/n,t/n,t/n);const i=new V(0,35,0);e.position.copy(i),e.rotation.y=.01,tn.add(e);function s(){requestAnimationFrame(s),e.rotation.y+=.01,cr.render(tn,Hi)}s()});const ud=new _a("#ffffff",4,500);ud.position.set(0,26,780);tn.add(ud);const hd=new _a("#ffffff",4,500);hd.position.set(0,26,580);tn.add(hd);var jo=[];Tl.load("imgs/asteroide.glb",function(r){[[-15,40,720],[11,35,750],[15,10,800],[17,9,750],[15,15,500],[37,12,730],[24,14,630],[23,10,670],[30,10,520],[15,5,570],[20,15,450],[27,25,744],[23,11,666],[18,17,550],[32,20,654],[0,30,611],[-40,10,760],[-15,5,750],[-15,15,500],[-30,12,730],[-20,18,630],[-20,10,670],[-30,7,520],[-15,5,570],[-20,15,450],[-27,25,744],[-23,11,666],[-18,17,550],[-32,20,654],[-1,20,711]].forEach(n=>{jo[jo.length]=ua(r.scene),Vx(jo[jo.length-1],n[0],n[1],n[2])});var t=ua(r.scene);tn.add(t)});function Vx(r,e,t,n){const s=bl(r);r.scale.set(40/s,40/s,40/s),r.traverse(c=>{c.isMesh&&(c.material.color.set("#ffffff"),c.material.wireframe=!0)});const a=new V(e,t,n);r.position.copy(a),tn.add(r)}document.getElementById("downloadcv").addEventListener("click",function(){var r=document.createElement("a");r.href="imgs/Docs/CV-Luis Carvalho.pdf",r.download="CV-Luis Carvalho.pdf",r.dispatchEvent(new MouseEvent("click"))})});export default Gx();
