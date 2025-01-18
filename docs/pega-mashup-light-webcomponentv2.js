var PegaMashupLightWebComponentv2=function(t){"use strict";
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const e=globalThis,a=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let n=class{constructor(t,e,a){if(this._$cssResult$=!0,a!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(a&&void 0===t){const a=void 0!==e&&1===e.length;a&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),a&&s.set(e,t))}return t}toString(){return this.cssText}};const r=a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const a of t.cssRules)e+=a.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,{is:o,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,p=globalThis,g=p.trustedTypes,f=g?g.emptyScript:"",m=p.reactiveElementPolyfillSupport,$=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let a=t;switch(e){case Boolean:a=null!==t;break;case Number:a=null===t?null:Number(t);break;case Object:case Array:try{a=JSON.parse(t)}catch(t){a=null}}return a}},v=(t,e)=>!o(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class C extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const a=Symbol(),i=this.getPropertyDescriptor(t,a,e);void 0!==i&&l(this.prototype,t,i)}}static getPropertyDescriptor(t,e,a){const{get:i,set:s}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const n=i?.call(this);s.call(this,e),this.requestUpdate(t,n,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const a of e)this.createProperty(a,t[a])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,a]of e)this.elementProperties.set(t,a)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const a=this._$Eu(t,e);void 0!==a&&this._$Eh.set(a,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const a=new Set(t.flat(1/0).reverse());for(const t of a)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const a=e.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const a of e.keys())this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(a)t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const a of i){const i=document.createElement("style"),s=e.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=a.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,a){this._$AK(t,a)}_$EC(t,e){const a=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,a);if(void 0!==i&&!0===a.reflect){const s=(void 0!==a.converter?.toAttribute?a.converter:y).toAttribute(e,a.type);this._$Em=t,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){const a=this.constructor,i=a._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=a.getPropertyOptions(i),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=i,this[i]=s.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,a){if(void 0!==t){if(a??=this.constructor.getPropertyOptions(t),!(a.hasChanged??v)(this[t],e))return;this.P(t,e,a)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,a){this._$AL.has(t)||this._$AL.set(t,e),!0===a.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,a]of t)!0!==a.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],a)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[$("elementProperties")]=new Map,C[$("finalized")]=new Map,m?.({ReactiveElement:C}),(p.reactiveElementVersions??=[]).push("2.0.4");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const w=globalThis,A=w.trustedTypes,_=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,x="$lit$",D=`lit$${Math.random().toFixed(9).slice(2)}$`,I="?"+D,S=`<${I}>`,k=document,E=()=>k.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,L=Array.isArray,R="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,M=/>/g,z=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,O=/"/g,H=/^(?:script|style|textarea|title)$/i,q=(t=>(e,...a)=>({_$litType$:t,strings:e,values:a}))(1),V=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),F=new WeakMap,B=k.createTreeWalker(k,129);function W(t,e){if(!L(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==_?_.createHTML(e):e}const Z=(t,e)=>{const a=t.length-1,i=[];let s,n=2===e?"<svg>":3===e?"<math>":"",r=N;for(let e=0;e<a;e++){const a=t[e];let o,l,c=-1,d=0;for(;d<a.length&&(r.lastIndex=d,l=r.exec(a),null!==l);)d=r.lastIndex,r===N?"!--"===l[1]?r=P:void 0!==l[1]?r=M:void 0!==l[2]?(H.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=z):void 0!==l[3]&&(r=z):r===z?">"===l[0]?(r=s??N,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,o=l[1],r=void 0===l[3]?z:'"'===l[3]?O:U):r===O||r===U?r=z:r===P||r===M?r=N:(r=z,s=void 0);const h=r===z&&t[e+1].startsWith("/>")?" ":"";n+=r===N?a+S:c>=0?(i.push(o),a.slice(0,c)+x+a.slice(c)+D+h):a+D+(-2===c?e:h)}return[W(t,n+(t[a]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class K{constructor({strings:t,_$litType$:e},a){let i;this.parts=[];let s=0,n=0;const r=t.length-1,o=this.parts,[l,c]=Z(t,e);if(this.el=K.createElement(l,a),B.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=B.nextNode())&&o.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(x)){const e=c[n++],a=i.getAttribute(t).split(D),r=/([.?@])?(.*)/.exec(e);o.push({type:1,index:s,name:r[2],strings:a,ctor:"."===r[1]?Q:"?"===r[1]?tt:"@"===r[1]?et:G}),i.removeAttribute(t)}else t.startsWith(D)&&(o.push({type:6,index:s}),i.removeAttribute(t));if(H.test(i.tagName)){const t=i.textContent.split(D),e=t.length-1;if(e>0){i.textContent=A?A.emptyScript:"";for(let a=0;a<e;a++)i.append(t[a],E()),B.nextNode(),o.push({type:2,index:++s});i.append(t[e],E())}}}else if(8===i.nodeType)if(i.data===I)o.push({type:2,index:s});else{let t=-1;for(;-1!==(t=i.data.indexOf(D,t+1));)o.push({type:7,index:s}),t+=D.length-1}s++}}static createElement(t,e){const a=k.createElement("template");return a.innerHTML=t,a}}function J(t,e,a=t,i){if(e===V)return e;let s=void 0!==i?a._$Co?.[i]:a._$Cl;const n=T(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(t),s._$AT(t,a,i)),void 0!==i?(a._$Co??=[])[i]=s:a._$Cl=s),void 0!==s&&(e=J(t,s._$AS(t,e.values),s,i)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:a}=this._$AD,i=(t?.creationScope??k).importNode(e,!0);B.currentNode=i;let s=B.nextNode(),n=0,r=0,o=a[0];for(;void 0!==o;){if(n===o.index){let e;2===o.type?e=new X(s,s.nextSibling,this,t):1===o.type?e=new o.ctor(s,o.name,o.strings,this,t):6===o.type&&(e=new at(s,this,t)),this._$AV.push(e),o=a[++r]}n!==o?.index&&(s=B.nextNode(),n++)}return B.currentNode=k,i}p(t){let e=0;for(const a of this._$AV)void 0!==a&&(void 0!==a.strings?(a._$AI(t,a,e),e+=a.strings.length-2):a._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,a,i){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=a,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),T(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>L(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==j&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:a}=t,i="number"==typeof a?this._$AC(t):(void 0===a.el&&(a.el=K.createElement(W(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Y(i,this),a=t.u(this.options);t.p(e),this.T(a),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new K(t)),e}k(t){L(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let a,i=0;for(const s of t)i===e.length?e.push(a=new X(this.O(E()),this.O(E()),this,this.options)):a=e[i],a._$AI(s),i++;i<e.length&&(this._$AR(a&&a._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class G{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,a,i,s){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=j}_$AI(t,e=this,a,i){const s=this.strings;let n=!1;if(void 0===s)t=J(this,t,e,0),n=!T(t)||t!==this._$AH&&t!==V,n&&(this._$AH=t);else{const i=t;let r,o;for(t=s[0],r=0;r<s.length-1;r++)o=J(this,i[a+r],e,r),o===V&&(o=this._$AH[r]),n||=!T(o)||o!==this._$AH[r],o===j?t=j:t!==j&&(t+=(o??"")+s[r+1]),this._$AH[r]=o}n&&!i&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Q extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}}class tt extends G{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==j)}}class et extends G{constructor(t,e,a,i,s){super(t,e,a,i,s),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??j)===V)return;const a=this._$AH,i=t===j&&a!==j||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,s=t!==j&&(a===j||i);i&&this.element.removeEventListener(this.name,this,a),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class at{constructor(t,e,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const it=w.litHtmlPolyfillSupport;it?.(K,X),(w.litHtmlVersions??=[]).push("3.2.1");const st=(t,e,a)=>{const i=a?.renderBefore??e;let s=i._$litPart$;if(void 0===s){const t=a?.renderBefore??null;i._$litPart$=s=new X(e.insertBefore(E(),t),t,void 0,a??{})}return s._$AI(t),s
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */};let nt=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=st(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}};nt._$litElement$=!0,nt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:nt});const rt=globalThis.litElementPolyfillSupport;rt?.({LitElement:nt}),(globalThis.litElementVersions??=[]).push("4.1.1");const ot=()=>q`
<span class="loading">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</span>
`,lt=()=>q`
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
</svg>`,ut=t=>`0${t}`.slice(-2),pt=t=>`0${t}`.slice(-4),gt=t=>{if(t.endsWith(" GMT")&&23===t.length)return new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T${t.substring(9,11)}:${t.substring(11,13)}:${t.substring(13,19)}Z`);if(8===t.length){return new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T00:00:00.000Z`)}if(10===t.length&&2===t.indexOf("/")){return new Date(`${t.substring(6,10)}-${t.substring(0,2)}-${t.substring(3,5)}T00:00:00.000Z`)}if(10===t.length&&4===t.indexOf("-")){return new Date(`${t}T00:00:00.000Z`)}return null},ft=t=>t&&"string"==typeof t?t.replace(/&amp;|&lt;|&gt;|&#39;|&#40;|&#41;|&quot;/g,(t=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&#40;":"(","&#41;":")","&quot;":'"'}[t]||t))):"",mt=(t,e,a,i,s)=>{if("string"!=typeof e)return;if(i){const t=yt(i,e);if(t===s||`${t}`==`${s}`||null===t&&""===s)return;$t(i,e,s)}const n=e.lastIndexOf(".");if(-1===n)return void(t[e]=s);if(!a)return void $t(t,e,s);const r={};let o=e.substring(0,n);const l=o.lastIndexOf("(");if(-1===l)r[e.substring(n+1)]=s,a.push({instruction:"UPDATE",target:o,content:r});else{const t=o.lastIndexOf(")"),i=o.substring(l+1,t);o=o.substring(0,l),$t(r,e.substring(t+2),s),a.push({instruction:"UPDATE",target:o,listIndex:parseInt(i,10),content:r})}},$t=(t,e,a)=>{if("string"!=typeof e)return;const i=e.split(".");let s=t;for(const t in i){let e=i[t];const n=e.indexOf("(");if(-1===n)t<i.length-1?void 0===s[e]&&(s[e]={}):s[e]=a,s=s[e];else{const t=e.substring(n+1,e.length-1);e=e.substring(0,n),void 0===s[e]&&(s[e]=[]);for(let a=s[e].length;a<t;a++)s[e].push({});s=s[e][t-1]}}},yt=(t,e)=>{if("string"!=typeof e||""===e)return null;let a=e;0===e.indexOf(".")&&(a=e.substring(1));let i=t;const s=a.split(".");for(const t in s){const e=s[t],a=e.indexOf("(");if(-1===a){if(void 0===i[e])return null;i=i[e]}else{const t=e.substring(a+1,e.length-1),s=i[e.substring(0,a)];if(!(s&&Array.isArray(s)&&s.length>=t))return null;i=s[t-1]}}return i},vt=t=>{for(const e in t)"object"==typeof t[e]?vt(t[e]):"string"==typeof t[e]&&(t[e]="")},bt=(t,e)=>{const a=t.getAttribute(`data-action-${e}`);return!(!a||"postValue"!==a&&0!==a.indexOf("refresh"))},Ct=(t,e)=>{const a=t.getAttribute(`data-action-${e}`);return a&&0===a.indexOf("refresh")?a.replace("refresh-",""):""};function wt(t,e,a){try{switch(e){case">":return parseInt(t,10)>parseInt(a,10);case"<":return parseInt(t,10)<parseInt(a,10);case">=":return parseInt(t,10)>=parseInt(a,10);case"<=":return parseInt(t,10)<=parseInt(a,10);case"==":return`${t}`==`${a}`;case"!=":return`${t}`!=`${a}`}}catch{}return!1}const At=(t,e,a,i)=>{if(t.startsWith("@E ")){const a=t.replace("@E ","").split("&&");for(const t in a){const s=a[t].trim().match(/[\w.]+|[><=!]+|'[^']+'/g);if(3===s.length){const t=""===i?e[s[0].substring(1)]:yt(e,i+s[0]);if(void 0!==t&&!wt(t,s[1],s[2].replace(/^'|'$/g,"")))return!1}else if(2===s.length&&"IS_NOT_NULL"===s[1]){const t=""===i?e[s[0].substring(1)]:yt(e,i+s[0]);if(void 0!==t&&!wt(t,"!=",""))return!1}}}else if(t.startsWith("@W ")){const e=t.replace("@W ","").split("&&"),i=a?.data?.uiResources?.context_data?.caseInfo?.content?.summary_of_when_conditions__;if(i)for(const t in e){if(!i[e[t]])return!1}}return!0},_t=(t,e,a,i)=>{for(const s of t.elements)if("INPUT"===s.tagName||"TEXTAREA"===s.tagName||"SELECT"===s.tagName){const t=s.getAttribute("data-ref");if(null!==t&&"pyID"!==t)if("INPUT"===s.tagName){const n=s.getAttribute("type");if(s.classList.contains("input-date-day")||s.classList.contains("input-date-month")||s.classList.contains("input-date-year")){if(s.classList.contains("input-date-day")){const n=s.closest(".input-date").parentNode,r=n.querySelector(".input-date-month"),o=n.querySelector(".input-date-year");if(null!==r&&null!==o&&""!==s.value&&""!==r.value&&""!==o.value){const n=`${ut(r.value)}/${ut(s.value)}/${pt(o.value)}`;mt(e,t,a,i,n)}}}else if("checkbox"===n)mt(e,t,a,i,s.checked);else if("radio"===n)s.checked&&mt(e,t,a,i,s.value);else if("tel"===n){let n=s.value;"SELECT"===s.parentNode.firstElementChild.tagName&&"field-countrycode"===s.parentNode.firstElementChild.className&&(n=s.parentNode.firstElementChild.value+n),mt(e,t,a,i,n)}else if("date"===n){let n;s.valueAsDate&&(n=new Date(s.valueAsDate)),n&&n instanceof Date&&n.getTime()==n.getTime()||(n=new Date(s.value)),n&&n instanceof Date&&n.getTime()==n.getTime()?mt(e,t,a,i,`${n.getUTCFullYear()}-${ut(n.getUTCMonth()+1)}-${ut(n.getUTCDate())}`):mt(e,t,a,i,s.value)}else mt(e,t,a,i,s.value)}else mt(e,t,a,i,s.value)}if(t&&t.querySelectorAll){const n=t.querySelectorAll("[contenteditable]");for(let t=0;t<n.length;t++){const r=n[t],o=r.getAttribute("data-ref");mt(e,o,a,i,(s=r.innerHTML)&&"string"==typeof s?s.replace(/[&<>'"]/g,(t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","(":"&#40;",")":"&#41;",'"':"&quot;"}[t]||t))):"")}}var s};function xt(t){return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Dt(t,e,a){t(null,{verifier:e,challenge:xt(String.fromCharCode.apply(null,new Uint8Array(a)))})}const It=()=>new Promise(((t,e)=>{!function(t,e){let a=t;const i=window.msCrypto||window.crypto,s=xt(Array.prototype.map.call(i.getRandomValues(new Uint8Array(a)),(t=>String.fromCharCode(t))).join("")).substring(0,a),n=new Uint8Array(s.length);for(let t=0;t<s.length;t++)n[t]=s.charCodeAt(t);const r=i.subtle.digest("SHA-256",n);window.CryptoOperation?(r.onerror=e,r.oncomplete=t=>{Dt(e,s,t.target.result)}):r.then((t=>{Dt(e,s,t)})).catch(e)}(43,((a,{verifier:i,challenge:s})=>{a?e(new Error("error")):t({verifier:i,challenge:s})}))})),St=(t,e,a,i,s)=>{if(null==i)return null;let n;const r=`${Math.random().toString(36).substr(2,9)}`,o=document.createElement("ul");o.setAttribute("id",`menu-overlay-${r}`),o.setAttribute("role","menu"),o.setAttribute("aria-labelledby",`menubutton-${r}`),o.setAttribute("tabindex","-1");const l=()=>{document.body.removeEventListener("click",d),document.body.removeEventListener("keydown",c),o&&(o.previousElementSibling&&(o.previousElementSibling.setAttribute("aria-expanded","false"),o.previousElementSibling.focus()),o.remove())},c=t=>{38===t.keyCode?(n=n.previousElementSibling,null===n&&(n=o.lastElementChild),n.focus()):40===t.keyCode?(n=n.nextElementSibling,null===n&&(n=o.firstElementChild),n.focus()):27===t.keyCode||9===t.keyCode?l():13===t.keyCode&&(i(t),l())},d=t=>{if(t){let e=t.target;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&e.nextElementSibling===o)return;e.parentNode===o&&i(t),l()}},h=t=>{if("keydown"===t.type&&40!==t.keyCode)return;if(t.preventDefault(),t.stopPropagation(),"blur"===t.type)return void d(t);const e=t.currentTarget;"BUTTON"!==e.tagName?(i(t),l()):null===e.nextElementSibling?(e.parentNode.appendChild(o),e.setAttribute("aria-expanded","true"),st(a(),o),n=e.nextElementSibling.firstElementChild,n.focus(),document.body.addEventListener("click",d),document.body.addEventListener("keydown",c)):l()};return q`
    <div class="button-menu">
    <button type='button' id="${`menubutton-${r}`}" aria-haspopup="true" aria-controls="${`menu-overlay-${r}`}" aria-expanded="false"
    @click="${h}" @keydown="${h}" @blur="${h}"
    class="${`pzhc pzbutton Simple ${s||"action-menu"}`}" aria-label="${i18n.t(e)}">${i18n.t(t)}</button>
    </div>
  `},kt=(t,e,a,i)=>((t,e,a,i)=>{const s=document.createElement("div");s.setAttribute("role","alertdialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-labelledby",t),s.setAttribute("aria-describedby",""),s.setAttribute("class","mashup-modal");const n=document.createElement("div");s.appendChild(n);const r='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',o=()=>{document.body.removeEventListener("click",l),document.body.removeEventListener("keydown",c),s&&(s.previousElementSibling&&(s.previousElementSibling.removeAttribute("aria-hidden"),s.previousElementSibling.focus()),s.remove())},l=t=>{if(t){let e=t.target;if(e.download)return;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e){const t=e.closest("button");if((null===t||"close"!==t.getAttribute("data-action-id"))&&!e.classList.contains("mashup-modal")&&null!==e.closest(".mashup-modal"))return}o()}},c=t=>{if("Escape"===t.key)return void l(t);if("Tab"!==t.key&&9!==t.keyCode)return;const e=s.querySelectorAll(r),a=e[e.length-1],i=e[0];t.shiftKey?document.activeElement===i&&(a.focus(),t.preventDefault()):document.activeElement===a&&(i.focus(),t.preventDefault())};return q`
  <div class='modalcontent'>
    <button type="button" @click="${t=>{t.preventDefault(),t.stopPropagation();const e=t.target.closest(".modalcontent");null===e?o():1===e.children.length?(e.firstElementChild.setAttribute("aria-hidden","true"),s.style.opacity=0,e.appendChild(s),i(n),s.querySelectorAll(r)[0].focus(),document.body.addEventListener("click",l),document.body.addEventListener("keydown",c),s.offsetHeight,s.style=""):o()}}" class="pzhc pzbutton ${a}" title="${i18n.t(t)}">${i18n.t(e)}</button>
  </div>`})(t,e,a,(t=>{st(Et(t,[]),t),i(t)})),Et=(t,e,a,i,s)=>{let n=0;const r=t=>{if(void 0===t||"string"==typeof t&&""===t)return;if("URL"===e[n].category)return void window.open(t);let a=e[n].fileName;if(void 0===a&&(a=e[n].name),void 0===a&&(a=e[n].pyAttachName),!a)return;const i=window.document.createElement("a");if("Correspondence"===e[n].category){a=`${e[n].name}.html`;const s=`<html><head><title>${e[n].name}</title></head><body>${t}</body></html>`,r=new Blob([s],{type:"text"});i.href=window.URL.createObjectURL(r)}else{const e=function(t){const e=window.atob(t),a=e.length,i=new Uint8Array(a);for(let t=0;t<a;t++){const a=e.charCodeAt(t);i[t]=a}return i}(t),a=new Blob([e],{type:"octet/stream"});i.href=window.URL.createObjectURL(a)}i.download=a,document.body.appendChild(i),i.click(),document.body.removeChild(i)},o=t=>{t.stopPropagation();const a=t.target;n=a.getAttribute("data-id"),i.fetchData.call(i,"attachment",{id:e[n].ID,target:r})},l=a=>{a.preventDefault(),a.stopPropagation();const s=a.target.closest("button");n=s.getAttribute("data-id"),i.sendData.call(i,"deleteattachment",{id:e[n].ID,target:t})},c=r=>{r.stopPropagation();const o=r.target.closest("button");n=parseInt(o.getAttribute("data-id"),10),s.splice(n,1),st(Et(t,e,a,i,s),t)},d=t=>{t.stopPropagation(),t.preventDefault();const e=t.target;if(n=e.getAttribute("data-id"),"INPUT"===e.tagName){const t=e.getAttribute("data-prop-id");s[n][t]=e.value}else"SELECT"===e.tagName&&(s[n].category=e.value)},h=e=>{e.preventDefault();const a=e.target,i=e.relatedTarget,s=null===a?null:a.closest(".attach-files"),n=null===i?null:i.closest(".attach-files");if("dragenter"===e.type||"dragover"===e.type?null!=s&&s.classList.add("drop-file-hover"):"dragleave"!==e.type&&"drop"!==e.type||null===n&&null!==s&&s.classList.remove("drop-file-hover"),"drop"===e.type){const i=e.dataTransfer.files;t||(t=a.closest(".attach-files")),p(a,i)}},u=n=>{n&&(n.stopPropagation(),n.preventDefault());for(let n=0;n<s.length;n++){const r=s[n];delete r.editing,r.loading=!0,"URL"===r.type?(e.unshift(r),i.sendData.call(i,"attachments",{id:a,actionid:[r],target:t})):(e.unshift({name:r.displayName,extension:r.extension,loading:!0}),i.sendData.call(i,"uploadattachment",{actionid:r,target:t}))}st(Et(t,e,a,i),t)},p=(s,n)=>{const r=[];for(let t=0;t<n.length;t++){const e=n[t];let a=e.name.lastIndexOf(".");-1===a&&(a=e.name.length),e.displayName=e.name.substring(0,a),e.extension=e.name.substring(a+1),e.editing=!0,e.category="File",r.push(e)}st(Et(t,e,a,i,r),t)},g=e=>{e.stopPropagation();let a=e.target;if("BUTTON"===a.tagName)return a=e.target.parentNode.parentNode.firstElementChild,void a.click();t||(t=a.closest(".attach-files")),p(a,a.files)},f=s=>{s.stopPropagation();st(Et(t,e,a,i,[{type:"URL",category:"URL",name:"",url:"",editing:!0}]),t)},m=s=>{s.stopPropagation(),st(Et(t,e,a,i),t)},$=(t,e)=>{let a=new Date(e.createTime);return a=a.toLocaleDateString(void 0,{year:"numeric",month:"numeric",day:"numeric"}),q`
    <div class='list-item-title'>
      <button type='button' class='Light'  data-id="${t}" @click="${o}">${e.name}</button>
      ${e.loading?"":q`
      <span class='list-item-meta'><span>${e.createdBy}</span><span>${a}</span><span>${i18n.t("Category:")} ${e.category}</span></span>`}
    </div>`},y=()=>q`<li role="menuitem" tabindex="-1" data-value="Download">${i18n.t("Download")}</li>
  <li role="menuitem" tabindex="-1" data-value="Delete">${i18n.t("Delete")}</li>`,v=s=>{let o=s.target;if(s.path&&s.path.length>0?o=s.path[0]:s.originalTarget&&(o=s.originalTarget),o){const s=o.getAttribute("data-value"),l=e[n].pzInsKey||e[n].ID;"Download"===s?i.fetchData.call(i,"attachment",{id:l,target:r}):"Delete"===s&&(i.sendData.call(i,"deleteattachment",{id:l,target:t}),st(Et(void 0,[],a,i,[]),t))}},b=t=>q`<div class='row-item'>
    <span class='doc-icon'>${ht()}<span>${t.extension}</span></span>
    <div class='list-item-title'><span>${t.pyAttachName||t.name}</span>
    <span class="list-item-meta"><span>${t.pyCategoryName||t.category}</span>
    <span>${t.pxCreateOperator||t.createdBy}</span></span></div>
    ${St(q`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
<path d="M14.353125,6.353125 C13.9703125,6.7359375 13.4914062,6.928125 12.9640625,6.928125 C12.4367188,6.928125 11.9585938,6.73671875 11.575,6.353125 C11.1921875,5.9703125 11,5.49140625 11,4.9640625 C11,4.43671875 11.1914062,3.95859375 11.575,3.575 C11.9578125,3.1921875 12.4367188,3 12.9640625,3 C13.4914063,3 13.9695312,3.19140625 14.353125,3.575 C14.7359375,3.9578125 14.928125,4.43671875 14.928125,4.9640625 C14.928125,5.49140625 14.7367187,5.96953125 14.353125,6.353125 Z M14.353125,13.7289063 C13.9703125,14.1117188 13.4914062,14.3039063 12.9640625,14.3039063 C12.4367188,14.3039063 11.9585938,14.1125 11.575,13.7289063 C11.1921875,13.3460938 11,12.8671875 11,12.3398438 C11,11.8125 11.1914062,11.334375 11.575,10.9507813 C11.9578125,10.5679688 12.4367188,10.3757813 12.9640625,10.3757813 C13.4914063,10.3757813 13.9695312,10.5671875 14.353125,10.9507813 C14.7359375,11.3335938 14.928125,11.8125 14.928125,12.3398438 C14.928125,12.8671875 14.7367187,13.3453125 14.353125,13.7289063 Z M14.353125,21.1039062 C13.9703125,21.4867187 13.4914062,21.6789062 12.9640625,21.6789062 C12.4367188,21.6789062 11.9585938,21.4875 11.575,21.1039062 C11.1921875,20.7210938 11,20.2421875 11,19.7148438 C11,19.1875 11.1914062,18.709375 11.575,18.3257813 C11.9578125,17.9429688 12.4367188,17.7507813 12.9640625,17.7507813 C13.4914063,17.7507813 13.9695312,17.9421875 14.353125,18.3257813 C14.7359375,18.7085937 14.928125,19.1875 14.928125,19.7148438 C14.928125,20.2421875 14.7367187,20.7203125 14.353125,21.1039062 Z"></path>
</svg>`,"Actions",y,v,"button-action")}
  </div>`,C=(t,e)=>e.loading?q`${$(t,e)}${ot()}`:e.editing?"URL"===e.type?q`
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
      aria-label=${i18n.t("Delete")}>${ct()}</button>`:q`${$(t,e)}
    <button type='button' data-id="${t}" @click="${l}" class='pzhc pzbutton Simple'
    aria-label=${i18n.t("Delete")}>${ct()}</button>`,w=t=>{if(!a)return ot();const e=[];if(void 0!==t){const a=Object.entries(t);for(const t of a){let a=t[1].extension;void 0===a&&(a=t[1].type),a||(a=""),a.length>5&&(a=a.substring(0,5)),"URL"===t[1].type&&t[1].editing?e.push(q`<div class='flex layout-content-stacked content-items-maxwidth'>
              ${C(t[0],t[1])}
            </div>`):e.push(q`<div class='row-item'>
              <span class='doc-icon'>${ht()}<span>${a}</span></span>
              ${C(t[0],t[1])}
            </div>`)}}return e.length>0?e:q`<div class='empty'>${i18n.t("no attachments found")}</div>`};if(!t){if(e&&e.length>0&&e[0].pyAttachName){n=0,e[0].extension="";const t=e[0].pyAttachName.split(".");return t.length>1&&(e[0].extension=t[t.length-1]),b(e[0])}return q`<div @dragenter="${h}" @dragover="${h}" @dragleave="${h}"
    @drop="${h}" class='attach-files list-items'>
      <div class="file-upload">
        <input @change="${g}" type="file">
        ${dt()}<span>${i18n.t(" Drag and drop or ")}
        <button type='button' aria-labelledby='${i18n.t("click to attach a file")}' class='Light' @click="${g}">${i18n.t("choose file")}</button>
      </div>
    </div>`}if(t&&t.classList.contains("attach-files")){if(s&&s.length>0)return i.sendData.call(i,"uploadattachment",{actionid:s[0],target:t}),A=s[0],q`<div class='row-item'>
    <span class='doc-icon'>${ht()}<span>${A.extension}</span></span>
    <div class='list-item-title'><span>${A.displayName}</span>${q`<span class="list-item-meta"><span>
    ${i18n.t("Uploading...")}</span></span>`}</div>
  </div>`;if(e&&e.length>0)return b(e[0])}var A;let _="Attachments";return void 0!==s&&s.length>0&&(_="URL"===s[0].type?"Attach a link":"Attach files"),q`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${i18n.t(_)}</h2>
      <div class="flex layout-content-inline_middle margin-l-auto">
        <button type='button' data-action-id='close'
        class="pzhc pzbutton Simple" aria-label="${i18n.t("Close modal")}">${lt()}</button>
      </div>
    </div>
    ${void 0!==s&&s.length>0?q`
      <div id="modalcontent" class='attach-files list-items'>
        <div class='upload-content'>${w(s)}</div>
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
  `};class Tt extends nt{static get properties(){return{url:{},caseID:{},dataviewParams:{type:Object},username:{},password:{},headingLabel:{},bShowCreate:{},bShowCancel:{},bShowAttachments:{},bShowSave:{},bShowActions:{},authentication:{},token:{},clientid:{},clientsecret:{},initialContent:{},action:{},casetype:{},portalName:{},langTokens:{}}}constructor(){super(),this.url="",this.headingLabel="My worklist",this.caseID="",this.username="",this.password="",this.bShowCreate="true",this.bShowCancel="true",this.bShowAttachments="false",this.bShowSave="true",this.bShowActions="true",this.authentication="",this.token="",this.clientid="",this.clientsecret="",this.initialContent="",this.action="",this.casetype="",this.portalName="",this.cases=[],this.dataPages={},this.name="",this.etag="",this.casepyStatusWork="",this.casedata={},this.data={},this.numAttachments=0,this.attachmentcategories=[],this.assignmentID="",this.actionID="",this.content={},this.dataviewParams={},this.pageInstructions=[],this.errorMsg="",this.validationMsg="",this.bShowConfirm=!1,this.bShowNew=!1,this.refreshOnChange=!1,this.isDeclarativeTarget=!1;const t=this;window.i18n||(window.i18n={t:function(e){if(!e)return"";if("string"!=typeof e)return e;let a=e;if(0===a.indexOf("@L ")&&(a=a.substring(3)),0===a.indexOf("@FL ")&&(a=a.substring(4)),a=a.replace(/^"|"$/g,"").trim(),a=ft(a),"object"!=typeof t.langTokens)return a;const i=t.langTokens[a];return i&&""!==i?i.trim():(console.log(a),a)}})}clearLoadingIndicator(){const t=this.getRenderRoot().querySelector("#case-data");t&&null!==t.querySelector(".loading")&&st(null,t)}sendExternalEvent(t){this.dispatchEvent(new CustomEvent("message",{detail:{...t}}))}}
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const Lt=2;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */let Rt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,a){this._$Ct=t,this._$AM=e,this._$Ci=a}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const Nt=(t,e)=>{const a=t._$AN;if(void 0===a)return!1;for(const t of a)t._$AO?.(e,!1),Nt(t,e);return!0},Pt=t=>{let e,a;do{if(void 0===(e=t._$AM))break;a=e._$AN,a.delete(t),t=e}while(0===a?.size)},Mt=t=>{for(let e;e=t._$AM;t=e){let a=e._$AN;if(void 0===a)e._$AN=a=new Set;else if(a.has(t))break;a.add(t),Ot(e)}};function zt(t){void 0!==this._$AN?(Pt(this),this._$AM=t,Mt(this)):this._$AM=t}function Ut(t,e=!1,a=0){const i=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size)if(e)if(Array.isArray(i))for(let t=a;t<i.length;t++)Nt(i[t],!1),Pt(i[t]);else null!=i&&(Nt(i,!1),Pt(i));else Nt(this,t)}const Ot=t=>{t.type==Lt&&(t._$AP??=Ut,t._$AQ??=zt)};class Ht extends Rt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,a){super._$AT(t,e,a),Mt(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(Nt(this,t),Pt(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class qt{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class Vt{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise((t=>this.q=t))}resume(){this.q?.(),this.Z=this.q=void 0}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const jt=t=>!(t=>null===t||"object"!=typeof t&&"function"!=typeof t)(t)&&"function"==typeof t.then,Ft=1073741823;const Bt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends Ht{constructor(){super(...arguments),this._$Cwt=Ft,this._$Cbt=[],this._$CK=new qt(this),this._$CX=new Vt}render(...t){return t.find((t=>!jt(t)))??V}update(t,e){const a=this._$Cbt;let i=a.length;this._$Cbt=e;const s=this._$CK,n=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){const r=e[t];if(!jt(r))return this._$Cwt=t,r;t<i&&r===a[t]||(this._$Cwt=Ft,i=0,Promise.resolve(r).then((async t=>{for(;n.get();)await n.get();const e=s.deref();if(void 0!==e){const a=e._$Cbt.indexOf(r);a>-1&&a<e._$Cwt&&(e._$Cwt=a,e.setValue(t))}})))}return V}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}),Wt=()=>`${window.location.href.substring(0,window.location.href.lastIndexOf("/"))}/auth.html`;class Zt extends Tt{resetError=t=>{this.errorMsg="",this.validationMsg="",this.actionAreaCancel(t)};reloadWorkList=t=>{this.cases=[],this.requestUpdate(),this.actionAreaCancel(t)};actionAreaCancel=t=>{if(t&&t.preventDefault(),this.bShowConfirm=!1,this.bShowNew=!1,this.caseID="",this.data={},this.content={},this.pageInstructions=[],this.casedata={},this.attachmentcategories=[],this.casepyStatusWork="",this.assignmentID="",this.actionID="",this.errorMsg="",this.numAttachments=0,this.validationMsg="",this.name="","workList"!==this.action&&"taskList"!==this.action||(this.fetchData("dataviews",{id:"D_pxAvailableCaseTypesForPortal",actionid:this.portalName}),this.sendData("dataviews",{id:"D_pyMyWorkList"})),"dataView"===this.action){const t={};if(this.dataviewParams)for(const e of this.dataviewParams.params)e.name&&e.value&&(t[e.name.trim()]=e.value.trim());this.sendData("dataviews",{id:this.dataviewParams.name,content:{dataViewParameters:t}})}this.sendExternalEvent({type:"cancel"})};actionAreaSave=t=>{t&&t.preventDefault(),null===t.target.getAttribute("data-submit")&&(t.target.textContent="Saving...",t.target.disabled=!0);const e=this.getRenderRoot().querySelector("#case-data");e&&(_t(e,this.content,this.pageInstructions,this.data.data.caseInfo.content),""!==this.assignmentID?this.sendData("savecase",{id:this.caseID,actionid:"",target:t.target}):this.sendData("savecase",{id:this.caseID,actionid:this.actionID,target:t.target}))};actionRefresh=()=>{const t=this.getRenderRoot().querySelector("#case-data");t&&(this.validationMsg="",_t(t,this.content,this.pageInstructions,this.data.data.caseInfo.content),this.fetchData("caseaction",{id:this.caseID,actionid:this.actionID}))};displayActions=()=>this.data.actions?this.genActionsList(this.name,this.data):this.casedata.actions?this.genActionsList(this.name,this.casedata):null;displayAttachments=t=>{this.fetchData("attachmentcategories",{id:this.caseID}),this.fetchData("attachments",{id:this.caseID,target:t})};submitForm=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");return _t(a,this.content,this.pageInstructions,this.data.data.caseInfo.content),this.validateForm(a)?"create"!==e?""!==this.data.ID?"previous"===e?this.sendData("previousstep",{id:this.data.ID}):this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID}):this.sendData("submitcaseaction",{id:this.data.caseID,actionid:this.actionID}):this.sendData("newwork",{id:this.casetype}):this.reportFormValidity(a),t.preventDefault(),!1};createCase=t=>{if(this.name="New Case",this.bShowNew=!0,t){let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&(this.casetype=e.getAttribute("data-value"),this.name=`New ${e.textContent} `)}this.content=this.initialContent,this.pageInstructions=[],this.caseID="",this.data={},this.casedata={},this.casetypes[this.casetype]?this.sendData("newwork",{id:this.casetype}):(this.errorMsg=`Case '${this.casetype}' is not defined`,console.error(`Case '${this.casetype}' is not defined`)),this.requestUpdate()};runAction=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&null!==e.getAttribute("data-value")&&(this.actionID=e.getAttribute("data-value"),this.name=e.innerText,this.data.ID="",this.actionRefresh());const a=this.getRenderRoot().querySelector("#case-data");null!=a&&st(this.genLoadingIndicator(),a)};openCase=t=>{t.preventDefault(),this.caseID=t.target.getAttribute("data-id"),this.name="",this.data={},this.casedata={},0===this.caseID.indexOf("ASSIGN-WORKLIST")?(this.sendExternalEvent({type:"openassignment",id:this.caseID}),this.assignmentID=this.caseID,this.caseID=""):(this.sendExternalEvent({type:"opencase",id:this.caseID}),this.assignmentID="");const e=this.getRenderRoot().querySelector("#case-data");null!=e&&st(this.genLoadingIndicator(),e),this.requestUpdate()};getData=(t,e)=>{this.dataPages[t]?st(this.showDataList(this.dataPages[t]),e.nextElementSibling):this.fetchData("data",{id:t,element:e})};applyAction=t=>{const e=this.getRenderRoot().querySelector("#case-data");let a=t;if(e){if(a){"path"===a.tagName&&(a=a.parentNode),"svg"===a.tagName&&(a=a.parentNode);const t=a.getAttribute("data-action-click"),e=a.getAttribute("data-ref");if(null!==e&&null!=t){if("addRow"===t){const t=((t,e,a)=>{let i=yt(t,e);if(null===i&&(i=[],$t(t,e,i)),!Array.isArray(i))return null;if(a&&"string"==typeof a){const t={},s=a.split(",");for(const e in s)t[s[e]]="";return i.push(t),{instruction:"APPEND",target:e,content:t}}if(0===i.length)return null;const s={...i[0]};return vt(s),i.push(s),{instruction:"APPEND",target:e,content:s}})(this.data.data.caseInfo.content,e,a.getAttribute("data-newrow"));return void(null!==t&&this.pageInstructions.push(t))}if("deleteRow"===t){const t=((t,e)=>{let a,i=e;-1!==e.indexOf(").pyTemplate")&&(a=parseInt(i.substring(e.lastIndexOf("(")+1,e.lastIndexOf(")")),10),i=i.substring(0,e.lastIndexOf("(")));const s=yt(t,i);if(!Array.isArray(s))return null;if(1===s.length){for(const t in s[0])"pxObjClass"!==t&&(s[0][t]="");return null}return a?s.length<a?null:(s.splice(a-1,1),{instruction:"DELETE",target:i,listIndex:a}):(s.length-=1,{instruction:"DELETE",target:i,listIndex:s.length})})(this.data.data.caseInfo.content,e);return void(null!==t&&this.pageInstructions.push(t))}}}_t(e,this.content,this.pageInstructions,this.data.data.caseInfo.content)}};refreshAssignment=(t,e)=>{this.applyAction(t),!0===this.bShowNew?this.sendData("refreshnew",{id:this.casetype,refreshFor:e}):this.sendData("refreshassignment",{id:this.assignmentID,actionid:this.actionID,refreshFor:e})};genErrorMessage(t){this.clearLoadingIndicator(),t.message&&-1!==t.message.indexOf("JSON.parse")?console.error("Error:",t):t.message&&-1!==t.message.indexOf("Unexpected token")?(this.errorMsg="Error 404: Resource not found",this.requestUpdate(),console.error(this.errorMsg)):(t.status?""!==t.statusText?this.errorMsg=`Error ${t.status}: ${t.statusText}`:401===t.status?this.errorMsg="Error 401: Authentication error":423===t.status?this.errorMsg="Error 423: Resource is locked by another user":500===t.status?this.errorMsg="Error 500: Internal server error":this.errorMsg=`Error ${t.status}`:t.name&&t.message?this.errorMsg=`Error ${t.name}: ${t.message}`:this.errorMsg="string"==typeof t?t:"Critical error",this.requestUpdate(),console.error("Error:",t))}fetchData(t,e){const{id:a,actionid:i,target:s}=e||{};let n="";""!==this.authentication&&"basic"!==this.authentication||(n=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(n=`Bearer ${this.token}`);const r={method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:n},mode:"cors"};let o=`${this.url}/api/application/v2/`;switch(t){case"assignment":o+=`assignments/${a}`;break;case"view":o+=`cases/${a}/views/${i}`;break;case"dataviews":const t=JSON.stringify({PortalName:i});o+=`data_views/${a}?dataViewParameters=${encodeURI(t)}`;break;case"caseaction":o+=`cases/${a}/actions/${i}`;break;case"attachment":o+=`attachments/${a}`;break;case"attachments":o+=`cases/${a}/attachments`;break;case"attachmentcategories":o+=`cases/${a}/attachment_categories`}fetch(o,r).then((a=>{if("assignment"===t)this.etag=a.headers.get("etag");else if("attachment"===t)return a.text();return a.ok||404===a.status?a.json():401===a.status?(this.token="",this.sendData("authenticate",{...e,type:t,cmd:"fetchData"}),a.json()):Promise.reject(a)})).then((e=>{try{if(e.errors&&e.errors.length>0)return;if(e.pyLocalizedValue)return this.errorMsg=`Error: ${e.pyLocalizedValue}`,void this.requestUpdate();if(e.errorDetails&&e.errorDetails.length>0)return this.errorMsg=`Error ${e.errorDetails[0].message}: ${e.localizedValue}`,this.clearLoadingIndicator(),this.requestUpdate(),void console.error("Error:",e);const n=this.getRenderRoot().querySelector("#case-data");switch(t){case"dataviews":if("D_pxAvailableCaseTypesForPortal"===a){this.casetypes={};for(const t of e.pyCaseTypesAvailableToCreate)("workList"!==this.action&&"taskList"!==this.action||""===this.casetype||this.casetype===t.pyClassName)&&(this.casetypes[t.pyClassName]={canCreate:!0,name:t.pyLabel})}this.requestUpdate();break;case"assignment":this.content={},this.pageInstructions=[],this.isDeclarativeTarget=!1,this.refreshOnChange=!1,this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel,this.caseID=this.casedata.ID,this.data.caseID=this.caseID,this.data.ID=a;for(const t of this.casedata.assignments)if(a===t.ID&&t.actions&&t.actions.length>0){this.actionID=t.actions[0].ID;break}this.casepyStatusWork=this.casedata.status,this.data.actions=this.casedata.availableActions,this.name=this.casedata.stageLabel;const t=this.getRenderRoot().querySelector("#case-data");t&&_t(t,this.casedata.content),this.content={},st(this.renderMainLayout(e.uiResources.resources.views[this.casedata.content.pyViewName],"Obj"),n),this.requestUpdate(),n.focus();break;case"view":if(!n){console.error("Error: case data are not present when retrieving the page");break}this.content={},this.pageInstructions=[],this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel?this.casedata.content.pyLabel:this.casedata.name,this.casedata.actions=this.casedata.availableActions,this.casedata.content.pyID=this.casedata.ID,this.data.ID=this.casedata.ID,this.casepyStatusWork=this.casedata.status,this.name=this.casedata.stageLabel,this.content={},"true"===this.bShowAttachments&&this.fetchData("attachments",{id:this.caseID}),this.name=e.data.caseInfo.name,st(this.renderReviewLayout(e.uiResources.resources.views[i],"Obj"),n),this.requestUpdate(),n.focus();break;case"caseaction":this.content={},this.pageInstructions=[],this.isDeclarativeTarget=!1,this.refreshOnChange=!1,this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel,this.caseID=this.casedata.ID,this.data.caseID=this.caseID,this.data.ID="",this.casepyStatusWork=this.casedata.status,this.data.actions=this.casedata.availableActions,this.name=this.casedata.stageLabel,this.content={},st(this.renderMainLayout(e.uiResources.resources.views[e.uiResources.root.config.name],"Obj"),n),this.requestUpdate(),n.focus();break;case"attachments":let r=e.attachments;r||(r=[]),this.numAttachments=r.length,s&&st(Et(s,r,this.caseID,this),s),this.requestUpdate();break;case"attachmentcategories":this.attachmentcategories=e.attachment_categories;break;case"attachment":s(e)}}catch(t){this.errorMsg=`Error: ${t}`,this.requestUpdate(),console.error("Error:",t)}})).catch((t=>{this.genErrorMessage(t)}))}sendData(t,e){const{id:a,actionid:i,target:s}=e;let n="";""!==this.authentication&&"basic"!==this.authentication||(n=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(n=`Bearer ${this.token}`);const r={"Content-Type":"application/json;charset=UTF-8",Authorization:n},o={method:"POST",headers:r,mode:"cors"},{pageInstructions:l,pageupdate:c}=((t,e)=>{const a=e||[],i={};for(const[e,s]of Object.entries(t))if("string"==typeof s||"boolean"==typeof s)i[e]=s;else if("object"==typeof s)if(Array.isArray(s))for(const t in s){const i={instruction:"UPDATE",target:e,listIndex:parseInt(t,10)+1,content:s[t]};a.push(i)}else{const t={instruction:"UPDATE",target:e,content:s};a.push(t)}return{pageInstructions:a,pageupdate:i}})(this.content,this.pageInstructions);let d=`${this.url}/api/application/v2/`;switch(this.validationMsg="",t){case"authenticate":"oauth2password"===this.authentication?o.body=`grant_type=password&client_id=${this.clientid}&client_secret=${this.clientsecret}&enable_psyncId=true&username=${this.username}&password=${this.password}`:"oauth2clientcredentials"===this.authentication?o.body=`grant_type=client_credentials&client_id=${this.clientid}&client_secret=${this.clientsecret}&enable_psyncId=true`:"authorizationcode"===this.authentication&&(o.body=`grant_type=authorization_code&client_id=${this.clientid}&code_verifier=${window.history.state.verifier}&code=${window.history.state.code}&redirect_uri=${encodeURIComponent(Wt())}`),"custombearer"===this.authentication&&(o.body=`grant_type=custom-bearer&client_id=${this.clientid}&enable_psyncId=true&userIdentifier=${this.username}`),o.headers["Content-Type"]="application/x-www-form-urlencoded",d=`${this.url}/PRRestService/oauth2/v1/token`;const t=this.url.indexOf("/prweb");-1!==t&&(d=`${this.url.substring(0,t+6)}/PRRestService/oauth2/v1/token`);break;case"newwork":d+="cases?viewType=form",o.body=JSON.stringify({caseTypeID:a,processID:"pyStartCase",content:c,pageInstructions:l});break;case"submitassignment":o.body=JSON.stringify({content:c,pageInstructions:l}),o.method="PATCH",o.headers["If-Match"]=this.etag,d+=`assignments/${a}/actions/${i}?viewType=form`;break;case"previousstep":o.body=JSON.stringify({content:c,pageInstructions:l}),o.method="PATCH",o.headers["If-Match"]=this.etag,d+=`assignments/${a}/navigation_steps/previous?viewType=form`;break;case"submitcaseaction":o.body=JSON.stringify({content:c,pageInstructions:l}),o.method="PATCH",o.headers["If-Match"]=this.etag,d+=`cases/${a}/actions/${i}?viewType=form`;break;case"refreshassignment":d+=`assignments/${a}/actions/${i}/refresh`,o.headers["If-Match"]=this.etag,o.method="PATCH",o.body=JSON.stringify({content:c,pageInstructions:l,contextData:!0});break;case"dataviews":d+=`data_views/${a}`,"function"==typeof e.content?o.body=e.content():o.body=JSON.stringify(e.content);break;case"uploadattachment":d+="attachments/upload",delete r["Content-Type"];const s=new FormData;s.append("File",i,i.name),o.body=s;break;case"attachments":d+=`cases/${a}/attachments`,o.body=JSON.stringify({attachments:i});break;case"deleteattachment":d+=`attachments/${a}`,o.method="DELETE"}fetch(d,o).then((a=>"deleteattachment"===t||"attachments"===t?a.text():("previousstep"!==t&&"submitassignment"!==t&&"newwork"!==t||(this.etag=a.headers.get("etag")),200===a.status||201===a.status||a.status>=400&&a.status<500||500===a.status?(401===a.status&&"authenticate"!==t&&(this.token="",this.sendData("authenticate",{...e,type:t,cmd:"sendData"})),a.json()):a.ok?Promise.resolve("ok"):Promise.reject(a)))).then((n=>{if(n.errors&&n.errors.length>0)return this.errorMsg=`Error: ${n.errors[0].message.trim()}`,void this.requestUpdate();if(n.access_token)this.token=n.access_token,window.history.replaceState({token:this.token},"",window.location.href),e.type&&e.cmd&&("sendData"===e.cmd?this.sendData(e.type,e):this.fetchData(e.type,e));else if(n.errorDetails&&n.errorDetails.length>0){if(n.errorDetails[0].localizedValue){const t=this.getRenderRoot().querySelector("#case-data");t&&(((t,e,a)=>{for(const i of t.elements)if("INPUT"===i.tagName||"TEXTAREA"===i.tagName||"SELECT"===i.tagName){const t=`.${i.getAttribute("data-ref")}`;if(null!==t&&"pyID"!==t)for(const s in e){if(e[s].Path===t){a.setInlineError(i,e[s].ValidationMessage);break}if(e[s].erroneousInputOutputFieldInPage===t){a.setInlineError(i,e[s].localizedValue);break}}}})(t,n.errorDetails,this),this.validationMsg=this.genPageValidationErrors(n,t))}else this.errorMsg=`Error ${n.errorDetails[0].message}: ${n.localizedValue}`;this.clearLoadingIndicator(),s&&(s.disabled=!1,s.textContent="Save"),"submitassignment"!==t&&"previousstep"!==t||this.fetchData("assignment",{id:this.assignmentID})}else{const r=this.getRenderRoot().querySelector("#case-data");if("dataviews"===t)if("D_pyMyWorkList"===a){if(this.cases=[],n.data?.length>0)for(const t of n.data)this.cases.push({name:t.pyLabel,caseID:t.pxRefObjectKey,urgency:t.pxUrgencyAssign,ID:t.pzInsKey,label:t.pxTaskLabel})}else if(this.data=n.data??[],"function"==typeof e.response)return void e.response(this);if("newwork"===t&&n.data.caseInfo.ID&&""!==n.data.caseInfo.ID&&this.sendExternalEvent({type:"newwork",id:n.data.caseInfo.ID}),"refreshassignment"===t)return void(r&&n.data.caseInfo&&n.data.caseInfo.content&&(this.data.data.caseInfo.content=n.data.caseInfo.content,this.casedata.content=n.data.caseInfo.content,this.data.uiResources.context_data=n.uiResources.context_data,st(this.renderMainLayout(this.data.uiResources.resources.views[this.actionID],"Obj"),r)));if("deleteattachment"===t)s&&!s.classList.contains("attach-files")&&this.fetchData("attachments",{id:this.caseID,target:s});else if("attachments"===t)this.fetchData("attachments",{id:this.caseID,target:s});else if("uploadattachment"===t){let t=i.name.lastIndexOf(".");-1===t&&(t=i.name.length);const e=i.name.substring(t+1),a=[{type:"File",category:i.category,fileType:e,name:i.displayName,ID:n.ID}];return void this.sendData("attachments",{id:this.caseID,actionid:a,target:s})}if(n.confirmationNote)this.bShowConfirm=!0,this.caseID=n.data.caseInfo.ID,this.fetchData("view",{id:this.caseID,actionid:"pyReview"});else if(n.uiResources){if(this.bShowNew=!1,this.content={},this.pageInstructions=[],this.assignmentID=n.nextAssignmentInfo.ID,this.data=n,this.casedata=n.data.caseInfo,this.data.name=this.casedata.content.pyLabel?this.casedata.content.pyLabel:this.casedata.name,this.caseID=this.casedata.content.pzInsKey,this.data.caseID=n.data.caseInfo.ID,this.data.ID=this.assignmentID,this.casedata.content.pyViewName=n.uiResources.root.config.name,this.actionID=this.casedata.content.pyViewName,this.casedata.assignments)for(const t of this.casedata.assignments)if("pzQuestionPageScr"===t.processID&&this.data.ID===t.ID&&t.actions&&t.actions.length>0){this.actionID=t.actions[0].ID;break}this.casepyStatusWork=n.data.caseInfo.status,this.data.actions=n.data.caseInfo.availableActions,this.name=n.data.caseInfo.stageLabel,r&&(st(this.genLoadingIndicator(),r),st(this.renderMainLayout(n.uiResources.resources.views[this.casedata.content.pyViewName],"Obj"),r),r.focus())}}this.requestUpdate()})).catch((t=>{this.genErrorMessage(t)}))}}
/**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const Kt=t=>t??j,Jt=t=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20px" height="20px" fill="currentColor">${t}</svg>`;class Yt extends nt{static get properties(){return{content:{},root:{}}}createRenderRoot(){return this}constructor(t,e,a){super(),this.content=t,this.root="";const i=(new DOMParser).parseFromString(this.content,"text/html");document.execCommand("defaultParagraphSeparator",!1,"br");const s=document.createElement("div"),n=i.querySelector("body");s.setAttribute("contenteditable","true"),s.setAttribute("data-ref",e),s.setAttribute("id",a),s.innerHTML=n.innerHTML,this.root=s}render(){return q`<div class='rich-text-main'>
      <div class="editor-actions">
        <div class="toolbar">
          ${this.renderToolbar(((t,e)=>{document.execCommand(t,!1,e)}))}
        </div>
      </div>
      <div class="editor">${this.root}</div>
    </div>`}async firstUpdated(){document.addEventListener("selectionchange",(()=>{this.requestUpdate()}))}renderToolbar(t){const e=document.getSelection?document.getSelection():null,a=[];if(e&&"Range"===e.type){let t=e.baseNode;if(t)for(;null!=t;){const e=t&&t.tagName?t.tagName.toLowerCase().trim():void 0;e&&a.push(e),t=t.parentNode}}const i=[{icon:"Clear",title:"Remove all styling",command:"removeFormat"},{title:"Change format",command:"formatblock",values:[{name:"Normal Text",value:"--"},{name:"Heading 1",value:"h1"},{name:"Heading 2",value:"h2"},{name:"Heading 3",value:"h3"},{name:"Heading 4",value:"h4"},{name:"Heading 5",value:"h5"},{name:"Heading 6",value:"h6"},{name:"Paragraph",value:"p"},{name:"Pre-Formatted",value:"pre"}]},{title:"Change font size",command:"fontsize",values:[{name:"Font Size",value:"--"},{name:"Very Small",value:"1"},{name:"Small",value:"2"},{name:"Normal",value:"3"},{name:"Medium Large",value:"4"},{name:"Large",value:"5"},{name:"Very Large",value:"6"},{name:"Maximum",value:"7"}]},{icon:()=>Jt('<path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"></path>'),title:"Bold",command:"bold",active:a.includes("b")},{icon:()=>Jt('<path d="m9.586 14.633.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"></path>'),title:"Italic",command:"italic",active:a.includes("i")},{icon:()=>Jt('<path d="M3 18v-1.5h14V18zm2.2-8V3.6c0-.4.4-.6.8-.6.3 0 .7.2.7.6v6.2c0 2 1.3 2.8 3.2 2.8 1.9 0 3.4-.9 3.4-2.9V3.6c0-.3.4-.5.8-.5.3 0 .7.2.7.5V10c0 2.7-2.2 4-4.9 4-2.6 0-4.7-1.2-4.7-4z"></path>'),title:"Underline",command:"underline",active:a.includes("u")},{icon:()=>Jt('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"></path>'),title:"Align left",command:"justifyleft"},{icon:()=>Jt('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"></path>'),title:"Align middle",command:"justifycenter"},{icon:()=>Jt('<path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"></path>'),title:"Align right",command:"justifyright"},{icon:()=>Jt('<path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"></path>'),title:"Numbered list",command:"insertorderedlist",active:a.includes("ol")},{icon:()=>Jt('<path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"></path>'),title:"Bullet list",command:"insertunorderedlist",active:a.includes("ul")},{icon:()=>Jt('<path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"></path>'),command:"formatblock",title:"Format block quote",command_value:"blockquote"},{icon:()=>Jt('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zm1.618-9.55L.98 9.358a.4.4 0 0 0 .013.661l3.39 2.207A.4.4 0 0 0 5 11.892V7.275a.4.4 0 0 0-.632-.326z"></path>'),title:"decrease indent",command:"outdent"},{icon:()=>Jt('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zM1.632 6.95 5.02 9.358a.4.4 0 0 1-.013.661l-3.39 2.207A.4.4 0 0 1 1 11.892V7.275a.4.4 0 0 1 .632-.326z"></path>'),title:"Increase indent",command:"indent"},{icon:()=>Jt('<path d="m5.042 9.367 2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z"></path>'),title:"Undo",command:"undo"},{icon:()=>Jt('<path d="m14.958 9.367-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z"></path>'),title:"Redo",command:"redo"},{icon:()=>Jt('<path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"></path>'),title:"Add link",active:a.includes("a"),deactivate:"unlink",command:()=>{const e=prompt("Enter the URL","");e&&""!==e&&t("createlink",e)}},{icon:()=>Jt('<path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"></path>'),title:"Add image",active:a.includes("img"),command:()=>{const e=prompt("Enter the image URL","");e&&""!==e&&t("insertImage",e)}}];return q`
      ${i.map((e=>q`
          ${e.values?q` <select aria-label="${i18n.t(e.title)}" tabindex=-1
        @change=${a=>{a.preventDefault();const i=a.target.value;"--"===i?t("removeFormat",void 0):"string"==typeof e.command&&t(e.command,i)}}>
    ${e.values.map((t=>q` <option value=${t.value}>${t.name}</option>`))}
              </select>`:q` <button aria-label="${i18n.t(e.title)}" title="${i18n.t(e.title)}" tabindex=-1
                class="${e.active?"active":"inactive"}"
                @click=${a=>{a.preventDefault(),e.active&&e.deactivate?"string"==typeof e.deactivate?t(e.deactivate,e.command_value):e.deactivate():"string"==typeof e.command?t(e.command,e.command_value):e.command()}}>${"function"==typeof e.icon?document.createRange().createContextualFragment(`${e.icon()}`):e.icon}</button>`}
        `))}
    `}}customElements.define("rich-text-editor",Yt);const Xt=(t,e)=>{if(t.helperText&&""!==t.helperText)return`${e}-info`},Gt=t=>{if(t.placeholder&&""!==t.placeholder)return t.displayplaceholder},Qt=(t,e,a,i)=>void 0===e||""===e?q`
      ${i}
    `:q`
    <div class="flex content-item field-item ${a}" ?disabled="${t.disabledstate}">
      ${((t,e,a)=>{if(void 0===e)return null;const i=t.requiredstate?"icon-required":"";return"field-checkbox"===a?t.label&&""!==t.label?q`<legend class="field-caption">${t.displaylabel}</legend>`:null:q`
    ${""!==t.label?q`<label class="field-caption dataLabelForWrite ${i}"
    for="${Kt(e)}">${t.displaylabel}
    </label>`:null}
  `})(t,e,a)}${i}${((t,e)=>t.helperText&&""!==t.helperText?q`<span id=${`${e}-info`} class="helper-text">${t.displayhelperText}</span>`:null)(t,e)}
    </div>
  `,te=(t,e,a,i,s)=>{const n=((t,e,a,i,s)=>{if(!1===t.config.visibility)return null;let n=!1;if(t.config.displayvalue="",t.config.displaylabel=i18n.t(t.config.label),t.config.displayplaceholder=i18n.t(t.config.placeholder),t.config.displayhelperText=i18n.t(t.config.helperText),t.config.displaycaption=i18n.t(t.config.caption),t.config.value){let e=t.config.value.replace("@P .","").replace("@USER .","");if(t.config.reference=void 0===s||""===s?e:`${s}.${e}`,t.config.displayvalue=yt(i.casedata.content,t.config.reference),"string"==typeof t.config.datasource&&0===t.config.datasource.indexOf("@ASSOCIATED")){e=t.config.datasource.replace("@ASSOCIATED .",""),-1!==e.indexOf(".")&&(e=e.substring(e.lastIndexOf(".")+1));let a="";i.data.context_data?a=i.data.context_data.content:i.data.uiResources.context_data&&i.data.uiResources.context_data.caseInfo&&i.data.uiResources.context_data.caseInfo.content&&(a=i.data.uiResources.context_data.caseInfo.content);const n=""===s?a:yt(a,s);if(n&&(t.config.options=n.summary_of_associated_lists__[e]),void 0===t.config.options&&(a=i.data.uiResources.resources.fields[e],Array.isArray(a)&&1===a.length&&(a=a[0]),a&&a.datasource))if(a.datasource.records)t.config.options=a.datasource.records;else if(a.datasource.name&&i.data.data.shared[a.datasource.name]){const e=i.data.data.shared[a.datasource.name];if(Object.keys(e).length>0){const i=Object.keys(e)[0];if(e[i].pxResults){const s=a.datasource.propertyForValue.replace("@P .",""),n=a.datasource.propertyForDisplayText.replace("@P .","");t.config.options=[];for(const a in e[i].pxResults){const r=e[i].pxResults[a];t.config.options[a]={key:r[s],value:r[n]}}}}}}else if("object"==typeof t.config.datasource&&t.config.datasource.source&&0===t.config.datasource.source.indexOf("@DATASOURCE")){const e=t.config.datasource.source.replace("@DATASOURCE ","").replace(".pxResults","");if(i.data.data[e]&&i.data.data[e].pxResults)t.config.options=i.data.data[e].pxResults;else if(i.data.uiResources.context_data&&i.data.uiResources.context_data.caseInfo&&i.data.uiResources.context_data.caseInfo.content){const a=i.data.uiResources.context_data.caseInfo.content;if(a[s]&&a[s].summary_of_lists__[e]&&a[s].summary_of_lists__[e].pxResults){const n=a[s].summary_of_lists__[e].pxResults.replace(".pxResults","");if(i.data.data[n]&&i.data.data[n].pxResults){t.config.options=[];const e=t.config.datasource.fields.key.replace("@P .",""),a=t.config.datasource.fields.text.replace("@P .","");for(const s in i.data.data[n].pxResults){const r=i.data.data[n].pxResults[s];t.config.options[s]={key:r[e],value:r[a]}}}}}}if(t.config.options||(t.config.options=[]),t.config.displayvalue?"object"!=typeof t.config.displayvalue&&(t.config.displayvalue=`${t.config.displayvalue}`):t.config.displayvalue="",i.data.uiResources&&i.data.uiResources.resources&&i.data.uiResources.resources.fields&&i.data.uiResources.resources.fields[e]){let t=i.data.uiResources.resources.fields[e];Array.isArray(t)&&1===t.length&&(t=t[0]),(t.isDeclarativeTarget||t.isSpecial)&&(n=!0,i.isDeclarativeTarget=!0)}}"string"!=typeof t.config.visibility&&"string"!=typeof t.config.readOnly&&"string"!=typeof t.config.disabled&&"string"!=typeof t.config.required||(i.refreshOnChange=!0);const r=i.data.data.caseInfo.content;if("string"==typeof t.config.visibility&&"true"!==t.config.visibility){if(t.config.visibility.startsWith("@W ")&&(i.isDeclarativeTarget=!0),!At(t.config.visibility,r,i,s))return null}else if(!1===t.config.visibility||"false"===t.config.visibility)return null;return t.config.readonlystate=!1,"string"==typeof t.config.readOnly&&"false"!==t.config.readOnly?t.config.readonlystate=At(t.config.readOnly,r,i,s):(!0===t.config.readOnly||"true"===t.config.readOnly||n)&&(t.config.readonlystate=!0),t.config.requiredstate=!1,"string"==typeof t.config.required&&"false"!==t.config.required?t.config.requiredstate=At(t.config.required,r,i,s):!0!==t.config.required&&"true"!==t.config.required||(t.config.requiredstate=!0),t.config.disabledstate=!1,"string"==typeof t.config.disabled&&"false"!==t.config.disabled?t.config.disabledstate=At(t.config.disabled,r,i,s):!0!==t.config.disabled&&"true"!==t.config.disabled||(t.config.disabledstate=!0),t.config.disabledstate&&(t.config.requiredstate=!1,t.config.readonlystate=!1),"OK"})(t,0,0,i,s);if("OK"!==n)return n;if(!0===a)return Qt(t.config,e,"field-text",ee(t.config,t.type,e));switch(t.type){case"TextContent":return ee(t.config,t.type,e);case"Decimal":case"TextInput":return Qt(t.config,e,"field-textinput",ae(t.config,e));case"Phone":return Qt(t.config,e,"field-phoneinput",ie(t.config,e));case"Email":return Qt(t.config,e,"field-emailinput",oe(t.config,e));case"Integer":return Qt(t.config,e,"field-numberinput",se(t.config,e));case"Percentage":return Qt(t.config,e,"field-percentage",ne(t.config,e));case"Currency":return Qt(t.config,e,"field-currencyinput",re(t.config,e));case"RadioButtons":return Qt(t.config,e,"field-radiogroup",he(t.config,e));case"TextArea":return Qt(t.config,e,"field-textarea",le(t.config,e));case"RichText":return Qt(t.config,e,"field-richtext",ce(t.config,e));case"Checkbox":return Qt(t.config,e,"field-checkbox",de(t.config,e));case"Dropdown":return Qt(t.config,e,"field-dropdown",ue(t.config,e));case"DateTime":return Qt(t.config,e,"field-datetime",pe(t.config,e));case"Date":return Qt(t.config,e,"field-date",ge(t.config,e));case"Time":return Qt(t.config,e,"field-time",fe(t.config,e));case"AutoComplete":return Qt(t.config,e,"field-autocomplete",me(t.config,e));case"SemanticLink":return Qt(t.config,e,"field-semanticlink",$e(t.config));case"Attachment":return Qt(t.config,e,"field-attachment",ye(t.config,e,i));case"Location":return Qt(t.config,e,"field-location",ve(t.config,e));default:return null}},ee=(t,e,a)=>{let i=t.displayvalue;if(""!==i){if("Phone"===e)return q`<a data-ref="${t.reference}" id="${Kt(a)}" href="${`tel:${i}`}">${i}</a>`;if("Date"===e){const e={year:"numeric",month:"short",day:"numeric"};i=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}else if("DateTime"===e){i=gt(t.displayvalue);const e={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};i=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}else if("Time"===e){const e={hour:"numeric",minute:"numeric"};i=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}}if("TextContent"===e){if("Paragraph"===t.displayAs)return q`<p>${i18n.t(t.content)}</p>`;if("Heading 1"===t.displayAs)return q`<h1>${i18n.t(t.content)}</h1>`;if("Heading 2"===t.displayAs)return q`<h2>${i18n.t(t.content)}</h2>`;if("Heading 3"===t.displayAs)return q`<h3>${i18n.t(t.content)}</h3>`;if("Heading 4"===t.displayAs)return q`<h4>${i18n.t(t.content)}</h4>`}return q`
    <span class="dataValueRead" data-ref="${t.reference}" id="${Kt(a)}">${ft(i)}</span>
  `},ae=(t,e)=>q`
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${Kt(Gt(t))}"
    type="text"
    aria-describedby="${Kt(Xt(t,e))}"
    id="${Kt(e)}"
    value="${ft(t.displayvalue)}"
  />
`,ie=(t,e)=>{let a="";for(const e of t.options)0===t.displayvalue.indexOf(e.pyCallingCode)&&(a=e.pyCallingCode);return t.displayvalue=t.displayvalue.substring(a.length),q`
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
   placeholder="${Kt(Gt(t))}"
   type="tel"
   aria-describedby="${Kt(Xt(t,e))}"
   id="${Kt(e)}"
   value="${ft(t.displayvalue)}"
 />
 </div>
`},se=(t,e)=>q`
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${Kt(Gt(t))}"
    type="number"
    aria-describedby="${Kt(Xt(t,e))}"
    id="${Kt(e)}"
    value="${ft(t.displayvalue)}"
  />
`,ne=(t,e)=>q`
 <input
   data-ref="${t.reference}"
   ?required="${t.requiredstate}"
   ?readonly="${t.readonlystate}"
   ?disabled="${t.disabledstate}"
   placeholder="${Kt(Gt(t))}"
   type="text"
   aria-describedby="${Kt(Xt(t,e))}"
   id="${Kt(e)}"
   value="${ft(t.displayvalue)}"
 />
`,re=(t,e)=>q`
  <div ?readonly="${t.readOnly}">
  <span class="currency-symbol">$</span>
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${Kt(Gt(t))}"
    type="number"
    aria-describedby="${Kt(Xt(t,e))}"
    id="${Kt(e)}"
    value="${ft(t.displayvalue)}"
  />
  </div>
`,oe=(t,e)=>q`
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${Kt(Gt(t))}"
    type="email"
    aria-describedby="${Kt(Xt(t,e))}"
    id="${Kt(e)}"
    value="${ft(t.displayvalue)}"
  />
`,le=(t,e)=>q`
  <textarea
    rows="3"
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${Kt(Gt(t))}"
    type="email"
    aria-describedby="${Kt(Xt(t,e))}"
    id="${Kt(e)}"
  >${ft(t.displayvalue)}</textarea>
`,ce=(t,e)=>new Yt(ft(t.displayvalue),t.reference,e),de=(t,e)=>{const a=t.requiredstate?"icon-required":"";return q`
  <input
  data-ref="${t.reference}"
  ?required="${t.requiredstate}"
  ?readonly="${t.readonlystate}"
  onclick="${Kt(t.readonlystate?"return false;":void 0)}"
  ?disabled="${t.disabledstate}"
  aria-describedby="${Kt(Xt(t,e))}"
  id=${Kt(e)}
  type="checkbox" ?checked=${"true"===t.displayvalue||!0===t.displayvalue}
  />
  <label class=${a} for=${Kt(e)}>
  ${t.displaycaption}
    </label>
`},he=(t,e)=>{let a=[{value:"true"},{value:"false"}];return t.options&&(a=t.options),q`
    ${a.map(((a,i)=>{const s=`rb-${e}-${i}`;return q`
        <div>
          <input
            data-ref="${t.reference}"
            name=${Kt(e)}
            id=${s}
            type="radio"
            ?required="${t.requiredstate}"
            ?readonly="${t.readonlystate}"
            ?disabled="${t.disabledstate}"
            value="${a.key}"
            onclick="${Kt(t.readonlystate?"return false;":void 0)}"
            ?checked="${a.key===t.displayvalue}"
          />
          <label for="${s}">${a.value}</label>
        </div>
      `}))}
  `},ue=(t,e)=>q`<select
  data-ref="${t.reference}"
  aria-describedby="${Kt(Xt(t,e))}"
  id=${Kt(e)}
  ?required="${t.requiredstate}"
  ?readonly="${t.readonlystate}"
  ?disabled="${t.disabledstate}">
  placeholder="${Kt(Gt(t))}"
    <option value="" title="${i18n.t("Select...")}">${i18n.t("Select...")}</option>
    ${t.options.map((e=>q`<option ?selected=${e.key===t.displayvalue} value='${e.key}'>${e.value}</option>`))}
  </select>`,pe=(t,e)=>{let a=t.displayvalue;if(""!==a){const e=gt(a);e instanceof Date&&e.getTime()==e.getTime()?a=`${e.getUTCFullYear()}-${ut(e.getUTCMonth()+1)}-${ut(e.getUTCDate())}T${ut(e.getUTCHours())}:${ut(e.getUTCMinutes())}`:8===t.displayvalue.length?a=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(4,6)}-${t.displayvalue.substring(6,8)}T00:00`:24===t.displayvalue.length&&(a=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(5,7)}-${t.displayvalue.substring(8,10)}T${t.displayvalue.substring(11,13)}:${t.displayvalue.substring(14,16)}`)}return q`
    <input
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="datetime-local"
      aria-describedby="${Kt(Xt(t,e))}"
      id="${Kt(e)}"
      value="${a}"
    />
  `},ge=(t,e)=>{let a=t.displayvalue;if(""!==a){const e=gt(a);e instanceof Date&&e.getTime()==e.getTime()?a=`${e.getUTCFullYear()}-${ut(e.getUTCMonth()+1)}-${ut(e.getUTCDate())}`:8===t.displayvalue.length&&(a=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(4,6)}-${t.displayvalue.substring(6,8)}`)}return q`
    <input
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="date"
      aria-describedby="${Kt(Xt(t,e))}"
      id="${Kt(e)}"
      value="${a}"
    />
  `},fe=(t,e)=>{let a=t.displayvalue;if(""!==a){const e=gt(a);e instanceof Date&&e.getTime()==e.getTime()?a=`${ut(e.getUTCHours())}-${ut(e.getUTCMinutes())}-${ut(e.getUTCSeconds())}`:8===t.displayvalue.length&&(a=`${t.displayvalue.substring(9,10)}:${t.displayvalue.substring(10,11)}:${t.displayvalue.substring(11,12)}`)}return q`
    <input
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="time"
      aria-describedby="${Kt(Xt(t,e))}"
      id="${Kt(e)}"
      value="${a}"
    />
  `},me=(t,e)=>t.options?q`
      <input
        data-ref="${t.reference}"
        list="${t.reference}"
        ?required="${t.requiredstate}"
        ?readonly="${t.readonlystate}"
        ?disabled="${t.disabledstate}"
        placeholder="${Kt(Gt(t))}"
        type="text"
        class="combobox loaded"
        aria-describedby="${Kt(Xt(t,e))}"
        id="${Kt(e)}"
        value="${ft(t.displayvalue)}"
      />
      <datalist id="${t.reference}">
        ${t.options.map((t=>q`
            <option value="${t.key}">
              ${t.value}
            </option>
          `))}
      </datalist>
    `:null,$e=()=>q`
 <a>semantic link</a>
`,ye=(t,e,a)=>{let i=[];return t.displayvalue&&t.displayvalue.pxResults&&t.displayvalue.pxResults.length>0&&(i=t.displayvalue.pxResults),Et(void 0,i,a.caseID,a)},ve=(t,e)=>q`<input
 class="location"
 data-ref="${t.reference}"
 ?required="${t.requiredstate}"
 ?readonly="${t.readonlystate}"
 ?disabled="${t.disabledstate}"
 placeholder="${Kt(Gt(t))}"
 type="text"
 aria-describedby="${Kt(Xt(t,e))}"
 id="${Kt(e)}"
 value="${ft(t.displayvalue)}"
/>`,be=(t,e)=>q`
  ${t.map((t=>q`
    <th scope='col'>${i18n.t(t.config.label)}</th>`))}${e?null:q`<th></th>`}
`,Ce=(t,e)=>{if(!e){const e=[];t.config.children[0].children.map(((t,a)=>(e[a]=t.config.value.replace("@P .","").replace("@USER .",""),null)));const a=t.config.referenceList.replace("@P .","").replace("@USER .","");return q`
      <div class="table-action-area">
        <button type="button" class="pzhc pzbutton Simple" aria-label="${i18n.t("Add row")}" data-newrow="${e.join()}"
        data-ref=${a} data-action-click="addRow">${q`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
<path d="M11.290625,2 C11.290625,2 13.2539062,2 13.2539062,2 C13.2539062,2 13.2539062,22.59375 13.2539062,22.59375 C13.2539062,22.59375 11.290625,22.59375 11.290625,22.59375 C11.290625,22.59375 11.290625,2 11.290625,2 Z M22.59375,11.3390625 C22.59375,11.3390625 22.59375,13.2546875 22.59375,13.2546875 C22.59375,13.2546875 2,13.2546875 2,13.2546875 C2,13.2546875 2,11.3390625 2,11.3390625 C2,11.3390625 22.59375,11.3390625 22.59375,11.3390625 L22.59375,11.3390625 Z"/>
</svg>`}${i18n.t("Add item")}</button>
      </div>
    `}return null},we=(t,e,a)=>{const i=t.config.referenceList.replace("@P .","").replace("@USER .",""),s=t.config.children[0].children,n=yt(a.data.data.caseInfo.content,i);return n?q`
  ${n.map(((t,n)=>q`
    <tr>
    ${s.map((t=>{const s=t,r=i18n.t(t.config.label);return q`
    <td data-title="${r}">${te(s,void 0,e,a,`${i}(${n+1})`)}</td>`}))}${e?null:q`<td><button type="button" class="pzhc pzbutton Simple"
  aria-label="${i18n.t("Delete item")}" data-ref=${`${i}(${n+1}).pyTemplate`}
  data-action-click='deleteRow'>${ct()}</button></td>`}
    </tr>`))}
`:null},Ae=(t,e,a,i,s)=>{if(void 0===t)return null;if(Array.isArray(t)&&1===t.length&&"View"===t[0].type&&(t=t[0]),!t.config||!t.config.template)return q`${t.map(((t,n)=>{const r=`${e}-${n}`;if("Region"===t.type)return Ae(t.children,`${e}-0`,!0,i,s);if("reference"===t.type&&"view"===t.config.type){let e="";if(t.config.context&&(e=t.config.context),t.config.inheritedProps&&1===t.config.inheritedProps.length&&"label"===t.config.inheritedProps[0].prop){const n=i18n.t(t.config.inheritedProps[0].value);let o=i.data.uiResources.resources.views[t.config.name];if(o){if(Array.isArray(o)&&1===o.length&&"View"===o[0].type&&(o=o[0]),"fieldGroup"===o.config.multiRecordDisplayAs)return Ae(o,r,a,i,""===s?e.substring(1):s+e);const t="SimpleTable"===o.config.template||"ListView"===o.config.template?"field-table":"field-subview";return q`<div class='flex content-item field-item ${t}'><h4>${n}</h4>${Ae(o,r,a,i,""===s?e.substring(1):s+e)}</div>`}}return Ae(i.data.uiResources.resources.views[t.config.name],r,a,i,s&&""!==s?s+e:e.substring(1))}return te(t,r,a,i,s)}))}`;if("SimpleTable"===t.config.template){if("fieldGroup"===t.config.multiRecordDisplayAs){const s=t.config.referenceList.replace("@P .","").replace("@USER .",""),n=yt(i.data.data.caseInfo.content,s);if(!n)return null;const r=t.config.heading.replace("@L ","").replace("@FL ","");return q`${n.map(((n,o)=>q`<div><h4>${`${r} ${o}`}</h4>
        ${Ae(t.children[0].children,`${e}-fieldgroup-${o}`,a,i,`${s}(${o+1})`)}</div>`))}`}return((t,e,a)=>{const i=e||"Editable"!==t.config.renderMode;return q`
  <div class='table-content'><table class='responsive'>
    <thead>
      <tr>
        ${be(t.config.children[0].children,i)}
      </tr>
    </thead>
    <tbody>
      ${we(t,i,a)}
    </tbody>
  </table></div>
  ${Ce(t,i)}`})(t,a,i)}if("ListView"===t.config.template)return((t,e,a)=>(a.sendData("dataviews",{id:t.config.referenceList,content:{paging:{pageNumber:1,pageSize:41}}}),q`
  <table class='responsive'>
    <thead>
      <tr>
        ${be(t.config.presets[0].children[0].children,e)}
      </tr>
    </thead>
    <tbody>${ot()}
    </tbody>
  </table>`))(t,a,i);switch("DataReference"===t.config.template&&(i.isDeclarativeTarget=!0),"TwoColumn"===t.config.template&&1===t.children.length&&(t.config.template="OneColumn"),t.config.template){case"DetailsTwoColumn":case"TwoColumn":return q`
          <div class="flex layout-content-inline_grid_double">
            <div class="flex layout-content-stacked">${Ae(t.children[0].children,`${e}-0`,a,i,s)}</div>
            <div class="flex layout-content-stacked">${Ae(t.children[1].children,`${e}-1`,a,i,s)}</div>
          </div>
        `;case"DefaultForm":return q`
          <div class="${`flex layout-content-default-form layout-content-default-form-${t.config.NumCols}`}">
            ${Ae(t.children[0].children,`${e}-0`,a,i,s)}
          </div>
        `;case"DataReference":return q`
          <div class="flex layout-content-stacked">
            ${Ae(t.children,`${e}-0`,a,i,s)}
          </div>
        `;case"OneColumn":return q`
          <div class="flex layout-content-stacked">
            ${Ae(t.children[0].children,`${e}-0`,a,i,s)}
          </div>
        `;case"Details":return q`
          <div class="flex layout-content-stacked_with_labels_left">
            ${Ae(t.children[0].children,`${e}-0`,!0,i,s)}
          </div>
        `;default:return null}},_e=(t,e,a,i,s,n,r,o,l,c)=>{const d=q`${dt()}<span class='count-badge'>${s}</span>`;return void 0===e.caseID&&a.content?q`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${i18n.t(e.data.caseInfo.name)}</span>
      ${""!==i?q`<span class='badge-bg-info centered'><span class='badge_text'>${i}</span></span>`:""}</h2>
      <div class="flex layout-content-inline_middle margin-l-auto">
        ${l?kt("Attachments",d,"Simple",l):""}
        ${"true"===c&&a.actions&&(a.actions.length>1||1===a.actions.length&&a.actions[0].name!==t)?q`
          ${St("Actions","Start a new action",n,r)}`:""}
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
  </table> `:null)(a.assignments,o)}`:""===t||void 0===e.caseID?"":q`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${i18n.t(e.data.caseInfo.name)}</span>
    ${""!==i?q`<span class='badge-bg-info centered'><span class='badge_text'>${i}</span></span>`:""}</h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      ${l?kt("Attachments",d,"Simple",l):""}
      ${"true"===c&&e.actions&&(e.actions.length>1||1===e.actions.length&&e.actions[0].name!==t)?q`
        ${St("Actions","Start a new action",n,r)}`:""}
    </div>
  </div>
 <h3>${i18n.t(t)}</h3>`},xe=(t,e,a,i,s)=>q`
  <div>${Ae(t,e,!1,s,"")}</div>
  ${((t,e)=>q`
  <div class="action-button-area">
    ${null!==t?q`<button type="button" class="pzhc pzbutton" @click="${t}">${i18n.t("Cancel")}</button>`:""}
    ${null!==e?q`<button type="button" class="pzhc pzbutton" @click="${e}">${i18n.t("Save")}</button>`:""}
    <button type="button" data-submit="submit" class="Strong pzhc pzbutton">${i18n.t("Submit")}</button>
  </div>
`)(a,i)}
`,De=(t,e,a,i)=>q`
  <div>${Ae(t,e,!0,i)}</div>
  ${(t=>null===t?null:q`
  <div class="action-button-area">
  ${null!==t?q`<button type="button" class="pzhc pzbutton Strong" @click="${t}">${i18n.t("Close")}</button>`:""}
  </div>`)(a)}
`,Ie=(t,e,a,i,s,n)=>q`
  <div class="flex layout-content-inline_middle main-header">
    <h2>
    ${i18n.t(t)}
    </h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      <button type='button' class="pzhc pzbutton Simple"
      title='${i18n.t("Click to refresh the tasklist")}' @click="${i}">${i18n.t("Refresh")}</button>
      ${St("Create","Create a new case",a,s)}
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
                    <button @click="${n}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">
                    ${i18n.t("Begin")}</button>
                </div>
              `))}</div>`:q`
        <div class="margin-t-2x">${i18n.t("no tasks")}</div>
      `}
`;class Se extends Zt{displayContent(){if(this.bShowSave="false",""!==this.errorMsg){if(-1===this.errorMsg.indexOf("The provided authorization code is expired"))return t=this.errorMsg,e="true"===this.bShowCancel?this.resetError:null,q`
  <div class="error">${t}
  ${null!=e?q`
    <button type='button' aria-label="${i18n.t("Click to close the banner")}" class="pzhc pzbutton Light" @click="${e}">
    ${lt()}</button>`:""}
  </div>`;window.history.replaceState({},"","")}var t,e,a,i,s,n,r,o,l,c,d;if(window.history.state&&window.history.state.token&&(this.token=window.history.state.token),("oauth2password"===this.authentication||"oauth2clientcredentials"===this.authentication||"custombearer"===this.authentication)&&""===this.token)return this.sendData("authenticate",{}),null;if("authorizationcode"===this.authentication&&""===this.token)return window.history.state&&window.history.state.code?(this.sendData("authenticate",{}),null):((t,e)=>{let a=`${t}/PRRestService/oauth2/v1/authorize`;const i=t.indexOf("/prweb");return-1!==i&&(a=`${t.substring(0,i+6)}/PRRestService/oauth2/v1/authorize`),q`<div class='flex flex-col'><h2>${i18n.t("Log in to the application with one of the following:")}</h2>
  <div class='flex layout-content-inline_middle'>${Bt(It().then((t=>{const{verifier:i,challenge:s}=t,n=`response_type=code&scope=openid&code_challenge=${s}&code_challenge_method=S256&response_mode=query&enable_psyncId=true&authentication_service=pega`,r=`${a}?client_id=${e}&redirect_uri=${encodeURIComponent(Wt())}&${n}&state=${i}`,o=q`<Button class="pzhc pzbutton" onclick="window.location='${r}'; return false;">
      ${i18n.t("Pega with full page redirect")}</Button>`,l=q`<Button class="pzhc pzbutton" onclick="n=window.open('${r}', 'foo',
      'width=600,height=600');n.focus(); return false;">${i18n.t("Pega with popup")}</Button>`;return q`${l}${o}`})),q`Loading...`)}</div></div>`})(this.url,this.clientid);if(this.casetypes||"createNewWork"!==this.action&&"workList"!==this.action&&"taskList"!==this.action&&"dataView"!==this.action)"createNewWork"===this.action&&""===this.caseID&&this.casetypes&&this.casetypes[this.casetype]?(this.content=this.initialContent,this.pageInstructions=[],this.caseID="",this.data={},this.casedata={},this.sendData("newwork",{id:this.casetype})):""===this.name&&("openAssignment"===this.action&&""===this.assignmentID&&(this.assignmentID=this.caseID),""!==this.assignmentID?this.fetchData("assignment",{id:this.assignmentID}):""!==this.caseID&&this.fetchData("view",{id:this.caseID,actionid:"pyReview"}));else if(this.fetchData("dataviews",{id:"D_pxAvailableCaseTypesForPortal",actionid:this.portalName}),this.sendData("dataviews",{id:"D_pyMyWorkList"}),"createNewWork"===this.action)this.bShowNew=!0;else if(("workList"===this.action||"taskList"===this.action||"dataView"===this.action)&&(this.bShowCancel="true","dataView"===this.action)){const t={};if(this.dataviewParams)for(const e of this.dataviewParams.params)e.name&&e.value&&(t[e.name.trim()]=e.value.trim());this.sendData("dataviews",{id:this.dataviewParams.name,content:{dataViewParameters:t}})}if(this.bShowConfirm){this.data.ID.split(" ")[1];return a=this.casedata.name,i=this.casepyStatusWork,s="true"===this.bShowAttachments?this.displayAttachments:null,q`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${i18n.t(a)}</span>
    <span class='badge-bg-info centered'><span class='badge_text'>${i}</span></span></h2>
    ${s?q`<div class="flex layout-content-inline_middle margin-l-auto">
        ${kt("Attachments",dt(),"Simple",s)}
      </div>`:""}
  </div>
  <div class="flex layout-content-inline_middle success">
    ${i18n.t("Thank you. Your information has been submitted.")}
  </div>
  <div id="case-data"></div>`}return""!==this.caseID||""!==this.assignmentID||this.bShowNew?q`
        ${_e(this.name,this.data,this.casedata,this.casepyStatusWork,this.numAttachments,this.displayActions,this.runAction,this.openCase,"true"===this.bShowAttachments?this.displayAttachments:null,this.bShowActions)}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
        <form id="case-data"></form>
      `:"workList"===this.action?(n=this.headingLabel,r=this.cases,o=this.displayCasesTypes,l=this.reloadWorkList,c="true"===this.bShowCreate?this.createCase:null,d=this.openCase,q`
  <div class="flex layout-content-inline_middle main-header">
    <h2>
    ${i18n.t(n)}
      ${r.length>0?q`<span>(${r.length})</span>`:""}
    </h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      <button type='button' class="pzhc pzbutton Simple"
      title='${i18n.t("Click to refresh the worklist")}' @click="${l}">${i18n.t("Refresh")}</button>
      ${St("Create","Create a new case",o,c)}
    </div>
  </div>
  ${r.length>0?q`
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
            ${r.map((t=>{const e=t.caseID.split(" "),a=e[e.length-1];return q`
                <tr>
                  <td data-title='Name'>${i18n.t(t.name)}</td>
                  <td data-title='Case ID'>${a}</td>
                  <td data-title='Urgency' class="right-aligned">${t.urgency}</td>
                  <td data-title='Action' class="right-aligned">
                    <button @click="${d}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">
                    ${i18n.t("Open")}</button>
                  </td>
                </tr>
              `}))}
          </tbody>
        </table>
      `:q`
        <div class="margin-t-2x">${i18n.t("no assignments")}</div>
      `}
`):"taskList"===this.action?Ie(this.headingLabel,this.cases,this.displayCasesTypes,this.reloadWorkList,"true"===this.bShowCreate?this.createCase:null,this.openCase):"dataView"===this.action?((t,e,a,i,s)=>q`
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
      <button @click="${s}" class="pzhc pzbutton" data-type="assignment" data-id="${t.pzInsKey}">${i18n.t("Open")}</button></td>`;if("date"===e.type)try{const a=new Intl.DateTimeFormat([],{year:"numeric",month:"short",day:"numeric"}).format(new Date(t[e.name]));return q`<td data-title='${i18n.t(e.label)}'>${a}</td>`}catch(t){console.error("invalid date",t)}return q`<td data-title='${i18n.t(e.label)}'>${i18n.t(t[e.name])}</td>`}))}
                  </td>
                </tr>
              `))}
          </tbody>
        </table>
      `:q`
        <div class="margin-t-2x">${i18n.t(e.noresults??"No records found.")}</div>
      `}
`)(this.headingLabel,this.dataviewParams,this.data,this.reloadWorkList,this.openCase):null}renderMainLayout=(t,e)=>xe(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this);renderReviewLayout=(t,e)=>De(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,this);genPageValidationErrors=t=>(t=>t.errorDetails?q`
    <ul>
      ${t.errorDetails.map((t=>"Error_Validation_Fail"===t.message||"Validation failed: Errors Detected."===t.message?null:q`<li>${i18n.t(t.localizedValue)}</li>`))}
    </ul>`:null)(t);showDataList=t=>q`
${t.pxResults.map((t=>q`
    <option>
      ${t.pyUserName}
    </option>`))}`;genActionsList=(t,e)=>((t,e)=>{const a=[],i=Object.entries(e.actions);for(const e of i)e[1].name!==t&&a.push(q`
          <li role="menuitem" tabindex="-1" data-value="${e[1].ID}">${i18n.t(e[1].name)}</li>
        `);return q`
    ${a}
  `})(t,e);displayCasesTypes=()=>(t=>{const e=[],a=Object.entries(t);for(const t of a)e.push(q`
        <li role="menuitem" tabindex="-1" data-value="${t[0]}">${i18n.t(t[1].name)}</li>
      `);return q`
    ${e}
  `})(this.casetypes);genLoadingIndicator=()=>ot();setInlineError=(t,e)=>{t.setCustomValidity(ft(e)),t.classList.add("error-field"),t.reportValidity()};validateForm=t=>t.checkValidity();reportFormValidity=t=>t.reportValidity();clickHandler=t=>{let e=t.target;"path"===e.tagName&&(e=e.parentNode),"svg"===e.tagName&&(e=e.parentNode);const a=e.getAttribute("data-action-click");e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e),bt(e,"click")?(this.refreshAssignment(e,Ct(e,"click")),t.preventDefault()):"BUTTON"===e.tagName&&(t.preventDefault(),null!==e.getAttribute("data-submit")&&"save"!==e.getAttribute("data-submit")?this.submitForm(t,e.getAttribute("data-submit")):("addRow"===a||"deleteRow"===a)&&this.refreshAssignment(e))};changeHandler=t=>{let e=t.target;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e.setCustomValidity(""),e.classList.remove("error-field"),bt(e,"change")||this.isDeclarativeTarget)this.refreshAssignment(e,Ct(e,"change"));else if(this.refreshOnChange){const t=this.getRenderRoot().querySelector("#case-data");_t(t,this.content,this.pageInstructions,this.data.data.caseInfo.content),st(xe(this.data.uiResources.resources.views[this.casedata.content.pyViewName],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),t)}};keyupHandler=t=>{const e=t.target;"TEXTAREA"===e.tagName&&(e.style.cssText="height:auto; padding:0;",e.style.cssText=`height:${e.scrollHeight}px`)};focusHandler=t=>{const e=t.target;e.classList.contains("combobox")&&!e.classList.contains("loaded")?this.getData(e.getAttribute("data-pageid"),e):"INPUT"===e.tagName&&e.classList.contains("location")&&!e.classList.contains("pac-target-input")&&window.google&&window.google.maps&&window.google.maps.places&&new window.google.maps.places.Autocomplete(e)};async firstUpdated(){const t=this.getRenderRoot();t&&(t.addEventListener("click",this.clickHandler),t.addEventListener("focusin",this.focusHandler),t.addEventListener("change",this.changeHandler),t.addEventListener("keyup",this.keyupHandler))}}class ke extends Se{createRenderRoot(){return this}getRenderRoot(){return this}render(){return q`
      ${this.displayContent()}
    `}}return customElements.define("pega-mashup-light-v2",ke),t.PegaMashupLightv2=ke,t}({});
