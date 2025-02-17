var PegaGovUK=function(t){"use strict";
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const e=globalThis,a=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;let n=class{constructor(t,e,a){if(this._$cssResult$=!0,a!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(a&&void 0===t){const a=void 0!==e&&1===e.length;a&&(t=i.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),a&&i.set(e,t))}return t}toString(){return this.cssText}};const r=a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const a of t.cssRules)e+=a.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,{is:o,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:h}=Object,p=globalThis,g=p.trustedTypes,f=g?g.emptyScript:"",m=p.reactiveElementPolyfillSupport,$=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let a=t;switch(e){case Boolean:a=null!==t;break;case Number:a=null===t?null:Number(t);break;case Object:case Array:try{a=JSON.parse(t)}catch(t){a=null}}return a}},y=(t,e)=>!o(t,e),b={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class C extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const a=Symbol(),s=this.getPropertyDescriptor(t,a,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,a){const{get:s,set:i}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const n=s?.call(this);i.call(this,e),this.requestUpdate(t,n,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=h(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...d(t),...u(t)];for(const a of e)this.createProperty(a,t[a])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,a]of e)this.elementProperties.set(t,a)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const a=this._$Eu(t,e);void 0!==a&&this._$Eh.set(a,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const a=new Set(t.flat(1/0).reverse());for(const t of a)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const a=e.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const a of e.keys())this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(a)t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const a of s){const s=document.createElement("style"),i=e.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=a.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,a){this._$AK(t,a)}_$EC(t,e){const a=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,a);if(void 0!==s&&!0===a.reflect){const i=(void 0!==a.converter?.toAttribute?a.converter:v).toAttribute(e,a.type);this._$Em=t,null==i?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,e){const a=this.constructor,s=a._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=a.getPropertyOptions(s),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=s,this[s]=i.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,a){if(void 0!==t){if(a??=this.constructor.getPropertyOptions(t),!(a.hasChanged??y)(this[t],e))return;this.P(t,e,a)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,a){this._$AL.has(t)||this._$AL.set(t,e),!0===a.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,a]of t)!0!==a.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],a)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[$("elementProperties")]=new Map,C[$("finalized")]=new Map,m?.({ReactiveElement:C}),(p.reactiveElementVersions??=[]).push("2.0.4");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const _=globalThis,w=_.trustedTypes,k=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",D=`lit$${Math.random().toFixed(9).slice(2)}$`,I="?"+D,x=`<${I}>`,S=document,E=()=>S.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,N="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,P=/>/g,U=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),M=/'/g,q=/"/g,H=/^(?:script|style|textarea|title)$/i,z=(t=>(e,...a)=>({_$litType$:t,strings:e,values:a}))(1),j=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),F=new WeakMap,B=S.createTreeWalker(S,129);function W(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const Z=(t,e)=>{const a=t.length-1,s=[];let i,n=2===e?"<svg>":3===e?"<math>":"",r=L;for(let e=0;e<a;e++){const a=t[e];let o,l,c=-1,d=0;for(;d<a.length&&(r.lastIndex=d,l=r.exec(a),null!==l);)d=r.lastIndex,r===L?"!--"===l[1]?r=O:void 0!==l[1]?r=P:void 0!==l[2]?(H.test(l[2])&&(i=RegExp("</"+l[2],"g")),r=U):void 0!==l[3]&&(r=U):r===U?">"===l[0]?(r=i??L,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,o=l[1],r=void 0===l[3]?U:'"'===l[3]?q:M):r===q||r===M?r=U:r===O||r===P?r=L:(r=U,i=void 0);const u=r===U&&t[e+1].startsWith("/>")?" ":"";n+=r===L?a+x:c>=0?(s.push(o),a.slice(0,c)+A+a.slice(c)+D+u):a+D+(-2===c?e:u)}return[W(t,n+(t[a]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class K{constructor({strings:t,_$litType$:e},a){let s;this.parts=[];let i=0,n=0;const r=t.length-1,o=this.parts,[l,c]=Z(t,e);if(this.el=K.createElement(l,a),B.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=B.nextNode())&&o.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(A)){const e=c[n++],a=s.getAttribute(t).split(D),r=/([.?@])?(.*)/.exec(e);o.push({type:1,index:i,name:r[2],strings:a,ctor:"."===r[1]?Q:"?"===r[1]?tt:"@"===r[1]?et:Y}),s.removeAttribute(t)}else t.startsWith(D)&&(o.push({type:6,index:i}),s.removeAttribute(t));if(H.test(s.tagName)){const t=s.textContent.split(D),e=t.length-1;if(e>0){s.textContent=w?w.emptyScript:"";for(let a=0;a<e;a++)s.append(t[a],E()),B.nextNode(),o.push({type:2,index:++i});s.append(t[e],E())}}}else if(8===s.nodeType)if(s.data===I)o.push({type:2,index:i});else{let t=-1;for(;-1!==(t=s.data.indexOf(D,t+1));)o.push({type:7,index:i}),t+=D.length-1}i++}}static createElement(t,e){const a=S.createElement("template");return a.innerHTML=t,a}}function J(t,e,a=t,s){if(e===j)return e;let i=void 0!==s?a._$Co?.[s]:a._$Cl;const n=T(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),void 0===n?i=void 0:(i=new n(t),i._$AT(t,a,s)),void 0!==s?(a._$Co??=[])[s]=i:a._$Cl=i),void 0!==i&&(e=J(t,i._$AS(t,e.values),i,s)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:a}=this._$AD,s=(t?.creationScope??S).importNode(e,!0);B.currentNode=s;let i=B.nextNode(),n=0,r=0,o=a[0];for(;void 0!==o;){if(n===o.index){let e;2===o.type?e=new X(i,i.nextSibling,this,t):1===o.type?e=new o.ctor(i,o.name,o.strings,this,t):6===o.type&&(e=new at(i,this,t)),this._$AV.push(e),o=a[++r]}n!==o?.index&&(i=B.nextNode(),n++)}return B.currentNode=S,s}p(t){let e=0;for(const a of this._$AV)void 0!==a&&(void 0!==a.strings?(a._$AI(t,a,e),e+=a.strings.length-2):a._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,a,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=a,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),T(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==j&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:a}=t,s="number"==typeof a?this._$AC(t):(void 0===a.el&&(a.el=K.createElement(W(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new G(s,this),a=t.u(this.options);t.p(e),this.T(a),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new K(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let a,s=0;for(const i of t)s===e.length?e.push(a=new X(this.O(E()),this.O(E()),this,this.options)):a=e[s],a._$AI(i),s++;s<e.length&&(this._$AR(a&&a._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,a,s,i){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=V}_$AI(t,e=this,a,s){const i=this.strings;let n=!1;if(void 0===i)t=J(this,t,e,0),n=!T(t)||t!==this._$AH&&t!==j,n&&(this._$AH=t);else{const s=t;let r,o;for(t=i[0],r=0;r<i.length-1;r++)o=J(this,s[a+r],e,r),o===j&&(o=this._$AH[r]),n||=!T(o)||o!==this._$AH[r],o===V?t=V:t!==V&&(t+=(o??"")+i[r+1]),this._$AH[r]=o}n&&!s&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Q extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class tt extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class et extends Y{constructor(t,e,a,s,i){super(t,e,a,s,i),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??V)===j)return;const a=this._$AH,s=t===V&&a!==V||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,i=t!==V&&(a===V||s);s&&this.element.removeEventListener(this.name,this,a),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class at{constructor(t,e,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const st=_.litHtmlPolyfillSupport;st?.(K,X),(_.litHtmlVersions??=[]).push("3.2.1");const it=(t,e,a)=>{const s=a?.renderBefore??e;let i=s._$litPart$;if(void 0===i){const t=a?.renderBefore??null;s._$litPart$=i=new X(e.insertBefore(E(),t),t,void 0,a??{})}return i._$AI(t),i
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */};class nt extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=it(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return j}}nt._$litElement$=!0,nt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:nt});const rt=globalThis.litElementPolyfillSupport;rt?.({LitElement:nt}),(globalThis.litElementVersions??=[]).push("4.1.1");const ot=()=>z`
<span class="loading">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</span>
`,lt=()=>z`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1140625,3.96875 C22.1140625,3.96875 22.1140625,3.96875 22.1140625,3.96875 C22.1140625,3.96875 17.46875,3.96875 17.46875,3.96875 C17.46875,3.96875 16.9898437,2.14921875 16.9898437,2.14921875 C16.9421875,1.8140625 16.7507812,1.57421875 16.5109375,1.33515625 C16.2234375,1.09609375 15.8882813,1 15.553125,1 C15.553125,1 15.553125,1 15.553125,1 C15.553125,1 9.03984375,1 9.03984375,1 C8.7046875,1 8.4171875,1.09609375 8.1296875,1.2875 C7.8421875,1.52734375 7.65078125,1.76640625 7.603125,2.1015625 C7.603125,2.1015625 7.603125,2.1015625 7.603125,2.1015625 C7.603125,2.1015625 7.12421875,3.96953125 7.12421875,3.96953125 C7.12421875,3.96953125 2.47890625,3.96953125 2.47890625,3.96953125 C2.14375,3.96953125 2,4.11328125 2,4.4484375 C2,4.78359375 2.14375,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 2.47890625,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 4.01171875,4.92734375 4.01171875,4.92734375 C4.01171875,4.92734375 4.921875,23.1742188 4.921875,23.1742188 C4.96953125,23.5570312 5.11328125,23.8929688 5.40078125,24.1320313 C5.63984375,24.4195312 5.97578125,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 6.40625,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 18.2359375,24.5632812 18.2359375,24.5632812 C18.6671875,24.5632812 19.0023438,24.4195312 19.2898438,24.1320313 C19.5289063,23.8929688 19.6726562,23.5570312 19.7210938,23.1742188 C19.7210938,23.1742188 19.7210938,23.1742188 19.7210938,23.1742188 C19.7210938,23.1742188 20.63125,4.92734375 20.63125,4.92734375 C20.63125,4.92734375 22.115625,4.92734375 22.115625,4.92734375 C22.4507812,4.92734375 22.5945312,4.78359375 22.5945312,4.4484375 C22.5945312,4.11328125 22.4507812,3.96953125 22.115625,3.96953125 L22.1140625,3.96875 Z M8.17734375,3.96875 C8.17734375,3.96875 8.56015625,2.38828125 8.56015625,2.38828125 C8.6078125,2.1484375 8.79921875,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 9.0390625,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 15.5523437,2.00546875 15.5523437,2.00546875 C15.7914062,2.00546875 15.9835937,2.14921875 16.03125,2.38828125 C16.03125,2.38828125 16.03125,2.38828125 16.03125,2.38828125 C16.03125,2.38828125 16.4140625,3.96875 16.4140625,3.96875 C16.4140625,3.96875 8.1765625,3.96875 8.1765625,3.96875 L8.17734375,3.96875 Z M19.6710938,4.9265625 C19.6710938,4.9265625 18.7609375,23.1257812 18.7609375,23.1257812 C18.7132812,23.4132812 18.521875,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 18.234375,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 6.4046875,23.5570312 6.4046875,23.5570312 C6.1171875,23.5570312 5.92578125,23.4132812 5.878125,23.1257812 C5.878125,23.1257812 5.878125,23.1257812 5.878125,23.1257812 C5.878125,23.1257812 4.96796875,4.9265625 4.96796875,4.9265625 C4.96796875,4.9265625 19.6710938,4.9265625 19.6710938,4.9265625 L19.6710938,4.9265625 Z M8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,18.1929687 8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,10.3382812 8.84765625,10.3382812 C8.84765625,10.003125 9.0390625,9.859375 9.37421875,9.859375 C9.37421875,9.859375 9.37421875,9.859375 9.37421875,9.859375 C9.709375,9.859375 9.853125,10.003125 9.853125,10.3382812 C9.853125,10.3382812 9.853125,10.3382812 9.853125,10.3382812 C9.853125,10.3382812 9.853125,18.1929687 9.853125,18.1929687 C9.853125,18.528125 9.709375,18.671875 9.37421875,18.671875 C9.37421875,18.671875 9.37421875,18.671875 9.37421875,18.671875 C9.0390625,18.671875 8.84765625,18.528125 8.84765625,18.1929687 Z M14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,18.1929687 14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,10.3382812 14.7382812,10.3382812 C14.7382812,10.003125 14.8820313,9.859375 15.2171875,9.859375 C15.2171875,9.859375 15.2171875,9.859375 15.2171875,9.859375 C15.5523437,9.859375 15.74375,10.003125 15.74375,10.3382812 C15.74375,10.3382812 15.74375,10.3382812 15.74375,10.3382812 C15.74375,10.3382812 15.74375,18.1929687 15.74375,18.1929687 C15.74375,18.528125 15.5523437,18.671875 15.2171875,18.671875 C15.2171875,18.671875 15.2171875,18.671875 15.2171875,18.671875 C14.8820313,18.671875 14.7382812,18.528125 14.7382812,18.1929687 Z M11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,19.1507813 11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,9.38046875 11.8164062,9.38046875 C11.8164062,9.0453125 11.9601563,8.85390625 12.2953125,8.85390625 C12.6304687,8.85390625 12.7742187,9.0453125 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,9.38046875 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,19.1507813 12.7742187,19.1507813 C12.7742187,19.4859375 12.6304687,19.6773437 12.2953125,19.6773437 C11.9601563,19.6773437 11.8164062,19.4859375 11.8164062,19.1507813 Z"/>
</svg>`,ct=()=>z`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.5226562,11.6265625 C20.6664062,11.6265625 20.7617188,11.6742188 20.8578125,11.7703125 C20.9539062,11.8664063 21.0015625,11.9617188 21.0015625,12.1054688 C21.0015625,12.2492188 20.9539062,12.3445313 20.8578125,12.440625 C20.8578125,12.440625 20.8578125,12.440625 20.8578125,12.440625 C20.8578125,12.440625 13.2429687,20.0554687 13.2429687,20.0554687 C12.1414062,21.109375 10.8484375,21.6359375 9.41171875,21.6359375 C7.975,21.6359375 6.68203125,21.109375 5.58046875,20.0554687 C5.58046875,20.0554687 5.58046875,20.0554687 5.58046875,20.0554687 C4.5265625,19.0015625 4,17.75625 4,16.271875 C4,16.271875 4,16.271875 4,16.271875 C4,14.8351563 4.5265625,13.5421875 5.58046875,12.440625 C5.58046875,12.440625 5.58046875,12.440625 5.58046875,12.440625 C5.58046875,12.440625 14.9671875,3.14921875 14.9671875,3.14921875 C15.7335937,2.3828125 16.64375,2 17.7453125,2 C18.846875,2 19.7570312,2.3828125 20.5234375,3.14921875 C20.5234375,3.14921875 20.5234375,3.14921875 20.5234375,3.14921875 C21.2898437,3.86796875 21.6726562,4.77734375 21.6726562,5.87890625 C21.6726562,5.87890625 21.6726562,5.87890625 21.6726562,5.87890625 C21.6726562,6.98046875 21.2898437,7.890625 20.5234375,8.65703125 C20.5234375,8.65703125 20.5234375,8.65703125 20.5234375,8.65703125 C20.5234375,8.65703125 11.8546875,17.2773438 11.8546875,17.2773438 C11.3757813,17.75625 10.8007812,17.9960938 10.1304687,17.9960938 C10.1304687,17.9960938 10.1304687,17.9960938 10.1304687,17.9960938 C9.5078125,17.9960938 8.88515625,17.7570313 8.35859375,17.2773438 C8.35859375,17.2773438 8.35859375,17.2773438 8.35859375,17.2773438 C7.8796875,16.7984375 7.63984375,16.2234375 7.63984375,15.553125 C7.63984375,14.8828125 7.87890625,14.3078125 8.35859375,13.8289062 C8.35859375,13.8289062 8.35859375,13.8289062 8.35859375,13.8289062 C8.35859375,13.8289062 16.6921875,5.54375 16.6921875,5.54375 C16.7882812,5.44765625 16.93125,5.4 17.075,5.4 C17.075,5.4 17.075,5.4 17.075,5.4 C17.21875,5.4 17.3140625,5.44765625 17.4101562,5.54375 C17.50625,5.63984375 17.5539062,5.73515625 17.5539062,5.87890625 C17.5539062,5.87890625 17.5539062,5.87890625 17.5539062,5.87890625 C17.5539062,6.02265625 17.50625,6.16640625 17.4101562,6.26171875 C17.4101562,6.26171875 17.4101562,6.26171875 17.4101562,6.26171875 C17.4101562,6.26171875 9.0765625,14.4992187 9.0765625,14.4992187 C8.7890625,14.7867187 8.6453125,15.121875 8.6453125,15.553125 C8.6453125,15.984375 8.7890625,16.3195313 9.0765625,16.6070312 C9.3640625,16.8945312 9.69921875,17.0382813 10.1304687,17.0382813 C10.1304687,17.0382813 10.1304687,17.0382813 10.1304687,17.0382813 C10.5132812,17.0382813 10.8492187,16.8945312 11.1359375,16.6070312 C11.1359375,16.6070312 11.1359375,16.6070312 11.1359375,16.6070312 C11.1359375,16.6070312 19.8523437,7.98671875 19.8523437,7.98671875 C20.4273437,7.41171875 20.7140625,6.69375 20.7140625,5.8796875 C20.7140625,5.8796875 20.7140625,5.8796875 20.7140625,5.8796875 C20.7140625,5.065625 20.4265625,4.3953125 19.8523437,3.8203125 C19.8523437,3.8203125 19.8523437,3.8203125 19.8523437,3.8203125 C19.2296875,3.2453125 18.5117187,2.95859375 17.7453125,2.95859375 C17.7453125,2.95859375 17.7453125,2.95859375 17.7453125,2.95859375 C16.93125,2.95859375 16.2609375,3.24609375 15.6859375,3.8203125 C15.6859375,3.8203125 15.6859375,3.8203125 15.6859375,3.8203125 C15.6859375,3.8203125 6.29921875,13.159375 6.29921875,13.159375 C5.4375,13.9734375 5.00625,14.9789062 5.00625,16.2726562 C5.00625,16.2726562 5.00625,16.2726562 5.00625,16.2726562 C5.00625,17.5179688 5.4375,18.5234375 6.29921875,19.3375 C6.29921875,19.3375 6.29921875,19.3375 6.29921875,19.3375 C7.1609375,20.1992188 8.21484375,20.6304688 9.4125,20.6304688 C9.4125,20.6304688 9.4125,20.6304688 9.4125,20.6304688 C10.7054687,20.6304688 11.7117187,20.1992188 12.5257812,19.3375 C12.5257812,19.3375 12.5257812,19.3375 12.5257812,19.3375 C12.5257812,19.3375 20.1882812,11.7703125 20.1882812,11.7703125 C20.284375,11.6742188 20.3796875,11.6265625 20.5234375,11.6265625 L20.5226562,11.6265625 Z"/>
</svg>`,dt=()=>z`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1632813,6.753125 C22.1632813,6.753125 22.1632813,6.753125 22.1632813,6.753125 C22.1632813,6.753125 15.8414062,0.43125 15.8414062,0.43125 C15.6023437,0.14375 15.21875,0 14.7875,0 C14.7875,0 14.7875,0 14.7875,0 C14.7875,0 3.48515625,0 3.48515625,0 C3.05390625,0 2.71875,0.14375 2.43125,0.43125 C2.14375,0.71875 2,1.05390625 2,1.48515625 C2,1.48515625 2,1.48515625 2,1.48515625 C2,1.48515625 2,23.0367188 2,23.0367188 C2,23.4679688 2.14375,23.803125 2.43125,24.090625 C2.71875,24.378125 3.05390625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 3.48515625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 21.109375,24.521875 21.109375,24.521875 C21.540625,24.521875 21.8757812,24.378125 22.1632813,24.090625 C22.4507812,23.803125 22.5945312,23.4679688 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,23.0367188 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,7.80703125 22.5945312,7.80703125 C22.5945312,7.37578125 22.4507812,7.040625 22.1632813,6.753125 Z M15.6976563,1.6765625 C15.6976563,1.6765625 20.8703125,6.84921875 20.8703125,6.84921875 C20.8703125,6.84921875 16.225,6.84921875 16.225,6.84921875 C15.8898438,6.84921875 15.7460938,6.70546875 15.7460938,6.3703125 C15.7460938,6.3703125 15.7460938,6.3703125 15.7460938,6.3703125 C15.7460938,6.3703125 15.6984375,1.6765625 15.6984375,1.6765625 L15.6976563,1.6765625 Z M21.6367188,7.8546875 C21.6367188,7.8546875 21.6367188,23.0367188 21.6367188,23.0367188 C21.6367188,23.371875 21.4453125,23.515625 21.1101563,23.515625 C21.1101563,23.515625 21.1101563,23.515625 21.1101563,23.515625 C21.1101563,23.515625 3.4859375,23.515625 3.4859375,23.515625 C3.15078125,23.515625 2.959375,23.371875 2.959375,23.0367188 C2.959375,23.0367188 2.959375,23.0367188 2.959375,23.0367188 C2.959375,23.0367188 2.959375,1.48515625 2.959375,1.48515625 C2.959375,1.15 3.15078125,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 3.4859375,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 14.740625,0.95859375 14.740625,0.95859375 C14.740625,0.95859375 14.740625,6.3703125 14.740625,6.3703125 C14.740625,6.8015625 14.884375,7.13671875 15.171875,7.42421875 C15.459375,7.71171875 15.7945313,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 16.2257813,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 21.6375,7.85546875 21.6375,7.85546875 L21.6367188,7.8546875 Z"/>
</svg>`,ut=t=>`0${t}`.slice(-2),ht=t=>`0${t}`.slice(-4),pt=t=>{if(t.endsWith(" GMT")&&23===t.length)return new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T${t.substring(9,11)}:${t.substring(11,13)}:${t.substring(13,19)}Z`);if(8===t.length){return new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T00:00:00.000Z`)}if(10===t.length&&2===t.indexOf("/")){return new Date(`${t.substring(6,10)}-${t.substring(0,2)}-${t.substring(3,5)}T00:00:00.000Z`)}if(10===t.length&&4===t.indexOf("-")){return new Date(`${t}T00:00:00.000Z`)}return null},gt=t=>t&&"string"==typeof t?t.replace(/&amp;|&lt;|&gt;|&#39;|&#40;|&#41;|&quot;/g,(t=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&#40;":"(","&#41;":")","&quot;":'"'}[t]||t))):"",ft=(t,e,a,s,i)=>{if("string"!=typeof e)return;if(s){const t=$t(s,e);if(t===i||`${t}`==`${i}`||null===t&&""===i)return;mt(s,e,i)}const n=e.lastIndexOf(".");if(-1===n)return void(t[e]=i);if(!a)return void mt(t,e,i);const r={};let o=e.substring(0,n);const l=o.lastIndexOf("(");if(-1===l)r[e.substring(n+1)]=i,a.push({instruction:"UPDATE",target:o,content:r});else{const t=o.lastIndexOf(")"),s=o.substring(l+1,t);o=o.substring(0,l),mt(r,e.substring(t+2),i),a.push({instruction:"UPDATE",target:o,listIndex:parseInt(s,10),content:r})}},mt=(t,e,a)=>{if("string"!=typeof e)return;const s=e.split(".");let i=t;for(const t in s){let e=s[t];const n=e.indexOf("(");if(-1===n)t<s.length-1?void 0===i[e]&&(i[e]={}):i[e]=a,i=i[e];else{const t=e.substring(n+1,e.length-1);e=e.substring(0,n),void 0===i[e]&&(i[e]=[]);for(let a=i[e].length;a<t;a++)i[e].push({});i=i[e][t-1]}}},$t=(t,e)=>{if("string"!=typeof e||""===e)return null;let a=e;0===e.indexOf(".")&&(a=e.substring(1));let s=t;const i=a.split(".");for(const t in i){const e=i[t],a=e.indexOf("(");if(-1===a){if(void 0===s[e])return null;s=s[e]}else{const t=e.substring(a+1,e.length-1),i=s[e.substring(0,a)];if(!(i&&Array.isArray(i)&&i.length>=t))return null;s=i[t-1]}}return s},vt=t=>{for(const e in t)"object"==typeof t[e]?vt(t[e]):"string"==typeof t[e]&&(t[e]="")},yt=(t,e)=>{const a=t.getAttribute(`data-action-${e}`);return!(!a||"postValue"!==a&&0!==a.indexOf("refresh"))},bt=(t,e)=>{const a=t.getAttribute(`data-action-${e}`);return a&&0===a.indexOf("refresh")?a.replace("refresh-",""):""};function Ct(t,e,a){try{switch(e){case">":return parseInt(t,10)>parseInt(a,10);case"<":return parseInt(t,10)<parseInt(a,10);case">=":return parseInt(t,10)>=parseInt(a,10);case"<=":return parseInt(t,10)<=parseInt(a,10);case"==":return`${t}`==`${a}`;case"!=":return`${t}`!=`${a}`}}catch{}return!1}const _t=(t,e,a,s)=>{if(t.startsWith("@E ")){const a=t.replace("@E ","").split("&&");for(const t in a){const i=a[t].trim().match(/[\w.]+|[><=!]+|'[^']+'/g);if(3===i.length){const t=""===s?e[i[0].substring(1)]:$t(e,s+i[0]);if(void 0!==t&&!Ct(t,i[1],i[2].replace(/^'|'$/g,"")))return!1}else if(2===i.length&&"IS_NOT_NULL"===i[1]){const t=""===s?e[i[0].substring(1)]:$t(e,s+i[0]);if(void 0!==t&&!Ct(t,"!=",""))return!1}}}else if(t.startsWith("@W ")){const e=t.replace("@W ","").split("&&"),s=a?.data?.uiResources?.context_data?.caseInfo?.content?.summary_of_when_conditions__;if(s)for(const t in e){if(!s[e[t]])return!1}}return!0},wt=(t,e,a,s)=>{for(const i of t.elements)if("INPUT"===i.tagName||"TEXTAREA"===i.tagName||"SELECT"===i.tagName){const t=i.getAttribute("data-ref");if(null!==t&&"pyID"!==t)if("INPUT"===i.tagName){const n=i.getAttribute("type");if(i.classList.contains("input-date-day")||i.classList.contains("input-date-month")||i.classList.contains("input-date-year")){if(i.classList.contains("input-date-day")){const n=i.closest(".input-date").parentNode,r=n.querySelector(".input-date-month"),o=n.querySelector(".input-date-year");if(null!==r&&null!==o&&""!==i.value&&""!==r.value&&""!==o.value){const n=`${ut(r.value)}/${ut(i.value)}/${ht(o.value)}`;ft(e,t,a,s,n)}}}else if("checkbox"===n)ft(e,t,a,s,i.checked);else if("radio"===n)i.checked&&ft(e,t,a,s,i.value);else if("tel"===n){let n=i.value;"SELECT"===i.parentNode.firstElementChild.tagName&&"field-countrycode"===i.parentNode.firstElementChild.className&&(n=i.parentNode.firstElementChild.value+n),ft(e,t,a,s,n)}else if("date"===n){let n;i.valueAsDate&&(n=new Date(i.valueAsDate)),n&&n instanceof Date&&n.getTime()==n.getTime()||(n=new Date(i.value)),n&&n instanceof Date&&n.getTime()==n.getTime()?ft(e,t,a,s,`${n.getUTCFullYear()}-${ut(n.getUTCMonth()+1)}-${ut(n.getUTCDate())}`):ft(e,t,a,s,i.value)}else ft(e,t,a,s,i.value)}else ft(e,t,a,s,i.value)}if(t&&t.querySelectorAll){const n=t.querySelectorAll("[contenteditable]");for(let t=0;t<n.length;t++){const r=n[t],o=r.getAttribute("data-ref");ft(e,o,a,s,(i=r.innerHTML)&&"string"==typeof i?i.replace(/[&<>'"]/g,(t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","(":"&#40;",")":"&#41;",'"':"&quot;"}[t]||t))):"")}}var i},kt=(t,e,a,s,i)=>{if(null==s)return null;let n;const r=`${Math.random().toString(36).substr(2,9)}`,o=document.createElement("ul");o.setAttribute("id",`menu-overlay-${r}`),o.setAttribute("role","menu"),o.setAttribute("aria-labelledby",`menubutton-${r}`),o.setAttribute("tabindex","-1");const l=()=>{document.body.removeEventListener("click",d),document.body.removeEventListener("keydown",c),o&&(o.previousElementSibling&&(o.previousElementSibling.setAttribute("aria-expanded","false"),o.previousElementSibling.focus()),o.remove())},c=t=>{38===t.keyCode?(n=n.previousElementSibling,null===n&&(n=o.lastElementChild),n.focus()):40===t.keyCode?(n=n.nextElementSibling,null===n&&(n=o.firstElementChild),n.focus()):27===t.keyCode||9===t.keyCode?l():13===t.keyCode&&(s(t),l())},d=t=>{if(t){let e=t.target;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&e.nextElementSibling===o)return;e.parentNode===o&&s(t),l()}},u=t=>{if("keydown"===t.type&&40!==t.keyCode)return;if(t.preventDefault(),t.stopPropagation(),"blur"===t.type)return void d(t);const e=t.currentTarget;"BUTTON"!==e.tagName?(s(t),l()):null===e.nextElementSibling?(e.parentNode.appendChild(o),e.setAttribute("aria-expanded","true"),it(a(),o),n=e.nextElementSibling.firstElementChild,n.focus(),document.body.addEventListener("click",d),document.body.addEventListener("keydown",c)):l()};return z`
    <div class="button-menu">
    <button type='button' id="${`menubutton-${r}`}" aria-haspopup="true" aria-controls="${`menu-overlay-${r}`}" aria-expanded="false"
    @click="${u}" @keydown="${u}" @blur="${u}"
    class="${`pzhc pzbutton Simple ${i}`}" aria-label="${i18n.t(e)}">${i18n.t(t)}</button>
    </div>
  `},At=(t,e,a,s,i)=>{let n=0;const r=t=>{if(void 0===t||"string"==typeof t&&""===t)return;if("URL"===e[n].category)return void window.open(t);let a=e[n].fileName;if(void 0===a&&(a=e[n].name),void 0===a&&(a=e[n].pyAttachName),!a)return;const s=window.document.createElement("a");if("Correspondence"===e[n].category){a=`${e[n].name}.html`;const i=`<html><head><title>${e[n].name}</title></head><body>${t}</body></html>`,r=new Blob([i],{type:"text"});s.href=window.URL.createObjectURL(r)}else{const e=function(t){const e=window.atob(t),a=e.length,s=new Uint8Array(a);for(let t=0;t<a;t++){const a=e.charCodeAt(t);s[t]=a}return s}(t),a=new Blob([e],{type:"octet/stream"});s.href=window.URL.createObjectURL(a)}s.download=a,document.body.appendChild(s),s.click(),document.body.removeChild(s)},o=t=>{t.stopPropagation();const a=t.target;n=a.getAttribute("data-id"),s.fetchData.call(s,"attachment",{id:e[n].ID,target:r})},l=a=>{a.preventDefault(),a.stopPropagation();const i=a.target.closest("button");n=i.getAttribute("data-id"),s.sendData.call(s,"deleteattachment",{id:e[n].ID,target:t})},c=r=>{r.stopPropagation();const o=r.target.closest("button");n=parseInt(o.getAttribute("data-id"),10),i.splice(n,1),it(At(t,e,a,s,i),t)},d=t=>{t.stopPropagation(),t.preventDefault();const e=t.target;if(n=e.getAttribute("data-id"),"INPUT"===e.tagName){const t=e.getAttribute("data-prop-id");i[n][t]=e.value}else"SELECT"===e.tagName&&(i[n].category=e.value)},u=e=>{e.preventDefault();const a=e.target,s=e.relatedTarget,i=null===a?null:a.closest(".attach-files"),n=null===s?null:s.closest(".attach-files");if("dragenter"===e.type||"dragover"===e.type?null!=i&&i.classList.add("drop-file-hover"):"dragleave"!==e.type&&"drop"!==e.type||null===n&&null!==i&&i.classList.remove("drop-file-hover"),"drop"===e.type){const s=e.dataTransfer.files;t||(t=a.closest(".attach-files")),p(a,s)}},h=n=>{n&&(n.stopPropagation(),n.preventDefault());for(let n=0;n<i.length;n++){const r=i[n];delete r.editing,r.loading=!0,"URL"===r.type?(e.unshift(r),s.sendData.call(s,"attachments",{id:a,actionid:[r],target:t})):(e.unshift({name:r.displayName,extension:r.extension,loading:!0}),s.sendData.call(s,"uploadattachment",{actionid:r,target:t}))}it(At(t,e,a,s),t)},p=(i,n)=>{const r=[];for(let t=0;t<n.length;t++){const e=n[t];let a=e.name.lastIndexOf(".");-1===a&&(a=e.name.length),e.displayName=e.name.substring(0,a),e.extension=e.name.substring(a+1),e.editing=!0,e.category="File",r.push(e)}it(At(t,e,a,s,r),t)},g=e=>{e.stopPropagation();let a=e.target;if("BUTTON"===a.tagName)return a=e.target.parentNode.parentNode.firstElementChild,void a.click();t||(t=a.closest(".attach-files")),p(a,a.files)},f=i=>{i.stopPropagation();it(At(t,e,a,s,[{type:"URL",category:"URL",name:"",url:"",editing:!0}]),t)},m=i=>{i.stopPropagation(),it(At(t,e,a,s),t)},$=(t,e)=>{let a=new Date(e.createTime);return a=a.toLocaleDateString(void 0,{year:"numeric",month:"numeric",day:"numeric"}),z`
    <div class='list-item-title'>
      <button type='button' class='Light'  data-id="${t}" @click="${o}">${e.name}</button>
      ${e.loading?"":z`
      <span class='list-item-meta'><span>${e.createdBy}</span><span>${a}</span><span>${i18n.t("Category:")} ${e.category}</span></span>`}
    </div>`},v=()=>z`<li role="menuitem" tabindex="-1" data-value="Download">${i18n.t("Download")}</li>
  <li role="menuitem" tabindex="-1" data-value="Delete">${i18n.t("Delete")}</li>`,y=i=>{let o=i.target;if(i.path&&i.path.length>0?o=i.path[0]:i.originalTarget&&(o=i.originalTarget),o){const i=o.getAttribute("data-value"),l=e[n].pzInsKey||e[n].ID;"Download"===i?s.fetchData.call(s,"attachment",{id:l,target:r}):"Delete"===i&&(s.sendData.call(s,"deleteattachment",{id:l,target:t}),it(At(void 0,[],a,s,[]),t))}},b=t=>z`<div class='row-item'>
    <span class='doc-icon'>${dt()}<span>${t.extension}</span></span>
    <div class='list-item-title'><span>${t.pyAttachName||t.name}</span>
    <span class="list-item-meta"><span>${t.pyCategoryName||t.category}</span>
    <span>${t.pxCreateOperator||t.createdBy}</span></span></div>
    ${kt(z`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
<path d="M14.353125,6.353125 C13.9703125,6.7359375 13.4914062,6.928125 12.9640625,6.928125 C12.4367188,6.928125 11.9585938,6.73671875 11.575,6.353125 C11.1921875,5.9703125 11,5.49140625 11,4.9640625 C11,4.43671875 11.1914062,3.95859375 11.575,3.575 C11.9578125,3.1921875 12.4367188,3 12.9640625,3 C13.4914063,3 13.9695312,3.19140625 14.353125,3.575 C14.7359375,3.9578125 14.928125,4.43671875 14.928125,4.9640625 C14.928125,5.49140625 14.7367187,5.96953125 14.353125,6.353125 Z M14.353125,13.7289063 C13.9703125,14.1117188 13.4914062,14.3039063 12.9640625,14.3039063 C12.4367188,14.3039063 11.9585938,14.1125 11.575,13.7289063 C11.1921875,13.3460938 11,12.8671875 11,12.3398438 C11,11.8125 11.1914062,11.334375 11.575,10.9507813 C11.9578125,10.5679688 12.4367188,10.3757813 12.9640625,10.3757813 C13.4914063,10.3757813 13.9695312,10.5671875 14.353125,10.9507813 C14.7359375,11.3335938 14.928125,11.8125 14.928125,12.3398438 C14.928125,12.8671875 14.7367187,13.3453125 14.353125,13.7289063 Z M14.353125,21.1039062 C13.9703125,21.4867187 13.4914062,21.6789062 12.9640625,21.6789062 C12.4367188,21.6789062 11.9585938,21.4875 11.575,21.1039062 C11.1921875,20.7210938 11,20.2421875 11,19.7148438 C11,19.1875 11.1914062,18.709375 11.575,18.3257813 C11.9578125,17.9429688 12.4367188,17.7507813 12.9640625,17.7507813 C13.4914063,17.7507813 13.9695312,17.9421875 14.353125,18.3257813 C14.7359375,18.7085937 14.928125,19.1875 14.928125,19.7148438 C14.928125,20.2421875 14.7367187,20.7203125 14.353125,21.1039062 Z"></path>
</svg>`,"Actions",v,y,"button-action")}
  </div>`,C=(t,e)=>e.loading?z`${$(t,e)}${ot()}`:e.editing?"URL"===e.type?z`
      <div class='flex content-item field-item'>
        <label for='url-name'>Name</label>
        <input type='text' id='url-name' data-prop-id='name' @change="${d}" data-id="${t}" value="${e.name}"/>
      </div>
      <div class='flex content-item field-item'>
        <label for='url-url'>URL</label>
        <input type='text' id='url-url' data-prop-id='url' @change="${d}" data-id="${t}" value="${e.url}"/>
      </div>`:z`
      <input type='text' data-prop-id='displayName' class='flex-all' @change="${d}"
      data-id="${t}" value="${e.displayName}" aria-label='${i18n.t("name")}'/>
      ${((t,e)=>z`
    <select data-id="${t}" @change="${d}" class='flex-all' aria-label='${i18n.t("Category")}'>
    ${s.attachmentcategories.map((t=>z`
      <option ?selected=${t.ID===e}>${t.ID}</option>
    `))}
    </select>`)(t,e.category)}
      <span class='flex-all'>${e.name}</span>
      <span>${Math.round(e.size/1e3)}Kb</span>
      <button type='button' data-id="${t}" @click="${c}" class='pzhc pzbutton Simple'
      aria-label=${i18n.t("Delete")}>${lt()}</button>`:z`${$(t,e)}
    <button type='button' data-id="${t}" @click="${l}" class='pzhc pzbutton Simple'
    aria-label=${i18n.t("Delete")}>${lt()}</button>`,_=t=>{if(!a)return ot();const e=[];if(void 0!==t){const a=Object.entries(t);for(const t of a){let a=t[1].extension;void 0===a&&(a=t[1].type),a||(a=""),a.length>5&&(a=a.substring(0,5)),"URL"===t[1].type&&t[1].editing?e.push(z`<div class='flex layout-content-stacked content-items-maxwidth'>
              ${C(t[0],t[1])}
            </div>`):e.push(z`<div class='row-item'>
              <span class='doc-icon'>${dt()}<span>${a}</span></span>
              ${C(t[0],t[1])}
            </div>`)}}return e.length>0?e:z`<div class='empty'>${i18n.t("no attachments found")}</div>`};if(!t){if(e&&e.length>0&&e[0].pyAttachName){n=0,e[0].extension="";const t=e[0].pyAttachName.split(".");return t.length>1&&(e[0].extension=t[t.length-1]),b(e[0])}return z`<div @dragenter="${u}" @dragover="${u}" @dragleave="${u}"
    @drop="${u}" class='attach-files list-items'>
      <div class="file-upload">
        <input @change="${g}" type="file">
        ${ct()}<span>${i18n.t(" Drag and drop or ")}
        <button type='button' aria-labelledby='${i18n.t("click to attach a file")}' class='Light' @click="${g}">${i18n.t("choose file")}</button>
      </div>
    </div>`}if(t&&t.classList.contains("attach-files")){if(i&&i.length>0)return s.sendData.call(s,"uploadattachment",{actionid:i[0],target:t}),w=i[0],z`<div class='row-item'>
    <span class='doc-icon'>${dt()}<span>${w.extension}</span></span>
    <div class='list-item-title'><span>${w.displayName}</span>${z`<span class="list-item-meta"><span>
    ${i18n.t("Uploading...")}</span></span>`}</div>
  </div>`;if(e&&e.length>0)return b(e[0])}var w;let k="Attachments";return void 0!==i&&i.length>0&&(k="URL"===i[0].type?"Attach a link":"Attach files"),z`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${i18n.t(k)}</h2>
      <div class="flex layout-content-inline_middle margin-l-auto">
        <button type='button' data-action-id='close'
        class="pzhc pzbutton Simple" aria-label="${i18n.t("Close modal")}">${z`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.3375,3 C20.3375,3 21.7742187,4.43671875 21.7742187,4.43671875 C21.7742187,4.43671875 4.43671875,21.4867188 4.43671875,21.4867188 C4.43671875,21.4867188 3,20.19375 3,20.19375 C3,20.19375 20.3375,3 20.3375,3 Z M21.7265625,20.0976563 C21.7265625,20.0976563 20.3859375,21.534375 20.3859375,21.534375 C20.3859375,21.534375 3.00078125,4.3890625 3.00078125,4.3890625 C3.00078125,4.3890625 4.38984375,3 4.38984375,3 C4.38984375,3 21.7273438,20.0976563 21.7273438,20.0976563 L21.7265625,20.0976563 Z"/>
</svg>`}</button>
      </div>
    </div>
    ${void 0!==i&&i.length>0?z`
      <div id="modalcontent" class='attach-files list-items'>
        <div class='upload-content'>${_(i)}</div>
        <div class="action-button-area">
          <button type="button" class="pzhc pzbutton" @click="${m}">${i18n.t("Cancel")}</button>
          <button type="button" class="Strong pzhc pzbutton" @click="${h}">${i18n.t("Upload")}</button>
        </div>
      </div>`:z`
      <form id="modalcontent" @dragenter="${u}" @dragover="${u}" @dragleave="${u}"
      @drop="${u}" class='attach-files list-items'>
        <div class="file-upload">
          <input @change="${g}" type="file" multiple="">
          ${ct()}<span>${i18n.t(" Drag and drop files, attach ")}
          <button type='button' aria-label='${i18n.t("click to attach a file")}' class='Light' @click="${g}">
          ${i18n.t("files")}</button> ${i18n.t("or add a")}
          <button type='button' aria-label='${i18n.t("click to add a URL link")}' class='Light' @click="${f}">
          ${i18n.t("link")}</button></span>
        </div>
        ${_(e)}
      </form>
    `}
  `};class Dt extends nt{static get properties(){return{url:{},caseID:{},dataviewParams:{type:Object},username:{},password:{},headingLabel:{},bShowCreate:{},bShowCancel:{},bShowAttachments:{},bShowSave:{},bShowActions:{},authentication:{},token:{},clientid:{},clientsecret:{},initialContent:{},action:{},casetype:{},portalName:{},langTokens:{}}}constructor(){super(),this.url="",this.headingLabel="My worklist",this.caseID="",this.username="",this.password="",this.bShowCreate="true",this.bShowCancel="true",this.bShowAttachments="false",this.bShowSave="true",this.bShowActions="true",this.authentication="",this.token="",this.clientid="",this.clientsecret="",this.initialContent="",this.action="",this.casetype="",this.portalName="",this.cases=[],this.dataPages={},this.name="",this.etag="",this.casepyStatusWork="",this.casedata={},this.data={},this.numAttachments=0,this.attachmentcategories=[],this.assignmentID="",this.actionID="",this.content={},this.dataviewParams={},this.pageInstructions=[],this.errorMsg="",this.validationMsg="",this.bShowConfirm=!1,this.bShowNew=!1,this.refreshOnChange=!1,this.isDeclarativeTarget=!1;const t=this;window.i18n||(window.i18n={t:function(e){if(!e)return"";if("string"!=typeof e)return e;let a=e;if(0===a.indexOf("@L ")&&(a=a.substring(3)),0===a.indexOf("@FL ")&&(a=a.substring(4)),a=a.replace(/^"|"$/g,"").trim(),a=gt(a),"object"!=typeof t.langTokens)return a;const s=t.langTokens[a];return s&&""!==s?s.trim():(console.log(a),a)}})}clearLoadingIndicator(){const t=this.getRenderRoot().querySelector("#case-data");t&&null!==t.querySelector(".loading")&&it(null,t)}sendExternalEvent(t){this.dispatchEvent(new CustomEvent("message",{detail:{...t}}))}}class It extends Dt{resetError=t=>{this.errorMsg="",this.validationMsg="",this.actionAreaCancel(t)};reloadWorkList=t=>{this.cases=[],this.requestUpdate(),this.actionAreaCancel(t)};actionAreaCancel=t=>{if(t&&t.preventDefault(),this.bShowConfirm=!1,this.bShowNew=!1,this.caseID="",this.data={},this.content={},this.pageInstructions=[],this.casedata={},this.attachmentcategories=[],this.casepyStatusWork="",this.assignmentID="",this.actionID="",this.errorMsg="",this.numAttachments=0,this.validationMsg="",this.name="","workList"!==this.action&&"taskList"!==this.action||(this.fetchData("dataviews",{id:"D_pxAvailableCaseTypesForPortal",actionid:this.portalName}),this.sendData("dataviews",{id:"D_pyMyWorkList"})),"dataView"===this.action){const t={};if(this.dataviewParams)for(const e of this.dataviewParams.params)e.name&&e.value&&(t[e.name.trim()]=e.value.trim());this.sendData("dataviews",{id:this.dataviewParams.name,content:{dataViewParameters:t}})}this.sendExternalEvent({type:"cancel"})};actionAreaSave=t=>{t&&t.preventDefault(),null===t.target.getAttribute("data-submit")&&(t.target.textContent="Saving...",t.target.disabled=!0);const e=this.getRenderRoot().querySelector("#case-data");e&&(wt(e,this.content,this.pageInstructions,this.data.data.caseInfo.content),""!==this.assignmentID?this.sendData("savecase",{id:this.caseID,actionid:"",target:t.target}):this.sendData("savecase",{id:this.caseID,actionid:this.actionID,target:t.target}))};actionRefresh=()=>{const t=this.getRenderRoot().querySelector("#case-data");t&&(this.validationMsg="",wt(t,this.content,this.pageInstructions,this.data.data.caseInfo.content),this.fetchData("caseaction",{id:this.caseID,actionid:this.actionID}))};displayActions=()=>this.data.actions?this.genActionsList(this.name,this.data):this.casedata.actions?this.genActionsList(this.name,this.casedata):null;displayAttachments=t=>{this.fetchData("attachmentcategories",{id:this.caseID}),this.fetchData("attachments",{id:this.caseID,target:t})};submitForm=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");return wt(a,this.content,this.pageInstructions,this.data.data.caseInfo.content),this.validateForm(a)?"create"!==e?""!==this.data.ID?"previous"===e?this.sendData("previousstep",{id:this.data.ID}):this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID}):this.sendData("submitcaseaction",{id:this.data.caseID,actionid:this.actionID}):this.sendData("newwork",{id:this.casetype}):this.reportFormValidity(a),t.preventDefault(),!1};createCase=t=>{if(this.name="New Case",this.bShowNew=!0,t){let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&(this.casetype=e.getAttribute("data-value"),this.name=`New ${e.textContent} `)}this.content=this.initialContent,this.pageInstructions=[],this.caseID="",this.data={},this.casedata={},this.casetypes[this.casetype]?this.sendData("newwork",{id:this.casetype}):(this.errorMsg=`Case '${this.casetype}' is not defined`,console.error(`Case '${this.casetype}' is not defined`)),this.requestUpdate()};runAction=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&null!==e.getAttribute("data-value")&&(this.actionID=e.getAttribute("data-value"),this.name=e.innerText,this.data.ID="",this.actionRefresh());const a=this.getRenderRoot().querySelector("#case-data");null!=a&&it(this.genLoadingIndicator(),a)};openCase=t=>{t.preventDefault(),this.caseID=t.target.getAttribute("data-id"),this.name="",this.data={},this.casedata={},0===this.caseID.indexOf("ASSIGN-WORKLIST")?(this.sendExternalEvent({type:"openassignment",id:this.caseID}),this.assignmentID=this.caseID,this.caseID=""):(this.sendExternalEvent({type:"opencase",id:this.caseID}),this.assignmentID="");const e=this.getRenderRoot().querySelector("#case-data");null!=e&&it(this.genLoadingIndicator(),e),this.requestUpdate()};getData=(t,e)=>{this.dataPages[t]?it(this.showDataList(this.dataPages[t]),e.nextElementSibling):this.fetchData("data",{id:t,element:e})};applyAction=t=>{const e=this.getRenderRoot().querySelector("#case-data");let a=t;if(e){if(a){"path"===a.tagName&&(a=a.parentNode),"svg"===a.tagName&&(a=a.parentNode);const t=a.getAttribute("data-action-click"),e=a.getAttribute("data-ref");if(null!==e&&null!=t){if("addRow"===t){const t=((t,e,a)=>{let s=$t(t,e);if(null===s&&(s=[],mt(t,e,s)),!Array.isArray(s))return null;if(a&&"string"==typeof a){const t={},i=a.split(",");for(const e in i)t[i[e]]="";return s.push(t),{instruction:"APPEND",target:e,content:t}}if(0===s.length)return null;const i={...s[0]};return vt(i),s.push(i),{instruction:"APPEND",target:e,content:i}})(this.data.data.caseInfo.content,e,a.getAttribute("data-newrow"));return void(null!==t&&this.pageInstructions.push(t))}if("deleteRow"===t){const t=((t,e)=>{let a,s=e;-1!==e.indexOf(").pyTemplate")&&(a=parseInt(s.substring(e.lastIndexOf("(")+1,e.lastIndexOf(")")),10),s=s.substring(0,e.lastIndexOf("(")));const i=$t(t,s);if(!Array.isArray(i))return null;if(1===i.length){for(const t in i[0])"pxObjClass"!==t&&(i[0][t]="");return null}return a?i.length<a?null:(i.splice(a-1,1),{instruction:"DELETE",target:s,listIndex:a}):(i.length-=1,{instruction:"DELETE",target:s,listIndex:i.length})})(this.data.data.caseInfo.content,e);return void(null!==t&&this.pageInstructions.push(t))}}}wt(e,this.content,this.pageInstructions,this.data.data.caseInfo.content)}};refreshAssignment=(t,e)=>{this.applyAction(t),!0===this.bShowNew?this.sendData("refreshnew",{id:this.casetype,refreshFor:e}):this.sendData("refreshassignment",{id:this.assignmentID,actionid:this.actionID,refreshFor:e})};genErrorMessage(t){this.clearLoadingIndicator(),t.message&&-1!==t.message.indexOf("JSON.parse")?console.error("Error:",t):t.message&&-1!==t.message.indexOf("Unexpected token")?(this.errorMsg="Error 404: Resource not found",this.requestUpdate(),console.error(this.errorMsg)):(t.status?""!==t.statusText?this.errorMsg=`Error ${t.status}: ${t.statusText}`:401===t.status?this.errorMsg="Error 401: Authentication error":423===t.status?this.errorMsg="Error 423: Resource is locked by another user":500===t.status?this.errorMsg="Error 500: Internal server error":this.errorMsg=`Error ${t.status}`:t.name&&t.message?this.errorMsg=`Error ${t.name}: ${t.message}`:this.errorMsg="string"==typeof t?t:"Critical error",this.requestUpdate(),console.error("Error:",t))}fetchData(t,e){const{id:a,actionid:s,target:i}=e||{};let n="";""!==this.authentication&&"basic"!==this.authentication||(n=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(n=`Bearer ${this.token}`);const r={method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:n},mode:"cors"};let o=`${this.url}/api/application/v2/`;switch(t){case"assignment":o+=`assignments/${a}`;break;case"view":o+=`cases/${a}/views/${s}`;break;case"dataviews":const t=JSON.stringify({PortalName:s});o+=`data_views/${a}?dataViewParameters=${encodeURI(t)}`;break;case"caseaction":o+=`cases/${a}/actions/${s}`;break;case"attachment":o+=`attachments/${a}`;break;case"attachments":o+=`cases/${a}/attachments`;break;case"attachmentcategories":o+=`cases/${a}/attachment_categories`}fetch(o,r).then((a=>{if("assignment"===t)this.etag=a.headers.get("etag");else if("attachment"===t)return a.text();return a.ok||404===a.status?a.json():401===a.status?(this.token="",this.sendData("authenticate",{...e,type:t,cmd:"fetchData"}),a.json()):Promise.reject(a)})).then((e=>{try{if(e.errors&&e.errors.length>0)return;if(e.pyLocalizedValue)return this.errorMsg=`Error: ${e.pyLocalizedValue}`,void this.requestUpdate();if(e.errorDetails&&e.errorDetails.length>0)return this.errorMsg=`Error ${e.errorDetails[0].message}: ${e.localizedValue}`,this.clearLoadingIndicator(),this.requestUpdate(),void console.error("Error:",e);const n=this.getRenderRoot().querySelector("#case-data");switch(t){case"dataviews":if("D_pxAvailableCaseTypesForPortal"===a){this.casetypes={};for(const t of e.pyCaseTypesAvailableToCreate)("workList"!==this.action&&"taskList"!==this.action||""===this.casetype||this.casetype===t.pyClassName)&&(this.casetypes[t.pyClassName]={canCreate:!0,name:t.pyLabel})}this.requestUpdate();break;case"assignment":this.content={},this.pageInstructions=[],this.isDeclarativeTarget=!1,this.refreshOnChange=!1,this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel,this.caseID=this.casedata.ID,this.data.caseID=this.caseID,this.data.ID=a;for(const t of this.casedata.assignments)if(a===t.ID&&t.actions&&t.actions.length>0){this.actionID=t.actions[0].ID;break}this.casepyStatusWork=this.casedata.status,this.data.actions=this.casedata.availableActions,this.name=this.casedata.stageLabel;const t=this.getRenderRoot().querySelector("#case-data");t&&wt(t,this.casedata.content),this.content={},it(this.renderMainLayout(e.uiResources.resources.views[this.casedata.content.pyViewName],"Obj"),n),this.requestUpdate(),n.focus();break;case"view":if(!n){console.error("Error: case data are not present when retrieving the page");break}this.content={},this.pageInstructions=[],this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel?this.casedata.content.pyLabel:this.casedata.name,this.casedata.actions=this.casedata.availableActions,this.casedata.content.pyID=this.casedata.ID,this.data.ID=this.casedata.ID,this.casepyStatusWork=this.casedata.status,this.name=this.casedata.stageLabel,this.content={},"true"===this.bShowAttachments&&this.fetchData("attachments",{id:this.caseID}),this.name=e.data.caseInfo.name,it(this.renderReviewLayout(e.uiResources.resources.views[s],"Obj"),n),this.requestUpdate(),n.focus();break;case"caseaction":this.content={},this.pageInstructions=[],this.isDeclarativeTarget=!1,this.refreshOnChange=!1,this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel,this.caseID=this.casedata.ID,this.data.caseID=this.caseID,this.data.ID="",this.casepyStatusWork=this.casedata.status,this.data.actions=this.casedata.availableActions,this.name=this.casedata.stageLabel,this.content={},it(this.renderMainLayout(e.uiResources.resources.views[e.uiResources.root.config.name],"Obj"),n),this.requestUpdate(),n.focus();break;case"attachments":let r=e.attachments;r||(r=[]),this.numAttachments=r.length,i&&it(At(i,r,this.caseID,this),i),this.requestUpdate();break;case"attachmentcategories":this.attachmentcategories=e.attachment_categories;break;case"attachment":i(e)}}catch(t){this.errorMsg=`Error: ${t}`,this.requestUpdate(),console.error("Error:",t)}})).catch((t=>{this.genErrorMessage(t)}))}sendData(t,e){const{id:a,actionid:s,target:i}=e;let n="";""!==this.authentication&&"basic"!==this.authentication||(n=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(n=`Bearer ${this.token}`);const r={"Content-Type":"application/json;charset=UTF-8",Authorization:n},o={method:"POST",headers:r,mode:"cors"},{pageInstructions:l,pageupdate:c}=((t,e)=>{const a=e||[],s={};for(const[e,i]of Object.entries(t))if("string"==typeof i||"boolean"==typeof i)s[e]=i;else if("object"==typeof i)if(Array.isArray(i))for(const t in i){const s={instruction:"UPDATE",target:e,listIndex:parseInt(t,10)+1,content:i[t]};a.push(s)}else{const t={instruction:"UPDATE",target:e,content:i};a.push(t)}return{pageInstructions:a,pageupdate:s}})(this.content,this.pageInstructions);let d=`${this.url}/api/application/v2/`;switch(this.validationMsg="",t){case"authenticate":"oauth2password"===this.authentication?o.body=`grant_type=password&client_id=${this.clientid}&client_secret=${this.clientsecret}&enable_psyncId=true&username=${this.username}&password=${this.password}`:"oauth2clientcredentials"===this.authentication?o.body=`grant_type=client_credentials&client_id=${this.clientid}&client_secret=${this.clientsecret}&enable_psyncId=true`:"authorizationcode"===this.authentication&&(o.body=`grant_type=authorization_code&client_id=${this.clientid}&code_verifier=${window.history.state.verifier}&code=${window.history.state.code}&redirect_uri=${encodeURIComponent(`${window.location.href.substring(0,window.location.href.lastIndexOf("/"))}/auth.html`)}`),"custombearer"===this.authentication&&(o.body=`grant_type=custom-bearer&client_id=${this.clientid}&enable_psyncId=true&userIdentifier=${this.username}`),o.headers["Content-Type"]="application/x-www-form-urlencoded",d=`${this.url}/PRRestService/oauth2/v1/token`;const t=this.url.indexOf("/prweb");-1!==t&&(d=`${this.url.substring(0,t+6)}/PRRestService/oauth2/v1/token`);break;case"newwork":d+="cases?viewType=form",o.body=JSON.stringify({caseTypeID:a,processID:"pyStartCase",content:c,pageInstructions:l});break;case"submitassignment":o.body=JSON.stringify({content:c,pageInstructions:l}),o.method="PATCH",o.headers["If-Match"]=this.etag,d+=`assignments/${a}/actions/${s}?viewType=form`;break;case"previousstep":o.body=JSON.stringify({content:c,pageInstructions:l}),o.method="PATCH",o.headers["If-Match"]=this.etag,d+=`assignments/${a}/navigation_steps/previous?viewType=form`;break;case"submitcaseaction":o.body=JSON.stringify({content:c,pageInstructions:l}),o.method="PATCH",o.headers["If-Match"]=this.etag,d+=`cases/${a}/actions/${s}?viewType=form`;break;case"refreshassignment":d+=`assignments/${a}/actions/${s}/refresh`,o.headers["If-Match"]=this.etag,o.method="PATCH",o.body=JSON.stringify({content:c,pageInstructions:l,contextData:!0});break;case"dataviews":d+=`data_views/${a}`,"function"==typeof e.content?o.body=e.content():o.body=JSON.stringify(e.content);break;case"uploadattachment":d+="attachments/upload",delete r["Content-Type"];const i=new FormData;i.append("File",s,s.name),o.body=i;break;case"attachments":d+=`cases/${a}/attachments`,o.body=JSON.stringify({attachments:s});break;case"deleteattachment":d+=`attachments/${a}`,o.method="DELETE"}fetch(d,o).then((a=>"deleteattachment"===t||"attachments"===t?a.text():("previousstep"!==t&&"submitassignment"!==t&&"newwork"!==t||(this.etag=a.headers.get("etag")),200===a.status||201===a.status||a.status>=400&&a.status<500||500===a.status?(401===a.status&&"authenticate"!==t&&(this.token="",this.sendData("authenticate",{...e,type:t,cmd:"sendData"})),a.json()):a.ok?Promise.resolve("ok"):Promise.reject(a)))).then((n=>{if(n.errors&&n.errors.length>0)return this.errorMsg=`Error: ${n.errors[0].message.trim()}`,void this.requestUpdate();if(n.access_token)this.token=n.access_token,window.history.replaceState({token:this.token},"",window.location.href),e.type&&e.cmd&&("sendData"===e.cmd?this.sendData(e.type,e):this.fetchData(e.type,e));else if(n.errorDetails&&n.errorDetails.length>0){if(n.errorDetails[0].localizedValue){const t=this.getRenderRoot().querySelector("#case-data");t&&(((t,e,a)=>{for(const s of t.elements)if("INPUT"===s.tagName||"TEXTAREA"===s.tagName||"SELECT"===s.tagName){const t=`.${s.getAttribute("data-ref")}`;if(null!==t&&"pyID"!==t)for(const i in e){if(e[i].Path===t){a.setInlineError(s,e[i].ValidationMessage);break}if(e[i].erroneousInputOutputFieldInPage===t){a.setInlineError(s,e[i].localizedValue);break}}}})(t,n.errorDetails,this),this.validationMsg=this.genPageValidationErrors(n,t))}else this.errorMsg=`Error ${n.errorDetails[0].message}: ${n.localizedValue}`;this.clearLoadingIndicator(),i&&(i.disabled=!1,i.textContent="Save"),"submitassignment"!==t&&"previousstep"!==t||this.fetchData("assignment",{id:this.assignmentID})}else{const r=this.getRenderRoot().querySelector("#case-data");if("dataviews"===t)if("D_pyMyWorkList"===a){if(this.cases=[],n.data?.length>0)for(const t of n.data)this.cases.push({name:t.pyLabel,caseID:t.pxRefObjectKey,urgency:t.pxUrgencyAssign,ID:t.pzInsKey,label:t.pxTaskLabel})}else if(this.data=n.data??[],"function"==typeof e.response)return void e.response(this);if("newwork"===t&&n.data.caseInfo.ID&&""!==n.data.caseInfo.ID&&this.sendExternalEvent({type:"newwork",id:n.data.caseInfo.ID}),"refreshassignment"===t)return void(r&&n.data.caseInfo&&n.data.caseInfo.content&&(this.data.data.caseInfo.content=n.data.caseInfo.content,this.casedata.content=n.data.caseInfo.content,this.data.uiResources.context_data=n.uiResources.context_data,it(this.renderMainLayout(this.data.uiResources.resources.views[this.actionID],"Obj"),r)));if("deleteattachment"===t)i&&!i.classList.contains("attach-files")&&this.fetchData("attachments",{id:this.caseID,target:i});else if("attachments"===t)this.fetchData("attachments",{id:this.caseID,target:i});else if("uploadattachment"===t){let t=s.name.lastIndexOf(".");-1===t&&(t=s.name.length);const e=s.name.substring(t+1),a=[{type:"File",category:s.category,fileType:e,name:s.displayName,ID:n.ID}];return void this.sendData("attachments",{id:this.caseID,actionid:a,target:i})}if(n.confirmationNote)this.bShowConfirm=!0,this.caseID=n.data.caseInfo.ID,this.fetchData("view",{id:this.caseID,actionid:"pyReview"});else if(n.uiResources){if(this.bShowNew=!1,this.content={},this.pageInstructions=[],this.assignmentID=n.nextAssignmentInfo.ID,this.data=n,this.casedata=n.data.caseInfo,this.data.name=this.casedata.content.pyLabel?this.casedata.content.pyLabel:this.casedata.name,this.caseID=this.casedata.content.pzInsKey,this.data.caseID=n.data.caseInfo.ID,this.data.ID=this.assignmentID,this.casedata.content.pyViewName=n.uiResources.root.config.name,this.actionID=this.casedata.content.pyViewName,this.casedata.assignments)for(const t of this.casedata.assignments)if("pzQuestionPageScr"===t.processID&&this.data.ID===t.ID&&t.actions&&t.actions.length>0){this.actionID=t.actions[0].ID;break}this.casepyStatusWork=n.data.caseInfo.status,this.data.actions=n.data.caseInfo.availableActions,this.name=n.data.caseInfo.stageLabel,r&&(it(this.genLoadingIndicator(),r),it(this.renderMainLayout(n.uiResources.resources.views[this.casedata.content.pyViewName],"Obj"),r),r.focus())}}this.requestUpdate()})).catch((t=>{this.genErrorMessage(t)}))}}
/**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const xt=t=>t??V,St=(t,e)=>{if(t.helperText&&""!==t.helperText)return`${e}-info`},Et=t=>{if(t.placeholder&&""!==t.placeholder)return t.displayplaceholder},Tt=(t,e,a,s)=>void 0===e||""===e||-1!==e.indexOf("-table")?z`
      ${s}
    `:z`
    <div class="govuk-form-group" ?disabled="${t.disabledstate}">
      ${((t,e,a)=>{if(void 0===e)return null;const s=t.requiredstate?"icon-required":"";return"field-checkbox"===a?t.label&&""!==t.label?z`<legend>${t.displaylabel}</legend>`:null:z`
    ${""!==t.label?z`<label class="govuk-label ${s}"
    for="${xt(e)}">${t.displaylabel}
    </label>`:null}
  `})(t,e,a)}${((t,e)=>t.helperText&&""!==t.helperText?z`<div id=${`${e}-info`} class="govuk-hint">${t.displayhelperText}</div>`:null)(t,e)}${s}
    </div>
  `,Rt=(t,e,a,s,i)=>{const n=((t,e,a,s,i)=>{if(!1===t.config.visibility)return null;let n=!1;if(t.config.displayvalue="",t.config.displaylabel=i18n.t(t.config.label),t.config.displayplaceholder=i18n.t(t.config.placeholder),t.config.displayhelperText=i18n.t(t.config.helperText),t.config.displaycaption=i18n.t(t.config.caption),t.config.value){let e=t.config.value.replace("@P .","").replace("@USER .","");if(t.config.reference=void 0===i||""===i?e:`${i}.${e}`,t.config.displayvalue=$t(s.casedata.content,t.config.reference),"string"==typeof t.config.datasource&&0===t.config.datasource.indexOf("@ASSOCIATED")){e=t.config.datasource.replace("@ASSOCIATED .",""),-1!==e.indexOf(".")&&(e=e.substring(e.lastIndexOf(".")+1));let a="";s.data.context_data?a=s.data.context_data.content:s.data.uiResources.context_data&&s.data.uiResources.context_data.caseInfo&&s.data.uiResources.context_data.caseInfo.content&&(a=s.data.uiResources.context_data.caseInfo.content);const n=""===i?a:$t(a,i);if(n&&(t.config.options=n.summary_of_associated_lists__[e]),void 0===t.config.options&&(a=s.data.uiResources.resources.fields[e],Array.isArray(a)&&1===a.length&&(a=a[0]),a&&a.datasource))if(a.datasource.records)t.config.options=a.datasource.records;else if(a.datasource.name&&s.data.data.shared[a.datasource.name]){const e=s.data.data.shared[a.datasource.name];if(Object.keys(e).length>0){const s=Object.keys(e)[0];if(e[s].pxResults){const i=a.datasource.propertyForValue.replace("@P .",""),n=a.datasource.propertyForDisplayText.replace("@P .","");t.config.options=[];for(const a in e[s].pxResults){const r=e[s].pxResults[a];t.config.options[a]={key:r[i],value:r[n]}}}}}}else if("object"==typeof t.config.datasource&&t.config.datasource.source&&0===t.config.datasource.source.indexOf("@DATASOURCE")){const e=t.config.datasource.source.replace("@DATASOURCE ","").replace(".pxResults","");if(s.data.data[e]&&s.data.data[e].pxResults)t.config.options=s.data.data[e].pxResults;else if(s.data.uiResources.context_data&&s.data.uiResources.context_data.caseInfo&&s.data.uiResources.context_data.caseInfo.content){const a=s.data.uiResources.context_data.caseInfo.content;if(a[i]&&a[i].summary_of_lists__[e]&&a[i].summary_of_lists__[e].pxResults){const n=a[i].summary_of_lists__[e].pxResults.replace(".pxResults","");if(s.data.data[n]&&s.data.data[n].pxResults){t.config.options=[];const e=t.config.datasource.fields.key.replace("@P .",""),a=t.config.datasource.fields.text.replace("@P .","");for(const i in s.data.data[n].pxResults){const r=s.data.data[n].pxResults[i];t.config.options[i]={key:r[e],value:r[a]}}}}}}if(t.config.options||(t.config.options=[]),t.config.displayvalue?"object"!=typeof t.config.displayvalue&&(t.config.displayvalue=`${t.config.displayvalue}`):t.config.displayvalue="",s.data.uiResources&&s.data.uiResources.resources&&s.data.uiResources.resources.fields&&s.data.uiResources.resources.fields[e]){let t=s.data.uiResources.resources.fields[e];Array.isArray(t)&&1===t.length&&(t=t[0]),(t.isDeclarativeTarget||t.isSpecial)&&(n=!0,s.isDeclarativeTarget=!0)}}"string"!=typeof t.config.visibility&&"string"!=typeof t.config.readOnly&&"string"!=typeof t.config.disabled&&"string"!=typeof t.config.required||(s.refreshOnChange=!0);const r=s.data.data.caseInfo.content;if("string"==typeof t.config.visibility&&"true"!==t.config.visibility){if(t.config.visibility.startsWith("@W ")&&(s.isDeclarativeTarget=!0),!_t(t.config.visibility,r,s,i))return null}else if(!1===t.config.visibility||"false"===t.config.visibility)return null;return t.config.readonlystate=!1,"string"==typeof t.config.readOnly&&"false"!==t.config.readOnly?t.config.readonlystate=_t(t.config.readOnly,r,s,i):(!0===t.config.readOnly||"true"===t.config.readOnly||n)&&(t.config.readonlystate=!0),t.config.requiredstate=!1,"string"==typeof t.config.required&&"false"!==t.config.required?t.config.requiredstate=_t(t.config.required,r,s,i):!0!==t.config.required&&"true"!==t.config.required||(t.config.requiredstate=!0),t.config.disabledstate=!1,"string"==typeof t.config.disabled&&"false"!==t.config.disabled?t.config.disabledstate=_t(t.config.disabled,r,s,i):!0!==t.config.disabled&&"true"!==t.config.disabled||(t.config.disabledstate=!0),t.config.disabledstate&&(t.config.requiredstate=!1,t.config.readonlystate=!1),"OK"})(t,0,0,s,i);if("OK"!==n)return n;if(!0===a||t.config.readonlystate)return Tt(t.config,e,"field-text",Nt(t.config,t.type,e));switch(t.type){case"TextContent":return Nt(t.config,t.type,e);case"Decimal":case"TextInput":return Tt(t.config,e,"field-textinput",Lt(t.config,e));case"Phone":return Tt(t.config,e,"field-phoneinput",Ot(t.config,e));case"Email":return Tt(t.config,e,"field-emailinput",qt(t.config,e));case"Integer":return Tt(t.config,e,"field-numberinput",Pt(t.config,e));case"Percentage":return Tt(t.config,e,"field-percentage",Ut(t.config,e));case"Currency":return Tt(t.config,e,"field-currencyinput",Mt(t.config,e));case"RadioButtons":return Tt(t.config,e,"field-radiogroup",jt(t.config,e));case"TextArea":return Tt(t.config,e,"field-textarea",Ht(t.config,e));case"Checkbox":return Tt(t.config,e,"field-checkbox",zt(t.config,e));case"Dropdown":return Tt(t.config,e,"field-dropdown",Vt(t.config,e));case"DateTime":return Tt(t.config,e,"field-datetime",Ft(t.config,e));case"Date":return Tt(t.config,e,"field-date",Bt(t.config,e));case"Time":return Tt(t.config,e,"field-time",Wt(t.config,e));case"AutoComplete":return Tt(t.config,e,"field-autocomplete",Zt(t.config,e));case"SemanticLink":return Tt(t.config,e,"field-semanticlink",Kt(t.config));case"Location":return Tt(t.config,e,"field-location",Jt(t.config,e));default:return null}},Nt=(t,e,a)=>{let s=t.displayvalue;if(""!==s){if("Phone"===e)return z`<a data-ref="${t.reference}" id="${xt(a)}" href="${`tel:${s}`}">${s}</a>`;if("Date"===e){const e={year:"numeric",month:"short",day:"numeric"};s=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}else if("DateTime"===e){s=pt(t.displayvalue);const e={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};s=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}else if("Time"===e){const e={hour:"numeric",minute:"numeric"};s=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}}if("TextContent"===e){if("Paragraph"===t.displayAs)return z`<p>${i18n.t(t.content)}</p>`;if("Heading 1"===t.displayAs)return z`<h1>${i18n.t(t.content)}</h1>`;if("Heading 2"===t.displayAs)return z`<h2>${i18n.t(t.content)}</h2>`;if("Heading 3"===t.displayAs)return z`<h3>${i18n.t(t.content)}</h3>`;if("Heading 4"===t.displayAs)return z`<h4>${i18n.t(t.content)}</h4>`}return z`
    <span class="dataValueRead" data-ref="${t.reference}" id="${xt(a)}">${gt(s)}</span>
  `},Lt=(t,e)=>z`
  <input
    class="govuk-input"
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${xt(Et(t))}"
    type="text"
    aria-describedby="${xt(St(t,e))}"
    id="${xt(e)}"
    value="${gt(t.displayvalue)}"
  />
`,Ot=(t,e)=>{let a="";for(const e of t.options)0===t.displayvalue.indexOf(e.pyCallingCode)&&(a=e.pyCallingCode);return t.displayvalue=t.displayvalue.substring(a.length),z`
<div class='field-phoneinput' ?readonly="${t.readOnly}">
<select
  class="govuk-select field-countrycode"
  ?readonly="${t.readonlystate}"
  ?disabled="${t.disabledstate}"
  aria-label="${i18n.t("Select country code")}">
  ${t.options.map((t=>z`<option ?selected=${t.pyCallingCode===a}
  value='${t.pyCallingCode}'>${t.pyCallingCode}</option>`))}
</select>
 <input
   class="govuk-input"
   data-ref="${t.reference}"
   ?required="${t.requiredstate}"
   ?readonly="${t.readonlystate}"
   ?disabled="${t.disabledstate}"
   placeholder="${xt(Et(t))}"
   type="tel"
   aria-describedby="${xt(St(t,e))}"
   id="${xt(e)}"
   value="${gt(t.displayvalue)}"
 />
 </div>
`},Pt=(t,e)=>z`
  <input
    class="govuk-input"
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${xt(Et(t))}"
    type="number"
    aria-describedby="${xt(St(t,e))}"
    id="${xt(e)}"
    value="${gt(t.displayvalue)}"
  />
`,Ut=(t,e)=>z`
 <input
   class="govuk-input"
   data-ref="${t.reference}"
   ?required="${t.requiredstate}"
   ?readonly="${t.readonlystate}"
   ?disabled="${t.disabledstate}"
   placeholder="${xt(Et(t))}"
   type="text"
   aria-describedby="${xt(St(t,e))}"
   id="${xt(e)}"
   value="${gt(t.displayvalue)}"
 />
`,Mt=(t,e)=>z`
  <div class='field-currencyinput' ?readonly="${t.readOnly}">
  <span class="currency-symbol">$</span>
  <input
    class="govuk-input"
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${xt(Et(t))}"
    type="number"
    aria-describedby="${xt(St(t,e))}"
    id="${xt(e)}"
    value="${gt(t.displayvalue)}"
  />
  </div>
`,qt=(t,e)=>z`
  <input
    class="govuk-input"
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${xt(Et(t))}"
    type="email"
    aria-describedby="${xt(St(t,e))}"
    id="${xt(e)}"
    value="${gt(t.displayvalue)}"
  />
`,Ht=(t,e)=>z`
  <textarea
    class="govuk-textarea"
    rows="3"
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${xt(Et(t))}"
    type="email"
    aria-describedby="${xt(St(t,e))}"
    id="${xt(e)}"
  >${gt(t.displayvalue)}</textarea>
`,zt=(t,e)=>{const a=t.requiredstate?"icon-required":"";return z`<div class="govuk-checkboxes__item">
  <input
  class="govuk-checkboxes__input"
  data-ref="${t.reference}"
  ?required="${t.requiredstate}"
  ?readonly="${t.readonlystate}"
  onclick="${xt(t.readonlystate?"return false;":void 0)}"
  ?disabled="${t.disabledstate}"
  aria-describedby="${xt(St(t,e))}"
  id=${xt(e)}
  type="checkbox" ?checked=${"true"===t.displayvalue||!0===t.displayvalue}
  />
  <label class="govuk-label govuk-checkboxes__label ${a}" for=${xt(e)}>
  ${t.displaycaption}
    </label></div>
`},jt=(t,e)=>{let a=[{value:"true"},{value:"false"}];return t.options&&(a=t.options),z`<div class="govuk-radios">
    ${a.map(((a,s)=>{const i=`rb-${e}-${s}`;return z`
        <div class="govuk-radios__item">
          <input
            class="govuk-radios__input"
            data-ref="${t.reference}"
            name=${xt(e)}
            id=${i}
            type="radio"
            ?required="${t.requiredstate}"
            ?readonly="${t.readonlystate}"
            ?disabled="${t.disabledstate}"
            value="${a.key}"
            onclick="${xt(t.readonlystate?"return false;":void 0)}"
            ?checked="${a.key===t.displayvalue}"
          />
          <label class="govuk-label govuk-radios__label" for="${i}">${a.value}</label>
        </div>
      `}))}
  </div>`},Vt=(t,e)=>z`<select
  class="govuk-select"
  data-ref="${t.reference}"
  aria-describedby="${xt(St(t,e))}"
  id=${xt(e)}
  ?required="${t.requiredstate}"
  ?readonly="${t.readonlystate}"
  ?disabled="${t.disabledstate}">
  placeholder="${xt(Et(t))}"
    <option value="" title="${i18n.t("Select...")}">${i18n.t("Select...")}</option>
    ${t.options.map((e=>z`<option ?selected=${e.key===t.displayvalue} value='${e.key}'>${e.value}</option>`))}
  </select>`,Ft=(t,e)=>{let a=t.displayvalue;if(""!==a){const e=pt(a);e instanceof Date&&e.getTime()==e.getTime()?a=`${e.getUTCFullYear()}-${ut(e.getUTCMonth()+1)}-${ut(e.getUTCDate())}T${ut(e.getUTCHours())}:${ut(e.getUTCMinutes())}`:8===t.displayvalue.length?a=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(4,6)}-${t.displayvalue.substring(6,8)}T00:00`:24===t.displayvalue.length&&(a=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(5,7)}-${t.displayvalue.substring(8,10)}T${t.displayvalue.substring(11,13)}:${t.displayvalue.substring(14,16)}`)}return z`
    <input
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="datetime-local"
      class="govuk-input"
      aria-describedby="${xt(St(t,e))}"
      id="${xt(e)}"
      value="${a}"
    />
  `},Bt=(t,e)=>{let a=t.displayvalue,s="",i="",n="";if(""!==a){const e=pt(a);e instanceof Date&&e.getTime()==e.getTime()?(n=e.getUTCFullYear(),s=e.getUTCMonth()+1,i=e.getUTCDate()):8===t.displayvalue.length&&(n=t.displayvalue.substring(0,4),s=t.displayvalue.substring(4,6),i=t.displayvalue.substring(6,8)),a=e}return z`
  <div class="input-date govuk-date-input" id="${xt(e)}"
  aria-describedby="${xt(St(t,e))}" data-ref="${t.reference}">
  <div class="govuk-date-input__item">
    <div class="govuk-form-group">
      <label class="govuk-label govuk-date-input__label" for="${`${e}-day`}">
        ${i18n.t("Day")}
      </label>
      <input data-ref="${t.reference}" ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}" class="input-date-day govuk-input govuk-date-input__input govuk-input--width-2" value="${i}"
      id="${`${e}-day`}" name="${`${e}-day`}" type="text" pattern="[0-9]*" inputmode="numeric"></div>
  </div>
  <div class="govuk-date-input__item">
    <div class="govuk-form-group">
      <label class="govuk-label govuk-date-input__label" for="${`${e}-month`}">
      ${i18n.t("Month")}
      </label>
      <input data-ref="${t.reference}" ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}" class="input-date-month govuk-input govuk-date-input__input govuk-input--width-2"  value="${s}"
      id="${`${e}-month`}" name="${`${e}-month`}" type="text" pattern="[0-9]*" inputmode="numeric"></div>
  </div>
  <div class="govuk-date-input__item">
    <div class="govuk-form-group">
      <label class="govuk-label govuk-date-input__label" for="${`${e}-year`}">
      ${i18n.t("Year")}
      </label>
      <input data-ref="${t.reference}" ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}" class="input-date-year govuk-input govuk-date-input__input govuk-input--width-4" value="${n}"
      id="${`${e}-year`}" name="${`${e}-year`}" type="text" pattern="[0-9]*" inputmode="numeric"></div>
  </div>
