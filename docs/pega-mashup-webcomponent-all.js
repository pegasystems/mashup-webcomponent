!function(){"use strict";
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),i=new WeakMap;class n{constructor(t,e,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const a=this.t;if(e&&void 0===t){const e=void 0!==a&&1===a.length;e&&(t=i.get(a)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(a,t))}return t}toString(){return this.cssText}}const s=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const a of t.cssRules)e+=a.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,a))(e)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;var o;const r=window,l=r.trustedTypes,c=l?l.emptyScript:"",d=r.reactiveElementPolyfillSupport,h={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let a=t;switch(e){case Boolean:a=null!==t;break;case Number:a=null===t?null:Number(t);break;case Object:case Array:try{a=JSON.parse(t)}catch(t){a=null}}return a}},u=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:u};class g extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,a)=>{const i=this._$Ep(a,e);void 0!==i&&(this._$Ev.set(i,a),t.push(i))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const a="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,a,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,a){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const a of e)this.createProperty(a,t[a])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const a=new Set(t.flat(1/0).reverse());for(const t of a)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Ep(t,e){const a=e.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,a;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(a=t.hostConnected)||void 0===a||a.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var a;const i=null!==(a=this.shadowRoot)&&void 0!==a?a:this.attachShadow(this.constructor.shadowRootOptions);return((a,i)=>{e?a.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),n=t.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=e.cssText,a.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,a){this._$AK(t,a)}_$EO(t,e,a=p){var i;const n=this.constructor._$Ep(t,a);if(void 0!==n&&!0===a.reflect){const s=(void 0!==(null===(i=a.converter)||void 0===i?void 0:i.toAttribute)?a.converter:h).toAttribute(e,a.type);this._$El=t,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(t,e){var a;const i=this.constructor,n=i._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=i.getPropertyOptions(n),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(a=t.converter)||void 0===a?void 0:a.fromAttribute)?t.converter:h;this._$El=n,this[n]=s.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,a){let i=!0;void 0!==t&&(((a=a||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===a.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,a))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const a=this._$AL;try{e=this.shouldUpdate(a),e?(this.willUpdate(a),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(a)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(a)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var f;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:g}),(null!==(o=r.reactiveElementVersions)&&void 0!==o?o:r.reactiveElementVersions=[]).push("1.4.1");const m=window,b=m.trustedTypes,$=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,y="?"+v,x=`<${y}>`,w=document,C=(t="")=>w.createComment(t),D=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,_=/>/g,S=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),T=/'/g,E=/"/g,L=/^(?:script|style|textarea|title)$/i,R=(t=>(e,...a)=>({_$litType$:t,strings:e,values:a}))(1),M=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),N=new WeakMap,P=(t,e,a)=>{var i,n;const s=null!==(i=null==a?void 0:a.renderBefore)&&void 0!==i?i:e;let o=s._$litPart$;if(void 0===o){const t=null!==(n=null==a?void 0:a.renderBefore)&&void 0!==n?n:null;s._$litPart$=o=new j(e.insertBefore(C(),t),t,void 0,null!=a?a:{})}return o._$AI(t),o},U=w.createTreeWalker(w,129,null,!1),O=(t,e)=>{const a=t.length-1,i=[];let n,s=2===e?"<svg>":"",o=A;for(let e=0;e<a;e++){const a=t[e];let r,l,c=-1,d=0;for(;d<a.length&&(o.lastIndex=d,l=o.exec(a),null!==l);)d=o.lastIndex,o===A?"!--"===l[1]?o=I:void 0!==l[1]?o=_:void 0!==l[2]?(L.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=S):void 0!==l[3]&&(o=S):o===S?">"===l[0]?(o=null!=n?n:A,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,r=l[1],o=void 0===l[3]?S:'"'===l[3]?E:T):o===E||o===T?o=S:o===I||o===_?o=A:(o=S,n=void 0);const h=o===S&&t[e+1].startsWith("/>")?" ":"";s+=o===A?a+x:c>=0?(i.push(r),a.slice(0,c)+"$lit$"+a.slice(c)+v+h):a+v+(-2===c?(i.push(void 0),e):h)}const r=s+(t[a]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==$?$.createHTML(r):r,i]};class q{constructor({strings:t,_$litType$:e},a){let i;this.parts=[];let n=0,s=0;const o=t.length-1,r=this.parts,[l,c]=O(t,e);if(this.el=q.createElement(l,a),U.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=U.nextNode())&&r.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(v)){const a=c[s++];if(t.push(e),void 0!==a){const t=i.getAttribute(a.toLowerCase()+"$lit$").split(v),e=/([.?@])?(.*)/.exec(a);r.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?B:"?"===e[1]?Z:"@"===e[1]?J:V})}else r.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(L.test(i.tagName)){const t=i.textContent.split(v),e=t.length-1;if(e>0){i.textContent=b?b.emptyScript:"";for(let a=0;a<e;a++)i.append(t[a],C()),U.nextNode(),r.push({type:2,index:++n});i.append(t[e],C())}}}else if(8===i.nodeType)if(i.data===y)r.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(v,t+1));)r.push({type:7,index:n}),t+=v.length-1}n++}}static createElement(t,e){const a=w.createElement("template");return a.innerHTML=t,a}}function H(t,e,a=t,i){var n,s,o,r;if(e===M)return e;let l=void 0!==i?null===(n=a._$Cl)||void 0===n?void 0:n[i]:a._$Cu;const c=D(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,a,i)),void 0!==i?(null!==(o=(r=a)._$Cl)&&void 0!==o?o:r._$Cl=[])[i]=l:a._$Cu=l),void 0!==l&&(e=H(t,l._$AS(t,e.values),l,i)),e}class F{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:a},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:w).importNode(a,!0);U.currentNode=n;let s=U.nextNode(),o=0,r=0,l=i[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new j(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new Y(s,this,t)),this.v.push(e),l=i[++r]}o!==(null==l?void 0:l.index)&&(s=U.nextNode(),o++)}return n}m(t){let e=0;for(const a of this.v)void 0!==a&&(void 0!==a.strings?(a._$AI(t,a,e),e+=a.strings.length-2):a._$AI(t[e])),e++}}class j{constructor(t,e,a,i){var n;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=a,this.options=i,this._$C_=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$C_}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=H(this,t,e),D(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==M&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>k(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.O(t):this.$(t)}S(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==z&&D(this._$AH)?this._$AA.nextSibling.data=t:this.k(w.createTextNode(t)),this._$AH=t}T(t){var e;const{values:a,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=q.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(a);else{const t=new F(n,this),e=t.p(this.options);t.m(a),this.k(e),this._$AH=t}}_$AC(t){let e=N.get(t.strings);return void 0===e&&N.set(t.strings,e=new q(t)),e}O(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let a,i=0;for(const n of t)i===e.length?e.push(a=new j(this.S(C()),this.S(C()),this,this.options)):a=e[i],a._$AI(n),i++;i<e.length&&(this._$AR(a&&a._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var a;for(null===(a=this._$AP)||void 0===a||a.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$C_=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class V{constructor(t,e,a,i,n){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,a,i){const n=this.strings;let s=!1;if(void 0===n)t=H(this,t,e,0),s=!D(t)||t!==this._$AH&&t!==M,s&&(this._$AH=t);else{const i=t;let o,r;for(t=n[0],o=0;o<n.length-1;o++)r=H(this,i[a+o],e,o),r===M&&(r=this._$AH[o]),s||(s=!D(r)||r!==this._$AH[o]),r===z?t=z:t!==z&&(t+=(null!=r?r:"")+n[o+1]),this._$AH[o]=r}s&&!i&&this.P(t)}P(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class B extends V{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===z?void 0:t}}const W=b?b.emptyScript:"";class Z extends V{constructor(){super(...arguments),this.type=4}P(t){t&&t!==z?this.element.setAttribute(this.name,W):this.element.removeAttribute(this.name)}}class J extends V{constructor(t,e,a,i,n){super(t,e,a,i,n),this.type=5}_$AI(t,e=this){var a;if((t=null!==(a=H(this,t,e,0))&&void 0!==a?a:z)===M)return;const i=this._$AH,n=t===z&&i!==z||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==z&&(i===z||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,a;"function"==typeof this._$AH?this._$AH.call(null!==(a=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==a?a:this.element,t):this._$AH.handleEvent(t)}}class Y{constructor(t,e,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}}const G=m.litHtmlPolyfillSupport;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var K,X;null==G||G(q,j),(null!==(f=m.litHtmlVersions)&&void 0!==f?f:m.litHtmlVersions=[]).push("2.3.1");class Q extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const a=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=a.firstChild),a}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=P(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return M}}Q.finalized=!0,Q._$litElement$=!0,null===(K=globalThis.litElementHydrateSupport)||void 0===K||K.call(globalThis,{LitElement:Q});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:Q}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.2.2");const et=()=>R`
<span class="loading">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</span>
`,at=()=>R`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
<path d="M11.290625,2 C11.290625,2 13.2539062,2 13.2539062,2 C13.2539062,2 13.2539062,22.59375 13.2539062,22.59375 C13.2539062,22.59375 11.290625,22.59375 11.290625,22.59375 C11.290625,22.59375 11.290625,2 11.290625,2 Z M22.59375,11.3390625 C22.59375,11.3390625 22.59375,13.2546875 22.59375,13.2546875 C22.59375,13.2546875 2,13.2546875 2,13.2546875 C2,13.2546875 2,11.3390625 2,11.3390625 C2,11.3390625 22.59375,11.3390625 22.59375,11.3390625 L22.59375,11.3390625 Z"/>
</svg>`,it=()=>R`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.3375,3 C20.3375,3 21.7742187,4.43671875 21.7742187,4.43671875 C21.7742187,4.43671875 4.43671875,21.4867188 4.43671875,21.4867188 C4.43671875,21.4867188 3,20.19375 3,20.19375 C3,20.19375 20.3375,3 20.3375,3 Z M21.7265625,20.0976563 C21.7265625,20.0976563 20.3859375,21.534375 20.3859375,21.534375 C20.3859375,21.534375 3.00078125,4.3890625 3.00078125,4.3890625 C3.00078125,4.3890625 4.38984375,3 4.38984375,3 C4.38984375,3 21.7273438,20.0976563 21.7273438,20.0976563 L21.7265625,20.0976563 Z"/>
</svg>`,nt=()=>R`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1140625,3.96875 C22.1140625,3.96875 22.1140625,3.96875 22.1140625,3.96875 C22.1140625,3.96875 17.46875,3.96875 17.46875,3.96875 C17.46875,3.96875 16.9898437,2.14921875 16.9898437,2.14921875 C16.9421875,1.8140625 16.7507812,1.57421875 16.5109375,1.33515625 C16.2234375,1.09609375 15.8882813,1 15.553125,1 C15.553125,1 15.553125,1 15.553125,1 C15.553125,1 9.03984375,1 9.03984375,1 C8.7046875,1 8.4171875,1.09609375 8.1296875,1.2875 C7.8421875,1.52734375 7.65078125,1.76640625 7.603125,2.1015625 C7.603125,2.1015625 7.603125,2.1015625 7.603125,2.1015625 C7.603125,2.1015625 7.12421875,3.96953125 7.12421875,3.96953125 C7.12421875,3.96953125 2.47890625,3.96953125 2.47890625,3.96953125 C2.14375,3.96953125 2,4.11328125 2,4.4484375 C2,4.78359375 2.14375,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 2.47890625,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 4.01171875,4.92734375 4.01171875,4.92734375 C4.01171875,4.92734375 4.921875,23.1742188 4.921875,23.1742188 C4.96953125,23.5570312 5.11328125,23.8929688 5.40078125,24.1320313 C5.63984375,24.4195312 5.97578125,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 6.40625,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 18.2359375,24.5632812 18.2359375,24.5632812 C18.6671875,24.5632812 19.0023438,24.4195312 19.2898438,24.1320313 C19.5289063,23.8929688 19.6726562,23.5570312 19.7210938,23.1742188 C19.7210938,23.1742188 19.7210938,23.1742188 19.7210938,23.1742188 C19.7210938,23.1742188 20.63125,4.92734375 20.63125,4.92734375 C20.63125,4.92734375 22.115625,4.92734375 22.115625,4.92734375 C22.4507812,4.92734375 22.5945312,4.78359375 22.5945312,4.4484375 C22.5945312,4.11328125 22.4507812,3.96953125 22.115625,3.96953125 L22.1140625,3.96875 Z M8.17734375,3.96875 C8.17734375,3.96875 8.56015625,2.38828125 8.56015625,2.38828125 C8.6078125,2.1484375 8.79921875,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 9.0390625,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 15.5523437,2.00546875 15.5523437,2.00546875 C15.7914062,2.00546875 15.9835937,2.14921875 16.03125,2.38828125 C16.03125,2.38828125 16.03125,2.38828125 16.03125,2.38828125 C16.03125,2.38828125 16.4140625,3.96875 16.4140625,3.96875 C16.4140625,3.96875 8.1765625,3.96875 8.1765625,3.96875 L8.17734375,3.96875 Z M19.6710938,4.9265625 C19.6710938,4.9265625 18.7609375,23.1257812 18.7609375,23.1257812 C18.7132812,23.4132812 18.521875,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 18.234375,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 6.4046875,23.5570312 6.4046875,23.5570312 C6.1171875,23.5570312 5.92578125,23.4132812 5.878125,23.1257812 C5.878125,23.1257812 5.878125,23.1257812 5.878125,23.1257812 C5.878125,23.1257812 4.96796875,4.9265625 4.96796875,4.9265625 C4.96796875,4.9265625 19.6710938,4.9265625 19.6710938,4.9265625 L19.6710938,4.9265625 Z M8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,18.1929687 8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,10.3382812 8.84765625,10.3382812 C8.84765625,10.003125 9.0390625,9.859375 9.37421875,9.859375 C9.37421875,9.859375 9.37421875,9.859375 9.37421875,9.859375 C9.709375,9.859375 9.853125,10.003125 9.853125,10.3382812 C9.853125,10.3382812 9.853125,10.3382812 9.853125,10.3382812 C9.853125,10.3382812 9.853125,18.1929687 9.853125,18.1929687 C9.853125,18.528125 9.709375,18.671875 9.37421875,18.671875 C9.37421875,18.671875 9.37421875,18.671875 9.37421875,18.671875 C9.0390625,18.671875 8.84765625,18.528125 8.84765625,18.1929687 Z M14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,18.1929687 14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,10.3382812 14.7382812,10.3382812 C14.7382812,10.003125 14.8820313,9.859375 15.2171875,9.859375 C15.2171875,9.859375 15.2171875,9.859375 15.2171875,9.859375 C15.5523437,9.859375 15.74375,10.003125 15.74375,10.3382812 C15.74375,10.3382812 15.74375,10.3382812 15.74375,10.3382812 C15.74375,10.3382812 15.74375,18.1929687 15.74375,18.1929687 C15.74375,18.528125 15.5523437,18.671875 15.2171875,18.671875 C15.2171875,18.671875 15.2171875,18.671875 15.2171875,18.671875 C14.8820313,18.671875 14.7382812,18.528125 14.7382812,18.1929687 Z M11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,19.1507813 11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,9.38046875 11.8164062,9.38046875 C11.8164062,9.0453125 11.9601563,8.85390625 12.2953125,8.85390625 C12.6304687,8.85390625 12.7742187,9.0453125 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,9.38046875 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,19.1507813 12.7742187,19.1507813 C12.7742187,19.4859375 12.6304687,19.6773437 12.2953125,19.6773437 C11.9601563,19.6773437 11.8164062,19.4859375 11.8164062,19.1507813 Z"/>
</svg>`,st=()=>R`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.5226562,11.6265625 C20.6664062,11.6265625 20.7617188,11.6742188 20.8578125,11.7703125 C20.9539062,11.8664063 21.0015625,11.9617188 21.0015625,12.1054688 C21.0015625,12.2492188 20.9539062,12.3445313 20.8578125,12.440625 C20.8578125,12.440625 20.8578125,12.440625 20.8578125,12.440625 C20.8578125,12.440625 13.2429687,20.0554687 13.2429687,20.0554687 C12.1414062,21.109375 10.8484375,21.6359375 9.41171875,21.6359375 C7.975,21.6359375 6.68203125,21.109375 5.58046875,20.0554687 C5.58046875,20.0554687 5.58046875,20.0554687 5.58046875,20.0554687 C4.5265625,19.0015625 4,17.75625 4,16.271875 C4,16.271875 4,16.271875 4,16.271875 C4,14.8351563 4.5265625,13.5421875 5.58046875,12.440625 C5.58046875,12.440625 5.58046875,12.440625 5.58046875,12.440625 C5.58046875,12.440625 14.9671875,3.14921875 14.9671875,3.14921875 C15.7335937,2.3828125 16.64375,2 17.7453125,2 C18.846875,2 19.7570312,2.3828125 20.5234375,3.14921875 C20.5234375,3.14921875 20.5234375,3.14921875 20.5234375,3.14921875 C21.2898437,3.86796875 21.6726562,4.77734375 21.6726562,5.87890625 C21.6726562,5.87890625 21.6726562,5.87890625 21.6726562,5.87890625 C21.6726562,6.98046875 21.2898437,7.890625 20.5234375,8.65703125 C20.5234375,8.65703125 20.5234375,8.65703125 20.5234375,8.65703125 C20.5234375,8.65703125 11.8546875,17.2773438 11.8546875,17.2773438 C11.3757813,17.75625 10.8007812,17.9960938 10.1304687,17.9960938 C10.1304687,17.9960938 10.1304687,17.9960938 10.1304687,17.9960938 C9.5078125,17.9960938 8.88515625,17.7570313 8.35859375,17.2773438 C8.35859375,17.2773438 8.35859375,17.2773438 8.35859375,17.2773438 C7.8796875,16.7984375 7.63984375,16.2234375 7.63984375,15.553125 C7.63984375,14.8828125 7.87890625,14.3078125 8.35859375,13.8289062 C8.35859375,13.8289062 8.35859375,13.8289062 8.35859375,13.8289062 C8.35859375,13.8289062 16.6921875,5.54375 16.6921875,5.54375 C16.7882812,5.44765625 16.93125,5.4 17.075,5.4 C17.075,5.4 17.075,5.4 17.075,5.4 C17.21875,5.4 17.3140625,5.44765625 17.4101562,5.54375 C17.50625,5.63984375 17.5539062,5.73515625 17.5539062,5.87890625 C17.5539062,5.87890625 17.5539062,5.87890625 17.5539062,5.87890625 C17.5539062,6.02265625 17.50625,6.16640625 17.4101562,6.26171875 C17.4101562,6.26171875 17.4101562,6.26171875 17.4101562,6.26171875 C17.4101562,6.26171875 9.0765625,14.4992187 9.0765625,14.4992187 C8.7890625,14.7867187 8.6453125,15.121875 8.6453125,15.553125 C8.6453125,15.984375 8.7890625,16.3195313 9.0765625,16.6070312 C9.3640625,16.8945312 9.69921875,17.0382813 10.1304687,17.0382813 C10.1304687,17.0382813 10.1304687,17.0382813 10.1304687,17.0382813 C10.5132812,17.0382813 10.8492187,16.8945312 11.1359375,16.6070312 C11.1359375,16.6070312 11.1359375,16.6070312 11.1359375,16.6070312 C11.1359375,16.6070312 19.8523437,7.98671875 19.8523437,7.98671875 C20.4273437,7.41171875 20.7140625,6.69375 20.7140625,5.8796875 C20.7140625,5.8796875 20.7140625,5.8796875 20.7140625,5.8796875 C20.7140625,5.065625 20.4265625,4.3953125 19.8523437,3.8203125 C19.8523437,3.8203125 19.8523437,3.8203125 19.8523437,3.8203125 C19.2296875,3.2453125 18.5117187,2.95859375 17.7453125,2.95859375 C17.7453125,2.95859375 17.7453125,2.95859375 17.7453125,2.95859375 C16.93125,2.95859375 16.2609375,3.24609375 15.6859375,3.8203125 C15.6859375,3.8203125 15.6859375,3.8203125 15.6859375,3.8203125 C15.6859375,3.8203125 6.29921875,13.159375 6.29921875,13.159375 C5.4375,13.9734375 5.00625,14.9789062 5.00625,16.2726562 C5.00625,16.2726562 5.00625,16.2726562 5.00625,16.2726562 C5.00625,17.5179688 5.4375,18.5234375 6.29921875,19.3375 C6.29921875,19.3375 6.29921875,19.3375 6.29921875,19.3375 C7.1609375,20.1992188 8.21484375,20.6304688 9.4125,20.6304688 C9.4125,20.6304688 9.4125,20.6304688 9.4125,20.6304688 C10.7054687,20.6304688 11.7117187,20.1992188 12.5257812,19.3375 C12.5257812,19.3375 12.5257812,19.3375 12.5257812,19.3375 C12.5257812,19.3375 20.1882812,11.7703125 20.1882812,11.7703125 C20.284375,11.6742188 20.3796875,11.6265625 20.5234375,11.6265625 L20.5226562,11.6265625 Z"/>
</svg>`,ot=()=>R`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1632813,6.753125 C22.1632813,6.753125 22.1632813,6.753125 22.1632813,6.753125 C22.1632813,6.753125 15.8414062,0.43125 15.8414062,0.43125 C15.6023437,0.14375 15.21875,0 14.7875,0 C14.7875,0 14.7875,0 14.7875,0 C14.7875,0 3.48515625,0 3.48515625,0 C3.05390625,0 2.71875,0.14375 2.43125,0.43125 C2.14375,0.71875 2,1.05390625 2,1.48515625 C2,1.48515625 2,1.48515625 2,1.48515625 C2,1.48515625 2,23.0367188 2,23.0367188 C2,23.4679688 2.14375,23.803125 2.43125,24.090625 C2.71875,24.378125 3.05390625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 3.48515625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 21.109375,24.521875 21.109375,24.521875 C21.540625,24.521875 21.8757812,24.378125 22.1632813,24.090625 C22.4507812,23.803125 22.5945312,23.4679688 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,23.0367188 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,7.80703125 22.5945312,7.80703125 C22.5945312,7.37578125 22.4507812,7.040625 22.1632813,6.753125 Z M15.6976563,1.6765625 C15.6976563,1.6765625 20.8703125,6.84921875 20.8703125,6.84921875 C20.8703125,6.84921875 16.225,6.84921875 16.225,6.84921875 C15.8898438,6.84921875 15.7460938,6.70546875 15.7460938,6.3703125 C15.7460938,6.3703125 15.7460938,6.3703125 15.7460938,6.3703125 C15.7460938,6.3703125 15.6984375,1.6765625 15.6984375,1.6765625 L15.6976563,1.6765625 Z M21.6367188,7.8546875 C21.6367188,7.8546875 21.6367188,23.0367188 21.6367188,23.0367188 C21.6367188,23.371875 21.4453125,23.515625 21.1101563,23.515625 C21.1101563,23.515625 21.1101563,23.515625 21.1101563,23.515625 C21.1101563,23.515625 3.4859375,23.515625 3.4859375,23.515625 C3.15078125,23.515625 2.959375,23.371875 2.959375,23.0367188 C2.959375,23.0367188 2.959375,23.0367188 2.959375,23.0367188 C2.959375,23.0367188 2.959375,1.48515625 2.959375,1.48515625 C2.959375,1.15 3.15078125,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 3.4859375,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 14.740625,0.95859375 14.740625,0.95859375 C14.740625,0.95859375 14.740625,6.3703125 14.740625,6.3703125 C14.740625,6.8015625 14.884375,7.13671875 15.171875,7.42421875 C15.459375,7.71171875 15.7945313,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 16.2257813,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 21.6375,7.85546875 21.6375,7.85546875 L21.6367188,7.8546875 Z"/>
</svg>`,rt=(t,e,a,i,n)=>{const s=document.createElement("div");s.setAttribute("role","alertdialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-labelledby",t),s.setAttribute("aria-describedby",""),s.setAttribute("class","mashup-modal");const o=document.createElement("div");s.appendChild(o);const r='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',l=()=>{document.body.removeEventListener("click",c),document.body.removeEventListener("keydown",d),s&&(s.previousElementSibling&&(s.previousElementSibling.removeAttribute("aria-hidden"),s.previousElementSibling.focus()),s.remove()),n&&n()},c=t=>{if(t){let e=t.target;if(e.download)return;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e){const t=e.closest("button");if((null===t||"close"!==t.getAttribute("data-action-id"))&&!e.classList.contains("mashup-modal")&&null!==e.closest(".mashup-modal"))return}l()}},d=t=>{if("Escape"===t.key)return void c(t);if(!("Tab"===t.key||9===t.keyCode))return;const e=s.querySelectorAll(r),a=e[e.length-1],i=e[0];t.shiftKey?document.activeElement===i&&(a.focus(),t.preventDefault()):document.activeElement===a&&(i.focus(),t.preventDefault())};return R`
  <div class='modalcontent'>
    <button type="button" @click="${t=>{t.preventDefault(),t.stopPropagation();const e=t.target.closest(".modalcontent");if(null===e)l();else if(1===e.children.length){e.firstElementChild.setAttribute("aria-hidden","true"),s.style.opacity=0,e.appendChild(s),i(o);s.querySelectorAll(r)[0].focus(),document.body.addEventListener("click",c),document.body.addEventListener("keydown",d),s.offsetHeight,s.style=""}else l()}}" class="pzhc pzbutton ${a}" title="${i18n.t(t)}">${i18n.t(e)}</button>
  </div>`},lt=t=>`0${t}`.slice(-2),ct=t=>`0${t}`.slice(-4),dt=t=>{if(t.endsWith(" GMT")&&23===t.length)return new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T${t.substring(9,11)}:${t.substring(11,13)}:${t.substring(13,19)}Z`);if(8===t.length){return new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T00:00:00.000Z`)}if(10===t.length){return new Date(`${t.substring(6,10)}-${t.substring(0,2)}-${t.substring(3,5)}T00:00:00.000Z`)}return null},ht=t=>t&&"string"==typeof t?t.replace(/&amp;|&lt;|&gt;|&#39;|&#40;|&#41;|&quot;/g,(t=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&#40;":"(","&#41;":")","&quot;":'"'}[t]||t))):"",ut=(t,e,a,i,n)=>{if("string"!=typeof e)return;if(i){const t=gt(i,e);if(t===n||`${t}`==`${n}`||null===t&&""===n)return;pt(i,e,n)}const s=e.lastIndexOf(".");if(-1===s)return void(t[e]=n);if(!a)return void pt(t,e,n);const o={};let r=e.substring(0,s);const l=r.lastIndexOf("(");if(-1===l)o[e.substring(s+1)]=n,a.push({instruction:"UPDATE",target:r,content:o});else{const t=r.lastIndexOf(")"),i=r.substring(l+1,t);r=r.substring(0,l),pt(o,e.substring(t+2),n),a.push({instruction:"UPDATE",target:r,listIndex:parseInt(i,10),content:o})}},pt=(t,e,a)=>{if("string"!=typeof e)return;const i=e.split(".");let n=t;for(const t in i){let e=i[t];const s=e.indexOf("(");if(-1===s)t<i.length-1?void 0===n[e]&&(n[e]={}):n[e]=a,n=n[e];else{const t=e.substring(s+1,e.length-1);e=e.substring(0,s),void 0===n[e]&&(n[e]=[]);for(let a=n[e].length;a<t;a++)n[e].push({});n=n[e][t-1]}}},gt=(t,e)=>{if("string"!=typeof e||""===e)return null;let a=e;0===e.indexOf(".")&&(a=e.substring(1));let i=t;const n=a.split(".");for(const t in n){const e=n[t],a=e.indexOf("(");if(-1===a){if(void 0===i[e])return null;i=i[e]}else{const t=e.substring(a+1,e.length-1),n=i[e.substring(0,a)];if(!(n&&Array.isArray(n)&&n.length>=t))return null;i=n[t-1]}}return i},ft=t=>{for(const e in t)"object"==typeof t[e]?ft(t[e]):"string"==typeof t[e]&&(t[e]="")},mt=(t,e)=>{for(const a in t)if("fieldID"===a)e.push(t.fieldID);else{const i=t[a];i.fieldID?e.push(i.fieldID):"object"==typeof i&&mt(i,e)}},bt=(t,e,a)=>{let i=gt(t,e);if(null===i&&(i=[],pt(t,e,i)),!Array.isArray(i))return null;if(a&&"string"==typeof a){const t={},n=a.split(",");for(const e in n)t[n[e]]="";return i.push(t),{instruction:"APPEND",target:e,content:t}}if(0===i.length)return null;const n={...i[0]};return ft(n),i.push(n),{instruction:"APPEND",target:e,content:n}},$t=(t,e)=>{let a,i=e;-1!==e.indexOf(").pyTemplate")&&(a=parseInt(i.substring(e.lastIndexOf("(")+1,e.lastIndexOf(")")),10),i=i.substring(0,e.lastIndexOf("(")));const n=gt(t,i);if(!Array.isArray(n))return null;if(1===n.length){for(const t in n[0])"pxObjClass"!==t&&(n[0][t]="");return null}return a?n.length<a?null:(n.splice(a-1,1),{instruction:"DELETE",target:i,listIndex:a}):(n.length-=1,{instruction:"DELETE",target:i,listIndex:n.length})},vt=(t,e)=>{const a=t.getAttribute(`data-action-${e}`);return!(!a||"postValue"!==a&&0!==a.indexOf("refresh"))},yt=(t,e)=>{const a=t.getAttribute(`data-action-${e}`);return a&&0===a.indexOf("refresh")?a.replace("refresh-",""):""};function xt(t,e,a){try{switch(e){case">":return parseInt(t,10)>parseInt(a,10);case"<":return parseInt(t,10)<parseInt(a,10);case">=":return parseInt(t,10)>=parseInt(a,10);case"<=":return parseInt(t,10)<=parseInt(a,10);case"==":return`${t}`==`${a}`;case"!=":return`${t}`!=`${a}`}}catch(t){}return!1}const wt=(t,e,a)=>{const i=t.replace("@E ","").split("&&");for(const t in i){const n=i[t].trim().match(/[\w.]+|[><=!]+|'[^']+'/g);if(3===n.length){const t=""===a?e[n[0].substring(1)]:gt(e,a+n[0]);if(void 0!==t&&!xt(t,n[1],n[2].replace(/^'|'$/g,"")))return!1}}return!0},Ct=(t,e,a,i)=>{for(const n of t.elements)if("INPUT"===n.tagName||"TEXTAREA"===n.tagName||"SELECT"===n.tagName){const t=n.getAttribute("data-ref");if(null!==t&&"pyID"!==t)if("INPUT"===n.tagName){const s=n.getAttribute("type");if(n.classList.contains("input-date-day")||n.classList.contains("input-date-month")||n.classList.contains("input-date-year")){if(n.classList.contains("input-date-day")){const s=n.closest(".input-date").parentNode,o=s.querySelector(".input-date-month"),r=s.querySelector(".input-date-year");if(null!==o&&null!==r&&""!==n.value&&""!==o.value&&""!==r.value){const s=`${lt(o.value)}/${lt(n.value)}/${ct(r.value)}`;ut(e,t,a,i,s)}}}else if("checkbox"===s)ut(e,t,a,i,n.checked);else if("radio"===s)n.checked&&ut(e,t,a,i,n.value);else if("tel"===s){let s=n.value;"SELECT"===n.parentNode.firstElementChild.tagName&&"field-countrycode"===n.parentNode.firstElementChild.className&&(s=n.parentNode.firstElementChild.value+s),ut(e,t,a,i,s)}else if("date"===s){let s;n.valueAsDate&&(s=new Date(n.valueAsDate)),s&&s instanceof Date&&s.getTime()==s.getTime()||(s=new Date(n.value)),s&&s instanceof Date&&s.getTime()==s.getTime()?ut(e,t,a,i,`${s.getUTCFullYear()}-${lt(s.getUTCMonth()+1)}-${lt(s.getUTCDate())}`):ut(e,t,a,i,n.value)}else ut(e,t,a,i,n.value)}else ut(e,t,a,i,n.value)}if(t&&t.querySelectorAll){const s=t.querySelectorAll("[contenteditable]");for(let t=0;t<s.length;t++){const o=s[t],r=o.getAttribute("data-ref");ut(e,r,a,i,(n=o.innerHTML)&&"string"==typeof n?n.replace(/[&<>'"]/g,(t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","(":"&#40;",")":"&#41;",'"':"&quot;"}[t]||t))):"")}}var n},Dt=(t,e,a)=>{for(const i of t.elements)if("INPUT"===i.tagName||"TEXTAREA"===i.tagName||"SELECT"===i.tagName){const t=`.${i.getAttribute("data-ref")}`;if(null!==t&&"pyID"!==t)for(const n in e){if(e[n].Path===t){a.setInlineError(i,e[n].ValidationMessage);break}if(e[n].erroneousInputOutputFieldInPage===t){a.setInlineError(i,e[n].localizedValue);break}}}},kt=(t,e)=>{const a=e||[],i={};for(const[e,n]of Object.entries(t))if("string"==typeof n||"boolean"==typeof n)i[e]=n;else if("object"==typeof n)if(Array.isArray(n))for(const t in n){const i={instruction:"UPDATE",target:e,listIndex:parseInt(t,10)+1,content:n[t]};a.push(i)}else{const t={instruction:"UPDATE",target:e,content:n};a.push(t)}return{pageInstructions:a,pageupdate:i}};function At(t){return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function It(t,e,a){t(null,{verifier:e,challenge:At(String.fromCharCode.apply(null,new Uint8Array(a)))})}const _t=()=>new Promise(((t,e)=>{!function(t,e){let a=t;a||(a=43);const i=window.msCrypto||window.crypto,n=At(Array.prototype.map.call(i.getRandomValues(new Uint8Array(a)),(t=>String.fromCharCode(t))).join("")).substring(0,a),s=new Uint8Array(n.length);for(let t=0;t<n.length;t++)s[t]=n.charCodeAt(t);const o=i.subtle.digest("SHA-256",s);window.CryptoOperation?(o.onerror=e,o.oncomplete=t=>{It(e,n,t.target.result)}):o.then((t=>{It(e,n,t)})).catch(e)}(43,((a,{verifier:i,challenge:n})=>{a?e(new Error("error")):t({verifier:i,challenge:n})}))})),St=(t,e,a,i,n)=>{if(null==i)return null;let s;const o=`${Math.random().toString(36).substr(2,9)}`,r=document.createElement("ul");r.setAttribute("id",`menu-overlay-${o}`),r.setAttribute("role","menu"),r.setAttribute("aria-labelledby",`menubutton-${o}`),r.setAttribute("tabindex","-1");const l=()=>{document.body.removeEventListener("click",d),document.body.removeEventListener("keydown",c),r&&(r.previousElementSibling&&(r.previousElementSibling.setAttribute("aria-expanded","false"),r.previousElementSibling.focus()),r.remove())},c=t=>{38===t.keyCode?(s=s.previousElementSibling,null===s&&(s=r.lastElementChild),s.focus()):40===t.keyCode?(s=s.nextElementSibling,null===s&&(s=r.firstElementChild),s.focus()):27===t.keyCode||9===t.keyCode?l():13===t.keyCode&&(i(t),l())},d=t=>{if(t){let e=t.target;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&e.nextElementSibling===r)return;e.parentNode===r&&i(t),l()}},h=t=>{if("keydown"===t.type&&40!==t.keyCode)return;if(t.preventDefault(),t.stopPropagation(),"blur"===t.type)return void d(t);const e=t.currentTarget;"BUTTON"!==e.tagName?(i(t),l()):null===e.nextElementSibling?(e.parentNode.appendChild(r),e.setAttribute("aria-expanded","true"),P(a(),r),s=e.nextElementSibling.firstElementChild,s.focus(),document.body.addEventListener("click",d),document.body.addEventListener("keydown",c)):l()};return R`
    <div class="button-menu">
    <button type='button' id="${`menubutton-${o}`}" aria-haspopup="true" aria-controls="${`menu-overlay-${o}`}" aria-expanded="false"
    @click="${h}" @keydown="${h}" @blur="${h}"
    class="${`pzhc pzbutton Simple ${n||"action-menu"}`}" aria-label="${i18n.t(e)}">${i18n.t(t)}</button>
    </div>
  `},Tt=(t,e,a,i)=>rt(t,e,a,(t=>{P(Et(t,[]),t),i(t)})),Et=(t,e,a,i,n)=>{let s=0;const o=t=>{if(void 0===t||"string"==typeof t&&""===t)return;if("URL"===e[s].category)return void window.open(t);let a=e[s].fileName;if(void 0===a&&(a=e[s].name),void 0===a&&(a=e[s].pyAttachName),!a)return;const i=window.document.createElement("a");if("Correspondence"===e[s].category){a=`${e[s].name}.html`;const n=`<html><head><title>${e[s].name}</title></head><body>${t}</body></html>`,o=new Blob([n],{type:"text"});i.href=window.URL.createObjectURL(o)}else{const e=function(t){const e=window.atob(t),a=e.length,i=new Uint8Array(a);for(let t=0;t<a;t++){const a=e.charCodeAt(t);i[t]=a}return i}(t),a=new Blob([e],{type:"octet/stream"});i.href=window.URL.createObjectURL(a)}i.download=a,document.body.appendChild(i),i.click(),document.body.removeChild(i)},r=t=>{t.stopPropagation();const a=t.target;s=a.getAttribute("data-id"),i.fetchData.call(i,"attachment",{id:e[s].ID,target:o})},l=a=>{a.preventDefault(),a.stopPropagation();const n=a.target.closest("button");s=n.getAttribute("data-id"),i.sendData.call(i,"deleteattachment",{id:e[s].ID,target:t})},c=o=>{o.stopPropagation();const r=o.target.closest("button");s=parseInt(r.getAttribute("data-id"),10),n.splice(s,1),P(Et(t,e,a,i,n),t)},d=t=>{t.stopPropagation(),t.preventDefault();const e=t.target;if(s=e.getAttribute("data-id"),"INPUT"===e.tagName){const t=e.getAttribute("data-prop-id");n[s][t]=e.value}else"SELECT"===e.tagName&&(n[s].category=e.value)},h=e=>{e.preventDefault();const a=e.target,i=e.relatedTarget,n=null===a?null:a.closest(".attach-files"),s=null===i?null:i.closest(".attach-files");if("dragenter"===e.type||"dragover"===e.type?null!=n&&n.classList.add("drop-file-hover"):"dragleave"!==e.type&&"drop"!==e.type||null===s&&null!==n&&n.classList.remove("drop-file-hover"),"drop"===e.type){const i=e.dataTransfer.files;t||(t=a.closest(".attach-files")),p(a,i)}},u=s=>{s&&(s.stopPropagation(),s.preventDefault());for(let s=0;s<n.length;s++){const o=n[s];delete o.editing,o.loading=!0,"URL"===o.type?(e.unshift(o),i.sendData.call(i,"attachments",{id:a,actionid:[o],target:t})):(e.unshift({name:o.displayName,extension:o.extension,loading:!0}),i.sendData.call(i,"uploadattachment",{actionid:o,target:t}))}P(Et(t,e,a,i),t)},p=(n,s)=>{const o=[];for(let t=0;t<s.length;t++){const e=s[t];let a=e.name.lastIndexOf(".");-1===a&&(a=e.name.length),e.displayName=e.name.substring(0,a),e.extension=e.name.substring(a+1),e.editing=!0,e.category="File",o.push(e)}P(Et(t,e,a,i,o),t)},g=e=>{e.stopPropagation();let a=e.target;if("BUTTON"===a.tagName)return a=e.target.parentNode.parentNode.firstElementChild,void a.click();t||(t=a.closest(".attach-files")),p(a,a.files)},f=n=>{n.stopPropagation();P(Et(t,e,a,i,[{type:"URL",category:"URL",name:"",url:"",editing:!0}]),t)},m=n=>{n.stopPropagation(),P(Et(t,e,a,i),t)},b=(t,e)=>{let a=new Date(e.createTime);return a=a.toLocaleDateString(void 0,{year:"numeric",month:"numeric",day:"numeric"}),R`
    <div class='list-item-title'>
      <button type='button' class='Light'  data-id="${t}" @click="${r}">${e.name}</button>
      ${e.loading?"":R`
      <span class='list-item-meta'><span>${e.createdBy}</span><span>${a}</span><span>${i18n.t("Category:")} ${e.category}</span></span>`}
    </div>`},$=()=>R`<li role="menuitem" tabindex="-1" data-value="Download">${i18n.t("Download")}</li>
  <li role="menuitem" tabindex="-1" data-value="Delete">${i18n.t("Delete")}</li>`,v=n=>{let r=n.target;if(n.path&&n.path.length>0?r=n.path[0]:n.originalTarget&&(r=n.originalTarget),r){const n=r.getAttribute("data-value"),l=e[s].pzInsKey||e[s].ID;"Download"===n?i.fetchData.call(i,"attachment",{id:l,target:o}):"Delete"===n&&(i.sendData.call(i,"deleteattachment",{id:l,target:t}),P(Et(void 0,[],a,i,[]),t))}},y=t=>R`<div class='row-item'>
    <span class='doc-icon'>${ot()}<span>${t.extension}</span></span>
    <div class='list-item-title'><span>${t.pyAttachName||t.name}</span>
    <span class="list-item-meta"><span>${t.pyCategoryName||t.category}</span>
    <span>${t.pxCreateOperator||t.createdBy}</span></span></div>
    ${St(R`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
<path d="M14.353125,6.353125 C13.9703125,6.7359375 13.4914062,6.928125 12.9640625,6.928125 C12.4367188,6.928125 11.9585938,6.73671875 11.575,6.353125 C11.1921875,5.9703125 11,5.49140625 11,4.9640625 C11,4.43671875 11.1914062,3.95859375 11.575,3.575 C11.9578125,3.1921875 12.4367188,3 12.9640625,3 C13.4914063,3 13.9695312,3.19140625 14.353125,3.575 C14.7359375,3.9578125 14.928125,4.43671875 14.928125,4.9640625 C14.928125,5.49140625 14.7367187,5.96953125 14.353125,6.353125 Z M14.353125,13.7289063 C13.9703125,14.1117188 13.4914062,14.3039063 12.9640625,14.3039063 C12.4367188,14.3039063 11.9585938,14.1125 11.575,13.7289063 C11.1921875,13.3460938 11,12.8671875 11,12.3398438 C11,11.8125 11.1914062,11.334375 11.575,10.9507813 C11.9578125,10.5679688 12.4367188,10.3757813 12.9640625,10.3757813 C13.4914063,10.3757813 13.9695312,10.5671875 14.353125,10.9507813 C14.7359375,11.3335938 14.928125,11.8125 14.928125,12.3398438 C14.928125,12.8671875 14.7367187,13.3453125 14.353125,13.7289063 Z M14.353125,21.1039062 C13.9703125,21.4867187 13.4914062,21.6789062 12.9640625,21.6789062 C12.4367188,21.6789062 11.9585938,21.4875 11.575,21.1039062 C11.1921875,20.7210938 11,20.2421875 11,19.7148438 C11,19.1875 11.1914062,18.709375 11.575,18.3257813 C11.9578125,17.9429688 12.4367188,17.7507813 12.9640625,17.7507813 C13.4914063,17.7507813 13.9695312,17.9421875 14.353125,18.3257813 C14.7359375,18.7085937 14.928125,19.1875 14.928125,19.7148438 C14.928125,20.2421875 14.7367187,20.7203125 14.353125,21.1039062 Z"></path>
</svg>`,"Actions",$,v,"button-action")}
  </div>`,x=(t,e)=>e.loading?R`${b(t,e)}${et()}`:e.editing?"URL"===e.type?R`
      <div class='flex content-item field-item'>
        <label for='url-name'>Name</label>
        <input type='text' id='url-name' data-prop-id='name' @change="${d}" data-id="${t}" value="${e.name}"/>
      </div>
      <div class='flex content-item field-item'>
        <label for='url-url'>URL</label>
        <input type='text' id='url-url' data-prop-id='url' @change="${d}" data-id="${t}" value="${e.url}"/>
      </div>`:R`
      <input type='text' data-prop-id='displayName' class='flex-all' @change="${d}"
      data-id="${t}" value="${e.displayName}" aria-label='${i18n.t("name")}'/>
      ${((t,e)=>R`
    <select data-id="${t}" @change="${d}" class='flex-all' aria-label='${i18n.t("Category")}'>
    ${i.attachmentcategories.map((t=>R`
      <option ?selected=${t.ID===e}>${t.ID}</option>
    `))}
    </select>`)(t,e.category)}
      <span class='flex-all'>${e.name}</span>
      <span>${Math.round(e.size/1e3)}Kb</span>
      <button type='button' data-id="${t}" @click="${c}" class='pzhc pzbutton Simple'
      aria-label=${i18n.t("Delete")}>${nt()}</button>`:R`${b(t,e)}
    <button type='button' data-id="${t}" @click="${l}" class='pzhc pzbutton Simple'
    aria-label=${i18n.t("Delete")}>${nt()}</button>`,w=t=>{if(!a)return et();const e=[];if(void 0!==t){const a=Object.entries(t);for(const t of a){let a=t[1].extension;void 0===a&&(a=t[1].type),a||(a=""),a.length>5&&(a=a.substring(0,5)),"URL"===t[1].type&&t[1].editing?e.push(R`<div class='flex layout-content-stacked content-items-maxwidth'>
              ${x(t[0],t[1])}
            </div>`):e.push(R`<div class='row-item'>
              <span class='doc-icon'>${ot()}<span>${a}</span></span>
              ${x(t[0],t[1])}
            </div>`)}}return e&&e.length>0?e:R`<div class='empty'>${i18n.t("no attachments found")}</div>`};if(!t){if(e&&e.length>0&&e[0].pyAttachName){s=0,e[0].extension="";const t=e[0].pyAttachName.split(".");return t.length>1&&(e[0].extension=t[t.length-1]),y(e[0])}return R`<div @dragenter="${h}" @dragover="${h}" @dragleave="${h}"
    @drop="${h}" class='attach-files list-items'>
      <div class="file-upload">
        <input @change="${g}" type="file">
        ${st()}<span>${i18n.t(" Drag and drop or ")}
        <button type='button' aria-labelledby='${i18n.t("click to attach a file")}' class='Light' @click="${g}">${i18n.t("choose file")}</button>
      </div>
    </div>`}if(t&&t.classList.contains("attach-files")){if(n&&n.length>0)return i.sendData.call(i,"uploadattachment",{actionid:n[0],target:t}),C=n[0],D=!0,R`<div class='row-item'>
    <span class='doc-icon'>${ot()}<span>${C.extension}</span></span>
    <div class='list-item-title'><span>${C.displayName}</span>${D?R`<span class="list-item-meta"><span>
    ${i18n.t("Uploading...")}</span></span>`:""}</div>
  </div>`;if(e&&e.length>0)return y(e[0])}var C,D;let k="Attachments";return void 0!==n&&n.length>0&&(k="URL"===n[0].type?"Attach a link":"Attach files"),R`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${i18n.t(k)}</h2>
      <div class="flex layout-content-inline_middle margin-l-auto">
        <button type='button' data-action-id='close'
        class="pzhc pzbutton Simple" aria-label="${i18n.t("Close modal")}">${it()}</button>
      </div>
    </div>
    ${void 0!==n&&n.length>0?R`
      <div id="modalcontent" class='attach-files list-items'>
        <div class='upload-content'>${w(n)}</div>
        <div class="action-button-area">
          <button type="button" class="pzhc pzbutton" @click="${m}">${i18n.t("Cancel")}</button>
          <button type="button" class="Strong pzhc pzbutton" @click="${u}">${i18n.t("Upload")}</button>
        </div>
      </div>`:R`
      <form id="modalcontent" @dragenter="${h}" @dragover="${h}" @dragleave="${h}"
      @drop="${h}" class='attach-files list-items'>
        <div class="file-upload">
          <input @change="${g}" type="file" multiple="">
          ${st()}<span>${i18n.t(" Drag and drop files, attach ")}
          <button type='button' aria-label='${i18n.t("click to attach a file")}' class='Light' @click="${g}">
          ${i18n.t("files")}</button> ${i18n.t("or add a")}
          <button type='button' aria-label='${i18n.t("click to add a URL link")}' class='Light' @click="${f}">
          ${i18n.t("link")}</button></span>
        </div>
        ${w(e)}
      </form>
    `}
  `},Lt=(t,e)=>R`
<div class="flex layout-content-inline_middle main-header">
  <h2>${i18n.t(t)}</h2>
  <div class="flex layout-content-inline_middle margin-l-auto">
    <button type='button' data-action-id='close'
    class="pzhc pzbutton Simple" aria-label="${i18n.t("Close modal")}">${it()}</button>
  </div>
</div>
<div class="validation" role="alert" aria-live="assertive"></div>
<form id="modalcontent">${e}</form>
`;class Rt extends Q{static get properties(){return{url:{},caseID:{},dataviewParams:{type:Object},username:{},password:{},title:{},bShowCreate:{},bShowCancel:{},bShowAttachments:{},bShowSave:{},bShowActions:{},authentication:{},token:{},clientid:{},clientsecret:{},initialContent:{},action:{},casetype:{},portalName:{},langTokens:{}}}constructor(){super(),this.url="",this.title="My worklist",this.caseID="",this.username="",this.password="",this.bShowCreate="true",this.bShowCancel="true",this.bShowAttachments="false",this.bShowSave="true",this.bShowActions="true",this.authentication="",this.token="",this.clientid="",this.clientsecret="",this.initialContent="",this.action="",this.casetype="",this.portalName="",this.cases=[],this.dataPages={},this.name="",this.etag="",this.casepyStatusWork="",this.casedata={},this.data={},this.numAttachments=0,this.attachmentcategories=[],this.assignmentID="",this.actionID="",this.content={},this.dataviewParams={},this.pageInstructions=[],this.errorMsg="",this.validationMsg="",this.bShowConfirm=!1,this.bShowNew=!1,this.refreshOnChange=!1,this.isDeclarativeTarget=!1;const t=this;window.i18n||(window.i18n={t:function(e){if(!e)return"";if("string"!=typeof e)return e;let a=e;if(0===a.indexOf("@L ")&&(a=a.substring(3)),a=a.replace(/^"|"$/g,"").trim(),a=ht(a),"object"!=typeof t.langTokens)return a;const i=t.langTokens[a];return i&&""!==i?i.trim():(console.log(a),a)}})}clearLoadingIndicator(){const t=this.getRenderRoot().querySelector("#case-data");t&&null!==t.querySelector(".loading")&&P(null,t)}sendExternalEvent(t){this.dispatchEvent(new CustomEvent("message",{detail:{...t}}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const Mt=2,zt=t=>(...e)=>({_$litDirective$:t,values:e});class Nt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,a){this._$Ct=t,this._$AM=e,this._$Ci=a}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class Pt extends Nt{constructor(t){if(super(t),this.it=z,t.type!==Mt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===z||null==t)return this._t=void 0,this.it=t;if(t===M)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Pt.directiveName="unsafeHTML",Pt.resultType=1;const Ut=zt(Pt),Ot=t=>null!=t?t:z,qt=(t,e)=>{if(t.control&&t.control.actionSets&&t.control.actionSets.length>0)for(const a of t.control.actionSets)if(a.events.length>0&&a.actions.length>0&&a.events[0].event===e){let t=a.actions[0].action;return"refresh"===t&&""!==a.actions[0].refreshFor&&(t+=`-${a.actions[0].refreshFor}`),t}},Ht=t=>"pyTemplateButton"!==t.reference?t.reference:t.control&&t.control.modes?t.control.modes[1].tooltip:null,Ft=(t,e,a)=>{if(void 0===e)return null;const i=t.required&&!0!==t.readOnly?"icon-required":"";return"field-checkbox"===a?""!==t.label||!0===t.showLabel?R`<div class="field-caption dataLabelForWrite ${i}">${ht(t.label)}</div>`:null:"field-text"===a&&!0===t.readOnly&&"pxCheckbox"===t.control.type&&t.control.label?R`<label class="field-caption dataLabelForWrite">${ht(t.control.label)}</label>`:""!==t.label||!0===t.showLabel||!0===t.labelReserveSpace?R`<label class="field-caption dataLabelForWrite ${i}" for="${Ot(e)}">${ht(t.label)}</label>`:null},jt=(t,e,a,i)=>{if(void 0===e||-1!==e.indexOf("-table-"))return"field-checkbox"===a?R`<div class="flex">${i}</div>`:R`
      ${i}
    `;if("field-button"===a){if(!(t=>!!(t.control&&t.control.actionSets&&t.control.actionSets.length>0))(t))return null;if(!t.showLabel)return R`<div>${i}</div>`}return"field-radiogroup"===a?R`
    <div class="flex content-item field-item ${a}"><fieldset><legend>${Ft(t,e,a)}</legend>${i}</fielset></div>
  `:"field-checkbox"===a?R`
    <div class="flex content-item field-item ${a}">${i}</div>
  `:R`
    <div class="flex content-item field-item ${a}">${Ft(t,e,a)}${i}</div>
  `},Vt=(t,e,a,i)=>{if(void 0===t||void 0===t.control||void 0===t.control.type)return null;if(t.customAttributes&&"none"===t.customAttributes.display)return null;if(!0===a||!0===t.readOnly||"pxHidden"===t.control.type)return jt(t,e,"field-text",Bt(t,e));if(i.casedata&&i.casedata.content){gt(i.casedata.content,t.reference)||("pxCheckbox"===t.control.type?pt(i.casedata.content,t.reference,"true"==t.value):pt(i.casedata.content,t.reference,t.value))}switch(t.control.type){case"pxPhone":case"pxURL":case"pxTextInput":return jt(t,e,"field-textinput",Wt(t,e));case"pxInteger":case"pxNumber":return jt(t,e,"field-numberinput",Jt(t,e));case"pxCurrency":return jt(t,e,"field-currencyinput",Yt(t,e));case"pxEmail":return jt(t,e,"field-emailinput",Gt(t,e));case"pxTextArea":return jt(t,e,"field-textarea",Kt(t,e));case"pxRadioButtons":return jt(t,e,"field-radiogroup",se(t,e));case"pxCheckbox":return jt(t,e,"field-checkbox",oe(t,e));case"pxDropdown":return jt(t,e,"field-dropdown",re(t,e));case"pxDisplayText":return jt(t,e,"field-text",Bt(t,e));case"pxIcon":return jt(t,e,"field-icon",Xt(t,e));case"pxLink":return jt(t,e,"field-url",Qt(t,e));case"pxIconDeleteItem":return jt(t,e,"field-button",ee(t,e));case"pxButton":return jt(t,e,"field-button",te(t,e));case"pxDateTime":return"TimeOfDay"===t.type?jt(t,e,"field-time",ne(t,e)):"Date"===t.type?jt(t,e,"field-date",ie(t,e)):jt(t,e,"field-datetime",ae(t,e));case"pxAutoComplete":return jt(t,e,"field-combobox",le(t,e));case"pxSlider":return jt(t,e,"field-slider",Zt(t,e));default:return null}},Bt=(t,e)=>{if("pxDate"===t.control.type){let a=dt(t.value);if(a)if(t.control&&2===t.control.modes.length){let e={};switch(t.control.modes[1].dateFormat){case"DateTime-Short-YYYY":case"Date-DayMonthYear-Custom":case"Date-Medium":e={year:"numeric",month:"short",day:"numeric"};break;case"Date-Short":e={year:"numeric",month:"numeric",day:"numeric"};break;case"Date-Long":e={year:"numeric",month:"long",day:"numeric"};break;case"Date-Full":e={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;default:e={}}a=new Intl.DateTimeFormat([],e).format(a)}else a=(new Intl.DateTimeFormat).format(a);else a=t.value;return R`
      <span class="dataValueRead" data-ref="${t.reference}" id="${Ot(e)}">${a}</span>
    `}if("pxDateTime"===t.control.type){let a=dt(t.value);if(a)if(t.control&&2===t.control.modes.length){let e={};if("DateTime-Short-YYYY"===t.control.modes[1].dateTimeFormat)e={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};else e={};a=new Intl.DateTimeFormat([],e).format(a)}else a=(new Intl.DateTimeFormat).format(a);else a=t.value;return R`
      <span class="dataValueRead" data-ref="${t.reference}" id="${Ot(e)}">${a}</span>
    `}if("pxTime"===t.control.type){let a=dt(t.value);if(a)if(t.control&&2===t.control.modes.length){const t={hour:"numeric",minute:"numeric"};a=new Intl.DateTimeFormat([],t).format(a)}else a=(new Intl.DateTimeFormat).format(a);else a=t.value;return R`
      <span class="dataValueRead" data-ref="${t.reference}" id="${Ot(e)}">${a}</span>
    `}if("pxHidden"===t.control.type)return R`
    <input type="text" style="display:none" data-ref="${t.reference}" id="${Ot(e)}" value="${ht(t.value)}"/>
    `;let a=t.value;if(t.control&&2===t.control.modes.length&&"locallist"===t.control.modes[0].listSource)for(const e of t.control.modes[0].options)e.key===a&&(a=e.value);return("pxCurrency"===t.control.type||"pxNumber"===t.control.type&&t.readOnly&&"currency"===t.control.modes[1].numberSymbol)&&(a=`$${a}`),R`
    <span class="dataValueRead" data-ref="${t.reference}" id="${Ot(e)}">${ht(a)}</span>
  `},Wt=(t,e)=>{let a="text";return"pxPhone"===t.control.type?a="tel":"pxURL"===t.control.type&&(a="url"),R`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    ?disabled="${!0===t.disabled}"
    type="${a}"
    id="${Ot(e)}"
    value="${ht(t.value)}"
    data-action-change="${Ot(qt(t,"change"))}"
    data-action-click="${Ot(qt(t,"click"))}"
  />`},Zt=(t,e)=>R`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    ?disabled="${!0===t.disabled}"
    type="range"
    id="${Ot(e)}"
    value="${ht(t.value)}"
    data-action-change="${Ot(qt(t,"change"))}"
    data-action-click="${Ot(qt(t,"click"))}"
  />
`,Jt=(t,e)=>R`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    ?disabled="${!0===t.disabled}"
    type="number"
    id="${Ot(e)}"
    value="${t.value}"
    data-action-change="${Ot(qt(t,"change"))}"
    data-action-click="${Ot(qt(t,"click"))}"
  />
`,Yt=(t,e)=>R`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    ?disabled="${!0===t.disabled}"
    type="number"
    id="${Ot(e)}"
    value="${t.value}"
    data-action-change="${Ot(qt(t,"change"))}"
    data-action-click="${Ot(qt(t,"click"))}"
  />
`,Gt=(t,e)=>R`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    ?disabled="${!0===t.disabled}"
    type="email"
    id="${Ot(e)}"
    value="${t.value}"
    data-action-change="${Ot(qt(t,"change"))}"
    data-action-click="${Ot(qt(t,"click"))}"
  />
`,Kt=(t,e)=>R`
  <textarea
    data-ref="${t.reference}"
    rows="3"
    ?required="${!0===t.required}"
    ?disabled="${!0===t.disabled}"
    id="${Ot(e)}"
    data-action-change="${Ot(qt(t,"change"))}"
    data-action-click="${Ot(qt(t,"click"))}"
  >
${ht(t.value)}</textarea
  >
`,Xt=(t,e)=>R`
  <i
    class="${t.control.modes[1].iconStyle}"
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    id="${Ot(e)}"
    value="${t.value}"
  />
`,Qt=(t,e)=>R`
  <a id="${Ot(e)}" data-ref="${t.reference}" href="${t.value}">${t.control.label}</a>
`,te=(t,e)=>{const a=qt(t,"click");return"deleteRow"===a?ee(t,e):R`
  <button
  type='button'
    class="${Ot(t.control.modes[1].controlFormat)} pzhc pzbutton"
    id="${Ot(e)}"
    data-ref="${Ot(Ht(t))}"
    data-action-click="${Ot(a)}"
  >${t.control.label}</button>`},ee=(t,e)=>R`
  <button
    type='button'
    class="pzhc pzbutton Icon"
    title="Delete row"
    id="${Ot(e)}"
    data-ref="${Ot(Ht(t))}"
    data-action-click="deleteRow"
  >${nt()}</button>
`,ae=(t,e)=>{let a=t.value;if(""!==a){const e=dt(a);e instanceof Date&&e.getTime()==e.getTime()?a=`${e.getUTCFullYear()}-${lt(e.getUTCMonth()+1)}-${lt(e.getUTCDate())}T${lt(e.getUTCHours())}:${lt(e.getUTCMinutes())}`:8===t.value.length&&(a=`${t.value.substring(0,4)}-${t.value.substring(4,6)}-${t.value.substring(6,8)}T00:00`)}return R`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      ?disabled="${!0===t.disabled}"
      type="datetime-local"
      id="${Ot(e)}"
      value="${a}"
      data-action-change="${Ot(qt(t,"change"))}"
    data-action-click="${Ot(qt(t,"click"))}"
    />
  `},ie=(t,e)=>{let a=t.value;if(""!==a){const e=dt(a);e instanceof Date&&e.getTime()==e.getTime()?a=`${e.getUTCFullYear()}-${lt(e.getUTCMonth()+1)}-${lt(e.getUTCDate())}`:8===t.value.length&&(a=`${t.value.substring(0,4)}-${t.value.substring(4,6)}-${t.value.substring(6,8)}`)}return R`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      ?disabled="${!0===t.disabled}"
      type="date"
      id="${Ot(e)}"
      value="${a}"
      data-action-change="${Ot(qt(t,"change"))}"
    data-action-click="${Ot(qt(t,"click"))}"
    />
  `},ne=(t,e)=>{let a=t.value;if(""!==a){const e=dt(a);e instanceof Date&&e.getTime()==e.getTime()?a=`${lt(e.getUTCHours())}-${lt(e.getUTCMinutes())}-${lt(e.getUTCSeconds())}`:8===t.value.length&&(a=`${t.value.substring(9,10)}:${t.value.substring(10,11)}:${t.value.substring(11,12)}`)}return R`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      ?disabled="${!0===t.disabled}"
      type="time"
      id="${Ot(e)}"
      value="${a}"
      data-action-change="${Ot(qt(t,"change"))}"
      data-action-click="${Ot(qt(t,"click"))}"
    />
  `},se=(t,e)=>{let a;return t.control&&t.control.modes&&t.control.modes[0].options?a=t.control.modes[0].options:"True-False"===t.type&&(a=[{value:"true"},{value:"false"}]),void 0===a?null:R`
    ${a.map(((a,i)=>{const n=`rb-${e}-${i}`;return R`
        <div>
          <input
            data-ref="${t.reference}"
            name=${Ot(e)}
            id="${n}"
            type="radio"
            value="${a.key}"
            ?required="${!0===t.required}"
            ?disabled="${!0===t.disabled}"
            ?checked="${a.key===t.value}"
            data-action-change="${Ot(qt(t,"change"))}"
          />
          <label for="${n}">${a.value}</label>
        </div>
      `}))}
  `},oe=(t,e)=>R`
  <input
  data-ref="${t.reference}"
  id="${Ot(e)}"
  type="checkbox"
  ?checked=${"true"===t.value}
  ?disabled="${!0===t.disabled}"
  data-action-change="${Ot(qt(t,"change"))}"
  data-action-click="${Ot(qt(t,"click"))}"
  />
  <label for="${Ot(e)}">${t.control.label}</label>
`,re=(t,e)=>t.control&&t.control.modes[0]&&t.control.modes[0].options?R`<select
      data-ref="${t.reference}"
      id=${Ot(e)}
      ?required="${!0===t.required}"
      ?disabled="${!0===t.disabled}"
      data-action-change="${Ot(qt(t,"change"))}"
      data-action-click="${Ot(qt(t,"click"))}">
        <option value="" title="Select...">Select...</option>
        ${t.control.modes[0].options.map((e=>R`
            <option ?selected=${e.key===t.value} value='${e.key}'>${e.value}</option>
          `))}
      </select>`:R`<input
      type='text'
      data-ref="${t.reference}"
      id=${Ot(e)}
      ?required="${!0===t.required}"
      ?disabled="${!0===t.disabled}"
      data-action-change="${Ot(qt(t,"change"))}"
      data-action-click="${Ot(qt(t,"click"))}">
      </input>`,le=(t,e)=>{if(t.control.modes&&t.control.modes[0]&&t.control.modes[0].options)return R`
      <input
        data-ref="${t.reference}"
        list="${t.reference}"
        ?required="${!0===t.required}"
        ?disabled="${!0===t.disabled}"
        type="text"
        class="combobox loaded"
        id="${Ot(e)}"
        value="${ht(t.value)}"
        data-action-change="${Ot(qt(t,"change"))}"
        data-action-click="${Ot(qt(t,"click"))}"
      />
      <datalist id="${t.reference}">
        ${t.control.modes[0].options.map((t=>R`
            <option value="${t.value}">
              ${t.key}
            </option>
          `))}
      </datalist>
    `;let a="";return t.control&&t.control.modes&&t.control.modes[0]&&t.control.modes[0].dataPageID&&(a=t.control.modes[0].dataPageID),R`
    <input
      data-ref="${t.reference}"
      list="${t.reference}"
      data-pageid="${a}"
      ?required="${!0===t.required}"
      ?disabled="${!0===t.disabled}"
      type="text"
      class="combobox"
      id="${Ot(e)}"
      value="${t.value}"
      data-action-change="${Ot(qt(t,"change"))}"
      data-action-click="${Ot(qt(t,"click"))}"
    />
    <datalist id="${t.reference}"></datalist>
  `},ce=t=>""!==t.title?R`
      <div class="header-bar">
        <div class="header-content"><h3 class="header-title">${t.title}</h3></div>
      </div>
    `:null,de=(t,e)=>{let a=t.fieldListID;if(void 0!==t.reference&&(a=t.reference),"."===a.charAt(0)&&(a=a.substring(1)),t.newRow&&!0!==e){const e=[];return mt(t.newRow,e),R`
      <div class="table-action-area">
        <button type="button" class="pzhc pzbutton Simple" data-newrow="${Ot(e.join())}"
        data-ref=${a} data-action-click="addRow">${at()}Add item</button>
      </div>
    `}return null},he=t=>R`
  ${t.map((t=>R`
    <th scope='col'>${t.caption?R`${t.caption.value}`:""}</th>`))}
`,ue=(t,e,a,i)=>R`
  ${t.map(((t,n)=>{const s=`${e}-table-${n}`;return R`
    <tr>
      ${t.groups.map(((t,e)=>R`
      <td>${Vt(t.field,`${s}-${e}`,a,i)}</td>`))}
    </tr>`}))}
`,pe=(t,e,a,i)=>R`
  ${t.map(((t,n)=>{const s=`${e}-${n}`;if(t.layout){""!==t.layout.groupFormat.trim()&&"CENTER"!==t.layout.groupFormat||(t.layout.groupFormat="default");const e=t.layout.groupFormat.replace(/ /g,"_").toLowerCase(),n=`flex content layout-content-${e} content-${e}`;if(t.layout.view&&t.layout.view.groups)return R`
          <div class="${n}">${pe(t.layout.view.groups,s,a,i)}</div>
        `;if(t.layout.groups){let e="";if("string"==typeof t.layout.title&&""!==t.layout.title&&(t.layout.titleFormat,1))switch(t.layout.titleFormat){case"h2":default:e=R`<h2>${t.layout.title}</h2>`;break;case"h3":e=R`<h3>${t.layout.title}</h3>`;break;case"h4":e=R`<h4>${t.layout.title}</h4>`}return R`
        ${e}<div class="${n}">${pe(t.layout.groups,s,a,i)}</div>
        `}return t.layout.rows?t.layout.header?((t,e,a,i)=>R`<div class='flex content layout-content-stacked content-stacked'>
  ${ce(t.layout)}
  <div class='table-content'>
  <table>
  <caption class="sr-only">${t.layout.title}</caption>
    <thead>
      <tr>
        ${he(t.layout.header.groups)}
      </tr>
    </thead>
    <tbody>
      ${ue(t.layout.rows,e,a,i)}
    </tbody>
  </table>
  </div>
  ${de(t.layout,a)}</div>
`)(t,s,a,i):ge(t,s,a,i):null}if(t.paragraph)return R`<div class='flex content-item field-item flex-paragraph'>${Ut(t.paragraph.value)}</div>`;if(t.caption&&t.caption.visible)return R`<div class='flex content-item field-item flex-paragraph'>${Ut(t.caption.value)}</div>`;if(t.field){if(t.field.control&&"pxAttachContent"===t.field.control.type){let e="Upload file";return t.field.customAttributes&&t.field.customAttributes.Label&&(e=t.field.customAttributes.Label),Tt(e,e,"",i.displayAttachments)}if(t.field.control&&t.field.control.actionSets&&t.field.control.actionSets.length>0&&t.field.control.actionSets[0]&&t.field.control.actionSets[0].actions[0]&&"localAction"===t.field.control.actionSets[0].actions[0].action){const e=i.actionID;return((t,e,a)=>{const i=t.control.actionSets[0].actions[0].actionProcess.localAction,n=t.control.actionSets[0].actions[0].actionProcess.target,s=t.control.modes[1].controlFormat?t.control.modes[1].controlFormat:"";if("modalDialog"===n){const n=a=>{P(Lt(t.control.label,et()),a),e(i,a)};return rt(i,t.control.label,s,n,a)}return R`<div><button type="button" @click="${()=>{e(i)}}" class="pzhc pzbutton ${s}">${i18n.t(t.control.label)}</button></<div>`})(t.field,i.displayLocalAction,(()=>{i.reloadAssignment(e)}))}return Vt(t.field,s,a,i)}return t.view&&t.view.groups?"pyAttachFieldOptional"===t.view.viewID&&"Embed-Attach-File"===t.view.appliesTo?Tt("Upload file","Upload file","",i.displayAttachments):pe(t.view.groups,s,a,i):null}))}
`,ge=(t,e,a,i)=>R`
  ${ce(t.layout)}
  <div class="rdl">
    ${fe(t.layout.rows,e,a,i)}
  </div>
  ${de(t.layout,a)}
`,fe=(t,e,a,i)=>R`
  ${t.map(((t,n)=>{const s=`${e}-row${n}`;return t.groups?R`
        <div>
          ${pe(t.groups,s,a,i)}
        </div>
      `:null}))}
`,me=(t,e,a,i,n,s,o,r,l,c)=>{const d=R`${st()}<span class='count-badge'>${n}</span>`;if(void 0===e.caseID&&a.content)return R`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${a.content.pyLabel} <span>(${a.content.pyID})</span>
      ${""!==i?R`<span class='badge-bg-info centered'><span class='badge_text'>${i}</span></span>`:""}</h2>
      <div class="flex layout-content-inline_middle margin-l-auto">
        ${l?Tt("Attachments",d,"Simple",l):""}
        ${"true"===c&&a.actions&&(a.actions.length>1||1===a.actions.length&&a.actions[0].name!==t)?R`
          ${St("Actions","Start a new action",s,o)}`:""}
      </div>
    </div>
    ${((t,e)=>t&&0!==t.length?R`
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
        ${t.map((t=>R`
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
    ${((t,e)=>t&&0!==t.length?R`
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
        ${t.map((t=>R`
        <tr>
          <td>${t.ID}</td>
          <td class="right-aligned">
            <button type='button' @click="${e}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">${i18n.t("Open")}</button>
          </td>
        </tr>`))}
  </tbody>
  </table>`:null)(a.childCases,r)}
    <h3>Case information</h3>`;if(""===t||void 0===e.caseID)return"";const h=e.caseID.split(" ")[1];return R`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${e.name} <span>(${h})</span>
    ${""!==i?R`<span class='badge-bg-info centered'><span class='badge_text'>${i}</span></span>`:""}</h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      ${l?Tt("Attachments",d,"Simple",l):""}
      ${"true"===c&&e.actions&&(e.actions.length>1||1===e.actions.length&&e.actions[0].name!==t)?R`
        ${St("Actions","Start a new action",s,o)}`:""}
    </div>
  </div>
 <h3>${t}</h3>`},be=(t,e,a,i,n)=>R`
  <div class="flex layout-content-stacked">${pe(t,e,!1,n)}</div>
  ${((t,e)=>R`
  <div class="action-button-area">
    ${null!==t?R`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    ${null!==e?R`<button type="button" class="pzhc pzbutton" @click="${e}">Save</button>`:""}
    <button type="button" data-submit="submit" class="Strong pzhc pzbutton">Submit</button>
  </div>
`)(a,i)}
`,$e=(t,e,a,i)=>R`
  <div class="flex layout-content-stacked">${pe(t,e,!0,i)}</div>
  ${(t=>null===t?null:R`
  <div class="action-button-area">
  ${null!==t?R`<button type="button" class="pzhc pzbutton Strong" @click="${t}">Close</button>`:""}
  </div>`)(a)}
`,ve=(t,e,a,i,n)=>R`
  <div class="flex layout-content-stacked">${pe(t,e,!1,n)}</div>
  ${((t,e)=>R`
  <div class="action-button-area">
    ${null!==t?R`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    <button type="button" data-submit="save" class="pzhc pzbutton Strong" @click="${e}">Submit</button>
  </div>
`)(a,i)}
`,ye=(t,e,a,i)=>R`
  <div class="flex layout-content-stacked">${pe(t,e,!1,i)}</div>
  ${(t=>R`
  <div class="action-button-area">
    ${null!==t?R`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    <button type="button" data-submit="create" class="Strong pzhc pzbutton">Create</button>
  </div>
`)(a)}
`,xe=(t,e)=>{const a=[],i=Object.entries(e.actions);for(const e of i)e[1].name!==t&&a.push(R`
          <li role="menuitem" tabindex="-1" data-value="${e[1].ID}">${e[1].name}</li>
        `);return R`
    ${a}
  `},we=t=>R`
${t.pxResults.map((t=>R`
    <option>
      ${t.pyUserName}
    </option>`))}`;
/**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class Ce extends Rt{genErrorMessage(t){this.clearLoadingIndicator(),t.message&&-1!==t.message.indexOf("JSON.parse")?console.error("Error:",t):t.message&&-1!==t.message.indexOf("Unexpected token")?(this.errorMsg="Error 404: Resource not found",this.requestUpdate(),console.error(this.errorMsg)):(t.status?""!==t.statusText?this.errorMsg=`Error ${t.status}: ${t.statusText}`:401===t.status?this.errorMsg="Error 401: Authentication error":500===t.status?this.errorMsg="Error 500: Internal server error":this.errorMsg=`Error ${t.status}`:t.name&&t.message?this.errorMsg=`Error ${t.name}: ${t.message}`:this.errorMsg="string"==typeof t?t:"Critical error",this.requestUpdate(),console.error("Error:",t))}submitForm=(t,e)=>{if(t.preventDefault(),t.target&&null!==t.target.closest(".mashup-modal")){const e=t.target.closest("#modalcontent");Ct(e,this.content,this.pageInstructions,this.casedata.content),this.validateForm(e)?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID,target:e}):this.reportFormValidity(e)}else{const t=this.getRenderRoot().querySelector("#case-data");Ct(t,this.content,this.pageInstructions,this.casedata.content),this.validateForm(t)?"create"!==e?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID}):this.sendData("newwork",{id:this.casetype}):this.reportFormValidity(t)}return!1};resetError=t=>{this.errorMsg="",this.validationMsg="",this.actionAreaCancel(t)};reloadWorkList=t=>{this.cases=[],this.requestUpdate(),this.actionAreaCancel(t)};actionAreaCancel=t=>{if(t&&t.preventDefault(),t.target&&null!==t.target.closest(".mashup-modal")){const e=t.target.closest(".mashup-modal").querySelector("button");if(null!==e)return void e.click()}this.bShowConfirm=!1,this.bShowNew=!1,this.caseID="",this.data={},this.content={},this.pageInstructions=[],this.casedata={},this.attachmentcategories=[],this.casepyStatusWork="",this.assignmentID="",this.actionID="",this.errorMsg="",this.numAttachments=0,this.validationMsg="",this.name="","workList"!==this.action&&"taskList"!==this.action||this.fetchData("worklist"),"dataView"===this.action&&this.fetchData("dataview",{id:this.dataviewParams}),this.sendExternalEvent({type:"cancel"})};actionAreaSave=t=>{t&&t.preventDefault(),null===t.target.getAttribute("data-submit")&&(t.target.textContent="Saving...",t.target.disabled=!0);const e=this.getRenderRoot().querySelector("#case-data");e&&(Ct(e,this.content,this.pageInstructions,this.casedata.content),""!==this.assignmentID?this.sendData("savecase",{id:this.caseID,actionid:"",target:t.target}):this.sendData("savecase",{id:this.caseID,actionid:this.actionID,target:t.target}))};actionRefresh=()=>{const t=this.getRenderRoot().querySelector("#case-data");t&&(this.validationMsg="",Ct(t,this.content,this.pageInstructions,this.casedata.content),""!==this.assignmentID?this.fetchData("assignmentaction",{id:this.assignmentID,actionid:this.actionID}):this.fetchData("caseaction",{id:this.caseID,actionid:this.actionID}))};displayCasesTypes=()=>(t=>{const e=[],a=Object.entries(t);for(const t of a)"true"===t[1].canCreate&&e.push(R`
          <li role="menuitem" tabindex="-1" data-value="${t[0]}">${t[1].name}</li>
        `);return R`
    ${e}
  `})(this.casetypes);displayActions=()=>this.data.actions?xe(this.name,this.data):this.casedata.actions?xe(this.name,this.casedata):null;displayAttachments=t=>{this.fetchData("attachmentcategories",{id:this.caseID}),this.fetchData("attachments",{id:this.caseID,target:t})};displayLocalAction=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");if(a&&(Ct(a,this.content,this.pageInstructions,this.casedata.content),""!==this.assignmentID)){const a=this;this.sendData("savecase",{id:this.caseID},(()=>{this.actionID=t,a.fetchData("assignmentaction",{id:this.assignmentID,actionid:t,target:e})}))}};reloadAssignment=t=>{this.actionID=t,this.fetchData("assignmentaction",{id:this.assignmentID,actionid:t})};createCase=t=>{if(this.name="New Case",this.bShowNew=!0,t){let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&(this.casetype=e.getAttribute("data-value"),this.name=`New ${e.textContent} `)}this.content=this.initialContent,this.pageInstructions=[],this.caseID="",this.data={},this.casedata={},this.casetypes[this.casetype]?"true"===this.casetypes[this.casetype].requiresFieldsToCreate?this.fetchData("newwork",{id:this.casetype}):this.sendData("newwork",{id:this.casetype}):(this.errorMsg=`Case '${this.casetype}' is not defined`,console.error(`Case '${this.casetype}' is not defined`)),this.requestUpdate()};runAction=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&null!==e.getAttribute("data-value")&&(this.actionID=e.getAttribute("data-value"),this.actionRefresh());const a=this.getRenderRoot().querySelector("#case-data");null!=a&&P(et(),a)};openCase=t=>{t.preventDefault(),this.caseID=t.target.getAttribute("data-id"),this.name="",this.data={},this.casedata={},0===this.caseID.indexOf("ASSIGN-WORKLIST")?(this.sendExternalEvent({type:"openassignment",id:this.caseID}),this.assignmentID=this.caseID,this.caseID=""):(this.sendExternalEvent({type:"opencase",id:this.caseID}),this.assignmentID="");const e=this.getRenderRoot().querySelector("#case-data");null!=e&&P(et(),e),this.requestUpdate()};getData=(t,e)=>{this.dataPages[t]?P(we(this.dataPages[t]),e.nextElementSibling):this.fetchData("data",{id:t,element:e})};refreshAssignment=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");let i=t;if(a){if(Ct(a,this.content,this.pageInstructions,this.casedata.content),i){"path"===i.tagName&&(i=i.parentNode),"svg"===i.tagName&&(i=i.parentNode);const t=i.getAttribute("data-action-click"),e=i.getAttribute("data-ref");if(null!==e&&null!==t)if("addRow"===t){const t=bt(this.casedata.content,e,i.getAttribute("data-newrow"));null!==t&&this.pageInstructions.push(t)}else if("deleteRow"===t){const t=$t(this.casedata.content,e);null!==t&&this.pageInstructions.push(t)}}!0===this.bShowNew?this.sendData("refreshnew",{id:this.casetype,refreshFor:e}):this.sendData("refreshassignment",{id:this.assignmentID,actionid:this.actionID,refreshFor:e})}};fetchData(t,e){const{id:a,actionid:i,target:n,element:s}=e||{};let o="";""!==this.authentication&&"basic"!==this.authentication||(o=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(o=`Bearer ${this.token}`);const r={method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:o},mode:"cors"};let l=`${this.url}/api/v1/`;switch(t){case"worklist":l+="assignments";break;case"dataview":const t=a;let e="";if(t.params)for(const a of t.params)a.name&&a.value&&(e+=`${(""===e?"?":"&")+a.name.trim()}=${a.value.trim()}`);l+=`data/${t.name}${encodeURI(e)}`;break;case"casetypes":l+="casetypes";break;case"newwork":l+=`casetypes/${a}`;break;case"assignment":l+=`assignments/${a}`;break;case"case":l+=`cases/${a}`;break;case"data":l+=`data/${a}`;break;case"page":l+=`cases/${a}/pages/${i}`;break;case"view":l+=`cases/${a}/views/${i}`;break;case"assignmentaction":l+=`assignments/${a}/actions/${i}`;break;case"caseaction":l+=`cases/${a}/actions/${i}`;break;case"attachment":l+=`attachments/${a}`;break;case"attachments":l+=`cases/${a}/attachments`;break;case"attachmentcategories":l+=`cases/${a}/attachment_categories`}fetch(l,r).then((e=>{if("case"===t)this.etag=e.headers.get("etag"),n&&(n.disabled=!1,n.textContent="Save");else if("attachment"===t)return e.text();return e.ok||404===e.status?e.json():Promise.reject(e)})).then((e=>{try{if(e.errors&&e.errors.length>0)return this.errorMsg=`Error ${e.errors[0].ID}: ${e.errors[0].message}`,this.clearLoadingIndicator(),this.requestUpdate(),void console.error("Error:",e);const o=this.getRenderRoot().querySelector("#case-data");switch(t){case"casetypes":this.casetypes={};for(const t of e.caseTypes)("workList"!==this.action&&"taskList"!==this.action||""===this.casetype||this.casetype===t.ID)&&(this.casetypes[t.ID]={canCreate:t.CanCreate,name:t.name,requiresFieldsToCreate:!1});"createNewWork"===this.action&&this.createCase();break;case"worklist":this.cases=e.assignments,this.requestUpdate();break;case"dataview":this.cases=e.pxResults,this.requestUpdate();break;case"assignment":this.data=e,this.caseID=e.caseID,""===this.name&&(this.name=" "),this.fetchData("case",{id:this.caseID}),e.actions.length>0&&e.actions[0].ID?(this.actionID=e.actions[0].ID,this.name=e.actions[0].name,this.fetchData("assignmentaction",{id:a,actionid:this.actionID})):this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"});break;case"case":this.casedata=e,this.content={},this.pageInstructions=[],this.numAttachments=0,""===this.name&&(this.name=this.casedata.content.pyLabel),this.casepyStatusWork=this.casedata.content.pyStatusWork,this.requestUpdate(),""===this.assignmentID&&this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"}),"true"===this.bShowAttachments&&this.fetchData("attachments",{id:this.caseID});break;case"data":if(this.dataPages[a]=e,!s.nextElementSibling){console.error("Error: case data are not present when retrieving the data");break}P(this.showDataList(e),s.nextElementSibling);break;case"caseaction":if(!o){console.error("Error: case data are not present when retrieving the assignmentaction");break}if(!e.view.groups)return this.errorMsg="Error: view is not defined",this.clearLoadingIndicator(),void this.requestUpdate();P(this.renderSaveCaseLayout(e.view.groups,"Obj"),o),o.focus();break;case"assignmentaction":if(!o){console.error("Error: case data are not present when retrieving the assignmentaction");break}if(!e.view.groups)return this.errorMsg="Error: view is not defined",this.clearLoadingIndicator(),void this.requestUpdate();n?(this.actionID=i,P(Lt(e.name,this.renderMainLayout(e.view.groups,"Obj")),n),n.focus()):(this.name=e.name,this.requestUpdate(),P(this.renderMainLayout(e.view.groups,"Obj"),o),o.focus());break;case"page":if(!o){console.error("Error: case data are not present when retrieving the page");break}P(this.renderMainLayout(e.groups,"Obj"),o),o.focus();break;case"view":if(!o){console.error("Error: case data are not present when retrieving the page");break}this.content={},this.pageInstructions=[],"pyCaseInformation"===i?(this.name=e.name,P(this.renderReviewLayout(e.groups,"Obj"),o)):(this.name=e.name,P(this.renderMainLayout(e.groups,"Obj"),o)),o.focus();break;case"newwork":if(this.content={},this.pageInstructions=[],!o){console.error("Error: case data are not present when retrieving the newwork");break}P(this.renderCreateCaseLayout(e.creation_page.groups[0].layout.groups,"Obj"),o),o.focus();const t=this.getRenderRoot().querySelector("#case-data");t&&((t,e)=>{for(const a of t.elements)if("INPUT"===a.tagName||"TEXTAREA"===a.tagName||"SELECT"===a.tagName){const t=a.getAttribute("data-ref");if(null!==t&&"pyID"!==t&&e[t]){const i=e[t];if("object"==typeof i)"radio"===a.type?a.value===i.value&&(a.checked=!0):"checkbox"===a.type?!0!==i.value&&"true"!==i.value||(a.checked=!0):i.value&&(a.value=i.value),i.disabled&&(a.disabled=!0);else if("datetime-local"===a.type)24===i.length?a.value=i.substring(0,23):a.value=i;else if("date"===a.type){let i;a.valueAsDate&&(i=new Date(a.valueAsDate)),i&&i instanceof Date&&i.getTime()==i.getTime()||(i=new Date(a.value)),i&&i instanceof Date&&i.getTime()==i.getTime()?pt(e,t,`${lt(i.getUTCMonth()+1)}/${lt(i.getUTCDate())}/${i.getUTCFullYear()}`):pt(e,t,a.value)}else"string"==typeof i?"radio"===a.type?a.value===i&&(a.checked=!0):"checkbox"===a.type?"true"===i&&(a.checked=!0):a.value=i:"boolean"==typeof i&&"checkbox"===a.type?!0===i&&(a.checked=!0):a.value=i}}})(t,this.initialContent);break;case"attachments":let r=e.attachments;r||(r=[]),this.numAttachments=r.length,n&&P(Et(n,r,this.caseID,this),n),this.requestUpdate();break;case"attachmentcategories":this.attachmentcategories=e.attachment_categories;break;case"attachment":n(e)}}catch(t){this.errorMsg=`Error: ${t}`,this.requestUpdate(),console.error("Error:",t)}})).catch((t=>{this.genErrorMessage(t)}))}sendData(t,e,a){const{id:i,actionid:n,target:s,refreshFor:o}=e;let r="";""!==this.authentication&&"basic"!==this.authentication||(r=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(r=`Bearer ${this.token}`);const l={"Content-Type":"application/json;charset=UTF-8",Authorization:r},c={method:"POST",headers:l,mode:"cors"},{pageInstructions:d,pageupdate:h}=kt(this.content,this.pageInstructions);let u=`${this.url}/api/v1/`;switch(this.validationMsg="",t){case"authenticate":"oauth2password"===this.authentication?c.body=`grant_type=password&client_id=${this.clientid}&client_secret=${this.clientsecret}&username=${this.username}&password=${this.password}`:"oauth2clientcredentials"===this.authentication&&(c.body=`grant_type=client_credentials&client_id=${this.clientid}&client_secret=${this.clientsecret}`),c.headers["Content-Type"]="application/x-www-form-urlencoded",u=`${this.url}/PRRestService/oauth2/v1/token`;break;case"newwork":u+="cases",c.body=JSON.stringify({content:h,pageInstructions:d,caseTypeID:i});break;case"submitassignment":c.body=JSON.stringify({content:h,pageInstructions:d}),u+=`assignments/${i}?actionID=${n}`;break;case"savecase":u+=`cases/${i}`,n&&""!==n&&(u+=`?actionID=${n}`),c.headers["If-Match"]=this.etag,c.method="PUT",c.body=JSON.stringify({content:h,pageInstructions:d});break;case"refreshnew":u+=`casetypes/${i}/refresh`,o&&""!==o&&(u+=`?refreshFor=${encodeURI(o)}`),c.headers["If-Match"]=this.etag,c.method="PUT",c.body=JSON.stringify({content:h,pageInstructions:d});break;case"refreshassignment":u+=`assignments/${i}/actions/${n}/refresh`,o&&""!==o&&(u+=`?refreshFor=${encodeURI(o)}`),c.headers["If-Match"]=this.etag,c.method="PUT",c.body=JSON.stringify({content:h,pageInstructions:d});break;case"refreshcase":u+=`cases/${i}/actions/${n}/refresh`,o&&""!==o&&(u+=`?refreshFor=${encodeURI(o)}`),c.headers["If-Match"]=this.etag,c.method="PUT",c.body=JSON.stringify({content:h,pageInstructions:d});break;case"uploadattachment":u+="attachments/upload",delete l["Content-Type"];const t=new FormData;t.append("File",n,n.name),c.body=t;break;case"attachments":u+=`cases/${i}/attachments`,c.body=JSON.stringify({attachments:n});break;case"deleteattachment":u+=`attachments/${i}`,c.method="DELETE"}fetch(u,c).then((e=>"deleteattachment"===t||"attachments"===t?e.text():200===e.status||201===e.status||e.status>=400&&e.status<500?e.json():e.ok?Promise.resolve("ok"):Promise.reject(e))).then((e=>{if(e.errors&&e.errors.length>0){if(e.errors[0].ValidationMessages)if(s&&"modalcontent"===s.id)Dt(s,e.errors[0].ValidationMessages,this),P(this.genPageValidationErrors(e),s.previousElementSibling);else{const t=this.getRenderRoot().querySelector("#case-data");Dt(t,e.errors[0].ValidationMessages,this),this.validationMsg=this.genPageValidationErrors(e)}else this.errorMsg=`Error ${e.errors[0].ID}: ${e.errors[0].message}`;this.clearLoadingIndicator(),s&&"BUTTON"===s.tagName&&(s.disabled=!1,s.textContent="Save")}else if(e.access_token)this.token=e.access_token;else{const i=this.getRenderRoot().querySelector("#case-data");if("refreshcase"===t||"refreshassignment"===t||"refreshnew"===t){if(!i)return void console.error("Error: case data are not present");"refreshnew"===t&&e.creation_page&&e.creation_page.groups&&e.creation_page.groups[0]?P(this.renderCreateCaseLayout(e.creation_page.groups[0].layout.groups,"Obj"),i):e.view&&e.view.groups&&P(this.renderMainLayout(e.view.groups,"Obj"),i)}else if("savecase"===t){if(this.fetchData("case",{id:this.caseID,target:s}),a)return void a()}else if("deleteattachment"===t||"attachments"===t)this.fetchData("attachments",{id:this.caseID,target:s});else if("uploadattachment"===t){let t=n.name.lastIndexOf(".");-1===t&&(t=n.name.length);const a=n.name.substring(t+1),i=[{type:"File",category:n.category,fileType:a,name:n.displayName,ID:e.ID}];return void this.sendData("attachments",{id:this.caseID,actionid:i,target:s})}e.ID&&(this.caseID=e.ID,"newwork"===t&&this.sendExternalEvent({type:"newwork",id:this.caseID})),e.nextAssignmentID?(i&&(P(this.genLoadingIndicator(),i),this.requestUpdate()),this.bShowNew=!1,this.assignmentID=e.nextAssignmentID,this.fetchData("assignment",{id:this.assignmentID})):e.nextPageID&&(i&&(P(this.genLoadingIndicator(),i),this.requestUpdate()),"Confirm"===e.nextPageID||"Review"===e.nextPageID?(this.bShowConfirm=!0,this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"}),this.fetchData("case",{id:this.caseID})):this.fetchData("page",{id:this.caseID,actionid:e.nextPageID}))}this.requestUpdate()})).catch((t=>{this.genErrorMessage(t)}))}}const De=(t,e,a,i)=>R`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${i18n.t(t)} <span>(${e})</span>
    <span class='badge-bg-info centered'><span class='badge_text'>${a}</span></span></h2>
    ${i?R`<div class="flex layout-content-inline_middle margin-l-auto">
        ${Tt("Attachments",st(),"Simple",i)}
      </div>`:""}
  </div>
  <div class="flex layout-content-inline_middle success">
    ${i18n.t("Thank you. Your information has been submitted.")}
  </div>
  <h3>${i18n.t("Case information")}</h3>
  <div id="case-data"></div>`,ke=(t,e)=>R`
  <div class="error">${t}
  ${null!=e?R`
    <button type='button' aria-label="${i18n.t("Click to close the banner")}" class="pzhc pzbutton Light" @click="${e}">
    ${it()}</button>`:""}
  </div>`,Ae=(t,e,a,i,n,s)=>R`
  <div class="flex layout-content-inline_middle main-header">
    <h2>
    ${i18n.t(t)}
      ${e.length>0?R`<span>(${e.length})</span>`:""}
    </h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      <button type='button' class="pzhc pzbutton Simple"
      title='${i18n.t("Click to refresh the worklist")}' @click="${i}">${i18n.t("Refresh")}</button>
      ${St("Create","Create a new case",a,n)}
    </div>
  </div>
  ${e.length>0?R`
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
            ${e.map((t=>R`
                <tr>
                  <td data-title='Name'>${i18n.t(t.name)}</td>
                  <td data-title='Case ID'>${t.caseID}</td>
                  <td data-title='Urgency' class="right-aligned">${t.urgency}</td>
                  <td data-title='Action' class="right-aligned">
                    <button @click="${s}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">
                    ${i18n.t("Open")}</button>
                  </td>
                </tr>
              `))}
          </tbody>
        </table>
      `:R`
        <div class="margin-t-2x">${i18n.t("no assignments")}</div>
      `}
`,Ie=(t,e,a,i,n,s)=>R`
  <div class="flex layout-content-inline_middle main-header">
    <h2>
    ${i18n.t(t)}
    </h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      <button type='button' class="pzhc pzbutton Simple"
      title='${i18n.t("Click to refresh the tasklist")}' @click="${i}">${i18n.t("Refresh")}</button>
      ${St("Create","Create a new case",a,n)}
    </div>
  </div>
  ${e.length>0?R`<div class='rdl'>${e.map((t=>R`
                <div class="flex align-center">
                  ${R`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M4.36924939,20.6307506 C2.12332739,18.3848286 1,15.6897222 1,12.5 C1,9.31027781 2.12332739,6.6151714 4.36924939,4.36924939 C6.6151714,2.12332739 9.31027781,1 12.5,1 C15.6897222,1 18.3848286,2.12332739 20.6307506,4.36924939 C22.8766726,6.6151714 24,9.31027781 24,12.5 C24,15.6897222 22.8766726,18.3848286 20.6307506,20.6307506 C18.3848286,22.8766726 15.6897222,24 12.5,24 C9.31027781,24 6.6151714,22.8766726 4.36924939,20.6307506 Z M1.8811875,12.447386 C1.8811875,12.447386 1.8811875,12.447386 1.8811875,12.447386 C1.8811875,14.5968497 2.46329283,16.5666437 3.67205609,18.312946 C4.83626674,20.1038006 6.40291157,21.4023893 8.37345132,22.2532644 C10.3439911,23.1041394 12.4029056,23.2830788 14.5071032,22.8799174 C16.6113007,22.476756 18.4021693,21.4922242 19.9249919,19.9694135 C19.9249919,19.9694135 19.9249919,19.9694135 19.9249919,19.9694135 C21.4025315,18.4918854 22.3878014,16.6564786 22.8355186,14.5515671 C23.2386831,12.447386 23.059012,10.4323093 22.2088606,8.46251536 C22.2088606,8.46251536 22.2088606,8.46251536 22.2088606,8.46251536 C21.4032619,6.49272137 20.1046631,4.92535842 18.3583471,3.7166046 C16.5674785,2.50785078 14.5976691,1.92575 12.4481886,1.92575 C12.4481886,1.92575 12.4481886,1.92575 12.4481886,1.92575 C9.53766197,1.92575 7.07558285,2.95556443 5.0159379,4.97064104 C2.95629295,7.0302699 1.92647047,9.53761241 1.88191787,12.4481163 L1.8811875,12.447386 Z M13.65,5.14 C14.4934394,5.14 15.26,5.8300444 15.26,6.75 C15.26,7.6699556 14.5699556,8.36 13.65,8.36 C12.8065606,8.36 12.04,7.6699556 12.04,6.75 C12.04,5.82983718 12.7300444,5.14 13.65,5.14 L13.65,5.14 Z M12.1006632,19.4 C10.8371558,19.4 9.92475184,18.3609236 10.2758078,17.1256209 L11.776451,12.765183 C11.9168781,12.2564972 12.1349341,11.3294309 11.6436075,11.3294309 C11.3160565,11.3294309 10.9157711,11.4931165 10.4427514,11.8204877 C10.7936367,10.7303906 11.7762613,10.2 12.8993368,10.2 C14.1628442,10.2 15.0752482,11.2390764 14.7241922,12.4743791 L13.223549,16.834817 C13.0831219,17.3435028 13.0547746,18.1723578 13.5461012,18.1723578 C13.8736522,18.1723578 14.2107014,18.0414093 14.5572486,17.7795123 C14.2063633,18.8696094 13.2237387,19.4 12.1006632,19.4 Z"/>
</svg>`}
                  <div class="flex flex-col flex-all">
                    <h3>${i18n.t(t.name)}</h3>
                    <div>${i18n.t(t.instructions)}</div>
                  </div>
                    <button @click="${s}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">
                    ${i18n.t("Begin")}</button>
                </div>
              `))}</div>`:R`
        <div class="margin-t-2x">${i18n.t("no tasks")}</div>
      `}
`,_e=(t,e,a,i,n)=>R`
  <div class="flex layout-content-inline_middle main-header">
    <h2>
    ${i18n.t(t)}
    </h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      <button type='button' class="pzhc pzbutton Simple"
      title='${i18n.t("Click to refresh the list")}' @click="${i}">${i18n.t("Refresh")}</button>
    </div>
  </div>
  ${a.length>0?R`
        <table class='responsive'>
          <caption class='sr-only'>${i18n.t("My worklist")}</caption>
          <thead>
            <tr>
            ${e.fields.map((t=>R`<th scope="col" data-title='${i18n.t(t.label)}'>${i18n.t(t.label)}</td>`))}
            </tr>
          </thead>
          <tbody>
            ${a.map((t=>R`
                <tr>
                ${e.fields.map((e=>{if(!t[e.name])return R`<td data-title='${i18n.t(e.label)}'></td>`;if("pzInsKey"===e.name)return R`<td data-title='${i18n.t(e.label)}'>
      <button @click="${n}" class="pzhc pzbutton" data-type="assignment" data-id="${t.pzInsKey}">${i18n.t("Open")}</button></td>`;if("date"===e.type)try{const a=new Intl.DateTimeFormat([],{year:"numeric",month:"short",day:"numeric"}).format(new Date(t[e.name]));return R`<td data-title='${i18n.t(e.label)}'>${a}</td>`}catch(t){console.error("invalid date",t)}return R`<td data-title='${i18n.t(e.label)}'>${i18n.t(t[e.name])}</td>`}))}
                  </td>
                </tr>
              `))}
          </tbody>
        </table>
      `:R`
        <div class="margin-t-2x">${i18n.t(e.noresults??"No records found.")}</div>
      `}
`;class Se extends Ce{displayContent(){return""!==this.errorMsg?ke(this.errorMsg,"true"===this.bShowCancel?this.resetError:null):"oauth2password"!==this.authentication&&"oauth2clientcredentials"!==this.authentication||""!==this.token?(this.casetypes||"createNewWork"!==this.action&&"workList"!==this.action&&"taskList"!==this.action&&"dataView"!==this.action?""===this.name&&("openAssignment"===this.action&&""===this.assignmentID&&(this.assignmentID=this.caseID),""!==this.assignmentID?this.fetchData("assignment",{id:this.assignmentID}):""!==this.caseID&&this.fetchData("case",{id:this.caseID})):(this.fetchData("casetypes"),"createNewWork"===this.action?(this.bShowNew=!0,this.casetypes[this.casetype]&&this.fetchData("newwork",{id:this.casetype})):"workList"===this.action||"taskList"===this.action?(this.bShowCancel="true",this.fetchData("worklist")):"dataView"===this.action&&(this.bShowCancel="true",this.fetchData("dataview",{id:this.dataviewParams}))),this.bShowConfirm?De(this.casedata.content.pyLabel,this.casedata.content.pyID,this.casepyStatusWork,"true"===this.bShowAttachments?this.displayAttachments:null):""!==this.caseID||""!==this.assignmentID||this.bShowNew?R`
        ${me(this.name,this.data,this.casedata,this.casepyStatusWork,this.numAttachments,this.displayActions,this.runAction,this.openCase,"true"===this.bShowAttachments?this.displayAttachments:null,this.bShowActions)}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
        <form id="case-data"></form>
      `:"workList"===this.action?Ae(this.title,this.cases,this.displayCasesTypes,this.reloadWorkList,"true"===this.bShowCreate?this.createCase:null,this.openCase):"taskList"===this.action?Ie(this.title,this.cases,this.displayCasesTypes,this.reloadWorkList,"true"===this.bShowCreate?this.createCase:null,this.openCase):"dataView"===this.action?_e(this.title,this.dataviewParams,this.cases,this.reloadWorkList,this.openCase):null):(this.sendData("authenticate",{}),null)}renderMainLayout=(t,e)=>be(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this);renderSaveCaseLayout=(t,e)=>ve(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this);renderReviewLayout=(t,e)=>$e(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,this);renderCreateCaseLayout=(t,e)=>ye(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null);genPageValidationErrors=t=>(t=>t.errorDetails?R`
    <ul>
      ${t.errorDetails.map((t=>R`<li>${t.localizedValue}</li>`))}
    </ul>`:R`
  <ul>
    ${t.errors[0].ValidationMessages.map((t=>t.Path&&".pzErrorMessage"!==t.Path?R`
          <li>${t.Path.substring(1)}: ${t.ValidationMessage}</li>
        `:0===t.ValidationMessage.indexOf("Validation failed")?null:R`
    <li>${t.ValidationMessage}</li>
  `))}
  </ul>`)(t);showDataList=t=>we(t);genLoadingIndicator=()=>et();validateForm=t=>t.checkValidity();reportFormValidity=t=>t.reportValidity();setInlineError=(t,e)=>{t.setCustomValidity(ht(e)),t.classList.add("error-field"),t.reportValidity()};clickHandler=t=>{let e=t.target;"path"===e.tagName&&(e=e.parentNode),"svg"===e.tagName&&(e=e.parentNode);const a=e.getAttribute("data-action-click");e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e),vt(e,"click")?(this.refreshAssignment(e,yt(e,"click")),t.preventDefault()):"BUTTON"===e.tagName&&(t.preventDefault(),null!==e.getAttribute("data-submit")&&"save"!==e.getAttribute("data-submit")?this.submitForm(t,e.getAttribute("data-submit")):("addRow"===a||"deleteRow"===a)&&this.refreshAssignment(e))};changeHandler=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e.setCustomValidity(""),e.classList.remove("error-field"),vt(e,"change")&&this.refreshAssignment(e,yt(e,"change"))};keyupHandler=t=>{const e=t.target;"TEXTAREA"===e.tagName&&(e.style.cssText="height:auto; padding:0;",e.style.cssText=`height:${e.scrollHeight}px`)};focusHandler=t=>{const e=t.target;e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e)};async firstUpdated(){const t=this.getRenderRoot();t&&(t.addEventListener("click",this.clickHandler),t.addEventListener("focusin",this.focusHandler),t.addEventListener("change",this.changeHandler),t.addEventListener("keyup",this.keyupHandler))}}const Te=()=>R`
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
`;customElements.define("pega-mashup",class extends Se{createRenderRoot(){return this.attachShadow({mode:"open"})}getRenderRoot(){return this.shadowRoot}render(){return R`
      ${Te()} ${this.displayContent()}
    `}});customElements.define("pega-mashup-light",class extends Se{createRenderRoot(){return this}getRenderRoot(){return this}render(){return R`
      ${this.displayContent()}
    `}});
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const Ee=(t,e)=>{var a,i;const n=t._$AN;if(void 0===n)return!1;for(const t of n)null===(i=(a=t)._$AO)||void 0===i||i.call(a,e,!1),Ee(t,e);return!0},Le=t=>{let e,a;do{if(void 0===(e=t._$AM))break;a=e._$AN,a.delete(t),t=e}while(0===(null==a?void 0:a.size))},Re=t=>{for(let e;e=t._$AM;t=e){let a=e._$AN;if(void 0===a)e._$AN=a=new Set;else if(a.has(t))break;a.add(t),Ne(e)}};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function Me(t){void 0!==this._$AN?(Le(this),this._$AM=t,Re(this)):this._$AM=t}function ze(t,e=!1,a=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(i))for(let t=a;t<i.length;t++)Ee(i[t],!1),Le(i[t]);else null!=i&&(Ee(i,!1),Le(i));else Ee(this,t)}const Ne=t=>{var e,a,i,n;t.type==Mt&&(null!==(e=(i=t)._$AP)&&void 0!==e||(i._$AP=ze),null!==(a=(n=t)._$AQ)&&void 0!==a||(n._$AQ=Me))};class Pe extends Nt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,a){super._$AT(t,e,a),Re(this),this.isConnected=t._$AU}_$AO(t,e=!0){var a,i;t!==this.isConnected&&(this.isConnected=t,t?null===(a=this.reconnected)||void 0===a||a.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),e&&(Ee(this,t),Le(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class Ue{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class Oe{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){var t;null!==(t=this.Z)&&void 0!==t||(this.Z=new Promise((t=>this.q=t)))}resume(){var t;null===(t=this.q)||void 0===t||t.call(this),this.Z=this.q=void 0}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const qe=t=>!(t=>null===t||"object"!=typeof t&&"function"!=typeof t)(t)&&"function"==typeof t.then;const He=zt(class extends Pe{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CK=new Ue(this),this._$CX=new Oe}render(...t){var e;return null!==(e=t.find((t=>!qe(t))))&&void 0!==e?e:M}update(t,e){const a=this._$Cyt;let i=a.length;this._$Cyt=e;const n=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){const o=e[t];if(!qe(o))return this._$Cwt=t,o;t<i&&o===a[t]||(this._$Cwt=1073741823,i=0,Promise.resolve(o).then((async t=>{for(;s.get();)await s.get();const e=n.deref();if(void 0!==e){const a=e._$Cyt.indexOf(o);a>-1&&a<e._$Cwt&&(e._$Cwt=a,e.setValue(t))}})))}return M}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}),Fe=()=>`${window.location.href.substring(0,window.location.href.lastIndexOf("/"))}/auth.html`;class je extends Rt{resetError=t=>{this.errorMsg="",this.validationMsg="",this.actionAreaCancel(t)};reloadWorkList=t=>{this.cases=[],this.requestUpdate(),this.actionAreaCancel(t)};actionAreaCancel=t=>{if(t&&t.preventDefault(),this.bShowConfirm=!1,this.bShowNew=!1,this.caseID="",this.data={},this.content={},this.pageInstructions=[],this.casedata={},this.attachmentcategories=[],this.casepyStatusWork="",this.assignmentID="",this.actionID="",this.errorMsg="",this.numAttachments=0,this.validationMsg="",this.name="","workList"!==this.action&&"taskList"!==this.action||this.fetchData("portal"),"dataView"===this.action){const t={};if(this.dataviewParams)for(const e of this.dataviewParams.params)e.name&&e.value&&(t[e.name.trim()]=e.value.trim());this.sendData("dataviews",{id:this.dataviewParams.name,content:{dataViewParameters:t}})}this.sendExternalEvent({type:"cancel"})};actionAreaSave=t=>{t&&t.preventDefault(),null===t.target.getAttribute("data-submit")&&(t.target.textContent="Saving...",t.target.disabled=!0);const e=this.getRenderRoot().querySelector("#case-data");e&&(Ct(e,this.content,this.pageInstructions,this.data.data.caseInfo.content),""!==this.assignmentID?this.sendData("savecase",{id:this.caseID,actionid:"",target:t.target}):this.sendData("savecase",{id:this.caseID,actionid:this.actionID,target:t.target}))};actionRefresh=()=>{const t=this.getRenderRoot().querySelector("#case-data");t&&(this.validationMsg="",Ct(t,this.content,this.pageInstructions,this.data.data.caseInfo.content),this.fetchData("caseaction",{id:this.caseID,actionid:this.actionID}))};displayActions=()=>this.data.actions?this.genActionsList(this.name,this.data):this.casedata.actions?this.genActionsList(this.name,this.casedata):null;displayAttachments=t=>{this.fetchData("attachmentcategories",{id:this.caseID}),this.fetchData("attachments",{id:this.caseID,target:t})};submitForm=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");return Ct(a,this.content,this.pageInstructions,this.data.data.caseInfo.content),this.validateForm(a)?"create"!==e?""!==this.data.ID?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID}):this.sendData("submitcaseaction",{id:this.data.caseID,actionid:this.actionID}):this.sendData("newwork",{id:this.casetype}):this.reportFormValidity(a),t.preventDefault(),!1};createCase=t=>{if(this.name="New Case",this.bShowNew=!0,t){let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&(this.casetype=e.getAttribute("data-value"),this.name=`New ${e.textContent} `)}this.content=this.initialContent,this.pageInstructions=[],this.caseID="",this.data={},this.casedata={},this.casetypes[this.casetype]?this.sendData("newwork",{id:this.casetype}):(this.errorMsg=`Case '${this.casetype}' is not defined`,console.error(`Case '${this.casetype}' is not defined`)),this.requestUpdate()};runAction=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&null!==e.getAttribute("data-value")&&(this.actionID=e.getAttribute("data-value"),this.name=e.innerText,this.data.ID="",this.actionRefresh());const a=this.getRenderRoot().querySelector("#case-data");null!=a&&P(this.genLoadingIndicator(),a)};openCase=t=>{t.preventDefault(),this.caseID=t.target.getAttribute("data-id"),this.name="",this.data={},this.casedata={},0===this.caseID.indexOf("ASSIGN-WORKLIST")?(this.sendExternalEvent({type:"openassignment",id:this.caseID}),this.assignmentID=this.caseID,this.caseID=""):(this.sendExternalEvent({type:"opencase",id:this.caseID}),this.assignmentID="");const e=this.getRenderRoot().querySelector("#case-data");null!=e&&P(this.genLoadingIndicator(),e),this.requestUpdate()};getData=(t,e)=>{this.dataPages[t]?P(this.showDataList(this.dataPages[t]),e.nextElementSibling):this.fetchData("data",{id:t,element:e})};applyAction=t=>{const e=this.getRenderRoot().querySelector("#case-data");let a=t;if(e){if(a){"path"===a.tagName&&(a=a.parentNode),"svg"===a.tagName&&(a=a.parentNode);const t=a.getAttribute("data-action-click"),e=a.getAttribute("data-ref");if(null!==e&&null!=t){if("addRow"===t){const t=bt(this.data.data.caseInfo.content,e,a.getAttribute("data-newrow"));return void(null!==t&&this.pageInstructions.push(t))}if("deleteRow"===t){const t=$t(this.data.data.caseInfo.content,e);return void(null!==t&&this.pageInstructions.push(t))}}}Ct(e,this.content,this.pageInstructions,this.data.data.caseInfo.content)}};refreshAssignment=(t,e)=>{this.applyAction(t),!0===this.bShowNew?this.sendData("refreshnew",{id:this.casetype,refreshFor:e}):this.sendData("refreshassignment",{id:this.assignmentID,actionid:this.actionID,refreshFor:e})};genErrorMessage(t){this.clearLoadingIndicator(),t.message&&-1!==t.message.indexOf("JSON.parse")?console.error("Error:",t):t.message&&-1!==t.message.indexOf("Unexpected token")?(this.errorMsg="Error 404: Resource not found",this.requestUpdate(),console.error(this.errorMsg)):(t.status?""!==t.statusText?this.errorMsg=`Error ${t.status}: ${t.statusText}`:401===t.status?this.errorMsg="Error 401: Authentication error":423===t.status?this.errorMsg="Error 423: Resource is locked by another user":500===t.status?this.errorMsg="Error 500: Internal server error":this.errorMsg=`Error ${t.status}`:t.name&&t.message?this.errorMsg=`Error ${t.name}: ${t.message}`:this.errorMsg="string"==typeof t?t:"Critical error",this.requestUpdate(),console.error("Error:",t))}fetchData(t,e){const{id:a,actionid:i,target:n}=e||{};let s="";""!==this.authentication&&"basic"!==this.authentication||(s=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(s=`Bearer ${this.token}`);const o={method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:s},mode:"cors"};let r=`${this.url}/api/application/v2/`;switch(t){case"portal":r+=`portals/${this.portalName}`;break;case"assignment":r+=`assignments/${a}`;break;case"view":r+=`cases/${a}/views/${i}`;break;case"caseaction":r+=`cases/${a}/actions/${i}`;break;case"attachment":r+=`attachments/${a}`;break;case"attachments":r+=`cases/${a}/attachments`;break;case"attachmentcategories":r+=`cases/${a}/attachment_categories`}fetch(r,o).then((a=>{if("assignment"===t)this.etag=a.headers.get("etag");else if("attachment"===t)return a.text();return a.ok||404===a.status?a.json():401===a.status?(this.token="",this.sendData("authenticate",{...e,type:t,cmd:"fetchData"}),a.json()):Promise.reject(a)})).then((e=>{try{if(e.errors&&e.errors.length>0)return;if(e.pyLocalizedValue)return this.errorMsg=`Error: ${e.pyLocalizedValue}`,void this.requestUpdate();if(e.errorDetails&&e.errorDetails.length>0)return this.errorMsg=`Error ${e.errorDetails[0].message}: ${e.localizedValue}`,this.clearLoadingIndicator(),this.requestUpdate(),void console.error("Error:",e);const s=this.getRenderRoot().querySelector("#case-data");switch(t){case"portal":if(this.content={},this.pageInstructions=[],!this.casetypes){this.casetypes={};let t=[];e.data&&e.data.D_pzCasesAvailableToCreateForPortal&&e.data.D_pzCasesAvailableToCreateForPortal.pxResults?t=e.data.D_pzCasesAvailableToCreateForPortal.pxResults:e.data&&e.data.pyPortal&&e.data.pyPortal.pyCaseTypesAvailableToCreate&&(t=e.data.pyPortal.pyCaseTypesAvailableToCreate);for(const e of t)("workList"!==this.action&&"taskList"!==this.action||""===this.casetype||this.casetype===e.pyClassName)&&(this.casetypes[e.pyClassName]={canCreate:!0,name:e.pyLabel})}this.cases=[];let t=[];if(e.data&&e.data.D_pyUserWorkList&&e.data.D_pyUserWorkList.pxResults?t=e.data.D_pyUserWorkList.pxResults:e.uiResources.context_data.pyPortal.summary_of_lists__.D_pyMyWorkList.pxResults&&(t=e.data[e.uiResources.context_data.pyPortal.summary_of_lists__.D_pyMyWorkList.pxResults.replace(".pxResults","")].pxResults),t.length>0)for(const e of t)this.cases.push({name:e.pyLabel,caseID:e.pxRefObjectKey,urgency:e.pxUrgencyAssign,ID:e.pzInsKey,label:e.pxTaskLabel});this.requestUpdate();break;case"assignment":this.content={},this.pageInstructions=[],this.isDeclarativeTarget=!1,this.refreshOnChange=!1,this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel,this.caseID=this.casedata.ID,this.data.caseID=this.caseID,this.data.ID=a;for(const t of this.casedata.assignments)if(a===t.ID&&t.actions&&t.actions.length>0){this.actionID=t.actions[0].ID;break}this.casepyStatusWork=this.casedata.status,this.data.actions=this.casedata.availableActions,this.name=this.casedata.stageLabel;const o=this.getRenderRoot().querySelector("#case-data");o&&Ct(o,this.casedata.content),this.content={},P(this.renderMainLayout(e.uiResources.resources.views[this.casedata.content.pyViewName],"Obj"),s),this.requestUpdate(),s.focus();break;case"view":if(!s){console.error("Error: case data are not present when retrieving the page");break}this.content={},this.pageInstructions=[],this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel?this.casedata.content.pyLabel:this.casedata.name,this.casedata.actions=this.casedata.availableActions,this.casedata.content.pyID=this.casedata.ID,this.data.ID=this.casedata.ID,this.casepyStatusWork=this.casedata.status,this.name=this.casedata.stageLabel,this.content={},"true"===this.bShowAttachments&&this.fetchData("attachments",{id:this.caseID}),this.name=e.data.caseInfo.name,P(this.renderReviewLayout(e.uiResources.resources.views[i],"Obj"),s),this.requestUpdate(),s.focus();break;case"caseaction":this.content={},this.pageInstructions=[],this.isDeclarativeTarget=!1,this.refreshOnChange=!1,this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel,this.caseID=this.casedata.ID,this.data.caseID=this.caseID,this.data.ID="",this.casepyStatusWork=this.casedata.status,this.data.actions=this.casedata.availableActions,this.name=this.casedata.stageLabel,this.content={},P(this.renderMainLayout(e.uiResources.resources.views[e.uiResources.root.config.name],"Obj"),s),this.requestUpdate(),s.focus();break;case"attachments":let r=e.attachments;r||(r=[]),this.numAttachments=r.length,n&&P(Et(n,r,this.caseID,this),n),this.requestUpdate();break;case"attachmentcategories":this.attachmentcategories=e.attachment_categories;break;case"attachment":n(e)}}catch(t){this.errorMsg=`Error: ${t}`,this.requestUpdate(),console.error("Error:",t)}})).catch((t=>{this.genErrorMessage(t)}))}sendData(t,e){const{id:a,actionid:i,target:n}=e;let s="";""!==this.authentication&&"basic"!==this.authentication||(s=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(s=`Bearer ${this.token}`);const o={"Content-Type":"application/json;charset=UTF-8",Authorization:s},r={method:"POST",headers:o,mode:"cors"},{pageInstructions:l,pageupdate:c}=kt(this.content,this.pageInstructions);let d=`${this.url}/api/application/v2/`;switch(this.validationMsg="",t){case"authenticate":"oauth2password"===this.authentication?r.body=`grant_type=password&client_id=${this.clientid}&client_secret=${this.clientsecret}&username=${this.username}&password=${this.password}`:"oauth2clientcredentials"===this.authentication?r.body=`grant_type=client_credentials&client_id=${this.clientid}&client_secret=${this.clientsecret}`:"authorizationcode"===this.authentication&&(r.body=`grant_type=authorization_code&client_id=${this.clientid}&code_verifier=${window.history.state.verifier}&code=${window.history.state.code}&redirect_uri=${encodeURIComponent(Fe())}`),r.headers["Content-Type"]="application/x-www-form-urlencoded",d=`${this.url}/PRRestService/oauth2/v1/token`;break;case"newwork":d+="cases?viewType=form",r.body=JSON.stringify({caseTypeID:a,processID:"pyStartCase",content:c,pageInstructions:l});break;case"submitassignment":r.body=JSON.stringify({content:c,pageInstructions:l}),r.method="PATCH",r.headers["If-Match"]=this.etag,d+=`assignments/${a}/actions/${i}?viewType=form`;break;case"submitcaseaction":r.body=JSON.stringify({content:c,pageInstructions:l}),r.method="PATCH",r.headers["If-Match"]=this.etag,d+=`cases/${a}/actions/${i}?viewType=form`;break;case"refreshassignment":d+=`assignments/${a}/actions/${i}/refresh`,r.headers["If-Match"]=this.etag,r.method="PATCH",r.body=JSON.stringify({content:c,pageInstructions:l,contextData:!0});break;case"dataviews":d+=`data_views/${a}`,r.body=JSON.stringify(e.content);break;case"uploadattachment":d+="attachments/upload",delete o["Content-Type"];const t=new FormData;t.append("File",i,i.name),r.body=t;break;case"attachments":d+=`cases/${a}/attachments`,r.body=JSON.stringify({attachments:i});break;case"deleteattachment":d+=`attachments/${a}`,r.method="DELETE"}fetch(d,r).then((a=>"deleteattachment"===t||"attachments"===t?a.text():("submitassignment"!==t&&"newwork"!==t||(this.etag=a.headers.get("etag")),200===a.status||201===a.status||a.status>=400&&a.status<500||500===a.status?(401===a.status&&"authenticate"!==t&&(this.token="",this.sendData("authenticate",{...e,type:t,cmd:"sendData"})),a.json()):a.ok?Promise.resolve("ok"):Promise.reject(a)))).then((a=>{if(a.errors&&a.errors.length>0)return this.errorMsg=`Error: ${a.errors[0].message.trim()}`,void this.requestUpdate();if(a.access_token)this.token=a.access_token,window.history.replaceState({token:this.token},"",window.location.href),e!=={}&&e.type&&e.cmd&&("sendData"===e.cmd?this.sendData(e.type,e):this.fetchData(e.type,e));else if(a.errorDetails&&a.errorDetails.length>0){if(a.errorDetails[0].localizedValue){const t=this.getRenderRoot().querySelector("#case-data");t&&(Dt(t,a.errorDetails,this),this.validationMsg=this.genPageValidationErrors(a,t))}else this.errorMsg=`Error ${a.errorDetails[0].message}: ${a.localizedValue}`;this.clearLoadingIndicator(),n&&(n.disabled=!1,n.textContent="Save"),"submitassignment"===t&&this.fetchData("assignment",{id:this.assignmentID})}else{const e=this.getRenderRoot().querySelector("#case-data");if("dataviews"===t&&(this.data=a.data??[]),"newwork"===t&&a.data.caseInfo.ID&&""!==a.data.caseInfo.ID&&this.sendExternalEvent({type:"newwork",id:a.data.caseInfo.ID}),"refreshassignment"===t)return void(e&&a.data.caseInfo&&a.data.caseInfo.content&&(this.data.data.caseInfo.content=a.data.caseInfo.content,this.casedata.content=a.data.caseInfo.content,P(this.renderMainLayout(this.data.uiResources.resources.views[this.actionID],"Obj"),e)));if("deleteattachment"===t)n&&!n.classList.contains("attach-files")&&this.fetchData("attachments",{id:this.caseID,target:n});else if("attachments"===t)this.fetchData("attachments",{id:this.caseID,target:n});else if("uploadattachment"===t){let t=i.name.lastIndexOf(".");-1===t&&(t=i.name.length);const e=i.name.substring(t+1),s=[{type:"File",category:i.category,fileType:e,name:i.displayName,ID:a.ID}];return void this.sendData("attachments",{id:this.caseID,actionid:s,target:n})}if(a.confirmationNote)this.bShowConfirm=!0,this.caseID=a.data.caseInfo.ID,this.fetchData("view",{id:this.caseID,actionid:"pyReview"});else if(a.uiResources){if(this.bShowNew=!1,this.content={},this.pageInstructions=[],this.assignmentID=a.nextAssignmentInfo.ID,this.data=a,this.casedata=a.data.caseInfo,this.data.name=this.casedata.content.pyLabel?this.casedata.content.pyLabel:this.casedata.name,this.caseID=this.casedata.content.pzInsKey,this.data.caseID=a.data.caseInfo.ID,this.data.ID=this.assignmentID,this.casedata.content.pyViewName=a.uiResources.root.config.name,this.actionID=this.casedata.content.pyViewName,this.casedata.assignments)for(const t of this.casedata.assignments)if("pzQuestionPageScr"===t.processID&&this.data.ID===t.ID&&t.actions&&t.actions.length>0){this.actionID=t.actions[0].ID;break}this.casepyStatusWork=a.data.caseInfo.status,this.data.actions=a.data.caseInfo.availableActions,this.name=a.data.caseInfo.stageLabel,e&&(P(this.genLoadingIndicator(),e),P(this.renderMainLayout(a.uiResources.resources.views[this.casedata.content.pyViewName],"Obj"),e),e.focus())}}this.requestUpdate()})).catch((t=>{this.genErrorMessage(t)}))}}const Ve=t=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20px" height="20px" fill="currentColor">${t}</svg>`;class Be extends Q{static get properties(){return{content:{},root:{}}}createRenderRoot(){return this}constructor(t,e,a){super(),this.content=t,this.root="";const i=(new DOMParser).parseFromString(this.content,"text/html");document.execCommand("defaultParagraphSeparator",!1,"br");const n=document.createElement("div"),s=i.querySelector("body");n.setAttribute("contenteditable","true"),n.setAttribute("data-ref",e),n.setAttribute("id",a),n.innerHTML=s.innerHTML,this.root=n}render(){return R`<div class='rich-text-main'>
      <div class="editor-actions">
        <div class="toolbar">
          ${this.renderToolbar(((t,e)=>{document.execCommand(t,!1,e)}))}
        </div>
      </div>
      <div class="editor">${this.root}</div>
    </div>`}async firstUpdated(){document.addEventListener("selectionchange",(()=>{this.requestUpdate()}))}renderToolbar(t){const e=document.getSelection?document.getSelection():null,a=[];if(e&&"Range"===e.type){let t=e.baseNode;if(t)for(;null!=t;){const e=t&&t.tagName?t.tagName.toLowerCase().trim():void 0;e&&a.push(e),t=t.parentNode}}const i=[{icon:"Clear",title:"Remove all styling",command:"removeFormat"},{title:"Change format",command:"formatblock",values:[{name:"Normal Text",value:"--"},{name:"Heading 1",value:"h1"},{name:"Heading 2",value:"h2"},{name:"Heading 3",value:"h3"},{name:"Heading 4",value:"h4"},{name:"Heading 5",value:"h5"},{name:"Heading 6",value:"h6"},{name:"Paragraph",value:"p"},{name:"Pre-Formatted",value:"pre"}]},{title:"Change font size",command:"fontsize",values:[{name:"Font Size",value:"--"},{name:"Very Small",value:"1"},{name:"Small",value:"2"},{name:"Normal",value:"3"},{name:"Medium Large",value:"4"},{name:"Large",value:"5"},{name:"Very Large",value:"6"},{name:"Maximum",value:"7"}]},{icon:()=>Ve('<path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"></path>'),title:"Bold",command:"bold",active:a.includes("b")},{icon:()=>Ve('<path d="m9.586 14.633.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"></path>'),title:"Italic",command:"italic",active:a.includes("i")},{icon:()=>Ve('<path d="M3 18v-1.5h14V18zm2.2-8V3.6c0-.4.4-.6.8-.6.3 0 .7.2.7.6v6.2c0 2 1.3 2.8 3.2 2.8 1.9 0 3.4-.9 3.4-2.9V3.6c0-.3.4-.5.8-.5.3 0 .7.2.7.5V10c0 2.7-2.2 4-4.9 4-2.6 0-4.7-1.2-4.7-4z"></path>'),title:"Underline",command:"underline",active:a.includes("u")},{icon:()=>Ve('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"></path>'),title:"Align left",command:"justifyleft"},{icon:()=>Ve('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"></path>'),title:"Align middle",command:"justifycenter"},{icon:()=>Ve('<path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"></path>'),title:"Align right",command:"justifyright"},{icon:()=>Ve('<path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"></path>'),title:"Numbered list",command:"insertorderedlist",active:a.includes("ol")},{icon:()=>Ve('<path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"></path>'),title:"Bullet list",command:"insertunorderedlist",active:a.includes("ul")},{icon:()=>Ve('<path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"></path>'),command:"formatblock",title:"Format block quote",command_value:"blockquote"},{icon:()=>Ve('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zm1.618-9.55L.98 9.358a.4.4 0 0 0 .013.661l3.39 2.207A.4.4 0 0 0 5 11.892V7.275a.4.4 0 0 0-.632-.326z"></path>'),title:"decrease indent",command:"outdent"},{icon:()=>Ve('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zM1.632 6.95 5.02 9.358a.4.4 0 0 1-.013.661l-3.39 2.207A.4.4 0 0 1 1 11.892V7.275a.4.4 0 0 1 .632-.326z"></path>'),title:"Increase indent",command:"indent"},{icon:()=>Ve('<path d="m5.042 9.367 2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z"></path>'),title:"Undo",command:"undo"},{icon:()=>Ve('<path d="m14.958 9.367-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z"></path>'),title:"Redo",command:"redo"},{icon:()=>Ve('<path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"></path>'),title:"Add link",active:a.includes("a"),deactivate:"unlink",command:()=>{const e=prompt("Enter the URL","");e&&""!==e&&t("createlink",e)}},{icon:()=>Ve('<path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"></path>'),title:"Add image",active:a.includes("img"),command:()=>{const e=prompt("Enter the image URL","");e&&""!==e&&t("insertImage",e)}}];return R`
      ${i.map((e=>R`
          ${e.values?R` <select aria-label="${i18n.t(e.title)}" tabindex=-1
        @change=${a=>{a.preventDefault();const i=a.target.value;"--"===i?t("removeFormat",void 0):"string"==typeof e.command&&t(e.command,i)}}>
    ${e.values.map((t=>R` <option value=${t.value}>${t.name}</option>`))}
              </select>`:R` <button aria-label="${i18n.t(e.title)}" title="${i18n.t(e.title)}" tabindex=-1
                class="${e.active?"active":"inactive"}"
                @click=${a=>{a.preventDefault(),e.active&&e.deactivate?"string"==typeof e.deactivate?t(e.deactivate,e.command_value):e.deactivate():"string"==typeof e.command?t(e.command,e.command_value):e.command()}}>${"function"==typeof e.icon?document.createRange().createContextualFragment(`${e.icon()}`):e.icon}</button>`}
        `))}
    `}}customElements.define("rich-text-editor",Be);const We=(t,e)=>{if(t.helperText&&""!==t.helperText)return`${e}-info`},Ze=t=>{if(t.placeholder&&""!==t.placeholder)return t.displayplaceholder},Je=(t,e,a,i)=>void 0===e||""===e?R`
      ${i}
    `:R`
    <div class="flex content-item field-item ${a}" ?disabled="${t.disabledstate}">
      ${((t,e,a)=>{if(void 0===e)return null;const i=t.requiredstate?"icon-required":"";return"field-checkbox"===a?t.label&&""!==t.label?R`<legend class="field-caption">${t.displaylabel}</legend>`:null:R`
    ${""!==t.label?R`<label class="field-caption dataLabelForWrite ${i}"
    for="${Ot(e)}">${t.displaylabel}
    </label>`:null}
  `})(t,e,a)}${i}${((t,e)=>t.helperText&&""!==t.helperText?R`<span id=${`${e}-info`} class="helper-text">${t.displayhelperText}</span>`:null)(t,e)}
    </div>
  `,Ye=(t,e,a,i,n)=>{const s=((t,e,a,i,n)=>{if(!1===t.config.visibility)return null;let s=!1;if(t.config.displayvalue="",t.config.displaylabel=i18n.t(t.config.label),t.config.displayplaceholder=i18n.t(t.config.placeholder),t.config.displayhelperText=i18n.t(t.config.helperText),t.config.displaycaption=i18n.t(t.config.caption),t.config.value){let e=t.config.value.replace("@P .","").replace("@USER .","");if(t.config.reference=void 0===n||""===n?e:`${n}.${e}`,t.config.displayvalue=gt(i.casedata.content,t.config.reference),"string"==typeof t.config.datasource&&0===t.config.datasource.indexOf("@ASSOCIATED")){e=t.config.datasource.replace("@ASSOCIATED .",""),-1!==e.indexOf(".")&&(e=e.substring(e.lastIndexOf(".")+1));let a="";i.data.context_data?a=i.data.context_data.content:i.data.uiResources.context_data&&i.data.uiResources.context_data.caseInfo&&i.data.uiResources.context_data.caseInfo.content&&(a=i.data.uiResources.context_data.caseInfo.content);const s=""===n?a:gt(a,n);if(s&&(t.config.options=s.summary_of_associated_lists__[e]),void 0===t.config.options&&(a=i.data.uiResources.resources.fields[e],Array.isArray(a)&&1===a.length&&(a=a[0]),a&&a.datasource))if(a.datasource.records)t.config.options=a.datasource.records;else if(a.datasource.name&&i.data.data.shared[a.datasource.name]){const e=i.data.data.shared[a.datasource.name];if(Object.keys(e).length>0){const i=Object.keys(e)[0];if(e[i].pxResults){const n=a.datasource.propertyForValue.replace("@P .",""),s=a.datasource.propertyForDisplayText.replace("@P .","");t.config.options=[];for(const a in e[i].pxResults){const o=e[i].pxResults[a];t.config.options[a]={key:o[n],value:o[s]}}}}}}else if("object"==typeof t.config.datasource&&t.config.datasource.source&&0===t.config.datasource.source.indexOf("@DATASOURCE")){const e=t.config.datasource.source.replace("@DATASOURCE ","").replace(".pxResults","");if(i.data.data[e]&&i.data.data[e].pxResults)t.config.options=i.data.data[e].pxResults;else if(i.data.uiResources.context_data&&i.data.uiResources.context_data.caseInfo&&i.data.uiResources.context_data.caseInfo.content){const a=i.data.uiResources.context_data.caseInfo.content;if(a[n]&&a[n].summary_of_lists__[e]&&a[n].summary_of_lists__[e].pxResults){const s=a[n].summary_of_lists__[e].pxResults.replace(".pxResults","");if(i.data.data[s]&&i.data.data[s].pxResults){t.config.options=[];const e=t.config.datasource.fields.key.replace("@P .",""),a=t.config.datasource.fields.text.replace("@P .","");for(const n in i.data.data[s].pxResults){const o=i.data.data[s].pxResults[n];t.config.options[n]={key:o[e],value:o[a]}}}}}}if(t.config.options||(t.config.options=[]),t.config.displayvalue?"object"!=typeof t.config.displayvalue&&(t.config.displayvalue=`${t.config.displayvalue}`):t.config.displayvalue="",i.data.uiResources&&i.data.uiResources.resources&&i.data.uiResources.resources.fields&&i.data.uiResources.resources.fields[e]){let t=i.data.uiResources.resources.fields[e];Array.isArray(t)&&1===t.length&&(t=t[0]),(t.isDeclarativeTarget||t.isSpecial)&&(s=!0,i.isDeclarativeTarget=!0)}}"string"!=typeof t.config.visibility&&"string"!=typeof t.config.readOnly&&"string"!=typeof t.config.disabled&&"string"!=typeof t.config.required||(i.refreshOnChange=!0);const o=i.data.data.caseInfo.content;if("string"==typeof t.config.visibility&&"true"!==t.config.visibility){if(!wt(t.config.visibility,o,n))return null}else if(!1===t.config.visibility||"false"===t.config.visibility)return null;return t.config.readonlystate=!1,"string"==typeof t.config.readOnly&&"false"!==t.config.readOnly?t.config.readonlystate=wt(t.config.readOnly,o,n):(!0===t.config.readOnly||"true"===t.config.readOnly||s)&&(t.config.readonlystate=!0),t.config.requiredstate=!1,"string"==typeof t.config.required&&"false"!==t.config.required?t.config.requiredstate=wt(t.config.required,o,n):!0!==t.config.required&&"true"!==t.config.required||(t.config.requiredstate=!0),t.config.disabledstate=!1,"string"==typeof t.config.disabled&&"false"!==t.config.disabled?t.config.disabledstate=wt(t.config.disabled,o,n):!0!==t.config.disabled&&"true"!==t.config.disabled||(t.config.disabledstate=!0),t.config.disabledstate&&(t.config.requiredstate=!1,t.config.readonlystate=!1),"OK"})(t,0,0,i,n);if("OK"!==s)return s;if(!0===a)return Je(t.config,e,"field-text",Ge(t.config,t.type,e));switch(t.type){case"TextContent":return Ge(t.config,t.type,e);case"Decimal":case"TextInput":return Je(t.config,e,"field-textinput",Ke(t.config,e));case"Phone":return Je(t.config,e,"field-phoneinput",Xe(t.config,e));case"Email":return Je(t.config,e,"field-emailinput",aa(t.config,e));case"Integer":return Je(t.config,e,"field-numberinput",Qe(t.config,e));case"Percentage":return Je(t.config,e,"field-percentage",ta(t.config,e));case"Currency":return Je(t.config,e,"field-currencyinput",ea(t.config,e));case"RadioButtons":return Je(t.config,e,"field-radiogroup",oa(t.config,e));case"TextArea":return Je(t.config,e,"field-textarea",ia(t.config,e));case"RichText":return Je(t.config,e,"field-richtext",na(t.config,e));case"Checkbox":return Je(t.config,e,"field-checkbox",sa(t.config,e));case"Dropdown":return Je(t.config,e,"field-dropdown",ra(t.config,e));case"DateTime":return Je(t.config,e,"field-datetime",la(t.config,e));case"Date":return Je(t.config,e,"field-date",ca(t.config,e));case"Time":return Je(t.config,e,"field-time",da(t.config,e));case"AutoComplete":return Je(t.config,e,"field-autocomplete",ha(t.config,e));case"SemanticLink":return Je(t.config,e,"field-semanticlink",ua(t.config));case"Attachment":return Je(t.config,e,"field-attachment",pa(t.config,e,i));case"Location":return Je(t.config,e,"field-location",ga(t.config,e));default:return null}},Ge=(t,e,a)=>{let i=t.displayvalue;if(""!==i){if("Phone"===e)return R`<a data-ref="${t.reference}" id="${Ot(a)}" href="${`tel:${i}`}">${i}</a>`;if("Date"===e){const e={year:"numeric",month:"short",day:"numeric"};i=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}else if("DateTime"===e){i=dt(t.displayvalue);const e={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};i=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}else if("Time"===e){const e={hour:"numeric",minute:"numeric"};i=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}}if("TextContent"===e){if("Paragraph"===t.displayAs)return R`<p>${i18n.t(t.content)}</p>`;if("Heading 1"===t.displayAs)return R`<h1>${i18n.t(t.content)}</h1>`;if("Heading 2"===t.displayAs)return R`<h2>${i18n.t(t.content)}</h2>`;if("Heading 3"===t.displayAs)return R`<h3>${i18n.t(t.content)}</h3>`;if("Heading 4"===t.displayAs)return R`<h4>${i18n.t(t.content)}</h4>`}return R`
    <span class="dataValueRead" data-ref="${t.reference}" id="${Ot(a)}">${ht(i)}</span>
  `},Ke=(t,e)=>R`
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${Ot(Ze(t))}"
    type="text"
    aria-describedby="${Ot(We(t,e))}"
    id="${Ot(e)}"
    value="${ht(t.displayvalue)}"
  />
`,Xe=(t,e)=>{let a="";for(const e of t.options)0===t.displayvalue.indexOf(e.pyCallingCode)&&(a=e.pyCallingCode);return t.displayvalue=t.displayvalue.substring(a.length),R`
<div>
<select
  class="field-countrycode"
  ?readonly="${t.readonlystate}"
  ?disabled="${t.disabledstate}"
  aria-label="${i18n.t("Select country code")}">
  ${t.options.map((t=>R`<option ?selected=${t.pyCallingCode===a}
  value='${t.pyCallingCode}'>${t.pyCallingCode}</option>`))}
</select>
 <input
   data-ref="${t.reference}"
   ?required="${t.requiredstate}"
   ?readonly="${t.readonlystate}"
   ?disabled="${t.disabledstate}"
   placeholder="${Ot(Ze(t))}"
   type="tel"
   aria-describedby="${Ot(We(t,e))}"
   id="${Ot(e)}"
   value="${ht(t.displayvalue)}"
 />
 </div>
`},Qe=(t,e)=>R`
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${Ot(Ze(t))}"
    type="number"
    aria-describedby="${Ot(We(t,e))}"
    id="${Ot(e)}"
    value="${ht(t.displayvalue)}"
  />
`,ta=(t,e)=>R`
 <input
   data-ref="${t.reference}"
   ?required="${t.requiredstate}"
   ?readonly="${t.readonlystate}"
   ?disabled="${t.disabledstate}"
   placeholder="${Ot(Ze(t))}"
   type="text"
   aria-describedby="${Ot(We(t,e))}"
   id="${Ot(e)}"
   value="${ht(t.displayvalue)}"
 />
`,ea=(t,e)=>R`
  <div ?readonly="${t.readOnly}">
  <span class="currency-symbol">$</span>
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${Ot(Ze(t))}"
    type="number"
    aria-describedby="${Ot(We(t,e))}"
    id="${Ot(e)}"
    value="${ht(t.displayvalue)}"
  />
  </div>
`,aa=(t,e)=>R`
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${Ot(Ze(t))}"
    type="email"
    aria-describedby="${Ot(We(t,e))}"
    id="${Ot(e)}"
    value="${ht(t.displayvalue)}"
  />
`,ia=(t,e)=>R`
  <textarea
    rows="3"
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${Ot(Ze(t))}"
    type="email"
    aria-describedby="${Ot(We(t,e))}"
    id="${Ot(e)}"
  >${ht(t.displayvalue)}</textarea>
`,na=(t,e)=>new Be(ht(t.displayvalue),t.reference,e),sa=(t,e)=>{const a=t.requiredstate?"icon-required":"";return R`
  <input
  data-ref="${t.reference}"
  ?required="${t.requiredstate}"
  ?readonly="${t.readonlystate}"
  onclick="${Ot(t.readonlystate?"return false;":void 0)}"
  ?disabled="${t.disabledstate}"
  aria-describedby="${Ot(We(t,e))}"
  id=${Ot(e)}
  type="checkbox" ?checked=${"true"===t.displayvalue||!0===t.displayvalue}
  />
  <label class=${a} for=${Ot(e)}>
  ${t.displaycaption}
    </label>
`},oa=(t,e)=>{let a=[{value:"true"},{value:"false"}];return t.options&&(a=t.options),R`
    ${a.map(((a,i)=>{const n=`rb-${e}-${i}`;return R`
        <div>
          <input
            data-ref="${t.reference}"
            name=${Ot(e)}
            id=${n}
            type="radio"
            ?required="${t.requiredstate}"
            ?readonly="${t.readonlystate}"
            ?disabled="${t.disabledstate}"
            value="${a.key}"
            onclick="${Ot(t.readonlystate?"return false;":void 0)}"
            ?checked="${a.key===t.displayvalue}"
          />
          <label for="${n}">${a.value}</label>
        </div>
      `}))}
  `},ra=(t,e)=>R`<select
  data-ref="${t.reference}"
  aria-describedby="${Ot(We(t,e))}"
  id=${Ot(e)}
  ?required="${t.requiredstate}"
  ?readonly="${t.readonlystate}"
  ?disabled="${t.disabledstate}">
  placeholder="${Ot(Ze(t))}"
    <option value="" title="${i18n.t("Select...")}">${i18n.t("Select...")}</option>
    ${t.options.map((e=>R`<option ?selected=${e.key===t.displayvalue} value='${e.key}'>${e.value}</option>`))}
  </select>`,la=(t,e)=>{let a=t.displayvalue;if(""!==a){const e=dt(a);e instanceof Date&&e.getTime()==e.getTime()?a=`${e.getUTCFullYear()}-${lt(e.getUTCMonth()+1)}-${lt(e.getUTCDate())}T${lt(e.getUTCHours())}:${lt(e.getUTCMinutes())}`:8===t.displayvalue.length?a=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(4,6)}-${t.displayvalue.substring(6,8)}T00:00`:24===t.displayvalue.length&&(a=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(5,7)}-${t.displayvalue.substring(8,10)}T${t.displayvalue.substring(11,13)}:${t.displayvalue.substring(14,16)}`)}return R`
    <input
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="datetime-local"
      aria-describedby="${Ot(We(t,e))}"
      id="${Ot(e)}"
      value="${a}"
    />
  `},ca=(t,e)=>{let a=t.displayvalue;if(""!==a){const e=dt(a);e instanceof Date&&e.getTime()==e.getTime()?a=`${e.getUTCFullYear()}-${lt(e.getUTCMonth()+1)}-${lt(e.getUTCDate())}`:8===t.displayvalue.length&&(a=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(4,6)}-${t.displayvalue.substring(6,8)}`)}return R`
    <input
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="date"
      aria-describedby="${Ot(We(t,e))}"
      id="${Ot(e)}"
      value="${a}"
    />
  `},da=(t,e)=>{let a=t.displayvalue;if(""!==a){const e=dt(a);e instanceof Date&&e.getTime()==e.getTime()?a=`${lt(e.getUTCHours())}-${lt(e.getUTCMinutes())}-${lt(e.getUTCSeconds())}`:8===t.displayvalue.length&&(a=`${t.displayvalue.substring(9,10)}:${t.displayvalue.substring(10,11)}:${t.displayvalue.substring(11,12)}`)}return R`
    <input
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="time"
      aria-describedby="${Ot(We(t,e))}"
      id="${Ot(e)}"
      value="${a}"
    />
  `},ha=(t,e)=>t.options?R`
      <input
        data-ref="${t.reference}"
        list="${t.reference}"
        ?required="${t.requiredstate}"
        ?readonly="${t.readonlystate}"
        ?disabled="${t.disabledstate}"
        placeholder="${Ot(Ze(t))}"
        type="text"
        class="combobox loaded"
        aria-describedby="${Ot(We(t,e))}"
        id="${Ot(e)}"
        value="${ht(t.displayvalue)}"
      />
      <datalist id="${t.reference}">
        ${t.options.map((t=>R`
            <option value="${t.key}">
              ${t.value}
            </option>
          `))}
      </datalist>
    `:null,ua=()=>R`
 <a>semantic link</a>
`,pa=(t,e,a)=>{let i=[];return t.displayvalue&&t.displayvalue.pxResults&&t.displayvalue.pxResults.length>0&&(i=t.displayvalue.pxResults),Et(void 0,i,a.caseID,a)},ga=(t,e)=>R`<input
 class="location"
 data-ref="${t.reference}"
 ?required="${t.requiredstate}"
 ?readonly="${t.readonlystate}"
 ?disabled="${t.disabledstate}"
 placeholder="${Ot(Ze(t))}"
 type="text"
 aria-describedby="${Ot(We(t,e))}"
 id="${Ot(e)}"
 value="${ht(t.displayvalue)}"
/>`,fa=(t,e)=>R`
  ${t.map((t=>R`
    <th scope='col'>${i18n.t(t.config.label)}</th>`))}${e?null:R`<th></th>`}
`,ma=(t,e)=>{if(!e){const e=[];t.config.children[0].children.map(((t,a)=>(e[a]=t.config.value.replace("@P .","").replace("@USER .",""),null)));const a=t.config.referenceList.replace("@P .","").replace("@USER .","");return R`
      <div class="table-action-area">
        <button type="button" class="pzhc pzbutton Simple" aria-label="${i18n.t("Add row")}" data-newrow="${e.join()}"
        data-ref=${a} data-action-click="addRow">${at()}${i18n.t("Add item")}</button>
      </div>
    `}return null},ba=(t,e,a)=>{const i=t.config.referenceList.replace("@P .","").replace("@USER .",""),n=t.config.children[0].children,s=gt(a.data.data.caseInfo.content,i);return s?R`
  ${s.map(((t,s)=>R`
    <tr>
    ${n.map((t=>{const n=t,o=i18n.t(t.config.label);return R`
    <td data-title="${o}">${Ye(n,void 0,e,a,`${i}(${s+1})`)}</td>`}))}${e?null:R`<td><button type="button" class="pzhc pzbutton Simple"
  aria-label="${i18n.t("Delete item")}" data-ref=${`${i}(${s+1}).pyTemplate`}
  data-action-click='deleteRow'>${nt()}</button></td>`}
    </tr>`))}
`:null},$a=(t,e,a,i,n)=>{if(void 0===t)return null;if(Array.isArray(t)&&1===t.length&&"View"===t[0].type&&(t=t[0]),!t.config||!t.config.template)return R`${t.map(((t,s)=>{const o=`${e}-${s}`;if("Region"===t.type)return $a(t.children,`${e}-0`,!0,i,n);if("reference"===t.type&&"view"===t.config.type){let e="";if(t.config.context&&(e=t.config.context),t.config.inheritedProps&&1===t.config.inheritedProps.length&&"label"===t.config.inheritedProps[0].prop){const s=i18n.t(t.config.inheritedProps[0].value);let r=i.data.uiResources.resources.views[t.config.name];if(r){if(Array.isArray(r)&&1===r.length&&"View"===r[0].type&&(r=r[0]),"fieldGroup"===r.config.multiRecordDisplayAs)return $a(r,o,a,i,""===n?e.substring(1):n+e);const t="SimpleTable"===r.config.template||"ListView"===r.config.template?"field-table":"field-subview";return R`<div class='flex content-item field-item ${t}'><h4>${s}</h4>${$a(r,o,a,i,""===n?e.substring(1):n+e)}</div>`}}return $a(i.data.uiResources.resources.views[t.config.name],o,a,i,n&&""!==n?n+e:e.substring(1))}return Ye(t,o,a,i,n)}))}`;if("SimpleTable"===t.config.template){if("fieldGroup"===t.config.multiRecordDisplayAs){const n=t.config.referenceList.replace("@P .","").replace("@USER .",""),s=gt(i.data.data.caseInfo.content,n);if(!s)return null;const o=t.config.heading.replace("@L ","");return R`${s.map(((s,r)=>R`<div><h4>${`${o} ${r}`}</h4>
        ${$a(t.children[0].children,`${e}-fieldgroup-${r}`,a,i,`${n}(${r+1})`)}</div>`))}`}return((t,e,a)=>{const i=e||"Editable"!==t.config.renderMode;return R`
  <div class='table-content'><table class='responsive'>
    <thead>
      <tr>
        ${fa(t.config.children[0].children,i)}
      </tr>
    </thead>
    <tbody>
      ${ba(t,i,a)}
    </tbody>
  </table></div>
  ${ma(t,i)}`})(t,a,i)}if("ListView"===t.config.template)return((t,e,a)=>(a.sendData("dataviews",{id:t.config.referenceList,content:{paging:{pageNumber:1,pageSize:41}}}),R`
  <table class='responsive'>
    <thead>
      <tr>
        ${fa(t.config.presets[0].children[0].children,e)}
      </tr>
    </thead>
    <tbody>${et()}
    </tbody>
  </table>`))(t,a,i);switch("DataReference"===t.config.template&&(i.isDeclarativeTarget=!0),"TwoColumn"===t.config.template&&1===t.children.length&&(t.config.template="OneColumn"),t.config.template){case"DetailsTwoColumn":case"TwoColumn":return R`
          <div class="flex layout-content-inline_grid_double">
            <div class="flex layout-content-stacked">${$a(t.children[0].children,`${e}-0`,a,i,n)}</div>
            <div class="flex layout-content-stacked">${$a(t.children[1].children,`${e}-1`,a,i,n)}</div>
          </div>
        `;case"DefaultForm":return R`
          <div class="${`flex layout-content-default-form layout-content-default-form-${t.config.NumCols}`}">
            ${$a(t.children[0].children,`${e}-0`,a,i,n)}
          </div>
        `;case"DataReference":return R`
          <div class="flex layout-content-stacked">
            ${$a(t.children,`${e}-0`,a,i,n)}
          </div>
        `;case"OneColumn":return R`
          <div class="flex layout-content-stacked">
            ${$a(t.children[0].children,`${e}-0`,a,i,n)}
          </div>
        `;case"Details":return R`
          <div class="flex layout-content-stacked_with_labels_left">
            ${$a(t.children[0].children,`${e}-0`,!0,i,n)}
          </div>
        `;default:return null}},va=(t,e,a,i,n,s,o,r,l,c)=>{const d=R`${st()}<span class='count-badge'>${n}</span>`;if(void 0===e.caseID&&a.content){const n=a.content.pyID.split(" ")[1];return R`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${i18n.t(e.data.caseInfo.name)} <span>(${n})</span>
      ${""!==i?R`<span class='badge-bg-info centered'><span class='badge_text'>${i}</span></span>`:""}</h2>
      <div class="flex layout-content-inline_middle margin-l-auto">
        ${l?Tt("Attachments",d,"Simple",l):""}
        ${"true"===c&&a.actions&&(a.actions.length>1||1===a.actions.length&&a.actions[0].name!==t)?R`
          ${St("Actions","Start a new action",s,o)}`:""}
      </div>
    </div>
    ${((t,e)=>t&&0!==t.length?R`
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
        ${t.map((t=>R`
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
    <h3>${i18n.t("Case information")}</h3>`}if(""===t||void 0===e.caseID)return"";const h=e.caseID.split(" ")[1];return R`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${i18n.t(e.data.caseInfo.name)} <span>(${h})</span>
    ${""!==i?R`<span class='badge-bg-info centered'><span class='badge_text'>${i}</span></span>`:""}</h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      ${l?Tt("Attachments",d,"Simple",l):""}
      ${"true"===c&&e.actions&&(e.actions.length>1||1===e.actions.length&&e.actions[0].name!==t)?R`
        ${St("Actions","Start a new action",s,o)}`:""}
    </div>
  </div>
 <h3>${i18n.t(t)}</h3>`},ya=(t,e,a,i,n)=>R`
  <div>${$a(t,e,!1,n,"")}</div>
  ${((t,e)=>R`
  <div class="action-button-area">
    ${null!==t?R`<button type="button" class="pzhc pzbutton" @click="${t}">${i18n.t("Cancel")}</button>`:""}
    ${null!==e?R`<button type="button" class="pzhc pzbutton" @click="${e}">${i18n.t("Save")}</button>`:""}
    <button type="button" data-submit="submit" class="Strong pzhc pzbutton">${i18n.t("Submit")}</button>
  </div>
`)(a,i)}
`,xa=(t,e,a,i)=>R`
  <div>${$a(t,e,!0,i)}</div>
  ${(t=>null===t?null:R`
  <div class="action-button-area">
  ${null!==t?R`<button type="button" class="pzhc pzbutton Strong" @click="${t}">${i18n.t("Close")}</button>`:""}
  </div>`)(a)}
`;class wa extends je{displayContent(){if(this.bShowSave="false",""!==this.errorMsg){if(-1===this.errorMsg.indexOf("The provided authorization code is expired"))return ke(this.errorMsg,"true"===this.bShowCancel?this.resetError:null);window.history.replaceState({},"","")}if(window.history.state&&window.history.state.token&&(this.token=window.history.state.token),("oauth2password"===this.authentication||"oauth2clientcredentials"===this.authentication)&&""===this.token)return this.sendData("authenticate",{}),null;if("authorizationcode"===this.authentication&&""===this.token)return window.history.state&&window.history.state.code?(this.sendData("authenticate",{}),null):(t=this.url,e=this.clientid,R`<div class='flex flex-col'><h2>${i18n.t("Log in to the application with one of the following:")}</h2>
  <div class='flex layout-content-inline_middle'>${He(_t().then((a=>{const{verifier:i,challenge:n}=a,s=`response_type=code&scope=openid&code_challenge=${n}&code_challenge_method=S256&response_mode=query&authentication_service=pega`,o=`${t}/PRRestService/oauth2/v1/authorize?client_id=${e}&redirect_uri=${encodeURIComponent(Fe())}&${s}&state=${i}`,r=R`<Button class="pzhc pzbutton" onclick="window.location='${o}'; return false;">
      ${i18n.t("Pega with full page redirect")}</Button>`,l=R`<Button class="pzhc pzbutton" onclick="n=window.open('${o}', 'foo',
      'width=600,height=600');n.focus(); return false;">${i18n.t("Pega with popup")}</Button>`;return R`${l}${r}`})),R`Loading...`)}</div></div>`);var t,e;if(this.casetypes||"createNewWork"!==this.action&&"workList"!==this.action&&"taskList"!==this.action&&"dataView"!==this.action)"createNewWork"===this.action&&""===this.caseID&&this.casetypes&&this.casetypes[this.casetype]?(this.content=this.initialContent,this.pageInstructions=[],this.caseID="",this.data={},this.casedata={},this.sendData("newwork",{id:this.casetype})):""===this.name&&("openAssignment"===this.action&&""===this.assignmentID&&(this.assignmentID=this.caseID),""!==this.assignmentID?this.fetchData("assignment",{id:this.assignmentID}):""!==this.caseID&&this.fetchData("view",{id:this.caseID,actionid:"pyReview"}));else if(this.fetchData("portal"),"createNewWork"===this.action)this.bShowNew=!0;else if(("workList"===this.action||"taskList"===this.action||"dataView"===this.action)&&(this.bShowCancel="true","dataView"===this.action)){const t={};if(this.dataviewParams)for(const e of this.dataviewParams.params)e.name&&e.value&&(t[e.name.trim()]=e.value.trim());this.sendData("dataviews",{id:this.dataviewParams.name,content:{dataViewParameters:t}})}if(this.bShowConfirm){const t=this.data.ID.split(" ")[1];return De(this.casedata.name,t,this.casepyStatusWork,"true"===this.bShowAttachments?this.displayAttachments:null)}return""!==this.caseID||""!==this.assignmentID||this.bShowNew?R`
        ${va(this.name,this.data,this.casedata,this.casepyStatusWork,this.numAttachments,this.displayActions,this.runAction,this.openCase,"true"===this.bShowAttachments?this.displayAttachments:null,this.bShowActions)}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
        <form id="case-data"></form>
      `:"workList"===this.action?Ae(this.title,this.cases,this.displayCasesTypes,this.reloadWorkList,"true"===this.bShowCreate?this.createCase:null,this.openCase):"taskList"===this.action?Ie(this.title,this.cases,this.displayCasesTypes,this.reloadWorkList,"true"===this.bShowCreate?this.createCase:null,this.openCase):"dataView"===this.action?_e(this.title,this.dataviewParams,this.data,this.reloadWorkList,this.openCase):null}renderMainLayout=(t,e)=>ya(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this);renderReviewLayout=(t,e)=>xa(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,this);genPageValidationErrors=t=>(t=>t.errorDetails?R`
    <ul>
      ${t.errorDetails.map((t=>"Error_Validation_Fail"===t.message||"Validation failed: Errors Detected."===t.message?null:R`<li>${i18n.t(t.localizedValue)}</li>`))}
    </ul>`:null)(t);showDataList=t=>we(t);genActionsList=(t,e)=>((t,e)=>{const a=[],i=Object.entries(e.actions);for(const e of i)e[1].name!==t&&a.push(R`
          <li role="menuitem" tabindex="-1" data-value="${e[1].ID}">${i18n.t(e[1].name)}</li>
        `);return R`
    ${a}
  `})(t,e);displayCasesTypes=()=>(t=>{const e=[],a=Object.entries(t);for(const t of a)e.push(R`
        <li role="menuitem" tabindex="-1" data-value="${t[0]}">${i18n.t(t[1].name)}</li>
      `);return R`
    ${e}
  `})(this.casetypes);genLoadingIndicator=()=>et();setInlineError=(t,e)=>{t.setCustomValidity(ht(e)),t.classList.add("error-field"),t.reportValidity()};validateForm=t=>t.checkValidity();reportFormValidity=t=>t.reportValidity();clickHandler=t=>{let e=t.target;"path"===e.tagName&&(e=e.parentNode),"svg"===e.tagName&&(e=e.parentNode);const a=e.getAttribute("data-action-click");e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e),vt(e,"click")?(this.refreshAssignment(e,yt(e,"click")),t.preventDefault()):"BUTTON"===e.tagName&&(t.preventDefault(),null!==e.getAttribute("data-submit")&&"save"!==e.getAttribute("data-submit")?this.submitForm(t,e.getAttribute("data-submit")):("addRow"===a||"deleteRow"===a)&&this.refreshAssignment(e))};changeHandler=t=>{let e=t.target;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e.setCustomValidity(""),e.classList.remove("error-field"),vt(e,"change")||this.isDeclarativeTarget)this.refreshAssignment(e,yt(e,"change"));else if(this.refreshOnChange){const t=this.getRenderRoot().querySelector("#case-data");Ct(t,this.content,this.pageInstructions,this.data.data.caseInfo.content),P(ya(this.data.uiResources.resources.views[this.casedata.content.pyViewName],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),t)}};keyupHandler=t=>{const e=t.target;"TEXTAREA"===e.tagName&&(e.style.cssText="height:auto; padding:0;",e.style.cssText=`height:${e.scrollHeight}px`)};focusHandler=t=>{const e=t.target;e.classList.contains("combobox")&&!e.classList.contains("loaded")?this.getData(e.getAttribute("data-pageid"),e):"INPUT"===e.tagName&&e.classList.contains("location")&&!e.classList.contains("pac-target-input")&&window.google&&window.google.maps&&window.google.maps.places&&new window.google.maps.places.Autocomplete(e)};async firstUpdated(){const t=this.getRenderRoot();t&&(t.addEventListener("click",this.clickHandler),t.addEventListener("focusin",this.focusHandler),t.addEventListener("change",this.changeHandler),t.addEventListener("keyup",this.keyupHandler))}}customElements.define("pega-mashup-v2",class extends wa{createRenderRoot(){return this.attachShadow({mode:"open"})}getRenderRoot(){return this.shadowRoot}render(){return R`
      ${Te()} ${this.displayContent()}
    `}});customElements.define("pega-mashup-light-v2",class extends wa{createRenderRoot(){return this}getRenderRoot(){return this}render(){return R`
      ${this.displayContent()}
    `}})}();
