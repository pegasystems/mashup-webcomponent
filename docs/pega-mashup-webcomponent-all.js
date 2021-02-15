!function(){"use strict";
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
     */const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,a=null)=>{for(;e!==a;){const a=e.nextSibling;t.removeChild(e),e=a}},a=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${a}--\x3e`,n=new RegExp(`${a}|${i}`),s="$lit$";class r{constructor(t,e){this.parts=[],this.element=e;const i=[],r=[],l=document.createTreeWalker(e.content,133,null,!1);let h=0,u=-1,p=0;const{strings:g,values:{length:m}}=t;for(;p<m;){const t=l.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:a}=e;let i=0;for(let t=0;t<a;t++)o(e[t].name,s)&&i++;for(;i-- >0;){const e=g[p],a=d.exec(e)[2],i=a.toLowerCase()+s,r=t.getAttribute(i);t.removeAttribute(i);const o=r.split(n);this.parts.push({type:"attribute",index:u,name:a,strings:o}),p+=o.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),l.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(a)>=0){const a=t.parentNode,r=e.split(n),l=r.length-1;for(let e=0;e<l;e++){let i,n=r[e];if(""===n)i=c();else{const t=d.exec(n);null!==t&&o(t[2],s)&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-s.length)+t[3]),i=document.createTextNode(n)}a.insertBefore(i,t),this.parts.push({type:"node",index:++u})}""===r[l]?(a.insertBefore(c(),t),i.push(t)):t.data=r[l],p+=l}}else if(8===t.nodeType)if(t.data===a){const e=t.parentNode;null!==t.previousSibling&&u!==h||(u++,e.insertBefore(c(),t)),h=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(i.push(t),u--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(a,e+1));)this.parts.push({type:"node",index:-1}),p++}}else l.currentNode=r.pop()}for(const t of i)t.parentNode.removeChild(t)}}const o=(t,e)=>{const a=t.length-e.length;return a>=0&&t.slice(a)===e},l=t=>-1!==t.index,c=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(t,e){const{element:{content:a},parts:i}=t,n=document.createTreeWalker(a,133,null,!1);let s=p(i),r=i[s],o=-1,l=0;const c=[];let d=null;for(;n.nextNode();){o++;const t=n.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==r&&r.index===o;)r.index=null!==d?-1:r.index-l,s=p(i,s),r=i[s]}c.forEach((t=>t.parentNode.removeChild(t)))}const u=t=>{let e=11===t.nodeType?0:1;const a=document.createTreeWalker(t,133,null,!1);for(;a.nextNode();)e++;return e},p=(t,e=-1)=>{for(let a=e+1;a<t.length;a++){const e=t[a];if(l(e))return a}return-1};
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
const g=new WeakMap,m=t=>"function"==typeof t&&g.has(t),f={},b={};
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
class y{constructor(t,e,a){this.__parts=[],this.template=t,this.processor=e,this.options=a}update(t){let e=0;for(const a of this.__parts)void 0!==a&&a.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),a=[],i=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let s,r=0,o=0,c=n.nextNode();for(;r<i.length;)if(s=i[r],l(s)){for(;o<s.index;)o++,"TEMPLATE"===c.nodeName&&(a.push(c),n.currentNode=c.content),null===(c=n.nextNode())&&(n.currentNode=a.pop(),c=n.nextNode());if("node"===s.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,s.name,s.strings,this.options));r++}else this.__parts.push(void 0),r++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
     */const v=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),$=` ${a} `;class x{constructor(t,e,a,i){this.strings=t,this.values=e,this.type=a,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let r=0;r<t;r++){const t=this.strings[r],o=t.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===t.indexOf("--\x3e",o+1);const l=d.exec(t);e+=null===l?t+(n?$:i):t.substr(0,l.index)+l[1]+l[2]+s+l[3]+a}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==v&&(e=v.createHTML(e)),t.innerHTML=e,t}}
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
     */const w=t=>null===t||!("object"==typeof t||"function"==typeof t),C=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class S{constructor(t,e,a){this.dirty=!0,this.element=t,this.name=e,this.strings=a,this.parts=[];for(let t=0;t<a.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new k(this)}_getValue(){const t=this.strings,e=t.length-1,a=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=a[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!C(t))return t}let i="";for(let n=0;n<e;n++){i+=t[n];const e=a[n];if(void 0!==e){const t=e.value;if(w(t)||!C(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class k{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===f||w(t)&&t===this.value||(this.value=t,m(t)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const t=this.value;this.value=f,t(this)}this.value!==f&&this.committer.commit()}}class D{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=c()),t.__insert(this.endNode=c())}insertAfterPart(t){t.__insert(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}const t=this.__pendingValue;t!==f&&(w(t)?t!==this.value&&this.__commitText(t):t instanceof x?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):C(t)?this.__commitIterable(t):t===b?(this.value=b,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,a="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=a:this.__commitNode(document.createTextNode(a)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const a=new y(e,t.processor,this.options),i=a._clone();a.update(t.values),this.__commitNode(i),this.value=a}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let a,i=0;for(const n of t)a=e[i],void 0===a&&(a=new D(this.options),e.push(a),0===i?a.appendIntoPart(this):a.insertAfterPart(e[i-1])),a.setValue(n),a.commit(),i++;i<e.length&&(e.length=i,this.clear(a&&a.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class _{constructor(t,e,a){if(this.value=void 0,this.__pendingValue=void 0,2!==a.length||""!==a[0]||""!==a[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=a}setValue(t){this.__pendingValue=t}commit(){for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=f}}class I extends S{constructor(t,e,a){super(t,e,a),this.single=2===a.length&&""===a[0]&&""===a[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends k{}let T=!1;(()=>{try{const t={get capture(){return T=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class N{constructor(t,e,a){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=a,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=this.__pendingValue,e=this.value,a=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||a);a&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=E(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=f}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const E=t=>t&&(T?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
     */;function z(t){let e=R.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},R.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(a);return i=e.keyString.get(n),void 0===i&&(i=new r(t,t.getTemplateElement()),e.keyString.set(n,i)),e.stringsArray.set(t.strings,i),i}const R=new Map,M=new WeakMap,L=(t,a,i)=>{let n=M.get(a);void 0===n&&(e(a,a.firstChild),M.set(a,n=new D(Object.assign({templateFactory:z},i))),n.appendInto(a)),n.setValue(t),n.commit()};
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
     */const P=new
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
class{handleAttributeExpressions(t,e,a,i){const n=e[0];if("."===n){return new I(t,e.slice(1),a).parts}if("@"===n)return[new N(t,e.slice(1),i.eventContext)];if("?"===n)return[new _(t,e.slice(1),a)];return new S(t,e,a).parts}handleTextExpression(t){return new D(t)}};
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
     */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const O=(t,...e)=>new x(t,e,"html",P)
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
     */,q=(t,e)=>`${t}--${e}`;let U=!0;void 0===window.ShadyCSS?U=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),U=!1);const j=t=>e=>{const i=q(e.type,t);let n=R.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},R.set(i,n));let s=n.stringsArray.get(e.strings);if(void 0!==s)return s;const o=e.strings.join(a);if(s=n.keyString.get(o),void 0===s){const a=e.getTemplateElement();U&&window.ShadyCSS.prepareTemplateDom(a,t),s=new r(e,a),n.keyString.set(o,s)}return n.stringsArray.set(e.strings,s),s},F=["html","svg"],V=new Set,H=(t,e,a)=>{V.add(t);const i=a?a.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:s}=n;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(i,t);const r=document.createElement("style");for(let t=0;t<s;t++){const e=n[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{F.forEach((e=>{const a=R.get(q(e,t));void 0!==a&&a.keyString.forEach((t=>{const{element:{content:e}}=t,a=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{a.add(t)})),h(t,a)}))}))})(t);const o=i.content;a?function(t,e,a=null){const{element:{content:i},parts:n}=t;if(null==a)return void i.appendChild(e);const s=document.createTreeWalker(i,133,null,!1);let r=p(n),o=0,l=-1;for(;s.nextNode();)for(l++,s.currentNode===a&&(o=u(e),a.parentNode.insertBefore(e,a));-1!==r&&n[r].index===l;){if(o>0){for(;-1!==r;)n[r].index+=o,r=p(n,r);return}r=p(n,r)}}(a,r,o.firstChild):o.insertBefore(r,o.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const l=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(a){o.insertBefore(r,o.firstChild);const t=new Set;t.add(r),h(a,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const W={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},B=(t,e)=>e!==t&&(e==e||t==t),Z={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:B},J="finalized";class G extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,a)=>{const i=this._attributeNameForProperty(a,e);void 0!==i&&(this._attributeToPropertyMap.set(i,a),t.push(i))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=Z){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const a="symbol"==typeof t?Symbol():`__${t}`,i=this.getPropertyDescriptor(t,a,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,a){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdateInternal(t,n,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||Z}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(J)||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const a of e)this.createProperty(a,t[a])}}static _attributeNameForProperty(t,e){const a=e.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,a=B){return a(t,e)}static _propertyValueFromAttribute(t,e){const a=e.type,i=e.converter||W,n="function"==typeof i?i:i.fromAttribute;return n?n(t,a):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const a=e.type,i=e.converter;return(i&&i.toAttribute||W.toAttribute)(t,a)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,a){e!==a&&this._attributeToProperty(t,a)}_propertyToAttribute(t,e,a=Z){const i=this.constructor,n=i._attributeNameForProperty(t,a);if(void 0!==n){const t=i._propertyValueToAttribute(e,a);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const a=this.constructor,i=a._attributeToPropertyMap.get(t);if(void 0!==i){const t=a.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=a._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,a){let i=!0;if(void 0!==t){const n=this.constructor;a=a||n.getPropertyOptions(t),n._valueHasChanged(this[t],e,a.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==a.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,a))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}G.finalized=!0;
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
const Y=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:a,elements:i}=e;return{kind:a,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e),X=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(a){a.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(a){a.createProperty(e.key,t)}};function K(t){return(e,a)=>void 0!==a?((t,e,a)=>{e.constructor.createProperty(a,t)})(t,e,a):X(t,e)}
/**
    @license
    Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */const Q=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tt=Symbol();class et{constructor(t,e){if(e!==tt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Q?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const at={};class it extends G{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,a)=>t.reduceRight(((t,a)=>Array.isArray(a)?e(a,t):(t.add(a),t)),a),a=e(t,new Set),i=[];a.forEach((t=>i.unshift(t))),this._styles=i}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!Q){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new et(String(e),tt)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Q?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==at&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return at}}it.finalized=!0,it.render=(t,a,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,s=M.has(a),r=U&&11===a.nodeType&&!!a.host,o=r&&!V.has(n),l=o?document.createDocumentFragment():a;if(L(t,l,Object.assign({templateFactory:j(n)},i)),o){const t=M.get(l);M.delete(l);const i=t.value instanceof y?t.value.template:void 0;H(n,l,i),e(a,a.firstChild),a.appendChild(l),M.set(a,t)}!s&&r&&window.ShadyCSS.styleElement(a.host)};
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
const nt=new WeakMap,st=(rt=t=>e=>{const a=nt.get(e);if(void 0===t&&e instanceof k){if(void 0!==a||!nt.has(e)){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else t!==a&&e.setValue(t);nt.set(e,t)},(...t)=>{const e=rt(...t);return g.set(e,!0),e});var rt;const ot=t=>`0${t}`.slice(-2),lt=t=>{if(t.endsWith(" GMT")&&23===t.length)return new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T${t.substring(9,11)}:${t.substring(11,13)}:${t.substring(13,19)}Z`);if(8===t.length){let e=new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T00:00:00.000Z`);return e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),e}if(10===t.length){let e=new Date(`${t.substring(6,10)}-${t.substring(0,2)}-${t.substring(3,5)}T00:00:00.000Z`);return e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),e}return null},ct=t=>t.replace(/&amp;|&lt;|&gt;|&#39;|&#40;|&#41;|&quot;/g,(t=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&#40;":"(","&#41;":")","&quot;":'"'}[t]||t))),dt=(t,e,a)=>{if("string"!=typeof e)return;const i=e.split(".");let n=t;for(const t in i){let e=i[t];const s=e.indexOf("(");if(-1===s)t<i.length-1?void 0===n[e]&&(n[e]={}):n[e]=a,n=n[e];else{const t=e.substring(s+1,e.length-1);e=e.substring(0,s),void 0===n[e]&&(n[e]=[]);for(let a=n[e].length;a<t;a++)n[e].push({});n=n[e][t-1]}}},ht=(t,e)=>{if("string"!=typeof e)return null;let a=t;const i=e.split(".");for(const t in i){const e=i[t],n=e.indexOf("(");if(-1===n){if(!a[e])return null;a=a[e]}else{const t=e.substring(n+1,e.length-1),i=a[e.substring(0,n)];if(!(i&&Array.isArray(i)&&i.length>=t))return null;a=i[t-1]}}return a},ut=t=>{for(const e in t)"object"==typeof t[e]?ut(t[e]):"string"==typeof t[e]&&(t[e]="")},pt=(t,e)=>{for(const a in t)if("fieldID"===a)e.push(t.fieldID);else{const i=t[a];i.fieldID?e.push(i.fieldID):"object"==typeof i&&pt(i,e)}},gt=(t,e,a)=>{let i=ht(t,e);if(null===i&&(i=[],dt(t,e,i)),Array.isArray(i))if(a&&"string"==typeof a){const t={},e=a.split(",");for(const a in e)t[e[a]]="";i.push(t)}else{if(0===i.length)return;const t={...i[0]};ut(t),i.push(t)}},mt=(t,e)=>{let a,i=e;-1!==e.indexOf(").pyTemplate")&&(a=i.substring(e.lastIndexOf("(")+1,e.lastIndexOf(")")),i=i.substring(0,e.lastIndexOf("(")));const n=ht(t,i);if(Array.isArray(n))if(1!==n.length)if(a){if(n.length<a)return;n.splice(a-1,1)}else n.length-=1;else for(const t in n[0])"pxObjClass"!==t&&(n[0][t]="")},ft=(t,e)=>{const a=t.getAttribute(`data-action-${e}`);return!(!a||"postValue"!==a&&0!==a.indexOf("refresh"))},bt=(t,e)=>{const a=t.getAttribute(`data-action-${e}`);return a&&0===a.indexOf("refresh")?a.replace("refresh-",""):""},yt=(t,e)=>{for(const a in t.elements){const i=t.elements[a];if("INPUT"===i.tagName||"TEXTAREA"===i.tagName||"SELECT"===i.tagName){const t=i.getAttribute("data-ref");if(null!==t&&"pyID"!==t)if("INPUT"===i.tagName){const a=i.getAttribute("type");if("checkbox"===a)dt(e,t,i.checked);else if("radio"===a)i.checked&&dt(e,t,i.value);else if("date"===a){let a;i.valueAsDate&&(a=new Date(i.valueAsDate)),a&&a instanceof Date&&a.getTime()==a.getTime()||(a=new Date(i.value)),a&&a instanceof Date&&a.getTime()==a.getTime()?(a=new Date(a.getTime()+6e4*a.getTimezoneOffset()),dt(e,t,`${ot(a.getMonth()+1)}/${ot(a.getDate())}/${a.getFullYear()}`)):dt(e,t,i.value)}else dt(e,t,i.value)}else dt(e,t,i.value)}}},vt=t=>{if(void 0===t.content)return{};const e={};for(const a in t.content){const i=t.content[a];"object"!=typeof i||0===a.indexOf("px")||Array.isArray(i)||"pyWorkParty"===a||(e[a]=i)}return e},$t=(t,e)=>{for(const a in t.elements){const i=t.elements[a];if("INPUT"===i.tagName||"TEXTAREA"===i.tagName||"SELECT"===i.tagName){const t=`.${i.getAttribute("data-ref")}`;if(null!==t&&"pyID"!==t)for(const a in e){if(e[a].Path===t){i.setCustomValidity(e[a].ValidationMessage),i.classList.add("error-field"),i.reportValidity();break}if(e[a].erroneousInputOutputFieldInPage===t){i.setCustomValidity(e[a].localizedValue),i.classList.add("error-field"),i.reportValidity();break}}}}},xt=(t,e)=>{if(t.control&&t.control.actionSets&&t.control.actionSets.length>0)for(const a in t.control.actionSets){const i=t.control.actionSets[a];if(i.events.length>0&&i.actions.length>0&&i.events[0].event===e){let t=i.actions[0].action;return"refresh"===t&&""!==i.actions[0].refreshFor&&(t+=`-${i.actions[0].refreshFor}`),t}}},wt=t=>"pyTemplateButton"!==t.reference?t.reference:t.control&&t.control.modes?t.control.modes[1].tooltip:null,Ct=(t,e,a)=>{if(void 0===e)return null;const i=t.required&&!0!==t.readOnly?"icon-required":"";return"field-checkbox"===a?""!==t.label||!0===t.showLabel?O`<div class="field-caption dataLabelForWrite ${i}">${ct(t.label)}</div>`:null:"field-text"===a&&!0===t.readOnly&&"pxCheckbox"===t.control.type&&t.control.label?O`<label>${ct(t.control.label)}</label>`:""!==t.label||!0===t.showLabel||!0===t.labelReserveSpace?O`<label class="field-caption dataLabelForWrite ${i}" for="${st(e)}">${ct(t.label)}</label>`:null},St=(t,e,a,i)=>void 0===e?O`
      ${i}
    `:"field-button"!==a||(t=>!!(t.control&&t.control.actionSets&&t.control.actionSets.length>0))(t)?"field-radiogroup"===a?O`
    <div class="flex content-item field-item ${a}"><fieldset><legend>${Ct(t,e,a)}</legend>${i}</fielset></div>
  `:O`
    <div class="flex content-item field-item ${a}">${Ct(t,e,a)}${i}</div>
  `:null,kt=()=>O`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.3375,3 C20.3375,3 21.7742187,4.43671875 21.7742187,4.43671875 C21.7742187,4.43671875 4.43671875,21.4867188 4.43671875,21.4867188 C4.43671875,21.4867188 3,20.19375 3,20.19375 C3,20.19375 20.3375,3 20.3375,3 Z M21.7265625,20.0976563 C21.7265625,20.0976563 20.3859375,21.534375 20.3859375,21.534375 C20.3859375,21.534375 3.00078125,4.3890625 3.00078125,4.3890625 C3.00078125,4.3890625 4.38984375,3 4.38984375,3 C4.38984375,3 21.7273438,20.0976563 21.7273438,20.0976563 L21.7265625,20.0976563 Z"/>
</svg>`,Dt=()=>O`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1140625,3.96875 C22.1140625,3.96875 22.1140625,3.96875 22.1140625,3.96875 C22.1140625,3.96875 17.46875,3.96875 17.46875,3.96875 C17.46875,3.96875 16.9898437,2.14921875 16.9898437,2.14921875 C16.9421875,1.8140625 16.7507812,1.57421875 16.5109375,1.33515625 C16.2234375,1.09609375 15.8882813,1 15.553125,1 C15.553125,1 15.553125,1 15.553125,1 C15.553125,1 9.03984375,1 9.03984375,1 C8.7046875,1 8.4171875,1.09609375 8.1296875,1.2875 C7.8421875,1.52734375 7.65078125,1.76640625 7.603125,2.1015625 C7.603125,2.1015625 7.603125,2.1015625 7.603125,2.1015625 C7.603125,2.1015625 7.12421875,3.96953125 7.12421875,3.96953125 C7.12421875,3.96953125 2.47890625,3.96953125 2.47890625,3.96953125 C2.14375,3.96953125 2,4.11328125 2,4.4484375 C2,4.78359375 2.14375,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 2.47890625,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 4.01171875,4.92734375 4.01171875,4.92734375 C4.01171875,4.92734375 4.921875,23.1742188 4.921875,23.1742188 C4.96953125,23.5570312 5.11328125,23.8929688 5.40078125,24.1320313 C5.63984375,24.4195312 5.97578125,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 6.40625,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 18.2359375,24.5632812 18.2359375,24.5632812 C18.6671875,24.5632812 19.0023438,24.4195312 19.2898438,24.1320313 C19.5289063,23.8929688 19.6726562,23.5570312 19.7210938,23.1742188 C19.7210938,23.1742188 19.7210938,23.1742188 19.7210938,23.1742188 C19.7210938,23.1742188 20.63125,4.92734375 20.63125,4.92734375 C20.63125,4.92734375 22.115625,4.92734375 22.115625,4.92734375 C22.4507812,4.92734375 22.5945312,4.78359375 22.5945312,4.4484375 C22.5945312,4.11328125 22.4507812,3.96953125 22.115625,3.96953125 L22.1140625,3.96875 Z M8.17734375,3.96875 C8.17734375,3.96875 8.56015625,2.38828125 8.56015625,2.38828125 C8.6078125,2.1484375 8.79921875,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 9.0390625,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 15.5523437,2.00546875 15.5523437,2.00546875 C15.7914062,2.00546875 15.9835937,2.14921875 16.03125,2.38828125 C16.03125,2.38828125 16.03125,2.38828125 16.03125,2.38828125 C16.03125,2.38828125 16.4140625,3.96875 16.4140625,3.96875 C16.4140625,3.96875 8.1765625,3.96875 8.1765625,3.96875 L8.17734375,3.96875 Z M19.6710938,4.9265625 C19.6710938,4.9265625 18.7609375,23.1257812 18.7609375,23.1257812 C18.7132812,23.4132812 18.521875,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 18.234375,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 6.4046875,23.5570312 6.4046875,23.5570312 C6.1171875,23.5570312 5.92578125,23.4132812 5.878125,23.1257812 C5.878125,23.1257812 5.878125,23.1257812 5.878125,23.1257812 C5.878125,23.1257812 4.96796875,4.9265625 4.96796875,4.9265625 C4.96796875,4.9265625 19.6710938,4.9265625 19.6710938,4.9265625 L19.6710938,4.9265625 Z M8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,18.1929687 8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,10.3382812 8.84765625,10.3382812 C8.84765625,10.003125 9.0390625,9.859375 9.37421875,9.859375 C9.37421875,9.859375 9.37421875,9.859375 9.37421875,9.859375 C9.709375,9.859375 9.853125,10.003125 9.853125,10.3382812 C9.853125,10.3382812 9.853125,10.3382812 9.853125,10.3382812 C9.853125,10.3382812 9.853125,18.1929687 9.853125,18.1929687 C9.853125,18.528125 9.709375,18.671875 9.37421875,18.671875 C9.37421875,18.671875 9.37421875,18.671875 9.37421875,18.671875 C9.0390625,18.671875 8.84765625,18.528125 8.84765625,18.1929687 Z M14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,18.1929687 14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,10.3382812 14.7382812,10.3382812 C14.7382812,10.003125 14.8820313,9.859375 15.2171875,9.859375 C15.2171875,9.859375 15.2171875,9.859375 15.2171875,9.859375 C15.5523437,9.859375 15.74375,10.003125 15.74375,10.3382812 C15.74375,10.3382812 15.74375,10.3382812 15.74375,10.3382812 C15.74375,10.3382812 15.74375,18.1929687 15.74375,18.1929687 C15.74375,18.528125 15.5523437,18.671875 15.2171875,18.671875 C15.2171875,18.671875 15.2171875,18.671875 15.2171875,18.671875 C14.8820313,18.671875 14.7382812,18.528125 14.7382812,18.1929687 Z M11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,19.1507813 11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,9.38046875 11.8164062,9.38046875 C11.8164062,9.0453125 11.9601563,8.85390625 12.2953125,8.85390625 C12.6304687,8.85390625 12.7742187,9.0453125 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,9.38046875 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,19.1507813 12.7742187,19.1507813 C12.7742187,19.4859375 12.6304687,19.6773437 12.2953125,19.6773437 C11.9601563,19.6773437 11.8164062,19.4859375 11.8164062,19.1507813 Z"/>
</svg>`,_t=()=>O`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.5226562,11.6265625 C20.6664062,11.6265625 20.7617188,11.6742188 20.8578125,11.7703125 C20.9539062,11.8664063 21.0015625,11.9617188 21.0015625,12.1054688 C21.0015625,12.2492188 20.9539062,12.3445313 20.8578125,12.440625 C20.8578125,12.440625 20.8578125,12.440625 20.8578125,12.440625 C20.8578125,12.440625 13.2429687,20.0554687 13.2429687,20.0554687 C12.1414062,21.109375 10.8484375,21.6359375 9.41171875,21.6359375 C7.975,21.6359375 6.68203125,21.109375 5.58046875,20.0554687 C5.58046875,20.0554687 5.58046875,20.0554687 5.58046875,20.0554687 C4.5265625,19.0015625 4,17.75625 4,16.271875 C4,16.271875 4,16.271875 4,16.271875 C4,14.8351563 4.5265625,13.5421875 5.58046875,12.440625 C5.58046875,12.440625 5.58046875,12.440625 5.58046875,12.440625 C5.58046875,12.440625 14.9671875,3.14921875 14.9671875,3.14921875 C15.7335937,2.3828125 16.64375,2 17.7453125,2 C18.846875,2 19.7570312,2.3828125 20.5234375,3.14921875 C20.5234375,3.14921875 20.5234375,3.14921875 20.5234375,3.14921875 C21.2898437,3.86796875 21.6726562,4.77734375 21.6726562,5.87890625 C21.6726562,5.87890625 21.6726562,5.87890625 21.6726562,5.87890625 C21.6726562,6.98046875 21.2898437,7.890625 20.5234375,8.65703125 C20.5234375,8.65703125 20.5234375,8.65703125 20.5234375,8.65703125 C20.5234375,8.65703125 11.8546875,17.2773438 11.8546875,17.2773438 C11.3757813,17.75625 10.8007812,17.9960938 10.1304687,17.9960938 C10.1304687,17.9960938 10.1304687,17.9960938 10.1304687,17.9960938 C9.5078125,17.9960938 8.88515625,17.7570313 8.35859375,17.2773438 C8.35859375,17.2773438 8.35859375,17.2773438 8.35859375,17.2773438 C7.8796875,16.7984375 7.63984375,16.2234375 7.63984375,15.553125 C7.63984375,14.8828125 7.87890625,14.3078125 8.35859375,13.8289062 C8.35859375,13.8289062 8.35859375,13.8289062 8.35859375,13.8289062 C8.35859375,13.8289062 16.6921875,5.54375 16.6921875,5.54375 C16.7882812,5.44765625 16.93125,5.4 17.075,5.4 C17.075,5.4 17.075,5.4 17.075,5.4 C17.21875,5.4 17.3140625,5.44765625 17.4101562,5.54375 C17.50625,5.63984375 17.5539062,5.73515625 17.5539062,5.87890625 C17.5539062,5.87890625 17.5539062,5.87890625 17.5539062,5.87890625 C17.5539062,6.02265625 17.50625,6.16640625 17.4101562,6.26171875 C17.4101562,6.26171875 17.4101562,6.26171875 17.4101562,6.26171875 C17.4101562,6.26171875 9.0765625,14.4992187 9.0765625,14.4992187 C8.7890625,14.7867187 8.6453125,15.121875 8.6453125,15.553125 C8.6453125,15.984375 8.7890625,16.3195313 9.0765625,16.6070312 C9.3640625,16.8945312 9.69921875,17.0382813 10.1304687,17.0382813 C10.1304687,17.0382813 10.1304687,17.0382813 10.1304687,17.0382813 C10.5132812,17.0382813 10.8492187,16.8945312 11.1359375,16.6070312 C11.1359375,16.6070312 11.1359375,16.6070312 11.1359375,16.6070312 C11.1359375,16.6070312 19.8523437,7.98671875 19.8523437,7.98671875 C20.4273437,7.41171875 20.7140625,6.69375 20.7140625,5.8796875 C20.7140625,5.8796875 20.7140625,5.8796875 20.7140625,5.8796875 C20.7140625,5.065625 20.4265625,4.3953125 19.8523437,3.8203125 C19.8523437,3.8203125 19.8523437,3.8203125 19.8523437,3.8203125 C19.2296875,3.2453125 18.5117187,2.95859375 17.7453125,2.95859375 C17.7453125,2.95859375 17.7453125,2.95859375 17.7453125,2.95859375 C16.93125,2.95859375 16.2609375,3.24609375 15.6859375,3.8203125 C15.6859375,3.8203125 15.6859375,3.8203125 15.6859375,3.8203125 C15.6859375,3.8203125 6.29921875,13.159375 6.29921875,13.159375 C5.4375,13.9734375 5.00625,14.9789062 5.00625,16.2726562 C5.00625,16.2726562 5.00625,16.2726562 5.00625,16.2726562 C5.00625,17.5179688 5.4375,18.5234375 6.29921875,19.3375 C6.29921875,19.3375 6.29921875,19.3375 6.29921875,19.3375 C7.1609375,20.1992188 8.21484375,20.6304688 9.4125,20.6304688 C9.4125,20.6304688 9.4125,20.6304688 9.4125,20.6304688 C10.7054687,20.6304688 11.7117187,20.1992188 12.5257812,19.3375 C12.5257812,19.3375 12.5257812,19.3375 12.5257812,19.3375 C12.5257812,19.3375 20.1882812,11.7703125 20.1882812,11.7703125 C20.284375,11.6742188 20.3796875,11.6265625 20.5234375,11.6265625 L20.5226562,11.6265625 Z"/>
</svg>`,It=(t,e,a)=>{if(void 0===t||void 0===t.control||void 0===t.control.type)return null;if(t.customAttributes&&"none"===t.customAttributes.display)return null;if(!0===a||!0===t.readOnly||"pxHidden"===t.control.type)return St(t,e,"field-text",At(t,e));switch(t.control.type){case"pxPhone":case"pxTextInput":return St(t,e,"field-textinput",Tt(t,e));case"pxInteger":case"pxNumber":return St(t,e,"field-numberinput",Et(t,e));case"pxCurrency":return St(t,e,"field-currencyinput",zt(t,e));case"pxEmail":return St(t,e,"field-emailinput",Rt(t,e));case"pxTextArea":return St(t,e,"field-textarea",Mt(t,e));case"pxRadioButtons":return St(t,e,"field-radiogroup",jt(t,e));case"pxCheckbox":return St(t,e,"field-checkbox",Ft(t,e));case"pxDropdown":return St(t,e,"field-dropdown",Vt(t,e));case"pxDisplayText":return St(t,e,"field-text",At(t,e));case"pxIcon":return St(t,e,"field-icon",Lt(t,e));case"pxLink":case"pxURL":return St(t,e,"field-url",Pt(t,e));case"pxIconDeleteItem":return St(t,e,"field-button",qt(t,e));case"pxButton":return St(t,e,"field-button",Ot(t,e));case"pxDate":case"pxDateTime":return St(t,e,"field-datetime",Ut(t,e));case"pxAutoComplete":return St(t,e,"field-combobox",Ht(t,e));case"pxSlider":return St(t,e,"field-slider",Nt(t,e));default:return null}},At=(t,e)=>{if("pxDate"===t.control.type||"pxDateTime"===t.control.type){let a=lt(t.value);if(a)if(t.control&&2===t.control.modes.length){let e={};switch(t.control.modes[1].dateFormat){case"DateTime-Short-YYYY":case"Date-DayMonthYear-Custom":case"Date-Mediun":e={year:"numeric",month:"short",day:"numeric"};break;case"Date-Short":e={year:"numeric",month:"numeric",day:"numeric"};break;case"Date-Long":e={year:"numeric",month:"long",day:"numeric"};break;case"Date-Full":e={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;default:e={}}a=a.toLocaleDateString(void 0,e)}else a=a.toLocaleDateString();else a=t.value;return O`
      <span class="dataValueRead" data-ref="${t.reference}" id="${st(e)}">${a}</span>
    `}if("pxHidden"===t.control.type)return O`
    <input type="text" style="display:none" data-ref="${t.reference}" id="${st(e)}" value="${ct(t.value)}"/>
    `;let a=t.value;if(t.control&&2===t.control.modes.length&&"locallist"===t.control.modes[0].listSource)for(const e in t.control.modes[0].options){const i=t.control.modes[0].options[e];i.key===a&&(a=i.value)}return"pxCurrency"===t.control.type&&(a=`$${a}`),O`
    <span class="dataValueRead" data-ref="${t.reference}" id="${st(e)}">${ct(a)}</span>
  `},Tt=(t,e)=>O`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="text"
    id="${st(e)}"
    value="${ct(t.value)}"
    data-action-change="${st(xt(t,"change"))}"
    data-action-click="${st(xt(t,"click"))}"
  />
`,Nt=(t,e)=>O`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="range"
    id="${st(e)}"
    value="${ct(t.value)}"
    data-action-change="${st(xt(t,"change"))}"
    data-action-click="${st(xt(t,"click"))}"
  />
`,Et=(t,e)=>O`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="number"
    id="${st(e)}"
    value="${t.value}"
    data-action-change="${st(xt(t,"change"))}"
    data-action-click="${st(xt(t,"click"))}"
  />
`,zt=(t,e)=>O`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="number"
    id="${st(e)}"
    value="${t.value}"
    data-action-change="${st(xt(t,"change"))}"
    data-action-click="${st(xt(t,"click"))}"
  />
`,Rt=(t,e)=>O`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="email"
    id="${st(e)}"
    value="${t.value}"
    data-action-change="${st(xt(t,"change"))}"
    data-action-click="${st(xt(t,"click"))}"
  />
`,Mt=(t,e)=>O`
  <textarea
    data-ref="${t.reference}"
    rows="3"
    ?required="${!0===t.required}"
    id="${st(e)}"
    data-action-change="${st(xt(t,"change"))}"
    data-action-click="${st(xt(t,"click"))}"
  >
${ct(t.value)}</textarea
  >
`,Lt=(t,e)=>O`
  <i
    class="${t.control.modes[1].iconStyle}"
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    id="${st(e)}"
    value="${t.value}"
  />
`,Pt=(t,e)=>O`
  <a id="${st(e)}" data-ref="${t.reference}" href="${t.value}">${t.control.label}</a>
`,Ot=(t,e)=>{const a=xt(t,"click");return"deleteRow"===a?qt(t,e):O`
  <button
  type='button' 
    class="${st(t.control.modes[1].controlFormat)} pzhc pzbutton"
    id="${st(e)}"
    data-ref="${st(wt(t))}"
    data-action-click="${st(a)}"
  >${t.control.label}</button>`},qt=(t,e)=>O`
  <button
    type='button' 
    class="pzhc pzbutton Icon"
    title="Delete row"
    id="${st(e)}"
    data-ref="${st(wt(t))}"
    data-action-click="deleteRow"
  >${Dt()}</button>
`,Ut=(t,e)=>{let a=t.value;if(""!==a){let e=new Date(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${e.getFullYear()}-${ot(e.getMonth()+1)}-${ot(e.getDate())}`):8===t.value.length&&(a=`${t.value.substring(0,4)}-${t.value.substring(4,6)}-${t.value.substring(6,8)}`)}return O`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      pattern="\\d{4}-\\d{2}-\\d{2}"
      placeholder="mm/dd/yyyy"
      type="date"
      id="${st(e)}"
      value="${a}"
      data-action-change="${st(xt(t,"change"))}"
    data-action-click="${st(xt(t,"click"))}"
    />
  `},jt=(t,e)=>{let a;return t.control&&t.control.modes&&t.control.modes[0].options?a=t.control.modes[0].options:"True-False"===t.type&&(a=[{value:"true"},{value:"false"}]),void 0===a?null:O`
    ${a.map(((a,i)=>{const n=`rb-${e}-${i}`;return O`
        <div>
          <input
            data-ref="${t.reference}"
            name=${st(e)}
            id="${n}"
            type="radio"
            value="${a.key}"
            ?required="${!0===t.required}"
            ?checked="${a.key===t.value}"
            data-action-change="${st(xt(t,"change"))}"
          />
          <label for="${n}">${a.value}</label>
        </div>
      `}))}
  `},Ft=(t,e)=>O`
<div>
  <input
  data-ref="${t.reference}" 
  id="${st(e)}"
  type="checkbox" 
  ?checked=${"true"===t.value}
  data-action-change="${st(xt(t,"change"))}"
  data-action-click="${st(xt(t,"click"))}"
  />
  <label for="${st(e)}">${t.control.label}</label>
  </div>
`,Vt=(t,e)=>t.control&&t.control.modes[0]&&t.control.modes[0].options?O`<select
      data-ref="${t.reference}"
      id=${st(e)}
      ?required="${!0===t.required}"
      data-action-change="${st(xt(t,"change"))}"
      data-action-click="${st(xt(t,"click"))}">
        <option value="" title="Select...">Select...</option>
        ${t.control.modes[0].options.map((e=>O`
            <option ?selected=${e.key===t.value} value='${e.key}'>${e.value}</option>
          `))}
      </select>`:O`<input
      type='text'
      data-ref="${t.reference}"
      id=${st(e)}
      ?required="${!0===t.required}"
      data-action-change="${st(xt(t,"change"))}"
      data-action-click="${st(xt(t,"click"))}">
      </input>`,Ht=(t,e)=>{if(t.control.modes&&t.control.modes[0]&&t.control.modes[0].options)return O`
      <input
        data-ref="${t.reference}"
        list="${t.reference}"
        ?required="${!0===t.required}"
        type="text"
        class="combobox loaded"
        id="${st(e)}"
        value="${ct(t.value)}"
        data-action-change="${st(xt(t,"change"))}"
        data-action-click="${st(xt(t,"click"))}"
      />
      <datalist id="${t.reference}">
        ${t.control.modes[0].options.map((t=>O`
            <option value="${t.value}">
              ${t.key}
            </option>
          `))}
      </datalist>
    `;let a="";return t.control&&t.control.modes&&t.control.modes[0]&&t.control.modes[0].dataPageID&&(a=t.control.modes[0].dataPageID),O`
    <input
      data-ref="${t.reference}"
      list="${t.reference}"
      data-pageid="${a}"
      ?required="${!0===t.required}"
      type="text"
      class="combobox"
      id="${st(e)}"
      value="${t.value}"
      data-action-change="${st(xt(t,"change"))}"
      data-action-click="${st(xt(t,"click"))}"
    />
    <datalist id="${t.reference}"></datalist>
  `},Wt=t=>""!==t.title?O`
      <div class="header-bar">
        <div class="header-content"><h3 class="header-title">${t.title}</h3></div>
      </div>
    `:null,Bt=(t,e)=>{let a=t.fieldListID;if(void 0!==t.reference&&(a=t.reference),"."===a.charAt(0)&&(a=a.substring(1)),t.newRow&&!0!==e){const e=[];return pt(t.newRow,e),O`
      <div class="table-action-area">
        ${"add-row"===t.testID?O`<button type="button" class="pzhc pzbutton Simple" data-newrow="${st(e.join())}"
        data-ref=${a} data-action-click="addRow">${O`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
<path d="M11.290625,2 C11.290625,2 13.2539062,2 13.2539062,2 C13.2539062,2 13.2539062,22.59375 13.2539062,22.59375 C13.2539062,22.59375 11.290625,22.59375 11.290625,22.59375 C11.290625,22.59375 11.290625,2 11.290625,2 Z M22.59375,11.3390625 C22.59375,11.3390625 22.59375,13.2546875 22.59375,13.2546875 C22.59375,13.2546875 2,13.2546875 2,13.2546875 C2,13.2546875 2,11.3390625 2,11.3390625 C2,11.3390625 22.59375,11.3390625 22.59375,11.3390625 L22.59375,11.3390625 Z"/>
</svg>`}Add item</button>`:""}
      </div>
    `}return null},Zt=t=>O`
  ${t.map((t=>O`
    <th>${t.caption?O`${t.caption.value}`:""}</th>`))}
`,Jt=t=>O`
  ${t.map((t=>O`
    <tr>
      ${t.groups.map((t=>O`
      <td>${It(t.field)}</td>`))}
    </tr>`))}
`,Gt=()=>O`
<span class="loading">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</span>
`,Yt=(t,e,a,i)=>((t,e,a,i)=>{const n=document.createElement("div");n.setAttribute("role","alertdialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-labelledby",t),n.setAttribute("aria-describedby",""),n.setAttribute("class","mashup-modal");const s=document.createElement("div");n.appendChild(s);const r=()=>{document.body.removeEventListener("click",o),n&&(n.previousElementSibling&&(n.previousElementSibling.removeAttribute("aria-hidden"),n.previousElementSibling.focus()),n.remove())},o=t=>{if(t){let e=t.target;if(e.download)return;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e){const t=e.closest("button");if((null===t||"close"!==t.getAttribute("data-action-id"))&&!e.classList.contains("mashup-modal")&&null!==e.closest(".mashup-modal"))return}r()}};return O`
  <div class='modalcontent'>
    <button type="button" @click="${t=>{t.preventDefault(),t.stopPropagation();const e=t.target.closest(".modalcontent");null===e?r():1===e.children.length?(e.firstElementChild.setAttribute("aria-hidden","true"),n.style.opacity=0,e.appendChild(n),i(s),document.body.addEventListener("click",o),n.offsetHeight,n.style=""):r()}}" class="pzhc pzbutton ${a}" title="${t}">${e}</button>
  </div>`})(t,e,a,(t=>{L(Xt(t,[]),t),i(t)})),Xt=(t,e,a,i,n)=>{let s=0;const r=t=>{if(void 0===t||"string"==typeof t&&""===t)return;if("URL"===e[s].category)return void window.open(t);let a=e[s].fileName;void 0===a&&(a=e[s].name);const i=window.document.createElement("a");if("Correspondence"===e[s].category){a=`${e[s].name}.html`;const n=`<html><head><title>${e[s].name}</title></head><body>${t}</body></html>`,r=new Blob([n],{type:"text"});i.href=window.URL.createObjectURL(r)}else{const e=function(t){const e=window.atob(t),a=e.length,i=new Uint8Array(a);for(let t=0;t<a;t++){const a=e.charCodeAt(t);i[t]=a}return i}(t),a=new Blob([e],{type:"octet/stream"});i.href=window.URL.createObjectURL(a)}i.download=a,document.body.appendChild(i),i.click(),document.body.removeChild(i)},o=t=>{t.stopPropagation();const a=t.target;s=a.getAttribute("data-id"),i.fetchData.call(i,"attachment",{id:e[s].ID,target:r})},l=a=>{a.preventDefault(),a.stopPropagation();const n=a.target.closest("button");s=n.getAttribute("data-id"),i.sendData.call(i,"deleteattachment",{id:e[s].ID,target:t})},c=r=>{r.stopPropagation();const o=r.target.closest("button");s=parseInt(o.getAttribute("data-id"),10),n.splice(s,1),L(Xt(t,e,a,i,n),t)},d=t=>{t.stopPropagation(),t.preventDefault();const e=t.target;if(s=e.getAttribute("data-id"),"INPUT"===e.tagName){const t=e.getAttribute("data-prop-id");n[s][t]=e.value}else"SELECT"===e.tagName&&(n[s].category=e.value)},h=t=>{t.preventDefault();const e=t.target,a=t.relatedTarget,i=null===e?null:e.closest(".attach-files"),n=null===a?null:a.closest(".attach-files");if("dragenter"===t.type||"dragover"===t.type?null!=i&&i.classList.add("drop-file-hover"):"dragleave"!==t.type&&"drop"!==t.type||null===n&&null!==i&&i.classList.remove("drop-file-hover"),"drop"===t.type){const a=t.dataTransfer.files;p(e,a)}},u=s=>{s.stopPropagation(),s.preventDefault();for(let s=0;s<n.length;s++){const r=n[s];delete r.editing,r.loading=!0,"URL"===r.type?(e.unshift(r),i.sendData.call(i,"attachments",{id:a,actionid:[r],target:t})):(e.unshift({name:r.displayName,extension:r.extension,loading:!0}),i.sendData.call(i,"uploadattachment",{actionid:r,target:t}))}L(Xt(t,e,a,i),t)},p=(n,s)=>{const r=[];for(let t=0;t<s.length;t++){const e=s[t];let a=e.name.lastIndexOf(".");-1===a&&(a=e.name.length),e.displayName=e.name.substring(0,a),e.extension=e.name.substring(a+1),e.editing=!0,e.category="File",r.push(e)}L(Xt(t,e,a,i,r),t)},g=t=>{t.stopPropagation();let e=t.target;if("BUTTON"===e.tagName)return e=t.target.parentNode.parentNode.firstElementChild,void e.click();p(e,e.files)},m=n=>{n.stopPropagation();L(Xt(t,e,a,i,[{type:"URL",category:"URL",name:"",url:"",editing:!0}]),t)},f=n=>{n.stopPropagation(),L(Xt(t,e,a,i),t)},b=(t,e)=>{let a=new Date(e.createTime);return a=a.toLocaleDateString(void 0,{year:"numeric",month:"numeric",day:"numeric"}),O`
    <div class='list-item-title'>
      <button type='button' class='Light'  data-id="${t}" @click="${o}">${e.name}</button>
      ${e.loading?"":O`
      <span class='list-item-meta'><span>${e.createdBy}</span><span>${a}</span><span>category: ${e.category}</span></span>`}
    </div>`},y=(t,e)=>e.loading?O`${b(t,e)}${Gt()}`:e.editing?"URL"===e.type?O`
      <div class='flex content-item field-item'>
        <label for='url-name'>Name</label>
        <input type='text' id='url-name' data-prop-id='name' @change="${d}" data-id="${t}" value="${e.name}" aria-label='name'/>
      </div>
      <div class='flex content-item field-item'>
        <label for='url-url'>URL</label>
        <input type='text' id='url-url' data-prop-id='url' @change="${d}" data-id="${t}" value="${e.url}" aria-label='URL'/>
      </div>`:O`
      <input type='text' data-prop-id='displayName' class='flex-all' @change="${d}" 
      data-id="${t}" value="${e.displayName}" aria-label='name'/>
      ${((t,e)=>O`
    <select data-id="${t}" @change="${d}" class='flex-all' aria-label='category'>
    ${i.attachmentcategories.map((t=>O`
      <option ?selected=${t.ID===e}>${t.ID}</option>
    `))}
    </select>`)(t,e.category)}
      <span class='flex-all'>${e.name}</span>
      <span>${Math.round(e.size/1e3)}Kb</span>
      <button type='button' data-id="${t}" @click="${c}" class='pzhc pzbutton Simple' title='Delete'>${Dt()}</button>`:O`${b(t,e)}
    <button type='button' data-id="${t}" @click="${l}" class='pzhc pzbutton Simple' title='Delete'>${Dt()}</button>`,v=t=>{if(!a)return Gt();const e=[];if(void 0!==t){const a=Object.entries(t);for(const t of a){let a=t[1].extension;void 0===a&&(a=t[1].type),"URL"===t[1].type&&t[1].editing?e.push(O`<div class='flex layout-content-stacked content-items-maxwidth'>
              ${y(t[0],t[1])}
            </div>`):e.push(O`<div class='row-item'>
              <span class='doc-icon'>${O`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1632813,6.753125 C22.1632813,6.753125 22.1632813,6.753125 22.1632813,6.753125 C22.1632813,6.753125 15.8414062,0.43125 15.8414062,0.43125 C15.6023437,0.14375 15.21875,0 14.7875,0 C14.7875,0 14.7875,0 14.7875,0 C14.7875,0 3.48515625,0 3.48515625,0 C3.05390625,0 2.71875,0.14375 2.43125,0.43125 C2.14375,0.71875 2,1.05390625 2,1.48515625 C2,1.48515625 2,1.48515625 2,1.48515625 C2,1.48515625 2,23.0367188 2,23.0367188 C2,23.4679688 2.14375,23.803125 2.43125,24.090625 C2.71875,24.378125 3.05390625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 3.48515625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 21.109375,24.521875 21.109375,24.521875 C21.540625,24.521875 21.8757812,24.378125 22.1632813,24.090625 C22.4507812,23.803125 22.5945312,23.4679688 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,23.0367188 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,7.80703125 22.5945312,7.80703125 C22.5945312,7.37578125 22.4507812,7.040625 22.1632813,6.753125 Z M15.6976563,1.6765625 C15.6976563,1.6765625 20.8703125,6.84921875 20.8703125,6.84921875 C20.8703125,6.84921875 16.225,6.84921875 16.225,6.84921875 C15.8898438,6.84921875 15.7460938,6.70546875 15.7460938,6.3703125 C15.7460938,6.3703125 15.7460938,6.3703125 15.7460938,6.3703125 C15.7460938,6.3703125 15.6984375,1.6765625 15.6984375,1.6765625 L15.6976563,1.6765625 Z M21.6367188,7.8546875 C21.6367188,7.8546875 21.6367188,23.0367188 21.6367188,23.0367188 C21.6367188,23.371875 21.4453125,23.515625 21.1101563,23.515625 C21.1101563,23.515625 21.1101563,23.515625 21.1101563,23.515625 C21.1101563,23.515625 3.4859375,23.515625 3.4859375,23.515625 C3.15078125,23.515625 2.959375,23.371875 2.959375,23.0367188 C2.959375,23.0367188 2.959375,23.0367188 2.959375,23.0367188 C2.959375,23.0367188 2.959375,1.48515625 2.959375,1.48515625 C2.959375,1.15 3.15078125,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 3.4859375,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 14.740625,0.95859375 14.740625,0.95859375 C14.740625,0.95859375 14.740625,6.3703125 14.740625,6.3703125 C14.740625,6.8015625 14.884375,7.13671875 15.171875,7.42421875 C15.459375,7.71171875 15.7945313,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 16.2257813,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 21.6375,7.85546875 21.6375,7.85546875 L21.6367188,7.8546875 Z"/>
</svg>`}<span>${a.substring(0,5)}</span></span>
              ${y(t[0],t[1])}
            </div>`)}}return e&&e.length>0?e:O`<div class='empty'>no attachments found</div>`};let $="Attachments";return void 0!==n&&n.length>0&&($="URL"===n[0].type?"Attach a link":"Attach files"),O`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${$}</h2>
      <div class="flex layout-content-inline_middle margin-l-auto">
        <button type='button' data-action-id='close'
        class="pzhc pzbutton Simple" title="Close">${kt()}</button>
      </div>
    </div>
    ${void 0!==n&&n.length>0?O`
      <div class='attach-files list-items'>
        <div class='upload-content'>${v(n)}</div>
        <div class="action-button-area">
          <button type="button" class="pzhc pzbutton" @click="${f}">Cancel</button>
          <button type="button" class="Strong pzhc pzbutton" @click="${u}">Upload</button>
        </div>
      </div>`:O`
      <form id="modalcontent" @dragenter="${h}" @dragover="${h}" @dragleave="${h}"  
      @drop="${h}" class='attach-files list-items'>
        <div class="file-upload">
          <input @change="${g}" type="file" multiple="">
          ${_t()}<span> Drag and drop files, attach 
          <button type='button' aria-labelledby='click to attach a file' class='Light' @click="${g}">files</button> or add a 
          <button type='button' aria-labelledby='click to add a URL link' class='Light' @click="${m}">link</button></span>
        </div>
        ${v(e)}
      </form>
    `}
  `},Kt=(t,e,a,i)=>O`
  ${t.map(((t,n)=>{const s=`${e}-${n}`;if(t.layout){""!==t.layout.groupFormat.trim()&&"CENTER"!==t.layout.groupFormat||(t.layout.groupFormat="default");const e=t.layout.groupFormat.replace(/ /g,"_").toLowerCase(),n=`flex content layout-content-${e} content-${e}`;if(t.layout.view&&t.layout.view.groups)return O`
          <div class="${n}">${Kt(t.layout.view.groups,s,a,i)}</div>
        `;if(t.layout.groups){let e="";if("string"==typeof t.layout.title&&""!==t.layout.title&&(t.layout.titleFormat,1))switch(t.layout.titleFormat){case"h2":e=O`<h2>${t.layout.title}</h2>`;break;case"h3":e=O`<h3>${t.layout.title}</h3>`;break;case"h4":e=O`<h4>${t.layout.title}</h4>`;break;default:e=O`<h2>${t.layout.title}</h2>`}return O`
        ${e}<div class="${n}">${Kt(t.layout.groups,s,a,i)}</div>
        `}return t.layout.rows?t.layout.header?((t,e,a)=>O`
  ${Wt(t.layout)}
  <table>
    <thead>
      <tr>
        ${Zt(t.layout.header.groups)}
      </tr>
    </thead>
    <tbody>
      ${Jt(t.layout.rows)}
    </tbody>
  </table>
  ${Bt(t.layout,a)}