</div>`},Wt=(t,e)=>{let a=t.displayvalue;if(""!==a){const e=pt(a);e instanceof Date&&e.getTime()==e.getTime()?a=`${ut(e.getUTCHours())}-${ut(e.getUTCMinutes())}-${ut(e.getUTCSeconds())}`:8===t.displayvalue.length&&(a=`${t.displayvalue.substring(9,10)}:${t.displayvalue.substring(10,11)}:${t.displayvalue.substring(11,12)}`)}return z`
    <input
      class="govuk-input"
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="time"
      aria-describedby="${xt(St(t,e))}"
      id="${xt(e)}"
      value="${a}"
    />
  `},Zt=(t,e)=>t.options?z`
      <input
        data-ref="${t.reference}"
        list="${t.reference}"
        ?required="${t.requiredstate}"
        ?readonly="${t.readonlystate}"
        ?disabled="${t.disabledstate}"
        placeholder="${xt(Et(t))}"
        type="text"
        class="govuk-input combobox loaded"
        aria-describedby="${xt(St(t,e))}"
        id="${xt(e)}"
        value="${gt(t.displayvalue)}"
      />
      <datalist id="${t.reference}">
        ${t.options.map((t=>z`
            <option value="${t.key}">
              ${t.value}
            </option>
          `))}
      </datalist>
    `:null,Kt=()=>z`
 <a>semantic link</a>
