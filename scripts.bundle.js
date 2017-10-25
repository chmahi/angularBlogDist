
/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/**
 * Owl Carousel v2.2.0
 * Copyright 2013-2016 David Deutsch
 * Licensed under MIT (https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE)
 */
/**
 * Owl carousel
 * @version 2.1.6
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from beeing retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Widths of all items.
		 */
		this._widths = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': [ 'busy' ],
				'animating': [ 'busy' ],
				'dragging': [ 'interacting' ]
			}
		};

		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [ {
		filter: [ 'width', 'settings' ],
		run: function() {
			this._width = this.$element.width();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var clones = [],
				items = this._items,
				settings = this.settings,
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';

			repeat /= 2;

			while (repeat--) {
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};

			this.$stage.css(css);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: [ 'items' ],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			if (this.settings.center) {
				this.$stage.children('.center').removeClass('center');
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	} ];

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>')
			.wrap('<div class="' + this.settings.stageOuterClass + '"/>');

		// append stage
		this.$element.append(this.$stage.parent());

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.$element.is(':visible')) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.$element.is(':visible')) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function() {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
		}

		if (this.settings.touchDrag){
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin :
					stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function(event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function() { return false; });
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
				// on a right pull, check on previous index
				// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's'
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function(state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function(part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function(v, i) { return i });
	};

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			iterator,
			reciprocalItemsWidth,
			elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			reciprocalItemsWidth = this._items[--iterator].width();
			elementWidth = this.$element.width();
			while (iterator--) {
				reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
				if (reciprocalItemsWidth > elementWidth) {
					break;
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.$element.is(':visible')) {
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			throw 'Can not detect viewport width.';
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function(images) {
		images.each($.proxy(function(i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function(e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();

		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function(object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function(e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function(event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
				event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function(number) {
		return !isNaN(parseFloat(number));
	};

	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function(first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function() {
			var $this = $(this),
				data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);

				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function(i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([ event ]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([ event ]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoRefresh = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
		this._interval = null;

		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._visible = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
	 * Watches the element.
	 */
	AutoRefresh.prototype.watch = function() {
		if (this._interval) {
			return;
		}

		this._visible = this._core.$element.is(':visible');
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
	 * Refreshes the element.
	 */
	AutoRefresh.prototype.refresh = function() {
		if (this._core.$element.is(':visible') === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && (this._core.invalidate('width') && this._core.refresh());
	};

	/**
	 * Destroys the plugin.
	 */
	AutoRefresh.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false
	};

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
				url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url(' + url + ')',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight
					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		var start = this._core._current,
			end = start + this._core.settings.items,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;

		$.each(visible, function(index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {
			var type = (function() {
					if (target.attr('data-vimeo-id')) {
						return 'vimeo';
					} else if (target.attr('data-vzaar-id')) {
						return 'vzaar'
					} else {
						return 'youtube';
					}
				})(),
				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
				width = target.attr('data-width') || this._core.settings.videoWidth,
				height = target.attr('data-height') || this._core.settings.videoHeight,
				url = target.attr('href');

		if (url) {

			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {
		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
				} else {
					tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function(event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		if (video.type === 'youtube') {
			html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' +
				video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
		} else if (video.type === 'vimeo') {
			html = '<iframe src="//player.vimeo.com/video/' + video.id +
				'?autoplay=1" width="' + width + '" height="' + height +
				'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		} else if (video.type === 'vzaar') {
			html = '<iframe frameborder="0"' + 'height="' + height + '"' + 'width="' + width +
				'" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' +
				'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>';
		}

		$('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {
		var element = document.fullscreenElement || document.mozFullScreenElement ||
				document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear)
				.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear)
				.addClass('animated owl-animated-in')
				.addClass(incoming);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * The autoplay timeout.
		 * @type {Timeout}
		 */
		this._timeout = null;

		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = false;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position') {
					//console.log('play?', e);
					if (this._core.settings.autoplay) {
						this._setAutoPlayInterval();
					}
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function(e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		this._paused = false;

		if (this._core.is('rotating')) {
			return;
		}

		this._core.enter('rotating');

		this._setAutoPlayInterval();
	};

	/**
	 * Gets a new timeout
	 * @private
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 * @return {Timeout}
	 */
	Autoplay.prototype._getNextTimeout = function(timeout, speed) {
		if ( this._timeout ) {
			window.clearTimeout(this._timeout);
		}
		return window.setTimeout($.proxy(function() {
			if (this._paused || this._core.is('busy') || this._core.is('interacting') || document.hidden) {
				return;
			}
			this._core.next(speed || this._core.settings.autoplaySpeed);
		}, this), timeout || this._core.settings.autoplayTimeout);
	};

	/**
	 * Sets autoplay in motion.
	 * @private
	 */
	Autoplay.prototype._setAutoPlayInterval = function() {
		this._timeout = this._getNextTimeout();
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		if (!this._core.is('rotating')) {
			return;
		}

		window.clearTimeout(this._timeout);
		this._core.leave('rotating');
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		if (!this._core.is('rotating')) {
			return;
		}

		this._paused = true;
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [ 'prev', 'next' ],
		navSpeed: false,
		navElement: 'div',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [ 'owl-prev', 'owl-next' ],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var override,
			settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[0])
			.html(settings.navText[0])
			.prependTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.prev(settings.navSpeed);
			}, this));
		this._controls.$next = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[1])
			.html(settings.navText[1])
			.appendTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.next(settings.navSpeed);
			}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [ $('<div>')
				.addClass(settings.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'div', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$absolute)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			this._controls[control].remove();
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			maximum = this._core.maximum(true),
			settings = this._core.settings,
			size = settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference,
			settings = this._core.settings,
			disabled = this._core.items().length <= settings.items,
			index = this._core.relative(this._core.current()),
			loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function(page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
						hash = $.map(this._hashes, function(item, hash) {
							return item === current ? hash : null;
						}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.1.0
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	var style = $('<support>').get(0).style,
		prefixes = 'Webkit Moz O ms'.split(' '),
		events = {
			transition: {
				end: {
					WebkitTransition: 'webkitTransitionEnd',
					MozTransition: 'transitionend',
					OTransition: 'oTransitionEnd',
					transition: 'transitionend'
				}
			},
			animation: {
				end: {
					WebkitAnimation: 'webkitAnimationEnd',
					MozAnimation: 'animationend',
					OAnimation: 'oAnimationEnd',
					animation: 'animationend'
				}
			}
		},
		tests = {
			csstransforms: function() {
				return !!test('transform');
			},
			csstransforms3d: function() {
				return !!test('perspective');
			},
			csstransitions: function() {
				return !!test('transition');
			},
			cssanimations: function() {
				return !!test('animation');
			}
		};

	function test(property, prefixed) {
		var result = false,
			upper = property.charAt(0).toUpperCase() + property.slice(1);

		$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
			if (style[property] !== undefined) {
				result = prefixed ? property : true;
				return false;
			}
		});

		return result;
	}

	function prefixed(property) {
		return test(property, true);
	}

	if (tests.csstransitions()) {
		/* jshint -W053 */
		$.support.transition = new String(prefixed('transition'))
		$.support.transition.end = events.transition.end[ $.support.transition ];
	}

	if (tests.cssanimations()) {
		/* jshint -W053 */
		$.support.animation = new String(prefixed('animation'))
		$.support.animation.end = events.animation.end[ $.support.animation ];
	}

	if (tests.csstransforms()) {
		/* jshint -W053 */
		$.support.transform = new String(prefixed('transform'));
		$.support.transform3d = tests.csstransforms3d();
	}

})(window.Zepto || window.jQuery, window, document);

/*!
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:01Z
 */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){function c(a){var b="length"in a&&a.length,c=_.type(a);return"function"===c||_.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}function d(a,b,c){if(_.isFunction(b))return _.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return _.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(ha.test(b))return _.filter(b,a,c);b=_.filter(b,a)}return _.grep(a,function(a){return U.call(b,a)>=0!==c})}function e(a,b){for(;(a=a[b])&&1!==a.nodeType;);return a}function f(a){var b=oa[a]={};return _.each(a.match(na)||[],function(a,c){b[c]=!0}),b}function g(){Z.removeEventListener("DOMContentLoaded",g,!1),a.removeEventListener("load",g,!1),_.ready()}function h(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=_.expando+h.uid++}function i(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(ua,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:ta.test(c)?_.parseJSON(c):c}catch(e){}sa.set(a,b,c)}else c=void 0;return c}function j(){return!0}function k(){return!1}function l(){try{return Z.activeElement}catch(a){}}function m(a,b){return _.nodeName(a,"table")&&_.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function n(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function o(a){var b=Ka.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function p(a,b){for(var c=0,d=a.length;d>c;c++)ra.set(a[c],"globalEval",!b||ra.get(b[c],"globalEval"))}function q(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(ra.hasData(a)&&(f=ra.access(a),g=ra.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)_.event.add(b,e,j[e][c])}sa.hasData(a)&&(h=sa.access(a),i=_.extend({},h),sa.set(b,i))}}function r(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&_.nodeName(a,b)?_.merge([a],c):c}function s(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ya.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}function t(b,c){var d,e=_(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:_.css(e[0],"display");return e.detach(),f}function u(a){var b=Z,c=Oa[a];return c||(c=t(a,b),"none"!==c&&c||(Na=(Na||_("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=Na[0].contentDocument,b.write(),b.close(),c=t(a,b),Na.detach()),Oa[a]=c),c}function v(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||_.contains(a.ownerDocument,a)||(g=_.style(a,b)),Qa.test(g)&&Pa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function w(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}function x(a,b){if(b in a)return b;for(var c=b[0].toUpperCase()+b.slice(1),d=b,e=Xa.length;e--;)if(b=Xa[e]+c,b in a)return b;return d}function y(a,b,c){var d=Ta.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function z(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=_.css(a,c+wa[f],!0,e)),d?("content"===c&&(g-=_.css(a,"padding"+wa[f],!0,e)),"margin"!==c&&(g-=_.css(a,"border"+wa[f]+"Width",!0,e))):(g+=_.css(a,"padding"+wa[f],!0,e),"padding"!==c&&(g+=_.css(a,"border"+wa[f]+"Width",!0,e)));return g}function A(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g="border-box"===_.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=v(a,b,f),(0>e||null==e)&&(e=a.style[b]),Qa.test(e))return e;d=g&&(Y.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+z(a,b,c||(g?"border":"content"),d,f)+"px"}function B(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=ra.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&xa(d)&&(f[g]=ra.access(d,"olddisplay",u(d.nodeName)))):(e=xa(d),"none"===c&&e||ra.set(d,"olddisplay",e?c:_.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function C(a,b,c,d,e){return new C.prototype.init(a,b,c,d,e)}function D(){return setTimeout(function(){Ya=void 0}),Ya=_.now()}function E(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=wa[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function F(a,b,c){for(var d,e=(cb[b]||[]).concat(cb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function G(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},n=a.style,o=a.nodeType&&xa(a),p=ra.get(a,"fxshow");c.queue||(h=_._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,_.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[n.overflow,n.overflowX,n.overflowY],j=_.css(a,"display"),k="none"===j?ra.get(a,"olddisplay")||u(a.nodeName):j,"inline"===k&&"none"===_.css(a,"float")&&(n.display="inline-block")),c.overflow&&(n.overflow="hidden",l.always(function(){n.overflow=c.overflow[0],n.overflowX=c.overflow[1],n.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],$a.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(o?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;o=!0}m[d]=p&&p[d]||_.style(a,d)}else j=void 0;if(_.isEmptyObject(m))"inline"===("none"===j?u(a.nodeName):j)&&(n.display=j);else{p?"hidden"in p&&(o=p.hidden):p=ra.access(a,"fxshow",{}),f&&(p.hidden=!o),o?_(a).show():l.done(function(){_(a).hide()}),l.done(function(){var b;ra.remove(a,"fxshow");for(b in m)_.style(a,b,m[b])});for(d in m)g=F(o?p[d]:0,d,l),d in p||(p[d]=g.start,o&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function H(a,b){var c,d,e,f,g;for(c in a)if(d=_.camelCase(c),e=b[d],f=a[c],_.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=_.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function I(a,b,c){var d,e,f=0,g=bb.length,h=_.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Ya||D(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:_.extend({},b),opts:_.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Ya||D(),duration:c.duration,tweens:[],createTween:function(b,c){var d=_.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(H(k,j.opts.specialEasing);g>f;f++)if(d=bb[f].call(j,a,k,j.opts))return d;return _.map(k,F,j),_.isFunction(j.opts.start)&&j.opts.start.call(a,j),_.fx.timer(_.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function J(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(na)||[];if(_.isFunction(c))for(;d=f[e++];)"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function K(a,b,c,d){function e(h){var i;return f[h]=!0,_.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||g||f[j]?g?!(i=j):void 0:(b.dataTypes.unshift(j),e(j),!1)}),i}var f={},g=a===tb;return e(b.dataTypes[0])||!f["*"]&&e("*")}function L(a,b){var c,d,e=_.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&_.extend(!0,a,d),a}function M(a,b,c){for(var d,e,f,g,h=a.contents,i=a.dataTypes;"*"===i[0];)i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function N(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];for(f=k.shift();f;)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}function O(a,b,c,d){var e;if(_.isArray(b))_.each(b,function(b,e){c||yb.test(a)?d(a,e):O(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==_.type(b))d(a,b);else for(e in b)O(a+"["+e+"]",b[e],c,d)}function P(a){return _.isWindow(a)?a:9===a.nodeType&&a.defaultView}var Q=[],R=Q.slice,S=Q.concat,T=Q.push,U=Q.indexOf,V={},W=V.toString,X=V.hasOwnProperty,Y={},Z=a.document,$="2.1.4",_=function(a,b){return new _.fn.init(a,b)},aa=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ba=/^-ms-/,ca=/-([\da-z])/gi,da=function(a,b){return b.toUpperCase()};_.fn=_.prototype={jquery:$,constructor:_,selector:"",length:0,toArray:function(){return R.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:R.call(this)},pushStack:function(a){var b=_.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return _.each(this,a,b)},map:function(a){return this.pushStack(_.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(R.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:T,sort:Q.sort,splice:Q.splice},_.extend=_.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||_.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(_.isPlainObject(d)||(e=_.isArray(d)))?(e?(e=!1,f=c&&_.isArray(c)?c:[]):f=c&&_.isPlainObject(c)?c:{},g[b]=_.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},_.extend({expando:"jQuery"+($+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===_.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!_.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==_.type(a)||a.nodeType||_.isWindow(a)?!1:a.constructor&&!X.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?V[W.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=_.trim(a),a&&(1===a.indexOf("use strict")?(b=Z.createElement("script"),b.text=a,Z.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(ba,"ms-").replace(ca,da)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,d){var e,f=0,g=a.length,h=c(a);if(d){if(h)for(;g>f&&(e=b.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=b.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=b.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=b.call(a[f],f,a[f]),e===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(aa,"")},makeArray:function(a,b){var d=b||[];return null!=a&&(c(Object(a))?_.merge(d,"string"==typeof a?[a]:a):T.call(d,a)),d},inArray:function(a,b,c){return null==b?-1:U.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,d){var e,f=0,g=a.length,h=c(a),i=[];if(h)for(;g>f;f++)e=b(a[f],f,d),null!=e&&i.push(e);else for(f in a)e=b(a[f],f,d),null!=e&&i.push(e);return S.apply([],i)},guid:1,proxy:function(a,b){var c,d,e;return"string"==typeof b&&(c=a[b],b=a,a=c),_.isFunction(a)?(d=R.call(arguments,2),e=function(){return a.apply(b||this,d.concat(R.call(arguments)))},e.guid=a.guid=a.guid||_.guid++,e):void 0},now:Date.now,support:Y}),_.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){V["[object "+b+"]"]=b.toLowerCase()});var ea=/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
function(a){function b(a,b,c,d){var e,f,g,h,i,j,l,n,o,p;if((b?b.ownerDocument||b:O)!==G&&F(b),b=b||G,c=c||[],h=b.nodeType,"string"!=typeof a||!a||1!==h&&9!==h&&11!==h)return c;if(!d&&I){if(11!==h&&(e=sa.exec(a)))if(g=e[1]){if(9===h){if(f=b.getElementById(g),!f||!f.parentNode)return c;if(f.id===g)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(g))&&M(b,f)&&f.id===g)return c.push(f),c}else{if(e[2])return $.apply(c,b.getElementsByTagName(a)),c;if((g=e[3])&&v.getElementsByClassName)return $.apply(c,b.getElementsByClassName(g)),c}if(v.qsa&&(!J||!J.test(a))){if(n=l=N,o=b,p=1!==h&&a,1===h&&"object"!==b.nodeName.toLowerCase()){for(j=z(a),(l=b.getAttribute("id"))?n=l.replace(ua,"\\$&"):b.setAttribute("id",n),n="[id='"+n+"'] ",i=j.length;i--;)j[i]=n+m(j[i]);o=ta.test(a)&&k(b.parentNode)||b,p=j.join(",")}if(p)try{return $.apply(c,o.querySelectorAll(p)),c}catch(q){}finally{l||b.removeAttribute("id")}}}return B(a.replace(ia,"$1"),b,c,d)}function c(){function a(c,d){return b.push(c+" ")>w.cacheLength&&delete a[b.shift()],a[c+" "]=d}var b=[];return a}function d(a){return a[N]=!0,a}function e(a){var b=G.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function f(a,b){for(var c=a.split("|"),d=a.length;d--;)w.attrHandle[c[d]]=b}function g(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||V)-(~a.sourceIndex||V);if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}function h(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function i(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function j(a){return d(function(b){return b=+b,d(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function k(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}function l(){}function m(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function n(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=Q++;return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[P,f];if(g){for(;b=b[d];)if((1===b.nodeType||e)&&a(b,c,g))return!0}else for(;b=b[d];)if(1===b.nodeType||e){if(i=b[N]||(b[N]={}),(h=i[d])&&h[0]===P&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function o(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function p(a,c,d){for(var e=0,f=c.length;f>e;e++)b(a,c[e],d);return d}function q(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function r(a,b,c,e,f,g){return e&&!e[N]&&(e=r(e)),f&&!f[N]&&(f=r(f,g)),d(function(d,g,h,i){var j,k,l,m=[],n=[],o=g.length,r=d||p(b||"*",h.nodeType?[h]:h,[]),s=!a||!d&&b?r:q(r,m,a,h,i),t=c?f||(d?a:o||e)?[]:g:s;if(c&&c(s,t,h,i),e)for(j=q(t,n),e(j,[],h,i),k=j.length;k--;)(l=j[k])&&(t[n[k]]=!(s[n[k]]=l));if(d){if(f||a){if(f){for(j=[],k=t.length;k--;)(l=t[k])&&j.push(s[k]=l);f(null,t=[],j,i)}for(k=t.length;k--;)(l=t[k])&&(j=f?aa(d,l):m[k])>-1&&(d[j]=!(g[j]=l))}}else t=q(t===g?t.splice(o,t.length):t),f?f(null,g,t,i):$.apply(g,t)})}function s(a){for(var b,c,d,e=a.length,f=w.relative[a[0].type],g=f||w.relative[" "],h=f?1:0,i=n(function(a){return a===b},g,!0),j=n(function(a){return aa(b,a)>-1},g,!0),k=[function(a,c,d){var e=!f&&(d||c!==C)||((b=c).nodeType?i(a,c,d):j(a,c,d));return b=null,e}];e>h;h++)if(c=w.relative[a[h].type])k=[n(o(k),c)];else{if(c=w.filter[a[h].type].apply(null,a[h].matches),c[N]){for(d=++h;e>d&&!w.relative[a[d].type];d++);return r(h>1&&o(k),h>1&&m(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(ia,"$1"),c,d>h&&s(a.slice(h,d)),e>d&&s(a=a.slice(d)),e>d&&m(a))}k.push(c)}return o(k)}function t(a,c){var e=c.length>0,f=a.length>0,g=function(d,g,h,i,j){var k,l,m,n=0,o="0",p=d&&[],r=[],s=C,t=d||f&&w.find.TAG("*",j),u=P+=null==s?1:Math.random()||.1,v=t.length;for(j&&(C=g!==G&&g);o!==v&&null!=(k=t[o]);o++){if(f&&k){for(l=0;m=a[l++];)if(m(k,g,h)){i.push(k);break}j&&(P=u)}e&&((k=!m&&k)&&n--,d&&p.push(k))}if(n+=o,e&&o!==n){for(l=0;m=c[l++];)m(p,r,g,h);if(d){if(n>0)for(;o--;)p[o]||r[o]||(r[o]=Y.call(i));r=q(r)}$.apply(i,r),j&&!d&&r.length>0&&n+c.length>1&&b.uniqueSort(i)}return j&&(P=u,C=s),p};return e?d(g):g}var u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N="sizzle"+1*new Date,O=a.document,P=0,Q=0,R=c(),S=c(),T=c(),U=function(a,b){return a===b&&(E=!0),0},V=1<<31,W={}.hasOwnProperty,X=[],Y=X.pop,Z=X.push,$=X.push,_=X.slice,aa=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},ba="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ca="[\\x20\\t\\r\\n\\f]",da="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ea=da.replace("w","w#"),fa="\\["+ca+"*("+da+")(?:"+ca+"*([*^$|!~]?=)"+ca+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ea+"))|)"+ca+"*\\]",ga=":("+da+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+fa+")*)|.*)\\)|)",ha=new RegExp(ca+"+","g"),ia=new RegExp("^"+ca+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ca+"+$","g"),ja=new RegExp("^"+ca+"*,"+ca+"*"),ka=new RegExp("^"+ca+"*([>+~]|"+ca+")"+ca+"*"),la=new RegExp("="+ca+"*([^\\]'\"]*?)"+ca+"*\\]","g"),ma=new RegExp(ga),na=new RegExp("^"+ea+"$"),oa={ID:new RegExp("^#("+da+")"),CLASS:new RegExp("^\\.("+da+")"),TAG:new RegExp("^("+da.replace("w","w*")+")"),ATTR:new RegExp("^"+fa),PSEUDO:new RegExp("^"+ga),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ca+"*(even|odd|(([+-]|)(\\d*)n|)"+ca+"*(?:([+-]|)"+ca+"*(\\d+)|))"+ca+"*\\)|)","i"),bool:new RegExp("^(?:"+ba+")$","i"),needsContext:new RegExp("^"+ca+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ca+"*((?:-\\d)?\\d*)"+ca+"*\\)|)(?=[^-]|$)","i")},pa=/^(?:input|select|textarea|button)$/i,qa=/^h\d$/i,ra=/^[^{]+\{\s*\[native \w/,sa=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ta=/[+~]/,ua=/'|\\/g,va=new RegExp("\\\\([\\da-f]{1,6}"+ca+"?|("+ca+")|.)","ig"),wa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},xa=function(){F()};try{$.apply(X=_.call(O.childNodes),O.childNodes),X[O.childNodes.length].nodeType}catch(ya){$={apply:X.length?function(a,b){Z.apply(a,_.call(b))}:function(a,b){for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}v=b.support={},y=b.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},F=b.setDocument=function(a){var b,c,d=a?a.ownerDocument||a:O;return d!==G&&9===d.nodeType&&d.documentElement?(G=d,H=d.documentElement,c=d.defaultView,c&&c!==c.top&&(c.addEventListener?c.addEventListener("unload",xa,!1):c.attachEvent&&c.attachEvent("onunload",xa)),I=!y(d),v.attributes=e(function(a){return a.className="i",!a.getAttribute("className")}),v.getElementsByTagName=e(function(a){return a.appendChild(d.createComment("")),!a.getElementsByTagName("*").length}),v.getElementsByClassName=ra.test(d.getElementsByClassName),v.getById=e(function(a){return H.appendChild(a).id=N,!d.getElementsByName||!d.getElementsByName(N).length}),v.getById?(w.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&I){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},w.filter.ID=function(a){var b=a.replace(va,wa);return function(a){return a.getAttribute("id")===b}}):(delete w.find.ID,w.filter.ID=function(a){var b=a.replace(va,wa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),w.find.TAG=v.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):v.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},w.find.CLASS=v.getElementsByClassName&&function(a,b){return I?b.getElementsByClassName(a):void 0},K=[],J=[],(v.qsa=ra.test(d.querySelectorAll))&&(e(function(a){H.appendChild(a).innerHTML="<a id='"+N+"'></a><select id='"+N+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&J.push("[*^$]="+ca+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||J.push("\\["+ca+"*(?:value|"+ba+")"),a.querySelectorAll("[id~="+N+"-]").length||J.push("~="),a.querySelectorAll(":checked").length||J.push(":checked"),a.querySelectorAll("a#"+N+"+*").length||J.push(".#.+[+~]")}),e(function(a){var b=d.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&J.push("name"+ca+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||J.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),J.push(",.*:")})),(v.matchesSelector=ra.test(L=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&e(function(a){v.disconnectedMatch=L.call(a,"div"),L.call(a,"[s!='']:x"),K.push("!=",ga)}),J=J.length&&new RegExp(J.join("|")),K=K.length&&new RegExp(K.join("|")),b=ra.test(H.compareDocumentPosition),M=b||ra.test(H.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},U=b?function(a,b){if(a===b)return E=!0,0;var c=!a.compareDocumentPosition-!b.compareDocumentPosition;return c?c:(c=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&c||!v.sortDetached&&b.compareDocumentPosition(a)===c?a===d||a.ownerDocument===O&&M(O,a)?-1:b===d||b.ownerDocument===O&&M(O,b)?1:D?aa(D,a)-aa(D,b):0:4&c?-1:1)}:function(a,b){if(a===b)return E=!0,0;var c,e=0,f=a.parentNode,h=b.parentNode,i=[a],j=[b];if(!f||!h)return a===d?-1:b===d?1:f?-1:h?1:D?aa(D,a)-aa(D,b):0;if(f===h)return g(a,b);for(c=a;c=c.parentNode;)i.unshift(c);for(c=b;c=c.parentNode;)j.unshift(c);for(;i[e]===j[e];)e++;return e?g(i[e],j[e]):i[e]===O?-1:j[e]===O?1:0},d):G},b.matches=function(a,c){return b(a,null,null,c)},b.matchesSelector=function(a,c){if((a.ownerDocument||a)!==G&&F(a),c=c.replace(la,"='$1']"),v.matchesSelector&&I&&(!K||!K.test(c))&&(!J||!J.test(c)))try{var d=L.call(a,c);if(d||v.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return b(c,G,null,[a]).length>0},b.contains=function(a,b){return(a.ownerDocument||a)!==G&&F(a),M(a,b)},b.attr=function(a,b){(a.ownerDocument||a)!==G&&F(a);var c=w.attrHandle[b.toLowerCase()],d=c&&W.call(w.attrHandle,b.toLowerCase())?c(a,b,!I):void 0;return void 0!==d?d:v.attributes||!I?a.getAttribute(b):(d=a.getAttributeNode(b))&&d.specified?d.value:null},b.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},b.uniqueSort=function(a){var b,c=[],d=0,e=0;if(E=!v.detectDuplicates,D=!v.sortStable&&a.slice(0),a.sort(U),E){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}return D=null,a},x=b.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=x(a)}else if(3===e||4===e)return a.nodeValue}else for(;b=a[d++];)c+=x(b);return c},w=b.selectors={cacheLength:50,createPseudo:d,match:oa,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(va,wa),a[3]=(a[3]||a[4]||a[5]||"").replace(va,wa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&b.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return oa.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&ma.test(c)&&(b=z(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(va,wa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=R[a+" "];return b||(b=new RegExp("(^|"+ca+")"+a+"("+ca+"|$)"))&&R(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,c,d){return function(e){var f=b.attr(e,a);return null==f?"!="===c:c?(f+="","="===c?f===d:"!="===c?f!==d:"^="===c?d&&0===f.indexOf(d):"*="===c?d&&f.indexOf(d)>-1:"$="===c?d&&f.slice(-d.length)===d:"~="===c?(" "+f.replace(ha," ")+" ").indexOf(d)>-1:"|="===c?f===d||f.slice(0,d.length+1)===d+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){for(;p;){for(l=b;l=l[p];)if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){for(k=q[N]||(q[N]={}),j=k[a]||[],n=j[0]===P&&j[1],m=j[0]===P&&j[2],l=n&&q.childNodes[n];l=++n&&l&&l[p]||(m=n=0)||o.pop();)if(1===l.nodeType&&++m&&l===b){k[a]=[P,n,m];break}}else if(s&&(j=(b[N]||(b[N]={}))[a])&&j[0]===P)m=j[1];else for(;(l=++n&&l&&l[p]||(m=n=0)||o.pop())&&((h?l.nodeName.toLowerCase()!==r:1!==l.nodeType)||!++m||(s&&((l[N]||(l[N]={}))[a]=[P,m]),l!==b)););return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,c){var e,f=w.pseudos[a]||w.setFilters[a.toLowerCase()]||b.error("unsupported pseudo: "+a);return f[N]?f(c):f.length>1?(e=[a,a,"",c],w.setFilters.hasOwnProperty(a.toLowerCase())?d(function(a,b){for(var d,e=f(a,c),g=e.length;g--;)d=aa(a,e[g]),a[d]=!(b[d]=e[g])}):function(a){return f(a,0,e)}):f}},pseudos:{not:d(function(a){var b=[],c=[],e=A(a.replace(ia,"$1"));return e[N]?d(function(a,b,c,d){for(var f,g=e(a,null,d,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,d,f){return b[0]=a,e(b,null,f,c),b[0]=null,!c.pop()}}),has:d(function(a){return function(c){return b(a,c).length>0}}),contains:d(function(a){return a=a.replace(va,wa),function(b){return(b.textContent||b.innerText||x(b)).indexOf(a)>-1}}),lang:d(function(a){return na.test(a||"")||b.error("unsupported lang: "+a),a=a.replace(va,wa).toLowerCase(),function(b){var c;do if(c=I?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===H},focus:function(a){return a===G.activeElement&&(!G.hasFocus||G.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!w.pseudos.empty(a)},header:function(a){return qa.test(a.nodeName)},input:function(a){return pa.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:j(function(){return[0]}),last:j(function(a,b){return[b-1]}),eq:j(function(a,b,c){return[0>c?c+b:c]}),even:j(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:j(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:j(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:j(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},w.pseudos.nth=w.pseudos.eq;for(u in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[u]=h(u);for(u in{submit:!0,reset:!0})w.pseudos[u]=i(u);return l.prototype=w.filters=w.pseudos,w.setFilters=new l,z=b.tokenize=function(a,c){var d,e,f,g,h,i,j,k=S[a+" "];if(k)return c?0:k.slice(0);for(h=a,i=[],j=w.preFilter;h;){(!d||(e=ja.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,(e=ka.exec(h))&&(d=e.shift(),f.push({value:d,type:e[0].replace(ia," ")}),h=h.slice(d.length));for(g in w.filter)!(e=oa[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}return c?h.length:h?b.error(a):S(a,i).slice(0)},A=b.compile=function(a,b){var c,d=[],e=[],f=T[a+" "];if(!f){for(b||(b=z(a)),c=b.length;c--;)f=s(b[c]),f[N]?d.push(f):e.push(f);f=T(a,t(e,d)),f.selector=a}return f},B=b.select=function(a,b,c,d){var e,f,g,h,i,j="function"==typeof a&&a,l=!d&&z(a=j.selector||a);if(c=c||[],1===l.length){if(f=l[0]=l[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&v.getById&&9===b.nodeType&&I&&w.relative[f[1].type]){if(b=(w.find.ID(g.matches[0].replace(va,wa),b)||[])[0],!b)return c;j&&(b=b.parentNode),a=a.slice(f.shift().value.length)}for(e=oa.needsContext.test(a)?0:f.length;e--&&(g=f[e],!w.relative[h=g.type]);)if((i=w.find[h])&&(d=i(g.matches[0].replace(va,wa),ta.test(f[0].type)&&k(b.parentNode)||b))){if(f.splice(e,1),a=d.length&&m(f),!a)return $.apply(c,d),c;break}}return(j||A(a,l))(d,b,!I,c,ta.test(a)&&k(b.parentNode)||b),c},v.sortStable=N.split("").sort(U).join("")===N,v.detectDuplicates=!!E,F(),v.sortDetached=e(function(a){return 1&a.compareDocumentPosition(G.createElement("div"))}),e(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||f("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),v.attributes&&e(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||f("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),e(function(a){return null==a.getAttribute("disabled")})||f(ba,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),b}(a);_.find=ea,_.expr=ea.selectors,_.expr[":"]=_.expr.pseudos,_.unique=ea.uniqueSort,_.text=ea.getText,_.isXMLDoc=ea.isXML,_.contains=ea.contains;var fa=_.expr.match.needsContext,ga=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,ha=/^.[^:#\[\.,]*$/;_.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?_.find.matchesSelector(d,a)?[d]:[]:_.find.matches(a,_.grep(b,function(a){return 1===a.nodeType}))},_.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(_(a).filter(function(){for(b=0;c>b;b++)if(_.contains(e[b],this))return!0}));for(b=0;c>b;b++)_.find(a,e[b],d);return d=this.pushStack(c>1?_.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(d(this,a||[],!1))},not:function(a){return this.pushStack(d(this,a||[],!0))},is:function(a){return!!d(this,"string"==typeof a&&fa.test(a)?_(a):a||[],!1).length}});var ia,ja=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ka=_.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:ja.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||ia).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof _?b[0]:b,_.merge(this,_.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:Z,!0)),ga.test(c[1])&&_.isPlainObject(b))for(c in b)_.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=Z.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=Z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):_.isFunction(a)?"undefined"!=typeof ia.ready?ia.ready(a):a(_):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),_.makeArray(a,this))};ka.prototype=_.fn,ia=_(Z);var la=/^(?:parents|prev(?:Until|All))/,ma={children:!0,contents:!0,next:!0,prev:!0};_.extend({dir:function(a,b,c){for(var d=[],e=void 0!==c;(a=a[b])&&9!==a.nodeType;)if(1===a.nodeType){if(e&&_(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),_.fn.extend({has:function(a){var b=_(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(_.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=fa.test(a)||"string"!=typeof a?_(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&_.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?_.unique(f):f)},index:function(a){return a?"string"==typeof a?U.call(_(a),this[0]):U.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(_.unique(_.merge(this.get(),_(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),_.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return _.dir(a,"parentNode")},parentsUntil:function(a,b,c){return _.dir(a,"parentNode",c)},next:function(a){return e(a,"nextSibling")},prev:function(a){return e(a,"previousSibling")},nextAll:function(a){return _.dir(a,"nextSibling")},prevAll:function(a){return _.dir(a,"previousSibling")},nextUntil:function(a,b,c){return _.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return _.dir(a,"previousSibling",c)},siblings:function(a){return _.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return _.sibling(a.firstChild)},contents:function(a){return a.contentDocument||_.merge([],a.childNodes)}},function(a,b){_.fn[a]=function(c,d){var e=_.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=_.filter(d,e)),this.length>1&&(ma[a]||_.unique(e),la.test(a)&&e.reverse()),this.pushStack(e)}});var na=/\S+/g,oa={};_.Callbacks=function(a){a="string"==typeof a?oa[a]||f(a):_.extend({},a);var b,c,d,e,g,h,i=[],j=!a.once&&[],k=function(f){for(b=a.memory&&f,c=!0,h=e||0,e=0,g=i.length,d=!0;i&&g>h;h++)if(i[h].apply(f[0],f[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,i&&(j?j.length&&k(j.shift()):b?i=[]:l.disable())},l={add:function(){if(i){var c=i.length;!function f(b){_.each(b,function(b,c){var d=_.type(c);"function"===d?a.unique&&l.has(c)||i.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),d?g=i.length:b&&(e=c,k(b))}return this},remove:function(){return i&&_.each(arguments,function(a,b){for(var c;(c=_.inArray(b,i,c))>-1;)i.splice(c,1),d&&(g>=c&&g--,h>=c&&h--)}),this},has:function(a){return a?_.inArray(a,i)>-1:!(!i||!i.length)},empty:function(){return i=[],g=0,this},disable:function(){return i=j=b=void 0,this},disabled:function(){return!i},lock:function(){return j=void 0,b||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return!i||c&&!j||(b=b||[],b=[a,b.slice?b.slice():b],d?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!c}};return l},_.extend({Deferred:function(a){var b=[["resolve","done",_.Callbacks("once memory"),"resolved"],["reject","fail",_.Callbacks("once memory"),"rejected"],["notify","progress",_.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return _.Deferred(function(c){_.each(b,function(b,f){var g=_.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&_.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?_.extend(a,d):d}},e={};return d.pipe=d.then,_.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b,c,d,e=0,f=R.call(arguments),g=f.length,h=1!==g||a&&_.isFunction(a.promise)?g:0,i=1===h?a:_.Deferred(),j=function(a,c,d){return function(e){c[a]=this,d[a]=arguments.length>1?R.call(arguments):e,d===b?i.notifyWith(c,d):--h||i.resolveWith(c,d)}};if(g>1)for(b=new Array(g),c=new Array(g),d=new Array(g);g>e;e++)f[e]&&_.isFunction(f[e].promise)?f[e].promise().done(j(e,d,f)).fail(i.reject).progress(j(e,c,b)):--h;return h||i.resolveWith(d,f),i.promise()}});var pa;_.fn.ready=function(a){return _.ready.promise().done(a),this},_.extend({isReady:!1,readyWait:1,holdReady:function(a){a?_.readyWait++:_.ready(!0)},ready:function(a){(a===!0?--_.readyWait:_.isReady)||(_.isReady=!0,a!==!0&&--_.readyWait>0||(pa.resolveWith(Z,[_]),_.fn.triggerHandler&&(_(Z).triggerHandler("ready"),_(Z).off("ready"))))}}),_.ready.promise=function(b){return pa||(pa=_.Deferred(),"complete"===Z.readyState?setTimeout(_.ready):(Z.addEventListener("DOMContentLoaded",g,!1),a.addEventListener("load",g,!1))),pa.promise(b)},_.ready.promise();var qa=_.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===_.type(c)){e=!0;for(h in c)_.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,_.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(_(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};_.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType},h.uid=1,h.accepts=_.acceptData,h.prototype={key:function(a){if(!h.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=h.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,_.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(_.isEmptyObject(f))_.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,_.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{_.isArray(b)?d=b.concat(b.map(_.camelCase)):(e=_.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(na)||[])),c=d.length;for(;c--;)delete g[d[c]]}},hasData:function(a){return!_.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var ra=new h,sa=new h,ta=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ua=/([A-Z])/g;_.extend({hasData:function(a){return sa.hasData(a)||ra.hasData(a)},data:function(a,b,c){return sa.access(a,b,c)},removeData:function(a,b){sa.remove(a,b)},_data:function(a,b,c){return ra.access(a,b,c)},_removeData:function(a,b){ra.remove(a,b)}}),_.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=sa.get(f),1===f.nodeType&&!ra.get(f,"hasDataAttrs"))){for(c=g.length;c--;)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=_.camelCase(d.slice(5)),i(f,d,e[d])));ra.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){sa.set(this,a)}):qa(this,function(b){var c,d=_.camelCase(a);if(f&&void 0===b){if(c=sa.get(f,a),void 0!==c)return c;if(c=sa.get(f,d),void 0!==c)return c;if(c=i(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=sa.get(this,d);sa.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&sa.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){sa.remove(this,a)})}}),_.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=ra.get(a,b),c&&(!d||_.isArray(c)?d=ra.access(a,b,_.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=_.queue(a,b),d=c.length,e=c.shift(),f=_._queueHooks(a,b),g=function(){_.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return ra.get(a,c)||ra.access(a,c,{empty:_.Callbacks("once memory").add(function(){ra.remove(a,[b+"queue",c])})})}}),_.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?_.queue(this[0],a):void 0===b?this:this.each(function(){var c=_.queue(this,a,b);_._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&_.dequeue(this,a)})},dequeue:function(a){return this.each(function(){_.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=_.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};for("string"!=typeof a&&(b=a,a=void 0),a=a||"fx";g--;)c=ra.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var va=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,wa=["Top","Right","Bottom","Left"],xa=function(a,b){return a=b||a,"none"===_.css(a,"display")||!_.contains(a.ownerDocument,a)},ya=/^(?:checkbox|radio)$/i;!function(){var a=Z.createDocumentFragment(),b=a.appendChild(Z.createElement("div")),c=Z.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),Y.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",Y.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var za="undefined";Y.focusinBubbles="onfocusin"in a;var Aa=/^key/,Ba=/^(?:mouse|pointer|contextmenu)|click/,Ca=/^(?:focusinfocus|focusoutblur)$/,Da=/^([^.]*)(?:\.(.+)|)$/;_.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=ra.get(a);if(q)for(c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=_.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return typeof _!==za&&_.event.triggered!==b.type?_.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(na)||[""],j=b.length;j--;)h=Da.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=_.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=_.event.special[n]||{},k=_.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&_.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),_.event.global[n]=!0)},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=ra.hasData(a)&&ra.get(a);if(q&&(i=q.events)){for(b=(b||"").match(na)||[""],j=b.length;j--;)if(h=Da.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){for(l=_.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;f--;)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||_.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)_.event.remove(a,n+b[j],c,d,!0);_.isEmptyObject(i)&&(delete q.handle,ra.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,j,k,l,m=[d||Z],n=X.call(b,"type")?b.type:b,o=X.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||Z,3!==d.nodeType&&8!==d.nodeType&&!Ca.test(n+_.event.triggered)&&(n.indexOf(".")>=0&&(o=n.split("."),n=o.shift(),o.sort()),j=n.indexOf(":")<0&&"on"+n,b=b[_.expando]?b:new _.Event(n,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=o.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),
c=null==c?[b]:_.makeArray(c,[b]),l=_.event.special[n]||{},e||!l.trigger||l.trigger.apply(d,c)!==!1)){if(!e&&!l.noBubble&&!_.isWindow(d)){for(i=l.delegateType||n,Ca.test(i+n)||(g=g.parentNode);g;g=g.parentNode)m.push(g),h=g;h===(d.ownerDocument||Z)&&m.push(h.defaultView||h.parentWindow||a)}for(f=0;(g=m[f++])&&!b.isPropagationStopped();)b.type=f>1?i:l.bindType||n,k=(ra.get(g,"events")||{})[b.type]&&ra.get(g,"handle"),k&&k.apply(g,c),k=j&&g[j],k&&k.apply&&_.acceptData(g)&&(b.result=k.apply(g,c),b.result===!1&&b.preventDefault());return b.type=n,e||b.isDefaultPrevented()||l._default&&l._default.apply(m.pop(),c)!==!1||!_.acceptData(d)||j&&_.isFunction(d[n])&&!_.isWindow(d)&&(h=d[j],h&&(d[j]=null),_.event.triggered=n,d[n](),_.event.triggered=void 0,h&&(d[j]=h)),b.result}},dispatch:function(a){a=_.event.fix(a);var b,c,d,e,f,g=[],h=R.call(arguments),i=(ra.get(this,"events")||{})[a.type]||[],j=_.event.special[a.type]||{};if(h[0]=a,a.delegateTarget=this,!j.preDispatch||j.preDispatch.call(this,a)!==!1){for(g=_.event.handlers.call(this,a,i),b=0;(e=g[b++])&&!a.isPropagationStopped();)for(a.currentTarget=e.elem,c=0;(f=e.handlers[c++])&&!a.isImmediatePropagationStopped();)(!a.namespace_re||a.namespace_re.test(f.namespace))&&(a.handleObj=f,a.data=f.data,d=((_.event.special[f.origType]||{}).handle||f.handler).apply(e.elem,h),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()));return j.postDispatch&&j.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?_(e,this).index(i)>=0:_.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||Z,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[_.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];for(g||(this.fixHooks[e]=g=Ba.test(e)?this.mouseHooks:Aa.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new _.Event(f),b=d.length;b--;)c=d[b],a[c]=f[c];return a.target||(a.target=Z),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==l()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===l()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&_.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return _.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=_.extend(new _.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?_.event.trigger(e,null,b):_.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},_.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},_.Event=function(a,b){return this instanceof _.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?j:k):this.type=a,b&&_.extend(this,b),this.timeStamp=a&&a.timeStamp||_.now(),void(this[_.expando]=!0)):new _.Event(a,b)},_.Event.prototype={isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=j,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=j,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=j,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},_.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){_.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!_.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),Y.focusinBubbles||_.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){_.event.simulate(b,a.target,_.event.fix(a),!0)};_.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=ra.access(d,b);e||d.addEventListener(a,c,!0),ra.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=ra.access(d,b)-1;e?ra.access(d,b,e):(d.removeEventListener(a,c,!0),ra.remove(d,b))}}}),_.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=k;else if(!d)return this;return 1===e&&(f=d,d=function(a){return _().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=_.guid++)),this.each(function(){_.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,_(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=k),this.each(function(){_.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){_.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?_.event.trigger(a,b,c,!0):void 0}});var Ea=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Fa=/<([\w:]+)/,Ga=/<|&#?\w+;/,Ha=/<(?:script|style|link)/i,Ia=/checked\s*(?:[^=]|=\s*.checked.)/i,Ja=/^$|\/(?:java|ecma)script/i,Ka=/^true\/(.*)/,La=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Ma.optgroup=Ma.option,Ma.tbody=Ma.tfoot=Ma.colgroup=Ma.caption=Ma.thead,Ma.th=Ma.td,_.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=_.contains(a.ownerDocument,a);if(!(Y.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||_.isXMLDoc(a)))for(g=r(h),f=r(a),d=0,e=f.length;e>d;d++)s(f[d],g[d]);if(b)if(c)for(f=f||r(a),g=g||r(h),d=0,e=f.length;e>d;d++)q(f[d],g[d]);else q(a,h);return g=r(h,"script"),g.length>0&&p(g,!i&&r(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===_.type(e))_.merge(l,e.nodeType?[e]:e);else if(Ga.test(e)){for(f=f||k.appendChild(b.createElement("div")),g=(Fa.exec(e)||["",""])[1].toLowerCase(),h=Ma[g]||Ma._default,f.innerHTML=h[1]+e.replace(Ea,"<$1></$2>")+h[2],j=h[0];j--;)f=f.lastChild;_.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));for(k.textContent="",m=0;e=l[m++];)if((!d||-1===_.inArray(e,d))&&(i=_.contains(e.ownerDocument,e),f=r(k.appendChild(e),"script"),i&&p(f),c))for(j=0;e=f[j++];)Ja.test(e.type||"")&&c.push(e);return k},cleanData:function(a){for(var b,c,d,e,f=_.event.special,g=0;void 0!==(c=a[g]);g++){if(_.acceptData(c)&&(e=c[ra.expando],e&&(b=ra.cache[e]))){if(b.events)for(d in b.events)f[d]?_.event.remove(c,d):_.removeEvent(c,d,b.handle);ra.cache[e]&&delete ra.cache[e]}delete sa.cache[c[sa.expando]]}}}),_.fn.extend({text:function(a){return qa(this,function(a){return void 0===a?_.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=m(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=m(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?_.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||_.cleanData(r(c)),c.parentNode&&(b&&_.contains(c.ownerDocument,c)&&p(r(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(_.cleanData(r(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return _.clone(this,a,b)})},html:function(a){return qa(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Ha.test(a)&&!Ma[(Fa.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ea,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(_.cleanData(r(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,_.cleanData(r(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=S.apply([],a);var c,d,e,f,g,h,i=0,j=this.length,k=this,l=j-1,m=a[0],p=_.isFunction(m);if(p||j>1&&"string"==typeof m&&!Y.checkClone&&Ia.test(m))return this.each(function(c){var d=k.eq(c);p&&(a[0]=m.call(this,c,d.html())),d.domManip(a,b)});if(j&&(c=_.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(e=_.map(r(c,"script"),n),f=e.length;j>i;i++)g=c,i!==l&&(g=_.clone(g,!0,!0),f&&_.merge(e,r(g,"script"))),b.call(this[i],g,i);if(f)for(h=e[e.length-1].ownerDocument,_.map(e,o),i=0;f>i;i++)g=e[i],Ja.test(g.type||"")&&!ra.access(g,"globalEval")&&_.contains(h,g)&&(g.src?_._evalUrl&&_._evalUrl(g.src):_.globalEval(g.textContent.replace(La,"")))}return this}}),_.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){_.fn[a]=function(a){for(var c,d=[],e=_(a),f=e.length-1,g=0;f>=g;g++)c=g===f?this:this.clone(!0),_(e[g])[b](c),T.apply(d,c.get());return this.pushStack(d)}});var Na,Oa={},Pa=/^margin/,Qa=new RegExp("^("+va+")(?!px)[a-z%]+$","i"),Ra=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};!function(){function b(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",g.innerHTML="",e.appendChild(f);var b=a.getComputedStyle(g,null);c="1%"!==b.top,d="4px"===b.width,e.removeChild(f)}var c,d,e=Z.documentElement,f=Z.createElement("div"),g=Z.createElement("div");g.style&&(g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",Y.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",f.appendChild(g),a.getComputedStyle&&_.extend(Y,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return null==d&&b(),d},reliableMarginRight:function(){var b,c=g.appendChild(Z.createElement("div"));return c.style.cssText=g.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),g.removeChild(c),b}}))}(),_.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Sa=/^(none|table(?!-c[ea]).+)/,Ta=new RegExp("^("+va+")(.*)$","i"),Ua=new RegExp("^([+-])=("+va+")","i"),Va={position:"absolute",visibility:"hidden",display:"block"},Wa={letterSpacing:"0",fontWeight:"400"},Xa=["Webkit","O","Moz","ms"];_.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=v(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=_.camelCase(b),i=a.style;return b=_.cssProps[h]||(_.cssProps[h]=x(i,h)),g=_.cssHooks[b]||_.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ua.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(_.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||_.cssNumber[h]||(c+="px"),Y.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=_.camelCase(b);return b=_.cssProps[h]||(_.cssProps[h]=x(a.style,h)),g=_.cssHooks[b]||_.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=v(a,b,d)),"normal"===e&&b in Wa&&(e=Wa[b]),""===c||c?(f=parseFloat(e),c===!0||_.isNumeric(f)?f||0:e):e}}),_.each(["height","width"],function(a,b){_.cssHooks[b]={get:function(a,c,d){return c?Sa.test(_.css(a,"display"))&&0===a.offsetWidth?_.swap(a,Va,function(){return A(a,b,d)}):A(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return y(a,c,d?z(a,b,d,"border-box"===_.css(a,"boxSizing",!1,e),e):0)}}}),_.cssHooks.marginRight=w(Y.reliableMarginRight,function(a,b){return b?_.swap(a,{display:"inline-block"},v,[a,"marginRight"]):void 0}),_.each({margin:"",padding:"",border:"Width"},function(a,b){_.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+wa[d]+b]=f[d]||f[d-2]||f[0];return e}},Pa.test(a)||(_.cssHooks[a+b].set=y)}),_.fn.extend({css:function(a,b){return qa(this,function(a,b,c){var d,e,f={},g=0;if(_.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=_.css(a,b[g],!1,d);return f}return void 0!==c?_.style(a,b,c):_.css(a,b)},a,b,arguments.length>1)},show:function(){return B(this,!0)},hide:function(){return B(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){xa(this)?_(this).show():_(this).hide()})}}),_.Tween=C,C.prototype={constructor:C,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(_.cssNumber[c]?"":"px")},cur:function(){var a=C.propHooks[this.prop];return a&&a.get?a.get(this):C.propHooks._default.get(this)},run:function(a){var b,c=C.propHooks[this.prop];return this.options.duration?this.pos=b=_.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):C.propHooks._default.set(this),this}},C.prototype.init.prototype=C.prototype,C.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=_.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){_.fx.step[a.prop]?_.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[_.cssProps[a.prop]]||_.cssHooks[a.prop])?_.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},C.propHooks.scrollTop=C.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},_.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},_.fx=C.prototype.init,_.fx.step={};var Ya,Za,$a=/^(?:toggle|show|hide)$/,_a=new RegExp("^(?:([+-])=|)("+va+")([a-z%]*)$","i"),ab=/queueHooks$/,bb=[G],cb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=_a.exec(b),f=e&&e[3]||(_.cssNumber[a]?"":"px"),g=(_.cssNumber[a]||"px"!==f&&+d)&&_a.exec(_.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,_.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};_.Animation=_.extend(I,{tweener:function(a,b){_.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],cb[c]=cb[c]||[],cb[c].unshift(b)},prefilter:function(a,b){b?bb.unshift(a):bb.push(a)}}),_.speed=function(a,b,c){var d=a&&"object"==typeof a?_.extend({},a):{complete:c||!c&&b||_.isFunction(a)&&a,duration:a,easing:c&&b||b&&!_.isFunction(b)&&b};return d.duration=_.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in _.fx.speeds?_.fx.speeds[d.duration]:_.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){_.isFunction(d.old)&&d.old.call(this),d.queue&&_.dequeue(this,d.queue)},d},_.fn.extend({fadeTo:function(a,b,c,d){return this.filter(xa).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=_.isEmptyObject(a),f=_.speed(b,c,d),g=function(){var b=I(this,_.extend({},a),f);(e||ra.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=_.timers,g=ra.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&_.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=ra.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=_.timers,g=d?d.length:0;for(c.finish=!0,_.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),_.each(["toggle","show","hide"],function(a,b){var c=_.fn[b];_.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(E(b,!0),a,d,e)}}),_.each({slideDown:E("show"),slideUp:E("hide"),slideToggle:E("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){_.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),_.timers=[],_.fx.tick=function(){var a,b=0,c=_.timers;for(Ya=_.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||_.fx.stop(),Ya=void 0},_.fx.timer=function(a){_.timers.push(a),a()?_.fx.start():_.timers.pop()},_.fx.interval=13,_.fx.start=function(){Za||(Za=setInterval(_.fx.tick,_.fx.interval))},_.fx.stop=function(){clearInterval(Za),Za=null},_.fx.speeds={slow:600,fast:200,_default:400},_.fn.delay=function(a,b){return a=_.fx?_.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=Z.createElement("input"),b=Z.createElement("select"),c=b.appendChild(Z.createElement("option"));a.type="checkbox",Y.checkOn=""!==a.value,Y.optSelected=c.selected,b.disabled=!0,Y.optDisabled=!c.disabled,a=Z.createElement("input"),a.value="t",a.type="radio",Y.radioValue="t"===a.value}();var db,eb,fb=_.expr.attrHandle;_.fn.extend({attr:function(a,b){return qa(this,_.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){_.removeAttr(this,a)})}}),_.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===za?_.prop(a,b,c):(1===f&&_.isXMLDoc(a)||(b=b.toLowerCase(),d=_.attrHooks[b]||(_.expr.match.bool.test(b)?eb:db)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=_.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void _.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(na);if(f&&1===a.nodeType)for(;c=f[e++];)d=_.propFix[c]||c,_.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!Y.radioValue&&"radio"===b&&_.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),eb={set:function(a,b,c){return b===!1?_.removeAttr(a,c):a.setAttribute(c,c),c}},_.each(_.expr.match.bool.source.match(/\w+/g),function(a,b){var c=fb[b]||_.find.attr;fb[b]=function(a,b,d){var e,f;return d||(f=fb[b],fb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,fb[b]=f),e}});var gb=/^(?:input|select|textarea|button)$/i;_.fn.extend({prop:function(a,b){return qa(this,_.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[_.propFix[a]||a]})}}),_.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!_.isXMLDoc(a),f&&(b=_.propFix[b]||b,e=_.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||gb.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),Y.optSelected||(_.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),_.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){_.propFix[this.toLowerCase()]=this});var hb=/[\t\r\n\f]/g;_.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(_.isFunction(a))return this.each(function(b){_(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(na)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(hb," "):" ")){for(f=0;e=b[f++];)d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=_.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(_.isFunction(a))return this.each(function(b){_(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(na)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(hb," "):"")){for(f=0;e=b[f++];)for(;d.indexOf(" "+e+" ")>=0;)d=d.replace(" "+e+" "," ");g=a?_.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):_.isFunction(a)?this.each(function(c){_(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if("string"===c)for(var b,d=0,e=_(this),f=a.match(na)||[];b=f[d++];)e.hasClass(b)?e.removeClass(b):e.addClass(b);else(c===za||"boolean"===c)&&(this.className&&ra.set(this,"__className__",this.className),this.className=this.className||a===!1?"":ra.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(hb," ").indexOf(b)>=0)return!0;return!1}});var ib=/\r/g;_.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=_.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,_(this).val()):a,null==e?e="":"number"==typeof e?e+="":_.isArray(e)&&(e=_.map(e,function(a){return null==a?"":a+""})),b=_.valHooks[this.type]||_.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=_.valHooks[e.type]||_.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ib,""):null==c?"":c)}}}),_.extend({valHooks:{option:{get:function(a){var b=_.find.attr(a,"value");return null!=b?b:_.trim(_.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(Y.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!_.nodeName(c.parentNode,"optgroup"))){if(b=_(c).val(),f)return b;g.push(b)}return g},set:function(a,b){for(var c,d,e=a.options,f=_.makeArray(b),g=e.length;g--;)d=e[g],(d.selected=_.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),_.each(["radio","checkbox"],function(){_.valHooks[this]={set:function(a,b){return _.isArray(b)?a.checked=_.inArray(_(a).val(),b)>=0:void 0}},Y.checkOn||(_.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),_.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){_.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),_.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var jb=_.now(),kb=/\?/;_.parseJSON=function(a){return JSON.parse(a+"")},_.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&_.error("Invalid XML: "+a),b};var lb=/#.*$/,mb=/([?&])_=[^&]*/,nb=/^(.*?):[ \t]*([^\r\n]*)$/gm,ob=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,pb=/^(?:GET|HEAD)$/,qb=/^\/\//,rb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,sb={},tb={},ub="*/".concat("*"),vb=a.location.href,wb=rb.exec(vb.toLowerCase())||[];_.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:vb,type:"GET",isLocal:ob.test(wb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":_.parseJSON,"text xml":_.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?L(L(a,_.ajaxSettings),b):L(_.ajaxSettings,a)},ajaxPrefilter:J(sb),ajaxTransport:J(tb),ajax:function(a,b){function c(a,b,c,g){var i,k,r,s,u,w=b;2!==t&&(t=2,h&&clearTimeout(h),d=void 0,f=g||"",v.readyState=a>0?4:0,i=a>=200&&300>a||304===a,c&&(s=M(l,v,c)),s=N(l,s,v,i),i?(l.ifModified&&(u=v.getResponseHeader("Last-Modified"),u&&(_.lastModified[e]=u),u=v.getResponseHeader("etag"),u&&(_.etag[e]=u)),204===a||"HEAD"===l.type?w="nocontent":304===a?w="notmodified":(w=s.state,k=s.data,r=s.error,i=!r)):(r=w,(a||!w)&&(w="error",0>a&&(a=0))),v.status=a,v.statusText=(b||w)+"",i?o.resolveWith(m,[k,w,v]):o.rejectWith(m,[v,w,r]),v.statusCode(q),q=void 0,j&&n.trigger(i?"ajaxSuccess":"ajaxError",[v,l,i?k:r]),p.fireWith(m,[v,w]),j&&(n.trigger("ajaxComplete",[v,l]),--_.active||_.event.trigger("ajaxStop")))}"object"==typeof a&&(b=a,a=void 0),b=b||{};var d,e,f,g,h,i,j,k,l=_.ajaxSetup({},b),m=l.context||l,n=l.context&&(m.nodeType||m.jquery)?_(m):_.event,o=_.Deferred(),p=_.Callbacks("once memory"),q=l.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!g)for(g={};b=nb.exec(f);)g[b[1].toLowerCase()]=b[2];b=g[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return d&&d.abort(b),c(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,l.url=((a||l.url||vb)+"").replace(lb,"").replace(qb,wb[1]+"//"),l.type=b.method||b.type||l.method||l.type,l.dataTypes=_.trim(l.dataType||"*").toLowerCase().match(na)||[""],null==l.crossDomain&&(i=rb.exec(l.url.toLowerCase()),l.crossDomain=!(!i||i[1]===wb[1]&&i[2]===wb[2]&&(i[3]||("http:"===i[1]?"80":"443"))===(wb[3]||("http:"===wb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=_.param(l.data,l.traditional)),K(sb,l,b,v),2===t)return v;j=_.event&&l.global,j&&0===_.active++&&_.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!pb.test(l.type),e=l.url,l.hasContent||(l.data&&(e=l.url+=(kb.test(e)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=mb.test(e)?e.replace(mb,"$1_="+jb++):e+(kb.test(e)?"&":"?")+"_="+jb++)),l.ifModified&&(_.lastModified[e]&&v.setRequestHeader("If-Modified-Since",_.lastModified[e]),_.etag[e]&&v.setRequestHeader("If-None-Match",_.etag[e])),(l.data&&l.hasContent&&l.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",l.contentType),v.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+ub+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)v.setRequestHeader(k,l.headers[k]);if(l.beforeSend&&(l.beforeSend.call(m,v,l)===!1||2===t))return v.abort();u="abort";for(k in{success:1,error:1,complete:1})v[k](l[k]);if(d=K(tb,l,b,v)){v.readyState=1,j&&n.trigger("ajaxSend",[v,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){v.abort("timeout")},l.timeout));try{t=1,d.send(r,c)}catch(w){if(!(2>t))throw w;c(-1,w)}}else c(-1,"No Transport");return v},getJSON:function(a,b,c){return _.get(a,b,c,"json")},getScript:function(a,b){return _.get(a,void 0,b,"script")}}),_.each(["get","post"],function(a,b){_[b]=function(a,c,d,e){return _.isFunction(c)&&(e=e||d,d=c,c=void 0),_.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),_._evalUrl=function(a){return _.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},_.fn.extend({wrapAll:function(a){var b;return _.isFunction(a)?this.each(function(b){_(this).wrapAll(a.call(this,b))}):(this[0]&&(b=_(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstElementChild;)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return _.isFunction(a)?this.each(function(b){_(this).wrapInner(a.call(this,b))}):this.each(function(){var b=_(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=_.isFunction(a);return this.each(function(c){_(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){_.nodeName(this,"body")||_(this).replaceWith(this.childNodes)}).end()}}),_.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},_.expr.filters.visible=function(a){return!_.expr.filters.hidden(a)};var xb=/%20/g,yb=/\[\]$/,zb=/\r?\n/g,Ab=/^(?:submit|button|image|reset|file)$/i,Bb=/^(?:input|select|textarea|keygen)/i;_.param=function(a,b){var c,d=[],e=function(a,b){b=_.isFunction(b)?b():null==b?"":b,
d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=_.ajaxSettings&&_.ajaxSettings.traditional),_.isArray(a)||a.jquery&&!_.isPlainObject(a))_.each(a,function(){e(this.name,this.value)});else for(c in a)O(c,a[c],b,e);return d.join("&").replace(xb,"+")},_.fn.extend({serialize:function(){return _.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=_.prop(this,"elements");return a?_.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!_(this).is(":disabled")&&Bb.test(this.nodeName)&&!Ab.test(a)&&(this.checked||!ya.test(a))}).map(function(a,b){var c=_(this).val();return null==c?null:_.isArray(c)?_.map(c,function(a){return{name:b.name,value:a.replace(zb,"\r\n")}}):{name:b.name,value:c.replace(zb,"\r\n")}}).get()}}),_.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cb=0,Db={},Eb={0:200,1223:204},Fb=_.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Db)Db[a]()}),Y.cors=!!Fb&&"withCredentials"in Fb,Y.ajax=Fb=!!Fb,_.ajaxTransport(function(a){var b;return Y.cors||Fb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Db[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Eb[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Db[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),_.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return _.globalEval(a),a}}}),_.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),_.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=_("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),Z.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gb=[],Hb=/(=)\?(?=&|$)|\?\?/;_.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gb.pop()||_.expando+"_"+jb++;return this[a]=!0,a}}),_.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=_.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hb,"$1"+e):b.jsonp!==!1&&(b.url+=(kb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||_.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gb.push(e)),g&&_.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),_.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||Z;var d=ga.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=_.buildFragment([a],b,e),e&&e.length&&_(e).remove(),_.merge([],d.childNodes))};var Ib=_.fn.load;_.fn.load=function(a,b,c){if("string"!=typeof a&&Ib)return Ib.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=_.trim(a.slice(h)),a=a.slice(0,h)),_.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&_.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?_("<div>").append(_.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},_.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){_.fn[b]=function(a){return this.on(b,a)}}),_.expr.filters.animated=function(a){return _.grep(_.timers,function(b){return a===b.elem}).length};var Jb=a.document.documentElement;_.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=_.css(a,"position"),l=_(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=_.css(a,"top"),i=_.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),_.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},_.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){_.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,_.contains(b,d)?(typeof d.getBoundingClientRect!==za&&(e=d.getBoundingClientRect()),c=P(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===_.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),_.nodeName(a[0],"html")||(d=a.offset()),d.top+=_.css(a[0],"borderTopWidth",!0),d.left+=_.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-_.css(c,"marginTop",!0),left:b.left-d.left-_.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||Jb;a&&!_.nodeName(a,"html")&&"static"===_.css(a,"position");)a=a.offsetParent;return a||Jb})}}),_.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;_.fn[b]=function(e){return qa(this,function(b,e,f){var g=P(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),_.each(["top","left"],function(a,b){_.cssHooks[b]=w(Y.pixelPosition,function(a,c){return c?(c=v(a,b),Qa.test(c)?_(a).position()[b]+"px":c):void 0})}),_.each({Height:"height",Width:"width"},function(a,b){_.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){_.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return qa(this,function(b,c,d){var e;return _.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?_.css(b,c,g):_.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),_.fn.size=function(){return this.length},_.fn.andSelf=_.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return _});var Kb=a.jQuery,Lb=a.$;return _.noConflict=function(b){return a.$===_&&(a.$=Lb),b&&a.jQuery===_&&(a.jQuery=Kb),_},typeof b===za&&(a.jQuery=a.$=_),_}),/*!
 * Lightbox v2.9.0
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright 2007, 2015 Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 */
function(a,b){"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof exports?module.exports=b(require("jquery")):a.lightbox=b(a.jQuery)}(this,function(a){function b(b){this.album=[],this.currentImageIndex=void 0,this.init(),this.options=a.extend({},this.constructor.defaults),this.option(b)}return b.defaults={albumLabel:"Image %1 of %2",alwaysShowNavOnTouchDevices:!1,fadeDuration:600,fitImagesInViewport:!0,imageFadeDuration:600,positionFromTop:50,resizeDuration:700,showImageNumberLabel:!0,wrapAround:!1,disableScrolling:!1,sanitizeTitle:!1},b.prototype.option=function(b){a.extend(this.options,b)},b.prototype.imageCountLabel=function(a,b){return this.options.albumLabel.replace(/%1/g,a).replace(/%2/g,b)},b.prototype.init=function(){var b=this;a(document).ready(function(){b.enable(),b.build()})},b.prototype.enable=function(){var b=this;a("body").on("click","a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]",function(c){return b.start(a(c.currentTarget)),!1})},b.prototype.build=function(){var b=this;a('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(a("body")),this.$lightbox=a("#lightbox"),this.$overlay=a("#lightboxOverlay"),this.$outerContainer=this.$lightbox.find(".lb-outerContainer"),this.$container=this.$lightbox.find(".lb-container"),this.$image=this.$lightbox.find(".lb-image"),this.$nav=this.$lightbox.find(".lb-nav"),this.containerPadding={top:parseInt(this.$container.css("padding-top"),10),right:parseInt(this.$container.css("padding-right"),10),bottom:parseInt(this.$container.css("padding-bottom"),10),left:parseInt(this.$container.css("padding-left"),10)},this.imageBorderWidth={top:parseInt(this.$image.css("border-top-width"),10),right:parseInt(this.$image.css("border-right-width"),10),bottom:parseInt(this.$image.css("border-bottom-width"),10),left:parseInt(this.$image.css("border-left-width"),10)},this.$overlay.hide().on("click",function(){return b.end(),!1}),this.$lightbox.hide().on("click",function(c){return"lightbox"===a(c.target).attr("id")&&b.end(),!1}),this.$outerContainer.on("click",function(c){return"lightbox"===a(c.target).attr("id")&&b.end(),!1}),this.$lightbox.find(".lb-prev").on("click",function(){return 0===b.currentImageIndex?b.changeImage(b.album.length-1):b.changeImage(b.currentImageIndex-1),!1}),this.$lightbox.find(".lb-next").on("click",function(){return b.currentImageIndex===b.album.length-1?b.changeImage(0):b.changeImage(b.currentImageIndex+1),!1}),this.$nav.on("mousedown",function(a){3===a.which&&(b.$nav.css("pointer-events","none"),b.$lightbox.one("contextmenu",function(){setTimeout(function(){this.$nav.css("pointer-events","auto")}.bind(b),0)}))}),this.$lightbox.find(".lb-loader, .lb-close").on("click",function(){return b.end(),!1})},b.prototype.start=function(b){function c(a){d.album.push({link:a.attr("href"),title:a.attr("data-title")||a.attr("title")})}var d=this,e=a(window);e.on("resize",a.proxy(this.sizeOverlay,this)),a("select, object, embed").css({visibility:"hidden"}),this.sizeOverlay(),this.album=[];var f,g=0,h=b.attr("data-lightbox");if(h){f=a(b.prop("tagName")+'[data-lightbox="'+h+'"]');for(var i=0;i<f.length;i=++i)c(a(f[i])),f[i]===b[0]&&(g=i)}else if("lightbox"===b.attr("rel"))c(b);else{f=a(b.prop("tagName")+'[rel="'+b.attr("rel")+'"]');for(var j=0;j<f.length;j=++j)c(a(f[j])),f[j]===b[0]&&(g=j)}var k=e.scrollTop()+this.options.positionFromTop,l=e.scrollLeft();this.$lightbox.css({top:k+"px",left:l+"px"}).fadeIn(this.options.fadeDuration),this.options.disableScrolling&&a("body").addClass("lb-disable-scrolling"),this.changeImage(g)},b.prototype.changeImage=function(b){var c=this;this.disableKeyboardNav();var d=this.$lightbox.find(".lb-image");this.$overlay.fadeIn(this.options.fadeDuration),a(".lb-loader").fadeIn("slow"),this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(),this.$outerContainer.addClass("animating");var e=new Image;e.onload=function(){var f,g,h,i,j,k,l;d.attr("src",c.album[b].link),f=a(e),d.width(e.width),d.height(e.height),c.options.fitImagesInViewport&&(l=a(window).width(),k=a(window).height(),j=l-c.containerPadding.left-c.containerPadding.right-c.imageBorderWidth.left-c.imageBorderWidth.right-20,i=k-c.containerPadding.top-c.containerPadding.bottom-c.imageBorderWidth.top-c.imageBorderWidth.bottom-120,c.options.maxWidth&&c.options.maxWidth<j&&(j=c.options.maxWidth),c.options.maxHeight&&c.options.maxHeight<j&&(i=c.options.maxHeight),(e.width>j||e.height>i)&&(e.width/j>e.height/i?(h=j,g=parseInt(e.height/(e.width/h),10),d.width(h),d.height(g)):(g=i,h=parseInt(e.width/(e.height/g),10),d.width(h),d.height(g)))),c.sizeContainer(d.width(),d.height())},e.src=this.album[b].link,this.currentImageIndex=b},b.prototype.sizeOverlay=function(){this.$overlay.width(a(document).width()).height(a(document).height())},b.prototype.sizeContainer=function(a,b){function c(){d.$lightbox.find(".lb-dataContainer").width(g),d.$lightbox.find(".lb-prevLink").height(h),d.$lightbox.find(".lb-nextLink").height(h),d.showImage()}var d=this,e=this.$outerContainer.outerWidth(),f=this.$outerContainer.outerHeight(),g=a+this.containerPadding.left+this.containerPadding.right+this.imageBorderWidth.left+this.imageBorderWidth.right,h=b+this.containerPadding.top+this.containerPadding.bottom+this.imageBorderWidth.top+this.imageBorderWidth.bottom;e!==g||f!==h?this.$outerContainer.animate({width:g,height:h},this.options.resizeDuration,"swing",function(){c()}):c()},b.prototype.showImage=function(){this.$lightbox.find(".lb-loader").stop(!0).hide(),this.$lightbox.find(".lb-image").fadeIn(this.options.imageFadeDuration),this.updateNav(),this.updateDetails(),this.preloadNeighboringImages(),this.enableKeyboardNav()},b.prototype.updateNav=function(){var a=!1;try{document.createEvent("TouchEvent"),a=this.options.alwaysShowNavOnTouchDevices?!0:!1}catch(b){}this.$lightbox.find(".lb-nav").show(),this.album.length>1&&(this.options.wrapAround?(a&&this.$lightbox.find(".lb-prev, .lb-next").css("opacity","1"),this.$lightbox.find(".lb-prev, .lb-next").show()):(this.currentImageIndex>0&&(this.$lightbox.find(".lb-prev").show(),a&&this.$lightbox.find(".lb-prev").css("opacity","1")),this.currentImageIndex<this.album.length-1&&(this.$lightbox.find(".lb-next").show(),a&&this.$lightbox.find(".lb-next").css("opacity","1"))))},b.prototype.updateDetails=function(){var b=this;if("undefined"!=typeof this.album[this.currentImageIndex].title&&""!==this.album[this.currentImageIndex].title){var c=this.$lightbox.find(".lb-caption");this.options.sanitizeTitle?c.text(this.album[this.currentImageIndex].title):c.html(this.album[this.currentImageIndex].title),c.fadeIn("fast").find("a").on("click",function(b){void 0!==a(this).attr("target")?window.open(a(this).attr("href"),a(this).attr("target")):location.href=a(this).attr("href")})}if(this.album.length>1&&this.options.showImageNumberLabel){var d=this.imageCountLabel(this.currentImageIndex+1,this.album.length);this.$lightbox.find(".lb-number").text(d).fadeIn("fast")}else this.$lightbox.find(".lb-number").hide();this.$outerContainer.removeClass("animating"),this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration,function(){return b.sizeOverlay()})},b.prototype.preloadNeighboringImages=function(){if(this.album.length>this.currentImageIndex+1){var a=new Image;a.src=this.album[this.currentImageIndex+1].link}if(this.currentImageIndex>0){var b=new Image;b.src=this.album[this.currentImageIndex-1].link}},b.prototype.enableKeyboardNav=function(){a(document).on("keyup.keyboard",a.proxy(this.keyboardAction,this))},b.prototype.disableKeyboardNav=function(){a(document).off(".keyboard")},b.prototype.keyboardAction=function(a){var b=27,c=37,d=39,e=a.keyCode,f=String.fromCharCode(e).toLowerCase();e===b||f.match(/x|o|c/)?this.end():"p"===f||e===c?0!==this.currentImageIndex?this.changeImage(this.currentImageIndex-1):this.options.wrapAround&&this.album.length>1&&this.changeImage(this.album.length-1):("n"===f||e===d)&&(this.currentImageIndex!==this.album.length-1?this.changeImage(this.currentImageIndex+1):this.options.wrapAround&&this.album.length>1&&this.changeImage(0))},b.prototype.end=function(){this.disableKeyboardNav(),a(window).off("resize",this.sizeOverlay),this.$lightbox.fadeOut(this.options.fadeDuration),this.$overlay.fadeOut(this.options.fadeDuration),a("select, object, embed").css({visibility:"visible"}),this.options.disableScrolling&&a("body").removeClass("lb-disable-scrolling")},new b});
//# sourceMappingURL=lightbox-plus-jquery.min.map


<!DOCTYPE html>

<html lang="tr-TR" prefix="og: http://ogp.me/ns#">
<head>
<script src='https://www.google.com/recaptcha/api.js'></script>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1.0" />
<title>
Sayfa bulunamadı - Ravaze</title>
<link rel="shortcut icon" href="http://google.com/wp-content/uploads/2015/09/favicon.png"/>
<script>
mixajaxurl = "http://google.com/wp-admin/admin-ajax.php";
</script>
<!-- html5.js for IE less than 9 -->
<!--[if lt IE 9]>-->
<script src="http://google.com/wp-content/themes/TheFox/js/html5.js"></script>
<!--<![endif]-->
<!-- css3-mediaqueries.js for IE less than 9 -->
<!--[if lt IE 9]>-->
<script src="http://google.com/wp-content/themes/TheFox/js/css3-mediaqueries.js"></script>
<!--<![endif]-->

<!-- This site is optimized with the Yoast SEO plugin v4.4 - https://yoast.com/wordpress/plugins/seo/ -->
<title>Sayfa bulunamadı - Ravaze</title>
<meta name="robots" content="noindex,follow"/>
<meta property="og:locale" content="tr_TR" />
<meta property="og:type" content="object" />
<meta property="og:title" content="Sayfa bulunamadı - Ravaze" />
<meta property="og:site_name" content="Ravaze" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Sayfa bulunamadı - Ravaze" />
<meta name="twitter:site" content="@zavaremre" />
<!-- / Yoast SEO plugin. -->

<link rel='dns-prefetch' href='//fonts.googleapis.com' />
<link rel='dns-prefetch' href='//s.w.org' />
<link rel="alternate" type="application/rss+xml" title="Ravaze &raquo; beslemesi" href="http://google.com/feed/" />
<link rel="alternate" type="application/rss+xml" title="Ravaze &raquo; yorum beslemesi" href="http://google.com/comments/feed/" />
		<script type="text/javascript">
			window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/2.2.1\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/2.2.1\/svg\/","svgExt":".svg","source":{"concatemoji":"http:\/\/google.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.7.5"}};
			!function(a,b,c){function d(a){var b,c,d,e,f=String.fromCharCode;if(!k||!k.fillText)return!1;switch(k.clearRect(0,0,j.width,j.height),k.textBaseline="top",k.font="600 32px Arial",a){case"flag":return k.fillText(f(55356,56826,55356,56819),0,0),!(j.toDataURL().length<3e3)&&(k.clearRect(0,0,j.width,j.height),k.fillText(f(55356,57331,65039,8205,55356,57096),0,0),b=j.toDataURL(),k.clearRect(0,0,j.width,j.height),k.fillText(f(55356,57331,55356,57096),0,0),c=j.toDataURL(),b!==c);case"emoji4":return k.fillText(f(55357,56425,55356,57341,8205,55357,56507),0,0),d=j.toDataURL(),k.clearRect(0,0,j.width,j.height),k.fillText(f(55357,56425,55356,57341,55357,56507),0,0),e=j.toDataURL(),d!==e}return!1}function e(a){var c=b.createElement("script");c.src=a,c.defer=c.type="text/javascript",b.getElementsByTagName("head")[0].appendChild(c)}var f,g,h,i,j=b.createElement("canvas"),k=j.getContext&&j.getContext("2d");for(i=Array("flag","emoji4"),c.supports={everything:!0,everythingExceptFlag:!0},h=0;h<i.length;h++)c.supports[i[h]]=d(i[h]),c.supports.everything=c.supports.everything&&c.supports[i[h]],"flag"!==i[h]&&(c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&c.supports[i[h]]);c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&!c.supports.flag,c.DOMReady=!1,c.readyCallback=function(){c.DOMReady=!0},c.supports.everything||(g=function(){c.readyCallback()},b.addEventListener?(b.addEventListener("DOMContentLoaded",g,!1),a.addEventListener("load",g,!1)):(a.attachEvent("onload",g),b.attachEvent("onreadystatechange",function(){"complete"===b.readyState&&c.readyCallback()})),f=c.source||{},f.concatemoji?e(f.concatemoji):f.wpemoji&&f.twemoji&&(e(f.twemoji),e(f.wpemoji)))}(window,document,window._wpemojiSettings);
		</script>
		<style type="text/css">
img.wp-smiley,
img.emoji {
	display: inline !important;
	border: none !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 .07em !important;
	vertical-align: -0.1em !important;
	background: none !important;
	padding: 0 !important;
}
</style>
<link rel='stylesheet' id='crayon-css'  href='http://google.com/wp-content/plugins/crayon-syntax-highlighter1/css/min/crayon.min.css?ver=_2.7.2_beta' type='text/css' media='all' />
<link rel='stylesheet' id='crayon-theme-coy-css'  href='http://google.com/wp-content/plugins/crayon-syntax-highlighter1/themes/coy/coy.css?ver=_2.7.2_beta' type='text/css' media='all' />
<link rel='stylesheet' id='crayon-font-monaco-css'  href='http://google.com/wp-content/plugins/crayon-syntax-highlighter1/fonts/monaco.css?ver=_2.7.2_beta' type='text/css' media='all' />
<link rel='stylesheet' id='contact-form-7-css'  href='http://google.com/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=4.7' type='text/css' media='all' />
<link rel='stylesheet' id='rs-plugin-settings-css'  href='http://google.com/wp-content/plugins/revslider/public/assets/css/settings.css?ver=5.2.6' type='text/css' media='all' />
<style id='rs-plugin-settings-inline-css' type='text/css'>
.tp-caption a{color:#ff7302;text-shadow:none;-webkit-transition:all 0.2s ease-out;-moz-transition:all 0.2s ease-out;-o-transition:all 0.2s ease-out;-ms-transition:all 0.2s ease-out}.tp-caption a:hover{color:#ffa902}
</style>
<link rel='stylesheet' id='wp-polls-css'  href='http://google.com/wp-content/plugins/wp-polls/polls-css.css?ver=2.73.2' type='text/css' media='all' />
<style id='wp-polls-inline-css' type='text/css'>
.wp-polls .pollbar {
	margin: 1px;
	font-size: 6px;
	line-height: 8px;
	height: 8px;
	background-image: url('http://google.com/wp-content/plugins/wp-polls/images/default/pollbg.gif');
	border: 1px solid #c8c8c8;
}

</style>
<link rel='stylesheet' id='style-css'  href='http://google.com/wp-content/themes/TheFox/style.css?ver=4.7.5' type='text/css' media='all' />
<link rel='stylesheet' id='style_end-css'  href='http://google.com/wp-content/themes/TheFox/style_end.css?ver=4.7.5' type='text/css' media='all' />
<link rel='stylesheet' id='googlefonts-css'  href='http://fonts.googleapis.com/css?family=Lato%3A100%2C300%2C400%2C600%2C700%2C900%7COpen+Sans%3A700%2C300%2C600%2C400%7CRaleway%3A900%7CPlayfair+Display%7C%27+rel%3D%27stylesheet%27+type%3D%27text%2Fcss&#038;ver=4.7.5' type='text/css' media='all' />
<link rel='stylesheet' id='rd_woocommerce-css'  href='http://google.com/wp-content/themes/TheFox/css/woocommerce.css?ver=4.7.5' type='text/css' media='all' />
<link rel='stylesheet' id='media-queries-css'  href='http://google.com/wp-content/themes/TheFox/media-queries_wide.css?ver=4.7.5' type='text/css' media='all' />
<link rel='stylesheet' id='rgs-css'  href='http://google.com/wp-content/themes/TheFox/css/rgs.css?ver=4.7.5' type='text/css' media='all' />
<link rel='stylesheet' id='css3_animations-css'  href='http://google.com/wp-content/themes/TheFox/css/animations.css?ver=4.7.5' type='text/css' media='all' />
<link rel='stylesheet' id='flexslidercss-css'  href='http://google.com/wp-content/themes/TheFox/includes/Flexslider/flexslider.css?ver=4.7.5' type='text/css' media='all' />
<link rel='stylesheet' id='font-awesome-thefox-css'  href='http://google.com/wp-content/themes/TheFox/css/font-awesome.css?ver=4.7.5' type='text/css' media='all' />
<link rel='stylesheet' id='moon-css'  href='http://google.com/wp-content/themes/TheFox/css/moon.css?ver=4.7.5' type='text/css' media='all' />
<link rel='stylesheet' id='elegant-css'  href='http://google.com/wp-content/themes/TheFox/css/elegant.css?ver=4.7.5' type='text/css' media='all' />
<link rel='stylesheet' id='prettyphotocss-css'  href='http://google.com/wp-content/themes/TheFox/includes/prettyPhoto/css/prettyPhoto.css?ver=4.7.5' type='text/css' media='all' />
<link rel='stylesheet' id='js_frontend-css'  href='http://google.com/wp-content/themes/TheFox/css/thefox_js_composer.css?ver=4.7.5' type='text/css' media='all' />
<link rel='stylesheet' id='redux-google-fonts-rd_data-css'  href='http://fonts.googleapis.com/css?family=Titillium+Web%7CLato%3A400%2C700%2C300&#038;subset=latin-ext&#038;ver=1494584485' type='text/css' media='all' />
<script type='text/javascript' src='http://google.com/wp-includes/js/jquery/jquery.js?ver=1.12.4'></script>
<script type='text/javascript' src='http://google.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.4.1'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var CrayonSyntaxSettings = {"version":"_2.7.2_beta","is_admin":"0","ajaxurl":"http:\/\/google.com\/wp-admin\/admin-ajax.php","prefix":"crayon-","setting":"crayon-setting","selected":"crayon-setting-selected","changed":"crayon-setting-changed","special":"crayon-setting-special","orig_value":"data-orig-value","debug":""};
var CrayonSyntaxStrings = {"copy":"%s ile Kopyala, %s ile Yap\u0131\u015ft\u0131r","minimize":"Kodu Geni\u015fletmek \u0130\u00e7in T\u0131kla"};
/* ]]> */
</script>
<script type='text/javascript' src='http://google.com/wp-content/plugins/crayon-syntax-highlighter1/js/min/crayon.min.js?ver=_2.7.2_beta'></script>
<script type='text/javascript' src='http://google.com/wp-content/plugins/revslider/public/assets/js/jquery.themepunch.tools.min.js?ver=5.2.6'></script>
<script type='text/javascript' src='http://google.com/wp-content/plugins/revslider/public/assets/js/jquery.themepunch.revolution.min.js?ver=5.2.6'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var wc_add_to_cart_params = {"ajax_url":"\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/themeforest\/\/js\/jquery.dotdotdot.min.js?wc-ajax=%%endpoint%%","i18n_view_cart":"Sepete git","cart_url":"","is_cart":"","cart_redirect_after_add":"no"};
/* ]]> */
</script>
<script type='text/javascript' src='//google.com/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js?ver=2.6.14'></script>
<script type='text/javascript' src='http://google.com/wp-content/plugins/js_composer/assets/js/vendors/woocommerce-add-to-cart.js?ver=4.11.2'></script>
<link rel='https://api.w.org/' href='http://google.com/wp-json/' />
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="http://google.com/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="http://google.com/wp-includes/wlwmanifest.xml" /> 
<meta name="generator" content="WordPress 4.7.5" />
<meta name="generator" content="WooCommerce 2.6.14" />
<!-- Custom Styling -->
<style type="text/css">
                    ul.ulas li strong {
    padding-right: 20px;
    display: block;
    float: left;
    width: 70px;
}

ul.ulas li {
    margin-top: 20px;
}


.rd_widget_recent_entries li, .rd_widget_recent_entries_f li,
#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area .rd_widget_recent_entries li {
    overflow: hidden;
}


.page-id-87 > #rd_48ohxjpxpqzo3j4fz73z .wpcf7 input:not([type=submit]), #rd_48ohxjpxpqzo3j4fz73z .wpcf7 textarea, #rd_48ohxjpxpqzo3j4fz73z .wpcf7 select {
    border: 0;
    background: rgba(255, 255, 255, 0.11);
}

textarea.wpcf7-form-control.wpcf7-textarea.form-control {
    margin-bottom: -7px;
}

ul.wp-polls-ul input {
    width: inherit;
    margin-right: 11px;
}

div#polls-2 p {
    text-align: left!important;
}

ul.wp-polls-ul li {
    margin-bottom: 14px;
}

.wpcf7-form-control.g-recaptcha.wpcf7-recaptcha.guvenlik {
    margin: 20px auto;
    display: table;
}                
#logo_img img{max-width:175px;}.cl_before_logo{margin-right:117.5px;}.cl_after_logo{margin-left:117.5px;}.nav_type_9_c #logo_img, .nav_type_9_c .logo_text{margin-left:-87.5px;}.nav_type_9_c #logo_img,.nav_type_9_c .logo_text{min-width:175px;}#mobile-menu{background:#222533}#mobile-menu ul ul{background:#2e3244;}#mobile-menu ul ul ul{background:#35384d;}#mobile-menu .mobile-ul-open > a{color:#1abc9c}#mobile-menu .mobile-ul-open:after{color:#1abc9c !important;}#mobile-menu .current_page_item{ background:#191b26;}#mobile-menu .current_page_item > a { border-left:2px solid #1abc9c;}#mobile-menu ul li a{color:#ffffff}#mobile-menu .menu-item-has-children:after{color:#5a5d6b;}#mobile-menu ul li li li a{color:#69708f}#mobile-menu ul ul .menu-item-has-children:after{color:#5d637d;}#mobile_menu_search #search input[type=text]{background:#191b26 !important; color:#69708f;}#mobile_menu_search #search input[type=submit]{color:#69708f;}#top_bar,#rd_wpml #lang_sel ul ul{background:#ffffff;}.topbar_type_1,.topbar_type_1 a,.topbar_type_1 #rd_wpml #lang_sel a{color:#a1b1bc;}.topbar_type_1 strong,.topbar_type_1 .topbar_woocommerce_login.type1 .topbar_sign_in,.topbar_type_1 .topbar_woocommerce_login.type1 .topbar_register,.topbar_type_1 .topbar_woocommerce_login.type1 .topbar_signed_in,.topbar_type_1 #rd_wpml #lang_sel li li a:hover{color:#2c3e50;}.topbar_type_1 .top_email:before,.topbar_type_1 .top_phone:before,.topbar_type_1 .top_text:before{color:#1abc9c;}.topbar_type_1 .top_email,.topbar_type_1 .top_phone,.topbar_type_1 #header_socials,.topbar_type_1 .header_current_cart{border-right:1px solid #ebebeb; padding-right:20px; padding-left:20px;}.topbar_type_1 .topbar_woocommerce_login{border-right:1px solid #ebebeb; border-left:1px solid #ebebeb; padding-right:20px; padding-left:20px;}.topbar_type_1 #rd_wpml,.topbar_type_1 .top_bar_menu{border-right:1px solid #ebebeb;}.topbar_type_1 .wrapper > div:first-child {border-left:1px solid #ebebeb;}.topbar_type_1 .topbar_woocommerce_login.type1 .topbar_register{ border:1px solid #ebebeb; border-bottom:2px solid #ebebeb}.topbar_type_1 .topbar_woocommerce_login.type2 .topbar_register{ border:1px solid #a1b1bc; background:#a1b1bc; color:#ffffff;}.topbar_type_1 .topbar_woocommerce_login.type2 .topbar_sign_in,.topbar_type_1 .topbar_woocommerce_login.type2 .topbar_signed_in{ border:1px solid #a1b1bc;}.topbar_type_1 #header_socials a:hover{ color:#2c3e50;}.topbar_type_2,.topbar_type_2 a,.topbar_type_2 #rd_wpml #lang_sel a{color:#a1b1bc;}.topbar_type_2 strong,.topbar_type_2 .topbar_woocommerce_login.type1 .topbar_sign_in,.topbar_type_2 .topbar_woocommerce_login.type1 .topbar_register,.topbar_type_2 .topbar_woocommerce_login.type1 .topbar_signed_in,.topbar_type_2 #rd_wpml #lang_sel li li a:hover{color:#2c3e50;}.topbar_type_2 .top_email:before,.topbar_type_2 .top_phone:before,.topbar_type_2 .top_text:before{color:#1abc9c;}.topbar_type_2 .top_email,.topbar_type_2 .top_phone,.topbar_type_2 #header_socials,.topbar_type_2 .header_current_cart{border-right:1px solid #ebebeb; padding-right:20px; padding-left:20px;}.topbar_type_2 .topbar_woocommerce_login{border-right:1px solid #ebebeb; border-left:1px solid #ebebeb; padding-right:20px; padding-left:20px;}.topbar_type_2 { border-top:5px solid #1abc9c;}.topbar_type_2 #rd_wpml,.topbar_type_2 .top_bar_menu{border-right:1px solid #ebebeb;}.topbar_type_2 .wrapper > div:first-child {border-left:1px solid #ebebeb;}.topbar_type_2 .topbar_woocommerce_login.type1 .topbar_register{ border:1px solid #ebebeb; border-bottom:2px solid #ebebeb}.topbar_type_2 .topbar_woocommerce_login.type2 .topbar_register{ border:1px solid #a1b1bc; background:#a1b1bc; color:#ffffff;}.topbar_type_2 .topbar_woocommerce_login.type2 .topbar_sign_in,.topbar_type_2 .topbar_woocommerce_login.type2 .topbar_signed_in{ border:1px solid #a1b1bc;}.topbar_type_2 #header_socials a:hover{ color:#2c3e50;}.topbar_type_3,.topbar_type_3 a,.topbar_type_3 #rd_wpml #lang_sel a{color:#a1b1bc;}.topbar_type_3 strong,.topbar_type_3 .topbar_woocommerce_login.type1 .topbar_sign_in,.topbar_type_3 .topbar_woocommerce_login.type1 .topbar_register,.topbar_type_3 .topbar_woocommerce_login.type1 .topbar_signed_in,.topbar_type_3 #rd_wpml #lang_sel li li a:hover{color:#2c3e50;}.topbar_type_3 .top_email:before,.topbar_type_3 .top_phone:before,.topbar_type_3 .top_text:before{color:#1abc9c;}.topbar_type_2 { border-top:5px solid #1abc9c;}.topbar_type_3 .topbar_woocommerce_login.type1 .topbar_register{ border:1px solid #ebebeb; border-bottom:2px solid #ebebeb}.topbar_type_3 .topbar_woocommerce_login.type2 .topbar_register{ border:1px solid #a1b1bc; background:#a1b1bc; color:#ffffff;}.topbar_type_3 .topbar_woocommerce_login.type2 .topbar_sign_in,.topbar_type_3 .topbar_woocommerce_login.type2 .topbar_signed_in{ border:1px solid #a1b1bc;}.topbar_type_3 #header_socials a:hover{ color:#2c3e50;}.topbar_type_4,.topbar_type_4 a,.topbar_type_4 #rd_wpml #lang_sel a{color:#a1b1bc;}.topbar_type_4 strong,.topbar_type_4 .topbar_woocommerce_login.type1 .topbar_sign_in,.topbar_type_4 .topbar_woocommerce_login.type1 .topbar_register,.topbar_type_4 .topbar_woocommerce_login.type1 .topbar_signed_in,.topbar_type_4 #rd_wpml #lang_sel li li a:hover{color:#2c3e50;}.topbar_type_4 .top_email:before,.topbar_type_4 .top_phone:before,.topbar_type_4 .top_text:before{color:#1abc9c;}.topbar_type_4 { border-top:5px solid #1abc9c;}.topbar_type_4 .topbar_woocommerce_login.type1 .topbar_register{ border:1px solid #ebebeb; border-bottom:2px solid #ebebeb}.topbar_type_4 .topbar_woocommerce_login.type2 .topbar_register{ border:1px solid #a1b1bc; background:#a1b1bc; color:#ffffff;}.topbar_type_4 .topbar_woocommerce_login.type2 .topbar_sign_in,.topbar_type_4 .topbar_woocommerce_login.type2 .topbar_signed_in{ border:1px solid #a1b1bc;}.topbar_type_4 #header_socials a:hover{ color:#2c3e50;}.topbar_type_5,.topbar_type_5 a,.topbar_type_5 #rd_wpml #lang_sel a{color:#a1b1bc;}.topbar_type_5 strong,.topbar_type_5 .topbar_woocommerce_login.type1 .topbar_sign_in,.topbar_type_5 .topbar_woocommerce_login.type1 .topbar_register,.topbar_type_5 .topbar_woocommerce_login.type1 .topbar_signed_in,.topbar_type_5 #rd_wpml #lang_sel li li a:hover,.topbar_woocommerce_login.type2 .topbar_sign_in:hover,.top_email a:hover{color:#2c3e50;}.topbar_type_5 .top_email:before,.topbar_type_5 .top_phone:before,.topbar_type_5 .top_text:before{color:#1abc9c; }.topbar_type_5 .top_email,.topbar_type_5 .top_phone,.topbar_type_5 #header_socials,.topbar_type_5 .header_current_cart{border-right:1px solid #ebebeb; padding-right:20px; padding-left:20px;}.topbar_type_5 .topbar_woocommerce_login{border-right:1px solid #ebebeb; border-left:1px solid #ebebeb; padding-right:20px; padding-left:20px;}.topbar_type_5 .wrapper > div:first-child {border-left:1px solid #ebebeb;}.topbar_type_5 #rd_wpml,.topbar_type_5 .top_bar_menu{border-right:1px solid #ebebeb;}.topbar_type_5 { border-top:4px solid #1abc9c; border-bottom:1px solid #ebebeb}.topbar_type_5 .topbar_woocommerce_login.type1 .topbar_register{ border:1px solid #ebebeb; border-bottom:2px solid #ebebeb}.topbar_type_5 .topbar_woocommerce_login.type2 .topbar_register{ border:1px solid #a1b1bc; background:#a1b1bc; color:#ffffff;}.topbar_type_5 .topbar_woocommerce_login.type2 .topbar_sign_in,.topbar_type_5 .topbar_woocommerce_login.type2 .topbar_signed_in{ border:1px solid #a1b1bc;}.topbar_type_5 #header_socials a:hover{ color:#2c3e50;}.header_current_cart .cart-content-tb.tbi-with-border{border:1px solid #ebebeb;}.header_current_cart .cart-content-tb.tbi-with-bg{background:#ebebeb;}.header_current_cart .cart-content-tb:before{color:#1abc9c;}.header_current_cart .cart-content-tb:hover{color:#a1b1bc;}.nav_type_1 ul li a,.nav_type_2 ul li a,.nav_type_3 ul li a,.nav_type_4 ul li a,.nav_type_5 ul li a,.nav_type_6 ul li a,.nav_type_7 ul li a,.nav_type_8 ul li a,.nav_type_9 ul li a,.nav_type_9_c ul li a,.nav_type_10 ul li a,.nav_type_11 ul li a,.nav_type_12 ul li a,.nav_type_13 ul li a,.nav_type_14 ul li a,.nav_type_15 ul li a,.nav_type_16 ul li a,.nav_type_17 ul li a,.nav_type_18 ul li a,.nav_type_19 ul li a,.nav_type_19_f ul li a{font-family:Lato !important; font-size:14px !important; font-weight:400 !important; }.transparent_header{background:rgba(255,255,255,0)!important;}.transparent_header{border-bottom:1px solid rgba(255,255,255,0.25)!important;}header,.mt_menu{background:#ffffff;}header.transparent_header.opaque_header{background:#ffffff !important; border-bottom:none!important;}#nav_button:before,#nav_button_alt:before{color:#34495e;}.logo_text a{color:#34495e;}.transparent_header .logo_text a{color:#fff;}.transparent_header.opaque_header .logo_text a{color:#34495e;}.nav_type_1 nav ul,.nav_type_1 .header_current_cart{background:#ffffff;}.nav_type_1 ul li a,.nav_type_1 a#searchtop_img{color:#34495e;}.nav_type_1 nav ul li a:hover,.nav_type_1 > ul > .current-menu-item > a{color:#1abc9c; background:#ffffff;}.nav_type_1 .cart-content:hover,.nav_type_1 #searchtop_img:hover i{color:#1abc9c;}header.nav_type_2{border-top:1px solid #ecf0f1;}.nav_type_2 nav ul,.nav_type_2 .header_current_cart{background:#ffffff;}.nav_type_2 ul li a,.nav_type_2 a#searchtop_img{color:#34495e;}.nav_type_2 nav ul li a:hover,.nav_type_2 > ul > .current-menu-item > a,.transparent_header.nav_type_2 nav > ul > .current-menu-item > a,.transparent_header.nav_type_2 nav > ul > li > a:hover{color:#1abc9c; border-top:3px solid #1abc9c; }.nav_type_2 .cart-content:hover,.nav_type_2 #searchtop_img:hover i{color:#1abc9c;}header.nav_type_3{border-top:1px solid #ecf0f1;}.nav_type_3 nav ul,.nav_type_3 .header_current_cart{background:#ffffff;}.nav_type_3 ul li a,.nav_type_3 a#searchtop_img{color:#34495e;}.nav_type_3 nav ul li a:hover,.nav_type_3 > ul > .current-menu-item > a{color:#1abc9c; background:#ffffff;}.nav_type_3 .cart-content:hover,.nav_type_3 #searchtop_img:hover i{color:#1abc9c;}header.nav_type_4{border-top:1px solid #ecf0f1;}.nav_type_4 nav ul,.nav_type_4 .header_current_cart{background:#ffffff;}.nav_type_4 ul li a,.nav_type_4 a#searchtop_img{color:#34495e;}.nav_type_4 nav ul li a:hover,.nav_type_4  > ul > .current-menu-item > a{color:#1abc9c; background:#ffffff;}.nav_type_4 .cart-content:hover,.nav_type_4 #searchtop_img:hover i{color:#1abc9c;}.nav_type_5 nav ul,.nav_type_5 .header_current_cart{background:#ffffff;}.nav_type_5 ul li a{color:#34495e; border-top:5px solid #ffffff;}.nav_type_5 a#searchtop_img{color:#34495e;}.nav_type_5 nav ul li a:hover,.nav_type_5 > ul > .current-menu-item > a,.transparent_header.nav_type_5 nav > ul > .current-menu-item > a,.transparent_header.nav_type_5 nav > ul > li > a:hover{color:#1abc9c; border-top:5px solid #1abc9c !important; }.nav_type_5 .cart-content:hover,.nav_type_5 #searchtop_img:hover i{color:#1abc9c;}.nav_type_6 nav ul,.nav_type_6 .header_current_cart{background:#ffffff;}.nav_type_6 ul li a{color:#34495e; border-top:5px solid #ffffff;}.nav_type_6 a#searchtop_img{color:#34495e;}.nav_type_6 nav ul li a:hover,.nav_type_6 > ul > .current-menu-item > a,.transparent_header.nav_type_6 nav > ul > .current-menu-item > a,.transparent_header.nav_type_6 nav > ul > li > a:hover{color:#1abc9c; border-top:5px solid #1abc9c !important;}.nav_type_6 .cart-content:hover,.nav_type_6 #searchtop_img:hover i{color:#1abc9c;}.nav_type_7 nav ul,.nav_type_7 .header_current_cart{background:#ffffff;}.nav_type_7 ul li a,.nav_type_7 a#searchtop_img{color:#34495e;}.nav_type_7 nav ul li a:hover,.nav_type_7 > ul > .current-menu-item > a{color:#1abc9c; background:#ffffff;}.nav_type_7 .cart-content:hover,.nav_type_7 #searchtop_img:hover i{color:#1abc9c;}header.nav_type_8{border-top:1px solid #ecf0f1;}.nav_type_8 nav ul,.nav_type_8 .header_current_cart{background:#ffffff;}.nav_type_8 ul li a,.nav_type_8 a#searchtop_img{color:#34495e;}.nav_type_8 nav ul li a:hover,.nav_type_8 > ul > .current-menu-item > a{color:#1abc9c; background:#ffffff;}.nav_type_8 .cart-content:hover,.nav_type_8 #searchtop_img:hover i{color:#1abc9c;}.nav_type_9 nav ul,.nav_type_9 .header_current_cart{background:#ffffff;}.nav_type_9 ul li a{color:#34495e; border-top:5px solid rgba(0,0,0,0);}.nav_type_9 a#searchtop_img{color:#34495e;}.nav_type_9 nav ul li a:hover,.nav_type_9 > ul > .current-menu-item > a,.transparent_header.nav_type_9 nav > ul > .current-menu-item > a,.transparent_header.nav_type_9 nav > ul > li > a:hover{color:#1abc9c; border-top:5px solid #1abc9c !important;}.nav_type_9 .cart-content:hover,.nav_type_9 #searchtop_img:hover i{color:#1abc9c;}.nav_type_9_c nav ul,.nav_type_9_c .header_current_cart{background:#ffffff;}.nav_type_9_c ul li a{color:#34495e; border-top:5px solid rgba(0,0,0,0);}.nav_type_9_c a#searchtop_img{color:#34495e;}.nav_type_9_c nav ul li a:hover,.nav_type_9_c > ul > .current-menu-item > a,.transparent_header.nav_type_9_c nav > ul > .current-menu-item > a,.transparent_header.nav_type_9_c nav > ul > li > a:hover{color:#1abc9c; border-top:5px solid #1abc9c !important;}.nav_type_9_c .header_current_cart,.nav_type_9_c #searchtop{display:none !important;}.nav_type_10 nav ul,.nav_type_10 .header_current_cart{background:#ffffff;}.nav_type_10 ul li a{color:#34495e; border-top:5px solid rgba(0,0,0,0);}.nav_type_10 a#searchtop_img{color:#34495e;}.nav_type_10 nav ul li a:hover,.nav_type_10 > ul > .current-menu-item > a,.transparent_header.nav_type_15 nav > ul > .current-menu-item > a,.transparent_header.nav_type_15 nav > ul > li > a:hover{color:#1abc9c; border-top:5px solid #1abc9c !important;}.nav_type_10 .cart-content:hover,.nav_type_10 #searchtop_img:hover i{color:#1abc9c;}.nav_type_11 nav ul,.nav_type_11 .header_current_cart{background:#ffffff;}.nav_type_11 ul li a{color:#34495e; border:1px solid rgba(0,0,0,0);}.nav_type_11 a#searchtop_img{color:#34495e;}.nav_type_11 nav ul li a:hover,.nav_type_11 > ul > .current-menu-item > a,.transparent_header.nav_type_11 nav > ul > .current-menu-item > a,.transparent_header.nav_type_11 nav > ul > li > a:hover{color:#1abc9c; border:1px solid #1abc9c !important; background:#ffffff;}.nav_type_11 .cart-content:hover,.nav_type_11 #searchtop_img:hover i{color:#1abc9c;}.nav_type_12 nav ul,.nav_type_12 .header_current_cart{background:#ffffff;}.nav_type_12 ul li a{color:#34495e; border:2px solid rgba(0,0,0,0);}.nav_type_12 a#searchtop_img{color:#34495e;}.nav_type_12 nav ul li a:hover,.nav_type_12 > ul > .current-menu-item > a,.transparent_header.nav_type_12 nav > ul > .current-menu-item > a,.transparent_header.nav_type_12 nav > ul > li > a:hover{color:#1abc9c; border:2px solid #1abc9c !important; background:#ffffff;}.nav_type_12 .cart-content:hover,.nav_type_12 #searchtop_img:hover i{color:#1abc9c;}header.nav_type_13{border-top:2px solid #ecf0f1;}.nav_type_13 nav ul,.nav_type_13 .header_current_cart{background:#ffffff;}.nav_type_13 ul li a,.nav_type_13 a#searchtop_img{color:#34495e;}.nav_type_13 nav ul li a:hover,.nav_type_13 > ul > .current-menu-item > a{color:#1abc9c; background:#ffffff;}.nav_type_13 .cart-content:hover,.nav_type_13 #searchtop_img:hover i{color:#1abc9c;}header.nav_type_14{border-top:5px solid #ecf0f1;}.nav_type_14 nav ul,.nav_type_1 .header_current_cart{background:#ffffff;}.nav_type_14 ul li a,.nav_type_14 a#searchtop_img{color:#34495e;}.nav_type_14 nav ul li a:hover,.nav_type_14 > ul > .current-menu-item > a{color:#1abc9c; background:#ffffff;}.nav_type_14 .cart-content:hover,.nav_type_14 #searchtop_img:hover i{color:#1abc9c;}.header_bottom_nav.transparent_header.opaque_header{background:#ffffff !important;}header.nav_type_15,.header_bottom_nav.nav_type_15{border-top:1px solid #ecf0f1;}.header_bottom_nav.nav_type_15{background:#ffffff;}.nav_type_15 ul li a{color:#34495e; border-right:1px solid #ecf0f1}.nav_type_15 ul li:first-child a{border-left:1px solid #ecf0f1} .nav_type_15 nav ul li a:hover,.nav_type_15 > ul > .current-menu-item > a{color:#1abc9c; background:#ffffff;}header #header_socials a,.nav_type_15 a#searchtop_img{color:#34495e;}header #header_socials a:hover{color:#1abc9c;}.header_bottom_nav.nav_type_15 .cart-content:hover,.header_bottom_nav.nav_type_15 #searchtop_img:hover i{color:#1abc9c;}.header_bottom_nav.nav_type_16{border-top:1px solid #ecf0f1;}.header_bottom_nav.nav_type_16{background:#ffffff;}.nav_type_16 ul li a,.nav_type_16 a#searchtop_img{color:#34495e;}.nav_type_16 nav ul li a:hover,.nav_type_16 > ul > .current-menu-item > a{color:#1abc9c; background:#ffffff;}.header_bottom_nav.nav_type_16 .cart-content:hover,.header_bottom_nav.nav_type_16 #searchtop_img:hover i{color:#1abc9c;}.header_bottom_nav.nav_type_17{border-top:1px solid #ecf0f1;}.header_bottom_nav.nav_type_17{background:#ffffff;}.nav_type_17 ul li a,.nav_type_17 a#searchtop_img{color:#34495e;}.nav_type_17 nav ul li a:hover,.nav_type_17 > ul > .current-menu-item > a,.transparent_header.nav_type_17 nav > ul > .current-menu-item > a,.transparent_header.nav_type_17 nav > ul > li > a:hover{color:#1abc9c; border-top:3px solid #1abc9c !important;}.header_bottom_nav.nav_type_17 .cart-content:hover,.header_bottom_nav.nav_type_17 #searchtop_img:hover i{color:#1abc9c;}.header_bottom_nav.nav_type_18{border-top:1px solid #ecf0f1;}.header_bottom_nav.nav_type_18{background:#ffffff;}.nav_type_18 ul li a,.nav_type_18 a#searchtop_img{color:#34495e;}.nav_type_18 nav ul li a:hover,.nav_type_18 > ul >.current-menu-item > a{color:#1abc9c; background#ffffff;}.header_bottom_nav.nav_type_18 .cart-content:hover,.header_bottom_nav.nav_type_18 #searchtop_img:hover i{color:#1abc9c;}.nav_type_19 ul li a,.nav_type_19_f ul li a{color:#34495e;}.nav_type_19 ul > li > a,.nav_type_19_f ul > li > a{border-bottom:1px solid #ecf0f1;}.nav_type_19 ul ul li a,.nav_type_19_f ul ul li a{border-right:1px solid #ecf0f1;}#edge-search-form .search_button_icon{color:#34495e;}.nav_type_19 ul li a:hover,.nav_type_19 > ul > .current-menu-item > a,.nav_type_19_f ul li a:hover,.nav_type_19_f > ul > .current-menu-item > a{color:#1abc9c;}.nav_type_19 .cart-content:hover,.nav_type_19 #searchtop_img:hover i,.nav_type_19_f .cart-content:hover,.nav_type_19_f #searchtop_img:hover i{color:#1abc9c;}#fixed_header_socials a{color:#34495e;}#fixed_header_socials a{border:1px solid #ecf0f1;}.fixed_header_left{border-right:1px solid #ecf0f1;}#edge-search-form input[type=text]{border:1px solid #ecf0f1; background:#ffffff;}ul.header_current_cart li .cart-content{color:#34495e; font-weight: normal;}.transparent_header.opaque_header nav > ul > li > a, .transparent_header.opaque_header .cart-content{color:#34495e !important;}.transparent_header.opaque_header nav > ul > li > a:hover,.transparent_header nav > ul > .current-menu-item > a,.transparent_header nav > ul > li > a:hover{color:#1abc9c !important;}#header_container nav .rd_megamenu ul ul li a, .rd_megamenu ul ul li a,#header_container nav ul ul li a{font-family:Lato !important; font-size:13px !important; font-weight:400 !important; line-height:14px !important; }ul.header_cart_dropdown,.header_cart_dropdown .button,#search-form,#search-form.pop_search_form #ssform,.child_pages_ctn li,#header_container nav ul li ul,#header_container nav ul li ul a{background:#ffffff;}#header_container nav .rd_megamenu ul li a, .rd_megamenu ul li a,.header_cart_dropdown ul.cart_list li a,.header_cart_dropdown .widget_shopping_cart_content .rd_cart_buttons a{color:#2c3e50;}.header_cart_dropdown, #header_container nav .rd_megamenu ul ul li a, .rd_megamenu ul ul li a,#header_container nav ul ul li a,.header_cart_dropdown .rd_clear_btn,.header_cart_dropdown .total,#search-form.pop_search_form #ssform,.child_pages_ctn a{color:#a1b1bc;}.header_cart_dropdown .quantity,.header_cart_dropdown .product_list_widget span.amount,.header_cart_dropdown .total .amount,.search_button_icon{color:#1abc9c;}.header_cart_dropdown ul.cart_list li a.remove:hover,.child_pages_ctn a:hover{background:#29d9c2; color:#ffffff;}.header_cart_dropdown ul.cart_list li a:hover{color:#29d9c2;}.header_cart_dropdown .rd_clear_btn:hover{color:#222533;}ul.header_cart_dropdown,#search-form.pop_search_form #ssform{border:1px solid #ecf0f1;}#header_container nav ul ul .current-menu-item li a, #header_container nav ul ul li a{border-left:1px solid #ecf0f1;}#header_container .fixed_header_left nav ul ul ul li a{border-left:1px solid #ecf0f1 !important;}#header_container .fixed_header_left nav ul ul .current-menu-item li a, #header_container .fixed_header_left nav ul ul li a{border-right:1px solid #ecf0f1 !important;}#header_container .fixed_header_left nav ul ul, #header_container .fixed_header_left nav ul ul{border-top:1px solid #ecf0f1 !important;}#header_container nav ul ul li,ul.header_cart_dropdown ul.product_list_widget li.child_pages_ctn a{border-bottom:1px solid #ecf0f1;}#header_container .rd_megamenu ul li ul,.header_cart_dropdown .clear_total{border-top:1px solid #ecf0f1;}#header_container nav ul ul,.widget_shopping_cart_content,#search-form{border-top:3px solid #1abc9c;}.current_item_number{background:#1abc9c;}.rd_cart_buttons{background:#222533;}.header_cart_dropdown .button{background:#ffffff; border:2px solid #ffffff  !important;}.header_cart_dropdown .widget_shopping_cart_content .rd_cart_buttons .button:hover{background:#222533; border:2px solid #ffffff !important; color:#ffffff;}.current_item_number:before{border-color: transparent #1abc9c transparent;}.header_cart_dropdown ul.cart_list li a.remove{background:#a1b1bc;}#header_container nav ul ul li a:hover,#header_container nav ul ul li.current-menu-item a{background:#ecf0f1; color:#2c3e50;}#header_container nav ul ul .mm_widget_area{border:none!important; border-left:1px solid #ecf0f1 !important;}#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area .product_list_widget a{color:#2c3e50;}#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area .product_list_widget a:hover{color:#29d9c2;}#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area .sb_widget h3{color:#2c3e50}#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area #lang_sel a{color:#a1b1bc; background:#ffffff; border:1px solid #ecf0f1}#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area #lang_sel a:hover{color:#2c3e50;}#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area .widget_recent_entries ul li{border-bottom:1px solid #ecf0f1}#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area .widget_recent_entries ul li a{color:#a1b1bc}#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area .widget_recent_entries ul li a:hover{color:#1abc9c}#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area #recentcomments li{border-bottom:1px solid #ecf0f1}#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area #recentcomments li a{color:#2c3e50;}#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area #recentcomments li a:hover{color:#29d9c2;}#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area .rd_widget_recent_entries li{border-bottom:1px solid #ecf0f1}#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area .w_comment a{color:#a1b1bc;}#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area .w_comment a:hover{color:#1abc9c;}#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area .widget_recent_entry h4 a{color:#2c3e50;}#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area .widget_recent_entry h4 a:hover{color:#1abc9c;}#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area .widget_archive ul li,#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area .widget_meta ul li{border-bottom:1px solid #ecf0f1}#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area .widget_archive ul li a,#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area .widget_meta ul li a{color:#a1b1bc;}#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area .widget_archive ul li a:hover,#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area .widget_meta ul li a:hover{color:#1abc9c;}#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area .page_item a, #header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area .menu-item a{border-bottom:1px solid #ecf0f1; color:#a1b1bc;}#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area .page_item a:hover, #header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area .menu-item a:hover,#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area .current_page_item a,#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area .current_page_item a{color:#1abc9c; }#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area .page_item a:before, #header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area .menu-item a:before { color:#222533;}#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area #wp-calendar caption{background:#2c3e50; color:#ffffff}#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area #wp-calendar{border:1px solid #ecf0f1}#wp-calendar th{color:#222533;}#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area #wp-calendar tbody td a{color:#fff; background:#222533;}#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area #wp-calendar tbody td a:hover{color:#fff; background:#1abc9c;}#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area #wp-calendar td#next a:hover:after,#header_container nav .rd_megamenu .mm_widget_area .rd_megamenu_widget_area #wp-calendar td#prev a:hover:after{background:#1abc9c;}body{font-family:Titillium Web; font-size:14px; font-weight:; line-height:14px; }h1{font-family:Lato; font-size:34px; font-weight:700; line-height:42px; }h2{font-family:Lato; font-size:24px; font-weight:700; line-height:36px; }h3{font-family:Lato; font-size:20px; font-weight:700; line-height:24px; }h4{font-family:Lato; font-size:18px; font-weight:700; line-height:24px; }h5{font-family:Lato; font-size:16px; font-weight:400; line-height:24px; }h6{font-family:Lato; font-size:14px; font-weight:300; line-height:24px; }body,#jprePercentage{color:#a1b1bc}body a,.hl_color,#sidebar #search input[type=submit]:hover,.wpb_widgetised_column #search input[type=submit]:hover,.strong_colored strong{color:#1abc9c}body a:hover{color:#29d9c2}h1,h2,h3,h4,h5,h6{color:#2c3e50}.partners_left, .partners_right{background:#2c3e50}.def_section,blockquote{background:#ffffff}#to_top:hover,.b-read-now:hover{background:#21c2f8}::-webkit-input-placeholder{color:#a1b1bc}:-moz-placeholder{color:#a1b1bc}::-moz-placeholder{color:#a1b1bc}:-ms-input-placeholder{color:#a1b1bc}#sidebar #search input[type=submit],.wpb_widgetised_column #search input[type=submit]{color:#a1b1bc}input[type=text], input[type=email], input[type=password], textarea,#coupon_code{color:#a1b1bc; border:1px solid #eceef0; background:#ffffff;}input[type="checkbox"]{color:#ffffff; border:1px solid #eceef0; background:#ffffff;}input[type=checkbox]:checked{color:#ffffff; border:1px solid #46d1ff; background:#46d1ff;}.flex-direction-nav li a{color:#2c3e50; background:#ffffff;}.wpb_text_column ol li:before{background:#a1b1bc}.wpb_text_column ol li:hover:before{background:#1abc9c}blockquote{ border:1px solid #ecf0f1; }blockquote:before,.post-password-form input[type=submit]{ background:#21c2f8; }.code_box_ctn{ background:#f9fafb; }.wp-caption{ background:#f9fafb; border:1px solid #ecf0f1; }.tp-caption a {color: #fff;}.tp-caption a:hover { color: #fff;}.tp-bannertimer{background: #29d9c2; background: -moz-linear-gradient(left,  #29d9c2 0%, #46d1ff 100%); background: -webkit-gradient(linear, left top, right top, color-stop(0%,#29d9c2), color-stop(100%,#46d1ff)); background: -webkit-linear-gradient(left,  #29d9c2 0%,#46d1ff 100%); background: -o-linear-gradient(left,  #29d9c2 0%,#46d1ff 100%); background: -ms-linear-gradient(left,  #29d9c2 0%,#46d1ff 100%); background: linear-gradient(to right,  #29d9c2 0%,#46d1ff 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#29d9c2", endColorstr="#46d1ff",GradientType=1 );} .page_title_ctn{border-bottom:1px solid #ecf0f1;  }.page_title_ctn h1{color:#2c3e50; }#crumbs a,#crumbs span{color:#a1b1bc; }.rd_child_pages{color:#a1b1bc; border:1px solid #a1b1bc; background:#ffffff;}.search_results strong{color:#1abc9c; }.search_sf .rd_search_sc #search input[type=submit]{background:#2c3e50 !important;}.search_sf .rd_search_sc #search input[type=submit]:hover{background:#29d9c2 !important;}.post_single .post-title h2 a,.blog_related_post .post-title h2 a,.logged-in-as a{color:#2c3e50}.post_single .post-title h2 a:hover,.blog_related_post .post-title h2 a:hover{color:#29d9c2}.mejs-container .mejs-controls,.audio_ctn{background:#a1b1bc !important;}.mejs-controls .mejs-time-rail .mejs-time-current{background:#2c3e50 !important; }.mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current{background:#29d9c2 !important; }.post_quote_text,.post_quote_author,.post_single_business .post_quote_text:after{background:#21c2f8; color:#ffffff!important;}.post-info a{color:#a1b1bc}.post_single .post-info a:hover{color:#29d9c2}.single_post_navigation,.post-info{border-bottom:1px solid #ecf0f1}.single_post_navigation_bottom{border-top:1px solid #ecf0f1}.tags_icon{background:#2c3e50; color:#ffffff;}.single_post_tags{border:1px solid #eceef0; background:#ffffff;}.shareicons_icon{background:#21c2f8; color:#ffffff;}.single_post_share_icon{border:1px solid #eceef0; background:#ffffff;}.single_post_share_icon .share-box li a{color:#a1b1bc;}.single_post_share_icon .share-box li a:hover{color:#21c2f8 !important;}#author-bio{border:1px solid #eceef0; background:#f9fafb; color:#a1b1bc; box-shadow:0 0px 0px #ffffff, 0 4px 0 -1px #ffffff, 0 0px 0px 0px #ffffff,0 0px 0px #ffffff, 0 4px 0 0px #ecf0f1, 0px 0px 0px 0px #ffffff;}#author-info h3{color:#2c3e50;}.author_posts_link{color:#a1b1bc;}.author_posts_link:hover{color:#21c2f8;}.comment_ctn{border:1px solid #eceef0; background:#ffffff; color:#a1b1bc; box-shadow:0 0px 0px #ffffff, 0 4px 0 -1px #ffffff, 0 0px 0px 0px #ffffff,0 0px 0px #ffffff, 0 4px 0 0px #ecf0f1, 0px 0px 0px 0px #ffffff;}#business_comments #comments ul li .details span.Reply a{border:1px solid #eceef0; background:#ffffff; color:#a1b1bc;}.comment_count h3 a{color:#2c3e50}#comments ul li .details span.author a,#comments ul li .details span.author{color:#2c3e50}#comments ul li .details span.date a{color:#a1b1bc}#comments ul li .details span.Reply a{background:#a1b1bc; color:#ffffff}#comments ul li .details span.Reply a:hover{background:#222533; color:#ffffff}#business_comments #comments ul li .comment_ctn{border-bottom:1px solid #ecf0f1;}#comments > ul > li ul{border-left:1px solid #ecf0f1}#comments ul li li .comment_ctn:before{background:#ecf0f1;}input.single_post_author,input.single_post_email,input.single_post_url,.single_post_comment{background:#f9fafb}input.single_post_author:focus,input.single_post_email:focus,input.single_post_url:focus,.single_post_comment:focus{background:#ffffff}#add-comment input#submit{background:#2c3e50; color:#ffffff}#add-comment input#submit:hover{background:#29d9c2; color:#ffffff}#business_comments #add-comment input#submit,#respond input#submit{background:#1abc9c; color:#ffffff}#business_comments #add-comment input#submit:hover,,#respond input#submit:hover{background:#29d9c2; color:#ffffff}#business_comments #comments ul li .details span.Reply a:hover{background:#1abc9c !important; color:#ffffff; border-color:#1abc9c;}.blog_related_post .more-link{border:1px solid #2c3e50; color:#2c3e50; background:#ffffff;}.blog_related_post .more-link:hover{color:#ffffff; background:#2c3e50;}.cbp_type03 .rp_left,.cbp_type03 .rp_right{background:#2c3e50}.cbp_type03 .rp_left:hover,.cbp_type03 .rp_right:hover{background:#29d9c2}.cbp_type03 .blog_related_post .more-link:hover{background:#29d9c2; border-color:#29d9c2;}.cbp_type05 .rp_left,.cbp_type05 .rp_right,.cbp_type08 .rp_left,.cbp_type08 .rp_right{background:#1abc9c}.cbp_type05 .rp_left:hover,.cbp_type05 .rp_right:hover,.cbp_type08 .rp_left:hover,.cbp_type08 .rp_right:hover{background:#222533}.cbp_type05 .carousel_recent_post .blog_box_content,.cbp_type08 .carousel_recent_post .blog_box_content{color:#a1b1bc}.cbp_type05 .carousel_recent_post h5.widget_post_title a,.cbp_type08 .carousel_recent_post h5.widget_post_title a{color:#2c3e50}.cbp_type05 .carousel_recent_post:hover .blog_box_content,.cbp_type05 .blog_post_link_ctn,.cbp_type08 .carousel_recent_post:hover .blog_box_content,.cbp_type08 .blog_post_link_ctn{background:#2c3e50; color:#a1b1bc;}.cbp_type05 .carousel_recent_post:hover h5.widget_post_title a,.cbp_type08 .carousel_recent_post:hover h5.widget_post_title a{color:#ffffff}.cbp_type06 .rp_left,.cbp_type06 .rp_right{background:#a1b1bc}.cbp_type06 .rp_left:hover,.cbp_type06 .rp_right:hover{background:#2c3e50}.cbp_type06 .carousel_recent_post .blog_box_content{color:#a1b1bc}.cbp_type06 .carousel_recent_post h5.widget_post_title a{color:#2c3e50}.cbp_type06 a.more-link{background:#a1b1bc; color:#fff;}.cbp_type06 a.more-link:after{background:#2c3e50; color:#fff;}.cbp_type06 a.more-link:hover{background:#1abc9c; color:#fff;}.cbp_type06 a.more-link:hover:after{
background: rgba(0, 0, 0, 0.21); color:#fff;}.sp_left:hover,.sp_right:hover{background:#1abc9c; border-color:#1abc9c;}.sb_widget h3{color:#2c3e50}.sb_widget > h3:before{border-top:7px solid #1abc9c; border-bottom:7px solid #46d1ff;}#sidebar #lang_sel a,.wpb_widgetised_column #lang_sel a{color:#a1b1bc; background:#ffffff; border:1px solid #ecf0f1}#sidebar #lang_sel a:hover,.wpb_widgetised_column #lang_sel a:hover{color:#2c3e50;}#sidebar .widget_recent_entries ul li,.wpb_widgetised_column .widget_recent_entries ul li{border-bottom:1px solid #ecf0f1}#sidebar .widget_recent_entries ul li a,.wpb_widgetised_column .widget_recent_entries ul li a{color:#a1b1bc}#sidebar .widget_recent_entries ul li a:hover,.wpb_widgetised_column .widget_recent_entries ul li a:hover{color:#1abc9c}#sidebar #recentcomments li,.wpb_widgetised_column #recentcomments li{border-bottom:1px solid #ecf0f1}#sidebar #recentcomments li a,.wpb_widgetised_column #recentcomments li a,#sidebar .tweets li a,.wpb_widgetised_column .tweets li a{color:#2c3e50;}#sidebar #recentcomments li a:hover,.wpb_widgetised_column  #recentcomments li a:hover{color:#29d9c2;}#sidebar .rd_widget_recent_entries li,.wpb_widgetised_column .rd_widget_recent_entries li,#sidebar  .tweets li,.wpb_widgetised_column .tweets li{border-bottom:1px solid #ecf0f1}#sidebar .tagcloud a ,.wpb_widgetised_column .tagcloud a {border:1px solid #ecf0f1; color:#a1b1bc}#sidebar .tagcloud a:hover,.wpb_widgetised_column .tagcloud a:hover{background:#21c2f8; border-color:#21c2f8; color:#ffffff;}#sidebar .w_comment a,.wpb_widgetised_column .w_comment a{color:#a1b1bc;}#sidebar .w_comment a:hover,.wpb_widgetised_column .w_comment a:hover{color:#1abc9c;}#sidebar .widget_recent_entry h4 a,.wpb_widgetised_column .widget_recent_entry h4 a{color:#2c3e50;}#sidebar .widget_recent_entry h4 a:hover,.wpb_widgetised_column .widget_recent_entry h4 a:hover{color:#1abc9c;}#sidebar .widget_archive ul li,#sidebar .widget_meta ul li,.wpb_widgetised_column .widget_archive ul li,.wpb_widgetised_column .widget_meta ul li{border-bottom:1px solid #ecf0f1}#sidebar .widget_archive ul li a,#sidebar .widget_meta ul li a,.wpb_widgetised_column  .widget_archive ul li a,.wpb_widgetised_column .widget_meta ul li a{color:#a1b1bc;}#sidebar .widget_archive ul li a:hover,#sidebar .widget_meta ul li a:hover,.wpb_widgetised_column .widget_archive ul li a:hover,.wpb_widgetised_column .widget_meta ul li a:hover{color:#1abc9c;}#sidebar .page_item a, #sidebar .menu-item a,.wpb_widgetised_column .page_item a,.wpb_widgetised_column .menu-item a{border-bottom:1px solid #ecf0f1; color:#a1b1bc;}#sidebar .page_item a:hover, #sidebar .menu-item a:hover,#sidebar .current_page_item a,#sidebar .current_page_item a,.wpb_widgetised_column .page_item a:hover,.wpb_widgetised_column .menu-item a:hover,.wpb_widgetised_column .current_page_item a{color:#1abc9c; }#sidebar .page_item a:before, #sidebar .menu-item a:before,.wpb_widgetised_column .page_item a:before,.wpb_widgetised_column .menu-item a:before{ color:#21c2f8;}#wp-calendar caption{background:#2c3e50; color:#ffffff}#wp-calendar{border:1px solid #ecf0f1}#wp-calendar th{color:#21c2f8;}#wp-calendar tbody td a{color:#fff; background:#21c2f8;}#wp-calendar tbody td a:hover{color:#fff; background:#1abc9c;}#wp-calendar td#next a:hover:after,#wp-calendar td#prev a:hover:after{background:#1abc9c;}.rd_widget_recent_entries .thumbnail a:before,.port_tn a:before,.rd_widget_recent_entries_f .thumbnail a:before{background:#21c2f8;}.single_port_navigation,.port_details_full_information .item_details_info{border-bottom:1px solid #ecf0f1;}.all_projects_btn{color:#a1b1bc;}.next_project{border:1px solid #ecf0f1; background:#ecf0f1; color:#2c3e50;}.next_project:hover{border:1px solid #222533; background:#222533; color:#fff;}.previous_project{border:1px solid #a1b1bc; background:#ffffff; color:#a1b1bc;}.previous_project:hover{border:1px solid #29d9c2; background:#29d9c2; color:#fff;}.port_details_subtitle{color:#1abc9c;}.port_meta{border-bottom:1px solid #ecf0f1;}.next_project{border-bottom:1px solid #ecf0f1;}.port_vp a{background:#2c3e50;}.port_vp a:hover{background:#29d9c2; color:#fff;}.single_staff_meta{border-top:1px solid #ecf0f1;}#member_email a:hover, .sc-share-box #member_email a, .single_staff_social #member_email a,.share_icons_business .share-box #member_email a{background:#1abc9c;}.product_filtering {border-bottom:1px solid #ecf0f1}.filter_param,.filter_param li ul{background:#ffffff; border:1px solid #eceef0; color:#a1b1bc;}.filter_param strong{color:#2c3e50;}.current_li:after{border-left:1px solid #eceef0;}.filter_param.filter_param_sort{background:#a1b1bc; border:1px solid #a1b1bc;}.filter_param.filter_param_sort a{color:#ffffff}.filter_param.filter_param_order a,.filter_param.filter_param_count a{color:#a1b1bc}.filter_param.filter_param_order a:hover,.filter_param.filter_param_count a:hover{color:#222533}.shop_two_col,.shop_three_col,.shop_four_col,.caroufredsel_wrapper .inner_product,.woocommerce .products li{color:#a1b1bc; background:#ffffff; border:1px solid #eceef0;}.custom_cart_button a{color:#a1b1bc;}.custom_cart_button a:hover{color:#222533;}.product_box {border-top:1px solid #eceef0; border-bottom:1px solid #eceef0;}.product_box h3{color:#2c3e50;}.product_box h3:hover{color:#21c2f8;}.product_box .price{color:#a1b1bc;}.product_box .price del{color:#a1b1bc !important;}.product_box .price ins{color:#21c2f8;}.adding_to_cart_working .icon_status_inner:before{color:#1abc9c;}.adding_to_cart_completed .icon_status_inner:before{color:#29d9c2;}.single_product_main_image div,.single_products_thumbnails img,.single_product_navigation .previous_product,.single_product_navigation .next_product {border:1px solid #ecf0f1 }.single_product_navigation .previous_product:hover,.single_product_navigation .next_product:hover{border:1px solid #222533; background:#222533; color:#ffffff }.single_products_thumbnails img.selected{border:1px solid #1abc9c }.product_nav_left:hover,.product_nav_right:hover{background:#1abc9c }.product_title.entry-title,.woocommerce-tabs ul li a,.related h2,.single_product_navigation .previous_product,.single_product_navigation .next_product,.woocommerce-page #reviews #comments ol.commentlist li .comment-text p.meta strong, .woocommerce-page #reviews #comments h2,.show_review_form.button {color:#2c3e50 }.summary.entry-summary .price,.summary.entry-summary .price del,.show_review_form.button,.woocommerce-page #reviews #comments ol.commentlist li .comment-text p.meta{color:#a1b1bc }.summary.entry-summary .price ins,.woocommerce-product-rating .woocommerce-review-link,.custom_cart_button .button.add_to_cart_button.product_type_simple.added{color:#1abc9c }.woocommerce-product-rating .woocommerce-review-link:hover{color:#29d9c2 }button.single_add_to_cart_button.button.alt{color:#2c3e50; background:#ffffff; border:2px solid #2c3e50; }button.single_add_to_cart_button.button.alt:hover{color:#ffffff; background:#29d9c2; border:2px solid #29d9c2; }.single_product_navigation{border-top:1px solid #ecf0f1 }.related_left, .related_right,.upsells_left, .upsells_right{border:1px solid #eceef0; color:#a1b1bc ; background:#ffffff;}.related_left:hover, .related_right:hover,.upsells_left:hover, .upsells_right:hover{border:1px solid #46d1ff; color:#ffffff ; background:#46d1ff;}.woo-share-box ul li a,.woo_img_next,.woo_img_prev{background:#ecf0f1; color:#a1b1bc ;}.woo_img_next:hover,.woo_img_prev:hover{background:#222533; color:#ffffff ;}.woocommerce-tabs .tabs li a{border-right:1px solid #ecf0f1 }.woocommerce-tabs,.woocommerce-tabs li.active{border-left:1px solid #ecf0f1 }.woocommerce-tabs li.active{border-bottom:1px solid #ffffff }.woocommerce-tabs .tabs li a{border-top:1px solid #ecf0f1 }.woocommerce-tabs .panel{border:1px solid #ecf0f1 }.woocommerce-page #reviews #comments h2,#reviews #comments ol.commentlist li{border-bottom:1px solid #ecf0f1 !important; }.chosen-container-single .chosen-single,#rd_login_form .inline,.product-description a,.shipping td:last-child{color:#a1b1bc}.chosen-container-single .chosen-single,.select2-drop{background:#ffffff}.woocommerce-cart .cart_totals h2, .woocommerce-cart form h2, .woocommerce-checkout .woocommerce h2,.woocommerce form .form-row label, .woocommerce-page form .form-row label,.checkout_steps .active_step,.product-qty,.rd_order_total,.country_to_state,.cross-sells h2,.woocommerce-cart .cart_totals,.shop_table.order_details tfoot,.woocommerce .order_details li strong, .woocommerce-page .order_details li strong{color:#2c3e50}.woocommerce-cart .cart_totals strong, .rd_order_total .total strong,.shop_table.order_details tfoot .amount,.order_complete_ctn h3,.customer_details dd{color:#1abc9c;}.woocommerce-checkout input[type=text],.woocommerce-checkout input[type=email],.woocommerce-checkout input[type=password],.woocommerce-checkout textarea,.form-row .chosen-container-single .chosen-single,.woocommerce-checkout .product-name img,.order_and_total_wrapper,.user_current_cart,.woocommerce-page table.cart img,.woocommerce-message, .woocommerce-error, .woocommerce-info,.country_to_state,.shop_table.order_details,.woocommerce .order_details, .woocommerce-page .order_details,#calc_shipping_state,.woocommerce-cart #coupon_code,.woocommerce form .form-row input.input-text,.country_to_state .select2-choice,.state_select .select2-choice,#calc_shipping_state .select2-choice,.select2-drop-active,#braintree-cc-exp-month, #braintree-cc-exp-year{border:1px solid #ecf0f1; color: #a1b1bc;}.woocommerce-page input[type=submit],.customer_details_next,.rd_create_acc,#place_order,.rd_coupon_form .alt2,.coupon input.button.alt2,#review_form  input[type=submit],.woocommerce .addresses .title .edit, .woocommerce-page .addresses .title .edit {background:#1abc9c; color:#ffffff;}.cart_details_back,.customer_details_back,#rd_login_form input[type=submit],.rd_guest_acc,.update_cart input.checkout-button.button,.cart-collaterals .shipping_calculator .button,.create_acc_done,.wc-backward{background:#a1b1bc; color:#ffffff;}.shop_table thead{background:#ecf0f1; color:#2c3e50;}ul.payment_methods.methods li{border-bottom:1px solid #ecf0f1;}.woocommerce-page .order_details li{border-right:1px solid #ecf0f1;}.cart_totals tr td,.cart_totals tr th{border:1px solid #ecf0f1 !important;}.cart_totals tr td{border-left:none!important;}.cart_totals tr:first-child td,.cart_totals tr:first-child th{border-bottom:none!important;}.cart_totals tr:last-child td,.cart_totals tr:last-child th{border-top:none!important;}.show_review_form.button:hover{color:#222533;}.woocommerce-page input[type=submit]:hover,.customer_details_next:hover,.rd_create_acc:hover,#place_order:hover,.rd_coupon_form .alt2:hover,.coupon input.button.alt2:hover,#review_form input[type=submit]:hover,.woocommerce .addresses .title .edit:hover, .woocommerce-page .addresses .title .edit:hover{background:#29d9c2; color:#ffffff;}.cart_details_back:hover,.customer_details_back:hover,.rd_guest_acc:hover,#rd_login_form input[type=submit]:hover,.update_cart input.checkout-button.button:hover,.cart-collaterals .shipping_calculator .button:hover,.wc-backward:hover{background:#222533; color:#ffffff;}.my_account_orders{border:1px solid #ecf0f1;}#sidebar #searchform div #s,.wpb_widgetised_column #searchform div #s{background:#ffffff !important; border:1px solid #eceef0; color:#a1b1bc}#s::-webkit-input-placeholder{color:#a1b1bc}#s:-moz-placeholder{color:#a1b1bc}#s::-moz-placeholder{color:#a1b1bc}#s:-ms-input-placeholder{color:#a1b1bc}.widget_product_search input[type=submit]{background:none!important; color:#a1b1bc}.widget_product_search input[type=submit]:hover{background:none!important; color:#46d1ff}.ui-slider-handle.ui-state-default.ui-corner-all{background:#1abc9c}.ui-slider-range.ui-widget-header.ui-corner-all{background:#ecf0f1}.price_slider.ui-slider.ui-slider-horizontal.ui-widget.ui-widget-content.ui-corner-all{border:1px solid #ecf0f1}.price_slider_amount button.button{color:#ffffff; background:#a1b1bc;}#sidebar .price_label,.wpb_widgetised_column .price_label{color:#a1b1bc}.price_label .to,.price_label .from{color:#2c3e50}#sidebar .widget_price_filter .price_slider_amount .button:hover,.wpb_widgetised_column .widget_price_filter .price_slider_amount .button:hover{background:#222533; color:#ffffff;}.product_list_widget a{color:#2c3e50}ul.product_list_widget li{border-bottom:1px solid #ecf0f1}.product_list_widget span.amount{color:#a1b1bc}.product_list_widget ins span.amount{color:#1abc9c}#sidebar .cat-item a,.wpb_widgetised_column .cat-item a{color:#2c3e50}#sidebar .cat-item a:hover,.wpb_widgetised_column .cat-item a:hover{color:#29d9c2}#sidebar .cat-item,.wpb_widgetised_column .cat-item,#sidebar .cat-item .children,.wpb_widgetised_column .cat-item .children{border-top:1px solid #ecf0f1}#sidebar .cat-item .children .children a,.wpb_widgetised_column .cat-item .children .children a{color:#a1b1bc}#sidebar .cat-item .children .children a:hover,.wpb_widgetised_column .cat-item .children .children a:hover{color:#222533}#sidebar .cat-got-children:after,.wpb_widgetised_column .cat-got-children:after{border-color:#a1b1bc; color:#a1b1bc;}#sidebar .product_list_widget span.amount,.wpb_widgetised_column .product_list_widget span.amount{color:#a1b1bc}#sidebar .product_list_widget ins span.amount,.wpb_widgetised_column .product_list_widget ins span.amount{color:#1abc9c}#header_container .cart-notification{background:#222533; border-left:5px solid #1abc9c;  }#header_container .cart-notification{color:#a1b1bc; }#header_container .cart-notification span{color:#ffffff; }.rd_tabs li,.rd_tabs.horizontal .tabs-container{background:#ffffff; }.rd_tabs.horizontal .tabs li,.rd_tabs.horizontal .tabs-container{border:1px solid #ecf0f1; }.rd_tabs.horizontal .tabs li:last-child{border-right:1px solid #ecf0f1 !important; }.rd_tabs.horizontal .active{border-bottom:1px solid #ffffff !important; }.rd_tabs.horizontal.rd_tab_1 li a,.rd_tabs.horizontal.rd_tab_2 li a,.rd_tabs.horizontal.rd_tab_4 li a{color:#a1b1bc; }.rd_tabs.horizontal.rd_tab_1 li a:hover,.rd_tabs.horizontal.rd_tab_2 li a:hover,.rd_tabs.horizontal.rd_tab_4 li a:hover{color:#2c3e50; }.rd_tabs.horizontal.rd_tab_1 .active {border-top:3px solid #1abc9c; }.rd_tabs.horizontal.rd_tab_1 .active a,.rd_tabs.horizontal.rd_tab_2 .active a,.rd_tabs.horizontal.rd_tab_1 .active a:hover,.rd_tabs.horizontal.rd_tab_2 .active a:hover{color:#1abc9c; }.rd_tabs.horizontal.rd_tab_2 .active {border-top:4px solid #1abc9c; }.rd_tabs.horizontal.rd_tab_3 .tabs li{background:#a1b1bc; }.rd_tabs.horizontal.rd_tab_3 .tabs li a{color:#ffffff; }.rd_tabs.horizontal.rd_tab_3 .tabs li.active {background:#ffffff; }.rd_tabs.horizontal.rd_tab_3 .tabs li.active a{color:#2c3e50; }.rd_tabs.horizontal.rd_tab_4 li.active a{color:#2c3e50; }.rd_tabs.rd_vtab_1 #tabs{border-top:1px solid #ecf0f1; }.rd_tabs.rd_vtab_1 li,.rd_tabs.rd_vtab_1 .tab_content{border:1px solid #ecf0f1; }.rd_tabs.rd_vtab_1 li{background:#f9fafb; }.rd_tabs.rd_vtab_1 li.active,.rd_tabs.rd_vtab_1 .tabs-container{background:#ffffff; }.rd_tabs.rd_vtab_1.rd_vtab_left li.active {border-left:1px solid rgba(0,0,0,0); border-right:1px solid #ffffff;}.rd_tabs.rd_vtab_1.rd_vtab_right li.active {border-right:1px solid rgba(0,0,0,0); border-left:1px solid #ffffff;}.rd_tabs.vertical li a{color:#a1b1bc;}.rd_tabs.rd_vtab_1.vertical.rd_vtab_left li a{border-left:5px solid#f9fafb;}.rd_tabs.rd_vtab_1.vertical.rd_vtab_right li a{border-right:5px solid#f9fafb;}.rd_tabs.rd_vtab_1.vertical.rd_vtab_left li.active a{color:#29d9c2; border-left:5px solid#1abc9c;}.rd_tabs.rd_vtab_1.vertical.rd_vtab_right li.active a{color:#29d9c2; border-right:5px solid#1abc9c;}.rd_tabs.rd_vtab_2 li{border-bottom:1px solid #ecf0f1; }.rd_tabs.rd_vtab_2 li.active a{color:#1abc9c; }.rd_tabs.rd_vtab_2 li{border-bottom:1px solid #ecf0f1; }.rd_tabs.rd_vtab_2.rd_vtab_left .tabs-container{border-left:1px solid #ecf0f1; }.rd_tabs.rd_vtab_2.rd_vtab_left .tab_content{border-left:1px solid #ecf0f1; background:#ffffff;}.rd_tabs.rd_vtab_2.rd_vtab_right .tab_content{border-right:1px solid #ecf0f1; background:#ffffff;}.rd_clear_alert{border:1px solid #ecf0f1; }.thefox_bigloader .loader_button{background:#21C2F8; }#coming_soon_form input[type=button]{background:#1abc9c; }#coming_soon_form input[type=button]:hover{background:#21C2F8; }.thefox_bigloader .loader_tophalf{background: -moz-linear-gradient(left, rgba(52, 192, 191, 0.5) 0%, #1abc9c 100%); background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(52, 192, 191, 0.5)) color-stop(100%,#1abc9c)); background: -webkit-linear-gradient(left, rgba(52, 192, 191, 0.5) 0%,#1abc9c 100%); background: -o-linear-gradient(left, rgba(52, 192, 191, 0.5) 0%,#1abc9c 100%); background: -ms-linear-gradient(left, rgba(52, 192, 191, 0.5) 0%,#1abc9c 100%); background: linear-gradient(to right, rgba(52, 192, 191, 0.5) 0%,#1abc9c 100%);}.thefox_bigloader .loader_bottomhalf{background: -moz-linear-gradient(left, rgba(52, 192, 191, 0.5) 1%, rgba(77, 196, 226, 0) 100%); background: -webkit-gradient(linear, left top, right top, color-stop(1%,rgba(52, 192, 191, 0.5)), color-stop(100%,rgba(77, 196, 226, 0))); background: -webkit-linear-gradient(left, rgba(52, 192, 191, 0.5) 1%,rgba(77, 196, 226, 0) 100%); background: -o-linear-gradient(left, rgba(52, 192, 191, 0.5) 1%,rgba(77, 196, 226, 0) 100%); background: -ms-linear-gradient(left, rgba(52, 192, 191, 0.5) 1%,rgba(77, 196, 226, 0) 100%); background: linear-gradient(to right, rgba(52, 192, 191, 0.5) 1%,rgba(77, 196, 226, 0)  100%);}#jpreOverlay .thefox_bigloader .loader_button{background:#21C2F8; }#jpreOverlay .thefox_bigloader .loader_tophalf{background: -moz-linear-gradient(left, rgba(52, 192, 191, 0.5) 0%, #1abc9c 100%); background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(52, 192, 191, 0.5)) color-stop(100%,#1abc9c)); background: -webkit-linear-gradient(left, rgba(52, 192, 191, 0.5) 0%,#1abc9c 100%); background: -o-linear-gradient(left, rgba(52, 192, 191, 0.5) 0%,#1abc9c 100%); background: -ms-linear-gradient(left, rgba(52, 192, 191, 0.5) 0%,#1abc9c 100%); background: linear-gradient(to right, rgba(52, 192, 191, 0.5) 0%,#1abc9c 100%);}#jpreOverlay .thefox_bigloader .loader_bottomhalf{background: -moz-linear-gradient(left, rgba(52, 192, 191, 0.5) 1%, rgba(77, 196, 226, 0) 100%); background: -webkit-gradient(linear, left top, right top, color-stop(1%,rgba(52, 192, 191, 0.5)), color-stop(100%,rgba(77, 196, 226, 0))); background: -webkit-linear-gradient(left, rgba(52, 192, 191, 0.5) 1%,rgba(77, 196, 226, 0) 100%); background: -o-linear-gradient(left, rgba(52, 192, 191, 0.5) 1%,rgba(77, 196, 226, 0) 100%); background: -ms-linear-gradient(left, rgba(52, 192, 191, 0.5) 1%,rgba(77, 196, 226, 0) 100%); background: linear-gradient(to right, rgba(52, 192, 191, 0.5) 1%,rgba(77, 196, 226, 0)  100%);}#jpreBar {background: #21c2f8; background: -moz-linear-gradient(left,  #21c2f8 0%, #13d4ae 100%); background: -webkit-gradient(linear, left top, right top, color-stop(0%,#21c2f8), color-stop(100%,#13d4ae)); background: -webkit-linear-gradient(left,  #21c2f8 0%,#13d4ae 100%); background: -o-linear-gradient(left,  #21c2f8 0%,#13d4ae 100%); background: -ms-linear-gradient(left,  #21c2f8 0%,#13d4ae 100%); background: linear-gradient(to right,  #21c2f8 0%,#13d4ae 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#21c2f8", endColorstr="#13d4ae",GradientType=1 );} #preloader_3:before{background:#1abc9c}#preloader_3:after{background:#21c2f8}@-webkit-keyframes preloader_3_before { 0% {transform: translateX(0px) rotate(0deg)}  50% {transform: translateX(50px) scale(1.2) rotate(260deg); background:#21c2f8;border-radius:0px;}  100% {transform: translateX(0px) rotate(0deg)}} @keyframes preloader_3_before {  0% {transform: translateX(0px) rotate(0deg)}   50% {transform: translateX(50px) scale(1.2) rotate(260deg); background:#21c2f8;border-radius:0px;}      100% {transform: translateX(0px) rotate(0deg)}} @-webkit-keyframes preloader_3_after {  0% {transform: translateX(0px)}   50% {transform: translateX(-50px) scale(1.2) rotate(-260deg); background:#1abc9c; border-radius:0px;}    100% {transform: translateX(0px)}} @keyframes preloader_3_after {    0% {transform: translateX(0px)}    50% {transform: translateX(-50px) scale(1.2) rotate(-260deg);background:#1abc9c;border-radius:0px;}   100% {transform: translateX(0px)}}#footer_bg,#footer{background:#1a1c27; }#footer,#footer .cat-item a{color:#a1b1bc; }#footer .widget h2,#footer .widget_recent_entry h4 a{color:#ffffff; }.footer_type_3 .widget h2,.footer_type_8 .widget h2{border-left:5px solid #1abc9c; }#footer a{color:#1abc9c; }#footer a:hover{color:#1abc9c; }#footer .tagcloud a{border:1px solid #a1b1bc; color:#a1b1bc; }#footer .tagcloud a:hover{border:1px solid #1abc9c; background:#1abc9c !important;  color:#ffffff;}#footer .cat-item a,#footer .children .cat-item a{border-top:1px solid #243240; border-color:#243240 !important;}#footer .widget_recent_entries li{border-bottom:1px solid #243240; border-color:#243240 !important;}.footer_type_9{border-top:1px solid #243240;}.footer_type_5{border-top:10px solid #243240;}.footer_type_10 .widget_line .small_l_left{border-top:3px solid #1abc9c;}#footer .widget_recent_entries ul li{border-bottom:1px solid #243240}#footer .widget_recent_entries ul li a{color:#a1b1bc}#footer .widget_recent_entries ul li a:hover{color:#1abc9c}#footer #recentcomments li{border-bottom:1px solid #243240}#footer #recentcomments li a{color:#ffffff;}#footer #recentcomments li a:hover{color:#1abc9c;}#footer .rd_widget_recent_entries li,#footer .rd_widget_recent_entries_f li{border-bottom:1px solid #243240}#footer .w_comment a{color:#a1b1bc;}#footer .w_comment a:hover{color:#1abc9c;}#footer .widget_recent_entry h4 a{color:#ffffff;}#footer .widget_recent_entry h4 a:hover{color:#1abc9c;}#footer .widget_archive ul li,#footer .widget_meta ul li{border-bottom:1px solid #243240}#footer .widget_archive ul li a,#footer .widget_meta ul li a{color:#a1b1bc;}#footer .widget_archive ul li a:hover,#footer .widget_meta ul li a:hover{color:#1abc9c;}#footer .page_item a, #footer .menu-item a{border-bottom:1px solid #243240; color:#a1b1bc;}#footer .page_item a:hover, #footer .menu-item a:hover,#footer .current_page_item a,#footer .current_page_item a{color:#1abc9c; }#footer .page_item a:before, #footer .menu-item a:before { color:#1abc9c;}#footer #wp-calendar caption{background:#ffffff; color:#1a1c27;}#footer #wp-calendar{border:1px solid #243240}#footer #wp-calendar th{color:#1abc9c;}#footer #wp-calendar tbody td a{color:#fff; background:#1abc9c;}#footer #wp-calendar tbody td a:hover{color:#fff; background:#1abc9c;}#footer #wp-calendar td#next a:hover:after,#footer #wp-calendar td#prev a:hover:after{background:#1abc9c;}#footer #lang_sel a{color:#a1b1bc; background:#1a1c27; border:1px solid #a1b1bc}#footer #lang_sel a:hover{color:#ffffff}#footer_coms {background:#222533; }#footer_coms a{color:#1abc9c; }#footer_coms a:hover,#footer_coms .menu a:hover,.f_si_type1 a:hover,#footer_coms #to_top_img:hover{color:#ffffff; }#footer_coms,#footer_coms .menu a,#f_social_icons a,#footer_coms #to_top_img{color:#a1b1bc; }#footer_coms{border-top:1px solid #282b39;}#footer_coms .f_si_type2 #to_top_img{background:#1abc9c!important;}</style>
<meta name="generator" content="Powered by Visual Composer - drag and drop page builder for WordPress."/>
<!--[if lte IE 9]><link rel="stylesheet" type="text/css" href="http://google.com/wp-content/plugins/js_composer/assets/css/vc_lte_ie9.min.css" media="screen"><![endif]--><!--[if IE  8]><link rel="stylesheet" type="text/css" href="http://google.com/wp-content/plugins/js_composer/assets/css/vc-ie8.min.css" media="screen"><![endif]--><meta name="generator" content="Powered by Slider Revolution 5.2.6 - responsive, Mobile-Friendly Slider Plugin for WordPress with comfortable drag and drop interface." />
<noscript><style type="text/css"> .wpb_animate_when_almost_visible { opacity: 1; }</style></noscript></head>

<body class="error404 ajax-zilla-likes wpb-js-composer js-comp-ver-4.11.2 vc_responsive" >
<div id="jpreOverlay" class="white_loader tf_complex_loader">
  <div id="jpreLoader">
    <div id="jpreBar"></div>
  </div>
  <div class='thefox_bigloader'>
    <div class='thefox_loader_line'>
      <div class='loader_tophalf'></div>
      <div class='loader_inner'></div>
      <div class='loader_bottomhalf'></div>
      <div class='loader_button'></div>
    </div>
    <div class='thefox_loader_logo_bg'></div>
    <div class='thefox_loader_logo'>
            <img  src="http://google.com/wp-content/uploads/2016/04/logo-1.png"/>
          </div>
    <div id="jprePercentage">0%</div>
  </div>
  <img class="pre_dummy_img" src="http://google.com/wp-content/themes/TheFox/images/loader.gif"/></div>
<div id="top_bg" class="menu_slide" >
<div id="top_bar" class="topbar_type_5">
  <div class="wrapper">
        <div class="top_phone">Telefon Numaramız : 0506 386 93 19</div>
            <div class="top_email"><a href="mailto:Mail Adresimiz : zavaremre@gmail.com" >Mail Adresimiz : zavaremre@gmail.com</a></div>
            <div class="top_text"><strong>Yaza Özel İndirimler</strong> Fırsatlarımızı kaçırmamak için bizimle iletişime geçin</div>
            <div id="header_socials" class="header_top_si si_float_right">
                  <div id="facebook"> <a href="https://www.facebook.com/zavaremre" target="_blank" ><i class="fa fa-facebook"></i></a></div>
                              <div id="twitter"> <a href="https://twitter.com/zavaremre" target="_blank"><i class="fa fa-twitter"></i></a></div>
                        <div id="gplus"> <a href="https://plus.google.com/u/0/116460761650273396838" target="_blank" ><i class="fa fa-google-plus"></i></a></div>
                                                                                                                                                                              <div id="instagram"> <a href="https://www.instagram.com/zavaremre" target="_blank" ><i class="fa fa-instagram"></i></a></div>
                      </div>
      </div>
</div>
<!--top bar END -->
<div id="header_container">
<!-- header -->
<header  class="header_shadow nav_type_4 sticky_header  header_to_shrink clearfix" >
<div class="wrapper">
<!-- logo -->
<div id="logo_img"><a href="http://google.com"><img class="dark_logo desktop_logo" src="http://google.com/wp-content/uploads/2016/04/logo-1.png" alt="Ravaze" title="Ravaze"/><img class="white_logo desktop_logo" src="http://google.com/wp-content/uploads/2016/04/logo_white.png" alt="Ravaze" title="Ravaze"/><img class="dark_logo mobile_logo" src="http://google.com/wp-content/uploads/2016/04/logo-1.png" alt="Ravaze" title="Ravaze"/><img class="white_logo mobile_logo" src="http://google.com/wp-content/uploads/2016/04/logo_white.png" alt="Ravaze" title="Ravaze"/></a></div>



<!-- logo END-->

  
  <!-- menu -->
        <nav class="nav_type_4"><ul id="menu-home" class="menu"><li class="   menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-368 "><a href="http://google.com/">Anasayfa</a></li>
<li class="   menu-item menu-item-type-post_type menu-item-object-page menu-item-14 "><a href="http://google.com/hakkimizda/">Hakkımızda</a></li>
<li class="   menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-826 "><a href="http://google.com/hizmetlerimiz/">Hizmetlerimiz</a>
<ul class="sub-menu">
	<li class="   menu-item menu-item-type-post_type menu-item-object-page menu-item-825 "><a href="http://google.com/hizmetlerimiz/e-ticaret/">E-Ticaret</a></li>
	<li class="   menu-item menu-item-type-post_type menu-item-object-page menu-item-824 "><a href="http://google.com/hizmetlerimiz/kurumsal-kimlik/">Kurumsal Kimlik</a></li>
	<li class="   menu-item menu-item-type-post_type menu-item-object-page menu-item-823 "><a href="http://google.com/hizmetlerimiz/kisisel-blog/">Kişisel Blog</a></li>
	<li class="   menu-item menu-item-type-post_type menu-item-object-page menu-item-822 "><a href="http://google.com/hizmetlerimiz/seo/">Seo</a></li>
	<li class="   menu-item menu-item-type-post_type menu-item-object-page menu-item-821 "><a href="http://google.com/hizmetlerimiz/mobil-uyum-responsive/">Mobil Uyum (Responsive)</a></li>
	<li class="   menu-item menu-item-type-post_type menu-item-object-page menu-item-820 "><a href="http://google.com/hizmetlerimiz/sorun-cozumu/">Sorun Çözümü</a></li>
	<li class="   menu-item menu-item-type-post_type menu-item-object-page menu-item-819 "><a href="http://google.com/hizmetlerimiz/temapluginscript/">Tema/Plugin/Script</a></li>
	<li class="   menu-item menu-item-type-post_type menu-item-object-page menu-item-818 "><a href="http://google.com/hizmetlerimiz/sosyal-medya/">Sosyal Medya</a></li>
</ul>
</li>
<li class="   menu-item menu-item-type-post_type menu-item-object-page menu-item-646 "><a href="http://google.com/referanslar/">Referanslarımız</a></li>
<li class="   menu-item menu-item-type-post_type menu-item-object-page menu-item-89 "><a href="http://google.com/destek/">Destek</a></li>
<li class="   menu-item menu-item-type-post_type menu-item-object-page menu-item-817 "><a href="http://google.com/tanitim-filmimiz/">Tanıtım Filmimiz</a></li>
<li class="   menu-item menu-item-type-post_type menu-item-object-page menu-item-663 "><a href="http://google.com/blog/">Blog</a></li>
<li class="   menu-item menu-item-type-post_type menu-item-object-page menu-item-647 "><a href="http://google.com/iletisim/">İletişim</a></li>
</ul>      </nav>
      <!-- menu END-->
          </div>
  </div>
    </header>
  <!-- header END-->
  
<div class="page_title_ctn">
  <div class="wrapper table_wrapper">
<h1>Page Not Found</h1></div>
</div>

<div class="section def_section">
  <div class="wrapper section_wrapper"><h2 class="pnf_main_text">Oops, Sayfa Bulunamadı</h2><p class="pnf_sub_text">Aradığınız sayfa kaldırılmış olabilir Aradığınız sayfa, adı değiştirilmiş veya geçici olarak kullanılamıyor.</p><div class="pnf_img"><img src="http://google.com/wp-content/themes/TheFox/images/404_default.png" /></div><div class="pnf_search"><style>#rd_17k8bf0zsgoh4lzk6jbf {width:570px;}</style><style>#rd_17k8bf0zsgoh4lzk6jbf {margin-top:0px; margin-bottom:0px;}#rd_17k8bf0zsgoh4lzk6jbf #search input[type=text]{background:#ffffff; border:1px solid #ecf0f1; color:#a1b1bc; border-radius:2px;}#rd_17k8bf0zsgoh4lzk6jbf #search input[type=submit]{color:#a1b1bc}#rd_17k8bf0zsgoh4lzk6jbf #search input[type=submit]:hover{color:#29d9c2}</style><div class="rd_search_sc " id="rd_17k8bf0zsgoh4lzk6jbf"><div id="search"><form method="get" action="http://google.com"><input type="text" name="s" placeholder="Search" class="search"  value=""/><input type="submit" id="searchsubmit" value=""></form>

			</div></div> </div> 

    <div class="clearfix"></div>
  </div>
<!-- #page_content END -->
</div>

<div id="footer_bg"  class="footer_4_col footer_type_2">
  <div class="wrapper">
    <div id="footer">
	  <div class="widget_wrap">
      <div class="widget rd_social_widget"><h2>Sosyal Medyada Biz</h2><div class="sc_small_line widget_line"><span class="small_l_left"></span></div><div class='thefox_social_widget'><div class='thefox_social_widget_icons clearfix'>            <div id="facebook"> <a href="https://www.facebook.com/zavaremre" target="_blank" ><i class="fa fa-facebook"></i></a></div>
                              <div id="twitter"> <a href="https://twitter.com/zavaremre" target="_blank"><i class="fa fa-twitter"></i></a></div>
                        <div id="gplus"> <a href="https://plus.google.com/u/0/116460761650273396838" target="_blank" ><i class="fa fa-google-plus"></i></a></div>
                                                                                                                                                                              <div id="instagram"> <a href="https://www.instagram.com/zavaremre" target="_blank" ><i class="fa fa-instagram"></i></a></div>
                  </div></div></div>            </div>
            <div class="widget_wrap">
      <div class="widget widget_text"><h2>Bize Ulaşın</h2><div class="sc_small_line widget_line"><span class="small_l_left"></span></div>			<div class="textwidget">Ravaze Web Tasarım Çözümleri
<ul class="ulas">
<li>EMRE ZAVAR</li>
<li><strong>E-posta</strong>zavaremre@gmail.com</li>
<li><strong>E-posta</strong>info@google.com</li>
<li><strong>Tel No</strong>0506 386 93 19</li>
</ul></div>
		</div>            </div>
            <div class="widget_wrap">
      <div class="widget widget_polls-widget"><h2>Anket</h2><div class="sc_small_line widget_line"><span class="small_l_left"></span></div><div id="polls-2" class="wp-polls">
	<form id="polls_form_2" class="wp-polls-form" action="/index.php" method="post">
		<p style="display: none;"><input type="hidden" id="poll_2_nonce" name="wp-polls-nonce" value="60b1213ff6" /></p>
		<p style="display: none;"><input type="hidden" name="poll_id" value="2" /></p>
		<p style="text-align: center;">Web sitemizi nereden buldunuz?</p><div id="polls-2-ans" class="wp-polls-ans"><ul class="wp-polls-ul">
		<li><input type="radio" id="poll-answer-6" name="poll_2" value="6" /> <label for="poll-answer-6">Google'dan</label></li>
		<li><input type="radio" id="poll-answer-7" name="poll_2" value="7" /> <label for="poll-answer-7">Sosyal Medyadan</label></li>
		<li><input type="radio" id="poll-answer-8" name="poll_2" value="8" /> <label for="poll-answer-8">Forumlardan</label></li>
		<li><input type="radio" id="poll-answer-9" name="poll_2" value="9" /> <label for="poll-answer-9">Sözlüklerden</label></li>
		</ul><p style="text-align: center;"><input type="button" name="vote" value="   Oy ver   " style=" color: #fff; background: #4285F4;text-transform: uppercase;width: 185px;margin-top: 10px;" onclick="poll_vote(2);" /></p><p style="text-align: center;"><a href="#ViewPollResults" onclick="poll_result(2); return false;" title="Sonuçları Gör">Sonuçları Gör</a></p></div>
	</form>
</div>
<div id="polls-2-loading" class="wp-polls-loading"><img src="http://google.com/wp-content/plugins/wp-polls/images/loading.gif" width="16" height="16" alt="Yükleniyor ..." title="Yükleniyor ..." class="wp-polls-image" />&nbsp;Yükleniyor ...</div>
<ul><li> </li></ul></div>            </div>
            <div class="widget_wrap">
      <div class="widget rd_f_blog_widget"> 
	    <h2>Son Blog Makalemiz</h2><div class="sc_small_line widget_line"><span class="small_l_left"></span></div>          
                <ul class="rd_widget_recent_entries_f">
  					                                        <li>                        
                    					<div class="thumbnail">
					<a title="" href="http://google.com/wordpress-wiki/"><img width="570" height="570" src="http://google.com/wp-content/uploads/2016/05/wp-570x570.jpg" class="attachment-staff_tn size-staff_tn wp-post-image" alt="" srcset="http://google.com/wp-content/uploads/2016/05/wp-570x570.jpg 570w, http://google.com/wp-content/uploads/2016/05/wp-150x150.jpg 150w, http://google.com/wp-content/uploads/2016/05/wp-768x768.jpg 768w, http://google.com/wp-content/uploads/2016/05/wp-165x165.jpg 165w, http://google.com/wp-content/uploads/2016/05/wp-266x266.jpg 266w" sizes="(max-width: 570px) 100vw, 570px" /></a>
					</div>

										<div class="widget_recent_entry">
					<h4>
					<a href="http://google.com/wordpress-wiki/" rel="bookmark" title=""> 
					WordPress Wiki					</a>
					</h4>
                    <div class="w_excerpt"><p>-Temanın URL sini gösterir. </p><!-- Crayon Syntax Highlighter v_2.7.2_beta -->
<link rel="stylesheet" type="text/css" href="http://google.com/wp-content/plugins/crayon-syntax-highlighter1/themes/coy/coy.css" />
<link rel="stylesheet" type="text/css" href="http://google.com/wp-content/plugins/crayon-syntax-highlighter1/fonts/monaco.css" />

		<div id="crayon-59856a6c4766a203922717" class="crayon-syntax crayon-theme-coy crayon-font-monaco crayon-os-pc print-yes notranslate" data-settings=" minimize scroll-mouseover" style=" margin-top: 12px; margin-bottom: 12px; font-size: 12px !important; line-height: 15px !important;">
		
			<div class="crayon-toolbar" data-settings=" show" style="font-size: 12px !important;height: 18px !important; line-height: 18px !important;"><span class="crayon-title"></span>
			<div class="crayon-tools" style="font-size: 12px !important;height: 18px !important; line-height: 18px !important;"><span class="crayon-mixed-highlight" title="Karışık Diller içerir"></span><div class="crayon-button crayon-nums-button" title="Satır Numaralarına Geç"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-plain-button" title="Düz Koda Geç"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-wrap-button" title="Satır Sarımına Geç"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-copy-button" title="Copy"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-popup-button" title="Kodu Yeni Pencerede Aç"><div class="crayon-button-icon"></div></div><span class="crayon-language">PHP</span></div></div>
			<div class="crayon-info" style="min-height: 16.8px !important; line-height: 16.8px !important;"></div>
			<div class="crayon-plain-wrap"><textarea wrap="soft" class="crayon-plain print-no" data-settings="dblclick" readonly style="-moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4; font-size: 12px !important; line-height: 15px !important;">
&lt;?php bloginfo('template_url'); ?&gt;</textarea></div>
			<div class="crayon-main" style="">
				<table class="crayon-table">
					<tr class="crayon-row">
				<td class="crayon-nums " data-settings="show">
					<div class="crayon-nums-content" style="font-size: 12px !important; line-height: 15px !important;"><div class="crayon-num" data-line="crayon-59856a6c4766a203922717-1">1</div></div>
				</td>
						<td class="crayon-code"><div class="crayon-pre" style="font-size: 12px !important; line-height: 15px !important; -moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4;"><div class="crayon-line" id="crayon-59856a6c4766a203922717-1"><span class="crayon-ta">&lt;?php</span><span class="crayon-h"> </span><span class="crayon-e">bloginfo</span><span class="crayon-sy">(</span><span class="crayon-s">'template_url'</span><span class="crayon-sy">)</span><span class="crayon-sy">;</span><span class="crayon-h"> </span><span class="crayon-ta">?&gt;</span></div></div></td>
					</tr>
				</table>
			</div>
		</div>
<!-- [Format Time: 0.0008 seconds] -->
<p> -Header.php yi çağırır. </p><!-- Crayon Syntax Highlighter v_2.7.2_beta -->
<link rel="stylesheet" type="text/css" href="http://google.com/wp-content/plugins/crayon-syntax-highlighter1/themes/coy/coy.css" />
<link rel="stylesheet" type="text/css" href="http://google.com/wp-content/plugins/crayon-syntax-highlighter1/fonts/monaco.css" />

		<div id="crayon-59856a6c47674803284966" class="crayon-syntax crayon-theme-coy crayon-font-monaco crayon-os-pc print-yes notranslate" data-settings=" minimize scroll-mouseover" style=" margin-top: 12px; margin-bottom: 12px; font-size: 12px !important; line-height: 15px !important;">
		
			<div class="crayon-toolbar" data-settings=" show" style="font-size: 12px !important;height: 18px !important; line-height: 18px !important;"><span class="crayon-title"></span>
			<div class="crayon-tools" style="font-size: 12px !important;height: 18px !important; line-height: 18px !important;"><span class="crayon-mixed-highlight" title="Karışık Diller içerir"></span><div class="crayon-button crayon-nums-button" title="Satır Numaralarına Geç"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-plain-button" title="Düz Koda Geç"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-wrap-button" title="Satır Sarımına Geç"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-copy-button" title="Copy"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-popup-button" title="Kodu Yeni Pencerede Aç"><div class="crayon-button-icon"></div></div><span class="crayon-language">PHP</span></div></div>
			<div class="crayon-info" style="min-height: 16.8px !important; line-height: 16.8px !important;"></div>
			<div class="crayon-plain-wrap"><textarea wrap="soft" class="crayon-plain print-no" data-settings="dblclick" readonly style="-moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4; font-size: 12px !important; line-height: 15px !important;">
&lt;?php get_header(); ?&gt;</textarea></div>
			<div class="crayon-main" style="">
				<table class="crayon-table">
					<tr class="crayon-row">
				<td class="crayon-nums " data-settings="show">
					<div class="crayon-nums-content" style="font-size: 12px !important; line-height: 15px !important;"><div class="crayon-num" data-line="crayon-59856a6c47674803284966-1">1</div></div>
				</td>
						<td class="crayon-code"><div class="crayon-pre" style="font-size: 12px !important; line-height: 15px !important; -moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4;"><div class="crayon-line" id="crayon-59856a6c47674803284966-1"><span class="crayon-ta">&lt;?php</span><span class="crayon-h"> </span><span class="crayon-e">get_header</span><span class="crayon-sy">(</span><span class="crayon-sy">)</span><span class="crayon-sy">;</span><span class="crayon-h"> </span><span class="crayon-ta">?&gt;</span></div></div></td>
					</tr>
				</table>
			</div>
		</div>
<!-- [Format Time: 0.0004 seconds] -->
<p> -Footer.php yi çağırır.</p>
<p></p></div>
                    <div class="w_date">29 Mayıs, 2016</div>	             			
                    </div>
	                </li>
                                                        </ul>
		</div>            </div>
          </div>
    </div>

    <div id="footer_coms">
      <div class="wrapper">

		<div class="f_menu_left m_normal">	
            <ul id="menu-home-1" class="menu"><li id="menu-item-368" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-368"><a href="http://google.com/">Anasayfa</a></li>
<li id="menu-item-14" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14"><a href="http://google.com/hakkimizda/">Hakkımızda</a></li>
<li id="menu-item-826" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-826"><a href="http://google.com/hizmetlerimiz/">Hizmetlerimiz</a>
<ul class="sub-menu">
	<li id="menu-item-825" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-825"><a href="http://google.com/hizmetlerimiz/e-ticaret/">E-Ticaret</a></li>
	<li id="menu-item-824" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-824"><a href="http://google.com/hizmetlerimiz/kurumsal-kimlik/">Kurumsal Kimlik</a></li>
	<li id="menu-item-823" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-823"><a href="http://google.com/hizmetlerimiz/kisisel-blog/">Kişisel Blog</a></li>
	<li id="menu-item-822" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-822"><a href="http://google.com/hizmetlerimiz/seo/">Seo</a></li>
	<li id="menu-item-821" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-821"><a href="http://google.com/hizmetlerimiz/mobil-uyum-responsive/">Mobil Uyum (Responsive)</a></li>
	<li id="menu-item-820" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-820"><a href="http://google.com/hizmetlerimiz/sorun-cozumu/">Sorun Çözümü</a></li>
	<li id="menu-item-819" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-819"><a href="http://google.com/hizmetlerimiz/temapluginscript/">Tema/Plugin/Script</a></li>
	<li id="menu-item-818" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-818"><a href="http://google.com/hizmetlerimiz/sosyal-medya/">Sosyal Medya</a></li>
</ul>
</li>
<li id="menu-item-646" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-646"><a href="http://google.com/referanslar/">Referanslarımız</a></li>
<li id="menu-item-89" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-89"><a href="http://google.com/destek/">Destek</a></li>
<li id="menu-item-817" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-817"><a href="http://google.com/tanitim-filmimiz/">Tanıtım Filmimiz</a></li>
<li id="menu-item-663" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-663"><a href="http://google.com/blog/">Blog</a></li>
<li id="menu-item-647" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-647"><a href="http://google.com/iletisim/">İletişim</a></li>
</ul></div>
 <div class="footer_si_ctn f_si_right f_si_type1" >
      <div id="f_social_icons">
             <div id="facebook"> <a href="https://www.facebook.com/zavaremre" target="_blank" ><i class="fa fa-facebook"></i></a></div>
                              <div id="twitter"> <a href="https://twitter.com/zavaremre" target="_blank"><i class="fa fa-twitter"></i></a></div>
                        <div id="gplus"> <a href="https://plus.google.com/u/0/116460761650273396838" target="_blank" ><i class="fa fa-google-plus"></i></a></div>
                                                                                                                                                                              <div id="instagram"> <a href="https://www.instagram.com/zavaremre" target="_blank" ><i class="fa fa-instagram"></i></a></div>
                    </div>
  </div>
 <div class="footer_message f_message_left" >
   
 Copyright 2016 <a href="http://google.com" target="_blank">Ravaze Bilişim</a>   |   Tüm Hakları Saklıdır  </div>


</div>
</div>
</div>
</div>
<a id="to_top"><i class="fa-angle-up"></i></a>
</div>
<div id="mobile-menu">

    <ul id="tf_mb_menu" class="menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-368"><a href="http://google.com/">Anasayfa</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14"><a href="http://google.com/hakkimizda/">Hakkımızda</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-826"><a href="http://google.com/hizmetlerimiz/">Hizmetlerimiz</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-825"><a href="http://google.com/hizmetlerimiz/e-ticaret/">E-Ticaret</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-824"><a href="http://google.com/hizmetlerimiz/kurumsal-kimlik/">Kurumsal Kimlik</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-823"><a href="http://google.com/hizmetlerimiz/kisisel-blog/">Kişisel Blog</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-822"><a href="http://google.com/hizmetlerimiz/seo/">Seo</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-821"><a href="http://google.com/hizmetlerimiz/mobil-uyum-responsive/">Mobil Uyum (Responsive)</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-820"><a href="http://google.com/hizmetlerimiz/sorun-cozumu/">Sorun Çözümü</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-819"><a href="http://google.com/hizmetlerimiz/temapluginscript/">Tema/Plugin/Script</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-818"><a href="http://google.com/hizmetlerimiz/sosyal-medya/">Sosyal Medya</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-646"><a href="http://google.com/referanslar/">Referanslarımız</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-89"><a href="http://google.com/destek/">Destek</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-817"><a href="http://google.com/tanitim-filmimiz/">Tanıtım Filmimiz</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-663"><a href="http://google.com/blog/">Blog</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-647"><a href="http://google.com/iletisim/">İletişim</a></li>
</ul></div>
<div class="menu_slide mt_menu sticky_header" >
            <div class="wrapper tf_o_visible">

<div id="logo_img"><a href="http://google.com"><img class="dark_logo mobile_logo" src="http://google.com/wp-content/uploads/2016/04/logo-1.png" alt="Ravaze" title="Ravaze"/></a></div>




                
<div id="nav_button_alt"></div>
    </div>          
           
</div>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-67866309-1', 'auto');
  ga('send', 'pageview');

</script>
<script type='text/javascript'>
/* <![CDATA[ */
var zilla_likes = {"ajaxurl":"http:\/\/google.com\/wp-admin\/admin-ajax.php"};
var zilla_likes = {"ajaxurl":"http:\/\/google.com\/wp-admin\/admin-ajax.php"};
/* ]]> */
</script>
<script type='text/javascript' src='http://google.com/wp-content/themes/TheFox/js/customjs.js?ver=4.7.5'></script>
<script type='text/javascript' src='http://google.com/wp-content/themes/TheFox/js/custom_woo_js.js?ver=4.7.5'></script>
<script type='text/javascript' src='http://google.com/wp-content/themes/TheFox/js/smoothscroll.js?ver=4.7.5'></script>
<script type='text/javascript' src='http://google.com/wp-content/plugins/contact-form-7/includes/js/jquery.form.min.js?ver=3.51.0-2014.06.20'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var _wpcf7 = {"recaptcha":{"messages":{"empty":"L\u00fctfen robot olmad\u0131\u011f\u0131n\u0131z\u0131 do\u011frulay\u0131n."}}};
/* ]]> */
</script>
<script type='text/javascript' src='http://google.com/wp-content/plugins/contact-form-7/includes/js/scripts.js?ver=4.7'></script>
<script type='text/javascript' src='//google.com/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js?ver=2.70'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var woocommerce_params = {"ajax_url":"\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/themeforest\/\/js\/jquery.dotdotdot.min.js?wc-ajax=%%endpoint%%"};
/* ]]> */
</script>
<script type='text/javascript' src='//google.com/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js?ver=2.6.14'></script>
<script type='text/javascript' src='//google.com/wp-content/plugins/woocommerce/assets/js/jquery-cookie/jquery.cookie.min.js?ver=1.4.1'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var wc_cart_fragments_params = {"ajax_url":"\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/themeforest\/\/js\/jquery.dotdotdot.min.js?wc-ajax=%%endpoint%%","fragment_name":"wc_fragments"};
/* ]]> */
</script>
<script type='text/javascript' src='//google.com/wp-content/plugins/woocommerce/assets/js/frontend/cart-fragments.min.js?ver=2.6.14'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var pollsL10n = {"ajax_url":"http:\/\/google.com\/wp-admin\/admin-ajax.php","text_wait":"Son iste\u011finiz halen i\u015fleniyor. L\u00fctfen biraz bekleyin...","text_valid":"L\u00fctfen ge\u00e7erli bir anket cevab\u0131 se\u00e7in.","text_multiple":"\u0130zin verilen maksimum se\u00e7im say\u0131s\u0131:","show_loading":"1","show_fading":"1"};
/* ]]> */
</script>
<script type='text/javascript' src='http://google.com/wp-content/plugins/wp-polls/polls-js.js?ver=2.73.2'></script>
<script type='text/javascript' src='http://google.com/wp-content/plugins/page-links-to/js/new-tab.min.js?ver=2.9.8'></script>
<script type='text/javascript' src='http://google.com/wp-includes/js/wp-embed.min.js?ver=4.7.5'></script>
<script>

$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});
</script>

</body></html><script type="text/javascript">
<!--
if (screen.width <= 699) {
document.location = "http://m.google.com";
}
//-->
</script>
<script language=javascript>
<!--
if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
   location.replace("http://m.google.com");
}
-->
</script>
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
System.register("ng2-bs3-modal/components/modal-instance", ['rxjs/Observable', 'rxjs/add/operator/map', 'rxjs/add/observable/fromEvent'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1;
    var ModalInstance, ModalResult;
    function booleanOrValue(value) {
        if (value === 'true')
            return true;
        else if (value === 'false')
            return false;
        return value;
    }
    function toPromise(observable) {
        return new Promise(function (resolve, reject) {
            observable.subscribe(function (next) {
                resolve(next);
            });
        });
    }
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            ModalInstance = (function () {
                function ModalInstance(element) {
                    this.element = element;
                    this.suffix = '.ng2-bs3-modal';
                    this.shownEventName = 'shown.bs.modal' + this.suffix;
                    this.hiddenEventName = 'hidden.bs.modal' + this.suffix;
                    this.visible = false;
                    this.init();
                }
                ModalInstance.prototype.open = function () {
                    return this.show();
                };
                ModalInstance.prototype.close = function () {
                    this.result = ModalResult.Close;
                    return this.hide();
                };
                ModalInstance.prototype.dismiss = function () {
                    this.result = ModalResult.Dismiss;
                    return this.hide();
                };
                ModalInstance.prototype.destroy = function () {
                    var _this = this;
                    return this.hide().then(function () {
                        if (_this.$modal) {
                            _this.$modal.data('bs.modal', null);
                            _this.$modal.remove();
                        }
                    });
                };
                ModalInstance.prototype.show = function () {
                    var promise = toPromise(this.shown);
                    this.resetData();
                    this.$modal.modal();
                    return promise;
                };
                ModalInstance.prototype.hide = function () {
                    if (this.$modal && this.visible) {
                        var promise = toPromise(this.hidden);
                        this.$modal.modal('hide');
                        return promise;
                    }
                    return Promise.resolve(this.result);
                };
                ModalInstance.prototype.init = function () {
                    var _this = this;
                    this.$modal = jQuery(this.element.nativeElement);
                    this.$modal.appendTo('body');
                    this.shown = Observable_1.Observable.fromEvent(this.$modal, this.shownEventName)
                        .map(function () {
                        _this.visible = true;
                    });
                    this.hidden = Observable_1.Observable.fromEvent(this.$modal, this.hiddenEventName)
                        .map(function () {
                        var result = (!_this.result || _this.result === ModalResult.None)
                            ? ModalResult.Dismiss : _this.result;
                        _this.result = ModalResult.None;
                        _this.visible = false;
                        return result;
                    });
                };
                ModalInstance.prototype.resetData = function () {
                    this.$modal.removeData();
                    this.$modal.data('backdrop', booleanOrValue(this.$modal.attr('data-backdrop')));
                    this.$modal.data('keyboard', booleanOrValue(this.$modal.attr('data-keyboard')));
                };
                return ModalInstance;
            }());
            exports_1("ModalInstance", ModalInstance);
            (function (ModalResult) {
                ModalResult[ModalResult["None"] = 0] = "None";
                ModalResult[ModalResult["Close"] = 1] = "Close";
                ModalResult[ModalResult["Dismiss"] = 2] = "Dismiss";
            })(ModalResult || (ModalResult = {}));
            exports_1("ModalResult", ModalResult);
        }
    }
});
System.register("ng2-bs3-modal/components/modal", ['@angular/core', "ng2-bs3-modal/components/modal-instance"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_1, modal_instance_1;
    var ModalComponent, ModalSize;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (modal_instance_1_1) {
                modal_instance_1 = modal_instance_1_1;
            }],
        execute: function() {
            ModalComponent = (function () {
                function ModalComponent(element) {
                    var _this = this;
                    this.element = element;
                    this.overrideSize = null;
                    this.visible = false;
                    this.animation = true;
                    this.backdrop = true;
                    this.keyboard = true;
                    this.cssClass = '';
                    this.onClose = new core_1.EventEmitter(false);
                    this.onDismiss = new core_1.EventEmitter(false);
                    this.onOpen = new core_1.EventEmitter(false);
                    this.instance = new modal_instance_1.ModalInstance(this.element);
                    this.instance.hidden.subscribe(function (result) {
                        _this.visible = _this.instance.visible;
                        if (result === modal_instance_1.ModalResult.Dismiss) {
                            _this.onDismiss.emit(undefined);
                        }
                    });
                    this.instance.shown.subscribe(function () {
                        _this.onOpen.emit(undefined);
                    });
                }
                Object.defineProperty(ModalComponent.prototype, "fadeClass", {
                    get: function () {
                        return this.animation;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ModalComponent.prototype, "dataKeyboardAttr", {
                    get: function () {
                        return this.keyboard;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ModalComponent.prototype, "dataBackdropAttr", {
                    get: function () {
                        return this.backdrop;
                    },
                    enumerable: true,
                    configurable: true
                });
                ModalComponent.prototype.ngOnDestroy = function () {
                    return this.instance && this.instance.destroy();
                };
                ModalComponent.prototype.routerCanDeactivate = function () {
                    return this.ngOnDestroy();
                };
                ModalComponent.prototype.open = function (size) {
                    var _this = this;
                    if (ModalSize.validSize(size))
                        this.overrideSize = size;
                    return this.instance.open().then(function () {
                        _this.visible = _this.instance.visible;
                    });
                };
                ModalComponent.prototype.close = function (value) {
                    var _this = this;
                    return this.instance.close().then(function () {
                        _this.onClose.emit(value);
                    });
                };
                ModalComponent.prototype.dismiss = function () {
                    return this.instance.dismiss();
                };
                ModalComponent.prototype.getCssClasses = function () {
                    var classes = [];
                    if (this.isSmall()) {
                        classes.push('modal-sm');
                    }
                    if (this.isLarge()) {
                        classes.push('modal-lg');
                    }
                    if (this.cssClass !== '') {
                        classes.push(this.cssClass);
                    }
                    return classes.join(' ');
                };
                ModalComponent.prototype.isSmall = function () {
                    return this.overrideSize !== ModalSize.Large
                        && this.size === ModalSize.Small
                        || this.overrideSize === ModalSize.Small;
                };
                ModalComponent.prototype.isLarge = function () {
                    return this.overrideSize !== ModalSize.Small
                        && this.size === ModalSize.Large
                        || this.overrideSize === ModalSize.Large;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], ModalComponent.prototype, "animation", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ModalComponent.prototype, "backdrop", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], ModalComponent.prototype, "keyboard", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ModalComponent.prototype, "size", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ModalComponent.prototype, "cssClass", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], ModalComponent.prototype, "onClose", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], ModalComponent.prototype, "onDismiss", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], ModalComponent.prototype, "onOpen", void 0);
                __decorate([
                    core_1.HostBinding('class.fade'), 
                    __metadata('design:type', Boolean)
                ], ModalComponent.prototype, "fadeClass", null);
                __decorate([
                    core_1.HostBinding('attr.data-keyboard'), 
                    __metadata('design:type', Boolean)
                ], ModalComponent.prototype, "dataKeyboardAttr", null);
                __decorate([
                    core_1.HostBinding('attr.data-backdrop'), 
                    __metadata('design:type', Object)
                ], ModalComponent.prototype, "dataBackdropAttr", null);
                ModalComponent = __decorate([
                    core_1.Component({
                        selector: 'modal',
                        host: {
                            'class': 'modal',
                            'role': 'dialog',
                            'tabindex': '-1'
                        },
                        template: "\n        <div class=\"modal-dialog\" [ngClass]=\"getCssClasses()\">\n            <div class=\"modal-content\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], ModalComponent);
                return ModalComponent;
            }());
            exports_2("ModalComponent", ModalComponent);
            ModalSize = (function () {
                function ModalSize() {
                }
                ModalSize.validSize = function (size) {
                    return size && (size === ModalSize.Small || size === ModalSize.Large);
                };
                ModalSize.Small = 'sm';
                ModalSize.Large = 'lg';
                return ModalSize;
            }());
            exports_2("ModalSize", ModalSize);
        }
    }
});
System.register("ng2-bs3-modal/components/modal-body", ['@angular/core'], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2;
    var ModalBodyComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            ModalBodyComponent = (function () {
                function ModalBodyComponent() {
                }
                ModalBodyComponent = __decorate([
                    core_2.Component({
                        selector: 'modal-body',
                        template: "\n        <div class=\"modal-body\">\n            <ng-content></ng-content>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ModalBodyComponent);
                return ModalBodyComponent;
            }());
            exports_3("ModalBodyComponent", ModalBodyComponent);
        }
    }
});
/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
System.register("ng2-bs3-modal/components/modal-body.ngfactory", ['@angular/core/src/linker/view', '@angular/core/src/linker/element', "ng2-bs3-modal/components/modal-body", '@angular/core/src/linker/view_utils', '@angular/core/src/linker/view_type', '@angular/core/src/change_detection/change_detection', '@angular/core/src/metadata/view', '@angular/core/src/linker/component_factory'], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var import1, import2, import3, import4, import6, import7, import8, import9;
    var renderType_ModalBodyComponent_Host, _View_ModalBodyComponent_Host0, ModalBodyComponentNgFactory, styles_ModalBodyComponent, renderType_ModalBodyComponent, _View_ModalBodyComponent0;
    function viewFactory_ModalBodyComponent_Host0(viewUtils, parentInjector, declarationEl) {
        if ((renderType_ModalBodyComponent_Host === null)) {
            (renderType_ModalBodyComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
        }
        return new _View_ModalBodyComponent_Host0(viewUtils, parentInjector, declarationEl);
    }
    function viewFactory_ModalBodyComponent0(viewUtils, parentInjector, declarationEl) {
        if ((renderType_ModalBodyComponent === null)) {
            (renderType_ModalBodyComponent = viewUtils.createRenderComponentType('/Users/doug/Source/dougludlow/ng2-bs3-modal/src/ng2-bs3-modal/components/modal-body.ts class ModalBodyComponent - inline template', 1, import8.ViewEncapsulation.None, styles_ModalBodyComponent, {}));
        }
        return new _View_ModalBodyComponent0(viewUtils, parentInjector, declarationEl);
    }
    exports_4("viewFactory_ModalBodyComponent0", viewFactory_ModalBodyComponent0);
    return {
        setters:[
            function (import1_1) {
                import1 = import1_1;
            },
            function (import2_1) {
                import2 = import2_1;
            },
            function (import3_1) {
                import3 = import3_1;
            },
            function (import4_1) {
                import4 = import4_1;
            },
            function (import6_1) {
                import6 = import6_1;
            },
            function (import7_1) {
                import7 = import7_1;
            },
            function (import8_1) {
                import8 = import8_1;
            },
            function (import9_1) {
                import9 = import9_1;
            }],
        execute: function() {
            renderType_ModalBodyComponent_Host = null;
            _View_ModalBodyComponent_Host0 = (function (_super) {
                __extends(_View_ModalBodyComponent_Host0, _super);
                function _View_ModalBodyComponent_Host0(viewUtils, parentInjector, declarationEl) {
                    _super.call(this, _View_ModalBodyComponent_Host0, renderType_ModalBodyComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
                }
                _View_ModalBodyComponent_Host0.prototype.createInternal = function (rootSelector) {
                    this._el_0 = this.selectOrCreateHostElement('modal-body', rootSelector, null);
                    this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
                    var compView_0 = viewFactory_ModalBodyComponent0(this.viewUtils, this.injector(0), this._appEl_0);
                    this._ModalBodyComponent_0_4 = new import3.ModalBodyComponent();
                    this._appEl_0.initComponent(this._ModalBodyComponent_0_4, [], compView_0);
                    compView_0.create(this._ModalBodyComponent_0_4, this.projectableNodes, null);
                    this.init([].concat([this._el_0]), [this._el_0], [], []);
                    return this._appEl_0;
                };
                _View_ModalBodyComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
                    if (((token === import3.ModalBodyComponent) && (0 === requestNodeIndex))) {
                        return this._ModalBodyComponent_0_4;
                    }
                    return notFoundResult;
                };
                return _View_ModalBodyComponent_Host0;
            }(import1.AppView));
            exports_4("ModalBodyComponentNgFactory", ModalBodyComponentNgFactory = new import9.ComponentFactory('modal-body', viewFactory_ModalBodyComponent_Host0, import3.ModalBodyComponent));
            styles_ModalBodyComponent = [];
            renderType_ModalBodyComponent = null;
            _View_ModalBodyComponent0 = (function (_super) {
                __extends(_View_ModalBodyComponent0, _super);
                function _View_ModalBodyComponent0(viewUtils, parentInjector, declarationEl) {
                    _super.call(this, _View_ModalBodyComponent0, renderType_ModalBodyComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
                }
                _View_ModalBodyComponent0.prototype.createInternal = function (rootSelector) {
                    var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
                    this._text_0 = this.renderer.createText(parentRenderNode, '\n        ', null);
                    this._el_1 = this.renderer.createElement(parentRenderNode, 'div', null);
                    this.renderer.setElementAttribute(this._el_1, 'class', 'modal-body');
                    this._text_2 = this.renderer.createText(this._el_1, '\n            ', null);
                    this.renderer.projectNodes(this._el_1, import4.flattenNestedViewRenderNodes(this.projectableNodes[0]));
                    this._text_3 = this.renderer.createText(this._el_1, '\n        ', null);
                    this._text_4 = this.renderer.createText(parentRenderNode, '\n    ', null);
                    this.init([], [
                        this._text_0,
                        this._el_1,
                        this._text_2,
                        this._text_3,
                        this._text_4
                    ], [], []);
                    return null;
                };
                return _View_ModalBodyComponent0;
            }(import1.AppView));
        }
    }
});
System.register("ng2-bs3-modal/components/modal-footer", ['@angular/core', "ng2-bs3-modal/components/modal"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_3, modal_1;
    var ModalFooterComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (modal_1_1) {
                modal_1 = modal_1_1;
            }],
        execute: function() {
            ModalFooterComponent = (function () {
                function ModalFooterComponent(modal) {
                    this.modal = modal;
                    this.showDefaultButtons = false;
                    this.dismissButtonLabel = 'Dismiss';
                    this.closeButtonLabel = 'Close';
                }
                __decorate([
                    core_3.Input('show-default-buttons'), 
                    __metadata('design:type', Boolean)
                ], ModalFooterComponent.prototype, "showDefaultButtons", void 0);
                __decorate([
                    core_3.Input('dismiss-button-label'), 
                    __metadata('design:type', String)
                ], ModalFooterComponent.prototype, "dismissButtonLabel", void 0);
                __decorate([
                    core_3.Input('close-button-label'), 
                    __metadata('design:type', String)
                ], ModalFooterComponent.prototype, "closeButtonLabel", void 0);
                ModalFooterComponent = __decorate([
                    core_3.Component({
                        selector: 'modal-footer',
                        template: "\n        <div class=\"modal-footer\">\n            <ng-content></ng-content>\n            <button *ngIf=\"showDefaultButtons\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"modal.dismiss()\">{{dismissButtonLabel}}</button>\n            <button *ngIf=\"showDefaultButtons\" type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close()\">{{closeButtonLabel}}</button>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [modal_1.ModalComponent])
                ], ModalFooterComponent);
                return ModalFooterComponent;
            }());
            exports_5("ModalFooterComponent", ModalFooterComponent);
        }
    }
});
/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
System.register("ng2-bs3-modal/components/modal-footer.ngfactory", ['@angular/core/src/linker/view', '@angular/core/src/linker/element', "ng2-bs3-modal/components/modal-footer", '@angular/core/src/linker/view_utils', '@angular/core/src/linker/view_type', '@angular/core/src/change_detection/change_detection', "ng2-bs3-modal/components/modal", '@angular/core/src/metadata/view', '@angular/core/src/linker/component_factory', '@angular/common/src/directives/ng_if', '@angular/core/src/linker/template_ref'], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var import1, import2, import3, import4, import6, import7, import8, import9, import10, import11, import12;
    var renderType_ModalFooterComponent_Host, _View_ModalFooterComponent_Host0, ModalFooterComponentNgFactory, styles_ModalFooterComponent, renderType_ModalFooterComponent, _View_ModalFooterComponent0, _View_ModalFooterComponent1, _View_ModalFooterComponent2;
    function viewFactory_ModalFooterComponent_Host0(viewUtils, parentInjector, declarationEl) {
        if ((renderType_ModalFooterComponent_Host === null)) {
            (renderType_ModalFooterComponent_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
        }
        return new _View_ModalFooterComponent_Host0(viewUtils, parentInjector, declarationEl);
    }
    function viewFactory_ModalFooterComponent0(viewUtils, parentInjector, declarationEl) {
        if ((renderType_ModalFooterComponent === null)) {
            (renderType_ModalFooterComponent = viewUtils.createRenderComponentType('/Users/doug/Source/dougludlow/ng2-bs3-modal/src/ng2-bs3-modal/components/modal-footer.ts class ModalFooterComponent - inline template', 1, import9.ViewEncapsulation.None, styles_ModalFooterComponent, {}));
        }
        return new _View_ModalFooterComponent0(viewUtils, parentInjector, declarationEl);
    }
    exports_6("viewFactory_ModalFooterComponent0", viewFactory_ModalFooterComponent0);
    function viewFactory_ModalFooterComponent1(viewUtils, parentInjector, declarationEl) {
        return new _View_ModalFooterComponent1(viewUtils, parentInjector, declarationEl);
    }
    function viewFactory_ModalFooterComponent2(viewUtils, parentInjector, declarationEl) {
        return new _View_ModalFooterComponent2(viewUtils, parentInjector, declarationEl);
    }
    return {
        setters:[
            function (import1_2) {
                import1 = import1_2;
            },
            function (import2_2) {
                import2 = import2_2;
            },
            function (import3_2) {
                import3 = import3_2;
            },
            function (import4_2) {
                import4 = import4_2;
            },
            function (import6_2) {
                import6 = import6_2;
            },
            function (import7_2) {
                import7 = import7_2;
            },
            function (import8_2) {
                import8 = import8_2;
            },
            function (import9_2) {
                import9 = import9_2;
            },
            function (import10_1) {
                import10 = import10_1;
            },
            function (import11_1) {
                import11 = import11_1;
            },
            function (import12_1) {
                import12 = import12_1;
            }],
        execute: function() {
            renderType_ModalFooterComponent_Host = null;
            _View_ModalFooterComponent_Host0 = (function (_super) {
                __extends(_View_ModalFooterComponent_Host0, _super);
                function _View_ModalFooterComponent_Host0(viewUtils, parentInjector, declarationEl) {
                    _super.call(this, _View_ModalFooterComponent_Host0, renderType_ModalFooterComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
                }
                _View_ModalFooterComponent_Host0.prototype.createInternal = function (rootSelector) {
                    this._el_0 = this.selectOrCreateHostElement('modal-footer', rootSelector, null);
                    this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
                    var compView_0 = viewFactory_ModalFooterComponent0(this.viewUtils, this.injector(0), this._appEl_0);
                    this._ModalFooterComponent_0_4 = new import3.ModalFooterComponent(this.parentInjector.get(import8.ModalComponent));
                    this._appEl_0.initComponent(this._ModalFooterComponent_0_4, [], compView_0);
                    compView_0.create(this._ModalFooterComponent_0_4, this.projectableNodes, null);
                    this.init([].concat([this._el_0]), [this._el_0], [], []);
                    return this._appEl_0;
                };
                _View_ModalFooterComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
                    if (((token === import3.ModalFooterComponent) && (0 === requestNodeIndex))) {
                        return this._ModalFooterComponent_0_4;
                    }
                    return notFoundResult;
                };
                return _View_ModalFooterComponent_Host0;
            }(import1.AppView));
            exports_6("ModalFooterComponentNgFactory", ModalFooterComponentNgFactory = new import10.ComponentFactory('modal-footer', viewFactory_ModalFooterComponent_Host0, import3.ModalFooterComponent));
            styles_ModalFooterComponent = [];
            renderType_ModalFooterComponent = null;
            _View_ModalFooterComponent0 = (function (_super) {
                __extends(_View_ModalFooterComponent0, _super);
                function _View_ModalFooterComponent0(viewUtils, parentInjector, declarationEl) {
                    _super.call(this, _View_ModalFooterComponent0, renderType_ModalFooterComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
                }
                _View_ModalFooterComponent0.prototype.createInternal = function (rootSelector) {
                    var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
                    this._text_0 = this.renderer.createText(parentRenderNode, '\n        ', null);
                    this._el_1 = this.renderer.createElement(parentRenderNode, 'div', null);
                    this.renderer.setElementAttribute(this._el_1, 'class', 'modal-footer');
                    this._text_2 = this.renderer.createText(this._el_1, '\n            ', null);
                    this.renderer.projectNodes(this._el_1, import4.flattenNestedViewRenderNodes(this.projectableNodes[0]));
                    this._text_3 = this.renderer.createText(this._el_1, '\n            ', null);
                    this._anchor_4 = this.renderer.createTemplateAnchor(this._el_1, null);
                    this._appEl_4 = new import2.AppElement(4, 1, this, this._anchor_4);
                    this._TemplateRef_4_5 = new import12.TemplateRef_(this._appEl_4, viewFactory_ModalFooterComponent1);
                    this._NgIf_4_6 = new import11.NgIf(this._appEl_4.vcRef, this._TemplateRef_4_5);
                    this._text_5 = this.renderer.createText(this._el_1, '\n            ', null);
                    this._anchor_6 = this.renderer.createTemplateAnchor(this._el_1, null);
                    this._appEl_6 = new import2.AppElement(6, 1, this, this._anchor_6);
                    this._TemplateRef_6_5 = new import12.TemplateRef_(this._appEl_6, viewFactory_ModalFooterComponent2);
                    this._NgIf_6_6 = new import11.NgIf(this._appEl_6.vcRef, this._TemplateRef_6_5);
                    this._text_7 = this.renderer.createText(this._el_1, '\n        ', null);
                    this._text_8 = this.renderer.createText(parentRenderNode, '\n    ', null);
                    this._expr_0 = import7.UNINITIALIZED;
                    this._expr_1 = import7.UNINITIALIZED;
                    this.init([], [
                        this._text_0,
                        this._el_1,
                        this._text_2,
                        this._text_3,
                        this._anchor_4,
                        this._text_5,
                        this._anchor_6,
                        this._text_7,
                        this._text_8
                    ], [], []);
                    return null;
                };
                _View_ModalFooterComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
                    if (((token === import12.TemplateRef) && (4 === requestNodeIndex))) {
                        return this._TemplateRef_4_5;
                    }
                    if (((token === import11.NgIf) && (4 === requestNodeIndex))) {
                        return this._NgIf_4_6;
                    }
                    if (((token === import12.TemplateRef) && (6 === requestNodeIndex))) {
                        return this._TemplateRef_6_5;
                    }
                    if (((token === import11.NgIf) && (6 === requestNodeIndex))) {
                        return this._NgIf_6_6;
                    }
                    return notFoundResult;
                };
                _View_ModalFooterComponent0.prototype.detectChangesInternal = function (throwOnChange) {
                    var currVal_0 = this.context.showDefaultButtons;
                    if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
                        this._NgIf_4_6.ngIf = currVal_0;
                        this._expr_0 = currVal_0;
                    }
                    var currVal_1 = this.context.showDefaultButtons;
                    if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
                        this._NgIf_6_6.ngIf = currVal_1;
                        this._expr_1 = currVal_1;
                    }
                    this.detectContentChildrenChanges(throwOnChange);
                    this.detectViewChildrenChanges(throwOnChange);
                };
                return _View_ModalFooterComponent0;
            }(import1.AppView));
            _View_ModalFooterComponent1 = (function (_super) {
                __extends(_View_ModalFooterComponent1, _super);
                function _View_ModalFooterComponent1(viewUtils, parentInjector, declarationEl) {
                    _super.call(this, _View_ModalFooterComponent1, renderType_ModalFooterComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
                }
                _View_ModalFooterComponent1.prototype.createInternal = function (rootSelector) {
                    this._el_0 = this.renderer.createElement(null, 'button', null);
                    this.renderer.setElementAttribute(this._el_0, 'class', 'btn btn-default');
                    this.renderer.setElementAttribute(this._el_0, 'data-dismiss', 'modal');
                    this.renderer.setElementAttribute(this._el_0, 'type', 'button');
                    this._text_1 = this.renderer.createText(this._el_0, '', null);
                    var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
                    this._expr_1 = import7.UNINITIALIZED;
                    this.init([].concat([this._el_0]), [
                        this._el_0,
                        this._text_1
                    ], [disposable_0], []);
                    return null;
                };
                _View_ModalFooterComponent1.prototype.detectChangesInternal = function (throwOnChange) {
                    this.detectContentChildrenChanges(throwOnChange);
                    var currVal_1 = import4.interpolate(1, '', this.parent.context.dismissButtonLabel, '');
                    if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
                        this.renderer.setText(this._text_1, currVal_1);
                        this._expr_1 = currVal_1;
                    }
                    this.detectViewChildrenChanges(throwOnChange);
                };
                _View_ModalFooterComponent1.prototype._handle_click_0_0 = function ($event) {
                    this.markPathToRootAsCheckOnce();
                    var pd_0 = (this.parent.context.modal.dismiss() !== false);
                    return (true && pd_0);
                };
                return _View_ModalFooterComponent1;
            }(import1.AppView));
            _View_ModalFooterComponent2 = (function (_super) {
                __extends(_View_ModalFooterComponent2, _super);
                function _View_ModalFooterComponent2(viewUtils, parentInjector, declarationEl) {
                    _super.call(this, _View_ModalFooterComponent2, renderType_ModalFooterComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
                }
                _View_ModalFooterComponent2.prototype.createInternal = function (rootSelector) {
                    this._el_0 = this.renderer.createElement(null, 'button', null);
                    this.renderer.setElementAttribute(this._el_0, 'class', 'btn btn-primary');
                    this.renderer.setElementAttribute(this._el_0, 'type', 'button');
                    this._text_1 = this.renderer.createText(this._el_0, '', null);
                    var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
                    this._expr_1 = import7.UNINITIALIZED;
                    this.init([].concat([this._el_0]), [
                        this._el_0,
                        this._text_1
                    ], [disposable_0], []);
                    return null;
                };
                _View_ModalFooterComponent2.prototype.detectChangesInternal = function (throwOnChange) {
                    this.detectContentChildrenChanges(throwOnChange);
                    var currVal_1 = import4.interpolate(1, '', this.parent.context.closeButtonLabel, '');
                    if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
                        this.renderer.setText(this._text_1, currVal_1);
                        this._expr_1 = currVal_1;
                    }
                    this.detectViewChildrenChanges(throwOnChange);
                };
                _View_ModalFooterComponent2.prototype._handle_click_0_0 = function ($event) {
                    this.markPathToRootAsCheckOnce();
                    var pd_0 = (this.parent.context.modal.close() !== false);
                    return (true && pd_0);
                };
                return _View_ModalFooterComponent2;
            }(import1.AppView));
        }
    }
});
System.register("ng2-bs3-modal/components/modal-header", ['@angular/core', "ng2-bs3-modal/components/modal"], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_4, modal_2;
    var ModalHeaderComponent;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (modal_2_1) {
                modal_2 = modal_2_1;
            }],
        execute: function() {
            ModalHeaderComponent = (function () {
                function ModalHeaderComponent(modal) {
                    this.modal = modal;
                    this.showClose = false;
                }
                __decorate([
                    core_4.Input('show-close'), 
                    __metadata('design:type', Boolean)
                ], ModalHeaderComponent.prototype, "showClose", void 0);
                ModalHeaderComponent = __decorate([
                    core_4.Component({
                        selector: 'modal-header',
                        template: "\n        <div class=\"modal-header\">\n            <button *ngIf=\"showClose\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <ng-content></ng-content>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [modal_2.ModalComponent])
                ], ModalHeaderComponent);
                return ModalHeaderComponent;
            }());
            exports_7("ModalHeaderComponent", ModalHeaderComponent);
        }
    }
});
/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
System.register("ng2-bs3-modal/components/modal-header.ngfactory", ['@angular/core/src/linker/view', '@angular/core/src/linker/element', "ng2-bs3-modal/components/modal-header", '@angular/core/src/linker/view_utils', '@angular/core/src/linker/view_type', '@angular/core/src/change_detection/change_detection', "ng2-bs3-modal/components/modal", '@angular/core/src/metadata/view', '@angular/core/src/linker/component_factory', '@angular/common/src/directives/ng_if', '@angular/core/src/linker/template_ref'], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var import1, import2, import3, import4, import6, import7, import8, import9, import10, import11, import12;
    var renderType_ModalHeaderComponent_Host, _View_ModalHeaderComponent_Host0, ModalHeaderComponentNgFactory, styles_ModalHeaderComponent, renderType_ModalHeaderComponent, _View_ModalHeaderComponent0, _View_ModalHeaderComponent1;
    function viewFactory_ModalHeaderComponent_Host0(viewUtils, parentInjector, declarationEl) {
        if ((renderType_ModalHeaderComponent_Host === null)) {
            (renderType_ModalHeaderComponent_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
        }
        return new _View_ModalHeaderComponent_Host0(viewUtils, parentInjector, declarationEl);
    }
    function viewFactory_ModalHeaderComponent0(viewUtils, parentInjector, declarationEl) {
        if ((renderType_ModalHeaderComponent === null)) {
            (renderType_ModalHeaderComponent = viewUtils.createRenderComponentType('/Users/doug/Source/dougludlow/ng2-bs3-modal/src/ng2-bs3-modal/components/modal-header.ts class ModalHeaderComponent - inline template', 1, import9.ViewEncapsulation.None, styles_ModalHeaderComponent, {}));
        }
        return new _View_ModalHeaderComponent0(viewUtils, parentInjector, declarationEl);
    }
    exports_8("viewFactory_ModalHeaderComponent0", viewFactory_ModalHeaderComponent0);
    function viewFactory_ModalHeaderComponent1(viewUtils, parentInjector, declarationEl) {
        return new _View_ModalHeaderComponent1(viewUtils, parentInjector, declarationEl);
    }
    return {
        setters:[
            function (import1_3) {
                import1 = import1_3;
            },
            function (import2_3) {
                import2 = import2_3;
            },
            function (import3_3) {
                import3 = import3_3;
            },
            function (import4_3) {
                import4 = import4_3;
            },
            function (import6_3) {
                import6 = import6_3;
            },
            function (import7_3) {
                import7 = import7_3;
            },
            function (import8_3) {
                import8 = import8_3;
            },
            function (import9_3) {
                import9 = import9_3;
            },
            function (import10_2) {
                import10 = import10_2;
            },
            function (import11_2) {
                import11 = import11_2;
            },
            function (import12_2) {
                import12 = import12_2;
            }],
        execute: function() {
            renderType_ModalHeaderComponent_Host = null;
            _View_ModalHeaderComponent_Host0 = (function (_super) {
                __extends(_View_ModalHeaderComponent_Host0, _super);
                function _View_ModalHeaderComponent_Host0(viewUtils, parentInjector, declarationEl) {
                    _super.call(this, _View_ModalHeaderComponent_Host0, renderType_ModalHeaderComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
                }
                _View_ModalHeaderComponent_Host0.prototype.createInternal = function (rootSelector) {
                    this._el_0 = this.selectOrCreateHostElement('modal-header', rootSelector, null);
                    this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
                    var compView_0 = viewFactory_ModalHeaderComponent0(this.viewUtils, this.injector(0), this._appEl_0);
                    this._ModalHeaderComponent_0_4 = new import3.ModalHeaderComponent(this.parentInjector.get(import8.ModalComponent));
                    this._appEl_0.initComponent(this._ModalHeaderComponent_0_4, [], compView_0);
                    compView_0.create(this._ModalHeaderComponent_0_4, this.projectableNodes, null);
                    this.init([].concat([this._el_0]), [this._el_0], [], []);
                    return this._appEl_0;
                };
                _View_ModalHeaderComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
                    if (((token === import3.ModalHeaderComponent) && (0 === requestNodeIndex))) {
                        return this._ModalHeaderComponent_0_4;
                    }
                    return notFoundResult;
                };
                return _View_ModalHeaderComponent_Host0;
            }(import1.AppView));
            exports_8("ModalHeaderComponentNgFactory", ModalHeaderComponentNgFactory = new import10.ComponentFactory('modal-header', viewFactory_ModalHeaderComponent_Host0, import3.ModalHeaderComponent));
            styles_ModalHeaderComponent = [];
            renderType_ModalHeaderComponent = null;
            _View_ModalHeaderComponent0 = (function (_super) {
                __extends(_View_ModalHeaderComponent0, _super);
                function _View_ModalHeaderComponent0(viewUtils, parentInjector, declarationEl) {
                    _super.call(this, _View_ModalHeaderComponent0, renderType_ModalHeaderComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
                }
                _View_ModalHeaderComponent0.prototype.createInternal = function (rootSelector) {
                    var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
                    this._text_0 = this.renderer.createText(parentRenderNode, '\n        ', null);
                    this._el_1 = this.renderer.createElement(parentRenderNode, 'div', null);
                    this.renderer.setElementAttribute(this._el_1, 'class', 'modal-header');
                    this._text_2 = this.renderer.createText(this._el_1, '\n            ', null);
                    this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1, null);
                    this._appEl_3 = new import2.AppElement(3, 1, this, this._anchor_3);
                    this._TemplateRef_3_5 = new import12.TemplateRef_(this._appEl_3, viewFactory_ModalHeaderComponent1);
                    this._NgIf_3_6 = new import11.NgIf(this._appEl_3.vcRef, this._TemplateRef_3_5);
                    this._text_4 = this.renderer.createText(this._el_1, '\n            ', null);
                    this.renderer.projectNodes(this._el_1, import4.flattenNestedViewRenderNodes(this.projectableNodes[0]));
                    this._text_5 = this.renderer.createText(this._el_1, '\n        ', null);
                    this._text_6 = this.renderer.createText(parentRenderNode, '\n    ', null);
                    this._expr_0 = import7.UNINITIALIZED;
                    this.init([], [
                        this._text_0,
                        this._el_1,
                        this._text_2,
                        this._anchor_3,
                        this._text_4,
                        this._text_5,
                        this._text_6
                    ], [], []);
                    return null;
                };
                _View_ModalHeaderComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
                    if (((token === import12.TemplateRef) && (3 === requestNodeIndex))) {
                        return this._TemplateRef_3_5;
                    }
                    if (((token === import11.NgIf) && (3 === requestNodeIndex))) {
                        return this._NgIf_3_6;
                    }
                    return notFoundResult;
                };
                _View_ModalHeaderComponent0.prototype.detectChangesInternal = function (throwOnChange) {
                    var currVal_0 = this.context.showClose;
                    if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
                        this._NgIf_3_6.ngIf = currVal_0;
                        this._expr_0 = currVal_0;
                    }
                    this.detectContentChildrenChanges(throwOnChange);
                    this.detectViewChildrenChanges(throwOnChange);
                };
                return _View_ModalHeaderComponent0;
            }(import1.AppView));
            _View_ModalHeaderComponent1 = (function (_super) {
                __extends(_View_ModalHeaderComponent1, _super);
                function _View_ModalHeaderComponent1(viewUtils, parentInjector, declarationEl) {
                    _super.call(this, _View_ModalHeaderComponent1, renderType_ModalHeaderComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
                }
                _View_ModalHeaderComponent1.prototype.createInternal = function (rootSelector) {
                    this._el_0 = this.renderer.createElement(null, 'button', null);
                    this.renderer.setElementAttribute(this._el_0, 'aria-label', 'Close');
                    this.renderer.setElementAttribute(this._el_0, 'class', 'close');
                    this.renderer.setElementAttribute(this._el_0, 'data-dismiss', 'modal');
                    this.renderer.setElementAttribute(this._el_0, 'type', 'button');
                    this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
                    this._el_2 = this.renderer.createElement(this._el_0, 'span', null);
                    this.renderer.setElementAttribute(this._el_2, 'aria-hidden', 'true');
                    this._text_3 = this.renderer.createText(this._el_2, '×', null);
                    this._text_4 = this.renderer.createText(this._el_0, '\n            ', null);
                    var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
                    this.init([].concat([this._el_0]), [
                        this._el_0,
                        this._text_1,
                        this._el_2,
                        this._text_3,
                        this._text_4
                    ], [disposable_0], []);
                    return null;
                };
                _View_ModalHeaderComponent1.prototype._handle_click_0_0 = function ($event) {
                    this.markPathToRootAsCheckOnce();
                    var pd_0 = (this.parent.context.modal.dismiss() !== false);
                    return (true && pd_0);
                };
                return _View_ModalHeaderComponent1;
            }(import1.AppView));
        }
    }
});
/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
System.register("ng2-bs3-modal/components/modal.ngfactory", ['@angular/core/src/linker/view', '@angular/core/src/linker/element', "ng2-bs3-modal/components/modal", '@angular/core/src/linker/view_utils', '@angular/core/src/linker/view_type', '@angular/core/src/change_detection/change_detection', '@angular/core/src/linker/element_ref', '@angular/core/src/metadata/view', '@angular/core/src/linker/component_factory', '@angular/common/src/directives/ng_class', '@angular/core/src/change_detection/differs/iterable_differs', '@angular/core/src/change_detection/differs/keyvalue_differs'], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var import1, import2, import3, import4, import6, import7, import8, import9, import10, import11, import12, import13;
    var renderType_ModalComponent_Host, _View_ModalComponent_Host0, ModalComponentNgFactory, styles_ModalComponent, renderType_ModalComponent, _View_ModalComponent0;
    function viewFactory_ModalComponent_Host0(viewUtils, parentInjector, declarationEl) {
        if ((renderType_ModalComponent_Host === null)) {
            (renderType_ModalComponent_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
        }
        return new _View_ModalComponent_Host0(viewUtils, parentInjector, declarationEl);
    }
    function viewFactory_ModalComponent0(viewUtils, parentInjector, declarationEl) {
        if ((renderType_ModalComponent === null)) {
            (renderType_ModalComponent = viewUtils.createRenderComponentType('/Users/doug/Source/dougludlow/ng2-bs3-modal/src/ng2-bs3-modal/components/modal.ts class ModalComponent - inline template', 1, import9.ViewEncapsulation.None, styles_ModalComponent, {}));
        }
        return new _View_ModalComponent0(viewUtils, parentInjector, declarationEl);
    }
    exports_9("viewFactory_ModalComponent0", viewFactory_ModalComponent0);
    return {
        setters:[
            function (import1_4) {
                import1 = import1_4;
            },
            function (import2_4) {
                import2 = import2_4;
            },
            function (import3_4) {
                import3 = import3_4;
            },
            function (import4_4) {
                import4 = import4_4;
            },
            function (import6_4) {
                import6 = import6_4;
            },
            function (import7_4) {
                import7 = import7_4;
            },
            function (import8_4) {
                import8 = import8_4;
            },
            function (import9_4) {
                import9 = import9_4;
            },
            function (import10_3) {
                import10 = import10_3;
            },
            function (import11_3) {
                import11 = import11_3;
            },
            function (import12_3) {
                import12 = import12_3;
            },
            function (import13_1) {
                import13 = import13_1;
            }],
        execute: function() {
            renderType_ModalComponent_Host = null;
            _View_ModalComponent_Host0 = (function (_super) {
                __extends(_View_ModalComponent_Host0, _super);
                function _View_ModalComponent_Host0(viewUtils, parentInjector, declarationEl) {
                    _super.call(this, _View_ModalComponent_Host0, renderType_ModalComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
                }
                _View_ModalComponent_Host0.prototype.createInternal = function (rootSelector) {
                    this._el_0 = this.selectOrCreateHostElement('modal', rootSelector, null);
                    this.renderer.setElementAttribute(this._el_0, 'class', 'modal');
                    this.renderer.setElementAttribute(this._el_0, 'role', 'dialog');
                    this.renderer.setElementAttribute(this._el_0, 'tabindex', '-1');
                    this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
                    var compView_0 = viewFactory_ModalComponent0(this.viewUtils, this.injector(0), this._appEl_0);
                    this._ModalComponent_0_4 = new import3.ModalComponent(new import8.ElementRef(this._el_0));
                    this._appEl_0.initComponent(this._ModalComponent_0_4, [], compView_0);
                    compView_0.create(this._ModalComponent_0_4, this.projectableNodes, null);
                    this._expr_0 = import7.UNINITIALIZED;
                    this._expr_1 = import7.UNINITIALIZED;
                    this._expr_2 = import7.UNINITIALIZED;
                    this.init([].concat([this._el_0]), [this._el_0], [], []);
                    return this._appEl_0;
                };
                _View_ModalComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
                    if (((token === import3.ModalComponent) && (0 === requestNodeIndex))) {
                        return this._ModalComponent_0_4;
                    }
                    return notFoundResult;
                };
                _View_ModalComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
                    this.detectContentChildrenChanges(throwOnChange);
                    var currVal_0 = this._ModalComponent_0_4.fadeClass;
                    if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
                        this.renderer.setElementClass(this._el_0, 'fade', currVal_0);
                        this._expr_0 = currVal_0;
                    }
                    var currVal_1 = this._ModalComponent_0_4.dataKeyboardAttr;
                    if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
                        this.renderer.setElementAttribute(this._el_0, 'data-keyboard', ((currVal_1 == null) ? null : currVal_1.toString()));
                        this._expr_1 = currVal_1;
                    }
                    var currVal_2 = this._ModalComponent_0_4.dataBackdropAttr;
                    if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
                        this.renderer.setElementAttribute(this._el_0, 'data-backdrop', ((currVal_2 == null) ? null : currVal_2.toString()));
                        this._expr_2 = currVal_2;
                    }
                    this.detectViewChildrenChanges(throwOnChange);
                };
                _View_ModalComponent_Host0.prototype.destroyInternal = function () {
                    this._ModalComponent_0_4.ngOnDestroy();
                };
                return _View_ModalComponent_Host0;
            }(import1.AppView));
            exports_9("ModalComponentNgFactory", ModalComponentNgFactory = new import10.ComponentFactory('modal', viewFactory_ModalComponent_Host0, import3.ModalComponent));
            styles_ModalComponent = [];
            renderType_ModalComponent = null;
            _View_ModalComponent0 = (function (_super) {
                __extends(_View_ModalComponent0, _super);
                function _View_ModalComponent0(viewUtils, parentInjector, declarationEl) {
                    _super.call(this, _View_ModalComponent0, renderType_ModalComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
                }
                _View_ModalComponent0.prototype.createInternal = function (rootSelector) {
                    var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
                    this._text_0 = this.renderer.createText(parentRenderNode, '\n        ', null);
                    this._el_1 = this.renderer.createElement(parentRenderNode, 'div', null);
                    this.renderer.setElementAttribute(this._el_1, 'class', 'modal-dialog');
                    this._NgClass_1_3 = new import11.NgClass(this.parentInjector.get(import12.IterableDiffers), this.parentInjector.get(import13.KeyValueDiffers), new import8.ElementRef(this._el_1), this.renderer);
                    this._text_2 = this.renderer.createText(this._el_1, '\n            ', null);
                    this._el_3 = this.renderer.createElement(this._el_1, 'div', null);
                    this.renderer.setElementAttribute(this._el_3, 'class', 'modal-content');
                    this._text_4 = this.renderer.createText(this._el_3, '\n                ', null);
                    this.renderer.projectNodes(this._el_3, import4.flattenNestedViewRenderNodes(this.projectableNodes[0]));
                    this._text_5 = this.renderer.createText(this._el_3, '\n            ', null);
                    this._text_6 = this.renderer.createText(this._el_1, '\n        ', null);
                    this._text_7 = this.renderer.createText(parentRenderNode, '\n    ', null);
                    this._expr_0 = import7.UNINITIALIZED;
                    this._expr_1 = import7.UNINITIALIZED;
                    this.init([], [
                        this._text_0,
                        this._el_1,
                        this._text_2,
                        this._el_3,
                        this._text_4,
                        this._text_5,
                        this._text_6,
                        this._text_7
                    ], [], []);
                    return null;
                };
                _View_ModalComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
                    if (((token === import11.NgClass) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
                        return this._NgClass_1_3;
                    }
                    return notFoundResult;
                };
                _View_ModalComponent0.prototype.detectChangesInternal = function (throwOnChange) {
                    var currVal_0 = 'modal-dialog';
                    if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
                        this._NgClass_1_3.klass = currVal_0;
                        this._expr_0 = currVal_0;
                    }
                    var currVal_1 = this.context.getCssClasses();
                    if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
                        this._NgClass_1_3.ngClass = currVal_1;
                        this._expr_1 = currVal_1;
                    }
                    if (!throwOnChange) {
                        this._NgClass_1_3.ngDoCheck();
                    }
                    this.detectContentChildrenChanges(throwOnChange);
                    this.detectViewChildrenChanges(throwOnChange);
                };
                return _View_ModalComponent0;
            }(import1.AppView));
        }
    }
});
System.register("ng2-bs3-modal/directives/autofocus", ['@angular/core', "ng2-bs3-modal/components/modal"], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var core_5, modal_3;
    var AutofocusDirective;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (modal_3_1) {
                modal_3 = modal_3_1;
            }],
        execute: function() {
            AutofocusDirective = (function () {
                function AutofocusDirective(el, modal) {
                    var _this = this;
                    this.el = el;
                    this.modal = modal;
                    if (modal) {
                        this.modal.onOpen.subscribe(function () {
                            _this.el.nativeElement.focus();
                        });
                    }
                }
                AutofocusDirective = __decorate([
                    core_5.Directive({
                        selector: '[autofocus]'
                    }),
                    __param(1, core_5.Optional()), 
                    __metadata('design:paramtypes', [core_5.ElementRef, modal_3.ModalComponent])
                ], AutofocusDirective);
                return AutofocusDirective;
            }());
            exports_10("AutofocusDirective", AutofocusDirective);
        }
    }
});
System.register("ng2-bs3-modal/ng2-bs3-modal", ['@angular/core', '@angular/common', "ng2-bs3-modal/components/modal", "ng2-bs3-modal/components/modal-header", "ng2-bs3-modal/components/modal-body", "ng2-bs3-modal/components/modal-footer", "ng2-bs3-modal/directives/autofocus", "ng2-bs3-modal/components/modal-instance"], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var core_6, common_1, modal_4, modal_header_1, modal_body_1, modal_footer_1, autofocus_1;
    var Ng2Bs3ModalModule;
    var exportedNames_1 = {
        'Ng2Bs3ModalModule': true
    };
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default"&& !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_11(exports);
    }
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (modal_4_1) {
                modal_4 = modal_4_1;
                exportStar_1(modal_4_1);
            },
            function (modal_header_1_1) {
                modal_header_1 = modal_header_1_1;
                exportStar_1(modal_header_1_1);
            },
            function (modal_body_1_1) {
                modal_body_1 = modal_body_1_1;
                exportStar_1(modal_body_1_1);
            },
            function (modal_footer_1_1) {
                modal_footer_1 = modal_footer_1_1;
                exportStar_1(modal_footer_1_1);
            },
            function (autofocus_1_1) {
                autofocus_1 = autofocus_1_1;
            },
            function (modal_instance_2_1) {
                exportStar_1(modal_instance_2_1);
            }],
        execute: function() {
            Ng2Bs3ModalModule = (function () {
                function Ng2Bs3ModalModule() {
                }
                Ng2Bs3ModalModule = __decorate([
                    core_6.NgModule({
                        imports: [
                            common_1.CommonModule
                        ],
                        declarations: [
                            modal_4.ModalComponent,
                            modal_header_1.ModalHeaderComponent,
                            modal_body_1.ModalBodyComponent,
                            modal_footer_1.ModalFooterComponent,
                            autofocus_1.AutofocusDirective
                        ],
                        exports: [
                            modal_4.ModalComponent,
                            modal_header_1.ModalHeaderComponent,
                            modal_body_1.ModalBodyComponent,
                            modal_footer_1.ModalFooterComponent,
                            autofocus_1.AutofocusDirective
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Ng2Bs3ModalModule);
                return Ng2Bs3ModalModule;
            }());
            exports_11("Ng2Bs3ModalModule", Ng2Bs3ModalModule);
        }
    }
});
/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
System.register("ng2-bs3-modal/ng2-bs3-modal.ngfactory", ['@angular/core/src/linker/ng_module_factory', "ng2-bs3-modal/ng2-bs3-modal", '@angular/common/src/common_module', '@angular/common/src/localization', '@angular/core/src/i18n/tokens'], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var import0, import1, import2, import3, import5;
    var Ng2Bs3ModalModuleInjector, Ng2Bs3ModalModuleNgFactory;
    return {
        setters:[
            function (import0_1) {
                import0 = import0_1;
            },
            function (import1_5) {
                import1 = import1_5;
            },
            function (import2_5) {
                import2 = import2_5;
            },
            function (import3_5) {
                import3 = import3_5;
            },
            function (import5_1) {
                import5 = import5_1;
            }],
        execute: function() {
            Ng2Bs3ModalModuleInjector = (function (_super) {
                __extends(Ng2Bs3ModalModuleInjector, _super);
                function Ng2Bs3ModalModuleInjector(parent) {
                    _super.call(this, parent, [], []);
                }
                Object.defineProperty(Ng2Bs3ModalModuleInjector.prototype, "_NgLocalization_2", {
                    get: function () {
                        if ((this.__NgLocalization_2 == null)) {
                            (this.__NgLocalization_2 = new import3.NgLocaleLocalization(this.parent.get(import5.LOCALE_ID)));
                        }
                        return this.__NgLocalization_2;
                    },
                    enumerable: true,
                    configurable: true
                });
                Ng2Bs3ModalModuleInjector.prototype.createInternal = function () {
                    this._CommonModule_0 = new import2.CommonModule();
                    this._Ng2Bs3ModalModule_1 = new import1.Ng2Bs3ModalModule();
                    return this._Ng2Bs3ModalModule_1;
                };
                Ng2Bs3ModalModuleInjector.prototype.getInternal = function (token, notFoundResult) {
                    if ((token === import2.CommonModule)) {
                        return this._CommonModule_0;
                    }
                    if ((token === import1.Ng2Bs3ModalModule)) {
                        return this._Ng2Bs3ModalModule_1;
                    }
                    if ((token === import3.NgLocalization)) {
                        return this._NgLocalization_2;
                    }
                    return notFoundResult;
                };
                Ng2Bs3ModalModuleInjector.prototype.destroyInternal = function () {
                };
                return Ng2Bs3ModalModuleInjector;
            }(import0.NgModuleInjector));
            exports_12("Ng2Bs3ModalModuleNgFactory", Ng2Bs3ModalModuleNgFactory = new import0.NgModuleFactory(Ng2Bs3ModalModuleInjector, import1.Ng2Bs3ModalModule));
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWJzMy1tb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9uZzItYnMzLW1vZGFsL2NvbXBvbmVudHMvbW9kYWwtaW5zdGFuY2UudHMiLCIuLi9zcmMvbmcyLWJzMy1tb2RhbC9jb21wb25lbnRzL21vZGFsLnRzIiwiLi4vc3JjL25nMi1iczMtbW9kYWwvY29tcG9uZW50cy9tb2RhbC1ib2R5LnRzIiwiLi4vc3JjL25nMi1iczMtbW9kYWwvY29tcG9uZW50cy9tb2RhbC1ib2R5Lm5nZmFjdG9yeS50cyIsIi4uL3NyYy9uZzItYnMzLW1vZGFsL2NvbXBvbmVudHMvbW9kYWwtZm9vdGVyLnRzIiwiLi4vc3JjL25nMi1iczMtbW9kYWwvY29tcG9uZW50cy9tb2RhbC1mb290ZXIubmdmYWN0b3J5LnRzIiwiLi4vc3JjL25nMi1iczMtbW9kYWwvY29tcG9uZW50cy9tb2RhbC1oZWFkZXIudHMiLCIuLi9zcmMvbmcyLWJzMy1tb2RhbC9jb21wb25lbnRzL21vZGFsLWhlYWRlci5uZ2ZhY3RvcnkudHMiLCIuLi9zcmMvbmcyLWJzMy1tb2RhbC9jb21wb25lbnRzL21vZGFsLm5nZmFjdG9yeS50cyIsIi4uL3NyYy9uZzItYnMzLW1vZGFsL2RpcmVjdGl2ZXMvYXV0b2ZvY3VzLnRzIiwiLi4vc3JjL25nMi1iczMtbW9kYWwvbmcyLWJzMy1tb2RhbC50cyIsIi4uL3NyYy9uZzItYnMzLW1vZGFsL25nMi1iczMtbW9kYWwubmdmYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUEwRkEsd0JBQXdCLEtBQUs7UUFDekIsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQztZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssT0FBTyxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsTUFBTSxDQUFD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
// Generated by CoffeeScript 1.9.3
(function(){var e;e=function(){function e(e,t){var n,r;this.options={target:"instafeed",get:"popular",resolution:"thumbnail",sortBy:"none",links:!0,mock:!1,useHttp:!1};if(typeof e=="object")for(n in e)r=e[n],this.options[n]=r;this.context=t!=null?t:this,this.unique=this._genKey()}return e.prototype.hasNext=function(){return typeof this.context.nextUrl=="string"&&this.context.nextUrl.length>0},e.prototype.next=function(){return this.hasNext()?this.run(this.context.nextUrl):!1},e.prototype.run=function(t){var n,r,i;if(typeof this.options.clientId!="string"&&typeof this.options.accessToken!="string")throw new Error("Missing clientId or accessToken.");if(typeof this.options.accessToken!="string"&&typeof this.options.clientId!="string")throw new Error("Missing clientId or accessToken.");return this.options.before!=null&&typeof this.options.before=="function"&&this.options.before.call(this),typeof document!="undefined"&&document!==null&&(i=document.createElement("script"),i.id="instafeed-fetcher",i.src=t||this._buildUrl(),n=document.getElementsByTagName("head"),n[0].appendChild(i),r="instafeedCache"+this.unique,window[r]=new e(this.options,this),window[r].unique=this.unique),!0},e.prototype.parse=function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D;if(typeof e!="object"){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,"Invalid JSON data"),!1;throw new Error("Invalid JSON response")}if(e.meta.code!==200){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,e.meta.error_message),!1;throw new Error("Error from Instagram: "+e.meta.error_message)}if(e.data.length===0){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,"No images were returned from Instagram"),!1;throw new Error("No images were returned from Instagram")}this.options.success!=null&&typeof this.options.success=="function"&&this.options.success.call(this,e),this.context.nextUrl="",e.pagination!=null&&(this.context.nextUrl=e.pagination.next_url);if(this.options.sortBy!=="none"){this.options.sortBy==="random"?M=["","random"]:M=this.options.sortBy.split("-"),O=M[0]==="least"?!0:!1;switch(M[1]){case"random":e.data.sort(function(){return.5-Math.random()});break;case"recent":e.data=this._sortBy(e.data,"created_time",O);break;case"liked":e.data=this._sortBy(e.data,"likes.count",O);break;case"commented":e.data=this._sortBy(e.data,"comments.count",O);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}}if(typeof document!="undefined"&&document!==null&&this.options.mock===!1){m=e.data,A=parseInt(this.options.limit,10),this.options.limit!=null&&m.length>A&&(m=m.slice(0,A)),u=document.createDocumentFragment(),this.options.filter!=null&&typeof this.options.filter=="function"&&(m=this._filter(m,this.options.filter));if(this.options.template!=null&&typeof this.options.template=="string"){f="",d="",w="",D=document.createElement("div");for(c=0,N=m.length;c<N;c++){h=m[c],p=h.images[this.options.resolution];if(typeof p!="object")throw o="No image found for resolution: "+this.options.resolution+".",new Error(o);E=p.width,y=p.height,b="square",E>y&&(b="landscape"),E<y&&(b="portrait"),v=p.url,l=window.location.protocol.indexOf("http")>=0,l&&!this.options.useHttp&&(v=v.replace(/https?:\/\//,"//")),d=this._makeTemplate(this.options.template,{model:h,id:h.id,link:h.link,type:h.type,image:v,width:E,height:y,orientation:b,caption:this._getObjectProperty(h,"caption.text"),likes:h.likes.count,comments:h.comments.count,location:this._getObjectProperty(h,"location.name")}),f+=d}D.innerHTML=f,i=[],r=0,n=D.childNodes.length;while(r<n)i.push(D.childNodes[r]),r+=1;for(x=0,C=i.length;x<C;x++)L=i[x],u.appendChild(L)}else for(T=0,k=m.length;T<k;T++){h=m[T],g=document.createElement("img"),p=h.images[this.options.resolution];if(typeof p!="object")throw o="No image found for resolution: "+this.options.resolution+".",new Error(o);v=p.url,l=window.location.protocol.indexOf("http")>=0,l&&!this.options.useHttp&&(v=v.replace(/https?:\/\//,"//")),g.src=v,this.options.links===!0?(t=document.createElement("a"),t.href=h.link,t.appendChild(g),u.appendChild(t)):u.appendChild(g)}_=this.options.target,typeof _=="string"&&(_=document.getElementById(_));if(_==null)throw o='No element with id="'+this.options.target+'" on page.',new Error(o);_.appendChild(u),a=document.getElementsByTagName("head")[0],a.removeChild(document.getElementById("instafeed-fetcher")),S="instafeedCache"+this.unique,window[S]=void 0;try{delete window[S]}catch(P){s=P}}return this.options.after!=null&&typeof this.options.after=="function"&&this.options.after.call(this),!0},e.prototype._buildUrl=function(){var e,t,n;e="https://api.instagram.com/v1";switch(this.options.get){case"popular":t="media/popular";break;case"tagged":if(!this.options.tagName)throw new Error("No tag name specified. Use the 'tagName' option.");t="tags/"+this.options.tagName+"/media/recent";break;case"location":if(!this.options.locationId)throw new Error("No location specified. Use the 'locationId' option.");t="locations/"+this.options.locationId+"/media/recent";break;case"user":if(!this.options.userId)throw new Error("No user specified. Use the 'userId' option.");t="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return n=e+"/"+t,this.options.accessToken!=null?n+="?access_token="+this.options.accessToken:n+="?client_id="+this.options.clientId,this.options.limit!=null&&(n+="&count="+this.options.limit),n+="&callback=instafeedCache"+this.unique+".parse",n},e.prototype._genKey=function(){var e;return e=function(){return((1+Math.random())*65536|0).toString(16).substring(1)},""+e()+e()+e()+e()},e.prototype._makeTemplate=function(e,t){var n,r,i,s,o;r=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,n=e;while(r.test(n))s=n.match(r)[1],o=(i=this._getObjectProperty(t,s))!=null?i:"",n=n.replace(r,""+o);return n},e.prototype._getObjectProperty=function(e,t){var n,r;t=t.replace(/\[(\w+)\]/g,".$1"),r=t.split(".");while(r.length){n=r.shift();if(!(e!=null&&n in e))return null;e=e[n]}return e},e.prototype._sortBy=function(e,t,n){var r;return r=function(e,r){var i,s;return i=this._getObjectProperty(e,t),s=this._getObjectProperty(r,t),n?i>s?1:-1:i<s?1:-1},e.sort(r.bind(this)),e},e.prototype._filter=function(e,t){var n,r,i,s,o;n=[],r=function(e){if(t(e))return n.push(e)};for(i=0,o=e.length;i<o;i++)s=e[i],r(s);return n},e}(),function(e,t){return typeof define=="function"&&define.amd?define([],t):typeof module=="object"&&module.exports?module.exports=t():e.Instafeed=t()}(this,function(){return e})}).call(this);
(function(){var e;e=function(){function e(e,t){var n,r;this.options={target:"instafeed",get:"popular",resolution:"thumbnail",sortBy:"none",links:!0,mock:!1,useHttp:!1};if(typeof e=="object")for(n in e)r=e[n],this.options[n]=r;this.context=t!=null?t:this,this.unique=this._genKey()}return e.prototype.hasNext=function(){return typeof this.context.nextUrl=="string"&&this.context.nextUrl.length>0},e.prototype.next=function(){return this.hasNext()?this.run(this.context.nextUrl):!1},e.prototype.run=function(t){var n,r,i;if(typeof this.options.clientId!="string"&&typeof this.options.accessToken!="string")throw new Error("Missing clientId or accessToken.");if(typeof this.options.accessToken!="string"&&typeof this.options.clientId!="string")throw new Error("Missing clientId or accessToken.");return this.options.before!=null&&typeof this.options.before=="function"&&this.options.before.call(this),typeof document!="undefined"&&document!==null&&(i=document.createElement("script"),i.id="instafeed-fetcher",i.src=t||this._buildUrl(),n=document.getElementsByTagName("head"),n[0].appendChild(i),r="instafeedCache"+this.unique,window[r]=new e(this.options,this),window[r].unique=this.unique),!0},e.prototype.parse=function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D;if(typeof e!="object"){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,"Invalid JSON data"),!1;throw new Error("Invalid JSON response")}if(e.meta.code!==200){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,e.meta.error_message),!1;throw new Error("Error from Instagram: "+e.meta.error_message)}if(e.data.length===0){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,"No images were returned from Instagram"),!1;throw new Error("No images were returned from Instagram")}this.options.success!=null&&typeof this.options.success=="function"&&this.options.success.call(this,e),this.context.nextUrl="",e.pagination!=null&&(this.context.nextUrl=e.pagination.next_url);if(this.options.sortBy!=="none"){this.options.sortBy==="random"?M=["","random"]:M=this.options.sortBy.split("-"),O=M[0]==="least"?!0:!1;switch(M[1]){case"random":e.data.sort(function(){return.5-Math.random()});break;case"recent":e.data=this._sortBy(e.data,"created_time",O);break;case"liked":e.data=this._sortBy(e.data,"likes.count",O);break;case"commented":e.data=this._sortBy(e.data,"comments.count",O);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}}if(typeof document!="undefined"&&document!==null&&this.options.mock===!1){m=e.data,A=parseInt(this.options.limit,10),this.options.limit!=null&&m.length>A&&(m=m.slice(0,A)),u=document.createDocumentFragment(),this.options.filter!=null&&typeof this.options.filter=="function"&&(m=this._filter(m,this.options.filter));if(this.options.template!=null&&typeof this.options.template=="string"){f="",d="",w="",D=document.createElement("div");for(c=0,N=m.length;c<N;c++){h=m[c],p=h.images[this.options.resolution];if(typeof p!="object")throw o="No image found for resolution: "+this.options.resolution+".",new Error(o);E=p.width,y=p.height,b="square",E>y&&(b="landscape"),E<y&&(b="portrait"),v=p.url,l=window.location.protocol.indexOf("http")>=0,l&&!this.options.useHttp&&(v=v.replace(/https?:\/\//,"//")),d=this._makeTemplate(this.options.template,{model:h,id:h.id,link:h.link,type:h.type,image:v,width:E,height:y,orientation:b,caption:this._getObjectProperty(h,"caption.text"),likes:h.likes.count,comments:h.comments.count,location:this._getObjectProperty(h,"location.name")}),f+=d}D.innerHTML=f,i=[],r=0,n=D.childNodes.length;while(r<n)i.push(D.childNodes[r]),r+=1;for(x=0,C=i.length;x<C;x++)L=i[x],u.appendChild(L)}else for(T=0,k=m.length;T<k;T++){h=m[T],g=document.createElement("img"),p=h.images[this.options.resolution];if(typeof p!="object")throw o="No image found for resolution: "+this.options.resolution+".",new Error(o);v=p.url,l=window.location.protocol.indexOf("http")>=0,l&&!this.options.useHttp&&(v=v.replace(/https?:\/\//,"//")),g.src=v,this.options.links===!0?(t=document.createElement("a"),t.href=h.link,t.appendChild(g),u.appendChild(t)):u.appendChild(g)}_=this.options.target,typeof _=="string"&&(_=document.getElementById(_));if(_==null)throw o='No element with id="'+this.options.target+'" on page.',new Error(o);_.appendChild(u),a=document.getElementsByTagName("head")[0],a.removeChild(document.getElementById("instafeed-fetcher")),S="instafeedCache"+this.unique,window[S]=void 0;try{delete window[S]}catch(P){s=P}}return this.options.after!=null&&typeof this.options.after=="function"&&this.options.after.call(this),!0},e.prototype._buildUrl=function(){var e,t,n;e="https://api.instagram.com/v1";switch(this.options.get){case"popular":t="media/popular";break;case"tagged":if(!this.options.tagName)throw new Error("No tag name specified. Use the 'tagName' option.");t="tags/"+this.options.tagName+"/media/recent";break;case"location":if(!this.options.locationId)throw new Error("No location specified. Use the 'locationId' option.");t="locations/"+this.options.locationId+"/media/recent";break;case"user":if(!this.options.userId)throw new Error("No user specified. Use the 'userId' option.");t="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return n=e+"/"+t,this.options.accessToken!=null?n+="?access_token="+this.options.accessToken:n+="?client_id="+this.options.clientId,this.options.limit!=null&&(n+="&count="+this.options.limit),n+="&callback=instafeedCache"+this.unique+".parse",n},e.prototype._genKey=function(){var e;return e=function(){return((1+Math.random())*65536|0).toString(16).substring(1)},""+e()+e()+e()+e()},e.prototype._makeTemplate=function(e,t){var n,r,i,s,o;r=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,n=e;while(r.test(n))s=n.match(r)[1],o=(i=this._getObjectProperty(t,s))!=null?i:"",n=n.replace(r,""+o);return n},e.prototype._getObjectProperty=function(e,t){var n,r;t=t.replace(/\[(\w+)\]/g,".$1"),r=t.split(".");while(r.length){n=r.shift();if(!(e!=null&&n in e))return null;e=e[n]}return e},e.prototype._sortBy=function(e,t,n){var r;return r=function(e,r){var i,s;return i=this._getObjectProperty(e,t),s=this._getObjectProperty(r,t),n?i>s?1:-1:i<s?1:-1},e.sort(r.bind(this)),e},e.prototype._filter=function(e,t){var n,r,i,s,o;n=[],r=function(e){if(t(e))return n.push(e)};for(i=0,o=e.length;i<o;i++)s=e[i],r(s);return n},e}(),function(e,t){return typeof define=="function"&&define.amd?define([],t):typeof module=="object"&&module.exports?module.exports=t():e.Instafeed=t()}(this,function(){return e})}).call(this);
// Sticky Plugin v1.0.4 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 02/14/2011
// Date: 07/20/2015
// Website: http://stickyjs.com/
// Description: Makes an element on the page stick on the screen as you scroll
//              It will only set the 'top' and 'position' of your element, you
//              might need to adjust the width in some cases.

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    var slice = Array.prototype.slice; // save ref to original slice()
    var splice = Array.prototype.splice; // save ref to original slice()

  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper',
      center: false,
      getWidthFrom: '',
      widthFromWrapper: true, // works only when .getWidthFrom is empty
      responsiveWidth: false,
      zIndex: 'auto'
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

      for (var i = 0, l = sticked.length; i < l; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

        //update height in case of dynamic content
        s.stickyWrapper.css('height', s.stickyElement.outerHeight());

        if (scrollTop <= etse) {
          if (s.currentTop !== null) {
            s.stickyElement
              .css({
                'width': '',
                'position': '',
                'top': '',
                'z-index': ''
              });
            s.stickyElement.parent().removeClass(s.className);
            s.stickyElement.trigger('sticky-end', [s]);
            s.currentTop = null;
          }
        }
        else {
          var newTop = documentHeight - s.stickyElement.outerHeight()
            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop !== newTop) {
            var newWidth;
            if (s.getWidthFrom) {
                newWidth = $(s.getWidthFrom).width() || null;
            } else if (s.widthFromWrapper) {
                newWidth = s.stickyWrapper.width();
            }
            if (newWidth == null) {
                newWidth = s.stickyElement.width();
            }
            s.stickyElement
              .css('width', newWidth)
              .css('position', 'fixed')
              .css('top', newTop)
              .css('z-index', s.zIndex);

            s.stickyElement.parent().addClass(s.className);

            if (s.currentTop === null) {
              s.stickyElement.trigger('sticky-start', [s]);
            } else {
              // sticky is started but it have to be repositioned
              s.stickyElement.trigger('sticky-update', [s]);
            }

            if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
              // just reached bottom || just started to stick but bottom is already reached
              s.stickyElement.trigger('sticky-bottom-reached', [s]);
            } else if(s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
              // sticky is started && sticked at topSpacing && overflowing from top just finished
              s.stickyElement.trigger('sticky-bottom-unreached', [s]);
            }

            s.currentTop = newTop;
          }

          // Check if sticky has reached end of container and stop sticking
          var stickyWrapperContainer = s.stickyWrapper.parent();
          var unstick = (s.stickyElement.offset().top + s.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight()) && (s.stickyElement.offset().top <= s.topSpacing);

          if( unstick ) {
            s.stickyElement
              .css('position', 'absolute')
              .css('top', '')
              .css('bottom', 0)
              .css('z-index', '');
          } else {
            s.stickyElement
              .css('position', 'fixed')
              .css('top', newTop)
              .css('bottom', '')
              .css('z-index', s.zIndex);
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();

      for (var i = 0, l = sticked.length; i < l; i++) {
        var s = sticked[i];
        var newWidth = null;
        if (s.getWidthFrom) {
            if (s.responsiveWidth) {
                newWidth = $(s.getWidthFrom).width();
            }
        } else if(s.widthFromWrapper) {
            newWidth = s.stickyWrapper.width();
        }
        if (newWidth != null) {
            s.stickyElement.css('width', newWidth);
        }
      }
    },
    methods = {
      init: function(options) {
        return this.each(function() {
          var o = $.extend({}, defaults, options);
          var stickyElement = $(this);

          var stickyId = stickyElement.attr('id');
          var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName;
          var wrapper = $('<div></div>')
            .attr('id', wrapperId)
            .addClass(o.wrapperClassName);

          stickyElement.wrapAll(function() {
            if ($(this).parent("#" + wrapperId).length == 0) {
                    return wrapper;
            }
});

          var stickyWrapper = stickyElement.parent();

          if (o.center) {
            stickyWrapper.css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
          }

          if (stickyElement.css("float") === "right") {
            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
          }

          o.stickyElement = stickyElement;
          o.stickyWrapper = stickyWrapper;
          o.currentTop    = null;

          sticked.push(o);

          methods.setWrapperHeight(this);
          methods.setupChangeListeners(this);
        });
      },

      setWrapperHeight: function(stickyElement) {
        var element = $(stickyElement);
        var stickyWrapper = element.parent();
        if (stickyWrapper) {
          stickyWrapper.css('height', element.outerHeight());
        }
      },

      setupChangeListeners: function(stickyElement) {
        if (window.MutationObserver) {
          var mutationObserver = new window.MutationObserver(function(mutations) {
            if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
              methods.setWrapperHeight(stickyElement);
            }
          });
          mutationObserver.observe(stickyElement, {subtree: true, childList: true});
        } else {
          if (window.addEventListener) {
            stickyElement.addEventListener('DOMNodeInserted', function() {
              methods.setWrapperHeight(stickyElement);
            }, false);
            stickyElement.addEventListener('DOMNodeRemoved', function() {
              methods.setWrapperHeight(stickyElement);
            }, false);
          } else if (window.attachEvent) {
            stickyElement.attachEvent('onDOMNodeInserted', function() {
              methods.setWrapperHeight(stickyElement);
            });
            stickyElement.attachEvent('onDOMNodeRemoved', function() {
              methods.setWrapperHeight(stickyElement);
            });
          }
        }
      },
      update: scroller,
      unstick: function(options) {
        return this.each(function() {
          var that = this;
          var unstickyElement = $(that);

          var removeIdx = -1;
          var i = sticked.length;
          while (i-- > 0) {
            if (sticked[i].stickyElement.get(0) === that) {
                splice.call(sticked,i,1);
                removeIdx = i;
            }
          }
          if(removeIdx !== -1) {
            unstickyElement.unwrap();
            unstickyElement
              .css({
                'width': '',
                'position': '',
                'top': '',
                'float': '',
                'z-index': ''
              })
            ;
          }
        });
      }
    };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };

  $.fn.unstick = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.unstick.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };
  $(function() {
    setTimeout(scroller, 0);
  });
}));

/*!
 * Theia Sticky Sidebar v1.6.0
 * https://github.com/WeCodePixels/theia-sticky-sidebar
 *
 * Glues your website's sidebars, making them permanently visible while scrolling.
 *
 * Copyright 2013-2016 WeCodePixels and other contributors
 * Released under the MIT license
 */

(function ($) {
    $.fn.theiaStickySidebar = function (options) {
        var defaults = {
            'containerSelector': '',
            'additionalMarginTop': 0,
            'additionalMarginBottom': 0,
            'updateSidebarHeight': true,
            'minWidth': 0,
            'disableOnResponsiveLayouts': true,
            'sidebarBehavior': 'modern'
        };
        options = $.extend(defaults, options);

        // Validate options
        options.additionalMarginTop = parseInt(options.additionalMarginTop) || 0;
        options.additionalMarginBottom = parseInt(options.additionalMarginBottom) || 0;

        tryInitOrHookIntoEvents(options, this);

        // Try doing init, otherwise hook into window.resize and document.scroll and try again then.
        function tryInitOrHookIntoEvents(options, $that) {
            var success = tryInit(options, $that);

            if (!success) {
                console.log('TSS: Body width smaller than options.minWidth. Init is delayed.');

                $(document).scroll(function (options, $that) {
                    return function (evt) {
                        var success = tryInit(options, $that);

                        if (success) {
                            $(this).unbind(evt);
                        }
                    };
                }(options, $that));
                $(window).resize(function (options, $that) {
                    return function (evt) {
                        var success = tryInit(options, $that);

                        if (success) {
                            $(this).unbind(evt);
                        }
                    };
                }(options, $that))
            }
        }

        // Try doing init if proper conditions are met.
        function tryInit(options, $that) {
            if (options.initialized === true) {
                return true;
            }

            if ($('body').width() < options.minWidth) {
                return false;
            }

            init(options, $that);

            return true;
        }

        // Init the sticky sidebar(s).
        function init(options, $that) {
            options.initialized = true;

            // Add CSS
            $('head').append($('<style>.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'));

            $that.each(function () {
                var o = {};

                o.sidebar = $(this);

                // Save options
                o.options = options || {};

                // Get container
                o.container = $(o.options.containerSelector);
                if (o.container.length == 0) {
                    o.container = o.sidebar.parent();
                }

                // Create sticky sidebar
                o.sidebar.parents().css('-webkit-transform', 'none'); // Fix for WebKit bug - https://code.google.com/p/chromium/issues/detail?id=20574
                o.sidebar.css({
                    'position': 'relative',
                    'overflow': 'visible',
                    // The "box-sizing" must be set to "content-box" because we set a fixed height to this element when the sticky sidebar has a fixed position.
                    '-webkit-box-sizing': 'border-box',
                    '-moz-box-sizing': 'border-box',
                    'box-sizing': 'border-box'
                });

                // Get the sticky sidebar element. If none has been found, then create one.
                o.stickySidebar = o.sidebar.find('.theiaStickySidebar');
                if (o.stickySidebar.length == 0) {
                    // Remove <script> tags, otherwise they will be run again when added to the stickySidebar.
                    var javaScriptMIMETypes = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
                    o.sidebar.find('script').filter(function (index, script) {
                        return script.type.length === 0 || script.type.match(javaScriptMIMETypes);
                    }).remove();

                    o.stickySidebar = $('<div>').addClass('theiaStickySidebar').append(o.sidebar.children());
                    o.sidebar.append(o.stickySidebar);
                }

                // Get existing top and bottom margins and paddings
                o.marginBottom = parseInt(o.sidebar.css('margin-bottom'));
                o.paddingTop = parseInt(o.sidebar.css('padding-top'));
                o.paddingBottom = parseInt(o.sidebar.css('padding-bottom'));

                // Add a temporary padding rule to check for collapsable margins.
                var collapsedTopHeight = o.stickySidebar.offset().top;
                var collapsedBottomHeight = o.stickySidebar.outerHeight();
                o.stickySidebar.css('padding-top', 1);
                o.stickySidebar.css('padding-bottom', 1);
                collapsedTopHeight -= o.stickySidebar.offset().top;
                collapsedBottomHeight = o.stickySidebar.outerHeight() - collapsedBottomHeight - collapsedTopHeight;
                if (collapsedTopHeight == 0) {
                    o.stickySidebar.css('padding-top', 0);
                    o.stickySidebarPaddingTop = 0;
                }
                else {
                    o.stickySidebarPaddingTop = 1;
                }

                if (collapsedBottomHeight == 0) {
                    o.stickySidebar.css('padding-bottom', 0);
                    o.stickySidebarPaddingBottom = 0;
                }
                else {
                    o.stickySidebarPaddingBottom = 1;
                }

                // We use this to know whether the user is scrolling up or down.
                o.previousScrollTop = null;

                // Scroll top (value) when the sidebar has fixed position.
                o.fixedScrollTop = 0;

                // Set sidebar to default values.
                resetSidebar();

                o.onScroll = function (o) {
                    // Stop if the sidebar isn't visible.
                    if (!o.stickySidebar.is(":visible")) {
                        return;
                    }

                    // Stop if the window is too small.
                    if ($('body').width() < o.options.minWidth) {
                        resetSidebar();
                        return;
                    }

                    // Stop if the sidebar width is larger than the container width (e.g. the theme is responsive and the sidebar is now below the content)
                    if (o.options.disableOnResponsiveLayouts) {
                        var sidebarWidth = o.sidebar.outerWidth(o.sidebar.css('float') == 'none');

                        if (sidebarWidth + 50 > o.container.width()) {
                            resetSidebar();
                            return;
                        }
                    }

                    var scrollTop = $(document).scrollTop();
                    var position = 'static';

                    // If the user has scrolled down enough for the sidebar to be clipped at the top, then we can consider changing its position.
                    if (scrollTop >= o.sidebar.offset().top + (o.paddingTop - o.options.additionalMarginTop)) {
                        // The top and bottom offsets, used in various calculations.
                        var offsetTop = o.paddingTop + options.additionalMarginTop;
                        var offsetBottom = o.paddingBottom + o.marginBottom + options.additionalMarginBottom;

                        // All top and bottom positions are relative to the window, not to the parent elemnts.
                        var containerTop = o.sidebar.offset().top;
                        var containerBottom = o.sidebar.offset().top + getClearedHeight(o.container);

                        // The top and bottom offsets relative to the window screen top (zero) and bottom (window height).
                        var windowOffsetTop = 0 + options.additionalMarginTop;
                        var windowOffsetBottom;

                        var sidebarSmallerThanWindow = (o.stickySidebar.outerHeight() + offsetTop + offsetBottom) < $(window).height();
                        if (sidebarSmallerThanWindow) {
                            windowOffsetBottom = windowOffsetTop + o.stickySidebar.outerHeight();
                        }
                        else {
                            windowOffsetBottom = $(window).height() - o.marginBottom - o.paddingBottom - options.additionalMarginBottom;
                        }

                        var staticLimitTop = containerTop - scrollTop + o.paddingTop;
                        var staticLimitBottom = containerBottom - scrollTop - o.paddingBottom - o.marginBottom;

                        var top = o.stickySidebar.offset().top - scrollTop;
                        var scrollTopDiff = o.previousScrollTop - scrollTop;

                        // If the sidebar position is fixed, then it won't move up or down by itself. So, we manually adjust the top coordinate.
                        if (o.stickySidebar.css('position') == 'fixed') {
                            if (o.options.sidebarBehavior == 'modern') {
                                top += scrollTopDiff;
                            }
                        }

                        if (o.options.sidebarBehavior == 'stick-to-top') {
                            top = options.additionalMarginTop;
                        }

                        if (o.options.sidebarBehavior == 'stick-to-bottom') {
                            top = windowOffsetBottom - o.stickySidebar.outerHeight();
                        }

                        if (scrollTopDiff > 0) { // If the user is scrolling up.
                            top = Math.min(top, windowOffsetTop);
                        }
                        else { // If the user is scrolling down.
                            top = Math.max(top, windowOffsetBottom - o.stickySidebar.outerHeight());
                        }

                        top = Math.max(top, staticLimitTop);

                        top = Math.min(top, staticLimitBottom - o.stickySidebar.outerHeight());

                        // If the sidebar is the same height as the container, we won't use fixed positioning.
                        var sidebarSameHeightAsContainer = o.container.height() == o.stickySidebar.outerHeight();

                        if (!sidebarSameHeightAsContainer && top == windowOffsetTop) {
                            position = 'fixed';
                        }
                        else if (!sidebarSameHeightAsContainer && top == windowOffsetBottom - o.stickySidebar.outerHeight()) {
                            position = 'fixed';
                        }
                        else if (scrollTop + top - o.sidebar.offset().top - o.paddingTop <= options.additionalMarginTop) {
                            // Stuck to the top of the page. No special behavior.
                            position = 'static';
                        }
                        else {
                            // Stuck to the bottom of the page.
                            position = 'absolute';
                        }
                    }

                    /*
                     * Performance notice: It's OK to set these CSS values at each resize/scroll, even if they don't change.
                     * It's way slower to first check if the values have changed.
                     */
                    if (position == 'fixed') {
                        var scrollLeft = $(document).scrollLeft();

                        o.stickySidebar.css({
                            'position': 'fixed',
                            'width': getWidthForObject(o.stickySidebar) + 'px',
                            'transform': 'translateY(' + top + 'px)',
                            'left': (o.sidebar.offset().left + parseInt(o.sidebar.css('padding-left')) - scrollLeft) + 'px',
                            'top': '0px'
                        });
                    }
                    else if (position == 'absolute') {
                        var css = {};

                        if (o.stickySidebar.css('position') != 'absolute') {
                            css.position = 'absolute';
                            css.transform = 'translateY(' + (scrollTop + top - o.sidebar.offset().top - o.stickySidebarPaddingTop - o.stickySidebarPaddingBottom) + 'px)';
                            css.top = '0px';
                        }

                        css.width = getWidthForObject(o.stickySidebar) + 'px';
                        css.left = '';

                        o.stickySidebar.css(css);
                    }
                    else if (position == 'static') {
                        resetSidebar();
                    }

                    if (position != 'static') {
                        if (o.options.updateSidebarHeight == true) {
                            o.sidebar.css({
                                'min-height': o.stickySidebar.outerHeight() + o.stickySidebar.offset().top - o.sidebar.offset().top + o.paddingBottom
                            });
                        }
                    }

                    o.previousScrollTop = scrollTop;
                };

                // Initialize the sidebar's position.
                o.onScroll(o);

                // Recalculate the sidebar's position on every scroll and resize.
                $(document).scroll(function (o) {
                    return function () {
                        o.onScroll(o);
                    };
                }(o));
                $(window).resize(function (o) {
                    return function () {
                        o.stickySidebar.css({'position': 'static'});
                        o.onScroll(o);
                    };
                }(o));

                // Recalculate the sidebar's position every time the sidebar changes its size.
                if (typeof ResizeSensor !== 'undefined') {
                    new ResizeSensor(o.stickySidebar[0], function (o) {
                        return function () {
                            o.onScroll(o);
                        };
                    }(o));
                }

                // Reset the sidebar to its default state
                function resetSidebar() {
                    o.fixedScrollTop = 0;
                    o.sidebar.css({
                        'min-height': '1px'
                    });
                    o.stickySidebar.css({
                        'position': 'static',
                        'width': '',
                        'transform': 'none'
                    });
                }

                // Get the height of a div as if its floated children were cleared. Note that this function fails if the floats are more than one level deep.
                function getClearedHeight(e) {
                    var height = e.height();

                    e.children().each(function () {
                        height = Math.max(height, $(this).height());
                    });

                    return height;
                }
            });
        }

        function getWidthForObject(object) {
            var width;

            try {
                width = object[0].getBoundingClientRect().width;
            }
            catch (err) {
            }

            if (typeof width === "undefined") {
                width = object.width();
            }

            return width;
        }
    }
})(jQuery);
