!function(){"use strict";
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),a=new Map;class i{constructor(t,a){if(this._$cssResult$=!0,a!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=a.get(this.cssText);return t&&void 0===e&&(a.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const s=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let a="";for(const e of t.cssRules)a+=e.cssText;return(t=>new i("string"==typeof t?t:t+"",e))(a)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;var n;const o=window.trustedTypes,r=o?o.emptyScript:"",c=window.reactiveElementPolyfillSupport,l={toAttribute(t,e){switch(e){case Boolean:t=t?r:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let a=t;switch(e){case Boolean:a=null!==t;break;case Number:a=null===t?null:Number(t);break;case Object:case Array:try{a=JSON.parse(t)}catch(t){a=null}}return a}},d=(t,e)=>e!==t&&(e==e||t==t),h={attribute:!0,type:String,converter:l,reflect:!1,hasChanged:d};class u extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,a)=>{const i=this._$Eh(a,e);void 0!==i&&(this._$Eu.set(i,a),t.push(i))})),t}static createProperty(t,e=h){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const a="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,a,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,a){return{get(){return this[e]},set(i){const s=this[t];this[e]=i,this.requestUpdate(t,s,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||h}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const a of e)this.createProperty(a,t[a])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const a=new Set(t.flat(1/0).reverse());for(const t of a)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Eh(t,e){const a=e.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,a;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(a=t.hostConnected)||void 0===a||a.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const a=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,a)=>{t?e.adoptedStyleSheets=a.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):a.forEach((t=>{const a=document.createElement("style"),i=window.litNonce;void 0!==i&&a.setAttribute("nonce",i),a.textContent=t.cssText,e.appendChild(a)}))})(a,this.constructor.elementStyles),a}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,a){this._$AK(t,a)}_$ES(t,e,a=h){var i,s;const n=this.constructor._$Eh(t,a);if(void 0!==n&&!0===a.reflect){const o=(null!==(s=null===(i=a.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==s?s:l.toAttribute)(e,a.type);this._$Ei=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Ei=null}}_$AK(t,e){var a,i,s;const n=this.constructor,o=n._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=n.getPropertyOptions(o),r=t.converter,c=null!==(s=null!==(i=null===(a=r)||void 0===a?void 0:a.fromAttribute)&&void 0!==i?i:"function"==typeof r?r:null)&&void 0!==s?s:l.fromAttribute;this._$Ei=o,this[o]=c(e,t.type),this._$Ei=null}}requestUpdate(t,e,a){let i=!0;void 0!==t&&(((a=a||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===a.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,a))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const a=this._$AL;try{e=this.shouldUpdate(a),e?(this.willUpdate(a),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(a)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(a)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var p;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:u}),(null!==(n=globalThis.reactiveElementVersions)&&void 0!==n?n:globalThis.reactiveElementVersions=[]).push("1.3.2");const g=globalThis.trustedTypes,f=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,y="?"+m,b=`<${y}>`,v=document,$=(t="")=>v.createComment(t),w=t=>null===t||"object"!=typeof t&&"function"!=typeof t,x=Array.isArray,_=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,k=/>/g,D=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,A=/'/g,S=/"/g,I=/^(?:script|style|textarea|title)$/i,E=(t=>(e,...a)=>({_$litType$:t,strings:e,values:a}))(1),T=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),R=new WeakMap,M=(t,e,a)=>{var i,s;const n=null!==(i=null==a?void 0:a.renderBefore)&&void 0!==i?i:e;let o=n._$litPart$;if(void 0===o){const t=null!==(s=null==a?void 0:a.renderBefore)&&void 0!==s?s:null;n._$litPart$=o=new P(e.insertBefore($(),t),t,void 0,null!=a?a:{})}return o._$AI(t),o},L=v.createTreeWalker(v,129,null,!1),B=(t,e)=>{const a=t.length-1,i=[];let s,n=2===e?"<svg>":"",o=_;for(let e=0;e<a;e++){const a=t[e];let r,c,l=-1,d=0;for(;d<a.length&&(o.lastIndex=d,c=o.exec(a),null!==c);)d=o.lastIndex,o===_?"!--"===c[1]?o=C:void 0!==c[1]?o=k:void 0!==c[2]?(I.test(c[2])&&(s=RegExp("</"+c[2],"g")),o=D):void 0!==c[3]&&(o=D):o===D?">"===c[0]?(o=null!=s?s:_,l=-1):void 0===c[1]?l=-2:(l=o.lastIndex-c[2].length,r=c[1],o=void 0===c[3]?D:'"'===c[3]?S:A):o===S||o===A?o=D:o===C||o===k?o=_:(o=D,s=void 0);const h=o===D&&t[e+1].startsWith("/>")?" ":"";n+=o===_?a+b:l>=0?(i.push(r),a.slice(0,l)+"$lit$"+a.slice(l)+m+h):a+m+(-2===l?(i.push(void 0),e):h)}const r=n+(t[a]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==f?f.createHTML(r):r,i]};class N{constructor({strings:t,_$litType$:e},a){let i;this.parts=[];let s=0,n=0;const o=t.length-1,r=this.parts,[c,l]=B(t,e);if(this.el=N.createElement(c,a),L.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=L.nextNode())&&r.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(m)){const a=l[n++];if(t.push(e),void 0!==a){const t=i.getAttribute(a.toLowerCase()+"$lit$").split(m),e=/([.?@])?(.*)/.exec(a);r.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?q:"?"===e[1]?j:"@"===e[1]?V:U})}else r.push({type:6,index:s})}for(const e of t)i.removeAttribute(e)}if(I.test(i.tagName)){const t=i.textContent.split(m),e=t.length-1;if(e>0){i.textContent=g?g.emptyScript:"";for(let a=0;a<e;a++)i.append(t[a],$()),L.nextNode(),r.push({type:2,index:++s});i.append(t[e],$())}}}else if(8===i.nodeType)if(i.data===y)r.push({type:2,index:s});else{let t=-1;for(;-1!==(t=i.data.indexOf(m,t+1));)r.push({type:7,index:s}),t+=m.length-1}s++}}static createElement(t,e){const a=v.createElement("template");return a.innerHTML=t,a}}function H(t,e,a=t,i){var s,n,o,r;if(e===T)return e;let c=void 0!==i?null===(s=a._$Cl)||void 0===s?void 0:s[i]:a._$Cu;const l=w(e)?void 0:e._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(n=null==c?void 0:c._$AO)||void 0===n||n.call(c,!1),void 0===l?c=void 0:(c=new l(t),c._$AT(t,a,i)),void 0!==i?(null!==(o=(r=a)._$Cl)&&void 0!==o?o:r._$Cl=[])[i]=c:a._$Cu=c),void 0!==c&&(e=H(t,c._$AS(t,e.values),c,i)),e}class O{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:a},parts:i}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:v).importNode(a,!0);L.currentNode=s;let n=L.nextNode(),o=0,r=0,c=i[0];for(;void 0!==c;){if(o===c.index){let e;2===c.type?e=new P(n,n.nextSibling,this,t):1===c.type?e=new c.ctor(n,c.name,c.strings,this,t):6===c.type&&(e=new W(n,this,t)),this.v.push(e),c=i[++r]}o!==(null==c?void 0:c.index)&&(n=L.nextNode(),o++)}return s}m(t){let e=0;for(const a of this.v)void 0!==a&&(void 0!==a.strings?(a._$AI(t,a,e),e+=a.strings.length-2):a._$AI(t[e])),e++}}class P{constructor(t,e,a,i){var s;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=a,this.options=i,this._$Cg=null===(s=null==i?void 0:i.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=H(this,t,e),w(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==T&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return x(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==z&&w(this._$AH)?this._$AA.nextSibling.data=t:this.k(v.createTextNode(t)),this._$AH=t}T(t){var e;const{values:a,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=N.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.m(a);else{const t=new O(s,this),e=t.p(this.options);t.m(a),this.k(e),this._$AH=t}}_$AC(t){let e=R.get(t.strings);return void 0===e&&R.set(t.strings,e=new N(t)),e}S(t){x(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let a,i=0;for(const s of t)i===e.length?e.push(a=new P(this.M($()),this.M($()),this,this.options)):a=e[i],a._$AI(s),i++;i<e.length&&(this._$AR(a&&a._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var a;for(null===(a=this._$AP)||void 0===a||a.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class U{constructor(t,e,a,i,s){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,a,i){const s=this.strings;let n=!1;if(void 0===s)t=H(this,t,e,0),n=!w(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else{const i=t;let o,r;for(t=s[0],o=0;o<s.length-1;o++)r=H(this,i[a+o],e,o),r===T&&(r=this._$AH[o]),n||(n=!w(r)||r!==this._$AH[o]),r===z?t=z:t!==z&&(t+=(null!=r?r:"")+s[o+1]),this._$AH[o]=r}n&&!i&&this.C(t)}C(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class q extends U{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===z?void 0:t}}const F=g?g.emptyScript:"";class j extends U{constructor(){super(...arguments),this.type=4}C(t){t&&t!==z?this.element.setAttribute(this.name,F):this.element.removeAttribute(this.name)}}class V extends U{constructor(t,e,a,i,s){super(t,e,a,i,s),this.type=5}_$AI(t,e=this){var a;if((t=null!==(a=H(this,t,e,0))&&void 0!==a?a:z)===T)return;const i=this._$AH,s=t===z&&i!==z||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==z&&(i===z||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,a;"function"==typeof this._$AH?this._$AH.call(null!==(a=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==a?a:this.element,t):this._$AH.handleEvent(t)}}class W{constructor(t,e,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}}const Z=window.litHtmlPolyfillSupport;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var K,J;null==Z||Z(N,P),(null!==(p=globalThis.litHtmlVersions)&&void 0!==p?p:globalThis.litHtmlVersions=[]).push("2.2.3");class X extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const a=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=a.firstChild),a}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=M(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return T}}X.finalized=!0,X._$litElement$=!0,null===(K=globalThis.litElementHydrateSupport)||void 0===K||K.call(globalThis,{LitElement:X});const G=globalThis.litElementPolyfillSupport;null==G||G({LitElement:X}),(null!==(J=globalThis.litElementVersions)&&void 0!==J?J:globalThis.litElementVersions=[]).push("3.2.0");const Y=()=>E`
<span class="loading">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</span>
`,Q=()=>E`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
<path d="M11.290625,2 C11.290625,2 13.2539062,2 13.2539062,2 C13.2539062,2 13.2539062,22.59375 13.2539062,22.59375 C13.2539062,22.59375 11.290625,22.59375 11.290625,22.59375 C11.290625,22.59375 11.290625,2 11.290625,2 Z M22.59375,11.3390625 C22.59375,11.3390625 22.59375,13.2546875 22.59375,13.2546875 C22.59375,13.2546875 2,13.2546875 2,13.2546875 C2,13.2546875 2,11.3390625 2,11.3390625 C2,11.3390625 22.59375,11.3390625 22.59375,11.3390625 L22.59375,11.3390625 Z"/>
</svg>`,tt=()=>E`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.3375,3 C20.3375,3 21.7742187,4.43671875 21.7742187,4.43671875 C21.7742187,4.43671875 4.43671875,21.4867188 4.43671875,21.4867188 C4.43671875,21.4867188 3,20.19375 3,20.19375 C3,20.19375 20.3375,3 20.3375,3 Z M21.7265625,20.0976563 C21.7265625,20.0976563 20.3859375,21.534375 20.3859375,21.534375 C20.3859375,21.534375 3.00078125,4.3890625 3.00078125,4.3890625 C3.00078125,4.3890625 4.38984375,3 4.38984375,3 C4.38984375,3 21.7273438,20.0976563 21.7273438,20.0976563 L21.7265625,20.0976563 Z"/>
</svg>`,et=()=>E`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1140625,3.96875 C22.1140625,3.96875 22.1140625,3.96875 22.1140625,3.96875 C22.1140625,3.96875 17.46875,3.96875 17.46875,3.96875 C17.46875,3.96875 16.9898437,2.14921875 16.9898437,2.14921875 C16.9421875,1.8140625 16.7507812,1.57421875 16.5109375,1.33515625 C16.2234375,1.09609375 15.8882813,1 15.553125,1 C15.553125,1 15.553125,1 15.553125,1 C15.553125,1 9.03984375,1 9.03984375,1 C8.7046875,1 8.4171875,1.09609375 8.1296875,1.2875 C7.8421875,1.52734375 7.65078125,1.76640625 7.603125,2.1015625 C7.603125,2.1015625 7.603125,2.1015625 7.603125,2.1015625 C7.603125,2.1015625 7.12421875,3.96953125 7.12421875,3.96953125 C7.12421875,3.96953125 2.47890625,3.96953125 2.47890625,3.96953125 C2.14375,3.96953125 2,4.11328125 2,4.4484375 C2,4.78359375 2.14375,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 2.47890625,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 4.01171875,4.92734375 4.01171875,4.92734375 C4.01171875,4.92734375 4.921875,23.1742188 4.921875,23.1742188 C4.96953125,23.5570312 5.11328125,23.8929688 5.40078125,24.1320313 C5.63984375,24.4195312 5.97578125,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 6.40625,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 18.2359375,24.5632812 18.2359375,24.5632812 C18.6671875,24.5632812 19.0023438,24.4195312 19.2898438,24.1320313 C19.5289063,23.8929688 19.6726562,23.5570312 19.7210938,23.1742188 C19.7210938,23.1742188 19.7210938,23.1742188 19.7210938,23.1742188 C19.7210938,23.1742188 20.63125,4.92734375 20.63125,4.92734375 C20.63125,4.92734375 22.115625,4.92734375 22.115625,4.92734375 C22.4507812,4.92734375 22.5945312,4.78359375 22.5945312,4.4484375 C22.5945312,4.11328125 22.4507812,3.96953125 22.115625,3.96953125 L22.1140625,3.96875 Z M8.17734375,3.96875 C8.17734375,3.96875 8.56015625,2.38828125 8.56015625,2.38828125 C8.6078125,2.1484375 8.79921875,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 9.0390625,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 15.5523437,2.00546875 15.5523437,2.00546875 C15.7914062,2.00546875 15.9835937,2.14921875 16.03125,2.38828125 C16.03125,2.38828125 16.03125,2.38828125 16.03125,2.38828125 C16.03125,2.38828125 16.4140625,3.96875 16.4140625,3.96875 C16.4140625,3.96875 8.1765625,3.96875 8.1765625,3.96875 L8.17734375,3.96875 Z M19.6710938,4.9265625 C19.6710938,4.9265625 18.7609375,23.1257812 18.7609375,23.1257812 C18.7132812,23.4132812 18.521875,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 18.234375,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 6.4046875,23.5570312 6.4046875,23.5570312 C6.1171875,23.5570312 5.92578125,23.4132812 5.878125,23.1257812 C5.878125,23.1257812 5.878125,23.1257812 5.878125,23.1257812 C5.878125,23.1257812 4.96796875,4.9265625 4.96796875,4.9265625 C4.96796875,4.9265625 19.6710938,4.9265625 19.6710938,4.9265625 L19.6710938,4.9265625 Z M8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,18.1929687 8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,10.3382812 8.84765625,10.3382812 C8.84765625,10.003125 9.0390625,9.859375 9.37421875,9.859375 C9.37421875,9.859375 9.37421875,9.859375 9.37421875,9.859375 C9.709375,9.859375 9.853125,10.003125 9.853125,10.3382812 C9.853125,10.3382812 9.853125,10.3382812 9.853125,10.3382812 C9.853125,10.3382812 9.853125,18.1929687 9.853125,18.1929687 C9.853125,18.528125 9.709375,18.671875 9.37421875,18.671875 C9.37421875,18.671875 9.37421875,18.671875 9.37421875,18.671875 C9.0390625,18.671875 8.84765625,18.528125 8.84765625,18.1929687 Z M14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,18.1929687 14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,10.3382812 14.7382812,10.3382812 C14.7382812,10.003125 14.8820313,9.859375 15.2171875,9.859375 C15.2171875,9.859375 15.2171875,9.859375 15.2171875,9.859375 C15.5523437,9.859375 15.74375,10.003125 15.74375,10.3382812 C15.74375,10.3382812 15.74375,10.3382812 15.74375,10.3382812 C15.74375,10.3382812 15.74375,18.1929687 15.74375,18.1929687 C15.74375,18.528125 15.5523437,18.671875 15.2171875,18.671875 C15.2171875,18.671875 15.2171875,18.671875 15.2171875,18.671875 C14.8820313,18.671875 14.7382812,18.528125 14.7382812,18.1929687 Z M11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,19.1507813 11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,9.38046875 11.8164062,9.38046875 C11.8164062,9.0453125 11.9601563,8.85390625 12.2953125,8.85390625 C12.6304687,8.85390625 12.7742187,9.0453125 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,9.38046875 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,19.1507813 12.7742187,19.1507813 C12.7742187,19.4859375 12.6304687,19.6773437 12.2953125,19.6773437 C11.9601563,19.6773437 11.8164062,19.4859375 11.8164062,19.1507813 Z"/>
</svg>`,at=()=>E`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.5226562,11.6265625 C20.6664062,11.6265625 20.7617188,11.6742188 20.8578125,11.7703125 C20.9539062,11.8664063 21.0015625,11.9617188 21.0015625,12.1054688 C21.0015625,12.2492188 20.9539062,12.3445313 20.8578125,12.440625 C20.8578125,12.440625 20.8578125,12.440625 20.8578125,12.440625 C20.8578125,12.440625 13.2429687,20.0554687 13.2429687,20.0554687 C12.1414062,21.109375 10.8484375,21.6359375 9.41171875,21.6359375 C7.975,21.6359375 6.68203125,21.109375 5.58046875,20.0554687 C5.58046875,20.0554687 5.58046875,20.0554687 5.58046875,20.0554687 C4.5265625,19.0015625 4,17.75625 4,16.271875 C4,16.271875 4,16.271875 4,16.271875 C4,14.8351563 4.5265625,13.5421875 5.58046875,12.440625 C5.58046875,12.440625 5.58046875,12.440625 5.58046875,12.440625 C5.58046875,12.440625 14.9671875,3.14921875 14.9671875,3.14921875 C15.7335937,2.3828125 16.64375,2 17.7453125,2 C18.846875,2 19.7570312,2.3828125 20.5234375,3.14921875 C20.5234375,3.14921875 20.5234375,3.14921875 20.5234375,3.14921875 C21.2898437,3.86796875 21.6726562,4.77734375 21.6726562,5.87890625 C21.6726562,5.87890625 21.6726562,5.87890625 21.6726562,5.87890625 C21.6726562,6.98046875 21.2898437,7.890625 20.5234375,8.65703125 C20.5234375,8.65703125 20.5234375,8.65703125 20.5234375,8.65703125 C20.5234375,8.65703125 11.8546875,17.2773438 11.8546875,17.2773438 C11.3757813,17.75625 10.8007812,17.9960938 10.1304687,17.9960938 C10.1304687,17.9960938 10.1304687,17.9960938 10.1304687,17.9960938 C9.5078125,17.9960938 8.88515625,17.7570313 8.35859375,17.2773438 C8.35859375,17.2773438 8.35859375,17.2773438 8.35859375,17.2773438 C7.8796875,16.7984375 7.63984375,16.2234375 7.63984375,15.553125 C7.63984375,14.8828125 7.87890625,14.3078125 8.35859375,13.8289062 C8.35859375,13.8289062 8.35859375,13.8289062 8.35859375,13.8289062 C8.35859375,13.8289062 16.6921875,5.54375 16.6921875,5.54375 C16.7882812,5.44765625 16.93125,5.4 17.075,5.4 C17.075,5.4 17.075,5.4 17.075,5.4 C17.21875,5.4 17.3140625,5.44765625 17.4101562,5.54375 C17.50625,5.63984375 17.5539062,5.73515625 17.5539062,5.87890625 C17.5539062,5.87890625 17.5539062,5.87890625 17.5539062,5.87890625 C17.5539062,6.02265625 17.50625,6.16640625 17.4101562,6.26171875 C17.4101562,6.26171875 17.4101562,6.26171875 17.4101562,6.26171875 C17.4101562,6.26171875 9.0765625,14.4992187 9.0765625,14.4992187 C8.7890625,14.7867187 8.6453125,15.121875 8.6453125,15.553125 C8.6453125,15.984375 8.7890625,16.3195313 9.0765625,16.6070312 C9.3640625,16.8945312 9.69921875,17.0382813 10.1304687,17.0382813 C10.1304687,17.0382813 10.1304687,17.0382813 10.1304687,17.0382813 C10.5132812,17.0382813 10.8492187,16.8945312 11.1359375,16.6070312 C11.1359375,16.6070312 11.1359375,16.6070312 11.1359375,16.6070312 C11.1359375,16.6070312 19.8523437,7.98671875 19.8523437,7.98671875 C20.4273437,7.41171875 20.7140625,6.69375 20.7140625,5.8796875 C20.7140625,5.8796875 20.7140625,5.8796875 20.7140625,5.8796875 C20.7140625,5.065625 20.4265625,4.3953125 19.8523437,3.8203125 C19.8523437,3.8203125 19.8523437,3.8203125 19.8523437,3.8203125 C19.2296875,3.2453125 18.5117187,2.95859375 17.7453125,2.95859375 C17.7453125,2.95859375 17.7453125,2.95859375 17.7453125,2.95859375 C16.93125,2.95859375 16.2609375,3.24609375 15.6859375,3.8203125 C15.6859375,3.8203125 15.6859375,3.8203125 15.6859375,3.8203125 C15.6859375,3.8203125 6.29921875,13.159375 6.29921875,13.159375 C5.4375,13.9734375 5.00625,14.9789062 5.00625,16.2726562 C5.00625,16.2726562 5.00625,16.2726562 5.00625,16.2726562 C5.00625,17.5179688 5.4375,18.5234375 6.29921875,19.3375 C6.29921875,19.3375 6.29921875,19.3375 6.29921875,19.3375 C7.1609375,20.1992188 8.21484375,20.6304688 9.4125,20.6304688 C9.4125,20.6304688 9.4125,20.6304688 9.4125,20.6304688 C10.7054687,20.6304688 11.7117187,20.1992188 12.5257812,19.3375 C12.5257812,19.3375 12.5257812,19.3375 12.5257812,19.3375 C12.5257812,19.3375 20.1882812,11.7703125 20.1882812,11.7703125 C20.284375,11.6742188 20.3796875,11.6265625 20.5234375,11.6265625 L20.5226562,11.6265625 Z"/>
</svg>`,it=()=>E`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1632813,6.753125 C22.1632813,6.753125 22.1632813,6.753125 22.1632813,6.753125 C22.1632813,6.753125 15.8414062,0.43125 15.8414062,0.43125 C15.6023437,0.14375 15.21875,0 14.7875,0 C14.7875,0 14.7875,0 14.7875,0 C14.7875,0 3.48515625,0 3.48515625,0 C3.05390625,0 2.71875,0.14375 2.43125,0.43125 C2.14375,0.71875 2,1.05390625 2,1.48515625 C2,1.48515625 2,1.48515625 2,1.48515625 C2,1.48515625 2,23.0367188 2,23.0367188 C2,23.4679688 2.14375,23.803125 2.43125,24.090625 C2.71875,24.378125 3.05390625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 3.48515625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 21.109375,24.521875 21.109375,24.521875 C21.540625,24.521875 21.8757812,24.378125 22.1632813,24.090625 C22.4507812,23.803125 22.5945312,23.4679688 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,23.0367188 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,7.80703125 22.5945312,7.80703125 C22.5945312,7.37578125 22.4507812,7.040625 22.1632813,6.753125 Z M15.6976563,1.6765625 C15.6976563,1.6765625 20.8703125,6.84921875 20.8703125,6.84921875 C20.8703125,6.84921875 16.225,6.84921875 16.225,6.84921875 C15.8898438,6.84921875 15.7460938,6.70546875 15.7460938,6.3703125 C15.7460938,6.3703125 15.7460938,6.3703125 15.7460938,6.3703125 C15.7460938,6.3703125 15.6984375,1.6765625 15.6984375,1.6765625 L15.6976563,1.6765625 Z M21.6367188,7.8546875 C21.6367188,7.8546875 21.6367188,23.0367188 21.6367188,23.0367188 C21.6367188,23.371875 21.4453125,23.515625 21.1101563,23.515625 C21.1101563,23.515625 21.1101563,23.515625 21.1101563,23.515625 C21.1101563,23.515625 3.4859375,23.515625 3.4859375,23.515625 C3.15078125,23.515625 2.959375,23.371875 2.959375,23.0367188 C2.959375,23.0367188 2.959375,23.0367188 2.959375,23.0367188 C2.959375,23.0367188 2.959375,1.48515625 2.959375,1.48515625 C2.959375,1.15 3.15078125,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 3.4859375,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 14.740625,0.95859375 14.740625,0.95859375 C14.740625,0.95859375 14.740625,6.3703125 14.740625,6.3703125 C14.740625,6.8015625 14.884375,7.13671875 15.171875,7.42421875 C15.459375,7.71171875 15.7945313,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 16.2257813,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 21.6375,7.85546875 21.6375,7.85546875 L21.6367188,7.8546875 Z"/>
</svg>`,st=(t,e,a,i,s)=>{const n=document.createElement("div");n.setAttribute("role","alertdialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-labelledby",t),n.setAttribute("aria-describedby",""),n.setAttribute("class","mashup-modal");const o=document.createElement("div");n.appendChild(o);const r='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',c=()=>{document.body.removeEventListener("click",l),document.body.removeEventListener("keydown",d),n&&(n.previousElementSibling&&(n.previousElementSibling.removeAttribute("aria-hidden"),n.previousElementSibling.focus()),n.remove()),s&&s()},l=t=>{if(t){let e=t.target;if(e.download)return;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e){const t=e.closest("button");if((null===t||"close"!==t.getAttribute("data-action-id"))&&!e.classList.contains("mashup-modal")&&null!==e.closest(".mashup-modal"))return}c()}},d=t=>{if("Escape"===t.key)return void l(t);if(!("Tab"===t.key||9===t.keyCode))return;const e=n.querySelectorAll(r),a=e[e.length-1],i=e[0];t.shiftKey?document.activeElement===i&&(a.focus(),t.preventDefault()):document.activeElement===a&&(i.focus(),t.preventDefault())};return E`
  <div class='modalcontent'>
    <button type="button" @click="${t=>{t.preventDefault(),t.stopPropagation();const e=t.target.closest(".modalcontent");if(null===e)c();else if(1===e.children.length){e.firstElementChild.setAttribute("aria-hidden","true"),n.style.opacity=0,e.appendChild(n),i(o);n.querySelectorAll(r)[0].focus(),document.body.addEventListener("click",l),document.body.addEventListener("keydown",d),n.offsetHeight,n.style=""}else c()}}" class="pzhc pzbutton ${a}" title="${i18n.t(t)}">${i18n.t(e)}</button>
  </div>`};class nt{static create(...t){return new this(...t)}mixIn(t){return Object.assign(this,t)}clone(){const t=new this.constructor;return Object.assign(t,this),t}}class ot extends nt{constructor(t=[],e=4*t.length){super();let a=t;if(a instanceof ArrayBuffer&&(a=new Uint8Array(a)),(a instanceof Int8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array)&&(a=new Uint8Array(a.buffer,a.byteOffset,a.byteLength)),a instanceof Uint8Array){const t=a.byteLength,e=[];for(let i=0;i<t;i+=1)e[i>>>2]|=a[i]<<24-i%4*8;this.words=e,this.sigBytes=t}else this.words=t,this.sigBytes=e}static random(t){const e=[],a=t=>{let e=t,a=987654321;const i=4294967295;return()=>{a=36969*(65535&a)+(a>>16)&i,e=18e3*(65535&e)+(e>>16)&i;let t=(a<<16)+e&i;return t/=4294967296,t+=.5,t*(Math.random()>.5?1:-1)}};for(let i,s=0;s<t;s+=4){const t=a(4294967296*(i||Math.random()));i=987654071*t(),e.push(4294967296*t()|0)}return new ot(e,t)}toString(t=rt){return t.stringify(this)}concat(t){const e=this.words,a=t.words,i=this.sigBytes,s=t.sigBytes;if(this.clamp(),i%4)for(let t=0;t<s;t+=1){const s=a[t>>>2]>>>24-t%4*8&255;e[i+t>>>2]|=s<<24-(i+t)%4*8}else for(let t=0;t<s;t+=4)e[i+t>>>2]=a[t>>>2];return this.sigBytes+=s,this}clamp(){const{words:t,sigBytes:e}=this;t[e>>>2]&=4294967295<<32-e%4*8,t.length=Math.ceil(e/4)}clone(){const t=super.clone.call(this);return t.words=this.words.slice(0),t}}const rt={stringify(t){const{words:e,sigBytes:a}=t,i=[];for(let t=0;t<a;t+=1){const a=e[t>>>2]>>>24-t%4*8&255;i.push((a>>>4).toString(16)),i.push((15&a).toString(16))}return i.join("")},parse(t){const e=t.length,a=[];for(let i=0;i<e;i+=2)a[i>>>3]|=parseInt(t.substr(i,2),16)<<24-i%8*4;return new ot(a,e/2)}},ct={stringify(t){const{words:e,sigBytes:a}=t,i=[];for(let t=0;t<a;t+=1){const a=e[t>>>2]>>>24-t%4*8&255;i.push(String.fromCharCode(a))}return i.join("")},parse(t){const e=t.length,a=[];for(let i=0;i<e;i+=1)a[i>>>2]|=(255&t.charCodeAt(i))<<24-i%4*8;return new ot(a,e)}},lt={stringify(t){try{return decodeURIComponent(escape(ct.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:t=>ct.parse(unescape(encodeURIComponent(t)))};class dt extends nt{constructor(){super(),this._minBufferSize=0}reset(){this._data=new ot,this._nDataBytes=0}_append(t){let e=t;"string"==typeof e&&(e=lt.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes}_process(t){let e;const{_data:a,blockSize:i}=this,s=a.words,n=a.sigBytes;let o=n/(4*i);o=t?Math.ceil(o):Math.max((0|o)-this._minBufferSize,0);const r=o*i,c=Math.min(4*r,n);if(r){for(let t=0;t<r;t+=i)this._doProcessBlock(s,t);e=s.splice(0,r),a.sigBytes-=c}return new ot(e,c)}clone(){const t=super.clone.call(this);return t._data=this._data.clone(),t}}class ht extends dt{constructor(t){super(),this.blockSize=16,this.cfg=Object.assign(new nt,t),this.reset()}static _createHelper(t){return(e,a)=>new t(a).finalize(e)}static _createHmacHelper(t){return(e,a)=>new ut(t,a).finalize(e)}reset(){super.reset.call(this),this._doReset()}update(t){return this._append(t),this._process(),this}finalize(t){t&&this._append(t);return this._doFinalize()}}class ut extends nt{constructor(t,e){super();const a=new t;this._hasher=a;let i=e;"string"==typeof i&&(i=lt.parse(i));const s=a.blockSize,n=4*s;i.sigBytes>n&&(i=a.finalize(e)),i.clamp();const o=i.clone();this._oKey=o;const r=i.clone();this._iKey=r;const c=o.words,l=r.words;for(let t=0;t<s;t+=1)c[t]^=1549556828,l[t]^=909522486;o.sigBytes=n,r.sigBytes=n,this.reset()}reset(){const t=this._hasher;t.reset(),t.update(this._iKey)}update(t){return this._hasher.update(t),this}finalize(t){const e=this._hasher,a=e.finalize(t);e.reset();return e.finalize(this._oKey.clone().concat(a))}}const pt=ot;class gt extends nt{constructor(t,e){super(),this.high=t,this.low=e}}class ft extends nt{constructor(t=[],e=8*t.length){super(),this.words=t,this.sigBytes=e}toX32(){const t=this.words,e=t.length,a=[];for(let i=0;i<e;i+=1){const e=t[i];a.push(e.high),a.push(e.low)}return pt.create(a,this.sigBytes)}clone(){const t=super.clone.call(this);t.words=this.words.slice(0);const{words:e}=t,a=e.length;for(let t=0;t<a;t+=1)e[t]=e[t].clone();return t}}const mt={stringify(t){const{words:e,sigBytes:a}=t,i=this._map;t.clamp();const s=[];for(let t=0;t<a;t+=3){const n=(e[t>>>2]>>>24-t%4*8&255)<<16|(e[t+1>>>2]>>>24-(t+1)%4*8&255)<<8|e[t+2>>>2]>>>24-(t+2)%4*8&255;for(let e=0;e<4&&t+.75*e<a;e+=1)s.push(i.charAt(n>>>6*(3-e)&63))}const n=i.charAt(64);if(n)for(;s.length%4;)s.push(n);return s.join("")},parse(t){let e=t.length;const a=this._map;let i=this._reverseMap;if(!i){this._reverseMap=[],i=this._reverseMap;for(let t=0;t<a.length;t+=1)i[a.charCodeAt(t)]=t}const s=a.charAt(64);if(s){const a=t.indexOf(s);-1!==a&&(e=a)}return((t,e,a)=>{const i=[];let s=0;for(let n=0;n<e;n+=1)if(n%4){const e=a[t.charCodeAt(n-1)]<<n%4*2|a[t.charCodeAt(n)]>>>6-n%4*2;i[s>>>2]|=e<<24-s%4*8,s+=1}return ot.create(i,s)})(t,e,i)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},yt=[];for(let t=0;t<64;t+=1)yt[t]=4294967296*Math.abs(Math.sin(t+1))|0;const bt=(t,e,a,i,s,n,o)=>{const r=t+(e&a|~e&i)+s+o;return(r<<n|r>>>32-n)+e},vt=(t,e,a,i,s,n,o)=>{const r=t+(e&i|a&~i)+s+o;return(r<<n|r>>>32-n)+e},$t=(t,e,a,i,s,n,o)=>{const r=t+(e^a^i)+s+o;return(r<<n|r>>>32-n)+e},wt=(t,e,a,i,s,n,o)=>{const r=t+(a^(e|~i))+s+o;return(r<<n|r>>>32-n)+e};class xt extends ht{_doReset(){this._hash=new ot([1732584193,4023233417,2562383102,271733878])}_doProcessBlock(t,e){const a=t;for(let i=0;i<16;i+=1){const s=e+i,n=t[s];a[s]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8)}const i=this._hash.words,s=a[e+0],n=a[e+1],o=a[e+2],r=a[e+3],c=a[e+4],l=a[e+5],d=a[e+6],h=a[e+7],u=a[e+8],p=a[e+9],g=a[e+10],f=a[e+11],m=a[e+12],y=a[e+13],b=a[e+14],v=a[e+15];let $=i[0],w=i[1],x=i[2],_=i[3];$=bt($,w,x,_,s,7,yt[0]),_=bt(_,$,w,x,n,12,yt[1]),x=bt(x,_,$,w,o,17,yt[2]),w=bt(w,x,_,$,r,22,yt[3]),$=bt($,w,x,_,c,7,yt[4]),_=bt(_,$,w,x,l,12,yt[5]),x=bt(x,_,$,w,d,17,yt[6]),w=bt(w,x,_,$,h,22,yt[7]),$=bt($,w,x,_,u,7,yt[8]),_=bt(_,$,w,x,p,12,yt[9]),x=bt(x,_,$,w,g,17,yt[10]),w=bt(w,x,_,$,f,22,yt[11]),$=bt($,w,x,_,m,7,yt[12]),_=bt(_,$,w,x,y,12,yt[13]),x=bt(x,_,$,w,b,17,yt[14]),w=bt(w,x,_,$,v,22,yt[15]),$=vt($,w,x,_,n,5,yt[16]),_=vt(_,$,w,x,d,9,yt[17]),x=vt(x,_,$,w,f,14,yt[18]),w=vt(w,x,_,$,s,20,yt[19]),$=vt($,w,x,_,l,5,yt[20]),_=vt(_,$,w,x,g,9,yt[21]),x=vt(x,_,$,w,v,14,yt[22]),w=vt(w,x,_,$,c,20,yt[23]),$=vt($,w,x,_,p,5,yt[24]),_=vt(_,$,w,x,b,9,yt[25]),x=vt(x,_,$,w,r,14,yt[26]),w=vt(w,x,_,$,u,20,yt[27]),$=vt($,w,x,_,y,5,yt[28]),_=vt(_,$,w,x,o,9,yt[29]),x=vt(x,_,$,w,h,14,yt[30]),w=vt(w,x,_,$,m,20,yt[31]),$=$t($,w,x,_,l,4,yt[32]),_=$t(_,$,w,x,u,11,yt[33]),x=$t(x,_,$,w,f,16,yt[34]),w=$t(w,x,_,$,b,23,yt[35]),$=$t($,w,x,_,n,4,yt[36]),_=$t(_,$,w,x,c,11,yt[37]),x=$t(x,_,$,w,h,16,yt[38]),w=$t(w,x,_,$,g,23,yt[39]),$=$t($,w,x,_,y,4,yt[40]),_=$t(_,$,w,x,s,11,yt[41]),x=$t(x,_,$,w,r,16,yt[42]),w=$t(w,x,_,$,d,23,yt[43]),$=$t($,w,x,_,p,4,yt[44]),_=$t(_,$,w,x,m,11,yt[45]),x=$t(x,_,$,w,v,16,yt[46]),w=$t(w,x,_,$,o,23,yt[47]),$=wt($,w,x,_,s,6,yt[48]),_=wt(_,$,w,x,h,10,yt[49]),x=wt(x,_,$,w,b,15,yt[50]),w=wt(w,x,_,$,l,21,yt[51]),$=wt($,w,x,_,m,6,yt[52]),_=wt(_,$,w,x,r,10,yt[53]),x=wt(x,_,$,w,g,15,yt[54]),w=wt(w,x,_,$,n,21,yt[55]),$=wt($,w,x,_,u,6,yt[56]),_=wt(_,$,w,x,v,10,yt[57]),x=wt(x,_,$,w,d,15,yt[58]),w=wt(w,x,_,$,y,21,yt[59]),$=wt($,w,x,_,c,6,yt[60]),_=wt(_,$,w,x,f,10,yt[61]),x=wt(x,_,$,w,o,15,yt[62]),w=wt(w,x,_,$,p,21,yt[63]),i[0]=i[0]+$|0,i[1]=i[1]+w|0,i[2]=i[2]+x|0,i[3]=i[3]+_|0}_doFinalize(){const t=this._data,e=t.words,a=8*this._nDataBytes,i=8*t.sigBytes;e[i>>>5]|=128<<24-i%32;const s=Math.floor(a/4294967296),n=a;e[15+(i+64>>>9<<4)]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),e[14+(i+64>>>9<<4)]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8),t.sigBytes=4*(e.length+1),this._process();const o=this._hash,r=o.words;for(let t=0;t<4;t+=1){const e=r[t];r[t]=16711935&(e<<8|e>>>24)|4278255360&(e<<24|e>>>8)}return o}clone(){const t=super.clone.call(this);return t._hash=this._hash.clone(),t}}const _t=ht._createHelper(xt),Ct=ht._createHmacHelper(xt);class kt extends nt{constructor(t){super(),this.cfg=Object.assign(new nt,{keySize:4,hasher:xt,iterations:1},t)}compute(t,e){let a;const{cfg:i}=this,s=i.hasher.create(),n=ot.create(),o=n.words,{keySize:r,iterations:c}=i;for(;o.length<r;){a&&s.update(a),a=s.update(t).finalize(e),s.reset();for(let t=1;t<c;t+=1)a=s.finalize(a),s.reset();n.concat(a)}return n.sigBytes=4*r,n}}class Dt extends dt{constructor(t,e,a){super(),this.cfg=Object.assign(new nt,a),this._xformMode=t,this._key=e,this.reset()}static createEncryptor(t,e){return this.create(this._ENC_XFORM_MODE,t,e)}static createDecryptor(t,e){return this.create(this._DEC_XFORM_MODE,t,e)}static _createHelper(t){const e=t=>"string"==typeof t?Nt:Lt;return{encrypt:(a,i,s)=>e(i).encrypt(t,a,i,s),decrypt:(a,i,s)=>e(i).decrypt(t,a,i,s)}}reset(){super.reset.call(this),this._doReset()}process(t){return this._append(t),this._process()}finalize(t){t&&this._append(t);return this._doFinalize()}}Dt._ENC_XFORM_MODE=1,Dt._DEC_XFORM_MODE=2,Dt.keySize=4,Dt.ivSize=4;class At extends Dt{constructor(...t){super(...t),this.blockSize=1}_doFinalize(){return this._process(!0)}}class St extends nt{constructor(t,e){super(),this._cipher=t,this._iv=e}static createEncryptor(t,e){return this.Encryptor.create(t,e)}static createDecryptor(t,e){return this.Decryptor.create(t,e)}}function It(t,e,a){const i=t;let s;const n=this._iv;n?(s=n,this._iv=void 0):s=this._prevBlock;for(let t=0;t<a;t+=1)i[e+t]^=s[t]}class Et extends St{}Et.Encryptor=class extends Et{processBlock(t,e){const a=this._cipher,{blockSize:i}=a;It.call(this,t,e,i),a.encryptBlock(t,e),this._prevBlock=t.slice(e,e+i)}},Et.Decryptor=class extends Et{processBlock(t,e){const a=this._cipher,{blockSize:i}=a,s=t.slice(e,e+i);a.decryptBlock(t,e),It.call(this,t,e,i),this._prevBlock=s}};const Tt={pad(t,e){const a=4*e,i=a-t.sigBytes%a,s=i<<24|i<<16|i<<8|i,n=[];for(let t=0;t<i;t+=4)n.push(s);const o=ot.create(n,i);t.concat(o)},unpad(t){const e=t,a=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=a}};class zt extends Dt{constructor(t,e,a){super(t,e,Object.assign({mode:Et,padding:Tt},a)),this.blockSize=4}reset(){let t;super.reset.call(this);const{cfg:e}=this,{iv:a,mode:i}=e;this._xformMode===this.constructor._ENC_XFORM_MODE?t=i.createEncryptor:(t=i.createDecryptor,this._minBufferSize=1),this._mode=t.call(i,this,a&&a.words),this._mode.__creator=t}_doProcessBlock(t,e){this._mode.processBlock(t,e)}_doFinalize(){let t;const{padding:e}=this.cfg;return this._xformMode===this.constructor._ENC_XFORM_MODE?(e.pad(this._data,this.blockSize),t=this._process(!0)):(t=this._process(!0),e.unpad(t)),t}}class Rt extends nt{constructor(t){super(),this.mixIn(t)}toString(t){return(t||this.formatter).stringify(this)}}const Mt={stringify(t){let e;const{ciphertext:a,salt:i}=t;return e=i?ot.create([1398893684,1701076831]).concat(i).concat(a):a,e.toString(mt)},parse(t){let e;const a=mt.parse(t),i=a.words;return 1398893684===i[0]&&1701076831===i[1]&&(e=ot.create(i.slice(2,4)),i.splice(0,4),a.sigBytes-=16),Rt.create({ciphertext:a,salt:e})}};class Lt extends nt{static encrypt(t,e,a,i){const s=Object.assign(new nt,this.cfg,i),n=t.createEncryptor(a,s),o=n.finalize(e),r=n.cfg;return Rt.create({ciphertext:o,key:a,iv:r.iv,algorithm:t,mode:r.mode,padding:r.padding,blockSize:n.blockSize,formatter:s.format})}static decrypt(t,e,a,i){let s=e;const n=Object.assign(new nt,this.cfg,i);s=this._parse(s,n.format);return t.createDecryptor(a,n).finalize(s.ciphertext)}static _parse(t,e){return"string"==typeof t?e.parse(t,this):t}}Lt.cfg=Object.assign(new nt,{format:Mt});const Bt={execute(t,e,a,i){let s=i;s||(s=ot.random(8));const n=kt.create({keySize:e+a}).compute(t,s),o=ot.create(n.words.slice(e),4*a);return n.sigBytes=4*e,Rt.create({key:n,iv:o,salt:s})}};class Nt extends Lt{static encrypt(t,e,a,i){const s=Object.assign(new nt,this.cfg,i),n=s.kdf.execute(a,t.keySize,t.ivSize);s.iv=n.iv;const o=Lt.encrypt.call(this,t,e,n.key,s);return o.mixIn(n),o}static decrypt(t,e,a,i){let s=e;const n=Object.assign(new nt,this.cfg,i);s=this._parse(s,n.format);const o=n.kdf.execute(a,t.keySize,t.ivSize,s.salt);n.iv=o.iv;return Lt.decrypt.call(this,t,s,o.key,n)}}Nt.cfg=Object.assign(Lt.cfg,{kdf:Bt});const Ht=t=>t<<8&4278255360|t>>>8&16711935,Ot={stringify(t){const{words:e,sigBytes:a}=t,i=[];for(let t=0;t<a;t+=2){const a=e[t>>>2]>>>16-t%4*8&65535;i.push(String.fromCharCode(a))}return i.join("")},parse(t){const e=t.length,a=[];for(let i=0;i<e;i+=1)a[i>>>1]|=t.charCodeAt(i)<<16-i%2*16;return ot.create(a,2*e)}},Pt=Ot,Ut={stringify(t){const{words:e,sigBytes:a}=t,i=[];for(let t=0;t<a;t+=2){const a=Ht(e[t>>>2]>>>16-t%4*8&65535);i.push(String.fromCharCode(a))}return i.join("")},parse(t){const e=t.length,a=[];for(let i=0;i<e;i+=1)a[i>>>1]|=Ht(t.charCodeAt(i)<<16-i%2*16);return ot.create(a,2*e)}},qt=[];class Ft extends ht{_doReset(){this._hash=new ot([1732584193,4023233417,2562383102,271733878,3285377520])}_doProcessBlock(t,e){const a=this._hash.words;let i=a[0],s=a[1],n=a[2],o=a[3],r=a[4];for(let a=0;a<80;a+=1){if(a<16)qt[a]=0|t[e+a];else{const t=qt[a-3]^qt[a-8]^qt[a-14]^qt[a-16];qt[a]=t<<1|t>>>31}let c=(i<<5|i>>>27)+r+qt[a];c+=a<20?1518500249+(s&n|~s&o):a<40?1859775393+(s^n^o):a<60?(s&n|s&o|n&o)-1894007588:(s^n^o)-899497514,r=o,o=n,n=s<<30|s>>>2,s=i,i=c}a[0]=a[0]+i|0,a[1]=a[1]+s|0,a[2]=a[2]+n|0,a[3]=a[3]+o|0,a[4]=a[4]+r|0}_doFinalize(){const t=this._data,e=t.words,a=8*this._nDataBytes,i=8*t.sigBytes;return e[i>>>5]|=128<<24-i%32,e[14+(i+64>>>9<<4)]=Math.floor(a/4294967296),e[15+(i+64>>>9<<4)]=a,t.sigBytes=4*e.length,this._process(),this._hash}clone(){const t=super.clone.call(this);return t._hash=this._hash.clone(),t}}const jt=ht._createHelper(Ft),Vt=ht._createHmacHelper(Ft),Wt=[],Zt=[],Kt=t=>{const e=Math.sqrt(t);for(let a=2;a<=e;a+=1)if(!(t%a))return!1;return!0},Jt=t=>4294967296*(t-(0|t))|0;let Xt=2,Gt=0;for(;Gt<64;)Kt(Xt)&&(Gt<8&&(Wt[Gt]=Jt(Xt**.5)),Zt[Gt]=Jt(Xt**(1/3)),Gt+=1),Xt+=1;const Yt=[];class Qt extends ht{_doReset(){this._hash=new ot(Wt.slice(0))}_doProcessBlock(t,e){const a=this._hash.words;let i=a[0],s=a[1],n=a[2],o=a[3],r=a[4],c=a[5],l=a[6],d=a[7];for(let a=0;a<64;a+=1){if(a<16)Yt[a]=0|t[e+a];else{const t=Yt[a-15],e=(t<<25|t>>>7)^(t<<14|t>>>18)^t>>>3,i=Yt[a-2],s=(i<<15|i>>>17)^(i<<13|i>>>19)^i>>>10;Yt[a]=e+Yt[a-7]+s+Yt[a-16]}const h=i&s^i&n^s&n,u=(i<<30|i>>>2)^(i<<19|i>>>13)^(i<<10|i>>>22),p=d+((r<<26|r>>>6)^(r<<21|r>>>11)^(r<<7|r>>>25))+(r&c^~r&l)+Zt[a]+Yt[a];d=l,l=c,c=r,r=o+p|0,o=n,n=s,s=i,i=p+(u+h)|0}a[0]=a[0]+i|0,a[1]=a[1]+s|0,a[2]=a[2]+n|0,a[3]=a[3]+o|0,a[4]=a[4]+r|0,a[5]=a[5]+c|0,a[6]=a[6]+l|0,a[7]=a[7]+d|0}_doFinalize(){const t=this._data,e=t.words,a=8*this._nDataBytes,i=8*t.sigBytes;return e[i>>>5]|=128<<24-i%32,e[14+(i+64>>>9<<4)]=Math.floor(a/4294967296),e[15+(i+64>>>9<<4)]=a,t.sigBytes=4*e.length,this._process(),this._hash}clone(){const t=super.clone.call(this);return t._hash=this._hash.clone(),t}}const te=ht._createHelper(Qt),ee=ht._createHmacHelper(Qt);class ae extends Qt{_doReset(){this._hash=new ot([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])}_doFinalize(){const t=super._doFinalize.call(this);return t.sigBytes-=4,t}}const ie=Qt._createHelper(ae),se=Qt._createHmacHelper(ae),ne=[new gt(1116352408,3609767458),new gt(1899447441,602891725),new gt(3049323471,3964484399),new gt(3921009573,2173295548),new gt(961987163,4081628472),new gt(1508970993,3053834265),new gt(2453635748,2937671579),new gt(2870763221,3664609560),new gt(3624381080,2734883394),new gt(310598401,1164996542),new gt(607225278,1323610764),new gt(1426881987,3590304994),new gt(1925078388,4068182383),new gt(2162078206,991336113),new gt(2614888103,633803317),new gt(3248222580,3479774868),new gt(3835390401,2666613458),new gt(4022224774,944711139),new gt(264347078,2341262773),new gt(604807628,2007800933),new gt(770255983,1495990901),new gt(1249150122,1856431235),new gt(1555081692,3175218132),new gt(1996064986,2198950837),new gt(2554220882,3999719339),new gt(2821834349,766784016),new gt(2952996808,2566594879),new gt(3210313671,3203337956),new gt(3336571891,1034457026),new gt(3584528711,2466948901),new gt(113926993,3758326383),new gt(338241895,168717936),new gt(666307205,1188179964),new gt(773529912,1546045734),new gt(1294757372,1522805485),new gt(1396182291,2643833823),new gt(1695183700,2343527390),new gt(1986661051,1014477480),new gt(2177026350,1206759142),new gt(2456956037,344077627),new gt(2730485921,1290863460),new gt(2820302411,3158454273),new gt(3259730800,3505952657),new gt(3345764771,106217008),new gt(3516065817,3606008344),new gt(3600352804,1432725776),new gt(4094571909,1467031594),new gt(275423344,851169720),new gt(430227734,3100823752),new gt(506948616,1363258195),new gt(659060556,3750685593),new gt(883997877,3785050280),new gt(958139571,3318307427),new gt(1322822218,3812723403),new gt(1537002063,2003034995),new gt(1747873779,3602036899),new gt(1955562222,1575990012),new gt(2024104815,1125592928),new gt(2227730452,2716904306),new gt(2361852424,442776044),new gt(2428436474,593698344),new gt(2756734187,3733110249),new gt(3204031479,2999351573),new gt(3329325298,3815920427),new gt(3391569614,3928383900),new gt(3515267271,566280711),new gt(3940187606,3454069534),new gt(4118630271,4000239992),new gt(116418474,1914138554),new gt(174292421,2731055270),new gt(289380356,3203993006),new gt(460393269,320620315),new gt(685471733,587496836),new gt(852142971,1086792851),new gt(1017036298,365543100),new gt(1126000580,2618297676),new gt(1288033470,3409855158),new gt(1501505948,4234509866),new gt(1607167915,987167468),new gt(1816402316,1246189591)],oe=[];for(let t=0;t<80;t+=1)oe[t]=new gt;class re extends ht{constructor(){super(),this.blockSize=32}_doReset(){this._hash=new ft([new gt(1779033703,4089235720),new gt(3144134277,2227873595),new gt(1013904242,4271175723),new gt(2773480762,1595750129),new gt(1359893119,2917565137),new gt(2600822924,725511199),new gt(528734635,4215389547),new gt(1541459225,327033209)])}_doProcessBlock(t,e){const a=this._hash.words,i=a[0],s=a[1],n=a[2],o=a[3],r=a[4],c=a[5],l=a[6],d=a[7],h=i.high;let u=i.low;const p=s.high;let g=s.low;const f=n.high;let m=n.low;const y=o.high;let b=o.low;const v=r.high;let $=r.low;const w=c.high;let x=c.low;const _=l.high;let C=l.low;const k=d.high;let D=d.low,A=h,S=u,I=p,E=g,T=f,z=m,R=y,M=b,L=v,B=$,N=w,H=x,O=_,P=C,U=k,q=D;for(let a=0;a<80;a+=1){let i,s;const n=oe[a];if(a<16)n.high=0|t[e+2*a],s=n.high,n.low=0|t[e+2*a+1],i=n.low;else{const t=oe[a-15],e=t.high,o=t.low,r=(e>>>1|o<<31)^(e>>>8|o<<24)^e>>>7,c=(o>>>1|e<<31)^(o>>>8|e<<24)^(o>>>7|e<<25),l=oe[a-2],d=l.high,h=l.low,u=(d>>>19|h<<13)^(d<<3|h>>>29)^d>>>6,p=(h>>>19|d<<13)^(h<<3|d>>>29)^(h>>>6|d<<26),g=oe[a-7],f=g.high,m=g.low,y=oe[a-16],b=y.high,v=y.low;i=c+m,s=r+f+(i>>>0<c>>>0?1:0),i+=p,s=s+u+(i>>>0<p>>>0?1:0),i+=v,s=s+b+(i>>>0<v>>>0?1:0),n.high=s,n.low=i}const o=L&N^~L&O,r=B&H^~B&P,c=A&I^A&T^I&T,l=S&E^S&z^E&z,d=(A>>>28|S<<4)^(A<<30|S>>>2)^(A<<25|S>>>7),h=(S>>>28|A<<4)^(S<<30|A>>>2)^(S<<25|A>>>7),u=(L>>>14|B<<18)^(L>>>18|B<<14)^(L<<23|B>>>9),p=(B>>>14|L<<18)^(B>>>18|L<<14)^(B<<23|L>>>9),g=ne[a],f=g.high,m=g.low;let y=q+p,b=U+u+(y>>>0<q>>>0?1:0);y+=r,b=b+o+(y>>>0<r>>>0?1:0),y+=m,b=b+f+(y>>>0<m>>>0?1:0),y+=i,b=b+s+(y>>>0<i>>>0?1:0);const v=h+l;U=O,q=P,O=N,P=H,N=L,H=B,B=M+y|0,L=R+b+(B>>>0<M>>>0?1:0)|0,R=T,M=z,T=I,z=E,I=A,E=S,S=y+v|0,A=b+(d+c+(v>>>0<h>>>0?1:0))+(S>>>0<y>>>0?1:0)|0}i.low=u+S,u=i.low,i.high=h+A+(u>>>0<S>>>0?1:0),s.low=g+E,g=s.low,s.high=p+I+(g>>>0<E>>>0?1:0),n.low=m+z,m=n.low,n.high=f+T+(m>>>0<z>>>0?1:0),o.low=b+M,b=o.low,o.high=y+R+(b>>>0<M>>>0?1:0),r.low=$+B,$=r.low,r.high=v+L+($>>>0<B>>>0?1:0),c.low=x+H,x=c.low,c.high=w+N+(x>>>0<H>>>0?1:0),l.low=C+P,C=l.low,l.high=_+O+(C>>>0<P>>>0?1:0),d.low=D+q,D=d.low,d.high=k+U+(D>>>0<q>>>0?1:0)}_doFinalize(){const t=this._data,e=t.words,a=8*this._nDataBytes,i=8*t.sigBytes;e[i>>>5]|=128<<24-i%32,e[30+(i+128>>>10<<5)]=Math.floor(a/4294967296),e[31+(i+128>>>10<<5)]=a,t.sigBytes=4*e.length,this._process();return this._hash.toX32()}clone(){const t=super.clone.call(this);return t._hash=this._hash.clone(),t}}const ce=ht._createHelper(re),le=ht._createHmacHelper(re);class de extends re{_doReset(){this._hash=new ft([new gt(3418070365,3238371032),new gt(1654270250,914150663),new gt(2438529370,812702999),new gt(355462360,4144912697),new gt(1731405415,4290775857),new gt(2394180231,1750603025),new gt(3675008525,1694076839),new gt(1203062813,3204075428)])}_doFinalize(){const t=super._doFinalize.call(this);return t.sigBytes-=16,t}}const he=re._createHelper(de),ue=re._createHmacHelper(de),pe=[],ge=[],fe=[];let me=1,ye=0;for(let t=0;t<24;t+=1){pe[me+5*ye]=(t+1)*(t+2)/2%64;const e=(2*me+3*ye)%5;me=ye%5,ye=e}for(let t=0;t<5;t+=1)for(let e=0;e<5;e+=1)ge[t+5*e]=e+(2*t+3*e)%5*5;let be=1;for(let t=0;t<24;t+=1){let e=0,a=0;for(let t=0;t<7;t+=1){if(1&be){const i=(1<<t)-1;i<32?a^=1<<i:e^=1<<i-32}128&be?be=be<<1^113:be<<=1}fe[t]=gt.create(e,a)}const ve=[];for(let t=0;t<25;t+=1)ve[t]=gt.create();class $e extends ht{constructor(t){super(Object.assign({outputLength:512},t))}_doReset(){this._state=[];const t=this._state;for(let e=0;e<25;e+=1)t[e]=new gt;this.blockSize=(1600-2*this.cfg.outputLength)/32}_doProcessBlock(t,e){const a=this._state,i=this.blockSize/2;for(let s=0;s<i;s+=1){let i=t[e+2*s],n=t[e+2*s+1];i=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),n=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8);const o=a[s];o.high^=n,o.low^=i}for(let t=0;t<24;t+=1){for(let t=0;t<5;t+=1){let e=0,i=0;for(let s=0;s<5;s+=1){const n=a[t+5*s];e^=n.high,i^=n.low}const s=ve[t];s.high=e,s.low=i}for(let t=0;t<5;t+=1){const e=ve[(t+4)%5],i=ve[(t+1)%5],s=i.high,n=i.low,o=e.high^(s<<1|n>>>31),r=e.low^(n<<1|s>>>31);for(let e=0;e<5;e+=1){const i=a[t+5*e];i.high^=o,i.low^=r}}for(let t=1;t<25;t+=1){let e,i;const s=a[t],n=s.high,o=s.low,r=pe[t];r<32?(e=n<<r|o>>>32-r,i=o<<r|n>>>32-r):(e=o<<r-32|n>>>64-r,i=n<<r-32|o>>>64-r);const c=ve[ge[t]];c.high=e,c.low=i}const e=ve[0],i=a[0];e.high=i.high,e.low=i.low;for(let t=0;t<5;t+=1)for(let e=0;e<5;e+=1){const i=t+5*e,s=a[i],n=ve[i],o=ve[(t+1)%5+5*e],r=ve[(t+2)%5+5*e];s.high=n.high^~o.high&r.high,s.low=n.low^~o.low&r.low}const s=a[0],n=fe[t];s.high^=n.high,s.low^=n.low}}_doFinalize(){const t=this._data,e=t.words,a=8*t.sigBytes,i=32*this.blockSize;e[a>>>5]|=1<<24-a%32,e[(Math.ceil((a+1)/i)*i>>>5)-1]|=128,t.sigBytes=4*e.length,this._process();const s=this._state,n=this.cfg.outputLength/8,o=n/8,r=[];for(let t=0;t<o;t+=1){const e=s[t];let a=e.high,i=e.low;a=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),i=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),r.push(i),r.push(a)}return new ot(r,n)}clone(){const t=super.clone.call(this);t._state=this._state.slice(0);const e=t._state;for(let t=0;t<25;t+=1)e[t]=e[t].clone();return t}}const we=ht._createHelper($e),xe=ht._createHmacHelper($e),_e=ot.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),Ce=ot.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),ke=ot.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),De=ot.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),Ae=ot.create([0,1518500249,1859775393,2400959708,2840853838]),Se=ot.create([1352829926,1548603684,1836072691,2053994217,0]),Ie=(t,e,a)=>t^e^a,Ee=(t,e,a)=>t&e|~t&a,Te=(t,e,a)=>(t|~e)^a,ze=(t,e,a)=>t&a|e&~a,Re=(t,e,a)=>t^(e|~a),Me=(t,e)=>t<<e|t>>>32-e;class Le extends ht{_doReset(){this._hash=ot.create([1732584193,4023233417,2562383102,271733878,3285377520])}_doProcessBlock(t,e){const a=t;for(let t=0;t<16;t+=1){const i=e+t,s=a[i];a[i]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8)}const i=this._hash.words,s=Ae.words,n=Se.words,o=_e.words,r=Ce.words,c=ke.words,l=De.words;let d,h=i[0],u=i[1],p=i[2],g=i[3],f=i[4],m=i[0],y=i[1],b=i[2],v=i[3],$=i[4];for(let t=0;t<80;t+=1)d=h+a[e+o[t]]|0,d+=t<16?Ie(u,p,g)+s[0]:t<32?Ee(u,p,g)+s[1]:t<48?Te(u,p,g)+s[2]:t<64?ze(u,p,g)+s[3]:Re(u,p,g)+s[4],d|=0,d=Me(d,c[t]),d=d+f|0,h=f,f=g,g=Me(p,10),p=u,u=d,d=m+a[e+r[t]]|0,d+=t<16?Re(y,b,v)+n[0]:t<32?ze(y,b,v)+n[1]:t<48?Te(y,b,v)+n[2]:t<64?Ee(y,b,v)+n[3]:Ie(y,b,v)+n[4],d|=0,d=Me(d,l[t]),d=d+$|0,m=$,$=v,v=Me(b,10),b=y,y=d;d=i[1]+p+v|0,i[1]=i[2]+g+$|0,i[2]=i[3]+f+m|0,i[3]=i[4]+h+y|0,i[4]=i[0]+u+b|0,i[0]=d}_doFinalize(){const t=this._data,e=t.words,a=8*this._nDataBytes,i=8*t.sigBytes;e[i>>>5]|=128<<24-i%32,e[14+(i+64>>>9<<4)]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),t.sigBytes=4*(e.length+1),this._process();const s=this._hash,n=s.words;for(let t=0;t<5;t+=1){const e=n[t];n[t]=16711935&(e<<8|e>>>24)|4278255360&(e<<24|e>>>8)}return s}clone(){const t=super.clone.call(this);return t._hash=this._hash.clone(),t}}const Be=ht._createHelper(Le),Ne=ht._createHmacHelper(Le);class He extends nt{constructor(t){super(),this.cfg=Object.assign(new nt,{keySize:4,hasher:Ft,iterations:1},t)}compute(t,e){const{cfg:a}=this,i=ut.create(a.hasher,t),s=ot.create(),n=ot.create([1]),o=s.words,r=n.words,{keySize:c,iterations:l}=a;for(;o.length<c;){const t=i.update(e).finalize(n);i.reset();const a=t.words,o=a.length;let c=t;for(let t=1;t<l;t+=1){c=i.finalize(c),i.reset();const t=c.words;for(let e=0;e<o;e+=1)a[e]^=t[e]}s.concat(t),r[0]+=1}return s.sigBytes=4*c,s}}const Oe=[],Pe=[],Ue=[],qe=[],Fe=[],je=[],Ve=[],We=[],Ze=[],Ke=[],Je=[];for(let t=0;t<256;t+=1)Je[t]=t<128?t<<1:t<<1^283;let Xe=0,Ge=0;for(let t=0;t<256;t+=1){let t=Ge^Ge<<1^Ge<<2^Ge<<3^Ge<<4;t=t>>>8^255&t^99,Oe[Xe]=t,Pe[t]=Xe;const e=Je[Xe],a=Je[e],i=Je[a];let s=257*Je[t]^16843008*t;Ue[Xe]=s<<24|s>>>8,qe[Xe]=s<<16|s>>>16,Fe[Xe]=s<<8|s>>>24,je[Xe]=s,s=16843009*i^65537*a^257*e^16843008*Xe,Ve[t]=s<<24|s>>>8,We[t]=s<<16|s>>>16,Ze[t]=s<<8|s>>>24,Ke[t]=s,Xe?(Xe=e^Je[Je[Je[i^e]]],Ge^=Je[Je[Ge]]):(Ge=1,Xe=Ge)}const Ye=[0,1,2,4,8,16,32,64,128,27,54];class Qe extends zt{_doReset(){let t;if(this._nRounds&&this._keyPriorReset===this._key)return;this._keyPriorReset=this._key;const e=this._keyPriorReset,a=e.words,i=e.sigBytes/4;this._nRounds=i+6;const s=4*(this._nRounds+1);this._keySchedule=[];const n=this._keySchedule;for(let e=0;e<s;e+=1)e<i?n[e]=a[e]:(t=n[e-1],e%i?i>6&&e%i==4&&(t=Oe[t>>>24]<<24|Oe[t>>>16&255]<<16|Oe[t>>>8&255]<<8|Oe[255&t]):(t=t<<8|t>>>24,t=Oe[t>>>24]<<24|Oe[t>>>16&255]<<16|Oe[t>>>8&255]<<8|Oe[255&t],t^=Ye[e/i|0]<<24),n[e]=n[e-i]^t);this._invKeySchedule=[];const o=this._invKeySchedule;for(let e=0;e<s;e+=1){const a=s-e;t=e%4?n[a]:n[a-4],o[e]=e<4||a<=4?t:Ve[Oe[t>>>24]]^We[Oe[t>>>16&255]]^Ze[Oe[t>>>8&255]]^Ke[Oe[255&t]]}}encryptBlock(t,e){this._doCryptBlock(t,e,this._keySchedule,Ue,qe,Fe,je,Oe)}decryptBlock(t,e){const a=t;let i=a[e+1];a[e+1]=a[e+3],a[e+3]=i,this._doCryptBlock(a,e,this._invKeySchedule,Ve,We,Ze,Ke,Pe),i=a[e+1],a[e+1]=a[e+3],a[e+3]=i}_doCryptBlock(t,e,a,i,s,n,o,r){const c=t,l=this._nRounds;let d=c[e]^a[0],h=c[e+1]^a[1],u=c[e+2]^a[2],p=c[e+3]^a[3],g=4;for(let t=1;t<l;t+=1){const t=i[d>>>24]^s[h>>>16&255]^n[u>>>8&255]^o[255&p]^a[g];g+=1;const e=i[h>>>24]^s[u>>>16&255]^n[p>>>8&255]^o[255&d]^a[g];g+=1;const r=i[u>>>24]^s[p>>>16&255]^n[d>>>8&255]^o[255&h]^a[g];g+=1;const c=i[p>>>24]^s[d>>>16&255]^n[h>>>8&255]^o[255&u]^a[g];g+=1,d=t,h=e,u=r,p=c}const f=(r[d>>>24]<<24|r[h>>>16&255]<<16|r[u>>>8&255]<<8|r[255&p])^a[g];g+=1;const m=(r[h>>>24]<<24|r[u>>>16&255]<<16|r[p>>>8&255]<<8|r[255&d])^a[g];g+=1;const y=(r[u>>>24]<<24|r[p>>>16&255]<<16|r[d>>>8&255]<<8|r[255&h])^a[g];g+=1;const b=(r[p>>>24]<<24|r[d>>>16&255]<<16|r[h>>>8&255]<<8|r[255&u])^a[g];g+=1,c[e]=f,c[e+1]=m,c[e+2]=y,c[e+3]=b}}Qe.keySize=8;const ta=zt._createHelper(Qe),ea=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],aa=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],ia=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],sa=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],na=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679];function oa(t,e){const a=(this._lBlock>>>t^this._rBlock)&e;this._rBlock^=a,this._lBlock^=a<<t}function ra(t,e){const a=(this._rBlock>>>t^this._lBlock)&e;this._lBlock^=a,this._rBlock^=a<<t}class ca extends zt{_doReset(){const t=this._key.words,e=[];for(let a=0;a<56;a+=1){const i=ea[a]-1;e[a]=t[i>>>5]>>>31-i%32&1}this._subKeys=[];const a=this._subKeys;for(let t=0;t<16;t+=1){a[t]=[];const i=a[t],s=ia[t];for(let t=0;t<24;t+=1)i[t/6|0]|=e[(aa[t]-1+s)%28]<<31-t%6,i[4+(t/6|0)]|=e[28+(aa[t+24]-1+s)%28]<<31-t%6;i[0]=i[0]<<1|i[0]>>>31;for(let t=1;t<7;t+=1)i[t]>>>=4*(t-1)+3;i[7]=i[7]<<5|i[7]>>>27}this._invSubKeys=[];const i=this._invSubKeys;for(let t=0;t<16;t+=1)i[t]=a[15-t]}encryptBlock(t,e){this._doCryptBlock(t,e,this._subKeys)}decryptBlock(t,e){this._doCryptBlock(t,e,this._invSubKeys)}_doCryptBlock(t,e,a){const i=t;this._lBlock=t[e],this._rBlock=t[e+1],oa.call(this,4,252645135),oa.call(this,16,65535),ra.call(this,2,858993459),ra.call(this,8,16711935),oa.call(this,1,1431655765);for(let t=0;t<16;t+=1){const e=a[t],i=this._lBlock,s=this._rBlock;let n=0;for(let t=0;t<8;t+=1)n|=sa[t][((s^e[t])&na[t])>>>0];this._lBlock=s,this._rBlock=i^n}const s=this._lBlock;this._lBlock=this._rBlock,this._rBlock=s,oa.call(this,1,1431655765),ra.call(this,8,16711935),ra.call(this,2,858993459),oa.call(this,16,65535),oa.call(this,4,252645135),i[e]=this._lBlock,i[e+1]=this._rBlock}}ca.keySize=2,ca.ivSize=2,ca.blockSize=2;const la=zt._createHelper(ca);class da extends zt{_doReset(){const t=this._key.words;if(2!==t.length&&4!==t.length&&t.length<6)throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");const e=t.slice(0,2),a=t.length<4?t.slice(0,2):t.slice(2,4),i=t.length<6?t.slice(0,2):t.slice(4,6);this._des1=ca.createEncryptor(ot.create(e)),this._des2=ca.createEncryptor(ot.create(a)),this._des3=ca.createEncryptor(ot.create(i))}encryptBlock(t,e){this._des1.encryptBlock(t,e),this._des2.decryptBlock(t,e),this._des3.encryptBlock(t,e)}decryptBlock(t,e){this._des3.decryptBlock(t,e),this._des2.encryptBlock(t,e),this._des1.decryptBlock(t,e)}}da.keySize=6,da.ivSize=2,da.blockSize=2;const ha=zt._createHelper(da),ua=[],pa=[],ga=[];function fa(){const t=this._X,e=this._C;for(let t=0;t<8;t+=1)pa[t]=e[t];e[0]=e[0]+1295307597+this._b|0,e[1]=e[1]+3545052371+(e[0]>>>0<pa[0]>>>0?1:0)|0,e[2]=e[2]+886263092+(e[1]>>>0<pa[1]>>>0?1:0)|0,e[3]=e[3]+1295307597+(e[2]>>>0<pa[2]>>>0?1:0)|0,e[4]=e[4]+3545052371+(e[3]>>>0<pa[3]>>>0?1:0)|0,e[5]=e[5]+886263092+(e[4]>>>0<pa[4]>>>0?1:0)|0,e[6]=e[6]+1295307597+(e[5]>>>0<pa[5]>>>0?1:0)|0,e[7]=e[7]+3545052371+(e[6]>>>0<pa[6]>>>0?1:0)|0,this._b=e[7]>>>0<pa[7]>>>0?1:0;for(let a=0;a<8;a+=1){const i=t[a]+e[a],s=65535&i,n=i>>>16,o=((s*s>>>17)+s*n>>>15)+n*n,r=((4294901760&i)*i|0)+((65535&i)*i|0);ga[a]=o^r}t[0]=ga[0]+(ga[7]<<16|ga[7]>>>16)+(ga[6]<<16|ga[6]>>>16)|0,t[1]=ga[1]+(ga[0]<<8|ga[0]>>>24)+ga[7]|0,t[2]=ga[2]+(ga[1]<<16|ga[1]>>>16)+(ga[0]<<16|ga[0]>>>16)|0,t[3]=ga[3]+(ga[2]<<8|ga[2]>>>24)+ga[1]|0,t[4]=ga[4]+(ga[3]<<16|ga[3]>>>16)+(ga[2]<<16|ga[2]>>>16)|0,t[5]=ga[5]+(ga[4]<<8|ga[4]>>>24)+ga[3]|0,t[6]=ga[6]+(ga[5]<<16|ga[5]>>>16)+(ga[4]<<16|ga[4]>>>16)|0,t[7]=ga[7]+(ga[6]<<8|ga[6]>>>24)+ga[5]|0}class ma extends At{constructor(...t){super(...t),this.blockSize=4,this.ivSize=2}_doReset(){const t=this._key.words,{iv:e}=this.cfg;for(let e=0;e<4;e+=1)t[e]=16711935&(t[e]<<8|t[e]>>>24)|4278255360&(t[e]<<24|t[e]>>>8);this._X=[t[0],t[3]<<16|t[2]>>>16,t[1],t[0]<<16|t[3]>>>16,t[2],t[1]<<16|t[0]>>>16,t[3],t[2]<<16|t[1]>>>16];const a=this._X;this._C=[t[2]<<16|t[2]>>>16,4294901760&t[0]|65535&t[1],t[3]<<16|t[3]>>>16,4294901760&t[1]|65535&t[2],t[0]<<16|t[0]>>>16,4294901760&t[2]|65535&t[3],t[1]<<16|t[1]>>>16,4294901760&t[3]|65535&t[0]];const i=this._C;this._b=0;for(let t=0;t<4;t+=1)fa.call(this);for(let t=0;t<8;t+=1)i[t]^=a[t+4&7];if(e){const t=e.words,a=t[0],s=t[1],n=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),o=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),r=n>>>16|4294901760&o,c=o<<16|65535&n;i[0]^=n,i[1]^=r,i[2]^=o,i[3]^=c,i[4]^=n,i[5]^=r,i[6]^=o,i[7]^=c;for(let t=0;t<4;t+=1)fa.call(this)}}_doProcessBlock(t,e){const a=t,i=this._X;fa.call(this),ua[0]=i[0]^i[5]>>>16^i[3]<<16,ua[1]=i[2]^i[7]>>>16^i[5]<<16,ua[2]=i[4]^i[1]>>>16^i[7]<<16,ua[3]=i[6]^i[3]>>>16^i[1]<<16;for(let t=0;t<4;t+=1)ua[t]=16711935&(ua[t]<<8|ua[t]>>>24)|4278255360&(ua[t]<<24|ua[t]>>>8),a[e+t]^=ua[t]}}const ya=At._createHelper(ma),ba=[],va=[],$a=[];function wa(){const t=this._X,e=this._C;for(let t=0;t<8;t+=1)va[t]=e[t];e[0]=e[0]+1295307597+this._b|0,e[1]=e[1]+3545052371+(e[0]>>>0<va[0]>>>0?1:0)|0,e[2]=e[2]+886263092+(e[1]>>>0<va[1]>>>0?1:0)|0,e[3]=e[3]+1295307597+(e[2]>>>0<va[2]>>>0?1:0)|0,e[4]=e[4]+3545052371+(e[3]>>>0<va[3]>>>0?1:0)|0,e[5]=e[5]+886263092+(e[4]>>>0<va[4]>>>0?1:0)|0,e[6]=e[6]+1295307597+(e[5]>>>0<va[5]>>>0?1:0)|0,e[7]=e[7]+3545052371+(e[6]>>>0<va[6]>>>0?1:0)|0,this._b=e[7]>>>0<va[7]>>>0?1:0;for(let a=0;a<8;a+=1){const i=t[a]+e[a],s=65535&i,n=i>>>16,o=((s*s>>>17)+s*n>>>15)+n*n,r=((4294901760&i)*i|0)+((65535&i)*i|0);$a[a]=o^r}t[0]=$a[0]+($a[7]<<16|$a[7]>>>16)+($a[6]<<16|$a[6]>>>16)|0,t[1]=$a[1]+($a[0]<<8|$a[0]>>>24)+$a[7]|0,t[2]=$a[2]+($a[1]<<16|$a[1]>>>16)+($a[0]<<16|$a[0]>>>16)|0,t[3]=$a[3]+($a[2]<<8|$a[2]>>>24)+$a[1]|0,t[4]=$a[4]+($a[3]<<16|$a[3]>>>16)+($a[2]<<16|$a[2]>>>16)|0,t[5]=$a[5]+($a[4]<<8|$a[4]>>>24)+$a[3]|0,t[6]=$a[6]+($a[5]<<16|$a[5]>>>16)+($a[4]<<16|$a[4]>>>16)|0,t[7]=$a[7]+($a[6]<<8|$a[6]>>>24)+$a[5]|0}class xa extends At{constructor(...t){super(...t),this.blockSize=4,this.ivSize=2}_doReset(){const t=this._key.words,{iv:e}=this.cfg;this._X=[t[0],t[3]<<16|t[2]>>>16,t[1],t[0]<<16|t[3]>>>16,t[2],t[1]<<16|t[0]>>>16,t[3],t[2]<<16|t[1]>>>16];const a=this._X;this._C=[t[2]<<16|t[2]>>>16,4294901760&t[0]|65535&t[1],t[3]<<16|t[3]>>>16,4294901760&t[1]|65535&t[2],t[0]<<16|t[0]>>>16,4294901760&t[2]|65535&t[3],t[1]<<16|t[1]>>>16,4294901760&t[3]|65535&t[0]];const i=this._C;this._b=0;for(let t=0;t<4;t+=1)wa.call(this);for(let t=0;t<8;t+=1)i[t]^=a[t+4&7];if(e){const t=e.words,a=t[0],s=t[1],n=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),o=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),r=n>>>16|4294901760&o,c=o<<16|65535&n;i[0]^=n,i[1]^=r,i[2]^=o,i[3]^=c,i[4]^=n,i[5]^=r,i[6]^=o,i[7]^=c;for(let t=0;t<4;t+=1)wa.call(this)}}_doProcessBlock(t,e){const a=t,i=this._X;wa.call(this),ba[0]=i[0]^i[5]>>>16^i[3]<<16,ba[1]=i[2]^i[7]>>>16^i[5]<<16,ba[2]=i[4]^i[1]>>>16^i[7]<<16,ba[3]=i[6]^i[3]>>>16^i[1]<<16;for(let t=0;t<4;t+=1)ba[t]=16711935&(ba[t]<<8|ba[t]>>>24)|4278255360&(ba[t]<<24|ba[t]>>>8),a[e+t]^=ba[t]}}const _a=At._createHelper(xa);function Ca(){const t=this._S;let e=this._i,a=this._j,i=0;for(let s=0;s<4;s+=1){e=(e+1)%256,a=(a+t[e])%256;const n=t[e];t[e]=t[a],t[a]=n,i|=t[(t[e]+t[a])%256]<<24-8*s}return this._i=e,this._j=a,i}class ka extends At{_doReset(){const t=this._key,e=t.words,a=t.sigBytes;this._S=[];const i=this._S;for(let t=0;t<256;t+=1)i[t]=t;for(let t=0,s=0;t<256;t+=1){const n=t%a,o=e[n>>>2]>>>24-n%4*8&255;s=(s+i[t]+o)%256;const r=i[t];i[t]=i[s],i[s]=r}this._j=0,this._i=this._j}_doProcessBlock(t,e){t[e]^=Ca.call(this)}}ka.keySize=8,ka.ivSize=0;const Da=At._createHelper(ka);class Aa extends ka{constructor(...t){super(...t),Object.assign(this.cfg,{drop:192})}_doReset(){super._doReset.call(this);for(let t=this.cfg.drop;t>0;t-=1)Ca.call(this)}}const Sa=At._createHelper(Aa);function Ia(t,e,a,i){const s=t;let n;const o=this._iv;o?(n=o.slice(0),this._iv=void 0):n=this._prevBlock,i.encryptBlock(n,0);for(let t=0;t<a;t+=1)s[e+t]^=n[t]}class Ea extends St{}Ea.Encryptor=class extends Ea{processBlock(t,e){const a=this._cipher,{blockSize:i}=a;Ia.call(this,t,e,i,a),this._prevBlock=t.slice(e,e+i)}},Ea.Decryptor=class extends Ea{processBlock(t,e){const a=this._cipher,{blockSize:i}=a,s=t.slice(e,e+i);Ia.call(this,t,e,i,a),this._prevBlock=s}};class Ta extends St{}Ta.Encryptor=class extends Ta{processBlock(t,e){const a=t,i=this._cipher,{blockSize:s}=i,n=this._iv;let o=this._counter;n&&(this._counter=n.slice(0),o=this._counter,this._iv=void 0);const r=o.slice(0);i.encryptBlock(r,0),o[s-1]=o[s-1]+1|0;for(let t=0;t<s;t+=1)a[e+t]^=r[t]}},Ta.Decryptor=Ta.Encryptor;const za=t=>{let e=t;if(255==(t>>24&255)){let a=t>>16&255,i=t>>8&255,s=255&t;255===a?(a=0,255===i?(i=0,255===s?s=0:s+=1):i+=1):a+=1,e=0,e+=a<<16,e+=i<<8,e+=s}else e+=1<<24;return e};
/** @preserve
     * Counter block mode compatible with  Dr Brian Gladman fileenc.c
     * derived from CryptoJS.mode.CTR
     * Jan Hruby jhruby.web@gmail.com
     */
class Ra extends St{}Ra.Encryptor=class extends Ra{processBlock(t,e){const a=t,i=this._cipher,{blockSize:s}=i,n=this._iv;let o=this._counter;n&&(this._counter=n.slice(0),o=this._counter,this._iv=void 0),(t=>{const e=t;e[0]=za(e[0]),0===e[0]&&(e[1]=za(e[1]))})(o);const r=o.slice(0);i.encryptBlock(r,0);for(let t=0;t<s;t+=1)a[e+t]^=r[t]}},Ra.Decryptor=Ra.Encryptor;class Ma extends St{}Ma.Encryptor=class extends Ma{processBlock(t,e){this._cipher.encryptBlock(t,e)}},Ma.Decryptor=class extends Ma{processBlock(t,e){this._cipher.decryptBlock(t,e)}};class La extends St{}La.Encryptor=class extends La{processBlock(t,e){const a=t,i=this._cipher,{blockSize:s}=i,n=this._iv;let o=this._keystream;n&&(this._keystream=n.slice(0),o=this._keystream,this._iv=void 0),i.encryptBlock(o,0);for(let t=0;t<s;t+=1)a[e+t]^=o[t]}},La.Decryptor=La.Encryptor;const Ba={pad(t,e){const a=4*e,i=a-t.sigBytes%a;t.concat(ot.random(i-1)).concat(ot.create([i<<24],1))},unpad(t){const e=t,a=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=a}},Na={pad(t,e){const a=t,i=4*e;a.clamp(),a.sigBytes+=i-(t.sigBytes%i||i)},unpad(t){const e=t,a=e.words;for(let t=e.sigBytes-1;t>=0;t-=1)if(a[t>>>2]>>>24-t%4*8&255){e.sigBytes=t+1;break}}},Ha={pad(t,e){t.concat(ot.create([2147483648],1)),Na.pad(t,e)},unpad(t){const e=t;Na.unpad(e),e.sigBytes-=1}},Oa={stringify:t=>t.ciphertext.toString(rt),parse(t){const e=rt.parse(t);return Rt.create({ciphertext:e})}};var Pa={lib:{Base:nt,WordArray:ot,BufferedBlockAlgorithm:dt,Hasher:ht,Cipher:Dt,StreamCipher:At,BlockCipherMode:St,BlockCipher:zt,CipherParams:Rt,SerializableCipher:Lt,PasswordBasedCipher:Nt},x64:{Word:gt,WordArray:ft},enc:{Hex:rt,Latin1:ct,Utf8:lt,Utf16:Pt,Utf16BE:Ot,Utf16LE:Ut,Base64:mt},algo:{HMAC:ut,MD5:xt,SHA1:Ft,SHA224:ae,SHA256:Qt,SHA384:de,SHA512:re,SHA3:$e,RIPEMD160:Le,PBKDF2:He,EvpKDF:kt,AES:Qe,DES:ca,TripleDES:da,Rabbit:ma,RabbitLegacy:xa,RC4:ka,RC4Drop:Aa},mode:{CBC:Et,CFB:Ea,CTR:Ta,CTRGladman:Ra,ECB:Ma,OFB:La},pad:{Pkcs7:Tt,AnsiX923:{pad(t,e){const a=t,i=a.sigBytes,s=4*e,n=s-i%s,o=i+n-1;a.clamp(),a.words[o>>>2]|=n<<24-o%4*8,a.sigBytes+=n},unpad(t){const e=t,a=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=a}},Iso10126:Ba,Iso97971:Ha,NoPadding:{pad(){},unpad(){}},ZeroPadding:Na},format:{OpenSSL:Mt,Hex:Oa},kdf:{OpenSSL:Bt},MD5:_t,HmacMD5:Ct,SHA1:jt,HmacSHA1:Vt,SHA224:ie,HmacSHA224:se,SHA256:te,HmacSHA256:ee,SHA384:he,HmacSHA384:ue,SHA512:ce,HmacSHA512:le,SHA3:we,HmacSHA3:xe,RIPEMD160:Be,HmacRIPEMD160:Ne,PBKDF2:(t,e,a)=>He.create(a).compute(t,e),EvpKDF:(t,e,a)=>kt.create(a).compute(t,e),AES:ta,DES:la,TripleDES:ha,Rabbit:ya,RabbitLegacy:_a,RC4:Da,RC4Drop:Sa};const Ua=t=>`0${t}`.slice(-2),qa=t=>`0${t}`.slice(-4),Fa=t=>{if(t.endsWith(" GMT")&&23===t.length)return new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T${t.substring(9,11)}:${t.substring(11,13)}:${t.substring(13,19)}Z`);if(8===t.length){let e=new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T00:00:00.000Z`);return e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),e}if(10===t.length){let e=new Date(`${t.substring(6,10)}-${t.substring(0,2)}-${t.substring(3,5)}T00:00:00.000Z`);return e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),e}return null},ja=t=>t&&"string"==typeof t?t.replace(/&amp;|&lt;|&gt;|&#39;|&#40;|&#41;|&quot;/g,(t=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&#40;":"(","&#41;":")","&quot;":'"'}[t]||t))):"",Va=(t,e,a,i,s)=>{if("string"!=typeof e)return;if(i){const t=Za(i,e);if(t===s||`${t}`==`${s}`||null===t&&""===s)return}const n=e.lastIndexOf(".");if(-1===n)return void(t[e]=s);if(!a)return void Wa(t,e,s);const o={};let r=e.substring(0,n);o[e.substring(n+1)]=s;const c=r.indexOf("(");if(-1===c)a.push({instruction:"UPDATE",target:r,content:o});else{const t=r.substring(c+1,r.length-1);r=r.substring(0,c),a.push({instruction:"UPDATE",target:r,listIndex:parseInt(t,10),content:o})}},Wa=(t,e,a)=>{if("string"!=typeof e)return;const i=e.split(".");let s=t;for(const t in i){let e=i[t];const n=e.indexOf("(");if(-1===n)t<i.length-1?void 0===s[e]&&(s[e]={}):s[e]=a,s=s[e];else{const t=e.substring(n+1,e.length-1);e=e.substring(0,n),void 0===s[e]&&(s[e]=[]);for(let a=s[e].length;a<t;a++)s[e].push({});s=s[e][t-1]}}},Za=(t,e)=>{if("string"!=typeof e||""===e)return null;let a=e;0===e.indexOf(".")&&(a=e.substring(1));let i=t;const s=a.split(".");for(const t in s){const e=s[t],a=e.indexOf("(");if(-1===a){if(void 0===i[e])return null;i=i[e]}else{const t=e.substring(a+1,e.length-1),s=i[e.substring(0,a)];if(!(s&&Array.isArray(s)&&s.length>=t))return null;i=s[t-1]}}return i},Ka=t=>{for(const e in t)"object"==typeof t[e]?Ka(t[e]):"string"==typeof t[e]&&(t[e]="")},Ja=(t,e)=>{for(const a in t)if("fieldID"===a)e.push(t.fieldID);else{const i=t[a];i.fieldID?e.push(i.fieldID):"object"==typeof i&&Ja(i,e)}},Xa=(t,e,a)=>{let i=Za(t,e);if(null===i&&(i=[],Wa(t,e,i)),!Array.isArray(i))return null;if(a&&"string"==typeof a){const t={},s=a.split(",");for(const e in s)t[s[e]]="";return i.push(t),{instruction:"APPEND",target:e,content:t}}if(0===i.length)return null;const s={...i[0]};return Ka(s),i.push(s),{instruction:"APPEND",target:e,content:s}},Ga=(t,e)=>{let a,i=e;-1!==e.indexOf(").pyTemplate")&&(a=parseInt(i.substring(e.lastIndexOf("(")+1,e.lastIndexOf(")")),10),i=i.substring(0,e.lastIndexOf("(")));const s=Za(t,i);if(!Array.isArray(s))return null;if(1===s.length){for(const t in s[0])"pxObjClass"!==t&&(s[0][t]="");return null}return a?s.length<a?null:(s.splice(a-1,1),{instruction:"DELETE",target:i,listIndex:a}):(s.length-=1,{instruction:"DELETE",target:i,listIndex:s.length})},Ya=(t,e)=>{const a=t.getAttribute(`data-action-${e}`);return!(!a||"postValue"!==a&&0!==a.indexOf("refresh"))},Qa=(t,e)=>{const a=t.getAttribute(`data-action-${e}`);return a&&0===a.indexOf("refresh")?a.replace("refresh-",""):""};function ti(t,e,a){try{switch(e){case">":return parseInt(t,10)>parseInt(a,10);case"<":return parseInt(t,10)<parseInt(a,10);case">=":return parseInt(t,10)>=parseInt(a,10);case"<=":return parseInt(t,10)<=parseInt(a,10);case"==":return`${t}`==`${a}`;case"!=":return`${t}`!=`${a}`}}catch(t){}return!1}const ei=(t,e,a)=>{const i=t.replace("@E ","").split("&&");for(const t in i){const s=i[t].trim().match(/[\w.]+|[><=!]+|'[^']+'/g);if(3===s.length){const t=""===a?e[s[0].substring(1)]:Za(e,a+s[0]);if(void 0!==t&&!ti(t,s[1],s[2].replace(/^'|'$/g,"")))return!1}}return!0},ai=(t,e,a,i)=>{for(const s of t.elements)if("INPUT"===s.tagName||"TEXTAREA"===s.tagName||"SELECT"===s.tagName){const t=s.getAttribute("data-ref");if(null!==t&&"pyID"!==t)if("INPUT"===s.tagName){const n=s.getAttribute("type");if(s.classList.contains("input-date-day")||s.classList.contains("input-date-month")||s.classList.contains("input-date-year")){if(s.classList.contains("input-date-day")){const n=s.closest(".input-date").parentNode,o=n.querySelector(".input-date-month"),r=n.querySelector(".input-date-year");if(null!==o&&null!==r&&""!==s.value&&""!==o.value&&""!==r.value){const n=`${Ua(o.value)}/${Ua(s.value)}/${qa(r.value)}`;Va(e,t,a,i,n)}}}else if("checkbox"===n)Va(e,t,a,i,s.checked);else if("radio"===n)s.checked&&Va(e,t,a,i,s.value);else if("tel"===n){let n=s.value;"SELECT"===s.parentNode.firstElementChild.tagName&&"field-countrycode"===s.parentNode.firstElementChild.className&&(n=s.parentNode.firstElementChild.value+n),Va(e,t,a,i,n)}else if("date"===n){let n;s.valueAsDate&&(n=new Date(s.valueAsDate)),n&&n instanceof Date&&n.getTime()==n.getTime()||(n=new Date(s.value)),n&&n instanceof Date&&n.getTime()==n.getTime()?(n=new Date(n.getTime()+6e4*n.getTimezoneOffset()),Va(e,t,a,i,`${Ua(n.getMonth()+1)}/${Ua(n.getDate())}/${n.getFullYear()}`)):Va(e,t,a,i,s.value)}else Va(e,t,a,i,s.value)}else Va(e,t,a,i,s.value)}if(t&&t.querySelectorAll){const n=t.querySelectorAll("[contenteditable]");for(let t=0;t<n.length;t++){const o=n[t],r=o.getAttribute("data-ref");Va(e,r,a,i,(s=o.innerHTML)&&"string"==typeof s?s.replace(/[&<>'"]/g,(t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","(":"&#40;",")":"&#41;",'"':"&quot;"}[t]||t))):"")}}var s},ii=(t,e,a)=>{for(const i of t.elements)if("INPUT"===i.tagName||"TEXTAREA"===i.tagName||"SELECT"===i.tagName){const t=`.${i.getAttribute("data-ref")}`;if(null!==t&&"pyID"!==t)for(const s in e){if(e[s].Path===t){a.setInlineError(i,e[s].ValidationMessage);break}if(e[s].erroneousInputOutputFieldInPage===t){a.setInlineError(i,e[s].localizedValue);break}}}},si=(t,e)=>{const a=e||[],i={};for(const[e,s]of Object.entries(t))if("string"==typeof s||"boolean"==typeof s)i[e]=s;else if("object"==typeof s)if(Array.isArray(s))for(const t in s){const i={instruction:"UPDATE",target:e,listIndex:parseInt(t,10)+1,content:s[t]};a.push(i)}else{const t={instruction:"UPDATE",target:e,content:s};a.push(t)}return{pageInstructions:a,pageupdate:i}},ni=(t,e,a,i,s)=>{if(null==i)return null;let n;const o=`${Math.random().toString(36).substr(2,9)}`,r=document.createElement("ul");r.setAttribute("id",`menu-overlay-${o}`),r.setAttribute("role","menu"),r.setAttribute("aria-labelledby",`menubutton-${o}`),r.setAttribute("tabindex","-1");const c=()=>{document.body.removeEventListener("click",d),document.body.removeEventListener("keydown",l),r&&(r.previousElementSibling&&(r.previousElementSibling.setAttribute("aria-expanded","false"),r.previousElementSibling.focus()),r.remove())},l=t=>{38===t.keyCode?(n=n.previousElementSibling,null===n&&(n=r.lastElementChild),n.focus()):40===t.keyCode?(n=n.nextElementSibling,null===n&&(n=r.firstElementChild),n.focus()):27===t.keyCode||9===t.keyCode?c():13===t.keyCode&&(i(t),c())},d=t=>{if(t){let e=t.target;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&e.nextElementSibling===r)return;e.parentNode===r&&i(t),c()}},h=t=>{if("keydown"===t.type&&40!==t.keyCode)return;if(t.preventDefault(),t.stopPropagation(),"blur"===t.type)return void d(t);const e=t.currentTarget;"BUTTON"!==e.tagName?(i(t),c()):null===e.nextElementSibling?(e.parentNode.appendChild(r),e.setAttribute("aria-expanded","true"),M(a(),r),n=e.nextElementSibling.firstElementChild,n.focus(),document.body.addEventListener("click",d),document.body.addEventListener("keydown",l)):c()};return E`
    <div class="button-menu">
    <button type='button' id="${`menubutton-${o}`}" aria-haspopup="true" aria-controls="${`menu-overlay-${o}`}" aria-expanded="false"
    @click="${h}" @keydown="${h}" @blur="${h}"
    class="${`pzhc pzbutton Simple ${s||"action-menu"}`}" aria-label="${i18n.t(e)}">${i18n.t(t)}</button>
    </div>
  `},oi=(t,e,a,i)=>st(t,e,a,(t=>{M(ri(t,[]),t),i(t)})),ri=(t,e,a,i,s)=>{let n=0;const o=t=>{if(void 0===t||"string"==typeof t&&""===t)return;if("URL"===e[n].category)return void window.open(t);let a=e[n].fileName;if(void 0===a&&(a=e[n].name),void 0===a&&(a=e[n].pyAttachName),!a)return;const i=window.document.createElement("a");if("Correspondence"===e[n].category){a=`${e[n].name}.html`;const s=`<html><head><title>${e[n].name}</title></head><body>${t}</body></html>`,o=new Blob([s],{type:"text"});i.href=window.URL.createObjectURL(o)}else{const e=function(t){const e=window.atob(t),a=e.length,i=new Uint8Array(a);for(let t=0;t<a;t++){const a=e.charCodeAt(t);i[t]=a}return i}(t),a=new Blob([e],{type:"octet/stream"});i.href=window.URL.createObjectURL(a)}i.download=a,document.body.appendChild(i),i.click(),document.body.removeChild(i)},r=t=>{t.stopPropagation();const a=t.target;n=a.getAttribute("data-id"),i.fetchData.call(i,"attachment",{id:e[n].ID,target:o})},c=a=>{a.preventDefault(),a.stopPropagation();const s=a.target.closest("button");n=s.getAttribute("data-id"),i.sendData.call(i,"deleteattachment",{id:e[n].ID,target:t})},l=o=>{o.stopPropagation();const r=o.target.closest("button");n=parseInt(r.getAttribute("data-id"),10),s.splice(n,1),M(ri(t,e,a,i,s),t)},d=t=>{t.stopPropagation(),t.preventDefault();const e=t.target;if(n=e.getAttribute("data-id"),"INPUT"===e.tagName){const t=e.getAttribute("data-prop-id");s[n][t]=e.value}else"SELECT"===e.tagName&&(s[n].category=e.value)},h=e=>{e.preventDefault();const a=e.target,i=e.relatedTarget,s=null===a?null:a.closest(".attach-files"),n=null===i?null:i.closest(".attach-files");if("dragenter"===e.type||"dragover"===e.type?null!=s&&s.classList.add("drop-file-hover"):"dragleave"!==e.type&&"drop"!==e.type||null===n&&null!==s&&s.classList.remove("drop-file-hover"),"drop"===e.type){const i=e.dataTransfer.files;t||(t=a.closest(".attach-files")),p(a,i)}},u=n=>{n&&(n.stopPropagation(),n.preventDefault());for(let n=0;n<s.length;n++){const o=s[n];delete o.editing,o.loading=!0,"URL"===o.type?(e.unshift(o),i.sendData.call(i,"attachments",{id:a,actionid:[o],target:t})):(e.unshift({name:o.displayName,extension:o.extension,loading:!0}),i.sendData.call(i,"uploadattachment",{actionid:o,target:t}))}M(ri(t,e,a,i),t)},p=(s,n)=>{const o=[];for(let t=0;t<n.length;t++){const e=n[t];let a=e.name.lastIndexOf(".");-1===a&&(a=e.name.length),e.displayName=e.name.substring(0,a),e.extension=e.name.substring(a+1),e.editing=!0,e.category="File",o.push(e)}M(ri(t,e,a,i,o),t)},g=e=>{e.stopPropagation();let a=e.target;if("BUTTON"===a.tagName)return a=e.target.parentNode.parentNode.firstElementChild,void a.click();t||(t=a.closest(".attach-files")),p(a,a.files)},f=s=>{s.stopPropagation();M(ri(t,e,a,i,[{type:"URL",category:"URL",name:"",url:"",editing:!0}]),t)},m=s=>{s.stopPropagation(),M(ri(t,e,a,i),t)},y=(t,e)=>{let a=new Date(e.createTime);return a=a.toLocaleDateString(void 0,{year:"numeric",month:"numeric",day:"numeric"}),E`
    <div class='list-item-title'>
      <button type='button' class='Light'  data-id="${t}" @click="${r}">${e.name}</button>
      ${e.loading?"":E`
      <span class='list-item-meta'><span>${e.createdBy}</span><span>${a}</span><span>${i18n.t("Category:")} ${e.category}</span></span>`}
    </div>`},b=()=>E`<li role="menuitem" tabindex="-1" data-value="Download">${i18n.t("Download")}</li>
  <li role="menuitem" tabindex="-1" data-value="Delete">${i18n.t("Delete")}</li>`,v=s=>{let r=s.target;if(s.path&&s.path.length>0?r=s.path[0]:s.originalTarget&&(r=s.originalTarget),r){const s=r.getAttribute("data-value"),c=e[n].pzInsKey||e[n].ID;"Download"===s?i.fetchData.call(i,"attachment",{id:c,target:o}):"Delete"===s&&(i.sendData.call(i,"deleteattachment",{id:c,target:t}),M(ri(void 0,[],a,i,[]),t))}},$=t=>E`<div class='row-item'>
    <span class='doc-icon'>${it()}<span>${t.extension}</span></span>
    <div class='list-item-title'><span>${t.pyAttachName||t.name}</span>
    <span class="list-item-meta"><span>${t.pyCategoryName||t.category}</span>
    <span>${t.pxCreateOperator||t.createdBy}</span></span></div>
    ${ni(E`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
<path d="M14.353125,6.353125 C13.9703125,6.7359375 13.4914062,6.928125 12.9640625,6.928125 C12.4367188,6.928125 11.9585938,6.73671875 11.575,6.353125 C11.1921875,5.9703125 11,5.49140625 11,4.9640625 C11,4.43671875 11.1914062,3.95859375 11.575,3.575 C11.9578125,3.1921875 12.4367188,3 12.9640625,3 C13.4914063,3 13.9695312,3.19140625 14.353125,3.575 C14.7359375,3.9578125 14.928125,4.43671875 14.928125,4.9640625 C14.928125,5.49140625 14.7367187,5.96953125 14.353125,6.353125 Z M14.353125,13.7289063 C13.9703125,14.1117188 13.4914062,14.3039063 12.9640625,14.3039063 C12.4367188,14.3039063 11.9585938,14.1125 11.575,13.7289063 C11.1921875,13.3460938 11,12.8671875 11,12.3398438 C11,11.8125 11.1914062,11.334375 11.575,10.9507813 C11.9578125,10.5679688 12.4367188,10.3757813 12.9640625,10.3757813 C13.4914063,10.3757813 13.9695312,10.5671875 14.353125,10.9507813 C14.7359375,11.3335938 14.928125,11.8125 14.928125,12.3398438 C14.928125,12.8671875 14.7367187,13.3453125 14.353125,13.7289063 Z M14.353125,21.1039062 C13.9703125,21.4867187 13.4914062,21.6789062 12.9640625,21.6789062 C12.4367188,21.6789062 11.9585938,21.4875 11.575,21.1039062 C11.1921875,20.7210938 11,20.2421875 11,19.7148438 C11,19.1875 11.1914062,18.709375 11.575,18.3257813 C11.9578125,17.9429688 12.4367188,17.7507813 12.9640625,17.7507813 C13.4914063,17.7507813 13.9695312,17.9421875 14.353125,18.3257813 C14.7359375,18.7085937 14.928125,19.1875 14.928125,19.7148438 C14.928125,20.2421875 14.7367187,20.7203125 14.353125,21.1039062 Z"></path>
</svg>`,"Actions",b,v,"button-action")}
  </div>`,w=(t,e)=>e.loading?E`${y(t,e)}${Y()}`:e.editing?"URL"===e.type?E`
      <div class='flex content-item field-item'>
        <label for='url-name'>Name</label>
        <input type='text' id='url-name' data-prop-id='name' @change="${d}" data-id="${t}" value="${e.name}"/>
      </div>
      <div class='flex content-item field-item'>
        <label for='url-url'>URL</label>
        <input type='text' id='url-url' data-prop-id='url' @change="${d}" data-id="${t}" value="${e.url}"/>
      </div>`:E`
      <input type='text' data-prop-id='displayName' class='flex-all' @change="${d}"
      data-id="${t}" value="${e.displayName}" aria-label='${i18n.t("name")}'/>
      ${((t,e)=>E`
    <select data-id="${t}" @change="${d}" class='flex-all' aria-label='${i18n.t("Category")}'>
    ${i.attachmentcategories.map((t=>E`
      <option ?selected=${t.ID===e}>${t.ID}</option>
    `))}
    </select>`)(t,e.category)}
      <span class='flex-all'>${e.name}</span>
      <span>${Math.round(e.size/1e3)}Kb</span>
      <button type='button' data-id="${t}" @click="${l}" class='pzhc pzbutton Simple'
      aria-label=${i18n.t("Delete")}>${et()}</button>`:E`${y(t,e)}
    <button type='button' data-id="${t}" @click="${c}" class='pzhc pzbutton Simple'
    aria-label=${i18n.t("Delete")}>${et()}</button>`,x=t=>{if(!a)return Y();const e=[];if(void 0!==t){const a=Object.entries(t);for(const t of a){let a=t[1].extension;void 0===a&&(a=t[1].type),a||(a=""),a.length>5&&(a=a.substring(0,5)),"URL"===t[1].type&&t[1].editing?e.push(E`<div class='flex layout-content-stacked content-items-maxwidth'>
              ${w(t[0],t[1])}
            </div>`):e.push(E`<div class='row-item'>
              <span class='doc-icon'>${it()}<span>${a}</span></span>
              ${w(t[0],t[1])}
            </div>`)}}return e&&e.length>0?e:E`<div class='empty'>${i18n.t("no attachments found")}</div>`};if(!t){if(e&&e.length>0&&e[0].pyAttachName){n=0,e[0].extension="";const t=e[0].pyAttachName.split(".");return t.length>1&&(e[0].extension=t[t.length-1]),$(e[0])}return E`<div @dragenter="${h}" @dragover="${h}" @dragleave="${h}"
    @drop="${h}" class='attach-files list-items'>
      <div class="file-upload">
        <input @change="${g}" type="file">
        ${at()}<span>${i18n.t(" Drag and drop or ")}
        <button type='button' aria-labelledby='${i18n.t("click to attach a file")}' class='Light' @click="${g}">${i18n.t("choose file")}</button>
      </div>
    </div>`}if(t&&t.classList.contains("attach-files")){if(s&&s.length>0)return i.sendData.call(i,"uploadattachment",{actionid:s[0],target:t}),_=s[0],C=!0,E`<div class='row-item'>
    <span class='doc-icon'>${it()}<span>${_.extension}</span></span>
    <div class='list-item-title'><span>${_.displayName}</span>${C?E`<span class="list-item-meta"><span>
    ${i18n.t("Uploading...")}</span></span>`:""}</div>
  </div>`;if(e&&e.length>0)return $(e[0])}var _,C;let k="Attachments";return void 0!==s&&s.length>0&&(k="URL"===s[0].type?"Attach a link":"Attach files"),E`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${i18n.t(k)}</h2>
      <div class="flex layout-content-inline_middle margin-l-auto">
        <button type='button' data-action-id='close'
        class="pzhc pzbutton Simple" aria-label="${i18n.t("Close modal")}">${tt()}</button>
      </div>
    </div>
    ${void 0!==s&&s.length>0?E`
      <div id="modalcontent" class='attach-files list-items'>
        <div class='upload-content'>${x(s)}</div>
        <div class="action-button-area">
          <button type="button" class="pzhc pzbutton" @click="${m}">${i18n.t("Cancel")}</button>
          <button type="button" class="Strong pzhc pzbutton" @click="${u}">${i18n.t("Upload")}</button>
        </div>
      </div>`:E`
      <form id="modalcontent" @dragenter="${h}" @dragover="${h}" @dragleave="${h}"
      @drop="${h}" class='attach-files list-items'>
        <div class="file-upload">
          <input @change="${g}" type="file" multiple="">
          ${at()}<span>${i18n.t(" Drag and drop files, attach ")}
          <button type='button' aria-label='${i18n.t("click to attach a file")}' class='Light' @click="${g}">
          ${i18n.t("files")}</button> ${i18n.t("or add a")}
          <button type='button' aria-label='${i18n.t("click to add a URL link")}' class='Light' @click="${f}">
          ${i18n.t("link")}</button></span>
        </div>
        ${x(e)}
      </form>
    `}
  `},ci=(t,e)=>E`
<div class="flex layout-content-inline_middle main-header">
  <h2>${i18n.t(t)}</h2>
  <div class="flex layout-content-inline_middle margin-l-auto">
    <button type='button' data-action-id='close'
    class="pzhc pzbutton Simple" aria-label="${i18n.t("Close modal")}">${tt()}</button>
  </div>
</div>
<div class="validation" role="alert" aria-live="assertive"></div>
<form id="modalcontent">${e}</form>
`;class li extends X{static get properties(){return{url:{},caseID:{},username:{},password:{},title:{},bShowCreate:{},bShowCancel:{},bShowAttachments:{},bShowSave:{},authentication:{},token:{},clientid:{},clientsecret:{},initialContent:{},action:{},casetype:{},portalName:{},langTokens:{}}}constructor(){super(),this.url="",this.title="My worklist",this.caseID="",this.username="",this.password="",this.bShowCreate="true",this.bShowCancel="true",this.bShowAttachments="false",this.bShowSave="true",this.authentication="",this.token="",this.clientid="",this.clientsecret="",this.initialContent="",this.action="",this.casetype="",this.portalName="",this.cases=[],this.dataPages={},this.name="",this.etag="",this.casepyStatusWork="",this.casedata={},this.data={},this.numAttachments=0,this.attachmentcategories=[],this.assignmentID="",this.actionID="",this.content={},this.pageInstructions=[],this.errorMsg="",this.validationMsg="",this.bShowConfirm=!1,this.bShowNew=!1,this.refreshOnChange=!1,this.isDeclarativeTarget=!1;const t=this;window.i18n||(window.i18n={t:function(e){if(!e)return"";if("string"!=typeof e)return e;let a=e;if(0===a.indexOf("@L ")&&(a=a.substring(3)),a=a.replace(/^"|"$/g,"").trim(),a=ja(a),"object"!=typeof t.langTokens)return a;const i=t.langTokens[a];return i&&""!==i?i.trim():(console.log(a),a)}})}clearLoadingIndicator(){const t=this.getRenderRoot().querySelector("#case-data");t&&null!==t.querySelector(".loading")&&M(null,t)}sendExternalEvent(t){this.dispatchEvent(new CustomEvent("message",{detail:{...t}}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const di=2;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
class hi extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,a){this._$Ct=t,this._$AM=e,this._$Ci=a}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(t){if(super(t),this.it=z,t.type!==di)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===z||null==t)return this.ft=void 0,this.it=t;if(t===T)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}hi.directiveName="unsafeHTML",hi.resultType=1;const ui=(t=>(...e)=>({_$litDirective$:t,values:e}))(hi),pi=t=>null!=t?t:z,gi=(t,e)=>{if(t.control&&t.control.actionSets&&t.control.actionSets.length>0)for(const a of t.control.actionSets)if(a.events.length>0&&a.actions.length>0&&a.events[0].event===e){let t=a.actions[0].action;return"refresh"===t&&""!==a.actions[0].refreshFor&&(t+=`-${a.actions[0].refreshFor}`),t}},fi=t=>"pyTemplateButton"!==t.reference?t.reference:t.control&&t.control.modes?t.control.modes[1].tooltip:null,mi=(t,e,a)=>{if(void 0===e)return null;const i=t.required&&!0!==t.readOnly?"icon-required":"";return"field-checkbox"===a?""!==t.label||!0===t.showLabel?E`<div class="field-caption dataLabelForWrite ${i}">${ja(t.label)}</div>`:null:"field-text"===a&&!0===t.readOnly&&"pxCheckbox"===t.control.type&&t.control.label?E`<label class="field-caption dataLabelForWrite">${ja(t.control.label)}</label>`:""!==t.label||!0===t.showLabel||!0===t.labelReserveSpace?E`<label class="field-caption dataLabelForWrite ${i}" for="${pi(e)}">${ja(t.label)}</label>`:null},yi=(t,e,a,i)=>void 0===e?E`
      ${i}
    `:"field-button"!==a||(t=>!!(t.control&&t.control.actionSets&&t.control.actionSets.length>0))(t)?"field-radiogroup"===a?E`
    <div class="flex content-item field-item ${a}"><fieldset><legend>${mi(t,e,a)}</legend>${i}</fielset></div>
  `:"field-checkbox"===a?E`
    <div class="flex content-item field-item ${a}">${i}</div>
  `:E`
    <div class="flex content-item field-item ${a}">${mi(t,e,a)}${i}</div>
  `:null,bi=(t,e,a)=>{if(void 0===t||void 0===t.control||void 0===t.control.type)return null;if(t.customAttributes&&"none"===t.customAttributes.display)return null;if(!0===a||!0===t.readOnly||"pxHidden"===t.control.type)return yi(t,e,"field-text",vi(t,e));switch(t.control.type){case"pxPhone":case"pxTextInput":return yi(t,e,"field-textinput",$i(t,e));case"pxInteger":case"pxNumber":return yi(t,e,"field-numberinput",xi(t,e));case"pxCurrency":return yi(t,e,"field-currencyinput",_i(t,e));case"pxEmail":return yi(t,e,"field-emailinput",Ci(t,e));case"pxTextArea":return yi(t,e,"field-textarea",ki(t,e));case"pxRadioButtons":return yi(t,e,"field-radiogroup",Ri(t,e));case"pxCheckbox":return yi(t,e,"field-checkbox",Mi(t,e));case"pxDropdown":return yi(t,e,"field-dropdown",Li(t,e));case"pxDisplayText":return yi(t,e,"field-text",vi(t,e));case"pxIcon":return yi(t,e,"field-icon",Di(t,e));case"pxLink":case"pxURL":return yi(t,e,"field-url",Ai(t,e));case"pxIconDeleteItem":return yi(t,e,"field-button",Ii(t,e));case"pxButton":return yi(t,e,"field-button",Si(t,e));case"pxDateTime":return"TimeOfDay"===t.type?yi(t,e,"field-time",zi(t,e)):"Date"===t.type?yi(t,e,"field-date",Ti(t,e)):yi(t,e,"field-datetime",Ei(t,e));case"pxAutoComplete":return yi(t,e,"field-combobox",Bi(t,e));case"pxSlider":return yi(t,e,"field-slider",wi(t,e));default:return null}},vi=(t,e)=>{if("pxDate"===t.control.type){let a=Fa(t.value);if(a)if(t.control&&2===t.control.modes.length){let e={};switch(t.control.modes[1].dateFormat){case"DateTime-Short-YYYY":case"Date-DayMonthYear-Custom":case"Date-Mediun":e={year:"numeric",month:"short",day:"numeric"};break;case"Date-Short":e={year:"numeric",month:"numeric",day:"numeric"};break;case"Date-Long":e={year:"numeric",month:"long",day:"numeric"};break;case"Date-Full":e={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;default:e={}}a=new Intl.DateTimeFormat([],e).format(a)}else a=(new Intl.DateTimeFormat).format(a);else a=t.value;return E`
      <span class="dataValueRead" data-ref="${t.reference}" id="${pi(e)}">${a}</span>
    `}if("pxDateTime"===t.control.type){let a=Fa(t.value);if(a)if(t.control&&2===t.control.modes.length){let e={};if("DateTime-Short-YYYY"===t.control.modes[1].dateTimeFormat)e={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};else e={};a=new Intl.DateTimeFormat([],e).format(a)}else a=(new Intl.DateTimeFormat).format(a);else a=t.value;return E`
      <span class="dataValueRead" data-ref="${t.reference}" id="${pi(e)}">${a}</span>
    `}if("pxTime"===t.control.type){let a=Fa(t.value);if(a)if(t.control&&2===t.control.modes.length){const t={hour:"numeric",minute:"numeric"};a=new Intl.DateTimeFormat([],t).format(a)}else a=(new Intl.DateTimeFormat).format(a);else a=t.value;return E`
      <span class="dataValueRead" data-ref="${t.reference}" id="${pi(e)}">${a}</span>
    `}if("pxHidden"===t.control.type)return E`
    <input type="text" style="display:none" data-ref="${t.reference}" id="${pi(e)}" value="${ja(t.value)}"/>
    `;let a=t.value;if(t.control&&2===t.control.modes.length&&"locallist"===t.control.modes[0].listSource)for(const e of t.control.modes[0].options)e.key===a&&(a=e.value);return"pxCurrency"===t.control.type&&(a=`$${a}`),E`
    <span class="dataValueRead" data-ref="${t.reference}" id="${pi(e)}">${ja(a)}</span>
  `},$i=(t,e)=>E`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="text"
    id="${pi(e)}"
    value="${ja(t.value)}"
    data-action-change="${pi(gi(t,"change"))}"
    data-action-click="${pi(gi(t,"click"))}"
  />
`,wi=(t,e)=>E`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="range"
    id="${pi(e)}"
    value="${ja(t.value)}"
    data-action-change="${pi(gi(t,"change"))}"
    data-action-click="${pi(gi(t,"click"))}"
  />
`,xi=(t,e)=>E`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="number"
    id="${pi(e)}"
    value="${t.value}"
    data-action-change="${pi(gi(t,"change"))}"
    data-action-click="${pi(gi(t,"click"))}"
  />
`,_i=(t,e)=>E`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="number"
    id="${pi(e)}"
    value="${t.value}"
    data-action-change="${pi(gi(t,"change"))}"
    data-action-click="${pi(gi(t,"click"))}"
  />
`,Ci=(t,e)=>E`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="email"
    id="${pi(e)}"
    value="${t.value}"
    data-action-change="${pi(gi(t,"change"))}"
    data-action-click="${pi(gi(t,"click"))}"
  />
`,ki=(t,e)=>E`
  <textarea
    data-ref="${t.reference}"
    rows="3"
    ?required="${!0===t.required}"
    id="${pi(e)}"
    data-action-change="${pi(gi(t,"change"))}"
    data-action-click="${pi(gi(t,"click"))}"
  >
${ja(t.value)}</textarea
  >
`,Di=(t,e)=>E`
  <i
    class="${t.control.modes[1].iconStyle}"
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    id="${pi(e)}"
    value="${t.value}"
  />
`,Ai=(t,e)=>E`
  <a id="${pi(e)}" data-ref="${t.reference}" href="${t.value}">${t.control.label}</a>
`,Si=(t,e)=>{const a=gi(t,"click");return"deleteRow"===a?Ii(t,e):E`
  <button
  type='button'
    class="${pi(t.control.modes[1].controlFormat)} pzhc pzbutton"
    id="${pi(e)}"
    data-ref="${pi(fi(t))}"
    data-action-click="${pi(a)}"
  >${t.control.label}</button>`},Ii=(t,e)=>E`
  <button
    type='button'
    class="pzhc pzbutton Icon"
    title="Delete row"
    id="${pi(e)}"
    data-ref="${pi(fi(t))}"
    data-action-click="deleteRow"
  >${et()}</button>
`,Ei=(t,e)=>{let a=t.value;if(""!==a){let e=Fa(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${e.getFullYear()}-${Ua(e.getMonth()+1)}-${Ua(e.getDate())}T${Ua(e.getHours())}:${Ua(e.getMinutes())}`):8===t.value.length&&(a=`${t.value.substring(0,4)}-${t.value.substring(4,6)}-${t.value.substring(6,8)}T00:00`)}return E`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      type="datetime-local"
      id="${pi(e)}"
      value="${a}"
      data-action-change="${pi(gi(t,"change"))}"
    data-action-click="${pi(gi(t,"click"))}"
    />
  `},Ti=(t,e)=>{let a=t.value;if(""!==a){let e=Fa(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${e.getFullYear()}-${Ua(e.getMonth()+1)}-${Ua(e.getDate())}`):8===t.value.length&&(a=`${t.value.substring(0,4)}-${t.value.substring(4,6)}-${t.value.substring(6,8)}`)}return E`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      type="date"
      id="${pi(e)}"
      value="${a}"
      data-action-change="${pi(gi(t,"change"))}"
    data-action-click="${pi(gi(t,"click"))}"
    />
  `},zi=(t,e)=>{let a=t.value;if(""!==a){let e=Fa(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${Ua(e.getHours())}-${Ua(e.getMinutes())}-${Ua(e.getSeconds())}`):8===t.value.length&&(a=`${t.value.substring(9,10)}:${t.value.substring(10,11)}:${t.value.substring(11,12)}`)}return E`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      type="time"
      id="${pi(e)}"
      value="${a}"
      data-action-change="${pi(gi(t,"change"))}"
      data-action-click="${pi(gi(t,"click"))}"
    />
  `},Ri=(t,e)=>{let a;return t.control&&t.control.modes&&t.control.modes[0].options?a=t.control.modes[0].options:"True-False"===t.type&&(a=[{value:"true"},{value:"false"}]),void 0===a?null:E`
    ${a.map(((a,i)=>{const s=`rb-${e}-${i}`;return E`
        <div>
          <input
            data-ref="${t.reference}"
            name=${pi(e)}
            id="${s}"
            type="radio"
            value="${a.key}"
            ?required="${!0===t.required}"
            ?checked="${a.key===t.value}"
            data-action-change="${pi(gi(t,"change"))}"
          />
          <label for="${s}">${a.value}</label>
        </div>
      `}))}
  `},Mi=(t,e)=>E`
  <input
  data-ref="${t.reference}"
  id="${pi(e)}"
  type="checkbox"
  ?checked=${"true"===t.value}
  data-action-change="${pi(gi(t,"change"))}"
  data-action-click="${pi(gi(t,"click"))}"
  />
  <label for="${pi(e)}">${t.control.label}</label>
`,Li=(t,e)=>t.control&&t.control.modes[0]&&t.control.modes[0].options?E`<select
      data-ref="${t.reference}"
      id=${pi(e)}
      ?required="${!0===t.required}"
      data-action-change="${pi(gi(t,"change"))}"
      data-action-click="${pi(gi(t,"click"))}">
        <option value="" title="Select...">Select...</option>
        ${t.control.modes[0].options.map((e=>E`
            <option ?selected=${e.key===t.value} value='${e.key}'>${e.value}</option>
          `))}
      </select>`:E`<input
      type='text'
      data-ref="${t.reference}"
      id=${pi(e)}
      ?required="${!0===t.required}"
      data-action-change="${pi(gi(t,"change"))}"
      data-action-click="${pi(gi(t,"click"))}">
      </input>`,Bi=(t,e)=>{if(t.control.modes&&t.control.modes[0]&&t.control.modes[0].options)return E`
      <input
        data-ref="${t.reference}"
        list="${t.reference}"
        ?required="${!0===t.required}"
        type="text"
        class="combobox loaded"
        id="${pi(e)}"
        value="${ja(t.value)}"
        data-action-change="${pi(gi(t,"change"))}"
        data-action-click="${pi(gi(t,"click"))}"
      />
      <datalist id="${t.reference}">
        ${t.control.modes[0].options.map((t=>E`
            <option value="${t.value}">
              ${t.key}
            </option>
          `))}
      </datalist>
    `;let a="";return t.control&&t.control.modes&&t.control.modes[0]&&t.control.modes[0].dataPageID&&(a=t.control.modes[0].dataPageID),E`
    <input
      data-ref="${t.reference}"
      list="${t.reference}"
      data-pageid="${a}"
      ?required="${!0===t.required}"
      type="text"
      class="combobox"
      id="${pi(e)}"
      value="${t.value}"
      data-action-change="${pi(gi(t,"change"))}"
      data-action-click="${pi(gi(t,"click"))}"
    />
    <datalist id="${t.reference}"></datalist>
  `},Ni=t=>""!==t.title?E`
      <div class="header-bar">
        <div class="header-content"><h3 class="header-title">${t.title}</h3></div>
      </div>
    `:null,Hi=(t,e)=>{let a=t.fieldListID;if(void 0!==t.reference&&(a=t.reference),"."===a.charAt(0)&&(a=a.substring(1)),t.newRow&&!0!==e){const e=[];return Ja(t.newRow,e),E`
      <div class="table-action-area">
        <button type="button" class="pzhc pzbutton Simple" data-newrow="${pi(e.join())}"
        data-ref=${a} data-action-click="addRow">${Q()}Add item</button>
      </div>
    `}return null},Oi=t=>E`
  ${t.map((t=>E`
    <th scope='col'>${t.caption?E`${t.caption.value}`:""}</th>`))}
`,Pi=t=>E`
  ${t.map((t=>E`
    <tr>
      ${t.groups.map((t=>E`
      <td>${bi(t.field)}</td>`))}
    </tr>`))}
`,Ui=(t,e,a,i)=>E`
  ${t.map(((t,s)=>{const n=`${e}-${s}`;if(t.layout){""!==t.layout.groupFormat.trim()&&"CENTER"!==t.layout.groupFormat||(t.layout.groupFormat="default");const e=t.layout.groupFormat.replace(/ /g,"_").toLowerCase(),s=`flex content layout-content-${e} content-${e}`;if(t.layout.view&&t.layout.view.groups)return E`
          <div class="${s}">${Ui(t.layout.view.groups,n,a,i)}</div>
        `;if(t.layout.groups){let e="";if("string"==typeof t.layout.title&&""!==t.layout.title&&(t.layout.titleFormat,1))switch(t.layout.titleFormat){case"h2":default:e=E`<h2>${t.layout.title}</h2>`;break;case"h3":e=E`<h3>${t.layout.title}</h3>`;break;case"h4":e=E`<h4>${t.layout.title}</h4>`}return E`
        ${e}<div class="${s}">${Ui(t.layout.groups,n,a,i)}</div>
        `}return t.layout.rows?t.layout.header?((t,e,a)=>E`
  ${Ni(t.layout)}
  <div class='table-content'>
  <table>
  <caption class="sr-only">${t.layout.title}</caption>
    <thead>
      <tr>
        ${Oi(t.layout.header.groups)}
      </tr>
    </thead>
    <tbody>
      ${Pi(t.layout.rows)}
    </tbody>
  </table>
  </div>
  ${Hi(t.layout,a)}