`,Jt=(t,e)=>z`<input
 class="govuk-input location"
 data-ref="${t.reference}"
 ?required="${t.requiredstate}"
 ?readonly="${t.readonlystate}"
 ?disabled="${t.disabledstate}"
 placeholder="${xt(Et(t))}"
 type="text"
 aria-describedby="${xt(St(t,e))}"
 id="${xt(e)}"
 value="${gt(t.displayvalue)}"
/>`,Gt=()=>z`
<span class="loading">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</span>
`,Xt=(t,e)=>z`
  ${t.map((t=>z`
    <th scope='col' class="govuk-table__header">${i18n.t(t.config.label)}</th>`))}${e?null:z`<th></th>`}
`,Yt=(t,e)=>{if(!e){const e=[];t.config.children[0].children.map(((t,a)=>(e[a]=t.config.value.replace("@P .",""),null)));const a=t.config.referenceList.replace("@P .","");return z`
      <div class="table-action-area">
        <button type="button" class="govuk-button govuk-button--secondary" data-module="govuk-button"
        aria-label="${i18n.t("Add row")}" data-newrow="${e.join()}"
        data-ref=${a} data-action-click="addRow">${i18n.t("Add item")}</button>
      </div>
    `}return null},Qt=(t,e,a,s)=>{const i=t.config.referenceList.replace("@P .",""),n=t.config.children[0].children,r=$t(a.data.data.caseInfo.content,i);return r?z`
  ${r.map(((t,r)=>z`
    <tr class="govuk-table__row">
    ${n.map(((t,n)=>z`
    <td class="govuk-table__cell">${Rt(t,e?void 0:`${s}-${r}-${n}`,e,a,`${i}(${r+1})`)}</td>`))}${e?null:z`<td class="govuk-table__cell"><button type="button" class="govuk-button govuk-button--secondary" data-module="govuk-button"
  aria-label="${i18n.t("Delete item")}" data-ref=${`${i}(${r+1}).pyTemplate`}
  data-action-click='deleteRow'>Delete</button></td>`}
    </tr>`))}
