var PegaMashupLightWebComponent=function(t){"use strict";
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},n=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${n}--\x3e`,a=new RegExp(`${n}|${i}`),r="$lit$";class o{constructor(t,e){this.parts=[],this.element=e;const s=[],i=[],o=document.createTreeWalker(e.content,133,null,!1);let l=0,u=-1,p=0;const{strings:g,values:{length:f}}=t;for(;p<f;){const t=o.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)c(e[t].name,r)&&n++;for(;n-- >0;){const e=g[p],s=d.exec(e)[2],n=s.toLowerCase()+r,i=t.getAttribute(n);t.removeAttribute(n);const o=i.split(a);this.parts.push({type:"attribute",index:u,name:s,strings:o}),p+=o.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(n)>=0){const n=t.parentNode,i=e.split(a),o=i.length-1;for(let e=0;e<o;e++){let s,a=i[e];if(""===a)s=h();else{const t=d.exec(a);null!==t&&c(t[2],r)&&(a=a.slice(0,t.index)+t[1]+t[2].slice(0,-r.length)+t[3]),s=document.createTextNode(a)}n.insertBefore(s,t),this.parts.push({type:"node",index:++u})}""===i[o]?(n.insertBefore(h(),t),s.push(t)):t.data=i[o],p+=o}}else if(8===t.nodeType)if(t.data===n){const e=t.parentNode;null!==t.previousSibling&&u!==l||(u++,e.insertBefore(h(),t)),l=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(s.push(t),u--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(n,e+1));)this.parts.push({type:"node",index:-1}),p++}}else o.currentNode=i.pop()}for(const t of s)t.parentNode.removeChild(t)}}const c=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},l=t=>-1!==t.index,h=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(t,e){const{element:{content:s},parts:n}=t,i=document.createTreeWalker(s,133,null,!1);let a=g(n),r=n[a],o=-1,c=0;const l=[];let h=null;for(;i.nextNode();){o++;const t=i.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(l.push(t),null===h&&(h=t)),null!==h&&c++;void 0!==r&&r.index===o;)r.index=null!==h?-1:r.index-c,a=g(n,a),r=n[a]}l.forEach((t=>t.parentNode.removeChild(t)))}const p=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)e++;return e},g=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(l(e))return s}return-1};
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
const f=new WeakMap,m=t=>"function"==typeof t&&f.has(t),y={},b={};
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
class v{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),s=[],n=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let a,r=0,o=0,c=i.nextNode();for(;r<n.length;)if(a=n[r],l(a)){for(;o<a.index;)o++,"TEMPLATE"===c.nodeName&&(s.push(c),i.currentNode=c.content),null===(c=i.nextNode())&&(i.currentNode=s.pop(),c=i.nextNode());if("node"===a.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,a.name,a.strings,this.options));r++}else this.__parts.push(void 0),r++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const w=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),$=` ${n} `;class _{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let a=0;a<t;a++){const t=this.strings[a],o=t.lastIndexOf("\x3c!--");s=(o>-1||s)&&-1===t.indexOf("--\x3e",o+1);const c=d.exec(t);e+=null===c?t+(s?$:i):t.substr(0,c.index)+c[1]+c[2]+r+c[3]+n}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==w&&(e=w.createHTML(e)),t.innerHTML=e,t}}
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const C=t=>null===t||!("object"==typeof t||"function"==typeof t),k=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class S{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new x(this)}_getValue(){const t=this.strings,e=t.length-1,s=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=s[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!k(t))return t}let n="";for(let i=0;i<e;i++){n+=t[i];const e=s[i];if(void 0!==e){const t=e.value;if(C(t)||!k(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class x{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===y||C(t)&&t===this.value||(this.value=t,m(t)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const t=this.value;this.value=y,t(this)}this.value!==y&&this.committer.commit()}}class D{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(h()),this.endNode=t.appendChild(h())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=h()),t.__insert(this.endNode=h())}insertAfterPart(t){t.__insert(this.startNode=h()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=y,t(this)}const t=this.__pendingValue;t!==y&&(C(t)?t!==this.value&&this.__commitText(t):t instanceof _?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):k(t)?this.__commitIterable(t):t===b?(this.value=b,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof v&&this.value.template===e)this.value.update(t.values);else{const s=new v(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const i of t)s=e[n],void 0===s&&(s=new D(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(i),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){s(this.startNode.parentNode,t.nextSibling,this.endNode)}}class A{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=y,t(this)}if(this.__pendingValue===y)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=y}}class I extends S{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new E(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class E extends x{}let T=!1;(()=>{try{const t={get capture(){return T=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class N{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=y,t(this)}if(this.__pendingValue===y)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=B(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=y}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const B=t=>t&&(T?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */;function P(t){let e=z.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},z.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(n);return s=e.keyString.get(i),void 0===s&&(s=new o(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const z=new Map,M=new WeakMap,R=(t,e,n)=>{let i=M.get(e);void 0===i&&(s(e,e.firstChild),M.set(e,i=new D(Object.assign({templateFactory:P},n))),i.appendInto(e)),i.setValue(t),i.commit()};
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const O=new
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
class{handleAttributeExpressions(t,e,s,n){const i=e[0];if("."===i){return new I(t,e.slice(1),s).parts}if("@"===i)return[new N(t,e.slice(1),n.eventContext)];if("?"===i)return[new A(t,e.slice(1),s)];return new S(t,e,s).parts}handleTextExpression(t){return new D(t)}};
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const L=(t,...e)=>new _(t,e,"html",O)
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */,U=(t,e)=>`${t}--${e}`;let q=!0;void 0===window.ShadyCSS?q=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),q=!1);const F=t=>e=>{const s=U(e.type,t);let i=z.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},z.set(s,i));let a=i.stringsArray.get(e.strings);if(void 0!==a)return a;const r=e.strings.join(n);if(a=i.keyString.get(r),void 0===a){const s=e.getTemplateElement();q&&window.ShadyCSS.prepareTemplateDom(s,t),a=new o(e,s),i.keyString.set(r,a)}return i.stringsArray.set(e.strings,a),a},V=["html","svg"],j=new Set,H=(t,e,s)=>{j.add(t);const n=s?s.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:a}=i;if(0===a)return void window.ShadyCSS.prepareTemplateStyles(n,t);const r=document.createElement("style");for(let t=0;t<a;t++){const e=i[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{V.forEach((e=>{const s=z.get(U(e,t));void 0!==s&&s.keyString.forEach((t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{s.add(t)})),u(t,s)}))}))})(t);const o=n.content;s?function(t,e,s=null){const{element:{content:n},parts:i}=t;if(null==s)return void n.appendChild(e);const a=document.createTreeWalker(n,133,null,!1);let r=g(i),o=0,c=-1;for(;a.nextNode();)for(c++,a.currentNode===s&&(o=p(e),s.parentNode.insertBefore(e,s));-1!==r&&i[r].index===c;){if(o>0){for(;-1!==r;)i[r].index+=o,r=g(i,r);return}r=g(i,r)}}(s,r,o.firstChild):o.insertBefore(r,o.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const c=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(s){o.insertBefore(r,o.firstChild);const t=new Set;t.add(r),u(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const W={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},Z=(t,e)=>e!==t&&(e==e||t==t),K={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:Z},J="finalized";class Y extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,s)=>{const n=this._attributeNameForProperty(s,e);void 0!==n&&(this._attributeToPropertyMap.set(n,s),t.push(n))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=K){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`,n=this.getPropertyDescriptor(t,s,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(n){const i=this[t];this[e]=n,this.requestUpdateInternal(t,i,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||K}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(J)||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=Z){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,n=e.converter||W,i="function"==typeof n?n:n.fromAttribute;return i?i(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,n=e.converter;return(n&&n.toAttribute||W.toAttribute)(t,s)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=K){const n=this.constructor,i=n._attributeNameForProperty(t,s);if(void 0!==i){const t=n._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const s=this.constructor,n=s._attributeToPropertyMap.get(t);if(void 0!==n){const t=s.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=s._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,s){let n=!0;if(void 0!==t){const i=this.constructor;s=s||i.getPropertyOptions(t),i._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}Y.finalized=!0;
/**
    @license
    Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */
const X=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol();class Q{constructor(t,e){if(e!==G)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(X?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const tt={};class et extends Y{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,s)=>t.reduceRight(((t,s)=>Array.isArray(s)?e(s,t):(t.add(s),t)),s),s=e(t,new Set),n=[];s.forEach((t=>n.unshift(t))),this._styles=n}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!X){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new Q(String(e),G)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?X?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==tt&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return tt}}et.finalized=!0,et.render=(t,e,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const i=n.scopeName,a=M.has(e),r=q&&11===e.nodeType&&!!e.host,o=r&&!j.has(i),c=o?document.createDocumentFragment():e;if(R(t,c,Object.assign({templateFactory:F(i)},n)),o){const t=M.get(c);M.delete(c);const n=t.value instanceof v?t.value.template:void 0;H(i,c,n),s(e,e.firstChild),e.appendChild(c),M.set(e,t)}!a&&r&&window.ShadyCSS.styleElement(e.host)},et.shadowRootOptions={mode:"open"};
/**
     * @license
     * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
const st=new WeakMap,nt=(it=t=>e=>{const s=st.get(e);if(void 0===t&&e instanceof x){if(void 0!==s||!st.has(e)){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else t!==s&&e.setValue(t);st.set(e,t)},(...t)=>{const e=it(...t);return f.set(e,!0),e});var it;class at{static create(...t){return new this(...t)}mixIn(t){return Object.assign(this,t)}clone(){const t=new this.constructor;return Object.assign(t,this),t}}class rt extends at{constructor(t=[],e=4*t.length){super();let s=t;if(s instanceof ArrayBuffer&&(s=new Uint8Array(s)),(s instanceof Int8Array||s instanceof Uint8ClampedArray||s instanceof Int16Array||s instanceof Uint16Array||s instanceof Int32Array||s instanceof Uint32Array||s instanceof Float32Array||s instanceof Float64Array)&&(s=new Uint8Array(s.buffer,s.byteOffset,s.byteLength)),s instanceof Uint8Array){const t=s.byteLength,e=[];for(let n=0;n<t;n+=1)e[n>>>2]|=s[n]<<24-n%4*8;this.words=e,this.sigBytes=t}else this.words=t,this.sigBytes=e}static random(t){const e=[],s=t=>{let e=t,s=987654321;const n=4294967295;return()=>{s=36969*(65535&s)+(s>>16)&n,e=18e3*(65535&e)+(e>>16)&n;let t=(s<<16)+e&n;return t/=4294967296,t+=.5,t*(Math.random()>.5?1:-1)}};for(let n,i=0;i<t;i+=4){const t=s(4294967296*(n||Math.random()));n=987654071*t(),e.push(4294967296*t()|0)}return new rt(e,t)}toString(t=ot){return t.stringify(this)}concat(t){const e=this.words,s=t.words,n=this.sigBytes,i=t.sigBytes;if(this.clamp(),n%4)for(let t=0;t<i;t+=1){const i=s[t>>>2]>>>24-t%4*8&255;e[n+t>>>2]|=i<<24-(n+t)%4*8}else for(let t=0;t<i;t+=4)e[n+t>>>2]=s[t>>>2];return this.sigBytes+=i,this}clamp(){const{words:t,sigBytes:e}=this;t[e>>>2]&=4294967295<<32-e%4*8,t.length=Math.ceil(e/4)}clone(){const t=super.clone.call(this);return t.words=this.words.slice(0),t}}const ot={stringify(t){const{words:e,sigBytes:s}=t,n=[];for(let t=0;t<s;t+=1){const s=e[t>>>2]>>>24-t%4*8&255;n.push((s>>>4).toString(16)),n.push((15&s).toString(16))}return n.join("")},parse(t){const e=t.length,s=[];for(let n=0;n<e;n+=2)s[n>>>3]|=parseInt(t.substr(n,2),16)<<24-n%8*4;return new rt(s,e/2)}},ct={stringify(t){const{words:e,sigBytes:s}=t,n=[];for(let t=0;t<s;t+=1){const s=e[t>>>2]>>>24-t%4*8&255;n.push(String.fromCharCode(s))}return n.join("")},parse(t){const e=t.length,s=[];for(let n=0;n<e;n+=1)s[n>>>2]|=(255&t.charCodeAt(n))<<24-n%4*8;return new rt(s,e)}},lt={stringify(t){try{return decodeURIComponent(escape(ct.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:t=>ct.parse(unescape(encodeURIComponent(t)))};class ht extends at{constructor(){super(),this._minBufferSize=0}reset(){this._data=new rt,this._nDataBytes=0}_append(t){let e=t;"string"==typeof e&&(e=lt.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes}_process(t){let e;const{_data:s,blockSize:n}=this,i=s.words,a=s.sigBytes;let r=a/(4*n);r=t?Math.ceil(r):Math.max((0|r)-this._minBufferSize,0);const o=r*n,c=Math.min(4*o,a);if(o){for(let t=0;t<o;t+=n)this._doProcessBlock(i,t);e=i.splice(0,o),s.sigBytes-=c}return new rt(e,c)}clone(){const t=super.clone.call(this);return t._data=this._data.clone(),t}}class dt extends ht{constructor(t){super(),this.blockSize=16,this.cfg=Object.assign(new at,t),this.reset()}static _createHelper(t){return(e,s)=>new t(s).finalize(e)}static _createHmacHelper(t){return(e,s)=>new ut(t,s).finalize(e)}reset(){super.reset.call(this),this._doReset()}update(t){return this._append(t),this._process(),this}finalize(t){t&&this._append(t);return this._doFinalize()}}class ut extends at{constructor(t,e){super();const s=new t;this._hasher=s;let n=e;"string"==typeof n&&(n=lt.parse(n));const i=s.blockSize,a=4*i;n.sigBytes>a&&(n=s.finalize(e)),n.clamp();const r=n.clone();this._oKey=r;const o=n.clone();this._iKey=o;const c=r.words,l=o.words;for(let t=0;t<i;t+=1)c[t]^=1549556828,l[t]^=909522486;r.sigBytes=a,o.sigBytes=a,this.reset()}reset(){const t=this._hasher;t.reset(),t.update(this._iKey)}update(t){return this._hasher.update(t),this}finalize(t){const e=this._hasher,s=e.finalize(t);e.reset();return e.finalize(this._oKey.clone().concat(s))}}const pt=rt;class gt extends at{constructor(t,e){super(),this.high=t,this.low=e}}class ft extends at{constructor(t=[],e=8*t.length){super(),this.words=t,this.sigBytes=e}toX32(){const t=this.words,e=t.length,s=[];for(let n=0;n<e;n+=1){const e=t[n];s.push(e.high),s.push(e.low)}return pt.create(s,this.sigBytes)}clone(){const t=super.clone.call(this);t.words=this.words.slice(0);const{words:e}=t,s=e.length;for(let t=0;t<s;t+=1)e[t]=e[t].clone();return t}}const mt={stringify(t){const{words:e,sigBytes:s}=t,n=this._map;t.clamp();const i=[];for(let t=0;t<s;t+=3){const a=(e[t>>>2]>>>24-t%4*8&255)<<16|(e[t+1>>>2]>>>24-(t+1)%4*8&255)<<8|e[t+2>>>2]>>>24-(t+2)%4*8&255;for(let e=0;e<4&&t+.75*e<s;e+=1)i.push(n.charAt(a>>>6*(3-e)&63))}const a=n.charAt(64);if(a)for(;i.length%4;)i.push(a);return i.join("")},parse(t){let e=t.length;const s=this._map;let n=this._reverseMap;if(!n){this._reverseMap=[],n=this._reverseMap;for(let t=0;t<s.length;t+=1)n[s.charCodeAt(t)]=t}const i=s.charAt(64);if(i){const s=t.indexOf(i);-1!==s&&(e=s)}return((t,e,s)=>{const n=[];let i=0;for(let a=0;a<e;a+=1)if(a%4){const e=s[t.charCodeAt(a-1)]<<a%4*2|s[t.charCodeAt(a)]>>>6-a%4*2;n[i>>>2]|=e<<24-i%4*8,i+=1}return rt.create(n,i)})(t,e,n)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},yt=[];for(let t=0;t<64;t+=1)yt[t]=4294967296*Math.abs(Math.sin(t+1))|0;const bt=(t,e,s,n,i,a,r)=>{const o=t+(e&s|~e&n)+i+r;return(o<<a|o>>>32-a)+e},vt=(t,e,s,n,i,a,r)=>{const o=t+(e&n|s&~n)+i+r;return(o<<a|o>>>32-a)+e},wt=(t,e,s,n,i,a,r)=>{const o=t+(e^s^n)+i+r;return(o<<a|o>>>32-a)+e},$t=(t,e,s,n,i,a,r)=>{const o=t+(s^(e|~n))+i+r;return(o<<a|o>>>32-a)+e};class _t extends dt{_doReset(){this._hash=new rt([1732584193,4023233417,2562383102,271733878])}_doProcessBlock(t,e){const s=t;for(let n=0;n<16;n+=1){const i=e+n,a=t[i];s[i]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8)}const n=this._hash.words,i=s[e+0],a=s[e+1],r=s[e+2],o=s[e+3],c=s[e+4],l=s[e+5],h=s[e+6],d=s[e+7],u=s[e+8],p=s[e+9],g=s[e+10],f=s[e+11],m=s[e+12],y=s[e+13],b=s[e+14],v=s[e+15];let w=n[0],$=n[1],_=n[2],C=n[3];w=bt(w,$,_,C,i,7,yt[0]),C=bt(C,w,$,_,a,12,yt[1]),_=bt(_,C,w,$,r,17,yt[2]),$=bt($,_,C,w,o,22,yt[3]),w=bt(w,$,_,C,c,7,yt[4]),C=bt(C,w,$,_,l,12,yt[5]),_=bt(_,C,w,$,h,17,yt[6]),$=bt($,_,C,w,d,22,yt[7]),w=bt(w,$,_,C,u,7,yt[8]),C=bt(C,w,$,_,p,12,yt[9]),_=bt(_,C,w,$,g,17,yt[10]),$=bt($,_,C,w,f,22,yt[11]),w=bt(w,$,_,C,m,7,yt[12]),C=bt(C,w,$,_,y,12,yt[13]),_=bt(_,C,w,$,b,17,yt[14]),$=bt($,_,C,w,v,22,yt[15]),w=vt(w,$,_,C,a,5,yt[16]),C=vt(C,w,$,_,h,9,yt[17]),_=vt(_,C,w,$,f,14,yt[18]),$=vt($,_,C,w,i,20,yt[19]),w=vt(w,$,_,C,l,5,yt[20]),C=vt(C,w,$,_,g,9,yt[21]),_=vt(_,C,w,$,v,14,yt[22]),$=vt($,_,C,w,c,20,yt[23]),w=vt(w,$,_,C,p,5,yt[24]),C=vt(C,w,$,_,b,9,yt[25]),_=vt(_,C,w,$,o,14,yt[26]),$=vt($,_,C,w,u,20,yt[27]),w=vt(w,$,_,C,y,5,yt[28]),C=vt(C,w,$,_,r,9,yt[29]),_=vt(_,C,w,$,d,14,yt[30]),$=vt($,_,C,w,m,20,yt[31]),w=wt(w,$,_,C,l,4,yt[32]),C=wt(C,w,$,_,u,11,yt[33]),_=wt(_,C,w,$,f,16,yt[34]),$=wt($,_,C,w,b,23,yt[35]),w=wt(w,$,_,C,a,4,yt[36]),C=wt(C,w,$,_,c,11,yt[37]),_=wt(_,C,w,$,d,16,yt[38]),$=wt($,_,C,w,g,23,yt[39]),w=wt(w,$,_,C,y,4,yt[40]),C=wt(C,w,$,_,i,11,yt[41]),_=wt(_,C,w,$,o,16,yt[42]),$=wt($,_,C,w,h,23,yt[43]),w=wt(w,$,_,C,p,4,yt[44]),C=wt(C,w,$,_,m,11,yt[45]),_=wt(_,C,w,$,v,16,yt[46]),$=wt($,_,C,w,r,23,yt[47]),w=$t(w,$,_,C,i,6,yt[48]),C=$t(C,w,$,_,d,10,yt[49]),_=$t(_,C,w,$,b,15,yt[50]),$=$t($,_,C,w,l,21,yt[51]),w=$t(w,$,_,C,m,6,yt[52]),C=$t(C,w,$,_,o,10,yt[53]),_=$t(_,C,w,$,g,15,yt[54]),$=$t($,_,C,w,a,21,yt[55]),w=$t(w,$,_,C,u,6,yt[56]),C=$t(C,w,$,_,v,10,yt[57]),_=$t(_,C,w,$,h,15,yt[58]),$=$t($,_,C,w,y,21,yt[59]),w=$t(w,$,_,C,c,6,yt[60]),C=$t(C,w,$,_,f,10,yt[61]),_=$t(_,C,w,$,r,15,yt[62]),$=$t($,_,C,w,p,21,yt[63]),n[0]=n[0]+w|0,n[1]=n[1]+$|0,n[2]=n[2]+_|0,n[3]=n[3]+C|0}_doFinalize(){const t=this._data,e=t.words,s=8*this._nDataBytes,n=8*t.sigBytes;e[n>>>5]|=128<<24-n%32;const i=Math.floor(s/4294967296),a=s;e[15+(n+64>>>9<<4)]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),e[14+(n+64>>>9<<4)]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),t.sigBytes=4*(e.length+1),this._process();const r=this._hash,o=r.words;for(let t=0;t<4;t+=1){const e=o[t];o[t]=16711935&(e<<8|e>>>24)|4278255360&(e<<24|e>>>8)}return r}clone(){const t=super.clone.call(this);return t._hash=this._hash.clone(),t}}class Ct extends at{constructor(t){super(),this.cfg=Object.assign(new at,{keySize:4,hasher:_t,iterations:1},t)}compute(t,e){let s;const{cfg:n}=this,i=n.hasher.create(),a=rt.create(),r=a.words,{keySize:o,iterations:c}=n;for(;r.length<o;){s&&i.update(s),s=i.update(t).finalize(e),i.reset();for(let t=1;t<c;t+=1)s=i.finalize(s),i.reset();a.concat(s)}return a.sigBytes=4*o,a}}class kt extends ht{constructor(t,e,s){super(),this.cfg=Object.assign(new at,s),this._xformMode=t,this._key=e,this.reset()}static createEncryptor(t,e){return this.create(this._ENC_XFORM_MODE,t,e)}static createDecryptor(t,e){return this.create(this._DEC_XFORM_MODE,t,e)}static _createHelper(t){const e=t=>"string"==typeof t?zt:Bt;return{encrypt:(s,n,i)=>e(n).encrypt(t,s,n,i),decrypt:(s,n,i)=>e(n).decrypt(t,s,n,i)}}reset(){super.reset.call(this),this._doReset()}process(t){return this._append(t),this._process()}finalize(t){t&&this._append(t);return this._doFinalize()}}kt._ENC_XFORM_MODE=1,kt._DEC_XFORM_MODE=2,kt.keySize=4,kt.ivSize=4;class St extends kt{constructor(...t){super(...t),this.blockSize=1}_doFinalize(){return this._process(!0)}}class xt extends at{constructor(t,e){super(),this._cipher=t,this._iv=e}static createEncryptor(t,e){return this.Encryptor.create(t,e)}static createDecryptor(t,e){return this.Decryptor.create(t,e)}}function Dt(t,e,s){const n=t;let i;const a=this._iv;a?(i=a,this._iv=void 0):i=this._prevBlock;for(let t=0;t<s;t+=1)n[e+t]^=i[t]}class At extends xt{}At.Encryptor=class extends At{processBlock(t,e){const s=this._cipher,{blockSize:n}=s;Dt.call(this,t,e,n),s.encryptBlock(t,e),this._prevBlock=t.slice(e,e+n)}},At.Decryptor=class extends At{processBlock(t,e){const s=this._cipher,{blockSize:n}=s,i=t.slice(e,e+n);s.decryptBlock(t,e),Dt.call(this,t,e,n),this._prevBlock=i}};const It={pad(t,e){const s=4*e,n=s-t.sigBytes%s,i=n<<24|n<<16|n<<8|n,a=[];for(let t=0;t<n;t+=4)a.push(i);const r=rt.create(a,n);t.concat(r)},unpad(t){const e=t,s=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=s}};class Et extends kt{constructor(t,e,s){super(t,e,Object.assign({mode:At,padding:It},s)),this.blockSize=4}reset(){let t;super.reset.call(this);const{cfg:e}=this,{iv:s,mode:n}=e;this._xformMode===this.constructor._ENC_XFORM_MODE?t=n.createEncryptor:(t=n.createDecryptor,this._minBufferSize=1),this._mode=t.call(n,this,s&&s.words),this._mode.__creator=t}_doProcessBlock(t,e){this._mode.processBlock(t,e)}_doFinalize(){let t;const{padding:e}=this.cfg;return this._xformMode===this.constructor._ENC_XFORM_MODE?(e.pad(this._data,this.blockSize),t=this._process(!0)):(t=this._process(!0),e.unpad(t)),t}}class Tt extends at{constructor(t){super(),this.mixIn(t)}toString(t){return(t||this.formatter).stringify(this)}}const Nt={stringify(t){let e;const{ciphertext:s,salt:n}=t;return e=n?rt.create([1398893684,1701076831]).concat(n).concat(s):s,e.toString(mt)},parse(t){let e;const s=mt.parse(t),n=s.words;return 1398893684===n[0]&&1701076831===n[1]&&(e=rt.create(n.slice(2,4)),n.splice(0,4),s.sigBytes-=16),Tt.create({ciphertext:s,salt:e})}};class Bt extends at{static encrypt(t,e,s,n){const i=Object.assign(new at,this.cfg,n),a=t.createEncryptor(s,i),r=a.finalize(e),o=a.cfg;return Tt.create({ciphertext:r,key:s,iv:o.iv,algorithm:t,mode:o.mode,padding:o.padding,blockSize:a.blockSize,formatter:i.format})}static decrypt(t,e,s,n){let i=e;const a=Object.assign(new at,this.cfg,n);i=this._parse(i,a.format);return t.createDecryptor(s,a).finalize(i.ciphertext)}static _parse(t,e){return"string"==typeof t?e.parse(t,this):t}}Bt.cfg=Object.assign(new at,{format:Nt});const Pt={execute(t,e,s,n){let i=n;i||(i=rt.random(8));const a=Ct.create({keySize:e+s}).compute(t,i),r=rt.create(a.words.slice(e),4*s);return a.sigBytes=4*e,Tt.create({key:a,iv:r,salt:i})}};class zt extends Bt{static encrypt(t,e,s,n){const i=Object.assign(new at,this.cfg,n),a=i.kdf.execute(s,t.keySize,t.ivSize);i.iv=a.iv;const r=Bt.encrypt.call(this,t,e,a.key,i);return r.mixIn(a),r}static decrypt(t,e,s,n){let i=e;const a=Object.assign(new at,this.cfg,n);i=this._parse(i,a.format);const r=a.kdf.execute(s,t.keySize,t.ivSize,i.salt);a.iv=r.iv;return Bt.decrypt.call(this,t,i,r.key,a)}}zt.cfg=Object.assign(Bt.cfg,{kdf:Pt});const Mt=[],Rt=[],Ot=t=>{const e=Math.sqrt(t);for(let s=2;s<=e;s+=1)if(!(t%s))return!1;return!0},Lt=t=>4294967296*(t-(0|t))|0;let Ut=2,qt=0;for(;qt<64;)Ot(Ut)&&(qt<8&&(Mt[qt]=Lt(Ut**.5)),Rt[qt]=Lt(Ut**(1/3)),qt+=1),Ut+=1;const Ft=[];class Vt extends dt{_doReset(){this._hash=new rt(Mt.slice(0))}_doProcessBlock(t,e){const s=this._hash.words;let n=s[0],i=s[1],a=s[2],r=s[3],o=s[4],c=s[5],l=s[6],h=s[7];for(let s=0;s<64;s+=1){if(s<16)Ft[s]=0|t[e+s];else{const t=Ft[s-15],e=(t<<25|t>>>7)^(t<<14|t>>>18)^t>>>3,n=Ft[s-2],i=(n<<15|n>>>17)^(n<<13|n>>>19)^n>>>10;Ft[s]=e+Ft[s-7]+i+Ft[s-16]}const d=n&i^n&a^i&a,u=(n<<30|n>>>2)^(n<<19|n>>>13)^(n<<10|n>>>22),p=h+((o<<26|o>>>6)^(o<<21|o>>>11)^(o<<7|o>>>25))+(o&c^~o&l)+Rt[s]+Ft[s];h=l,l=c,c=o,o=r+p|0,r=a,a=i,i=n,n=p+(u+d)|0}s[0]=s[0]+n|0,s[1]=s[1]+i|0,s[2]=s[2]+a|0,s[3]=s[3]+r|0,s[4]=s[4]+o|0,s[5]=s[5]+c|0,s[6]=s[6]+l|0,s[7]=s[7]+h|0}_doFinalize(){const t=this._data,e=t.words,s=8*this._nDataBytes,n=8*t.sigBytes;return e[n>>>5]|=128<<24-n%32,e[14+(n+64>>>9<<4)]=Math.floor(s/4294967296),e[15+(n+64>>>9<<4)]=s,t.sigBytes=4*e.length,this._process(),this._hash}clone(){const t=super.clone.call(this);return t._hash=this._hash.clone(),t}}class jt extends Vt{_doReset(){this._hash=new rt([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])}_doFinalize(){const t=super._doFinalize.call(this);return t.sigBytes-=4,t}}Vt._createHelper(jt),Vt._createHmacHelper(jt);const Ht=[new gt(1116352408,3609767458),new gt(1899447441,602891725),new gt(3049323471,3964484399),new gt(3921009573,2173295548),new gt(961987163,4081628472),new gt(1508970993,3053834265),new gt(2453635748,2937671579),new gt(2870763221,3664609560),new gt(3624381080,2734883394),new gt(310598401,1164996542),new gt(607225278,1323610764),new gt(1426881987,3590304994),new gt(1925078388,4068182383),new gt(2162078206,991336113),new gt(2614888103,633803317),new gt(3248222580,3479774868),new gt(3835390401,2666613458),new gt(4022224774,944711139),new gt(264347078,2341262773),new gt(604807628,2007800933),new gt(770255983,1495990901),new gt(1249150122,1856431235),new gt(1555081692,3175218132),new gt(1996064986,2198950837),new gt(2554220882,3999719339),new gt(2821834349,766784016),new gt(2952996808,2566594879),new gt(3210313671,3203337956),new gt(3336571891,1034457026),new gt(3584528711,2466948901),new gt(113926993,3758326383),new gt(338241895,168717936),new gt(666307205,1188179964),new gt(773529912,1546045734),new gt(1294757372,1522805485),new gt(1396182291,2643833823),new gt(1695183700,2343527390),new gt(1986661051,1014477480),new gt(2177026350,1206759142),new gt(2456956037,344077627),new gt(2730485921,1290863460),new gt(2820302411,3158454273),new gt(3259730800,3505952657),new gt(3345764771,106217008),new gt(3516065817,3606008344),new gt(3600352804,1432725776),new gt(4094571909,1467031594),new gt(275423344,851169720),new gt(430227734,3100823752),new gt(506948616,1363258195),new gt(659060556,3750685593),new gt(883997877,3785050280),new gt(958139571,3318307427),new gt(1322822218,3812723403),new gt(1537002063,2003034995),new gt(1747873779,3602036899),new gt(1955562222,1575990012),new gt(2024104815,1125592928),new gt(2227730452,2716904306),new gt(2361852424,442776044),new gt(2428436474,593698344),new gt(2756734187,3733110249),new gt(3204031479,2999351573),new gt(3329325298,3815920427),new gt(3391569614,3928383900),new gt(3515267271,566280711),new gt(3940187606,3454069534),new gt(4118630271,4000239992),new gt(116418474,1914138554),new gt(174292421,2731055270),new gt(289380356,3203993006),new gt(460393269,320620315),new gt(685471733,587496836),new gt(852142971,1086792851),new gt(1017036298,365543100),new gt(1126000580,2618297676),new gt(1288033470,3409855158),new gt(1501505948,4234509866),new gt(1607167915,987167468),new gt(1816402316,1246189591)],Wt=[];for(let t=0;t<80;t+=1)Wt[t]=new gt;class Zt extends dt{constructor(){super(),this.blockSize=32}_doReset(){this._hash=new ft([new gt(1779033703,4089235720),new gt(3144134277,2227873595),new gt(1013904242,4271175723),new gt(2773480762,1595750129),new gt(1359893119,2917565137),new gt(2600822924,725511199),new gt(528734635,4215389547),new gt(1541459225,327033209)])}_doProcessBlock(t,e){const s=this._hash.words,n=s[0],i=s[1],a=s[2],r=s[3],o=s[4],c=s[5],l=s[6],h=s[7],d=n.high;let u=n.low;const p=i.high;let g=i.low;const f=a.high;let m=a.low;const y=r.high;let b=r.low;const v=o.high;let w=o.low;const $=c.high;let _=c.low;const C=l.high;let k=l.low;const S=h.high;let x=h.low,D=d,A=u,I=p,E=g,T=f,N=m,B=y,P=b,z=v,M=w,R=$,O=_,L=C,U=k,q=S,F=x;for(let s=0;s<80;s+=1){let n,i;const a=Wt[s];if(s<16)a.high=0|t[e+2*s],i=a.high,a.low=0|t[e+2*s+1],n=a.low;else{const t=Wt[s-15],e=t.high,r=t.low,o=(e>>>1|r<<31)^(e>>>8|r<<24)^e>>>7,c=(r>>>1|e<<31)^(r>>>8|e<<24)^(r>>>7|e<<25),l=Wt[s-2],h=l.high,d=l.low,u=(h>>>19|d<<13)^(h<<3|d>>>29)^h>>>6,p=(d>>>19|h<<13)^(d<<3|h>>>29)^(d>>>6|h<<26),g=Wt[s-7],f=g.high,m=g.low,y=Wt[s-16],b=y.high,v=y.low;n=c+m,i=o+f+(n>>>0<c>>>0?1:0),n+=p,i=i+u+(n>>>0<p>>>0?1:0),n+=v,i=i+b+(n>>>0<v>>>0?1:0),a.high=i,a.low=n}const r=z&R^~z&L,o=M&O^~M&U,c=D&I^D&T^I&T,l=A&E^A&N^E&N,h=(D>>>28|A<<4)^(D<<30|A>>>2)^(D<<25|A>>>7),d=(A>>>28|D<<4)^(A<<30|D>>>2)^(A<<25|D>>>7),u=(z>>>14|M<<18)^(z>>>18|M<<14)^(z<<23|M>>>9),p=(M>>>14|z<<18)^(M>>>18|z<<14)^(M<<23|z>>>9),g=Ht[s],f=g.high,m=g.low;let y=F+p,b=q+u+(y>>>0<F>>>0?1:0);y+=o,b=b+r+(y>>>0<o>>>0?1:0),y+=m,b=b+f+(y>>>0<m>>>0?1:0),y+=n,b=b+i+(y>>>0<n>>>0?1:0);const v=d+l;q=L,F=U,L=R,U=O,R=z,O=M,M=P+y|0,z=B+b+(M>>>0<P>>>0?1:0)|0,B=T,P=N,T=I,N=E,I=D,E=A,A=y+v|0,D=b+(h+c+(v>>>0<d>>>0?1:0))+(A>>>0<y>>>0?1:0)|0}n.low=u+A,u=n.low,n.high=d+D+(u>>>0<A>>>0?1:0),i.low=g+E,g=i.low,i.high=p+I+(g>>>0<E>>>0?1:0),a.low=m+N,m=a.low,a.high=f+T+(m>>>0<N>>>0?1:0),r.low=b+P,b=r.low,r.high=y+B+(b>>>0<P>>>0?1:0),o.low=w+M,w=o.low,o.high=v+z+(w>>>0<M>>>0?1:0),c.low=_+O,_=c.low,c.high=$+R+(_>>>0<O>>>0?1:0),l.low=k+U,k=l.low,l.high=C+L+(k>>>0<U>>>0?1:0),h.low=x+F,x=h.low,h.high=S+q+(x>>>0<F>>>0?1:0)}_doFinalize(){const t=this._data,e=t.words,s=8*this._nDataBytes,n=8*t.sigBytes;e[n>>>5]|=128<<24-n%32,e[30+(n+128>>>10<<5)]=Math.floor(s/4294967296),e[31+(n+128>>>10<<5)]=s,t.sigBytes=4*e.length,this._process();return this._hash.toX32()}clone(){const t=super.clone.call(this);return t._hash=this._hash.clone(),t}}class Kt extends Zt{_doReset(){this._hash=new ft([new gt(3418070365,3238371032),new gt(1654270250,914150663),new gt(2438529370,812702999),new gt(355462360,4144912697),new gt(1731405415,4290775857),new gt(2394180231,1750603025),new gt(3675008525,1694076839),new gt(1203062813,3204075428)])}_doFinalize(){const t=super._doFinalize.call(this);return t.sigBytes-=16,t}}Zt._createHelper(Kt),Zt._createHmacHelper(Kt);const Jt=[],Yt=[],Xt=[];let Gt=1,Qt=0;for(let t=0;t<24;t+=1){Jt[Gt+5*Qt]=(t+1)*(t+2)/2%64;const e=(2*Gt+3*Qt)%5;Gt=Qt%5,Qt=e}for(let t=0;t<5;t+=1)for(let e=0;e<5;e+=1)Yt[t+5*e]=e+(2*t+3*e)%5*5;let te=1;for(let t=0;t<24;t+=1){let e=0,s=0;for(let t=0;t<7;t+=1){if(1&te){const n=(1<<t)-1;n<32?s^=1<<n:e^=1<<n-32}128&te?te=te<<1^113:te<<=1}Xt[t]=gt.create(e,s)}const ee=[];for(let t=0;t<25;t+=1)ee[t]=gt.create();
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
    */rt.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),rt.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),rt.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),rt.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),rt.create([0,1518500249,1859775393,2400959708,2840853838]),rt.create([1352829926,1548603684,1836072691,2053994217,0]);const se=[],ne=[],ie=[],ae=[],re=[],oe=[],ce=[],le=[],he=[],de=[],ue=[];for(let t=0;t<256;t+=1)ue[t]=t<128?t<<1:t<<1^283;let pe=0,ge=0;for(let t=0;t<256;t+=1){let t=ge^ge<<1^ge<<2^ge<<3^ge<<4;t=t>>>8^255&t^99,se[pe]=t,ne[t]=pe;const e=ue[pe],s=ue[e],n=ue[s];let i=257*ue[t]^16843008*t;ie[pe]=i<<24|i>>>8,ae[pe]=i<<16|i>>>16,re[pe]=i<<8|i>>>24,oe[pe]=i,i=16843009*n^65537*s^257*e^16843008*pe,ce[t]=i<<24|i>>>8,le[t]=i<<16|i>>>16,he[t]=i<<8|i>>>24,de[t]=i,pe?(pe=e^ue[ue[ue[n^e]]],ge^=ue[ue[ge]]):(ge=1,pe=ge)}const fe=[0,1,2,4,8,16,32,64,128,27,54];(class extends Et{_doReset(){let t;if(this._nRounds&&this._keyPriorReset===this._key)return;this._keyPriorReset=this._key;const e=this._keyPriorReset,s=e.words,n=e.sigBytes/4;this._nRounds=n+6;const i=4*(this._nRounds+1);this._keySchedule=[];const a=this._keySchedule;for(let e=0;e<i;e+=1)e<n?a[e]=s[e]:(t=a[e-1],e%n?n>6&&e%n==4&&(t=se[t>>>24]<<24|se[t>>>16&255]<<16|se[t>>>8&255]<<8|se[255&t]):(t=t<<8|t>>>24,t=se[t>>>24]<<24|se[t>>>16&255]<<16|se[t>>>8&255]<<8|se[255&t],t^=fe[e/n|0]<<24),a[e]=a[e-n]^t);this._invKeySchedule=[];const r=this._invKeySchedule;for(let e=0;e<i;e+=1){const s=i-e;t=e%4?a[s]:a[s-4],r[e]=e<4||s<=4?t:ce[se[t>>>24]]^le[se[t>>>16&255]]^he[se[t>>>8&255]]^de[se[255&t]]}}encryptBlock(t,e){this._doCryptBlock(t,e,this._keySchedule,ie,ae,re,oe,se)}decryptBlock(t,e){const s=t;let n=s[e+1];s[e+1]=s[e+3],s[e+3]=n,this._doCryptBlock(s,e,this._invKeySchedule,ce,le,he,de,ne),n=s[e+1],s[e+1]=s[e+3],s[e+3]=n}_doCryptBlock(t,e,s,n,i,a,r,o){const c=t,l=this._nRounds;let h=c[e]^s[0],d=c[e+1]^s[1],u=c[e+2]^s[2],p=c[e+3]^s[3],g=4;for(let t=1;t<l;t+=1){const t=n[h>>>24]^i[d>>>16&255]^a[u>>>8&255]^r[255&p]^s[g];g+=1;const e=n[d>>>24]^i[u>>>16&255]^a[p>>>8&255]^r[255&h]^s[g];g+=1;const o=n[u>>>24]^i[p>>>16&255]^a[h>>>8&255]^r[255&d]^s[g];g+=1;const c=n[p>>>24]^i[h>>>16&255]^a[d>>>8&255]^r[255&u]^s[g];g+=1,h=t,d=e,u=o,p=c}const f=(o[h>>>24]<<24|o[d>>>16&255]<<16|o[u>>>8&255]<<8|o[255&p])^s[g];g+=1;const m=(o[d>>>24]<<24|o[u>>>16&255]<<16|o[p>>>8&255]<<8|o[255&h])^s[g];g+=1;const y=(o[u>>>24]<<24|o[p>>>16&255]<<16|o[h>>>8&255]<<8|o[255&d])^s[g];g+=1;const b=(o[p>>>24]<<24|o[h>>>16&255]<<16|o[d>>>8&255]<<8|o[255&u])^s[g];g+=1,c[e]=f,c[e+1]=m,c[e+2]=y,c[e+3]=b}}).keySize=8;const me=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],ye=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],be=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],ve=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],we=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679];function $e(t,e){const s=(this._lBlock>>>t^this._rBlock)&e;this._rBlock^=s,this._lBlock^=s<<t}function _e(t,e){const s=(this._rBlock>>>t^this._lBlock)&e;this._lBlock^=s,this._rBlock^=s<<t}class Ce extends Et{_doReset(){const t=this._key.words,e=[];for(let s=0;s<56;s+=1){const n=me[s]-1;e[s]=t[n>>>5]>>>31-n%32&1}this._subKeys=[];const s=this._subKeys;for(let t=0;t<16;t+=1){s[t]=[];const n=s[t],i=be[t];for(let t=0;t<24;t+=1)n[t/6|0]|=e[(ye[t]-1+i)%28]<<31-t%6,n[4+(t/6|0)]|=e[28+(ye[t+24]-1+i)%28]<<31-t%6;n[0]=n[0]<<1|n[0]>>>31;for(let t=1;t<7;t+=1)n[t]>>>=4*(t-1)+3;n[7]=n[7]<<5|n[7]>>>27}this._invSubKeys=[];const n=this._invSubKeys;for(let t=0;t<16;t+=1)n[t]=s[15-t]}encryptBlock(t,e){this._doCryptBlock(t,e,this._subKeys)}decryptBlock(t,e){this._doCryptBlock(t,e,this._invSubKeys)}_doCryptBlock(t,e,s){const n=t;this._lBlock=t[e],this._rBlock=t[e+1],$e.call(this,4,252645135),$e.call(this,16,65535),_e.call(this,2,858993459),_e.call(this,8,16711935),$e.call(this,1,1431655765);for(let t=0;t<16;t+=1){const e=s[t],n=this._lBlock,i=this._rBlock;let a=0;for(let t=0;t<8;t+=1)a|=ve[t][((i^e[t])&we[t])>>>0];this._lBlock=i,this._rBlock=n^a}const i=this._lBlock;this._lBlock=this._rBlock,this._rBlock=i,$e.call(this,1,1431655765),_e.call(this,8,16711935),_e.call(this,2,858993459),$e.call(this,16,65535),$e.call(this,4,252645135),n[e]=this._lBlock,n[e+1]=this._rBlock}}Ce.keySize=2,Ce.ivSize=2,Ce.blockSize=2;class ke extends Et{_doReset(){const t=this._key.words;if(2!==t.length&&4!==t.length&&t.length<6)throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");const e=t.slice(0,2),s=t.length<4?t.slice(0,2):t.slice(2,4),n=t.length<6?t.slice(0,2):t.slice(4,6);this._des1=Ce.createEncryptor(rt.create(e)),this._des2=Ce.createEncryptor(rt.create(s)),this._des3=Ce.createEncryptor(rt.create(n))}encryptBlock(t,e){this._des1.encryptBlock(t,e),this._des2.decryptBlock(t,e),this._des3.encryptBlock(t,e)}decryptBlock(t,e){this._des3.decryptBlock(t,e),this._des2.encryptBlock(t,e),this._des1.decryptBlock(t,e)}}function Se(){const t=this._S;let e=this._i,s=this._j,n=0;for(let i=0;i<4;i+=1){e=(e+1)%256,s=(s+t[e])%256;const a=t[e];t[e]=t[s],t[s]=a,n|=t[(t[e]+t[s])%256]<<24-8*i}return this._i=e,this._j=s,n}ke.keySize=6,ke.ivSize=2,ke.blockSize=2;class xe extends St{_doReset(){const t=this._key,e=t.words,s=t.sigBytes;this._S=[];const n=this._S;for(let t=0;t<256;t+=1)n[t]=t;for(let t=0,i=0;t<256;t+=1){const a=t%s,r=e[a>>>2]>>>24-a%4*8&255;i=(i+n[t]+r)%256;const o=n[t];n[t]=n[i],n[i]=o}this._j=0,this._i=this._j}_doProcessBlock(t,e){t[e]^=Se.call(this)}}function De(t,e,s,n){const i=t;let a;const r=this._iv;r?(a=r.slice(0),this._iv=void 0):a=this._prevBlock,n.encryptBlock(a,0);for(let t=0;t<s;t+=1)i[e+t]^=a[t]}xe.keySize=8,xe.ivSize=0;class Ae extends xt{}Ae.Encryptor=class extends Ae{processBlock(t,e){const s=this._cipher,{blockSize:n}=s;De.call(this,t,e,n,s),this._prevBlock=t.slice(e,e+n)}},Ae.Decryptor=class extends Ae{processBlock(t,e){const s=this._cipher,{blockSize:n}=s,i=t.slice(e,e+n);De.call(this,t,e,n,s),this._prevBlock=i}};class Ie extends xt{}Ie.Encryptor=class extends Ie{processBlock(t,e){const s=t,n=this._cipher,{blockSize:i}=n,a=this._iv;let r=this._counter;a&&(this._counter=a.slice(0),r=this._counter,this._iv=void 0);const o=r.slice(0);n.encryptBlock(o,0),r[i-1]=r[i-1]+1|0;for(let t=0;t<i;t+=1)s[e+t]^=o[t]}},Ie.Decryptor=Ie.Encryptor;const Ee=t=>{let e=t;if(255==(t>>24&255)){let s=t>>16&255,n=t>>8&255,i=255&t;255===s?(s=0,255===n?(n=0,255===i?i=0:i+=1):n+=1):s+=1,e=0,e+=s<<16,e+=n<<8,e+=i}else e+=1<<24;return e};
/** @preserve
     * Counter block mode compatible with  Dr Brian Gladman fileenc.c
     * derived from CryptoJS.mode.CTR
     * Jan Hruby jhruby.web@gmail.com
     */
class Te extends xt{}Te.Encryptor=class extends Te{processBlock(t,e){const s=t,n=this._cipher,{blockSize:i}=n,a=this._iv;let r=this._counter;a&&(this._counter=a.slice(0),r=this._counter,this._iv=void 0),(t=>{const e=t;e[0]=Ee(e[0]),0===e[0]&&(e[1]=Ee(e[1]))})(r);const o=r.slice(0);n.encryptBlock(o,0);for(let t=0;t<i;t+=1)s[e+t]^=o[t]}},Te.Decryptor=Te.Encryptor;class Ne extends xt{}Ne.Encryptor=class extends Ne{processBlock(t,e){this._cipher.encryptBlock(t,e)}},Ne.Decryptor=class extends Ne{processBlock(t,e){this._cipher.decryptBlock(t,e)}};class Be extends xt{}Be.Encryptor=class extends Be{processBlock(t,e){const s=t,n=this._cipher,{blockSize:i}=n,a=this._iv;let r=this._keystream;a&&(this._keystream=a.slice(0),r=this._keystream,this._iv=void 0),n.encryptBlock(r,0);for(let t=0;t<i;t+=1)s[e+t]^=r[t]}},Be.Decryptor=Be.Encryptor;const Pe=t=>`0${t}`.slice(-2),ze=t=>{if(t.endsWith(" GMT")&&23===t.length)return new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T${t.substring(9,11)}:${t.substring(11,13)}:${t.substring(13,19)}Z`);if(8===t.length){let e=new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T00:00:00.000Z`);return e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),e}if(10===t.length){let e=new Date(`${t.substring(6,10)}-${t.substring(0,2)}-${t.substring(3,5)}T00:00:00.000Z`);return e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),e}return null},Me=t=>t&&"string"==typeof t?t.replace(/&amp;|&lt;|&gt;|&#39;|&#40;|&#41;|&quot;/g,(t=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&#40;":"(","&#41;":")","&quot;":'"'}[t]||t))):"",Re=(t,e,s,n,i)=>{if("string"!=typeof e)return;if(n){const t=Le(n,e);if(t===i||`${t}`==`${i}`||null===t&&""===i)return}const a=e.lastIndexOf(".");if(-1===a)return void(t[e]=i);if(!s)return void Oe(t,e,i);const r={};let o=e.substring(0,a);r[e.substring(a+1)]=i;const c=o.indexOf("(");if(-1===c)s.push({instruction:"UPDATE",target:o,content:r});else{const t=o.substring(c+1,o.length-1);o=o.substring(0,c),s.push({instruction:"UPDATE",target:o,listIndex:parseInt(t,10),content:r})}},Oe=(t,e,s)=>{if("string"!=typeof e)return;const n=e.split(".");let i=t;for(const t in n){let e=n[t];const a=e.indexOf("(");if(-1===a)t<n.length-1?void 0===i[e]&&(i[e]={}):i[e]=s,i=i[e];else{const t=e.substring(a+1,e.length-1);e=e.substring(0,a),void 0===i[e]&&(i[e]=[]);for(let s=i[e].length;s<t;s++)i[e].push({});i=i[e][t-1]}}},Le=(t,e)=>{if("string"!=typeof e)return null;let s=t;const n=e.split(".");for(const t in n){const e=n[t],i=e.indexOf("(");if(-1===i){if(void 0===s[e])return null;s=s[e]}else{const t=e.substring(i+1,e.length-1),n=s[e.substring(0,i)];if(!(n&&Array.isArray(n)&&n.length>=t))return null;s=n[t-1]}}return s},Ue=t=>{for(const e in t)"object"==typeof t[e]?Ue(t[e]):"string"==typeof t[e]&&(t[e]="")},qe=(t,e)=>{for(const s in t)if("fieldID"===s)e.push(t.fieldID);else{const n=t[s];n.fieldID?e.push(n.fieldID):"object"==typeof n&&qe(n,e)}},Fe=(t,e)=>{const s=t.getAttribute(`data-action-${e}`);return!(!s||"postValue"!==s&&0!==s.indexOf("refresh"))},Ve=(t,e)=>{const s=t.getAttribute(`data-action-${e}`);return s&&0===s.indexOf("refresh")?s.replace("refresh-",""):""},je=(t,e,s,n)=>{for(const a of t.elements)if("INPUT"===a.tagName||"TEXTAREA"===a.tagName||"SELECT"===a.tagName){const t=a.getAttribute("data-ref");if(null!==t&&"pyID"!==t)if("INPUT"===a.tagName){const r=a.getAttribute("type");if(a.classList.contains("input-date-day")||a.classList.contains("input-date-month")||a.classList.contains("input-date-year")){if(a.classList.contains("input-date-day")){const r=a.closest(".input-date").parentNode,o=r.querySelector(".input-date-month"),c=r.querySelector(".input-date-year");if(null!==o&&null!==c&&""!==a.value&&""!==o.value&&""!==c.value){const r=`${Pe(o.value)}/${Pe(a.value)}/${i=c.value,`0${i}`.slice(-4)}`;Re(e,t,s,n,r)}}}else if("checkbox"===r)Re(e,t,s,n,a.checked);else if("radio"===r)a.checked&&Re(e,t,s,n,a.value);else if("tel"===r){let i=a.value;"SELECT"===a.parentNode.firstElementChild.tagName&&"field-countrycode"===a.parentNode.firstElementChild.className&&(i=a.parentNode.firstElementChild.value+i),Re(e,t,s,n,i)}else if("date"===r){let i;a.valueAsDate&&(i=new Date(a.valueAsDate)),i&&i instanceof Date&&i.getTime()==i.getTime()||(i=new Date(a.value)),i&&i instanceof Date&&i.getTime()==i.getTime()?(i=new Date(i.getTime()+6e4*i.getTimezoneOffset()),Re(e,t,s,n,`${Pe(i.getMonth()+1)}/${Pe(i.getDate())}/${i.getFullYear()}`)):Re(e,t,s,n,a.value)}else Re(e,t,s,n,a.value)}else Re(e,t,s,n,a.value)}var i,a;if(t&&t.querySelectorAll){const i=t.querySelectorAll("[contenteditable]");for(let t=0;t<i.length;t++){const r=i[t],o=r.getAttribute("data-ref");Re(e,o,s,n,(a=r.innerHTML)&&"string"==typeof a?a.replace(/[&<>'"]/g,(t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","(":"&#40;",")":"&#41;",'"':"&quot;"}[t]||t))):"")}}},He=(t,e,s)=>{for(const n of t.elements)if("INPUT"===n.tagName||"TEXTAREA"===n.tagName||"SELECT"===n.tagName){const t=`.${n.getAttribute("data-ref")}`;if(null!==t&&"pyID"!==t)for(const i in e){if(e[i].Path===t){s.setInlineError(n,e[i].ValidationMessage);break}if(e[i].erroneousInputOutputFieldInPage===t){s.setInlineError(n,e[i].localizedValue);break}}}},We=()=>L`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.3375,3 C20.3375,3 21.7742187,4.43671875 21.7742187,4.43671875 C21.7742187,4.43671875 4.43671875,21.4867188 4.43671875,21.4867188 C4.43671875,21.4867188 3,20.19375 3,20.19375 C3,20.19375 20.3375,3 20.3375,3 Z M21.7265625,20.0976563 C21.7265625,20.0976563 20.3859375,21.534375 20.3859375,21.534375 C20.3859375,21.534375 3.00078125,4.3890625 3.00078125,4.3890625 C3.00078125,4.3890625 4.38984375,3 4.38984375,3 C4.38984375,3 21.7273438,20.0976563 21.7273438,20.0976563 L21.7265625,20.0976563 Z"/>
</svg>`,Ze=()=>L`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1140625,3.96875 C22.1140625,3.96875 22.1140625,3.96875 22.1140625,3.96875 C22.1140625,3.96875 17.46875,3.96875 17.46875,3.96875 C17.46875,3.96875 16.9898437,2.14921875 16.9898437,2.14921875 C16.9421875,1.8140625 16.7507812,1.57421875 16.5109375,1.33515625 C16.2234375,1.09609375 15.8882813,1 15.553125,1 C15.553125,1 15.553125,1 15.553125,1 C15.553125,1 9.03984375,1 9.03984375,1 C8.7046875,1 8.4171875,1.09609375 8.1296875,1.2875 C7.8421875,1.52734375 7.65078125,1.76640625 7.603125,2.1015625 C7.603125,2.1015625 7.603125,2.1015625 7.603125,2.1015625 C7.603125,2.1015625 7.12421875,3.96953125 7.12421875,3.96953125 C7.12421875,3.96953125 2.47890625,3.96953125 2.47890625,3.96953125 C2.14375,3.96953125 2,4.11328125 2,4.4484375 C2,4.78359375 2.14375,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 2.47890625,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 4.01171875,4.92734375 4.01171875,4.92734375 C4.01171875,4.92734375 4.921875,23.1742188 4.921875,23.1742188 C4.96953125,23.5570312 5.11328125,23.8929688 5.40078125,24.1320313 C5.63984375,24.4195312 5.97578125,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 6.40625,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 18.2359375,24.5632812 18.2359375,24.5632812 C18.6671875,24.5632812 19.0023438,24.4195312 19.2898438,24.1320313 C19.5289063,23.8929688 19.6726562,23.5570312 19.7210938,23.1742188 C19.7210938,23.1742188 19.7210938,23.1742188 19.7210938,23.1742188 C19.7210938,23.1742188 20.63125,4.92734375 20.63125,4.92734375 C20.63125,4.92734375 22.115625,4.92734375 22.115625,4.92734375 C22.4507812,4.92734375 22.5945312,4.78359375 22.5945312,4.4484375 C22.5945312,4.11328125 22.4507812,3.96953125 22.115625,3.96953125 L22.1140625,3.96875 Z M8.17734375,3.96875 C8.17734375,3.96875 8.56015625,2.38828125 8.56015625,2.38828125 C8.6078125,2.1484375 8.79921875,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 9.0390625,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 15.5523437,2.00546875 15.5523437,2.00546875 C15.7914062,2.00546875 15.9835937,2.14921875 16.03125,2.38828125 C16.03125,2.38828125 16.03125,2.38828125 16.03125,2.38828125 C16.03125,2.38828125 16.4140625,3.96875 16.4140625,3.96875 C16.4140625,3.96875 8.1765625,3.96875 8.1765625,3.96875 L8.17734375,3.96875 Z M19.6710938,4.9265625 C19.6710938,4.9265625 18.7609375,23.1257812 18.7609375,23.1257812 C18.7132812,23.4132812 18.521875,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 18.234375,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 6.4046875,23.5570312 6.4046875,23.5570312 C6.1171875,23.5570312 5.92578125,23.4132812 5.878125,23.1257812 C5.878125,23.1257812 5.878125,23.1257812 5.878125,23.1257812 C5.878125,23.1257812 4.96796875,4.9265625 4.96796875,4.9265625 C4.96796875,4.9265625 19.6710938,4.9265625 19.6710938,4.9265625 L19.6710938,4.9265625 Z M8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,18.1929687 8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,10.3382812 8.84765625,10.3382812 C8.84765625,10.003125 9.0390625,9.859375 9.37421875,9.859375 C9.37421875,9.859375 9.37421875,9.859375 9.37421875,9.859375 C9.709375,9.859375 9.853125,10.003125 9.853125,10.3382812 C9.853125,10.3382812 9.853125,10.3382812 9.853125,10.3382812 C9.853125,10.3382812 9.853125,18.1929687 9.853125,18.1929687 C9.853125,18.528125 9.709375,18.671875 9.37421875,18.671875 C9.37421875,18.671875 9.37421875,18.671875 9.37421875,18.671875 C9.0390625,18.671875 8.84765625,18.528125 8.84765625,18.1929687 Z M14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,18.1929687 14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,10.3382812 14.7382812,10.3382812 C14.7382812,10.003125 14.8820313,9.859375 15.2171875,9.859375 C15.2171875,9.859375 15.2171875,9.859375 15.2171875,9.859375 C15.5523437,9.859375 15.74375,10.003125 15.74375,10.3382812 C15.74375,10.3382812 15.74375,10.3382812 15.74375,10.3382812 C15.74375,10.3382812 15.74375,18.1929687 15.74375,18.1929687 C15.74375,18.528125 15.5523437,18.671875 15.2171875,18.671875 C15.2171875,18.671875 15.2171875,18.671875 15.2171875,18.671875 C14.8820313,18.671875 14.7382812,18.528125 14.7382812,18.1929687 Z M11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,19.1507813 11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,9.38046875 11.8164062,9.38046875 C11.8164062,9.0453125 11.9601563,8.85390625 12.2953125,8.85390625 C12.6304687,8.85390625 12.7742187,9.0453125 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,9.38046875 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,19.1507813 12.7742187,19.1507813 C12.7742187,19.4859375 12.6304687,19.6773437 12.2953125,19.6773437 C11.9601563,19.6773437 11.8164062,19.4859375 11.8164062,19.1507813 Z"/>
</svg>`,Ke=()=>L`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.5226562,11.6265625 C20.6664062,11.6265625 20.7617188,11.6742188 20.8578125,11.7703125 C20.9539062,11.8664063 21.0015625,11.9617188 21.0015625,12.1054688 C21.0015625,12.2492188 20.9539062,12.3445313 20.8578125,12.440625 C20.8578125,12.440625 20.8578125,12.440625 20.8578125,12.440625 C20.8578125,12.440625 13.2429687,20.0554687 13.2429687,20.0554687 C12.1414062,21.109375 10.8484375,21.6359375 9.41171875,21.6359375 C7.975,21.6359375 6.68203125,21.109375 5.58046875,20.0554687 C5.58046875,20.0554687 5.58046875,20.0554687 5.58046875,20.0554687 C4.5265625,19.0015625 4,17.75625 4,16.271875 C4,16.271875 4,16.271875 4,16.271875 C4,14.8351563 4.5265625,13.5421875 5.58046875,12.440625 C5.58046875,12.440625 5.58046875,12.440625 5.58046875,12.440625 C5.58046875,12.440625 14.9671875,3.14921875 14.9671875,3.14921875 C15.7335937,2.3828125 16.64375,2 17.7453125,2 C18.846875,2 19.7570312,2.3828125 20.5234375,3.14921875 C20.5234375,3.14921875 20.5234375,3.14921875 20.5234375,3.14921875 C21.2898437,3.86796875 21.6726562,4.77734375 21.6726562,5.87890625 C21.6726562,5.87890625 21.6726562,5.87890625 21.6726562,5.87890625 C21.6726562,6.98046875 21.2898437,7.890625 20.5234375,8.65703125 C20.5234375,8.65703125 20.5234375,8.65703125 20.5234375,8.65703125 C20.5234375,8.65703125 11.8546875,17.2773438 11.8546875,17.2773438 C11.3757813,17.75625 10.8007812,17.9960938 10.1304687,17.9960938 C10.1304687,17.9960938 10.1304687,17.9960938 10.1304687,17.9960938 C9.5078125,17.9960938 8.88515625,17.7570313 8.35859375,17.2773438 C8.35859375,17.2773438 8.35859375,17.2773438 8.35859375,17.2773438 C7.8796875,16.7984375 7.63984375,16.2234375 7.63984375,15.553125 C7.63984375,14.8828125 7.87890625,14.3078125 8.35859375,13.8289062 C8.35859375,13.8289062 8.35859375,13.8289062 8.35859375,13.8289062 C8.35859375,13.8289062 16.6921875,5.54375 16.6921875,5.54375 C16.7882812,5.44765625 16.93125,5.4 17.075,5.4 C17.075,5.4 17.075,5.4 17.075,5.4 C17.21875,5.4 17.3140625,5.44765625 17.4101562,5.54375 C17.50625,5.63984375 17.5539062,5.73515625 17.5539062,5.87890625 C17.5539062,5.87890625 17.5539062,5.87890625 17.5539062,5.87890625 C17.5539062,6.02265625 17.50625,6.16640625 17.4101562,6.26171875 C17.4101562,6.26171875 17.4101562,6.26171875 17.4101562,6.26171875 C17.4101562,6.26171875 9.0765625,14.4992187 9.0765625,14.4992187 C8.7890625,14.7867187 8.6453125,15.121875 8.6453125,15.553125 C8.6453125,15.984375 8.7890625,16.3195313 9.0765625,16.6070312 C9.3640625,16.8945312 9.69921875,17.0382813 10.1304687,17.0382813 C10.1304687,17.0382813 10.1304687,17.0382813 10.1304687,17.0382813 C10.5132812,17.0382813 10.8492187,16.8945312 11.1359375,16.6070312 C11.1359375,16.6070312 11.1359375,16.6070312 11.1359375,16.6070312 C11.1359375,16.6070312 19.8523437,7.98671875 19.8523437,7.98671875 C20.4273437,7.41171875 20.7140625,6.69375 20.7140625,5.8796875 C20.7140625,5.8796875 20.7140625,5.8796875 20.7140625,5.8796875 C20.7140625,5.065625 20.4265625,4.3953125 19.8523437,3.8203125 C19.8523437,3.8203125 19.8523437,3.8203125 19.8523437,3.8203125 C19.2296875,3.2453125 18.5117187,2.95859375 17.7453125,2.95859375 C17.7453125,2.95859375 17.7453125,2.95859375 17.7453125,2.95859375 C16.93125,2.95859375 16.2609375,3.24609375 15.6859375,3.8203125 C15.6859375,3.8203125 15.6859375,3.8203125 15.6859375,3.8203125 C15.6859375,3.8203125 6.29921875,13.159375 6.29921875,13.159375 C5.4375,13.9734375 5.00625,14.9789062 5.00625,16.2726562 C5.00625,16.2726562 5.00625,16.2726562 5.00625,16.2726562 C5.00625,17.5179688 5.4375,18.5234375 6.29921875,19.3375 C6.29921875,19.3375 6.29921875,19.3375 6.29921875,19.3375 C7.1609375,20.1992188 8.21484375,20.6304688 9.4125,20.6304688 C9.4125,20.6304688 9.4125,20.6304688 9.4125,20.6304688 C10.7054687,20.6304688 11.7117187,20.1992188 12.5257812,19.3375 C12.5257812,19.3375 12.5257812,19.3375 12.5257812,19.3375 C12.5257812,19.3375 20.1882812,11.7703125 20.1882812,11.7703125 C20.284375,11.6742188 20.3796875,11.6265625 20.5234375,11.6265625 L20.5226562,11.6265625 Z"/>
</svg>`,Je=()=>L`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1632813,6.753125 C22.1632813,6.753125 22.1632813,6.753125 22.1632813,6.753125 C22.1632813,6.753125 15.8414062,0.43125 15.8414062,0.43125 C15.6023437,0.14375 15.21875,0 14.7875,0 C14.7875,0 14.7875,0 14.7875,0 C14.7875,0 3.48515625,0 3.48515625,0 C3.05390625,0 2.71875,0.14375 2.43125,0.43125 C2.14375,0.71875 2,1.05390625 2,1.48515625 C2,1.48515625 2,1.48515625 2,1.48515625 C2,1.48515625 2,23.0367188 2,23.0367188 C2,23.4679688 2.14375,23.803125 2.43125,24.090625 C2.71875,24.378125 3.05390625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 3.48515625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 21.109375,24.521875 21.109375,24.521875 C21.540625,24.521875 21.8757812,24.378125 22.1632813,24.090625 C22.4507812,23.803125 22.5945312,23.4679688 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,23.0367188 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,7.80703125 22.5945312,7.80703125 C22.5945312,7.37578125 22.4507812,7.040625 22.1632813,6.753125 Z M15.6976563,1.6765625 C15.6976563,1.6765625 20.8703125,6.84921875 20.8703125,6.84921875 C20.8703125,6.84921875 16.225,6.84921875 16.225,6.84921875 C15.8898438,6.84921875 15.7460938,6.70546875 15.7460938,6.3703125 C15.7460938,6.3703125 15.7460938,6.3703125 15.7460938,6.3703125 C15.7460938,6.3703125 15.6984375,1.6765625 15.6984375,1.6765625 L15.6976563,1.6765625 Z M21.6367188,7.8546875 C21.6367188,7.8546875 21.6367188,23.0367188 21.6367188,23.0367188 C21.6367188,23.371875 21.4453125,23.515625 21.1101563,23.515625 C21.1101563,23.515625 21.1101563,23.515625 21.1101563,23.515625 C21.1101563,23.515625 3.4859375,23.515625 3.4859375,23.515625 C3.15078125,23.515625 2.959375,23.371875 2.959375,23.0367188 C2.959375,23.0367188 2.959375,23.0367188 2.959375,23.0367188 C2.959375,23.0367188 2.959375,1.48515625 2.959375,1.48515625 C2.959375,1.15 3.15078125,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 3.4859375,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 14.740625,0.95859375 14.740625,0.95859375 C14.740625,0.95859375 14.740625,6.3703125 14.740625,6.3703125 C14.740625,6.8015625 14.884375,7.13671875 15.171875,7.42421875 C15.459375,7.71171875 15.7945313,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 16.2257813,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 21.6375,7.85546875 21.6375,7.85546875 L21.6367188,7.8546875 Z"/>
</svg>`,Ye=(t,e)=>{if(t.control&&t.control.actionSets&&t.control.actionSets.length>0)for(const s of t.control.actionSets)if(s.events.length>0&&s.actions.length>0&&s.events[0].event===e){let t=s.actions[0].action;return"refresh"===t&&""!==s.actions[0].refreshFor&&(t+=`-${s.actions[0].refreshFor}`),t}},Xe=t=>"pyTemplateButton"!==t.reference?t.reference:t.control&&t.control.modes?t.control.modes[1].tooltip:null,Ge=(t,e,s)=>{if(void 0===e)return null;const n=t.required&&!0!==t.readOnly?"icon-required":"";return"field-checkbox"===s?""!==t.label||!0===t.showLabel?L`<div class="field-caption dataLabelForWrite ${n}">${Me(t.label)}</div>`:null:"field-text"===s&&!0===t.readOnly&&"pxCheckbox"===t.control.type&&t.control.label?L`<label class="field-caption dataLabelForWrite">${Me(t.control.label)}</label>`:""!==t.label||!0===t.showLabel||!0===t.labelReserveSpace?L`<label class="field-caption dataLabelForWrite ${n}" for="${nt(e)}">${Me(t.label)}</label>`:null},Qe=(t,e,s,n)=>void 0===e?L`
      ${n}
    `:"field-button"!==s||(t=>!!(t.control&&t.control.actionSets&&t.control.actionSets.length>0))(t)?"field-radiogroup"===s?L`
    <div class="flex content-item field-item ${s}"><fieldset><legend>${Ge(t,e,s)}</legend>${n}</fielset></div>
  `:"field-checkbox"===s?L`
    <div class="flex content-item field-item ${s}">${n}</div>
  `:L`
    <div class="flex content-item field-item ${s}">${Ge(t,e,s)}${n}</div>
  `:null,ts=(t,e,s)=>{if(void 0===t||void 0===t.control||void 0===t.control.type)return null;if(t.customAttributes&&"none"===t.customAttributes.display)return null;if(!0===s||!0===t.readOnly||"pxHidden"===t.control.type)return Qe(t,e,"field-text",es(t,e));switch(t.control.type){case"pxPhone":case"pxTextInput":return Qe(t,e,"field-textinput",ss(t,e));case"pxInteger":case"pxNumber":return Qe(t,e,"field-numberinput",is(t,e));case"pxCurrency":return Qe(t,e,"field-currencyinput",as(t,e));case"pxEmail":return Qe(t,e,"field-emailinput",rs(t,e));case"pxTextArea":return Qe(t,e,"field-textarea",os(t,e));case"pxRadioButtons":return Qe(t,e,"field-radiogroup",fs(t,e));case"pxCheckbox":return Qe(t,e,"field-checkbox",ms(t,e));case"pxDropdown":return Qe(t,e,"field-dropdown",ys(t,e));case"pxDisplayText":return Qe(t,e,"field-text",es(t,e));case"pxIcon":return Qe(t,e,"field-icon",cs(t,e));case"pxLink":case"pxURL":return Qe(t,e,"field-url",ls(t,e));case"pxIconDeleteItem":return Qe(t,e,"field-button",ds(t,e));case"pxButton":return Qe(t,e,"field-button",hs(t,e));case"pxDateTime":return"TimeOfDay"===t.type?Qe(t,e,"field-time",gs(t,e)):"Date"===t.type?Qe(t,e,"field-date",ps(t,e)):Qe(t,e,"field-datetime",us(t,e));case"pxAutoComplete":return Qe(t,e,"field-combobox",bs(t,e));case"pxSlider":return Qe(t,e,"field-slider",ns(t,e));default:return null}},es=(t,e)=>{if("pxDate"===t.control.type){let s=ze(t.value);if(s)if(t.control&&2===t.control.modes.length){let e={};switch(t.control.modes[1].dateFormat){case"DateTime-Short-YYYY":case"Date-DayMonthYear-Custom":case"Date-Mediun":e={year:"numeric",month:"short",day:"numeric"};break;case"Date-Short":e={year:"numeric",month:"numeric",day:"numeric"};break;case"Date-Long":e={year:"numeric",month:"long",day:"numeric"};break;case"Date-Full":e={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;default:e={}}s=new Intl.DateTimeFormat([],e).format(s)}else s=(new Intl.DateTimeFormat).format(s);else s=t.value;return L`
      <span class="dataValueRead" data-ref="${t.reference}" id="${nt(e)}">${s}</span>
    `}if("pxDateTime"===t.control.type){let s=ze(t.value);if(s)if(t.control&&2===t.control.modes.length){let e={};switch(t.control.modes[1].dateTimeFormat){case"DateTime-Short-YYYY":e={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};break;default:e={}}s=new Intl.DateTimeFormat([],e).format(s)}else s=(new Intl.DateTimeFormat).format(s);else s=t.value;return L`
      <span class="dataValueRead" data-ref="${t.reference}" id="${nt(e)}">${s}</span>
    `}if("pxTime"===t.control.type){let s=ze(t.value);if(s)if(t.control&&2===t.control.modes.length){const t={hour:"numeric",minute:"numeric"};s=new Intl.DateTimeFormat([],t).format(s)}else s=(new Intl.DateTimeFormat).format(s);else s=t.value;return L`
      <span class="dataValueRead" data-ref="${t.reference}" id="${nt(e)}">${s}</span>
    `}if("pxHidden"===t.control.type)return L`
    <input type="text" style="display:none" data-ref="${t.reference}" id="${nt(e)}" value="${Me(t.value)}"/>
    `;let s=t.value;if(t.control&&2===t.control.modes.length&&"locallist"===t.control.modes[0].listSource)for(const e of t.control.modes[0].options)e.key===s&&(s=e.value);return"pxCurrency"===t.control.type&&(s=`$${s}`),L`
    <span class="dataValueRead" data-ref="${t.reference}" id="${nt(e)}">${Me(s)}</span>
  `},ss=(t,e)=>L`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="text"
    id="${nt(e)}"
    value="${Me(t.value)}"
    data-action-change="${nt(Ye(t,"change"))}"
    data-action-click="${nt(Ye(t,"click"))}"
  />
`,ns=(t,e)=>L`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="range"
    id="${nt(e)}"
    value="${Me(t.value)}"
    data-action-change="${nt(Ye(t,"change"))}"
    data-action-click="${nt(Ye(t,"click"))}"
  />
`,is=(t,e)=>L`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="number"
    id="${nt(e)}"
    value="${t.value}"
    data-action-change="${nt(Ye(t,"change"))}"
    data-action-click="${nt(Ye(t,"click"))}"
  />
`,as=(t,e)=>L`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="number"
    id="${nt(e)}"
    value="${t.value}"
    data-action-change="${nt(Ye(t,"change"))}"
    data-action-click="${nt(Ye(t,"click"))}"
  />
`,rs=(t,e)=>L`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="email"
    id="${nt(e)}"
    value="${t.value}"
    data-action-change="${nt(Ye(t,"change"))}"
    data-action-click="${nt(Ye(t,"click"))}"
  />
`,os=(t,e)=>L`
  <textarea
    data-ref="${t.reference}"
    rows="3"
    ?required="${!0===t.required}"
    id="${nt(e)}"
    data-action-change="${nt(Ye(t,"change"))}"
    data-action-click="${nt(Ye(t,"click"))}"
  >
${Me(t.value)}</textarea
  >
`,cs=(t,e)=>L`
  <i
    class="${t.control.modes[1].iconStyle}"
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    id="${nt(e)}"
    value="${t.value}"
  />
`,ls=(t,e)=>L`
  <a id="${nt(e)}" data-ref="${t.reference}" href="${t.value}">${t.control.label}</a>
`,hs=(t,e)=>{const s=Ye(t,"click");return"deleteRow"===s?ds(t,e):L`
  <button
  type='button' 
    class="${nt(t.control.modes[1].controlFormat)} pzhc pzbutton"
    id="${nt(e)}"
    data-ref="${nt(Xe(t))}"
    data-action-click="${nt(s)}"
  >${t.control.label}</button>`},ds=(t,e)=>L`
  <button
    type='button' 
    class="pzhc pzbutton Icon"
    title="Delete row"
    id="${nt(e)}"
    data-ref="${nt(Xe(t))}"
    data-action-click="deleteRow"
  >${Ze()}</button>
`,us=(t,e)=>{let s=t.value;if(""!==s){let e=ze(s);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),s=`${e.getFullYear()}-${Pe(e.getMonth()+1)}-${Pe(e.getDate())}T${Pe(e.getHours())}:${Pe(e.getMinutes())}`):8===t.value.length&&(s=`${t.value.substring(0,4)}-${t.value.substring(4,6)}-${t.value.substring(6,8)}T00:00`)}return L`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      type="datetime-local"
      id="${nt(e)}"
      value="${s}"
      data-action-change="${nt(Ye(t,"change"))}"
    data-action-click="${nt(Ye(t,"click"))}"
    />
  `},ps=(t,e)=>{let s=t.value;if(""!==s){let e=ze(s);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),s=`${e.getFullYear()}-${Pe(e.getMonth()+1)}-${Pe(e.getDate())}`):8===t.value.length&&(s=`${t.value.substring(0,4)}-${t.value.substring(4,6)}-${t.value.substring(6,8)}`)}return L`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      type="date"
      id="${nt(e)}"
      value="${s}"
      data-action-change="${nt(Ye(t,"change"))}"
    data-action-click="${nt(Ye(t,"click"))}"
    />
  `},gs=(t,e)=>{let s=t.value;if(""!==s){let e=ze(s);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),s=`${Pe(e.getHours())}-${Pe(e.getMinutes())}-${Pe(e.getSeconds())}`):8===t.value.length&&(s=`${t.value.substring(9,10)}:${t.value.substring(10,11)}:${t.value.substring(11,12)}`)}return L`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      type="time"
      id="${nt(e)}"
      value="${s}"
      data-action-change="${nt(Ye(t,"change"))}"
      data-action-click="${nt(Ye(t,"click"))}"
    />
  `},fs=(t,e)=>{let s;return t.control&&t.control.modes&&t.control.modes[0].options?s=t.control.modes[0].options:"True-False"===t.type&&(s=[{value:"true"},{value:"false"}]),void 0===s?null:L`
    ${s.map(((s,n)=>{const i=`rb-${e}-${n}`;return L`
        <div>
          <input
            data-ref="${t.reference}"
            name=${nt(e)}
            id="${i}"
            type="radio"
            value="${s.key}"
            ?required="${!0===t.required}"
            ?checked="${s.key===t.value}"
            data-action-change="${nt(Ye(t,"change"))}"
          />
          <label for="${i}">${s.value}</label>
        </div>
      `}))}
  `},ms=(t,e)=>L`
  <input
  data-ref="${t.reference}" 
  id="${nt(e)}"
  type="checkbox" 
  ?checked=${"true"===t.value}
  data-action-change="${nt(Ye(t,"change"))}"
  data-action-click="${nt(Ye(t,"click"))}"
  />
  <label for="${nt(e)}">${t.control.label}</label>
`,ys=(t,e)=>t.control&&t.control.modes[0]&&t.control.modes[0].options?L`<select
      data-ref="${t.reference}"
      id=${nt(e)}
      ?required="${!0===t.required}"
      data-action-change="${nt(Ye(t,"change"))}"
      data-action-click="${nt(Ye(t,"click"))}">
        <option value="" title="Select...">Select...</option>
        ${t.control.modes[0].options.map((e=>L`
            <option ?selected=${e.key===t.value} value='${e.key}'>${e.value}</option>
          `))}
      </select>`:L`<input
      type='text'
      data-ref="${t.reference}"
      id=${nt(e)}
      ?required="${!0===t.required}"
      data-action-change="${nt(Ye(t,"change"))}"
      data-action-click="${nt(Ye(t,"click"))}">
      </input>`,bs=(t,e)=>{if(t.control.modes&&t.control.modes[0]&&t.control.modes[0].options)return L`
      <input
        data-ref="${t.reference}"
        list="${t.reference}"
        ?required="${!0===t.required}"
        type="text"
        class="combobox loaded"
        id="${nt(e)}"
        value="${Me(t.value)}"
        data-action-change="${nt(Ye(t,"change"))}"
        data-action-click="${nt(Ye(t,"click"))}"
      />
      <datalist id="${t.reference}">
        ${t.control.modes[0].options.map((t=>L`
            <option value="${t.value}">
              ${t.key}
            </option>
          `))}
      </datalist>
    `;let s="";return t.control&&t.control.modes&&t.control.modes[0]&&t.control.modes[0].dataPageID&&(s=t.control.modes[0].dataPageID),L`
    <input
      data-ref="${t.reference}"
      list="${t.reference}"
      data-pageid="${s}"
      ?required="${!0===t.required}"
      type="text"
      class="combobox"
      id="${nt(e)}"
      value="${t.value}"
      data-action-change="${nt(Ye(t,"change"))}"
      data-action-click="${nt(Ye(t,"click"))}"
    />
    <datalist id="${t.reference}"></datalist>
  `},vs=t=>""!==t.title?L`
      <div class="header-bar">
        <div class="header-content"><h3 class="header-title">${t.title}</h3></div>
      </div>
    `:null,ws=(t,e)=>{let s=t.fieldListID;if(void 0!==t.reference&&(s=t.reference),"."===s.charAt(0)&&(s=s.substring(1)),t.newRow&&!0!==e){const e=[];return qe(t.newRow,e),L`
      <div class="table-action-area">
        <button type="button" class="pzhc pzbutton Simple" data-newrow="${nt(e.join())}"
        data-ref=${s} data-action-click="addRow">${L`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
<path d="M11.290625,2 C11.290625,2 13.2539062,2 13.2539062,2 C13.2539062,2 13.2539062,22.59375 13.2539062,22.59375 C13.2539062,22.59375 11.290625,22.59375 11.290625,22.59375 C11.290625,22.59375 11.290625,2 11.290625,2 Z M22.59375,11.3390625 C22.59375,11.3390625 22.59375,13.2546875 22.59375,13.2546875 C22.59375,13.2546875 2,13.2546875 2,13.2546875 C2,13.2546875 2,11.3390625 2,11.3390625 C2,11.3390625 22.59375,11.3390625 22.59375,11.3390625 L22.59375,11.3390625 Z"/>
</svg>`}Add item</button>
      </div>
    `}return null},$s=t=>L`
  ${t.map((t=>L`
    <th scope='col'>${t.caption?L`${t.caption.value}`:""}</th>`))}
`,_s=t=>L`
  ${t.map((t=>L`
    <tr>
      ${t.groups.map((t=>L`
      <td>${ts(t.field)}</td>`))}
    </tr>`))}
`,Cs=()=>L`
<span class="loading">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</span>
`,ks=(t,e,s,n,i)=>{const a=document.createElement("div");a.setAttribute("role","alertdialog"),a.setAttribute("aria-modal","true"),a.setAttribute("aria-labelledby",t),a.setAttribute("aria-describedby",""),a.setAttribute("class","mashup-modal");const r=document.createElement("div");a.appendChild(r);const o='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',c=()=>{document.body.removeEventListener("click",l),document.body.removeEventListener("keydown",h),a&&(a.previousElementSibling&&(a.previousElementSibling.removeAttribute("aria-hidden"),a.previousElementSibling.focus()),a.remove()),i&&i()},l=t=>{if(t){let e=t.target;if(e.download)return;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e){const t=e.closest("button");if((null===t||"close"!==t.getAttribute("data-action-id"))&&!e.classList.contains("mashup-modal")&&null!==e.closest(".mashup-modal"))return}c()}},h=t=>{if("Escape"===t.key)return void l(t);if(!("Tab"===t.key||9===t.keyCode))return;const e=a.querySelectorAll(o),s=e[e.length-1],n=e[0];t.shiftKey?document.activeElement===n&&(s.focus(),t.preventDefault()):document.activeElement===s&&(n.focus(),t.preventDefault())};return L`
  <div class='modalcontent'>
    <button type="button" @click="${t=>{t.preventDefault(),t.stopPropagation();const e=t.target.closest(".modalcontent");if(null===e)c();else if(1===e.children.length){e.firstElementChild.setAttribute("aria-hidden","true"),a.style.opacity=0,e.appendChild(a),n(r);a.querySelectorAll(o)[0].focus(),document.body.addEventListener("click",l),document.body.addEventListener("keydown",h),a.offsetHeight,a.style=""}else c()}}" class="pzhc pzbutton ${s}" title="${i18n.t(t)}">${i18n.t(e)}</button>
  </div>`},Ss=(t,e,s,n,i)=>{if(null==n)return null;let a;const r=`${Math.random().toString(36).substr(2,9)}`,o=document.createElement("ul");o.setAttribute("id",`menu-overlay-${r}`),o.setAttribute("role","menu"),o.setAttribute("aria-labelledby",`menubutton-${r}`),o.setAttribute("tabindex","-1");const c=()=>{document.body.removeEventListener("click",h),document.body.removeEventListener("keydown",l),o&&(o.previousElementSibling&&(o.previousElementSibling.setAttribute("aria-expanded","false"),o.previousElementSibling.focus()),o.remove())},l=t=>{38===t.keyCode?(a=a.previousElementSibling,null===a&&(a=o.lastElementChild),a.focus()):40===t.keyCode?(a=a.nextElementSibling,null===a&&(a=o.firstElementChild),a.focus()):27===t.keyCode||9===t.keyCode?c():13===t.keyCode&&(n(t),c())},h=t=>{if(t){let e=t.target;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&e.nextElementSibling===o)return;e.parentNode===o&&n(t),c()}},d=t=>{if("keydown"===t.type&&40!==t.keyCode)return;if(t.preventDefault(),t.stopPropagation(),"blur"===t.type)return void h(t);const e=t.currentTarget;"BUTTON"!==e.tagName?(n(t),c()):null===e.nextElementSibling?(e.parentNode.appendChild(o),e.setAttribute("aria-expanded","true"),R(s(),o),a=e.nextElementSibling.firstElementChild,a.focus(),document.body.addEventListener("click",h),document.body.addEventListener("keydown",l)):c()};return L`
    <div class="button-menu">
    <button type='button' id="${`menubutton-${r}`}" aria-haspopup="true" aria-controls="${`menu-overlay-${r}`}" aria-expanded="false"
    @click="${d}" @keydown="${d}" @blur="${d}"
    class="${`pzhc pzbutton Simple ${i||"action-menu"}`}" aria-label="${i18n.t(e)}">${i18n.t(t)}</button>
    </div>
  `},xs=(t,e,s,n)=>ks(t,e,s,(t=>{R(Ds(t,[]),t),n(t)})),Ds=(t,e,s,n,i)=>{let a=0;const r=t=>{if(void 0===t||"string"==typeof t&&""===t)return;if("URL"===e[a].category)return void window.open(t);let s=e[a].fileName;if(void 0===s&&(s=e[a].name),void 0===s&&(s=e[a].pyAttachName),!s)return;const n=window.document.createElement("a");if("Correspondence"===e[a].category){s=`${e[a].name}.html`;const i=`<html><head><title>${e[a].name}</title></head><body>${t}</body></html>`,r=new Blob([i],{type:"text"});n.href=window.URL.createObjectURL(r)}else{const e=function(t){const e=window.atob(t),s=e.length,n=new Uint8Array(s);for(let t=0;t<s;t++){const s=e.charCodeAt(t);n[t]=s}return n}(t),s=new Blob([e],{type:"octet/stream"});n.href=window.URL.createObjectURL(s)}n.download=s,document.body.appendChild(n),n.click(),document.body.removeChild(n)},o=t=>{t.stopPropagation();const s=t.target;a=s.getAttribute("data-id"),n.fetchData.call(n,"attachment",{id:e[a].ID,target:r})},c=s=>{s.preventDefault(),s.stopPropagation();const i=s.target.closest("button");a=i.getAttribute("data-id"),n.sendData.call(n,"deleteattachment",{id:e[a].ID,target:t})},l=r=>{r.stopPropagation();const o=r.target.closest("button");a=parseInt(o.getAttribute("data-id"),10),i.splice(a,1),R(Ds(t,e,s,n,i),t)},h=t=>{t.stopPropagation(),t.preventDefault();const e=t.target;if(a=e.getAttribute("data-id"),"INPUT"===e.tagName){const t=e.getAttribute("data-prop-id");i[a][t]=e.value}else"SELECT"===e.tagName&&(i[a].category=e.value)},d=e=>{e.preventDefault();const s=e.target,n=e.relatedTarget,i=null===s?null:s.closest(".attach-files"),a=null===n?null:n.closest(".attach-files");if("dragenter"===e.type||"dragover"===e.type?null!=i&&i.classList.add("drop-file-hover"):"dragleave"!==e.type&&"drop"!==e.type||null===a&&null!==i&&i.classList.remove("drop-file-hover"),"drop"===e.type){const n=e.dataTransfer.files;t||(t=s.closest(".attach-files")),p(s,n)}},u=a=>{a&&(a.stopPropagation(),a.preventDefault());for(let a=0;a<i.length;a++){const r=i[a];delete r.editing,r.loading=!0,"URL"===r.type?(e.unshift(r),n.sendData.call(n,"attachments",{id:s,actionid:[r],target:t})):(e.unshift({name:r.displayName,extension:r.extension,loading:!0}),n.sendData.call(n,"uploadattachment",{actionid:r,target:t}))}R(Ds(t,e,s,n),t)},p=(i,a)=>{const r=[];for(let t=0;t<a.length;t++){const e=a[t];let s=e.name.lastIndexOf(".");-1===s&&(s=e.name.length),e.displayName=e.name.substring(0,s),e.extension=e.name.substring(s+1),e.editing=!0,e.category="File",r.push(e)}R(Ds(t,e,s,n,r),t)},g=e=>{e.stopPropagation();let s=e.target;if("BUTTON"===s.tagName)return s=e.target.parentNode.parentNode.firstElementChild,void s.click();t||(t=s.closest(".attach-files")),p(s,s.files)},f=i=>{i.stopPropagation();R(Ds(t,e,s,n,[{type:"URL",category:"URL",name:"",url:"",editing:!0}]),t)},m=i=>{i.stopPropagation(),R(Ds(t,e,s,n),t)},y=(t,e)=>{let s=new Date(e.createTime);return s=s.toLocaleDateString(void 0,{year:"numeric",month:"numeric",day:"numeric"}),L`
    <div class='list-item-title'>
      <button type='button' class='Light'  data-id="${t}" @click="${o}">${e.name}</button>
      ${e.loading?"":L`
      <span class='list-item-meta'><span>${e.createdBy}</span><span>${s}</span><span>${i18n.t("Category:")} ${e.category}</span></span>`}
    </div>`},b=()=>L`<li role="menuitem" tabindex="-1" data-value="Download">${i18n.t("Download")}</li>
  <li role="menuitem" tabindex="-1" data-value="Delete">${i18n.t("Delete")}</li>`,v=i=>{let o=i.target;if(i.path&&i.path.length>0?o=i.path[0]:i.originalTarget&&(o=i.originalTarget),o){const i=o.getAttribute("data-value"),c=e[a].pzInsKey||e[a].ID;"Download"===i?n.fetchData.call(n,"attachment",{id:c,target:r}):"Delete"===i&&(n.sendData.call(n,"deleteattachment",{id:c,target:t}),R(Ds(void 0,[],s,n,[]),t))}},w=t=>L`<div class='row-item'>
    <span class='doc-icon'>${Je()}<span>${t.extension}</span></span>
    <div class='list-item-title'><span>${t.pyAttachName||t.name}</span>
    <span class="list-item-meta"><span>${t.pyCategoryName||t.category}</span>
    <span>${t.pxCreateOperator||t.createdBy}</span></span></div>
    ${Ss(L`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
<path d="M14.353125,6.353125 C13.9703125,6.7359375 13.4914062,6.928125 12.9640625,6.928125 C12.4367188,6.928125 11.9585938,6.73671875 11.575,6.353125 C11.1921875,5.9703125 11,5.49140625 11,4.9640625 C11,4.43671875 11.1914062,3.95859375 11.575,3.575 C11.9578125,3.1921875 12.4367188,3 12.9640625,3 C13.4914063,3 13.9695312,3.19140625 14.353125,3.575 C14.7359375,3.9578125 14.928125,4.43671875 14.928125,4.9640625 C14.928125,5.49140625 14.7367187,5.96953125 14.353125,6.353125 Z M14.353125,13.7289063 C13.9703125,14.1117188 13.4914062,14.3039063 12.9640625,14.3039063 C12.4367188,14.3039063 11.9585938,14.1125 11.575,13.7289063 C11.1921875,13.3460938 11,12.8671875 11,12.3398438 C11,11.8125 11.1914062,11.334375 11.575,10.9507813 C11.9578125,10.5679688 12.4367188,10.3757813 12.9640625,10.3757813 C13.4914063,10.3757813 13.9695312,10.5671875 14.353125,10.9507813 C14.7359375,11.3335938 14.928125,11.8125 14.928125,12.3398438 C14.928125,12.8671875 14.7367187,13.3453125 14.353125,13.7289063 Z M14.353125,21.1039062 C13.9703125,21.4867187 13.4914062,21.6789062 12.9640625,21.6789062 C12.4367188,21.6789062 11.9585938,21.4875 11.575,21.1039062 C11.1921875,20.7210938 11,20.2421875 11,19.7148438 C11,19.1875 11.1914062,18.709375 11.575,18.3257813 C11.9578125,17.9429688 12.4367188,17.7507813 12.9640625,17.7507813 C13.4914063,17.7507813 13.9695312,17.9421875 14.353125,18.3257813 C14.7359375,18.7085937 14.928125,19.1875 14.928125,19.7148438 C14.928125,20.2421875 14.7367187,20.7203125 14.353125,21.1039062 Z"></path>
</svg>`,"Actions",b,v,"button-action")}
  </div>`,$=(t,e)=>e.loading?L`${y(t,e)}${Cs()}`:e.editing?"URL"===e.type?L`
      <div class='flex content-item field-item'>
        <label for='url-name'>Name</label>
        <input type='text' id='url-name' data-prop-id='name' @change="${h}" data-id="${t}" value="${e.name}"/>
      </div>
      <div class='flex content-item field-item'>
        <label for='url-url'>URL</label>
        <input type='text' id='url-url' data-prop-id='url' @change="${h}" data-id="${t}" value="${e.url}"/>
      </div>`:L`
      <input type='text' data-prop-id='displayName' class='flex-all' @change="${h}" 
      data-id="${t}" value="${e.displayName}" aria-label='${i18n.t("name")}'/>
      ${((t,e)=>L`
    <select data-id="${t}" @change="${h}" class='flex-all' aria-label='${i18n.t("Category")}'>
    ${n.attachmentcategories.map((t=>L`
      <option ?selected=${t.ID===e}>${t.ID}</option>
    `))}
    </select>`)(t,e.category)}
      <span class='flex-all'>${e.name}</span>
      <span>${Math.round(e.size/1e3)}Kb</span>
      <button type='button' data-id="${t}" @click="${l}" class='pzhc pzbutton Simple' 
      aria-label=${i18n.t("Delete")}>${Ze()}</button>`:L`${y(t,e)}
    <button type='button' data-id="${t}" @click="${c}" class='pzhc pzbutton Simple' 
    aria-label=${i18n.t("Delete")}>${Ze()}</button>`,_=t=>{if(!s)return Cs();const e=[];if(void 0!==t){const s=Object.entries(t);for(const t of s){let s=t[1].extension;void 0===s&&(s=t[1].type),s||(s=""),s.length>5&&(s=s.substring(0,5)),"URL"===t[1].type&&t[1].editing?e.push(L`<div class='flex layout-content-stacked content-items-maxwidth'>
              ${$(t[0],t[1])}
            </div>`):e.push(L`<div class='row-item'>
              <span class='doc-icon'>${Je()}<span>${s}</span></span>
              ${$(t[0],t[1])}
            </div>`)}}return e&&e.length>0?e:L`<div class='empty'>${i18n.t("no attachments found")}</div>`};if(!t){if(e&&e.length>0&&e[0].pyAttachName){a=0,e[0].extension="";const t=e[0].pyAttachName.split(".");return t.length>1&&(e[0].extension=t[t.length-1]),w(e[0])}return L`<div @dragenter="${d}" @dragover="${d}" @dragleave="${d}"  
    @drop="${d}" class='attach-files list-items'>
      <div class="file-upload">
        <input @change="${g}" type="file">
        ${Ke()}<span>${i18n.t(" Drag and drop or ")}
        <button type='button' aria-labelledby='${i18n.t("click to attach a file")}' class='Light' @click="${g}">${i18n.t("choose file")}</button>
      </div>
    </div>`}if(t&&t.classList.contains("attach-files")){if(i&&i.length>0)return n.sendData.call(n,"uploadattachment",{actionid:i[0],target:t}),C=i[0],k=!0,L`<div class='row-item'>
    <span class='doc-icon'>${Je()}<span>${C.extension}</span></span>
    <div class='list-item-title'><span>${C.displayName}</span>${k?L`<span class="list-item-meta"><span>
    ${i18n.t("Uploading...")}</span></span>`:""}</div>
  </div>`;if(e&&e.length>0)return w(e[0])}var C,k;let S="Attachments";return void 0!==i&&i.length>0&&(S="URL"===i[0].type?"Attach a link":"Attach files"),L`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${i18n.t(S)}</h2>
      <div class="flex layout-content-inline_middle margin-l-auto">
        <button type='button' data-action-id='close'
        class="pzhc pzbutton Simple" aria-label="${i18n.t("Close modal")}">${We()}</button>
      </div>
    </div>
    ${void 0!==i&&i.length>0?L`
      <div id="modalcontent" class='attach-files list-items'>
        <div class='upload-content'>${_(i)}</div>
        <div class="action-button-area">
          <button type="button" class="pzhc pzbutton" @click="${m}">${i18n.t("Cancel")}</button>
          <button type="button" class="Strong pzhc pzbutton" @click="${u}">${i18n.t("Upload")}</button>
        </div>
      </div>`:L`
      <form id="modalcontent" @dragenter="${d}" @dragover="${d}" @dragleave="${d}"  
      @drop="${d}" class='attach-files list-items'>
        <div class="file-upload">
          <input @change="${g}" type="file" multiple="">
          ${Ke()}<span>${i18n.t(" Drag and drop files, attach ")}
          <button type='button' aria-label='${i18n.t("click to attach a file")}' class='Light' @click="${g}">
          ${i18n.t("files")}</button> ${i18n.t("or add a")} 
          <button type='button' aria-label='${i18n.t("click to add a URL link")}' class='Light' @click="${f}">
          ${i18n.t("link")}</button></span>
        </div>
        ${_(e)}
      </form>
    `}
  `},As=(t,e)=>L`
<div class="flex layout-content-inline_middle main-header">
  <h2>${i18n.t(t)}</h2>
  <div class="flex layout-content-inline_middle margin-l-auto">
    <button type='button' data-action-id='close'
    class="pzhc pzbutton Simple" aria-label="${i18n.t("Close modal")}">${We()}</button>
  </div>
</div>
<div class="validation" role="alert" aria-live="assertive"></div>
<form id="modalcontent">${e}</form>
`,Is=(t,e,s,n)=>L`
  ${t.map(((t,i)=>{const a=`${e}-${i}`;if(t.layout){""!==t.layout.groupFormat.trim()&&"CENTER"!==t.layout.groupFormat||(t.layout.groupFormat="default");const e=t.layout.groupFormat.replace(/ /g,"_").toLowerCase(),i=`flex content layout-content-${e} content-${e}`;if(t.layout.view&&t.layout.view.groups)return L`
          <div class="${i}">${Is(t.layout.view.groups,a,s,n)}</div>
        `;if(t.layout.groups){let e="";if("string"==typeof t.layout.title&&""!==t.layout.title&&(t.layout.titleFormat,1))switch(t.layout.titleFormat){case"h2":e=L`<h2>${t.layout.title}</h2>`;break;case"h3":e=L`<h3>${t.layout.title}</h3>`;break;case"h4":e=L`<h4>${t.layout.title}</h4>`;break;default:e=L`<h2>${t.layout.title}</h2>`}return L`
        ${e}<div class="${i}">${Is(t.layout.groups,a,s,n)}</div>
        `}return t.layout.rows?t.layout.header?((t,e,s)=>L`
  ${vs(t.layout)}
  <table>
  <caption class="sr-only">${t.layout.title}</caption>
    <thead>
      <tr>
        ${$s(t.layout.header.groups)}
      </tr>
    </thead>
    <tbody>
      ${_s(t.layout.rows)}
    </tbody>
  </table>
  ${ws(t.layout,s)}
`)(t,0,s):Es(t,a,s):null}if(t.field){if(t.field.control&&"pxAttachContent"===t.field.control.type)return xs("Upload file","Upload file","",n.displayAttachments);if(t.field.control&&t.field.control.actionSets&&t.field.control.actionSets.length>0&&t.field.control.actionSets[0]&&t.field.control.actionSets[0].actions[0]&&"localAction"===t.field.control.actionSets[0].actions[0].action){const e=n.actionID;return((t,e,s)=>{const n=t.control.actionSets[0].actions[0].actionProcess.localAction,i=t.control.actionSets[0].actions[0].actionProcess.target,a=t.control.modes[1].controlFormat?t.control.modes[1].controlFormat:"";if("modalDialog"===i){const i=s=>{R(As(t.control.label,Cs()),s),e(n,s)};return ks(n,t.control.label,a,i,s)}return L`<div><button type="button" @click="${()=>{e(n)}}" class="pzhc pzbutton ${a}">${i18n.t(t.control.label)}</button></<div>`})(t.field,n.displayLocalAction,(()=>{n.reloadAssignment(e)}))}return ts(t.field,a,s)}return t.view&&t.view.groups?"pyAttachFieldOptional"===t.view.viewID&&"Embed-Attach-File"===t.view.appliesTo?xs("Upload file","Upload file","",n.displayAttachments):Is(t.view.groups,a,s,n):null}))}
`,Es=(t,e,s)=>L`
  ${vs(t.layout)}
  <div class="rdl">
    ${Ts(t.layout.rows,e,s)}
  </div>
  ${ws(t.layout,s)}
`,Ts=(t,e,s)=>L`
  ${t.map(((t,n)=>{const i=`${e}-row${n}`;return t.groups?L`
        <div>
          ${Is(t.groups,i,s)}
        </div>
      `:null}))}
`,Ns=(t,e,s,n,i,a,r,o,c)=>{const l=L`${Ke()}<span class='count-badge'>${i}</span>`;if(void 0===e.caseID&&s.content)return L`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${s.content.pyLabel} <span>(${s.content.pyID})</span></h2>
      ${""!==n?L`<span class='badge-bg-info centered'><span class='badge_text'>${n}</span></span>`:""}
      <div class="flex layout-content-inline_middle margin-l-auto">
        ${c?xs("Attachments",l,"Simple",c):""}
        ${s.actions&&s.actions.length>0?L`
          ${Ss("Actions","Start a new action",a,r)}`:""}
      </div>
    </div>
    ${((t,e)=>t&&0!==t.length?L`
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
        ${t.map((t=>L`
        <tr>
          <td>${t.urgency}</td>
          <td>${""!==t.instructions?t.instructions:t.name}</td>
          <td>${t.routedTo}</td>
          <td class="right-aligned">
            <button type='button' @click="${e}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">Open</button>
          </td>
        </tr>`))}
  </tbody>
  </table>`:null)(s.assignments,o)}
    ${((t,e)=>t&&0!==t.length?L`
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
        ${t.map((t=>L`
        <tr>
          <td>${t.ID}</td>
          <td class="right-aligned">
            <button type='button' @click="${e}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">${i18n.t("Open")}</button>
          </td>
        </tr>`))}
  </tbody>
  </table>`:null)(s.childCases,o)}
    <h3>Case information</h3>`;if(""===t||void 0===e.caseID)return"";const h=e.caseID.split(" ")[1];return L`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${e.name} <span>(${h})</span></h2>
    ${""!==n?L`<span class='badge-bg-info centered'><span class='badge_text'>${n}</span></span>`:""}
    <div class="flex layout-content-inline_middle margin-l-auto">
      ${c?xs("Attachments",l,"Simple",c):""}
      ${e.actions&&e.actions.length>0?L`
        ${Ss("Actions","Start a new action",a,r)}`:""}
    </div>
  </div>
 <h3>${t}</h3>`},Bs=(t,e,s,n,i)=>L`
  <div class="flex layout-content-stacked">${Is(t,e,!1,i)}</div>
  ${((t,e)=>L`
  <div class="action-button-area">
    ${null!==t?L`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    ${null!==e?L`<button type="button" class="pzhc pzbutton" @click="${e}">Save</button>`:""}
    <button type="button" data-submit="submit" class="Strong pzhc pzbutton">Submit</button>
  </div>
`)(s,n)}
`,Ps=(t,e,s,n)=>L`
  <div class="flex layout-content-stacked">${Is(t,e,!0,n)}</div>
  ${(t=>null===t?null:L`
  <div class="action-button-area">
  ${null!==t?L`<button type="button" class="pzhc pzbutton Strong" @click="${t}">Close</button>`:""}
  </div>`)(s)}
`,zs=(t,e,s,n,i)=>L`
  <div class="flex layout-content-stacked">${Is(t,e,!1,i)}</div>
  ${((t,e)=>L`
  <div class="action-button-area">
    ${null!==t?L`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    <button type="button" data-submit="save" class="pzhc pzbutton Strong" @click="${e}">Submit</button>
  </div>
`)(s,n)}
`,Ms=(t,e,s,n)=>L`
  <div class="flex layout-content-stacked">${Is(t,e,!1,n)}</div>
  ${(t=>L`
  <div class="action-button-area">
    ${null!==t?L`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    <button type="button" data-submit="create" class="Strong pzhc pzbutton">Create</button>
  </div>
`)(s)}
`,Rs=t=>t.errorDetails?L`
    <ul>
      ${t.errorDetails.map((t=>L`<li>${t.localizedValue}</li>`))}
    </ul>`:L`
  <ul>
    ${t.errors[0].ValidationMessages.map((t=>t.Path?L`
          <li>${t.Path.substring(1)}: ${t.ValidationMessage}</li>
        `:0===t.ValidationMessage.indexOf("Validation failed")?null:L`
    <li>${t.ValidationMessage}</li>
  `))}
  </ul>`,Os=(t,e)=>{const s=[],n=Object.entries(e.actions);for(const e of n)e[1].name!==t&&s.push(L`
          <li role="menuitem" tabindex="-1" data-value="${e[1].ID}">${e[1].name}</li>
        `);return L`
    ${s}
  `},Ls=t=>L`
${t.pxResults.map((t=>L`
    <option>
      ${t.pyUserName}
    </option>`))}`;class Us extends et{static get properties(){return{url:{},caseID:{},username:{},password:{},title:{},bShowCreate:{},bShowCancel:{},bShowAttachments:{},bShowSave:{},authentication:{},token:{},clientid:{},clientsecret:{},initialContent:{},action:{},casetype:{},portalName:{},langTokens:{}}}constructor(){super(),this.url="",this.title="My worklist",this.caseID="",this.username="",this.password="",this.bShowCreate="true",this.bShowCancel="true",this.bShowAttachments="false",this.bShowSave="true",this.authentication="",this.token="",this.clientid="",this.clientsecret="",this.initialContent="",this.action="",this.casetype="",this.portalName="",this.cases=[],this.dataPages={},this.name="",this.etag="",this.casepyStatusWork="",this.casedata={},this.data={},this.numAttachments=0,this.attachmentcategories=[],this.assignmentID="",this.actionID="",this.content={},this.pageInstructions=[],this.errorMsg="",this.validationMsg="",this.bShowConfirm=!1,this.bShowNew=!1,this.refreshOnChange=!1,this.isDeclarativeTarget=!1;const t=this;window.i18n||(window.i18n={t:function(e){if(!e)return"";if("string"!=typeof e)return e;let s=e;if(0===s.indexOf("@L ")&&(s=s.substring(3)),s=s.replace(/^"|"$/g,"").trim(),s=Me(s),"object"!=typeof t.langTokens)return s;const n=t.langTokens[s];return n&&""!==n?n.trim():(console.log(s),s)}})}clearLoadingIndicator(){const t=this.getRenderRoot().querySelector("#case-data");t&&null!==t.querySelector(".loading")&&R(null,t)}sendExternalEvent(t){this.dispatchEvent(new CustomEvent("message",{detail:{msg:t}}))}}class qs extends Us{genErrorMessage(t){this.clearLoadingIndicator(),t.message&&-1!==t.message.indexOf("JSON.parse")?console.error("Error:",t):t.message&&-1!==t.message.indexOf("Unexpected token")?(this.errorMsg="Error 404: Resource not found",this.requestUpdate(),console.error(this.errorMsg)):(t.status?""!==t.statusText?this.errorMsg=`Error ${t.status}: ${t.statusText}`:401===t.status?this.errorMsg="Error 401: Authentication error":500===t.status?this.errorMsg="Error 500: Internal server error":this.errorMsg=`Error ${t.status}`:t.name&&t.message?this.errorMsg=`Error ${t.name}: ${t.message}`:this.errorMsg="string"==typeof t?t:"Critical error",this.requestUpdate(),console.error("Error:",t))}fetchData(t,e){const{id:s,actionid:n,target:i,element:a}=e||{};let r="";""!==this.authentication&&"basic"!==this.authentication||(r=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(r=`Bearer ${this.token}`);const o={method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:r},mode:"cors"};let c=`${this.url}/api/v1/`;switch(t){case"worklist":c+="assignments";break;case"casetypes":c+="casetypes";break;case"newwork":c+=`casetypes/${s}`;break;case"assignment":c+=`assignments/${s}`;break;case"case":c+=`cases/${s}`;break;case"data":c+=`data/${s}`;break;case"page":c+=`cases/${s}/pages/${n}`;break;case"view":c+=`cases/${s}/views/${n}`;break;case"assignmentaction":c+=`assignments/${s}/actions/${n}`;break;case"caseaction":c+=`cases/${s}/actions/${n}`;break;case"attachment":c+=`attachments/${s}`;break;case"attachments":c+=`cases/${s}/attachments`;break;case"attachmentcategories":c+=`cases/${s}/attachment_categories`}fetch(c,o).then((e=>{if("case"===t)this.etag=e.headers.get("etag"),i&&(i.disabled=!1,i.textContent="Save");else if("attachment"===t)return e.text();return e.ok||404===e.status?e.json():Promise.reject(e)})).then((e=>{try{if(e.errors&&e.errors.length>0)return this.errorMsg=`Error ${e.errors[0].ID}: ${e.errors[0].message}`,this.clearLoadingIndicator(),this.requestUpdate(),void console.error("Error:",e);const r=this.getRenderRoot().querySelector("#case-data");switch(t){case"casetypes":this.casetypes={};for(const t of e.caseTypes)"workList"===this.action&&""!==this.casetype&&this.casetype!==t.ID||(this.casetypes[t.ID]={canCreate:t.CanCreate,name:t.name,requiresFieldsToCreate:!1});"createNewWork"===this.action&&this.createCase();break;case"worklist":this.cases=e.assignments,this.requestUpdate();break;case"assignment":this.data=e,this.caseID=e.caseID,""===this.name&&(this.name=" "),this.fetchData("case",{id:this.caseID}),e.actions.length>0&&e.actions[0].ID?(this.actionID=e.actions[0].ID,this.name=e.actions[0].name,this.fetchData("assignmentaction",{id:s,actionid:this.actionID})):this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"});break;case"case":this.casedata=e,this.content={},this.pageInstructions=[],this.numAttachments=0,""===this.name&&(this.name=this.casedata.content.pyLabel),this.casepyStatusWork=this.casedata.content.pyStatusWork,this.requestUpdate(),""===this.assignmentID&&this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"}),"true"===this.bShowAttachments&&this.fetchData("attachments",{id:this.caseID});break;case"data":if(this.dataPages[s]=e,!a.nextElementSibling){console.error("Error: case data are not present when retrieving the data");break}R(Ls(e),a.nextElementSibling);break;case"caseaction":if(!r){console.error("Error: case data are not present when retrieving the assignmentaction");break}if(!e.view.groups)return this.errorMsg="Error: view is not defined",this.clearLoadingIndicator(),void this.requestUpdate();R(zs(e.view.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,this.actionAreaSave,this),r),r.focus();break;case"assignmentaction":if(!r){console.error("Error: case data are not present when retrieving the assignmentaction");break}if(!e.view.groups)return this.errorMsg="Error: view is not defined",this.clearLoadingIndicator(),void this.requestUpdate();i?(this.actionID=n,R(As(e.name,Bs(e.view.groups,"Obj",this.actionAreaCancel,null,this)),i),i.focus()):(this.name=e.name,this.requestUpdate(),R(Bs(e.view.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),r),r.focus());break;case"page":if(!r){console.error("Error: case data are not present when retrieving the page");break}R(Bs(e.groups,"Obj",this),r),r.focus();break;case"view":if(!r){console.error("Error: case data are not present when retrieving the page");break}this.content={},this.pageInstructions=[],"pyCaseInformation"===n?(this.name=e.name,R(Ps(e.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,this),r)):(this.name=e.name,R(Bs(e.groups,"Obj",this),r)),r.focus();break;case"newwork":if(this.content={},this.pageInstructions=[],!r){console.error("Error: case data are not present when retrieving the newwork");break}R(Ms(e.creation_page.groups[0].layout.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null),r),r.focus();const t=this.getRenderRoot().querySelector("#case-data");t&&((t,e)=>{for(const s of t.elements)if("INPUT"===s.tagName||"TEXTAREA"===s.tagName||"SELECT"===s.tagName){const t=s.getAttribute("data-ref");if(null!==t&&"pyID"!==t&&e[t]){const n=e[t];if("object"==typeof n)"radio"===s.type?s.value===n.value&&(s.checked=!0):"checkbox"===s.type?!0!==n.value&&"true"!==n.value||(s.checked=!0):n.value&&(s.value=n.value),n.disabled&&(s.disabled=!0);else if("datetime-local"===s.type)24===n.length?s.value=n.substring(0,23):s.value=n;else if("date"===s.type){let n;s.valueAsDate&&(n=new Date(s.valueAsDate)),n&&n instanceof Date&&n.getTime()==n.getTime()||(n=new Date(s.value)),n&&n instanceof Date&&n.getTime()==n.getTime()?(n=new Date(n.getTime()+6e4*n.getTimezoneOffset()),Oe(e,t,`${Pe(n.getMonth()+1)}/${Pe(n.getDate())}/${n.getFullYear()}`)):Oe(e,t,s.value)}else"string"==typeof n?"radio"===s.type?s.value===n&&(s.checked=!0):"checkbox"===s.type?"true"===n&&(s.checked=!0):s.value=n:"boolean"==typeof n&&"checkbox"===s.type?!0===n&&(s.checked=!0):s.value=n}}})(t,this.initialContent);break;case"attachments":let o=e.attachments;o||(o=[]),this.numAttachments=o.length,i&&R(Ds(i,o,this.caseID,this),i),this.requestUpdate();break;case"attachmentcategories":this.attachmentcategories=e.attachment_categories;break;case"attachment":i(e)}}catch(t){this.errorMsg=`Error: ${t}`,this.requestUpdate(),console.error("Error:",t)}})).catch((t=>{this.genErrorMessage(t)}))}sendData(t,e,s){const{id:n,actionid:i,target:a,refreshFor:r}=e;let o="";""!==this.authentication&&"basic"!==this.authentication||(o=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(o=`Bearer ${this.token}`);const c={"Content-Type":"application/json;charset=UTF-8",Authorization:o},l={method:"POST",headers:c,mode:"cors"},{pageInstructions:h,pageupdate:d}=((t,e)=>{const s=e||[],n={};for(const[e,i]of Object.entries(t))if("string"==typeof i||"boolean"==typeof i)n[e]=i;else if("object"==typeof i&&Array.isArray(i))for(const t in i){const n={instruction:"UPDATE",target:e,listIndex:parseInt(t,10)+1,content:i[t]};s.push(n)}return{pageInstructions:s,pageupdate:n}})(this.content,this.pageInstructions);let u=`${this.url}/api/v1/`;switch(this.validationMsg="",t){case"authenticate":"oauth2password"===this.authentication?l.body=`grant_type=password&client_id=${this.clientid}&client_secret=${this.clientsecret}&username=${this.username}&password=${this.password}`:"oauth2clientcredentials"===this.authentication&&(l.body=`grant_type=client_credentials&client_id=${this.clientid}&client_secret=${this.clientsecret}`),l.headers["Content-Type"]="application/x-www-form-urlencoded",u=`${this.url}/PRRestService/oauth2/v1/token`;break;case"newwork":u+="cases",l.body=JSON.stringify({content:d,pageInstructions:h,caseTypeID:n});break;case"submitassignment":l.body=JSON.stringify({content:d,pageInstructions:h}),u+=`assignments/${n}?actionID=${i}`;break;case"savecase":u+=`cases/${n}`,i&&""!==i&&(u+=`?actionID=${i}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:d,pageInstructions:h});break;case"refreshnew":u+=`casetypes/${n}/refresh`,r&&""!==r&&(u+=`?refreshFor=${r}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:d,pageInstructions:h});break;case"refreshassignment":u+=`assignments/${n}/actions/${i}/refresh`,r&&""!==r&&(u+=`?refreshFor=${r}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:d,pageInstructions:h});break;case"refreshcase":u+=`cases/${n}/actions/${i}/refresh`,r&&""!==r&&(u+=`?refreshFor=${r}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:d,pageInstructions:h});break;case"uploadattachment":u+="attachments/upload",delete c["Content-Type"];const t=new FormData;t.append("File",i,i.name),l.body=t;break;case"attachments":u+=`cases/${n}/attachments`,l.body=JSON.stringify({attachments:i});break;case"deleteattachment":u+=`attachments/${n}`,l.method="DELETE"}fetch(u,l).then((e=>"deleteattachment"===t||"attachments"===t?e.text():200===e.status||201===e.status||e.status>=400&&e.status<500?e.json():e.ok?Promise.resolve("ok"):Promise.reject(e))).then((e=>{if(e.errors&&e.errors.length>0){if(e.errors[0].ValidationMessages)if(a&&"modalcontent"===a.id)He(a,e.errors[0].ValidationMessages,this),R(Rs(e),a.previousElementSibling);else{const t=this.getRenderRoot().querySelector("#case-data");He(t,e.errors[0].ValidationMessages,this),this.validationMsg=Rs(e)}else this.errorMsg=`Error ${e.errors[0].ID}: ${e.errors[0].message}`;this.clearLoadingIndicator(),a&&"BUTTON"===a.tagName&&(a.disabled=!1,a.textContent="Save")}else if(e.access_token)this.token=e.access_token;else{const n=this.getRenderRoot().querySelector("#case-data");if("refreshcase"===t||"refreshassignment"===t||"refreshnew"===t){if(!n)return void console.error("Error: case data are not present");R("refreshnew"===t?Ms(e.creation_page.groups[0].layout.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,this):Bs(e.view.groups,"Obj",this.actionAreaCancel,"true"===this.bShowSave?this.actionAreaSave:null,this),n)}else if("savecase"===t){if(this.fetchData("case",{id:this.caseID,target:a}),s)return void s()}else if("deleteattachment"===t||"attachments"===t)this.fetchData("attachments",{id:this.caseID,target:a});else if("uploadattachment"===t){let t=i.name.lastIndexOf(".");-1===t&&(t=i.name.length);const s=i.name.substring(t+1),n=[{type:"File",category:i.category,fileType:s,name:i.displayName,ID:e.ID}];return void this.sendData("attachments",{id:this.caseID,actionid:n,target:a})}e.ID&&(this.caseID=e.ID,"newwork"===t&&this.sendExternalEvent({type:"newwork",id:this.caseID})),e.nextAssignmentID?(n&&(R(Cs(),n),this.requestUpdate()),this.bShowNew=!1,this.assignmentID=e.nextAssignmentID,this.fetchData("assignment",{id:this.assignmentID})):e.nextPageID&&(n&&(R(Cs(),n),this.requestUpdate()),"Confirm"===e.nextPageID||"Review"===e.nextPageID?(this.bShowConfirm=!0,this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"}),this.fetchData("case",{id:this.caseID})):this.fetchData("page",{id:this.caseID,actionid:e.nextPageID}))}this.requestUpdate()})).catch((t=>{this.genErrorMessage(t)}))}}class Fs extends qs{displayContent(){return""!==this.errorMsg?(t=this.errorMsg,e="true"===this.bShowCancel?this.resetError:null,L`
  <div class="error">${t}
  ${null!=e?L`
    <button type='button' aria-label="${i18n.t("Click to close the banner")}" class="pzhc pzbutton Light" @click="${e}">
    ${We()}</button>`:""}
  </div>`):"oauth2password"!==this.authentication&&"oauth2clientcredentials"!==this.authentication||""!==this.token?(this.casetypes||"createNewWork"!==this.action&&"workList"!==this.action?""===this.name&&("openAssignment"===this.action&&""===this.assignmentID&&(this.assignmentID=this.caseID),""!==this.assignmentID?this.fetchData("assignment",{id:this.assignmentID}):""!==this.caseID&&this.fetchData("case",{id:this.caseID})):(this.fetchData("casetypes"),"createNewWork"===this.action?(this.bShowNew=!0,this.casetypes[this.casetype]&&this.fetchData("newwork",{id:this.casetype})):"workList"===this.action&&(this.bShowCancel="true",this.fetchData("worklist"))),this.bShowConfirm?(s=this.casedata.content.pyLabel,n=this.casedata.content.pyID,i=this.casepyStatusWork,a="true"===this.bShowAttachments?this.displayAttachments:null,L`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${i18n.t(s)} <span>(${n})</span></h2>
    <span class='badge-bg-info centered'><span class='badge_text'>${i}</span></span>
    ${a?L`<div class="flex layout-content-inline_middle margin-l-auto">
        ${xs("Attachments",Ke(),"Simple",a)}
      </div>`:""}
  </div>
  <div class="flex layout-content-inline_middle success">
    ${i18n.t("Thank you. Your information has been submitted.")}
  </div>
  <h3>${i18n.t("Case information")}</h3>
  <div id="case-data">${Cs()}</div>`):""!==this.caseID||""!==this.assignmentID||this.bShowNew?L`
        ${Ns(this.name,this.data,this.casedata,this.casepyStatusWork,this.numAttachments,this.displayActions,this.runAction,this.openCase,"true"===this.bShowAttachments?this.displayAttachments:null)}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
        <form id="case-data">${Cs()}</form>
      `:"workList"===this.action?(r=this.title,o=this.cases,c=this.displayCasesTypes,l=this.reloadWorkList,h="true"===this.bShowCreate?this.createCase:null,d=this.openCase,L`
  <div class="flex layout-content-inline_middle main-header">
    <h2>
    ${i18n.t(r)}
      ${o.length>0?L`<span>(${o.length})</span>`:""}
    </h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      <button type='button' class="pzhc pzbutton Simple"
      title='${i18n.t("Click to refresh the worklist")}' @click="${l}">${i18n.t("Refresh")}</button>
      ${Ss("Create","Create a new case",c,h)}
    </div>
  </div>
  ${o.length>0?L`
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
            ${o.map((t=>L`
                <tr>
                  <td data-title='Name'>${i18n.t(t.name)}</td>
                  <td data-title='Case ID'>${t.caseID}</td>
                  <td data-title='Urgency' class="right-aligned">${t.urgency}</td>
                  <td data-title='Action' class="right-aligned">
                    <button @click="${d}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">
                    ${i18n.t("Open")}</button>
                  </td>
                </tr>
              `))}
          </tbody>
        </table>
      `:L`
        <div class="margin-t-2x">${i18n.t("no assignments")}</div>
      `}
`):null):(this.sendData("authenticate",{}),null);var t,e,s,n,i,a,r,o,c,l,h,d}resetError=t=>{this.errorMsg="",this.validationMsg="",this.actionAreaCancel(t)};reloadWorkList=t=>{this.cases=[],this.requestUpdate(),this.actionAreaCancel(t)};actionAreaCancel=t=>{if(t&&t.preventDefault(),t.target&&null!==t.target.closest(".mashup-modal")){const e=t.target.closest(".mashup-modal").querySelector("button");if(null!==e)return void e.click()}this.bShowConfirm=!1,this.bShowNew=!1,this.caseID="",this.data={},this.content={},this.pageInstructions=[],this.casedata={},this.attachmentcategories=[],this.casepyStatusWork="",this.assignmentID="",this.actionID="",this.errorMsg="",this.numAttachments=0,this.validationMsg="",this.name="","workList"===this.action&&this.fetchData("worklist"),this.sendExternalEvent({type:"cancel"})};actionAreaSave=t=>{t&&t.preventDefault(),null===t.target.getAttribute("data-submit")&&(t.target.textContent="Saving...",t.target.disabled=!0);const e=this.getRenderRoot().querySelector("#case-data");e&&(je(e,this.content,this.pageInstructions,this.casedata.content),""!==this.assignmentID?this.sendData("savecase",{id:this.caseID,actionid:"",target:t.target}):this.sendData("savecase",{id:this.caseID,actionid:this.actionID,target:t.target}))};actionRefresh=()=>{const t=this.getRenderRoot().querySelector("#case-data");t&&(this.validationMsg="",je(t,this.content,this.pageInstructions,this.casedata.content),""!==this.assignmentID?this.fetchData("assignmentaction",{id:this.assignmentID,actionid:this.actionID}):this.fetchData("caseaction",{id:this.caseID,actionid:this.actionID}))};displayCasesTypes=()=>(t=>{const e=[],s=Object.entries(t);for(const t of s)"true"===t[1].canCreate&&e.push(L`
          <li role="menuitem" tabindex="-1" data-value="${t[0]}">${t[1].name}</li>
        `);return L`
    ${e}
  `})(this.casetypes);displayActions=()=>this.data.actions?Os(this.name,this.data):this.casedata.actions?Os(this.name,this.casedata):null;displayAttachments=t=>{this.fetchData("attachmentcategories",{id:this.caseID}),this.fetchData("attachments",{id:this.caseID,target:t})};displayLocalAction=(t,e)=>{const s=this.getRenderRoot().querySelector("#case-data");if(s&&(je(s,this.content,this.pageInstructions,this.casedata.content),""!==this.assignmentID)){const s=this;this.sendData("savecase",{id:this.caseID},(()=>{this.actionID=t,s.fetchData("assignmentaction",{id:this.assignmentID,actionid:t,target:e})}))}};reloadAssignment=t=>{this.actionID=t,this.fetchData("assignmentaction",{id:this.assignmentID,actionid:t})};submitForm=(t,e)=>{if(t.preventDefault(),t.target&&null!==t.target.closest(".mashup-modal")){const e=t.target.closest("#modalcontent");je(e,this.content,this.pageInstructions,this.casedata.content),e.checkValidity()?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID,target:e}):e.reportValidity()}else{const t=this.getRenderRoot().querySelector("#case-data");je(t,this.content,this.pageInstructions,this.casedata.content),t.checkValidity()?"create"!==e?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID}):this.sendData("newwork",{id:this.casetype}):t.reportValidity()}return!1};createCase=t=>{if(this.name="New Case",this.bShowNew=!0,t){let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&(this.casetype=e.getAttribute("data-value"),this.name=`New ${e.textContent} `)}this.content=this.initialContent,this.pageInstructions=[],this.caseID="",this.data={},this.casedata={},this.casetypes[this.casetype]?"true"===this.casetypes[this.casetype].requiresFieldsToCreate?this.fetchData("newwork",{id:this.casetype}):this.sendData("newwork",{id:this.casetype}):(this.errorMsg=`Case '${this.casetype}' is not defined`,console.error(`Case '${this.casetype}' is not defined`)),this.requestUpdate()};runAction=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&null!==e.getAttribute("data-value")&&(this.actionID=e.getAttribute("data-value"),this.actionRefresh());const s=this.getRenderRoot().querySelector("#case-data");null!=s&&R(Cs(),s)};openCase=t=>{t.preventDefault(),this.caseID=t.target.getAttribute("data-id"),this.name="",this.data={},this.casedata={},0===this.caseID.indexOf("ASSIGN-WORKLIST")?(this.sendExternalEvent({type:"openassignment",id:this.caseID}),this.assignmentID=this.caseID,this.caseID=""):(this.sendExternalEvent({type:"opencase",id:this.caseID}),this.assignmentID="");const e=this.getRenderRoot().querySelector("#case-data");null!=e&&R(Cs(),e),this.requestUpdate()};getData=(t,e)=>{this.dataPages[t]?R(Ls(this.dataPages[t]),e.nextElementSibling):this.fetchData("data",{id:t,element:e})};setInlineError=(t,e)=>{t.setCustomValidity(Me(e)),t.classList.add("error-field"),t.reportValidity()};refreshAssignment=(t,e)=>{const s=this.getRenderRoot().querySelector("#case-data");let n=t;if(s){if(je(s,this.content,this.pageInstructions,this.casedata.content),n){"path"===n.tagName&&(n=n.parentNode),"svg"===n.tagName&&(n=n.parentNode);const t=n.getAttribute("data-action-click"),e=n.getAttribute("data-ref");if(null!==e&&null!==t)if("addRow"===t){const t=((t,e,s)=>{let n=Le(t,e);if(null===n&&(n=[],Oe(t,e,n)),!Array.isArray(n))return null;if(s&&"string"==typeof s){const t={},i=s.split(",");for(const e in i)t[i[e]]="";return n.push(t),{instruction:"APPEND",target:e,content:t}}if(0===n.length)return null;const i={...n[0]};return Ue(i),n.push(i),{instruction:"APPEND",target:e,content:i}})(this.casedata.content,e,n.getAttribute("data-newrow"));null!==t&&this.pageInstructions.push(t)}else if("deleteRow"===t){const t=((t,e)=>{let s,n=e;-1!==e.indexOf(").pyTemplate")&&(s=parseInt(n.substring(e.lastIndexOf("(")+1,e.lastIndexOf(")")),10),n=n.substring(0,e.lastIndexOf("(")));const i=Le(t,n);if(!Array.isArray(i))return null;if(1===i.length){for(const t in i[0])"pxObjClass"!==t&&(i[0][t]="");return null}return s?i.length<s?null:(i.splice(s-1,1),{instruction:"DELETE",target:n,listIndex:s}):(i.length-=1,{instruction:"DELETE",target:n,listIndex:i.length})})(this.casedata.content,e);null!==t&&this.pageInstructions.push(t)}}!0===this.bShowNew?this.sendData("refreshnew",{id:this.casetype,refreshFor:e}):this.sendData("refreshassignment",{id:this.assignmentID,actionid:this.actionID,refreshFor:e})}};clickHandler=t=>{let e=t.target;"path"===e.tagName&&(e=e.parentNode),"svg"===e.tagName&&(e=e.parentNode);const s=e.getAttribute("data-action-click");e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e),Fe(e,"click")?(this.refreshAssignment(e,Ve(e,"click")),t.preventDefault()):"BUTTON"===e.tagName&&(t.preventDefault(),null!==e.getAttribute("data-submit")&&"save"!==e.getAttribute("data-submit")?this.submitForm(t,e.getAttribute("data-submit")):("addRow"===s||"deleteRow"===s)&&this.refreshAssignment(e))};changeHandler=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e.setCustomValidity(""),e.classList.remove("error-field"),Fe(e,"change")&&this.refreshAssignment(e,Ve(e,"change"))};keyupHandler=t=>{const e=t.target;"TEXTAREA"===e.tagName&&(e.style.cssText="height:auto; padding:0;",e.style.cssText=`height:${e.scrollHeight}px`)};focusHandler=t=>{const e=t.target;e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e)};async firstUpdated(){const t=this.getRenderRoot();t&&(t.addEventListener("click",this.clickHandler),t.addEventListener("focusin",this.focusHandler),t.addEventListener("change",this.changeHandler),t.addEventListener("keyup",this.keyupHandler))}}class Vs extends Fs{createRenderRoot(){return this}getRenderRoot(){return this}render(){return L`
      ${this.displayContent()}
    `}}return customElements.define("pega-mashup-light",Vs),t.PegaMashupLight=Vs,Object.defineProperty(t,"__esModule",{value:!0}),t}({});