`)(t,0,a):Qt(t,s,a):null}return t.field?t.field.control&&"pxAttachContent"===t.field.control.type?Yt("Upload file","Upload file","",i.displayAttachments):It(t.field,s,a):t.view&&t.view.groups?"pyAttachFieldOptional"===t.view.viewID&&"Embed-Attach-File"===t.view.appliesTo?Yt("Upload file","Upload file","",i.displayAttachments):Kt(t.view.groups,s,a,i):null}))}
`,Qt=(t,e,a)=>O`
  ${Wt(t.layout)}
  <div class="rdl">
    ${te(t.layout.rows,e,a)}
  </div>
  ${Bt(t.layout,a)}
`,te=(t,e,a)=>O`
  ${t.map(((t,i)=>{const n=`${e}-row${i}`;return t.groups?O`
        <div>
          ${Kt(t.groups,n,a)}
        </div>
      `:null}))}
`,ee=(t,e,a,i)=>{if(null==i)return null;let n;const s=`${Math.random().toString(36).substr(2,9)}`,r=document.createElement("ul");r.setAttribute("id",`menu-overlay-${s}`),r.setAttribute("role","menu"),r.setAttribute("aria-labelledby",`menubutton-${s}`),r.setAttribute("tabindex","-1");const o=()=>{document.body.removeEventListener("click",c),document.body.removeEventListener("keydown",l),r&&(r.previousElementSibling&&(r.previousElementSibling.setAttribute("aria-expanded","false"),r.previousElementSibling.focus()),r.remove())},l=t=>{38===t.keyCode?(n=n.previousElementSibling,null===n&&(n=r.lastElementChild),n.focus()):40===t.keyCode?(n=n.nextElementSibling,null===n&&(n=r.firstElementChild),n.focus()):27===t.keyCode||9===t.keyCode?o():13===t.keyCode&&(i(t),o())},c=t=>{if(t){let e=t.target;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&e.nextElementSibling===r)return;e.parentNode===r&&i(t),o()}},d=t=>{if("keydown"===t.type&&40!==t.keyCode)return;if(t.preventDefault(),"blur"===t.type)return void c(t);const e=t.target;"BUTTON"!==e.tagName?(i(t),o()):null===e.nextElementSibling?(t.target.parentNode.appendChild(r),e.setAttribute("aria-expanded","true"),L(a(),r),n=e.nextElementSibling.firstElementChild,n.focus(),document.body.addEventListener("click",c),document.body.addEventListener("keydown",l)):o()};return O`
    <div class="button-menu">
    <button type='button' id="${`menubutton-${s}`}" aria-haspopup="true" aria-controls="${`menu-overlay-${s}`}" aria-expanded="false"
    @click="${d}" @keydown="${d}" @blur="${d}"
    class="pzhc pzbutton Simple action-menu" title="${e}" aria-label="${e}">${t}</button>
    </div>
  `},ae=(t,e,a,i,n,s,r,o,l)=>{const c=O`${_t()}<span class='count-badge'>${n}</span>`;if(void 0===e.caseID&&a.content)return O`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${a.content.pyLabel} (${a.content.pyID})</h2>
      ${""!==i?O`<span class='badge-bg-info centered'><span class='badge_text'>${i}</span></span>`:""}
      <div class="flex layout-content-inline_middle margin-l-auto">
        ${l?Yt("Attachments",c,"Simple",l):""}
        ${a.actions&&a.actions.length>0?O`
          ${ee("Actions","Start a new action",s,r)}`:""}
      </div>
    </div>
    ${((t,e)=>t&&0!==t.length?O`
  <h3>
    Assignments
  </h3>
  <table>
    <thead>
      <tr>
        <th>Priority</th>
        <th>Task</th>
        <th>Assigned to</th>
        <th class="right-aligned">Action</th>
      </tr>
    </thead>
      <tbody>
        ${t.map((t=>O`
        <tr>
          <td>${t.urgency}</td>
          <td>${""!==t.instructions?t.instructions:t.name}</td>
          <td>${t.routedTo}</td>
          <td class="right-aligned">
            <button type='button' @click="${e}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">Open</button>
          </td>
        </tr>`))}
  </tbody >
  </table > `:null)(a.assignments,o)}
    ${((t,e)=>t&&0!==t.length?O`
  <h3>
    Related cases
  </h3>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th class="right-aligned">Action</th>
      </tr>
    </thead>
      <tbody>
        ${t.map((t=>O`
        <tr>
          <td>${t.ID}</td>
          <td class="right-aligned">
            <button type='button' @click="${e}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">Open</button>
          </td>
        </tr>`))}
  </tbody >
  </table > `:null)(a.childCases,o)}
    <h3>Case information</h3>`;if(""===t||void 0===e.caseID)return"";const d=e.caseID.split(" ")[1];return O`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${e.name} (${d})</h2>
    ${""!==i?O`<span class='badge-bg-info centered'><span class='badge_text'>${i}</span></span>`:""}
    <div class="flex layout-content-inline_middle margin-l-auto">
      ${l?Yt("Attachments",c,"Simple",l):""}
      ${e.actions&&e.actions.length>0?O`
        ${ee("Actions","Start a new action",s,r)}`:""}
    </div>
  </div>
 <h3>${t}</h3>`},ie=(t,e,a,i,n)=>O`
  <div class="flex layout-content-stacked">${Kt(t,e,!1,n)}</div>
  ${((t,e)=>O`
  <div class="action-button-area">
    ${null!==t?O`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    ${null!==e?O`<button type="button" class="pzhc pzbutton" @click="${e}">Save</button>`:""}
    <button type="button" data-submit="submit" class="Strong pzhc pzbutton">Submit</button>
  </div>
`)(a,i)}
`,ne=(t,e,a,i)=>O`
  <div class="flex layout-content-stacked">${Kt(t,e,!0,i)}</div>
  ${(t=>null===t?null:O`
  <div class="action-button-area">
  ${null!==t?O`<button type="button" class="pzhc pzbutton Strong" @click="${t}">Close</button>`:""}
  </div>`)(a)}