`:null},te=(t,e,a,s,i)=>{if(void 0===t)return null;if(Array.isArray(t)&&1===t.length&&"View"===t[0].type&&(t=t[0]),!t.config||!t.config.template)return z`${t.map(((t,n)=>{const r=`${e}-${n}`;if("Region"===t.type)return te(t.children,`${e}-0`,!0,s,i);if("reference"===t.type&&"view"===t.config.type){let e="";if(t.config.context&&(e=t.config.context),t.config.inheritedProps&&1===t.config.inheritedProps.length&&"label"===t.config.inheritedProps[0].prop){const n=i18n.t(t.config.inheritedProps[0].value);let o=s.data.uiResources.resources.views[t.config.name];if(o){Array.isArray(o)&&1===o.length&&"View"===o[0].type&&(o=o[0]);const t="SimpleTable"===o.config.template||"ListView"===o.config.template?"field-table":"field-subview";return z`<div class='${t}'><h3 class='govuk-heading-s'>${n}</h3>${te(o,r,a,s,""===i?e.substring(1):i+e)}</div>`}}return te(s.data.uiResources.resources.views[t.config.name],r,a,s,i&&""!==i?i+e:e.substring(1))}return Rt(t,r,a,s,i)}))}`;if("SimpleTable"===t.config.template)return((t,e,a,s)=>{const i=e||"Editable"!==t.config.renderMode;return z`
  <table class='govuk-table'>
    <caption class="sr-only govuk-table__caption govuk-table__caption--m">${t.config.name}</caption>
    <thead class="govuk-table__head">
      <tr class="govuk-table__row">
        ${Xt(t.config.children[0].children,i)}
      </tr>
    </thead>
    <tbody>
      ${Qt(t,i,a,s)}
    </tbody>
  </table>
  ${Yt(t,i)}`})(t,a,s,`${e}-table`);if("ListView"===t.config.template)return((t,e,a)=>(a.sendData("dataviews",{id:t.config.referenceList,content:{paging:{pageNumber:1,pageSize:41}}}),z`
  <table class='govuk-table'>
    <caption class="sr-only govuk-table__caption govuk-table__caption--m">${t.config.name}</caption>
    <thead class="govuk-table__head">
      <tr class="govuk-table__row">
        ${Xt(t.config.presets[0].children[0].children,e)}
      </tr>
    </thead>
    <tbody>${Gt()}
    </tbody>
  </table>`))(t,a,s);switch("DataReference"===t.config.template&&(s.isDeclarativeTarget=!0),"TwoColumn"===t.config.template&&1===t.children.length&&(t.config.template="OneColumn"),t.config.template){case"TwoColumn":return z`
          <div>
            <div>${te(t.children[0].children,`${e}-0`,a,s,i)}</div>
            <div>${te(t.children[1].children,`${e}-1`,a,s,i)}</div>
          </div>
        `;case"DefaultForm":case"OneColumn":return z`
          <div>
            ${te(t.children[0].children,`${e}-0`,a,s,i)}
          </div>
        `;case"DataReference":return z`
          <div>
            ${te(t.children,`${e}-0`,a,s,i)}
          </div>
        `;case"Details":return z`
          <div>
            ${te(t.children[0].children,`${e}-0`,!0,s,i)}
          </div>
        `;default:return null}},ee=(t,e,a,s)=>void 0===e.caseID&&a.content?z`
    <div>
      <h2 class='govuk-heading-m'>${i18n.t(t)}</h2>
    </div>
    ${((t,e)=>t&&0!==t.length?z`
  <h3>
  ${i18n.t("Assignments")}
  </h3>
  <table class='govuk-table'>
    <caption class="govuk-table__caption govuk-table__caption--m">List of assignments</caption>
    <thead class="govuk-table__head">
      <tr class="govuk-table__row">
        <th span='col' class="govuk-table__header">${i18n.t("Task")}</th>
        <th span='col' class="govuk-table__header">${i18n.t("Priority")}</th>
        <th span='col' class="govuk-table__header">${i18n.t("Assigned")} to</th>
        <th span='col' class="govuk-table__header">${i18n.t("Action")}</th>
      </tr>
    </thead>
      <tbody class="govuk-table__body">
        ${t.map((t=>z`
        <tr class="govuk-table__row">
          <td scope="row" class="govuk-table__header">${t.name}</td>
          <td class="govuk-table__header">${t.urgency}</td>
          <td class="govuk-table__header">${t.assigneeInfo.name}</td>
          <td class="govuk-table__header">
            <button type='button' @click="${e}" class="govuk-button govuk-button--secondary"
            data-module="govuk-button" data-type="assignment" data-id="${t.ID}">${i18n.t("Open")}</button>
          </td>
        </tr>`))}
  </tbody>
  </table> `:null)(a.assignments,s)}`:""===t||void 0===e.caseID?"":z`
  <div>
    <h2 class='govuk-heading-m'>${i18n.t(t)}</h2>
  </div>`,ae=(t,e,a,s,i)=>z`
  <div>${te(t,e,!1,i,"")}</div>
  ${((t,e)=>z`
  <div class="action-button-area">
    ${null!==t?z`<button type="button" class="govuk-button govuk-button--secondary"
    data-module="govuk-button" @click="${t}">${i18n.t("Cancel")}</button>`:""}
    ${null!==e?z`<button type="button" class="govuk-button govuk-button--secondary"
    data-module="govuk-button" @click="${e}">${i18n.t("Save")}</button>`:""}
    <button type="button" data-submit="submit" class="govuk-button" data-module="govuk-button">${i18n.t("Submit")}</button>
  </div>
`)(a,s)}
`,se=(t,e,a,s)=>z`
  <div>${te(t,e,!0,s)}</div>
  ${(t=>null===t?null:z`
  <div class="action-button-area">
  ${null!==t?z`<button type="button" class="govuk-button govuk-button--secondary" data-module="govuk-button"
  @click="${t}">${i18n.t("Close")}</button>`:""}
  </div>`)(a)}