`)(t,0,a):qi(t,n,a):null}if(t.paragraph)return E`<div class='flex content-item field-item flex-paragraph'>${ui(t.paragraph.value)}</div>`;if(t.field){if(t.field.control&&"pxAttachContent"===t.field.control.type)return oi("Upload file","Upload file","",i.displayAttachments);if(t.field.control&&t.field.control.actionSets&&t.field.control.actionSets.length>0&&t.field.control.actionSets[0]&&t.field.control.actionSets[0].actions[0]&&"localAction"===t.field.control.actionSets[0].actions[0].action){const e=i.actionID;return((t,e,a)=>{const i=t.control.actionSets[0].actions[0].actionProcess.localAction,s=t.control.actionSets[0].actions[0].actionProcess.target,n=t.control.modes[1].controlFormat?t.control.modes[1].controlFormat:"";if("modalDialog"===s){const s=a=>{M(ci(t.control.label,Y()),a),e(i,a)};return st(i,t.control.label,n,s,a)}return E`<div><button type="button" @click="${()=>{e(i)}}" class="pzhc pzbutton ${n}">${i18n.t(t.control.label)}</button></<div>`})(t.field,i.displayLocalAction,(()=>{i.reloadAssignment(e)}))}return bi(t.field,n,a)}return t.view&&t.view.groups?"pyAttachFieldOptional"===t.view.viewID&&"Embed-Attach-File"===t.view.appliesTo?oi("Upload file","Upload file","",i.displayAttachments):Ui(t.view.groups,n,a,i):null}))}
`,qi=(t,e,a)=>E`
  ${Ni(t.layout)}
  <div class="rdl">
    ${Fi(t.layout.rows,e,a)}
  </div>
  ${Hi(t.layout,a)}
`,Fi=(t,e,a)=>E`
  ${t.map(((t,i)=>{const s=`${e}-row${i}`;return t.groups?E`
        <div>
          ${Ui(t.groups,s,a)}
        </div>
      `:null}))}
`,ji=(t,e,a,i,s,n,o,r,c)=>{const l=E`${at()}<span class='count-badge'>${s}</span>`;if(void 0===e.caseID&&a.content)return E`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${a.content.pyLabel} <span>(${a.content.pyID})</span>
      ${""!==i?E`<span class='badge-bg-info centered'><span class='badge_text'>${i}</span></span>`:""}</h2>
      <div class="flex layout-content-inline_middle margin-l-auto">
        ${c?oi("Attachments",l,"Simple",c):""}
        ${a.actions&&a.actions.length>0?E`
          ${ni("Actions","Start a new action",n,o)}`:""}
      </div>
    </div>
    ${((t,e)=>t&&0!==t.length?E`
  <h3>
    Assignments
  </h3>
  <table>
      <caption class='sr-only'>List of assignments</caption>
      <thead>
      <tr>
        <th span='col'>Priority</th>
        <th span='col'>Task</th>
        <th span='col'>Assigned to</th>
        <th span='col' class="right-aligned">Action</th>
      </tr>
      </thead>
      <tbody>
        ${t.map((t=>E`
        <tr>
          <td>${t.urgency}</td>
          <td>${""!==t.instructions?t.instructions:t.name}</td>
          <td>${t.routedTo}</td>
          <td class="right-aligned">
            <button type='button' @click="${e}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">Open</button>
          </td>
        </tr>`))}
  </tbody>
  </table>`:null)(a.assignments,r)}
    ${((t,e)=>t&&0!==t.length?E`
  <h3>
    ${i18n.t("Related cases")}
  </h3>
  <table>
    <thead>
      <tr>
        <th span='col'>${i18n.t("ID")}</th>
        <th span='col' class="right-aligned">${i18n.t("Action")}</th>
      </tr>
    </thead>
      <tbody>
        ${t.map((t=>E`
        <tr>
          <td>${t.ID}</td>
          <td class="right-aligned">
            <button type='button' @click="${e}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">${i18n.t("Open")}</button>
          </td>
        </tr>`))}
  </tbody>
  </table>`:null)(a.childCases,r)}
    <h3>Case information</h3>`;if(""===t||void 0===e.caseID)return"";const d=e.caseID.split(" ")[1];return E`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${e.name} <span>(${d})</span>
    ${""!==i?E`<span class='badge-bg-info centered'><span class='badge_text'>${i}</span></span>`:""}</h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      ${c?oi("Attachments",l,"Simple",c):""}
      ${e.actions&&e.actions.length>0?E`
        ${ni("Actions","Start a new action",n,o)}`:""}
    </div>
  </div>
 <h3>${t}</h3>`},Vi=(t,e,a,i,s)=>E`
  <div class="flex layout-content-stacked">${Ui(t,e,!1,s)}</div>
  ${((t,e)=>E`
  <div class="action-button-area">
    ${null!==t?E`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    ${null!==e?E`<button type="button" class="pzhc pzbutton" @click="${e}">Save</button>`:""}
    <button type="button" data-submit="submit" class="Strong pzhc pzbutton">Submit</button>
  </div>
`)(a,i)}
`,Wi=(t,e,a,i)=>E`
  <div class="flex layout-content-stacked">${Ui(t,e,!0,i)}</div>
  ${(t=>null===t?null:E`
  <div class="action-button-area">
  ${null!==t?E`<button type="button" class="pzhc pzbutton Strong" @click="${t}">Close</button>`:""}
  </div>`)(a)}