`,se=(t,e,a,i,n)=>O`
  <div class="flex layout-content-stacked">${Kt(t,e,!1,n)}</div>
  ${((t,e)=>O`
  <div class="action-button-area">
    ${null!==t?O`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    <button type="button" data-submit="save" class="pzhc pzbutton Strong" @click="${e}">Submit</button>
  </div>
`)(a,i)}
`,re=(t,e,a,i)=>O`
  <div class="flex layout-content-stacked">${Kt(t,e,!1,i)}</div>
  ${(t=>O`
  <div class="action-button-area">
    ${null!==t?O`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    <button type="button" data-submit="create" class="Strong pzhc pzbutton">Create</button>
  </div>
`)(a)}
`,oe=(t,e)=>{const a=[],i=Object.entries(e.actions);for(const e of i)e[1].name!==t&&a.push(O`
          <li role="menuitem" tabindex="-1" data-value="${e[1].ID}">${e[1].name}</li>
        `);return O`
    ${a}
  `},le=t=>O`
${t.pxResults.map((t=>O`
    <option>
      ${t.pyUserName}
    </option>`))}`;function ce(t,e,a,i){a&&Object.defineProperty(t,e,{enumerable:a.enumerable,configurable:a.configurable,writable:a.writable,value:a.initializer?a.initializer.call(i):void 0})}function de(t,e,a,i,n){var s={};return Object.keys(i).forEach((function(t){s[t]=i[t]})),s.enumerable=!!s.enumerable,s.configurable=!!s.configurable,("value"in s||s.initializer)&&(s.writable=!0),s=a.slice().reverse().reduce((function(a,i){return i(t,e,a)||a}),s),n&&void 0!==s.initializer&&(s.value=s.initializer?s.initializer.call(n):void 0,s.initializer=void 0),void 0===s.initializer&&(Object.defineProperty(t,e,s),s=null),s}var he,ue,pe,ge,me,fe,be,ye,ve,$e,xe,we,Ce,Se,ke,De,_e,Ie,Ae,Te,Ne,Ee,ze,Re,Me,Le,Pe,Oe,qe,Ue,je,Fe,Ve,He,We;let Be=(he=K({type:String}),ue=K({type:String}),pe=K({type:String}),ge=K({type:String}),me=K({type:String}),fe=K({type:String}),be=K({type:String}),ye=K({type:String}),ve=K({type:String}),$e=K({type:String}),xe=K({type:String}),we=K({type:String}),Ce=K({type:String}),Se=K({type:Object}),ke=K({type:String}),De=K({type:String}),_e=K({type:String}),Ae=de((Ie=class extends it{constructor(){super(),ce(this,"url",Ae,this),ce(this,"caseID",Te,this),ce(this,"username",Ne,this),ce(this,"password",Ee,this),ce(this,"title",ze,this),ce(this,"bShowCreate",Re,this),ce(this,"bShowCancel",Me,this),ce(this,"bShowAttachments",Le,this),ce(this,"bShowSave",Pe,this),ce(this,"authentication",Oe,this),ce(this,"token",qe,this),ce(this,"clientid",Ue,this),ce(this,"clientsecret",je,this),ce(this,"initialContent",Fe,this),ce(this,"action",Ve,this),ce(this,"casetype",He,this),ce(this,"portalName",We,this),this.cases=[],this.dataPages={},this.name="",this.etag="",this.casepyStatusWork="",this.casedata={},this.data={},this.numAttachments=0,this.attachmentcategories=[],this.assignmentID="",this.actionID="",this.content={},this.errorMsg="",this.validationMsg="",this.bShowConfirm=!1,this.bShowNew=!1}}).prototype,"url",[he],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Te=de(Ie.prototype,"caseID",[ue],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Ne=de(Ie.prototype,"username",[pe],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Ee=de(Ie.prototype,"password",[ge],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),ze=de(Ie.prototype,"title",[me],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"My worklist"}}),Re=de(Ie.prototype,"bShowCreate",[fe],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"true"}}),Me=de(Ie.prototype,"bShowCancel",[be],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"true"}}),Le=de(Ie.prototype,"bShowAttachments",[ye],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"false"}}),Pe=de(Ie.prototype,"bShowSave",[ve],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"true"}}),Oe=de(Ie.prototype,"authentication",[$e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),qe=de(Ie.prototype,"token",[xe],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Ue=de(Ie.prototype,"clientid",[we],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),je=de(Ie.prototype,"clientsecret",[Ce],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Fe=de(Ie.prototype,"initialContent",[Se],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Ve=de(Ie.prototype,"action",[ke],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),He=de(Ie.prototype,"casetype",[De],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),We=de(Ie.prototype,"portalName",[_e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Ie);class Ze extends Be{clearLoadingIndicator(){const t=this.getRenderRoot().querySelector("#case-data");t&&null!==t.querySelector(".loading")&&L(null,t)}sendExternalEvent(t){this.dispatchEvent(new CustomEvent("message",{detail:{type:t}}))}genErrorMessage(t){this.clearLoadingIndicator(),t.message&&-1!==t.message.indexOf("JSON.parse")?console.error("Error:",t):t.message&&-1!==t.message.indexOf("Unexpected token")?(this.errorMsg="Error 404: Resource not found",this.requestUpdate(),console.error(this.errorMsg)):(t.status?""!==t.statusText?this.errorMsg=`Error ${t.status}: ${t.statusText}`:401===t.status?this.errorMsg="Error 401: Authentication error":500===t.status?this.errorMsg="Error 500: Internal server error":this.errorMsg=`Error ${t.status}`:t.name&&t.message?this.errorMsg=`Error ${t.name}: ${t.message}`:this.errorMsg="string"==typeof t?t:"Critical error",this.requestUpdate(),console.error("Error:",t))}fetchData(t,e){const{id:a,actionid:i,target:n,element:s}=e||{};let r="";""!==this.authentication&&"basic"!==this.authentication||(r=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(r=`Bearer ${this.token}`);const o={method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:r},mode:"cors"};let l=`${this.url}/api/v1/`;switch(t){case"worklist":l+="assignments";break;case"casetypes":l+="casetypes";break;case"newwork":l+=`casetypes/${a}`;break;case"assignment":l+=`assignments/${a}`;break;case"case":l+=`cases/${a}`;break;case"data":l+=`data/${a}`;break;case"page":l+=`cases/${a}/pages/${i}`;break;case"view":l+=`cases/${a}/views/${i}`;break;case"assignmentaction":l+=`assignments/${a}/actions/${i}`;break;case"caseaction":l+=`cases/${a}/actions/${i}`;break;case"attachment":l+=`attachments/${a}`;break;case"attachments":l+=`cases/${a}/attachments`;break;case"attachmentcategories":l+=`cases/${a}/attachment_categories`}fetch(l,o).then((e=>{if("case"===t)this.etag=e.headers.get("etag"),n&&(n.disabled=!1,n.textContent="Save");else if("attachment"===t)return e.text();return e.ok||404===e.status?e.json():Promise.reject(e)})).then((e=>{try{if(e.errors&&e.errors.length>0)return this.errorMsg=`Error ${e.errors[0].ID}: ${e.errors[0].message}`,this.clearLoadingIndicator(),this.requestUpdate(),void console.error("Error:",e);const r=this.getRenderRoot().querySelector("#case-data");switch(t){case"casetypes":this.casetypes={};for(const t in e.caseTypes){const a=e.caseTypes[t];"workList"===this.action&&""!==this.casetype&&this.casetype!==a.ID||(this.casetypes[a.ID]={canCreate:a.CanCreate,name:a.name,requiresFieldsToCreate:!1})}"createNewWork"===this.action&&this.createCase();break;case"worklist":this.cases=e.assignments,this.requestUpdate();break;case"assignment":this.data=e,this.caseID=e.caseID,this.fetchData("case",{id:this.caseID}),e.actions.length>0&&e.actions[0].ID?(this.actionID=e.actions[0].ID,this.fetchData("assignmentaction",{id:a,actionid:this.actionID})):this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"});break;case"case":this.casedata=e,this.numAttachments=0,""===this.name&&(this.name=this.casedata.content.pyLabel),this.casepyStatusWork=this.casedata.content.pyStatusWork,this.requestUpdate(),""===this.assignmentID&&this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"}),"true"===this.bShowAttachments&&this.fetchData("attachments",{id:this.caseID});break;case"data":if(this.dataPages[a]=e,!s.nextElementSibling){console.error("Error: case data are not present when retrieving the data");break}L(le(e),s.nextElementSibling);break;case"caseaction":if(!r){console.error("Error: case data are not present when retrieving the assignmentaction");break}L(se(e.view.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,this.actionAreaSave,this),r),r.focus();break;case"assignmentaction":if(this.name=e.name,!r){console.error("Error: case data are not present when retrieving the assignmentaction");break}this.requestUpdate(),L(ie(e.view.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),r),r.focus();break;case"page":if(!r){console.error("Error: case data are not present when retrieving the page");break}L(ie(e.groups,"Obj",this),r),r.focus();break;case"view":if(!r){console.error("Error: case data are not present when retrieving the page");break}this.content={},"pyCaseInformation"===i?(this.name=e.name,L(ne(e.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,this),r)):(this.name=e.name,L(ie(e.groups,"Obj",this),r)),r.focus();break;case"newwork":if(this.content={},!r){console.error("Error: case data are not present when retrieving the newwork");break}L(re(e.creation_page.groups[0].layout.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null),r),r.focus();const t=this.getRenderRoot().querySelector("#case-data");t&&((t,e)=>{for(const a in t.elements){const i=t.elements[a];if("INPUT"===i.tagName||"TEXTAREA"===i.tagName||"SELECT"===i.tagName){const t=i.getAttribute("data-ref");if(null!==t&&"pyID"!==t&&e[t]){const a=e[t];"object"==typeof a?("radio"===i.type?i.value===a.value&&(i.checked=!0):"checkbox"===i.type?!0!==a.value&&"true"!==a.value||(i.checked=!0):a.value&&(i.value=a.value),a.disabled&&(i.disabled=!0)):"string"==typeof a?"radio"===i.type?i.value===a&&(i.checked=!0):"checkbox"===i.type?"true"===a&&(i.checked=!0):i.value=a:"boolean"==typeof a&&"checkbox"===i.type&&!0===a&&(i.checked=!0)}}}})(t,this.initialContent);break;case"attachments":let o=e.attachments;o||(o=[]),this.numAttachments=o.length,n&&L(Xt(n,o,this.caseID,this),n),this.requestUpdate();break;case"attachmentcategories":this.attachmentcategories=e.attachment_categories;break;case"attachment":n(e)}}catch(t){this.errorMsg=`Error: ${t}`,this.requestUpdate(),console.error("Error:",t)}})).catch((t=>{this.genErrorMessage(t)}))}sendData(t,e){const{id:a,actionid:i,target:n,refreshFor:s}=e;let r="";""!==this.authentication&&"basic"!==this.authentication||(r=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(r=`Bearer ${this.token}`);const o={"Content-Type":"application/json;charset=UTF-8",Authorization:r},l={method:"POST",headers:o,mode:"cors"};let c=`${this.url}/api/v1/`;switch(this.validationMsg="",t){case"authenticate":"oauth2password"===this.authentication?l.body=`grant_type=password&client_id=${this.clientid}&client_secret=${this.clientsecret}&username=${this.username}&password=${this.password}`:"oauth2clientcredentials"===this.authentication&&(l.body=`grant_type=client_credentials&client_id=${this.clientid}&client_secret=${this.clientsecret}`),l.headers["Content-Type"]="application/x-www-form-urlencoded",c=`${this.url}/PRRestService/oauth2/v1/token`;break;case"newwork":c+="cases",l.body=JSON.stringify({content:this.content,caseTypeID:a});break;case"submitassignment":l.body=JSON.stringify({content:this.content}),c+=`assignments/${a}?actionID=${i}`;break;case"savecase":c+=`cases/${a}`,i&&""!==i&&(c+=`?actionID=${i}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:this.content});break;case"refreshnew":c+=`casetypes/${a}/refresh`,s&&""!==s&&(c+=`?refreshFor=${s}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:this.content});break;case"refreshassignment":c+=`assignments/${a}/actions/${i}/refresh`,s&&""!==s&&(c+=`?refreshFor=${s}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:this.content});break;case"refreshcase":c+=`cases/${a}/actions/${i}/refresh`,s&&""!==s&&(c+=`?refreshFor=${s}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:this.content});break;case"uploadattachment":c+="attachments/upload",delete o["Content-Type"];const t=new FormData;t.append("File",i,i.name),l.body=t;break;case"attachments":c+=`cases/${a}/attachments`,l.body=JSON.stringify({attachments:i});break;case"deleteattachment":c+=`attachments/${a}`,l.method="DELETE"}fetch(c,l).then((e=>"deleteattachment"===t||"attachments"===t?e.text():200===e.status||201===e.status||e.status>=400&&e.status<500?e.json():e.ok?Promise.resolve("ok"):Promise.reject(e))).then((e=>{if(e.errors&&e.errors.length>0){if(e.errors[0].ValidationMessages){const t=this.getRenderRoot().querySelector("#case-data");$t(t,e.errors[0].ValidationMessages),this.validationMsg=(t=>t.errorDetails?O`
    <ul>
      ${t.errorDetails.map((t=>O`<li>${t.localizedValue}</li>`))}
    </ul>`:O`
  <ul>
    ${t.errors[0].ValidationMessages.map((t=>t.Path?O`
          <li>${t.Path.substring(1)}: ${t.ValidationMessage}</li>
        `:0===t.ValidationMessage.indexOf("Validation failed")?null:O`
    <li>${t.ValidationMessage}</li>
  `))}
  </ul>`)(e)}else this.errorMsg=`Error ${e.errors[0].ID}: ${e.errors[0].message}`;this.clearLoadingIndicator(),n&&(n.disabled=!1,n.textContent="Save")}else if(e.access_token)this.token=e.access_token;else{const a=this.getRenderRoot().querySelector("#case-data");if("refreshcase"===t||"refreshassignment"===t||"refreshnew"===t){if(!a)return void console.error("Error: case data are not present");L("refreshnew"===t?re(e.creation_page.groups[0].layout.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,this):ie(e.view.groups,"Obj",this.actionAreaCancel,"true"===this.bShowSave?this.actionAreaSave:null,this),a)}else if("savecase"===t)this.sendExternalEvent(t),this.fetchData("case",{id:this.caseID,target:n}),""!==this.assignmentID&&this.fetchData("assignment",{id:this.assignmentID});else if("deleteattachment"===t||"attachments"===t)this.fetchData("attachments",{id:this.caseID,target:n});else if("uploadattachment"===t){let t=i.name.lastIndexOf(".");-1===t&&(t=i.name.length);const a=i.name.substring(t+1),s=[{type:"File",category:i.category,fileType:a,name:i.displayName,ID:e.ID}];return void this.sendData("attachments",{id:this.caseID,actionid:s,target:n})}e.ID&&(this.caseID=e.ID),e.nextAssignmentID?(a&&(L(Gt(),a),this.requestUpdate()),this.bShowNew=!1,this.assignmentID=e.nextAssignmentID,this.sendExternalEvent(t),this.fetchData("assignment",{id:this.assignmentID})):e.nextPageID&&(a&&(L(Gt(),a),this.requestUpdate()),this.sendExternalEvent(t),"Confirm"===e.nextPageID||"Review"===e.nextPageID?(this.bShowConfirm=!0,this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"}),this.fetchData("case",{id:this.caseID})):this.fetchData("page",{id:this.caseID,actionid:e.nextPageID}))}this.requestUpdate()})).catch((t=>{this.genErrorMessage(t)}))}}const Je=(t,e,a,i)=>O`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${t} (${e})</h2>
    <span class='badge-bg-info centered'><span class='badge_text'>${a}</span></span>
    ${i?O`<div class="flex layout-content-inline_middle margin-l-auto">
        ${Yt("Attachments",_t(),"Simple",i)}
      </div>`:""}
  </div>
  <div class="flex layout-content-inline_middle success">
    Thank you. Your information has been submitted.
  </div>
  <h3>Case information</h3>
  <div id="case-data">${Gt()}</div>`,Ge=(t,e)=>O`
  <div class="error">${t}
  ${null!=e?O`
    <button type='button' title="Click to close the banner" class="pzhc pzbutton Light" @click="${e}">
    ${kt()}</button>`:""}
  </div>`,Ye=(t,e,a,i,n,s)=>O`
  <div class="flex layout-content-inline_middle main-header">
    <h2>
      ${t}
      ${e.length>0?O`
            (${e.length})
          `:""}
    </h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      <button type='button' class="pzhc pzbutton Simple" arial-label='Click to refresh the worklist'
      title='Click to refresh the worklist' @click="${i}">Refresh</button>
      ${ee("Create","Create a new case",a,n)}
    </div>
  </div>
  ${e.length>0?O`
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>case ID</th>
              <th class="right-aligned">Urgency</th>
              <th class="right-aligned">Action</th>
            </tr>
          </thead>
          <tbody>
            ${e.map((t=>O`
                <tr>
                  <td>${t.name}</td>
                  <td>${t.caseID}</td>
                  <td class="right-aligned">${t.urgency}</td>
                  <td class="right-aligned">
                    <button @click="${s}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">Open</button>
                  </td>
                </tr>
              `))}
          </tbody>
        </table>
      `:O`
        <div class="margin-t-2x">no assignments</div>
      `}
`;class Xe extends Ze{constructor(...t){super(...t),this.resetError=t=>{this.errorMsg="",this.validationMsg="",this.actionAreaCancel(t)},this.reloadWorkList=t=>{this.cases=[],this.requestUpdate(),this.actionAreaCancel(t)},this.actionAreaCancel=t=>{t&&t.preventDefault(),this.bShowConfirm=!1,this.bShowNew=!1,this.caseID="",this.data={},this.content={},this.casedata={},this.attachmentcategories=[],this.casepyStatusWork="",this.assignmentID="",this.actionID="",this.errorMsg="",this.numAttachments=0,this.validationMsg="",this.name="","workList"===this.action?this.fetchData("worklist"):this.dispatchEvent(new CustomEvent("message",{detail:{type:"cancel"}}))},this.actionAreaSave=t=>{t&&t.preventDefault(),null===t.target.getAttribute("data-submit")&&(t.target.textContent="Saving...",t.target.disabled=!0);const e=this.getRenderRoot().querySelector("#case-data");e&&(this.content=vt(this.casedata),yt(e,this.content),""!==this.assignmentID?this.sendData("savecase",{id:this.caseID,actionid:"",target:t.target}):this.sendData("savecase",{id:this.caseID,actionid:this.actionID,target:t.target}))},this.actionRefresh=()=>{const t=this.getRenderRoot().querySelector("#case-data");t&&(this.content=vt(this.casedata),this.validationMsg="",yt(t,this.content),this.requestUpdate(),""!==this.assignmentID?this.fetchData("assignmentaction",{id:this.assignmentID,actionid:this.actionID}):this.fetchData("caseaction",{id:this.caseID,actionid:this.actionID}))},this.displayCasesTypes=()=>(t=>{const e=[],a=Object.entries(t);for(const t of a)"true"===t[1].canCreate&&e.push(O`
          <li role="menuitem" tabindex="-1" data-value="${t[0]}">${t[1].name}</li>
        `);return O`
    ${e}
  `})(this.casetypes),this.displayActions=()=>this.data.actions?oe(this.name,this.data):this.casedata.actions?oe(this.name,this.casedata):null,this.displayAttachments=t=>{this.fetchData("attachmentcategories",{id:this.caseID}),this.fetchData("attachments",{id:this.caseID,target:t})},this.submitForm=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");return this.content=vt(this.casedata),yt(a,this.content),a.checkValidity()?"create"!==e?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID}):this.sendData("newwork",{id:this.casetype}):a.reportValidity(),t.preventDefault(),!1},this.createCase=t=>{if(this.name="New Case",this.bShowNew=!0,t){let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&(this.casetype=e.getAttribute("data-value"),this.name=`New ${e.textContent} `)}this.content=this.initialContent,this.caseID="",this.data={},this.casedata={},this.casetypes[this.casetype]?"true"===this.casetypes[this.casetype].requiresFieldsToCreate?this.fetchData("newwork",{id:this.casetype}):this.sendData("newwork",{id:this.casetype}):(this.errorMsg=`Case '${this.casetype}' is not defined`,console.error(`Case '${this.casetype}' is not defined`)),this.requestUpdate()},this.runAction=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&null!==e.getAttribute("data-value")&&(this.actionID=e.getAttribute("data-value"),this.actionRefresh());const a=this.getRenderRoot().querySelector("#case-data");null!=a&&L(Gt(),a)},this.openCase=t=>{t.preventDefault(),this.caseID=t.target.getAttribute("data-id"),this.name="",this.data={},this.casedata={},0===this.caseID.indexOf("ASSIGN-WORKLIST")?(this.assignmentID=this.caseID,this.caseID=""):this.assignmentID="";const e=this.getRenderRoot().querySelector("#case-data");null!=e&&L(Gt(),e),this.requestUpdate()},this.getData=(t,e)=>{this.dataPages[t]?L(le(this.dataPages[t]),e.nextElementSibling):this.fetchData("data",{id:t,element:e})},this.refreshAssignment=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");let i=t;if(a){if(this.content=vt(this.casedata),yt(a,this.content),i){"svg"===i.tagName&&(i=i.parentNode);const t=i.getAttribute("data-action-click"),e=i.getAttribute("data-ref");null!==e&&null!=t&&("addRow"===t?gt(this.content,e,i.getAttribute("data-newrow")):"deleteRow"===t&&mt(this.content,e))}!0===this.bShowNew?this.sendData("refreshnew",{id:this.casetype,refreshFor:e}):this.sendData("refreshassignment",{id:this.assignmentID,actionid:this.actionID,refreshFor:e})}},this.clickHandler=t=>{let e=t.target;"svg"===e.tagName&&(e=e.parentNode);const a=e.getAttribute("data-action-click");e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e),ft(e,"click")?(this.refreshAssignment(e,bt(e,"click")),t.preventDefault()):"BUTTON"===e.tagName&&(t.preventDefault(),null!==e.getAttribute("data-submit")&&"save"!==e.getAttribute("data-submit")?this.submitForm(t,e.getAttribute("data-submit")):("addRow"===a||"deleteRow"===a)&&this.refreshAssignment(e))},this.changeHandler=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e.setCustomValidity(""),e.classList.remove("error-field"),ft(e,"change")&&this.refreshAssignment(e,bt(e,"change"))},this.keyupHandler=t=>{const e=t.target;"TEXTAREA"===e.tagName&&(e.style.cssText="height:auto; padding:0;",e.style.cssText=`height:${e.scrollHeight}px`)},this.focusHandler=t=>{const e=t.target;e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e)}}displayContent(){return console.log("displayContent v1"),""!==this.errorMsg?Ge(this.errorMsg,"true"===this.bShowCancel?this.resetError:null):"oauth2password"!==this.authentication&&"oauth2clientcredentials"!==this.authentication||""!==this.token?(this.casetypes||"createNewWork"!==this.action&&"workList"!==this.action?""===this.name&&("openAssignment"===this.action&&""===this.assignmentID&&(this.assignmentID=this.caseID),""!==this.assignmentID?this.fetchData("assignment",{id:this.assignmentID}):""!==this.caseID&&this.fetchData("case",{id:this.caseID})):(this.fetchData("casetypes"),"createNewWork"===this.action?(this.bShowNew=!0,this.casetypes[this.casetype]&&this.fetchData("newwork",{id:this.casetype})):"workList"===this.action&&(this.bShowCancel="true",this.fetchData("worklist"))),this.bShowConfirm?Je(this.casedata.content.pyLabel,this.casedata.content.pyID,this.casepyStatusWork,"true"===this.bShowAttachments?this.displayAttachments:null):""!==this.caseID||""!==this.assignmentID||this.bShowNew?O`
        ${ae(this.name,this.data,this.casedata,this.casepyStatusWork,this.numAttachments,this.displayActions,this.runAction,this.openCase,"true"===this.bShowAttachments?this.displayAttachments:null)}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
        <form id="case-data">${Gt()}</form>
      `:"workList"===this.action?Ye(this.title,this.cases,this.displayCasesTypes,this.reloadWorkList,"true"===this.bShowCreate?this.createCase:null,this.openCase):null):(this.sendData("authenticate",{}),null)}firstUpdated(){console.log("Initialization of the Web Component v1");const t=this.getRenderRoot();t&&(t.addEventListener("click",this.clickHandler),t.addEventListener("focusin",this.focusHandler),t.addEventListener("change",this.changeHandler),t.addEventListener("keyup",this.keyupHandler))}}const Ke=()=>O`
  <style>
    label {
      color: var(--generalLabelColor);
      line-height: 1.5;
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

    .field-item {
      display: flex;
      flex-flow: column nowrap;
    }

    .flex.content > .field-checkbox > .field-caption,
    .flex.content > .field-checkbox,
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
      height: 28px;
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
      color: var(--linkColorFocus);
      text-decoration: none;
      outline:-webkit-focus-ring-color auto 1px;
    }

    button.pzhc:hover {
      cursor: pointer;
      color: var(--linkColorFocus);
    }

    a:hover {
      cursor: pointer;
      color: var(--linkColorFocus);
      text-decoration: underline;
    }
    
    button.Strong:hover,
    button.Strong:focus,
    button.Strong:active {
      color: #FFF;
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
      height: 28px;
      transition: 0.2s ease all;
      border: 1px solid;
    }

    input[type='checkbox'] + label {
      pointer-events: all;
      position: relative;
      padding-left: 40px;
      padding-top: 4px;
      cursor: pointer;
      height: calc(var(--controlHeight) - var(--spacing1x));
      width: 100%;
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

    button:active {
      outline: none;
      background-color: var(--primaryColorFocus);
      color: #fff;
    }
    button:focus {
      outline: none;
      background-color: var(--primaryColorFocus);
      color: #fff;
    }
    button:hover {
      outline: none;
      background-color: var(--primaryColorFocus);
      color: #fff;
    }

    button.primary {
      background-color: var(--primaryColor);
      color: #fff;
      border-color: transparent;
    }
    button.primary:active {
      background-color: var(--primaryColorFocus);
    }
    button.primary:focus {
      background-color: var(--primaryColorFocus);
    }
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
      min-height: 50px;
    }
    .flex.layout-content-inline > *,
    .flex.layout-content-inline_middle > * {
      margin-right: var(--spacing1x);
    }
    .flex.layout-content-inline_middle > *:last-child {
      margin-right: 0;
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
    table {
      width: 100%;
    }
    th {
      text-align:left;
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
      max-width: 640px;
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
      padding: 8px 16px;
      margin-bottom:16px;
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
      height: 60vh;
      max-width: 800px;
      width: 80vw;
      margin: 15vh auto;
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
    .attach-files {
      margin: 16px 16px 0;
      display:flex;
      flex-flow:column;
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
      button {
        min-width: auto;
        padding: 0 var(--spacing1x);
      }
    } 
  </style>
`;Y("pega-mashup")(class extends Xe{createRenderRoot(){return this.attachShadow({mode:"open"})}getRenderRoot(){return this.shadowRoot}render(){return O`
      ${Ke()} ${this.displayContent()}
    `}}),Y("pega-mashup-light")(class extends Xe{createRenderRoot(){return this}getRenderRoot(){return this}render(){return O`
      ${this.displayContent()}
    `}});const Qe=(t,e,a,i)=>void 0===e?O`
      ${i}
    `:O`
    <div class="flex content-item field-item ${a}">
      ${((t,e,a)=>{if(void 0===e)return null;const i=t.required?"icon-required":"";return"field-checkbox"===a?O`
    ${""!==t.label?O`<div class="field-caption dataLabelForWrite ${i}" >${ct(t.label?t.label:t.caption).replace("@L ","")}
    </div>`:null}
  `:O`
    ${""!==t.label?O`<label class="field-caption dataLabelForWrite ${i}" 
    for="${st(e)}">${ct(t.label?t.label:t.caption).replace("@L ","")}
    </label>`:null}
  `})(t,e,a)}${i}
    </div>
  `,ta=(t,e)=>O`
    <span class="dataValueRead" data-ref="${t.reference}" id="${st(e)}">${ct(t.value)}</span>
  `,ea=(t,e)=>O`
  <input
    data-ref="${t.reference}"
    ?required="${"true"===t.required}"
    type="text"
    id="${st(e)}"
    value="${ct(t.value)}"
  />
`,aa=(t,e)=>O`
  <input
    data-ref="${t.reference}"
    ?required="${"true"===t.required}"
    type="number"
    id="${st(e)}"
    value="${ct(t.value)}"
  />
`,ia=(t,e)=>O`
  <input
    data-ref="${t.reference}"
    ?required="${"true"===t.required}"
    type="number"
    id="${st(e)}"
    value="${ct(t.value)}"
  />
`,na=(t,e)=>O`
  <input
    data-ref="${t.reference}"
    ?required="${"true"===t.required}"
    type="email"
    id="${st(e)}"
    value="${ct(t.value)}"
  />
`,sa=(t,e)=>O`
  <textarea
    rows="3"
    data-ref="${t.reference}"
    ?required="${"true"===t.required}"
    type="email"
    id="${st(e)}"
  >${ct(t.value)}</textarea>
`,ra=(t,e)=>O`
  <input
  data-ref="${t.reference}"
  id=${st(e)}
  type="checkbox" ?checked=${"true"===t.value}
  />
`,oa=(t,e)=>{let a=[{value:"true"},{value:"false"}];return t.options&&(a=t.options),O`
    ${a.map(((a,i)=>{const n=`rb-${e}-${i}`;return O`
        <div>
          <input
            data-ref="${t.reference}"
            name=${st(e)}
            id=${n}
            type="radio"
            value="${a.key}"
            ?checked="${a.key===t.value}"
          />
          <label for="${n}">${a.value}</label>
        </div>
      `}))}
  `},la=(t,e)=>O`<select
  data-ref="${t.reference}"
  id=${st(e)}
  ?required="${"true"===t.required}">
    <option value="" title="Select...">Select...</option>
    ${t.options.map((e=>O`<option ?selected=${e.key===t.value} value='${e.key}'>${e.value}</option>`))}
  </select>`,ca=(t,e)=>{let a=t.value;if(""!==a){let e=lt(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${e.getFullYear()}-${ot(e.getMonth()+1)}-${ot(e.getDate())}`):8===t.value.length&&(a=`${t.value.substring(0,4)}-${t.value.substring(4,6)}-${t.value.substring(6,8)}`)}return O`
    <input
      data-ref="${t.reference}"
      ?required="${"true"===t.required}"
      pattern="\\d{4}-\\d{2}-\\d{2}"
      placeholder="mm/dd/yyyy"
      type="date"
      id="${st(e)}"
      value="${a}"
    />
  `},da=(t,e)=>{let a=t.value;if(""!==a){let e=lt(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${e.getFullYear()}-${ot(e.getMonth()+1)}-${ot(e.getDate())}`):8===t.value.length&&(a=`${t.value.substring(0,4)}-${t.value.substring(4,6)}-${t.value.substring(6,8)}`)}return O`
    <input
      data-ref="${t.reference}"
      ?required="${"true"===t.required}"
      pattern="\\d{4}-\\d{2}-\\d{2}"
      placeholder="mm/dd/yyyy"
      type="date"
      id="${st(e)}"
      value="${a}"
    />
  `},ha=(t,e)=>{let a=t.value;if(""!==a){let t=lt(a);t instanceof Date&&t.getTime()==t.getTime()&&(t=new Date(t.getTime()+6e4*t.getTimezoneOffset()),a=`${t.getFullYear()}-${ot(t.getMonth()+1)}-${ot(t.getDate())}`)}return O`
    <input
      data-ref="${t.reference}"
      ?required="${"true"===t.required}"
      placeholder="HH:MM"
      type="time"
      id="${st(e)}"
      value="${a}"
    />
  `},ua=(t,e,a,i,n)=>{if(void 0===t)return null;if(!t.config||!t.config.template)return O`${t.map(((t,s)=>{const r=`${e}-${s}`;if("reference"===t.type&&"view"===t.config.type){let e="";return t.config.context&&(e=t.config.context),ua(i.data.uiResources.resources.views[t.config.name],r,a,i,""===n?e.substring(1):n+e)}return((t,e,a,i,n)=>{const s=t.config.value.replace("@P .","");if(t.config.reference=void 0===n||""===n?s:`${n}.${s}`,t.config.value=ht(i.casedata.content,t.config.reference),t.config.datasource&&0===t.config.datasource.indexOf("@ASSOCIATED")){const e=i.data.context_data?i.data.context_data.content:i.data.uiResources.context_data.caseInfo.content,a=""===n?e:ht(e,n);a&&(t.config.options=a.summary_of_associated_lists__[s])}if(t.config.options||(t.config.options=[]),t.config.value?t.config.value=`${t.config.value}`:t.config.value="",!0===a||"true"===t.config.readOnly)return Qe(t.config,e,"field-text",ta(t.config,e));switch(t.type){case"Decimal":case"TextInput":return Qe(t.config,e,"field-textinput",ea(t.config,e));case"Email":return Qe(t.config,e,"field-emailinput",na(t.config,e));case"Integer":return Qe(t.config,e,"field-numberinput",aa(t.config,e));case"Currency":return Qe(t.config,e,"field-currencyinput",ia(t.config,e));case"RadioButtons":return Qe(t.config,e,"field-radiogroup",oa(t.config,e));case"TextArea":return Qe(t.config,e,"field-textarea",sa(t.config,e));case"Checkbox":return Qe(t.config,e,"field-checkbox",ra(t.config,e));case"Dropdown":return Qe(t.config,e,"field-dropdown",la(t.config,e));case"DateTime":return Qe(t.config,e,"field-datetime",ca(t.config,e));case"Date":return Qe(t.config,e,"field-datetime",da(t.config,e));case"Time":return Qe(t.config,e,"field-datetime",ha(t.config,e));default:return null}})(t,r,a,i,n)}))}`;switch("TwoColumn"===t.config.template&&1===t.children.length&&(t.config.template="OneColumn"),t.config.template){case"TwoColumn":return O`
          <div class="flex layout-content-inline_grid_double">
            <div class="flex layout-content-stacked">${ua(t.children[0].children,`${e}-0`,a,i,n)}</div>
            <div class="flex layout-content-stacked">${ua(t.children[1].children,`${e}-1`,a,i,n)}</div>
          </div>
        `;case"OneColumn":return O`
          <div class="flex layout-content-stacked">
            ${ua(t.children[0].children,`${e}-0`,a,i,n)}
          </div>
        `;case"Details":return O`
          <div class="flex layout-content-stacked_with_labels_left">
            ${ua(t.children[0].children,`${e}-0`,a,i,n)}
          </div>
        `;default:return null}},pa=(t,e,a,i,n,s,r,o,l)=>{const c=O`${_t()}<span class='count-badge'>${n}</span>`;if(void 0===e.caseID&&a.content){const t=a.content.pyID.split(" ")[1];return O`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${e.data.caseInfo.name} (${t})</h2>
      ${""!==i?O`<span class='badge-bg-info centered'><span class='badge_text'>${i}</span></span>`:""}
      <div class="flex layout-content-inline_middle margin-l-auto">
        ${l?Yt("Attachments",c,"Simple",l):""}
        ${a.actions&&a.actions.length>0?O`
          ${ee("Actions","Start a new action",s,r)}`:""}
      </div>
    </div>
    ${((t,e)=>t&&0!==t.length?O`
  <h3>
    Assignments
  </h3>
  <table>
    <thead>
      <tr>
        <th>Priority</th>
        <th>Task</th>
        <th>Assigned to</th>
        <th class="right-aligned">Action</th>
      </tr>
    </thead>
      <tbody>
        ${t.map((t=>O`
        <tr>
          <td>${t.urgency}</td>
          <td>${t.name}</td>
          <td>${t.assigneeInfo.name}</td>
          <td class="right-aligned">
            <button type='button' @click="${e}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">Open</button>
          </td>
        </tr>`))}
  </tbody >
  </table > `:null)(a.assignments,o)}
    <h3>Case information</h3>`}if(""===t||void 0===e.caseID)return"";const d=e.caseID.split(" ")[1];return O`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${e.data.caseInfo.name} (${d})</h2>
    ${""!==i?O`<span class='badge-bg-info centered'><span class='badge_text'>${i}</span></span>`:""}
    <div class="flex layout-content-inline_middle margin-l-auto">
      ${l?Yt("Attachments",c,"Simple",l):""}
      ${e.actions&&e.actions.length>0?O`
        ${ee("Actions","Start a new action",s,r)}`:""}
    </div>
  </div>
 <h3>${t}</h3>`},ga=(t,e,a,i,n)=>O`
  <div>${ua(t,e,!1,n,"")}</div>
  ${((t,e)=>O`
  <div class="action-button-area">
    ${null!==t?O`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    ${null!==e?O`<button type="button" class="pzhc pzbutton" @click="${e}">Save</button>`:""}
    <button type="button" data-submit="submit" class="Strong pzhc pzbutton">Submit</button>
  </div>
`)(a,i)}
`,ma=(t,e,a,i)=>O`
  <div>${ua(t,e,!0,i)}</div>
  ${(t=>null===t?null:O`
  <div class="action-button-area">
  ${null!==t?O`<button type="button" class="pzhc pzbutton Strong" @click="${t}">Close</button>`:""}
  </div>`)(a)}
`,fa=(t,e)=>{const a=[],i=Object.entries(e.actions);for(const e of i)e[1].name!==t&&a.push(O`
          <li role="menuitem" tabindex="-1" data-value="${e[1].ID}">${e[1].name}</li>
        `);return O`
    ${a}
  `};class ba extends Be{clearLoadingIndicator(){const t=this.getRenderRoot().querySelector("#case-data");t&&null!==t.querySelector(".loading")&&L(null,t)}sendExternalEvent(t){this.dispatchEvent(new CustomEvent("message",{detail:{type:t}}))}genErrorMessage(t){this.clearLoadingIndicator(),t.message&&-1!==t.message.indexOf("JSON.parse")?console.error("Error:",t):t.message&&-1!==t.message.indexOf("Unexpected token")?(this.errorMsg="Error 404: Resource not found",this.requestUpdate(),console.error(this.errorMsg)):(t.status?""!==t.statusText?this.errorMsg=`Error ${t.status}: ${t.statusText}`:401===t.status?this.errorMsg="Error 401: Authentication error":500===t.status?this.errorMsg="Error 500: Internal server error":this.errorMsg=`Error ${t.status}`:t.name&&t.message?this.errorMsg=`Error ${t.name}: ${t.message}`:this.errorMsg="string"==typeof t?t:"Critical error",this.requestUpdate(),console.error("Error:",t))}fetchData(t,e){const{id:a,actionid:i,target:n}=e||{};let s="";""!==this.authentication&&"basic"!==this.authentication||(s=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(s=`Bearer ${this.token}`);const r={method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:s},mode:"cors"};let o=`${this.url}/api/application/v2/`;switch(t){case"portal":o+=`portals/${this.portalName}`;break;case"assignment":o+=`assignments/${a}`;break;case"view":o+=`cases/${a}/views/${i}`;break;case"caseaction":o+=`cases/${a}/actions/${i}`;break;case"attachment":o+=`attachments/${a}`;break;case"attachments":o+=`cases/${a}/attachments`;break;case"attachmentcategories":o+=`cases/${a}/attachment_categories`}fetch(o,r).then((a=>{if("assignment"===t)this.etag=a.headers.get("etag");else if("attachment"===t)return a.text();return a.ok||404===a.status?a.json():401===a.status?(this.token="",this.sendData("authenticate",{...e,type:t,cmd:"fetchData"}),a.json()):Promise.reject(a)})).then((e=>{try{if(e.errors&&e.errors.length>0)return;if(e.errorDetails&&e.errorDetails.length>0)return this.errorMsg=`Error ${e.errorDetails[0].message}: ${e.localizedValue}`,this.clearLoadingIndicator(),this.requestUpdate(),void console.error("Error:",e);const s=this.getRenderRoot().querySelector("#case-data");switch(t){case"portal":this.casetypes={};for(const t in e.data.D_pzCasesAvailableToCreateForPortal.pxResults){const a=e.data.D_pzCasesAvailableToCreateForPortal.pxResults[t];"workList"===this.action&&""!==this.casetype&&this.casetype!==a.pyClassName||(this.casetypes[a.pyClassName]={canCreate:!0,name:a.pyLabel})}if(this.cases=[],e.data.D_pyUserWorkList.pxResults.length>0)for(const t in e.data.D_pyUserWorkList.pxResults){const a=e.data.D_pyUserWorkList.pxResults[t];this.cases.push({name:a.pyLabel,caseID:a.pxRefObjectKey,urgency:a.pxUrgencyAssign,ID:a.pzInsKey})}this.requestUpdate();break;case"assignment":this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel,this.caseID=this.casedata.content.pzInsKey,this.data.caseID=this.caseID,this.data.ID=a,this.actionID=this.casedata.content.pyViewName,this.casepyStatusWork=this.casedata.status,this.data.actions=this.casedata.availableActions,this.name=this.casedata.stageLabel,L(ga(e.uiResources.resources.views[this.actionID],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),s),this.requestUpdate(),s.focus();break;case"view":if(!s){console.error("Error: case data are not present when retrieving the page");break}this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel?this.casedata.content.pyLabel:this.casedata.name,this.casedata.actions=this.casedata.availableActions,this.casedata.content.pyID=this.casedata.ID,this.data.ID=this.casedata.ID,this.casepyStatusWork=this.casedata.status,this.name=this.casedata.stageLabel,this.content={},"true"===this.bShowAttachments&&this.fetchData("attachments",{id:this.caseID}),this.name=e.data.caseInfo.name,L(ma(e.uiResources.resources.views[i],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,this),s),this.requestUpdate(),s.focus();break;case"caseaction":L(ga(e.uiResources.resources.views[e.uiResources.root.config.name],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),s),this.requestUpdate(),s.focus();break;case"attachments":let t=e.attachments;t||(t=[]),this.numAttachments=t.length,n&&L(Xt(n,t,this.caseID,this),n),this.requestUpdate();break;case"attachmentcategories":this.attachmentcategories=e.attachment_categories;break;case"attachment":n(e)}}catch(t){this.errorMsg=`Error: ${t}`,this.requestUpdate(),console.error("Error:",t)}})).catch((t=>{this.genErrorMessage(t)}))}sendData(t,e){const{id:a,actionid:i,target:n}=e;let s="";""!==this.authentication&&"basic"!==this.authentication||(s=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(s=`Bearer ${this.token}`);const r={"Content-Type":"application/json;charset=UTF-8",Authorization:s},o={method:"POST",headers:r,mode:"cors"};let l=`${this.url}/api/application/v2/`;switch(this.validationMsg="",t){case"authenticate":"oauth2password"===this.authentication?o.body=`grant_type=password&client_id=${this.clientid}&client_secret=${this.clientsecret}&username=${this.username}&password=${this.password}`:"oauth2clientcredentials"===this.authentication&&(o.body=`grant_type=client_credentials&client_id=${this.clientid}&client_secret=${this.clientsecret}`),o.headers["Content-Type"]="application/x-www-form-urlencoded",l=`${this.url}/PRRestService/oauth2/v1/token`;break;case"newwork":l+="cases?viewType=form",o.body=JSON.stringify({caseTypeID:a,processID:"pyStartCase",content:{}});break;case"submitassignment":o.body=JSON.stringify({content:this.content}),o.method="PATCH",o.headers["If-Match"]=this.etag,l+=`assignments/${a}/actions/${i}?viewType=form`;break;case"submitcaseaction":o.body=JSON.stringify({content:this.content}),o.method="PATCH",o.headers["If-Match"]=this.etag,l+=`cases/${a}/actions/${i}?viewType=form`;break;case"uploadattachment":l+="attachments/upload",delete r["Content-Type"];const t=new FormData;t.append("File",i,i.name),o.body=t;break;case"attachments":l+=`cases/${a}/attachments`,o.body=JSON.stringify({attachments:i});break;case"deleteattachment":l+=`attachments/${a}`,o.method="DELETE"}fetch(l,o).then((a=>"deleteattachment"===t||"attachments"===t?a.text():("submitassignment"!==t&&"newwork"!==t||(this.etag=a.headers.get("etag")),200===a.status||201===a.status||a.status>=400&&a.status<500||500===a.status?(401===a.status&&(this.token="",this.sendData("authenticate",{...e,type:t,cmd:"sendData"})),a.json()):a.ok?Promise.resolve("ok"):Promise.reject(a)))).then((a=>{if(!(a.errors&&a.errors.length>0)){if(a.access_token)this.token=a.access_token,e!=={}&&e.type&&e.cmd&&("sendData"===e.cmd?this.sendData(e.type,e):this.fetchData(e.type,e));else if(a.errorDetails&&a.errorDetails.length>0){if(a.errorDetails[0].localizedValue){const t=this.getRenderRoot().querySelector("#case-data");$t(t,a.errorDetails),this.validationMsg=(t=>t.errorDetails?O`
    <ul>
      ${t.errorDetails.map((t=>"Error_Validation_Fail"===t.message?null:O`<li>${t.localizedValue}</li>`))}
    </ul>`:null)(a)}else this.errorMsg=`Error ${a.errorDetails[0].message}: ${a.localizedValue}`;this.clearLoadingIndicator(),n&&(n.disabled=!1,n.textContent="Save"),"submitassignment"===t&&this.fetchData("assignment",{id:this.assignmentID})}else{const e=this.getRenderRoot().querySelector("#case-data");if("deleteattachment"===t||"attachments"===t)this.fetchData("attachments",{id:this.caseID,target:n});else if("uploadattachment"===t){let t=i.name.lastIndexOf(".");-1===t&&(t=i.name.length);const e=i.name.substring(t+1),s=[{type:"File",category:i.category,fileType:e,name:i.displayName,ID:a.ID}];return void this.sendData("attachments",{id:this.caseID,actionid:s,target:n})}a.confirmationNote?(this.bShowConfirm=!0,this.caseID=a.data.caseInfo.ID,this.fetchData("view",{id:this.caseID,actionid:"pyReview"})):a.uiResources&&(this.bShowNew=!1,this.assignmentID=a.nextAssignmentInfo.ID,this.sendExternalEvent(t),this.data=a,this.casedata.content=a.data.caseInfo.content,this.data.name=this.casedata.content.pyLabel?this.casedata.content.pyLabel:this.casedata.name,this.caseID=this.casedata.content.pzInsKey,this.data.caseID=a.data.caseInfo.ID,this.data.ID=this.assignmentID,this.actionID=a.uiResources.root.config.name,this.casepyStatusWork=a.data.caseInfo.status,this.data.actions=a.data.caseInfo.availableActions,this.name=a.data.caseInfo.stageLabel,e&&(L(ga(a.uiResources.resources.views[this.actionID],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),e),e.focus()))}this.requestUpdate()}})).catch((t=>{this.genErrorMessage(t)}))}}class ya extends ba{constructor(...t){super(...t),this.resetError=t=>{this.errorMsg="",this.validationMsg="",this.actionAreaCancel(t)},this.reloadWorkList=t=>{this.cases=[],this.requestUpdate(),this.actionAreaCancel(t)},this.actionAreaCancel=t=>{t&&t.preventDefault(),this.bShowConfirm=!1,this.bShowNew=!1,this.caseID="",this.data={},this.content={},this.casedata={},this.attachmentcategories=[],this.casepyStatusWork="",this.assignmentID="",this.actionID="",this.errorMsg="",this.numAttachments=0,this.validationMsg="",this.name="","workList"===this.action?this.fetchData("portal"):this.dispatchEvent(new CustomEvent("message",{detail:{type:"cancel"}}))},this.actionAreaSave=t=>{t&&t.preventDefault(),null===t.target.getAttribute("data-submit")&&(t.target.textContent="Saving...",t.target.disabled=!0);const e=this.getRenderRoot().querySelector("#case-data");e&&(this.content={},yt(e,this.content),""!==this.assignmentID?this.sendData("savecase",{id:this.caseID,actionid:"",target:t.target}):this.sendData("savecase",{id:this.caseID,actionid:this.actionID,target:t.target}))},this.actionRefresh=()=>{const t=this.getRenderRoot().querySelector("#case-data");t&&(this.content={},this.validationMsg="",yt(t,this.content),this.requestUpdate(),this.fetchData("caseaction",{id:this.caseID,actionid:this.actionID}))},this.displayCasesTypes=()=>(t=>{const e=[],a=Object.entries(t);for(const t of a)e.push(O`
        <li role="menuitem" tabindex="-1" data-value="${t[0]}">${t[1].name}</li>
      `);return O`
    ${e}
  `})(this.casetypes),this.displayActions=()=>this.data.actions?fa(this.name,this.data):this.casedata.actions?fa(this.name,this.casedata):null,this.displayAttachments=t=>{this.fetchData("attachmentcategories",{id:this.caseID}),this.fetchData("attachments",{id:this.caseID,target:t})},this.submitForm=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");return this.content={},yt(a,this.content),a.checkValidity()?"create"!==e?""!==this.data.ID?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID}):this.sendData("submitcaseaction",{id:this.data.caseID,actionid:this.actionID}):this.sendData("newwork",{id:this.casetype}):a.reportValidity(),t.preventDefault(),!1},this.createCase=t=>{if(this.name="New Case",this.bShowNew=!0,t){let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&(this.casetype=e.getAttribute("data-value"),this.name=`New ${e.textContent} `)}this.content=this.initialContent,this.caseID="",this.data={},this.casedata={},this.casetypes[this.casetype]?this.sendData("newwork",{id:this.casetype}):(this.errorMsg=`Case '${this.casetype}' is not defined`,console.error(`Case '${this.casetype}' is not defined`)),this.requestUpdate()},this.runAction=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&null!==e.getAttribute("data-value")&&(this.actionID=e.getAttribute("data-value"),this.name=e.innerText,this.data.ID="",this.actionRefresh());const a=this.getRenderRoot().querySelector("#case-data");null!=a&&L(Gt(),a)},this.openCase=t=>{t.preventDefault(),this.caseID=t.target.getAttribute("data-id"),this.name="",this.data={},this.casedata={},0===this.caseID.indexOf("ASSIGN-WORKLIST")?(this.assignmentID=this.caseID,this.caseID=""):this.assignmentID="";const e=this.getRenderRoot().querySelector("#case-data");null!=e&&L(Gt(),e),this.requestUpdate()},this.getData=(t,e)=>{this.dataPages[t]?L(le(this.dataPages[t]),e.nextElementSibling):this.fetchData("data",{id:t,element:e})},this.refreshAssignment=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");let i=t;if(a){if(this.content={},yt(a,this.content),i){"svg"===i.tagName&&(i=i.parentNode);const t=i.getAttribute("data-action-click"),e=i.getAttribute("data-ref");null!==e&&null!=t&&("addRow"===t?gt(this.content,e,i.getAttribute("data-newrow")):"deleteRow"===t&&mt(this.content,e))}!0===this.bShowNew?this.sendData("refreshnew",{id:this.casetype,refreshFor:e}):this.sendData("refreshassignment",{id:this.assignmentID,actionid:this.actionID,refreshFor:e})}},this.clickHandler=t=>{let e=t.target;"svg"===e.tagName&&(e=e.parentNode);const a=e.getAttribute("data-action-click");e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e),ft(e,"click")?(this.refreshAssignment(e,bt(e,"click")),t.preventDefault()):"BUTTON"===e.tagName&&(t.preventDefault(),null!==e.getAttribute("data-submit")&&"save"!==e.getAttribute("data-submit")?this.submitForm(t,e.getAttribute("data-submit")):("addRow"===a||"deleteRow"===a)&&this.refreshAssignment(e))},this.changeHandler=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e.setCustomValidity(""),e.classList.remove("error-field"),ft(e,"change")&&this.refreshAssignment(e,bt(e,"change"))},this.keyupHandler=t=>{const e=t.target;"TEXTAREA"===e.tagName&&(e.style.cssText="height:auto; padding:0;",e.style.cssText=`height:${e.scrollHeight}px`)},this.focusHandler=t=>{const e=t.target;e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e)}}displayContent(){if(console.log("displayContent v2"),this.bShowSave="false",""!==this.errorMsg)return Ge(this.errorMsg,"true"===this.bShowCancel?this.resetError:null);if(("oauth2password"===this.authentication||"oauth2clientcredentials"===this.authentication)&&""===this.token)return this.sendData("authenticate",{}),null;if(this.casetypes||"createNewWork"!==this.action&&"workList"!==this.action?"createNewWork"===this.action&&""===this.caseID&&this.casetypes&&this.casetypes[this.casetype]?this.sendData("newwork",{id:this.casetype}):""===this.name&&("openAssignment"===this.action&&""===this.assignmentID&&(this.assignmentID=this.caseID),""!==this.assignmentID?this.fetchData("assignment",{id:this.assignmentID}):""!==this.caseID&&this.fetchData("view",{id:this.caseID,actionid:"pyReview"})):(this.fetchData("portal"),"createNewWork"===this.action?this.bShowNew=!0:"workList"===this.action&&(this.bShowCancel="true")),this.bShowConfirm){const t=this.data.ID.split(" ")[1];return Je(this.casedata.name,t,this.casepyStatusWork,"true"===this.bShowAttachments?this.displayAttachments:null)}return""!==this.caseID||""!==this.assignmentID||this.bShowNew?O`
        ${pa(this.name,this.data,this.casedata,this.casepyStatusWork,this.numAttachments,this.displayActions,this.runAction,this.openCase,"true"===this.bShowAttachments?this.displayAttachments:null)}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
        <form id="case-data">${Gt()}</form>
      `:"workList"===this.action?Ye(this.title,this.cases,this.displayCasesTypes,this.reloadWorkList,"true"===this.bShowCreate?this.createCase:null,this.openCase):null}firstUpdated(){console.log("Initialization of the Web Component v2");const t=this.getRenderRoot();t&&(t.addEventListener("click",this.clickHandler),t.addEventListener("focusin",this.focusHandler),t.addEventListener("change",this.changeHandler),t.addEventListener("keyup",this.keyupHandler))}}Y("pega-mashup-v2")(class extends ya{createRenderRoot(){return this.attachShadow({mode:"open"})}getRenderRoot(){return this.shadowRoot}render(){return O`
      ${Ke()} ${this.displayContent()}
    `}}),Y("pega-mashup-light-v2")(class extends ya{createRenderRoot(){return this}getRenderRoot(){return this}render(){return O`
      ${this.displayContent()}
    `}})}();