`;class ie extends It{displayContent(){if(this.bShowSave="false",""!==this.errorMsg)return t=this.errorMsg,"true"===this.bShowCancel&&this.resetError,z`
<div class="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" data-module="govuk-error-summary">
<h2 class="govuk-error-summary__title" id="error-summary-title">${t}</h2>
</div>`;var t,e,a,s;if(("oauth2password"===this.authentication||"oauth2clientcredentials"===this.authentication)&&""===this.token)return this.sendData("authenticate",{}),null;if(this.casetypes||"createNewWork"!==this.action&&"workList"!==this.action?"createNewWork"===this.action&&""===this.caseID&&this.casetypes&&this.casetypes[this.casetype]?this.sendData("newwork",{id:this.casetype}):""===this.name&&("openAssignment"===this.action&&""===this.assignmentID&&(this.assignmentID=this.caseID),""!==this.assignmentID?this.fetchData("assignment",{id:this.assignmentID}):""!==this.caseID&&this.fetchData("view",{id:this.caseID,actionid:"pyReview"})):(this.fetchData("dataviews",{id:"D_pxAvailableCaseTypesForPortal",actionid:this.portalName}),this.sendData("dataviews",{id:"D_pyMyWorkList"}),"createNewWork"===this.action?this.bShowNew=!0:"workList"===this.action&&(this.bShowCancel="true")),this.bShowConfirm){this.data.ID.split(" ")[1];return e=this.casedata.name,this.casepyStatusWork,"true"===this.bShowAttachments&&this.displayAttachments,z`
  <div>
    <h2>${i18n.t(e)}</h2>
  </div>
  <div>
    ${i18n.t("Thank you. Your information has been submitted.")}
  </div>
  <div id="case-data"></div>`}return""!==this.caseID||""!==this.assignmentID||this.bShowNew?z`
        ${ee(this.name,this.data,this.casedata,this.openCase)}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
        <form id="case-data" novalidate></form>
      `:"workList"===this.action?(a=this.cases,s=this.openCase,z`