`,Zi=(t,e,a,i,s)=>E`
  <div class="flex layout-content-stacked">${Ui(t,e,!1,s)}</div>
  ${((t,e)=>E`
  <div class="action-button-area">
    ${null!==t?E`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    <button type="button" data-submit="save" class="pzhc pzbutton Strong" @click="${e}">Submit</button>
  </div>
`)(a,i)}
`,Ki=(t,e,a,i)=>E`
  <div class="flex layout-content-stacked">${Ui(t,e,!1,i)}</div>
  ${(t=>E`
  <div class="action-button-area">
    ${null!==t?E`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    <button type="button" data-submit="create" class="Strong pzhc pzbutton">Create</button>
  </div>
`)(a)}
`,Ji=(t,e)=>{const a=[],i=Object.entries(e.actions);for(const e of i)e[1].name!==t&&a.push(E`
          <li role="menuitem" tabindex="-1" data-value="${e[1].ID}">${e[1].name}</li>
        `);return E`
    ${a}
  `},Xi=t=>E`
${t.pxResults.map((t=>E`
    <option>
      ${t.pyUserName}
    </option>`))}`;
/**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class Gi extends li{genErrorMessage(t){this.clearLoadingIndicator(),t.message&&-1!==t.message.indexOf("JSON.parse")?console.error("Error:",t):t.message&&-1!==t.message.indexOf("Unexpected token")?(this.errorMsg="Error 404: Resource not found",this.requestUpdate(),console.error(this.errorMsg)):(t.status?""!==t.statusText?this.errorMsg=`Error ${t.status}: ${t.statusText}`:401===t.status?this.errorMsg="Error 401: Authentication error":500===t.status?this.errorMsg="Error 500: Internal server error":this.errorMsg=`Error ${t.status}`:t.name&&t.message?this.errorMsg=`Error ${t.name}: ${t.message}`:this.errorMsg="string"==typeof t?t:"Critical error",this.requestUpdate(),console.error("Error:",t))}submitForm=(t,e)=>{if(t.preventDefault(),t.target&&null!==t.target.closest(".mashup-modal")){const e=t.target.closest("#modalcontent");ai(e,this.content,this.pageInstructions,this.casedata.content),this.validateForm(e)?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID,target:e}):this.reportFormValidity(e)}else{const t=this.getRenderRoot().querySelector("#case-data");ai(t,this.content,this.pageInstructions,this.casedata.content),this.validateForm(t)?"create"!==e?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID}):this.sendData("newwork",{id:this.casetype}):this.reportFormValidity(t)}return!1};resetError=t=>{this.errorMsg="",this.validationMsg="",this.actionAreaCancel(t)};reloadWorkList=t=>{this.cases=[],this.requestUpdate(),this.actionAreaCancel(t)};actionAreaCancel=t=>{if(t&&t.preventDefault(),t.target&&null!==t.target.closest(".mashup-modal")){const e=t.target.closest(".mashup-modal").querySelector("button");if(null!==e)return void e.click()}this.bShowConfirm=!1,this.bShowNew=!1,this.caseID="",this.data={},this.content={},this.pageInstructions=[],this.casedata={},this.attachmentcategories=[],this.casepyStatusWork="",this.assignmentID="",this.actionID="",this.errorMsg="",this.numAttachments=0,this.validationMsg="",this.name="","workList"===this.action&&this.fetchData("worklist"),this.sendExternalEvent({type:"cancel"})};actionAreaSave=t=>{t&&t.preventDefault(),null===t.target.getAttribute("data-submit")&&(t.target.textContent="Saving...",t.target.disabled=!0);const e=this.getRenderRoot().querySelector("#case-data");e&&(ai(e,this.content,this.pageInstructions,this.casedata.content),""!==this.assignmentID?this.sendData("savecase",{id:this.caseID,actionid:"",target:t.target}):this.sendData("savecase",{id:this.caseID,actionid:this.actionID,target:t.target}))};actionRefresh=()=>{const t=this.getRenderRoot().querySelector("#case-data");t&&(this.validationMsg="",ai(t,this.content,this.pageInstructions,this.casedata.content),""!==this.assignmentID?this.fetchData("assignmentaction",{id:this.assignmentID,actionid:this.actionID}):this.fetchData("caseaction",{id:this.caseID,actionid:this.actionID}))};displayCasesTypes=()=>(t=>{const e=[],a=Object.entries(t);for(const t of a)"true"===t[1].canCreate&&e.push(E`
          <li role="menuitem" tabindex="-1" data-value="${t[0]}">${t[1].name}</li>
        `);return E`
    ${e}
  `})(this.casetypes);displayActions=()=>this.data.actions?Ji(this.name,this.data):this.casedata.actions?Ji(this.name,this.casedata):null;displayAttachments=t=>{this.fetchData("attachmentcategories",{id:this.caseID}),this.fetchData("attachments",{id:this.caseID,target:t})};displayLocalAction=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");if(a&&(ai(a,this.content,this.pageInstructions,this.casedata.content),""!==this.assignmentID)){const a=this;this.sendData("savecase",{id:this.caseID},(()=>{this.actionID=t,a.fetchData("assignmentaction",{id:this.assignmentID,actionid:t,target:e})}))}};reloadAssignment=t=>{this.actionID=t,this.fetchData("assignmentaction",{id:this.assignmentID,actionid:t})};createCase=t=>{if(this.name="New Case",this.bShowNew=!0,t){let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&(this.casetype=e.getAttribute("data-value"),this.name=`New ${e.textContent} `)}this.content=this.initialContent,this.pageInstructions=[],this.caseID="",this.data={},this.casedata={},this.casetypes[this.casetype]?"true"===this.casetypes[this.casetype].requiresFieldsToCreate?this.fetchData("newwork",{id:this.casetype}):this.sendData("newwork",{id:this.casetype}):(this.errorMsg=`Case '${this.casetype}' is not defined`,console.error(`Case '${this.casetype}' is not defined`)),this.requestUpdate()};runAction=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&null!==e.getAttribute("data-value")&&(this.actionID=e.getAttribute("data-value"),this.actionRefresh());const a=this.getRenderRoot().querySelector("#case-data");null!=a&&M(Y(),a)};openCase=t=>{t.preventDefault(),this.caseID=t.target.getAttribute("data-id"),this.name="",this.data={},this.casedata={},0===this.caseID.indexOf("ASSIGN-WORKLIST")?(this.sendExternalEvent({type:"openassignment",id:this.caseID}),this.assignmentID=this.caseID,this.caseID=""):(this.sendExternalEvent({type:"opencase",id:this.caseID}),this.assignmentID="");const e=this.getRenderRoot().querySelector("#case-data");null!=e&&M(Y(),e),this.requestUpdate()};getData=(t,e)=>{this.dataPages[t]?M(Xi(this.dataPages[t]),e.nextElementSibling):this.fetchData("data",{id:t,element:e})};refreshAssignment=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");let i=t;if(a){if(ai(a,this.content,this.pageInstructions,this.casedata.content),i){"path"===i.tagName&&(i=i.parentNode),"svg"===i.tagName&&(i=i.parentNode);const t=i.getAttribute("data-action-click"),e=i.getAttribute("data-ref");if(null!==e&&null!==t)if("addRow"===t){const t=Xa(this.casedata.content,e,i.getAttribute("data-newrow"));null!==t&&this.pageInstructions.push(t)}else if("deleteRow"===t){const t=Ga(this.casedata.content,e);null!==t&&this.pageInstructions.push(t)}}!0===this.bShowNew?this.sendData("refreshnew",{id:this.casetype,refreshFor:e}):this.sendData("refreshassignment",{id:this.assignmentID,actionid:this.actionID,refreshFor:e})}};fetchData(t,e){const{id:a,actionid:i,target:s,element:n}=e||{};let o="";""!==this.authentication&&"basic"!==this.authentication||(o=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(o=`Bearer ${this.token}`);const r={method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:o},mode:"cors"};let c=`${this.url}/api/v1/`;switch(t){case"worklist":c+="assignments";break;case"casetypes":c+="casetypes";break;case"newwork":c+=`casetypes/${a}`;break;case"assignment":c+=`assignments/${a}`;break;case"case":c+=`cases/${a}`;break;case"data":c+=`data/${a}`;break;case"page":c+=`cases/${a}/pages/${i}`;break;case"view":c+=`cases/${a}/views/${i}`;break;case"assignmentaction":c+=`assignments/${a}/actions/${i}`;break;case"caseaction":c+=`cases/${a}/actions/${i}`;break;case"attachment":c+=`attachments/${a}`;break;case"attachments":c+=`cases/${a}/attachments`;break;case"attachmentcategories":c+=`cases/${a}/attachment_categories`}fetch(c,r).then((e=>{if("case"===t)this.etag=e.headers.get("etag"),s&&(s.disabled=!1,s.textContent="Save");else if("attachment"===t)return e.text();return e.ok||404===e.status?e.json():Promise.reject(e)})).then((e=>{try{if(e.errors&&e.errors.length>0)return this.errorMsg=`Error ${e.errors[0].ID}: ${e.errors[0].message}`,this.clearLoadingIndicator(),this.requestUpdate(),void console.error("Error:",e);const o=this.getRenderRoot().querySelector("#case-data");switch(t){case"casetypes":this.casetypes={};for(const t of e.caseTypes)"workList"===this.action&&""!==this.casetype&&this.casetype!==t.ID||(this.casetypes[t.ID]={canCreate:t.CanCreate,name:t.name,requiresFieldsToCreate:!1});"createNewWork"===this.action&&this.createCase();break;case"worklist":this.cases=e.assignments,this.requestUpdate();break;case"assignment":this.data=e,this.caseID=e.caseID,""===this.name&&(this.name=" "),this.fetchData("case",{id:this.caseID}),e.actions.length>0&&e.actions[0].ID?(this.actionID=e.actions[0].ID,this.name=e.actions[0].name,this.fetchData("assignmentaction",{id:a,actionid:this.actionID})):this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"});break;case"case":this.casedata=e,this.content={},this.pageInstructions=[],this.numAttachments=0,""===this.name&&(this.name=this.casedata.content.pyLabel),this.casepyStatusWork=this.casedata.content.pyStatusWork,this.requestUpdate(),""===this.assignmentID&&this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"}),"true"===this.bShowAttachments&&this.fetchData("attachments",{id:this.caseID});break;case"data":if(this.dataPages[a]=e,!n.nextElementSibling){console.error("Error: case data are not present when retrieving the data");break}M(this.showDataList(e),n.nextElementSibling);break;case"caseaction":if(!o){console.error("Error: case data are not present when retrieving the assignmentaction");break}if(!e.view.groups)return this.errorMsg="Error: view is not defined",this.clearLoadingIndicator(),void this.requestUpdate();M(this.renderSaveCaseLayout(e.view.groups,"Obj"),o),o.focus();break;case"assignmentaction":if(!o){console.error("Error: case data are not present when retrieving the assignmentaction");break}if(!e.view.groups)return this.errorMsg="Error: view is not defined",this.clearLoadingIndicator(),void this.requestUpdate();s?(this.actionID=i,M(ci(e.name,this.renderMainLayout(e.view.groups,"Obj")),s),s.focus()):(this.name=e.name,this.requestUpdate(),M(this.renderMainLayout(e.view.groups,"Obj"),o),o.focus());break;case"page":if(!o){console.error("Error: case data are not present when retrieving the page");break}M(this.renderMainLayout(e.groups,"Obj"),o),o.focus();break;case"view":if(!o){console.error("Error: case data are not present when retrieving the page");break}this.content={},this.pageInstructions=[],"pyCaseInformation"===i?(this.name=e.name,M(this.renderReviewLayout(e.groups,"Obj"),o)):(this.name=e.name,M(this.renderMainLayout(e.groups,"Obj"),o)),o.focus();break;case"newwork":if(this.content={},this.pageInstructions=[],!o){console.error("Error: case data are not present when retrieving the newwork");break}M(this.renderCreateCaseLayout(e.creation_page.groups[0].layout.groups,"Obj"),o),o.focus();const t=this.getRenderRoot().querySelector("#case-data");t&&((t,e)=>{for(const a of t.elements)if("INPUT"===a.tagName||"TEXTAREA"===a.tagName||"SELECT"===a.tagName){const t=a.getAttribute("data-ref");if(null!==t&&"pyID"!==t&&e[t]){const i=e[t];if("object"==typeof i)"radio"===a.type?a.value===i.value&&(a.checked=!0):"checkbox"===a.type?!0!==i.value&&"true"!==i.value||(a.checked=!0):i.value&&(a.value=i.value),i.disabled&&(a.disabled=!0);else if("datetime-local"===a.type)24===i.length?a.value=i.substring(0,23):a.value=i;else if("date"===a.type){let i;a.valueAsDate&&(i=new Date(a.valueAsDate)),i&&i instanceof Date&&i.getTime()==i.getTime()||(i=new Date(a.value)),i&&i instanceof Date&&i.getTime()==i.getTime()?(i=new Date(i.getTime()+6e4*i.getTimezoneOffset()),Wa(e,t,`${Ua(i.getMonth()+1)}/${Ua(i.getDate())}/${i.getFullYear()}`)):Wa(e,t,a.value)}else"string"==typeof i?"radio"===a.type?a.value===i&&(a.checked=!0):"checkbox"===a.type?"true"===i&&(a.checked=!0):a.value=i:"boolean"==typeof i&&"checkbox"===a.type?!0===i&&(a.checked=!0):a.value=i}}})(t,this.initialContent);break;case"attachments":let r=e.attachments;r||(r=[]),this.numAttachments=r.length,s&&M(ri(s,r,this.caseID,this),s),this.requestUpdate();break;case"attachmentcategories":this.attachmentcategories=e.attachment_categories;break;case"attachment":s(e)}}catch(t){this.errorMsg=`Error: ${t}`,this.requestUpdate(),console.error("Error:",t)}})).catch((t=>{this.genErrorMessage(t)}))}sendData(t,e,a){const{id:i,actionid:s,target:n,refreshFor:o}=e;let r="";""!==this.authentication&&"basic"!==this.authentication||(r=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(r=`Bearer ${this.token}`);const c={"Content-Type":"application/json;charset=UTF-8",Authorization:r},l={method:"POST",headers:c,mode:"cors"},{pageInstructions:d,pageupdate:h}=si(this.content,this.pageInstructions);let u=`${this.url}/api/v1/`;switch(this.validationMsg="",t){case"authenticate":"oauth2password"===this.authentication?l.body=`grant_type=password&client_id=${this.clientid}&client_secret=${this.clientsecret}&username=${this.username}&password=${this.password}`:"oauth2clientcredentials"===this.authentication&&(l.body=`grant_type=client_credentials&client_id=${this.clientid}&client_secret=${this.clientsecret}`),l.headers["Content-Type"]="application/x-www-form-urlencoded",u=`${this.url}/PRRestService/oauth2/v1/token`;break;case"newwork":u+="cases",l.body=JSON.stringify({content:h,pageInstructions:d,caseTypeID:i});break;case"submitassignment":l.body=JSON.stringify({content:h,pageInstructions:d}),u+=`assignments/${i}?actionID=${s}`;break;case"savecase":u+=`cases/${i}`,s&&""!==s&&(u+=`?actionID=${s}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:h,pageInstructions:d});break;case"refreshnew":u+=`casetypes/${i}/refresh`,o&&""!==o&&(u+=`?refreshFor=${o}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:h,pageInstructions:d});break;case"refreshassignment":u+=`assignments/${i}/actions/${s}/refresh`,o&&""!==o&&(u+=`?refreshFor=${o}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:h,pageInstructions:d});break;case"refreshcase":u+=`cases/${i}/actions/${s}/refresh`,o&&""!==o&&(u+=`?refreshFor=${o}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:h,pageInstructions:d});break;case"uploadattachment":u+="attachments/upload",delete c["Content-Type"];const t=new FormData;t.append("File",s,s.name),l.body=t;break;case"attachments":u+=`cases/${i}/attachments`,l.body=JSON.stringify({attachments:s});break;case"deleteattachment":u+=`attachments/${i}`,l.method="DELETE"}fetch(u,l).then((e=>"deleteattachment"===t||"attachments"===t?e.text():200===e.status||201===e.status||e.status>=400&&e.status<500?e.json():e.ok?Promise.resolve("ok"):Promise.reject(e))).then((e=>{if(e.errors&&e.errors.length>0){if(e.errors[0].ValidationMessages)if(n&&"modalcontent"===n.id)ii(n,e.errors[0].ValidationMessages,this),M(this.genPageValidationErrors(e),n.previousElementSibling);else{const t=this.getRenderRoot().querySelector("#case-data");ii(t,e.errors[0].ValidationMessages,this),this.validationMsg=this.genPageValidationErrors(e)}else this.errorMsg=`Error ${e.errors[0].ID}: ${e.errors[0].message}`;this.clearLoadingIndicator(),n&&"BUTTON"===n.tagName&&(n.disabled=!1,n.textContent="Save")}else if(e.access_token)this.token=e.access_token;else{const i=this.getRenderRoot().querySelector("#case-data");if("refreshcase"===t||"refreshassignment"===t||"refreshnew"===t){if(!i)return void console.error("Error: case data are not present");M("refreshnew"===t?this.renderCreateCaseLayout(e.creation_page.groups[0].layout.groups,"Obj"):this.renderMainLayout(e.view.groups,"Obj"),i)}else if("savecase"===t){if(this.fetchData("case",{id:this.caseID,target:n}),a)return void a()}else if("deleteattachment"===t||"attachments"===t)this.fetchData("attachments",{id:this.caseID,target:n});else if("uploadattachment"===t){let t=s.name.lastIndexOf(".");-1===t&&(t=s.name.length);const a=s.name.substring(t+1),i=[{type:"File",category:s.category,fileType:a,name:s.displayName,ID:e.ID}];return void this.sendData("attachments",{id:this.caseID,actionid:i,target:n})}e.ID&&(this.caseID=e.ID,"newwork"===t&&this.sendExternalEvent({type:"newwork",id:this.caseID})),e.nextAssignmentID?(i&&(M(this.genLoadingIndicator(),i),this.requestUpdate()),this.bShowNew=!1,this.assignmentID=e.nextAssignmentID,this.fetchData("assignment",{id:this.assignmentID})):e.nextPageID&&(i&&(M(this.genLoadingIndicator(),i),this.requestUpdate()),"Confirm"===e.nextPageID||"Review"===e.nextPageID?(this.bShowConfirm=!0,this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"}),this.fetchData("case",{id:this.caseID})):this.fetchData("page",{id:this.caseID,actionid:e.nextPageID}))}this.requestUpdate()})).catch((t=>{this.genErrorMessage(t)}))}}const Yi=(t,e,a,i)=>E`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${i18n.t(t)} <span>(${e})</span>
    <span class='badge-bg-info centered'><span class='badge_text'>${a}</span></span></h2>
    ${i?E`<div class="flex layout-content-inline_middle margin-l-auto">
        ${oi("Attachments",at(),"Simple",i)}
      </div>`:""}
  </div>
  <div class="flex layout-content-inline_middle success">
    ${i18n.t("Thank you. Your information has been submitted.")}
  </div>
  <h3>${i18n.t("Case information")}</h3>
  <div id="case-data"></div>`,Qi=(t,e)=>E`
  <div class="error">${t}
  ${null!=e?E`
    <button type='button' aria-label="${i18n.t("Click to close the banner")}" class="pzhc pzbutton Light" @click="${e}">
    ${tt()}</button>`:""}
  </div>`,ts=(t,e,a,i,s,n)=>E`
  <div class="flex layout-content-inline_middle main-header">
    <h2>
    ${i18n.t(t)}
      ${e.length>0?E`<span>(${e.length})</span>`:""}
    </h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      <button type='button' class="pzhc pzbutton Simple"
      title='${i18n.t("Click to refresh the worklist")}' @click="${i}">${i18n.t("Refresh")}</button>
      ${ni("Create","Create a new case",a,s)}
    </div>
  </div>
  ${e.length>0?E`
        <table class='responsive'>
          <caption class='sr-only'>${i18n.t("My worklist")}</caption>
          <thead>
            <tr>
              <th span='col'>${i18n.t("Name")}</th>
              <th span='col'>${i18n.t("Case ID")}</th>
              <th span='col' class="right-aligned">${i18n.t("Urgency")}</th>
              <th span='col' class="right-aligned">${i18n.t("Action")}</th>
            </tr>
          </thead>
          <tbody>
            ${e.map((t=>E`
                <tr>
                  <td data-title='Name'>${i18n.t(t.name)}</td>
                  <td data-title='Case ID'>${t.caseID}</td>
                  <td data-title='Urgency' class="right-aligned">${t.urgency}</td>
                  <td data-title='Action' class="right-aligned">
                    <button @click="${n}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">
                    ${i18n.t("Open")}</button>
                  </td>
                </tr>
              `))}
          </tbody>
        </table>
      `:E`
        <div class="margin-t-2x">${i18n.t("no assignments")}</div>
      `}
`;class es extends Gi{displayContent(){return""!==this.errorMsg?Qi(this.errorMsg,"true"===this.bShowCancel?this.resetError:null):"oauth2password"!==this.authentication&&"oauth2clientcredentials"!==this.authentication||""!==this.token?(this.casetypes||"createNewWork"!==this.action&&"workList"!==this.action?""===this.name&&("openAssignment"===this.action&&""===this.assignmentID&&(this.assignmentID=this.caseID),""!==this.assignmentID?this.fetchData("assignment",{id:this.assignmentID}):""!==this.caseID&&this.fetchData("case",{id:this.caseID})):(this.fetchData("casetypes"),"createNewWork"===this.action?(this.bShowNew=!0,this.casetypes[this.casetype]&&this.fetchData("newwork",{id:this.casetype})):"workList"===this.action&&(this.bShowCancel="true",this.fetchData("worklist"))),this.bShowConfirm?Yi(this.casedata.content.pyLabel,this.casedata.content.pyID,this.casepyStatusWork,"true"===this.bShowAttachments?this.displayAttachments:null):""!==this.caseID||""!==this.assignmentID||this.bShowNew?E`
        ${ji(this.name,this.data,this.casedata,this.casepyStatusWork,this.numAttachments,this.displayActions,this.runAction,this.openCase,"true"===this.bShowAttachments?this.displayAttachments:null)}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
        <form id="case-data"></form>
      `:"workList"===this.action?ts(this.title,this.cases,this.displayCasesTypes,this.reloadWorkList,"true"===this.bShowCreate?this.createCase:null,this.openCase):null):(this.sendData("authenticate",{}),null)}renderMainLayout=(t,e)=>Vi(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this);renderSaveCaseLayout=(t,e)=>Zi(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this);renderReviewLayout=(t,e)=>Wi(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,this);renderCreateCaseLayout=(t,e)=>Ki(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null);genPageValidationErrors=t=>(t=>t.errorDetails?E`
    <ul>
      ${t.errorDetails.map((t=>E`<li>${t.localizedValue}</li>`))}
    </ul>`:E`
  <ul>
    ${t.errors[0].ValidationMessages.map((t=>t.Path?E`
          <li>${t.Path.substring(1)}: ${t.ValidationMessage}</li>
        `:0===t.ValidationMessage.indexOf("Validation failed")?null:E`
    <li>${t.ValidationMessage}</li>
  `))}
  </ul>`)(t);showDataList=t=>Xi(t);genLoadingIndicator=()=>Y();validateForm=t=>t.checkValidity();reportFormValidity=t=>t.reportValidity();setInlineError=(t,e)=>{t.setCustomValidity(ja(e)),t.classList.add("error-field"),t.reportValidity()};clickHandler=t=>{let e=t.target;"path"===e.tagName&&(e=e.parentNode),"svg"===e.tagName&&(e=e.parentNode);const a=e.getAttribute("data-action-click");e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e),Ya(e,"click")?(this.refreshAssignment(e,Qa(e,"click")),t.preventDefault()):"BUTTON"===e.tagName&&(t.preventDefault(),null!==e.getAttribute("data-submit")&&"save"!==e.getAttribute("data-submit")?this.submitForm(t,e.getAttribute("data-submit")):("addRow"===a||"deleteRow"===a)&&this.refreshAssignment(e))};changeHandler=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e.setCustomValidity(""),e.classList.remove("error-field"),Ya(e,"change")&&this.refreshAssignment(e,Qa(e,"change"))};keyupHandler=t=>{const e=t.target;"TEXTAREA"===e.tagName&&(e.style.cssText="height:auto; padding:0;",e.style.cssText=`height:${e.scrollHeight}px`)};focusHandler=t=>{const e=t.target;e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e)};async firstUpdated(){const t=this.getRenderRoot();t&&(t.addEventListener("click",this.clickHandler),t.addEventListener("focusin",this.focusHandler),t.addEventListener("change",this.changeHandler),t.addEventListener("keyup",this.keyupHandler))}}const as=()=>E`
  <style>
    label {
      color: var(--generalLabelColor);
      line-height: 1.5;
    }
    .helper-text {
      color: var(--generalLabelColor);
      font-size: var(--generalHelperTextFontSize);
      margin-top: 0.3rem;
    }
    h1 {
      font-size: var(--text-xxl);
    }
    h2 {
      font-size: var(--text-xl);
    }
    h3 {
      font-size: var(--text-l);
    }
    h4 {
      font-size: var(--text-m);
    }
    h5 {
      font-size: var(--text-s);
    }
    h6 {
      font-size: var(--text-xs);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
      color: var(--generalTextColor);
    }
    ul {
      margin: 0;
    }
    fieldset {
      border: none;
      padding:0;
      margin:0;
    }

    select,
    textarea,
    input {
      font-family: OpenSans, sans-serif;
      font-size: var(--generalTextFontSize);
      font-weight: normal;
      text-align: left;
      color: var(--generalTextColor);
      border: 1px solid var(--generalBorderColor);
      border-radius: var(--generalBorderRadius);
      background-color: transparent;
      outline: 0;
      padding: var(--spacing05x) var(--spacing1x);
    }
    input {
      height: var(--controlHeight);
    }
    select {
      height: calc(var(--controlHeight) + var(--spacing1x) + 2px);
    }
    input:hover,
    input:active,
    input:focus {
      outline: 0;
      border-color: var(--primaryColor);
    }

    input[type='number'] {
      inline-size: auto;
    }

    div[readonly],
    input[readonly],
    textarea[readonly] {
      background-color: #fafafa;
      border-color: transparent;
    }

    .field-item {
      display: flex;
      flex-flow: column nowrap;
    }

    .flex.content > .field-button {
      display: inline-block;
    }

    .field-item .field-caption {
      display: block;
      font-size: var(--generalTextFontSize);
      color: var(--generalLabelColor);
      min-height: 27px;
      padding-bottom: 3px;
    }

    textarea {
      resize: none;
      overflow: hidden;
      display: block;
      tab-size: 4;
    }

    textarea:hover,
    textarea:active,
    textarea:focus {
      outline: 0;
      border-color: var(--primaryColor);
    }

    input[type='radio'] {
      position: absolute;
      opacity: 0;
    }

    input[type='radio'] + label::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 50%;
      transition: 0.2s ease all;
      background: #ffffff;
      border: 1px solid #cacdd6;
      width: 28px;
      min-height: 30px;
      display: inline-block;
      margin: 0 4px 0 0;
      box-sizing: border-box;
      padding: 0;
      vertical-align: top;
    }

    input[type='radio']:hover + label::before,
    input[type='radio']:focus + label::before {
      border-color: var(--primaryColor);
    }

    input[type='radio'] + label {
      pointer-events: all;
      position: relative;
      padding-left: 40px;
      padding-top: 0;
      cursor: pointer;
      width: 100%;
      margin: 0 10px 10px 0;
      display: inline-block;
      color: var(--generalTextColor);
      font-weight: normal;
      text-decoration: inherit;
      text-transform: none;
      font-size: var(--generalTextFontSize);
      font-family: OpenSans, sans-serif;
      line-height: 28px;
      min-height: 30px;
    }

    input[type='radio']:checked + label::before {
      background: #fff;
      border-width: 9px;
      border-color: var(--primaryColor);
    }

    .field-radiogroup > div {
      display: flex;
      flex-flow: row wrap;
    }
    button.Light,
    a,
    a:link,
    a:visited {
      color: var(--linkColor);
      cursor: pointer;
      text-decoration: none;
      outline:none;
      min-width: 0;
      border: none;
      padding: 0;
      display:content
    }
    button.pzhc:focus,
    button.pzhc:active,
    a:active,
    a:focus {
      cursor: pointer;
      color: var(--primaryActionColorFocus);
      border-color: var(--primaryActionColorFocus);
      text-decoration: none;
      outline:-webkit-focus-ring-color auto 1px;
    }

    button.pzhc:hover {
      cursor: pointer;
    }

    a:hover {
      cursor: pointer;
      color: var(--primaryActionColorFocus);
      text-decoration: underline;
    }

    button.Strong {
      color: #FFF;
      background-color: var(--primaryActionColor);
    }

    button.Strong:hover,
    button.Strong:focus,
    button.Strong:active {
      color: #FFF;
      background-color: var(--primaryActionColorFocus);
    }

    button.Simple:hover,
    button.Simple:focus,
    button.Simple:active {
      color: var(--linkColorFocus);
      background:none;
    }

    select:hover,
    select:focus,
    select:active {
      border: 1px solid var(--primaryColor);
    }
    select {
      background-size: 16px;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }

    .combobox {
      background-size: 16px;
    }

    button.Simple {
      background: none;
      color: rgb(0, 0, 0);
      min-width:0;
      border:none;
      display:flex;
      align-items: center;
    }

    button.Icon {
      background: none;
      min-width: 0;
      display: inline-block;
      padding: 0;
      height: auto;
      width: -moz-fit-content;
      width: fit-content;
      border:none;
    }

    button.action-menu,
    select,
    .combobox {
      background: #fff
        url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0OC4wNiAyOC4wNCcgIHdpZHRoPScxOCcgaGVpZ2h0PSc5Jz48cGF0aCBmaWxsPSIjMTAxMzJFIiBkPSdNNDcuNDEuNTVhMS45MSAxLjkxIDAgMCAwLTIuNyAwbC0yMC43MSAyMi42MS0yMC43NS0yMi42LS4xOC0uMThhMS45MSAxLjkxIDAgMSAwLTIuNTEgMi44OGwyMS44NyAyMy44NGExLjY5IDEuNjkgMCAwIDAgLjEzLjMxIDIuMTUgMi4xNSAwIDAgMCAyLjg1IDAgMS43NSAxLjc1IDAgMCAwIC4xMy0uMzJsMjEuODctMjMuODRhMS45MSAxLjkxIDAgMCAwIDAtMi43eicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLjEgLjA5KScvPjwvc3ZnPg==')
        no-repeat calc(100% - 8px) 60%;
    }

    select,
    button.action-menu {
      padding: 0 28px 0 8px;
      border: 1px solid #000;
    }
    button.action-menu:hover,
    button.action-menu:active,
    button.action-menu:focus {
      background-color:rgba(0,0,0,0.1);
      color:#000;
    }

    input[type='checkbox'] {
      position: absolute;
      opacity: 0;
    }

    input[type='checkbox']:checked + label:before {
      background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMjIgMjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIyIDI2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+Cjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjEuMSw3LjQgMjAuNiw2LjggMjAuMiw2LjUgNy43LDE5IDEuNSwxMi45IDAuMywxNC4yIDcuNywyMS40IDIxLjUsNy44ICIvPgo8L3N2Zz4K')
        no-repeat 50% 50%;
      background-color: var(--primaryColor);
      background-size: 16px;
      border-color: var(--primaryColor);
    }

    input[type='checkbox']:focus + label:before,
    input[type='checkbox']:hover + label:before {
      border-color: var(--primaryColor);
    }

    input[type='checkbox'] + label:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 28px;
      min-height: 30px;
      transition: 0.2s ease all;
      border: 1px solid;
    }

    input[type='checkbox'] + label {
      pointer-events: all;
      position: relative;
      padding-left: 40px;
      padding-top: 4px;
      cursor: pointer;
      margin: 0 var(--spacing1x) 0 0;
      display: block;
      color: var(--generalTextColor);
    }

    button {
      min-width: 130px;
      margin: 0;
      height: var(--controlHeight);
      padding: 0 var(--spacing2x);
      font-size: var(--generalTextFontSize);
      cursor: pointer;
      color: var(--primaryColor);
      border: 1px solid var(--primaryColor);
      border-radius: 5px;
      width: auto;
      background:transparent;
    }

    button:active,
    button:focus,
    button:hover {
      color: var(--primaryColorFocus);
    }

    button.primary {
      background-color: var(--primaryColor);
      color: #fff;
      border-color: transparent;
    }
    button.primary:active,
    button.primary:focus,
    button.primary:hover {
      background-color: var(--primaryColorFocus);
    }

    .right-aligned {
      text-align: right;
      justify-content: flex-end;
    }
    .flex.margin-l-auto {
      margin-left: auto;
    }
    .margin-t-2x {
      margin-top: var(--spacing2x);
    }
    .flex {
      display: flex;
    }
    .flex-col {
      flex-flow: column;
    }
    .flex-all {
      flex:1;
      margin-right: 8px;
    }
    .flex.layout-content-inline_grid_double > div {
      width: calc(50% - var(--spacing1x));
      margin-bottom: var(--spacing1x);
    }
    .flex.layout-content-inline_grid_double > div:nth-child(2n) {
      margin-left: var(--spacing1x);
    }
    .flex.layout-content-inline_grid_double > div:nth-child(2n + 1) {
      margin-right: var(--spacing1x);
    }
    .flex.layout-content-default,
    .flex.layout-content-stacked,
    .flex.layout-content-stacked_with_labels_left {
      flex-flow: column nowrap;
      width: 100%;
    }
    .flex.layout-content-inline_grid_double {
      flex-flow: row wrap;
    }
    .flex.layout-content-inline_grid_30_70 > div:nth-child(2n+1) {
      width:calc(30% - var(--spacing1x));
      margin-right: var(--spacing1x);
      margin-bottom: var(--spacing1x);
    }
    .flex.layout-content-inline_grid_30_70 > div:nth-child(2n) {
      width:calc(70% - var(--spacing1x));
      margin-left: var(--spacing1x);
      margin-bottom: var(--spacing1x);
    }
    .flex.layout-content-inline_grid_70_30 > div:nth-child(2n+1) {
      width:calc(70% - var(--spacing1x));
      margin-right: var(--spacing1x);
      margin-bottom: var(--spacing1x);
    }
    .flex.layout-content-inline_grid_70_30 > div:nth-child(2n) {
      width:calc(30% - var(--spacing1x));
      margin-left: var(--spacing1x);
      margin-bottom: var(--spacing1x);
    }
    .flex.layout-content-default > div {
      min-height: 40px;
      margin-bottom: var(--spacing2x);
    }
    .flex.layout-content-stacked > div {
      display: flex;
      min-height: 35px;
      margin-bottom: var(--spacing2x);
    }
    .layout-content-stacked_with_labels_left  > .field-item {
      flex-flow: row;
      margin-bottom: var(--spacing1x);
    }
    .layout-content-stacked_with_labels_left  > .field-item .field-caption {
      margin-right: var(--spacing1x);
      margin-bottom: 0;
      width: 200px;
    }
    .flex.layout-content-inline_middle {
      align-items: center;
    }
    .flex.main-header {
      min-height: 40px;
      margin-bottom: 8px;
    }
    .flex.main-header > h2 {
      margin-bottom:0;
    }
    .flex.main-header > h2 > span {
      white-space: nowrap;
    }
    .flex.layout-content-inline > *,
    .flex.layout-content-inline_middle > * {
      margin-right: var(--spacing1x);
    }
    .flex.layout-content-inline_middle > *:last-child {
      margin-right: 0;
    }
    .layout-content-default-form {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      row-gap: 8px;
      column-gap: 16px;
      margin-bottom: 16px;
    }
    .layout-content-default-form-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .layout-content-default-form-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .action-button-area {
      display: flex;
      flex-flow: row;
      padding-top: var(--spacing2x);
      border-top: 1px solid var(--generalBorderColor);
    }
    .action-button-area > button {
      margin-right: var(--spacing1x);
    }
    .action-button-area > button:last-child {
      margin: 0 0 0 auto;
    }
    .flex.field-item.field-table {
      overflow-x: auto;
      flex-flow: column nowrap;
    }
    table {
      width:100%;
      border-collapse: collapse;
    }
    th {
      text-align:left;
      background: var(--TableHeaderBgColor);
      height: 40px;
      padding: 0 var(--spacing1x);
      border: 1px solid var(--TableBorderColor);
    }
    td {
      height: 50px;
      padding: 0 var(--spacing1x);
      border: 1px solid var(--TableBorderColor);
    }
    td > input {
      width: -webkit-fill-available;
      inline-size: -moz-available;
    }
    .button-menu {
      position: relative;
      display: inline-block;
    }
    .button-menu > ul {
      position: absolute;
      top: 100%;
      background: #fff;
      display: block;
      margin: 0;
      list-style: none;
      padding: 0;
      border: 1px solid rgba(0, 0, 0, 0.2);
      box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
      z-index:2;
      right:0;
    }
    .button-menu > ul > li {
      margin: 0;
      white-space: nowrap;
      display: block;
      padding: 0.4em 1em;
      text-decoration: none;
      color: #333333;
      margin: 0;
    }
    .button-menu > ul > li:focus,
    .button-menu > ul > li:hover {
      background: #bbbbbb;
      outline:none;
    }
    .icon-required:after {
      vertical-align: middle;
      content: '*';
      font-size: 13px;
      font-weight: 700;
      text-align: left;
      color: #d91c29;
      padding-left: 3px;
    }
    .content-items-maxwidth > .content-item {
      max-width: 80ch;
    }
    .field-text > span:empty::after {
      content: '\\2013\\2013';
      color: #808080;
    }
    .validation:not(:empty),
    .error {
      padding: 14px;
      background: #FFD9DB;
      color: #000;
      font-size: 16px;
      border-radius: 8px;
      display: flex;
      margin-bottom: 14px;
      align-items: center;
      word-break: break-word;
    }

    .error button {
      margin-left: auto;
      background: transparent;
      color: #000;
      min-width:auto;
    }

    .error-field {
      outline: red 1px solid;
    }

    .field-checkbox {
      flex-flow: row nowrap;
      margin-top: 23px;
      align-items: center;
    }

    .field-currencyinput > div {
      position: relative;
      display: flex;
      flex-flow: row nowrap;
    }

    .field-currencyinput > div > input {
      padding-inline-start: 2ch;
      width: 100%;
    }

    .currency-symbol {
      position: absolute;
      left: 7px;
      top: 25%;
    }

    .badge_text {
      background-color: #088488;
      color: #FFF;
      font-weight: 700;
      text-transform: uppercase;
      padding: 0px 4px;
      text-align: center;
      margin-top: 1px;
      font-size: 10px;
      line-height: 16px;
      letter-spacing: 0.05em;
    }

    #case-data,
    #case-data > div:first-child {
      flex: 1;
    }

    #case-data {
      height: 100%;
      display: flex;
      flex-flow: column nowrap;
    }

    .success {
      background-color: #DAF2E3;
      color:#000;
      text-align: center;
      padding: var(--spacing1x) var(--spacing2x);
      margin-bottom:var(--spacing2x);
      margin-top: var(--spacing1x);
    }

    .mashup-modal {
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: rgba(6,6,6,0.3);
      z-index: 2;
      transition: opacity .400s ease-in-out;
    }
    .mashup-modal > div {
      max-height: 90vh;
      min-height: 300px;
      max-width: 800px;
      width: 80vw;
      margin: 5vh auto;
      background: #FFF;
      border: 1px solid rgba(0,0,0,.2);
      border-radius: 10px;
      box-shadow: 4px 4px 5px rgba(0,0,0,.3);
      display: flex;
      flex-flow: column nowrap;
      padding-bottom: 16px;
    }
    .mashup-modal > div > .main-header {
      padding: 0 16px;
      border-bottom: 1px solid rgba(0,0,0,.2);
    }
    .mashup-modal .validation {
      margin: 0 16px;
    }
    #modalcontent {
      margin: 16px 16px 0;
      display:flex;
      flex-flow:column;
      flex:1;
      overflow-y: hidden;
    }
    #modalcontent > .flex {
      flex:1;
      overflow-y: auto;
    }
    .file-upload {
      background: rgba(0,116,212,0.05);
      border: 1px dashed #0076D1;
      padding: 16px;
      display: flex;
      align-items: center;
    }
    .drop-file-hover {
      background: rgba(0,116,212,0.15);
    }
    .file-upload input {
      display:none;
    }
    .row-item {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      margin-top: 8px;
      width:100%;
    }
    .upload-content {
      display: flex;
      flex-flow: column;
      align-items: flex-start;
      flex-grow: 1;
      overflow-y: auto;
    }
    .list-items .empty {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-self: center;
      justify-content: center;
    }
    .list-item-title {
      display: flex;
      flex-flow: column nowrap;
      flex: 1;
    }
    .list-item-meta {
      font-size:14px;
    }
    .list-item-meta > span:after {
      content: '|';
      margin:0 3px;
    }
    .list-item-meta > span:last-child:after {
      content: '';
    }
    .doc-icon {
      position: relative;
      margin-right: 8px;
    }
    .doc-icon > svg {
      width: 30px;
      height: 30px;
    }
    .doc-icon > span {
      position: absolute;
      left: 1px;
      right: 1px;
      bottom: 8px;
      font-size: 7px;
      text-transform: uppercase;
      text-align: center;
    }
    .count-badge {
      min-width: 24px;
      line-height: 24px;
      border-radius: 12px;
      background-color: #e9eef3;
      color: rgba(0,0,0,.6);
      font-weight: 600;
      font-size: 12px;
      margin-top: -9px;
      margin-left: -3px;
    }

    .loading {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      height:100%;
    }

    .loading > .dot {
      width: 1rem;
      height: 1rem;
      margin: 0 0.5rem;
      background: #0076D1;
      border-radius: 50%;
      animation: Loading-ellipsis 1s infinite cubic-bezier(0.4, 0.6, 0.1, 1);
    }

    .loading > .dot:nth-child(2) {
      animation-delay: 0.1667s;
    }

    .loading > .dot:nth-child(3) {
      animation-delay: 0.3334s;
    }

    @keyframes Loading-ellipsis {
      0% {
          transform: scale(0);
          opacity: 0;
      }
      50% {
          transform: scale(1);
          opacity: 1;
      }
      100% {
          transform: scale(0);
          opacity: 0;
      }
    }

    .rich-text-main {
      display: flex;
      flex-flow: column nowrap;
    }
    .rich-text-main h1,
    .rich-text-main h2,
    .rich-text-main h3 {
      color: var(--generalTextColor);
    }
    .rich-text-main .editor-actions {
      overscroll-behavior: contain;
      overflow-y: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .rich-text-main .editor-actions::-webkit-scrollbar {
      display: none;
    }

    .rich-text-main .editor {
      border: 1px solid #ccc;
      overflow: auto;
      height: 216px;
      min-height: 216px;
    }
    .rich-text-main .toolbar {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
    }
    .rich-text-main [contenteditable] {
      outline: 0px solid transparent;
      min-height: 200px;
      height: 200px;
      font-size: 14px;
      padding: 8px;
    }
    .rich-text-main .toolbar > button,
    .rich-text-main .toolbar > select {
      margin-right: 2px;
      height: 30px;
      font-size: 11px;
    }
    .rich-text-main .toolbar button {
      color: rgb(0, 0, 0);
      cursor: pointer;
      border: 1px solid rgb(204, 204, 204);
      border-radius: 4px;
      padding: 2px;
      min-width: 26px;
      height: 26px;
      background: #FFF;
      min-width:0;
    }
    .rich-text-main .toolbar .active {
      background: #ccc;
    }
    .rich-text-main blockquote {
      border-left: 2px solid #ddd;
      margin-left: 0;
      margin-right: 0;
      padding-left: 10px;
      color: #aaa;
      font-style: italic;
    }
    .rich-text-main img {
      max-width: 100%;
    }
    .sr-only:not(:focus):not(:active) {
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    @media only screen and (max-width: 640px) {
      .flex.layout-content-inline_grid_70_30,
      .flex.layout-content-inline_grid_30_70,
      .flex.layout-content-inline_grid_double {
        flex-flow: column nowrap;
      }
      .flex.layout-content-inline_grid_70_30 > div:nth-child(2n+1),
      .flex.layout-content-inline_grid_70_30 > div:nth-child(2n),
      .flex.layout-content-inline_grid_30_70 > div:nth-child(2n+1),
      .flex.layout-content-inline_grid_30_70 > div:nth-child(2n),
      .flex.layout-content-inline_grid_double > div:nth-child(2n),
      .flex.layout-content-inline_grid_double > div:nth-child(2n+1) {
        width:100%;
        margin-right: 0;
        margin-left: 0;
      }
      .layout-content-default-form-2,
      .layout-content-default-form-3 {
        display:flex;
        flex-flow: column nowrap;
      }
      button {
        min-width: auto;
        padding: 0 var(--spacing1x);
      }
      .flex.main-header {
        flex-flow: column;
        align-items: flex-start;
      }
    }
  </style>
`;customElements.define("pega-mashup",class extends es{createRenderRoot(){return this.attachShadow({mode:"open"})}getRenderRoot(){return this.shadowRoot}render(){return E`
      ${as()} ${this.displayContent()}
    `}});customElements.define("pega-mashup-light",class extends es{createRenderRoot(){return this}getRenderRoot(){return this}render(){return E`
      ${this.displayContent()}
    `}});const is=()=>`${window.location.href.substring(0,window.location.href.lastIndexOf("/"))}/auth.html`,ss=(t,e)=>{const{urlparam:a,verifier:i}=(()=>{const t=`${Pa.lib.WordArray.random(16)}`;return{urlparam:`response_type=code&scope=openid&code_challenge=${Pa.SHA256(t)}&code_challenge_method=S256&response_mode=query&authentication_service=pega`,verifier:t}})(),s=`${t}/PRRestService/oauth2/v1/authorize?client_id=${e}&redirect_uri=${encodeURIComponent(is())}&${a}&state=${i}`,n=E`<Button class="pzhc pzbutton" onclick="window.location='${s}'; return false;">${i18n.t("Pega with full page redirect")}</Button>`,o=E`<Button class="pzhc pzbutton" onclick="n=window.open('${s}', 'foo', 'width=600,height=600');n.focus(); return false;">
  ${i18n.t("Pega with popup")}</Button>`;return E`<div class='flex flex-col'><h2>${i18n.t("Log in to the application with one of the following:")}</h2>
  <div class='flex layout-content-inline_middle'>${o}${n}</div></div>`};class ns extends li{resetError=t=>{this.errorMsg="",this.validationMsg="",this.actionAreaCancel(t)};reloadWorkList=t=>{this.cases=[],this.requestUpdate(),this.actionAreaCancel(t)};actionAreaCancel=t=>{t&&t.preventDefault(),this.bShowConfirm=!1,this.bShowNew=!1,this.caseID="",this.data={},this.content={},this.pageInstructions=[],this.casedata={},this.attachmentcategories=[],this.casepyStatusWork="",this.assignmentID="",this.actionID="",this.errorMsg="",this.numAttachments=0,this.validationMsg="",this.name="","workList"===this.action&&this.fetchData("portal"),this.sendExternalEvent({type:"cancel"})};actionAreaSave=t=>{t&&t.preventDefault(),null===t.target.getAttribute("data-submit")&&(t.target.textContent="Saving...",t.target.disabled=!0);const e=this.getRenderRoot().querySelector("#case-data");e&&(ai(e,this.content,this.pageInstructions,this.data.data.caseInfo.content),""!==this.assignmentID?this.sendData("savecase",{id:this.caseID,actionid:"",target:t.target}):this.sendData("savecase",{id:this.caseID,actionid:this.actionID,target:t.target}))};actionRefresh=()=>{const t=this.getRenderRoot().querySelector("#case-data");t&&(this.validationMsg="",ai(t,this.content,this.pageInstructions,this.data.data.caseInfo.content),this.fetchData("caseaction",{id:this.caseID,actionid:this.actionID}))};displayActions=()=>this.data.actions?this.genActionsList(this.name,this.data):this.casedata.actions?this.genActionsList(this.name,this.casedata):null;displayAttachments=t=>{this.fetchData("attachmentcategories",{id:this.caseID}),this.fetchData("attachments",{id:this.caseID,target:t})};submitForm=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");return ai(a,this.content,this.pageInstructions,this.data.data.caseInfo.content),this.validateForm(a)?"create"!==e?""!==this.data.ID?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID}):this.sendData("submitcaseaction",{id:this.data.caseID,actionid:this.actionID}):this.sendData("newwork",{id:this.casetype}):this.reportFormValidity(a),t.preventDefault(),!1};createCase=t=>{if(this.name="New Case",this.bShowNew=!0,t){let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&(this.casetype=e.getAttribute("data-value"),this.name=`New ${e.textContent} `)}this.content=this.initialContent,this.pageInstructions=[],this.caseID="",this.data={},this.casedata={},this.casetypes[this.casetype]?this.sendData("newwork",{id:this.casetype}):(this.errorMsg=`Case '${this.casetype}' is not defined`,console.error(`Case '${this.casetype}' is not defined`)),this.requestUpdate()};runAction=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&null!==e.getAttribute("data-value")&&(this.actionID=e.getAttribute("data-value"),this.name=e.innerText,this.data.ID="",this.actionRefresh());const a=this.getRenderRoot().querySelector("#case-data");null!=a&&M(this.genLoadingIndicator(),a)};openCase=t=>{t.preventDefault(),this.caseID=t.target.getAttribute("data-id"),this.name="",this.data={},this.casedata={},0===this.caseID.indexOf("ASSIGN-WORKLIST")?(this.sendExternalEvent({type:"openassignment",id:this.caseID}),this.assignmentID=this.caseID,this.caseID=""):(this.sendExternalEvent({type:"opencase",id:this.caseID}),this.assignmentID="");const e=this.getRenderRoot().querySelector("#case-data");null!=e&&M(this.genLoadingIndicator(),e),this.requestUpdate()};getData=(t,e)=>{this.dataPages[t]?M(this.showDataList(this.dataPages[t]),e.nextElementSibling):this.fetchData("data",{id:t,element:e})};applyAction=t=>{const e=this.getRenderRoot().querySelector("#case-data");let a=t;if(e){if(a){"path"===a.tagName&&(a=a.parentNode),"svg"===a.tagName&&(a=a.parentNode);const t=a.getAttribute("data-action-click"),e=a.getAttribute("data-ref");if(null!==e&&null!=t){if("addRow"===t){const t=Xa(this.data.data.caseInfo.content,e,a.getAttribute("data-newrow"));return void(null!==t&&this.pageInstructions.push(t))}if("deleteRow"===t){const t=Ga(this.data.data.caseInfo.content,e);return void(null!==t&&this.pageInstructions.push(t))}}}ai(e,this.content,this.pageInstructions,this.data.data.caseInfo.content)}};refreshAssignment=(t,e)=>{this.applyAction(t),!0===this.bShowNew?this.sendData("refreshnew",{id:this.casetype,refreshFor:e}):this.sendData("refreshassignment",{id:this.assignmentID,actionid:this.actionID,refreshFor:e})};genErrorMessage(t){this.clearLoadingIndicator(),t.message&&-1!==t.message.indexOf("JSON.parse")?console.error("Error:",t):t.message&&-1!==t.message.indexOf("Unexpected token")?(this.errorMsg="Error 404: Resource not found",this.requestUpdate(),console.error(this.errorMsg)):(t.status?""!==t.statusText?this.errorMsg=`Error ${t.status}: ${t.statusText}`:401===t.status?this.errorMsg="Error 401: Authentication error":423===t.status?this.errorMsg="Error 423: Resource is locked by another user":500===t.status?this.errorMsg="Error 500: Internal server error":this.errorMsg=`Error ${t.status}`:t.name&&t.message?this.errorMsg=`Error ${t.name}: ${t.message}`:this.errorMsg="string"==typeof t?t:"Critical error",this.requestUpdate(),console.error("Error:",t))}fetchData(t,e){const{id:a,actionid:i,target:s}=e||{};let n="";""!==this.authentication&&"basic"!==this.authentication||(n=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(n=`Bearer ${this.token}`);const o={method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:n},mode:"cors"};let r=`${this.url}/api/application/v2/`;switch(t){case"portal":r+=`portals/${this.portalName}`;break;case"assignment":r+=`assignments/${a}`;break;case"view":r+=`cases/${a}/views/${i}`;break;case"caseaction":r+=`cases/${a}/actions/${i}`;break;case"attachment":r+=`attachments/${a}`;break;case"attachments":r+=`cases/${a}/attachments`;break;case"attachmentcategories":r+=`cases/${a}/attachment_categories`}fetch(r,o).then((a=>{if("assignment"===t)this.etag=a.headers.get("etag");else if("attachment"===t)return a.text();return a.ok||404===a.status?a.json():401===a.status?(this.token="",this.sendData("authenticate",{...e,type:t,cmd:"fetchData"}),a.json()):Promise.reject(a)})).then((e=>{try{if(e.errors&&e.errors.length>0)return;if(e.pyLocalizedValue)return this.errorMsg=`Error: ${e.pyLocalizedValue}`,void this.requestUpdate();if(e.errorDetails&&e.errorDetails.length>0)return this.errorMsg=`Error ${e.errorDetails[0].message}: ${e.localizedValue}`,this.clearLoadingIndicator(),this.requestUpdate(),void console.error("Error:",e);const n=this.getRenderRoot().querySelector("#case-data");switch(t){case"portal":if(this.content={},this.pageInstructions=[],!this.casetypes){this.casetypes={};let t=[];e.data&&e.data.D_pzCasesAvailableToCreateForPortal&&e.data.D_pzCasesAvailableToCreateForPortal.pxResults?t=e.data.D_pzCasesAvailableToCreateForPortal.pxResults:e.data&&e.data.pyPortal&&e.data.pyPortal.pyCaseTypesAvailableToCreate&&(t=e.data.pyPortal.pyCaseTypesAvailableToCreate);for(const e of t)"workList"===this.action&&""!==this.casetype&&this.casetype!==e.pyClassName||(this.casetypes[e.pyClassName]={canCreate:!0,name:e.pyLabel})}this.cases=[];let t=[];if(e.data&&e.data.D_pyUserWorkList&&e.data.D_pyUserWorkList.pxResults?t=e.data.D_pyUserWorkList.pxResults:e.uiResources.context_data.pyPortal.summary_of_lists__.D_pyMyWorkList.pxResults&&(t=e.data[e.uiResources.context_data.pyPortal.summary_of_lists__.D_pyMyWorkList.pxResults.replace(".pxResults","")].pxResults),t.length>0)for(const e of t)this.cases.push({name:e.pyLabel,caseID:e.pxRefObjectKey,urgency:e.pxUrgencyAssign,ID:e.pzInsKey,label:e.pxTaskLabel});this.requestUpdate();break;case"assignment":this.content={},this.pageInstructions=[],this.isDeclarativeTarget=!1,this.refreshOnChange=!1,this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel,this.caseID=this.casedata.ID,this.data.caseID=this.caseID,this.data.ID=a;for(const t of this.casedata.assignments)if(a===t.ID&&t.actions&&t.actions.length>0){this.actionID=t.actions[0].ID;break}this.casepyStatusWork=this.casedata.status,this.data.actions=this.casedata.availableActions,this.name=this.casedata.stageLabel;const o=this.getRenderRoot().querySelector("#case-data");o&&ai(o,this.casedata.content),this.content={},M(this.renderMainLayout(e.uiResources.resources.views[this.casedata.content.pyViewName],"Obj"),n),this.requestUpdate(),n.focus();break;case"view":if(!n){console.error("Error: case data are not present when retrieving the page");break}this.content={},this.pageInstructions=[],this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel?this.casedata.content.pyLabel:this.casedata.name,this.casedata.actions=this.casedata.availableActions,this.casedata.content.pyID=this.casedata.ID,this.data.ID=this.casedata.ID,this.casepyStatusWork=this.casedata.status,this.name=this.casedata.stageLabel,this.content={},"true"===this.bShowAttachments&&this.fetchData("attachments",{id:this.caseID}),this.name=e.data.caseInfo.name,M(this.renderReviewLayout(e.uiResources.resources.views[i],"Obj"),n),this.requestUpdate(),n.focus();break;case"caseaction":this.content={},this.pageInstructions=[],this.isDeclarativeTarget=!1,this.refreshOnChange=!1,this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel,this.caseID=this.casedata.ID,this.data.caseID=this.caseID,this.data.ID="",this.casepyStatusWork=this.casedata.status,this.data.actions=this.casedata.availableActions,this.name=this.casedata.stageLabel,this.content={},M(this.renderMainLayout(e.uiResources.resources.views[e.uiResources.root.config.name],"Obj"),n),this.requestUpdate(),n.focus();break;case"attachments":let r=e.attachments;r||(r=[]),this.numAttachments=r.length,s&&M(ri(s,r,this.caseID,this),s),this.requestUpdate();break;case"attachmentcategories":this.attachmentcategories=e.attachment_categories;break;case"attachment":s(e)}}catch(t){this.errorMsg=`Error: ${t}`,this.requestUpdate(),console.error("Error:",t)}})).catch((t=>{this.genErrorMessage(t)}))}sendData(t,e){const{id:a,actionid:i,target:s}=e;let n="";""!==this.authentication&&"basic"!==this.authentication||(n=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(n=`Bearer ${this.token}`);const o={"Content-Type":"application/json;charset=UTF-8",Authorization:n},r={method:"POST",headers:o,mode:"cors"},{pageInstructions:c,pageupdate:l}=si(this.content,this.pageInstructions);let d=`${this.url}/api/application/v2/`;switch(this.validationMsg="",t){case"authenticate":"oauth2password"===this.authentication?r.body=`grant_type=password&client_id=${this.clientid}&client_secret=${this.clientsecret}&username=${this.username}&password=${this.password}`:"oauth2clientcredentials"===this.authentication?r.body=`grant_type=client_credentials&client_id=${this.clientid}&client_secret=${this.clientsecret}`:"authorizationcode"===this.authentication&&(r.body=`grant_type=authorization_code&client_id=${this.clientid}&code_verifier=${window.history.state.verifier}&code=${window.history.state.code}&redirect_uri=${encodeURIComponent(is())}`),r.headers["Content-Type"]="application/x-www-form-urlencoded",d=`${this.url}/PRRestService/oauth2/v1/token`;break;case"newwork":d+="cases?viewType=form",r.body=JSON.stringify({caseTypeID:a,processID:"pyStartCase",content:l,pageInstructions:c});break;case"submitassignment":r.body=JSON.stringify({content:l,pageInstructions:c}),r.method="PATCH",r.headers["If-Match"]=this.etag,d+=`assignments/${a}/actions/${i}?viewType=form`;break;case"submitcaseaction":r.body=JSON.stringify({content:l,pageInstructions:c}),r.method="PATCH",r.headers["If-Match"]=this.etag,d+=`cases/${a}/actions/${i}?viewType=form`;break;case"refreshassignment":d+=`assignments/${a}/actions/${i}/refresh`,r.headers["If-Match"]=this.etag,r.method="PATCH",r.body=JSON.stringify({content:l,pageInstructions:c,contextData:!0});break;case"dataviews":d+=`data_views/${a}`,r.body=JSON.stringify(e.content);break;case"uploadattachment":d+="attachments/upload",delete o["Content-Type"];const t=new FormData;t.append("File",i,i.name),r.body=t;break;case"attachments":d+=`cases/${a}/attachments`,r.body=JSON.stringify({attachments:i});break;case"deleteattachment":d+=`attachments/${a}`,r.method="DELETE"}fetch(d,r).then((a=>"deleteattachment"===t||"attachments"===t?a.text():("submitassignment"!==t&&"newwork"!==t||(this.etag=a.headers.get("etag")),200===a.status||201===a.status||a.status>=400&&a.status<500||500===a.status?(401===a.status&&"authenticate"!==t&&(this.token="",this.sendData("authenticate",{...e,type:t,cmd:"sendData"})),a.json()):a.ok?Promise.resolve("ok"):Promise.reject(a)))).then((a=>{if(a.errors&&a.errors.length>0)return this.errorMsg=`Error: ${a.errors[0].message.trim()}`,void this.requestUpdate();if(a.access_token)this.token=a.access_token,window.history.replaceState({token:this.token},"",window.location.href),e!=={}&&e.type&&e.cmd&&("sendData"===e.cmd?this.sendData(e.type,e):this.fetchData(e.type,e));else if(a.errorDetails&&a.errorDetails.length>0){if(a.errorDetails[0].localizedValue){const t=this.getRenderRoot().querySelector("#case-data");ii(t,a.errorDetails,this),this.validationMsg=this.genPageValidationErrors(a,t)}else this.errorMsg=`Error ${a.errorDetails[0].message}: ${a.localizedValue}`;this.clearLoadingIndicator(),s&&(s.disabled=!1,s.textContent="Save"),"submitassignment"===t&&this.fetchData("assignment",{id:this.assignmentID})}else{const e=this.getRenderRoot().querySelector("#case-data");if("newwork"===t&&a.data.caseInfo.ID&&""!==a.data.caseInfo.ID&&this.sendExternalEvent({type:"newwork",id:a.data.caseInfo.ID}),"refreshassignment"===t)return void(e&&a.data.caseInfo&&a.data.caseInfo.content&&(this.data.data.caseInfo.content=a.data.caseInfo.content,this.casedata.content=a.data.caseInfo.content,M(this.renderMainLayout(this.data.uiResources.resources.views[this.actionID],"Obj"),e)));if("deleteattachment"===t)s&&!s.classList.contains("attach-files")&&this.fetchData("attachments",{id:this.caseID,target:s});else if("attachments"===t)this.fetchData("attachments",{id:this.caseID,target:s});else if("uploadattachment"===t){let t=i.name.lastIndexOf(".");-1===t&&(t=i.name.length);const e=i.name.substring(t+1),n=[{type:"File",category:i.category,fileType:e,name:i.displayName,ID:a.ID}];return void this.sendData("attachments",{id:this.caseID,actionid:n,target:s})}if(a.confirmationNote)this.bShowConfirm=!0,this.caseID=a.data.caseInfo.ID,this.fetchData("view",{id:this.caseID,actionid:"pyReview"});else if(a.uiResources){if(this.bShowNew=!1,this.content={},this.pageInstructions=[],this.assignmentID=a.nextAssignmentInfo.ID,this.data=a,this.casedata=a.data.caseInfo,this.data.name=this.casedata.content.pyLabel?this.casedata.content.pyLabel:this.casedata.name,this.caseID=this.casedata.content.pzInsKey,this.data.caseID=a.data.caseInfo.ID,this.data.ID=this.assignmentID,this.casedata.content.pyViewName=a.uiResources.root.config.name,this.actionID=this.casedata.content.pyViewName,this.casedata.assignments)for(const t of this.casedata.assignments)if("pzQuestionPageScr"===t.processID&&this.data.ID===t.ID&&t.actions&&t.actions.length>0){this.actionID=t.actions[0].ID;break}this.casepyStatusWork=a.data.caseInfo.status,this.data.actions=a.data.caseInfo.availableActions,this.name=a.data.caseInfo.stageLabel,e&&(M(this.genLoadingIndicator(),e),M(this.renderMainLayout(a.uiResources.resources.views[this.casedata.content.pyViewName],"Obj"),e),e.focus())}}this.requestUpdate()})).catch((t=>{this.genErrorMessage(t)}))}}const os=t=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20px" height="20px" fill="currentColor">${t}</svg>`;class rs extends X{static get properties(){return{content:{},root:{}}}createRenderRoot(){return this}constructor(t,e,a){super(),this.content=t,this.root="";const i=(new DOMParser).parseFromString(this.content,"text/html");document.execCommand("defaultParagraphSeparator",!1,"br");const s=document.createElement("div"),n=i.querySelector("body");s.setAttribute("contenteditable","true"),s.setAttribute("data-ref",e),s.setAttribute("id",a),s.innerHTML=n.innerHTML,this.root=s}render(){return E`<div class='rich-text-main'>
      <div class="editor-actions">
        <div class="toolbar">
          ${this.renderToolbar(((t,e)=>{document.execCommand(t,!1,e)}))}
        </div>
      </div>
      <div class="editor">${this.root}</div>
    </div>`}async firstUpdated(){document.addEventListener("selectionchange",(()=>{this.requestUpdate()}))}renderToolbar(t){const e=document.getSelection?document.getSelection():null,a=[];if(e&&"Range"===e.type){let t=e.baseNode;if(t)for(;null!=t;){const e=t&&t.tagName?t.tagName.toLowerCase().trim():void 0;e&&a.push(e),t=t.parentNode}}const i=[{icon:"Clear",title:"Remove all styling",command:"removeFormat"},{title:"Change format",command:"formatblock",values:[{name:"Normal Text",value:"--"},{name:"Heading 1",value:"h1"},{name:"Heading 2",value:"h2"},{name:"Heading 3",value:"h3"},{name:"Heading 4",value:"h4"},{name:"Heading 5",value:"h5"},{name:"Heading 6",value:"h6"},{name:"Paragraph",value:"p"},{name:"Pre-Formatted",value:"pre"}]},{title:"Change font size",command:"fontsize",values:[{name:"Font Size",value:"--"},{name:"Very Small",value:"1"},{name:"Small",value:"2"},{name:"Normal",value:"3"},{name:"Medium Large",value:"4"},{name:"Large",value:"5"},{name:"Very Large",value:"6"},{name:"Maximum",value:"7"}]},{icon:()=>os('<path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"></path>'),title:"Bold",command:"bold",active:a.includes("b")},{icon:()=>os('<path d="m9.586 14.633.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"></path>'),title:"Italic",command:"italic",active:a.includes("i")},{icon:()=>os('<path d="M3 18v-1.5h14V18zm2.2-8V3.6c0-.4.4-.6.8-.6.3 0 .7.2.7.6v6.2c0 2 1.3 2.8 3.2 2.8 1.9 0 3.4-.9 3.4-2.9V3.6c0-.3.4-.5.8-.5.3 0 .7.2.7.5V10c0 2.7-2.2 4-4.9 4-2.6 0-4.7-1.2-4.7-4z"></path>'),title:"Underline",command:"underline",active:a.includes("u")},{icon:()=>os('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"></path>'),title:"Align left",command:"justifyleft"},{icon:()=>os('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"></path>'),title:"Align middle",command:"justifycenter"},{icon:()=>os('<path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"></path>'),title:"Align right",command:"justifyright"},{icon:()=>os('<path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"></path>'),title:"Numbered list",command:"insertorderedlist",active:a.includes("ol")},{icon:()=>os('<path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"></path>'),title:"Bullet list",command:"insertunorderedlist",active:a.includes("ul")},{icon:()=>os('<path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"></path>'),command:"formatblock",title:"Format block quote",command_value:"blockquote"},{icon:()=>os('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zm1.618-9.55L.98 9.358a.4.4 0 0 0 .013.661l3.39 2.207A.4.4 0 0 0 5 11.892V7.275a.4.4 0 0 0-.632-.326z"></path>'),title:"decrease indent",command:"outdent"},{icon:()=>os('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zM1.632 6.95 5.02 9.358a.4.4 0 0 1-.013.661l-3.39 2.207A.4.4 0 0 1 1 11.892V7.275a.4.4 0 0 1 .632-.326z"></path>'),title:"Increase indent",command:"indent"},{icon:()=>os('<path d="m5.042 9.367 2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z"></path>'),title:"Undo",command:"undo"},{icon:()=>os('<path d="m14.958 9.367-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z"></path>'),title:"Redo",command:"redo"},{icon:()=>os('<path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"></path>'),title:"Add link",active:a.includes("a"),deactivate:"unlink",command:()=>{const e=prompt("Enter the URL","");e&&""!==e&&t("createlink",e)}},{icon:()=>os('<path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"></path>'),title:"Add image",active:a.includes("img"),command:()=>{const e=prompt("Enter the image URL","");e&&""!==e&&t("insertImage",e)}}];return E`
      ${i.map((e=>E`
          ${e.values?E` <select aria-label="${i18n.t(e.title)}" tabindex=-1
        @change=${a=>{a.preventDefault();const i=a.target.value;"--"===i?t("removeFormat",void 0):"string"==typeof e.command&&t(e.command,i)}}>
    ${e.values.map((t=>E` <option value=${t.value}>${t.name}</option>`))}
              </select>`:E` <button aria-label="${i18n.t(e.title)}" title="${i18n.t(e.title)}" tabindex=-1
                class="${e.active?"active":"inactive"}"
                @click=${a=>{a.preventDefault(),e.active&&e.deactivate?"string"==typeof e.deactivate?t(e.deactivate,e.command_value):e.deactivate():"string"==typeof e.command?t(e.command,e.command_value):e.command()}}>${"function"==typeof e.icon?document.createRange().createContextualFragment(`${e.icon()}`):e.icon}</button>`}
        `))}
    `}}customElements.define("rich-text-editor",rs);const cs=(t,e)=>{if(t.helperText&&""!==t.helperText)return`${e}-info`},ls=t=>{if(t.placeholder&&""!==t.placeholder)return t.displayplaceholder},ds=(t,e,a,i)=>void 0===e||""===e?E`
      ${i}
    `:E`
    <div class="flex content-item field-item ${a}" ?disabled="${t.disabledstate}">
      ${((t,e,a)=>{if(void 0===e)return null;const i=t.requiredstate?"icon-required":"";return"field-checkbox"===a?t.label&&""!==t.label?E`<legend class="field-caption">${t.displaylabel}</legend>`:null:E`
    ${""!==t.label?E`<label class="field-caption dataLabelForWrite ${i}"
    for="${pi(e)}">${t.displaylabel}
    </label>`:null}
  `})(t,e,a)}${i}${((t,e)=>t.helperText&&""!==t.helperText?E`<span id=${`${e}-info`} class="helper-text">${t.displayhelperText}</span>`:null)(t,e)}
    </div>
  `,hs=(t,e,a,i,s)=>{const n=((t,e,a,i,s)=>{if(!1===t.config.visibility)return null;let n=!1;if(t.config.displayvalue="",t.config.displaylabel=i18n.t(t.config.label),t.config.displayplaceholder=i18n.t(t.config.placeholder),t.config.displayhelperText=i18n.t(t.config.helperText),t.config.displaycaption=i18n.t(t.config.caption),t.config.value){let e=t.config.value.replace("@P .","").replace("@USER .","");if(t.config.reference=void 0===s||""===s?e:`${s}.${e}`,t.config.displayvalue=Za(i.casedata.content,t.config.reference),"string"==typeof t.config.datasource&&0===t.config.datasource.indexOf("@ASSOCIATED")){e=t.config.datasource.replace("@ASSOCIATED .",""),-1!==e.indexOf(".")&&(e=e.substring(e.lastIndexOf(".")+1));let a="";i.data.context_data?a=i.data.context_data.content:i.data.uiResources.context_data&&i.data.uiResources.context_data.caseInfo&&i.data.uiResources.context_data.caseInfo.content&&(a=i.data.uiResources.context_data.caseInfo.content);const n=""===s?a:Za(a,s);if(n&&(t.config.options=n.summary_of_associated_lists__[e]),void 0===t.config.options&&(a=i.data.uiResources.resources.fields[e],Array.isArray(a)&&1===a.length&&(a=a[0]),a&&a.datasource))if(a.datasource.records)t.config.options=a.datasource.records;else if(a.datasource.name&&i.data.data.shared[a.datasource.name]){const e=i.data.data.shared[a.datasource.name];if(Object.keys(e).length>0){const i=Object.keys(e)[0];if(e[i].pxResults){const s=a.datasource.propertyForValue.replace("@P .",""),n=a.datasource.propertyForDisplayText.replace("@P .","");t.config.options=[];for(const a in e[i].pxResults){const o=e[i].pxResults[a];t.config.options[a]={key:o[s],value:o[n]}}}}}}else if("object"==typeof t.config.datasource&&t.config.datasource.source&&0===t.config.datasource.source.indexOf("@DATASOURCE")){const e=t.config.datasource.source.replace("@DATASOURCE ","").replace(".pxResults","");if(i.data.data[e]&&i.data.data[e].pxResults)t.config.options=i.data.data[e].pxResults;else if(i.data.uiResources.context_data&&i.data.uiResources.context_data.caseInfo&&i.data.uiResources.context_data.caseInfo.content){const a=i.data.uiResources.context_data.caseInfo.content;if(a[s]&&a[s].summary_of_lists__[e]&&a[s].summary_of_lists__[e].pxResults){const n=a[s].summary_of_lists__[e].pxResults.replace(".pxResults","");if(i.data.data[n]&&i.data.data[n].pxResults){t.config.options=[];const e=t.config.datasource.fields.key.replace("@P .",""),a=t.config.datasource.fields.text.replace("@P .","");for(const s in i.data.data[n].pxResults){const o=i.data.data[n].pxResults[s];t.config.options[s]={key:o[e],value:o[a]}}}}}}if(t.config.options||(t.config.options=[]),t.config.displayvalue?"object"!=typeof t.config.displayvalue&&(t.config.displayvalue=`${t.config.displayvalue}`):t.config.displayvalue="",i.data.uiResources&&i.data.uiResources.resources&&i.data.uiResources.resources.fields&&i.data.uiResources.resources.fields[e]){let t=i.data.uiResources.resources.fields[e];Array.isArray(t)&&1===t.length&&(t=t[0]),(t.isDeclarativeTarget||t.isSpecial)&&(n=!0,i.isDeclarativeTarget=!0)}}"string"!=typeof t.config.visibility&&"string"!=typeof t.config.readOnly&&"string"!=typeof t.config.disabled&&"string"!=typeof t.config.required||(i.refreshOnChange=!0);const o=i.data.data.caseInfo.content;if("string"==typeof t.config.visibility&&"true"!==t.config.visibility){if(!ei(t.config.visibility,o,s))return null}else if(!1===t.config.visibility||"false"===t.config.visibility)return null;return t.config.readonlystate=!1,"string"==typeof t.config.readOnly&&"false"!==t.config.readOnly?t.config.readonlystate=ei(t.config.readOnly,o,s):(!0===t.config.readOnly||"true"===t.config.readOnly||n)&&(t.config.readonlystate=!0),t.config.requiredstate=!1,"string"==typeof t.config.required&&"false"!==t.config.required?t.config.requiredstate=ei(t.config.required,o,s):!0!==t.config.required&&"true"!==t.config.required||(t.config.requiredstate=!0),t.config.disabledstate=!1,"string"==typeof t.config.disabled&&"false"!==t.config.disabled?t.config.disabledstate=ei(t.config.disabled,o,s):!0!==t.config.disabled&&"true"!==t.config.disabled||(t.config.disabledstate=!0),t.config.disabledstate&&(t.config.requiredstate=!1,t.config.readonlystate=!1),"OK"})(t,0,0,i,s);if("OK"!==n)return n;if(!0===a)return ds(t.config,e,"field-text",us(t.config,t.type,e));switch(t.type){case"TextContent":return us(t.config,t.type,e);case"Decimal":case"TextInput":return ds(t.config,e,"field-textinput",ps(t.config,e));case"Phone":return ds(t.config,e,"field-phoneinput",gs(t.config,e));case"Email":return ds(t.config,e,"field-emailinput",bs(t.config,e));case"Integer":return ds(t.config,e,"field-numberinput",fs(t.config,e));case"Percentage":return ds(t.config,e,"field-percentage",ms(t.config,e));case"Currency":return ds(t.config,e,"field-currencyinput",ys(t.config,e));case"RadioButtons":return ds(t.config,e,"field-radiogroup",xs(t.config,e));case"TextArea":return ds(t.config,e,"field-textarea",vs(t.config,e));case"RichText":return ds(t.config,e,"field-richtext",$s(t.config,e));case"Checkbox":return ds(t.config,e,"field-checkbox",ws(t.config,e));case"Dropdown":return ds(t.config,e,"field-dropdown",_s(t.config,e));case"DateTime":return ds(t.config,e,"field-datetime",Cs(t.config,e));case"Date":return ds(t.config,e,"field-date",ks(t.config,e));case"Time":return ds(t.config,e,"field-time",Ds(t.config,e));case"AutoComplete":return ds(t.config,e,"field-autocomplete",As(t.config,e));case"SemanticLink":return ds(t.config,e,"field-semanticlink",Ss(t.config));case"Attachment":return ds(t.config,e,"field-attachment",Is(t.config,e,i));case"Location":return ds(t.config,e,"field-location",Es(t.config,e));default:return null}},us=(t,e,a)=>{let i=t.displayvalue;if(""!==i){if("Phone"===e)return E`<a data-ref="${t.reference}" id="${pi(a)}" href="${`tel:${i}`}">${i}</a>`;if("Date"===e){const e={year:"numeric",month:"short",day:"numeric"};i=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}else if("DateTime"===e){i=Fa(t.displayvalue);const e={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};i=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}else if("Time"===e){const e={hour:"numeric",minute:"numeric"};i=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}}if("TextContent"===e){if("Paragraph"===t.displayAs)return E`<p>${i18n.t(t.content)}</p>`;if("Heading 1"===t.displayAs)return E`<h1>${i18n.t(t.content)}</h1>`;if("Heading 2"===t.displayAs)return E`<h2>${i18n.t(t.content)}</h2>`;if("Heading 3"===t.displayAs)return E`<h3>${i18n.t(t.content)}</h3>`;if("Heading 4"===t.displayAs)return E`<h4>${i18n.t(t.content)}</h4>`}return E`
    <span class="dataValueRead" data-ref="${t.reference}" id="${pi(a)}">${ja(i)}</span>
  `},ps=(t,e)=>E`
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${pi(ls(t))}"
    type="text"
    aria-describedby="${pi(cs(t,e))}"
    id="${pi(e)}"
    value="${ja(t.displayvalue)}"
  />
`,gs=(t,e)=>{let a="";for(const e of t.options)0===t.displayvalue.indexOf(e.pyCallingCode)&&(a=e.pyCallingCode);return t.displayvalue=t.displayvalue.substring(a.length),E`
<div>
<select
  class="field-countrycode"
  ?readonly="${t.readonlystate}"
  ?disabled="${t.disabledstate}"
  aria-label="${i18n.t("Select country code")}">
  ${t.options.map((t=>E`<option ?selected=${t.pyCallingCode===a}
  value='${t.pyCallingCode}'>${t.pyCallingCode}</option>`))}
</select>
 <input
   data-ref="${t.reference}"
   ?required="${t.requiredstate}"
   ?readonly="${t.readonlystate}"
   ?disabled="${t.disabledstate}"
   placeholder="${pi(ls(t))}"
   type="tel"
   aria-describedby="${pi(cs(t,e))}"
   id="${pi(e)}"
   value="${ja(t.displayvalue)}"
 />
 </div>
`},fs=(t,e)=>E`
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${pi(ls(t))}"
    type="number"
    aria-describedby="${pi(cs(t,e))}"
    id="${pi(e)}"
    value="${ja(t.displayvalue)}"
  />
`,ms=(t,e)=>E`
 <input
   data-ref="${t.reference}"
   ?required="${t.requiredstate}"
   ?readonly="${t.readonlystate}"
   ?disabled="${t.disabledstate}"
   placeholder="${pi(ls(t))}"
   type="text"
   aria-describedby="${pi(cs(t,e))}"
   id="${pi(e)}"
   value="${ja(t.displayvalue)}"
 />
`,ys=(t,e)=>E`
  <div ?readonly="${t.readOnly}">
  <span class="currency-symbol">$</span>
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${pi(ls(t))}"
    type="number"
    aria-describedby="${pi(cs(t,e))}"
    id="${pi(e)}"
    value="${ja(t.displayvalue)}"
  />
  </div>
`,bs=(t,e)=>E`
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${pi(ls(t))}"
    type="email"
    aria-describedby="${pi(cs(t,e))}"
    id="${pi(e)}"
    value="${ja(t.displayvalue)}"
  />
`,vs=(t,e)=>E`
  <textarea
    rows="3"
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${pi(ls(t))}"
    type="email"
    aria-describedby="${pi(cs(t,e))}"
    id="${pi(e)}"
  >${ja(t.displayvalue)}</textarea>
`,$s=(t,e)=>new rs(ja(t.displayvalue),t.reference,e),ws=(t,e)=>{const a=t.requiredstate?"icon-required":"";return E`
  <input
  data-ref="${t.reference}"
  ?required="${t.requiredstate}"
  ?readonly="${t.readonlystate}"
  onclick="${pi(t.readonlystate?"return false;":void 0)}"
  ?disabled="${t.disabledstate}"
  aria-describedby="${pi(cs(t,e))}"
  id=${pi(e)}
  type="checkbox" ?checked=${"true"===t.displayvalue||!0===t.displayvalue}
  />
  <label class=${a} for=${pi(e)}>
  ${t.displaycaption}
    </label>
`},xs=(t,e)=>{let a=[{value:"true"},{value:"false"}];return t.options&&(a=t.options),E`
    ${a.map(((a,i)=>{const s=`rb-${e}-${i}`;return E`
        <div>
          <input
            data-ref="${t.reference}"
            name=${pi(e)}
            id=${s}
            type="radio"
            ?required="${t.requiredstate}"
            ?readonly="${t.readonlystate}"
            ?disabled="${t.disabledstate}"
            value="${a.key}"
            onclick="${pi(t.readonlystate?"return false;":void 0)}"
            ?checked="${a.key===t.displayvalue}"
          />
          <label for="${s}">${a.value}</label>
        </div>
      `}))}
  `},_s=(t,e)=>E`<select
  data-ref="${t.reference}"
  aria-describedby="${pi(cs(t,e))}"
  id=${pi(e)}
  ?required="${t.requiredstate}"
  ?readonly="${t.readonlystate}"
  ?disabled="${t.disabledstate}">
  placeholder="${pi(ls(t))}"
    <option value="" title="${i18n.t("Select...")}">${i18n.t("Select...")}</option>
    ${t.options.map((e=>E`<option ?selected=${e.key===t.displayvalue} value='${e.key}'>${e.value}</option>`))}
  </select>`,Cs=(t,e)=>{let a=t.displayvalue;if(""!==a){let e=Fa(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${e.getFullYear()}-${Ua(e.getMonth()+1)}-${Ua(e.getDate())}T${Ua(e.getHours())}:${Ua(e.getMinutes())}`):8===t.displayvalue.length?a=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(4,6)}-${t.displayvalue.substring(6,8)}T00:00`:24===t.displayvalue.length&&(a=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(5,7)}-${t.displayvalue.substring(8,10)}T${t.displayvalue.substring(11,13)}:${t.displayvalue.substring(14,16)}`)}return E`
    <input
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="datetime-local"
      aria-describedby="${pi(cs(t,e))}"
      id="${pi(e)}"
      value="${a}"
    />
  `},ks=(t,e)=>{let a=t.displayvalue;if(""!==a){let e=Fa(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${e.getFullYear()}-${Ua(e.getMonth()+1)}-${Ua(e.getDate())}`):8===t.displayvalue.length&&(a=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(4,6)}-${t.displayvalue.substring(6,8)}`)}return E`
    <input
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="date"
      aria-describedby="${pi(cs(t,e))}"
      id="${pi(e)}"
      value="${a}"
    />
  `},Ds=(t,e)=>{let a=t.displayvalue;if(""!==a){let e=Fa(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${Ua(e.getHours())}-${Ua(e.getMinutes())}-${Ua(e.getSeconds())}`):8===t.displayvalue.length&&(a=`${t.displayvalue.substring(9,10)}:${t.displayvalue.substring(10,11)}:${t.displayvalue.substring(11,12)}`)}return E`
    <input
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="time"
      aria-describedby="${pi(cs(t,e))}"
      id="${pi(e)}"
      value="${a}"
    />
  `},As=(t,e)=>t.options?E`
      <input
        data-ref="${t.reference}"
        list="${t.reference}"
        ?required="${t.requiredstate}"
        ?readonly="${t.readonlystate}"
        ?disabled="${t.disabledstate}"
        placeholder="${pi(ls(t))}"
        type="text"
        class="combobox loaded"
        aria-describedby="${pi(cs(t,e))}"
        id="${pi(e)}"
        value="${ja(t.displayvalue)}"
      />
      <datalist id="${t.reference}">
        ${t.options.map((t=>E`
            <option value="${t.key}">
              ${t.value}
            </option>
          `))}
      </datalist>
    `:null,Ss=()=>E`
 <a>semantic link</a>
`,Is=(t,e,a)=>{let i=[];return t.displayvalue&&t.displayvalue.pxResults&&t.displayvalue.pxResults.length>0&&(i=t.displayvalue.pxResults),ri(void 0,i,a.caseID,a)},Es=(t,e)=>E`<input
 class="location"
 data-ref="${t.reference}"
 ?required="${t.requiredstate}"
 ?readonly="${t.readonlystate}"
 ?disabled="${t.disabledstate}"
 placeholder="${pi(ls(t))}"
 type="text"
 aria-describedby="${pi(cs(t,e))}"
 id="${pi(e)}"
 value="${ja(t.displayvalue)}"
/>`,Ts=(t,e)=>E`
  ${t.map((t=>E`
    <th scope='col'>${i18n.t(t.config.label)}</th>`))}${e?null:E`<th></th>`}
`,zs=(t,e)=>{if(!e){const e=[];t.config.children[0].children.map(((t,a)=>(e[a]=t.config.value.replace("@P .","").replace("@USER .",""),null)));const a=t.config.referenceList.replace("@P .","").replace("@USER .","");return E`
      <div class="table-action-area">
        <button type="button" class="pzhc pzbutton Simple" aria-label="${i18n.t("Add row")}" data-newrow="${e.join()}"
        data-ref=${a} data-action-click="addRow">${Q()}${i18n.t("Add item")}</button>
      </div>
    `}return null},Rs=(t,e,a)=>{const i=t.config.referenceList.replace("@P .","").replace("@USER .",""),s=t.config.children[0].children,n=Za(a.data.data.caseInfo.content,i);return n?E`
  ${n.map(((t,n)=>E`
    <tr>
    ${s.map((t=>{const s=t,o=i18n.t(t.config.label);return E`
    <td data-title="${o}">${hs(s,void 0,e,a,`${i}(${n+1})`)}</td>`}))}${e?null:E`<td><button type="button" class="pzhc pzbutton Simple"
  aria-label="${i18n.t("Delete item")}" data-ref=${`${i}(${n+1}).pyTemplate`}
  data-action-click='deleteRow'>${et()}</button></td>`}
    </tr>`))}
`:null},Ms=(t,e,a,i,s)=>{if(void 0===t)return null;if(Array.isArray(t)&&1===t.length&&"View"===t[0].type&&(t=t[0]),!t.config||!t.config.template)return E`${t.map(((t,n)=>{const o=`${e}-${n}`;if("Region"===t.type)return Ms(t.children,`${e}-0`,!0,i,s);if("reference"===t.type&&"view"===t.config.type){let e="";if(t.config.context&&(e=t.config.context),t.config.inheritedProps&&1===t.config.inheritedProps.length&&"label"===t.config.inheritedProps[0].prop){const n=i18n.t(t.config.inheritedProps[0].value);let r=i.data.uiResources.resources.views[t.config.name];if(r){if(Array.isArray(r)&&1===r.length&&"View"===r[0].type&&(r=r[0]),"fieldGroup"===r.config.multiRecordDisplayAs)return Ms(r,o,a,i,""===s?e.substring(1):s+e);const t="SimpleTable"===r.config.template||"ListView"===r.config.template?"field-table":"field-subview";return E`<div class='flex content-item field-item ${t}'><h4>${n}</h4>${Ms(r,o,a,i,""===s?e.substring(1):s+e)}</div>`}}return Ms(i.data.uiResources.resources.views[t.config.name],o,a,i,s&&""!==s?s+e:e.substring(1))}return hs(t,o,a,i,s)}))}`;if("SimpleTable"===t.config.template){if("fieldGroup"===t.config.multiRecordDisplayAs){const s=t.config.referenceList.replace("@P .","").replace("@USER .",""),n=Za(i.data.data.caseInfo.content,s);if(!n)return null;const o=t.config.heading.replace("@L ","");return E`${n.map(((n,r)=>E`<div><h4>${`${o} ${r}`}</h4>
        ${Ms(t.children[0].children,`${e}-fieldgroup-${r}`,a,i,`${s}(${r+1})`)}</div>`))}`}return((t,e,a)=>{const i=e||"Editable"!==t.config.renderMode;return E`
  <div class='table-content'><table class='responsive'>
    <thead>
      <tr>
        ${Ts(t.config.children[0].children,i)}
      </tr>
    </thead>
    <tbody>
      ${Rs(t,i,a)}
    </tbody>
  </table></div>
  ${zs(t,i)}`})(t,a,i)}if("ListView"===t.config.template)return((t,e,a)=>(a.sendData("dataviews",{id:t.config.referenceList,content:{paging:{pageNumber:1,pageSize:41}}}),E`
  <table class='responsive'>
    <thead>
      <tr>
        ${Ts(t.config.presets[0].children[0].children,e)}
      </tr>
    </thead>
    <tbody>${Y()}
    </tbody>
  </table>`))(t,a,i);switch("DataReference"===t.config.template&&(i.isDeclarativeTarget=!0),"TwoColumn"===t.config.template&&1===t.children.length&&(t.config.template="OneColumn"),t.config.template){case"TwoColumn":return E`
          <div class="flex layout-content-inline_grid_double">
            <div class="flex layout-content-stacked">${Ms(t.children[0].children,`${e}-0`,a,i,s)}</div>
            <div class="flex layout-content-stacked">${Ms(t.children[1].children,`${e}-1`,a,i,s)}</div>
          </div>
        `;case"DefaultForm":return E`
          <div class="${`flex layout-content-default-form layout-content-default-form-${t.config.NumCols}`}">
            ${Ms(t.children[0].children,`${e}-0`,a,i,s)}
          </div>
        `;case"DataReference":return E`
          <div class="flex layout-content-stacked">
            ${Ms(t.children,`${e}-0`,a,i,s)}
          </div>
        `;case"OneColumn":return E`
          <div class="flex layout-content-stacked">
            ${Ms(t.children[0].children,`${e}-0`,a,i,s)}
          </div>
        `;case"Details":return E`
          <div class="flex layout-content-stacked_with_labels_left">
            ${Ms(t.children[0].children,`${e}-0`,!0,i,s)}
          </div>
        `;default:return null}},Ls=(t,e,a,i,s,n,o,r,c)=>{const l=E`${at()}<span class='count-badge'>${s}</span>`;if(void 0===e.caseID&&a.content){const t=a.content.pyID.split(" ")[1];return E`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${i18n.t(e.data.caseInfo.name)} <span>(${t})</span>
      ${""!==i?E`<span class='badge-bg-info centered'><span class='badge_text'>${i}</span></span>`:""}</h2>
      <div class="flex layout-content-inline_middle margin-l-auto">
        ${c?oi("Attachments",l,"Simple",c):""}
        ${a.actions&&a.actions.length>0?E`
          ${ni("Actions","Start a new action",n,o)}`:""}
      </div>
    </div>
    ${((t,e)=>t&&0!==t.length?E`
  <h3>
  ${i18n.t("Assignments")}
  </h3>
  <table class='responsive'>
  <caption class='sr-only'>List of assignments</caption>
    <thead>
      <tr>
        <th span='col'>${i18n.t("Priority")}</th>
        <th span='col'>${i18n.t("Task")}</th>
        <th span='col'>${i18n.t("Assigned")} to</th>
        <th span='col' class="right-aligned">${i18n.t("Action")}</th>
      </tr>
    </thead>
      <tbody>
        ${t.map((t=>E`
        <tr>
          <td data-title='Priority'>${t.urgency}</td>
          <td data-title='Task'>${t.name}</td>
          <td data-title='Assigned'>${t.assigneeInfo.name}</td>
          <td data-title='Action' class="right-aligned">
            <button type='button' @click="${e}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">${i18n.t("Open")}</button>
          </td>
        </tr>`))}
  </tbody>
  </table> `:null)(a.assignments,r)}
    <h3>${i18n.t("Case information")}</h3>`}if(""===t||void 0===e.caseID)return"";const d=e.caseID.split(" ")[1];return E`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${i18n.t(e.data.caseInfo.name)} <span>(${d})</span>
    ${""!==i?E`<span class='badge-bg-info centered'><span class='badge_text'>${i}</span></span>`:""}</h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      ${c?oi("Attachments",l,"Simple",c):""}
      ${e.actions&&e.actions.length>0?E`
        ${ni("Actions","Start a new action",n,o)}`:""}
    </div>
  </div>
 <h3>${i18n.t(t)}</h3>`},Bs=(t,e,a,i,s)=>E`
  <div>${Ms(t,e,!1,s,"")}</div>
  ${((t,e)=>E`
  <div class="action-button-area">
    ${null!==t?E`<button type="button" class="pzhc pzbutton" @click="${t}">${i18n.t("Cancel")}</button>`:""}
    ${null!==e?E`<button type="button" class="pzhc pzbutton" @click="${e}">${i18n.t("Save")}</button>`:""}
    <button type="button" data-submit="submit" class="Strong pzhc pzbutton">${i18n.t("Submit")}</button>
  </div>
`)(a,i)}
`,Ns=(t,e,a,i)=>E`
  <div>${Ms(t,e,!0,i)}</div>
  ${(t=>null===t?null:E`
  <div class="action-button-area">
  ${null!==t?E`<button type="button" class="pzhc pzbutton Strong" @click="${t}">${i18n.t("Close")}</button>`:""}
  </div>`)(a)}
`;class Hs extends ns{displayContent(){if(this.bShowSave="false",""!==this.errorMsg){if(-1===this.errorMsg.indexOf("The provided authorization code is expired"))return Qi(this.errorMsg,"true"===this.bShowCancel?this.resetError:null);window.history.replaceState({},"","")}if(window.history.state&&window.history.state.token&&(this.token=window.history.state.token),("oauth2password"===this.authentication||"oauth2clientcredentials"===this.authentication)&&""===this.token)return this.sendData("authenticate",{}),null;if("authorizationcode"===this.authentication&&""===this.token)return window.history.state&&window.history.state.code?(this.sendData("authenticate",{}),null):ss(this.url,this.clientid);if(this.casetypes||"createNewWork"!==this.action&&"workList"!==this.action?"createNewWork"===this.action&&""===this.caseID&&this.casetypes&&this.casetypes[this.casetype]?this.sendData("newwork",{id:this.casetype}):""===this.name&&("openAssignment"===this.action&&""===this.assignmentID&&(this.assignmentID=this.caseID),""!==this.assignmentID?this.fetchData("assignment",{id:this.assignmentID}):""!==this.caseID&&this.fetchData("view",{id:this.caseID,actionid:"pyReview"})):(this.fetchData("portal"),"createNewWork"===this.action?this.bShowNew=!0:"workList"===this.action&&(this.bShowCancel="true")),this.bShowConfirm){const t=this.data.ID.split(" ")[1];return Yi(this.casedata.name,t,this.casepyStatusWork,"true"===this.bShowAttachments?this.displayAttachments:null)}return""!==this.caseID||""!==this.assignmentID||this.bShowNew?E`
        ${Ls(this.name,this.data,this.casedata,this.casepyStatusWork,this.numAttachments,this.displayActions,this.runAction,this.openCase,"true"===this.bShowAttachments?this.displayAttachments:null)}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
        <form id="case-data"></form>
      `:"workList"===this.action?ts(this.title,this.cases,this.displayCasesTypes,this.reloadWorkList,"true"===this.bShowCreate?this.createCase:null,this.openCase):null}renderMainLayout=(t,e)=>Bs(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this);renderReviewLayout=(t,e)=>Ns(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,this);genPageValidationErrors=t=>(t=>t.errorDetails?E`
    <ul>
      ${t.errorDetails.map((t=>"Error_Validation_Fail"===t.message||"Validation failed: Errors Detected."===t.message?null:E`<li>${i18n.t(t.localizedValue)}</li>`))}
    </ul>`:null)(t);showDataList=t=>Xi(t);genActionsList=(t,e)=>((t,e)=>{const a=[],i=Object.entries(e.actions);for(const e of i)e[1].name!==t&&a.push(E`
          <li role="menuitem" tabindex="-1" data-value="${e[1].ID}">${i18n.t(e[1].name)}</li>
        `);return E`
    ${a}
  `})(t,e);displayCasesTypes=()=>(t=>{const e=[],a=Object.entries(t);for(const t of a)e.push(E`
        <li role="menuitem" tabindex="-1" data-value="${t[0]}">${i18n.t(t[1].name)}</li>
      `);return E`
    ${e}
  `})(this.casetypes);genLoadingIndicator=()=>Y();setInlineError=(t,e)=>{t.setCustomValidity(ja(e)),t.classList.add("error-field"),t.reportValidity()};validateForm=t=>t.checkValidity();reportFormValidity=t=>t.reportValidity();clickHandler=t=>{let e=t.target;"path"===e.tagName&&(e=e.parentNode),"svg"===e.tagName&&(e=e.parentNode);const a=e.getAttribute("data-action-click");e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e),Ya(e,"click")?(this.refreshAssignment(e,Qa(e,"click")),t.preventDefault()):"BUTTON"===e.tagName&&(t.preventDefault(),null!==e.getAttribute("data-submit")&&"save"!==e.getAttribute("data-submit")?this.submitForm(t,e.getAttribute("data-submit")):("addRow"===a||"deleteRow"===a)&&this.refreshAssignment(e))};changeHandler=t=>{let e=t.target;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e.setCustomValidity(""),e.classList.remove("error-field"),Ya(e,"change")||this.isDeclarativeTarget)this.refreshAssignment(e,Qa(e,"change"));else if(this.refreshOnChange){const t=this.getRenderRoot().querySelector("#case-data");ai(t,this.content,this.pageInstructions,this.data.data.caseInfo.content),M(Bs(this.data.uiResources.resources.views[this.casedata.content.pyViewName],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),t)}};keyupHandler=t=>{const e=t.target;"TEXTAREA"===e.tagName&&(e.style.cssText="height:auto; padding:0;",e.style.cssText=`height:${e.scrollHeight}px`)};focusHandler=t=>{const e=t.target;e.classList.contains("combobox")&&!e.classList.contains("loaded")?this.getData(e.getAttribute("data-pageid"),e):"INPUT"===e.tagName&&e.classList.contains("location")&&!e.classList.contains("pac-target-input")&&window.google&&window.google.maps&&window.google.maps.places&&new window.google.maps.places.Autocomplete(e)};async firstUpdated(){const t=this.getRenderRoot();t&&(t.addEventListener("click",this.clickHandler),t.addEventListener("focusin",this.focusHandler),t.addEventListener("change",this.changeHandler),t.addEventListener("keyup",this.keyupHandler))}}customElements.define("pega-mashup-v2",class extends Hs{createRenderRoot(){return this.attachShadow({mode:"open"})}getRenderRoot(){return this.shadowRoot}render(){return E`
      ${as()} ${this.displayContent()}
    `}});customElements.define("pega-mashup-light-v2",class extends Hs{createRenderRoot(){return this}getRenderRoot(){return this}render(){return E`
      ${this.displayContent()}
    `}})}();
