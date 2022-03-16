!function(){"use strict";
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),s=new Map;class a{constructor(t,s){if(this._$cssResult$=!0,s!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=s.get(this.cssText);return t&&void 0===e&&(s.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const i=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const e of t.cssRules)s+=e.cssText;return(t=>new a("string"==typeof t?t:t+"",e))(s)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;var n;const r=window.trustedTypes,o=r?r.emptyScript:"",c=window.reactiveElementPolyfillSupport,l={toAttribute(t,e){switch(e){case Boolean:t=t?o:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},d=(t,e)=>e!==t&&(e==e||t==t),h={attribute:!0,type:String,converter:l,reflect:!1,hasChanged:d};class u extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const a=this._$Eh(s,e);void 0!==a&&(this._$Eu.set(a,s),t.push(a))})),t}static createProperty(t,e=h){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,a=this.getPropertyDescriptor(t,s,e);void 0!==a&&Object.defineProperty(this.prototype,t,a)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(a){const i=this[t];this[e]=a,this.requestUpdate(t,i,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||h}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(i(t))}else void 0!==t&&e.push(i(t));return e}static _$Eh(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const s=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{t?e.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style"),a=window.litNonce;void 0!==a&&s.setAttribute("nonce",a),s.textContent=t.cssText,e.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ES(t,e,s=h){var a,i;const n=this.constructor._$Eh(t,s);if(void 0!==n&&!0===s.reflect){const r=(null!==(i=null===(a=s.converter)||void 0===a?void 0:a.toAttribute)&&void 0!==i?i:l.toAttribute)(e,s.type);this._$Ei=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Ei=null}}_$AK(t,e){var s,a,i;const n=this.constructor,r=n._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=n.getPropertyOptions(r),o=t.converter,c=null!==(i=null!==(a=null===(s=o)||void 0===s?void 0:s.fromAttribute)&&void 0!==a?a:"function"==typeof o?o:null)&&void 0!==i?i:l.fromAttribute;this._$Ei=r,this[r]=c(e,t.type),this._$Ei=null}}requestUpdate(t,e,s){let a=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):a=!1),!this.isUpdatePending&&a&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var p;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:u}),(null!==(n=globalThis.reactiveElementVersions)&&void 0!==n?n:globalThis.reactiveElementVersions=[]).push("1.3.1");const g=globalThis.trustedTypes,f=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,y="?"+m,$=`<${y}>`,b=document,v=(t="")=>b.createComment(t),w=t=>null===t||"object"!=typeof t&&"function"!=typeof t,_=Array.isArray,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,k=/>/g,I=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,x=/'/g,A=/"/g,S=/^(?:script|style|textarea|title)$/i,E=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),T=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),L=new WeakMap,M=(t,e,s)=>{var a,i;const n=null!==(a=null==s?void 0:s.renderBefore)&&void 0!==a?a:e;let r=n._$litPart$;if(void 0===r){const t=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:null;n._$litPart$=r=new P(e.insertBefore(v(),t),t,void 0,null!=s?s:{})}return r._$AI(t),r},N=b.createTreeWalker(b,129,null,!1),O=(t,e)=>{const s=t.length-1,a=[];let i,n=2===e?"<svg>":"",r=C;for(let e=0;e<s;e++){const s=t[e];let o,c,l=-1,d=0;for(;d<s.length&&(r.lastIndex=d,c=r.exec(s),null!==c);)d=r.lastIndex,r===C?"!--"===c[1]?r=D:void 0!==c[1]?r=k:void 0!==c[2]?(S.test(c[2])&&(i=RegExp("</"+c[2],"g")),r=I):void 0!==c[3]&&(r=I):r===I?">"===c[0]?(r=null!=i?i:C,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,o=c[1],r=void 0===c[3]?I:'"'===c[3]?A:x):r===A||r===x?r=I:r===D||r===k?r=C:(r=I,i=void 0);const h=r===I&&t[e+1].startsWith("/>")?" ":"";n+=r===C?s+$:l>=0?(a.push(o),s.slice(0,l)+"$lit$"+s.slice(l)+m+h):s+m+(-2===l?(a.push(void 0),e):h)}const o=n+(t[s]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==f?f.createHTML(o):o,a]};class q{constructor({strings:t,_$litType$:e},s){let a;this.parts=[];let i=0,n=0;const r=t.length-1,o=this.parts,[c,l]=O(t,e);if(this.el=q.createElement(c,s),N.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(a=N.nextNode())&&o.length<r;){if(1===a.nodeType){if(a.hasAttributes()){const t=[];for(const e of a.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(m)){const s=l[n++];if(t.push(e),void 0!==s){const t=a.getAttribute(s.toLowerCase()+"$lit$").split(m),e=/([.?@])?(.*)/.exec(s);o.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?F:"?"===e[1]?H:"@"===e[1]?V:z})}else o.push({type:6,index:i})}for(const e of t)a.removeAttribute(e)}if(S.test(a.tagName)){const t=a.textContent.split(m),e=t.length-1;if(e>0){a.textContent=g?g.emptyScript:"";for(let s=0;s<e;s++)a.append(t[s],v()),N.nextNode(),o.push({type:2,index:++i});a.append(t[e],v())}}}else if(8===a.nodeType)if(a.data===y)o.push({type:2,index:i});else{let t=-1;for(;-1!==(t=a.data.indexOf(m,t+1));)o.push({type:7,index:i}),t+=m.length-1}i++}}static createElement(t,e){const s=b.createElement("template");return s.innerHTML=t,s}}function B(t,e,s=t,a){var i,n,r,o;if(e===T)return e;let c=void 0!==a?null===(i=s._$Cl)||void 0===i?void 0:i[a]:s._$Cu;const l=w(e)?void 0:e._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(n=null==c?void 0:c._$AO)||void 0===n||n.call(c,!1),void 0===l?c=void 0:(c=new l(t),c._$AT(t,s,a)),void 0!==a?(null!==(r=(o=s)._$Cl)&&void 0!==r?r:o._$Cl=[])[a]=c:s._$Cu=c),void 0!==c&&(e=B(t,c._$AS(t,e.values),c,a)),e}class U{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:a}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:b).importNode(s,!0);N.currentNode=i;let n=N.nextNode(),r=0,o=0,c=a[0];for(;void 0!==c;){if(r===c.index){let e;2===c.type?e=new P(n,n.nextSibling,this,t):1===c.type?e=new c.ctor(n,c.name,c.strings,this,t):6===c.type&&(e=new W(n,this,t)),this.v.push(e),c=a[++o]}r!==(null==c?void 0:c.index)&&(n=N.nextNode(),r++)}return i}m(t){let e=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class P{constructor(t,e,s,a){var i;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=a,this._$Cg=null===(i=null==a?void 0:a.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=B(this,t,e),w(t)?t===R||null==t||""===t?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==T&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return _(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==R&&w(this._$AH)?this._$AA.nextSibling.data=t:this.k(b.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:a}=t,i="number"==typeof a?this._$AC(t):(void 0===a.el&&(a.el=q.createElement(a.h,this.options)),a);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.m(s);else{const t=new U(i,this),e=t.p(this.options);t.m(s),this.k(e),this._$AH=t}}_$AC(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new q(t)),e}S(t){_(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,a=0;for(const i of t)a===e.length?e.push(s=new P(this.A(v()),this.A(v()),this,this.options)):s=e[a],s._$AI(i),a++;a<e.length&&(this._$AR(s&&s._$AB.nextSibling,a),e.length=a)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class z{constructor(t,e,s,a,i){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=e,this._$AM=a,this.options=i,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,a){const i=this.strings;let n=!1;if(void 0===i)t=B(this,t,e,0),n=!w(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else{const a=t;let r,o;for(t=i[0],r=0;r<i.length-1;r++)o=B(this,a[s+r],e,r),o===T&&(o=this._$AH[r]),n||(n=!w(o)||o!==this._$AH[r]),o===R?t=R:t!==R&&(t+=(null!=o?o:"")+i[r+1]),this._$AH[r]=o}n&&!a&&this.C(t)}C(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class F extends z{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===R?void 0:t}}const j=g?g.emptyScript:"";class H extends z{constructor(){super(...arguments),this.type=4}C(t){t&&t!==R?this.element.setAttribute(this.name,j):this.element.removeAttribute(this.name)}}class V extends z{constructor(t,e,s,a,i){super(t,e,s,a,i),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=B(this,t,e,0))&&void 0!==s?s:R)===T)return;const a=this._$AH,i=t===R&&a!==R||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,n=t!==R&&(a===R||i);i&&this.element.removeEventListener(this.name,this,a),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class W{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}const K=window.litHtmlPolyfillSupport;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var Z,J;null==K||K(q,P),(null!==(p=globalThis.litHtmlVersions)&&void 0!==p?p:globalThis.litHtmlVersions=[]).push("2.2.1");class Y extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=M(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return T}}Y.finalized=!0,Y._$litElement$=!0,null===(Z=globalThis.litElementHydrateSupport)||void 0===Z||Z.call(globalThis,{LitElement:Y});const X=globalThis.litElementPolyfillSupport;null==X||X({LitElement:Y}),(null!==(J=globalThis.litElementVersions)&&void 0!==J?J:globalThis.litElementVersions=[]).push("3.2.0");const G=()=>E`
<span class="loading">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</span>
`,Q=()=>E`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.3375,3 C20.3375,3 21.7742187,4.43671875 21.7742187,4.43671875 C21.7742187,4.43671875 4.43671875,21.4867188 4.43671875,21.4867188 C4.43671875,21.4867188 3,20.19375 3,20.19375 C3,20.19375 20.3375,3 20.3375,3 Z M21.7265625,20.0976563 C21.7265625,20.0976563 20.3859375,21.534375 20.3859375,21.534375 C20.3859375,21.534375 3.00078125,4.3890625 3.00078125,4.3890625 C3.00078125,4.3890625 4.38984375,3 4.38984375,3 C4.38984375,3 21.7273438,20.0976563 21.7273438,20.0976563 L21.7265625,20.0976563 Z"/>
</svg>`,tt=()=>E`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1140625,3.96875 C22.1140625,3.96875 22.1140625,3.96875 22.1140625,3.96875 C22.1140625,3.96875 17.46875,3.96875 17.46875,3.96875 C17.46875,3.96875 16.9898437,2.14921875 16.9898437,2.14921875 C16.9421875,1.8140625 16.7507812,1.57421875 16.5109375,1.33515625 C16.2234375,1.09609375 15.8882813,1 15.553125,1 C15.553125,1 15.553125,1 15.553125,1 C15.553125,1 9.03984375,1 9.03984375,1 C8.7046875,1 8.4171875,1.09609375 8.1296875,1.2875 C7.8421875,1.52734375 7.65078125,1.76640625 7.603125,2.1015625 C7.603125,2.1015625 7.603125,2.1015625 7.603125,2.1015625 C7.603125,2.1015625 7.12421875,3.96953125 7.12421875,3.96953125 C7.12421875,3.96953125 2.47890625,3.96953125 2.47890625,3.96953125 C2.14375,3.96953125 2,4.11328125 2,4.4484375 C2,4.78359375 2.14375,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 2.47890625,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 4.01171875,4.92734375 4.01171875,4.92734375 C4.01171875,4.92734375 4.921875,23.1742188 4.921875,23.1742188 C4.96953125,23.5570312 5.11328125,23.8929688 5.40078125,24.1320313 C5.63984375,24.4195312 5.97578125,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 6.40625,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 18.2359375,24.5632812 18.2359375,24.5632812 C18.6671875,24.5632812 19.0023438,24.4195312 19.2898438,24.1320313 C19.5289063,23.8929688 19.6726562,23.5570312 19.7210938,23.1742188 C19.7210938,23.1742188 19.7210938,23.1742188 19.7210938,23.1742188 C19.7210938,23.1742188 20.63125,4.92734375 20.63125,4.92734375 C20.63125,4.92734375 22.115625,4.92734375 22.115625,4.92734375 C22.4507812,4.92734375 22.5945312,4.78359375 22.5945312,4.4484375 C22.5945312,4.11328125 22.4507812,3.96953125 22.115625,3.96953125 L22.1140625,3.96875 Z M8.17734375,3.96875 C8.17734375,3.96875 8.56015625,2.38828125 8.56015625,2.38828125 C8.6078125,2.1484375 8.79921875,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 9.0390625,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 15.5523437,2.00546875 15.5523437,2.00546875 C15.7914062,2.00546875 15.9835937,2.14921875 16.03125,2.38828125 C16.03125,2.38828125 16.03125,2.38828125 16.03125,2.38828125 C16.03125,2.38828125 16.4140625,3.96875 16.4140625,3.96875 C16.4140625,3.96875 8.1765625,3.96875 8.1765625,3.96875 L8.17734375,3.96875 Z M19.6710938,4.9265625 C19.6710938,4.9265625 18.7609375,23.1257812 18.7609375,23.1257812 C18.7132812,23.4132812 18.521875,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 18.234375,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 6.4046875,23.5570312 6.4046875,23.5570312 C6.1171875,23.5570312 5.92578125,23.4132812 5.878125,23.1257812 C5.878125,23.1257812 5.878125,23.1257812 5.878125,23.1257812 C5.878125,23.1257812 4.96796875,4.9265625 4.96796875,4.9265625 C4.96796875,4.9265625 19.6710938,4.9265625 19.6710938,4.9265625 L19.6710938,4.9265625 Z M8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,18.1929687 8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,10.3382812 8.84765625,10.3382812 C8.84765625,10.003125 9.0390625,9.859375 9.37421875,9.859375 C9.37421875,9.859375 9.37421875,9.859375 9.37421875,9.859375 C9.709375,9.859375 9.853125,10.003125 9.853125,10.3382812 C9.853125,10.3382812 9.853125,10.3382812 9.853125,10.3382812 C9.853125,10.3382812 9.853125,18.1929687 9.853125,18.1929687 C9.853125,18.528125 9.709375,18.671875 9.37421875,18.671875 C9.37421875,18.671875 9.37421875,18.671875 9.37421875,18.671875 C9.0390625,18.671875 8.84765625,18.528125 8.84765625,18.1929687 Z M14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,18.1929687 14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,10.3382812 14.7382812,10.3382812 C14.7382812,10.003125 14.8820313,9.859375 15.2171875,9.859375 C15.2171875,9.859375 15.2171875,9.859375 15.2171875,9.859375 C15.5523437,9.859375 15.74375,10.003125 15.74375,10.3382812 C15.74375,10.3382812 15.74375,10.3382812 15.74375,10.3382812 C15.74375,10.3382812 15.74375,18.1929687 15.74375,18.1929687 C15.74375,18.528125 15.5523437,18.671875 15.2171875,18.671875 C15.2171875,18.671875 15.2171875,18.671875 15.2171875,18.671875 C14.8820313,18.671875 14.7382812,18.528125 14.7382812,18.1929687 Z M11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,19.1507813 11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,9.38046875 11.8164062,9.38046875 C11.8164062,9.0453125 11.9601563,8.85390625 12.2953125,8.85390625 C12.6304687,8.85390625 12.7742187,9.0453125 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,9.38046875 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,19.1507813 12.7742187,19.1507813 C12.7742187,19.4859375 12.6304687,19.6773437 12.2953125,19.6773437 C11.9601563,19.6773437 11.8164062,19.4859375 11.8164062,19.1507813 Z"/>
</svg>`,et=()=>E`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.5226562,11.6265625 C20.6664062,11.6265625 20.7617188,11.6742188 20.8578125,11.7703125 C20.9539062,11.8664063 21.0015625,11.9617188 21.0015625,12.1054688 C21.0015625,12.2492188 20.9539062,12.3445313 20.8578125,12.440625 C20.8578125,12.440625 20.8578125,12.440625 20.8578125,12.440625 C20.8578125,12.440625 13.2429687,20.0554687 13.2429687,20.0554687 C12.1414062,21.109375 10.8484375,21.6359375 9.41171875,21.6359375 C7.975,21.6359375 6.68203125,21.109375 5.58046875,20.0554687 C5.58046875,20.0554687 5.58046875,20.0554687 5.58046875,20.0554687 C4.5265625,19.0015625 4,17.75625 4,16.271875 C4,16.271875 4,16.271875 4,16.271875 C4,14.8351563 4.5265625,13.5421875 5.58046875,12.440625 C5.58046875,12.440625 5.58046875,12.440625 5.58046875,12.440625 C5.58046875,12.440625 14.9671875,3.14921875 14.9671875,3.14921875 C15.7335937,2.3828125 16.64375,2 17.7453125,2 C18.846875,2 19.7570312,2.3828125 20.5234375,3.14921875 C20.5234375,3.14921875 20.5234375,3.14921875 20.5234375,3.14921875 C21.2898437,3.86796875 21.6726562,4.77734375 21.6726562,5.87890625 C21.6726562,5.87890625 21.6726562,5.87890625 21.6726562,5.87890625 C21.6726562,6.98046875 21.2898437,7.890625 20.5234375,8.65703125 C20.5234375,8.65703125 20.5234375,8.65703125 20.5234375,8.65703125 C20.5234375,8.65703125 11.8546875,17.2773438 11.8546875,17.2773438 C11.3757813,17.75625 10.8007812,17.9960938 10.1304687,17.9960938 C10.1304687,17.9960938 10.1304687,17.9960938 10.1304687,17.9960938 C9.5078125,17.9960938 8.88515625,17.7570313 8.35859375,17.2773438 C8.35859375,17.2773438 8.35859375,17.2773438 8.35859375,17.2773438 C7.8796875,16.7984375 7.63984375,16.2234375 7.63984375,15.553125 C7.63984375,14.8828125 7.87890625,14.3078125 8.35859375,13.8289062 C8.35859375,13.8289062 8.35859375,13.8289062 8.35859375,13.8289062 C8.35859375,13.8289062 16.6921875,5.54375 16.6921875,5.54375 C16.7882812,5.44765625 16.93125,5.4 17.075,5.4 C17.075,5.4 17.075,5.4 17.075,5.4 C17.21875,5.4 17.3140625,5.44765625 17.4101562,5.54375 C17.50625,5.63984375 17.5539062,5.73515625 17.5539062,5.87890625 C17.5539062,5.87890625 17.5539062,5.87890625 17.5539062,5.87890625 C17.5539062,6.02265625 17.50625,6.16640625 17.4101562,6.26171875 C17.4101562,6.26171875 17.4101562,6.26171875 17.4101562,6.26171875 C17.4101562,6.26171875 9.0765625,14.4992187 9.0765625,14.4992187 C8.7890625,14.7867187 8.6453125,15.121875 8.6453125,15.553125 C8.6453125,15.984375 8.7890625,16.3195313 9.0765625,16.6070312 C9.3640625,16.8945312 9.69921875,17.0382813 10.1304687,17.0382813 C10.1304687,17.0382813 10.1304687,17.0382813 10.1304687,17.0382813 C10.5132812,17.0382813 10.8492187,16.8945312 11.1359375,16.6070312 C11.1359375,16.6070312 11.1359375,16.6070312 11.1359375,16.6070312 C11.1359375,16.6070312 19.8523437,7.98671875 19.8523437,7.98671875 C20.4273437,7.41171875 20.7140625,6.69375 20.7140625,5.8796875 C20.7140625,5.8796875 20.7140625,5.8796875 20.7140625,5.8796875 C20.7140625,5.065625 20.4265625,4.3953125 19.8523437,3.8203125 C19.8523437,3.8203125 19.8523437,3.8203125 19.8523437,3.8203125 C19.2296875,3.2453125 18.5117187,2.95859375 17.7453125,2.95859375 C17.7453125,2.95859375 17.7453125,2.95859375 17.7453125,2.95859375 C16.93125,2.95859375 16.2609375,3.24609375 15.6859375,3.8203125 C15.6859375,3.8203125 15.6859375,3.8203125 15.6859375,3.8203125 C15.6859375,3.8203125 6.29921875,13.159375 6.29921875,13.159375 C5.4375,13.9734375 5.00625,14.9789062 5.00625,16.2726562 C5.00625,16.2726562 5.00625,16.2726562 5.00625,16.2726562 C5.00625,17.5179688 5.4375,18.5234375 6.29921875,19.3375 C6.29921875,19.3375 6.29921875,19.3375 6.29921875,19.3375 C7.1609375,20.1992188 8.21484375,20.6304688 9.4125,20.6304688 C9.4125,20.6304688 9.4125,20.6304688 9.4125,20.6304688 C10.7054687,20.6304688 11.7117187,20.1992188 12.5257812,19.3375 C12.5257812,19.3375 12.5257812,19.3375 12.5257812,19.3375 C12.5257812,19.3375 20.1882812,11.7703125 20.1882812,11.7703125 C20.284375,11.6742188 20.3796875,11.6265625 20.5234375,11.6265625 L20.5226562,11.6265625 Z"/>
</svg>`,st=()=>E`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1632813,6.753125 C22.1632813,6.753125 22.1632813,6.753125 22.1632813,6.753125 C22.1632813,6.753125 15.8414062,0.43125 15.8414062,0.43125 C15.6023437,0.14375 15.21875,0 14.7875,0 C14.7875,0 14.7875,0 14.7875,0 C14.7875,0 3.48515625,0 3.48515625,0 C3.05390625,0 2.71875,0.14375 2.43125,0.43125 C2.14375,0.71875 2,1.05390625 2,1.48515625 C2,1.48515625 2,1.48515625 2,1.48515625 C2,1.48515625 2,23.0367188 2,23.0367188 C2,23.4679688 2.14375,23.803125 2.43125,24.090625 C2.71875,24.378125 3.05390625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 3.48515625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 21.109375,24.521875 21.109375,24.521875 C21.540625,24.521875 21.8757812,24.378125 22.1632813,24.090625 C22.4507812,23.803125 22.5945312,23.4679688 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,23.0367188 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,7.80703125 22.5945312,7.80703125 C22.5945312,7.37578125 22.4507812,7.040625 22.1632813,6.753125 Z M15.6976563,1.6765625 C15.6976563,1.6765625 20.8703125,6.84921875 20.8703125,6.84921875 C20.8703125,6.84921875 16.225,6.84921875 16.225,6.84921875 C15.8898438,6.84921875 15.7460938,6.70546875 15.7460938,6.3703125 C15.7460938,6.3703125 15.7460938,6.3703125 15.7460938,6.3703125 C15.7460938,6.3703125 15.6984375,1.6765625 15.6984375,1.6765625 L15.6976563,1.6765625 Z M21.6367188,7.8546875 C21.6367188,7.8546875 21.6367188,23.0367188 21.6367188,23.0367188 C21.6367188,23.371875 21.4453125,23.515625 21.1101563,23.515625 C21.1101563,23.515625 21.1101563,23.515625 21.1101563,23.515625 C21.1101563,23.515625 3.4859375,23.515625 3.4859375,23.515625 C3.15078125,23.515625 2.959375,23.371875 2.959375,23.0367188 C2.959375,23.0367188 2.959375,23.0367188 2.959375,23.0367188 C2.959375,23.0367188 2.959375,1.48515625 2.959375,1.48515625 C2.959375,1.15 3.15078125,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 3.4859375,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 14.740625,0.95859375 14.740625,0.95859375 C14.740625,0.95859375 14.740625,6.3703125 14.740625,6.3703125 C14.740625,6.8015625 14.884375,7.13671875 15.171875,7.42421875 C15.459375,7.71171875 15.7945313,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 16.2257813,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 21.6375,7.85546875 21.6375,7.85546875 L21.6367188,7.8546875 Z"/>
</svg>`;class at{static create(...t){return new this(...t)}mixIn(t){return Object.assign(this,t)}clone(){const t=new this.constructor;return Object.assign(t,this),t}}class it extends at{constructor(t=[],e=4*t.length){super();let s=t;if(s instanceof ArrayBuffer&&(s=new Uint8Array(s)),(s instanceof Int8Array||s instanceof Uint8ClampedArray||s instanceof Int16Array||s instanceof Uint16Array||s instanceof Int32Array||s instanceof Uint32Array||s instanceof Float32Array||s instanceof Float64Array)&&(s=new Uint8Array(s.buffer,s.byteOffset,s.byteLength)),s instanceof Uint8Array){const t=s.byteLength,e=[];for(let a=0;a<t;a+=1)e[a>>>2]|=s[a]<<24-a%4*8;this.words=e,this.sigBytes=t}else this.words=t,this.sigBytes=e}static random(t){const e=[],s=t=>{let e=t,s=987654321;const a=4294967295;return()=>{s=36969*(65535&s)+(s>>16)&a,e=18e3*(65535&e)+(e>>16)&a;let t=(s<<16)+e&a;return t/=4294967296,t+=.5,t*(Math.random()>.5?1:-1)}};for(let a,i=0;i<t;i+=4){const t=s(4294967296*(a||Math.random()));a=987654071*t(),e.push(4294967296*t()|0)}return new it(e,t)}toString(t=nt){return t.stringify(this)}concat(t){const e=this.words,s=t.words,a=this.sigBytes,i=t.sigBytes;if(this.clamp(),a%4)for(let t=0;t<i;t+=1){const i=s[t>>>2]>>>24-t%4*8&255;e[a+t>>>2]|=i<<24-(a+t)%4*8}else for(let t=0;t<i;t+=4)e[a+t>>>2]=s[t>>>2];return this.sigBytes+=i,this}clamp(){const{words:t,sigBytes:e}=this;t[e>>>2]&=4294967295<<32-e%4*8,t.length=Math.ceil(e/4)}clone(){const t=super.clone.call(this);return t.words=this.words.slice(0),t}}const nt={stringify(t){const{words:e,sigBytes:s}=t,a=[];for(let t=0;t<s;t+=1){const s=e[t>>>2]>>>24-t%4*8&255;a.push((s>>>4).toString(16)),a.push((15&s).toString(16))}return a.join("")},parse(t){const e=t.length,s=[];for(let a=0;a<e;a+=2)s[a>>>3]|=parseInt(t.substr(a,2),16)<<24-a%8*4;return new it(s,e/2)}},rt={stringify(t){const{words:e,sigBytes:s}=t,a=[];for(let t=0;t<s;t+=1){const s=e[t>>>2]>>>24-t%4*8&255;a.push(String.fromCharCode(s))}return a.join("")},parse(t){const e=t.length,s=[];for(let a=0;a<e;a+=1)s[a>>>2]|=(255&t.charCodeAt(a))<<24-a%4*8;return new it(s,e)}},ot={stringify(t){try{return decodeURIComponent(escape(rt.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:t=>rt.parse(unescape(encodeURIComponent(t)))};class ct extends at{constructor(){super(),this._minBufferSize=0}reset(){this._data=new it,this._nDataBytes=0}_append(t){let e=t;"string"==typeof e&&(e=ot.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes}_process(t){let e;const{_data:s,blockSize:a}=this,i=s.words,n=s.sigBytes;let r=n/(4*a);r=t?Math.ceil(r):Math.max((0|r)-this._minBufferSize,0);const o=r*a,c=Math.min(4*o,n);if(o){for(let t=0;t<o;t+=a)this._doProcessBlock(i,t);e=i.splice(0,o),s.sigBytes-=c}return new it(e,c)}clone(){const t=super.clone.call(this);return t._data=this._data.clone(),t}}class lt extends ct{constructor(t){super(),this.blockSize=16,this.cfg=Object.assign(new at,t),this.reset()}static _createHelper(t){return(e,s)=>new t(s).finalize(e)}static _createHmacHelper(t){return(e,s)=>new dt(t,s).finalize(e)}reset(){super.reset.call(this),this._doReset()}update(t){return this._append(t),this._process(),this}finalize(t){t&&this._append(t);return this._doFinalize()}}class dt extends at{constructor(t,e){super();const s=new t;this._hasher=s;let a=e;"string"==typeof a&&(a=ot.parse(a));const i=s.blockSize,n=4*i;a.sigBytes>n&&(a=s.finalize(e)),a.clamp();const r=a.clone();this._oKey=r;const o=a.clone();this._iKey=o;const c=r.words,l=o.words;for(let t=0;t<i;t+=1)c[t]^=1549556828,l[t]^=909522486;r.sigBytes=n,o.sigBytes=n,this.reset()}reset(){const t=this._hasher;t.reset(),t.update(this._iKey)}update(t){return this._hasher.update(t),this}finalize(t){const e=this._hasher,s=e.finalize(t);e.reset();return e.finalize(this._oKey.clone().concat(s))}}const ht=it;class ut extends at{constructor(t,e){super(),this.high=t,this.low=e}}class pt extends at{constructor(t=[],e=8*t.length){super(),this.words=t,this.sigBytes=e}toX32(){const t=this.words,e=t.length,s=[];for(let a=0;a<e;a+=1){const e=t[a];s.push(e.high),s.push(e.low)}return ht.create(s,this.sigBytes)}clone(){const t=super.clone.call(this);t.words=this.words.slice(0);const{words:e}=t,s=e.length;for(let t=0;t<s;t+=1)e[t]=e[t].clone();return t}}const gt={stringify(t){const{words:e,sigBytes:s}=t,a=this._map;t.clamp();const i=[];for(let t=0;t<s;t+=3){const n=(e[t>>>2]>>>24-t%4*8&255)<<16|(e[t+1>>>2]>>>24-(t+1)%4*8&255)<<8|e[t+2>>>2]>>>24-(t+2)%4*8&255;for(let e=0;e<4&&t+.75*e<s;e+=1)i.push(a.charAt(n>>>6*(3-e)&63))}const n=a.charAt(64);if(n)for(;i.length%4;)i.push(n);return i.join("")},parse(t){let e=t.length;const s=this._map;let a=this._reverseMap;if(!a){this._reverseMap=[],a=this._reverseMap;for(let t=0;t<s.length;t+=1)a[s.charCodeAt(t)]=t}const i=s.charAt(64);if(i){const s=t.indexOf(i);-1!==s&&(e=s)}return((t,e,s)=>{const a=[];let i=0;for(let n=0;n<e;n+=1)if(n%4){const e=s[t.charCodeAt(n-1)]<<n%4*2|s[t.charCodeAt(n)]>>>6-n%4*2;a[i>>>2]|=e<<24-i%4*8,i+=1}return it.create(a,i)})(t,e,a)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},ft=[];for(let t=0;t<64;t+=1)ft[t]=4294967296*Math.abs(Math.sin(t+1))|0;const mt=(t,e,s,a,i,n,r)=>{const o=t+(e&s|~e&a)+i+r;return(o<<n|o>>>32-n)+e},yt=(t,e,s,a,i,n,r)=>{const o=t+(e&a|s&~a)+i+r;return(o<<n|o>>>32-n)+e},$t=(t,e,s,a,i,n,r)=>{const o=t+(e^s^a)+i+r;return(o<<n|o>>>32-n)+e},bt=(t,e,s,a,i,n,r)=>{const o=t+(s^(e|~a))+i+r;return(o<<n|o>>>32-n)+e};class vt extends lt{_doReset(){this._hash=new it([1732584193,4023233417,2562383102,271733878])}_doProcessBlock(t,e){const s=t;for(let a=0;a<16;a+=1){const i=e+a,n=t[i];s[i]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8)}const a=this._hash.words,i=s[e+0],n=s[e+1],r=s[e+2],o=s[e+3],c=s[e+4],l=s[e+5],d=s[e+6],h=s[e+7],u=s[e+8],p=s[e+9],g=s[e+10],f=s[e+11],m=s[e+12],y=s[e+13],$=s[e+14],b=s[e+15];let v=a[0],w=a[1],_=a[2],C=a[3];v=mt(v,w,_,C,i,7,ft[0]),C=mt(C,v,w,_,n,12,ft[1]),_=mt(_,C,v,w,r,17,ft[2]),w=mt(w,_,C,v,o,22,ft[3]),v=mt(v,w,_,C,c,7,ft[4]),C=mt(C,v,w,_,l,12,ft[5]),_=mt(_,C,v,w,d,17,ft[6]),w=mt(w,_,C,v,h,22,ft[7]),v=mt(v,w,_,C,u,7,ft[8]),C=mt(C,v,w,_,p,12,ft[9]),_=mt(_,C,v,w,g,17,ft[10]),w=mt(w,_,C,v,f,22,ft[11]),v=mt(v,w,_,C,m,7,ft[12]),C=mt(C,v,w,_,y,12,ft[13]),_=mt(_,C,v,w,$,17,ft[14]),w=mt(w,_,C,v,b,22,ft[15]),v=yt(v,w,_,C,n,5,ft[16]),C=yt(C,v,w,_,d,9,ft[17]),_=yt(_,C,v,w,f,14,ft[18]),w=yt(w,_,C,v,i,20,ft[19]),v=yt(v,w,_,C,l,5,ft[20]),C=yt(C,v,w,_,g,9,ft[21]),_=yt(_,C,v,w,b,14,ft[22]),w=yt(w,_,C,v,c,20,ft[23]),v=yt(v,w,_,C,p,5,ft[24]),C=yt(C,v,w,_,$,9,ft[25]),_=yt(_,C,v,w,o,14,ft[26]),w=yt(w,_,C,v,u,20,ft[27]),v=yt(v,w,_,C,y,5,ft[28]),C=yt(C,v,w,_,r,9,ft[29]),_=yt(_,C,v,w,h,14,ft[30]),w=yt(w,_,C,v,m,20,ft[31]),v=$t(v,w,_,C,l,4,ft[32]),C=$t(C,v,w,_,u,11,ft[33]),_=$t(_,C,v,w,f,16,ft[34]),w=$t(w,_,C,v,$,23,ft[35]),v=$t(v,w,_,C,n,4,ft[36]),C=$t(C,v,w,_,c,11,ft[37]),_=$t(_,C,v,w,h,16,ft[38]),w=$t(w,_,C,v,g,23,ft[39]),v=$t(v,w,_,C,y,4,ft[40]),C=$t(C,v,w,_,i,11,ft[41]),_=$t(_,C,v,w,o,16,ft[42]),w=$t(w,_,C,v,d,23,ft[43]),v=$t(v,w,_,C,p,4,ft[44]),C=$t(C,v,w,_,m,11,ft[45]),_=$t(_,C,v,w,b,16,ft[46]),w=$t(w,_,C,v,r,23,ft[47]),v=bt(v,w,_,C,i,6,ft[48]),C=bt(C,v,w,_,h,10,ft[49]),_=bt(_,C,v,w,$,15,ft[50]),w=bt(w,_,C,v,l,21,ft[51]),v=bt(v,w,_,C,m,6,ft[52]),C=bt(C,v,w,_,o,10,ft[53]),_=bt(_,C,v,w,g,15,ft[54]),w=bt(w,_,C,v,n,21,ft[55]),v=bt(v,w,_,C,u,6,ft[56]),C=bt(C,v,w,_,b,10,ft[57]),_=bt(_,C,v,w,d,15,ft[58]),w=bt(w,_,C,v,y,21,ft[59]),v=bt(v,w,_,C,c,6,ft[60]),C=bt(C,v,w,_,f,10,ft[61]),_=bt(_,C,v,w,r,15,ft[62]),w=bt(w,_,C,v,p,21,ft[63]),a[0]=a[0]+v|0,a[1]=a[1]+w|0,a[2]=a[2]+_|0,a[3]=a[3]+C|0}_doFinalize(){const t=this._data,e=t.words,s=8*this._nDataBytes,a=8*t.sigBytes;e[a>>>5]|=128<<24-a%32;const i=Math.floor(s/4294967296),n=s;e[15+(a+64>>>9<<4)]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),e[14+(a+64>>>9<<4)]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8),t.sigBytes=4*(e.length+1),this._process();const r=this._hash,o=r.words;for(let t=0;t<4;t+=1){const e=o[t];o[t]=16711935&(e<<8|e>>>24)|4278255360&(e<<24|e>>>8)}return r}clone(){const t=super.clone.call(this);return t._hash=this._hash.clone(),t}}class wt extends at{constructor(t){super(),this.cfg=Object.assign(new at,{keySize:4,hasher:vt,iterations:1},t)}compute(t,e){let s;const{cfg:a}=this,i=a.hasher.create(),n=it.create(),r=n.words,{keySize:o,iterations:c}=a;for(;r.length<o;){s&&i.update(s),s=i.update(t).finalize(e),i.reset();for(let t=1;t<c;t+=1)s=i.finalize(s),i.reset();n.concat(s)}return n.sigBytes=4*o,n}}class _t extends ct{constructor(t,e,s){super(),this.cfg=Object.assign(new at,s),this._xformMode=t,this._key=e,this.reset()}static createEncryptor(t,e){return this.create(this._ENC_XFORM_MODE,t,e)}static createDecryptor(t,e){return this.create(this._DEC_XFORM_MODE,t,e)}static _createHelper(t){const e=t=>"string"==typeof t?Lt:Tt;return{encrypt:(s,a,i)=>e(a).encrypt(t,s,a,i),decrypt:(s,a,i)=>e(a).decrypt(t,s,a,i)}}reset(){super.reset.call(this),this._doReset()}process(t){return this._append(t),this._process()}finalize(t){t&&this._append(t);return this._doFinalize()}}_t._ENC_XFORM_MODE=1,_t._DEC_XFORM_MODE=2,_t.keySize=4,_t.ivSize=4;class Ct extends _t{constructor(...t){super(...t),this.blockSize=1}_doFinalize(){return this._process(!0)}}class Dt extends at{constructor(t,e){super(),this._cipher=t,this._iv=e}static createEncryptor(t,e){return this.Encryptor.create(t,e)}static createDecryptor(t,e){return this.Decryptor.create(t,e)}}function kt(t,e,s){const a=t;let i;const n=this._iv;n?(i=n,this._iv=void 0):i=this._prevBlock;for(let t=0;t<s;t+=1)a[e+t]^=i[t]}class It extends Dt{}It.Encryptor=class extends It{processBlock(t,e){const s=this._cipher,{blockSize:a}=s;kt.call(this,t,e,a),s.encryptBlock(t,e),this._prevBlock=t.slice(e,e+a)}},It.Decryptor=class extends It{processBlock(t,e){const s=this._cipher,{blockSize:a}=s,i=t.slice(e,e+a);s.decryptBlock(t,e),kt.call(this,t,e,a),this._prevBlock=i}};const xt={pad(t,e){const s=4*e,a=s-t.sigBytes%s,i=a<<24|a<<16|a<<8|a,n=[];for(let t=0;t<a;t+=4)n.push(i);const r=it.create(n,a);t.concat(r)},unpad(t){const e=t,s=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=s}};class At extends _t{constructor(t,e,s){super(t,e,Object.assign({mode:It,padding:xt},s)),this.blockSize=4}reset(){let t;super.reset.call(this);const{cfg:e}=this,{iv:s,mode:a}=e;this._xformMode===this.constructor._ENC_XFORM_MODE?t=a.createEncryptor:(t=a.createDecryptor,this._minBufferSize=1),this._mode=t.call(a,this,s&&s.words),this._mode.__creator=t}_doProcessBlock(t,e){this._mode.processBlock(t,e)}_doFinalize(){let t;const{padding:e}=this.cfg;return this._xformMode===this.constructor._ENC_XFORM_MODE?(e.pad(this._data,this.blockSize),t=this._process(!0)):(t=this._process(!0),e.unpad(t)),t}}class St extends at{constructor(t){super(),this.mixIn(t)}toString(t){return(t||this.formatter).stringify(this)}}const Et={stringify(t){let e;const{ciphertext:s,salt:a}=t;return e=a?it.create([1398893684,1701076831]).concat(a).concat(s):s,e.toString(gt)},parse(t){let e;const s=gt.parse(t),a=s.words;return 1398893684===a[0]&&1701076831===a[1]&&(e=it.create(a.slice(2,4)),a.splice(0,4),s.sigBytes-=16),St.create({ciphertext:s,salt:e})}};class Tt extends at{static encrypt(t,e,s,a){const i=Object.assign(new at,this.cfg,a),n=t.createEncryptor(s,i),r=n.finalize(e),o=n.cfg;return St.create({ciphertext:r,key:s,iv:o.iv,algorithm:t,mode:o.mode,padding:o.padding,blockSize:n.blockSize,formatter:i.format})}static decrypt(t,e,s,a){let i=e;const n=Object.assign(new at,this.cfg,a);i=this._parse(i,n.format);return t.createDecryptor(s,n).finalize(i.ciphertext)}static _parse(t,e){return"string"==typeof t?e.parse(t,this):t}}Tt.cfg=Object.assign(new at,{format:Et});const Rt={execute(t,e,s,a){let i=a;i||(i=it.random(8));const n=wt.create({keySize:e+s}).compute(t,i),r=it.create(n.words.slice(e),4*s);return n.sigBytes=4*e,St.create({key:n,iv:r,salt:i})}};class Lt extends Tt{static encrypt(t,e,s,a){const i=Object.assign(new at,this.cfg,a),n=i.kdf.execute(s,t.keySize,t.ivSize);i.iv=n.iv;const r=Tt.encrypt.call(this,t,e,n.key,i);return r.mixIn(n),r}static decrypt(t,e,s,a){let i=e;const n=Object.assign(new at,this.cfg,a);i=this._parse(i,n.format);const r=n.kdf.execute(s,t.keySize,t.ivSize,i.salt);n.iv=r.iv;return Tt.decrypt.call(this,t,i,r.key,n)}}Lt.cfg=Object.assign(Tt.cfg,{kdf:Rt});const Mt=[],Nt=[],Ot=t=>{const e=Math.sqrt(t);for(let s=2;s<=e;s+=1)if(!(t%s))return!1;return!0},qt=t=>4294967296*(t-(0|t))|0;let Bt=2,Ut=0;for(;Ut<64;)Ot(Bt)&&(Ut<8&&(Mt[Ut]=qt(Bt**.5)),Nt[Ut]=qt(Bt**(1/3)),Ut+=1),Bt+=1;const Pt=[];class zt extends lt{_doReset(){this._hash=new it(Mt.slice(0))}_doProcessBlock(t,e){const s=this._hash.words;let a=s[0],i=s[1],n=s[2],r=s[3],o=s[4],c=s[5],l=s[6],d=s[7];for(let s=0;s<64;s+=1){if(s<16)Pt[s]=0|t[e+s];else{const t=Pt[s-15],e=(t<<25|t>>>7)^(t<<14|t>>>18)^t>>>3,a=Pt[s-2],i=(a<<15|a>>>17)^(a<<13|a>>>19)^a>>>10;Pt[s]=e+Pt[s-7]+i+Pt[s-16]}const h=a&i^a&n^i&n,u=(a<<30|a>>>2)^(a<<19|a>>>13)^(a<<10|a>>>22),p=d+((o<<26|o>>>6)^(o<<21|o>>>11)^(o<<7|o>>>25))+(o&c^~o&l)+Nt[s]+Pt[s];d=l,l=c,c=o,o=r+p|0,r=n,n=i,i=a,a=p+(u+h)|0}s[0]=s[0]+a|0,s[1]=s[1]+i|0,s[2]=s[2]+n|0,s[3]=s[3]+r|0,s[4]=s[4]+o|0,s[5]=s[5]+c|0,s[6]=s[6]+l|0,s[7]=s[7]+d|0}_doFinalize(){const t=this._data,e=t.words,s=8*this._nDataBytes,a=8*t.sigBytes;return e[a>>>5]|=128<<24-a%32,e[14+(a+64>>>9<<4)]=Math.floor(s/4294967296),e[15+(a+64>>>9<<4)]=s,t.sigBytes=4*e.length,this._process(),this._hash}clone(){const t=super.clone.call(this);return t._hash=this._hash.clone(),t}}class Ft extends zt{_doReset(){this._hash=new it([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])}_doFinalize(){const t=super._doFinalize.call(this);return t.sigBytes-=4,t}}zt._createHelper(Ft),zt._createHmacHelper(Ft);const jt=[new ut(1116352408,3609767458),new ut(1899447441,602891725),new ut(3049323471,3964484399),new ut(3921009573,2173295548),new ut(961987163,4081628472),new ut(1508970993,3053834265),new ut(2453635748,2937671579),new ut(2870763221,3664609560),new ut(3624381080,2734883394),new ut(310598401,1164996542),new ut(607225278,1323610764),new ut(1426881987,3590304994),new ut(1925078388,4068182383),new ut(2162078206,991336113),new ut(2614888103,633803317),new ut(3248222580,3479774868),new ut(3835390401,2666613458),new ut(4022224774,944711139),new ut(264347078,2341262773),new ut(604807628,2007800933),new ut(770255983,1495990901),new ut(1249150122,1856431235),new ut(1555081692,3175218132),new ut(1996064986,2198950837),new ut(2554220882,3999719339),new ut(2821834349,766784016),new ut(2952996808,2566594879),new ut(3210313671,3203337956),new ut(3336571891,1034457026),new ut(3584528711,2466948901),new ut(113926993,3758326383),new ut(338241895,168717936),new ut(666307205,1188179964),new ut(773529912,1546045734),new ut(1294757372,1522805485),new ut(1396182291,2643833823),new ut(1695183700,2343527390),new ut(1986661051,1014477480),new ut(2177026350,1206759142),new ut(2456956037,344077627),new ut(2730485921,1290863460),new ut(2820302411,3158454273),new ut(3259730800,3505952657),new ut(3345764771,106217008),new ut(3516065817,3606008344),new ut(3600352804,1432725776),new ut(4094571909,1467031594),new ut(275423344,851169720),new ut(430227734,3100823752),new ut(506948616,1363258195),new ut(659060556,3750685593),new ut(883997877,3785050280),new ut(958139571,3318307427),new ut(1322822218,3812723403),new ut(1537002063,2003034995),new ut(1747873779,3602036899),new ut(1955562222,1575990012),new ut(2024104815,1125592928),new ut(2227730452,2716904306),new ut(2361852424,442776044),new ut(2428436474,593698344),new ut(2756734187,3733110249),new ut(3204031479,2999351573),new ut(3329325298,3815920427),new ut(3391569614,3928383900),new ut(3515267271,566280711),new ut(3940187606,3454069534),new ut(4118630271,4000239992),new ut(116418474,1914138554),new ut(174292421,2731055270),new ut(289380356,3203993006),new ut(460393269,320620315),new ut(685471733,587496836),new ut(852142971,1086792851),new ut(1017036298,365543100),new ut(1126000580,2618297676),new ut(1288033470,3409855158),new ut(1501505948,4234509866),new ut(1607167915,987167468),new ut(1816402316,1246189591)],Ht=[];for(let t=0;t<80;t+=1)Ht[t]=new ut;class Vt extends lt{constructor(){super(),this.blockSize=32}_doReset(){this._hash=new pt([new ut(1779033703,4089235720),new ut(3144134277,2227873595),new ut(1013904242,4271175723),new ut(2773480762,1595750129),new ut(1359893119,2917565137),new ut(2600822924,725511199),new ut(528734635,4215389547),new ut(1541459225,327033209)])}_doProcessBlock(t,e){const s=this._hash.words,a=s[0],i=s[1],n=s[2],r=s[3],o=s[4],c=s[5],l=s[6],d=s[7],h=a.high;let u=a.low;const p=i.high;let g=i.low;const f=n.high;let m=n.low;const y=r.high;let $=r.low;const b=o.high;let v=o.low;const w=c.high;let _=c.low;const C=l.high;let D=l.low;const k=d.high;let I=d.low,x=h,A=u,S=p,E=g,T=f,R=m,L=y,M=$,N=b,O=v,q=w,B=_,U=C,P=D,z=k,F=I;for(let s=0;s<80;s+=1){let a,i;const n=Ht[s];if(s<16)n.high=0|t[e+2*s],i=n.high,n.low=0|t[e+2*s+1],a=n.low;else{const t=Ht[s-15],e=t.high,r=t.low,o=(e>>>1|r<<31)^(e>>>8|r<<24)^e>>>7,c=(r>>>1|e<<31)^(r>>>8|e<<24)^(r>>>7|e<<25),l=Ht[s-2],d=l.high,h=l.low,u=(d>>>19|h<<13)^(d<<3|h>>>29)^d>>>6,p=(h>>>19|d<<13)^(h<<3|d>>>29)^(h>>>6|d<<26),g=Ht[s-7],f=g.high,m=g.low,y=Ht[s-16],$=y.high,b=y.low;a=c+m,i=o+f+(a>>>0<c>>>0?1:0),a+=p,i=i+u+(a>>>0<p>>>0?1:0),a+=b,i=i+$+(a>>>0<b>>>0?1:0),n.high=i,n.low=a}const r=N&q^~N&U,o=O&B^~O&P,c=x&S^x&T^S&T,l=A&E^A&R^E&R,d=(x>>>28|A<<4)^(x<<30|A>>>2)^(x<<25|A>>>7),h=(A>>>28|x<<4)^(A<<30|x>>>2)^(A<<25|x>>>7),u=(N>>>14|O<<18)^(N>>>18|O<<14)^(N<<23|O>>>9),p=(O>>>14|N<<18)^(O>>>18|N<<14)^(O<<23|N>>>9),g=jt[s],f=g.high,m=g.low;let y=F+p,$=z+u+(y>>>0<F>>>0?1:0);y+=o,$=$+r+(y>>>0<o>>>0?1:0),y+=m,$=$+f+(y>>>0<m>>>0?1:0),y+=a,$=$+i+(y>>>0<a>>>0?1:0);const b=h+l;z=U,F=P,U=q,P=B,q=N,B=O,O=M+y|0,N=L+$+(O>>>0<M>>>0?1:0)|0,L=T,M=R,T=S,R=E,S=x,E=A,A=y+b|0,x=$+(d+c+(b>>>0<h>>>0?1:0))+(A>>>0<y>>>0?1:0)|0}a.low=u+A,u=a.low,a.high=h+x+(u>>>0<A>>>0?1:0),i.low=g+E,g=i.low,i.high=p+S+(g>>>0<E>>>0?1:0),n.low=m+R,m=n.low,n.high=f+T+(m>>>0<R>>>0?1:0),r.low=$+M,$=r.low,r.high=y+L+($>>>0<M>>>0?1:0),o.low=v+O,v=o.low,o.high=b+N+(v>>>0<O>>>0?1:0),c.low=_+B,_=c.low,c.high=w+q+(_>>>0<B>>>0?1:0),l.low=D+P,D=l.low,l.high=C+U+(D>>>0<P>>>0?1:0),d.low=I+F,I=d.low,d.high=k+z+(I>>>0<F>>>0?1:0)}_doFinalize(){const t=this._data,e=t.words,s=8*this._nDataBytes,a=8*t.sigBytes;e[a>>>5]|=128<<24-a%32,e[30+(a+128>>>10<<5)]=Math.floor(s/4294967296),e[31+(a+128>>>10<<5)]=s,t.sigBytes=4*e.length,this._process();return this._hash.toX32()}clone(){const t=super.clone.call(this);return t._hash=this._hash.clone(),t}}class Wt extends Vt{_doReset(){this._hash=new pt([new ut(3418070365,3238371032),new ut(1654270250,914150663),new ut(2438529370,812702999),new ut(355462360,4144912697),new ut(1731405415,4290775857),new ut(2394180231,1750603025),new ut(3675008525,1694076839),new ut(1203062813,3204075428)])}_doFinalize(){const t=super._doFinalize.call(this);return t.sigBytes-=16,t}}Vt._createHelper(Wt),Vt._createHmacHelper(Wt);const Kt=[],Zt=[],Jt=[];let Yt=1,Xt=0;for(let t=0;t<24;t+=1){Kt[Yt+5*Xt]=(t+1)*(t+2)/2%64;const e=(2*Yt+3*Xt)%5;Yt=Xt%5,Xt=e}for(let t=0;t<5;t+=1)for(let e=0;e<5;e+=1)Zt[t+5*e]=e+(2*t+3*e)%5*5;let Gt=1;for(let t=0;t<24;t+=1){let e=0,s=0;for(let t=0;t<7;t+=1){if(1&Gt){const a=(1<<t)-1;a<32?s^=1<<a:e^=1<<a-32}128&Gt?Gt=Gt<<1^113:Gt<<=1}Jt[t]=ut.create(e,s)}const Qt=[];for(let t=0;t<25;t+=1)Qt[t]=ut.create();
/** @preserve
    (c) 2012 by Cédric Mesnil. All rights reserved.

    Redistribution and use in source and binary forms, with or without modification, are permitted
    provided that the following conditions are met:

        - Redistributions of source code must retain the above copyright notice, this list of
        conditions and the following disclaimer.
        - Redistributions in binary form must reproduce the above copyright notice, this list
        of conditions and the following disclaimer in the documentation and/or other materials
        provided with the distribution.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
    OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
    CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
    DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
    WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY
    WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    */it.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),it.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),it.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),it.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),it.create([0,1518500249,1859775393,2400959708,2840853838]),it.create([1352829926,1548603684,1836072691,2053994217,0]);const te=[],ee=[],se=[],ae=[],ie=[],ne=[],re=[],oe=[],ce=[],le=[],de=[];for(let t=0;t<256;t+=1)de[t]=t<128?t<<1:t<<1^283;let he=0,ue=0;for(let t=0;t<256;t+=1){let t=ue^ue<<1^ue<<2^ue<<3^ue<<4;t=t>>>8^255&t^99,te[he]=t,ee[t]=he;const e=de[he],s=de[e],a=de[s];let i=257*de[t]^16843008*t;se[he]=i<<24|i>>>8,ae[he]=i<<16|i>>>16,ie[he]=i<<8|i>>>24,ne[he]=i,i=16843009*a^65537*s^257*e^16843008*he,re[t]=i<<24|i>>>8,oe[t]=i<<16|i>>>16,ce[t]=i<<8|i>>>24,le[t]=i,he?(he=e^de[de[de[a^e]]],ue^=de[de[ue]]):(ue=1,he=ue)}const pe=[0,1,2,4,8,16,32,64,128,27,54];(class extends At{_doReset(){let t;if(this._nRounds&&this._keyPriorReset===this._key)return;this._keyPriorReset=this._key;const e=this._keyPriorReset,s=e.words,a=e.sigBytes/4;this._nRounds=a+6;const i=4*(this._nRounds+1);this._keySchedule=[];const n=this._keySchedule;for(let e=0;e<i;e+=1)e<a?n[e]=s[e]:(t=n[e-1],e%a?a>6&&e%a==4&&(t=te[t>>>24]<<24|te[t>>>16&255]<<16|te[t>>>8&255]<<8|te[255&t]):(t=t<<8|t>>>24,t=te[t>>>24]<<24|te[t>>>16&255]<<16|te[t>>>8&255]<<8|te[255&t],t^=pe[e/a|0]<<24),n[e]=n[e-a]^t);this._invKeySchedule=[];const r=this._invKeySchedule;for(let e=0;e<i;e+=1){const s=i-e;t=e%4?n[s]:n[s-4],r[e]=e<4||s<=4?t:re[te[t>>>24]]^oe[te[t>>>16&255]]^ce[te[t>>>8&255]]^le[te[255&t]]}}encryptBlock(t,e){this._doCryptBlock(t,e,this._keySchedule,se,ae,ie,ne,te)}decryptBlock(t,e){const s=t;let a=s[e+1];s[e+1]=s[e+3],s[e+3]=a,this._doCryptBlock(s,e,this._invKeySchedule,re,oe,ce,le,ee),a=s[e+1],s[e+1]=s[e+3],s[e+3]=a}_doCryptBlock(t,e,s,a,i,n,r,o){const c=t,l=this._nRounds;let d=c[e]^s[0],h=c[e+1]^s[1],u=c[e+2]^s[2],p=c[e+3]^s[3],g=4;for(let t=1;t<l;t+=1){const t=a[d>>>24]^i[h>>>16&255]^n[u>>>8&255]^r[255&p]^s[g];g+=1;const e=a[h>>>24]^i[u>>>16&255]^n[p>>>8&255]^r[255&d]^s[g];g+=1;const o=a[u>>>24]^i[p>>>16&255]^n[d>>>8&255]^r[255&h]^s[g];g+=1;const c=a[p>>>24]^i[d>>>16&255]^n[h>>>8&255]^r[255&u]^s[g];g+=1,d=t,h=e,u=o,p=c}const f=(o[d>>>24]<<24|o[h>>>16&255]<<16|o[u>>>8&255]<<8|o[255&p])^s[g];g+=1;const m=(o[h>>>24]<<24|o[u>>>16&255]<<16|o[p>>>8&255]<<8|o[255&d])^s[g];g+=1;const y=(o[u>>>24]<<24|o[p>>>16&255]<<16|o[d>>>8&255]<<8|o[255&h])^s[g];g+=1;const $=(o[p>>>24]<<24|o[d>>>16&255]<<16|o[h>>>8&255]<<8|o[255&u])^s[g];g+=1,c[e]=f,c[e+1]=m,c[e+2]=y,c[e+3]=$}}).keySize=8;const ge=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],fe=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],me=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],ye=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],$e=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679];function be(t,e){const s=(this._lBlock>>>t^this._rBlock)&e;this._rBlock^=s,this._lBlock^=s<<t}function ve(t,e){const s=(this._rBlock>>>t^this._lBlock)&e;this._lBlock^=s,this._rBlock^=s<<t}class we extends At{_doReset(){const t=this._key.words,e=[];for(let s=0;s<56;s+=1){const a=ge[s]-1;e[s]=t[a>>>5]>>>31-a%32&1}this._subKeys=[];const s=this._subKeys;for(let t=0;t<16;t+=1){s[t]=[];const a=s[t],i=me[t];for(let t=0;t<24;t+=1)a[t/6|0]|=e[(fe[t]-1+i)%28]<<31-t%6,a[4+(t/6|0)]|=e[28+(fe[t+24]-1+i)%28]<<31-t%6;a[0]=a[0]<<1|a[0]>>>31;for(let t=1;t<7;t+=1)a[t]>>>=4*(t-1)+3;a[7]=a[7]<<5|a[7]>>>27}this._invSubKeys=[];const a=this._invSubKeys;for(let t=0;t<16;t+=1)a[t]=s[15-t]}encryptBlock(t,e){this._doCryptBlock(t,e,this._subKeys)}decryptBlock(t,e){this._doCryptBlock(t,e,this._invSubKeys)}_doCryptBlock(t,e,s){const a=t;this._lBlock=t[e],this._rBlock=t[e+1],be.call(this,4,252645135),be.call(this,16,65535),ve.call(this,2,858993459),ve.call(this,8,16711935),be.call(this,1,1431655765);for(let t=0;t<16;t+=1){const e=s[t],a=this._lBlock,i=this._rBlock;let n=0;for(let t=0;t<8;t+=1)n|=ye[t][((i^e[t])&$e[t])>>>0];this._lBlock=i,this._rBlock=a^n}const i=this._lBlock;this._lBlock=this._rBlock,this._rBlock=i,be.call(this,1,1431655765),ve.call(this,8,16711935),ve.call(this,2,858993459),be.call(this,16,65535),be.call(this,4,252645135),a[e]=this._lBlock,a[e+1]=this._rBlock}}we.keySize=2,we.ivSize=2,we.blockSize=2;class _e extends At{_doReset(){const t=this._key.words;if(2!==t.length&&4!==t.length&&t.length<6)throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");const e=t.slice(0,2),s=t.length<4?t.slice(0,2):t.slice(2,4),a=t.length<6?t.slice(0,2):t.slice(4,6);this._des1=we.createEncryptor(it.create(e)),this._des2=we.createEncryptor(it.create(s)),this._des3=we.createEncryptor(it.create(a))}encryptBlock(t,e){this._des1.encryptBlock(t,e),this._des2.decryptBlock(t,e),this._des3.encryptBlock(t,e)}decryptBlock(t,e){this._des3.decryptBlock(t,e),this._des2.encryptBlock(t,e),this._des1.decryptBlock(t,e)}}function Ce(){const t=this._S;let e=this._i,s=this._j,a=0;for(let i=0;i<4;i+=1){e=(e+1)%256,s=(s+t[e])%256;const n=t[e];t[e]=t[s],t[s]=n,a|=t[(t[e]+t[s])%256]<<24-8*i}return this._i=e,this._j=s,a}_e.keySize=6,_e.ivSize=2,_e.blockSize=2;class De extends Ct{_doReset(){const t=this._key,e=t.words,s=t.sigBytes;this._S=[];const a=this._S;for(let t=0;t<256;t+=1)a[t]=t;for(let t=0,i=0;t<256;t+=1){const n=t%s,r=e[n>>>2]>>>24-n%4*8&255;i=(i+a[t]+r)%256;const o=a[t];a[t]=a[i],a[i]=o}this._j=0,this._i=this._j}_doProcessBlock(t,e){t[e]^=Ce.call(this)}}function ke(t,e,s,a){const i=t;let n;const r=this._iv;r?(n=r.slice(0),this._iv=void 0):n=this._prevBlock,a.encryptBlock(n,0);for(let t=0;t<s;t+=1)i[e+t]^=n[t]}De.keySize=8,De.ivSize=0;class Ie extends Dt{}Ie.Encryptor=class extends Ie{processBlock(t,e){const s=this._cipher,{blockSize:a}=s;ke.call(this,t,e,a,s),this._prevBlock=t.slice(e,e+a)}},Ie.Decryptor=class extends Ie{processBlock(t,e){const s=this._cipher,{blockSize:a}=s,i=t.slice(e,e+a);ke.call(this,t,e,a,s),this._prevBlock=i}};class xe extends Dt{}xe.Encryptor=class extends xe{processBlock(t,e){const s=t,a=this._cipher,{blockSize:i}=a,n=this._iv;let r=this._counter;n&&(this._counter=n.slice(0),r=this._counter,this._iv=void 0);const o=r.slice(0);a.encryptBlock(o,0),r[i-1]=r[i-1]+1|0;for(let t=0;t<i;t+=1)s[e+t]^=o[t]}},xe.Decryptor=xe.Encryptor;const Ae=t=>{let e=t;if(255==(t>>24&255)){let s=t>>16&255,a=t>>8&255,i=255&t;255===s?(s=0,255===a?(a=0,255===i?i=0:i+=1):a+=1):s+=1,e=0,e+=s<<16,e+=a<<8,e+=i}else e+=1<<24;return e};
/** @preserve
     * Counter block mode compatible with  Dr Brian Gladman fileenc.c
     * derived from CryptoJS.mode.CTR
     * Jan Hruby jhruby.web@gmail.com
     */
class Se extends Dt{}Se.Encryptor=class extends Se{processBlock(t,e){const s=t,a=this._cipher,{blockSize:i}=a,n=this._iv;let r=this._counter;n&&(this._counter=n.slice(0),r=this._counter,this._iv=void 0),(t=>{const e=t;e[0]=Ae(e[0]),0===e[0]&&(e[1]=Ae(e[1]))})(r);const o=r.slice(0);a.encryptBlock(o,0);for(let t=0;t<i;t+=1)s[e+t]^=o[t]}},Se.Decryptor=Se.Encryptor;class Ee extends Dt{}Ee.Encryptor=class extends Ee{processBlock(t,e){this._cipher.encryptBlock(t,e)}},Ee.Decryptor=class extends Ee{processBlock(t,e){this._cipher.decryptBlock(t,e)}};class Te extends Dt{}Te.Encryptor=class extends Te{processBlock(t,e){const s=t,a=this._cipher,{blockSize:i}=a,n=this._iv;let r=this._keystream;n&&(this._keystream=n.slice(0),r=this._keystream,this._iv=void 0),a.encryptBlock(r,0);for(let t=0;t<i;t+=1)s[e+t]^=r[t]}},Te.Decryptor=Te.Encryptor;const Re=t=>`0${t}`.slice(-2),Le=t=>`0${t}`.slice(-4),Me=t=>{if(t.endsWith(" GMT")&&23===t.length)return new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T${t.substring(9,11)}:${t.substring(11,13)}:${t.substring(13,19)}Z`);if(8===t.length){let e=new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T00:00:00.000Z`);return e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),e}if(10===t.length){let e=new Date(`${t.substring(6,10)}-${t.substring(0,2)}-${t.substring(3,5)}T00:00:00.000Z`);return e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),e}return null},Ne=t=>t&&"string"==typeof t?t.replace(/&amp;|&lt;|&gt;|&#39;|&#40;|&#41;|&quot;/g,(t=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&#40;":"(","&#41;":")","&quot;":'"'}[t]||t))):"",Oe=(t,e,s,a,i)=>{if("string"!=typeof e)return;if(a){const t=Be(a,e);if(t===i||`${t}`==`${i}`||null===t&&""===i)return}const n=e.lastIndexOf(".");if(-1===n)return void(t[e]=i);if(!s)return void qe(t,e,i);const r={};let o=e.substring(0,n);r[e.substring(n+1)]=i;const c=o.indexOf("(");if(-1===c)s.push({instruction:"UPDATE",target:o,content:r});else{const t=o.substring(c+1,o.length-1);o=o.substring(0,c),s.push({instruction:"UPDATE",target:o,listIndex:parseInt(t,10),content:r})}},qe=(t,e,s)=>{if("string"!=typeof e)return;const a=e.split(".");let i=t;for(const t in a){let e=a[t];const n=e.indexOf("(");if(-1===n)t<a.length-1?void 0===i[e]&&(i[e]={}):i[e]=s,i=i[e];else{const t=e.substring(n+1,e.length-1);e=e.substring(0,n),void 0===i[e]&&(i[e]=[]);for(let s=i[e].length;s<t;s++)i[e].push({});i=i[e][t-1]}}},Be=(t,e)=>{if("string"!=typeof e||""===e)return null;let s=e;0===e.indexOf(".")&&(s=e.substring(1));let a=t;const i=s.split(".");for(const t in i){const e=i[t],s=e.indexOf("(");if(-1===s){if(void 0===a[e])return null;a=a[e]}else{const t=e.substring(s+1,e.length-1),i=a[e.substring(0,s)];if(!(i&&Array.isArray(i)&&i.length>=t))return null;a=i[t-1]}}return a},Ue=t=>{for(const e in t)"object"==typeof t[e]?Ue(t[e]):"string"==typeof t[e]&&(t[e]="")},Pe=(t,e)=>{for(const s in t)if("fieldID"===s)e.push(t.fieldID);else{const a=t[s];a.fieldID?e.push(a.fieldID):"object"==typeof a&&Pe(a,e)}},ze=(t,e,s)=>{let a=Be(t,e);if(null===a&&(a=[],qe(t,e,a)),!Array.isArray(a))return null;if(s&&"string"==typeof s){const t={},i=s.split(",");for(const e in i)t[i[e]]="";return a.push(t),{instruction:"APPEND",target:e,content:t}}if(0===a.length)return null;const i={...a[0]};return Ue(i),a.push(i),{instruction:"APPEND",target:e,content:i}},Fe=(t,e)=>{let s,a=e;-1!==e.indexOf(").pyTemplate")&&(s=parseInt(a.substring(e.lastIndexOf("(")+1,e.lastIndexOf(")")),10),a=a.substring(0,e.lastIndexOf("(")));const i=Be(t,a);if(!Array.isArray(i))return null;if(1===i.length){for(const t in i[0])"pxObjClass"!==t&&(i[0][t]="");return null}return s?i.length<s?null:(i.splice(s-1,1),{instruction:"DELETE",target:a,listIndex:s}):(i.length-=1,{instruction:"DELETE",target:a,listIndex:i.length})},je=(t,e)=>{const s=t.getAttribute(`data-action-${e}`);return!(!s||"postValue"!==s&&0!==s.indexOf("refresh"))},He=(t,e)=>{const s=t.getAttribute(`data-action-${e}`);return s&&0===s.indexOf("refresh")?s.replace("refresh-",""):""};function Ve(t,e,s){try{switch(e){case">":return parseInt(t,10)>parseInt(s,10);case"<":return parseInt(t,10)<parseInt(s,10);case">=":return parseInt(t,10)>=parseInt(s,10);case"<=":return parseInt(t,10)<=parseInt(s,10);case"==":return`${t}`==`${s}`;case"!=":return`${t}`!=`${s}`}}catch(t){}return!1}const We=(t,e,s)=>{const a=t.replace("@E ","").split("&&");for(const t in a){const i=a[t].trim().match(/[\w.]+|[><=!]+|'[^']+'/g);if(3===i.length){const t=""===s?e[i[0].substring(1)]:Be(e,s+i[0]);if(void 0!==t&&!Ve(t,i[1],i[2].replace(/^'|'$/g,"")))return!1}}return!0},Ke=(t,e,s,a)=>{for(const i of t.elements)if("INPUT"===i.tagName||"TEXTAREA"===i.tagName||"SELECT"===i.tagName){const t=i.getAttribute("data-ref");if(null!==t&&"pyID"!==t)if("INPUT"===i.tagName){const n=i.getAttribute("type");if(i.classList.contains("input-date-day")||i.classList.contains("input-date-month")||i.classList.contains("input-date-year")){if(i.classList.contains("input-date-day")){const n=i.closest(".input-date").parentNode,r=n.querySelector(".input-date-month"),o=n.querySelector(".input-date-year");if(null!==r&&null!==o&&""!==i.value&&""!==r.value&&""!==o.value){const n=`${Re(r.value)}/${Re(i.value)}/${Le(o.value)}`;Oe(e,t,s,a,n)}}}else if("checkbox"===n)Oe(e,t,s,a,i.checked);else if("radio"===n)i.checked&&Oe(e,t,s,a,i.value);else if("tel"===n){let n=i.value;"SELECT"===i.parentNode.firstElementChild.tagName&&"field-countrycode"===i.parentNode.firstElementChild.className&&(n=i.parentNode.firstElementChild.value+n),Oe(e,t,s,a,n)}else if("date"===n){let n;i.valueAsDate&&(n=new Date(i.valueAsDate)),n&&n instanceof Date&&n.getTime()==n.getTime()||(n=new Date(i.value)),n&&n instanceof Date&&n.getTime()==n.getTime()?(n=new Date(n.getTime()+6e4*n.getTimezoneOffset()),Oe(e,t,s,a,`${Re(n.getMonth()+1)}/${Re(n.getDate())}/${n.getFullYear()}`)):Oe(e,t,s,a,i.value)}else Oe(e,t,s,a,i.value)}else Oe(e,t,s,a,i.value)}if(t&&t.querySelectorAll){const n=t.querySelectorAll("[contenteditable]");for(let t=0;t<n.length;t++){const r=n[t],o=r.getAttribute("data-ref");Oe(e,o,s,a,(i=r.innerHTML)&&"string"==typeof i?i.replace(/[&<>'"]/g,(t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","(":"&#40;",")":"&#41;",'"':"&quot;"}[t]||t))):"")}}var i},Ze=(t,e,s)=>{for(const a of t.elements)if("INPUT"===a.tagName||"TEXTAREA"===a.tagName||"SELECT"===a.tagName){const t=`.${a.getAttribute("data-ref")}`;if(null!==t&&"pyID"!==t)for(const i in e){if(e[i].Path===t){s.setInlineError(a,e[i].ValidationMessage);break}if(e[i].erroneousInputOutputFieldInPage===t){s.setInlineError(a,e[i].localizedValue);break}}}},Je=(t,e)=>{const s=e||[],a={};for(const[e,i]of Object.entries(t))if("string"==typeof i||"boolean"==typeof i)a[e]=i;else if("object"==typeof i&&Array.isArray(i))for(const t in i){const a={instruction:"UPDATE",target:e,listIndex:parseInt(t,10)+1,content:i[t]};s.push(a)}return{pageInstructions:s,pageupdate:a}},Ye=(t,e,s,a,i)=>{if(null==a)return null;let n;const r=`${Math.random().toString(36).substr(2,9)}`,o=document.createElement("ul");o.setAttribute("id",`menu-overlay-${r}`),o.setAttribute("role","menu"),o.setAttribute("aria-labelledby",`menubutton-${r}`),o.setAttribute("tabindex","-1");const c=()=>{document.body.removeEventListener("click",d),document.body.removeEventListener("keydown",l),o&&(o.previousElementSibling&&(o.previousElementSibling.setAttribute("aria-expanded","false"),o.previousElementSibling.focus()),o.remove())},l=t=>{38===t.keyCode?(n=n.previousElementSibling,null===n&&(n=o.lastElementChild),n.focus()):40===t.keyCode?(n=n.nextElementSibling,null===n&&(n=o.firstElementChild),n.focus()):27===t.keyCode||9===t.keyCode?c():13===t.keyCode&&(a(t),c())},d=t=>{if(t){let e=t.target;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&e.nextElementSibling===o)return;e.parentNode===o&&a(t),c()}},h=t=>{if("keydown"===t.type&&40!==t.keyCode)return;if(t.preventDefault(),t.stopPropagation(),"blur"===t.type)return void d(t);const e=t.currentTarget;"BUTTON"!==e.tagName?(a(t),c()):null===e.nextElementSibling?(e.parentNode.appendChild(o),e.setAttribute("aria-expanded","true"),M(s(),o),n=e.nextElementSibling.firstElementChild,n.focus(),document.body.addEventListener("click",d),document.body.addEventListener("keydown",l)):c()};return E`
    <div class="button-menu">
    <button type='button' id="${`menubutton-${r}`}" aria-haspopup="true" aria-controls="${`menu-overlay-${r}`}" aria-expanded="false"
    @click="${h}" @keydown="${h}" @blur="${h}"
    class="${`pzhc pzbutton Simple ${i||"action-menu"}`}" aria-label="${i18n.t(e)}">${i18n.t(t)}</button>
    </div>
  `},Xe=(t,e,s,a,i)=>{let n=0;const r=t=>{if(void 0===t||"string"==typeof t&&""===t)return;if("URL"===e[n].category)return void window.open(t);let s=e[n].fileName;if(void 0===s&&(s=e[n].name),void 0===s&&(s=e[n].pyAttachName),!s)return;const a=window.document.createElement("a");if("Correspondence"===e[n].category){s=`${e[n].name}.html`;const i=`<html><head><title>${e[n].name}</title></head><body>${t}</body></html>`,r=new Blob([i],{type:"text"});a.href=window.URL.createObjectURL(r)}else{const e=function(t){const e=window.atob(t),s=e.length,a=new Uint8Array(s);for(let t=0;t<s;t++){const s=e.charCodeAt(t);a[t]=s}return a}(t),s=new Blob([e],{type:"octet/stream"});a.href=window.URL.createObjectURL(s)}a.download=s,document.body.appendChild(a),a.click(),document.body.removeChild(a)},o=t=>{t.stopPropagation();const s=t.target;n=s.getAttribute("data-id"),a.fetchData.call(a,"attachment",{id:e[n].ID,target:r})},c=s=>{s.preventDefault(),s.stopPropagation();const i=s.target.closest("button");n=i.getAttribute("data-id"),a.sendData.call(a,"deleteattachment",{id:e[n].ID,target:t})},l=r=>{r.stopPropagation();const o=r.target.closest("button");n=parseInt(o.getAttribute("data-id"),10),i.splice(n,1),M(Xe(t,e,s,a,i),t)},d=t=>{t.stopPropagation(),t.preventDefault();const e=t.target;if(n=e.getAttribute("data-id"),"INPUT"===e.tagName){const t=e.getAttribute("data-prop-id");i[n][t]=e.value}else"SELECT"===e.tagName&&(i[n].category=e.value)},h=e=>{e.preventDefault();const s=e.target,a=e.relatedTarget,i=null===s?null:s.closest(".attach-files"),n=null===a?null:a.closest(".attach-files");if("dragenter"===e.type||"dragover"===e.type?null!=i&&i.classList.add("drop-file-hover"):"dragleave"!==e.type&&"drop"!==e.type||null===n&&null!==i&&i.classList.remove("drop-file-hover"),"drop"===e.type){const a=e.dataTransfer.files;t||(t=s.closest(".attach-files")),p(s,a)}},u=n=>{n&&(n.stopPropagation(),n.preventDefault());for(let n=0;n<i.length;n++){const r=i[n];delete r.editing,r.loading=!0,"URL"===r.type?(e.unshift(r),a.sendData.call(a,"attachments",{id:s,actionid:[r],target:t})):(e.unshift({name:r.displayName,extension:r.extension,loading:!0}),a.sendData.call(a,"uploadattachment",{actionid:r,target:t}))}M(Xe(t,e,s,a),t)},p=(i,n)=>{const r=[];for(let t=0;t<n.length;t++){const e=n[t];let s=e.name.lastIndexOf(".");-1===s&&(s=e.name.length),e.displayName=e.name.substring(0,s),e.extension=e.name.substring(s+1),e.editing=!0,e.category="File",r.push(e)}M(Xe(t,e,s,a,r),t)},g=e=>{e.stopPropagation();let s=e.target;if("BUTTON"===s.tagName)return s=e.target.parentNode.parentNode.firstElementChild,void s.click();t||(t=s.closest(".attach-files")),p(s,s.files)},f=i=>{i.stopPropagation();M(Xe(t,e,s,a,[{type:"URL",category:"URL",name:"",url:"",editing:!0}]),t)},m=i=>{i.stopPropagation(),M(Xe(t,e,s,a),t)},y=(t,e)=>{let s=new Date(e.createTime);return s=s.toLocaleDateString(void 0,{year:"numeric",month:"numeric",day:"numeric"}),E`
    <div class='list-item-title'>
      <button type='button' class='Light'  data-id="${t}" @click="${o}">${e.name}</button>
      ${e.loading?"":E`
      <span class='list-item-meta'><span>${e.createdBy}</span><span>${s}</span><span>${i18n.t("Category:")} ${e.category}</span></span>`}
    </div>`},$=()=>E`<li role="menuitem" tabindex="-1" data-value="Download">${i18n.t("Download")}</li>
  <li role="menuitem" tabindex="-1" data-value="Delete">${i18n.t("Delete")}</li>`,b=i=>{let o=i.target;if(i.path&&i.path.length>0?o=i.path[0]:i.originalTarget&&(o=i.originalTarget),o){const i=o.getAttribute("data-value"),c=e[n].pzInsKey||e[n].ID;"Download"===i?a.fetchData.call(a,"attachment",{id:c,target:r}):"Delete"===i&&(a.sendData.call(a,"deleteattachment",{id:c,target:t}),M(Xe(void 0,[],s,a,[]),t))}},v=t=>E`<div class='row-item'>
    <span class='doc-icon'>${st()}<span>${t.extension}</span></span>
    <div class='list-item-title'><span>${t.pyAttachName||t.name}</span>
    <span class="list-item-meta"><span>${t.pyCategoryName||t.category}</span>
    <span>${t.pxCreateOperator||t.createdBy}</span></span></div>
    ${Ye(E`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
<path d="M14.353125,6.353125 C13.9703125,6.7359375 13.4914062,6.928125 12.9640625,6.928125 C12.4367188,6.928125 11.9585938,6.73671875 11.575,6.353125 C11.1921875,5.9703125 11,5.49140625 11,4.9640625 C11,4.43671875 11.1914062,3.95859375 11.575,3.575 C11.9578125,3.1921875 12.4367188,3 12.9640625,3 C13.4914063,3 13.9695312,3.19140625 14.353125,3.575 C14.7359375,3.9578125 14.928125,4.43671875 14.928125,4.9640625 C14.928125,5.49140625 14.7367187,5.96953125 14.353125,6.353125 Z M14.353125,13.7289063 C13.9703125,14.1117188 13.4914062,14.3039063 12.9640625,14.3039063 C12.4367188,14.3039063 11.9585938,14.1125 11.575,13.7289063 C11.1921875,13.3460938 11,12.8671875 11,12.3398438 C11,11.8125 11.1914062,11.334375 11.575,10.9507813 C11.9578125,10.5679688 12.4367188,10.3757813 12.9640625,10.3757813 C13.4914063,10.3757813 13.9695312,10.5671875 14.353125,10.9507813 C14.7359375,11.3335938 14.928125,11.8125 14.928125,12.3398438 C14.928125,12.8671875 14.7367187,13.3453125 14.353125,13.7289063 Z M14.353125,21.1039062 C13.9703125,21.4867187 13.4914062,21.6789062 12.9640625,21.6789062 C12.4367188,21.6789062 11.9585938,21.4875 11.575,21.1039062 C11.1921875,20.7210938 11,20.2421875 11,19.7148438 C11,19.1875 11.1914062,18.709375 11.575,18.3257813 C11.9578125,17.9429688 12.4367188,17.7507813 12.9640625,17.7507813 C13.4914063,17.7507813 13.9695312,17.9421875 14.353125,18.3257813 C14.7359375,18.7085937 14.928125,19.1875 14.928125,19.7148438 C14.928125,20.2421875 14.7367187,20.7203125 14.353125,21.1039062 Z"></path>
</svg>`,"Actions",$,b,"button-action")}
  </div>`,w=(t,e)=>e.loading?E`${y(t,e)}${G()}`:e.editing?"URL"===e.type?E`
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
    ${a.attachmentcategories.map((t=>E`
      <option ?selected=${t.ID===e}>${t.ID}</option>
    `))}
    </select>`)(t,e.category)}
      <span class='flex-all'>${e.name}</span>
      <span>${Math.round(e.size/1e3)}Kb</span>
      <button type='button' data-id="${t}" @click="${l}" class='pzhc pzbutton Simple'
      aria-label=${i18n.t("Delete")}>${tt()}</button>`:E`${y(t,e)}
    <button type='button' data-id="${t}" @click="${c}" class='pzhc pzbutton Simple'
    aria-label=${i18n.t("Delete")}>${tt()}</button>`,_=t=>{if(!s)return G();const e=[];if(void 0!==t){const s=Object.entries(t);for(const t of s){let s=t[1].extension;void 0===s&&(s=t[1].type),s||(s=""),s.length>5&&(s=s.substring(0,5)),"URL"===t[1].type&&t[1].editing?e.push(E`<div class='flex layout-content-stacked content-items-maxwidth'>
              ${w(t[0],t[1])}
            </div>`):e.push(E`<div class='row-item'>
              <span class='doc-icon'>${st()}<span>${s}</span></span>
              ${w(t[0],t[1])}
            </div>`)}}return e&&e.length>0?e:E`<div class='empty'>${i18n.t("no attachments found")}</div>`};if(!t){if(e&&e.length>0&&e[0].pyAttachName){n=0,e[0].extension="";const t=e[0].pyAttachName.split(".");return t.length>1&&(e[0].extension=t[t.length-1]),v(e[0])}return E`<div @dragenter="${h}" @dragover="${h}" @dragleave="${h}"
    @drop="${h}" class='attach-files list-items'>
      <div class="file-upload">
        <input @change="${g}" type="file">
        ${et()}<span>${i18n.t(" Drag and drop or ")}
        <button type='button' aria-labelledby='${i18n.t("click to attach a file")}' class='Light' @click="${g}">${i18n.t("choose file")}</button>
      </div>
    </div>`}if(t&&t.classList.contains("attach-files")){if(i&&i.length>0)return a.sendData.call(a,"uploadattachment",{actionid:i[0],target:t}),C=i[0],D=!0,E`<div class='row-item'>
    <span class='doc-icon'>${st()}<span>${C.extension}</span></span>
    <div class='list-item-title'><span>${C.displayName}</span>${D?E`<span class="list-item-meta"><span>
    ${i18n.t("Uploading...")}</span></span>`:""}</div>
  </div>`;if(e&&e.length>0)return v(e[0])}var C,D;let k="Attachments";return void 0!==i&&i.length>0&&(k="URL"===i[0].type?"Attach a link":"Attach files"),E`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${i18n.t(k)}</h2>
      <div class="flex layout-content-inline_middle margin-l-auto">
        <button type='button' data-action-id='close'
        class="pzhc pzbutton Simple" aria-label="${i18n.t("Close modal")}">${Q()}</button>
      </div>
    </div>
    ${void 0!==i&&i.length>0?E`
      <div id="modalcontent" class='attach-files list-items'>
        <div class='upload-content'>${_(i)}</div>
        <div class="action-button-area">
          <button type="button" class="pzhc pzbutton" @click="${m}">${i18n.t("Cancel")}</button>
          <button type="button" class="Strong pzhc pzbutton" @click="${u}">${i18n.t("Upload")}</button>
        </div>
      </div>`:E`
      <form id="modalcontent" @dragenter="${h}" @dragover="${h}" @dragleave="${h}"
      @drop="${h}" class='attach-files list-items'>
        <div class="file-upload">
          <input @change="${g}" type="file" multiple="">
          ${et()}<span>${i18n.t(" Drag and drop files, attach ")}
          <button type='button' aria-label='${i18n.t("click to attach a file")}' class='Light' @click="${g}">
          ${i18n.t("files")}</button> ${i18n.t("or add a")}
          <button type='button' aria-label='${i18n.t("click to add a URL link")}' class='Light' @click="${f}">
          ${i18n.t("link")}</button></span>
        </div>
        ${_(e)}
      </form>
    `}
  `};class Ge extends Y{static get properties(){return{url:{},caseID:{},username:{},password:{},title:{},bShowCreate:{},bShowCancel:{},bShowAttachments:{},bShowSave:{},authentication:{},token:{},clientid:{},clientsecret:{},initialContent:{},action:{},casetype:{},portalName:{},langTokens:{}}}constructor(){super(),this.url="",this.title="My worklist",this.caseID="",this.username="",this.password="",this.bShowCreate="true",this.bShowCancel="true",this.bShowAttachments="false",this.bShowSave="true",this.authentication="",this.token="",this.clientid="",this.clientsecret="",this.initialContent="",this.action="",this.casetype="",this.portalName="",this.cases=[],this.dataPages={},this.name="",this.etag="",this.casepyStatusWork="",this.casedata={},this.data={},this.numAttachments=0,this.attachmentcategories=[],this.assignmentID="",this.actionID="",this.content={},this.pageInstructions=[],this.errorMsg="",this.validationMsg="",this.bShowConfirm=!1,this.bShowNew=!1,this.refreshOnChange=!1,this.isDeclarativeTarget=!1;const t=this;window.i18n||(window.i18n={t:function(e){if(!e)return"";if("string"!=typeof e)return e;let s=e;if(0===s.indexOf("@L ")&&(s=s.substring(3)),s=s.replace(/^"|"$/g,"").trim(),s=Ne(s),"object"!=typeof t.langTokens)return s;const a=t.langTokens[s];return a&&""!==a?a.trim():(console.log(s),s)}})}clearLoadingIndicator(){const t=this.getRenderRoot().querySelector("#case-data");t&&null!==t.querySelector(".loading")&&M(null,t)}sendExternalEvent(t){this.dispatchEvent(new CustomEvent("message",{detail:{...t}}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const Qe=2;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
class ts extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(t){if(super(t),this.it=R,t.type!==Qe)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===R||null==t)return this.ft=void 0,this.it=t;if(t===T)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}ts.directiveName="unsafeHTML",ts.resultType=1;const es=(t=>(...e)=>({_$litDirective$:t,values:e}))(ts),ss=t=>null!=t?t:R,as=(t,e)=>{const s=[],a=Object.entries(e.actions);for(const e of a)e[1].name!==t&&s.push(E`
          <li role="menuitem" tabindex="-1" data-value="${e[1].ID}">${e[1].name}</li>
        `);return E`
    ${s}
  `};
/**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class is extends Ge{genErrorMessage(t){this.clearLoadingIndicator(),t.message&&-1!==t.message.indexOf("JSON.parse")?console.error("Error:",t):t.message&&-1!==t.message.indexOf("Unexpected token")?(this.errorMsg="Error 404: Resource not found",this.requestUpdate(),console.error(this.errorMsg)):(t.status?""!==t.statusText?this.errorMsg=`Error ${t.status}: ${t.statusText}`:401===t.status?this.errorMsg="Error 401: Authentication error":500===t.status?this.errorMsg="Error 500: Internal server error":this.errorMsg=`Error ${t.status}`:t.name&&t.message?this.errorMsg=`Error ${t.name}: ${t.message}`:this.errorMsg="string"==typeof t?t:"Critical error",this.requestUpdate(),console.error("Error:",t))}submitForm=(t,e)=>{if(t.preventDefault(),t.target&&null!==t.target.closest(".mashup-modal")){const e=t.target.closest("#modalcontent");Ke(e,this.content,this.pageInstructions,this.casedata.content),this.validateForm(e)?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID,target:e}):this.reportFormValidity(e)}else{const t=this.getRenderRoot().querySelector("#case-data");Ke(t,this.content,this.pageInstructions,this.casedata.content),this.validateForm(t)?"create"!==e?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID}):this.sendData("newwork",{id:this.casetype}):this.reportFormValidity(t)}return!1};resetError=t=>{this.errorMsg="",this.validationMsg="",this.actionAreaCancel(t)};reloadWorkList=t=>{this.cases=[],this.requestUpdate(),this.actionAreaCancel(t)};actionAreaCancel=t=>{if(t&&t.preventDefault(),t.target&&null!==t.target.closest(".mashup-modal")){const e=t.target.closest(".mashup-modal").querySelector("button");if(null!==e)return void e.click()}this.bShowConfirm=!1,this.bShowNew=!1,this.caseID="",this.data={},this.content={},this.pageInstructions=[],this.casedata={},this.attachmentcategories=[],this.casepyStatusWork="",this.assignmentID="",this.actionID="",this.errorMsg="",this.numAttachments=0,this.validationMsg="",this.name="","workList"===this.action&&this.fetchData("worklist"),this.sendExternalEvent({type:"cancel"})};actionAreaSave=t=>{t&&t.preventDefault(),null===t.target.getAttribute("data-submit")&&(t.target.textContent="Saving...",t.target.disabled=!0);const e=this.getRenderRoot().querySelector("#case-data");e&&(Ke(e,this.content,this.pageInstructions,this.casedata.content),""!==this.assignmentID?this.sendData("savecase",{id:this.caseID,actionid:"",target:t.target}):this.sendData("savecase",{id:this.caseID,actionid:this.actionID,target:t.target}))};actionRefresh=()=>{const t=this.getRenderRoot().querySelector("#case-data");t&&(this.validationMsg="",Ke(t,this.content,this.pageInstructions,this.casedata.content),""!==this.assignmentID?this.fetchData("assignmentaction",{id:this.assignmentID,actionid:this.actionID}):this.fetchData("caseaction",{id:this.caseID,actionid:this.actionID}))};displayCasesTypes=()=>(t=>{const e=[],s=Object.entries(t);for(const t of s)"true"===t[1].canCreate&&e.push(E`
          <li role="menuitem" tabindex="-1" data-value="${t[0]}">${t[1].name}</li>
        `);return E`
    ${e}
  `})(this.casetypes);displayActions=()=>this.data.actions?as(this.name,this.data):this.casedata.actions?as(this.name,this.casedata):null;displayAttachments=t=>{this.fetchData("attachmentcategories",{id:this.caseID}),this.fetchData("attachments",{id:this.caseID,target:t})};displayLocalAction=(t,e)=>{const s=this.getRenderRoot().querySelector("#case-data");if(s&&(Ke(s,this.content,this.pageInstructions,this.casedata.content),""!==this.assignmentID)){const s=this;this.sendData("savecase",{id:this.caseID},(()=>{this.actionID=t,s.fetchData("assignmentaction",{id:this.assignmentID,actionid:t,target:e})}))}};reloadAssignment=t=>{this.actionID=t,this.fetchData("assignmentaction",{id:this.assignmentID,actionid:t})};createCase=t=>{if(this.name="New Case",this.bShowNew=!0,t){let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&(this.casetype=e.getAttribute("data-value"),this.name=`New ${e.textContent} `)}this.content=this.initialContent,this.pageInstructions=[],this.caseID="",this.data={},this.casedata={},this.casetypes[this.casetype]?"true"===this.casetypes[this.casetype].requiresFieldsToCreate?this.fetchData("newwork",{id:this.casetype}):this.sendData("newwork",{id:this.casetype}):(this.errorMsg=`Case '${this.casetype}' is not defined`,console.error(`Case '${this.casetype}' is not defined`)),this.requestUpdate()};runAction=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&null!==e.getAttribute("data-value")&&(this.actionID=e.getAttribute("data-value"),this.actionRefresh());const s=this.getRenderRoot().querySelector("#case-data");null!=s&&M(G(),s)};openCase=t=>{t.preventDefault(),this.caseID=t.target.getAttribute("data-id"),this.name="",this.data={},this.casedata={},0===this.caseID.indexOf("ASSIGN-WORKLIST")?(this.sendExternalEvent({type:"openassignment",id:this.caseID}),this.assignmentID=this.caseID,this.caseID=""):(this.sendExternalEvent({type:"opencase",id:this.caseID}),this.assignmentID="");const e=this.getRenderRoot().querySelector("#case-data");null!=e&&M(G(),e),this.requestUpdate()};getData=(t,e)=>{var s;this.dataPages[t]?M((s=this.dataPages[t],E`
${s.pxResults.map((t=>E`
    <option>
      ${t.pyUserName}
    </option>`))}`),e.nextElementSibling):this.fetchData("data",{id:t,element:e})};refreshAssignment=(t,e)=>{const s=this.getRenderRoot().querySelector("#case-data");let a=t;if(s){if(Ke(s,this.content,this.pageInstructions,this.casedata.content),a){"path"===a.tagName&&(a=a.parentNode),"svg"===a.tagName&&(a=a.parentNode);const t=a.getAttribute("data-action-click"),e=a.getAttribute("data-ref");if(null!==e&&null!==t)if("addRow"===t){const t=ze(this.casedata.content,e,a.getAttribute("data-newrow"));null!==t&&this.pageInstructions.push(t)}else if("deleteRow"===t){const t=Fe(this.casedata.content,e);null!==t&&this.pageInstructions.push(t)}}!0===this.bShowNew?this.sendData("refreshnew",{id:this.casetype,refreshFor:e}):this.sendData("refreshassignment",{id:this.assignmentID,actionid:this.actionID,refreshFor:e})}};fetchData(t,e){const{id:s,actionid:a,target:i,element:n}=e||{};let r="";""!==this.authentication&&"basic"!==this.authentication||(r=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(r=`Bearer ${this.token}`);const o={method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:r},mode:"cors"};let c=`${this.url}/api/v1/`;switch(t){case"worklist":c+="assignments";break;case"casetypes":c+="casetypes";break;case"newwork":c+=`casetypes/${s}`;break;case"assignment":c+=`assignments/${s}`;break;case"case":c+=`cases/${s}`;break;case"data":c+=`data/${s}`;break;case"page":c+=`cases/${s}/pages/${a}`;break;case"view":c+=`cases/${s}/views/${a}`;break;case"assignmentaction":c+=`assignments/${s}/actions/${a}`;break;case"caseaction":c+=`cases/${s}/actions/${a}`;break;case"attachment":c+=`attachments/${s}`;break;case"attachments":c+=`cases/${s}/attachments`;break;case"attachmentcategories":c+=`cases/${s}/attachment_categories`}fetch(c,o).then((e=>{if("case"===t)this.etag=e.headers.get("etag"),i&&(i.disabled=!1,i.textContent="Save");else if("attachment"===t)return e.text();return e.ok||404===e.status?e.json():Promise.reject(e)})).then((e=>{try{if(e.errors&&e.errors.length>0)return this.errorMsg=`Error ${e.errors[0].ID}: ${e.errors[0].message}`,this.clearLoadingIndicator(),this.requestUpdate(),void console.error("Error:",e);const c=this.getRenderRoot().querySelector("#case-data");switch(t){case"casetypes":this.casetypes={};for(const t of e.caseTypes)"workList"===this.action&&""!==this.casetype&&this.casetype!==t.ID||(this.casetypes[t.ID]={canCreate:t.CanCreate,name:t.name,requiresFieldsToCreate:!1});"createNewWork"===this.action&&this.createCase();break;case"worklist":this.cases=e.assignments,this.requestUpdate();break;case"assignment":this.data=e,this.caseID=e.caseID,""===this.name&&(this.name=" "),this.fetchData("case",{id:this.caseID}),e.actions.length>0&&e.actions[0].ID?(this.actionID=e.actions[0].ID,this.name=e.actions[0].name,this.fetchData("assignmentaction",{id:s,actionid:this.actionID})):this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"});break;case"case":this.casedata=e,this.content={},this.pageInstructions=[],this.numAttachments=0,""===this.name&&(this.name=this.casedata.content.pyLabel),this.casepyStatusWork=this.casedata.content.pyStatusWork,this.requestUpdate(),""===this.assignmentID&&this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"}),"true"===this.bShowAttachments&&this.fetchData("attachments",{id:this.caseID});break;case"data":if(this.dataPages[s]=e,!n.nextElementSibling){console.error("Error: case data are not present when retrieving the data");break}M(this.showDataList(e),n.nextElementSibling);break;case"caseaction":if(!c){console.error("Error: case data are not present when retrieving the assignmentaction");break}if(!e.view.groups)return this.errorMsg="Error: view is not defined",this.clearLoadingIndicator(),void this.requestUpdate();M(this.renderSaveCaseLayout(e.view.groups,"Obj"),c),c.focus();break;case"assignmentaction":if(!c){console.error("Error: case data are not present when retrieving the assignmentaction");break}if(!e.view.groups)return this.errorMsg="Error: view is not defined",this.clearLoadingIndicator(),void this.requestUpdate();i?(this.actionID=a,M((r=e.name,o=this.renderMainLayout(e.view.groups,"Obj"),E`
<div class="flex layout-content-inline_middle main-header">
  <h2>${i18n.t(r)}</h2>
  <div class="flex layout-content-inline_middle margin-l-auto">
    <button type='button' data-action-id='close'
    class="pzhc pzbutton Simple" aria-label="${i18n.t("Close modal")}">${Q()}</button>
  </div>
</div>
<div class="validation" role="alert" aria-live="assertive"></div>
<form id="modalcontent">${o}</form>
`),i),i.focus()):(this.name=e.name,this.requestUpdate(),M(this.renderMainLayout(e.view.groups,"Obj"),c),c.focus());break;case"page":if(!c){console.error("Error: case data are not present when retrieving the page");break}M(this.renderMainLayout(e.groups,"Obj"),c),c.focus();break;case"view":if(!c){console.error("Error: case data are not present when retrieving the page");break}this.content={},this.pageInstructions=[],"pyCaseInformation"===a?(this.name=e.name,M(this.renderReviewLayout(e.groups,"Obj"),c)):(this.name=e.name,M(this.renderMainLayout(e.groups,"Obj"),c)),c.focus();break;case"newwork":if(this.content={},this.pageInstructions=[],!c){console.error("Error: case data are not present when retrieving the newwork");break}M(this.renderCreateCaseLayout(e.creation_page.groups[0].layout.groups,"Obj"),c),c.focus();const t=this.getRenderRoot().querySelector("#case-data");t&&((t,e)=>{for(const s of t.elements)if("INPUT"===s.tagName||"TEXTAREA"===s.tagName||"SELECT"===s.tagName){const t=s.getAttribute("data-ref");if(null!==t&&"pyID"!==t&&e[t]){const a=e[t];if("object"==typeof a)"radio"===s.type?s.value===a.value&&(s.checked=!0):"checkbox"===s.type?!0!==a.value&&"true"!==a.value||(s.checked=!0):a.value&&(s.value=a.value),a.disabled&&(s.disabled=!0);else if("datetime-local"===s.type)24===a.length?s.value=a.substring(0,23):s.value=a;else if("date"===s.type){let a;s.valueAsDate&&(a=new Date(s.valueAsDate)),a&&a instanceof Date&&a.getTime()==a.getTime()||(a=new Date(s.value)),a&&a instanceof Date&&a.getTime()==a.getTime()?(a=new Date(a.getTime()+6e4*a.getTimezoneOffset()),qe(e,t,`${Re(a.getMonth()+1)}/${Re(a.getDate())}/${a.getFullYear()}`)):qe(e,t,s.value)}else"string"==typeof a?"radio"===s.type?s.value===a&&(s.checked=!0):"checkbox"===s.type?"true"===a&&(s.checked=!0):s.value=a:"boolean"==typeof a&&"checkbox"===s.type?!0===a&&(s.checked=!0):s.value=a}}})(t,this.initialContent);break;case"attachments":let l=e.attachments;l||(l=[]),this.numAttachments=l.length,i&&M(Xe(i,l,this.caseID,this),i),this.requestUpdate();break;case"attachmentcategories":this.attachmentcategories=e.attachment_categories;break;case"attachment":i(e)}}catch(t){this.errorMsg=`Error: ${t}`,this.requestUpdate(),console.error("Error:",t)}var r,o})).catch((t=>{this.genErrorMessage(t)}))}sendData(t,e,s){const{id:a,actionid:i,target:n,refreshFor:r}=e;let o="";""!==this.authentication&&"basic"!==this.authentication||(o=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(o=`Bearer ${this.token}`);const c={"Content-Type":"application/json;charset=UTF-8",Authorization:o},l={method:"POST",headers:c,mode:"cors"},{pageInstructions:d,pageupdate:h}=Je(this.content,this.pageInstructions);let u=`${this.url}/api/v1/`;switch(this.validationMsg="",t){case"authenticate":"oauth2password"===this.authentication?l.body=`grant_type=password&client_id=${this.clientid}&client_secret=${this.clientsecret}&username=${this.username}&password=${this.password}`:"oauth2clientcredentials"===this.authentication&&(l.body=`grant_type=client_credentials&client_id=${this.clientid}&client_secret=${this.clientsecret}`),l.headers["Content-Type"]="application/x-www-form-urlencoded",u=`${this.url}/PRRestService/oauth2/v1/token`;break;case"newwork":u+="cases",l.body=JSON.stringify({content:h,pageInstructions:d,caseTypeID:a});break;case"submitassignment":l.body=JSON.stringify({content:h,pageInstructions:d}),u+=`assignments/${a}?actionID=${i}`;break;case"savecase":u+=`cases/${a}`,i&&""!==i&&(u+=`?actionID=${i}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:h,pageInstructions:d});break;case"refreshnew":u+=`casetypes/${a}/refresh`,r&&""!==r&&(u+=`?refreshFor=${r}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:h,pageInstructions:d});break;case"refreshassignment":u+=`assignments/${a}/actions/${i}/refresh`,r&&""!==r&&(u+=`?refreshFor=${r}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:h,pageInstructions:d});break;case"refreshcase":u+=`cases/${a}/actions/${i}/refresh`,r&&""!==r&&(u+=`?refreshFor=${r}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:h,pageInstructions:d});break;case"uploadattachment":u+="attachments/upload",delete c["Content-Type"];const t=new FormData;t.append("File",i,i.name),l.body=t;break;case"attachments":u+=`cases/${a}/attachments`,l.body=JSON.stringify({attachments:i});break;case"deleteattachment":u+=`attachments/${a}`,l.method="DELETE"}fetch(u,l).then((e=>"deleteattachment"===t||"attachments"===t?e.text():200===e.status||201===e.status||e.status>=400&&e.status<500?e.json():e.ok?Promise.resolve("ok"):Promise.reject(e))).then((e=>{if(e.errors&&e.errors.length>0){if(e.errors[0].ValidationMessages)if(n&&"modalcontent"===n.id)Ze(n,e.errors[0].ValidationMessages,this),M(this.genPageValidationErrors(e),n.previousElementSibling);else{const t=this.getRenderRoot().querySelector("#case-data");Ze(t,e.errors[0].ValidationMessages,this),this.validationMsg=this.genPageValidationErrors(e)}else this.errorMsg=`Error ${e.errors[0].ID}: ${e.errors[0].message}`;this.clearLoadingIndicator(),n&&"BUTTON"===n.tagName&&(n.disabled=!1,n.textContent="Save")}else if(e.access_token)this.token=e.access_token;else{const a=this.getRenderRoot().querySelector("#case-data");if("refreshcase"===t||"refreshassignment"===t||"refreshnew"===t){if(!a)return void console.error("Error: case data are not present");M("refreshnew"===t?this.renderCreateCaseLayout(e.creation_page.groups[0].layout.groups,"Obj"):this.renderMainLayout(e.view.groups,"Obj"),a)}else if("savecase"===t){if(this.fetchData("case",{id:this.caseID,target:n}),s)return void s()}else if("deleteattachment"===t||"attachments"===t)this.fetchData("attachments",{id:this.caseID,target:n});else if("uploadattachment"===t){let t=i.name.lastIndexOf(".");-1===t&&(t=i.name.length);const s=i.name.substring(t+1),a=[{type:"File",category:i.category,fileType:s,name:i.displayName,ID:e.ID}];return void this.sendData("attachments",{id:this.caseID,actionid:a,target:n})}e.ID&&(this.caseID=e.ID,"newwork"===t&&this.sendExternalEvent({type:"newwork",id:this.caseID})),e.nextAssignmentID?(a&&(M(this.genLoadingIndicator(),a),this.requestUpdate()),this.bShowNew=!1,this.assignmentID=e.nextAssignmentID,this.fetchData("assignment",{id:this.assignmentID})):e.nextPageID&&(a&&(M(this.genLoadingIndicator(),a),this.requestUpdate()),"Confirm"===e.nextPageID||"Review"===e.nextPageID?(this.bShowConfirm=!0,this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"}),this.fetchData("case",{id:this.caseID})):this.fetchData("page",{id:this.caseID,actionid:e.nextPageID}))}this.requestUpdate()})).catch((t=>{this.genErrorMessage(t)}))}}const ns=(t,e)=>{if(t.control&&t.control.actionSets&&t.control.actionSets.length>0)for(const s of t.control.actionSets)if(s.events.length>0&&s.actions.length>0&&s.events[0].event===e){let t=s.actions[0].action;return"refresh"===t&&""!==s.actions[0].refreshFor&&(t+=`-${s.actions[0].refreshFor}`),t}},rs=t=>"pyTemplateButton"!==t.reference?t.reference:t.control&&t.control.modes?t.control.modes[1].tooltip:null,os=(t,e,s,a)=>void 0===e?E`
      ${a}
    `:"field-button"!==s||(t=>!!(t.control&&t.control.actionSets&&t.control.actionSets.length>0))(t)?"field-radiogroup"===s||"field-checkbox"===s?E`
    ${a}
  `:E`
  <div class="fr-input-group">${((t,e,s)=>{if(void 0===e)return null;const a=t.required&&!0!==t.readOnly?E`<span class="fr-input-asterix">*</span>`:"";return"field-checkbox"===s?""!==t.label||!0===t.showLabel?E`<legend>${Ne(t.label)}</legend>`:null:"field-text"===s&&!0===t.readOnly&&"pxCheckbox"===t.control.type&&t.control.label?E`<label class="fr-label">${Ne(t.control.label)}${a}</label>`:""!==t.label||!0===t.showLabel||!0===t.labelReserveSpace?E`<label class="fr-label" for="${ss(e)}">${Ne(t.label)}${a}</label>`:null})(t,e,s)}${a}</div>
  `:null,cs=(t,e,s)=>{if(void 0===t||void 0===t.control||void 0===t.control.type)return null;if(t.customAttributes&&"none"===t.customAttributes.display)return null;if(!0===s||!0===t.readOnly||"pxHidden"===t.control.type)return os(t,e,"field-text",ls(t,e));switch(t.control.type){case"pxPhone":case"pxTextInput":return os(t,e,"field-textinput",ds(t,e));case"pxInteger":case"pxNumber":return os(t,e,"field-numberinput",us(t,e));case"pxCurrency":return os(t,e,"field-currencyinput",ps(t,e));case"pxEmail":return os(t,e,"field-emailinput",gs(t,e));case"pxTextArea":return os(t,e,"field-textarea",fs(t,e));case"pxRadioButtons":return os(t,e,"field-radiogroup",Cs(t,e));case"pxCheckbox":return os(t,e,"field-checkbox",Ds(t,e));case"pxDropdown":return os(t,e,"field-dropdown",ks(t,e));case"pxDisplayText":return os(t,e,"field-text",ls(t,e));case"pxIcon":return os(t,e,"field-icon",ms(t,e));case"pxLink":case"pxURL":return os(t,e,"field-url",ys(t,e));case"pxIconDeleteItem":return os(t,e,"field-button",bs(t,e));case"pxButton":return os(t,e,"field-button",$s(t,e));case"pxDateTime":return"TimeOfDay"===t.type?os(t,e,"field-time",_s(t,e)):"Date"===t.type?os(t,e,"field-date",ws(t,e)):os(t,e,"field-datetime",vs(t,e));case"pxAutoComplete":return os(t,e,"field-combobox",Is(t,e));case"pxSlider":return os(t,e,"field-slider",hs(t,e));default:return null}},ls=(t,e)=>{if("pxDate"===t.control.type){let s=Me(t.value);if(s)if(t.control&&2===t.control.modes.length){let e={};switch(t.control.modes[1].dateFormat){case"DateTime-Short-YYYY":case"Date-DayMonthYear-Custom":case"Date-Mediun":e={year:"numeric",month:"short",day:"numeric"};break;case"Date-Short":e={year:"numeric",month:"numeric",day:"numeric"};break;case"Date-Long":e={year:"numeric",month:"long",day:"numeric"};break;case"Date-Full":e={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;default:e={}}s=new Intl.DateTimeFormat([],e).format(s)}else s=(new Intl.DateTimeFormat).format(s);else s=t.value;return E`
      <span class="dataValueRead" data-ref="${t.reference}" id="${ss(e)}">${s}</span>
    `}if("pxDateTime"===t.control.type){let s=Me(t.value);if(s)if(t.control&&2===t.control.modes.length){let e={};if("DateTime-Short-YYYY"===t.control.modes[1].dateTimeFormat)e={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};else e={};s=new Intl.DateTimeFormat([],e).format(s)}else s=(new Intl.DateTimeFormat).format(s);else s=t.value;return E`
      <span class="dataValueRead" data-ref="${t.reference}" id="${ss(e)}">${s}</span>
    `}if("pxTime"===t.control.type){let s=Me(t.value);if(s)if(t.control&&2===t.control.modes.length){const t={hour:"numeric",minute:"numeric"};s=new Intl.DateTimeFormat([],t).format(s)}else s=(new Intl.DateTimeFormat).format(s);else s=t.value;return E`
      <span class="dataValueRead" data-ref="${t.reference}" id="${ss(e)}">${s}</span>
    `}if("pxHidden"===t.control.type)return E`
    <input type="text" style="display:none" data-ref="${t.reference}" id="${ss(e)}" value="${Ne(t.value)}"/>
    `;let s=t.value;if(t.control&&2===t.control.modes.length&&"locallist"===t.control.modes[0].listSource)for(const e of t.control.modes[0].options)e.key===s&&(s=e.value);return"pxCurrency"===t.control.type&&(s=`$${s}`),E`
    <span class="dataValueRead" data-ref="${t.reference}" id="${ss(e)}">${Ne(s)}</span>
  `},ds=(t,e)=>E`
  <input
    class="fr-input"
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="text"
    id="${ss(e)}"
    value="${Ne(t.value)}"
    data-action-change="${ss(ns(t,"change"))}"
    data-action-click="${ss(ns(t,"click"))}"
  />
`,hs=(t,e)=>E`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="range"
    id="${ss(e)}"
    value="${Ne(t.value)}"
    data-action-change="${ss(ns(t,"change"))}"
    data-action-click="${ss(ns(t,"click"))}"
  />
`,us=(t,e)=>E`
  <input
    class="fr-input"
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="number"
    id="${ss(e)}"
    value="${t.value}"
    data-action-change="${ss(ns(t,"change"))}"
    data-action-click="${ss(ns(t,"click"))}"
  />
`,ps=(t,e)=>E`
  <input
    class="fr-input"
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="number"
    id="${ss(e)}"
    value="${t.value}"
    data-action-change="${ss(ns(t,"change"))}"
    data-action-click="${ss(ns(t,"click"))}"
  />
`,gs=(t,e)=>E`
  <input
    class="fr-input"
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="email"
    id="${ss(e)}"
    value="${t.value}"
    data-action-change="${ss(ns(t,"change"))}"
    data-action-click="${ss(ns(t,"click"))}"
  />
`,fs=(t,e)=>E`
  <textarea
    class="fr-input"
    data-ref="${t.reference}"
    rows="3"
    ?required="${!0===t.required}"
    id="${ss(e)}"
    data-action-change="${ss(ns(t,"change"))}"
    data-action-click="${ss(ns(t,"click"))}"
  >
${Ne(t.value)}</textarea
  >
`,ms=(t,e)=>E`
  <i
    class="${t.control.modes[1].iconStyle}"
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    id="${ss(e)}"
    value="${t.value}"
  />
`,ys=(t,e)=>E`
  <a id="${ss(e)}" data-ref="${t.reference}" href="${t.value}">${t.control.label}</a>
`,$s=(t,e)=>{const s=ns(t,"click");return"deleteRow"===s?bs(t,e):E`
  <button
    type='button'
    class="fr-btn"
    id="${ss(e)}"
    data-ref="${ss(rs(t))}"
    data-action-click="${ss(s)}"
  >${t.control.label}</button>`},bs=(t,e)=>E`
  <button
    type='button'
    class="fr-btn"
    title="Effacer la ligne"
    id="${ss(e)}"
    data-ref="${ss(rs(t))}"
    data-action-click="deleteRow"
  >Effacer</button>
`,vs=(t,e)=>{let s=t.value;if(""!==s){let e=Me(s);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),s=`${e.getFullYear()}-${Re(e.getMonth()+1)}-${Re(e.getDate())}T${Re(e.getHours())}:${Re(e.getMinutes())}`):8===t.value.length&&(s=`${t.value.substring(0,4)}-${t.value.substring(4,6)}-${t.value.substring(6,8)}T00:00`)}return E`
    <input
      class="fr-input"
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      type="datetime-local"
      id="${ss(e)}"
      value="${s}"
      data-action-change="${ss(ns(t,"change"))}"
    data-action-click="${ss(ns(t,"click"))}"
    />
  `},ws=(t,e)=>{let s=t.value;if(""!==s){let e=Me(s);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),s=`${e.getFullYear()}-${Re(e.getMonth()+1)}-${Re(e.getDate())}`):8===t.value.length&&(s=`${t.value.substring(0,4)}-${t.value.substring(4,6)}-${t.value.substring(6,8)}`)}return E`
    <input
      class="fr-input"
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      type="date"
      id="${ss(e)}"
      value="${s}"
      data-action-change="${ss(ns(t,"change"))}"
    data-action-click="${ss(ns(t,"click"))}"
    />
  `},_s=(t,e)=>{let s=t.value;if(""!==s){let e=Me(s);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),s=`${Re(e.getHours())}-${Re(e.getMinutes())}-${Re(e.getSeconds())}`):8===t.value.length&&(s=`${t.value.substring(9,10)}:${t.value.substring(10,11)}:${t.value.substring(11,12)}`)}return E`
    <input
      class="fr-input"
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      type="time"
      id="${ss(e)}"
      value="${s}"
      data-action-change="${ss(ns(t,"change"))}"
      data-action-click="${ss(ns(t,"click"))}"
    />
  `},Cs=(t,e)=>{let s;return t.control&&t.control.modes&&t.control.modes[0].options?s=t.control.modes[0].options:"True-False"===t.type&&(s=[{value:"true"},{value:"false"}]),void 0===s?null:E`<div class="fr-form-group"><fieldset class="fr-fieldset"><div class="fr-fieldset__content">
   ${""!==t.label?E`<legend class="fr-fieldset__legend fr-text--regular" id='radio-legend'>${Ne(t.label)}</legend>`:""}
    ${s.map(((s,a)=>{const i=`rb-${e}-${a}`;return E`
        <div class="fr-radio-group">
          <input
            data-ref="${t.reference}"
            name=${ss(e)}
            id="${i}"
            type="radio"
            value="${s.key}"
            ?required="${!0===t.required}"
            ?checked="${s.key===t.value}"
            data-action-change="${ss(ns(t,"change"))}"
          />
          <label class="fr-label" for="${i}">${s.value}</label>
        </div>
      `}))}
  </div></fieldset></div>`},Ds=(t,e)=>{const s=t.required&&!0!==t.readOnly?E`<span class="fr-input-asterix">*</span>`:"";return E`
  <div class="fr-checkbox-group"><input
  class="fr-checkbox"
  data-ref="${t.reference}"
  id="${ss(e)}"
  type="checkbox"
  ?checked=${"true"===t.value}
  data-action-change="${ss(ns(t,"change"))}"
  data-action-click="${ss(ns(t,"click"))}"
  />
  <label class="fr-label" for="${ss(e)}">${t.control.label}${s}</label></div>
`},ks=(t,e)=>t.control&&t.control.modes[0]&&t.control.modes[0].options?E`<select
      class="fr-select"
      data-ref="${t.reference}"
      id=${ss(e)}
      ?required="${!0===t.required}"
      data-action-change="${ss(ns(t,"change"))}"
      data-action-click="${ss(ns(t,"click"))}">
        <option value="" title="Select...">Select...</option>
        ${t.control.modes[0].options.map((e=>E`
            <option ?selected=${e.key===t.value} value='${e.key}'>${e.value}</option>
          `))}
      </select>`:E`<input
      class="fr-input"
      type='text'
      data-ref="${t.reference}"
      id=${ss(e)}
      ?required="${!0===t.required}"
      data-action-change="${ss(ns(t,"change"))}"
      data-action-click="${ss(ns(t,"click"))}">
      </input>`,Is=(t,e)=>{if(t.control.modes&&t.control.modes[0]&&t.control.modes[0].options)return E`
      <input
        class="fr-input"
        data-ref="${t.reference}"
        list="${t.reference}"
        ?required="${!0===t.required}"
        type="text"
        class="combobox loaded"
        id="${ss(e)}"
        value="${Ne(t.value)}"
        data-action-change="${ss(ns(t,"change"))}"
        data-action-click="${ss(ns(t,"click"))}"
      />
      <datalist id="${t.reference}">
        ${t.control.modes[0].options.map((t=>E`
            <option value="${t.value}">
              ${t.key}
            </option>
          `))}
      </datalist>
    `;let s="";return t.control&&t.control.modes&&t.control.modes[0]&&t.control.modes[0].dataPageID&&(s=t.control.modes[0].dataPageID),E`
    <input
      class="fr-input"
      data-ref="${t.reference}"
      list="${t.reference}"
      data-pageid="${s}"
      ?required="${!0===t.required}"
      type="text"
      class="combobox"
      id="${ss(e)}"
      value="${t.value}"
      data-action-change="${ss(ns(t,"change"))}"
      data-action-click="${ss(ns(t,"click"))}"
    />
    <datalist id="${t.reference}"></datalist>
  `},xs=t=>""!==t.title?E`<h3>${t.title}</h3>
    `:null,As=(t,e)=>{let s=t.fieldListID;if(void 0!==t.reference&&(s=t.reference),"."===s.charAt(0)&&(s=s.substring(1)),t.newRow&&!0!==e){const e=[];return Pe(t.newRow,e),E`
    <ul class="fr-btns-group fr-btns-group--inline">
    <li><button type="button" class="fr-btn" data-newrow="${ss(e.join())}"
        data-ref=${s} data-action-click="addRow">Ajouter une ligne</button>
      </div>
    </li></ul>
    `}return null},Ss=t=>E`
  ${t.map((t=>E`
    <th scope='col'>${t.caption?E`${t.caption.value}`:""}</th>`))}
`,Es=t=>E`
  ${t.map((t=>E`
    <tr>
      ${t.groups.map((t=>E`
      <td>${cs(t.field)}</td>`))}
    </tr>`))}
`,Ts=(t,e,s,a)=>E`
  ${t.map(((t,a)=>{const i=`${e}-${a}`;if(t.layout){if(t.layout.view&&t.layout.view.groups)return E`
          <div>${Ts(t.layout.view.groups,i,s)}</div>
        `;if(t.layout.groups){let e="";if("string"==typeof t.layout.title&&""!==t.layout.title&&(t.layout.titleFormat,1))switch(t.layout.titleFormat){case"h2":default:e=E`<h2>${t.layout.title}</h2>`;break;case"h3":e=E`<h3>${t.layout.title}</h3>`;break;case"h4":e=E`<h4>${t.layout.title}</h4>`}return"Inline grid double"===t.layout.groupFormat?E`${e}
            <div class="fr-grid-col-6">
            ${Ts(t.layout.groups,i,s)}
            </div>`:E`
          <div>${e}${Ts(t.layout.groups,i,s)}</div>
        `}return t.layout.rows?t.layout.header?((t,e,s)=>E`
  ${xs(t.layout)}
  <table class="fr-table fr-table--no-caption" data-fr-js-table="true">
  <caption>${t.layout.title}</caption>
    <thead>
      <tr>
        ${Ss(t.layout.header.groups)}
      </tr>
    </thead>
    <tbody>
      ${Es(t.layout.rows)}
    </tbody>
  </table>
  ${As(t.layout,s)}
`)(t,0,s):Rs(t,i,s):null}return t.paragraph?E`<div>${es(t.paragraph.value)}</div>`:t.field?cs(t.field,i,s):t.view&&t.view.groups?Ts(t.view.groups,i,s):null}))}
`,Rs=(t,e,s)=>E`
  ${xs(t.layout)}
  <div class="rdl">
    ${Ls(t.layout.rows,e,s)}
  </div>
  ${As(t.layout,s)}
`,Ls=(t,e,s)=>E`
  ${t.map(((t,a)=>{const i=`${e}-row${a}`;return t.groups?E`
      <fieldset class="fr-fieldset">
      ${Ts(t.groups,i,s)}
      </fieldset>`:null}))}
`,Ms=()=>E`Votre requete a ete soumise.`,Ns=t=>E`
<ul class="fr-btns-group fr-btns-group--inline">
    ${null!==t?E`<li><button type="button" class="fr-btn fr-btn--secondary"
    data-module="govuk-button" @click="${t}">Annuler</button></li>`:""}
    <li><button type="button" data-submit="submit" class="fr-btn">Soumettre</button></li>
  </ul>
`,Os=t=>null===t?null:E`
  <ul class="fr-btns-group fr-btns-group--inline">
  ${null!==t?E`<li><button type="button" class="fr-btn"
  @click="${t}">Fermer</button></li>`:""}
  </ul>`,qs=(t,e)=>t&&0!==t.length?E`<p>Clicker sur le bouton 'Continue' pour reouvrir la requete</p>
  <button type='button' @click="${e}" class="fr-btn" data-type="assignment" data-id="${t[0].ID}">Continue</button>`:null,Bs=(t,e,s,a)=>E`
  <div>${Ts(t,e,!1)}</div>
  ${(t=>E`
<ul class="fr-btns-group fr-btns-group--inline">
    ${null!==t?E`<li><button type="button" class="fr-btn fr-btn--secondary"
    @click="${t}">Annuler</button><li>`:""}
    <li><button type="button" data-submit="create" class="fr-btn">Creer</button></li>
  </ul>
`)(s)}
`,Us=(t,e)=>{const s=t.closest(".fr-input-group");if(!s)return;const a=t.getAttribute("data-ref"),i=t.nextElementSibling;if(null!==a&&"pyID"!==a&&""!==e)if(i&&"fr-error-text"===i.className)i.innerText=e;else{const i=document.createElement("p");i.id=`text-input-error-desc-error-${a}`,i.className="fr-error-text",i.innerText=e,s.appendChild(i),s.classList.add("fr-input-group--error"),t.classList.add("fr-input--error"),t.setAttribute("aria-describedby",`text-input-error-desc-error-${a}`)}else i&&"fr-error-text"===i.className&&s.removeChild(i),s.classList.remove("fr-input-group--error"),t.classList.remove("fr-input--error"),t.setAttribute("aria-describedby","")},Ps=t=>{for(const e of t.elements)"INPUT"!==e.tagName&&"TEXTAREA"!==e.tagName&&"SELECT"!==e.tagName||Us(e,"");return t.checkValidity()},zs=t=>{for(const e of t.elements)"INPUT"!==e.tagName&&"TEXTAREA"!==e.tagName&&"SELECT"!==e.tagName||Us(e,e.validationMessage)},Fs=()=>E`
<span class="loading">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</span>
`,js={"Error: view is not defined":"Erreur: la UI n'est pas supportee","Error TypeError: Failed to fetch":"Erreur: Serveur is not disponible"},Hs=(t,e)=>E`
<div role="alert" class="fr-alert fr-alert--error">
    <p class="fr-alert__title">${js[t]?js[t]:t}</p>
    ${null!=e?E`
    <button type='button' aria-label="Cliquer pour fermer" class="fr-link--close fr-link"
    @click="${e}">Fermer</button>`:""}
</div>`,Vs=(t,e)=>E`
  ${t.length>0?E`
        <table class="fr-table fr-table--no-caption" data-fr-js-table="true">
          <caption>Mes requetes</caption>
          <thead>
            <tr>
              <th span="col">Requetes</th>
              <th span="col">Action</th>
            </tr>
          </thead>
          <tbody>
            ${t.map((t=>E`
                <tr>
                  <td scope="row">${t.name}</td>
                  <td>
                    <button @click="${e}" class="fr-btn" data-type="assignment" data-id="${t.ID}">
                      Ouvrir
                    </button>
                  </td>
                </tr>
              `))}
          </tbody>
        </table>
      `:E`
        <div style='line-height: 50px;text-align:center'>Aucune requete en cours</div>
      `}
`;class Ws extends is{displayContent(){return this.bShowSave="false",""!==this.errorMsg?Hs(this.errorMsg,"true"===this.bShowCancel?this.resetError:null):"oauth2password"!==this.authentication&&"oauth2clientcredentials"!==this.authentication||""!==this.token?(this.casetypes||"createNewWork"!==this.action&&"workList"!==this.action?""===this.name&&("openAssignment"===this.action&&""===this.assignmentID&&(this.assignmentID=this.caseID),""!==this.assignmentID?this.fetchData("assignment",{id:this.assignmentID}):""!==this.caseID&&this.fetchData("case",{id:this.caseID})):(this.fetchData("casetypes"),"createNewWork"===this.action?(this.bShowNew=!0,this.casetypes[this.casetype]&&this.fetchData("newwork",{id:this.casetype})):"workList"===this.action&&(this.bShowCancel="true",this.fetchData("worklist"))),this.bShowConfirm?Ms(this.casedata.content.pyLabel,this.casedata.content.pyID,this.casepyStatusWork):""!==this.caseID||""!==this.assignmentID||this.bShowNew?E`
        ${t=this.name,e=this.data,s=this.casedata,a=this.casepyStatusWork,this.numAttachments,this.displayActions,this.runAction,this.openCase,void 0===e.caseID&&s.content?E`
    <h2>${s.content.pyLabel}</h2>
    ${qs(s.assignments,a)}`:""===t||void 0===e.caseID?"":E`<h2>${e.name}</h2>`}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
        <form id="case-data"></form>
      `:"workList"===this.action?Vs(this.cases,this.openCase):null):(this.sendData("authenticate",{}),null);var t,e,s,a}renderMainLayout=(t,e)=>((t,e,s,a)=>E`
  <div>${Ts(t,e,!1)}</div>
  ${Ns(s)}
`)(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null);renderReviewLayout=(t,e)=>((t,e,s,a)=>E`
  <div>${Ts(t,e,!0)}</div>
  ${Os(s)}
`)(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null);renderCreateCaseLayout=(t,e)=>Bs(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null);genPageValidationErrors=t=>(t=>t.errorDetails?E`
    <div role="alert" class="fr-alert fr-alert--error">
    <p class="fr-alert__title">Erreur</p><ul>
      ${t.errorDetails.map((t=>E`<li>${t.localizedValue}</li>`))}
    </ul>`:E`
  <div role="alert" class="fr-alert fr-alert--error">
    <p class="fr-alert__title">Erreur</p><ul>
    ${t.errors[0].ValidationMessages.map((t=>t.Path?E`
          <li>${t.Path.substring(1)}: ${t.ValidationMessage}</li>
        `:0===t.ValidationMessage.indexOf("Validation failed")?null:E`
    <li>${t.ValidationMessage}</li>
  `))}
  </ul>`)(t);genLoadingIndicator=()=>Fs();setInlineError=(t,e)=>Us(t,e);validateForm=t=>Ps(t);reportFormValidity=t=>zs(t);clickHandler=t=>{let e=t.target;"path"===e.tagName&&(e=e.parentNode),"svg"===e.tagName&&(e=e.parentNode);const s=e.getAttribute("data-action-click");e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e),je(e,"click")?(this.refreshAssignment(e,He(e,"click")),t.preventDefault()):"BUTTON"===e.tagName&&(t.preventDefault(),null!==e.getAttribute("data-submit")&&"save"!==e.getAttribute("data-submit")?this.submitForm(t,e.getAttribute("data-submit")):("addRow"===s||"deleteRow"===s)&&this.refreshAssignment(e))};changeHandler=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e.setCustomValidity(""),e.classList.remove("error-field"),je(e,"change")&&this.refreshAssignment(e,He(e,"change"))};focusHandler=t=>{const e=t.target;e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e)};async firstUpdated(){const t=this.getRenderRoot();t&&(t.addEventListener("click",this.clickHandler),t.addEventListener("focusin",this.focusHandler),t.addEventListener("change",this.changeHandler))}}customElements.define("pega-govfr",class extends Ws{createRenderRoot(){return this}getRenderRoot(){return this}render(){return E`
      ${this.displayContent()}
    `}});class Ks extends Ge{resetError=t=>{this.errorMsg="",this.validationMsg="",this.actionAreaCancel(t)};reloadWorkList=t=>{this.cases=[],this.requestUpdate(),this.actionAreaCancel(t)};actionAreaCancel=t=>{t&&t.preventDefault(),this.bShowConfirm=!1,this.bShowNew=!1,this.caseID="",this.data={},this.content={},this.pageInstructions=[],this.casedata={},this.attachmentcategories=[],this.casepyStatusWork="",this.assignmentID="",this.actionID="",this.errorMsg="",this.numAttachments=0,this.validationMsg="",this.name="","workList"===this.action&&this.fetchData("portal"),this.sendExternalEvent({type:"cancel"})};actionAreaSave=t=>{t&&t.preventDefault(),null===t.target.getAttribute("data-submit")&&(t.target.textContent="Saving...",t.target.disabled=!0);const e=this.getRenderRoot().querySelector("#case-data");e&&(Ke(e,this.content,this.pageInstructions,this.data.data.caseInfo.content),""!==this.assignmentID?this.sendData("savecase",{id:this.caseID,actionid:"",target:t.target}):this.sendData("savecase",{id:this.caseID,actionid:this.actionID,target:t.target}))};actionRefresh=()=>{const t=this.getRenderRoot().querySelector("#case-data");t&&(this.validationMsg="",Ke(t,this.content,this.pageInstructions,this.data.data.caseInfo.content),this.fetchData("caseaction",{id:this.caseID,actionid:this.actionID}))};displayActions=()=>this.data.actions?this.genActionsList(this.name,this.data):this.casedata.actions?this.genActionsList(this.name,this.casedata):null;displayAttachments=t=>{this.fetchData("attachmentcategories",{id:this.caseID}),this.fetchData("attachments",{id:this.caseID,target:t})};submitForm=(t,e)=>{const s=this.getRenderRoot().querySelector("#case-data");return Ke(s,this.content,this.pageInstructions,this.data.data.caseInfo.content),this.validateForm(s)?"create"!==e?""!==this.data.ID?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID}):this.sendData("submitcaseaction",{id:this.data.caseID,actionid:this.actionID}):this.sendData("newwork",{id:this.casetype}):this.reportFormValidity(s),t.preventDefault(),!1};createCase=t=>{if(this.name="New Case",this.bShowNew=!0,t){let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&(this.casetype=e.getAttribute("data-value"),this.name=`New ${e.textContent} `)}this.content=this.initialContent,this.pageInstructions=[],this.caseID="",this.data={},this.casedata={},this.casetypes[this.casetype]?this.sendData("newwork",{id:this.casetype}):(this.errorMsg=`Case '${this.casetype}' is not defined`,console.error(`Case '${this.casetype}' is not defined`)),this.requestUpdate()};runAction=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&null!==e.getAttribute("data-value")&&(this.actionID=e.getAttribute("data-value"),this.name=e.innerText,this.data.ID="",this.actionRefresh());const s=this.getRenderRoot().querySelector("#case-data");null!=s&&M(this.genLoadingIndicator(),s)};openCase=t=>{t.preventDefault(),this.caseID=t.target.getAttribute("data-id"),this.name="",this.data={},this.casedata={},0===this.caseID.indexOf("ASSIGN-WORKLIST")?(this.sendExternalEvent({type:"openassignment",id:this.caseID}),this.assignmentID=this.caseID,this.caseID=""):(this.sendExternalEvent({type:"opencase",id:this.caseID}),this.assignmentID="");const e=this.getRenderRoot().querySelector("#case-data");null!=e&&M(this.genLoadingIndicator(),e),this.requestUpdate()};getData=(t,e)=>{this.dataPages[t]?M(this.showDataList(this.dataPages[t]),e.nextElementSibling):this.fetchData("data",{id:t,element:e})};applyAction=t=>{const e=this.getRenderRoot().querySelector("#case-data");let s=t;if(e){if(s){"path"===s.tagName&&(s=s.parentNode),"svg"===s.tagName&&(s=s.parentNode);const t=s.getAttribute("data-action-click"),e=s.getAttribute("data-ref");if(null!==e&&null!=t){if("addRow"===t){const t=ze(this.data.data.caseInfo.content,e,s.getAttribute("data-newrow"));return void(null!==t&&this.pageInstructions.push(t))}if("deleteRow"===t){const t=Fe(this.data.data.caseInfo.content,e);return void(null!==t&&this.pageInstructions.push(t))}}}Ke(e,this.content,this.pageInstructions,this.data.data.caseInfo.content)}};refreshAssignment=(t,e)=>{this.applyAction(t),!0===this.bShowNew?this.sendData("refreshnew",{id:this.casetype,refreshFor:e}):this.sendData("refreshassignment",{id:this.assignmentID,actionid:this.actionID,refreshFor:e})};genErrorMessage(t){this.clearLoadingIndicator(),t.message&&-1!==t.message.indexOf("JSON.parse")?console.error("Error:",t):t.message&&-1!==t.message.indexOf("Unexpected token")?(this.errorMsg="Error 404: Resource not found",this.requestUpdate(),console.error(this.errorMsg)):(t.status?""!==t.statusText?this.errorMsg=`Error ${t.status}: ${t.statusText}`:401===t.status?this.errorMsg="Error 401: Authentication error":423===t.status?this.errorMsg="Error 423: Resource is locked by another user":500===t.status?this.errorMsg="Error 500: Internal server error":this.errorMsg=`Error ${t.status}`:t.name&&t.message?this.errorMsg=`Error ${t.name}: ${t.message}`:this.errorMsg="string"==typeof t?t:"Critical error",this.requestUpdate(),console.error("Error:",t))}fetchData(t,e){const{id:s,actionid:a,target:i}=e||{};let n="";""!==this.authentication&&"basic"!==this.authentication||(n=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(n=`Bearer ${this.token}`);const r={method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:n},mode:"cors"};let o=`${this.url}/api/application/v2/`;switch(t){case"portal":o+=`portals/${this.portalName}`;break;case"assignment":o+=`assignments/${s}`;break;case"view":o+=`cases/${s}/views/${a}`;break;case"caseaction":o+=`cases/${s}/actions/${a}`;break;case"attachment":o+=`attachments/${s}`;break;case"attachments":o+=`cases/${s}/attachments`;break;case"attachmentcategories":o+=`cases/${s}/attachment_categories`}fetch(o,r).then((s=>{if("assignment"===t)this.etag=s.headers.get("etag");else if("attachment"===t)return s.text();return s.ok||404===s.status?s.json():401===s.status?(this.token="",this.sendData("authenticate",{...e,type:t,cmd:"fetchData"}),s.json()):Promise.reject(s)})).then((e=>{try{if(e.errors&&e.errors.length>0)return;if(e.pyLocalizedValue)return this.errorMsg=`Error: ${e.pyLocalizedValue}`,void this.requestUpdate();if(e.errorDetails&&e.errorDetails.length>0)return this.errorMsg=`Error ${e.errorDetails[0].message}: ${e.localizedValue}`,this.clearLoadingIndicator(),this.requestUpdate(),void console.error("Error:",e);const n=this.getRenderRoot().querySelector("#case-data");switch(t){case"portal":if(this.content={},this.pageInstructions=[],!this.casetypes){this.casetypes={};let t=[];e.data&&e.data.D_pzCasesAvailableToCreateForPortal&&e.data.D_pzCasesAvailableToCreateForPortal.pxResults?t=e.data.D_pzCasesAvailableToCreateForPortal.pxResults:e.data&&e.data.pyPortal&&e.data.pyPortal.pyCaseTypesAvailableToCreate&&(t=e.data.pyPortal.pyCaseTypesAvailableToCreate);for(const e of t)"workList"===this.action&&""!==this.casetype&&this.casetype!==e.pyClassName||(this.casetypes[e.pyClassName]={canCreate:!0,name:e.pyLabel})}this.cases=[];let t=[];if(e.data&&e.data.D_pyUserWorkList&&e.data.D_pyUserWorkList.pxResults?t=e.data.D_pyUserWorkList.pxResults:e.uiResources.context_data.pyPortal.summary_of_lists__.D_pyMyWorkList.pxResults&&(t=e.data[e.uiResources.context_data.pyPortal.summary_of_lists__.D_pyMyWorkList.pxResults.replace(".pxResults","")].pxResults),t.length>0)for(const e of t)this.cases.push({name:e.pyLabel,caseID:e.pxRefObjectKey,urgency:e.pxUrgencyAssign,ID:e.pzInsKey,label:e.pxTaskLabel});this.requestUpdate();break;case"assignment":this.content={},this.pageInstructions=[],this.isDeclarativeTarget=!1,this.refreshOnChange=!1,this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel,this.caseID=this.casedata.ID,this.data.caseID=this.caseID,this.data.ID=s;for(const t of this.casedata.assignments)if(s===t.ID&&t.actions&&t.actions.length>0){this.actionID=t.actions[0].ID;break}this.casepyStatusWork=this.casedata.status,this.data.actions=this.casedata.availableActions,this.name=this.casedata.stageLabel;const r=this.getRenderRoot().querySelector("#case-data");r&&Ke(r,this.casedata.content),this.content={},M(this.renderMainLayout(e.uiResources.resources.views[this.casedata.content.pyViewName],"Obj"),n),this.requestUpdate(),n.focus();break;case"view":if(!n){console.error("Error: case data are not present when retrieving the page");break}this.content={},this.pageInstructions=[],this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel?this.casedata.content.pyLabel:this.casedata.name,this.casedata.actions=this.casedata.availableActions,this.casedata.content.pyID=this.casedata.ID,this.data.ID=this.casedata.ID,this.casepyStatusWork=this.casedata.status,this.name=this.casedata.stageLabel,this.content={},"true"===this.bShowAttachments&&this.fetchData("attachments",{id:this.caseID}),this.name=e.data.caseInfo.name,M(this.renderReviewLayout(e.uiResources.resources.views[a],"Obj"),n),this.requestUpdate(),n.focus();break;case"caseaction":this.content={},this.pageInstructions=[],this.isDeclarativeTarget=!1,this.refreshOnChange=!1,this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel,this.caseID=this.casedata.ID,this.data.caseID=this.caseID,this.data.ID="",this.casepyStatusWork=this.casedata.status,this.data.actions=this.casedata.availableActions,this.name=this.casedata.stageLabel,this.content={},M(this.renderMainLayout(e.uiResources.resources.views[e.uiResources.root.config.name],"Obj"),n),this.requestUpdate(),n.focus();break;case"attachments":let o=e.attachments;o||(o=[]),this.numAttachments=o.length,i&&M(Xe(i,o,this.caseID,this),i),this.requestUpdate();break;case"attachmentcategories":this.attachmentcategories=e.attachment_categories;break;case"attachment":i(e)}}catch(t){this.errorMsg=`Error: ${t}`,this.requestUpdate(),console.error("Error:",t)}})).catch((t=>{this.genErrorMessage(t)}))}sendData(t,e){const{id:s,actionid:a,target:i}=e;let n="";""!==this.authentication&&"basic"!==this.authentication||(n=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(n=`Bearer ${this.token}`);const r={"Content-Type":"application/json;charset=UTF-8",Authorization:n},o={method:"POST",headers:r,mode:"cors"},{pageInstructions:c,pageupdate:l}=Je(this.content,this.pageInstructions);let d=`${this.url}/api/application/v2/`;switch(this.validationMsg="",t){case"authenticate":"oauth2password"===this.authentication?o.body=`grant_type=password&client_id=${this.clientid}&client_secret=${this.clientsecret}&username=${this.username}&password=${this.password}`:"oauth2clientcredentials"===this.authentication?o.body=`grant_type=client_credentials&client_id=${this.clientid}&client_secret=${this.clientsecret}`:"authorizationcode"===this.authentication&&(o.body=`grant_type=authorization_code&client_id=${this.clientid}&code_verifier=${window.history.state.verifier}&code=${window.history.state.code}&redirect_uri=${encodeURIComponent(`${window.location.href.substring(0,window.location.href.lastIndexOf("/"))}/auth.html`)}`),o.headers["Content-Type"]="application/x-www-form-urlencoded",d=`${this.url}/PRRestService/oauth2/v1/token`;break;case"newwork":d+="cases?viewType=form",o.body=JSON.stringify({caseTypeID:s,processID:"pyStartCase",content:{}});break;case"submitassignment":o.body=JSON.stringify({content:l,pageInstructions:c}),o.method="PATCH",o.headers["If-Match"]=this.etag,d+=`assignments/${s}/actions/${a}?viewType=form`;break;case"submitcaseaction":o.body=JSON.stringify({content:l,pageInstructions:c}),o.method="PATCH",o.headers["If-Match"]=this.etag,d+=`cases/${s}/actions/${a}?viewType=form`;break;case"refreshassignment":d+=`assignments/${s}/actions/${a}/refresh`,o.headers["If-Match"]=this.etag,o.method="PATCH",o.body=JSON.stringify({content:l,pageInstructions:c,contextData:!0});break;case"dataviews":d+=`data_views/${s}`,o.body=JSON.stringify(e.content);break;case"uploadattachment":d+="attachments/upload",delete r["Content-Type"];const t=new FormData;t.append("File",a,a.name),o.body=t;break;case"attachments":d+=`cases/${s}/attachments`,o.body=JSON.stringify({attachments:a});break;case"deleteattachment":d+=`attachments/${s}`,o.method="DELETE"}fetch(d,o).then((s=>"deleteattachment"===t||"attachments"===t?s.text():("submitassignment"!==t&&"newwork"!==t||(this.etag=s.headers.get("etag")),200===s.status||201===s.status||s.status>=400&&s.status<500||500===s.status?(401===s.status&&"authenticate"!==t&&(this.token="",this.sendData("authenticate",{...e,type:t,cmd:"sendData"})),s.json()):s.ok?Promise.resolve("ok"):Promise.reject(s)))).then((s=>{if(s.errors&&s.errors.length>0)return this.errorMsg=`Error: ${s.errors[0].message.trim()}`,void this.requestUpdate();if(s.access_token)this.token=s.access_token,window.history.replaceState({token:this.token},"",window.location.href),e!=={}&&e.type&&e.cmd&&("sendData"===e.cmd?this.sendData(e.type,e):this.fetchData(e.type,e));else if(s.errorDetails&&s.errorDetails.length>0){if(s.errorDetails[0].localizedValue){const t=this.getRenderRoot().querySelector("#case-data");Ze(t,s.errorDetails,this),this.validationMsg=this.genPageValidationErrors(s,t)}else this.errorMsg=`Error ${s.errorDetails[0].message}: ${s.localizedValue}`;this.clearLoadingIndicator(),i&&(i.disabled=!1,i.textContent="Save"),"submitassignment"===t&&this.fetchData("assignment",{id:this.assignmentID})}else{const e=this.getRenderRoot().querySelector("#case-data");if("newwork"===t&&s.data.caseInfo.ID&&""!==s.data.caseInfo.ID&&this.sendExternalEvent({type:"newwork",id:s.data.caseInfo.ID}),"refreshassignment"===t)return void(e&&s.data.caseInfo&&s.data.caseInfo.content&&(this.data.data.caseInfo.content=s.data.caseInfo.content,this.casedata.content=s.data.caseInfo.content,M(this.renderMainLayout(this.data.uiResources.resources.views[this.actionID],"Obj"),e)));if("deleteattachment"===t)i&&!i.classList.contains("attach-files")&&this.fetchData("attachments",{id:this.caseID,target:i});else if("attachments"===t)this.fetchData("attachments",{id:this.caseID,target:i});else if("uploadattachment"===t){let t=a.name.lastIndexOf(".");-1===t&&(t=a.name.length);const e=a.name.substring(t+1),n=[{type:"File",category:a.category,fileType:e,name:a.displayName,ID:s.ID}];return void this.sendData("attachments",{id:this.caseID,actionid:n,target:i})}if(s.confirmationNote)this.bShowConfirm=!0,this.caseID=s.data.caseInfo.ID,this.fetchData("view",{id:this.caseID,actionid:"pyReview"});else if(s.uiResources){if(this.bShowNew=!1,this.content={},this.pageInstructions=[],this.assignmentID=s.nextAssignmentInfo.ID,this.data=s,this.casedata=s.data.caseInfo,this.data.name=this.casedata.content.pyLabel?this.casedata.content.pyLabel:this.casedata.name,this.caseID=this.casedata.content.pzInsKey,this.data.caseID=s.data.caseInfo.ID,this.data.ID=this.assignmentID,this.casedata.content.pyViewName=s.uiResources.root.config.name,this.actionID=this.casedata.content.pyViewName,this.casedata.assignments)for(const t of this.casedata.assignments)if("pzQuestionPageScr"===t.processID&&this.data.ID===t.ID&&t.actions&&t.actions.length>0){this.actionID=t.actions[0].ID;break}this.casepyStatusWork=s.data.caseInfo.status,this.data.actions=s.data.caseInfo.availableActions,this.name=s.data.caseInfo.stageLabel,e&&(M(this.genLoadingIndicator(),e),M(this.renderMainLayout(s.uiResources.resources.views[this.casedata.content.pyViewName],"Obj"),e),e.focus())}}this.requestUpdate()})).catch((t=>{this.genErrorMessage(t)}))}}const Zs=(t,e,s)=>{if(void 0===e)return null;const a=t.requiredstate?E`<span class="fr-input-asterix">*</span>`:"";return"field-checkbox"===s?t.label&&""!==t.label?E`<legend>${t.displaylabel}</legend>`:null:E`
    ${""!==t.label?E`<label class="fr-label"
    for="${ss(e)}">${t.displaylabel}${a}${Js(t)}
    </label>`:null}
  `},Js=t=>t.helperText&&""!==t.helperText?E`<span class="fr-hint-text">${t.displayhelperText}</span>`:null,Ys=(t,e)=>{if(t.helperText&&""!==t.helperText)return`${e}-info`},Xs=t=>{if(t.placeholder&&""!==t.placeholder)return t.displayplaceholder},Gs=(t,e,s,a)=>void 0===e||""===e?E`
      ${a}
    `:E`
    <div class="fr-input-group" ?disabled="${t.disabledstate}">
      ${Zs(t,e,s)}${a}
    </div>
  `,Qs=(t,e,s,a,i)=>{if(!1===t.config.visibility)return null;let n=!1;if(t.config.displayvalue="",t.config.displaylabel=i18n.t(t.config.label),t.config.displayplaceholder=i18n.t(t.config.placeholder),t.config.displayhelperText=i18n.t(t.config.helperText),t.config.displaycaption=i18n.t(t.config.caption),t.config.value){let e=t.config.value.replace("@P .","");if(t.config.reference=void 0===i||""===i?e:`${i}.${e}`,t.config.displayvalue=Be(a.casedata.content,t.config.reference),"string"==typeof t.config.datasource&&0===t.config.datasource.indexOf("@ASSOCIATED")){e=t.config.datasource.replace("@ASSOCIATED .",""),-1!==e.indexOf(".")&&(e=e.substring(e.lastIndexOf(".")+1));let s="";a.data.context_data?s=a.data.context_data.content:a.data.uiResources.context_data&&a.data.uiResources.context_data.caseInfo&&a.data.uiResources.context_data.caseInfo.content&&(s=a.data.uiResources.context_data.caseInfo.content);const n=""===i?s:Be(s,i);if(n&&(t.config.options=n.summary_of_associated_lists__[e]),void 0===t.config.options&&(s=a.data.uiResources.resources.fields[e],"object"==typeof s&&1===s.length&&(s=s[0]),s&&s.datasource))if(s.datasource.records)t.config.options=s.datasource.records;else if(s.datasource.name&&a.data.data.shared[s.datasource.name]){const e=a.data.data.shared[s.datasource.name];if(Object.keys(e).length>0){const a=Object.keys(e)[0];if(e[a].pxResults){const i=s.datasource.propertyForValue.replace("@P .",""),n=s.datasource.propertyForDisplayText.replace("@P .","");t.config.options=[];for(const s in e[a].pxResults){const r=e[a].pxResults[s];t.config.options[s]={key:r[i],value:r[n]}}}}}}else if("object"==typeof t.config.datasource&&t.config.datasource.source&&0===t.config.datasource.source.indexOf("@DATASOURCE")){const e=t.config.datasource.source.replace("@DATASOURCE ","").replace(".pxResults","");if(a.data.data[e]&&a.data.data[e].pxResults)t.config.options=a.data.data[e].pxResults;else if(a.data.uiResources.context_data&&a.data.uiResources.context_data.caseInfo&&a.data.uiResources.context_data.caseInfo.content){const s=a.data.uiResources.context_data.caseInfo.content;if(s[i]&&s[i].summary_of_lists__[e]&&s[i].summary_of_lists__[e].pxResults){const n=s[i].summary_of_lists__[e].pxResults.replace(".pxResults","");if(a.data.data[n]&&a.data.data[n].pxResults){t.config.options=[];const e=t.config.datasource.fields.key.replace("@P .",""),s=t.config.datasource.fields.text.replace("@P .","");for(const i in a.data.data[n].pxResults){const r=a.data.data[n].pxResults[i];t.config.options[i]={key:r[e],value:r[s]}}}}}}t.config.options||(t.config.options=[]),t.config.displayvalue?"object"!=typeof t.config.displayvalue&&(t.config.displayvalue=`${t.config.displayvalue}`):t.config.displayvalue="",a.data.uiResources&&a.data.uiResources.resources&&a.data.uiResources.resources.fields&&a.data.uiResources.resources.fields[e]&&a.data.uiResources.resources.fields[e].isDeclarativeTarget&&(n=!0,a.isDeclarativeTarget=!0)}if(!0===s)return((t,e,s,a)=>E`<div>
    <dt class="fr-input-group">
      ${Zs(t,e,s)}
      </dt>
    <dd>${a}</dd>
    </div>
  `)(t.config,e,"field-text",ta(t.config,t.type,e));"string"!=typeof t.config.visibility&&"string"!=typeof t.config.readOnly&&"string"!=typeof t.config.disabled&&"string"!=typeof t.config.required||(a.refreshOnChange=!0);const r=a.data.data.caseInfo.content;if("string"==typeof t.config.visibility&&"true"!==t.config.visibility){if(!We(t.config.visibility,r,i))return null}else if(!1===t.config.visibility||"false"===t.config.visibility)return null;if(t.config.readonlystate=!1,"string"==typeof t.config.readOnly&&"false"!==t.config.readOnly?t.config.readonlystate=We(t.config.readOnly,r,i):(!0===t.config.readOnly||"true"===t.config.readOnly||n)&&(t.config.readonlystate=!0),t.config.requiredstate=!1,"string"==typeof t.config.required&&"false"!==t.config.required?t.config.requiredstate=We(t.config.required,r,i):!0!==t.config.required&&"true"!==t.config.required||(t.config.requiredstate=!0),t.config.disabledstate=!1,"string"==typeof t.config.disabled&&"false"!==t.config.disabled?t.config.disabledstate=We(t.config.disabled,r,i):!0!==t.config.disabled&&"true"!==t.config.disabled||(t.config.disabledstate=!0),t.config.disabledstate&&(t.config.requiredstate=!1,t.config.readonlystate=!1),t.config.readonlystate)return Gs(t.config,e,"field-textinput",ta(t.config,e));switch(t.type){case"TextContent":return ta(t.config,t.type,e);case"Decimal":case"TextInput":return Gs(t.config,e,"field-textinput",ea(t.config,e));case"Phone":return Gs(t.config,e,"field-phoneinput",sa(t.config,e));case"Email":return Gs(t.config,e,"field-emailinput",ra(t.config,e));case"Integer":return Gs(t.config,e,"field-numberinput",aa(t.config,e));case"Percentage":return Gs(t.config,e,"field-percentage",ia(t.config,e));case"Currency":return Gs(t.config,e,"field-currencyinput",na(t.config,e));case"RadioButtons":return Gs(t.config,e,"field-radiogroup",la(t.config,e));case"TextArea":return Gs(t.config,e,"field-textarea",oa(t.config,e));case"Checkbox":return Gs(t.config,e,"field-checkbox",ca(t.config,e));case"Dropdown":return Gs(t.config,e,"field-dropdown",da(t.config,e));case"DateTime":return Gs(t.config,e,"field-datetime",ha(t.config,e));case"Date":return Gs(t.config,e,"field-date",ua(t.config,e));case"Time":return Gs(t.config,e,"field-time",pa(t.config,e));case"AutoComplete":return Gs(t.config,e,"field-autocomplete",ga(t.config,e));default:return null}},ta=(t,e,s)=>{let a=t.displayvalue;if(""!==a){if("Phone"===e)return E`<a data-ref="${t.reference}" id="${ss(s)}" href="${`tel:${a}`}">${a}</a>`;if("Date"===e){const e={year:"numeric",month:"short",day:"numeric"};a=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}else if("DateTime"===e){a=Me(t.displayvalue);const e={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};a=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}else if("Time"===e){const e={hour:"numeric",minute:"numeric"};a=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}}if("TextContent"===e){if("Paragraph"===t.displayAs)return E`<p>${i18n.t(t.content)}</p>`;if("Heading 1"===t.displayAs)return E`<h1>${i18n.t(t.content)}</h1>`;if("Heading 2"===t.displayAs)return E`<h2>${i18n.t(t.content)}</h2>`;if("Heading 3"===t.displayAs)return E`<h3>${i18n.t(t.content)}</h3>`;if("Heading 4"===t.displayAs)return E`<h4>${i18n.t(t.content)}</h4>`}return E`
    <span class="dataValueRead" data-ref="${t.reference}" id="${ss(s)}">${Ne(a)}</span>
  `},ea=(t,e)=>E`
  <input
    class="fr-input"
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${ss(Xs(t))}"
    type="text"
    aria-describedby="${ss(Ys(t,e))}"
    id="${ss(e)}"
    value="${Ne(t.displayvalue)}"
  />
`,sa=(t,e)=>{let s="";for(const e of t.options)0===t.displayvalue.indexOf(e.pyCallingCode)&&(s=e.pyCallingCode);return t.displayvalue=t.displayvalue.substring(s.length),E`
<div class='field-phoneinput'>
<select
  class="fr-select field-countrycode"
  ?readonly="${t.readonlystate}"
  ?disabled="${t.disabledstate}"
  aria-label="${i18n.t("Select country code")}">
  ${t.options.map((t=>E`<option ?selected=${t.pyCallingCode===s}
  value='${t.pyCallingCode}'>${t.pyCallingCode}</option>`))}
</select>
 <input
   class="fr-input"
   data-ref="${t.reference}"
   ?required="${t.requiredstate}"
   ?readonly="${t.readonlystate}"
   ?disabled="${t.disabledstate}"
   placeholder="${ss(Xs(t))}"
   type="tel"
   aria-describedby="${ss(Ys(t,e))}"
   id="${ss(e)}"
   value="${Ne(t.displayvalue)}"
 />
 </div>
`},aa=(t,e)=>E`
  <input
    class="fr-input"
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${ss(Xs(t))}"
    type="number"
    aria-describedby="${ss(Ys(t,e))}"
    id="${ss(e)}"
    value="${Ne(t.displayvalue)}"
  />
`,ia=(t,e)=>E`
 <input
   class="fr-input"
   data-ref="${t.reference}"
   ?required="${t.requiredstate}"
   ?readonly="${t.readonlystate}"
   ?disabled="${t.disabledstate}"
   placeholder="${ss(Xs(t))}"
   type="text"
   aria-describedby="${ss(Ys(t,e))}"
   id="${ss(e)}"
   value="${Ne(t.displayvalue)}"
 />
`,na=(t,e)=>E`
  <div ?readonly="${t.readOnly}">
  <span class="currency-symbol">$</span>
  <input
    class="fr-input"
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${ss(Xs(t))}"
    type="number"
    aria-describedby="${ss(Ys(t,e))}"
    id="${ss(e)}"
    value="${Ne(t.displayvalue)}"
  />
  </div>
`,ra=(t,e)=>E`
  <input
    class="fr-input"
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${ss(Xs(t))}"
    type="email"
    aria-describedby="${ss(Ys(t,e))}"
    id="${ss(e)}"
    value="${Ne(t.displayvalue)}"
  />
`,oa=(t,e)=>E`
  <textarea
    class="fr-input"
    rows="3"
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${ss(Xs(t))}"
    type="email"
    aria-describedby="${ss(Ys(t,e))}"
    id="${ss(e)}"
  >${Ne(t.displayvalue)}</textarea>
`,ca=(t,e)=>{const s=t.requiredstate?"icon-required":"";return E`<div class="fr-checkbox-group"><input
  class="fr-checkbox"
  data-ref="${t.reference}"
  ?required="${t.requiredstate}"
  ?readonly="${t.readonlystate}"
  onclick="${ss(t.readonlystate?"return false;":void 0)}"
  ?disabled="${t.disabledstate}"
  aria-describedby="${ss(Ys(t,e))}"
  id=${ss(e)}
  type="checkbox" ?checked=${"true"===t.displayvalue||!0===t.displayvalue}
  />
  <label class="fr-label ${s}" for=${ss(e)}>
  ${t.displaycaption}
    </label></div>
`},la=(t,e)=>{let s=[{value:"true"},{value:"false"}];return t.options&&(s=t.options),E`<div class="fr-form-group"><fieldset class="fr-fieldset"><div class="fr-fieldset__content">
    ${s.map(((s,a)=>{const i=`rb-${e}-${a}`;return E`
        <div class="fr-radio-group">
          <input
            data-ref="${t.reference}"
            name=${ss(e)}
            id=${i}
            type="radio"
            ?required="${t.requiredstate}"
            ?readonly="${t.readonlystate}"
            ?disabled="${t.disabledstate}"
            value="${s.key}"
            onclick="${ss(t.readonlystate?"return false;":void 0)}"
            ?checked="${s.key===t.displayvalue}"
          />
          <label class="fr-label" for="${i}">${s.value}</label>
        </div>
      `}))}
  </div></fieldset></div>`},da=(t,e)=>E`<select
  class="fr-select"
  data-ref="${t.reference}"
  aria-describedby="${ss(Ys(t,e))}"
  id=${ss(e)}
  ?required="${t.requiredstate}"
  ?readonly="${t.readonlystate}"
  ?disabled="${t.disabledstate}">
  placeholder="${ss(Xs(t))}"
    <option value="" title="${i18n.t("Select...")}">${i18n.t("Select...")}</option>
    ${t.options.map((e=>E`<option ?selected=${e.key===t.displayvalue} value='${e.key}'>${e.value}</option>`))}
  </select>`,ha=(t,e)=>{let s=t.displayvalue;if(""!==s){let e=Me(s);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),s=`${e.getFullYear()}-${Re(e.getMonth()+1)}-${Re(e.getDate())}T${Re(e.getHours())}:${Re(e.getMinutes())}`):8===t.displayvalue.length?s=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(4,6)}-${t.displayvalue.substring(6,8)}T00:00`:24===t.displayvalue.length&&(s=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(5,7)}-${t.displayvalue.substring(8,10)}T${t.displayvalue.substring(11,13)}:${t.displayvalue.substring(14,16)}`)}return E`<input
      class="fr-input"
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="datetime-local"
      aria-describedby="${ss(Ys(t,e))}"
      id="${ss(e)}"
      value="${s}"
    />
  `},ua=(t,e)=>{let s=t.displayvalue;if(""!==s){let e=Me(s);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),s=`${e.getFullYear()}-${Re(e.getMonth()+1)}-${Re(e.getDate())}`):8===t.displayvalue.length?s=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(4,6)}-${t.displayvalue.substring(6,8)}`:24===t.displayvalue.length&&(s=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(5,7)}-${t.displayvalue.substring(8,10)}`)}return E`
   <input
      class="fr-input"
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="date"
      aria-describedby="${ss(Ys(t,e))}"
      id="${ss(e)}"
      value="${s}"
    />
  `},pa=(t,e)=>{let s=t.displayvalue;if(""!==s){let e=Me(s);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),s=`${Re(e.getHours())}-${Re(e.getMinutes())}-${Re(e.getSeconds())}`):8===t.displayvalue.length&&(s=`${t.displayvalue.substring(9,10)}:${t.displayvalue.substring(10,11)}:${t.displayvalue.substring(11,12)}`)}return E`
    <input
      class="fr-input"
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="time"
      aria-describedby="${ss(Ys(t,e))}"
      id="${ss(e)}"
      value="${s}"
    />
  `},ga=(t,e)=>t.options?E`
    <div class="fr-combo-box loaded">
    <select class="fr-select"
        data-ref="${t.reference}"
        list="${t.reference}"
        ?required="${t.requiredstate}"
        ?readonly="${t.readonlystate}"
        ?disabled="${t.disabledstate}"
        placeholder="${ss(Xs(t))}"
        type="text"
         aria-describedby="${ss(Ys(t,e))}"
        id="${ss(e)}"
        value="${Ne(t.displayvalue)}"
      />
        ${t.options.map((t=>E`
            <option value="${t.key}">
              ${t.value}
            </option>
          `))}
    </select>
    </div>`:null,fa=(t,e)=>E`
  ${t.map((t=>E`
    <th scope='col'>${i18n.t(t.config.label)}</th>`))}${e?null:E`<th></th>`}
`,ma=(t,e)=>{if(!e){const e=[];t.config.children[0].children.map(((t,s)=>(e[s]=t.config.value.replace("@P .",""),null)));const s=t.config.referenceList.replace("@P .","");return E`
    <ul class="fr-btns-group fr-btns-group--inline">
        <li><button type="button" class="fr-btn"
        data-newrow="${e.join()}"
        data-ref=${s} data-action-click="addRow">Ajouter une ligne</button></li>
      </ul>
    `}return null},ya=(t,e,s)=>{const a=t.config.referenceList.replace("@P .",""),i=t.config.children[0].children,n=Be(s.data.data.caseInfo.content,a);return n?E`
  ${n.map(((t,n)=>E`
    <tr>
    ${i.map((t=>E`
    <td>${Qs(t,void 0,e,s,`${a}(${n+1})`)}</td>`))}${e?null:E`<td><button type="button" class="fr-btn"
  data-ref=${`${a}(${n+1}).pyTemplate`}
  data-action-click='deleteRow'>Supprimer</button></td>`}
    </tr>`))}
`:null},$a=(t,e,s,a,i)=>{if(void 0===t)return null;if(!t.config||!t.config.template)return E`${t.map(((t,n)=>{const r=`${e}-${n}`;if("Region"===t.type)return $a(t.children,`${e}-0`,!0,a,i);if("reference"===t.type&&"view"===t.config.type){let e="";if(t.config.context&&(e=t.config.context),t.config.inheritedProps&&1===t.config.inheritedProps.length&&"label"===t.config.inheritedProps[0].prop){const n=i18n.t(t.config.inheritedProps[0].value),o=a.data.uiResources.resources.views[t.config.name];if(o){const t="SimpleTable"===o.config.template||"ListView"===o.config.template?"field-table":"field-subview";return E`<div class='${t}'><h4>${n}</h4>${$a(o,r,s,a,""===i?e.substring(1):i+e)}</div>`}}return $a(a.data.uiResources.resources.views[t.config.name],r,s,a,i&&""!==i?i+e:e.substring(1))}return Qs(t,r,s,a,i)}))}`;if("SimpleTable"===t.config.template)return((t,e,s)=>{const a=e||"Editable"!==t.config.renderMode;return E`
  <table class="fr-table fr-table--no-caption" data-fr-js-table="true">
    <caption>${t.config.name}</caption>
    <thead>
      <tr>
        ${fa(t.config.children[0].children,a)}
      </tr>
    </thead>
    <tbody>
      ${ya(t,a,s)}
    </tbody>
  </table>
  ${ma(t,a)}`})(t,s,a);if("ListView"===t.config.template)return((t,e,s)=>(s.sendData("dataviews",{id:t.config.referenceList,content:{paging:{pageNumber:1,pageSize:41}}}),E`
  <table class="fr-table fr-table--no-caption" data-fr-js-table="true">
    <caption>${t.config.name}</caption>
    <thead>
      <tr>
        ${fa(t.config.presets[0].children[0].children,e)}
      </tr>
    </thead>
    <tbody>${Fs()}
    </tbody>
  </table>`))(t,s,a);switch("DataReference"===t.config.template&&(a.isDeclarativeTarget=!0),"TwoColumn"===t.config.template&&1===t.children.length&&(t.config.template="OneColumn"),t.config.template){case"TwoColumn":return E`
        <div class="fr-container">
          <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--bottom">
            <div class="fr-col-6">${$a(t.children[0].children,`${e}-0`,s,a,i)}</div>
            <div class="fr-col-6">${$a(t.children[1].children,`${e}-0`,s,a,i)}</div>
          </div>
        </div>
        `;case"DefaultForm":case"OneColumn":return E`
          <div>
            ${$a(t.children[0].children,`${e}-0`,s,a,i)}
          </div>
        `;case"DataReference":return E`
          <div>
            ${$a(t.children,`${e}-0`,s,a,i)}
          </div>
        `;case"Details":return E`
          <div>
            ${$a(t.children[0].children,`${e}-0`,!0,a,i)}
          </div>
        `;default:return null}},ba=(t,e,s,a,i)=>{let n=i.data.name;return i.data&&i.data.data&&(n&&""!==n||(n=i.data.data.caseInfo.name),""!==i.data.data.caseInfo.assignments[0].instructions&&(n=i.data.data.caseInfo.assignments[0].instructions)),E`
  <fieldset  class="fr-fieldset"><legend>${n}</legend>
  ${$a(t,e,!1,i,"")}</fieldset>
  ${Ns(s)}
`};class va extends Ks{displayContent(){if(this.bShowSave="false",""!==this.errorMsg)return Hs(this.errorMsg,"true"===this.bShowCancel?this.resetError:null);if(("oauth2password"===this.authentication||"oauth2clientcredentials"===this.authentication)&&""===this.token)return this.sendData("authenticate",{}),null;if(this.casetypes||"createNewWork"!==this.action&&"workList"!==this.action?"createNewWork"===this.action&&""===this.caseID&&this.casetypes&&this.casetypes[this.casetype]?this.sendData("newwork",{id:this.casetype}):""===this.name&&("openAssignment"===this.action&&""===this.assignmentID&&(this.assignmentID=this.caseID),""!==this.assignmentID?this.fetchData("assignment",{id:this.assignmentID}):""!==this.caseID&&this.fetchData("view",{id:this.caseID,actionid:"pyReview"})):(this.fetchData("portal"),"createNewWork"===this.action?this.bShowNew=!0:"workList"===this.action&&(this.bShowCancel="true")),this.bShowConfirm){this.data.ID.split(" ")[1];return Ms(this.casedata.name,this.casepyStatusWork,"true"===this.bShowAttachments&&this.displayAttachments)}return""!==this.caseID||""!==this.assignmentID||this.bShowNew?E`
        ${this.name,t=this.data,e=this.casedata,s=this.openCase,void 0===t.caseID&&e.content?E`
    <div>
      <h2>${t.data.caseInfo.name}</h2>
    </div>
    ${qs(e.assignments,s)}`:""}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
        <form class="fr-form" id="case-data"></form>
      `:"workList"===this.action?Vs(this.cases,this.openCase):null;var t,e,s}renderMainLayout=(t,e)=>ba(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,0,this);renderReviewLayout=(t,e)=>((t,e,s,a)=>E`
  <div>${$a(t,e,!0,a)}</div>
  ${Os(s)}
`)(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,this);genPageValidationErrors=t=>(t=>t.errorDetails?E`
    <div role="alert" class="fr-alert fr-alert--error">
    <p class="fr-alert__title">Erreur</p>
    ${t.errorDetails.map((t=>"Error_Validation_Fail"===t.message||"Validation failed: Errors Detected."===t.message?null:E`<p>${t.localizedValue}</p>`))}
  </div>`:null)(t);showDataList=t=>E`
${t.pxResults.map((t=>E`
    <option>
      ${t.pyUserName}
    </option>`))}`;genLoadingIndicator=()=>Fs();setInlineError=(t,e)=>Us(t,e);validateForm=t=>Ps(t);reportFormValidity=t=>zs(t);clickHandler=t=>{let e=t.target;"path"===e.tagName&&(e=e.parentNode),"svg"===e.tagName&&(e=e.parentNode);const s=e.getAttribute("data-action-click");e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e),je(e,"click")?(this.refreshAssignment(e,He(e,"click")),t.preventDefault()):"BUTTON"===e.tagName&&(t.preventDefault(),null!==e.getAttribute("data-submit")&&"save"!==e.getAttribute("data-submit")?this.submitForm(t,e.getAttribute("data-submit")):("addRow"===s||"deleteRow"===s)&&this.refreshAssignment(e))};changeHandler=t=>{let e=t.target;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e.setCustomValidity(""),e.classList.remove("error-field"),je(e,"change")||this.isDeclarativeTarget)this.refreshAssignment(e,He(e,"change"));else if(this.refreshOnChange){const t=this.getRenderRoot().querySelector("#case-data");Ke(t,this.content,this.pageInstructions,this.data.data.caseInfo.content),M(ba(this.data.uiResources.resources.views[this.casedata.content.pyViewName],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,0,this),t)}};focusHandler=t=>{const e=t.target;e.classList.contains("fr-combo-box")&&!e.classList.contains("loaded")?this.getData(e.getAttribute("data-pageid"),e):"INPUT"===e.tagName&&e.classList.contains("location")&&!e.classList.contains("pac-target-input")&&window.google&&window.google.maps&&window.google.maps.places&&new window.google.maps.places.Autocomplete(e)};async firstUpdated(){const t=this.getRenderRoot();t&&(t.addEventListener("click",this.clickHandler),t.addEventListener("focusin",this.focusHandler),t.addEventListener("change",this.changeHandler))}}customElements.define("pega-govfr-v2",class extends va{createRenderRoot(){return this}getRenderRoot(){return this}render(){return E`
      ${this.displayContent()}
    `}})}();