<section>
<h2 class='govuk-heading-m'>${i18n.t("My worklist")}</h2>
  ${a.length>0?z`
        <table class='govuk-table'>
          <caption class="sr-only govuk-table__caption govuk-table__caption--m">${i18n.t("My worklist")}</caption>
          <thead class="govuk-table__head">
            <tr class="govuk-table__row">
              <th span='col' class="govuk-table__header">${i18n.t("Name")}</th>
              <th span='col' class="govuk-table__header">${i18n.t("Status")}</th>
              <th span='col' class="govuk-table__header">${i18n.t("Action")}</th>
            </tr>
          </thead>
          <tbody class="govuk-table__body">
            ${a.map((t=>z`
                <tr class="govuk-table__row">
                  <td scope="row" class="govuk-table__header">${i18n.t(t.name)}</td>
                  <td class="govuk-table__cell">${t.label}</td>
                  <td class="govuk-table__cell">
                    <button @click="${s}" class="govuk-button govuk-button--secondary"
                    data-module="govuk-button" data-type="assignment" data-id="${t.ID}">
                    ${i18n.t("Open")}</button>
                  </td>
                </tr>
              `))}
          </tbody>
        </table>
      `:z`
        <div>${i18n.t("no assignments")}</div>
      `}
      </section>`):null}renderMainLayout=(t,e)=>ae(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this);renderReviewLayout=(t,e)=>se(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,this);genPageValidationErrors=(t,e)=>((t,e)=>t.errorDetails?z`<div class="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" data-module="govuk-error-summary">
    <h2 class="govuk-error-summary__title" id="error-summary-title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
      <ul class="govuk-list govuk-error-summary__list">
    <ul>
      ${t.errorDetails.map((t=>{if("Error_Validation_Fail"===t.message||"Validation failed: Errors Detected."===t.message)return null;const a=t.erroneousInputOutputFieldInPage.substring(1);for(const s of e.elements){let e=s.getAttribute("data-ref"),i=s.getAttribute("id");if(null===e&&"govuk-date-input__item"===s.parentNode.parentNode.className){const t=s.closest(".govuk-form-group").parentNode.parentNode;e=t.getAttribute("data-ref"),i=t.getAttribute("id")}if(e===a)return z`<li><a href="#${i}">${i18n.t(t.localizedValue)}</a></li>`}return z`<li>${i18n.t(t.localizedValue)}</li>`}))}
    </ul></div>
    </div>`:null)(t,e);showDataList=t=>z`
