var sd=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);import"swiper/swiper-bundle.css";var ex=sd((ix,Io)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */(function(r,e){typeof Io=="object"&&typeof Io.exports=="object"?Io.exports=r.document?e(r,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return e(t)}:e(r)})(typeof window<"u"?window:globalThis,function(r,e){var t=[],n=Object.getPrototypeOf,i=t.slice,s=t.flat?function(o){return t.flat.call(o)}:function(o){return t.concat.apply([],o)},a=t.push,c=t.indexOf,l={},h=l.toString,f=l.hasOwnProperty,p=f.toString,g=p.call(Object),x={},M=function(o){return typeof o=="function"&&typeof o.nodeType!="number"},E=function(o){return o!=null&&o===o.window},y=r.document,v={type:!0,src:!0,nonce:!0,noModule:!0};function P(o,u,m){var _,S,b=(m=m||y).createElement("script");if(b.text=o,u)for(_ in v)(S=u[_]||u.getAttribute&&u.getAttribute(_))&&b.setAttribute(_,S);m.head.appendChild(b).parentNode.removeChild(b)}function T(o){return o==null?o+"":typeof o=="object"||typeof o=="function"?l[h.call(o)]||"object":typeof o}var D="3.5.1",d=function(o,u){return new d.fn.init(o,u)};function B(o){var u=!!o&&"length"in o&&o.length,m=T(o);return!M(o)&&!E(o)&&(m==="array"||u===0||typeof u=="number"&&0<u&&u-1 in o)}d.fn=d.prototype={jquery:D,constructor:d,length:0,toArray:function(){return i.call(this)},get:function(o){return o==null?i.call(this):o<0?this[o+this.length]:this[o]},pushStack:function(o){var u=d.merge(this.constructor(),o);return u.prevObject=this,u},each:function(o){return d.each(this,o)},map:function(o){return this.pushStack(d.map(this,function(u,m){return o.call(u,m,u)}))},slice:function(){return this.pushStack(i.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(d.grep(this,function(o,u){return(u+1)%2}))},odd:function(){return this.pushStack(d.grep(this,function(o,u){return u%2}))},eq:function(o){var u=this.length,m=+o+(o<0?u:0);return this.pushStack(0<=m&&m<u?[this[m]]:[])},end:function(){return this.prevObject||this.constructor()},push:a,sort:t.sort,splice:t.splice},d.extend=d.fn.extend=function(){var o,u,m,_,S,b,A=arguments[0]||{},F=1,k=arguments.length,W=!1;for(typeof A=="boolean"&&(W=A,A=arguments[F]||{},F++),typeof A=="object"||M(A)||(A={}),F===k&&(A=this,F--);F<k;F++)if((o=arguments[F])!=null)for(u in o)_=o[u],u!=="__proto__"&&A!==_&&(W&&_&&(d.isPlainObject(_)||(S=Array.isArray(_)))?(m=A[u],b=S&&!Array.isArray(m)?[]:S||d.isPlainObject(m)?m:{},S=!1,A[u]=d.extend(W,b,_)):_!==void 0&&(A[u]=_));return A},d.extend({expando:"jQuery"+(D+Math.random()).replace(/\D/g,""),isReady:!0,error:function(o){throw new Error(o)},noop:function(){},isPlainObject:function(o){var u,m;return!(!o||h.call(o)!=="[object Object]")&&(!(u=n(o))||typeof(m=f.call(u,"constructor")&&u.constructor)=="function"&&p.call(m)===g)},isEmptyObject:function(o){var u;for(u in o)return!1;return!0},globalEval:function(o,u,m){P(o,{nonce:u&&u.nonce},m)},each:function(o,u){var m,_=0;if(B(o))for(m=o.length;_<m&&u.call(o[_],_,o[_])!==!1;_++);else for(_ in o)if(u.call(o[_],_,o[_])===!1)break;return o},makeArray:function(o,u){var m=u||[];return o!=null&&(B(Object(o))?d.merge(m,typeof o=="string"?[o]:o):a.call(m,o)),m},inArray:function(o,u,m){return u==null?-1:c.call(u,o,m)},merge:function(o,u){for(var m=+u.length,_=0,S=o.length;_<m;_++)o[S++]=u[_];return o.length=S,o},grep:function(o,u,m){for(var _=[],S=0,b=o.length,A=!m;S<b;S++)!u(o[S],S)!==A&&_.push(o[S]);return _},map:function(o,u,m){var _,S,b=0,A=[];if(B(o))for(_=o.length;b<_;b++)(S=u(o[b],b,m))!=null&&A.push(S);else for(b in o)(S=u(o[b],b,m))!=null&&A.push(S);return s(A)},guid:1,support:x}),typeof Symbol=="function"&&(d.fn[Symbol.iterator]=t[Symbol.iterator]),d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(o,u){l["[object "+u+"]"]=u.toLowerCase()});var z=function(o){var u,m,_,S,b,A,F,k,W,te,fe,Z,ne,Ue,We,Ve,Ht,nn,In,Lt="sizzle"+1*new Date,ot=o.document,An=0,Tt=0,zt=Ks(),vs=Ks(),js=Ks(),Nn=Ks(),er=function(w,O){return w===O&&(fe=!0),0},Sr={}.hasOwnProperty,wn=[],Er=wn.pop,Wn=wn.push,Gt=wn.push,Un=wn.slice,On=function(w,O){for(var V=0,ue=w.length;V<ue;V++)if(w[V]===O)return V;return-1},ai="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ct="[\\x20\\t\\r\\n\\f]",wt="(?:\\\\[\\da-fA-F]{1,6}"+ct+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",rn="\\["+ct+"*("+wt+")(?:"+ct+"*([*^$|!~]?=)"+ct+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+wt+"))|)"+ct+"*\\]",Fn=":("+wt+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+rn+")*)|.*)\\)|)",Jt=new RegExp(ct+"+","g"),Bn=new RegExp("^"+ct+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ct+"+$","g"),Tr=new RegExp("^"+ct+"*,"+ct+"*"),qs=new RegExp("^"+ct+"*([>+~]|"+ct+")"+ct+"*"),Yh=new RegExp(ct+"|>"),Kh=new RegExp(Fn),$h=new RegExp("^"+wt+"$"),Ys={ID:new RegExp("^#("+wt+")"),CLASS:new RegExp("^\\.("+wt+")"),TAG:new RegExp("^("+wt+"|[*])"),ATTR:new RegExp("^"+rn),PSEUDO:new RegExp("^"+Fn),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ct+"*(even|odd|(([+-]|)(\\d*)n|)"+ct+"*(?:([+-]|)"+ct+"*(\\d+)|))"+ct+"*\\)|)","i"),bool:new RegExp("^(?:"+ai+")$","i"),needsContext:new RegExp("^"+ct+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ct+"*((?:-\\d)?\\d*)"+ct+"*\\)|)(?=[^-]|$)","i")},Zh=/HTML$/i,Jh=/^(?:input|select|textarea|button)$/i,Qh=/^h\d$/i,xs=/^[^{]+\{\s*\[native \w/,ed=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ta=/[+~]/,xi=new RegExp("\\\\[\\da-fA-F]{1,6}"+ct+"?|\\\\([^\\r\\n\\f])","g"),yi=function(w,O){var V="0x"+w.slice(1)-65536;return O||(V<0?String.fromCharCode(V+65536):String.fromCharCode(V>>10|55296,1023&V|56320))},Fc=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,Bc=function(w,O){return O?w==="\0"?"�":w.slice(0,-1)+"\\"+w.charCodeAt(w.length-1).toString(16)+" ":"\\"+w},kc=function(){Z()},td=Zs(function(w){return w.disabled===!0&&w.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{Gt.apply(wn=Un.call(ot.childNodes),ot.childNodes),wn[ot.childNodes.length].nodeType}catch{Gt={apply:wn.length?function(O,V){Wn.apply(O,Un.call(V))}:function(O,V){for(var ue=O.length,j=0;O[ue++]=V[j++];);O.length=ue-1}}}function It(w,O,V,ue){var j,ge,Me,Ae,De,it,$e,et=O&&O.ownerDocument,St=O?O.nodeType:9;if(V=V||[],typeof w!="string"||!w||St!==1&&St!==9&&St!==11)return V;if(!ue&&(Z(O),O=O||ne,We)){if(St!==11&&(De=ed.exec(w)))if(j=De[1]){if(St===9){if(!(Me=O.getElementById(j)))return V;if(Me.id===j)return V.push(Me),V}else if(et&&(Me=et.getElementById(j))&&In(O,Me)&&Me.id===j)return V.push(Me),V}else{if(De[2])return Gt.apply(V,O.getElementsByTagName(w)),V;if((j=De[3])&&m.getElementsByClassName&&O.getElementsByClassName)return Gt.apply(V,O.getElementsByClassName(j)),V}if(m.qsa&&!Nn[w+" "]&&(!Ve||!Ve.test(w))&&(St!==1||O.nodeName.toLowerCase()!=="object")){if($e=w,et=O,St===1&&(Yh.test(w)||qs.test(w))){for((et=ta.test(w)&&ia(O.parentNode)||O)===O&&m.scope||((Ae=O.getAttribute("id"))?Ae=Ae.replace(Fc,Bc):O.setAttribute("id",Ae=Lt)),ge=(it=A(w)).length;ge--;)it[ge]=(Ae?"#"+Ae:":scope")+" "+$s(it[ge]);$e=it.join(",")}try{return Gt.apply(V,et.querySelectorAll($e)),V}catch{Nn(w,!0)}finally{Ae===Lt&&O.removeAttribute("id")}}}return k(w.replace(Bn,"$1"),O,V,ue)}function Ks(){var w=[];return function O(V,ue){return w.push(V+" ")>_.cacheLength&&delete O[w.shift()],O[V+" "]=ue}}function Jn(w){return w[Lt]=!0,w}function Qn(w){var O=ne.createElement("fieldset");try{return!!w(O)}catch{return!1}finally{O.parentNode&&O.parentNode.removeChild(O),O=null}}function na(w,O){for(var V=w.split("|"),ue=V.length;ue--;)_.attrHandle[V[ue]]=O}function Hc(w,O){var V=O&&w,ue=V&&w.nodeType===1&&O.nodeType===1&&w.sourceIndex-O.sourceIndex;if(ue)return ue;if(V){for(;V=V.nextSibling;)if(V===O)return-1}return w?1:-1}function nd(w){return function(O){return O.nodeName.toLowerCase()==="input"&&O.type===w}}function id(w){return function(O){var V=O.nodeName.toLowerCase();return(V==="input"||V==="button")&&O.type===w}}function zc(w){return function(O){return"form"in O?O.parentNode&&O.disabled===!1?"label"in O?"label"in O.parentNode?O.parentNode.disabled===w:O.disabled===w:O.isDisabled===w||O.isDisabled!==!w&&td(O)===w:O.disabled===w:"label"in O&&O.disabled===w}}function tr(w){return Jn(function(O){return O=+O,Jn(function(V,ue){for(var j,ge=w([],V.length,O),Me=ge.length;Me--;)V[j=ge[Me]]&&(V[j]=!(ue[j]=V[j]))})})}function ia(w){return w&&typeof w.getElementsByTagName<"u"&&w}for(u in m=It.support={},b=It.isXML=function(w){var O=w.namespaceURI,V=(w.ownerDocument||w).documentElement;return!Zh.test(O||V&&V.nodeName||"HTML")},Z=It.setDocument=function(w){var O,V,ue=w?w.ownerDocument||w:ot;return ue!=ne&&ue.nodeType===9&&ue.documentElement&&(Ue=(ne=ue).documentElement,We=!b(ne),ot!=ne&&(V=ne.defaultView)&&V.top!==V&&(V.addEventListener?V.addEventListener("unload",kc,!1):V.attachEvent&&V.attachEvent("onunload",kc)),m.scope=Qn(function(j){return Ue.appendChild(j).appendChild(ne.createElement("div")),typeof j.querySelectorAll<"u"&&!j.querySelectorAll(":scope fieldset div").length}),m.attributes=Qn(function(j){return j.className="i",!j.getAttribute("className")}),m.getElementsByTagName=Qn(function(j){return j.appendChild(ne.createComment("")),!j.getElementsByTagName("*").length}),m.getElementsByClassName=xs.test(ne.getElementsByClassName),m.getById=Qn(function(j){return Ue.appendChild(j).id=Lt,!ne.getElementsByName||!ne.getElementsByName(Lt).length}),m.getById?(_.filter.ID=function(j){var ge=j.replace(xi,yi);return function(Me){return Me.getAttribute("id")===ge}},_.find.ID=function(j,ge){if(typeof ge.getElementById<"u"&&We){var Me=ge.getElementById(j);return Me?[Me]:[]}}):(_.filter.ID=function(j){var ge=j.replace(xi,yi);return function(Me){var Ae=typeof Me.getAttributeNode<"u"&&Me.getAttributeNode("id");return Ae&&Ae.value===ge}},_.find.ID=function(j,ge){if(typeof ge.getElementById<"u"&&We){var Me,Ae,De,it=ge.getElementById(j);if(it){if((Me=it.getAttributeNode("id"))&&Me.value===j)return[it];for(De=ge.getElementsByName(j),Ae=0;it=De[Ae++];)if((Me=it.getAttributeNode("id"))&&Me.value===j)return[it]}return[]}}),_.find.TAG=m.getElementsByTagName?function(j,ge){return typeof ge.getElementsByTagName<"u"?ge.getElementsByTagName(j):m.qsa?ge.querySelectorAll(j):void 0}:function(j,ge){var Me,Ae=[],De=0,it=ge.getElementsByTagName(j);if(j==="*"){for(;Me=it[De++];)Me.nodeType===1&&Ae.push(Me);return Ae}return it},_.find.CLASS=m.getElementsByClassName&&function(j,ge){if(typeof ge.getElementsByClassName<"u"&&We)return ge.getElementsByClassName(j)},Ht=[],Ve=[],(m.qsa=xs.test(ne.querySelectorAll))&&(Qn(function(j){var ge;Ue.appendChild(j).innerHTML="<a id='"+Lt+"'></a><select id='"+Lt+"-\r\\' msallowcapture=''><option selected=''></option></select>",j.querySelectorAll("[msallowcapture^='']").length&&Ve.push("[*^$]="+ct+`*(?:''|"")`),j.querySelectorAll("[selected]").length||Ve.push("\\["+ct+"*(?:value|"+ai+")"),j.querySelectorAll("[id~="+Lt+"-]").length||Ve.push("~="),(ge=ne.createElement("input")).setAttribute("name",""),j.appendChild(ge),j.querySelectorAll("[name='']").length||Ve.push("\\["+ct+"*name"+ct+"*="+ct+`*(?:''|"")`),j.querySelectorAll(":checked").length||Ve.push(":checked"),j.querySelectorAll("a#"+Lt+"+*").length||Ve.push(".#.+[+~]"),j.querySelectorAll("\\\f"),Ve.push("[\\r\\n\\f]")}),Qn(function(j){j.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var ge=ne.createElement("input");ge.setAttribute("type","hidden"),j.appendChild(ge).setAttribute("name","D"),j.querySelectorAll("[name=d]").length&&Ve.push("name"+ct+"*[*^$|!~]?="),j.querySelectorAll(":enabled").length!==2&&Ve.push(":enabled",":disabled"),Ue.appendChild(j).disabled=!0,j.querySelectorAll(":disabled").length!==2&&Ve.push(":enabled",":disabled"),j.querySelectorAll("*,:x"),Ve.push(",.*:")})),(m.matchesSelector=xs.test(nn=Ue.matches||Ue.webkitMatchesSelector||Ue.mozMatchesSelector||Ue.oMatchesSelector||Ue.msMatchesSelector))&&Qn(function(j){m.disconnectedMatch=nn.call(j,"*"),nn.call(j,"[s!='']:x"),Ht.push("!=",Fn)}),Ve=Ve.length&&new RegExp(Ve.join("|")),Ht=Ht.length&&new RegExp(Ht.join("|")),O=xs.test(Ue.compareDocumentPosition),In=O||xs.test(Ue.contains)?function(j,ge){var Me=j.nodeType===9?j.documentElement:j,Ae=ge&&ge.parentNode;return j===Ae||!(!Ae||Ae.nodeType!==1||!(Me.contains?Me.contains(Ae):j.compareDocumentPosition&&16&j.compareDocumentPosition(Ae)))}:function(j,ge){if(ge){for(;ge=ge.parentNode;)if(ge===j)return!0}return!1},er=O?function(j,ge){if(j===ge)return fe=!0,0;var Me=!j.compareDocumentPosition-!ge.compareDocumentPosition;return Me||(1&(Me=(j.ownerDocument||j)==(ge.ownerDocument||ge)?j.compareDocumentPosition(ge):1)||!m.sortDetached&&ge.compareDocumentPosition(j)===Me?j==ne||j.ownerDocument==ot&&In(ot,j)?-1:ge==ne||ge.ownerDocument==ot&&In(ot,ge)?1:te?On(te,j)-On(te,ge):0:4&Me?-1:1)}:function(j,ge){if(j===ge)return fe=!0,0;var Me,Ae=0,De=j.parentNode,it=ge.parentNode,$e=[j],et=[ge];if(!De||!it)return j==ne?-1:ge==ne?1:De?-1:it?1:te?On(te,j)-On(te,ge):0;if(De===it)return Hc(j,ge);for(Me=j;Me=Me.parentNode;)$e.unshift(Me);for(Me=ge;Me=Me.parentNode;)et.unshift(Me);for(;$e[Ae]===et[Ae];)Ae++;return Ae?Hc($e[Ae],et[Ae]):$e[Ae]==ot?-1:et[Ae]==ot?1:0}),ne},It.matches=function(w,O){return It(w,null,null,O)},It.matchesSelector=function(w,O){if(Z(w),m.matchesSelector&&We&&!Nn[O+" "]&&(!Ht||!Ht.test(O))&&(!Ve||!Ve.test(O)))try{var V=nn.call(w,O);if(V||m.disconnectedMatch||w.document&&w.document.nodeType!==11)return V}catch{Nn(O,!0)}return 0<It(O,ne,null,[w]).length},It.contains=function(w,O){return(w.ownerDocument||w)!=ne&&Z(w),In(w,O)},It.attr=function(w,O){(w.ownerDocument||w)!=ne&&Z(w);var V=_.attrHandle[O.toLowerCase()],ue=V&&Sr.call(_.attrHandle,O.toLowerCase())?V(w,O,!We):void 0;return ue!==void 0?ue:m.attributes||!We?w.getAttribute(O):(ue=w.getAttributeNode(O))&&ue.specified?ue.value:null},It.escape=function(w){return(w+"").replace(Fc,Bc)},It.error=function(w){throw new Error("Syntax error, unrecognized expression: "+w)},It.uniqueSort=function(w){var O,V=[],ue=0,j=0;if(fe=!m.detectDuplicates,te=!m.sortStable&&w.slice(0),w.sort(er),fe){for(;O=w[j++];)O===w[j]&&(ue=V.push(j));for(;ue--;)w.splice(V[ue],1)}return te=null,w},S=It.getText=function(w){var O,V="",ue=0,j=w.nodeType;if(j){if(j===1||j===9||j===11){if(typeof w.textContent=="string")return w.textContent;for(w=w.firstChild;w;w=w.nextSibling)V+=S(w)}else if(j===3||j===4)return w.nodeValue}else for(;O=w[ue++];)V+=S(O);return V},(_=It.selectors={cacheLength:50,createPseudo:Jn,match:Ys,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(w){return w[1]=w[1].replace(xi,yi),w[3]=(w[3]||w[4]||w[5]||"").replace(xi,yi),w[2]==="~="&&(w[3]=" "+w[3]+" "),w.slice(0,4)},CHILD:function(w){return w[1]=w[1].toLowerCase(),w[1].slice(0,3)==="nth"?(w[3]||It.error(w[0]),w[4]=+(w[4]?w[5]+(w[6]||1):2*(w[3]==="even"||w[3]==="odd")),w[5]=+(w[7]+w[8]||w[3]==="odd")):w[3]&&It.error(w[0]),w},PSEUDO:function(w){var O,V=!w[6]&&w[2];return Ys.CHILD.test(w[0])?null:(w[3]?w[2]=w[4]||w[5]||"":V&&Kh.test(V)&&(O=A(V,!0))&&(O=V.indexOf(")",V.length-O)-V.length)&&(w[0]=w[0].slice(0,O),w[2]=V.slice(0,O)),w.slice(0,3))}},filter:{TAG:function(w){var O=w.replace(xi,yi).toLowerCase();return w==="*"?function(){return!0}:function(V){return V.nodeName&&V.nodeName.toLowerCase()===O}},CLASS:function(w){var O=zt[w+" "];return O||(O=new RegExp("(^|"+ct+")"+w+"("+ct+"|$)"))&&zt(w,function(V){return O.test(typeof V.className=="string"&&V.className||typeof V.getAttribute<"u"&&V.getAttribute("class")||"")})},ATTR:function(w,O,V){return function(ue){var j=It.attr(ue,w);return j==null?O==="!=":!O||(j+="",O==="="?j===V:O==="!="?j!==V:O==="^="?V&&j.indexOf(V)===0:O==="*="?V&&-1<j.indexOf(V):O==="$="?V&&j.slice(-V.length)===V:O==="~="?-1<(" "+j.replace(Jt," ")+" ").indexOf(V):O==="|="&&(j===V||j.slice(0,V.length+1)===V+"-"))}},CHILD:function(w,O,V,ue,j){var ge=w.slice(0,3)!=="nth",Me=w.slice(-4)!=="last",Ae=O==="of-type";return ue===1&&j===0?function(De){return!!De.parentNode}:function(De,it,$e){var et,St,Zt,ht,sn,un,yn=ge!==Me?"nextSibling":"previousSibling",Nt=De.parentNode,ci=Ae&&De.nodeName.toLowerCase(),_n=!$e&&!Ae,Qt=!1;if(Nt){if(ge){for(;yn;){for(ht=De;ht=ht[yn];)if(Ae?ht.nodeName.toLowerCase()===ci:ht.nodeType===1)return!1;un=yn=w==="only"&&!un&&"nextSibling"}return!0}if(un=[Me?Nt.firstChild:Nt.lastChild],Me&&_n){for(Qt=(sn=(et=(St=(Zt=(ht=Nt)[Lt]||(ht[Lt]={}))[ht.uniqueID]||(Zt[ht.uniqueID]={}))[w]||[])[0]===An&&et[1])&&et[2],ht=sn&&Nt.childNodes[sn];ht=++sn&&ht&&ht[yn]||(Qt=sn=0)||un.pop();)if(ht.nodeType===1&&++Qt&&ht===De){St[w]=[An,sn,Qt];break}}else if(_n&&(Qt=sn=(et=(St=(Zt=(ht=De)[Lt]||(ht[Lt]={}))[ht.uniqueID]||(Zt[ht.uniqueID]={}))[w]||[])[0]===An&&et[1]),Qt===!1)for(;(ht=++sn&&ht&&ht[yn]||(Qt=sn=0)||un.pop())&&!((Ae?ht.nodeName.toLowerCase()===ci:ht.nodeType===1)&&++Qt&&(_n&&((St=(Zt=ht[Lt]||(ht[Lt]={}))[ht.uniqueID]||(Zt[ht.uniqueID]={}))[w]=[An,Qt]),ht===De)););return(Qt-=j)===ue||Qt%ue==0&&0<=Qt/ue}}},PSEUDO:function(w,O){var V,ue=_.pseudos[w]||_.setFilters[w.toLowerCase()]||It.error("unsupported pseudo: "+w);return ue[Lt]?ue(O):1<ue.length?(V=[w,w,"",O],_.setFilters.hasOwnProperty(w.toLowerCase())?Jn(function(j,ge){for(var Me,Ae=ue(j,O),De=Ae.length;De--;)j[Me=On(j,Ae[De])]=!(ge[Me]=Ae[De])}):function(j){return ue(j,0,V)}):ue}},pseudos:{not:Jn(function(w){var O=[],V=[],ue=F(w.replace(Bn,"$1"));return ue[Lt]?Jn(function(j,ge,Me,Ae){for(var De,it=ue(j,null,Ae,[]),$e=j.length;$e--;)(De=it[$e])&&(j[$e]=!(ge[$e]=De))}):function(j,ge,Me){return O[0]=j,ue(O,null,Me,V),O[0]=null,!V.pop()}}),has:Jn(function(w){return function(O){return 0<It(w,O).length}}),contains:Jn(function(w){return w=w.replace(xi,yi),function(O){return-1<(O.textContent||S(O)).indexOf(w)}}),lang:Jn(function(w){return $h.test(w||"")||It.error("unsupported lang: "+w),w=w.replace(xi,yi).toLowerCase(),function(O){var V;do if(V=We?O.lang:O.getAttribute("xml:lang")||O.getAttribute("lang"))return(V=V.toLowerCase())===w||V.indexOf(w+"-")===0;while((O=O.parentNode)&&O.nodeType===1);return!1}}),target:function(w){var O=o.location&&o.location.hash;return O&&O.slice(1)===w.id},root:function(w){return w===Ue},focus:function(w){return w===ne.activeElement&&(!ne.hasFocus||ne.hasFocus())&&!!(w.type||w.href||~w.tabIndex)},enabled:zc(!1),disabled:zc(!0),checked:function(w){var O=w.nodeName.toLowerCase();return O==="input"&&!!w.checked||O==="option"&&!!w.selected},selected:function(w){return w.parentNode&&w.parentNode.selectedIndex,w.selected===!0},empty:function(w){for(w=w.firstChild;w;w=w.nextSibling)if(w.nodeType<6)return!1;return!0},parent:function(w){return!_.pseudos.empty(w)},header:function(w){return Qh.test(w.nodeName)},input:function(w){return Jh.test(w.nodeName)},button:function(w){var O=w.nodeName.toLowerCase();return O==="input"&&w.type==="button"||O==="button"},text:function(w){var O;return w.nodeName.toLowerCase()==="input"&&w.type==="text"&&((O=w.getAttribute("type"))==null||O.toLowerCase()==="text")},first:tr(function(){return[0]}),last:tr(function(w,O){return[O-1]}),eq:tr(function(w,O,V){return[V<0?V+O:V]}),even:tr(function(w,O){for(var V=0;V<O;V+=2)w.push(V);return w}),odd:tr(function(w,O){for(var V=1;V<O;V+=2)w.push(V);return w}),lt:tr(function(w,O,V){for(var ue=V<0?V+O:O<V?O:V;0<=--ue;)w.push(ue);return w}),gt:tr(function(w,O,V){for(var ue=V<0?V+O:V;++ue<O;)w.push(ue);return w})}}).pseudos.nth=_.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})_.pseudos[u]=nd(u);for(u in{submit:!0,reset:!0})_.pseudos[u]=id(u);function Gc(){}function $s(w){for(var O=0,V=w.length,ue="";O<V;O++)ue+=w[O].value;return ue}function Zs(w,O,V){var ue=O.dir,j=O.next,ge=j||ue,Me=V&&ge==="parentNode",Ae=Tt++;return O.first?function(De,it,$e){for(;De=De[ue];)if(De.nodeType===1||Me)return w(De,it,$e);return!1}:function(De,it,$e){var et,St,Zt,ht=[An,Ae];if($e){for(;De=De[ue];)if((De.nodeType===1||Me)&&w(De,it,$e))return!0}else for(;De=De[ue];)if(De.nodeType===1||Me)if(St=(Zt=De[Lt]||(De[Lt]={}))[De.uniqueID]||(Zt[De.uniqueID]={}),j&&j===De.nodeName.toLowerCase())De=De[ue]||De;else{if((et=St[ge])&&et[0]===An&&et[1]===Ae)return ht[2]=et[2];if((St[ge]=ht)[2]=w(De,it,$e))return!0}return!1}}function ra(w){return 1<w.length?function(O,V,ue){for(var j=w.length;j--;)if(!w[j](O,V,ue))return!1;return!0}:w[0]}function Js(w,O,V,ue,j){for(var ge,Me=[],Ae=0,De=w.length,it=O!=null;Ae<De;Ae++)(ge=w[Ae])&&(V&&!V(ge,ue,j)||(Me.push(ge),it&&O.push(Ae)));return Me}function sa(w,O,V,ue,j,ge){return ue&&!ue[Lt]&&(ue=sa(ue)),j&&!j[Lt]&&(j=sa(j,ge)),Jn(function(Me,Ae,De,it){var $e,et,St,Zt=[],ht=[],sn=Ae.length,un=Me||function(ci,_n,Qt){for(var ei=0,Qs=_n.length;ei<Qs;ei++)It(ci,_n[ei],Qt);return Qt}(O||"*",De.nodeType?[De]:De,[]),yn=!w||!Me&&O?un:Js(un,Zt,w,De,it),Nt=V?j||(Me?w:sn||ue)?[]:Ae:yn;if(V&&V(yn,Nt,De,it),ue)for($e=Js(Nt,ht),ue($e,[],De,it),et=$e.length;et--;)(St=$e[et])&&(Nt[ht[et]]=!(yn[ht[et]]=St));if(Me){if(j||w){if(j){for($e=[],et=Nt.length;et--;)(St=Nt[et])&&$e.push(yn[et]=St);j(null,Nt=[],$e,it)}for(et=Nt.length;et--;)(St=Nt[et])&&-1<($e=j?On(Me,St):Zt[et])&&(Me[$e]=!(Ae[$e]=St))}}else Nt=Js(Nt===Ae?Nt.splice(sn,Nt.length):Nt),j?j(null,Ae,Nt,it):Gt.apply(Ae,Nt)})}function oa(w){for(var O,V,ue,j=w.length,ge=_.relative[w[0].type],Me=ge||_.relative[" "],Ae=ge?1:0,De=Zs(function(et){return et===O},Me,!0),it=Zs(function(et){return-1<On(O,et)},Me,!0),$e=[function(et,St,Zt){var ht=!ge&&(Zt||St!==W)||((O=St).nodeType?De(et,St,Zt):it(et,St,Zt));return O=null,ht}];Ae<j;Ae++)if(V=_.relative[w[Ae].type])$e=[Zs(ra($e),V)];else{if((V=_.filter[w[Ae].type].apply(null,w[Ae].matches))[Lt]){for(ue=++Ae;ue<j&&!_.relative[w[ue].type];ue++);return sa(1<Ae&&ra($e),1<Ae&&$s(w.slice(0,Ae-1).concat({value:w[Ae-2].type===" "?"*":""})).replace(Bn,"$1"),V,Ae<ue&&oa(w.slice(Ae,ue)),ue<j&&oa(w=w.slice(ue)),ue<j&&$s(w))}$e.push(V)}return ra($e)}return Gc.prototype=_.filters=_.pseudos,_.setFilters=new Gc,A=It.tokenize=function(w,O){var V,ue,j,ge,Me,Ae,De,it=vs[w+" "];if(it)return O?0:it.slice(0);for(Me=w,Ae=[],De=_.preFilter;Me;){for(ge in V&&!(ue=Tr.exec(Me))||(ue&&(Me=Me.slice(ue[0].length)||Me),Ae.push(j=[])),V=!1,(ue=qs.exec(Me))&&(V=ue.shift(),j.push({value:V,type:ue[0].replace(Bn," ")}),Me=Me.slice(V.length)),_.filter)!(ue=Ys[ge].exec(Me))||De[ge]&&!(ue=De[ge](ue))||(V=ue.shift(),j.push({value:V,type:ge,matches:ue}),Me=Me.slice(V.length));if(!V)break}return O?Me.length:Me?It.error(w):vs(w,Ae).slice(0)},F=It.compile=function(w,O){var V,ue,j,ge,Me,Ae,De=[],it=[],$e=js[w+" "];if(!$e){for(O||(O=A(w)),V=O.length;V--;)($e=oa(O[V]))[Lt]?De.push($e):it.push($e);($e=js(w,(ue=it,ge=0<(j=De).length,Me=0<ue.length,Ae=function(et,St,Zt,ht,sn){var un,yn,Nt,ci=0,_n="0",Qt=et&&[],ei=[],Qs=W,Vc=et||Me&&_.find.TAG("*",sn),Wc=An+=Qs==null?1:Math.random()||.1,rd=Vc.length;for(sn&&(W=St==ne||St||sn);_n!==rd&&(un=Vc[_n])!=null;_n++){if(Me&&un){for(yn=0,St||un.ownerDocument==ne||(Z(un),Zt=!We);Nt=ue[yn++];)if(Nt(un,St||ne,Zt)){ht.push(un);break}sn&&(An=Wc)}ge&&((un=!Nt&&un)&&ci--,et&&Qt.push(un))}if(ci+=_n,ge&&_n!==ci){for(yn=0;Nt=j[yn++];)Nt(Qt,ei,St,Zt);if(et){if(0<ci)for(;_n--;)Qt[_n]||ei[_n]||(ei[_n]=Er.call(ht));ei=Js(ei)}Gt.apply(ht,ei),sn&&!et&&0<ei.length&&1<ci+j.length&&It.uniqueSort(ht)}return sn&&(An=Wc,W=Qs),Qt},ge?Jn(Ae):Ae))).selector=w}return $e},k=It.select=function(w,O,V,ue){var j,ge,Me,Ae,De,it=typeof w=="function"&&w,$e=!ue&&A(w=it.selector||w);if(V=V||[],$e.length===1){if(2<(ge=$e[0]=$e[0].slice(0)).length&&(Me=ge[0]).type==="ID"&&O.nodeType===9&&We&&_.relative[ge[1].type]){if(!(O=(_.find.ID(Me.matches[0].replace(xi,yi),O)||[])[0]))return V;it&&(O=O.parentNode),w=w.slice(ge.shift().value.length)}for(j=Ys.needsContext.test(w)?0:ge.length;j--&&(Me=ge[j],!_.relative[Ae=Me.type]);)if((De=_.find[Ae])&&(ue=De(Me.matches[0].replace(xi,yi),ta.test(ge[0].type)&&ia(O.parentNode)||O))){if(ge.splice(j,1),!(w=ue.length&&$s(ge)))return Gt.apply(V,ue),V;break}}return(it||F(w,$e))(ue,O,!We,V,!O||ta.test(w)&&ia(O.parentNode)||O),V},m.sortStable=Lt.split("").sort(er).join("")===Lt,m.detectDuplicates=!!fe,Z(),m.sortDetached=Qn(function(w){return 1&w.compareDocumentPosition(ne.createElement("fieldset"))}),Qn(function(w){return w.innerHTML="<a href='#'></a>",w.firstChild.getAttribute("href")==="#"})||na("type|href|height|width",function(w,O,V){if(!V)return w.getAttribute(O,O.toLowerCase()==="type"?1:2)}),m.attributes&&Qn(function(w){return w.innerHTML="<input/>",w.firstChild.setAttribute("value",""),w.firstChild.getAttribute("value")===""})||na("value",function(w,O,V){if(!V&&w.nodeName.toLowerCase()==="input")return w.defaultValue}),Qn(function(w){return w.getAttribute("disabled")==null})||na(ai,function(w,O,V){var ue;if(!V)return w[O]===!0?O.toLowerCase():(ue=w.getAttributeNode(O))&&ue.specified?ue.value:null}),It}(r);d.find=z,d.expr=z.selectors,d.expr[":"]=d.expr.pseudos,d.uniqueSort=d.unique=z.uniqueSort,d.text=z.getText,d.isXMLDoc=z.isXML,d.contains=z.contains,d.escapeSelector=z.escape;var X=function(o,u,m){for(var _=[],S=m!==void 0;(o=o[u])&&o.nodeType!==9;)if(o.nodeType===1){if(S&&d(o).is(m))break;_.push(o)}return _},R=function(o,u){for(var m=[];o;o=o.nextSibling)o.nodeType===1&&o!==u&&m.push(o);return m},U=d.expr.match.needsContext;function ie(o,u){return o.nodeName&&o.nodeName.toLowerCase()===u.toLowerCase()}var pe=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function q(o,u,m){return M(u)?d.grep(o,function(_,S){return!!u.call(_,S,_)!==m}):u.nodeType?d.grep(o,function(_){return _===u!==m}):typeof u!="string"?d.grep(o,function(_){return-1<c.call(u,_)!==m}):d.filter(u,o,m)}d.filter=function(o,u,m){var _=u[0];return m&&(o=":not("+o+")"),u.length===1&&_.nodeType===1?d.find.matchesSelector(_,o)?[_]:[]:d.find.matches(o,d.grep(u,function(S){return S.nodeType===1}))},d.fn.extend({find:function(o){var u,m,_=this.length,S=this;if(typeof o!="string")return this.pushStack(d(o).filter(function(){for(u=0;u<_;u++)if(d.contains(S[u],this))return!0}));for(m=this.pushStack([]),u=0;u<_;u++)d.find(o,S[u],m);return 1<_?d.uniqueSort(m):m},filter:function(o){return this.pushStack(q(this,o||[],!1))},not:function(o){return this.pushStack(q(this,o||[],!0))},is:function(o){return!!q(this,typeof o=="string"&&U.test(o)?d(o):o||[],!1).length}});var J,Q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(d.fn.init=function(o,u,m){var _,S;if(!o)return this;if(m=m||J,typeof o=="string"){if(!(_=o[0]==="<"&&o[o.length-1]===">"&&3<=o.length?[null,o,null]:Q.exec(o))||!_[1]&&u)return!u||u.jquery?(u||m).find(o):this.constructor(u).find(o);if(_[1]){if(u=u instanceof d?u[0]:u,d.merge(this,d.parseHTML(_[1],u&&u.nodeType?u.ownerDocument||u:y,!0)),pe.test(_[1])&&d.isPlainObject(u))for(_ in u)M(this[_])?this[_](u[_]):this.attr(_,u[_]);return this}return(S=y.getElementById(_[2]))&&(this[0]=S,this.length=1),this}return o.nodeType?(this[0]=o,this.length=1,this):M(o)?m.ready!==void 0?m.ready(o):o(d):d.makeArray(o,this)}).prototype=d.fn,J=d(y);var _e=/^(?:parents|prev(?:Until|All))/,le={children:!0,contents:!0,next:!0,prev:!0};function he(o,u){for(;(o=o[u])&&o.nodeType!==1;);return o}d.fn.extend({has:function(o){var u=d(o,this),m=u.length;return this.filter(function(){for(var _=0;_<m;_++)if(d.contains(this,u[_]))return!0})},closest:function(o,u){var m,_=0,S=this.length,b=[],A=typeof o!="string"&&d(o);if(!U.test(o)){for(;_<S;_++)for(m=this[_];m&&m!==u;m=m.parentNode)if(m.nodeType<11&&(A?-1<A.index(m):m.nodeType===1&&d.find.matchesSelector(m,o))){b.push(m);break}}return this.pushStack(1<b.length?d.uniqueSort(b):b)},index:function(o){return o?typeof o=="string"?c.call(d(o),this[0]):c.call(this,o.jquery?o[0]:o):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(o,u){return this.pushStack(d.uniqueSort(d.merge(this.get(),d(o,u))))},addBack:function(o){return this.add(o==null?this.prevObject:this.prevObject.filter(o))}}),d.each({parent:function(o){var u=o.parentNode;return u&&u.nodeType!==11?u:null},parents:function(o){return X(o,"parentNode")},parentsUntil:function(o,u,m){return X(o,"parentNode",m)},next:function(o){return he(o,"nextSibling")},prev:function(o){return he(o,"previousSibling")},nextAll:function(o){return X(o,"nextSibling")},prevAll:function(o){return X(o,"previousSibling")},nextUntil:function(o,u,m){return X(o,"nextSibling",m)},prevUntil:function(o,u,m){return X(o,"previousSibling",m)},siblings:function(o){return R((o.parentNode||{}).firstChild,o)},children:function(o){return R(o.firstChild)},contents:function(o){return o.contentDocument!=null&&n(o.contentDocument)?o.contentDocument:(ie(o,"template")&&(o=o.content||o),d.merge([],o.childNodes))}},function(o,u){d.fn[o]=function(m,_){var S=d.map(this,u,m);return o.slice(-5)!=="Until"&&(_=m),_&&typeof _=="string"&&(S=d.filter(_,S)),1<this.length&&(le[o]||d.uniqueSort(S),_e.test(o)&&S.reverse()),this.pushStack(S)}});var de=/[^\x20\t\r\n\f]+/g;function ve(o){return o}function Fe(o){throw o}function se(o,u,m,_){var S;try{o&&M(S=o.promise)?S.call(o).done(u).fail(m):o&&M(S=o.then)?S.call(o,u,m):u.apply(void 0,[o].slice(_))}catch(b){m.apply(void 0,[b])}}d.Callbacks=function(o){var u,m;o=typeof o=="string"?(u=o,m={},d.each(u.match(de)||[],function(Z,ne){m[ne]=!0}),m):d.extend({},o);var _,S,b,A,F=[],k=[],W=-1,te=function(){for(A=A||o.once,b=_=!0;k.length;W=-1)for(S=k.shift();++W<F.length;)F[W].apply(S[0],S[1])===!1&&o.stopOnFalse&&(W=F.length,S=!1);o.memory||(S=!1),_=!1,A&&(F=S?[]:"")},fe={add:function(){return F&&(S&&!_&&(W=F.length-1,k.push(S)),function Z(ne){d.each(ne,function(Ue,We){M(We)?o.unique&&fe.has(We)||F.push(We):We&&We.length&&T(We)!=="string"&&Z(We)})}(arguments),S&&!_&&te()),this},remove:function(){return d.each(arguments,function(Z,ne){for(var Ue;-1<(Ue=d.inArray(ne,F,Ue));)F.splice(Ue,1),Ue<=W&&W--}),this},has:function(Z){return Z?-1<d.inArray(Z,F):0<F.length},empty:function(){return F&&(F=[]),this},disable:function(){return A=k=[],F=S="",this},disabled:function(){return!F},lock:function(){return A=k=[],S||_||(F=S=""),this},locked:function(){return!!A},fireWith:function(Z,ne){return A||(ne=[Z,(ne=ne||[]).slice?ne.slice():ne],k.push(ne),_||te()),this},fire:function(){return fe.fireWith(this,arguments),this},fired:function(){return!!b}};return fe},d.extend({Deferred:function(o){var u=[["notify","progress",d.Callbacks("memory"),d.Callbacks("memory"),2],["resolve","done",d.Callbacks("once memory"),d.Callbacks("once memory"),0,"resolved"],["reject","fail",d.Callbacks("once memory"),d.Callbacks("once memory"),1,"rejected"]],m="pending",_={state:function(){return m},always:function(){return S.done(arguments).fail(arguments),this},catch:function(b){return _.then(null,b)},pipe:function(){var b=arguments;return d.Deferred(function(A){d.each(u,function(F,k){var W=M(b[k[4]])&&b[k[4]];S[k[1]](function(){var te=W&&W.apply(this,arguments);te&&M(te.promise)?te.promise().progress(A.notify).done(A.resolve).fail(A.reject):A[k[0]+"With"](this,W?[te]:arguments)})}),b=null}).promise()},then:function(b,A,F){var k=0;function W(te,fe,Z,ne){return function(){var Ue=this,We=arguments,Ve=function(){var nn,In;if(!(te<k)){if((nn=Z.apply(Ue,We))===fe.promise())throw new TypeError("Thenable self-resolution");In=nn&&(typeof nn=="object"||typeof nn=="function")&&nn.then,M(In)?ne?In.call(nn,W(k,fe,ve,ne),W(k,fe,Fe,ne)):(k++,In.call(nn,W(k,fe,ve,ne),W(k,fe,Fe,ne),W(k,fe,ve,fe.notifyWith))):(Z!==ve&&(Ue=void 0,We=[nn]),(ne||fe.resolveWith)(Ue,We))}},Ht=ne?Ve:function(){try{Ve()}catch(nn){d.Deferred.exceptionHook&&d.Deferred.exceptionHook(nn,Ht.stackTrace),k<=te+1&&(Z!==Fe&&(Ue=void 0,We=[nn]),fe.rejectWith(Ue,We))}};te?Ht():(d.Deferred.getStackHook&&(Ht.stackTrace=d.Deferred.getStackHook()),r.setTimeout(Ht))}}return d.Deferred(function(te){u[0][3].add(W(0,te,M(F)?F:ve,te.notifyWith)),u[1][3].add(W(0,te,M(b)?b:ve)),u[2][3].add(W(0,te,M(A)?A:Fe))}).promise()},promise:function(b){return b!=null?d.extend(b,_):_}},S={};return d.each(u,function(b,A){var F=A[2],k=A[5];_[A[1]]=F.add,k&&F.add(function(){m=k},u[3-b][2].disable,u[3-b][3].disable,u[0][2].lock,u[0][3].lock),F.add(A[3].fire),S[A[0]]=function(){return S[A[0]+"With"](this===S?void 0:this,arguments),this},S[A[0]+"With"]=F.fireWith}),_.promise(S),o&&o.call(S,S),S},when:function(o){var u=arguments.length,m=u,_=Array(m),S=i.call(arguments),b=d.Deferred(),A=function(F){return function(k){_[F]=this,S[F]=1<arguments.length?i.call(arguments):k,--u||b.resolveWith(_,S)}};if(u<=1&&(se(o,b.done(A(m)).resolve,b.reject,!u),b.state()==="pending"||M(S[m]&&S[m].then)))return b.then();for(;m--;)se(S[m],A(m),b.reject);return b.promise()}});var Se=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;d.Deferred.exceptionHook=function(o,u){r.console&&r.console.warn&&o&&Se.test(o.name)&&r.console.warn("jQuery.Deferred exception: "+o.message,o.stack,u)},d.readyException=function(o){r.setTimeout(function(){throw o})};var xe=d.Deferred();function Ie(){y.removeEventListener("DOMContentLoaded",Ie),r.removeEventListener("load",Ie),d.ready()}d.fn.ready=function(o){return xe.then(o).catch(function(u){d.readyException(u)}),this},d.extend({isReady:!1,readyWait:1,ready:function(o){(o===!0?--d.readyWait:d.isReady)||(d.isReady=!0)!==o&&0<--d.readyWait||xe.resolveWith(y,[d])}}),d.ready.then=xe.then,y.readyState==="complete"||y.readyState!=="loading"&&!y.documentElement.doScroll?r.setTimeout(d.ready):(y.addEventListener("DOMContentLoaded",Ie),r.addEventListener("load",Ie));var Ce=function(o,u,m,_,S,b,A){var F=0,k=o.length,W=m==null;if(T(m)==="object")for(F in S=!0,m)Ce(o,u,F,m[F],!0,b,A);else if(_!==void 0&&(S=!0,M(_)||(A=!0),W&&(A?(u.call(o,_),u=null):(W=u,u=function(te,fe,Z){return W.call(d(te),Z)})),u))for(;F<k;F++)u(o[F],m,A?_:_.call(o[F],F,u(o[F],m)));return S?o:W?u.call(o):k?u(o[0],m):b},Xe=/^-ms-/,dt=/-([a-z])/g;function Ze(o,u){return u.toUpperCase()}function bt(o){return o.replace(Xe,"ms-").replace(dt,Ze)}var lt=function(o){return o.nodeType===1||o.nodeType===9||!+o.nodeType};function K(){this.expando=d.expando+K.uid++}K.uid=1,K.prototype={cache:function(o){var u=o[this.expando];return u||(u={},lt(o)&&(o.nodeType?o[this.expando]=u:Object.defineProperty(o,this.expando,{value:u,configurable:!0}))),u},set:function(o,u,m){var _,S=this.cache(o);if(typeof u=="string")S[bt(u)]=m;else for(_ in u)S[bt(_)]=u[_];return S},get:function(o,u){return u===void 0?this.cache(o):o[this.expando]&&o[this.expando][bt(u)]},access:function(o,u,m){return u===void 0||u&&typeof u=="string"&&m===void 0?this.get(o,u):(this.set(o,u,m),m!==void 0?m:u)},remove:function(o,u){var m,_=o[this.expando];if(_!==void 0){if(u!==void 0)for(m=(u=Array.isArray(u)?u.map(bt):(u=bt(u))in _?[u]:u.match(de)||[]).length;m--;)delete _[u[m]];(u===void 0||d.isEmptyObject(_))&&(o.nodeType?o[this.expando]=void 0:delete o[this.expando])}},hasData:function(o){var u=o[this.expando];return u!==void 0&&!d.isEmptyObject(u)}};var Ne=new K,ke=new K,ut=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,je=/[A-Z]/g;function Rt(o,u,m){var _,S;if(m===void 0&&o.nodeType===1)if(_="data-"+u.replace(je,"-$&").toLowerCase(),typeof(m=o.getAttribute(_))=="string"){try{m=(S=m)==="true"||S!=="false"&&(S==="null"?null:S===+S+""?+S:ut.test(S)?JSON.parse(S):S)}catch{}ke.set(o,u,m)}else m=void 0;return m}d.extend({hasData:function(o){return ke.hasData(o)||Ne.hasData(o)},data:function(o,u,m){return ke.access(o,u,m)},removeData:function(o,u){ke.remove(o,u)},_data:function(o,u,m){return Ne.access(o,u,m)},_removeData:function(o,u){Ne.remove(o,u)}}),d.fn.extend({data:function(o,u){var m,_,S,b=this[0],A=b&&b.attributes;if(o===void 0){if(this.length&&(S=ke.get(b),b.nodeType===1&&!Ne.get(b,"hasDataAttrs"))){for(m=A.length;m--;)A[m]&&(_=A[m].name).indexOf("data-")===0&&(_=bt(_.slice(5)),Rt(b,_,S[_]));Ne.set(b,"hasDataAttrs",!0)}return S}return typeof o=="object"?this.each(function(){ke.set(this,o)}):Ce(this,function(F){var k;if(b&&F===void 0)return(k=ke.get(b,o))!==void 0||(k=Rt(b,o))!==void 0?k:void 0;this.each(function(){ke.set(this,o,F)})},null,u,1<arguments.length,null,!0)},removeData:function(o){return this.each(function(){ke.remove(this,o)})}}),d.extend({queue:function(o,u,m){var _;if(o)return u=(u||"fx")+"queue",_=Ne.get(o,u),m&&(!_||Array.isArray(m)?_=Ne.access(o,u,d.makeArray(m)):_.push(m)),_||[]},dequeue:function(o,u){u=u||"fx";var m=d.queue(o,u),_=m.length,S=m.shift(),b=d._queueHooks(o,u);S==="inprogress"&&(S=m.shift(),_--),S&&(u==="fx"&&m.unshift("inprogress"),delete b.stop,S.call(o,function(){d.dequeue(o,u)},b)),!_&&b&&b.empty.fire()},_queueHooks:function(o,u){var m=u+"queueHooks";return Ne.get(o,m)||Ne.access(o,m,{empty:d.Callbacks("once memory").add(function(){Ne.remove(o,[u+"queue",m])})})}}),d.fn.extend({queue:function(o,u){var m=2;return typeof o!="string"&&(u=o,o="fx",m--),arguments.length<m?d.queue(this[0],o):u===void 0?this:this.each(function(){var _=d.queue(this,o,u);d._queueHooks(this,o),o==="fx"&&_[0]!=="inprogress"&&d.dequeue(this,o)})},dequeue:function(o){return this.each(function(){d.dequeue(this,o)})},clearQueue:function(o){return this.queue(o||"fx",[])},promise:function(o,u){var m,_=1,S=d.Deferred(),b=this,A=this.length,F=function(){--_||S.resolveWith(b,[b])};for(typeof o!="string"&&(u=o,o=void 0),o=o||"fx";A--;)(m=Ne.get(b[A],o+"queueHooks"))&&m.empty&&(_++,m.empty.add(F));return F(),S.promise(u)}});var ft=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Je=new RegExp("^(?:([+-])=|)("+ft+")([a-z%]*)$","i"),pt=["Top","Right","Bottom","Left"],Pt=y.documentElement,Bt=function(o){return d.contains(o.ownerDocument,o)},I={composed:!0};Pt.getRootNode&&(Bt=function(o){return d.contains(o.ownerDocument,o)||o.getRootNode(I)===o.ownerDocument});var C=function(o,u){return(o=u||o).style.display==="none"||o.style.display===""&&Bt(o)&&d.css(o,"display")==="none"};function oe(o,u,m,_){var S,b,A=20,F=_?function(){return _.cur()}:function(){return d.css(o,u,"")},k=F(),W=m&&m[3]||(d.cssNumber[u]?"":"px"),te=o.nodeType&&(d.cssNumber[u]||W!=="px"&&+k)&&Je.exec(d.css(o,u));if(te&&te[3]!==W){for(k/=2,W=W||te[3],te=+k||1;A--;)d.style(o,u,te+W),(1-b)*(1-(b=F()/k||.5))<=0&&(A=0),te/=b;te*=2,d.style(o,u,te+W),m=m||[]}return m&&(te=+te||+k||0,S=m[1]?te+(m[1]+1)*m[2]:+m[2],_&&(_.unit=W,_.start=te,_.end=S)),S}var Te={};function Ee(o,u){for(var m,_,S,b,A,F,k,W=[],te=0,fe=o.length;te<fe;te++)(_=o[te]).style&&(m=_.style.display,u?(m==="none"&&(W[te]=Ne.get(_,"display")||null,W[te]||(_.style.display="")),_.style.display===""&&C(_)&&(W[te]=(k=A=b=void 0,A=(S=_).ownerDocument,F=S.nodeName,(k=Te[F])||(b=A.body.appendChild(A.createElement(F)),k=d.css(b,"display"),b.parentNode.removeChild(b),k==="none"&&(k="block"),Te[F]=k)))):m!=="none"&&(W[te]="none",Ne.set(_,"display",m)));for(te=0;te<fe;te++)W[te]!=null&&(o[te].style.display=W[te]);return o}d.fn.extend({show:function(){return Ee(this,!0)},hide:function(){return Ee(this)},toggle:function(o){return typeof o=="boolean"?o?this.show():this.hide():this.each(function(){C(this)?d(this).show():d(this).hide()})}});var N,me,ye=/^(?:checkbox|radio)$/i,re=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,He=/^$|^module$|\/(?:java|ecma)script/i;N=y.createDocumentFragment().appendChild(y.createElement("div")),(me=y.createElement("input")).setAttribute("type","radio"),me.setAttribute("checked","checked"),me.setAttribute("name","t"),N.appendChild(me),x.checkClone=N.cloneNode(!0).cloneNode(!0).lastChild.checked,N.innerHTML="<textarea>x</textarea>",x.noCloneChecked=!!N.cloneNode(!0).lastChild.defaultValue,N.innerHTML="<option></option>",x.option=!!N.lastChild;var Oe={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Le(o,u){var m;return m=typeof o.getElementsByTagName<"u"?o.getElementsByTagName(u||"*"):typeof o.querySelectorAll<"u"?o.querySelectorAll(u||"*"):[],u===void 0||u&&ie(o,u)?d.merge([o],m):m}function ze(o,u){for(var m=0,_=o.length;m<_;m++)Ne.set(o[m],"globalEval",!u||Ne.get(u[m],"globalEval"))}Oe.tbody=Oe.tfoot=Oe.colgroup=Oe.caption=Oe.thead,Oe.th=Oe.td,x.option||(Oe.optgroup=Oe.option=[1,"<select multiple='multiple'>","</select>"]);var Ge=/<|&#?\w+;/;function Ke(o,u,m,_,S){for(var b,A,F,k,W,te,fe=u.createDocumentFragment(),Z=[],ne=0,Ue=o.length;ne<Ue;ne++)if((b=o[ne])||b===0)if(T(b)==="object")d.merge(Z,b.nodeType?[b]:b);else if(Ge.test(b)){for(A=A||fe.appendChild(u.createElement("div")),F=(re.exec(b)||["",""])[1].toLowerCase(),k=Oe[F]||Oe._default,A.innerHTML=k[1]+d.htmlPrefilter(b)+k[2],te=k[0];te--;)A=A.lastChild;d.merge(Z,A.childNodes),(A=fe.firstChild).textContent=""}else Z.push(u.createTextNode(b));for(fe.textContent="",ne=0;b=Z[ne++];)if(_&&-1<d.inArray(b,_))S&&S.push(b);else if(W=Bt(b),A=Le(fe.appendChild(b),"script"),W&&ze(A),m)for(te=0;b=A[te++];)He.test(b.type||"")&&m.push(b);return fe}var _t=/^key/,G=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Re=/^([^.]*)(?:\.(.+)|)/;function ee(){return!0}function be(){return!1}function Pe(o,u){return o===function(){try{return y.activeElement}catch{}}()==(u==="focus")}function yt(o,u,m,_,S,b){var A,F;if(typeof u=="object"){for(F in typeof m!="string"&&(_=_||m,m=void 0),u)yt(o,F,m,_,u[F],b);return o}if(_==null&&S==null?(S=m,_=m=void 0):S==null&&(typeof m=="string"?(S=_,_=void 0):(S=_,_=m,m=void 0)),S===!1)S=be;else if(!S)return o;return b===1&&(A=S,(S=function(k){return d().off(k),A.apply(this,arguments)}).guid=A.guid||(A.guid=d.guid++)),o.each(function(){d.event.add(this,u,S,_,m)})}function Dt(o,u,m){m?(Ne.set(o,u,!1),d.event.add(o,u,{namespace:!1,handler:function(_){var S,b,A=Ne.get(this,u);if(1&_.isTrigger&&this[u]){if(A.length)(d.event.special[u]||{}).delegateType&&_.stopPropagation();else if(A=i.call(arguments),Ne.set(this,u,A),S=m(this,u),this[u](),A!==(b=Ne.get(this,u))||S?Ne.set(this,u,!1):b={},A!==b)return _.stopImmediatePropagation(),_.preventDefault(),b.value}else A.length&&(Ne.set(this,u,{value:d.event.trigger(d.extend(A[0],d.Event.prototype),A.slice(1),this)}),_.stopImmediatePropagation())}})):Ne.get(o,u)===void 0&&d.event.add(o,u,ee)}d.event={global:{},add:function(o,u,m,_,S){var b,A,F,k,W,te,fe,Z,ne,Ue,We,Ve=Ne.get(o);if(lt(o))for(m.handler&&(m=(b=m).handler,S=b.selector),S&&d.find.matchesSelector(Pt,S),m.guid||(m.guid=d.guid++),(k=Ve.events)||(k=Ve.events=Object.create(null)),(A=Ve.handle)||(A=Ve.handle=function(Ht){return typeof d<"u"&&d.event.triggered!==Ht.type?d.event.dispatch.apply(o,arguments):void 0}),W=(u=(u||"").match(de)||[""]).length;W--;)ne=We=(F=Re.exec(u[W])||[])[1],Ue=(F[2]||"").split(".").sort(),ne&&(fe=d.event.special[ne]||{},ne=(S?fe.delegateType:fe.bindType)||ne,fe=d.event.special[ne]||{},te=d.extend({type:ne,origType:We,data:_,handler:m,guid:m.guid,selector:S,needsContext:S&&d.expr.match.needsContext.test(S),namespace:Ue.join(".")},b),(Z=k[ne])||((Z=k[ne]=[]).delegateCount=0,fe.setup&&fe.setup.call(o,_,Ue,A)!==!1||o.addEventListener&&o.addEventListener(ne,A)),fe.add&&(fe.add.call(o,te),te.handler.guid||(te.handler.guid=m.guid)),S?Z.splice(Z.delegateCount++,0,te):Z.push(te),d.event.global[ne]=!0)},remove:function(o,u,m,_,S){var b,A,F,k,W,te,fe,Z,ne,Ue,We,Ve=Ne.hasData(o)&&Ne.get(o);if(Ve&&(k=Ve.events)){for(W=(u=(u||"").match(de)||[""]).length;W--;)if(ne=We=(F=Re.exec(u[W])||[])[1],Ue=(F[2]||"").split(".").sort(),ne){for(fe=d.event.special[ne]||{},Z=k[ne=(_?fe.delegateType:fe.bindType)||ne]||[],F=F[2]&&new RegExp("(^|\\.)"+Ue.join("\\.(?:.*\\.|)")+"(\\.|$)"),A=b=Z.length;b--;)te=Z[b],!S&&We!==te.origType||m&&m.guid!==te.guid||F&&!F.test(te.namespace)||_&&_!==te.selector&&(_!=="**"||!te.selector)||(Z.splice(b,1),te.selector&&Z.delegateCount--,fe.remove&&fe.remove.call(o,te));A&&!Z.length&&(fe.teardown&&fe.teardown.call(o,Ue,Ve.handle)!==!1||d.removeEvent(o,ne,Ve.handle),delete k[ne])}else for(ne in k)d.event.remove(o,ne+u[W],m,_,!0);d.isEmptyObject(k)&&Ne.remove(o,"handle events")}},dispatch:function(o){var u,m,_,S,b,A,F=new Array(arguments.length),k=d.event.fix(o),W=(Ne.get(this,"events")||Object.create(null))[k.type]||[],te=d.event.special[k.type]||{};for(F[0]=k,u=1;u<arguments.length;u++)F[u]=arguments[u];if(k.delegateTarget=this,!te.preDispatch||te.preDispatch.call(this,k)!==!1){for(A=d.event.handlers.call(this,k,W),u=0;(S=A[u++])&&!k.isPropagationStopped();)for(k.currentTarget=S.elem,m=0;(b=S.handlers[m++])&&!k.isImmediatePropagationStopped();)k.rnamespace&&b.namespace!==!1&&!k.rnamespace.test(b.namespace)||(k.handleObj=b,k.data=b.data,(_=((d.event.special[b.origType]||{}).handle||b.handler).apply(S.elem,F))!==void 0&&(k.result=_)===!1&&(k.preventDefault(),k.stopPropagation()));return te.postDispatch&&te.postDispatch.call(this,k),k.result}},handlers:function(o,u){var m,_,S,b,A,F=[],k=u.delegateCount,W=o.target;if(k&&W.nodeType&&!(o.type==="click"&&1<=o.button)){for(;W!==this;W=W.parentNode||this)if(W.nodeType===1&&(o.type!=="click"||W.disabled!==!0)){for(b=[],A={},m=0;m<k;m++)A[S=(_=u[m]).selector+" "]===void 0&&(A[S]=_.needsContext?-1<d(S,this).index(W):d.find(S,this,null,[W]).length),A[S]&&b.push(_);b.length&&F.push({elem:W,handlers:b})}}return W=this,k<u.length&&F.push({elem:W,handlers:u.slice(k)}),F},addProp:function(o,u){Object.defineProperty(d.Event.prototype,o,{enumerable:!0,configurable:!0,get:M(u)?function(){if(this.originalEvent)return u(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[o]},set:function(m){Object.defineProperty(this,o,{enumerable:!0,configurable:!0,writable:!0,value:m})}})},fix:function(o){return o[d.expando]?o:new d.Event(o)},special:{load:{noBubble:!0},click:{setup:function(o){var u=this||o;return ye.test(u.type)&&u.click&&ie(u,"input")&&Dt(u,"click",ee),!1},trigger:function(o){var u=this||o;return ye.test(u.type)&&u.click&&ie(u,"input")&&Dt(u,"click"),!0},_default:function(o){var u=o.target;return ye.test(u.type)&&u.click&&ie(u,"input")&&Ne.get(u,"click")||ie(u,"a")}},beforeunload:{postDispatch:function(o){o.result!==void 0&&o.originalEvent&&(o.originalEvent.returnValue=o.result)}}}},d.removeEvent=function(o,u,m){o.removeEventListener&&o.removeEventListener(u,m)},d.Event=function(o,u){if(!(this instanceof d.Event))return new d.Event(o,u);o&&o.type?(this.originalEvent=o,this.type=o.type,this.isDefaultPrevented=o.defaultPrevented||o.defaultPrevented===void 0&&o.returnValue===!1?ee:be,this.target=o.target&&o.target.nodeType===3?o.target.parentNode:o.target,this.currentTarget=o.currentTarget,this.relatedTarget=o.relatedTarget):this.type=o,u&&d.extend(this,u),this.timeStamp=o&&o.timeStamp||Date.now(),this[d.expando]=!0},d.Event.prototype={constructor:d.Event,isDefaultPrevented:be,isPropagationStopped:be,isImmediatePropagationStopped:be,isSimulated:!1,preventDefault:function(){var o=this.originalEvent;this.isDefaultPrevented=ee,o&&!this.isSimulated&&o.preventDefault()},stopPropagation:function(){var o=this.originalEvent;this.isPropagationStopped=ee,o&&!this.isSimulated&&o.stopPropagation()},stopImmediatePropagation:function(){var o=this.originalEvent;this.isImmediatePropagationStopped=ee,o&&!this.isSimulated&&o.stopImmediatePropagation(),this.stopPropagation()}},d.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(o){var u=o.button;return o.which==null&&_t.test(o.type)?o.charCode!=null?o.charCode:o.keyCode:!o.which&&u!==void 0&&G.test(o.type)?1&u?1:2&u?3:4&u?2:0:o.which}},d.event.addProp),d.each({focus:"focusin",blur:"focusout"},function(o,u){d.event.special[o]={setup:function(){return Dt(this,o,Pe),!1},trigger:function(){return Dt(this,o),!0},delegateType:u}}),d.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(o,u){d.event.special[o]={delegateType:u,bindType:u,handle:function(m){var _,S=m.relatedTarget,b=m.handleObj;return S&&(S===this||d.contains(this,S))||(m.type=b.origType,_=b.handler.apply(this,arguments),m.type=u),_}}}),d.fn.extend({on:function(o,u,m,_){return yt(this,o,u,m,_)},one:function(o,u,m,_){return yt(this,o,u,m,_,1)},off:function(o,u,m){var _,S;if(o&&o.preventDefault&&o.handleObj)return _=o.handleObj,d(o.delegateTarget).off(_.namespace?_.origType+"."+_.namespace:_.origType,_.selector,_.handler),this;if(typeof o=="object"){for(S in o)this.off(S,u,o[S]);return this}return u!==!1&&typeof u!="function"||(m=u,u=void 0),m===!1&&(m=be),this.each(function(){d.event.remove(this,o,m,u)})}});var Xt=/<script|<style|<link/i,gi=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Dn(o,u){return ie(o,"table")&&ie(u.nodeType!==11?u:u.firstChild,"tr")&&d(o).children("tbody")[0]||o}function pn(o){return o.type=(o.getAttribute("type")!==null)+"/"+o.type,o}function Vs(o){return(o.type||"").slice(0,5)==="true/"?o.type=o.type.slice(5):o.removeAttribute("type"),o}function hs(o,u){var m,_,S,b,A,F;if(u.nodeType===1){if(Ne.hasData(o)&&(F=Ne.get(o).events))for(S in Ne.remove(u,"handle events"),F)for(m=0,_=F[S].length;m<_;m++)d.event.add(u,S,F[S][m]);ke.hasData(o)&&(b=ke.access(o),A=d.extend({},b),ke.set(u,A))}}function Oi(o,u,m,_){u=s(u);var S,b,A,F,k,W,te=0,fe=o.length,Z=fe-1,ne=u[0],Ue=M(ne);if(Ue||1<fe&&typeof ne=="string"&&!x.checkClone&&gi.test(ne))return o.each(function(We){var Ve=o.eq(We);Ue&&(u[0]=ne.call(this,We,Ve.html())),Oi(Ve,u,m,_)});if(fe&&(b=(S=Ke(u,o[0].ownerDocument,!1,o,_)).firstChild,S.childNodes.length===1&&(S=b),b||_)){for(F=(A=d.map(Le(S,"script"),pn)).length;te<fe;te++)k=S,te!==Z&&(k=d.clone(k,!0,!0),F&&d.merge(A,Le(k,"script"))),m.call(o[te],k,te);if(F)for(W=A[A.length-1].ownerDocument,d.map(A,Vs),te=0;te<F;te++)k=A[te],He.test(k.type||"")&&!Ne.access(k,"globalEval")&&d.contains(W,k)&&(k.src&&(k.type||"").toLowerCase()!=="module"?d._evalUrl&&!k.noModule&&d._evalUrl(k.src,{nonce:k.nonce||k.getAttribute("nonce")},W):P(k.textContent.replace(kt,""),k,W))}return o}function Zi(o,u,m){for(var _,S=u?d.filter(u,o):o,b=0;(_=S[b])!=null;b++)m||_.nodeType!==1||d.cleanData(Le(_)),_.parentNode&&(m&&Bt(_)&&ze(Le(_,"script")),_.parentNode.removeChild(_));return o}d.extend({htmlPrefilter:function(o){return o},clone:function(o,u,m){var _,S,b,A,F,k,W,te=o.cloneNode(!0),fe=Bt(o);if(!(x.noCloneChecked||o.nodeType!==1&&o.nodeType!==11||d.isXMLDoc(o)))for(A=Le(te),_=0,S=(b=Le(o)).length;_<S;_++)F=b[_],k=A[_],(W=k.nodeName.toLowerCase())==="input"&&ye.test(F.type)?k.checked=F.checked:W!=="input"&&W!=="textarea"||(k.defaultValue=F.defaultValue);if(u)if(m)for(b=b||Le(o),A=A||Le(te),_=0,S=b.length;_<S;_++)hs(b[_],A[_]);else hs(o,te);return 0<(A=Le(te,"script")).length&&ze(A,!fe&&Le(o,"script")),te},cleanData:function(o){for(var u,m,_,S=d.event.special,b=0;(m=o[b])!==void 0;b++)if(lt(m)){if(u=m[Ne.expando]){if(u.events)for(_ in u.events)S[_]?d.event.remove(m,_):d.removeEvent(m,_,u.handle);m[Ne.expando]=void 0}m[ke.expando]&&(m[ke.expando]=void 0)}}}),d.fn.extend({detach:function(o){return Zi(this,o,!0)},remove:function(o){return Zi(this,o)},text:function(o){return Ce(this,function(u){return u===void 0?d.text(this):this.empty().each(function(){this.nodeType!==1&&this.nodeType!==11&&this.nodeType!==9||(this.textContent=u)})},null,o,arguments.length)},append:function(){return Oi(this,arguments,function(o){this.nodeType!==1&&this.nodeType!==11&&this.nodeType!==9||Dn(this,o).appendChild(o)})},prepend:function(){return Oi(this,arguments,function(o){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var u=Dn(this,o);u.insertBefore(o,u.firstChild)}})},before:function(){return Oi(this,arguments,function(o){this.parentNode&&this.parentNode.insertBefore(o,this)})},after:function(){return Oi(this,arguments,function(o){this.parentNode&&this.parentNode.insertBefore(o,this.nextSibling)})},empty:function(){for(var o,u=0;(o=this[u])!=null;u++)o.nodeType===1&&(d.cleanData(Le(o,!1)),o.textContent="");return this},clone:function(o,u){return o=o!=null&&o,u=u??o,this.map(function(){return d.clone(this,o,u)})},html:function(o){return Ce(this,function(u){var m=this[0]||{},_=0,S=this.length;if(u===void 0&&m.nodeType===1)return m.innerHTML;if(typeof u=="string"&&!Xt.test(u)&&!Oe[(re.exec(u)||["",""])[1].toLowerCase()]){u=d.htmlPrefilter(u);try{for(;_<S;_++)(m=this[_]||{}).nodeType===1&&(d.cleanData(Le(m,!1)),m.innerHTML=u);m=0}catch{}}m&&this.empty().append(u)},null,o,arguments.length)},replaceWith:function(){var o=[];return Oi(this,arguments,function(u){var m=this.parentNode;d.inArray(this,o)<0&&(d.cleanData(Le(this)),m&&m.replaceChild(u,this))},o)}}),d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(o,u){d.fn[o]=function(m){for(var _,S=[],b=d(m),A=b.length-1,F=0;F<=A;F++)_=F===A?this:this.clone(!0),d(b[F])[u](_),a.apply(S,_.get());return this.pushStack(S)}});var yr=new RegExp("^("+ft+")(?!px)[a-z%]+$","i"),_i=function(o){var u=o.ownerDocument.defaultView;return u&&u.opener||(u=r),u.getComputedStyle(o)},ds=function(o,u,m){var _,S,b={};for(S in u)b[S]=o.style[S],o.style[S]=u[S];for(S in _=m.call(o),u)o.style[S]=b[S];return _},Yo=new RegExp(pt.join("|"),"i");function Ji(o,u,m){var _,S,b,A,F=o.style;return(m=m||_i(o))&&((A=m.getPropertyValue(u)||m[u])!==""||Bt(o)||(A=d.style(o,u)),!x.pixelBoxStyles()&&yr.test(A)&&Yo.test(u)&&(_=F.width,S=F.minWidth,b=F.maxWidth,F.minWidth=F.maxWidth=F.width=A,A=m.width,F.width=_,F.minWidth=S,F.maxWidth=b)),A!==void 0?A+"":A}function Ws(o,u){return{get:function(){if(!o())return(this.get=u).apply(this,arguments);delete this.get}}}(function(){function o(){if(W){k.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",W.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Pt.appendChild(k).appendChild(W);var te=r.getComputedStyle(W);m=te.top!=="1%",F=u(te.marginLeft)===12,W.style.right="60%",b=u(te.right)===36,_=u(te.width)===36,W.style.position="absolute",S=u(W.offsetWidth/3)===12,Pt.removeChild(k),W=null}}function u(te){return Math.round(parseFloat(te))}var m,_,S,b,A,F,k=y.createElement("div"),W=y.createElement("div");W.style&&(W.style.backgroundClip="content-box",W.cloneNode(!0).style.backgroundClip="",x.clearCloneStyle=W.style.backgroundClip==="content-box",d.extend(x,{boxSizingReliable:function(){return o(),_},pixelBoxStyles:function(){return o(),b},pixelPosition:function(){return o(),m},reliableMarginLeft:function(){return o(),F},scrollboxSize:function(){return o(),S},reliableTrDimensions:function(){var te,fe,Z,ne;return A==null&&(te=y.createElement("table"),fe=y.createElement("tr"),Z=y.createElement("div"),te.style.cssText="position:absolute;left:-11111px",fe.style.height="1px",Z.style.height="9px",Pt.appendChild(te).appendChild(fe).appendChild(Z),ne=r.getComputedStyle(fe),A=3<parseInt(ne.height),Pt.removeChild(te)),A}}))})();var L=["Webkit","Moz","ms"],$=y.createElement("div").style,ae={};function Y(o){var u=d.cssProps[o]||ae[o];return u||(o in $?o:ae[o]=function(m){for(var _=m[0].toUpperCase()+m.slice(1),S=L.length;S--;)if((m=L[S]+_)in $)return m}(o)||o)}var ce=/^(none|table(?!-c[ea]).+)/,Be=/^--/,qe={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function tt(o,u,m){var _=Je.exec(u);return _?Math.max(0,_[2]-(m||0))+(_[3]||"px"):u}function mt(o,u,m,_,S,b){var A=u==="width"?1:0,F=0,k=0;if(m===(_?"border":"content"))return 0;for(;A<4;A+=2)m==="margin"&&(k+=d.css(o,m+pt[A],!0,S)),_?(m==="content"&&(k-=d.css(o,"padding"+pt[A],!0,S)),m!=="margin"&&(k-=d.css(o,"border"+pt[A]+"Width",!0,S))):(k+=d.css(o,"padding"+pt[A],!0,S),m!=="padding"?k+=d.css(o,"border"+pt[A]+"Width",!0,S):F+=d.css(o,"border"+pt[A]+"Width",!0,S));return!_&&0<=b&&(k+=Math.max(0,Math.ceil(o["offset"+u[0].toUpperCase()+u.slice(1)]-b-k-F-.5))||0),k}function st(o,u,m){var _=_i(o),S=(!x.boxSizingReliable()||m)&&d.css(o,"boxSizing",!1,_)==="border-box",b=S,A=Ji(o,u,_),F="offset"+u[0].toUpperCase()+u.slice(1);if(yr.test(A)){if(!m)return A;A="auto"}return(!x.boxSizingReliable()&&S||!x.reliableTrDimensions()&&ie(o,"tr")||A==="auto"||!parseFloat(A)&&d.css(o,"display",!1,_)==="inline")&&o.getClientRects().length&&(S=d.css(o,"boxSizing",!1,_)==="border-box",(b=F in o)&&(A=o[F])),(A=parseFloat(A)||0)+mt(o,u,m||(S?"border":"content"),b,_,A)+"px"}function Ye(o,u,m,_,S){return new Ye.prototype.init(o,u,m,_,S)}d.extend({cssHooks:{opacity:{get:function(o,u){if(u){var m=Ji(o,"opacity");return m===""?"1":m}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(o,u,m,_){if(o&&o.nodeType!==3&&o.nodeType!==8&&o.style){var S,b,A,F=bt(u),k=Be.test(u),W=o.style;if(k||(u=Y(F)),A=d.cssHooks[u]||d.cssHooks[F],m===void 0)return A&&"get"in A&&(S=A.get(o,!1,_))!==void 0?S:W[u];(b=typeof m)=="string"&&(S=Je.exec(m))&&S[1]&&(m=oe(o,u,S),b="number"),m!=null&&m==m&&(b!=="number"||k||(m+=S&&S[3]||(d.cssNumber[F]?"":"px")),x.clearCloneStyle||m!==""||u.indexOf("background")!==0||(W[u]="inherit"),A&&"set"in A&&(m=A.set(o,m,_))===void 0||(k?W.setProperty(u,m):W[u]=m))}},css:function(o,u,m,_){var S,b,A,F=bt(u);return Be.test(u)||(u=Y(F)),(A=d.cssHooks[u]||d.cssHooks[F])&&"get"in A&&(S=A.get(o,!0,m)),S===void 0&&(S=Ji(o,u,_)),S==="normal"&&u in Qe&&(S=Qe[u]),m===""||m?(b=parseFloat(S),m===!0||isFinite(b)?b||0:S):S}}),d.each(["height","width"],function(o,u){d.cssHooks[u]={get:function(m,_,S){if(_)return!ce.test(d.css(m,"display"))||m.getClientRects().length&&m.getBoundingClientRect().width?st(m,u,S):ds(m,qe,function(){return st(m,u,S)})},set:function(m,_,S){var b,A=_i(m),F=!x.scrollboxSize()&&A.position==="absolute",k=(F||S)&&d.css(m,"boxSizing",!1,A)==="border-box",W=S?mt(m,u,S,k,A):0;return k&&F&&(W-=Math.ceil(m["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(A[u])-mt(m,u,"border",!1,A)-.5)),W&&(b=Je.exec(_))&&(b[3]||"px")!=="px"&&(m.style[u]=_,_=d.css(m,u)),tt(0,_,W)}}}),d.cssHooks.marginLeft=Ws(x.reliableMarginLeft,function(o,u){if(u)return(parseFloat(Ji(o,"marginLeft"))||o.getBoundingClientRect().left-ds(o,{marginLeft:0},function(){return o.getBoundingClientRect().left}))+"px"}),d.each({margin:"",padding:"",border:"Width"},function(o,u){d.cssHooks[o+u]={expand:function(m){for(var _=0,S={},b=typeof m=="string"?m.split(" "):[m];_<4;_++)S[o+pt[_]+u]=b[_]||b[_-2]||b[0];return S}},o!=="margin"&&(d.cssHooks[o+u].set=tt)}),d.fn.extend({css:function(o,u){return Ce(this,function(m,_,S){var b,A,F={},k=0;if(Array.isArray(_)){for(b=_i(m),A=_.length;k<A;k++)F[_[k]]=d.css(m,_[k],!1,b);return F}return S!==void 0?d.style(m,_,S):d.css(m,_)},o,u,1<arguments.length)}}),((d.Tween=Ye).prototype={constructor:Ye,init:function(o,u,m,_,S,b){this.elem=o,this.prop=m,this.easing=S||d.easing._default,this.options=u,this.start=this.now=this.cur(),this.end=_,this.unit=b||(d.cssNumber[m]?"":"px")},cur:function(){var o=Ye.propHooks[this.prop];return o&&o.get?o.get(this):Ye.propHooks._default.get(this)},run:function(o){var u,m=Ye.propHooks[this.prop];return this.options.duration?this.pos=u=d.easing[this.easing](o,this.options.duration*o,0,1,this.options.duration):this.pos=u=o,this.now=(this.end-this.start)*u+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),m&&m.set?m.set(this):Ye.propHooks._default.set(this),this}}).init.prototype=Ye.prototype,(Ye.propHooks={_default:{get:function(o){var u;return o.elem.nodeType!==1||o.elem[o.prop]!=null&&o.elem.style[o.prop]==null?o.elem[o.prop]:(u=d.css(o.elem,o.prop,""))&&u!=="auto"?u:0},set:function(o){d.fx.step[o.prop]?d.fx.step[o.prop](o):o.elem.nodeType!==1||!d.cssHooks[o.prop]&&o.elem.style[Y(o.prop)]==null?o.elem[o.prop]=o.now:d.style(o.elem,o.prop,o.now+o.unit)}}}).scrollTop=Ye.propHooks.scrollLeft={set:function(o){o.elem.nodeType&&o.elem.parentNode&&(o.elem[o.prop]=o.now)}},d.easing={linear:function(o){return o},swing:function(o){return .5-Math.cos(o*Math.PI)/2},_default:"swing"},d.fx=Ye.prototype.init,d.fx.step={};var At,Ft,ln,Gn,jt=/^(?:toggle|show|hide)$/,Mt=/queueHooks$/;function Qi(){Ft&&(y.hidden===!1&&r.requestAnimationFrame?r.requestAnimationFrame(Qi):r.setTimeout(Qi,d.fx.interval),d.fx.tick())}function Yt(){return r.setTimeout(function(){At=void 0}),At=Date.now()}function Vn(o,u){var m,_=0,S={height:o};for(u=u?1:0;_<4;_+=2-u)S["margin"+(m=pt[_])]=S["padding"+m]=o;return u&&(S.opacity=S.width=o),S}function fs(o,u,m){for(var _,S=(mn.tweeners[u]||[]).concat(mn.tweeners["*"]),b=0,A=S.length;b<A;b++)if(_=S[b].call(m,u,o))return _}function mn(o,u,m){var _,S,b=0,A=mn.prefilters.length,F=d.Deferred().always(function(){delete k.elem}),k=function(){if(S)return!1;for(var fe=At||Yt(),Z=Math.max(0,W.startTime+W.duration-fe),ne=1-(Z/W.duration||0),Ue=0,We=W.tweens.length;Ue<We;Ue++)W.tweens[Ue].run(ne);return F.notifyWith(o,[W,ne,Z]),ne<1&&We?Z:(We||F.notifyWith(o,[W,1,0]),F.resolveWith(o,[W]),!1)},W=F.promise({elem:o,props:d.extend({},u),opts:d.extend(!0,{specialEasing:{},easing:d.easing._default},m),originalProperties:u,originalOptions:m,startTime:At||Yt(),duration:m.duration,tweens:[],createTween:function(fe,Z){var ne=d.Tween(o,W.opts,fe,Z,W.opts.specialEasing[fe]||W.opts.easing);return W.tweens.push(ne),ne},stop:function(fe){var Z=0,ne=fe?W.tweens.length:0;if(S)return this;for(S=!0;Z<ne;Z++)W.tweens[Z].run(1);return fe?(F.notifyWith(o,[W,1,0]),F.resolveWith(o,[W,fe])):F.rejectWith(o,[W,fe]),this}}),te=W.props;for(!function(fe,Z){var ne,Ue,We,Ve,Ht;for(ne in fe)if(We=Z[Ue=bt(ne)],Ve=fe[ne],Array.isArray(Ve)&&(We=Ve[1],Ve=fe[ne]=Ve[0]),ne!==Ue&&(fe[Ue]=Ve,delete fe[ne]),(Ht=d.cssHooks[Ue])&&"expand"in Ht)for(ne in Ve=Ht.expand(Ve),delete fe[Ue],Ve)ne in fe||(fe[ne]=Ve[ne],Z[ne]=We);else Z[Ue]=We}(te,W.opts.specialEasing);b<A;b++)if(_=mn.prefilters[b].call(W,o,te,W.opts))return M(_.stop)&&(d._queueHooks(W.elem,W.opts.queue).stop=_.stop.bind(_)),_;return d.map(te,fs,W),M(W.opts.start)&&W.opts.start.call(o,W),W.progress(W.opts.progress).done(W.opts.done,W.opts.complete).fail(W.opts.fail).always(W.opts.always),d.fx.timer(d.extend(k,{elem:o,anim:W,queue:W.opts.queue})),W}d.Animation=d.extend(mn,{tweeners:{"*":[function(o,u){var m=this.createTween(o,u);return oe(m.elem,o,Je.exec(u),m),m}]},tweener:function(o,u){M(o)?(u=o,o=["*"]):o=o.match(de);for(var m,_=0,S=o.length;_<S;_++)m=o[_],mn.tweeners[m]=mn.tweeners[m]||[],mn.tweeners[m].unshift(u)},prefilters:[function(o,u,m){var _,S,b,A,F,k,W,te,fe="width"in u||"height"in u,Z=this,ne={},Ue=o.style,We=o.nodeType&&C(o),Ve=Ne.get(o,"fxshow");for(_ in m.queue||((A=d._queueHooks(o,"fx")).unqueued==null&&(A.unqueued=0,F=A.empty.fire,A.empty.fire=function(){A.unqueued||F()}),A.unqueued++,Z.always(function(){Z.always(function(){A.unqueued--,d.queue(o,"fx").length||A.empty.fire()})})),u)if(S=u[_],jt.test(S)){if(delete u[_],b=b||S==="toggle",S===(We?"hide":"show")){if(S!=="show"||!Ve||Ve[_]===void 0)continue;We=!0}ne[_]=Ve&&Ve[_]||d.style(o,_)}if((k=!d.isEmptyObject(u))||!d.isEmptyObject(ne))for(_ in fe&&o.nodeType===1&&(m.overflow=[Ue.overflow,Ue.overflowX,Ue.overflowY],(W=Ve&&Ve.display)==null&&(W=Ne.get(o,"display")),(te=d.css(o,"display"))==="none"&&(W?te=W:(Ee([o],!0),W=o.style.display||W,te=d.css(o,"display"),Ee([o]))),(te==="inline"||te==="inline-block"&&W!=null)&&d.css(o,"float")==="none"&&(k||(Z.done(function(){Ue.display=W}),W==null&&(te=Ue.display,W=te==="none"?"":te)),Ue.display="inline-block")),m.overflow&&(Ue.overflow="hidden",Z.always(function(){Ue.overflow=m.overflow[0],Ue.overflowX=m.overflow[1],Ue.overflowY=m.overflow[2]})),k=!1,ne)k||(Ve?"hidden"in Ve&&(We=Ve.hidden):Ve=Ne.access(o,"fxshow",{display:W}),b&&(Ve.hidden=!We),We&&Ee([o],!0),Z.done(function(){for(_ in We||Ee([o]),Ne.remove(o,"fxshow"),ne)d.style(o,_,ne[_])})),k=fs(We?Ve[_]:0,_,Z),_ in Ve||(Ve[_]=k.start,We&&(k.end=k.start,k.start=0))}],prefilter:function(o,u){u?mn.prefilters.unshift(o):mn.prefilters.push(o)}}),d.speed=function(o,u,m){var _=o&&typeof o=="object"?d.extend({},o):{complete:m||!m&&u||M(o)&&o,duration:o,easing:m&&u||u&&!M(u)&&u};return d.fx.off?_.duration=0:typeof _.duration!="number"&&(_.duration in d.fx.speeds?_.duration=d.fx.speeds[_.duration]:_.duration=d.fx.speeds._default),_.queue!=null&&_.queue!==!0||(_.queue="fx"),_.old=_.complete,_.complete=function(){M(_.old)&&_.old.call(this),_.queue&&d.dequeue(this,_.queue)},_},d.fn.extend({fadeTo:function(o,u,m,_){return this.filter(C).css("opacity",0).show().end().animate({opacity:u},o,m,_)},animate:function(o,u,m,_){var S=d.isEmptyObject(o),b=d.speed(u,m,_),A=function(){var F=mn(this,d.extend({},o),b);(S||Ne.get(this,"finish"))&&F.stop(!0)};return A.finish=A,S||b.queue===!1?this.each(A):this.queue(b.queue,A)},stop:function(o,u,m){var _=function(S){var b=S.stop;delete S.stop,b(m)};return typeof o!="string"&&(m=u,u=o,o=void 0),u&&this.queue(o||"fx",[]),this.each(function(){var S=!0,b=o!=null&&o+"queueHooks",A=d.timers,F=Ne.get(this);if(b)F[b]&&F[b].stop&&_(F[b]);else for(b in F)F[b]&&F[b].stop&&Mt.test(b)&&_(F[b]);for(b=A.length;b--;)A[b].elem!==this||o!=null&&A[b].queue!==o||(A[b].anim.stop(m),S=!1,A.splice(b,1));!S&&m||d.dequeue(this,o)})},finish:function(o){return o!==!1&&(o=o||"fx"),this.each(function(){var u,m=Ne.get(this),_=m[o+"queue"],S=m[o+"queueHooks"],b=d.timers,A=_?_.length:0;for(m.finish=!0,d.queue(this,o,[]),S&&S.stop&&S.stop.call(this,!0),u=b.length;u--;)b[u].elem===this&&b[u].queue===o&&(b[u].anim.stop(!0),b.splice(u,1));for(u=0;u<A;u++)_[u]&&_[u].finish&&_[u].finish.call(this);delete m.finish})}}),d.each(["toggle","show","hide"],function(o,u){var m=d.fn[u];d.fn[u]=function(_,S,b){return _==null||typeof _=="boolean"?m.apply(this,arguments):this.animate(Vn(u,!0),_,S,b)}}),d.each({slideDown:Vn("show"),slideUp:Vn("hide"),slideToggle:Vn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(o,u){d.fn[o]=function(m,_,S){return this.animate(u,m,_,S)}}),d.timers=[],d.fx.tick=function(){var o,u=0,m=d.timers;for(At=Date.now();u<m.length;u++)(o=m[u])()||m[u]!==o||m.splice(u--,1);m.length||d.fx.stop(),At=void 0},d.fx.timer=function(o){d.timers.push(o),d.fx.start()},d.fx.interval=13,d.fx.start=function(){Ft||(Ft=!0,Qi())},d.fx.stop=function(){Ft=null},d.fx.speeds={slow:600,fast:200,_default:400},d.fn.delay=function(o,u){return o=d.fx&&d.fx.speeds[o]||o,u=u||"fx",this.queue(u,function(m,_){var S=r.setTimeout(m,o);_.stop=function(){r.clearTimeout(S)}})},ln=y.createElement("input"),Gn=y.createElement("select").appendChild(y.createElement("option")),ln.type="checkbox",x.checkOn=ln.value!=="",x.optSelected=Gn.selected,(ln=y.createElement("input")).value="t",ln.type="radio",x.radioValue=ln.value==="t";var Mr,Kt=d.expr.attrHandle;d.fn.extend({attr:function(o,u){return Ce(this,d.attr,o,u,1<arguments.length)},removeAttr:function(o){return this.each(function(){d.removeAttr(this,o)})}}),d.extend({attr:function(o,u,m){var _,S,b=o.nodeType;if(b!==3&&b!==8&&b!==2)return typeof o.getAttribute>"u"?d.prop(o,u,m):(b===1&&d.isXMLDoc(o)||(S=d.attrHooks[u.toLowerCase()]||(d.expr.match.bool.test(u)?Mr:void 0)),m!==void 0?m===null?void d.removeAttr(o,u):S&&"set"in S&&(_=S.set(o,m,u))!==void 0?_:(o.setAttribute(u,m+""),m):S&&"get"in S&&(_=S.get(o,u))!==null?_:(_=d.find.attr(o,u))==null?void 0:_)},attrHooks:{type:{set:function(o,u){if(!x.radioValue&&u==="radio"&&ie(o,"input")){var m=o.value;return o.setAttribute("type",u),m&&(o.value=m),u}}}},removeAttr:function(o,u){var m,_=0,S=u&&u.match(de);if(S&&o.nodeType===1)for(;m=S[_++];)o.removeAttribute(m)}}),Mr={set:function(o,u,m){return u===!1?d.removeAttr(o,m):o.setAttribute(m,m),m}},d.each(d.expr.match.bool.source.match(/\w+/g),function(o,u){var m=Kt[u]||d.find.attr;Kt[u]=function(_,S,b){var A,F,k=S.toLowerCase();return b||(F=Kt[k],Kt[k]=A,A=m(_,S,b)!=null?k:null,Kt[k]=F),A}});var vi=/^(?:input|select|textarea|button)$/i,ps=/^(?:a|area)$/i;function $t(o){return(o.match(de)||[]).join(" ")}function Zn(o){return o.getAttribute&&o.getAttribute("class")||""}function ms(o){return Array.isArray(o)?o:typeof o=="string"&&o.match(de)||[]}d.fn.extend({prop:function(o,u){return Ce(this,d.prop,o,u,1<arguments.length)},removeProp:function(o){return this.each(function(){delete this[d.propFix[o]||o]})}}),d.extend({prop:function(o,u,m){var _,S,b=o.nodeType;if(b!==3&&b!==8&&b!==2)return b===1&&d.isXMLDoc(o)||(u=d.propFix[u]||u,S=d.propHooks[u]),m!==void 0?S&&"set"in S&&(_=S.set(o,m,u))!==void 0?_:o[u]=m:S&&"get"in S&&(_=S.get(o,u))!==null?_:o[u]},propHooks:{tabIndex:{get:function(o){var u=d.find.attr(o,"tabindex");return u?parseInt(u,10):vi.test(o.nodeName)||ps.test(o.nodeName)&&o.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),x.optSelected||(d.propHooks.selected={get:function(o){var u=o.parentNode;return u&&u.parentNode&&u.parentNode.selectedIndex,null},set:function(o){var u=o.parentNode;u&&(u.selectedIndex,u.parentNode&&u.parentNode.selectedIndex)}}),d.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){d.propFix[this.toLowerCase()]=this}),d.fn.extend({addClass:function(o){var u,m,_,S,b,A,F,k=0;if(M(o))return this.each(function(W){d(this).addClass(o.call(this,W,Zn(this)))});if((u=ms(o)).length){for(;m=this[k++];)if(S=Zn(m),_=m.nodeType===1&&" "+$t(S)+" "){for(A=0;b=u[A++];)_.indexOf(" "+b+" ")<0&&(_+=b+" ");S!==(F=$t(_))&&m.setAttribute("class",F)}}return this},removeClass:function(o){var u,m,_,S,b,A,F,k=0;if(M(o))return this.each(function(W){d(this).removeClass(o.call(this,W,Zn(this)))});if(!arguments.length)return this.attr("class","");if((u=ms(o)).length){for(;m=this[k++];)if(S=Zn(m),_=m.nodeType===1&&" "+$t(S)+" "){for(A=0;b=u[A++];)for(;-1<_.indexOf(" "+b+" ");)_=_.replace(" "+b+" "," ");S!==(F=$t(_))&&m.setAttribute("class",F)}}return this},toggleClass:function(o,u){var m=typeof o,_=m==="string"||Array.isArray(o);return typeof u=="boolean"&&_?u?this.addClass(o):this.removeClass(o):M(o)?this.each(function(S){d(this).toggleClass(o.call(this,S,Zn(this),u),u)}):this.each(function(){var S,b,A,F;if(_)for(b=0,A=d(this),F=ms(o);S=F[b++];)A.hasClass(S)?A.removeClass(S):A.addClass(S);else o!==void 0&&m!=="boolean"||((S=Zn(this))&&Ne.set(this,"__className__",S),this.setAttribute&&this.setAttribute("class",S||o===!1?"":Ne.get(this,"__className__")||""))})},hasClass:function(o){var u,m,_=0;for(u=" "+o+" ";m=this[_++];)if(m.nodeType===1&&-1<(" "+$t(Zn(m))+" ").indexOf(u))return!0;return!1}});var Xs=/\r/g;d.fn.extend({val:function(o){var u,m,_,S=this[0];return arguments.length?(_=M(o),this.each(function(b){var A;this.nodeType===1&&((A=_?o.call(this,b,d(this).val()):o)==null?A="":typeof A=="number"?A+="":Array.isArray(A)&&(A=d.map(A,function(F){return F==null?"":F+""})),(u=d.valHooks[this.type]||d.valHooks[this.nodeName.toLowerCase()])&&"set"in u&&u.set(this,A,"value")!==void 0||(this.value=A))})):S?(u=d.valHooks[S.type]||d.valHooks[S.nodeName.toLowerCase()])&&"get"in u&&(m=u.get(S,"value"))!==void 0?m:typeof(m=S.value)=="string"?m.replace(Xs,""):m??"":void 0}}),d.extend({valHooks:{option:{get:function(o){var u=d.find.attr(o,"value");return u??$t(d.text(o))}},select:{get:function(o){var u,m,_,S=o.options,b=o.selectedIndex,A=o.type==="select-one",F=A?null:[],k=A?b+1:S.length;for(_=b<0?k:A?b:0;_<k;_++)if(((m=S[_]).selected||_===b)&&!m.disabled&&(!m.parentNode.disabled||!ie(m.parentNode,"optgroup"))){if(u=d(m).val(),A)return u;F.push(u)}return F},set:function(o,u){for(var m,_,S=o.options,b=d.makeArray(u),A=S.length;A--;)((_=S[A]).selected=-1<d.inArray(d.valHooks.option.get(_),b))&&(m=!0);return m||(o.selectedIndex=-1),b}}}}),d.each(["radio","checkbox"],function(){d.valHooks[this]={set:function(o,u){if(Array.isArray(u))return o.checked=-1<d.inArray(d(o).val(),u)}},x.checkOn||(d.valHooks[this].get=function(o){return o.getAttribute("value")===null?"on":o.value})}),x.focusin="onfocusin"in r;var wc=/^(?:focusinfocus|focusoutblur)$/,Rc=function(o){o.stopPropagation()};d.extend(d.event,{trigger:function(o,u,m,_){var S,b,A,F,k,W,te,fe,Z=[m||y],ne=f.call(o,"type")?o.type:o,Ue=f.call(o,"namespace")?o.namespace.split("."):[];if(b=fe=A=m=m||y,m.nodeType!==3&&m.nodeType!==8&&!wc.test(ne+d.event.triggered)&&(-1<ne.indexOf(".")&&(ne=(Ue=ne.split(".")).shift(),Ue.sort()),k=ne.indexOf(":")<0&&"on"+ne,(o=o[d.expando]?o:new d.Event(ne,typeof o=="object"&&o)).isTrigger=_?2:3,o.namespace=Ue.join("."),o.rnamespace=o.namespace?new RegExp("(^|\\.)"+Ue.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,o.result=void 0,o.target||(o.target=m),u=u==null?[o]:d.makeArray(u,[o]),te=d.event.special[ne]||{},_||!te.trigger||te.trigger.apply(m,u)!==!1)){if(!_&&!te.noBubble&&!E(m)){for(F=te.delegateType||ne,wc.test(F+ne)||(b=b.parentNode);b;b=b.parentNode)Z.push(b),A=b;A===(m.ownerDocument||y)&&Z.push(A.defaultView||A.parentWindow||r)}for(S=0;(b=Z[S++])&&!o.isPropagationStopped();)fe=b,o.type=1<S?F:te.bindType||ne,(W=(Ne.get(b,"events")||Object.create(null))[o.type]&&Ne.get(b,"handle"))&&W.apply(b,u),(W=k&&b[k])&&W.apply&&lt(b)&&(o.result=W.apply(b,u),o.result===!1&&o.preventDefault());return o.type=ne,_||o.isDefaultPrevented()||te._default&&te._default.apply(Z.pop(),u)!==!1||!lt(m)||k&&M(m[ne])&&!E(m)&&((A=m[k])&&(m[k]=null),d.event.triggered=ne,o.isPropagationStopped()&&fe.addEventListener(ne,Rc),m[ne](),o.isPropagationStopped()&&fe.removeEventListener(ne,Rc),d.event.triggered=void 0,A&&(m[k]=A)),o.result}},simulate:function(o,u,m){var _=d.extend(new d.Event,m,{type:o,isSimulated:!0});d.event.trigger(_,null,u)}}),d.fn.extend({trigger:function(o,u){return this.each(function(){d.event.trigger(o,u,this)})},triggerHandler:function(o,u){var m=this[0];if(m)return d.event.trigger(o,u,m,!0)}}),x.focusin||d.each({focus:"focusin",blur:"focusout"},function(o,u){var m=function(_){d.event.simulate(u,_.target,d.event.fix(_))};d.event.special[u]={setup:function(){var _=this.ownerDocument||this.document||this,S=Ne.access(_,u);S||_.addEventListener(o,m,!0),Ne.access(_,u,(S||0)+1)},teardown:function(){var _=this.ownerDocument||this.document||this,S=Ne.access(_,u)-1;S?Ne.access(_,u,S):(_.removeEventListener(o,m,!0),Ne.remove(_,u))}}});var gs=r.location,Cc={guid:Date.now()},Ko=/\?/;d.parseXML=function(o){var u;if(!o||typeof o!="string")return null;try{u=new r.DOMParser().parseFromString(o,"text/xml")}catch{u=void 0}return u&&!u.getElementsByTagName("parsererror").length||d.error("Invalid XML: "+o),u};var Uh=/\[\]$/,Lc=/\r?\n/g,Oh=/^(?:submit|button|image|reset|file)$/i,Fh=/^(?:input|select|textarea|keygen)/i;function $o(o,u,m,_){var S;if(Array.isArray(u))d.each(u,function(b,A){m||Uh.test(o)?_(o,A):$o(o+"["+(typeof A=="object"&&A!=null?b:"")+"]",A,m,_)});else if(m||T(u)!=="object")_(o,u);else for(S in u)$o(o+"["+S+"]",u[S],m,_)}d.param=function(o,u){var m,_=[],S=function(b,A){var F=M(A)?A():A;_[_.length]=encodeURIComponent(b)+"="+encodeURIComponent(F??"")};if(o==null)return"";if(Array.isArray(o)||o.jquery&&!d.isPlainObject(o))d.each(o,function(){S(this.name,this.value)});else for(m in o)$o(m,o[m],u,S);return _.join("&")},d.fn.extend({serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var o=d.prop(this,"elements");return o?d.makeArray(o):this}).filter(function(){var o=this.type;return this.name&&!d(this).is(":disabled")&&Fh.test(this.nodeName)&&!Oh.test(o)&&(this.checked||!ye.test(o))}).map(function(o,u){var m=d(this).val();return m==null?null:Array.isArray(m)?d.map(m,function(_){return{name:u.name,value:_.replace(Lc,`\r
`)}}):{name:u.name,value:m.replace(Lc,`\r
`)}}).get()}});var Bh=/%20/g,kh=/#.*$/,Hh=/([?&])_=[^&]*/,zh=/^(.*?):[ \t]*([^\r\n]*)$/gm,Gh=/^(?:GET|HEAD)$/,Vh=/^\/\//,Pc={},Zo={},Dc="*/".concat("*"),Jo=y.createElement("a");function Ic(o){return function(u,m){typeof u!="string"&&(m=u,u="*");var _,S=0,b=u.toLowerCase().match(de)||[];if(M(m))for(;_=b[S++];)_[0]==="+"?(_=_.slice(1)||"*",(o[_]=o[_]||[]).unshift(m)):(o[_]=o[_]||[]).push(m)}}function Nc(o,u,m,_){var S={},b=o===Zo;function A(F){var k;return S[F]=!0,d.each(o[F]||[],function(W,te){var fe=te(u,m,_);return typeof fe!="string"||b||S[fe]?b?!(k=fe):void 0:(u.dataTypes.unshift(fe),A(fe),!1)}),k}return A(u.dataTypes[0])||!S["*"]&&A("*")}function Qo(o,u){var m,_,S=d.ajaxSettings.flatOptions||{};for(m in u)u[m]!==void 0&&((S[m]?o:_||(_={}))[m]=u[m]);return _&&d.extend(!0,o,_),o}Jo.href=gs.href,d.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:gs.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(gs.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":d.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(o,u){return u?Qo(Qo(o,d.ajaxSettings),u):Qo(d.ajaxSettings,o)},ajaxPrefilter:Ic(Pc),ajaxTransport:Ic(Zo),ajax:function(o,u){typeof o=="object"&&(u=o,o=void 0),u=u||{};var m,_,S,b,A,F,k,W,te,fe,Z=d.ajaxSetup({},u),ne=Z.context||Z,Ue=Z.context&&(ne.nodeType||ne.jquery)?d(ne):d.event,We=d.Deferred(),Ve=d.Callbacks("once memory"),Ht=Z.statusCode||{},nn={},In={},Lt="canceled",ot={readyState:0,getResponseHeader:function(Tt){var zt;if(k){if(!b)for(b={};zt=zh.exec(S);)b[zt[1].toLowerCase()+" "]=(b[zt[1].toLowerCase()+" "]||[]).concat(zt[2]);zt=b[Tt.toLowerCase()+" "]}return zt==null?null:zt.join(", ")},getAllResponseHeaders:function(){return k?S:null},setRequestHeader:function(Tt,zt){return k==null&&(Tt=In[Tt.toLowerCase()]=In[Tt.toLowerCase()]||Tt,nn[Tt]=zt),this},overrideMimeType:function(Tt){return k==null&&(Z.mimeType=Tt),this},statusCode:function(Tt){var zt;if(Tt)if(k)ot.always(Tt[ot.status]);else for(zt in Tt)Ht[zt]=[Ht[zt],Tt[zt]];return this},abort:function(Tt){var zt=Tt||Lt;return m&&m.abort(zt),An(0,zt),this}};if(We.promise(ot),Z.url=((o||Z.url||gs.href)+"").replace(Vh,gs.protocol+"//"),Z.type=u.method||u.type||Z.method||Z.type,Z.dataTypes=(Z.dataType||"*").toLowerCase().match(de)||[""],Z.crossDomain==null){F=y.createElement("a");try{F.href=Z.url,F.href=F.href,Z.crossDomain=Jo.protocol+"//"+Jo.host!=F.protocol+"//"+F.host}catch{Z.crossDomain=!0}}if(Z.data&&Z.processData&&typeof Z.data!="string"&&(Z.data=d.param(Z.data,Z.traditional)),Nc(Pc,Z,u,ot),k)return ot;for(te in(W=d.event&&Z.global)&&d.active++==0&&d.event.trigger("ajaxStart"),Z.type=Z.type.toUpperCase(),Z.hasContent=!Gh.test(Z.type),_=Z.url.replace(kh,""),Z.hasContent?Z.data&&Z.processData&&(Z.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(Z.data=Z.data.replace(Bh,"+")):(fe=Z.url.slice(_.length),Z.data&&(Z.processData||typeof Z.data=="string")&&(_+=(Ko.test(_)?"&":"?")+Z.data,delete Z.data),Z.cache===!1&&(_=_.replace(Hh,"$1"),fe=(Ko.test(_)?"&":"?")+"_="+Cc.guid+++fe),Z.url=_+fe),Z.ifModified&&(d.lastModified[_]&&ot.setRequestHeader("If-Modified-Since",d.lastModified[_]),d.etag[_]&&ot.setRequestHeader("If-None-Match",d.etag[_])),(Z.data&&Z.hasContent&&Z.contentType!==!1||u.contentType)&&ot.setRequestHeader("Content-Type",Z.contentType),ot.setRequestHeader("Accept",Z.dataTypes[0]&&Z.accepts[Z.dataTypes[0]]?Z.accepts[Z.dataTypes[0]]+(Z.dataTypes[0]!=="*"?", "+Dc+"; q=0.01":""):Z.accepts["*"]),Z.headers)ot.setRequestHeader(te,Z.headers[te]);if(Z.beforeSend&&(Z.beforeSend.call(ne,ot,Z)===!1||k))return ot.abort();if(Lt="abort",Ve.add(Z.complete),ot.done(Z.success),ot.fail(Z.error),m=Nc(Zo,Z,u,ot)){if(ot.readyState=1,W&&Ue.trigger("ajaxSend",[ot,Z]),k)return ot;Z.async&&0<Z.timeout&&(A=r.setTimeout(function(){ot.abort("timeout")},Z.timeout));try{k=!1,m.send(nn,An)}catch(Tt){if(k)throw Tt;An(-1,Tt)}}else An(-1,"No Transport");function An(Tt,zt,vs,js){var Nn,er,Sr,wn,Er,Wn=zt;k||(k=!0,A&&r.clearTimeout(A),m=void 0,S=js||"",ot.readyState=0<Tt?4:0,Nn=200<=Tt&&Tt<300||Tt===304,vs&&(wn=function(Gt,Un,On){for(var ai,ct,wt,rn,Fn=Gt.contents,Jt=Gt.dataTypes;Jt[0]==="*";)Jt.shift(),ai===void 0&&(ai=Gt.mimeType||Un.getResponseHeader("Content-Type"));if(ai){for(ct in Fn)if(Fn[ct]&&Fn[ct].test(ai)){Jt.unshift(ct);break}}if(Jt[0]in On)wt=Jt[0];else{for(ct in On){if(!Jt[0]||Gt.converters[ct+" "+Jt[0]]){wt=ct;break}rn||(rn=ct)}wt=wt||rn}if(wt)return wt!==Jt[0]&&Jt.unshift(wt),On[wt]}(Z,ot,vs)),!Nn&&-1<d.inArray("script",Z.dataTypes)&&(Z.converters["text script"]=function(){}),wn=function(Gt,Un,On,ai){var ct,wt,rn,Fn,Jt,Bn={},Tr=Gt.dataTypes.slice();if(Tr[1])for(rn in Gt.converters)Bn[rn.toLowerCase()]=Gt.converters[rn];for(wt=Tr.shift();wt;)if(Gt.responseFields[wt]&&(On[Gt.responseFields[wt]]=Un),!Jt&&ai&&Gt.dataFilter&&(Un=Gt.dataFilter(Un,Gt.dataType)),Jt=wt,wt=Tr.shift()){if(wt==="*")wt=Jt;else if(Jt!=="*"&&Jt!==wt){if(!(rn=Bn[Jt+" "+wt]||Bn["* "+wt])){for(ct in Bn)if((Fn=ct.split(" "))[1]===wt&&(rn=Bn[Jt+" "+Fn[0]]||Bn["* "+Fn[0]])){rn===!0?rn=Bn[ct]:Bn[ct]!==!0&&(wt=Fn[0],Tr.unshift(Fn[1]));break}}if(rn!==!0)if(rn&&Gt.throws)Un=rn(Un);else try{Un=rn(Un)}catch(qs){return{state:"parsererror",error:rn?qs:"No conversion from "+Jt+" to "+wt}}}}return{state:"success",data:Un}}(Z,wn,ot,Nn),Nn?(Z.ifModified&&((Er=ot.getResponseHeader("Last-Modified"))&&(d.lastModified[_]=Er),(Er=ot.getResponseHeader("etag"))&&(d.etag[_]=Er)),Tt===204||Z.type==="HEAD"?Wn="nocontent":Tt===304?Wn="notmodified":(Wn=wn.state,er=wn.data,Nn=!(Sr=wn.error))):(Sr=Wn,!Tt&&Wn||(Wn="error",Tt<0&&(Tt=0))),ot.status=Tt,ot.statusText=(zt||Wn)+"",Nn?We.resolveWith(ne,[er,Wn,ot]):We.rejectWith(ne,[ot,Wn,Sr]),ot.statusCode(Ht),Ht=void 0,W&&Ue.trigger(Nn?"ajaxSuccess":"ajaxError",[ot,Z,Nn?er:Sr]),Ve.fireWith(ne,[ot,Wn]),W&&(Ue.trigger("ajaxComplete",[ot,Z]),--d.active||d.event.trigger("ajaxStop")))}return ot},getJSON:function(o,u,m){return d.get(o,u,m,"json")},getScript:function(o,u){return d.get(o,void 0,u,"script")}}),d.each(["get","post"],function(o,u){d[u]=function(m,_,S,b){return M(_)&&(b=b||S,S=_,_=void 0),d.ajax(d.extend({url:m,type:u,dataType:b,data:_,success:S},d.isPlainObject(m)&&m))}}),d.ajaxPrefilter(function(o){var u;for(u in o.headers)u.toLowerCase()==="content-type"&&(o.contentType=o.headers[u]||"")}),d._evalUrl=function(o,u,m){return d.ajax({url:o,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(_){d.globalEval(_,u,m)}})},d.fn.extend({wrapAll:function(o){var u;return this[0]&&(M(o)&&(o=o.call(this[0])),u=d(o,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&u.insertBefore(this[0]),u.map(function(){for(var m=this;m.firstElementChild;)m=m.firstElementChild;return m}).append(this)),this},wrapInner:function(o){return M(o)?this.each(function(u){d(this).wrapInner(o.call(this,u))}):this.each(function(){var u=d(this),m=u.contents();m.length?m.wrapAll(o):u.append(o)})},wrap:function(o){var u=M(o);return this.each(function(m){d(this).wrapAll(u?o.call(this,m):o)})},unwrap:function(o){return this.parent(o).not("body").each(function(){d(this).replaceWith(this.childNodes)}),this}}),d.expr.pseudos.hidden=function(o){return!d.expr.pseudos.visible(o)},d.expr.pseudos.visible=function(o){return!!(o.offsetWidth||o.offsetHeight||o.getClientRects().length)},d.ajaxSettings.xhr=function(){try{return new r.XMLHttpRequest}catch{}};var Wh={0:200,1223:204},_s=d.ajaxSettings.xhr();x.cors=!!_s&&"withCredentials"in _s,x.ajax=_s=!!_s,d.ajaxTransport(function(o){var u,m;if(x.cors||_s&&!o.crossDomain)return{send:function(_,S){var b,A=o.xhr();if(A.open(o.type,o.url,o.async,o.username,o.password),o.xhrFields)for(b in o.xhrFields)A[b]=o.xhrFields[b];for(b in o.mimeType&&A.overrideMimeType&&A.overrideMimeType(o.mimeType),o.crossDomain||_["X-Requested-With"]||(_["X-Requested-With"]="XMLHttpRequest"),_)A.setRequestHeader(b,_[b]);u=function(F){return function(){u&&(u=m=A.onload=A.onerror=A.onabort=A.ontimeout=A.onreadystatechange=null,F==="abort"?A.abort():F==="error"?typeof A.status!="number"?S(0,"error"):S(A.status,A.statusText):S(Wh[A.status]||A.status,A.statusText,(A.responseType||"text")!=="text"||typeof A.responseText!="string"?{binary:A.response}:{text:A.responseText},A.getAllResponseHeaders()))}},A.onload=u(),m=A.onerror=A.ontimeout=u("error"),A.onabort!==void 0?A.onabort=m:A.onreadystatechange=function(){A.readyState===4&&r.setTimeout(function(){u&&m()})},u=u("abort");try{A.send(o.hasContent&&o.data||null)}catch(F){if(u)throw F}},abort:function(){u&&u()}}}),d.ajaxPrefilter(function(o){o.crossDomain&&(o.contents.script=!1)}),d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(o){return d.globalEval(o),o}}}),d.ajaxPrefilter("script",function(o){o.cache===void 0&&(o.cache=!1),o.crossDomain&&(o.type="GET")}),d.ajaxTransport("script",function(o){var u,m;if(o.crossDomain||o.scriptAttrs)return{send:function(_,S){u=d("<script>").attr(o.scriptAttrs||{}).prop({charset:o.scriptCharset,src:o.url}).on("load error",m=function(b){u.remove(),m=null,b&&S(b.type==="error"?404:200,b.type)}),y.head.appendChild(u[0])},abort:function(){m&&m()}}});var Uc,Oc=[],ea=/(=)\?(?=&|$)|\?\?/;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var o=Oc.pop()||d.expando+"_"+Cc.guid++;return this[o]=!0,o}}),d.ajaxPrefilter("json jsonp",function(o,u,m){var _,S,b,A=o.jsonp!==!1&&(ea.test(o.url)?"url":typeof o.data=="string"&&(o.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&ea.test(o.data)&&"data");if(A||o.dataTypes[0]==="jsonp")return _=o.jsonpCallback=M(o.jsonpCallback)?o.jsonpCallback():o.jsonpCallback,A?o[A]=o[A].replace(ea,"$1"+_):o.jsonp!==!1&&(o.url+=(Ko.test(o.url)?"&":"?")+o.jsonp+"="+_),o.converters["script json"]=function(){return b||d.error(_+" was not called"),b[0]},o.dataTypes[0]="json",S=r[_],r[_]=function(){b=arguments},m.always(function(){S===void 0?d(r).removeProp(_):r[_]=S,o[_]&&(o.jsonpCallback=u.jsonpCallback,Oc.push(_)),b&&M(S)&&S(b[0]),b=S=void 0}),"script"}),x.createHTMLDocument=((Uc=y.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",Uc.childNodes.length===2),d.parseHTML=function(o,u,m){return typeof o!="string"?[]:(typeof u=="boolean"&&(m=u,u=!1),u||(x.createHTMLDocument?((_=(u=y.implementation.createHTMLDocument("")).createElement("base")).href=y.location.href,u.head.appendChild(_)):u=y),b=!m&&[],(S=pe.exec(o))?[u.createElement(S[1])]:(S=Ke([o],u,b),b&&b.length&&d(b).remove(),d.merge([],S.childNodes)));var _,S,b},d.fn.load=function(o,u,m){var _,S,b,A=this,F=o.indexOf(" ");return-1<F&&(_=$t(o.slice(F)),o=o.slice(0,F)),M(u)?(m=u,u=void 0):u&&typeof u=="object"&&(S="POST"),0<A.length&&d.ajax({url:o,type:S||"GET",dataType:"html",data:u}).done(function(k){b=arguments,A.html(_?d("<div>").append(d.parseHTML(k)).find(_):k)}).always(m&&function(k,W){A.each(function(){m.apply(this,b||[k.responseText,W,k])})}),this},d.expr.pseudos.animated=function(o){return d.grep(d.timers,function(u){return o===u.elem}).length},d.offset={setOffset:function(o,u,m){var _,S,b,A,F,k,W=d.css(o,"position"),te=d(o),fe={};W==="static"&&(o.style.position="relative"),F=te.offset(),b=d.css(o,"top"),k=d.css(o,"left"),(W==="absolute"||W==="fixed")&&-1<(b+k).indexOf("auto")?(A=(_=te.position()).top,S=_.left):(A=parseFloat(b)||0,S=parseFloat(k)||0),M(u)&&(u=u.call(o,m,d.extend({},F))),u.top!=null&&(fe.top=u.top-F.top+A),u.left!=null&&(fe.left=u.left-F.left+S),"using"in u?u.using.call(o,fe):(typeof fe.top=="number"&&(fe.top+="px"),typeof fe.left=="number"&&(fe.left+="px"),te.css(fe))}},d.fn.extend({offset:function(o){if(arguments.length)return o===void 0?this:this.each(function(S){d.offset.setOffset(this,o,S)});var u,m,_=this[0];return _?_.getClientRects().length?(u=_.getBoundingClientRect(),m=_.ownerDocument.defaultView,{top:u.top+m.pageYOffset,left:u.left+m.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var o,u,m,_=this[0],S={top:0,left:0};if(d.css(_,"position")==="fixed")u=_.getBoundingClientRect();else{for(u=this.offset(),m=_.ownerDocument,o=_.offsetParent||m.documentElement;o&&(o===m.body||o===m.documentElement)&&d.css(o,"position")==="static";)o=o.parentNode;o&&o!==_&&o.nodeType===1&&((S=d(o).offset()).top+=d.css(o,"borderTopWidth",!0),S.left+=d.css(o,"borderLeftWidth",!0))}return{top:u.top-S.top-d.css(_,"marginTop",!0),left:u.left-S.left-d.css(_,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var o=this.offsetParent;o&&d.css(o,"position")==="static";)o=o.offsetParent;return o||Pt})}}),d.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(o,u){var m=u==="pageYOffset";d.fn[o]=function(_){return Ce(this,function(S,b,A){var F;if(E(S)?F=S:S.nodeType===9&&(F=S.defaultView),A===void 0)return F?F[u]:S[b];F?F.scrollTo(m?F.pageXOffset:A,m?A:F.pageYOffset):S[b]=A},o,_,arguments.length)}}),d.each(["top","left"],function(o,u){d.cssHooks[u]=Ws(x.pixelPosition,function(m,_){if(_)return _=Ji(m,u),yr.test(_)?d(m).position()[u]+"px":_})}),d.each({Height:"height",Width:"width"},function(o,u){d.each({padding:"inner"+o,content:u,"":"outer"+o},function(m,_){d.fn[_]=function(S,b){var A=arguments.length&&(m||typeof S!="boolean"),F=m||(S===!0||b===!0?"margin":"border");return Ce(this,function(k,W,te){var fe;return E(k)?_.indexOf("outer")===0?k["inner"+o]:k.document.documentElement["client"+o]:k.nodeType===9?(fe=k.documentElement,Math.max(k.body["scroll"+o],fe["scroll"+o],k.body["offset"+o],fe["offset"+o],fe["client"+o])):te===void 0?d.css(k,W,F):d.style(k,W,te,F)},u,A?S:void 0,A)}})}),d.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(o,u){d.fn[u]=function(m){return this.on(u,m)}}),d.fn.extend({bind:function(o,u,m){return this.on(o,null,u,m)},unbind:function(o,u){return this.off(o,null,u)},delegate:function(o,u,m,_){return this.on(u,o,m,_)},undelegate:function(o,u,m){return arguments.length===1?this.off(o,"**"):this.off(u,o||"**",m)},hover:function(o,u){return this.mouseenter(o).mouseleave(u||o)}}),d.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(o,u){d.fn[u]=function(m,_){return 0<arguments.length?this.on(u,null,m,_):this.trigger(u)}});var Xh=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;d.proxy=function(o,u){var m,_,S;if(typeof u=="string"&&(m=o[u],u=o,o=m),M(o))return _=i.call(arguments,2),(S=function(){return o.apply(u||this,_.concat(i.call(arguments)))}).guid=o.guid=o.guid||d.guid++,S},d.holdReady=function(o){o?d.readyWait++:d.ready(!0)},d.isArray=Array.isArray,d.parseJSON=JSON.parse,d.nodeName=ie,d.isFunction=M,d.isWindow=E,d.camelCase=bt,d.type=T,d.now=Date.now,d.isNumeric=function(o){var u=d.type(o);return(u==="number"||u==="string")&&!isNaN(o-parseFloat(o))},d.trim=function(o){return o==null?"":(o+"").replace(Xh,"")},typeof define=="function"&&define.amd&&define("jquery",[],function(){return d});var jh=r.jQuery,qh=r.$;return d.noConflict=function(o){return r.$===d&&(r.$=qh),o&&r.jQuery===d&&(r.jQuery=jh),d},typeof e>"u"&&(r.jQuery=r.$=d),d});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oc="153",br={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ar={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},od=0,Xc=1,ad=2,ku=1,cd=2,Ci=3,Ui=0,Ln=1,Yn=2,ji=0,$r=1,jc=2,qc=3,Yc=4,ld=5,jr=100,ud=101,hd=102,Kc=103,$c=104,dd=200,fd=201,pd=202,md=203,Hu=204,zu=205,gd=206,_d=207,vd=208,xd=209,yd=210,Md=0,Sd=1,Ed=2,Xa=3,Td=4,bd=5,Ad=6,wd=7,Gu=0,Rd=1,Cd=2,Ii=0,Ld=1,Pd=2,Dd=3,Id=4,Nd=5,Vu=300,es=301,ts=302,ja=303,qa=304,zo=306,Yi=1e3,Kn=1001,No=1002,on=1003,Ya=1004,Po=1005,Cn=1006,Wu=1007,mr=1008,qi=1009,Ud=1010,Od=1011,ac=1012,Xu=1013,Xi=1014,Li=1015,Is=1016,ju=1017,qu=1018,hr=1020,Fd=1021,$n=1023,Bd=1024,kd=1025,dr=1026,ns=1027,Hd=1028,Yu=1029,zd=1030,Ku=1031,$u=1033,aa=33776,ca=33777,la=33778,ua=33779,Zc=35840,Jc=35841,Qc=35842,el=35843,Gd=36196,tl=37492,nl=37496,il=37808,rl=37809,sl=37810,ol=37811,al=37812,cl=37813,ll=37814,ul=37815,hl=37816,dl=37817,fl=37818,pl=37819,ml=37820,gl=37821,ha=36492,Vd=36283,_l=36284,vl=36285,xl=36286,Ns=2300,is=2301,da=2302,yl=2400,Ml=2401,Sl=2402,Wd=2500,Xd=0,Zu=1,Ka=2,Ju=3e3,fr=3001,jd=3200,qd=3201,Qu=0,Yd=1,pr="",at="srgb",hi="srgb-linear",eh="display-p3",fa=7680,Kd=519,$d=512,Zd=513,Jd=514,Qd=515,ef=516,tf=517,nf=518,rf=519,$a=35044,El="300 es",Za=1035,Pi=2e3,Uo=2001;class xr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tl=1234567;const Zr=Math.PI/180,rs=180/Math.PI;function oi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function gn(r,e,t){return Math.max(e,Math.min(t,r))}function cc(r,e){return(r%e+e)%e}function sf(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function of(r,e,t){return r!==e?(t-r)/(e-r):0}function Cs(r,e,t){return(1-t)*r+t*e}function af(r,e,t,n){return Cs(r,e,1-Math.exp(-t*n))}function cf(r,e=1){return e-Math.abs(cc(r,e*2)-e)}function lf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function uf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function hf(r,e){return r+Math.floor(Math.random()*(e-r+1))}function df(r,e){return r+Math.random()*(e-r)}function ff(r){return r*(.5-Math.random())}function pf(r){r!==void 0&&(Tl=r);let e=Tl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mf(r){return r*Zr}function gf(r){return r*rs}function Ja(r){return(r&r-1)===0&&r!==0}function th(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Oo(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function _f(r,e,t,n,i){const s=Math.cos,a=Math.sin,c=s(t/2),l=a(t/2),h=s((e+n)/2),f=a((e+n)/2),p=s((e-n)/2),g=a((e-n)/2),x=s((n-e)/2),M=a((n-e)/2);switch(i){case"XYX":r.set(c*f,l*p,l*g,c*h);break;case"YZY":r.set(l*g,c*f,l*p,c*h);break;case"ZXZ":r.set(l*p,l*g,c*f,c*h);break;case"XZX":r.set(c*f,l*M,l*x,c*h);break;case"YXY":r.set(l*x,c*f,l*M,c*h);break;case"ZYZ":r.set(l*M,l*x,c*f,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Di(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ut(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const zn={DEG2RAD:Zr,RAD2DEG:rs,generateUUID:oi,clamp:gn,euclideanModulo:cc,mapLinear:sf,inverseLerp:of,lerp:Cs,damp:af,pingpong:cf,smoothstep:lf,smootherstep:uf,randInt:hf,randFloat:df,randFloatSpread:ff,seededRandom:pf,degToRad:mf,radToDeg:gf,isPowerOfTwo:Ja,ceilPowerOfTwo:th,floorPowerOfTwo:Oo,setQuaternionFromProperEuler:_f,normalize:Ut,denormalize:Di};class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vt{constructor(e,t,n,i,s,a,c,l,h){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,c,l,h)}set(e,t,n,i,s,a,c,l,h){const f=this.elements;return f[0]=e,f[1]=i,f[2]=c,f[3]=t,f[4]=s,f[5]=l,f[6]=n,f[7]=a,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],c=n[3],l=n[6],h=n[1],f=n[4],p=n[7],g=n[2],x=n[5],M=n[8],E=i[0],y=i[3],v=i[6],P=i[1],T=i[4],D=i[7],d=i[2],B=i[5],z=i[8];return s[0]=a*E+c*P+l*d,s[3]=a*y+c*T+l*B,s[6]=a*v+c*D+l*z,s[1]=h*E+f*P+p*d,s[4]=h*y+f*T+p*B,s[7]=h*v+f*D+p*z,s[2]=g*E+x*P+M*d,s[5]=g*y+x*T+M*B,s[8]=g*v+x*D+M*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],c=e[5],l=e[6],h=e[7],f=e[8];return t*a*f-t*c*h-n*s*f+n*c*l+i*s*h-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],c=e[5],l=e[6],h=e[7],f=e[8],p=f*a-c*h,g=c*l-f*s,x=h*s-a*l,M=t*p+n*g+i*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=p*E,e[1]=(i*h-f*n)*E,e[2]=(c*n-i*a)*E,e[3]=g*E,e[4]=(f*t-i*l)*E,e[5]=(i*s-c*t)*E,e[6]=x*E,e[7]=(n*l-h*t)*E,e[8]=(a*t-n*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,c){const l=Math.cos(s),h=Math.sin(s);return this.set(n*l,n*h,-n*(l*a+h*c)+a+e,-i*h,i*l,-i*(-h*a+l*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(pa.makeScale(e,t)),this}rotate(e){return this.premultiply(pa.makeRotation(-e)),this}translate(e,t){return this.premultiply(pa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pa=new vt;function nh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Us(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const bl={};function Ls(r){r in bl||(bl[r]=!0,console.warn(r))}function Jr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ma(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const vf=new vt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),xf=new vt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function yf(r){return r.convertSRGBToLinear().applyMatrix3(xf)}function Mf(r){return r.applyMatrix3(vf).convertLinearToSRGB()}const Sf={[hi]:r=>r,[at]:r=>r.convertSRGBToLinear(),[eh]:yf},Ef={[hi]:r=>r,[at]:r=>r.convertLinearToSRGB(),[eh]:Mf},ti={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return hi},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Sf[e],i=Ef[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let wr;class ih{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wr===void 0&&(wr=Us("canvas")),wr.width=e.width,wr.height=e.height;const n=wr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=wr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Us("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Jr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Jr(t[n]/255)*255):t[n]=Jr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tf=0;class rh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=oi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,c=i.length;a<c;a++)i[a].isDataTexture?s.push(ga(i[a].image)):s.push(ga(i[a]))}else s=ga(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ga(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ih.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bf=0;class dn extends xr{constructor(e=dn.DEFAULT_IMAGE,t=dn.DEFAULT_MAPPING,n=Kn,i=Kn,s=Cn,a=mr,c=$n,l=qi,h=dn.DEFAULT_ANISOTROPY,f=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=oi(),this.name="",this.source=new rh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===fr?at:pr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yi:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case No:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yi:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case No:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===at?fr:Ju}set encoding(e){Ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===fr?at:pr}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Vu;dn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,n=0,i=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,h=l[0],f=l[4],p=l[8],g=l[1],x=l[5],M=l[9],E=l[2],y=l[6],v=l[10];if(Math.abs(f-g)<.01&&Math.abs(p-E)<.01&&Math.abs(M-y)<.01){if(Math.abs(f+g)<.1&&Math.abs(p+E)<.1&&Math.abs(M+y)<.1&&Math.abs(h+x+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(h+1)/2,D=(x+1)/2,d=(v+1)/2,B=(f+g)/4,z=(p+E)/4,X=(M+y)/4;return T>D&&T>d?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=B/n,s=z/n):D>d?D<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(D),n=B/i,s=X/i):d<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(d),n=z/s,i=X/s),this.set(n,i,s,t),this}let P=Math.sqrt((y-M)*(y-M)+(p-E)*(p-E)+(g-f)*(g-f));return Math.abs(P)<.001&&(P=1),this.x=(y-M)/P,this.y=(p-E)/P,this.z=(g-f)/P,this.w=Math.acos((h+x+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gr extends xr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ls("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===fr?at:pr),this.texture=new dn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new rh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sh extends dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Af extends dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class di{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,c){let l=n[i+0],h=n[i+1],f=n[i+2],p=n[i+3];const g=s[a+0],x=s[a+1],M=s[a+2],E=s[a+3];if(c===0){e[t+0]=l,e[t+1]=h,e[t+2]=f,e[t+3]=p;return}if(c===1){e[t+0]=g,e[t+1]=x,e[t+2]=M,e[t+3]=E;return}if(p!==E||l!==g||h!==x||f!==M){let y=1-c;const v=l*g+h*x+f*M+p*E,P=v>=0?1:-1,T=1-v*v;if(T>Number.EPSILON){const d=Math.sqrt(T),B=Math.atan2(d,v*P);y=Math.sin(y*B)/d,c=Math.sin(c*B)/d}const D=c*P;if(l=l*y+g*D,h=h*y+x*D,f=f*y+M*D,p=p*y+E*D,y===1-c){const d=1/Math.sqrt(l*l+h*h+f*f+p*p);l*=d,h*=d,f*=d,p*=d}}e[t]=l,e[t+1]=h,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,s,a){const c=n[i],l=n[i+1],h=n[i+2],f=n[i+3],p=s[a],g=s[a+1],x=s[a+2],M=s[a+3];return e[t]=c*M+f*p+l*x-h*g,e[t+1]=l*M+f*g+h*p-c*x,e[t+2]=h*M+f*x+c*g-l*p,e[t+3]=f*M-c*p-l*g-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,c=Math.cos,l=Math.sin,h=c(n/2),f=c(i/2),p=c(s/2),g=l(n/2),x=l(i/2),M=l(s/2);switch(a){case"XYZ":this._x=g*f*p+h*x*M,this._y=h*x*p-g*f*M,this._z=h*f*M+g*x*p,this._w=h*f*p-g*x*M;break;case"YXZ":this._x=g*f*p+h*x*M,this._y=h*x*p-g*f*M,this._z=h*f*M-g*x*p,this._w=h*f*p+g*x*M;break;case"ZXY":this._x=g*f*p-h*x*M,this._y=h*x*p+g*f*M,this._z=h*f*M+g*x*p,this._w=h*f*p-g*x*M;break;case"ZYX":this._x=g*f*p-h*x*M,this._y=h*x*p+g*f*M,this._z=h*f*M-g*x*p,this._w=h*f*p+g*x*M;break;case"YZX":this._x=g*f*p+h*x*M,this._y=h*x*p+g*f*M,this._z=h*f*M-g*x*p,this._w=h*f*p-g*x*M;break;case"XZY":this._x=g*f*p-h*x*M,this._y=h*x*p-g*f*M,this._z=h*f*M+g*x*p,this._w=h*f*p+g*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],c=t[5],l=t[9],h=t[2],f=t[6],p=t[10],g=n+c+p;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(f-l)*x,this._y=(s-h)*x,this._z=(a-i)*x}else if(n>c&&n>p){const x=2*Math.sqrt(1+n-c-p);this._w=(f-l)/x,this._x=.25*x,this._y=(i+a)/x,this._z=(s+h)/x}else if(c>p){const x=2*Math.sqrt(1+c-n-p);this._w=(s-h)/x,this._x=(i+a)/x,this._y=.25*x,this._z=(l+f)/x}else{const x=2*Math.sqrt(1+p-n-c);this._w=(a-i)/x,this._x=(s+h)/x,this._y=(l+f)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,c=t._x,l=t._y,h=t._z,f=t._w;return this._x=n*f+a*c+i*h-s*l,this._y=i*f+a*l+s*c-n*h,this._z=s*f+a*h+n*l-i*c,this._w=a*f-n*c-i*l-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let c=a*e._w+n*e._x+i*e._y+s*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-c*c;if(l<=Number.EPSILON){const x=1-t;return this._w=x*a+t*this._w,this._x=x*n+t*this._x,this._y=x*i+t*this._y,this._z=x*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(l),f=Math.atan2(h,c),p=Math.sin((1-t)*f)/h,g=Math.sin(t*f)/h;return this._w=a*p+this._w*g,this._x=n*p+this._x*g,this._y=i*p+this._y*g,this._z=s*p+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Al.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Al.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,c=e.z,l=e.w,h=l*t+a*i-c*n,f=l*n+c*t-s*i,p=l*i+s*n-a*t,g=-s*t-a*n-c*i;return this.x=h*l+g*-s+f*-c-p*-a,this.y=f*l+g*-a+p*-s-h*-c,this.z=p*l+g*-c+h*-a-f*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,c=t.y,l=t.z;return this.x=i*l-s*c,this.y=s*a-n*l,this.z=n*c-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _a.copy(this).projectOnVector(e),this.sub(_a)}reflect(e){return this.sub(_a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _a=new H,Al=new di;class fi{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Rr.copy(e.boundingBox),Rr.applyMatrix4(e.matrixWorld),this.union(Rr);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,c=s.count;a<c;a++)Si.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Si)}else i.boundingBox===null&&i.computeBoundingBox(),Rr.copy(i.boundingBox),Rr.applyMatrix4(e.matrixWorld),this.union(Rr)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),eo.subVectors(this.max,ys),Cr.subVectors(e.a,ys),Lr.subVectors(e.b,ys),Pr.subVectors(e.c,ys),Fi.subVectors(Lr,Cr),Bi.subVectors(Pr,Lr),nr.subVectors(Cr,Pr);let t=[0,-Fi.z,Fi.y,0,-Bi.z,Bi.y,0,-nr.z,nr.y,Fi.z,0,-Fi.x,Bi.z,0,-Bi.x,nr.z,0,-nr.x,-Fi.y,Fi.x,0,-Bi.y,Bi.x,0,-nr.y,nr.x,0];return!va(t,Cr,Lr,Pr,eo)||(t=[1,0,0,0,1,0,0,0,1],!va(t,Cr,Lr,Pr,eo))?!1:(to.crossVectors(Fi,Bi),t=[to.x,to.y,to.z],va(t,Cr,Lr,Pr,eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mi=[new H,new H,new H,new H,new H,new H,new H,new H],Si=new H,Rr=new fi,Cr=new H,Lr=new H,Pr=new H,Fi=new H,Bi=new H,nr=new H,ys=new H,eo=new H,to=new H,ir=new H;function va(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ir.fromArray(r,s);const c=i.x*Math.abs(ir.x)+i.y*Math.abs(ir.y)+i.z*Math.abs(ir.z),l=e.dot(ir),h=t.dot(ir),f=n.dot(ir);if(Math.max(-Math.max(l,h,f),Math.min(l,h,f))>c)return!1}return!0}const wf=new fi,Ms=new H,xa=new H;class pi{constructor(e=new H,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);const t=Ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ms,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(xa)),this.expandByPoint(Ms.copy(e.center).sub(xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ei=new H,ya=new H,no=new H,ki=new H,Ma=new H,io=new H,Sa=new H;class ks{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ya.copy(e).add(t).multiplyScalar(.5),no.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(ya);const s=e.distanceTo(t)*.5,a=-this.direction.dot(no),c=ki.dot(this.direction),l=-ki.dot(no),h=ki.lengthSq(),f=Math.abs(1-a*a);let p,g,x,M;if(f>0)if(p=a*l-c,g=a*c-l,M=s*f,p>=0)if(g>=-M)if(g<=M){const E=1/f;p*=E,g*=E,x=p*(p+a*g+2*c)+g*(a*p+g+2*l)+h}else g=s,p=Math.max(0,-(a*g+c)),x=-p*p+g*(g+2*l)+h;else g=-s,p=Math.max(0,-(a*g+c)),x=-p*p+g*(g+2*l)+h;else g<=-M?(p=Math.max(0,-(-a*s+c)),g=p>0?-s:Math.min(Math.max(-s,-l),s),x=-p*p+g*(g+2*l)+h):g<=M?(p=0,g=Math.min(Math.max(-s,-l),s),x=g*(g+2*l)+h):(p=Math.max(0,-(a*s+c)),g=p>0?s:Math.min(Math.max(-s,-l),s),x=-p*p+g*(g+2*l)+h);else g=a>0?-s:s,p=Math.max(0,-(a*g+c)),x=-p*p+g*(g+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(ya).addScaledVector(no,g),x}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);const n=Ei.dot(this.direction),i=Ei.dot(Ei)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),c=n-a,l=n+a;return l<0?null:c<0?this.at(l,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,c,l;const h=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,g=this.origin;return h>=0?(n=(e.min.x-g.x)*h,i=(e.max.x-g.x)*h):(n=(e.max.x-g.x)*h,i=(e.min.x-g.x)*h),f>=0?(s=(e.min.y-g.y)*f,a=(e.max.y-g.y)*f):(s=(e.max.y-g.y)*f,a=(e.min.y-g.y)*f),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),p>=0?(c=(e.min.z-g.z)*p,l=(e.max.z-g.z)*p):(c=(e.max.z-g.z)*p,l=(e.min.z-g.z)*p),n>l||c>i)||((c>n||n!==n)&&(n=c),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,n,i,s){Ma.subVectors(t,e),io.subVectors(n,e),Sa.crossVectors(Ma,io);let a=this.direction.dot(Sa),c;if(a>0){if(i)return null;c=1}else if(a<0)c=-1,a=-a;else return null;ki.subVectors(this.origin,e);const l=c*this.direction.dot(io.crossVectors(ki,io));if(l<0)return null;const h=c*this.direction.dot(Ma.cross(ki));if(h<0||l+h>a)return null;const f=-c*ki.dot(Sa);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,n,i,s,a,c,l,h,f,p,g,x,M,E,y){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,c,l,h,f,p,g,x,M,E,y)}set(e,t,n,i,s,a,c,l,h,f,p,g,x,M,E,y){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=s,v[5]=a,v[9]=c,v[13]=l,v[2]=h,v[6]=f,v[10]=p,v[14]=g,v[3]=x,v[7]=M,v[11]=E,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Dr.setFromMatrixColumn(e,0).length(),s=1/Dr.setFromMatrixColumn(e,1).length(),a=1/Dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),c=Math.sin(n),l=Math.cos(i),h=Math.sin(i),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const g=a*f,x=a*p,M=c*f,E=c*p;t[0]=l*f,t[4]=-l*p,t[8]=h,t[1]=x+M*h,t[5]=g-E*h,t[9]=-c*l,t[2]=E-g*h,t[6]=M+x*h,t[10]=a*l}else if(e.order==="YXZ"){const g=l*f,x=l*p,M=h*f,E=h*p;t[0]=g+E*c,t[4]=M*c-x,t[8]=a*h,t[1]=a*p,t[5]=a*f,t[9]=-c,t[2]=x*c-M,t[6]=E+g*c,t[10]=a*l}else if(e.order==="ZXY"){const g=l*f,x=l*p,M=h*f,E=h*p;t[0]=g-E*c,t[4]=-a*p,t[8]=M+x*c,t[1]=x+M*c,t[5]=a*f,t[9]=E-g*c,t[2]=-a*h,t[6]=c,t[10]=a*l}else if(e.order==="ZYX"){const g=a*f,x=a*p,M=c*f,E=c*p;t[0]=l*f,t[4]=M*h-x,t[8]=g*h+E,t[1]=l*p,t[5]=E*h+g,t[9]=x*h-M,t[2]=-h,t[6]=c*l,t[10]=a*l}else if(e.order==="YZX"){const g=a*l,x=a*h,M=c*l,E=c*h;t[0]=l*f,t[4]=E-g*p,t[8]=M*p+x,t[1]=p,t[5]=a*f,t[9]=-c*f,t[2]=-h*f,t[6]=x*p+M,t[10]=g-E*p}else if(e.order==="XZY"){const g=a*l,x=a*h,M=c*l,E=c*h;t[0]=l*f,t[4]=-p,t[8]=h*f,t[1]=g*p+E,t[5]=a*f,t[9]=x*p-M,t[2]=M*p-x,t[6]=c*f,t[10]=E*p+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rf,e,Cf)}lookAt(e,t,n){const i=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),Hi.crossVectors(n,kn),Hi.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),Hi.crossVectors(n,kn)),Hi.normalize(),ro.crossVectors(kn,Hi),i[0]=Hi.x,i[4]=ro.x,i[8]=kn.x,i[1]=Hi.y,i[5]=ro.y,i[9]=kn.y,i[2]=Hi.z,i[6]=ro.z,i[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],c=n[4],l=n[8],h=n[12],f=n[1],p=n[5],g=n[9],x=n[13],M=n[2],E=n[6],y=n[10],v=n[14],P=n[3],T=n[7],D=n[11],d=n[15],B=i[0],z=i[4],X=i[8],R=i[12],U=i[1],ie=i[5],pe=i[9],q=i[13],J=i[2],Q=i[6],_e=i[10],le=i[14],he=i[3],de=i[7],ve=i[11],Fe=i[15];return s[0]=a*B+c*U+l*J+h*he,s[4]=a*z+c*ie+l*Q+h*de,s[8]=a*X+c*pe+l*_e+h*ve,s[12]=a*R+c*q+l*le+h*Fe,s[1]=f*B+p*U+g*J+x*he,s[5]=f*z+p*ie+g*Q+x*de,s[9]=f*X+p*pe+g*_e+x*ve,s[13]=f*R+p*q+g*le+x*Fe,s[2]=M*B+E*U+y*J+v*he,s[6]=M*z+E*ie+y*Q+v*de,s[10]=M*X+E*pe+y*_e+v*ve,s[14]=M*R+E*q+y*le+v*Fe,s[3]=P*B+T*U+D*J+d*he,s[7]=P*z+T*ie+D*Q+d*de,s[11]=P*X+T*pe+D*_e+d*ve,s[15]=P*R+T*q+D*le+d*Fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],c=e[5],l=e[9],h=e[13],f=e[2],p=e[6],g=e[10],x=e[14],M=e[3],E=e[7],y=e[11],v=e[15];return M*(+s*l*p-i*h*p-s*c*g+n*h*g+i*c*x-n*l*x)+E*(+t*l*x-t*h*g+s*a*g-i*a*x+i*h*f-s*l*f)+y*(+t*h*p-t*c*x-s*a*p+n*a*x+s*c*f-n*h*f)+v*(-i*c*f-t*l*p+t*c*g+i*a*p-n*a*g+n*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],c=e[5],l=e[6],h=e[7],f=e[8],p=e[9],g=e[10],x=e[11],M=e[12],E=e[13],y=e[14],v=e[15],P=p*y*h-E*g*h+E*l*x-c*y*x-p*l*v+c*g*v,T=M*g*h-f*y*h-M*l*x+a*y*x+f*l*v-a*g*v,D=f*E*h-M*p*h+M*c*x-a*E*x-f*c*v+a*p*v,d=M*p*l-f*E*l-M*c*g+a*E*g+f*c*y-a*p*y,B=t*P+n*T+i*D+s*d;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return e[0]=P*z,e[1]=(E*g*s-p*y*s-E*i*x+n*y*x+p*i*v-n*g*v)*z,e[2]=(c*y*s-E*l*s+E*i*h-n*y*h-c*i*v+n*l*v)*z,e[3]=(p*l*s-c*g*s-p*i*h+n*g*h+c*i*x-n*l*x)*z,e[4]=T*z,e[5]=(f*y*s-M*g*s+M*i*x-t*y*x-f*i*v+t*g*v)*z,e[6]=(M*l*s-a*y*s-M*i*h+t*y*h+a*i*v-t*l*v)*z,e[7]=(a*g*s-f*l*s+f*i*h-t*g*h-a*i*x+t*l*x)*z,e[8]=D*z,e[9]=(M*p*s-f*E*s-M*n*x+t*E*x+f*n*v-t*p*v)*z,e[10]=(a*E*s-M*c*s+M*n*h-t*E*h-a*n*v+t*c*v)*z,e[11]=(f*c*s-a*p*s-f*n*h+t*p*h+a*n*x-t*c*x)*z,e[12]=d*z,e[13]=(f*E*i-M*p*i+M*n*g-t*E*g-f*n*y+t*p*y)*z,e[14]=(M*c*i-a*E*i-M*n*l+t*E*l+a*n*y-t*c*y)*z,e[15]=(a*p*i-f*c*i+f*n*l-t*p*l-a*n*g+t*c*g)*z,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,c=e.y,l=e.z,h=s*a,f=s*c;return this.set(h*a+n,h*c-i*l,h*l+i*c,0,h*c+i*l,f*c+n,f*l-i*a,0,h*l-i*c,f*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,c=t._z,l=t._w,h=s+s,f=a+a,p=c+c,g=s*h,x=s*f,M=s*p,E=a*f,y=a*p,v=c*p,P=l*h,T=l*f,D=l*p,d=n.x,B=n.y,z=n.z;return i[0]=(1-(E+v))*d,i[1]=(x+D)*d,i[2]=(M-T)*d,i[3]=0,i[4]=(x-D)*B,i[5]=(1-(g+v))*B,i[6]=(y+P)*B,i[7]=0,i[8]=(M+T)*z,i[9]=(y-P)*z,i[10]=(1-(g+E))*z,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Dr.set(i[0],i[1],i[2]).length();const a=Dr.set(i[4],i[5],i[6]).length(),c=Dr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ni.copy(this);const h=1/s,f=1/a,p=1/c;return ni.elements[0]*=h,ni.elements[1]*=h,ni.elements[2]*=h,ni.elements[4]*=f,ni.elements[5]*=f,ni.elements[6]*=f,ni.elements[8]*=p,ni.elements[9]*=p,ni.elements[10]*=p,t.setFromRotationMatrix(ni),n.x=s,n.y=a,n.z=c,this}makePerspective(e,t,n,i,s,a,c=Pi){const l=this.elements,h=2*s/(t-e),f=2*s/(n-i),p=(t+e)/(t-e),g=(n+i)/(n-i);let x,M;if(c===Pi)x=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(c===Uo)x=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=f,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,c=Pi){const l=this.elements,h=1/(t-e),f=1/(n-i),p=1/(a-s),g=(t+e)*h,x=(n+i)*f;let M,E;if(c===Pi)M=(a+s)*p,E=-2*p;else if(c===Uo)M=s*p,E=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-g,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-x,l[2]=0,l[6]=0,l[10]=E,l[14]=-M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Dr=new H,ni=new xt,Rf=new H(0,0,0),Cf=new H(1,1,1),Hi=new H,ro=new H,kn=new H,wl=new xt,Rl=new di;class Go{constructor(e=0,t=0,n=0,i=Go.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],c=i[8],l=i[1],h=i[5],f=i[9],p=i[2],g=i[6],x=i[10];switch(t){case"XYZ":this._y=Math.asin(gn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,x),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(gn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-p,x),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-f,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rl.setFromEuler(this),this.setFromQuaternion(Rl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Go.DEFAULT_ORDER="XYZ";class lc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lf=0;const Cl=new H,Ir=new di,Ti=new xt,so=new H,Ss=new H,Pf=new H,Df=new di,Ll=new H(1,0,0),Pl=new H(0,1,0),Dl=new H(0,0,1),If={type:"added"},Il={type:"removed"};class Vt extends xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new H,t=new Go,n=new di,i=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new xt},normalMatrix:{value:new vt}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new lc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(Ll,e)}rotateY(e){return this.rotateOnAxis(Pl,e)}rotateZ(e){return this.rotateOnAxis(Dl,e)}translateOnAxis(e,t){return Cl.copy(e).applyQuaternion(this.quaternion),this.position.add(Cl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ll,e)}translateY(e){return this.translateOnAxis(Pl,e)}translateZ(e){return this.translateOnAxis(Dl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?so.copy(e):so.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Ss,so,this.up):Ti.lookAt(so,Ss,this.up),this.quaternion.setFromRotationMatrix(Ti),i&&(Ti.extractRotation(i.matrixWorld),Ir.setFromRotationMatrix(Ti),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(If)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Il)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Il)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,e,Pf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,Df,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const c=i[s];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const l=c.shapes;if(Array.isArray(l))for(let h=0,f=l.length;h<f;h++){const p=l[h];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let l=0,h=this.material.length;l<h;l++)c.push(s(e.materials,this.material[l]));i.material=c}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let c=0;c<this.children.length;c++)i.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let c=0;c<this.animations.length;c++){const l=this.animations[c];i.animations.push(s(e.animations,l))}}if(t){const c=a(e.geometries),l=a(e.materials),h=a(e.textures),f=a(e.images),p=a(e.shapes),g=a(e.skeletons),x=a(e.animations),M=a(e.nodes);c.length>0&&(n.geometries=c),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),g.length>0&&(n.skeletons=g),x.length>0&&(n.animations=x),M.length>0&&(n.nodes=M)}return n.object=i,n;function a(c){const l=[];for(const h in c){const f=c[h];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Vt.DEFAULT_UP=new H(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new H,bi=new H,Ea=new H,Ai=new H,Nr=new H,Ur=new H,Nl=new H,Ta=new H,ba=new H,Aa=new H;let oo=!1;class qn{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ii.subVectors(e,t),i.cross(ii);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ii.subVectors(i,t),bi.subVectors(n,t),Ea.subVectors(e,t);const a=ii.dot(ii),c=ii.dot(bi),l=ii.dot(Ea),h=bi.dot(bi),f=bi.dot(Ea),p=a*h-c*c;if(p===0)return s.set(-2,-1,-1);const g=1/p,x=(h*l-c*f)*g,M=(a*f-c*l)*g;return s.set(1-x-M,M,x)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ai),Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getUV(e,t,n,i,s,a,c,l){return oo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),oo=!0),this.getInterpolation(e,t,n,i,s,a,c,l)}static getInterpolation(e,t,n,i,s,a,c,l){return this.getBarycoord(e,t,n,i,Ai),l.setScalar(0),l.addScaledVector(s,Ai.x),l.addScaledVector(a,Ai.y),l.addScaledVector(c,Ai.z),l}static isFrontFacing(e,t,n,i){return ii.subVectors(n,t),bi.subVectors(e,t),ii.cross(bi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),ii.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return oo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),oo=!0),qn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return qn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,c;Nr.subVectors(i,n),Ur.subVectors(s,n),Ta.subVectors(e,n);const l=Nr.dot(Ta),h=Ur.dot(Ta);if(l<=0&&h<=0)return t.copy(n);ba.subVectors(e,i);const f=Nr.dot(ba),p=Ur.dot(ba);if(f>=0&&p<=f)return t.copy(i);const g=l*p-f*h;if(g<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(n).addScaledVector(Nr,a);Aa.subVectors(e,s);const x=Nr.dot(Aa),M=Ur.dot(Aa);if(M>=0&&x<=M)return t.copy(s);const E=x*h-l*M;if(E<=0&&h>=0&&M<=0)return c=h/(h-M),t.copy(n).addScaledVector(Ur,c);const y=f*M-x*p;if(y<=0&&p-f>=0&&x-M>=0)return Nl.subVectors(s,i),c=(p-f)/(p-f+(x-M)),t.copy(i).addScaledVector(Nl,c);const v=1/(y+E+g);return a=E*v,c=g*v,t.copy(n).addScaledVector(Nr,a).addScaledVector(Ur,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Nf=0;class ui extends xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=$r,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Hu,this.blendDst=zu,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fa,this.stencilZFail=fa,this.stencilZPass=fa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(n.blending=this.blending),this.side!==Ui&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const c in s){const l=s[c];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},ao={h:0,s:0,l:0};function wa(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=at){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ti.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ti.workingColorSpace){return this.r=e,this.g=t,this.b=n,ti.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ti.workingColorSpace){if(e=cc(e,1),t=gn(t,0,1),n=gn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=wa(a,s,e+1/3),this.g=wa(a,s,e),this.b=wa(a,s,e-1/3)}return ti.toWorkingColorSpace(this,i),this}setStyle(e,t=at){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],c=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=at){const n=oh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}copyLinearToSRGB(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=at){return ti.fromWorkingColorSpace(xn.copy(this),e),Math.round(gn(xn.r*255,0,255))*65536+Math.round(gn(xn.g*255,0,255))*256+Math.round(gn(xn.b*255,0,255))}getHexString(e=at){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ti.workingColorSpace){ti.fromWorkingColorSpace(xn.copy(this),t);const n=xn.r,i=xn.g,s=xn.b,a=Math.max(n,i,s),c=Math.min(n,i,s);let l,h;const f=(c+a)/2;if(c===a)l=0,h=0;else{const p=a-c;switch(h=f<=.5?p/(a+c):p/(2-a-c),a){case n:l=(i-s)/p+(i<s?6:0);break;case i:l=(s-n)/p+2;break;case s:l=(n-i)/p+4;break}l/=6}return e.h=l,e.s=h,e.l=f,e}getRGB(e,t=ti.workingColorSpace){return ti.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=at){ti.fromWorkingColorSpace(xn.copy(this),e);const t=xn.r,n=xn.g,i=xn.b;return e!==at?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ri),ri.h+=e,ri.s+=t,ri.l+=n,this.setHSL(ri.h,ri.s,ri.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(ao);const n=Cs(ri.h,ao.h,t),i=Cs(ri.s,ao.s,t),s=Cs(ri.l,ao.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new rt;rt.NAMES=oh;class si extends ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=new H,co=new nt;class bn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$a,this.updateRange={offset:0,count:-1},this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)co.fromBufferAttribute(this,t),co.applyMatrix3(e),this.setXY(t,co.x,co.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Di(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Di(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Di(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),i=Ut(i,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$a&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ah extends bn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ch extends bn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class fn extends bn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Uf=0;const Xn=new xt,Ra=new Vt,Or=new H,Hn=new fi,Es=new fi,hn=new H;class Pn extends xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nh(e)?ch:ah)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new vt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,n){return Xn.makeTranslation(e,t,n),this.applyMatrix4(Xn),this}scale(e,t,n){return Xn.makeScale(e,t,n),this.applyMatrix4(Xn),this}lookAt(e){return Ra.lookAt(e),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new fn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Hn.setFromBufferAttribute(s),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const c=t[s];Es.setFromBufferAttribute(c),this.morphTargetsRelative?(hn.addVectors(Hn.min,Es.min),Hn.expandByPoint(hn),hn.addVectors(Hn.max,Es.max),Hn.expandByPoint(hn)):(Hn.expandByPoint(Es.min),Hn.expandByPoint(Es.max))}Hn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)hn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(hn));if(t)for(let s=0,a=t.length;s<a;s++){const c=t[s],l=this.morphTargetsRelative;for(let h=0,f=c.count;h<f;h++)hn.fromBufferAttribute(c,h),l&&(Or.fromBufferAttribute(e,h),hn.add(Or)),i=Math.max(i,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,c=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*c),4));const l=this.getAttribute("tangent").array,h=[],f=[];for(let U=0;U<c;U++)h[U]=new H,f[U]=new H;const p=new H,g=new H,x=new H,M=new nt,E=new nt,y=new nt,v=new H,P=new H;function T(U,ie,pe){p.fromArray(i,U*3),g.fromArray(i,ie*3),x.fromArray(i,pe*3),M.fromArray(a,U*2),E.fromArray(a,ie*2),y.fromArray(a,pe*2),g.sub(p),x.sub(p),E.sub(M),y.sub(M);const q=1/(E.x*y.y-y.x*E.y);isFinite(q)&&(v.copy(g).multiplyScalar(y.y).addScaledVector(x,-E.y).multiplyScalar(q),P.copy(x).multiplyScalar(E.x).addScaledVector(g,-y.x).multiplyScalar(q),h[U].add(v),h[ie].add(v),h[pe].add(v),f[U].add(P),f[ie].add(P),f[pe].add(P))}let D=this.groups;D.length===0&&(D=[{start:0,count:n.length}]);for(let U=0,ie=D.length;U<ie;++U){const pe=D[U],q=pe.start,J=pe.count;for(let Q=q,_e=q+J;Q<_e;Q+=3)T(n[Q+0],n[Q+1],n[Q+2])}const d=new H,B=new H,z=new H,X=new H;function R(U){z.fromArray(s,U*3),X.copy(z);const ie=h[U];d.copy(ie),d.sub(z.multiplyScalar(z.dot(ie))).normalize(),B.crossVectors(X,ie);const q=B.dot(f[U])<0?-1:1;l[U*4]=d.x,l[U*4+1]=d.y,l[U*4+2]=d.z,l[U*4+3]=q}for(let U=0,ie=D.length;U<ie;++U){const pe=D[U],q=pe.start,J=pe.count;for(let Q=q,_e=q+J;Q<_e;Q+=3)R(n[Q+0]),R(n[Q+1]),R(n[Q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,x=n.count;g<x;g++)n.setXYZ(g,0,0,0);const i=new H,s=new H,a=new H,c=new H,l=new H,h=new H,f=new H,p=new H;if(e)for(let g=0,x=e.count;g<x;g+=3){const M=e.getX(g+0),E=e.getX(g+1),y=e.getX(g+2);i.fromBufferAttribute(t,M),s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,y),f.subVectors(a,s),p.subVectors(i,s),f.cross(p),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,E),h.fromBufferAttribute(n,y),c.add(f),l.add(f),h.add(f),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(E,l.x,l.y,l.z),n.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,x=t.count;g<x;g+=3)i.fromBufferAttribute(t,g+0),s.fromBufferAttribute(t,g+1),a.fromBufferAttribute(t,g+2),f.subVectors(a,s),p.subVectors(i,s),f.cross(p),n.setXYZ(g+0,f.x,f.y,f.z),n.setXYZ(g+1,f.x,f.y,f.z),n.setXYZ(g+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(c,l){const h=c.array,f=c.itemSize,p=c.normalized,g=new h.constructor(l.length*f);let x=0,M=0;for(let E=0,y=l.length;E<y;E++){c.isInterleavedBufferAttribute?x=l[E]*c.data.stride+c.offset:x=l[E]*f;for(let v=0;v<f;v++)g[M++]=h[x++]}return new bn(g,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pn,n=this.index.array,i=this.attributes;for(const c in i){const l=i[c],h=e(l,n);t.setAttribute(c,h)}const s=this.morphAttributes;for(const c in s){const l=[],h=s[c];for(let f=0,p=h.length;f<p;f++){const g=h[f],x=e(g,n);l.push(x)}t.morphAttributes[c]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let c=0,l=a.length;c<l;c++){const h=a[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const h=n[l];e.data.attributes[l]=h.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],f=[];for(let p=0,g=h.length;p<g;p++){const x=h[p];f.push(x.toJSON(e.data))}f.length>0&&(i[l]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const f=i[h];this.setAttribute(h,f.clone(t))}const s=e.morphAttributes;for(const h in s){const f=[],p=s[h];for(let g=0,x=p.length;g<x;g++)f.push(p[g].clone(t));this.morphAttributes[h]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,f=a.length;h<f;h++){const p=a[h];this.addGroup(p.start,p.count,p.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ul=new xt,rr=new ks,lo=new pi,Ol=new H,Fr=new H,Br=new H,kr=new H,Ca=new H,uo=new H,ho=new nt,fo=new nt,po=new nt,Fl=new H,Bl=new H,kl=new H,mo=new H,go=new H;class Tn extends Vt{constructor(e=new Pn,t=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const c=this.morphTargetInfluences;if(s&&c){uo.set(0,0,0);for(let l=0,h=s.length;l<h;l++){const f=c[l],p=s[l];f!==0&&(Ca.fromBufferAttribute(p,e),a?uo.addScaledVector(Ca,f):uo.addScaledVector(Ca.sub(t),f))}t.add(uo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(s),rr.copy(e.ray).recast(e.near),!(lo.containsPoint(rr.origin)===!1&&(rr.intersectSphere(lo,Ol)===null||rr.origin.distanceToSquared(Ol)>(e.far-e.near)**2))&&(Ul.copy(s).invert(),rr.copy(e.ray).applyMatrix4(Ul),!(n.boundingBox!==null&&rr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,rr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,c=s.index,l=s.attributes.position,h=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,g=s.groups,x=s.drawRange;if(c!==null)if(Array.isArray(a))for(let M=0,E=g.length;M<E;M++){const y=g[M],v=a[y.materialIndex],P=Math.max(y.start,x.start),T=Math.min(c.count,Math.min(y.start+y.count,x.start+x.count));for(let D=P,d=T;D<d;D+=3){const B=c.getX(D),z=c.getX(D+1),X=c.getX(D+2);i=_o(this,v,e,n,h,f,p,B,z,X),i&&(i.faceIndex=Math.floor(D/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{const M=Math.max(0,x.start),E=Math.min(c.count,x.start+x.count);for(let y=M,v=E;y<v;y+=3){const P=c.getX(y),T=c.getX(y+1),D=c.getX(y+2);i=_o(this,a,e,n,h,f,p,P,T,D),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let M=0,E=g.length;M<E;M++){const y=g[M],v=a[y.materialIndex],P=Math.max(y.start,x.start),T=Math.min(l.count,Math.min(y.start+y.count,x.start+x.count));for(let D=P,d=T;D<d;D+=3){const B=D,z=D+1,X=D+2;i=_o(this,v,e,n,h,f,p,B,z,X),i&&(i.faceIndex=Math.floor(D/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{const M=Math.max(0,x.start),E=Math.min(l.count,x.start+x.count);for(let y=M,v=E;y<v;y+=3){const P=y,T=y+1,D=y+2;i=_o(this,a,e,n,h,f,p,P,T,D),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}}}function Of(r,e,t,n,i,s,a,c){let l;if(e.side===Ln?l=n.intersectTriangle(a,s,i,!0,c):l=n.intersectTriangle(i,s,a,e.side===Ui,c),l===null)return null;go.copy(c),go.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(go);return h<t.near||h>t.far?null:{distance:h,point:go.clone(),object:r}}function _o(r,e,t,n,i,s,a,c,l,h){r.getVertexPosition(c,Fr),r.getVertexPosition(l,Br),r.getVertexPosition(h,kr);const f=Of(r,e,t,n,Fr,Br,kr,mo);if(f){i&&(ho.fromBufferAttribute(i,c),fo.fromBufferAttribute(i,l),po.fromBufferAttribute(i,h),f.uv=qn.getInterpolation(mo,Fr,Br,kr,ho,fo,po,new nt)),s&&(ho.fromBufferAttribute(s,c),fo.fromBufferAttribute(s,l),po.fromBufferAttribute(s,h),f.uv1=qn.getInterpolation(mo,Fr,Br,kr,ho,fo,po,new nt),f.uv2=f.uv1),a&&(Fl.fromBufferAttribute(a,c),Bl.fromBufferAttribute(a,l),kl.fromBufferAttribute(a,h),f.normal=qn.getInterpolation(mo,Fr,Br,kr,Fl,Bl,kl,new H),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const p={a:c,b:l,c:h,normal:new H,materialIndex:0};qn.getNormal(Fr,Br,kr,p.normal),f.face=p}return f}class as extends Pn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const c=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],h=[],f=[],p=[];let g=0,x=0;M("z","y","x",-1,-1,n,t,e,a,s,0),M("z","y","x",1,-1,n,t,-e,a,s,1),M("x","z","y",1,1,e,n,t,i,a,2),M("x","z","y",1,-1,e,n,-t,i,a,3),M("x","y","z",1,-1,e,t,n,i,s,4),M("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new fn(h,3)),this.setAttribute("normal",new fn(f,3)),this.setAttribute("uv",new fn(p,2));function M(E,y,v,P,T,D,d,B,z,X,R){const U=D/z,ie=d/X,pe=D/2,q=d/2,J=B/2,Q=z+1,_e=X+1;let le=0,he=0;const de=new H;for(let ve=0;ve<_e;ve++){const Fe=ve*ie-q;for(let se=0;se<Q;se++){const Se=se*U-pe;de[E]=Se*P,de[y]=Fe*T,de[v]=J,h.push(de.x,de.y,de.z),de[E]=0,de[y]=0,de[v]=B>0?1:-1,f.push(de.x,de.y,de.z),p.push(se/z),p.push(1-ve/X),le+=1}}for(let ve=0;ve<X;ve++)for(let Fe=0;Fe<z;Fe++){const se=g+Fe+Q*ve,Se=g+Fe+Q*(ve+1),xe=g+(Fe+1)+Q*(ve+1),Ie=g+(Fe+1)+Q*ve;l.push(se,Se,Ie),l.push(Se,xe,Ie),he+=6}c.addGroup(x,he,R),x+=he,g+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ss(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Sn(r){const e={};for(let t=0;t<r.length;t++){const n=ss(r[t]);for(const i in n)e[i]=n[i]}return e}function Ff(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function lh(r){return r.getRenderTarget()===null?r.outputColorSpace:hi}const Bf={clone:ss,merge:Sn};var kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kf,this.fragmentShader=Hf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=Ff(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class uh extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class En extends uh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/h,i*=a.width/l,n*=a.height/h}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hr=-90,zr=1;class zf extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new En(Hr,zr,e,t);i.layers=this.layers,this.add(i);const s=new En(Hr,zr,e,t);s.layers=this.layers,this.add(s);const a=new En(Hr,zr,e,t);a.layers=this.layers,this.add(a);const c=new En(Hr,zr,e,t);c.layers=this.layers,this.add(c);const l=new En(Hr,zr,e,t);l.layers=this.layers,this.add(l);const h=new En(Hr,zr,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,c,l]=t;for(const h of t)this.remove(h);if(e===Pi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Uo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,s,a,c,l,h]=this.children,f=e.getRenderTarget(),p=e.toneMapping,g=e.xr.enabled;e.toneMapping=Ii,e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,c),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5),e.render(t,h),e.setRenderTarget(f),e.toneMapping=p,e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class hh extends dn{constructor(e,t,n,i,s,a,c,l,h,f){e=e!==void 0?e:[],t=t!==void 0?t:es,super(e,t,n,i,s,a,c,l,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gf extends gr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ls("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===fr?at:pr),this.texture=new hh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new as(5,5,5),s=new _r({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ln,blending:ji});s.uniforms.tEquirect.value=t;const a=new Tn(i,s),c=t.minFilter;return t.minFilter===mr&&(t.minFilter=Cn),new zf(1,10,this).update(e,a),t.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const La=new H,Vf=new H,Wf=new vt;class ar{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=La.subVectors(n,t).cross(Vf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(La),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Wf.getNormalMatrix(e),i=this.coplanarPoint(La).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new pi,vo=new H;class uc{constructor(e=new ar,t=new ar,n=new ar,i=new ar,s=new ar,a=new ar){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(i),c[4].copy(s),c[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pi){const n=this.planes,i=e.elements,s=i[0],a=i[1],c=i[2],l=i[3],h=i[4],f=i[5],p=i[6],g=i[7],x=i[8],M=i[9],E=i[10],y=i[11],v=i[12],P=i[13],T=i[14],D=i[15];if(n[0].setComponents(l-s,g-h,y-x,D-v).normalize(),n[1].setComponents(l+s,g+h,y+x,D+v).normalize(),n[2].setComponents(l+a,g+f,y+M,D+P).normalize(),n[3].setComponents(l-a,g-f,y-M,D-P).normalize(),n[4].setComponents(l-c,g-p,y-E,D-T).normalize(),t===Pi)n[5].setComponents(l+c,g+p,y+E,D+T).normalize();else if(t===Uo)n[5].setComponents(c,p,E,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(vo.x=i.normal.x>0?e.max.x:e.min.x,vo.y=i.normal.y>0?e.max.y:e.min.y,vo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(vo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dh(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Xf(r,e){const t=e.isWebGL2,n=new WeakMap;function i(h,f){const p=h.array,g=h.usage,x=r.createBuffer();r.bindBuffer(f,x),r.bufferData(f,p,g),h.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(p instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)M=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version}}function s(h,f,p){const g=f.array,x=f.updateRange;r.bindBuffer(p,h),x.count===-1?r.bufferSubData(p,0,g):(t?r.bufferSubData(p,x.offset*g.BYTES_PER_ELEMENT,g,x.offset,x.count):r.bufferSubData(p,x.offset*g.BYTES_PER_ELEMENT,g.subarray(x.offset,x.offset+x.count)),x.count=-1),f.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const f=n.get(h);f&&(r.deleteBuffer(f.buffer),n.delete(h))}function l(h,f){if(h.isGLBufferAttribute){const g=n.get(h);(!g||g.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const p=n.get(h);p===void 0?n.set(h,i(h,f)):p.version<h.version&&(s(p.buffer,h,f),p.version=h.version)}return{get:a,remove:c,update:l}}class Vo extends Pn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,c=Math.floor(n),l=Math.floor(i),h=c+1,f=l+1,p=e/c,g=t/l,x=[],M=[],E=[],y=[];for(let v=0;v<f;v++){const P=v*g-a;for(let T=0;T<h;T++){const D=T*p-s;M.push(D,-P,0),E.push(0,0,1),y.push(T/c),y.push(1-v/l)}}for(let v=0;v<l;v++)for(let P=0;P<c;P++){const T=P+h*v,D=P+h*(v+1),d=P+1+h*(v+1),B=P+1+h*v;x.push(T,D,B),x.push(D,d,B)}this.setIndex(x),this.setAttribute("position",new fn(M,3)),this.setAttribute("normal",new fn(E,3)),this.setAttribute("uv",new fn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.width,e.height,e.widthSegments,e.heightSegments)}}var jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$f=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jf="vec3 transformed = vec3( position );",Qf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ep=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tp=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,np=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hp=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,dp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,fp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vp="gl_FragColor = linearToOutputTexel( gl_FragColor );",xp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yp=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
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
#endif`,bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cp=`#ifdef USE_GRADIENTMAP
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
}`,Lp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Np=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Up=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,zp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Gp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Xp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Yp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Kp=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,$p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jp=`#if defined( USE_POINTS_UV )
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
#endif`,Qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,im=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,rm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,sm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
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
vec3 geometryNormal = normal;`,om=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,um=`#ifdef USE_NORMALMAP
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
#endif`,hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,dm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,_m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Am=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lm=`#ifdef USE_SKINNING
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
#endif`,Pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Um=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Om=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fm=`#ifdef USE_UV
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
#endif`,Bm=`#ifdef USE_UV
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
#endif`,km=`#ifdef USE_UV
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
#endif`,Hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Ym=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Km=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,$m=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qm=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tg=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,ng=`uniform vec3 diffuse;
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ig=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,rg=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,og=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cg=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,ug=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,dg=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,pg=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`uniform float size;
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
}`,gg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_g=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,vg=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,xg=`uniform float rotation;
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
}`,yg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,gt={alphamap_fragment:jf,alphamap_pars_fragment:qf,alphatest_fragment:Yf,alphatest_pars_fragment:Kf,aomap_fragment:$f,aomap_pars_fragment:Zf,begin_vertex:Jf,beginnormal_vertex:Qf,bsdfs:ep,iridescence_fragment:tp,bumpmap_pars_fragment:np,clipping_planes_fragment:ip,clipping_planes_pars_fragment:rp,clipping_planes_pars_vertex:sp,clipping_planes_vertex:op,color_fragment:ap,color_pars_fragment:cp,color_pars_vertex:lp,color_vertex:up,common:hp,cube_uv_reflection_fragment:dp,defaultnormal_vertex:fp,displacementmap_pars_vertex:pp,displacementmap_vertex:mp,emissivemap_fragment:gp,emissivemap_pars_fragment:_p,encodings_fragment:vp,encodings_pars_fragment:xp,envmap_fragment:yp,envmap_common_pars_fragment:Mp,envmap_pars_fragment:Sp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:Up,envmap_vertex:Tp,fog_vertex:bp,fog_pars_vertex:Ap,fog_fragment:wp,fog_pars_fragment:Rp,gradientmap_pars_fragment:Cp,lightmap_fragment:Lp,lightmap_pars_fragment:Pp,lights_lambert_fragment:Dp,lights_lambert_pars_fragment:Ip,lights_pars_begin:Np,lights_toon_fragment:Op,lights_toon_pars_fragment:Fp,lights_phong_fragment:Bp,lights_phong_pars_fragment:kp,lights_physical_fragment:Hp,lights_physical_pars_fragment:zp,lights_fragment_begin:Gp,lights_fragment_maps:Vp,lights_fragment_end:Wp,logdepthbuf_fragment:Xp,logdepthbuf_pars_fragment:jp,logdepthbuf_pars_vertex:qp,logdepthbuf_vertex:Yp,map_fragment:Kp,map_pars_fragment:$p,map_particle_fragment:Zp,map_particle_pars_fragment:Jp,metalnessmap_fragment:Qp,metalnessmap_pars_fragment:em,morphcolor_vertex:tm,morphnormal_vertex:nm,morphtarget_pars_vertex:im,morphtarget_vertex:rm,normal_fragment_begin:sm,normal_fragment_maps:om,normal_pars_fragment:am,normal_pars_vertex:cm,normal_vertex:lm,normalmap_pars_fragment:um,clearcoat_normal_fragment_begin:hm,clearcoat_normal_fragment_maps:dm,clearcoat_pars_fragment:fm,iridescence_pars_fragment:pm,output_fragment:mm,packing:gm,premultiplied_alpha_fragment:_m,project_vertex:vm,dithering_fragment:xm,dithering_pars_fragment:ym,roughnessmap_fragment:Mm,roughnessmap_pars_fragment:Sm,shadowmap_pars_fragment:Em,shadowmap_pars_vertex:Tm,shadowmap_vertex:bm,shadowmask_pars_fragment:Am,skinbase_vertex:wm,skinning_pars_vertex:Rm,skinning_vertex:Cm,skinnormal_vertex:Lm,specularmap_fragment:Pm,specularmap_pars_fragment:Dm,tonemapping_fragment:Im,tonemapping_pars_fragment:Nm,transmission_fragment:Um,transmission_pars_fragment:Om,uv_pars_fragment:Fm,uv_pars_vertex:Bm,uv_vertex:km,worldpos_vertex:Hm,background_vert:zm,background_frag:Gm,backgroundCube_vert:Vm,backgroundCube_frag:Wm,cube_vert:Xm,cube_frag:jm,depth_vert:qm,depth_frag:Ym,distanceRGBA_vert:Km,distanceRGBA_frag:$m,equirect_vert:Zm,equirect_frag:Jm,linedashed_vert:Qm,linedashed_frag:eg,meshbasic_vert:tg,meshbasic_frag:ng,meshlambert_vert:ig,meshlambert_frag:rg,meshmatcap_vert:sg,meshmatcap_frag:og,meshnormal_vert:ag,meshnormal_frag:cg,meshphong_vert:lg,meshphong_frag:ug,meshphysical_vert:hg,meshphysical_frag:dg,meshtoon_vert:fg,meshtoon_frag:pg,points_vert:mg,points_frag:gg,shadow_vert:_g,shadow_frag:vg,sprite_vert:xg,sprite_frag:yg},we={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},li={basic:{uniforms:Sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new rt(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Sn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Sn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new rt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Sn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Sn([we.points,we.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Sn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Sn([we.common,we.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Sn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Sn([we.sprite,we.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:Sn([we.common,we.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:Sn([we.lights,we.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};li.physical={uniforms:Sn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const xo={r:0,b:0,g:0};function Mg(r,e,t,n,i,s,a){const c=new rt(0);let l=s===!0?0:1,h,f,p=null,g=0,x=null;function M(y,v){let P=!1,T=v.isScene===!0?v.background:null;switch(T&&T.isTexture&&(T=(v.backgroundBlurriness>0?t:e).get(T)),T===null?E(c,l):T&&T.isColor&&(E(T,1),P=!0),r.xr.getEnvironmentBlendMode()){case"opaque":P=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),P=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),P=!0;break}(r.autoClear||P)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),T&&(T.isCubeTexture||T.mapping===zo)?(f===void 0&&(f=new Tn(new as(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:ss(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(B,z,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=T,f.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.toneMapped=T.colorSpace!==at,(p!==T||g!==T.version||x!==r.toneMapping)&&(f.material.needsUpdate=!0,p=T,g=T.version,x=r.toneMapping),f.layers.enableAll(),y.unshift(f,f.geometry,f.material,0,0,null)):T&&T.isTexture&&(h===void 0&&(h=new Tn(new Vo(2,2),new _r({name:"BackgroundMaterial",uniforms:ss(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=T,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=T.colorSpace!==at,T.matrixAutoUpdate===!0&&T.updateMatrix(),h.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||g!==T.version||x!==r.toneMapping)&&(h.material.needsUpdate=!0,p=T,g=T.version,x=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function E(y,v){y.getRGB(xo,lh(r)),n.buffers.color.setClear(xo.r,xo.g,xo.b,v,a)}return{getClearColor:function(){return c},setClearColor:function(y,v=1){c.set(y),l=v,E(c,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,E(c,l)},render:M}}function Sg(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,c={},l=y(null);let h=l,f=!1;function p(J,Q,_e,le,he){let de=!1;if(a){const ve=E(le,_e,Q);h!==ve&&(h=ve,x(h.object)),de=v(J,le,_e,he),de&&P(J,le,_e,he)}else{const ve=Q.wireframe===!0;(h.geometry!==le.id||h.program!==_e.id||h.wireframe!==ve)&&(h.geometry=le.id,h.program=_e.id,h.wireframe=ve,de=!0)}he!==null&&t.update(he,r.ELEMENT_ARRAY_BUFFER),(de||f)&&(f=!1,X(J,Q,_e,le),he!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(he).buffer))}function g(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function x(J){return n.isWebGL2?r.bindVertexArray(J):s.bindVertexArrayOES(J)}function M(J){return n.isWebGL2?r.deleteVertexArray(J):s.deleteVertexArrayOES(J)}function E(J,Q,_e){const le=_e.wireframe===!0;let he=c[J.id];he===void 0&&(he={},c[J.id]=he);let de=he[Q.id];de===void 0&&(de={},he[Q.id]=de);let ve=de[le];return ve===void 0&&(ve=y(g()),de[le]=ve),ve}function y(J){const Q=[],_e=[],le=[];for(let he=0;he<i;he++)Q[he]=0,_e[he]=0,le[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:_e,attributeDivisors:le,object:J,attributes:{},index:null}}function v(J,Q,_e,le){const he=h.attributes,de=Q.attributes;let ve=0;const Fe=_e.getAttributes();for(const se in Fe)if(Fe[se].location>=0){const xe=he[se];let Ie=de[se];if(Ie===void 0&&(se==="instanceMatrix"&&J.instanceMatrix&&(Ie=J.instanceMatrix),se==="instanceColor"&&J.instanceColor&&(Ie=J.instanceColor)),xe===void 0||xe.attribute!==Ie||Ie&&xe.data!==Ie.data)return!0;ve++}return h.attributesNum!==ve||h.index!==le}function P(J,Q,_e,le){const he={},de=Q.attributes;let ve=0;const Fe=_e.getAttributes();for(const se in Fe)if(Fe[se].location>=0){let xe=de[se];xe===void 0&&(se==="instanceMatrix"&&J.instanceMatrix&&(xe=J.instanceMatrix),se==="instanceColor"&&J.instanceColor&&(xe=J.instanceColor));const Ie={};Ie.attribute=xe,xe&&xe.data&&(Ie.data=xe.data),he[se]=Ie,ve++}h.attributes=he,h.attributesNum=ve,h.index=le}function T(){const J=h.newAttributes;for(let Q=0,_e=J.length;Q<_e;Q++)J[Q]=0}function D(J){d(J,0)}function d(J,Q){const _e=h.newAttributes,le=h.enabledAttributes,he=h.attributeDivisors;_e[J]=1,le[J]===0&&(r.enableVertexAttribArray(J),le[J]=1),he[J]!==Q&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](J,Q),he[J]=Q)}function B(){const J=h.newAttributes,Q=h.enabledAttributes;for(let _e=0,le=Q.length;_e<le;_e++)Q[_e]!==J[_e]&&(r.disableVertexAttribArray(_e),Q[_e]=0)}function z(J,Q,_e,le,he,de,ve){ve===!0?r.vertexAttribIPointer(J,Q,_e,he,de):r.vertexAttribPointer(J,Q,_e,le,he,de)}function X(J,Q,_e,le){if(n.isWebGL2===!1&&(J.isInstancedMesh||le.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;T();const he=le.attributes,de=_e.getAttributes(),ve=Q.defaultAttributeValues;for(const Fe in de){const se=de[Fe];if(se.location>=0){let Se=he[Fe];if(Se===void 0&&(Fe==="instanceMatrix"&&J.instanceMatrix&&(Se=J.instanceMatrix),Fe==="instanceColor"&&J.instanceColor&&(Se=J.instanceColor)),Se!==void 0){const xe=Se.normalized,Ie=Se.itemSize,Ce=t.get(Se);if(Ce===void 0)continue;const Xe=Ce.buffer,dt=Ce.type,Ze=Ce.bytesPerElement,bt=n.isWebGL2===!0&&(dt===r.INT||dt===r.UNSIGNED_INT||Se.gpuType===Xu);if(Se.isInterleavedBufferAttribute){const lt=Se.data,K=lt.stride,Ne=Se.offset;if(lt.isInstancedInterleavedBuffer){for(let ke=0;ke<se.locationSize;ke++)d(se.location+ke,lt.meshPerAttribute);J.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ke=0;ke<se.locationSize;ke++)D(se.location+ke);r.bindBuffer(r.ARRAY_BUFFER,Xe);for(let ke=0;ke<se.locationSize;ke++)z(se.location+ke,Ie/se.locationSize,dt,xe,K*Ze,(Ne+Ie/se.locationSize*ke)*Ze,bt)}else{if(Se.isInstancedBufferAttribute){for(let lt=0;lt<se.locationSize;lt++)d(se.location+lt,Se.meshPerAttribute);J.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let lt=0;lt<se.locationSize;lt++)D(se.location+lt);r.bindBuffer(r.ARRAY_BUFFER,Xe);for(let lt=0;lt<se.locationSize;lt++)z(se.location+lt,Ie/se.locationSize,dt,xe,Ie*Ze,Ie/se.locationSize*lt*Ze,bt)}}else if(ve!==void 0){const xe=ve[Fe];if(xe!==void 0)switch(xe.length){case 2:r.vertexAttrib2fv(se.location,xe);break;case 3:r.vertexAttrib3fv(se.location,xe);break;case 4:r.vertexAttrib4fv(se.location,xe);break;default:r.vertexAttrib1fv(se.location,xe)}}}}B()}function R(){pe();for(const J in c){const Q=c[J];for(const _e in Q){const le=Q[_e];for(const he in le)M(le[he].object),delete le[he];delete Q[_e]}delete c[J]}}function U(J){if(c[J.id]===void 0)return;const Q=c[J.id];for(const _e in Q){const le=Q[_e];for(const he in le)M(le[he].object),delete le[he];delete Q[_e]}delete c[J.id]}function ie(J){for(const Q in c){const _e=c[Q];if(_e[J.id]===void 0)continue;const le=_e[J.id];for(const he in le)M(le[he].object),delete le[he];delete _e[J.id]}}function pe(){q(),f=!0,h!==l&&(h=l,x(h.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:pe,resetDefaultState:q,dispose:R,releaseStatesOfGeometry:U,releaseStatesOfProgram:ie,initAttributes:T,enableAttribute:D,disableUnusedAttributes:B}}function Eg(r,e,t,n){const i=n.isWebGL2;let s;function a(h){s=h}function c(h,f){r.drawArrays(s,h,f),t.update(f,s,1)}function l(h,f,p){if(p===0)return;let g,x;if(i)g=r,x="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[x](s,h,f,p),t.update(f,s,p)}this.setMode=a,this.render=c,this.renderInstances=l}function Tg(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const l=s(c);l!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",l,"instead."),c=l);const h=a||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),E=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,D=a||e.has("OES_texture_float"),d=T&&D,B=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:s,precision:c,logarithmicDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:M,maxAttributes:E,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:P,vertexTextures:T,floatFragmentTextures:D,floatVertexTextures:d,maxSamples:B}}function bg(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new ar,c=new vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,g){const x=p.length!==0||g||n!==0||i;return i=g,n=p.length,x},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,g){t=f(p,g,0)},this.setState=function(p,g,x){const M=p.clippingPlanes,E=p.clipIntersection,y=p.clipShadows,v=r.get(p);if(!i||M===null||M.length===0||s&&!y)s?f(null):h();else{const P=s?0:n,T=P*4;let D=v.clippingState||null;l.value=D,D=f(M,g,T,x);for(let d=0;d!==T;++d)D[d]=t[d];v.clippingState=D,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=P}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(p,g,x,M){const E=p!==null?p.length:0;let y=null;if(E!==0){if(y=l.value,M!==!0||y===null){const v=x+E*4,P=g.matrixWorldInverse;c.getNormalMatrix(P),(y===null||y.length<v)&&(y=new Float32Array(v));for(let T=0,D=x;T!==E;++T,D+=4)a.copy(p[T]).applyMatrix4(P,c),a.normal.toArray(y,D),y[D+3]=a.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}function Ag(r){let e=new WeakMap;function t(a,c){return c===ja?a.mapping=es:c===qa&&(a.mapping=ts),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const c=a.mapping;if(c===ja||c===qa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const h=new Gf(l.height/2);return h.fromEquirectangularTexture(r,a),e.set(a,h),a.addEventListener("dispose",i),t(h.texture,a.mapping)}else return null}}return a}function i(a){const c=a.target;c.removeEventListener("dispose",i);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class hc extends uh{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,c=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,c-=f*this.view.offsetY,l=c-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,c,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qr=4,Hl=[.125,.215,.35,.446,.526,.582],lr=20,Pa=new hc,zl=new rt;let Da=null;const cr=(1+Math.sqrt(5))/2,Gr=1/cr,Gl=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,cr,Gr),new H(0,cr,-Gr),new H(Gr,0,cr),new H(-Gr,0,cr),new H(cr,Gr,0),new H(-cr,Gr,0)];class Vl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Da=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Da),e.scissorTest=!1,yo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Da=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Is,format:$n,colorSpace:hi,depthBuffer:!1},i=Wl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wg(s)),this._blurMaterial=Rg(s,e,t)}return i}_compileMaterial(e){const t=new Tn(this._lodPlanes[0],e);this._renderer.compile(t,Pa)}_sceneToCubeUV(e,t,n,i){const c=new En(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,g=f.toneMapping;f.getClearColor(zl),f.toneMapping=Ii,f.autoClear=!1;const x=new si({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),M=new Tn(new as,x);let E=!1;const y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,E=!0):(x.color.copy(zl),E=!0);for(let v=0;v<6;v++){const P=v%3;P===0?(c.up.set(0,l[v],0),c.lookAt(h[v],0,0)):P===1?(c.up.set(0,0,l[v]),c.lookAt(0,h[v],0)):(c.up.set(0,l[v],0),c.lookAt(0,0,h[v]));const T=this._cubeSize;yo(i,P*T,v>2?T:0,T,T),f.setRenderTarget(i),E&&f.render(M,c),f.render(e,c)}M.geometry.dispose(),M.material.dispose(),f.toneMapping=g,f.autoClear=p,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===es||e.mapping===ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xl());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Tn(this._lodPlanes[0],s),c=s.uniforms;c.envMap.value=e;const l=this._cubeSize;yo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Pa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Gl[(i-1)%Gl.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,c){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new Tn(this._lodPlanes[i],h),g=h.uniforms,x=this._sizeLods[n]-1,M=isFinite(s)?Math.PI/(2*x):2*Math.PI/(2*lr-1),E=s/M,y=isFinite(s)?1+Math.floor(f*E):lr;y>lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${lr}`);const v=[];let P=0;for(let z=0;z<lr;++z){const X=z/E,R=Math.exp(-X*X/2);v.push(R),z===0?P+=R:z<y&&(P+=2*R)}for(let z=0;z<v.length;z++)v[z]=v[z]/P;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=v,g.latitudinal.value=a==="latitudinal",c&&(g.poleAxis.value=c);const{_lodMax:T}=this;g.dTheta.value=M,g.mipInt.value=T-n;const D=this._sizeLods[i],d=3*D*(i>T-qr?i-T+qr:0),B=4*(this._cubeSize-D);yo(t,d,B,3*D,2*D),l.setRenderTarget(t),l.render(p,Pa)}}function wg(r){const e=[],t=[],n=[];let i=r;const s=r-qr+1+Hl.length;for(let a=0;a<s;a++){const c=Math.pow(2,i);t.push(c);let l=1/c;a>r-qr?l=Hl[a-r+qr-1]:a===0&&(l=0),n.push(l);const h=1/(c-2),f=-h,p=1+h,g=[f,f,p,f,p,p,f,f,p,p,f,p],x=6,M=6,E=3,y=2,v=1,P=new Float32Array(E*M*x),T=new Float32Array(y*M*x),D=new Float32Array(v*M*x);for(let B=0;B<x;B++){const z=B%3*2/3-1,X=B>2?0:-1,R=[z,X,0,z+2/3,X,0,z+2/3,X+1,0,z,X,0,z+2/3,X+1,0,z,X+1,0];P.set(R,E*M*B),T.set(g,y*M*B);const U=[B,B,B,B,B,B];D.set(U,v*M*B)}const d=new Pn;d.setAttribute("position",new bn(P,E)),d.setAttribute("uv",new bn(T,y)),d.setAttribute("faceIndex",new bn(D,v)),e.push(d),i>qr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wl(r,e,t){const n=new gr(r,e,t);return n.texture.mapping=zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Rg(r,e,t){const n=new Float32Array(lr),i=new H(0,1,0);return new _r({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:dc(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Xl(){return new _r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function jl(){return new _r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function dc(){return`

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
	`}function Cg(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const l=c.mapping,h=l===ja||l===qa,f=l===es||l===ts;if(h||f)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let p=e.get(c);return t===null&&(t=new Vl(r)),p=h?t.fromEquirectangular(c,p):t.fromCubemap(c,p),e.set(c,p),p.texture}else{if(e.has(c))return e.get(c).texture;{const p=c.image;if(h&&p&&p.height>0||f&&p&&i(p)){t===null&&(t=new Vl(r));const g=h?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,g),c.addEventListener("dispose",s),g.texture}else return null}}}return c}function i(c){let l=0;const h=6;for(let f=0;f<h;f++)c[f]!==void 0&&l++;return l===h}function s(c){const l=c.target;l.removeEventListener("dispose",s);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Lg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Pg(r,e,t,n){const i={},s=new WeakMap;function a(p){const g=p.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);for(const M in g.morphAttributes){const E=g.morphAttributes[M];for(let y=0,v=E.length;y<v;y++)e.remove(E[y])}g.removeEventListener("dispose",a),delete i[g.id];const x=s.get(g);x&&(e.remove(x),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(p,g){return i[g.id]===!0||(g.addEventListener("dispose",a),i[g.id]=!0,t.memory.geometries++),g}function l(p){const g=p.attributes;for(const M in g)e.update(g[M],r.ARRAY_BUFFER);const x=p.morphAttributes;for(const M in x){const E=x[M];for(let y=0,v=E.length;y<v;y++)e.update(E[y],r.ARRAY_BUFFER)}}function h(p){const g=[],x=p.index,M=p.attributes.position;let E=0;if(x!==null){const P=x.array;E=x.version;for(let T=0,D=P.length;T<D;T+=3){const d=P[T+0],B=P[T+1],z=P[T+2];g.push(d,B,B,z,z,d)}}else{const P=M.array;E=M.version;for(let T=0,D=P.length/3-1;T<D;T+=3){const d=T+0,B=T+1,z=T+2;g.push(d,B,B,z,z,d)}}const y=new(nh(g)?ch:ah)(g,1);y.version=E;const v=s.get(p);v&&e.remove(v),s.set(p,y)}function f(p){const g=s.get(p);if(g){const x=p.index;x!==null&&g.version<x.version&&h(p)}else h(p);return s.get(p)}return{get:c,update:l,getWireframeAttribute:f}}function Dg(r,e,t,n){const i=n.isWebGL2;let s;function a(g){s=g}let c,l;function h(g){c=g.type,l=g.bytesPerElement}function f(g,x){r.drawElements(s,x,c,g*l),t.update(x,s,1)}function p(g,x,M){if(M===0)return;let E,y;if(i)E=r,y="drawElementsInstanced";else if(E=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",E===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}E[y](s,x,c,g*l,M),t.update(x,s,M)}this.setMode=a,this.setIndex=h,this.render=f,this.renderInstances=p}function Ig(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,c){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=c*(s/3);break;case r.LINES:t.lines+=c*(s/2);break;case r.LINE_STRIP:t.lines+=c*(s-1);break;case r.LINE_LOOP:t.lines+=c*s;break;case r.POINTS:t.points+=c*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ng(r,e){return r[0]-e[0]}function Ug(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Og(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new Ot,c=[];for(let h=0;h<8;h++)c[h]=[h,0];function l(h,f,p){const g=h.morphTargetInfluences;if(e.isWebGL2===!0){const x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,M=x!==void 0?x.length:0;let E=s.get(f);if(E===void 0||E.count!==M){let J=function(){pe.dispose(),s.delete(f),f.removeEventListener("dispose",J)};E!==void 0&&E.texture.dispose();const P=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,D=f.morphAttributes.color!==void 0,d=f.morphAttributes.position||[],B=f.morphAttributes.normal||[],z=f.morphAttributes.color||[];let X=0;P===!0&&(X=1),T===!0&&(X=2),D===!0&&(X=3);let R=f.attributes.position.count*X,U=1;R>e.maxTextureSize&&(U=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const ie=new Float32Array(R*U*4*M),pe=new sh(ie,R,U,M);pe.type=Li,pe.needsUpdate=!0;const q=X*4;for(let Q=0;Q<M;Q++){const _e=d[Q],le=B[Q],he=z[Q],de=R*U*4*Q;for(let ve=0;ve<_e.count;ve++){const Fe=ve*q;P===!0&&(a.fromBufferAttribute(_e,ve),ie[de+Fe+0]=a.x,ie[de+Fe+1]=a.y,ie[de+Fe+2]=a.z,ie[de+Fe+3]=0),T===!0&&(a.fromBufferAttribute(le,ve),ie[de+Fe+4]=a.x,ie[de+Fe+5]=a.y,ie[de+Fe+6]=a.z,ie[de+Fe+7]=0),D===!0&&(a.fromBufferAttribute(he,ve),ie[de+Fe+8]=a.x,ie[de+Fe+9]=a.y,ie[de+Fe+10]=a.z,ie[de+Fe+11]=he.itemSize===4?a.w:1)}}E={count:M,texture:pe,size:new nt(R,U)},s.set(f,E),f.addEventListener("dispose",J)}let y=0;for(let P=0;P<g.length;P++)y+=g[P];const v=f.morphTargetsRelative?1:1-y;p.getUniforms().setValue(r,"morphTargetBaseInfluence",v),p.getUniforms().setValue(r,"morphTargetInfluences",g),p.getUniforms().setValue(r,"morphTargetsTexture",E.texture,t),p.getUniforms().setValue(r,"morphTargetsTextureSize",E.size)}else{const x=g===void 0?0:g.length;let M=n[f.id];if(M===void 0||M.length!==x){M=[];for(let T=0;T<x;T++)M[T]=[T,0];n[f.id]=M}for(let T=0;T<x;T++){const D=M[T];D[0]=T,D[1]=g[T]}M.sort(Ug);for(let T=0;T<8;T++)T<x&&M[T][1]?(c[T][0]=M[T][0],c[T][1]=M[T][1]):(c[T][0]=Number.MAX_SAFE_INTEGER,c[T][1]=0);c.sort(Ng);const E=f.morphAttributes.position,y=f.morphAttributes.normal;let v=0;for(let T=0;T<8;T++){const D=c[T],d=D[0],B=D[1];d!==Number.MAX_SAFE_INTEGER&&B?(E&&f.getAttribute("morphTarget"+T)!==E[d]&&f.setAttribute("morphTarget"+T,E[d]),y&&f.getAttribute("morphNormal"+T)!==y[d]&&f.setAttribute("morphNormal"+T,y[d]),i[T]=B,v+=B):(E&&f.hasAttribute("morphTarget"+T)===!0&&f.deleteAttribute("morphTarget"+T),y&&f.hasAttribute("morphNormal"+T)===!0&&f.deleteAttribute("morphNormal"+T),i[T]=0)}const P=f.morphTargetsRelative?1:1-v;p.getUniforms().setValue(r,"morphTargetBaseInfluence",P),p.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Fg(r,e,t,n){let i=new WeakMap;function s(l){const h=n.render.frame,f=l.geometry,p=e.get(l,f);return i.get(p)!==h&&(e.update(p),i.set(p,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER)),p}function a(){i=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:a}}const fh=new dn,ph=new sh,mh=new Af,gh=new hh,ql=[],Yl=[],Kl=new Float32Array(16),$l=new Float32Array(9),Zl=new Float32Array(4);function cs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=ql[i];if(s===void 0&&(s=new Float32Array(i),ql[i]=s),e!==0){n.toArray(s,0);for(let a=1,c=0;a!==e;++a)c+=t,r[a].toArray(s,c)}return s}function an(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function cn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Wo(r,e){let t=Yl[e];t===void 0&&(t=new Int32Array(e),Yl[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Bg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function kg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2fv(this.addr,e),cn(t,e)}}function Hg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;r.uniform3fv(this.addr,e),cn(t,e)}}function zg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4fv(this.addr,e),cn(t,e)}}function Gg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(an(t,n))return;Zl.set(n),r.uniformMatrix2fv(this.addr,!1,Zl),cn(t,n)}}function Vg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(an(t,n))return;$l.set(n),r.uniformMatrix3fv(this.addr,!1,$l),cn(t,n)}}function Wg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(an(t,n))return;Kl.set(n),r.uniformMatrix4fv(this.addr,!1,Kl),cn(t,n)}}function Xg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function jg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2iv(this.addr,e),cn(t,e)}}function qg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3iv(this.addr,e),cn(t,e)}}function Yg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4iv(this.addr,e),cn(t,e)}}function Kg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function $g(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2uiv(this.addr,e),cn(t,e)}}function Zg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3uiv(this.addr,e),cn(t,e)}}function Jg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4uiv(this.addr,e),cn(t,e)}}function Qg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||fh,i)}function e_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||mh,i)}function t_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||gh,i)}function n_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ph,i)}function i_(r){switch(r){case 5126:return Bg;case 35664:return kg;case 35665:return Hg;case 35666:return zg;case 35674:return Gg;case 35675:return Vg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return jg;case 35668:case 35672:return qg;case 35669:case 35673:return Yg;case 5125:return Kg;case 36294:return $g;case 36295:return Zg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return n_}}function r_(r,e){r.uniform1fv(this.addr,e)}function s_(r,e){const t=cs(e,this.size,2);r.uniform2fv(this.addr,t)}function o_(r,e){const t=cs(e,this.size,3);r.uniform3fv(this.addr,t)}function a_(r,e){const t=cs(e,this.size,4);r.uniform4fv(this.addr,t)}function c_(r,e){const t=cs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function l_(r,e){const t=cs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function u_(r,e){const t=cs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function h_(r,e){r.uniform1iv(this.addr,e)}function d_(r,e){r.uniform2iv(this.addr,e)}function f_(r,e){r.uniform3iv(this.addr,e)}function p_(r,e){r.uniform4iv(this.addr,e)}function m_(r,e){r.uniform1uiv(this.addr,e)}function g_(r,e){r.uniform2uiv(this.addr,e)}function __(r,e){r.uniform3uiv(this.addr,e)}function v_(r,e){r.uniform4uiv(this.addr,e)}function x_(r,e,t){const n=this.cache,i=e.length,s=Wo(t,i);an(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||fh,s[a])}function y_(r,e,t){const n=this.cache,i=e.length,s=Wo(t,i);an(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||mh,s[a])}function M_(r,e,t){const n=this.cache,i=e.length,s=Wo(t,i);an(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||gh,s[a])}function S_(r,e,t){const n=this.cache,i=e.length,s=Wo(t,i);an(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||ph,s[a])}function E_(r){switch(r){case 5126:return r_;case 35664:return s_;case 35665:return o_;case 35666:return a_;case 35674:return c_;case 35675:return l_;case 35676:return u_;case 5124:case 35670:return h_;case 35667:case 35671:return d_;case 35668:case 35672:return f_;case 35669:case 35673:return p_;case 5125:return m_;case 36294:return g_;case 36295:return __;case 36296:return v_;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return y_;case 35680:case 36300:case 36308:case 36293:return M_;case 36289:case 36303:case 36311:case 36292:return S_}}class T_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=i_(t.type)}}class b_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=E_(t.type)}}class A_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const c=i[s];c.setValue(e,t[c.id],n)}}}const Ia=/(\w+)(\])?(\[|\.)?/g;function Jl(r,e){r.seq.push(e),r.map[e.id]=e}function w_(r,e,t){const n=r.name,i=n.length;for(Ia.lastIndex=0;;){const s=Ia.exec(n),a=Ia.lastIndex;let c=s[1];const l=s[2]==="]",h=s[3];if(l&&(c=c|0),h===void 0||h==="["&&a+2===i){Jl(t,h===void 0?new T_(c,r,e):new b_(c,r,e));break}else{let p=t.map[c];p===void 0&&(p=new A_(c),Jl(t,p)),t=p}}}class Do{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);w_(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const c=t[s],l=n[c.id];l.needsUpdate!==!1&&c.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Ql(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let R_=0;function C_(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const c=a+1;n.push(`${c===e?">":" "} ${c}: ${t[a]}`)}return n.join(`
`)}function L_(r){switch(r){case hi:return["Linear","( value )"];case at:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function eu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+C_(r.getShaderSource(e),a)}else return i}function P_(r,e){const t=L_(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function D_(r,e){let t;switch(e){case Ld:t="Linear";break;case Pd:t="Reinhard";break;case Dd:t="OptimizedCineon";break;case Id:t="ACESFilmic";break;case Nd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function I_(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Rs).join(`
`)}function N_(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function U_(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let c=1;s.type===r.FLOAT_MAT2&&(c=2),s.type===r.FLOAT_MAT3&&(c=3),s.type===r.FLOAT_MAT4&&(c=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:c}}return t}function Rs(r){return r!==""}function tu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const O_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qa(r){return r.replace(O_,F_)}function F_(r,e){const t=gt[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Qa(t)}const B_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iu(r){return r.replace(B_,k_)}function k_(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ru(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function H_(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ku?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===cd?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function z_(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case es:case ts:e="ENVMAP_TYPE_CUBE";break;case zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function G_(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ts:e="ENVMAP_MODE_REFRACTION";break}return e}function V_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Gu:e="ENVMAP_BLENDING_MULTIPLY";break;case Rd:e="ENVMAP_BLENDING_MIX";break;case Cd:e="ENVMAP_BLENDING_ADD";break}return e}function W_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function X_(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,c=t.fragmentShader;const l=H_(t),h=z_(t),f=G_(t),p=V_(t),g=W_(t),x=t.isWebGL2?"":I_(t),M=N_(s),E=i.createProgram();let y,v,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Rs).join(`
`),y.length>0&&(y+=`
`),v=[x,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Rs).join(`
`),v.length>0&&(v+=`
`)):(y=[ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),v=[x,ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?gt.tonemapping_pars_fragment:"",t.toneMapping!==Ii?D_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.encodings_pars_fragment,P_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rs).join(`
`)),a=Qa(a),a=tu(a,t),a=nu(a,t),c=Qa(c),c=tu(c,t),c=nu(c,t),a=iu(a),c=iu(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",t.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const T=P+y+a,D=P+v+c,d=Ql(i,i.VERTEX_SHADER,T),B=Ql(i,i.FRAGMENT_SHADER,D);if(i.attachShader(E,d),i.attachShader(E,B),t.index0AttributeName!==void 0?i.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(E,0,"position"),i.linkProgram(E),r.debug.checkShaderErrors){const R=i.getProgramInfoLog(E).trim(),U=i.getShaderInfoLog(d).trim(),ie=i.getShaderInfoLog(B).trim();let pe=!0,q=!0;if(i.getProgramParameter(E,i.LINK_STATUS)===!1)if(pe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,E,d,B);else{const J=eu(i,d,"vertex"),Q=eu(i,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(E,i.VALIDATE_STATUS)+`

Program Info Log: `+R+`
`+J+`
`+Q)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(U===""||ie==="")&&(q=!1);q&&(this.diagnostics={runnable:pe,programLog:R,vertexShader:{log:U,prefix:y},fragmentShader:{log:ie,prefix:v}})}i.deleteShader(d),i.deleteShader(B);let z;this.getUniforms=function(){return z===void 0&&(z=new Do(i,E)),z};let X;return this.getAttributes=function(){return X===void 0&&(X=U_(i,E)),X},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=R_++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=d,this.fragmentShader=B,this}let j_=0;class q_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Y_(e),t.set(e,n)),n}}class Y_{constructor(e){this.id=j_++,this.code=e,this.usedTimes=0}}function K_(r,e,t,n,i,s,a){const c=new lc,l=new q_,h=[],f=i.isWebGL2,p=i.logarithmicDepthBuffer,g=i.vertexTextures;let x=i.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(R){return R===0?"uv":`uv${R}`}function y(R,U,ie,pe,q){const J=pe.fog,Q=q.geometry,_e=R.isMeshStandardMaterial?pe.environment:null,le=(R.isMeshStandardMaterial?t:e).get(R.envMap||_e),he=le&&le.mapping===zo?le.image.height:null,de=M[R.type];R.precision!==null&&(x=i.getMaxPrecision(R.precision),x!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",x,"instead."));const ve=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Fe=ve!==void 0?ve.length:0;let se=0;Q.morphAttributes.position!==void 0&&(se=1),Q.morphAttributes.normal!==void 0&&(se=2),Q.morphAttributes.color!==void 0&&(se=3);let Se,xe,Ie,Ce;if(de){const Xt=li[de];Se=Xt.vertexShader,xe=Xt.fragmentShader}else Se=R.vertexShader,xe=R.fragmentShader,l.update(R),Ie=l.getVertexShaderID(R),Ce=l.getFragmentShaderID(R);const Xe=r.getRenderTarget(),dt=q.isInstancedMesh===!0,Ze=!!R.map,bt=!!R.matcap,lt=!!le,K=!!R.aoMap,Ne=!!R.lightMap,ke=!!R.bumpMap,ut=!!R.normalMap,je=!!R.displacementMap,Rt=!!R.emissiveMap,ft=!!R.metalnessMap,Je=!!R.roughnessMap,pt=R.anisotropy>0,Pt=R.clearcoat>0,Bt=R.iridescence>0,I=R.sheen>0,C=R.transmission>0,oe=pt&&!!R.anisotropyMap,Te=Pt&&!!R.clearcoatMap,Ee=Pt&&!!R.clearcoatNormalMap,N=Pt&&!!R.clearcoatRoughnessMap,me=Bt&&!!R.iridescenceMap,ye=Bt&&!!R.iridescenceThicknessMap,re=I&&!!R.sheenColorMap,He=I&&!!R.sheenRoughnessMap,Oe=!!R.specularMap,Le=!!R.specularColorMap,ze=!!R.specularIntensityMap,Ge=C&&!!R.transmissionMap,Ke=C&&!!R.thicknessMap,_t=!!R.gradientMap,G=!!R.alphaMap,Re=R.alphaTest>0,ee=!!R.extensions,be=!!Q.attributes.uv1,Pe=!!Q.attributes.uv2,yt=!!Q.attributes.uv3;return{isWebGL2:f,shaderID:de,shaderType:R.type,shaderName:R.name,vertexShader:Se,fragmentShader:xe,defines:R.defines,customVertexShaderID:Ie,customFragmentShaderID:Ce,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:x,instancing:dt,instancingColor:dt&&q.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:Xe===null?r.outputColorSpace:Xe.isXRRenderTarget===!0?Xe.texture.colorSpace:hi,map:Ze,matcap:bt,envMap:lt,envMapMode:lt&&le.mapping,envMapCubeUVHeight:he,aoMap:K,lightMap:Ne,bumpMap:ke,normalMap:ut,displacementMap:g&&je,emissiveMap:Rt,normalMapObjectSpace:ut&&R.normalMapType===Yd,normalMapTangentSpace:ut&&R.normalMapType===Qu,metalnessMap:ft,roughnessMap:Je,anisotropy:pt,anisotropyMap:oe,clearcoat:Pt,clearcoatMap:Te,clearcoatNormalMap:Ee,clearcoatRoughnessMap:N,iridescence:Bt,iridescenceMap:me,iridescenceThicknessMap:ye,sheen:I,sheenColorMap:re,sheenRoughnessMap:He,specularMap:Oe,specularColorMap:Le,specularIntensityMap:ze,transmission:C,transmissionMap:Ge,thicknessMap:Ke,gradientMap:_t,opaque:R.transparent===!1&&R.blending===$r,alphaMap:G,alphaTest:Re,combine:R.combine,mapUv:Ze&&E(R.map.channel),aoMapUv:K&&E(R.aoMap.channel),lightMapUv:Ne&&E(R.lightMap.channel),bumpMapUv:ke&&E(R.bumpMap.channel),normalMapUv:ut&&E(R.normalMap.channel),displacementMapUv:je&&E(R.displacementMap.channel),emissiveMapUv:Rt&&E(R.emissiveMap.channel),metalnessMapUv:ft&&E(R.metalnessMap.channel),roughnessMapUv:Je&&E(R.roughnessMap.channel),anisotropyMapUv:oe&&E(R.anisotropyMap.channel),clearcoatMapUv:Te&&E(R.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&E(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:N&&E(R.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&E(R.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&E(R.iridescenceThicknessMap.channel),sheenColorMapUv:re&&E(R.sheenColorMap.channel),sheenRoughnessMapUv:He&&E(R.sheenRoughnessMap.channel),specularMapUv:Oe&&E(R.specularMap.channel),specularColorMapUv:Le&&E(R.specularColorMap.channel),specularIntensityMapUv:ze&&E(R.specularIntensityMap.channel),transmissionMapUv:Ge&&E(R.transmissionMap.channel),thicknessMapUv:Ke&&E(R.thicknessMap.channel),alphaMapUv:G&&E(R.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(ut||pt),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,vertexUv1s:be,vertexUv2s:Pe,vertexUv3s:yt,pointsUvs:q.isPoints===!0&&!!Q.attributes.uv&&(Ze||G),fog:!!J,useFog:R.fog===!0,fogExp2:J&&J.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:q.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:se,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:R.dithering,shadowMapEnabled:r.shadowMap.enabled&&ie.length>0,shadowMapType:r.shadowMap.type,toneMapping:R.toneMapped?r.toneMapping:Ii,useLegacyLights:r.useLegacyLights,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Yn,flipSided:R.side===Ln,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:ee&&R.extensions.derivatives===!0,extensionFragDepth:ee&&R.extensions.fragDepth===!0,extensionDrawBuffers:ee&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:ee&&R.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),customProgramCacheKey:R.customProgramCacheKey()}}function v(R){const U=[];if(R.shaderID?U.push(R.shaderID):(U.push(R.customVertexShaderID),U.push(R.customFragmentShaderID)),R.defines!==void 0)for(const ie in R.defines)U.push(ie),U.push(R.defines[ie]);return R.isRawShaderMaterial===!1&&(P(U,R),T(U,R),U.push(r.outputColorSpace)),U.push(R.customProgramCacheKey),U.join()}function P(R,U){R.push(U.precision),R.push(U.outputColorSpace),R.push(U.envMapMode),R.push(U.envMapCubeUVHeight),R.push(U.mapUv),R.push(U.alphaMapUv),R.push(U.lightMapUv),R.push(U.aoMapUv),R.push(U.bumpMapUv),R.push(U.normalMapUv),R.push(U.displacementMapUv),R.push(U.emissiveMapUv),R.push(U.metalnessMapUv),R.push(U.roughnessMapUv),R.push(U.anisotropyMapUv),R.push(U.clearcoatMapUv),R.push(U.clearcoatNormalMapUv),R.push(U.clearcoatRoughnessMapUv),R.push(U.iridescenceMapUv),R.push(U.iridescenceThicknessMapUv),R.push(U.sheenColorMapUv),R.push(U.sheenRoughnessMapUv),R.push(U.specularMapUv),R.push(U.specularColorMapUv),R.push(U.specularIntensityMapUv),R.push(U.transmissionMapUv),R.push(U.thicknessMapUv),R.push(U.combine),R.push(U.fogExp2),R.push(U.sizeAttenuation),R.push(U.morphTargetsCount),R.push(U.morphAttributeCount),R.push(U.numDirLights),R.push(U.numPointLights),R.push(U.numSpotLights),R.push(U.numSpotLightMaps),R.push(U.numHemiLights),R.push(U.numRectAreaLights),R.push(U.numDirLightShadows),R.push(U.numPointLightShadows),R.push(U.numSpotLightShadows),R.push(U.numSpotLightShadowsWithMaps),R.push(U.shadowMapType),R.push(U.toneMapping),R.push(U.numClippingPlanes),R.push(U.numClipIntersection),R.push(U.depthPacking)}function T(R,U){c.disableAll(),U.isWebGL2&&c.enable(0),U.supportsVertexTextures&&c.enable(1),U.instancing&&c.enable(2),U.instancingColor&&c.enable(3),U.matcap&&c.enable(4),U.envMap&&c.enable(5),U.normalMapObjectSpace&&c.enable(6),U.normalMapTangentSpace&&c.enable(7),U.clearcoat&&c.enable(8),U.iridescence&&c.enable(9),U.alphaTest&&c.enable(10),U.vertexColors&&c.enable(11),U.vertexAlphas&&c.enable(12),U.vertexUv1s&&c.enable(13),U.vertexUv2s&&c.enable(14),U.vertexUv3s&&c.enable(15),U.vertexTangents&&c.enable(16),U.anisotropy&&c.enable(17),R.push(c.mask),c.disableAll(),U.fog&&c.enable(0),U.useFog&&c.enable(1),U.flatShading&&c.enable(2),U.logarithmicDepthBuffer&&c.enable(3),U.skinning&&c.enable(4),U.morphTargets&&c.enable(5),U.morphNormals&&c.enable(6),U.morphColors&&c.enable(7),U.premultipliedAlpha&&c.enable(8),U.shadowMapEnabled&&c.enable(9),U.useLegacyLights&&c.enable(10),U.doubleSided&&c.enable(11),U.flipSided&&c.enable(12),U.useDepthPacking&&c.enable(13),U.dithering&&c.enable(14),U.transmission&&c.enable(15),U.sheen&&c.enable(16),U.opaque&&c.enable(17),U.pointsUvs&&c.enable(18),R.push(c.mask)}function D(R){const U=M[R.type];let ie;if(U){const pe=li[U];ie=Bf.clone(pe.uniforms)}else ie=R.uniforms;return ie}function d(R,U){let ie;for(let pe=0,q=h.length;pe<q;pe++){const J=h[pe];if(J.cacheKey===U){ie=J,++ie.usedTimes;break}}return ie===void 0&&(ie=new X_(r,U,R,s),h.push(ie)),ie}function B(R){if(--R.usedTimes===0){const U=h.indexOf(R);h[U]=h[h.length-1],h.pop(),R.destroy()}}function z(R){l.remove(R)}function X(){l.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:D,acquireProgram:d,releaseProgram:B,releaseShaderCache:z,programs:h,dispose:X}}function $_(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,c){r.get(s)[a]=c}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Z_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function su(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ou(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(p,g,x,M,E,y){let v=r[e];return v===void 0?(v={id:p.id,object:p,geometry:g,material:x,groupOrder:M,renderOrder:p.renderOrder,z:E,group:y},r[e]=v):(v.id=p.id,v.object=p,v.geometry=g,v.material=x,v.groupOrder=M,v.renderOrder=p.renderOrder,v.z=E,v.group=y),e++,v}function c(p,g,x,M,E,y){const v=a(p,g,x,M,E,y);x.transmission>0?n.push(v):x.transparent===!0?i.push(v):t.push(v)}function l(p,g,x,M,E,y){const v=a(p,g,x,M,E,y);x.transmission>0?n.unshift(v):x.transparent===!0?i.unshift(v):t.unshift(v)}function h(p,g){t.length>1&&t.sort(p||Z_),n.length>1&&n.sort(g||su),i.length>1&&i.sort(g||su)}function f(){for(let p=e,g=r.length;p<g;p++){const x=r[p];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:f,sort:h}}function J_(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new ou,r.set(n,[a])):i>=s.length?(a=new ou,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Q_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new rt};break;case"SpotLight":t={position:new H,direction:new H,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new H,halfWidth:new H,halfHeight:new H};break}return r[e.id]=t,t}}}function e0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let t0=0;function n0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function i0(r,e){const t=new Q_,n=e0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)i.probe.push(new H);const s=new H,a=new xt,c=new xt;function l(f,p){let g=0,x=0,M=0;for(let ie=0;ie<9;ie++)i.probe[ie].set(0,0,0);let E=0,y=0,v=0,P=0,T=0,D=0,d=0,B=0,z=0,X=0;f.sort(n0);const R=p===!0?Math.PI:1;for(let ie=0,pe=f.length;ie<pe;ie++){const q=f[ie],J=q.color,Q=q.intensity,_e=q.distance,le=q.shadow&&q.shadow.map?q.shadow.map.texture:null;if(q.isAmbientLight)g+=J.r*Q*R,x+=J.g*Q*R,M+=J.b*Q*R;else if(q.isLightProbe)for(let he=0;he<9;he++)i.probe[he].addScaledVector(q.sh.coefficients[he],Q);else if(q.isDirectionalLight){const he=t.get(q);if(he.color.copy(q.color).multiplyScalar(q.intensity*R),q.castShadow){const de=q.shadow,ve=n.get(q);ve.shadowBias=de.bias,ve.shadowNormalBias=de.normalBias,ve.shadowRadius=de.radius,ve.shadowMapSize=de.mapSize,i.directionalShadow[E]=ve,i.directionalShadowMap[E]=le,i.directionalShadowMatrix[E]=q.shadow.matrix,D++}i.directional[E]=he,E++}else if(q.isSpotLight){const he=t.get(q);he.position.setFromMatrixPosition(q.matrixWorld),he.color.copy(J).multiplyScalar(Q*R),he.distance=_e,he.coneCos=Math.cos(q.angle),he.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),he.decay=q.decay,i.spot[v]=he;const de=q.shadow;if(q.map&&(i.spotLightMap[z]=q.map,z++,de.updateMatrices(q),q.castShadow&&X++),i.spotLightMatrix[v]=de.matrix,q.castShadow){const ve=n.get(q);ve.shadowBias=de.bias,ve.shadowNormalBias=de.normalBias,ve.shadowRadius=de.radius,ve.shadowMapSize=de.mapSize,i.spotShadow[v]=ve,i.spotShadowMap[v]=le,B++}v++}else if(q.isRectAreaLight){const he=t.get(q);he.color.copy(J).multiplyScalar(Q),he.halfWidth.set(q.width*.5,0,0),he.halfHeight.set(0,q.height*.5,0),i.rectArea[P]=he,P++}else if(q.isPointLight){const he=t.get(q);if(he.color.copy(q.color).multiplyScalar(q.intensity*R),he.distance=q.distance,he.decay=q.decay,q.castShadow){const de=q.shadow,ve=n.get(q);ve.shadowBias=de.bias,ve.shadowNormalBias=de.normalBias,ve.shadowRadius=de.radius,ve.shadowMapSize=de.mapSize,ve.shadowCameraNear=de.camera.near,ve.shadowCameraFar=de.camera.far,i.pointShadow[y]=ve,i.pointShadowMap[y]=le,i.pointShadowMatrix[y]=q.shadow.matrix,d++}i.point[y]=he,y++}else if(q.isHemisphereLight){const he=t.get(q);he.skyColor.copy(q.color).multiplyScalar(Q*R),he.groundColor.copy(q.groundColor).multiplyScalar(Q*R),i.hemi[T]=he,T++}}P>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=g,i.ambient[1]=x,i.ambient[2]=M;const U=i.hash;(U.directionalLength!==E||U.pointLength!==y||U.spotLength!==v||U.rectAreaLength!==P||U.hemiLength!==T||U.numDirectionalShadows!==D||U.numPointShadows!==d||U.numSpotShadows!==B||U.numSpotMaps!==z)&&(i.directional.length=E,i.spot.length=v,i.rectArea.length=P,i.point.length=y,i.hemi.length=T,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.pointShadow.length=d,i.pointShadowMap.length=d,i.spotShadow.length=B,i.spotShadowMap.length=B,i.directionalShadowMatrix.length=D,i.pointShadowMatrix.length=d,i.spotLightMatrix.length=B+z-X,i.spotLightMap.length=z,i.numSpotLightShadowsWithMaps=X,U.directionalLength=E,U.pointLength=y,U.spotLength=v,U.rectAreaLength=P,U.hemiLength=T,U.numDirectionalShadows=D,U.numPointShadows=d,U.numSpotShadows=B,U.numSpotMaps=z,i.version=t0++)}function h(f,p){let g=0,x=0,M=0,E=0,y=0;const v=p.matrixWorldInverse;for(let P=0,T=f.length;P<T;P++){const D=f[P];if(D.isDirectionalLight){const d=i.directional[g];d.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),d.direction.sub(s),d.direction.transformDirection(v),g++}else if(D.isSpotLight){const d=i.spot[M];d.position.setFromMatrixPosition(D.matrixWorld),d.position.applyMatrix4(v),d.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),d.direction.sub(s),d.direction.transformDirection(v),M++}else if(D.isRectAreaLight){const d=i.rectArea[E];d.position.setFromMatrixPosition(D.matrixWorld),d.position.applyMatrix4(v),c.identity(),a.copy(D.matrixWorld),a.premultiply(v),c.extractRotation(a),d.halfWidth.set(D.width*.5,0,0),d.halfHeight.set(0,D.height*.5,0),d.halfWidth.applyMatrix4(c),d.halfHeight.applyMatrix4(c),E++}else if(D.isPointLight){const d=i.point[x];d.position.setFromMatrixPosition(D.matrixWorld),d.position.applyMatrix4(v),x++}else if(D.isHemisphereLight){const d=i.hemi[y];d.direction.setFromMatrixPosition(D.matrixWorld),d.direction.transformDirection(v),y++}}}return{setup:l,setupView:h,state:i}}function au(r,e){const t=new i0(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(p){n.push(p)}function c(p){i.push(p)}function l(p){t.setup(n,p)}function h(p){t.setupView(n,p)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:h,pushLight:a,pushShadow:c}}function r0(r,e){let t=new WeakMap;function n(s,a=0){const c=t.get(s);let l;return c===void 0?(l=new au(r,e),t.set(s,[l])):a>=c.length?(l=new au(r,e),c.push(l)):l=c[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class s0 extends ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class o0 extends ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const a0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c0=`uniform sampler2D shadow_pass;
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
}`;function l0(r,e,t){let n=new uc;const i=new nt,s=new nt,a=new Ot,c=new s0({depthPacking:qd}),l=new o0,h={},f=t.maxTextureSize,p={[Ui]:Ln,[Ln]:Ui,[Yn]:Yn},g=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:a0,fragmentShader:c0}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const M=new Pn;M.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Tn(M,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ku;let v=this.type;this.render=function(d,B,z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||d.length===0)return;const X=r.getRenderTarget(),R=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),ie=r.state;ie.setBlending(ji),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const pe=v!==Ci&&this.type===Ci,q=v===Ci&&this.type!==Ci;for(let J=0,Q=d.length;J<Q;J++){const _e=d[J],le=_e.shadow;if(le===void 0){console.warn("THREE.WebGLShadowMap:",_e,"has no shadow.");continue}if(le.autoUpdate===!1&&le.needsUpdate===!1)continue;i.copy(le.mapSize);const he=le.getFrameExtents();if(i.multiply(he),s.copy(le.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/he.x),i.x=s.x*he.x,le.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/he.y),i.y=s.y*he.y,le.mapSize.y=s.y)),le.map===null||pe===!0||q===!0){const ve=this.type!==Ci?{minFilter:on,magFilter:on}:{};le.map!==null&&le.map.dispose(),le.map=new gr(i.x,i.y,ve),le.map.texture.name=_e.name+".shadowMap",le.camera.updateProjectionMatrix()}r.setRenderTarget(le.map),r.clear();const de=le.getViewportCount();for(let ve=0;ve<de;ve++){const Fe=le.getViewport(ve);a.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),ie.viewport(a),le.updateMatrices(_e,ve),n=le.getFrustum(),D(B,z,le.camera,_e,this.type)}le.isPointLightShadow!==!0&&this.type===Ci&&P(le,z),le.needsUpdate=!1}v=this.type,y.needsUpdate=!1,r.setRenderTarget(X,R,U)};function P(d,B){const z=e.update(E);g.defines.VSM_SAMPLES!==d.blurSamples&&(g.defines.VSM_SAMPLES=d.blurSamples,x.defines.VSM_SAMPLES=d.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),d.mapPass===null&&(d.mapPass=new gr(i.x,i.y)),g.uniforms.shadow_pass.value=d.map.texture,g.uniforms.resolution.value=d.mapSize,g.uniforms.radius.value=d.radius,r.setRenderTarget(d.mapPass),r.clear(),r.renderBufferDirect(B,null,z,g,E,null),x.uniforms.shadow_pass.value=d.mapPass.texture,x.uniforms.resolution.value=d.mapSize,x.uniforms.radius.value=d.radius,r.setRenderTarget(d.map),r.clear(),r.renderBufferDirect(B,null,z,x,E,null)}function T(d,B,z,X){let R=null;const U=z.isPointLight===!0?d.customDistanceMaterial:d.customDepthMaterial;if(U!==void 0)R=U;else if(R=z.isPointLight===!0?l:c,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const ie=R.uuid,pe=B.uuid;let q=h[ie];q===void 0&&(q={},h[ie]=q);let J=q[pe];J===void 0&&(J=R.clone(),q[pe]=J),R=J}if(R.visible=B.visible,R.wireframe=B.wireframe,X===Ci?R.side=B.shadowSide!==null?B.shadowSide:B.side:R.side=B.shadowSide!==null?B.shadowSide:p[B.side],R.alphaMap=B.alphaMap,R.alphaTest=B.alphaTest,R.map=B.map,R.clipShadows=B.clipShadows,R.clippingPlanes=B.clippingPlanes,R.clipIntersection=B.clipIntersection,R.displacementMap=B.displacementMap,R.displacementScale=B.displacementScale,R.displacementBias=B.displacementBias,R.wireframeLinewidth=B.wireframeLinewidth,R.linewidth=B.linewidth,z.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ie=r.properties.get(R);ie.light=z}return R}function D(d,B,z,X,R){if(d.visible===!1)return;if(d.layers.test(B.layers)&&(d.isMesh||d.isLine||d.isPoints)&&(d.castShadow||d.receiveShadow&&R===Ci)&&(!d.frustumCulled||n.intersectsObject(d))){d.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,d.matrixWorld);const pe=e.update(d),q=d.material;if(Array.isArray(q)){const J=pe.groups;for(let Q=0,_e=J.length;Q<_e;Q++){const le=J[Q],he=q[le.materialIndex];if(he&&he.visible){const de=T(d,he,X,R);r.renderBufferDirect(z,null,pe,de,d,le)}}}else if(q.visible){const J=T(d,q,X,R);r.renderBufferDirect(z,null,pe,J,d,null)}}const ie=d.children;for(let pe=0,q=ie.length;pe<q;pe++)D(ie[pe],B,z,X,R)}}function u0(r,e,t){const n=t.isWebGL2;function i(){let G=!1;const Re=new Ot;let ee=null;const be=new Ot(0,0,0,0);return{setMask:function(Pe){ee!==Pe&&!G&&(r.colorMask(Pe,Pe,Pe,Pe),ee=Pe)},setLocked:function(Pe){G=Pe},setClear:function(Pe,yt,Dt,Xt,gi){gi===!0&&(Pe*=Xt,yt*=Xt,Dt*=Xt),Re.set(Pe,yt,Dt,Xt),be.equals(Re)===!1&&(r.clearColor(Pe,yt,Dt,Xt),be.copy(Re))},reset:function(){G=!1,ee=null,be.set(-1,0,0,0)}}}function s(){let G=!1,Re=null,ee=null,be=null;return{setTest:function(Pe){Pe?Xe(r.DEPTH_TEST):dt(r.DEPTH_TEST)},setMask:function(Pe){Re!==Pe&&!G&&(r.depthMask(Pe),Re=Pe)},setFunc:function(Pe){if(ee!==Pe){switch(Pe){case Md:r.depthFunc(r.NEVER);break;case Sd:r.depthFunc(r.ALWAYS);break;case Ed:r.depthFunc(r.LESS);break;case Xa:r.depthFunc(r.LEQUAL);break;case Td:r.depthFunc(r.EQUAL);break;case bd:r.depthFunc(r.GEQUAL);break;case Ad:r.depthFunc(r.GREATER);break;case wd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ee=Pe}},setLocked:function(Pe){G=Pe},setClear:function(Pe){be!==Pe&&(r.clearDepth(Pe),be=Pe)},reset:function(){G=!1,Re=null,ee=null,be=null}}}function a(){let G=!1,Re=null,ee=null,be=null,Pe=null,yt=null,Dt=null,Xt=null,gi=null;return{setTest:function(kt){G||(kt?Xe(r.STENCIL_TEST):dt(r.STENCIL_TEST))},setMask:function(kt){Re!==kt&&!G&&(r.stencilMask(kt),Re=kt)},setFunc:function(kt,Dn,pn){(ee!==kt||be!==Dn||Pe!==pn)&&(r.stencilFunc(kt,Dn,pn),ee=kt,be=Dn,Pe=pn)},setOp:function(kt,Dn,pn){(yt!==kt||Dt!==Dn||Xt!==pn)&&(r.stencilOp(kt,Dn,pn),yt=kt,Dt=Dn,Xt=pn)},setLocked:function(kt){G=kt},setClear:function(kt){gi!==kt&&(r.clearStencil(kt),gi=kt)},reset:function(){G=!1,Re=null,ee=null,be=null,Pe=null,yt=null,Dt=null,Xt=null,gi=null}}}const c=new i,l=new s,h=new a,f=new WeakMap,p=new WeakMap;let g={},x={},M=new WeakMap,E=[],y=null,v=!1,P=null,T=null,D=null,d=null,B=null,z=null,X=null,R=!1,U=null,ie=null,pe=null,q=null,J=null;const Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let _e=!1,le=0;const he=r.getParameter(r.VERSION);he.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(he)[1]),_e=le>=1):he.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),_e=le>=2);let de=null,ve={};const Fe=r.getParameter(r.SCISSOR_BOX),se=r.getParameter(r.VIEWPORT),Se=new Ot().fromArray(Fe),xe=new Ot().fromArray(se);function Ie(G,Re,ee,be){const Pe=new Uint8Array(4),yt=r.createTexture();r.bindTexture(G,yt),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Dt=0;Dt<ee;Dt++)n&&(G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY)?r.texImage3D(Re,0,r.RGBA,1,1,be,0,r.RGBA,r.UNSIGNED_BYTE,Pe):r.texImage2D(Re+Dt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Pe);return yt}const Ce={};Ce[r.TEXTURE_2D]=Ie(r.TEXTURE_2D,r.TEXTURE_2D,1),Ce[r.TEXTURE_CUBE_MAP]=Ie(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ce[r.TEXTURE_2D_ARRAY]=Ie(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ce[r.TEXTURE_3D]=Ie(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),l.setClear(1),h.setClear(0),Xe(r.DEPTH_TEST),l.setFunc(Xa),je(!1),Rt(Xc),Xe(r.CULL_FACE),ke(ji);function Xe(G){g[G]!==!0&&(r.enable(G),g[G]=!0)}function dt(G){g[G]!==!1&&(r.disable(G),g[G]=!1)}function Ze(G,Re){return x[G]!==Re?(r.bindFramebuffer(G,Re),x[G]=Re,n&&(G===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Re),G===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Re)),!0):!1}function bt(G,Re){let ee=E,be=!1;if(G)if(ee=M.get(Re),ee===void 0&&(ee=[],M.set(Re,ee)),G.isWebGLMultipleRenderTargets){const Pe=G.texture;if(ee.length!==Pe.length||ee[0]!==r.COLOR_ATTACHMENT0){for(let yt=0,Dt=Pe.length;yt<Dt;yt++)ee[yt]=r.COLOR_ATTACHMENT0+yt;ee.length=Pe.length,be=!0}}else ee[0]!==r.COLOR_ATTACHMENT0&&(ee[0]=r.COLOR_ATTACHMENT0,be=!0);else ee[0]!==r.BACK&&(ee[0]=r.BACK,be=!0);be&&(t.isWebGL2?r.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function lt(G){return y!==G?(r.useProgram(G),y=G,!0):!1}const K={[jr]:r.FUNC_ADD,[ud]:r.FUNC_SUBTRACT,[hd]:r.FUNC_REVERSE_SUBTRACT};if(n)K[Kc]=r.MIN,K[$c]=r.MAX;else{const G=e.get("EXT_blend_minmax");G!==null&&(K[Kc]=G.MIN_EXT,K[$c]=G.MAX_EXT)}const Ne={[dd]:r.ZERO,[fd]:r.ONE,[pd]:r.SRC_COLOR,[Hu]:r.SRC_ALPHA,[yd]:r.SRC_ALPHA_SATURATE,[vd]:r.DST_COLOR,[gd]:r.DST_ALPHA,[md]:r.ONE_MINUS_SRC_COLOR,[zu]:r.ONE_MINUS_SRC_ALPHA,[xd]:r.ONE_MINUS_DST_COLOR,[_d]:r.ONE_MINUS_DST_ALPHA};function ke(G,Re,ee,be,Pe,yt,Dt,Xt){if(G===ji){v===!0&&(dt(r.BLEND),v=!1);return}if(v===!1&&(Xe(r.BLEND),v=!0),G!==ld){if(G!==P||Xt!==R){if((T!==jr||B!==jr)&&(r.blendEquation(r.FUNC_ADD),T=jr,B=jr),Xt)switch(G){case $r:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jc:r.blendFunc(r.ONE,r.ONE);break;case qc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case $r:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case qc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}D=null,d=null,z=null,X=null,P=G,R=Xt}return}Pe=Pe||Re,yt=yt||ee,Dt=Dt||be,(Re!==T||Pe!==B)&&(r.blendEquationSeparate(K[Re],K[Pe]),T=Re,B=Pe),(ee!==D||be!==d||yt!==z||Dt!==X)&&(r.blendFuncSeparate(Ne[ee],Ne[be],Ne[yt],Ne[Dt]),D=ee,d=be,z=yt,X=Dt),P=G,R=!1}function ut(G,Re){G.side===Yn?dt(r.CULL_FACE):Xe(r.CULL_FACE);let ee=G.side===Ln;Re&&(ee=!ee),je(ee),G.blending===$r&&G.transparent===!1?ke(ji):ke(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.premultipliedAlpha),l.setFunc(G.depthFunc),l.setTest(G.depthTest),l.setMask(G.depthWrite),c.setMask(G.colorWrite);const be=G.stencilWrite;h.setTest(be),be&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Je(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Xe(r.SAMPLE_ALPHA_TO_COVERAGE):dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function je(G){U!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),U=G)}function Rt(G){G!==od?(Xe(r.CULL_FACE),G!==ie&&(G===Xc?r.cullFace(r.BACK):G===ad?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):dt(r.CULL_FACE),ie=G}function ft(G){G!==pe&&(_e&&r.lineWidth(G),pe=G)}function Je(G,Re,ee){G?(Xe(r.POLYGON_OFFSET_FILL),(q!==Re||J!==ee)&&(r.polygonOffset(Re,ee),q=Re,J=ee)):dt(r.POLYGON_OFFSET_FILL)}function pt(G){G?Xe(r.SCISSOR_TEST):dt(r.SCISSOR_TEST)}function Pt(G){G===void 0&&(G=r.TEXTURE0+Q-1),de!==G&&(r.activeTexture(G),de=G)}function Bt(G,Re,ee){ee===void 0&&(de===null?ee=r.TEXTURE0+Q-1:ee=de);let be=ve[ee];be===void 0&&(be={type:void 0,texture:void 0},ve[ee]=be),(be.type!==G||be.texture!==Re)&&(de!==ee&&(r.activeTexture(ee),de=ee),r.bindTexture(G,Re||Ce[G]),be.type=G,be.texture=Re)}function I(){const G=ve[de];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function C(){try{r.compressedTexImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function oe(){try{r.compressedTexImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{r.texSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{r.texSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function N(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{r.texStorage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function re(){try{r.texStorage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function He(){try{r.texImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{r.texImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(G){Se.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),Se.copy(G))}function ze(G){xe.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),xe.copy(G))}function Ge(G,Re){let ee=p.get(Re);ee===void 0&&(ee=new WeakMap,p.set(Re,ee));let be=ee.get(G);be===void 0&&(be=r.getUniformBlockIndex(Re,G.name),ee.set(G,be))}function Ke(G,Re){const be=p.get(Re).get(G);f.get(Re)!==be&&(r.uniformBlockBinding(Re,be,G.__bindingPointIndex),f.set(Re,be))}function _t(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},de=null,ve={},x={},M=new WeakMap,E=[],y=null,v=!1,P=null,T=null,D=null,d=null,B=null,z=null,X=null,R=!1,U=null,ie=null,pe=null,q=null,J=null,Se.set(0,0,r.canvas.width,r.canvas.height),xe.set(0,0,r.canvas.width,r.canvas.height),c.reset(),l.reset(),h.reset()}return{buffers:{color:c,depth:l,stencil:h},enable:Xe,disable:dt,bindFramebuffer:Ze,drawBuffers:bt,useProgram:lt,setBlending:ke,setMaterial:ut,setFlipSided:je,setCullFace:Rt,setLineWidth:ft,setPolygonOffset:Je,setScissorTest:pt,activeTexture:Pt,bindTexture:Bt,unbindTexture:I,compressedTexImage2D:C,compressedTexImage3D:oe,texImage2D:He,texImage3D:Oe,updateUBOMapping:Ge,uniformBlockBinding:Ke,texStorage2D:ye,texStorage3D:re,texSubImage2D:Te,texSubImage3D:Ee,compressedTexSubImage2D:N,compressedTexSubImage3D:me,scissor:Le,viewport:ze,reset:_t}}function h0(r,e,t,n,i,s,a){const c=i.isWebGL2,l=i.maxTextures,h=i.maxCubemapSize,f=i.maxTextureSize,p=i.maxSamples,g=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,x=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),M=new WeakMap;let E;const y=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(I,C){return v?new OffscreenCanvas(I,C):Us("canvas")}function T(I,C,oe,Te){let Ee=1;if((I.width>Te||I.height>Te)&&(Ee=Te/Math.max(I.width,I.height)),Ee<1||C===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const N=C?Oo:Math.floor,me=N(Ee*I.width),ye=N(Ee*I.height);E===void 0&&(E=P(me,ye));const re=oe?P(me,ye):E;return re.width=me,re.height=ye,re.getContext("2d").drawImage(I,0,0,me,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+me+"x"+ye+")."),re}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function D(I){return Ja(I.width)&&Ja(I.height)}function d(I){return c?!1:I.wrapS!==Kn||I.wrapT!==Kn||I.minFilter!==on&&I.minFilter!==Cn}function B(I,C){return I.generateMipmaps&&C&&I.minFilter!==on&&I.minFilter!==Cn}function z(I){r.generateMipmap(I)}function X(I,C,oe,Te,Ee=!1){if(c===!1)return C;if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let N=C;return C===r.RED&&(oe===r.FLOAT&&(N=r.R32F),oe===r.HALF_FLOAT&&(N=r.R16F),oe===r.UNSIGNED_BYTE&&(N=r.R8)),C===r.RG&&(oe===r.FLOAT&&(N=r.RG32F),oe===r.HALF_FLOAT&&(N=r.RG16F),oe===r.UNSIGNED_BYTE&&(N=r.RG8)),C===r.RGBA&&(oe===r.FLOAT&&(N=r.RGBA32F),oe===r.HALF_FLOAT&&(N=r.RGBA16F),oe===r.UNSIGNED_BYTE&&(N=Te===at&&Ee===!1?r.SRGB8_ALPHA8:r.RGBA8),oe===r.UNSIGNED_SHORT_4_4_4_4&&(N=r.RGBA4),oe===r.UNSIGNED_SHORT_5_5_5_1&&(N=r.RGB5_A1)),(N===r.R16F||N===r.R32F||N===r.RG16F||N===r.RG32F||N===r.RGBA16F||N===r.RGBA32F)&&e.get("EXT_color_buffer_float"),N}function R(I,C,oe){return B(I,oe)===!0||I.isFramebufferTexture&&I.minFilter!==on&&I.minFilter!==Cn?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function U(I){return I===on||I===Ya||I===Po?r.NEAREST:r.LINEAR}function ie(I){const C=I.target;C.removeEventListener("dispose",ie),q(C),C.isVideoTexture&&M.delete(C)}function pe(I){const C=I.target;C.removeEventListener("dispose",pe),Q(C)}function q(I){const C=n.get(I);if(C.__webglInit===void 0)return;const oe=I.source,Te=y.get(oe);if(Te){const Ee=Te[C.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&J(I),Object.keys(Te).length===0&&y.delete(oe)}n.remove(I)}function J(I){const C=n.get(I);r.deleteTexture(C.__webglTexture);const oe=I.source,Te=y.get(oe);delete Te[C.__cacheKey],a.memory.textures--}function Q(I){const C=I.texture,oe=n.get(I),Te=n.get(C);if(Te.__webglTexture!==void 0&&(r.deleteTexture(Te.__webglTexture),a.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let Ee=0;Ee<6;Ee++)r.deleteFramebuffer(oe.__webglFramebuffer[Ee]),oe.__webglDepthbuffer&&r.deleteRenderbuffer(oe.__webglDepthbuffer[Ee]);else{if(r.deleteFramebuffer(oe.__webglFramebuffer),oe.__webglDepthbuffer&&r.deleteRenderbuffer(oe.__webglDepthbuffer),oe.__webglMultisampledFramebuffer&&r.deleteFramebuffer(oe.__webglMultisampledFramebuffer),oe.__webglColorRenderbuffer)for(let Ee=0;Ee<oe.__webglColorRenderbuffer.length;Ee++)oe.__webglColorRenderbuffer[Ee]&&r.deleteRenderbuffer(oe.__webglColorRenderbuffer[Ee]);oe.__webglDepthRenderbuffer&&r.deleteRenderbuffer(oe.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let Ee=0,N=C.length;Ee<N;Ee++){const me=n.get(C[Ee]);me.__webglTexture&&(r.deleteTexture(me.__webglTexture),a.memory.textures--),n.remove(C[Ee])}n.remove(C),n.remove(I)}let _e=0;function le(){_e=0}function he(){const I=_e;return I>=l&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l),_e+=1,I}function de(I){const C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.colorSpace),C.join()}function ve(I,C){const oe=n.get(I);if(I.isVideoTexture&&Pt(I),I.isRenderTargetTexture===!1&&I.version>0&&oe.__version!==I.version){const Te=I.image;if(Te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ze(oe,I,C);return}}t.bindTexture(r.TEXTURE_2D,oe.__webglTexture,r.TEXTURE0+C)}function Fe(I,C){const oe=n.get(I);if(I.version>0&&oe.__version!==I.version){Ze(oe,I,C);return}t.bindTexture(r.TEXTURE_2D_ARRAY,oe.__webglTexture,r.TEXTURE0+C)}function se(I,C){const oe=n.get(I);if(I.version>0&&oe.__version!==I.version){Ze(oe,I,C);return}t.bindTexture(r.TEXTURE_3D,oe.__webglTexture,r.TEXTURE0+C)}function Se(I,C){const oe=n.get(I);if(I.version>0&&oe.__version!==I.version){bt(oe,I,C);return}t.bindTexture(r.TEXTURE_CUBE_MAP,oe.__webglTexture,r.TEXTURE0+C)}const xe={[Yi]:r.REPEAT,[Kn]:r.CLAMP_TO_EDGE,[No]:r.MIRRORED_REPEAT},Ie={[on]:r.NEAREST,[Ya]:r.NEAREST_MIPMAP_NEAREST,[Po]:r.NEAREST_MIPMAP_LINEAR,[Cn]:r.LINEAR,[Wu]:r.LINEAR_MIPMAP_NEAREST,[mr]:r.LINEAR_MIPMAP_LINEAR},Ce={[$d]:r.NEVER,[rf]:r.ALWAYS,[Zd]:r.LESS,[Qd]:r.LEQUAL,[Jd]:r.EQUAL,[nf]:r.GEQUAL,[ef]:r.GREATER,[tf]:r.NOTEQUAL};function Xe(I,C,oe){if(oe?(r.texParameteri(I,r.TEXTURE_WRAP_S,xe[C.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,xe[C.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,xe[C.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,Ie[C.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,Ie[C.minFilter])):(r.texParameteri(I,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(I,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(C.wrapS!==Kn||C.wrapT!==Kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(I,r.TEXTURE_MAG_FILTER,U(C.magFilter)),r.texParameteri(I,r.TEXTURE_MIN_FILTER,U(C.minFilter)),C.minFilter!==on&&C.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),C.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,Ce[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Te=e.get("EXT_texture_filter_anisotropic");if(C.magFilter===on||C.minFilter!==Po&&C.minFilter!==mr||C.type===Li&&e.has("OES_texture_float_linear")===!1||c===!1&&C.type===Is&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||n.get(C).__currentAnisotropy)&&(r.texParameterf(I,Te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy)}}function dt(I,C){let oe=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",ie));const Te=C.source;let Ee=y.get(Te);Ee===void 0&&(Ee={},y.set(Te,Ee));const N=de(C);if(N!==I.__cacheKey){Ee[N]===void 0&&(Ee[N]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,oe=!0),Ee[N].usedTimes++;const me=Ee[I.__cacheKey];me!==void 0&&(Ee[I.__cacheKey].usedTimes--,me.usedTimes===0&&J(C)),I.__cacheKey=N,I.__webglTexture=Ee[N].texture}return oe}function Ze(I,C,oe){let Te=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(Te=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(Te=r.TEXTURE_3D);const Ee=dt(I,C),N=C.source;t.bindTexture(Te,I.__webglTexture,r.TEXTURE0+oe);const me=n.get(N);if(N.version!==me.__version||Ee===!0){t.activeTexture(r.TEXTURE0+oe),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const ye=d(C)&&D(C.image)===!1;let re=T(C.image,ye,!1,f);re=Bt(C,re);const He=D(re)||c,Oe=s.convert(C.format,C.colorSpace);let Le=s.convert(C.type),ze=X(C.internalFormat,Oe,Le,C.colorSpace);Xe(Te,C,He);let Ge;const Ke=C.mipmaps,_t=c&&C.isVideoTexture!==!0,G=me.__version===void 0||Ee===!0,Re=R(C,re,He);if(C.isDepthTexture)ze=r.DEPTH_COMPONENT,c?C.type===Li?ze=r.DEPTH_COMPONENT32F:C.type===Xi?ze=r.DEPTH_COMPONENT24:C.type===hr?ze=r.DEPTH24_STENCIL8:ze=r.DEPTH_COMPONENT16:C.type===Li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===dr&&ze===r.DEPTH_COMPONENT&&C.type!==ac&&C.type!==Xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=Xi,Le=s.convert(C.type)),C.format===ns&&ze===r.DEPTH_COMPONENT&&(ze=r.DEPTH_STENCIL,C.type!==hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=hr,Le=s.convert(C.type))),G&&(_t?t.texStorage2D(r.TEXTURE_2D,1,ze,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,ze,re.width,re.height,0,Oe,Le,null));else if(C.isDataTexture)if(Ke.length>0&&He){_t&&G&&t.texStorage2D(r.TEXTURE_2D,Re,ze,Ke[0].width,Ke[0].height);for(let ee=0,be=Ke.length;ee<be;ee++)Ge=Ke[ee],_t?t.texSubImage2D(r.TEXTURE_2D,ee,0,0,Ge.width,Ge.height,Oe,Le,Ge.data):t.texImage2D(r.TEXTURE_2D,ee,ze,Ge.width,Ge.height,0,Oe,Le,Ge.data);C.generateMipmaps=!1}else _t?(G&&t.texStorage2D(r.TEXTURE_2D,Re,ze,re.width,re.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,re.width,re.height,Oe,Le,re.data)):t.texImage2D(r.TEXTURE_2D,0,ze,re.width,re.height,0,Oe,Le,re.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){_t&&G&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,ze,Ke[0].width,Ke[0].height,re.depth);for(let ee=0,be=Ke.length;ee<be;ee++)Ge=Ke[ee],C.format!==$n?Oe!==null?_t?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,Ge.width,Ge.height,re.depth,Oe,Ge.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ee,ze,Ge.width,Ge.height,re.depth,0,Ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,Ge.width,Ge.height,re.depth,Oe,Le,Ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ee,ze,Ge.width,Ge.height,re.depth,0,Oe,Le,Ge.data)}else{_t&&G&&t.texStorage2D(r.TEXTURE_2D,Re,ze,Ke[0].width,Ke[0].height);for(let ee=0,be=Ke.length;ee<be;ee++)Ge=Ke[ee],C.format!==$n?Oe!==null?_t?t.compressedTexSubImage2D(r.TEXTURE_2D,ee,0,0,Ge.width,Ge.height,Oe,Ge.data):t.compressedTexImage2D(r.TEXTURE_2D,ee,ze,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?t.texSubImage2D(r.TEXTURE_2D,ee,0,0,Ge.width,Ge.height,Oe,Le,Ge.data):t.texImage2D(r.TEXTURE_2D,ee,ze,Ge.width,Ge.height,0,Oe,Le,Ge.data)}else if(C.isDataArrayTexture)_t?(G&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,ze,re.width,re.height,re.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Oe,Le,re.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ze,re.width,re.height,re.depth,0,Oe,Le,re.data);else if(C.isData3DTexture)_t?(G&&t.texStorage3D(r.TEXTURE_3D,Re,ze,re.width,re.height,re.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Oe,Le,re.data)):t.texImage3D(r.TEXTURE_3D,0,ze,re.width,re.height,re.depth,0,Oe,Le,re.data);else if(C.isFramebufferTexture){if(G)if(_t)t.texStorage2D(r.TEXTURE_2D,Re,ze,re.width,re.height);else{let ee=re.width,be=re.height;for(let Pe=0;Pe<Re;Pe++)t.texImage2D(r.TEXTURE_2D,Pe,ze,ee,be,0,Oe,Le,null),ee>>=1,be>>=1}}else if(Ke.length>0&&He){_t&&G&&t.texStorage2D(r.TEXTURE_2D,Re,ze,Ke[0].width,Ke[0].height);for(let ee=0,be=Ke.length;ee<be;ee++)Ge=Ke[ee],_t?t.texSubImage2D(r.TEXTURE_2D,ee,0,0,Oe,Le,Ge):t.texImage2D(r.TEXTURE_2D,ee,ze,Oe,Le,Ge);C.generateMipmaps=!1}else _t?(G&&t.texStorage2D(r.TEXTURE_2D,Re,ze,re.width,re.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Oe,Le,re)):t.texImage2D(r.TEXTURE_2D,0,ze,Oe,Le,re);B(C,He)&&z(Te),me.__version=N.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function bt(I,C,oe){if(C.image.length!==6)return;const Te=dt(I,C),Ee=C.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+oe);const N=n.get(Ee);if(Ee.version!==N.__version||Te===!0){t.activeTexture(r.TEXTURE0+oe),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const me=C.isCompressedTexture||C.image[0].isCompressedTexture,ye=C.image[0]&&C.image[0].isDataTexture,re=[];for(let ee=0;ee<6;ee++)!me&&!ye?re[ee]=T(C.image[ee],!1,!0,h):re[ee]=ye?C.image[ee].image:C.image[ee],re[ee]=Bt(C,re[ee]);const He=re[0],Oe=D(He)||c,Le=s.convert(C.format,C.colorSpace),ze=s.convert(C.type),Ge=X(C.internalFormat,Le,ze,C.colorSpace),Ke=c&&C.isVideoTexture!==!0,_t=N.__version===void 0||Te===!0;let G=R(C,He,Oe);Xe(r.TEXTURE_CUBE_MAP,C,Oe);let Re;if(me){Ke&&_t&&t.texStorage2D(r.TEXTURE_CUBE_MAP,G,Ge,He.width,He.height);for(let ee=0;ee<6;ee++){Re=re[ee].mipmaps;for(let be=0;be<Re.length;be++){const Pe=Re[be];C.format!==$n?Le!==null?Ke?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,0,0,Pe.width,Pe.height,Le,Pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,Ge,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,0,0,Pe.width,Pe.height,Le,ze,Pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,Ge,Pe.width,Pe.height,0,Le,ze,Pe.data)}}}else{Re=C.mipmaps,Ke&&_t&&(Re.length>0&&G++,t.texStorage2D(r.TEXTURE_CUBE_MAP,G,Ge,re[0].width,re[0].height));for(let ee=0;ee<6;ee++)if(ye){Ke?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,re[ee].width,re[ee].height,Le,ze,re[ee].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ge,re[ee].width,re[ee].height,0,Le,ze,re[ee].data);for(let be=0;be<Re.length;be++){const yt=Re[be].image[ee].image;Ke?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,0,0,yt.width,yt.height,Le,ze,yt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,Ge,yt.width,yt.height,0,Le,ze,yt.data)}}else{Ke?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Le,ze,re[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ge,Le,ze,re[ee]);for(let be=0;be<Re.length;be++){const Pe=Re[be];Ke?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,0,0,Le,ze,Pe.image[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,Ge,Le,ze,Pe.image[ee])}}}B(C,Oe)&&z(r.TEXTURE_CUBE_MAP),N.__version=Ee.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function lt(I,C,oe,Te,Ee){const N=s.convert(oe.format,oe.colorSpace),me=s.convert(oe.type),ye=X(oe.internalFormat,N,me,oe.colorSpace);n.get(C).__hasExternalTextures||(Ee===r.TEXTURE_3D||Ee===r.TEXTURE_2D_ARRAY?t.texImage3D(Ee,0,ye,C.width,C.height,C.depth,0,N,me,null):t.texImage2D(Ee,0,ye,C.width,C.height,0,N,me,null)),t.bindFramebuffer(r.FRAMEBUFFER,I),pt(C)?g.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Te,Ee,n.get(oe).__webglTexture,0,Je(C)):(Ee===r.TEXTURE_2D||Ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Te,Ee,n.get(oe).__webglTexture,0),t.bindFramebuffer(r.FRAMEBUFFER,null)}function K(I,C,oe){if(r.bindRenderbuffer(r.RENDERBUFFER,I),C.depthBuffer&&!C.stencilBuffer){let Te=r.DEPTH_COMPONENT16;if(oe||pt(C)){const Ee=C.depthTexture;Ee&&Ee.isDepthTexture&&(Ee.type===Li?Te=r.DEPTH_COMPONENT32F:Ee.type===Xi&&(Te=r.DEPTH_COMPONENT24));const N=Je(C);pt(C)?g.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,N,Te,C.width,C.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,N,Te,C.width,C.height)}else r.renderbufferStorage(r.RENDERBUFFER,Te,C.width,C.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,I)}else if(C.depthBuffer&&C.stencilBuffer){const Te=Je(C);oe&&pt(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Te,r.DEPTH24_STENCIL8,C.width,C.height):pt(C)?g.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Te,r.DEPTH24_STENCIL8,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,I)}else{const Te=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Ee=0;Ee<Te.length;Ee++){const N=Te[Ee],me=s.convert(N.format,N.colorSpace),ye=s.convert(N.type),re=X(N.internalFormat,me,ye,N.colorSpace),He=Je(C);oe&&pt(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,He,re,C.width,C.height):pt(C)?g.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,He,re,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,re,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ne(I,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),ve(C.depthTexture,0);const Te=n.get(C.depthTexture).__webglTexture,Ee=Je(C);if(C.depthTexture.format===dr)pt(C)?g.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Te,0,Ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Te,0);else if(C.depthTexture.format===ns)pt(C)?g.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Te,0,Ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Te,0);else throw new Error("Unknown depthTexture format")}function ke(I){const C=n.get(I),oe=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!C.__autoAllocateDepthBuffer){if(oe)throw new Error("target.depthTexture not supported in Cube render targets");Ne(C.__webglFramebuffer,I)}else if(oe){C.__webglDepthbuffer=[];for(let Te=0;Te<6;Te++)t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[Te]),C.__webglDepthbuffer[Te]=r.createRenderbuffer(),K(C.__webglDepthbuffer[Te],I,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=r.createRenderbuffer(),K(C.__webglDepthbuffer,I,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function ut(I,C,oe){const Te=n.get(I);C!==void 0&&lt(Te.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D),oe!==void 0&&ke(I)}function je(I){const C=I.texture,oe=n.get(I),Te=n.get(C);I.addEventListener("dispose",pe),I.isWebGLMultipleRenderTargets!==!0&&(Te.__webglTexture===void 0&&(Te.__webglTexture=r.createTexture()),Te.__version=C.version,a.memory.textures++);const Ee=I.isWebGLCubeRenderTarget===!0,N=I.isWebGLMultipleRenderTargets===!0,me=D(I)||c;if(Ee){oe.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)oe.__webglFramebuffer[ye]=r.createFramebuffer()}else{if(oe.__webglFramebuffer=r.createFramebuffer(),N)if(i.drawBuffers){const ye=I.texture;for(let re=0,He=ye.length;re<He;re++){const Oe=n.get(ye[re]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&I.samples>0&&pt(I)===!1){const ye=N?C:[C];oe.__webglMultisampledFramebuffer=r.createFramebuffer(),oe.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglMultisampledFramebuffer);for(let re=0;re<ye.length;re++){const He=ye[re];oe.__webglColorRenderbuffer[re]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,oe.__webglColorRenderbuffer[re]);const Oe=s.convert(He.format,He.colorSpace),Le=s.convert(He.type),ze=X(He.internalFormat,Oe,Le,He.colorSpace,I.isXRRenderTarget===!0),Ge=Je(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ge,ze,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.RENDERBUFFER,oe.__webglColorRenderbuffer[re])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(oe.__webglDepthRenderbuffer=r.createRenderbuffer(),K(oe.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(r.TEXTURE_CUBE_MAP,Te.__webglTexture),Xe(r.TEXTURE_CUBE_MAP,C,me);for(let ye=0;ye<6;ye++)lt(oe.__webglFramebuffer[ye],I,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye);B(C,me)&&z(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(N){const ye=I.texture;for(let re=0,He=ye.length;re<He;re++){const Oe=ye[re],Le=n.get(Oe);t.bindTexture(r.TEXTURE_2D,Le.__webglTexture),Xe(r.TEXTURE_2D,Oe,me),lt(oe.__webglFramebuffer,I,Oe,r.COLOR_ATTACHMENT0+re,r.TEXTURE_2D),B(Oe,me)&&z(r.TEXTURE_2D)}t.unbindTexture()}else{let ye=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(c?ye=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,Te.__webglTexture),Xe(ye,C,me),lt(oe.__webglFramebuffer,I,C,r.COLOR_ATTACHMENT0,ye),B(C,me)&&z(ye),t.unbindTexture()}I.depthBuffer&&ke(I)}function Rt(I){const C=D(I)||c,oe=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let Te=0,Ee=oe.length;Te<Ee;Te++){const N=oe[Te];if(B(N,C)){const me=I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ye=n.get(N).__webglTexture;t.bindTexture(me,ye),z(me),t.unbindTexture()}}}function ft(I){if(c&&I.samples>0&&pt(I)===!1){const C=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],oe=I.width,Te=I.height;let Ee=r.COLOR_BUFFER_BIT;const N=[],me=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=n.get(I),re=I.isWebGLMultipleRenderTargets===!0;if(re)for(let He=0;He<C.length;He++)t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let He=0;He<C.length;He++){N.push(r.COLOR_ATTACHMENT0+He),I.depthBuffer&&N.push(me);const Oe=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(Oe===!1&&(I.depthBuffer&&(Ee|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&(Ee|=r.STENCIL_BUFFER_BIT)),re&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ye.__webglColorRenderbuffer[He]),Oe===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[me]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[me])),re){const Le=n.get(C[He]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Le,0)}r.blitFramebuffer(0,0,oe,Te,0,0,oe,Te,Ee,r.NEAREST),x&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,N)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),re)for(let He=0;He<C.length;He++){t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.RENDERBUFFER,ye.__webglColorRenderbuffer[He]);const Oe=n.get(C[He]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.TEXTURE_2D,Oe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function Je(I){return Math.min(p,I.samples)}function pt(I){const C=n.get(I);return c&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Pt(I){const C=a.render.frame;M.get(I)!==C&&(M.set(I,C),I.update())}function Bt(I,C){const oe=I.colorSpace,Te=I.format,Ee=I.type;return I.isCompressedTexture===!0||I.format===Za||oe!==hi&&oe!==pr&&(oe===at?c===!1?e.has("EXT_sRGB")===!0&&Te===$n?(I.format=Za,I.minFilter=Cn,I.generateMipmaps=!1):C=ih.sRGBToLinear(C):(Te!==$n||Ee!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",oe)),C}this.allocateTextureUnit=he,this.resetTextureUnits=le,this.setTexture2D=ve,this.setTexture2DArray=Fe,this.setTexture3D=se,this.setTextureCube=Se,this.rebindTextures=ut,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=pt}function d0(r,e,t){const n=t.isWebGL2;function i(s,a=pr){let c;if(s===qi)return r.UNSIGNED_BYTE;if(s===ju)return r.UNSIGNED_SHORT_4_4_4_4;if(s===qu)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Ud)return r.BYTE;if(s===Od)return r.SHORT;if(s===ac)return r.UNSIGNED_SHORT;if(s===Xu)return r.INT;if(s===Xi)return r.UNSIGNED_INT;if(s===Li)return r.FLOAT;if(s===Is)return n?r.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(s===Fd)return r.ALPHA;if(s===$n)return r.RGBA;if(s===Bd)return r.LUMINANCE;if(s===kd)return r.LUMINANCE_ALPHA;if(s===dr)return r.DEPTH_COMPONENT;if(s===ns)return r.DEPTH_STENCIL;if(s===Za)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(s===Hd)return r.RED;if(s===Yu)return r.RED_INTEGER;if(s===zd)return r.RG;if(s===Ku)return r.RG_INTEGER;if(s===$u)return r.RGBA_INTEGER;if(s===aa||s===ca||s===la||s===ua)if(a===at)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===aa)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ca)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===la)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ua)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===aa)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ca)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===la)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ua)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zc||s===Jc||s===Qc||s===el)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Zc)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Jc)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Qc)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===el)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Gd)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===tl||s===nl)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===tl)return a===at?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===nl)return a===at?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===il||s===rl||s===sl||s===ol||s===al||s===cl||s===ll||s===ul||s===hl||s===dl||s===fl||s===pl||s===ml||s===gl)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===il)return a===at?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===rl)return a===at?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===sl)return a===at?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ol)return a===at?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===al)return a===at?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===cl)return a===at?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ll)return a===at?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ul)return a===at?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===hl)return a===at?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===dl)return a===at?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fl)return a===at?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===pl)return a===at?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ml)return a===at?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===gl)return a===at?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ha)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===ha)return a===at?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Vd||s===_l||s===vl||s===xl)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===ha)return c.COMPRESSED_RED_RGTC1_EXT;if(s===_l)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===vl)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xl)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===hr?n?r.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class f0 extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ur extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const p0={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const c=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const E of e.hand.values()){const y=t.getJointPose(E,n),v=this._getHandJoint(h,E);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const f=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],g=f.position.distanceTo(p.position),x=.02,M=.005;h.inputState.pinching&&g>x+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=x-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));c!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(p0)))}return c!==null&&(c.visible=i!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ur;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class m0 extends dn{constructor(e,t,n,i,s,a,c,l,h,f){if(f=f!==void 0?f:dr,f!==dr&&f!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===dr&&(n=Xi),n===void 0&&f===ns&&(n=hr),super(null,i,s,a,c,l,f,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class g0 extends xr{constructor(e,t){super();const n=this;let i=null,s=1,a=null,c="local-floor",l=1,h=null,f=null,p=null,g=null,x=null,M=null;const E=t.getContextAttributes();let y=null,v=null;const P=[],T=[];let D=null;const d=new En;d.layers.enable(1),d.viewport=new Ot;const B=new En;B.layers.enable(2),B.viewport=new Ot;const z=[d,B],X=new f0;X.layers.enable(1),X.layers.enable(2);let R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(se){D=se},this.getController=function(se){let Se=P[se];return Se===void 0&&(Se=new Na,P[se]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(se){let Se=P[se];return Se===void 0&&(Se=new Na,P[se]=Se),Se.getGripSpace()},this.getHand=function(se){let Se=P[se];return Se===void 0&&(Se=new Na,P[se]=Se),Se.getHandSpace()};function ie(se){const Se=T.indexOf(se.inputSource);if(Se===-1)return;const xe=P[Se];xe!==void 0&&(xe.update(se.inputSource,se.frame,h||a),xe.dispatchEvent({type:se.type,data:se.inputSource}))}function pe(){i.removeEventListener("select",ie),i.removeEventListener("selectstart",ie),i.removeEventListener("selectend",ie),i.removeEventListener("squeeze",ie),i.removeEventListener("squeezestart",ie),i.removeEventListener("squeezeend",ie),i.removeEventListener("end",pe),i.removeEventListener("inputsourceschange",q);for(let se=0;se<P.length;se++){const Se=T[se];Se!==null&&(T[se]=null,P[se].disconnect(Se))}R=null,U=null,e.setRenderTarget(y),x=null,g=null,p=null,i=null,v=null,Fe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){c=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(se){h=se},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return p},this.getFrame=function(){return M},this.getSession=function(){return i},this.setSession=async function(se){if(i=se,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",ie),i.addEventListener("selectstart",ie),i.addEventListener("selectend",ie),i.addEventListener("squeeze",ie),i.addEventListener("squeezestart",ie),i.addEventListener("squeezeend",ie),i.addEventListener("end",pe),i.addEventListener("inputsourceschange",q),E.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Se={antialias:i.renderState.layers===void 0?E.antialias:!0,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};x=new XRWebGLLayer(i,t,Se),i.updateRenderState({baseLayer:x}),v=new gr(x.framebufferWidth,x.framebufferHeight,{format:$n,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil})}else{let Se=null,xe=null,Ie=null;E.depth&&(Ie=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=E.stencil?ns:dr,xe=E.stencil?hr:Xi);const Ce={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};p=new XRWebGLBinding(i,t),g=p.createProjectionLayer(Ce),i.updateRenderState({layers:[g]}),v=new gr(g.textureWidth,g.textureHeight,{format:$n,type:qi,depthTexture:new m0(g.textureWidth,g.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0});const Xe=e.properties.get(v);Xe.__ignoreDepthValues=g.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await i.requestReferenceSpace(c),Fe.setContext(i),Fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function q(se){for(let Se=0;Se<se.removed.length;Se++){const xe=se.removed[Se],Ie=T.indexOf(xe);Ie>=0&&(T[Ie]=null,P[Ie].disconnect(xe))}for(let Se=0;Se<se.added.length;Se++){const xe=se.added[Se];let Ie=T.indexOf(xe);if(Ie===-1){for(let Xe=0;Xe<P.length;Xe++)if(Xe>=T.length){T.push(xe),Ie=Xe;break}else if(T[Xe]===null){T[Xe]=xe,Ie=Xe;break}if(Ie===-1)break}const Ce=P[Ie];Ce&&Ce.connect(xe)}}const J=new H,Q=new H;function _e(se,Se,xe){J.setFromMatrixPosition(Se.matrixWorld),Q.setFromMatrixPosition(xe.matrixWorld);const Ie=J.distanceTo(Q),Ce=Se.projectionMatrix.elements,Xe=xe.projectionMatrix.elements,dt=Ce[14]/(Ce[10]-1),Ze=Ce[14]/(Ce[10]+1),bt=(Ce[9]+1)/Ce[5],lt=(Ce[9]-1)/Ce[5],K=(Ce[8]-1)/Ce[0],Ne=(Xe[8]+1)/Xe[0],ke=dt*K,ut=dt*Ne,je=Ie/(-K+Ne),Rt=je*-K;Se.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Rt),se.translateZ(je),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert();const ft=dt+je,Je=Ze+je,pt=ke-Rt,Pt=ut+(Ie-Rt),Bt=bt*Ze/Je*ft,I=lt*Ze/Je*ft;se.projectionMatrix.makePerspective(pt,Pt,Bt,I,ft,Je),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}function le(se,Se){Se===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(Se.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCameraXR=function(se){if(i===null)return se;D&&(se=D),X.near=B.near=d.near=se.near,X.far=B.far=d.far=se.far,(R!==X.near||U!==X.far)&&(i.updateRenderState({depthNear:X.near,depthFar:X.far}),R=X.near,U=X.far);const Se=se.parent,xe=X.cameras;le(X,Se);for(let Ie=0;Ie<xe.length;Ie++)le(xe[Ie],Se);return xe.length===2?_e(X,d,B):X.projectionMatrix.copy(d.projectionMatrix),D&&he(X,Se),X};function he(se,Se){const xe=D;Se===null?xe.matrix.copy(se.matrixWorld):(xe.matrix.copy(Se.matrixWorld),xe.matrix.invert(),xe.matrix.multiply(se.matrixWorld)),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.updateMatrixWorld(!0);const Ie=xe.children;for(let Ce=0,Xe=Ie.length;Ce<Xe;Ce++)Ie[Ce].updateMatrixWorld(!0);xe.projectionMatrix.copy(se.projectionMatrix),xe.projectionMatrixInverse.copy(se.projectionMatrixInverse),xe.isPerspectiveCamera&&(xe.fov=rs*2*Math.atan(1/xe.projectionMatrix.elements[5]),xe.zoom=1)}this.getFoveation=function(){if(!(g===null&&x===null))return l},this.setFoveation=function(se){l=se,g!==null&&(g.fixedFoveation=se),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=se)};let de=null;function ve(se,Se){if(f=Se.getViewerPose(h||a),M=Se,f!==null){const xe=f.views;x!==null&&(e.setRenderTargetFramebuffer(v,x.framebuffer),e.setRenderTarget(v));let Ie=!1;xe.length!==X.cameras.length&&(X.cameras.length=0,Ie=!0);for(let Ce=0;Ce<xe.length;Ce++){const Xe=xe[Ce];let dt=null;if(x!==null)dt=x.getViewport(Xe);else{const bt=p.getViewSubImage(g,Xe);dt=bt.viewport,Ce===0&&(e.setRenderTargetTextures(v,bt.colorTexture,g.ignoreDepthValues?void 0:bt.depthStencilTexture),e.setRenderTarget(v))}let Ze=z[Ce];Ze===void 0&&(Ze=new En,Ze.layers.enable(Ce),Ze.viewport=new Ot,z[Ce]=Ze),Ze.matrix.fromArray(Xe.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(Xe.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(dt.x,dt.y,dt.width,dt.height),Ce===0&&(X.matrix.copy(Ze.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Ie===!0&&X.cameras.push(Ze)}}for(let xe=0;xe<P.length;xe++){const Ie=T[xe],Ce=P[xe];Ie!==null&&Ce!==void 0&&Ce.update(Ie,Se,h||a)}de&&de(se,Se),Se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Se}),M=null}const Fe=new dh;Fe.setAnimationLoop(ve),this.setAnimationLoop=function(se){de=se},this.dispose=function(){}}}function _0(r,e){function t(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function n(y,v){v.color.getRGB(y.fogColor.value,lh(r)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function i(y,v,P,T,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?s(y,v):v.isMeshToonMaterial?(s(y,v),p(y,v)):v.isMeshPhongMaterial?(s(y,v),f(y,v)):v.isMeshStandardMaterial?(s(y,v),g(y,v),v.isMeshPhysicalMaterial&&x(y,v,D)):v.isMeshMatcapMaterial?(s(y,v),M(y,v)):v.isMeshDepthMaterial?s(y,v):v.isMeshDistanceMaterial?(s(y,v),E(y,v)):v.isMeshNormalMaterial?s(y,v):v.isLineBasicMaterial?(a(y,v),v.isLineDashedMaterial&&c(y,v)):v.isPointsMaterial?l(y,v,P,T):v.isSpriteMaterial?h(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function s(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,t(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Ln&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,t(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Ln&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,t(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,t(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const P=e.get(v).envMap;if(P&&(y.envMap.value=P,y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap){y.lightMap.value=v.lightMap;const T=r.useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=v.lightMapIntensity*T,t(v.lightMap,y.lightMapTransform)}v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,y.aoMapTransform))}function a(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform))}function c(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function l(y,v,P,T){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*P,y.scale.value=T*.5,v.map&&(y.map.value=v.map,t(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function h(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function f(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function p(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function g(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,y.roughnessMapTransform)),e.get(v).envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function x(y,v,P){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Ln&&y.clearcoatNormalScale.value.negate())),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,v){v.matcap&&(y.matcap.value=v.matcap)}function E(y,v){const P=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function v0(r,e,t,n){let i={},s={},a=[];const c=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(P,T){const D=T.program;n.uniformBlockBinding(P,D)}function h(P,T){let D=i[P.id];D===void 0&&(M(P),D=f(P),i[P.id]=D,P.addEventListener("dispose",y));const d=T.program;n.updateUBOMapping(P,d);const B=e.render.frame;s[P.id]!==B&&(g(P),s[P.id]=B)}function f(P){const T=p();P.__bindingPointIndex=T;const D=r.createBuffer(),d=P.__size,B=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,d,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,D),D}function p(){for(let P=0;P<c;P++)if(a.indexOf(P)===-1)return a.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(P){const T=i[P.id],D=P.uniforms,d=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let B=0,z=D.length;B<z;B++){const X=D[B];if(x(X,B,d)===!0){const R=X.__offset,U=Array.isArray(X.value)?X.value:[X.value];let ie=0;for(let pe=0;pe<U.length;pe++){const q=U[pe],J=E(q);typeof q=="number"?(X.__data[0]=q,r.bufferSubData(r.UNIFORM_BUFFER,R+ie,X.__data)):q.isMatrix3?(X.__data[0]=q.elements[0],X.__data[1]=q.elements[1],X.__data[2]=q.elements[2],X.__data[3]=q.elements[0],X.__data[4]=q.elements[3],X.__data[5]=q.elements[4],X.__data[6]=q.elements[5],X.__data[7]=q.elements[0],X.__data[8]=q.elements[6],X.__data[9]=q.elements[7],X.__data[10]=q.elements[8],X.__data[11]=q.elements[0]):(q.toArray(X.__data,ie),ie+=J.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,R,X.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(P,T,D){const d=P.value;if(D[T]===void 0){if(typeof d=="number")D[T]=d;else{const B=Array.isArray(d)?d:[d],z=[];for(let X=0;X<B.length;X++)z.push(B[X].clone());D[T]=z}return!0}else if(typeof d=="number"){if(D[T]!==d)return D[T]=d,!0}else{const B=Array.isArray(D[T])?D[T]:[D[T]],z=Array.isArray(d)?d:[d];for(let X=0;X<B.length;X++){const R=B[X];if(R.equals(z[X])===!1)return R.copy(z[X]),!0}}return!1}function M(P){const T=P.uniforms;let D=0;const d=16;let B=0;for(let z=0,X=T.length;z<X;z++){const R=T[z],U={boundary:0,storage:0},ie=Array.isArray(R.value)?R.value:[R.value];for(let pe=0,q=ie.length;pe<q;pe++){const J=ie[pe],Q=E(J);U.boundary+=Q.boundary,U.storage+=Q.storage}if(R.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=D,z>0){B=D%d;const pe=d-B;B!==0&&pe-U.boundary<0&&(D+=d-B,R.__offset=D)}D+=U.storage}return B=D%d,B>0&&(D+=d-B),P.__size=D,P.__cache={},this}function E(P){const T={boundary:0,storage:0};return typeof P=="number"?(T.boundary=4,T.storage=4):P.isVector2?(T.boundary=8,T.storage=8):P.isVector3||P.isColor?(T.boundary=16,T.storage=12):P.isVector4?(T.boundary=16,T.storage=16):P.isMatrix3?(T.boundary=48,T.storage=48):P.isMatrix4?(T.boundary=64,T.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),T}function y(P){const T=P.target;T.removeEventListener("dispose",y);const D=a.indexOf(T.__bindingPointIndex);a.splice(D,1),r.deleteBuffer(i[T.id]),delete i[T.id],delete s[T.id]}function v(){for(const P in i)r.deleteBuffer(i[P]);a=[],i={},s={}}return{bind:l,update:h,dispose:v}}function x0(){const r=Us("canvas");return r.style.display="block",r}class y0{constructor(e={}){const{canvas:t=x0(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:c=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let g;n!==null?g=n.getContextAttributes().alpha:g=a;const x=new Uint32Array(4),M=new Int32Array(4);let E=null,y=null;const v=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=at,this.useLegacyLights=!0,this.toneMapping=Ii,this.toneMappingExposure=1;const T=this;let D=!1,d=0,B=0,z=null,X=-1,R=null;const U=new Ot,ie=new Ot;let pe=null;const q=new rt(0);let J=0,Q=t.width,_e=t.height,le=1,he=null,de=null;const ve=new Ot(0,0,Q,_e),Fe=new Ot(0,0,Q,_e);let se=!1;const Se=new uc;let xe=!1,Ie=!1,Ce=null;const Xe=new xt,dt=new nt,Ze=new H,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function lt(){return z===null?le:1}let K=n;function Ne(L,$){for(let ae=0;ae<L.length;ae++){const Y=L[ae],ce=t.getContext(Y,$);if(ce!==null)return ce}return null}try{const L={alpha:!0,depth:i,stencil:s,antialias:c,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oc}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",be,!1),K===null){const $=["webgl2","webgl","experimental-webgl"];if(T.isWebGL1Renderer===!0&&$.shift(),K=Ne($,L),K===null)throw Ne($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}K instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ke,ut,je,Rt,ft,Je,pt,Pt,Bt,I,C,oe,Te,Ee,N,me,ye,re,He,Oe,Le,ze,Ge,Ke;function _t(){ke=new Lg(K),ut=new Tg(K,ke,e),ke.init(ut),ze=new d0(K,ke,ut),je=new u0(K,ke,ut),Rt=new Ig(K),ft=new $_,Je=new h0(K,ke,je,ft,ut,ze,Rt),pt=new Ag(T),Pt=new Cg(T),Bt=new Xf(K,ut),Ge=new Sg(K,ke,Bt,ut),I=new Pg(K,Bt,Rt,Ge),C=new Fg(K,I,Bt,Rt),He=new Og(K,ut,Je),me=new bg(ft),oe=new K_(T,pt,Pt,ke,ut,Ge,me),Te=new _0(T,ft),Ee=new J_,N=new r0(ke,ut),re=new Mg(T,pt,Pt,je,C,g,l),ye=new l0(T,C,ut),Ke=new v0(K,Rt,ut,je),Oe=new Eg(K,ke,Rt,ut),Le=new Dg(K,ke,Rt,ut),Rt.programs=oe.programs,T.capabilities=ut,T.extensions=ke,T.properties=ft,T.renderLists=Ee,T.shadowMap=ye,T.state=je,T.info=Rt}_t();const G=new g0(T,K);this.xr=G,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const L=ke.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ke.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(L){L!==void 0&&(le=L,this.setSize(Q,_e,!1))},this.getSize=function(L){return L.set(Q,_e)},this.setSize=function(L,$,ae=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=L,_e=$,t.width=Math.floor(L*le),t.height=Math.floor($*le),ae===!0&&(t.style.width=L+"px",t.style.height=$+"px"),this.setViewport(0,0,L,$)},this.getDrawingBufferSize=function(L){return L.set(Q*le,_e*le).floor()},this.setDrawingBufferSize=function(L,$,ae){Q=L,_e=$,le=ae,t.width=Math.floor(L*ae),t.height=Math.floor($*ae),this.setViewport(0,0,L,$)},this.getCurrentViewport=function(L){return L.copy(U)},this.getViewport=function(L){return L.copy(ve)},this.setViewport=function(L,$,ae,Y){L.isVector4?ve.set(L.x,L.y,L.z,L.w):ve.set(L,$,ae,Y),je.viewport(U.copy(ve).multiplyScalar(le).floor())},this.getScissor=function(L){return L.copy(Fe)},this.setScissor=function(L,$,ae,Y){L.isVector4?Fe.set(L.x,L.y,L.z,L.w):Fe.set(L,$,ae,Y),je.scissor(ie.copy(Fe).multiplyScalar(le).floor())},this.getScissorTest=function(){return se},this.setScissorTest=function(L){je.setScissorTest(se=L)},this.setOpaqueSort=function(L){he=L},this.setTransparentSort=function(L){de=L},this.getClearColor=function(L){return L.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(L=!0,$=!0,ae=!0){let Y=0;if(L){let ce=!1;if(z!==null){const Be=z.texture.format;ce=Be===$u||Be===Ku||Be===Yu}if(ce){const Be=z.texture.type,qe=Be===qi||Be===Xi||Be===ac||Be===hr||Be===ju||Be===qu,Qe=re.getClearColor(),tt=re.getClearAlpha(),mt=Qe.r,st=Qe.g,Ye=Qe.b,At=ft.get(z).__webglFramebuffer;qe?(x[0]=mt,x[1]=st,x[2]=Ye,x[3]=tt,K.clearBufferuiv(K.COLOR,At,x)):(M[0]=mt,M[1]=st,M[2]=Ye,M[3]=tt,K.clearBufferiv(K.COLOR,At,M))}else Y|=K.COLOR_BUFFER_BIT}$&&(Y|=K.DEPTH_BUFFER_BIT),ae&&(Y|=K.STENCIL_BUFFER_BIT),K.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Ee.dispose(),N.dispose(),ft.dispose(),pt.dispose(),Pt.dispose(),C.dispose(),Ge.dispose(),Ke.dispose(),oe.dispose(),G.dispose(),G.removeEventListener("sessionstart",kt),G.removeEventListener("sessionend",Dn),Ce&&(Ce.dispose(),Ce=null),pn.stop()};function Re(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const L=Rt.autoReset,$=ye.enabled,ae=ye.autoUpdate,Y=ye.needsUpdate,ce=ye.type;_t(),Rt.autoReset=L,ye.enabled=$,ye.autoUpdate=ae,ye.needsUpdate=Y,ye.type=ce}function be(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Pe(L){const $=L.target;$.removeEventListener("dispose",Pe),yt($)}function yt(L){Dt(L),ft.remove(L)}function Dt(L){const $=ft.get(L).programs;$!==void 0&&($.forEach(function(ae){oe.releaseProgram(ae)}),L.isShaderMaterial&&oe.releaseShaderCache(L))}this.renderBufferDirect=function(L,$,ae,Y,ce,Be){$===null&&($=bt);const qe=ce.isMesh&&ce.matrixWorld.determinant()<0,Qe=Yo(L,$,ae,Y,ce);je.setMaterial(Y,qe);let tt=ae.index,mt=1;Y.wireframe===!0&&(tt=I.getWireframeAttribute(ae),mt=2);const st=ae.drawRange,Ye=ae.attributes.position;let At=st.start*mt,Ft=(st.start+st.count)*mt;Be!==null&&(At=Math.max(At,Be.start*mt),Ft=Math.min(Ft,(Be.start+Be.count)*mt)),tt!==null?(At=Math.max(At,0),Ft=Math.min(Ft,tt.count)):Ye!=null&&(At=Math.max(At,0),Ft=Math.min(Ft,Ye.count));const ln=Ft-At;if(ln<0||ln===1/0)return;Ge.setup(ce,Y,Qe,ae,tt);let Gn,jt=Oe;if(tt!==null&&(Gn=Bt.get(tt),jt=Le,jt.setIndex(Gn)),ce.isMesh)Y.wireframe===!0?(je.setLineWidth(Y.wireframeLinewidth*lt()),jt.setMode(K.LINES)):jt.setMode(K.TRIANGLES);else if(ce.isLine){let Mt=Y.linewidth;Mt===void 0&&(Mt=1),je.setLineWidth(Mt*lt()),ce.isLineSegments?jt.setMode(K.LINES):ce.isLineLoop?jt.setMode(K.LINE_LOOP):jt.setMode(K.LINE_STRIP)}else ce.isPoints?jt.setMode(K.POINTS):ce.isSprite&&jt.setMode(K.TRIANGLES);if(ce.isInstancedMesh)jt.renderInstances(At,ln,ce.count);else if(ae.isInstancedBufferGeometry){const Mt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Qi=Math.min(ae.instanceCount,Mt);jt.renderInstances(At,ln,Qi)}else jt.render(At,ln)},this.compile=function(L,$){function ae(Y,ce,Be){Y.transparent===!0&&Y.side===Yn&&Y.forceSinglePass===!1?(Y.side=Ln,Y.needsUpdate=!0,_i(Y,ce,Be),Y.side=Ui,Y.needsUpdate=!0,_i(Y,ce,Be),Y.side=Yn):_i(Y,ce,Be)}y=N.get(L),y.init(),P.push(y),L.traverseVisible(function(Y){Y.isLight&&Y.layers.test($.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),y.setupLights(T.useLegacyLights),L.traverse(function(Y){const ce=Y.material;if(ce)if(Array.isArray(ce))for(let Be=0;Be<ce.length;Be++){const qe=ce[Be];ae(qe,L,Y)}else ae(ce,L,Y)}),P.pop(),y=null};let Xt=null;function gi(L){Xt&&Xt(L)}function kt(){pn.stop()}function Dn(){pn.start()}const pn=new dh;pn.setAnimationLoop(gi),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(L){Xt=L,G.setAnimationLoop(L),L===null?pn.stop():pn.start()},G.addEventListener("sessionstart",kt),G.addEventListener("sessionend",Dn),this.render=function(L,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&($=G.updateCameraXR($)),L.isScene===!0&&L.onBeforeRender(T,L,$,z),y=N.get(L,P.length),y.init(),P.push(y),Xe.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Se.setFromProjectionMatrix(Xe),Ie=this.localClippingEnabled,xe=me.init(this.clippingPlanes,Ie),E=Ee.get(L,v.length),E.init(),v.push(E),Vs(L,$,0,T.sortObjects),E.finish(),T.sortObjects===!0&&E.sort(he,de),xe===!0&&me.beginShadows();const ae=y.state.shadowsArray;if(ye.render(ae,L,$),xe===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,re.render(E,L),y.setupLights(T.useLegacyLights),$.isArrayCamera){const Y=$.cameras;for(let ce=0,Be=Y.length;ce<Be;ce++){const qe=Y[ce];hs(E,L,qe,qe.viewport)}}else hs(E,L,$);z!==null&&(Je.updateMultisampleRenderTarget(z),Je.updateRenderTargetMipmap(z)),L.isScene===!0&&L.onAfterRender(T,L,$),Ge.resetDefaultState(),X=-1,R=null,P.pop(),P.length>0?y=P[P.length-1]:y=null,v.pop(),v.length>0?E=v[v.length-1]:E=null};function Vs(L,$,ae,Y){if(L.visible===!1)return;if(L.layers.test($.layers)){if(L.isGroup)ae=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update($);else if(L.isLight)y.pushLight(L),L.castShadow&&y.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Se.intersectsSprite(L)){Y&&Ze.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Xe);const qe=C.update(L),Qe=L.material;Qe.visible&&E.push(L,qe,Qe,ae,Ze.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Se.intersectsObject(L))){L.isSkinnedMesh&&L.skeleton.frame!==Rt.render.frame&&(L.skeleton.update(),L.skeleton.frame=Rt.render.frame);const qe=C.update(L),Qe=L.material;if(Y&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ze.copy(L.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),Ze.copy(qe.boundingSphere.center)),Ze.applyMatrix4(L.matrixWorld).applyMatrix4(Xe)),Array.isArray(Qe)){const tt=qe.groups;for(let mt=0,st=tt.length;mt<st;mt++){const Ye=tt[mt],At=Qe[Ye.materialIndex];At&&At.visible&&E.push(L,qe,At,ae,Ze.z,Ye)}}else Qe.visible&&E.push(L,qe,Qe,ae,Ze.z,null)}}const Be=L.children;for(let qe=0,Qe=Be.length;qe<Qe;qe++)Vs(Be[qe],$,ae,Y)}function hs(L,$,ae,Y){const ce=L.opaque,Be=L.transmissive,qe=L.transparent;y.setupLightsView(ae),xe===!0&&me.setGlobalState(T.clippingPlanes,ae),Be.length>0&&Oi(ce,Be,$,ae),Y&&je.viewport(U.copy(Y)),ce.length>0&&Zi(ce,$,ae),Be.length>0&&Zi(Be,$,ae),qe.length>0&&Zi(qe,$,ae),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Oi(L,$,ae,Y){const ce=ut.isWebGL2;Ce===null&&(Ce=new gr(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")?Is:qi,minFilter:mr,samples:ce&&c===!0?4:0})),T.getDrawingBufferSize(dt),ce?Ce.setSize(dt.x,dt.y):Ce.setSize(Oo(dt.x),Oo(dt.y));const Be=T.getRenderTarget();T.setRenderTarget(Ce),T.getClearColor(q),J=T.getClearAlpha(),J<1&&T.setClearColor(16777215,.5),T.clear();const qe=T.toneMapping;T.toneMapping=Ii,Zi(L,ae,Y),Je.updateMultisampleRenderTarget(Ce),Je.updateRenderTargetMipmap(Ce);let Qe=!1;for(let tt=0,mt=$.length;tt<mt;tt++){const st=$[tt],Ye=st.object,At=st.geometry,Ft=st.material,ln=st.group;if(Ft.side===Yn&&Ye.layers.test(Y.layers)){const Gn=Ft.side;Ft.side=Ln,Ft.needsUpdate=!0,yr(Ye,ae,Y,At,Ft,ln),Ft.side=Gn,Ft.needsUpdate=!0,Qe=!0}}Qe===!0&&(Je.updateMultisampleRenderTarget(Ce),Je.updateRenderTargetMipmap(Ce)),T.setRenderTarget(Be),T.setClearColor(q,J),T.toneMapping=qe}function Zi(L,$,ae){const Y=$.isScene===!0?$.overrideMaterial:null;for(let ce=0,Be=L.length;ce<Be;ce++){const qe=L[ce],Qe=qe.object,tt=qe.geometry,mt=Y===null?qe.material:Y,st=qe.group;Qe.layers.test(ae.layers)&&yr(Qe,$,ae,tt,mt,st)}}function yr(L,$,ae,Y,ce,Be){L.onBeforeRender(T,$,ae,Y,ce,Be),L.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ce.onBeforeRender(T,$,ae,Y,L,Be),ce.transparent===!0&&ce.side===Yn&&ce.forceSinglePass===!1?(ce.side=Ln,ce.needsUpdate=!0,T.renderBufferDirect(ae,$,Y,ce,L,Be),ce.side=Ui,ce.needsUpdate=!0,T.renderBufferDirect(ae,$,Y,ce,L,Be),ce.side=Yn):T.renderBufferDirect(ae,$,Y,ce,L,Be),L.onAfterRender(T,$,ae,Y,ce,Be)}function _i(L,$,ae){$.isScene!==!0&&($=bt);const Y=ft.get(L),ce=y.state.lights,Be=y.state.shadowsArray,qe=ce.state.version,Qe=oe.getParameters(L,ce.state,Be,$,ae),tt=oe.getProgramCacheKey(Qe);let mt=Y.programs;Y.environment=L.isMeshStandardMaterial?$.environment:null,Y.fog=$.fog,Y.envMap=(L.isMeshStandardMaterial?Pt:pt).get(L.envMap||Y.environment),mt===void 0&&(L.addEventListener("dispose",Pe),mt=new Map,Y.programs=mt);let st=mt.get(tt);if(st!==void 0){if(Y.currentProgram===st&&Y.lightsStateVersion===qe)return ds(L,Qe),st}else Qe.uniforms=oe.getUniforms(L),L.onBuild(ae,Qe,T),L.onBeforeCompile(Qe,T),st=oe.acquireProgram(Qe,tt),mt.set(tt,st),Y.uniforms=Qe.uniforms;const Ye=Y.uniforms;(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ye.clippingPlanes=me.uniform),ds(L,Qe),Y.needsLights=Ws(L),Y.lightsStateVersion=qe,Y.needsLights&&(Ye.ambientLightColor.value=ce.state.ambient,Ye.lightProbe.value=ce.state.probe,Ye.directionalLights.value=ce.state.directional,Ye.directionalLightShadows.value=ce.state.directionalShadow,Ye.spotLights.value=ce.state.spot,Ye.spotLightShadows.value=ce.state.spotShadow,Ye.rectAreaLights.value=ce.state.rectArea,Ye.ltc_1.value=ce.state.rectAreaLTC1,Ye.ltc_2.value=ce.state.rectAreaLTC2,Ye.pointLights.value=ce.state.point,Ye.pointLightShadows.value=ce.state.pointShadow,Ye.hemisphereLights.value=ce.state.hemi,Ye.directionalShadowMap.value=ce.state.directionalShadowMap,Ye.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,Ye.spotShadowMap.value=ce.state.spotShadowMap,Ye.spotLightMatrix.value=ce.state.spotLightMatrix,Ye.spotLightMap.value=ce.state.spotLightMap,Ye.pointShadowMap.value=ce.state.pointShadowMap,Ye.pointShadowMatrix.value=ce.state.pointShadowMatrix);const At=st.getUniforms(),Ft=Do.seqWithValue(At.seq,Ye);return Y.currentProgram=st,Y.uniformsList=Ft,st}function ds(L,$){const ae=ft.get(L);ae.outputColorSpace=$.outputColorSpace,ae.instancing=$.instancing,ae.skinning=$.skinning,ae.morphTargets=$.morphTargets,ae.morphNormals=$.morphNormals,ae.morphColors=$.morphColors,ae.morphTargetsCount=$.morphTargetsCount,ae.numClippingPlanes=$.numClippingPlanes,ae.numIntersection=$.numClipIntersection,ae.vertexAlphas=$.vertexAlphas,ae.vertexTangents=$.vertexTangents,ae.toneMapping=$.toneMapping}function Yo(L,$,ae,Y,ce){$.isScene!==!0&&($=bt),Je.resetTextureUnits();const Be=$.fog,qe=Y.isMeshStandardMaterial?$.environment:null,Qe=z===null?T.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:hi,tt=(Y.isMeshStandardMaterial?Pt:pt).get(Y.envMap||qe),mt=Y.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,st=!!ae.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ye=!!ae.morphAttributes.position,At=!!ae.morphAttributes.normal,Ft=!!ae.morphAttributes.color,ln=Y.toneMapped?T.toneMapping:Ii,Gn=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,jt=Gn!==void 0?Gn.length:0,Mt=ft.get(Y),Qi=y.state.lights;if(xe===!0&&(Ie===!0||L!==R)){const $t=L===R&&Y.id===X;me.setState(Y,L,$t)}let Yt=!1;Y.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Qi.state.version||Mt.outputColorSpace!==Qe||ce.isInstancedMesh&&Mt.instancing===!1||!ce.isInstancedMesh&&Mt.instancing===!0||ce.isSkinnedMesh&&Mt.skinning===!1||!ce.isSkinnedMesh&&Mt.skinning===!0||Mt.envMap!==tt||Y.fog===!0&&Mt.fog!==Be||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==me.numPlanes||Mt.numIntersection!==me.numIntersection)||Mt.vertexAlphas!==mt||Mt.vertexTangents!==st||Mt.morphTargets!==Ye||Mt.morphNormals!==At||Mt.morphColors!==Ft||Mt.toneMapping!==ln||ut.isWebGL2===!0&&Mt.morphTargetsCount!==jt)&&(Yt=!0):(Yt=!0,Mt.__version=Y.version);let Vn=Mt.currentProgram;Yt===!0&&(Vn=_i(Y,$,ce));let fs=!1,mn=!1,Mr=!1;const Kt=Vn.getUniforms(),vi=Mt.uniforms;if(je.useProgram(Vn.program)&&(fs=!0,mn=!0,Mr=!0),Y.id!==X&&(X=Y.id,mn=!0),fs||R!==L){if(Kt.setValue(K,"projectionMatrix",L.projectionMatrix),ut.logarithmicDepthBuffer&&Kt.setValue(K,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),R!==L&&(R=L,mn=!0,Mr=!0),Y.isShaderMaterial||Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshStandardMaterial||Y.envMap){const $t=Kt.map.cameraPosition;$t!==void 0&&$t.setValue(K,Ze.setFromMatrixPosition(L.matrixWorld))}(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Kt.setValue(K,"isOrthographic",L.isOrthographicCamera===!0),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial||Y.isShadowMaterial||ce.isSkinnedMesh)&&Kt.setValue(K,"viewMatrix",L.matrixWorldInverse)}if(ce.isSkinnedMesh){Kt.setOptional(K,ce,"bindMatrix"),Kt.setOptional(K,ce,"bindMatrixInverse");const $t=ce.skeleton;$t&&(ut.floatVertexTextures?($t.boneTexture===null&&$t.computeBoneTexture(),Kt.setValue(K,"boneTexture",$t.boneTexture,Je),Kt.setValue(K,"boneTextureSize",$t.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ps=ae.morphAttributes;if((ps.position!==void 0||ps.normal!==void 0||ps.color!==void 0&&ut.isWebGL2===!0)&&He.update(ce,ae,Vn),(mn||Mt.receiveShadow!==ce.receiveShadow)&&(Mt.receiveShadow=ce.receiveShadow,Kt.setValue(K,"receiveShadow",ce.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(vi.envMap.value=tt,vi.flipEnvMap.value=tt.isCubeTexture&&tt.isRenderTargetTexture===!1?-1:1),mn&&(Kt.setValue(K,"toneMappingExposure",T.toneMappingExposure),Mt.needsLights&&Ji(vi,Mr),Be&&Y.fog===!0&&Te.refreshFogUniforms(vi,Be),Te.refreshMaterialUniforms(vi,Y,le,_e,Ce),Do.upload(K,Mt.uniformsList,vi,Je)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Do.upload(K,Mt.uniformsList,vi,Je),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Kt.setValue(K,"center",ce.center),Kt.setValue(K,"modelViewMatrix",ce.modelViewMatrix),Kt.setValue(K,"normalMatrix",ce.normalMatrix),Kt.setValue(K,"modelMatrix",ce.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const $t=Y.uniformsGroups;for(let Zn=0,ms=$t.length;Zn<ms;Zn++)if(ut.isWebGL2){const Xs=$t[Zn];Ke.update(Xs,Vn),Ke.bind(Xs,Vn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vn}function Ji(L,$){L.ambientLightColor.needsUpdate=$,L.lightProbe.needsUpdate=$,L.directionalLights.needsUpdate=$,L.directionalLightShadows.needsUpdate=$,L.pointLights.needsUpdate=$,L.pointLightShadows.needsUpdate=$,L.spotLights.needsUpdate=$,L.spotLightShadows.needsUpdate=$,L.rectAreaLights.needsUpdate=$,L.hemisphereLights.needsUpdate=$}function Ws(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return d},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(L,$,ae){ft.get(L.texture).__webglTexture=$,ft.get(L.depthTexture).__webglTexture=ae;const Y=ft.get(L);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=ae===void 0,Y.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,$){const ae=ft.get(L);ae.__webglFramebuffer=$,ae.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(L,$=0,ae=0){z=L,d=$,B=ae;let Y=!0,ce=null,Be=!1,qe=!1;if(L){const tt=ft.get(L);tt.__useDefaultFramebuffer!==void 0?(je.bindFramebuffer(K.FRAMEBUFFER,null),Y=!1):tt.__webglFramebuffer===void 0?Je.setupRenderTarget(L):tt.__hasExternalTextures&&Je.rebindTextures(L,ft.get(L.texture).__webglTexture,ft.get(L.depthTexture).__webglTexture);const mt=L.texture;(mt.isData3DTexture||mt.isDataArrayTexture||mt.isCompressedArrayTexture)&&(qe=!0);const st=ft.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(ce=st[$],Be=!0):ut.isWebGL2&&L.samples>0&&Je.useMultisampledRTT(L)===!1?ce=ft.get(L).__webglMultisampledFramebuffer:ce=st,U.copy(L.viewport),ie.copy(L.scissor),pe=L.scissorTest}else U.copy(ve).multiplyScalar(le).floor(),ie.copy(Fe).multiplyScalar(le).floor(),pe=se;if(je.bindFramebuffer(K.FRAMEBUFFER,ce)&&ut.drawBuffers&&Y&&je.drawBuffers(L,ce),je.viewport(U),je.scissor(ie),je.setScissorTest(pe),Be){const tt=ft.get(L.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+$,tt.__webglTexture,ae)}else if(qe){const tt=ft.get(L.texture),mt=$||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,tt.__webglTexture,ae||0,mt)}X=-1},this.readRenderTargetPixels=function(L,$,ae,Y,ce,Be,qe){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=ft.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&qe!==void 0&&(Qe=Qe[qe]),Qe){je.bindFramebuffer(K.FRAMEBUFFER,Qe);try{const tt=L.texture,mt=tt.format,st=tt.type;if(mt!==$n&&ze.convert(mt)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=st===Is&&(ke.has("EXT_color_buffer_half_float")||ut.isWebGL2&&ke.has("EXT_color_buffer_float"));if(st!==qi&&ze.convert(st)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_TYPE)&&!(st===Li&&(ut.isWebGL2||ke.has("OES_texture_float")||ke.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=L.width-Y&&ae>=0&&ae<=L.height-ce&&K.readPixels($,ae,Y,ce,ze.convert(mt),ze.convert(st),Be)}finally{const tt=z!==null?ft.get(z).__webglFramebuffer:null;je.bindFramebuffer(K.FRAMEBUFFER,tt)}}},this.copyFramebufferToTexture=function(L,$,ae=0){const Y=Math.pow(2,-ae),ce=Math.floor($.image.width*Y),Be=Math.floor($.image.height*Y);Je.setTexture2D($,0),K.copyTexSubImage2D(K.TEXTURE_2D,ae,0,0,L.x,L.y,ce,Be),je.unbindTexture()},this.copyTextureToTexture=function(L,$,ae,Y=0){const ce=$.image.width,Be=$.image.height,qe=ze.convert(ae.format),Qe=ze.convert(ae.type);Je.setTexture2D(ae,0),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,ae.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,ae.unpackAlignment),$.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Y,L.x,L.y,ce,Be,qe,Qe,$.image.data):$.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Y,L.x,L.y,$.mipmaps[0].width,$.mipmaps[0].height,qe,$.mipmaps[0].data):K.texSubImage2D(K.TEXTURE_2D,Y,L.x,L.y,qe,Qe,$.image),Y===0&&ae.generateMipmaps&&K.generateMipmap(K.TEXTURE_2D),je.unbindTexture()},this.copyTextureToTexture3D=function(L,$,ae,Y,ce=0){if(T.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Be=L.max.x-L.min.x+1,qe=L.max.y-L.min.y+1,Qe=L.max.z-L.min.z+1,tt=ze.convert(Y.format),mt=ze.convert(Y.type);let st;if(Y.isData3DTexture)Je.setTexture3D(Y,0),st=K.TEXTURE_3D;else if(Y.isDataArrayTexture)Je.setTexture2DArray(Y,0),st=K.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,Y.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ye=K.getParameter(K.UNPACK_ROW_LENGTH),At=K.getParameter(K.UNPACK_IMAGE_HEIGHT),Ft=K.getParameter(K.UNPACK_SKIP_PIXELS),ln=K.getParameter(K.UNPACK_SKIP_ROWS),Gn=K.getParameter(K.UNPACK_SKIP_IMAGES),jt=ae.isCompressedTexture?ae.mipmaps[0]:ae.image;K.pixelStorei(K.UNPACK_ROW_LENGTH,jt.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,jt.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,L.min.x),K.pixelStorei(K.UNPACK_SKIP_ROWS,L.min.y),K.pixelStorei(K.UNPACK_SKIP_IMAGES,L.min.z),ae.isDataTexture||ae.isData3DTexture?K.texSubImage3D(st,ce,$.x,$.y,$.z,Be,qe,Qe,tt,mt,jt.data):ae.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(st,ce,$.x,$.y,$.z,Be,qe,Qe,tt,jt.data)):K.texSubImage3D(st,ce,$.x,$.y,$.z,Be,qe,Qe,tt,mt,jt),K.pixelStorei(K.UNPACK_ROW_LENGTH,Ye),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,At),K.pixelStorei(K.UNPACK_SKIP_PIXELS,Ft),K.pixelStorei(K.UNPACK_SKIP_ROWS,ln),K.pixelStorei(K.UNPACK_SKIP_IMAGES,Gn),ce===0&&Y.generateMipmaps&&K.generateMipmap(st),je.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?Je.setTextureCube(L,0):L.isData3DTexture?Je.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Je.setTexture2DArray(L,0):Je.setTexture2D(L,0),je.unbindTexture()},this.resetState=function(){d=0,B=0,z=null,je.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===at?fr:Ju}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===fr?at:hi}}class _h extends y0{}_h.prototype.isWebGL1Renderer=!0;class M0 extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class S0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$a,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Mn=new H;class fc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Di(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Di(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Di(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Di(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),i=Ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),i=Ut(i,this.array),s=Ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new bn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const cu=new H,lu=new Ot,uu=new Ot,E0=new H,hu=new xt,Vr=new H,Ua=new pi,du=new xt,Oa=new ks;class T0 extends Tn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new xt,this.bindMatrixInverse=new xt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Vr.fromBufferAttribute(t,n),this.applyBoneTransform(n,Vr),this.boundingBox.expandByPoint(Vr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Vr.fromBufferAttribute(t,n),this.applyBoneTransform(n,Vr),this.boundingSphere.expandByPoint(Vr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ua.copy(this.boundingSphere),Ua.applyMatrix4(i),e.ray.intersectsSphere(Ua)!==!1&&(du.copy(i).invert(),Oa.copy(e.ray).applyMatrix4(du),!(this.boundingBox!==null&&Oa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Oa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ot,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;lu.fromBufferAttribute(i.attributes.skinIndex,e),uu.fromBufferAttribute(i.attributes.skinWeight,e),cu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=uu.getComponent(s);if(a!==0){const c=lu.getComponent(s);hu.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),t.addScaledVector(E0.copy(cu).applyMatrix4(hu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class vh extends Vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class b0 extends dn{constructor(e=null,t=1,n=1,i,s,a,c,l,h=on,f=on,p,g){super(null,a,c,l,h,f,i,s,p,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fu=new xt,A0=new xt;class pc{constructor(e=[],t=[]){this.uuid=oi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new xt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new xt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const c=e[s]?e[s].matrixWorld:A0;fu.multiplyMatrices(c,t[s]),fu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new pc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=th(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new b0(t,e,e,$n,Li);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new vh),this.bones.push(a),this.boneInverses.push(new xt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const c=n[i];e.boneInverses.push(c.toArray())}return e}}class pu extends bn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Wr=new xt,mu=new xt,Mo=[],gu=new fi,w0=new xt,Ts=new Tn,bs=new pi;class R0 extends Tn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new pu(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,w0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wr),gu.copy(e.boundingBox).applyMatrix4(Wr),this.boundingBox.union(gu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wr),bs.copy(e.boundingSphere).applyMatrix4(Wr),this.boundingSphere.union(bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ts.geometry=this.geometry,Ts.material=this.material,Ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bs.copy(this.boundingSphere),bs.applyMatrix4(n),e.ray.intersectsSphere(bs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Wr),mu.multiplyMatrices(n,Wr),Ts.matrixWorld=mu,Ts.raycast(e,Mo);for(let a=0,c=Mo.length;a<c;a++){const l=Mo[a];l.instanceId=s,l.object=this,t.push(l)}Mo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new pu(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Os extends ui{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _u=new H,vu=new H,xu=new xt,Fa=new ks,So=new pi;class mc extends Vt{constructor(e=new Pn,t=new Os){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)_u.fromBufferAttribute(t,i-1),vu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=_u.distanceTo(vu);e.setAttribute("lineDistance",new fn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(i),So.radius+=s,e.ray.intersectsSphere(So)===!1)return;xu.copy(i).invert(),Fa.copy(e.ray).applyMatrix4(xu);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=c*c,h=new H,f=new H,p=new H,g=new H,x=this.isLineSegments?2:1,M=n.index,y=n.attributes.position;if(M!==null){const v=Math.max(0,a.start),P=Math.min(M.count,a.start+a.count);for(let T=v,D=P-1;T<D;T+=x){const d=M.getX(T),B=M.getX(T+1);if(h.fromBufferAttribute(y,d),f.fromBufferAttribute(y,B),Fa.distanceSqToSegment(h,f,g,p)>l)continue;g.applyMatrix4(this.matrixWorld);const X=e.ray.origin.distanceTo(g);X<e.near||X>e.far||t.push({distance:X,point:p.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,a.start),P=Math.min(y.count,a.start+a.count);for(let T=v,D=P-1;T<D;T+=x){if(h.fromBufferAttribute(y,T),f.fromBufferAttribute(y,T+1),Fa.distanceSqToSegment(h,f,g,p)>l)continue;g.applyMatrix4(this.matrixWorld);const B=e.ray.origin.distanceTo(g);B<e.near||B>e.far||t.push({distance:B,point:p.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}const yu=new H,Mu=new H;class Fo extends mc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)yu.fromBufferAttribute(t,i),Mu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+yu.distanceTo(Mu);e.setAttribute("lineDistance",new fn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class C0 extends mc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class xh extends ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Su=new xt,ec=new ks,Eo=new pi,To=new H;class L0 extends Vt{constructor(e=new Pn,t=new xh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(i),Eo.radius+=s,e.ray.intersectsSphere(Eo)===!1)return;Su.copy(i).invert(),ec.copy(e.ray).applyMatrix4(Su);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=c*c,h=n.index,p=n.attributes.position;if(h!==null){const g=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let M=g,E=x;M<E;M++){const y=h.getX(M);To.fromBufferAttribute(p,y),Eu(To,y,l,i,e,t,this)}}else{const g=Math.max(0,a.start),x=Math.min(p.count,a.start+a.count);for(let M=g,E=x;M<E;M++)To.fromBufferAttribute(p,M),Eu(To,M,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function Eu(r,e,t,n,i,s,a){const c=ec.distanceSqToPoint(r);if(c<t){const l=new H;ec.closestPointToPoint(r,l),l.applyMatrix4(n);const h=i.ray.origin.distanceTo(l);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(c),point:l,index:e,face:null,object:a})}}class P0 extends dn{constructor(e,t,n,i,s,a,c,l,h){super(e,t,n,i,s,a,c,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gc extends Pn{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,c=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:c,thetaLength:l};const h=this;i=Math.floor(i),s=Math.floor(s);const f=[],p=[],g=[],x=[];let M=0;const E=[],y=n/2;let v=0;P(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(f),this.setAttribute("position",new fn(p,3)),this.setAttribute("normal",new fn(g,3)),this.setAttribute("uv",new fn(x,2));function P(){const D=new H,d=new H;let B=0;const z=(t-e)/n;for(let X=0;X<=s;X++){const R=[],U=X/s,ie=U*(t-e)+e;for(let pe=0;pe<=i;pe++){const q=pe/i,J=q*l+c,Q=Math.sin(J),_e=Math.cos(J);d.x=ie*Q,d.y=-U*n+y,d.z=ie*_e,p.push(d.x,d.y,d.z),D.set(Q,z,_e).normalize(),g.push(D.x,D.y,D.z),x.push(q,1-U),R.push(M++)}E.push(R)}for(let X=0;X<i;X++)for(let R=0;R<s;R++){const U=E[R][X],ie=E[R+1][X],pe=E[R+1][X+1],q=E[R][X+1];f.push(U,ie,q),f.push(ie,pe,q),B+=6}h.addGroup(v,B,0),v+=B}function T(D){const d=M,B=new nt,z=new H;let X=0;const R=D===!0?e:t,U=D===!0?1:-1;for(let pe=1;pe<=i;pe++)p.push(0,y*U,0),g.push(0,U,0),x.push(.5,.5),M++;const ie=M;for(let pe=0;pe<=i;pe++){const J=pe/i*l+c,Q=Math.cos(J),_e=Math.sin(J);z.x=R*_e,z.y=y*U,z.z=R*Q,p.push(z.x,z.y,z.z),g.push(0,U,0),B.x=Q*.5+.5,B.y=_e*.5*U+.5,x.push(B.x,B.y),M++}for(let pe=0;pe<i;pe++){const q=d+pe,J=ie+pe;D===!0?f.push(J,J+1,q):f.push(J+1,J,q),X+=3}h.addGroup(v,X,D===!0?1:2),v+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _c extends gc{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,c=Math.PI*2){super(0,e,t,n,i,s,a,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:c}}static fromJSON(e){return new _c(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const bo=new H,Ao=new H,Ba=new H,wo=new qn;class Tu extends Pn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(Zr*t),a=e.getIndex(),c=e.getAttribute("position"),l=a?a.count:c.count,h=[0,0,0],f=["a","b","c"],p=new Array(3),g={},x=[];for(let M=0;M<l;M+=3){a?(h[0]=a.getX(M),h[1]=a.getX(M+1),h[2]=a.getX(M+2)):(h[0]=M,h[1]=M+1,h[2]=M+2);const{a:E,b:y,c:v}=wo;if(E.fromBufferAttribute(c,h[0]),y.fromBufferAttribute(c,h[1]),v.fromBufferAttribute(c,h[2]),wo.getNormal(Ba),p[0]=`${Math.round(E.x*i)},${Math.round(E.y*i)},${Math.round(E.z*i)}`,p[1]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,p[2]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let P=0;P<3;P++){const T=(P+1)%3,D=p[P],d=p[T],B=wo[f[P]],z=wo[f[T]],X=`${D}_${d}`,R=`${d}_${D}`;R in g&&g[R]?(Ba.dot(g[R].normal)<=s&&(x.push(B.x,B.y,B.z),x.push(z.x,z.y,z.z)),g[R]=null):X in g||(g[X]={index0:h[P],index1:h[T],normal:Ba.clone()})}}for(const M in g)if(g[M]){const{index0:E,index1:y}=g[M];bo.fromBufferAttribute(c,E),Ao.fromBufferAttribute(c,y),x.push(bo.x,bo.y,bo.z),x.push(Ao.x,Ao.y,Ao.z)}this.setAttribute("position",new fn(x,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class vc extends Pn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+c,Math.PI);let h=0;const f=[],p=new H,g=new H,x=[],M=[],E=[],y=[];for(let v=0;v<=n;v++){const P=[],T=v/n;let D=0;v===0&&a===0?D=.5/t:v===n&&l===Math.PI&&(D=-.5/t);for(let d=0;d<=t;d++){const B=d/t;p.x=-e*Math.cos(i+B*s)*Math.sin(a+T*c),p.y=e*Math.cos(a+T*c),p.z=e*Math.sin(i+B*s)*Math.sin(a+T*c),M.push(p.x,p.y,p.z),g.copy(p).normalize(),E.push(g.x,g.y,g.z),y.push(B+D,1-T),P.push(h++)}f.push(P)}for(let v=0;v<n;v++)for(let P=0;P<t;P++){const T=f[v][P+1],D=f[v][P],d=f[v+1][P],B=f[v+1][P+1];(v!==0||a>0)&&x.push(T,D,B),(v!==n-1||l<Math.PI)&&x.push(D,d,B)}this.setIndex(x),this.setAttribute("position",new fn(M,3)),this.setAttribute("normal",new fn(E,3)),this.setAttribute("uv",new fn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xc extends ui{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qu,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $i extends xc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function zi(r,e,t){return yh(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function Ro(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function yh(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function D0(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function bu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const c=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[c+l]}return i}function Mh(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class Hs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let c=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const c=t[1];e<c&&(n=2,s=c);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const c=n+a>>>1;e<t[c]?a=c:n=c+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class I0 extends Hs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yl,endingEnd:yl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,c=i[s],l=i[a];if(c===void 0)switch(this.getSettings_().endingStart){case Ml:s=e,c=2*t-n;break;case Sl:s=i.length-2,c=t+i[s]-i[s+1];break;default:s=e,c=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ml:a=e,l=2*n-t;break;case Sl:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const h=(n-t)*.5,f=this.valueSize;this._weightPrev=h/(t-c),this._weightNext=h/(l-n),this._offsetPrev=s*f,this._offsetNext=a*f}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,l=e*c,h=l-c,f=this._offsetPrev,p=this._offsetNext,g=this._weightPrev,x=this._weightNext,M=(n-t)/(i-t),E=M*M,y=E*M,v=-g*y+2*g*E-g*M,P=(1+g)*y+(-1.5-2*g)*E+(-.5+g)*M+1,T=(-1-x)*y+(1.5+x)*E+.5*M,D=x*y-x*E;for(let d=0;d!==c;++d)s[d]=v*a[f+d]+P*a[h+d]+T*a[l+d]+D*a[p+d];return s}}class N0 extends Hs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,l=e*c,h=l-c,f=(n-t)/(i-t),p=1-f;for(let g=0;g!==c;++g)s[g]=a[h+g]*p+a[l+g]*f;return s}}class U0 extends Hs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class mi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ro(t,this.TimeBufferType),this.values=Ro(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ro(e.times,Array),values:Ro(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new U0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new N0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new I0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ns:t=this.InterpolantFactoryMethodDiscrete;break;case is:t=this.InterpolantFactoryMethodLinear;break;case da:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ns;case this.InterpolantFactoryMethodLinear:return is;case this.InterpolantFactoryMethodSmooth:return da}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const c=this.getValueSize();this.times=zi(n,s,a),this.values=zi(this.values,s*c,a*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let c=0;c!==s;c++){const l=n[c];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,l,a),e=!1;break}a=l}if(i!==void 0&&yh(i))for(let c=0,l=i.length;c!==l;++c){const h=i[c];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,h),e=!1;break}}return e}optimize(){const e=zi(this.times),t=zi(this.values),n=this.getValueSize(),i=this.getInterpolation()===da,s=e.length-1;let a=1;for(let c=1;c<s;++c){let l=!1;const h=e[c],f=e[c+1];if(h!==f&&(c!==1||h!==e[0]))if(i)l=!0;else{const p=c*n,g=p-n,x=p+n;for(let M=0;M!==n;++M){const E=t[p+M];if(E!==t[g+M]||E!==t[x+M]){l=!0;break}}}if(l){if(c!==a){e[a]=e[c];const p=c*n,g=a*n;for(let x=0;x!==n;++x)t[g+x]=t[p+x]}++a}}if(s>0){e[a]=e[s];for(let c=s*n,l=a*n,h=0;h!==n;++h)t[l+h]=t[c+h];++a}return a!==e.length?(this.times=zi(e,0,a),this.values=zi(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=zi(this.times,0),t=zi(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=is;class ls extends mi{}ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Ns;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;class Sh extends mi{}Sh.prototype.ValueTypeName="color";class Fs extends mi{}Fs.prototype.ValueTypeName="number";class O0 extends Hs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,l=(n-t)/(i-t);let h=e*c;for(let f=h+c;h!==f;h+=4)di.slerpFlat(s,0,a,h-c,a,h,l);return s}}class vr extends mi{InterpolantFactoryMethodLinear(e){return new O0(this.times,this.values,this.getValueSize(),e)}}vr.prototype.ValueTypeName="quaternion";vr.prototype.DefaultInterpolation=is;vr.prototype.InterpolantFactoryMethodSmooth=void 0;class us extends mi{}us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Ns;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;class Bs extends mi{}Bs.prototype.ValueTypeName="vector";class F0{constructor(e,t=-1,n,i=Wd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=oi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,c=n.length;a!==c;++a)t.push(k0(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(mi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let c=0;c<s;c++){let l=[],h=[];l.push((c+s-1)%s,c,(c+1)%s),h.push(0,1,0);const f=D0(l);l=bu(l,1,f),h=bu(h,1,f),!i&&l[0]===0&&(l.push(s),h.push(h[0])),a.push(new Fs(".morphTargetInfluences["+t[c].name+"]",l,h).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let c=0,l=e.length;c<l;c++){const h=e[c],f=h.name.match(s);if(f&&f.length>1){const p=f[1];let g=i[p];g||(i[p]=g=[]),g.push(h)}}const a=[];for(const c in i)a.push(this.CreateFromMorphTargetSequence(c,i[c],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(p,g,x,M,E){if(x.length!==0){const y=[],v=[];Mh(x,y,v,M),y.length!==0&&E.push(new p(g,y,v))}},i=[],s=e.name||"default",a=e.fps||30,c=e.blendMode;let l=e.length||-1;const h=e.hierarchy||[];for(let p=0;p<h.length;p++){const g=h[p].keys;if(!(!g||g.length===0))if(g[0].morphTargets){const x={};let M;for(M=0;M<g.length;M++)if(g[M].morphTargets)for(let E=0;E<g[M].morphTargets.length;E++)x[g[M].morphTargets[E]]=-1;for(const E in x){const y=[],v=[];for(let P=0;P!==g[M].morphTargets.length;++P){const T=g[M];y.push(T.time),v.push(T.morphTarget===E?1:0)}i.push(new Fs(".morphTargetInfluence["+E+"]",y,v))}l=x.length*a}else{const x=".bones["+t[p].name+"]";n(Bs,x+".position",g,"pos",i),n(vr,x+".quaternion",g,"rot",i),n(Bs,x+".scale",g,"scl",i)}}return i.length===0?null:new this(s,l,i,c)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function B0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fs;case"vector":case"vector2":case"vector3":case"vector4":return Bs;case"color":return Sh;case"quaternion":return vr;case"bool":case"boolean":return ls;case"string":return us}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function k0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=B0(r.type);if(r.times===void 0){const t=[],n=[];Mh(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const os={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class H0{constructor(e,t,n){const i=this;let s=!1,a=0,c=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){c++,s===!1&&i.onStart!==void 0&&i.onStart(f,a,c),s=!0},this.itemEnd=function(f){a++,i.onProgress!==void 0&&i.onProgress(f,a,c),a===c&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return h.push(f,p),this},this.removeHandler=function(f){const p=h.indexOf(f);return p!==-1&&h.splice(p,2),this},this.getHandler=function(f){for(let p=0,g=h.length;p<g;p+=2){const x=h[p],M=h[p+1];if(x.global&&(x.lastIndex=0),x.test(f))return M}return null}}}const z0=new H0;class zs{constructor(e){this.manager=e!==void 0?e:z0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const wi={};class G0 extends Error{constructor(e,t){super(e),this.response=t}}class Eh extends zs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=os.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(wi[e]!==void 0){wi[e].push({onLoad:t,onProgress:n,onError:i});return}wi[e]=[],wi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,l=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const f=wi[e],p=h.body.getReader(),g=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),x=g?parseInt(g):0,M=x!==0;let E=0;const y=new ReadableStream({start(v){P();function P(){p.read().then(({done:T,value:D})=>{if(T)v.close();else{E+=D.byteLength;const d=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:x});for(let B=0,z=f.length;B<z;B++){const X=f[B];X.onProgress&&X.onProgress(d)}v.enqueue(D),P()}})}}});return new Response(y)}else throw new G0(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(f=>new DOMParser().parseFromString(f,c));case"json":return h.json();default:if(c===void 0)return h.text();{const p=/charset="?([^;"\s]*)"?/i.exec(c),g=p&&p[1]?p[1].toLowerCase():void 0,x=new TextDecoder(g);return h.arrayBuffer().then(M=>x.decode(M))}}}).then(h=>{os.add(e,h);const f=wi[e];delete wi[e];for(let p=0,g=f.length;p<g;p++){const x=f[p];x.onLoad&&x.onLoad(h)}}).catch(h=>{const f=wi[e];if(f===void 0)throw this.manager.itemError(e),h;delete wi[e];for(let p=0,g=f.length;p<g;p++){const x=f[p];x.onError&&x.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class V0 extends zs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=os.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const c=Us("img");function l(){f(),os.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(p){f(),i&&i(p),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){c.removeEventListener("load",l,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",l,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),s.manager.itemStart(e),c.src=e,c}}class W0 extends zs{constructor(e){super(e)}load(e,t,n,i){const s=new dn,a=new V0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(c){s.image=c,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Xo extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ka=new xt,Au=new H,wu=new H;class yc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uc,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Au.setFromMatrixPosition(e.matrixWorld),t.position.copy(Au),wu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wu),t.updateMatrixWorld(),ka.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ka),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ka)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class X0 extends yc{constructor(){super(new En(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=rs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class j0 extends Xo{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new X0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ru=new xt,As=new H,Ha=new H;class q0 extends yc{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new Ot(2,1,1,1),new Ot(0,1,1,1),new Ot(3,1,1,1),new Ot(1,1,1,1),new Ot(3,0,1,1),new Ot(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),As.setFromMatrixPosition(e.matrixWorld),n.position.copy(As),Ha.copy(n.position),Ha.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ha),n.updateMatrixWorld(),i.makeTranslation(-As.x,-As.y,-As.z),Ru.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ru)}}class jo extends Xo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new q0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Y0 extends yc{constructor(){super(new hc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class K0 extends Xo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new Y0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class $0 extends Xo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class tc{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Z0 extends zs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=os.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader,fetch(e,c).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){os.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const Mc="\\[\\]\\.:\\/",J0=new RegExp("["+Mc+"]","g"),Sc="[^"+Mc+"]",Q0="[^"+Mc.replace("\\.","")+"]",ev=/((?:WC+[\/:])*)/.source.replace("WC",Sc),tv=/(WCOD+)?/.source.replace("WCOD",Q0),nv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sc),iv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sc),rv=new RegExp("^"+ev+tv+nv+iv+"$"),sv=["material","materials","bones","map"];class ov{constructor(e,t,n){const i=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ct{constructor(e,t,n){this.path=t,this.parsedPath=n||Ct.parseTrackName(t),this.node=Ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ct.Composite(e,t,n):new Ct(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(J0,"")}static parseTrackName(e){const t=rv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);sv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const c=s[a];if(c.name===t||c.uuid===t)return c;const l=n(c.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===h){h=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const a=e[i];if(a===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ct.Composite=ov;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class av{constructor(e,t,n=0,i=1/0){this.ray=new ks(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new lc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return nc(e,this,n,t),n.sort(Cu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)nc(e[i],this,n,t);return n.sort(Cu),n}}function Cu(r,e){return r.distance-e.distance}function nc(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)nc(i[s],e,t,!0)}}class Lu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(gn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class cv extends Fo{constructor(e=10,t=10,n=4473924,i=8947848){n=new rt(n),i=new rt(i);const s=t/2,a=e/t,c=e/2,l=[],h=[];for(let g=0,x=0,M=-c;g<=t;g++,M+=a){l.push(-c,0,M,c,0,M),l.push(M,0,-c,M,0,c);const E=g===s?n:i;E.toArray(h,x),x+=3,E.toArray(h,x),x+=3,E.toArray(h,x),x+=3,E.toArray(h,x),x+=3}const f=new Pn;f.setAttribute("position",new fn(l,3)),f.setAttribute("color",new fn(h,3));const p=new Os({vertexColors:!0,toneMapped:!1});super(f,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oc);const Pu={type:"change"},za={type:"start"},Du={type:"end"};class lv extends xr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:br.ROTATE,MIDDLE:br.DOLLY,RIGHT:br.PAN},this.touches={ONE:Ar.ROTATE,TWO:Ar.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",pt),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",pt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Pu),n.update(),s=i.NONE},this.update=function(){const N=new H,me=new di().setFromUnitVectors(e.up,new H(0,1,0)),ye=me.clone().invert(),re=new H,He=new di,Oe=new H,Le=2*Math.PI;return function(){const Ge=n.object.position;N.copy(Ge).sub(n.target),N.applyQuaternion(me),c.setFromVector3(N),n.autoRotate&&s===i.NONE&&R(z()),n.enableDamping?(c.theta+=l.theta*n.dampingFactor,c.phi+=l.phi*n.dampingFactor):(c.theta+=l.theta,c.phi+=l.phi);let Ke=n.minAzimuthAngle,_t=n.maxAzimuthAngle;return isFinite(Ke)&&isFinite(_t)&&(Ke<-Math.PI?Ke+=Le:Ke>Math.PI&&(Ke-=Le),_t<-Math.PI?_t+=Le:_t>Math.PI&&(_t-=Le),Ke<=_t?c.theta=Math.max(Ke,Math.min(_t,c.theta)):c.theta=c.theta>(Ke+_t)/2?Math.max(Ke,c.theta):Math.min(_t,c.theta)),c.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,c.phi)),c.makeSafe(),c.radius*=h,c.radius=Math.max(n.minDistance,Math.min(n.maxDistance,c.radius)),n.enableDamping===!0?n.target.addScaledVector(f,n.dampingFactor):n.target.add(f),N.setFromSpherical(c),N.applyQuaternion(ye),Ge.copy(n.target).add(N),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,f.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),f.set(0,0,0)),h=1,p||re.distanceToSquared(n.object.position)>a||8*(1-He.dot(n.object.quaternion))>a||Oe.distanceToSquared(n.target)>0?(n.dispatchEvent(Pu),re.copy(n.object.position),He.copy(n.object.quaternion),Oe.copy(n.target),p=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",I),n.domElement.removeEventListener("pointerdown",ke),n.domElement.removeEventListener("pointercancel",je),n.domElement.removeEventListener("wheel",Je),n.domElement.removeEventListener("pointermove",ut),n.domElement.removeEventListener("pointerup",je),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",pt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,c=new Lu,l=new Lu;let h=1;const f=new H;let p=!1;const g=new nt,x=new nt,M=new nt,E=new nt,y=new nt,v=new nt,P=new nt,T=new nt,D=new nt,d=[],B={};function z(){return 2*Math.PI/60/60*n.autoRotateSpeed}function X(){return Math.pow(.95,n.zoomSpeed)}function R(N){l.theta-=N}function U(N){l.phi-=N}const ie=function(){const N=new H;return function(ye,re){N.setFromMatrixColumn(re,0),N.multiplyScalar(-ye),f.add(N)}}(),pe=function(){const N=new H;return function(ye,re){n.screenSpacePanning===!0?N.setFromMatrixColumn(re,1):(N.setFromMatrixColumn(re,0),N.crossVectors(n.object.up,N)),N.multiplyScalar(ye),f.add(N)}}(),q=function(){const N=new H;return function(ye,re){const He=n.domElement;if(n.object.isPerspectiveCamera){const Oe=n.object.position;N.copy(Oe).sub(n.target);let Le=N.length();Le*=Math.tan(n.object.fov/2*Math.PI/180),ie(2*ye*Le/He.clientHeight,n.object.matrix),pe(2*re*Le/He.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(ie(ye*(n.object.right-n.object.left)/n.object.zoom/He.clientWidth,n.object.matrix),pe(re*(n.object.top-n.object.bottom)/n.object.zoom/He.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function J(N){n.object.isPerspectiveCamera?h/=N:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*N)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Q(N){n.object.isPerspectiveCamera?h*=N:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/N)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function _e(N){g.set(N.clientX,N.clientY)}function le(N){P.set(N.clientX,N.clientY)}function he(N){E.set(N.clientX,N.clientY)}function de(N){x.set(N.clientX,N.clientY),M.subVectors(x,g).multiplyScalar(n.rotateSpeed);const me=n.domElement;R(2*Math.PI*M.x/me.clientHeight),U(2*Math.PI*M.y/me.clientHeight),g.copy(x),n.update()}function ve(N){T.set(N.clientX,N.clientY),D.subVectors(T,P),D.y>0?J(X()):D.y<0&&Q(X()),P.copy(T),n.update()}function Fe(N){y.set(N.clientX,N.clientY),v.subVectors(y,E).multiplyScalar(n.panSpeed),q(v.x,v.y),E.copy(y),n.update()}function se(N){N.deltaY<0?Q(X()):N.deltaY>0&&J(X()),n.update()}function Se(N){let me=!1;switch(N.code){case n.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(0,n.keyPanSpeed),me=!0;break;case n.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(0,-n.keyPanSpeed),me=!0;break;case n.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(n.keyPanSpeed,0),me=!0;break;case n.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(-n.keyPanSpeed,0),me=!0;break}me&&(N.preventDefault(),n.update())}function xe(){if(d.length===1)g.set(d[0].pageX,d[0].pageY);else{const N=.5*(d[0].pageX+d[1].pageX),me=.5*(d[0].pageY+d[1].pageY);g.set(N,me)}}function Ie(){if(d.length===1)E.set(d[0].pageX,d[0].pageY);else{const N=.5*(d[0].pageX+d[1].pageX),me=.5*(d[0].pageY+d[1].pageY);E.set(N,me)}}function Ce(){const N=d[0].pageX-d[1].pageX,me=d[0].pageY-d[1].pageY,ye=Math.sqrt(N*N+me*me);P.set(0,ye)}function Xe(){n.enableZoom&&Ce(),n.enablePan&&Ie()}function dt(){n.enableZoom&&Ce(),n.enableRotate&&xe()}function Ze(N){if(d.length==1)x.set(N.pageX,N.pageY);else{const ye=Ee(N),re=.5*(N.pageX+ye.x),He=.5*(N.pageY+ye.y);x.set(re,He)}M.subVectors(x,g).multiplyScalar(n.rotateSpeed);const me=n.domElement;R(2*Math.PI*M.x/me.clientHeight),U(2*Math.PI*M.y/me.clientHeight),g.copy(x)}function bt(N){if(d.length===1)y.set(N.pageX,N.pageY);else{const me=Ee(N),ye=.5*(N.pageX+me.x),re=.5*(N.pageY+me.y);y.set(ye,re)}v.subVectors(y,E).multiplyScalar(n.panSpeed),q(v.x,v.y),E.copy(y)}function lt(N){const me=Ee(N),ye=N.pageX-me.x,re=N.pageY-me.y,He=Math.sqrt(ye*ye+re*re);T.set(0,He),D.set(0,Math.pow(T.y/P.y,n.zoomSpeed)),J(D.y),P.copy(T)}function K(N){n.enableZoom&&lt(N),n.enablePan&&bt(N)}function Ne(N){n.enableZoom&&lt(N),n.enableRotate&&Ze(N)}function ke(N){n.enabled!==!1&&(d.length===0&&(n.domElement.setPointerCapture(N.pointerId),n.domElement.addEventListener("pointermove",ut),n.domElement.addEventListener("pointerup",je)),C(N),N.pointerType==="touch"?Pt(N):Rt(N))}function ut(N){n.enabled!==!1&&(N.pointerType==="touch"?Bt(N):ft(N))}function je(N){oe(N),d.length===0&&(n.domElement.releasePointerCapture(N.pointerId),n.domElement.removeEventListener("pointermove",ut),n.domElement.removeEventListener("pointerup",je)),n.dispatchEvent(Du),s=i.NONE}function Rt(N){let me;switch(N.button){case 0:me=n.mouseButtons.LEFT;break;case 1:me=n.mouseButtons.MIDDLE;break;case 2:me=n.mouseButtons.RIGHT;break;default:me=-1}switch(me){case br.DOLLY:if(n.enableZoom===!1)return;le(N),s=i.DOLLY;break;case br.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enablePan===!1)return;he(N),s=i.PAN}else{if(n.enableRotate===!1)return;_e(N),s=i.ROTATE}break;case br.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enableRotate===!1)return;_e(N),s=i.ROTATE}else{if(n.enablePan===!1)return;he(N),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(za)}function ft(N){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;de(N);break;case i.DOLLY:if(n.enableZoom===!1)return;ve(N);break;case i.PAN:if(n.enablePan===!1)return;Fe(N);break}}function Je(N){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(N.preventDefault(),n.dispatchEvent(za),se(N),n.dispatchEvent(Du))}function pt(N){n.enabled===!1||n.enablePan===!1||Se(N)}function Pt(N){switch(Te(N),d.length){case 1:switch(n.touches.ONE){case Ar.ROTATE:if(n.enableRotate===!1)return;xe(),s=i.TOUCH_ROTATE;break;case Ar.PAN:if(n.enablePan===!1)return;Ie(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Ar.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Xe(),s=i.TOUCH_DOLLY_PAN;break;case Ar.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;dt(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(za)}function Bt(N){switch(Te(N),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ze(N),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;bt(N),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;K(N),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ne(N),n.update();break;default:s=i.NONE}}function I(N){n.enabled!==!1&&N.preventDefault()}function C(N){d.push(N)}function oe(N){delete B[N.pointerId];for(let me=0;me<d.length;me++)if(d[me].pointerId==N.pointerId){d.splice(me,1);return}}function Te(N){let me=B[N.pointerId];me===void 0&&(me=new nt,B[N.pointerId]=me),me.set(N.pageX,N.pageY)}function Ee(N){const me=N.pointerId===d[0].pointerId?d[1]:d[0];return B[me.pointerId]}n.domElement.addEventListener("contextmenu",I),n.domElement.addEventListener("pointerdown",ke),n.domElement.addEventListener("pointercancel",je),n.domElement.addEventListener("wheel",Je,{passive:!1}),this.update()}}function Iu(r,e){if(e===Xd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Ka||e===Zu){let t=r.getIndex();if(t===null){const a=[],c=r.getAttribute("position");if(c!==void 0){for(let l=0;l<c.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Ka)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class uv extends zs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new mv(t)}),this.register(function(t){return new Ev(t)}),this.register(function(t){return new Tv(t)}),this.register(function(t){return new bv(t)}),this.register(function(t){return new _v(t)}),this.register(function(t){return new vv(t)}),this.register(function(t){return new xv(t)}),this.register(function(t){return new yv(t)}),this.register(function(t){return new pv(t)}),this.register(function(t){return new Mv(t)}),this.register(function(t){return new gv(t)}),this.register(function(t){return new Sv(t)}),this.register(function(t){return new dv(t)}),this.register(function(t){return new Av(t)}),this.register(function(t){return new wv(t)})}load(e,t,n,i){const s=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=tc.extractUrlBase(e),this.manager.itemStart(e);const c=function(h){i?i(h):console.error(h),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Eh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(h){try{s.parse(h,a,function(f){t(f),s.manager.itemEnd(e)},c)}catch(f){c(f)}},n,c)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},c={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Th){try{a[Et.KHR_BINARY_GLTF]=new Rv(e)}catch(p){i&&i(p);return}s=JSON.parse(a[Et.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new zv(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){const p=this.pluginCallbacks[f](h);c[p.name]=p,a[p.name]=!0}if(s.extensionsUsed)for(let f=0;f<s.extensionsUsed.length;++f){const p=s.extensionsUsed[f],g=s.extensionsRequired||[];switch(p){case Et.KHR_MATERIALS_UNLIT:a[p]=new fv;break;case Et.KHR_DRACO_MESH_COMPRESSION:a[p]=new Cv(s,this.dracoLoader);break;case Et.KHR_TEXTURE_TRANSFORM:a[p]=new Lv;break;case Et.KHR_MESH_QUANTIZATION:a[p]=new Pv;break;default:g.indexOf(p)>=0&&c[p]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+p+'".')}}h.setExtensions(a),h.setPlugins(c),h.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function hv(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class dv{constructor(e){this.parser=e,this.name=Et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let h;const f=new rt(16777215);l.color!==void 0&&f.fromArray(l.color);const p=l.range!==void 0?l.range:0;switch(l.type){case"directional":h=new K0(f),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new jo(f),h.distance=p;break;case"spot":h=new j0(f),h.distance=p,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,h.angle=l.spot.outerConeAngle,h.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return h.position.set(0,0,0),h.decay=2,Vi(h,l),l.intensity!==void 0&&(h.intensity=l.intensity),h.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(h),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],c=(s.extensions&&s.extensions[this.name]||{}).light;return c===void 0?null:this._loadLight(c).then(function(l){return n._getNodeRef(t.cache,c,l)})}}class fv{constructor(){this.name=Et.KHR_MATERIALS_UNLIT}getMaterialType(){return si}extendParams(e,t,n){const i=[];e.color=new rt(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,at))}return Promise.all(i)}}class pv{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class mv{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$i}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const c=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new nt(c,c)}return Promise.all(s)}}class gv{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$i}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class _v{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$i}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new rt(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,at)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class vv{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$i}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class xv{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$i}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const c=a.attenuationColor||[1,1,1];return t.attenuationColor=new rt(c[0],c[1],c[2]),Promise.all(s)}}class yv{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$i}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Mv{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$i}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const c=a.specularColorFactor||[1,1,1];return t.specularColor=new rt(c[0],c[1],c[2]),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,at)),Promise.all(s)}}class Sv{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$i}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class Ev{constructor(e){this.parser=e,this.name=Et.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class Tv{constructor(e){this.parser=e,this.name=Et.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],c=i.images[a.source];let l=n.textureLoader;if(c.uri){const h=n.options.manager.getHandler(c.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class bv{constructor(e){this.parser=e,this.name=Et.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],c=i.images[a.source];let l=n.textureLoader;if(c.uri){const h=n.options.manager.getHandler(c.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Av{constructor(e){this.name=Et.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(c){const l=i.byteOffset||0,h=i.byteLength||0,f=i.count,p=i.byteStride,g=new Uint8Array(c,l,h);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(f,p,g,i.mode,i.filter).then(function(x){return x.buffer}):a.ready.then(function(){const x=new ArrayBuffer(f*p);return a.decodeGltfBuffer(new Uint8Array(x),f,p,g,i.mode,i.filter),x})})}else return null}}class wv{constructor(e){this.name=Et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const h of i.primitives)if(h.mode!==jn.TRIANGLES&&h.mode!==jn.TRIANGLE_STRIP&&h.mode!==jn.TRIANGLE_FAN&&h.mode!==void 0)return null;const a=n.extensions[this.name].attributes,c=[],l={};for(const h in a)c.push(this.parser.getDependency("accessor",a[h]).then(f=>(l[h]=f,l[h])));return c.length<1?null:(c.push(this.parser.createNodeMesh(e)),Promise.all(c).then(h=>{const f=h.pop(),p=f.isGroup?f.children:[f],g=h[0].count,x=[];for(const M of p){const E=new xt,y=new H,v=new di,P=new H(1,1,1),T=new R0(M.geometry,M.material,g);for(let D=0;D<g;D++)l.TRANSLATION&&y.fromBufferAttribute(l.TRANSLATION,D),l.ROTATION&&v.fromBufferAttribute(l.ROTATION,D),l.SCALE&&P.fromBufferAttribute(l.SCALE,D),T.setMatrixAt(D,E.compose(y,v,P));for(const D in l)D!=="TRANSLATION"&&D!=="ROTATION"&&D!=="SCALE"&&M.geometry.setAttribute(D,l[D]);Vt.prototype.copy.call(T,M),this.parser.assignFinalMaterial(T),x.push(T)}return f.isGroup?(f.clear(),f.add(...x),f):x[0]}))}}const Th="glTF",ws=12,Nu={JSON:1313821514,BIN:5130562};class Rv{constructor(e){this.name=Et.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ws),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Th)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ws,s=new DataView(e,ws);let a=0;for(;a<i;){const c=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Nu.JSON){const h=new Uint8Array(e,ws+a,c);this.content=n.decode(h)}else if(l===Nu.BIN){const h=ws+a;this.body=e.slice(h,h+c)}a+=c}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Cv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,c={},l={},h={};for(const f in a){const p=ic[f]||f.toLowerCase();c[p]=a[f]}for(const f in e.attributes){const p=ic[f]||f.toLowerCase();if(a[f]!==void 0){const g=n.accessors[e.attributes[f]],x=Qr[g.componentType];h[p]=x.name,l[p]=g.normalized===!0}}return t.getDependency("bufferView",s).then(function(f){return new Promise(function(p){i.decodeDracoFile(f,function(g){for(const x in g.attributes){const M=g.attributes[x],E=l[x];E!==void 0&&(M.normalized=E)}p(g)},c,h)})})}}class Lv{constructor(){this.name=Et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Pv{constructor(){this.name=Et.KHR_MESH_QUANTIZATION}}class bh extends Hs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,l=c*2,h=c*3,f=i-t,p=(n-t)/f,g=p*p,x=g*p,M=e*h,E=M-h,y=-2*x+3*g,v=x-g,P=1-y,T=v-g+p;for(let D=0;D!==c;D++){const d=a[E+D+c],B=a[E+D+l]*f,z=a[M+D+c],X=a[M+D]*f;s[D]=P*d+T*B+y*z+v*X}return s}}const Dv=new di;class Iv extends bh{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Dv.fromArray(s).normalize().toArray(s),s}}const jn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Qr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Uu={9728:on,9729:Cn,9984:Ya,9985:Wu,9986:Po,9987:mr},Ou={33071:Kn,33648:No,10497:Yi},Ga={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ic={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Nv={CUBICSPLINE:void 0,LINEAR:is,STEP:Ns},Va={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Uv(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new xc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ui})),r.DefaultMaterial}function or(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Vi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ov(r,e,t){let n=!1,i=!1,s=!1;for(let h=0,f=e.length;h<f;h++){const p=e[h];if(p.POSITION!==void 0&&(n=!0),p.NORMAL!==void 0&&(i=!0),p.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],c=[],l=[];for(let h=0,f=e.length;h<f;h++){const p=e[h];if(n){const g=p.POSITION!==void 0?t.getDependency("accessor",p.POSITION):r.attributes.position;a.push(g)}if(i){const g=p.NORMAL!==void 0?t.getDependency("accessor",p.NORMAL):r.attributes.normal;c.push(g)}if(s){const g=p.COLOR_0!==void 0?t.getDependency("accessor",p.COLOR_0):r.attributes.color;l.push(g)}}return Promise.all([Promise.all(a),Promise.all(c),Promise.all(l)]).then(function(h){const f=h[0],p=h[1],g=h[2];return n&&(r.morphAttributes.position=f),i&&(r.morphAttributes.normal=p),s&&(r.morphAttributes.color=g),r.morphTargetsRelative=!0,r})}function Fv(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Bv(r){let e;const t=r.extensions&&r.extensions[Et.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Wa(t.attributes):e=r.indices+":"+Wa(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Wa(r.targets[n]);return e}function Wa(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function rc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function kv(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Hv=new xt;class zv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new hv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new W0(this.options.manager):this.textureLoader=new Z0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Eh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const c={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};or(s,c,i),Vi(c,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(c)})).then(function(){e(c)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let c=0,l=a.length;c<l;c++)e[a[c]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,c)=>{const l=this.associations.get(a);l!=null&&this.associations.set(c,l);for(const[h,f]of a.children.entries())s(f,c.children[h])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Et.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(tc.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Ga[i.type],c=Qr[i.componentType],l=i.normalized===!0,h=new c(i.count*a);return Promise.resolve(new bn(h,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const c=a[0],l=Ga[i.type],h=Qr[i.componentType],f=h.BYTES_PER_ELEMENT,p=f*l,g=i.byteOffset||0,x=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,M=i.normalized===!0;let E,y;if(x&&x!==p){const v=Math.floor(g/x),P="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+v+":"+i.count;let T=t.cache.get(P);T||(E=new h(c,v*x,i.count*x/f),T=new S0(E,x/f),t.cache.add(P,T)),y=new fc(T,l,g%x/f,M)}else c===null?E=new h(i.count*l):E=new h(c,g,i.count*l),y=new bn(E,l,M);if(i.sparse!==void 0){const v=Ga.SCALAR,P=Qr[i.sparse.indices.componentType],T=i.sparse.indices.byteOffset||0,D=i.sparse.values.byteOffset||0,d=new P(a[1],T,i.sparse.count*v),B=new h(a[2],D,i.sparse.count*l);c!==null&&(y=new bn(y.array.slice(),y.itemSize,y.normalized));for(let z=0,X=d.length;z<X;z++){const R=d[z];if(y.setX(R,B[z*l]),l>=2&&y.setY(R,B[z*l+1]),l>=3&&y.setZ(R,B[z*l+2]),l>=4&&y.setW(R,B[z*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return y})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let c=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(c=l)}return this.loadTextureImage(e,s,c)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],c=s.images[t],l=(c.uri||c.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const h=this.loadImageSource(t,n).then(function(f){f.flipY=!1,f.name=a.name||c.name||"",f.name===""&&typeof c.uri=="string"&&c.uri.startsWith("data:image/")===!1&&(f.name=c.uri);const g=(s.samplers||{})[a.sampler]||{};return f.magFilter=Uu[g.magFilter]||Cn,f.minFilter=Uu[g.minFilter]||mr,f.wrapS=Ou[g.wrapS]||Yi,f.wrapT=Ou[g.wrapT]||Yi,i.associations.set(f,{textures:e}),f}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(p=>p.clone());const a=i.images[e],c=self.URL||self.webkitURL;let l=a.uri||"",h=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(p){h=!0;const g=new Blob([p],{type:a.mimeType});return l=c.createObjectURL(g),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const f=Promise.resolve(l).then(function(p){return new Promise(function(g,x){let M=g;t.isImageBitmapLoader===!0&&(M=function(E){const y=new dn(E);y.needsUpdate=!0,g(y)}),t.load(tc.resolveURL(p,s.path),M,void 0,x)})}).then(function(p){return h===!0&&c.revokeObjectURL(l),p.userData.mimeType=a.mimeType||kv(a.uri),p}).catch(function(p){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),p});return this.sourceCache[e]=f,f}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Et.KHR_TEXTURE_TRANSFORM]){const c=n.extensions!==void 0?n.extensions[Et.KHR_TEXTURE_TRANSFORM]:void 0;if(c){const l=s.associations.get(a);a=s.extensions[Et.KHR_TEXTURE_TRANSFORM].extendTexture(a,c),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const c="PointsMaterial:"+n.uuid;let l=this.cache.get(c);l||(l=new xh,ui.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(c,l)),n=l}else if(e.isLine){const c="LineBasicMaterial:"+n.uuid;let l=this.cache.get(c);l||(l=new Os,ui.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(c,l)),n=l}if(i||s||a){let c="ClonedMaterial:"+n.uuid+":";i&&(c+="derivative-tangents:"),s&&(c+="vertex-colors:"),a&&(c+="flat-shading:");let l=this.cache.get(c);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(c,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return xc}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const c={},l=s.extensions||{},h=[];if(l[Et.KHR_MATERIALS_UNLIT]){const p=i[Et.KHR_MATERIALS_UNLIT];a=p.getMaterialType(),h.push(p.extendParams(c,s,t))}else{const p=s.pbrMetallicRoughness||{};if(c.color=new rt(1,1,1),c.opacity=1,Array.isArray(p.baseColorFactor)){const g=p.baseColorFactor;c.color.fromArray(g),c.opacity=g[3]}p.baseColorTexture!==void 0&&h.push(t.assignTexture(c,"map",p.baseColorTexture,at)),c.metalness=p.metallicFactor!==void 0?p.metallicFactor:1,c.roughness=p.roughnessFactor!==void 0?p.roughnessFactor:1,p.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(c,"metalnessMap",p.metallicRoughnessTexture)),h.push(t.assignTexture(c,"roughnessMap",p.metallicRoughnessTexture))),a=this._invokeOne(function(g){return g.getMaterialType&&g.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(g){return g.extendMaterialParams&&g.extendMaterialParams(e,c)})))}s.doubleSided===!0&&(c.side=Yn);const f=s.alphaMode||Va.OPAQUE;if(f===Va.BLEND?(c.transparent=!0,c.depthWrite=!1):(c.transparent=!1,f===Va.MASK&&(c.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==si&&(h.push(t.assignTexture(c,"normalMap",s.normalTexture)),c.normalScale=new nt(1,1),s.normalTexture.scale!==void 0)){const p=s.normalTexture.scale;c.normalScale.set(p,p)}return s.occlusionTexture!==void 0&&a!==si&&(h.push(t.assignTexture(c,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(c.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==si&&(c.emissive=new rt().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&a!==si&&h.push(t.assignTexture(c,"emissiveMap",s.emissiveTexture,at)),Promise.all(h).then(function(){const p=new a(c);return s.name&&(p.name=s.name),Vi(p,s),t.associations.set(p,{materials:e}),s.extensions&&or(i,p,s),p})}createUniqueName(e){const t=Ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(c){return n[Et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c,t).then(function(l){return Fu(l,c,t)})}const a=[];for(let c=0,l=e.length;c<l;c++){const h=e[c],f=Bv(h),p=i[f];if(p)a.push(p.promise);else{let g;h.extensions&&h.extensions[Et.KHR_DRACO_MESH_COMPRESSION]?g=s(h):g=Fu(new Pn,h,t),i[f]={primitive:h,promise:g},a.push(g)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,c=[];for(let l=0,h=a.length;l<h;l++){const f=a[l].material===void 0?Uv(this.cache):this.getDependency("material",a[l].material);c.push(f)}return c.push(t.loadGeometries(a)),Promise.all(c).then(function(l){const h=l.slice(0,l.length-1),f=l[l.length-1],p=[];for(let x=0,M=f.length;x<M;x++){const E=f[x],y=a[x];let v;const P=h[x];if(y.mode===jn.TRIANGLES||y.mode===jn.TRIANGLE_STRIP||y.mode===jn.TRIANGLE_FAN||y.mode===void 0)v=s.isSkinnedMesh===!0?new T0(E,P):new Tn(E,P),v.isSkinnedMesh===!0&&v.normalizeSkinWeights(),y.mode===jn.TRIANGLE_STRIP?v.geometry=Iu(v.geometry,Zu):y.mode===jn.TRIANGLE_FAN&&(v.geometry=Iu(v.geometry,Ka));else if(y.mode===jn.LINES)v=new Fo(E,P);else if(y.mode===jn.LINE_STRIP)v=new mc(E,P);else if(y.mode===jn.LINE_LOOP)v=new C0(E,P);else if(y.mode===jn.POINTS)v=new L0(E,P);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(v.geometry.morphAttributes).length>0&&Fv(v,s),v.name=t.createUniqueName(s.name||"mesh_"+e),Vi(v,s),y.extensions&&or(i,v,y),t.assignFinalMaterial(v),p.push(v)}for(let x=0,M=p.length;x<M;x++)t.associations.set(p[x],{meshes:e,primitives:x});if(p.length===1)return s.extensions&&or(i,p[0],s),p[0];const g=new ur;s.extensions&&or(i,g,s),t.associations.set(g,{meshes:e});for(let x=0,M=p.length;x<M;x++)g.add(p[x]);return g})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new En(zn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new hc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Vi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,c=[],l=[];for(let h=0,f=a.length;h<f;h++){const p=a[h];if(p){c.push(p);const g=new xt;s!==null&&g.fromArray(s.array,h*16),l.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new pc(c,l)})}loadAnimation(e){const n=this.json.animations[e],i=n.name?n.name:"animation_"+e,s=[],a=[],c=[],l=[],h=[];for(let f=0,p=n.channels.length;f<p;f++){const g=n.channels[f],x=n.samplers[g.sampler],M=g.target,E=M.node,y=n.parameters!==void 0?n.parameters[x.input]:x.input,v=n.parameters!==void 0?n.parameters[x.output]:x.output;M.node!==void 0&&(s.push(this.getDependency("node",E)),a.push(this.getDependency("accessor",y)),c.push(this.getDependency("accessor",v)),l.push(x),h.push(M))}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(f){const p=f[0],g=f[1],x=f[2],M=f[3],E=f[4],y=[];for(let v=0,P=p.length;v<P;v++){const T=p[v],D=g[v],d=x[v],B=M[v],z=E[v];if(T===void 0)continue;T.updateMatrix();let X;switch(Gi[z.path]){case Gi.weights:X=Fs;break;case Gi.rotation:X=vr;break;case Gi.position:case Gi.scale:default:X=Bs;break}const R=T.name?T.name:T.uuid,U=B.interpolation!==void 0?Nv[B.interpolation]:is,ie=[];Gi[z.path]===Gi.weights?T.traverse(function(q){q.morphTargetInfluences&&ie.push(q.name?q.name:q.uuid)}):ie.push(R);let pe=d.array;if(d.normalized){const q=rc(pe.constructor),J=new Float32Array(pe.length);for(let Q=0,_e=pe.length;Q<_e;Q++)J[Q]=pe[Q]*q;pe=J}for(let q=0,J=ie.length;q<J;q++){const Q=new X(ie[q]+"."+Gi[z.path],D.array,pe,U);B.interpolation==="CUBICSPLINE"&&(Q.createInterpolant=function(le){const he=this instanceof vr?Iv:bh;return new he(this.times,this.values,this.getValueSize()/3,le)},Q.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),y.push(Q)}}return new F0(i,void 0,y)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(c){if(c.isMesh)for(let l=0,h=i.weights.length;l<h;l++)c.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],c=i.children||[];for(let h=0,f=c.length;h<f;h++)a.push(n.getDependency("node",c[h]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(h){const f=h[0],p=h[1],g=h[2];g!==null&&f.traverse(function(x){x.isSkinnedMesh&&x.bind(g,Hv)});for(let x=0,M=p.length;x<M;x++)f.add(p[x]);return f})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",c=[],l=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return l&&c.push(l),s.camera!==void 0&&c.push(i.getDependency("camera",s.camera).then(function(h){return i._getNodeRef(i.cameraCache,s.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){c.push(h)}),this.nodeCache[e]=Promise.all(c).then(function(h){let f;if(s.isBone===!0?f=new vh:h.length>1?f=new ur:h.length===1?f=h[0]:f=new Vt,f!==h[0])for(let p=0,g=h.length;p<g;p++)f.add(h[p]);if(s.name&&(f.userData.name=s.name,f.name=a),Vi(f,s),s.extensions&&or(n,f,s),s.matrix!==void 0){const p=new xt;p.fromArray(s.matrix),f.applyMatrix4(p)}else s.translation!==void 0&&f.position.fromArray(s.translation),s.rotation!==void 0&&f.quaternion.fromArray(s.rotation),s.scale!==void 0&&f.scale.fromArray(s.scale);return i.associations.has(f)||i.associations.set(f,{}),i.associations.get(f).nodes=e,f}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new ur;n.name&&(s.name=i.createUniqueName(n.name)),Vi(s,n),n.extensions&&or(t,s,n);const a=n.nodes||[],c=[];for(let l=0,h=a.length;l<h;l++)c.push(i.getDependency("node",a[l]));return Promise.all(c).then(function(l){for(let f=0,p=l.length;f<p;f++)s.add(l[f]);const h=f=>{const p=new Map;for(const[g,x]of i.associations)(g instanceof ui||g instanceof dn)&&p.set(g,x);return f.traverse(g=>{const x=i.associations.get(g);x!=null&&p.set(g,x)}),p};return i.associations=h(s),s})}}function Gv(r,e,t){const n=e.attributes,i=new fi;if(n.POSITION!==void 0){const c=t.json.accessors[n.POSITION],l=c.min,h=c.max;if(l!==void 0&&h!==void 0){if(i.set(new H(l[0],l[1],l[2]),new H(h[0],h[1],h[2])),c.normalized){const f=rc(Qr[c.componentType]);i.min.multiplyScalar(f),i.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const c=new H,l=new H;for(let h=0,f=s.length;h<f;h++){const p=s[h];if(p.POSITION!==void 0){const g=t.json.accessors[p.POSITION],x=g.min,M=g.max;if(x!==void 0&&M!==void 0){if(l.setX(Math.max(Math.abs(x[0]),Math.abs(M[0]))),l.setY(Math.max(Math.abs(x[1]),Math.abs(M[1]))),l.setZ(Math.max(Math.abs(x[2]),Math.abs(M[2]))),g.normalized){const E=rc(Qr[g.componentType]);l.multiplyScalar(E)}c.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(c)}r.boundingBox=i;const a=new pi;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Fu(r,e,t){const n=e.attributes,i=[];function s(a,c){return t.getDependency("accessor",a).then(function(l){r.setAttribute(c,l)})}for(const a in n){const c=ic[a]||a.toLowerCase();c in r.attributes||i.push(s(n[a],c))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(c){r.setIndex(c)});i.push(a)}return Vi(r,e),Gv(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ov(r,e.targets,t):r})}function Bo(r){const e=new Map,t=new Map,n=r.clone();return Ah(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,a=e.get(i),c=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=c.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Ah(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)Ah(r.children[n],e.children[n],t)}const Wt=new M0,Ni=new En(75,window.innerWidth/innerHeight,.1,1e3);let Ki=new _h({canvas:document.querySelector("#bg")});Ki.setPixelRatio(window.devicePixelRatio);Ki.setSize(window.innerWidth,innerHeight);Ni.position.setZ(800);Ni.position.setY(5);const Vv=new $0(16777215),Wv=new cv(2e3,800),qo=new lv(Ni,Ki.domElement);qo.enableZoom=!1;qo.noZoom=!0;qo.enabled=!1;Wt.add(Vv);Wt.add(Wv);let Rn=new H(5,800,0);const Bu=4500;let Ps=null;const wh=document.querySelector(".swiper-slide-num"),ko=document.querySelectorAll(".heading"),Rh=1500;var Yr=null;const tn=new Swiper(".swiper",{direction:"vertical",loop:!0,speed:Rh,mousewheel:!1,keyboard:{enabled:!0},pagination:{el:".swiper-pagination-custom",loop:!0,bulletClass:"swiper-bullet-custom",bulletActiveClass:"is-active",bulletElement:"button",clickable:!0}}),qt=new Swiper(".Swiper_Portfolio",{direction:"horizontal",allowTouchMove:!0,slidesPerView:1,spaceBetween:30,speed:Rh,mousewheel:!1,pagination:{el:".swiper-pagination_2",clickable:!0}});document.body.addEventListener("wheel",r=>{r.preventDefault(),tn.realIndex==3?qt.realIndex==4&&r.wheelDeltaY<0||qt.realIndex==0&&r.wheelDeltaY>0?r.wheelDeltaY<0?tn.slideNext():tn.slidePrev():r.wheelDeltaY<0?qt.slideNext():qt.slidePrev():r.wheelDeltaY<0?tn.slideNext():tn.slidePrev(),qt.realIndex==0&&(tn.slidePrev(),qt.slideNext()),qt.realIndex==4&&(tn.slideNext(),qt.slidePrev()),qt.realIndex==2&&(Wt.background=new rt(16777215)),(qt.realIndex==1||qt.realIndex==3)&&(Wt.background=new rt(0))});let Ch;document.body.addEventListener("touchstart",r=>{Ch=r.touches[0].clientY});document.body.addEventListener("touchmove",r=>{let e=r.touches[0].clientY,t=Ch-e;tn.realIndex==3?qt.realIndex==4&&t>10||qt.realIndex==0&&t<-10?t>0?tn.slideNext():tn.slidePrev():t>0?qt.slideNext():qt.slidePrev():t>0?tn.slideNext():tn.slidePrev(),qt.realIndex==0&&(tn.slidePrev(),qt.slideNext()),qt.realIndex==4&&(tn.slideNext(),qt.slidePrev()),qt.realIndex==2&&(Wt.background=new rt(16777215)),(qt.realIndex==1||qt.realIndex==3)&&(Wt.background=new rt(0))});tn.on("slideNextTransitionStart",()=>{let r=tn.realIndex;switch(wh.textContent=r+1,ko.forEach(e=>e.classList.remove("is-active")),ko[r].classList.add("is-active"),r){case 0:Rn=new H(0,5,800),document.querySelector(".navbar").style.display="grid";break;case 1:Rn=new H(0,5,400),document.querySelector(".navbar").style.display="none";break;case 2:Rn=new H(-400,5,200),document.querySelector(".navbar").style.display="none";break;case 3:Rn=new H(0,5,100),document.querySelector(".navbar").style.display="none";break;case 4:Rn=new H(0,100,0),document.querySelector(".navbar").style.display="none";break;default:Rn=new H(0,200,200),document.querySelector(".navbar").style.display="none";break}Ps=null,Yr=Rn,gsap.timeline({defaults:{duration:Ec/5e3}}).to(".front",{translateY:"100%"}).set(".front",{translateY:"-100%"}).to(".front",{translateY:"0%"})});tn.on("slidePrevTransitionStart",()=>{let r=tn.realIndex;switch(wh.textContent=r+1,ko.forEach(e=>e.classList.remove("is-active")),ko[r].classList.add("is-active"),r){case 0:Rn=new H(0,5,800),document.querySelector(".navbar").style.display="grid";break;case 1:Rn=new H(0,5,400),document.querySelector(".navbar").style.display="none";break;case 2:Rn=new H(-400,5,200),document.querySelector(".navbar").style.display="none";break;case 3:Rn=new H(0,5,100),document.querySelector(".navbar").style.display="none";break;case 4:Rn=new H(0,100,0),document.querySelector(".navbar").style.display="none";break;default:Rn=new H(0,5,800),document.querySelector(".navbar").style.display="none";break}Ps=null,Yr=Rn,gsap.timeline({defaults:{duration:Ec/2e3}}).to(".front",{translateY:"-100%"}).set(".front",{translateY:"100%"}).to(".front",{translateY:"0%"})});document.getElementById("go_To_Contacts").addEventListener("click",function(){tn.slideTo(4)});document.getElementById("w-node-_475191de-f6e8-9024-5d0a-bd63c5d18fb7-67f9e306").addEventListener("click",function(){tn.slideTo(1)});const Wi=[],Ds=[],Ec=.03;let Co=0;function Lh(r){if(requestAnimationFrame(Lh),Yr!=null){Ps||(Ps=r);const e=r-Ps;if(e>=Bu)Ni.position.copy(Yr),Yr=null;else{const t=e/Bu;Ni.position.lerp(Yr,t)}}Ph.forEach((e,t)=>{e.rotation.x+=sc[t][0],e.rotation.y+=sc[t][1]}),Co+=Ec;for(let e=0;e<Kr.length;e++){let t=Wi[e]+(Ds[e]-Wi[e])*Math.sin(Co);e%2,Wi[e]+(Ds[e]-Wi[e])*Math.sin(Co),Kr[e].position.y=t}qo.update(),Ki.setSize(window.innerWidth,innerHeight),Ki.render(Wt,Ni)}const Ho=new av;Ki.domElement.addEventListener("mousemove",Xv);let Xr;function Xv(r){const e=new nt;e.x=r.clientX/window.innerWidth*2-1,e.y=-(r.clientY/window.innerHeight)*2+1,Ho.setFromCamera(e,Ni);const t=Ho.intersectObjects(Wt.children,!0);if(t.length>0){t[0].object.name=="Space_Invader"?t[0].object.material.color.set(2223626):t[0].object.name=="Moon"||t[0].object.name=="Space_Invader_kill"||(t[0].object.name.indexOf("Сфера")==0?t[0].object.material.color.set(268435455):t[0].object.name.indexOf("Object")==0||t[0].object.type!="GridHelper"&&(t[0].object.material.color.set(16711680),document.getElementById("bg").style.cursor="default"));try{Xr.object.id!=t[0].object.id&&Xr.object.name=="Space_Invader"&&Xr.object.material.color.set(16777215)}catch{Xr=t[0]}if(t[0].object.name!="world")try{Wt.getObjectByName("world").material.color.set(65793)}catch{Xr=t[0]}Xr=t[0],t[0].object.name.indexOf("Object")==0?document.getElementById("bg").style.cursor="pointer":document.getElementById("bg").style.cursor="default"}else document.getElementById("bg").style.cursor="default"}Ki.domElement.addEventListener("click",jv);function jv(r){const e=new nt;e.x=r.clientX/window.innerWidth*2-1,e.y=-(r.clientY/window.innerHeight)*2+1,Ho.setFromCamera(e,Ni);const t=Ho.intersectObjects(Wt.children,!0);t.length>0&&t[0].object.name=="Space_Invader"&&(t[0].object.name="Space_Invader_kill",t[0].object.material.color.set(16711680))}function qv(){const r=new vc(1,32,16),e=new si({color:16777215}),t=new Tn(r,e),n=zn.randFloatSpread(800),i=zn.randFloat(0,800),s=zn.randFloatSpread(800);t.position.set(n,i,s),Wt.add(t)}Array(1e3).fill().forEach(qv);const Yv=new Vo(150,80),Kv=new si({color:0,side:Yn}),Tc=new Tn(Yv,Kv);Tc.rotation.x=90*Math.PI/180;Tc.position.set(0,-1,350);Wt.add(Tc);const Ph=[],sc=[];function $v(){const r=new as(20,20,20),e=new Tu(r),t=new Os({color:16777215});t.linewidth=5;const n=new Fo(e,t),i=zn.randFloat(2,10),s=zn.randFloat(0,10),a=zn.randFloat(3,7),c=1,l=!1,h=0,f=zn.randFloat(3.8786724068467,6.283185307179586),p=new _c(i,s,a,c,l,h,f),g=new si({color:16777215}),x=new Tn(p,g),M=new Tu(p),E=new Os({color:0,linewidth:2}),y=new Fo(M,E),v=zn.randFloatSpread(1e3),P=zn.randFloat(0,1e3),T=zn.randFloatSpread(1e3);let D=zn.randFloat(0,.01),d=zn.randFloat(0,.01);n.position.set(v,P,T),x.position.set(v,P,T),y.position.set(v,P,T),sc.push([D,d]),Ph.push(n),Wt.add(n),Wt.add(x),Wt.add(y)}Array(1050).fill().forEach($v);const bc=new uv;var Kr=[];bc.load("imgs/3d_space_invader.glb",function(r){let e=-60,t=0;for(let n=0;n<40;n+=10)for(let i=10;i<120;i+=10)i=i%50===0?i+31:i,Kr[Kr.length]=Bo(r.scene),Wi[Wi.length]=n-5,Ds[Ds.length]=n+5,Jv(Kr[Kr.length-1],e+i,t+n,350);Lh()});const Ri={color:16777215,transmission:1,opacity:1,metalness:0,roughness:.26,ior:1.5,thickness:3.59,specularIntensity:0,specularColor:16777215,envMapIntensity:1,lightIntensity:1,exposure:1};function Zv(){const r=document.createElement("canvas");r.width=2,r.height=2;const e=r.getContext("2d");return e.fillStyle="white",e.fillRect(0,1,2,1),r}const Gs=new P0(Zv());Gs.magFilter=on;Gs.wrapT=Yi;Gs.wrapS=Yi;Gs.repeat.set(1,3.5);function Jv(r,e,t,n){const s=Ac(r);r.scale.set(10/s,10/s,10/s);const a=new H(e,t,n);r.position.copy(a),r.traverse(c=>{c.isMesh&&(c.material=new si({color:Ri.color,metalness:Ri.metalness,roughness:Ri.roughness,ior:Ri.ior,alphaMap:Gs,envMapIntensity:Ri.envMapIntensity,transmission:Ri.transmission,specularIntensity:Ri.specularIntensity,specularColor:Ri.specularColor,opacity:Ri.opacity,side:Yn,transparent:!0}))}),Wt.add(r)}function Ac(r){const e=new fi().setFromObject(r),t=new H;return e.getSize(t),t.length()}const Dh=new jo(16777215,1,500);Dh.position.set(0,35,70);Wt.add(Dh);bc.load("imgs/world.glb",function(r){var e=Bo(r.scene);const t=120,n=Ac(e);e.scale.set(t/n,t/n,t/n);const i=new H(0,35,0);e.position.copy(i),e.rotation.y=.01,Wt.add(e);function s(){requestAnimationFrame(s),e.rotation.y+=.01,Ki.render(Wt,Ni)}s()});const Ih=new jo("#ffffff",4,500);Ih.position.set(0,26,780);Wt.add(Ih);const Nh=new jo("#ffffff",4,500);Nh.position.set(0,26,580);Wt.add(Nh);var Lo=[];bc.load("imgs/asteroide.glb",function(r){[[-15,40,720],[11,35,750],[15,10,800],[17,9,750],[15,15,500],[37,12,730],[24,14,630],[23,10,670],[30,10,520],[15,5,570],[20,15,450],[27,25,744],[23,11,666],[18,17,550],[32,20,654],[0,30,611],[-40,10,760],[-15,5,750],[-15,15,500],[-30,12,730],[-20,18,630],[-20,10,670],[-30,7,520],[-15,5,570],[-20,15,450],[-27,25,744],[-23,11,666],[-18,17,550],[-32,20,654],[-1,20,711]].forEach(n=>{Lo[Lo.length]=Bo(r.scene),Qv(Lo[Lo.length-1],n[0],n[1],n[2])});var t=Bo(r.scene);Wt.add(t)});function Qv(r,e,t,n){const s=Ac(r);r.scale.set(40/s,40/s,40/s),r.traverse(c=>{c.isMesh&&(c.material.color.set("#ffffff"),c.material.wireframe=!0)});const a=new H(e,t,n);r.position.copy(a),Wt.add(r)}document.getElementById("downloadcv").addEventListener("click",function(){var r=document.createElement("a");r.href="imgs/Docs/CV-Luis Carvalho.pdf",r.download="CV-Luis Carvalho.pdf",r.dispatchEvent(new MouseEvent("click"))})});export default ex();
