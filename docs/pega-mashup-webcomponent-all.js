!function(){"use strict";
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),i=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const a=this.t;if(e&&void 0===t){const e=void 0!==a&&1===a.length;e&&(t=i.get(a)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(a,t))}return t}toString(){return this.cssText}};const s=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const a of t.cssRules)e+=a.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,a))(e)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,{is:o,defineProperty:r,getOwnPropertyDescriptor:l,getOwnPropertyNames:c,getOwnPropertySymbols:d,getPrototypeOf:h}=Object,u=globalThis,p=u.trustedTypes,g=p?p.emptyScript:"",f=u.reactiveElementPolyfillSupport,m=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let a=t;switch(e){case Boolean:a=null!==t;break;case Number:a=null===t?null:Number(t);break;case Object:case Array:try{a=JSON.parse(t)}catch(t){a=null}}return a}},$=(t,e)=>!o(t,e),y={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class v extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const a=Symbol(),i=this.getPropertyDescriptor(t,a,e);void 0!==i&&r(this.prototype,t,i)}}static getPropertyDescriptor(t,e,a){const{get:i,set:n}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const s=i?.call(this);n.call(this,e),this.requestUpdate(t,s,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=h(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...c(t),...d(t)];for(const a of e)this.createProperty(a,t[a])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,a]of e)this.elementProperties.set(t,a)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const a=this._$Eu(t,e);void 0!==a&&this._$Eh.set(a,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const a=new Set(t.flat(1/0).reverse());for(const t of a)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Eu(t,e){const a=e.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const a of e.keys())this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const a=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((a,i)=>{if(e)a.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of i){const i=document.createElement("style"),n=t.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=e.cssText,a.appendChild(i)}})(a,this.constructor.elementStyles),a}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,a){this._$AK(t,a)}_$EC(t,e){const a=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,a);if(void 0!==i&&!0===a.reflect){const n=(void 0!==a.converter?.toAttribute?a.converter:b).toAttribute(e,a.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const a=this.constructor,i=a._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=a.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=i,this[i]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,a){if(void 0!==t){if(a??=this.constructor.getPropertyOptions(t),!(a.hasChanged??$)(this[t],e))return;this.P(t,e,a)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,a){this._$AL.has(t)||this._$AL.set(t,e),!0===a.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,a]of t)!0!==a.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],a)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[m("elementProperties")]=new Map,v[m("finalized")]=new Map,f?.({ReactiveElement:v}),(u.reactiveElementVersions??=[]).push("2.0.4");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const x=globalThis,w=x.trustedTypes,C=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,D="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+k,I=`<${A}>`,_=document,S=()=>_.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,L="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,z=/>/g,N=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),P=/'/g,U=/"/g,O=/^(?:script|style|textarea|title)$/i,q=(t=>(e,...a)=>({_$litType$:t,strings:e,values:a}))(1),H=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),j=new WeakMap,V=_.createTreeWalker(_,129);function B(t,e){if(!E(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const W=(t,e)=>{const a=t.length-1,i=[];let n,s=2===e?"<svg>":3===e?"<math>":"",o=R;for(let e=0;e<a;e++){const a=t[e];let r,l,c=-1,d=0;for(;d<a.length&&(o.lastIndex=d,l=o.exec(a),null!==l);)d=o.lastIndex,o===R?"!--"===l[1]?o=M:void 0!==l[1]?o=z:void 0!==l[2]?(O.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=N):void 0!==l[3]&&(o=N):o===N?">"===l[0]?(o=n??R,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,r=l[1],o=void 0===l[3]?N:'"'===l[3]?U:P):o===U||o===P?o=N:o===M||o===z?o=R:(o=N,n=void 0);const h=o===N&&t[e+1].startsWith("/>")?" ":"";s+=o===R?a+I:c>=0?(i.push(r),a.slice(0,c)+D+a.slice(c)+k+h):a+k+(-2===c?e:h)}return[B(t,s+(t[a]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Z{constructor({strings:t,_$litType$:e},a){let i;this.parts=[];let n=0,s=0;const o=t.length-1,r=this.parts,[l,c]=W(t,e);if(this.el=Z.createElement(l,a),V.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=V.nextNode())&&r.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(D)){const e=c[s++],a=i.getAttribute(t).split(k),o=/([.?@])?(.*)/.exec(e);r.push({type:1,index:n,name:o[2],strings:a,ctor:"."===o[1]?X:"?"===o[1]?Q:"@"===o[1]?tt:K}),i.removeAttribute(t)}else t.startsWith(k)&&(r.push({type:6,index:n}),i.removeAttribute(t));if(O.test(i.tagName)){const t=i.textContent.split(k),e=t.length-1;if(e>0){i.textContent=w?w.emptyScript:"";for(let a=0;a<e;a++)i.append(t[a],S()),V.nextNode(),r.push({type:2,index:++n});i.append(t[e],S())}}}else if(8===i.nodeType)if(i.data===A)r.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(k,t+1));)r.push({type:7,index:n}),t+=k.length-1}n++}}static createElement(t,e){const a=_.createElement("template");return a.innerHTML=t,a}}function J(t,e,a=t,i){if(e===H)return e;let n=void 0!==i?a._$Co?.[i]:a._$Cl;const s=T(e)?void 0:e._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),void 0===s?n=void 0:(n=new s(t),n._$AT(t,a,i)),void 0!==i?(a._$Co??=[])[i]=n:a._$Cl=n),void 0!==n&&(e=J(t,n._$AS(t,e.values),n,i)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:a}=this._$AD,i=(t?.creationScope??_).importNode(e,!0);V.currentNode=i;let n=V.nextNode(),s=0,o=0,r=a[0];for(;void 0!==r;){if(s===r.index){let e;2===r.type?e=new G(n,n.nextSibling,this,t):1===r.type?e=new r.ctor(n,r.name,r.strings,this,t):6===r.type&&(e=new et(n,this,t)),this._$AV.push(e),r=a[++o]}s!==r?.index&&(n=V.nextNode(),s++)}return V.currentNode=_,i}p(t){let e=0;for(const a of this._$AV)void 0!==a&&(void 0!==a.strings?(a._$AI(t,a,e),e+=a.strings.length-2):a._$AI(t[e])),e++}}class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,a,i){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=a,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),T(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==H&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>E(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(_.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:a}=t,i="number"==typeof a?this._$AC(t):(void 0===a.el&&(a.el=Z.createElement(B(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Y(i,this),a=t.u(this.options);t.p(e),this.T(a),this._$AH=t}}_$AC(t){let e=j.get(t.strings);return void 0===e&&j.set(t.strings,e=new Z(t)),e}k(t){E(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let a,i=0;for(const n of t)i===e.length?e.push(a=new G(this.O(S()),this.O(S()),this,this.options)):a=e[i],a._$AI(n),i++;i<e.length&&(this._$AR(a&&a._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class K{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,a,i,n){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=F}_$AI(t,e=this,a,i){const n=this.strings;let s=!1;if(void 0===n)t=J(this,t,e,0),s=!T(t)||t!==this._$AH&&t!==H,s&&(this._$AH=t);else{const i=t;let o,r;for(t=n[0],o=0;o<n.length-1;o++)r=J(this,i[a+o],e,o),r===H&&(r=this._$AH[o]),s||=!T(r)||r!==this._$AH[o],r===F?t=F:t!==F&&(t+=(r??"")+n[o+1]),this._$AH[o]=r}s&&!i&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class X extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class Q extends K{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class tt extends K{constructor(t,e,a,i,n){super(t,e,a,i,n),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??F)===H)return;const a=this._$AH,i=t===F&&a!==F||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,n=t!==F&&(a===F||i);i&&this.element.removeEventListener(this.name,this,a),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class et{constructor(t,e,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const at=x.litHtmlPolyfillSupport;at?.(Z,G),(x.litHtmlVersions??=[]).push("3.2.1");const it=(t,e,a)=>{const i=a?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=a?.renderBefore??null;i._$litPart$=n=new G(e.insertBefore(S(),t),t,void 0,a??{})}return n._$AI(t),n
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */};let nt=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=it(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}};nt._$litElement$=!0,nt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:nt});const st=globalThis.litElementPolyfillSupport;st?.({LitElement:nt}),(globalThis.litElementVersions??=[]).push("4.1.1");const ot=()=>q`
<span class="loading">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</span>
`,rt=()=>q`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
<path d="M11.290625,2 C11.290625,2 13.2539062,2 13.2539062,2 C13.2539062,2 13.2539062,22.59375 13.2539062,22.59375 C13.2539062,22.59375 11.290625,22.59375 11.290625,22.59375 C11.290625,22.59375 11.290625,2 11.290625,2 Z M22.59375,11.3390625 C22.59375,11.3390625 22.59375,13.2546875 22.59375,13.2546875 C22.59375,13.2546875 2,13.2546875 2,13.2546875 C2,13.2546875 2,11.3390625 2,11.3390625 C2,11.3390625 22.59375,11.3390625 22.59375,11.3390625 L22.59375,11.3390625 Z"/>
</svg>`,lt=()=>q`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.3375,3 C20.3375,3 21.7742187,4.43671875 21.7742187,4.43671875 C21.7742187,4.43671875 4.43671875,21.4867188 4.43671875,21.4867188 C4.43671875,21.4867188 3,20.19375 3,20.19375 C3,20.19375 20.3375,3 20.3375,3 Z M21.7265625,20.0976563 C21.7265625,20.0976563 20.3859375,21.534375 20.3859375,21.534375 C20.3859375,21.534375 3.00078125,4.3890625 3.00078125,4.3890625 C3.00078125,4.3890625 4.38984375,3 4.38984375,3 C4.38984375,3 21.7273438,20.0976563 21.7273438,20.0976563 L21.7265625,20.0976563 Z"/>
</svg>`,ct=()=>q`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1140625,3.96875 C22.1140625,3.96875 22.1140625,3.96875 22.1140625,3.96875 C22.1140625,3.96875 17.46875,3.96875 17.46875,3.96875 C17.46875,3.96875 16.9898437,2.14921875 16.9898437,2.14921875 C16.9421875,1.8140625 16.7507812,1.57421875 16.5109375,1.33515625 C16.2234375,1.09609375 15.8882813,1 15.553125,1 C15.553125,1 15.553125,1 15.553125,1 C15.553125,1 9.03984375,1 9.03984375,1 C8.7046875,1 8.4171875,1.09609375 8.1296875,1.2875 C7.8421875,1.52734375 7.65078125,1.76640625 7.603125,2.1015625 C7.603125,2.1015625 7.603125,2.1015625 7.603125,2.1015625 C7.603125,2.1015625 7.12421875,3.96953125 7.12421875,3.96953125 C7.12421875,3.96953125 2.47890625,3.96953125 2.47890625,3.96953125 C2.14375,3.96953125 2,4.11328125 2,4.4484375 C2,4.78359375 2.14375,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 2.47890625,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 4.01171875,4.92734375 4.01171875,4.92734375 C4.01171875,4.92734375 4.921875,23.1742188 4.921875,23.1742188 C4.96953125,23.5570312 5.11328125,23.8929688 5.40078125,24.1320313 C5.63984375,24.4195312 5.97578125,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 6.40625,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 18.2359375,24.5632812 18.2359375,24.5632812 C18.6671875,24.5632812 19.0023438,24.4195312 19.2898438,24.1320313 C19.5289063,23.8929688 19.6726562,23.5570312 19.7210938,23.1742188 C19.7210938,23.1742188 19.7210938,23.1742188 19.7210938,23.1742188 C19.7210938,23.1742188 20.63125,4.92734375 20.63125,4.92734375 C20.63125,4.92734375 22.115625,4.92734375 22.115625,4.92734375 C22.4507812,4.92734375 22.5945312,4.78359375 22.5945312,4.4484375 C22.5945312,4.11328125 22.4507812,3.96953125 22.115625,3.96953125 L22.1140625,3.96875 Z M8.17734375,3.96875 C8.17734375,3.96875 8.56015625,2.38828125 8.56015625,2.38828125 C8.6078125,2.1484375 8.79921875,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 9.0390625,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 15.5523437,2.00546875 15.5523437,2.00546875 C15.7914062,2.00546875 15.9835937,2.14921875 16.03125,2.38828125 C16.03125,2.38828125 16.03125,2.38828125 16.03125,2.38828125 C16.03125,2.38828125 16.4140625,3.96875 16.4140625,3.96875 C16.4140625,3.96875 8.1765625,3.96875 8.1765625,3.96875 L8.17734375,3.96875 Z M19.6710938,4.9265625 C19.6710938,4.9265625 18.7609375,23.1257812 18.7609375,23.1257812 C18.7132812,23.4132812 18.521875,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 18.234375,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 6.4046875,23.5570312 6.4046875,23.5570312 C6.1171875,23.5570312 5.92578125,23.4132812 5.878125,23.1257812 C5.878125,23.1257812 5.878125,23.1257812 5.878125,23.1257812 C5.878125,23.1257812 4.96796875,4.9265625 4.96796875,4.9265625 C4.96796875,4.9265625 19.6710938,4.9265625 19.6710938,4.9265625 L19.6710938,4.9265625 Z M8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,18.1929687 8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,10.3382812 8.84765625,10.3382812 C8.84765625,10.003125 9.0390625,9.859375 9.37421875,9.859375 C9.37421875,9.859375 9.37421875,9.859375 9.37421875,9.859375 C9.709375,9.859375 9.853125,10.003125 9.853125,10.3382812 C9.853125,10.3382812 9.853125,10.3382812 9.853125,10.3382812 C9.853125,10.3382812 9.853125,18.1929687 9.853125,18.1929687 C9.853125,18.528125 9.709375,18.671875 9.37421875,18.671875 C9.37421875,18.671875 9.37421875,18.671875 9.37421875,18.671875 C9.0390625,18.671875 8.84765625,18.528125 8.84765625,18.1929687 Z M14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,18.1929687 14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,10.3382812 14.7382812,10.3382812 C14.7382812,10.003125 14.8820313,9.859375 15.2171875,9.859375 C15.2171875,9.859375 15.2171875,9.859375 15.2171875,9.859375 C15.5523437,9.859375 15.74375,10.003125 15.74375,10.3382812 C15.74375,10.3382812 15.74375,10.3382812 15.74375,10.3382812 C15.74375,10.3382812 15.74375,18.1929687 15.74375,18.1929687 C15.74375,18.528125 15.5523437,18.671875 15.2171875,18.671875 C15.2171875,18.671875 15.2171875,18.671875 15.2171875,18.671875 C14.8820313,18.671875 14.7382812,18.528125 14.7382812,18.1929687 Z M11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,19.1507813 11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,9.38046875 11.8164062,9.38046875 C11.8164062,9.0453125 11.9601563,8.85390625 12.2953125,8.85390625 C12.6304687,8.85390625 12.7742187,9.0453125 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,9.38046875 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,19.1507813 12.7742187,19.1507813 C12.7742187,19.4859375 12.6304687,19.6773437 12.2953125,19.6773437 C11.9601563,19.6773437 11.8164062,19.4859375 11.8164062,19.1507813 Z"/>
</svg>`,dt=()=>q`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.5226562,11.6265625 C20.6664062,11.6265625 20.7617188,11.6742188 20.8578125,11.7703125 C20.9539062,11.8664063 21.0015625,11.9617188 21.0015625,12.1054688 C21.0015625,12.2492188 20.9539062,12.3445313 20.8578125,12.440625 C20.8578125,12.440625 20.8578125,12.440625 20.8578125,12.440625 C20.8578125,12.440625 13.2429687,20.0554687 13.2429687,20.0554687 C12.1414062,21.109375 10.8484375,21.6359375 9.41171875,21.6359375 C7.975,21.6359375 6.68203125,21.109375 5.58046875,20.0554687 C5.58046875,20.0554687 5.58046875,20.0554687 5.58046875,20.0554687 C4.5265625,19.0015625 4,17.75625 4,16.271875 C4,16.271875 4,16.271875 4,16.271875 C4,14.8351563 4.5265625,13.5421875 5.58046875,12.440625 C5.58046875,12.440625 5.58046875,12.440625 5.58046875,12.440625 C5.58046875,12.440625 14.9671875,3.14921875 14.9671875,3.14921875 C15.7335937,2.3828125 16.64375,2 17.7453125,2 C18.846875,2 19.7570312,2.3828125 20.5234375,3.14921875 C20.5234375,3.14921875 20.5234375,3.14921875 20.5234375,3.14921875 C21.2898437,3.86796875 21.6726562,4.77734375 21.6726562,5.87890625 C21.6726562,5.87890625 21.6726562,5.87890625 21.6726562,5.87890625 C21.6726562,6.98046875 21.2898437,7.890625 20.5234375,8.65703125 C20.5234375,8.65703125 20.5234375,8.65703125 20.5234375,8.65703125 C20.5234375,8.65703125 11.8546875,17.2773438 11.8546875,17.2773438 C11.3757813,17.75625 10.8007812,17.9960938 10.1304687,17.9960938 C10.1304687,17.9960938 10.1304687,17.9960938 10.1304687,17.9960938 C9.5078125,17.9960938 8.88515625,17.7570313 8.35859375,17.2773438 C8.35859375,17.2773438 8.35859375,17.2773438 8.35859375,17.2773438 C7.8796875,16.7984375 7.63984375,16.2234375 7.63984375,15.553125 C7.63984375,14.8828125 7.87890625,14.3078125 8.35859375,13.8289062 C8.35859375,13.8289062 8.35859375,13.8289062 8.35859375,13.8289062 C8.35859375,13.8289062 16.6921875,5.54375 16.6921875,5.54375 C16.7882812,5.44765625 16.93125,5.4 17.075,5.4 C17.075,5.4 17.075,5.4 17.075,5.4 C17.21875,5.4 17.3140625,5.44765625 17.4101562,5.54375 C17.50625,5.63984375 17.5539062,5.73515625 17.5539062,5.87890625 C17.5539062,5.87890625 17.5539062,5.87890625 17.5539062,5.87890625 C17.5539062,6.02265625 17.50625,6.16640625 17.4101562,6.26171875 C17.4101562,6.26171875 17.4101562,6.26171875 17.4101562,6.26171875 C17.4101562,6.26171875 9.0765625,14.4992187 9.0765625,14.4992187 C8.7890625,14.7867187 8.6453125,15.121875 8.6453125,15.553125 C8.6453125,15.984375 8.7890625,16.3195313 9.0765625,16.6070312 C9.3640625,16.8945312 9.69921875,17.0382813 10.1304687,17.0382813 C10.1304687,17.0382813 10.1304687,17.0382813 10.1304687,17.0382813 C10.5132812,17.0382813 10.8492187,16.8945312 11.1359375,16.6070312 C11.1359375,16.6070312 11.1359375,16.6070312 11.1359375,16.6070312 C11.1359375,16.6070312 19.8523437,7.98671875 19.8523437,7.98671875 C20.4273437,7.41171875 20.7140625,6.69375 20.7140625,5.8796875 C20.7140625,5.8796875 20.7140625,5.8796875 20.7140625,5.8796875 C20.7140625,5.065625 20.4265625,4.3953125 19.8523437,3.8203125 C19.8523437,3.8203125 19.8523437,3.8203125 19.8523437,3.8203125 C19.2296875,3.2453125 18.5117187,2.95859375 17.7453125,2.95859375 C17.7453125,2.95859375 17.7453125,2.95859375 17.7453125,2.95859375 C16.93125,2.95859375 16.2609375,3.24609375 15.6859375,3.8203125 C15.6859375,3.8203125 15.6859375,3.8203125 15.6859375,3.8203125 C15.6859375,3.8203125 6.29921875,13.159375 6.29921875,13.159375 C5.4375,13.9734375 5.00625,14.9789062 5.00625,16.2726562 C5.00625,16.2726562 5.00625,16.2726562 5.00625,16.2726562 C5.00625,17.5179688 5.4375,18.5234375 6.29921875,19.3375 C6.29921875,19.3375 6.29921875,19.3375 6.29921875,19.3375 C7.1609375,20.1992188 8.21484375,20.6304688 9.4125,20.6304688 C9.4125,20.6304688 9.4125,20.6304688 9.4125,20.6304688 C10.7054687,20.6304688 11.7117187,20.1992188 12.5257812,19.3375 C12.5257812,19.3375 12.5257812,19.3375 12.5257812,19.3375 C12.5257812,19.3375 20.1882812,11.7703125 20.1882812,11.7703125 C20.284375,11.6742188 20.3796875,11.6265625 20.5234375,11.6265625 L20.5226562,11.6265625 Z"/>
</svg>`,ht=()=>q`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1632813,6.753125 C22.1632813,6.753125 22.1632813,6.753125 22.1632813,6.753125 C22.1632813,6.753125 15.8414062,0.43125 15.8414062,0.43125 C15.6023437,0.14375 15.21875,0 14.7875,0 C14.7875,0 14.7875,0 14.7875,0 C14.7875,0 3.48515625,0 3.48515625,0 C3.05390625,0 2.71875,0.14375 2.43125,0.43125 C2.14375,0.71875 2,1.05390625 2,1.48515625 C2,1.48515625 2,1.48515625 2,1.48515625 C2,1.48515625 2,23.0367188 2,23.0367188 C2,23.4679688 2.14375,23.803125 2.43125,24.090625 C2.71875,24.378125 3.05390625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 3.48515625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 21.109375,24.521875 21.109375,24.521875 C21.540625,24.521875 21.8757812,24.378125 22.1632813,24.090625 C22.4507812,23.803125 22.5945312,23.4679688 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,23.0367188 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,7.80703125 22.5945312,7.80703125 C22.5945312,7.37578125 22.4507812,7.040625 22.1632813,6.753125 Z M15.6976563,1.6765625 C15.6976563,1.6765625 20.8703125,6.84921875 20.8703125,6.84921875 C20.8703125,6.84921875 16.225,6.84921875 16.225,6.84921875 C15.8898438,6.84921875 15.7460938,6.70546875 15.7460938,6.3703125 C15.7460938,6.3703125 15.7460938,6.3703125 15.7460938,6.3703125 C15.7460938,6.3703125 15.6984375,1.6765625 15.6984375,1.6765625 L15.6976563,1.6765625 Z M21.6367188,7.8546875 C21.6367188,7.8546875 21.6367188,23.0367188 21.6367188,23.0367188 C21.6367188,23.371875 21.4453125,23.515625 21.1101563,23.515625 C21.1101563,23.515625 21.1101563,23.515625 21.1101563,23.515625 C21.1101563,23.515625 3.4859375,23.515625 3.4859375,23.515625 C3.15078125,23.515625 2.959375,23.371875 2.959375,23.0367188 C2.959375,23.0367188 2.959375,23.0367188 2.959375,23.0367188 C2.959375,23.0367188 2.959375,1.48515625 2.959375,1.48515625 C2.959375,1.15 3.15078125,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 3.4859375,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 14.740625,0.95859375 14.740625,0.95859375 C14.740625,0.95859375 14.740625,6.3703125 14.740625,6.3703125 C14.740625,6.8015625 14.884375,7.13671875 15.171875,7.42421875 C15.459375,7.71171875 15.7945313,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 16.2257813,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 21.6375,7.85546875 21.6375,7.85546875 L21.6367188,7.8546875 Z"/>
</svg>`,ut=(t,e,a,i,n)=>{const s=document.createElement("div");s.setAttribute("role","alertdialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-labelledby",t),s.setAttribute("aria-describedby",""),s.setAttribute("class","mashup-modal");const o=document.createElement("div");s.appendChild(o);const r='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',l=()=>{document.body.removeEventListener("click",c),document.body.removeEventListener("keydown",d),s&&(s.previousElementSibling&&(s.previousElementSibling.removeAttribute("aria-hidden"),s.previousElementSibling.focus()),s.remove()),n&&n()},c=t=>{if(t){let e=t.target;if(e.download)return;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e){const t=e.closest("button");if((null===t||"close"!==t.getAttribute("data-action-id"))&&!e.classList.contains("mashup-modal")&&null!==e.closest(".mashup-modal"))return}l()}},d=t=>{if("Escape"===t.key)return void c(t);if(!("Tab"===t.key||9===t.keyCode))return;const e=s.querySelectorAll(r),a=e[e.length-1],i=e[0];t.shiftKey?document.activeElement===i&&(a.focus(),t.preventDefault()):document.activeElement===a&&(i.focus(),t.preventDefault())};return q`
  <div class='modalcontent'>
    <button type="button" @click="${t=>{t.preventDefault(),t.stopPropagation();const e=t.target.closest(".modalcontent");if(null===e)l();else if(1===e.children.length){e.firstElementChild.setAttribute("aria-hidden","true"),s.style.opacity=0,e.appendChild(s),i(o);s.querySelectorAll(r)[0].focus(),document.body.addEventListener("click",c),document.body.addEventListener("keydown",d),s.offsetHeight,s.style=""}else l()}}" class="pzhc pzbutton ${a}" title="${i18n.t(t)}">${i18n.t(e)}</button>
  </div>`},pt=t=>`0${t}`.slice(-2),gt=t=>`0${t}`.slice(-4),ft=t=>{if(t.endsWith(" GMT")&&23===t.length)return new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T${t.substring(9,11)}:${t.substring(11,13)}:${t.substring(13,19)}Z`);if(8===t.length){return new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T00:00:00.000Z`)}if(10===t.length&&2===t.indexOf("/")){return new Date(`${t.substring(6,10)}-${t.substring(0,2)}-${t.substring(3,5)}T00:00:00.000Z`)}if(10===t.length&&4===t.indexOf("-")){return new Date(`${t}T00:00:00.000Z`)}return null},mt=t=>t&&"string"==typeof t?t.replace(/&amp;|&lt;|&gt;|&#39;|&#40;|&#41;|&quot;/g,(t=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&#40;":"(","&#41;":")","&quot;":'"'}[t]||t))):"",bt=(t,e,a,i,n)=>{if("string"!=typeof e)return;if(i){const t=yt(i,e);if(t===n||`${t}`==`${n}`||null===t&&""===n)return;$t(i,e,n)}const s=e.lastIndexOf(".");if(-1===s)return void(t[e]=n);if(!a)return void $t(t,e,n);const o={};let r=e.substring(0,s);const l=r.lastIndexOf("(");if(-1===l)o[e.substring(s+1)]=n,a.push({instruction:"UPDATE",target:r,content:o});else{const t=r.lastIndexOf(")"),i=r.substring(l+1,t);r=r.substring(0,l),$t(o,e.substring(t+2),n),a.push({instruction:"UPDATE",target:r,listIndex:parseInt(i,10),content:o})}},$t=(t,e,a)=>{if("string"!=typeof e)return;const i=e.split(".");let n=t;for(const t in i){let e=i[t];const s=e.indexOf("(");if(-1===s)t<i.length-1?void 0===n[e]&&(n[e]={}):n[e]=a,n=n[e];else{const t=e.substring(s+1,e.length-1);e=e.substring(0,s),void 0===n[e]&&(n[e]=[]);for(let a=n[e].length;a<t;a++)n[e].push({});n=n[e][t-1]}}},yt=(t,e)=>{if("string"!=typeof e||""===e)return null;let a=e;0===e.indexOf(".")&&(a=e.substring(1));let i=t;const n=a.split(".");for(const t in n){const e=n[t],a=e.indexOf("(");if(-1===a){if(void 0===i[e])return null;i=i[e]}else{const t=e.substring(a+1,e.length-1),n=i[e.substring(0,a)];if(!(n&&Array.isArray(n)&&n.length>=t))return null;i=n[t-1]}}return i},vt=t=>{for(const e in t)"object"==typeof t[e]?vt(t[e]):"string"==typeof t[e]&&(t[e]="")},xt=(t,e)=>{for(const a in t)if("fieldID"===a)e.push(t.fieldID);else{const i=t[a];i.fieldID?e.push(i.fieldID):"object"==typeof i&&xt(i,e)}},wt=(t,e,a)=>{let i=yt(t,e);if(null===i&&(i=[],$t(t,e,i)),!Array.isArray(i))return null;if(a&&"string"==typeof a){const t={},n=a.split(",");for(const e in n)t[n[e]]="";return i.push(t),{instruction:"APPEND",target:e,content:t}}if(0===i.length)return null;const n={...i[0]};return vt(n),i.push(n),{instruction:"APPEND",target:e,content:n}},Ct=(t,e)=>{let a,i=e;-1!==e.indexOf(").pyTemplate")&&(a=parseInt(i.substring(e.lastIndexOf("(")+1,e.lastIndexOf(")")),10),i=i.substring(0,e.lastIndexOf("(")));const n=yt(t,i);if(!Array.isArray(n))return null;if(1===n.length){for(const t in n[0])"pxObjClass"!==t&&(n[0][t]="");return null}return a?n.length<a?null:(n.splice(a-1,1),{instruction:"DELETE",target:i,listIndex:a}):(n.length-=1,{instruction:"DELETE",target:i,listIndex:n.length})},Dt=(t,e)=>{const a=t.getAttribute(`data-action-${e}`);return!(!a||"postValue"!==a&&0!==a.indexOf("refresh"))},kt=(t,e)=>{const a=t.getAttribute(`data-action-${e}`);return a&&0===a.indexOf("refresh")?a.replace("refresh-",""):""};function At(t,e,a){try{switch(e){case">":return parseInt(t,10)>parseInt(a,10);case"<":return parseInt(t,10)<parseInt(a,10);case">=":return parseInt(t,10)>=parseInt(a,10);case"<=":return parseInt(t,10)<=parseInt(a,10);case"==":return`${t}`==`${a}`;case"!=":return`${t}`!=`${a}`}}catch{}return!1}const It=(t,e,a,i)=>{if(t.startsWith("@E ")){const a=t.replace("@E ","").split("&&");for(const t in a){const n=a[t].trim().match(/[\w.]+|[><=!]+|'[^']+'/g);if(3===n.length){const t=""===i?e[n[0].substring(1)]:yt(e,i+n[0]);if(void 0!==t&&!At(t,n[1],n[2].replace(/^'|'$/g,"")))return!1}else if(2===n.length&&"IS_NOT_NULL"===n[1]){const t=""===i?e[n[0].substring(1)]:yt(e,i+n[0]);if(void 0!==t&&!At(t,"!=",""))return!1}}}else if(t.startsWith("@W ")){const e=t.replace("@W ","").split("&&"),i=a?.data?.uiResources?.context_data?.caseInfo?.content?.summary_of_when_conditions__;if(i)for(const t in e){if(!i[e[t]])return!1}}return!0},_t=(t,e,a,i)=>{for(const n of t.elements)if("INPUT"===n.tagName||"TEXTAREA"===n.tagName||"SELECT"===n.tagName){const t=n.getAttribute("data-ref");if(null!==t&&"pyID"!==t)if("INPUT"===n.tagName){const s=n.getAttribute("type");if(n.classList.contains("input-date-day")||n.classList.contains("input-date-month")||n.classList.contains("input-date-year")){if(n.classList.contains("input-date-day")){const s=n.closest(".input-date").parentNode,o=s.querySelector(".input-date-month"),r=s.querySelector(".input-date-year");if(null!==o&&null!==r&&""!==n.value&&""!==o.value&&""!==r.value){const s=`${pt(o.value)}/${pt(n.value)}/${gt(r.value)}`;bt(e,t,a,i,s)}}}else if("checkbox"===s)bt(e,t,a,i,n.checked);else if("radio"===s)n.checked&&bt(e,t,a,i,n.value);else if("tel"===s){let s=n.value;"SELECT"===n.parentNode.firstElementChild.tagName&&"field-countrycode"===n.parentNode.firstElementChild.className&&(s=n.parentNode.firstElementChild.value+s),bt(e,t,a,i,s)}else if("date"===s){let s;n.valueAsDate&&(s=new Date(n.valueAsDate)),s&&s instanceof Date&&s.getTime()==s.getTime()||(s=new Date(n.value)),s&&s instanceof Date&&s.getTime()==s.getTime()?bt(e,t,a,i,`${s.getUTCFullYear()}-${pt(s.getUTCMonth()+1)}-${pt(s.getUTCDate())}`):bt(e,t,a,i,n.value)}else bt(e,t,a,i,n.value)}else bt(e,t,a,i,n.value)}if(t&&t.querySelectorAll){const s=t.querySelectorAll("[contenteditable]");for(let t=0;t<s.length;t++){const o=s[t],r=o.getAttribute("data-ref");bt(e,r,a,i,(n=o.innerHTML)&&"string"==typeof n?n.replace(/[&<>'"]/g,(t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","(":"&#40;",")":"&#41;",'"':"&quot;"}[t]||t))):"")}}var n},St=(t,e,a)=>{for(const i of t.elements)if("INPUT"===i.tagName||"TEXTAREA"===i.tagName||"SELECT"===i.tagName){const t=`.${i.getAttribute("data-ref")}`;if(null!==t&&"pyID"!==t)for(const n in e){if(e[n].Path===t){a.setInlineError(i,e[n].ValidationMessage);break}if(e[n].erroneousInputOutputFieldInPage===t){a.setInlineError(i,e[n].localizedValue);break}}}},Tt=(t,e)=>{const a=e||[],i={};for(const[e,n]of Object.entries(t))if("string"==typeof n||"boolean"==typeof n)i[e]=n;else if("object"==typeof n)if(Array.isArray(n))for(const t in n){const i={instruction:"UPDATE",target:e,listIndex:parseInt(t,10)+1,content:n[t]};a.push(i)}else{const t={instruction:"UPDATE",target:e,content:n};a.push(t)}return{pageInstructions:a,pageupdate:i}};function Et(t){return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Lt(t,e,a){t(null,{verifier:e,challenge:Et(String.fromCharCode.apply(null,new Uint8Array(a)))})}const Rt=()=>new Promise(((t,e)=>{!function(t,e){let a=t;const i=window.msCrypto||window.crypto,n=Et(Array.prototype.map.call(i.getRandomValues(new Uint8Array(a)),(t=>String.fromCharCode(t))).join("")).substring(0,a),s=new Uint8Array(n.length);for(let t=0;t<n.length;t++)s[t]=n.charCodeAt(t);const o=i.subtle.digest("SHA-256",s);window.CryptoOperation?(o.onerror=e,o.oncomplete=t=>{Lt(e,n,t.target.result)}):o.then((t=>{Lt(e,n,t)})).catch(e)}(43,((a,{verifier:i,challenge:n})=>{a?e(new Error("error")):t({verifier:i,challenge:n})}))})),Mt=(t,e,a,i,n)=>{if(null==i)return null;let s;const o=`${Math.random().toString(36).substr(2,9)}`,r=document.createElement("ul");r.setAttribute("id",`menu-overlay-${o}`),r.setAttribute("role","menu"),r.setAttribute("aria-labelledby",`menubutton-${o}`),r.setAttribute("tabindex","-1");const l=()=>{document.body.removeEventListener("click",d),document.body.removeEventListener("keydown",c),r&&(r.previousElementSibling&&(r.previousElementSibling.setAttribute("aria-expanded","false"),r.previousElementSibling.focus()),r.remove())},c=t=>{38===t.keyCode?(s=s.previousElementSibling,null===s&&(s=r.lastElementChild),s.focus()):40===t.keyCode?(s=s.nextElementSibling,null===s&&(s=r.firstElementChild),s.focus()):27===t.keyCode||9===t.keyCode?l():13===t.keyCode&&(i(t),l())},d=t=>{if(t){let e=t.target;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&e.nextElementSibling===r)return;e.parentNode===r&&i(t),l()}},h=t=>{if("keydown"===t.type&&40!==t.keyCode)return;if(t.preventDefault(),t.stopPropagation(),"blur"===t.type)return void d(t);const e=t.currentTarget;"BUTTON"!==e.tagName?(i(t),l()):null===e.nextElementSibling?(e.parentNode.appendChild(r),e.setAttribute("aria-expanded","true"),it(a(),r),s=e.nextElementSibling.firstElementChild,s.focus(),document.body.addEventListener("click",d),document.body.addEventListener("keydown",c)):l()};return q`
    <div class="button-menu">
    <button type='button' id="${`menubutton-${o}`}" aria-haspopup="true" aria-controls="${`menu-overlay-${o}`}" aria-expanded="false"
    @click="${h}" @keydown="${h}" @blur="${h}"
    class="${`pzhc pzbutton Simple ${n||"action-menu"}`}" aria-label="${i18n.t(e)}">${i18n.t(t)}</button>
    </div>
  `},zt=(t,e,a,i)=>ut(t,e,a,(t=>{it(Nt(t,[]),t),i(t)})),Nt=(t,e,a,i,n)=>{let s=0;const o=t=>{if(void 0===t||"string"==typeof t&&""===t)return;if("URL"===e[s].category)return void window.open(t);let a=e[s].fileName;if(void 0===a&&(a=e[s].name),void 0===a&&(a=e[s].pyAttachName),!a)return;const i=window.document.createElement("a");if("Correspondence"===e[s].category){a=`${e[s].name}.html`;const n=`<html><head><title>${e[s].name}</title></head><body>${t}</body></html>`,o=new Blob([n],{type:"text"});i.href=window.URL.createObjectURL(o)}else{const e=function(t){const e=window.atob(t),a=e.length,i=new Uint8Array(a);for(let t=0;t<a;t++){const a=e.charCodeAt(t);i[t]=a}return i}(t),a=new Blob([e],{type:"octet/stream"});i.href=window.URL.createObjectURL(a)}i.download=a,document.body.appendChild(i),i.click(),document.body.removeChild(i)},r=t=>{t.stopPropagation();const a=t.target;s=a.getAttribute("data-id"),i.fetchData.call(i,"attachment",{id:e[s].ID,target:o})},l=a=>{a.preventDefault(),a.stopPropagation();const n=a.target.closest("button");s=n.getAttribute("data-id"),i.sendData.call(i,"deleteattachment",{id:e[s].ID,target:t})},c=o=>{o.stopPropagation();const r=o.target.closest("button");s=parseInt(r.getAttribute("data-id"),10),n.splice(s,1),it(Nt(t,e,a,i,n),t)},d=t=>{t.stopPropagation(),t.preventDefault();const e=t.target;if(s=e.getAttribute("data-id"),"INPUT"===e.tagName){const t=e.getAttribute("data-prop-id");n[s][t]=e.value}else"SELECT"===e.tagName&&(n[s].category=e.value)},h=e=>{e.preventDefault();const a=e.target,i=e.relatedTarget,n=null===a?null:a.closest(".attach-files"),s=null===i?null:i.closest(".attach-files");if("dragenter"===e.type||"dragover"===e.type?null!=n&&n.classList.add("drop-file-hover"):"dragleave"!==e.type&&"drop"!==e.type||null===s&&null!==n&&n.classList.remove("drop-file-hover"),"drop"===e.type){const i=e.dataTransfer.files;t||(t=a.closest(".attach-files")),p(a,i)}},u=s=>{s&&(s.stopPropagation(),s.preventDefault());for(let s=0;s<n.length;s++){const o=n[s];delete o.editing,o.loading=!0,"URL"===o.type?(e.unshift(o),i.sendData.call(i,"attachments",{id:a,actionid:[o],target:t})):(e.unshift({name:o.displayName,extension:o.extension,loading:!0}),i.sendData.call(i,"uploadattachment",{actionid:o,target:t}))}it(Nt(t,e,a,i),t)},p=(n,s)=>{const o=[];for(let t=0;t<s.length;t++){const e=s[t];let a=e.name.lastIndexOf(".");-1===a&&(a=e.name.length),e.displayName=e.name.substring(0,a),e.extension=e.name.substring(a+1),e.editing=!0,e.category="File",o.push(e)}it(Nt(t,e,a,i,o),t)},g=e=>{e.stopPropagation();let a=e.target;if("BUTTON"===a.tagName)return a=e.target.parentNode.parentNode.firstElementChild,void a.click();t||(t=a.closest(".attach-files")),p(a,a.files)},f=n=>{n.stopPropagation();it(Nt(t,e,a,i,[{type:"URL",category:"URL",name:"",url:"",editing:!0}]),t)},m=n=>{n.stopPropagation(),it(Nt(t,e,a,i),t)},b=(t,e)=>{let a=new Date(e.createTime);return a=a.toLocaleDateString(void 0,{year:"numeric",month:"numeric",day:"numeric"}),q`
    <div class='list-item-title'>
      <button type='button' class='Light'  data-id="${t}" @click="${r}">${e.name}</button>
      ${e.loading?"":q`
      <span class='list-item-meta'><span>${e.createdBy}</span><span>${a}</span><span>${i18n.t("Category:")} ${e.category}</span></span>`}
    </div>`},$=()=>q`<li role="menuitem" tabindex="-1" data-value="Download">${i18n.t("Download")}</li>
  <li role="menuitem" tabindex="-1" data-value="Delete">${i18n.t("Delete")}</li>`,y=n=>{let r=n.target;if(n.path&&n.path.length>0?r=n.path[0]:n.originalTarget&&(r=n.originalTarget),r){const n=r.getAttribute("data-value"),l=e[s].pzInsKey||e[s].ID;"Download"===n?i.fetchData.call(i,"attachment",{id:l,target:o}):"Delete"===n&&(i.sendData.call(i,"deleteattachment",{id:l,target:t}),it(Nt(void 0,[],a,i,[]),t))}},v=t=>q`<div class='row-item'>
    <span class='doc-icon'>${ht()}<span>${t.extension}</span></span>
    <div class='list-item-title'><span>${t.pyAttachName||t.name}</span>
    <span class="list-item-meta"><span>${t.pyCategoryName||t.category}</span>
    <span>${t.pxCreateOperator||t.createdBy}</span></span></div>
    ${Mt(q`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
<path d="M14.353125,6.353125 C13.9703125,6.7359375 13.4914062,6.928125 12.9640625,6.928125 C12.4367188,6.928125 11.9585938,6.73671875 11.575,6.353125 C11.1921875,5.9703125 11,5.49140625 11,4.9640625 C11,4.43671875 11.1914062,3.95859375 11.575,3.575 C11.9578125,3.1921875 12.4367188,3 12.9640625,3 C13.4914063,3 13.9695312,3.19140625 14.353125,3.575 C14.7359375,3.9578125 14.928125,4.43671875 14.928125,4.9640625 C14.928125,5.49140625 14.7367187,5.96953125 14.353125,6.353125 Z M14.353125,13.7289063 C13.9703125,14.1117188 13.4914062,14.3039063 12.9640625,14.3039063 C12.4367188,14.3039063 11.9585938,14.1125 11.575,13.7289063 C11.1921875,13.3460938 11,12.8671875 11,12.3398438 C11,11.8125 11.1914062,11.334375 11.575,10.9507813 C11.9578125,10.5679688 12.4367188,10.3757813 12.9640625,10.3757813 C13.4914063,10.3757813 13.9695312,10.5671875 14.353125,10.9507813 C14.7359375,11.3335938 14.928125,11.8125 14.928125,12.3398438 C14.928125,12.8671875 14.7367187,13.3453125 14.353125,13.7289063 Z M14.353125,21.1039062 C13.9703125,21.4867187 13.4914062,21.6789062 12.9640625,21.6789062 C12.4367188,21.6789062 11.9585938,21.4875 11.575,21.1039062 C11.1921875,20.7210938 11,20.2421875 11,19.7148438 C11,19.1875 11.1914062,18.709375 11.575,18.3257813 C11.9578125,17.9429688 12.4367188,17.7507813 12.9640625,17.7507813 C13.4914063,17.7507813 13.9695312,17.9421875 14.353125,18.3257813 C14.7359375,18.7085937 14.928125,19.1875 14.928125,19.7148438 C14.928125,20.2421875 14.7367187,20.7203125 14.353125,21.1039062 Z"></path>
</svg>`,"Actions",$,y,"button-action")}
  </div>`,x=(t,e)=>e.loading?q`${b(t,e)}${ot()}`:e.editing?"URL"===e.type?q`
      <div class='flex content-item field-item'>
        <label for='url-name'>Name</label>
        <input type='text' id='url-name' data-prop-id='name' @change="${d}" data-id="${t}" value="${e.name}"/>
      </div>
      <div class='flex content-item field-item'>
        <label for='url-url'>URL</label>
        <input type='text' id='url-url' data-prop-id='url' @change="${d}" data-id="${t}" value="${e.url}"/>
      </div>`:q`
      <input type='text' data-prop-id='displayName' class='flex-all' @change="${d}"
      data-id="${t}" value="${e.displayName}" aria-label='${i18n.t("name")}'/>
      ${((t,e)=>q`
    <select data-id="${t}" @change="${d}" class='flex-all' aria-label='${i18n.t("Category")}'>
    ${i.attachmentcategories.map((t=>q`
      <option ?selected=${t.ID===e}>${t.ID}</option>
    `))}
    </select>`)(t,e.category)}
      <span class='flex-all'>${e.name}</span>
      <span>${Math.round(e.size/1e3)}Kb</span>
      <button type='button' data-id="${t}" @click="${c}" class='pzhc pzbutton Simple'
      aria-label=${i18n.t("Delete")}>${ct()}</button>`:q`${b(t,e)}
    <button type='button' data-id="${t}" @click="${l}" class='pzhc pzbutton Simple'
    aria-label=${i18n.t("Delete")}>${ct()}</button>`,w=t=>{if(!a)return ot();const e=[];if(void 0!==t){const a=Object.entries(t);for(const t of a){let a=t[1].extension;void 0===a&&(a=t[1].type),a||(a=""),a.length>5&&(a=a.substring(0,5)),"URL"===t[1].type&&t[1].editing?e.push(q`<div class='flex layout-content-stacked content-items-maxwidth'>
              ${x(t[0],t[1])}
            </div>`):e.push(q`<div class='row-item'>
              <span class='doc-icon'>${ht()}<span>${a}</span></span>
              ${x(t[0],t[1])}
            </div>`)}}return e.length>0?e:q`<div class='empty'>${i18n.t("no attachments found")}</div>`};if(!t){if(e&&e.length>0&&e[0].pyAttachName){s=0,e[0].extension="";const t=e[0].pyAttachName.split(".");return t.length>1&&(e[0].extension=t[t.length-1]),v(e[0])}return q`<div @dragenter="${h}" @dragover="${h}" @dragleave="${h}"
    @drop="${h}" class='attach-files list-items'>
      <div class="file-upload">
        <input @change="${g}" type="file">
        ${dt()}<span>${i18n.t(" Drag and drop or ")}
        <button type='button' aria-labelledby='${i18n.t("click to attach a file")}' class='Light' @click="${g}">${i18n.t("choose file")}</button>
      </div>
    </div>`}if(t&&t.classList.contains("attach-files")){if(n&&n.length>0)return i.sendData.call(i,"uploadattachment",{actionid:n[0],target:t}),C=n[0],q`<div class='row-item'>
    <span class='doc-icon'>${ht()}<span>${C.extension}</span></span>
    <div class='list-item-title'><span>${C.displayName}</span>${q`<span class="list-item-meta"><span>
    ${i18n.t("Uploading...")}</span></span>`}</div>
  </div>`;if(e&&e.length>0)return v(e[0])}var C;let D="Attachments";return void 0!==n&&n.length>0&&(D="URL"===n[0].type?"Attach a link":"Attach files"),q`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${i18n.t(D)}</h2>
      <div class="flex layout-content-inline_middle margin-l-auto">
        <button type='button' data-action-id='close'
        class="pzhc pzbutton Simple" aria-label="${i18n.t("Close modal")}">${lt()}</button>
      </div>
    </div>
    ${void 0!==n&&n.length>0?q`
      <div id="modalcontent" class='attach-files list-items'>
        <div class='upload-content'>${w(n)}</div>
        <div class="action-button-area">
          <button type="button" class="pzhc pzbutton" @click="${m}">${i18n.t("Cancel")}</button>
          <button type="button" class="Strong pzhc pzbutton" @click="${u}">${i18n.t("Upload")}</button>
        </div>
      </div>`:q`
      <form id="modalcontent" @dragenter="${h}" @dragover="${h}" @dragleave="${h}"
      @drop="${h}" class='attach-files list-items'>
        <div class="file-upload">
          <input @change="${g}" type="file" multiple="">
          ${dt()}<span>${i18n.t(" Drag and drop files, attach ")}
          <button type='button' aria-label='${i18n.t("click to attach a file")}' class='Light' @click="${g}">
          ${i18n.t("files")}</button> ${i18n.t("or add a")}
          <button type='button' aria-label='${i18n.t("click to add a URL link")}' class='Light' @click="${f}">
          ${i18n.t("link")}</button></span>
        </div>
        ${w(e)}
      </form>
    `}
  `},Pt=(t,e)=>q`
<div class="flex layout-content-inline_middle main-header">
  <h2>${i18n.t(t)}</h2>
  <div class="flex layout-content-inline_middle margin-l-auto">
    <button type='button' data-action-id='close'
    class="pzhc pzbutton Simple" aria-label="${i18n.t("Close modal")}">${lt()}</button>
  </div>
</div>
<div class="validation" role="alert" aria-live="assertive"></div>
<form id="modalcontent">${e}</form>
`;class Ut extends nt{static get properties(){return{url:{},caseID:{},dataviewParams:{type:Object},username:{},password:{},headingLabel:{},bShowCreate:{},bShowCancel:{},bShowAttachments:{},bShowSave:{},bShowActions:{},authentication:{},token:{},clientid:{},clientsecret:{},initialContent:{},action:{},casetype:{},portalName:{},langTokens:{}}}constructor(){super(),this.url="",this.headingLabel="My worklist",this.caseID="",this.username="",this.password="",this.bShowCreate="true",this.bShowCancel="true",this.bShowAttachments="false",this.bShowSave="true",this.bShowActions="true",this.authentication="",this.token="",this.clientid="",this.clientsecret="",this.initialContent="",this.action="",this.casetype="",this.portalName="",this.cases=[],this.dataPages={},this.name="",this.etag="",this.casepyStatusWork="",this.casedata={},this.data={},this.numAttachments=0,this.attachmentcategories=[],this.assignmentID="",this.actionID="",this.content={},this.dataviewParams={},this.pageInstructions=[],this.errorMsg="",this.validationMsg="",this.bShowConfirm=!1,this.bShowNew=!1,this.refreshOnChange=!1,this.isDeclarativeTarget=!1;const t=this;window.i18n||(window.i18n={t:function(e){if(!e)return"";if("string"!=typeof e)return e;let a=e;if(0===a.indexOf("@L ")&&(a=a.substring(3)),0===a.indexOf("@FL ")&&(a=a.substring(4)),a=a.replace(/^"|"$/g,"").trim(),a=mt(a),"object"!=typeof t.langTokens)return a;const i=t.langTokens[a];return i&&""!==i?i.trim():(console.log(a),a)}})}clearLoadingIndicator(){const t=this.getRenderRoot().querySelector("#case-data");t&&null!==t.querySelector(".loading")&&it(null,t)}sendExternalEvent(t){this.dispatchEvent(new CustomEvent("message",{detail:{...t}}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const Ot=2,qt=t=>(...e)=>({_$litDirective$:t,values:e});let Ht=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,a){this._$Ct=t,this._$AM=e,this._$Ci=a}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class Ft extends Ht{constructor(t){if(super(t),this.it=F,t.type!==Ot)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===F||null==t)return this._t=void 0,this.it=t;if(t===H)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Ft.directiveName="unsafeHTML",Ft.resultType=1;const jt=qt(Ft),Vt=t=>t??F,Bt=(t,e)=>{if(t.control&&t.control.actionSets&&t.control.actionSets.length>0)for(const a of t.control.actionSets)if(a.events.length>0&&a.actions.length>0&&a.events[0].event===e){let t=a.actions[0].action;return"refresh"===t&&""!==a.actions[0].refreshFor&&(t+=`-${a.actions[0].refreshFor}`),t}},Wt=t=>"pyTemplateButton"!==t.reference?t.reference:t.control&&t.control.modes?t.control.modes[1].tooltip:null,Zt=(t,e,a)=>{if(void 0===e)return null;const i=t.required&&!0!==t.readOnly?"icon-required":"";return"field-checkbox"===a?""!==t.label||!0===t.showLabel?q`<div class="field-caption dataLabelForWrite ${i}">${mt(t.label)}</div>`:null:"field-text"===a&&!0===t.readOnly&&"pxCheckbox"===t.control.type&&t.control.label?q`<label class="field-caption dataLabelForWrite">${mt(t.control.label)}</label>`:""!==t.label||!0===t.showLabel||!0===t.labelReserveSpace?q`<label class="field-caption dataLabelForWrite ${i}" for="${Vt(e)}">${mt(t.label)}</label>`:null},Jt=(t,e,a,i)=>{if(void 0===e||-1!==e.indexOf("-table-"))return"field-checkbox"===a?q`<div class="flex">${i}</div>`:q`
      ${i}
    `;if("field-button"===a){if(!(t=>!!(t.control&&t.control.actionSets&&t.control.actionSets.length>0))(t))return null;if(!t.showLabel)return q`<div>${i}</div>`}return"field-radiogroup"===a?q`
    <div class="flex content-item field-item ${a}"><fieldset><legend>${Zt(t,e,a)}</legend>${i}</fielset></div>
  `:"field-checkbox"===a?q`
    <div class="flex content-item field-item ${a}">${i}</div>
  `:q`
    <div class="flex content-item field-item ${a}">${Zt(t,e,a)}${i}</div>
  `},Yt=(t,e,a,i)=>{if(void 0===t||void 0===t.control||void 0===t.control.type)return null;if(t.customAttributes&&"none"===t.customAttributes.display)return null;if(!0===a||!0===t.readOnly||"pxHidden"===t.control.type)return Jt(t,e,"field-text",Gt(t,e));if(i.casedata&&i.casedata.content){yt(i.casedata.content,t.reference)||("pxCheckbox"===t.control.type?$t(i.casedata.content,t.reference,"true"==t.value):$t(i.casedata.content,t.reference,t.value))}switch(t.control.type){case"pxPhone":case"pxURL":case"pxTextInput":return Jt(t,e,"field-textinput",Kt(t,e));case"pxInteger":case"pxNumber":return Jt(t,e,"field-numberinput",Qt(t,e));case"pxCurrency":return Jt(t,e,"field-currencyinput",te(t,e));case"pxEmail":return Jt(t,e,"field-emailinput",ee(t,e));case"pxTextArea":return Jt(t,e,"field-textarea",ae(t,e));case"pxRadioButtons":return Jt(t,e,"field-radiogroup",de(t,e));case"pxCheckbox":return Jt(t,e,"field-checkbox",he(t,e));case"pxDropdown":return Jt(t,e,"field-dropdown",ue(t,e));case"pxDisplayText":return Jt(t,e,"field-text",Gt(t,e));case"pxIcon":return Jt(t,e,"field-icon",ie(t,e));case"pxLink":return Jt(t,e,"field-url",ne(t,e));case"pxIconDeleteItem":return Jt(t,e,"field-button",oe(t,e));case"pxButton":return Jt(t,e,"field-button",se(t,e));case"pxDateTime":return"TimeOfDay"===t.type?Jt(t,e,"field-time",ce(t,e)):"Date"===t.type?Jt(t,e,"field-date",le(t,e)):Jt(t,e,"field-datetime",re(t,e));case"pxAutoComplete":return Jt(t,e,"field-combobox",pe(t,e));case"pxSlider":return Jt(t,e,"field-slider",Xt(t,e));default:return null}},Gt=(t,e)=>{if("pxDate"===t.control.type){let a=ft(t.value);if(a)if(t.control&&2===t.control.modes.length){let e={};switch(t.control.modes[1].dateFormat){case"DateTime-Short-YYYY":case"Date-DayMonthYear-Custom":case"Date-Medium":e={year:"numeric",month:"short",day:"numeric"};break;case"Date-Short":e={year:"numeric",month:"numeric",day:"numeric"};break;case"Date-Long":e={year:"numeric",month:"long",day:"numeric"};break;case"Date-Full":e={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;default:e={}}a=new Intl.DateTimeFormat([],e).format(a)}else a=(new Intl.DateTimeFormat).format(a);else a=t.value;return q`
      <span class="dataValueRead" data-ref="${t.reference}" id="${Vt(e)}">${a}</span>
    `}if("pxDateTime"===t.control.type){let a=ft(t.value);if(a)if(t.control&&2===t.control.modes.length){let e={};if("DateTime-Short-YYYY"===t.control.modes[1].dateTimeFormat)e={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};else e={};a=new Intl.DateTimeFormat([],e).format(a)}else a=(new Intl.DateTimeFormat).format(a);else a=t.value;return q`
      <span class="dataValueRead" data-ref="${t.reference}" id="${Vt(e)}">${a}</span>
    `}if("pxTime"===t.control.type){let a=ft(t.value);if(a)if(t.control&&2===t.control.modes.length){const t={hour:"numeric",minute:"numeric"};a=new Intl.DateTimeFormat([],t).format(a)}else a=(new Intl.DateTimeFormat).format(a);else a=t.value;return q`
      <span class="dataValueRead" data-ref="${t.reference}" id="${Vt(e)}">${a}</span>
    `}if("pxHidden"===t.control.type)return q`
    <input type="text" style="display:none" data-ref="${t.reference}" id="${Vt(e)}" value="${mt(t.value)}"/>
    `;let a=t.value;if(t.control&&2===t.control.modes.length&&"locallist"===t.control.modes[0].listSource)for(const e of t.control.modes[0].options)e.key===a&&(a=e.value);return("pxCurrency"===t.control.type||"pxNumber"===t.control.type&&t.readOnly&&"currency"===t.control.modes[1].numberSymbol)&&(a=`$${a}`),q`
    <span class="dataValueRead" data-ref="${t.reference}" id="${Vt(e)}">${mt(a)}</span>
  `},Kt=(t,e)=>{let a="text";return"pxPhone"===t.control.type?a="tel":"pxURL"===t.control.type&&(a="url"),q`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    ?disabled="${!0===t.disabled}"
    type="${a}"
    id="${Vt(e)}"
    value="${mt(t.value)}"
    data-action-change="${Vt(Bt(t,"change"))}"
    data-action-click="${Vt(Bt(t,"click"))}"
  />`},Xt=(t,e)=>q`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    ?disabled="${!0===t.disabled}"
    type="range"
    id="${Vt(e)}"
    value="${mt(t.value)}"
    data-action-change="${Vt(Bt(t,"change"))}"
    data-action-click="${Vt(Bt(t,"click"))}"
  />
`,Qt=(t,e)=>q`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    ?disabled="${!0===t.disabled}"
    type="number"
    id="${Vt(e)}"
    value="${t.value}"
    data-action-change="${Vt(Bt(t,"change"))}"
    data-action-click="${Vt(Bt(t,"click"))}"
  />
`,te=(t,e)=>q`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    ?disabled="${!0===t.disabled}"
    type="number"
    id="${Vt(e)}"
    value="${t.value}"
    data-action-change="${Vt(Bt(t,"change"))}"
    data-action-click="${Vt(Bt(t,"click"))}"
  />
`,ee=(t,e)=>q`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    ?disabled="${!0===t.disabled}"
    type="email"
    id="${Vt(e)}"
    value="${t.value}"
    data-action-change="${Vt(Bt(t,"change"))}"
    data-action-click="${Vt(Bt(t,"click"))}"
  />
`,ae=(t,e)=>q`
  <textarea
    data-ref="${t.reference}"
    rows="3"
    ?required="${!0===t.required}"
    ?disabled="${!0===t.disabled}"
    id="${Vt(e)}"
    data-action-change="${Vt(Bt(t,"change"))}"
    data-action-click="${Vt(Bt(t,"click"))}"
  >
${mt(t.value)}</textarea
  >
`,ie=(t,e)=>q`
  <i
    class="${t.control.modes[1].iconStyle}"
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    id="${Vt(e)}"
    value="${t.value}"
  />
`,ne=(t,e)=>q`
  <a id="${Vt(e)}" data-ref="${t.reference}" href="${t.value}">${t.control.label}</a>
`,se=(t,e)=>{const a=Bt(t,"click");return"deleteRow"===a?oe(t,e):q`
  <button
  type='button'
    class="${Vt(t.control.modes[1].controlFormat)} pzhc pzbutton"
    id="${Vt(e)}"
    data-ref="${Vt(Wt(t))}"
    data-action-click="${Vt(a)}"
  >${t.control.label}</button>`},oe=(t,e)=>q`
  <button
    type='button'
    class="pzhc pzbutton Icon"
    title="Delete row"
    id="${Vt(e)}"
    data-ref="${Vt(Wt(t))}"
    data-action-click="deleteRow"
  >${ct()}</button>
`,re=(t,e)=>{let a=t.value;if(""!==a){const e=ft(a);e instanceof Date&&e.getTime()==e.getTime()?a=`${e.getUTCFullYear()}-${pt(e.getUTCMonth()+1)}-${pt(e.getUTCDate())}T${pt(e.getUTCHours())}:${pt(e.getUTCMinutes())}`:8===t.value.length&&(a=`${t.value.substring(0,4)}-${t.value.substring(4,6)}-${t.value.substring(6,8)}T00:00`)}return q`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      ?disabled="${!0===t.disabled}"
      type="datetime-local"
      id="${Vt(e)}"
      value="${a}"
      data-action-change="${Vt(Bt(t,"change"))}"
    data-action-click="${Vt(Bt(t,"click"))}"
    />
  `},le=(t,e)=>{let a=t.value;if(""!==a){const e=ft(a);e instanceof Date&&e.getTime()==e.getTime()?a=`${e.getUTCFullYear()}-${pt(e.getUTCMonth()+1)}-${pt(e.getUTCDate())}`:8===t.value.length&&(a=`${t.value.substring(0,4)}-${t.value.substring(4,6)}-${t.value.substring(6,8)}`)}return q`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      ?disabled="${!0===t.disabled}"
      type="date"
      id="${Vt(e)}"
      value="${a}"
      data-action-change="${Vt(Bt(t,"change"))}"
    data-action-click="${Vt(Bt(t,"click"))}"
    />
  `},ce=(t,e)=>{let a=t.value;if(""!==a){const e=ft(a);e instanceof Date&&e.getTime()==e.getTime()?a=`${pt(e.getUTCHours())}-${pt(e.getUTCMinutes())}-${pt(e.getUTCSeconds())}`:8===t.value.length&&(a=`${t.value.substring(9,10)}:${t.value.substring(10,11)}:${t.value.substring(11,12)}`)}return q`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      ?disabled="${!0===t.disabled}"
      type="time"
      id="${Vt(e)}"
      value="${a}"
      data-action-change="${Vt(Bt(t,"change"))}"
      data-action-click="${Vt(Bt(t,"click"))}"
    />
  `},de=(t,e)=>{let a;return t.control&&t.control.modes&&t.control.modes[0].options?a=t.control.modes[0].options:"True-False"===t.type&&(a=[{value:"true"},{value:"false"}]),void 0===a?null:q`
    ${a.map(((a,i)=>{const n=`rb-${e}-${i}`;return q`
        <div>
          <input
            data-ref="${t.reference}"
            name=${Vt(e)}
            id="${n}"
            type="radio"
            value="${a.key}"
            ?required="${!0===t.required}"
            ?disabled="${!0===t.disabled}"
            ?checked="${a.key===t.value}"
            data-action-change="${Vt(Bt(t,"change"))}"
          />
          <label for="${n}">${a.value}</label>
        </div>
      `}))}
  `},he=(t,e)=>q`
  <input
  data-ref="${t.reference}"
  id="${Vt(e)}"
  type="checkbox"
  ?checked=${"true"===t.value}
  ?disabled="${!0===t.disabled}"
  data-action-change="${Vt(Bt(t,"change"))}"
  data-action-click="${Vt(Bt(t,"click"))}"
  />
  <label for="${Vt(e)}">${t.control.label}</label>
`,ue=(t,e)=>t.control&&t.control.modes[0]&&t.control.modes[0].options?q`<select
      data-ref="${t.reference}"
      id=${Vt(e)}
      ?required="${!0===t.required}"
      ?disabled="${!0===t.disabled}"
      data-action-change="${Vt(Bt(t,"change"))}"
      data-action-click="${Vt(Bt(t,"click"))}">
        <option value="" title="Select...">Select...</option>
        ${t.control.modes[0].options.map((e=>q`
            <option ?selected=${e.key===t.value} value='${e.key}'>${e.value}</option>
          `))}
      </select>`:q`<input
      type='text'
      data-ref="${t.reference}"
      id=${Vt(e)}
      ?required="${!0===t.required}"
      ?disabled="${!0===t.disabled}"
      data-action-change="${Vt(Bt(t,"change"))}"
      data-action-click="${Vt(Bt(t,"click"))}">
      </input>`,pe=(t,e)=>{if(t.control.modes&&t.control.modes[0]&&t.control.modes[0].options)return q`
      <input
        data-ref="${t.reference}"
        list="${t.reference}"
        ?required="${!0===t.required}"
        ?disabled="${!0===t.disabled}"
        type="text"
        class="combobox loaded"
        id="${Vt(e)}"
        value="${mt(t.value)}"
        data-action-change="${Vt(Bt(t,"change"))}"
        data-action-click="${Vt(Bt(t,"click"))}"
      />
      <datalist id="${t.reference}">
        ${t.control.modes[0].options.map((t=>q`
            <option value="${t.value}">
              ${t.key}
            </option>
          `))}
      </datalist>
    `;let a="";return t.control&&t.control.modes&&t.control.modes[0]&&t.control.modes[0].dataPageID&&(a=t.control.modes[0].dataPageID),q`
    <input
      data-ref="${t.reference}"
      list="${t.reference}"
      data-pageid="${a}"
      ?required="${!0===t.required}"
      ?disabled="${!0===t.disabled}"
      type="text"
      class="combobox"
      id="${Vt(e)}"
      value="${t.value}"
      data-action-change="${Vt(Bt(t,"change"))}"
      data-action-click="${Vt(Bt(t,"click"))}"
    />
    <datalist id="${t.reference}"></datalist>
  `},ge=t=>""!==t.title?q`
      <div class="header-bar">
        <div class="header-content"><h3 class="header-title">${t.title}</h3></div>
      </div>
    `:null,fe=(t,e)=>{let a=t.fieldListID;if(void 0!==t.reference&&(a=t.reference),"."===a.charAt(0)&&(a=a.substring(1)),t.newRow&&!0!==e&&!0!==t.readOnly){const e=[];return xt(t.newRow,e),q`
      <div class="table-action-area">
        <button type="button" class="pzhc pzbutton Simple" data-newrow="${Vt(e.join())}"
        data-ref=${a} data-action-click="addRow">${rt()}Add item</button>
      </div>
    `}return null},me=t=>q`
  ${t.map((t=>q`
    <th scope='col'>${t.caption?q`${t.caption.value}`:""}</th>`))}
`,be=(t,e,a,i)=>q`
  ${t.map(((t,n)=>{const s=`${e}-table-${n}`;return q`
    <tr>
      ${t.groups.map(((t,e)=>q`
      <td>${Yt(t.field,`${s}-${e}`,a,i)}</td>`))}
    </tr>`}))}
`,$e=(t,e,a,i)=>q`
  ${t.map(((t,n)=>{const s=`${e}-${n}`;if(t.layout){""!==t.layout.groupFormat.trim()&&"CENTER"!==t.layout.groupFormat||(t.layout.groupFormat="default");const e=t.layout.groupFormat.replace(/ /g,"_").toLowerCase(),n=`flex content layout-content-${e} content-${e}`;if(t.layout.view&&t.layout.view.groups)return q`
          <div class="${n}">${$e(t.layout.view.groups,s,a,i)}</div>
        `;if(t.layout.groups){let e="";if("string"==typeof t.layout.title&&""!==t.layout.title&&(t.layout.titleFormat,1))switch(t.layout.titleFormat){case"h2":default:e=q`<h2>${t.layout.title}</h2>`;break;case"h3":e=q`<h3>${t.layout.title}</h3>`;break;case"h4":e=q`<h4>${t.layout.title}</h4>`}return q`
        ${e}<div class="${n}">${$e(t.layout.groups,s,a,i)}</div>
        `}return t.layout.rows?t.layout.header?((t,e,a,i)=>q`<div class='flex content layout-content-stacked content-stacked'>
  ${ge(t.layout)}
  <div class='table-content'>
  <table>
  <caption class="sr-only">${t.layout.title}</caption>
    <thead>
      <tr>
        ${me(t.layout.header.groups)}
      </tr>
    </thead>
    <tbody>
      ${be(t.layout.rows,e,a,i)}
    </tbody>
  </table>
  </div>
  ${fe(t.layout,a)}</div>
`)(t,s,a,i):ye(t,s,a,i):null}if(t.paragraph)return q`<div class='flex content-item field-item flex-paragraph'>${jt(t.paragraph.value)}</div>`;if(t.caption&&t.caption.visible)return q`<div class='flex content-item field-item flex-paragraph'>${jt(t.caption.value)}</div>`;if(t.field){if(t.field.control&&"pxAttachContent"===t.field.control.type){let e="Upload file";return t.field.customAttributes&&t.field.customAttributes.Label&&(e=t.field.customAttributes.Label),zt(e,e,"",i.displayAttachments)}if(t.field.control&&t.field.control.actionSets&&t.field.control.actionSets.length>0&&t.field.control.actionSets[0]&&t.field.control.actionSets[0].actions[0]&&"localAction"===t.field.control.actionSets[0].actions[0].action){const e=i.actionID;return((t,e,a)=>{const i=t.control.actionSets[0].actions[0].actionProcess.localAction,n=t.control.actionSets[0].actions[0].actionProcess.target,s=t.control.modes[1].controlFormat?t.control.modes[1].controlFormat:"";if("modalDialog"===n){const n=a=>{it(Pt(t.control.label,ot()),a),e(i,a)};return ut(i,t.control.label,s,n,a)}return q`<div><button type="button" @click="${()=>{e(i)}}" class="pzhc pzbutton ${s}">${i18n.t(t.control.label)}</button></<div>`})(t.field,i.displayLocalAction,(()=>{i.reloadAssignment(e)}))}return Yt(t.field,s,a,i)}return t.view&&t.view.groups?"pyAttachFieldOptional"===t.view.viewID&&"Embed-Attach-File"===t.view.appliesTo?zt("Upload file","Upload file","",i.displayAttachments):$e(t.view.groups,s,a,i):null}))}
`,ye=(t,e,a,i)=>q`
  ${ge(t.layout)}
  <div class="rdl">
    ${ve(t.layout.rows,e,a,i)}
  </div>
  ${fe(t.layout,a)}
`,ve=(t,e,a,i)=>q`
  ${t.map(((t,n)=>{const s=`${e}-row${n}`;return t.groups?q`
        <div>
          ${$e(t.groups,s,a,i)}
        </div>
      `:null}))}
`,xe=(t,e,a,i,n,s,o,r,l,c)=>{const d=q`${dt()}<span class='count-badge'>${n}</span>`;return void 0===e.caseID&&a.content?q`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${a.content.pyLabel}</span>
      ${""!==i?q`<span class='badge-bg-info centered'><span class='badge_text'>${i}</span></span>`:""}</h2>
      <div class="flex layout-content-inline_middle margin-l-auto">
        ${l?zt("Attachments",d,"Simple",l):""}
        ${"true"===c&&a.actions&&(a.actions.length>1||1===a.actions.length&&a.actions[0].name!==t)?q`
          ${Mt("Actions","Start a new action",s,o)}`:""}
      </div>
    </div>
    ${((t,e)=>t&&0!==t.length?q`
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
        ${t.map((t=>q`
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
    ${((t,e)=>t&&0!==t.length?q`
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
        ${t.map((t=>q`
        <tr>
          <td>${t.ID}</td>
          <td class="right-aligned">
            <button type='button' @click="${e}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">${i18n.t("Open")}</button>
          </td>
        </tr>`))}
  </tbody>
  </table>`:null)(a.childCases,r)}`:""===t||void 0===e.caseID?"":q`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${e.name}</span>
    ${""!==i?q`<span class='badge-bg-info centered'><span class='badge_text'>${i}</span></span>`:""}</h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      ${l?zt("Attachments",d,"Simple",l):""}
      ${"true"===c&&e.actions&&(e.actions.length>1||1===e.actions.length&&e.actions[0].name!==t)?q`
        ${Mt("Actions","Start a new action",s,o)}`:""}
    </div>
  </div>
 <h3>${t}</h3>`},we=(t,e,a,i,n)=>q`
  <div class="flex layout-content-stacked">${$e(t,e,!1,n)}</div>
  ${((t,e)=>q`
  <div class="action-button-area">
    ${null!==t?q`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    ${null!==e?q`<button type="button" class="pzhc pzbutton" @click="${e}">Save</button>`:""}
    <button type="button" data-submit="submit" class="Strong pzhc pzbutton">Submit</button>
  </div>
`)(a,i)}
`,Ce=(t,e,a,i)=>q`
  <div class="flex layout-content-stacked">${$e(t,e,!0,i)}</div>
  ${(t=>null===t?null:q`
  <div class="action-button-area">
  ${null!==t?q`<button type="button" class="pzhc pzbutton Strong" @click="${t}">Close</button>`:""}
  </div>`)(a)}
`,De=(t,e,a,i,n)=>q`
  <div class="flex layout-content-stacked">${$e(t,e,!1,n)}</div>
  ${((t,e)=>q`
  <div class="action-button-area">
    ${null!==t?q`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    <button type="button" data-submit="save" class="pzhc pzbutton Strong" @click="${e}">Submit</button>
  </div>
`)(a,i)}
`,ke=(t,e,a,i)=>q`
  <div class="flex layout-content-stacked">${$e(t,e,!1,i)}</div>
  ${(t=>q`
  <div class="action-button-area">
    ${null!==t?q`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    <button type="button" data-submit="create" class="Strong pzhc pzbutton">Create</button>
  </div>
`)(a)}
`,Ae=(t,e)=>{const a=[],i=Object.entries(e.actions);for(const e of i)e[1].name!==t&&a.push(q`
          <li role="menuitem" tabindex="-1" data-value="${e[1].ID}">${e[1].name}</li>
        `);return q`
    ${a}
  `},Ie=t=>q`
${t.pxResults.map((t=>q`
    <option>
      ${t.pyUserName}
    </option>`))}`;
/**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */let _e=class extends Ut{genErrorMessage(t){this.clearLoadingIndicator(),t.message&&-1!==t.message.indexOf("JSON.parse")?console.error("Error:",t):t.message&&-1!==t.message.indexOf("Unexpected token")?(this.errorMsg="Error 404: Resource not found",this.requestUpdate(),console.error(this.errorMsg)):(t.status?""!==t.statusText?this.errorMsg=`Error ${t.status}: ${t.statusText}`:401===t.status?this.errorMsg="Error 401: Authentication error":500===t.status?this.errorMsg="Error 500: Internal server error":this.errorMsg=`Error ${t.status}`:t.name&&t.message?this.errorMsg=`Error ${t.name}: ${t.message}`:this.errorMsg="string"==typeof t?t:"Critical error",this.requestUpdate(),console.error("Error:",t))}submitForm=(t,e)=>{if(t.preventDefault(),t.target&&null!==t.target.closest(".mashup-modal")){const e=t.target.closest("#modalcontent");_t(e,this.content,this.pageInstructions,this.casedata.content),this.validateForm(e)?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID,target:e}):this.reportFormValidity(e)}else{const t=this.getRenderRoot().querySelector("#case-data");_t(t,this.content,this.pageInstructions,this.casedata.content),this.validateForm(t)?"create"!==e?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID}):this.sendData("newwork",{id:this.casetype}):this.reportFormValidity(t)}return!1};resetError=t=>{this.errorMsg="",this.validationMsg="",this.actionAreaCancel(t)};reloadWorkList=t=>{this.cases=[],this.requestUpdate(),this.actionAreaCancel(t)};actionAreaCancel=t=>{if(t&&t.preventDefault(),t.target&&null!==t.target.closest(".mashup-modal")){const e=t.target.closest(".mashup-modal").querySelector("button");if(null!==e)return void e.click()}this.bShowConfirm=!1,this.bShowNew=!1,this.caseID="",this.data={},this.content={},this.pageInstructions=[],this.casedata={},this.attachmentcategories=[],this.casepyStatusWork="",this.assignmentID="",this.actionID="",this.errorMsg="",this.numAttachments=0,this.validationMsg="",this.name="","workList"!==this.action&&"taskList"!==this.action||this.fetchData("worklist"),"dataView"===this.action&&this.fetchData("dataview",{id:this.dataviewParams}),this.sendExternalEvent({type:"cancel"})};actionAreaSave=t=>{t&&t.preventDefault(),null===t.target.getAttribute("data-submit")&&(t.target.textContent="Saving...",t.target.disabled=!0);const e=this.getRenderRoot().querySelector("#case-data");e&&(_t(e,this.content,this.pageInstructions,this.casedata.content),""!==this.assignmentID?this.sendData("savecase",{id:this.caseID,actionid:"",target:t.target}):this.sendData("savecase",{id:this.caseID,actionid:this.actionID,target:t.target}))};actionRefresh=()=>{const t=this.getRenderRoot().querySelector("#case-data");t&&(this.validationMsg="",_t(t,this.content,this.pageInstructions,this.casedata.content),""!==this.assignmentID?this.fetchData("assignmentaction",{id:this.assignmentID,actionid:this.actionID}):this.fetchData("caseaction",{id:this.caseID,actionid:this.actionID}))};displayCasesTypes=()=>(t=>{const e=[],a=Object.entries(t);for(const t of a)"true"===t[1].canCreate&&e.push(q`
          <li role="menuitem" tabindex="-1" data-value="${t[0]}">${t[1].name}</li>
        `);return q`
    ${e}
  `})(this.casetypes);displayActions=()=>this.data.actions?Ae(this.name,this.data):this.casedata.actions?Ae(this.name,this.casedata):null;displayAttachments=t=>{this.fetchData("attachmentcategories",{id:this.caseID}),this.fetchData("attachments",{id:this.caseID,target:t})};displayLocalAction=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");if(a&&(_t(a,this.content,this.pageInstructions,this.casedata.content),""!==this.assignmentID)){const a=this;this.sendData("savecase",{id:this.caseID},(()=>{this.actionID=t,a.fetchData("assignmentaction",{id:this.assignmentID,actionid:t,target:e})}))}};reloadAssignment=t=>{this.actionID=t,this.fetchData("assignmentaction",{id:this.assignmentID,actionid:t})};createCase=t=>{if(this.name="New Case",this.bShowNew=!0,t){let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&(this.casetype=e.getAttribute("data-value"),this.name=`New ${e.textContent} `)}this.content=this.initialContent,this.pageInstructions=[],this.caseID="",this.data={},this.casedata={},this.casetypes[this.casetype]?"true"===this.casetypes[this.casetype].requiresFieldsToCreate?this.fetchData("newwork",{id:this.casetype}):this.sendData("newwork",{id:this.casetype}):(this.errorMsg=`Case '${this.casetype}' is not defined`,console.error(`Case '${this.casetype}' is not defined`)),this.requestUpdate()};runAction=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&null!==e.getAttribute("data-value")&&(this.actionID=e.getAttribute("data-value"),this.actionRefresh());const a=this.getRenderRoot().querySelector("#case-data");null!=a&&it(ot(),a)};openCase=t=>{t.preventDefault(),this.caseID=t.target.getAttribute("data-id"),this.name="",this.data={},this.casedata={},0===this.caseID.indexOf("ASSIGN-WORKLIST")?(this.sendExternalEvent({type:"openassignment",id:this.caseID}),this.assignmentID=this.caseID,this.caseID=""):(this.sendExternalEvent({type:"opencase",id:this.caseID}),this.assignmentID="");const e=this.getRenderRoot().querySelector("#case-data");null!=e&&it(ot(),e),this.requestUpdate()};getData=(t,e)=>{this.dataPages[t]?it(Ie(this.dataPages[t]),e.nextElementSibling):this.fetchData("data",{id:t,element:e})};refreshAssignment=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");let i=t;if(a){if(_t(a,this.content,this.pageInstructions,this.casedata.content),i){"path"===i.tagName&&(i=i.parentNode),"svg"===i.tagName&&(i=i.parentNode);const t=i.getAttribute("data-action-click"),e=i.getAttribute("data-ref");if(null!==e&&null!==t)if("addRow"===t){const t=wt(this.casedata.content,e,i.getAttribute("data-newrow"));null!==t&&this.pageInstructions.push(t)}else if("deleteRow"===t){const t=Ct(this.casedata.content,e);null!==t&&this.pageInstructions.push(t)}}!0===this.bShowNew?this.sendData("refreshnew",{id:this.casetype,refreshFor:e}):this.sendData("refreshassignment",{id:this.assignmentID,actionid:this.actionID,refreshFor:e})}};fetchData(t,e){const{id:a,actionid:i,target:n,element:s}=e||{};let o="";""!==this.authentication&&"basic"!==this.authentication||(o=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(o=`Bearer ${this.token}`);const r={method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:o},mode:"cors"};let l=`${this.url}/api/v1/`;switch(t){case"worklist":l+="assignments";break;case"dataview":const t=a;let e="";if(t.params)for(const a of t.params)a.name&&a.value&&(e+=`${(""===e?"?":"&")+a.name.trim()}=${a.value.trim()}`);l+=`data/${t.name}${encodeURI(e)}`;break;case"casetypes":l+="casetypes";break;case"newwork":l+=`casetypes/${a}`;break;case"assignment":l+=`assignments/${a}`;break;case"case":l+=`cases/${a}`;break;case"data":l+=`data/${a}`;break;case"page":l+=`cases/${a}/pages/${i}`;break;case"view":l+=`cases/${a}/views/${i}`;break;case"assignmentaction":l+=`assignments/${a}/actions/${i}`;break;case"caseaction":l+=`cases/${a}/actions/${i}`;break;case"attachment":l+=`attachments/${a}`;break;case"attachments":l+=`cases/${a}/attachments`;break;case"attachmentcategories":l+=`cases/${a}/attachment_categories`}fetch(l,r).then((e=>{if("case"===t)this.etag=e.headers.get("etag"),n&&(n.disabled=!1,n.textContent="Save");else if("attachment"===t)return e.text();return e.ok||404===e.status?e.json():Promise.reject(e)})).then((e=>{try{if(e.errors&&e.errors.length>0)return this.errorMsg=`Error ${e.errors[0].ID}: ${e.errors[0].message}`,this.clearLoadingIndicator(),this.requestUpdate(),void console.error("Error:",e);const o=this.getRenderRoot().querySelector("#case-data");switch(t){case"casetypes":this.casetypes={};for(const t of e.caseTypes)("workList"!==this.action&&"taskList"!==this.action||""===this.casetype||this.casetype===t.ID)&&(this.casetypes[t.ID]={canCreate:t.CanCreate,name:t.name,requiresFieldsToCreate:!1});"createNewWork"===this.action&&this.createCase();break;case"worklist":this.cases=e.assignments,this.requestUpdate();break;case"dataview":this.cases=e.pxResults,this.requestUpdate();break;case"assignment":this.data=e,this.caseID=e.caseID,""===this.name&&(this.name=" "),this.fetchData("case",{id:this.caseID}),e.actions.length>0&&e.actions[0].ID?(this.actionID=e.actions[0].ID,this.name=e.actions[0].name,this.fetchData("assignmentaction",{id:a,actionid:this.actionID})):this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"});break;case"case":this.casedata=e,this.content={},this.pageInstructions=[],this.numAttachments=0,""===this.name&&(this.name=this.casedata.content.pyLabel),this.casepyStatusWork=this.casedata.content.pyStatusWork,this.requestUpdate(),""===this.assignmentID&&this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"}),"true"===this.bShowAttachments&&this.fetchData("attachments",{id:this.caseID});break;case"data":if(this.dataPages[a]=e,!s.nextElementSibling){console.error("Error: case data are not present when retrieving the data");break}it(this.showDataList(e),s.nextElementSibling);break;case"caseaction":if(!o){console.error("Error: case data are not present when retrieving the assignmentaction");break}if(!e.view.groups)return this.errorMsg="Error: view is not defined",this.clearLoadingIndicator(),void this.requestUpdate();it(this.renderSaveCaseLayout(e.view.groups,"Obj"),o),o.focus();break;case"assignmentaction":if(!o){console.error("Error: case data are not present when retrieving the assignmentaction");break}if(!e.view.groups)return this.errorMsg="Error: view is not defined",this.clearLoadingIndicator(),void this.requestUpdate();n?(this.actionID=i,it(Pt(e.name,this.renderMainLayout(e.view.groups,"Obj")),n),n.focus()):(this.name=e.name,this.requestUpdate(),it(this.renderMainLayout(e.view.groups,"Obj"),o),o.focus());break;case"page":if(!o){console.error("Error: case data are not present when retrieving the page");break}it(this.renderMainLayout(e.groups,"Obj"),o),o.focus();break;case"view":if(!o){console.error("Error: case data are not present when retrieving the page");break}this.content={},this.pageInstructions=[],"pyCaseInformation"===i?(this.name=e.name,it(this.renderReviewLayout(e.groups,"Obj"),o)):(this.name=e.name,it(this.renderMainLayout(e.groups,"Obj"),o)),o.focus();break;case"newwork":if(this.content={},this.pageInstructions=[],!o){console.error("Error: case data are not present when retrieving the newwork");break}it(this.renderCreateCaseLayout(e.creation_page.groups[0].layout.groups,"Obj"),o),o.focus();const t=this.getRenderRoot().querySelector("#case-data");t&&((t,e)=>{for(const a of t.elements)if("INPUT"===a.tagName||"TEXTAREA"===a.tagName||"SELECT"===a.tagName){const t=a.getAttribute("data-ref");if(null!==t&&"pyID"!==t&&e[t]){const i=e[t];if("object"==typeof i)"radio"===a.type?a.value===i.value&&(a.checked=!0):"checkbox"===a.type?!0!==i.value&&"true"!==i.value||(a.checked=!0):i.value&&(a.value=i.value),i.disabled&&(a.disabled=!0);else if("datetime-local"===a.type)24===i.length?a.value=i.substring(0,23):a.value=i;else if("date"===a.type){let i;a.valueAsDate&&(i=new Date(a.valueAsDate)),i&&i instanceof Date&&i.getTime()==i.getTime()||(i=new Date(a.value)),i&&i instanceof Date&&i.getTime()==i.getTime()?$t(e,t,`${pt(i.getUTCMonth()+1)}/${pt(i.getUTCDate())}/${i.getUTCFullYear()}`):$t(e,t,a.value)}else"string"==typeof i?"radio"===a.type?a.value===i&&(a.checked=!0):"checkbox"===a.type?"true"===i&&(a.checked=!0):a.value=i:"boolean"==typeof i&&"checkbox"===a.type?!0===i&&(a.checked=!0):a.value=i}}})(t,this.initialContent);break;case"attachments":let r=e.attachments;r||(r=[]),this.numAttachments=r.length,n&&it(Nt(n,r,this.caseID,this),n),this.requestUpdate();break;case"attachmentcategories":this.attachmentcategories=e.attachment_categories;break;case"attachment":n(e)}}catch(t){this.errorMsg=`Error: ${t}`,this.requestUpdate(),console.error("Error:",t)}})).catch((t=>{this.genErrorMessage(t)}))}sendData(t,e,a){const{id:i,actionid:n,target:s,refreshFor:o}=e;let r="";""!==this.authentication&&"basic"!==this.authentication||(r=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(r=`Bearer ${this.token}`);const l={"Content-Type":"application/json;charset=UTF-8",Authorization:r},c={method:"POST",headers:l,mode:"cors"},{pageInstructions:d,pageupdate:h}=Tt(this.content,this.pageInstructions);let u=`${this.url}/api/v1/`;switch(this.validationMsg="",t){case"authenticate":"oauth2password"===this.authentication?c.body=`grant_type=password&client_id=${this.clientid}&client_secret=${this.clientsecret}&username=${this.username}&password=${this.password}`:"oauth2clientcredentials"===this.authentication&&(c.body=`grant_type=client_credentials&client_id=${this.clientid}&client_secret=${this.clientsecret}`),c.headers["Content-Type"]="application/x-www-form-urlencoded",u=`${this.url}/PRRestService/oauth2/v1/token`;const t=this.url.indexOf("/prweb");-1!==t&&(u=`${this.url.substring(0,t+6)}/PRRestService/oauth2/v1/token`);break;case"newwork":u+="cases",c.body=JSON.stringify({content:h,pageInstructions:d,caseTypeID:i});break;case"submitassignment":c.body=JSON.stringify({content:h,pageInstructions:d}),u+=`assignments/${i}?actionID=${n}`;break;case"savecase":u+=`cases/${i}`,n&&""!==n&&(u+=`?actionID=${n}`),c.headers["If-Match"]=this.etag,c.method="PUT",c.body=JSON.stringify({content:h,pageInstructions:d});break;case"refreshnew":u+=`casetypes/${i}/refresh`,o&&""!==o&&(u+=`?refreshFor=${encodeURI(o)}`),c.headers["If-Match"]=this.etag,c.method="PUT",c.body=JSON.stringify({content:h,pageInstructions:d});break;case"refreshassignment":u+=`assignments/${i}/actions/${n}/refresh`,o&&""!==o&&(u+=`?refreshFor=${encodeURI(o)}`),c.headers["If-Match"]=this.etag,c.method="PUT",c.body=JSON.stringify({content:h,pageInstructions:d});break;case"refreshcase":u+=`cases/${i}/actions/${n}/refresh`,o&&""!==o&&(u+=`?refreshFor=${encodeURI(o)}`),c.headers["If-Match"]=this.etag,c.method="PUT",c.body=JSON.stringify({content:h,pageInstructions:d});break;case"uploadattachment":u+="attachments/upload",delete l["Content-Type"];const e=new FormData;e.append("File",n,n.name),c.body=e;break;case"attachments":u+=`cases/${i}/attachments`,c.body=JSON.stringify({attachments:n});break;case"deleteattachment":u+=`attachments/${i}`,c.method="DELETE"}fetch(u,c).then((e=>"deleteattachment"===t||"attachments"===t?e.text():200===e.status||201===e.status||e.status>=400&&e.status<500?e.json():e.ok?Promise.resolve("ok"):Promise.reject(e))).then((e=>{if(e.errors&&e.errors.length>0){if(e.errors[0].ValidationMessages)if(s&&"modalcontent"===s.id)St(s,e.errors[0].ValidationMessages,this),it(this.genPageValidationErrors(e),s.previousElementSibling);else{const t=this.getRenderRoot().querySelector("#case-data");St(t,e.errors[0].ValidationMessages,this),this.validationMsg=this.genPageValidationErrors(e)}else this.errorMsg=`Error ${e.errors[0].ID}: ${e.errors[0].message}`;this.clearLoadingIndicator(),s&&"BUTTON"===s.tagName&&(s.disabled=!1,s.textContent="Save")}else if(e.access_token)this.token=e.access_token;else{const i=this.getRenderRoot().querySelector("#case-data");if("refreshcase"===t||"refreshassignment"===t||"refreshnew"===t){if(!i)return void console.error("Error: case data are not present");"refreshnew"===t&&e.creation_page&&e.creation_page.groups&&e.creation_page.groups[0]?it(this.renderCreateCaseLayout(e.creation_page.groups[0].layout.groups,"Obj"),i):e.view&&e.view.groups&&it(this.renderMainLayout(e.view.groups,"Obj"),i)}else if("savecase"===t){if(this.fetchData("case",{id:this.caseID,target:s}),a)return void a()}else if("deleteattachment"===t||"attachments"===t)this.fetchData("attachments",{id:this.caseID,target:s});else if("uploadattachment"===t){let t=n.name.lastIndexOf(".");-1===t&&(t=n.name.length);const a=n.name.substring(t+1),i=[{type:"File",category:n.category,fileType:a,name:n.displayName,ID:e.ID}];return void this.sendData("attachments",{id:this.caseID,actionid:i,target:s})}e.ID&&(this.caseID=e.ID,"newwork"===t&&this.sendExternalEvent({type:"newwork",id:this.caseID})),e.nextAssignmentID?(i&&(it(this.genLoadingIndicator(),i),this.requestUpdate()),this.bShowNew=!1,this.assignmentID=e.nextAssignmentID,this.fetchData("assignment",{id:this.assignmentID})):e.nextPageID&&(i&&(it(this.genLoadingIndicator(),i),this.requestUpdate()),"Confirm"===e.nextPageID||"Review"===e.nextPageID?(this.bShowConfirm=!0,this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"}),this.fetchData("case",{id:this.caseID})):this.fetchData("page",{id:this.caseID,actionid:e.nextPageID}))}this.requestUpdate()})).catch((t=>{this.genErrorMessage(t)}))}};const Se=(t,e,a,i)=>q`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${i18n.t(t)}</span>
    <span class='badge-bg-info centered'><span class='badge_text'>${a}</span></span></h2>
    ${i?q`<div class="flex layout-content-inline_middle margin-l-auto">
        ${zt("Attachments",dt(),"Simple",i)}
      </div>`:""}
  </div>
  <div class="flex layout-content-inline_middle success">
    ${i18n.t("Thank you. Your information has been submitted.")}
  </div>
  <div id="case-data"></div>`,Te=(t,e)=>q`
  <div class="error">${t}
  ${null!=e?q`
    <button type='button' aria-label="${i18n.t("Click to close the banner")}" class="pzhc pzbutton Light" @click="${e}">
    ${lt()}</button>`:""}
  </div>`,Ee=(t,e,a,i,n,s)=>q`
  <div class="flex layout-content-inline_middle main-header">
    <h2>
    ${i18n.t(t)}
      ${e.length>0?q`<span>(${e.length})</span>`:""}
    </h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      <button type='button' class="pzhc pzbutton Simple"
      title='${i18n.t("Click to refresh the worklist")}' @click="${i}">${i18n.t("Refresh")}</button>
      ${Mt("Create","Create a new case",a,n)}
    </div>
  </div>
  ${e.length>0?q`
        <table class='responsive'>
          <caption class='sr-only'>${i18n.t("My worklist")}</caption>
          <thead>
            <tr>
              <th span='col'>${i18n.t("Name")}</th>
              <th span='col'>${i18n.t("Reference ID")}</th>
              <th span='col' class="right-aligned">${i18n.t("Urgency")}</th>
              <th span='col' class="right-aligned">${i18n.t("Action")}</th>
            </tr>
          </thead>
          <tbody>
            ${e.map((t=>{const e=t.caseID.split(" "),a=e[e.length-1];return q`
                <tr>
                  <td data-title='Name'>${i18n.t(t.name)}</td>
                  <td data-title='Case ID'>${a}</td>
                  <td data-title='Urgency' class="right-aligned">${t.urgency}</td>
                  <td data-title='Action' class="right-aligned">
                    <button @click="${s}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">
                    ${i18n.t("Open")}</button>
                  </td>
                </tr>
              `}))}
          </tbody>
        </table>
      `:q`
        <div class="margin-t-2x">${i18n.t("no assignments")}</div>
      `}
`,Le=(t,e,a,i,n,s)=>q`
  <div class="flex layout-content-inline_middle main-header">
    <h2>
    ${i18n.t(t)}
    </h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      <button type='button' class="pzhc pzbutton Simple"
      title='${i18n.t("Click to refresh the tasklist")}' @click="${i}">${i18n.t("Refresh")}</button>
      ${Mt("Create","Create a new case",a,n)}
    </div>
  </div>
  ${e.length>0?q`<div class='rdl'>${e.map((t=>q`
                <div class="flex align-center">
                  ${q`
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
              `))}</div>`:q`
        <div class="margin-t-2x">${i18n.t("no tasks")}</div>
      `}
`,Re=(t,e,a,i,n)=>q`
  <div class="flex layout-content-inline_middle main-header">
    <h2>
    ${i18n.t(t)}
    </h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      <button type='button' class="pzhc pzbutton Simple"
      title='${i18n.t("Click to refresh the list")}' @click="${i}">${i18n.t("Refresh")}</button>
    </div>
  </div>
  ${a.length>0?q`
        <table class='responsive'>
          <caption class='sr-only'>${i18n.t("My worklist")}</caption>
          <thead>
            <tr>
            ${e.fields.map((t=>q`<th scope="col" data-title='${i18n.t(t.label)}'>${i18n.t(t.label)}</td>`))}
            </tr>
          </thead>
          <tbody>
            ${a.map((t=>q`
                <tr>
                ${e.fields.map((e=>{if(!t[e.name])return q`<td data-title='${i18n.t(e.label)}'></td>`;if("pzInsKey"===e.name)return q`<td data-title='${i18n.t(e.label)}'>
      <button @click="${n}" class="pzhc pzbutton" data-type="assignment" data-id="${t.pzInsKey}">${i18n.t("Open")}</button></td>`;if("date"===e.type)try{const a=new Intl.DateTimeFormat([],{year:"numeric",month:"short",day:"numeric"}).format(new Date(t[e.name]));return q`<td data-title='${i18n.t(e.label)}'>${a}</td>`}catch(t){console.error("invalid date",t)}return q`<td data-title='${i18n.t(e.label)}'>${i18n.t(t[e.name])}</td>`}))}
                  </td>
                </tr>
              `))}
          </tbody>
        </table>
      `:q`
        <div class="margin-t-2x">${i18n.t(e.noresults??"No records found.")}</div>
      `}
`;let Me=class extends _e{displayContent(){return""!==this.errorMsg?Te(this.errorMsg,"true"===this.bShowCancel?this.resetError:null):"oauth2password"!==this.authentication&&"oauth2clientcredentials"!==this.authentication||""!==this.token?(this.casetypes||"createNewWork"!==this.action&&"workList"!==this.action&&"taskList"!==this.action&&"dataView"!==this.action?""===this.name&&("openAssignment"===this.action&&""===this.assignmentID&&(this.assignmentID=this.caseID),""!==this.assignmentID?this.fetchData("assignment",{id:this.assignmentID}):""!==this.caseID&&this.fetchData("case",{id:this.caseID})):(this.fetchData("casetypes"),"createNewWork"===this.action?(this.bShowNew=!0,this.casetypes&&this.casetypes[this.casetype]&&this.fetchData("newwork",{id:this.casetype})):"workList"===this.action||"taskList"===this.action?(this.bShowCancel="true",this.fetchData("worklist")):"dataView"===this.action&&(this.bShowCancel="true",this.fetchData("dataview",{id:this.dataviewParams}))),this.bShowConfirm?Se(this.casedata.content.pyLabel,this.casedata.content.pyID,this.casepyStatusWork,"true"===this.bShowAttachments?this.displayAttachments:null):""!==this.caseID||""!==this.assignmentID||this.bShowNew?q`
        ${xe(this.name,this.data,this.casedata,this.casepyStatusWork,this.numAttachments,this.displayActions,this.runAction,this.openCase,"true"===this.bShowAttachments?this.displayAttachments:null,this.bShowActions)}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
        <form id="case-data"></form>
      `:"workList"===this.action?Ee(this.headingLabel,this.cases,this.displayCasesTypes,this.reloadWorkList,"true"===this.bShowCreate?this.createCase:null,this.openCase):"taskList"===this.action?Le(this.headingLabel,this.cases,this.displayCasesTypes,this.reloadWorkList,"true"===this.bShowCreate?this.createCase:null,this.openCase):"dataView"===this.action?Re(this.headingLabel,this.dataviewParams,this.cases,this.reloadWorkList,this.openCase):null):(this.sendData("authenticate",{}),null)}renderMainLayout=(t,e)=>we(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this);renderSaveCaseLayout=(t,e)=>De(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this);renderReviewLayout=(t,e)=>Ce(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,this);renderCreateCaseLayout=(t,e)=>ke(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null);genPageValidationErrors=t=>(t=>t.errorDetails?q`
    <ul>
      ${t.errorDetails.map((t=>q`<li>${t.localizedValue}</li>`))}
    </ul>`:q`
  <ul>
    ${t.errors[0].ValidationMessages.map((t=>t.Path&&".pzErrorMessage"!==t.Path?q`
          <li>${t.Path.substring(1)}: ${t.ValidationMessage}</li>
        `:0===t.ValidationMessage.indexOf("Validation failed")?null:q`
    <li>${t.ValidationMessage}</li>
  `))}
  </ul>`)(t);showDataList=t=>Ie(t);genLoadingIndicator=()=>ot();validateForm=t=>t.checkValidity();reportFormValidity=t=>t.reportValidity();setInlineError=(t,e)=>{t.setCustomValidity(mt(e)),t.classList.add("error-field"),t.reportValidity()};clickHandler=t=>{let e=t.target;"path"===e.tagName&&(e=e.parentNode),"svg"===e.tagName&&(e=e.parentNode);const a=e.getAttribute("data-action-click");e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e),Dt(e,"click")?(this.refreshAssignment(e,kt(e,"click")),t.preventDefault()):"BUTTON"===e.tagName&&(t.preventDefault(),null!==e.getAttribute("data-submit")&&"save"!==e.getAttribute("data-submit")?this.submitForm(t,e.getAttribute("data-submit")):("addRow"===a||"deleteRow"===a)&&this.refreshAssignment(e))};changeHandler=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e.setCustomValidity(""),e.classList.remove("error-field"),Dt(e,"change")&&this.refreshAssignment(e,kt(e,"change"))};keyupHandler=t=>{const e=t.target;"TEXTAREA"===e.tagName&&(e.style.cssText="height:auto; padding:0;",e.style.cssText=`height:${e.scrollHeight}px`)};focusHandler=t=>{const e=t.target;e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e)};async firstUpdated(){const t=this.getRenderRoot();t&&(t.addEventListener("click",this.clickHandler),t.addEventListener("focusin",this.focusHandler),t.addEventListener("change",this.changeHandler),t.addEventListener("keyup",this.keyupHandler))}};const ze=()=>q`
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
      margin: 0 var(--spacing1x);
    }
    .flex.margin-l-auto {
      margin-left: auto;
    }
    .align-center {
      align-items: center;
    }
    .justify-end {
      justify-content: end;
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
      flex:1;
      display: flex;
      align-items: center;
    }
    .flex.main-header > h2 > span {
      white-space: nowrap;
      display: flex;
      margin-left: 6px;
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
    .rdl > div {
      border-bottom: 1px solid var(--generalBorderColor);
      padding-bottom: var(--spacing1x);
      padding-top: var(--spacing1x);
    }
    .rdl > div:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
    .rdl > div:first-child {
      padding-top: 0;
    }
    .rdl h3 {
      margin-bottom: 0;
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
`;customElements.define("pega-mashup",class extends Me{createRenderRoot(){return this.attachShadow({mode:"open"})}getRenderRoot(){return this.shadowRoot}render(){return q`
      ${ze()} ${this.displayContent()}
    `}});customElements.define("pega-mashup-light",class extends Me{createRenderRoot(){return this}getRenderRoot(){return this}render(){return q`
      ${this.displayContent()}
    `}});
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const Ne=(t,e)=>{const a=t._$AN;if(void 0===a)return!1;for(const t of a)t._$AO?.(e,!1),Ne(t,e);return!0},Pe=t=>{let e,a;do{if(void 0===(e=t._$AM))break;a=e._$AN,a.delete(t),t=e}while(0===a?.size)},Ue=t=>{for(let e;e=t._$AM;t=e){let a=e._$AN;if(void 0===a)e._$AN=a=new Set;else if(a.has(t))break;a.add(t),He(e)}};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function Oe(t){void 0!==this._$AN?(Pe(this),this._$AM=t,Ue(this)):this._$AM=t}function qe(t,e=!1,a=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(i))for(let t=a;t<i.length;t++)Ne(i[t],!1),Pe(i[t]);else null!=i&&(Ne(i,!1),Pe(i));else Ne(this,t)}const He=t=>{t.type==Ot&&(t._$AP??=qe,t._$AQ??=Oe)};class Fe extends Ht{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,a){super._$AT(t,e,a),Ue(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(Ne(this,t),Pe(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class je{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class Ve{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise((t=>this.q=t))}resume(){this.q?.(),this.Z=this.q=void 0}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const Be=t=>!(t=>null===t||"object"!=typeof t&&"function"!=typeof t)(t)&&"function"==typeof t.then,We=1073741823;const Ze=qt(class extends Fe{constructor(){super(...arguments),this._$Cwt=We,this._$Cbt=[],this._$CK=new je(this),this._$CX=new Ve}render(...t){return t.find((t=>!Be(t)))??H}update(t,e){const a=this._$Cbt;let i=a.length;this._$Cbt=e;const n=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){const o=e[t];if(!Be(o))return this._$Cwt=t,o;t<i&&o===a[t]||(this._$Cwt=We,i=0,Promise.resolve(o).then((async t=>{for(;s.get();)await s.get();const e=n.deref();if(void 0!==e){const a=e._$Cbt.indexOf(o);a>-1&&a<e._$Cwt&&(e._$Cwt=a,e.setValue(t))}})))}return H}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}),Je=()=>`${window.location.href.substring(0,window.location.href.lastIndexOf("/"))}/auth.html`;class Ye extends Ut{resetError=t=>{this.errorMsg="",this.validationMsg="",this.actionAreaCancel(t)};reloadWorkList=t=>{this.cases=[],this.requestUpdate(),this.actionAreaCancel(t)};actionAreaCancel=t=>{if(t&&t.preventDefault(),this.bShowConfirm=!1,this.bShowNew=!1,this.caseID="",this.data={},this.content={},this.pageInstructions=[],this.casedata={},this.attachmentcategories=[],this.casepyStatusWork="",this.assignmentID="",this.actionID="",this.errorMsg="",this.numAttachments=0,this.validationMsg="",this.name="","workList"!==this.action&&"taskList"!==this.action||(this.fetchData("dataviews",{id:"D_pxAvailableCaseTypesForPortal",actionid:this.portalName}),this.sendData("dataviews",{id:"D_pyMyWorkList"})),"dataView"===this.action){const t={};if(this.dataviewParams)for(const e of this.dataviewParams.params)e.name&&e.value&&(t[e.name.trim()]=e.value.trim());this.sendData("dataviews",{id:this.dataviewParams.name,content:{dataViewParameters:t}})}this.sendExternalEvent({type:"cancel"})};actionAreaSave=t=>{t&&t.preventDefault(),null===t.target.getAttribute("data-submit")&&(t.target.textContent="Saving...",t.target.disabled=!0);const e=this.getRenderRoot().querySelector("#case-data");e&&(_t(e,this.content,this.pageInstructions,this.data.data.caseInfo.content),""!==this.assignmentID?this.sendData("savecase",{id:this.caseID,actionid:"",target:t.target}):this.sendData("savecase",{id:this.caseID,actionid:this.actionID,target:t.target}))};actionRefresh=()=>{const t=this.getRenderRoot().querySelector("#case-data");t&&(this.validationMsg="",_t(t,this.content,this.pageInstructions,this.data.data.caseInfo.content),this.fetchData("caseaction",{id:this.caseID,actionid:this.actionID}))};displayActions=()=>this.data.actions?this.genActionsList(this.name,this.data):this.casedata.actions?this.genActionsList(this.name,this.casedata):null;displayAttachments=t=>{this.fetchData("attachmentcategories",{id:this.caseID}),this.fetchData("attachments",{id:this.caseID,target:t})};submitForm=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");return _t(a,this.content,this.pageInstructions,this.data.data.caseInfo.content),this.validateForm(a)?"create"!==e?""!==this.data.ID?"previous"===e?this.sendData("previousstep",{id:this.data.ID}):this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID}):this.sendData("submitcaseaction",{id:this.data.caseID,actionid:this.actionID}):this.sendData("newwork",{id:this.casetype}):this.reportFormValidity(a),t.preventDefault(),!1};createCase=t=>{if(this.name="New Case",this.bShowNew=!0,t){let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&(this.casetype=e.getAttribute("data-value"),this.name=`New ${e.textContent} `)}this.content=this.initialContent,this.pageInstructions=[],this.caseID="",this.data={},this.casedata={},this.casetypes[this.casetype]?this.sendData("newwork",{id:this.casetype}):(this.errorMsg=`Case '${this.casetype}' is not defined`,console.error(`Case '${this.casetype}' is not defined`)),this.requestUpdate()};runAction=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&null!==e.getAttribute("data-value")&&(this.actionID=e.getAttribute("data-value"),this.name=e.innerText,this.data.ID="",this.actionRefresh());const a=this.getRenderRoot().querySelector("#case-data");null!=a&&it(this.genLoadingIndicator(),a)};openCase=t=>{t.preventDefault(),this.caseID=t.target.getAttribute("data-id"),this.name="",this.data={},this.casedata={},0===this.caseID.indexOf("ASSIGN-WORKLIST")?(this.sendExternalEvent({type:"openassignment",id:this.caseID}),this.assignmentID=this.caseID,this.caseID=""):(this.sendExternalEvent({type:"opencase",id:this.caseID}),this.assignmentID="");const e=this.getRenderRoot().querySelector("#case-data");null!=e&&it(this.genLoadingIndicator(),e),this.requestUpdate()};getData=(t,e)=>{this.dataPages[t]?it(this.showDataList(this.dataPages[t]),e.nextElementSibling):this.fetchData("data",{id:t,element:e})};applyAction=t=>{const e=this.getRenderRoot().querySelector("#case-data");let a=t;if(e){if(a){"path"===a.tagName&&(a=a.parentNode),"svg"===a.tagName&&(a=a.parentNode);const t=a.getAttribute("data-action-click"),e=a.getAttribute("data-ref");if(null!==e&&null!=t){if("addRow"===t){const t=wt(this.data.data.caseInfo.content,e,a.getAttribute("data-newrow"));return void(null!==t&&this.pageInstructions.push(t))}if("deleteRow"===t){const t=Ct(this.data.data.caseInfo.content,e);return void(null!==t&&this.pageInstructions.push(t))}}}_t(e,this.content,this.pageInstructions,this.data.data.caseInfo.content)}};refreshAssignment=(t,e)=>{this.applyAction(t),!0===this.bShowNew?this.sendData("refreshnew",{id:this.casetype,refreshFor:e}):this.sendData("refreshassignment",{id:this.assignmentID,actionid:this.actionID,refreshFor:e})};genErrorMessage(t){this.clearLoadingIndicator(),t.message&&-1!==t.message.indexOf("JSON.parse")?console.error("Error:",t):t.message&&-1!==t.message.indexOf("Unexpected token")?(this.errorMsg="Error 404: Resource not found",this.requestUpdate(),console.error(this.errorMsg)):(t.status?""!==t.statusText?this.errorMsg=`Error ${t.status}: ${t.statusText}`:401===t.status?this.errorMsg="Error 401: Authentication error":423===t.status?this.errorMsg="Error 423: Resource is locked by another user":500===t.status?this.errorMsg="Error 500: Internal server error":this.errorMsg=`Error ${t.status}`:t.name&&t.message?this.errorMsg=`Error ${t.name}: ${t.message}`:this.errorMsg="string"==typeof t?t:"Critical error",this.requestUpdate(),console.error("Error:",t))}fetchData(t,e){const{id:a,actionid:i,target:n}=e||{};let s="";""!==this.authentication&&"basic"!==this.authentication||(s=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(s=`Bearer ${this.token}`);const o={method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:s},mode:"cors"};let r=`${this.url}/api/application/v2/`;switch(t){case"assignment":r+=`assignments/${a}`;break;case"view":r+=`cases/${a}/views/${i}`;break;case"dataviews":const t=JSON.stringify({PortalName:i});r+=`data_views/${a}?dataViewParameters=${encodeURI(t)}`;break;case"caseaction":r+=`cases/${a}/actions/${i}`;break;case"attachment":r+=`attachments/${a}`;break;case"attachments":r+=`cases/${a}/attachments`;break;case"attachmentcategories":r+=`cases/${a}/attachment_categories`}fetch(r,o).then((a=>{if("assignment"===t)this.etag=a.headers.get("etag");else if("attachment"===t)return a.text();return a.ok||404===a.status?a.json():401===a.status?(this.token="",this.sendData("authenticate",{...e,type:t,cmd:"fetchData"}),a.json()):Promise.reject(a)})).then((e=>{try{if(e.errors&&e.errors.length>0)return;if(e.pyLocalizedValue)return this.errorMsg=`Error: ${e.pyLocalizedValue}`,void this.requestUpdate();if(e.errorDetails&&e.errorDetails.length>0)return this.errorMsg=`Error ${e.errorDetails[0].message}: ${e.localizedValue}`,this.clearLoadingIndicator(),this.requestUpdate(),void console.error("Error:",e);const s=this.getRenderRoot().querySelector("#case-data");switch(t){case"dataviews":if("D_pxAvailableCaseTypesForPortal"===a){this.casetypes={};for(const t of e.pyCaseTypesAvailableToCreate)("workList"!==this.action&&"taskList"!==this.action||""===this.casetype||this.casetype===t.pyClassName)&&(this.casetypes[t.pyClassName]={canCreate:!0,name:t.pyLabel})}this.requestUpdate();break;case"assignment":this.content={},this.pageInstructions=[],this.isDeclarativeTarget=!1,this.refreshOnChange=!1,this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel,this.caseID=this.casedata.ID,this.data.caseID=this.caseID,this.data.ID=a;for(const t of this.casedata.assignments)if(a===t.ID&&t.actions&&t.actions.length>0){this.actionID=t.actions[0].ID;break}this.casepyStatusWork=this.casedata.status,this.data.actions=this.casedata.availableActions,this.name=this.casedata.stageLabel;const t=this.getRenderRoot().querySelector("#case-data");t&&_t(t,this.casedata.content),this.content={},it(this.renderMainLayout(e.uiResources.resources.views[this.casedata.content.pyViewName],"Obj"),s),this.requestUpdate(),s.focus();break;case"view":if(!s){console.error("Error: case data are not present when retrieving the page");break}this.content={},this.pageInstructions=[],this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel?this.casedata.content.pyLabel:this.casedata.name,this.casedata.actions=this.casedata.availableActions,this.casedata.content.pyID=this.casedata.ID,this.data.ID=this.casedata.ID,this.casepyStatusWork=this.casedata.status,this.name=this.casedata.stageLabel,this.content={},"true"===this.bShowAttachments&&this.fetchData("attachments",{id:this.caseID}),this.name=e.data.caseInfo.name,it(this.renderReviewLayout(e.uiResources.resources.views[i],"Obj"),s),this.requestUpdate(),s.focus();break;case"caseaction":this.content={},this.pageInstructions=[],this.isDeclarativeTarget=!1,this.refreshOnChange=!1,this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel,this.caseID=this.casedata.ID,this.data.caseID=this.caseID,this.data.ID="",this.casepyStatusWork=this.casedata.status,this.data.actions=this.casedata.availableActions,this.name=this.casedata.stageLabel,this.content={},it(this.renderMainLayout(e.uiResources.resources.views[e.uiResources.root.config.name],"Obj"),s),this.requestUpdate(),s.focus();break;case"attachments":let o=e.attachments;o||(o=[]),this.numAttachments=o.length,n&&it(Nt(n,o,this.caseID,this),n),this.requestUpdate();break;case"attachmentcategories":this.attachmentcategories=e.attachment_categories;break;case"attachment":n(e)}}catch(t){this.errorMsg=`Error: ${t}`,this.requestUpdate(),console.error("Error:",t)}})).catch((t=>{this.genErrorMessage(t)}))}sendData(t,e){const{id:a,actionid:i,target:n}=e;let s="";""!==this.authentication&&"basic"!==this.authentication||(s=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(s=`Bearer ${this.token}`);const o={"Content-Type":"application/json;charset=UTF-8",Authorization:s},r={method:"POST",headers:o,mode:"cors"},{pageInstructions:l,pageupdate:c}=Tt(this.content,this.pageInstructions);let d=`${this.url}/api/application/v2/`;switch(this.validationMsg="",t){case"authenticate":"oauth2password"===this.authentication?r.body=`grant_type=password&client_id=${this.clientid}&client_secret=${this.clientsecret}&enable_psyncId=true&username=${this.username}&password=${this.password}`:"oauth2clientcredentials"===this.authentication?r.body=`grant_type=client_credentials&client_id=${this.clientid}&client_secret=${this.clientsecret}&enable_psyncId=true`:"authorizationcode"===this.authentication&&(r.body=`grant_type=authorization_code&client_id=${this.clientid}&code_verifier=${window.history.state.verifier}&code=${window.history.state.code}&redirect_uri=${encodeURIComponent(Je())}`),"custombearer"===this.authentication&&(r.body=`grant_type=custom-bearer&client_id=${this.clientid}&enable_psyncId=true&userIdentifier=${this.username}`),r.headers["Content-Type"]="application/x-www-form-urlencoded",d=`${this.url}/PRRestService/oauth2/v1/token`;const t=this.url.indexOf("/prweb");-1!==t&&(d=`${this.url.substring(0,t+6)}/PRRestService/oauth2/v1/token`);break;case"newwork":d+="cases?viewType=form",r.body=JSON.stringify({caseTypeID:a,processID:"pyStartCase",content:c,pageInstructions:l});break;case"submitassignment":r.body=JSON.stringify({content:c,pageInstructions:l}),r.method="PATCH",r.headers["If-Match"]=this.etag,d+=`assignments/${a}/actions/${i}?viewType=form`;break;case"previousstep":r.body=JSON.stringify({content:c,pageInstructions:l}),r.method="PATCH",r.headers["If-Match"]=this.etag,d+=`assignments/${a}/navigation_steps/previous?viewType=form`;break;case"submitcaseaction":r.body=JSON.stringify({content:c,pageInstructions:l}),r.method="PATCH",r.headers["If-Match"]=this.etag,d+=`cases/${a}/actions/${i}?viewType=form`;break;case"refreshassignment":d+=`assignments/${a}/actions/${i}/refresh`,r.headers["If-Match"]=this.etag,r.method="PATCH",r.body=JSON.stringify({content:c,pageInstructions:l,contextData:!0});break;case"dataviews":d+=`data_views/${a}`,"function"==typeof e.content?r.body=e.content():r.body=JSON.stringify(e.content);break;case"uploadattachment":d+="attachments/upload",delete o["Content-Type"];const n=new FormData;n.append("File",i,i.name),r.body=n;break;case"attachments":d+=`cases/${a}/attachments`,r.body=JSON.stringify({attachments:i});break;case"deleteattachment":d+=`attachments/${a}`,r.method="DELETE"}fetch(d,r).then((a=>"deleteattachment"===t||"attachments"===t?a.text():("previousstep"!==t&&"submitassignment"!==t&&"newwork"!==t||(this.etag=a.headers.get("etag")),200===a.status||201===a.status||a.status>=400&&a.status<500||500===a.status?(401===a.status&&"authenticate"!==t&&(this.token="",this.sendData("authenticate",{...e,type:t,cmd:"sendData"})),a.json()):a.ok?Promise.resolve("ok"):Promise.reject(a)))).then((s=>{if(s.errors&&s.errors.length>0)return this.errorMsg=`Error: ${s.errors[0].message.trim()}`,void this.requestUpdate();if(s.access_token)this.token=s.access_token,window.history.replaceState({token:this.token},"",window.location.href),e.type&&e.cmd&&("sendData"===e.cmd?this.sendData(e.type,e):this.fetchData(e.type,e));else if(s.errorDetails&&s.errorDetails.length>0){if(s.errorDetails[0].localizedValue){const t=this.getRenderRoot().querySelector("#case-data");t&&(St(t,s.errorDetails,this),this.validationMsg=this.genPageValidationErrors(s,t))}else this.errorMsg=`Error ${s.errorDetails[0].message}: ${s.localizedValue}`;this.clearLoadingIndicator(),n&&(n.disabled=!1,n.textContent="Save"),"submitassignment"!==t&&"previousstep"!==t||this.fetchData("assignment",{id:this.assignmentID})}else{const o=this.getRenderRoot().querySelector("#case-data");if("dataviews"===t)if("D_pyMyWorkList"===a){if(this.cases=[],s.data?.length>0)for(const t of s.data)this.cases.push({name:t.pyLabel,caseID:t.pxRefObjectKey,urgency:t.pxUrgencyAssign,ID:t.pzInsKey,label:t.pxTaskLabel})}else if(this.data=s.data??[],"function"==typeof e.response)return void e.response(this);if("newwork"===t&&s.data.caseInfo.ID&&""!==s.data.caseInfo.ID&&this.sendExternalEvent({type:"newwork",id:s.data.caseInfo.ID}),"refreshassignment"===t)return void(o&&s.data.caseInfo&&s.data.caseInfo.content&&(this.data.data.caseInfo.content=s.data.caseInfo.content,this.casedata.content=s.data.caseInfo.content,this.data.uiResources.context_data=s.uiResources.context_data,it(this.renderMainLayout(this.data.uiResources.resources.views[this.actionID],"Obj"),o)));if("deleteattachment"===t)n&&!n.classList.contains("attach-files")&&this.fetchData("attachments",{id:this.caseID,target:n});else if("attachments"===t)this.fetchData("attachments",{id:this.caseID,target:n});else if("uploadattachment"===t){let t=i.name.lastIndexOf(".");-1===t&&(t=i.name.length);const e=i.name.substring(t+1),a=[{type:"File",category:i.category,fileType:e,name:i.displayName,ID:s.ID}];return void this.sendData("attachments",{id:this.caseID,actionid:a,target:n})}if(s.confirmationNote)this.bShowConfirm=!0,this.caseID=s.data.caseInfo.ID,this.fetchData("view",{id:this.caseID,actionid:"pyReview"});else if(s.uiResources){if(this.bShowNew=!1,this.content={},this.pageInstructions=[],this.assignmentID=s.nextAssignmentInfo.ID,this.data=s,this.casedata=s.data.caseInfo,this.data.name=this.casedata.content.pyLabel?this.casedata.content.pyLabel:this.casedata.name,this.caseID=this.casedata.content.pzInsKey,this.data.caseID=s.data.caseInfo.ID,this.data.ID=this.assignmentID,this.casedata.content.pyViewName=s.uiResources.root.config.name,this.actionID=this.casedata.content.pyViewName,this.casedata.assignments)for(const t of this.casedata.assignments)if("pzQuestionPageScr"===t.processID&&this.data.ID===t.ID&&t.actions&&t.actions.length>0){this.actionID=t.actions[0].ID;break}this.casepyStatusWork=s.data.caseInfo.status,this.data.actions=s.data.caseInfo.availableActions,this.name=s.data.caseInfo.stageLabel,o&&(it(this.genLoadingIndicator(),o),it(this.renderMainLayout(s.uiResources.resources.views[this.casedata.content.pyViewName],"Obj"),o),o.focus())}}this.requestUpdate()})).catch((t=>{this.genErrorMessage(t)}))}}const Ge=t=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20px" height="20px" fill="currentColor">${t}</svg>`;class Ke extends nt{static get properties(){return{content:{},root:{}}}createRenderRoot(){return this}constructor(t,e,a){super(),this.content=t,this.root="";const i=(new DOMParser).parseFromString(this.content,"text/html");document.execCommand("defaultParagraphSeparator",!1,"br");const n=document.createElement("div"),s=i.querySelector("body");n.setAttribute("contenteditable","true"),n.setAttribute("data-ref",e),n.setAttribute("id",a),n.innerHTML=s.innerHTML,this.root=n}render(){return q`<div class='rich-text-main'>
      <div class="editor-actions">
        <div class="toolbar">
          ${this.renderToolbar(((t,e)=>{document.execCommand(t,!1,e)}))}
        </div>
      </div>
      <div class="editor">${this.root}</div>
    </div>`}async firstUpdated(){document.addEventListener("selectionchange",(()=>{this.requestUpdate()}))}renderToolbar(t){const e=document.getSelection?document.getSelection():null,a=[];if(e&&"Range"===e.type){let t=e.baseNode;if(t)for(;null!=t;){const e=t&&t.tagName?t.tagName.toLowerCase().trim():void 0;e&&a.push(e),t=t.parentNode}}const i=[{icon:"Clear",title:"Remove all styling",command:"removeFormat"},{title:"Change format",command:"formatblock",values:[{name:"Normal Text",value:"--"},{name:"Heading 1",value:"h1"},{name:"Heading 2",value:"h2"},{name:"Heading 3",value:"h3"},{name:"Heading 4",value:"h4"},{name:"Heading 5",value:"h5"},{name:"Heading 6",value:"h6"},{name:"Paragraph",value:"p"},{name:"Pre-Formatted",value:"pre"}]},{title:"Change font size",command:"fontsize",values:[{name:"Font Size",value:"--"},{name:"Very Small",value:"1"},{name:"Small",value:"2"},{name:"Normal",value:"3"},{name:"Medium Large",value:"4"},{name:"Large",value:"5"},{name:"Very Large",value:"6"},{name:"Maximum",value:"7"}]},{icon:()=>Ge('<path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"></path>'),title:"Bold",command:"bold",active:a.includes("b")},{icon:()=>Ge('<path d="m9.586 14.633.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"></path>'),title:"Italic",command:"italic",active:a.includes("i")},{icon:()=>Ge('<path d="M3 18v-1.5h14V18zm2.2-8V3.6c0-.4.4-.6.8-.6.3 0 .7.2.7.6v6.2c0 2 1.3 2.8 3.2 2.8 1.9 0 3.4-.9 3.4-2.9V3.6c0-.3.4-.5.8-.5.3 0 .7.2.7.5V10c0 2.7-2.2 4-4.9 4-2.6 0-4.7-1.2-4.7-4z"></path>'),title:"Underline",command:"underline",active:a.includes("u")},{icon:()=>Ge('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"></path>'),title:"Align left",command:"justifyleft"},{icon:()=>Ge('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"></path>'),title:"Align middle",command:"justifycenter"},{icon:()=>Ge('<path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"></path>'),title:"Align right",command:"justifyright"},{icon:()=>Ge('<path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"></path>'),title:"Numbered list",command:"insertorderedlist",active:a.includes("ol")},{icon:()=>Ge('<path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"></path>'),title:"Bullet list",command:"insertunorderedlist",active:a.includes("ul")},{icon:()=>Ge('<path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"></path>'),command:"formatblock",title:"Format block quote",command_value:"blockquote"},{icon:()=>Ge('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zm1.618-9.55L.98 9.358a.4.4 0 0 0 .013.661l3.39 2.207A.4.4 0 0 0 5 11.892V7.275a.4.4 0 0 0-.632-.326z"></path>'),title:"decrease indent",command:"outdent"},{icon:()=>Ge('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zM1.632 6.95 5.02 9.358a.4.4 0 0 1-.013.661l-3.39 2.207A.4.4 0 0 1 1 11.892V7.275a.4.4 0 0 1 .632-.326z"></path>'),title:"Increase indent",command:"indent"},{icon:()=>Ge('<path d="m5.042 9.367 2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z"></path>'),title:"Undo",command:"undo"},{icon:()=>Ge('<path d="m14.958 9.367-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z"></path>'),title:"Redo",command:"redo"},{icon:()=>Ge('<path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"></path>'),title:"Add link",active:a.includes("a"),deactivate:"unlink",command:()=>{const e=prompt("Enter the URL","");e&&""!==e&&t("createlink",e)}},{icon:()=>Ge('<path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"></path>'),title:"Add image",active:a.includes("img"),command:()=>{const e=prompt("Enter the image URL","");e&&""!==e&&t("insertImage",e)}}];return q`
      ${i.map((e=>q`
          ${e.values?q` <select aria-label="${i18n.t(e.title)}" tabindex=-1
        @change=${a=>{a.preventDefault();const i=a.target.value;"--"===i?t("removeFormat",void 0):"string"==typeof e.command&&t(e.command,i)}}>
    ${e.values.map((t=>q` <option value=${t.value}>${t.name}</option>`))}
              </select>`:q` <button aria-label="${i18n.t(e.title)}" title="${i18n.t(e.title)}" tabindex=-1
                class="${e.active?"active":"inactive"}"
                @click=${a=>{a.preventDefault(),e.active&&e.deactivate?"string"==typeof e.deactivate?t(e.deactivate,e.command_value):e.deactivate():"string"==typeof e.command?t(e.command,e.command_value):e.command()}}>${"function"==typeof e.icon?document.createRange().createContextualFragment(`${e.icon()}`):e.icon}</button>`}
        `))}
    `}}customElements.define("rich-text-editor",Ke);const Xe=(t,e)=>{if(t.helperText&&""!==t.helperText)return`${e}-info`},Qe=t=>{if(t.placeholder&&""!==t.placeholder)return t.displayplaceholder},ta=(t,e,a,i)=>void 0===e||""===e?q`
      ${i}
    `:q`
    <div class="flex content-item field-item ${a}" ?disabled="${t.disabledstate}">
      ${((t,e,a)=>{if(void 0===e)return null;const i=t.requiredstate?"icon-required":"";return"field-checkbox"===a?t.label&&""!==t.label?q`<legend class="field-caption">${t.displaylabel}</legend>`:null:q`
    ${""!==t.label?q`<label class="field-caption dataLabelForWrite ${i}"
    for="${Vt(e)}">${t.displaylabel}
    </label>`:null}
  `})(t,e,a)}${i}${((t,e)=>t.helperText&&""!==t.helperText?q`<span id=${`${e}-info`} class="helper-text">${t.displayhelperText}</span>`:null)(t,e)}
    </div>
  `,ea=(t,e,a,i,n)=>{const s=((t,e,a,i,n)=>{if(!1===t.config.visibility)return null;let s=!1;if(t.config.displayvalue="",t.config.displaylabel=i18n.t(t.config.label),t.config.displayplaceholder=i18n.t(t.config.placeholder),t.config.displayhelperText=i18n.t(t.config.helperText),t.config.displaycaption=i18n.t(t.config.caption),t.config.value){let e=t.config.value.replace("@P .","").replace("@USER .","");if(t.config.reference=void 0===n||""===n?e:`${n}.${e}`,t.config.displayvalue=yt(i.casedata.content,t.config.reference),"string"==typeof t.config.datasource&&0===t.config.datasource.indexOf("@ASSOCIATED")){e=t.config.datasource.replace("@ASSOCIATED .",""),-1!==e.indexOf(".")&&(e=e.substring(e.lastIndexOf(".")+1));let a="";i.data.context_data?a=i.data.context_data.content:i.data.uiResources.context_data&&i.data.uiResources.context_data.caseInfo&&i.data.uiResources.context_data.caseInfo.content&&(a=i.data.uiResources.context_data.caseInfo.content);const s=""===n?a:yt(a,n);if(s&&(t.config.options=s.summary_of_associated_lists__[e]),void 0===t.config.options&&(a=i.data.uiResources.resources.fields[e],Array.isArray(a)&&1===a.length&&(a=a[0]),a&&a.datasource))if(a.datasource.records)t.config.options=a.datasource.records;else if(a.datasource.name&&i.data.data.shared[a.datasource.name]){const e=i.data.data.shared[a.datasource.name];if(Object.keys(e).length>0){const i=Object.keys(e)[0];if(e[i].pxResults){const n=a.datasource.propertyForValue.replace("@P .",""),s=a.datasource.propertyForDisplayText.replace("@P .","");t.config.options=[];for(const a in e[i].pxResults){const o=e[i].pxResults[a];t.config.options[a]={key:o[n],value:o[s]}}}}}}else if("object"==typeof t.config.datasource&&t.config.datasource.source&&0===t.config.datasource.source.indexOf("@DATASOURCE")){const e=t.config.datasource.source.replace("@DATASOURCE ","").replace(".pxResults","");if(i.data.data[e]&&i.data.data[e].pxResults)t.config.options=i.data.data[e].pxResults;else if(i.data.uiResources.context_data&&i.data.uiResources.context_data.caseInfo&&i.data.uiResources.context_data.caseInfo.content){const a=i.data.uiResources.context_data.caseInfo.content;if(a[n]&&a[n].summary_of_lists__[e]&&a[n].summary_of_lists__[e].pxResults){const s=a[n].summary_of_lists__[e].pxResults.replace(".pxResults","");if(i.data.data[s]&&i.data.data[s].pxResults){t.config.options=[];const e=t.config.datasource.fields.key.replace("@P .",""),a=t.config.datasource.fields.text.replace("@P .","");for(const n in i.data.data[s].pxResults){const o=i.data.data[s].pxResults[n];t.config.options[n]={key:o[e],value:o[a]}}}}}}if(t.config.options||(t.config.options=[]),t.config.displayvalue?"object"!=typeof t.config.displayvalue&&(t.config.displayvalue=`${t.config.displayvalue}`):t.config.displayvalue="",i.data.uiResources&&i.data.uiResources.resources&&i.data.uiResources.resources.fields&&i.data.uiResources.resources.fields[e]){let t=i.data.uiResources.resources.fields[e];Array.isArray(t)&&1===t.length&&(t=t[0]),(t.isDeclarativeTarget||t.isSpecial)&&(s=!0,i.isDeclarativeTarget=!0)}}"string"!=typeof t.config.visibility&&"string"!=typeof t.config.readOnly&&"string"!=typeof t.config.disabled&&"string"!=typeof t.config.required||(i.refreshOnChange=!0);const o=i.data.data.caseInfo.content;if("string"==typeof t.config.visibility&&"true"!==t.config.visibility){if(t.config.visibility.startsWith("@W ")&&(i.isDeclarativeTarget=!0),!It(t.config.visibility,o,i,n))return null}else if(!1===t.config.visibility||"false"===t.config.visibility)return null;return t.config.readonlystate=!1,"string"==typeof t.config.readOnly&&"false"!==t.config.readOnly?t.config.readonlystate=It(t.config.readOnly,o,i,n):(!0===t.config.readOnly||"true"===t.config.readOnly||s)&&(t.config.readonlystate=!0),t.config.requiredstate=!1,"string"==typeof t.config.required&&"false"!==t.config.required?t.config.requiredstate=It(t.config.required,o,i,n):!0!==t.config.required&&"true"!==t.config.required||(t.config.requiredstate=!0),t.config.disabledstate=!1,"string"==typeof t.config.disabled&&"false"!==t.config.disabled?t.config.disabledstate=It(t.config.disabled,o,i,n):!0!==t.config.disabled&&"true"!==t.config.disabled||(t.config.disabledstate=!0),t.config.disabledstate&&(t.config.requiredstate=!1,t.config.readonlystate=!1),"OK"})(t,0,0,i,n);if("OK"!==s)return s;if(!0===a)return ta(t.config,e,"field-text",aa(t.config,t.type,e));switch(t.type){case"TextContent":return aa(t.config,t.type,e);case"Decimal":case"TextInput":return ta(t.config,e,"field-textinput",ia(t.config,e));case"Phone":return ta(t.config,e,"field-phoneinput",na(t.config,e));case"Email":return ta(t.config,e,"field-emailinput",la(t.config,e));case"Integer":return ta(t.config,e,"field-numberinput",sa(t.config,e));case"Percentage":return ta(t.config,e,"field-percentage",oa(t.config,e));case"Currency":return ta(t.config,e,"field-currencyinput",ra(t.config,e));case"RadioButtons":return ta(t.config,e,"field-radiogroup",ua(t.config,e));case"TextArea":return ta(t.config,e,"field-textarea",ca(t.config,e));case"RichText":return ta(t.config,e,"field-richtext",da(t.config,e));case"Checkbox":return ta(t.config,e,"field-checkbox",ha(t.config,e));case"Dropdown":return ta(t.config,e,"field-dropdown",pa(t.config,e));case"DateTime":return ta(t.config,e,"field-datetime",ga(t.config,e));case"Date":return ta(t.config,e,"field-date",fa(t.config,e));case"Time":return ta(t.config,e,"field-time",ma(t.config,e));case"AutoComplete":return ta(t.config,e,"field-autocomplete",ba(t.config,e));case"SemanticLink":return ta(t.config,e,"field-semanticlink",$a(t.config));case"Attachment":return ta(t.config,e,"field-attachment",ya(t.config,e,i));case"Location":return ta(t.config,e,"field-location",va(t.config,e));default:return null}},aa=(t,e,a)=>{let i=t.displayvalue;if(""!==i){if("Phone"===e)return q`<a data-ref="${t.reference}" id="${Vt(a)}" href="${`tel:${i}`}">${i}</a>`;if("Date"===e){const e={year:"numeric",month:"short",day:"numeric"};i=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}else if("DateTime"===e){i=ft(t.displayvalue);const e={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};i=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}else if("Time"===e){const e={hour:"numeric",minute:"numeric"};i=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}}if("TextContent"===e){if("Paragraph"===t.displayAs)return q`<p>${i18n.t(t.content)}</p>`;if("Heading 1"===t.displayAs)return q`<h1>${i18n.t(t.content)}</h1>`;if("Heading 2"===t.displayAs)return q`<h2>${i18n.t(t.content)}</h2>`;if("Heading 3"===t.displayAs)return q`<h3>${i18n.t(t.content)}</h3>`;if("Heading 4"===t.displayAs)return q`<h4>${i18n.t(t.content)}</h4>`}return q`
    <span class="dataValueRead" data-ref="${t.reference}" id="${Vt(a)}">${mt(i)}</span>
  `},ia=(t,e)=>q`
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${Vt(Qe(t))}"
    type="text"
    aria-describedby="${Vt(Xe(t,e))}"
    id="${Vt(e)}"
    value="${mt(t.displayvalue)}"
  />
`,na=(t,e)=>{let a="";for(const e of t.options)0===t.displayvalue.indexOf(e.pyCallingCode)&&(a=e.pyCallingCode);return t.displayvalue=t.displayvalue.substring(a.length),q`
<div>
<select
  class="field-countrycode"
  ?readonly="${t.readonlystate}"
  ?disabled="${t.disabledstate}"
  aria-label="${i18n.t("Select country code")}">
  ${t.options.map((t=>q`<option ?selected=${t.pyCallingCode===a}
  value='${t.pyCallingCode}'>${t.pyCallingCode}</option>`))}
</select>
 <input
   data-ref="${t.reference}"
   ?required="${t.requiredstate}"
   ?readonly="${t.readonlystate}"
   ?disabled="${t.disabledstate}"
   placeholder="${Vt(Qe(t))}"
   type="tel"
   aria-describedby="${Vt(Xe(t,e))}"
   id="${Vt(e)}"
   value="${mt(t.displayvalue)}"
 />
 </div>
`},sa=(t,e)=>q`
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${Vt(Qe(t))}"
    type="number"
    aria-describedby="${Vt(Xe(t,e))}"
    id="${Vt(e)}"
    value="${mt(t.displayvalue)}"
  />
`,oa=(t,e)=>q`
 <input
   data-ref="${t.reference}"
   ?required="${t.requiredstate}"
   ?readonly="${t.readonlystate}"
   ?disabled="${t.disabledstate}"
   placeholder="${Vt(Qe(t))}"
   type="text"
   aria-describedby="${Vt(Xe(t,e))}"
   id="${Vt(e)}"
   value="${mt(t.displayvalue)}"
 />
`,ra=(t,e)=>q`
  <div ?readonly="${t.readOnly}">
  <span class="currency-symbol">$</span>
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${Vt(Qe(t))}"
    type="number"
    aria-describedby="${Vt(Xe(t,e))}"
    id="${Vt(e)}"
    value="${mt(t.displayvalue)}"
  />
  </div>
`,la=(t,e)=>q`
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${Vt(Qe(t))}"
    type="email"
    aria-describedby="${Vt(Xe(t,e))}"
    id="${Vt(e)}"
    value="${mt(t.displayvalue)}"
  />
`,ca=(t,e)=>q`
  <textarea
    rows="3"
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${Vt(Qe(t))}"
    type="email"
    aria-describedby="${Vt(Xe(t,e))}"
    id="${Vt(e)}"
  >${mt(t.displayvalue)}</textarea>
`,da=(t,e)=>new Ke(mt(t.displayvalue),t.reference,e),ha=(t,e)=>{const a=t.requiredstate?"icon-required":"";return q`
  <input
  data-ref="${t.reference}"
  ?required="${t.requiredstate}"
  ?readonly="${t.readonlystate}"
  onclick="${Vt(t.readonlystate?"return false;":void 0)}"
  ?disabled="${t.disabledstate}"
  aria-describedby="${Vt(Xe(t,e))}"
  id=${Vt(e)}
  type="checkbox" ?checked=${"true"===t.displayvalue||!0===t.displayvalue}
  />
  <label class=${a} for=${Vt(e)}>
  ${t.displaycaption}
    </label>
`},ua=(t,e)=>{let a=[{value:"true"},{value:"false"}];return t.options&&(a=t.options),q`
    ${a.map(((a,i)=>{const n=`rb-${e}-${i}`;return q`
        <div>
          <input
            data-ref="${t.reference}"
            name=${Vt(e)}
            id=${n}
            type="radio"
            ?required="${t.requiredstate}"
            ?readonly="${t.readonlystate}"
            ?disabled="${t.disabledstate}"
            value="${a.key}"
            onclick="${Vt(t.readonlystate?"return false;":void 0)}"
            ?checked="${a.key===t.displayvalue}"
          />
          <label for="${n}">${a.value}</label>
        </div>
      `}))}
  `},pa=(t,e)=>q`<select
  data-ref="${t.reference}"
  aria-describedby="${Vt(Xe(t,e))}"
  id=${Vt(e)}
  ?required="${t.requiredstate}"
  ?readonly="${t.readonlystate}"
  ?disabled="${t.disabledstate}">
  placeholder="${Vt(Qe(t))}"
    <option value="" title="${i18n.t("Select...")}">${i18n.t("Select...")}</option>
    ${t.options.map((e=>q`<option ?selected=${e.key===t.displayvalue} value='${e.key}'>${e.value}</option>`))}
  </select>`,ga=(t,e)=>{let a=t.displayvalue;if(""!==a){const e=ft(a);e instanceof Date&&e.getTime()==e.getTime()?a=`${e.getUTCFullYear()}-${pt(e.getUTCMonth()+1)}-${pt(e.getUTCDate())}T${pt(e.getUTCHours())}:${pt(e.getUTCMinutes())}`:8===t.displayvalue.length?a=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(4,6)}-${t.displayvalue.substring(6,8)}T00:00`:24===t.displayvalue.length&&(a=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(5,7)}-${t.displayvalue.substring(8,10)}T${t.displayvalue.substring(11,13)}:${t.displayvalue.substring(14,16)}`)}return q`
    <input
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="datetime-local"
      aria-describedby="${Vt(Xe(t,e))}"
      id="${Vt(e)}"
      value="${a}"
    />
  `},fa=(t,e)=>{let a=t.displayvalue;if(""!==a){const e=ft(a);e instanceof Date&&e.getTime()==e.getTime()?a=`${e.getUTCFullYear()}-${pt(e.getUTCMonth()+1)}-${pt(e.getUTCDate())}`:8===t.displayvalue.length&&(a=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(4,6)}-${t.displayvalue.substring(6,8)}`)}return q`
    <input
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="date"
      aria-describedby="${Vt(Xe(t,e))}"
      id="${Vt(e)}"
      value="${a}"
    />
  `},ma=(t,e)=>{let a=t.displayvalue;if(""!==a){const e=ft(a);e instanceof Date&&e.getTime()==e.getTime()?a=`${pt(e.getUTCHours())}-${pt(e.getUTCMinutes())}-${pt(e.getUTCSeconds())}`:8===t.displayvalue.length&&(a=`${t.displayvalue.substring(9,10)}:${t.displayvalue.substring(10,11)}:${t.displayvalue.substring(11,12)}`)}return q`
    <input
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="time"
      aria-describedby="${Vt(Xe(t,e))}"
      id="${Vt(e)}"
      value="${a}"
    />
  `},ba=(t,e)=>t.options?q`
      <input
        data-ref="${t.reference}"
        list="${t.reference}"
        ?required="${t.requiredstate}"
        ?readonly="${t.readonlystate}"
        ?disabled="${t.disabledstate}"
        placeholder="${Vt(Qe(t))}"
        type="text"
        class="combobox loaded"
        aria-describedby="${Vt(Xe(t,e))}"
        id="${Vt(e)}"
        value="${mt(t.displayvalue)}"
      />
      <datalist id="${t.reference}">
        ${t.options.map((t=>q`
            <option value="${t.key}">
              ${t.value}
            </option>
          `))}
      </datalist>
    `:null,$a=()=>q`
 <a>semantic link</a>
`,ya=(t,e,a)=>{let i=[];return t.displayvalue&&t.displayvalue.pxResults&&t.displayvalue.pxResults.length>0&&(i=t.displayvalue.pxResults),Nt(void 0,i,a.caseID,a)},va=(t,e)=>q`<input
 class="location"
 data-ref="${t.reference}"
 ?required="${t.requiredstate}"
 ?readonly="${t.readonlystate}"
 ?disabled="${t.disabledstate}"
 placeholder="${Vt(Qe(t))}"
 type="text"
 aria-describedby="${Vt(Xe(t,e))}"
 id="${Vt(e)}"
 value="${mt(t.displayvalue)}"
/>`,xa=(t,e)=>q`
  ${t.map((t=>q`
    <th scope='col'>${i18n.t(t.config.label)}</th>`))}${e?null:q`<th></th>`}
`,wa=(t,e)=>{if(!e){const e=[];t.config.children[0].children.map(((t,a)=>(e[a]=t.config.value.replace("@P .","").replace("@USER .",""),null)));const a=t.config.referenceList.replace("@P .","").replace("@USER .","");return q`
      <div class="table-action-area">
        <button type="button" class="pzhc pzbutton Simple" aria-label="${i18n.t("Add row")}" data-newrow="${e.join()}"
        data-ref=${a} data-action-click="addRow">${rt()}${i18n.t("Add item")}</button>
      </div>
    `}return null},Ca=(t,e,a)=>{const i=t.config.referenceList.replace("@P .","").replace("@USER .",""),n=t.config.children[0].children,s=yt(a.data.data.caseInfo.content,i);return s?q`
  ${s.map(((t,s)=>q`
    <tr>
    ${n.map((t=>{const n=t,o=i18n.t(t.config.label);return q`
    <td data-title="${o}">${ea(n,void 0,e,a,`${i}(${s+1})`)}</td>`}))}${e?null:q`<td><button type="button" class="pzhc pzbutton Simple"
  aria-label="${i18n.t("Delete item")}" data-ref=${`${i}(${s+1}).pyTemplate`}
  data-action-click='deleteRow'>${ct()}</button></td>`}
    </tr>`))}
`:null},Da=(t,e,a,i,n)=>{if(void 0===t)return null;if(Array.isArray(t)&&1===t.length&&"View"===t[0].type&&(t=t[0]),!t.config||!t.config.template)return q`${t.map(((t,s)=>{const o=`${e}-${s}`;if("Region"===t.type)return Da(t.children,`${e}-0`,!0,i,n);if("reference"===t.type&&"view"===t.config.type){let e="";if(t.config.context&&(e=t.config.context),t.config.inheritedProps&&1===t.config.inheritedProps.length&&"label"===t.config.inheritedProps[0].prop){const s=i18n.t(t.config.inheritedProps[0].value);let r=i.data.uiResources.resources.views[t.config.name];if(r){if(Array.isArray(r)&&1===r.length&&"View"===r[0].type&&(r=r[0]),"fieldGroup"===r.config.multiRecordDisplayAs)return Da(r,o,a,i,""===n?e.substring(1):n+e);const t="SimpleTable"===r.config.template||"ListView"===r.config.template?"field-table":"field-subview";return q`<div class='flex content-item field-item ${t}'><h4>${s}</h4>${Da(r,o,a,i,""===n?e.substring(1):n+e)}</div>`}}return Da(i.data.uiResources.resources.views[t.config.name],o,a,i,n&&""!==n?n+e:e.substring(1))}return ea(t,o,a,i,n)}))}`;if("SimpleTable"===t.config.template){if("fieldGroup"===t.config.multiRecordDisplayAs){const n=t.config.referenceList.replace("@P .","").replace("@USER .",""),s=yt(i.data.data.caseInfo.content,n);if(!s)return null;const o=t.config.heading.replace("@L ","").replace("@FL ","");return q`${s.map(((s,r)=>q`<div><h4>${`${o} ${r}`}</h4>
        ${Da(t.children[0].children,`${e}-fieldgroup-${r}`,a,i,`${n}(${r+1})`)}</div>`))}`}return((t,e,a)=>{const i=e||"Editable"!==t.config.renderMode;return q`
  <div class='table-content'><table class='responsive'>
    <thead>
      <tr>
        ${xa(t.config.children[0].children,i)}
      </tr>
    </thead>
    <tbody>
      ${Ca(t,i,a)}
    </tbody>
  </table></div>
  ${wa(t,i)}`})(t,a,i)}if("ListView"===t.config.template)return((t,e,a)=>(a.sendData("dataviews",{id:t.config.referenceList,content:{paging:{pageNumber:1,pageSize:41}}}),q`
  <table class='responsive'>
    <thead>
      <tr>
        ${xa(t.config.presets[0].children[0].children,e)}
      </tr>
    </thead>
    <tbody>${ot()}
    </tbody>
  </table>`))(t,a,i);switch("DataReference"===t.config.template&&(i.isDeclarativeTarget=!0),"TwoColumn"===t.config.template&&1===t.children.length&&(t.config.template="OneColumn"),t.config.template){case"DetailsTwoColumn":case"TwoColumn":return q`
          <div class="flex layout-content-inline_grid_double">
            <div class="flex layout-content-stacked">${Da(t.children[0].children,`${e}-0`,a,i,n)}</div>
            <div class="flex layout-content-stacked">${Da(t.children[1].children,`${e}-1`,a,i,n)}</div>
          </div>
        `;case"DefaultForm":return q`
          <div class="${`flex layout-content-default-form layout-content-default-form-${t.config.NumCols}`}">
            ${Da(t.children[0].children,`${e}-0`,a,i,n)}
          </div>
        `;case"DataReference":return q`
          <div class="flex layout-content-stacked">
            ${Da(t.children,`${e}-0`,a,i,n)}
          </div>
        `;case"OneColumn":return q`
          <div class="flex layout-content-stacked">
            ${Da(t.children[0].children,`${e}-0`,a,i,n)}
          </div>
        `;case"Details":return q`
          <div class="flex layout-content-stacked_with_labels_left">
            ${Da(t.children[0].children,`${e}-0`,!0,i,n)}
          </div>
        `;default:return null}},ka=(t,e,a,i,n,s,o,r,l,c)=>{const d=q`${dt()}<span class='count-badge'>${n}</span>`;return void 0===e.caseID&&a.content?q`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${i18n.t(e.data.caseInfo.name)}</span>
      ${""!==i?q`<span class='badge-bg-info centered'><span class='badge_text'>${i}</span></span>`:""}</h2>
      <div class="flex layout-content-inline_middle margin-l-auto">
        ${l?zt("Attachments",d,"Simple",l):""}
        ${"true"===c&&a.actions&&(a.actions.length>1||1===a.actions.length&&a.actions[0].name!==t)?q`
          ${Mt("Actions","Start a new action",s,o)}`:""}
      </div>
    </div>
    ${((t,e)=>t&&0!==t.length?q`
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
        ${t.map((t=>q`
        <tr>
          <td data-title='Priority'>${t.urgency}</td>
          <td data-title='Task'>${t.name}</td>
          <td data-title='Assigned'>${t.assigneeInfo.name}</td>
          <td data-title='Action' class="right-aligned">
            <button type='button' @click="${e}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">${i18n.t("Open")}</button>
          </td>
        </tr>`))}
  </tbody>
  </table> `:null)(a.assignments,r)}`:""===t||void 0===e.caseID?"":q`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${i18n.t(e.data.caseInfo.name)}</span>
    ${""!==i?q`<span class='badge-bg-info centered'><span class='badge_text'>${i}</span></span>`:""}</h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      ${l?zt("Attachments",d,"Simple",l):""}
      ${"true"===c&&e.actions&&(e.actions.length>1||1===e.actions.length&&e.actions[0].name!==t)?q`
        ${Mt("Actions","Start a new action",s,o)}`:""}
    </div>
  </div>
 <h3>${i18n.t(t)}</h3>`},Aa=(t,e,a,i,n)=>q`
  <div>${Da(t,e,!1,n,"")}</div>
  ${((t,e)=>q`
  <div class="action-button-area">
    ${null!==t?q`<button type="button" class="pzhc pzbutton" @click="${t}">${i18n.t("Cancel")}</button>`:""}
    ${null!==e?q`<button type="button" class="pzhc pzbutton" @click="${e}">${i18n.t("Save")}</button>`:""}
    <button type="button" data-submit="submit" class="Strong pzhc pzbutton">${i18n.t("Submit")}</button>
  </div>
`)(a,i)}
`,Ia=(t,e,a,i)=>q`
  <div>${Da(t,e,!0,i)}</div>
  ${(t=>null===t?null:q`
  <div class="action-button-area">
  ${null!==t?q`<button type="button" class="pzhc pzbutton Strong" @click="${t}">${i18n.t("Close")}</button>`:""}
  </div>`)(a)}
`;class _a extends Ye{displayContent(){if(this.bShowSave="false",""!==this.errorMsg){if(-1===this.errorMsg.indexOf("The provided authorization code is expired"))return Te(this.errorMsg,"true"===this.bShowCancel?this.resetError:null);window.history.replaceState({},"","")}if(window.history.state&&window.history.state.token&&(this.token=window.history.state.token),("oauth2password"===this.authentication||"oauth2clientcredentials"===this.authentication||"custombearer"===this.authentication)&&""===this.token)return this.sendData("authenticate",{}),null;if("authorizationcode"===this.authentication&&""===this.token)return window.history.state&&window.history.state.code?(this.sendData("authenticate",{}),null):((t,e)=>{let a=`${t}/PRRestService/oauth2/v1/authorize`;const i=t.indexOf("/prweb");return-1!==i&&(a=`${t.substring(0,i+6)}/PRRestService/oauth2/v1/authorize`),q`<div class='flex flex-col'><h2>${i18n.t("Log in to the application with one of the following:")}</h2>
  <div class='flex layout-content-inline_middle'>${Ze(Rt().then((t=>{const{verifier:i,challenge:n}=t,s=`response_type=code&scope=openid&code_challenge=${n}&code_challenge_method=S256&response_mode=query&enable_psyncId=true&authentication_service=pega`,o=`${a}?client_id=${e}&redirect_uri=${encodeURIComponent(Je())}&${s}&state=${i}`,r=q`<Button class="pzhc pzbutton" onclick="window.location='${o}'; return false;">
      ${i18n.t("Pega with full page redirect")}</Button>`,l=q`<Button class="pzhc pzbutton" onclick="n=window.open('${o}', 'foo',
      'width=600,height=600');n.focus(); return false;">${i18n.t("Pega with popup")}</Button>`;return q`${l}${r}`})),q`Loading...`)}</div></div>`})(this.url,this.clientid);if(this.casetypes||"createNewWork"!==this.action&&"workList"!==this.action&&"taskList"!==this.action&&"dataView"!==this.action)"createNewWork"===this.action&&""===this.caseID&&this.casetypes&&this.casetypes[this.casetype]?(this.content=this.initialContent,this.pageInstructions=[],this.caseID="",this.data={},this.casedata={},this.sendData("newwork",{id:this.casetype})):""===this.name&&("openAssignment"===this.action&&""===this.assignmentID&&(this.assignmentID=this.caseID),""!==this.assignmentID?this.fetchData("assignment",{id:this.assignmentID}):""!==this.caseID&&this.fetchData("view",{id:this.caseID,actionid:"pyReview"}));else if(this.fetchData("dataviews",{id:"D_pxAvailableCaseTypesForPortal",actionid:this.portalName}),this.sendData("dataviews",{id:"D_pyMyWorkList"}),"createNewWork"===this.action)this.bShowNew=!0;else if(("workList"===this.action||"taskList"===this.action||"dataView"===this.action)&&(this.bShowCancel="true","dataView"===this.action)){const t={};if(this.dataviewParams)for(const e of this.dataviewParams.params)e.name&&e.value&&(t[e.name.trim()]=e.value.trim());this.sendData("dataviews",{id:this.dataviewParams.name,content:{dataViewParameters:t}})}if(this.bShowConfirm){this.data.ID.split(" ")[1];return Se(this.casedata.name,0,this.casepyStatusWork,"true"===this.bShowAttachments?this.displayAttachments:null)}return""!==this.caseID||""!==this.assignmentID||this.bShowNew?q`
        ${ka(this.name,this.data,this.casedata,this.casepyStatusWork,this.numAttachments,this.displayActions,this.runAction,this.openCase,"true"===this.bShowAttachments?this.displayAttachments:null,this.bShowActions)}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
        <form id="case-data"></form>
      `:"workList"===this.action?Ee(this.headingLabel,this.cases,this.displayCasesTypes,this.reloadWorkList,"true"===this.bShowCreate?this.createCase:null,this.openCase):"taskList"===this.action?Le(this.headingLabel,this.cases,this.displayCasesTypes,this.reloadWorkList,"true"===this.bShowCreate?this.createCase:null,this.openCase):"dataView"===this.action?Re(this.headingLabel,this.dataviewParams,this.data,this.reloadWorkList,this.openCase):null}renderMainLayout=(t,e)=>Aa(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this);renderReviewLayout=(t,e)=>Ia(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,this);genPageValidationErrors=t=>(t=>t.errorDetails?q`
    <ul>
      ${t.errorDetails.map((t=>"Error_Validation_Fail"===t.message||"Validation failed: Errors Detected."===t.message?null:q`<li>${i18n.t(t.localizedValue)}</li>`))}
    </ul>`:null)(t);showDataList=t=>Ie(t);genActionsList=(t,e)=>((t,e)=>{const a=[],i=Object.entries(e.actions);for(const e of i)e[1].name!==t&&a.push(q`
          <li role="menuitem" tabindex="-1" data-value="${e[1].ID}">${i18n.t(e[1].name)}</li>
        `);return q`
    ${a}
  `})(t,e);displayCasesTypes=()=>(t=>{const e=[],a=Object.entries(t);for(const t of a)e.push(q`
        <li role="menuitem" tabindex="-1" data-value="${t[0]}">${i18n.t(t[1].name)}</li>
      `);return q`
    ${e}
  `})(this.casetypes);genLoadingIndicator=()=>ot();setInlineError=(t,e)=>{t.setCustomValidity(mt(e)),t.classList.add("error-field"),t.reportValidity()};validateForm=t=>t.checkValidity();reportFormValidity=t=>t.reportValidity();clickHandler=t=>{let e=t.target;"path"===e.tagName&&(e=e.parentNode),"svg"===e.tagName&&(e=e.parentNode);const a=e.getAttribute("data-action-click");e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e),Dt(e,"click")?(this.refreshAssignment(e,kt(e,"click")),t.preventDefault()):"BUTTON"===e.tagName&&(t.preventDefault(),null!==e.getAttribute("data-submit")&&"save"!==e.getAttribute("data-submit")?this.submitForm(t,e.getAttribute("data-submit")):("addRow"===a||"deleteRow"===a)&&this.refreshAssignment(e))};changeHandler=t=>{let e=t.target;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e.setCustomValidity(""),e.classList.remove("error-field"),Dt(e,"change")||this.isDeclarativeTarget)this.refreshAssignment(e,kt(e,"change"));else if(this.refreshOnChange){const t=this.getRenderRoot().querySelector("#case-data");_t(t,this.content,this.pageInstructions,this.data.data.caseInfo.content),it(Aa(this.data.uiResources.resources.views[this.casedata.content.pyViewName],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),t)}};keyupHandler=t=>{const e=t.target;"TEXTAREA"===e.tagName&&(e.style.cssText="height:auto; padding:0;",e.style.cssText=`height:${e.scrollHeight}px`)};focusHandler=t=>{const e=t.target;e.classList.contains("combobox")&&!e.classList.contains("loaded")?this.getData(e.getAttribute("data-pageid"),e):"INPUT"===e.tagName&&e.classList.contains("location")&&!e.classList.contains("pac-target-input")&&window.google&&window.google.maps&&window.google.maps.places&&new window.google.maps.places.Autocomplete(e)};async firstUpdated(){const t=this.getRenderRoot();t&&(t.addEventListener("click",this.clickHandler),t.addEventListener("focusin",this.focusHandler),t.addEventListener("change",this.changeHandler),t.addEventListener("keyup",this.keyupHandler))}}customElements.define("pega-mashup-v2",class extends _a{createRenderRoot(){return this.attachShadow({mode:"open"})}getRenderRoot(){return this.shadowRoot}render(){return q`
      ${ze()} ${this.displayContent()}
    `}});customElements.define("pega-mashup-light-v2",class extends _a{createRenderRoot(){return this}getRenderRoot(){return this}render(){return q`
      ${this.displayContent()}
    `}})}();