${t.pxResults.map((t=>z`
    <option>
      ${t.pyUserName}
    </option>`))}`;genActionsList=(t,e)=>((t,e)=>{const a=[],s=Object.entries(e.actions);for(const e of s)e[1].name!==t&&a.push(z`
          <li role="menuitem" tabindex="-1" data-value="${e[1].ID}">${i18n.t(e[1].name)}</li>
        `);return z`
    ${a}
  `})(t,e);displayCasesTypes=()=>(t=>{const e=[],a=Object.entries(t);for(const t of a)e.push(z`
        <li role="menuitem" tabindex="-1" data-value="${t[0]}">${i18n.t(t[1].name)}</li>
      `);return z`
    ${e}
  `})(this.casetypes);genLoadingIndicator=()=>Gt();validateForm=t=>{for(const e of t.elements)"INPUT"!==e.tagName&&"TEXTAREA"!==e.tagName&&"SELECT"!==e.tagName||(this.setInlineError(e,""),e.classList.remove("error-field"));return t.checkValidity()};setInlineError=(t,e)=>{let a=t.closest(".govuk-form-group");if(!a)return void t.classList.add("error-field");const s=t.getAttribute("data-ref");"govuk-date-input__item"===t.parentNode.parentNode.className&&(a=t.closest(".govuk-form-group").parentNode.parentNode.parentNode);const i=a.firstElementChild.nextElementSibling;if(null!==s&&"pyID"!==s&&""!==e)if(i&&"govuk-error-message"===i.className)i.lastElementChild.innerText=e;else{const t=document.createElement("span");t.className="govuk-error-message",t.innerHTML=`<span class="govuk-visually-hidden">Error:</span>${e}</span>`,a.insertBefore(t,i),a.classList.add("govuk-form-group--error")}else i&&"govuk-error-message"===i.className&&a.removeChild(i),a.classList.remove("govuk-form-group--error")};reportFormValidity=t=>{for(const e of t.elements)"INPUT"!==e.tagName&&"TEXTAREA"!==e.tagName&&"SELECT"!==e.tagName||this.setInlineError(e,e.validationMessage)};clickHandler=t=>{let e=t.target;"path"===e.tagName&&(e=e.parentNode),"svg"===e.tagName&&(e=e.parentNode);const a=e.getAttribute("data-action-click");if(e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e),yt(e,"click"))this.refreshAssignment(e,bt(e,"click")),t.preventDefault();else if("BUTTON"===e.tagName)if(t.preventDefault(),null!==e.getAttribute("data-submit")&&"save"!==e.getAttribute("data-submit"))this.submitForm(t,e.getAttribute("data-submit"));else if("addRow"===a||"deleteRow"===a){this.applyAction(e);const t=this.getRenderRoot().querySelector("#case-data");it(ae(this.data.uiResources.resources.views[this.casedata.content.pyViewName],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),t)}};changeHandler=t=>{let e=t.target;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e.setCustomValidity(""),e.classList.remove("error-field"),yt(e,"change")||this.isDeclarativeTarget)this.refreshAssignment(e,bt(e,"change"));else if(this.refreshOnChange){const t=this.getRenderRoot().querySelector("#case-data");wt(t,this.content,this.pageInstructions,this.data.data.caseInfo.content),it(ae(this.data.uiResources.resources.views[this.casedata.content.pyViewName],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),t)}};keyupHandler=t=>{const e=t.target;"TEXTAREA"===e.tagName&&(e.style.cssText="height:auto; padding:0;",e.style.cssText=`height:${e.scrollHeight}px`)};focusHandler=t=>{const e=t.target;e.classList.contains("combobox")&&!e.classList.contains("loaded")?this.getData(e.getAttribute("data-pageid"),e):"INPUT"===e.tagName&&e.classList.contains("location")&&!e.classList.contains("pac-target-input")&&window.google&&window.google.maps&&window.google.maps.places&&new window.google.maps.places.Autocomplete(e)};async firstUpdated(){const t=this.getRenderRoot();t&&(t.addEventListener("click",this.clickHandler),t.addEventListener("focusin",this.focusHandler),t.addEventListener("change",this.changeHandler),t.addEventListener("keyup",this.keyupHandler))}}class ne extends ie{createRenderRoot(){return this}getRenderRoot(){return this}render(){return z`
      ${this.displayContent()}
    `}}return customElements.define("pega-govuk",ne),t.PegaGovUK=ne,t}({});
