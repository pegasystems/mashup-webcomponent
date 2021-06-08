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
     */const w=t=>null===t||!("object"==typeof t||"function"==typeof t),C=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class S{constructor(t,e,a){this.dirty=!0,this.element=t,this.name=e,this.strings=a,this.parts=[];for(let t=0;t<a.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new D(this)}_getValue(){const t=this.strings,e=t.length-1,a=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=a[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!C(t))return t}let i="";for(let n=0;n<e;n++){i+=t[n];const e=a[n];if(void 0!==e){const t=e.value;if(w(t)||!C(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class D{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===f||w(t)&&t===this.value||(this.value=t,m(t)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const t=this.value;this.value=f,t(this)}this.value!==f&&this.committer.commit()}}class k{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=c()),t.__insert(this.endNode=c())}insertAfterPart(t){t.__insert(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}const t=this.__pendingValue;t!==f&&(w(t)?t!==this.value&&this.__commitText(t):t instanceof x?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):C(t)?this.__commitIterable(t):t===b?(this.value=b,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,a="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=a:this.__commitNode(document.createTextNode(a)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const a=new y(e,t.processor,this.options),i=a._clone();a.update(t.values),this.__commitNode(i),this.value=a}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let a,i=0;for(const n of t)a=e[i],void 0===a&&(a=new k(this.options),e.push(a),0===i?a.appendIntoPart(this):a.insertAfterPart(e[i-1])),a.setValue(n),a.commit(),i++;i<e.length&&(e.length=i,this.clear(a&&a.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class _{constructor(t,e,a){if(this.value=void 0,this.__pendingValue=void 0,2!==a.length||""!==a[0]||""!==a[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=a}setValue(t){this.__pendingValue=t}commit(){for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=f}}class I extends S{constructor(t,e,a){super(t,e,a),this.single=2===a.length&&""===a[0]&&""===a[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends D{}let T=!1;(()=>{try{const t={get capture(){return T=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class z{constructor(t,e,a){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=a,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=this.__pendingValue,e=this.value,a=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||a);a&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=R(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=f}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const R=t=>t&&(T?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
     */;function N(t){let e=E.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},E.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(a);return i=e.keyString.get(n),void 0===i&&(i=new r(t,t.getTemplateElement()),e.keyString.set(n,i)),e.stringsArray.set(t.strings,i),i}const E=new Map,M=new WeakMap,L=(t,a,i)=>{let n=M.get(a);void 0===n&&(e(a,a.firstChild),M.set(a,n=new k(Object.assign({templateFactory:N},i))),n.appendInto(a)),n.setValue(t),n.commit()};
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
class{handleAttributeExpressions(t,e,a,i){const n=e[0];if("."===n){return new I(t,e.slice(1),a).parts}if("@"===n)return[new z(t,e.slice(1),i.eventContext)];if("?"===n)return[new _(t,e.slice(1),a)];return new S(t,e,a).parts}handleTextExpression(t){return new k(t)}};
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
     */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const O=(t,...e)=>new x(t,e,"html",P)
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
     */,q=(t,e)=>`${t}--${e}`;let U=!0;void 0===window.ShadyCSS?U=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),U=!1);const F=t=>e=>{const i=q(e.type,t);let n=E.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},E.set(i,n));let s=n.stringsArray.get(e.strings);if(void 0!==s)return s;const o=e.strings.join(a);if(s=n.keyString.get(o),void 0===s){const a=e.getTemplateElement();U&&window.ShadyCSS.prepareTemplateDom(a,t),s=new r(e,a),n.keyString.set(o,s)}return n.stringsArray.set(e.strings,s),s},j=["html","svg"],H=new Set,V=(t,e,a)=>{H.add(t);const i=a?a.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:s}=n;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(i,t);const r=document.createElement("style");for(let t=0;t<s;t++){const e=n[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{j.forEach((e=>{const a=E.get(q(e,t));void 0!==a&&a.keyString.forEach((t=>{const{element:{content:e}}=t,a=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{a.add(t)})),h(t,a)}))}))})(t);const o=i.content;a?function(t,e,a=null){const{element:{content:i},parts:n}=t;if(null==a)return void i.appendChild(e);const s=document.createTreeWalker(i,133,null,!1);let r=p(n),o=0,l=-1;for(;s.nextNode();)for(l++,s.currentNode===a&&(o=u(e),a.parentNode.insertBefore(e,a));-1!==r&&n[r].index===l;){if(o>0){for(;-1!==r;)n[r].index+=o,r=p(n,r);return}r=p(n,r)}}(a,r,o.firstChild):o.insertBefore(r,o.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const l=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(a){o.insertBefore(r,o.firstChild);const t=new Set;t.add(r),h(a,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const B={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},W=(t,e)=>e!==t&&(e==e||t==t),Z={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:W},J="finalized";class Y extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,a)=>{const i=this._attributeNameForProperty(a,e);void 0!==i&&(this._attributeToPropertyMap.set(i,a),t.push(i))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=Z){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const a="symbol"==typeof t?Symbol():`__${t}`,i=this.getPropertyDescriptor(t,a,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,a){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdateInternal(t,n,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||Z}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(J)||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const a of e)this.createProperty(a,t[a])}}static _attributeNameForProperty(t,e){const a=e.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,a=W){return a(t,e)}static _propertyValueFromAttribute(t,e){const a=e.type,i=e.converter||B,n="function"==typeof i?i:i.fromAttribute;return n?n(t,a):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const a=e.type,i=e.converter;return(i&&i.toAttribute||B.toAttribute)(t,a)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,a){e!==a&&this._attributeToProperty(t,a)}_propertyToAttribute(t,e,a=Z){const i=this.constructor,n=i._attributeNameForProperty(t,a);if(void 0!==n){const t=i._propertyValueToAttribute(e,a);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const a=this.constructor,i=a._attributeToPropertyMap.get(t);if(void 0!==i){const t=a.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=a._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,a){let i=!0;if(void 0!==t){const n=this.constructor;a=a||n.getPropertyOptions(t),n._valueHasChanged(this[t],e,a.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==a.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,a))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}Y.finalized=!0;
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
const G=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:a,elements:i}=e;return{kind:a,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e),X=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(a){a.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(a){a.createProperty(e.key,t)}};function K(t){return(e,a)=>void 0!==a?((t,e,a)=>{e.constructor.createProperty(a,t)})(t,e,a):X(t,e)}
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const at={};class it extends Y{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,a)=>t.reduceRight(((t,a)=>Array.isArray(a)?e(a,t):(t.add(a),t)),a),a=e(t,new Set),i=[];a.forEach((t=>i.unshift(t))),this._styles=i}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!Q){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new et(String(e),tt)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Q?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==at&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return at}}it.finalized=!0,it.render=(t,a,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,s=M.has(a),r=U&&11===a.nodeType&&!!a.host,o=r&&!H.has(n),l=o?document.createDocumentFragment():a;if(L(t,l,Object.assign({templateFactory:F(n)},i)),o){const t=M.get(l);M.delete(l);const i=t.value instanceof y?t.value.template:void 0;V(n,l,i),e(a,a.firstChild),a.appendChild(l),M.set(a,t)}!s&&r&&window.ShadyCSS.styleElement(a.host)},it.shadowRootOptions={mode:"open"};
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
const nt=new WeakMap,st=(rt=t=>e=>{const a=nt.get(e);if(void 0===t&&e instanceof D){if(void 0!==a||!nt.has(e)){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else t!==a&&e.setValue(t);nt.set(e,t)},(...t)=>{const e=rt(...t);return g.set(e,!0),e});var rt;const ot=t=>`0${t}`.slice(-2),lt=t=>{if(t.endsWith(" GMT")&&23===t.length)return new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T${t.substring(9,11)}:${t.substring(11,13)}:${t.substring(13,19)}Z`);if(8===t.length){let e=new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T00:00:00.000Z`);return e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),e}if(10===t.length){let e=new Date(`${t.substring(6,10)}-${t.substring(0,2)}-${t.substring(3,5)}T00:00:00.000Z`);return e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),e}return null},ct=t=>t&&"string"==typeof t?t.replace(/&amp;|&lt;|&gt;|&#39;|&#40;|&#41;|&quot;/g,(t=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&#40;":"(","&#41;":")","&quot;":'"'}[t]||t))):"",dt=(t,e,a)=>{if("string"!=typeof e)return;const i=e.split(".");let n=t;for(const t in i){let e=i[t];const s=e.indexOf("(");if(-1===s)t<i.length-1?void 0===n[e]&&(n[e]={}):n[e]=a,n=n[e];else{const t=e.substring(s+1,e.length-1);e=e.substring(0,s),void 0===n[e]&&(n[e]=[]);for(let a=n[e].length;a<t;a++)n[e].push({});n=n[e][t-1]}}},ht=(t,e)=>{if("string"!=typeof e)return null;let a=t;const i=e.split(".");for(const t in i){const e=i[t],n=e.indexOf("(");if(-1===n){if(void 0===a[e])return null;a=a[e]}else{const t=e.substring(n+1,e.length-1),i=a[e.substring(0,n)];if(!(i&&Array.isArray(i)&&i.length>=t))return null;a=i[t-1]}}return a},ut=t=>{for(const e in t)"object"==typeof t[e]?ut(t[e]):"string"==typeof t[e]&&(t[e]="")},pt=(t,e)=>{for(const a in t)if("fieldID"===a)e.push(t.fieldID);else{const i=t[a];i.fieldID?e.push(i.fieldID):"object"==typeof i&&pt(i,e)}},gt=(t,e,a)=>{let i=ht(t,e);if(null===i&&(i=[],dt(t,e,i)),Array.isArray(i))if(a&&"string"==typeof a){const t={},e=a.split(",");for(const a in e)t[e[a]]="";i.push(t)}else{if(0===i.length)return;const t={...i[0]};ut(t),i.push(t)}},mt=(t,e)=>{let a,i=e;-1!==e.indexOf(").pyTemplate")&&(a=i.substring(e.lastIndexOf("(")+1,e.lastIndexOf(")")),i=i.substring(0,e.lastIndexOf("(")));const n=ht(t,i);if(Array.isArray(n))if(1!==n.length)if(a){if(n.length<a)return;n.splice(a-1,1)}else n.length-=1;else for(const t in n[0])"pxObjClass"!==t&&(n[0][t]="")},ft=(t,e)=>{const a=t.getAttribute(`data-action-${e}`);return!(!a||"postValue"!==a&&0!==a.indexOf("refresh"))},bt=(t,e)=>{const a=t.getAttribute(`data-action-${e}`);return a&&0===a.indexOf("refresh")?a.replace("refresh-",""):""};function yt(t,e,a){try{switch(e){case">":return parseInt(t,10)>parseInt(a,10);case"<":return parseInt(t,10)<parseInt(a,10);case">=":return parseInt(t,10)>=parseInt(a,10);case"<=":return parseInt(t,10)<=parseInt(a,10);case"==":return`${t}`==`${a}`;case"!=":return`${t}`!=`${a}`}}catch(t){}return!1}const vt=(t,e)=>{const a=t.replace("@E ","").split("&&");for(const t in a){const i=a[t].trim().match(/[\w.]+|[><=!]+|'[^']+'/g);if(3===i.length){const t=e[i[0].substring(1)];if(void 0!==t&&!yt(t,i[1],i[2].replace(/^'|'$/g,"")))return!1}}return!0},$t=(t,e)=>{for(const a of t.elements)if("INPUT"===a.tagName||"TEXTAREA"===a.tagName||"SELECT"===a.tagName){const t=a.getAttribute("data-ref");if(null!==t&&"pyID"!==t)if("INPUT"===a.tagName){const i=a.getAttribute("type");if("checkbox"===i)dt(e,t,a.checked);else if("radio"===i)a.checked&&dt(e,t,a.value);else if("tel"===i){let i=a.value;"SELECT"===a.parentNode.firstElementChild.tagName&&"field-countrycode"===a.parentNode.firstElementChild.className&&(i=a.parentNode.firstElementChild.value+i),dt(e,t,i)}else if("date"===i){let i;a.valueAsDate&&(i=new Date(a.valueAsDate)),i&&i instanceof Date&&i.getTime()==i.getTime()||(i=new Date(a.value)),i&&i instanceof Date&&i.getTime()==i.getTime()?(i=new Date(i.getTime()+6e4*i.getTimezoneOffset()),dt(e,t,`${ot(i.getMonth()+1)}/${ot(i.getDate())}/${i.getFullYear()}`)):dt(e,t,a.value)}else dt(e,t,a.value)}else dt(e,t,a.value)}if(t&&t.querySelectorAll){const i=t.querySelectorAll("[contenteditable]");for(let t=0;t<i.length;t++){const n=i[t],s=n.getAttribute("data-ref");dt(e,s,(a=n.innerHTML)&&"string"==typeof a?a.replace(/[&<>'"]/g,(t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","(":"&#40;",")":"&#41;",'"':"&quot;"}[t]||t))):"")}}var a},xt=t=>{if(void 0===t.content)return{};const e={};for(const a in t.content){const i=t.content[a];"object"!=typeof i||0===a.indexOf("px")||Array.isArray(i)||"pyWorkParty"===a||(e[a]=i)}return e},wt=(t,e)=>{for(const a of t.elements)if("INPUT"===a.tagName||"TEXTAREA"===a.tagName||"SELECT"===a.tagName){const t=`.${a.getAttribute("data-ref")}`;if(null!==t&&"pyID"!==t)for(const i in e){if(e[i].Path===t){a.setCustomValidity(ct(e[i].ValidationMessage)),a.classList.add("error-field"),a.reportValidity();break}if(e[i].erroneousInputOutputFieldInPage===t){a.setCustomValidity(ct(e[i].localizedValue)),a.classList.add("error-field"),a.reportValidity();break}}}},Ct=(t,e)=>{if(t.control&&t.control.actionSets&&t.control.actionSets.length>0)for(const a of t.control.actionSets)if(a.events.length>0&&a.actions.length>0&&a.events[0].event===e){let t=a.actions[0].action;return"refresh"===t&&""!==a.actions[0].refreshFor&&(t+=`-${a.actions[0].refreshFor}`),t}},St=t=>"pyTemplateButton"!==t.reference?t.reference:t.control&&t.control.modes?t.control.modes[1].tooltip:null,Dt=(t,e,a)=>{if(void 0===e)return null;const i=t.required&&!0!==t.readOnly?"icon-required":"";return"field-checkbox"===a?""!==t.label||!0===t.showLabel?O`<div class="field-caption dataLabelForWrite ${i}">${ct(t.label)}</div>`:null:"field-text"===a&&!0===t.readOnly&&"pxCheckbox"===t.control.type&&t.control.label?O`<label class="field-caption dataLabelForWrite">${ct(t.control.label)}</label>`:""!==t.label||!0===t.showLabel||!0===t.labelReserveSpace?O`<label class="field-caption dataLabelForWrite ${i}" for="${st(e)}">${ct(t.label)}</label>`:null},kt=(t,e,a,i)=>void 0===e?O`
      ${i}
    `:"field-button"!==a||(t=>!!(t.control&&t.control.actionSets&&t.control.actionSets.length>0))(t)?"field-radiogroup"===a?O`
    <div class="flex content-item field-item ${a}"><fieldset><legend>${Dt(t,e,a)}</legend>${i}</fielset></div>
  `:O`
    <div class="flex content-item field-item ${a}">${Dt(t,e,a)}${i}</div>
  `:null,_t=()=>O`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
<path d="M11.290625,2 C11.290625,2 13.2539062,2 13.2539062,2 C13.2539062,2 13.2539062,22.59375 13.2539062,22.59375 C13.2539062,22.59375 11.290625,22.59375 11.290625,22.59375 C11.290625,22.59375 11.290625,2 11.290625,2 Z M22.59375,11.3390625 C22.59375,11.3390625 22.59375,13.2546875 22.59375,13.2546875 C22.59375,13.2546875 2,13.2546875 2,13.2546875 C2,13.2546875 2,11.3390625 2,11.3390625 C2,11.3390625 22.59375,11.3390625 22.59375,11.3390625 L22.59375,11.3390625 Z"/>
</svg>`,It=()=>O`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.3375,3 C20.3375,3 21.7742187,4.43671875 21.7742187,4.43671875 C21.7742187,4.43671875 4.43671875,21.4867188 4.43671875,21.4867188 C4.43671875,21.4867188 3,20.19375 3,20.19375 C3,20.19375 20.3375,3 20.3375,3 Z M21.7265625,20.0976563 C21.7265625,20.0976563 20.3859375,21.534375 20.3859375,21.534375 C20.3859375,21.534375 3.00078125,4.3890625 3.00078125,4.3890625 C3.00078125,4.3890625 4.38984375,3 4.38984375,3 C4.38984375,3 21.7273438,20.0976563 21.7273438,20.0976563 L21.7265625,20.0976563 Z"/>
</svg>`,At=()=>O`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1140625,3.96875 C22.1140625,3.96875 22.1140625,3.96875 22.1140625,3.96875 C22.1140625,3.96875 17.46875,3.96875 17.46875,3.96875 C17.46875,3.96875 16.9898437,2.14921875 16.9898437,2.14921875 C16.9421875,1.8140625 16.7507812,1.57421875 16.5109375,1.33515625 C16.2234375,1.09609375 15.8882813,1 15.553125,1 C15.553125,1 15.553125,1 15.553125,1 C15.553125,1 9.03984375,1 9.03984375,1 C8.7046875,1 8.4171875,1.09609375 8.1296875,1.2875 C7.8421875,1.52734375 7.65078125,1.76640625 7.603125,2.1015625 C7.603125,2.1015625 7.603125,2.1015625 7.603125,2.1015625 C7.603125,2.1015625 7.12421875,3.96953125 7.12421875,3.96953125 C7.12421875,3.96953125 2.47890625,3.96953125 2.47890625,3.96953125 C2.14375,3.96953125 2,4.11328125 2,4.4484375 C2,4.78359375 2.14375,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 2.47890625,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 4.01171875,4.92734375 4.01171875,4.92734375 C4.01171875,4.92734375 4.921875,23.1742188 4.921875,23.1742188 C4.96953125,23.5570312 5.11328125,23.8929688 5.40078125,24.1320313 C5.63984375,24.4195312 5.97578125,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 6.40625,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 18.2359375,24.5632812 18.2359375,24.5632812 C18.6671875,24.5632812 19.0023438,24.4195312 19.2898438,24.1320313 C19.5289063,23.8929688 19.6726562,23.5570312 19.7210938,23.1742188 C19.7210938,23.1742188 19.7210938,23.1742188 19.7210938,23.1742188 C19.7210938,23.1742188 20.63125,4.92734375 20.63125,4.92734375 C20.63125,4.92734375 22.115625,4.92734375 22.115625,4.92734375 C22.4507812,4.92734375 22.5945312,4.78359375 22.5945312,4.4484375 C22.5945312,4.11328125 22.4507812,3.96953125 22.115625,3.96953125 L22.1140625,3.96875 Z M8.17734375,3.96875 C8.17734375,3.96875 8.56015625,2.38828125 8.56015625,2.38828125 C8.6078125,2.1484375 8.79921875,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 9.0390625,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 15.5523437,2.00546875 15.5523437,2.00546875 C15.7914062,2.00546875 15.9835937,2.14921875 16.03125,2.38828125 C16.03125,2.38828125 16.03125,2.38828125 16.03125,2.38828125 C16.03125,2.38828125 16.4140625,3.96875 16.4140625,3.96875 C16.4140625,3.96875 8.1765625,3.96875 8.1765625,3.96875 L8.17734375,3.96875 Z M19.6710938,4.9265625 C19.6710938,4.9265625 18.7609375,23.1257812 18.7609375,23.1257812 C18.7132812,23.4132812 18.521875,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 18.234375,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 6.4046875,23.5570312 6.4046875,23.5570312 C6.1171875,23.5570312 5.92578125,23.4132812 5.878125,23.1257812 C5.878125,23.1257812 5.878125,23.1257812 5.878125,23.1257812 C5.878125,23.1257812 4.96796875,4.9265625 4.96796875,4.9265625 C4.96796875,4.9265625 19.6710938,4.9265625 19.6710938,4.9265625 L19.6710938,4.9265625 Z M8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,18.1929687 8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,10.3382812 8.84765625,10.3382812 C8.84765625,10.003125 9.0390625,9.859375 9.37421875,9.859375 C9.37421875,9.859375 9.37421875,9.859375 9.37421875,9.859375 C9.709375,9.859375 9.853125,10.003125 9.853125,10.3382812 C9.853125,10.3382812 9.853125,10.3382812 9.853125,10.3382812 C9.853125,10.3382812 9.853125,18.1929687 9.853125,18.1929687 C9.853125,18.528125 9.709375,18.671875 9.37421875,18.671875 C9.37421875,18.671875 9.37421875,18.671875 9.37421875,18.671875 C9.0390625,18.671875 8.84765625,18.528125 8.84765625,18.1929687 Z M14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,18.1929687 14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,10.3382812 14.7382812,10.3382812 C14.7382812,10.003125 14.8820313,9.859375 15.2171875,9.859375 C15.2171875,9.859375 15.2171875,9.859375 15.2171875,9.859375 C15.5523437,9.859375 15.74375,10.003125 15.74375,10.3382812 C15.74375,10.3382812 15.74375,10.3382812 15.74375,10.3382812 C15.74375,10.3382812 15.74375,18.1929687 15.74375,18.1929687 C15.74375,18.528125 15.5523437,18.671875 15.2171875,18.671875 C15.2171875,18.671875 15.2171875,18.671875 15.2171875,18.671875 C14.8820313,18.671875 14.7382812,18.528125 14.7382812,18.1929687 Z M11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,19.1507813 11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,9.38046875 11.8164062,9.38046875 C11.8164062,9.0453125 11.9601563,8.85390625 12.2953125,8.85390625 C12.6304687,8.85390625 12.7742187,9.0453125 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,9.38046875 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,19.1507813 12.7742187,19.1507813 C12.7742187,19.4859375 12.6304687,19.6773437 12.2953125,19.6773437 C11.9601563,19.6773437 11.8164062,19.4859375 11.8164062,19.1507813 Z"/>
</svg>`,Tt=()=>O`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.5226562,11.6265625 C20.6664062,11.6265625 20.7617188,11.6742188 20.8578125,11.7703125 C20.9539062,11.8664063 21.0015625,11.9617188 21.0015625,12.1054688 C21.0015625,12.2492188 20.9539062,12.3445313 20.8578125,12.440625 C20.8578125,12.440625 20.8578125,12.440625 20.8578125,12.440625 C20.8578125,12.440625 13.2429687,20.0554687 13.2429687,20.0554687 C12.1414062,21.109375 10.8484375,21.6359375 9.41171875,21.6359375 C7.975,21.6359375 6.68203125,21.109375 5.58046875,20.0554687 C5.58046875,20.0554687 5.58046875,20.0554687 5.58046875,20.0554687 C4.5265625,19.0015625 4,17.75625 4,16.271875 C4,16.271875 4,16.271875 4,16.271875 C4,14.8351563 4.5265625,13.5421875 5.58046875,12.440625 C5.58046875,12.440625 5.58046875,12.440625 5.58046875,12.440625 C5.58046875,12.440625 14.9671875,3.14921875 14.9671875,3.14921875 C15.7335937,2.3828125 16.64375,2 17.7453125,2 C18.846875,2 19.7570312,2.3828125 20.5234375,3.14921875 C20.5234375,3.14921875 20.5234375,3.14921875 20.5234375,3.14921875 C21.2898437,3.86796875 21.6726562,4.77734375 21.6726562,5.87890625 C21.6726562,5.87890625 21.6726562,5.87890625 21.6726562,5.87890625 C21.6726562,6.98046875 21.2898437,7.890625 20.5234375,8.65703125 C20.5234375,8.65703125 20.5234375,8.65703125 20.5234375,8.65703125 C20.5234375,8.65703125 11.8546875,17.2773438 11.8546875,17.2773438 C11.3757813,17.75625 10.8007812,17.9960938 10.1304687,17.9960938 C10.1304687,17.9960938 10.1304687,17.9960938 10.1304687,17.9960938 C9.5078125,17.9960938 8.88515625,17.7570313 8.35859375,17.2773438 C8.35859375,17.2773438 8.35859375,17.2773438 8.35859375,17.2773438 C7.8796875,16.7984375 7.63984375,16.2234375 7.63984375,15.553125 C7.63984375,14.8828125 7.87890625,14.3078125 8.35859375,13.8289062 C8.35859375,13.8289062 8.35859375,13.8289062 8.35859375,13.8289062 C8.35859375,13.8289062 16.6921875,5.54375 16.6921875,5.54375 C16.7882812,5.44765625 16.93125,5.4 17.075,5.4 C17.075,5.4 17.075,5.4 17.075,5.4 C17.21875,5.4 17.3140625,5.44765625 17.4101562,5.54375 C17.50625,5.63984375 17.5539062,5.73515625 17.5539062,5.87890625 C17.5539062,5.87890625 17.5539062,5.87890625 17.5539062,5.87890625 C17.5539062,6.02265625 17.50625,6.16640625 17.4101562,6.26171875 C17.4101562,6.26171875 17.4101562,6.26171875 17.4101562,6.26171875 C17.4101562,6.26171875 9.0765625,14.4992187 9.0765625,14.4992187 C8.7890625,14.7867187 8.6453125,15.121875 8.6453125,15.553125 C8.6453125,15.984375 8.7890625,16.3195313 9.0765625,16.6070312 C9.3640625,16.8945312 9.69921875,17.0382813 10.1304687,17.0382813 C10.1304687,17.0382813 10.1304687,17.0382813 10.1304687,17.0382813 C10.5132812,17.0382813 10.8492187,16.8945312 11.1359375,16.6070312 C11.1359375,16.6070312 11.1359375,16.6070312 11.1359375,16.6070312 C11.1359375,16.6070312 19.8523437,7.98671875 19.8523437,7.98671875 C20.4273437,7.41171875 20.7140625,6.69375 20.7140625,5.8796875 C20.7140625,5.8796875 20.7140625,5.8796875 20.7140625,5.8796875 C20.7140625,5.065625 20.4265625,4.3953125 19.8523437,3.8203125 C19.8523437,3.8203125 19.8523437,3.8203125 19.8523437,3.8203125 C19.2296875,3.2453125 18.5117187,2.95859375 17.7453125,2.95859375 C17.7453125,2.95859375 17.7453125,2.95859375 17.7453125,2.95859375 C16.93125,2.95859375 16.2609375,3.24609375 15.6859375,3.8203125 C15.6859375,3.8203125 15.6859375,3.8203125 15.6859375,3.8203125 C15.6859375,3.8203125 6.29921875,13.159375 6.29921875,13.159375 C5.4375,13.9734375 5.00625,14.9789062 5.00625,16.2726562 C5.00625,16.2726562 5.00625,16.2726562 5.00625,16.2726562 C5.00625,17.5179688 5.4375,18.5234375 6.29921875,19.3375 C6.29921875,19.3375 6.29921875,19.3375 6.29921875,19.3375 C7.1609375,20.1992188 8.21484375,20.6304688 9.4125,20.6304688 C9.4125,20.6304688 9.4125,20.6304688 9.4125,20.6304688 C10.7054687,20.6304688 11.7117187,20.1992188 12.5257812,19.3375 C12.5257812,19.3375 12.5257812,19.3375 12.5257812,19.3375 C12.5257812,19.3375 20.1882812,11.7703125 20.1882812,11.7703125 C20.284375,11.6742188 20.3796875,11.6265625 20.5234375,11.6265625 L20.5226562,11.6265625 Z"/>
</svg>`,zt=()=>O`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1632813,6.753125 C22.1632813,6.753125 22.1632813,6.753125 22.1632813,6.753125 C22.1632813,6.753125 15.8414062,0.43125 15.8414062,0.43125 C15.6023437,0.14375 15.21875,0 14.7875,0 C14.7875,0 14.7875,0 14.7875,0 C14.7875,0 3.48515625,0 3.48515625,0 C3.05390625,0 2.71875,0.14375 2.43125,0.43125 C2.14375,0.71875 2,1.05390625 2,1.48515625 C2,1.48515625 2,1.48515625 2,1.48515625 C2,1.48515625 2,23.0367188 2,23.0367188 C2,23.4679688 2.14375,23.803125 2.43125,24.090625 C2.71875,24.378125 3.05390625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 3.48515625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 21.109375,24.521875 21.109375,24.521875 C21.540625,24.521875 21.8757812,24.378125 22.1632813,24.090625 C22.4507812,23.803125 22.5945312,23.4679688 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,23.0367188 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,7.80703125 22.5945312,7.80703125 C22.5945312,7.37578125 22.4507812,7.040625 22.1632813,6.753125 Z M15.6976563,1.6765625 C15.6976563,1.6765625 20.8703125,6.84921875 20.8703125,6.84921875 C20.8703125,6.84921875 16.225,6.84921875 16.225,6.84921875 C15.8898438,6.84921875 15.7460938,6.70546875 15.7460938,6.3703125 C15.7460938,6.3703125 15.7460938,6.3703125 15.7460938,6.3703125 C15.7460938,6.3703125 15.6984375,1.6765625 15.6984375,1.6765625 L15.6976563,1.6765625 Z M21.6367188,7.8546875 C21.6367188,7.8546875 21.6367188,23.0367188 21.6367188,23.0367188 C21.6367188,23.371875 21.4453125,23.515625 21.1101563,23.515625 C21.1101563,23.515625 21.1101563,23.515625 21.1101563,23.515625 C21.1101563,23.515625 3.4859375,23.515625 3.4859375,23.515625 C3.15078125,23.515625 2.959375,23.371875 2.959375,23.0367188 C2.959375,23.0367188 2.959375,23.0367188 2.959375,23.0367188 C2.959375,23.0367188 2.959375,1.48515625 2.959375,1.48515625 C2.959375,1.15 3.15078125,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 3.4859375,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 14.740625,0.95859375 14.740625,0.95859375 C14.740625,0.95859375 14.740625,6.3703125 14.740625,6.3703125 C14.740625,6.8015625 14.884375,7.13671875 15.171875,7.42421875 C15.459375,7.71171875 15.7945313,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 16.2257813,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 21.6375,7.85546875 21.6375,7.85546875 L21.6367188,7.8546875 Z"/>
</svg>`,Rt=(t,e,a)=>{if(void 0===t||void 0===t.control||void 0===t.control.type)return null;if(t.customAttributes&&"none"===t.customAttributes.display)return null;if(!0===a||!0===t.readOnly||"pxHidden"===t.control.type)return kt(t,e,"field-text",Nt(t,e));switch(t.control.type){case"pxPhone":case"pxTextInput":return kt(t,e,"field-textinput",Et(t,e));case"pxInteger":case"pxNumber":return kt(t,e,"field-numberinput",Lt(t,e));case"pxCurrency":return kt(t,e,"field-currencyinput",Pt(t,e));case"pxEmail":return kt(t,e,"field-emailinput",Ot(t,e));case"pxTextArea":return kt(t,e,"field-textarea",qt(t,e));case"pxRadioButtons":return kt(t,e,"field-radiogroup",Zt(t,e));case"pxCheckbox":return kt(t,e,"field-checkbox",Jt(t,e));case"pxDropdown":return kt(t,e,"field-dropdown",Yt(t,e));case"pxDisplayText":return kt(t,e,"field-text",Nt(t,e));case"pxIcon":return kt(t,e,"field-icon",Ut(t,e));case"pxLink":case"pxURL":return kt(t,e,"field-url",Ft(t,e));case"pxIconDeleteItem":return kt(t,e,"field-button",Ht(t,e));case"pxButton":return kt(t,e,"field-button",jt(t,e));case"pxDateTime":return"TimeOfDay"===t.type?kt(t,e,"field-time",Wt(t,e)):"Date"===t.type?kt(t,e,"field-date",Bt(t,e)):kt(t,e,"field-datetime",Vt(t,e));case"pxAutoComplete":return kt(t,e,"field-combobox",Gt(t,e));case"pxSlider":return kt(t,e,"field-slider",Mt(t,e));default:return null}},Nt=(t,e)=>{if("pxDate"===t.control.type){let a=lt(t.value);if(a)if(t.control&&2===t.control.modes.length){let e={};switch(t.control.modes[1].dateFormat){case"DateTime-Short-YYYY":case"Date-DayMonthYear-Custom":case"Date-Mediun":e={year:"numeric",month:"short",day:"numeric"};break;case"Date-Short":e={year:"numeric",month:"numeric",day:"numeric"};break;case"Date-Long":e={year:"numeric",month:"long",day:"numeric"};break;case"Date-Full":e={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;default:e={}}a=new Intl.DateTimeFormat([],e).format(a)}else a=(new Intl.DateTimeFormat).format(a);else a=t.value;return O`
      <span class="dataValueRead" data-ref="${t.reference}" id="${st(e)}">${a}</span>
    `}if("pxDateTime"===t.control.type){let a=lt(t.value);if(a)if(t.control&&2===t.control.modes.length){let e={};switch(t.control.modes[1].dateTimeFormat){case"DateTime-Short-YYYY":e={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};break;default:e={}}a=new Intl.DateTimeFormat([],e).format(a)}else a=(new Intl.DateTimeFormat).format(a);else a=t.value;return O`
      <span class="dataValueRead" data-ref="${t.reference}" id="${st(e)}">${a}</span>
    `}if("pxTime"===t.control.type){let a=lt(t.value);if(a)if(t.control&&2===t.control.modes.length){const t={hour:"numeric",minute:"numeric"};a=new Intl.DateTimeFormat([],t).format(a)}else a=(new Intl.DateTimeFormat).format(a);else a=t.value;return O`
      <span class="dataValueRead" data-ref="${t.reference}" id="${st(e)}">${a}</span>
    `}if("pxHidden"===t.control.type)return O`
    <input type="text" style="display:none" data-ref="${t.reference}" id="${st(e)}" value="${ct(t.value)}"/>
    `;let a=t.value;if(t.control&&2===t.control.modes.length&&"locallist"===t.control.modes[0].listSource)for(const e of t.control.modes[0].options)e.key===a&&(a=e.value);return"pxCurrency"===t.control.type&&(a=`$${a}`),O`
    <span class="dataValueRead" data-ref="${t.reference}" id="${st(e)}">${ct(a)}</span>
  `},Et=(t,e)=>O`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="text"
    id="${st(e)}"
    value="${ct(t.value)}"
    data-action-change="${st(Ct(t,"change"))}"
    data-action-click="${st(Ct(t,"click"))}"
  />
`,Mt=(t,e)=>O`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="range"
    id="${st(e)}"
    value="${ct(t.value)}"
    data-action-change="${st(Ct(t,"change"))}"
    data-action-click="${st(Ct(t,"click"))}"
  />
`,Lt=(t,e)=>O`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="number"
    id="${st(e)}"
    value="${t.value}"
    data-action-change="${st(Ct(t,"change"))}"
    data-action-click="${st(Ct(t,"click"))}"
  />
`,Pt=(t,e)=>O`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="number"
    id="${st(e)}"
    value="${t.value}"
    data-action-change="${st(Ct(t,"change"))}"
    data-action-click="${st(Ct(t,"click"))}"
  />
`,Ot=(t,e)=>O`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="email"
    id="${st(e)}"
    value="${t.value}"
    data-action-change="${st(Ct(t,"change"))}"
    data-action-click="${st(Ct(t,"click"))}"
  />
`,qt=(t,e)=>O`
  <textarea
    data-ref="${t.reference}"
    rows="3"
    ?required="${!0===t.required}"
    id="${st(e)}"
    data-action-change="${st(Ct(t,"change"))}"
    data-action-click="${st(Ct(t,"click"))}"
  >
${ct(t.value)}</textarea
  >
`,Ut=(t,e)=>O`
  <i
    class="${t.control.modes[1].iconStyle}"
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    id="${st(e)}"
    value="${t.value}"
  />
`,Ft=(t,e)=>O`
  <a id="${st(e)}" data-ref="${t.reference}" href="${t.value}">${t.control.label}</a>
`,jt=(t,e)=>{const a=Ct(t,"click");return"deleteRow"===a?Ht(t,e):O`
  <button
  type='button' 
    class="${st(t.control.modes[1].controlFormat)} pzhc pzbutton"
    id="${st(e)}"
    data-ref="${st(St(t))}"
    data-action-click="${st(a)}"
  >${t.control.label}</button>`},Ht=(t,e)=>O`
  <button
    type='button' 
    class="pzhc pzbutton Icon"
    title="Delete row"
    id="${st(e)}"
    data-ref="${st(St(t))}"
    data-action-click="deleteRow"
  >${At()}</button>
`,Vt=(t,e)=>{let a=t.value;if(""!==a){let e=lt(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${e.getFullYear()}-${ot(e.getMonth()+1)}-${ot(e.getDate())}T${ot(e.getHours())}:${ot(e.getMinutes())}`):8===t.value.length&&(a=`${t.value.substring(0,4)}-${t.value.substring(4,6)}-${t.value.substring(6,8)}T00:00`)}return O`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      type="datetime-local"
      id="${st(e)}"
      value="${a}"
      data-action-change="${st(Ct(t,"change"))}"
    data-action-click="${st(Ct(t,"click"))}"
    />
  `},Bt=(t,e)=>{let a=t.value;if(""!==a){let e=lt(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${e.getFullYear()}-${ot(e.getMonth()+1)}-${ot(e.getDate())}`):8===t.value.length&&(a=`${t.value.substring(0,4)}-${t.value.substring(4,6)}-${t.value.substring(6,8)}`)}return O`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      type="date"
      id="${st(e)}"
      value="${a}"
      data-action-change="${st(Ct(t,"change"))}"
    data-action-click="${st(Ct(t,"click"))}"
    />
  `},Wt=(t,e)=>{let a=t.value;if(""!==a){let e=lt(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${ot(e.getHours())}-${ot(e.getMinutes())}-${ot(e.getSeconds())}`):8===t.value.length&&(a=`${t.value.substring(9,10)}:${t.value.substring(10,11)}:${t.value.substring(11,12)}`)}return O`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      type="time"
      id="${st(e)}"
      value="${a}"
      data-action-change="${st(Ct(t,"change"))}"
      data-action-click="${st(Ct(t,"click"))}"
    />
  `},Zt=(t,e)=>{let a;return t.control&&t.control.modes&&t.control.modes[0].options?a=t.control.modes[0].options:"True-False"===t.type&&(a=[{value:"true"},{value:"false"}]),void 0===a?null:O`
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
            data-action-change="${st(Ct(t,"change"))}"
          />
          <label for="${n}">${a.value}</label>
        </div>
      `}))}
  `},Jt=(t,e)=>O`
<div>
  <input
  data-ref="${t.reference}" 
  id="${st(e)}"
  type="checkbox" 
  ?checked=${"true"===t.value}
  data-action-change="${st(Ct(t,"change"))}"
  data-action-click="${st(Ct(t,"click"))}"
  />
  <label for="${st(e)}">${t.control.label}</label>
  </div>
`,Yt=(t,e)=>t.control&&t.control.modes[0]&&t.control.modes[0].options?O`<select
      data-ref="${t.reference}"
      id=${st(e)}
      ?required="${!0===t.required}"
      data-action-change="${st(Ct(t,"change"))}"
      data-action-click="${st(Ct(t,"click"))}">
        <option value="" title="Select...">Select...</option>
        ${t.control.modes[0].options.map((e=>O`
            <option ?selected=${e.key===t.value} value='${e.key}'>${e.value}</option>
          `))}
      </select>`:O`<input
      type='text'
      data-ref="${t.reference}"
      id=${st(e)}
      ?required="${!0===t.required}"
      data-action-change="${st(Ct(t,"change"))}"
      data-action-click="${st(Ct(t,"click"))}">
      </input>`,Gt=(t,e)=>{if(t.control.modes&&t.control.modes[0]&&t.control.modes[0].options)return O`
      <input
        data-ref="${t.reference}"
        list="${t.reference}"
        ?required="${!0===t.required}"
        type="text"
        class="combobox loaded"
        id="${st(e)}"
        value="${ct(t.value)}"
        data-action-change="${st(Ct(t,"change"))}"
        data-action-click="${st(Ct(t,"click"))}"
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
      data-action-change="${st(Ct(t,"change"))}"
      data-action-click="${st(Ct(t,"click"))}"
    />
    <datalist id="${t.reference}"></datalist>
  `},Xt=t=>""!==t.title?O`
      <div class="header-bar">
        <div class="header-content"><h3 class="header-title">${t.title}</h3></div>
      </div>
    `:null,Kt=(t,e)=>{let a=t.fieldListID;if(void 0!==t.reference&&(a=t.reference),"."===a.charAt(0)&&(a=a.substring(1)),t.newRow&&!0!==e){const e=[];return pt(t.newRow,e),O`
      <div class="table-action-area">
        ${"add-row"===t.testID?O`<button type="button" class="pzhc pzbutton Simple" data-newrow="${st(e.join())}"
        data-ref=${a} data-action-click="addRow">${_t()}Add item</button>`:""}
      </div>
    `}return null},Qt=t=>O`
  ${t.map((t=>O`
    <th scope='col'>${t.caption?O`${t.caption.value}`:""}</th>`))}
`,te=t=>O`
  ${t.map((t=>O`
    <tr>
      ${t.groups.map((t=>O`
      <td>${Rt(t.field)}</td>`))}
    </tr>`))}
`,ee=()=>O`
<span class="loading">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</span>
`,ae=(t,e,a,i,n)=>{const s=document.createElement("div");s.setAttribute("role","alertdialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-labelledby",t),s.setAttribute("aria-describedby",""),s.setAttribute("class","mashup-modal");const r=document.createElement("div");s.appendChild(r);const o='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',l=()=>{document.body.removeEventListener("click",c),document.body.removeEventListener("keydown",d),s&&(s.previousElementSibling&&(s.previousElementSibling.removeAttribute("aria-hidden"),s.previousElementSibling.focus()),s.remove()),n&&n()},c=t=>{if(t){let e=t.target;if(e.download)return;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e){const t=e.closest("button");if((null===t||"close"!==t.getAttribute("data-action-id"))&&!e.classList.contains("mashup-modal")&&null!==e.closest(".mashup-modal"))return}l()}},d=t=>{if("Escape"===t.key)return void c(t);if(!("Tab"===t.key||9===t.keyCode))return;const e=s.querySelectorAll(o),a=e[e.length-1],i=e[0];t.shiftKey?document.activeElement===i&&(a.focus(),t.preventDefault()):document.activeElement===a&&(i.focus(),t.preventDefault())};return O`
  <div class='modalcontent'>
    <button type="button" @click="${t=>{t.preventDefault(),t.stopPropagation();const e=t.target.closest(".modalcontent");if(null===e)l();else if(1===e.children.length){e.firstElementChild.setAttribute("aria-hidden","true"),s.style.opacity=0,e.appendChild(s),i(r);s.querySelectorAll(o)[0].focus(),document.body.addEventListener("click",c),document.body.addEventListener("keydown",d),s.offsetHeight,s.style=""}else l()}}" class="pzhc pzbutton ${a}" title="${t}">${e}</button>
  </div>`},ie=(t,e,a,i,n)=>{if(null==i)return null;let s;const r=`${Math.random().toString(36).substr(2,9)}`,o=document.createElement("ul");o.setAttribute("id",`menu-overlay-${r}`),o.setAttribute("role","menu"),o.setAttribute("aria-labelledby",`menubutton-${r}`),o.setAttribute("tabindex","-1");const l=()=>{document.body.removeEventListener("click",d),document.body.removeEventListener("keydown",c),o&&(o.previousElementSibling&&(o.previousElementSibling.setAttribute("aria-expanded","false"),o.previousElementSibling.focus()),o.remove())},c=t=>{38===t.keyCode?(s=s.previousElementSibling,null===s&&(s=o.lastElementChild),s.focus()):40===t.keyCode?(s=s.nextElementSibling,null===s&&(s=o.firstElementChild),s.focus()):27===t.keyCode||9===t.keyCode?l():13===t.keyCode&&(i(t),l())},d=t=>{if(t){let e=t.target;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&e.nextElementSibling===o)return;e.parentNode===o&&i(t),l()}},h=t=>{if("keydown"===t.type&&40!==t.keyCode)return;if(t.preventDefault(),t.stopPropagation(),"blur"===t.type)return void d(t);const e=t.currentTarget;"BUTTON"!==e.tagName?(i(t),l()):null===e.nextElementSibling?(e.parentNode.appendChild(o),e.setAttribute("aria-expanded","true"),L(a(),o),s=e.nextElementSibling.firstElementChild,s.focus(),document.body.addEventListener("click",d),document.body.addEventListener("keydown",c)):l()};return O`
    <div class="button-menu">
    <button type='button' id="${`menubutton-${r}`}" aria-haspopup="true" aria-controls="${`menu-overlay-${r}`}" aria-expanded="false"
    @click="${h}" @keydown="${h}" @blur="${h}"
    class="${`pzhc pzbutton Simple ${n||"action-menu"}`}" title="${e}" aria-label="${e}">${t}</button>
    </div>
  `},ne=(t,e,a,i)=>ae(t,e,a,(t=>{L(se(t,[]),t),i(t)})),se=(t,e,a,i,n)=>{let s=0;const r=t=>{if(void 0===t||"string"==typeof t&&""===t)return;if("URL"===e[s].category)return void window.open(t);let a=e[s].fileName;if(void 0===a&&(a=e[s].name),void 0===a&&(a=e[s].pyAttachName),!a)return;const i=window.document.createElement("a");if("Correspondence"===e[s].category){a=`${e[s].name}.html`;const n=`<html><head><title>${e[s].name}</title></head><body>${t}</body></html>`,r=new Blob([n],{type:"text"});i.href=window.URL.createObjectURL(r)}else{const e=function(t){const e=window.atob(t),a=e.length,i=new Uint8Array(a);for(let t=0;t<a;t++){const a=e.charCodeAt(t);i[t]=a}return i}(t),a=new Blob([e],{type:"octet/stream"});i.href=window.URL.createObjectURL(a)}i.download=a,document.body.appendChild(i),i.click(),document.body.removeChild(i)},o=t=>{t.stopPropagation();const a=t.target;s=a.getAttribute("data-id"),i.fetchData.call(i,"attachment",{id:e[s].ID,target:r})},l=a=>{a.preventDefault(),a.stopPropagation();const n=a.target.closest("button");s=n.getAttribute("data-id"),i.sendData.call(i,"deleteattachment",{id:e[s].ID,target:t})},c=r=>{r.stopPropagation();const o=r.target.closest("button");s=parseInt(o.getAttribute("data-id"),10),n.splice(s,1),L(se(t,e,a,i,n),t)},d=t=>{t.stopPropagation(),t.preventDefault();const e=t.target;if(s=e.getAttribute("data-id"),"INPUT"===e.tagName){const t=e.getAttribute("data-prop-id");n[s][t]=e.value}else"SELECT"===e.tagName&&(n[s].category=e.value)},h=e=>{e.preventDefault();const a=e.target,i=e.relatedTarget,n=null===a?null:a.closest(".attach-files"),s=null===i?null:i.closest(".attach-files");if("dragenter"===e.type||"dragover"===e.type?null!=n&&n.classList.add("drop-file-hover"):"dragleave"!==e.type&&"drop"!==e.type||null===s&&null!==n&&n.classList.remove("drop-file-hover"),"drop"===e.type){const i=e.dataTransfer.files;t||(t=a.closest(".attach-files")),p(a,i)}},u=s=>{s&&(s.stopPropagation(),s.preventDefault());for(let s=0;s<n.length;s++){const r=n[s];delete r.editing,r.loading=!0,"URL"===r.type?(e.unshift(r),i.sendData.call(i,"attachments",{id:a,actionid:[r],target:t})):(e.unshift({name:r.displayName,extension:r.extension,loading:!0}),i.sendData.call(i,"uploadattachment",{actionid:r,target:t}))}L(se(t,e,a,i),t)},p=(n,s)=>{const r=[];for(let t=0;t<s.length;t++){const e=s[t];let a=e.name.lastIndexOf(".");-1===a&&(a=e.name.length),e.displayName=e.name.substring(0,a),e.extension=e.name.substring(a+1),e.editing=!0,e.category="File",r.push(e)}L(se(t,e,a,i,r),t)},g=e=>{e.stopPropagation();let a=e.target;if("BUTTON"===a.tagName)return a=e.target.parentNode.parentNode.firstElementChild,void a.click();t||(t=a.closest(".attach-files")),p(a,a.files)},m=n=>{n.stopPropagation();L(se(t,e,a,i,[{type:"URL",category:"URL",name:"",url:"",editing:!0}]),t)},f=n=>{n.stopPropagation(),L(se(t,e,a,i),t)},b=(t,e)=>{let a=new Date(e.createTime);return a=a.toLocaleDateString(void 0,{year:"numeric",month:"numeric",day:"numeric"}),O`
    <div class='list-item-title'>
      <button type='button' class='Light'  data-id="${t}" @click="${o}">${e.name}</button>
      ${e.loading?"":O`
      <span class='list-item-meta'><span>${e.createdBy}</span><span>${a}</span><span>category: ${e.category}</span></span>`}
    </div>`},y=()=>O`<li role="menuitem" tabindex="-1" data-value="Download">Download</li>
  <li role="menuitem" tabindex="-1" data-value="Delete">Delete</li>`,v=n=>{let o=n.target;if(n.path&&n.path.length>0?o=n.path[0]:n.originalTarget&&(o=n.originalTarget),o){const n=o.getAttribute("data-value"),l=e[s].pzInsKey||e[s].ID;"Download"===n?i.fetchData.call(i,"attachment",{id:l,target:r}):"Delete"===n&&(i.sendData.call(i,"deleteattachment",{id:l,target:t}),L(se(void 0,[],a,i,[]),t))}},$=t=>O`<div class='row-item'>
    <span class='doc-icon'>${zt()}<span>${t.extension}</span></span>
    <div class='list-item-title'><span>${t.pyAttachName||t.name}</span>
    <span class="list-item-meta"><span>${t.pyCategoryName||t.category}</span>
    <span>${t.pxCreateOperator||t.createdBy}</span></span></div>
    ${ie(O`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
<path d="M14.353125,6.353125 C13.9703125,6.7359375 13.4914062,6.928125 12.9640625,6.928125 C12.4367188,6.928125 11.9585938,6.73671875 11.575,6.353125 C11.1921875,5.9703125 11,5.49140625 11,4.9640625 C11,4.43671875 11.1914062,3.95859375 11.575,3.575 C11.9578125,3.1921875 12.4367188,3 12.9640625,3 C13.4914063,3 13.9695312,3.19140625 14.353125,3.575 C14.7359375,3.9578125 14.928125,4.43671875 14.928125,4.9640625 C14.928125,5.49140625 14.7367187,5.96953125 14.353125,6.353125 Z M14.353125,13.7289063 C13.9703125,14.1117188 13.4914062,14.3039063 12.9640625,14.3039063 C12.4367188,14.3039063 11.9585938,14.1125 11.575,13.7289063 C11.1921875,13.3460938 11,12.8671875 11,12.3398438 C11,11.8125 11.1914062,11.334375 11.575,10.9507813 C11.9578125,10.5679688 12.4367188,10.3757813 12.9640625,10.3757813 C13.4914063,10.3757813 13.9695312,10.5671875 14.353125,10.9507813 C14.7359375,11.3335938 14.928125,11.8125 14.928125,12.3398438 C14.928125,12.8671875 14.7367187,13.3453125 14.353125,13.7289063 Z M14.353125,21.1039062 C13.9703125,21.4867187 13.4914062,21.6789062 12.9640625,21.6789062 C12.4367188,21.6789062 11.9585938,21.4875 11.575,21.1039062 C11.1921875,20.7210938 11,20.2421875 11,19.7148438 C11,19.1875 11.1914062,18.709375 11.575,18.3257813 C11.9578125,17.9429688 12.4367188,17.7507813 12.9640625,17.7507813 C13.4914063,17.7507813 13.9695312,17.9421875 14.353125,18.3257813 C14.7359375,18.7085937 14.928125,19.1875 14.928125,19.7148438 C14.928125,20.2421875 14.7367187,20.7203125 14.353125,21.1039062 Z"></path>
</svg>`,"Actions",y,v,"button-action")}
  </div>`,x=(t,e)=>e.loading?O`${b(t,e)}${ee()}`:e.editing?"URL"===e.type?O`
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
      <button type='button' data-id="${t}" @click="${c}" class='pzhc pzbutton Simple' title='Delete'>${At()}</button>`:O`${b(t,e)}
    <button type='button' data-id="${t}" @click="${l}" class='pzhc pzbutton Simple' title='Delete'>${At()}</button>`,w=t=>{if(!a)return ee();const e=[];if(void 0!==t){const a=Object.entries(t);for(const t of a){let a=t[1].extension;void 0===a&&(a=t[1].type),a||(a=""),a.length>5&&(a=a.substring(0,5)),"URL"===t[1].type&&t[1].editing?e.push(O`<div class='flex layout-content-stacked content-items-maxwidth'>
              ${x(t[0],t[1])}
            </div>`):e.push(O`<div class='row-item'>
              <span class='doc-icon'>${zt()}<span>${a}</span></span>
              ${x(t[0],t[1])}
            </div>`)}}return e&&e.length>0?e:O`<div class='empty'>no attachments found</div>`};if(!t){if(e&&e.length>0&&e[0].pyAttachName){s=0,e[0].extension="";const t=e[0].pyAttachName.split(".");return t.length>1&&(e[0].extension=t[t.length-1]),$(e[0])}return O`<div @dragenter="${h}" @dragover="${h}" @dragleave="${h}"  
    @drop="${h}" class='attach-files list-items'>
      <div class="file-upload">
        <input @change="${g}" type="file">
        ${Tt()}<span> Drag and drop or 
        <button type='button' aria-labelledby='click to attach a file' class='Light' @click="${g}">choose file</button>
      </div>
    </div>`}if(t&&t.classList.contains("attach-files")){if(n&&n.length>0)return i.sendData.call(i,"uploadattachment",{actionid:n[0],target:t}),C=n[0],S=!0,O`<div class='row-item'>
    <span class='doc-icon'>${zt()}<span>${C.extension}</span></span>
    <div class='list-item-title'><span>${C.displayName}</span>${S?O`<span class="list-item-meta"><span>Uploading...</span></span>`:""}</div>
  </div>`;if(e&&e.length>0)return $(e[0])}var C,S;let D="Attachments";return void 0!==n&&n.length>0&&(D="URL"===n[0].type?"Attach a link":"Attach files"),O`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${D}</h2>
      <div class="flex layout-content-inline_middle margin-l-auto">
        <button type='button' data-action-id='close'
        class="pzhc pzbutton Simple" title="Close">${It()}</button>
      </div>
    </div>
    ${void 0!==n&&n.length>0?O`
      <div id="modalcontent" class='attach-files list-items'>
        <div class='upload-content'>${w(n)}</div>
        <div class="action-button-area">
          <button type="button" class="pzhc pzbutton" @click="${f}">Cancel</button>
          <button type="button" class="Strong pzhc pzbutton" @click="${u}">Upload</button>
        </div>
      </div>`:O`
      <form id="modalcontent" @dragenter="${h}" @dragover="${h}" @dragleave="${h}"  
      @drop="${h}" class='attach-files list-items'>
        <div class="file-upload">
          <input @change="${g}" type="file" multiple="">
          ${Tt()}<span> Drag and drop files, attach 
          <button type='button' aria-labelledby='click to attach a file' class='Light' @click="${g}">files</button> or add a 
          <button type='button' aria-labelledby='click to add a URL link' class='Light' @click="${m}">link</button></span>
        </div>
        ${w(e)}
      </form>
    `}
  `},re=(t,e)=>O`
<div class="flex layout-content-inline_middle main-header">
  <h2>${t}</h2>
  <div class="flex layout-content-inline_middle margin-l-auto">
    <button type='button' data-action-id='close'
    class="pzhc pzbutton Simple" title="Close">${It()}</button>
  </div>
</div>
<div class="validation" role="alert" aria-live="assertive"></div>
<form id="modalcontent">${e}</form>
`,oe=(t,e,a,i)=>O`
  ${t.map(((t,n)=>{const s=`${e}-${n}`;if(t.layout){""!==t.layout.groupFormat.trim()&&"CENTER"!==t.layout.groupFormat||(t.layout.groupFormat="default");const e=t.layout.groupFormat.replace(/ /g,"_").toLowerCase(),n=`flex content layout-content-${e} content-${e}`;if(t.layout.view&&t.layout.view.groups)return O`
          <div class="${n}">${oe(t.layout.view.groups,s,a,i)}</div>
        `;if(t.layout.groups){let e="";if("string"==typeof t.layout.title&&""!==t.layout.title&&(t.layout.titleFormat,1))switch(t.layout.titleFormat){case"h2":e=O`<h2>${t.layout.title}</h2>`;break;case"h3":e=O`<h3>${t.layout.title}</h3>`;break;case"h4":e=O`<h4>${t.layout.title}</h4>`;break;default:e=O`<h2>${t.layout.title}</h2>`}return O`
        ${e}<div class="${n}">${oe(t.layout.groups,s,a,i)}</div>
        `}return t.layout.rows?t.layout.header?((t,e,a)=>O`
  ${Xt(t.layout)}
  <table>
    <thead>
      <tr>
        ${Qt(t.layout.header.groups)}
      </tr>
    </thead>
    <tbody>
      ${te(t.layout.rows)}
    </tbody>
  </table>
  ${Kt(t.layout,a)}
`)(t,0,a):le(t,s,a):null}if(t.field){if(t.field.control&&"pxAttachContent"===t.field.control.type)return ne("Upload file","Upload file","",i.displayAttachments);if(t.field.control&&t.field.control.actionSets&&t.field.control.actionSets.length>0&&t.field.control.actionSets[0]&&t.field.control.actionSets[0].actions[0]&&"localAction"===t.field.control.actionSets[0].actions[0].action){const e=i.actionID;return((t,e,a)=>{const i=t.control.actionSets[0].actions[0].actionProcess.localAction,n=t.control.actionSets[0].actions[0].actionProcess.target,s=t.control.modes[1].controlFormat?t.control.modes[1].controlFormat:"";if("modalDialog"===n){const n=a=>{L(re(t.control.label,ee()),a),e(i,a)};return ae(i,t.control.label,s,n,a)}return O`<div><button type="button" @click="${()=>{e(i)}}" class="pzhc pzbutton ${s}">${t.control.label}</button></<div>`})(t.field,i.displayLocalAction,(()=>{i.reloadAssignment(e)}))}return Rt(t.field,s,a)}return t.view&&t.view.groups?"pyAttachFieldOptional"===t.view.viewID&&"Embed-Attach-File"===t.view.appliesTo?ne("Upload file","Upload file","",i.displayAttachments):oe(t.view.groups,s,a,i):null}))}
`,le=(t,e,a)=>O`
  ${Xt(t.layout)}
  <div class="rdl">
    ${ce(t.layout.rows,e,a)}
  </div>
  ${Kt(t.layout,a)}
`,ce=(t,e,a)=>O`
  ${t.map(((t,i)=>{const n=`${e}-row${i}`;return t.groups?O`
        <div>
          ${oe(t.groups,n,a)}
        </div>
      `:null}))}
`,de=(t,e,a,i,n,s,r,o,l)=>{const c=O`${Tt()}<span class='count-badge'>${n}</span>`;if(void 0===e.caseID&&a.content)return O`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${a.content.pyLabel} (${a.content.pyID})</h2>
      ${""!==i?O`<span class='badge-bg-info centered'><span class='badge_text'>${i}</span></span>`:""}
      <div class="flex layout-content-inline_middle margin-l-auto">
        ${l?ne("Attachments",c,"Simple",l):""}
        ${a.actions&&a.actions.length>0?O`
          ${ie("Actions","Start a new action",s,r)}`:""}
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
      ${l?ne("Attachments",c,"Simple",l):""}
      ${e.actions&&e.actions.length>0?O`
        ${ie("Actions","Start a new action",s,r)}`:""}
    </div>
  </div>
 <h3>${t}</h3>`},he=(t,e,a,i,n)=>O`
  <div class="flex layout-content-stacked">${oe(t,e,!1,n)}</div>
  ${((t,e)=>O`
  <div class="action-button-area">
    ${null!==t?O`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    ${null!==e?O`<button type="button" class="pzhc pzbutton" @click="${e}">Save</button>`:""}
    <button type="button" data-submit="submit" class="Strong pzhc pzbutton">Submit</button>
  </div>
`)(a,i)}
`,ue=(t,e,a,i)=>O`
  <div class="flex layout-content-stacked">${oe(t,e,!0,i)}</div>
  ${(t=>null===t?null:O`
  <div class="action-button-area">
  ${null!==t?O`<button type="button" class="pzhc pzbutton Strong" @click="${t}">Close</button>`:""}
  </div>`)(a)}
`,pe=(t,e,a,i,n)=>O`
  <div class="flex layout-content-stacked">${oe(t,e,!1,n)}</div>
  ${((t,e)=>O`
  <div class="action-button-area">
    ${null!==t?O`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    <button type="button" data-submit="save" class="pzhc pzbutton Strong" @click="${e}">Submit</button>
  </div>
`)(a,i)}
`,ge=(t,e,a,i)=>O`
  <div class="flex layout-content-stacked">${oe(t,e,!1,i)}</div>
  ${(t=>O`
  <div class="action-button-area">
    ${null!==t?O`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    <button type="button" data-submit="create" class="Strong pzhc pzbutton">Create</button>
  </div>
`)(a)}
`,me=t=>t.errorDetails?O`
    <ul>
      ${t.errorDetails.map((t=>O`<li>${t.localizedValue}</li>`))}
    </ul>`:O`
  <ul>
    ${t.errors[0].ValidationMessages.map((t=>t.Path?O`
          <li>${t.Path.substring(1)}: ${t.ValidationMessage}</li>
        `:0===t.ValidationMessage.indexOf("Validation failed")?null:O`
    <li>${t.ValidationMessage}</li>
  `))}
  </ul>`,fe=(t,e)=>{const a=[],i=Object.entries(e.actions);for(const e of i)e[1].name!==t&&a.push(O`
          <li role="menuitem" tabindex="-1" data-value="${e[1].ID}">${e[1].name}</li>
        `);return O`
    ${a}
  `},be=t=>O`
${t.pxResults.map((t=>O`
    <option>
      ${t.pyUserName}
    </option>`))}`;function ye(t,e,a,i){a&&Object.defineProperty(t,e,{enumerable:a.enumerable,configurable:a.configurable,writable:a.writable,value:a.initializer?a.initializer.call(i):void 0})}function ve(t,e,a,i,n){var s={};return Object.keys(i).forEach((function(t){s[t]=i[t]})),s.enumerable=!!s.enumerable,s.configurable=!!s.configurable,("value"in s||s.initializer)&&(s.writable=!0),s=a.slice().reverse().reduce((function(a,i){return i(t,e,a)||a}),s),n&&void 0!==s.initializer&&(s.value=s.initializer?s.initializer.call(n):void 0,s.initializer=void 0),void 0===s.initializer&&(Object.defineProperty(t,e,s),s=null),s}var $e,xe,we,Ce,Se,De,ke,_e,Ie,Ae,Te,ze,Re,Ne,Ee,Me,Le,Pe,Oe,qe,Ue,Fe,je,He,Ve,Be,We,Ze,Je,Ye,Ge,Xe,Ke,Qe,ta;let ea=($e=K({type:String}),xe=K({type:String}),we=K({type:String}),Ce=K({type:String}),Se=K({type:String}),De=K({type:String}),ke=K({type:String}),_e=K({type:String}),Ie=K({type:String}),Ae=K({type:String}),Te=K({type:String}),ze=K({type:String}),Re=K({type:String}),Ne=K({type:Object}),Ee=K({type:String}),Me=K({type:String}),Le=K({type:String}),Oe=ve((Pe=class extends it{constructor(){super(),ye(this,"url",Oe,this),ye(this,"caseID",qe,this),ye(this,"username",Ue,this),ye(this,"password",Fe,this),ye(this,"title",je,this),ye(this,"bShowCreate",He,this),ye(this,"bShowCancel",Ve,this),ye(this,"bShowAttachments",Be,this),ye(this,"bShowSave",We,this),ye(this,"authentication",Ze,this),ye(this,"token",Je,this),ye(this,"clientid",Ye,this),ye(this,"clientsecret",Ge,this),ye(this,"initialContent",Xe,this),ye(this,"action",Ke,this),ye(this,"casetype",Qe,this),ye(this,"portalName",ta,this),this.cases=[],this.dataPages={},this.name="",this.etag="",this.casepyStatusWork="",this.casedata={},this.data={},this.numAttachments=0,this.attachmentcategories=[],this.assignmentID="",this.actionID="",this.content={},this.errorMsg="",this.validationMsg="",this.bShowConfirm=!1,this.bShowNew=!1,this.refreshOnChange=!1,this.isDeclarativeTarget=!1}}).prototype,"url",[$e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),qe=ve(Pe.prototype,"caseID",[xe],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Ue=ve(Pe.prototype,"username",[we],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Fe=ve(Pe.prototype,"password",[Ce],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),je=ve(Pe.prototype,"title",[Se],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"My worklist"}}),He=ve(Pe.prototype,"bShowCreate",[De],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"true"}}),Ve=ve(Pe.prototype,"bShowCancel",[ke],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"true"}}),Be=ve(Pe.prototype,"bShowAttachments",[_e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"false"}}),We=ve(Pe.prototype,"bShowSave",[Ie],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"true"}}),Ze=ve(Pe.prototype,"authentication",[Ae],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Je=ve(Pe.prototype,"token",[Te],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Ye=ve(Pe.prototype,"clientid",[ze],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Ge=ve(Pe.prototype,"clientsecret",[Re],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Xe=ve(Pe.prototype,"initialContent",[Ne],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Ke=ve(Pe.prototype,"action",[Ee],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Qe=ve(Pe.prototype,"casetype",[Me],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),ta=ve(Pe.prototype,"portalName",[Le],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Pe);class aa extends ea{clearLoadingIndicator(){const t=this.getRenderRoot().querySelector("#case-data");t&&null!==t.querySelector(".loading")&&L(null,t)}sendExternalEvent(t){this.dispatchEvent(new CustomEvent("message",{detail:{type:t}}))}genErrorMessage(t){this.clearLoadingIndicator(),t.message&&-1!==t.message.indexOf("JSON.parse")?console.error("Error:",t):t.message&&-1!==t.message.indexOf("Unexpected token")?(this.errorMsg="Error 404: Resource not found",this.requestUpdate(),console.error(this.errorMsg)):(t.status?""!==t.statusText?this.errorMsg=`Error ${t.status}: ${t.statusText}`:401===t.status?this.errorMsg="Error 401: Authentication error":500===t.status?this.errorMsg="Error 500: Internal server error":this.errorMsg=`Error ${t.status}`:t.name&&t.message?this.errorMsg=`Error ${t.name}: ${t.message}`:this.errorMsg="string"==typeof t?t:"Critical error",this.requestUpdate(),console.error("Error:",t))}fetchData(t,e){const{id:a,actionid:i,target:n,element:s}=e||{};let r="";""!==this.authentication&&"basic"!==this.authentication||(r=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(r=`Bearer ${this.token}`);const o={method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:r},mode:"cors"};let l=`${this.url}/api/v1/`;switch(t){case"worklist":l+="assignments";break;case"casetypes":l+="casetypes";break;case"newwork":l+=`casetypes/${a}`;break;case"assignment":l+=`assignments/${a}`;break;case"case":l+=`cases/${a}`;break;case"data":l+=`data/${a}`;break;case"page":l+=`cases/${a}/pages/${i}`;break;case"view":l+=`cases/${a}/views/${i}`;break;case"assignmentaction":l+=`assignments/${a}/actions/${i}`;break;case"caseaction":l+=`cases/${a}/actions/${i}`;break;case"attachment":l+=`attachments/${a}`;break;case"attachments":l+=`cases/${a}/attachments`;break;case"attachmentcategories":l+=`cases/${a}/attachment_categories`}fetch(l,o).then((e=>{if("case"===t)this.etag=e.headers.get("etag"),n&&(n.disabled=!1,n.textContent="Save");else if("attachment"===t)return e.text();return e.ok||404===e.status?e.json():Promise.reject(e)})).then((e=>{try{if(e.errors&&e.errors.length>0)return this.errorMsg=`Error ${e.errors[0].ID}: ${e.errors[0].message}`,this.clearLoadingIndicator(),this.requestUpdate(),void console.error("Error:",e);const r=this.getRenderRoot().querySelector("#case-data");switch(t){case"casetypes":this.casetypes={};for(const t of e.caseTypes)"workList"===this.action&&""!==this.casetype&&this.casetype!==t.ID||(this.casetypes[t.ID]={canCreate:t.CanCreate,name:t.name,requiresFieldsToCreate:!1});"createNewWork"===this.action&&this.createCase();break;case"worklist":this.cases=e.assignments,this.requestUpdate();break;case"assignment":this.data=e,this.caseID=e.caseID,this.fetchData("case",{id:this.caseID}),e.actions.length>0&&e.actions[0].ID?(this.actionID=e.actions[0].ID,this.fetchData("assignmentaction",{id:a,actionid:this.actionID})):this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"});break;case"case":this.casedata=e,this.numAttachments=0,""===this.name&&(this.name=this.casedata.content.pyLabel),this.casepyStatusWork=this.casedata.content.pyStatusWork,this.requestUpdate(),""===this.assignmentID&&this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"}),"true"===this.bShowAttachments&&this.fetchData("attachments",{id:this.caseID});break;case"data":if(this.dataPages[a]=e,!s.nextElementSibling){console.error("Error: case data are not present when retrieving the data");break}L(be(e),s.nextElementSibling);break;case"caseaction":if(!r){console.error("Error: case data are not present when retrieving the assignmentaction");break}L(pe(e.view.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,this.actionAreaSave,this),r),r.focus();break;case"assignmentaction":if(!r){console.error("Error: case data are not present when retrieving the assignmentaction");break}n?(this.actionID=i,L(re(e.name,he(e.view.groups,"Obj",this.actionAreaCancel,null,this)),n),n.focus()):(this.name=e.name,this.requestUpdate(),L(he(e.view.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),r),r.focus());break;case"page":if(!r){console.error("Error: case data are not present when retrieving the page");break}L(he(e.groups,"Obj",this),r),r.focus();break;case"view":if(!r){console.error("Error: case data are not present when retrieving the page");break}this.content={},"pyCaseInformation"===i?(this.name=e.name,L(ue(e.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,this),r)):(this.name=e.name,L(he(e.groups,"Obj",this),r)),r.focus();break;case"newwork":if(this.content={},!r){console.error("Error: case data are not present when retrieving the newwork");break}L(ge(e.creation_page.groups[0].layout.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null),r),r.focus();const t=this.getRenderRoot().querySelector("#case-data");t&&((t,e)=>{for(const a of t.elements)if("INPUT"===a.tagName||"TEXTAREA"===a.tagName||"SELECT"===a.tagName){const t=a.getAttribute("data-ref");if(null!==t&&"pyID"!==t&&e[t]){const i=e[t];if("object"==typeof i)"radio"===a.type?a.value===i.value&&(a.checked=!0):"checkbox"===a.type?!0!==i.value&&"true"!==i.value||(a.checked=!0):i.value&&(a.value=i.value),i.disabled&&(a.disabled=!0);else if("datetime-local"===a.type)24===i.length?a.value=i.substring(0,23):a.value=i;else if("date"===a.type){let i;a.valueAsDate&&(i=new Date(a.valueAsDate)),i&&i instanceof Date&&i.getTime()==i.getTime()||(i=new Date(a.value)),i&&i instanceof Date&&i.getTime()==i.getTime()?(i=new Date(i.getTime()+6e4*i.getTimezoneOffset()),dt(e,t,`${ot(i.getMonth()+1)}/${ot(i.getDate())}/${i.getFullYear()}`)):dt(e,t,a.value)}else"string"==typeof i?"radio"===a.type?a.value===i&&(a.checked=!0):"checkbox"===a.type?"true"===i&&(a.checked=!0):a.value=i:"boolean"==typeof i&&"checkbox"===a.type?!0===i&&(a.checked=!0):a.value=i}}})(t,this.initialContent);break;case"attachments":let o=e.attachments;o||(o=[]),this.numAttachments=o.length,n&&L(se(n,o,this.caseID,this),n),this.requestUpdate();break;case"attachmentcategories":this.attachmentcategories=e.attachment_categories;break;case"attachment":n(e)}}catch(t){this.errorMsg=`Error: ${t}`,this.requestUpdate(),console.error("Error:",t)}})).catch((t=>{this.genErrorMessage(t)}))}sendData(t,e,a){const{id:i,actionid:n,target:s,refreshFor:r}=e;let o="";""!==this.authentication&&"basic"!==this.authentication||(o=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(o=`Bearer ${this.token}`);const l={"Content-Type":"application/json;charset=UTF-8",Authorization:o},c={method:"POST",headers:l,mode:"cors"};let d=`${this.url}/api/v1/`;switch(this.validationMsg="",t){case"authenticate":"oauth2password"===this.authentication?c.body=`grant_type=password&client_id=${this.clientid}&client_secret=${this.clientsecret}&username=${this.username}&password=${this.password}`:"oauth2clientcredentials"===this.authentication&&(c.body=`grant_type=client_credentials&client_id=${this.clientid}&client_secret=${this.clientsecret}`),c.headers["Content-Type"]="application/x-www-form-urlencoded",d=`${this.url}/PRRestService/oauth2/v1/token`;break;case"newwork":d+="cases",c.body=JSON.stringify({content:this.content,caseTypeID:i});break;case"submitassignment":c.body=JSON.stringify({content:this.content}),d+=`assignments/${i}?actionID=${n}`;break;case"savecase":d+=`cases/${i}`,n&&""!==n&&(d+=`?actionID=${n}`),c.headers["If-Match"]=this.etag,c.method="PUT",c.body=JSON.stringify({content:this.content});break;case"refreshnew":d+=`casetypes/${i}/refresh`,r&&""!==r&&(d+=`?refreshFor=${r}`),c.headers["If-Match"]=this.etag,c.method="PUT",c.body=JSON.stringify({content:this.content});break;case"refreshassignment":d+=`assignments/${i}/actions/${n}/refresh`,r&&""!==r&&(d+=`?refreshFor=${r}`),c.headers["If-Match"]=this.etag,c.method="PUT",c.body=JSON.stringify({content:this.content});break;case"refreshcase":d+=`cases/${i}/actions/${n}/refresh`,r&&""!==r&&(d+=`?refreshFor=${r}`),c.headers["If-Match"]=this.etag,c.method="PUT",c.body=JSON.stringify({content:this.content});break;case"uploadattachment":d+="attachments/upload",delete l["Content-Type"];const t=new FormData;t.append("File",n,n.name),c.body=t;break;case"attachments":d+=`cases/${i}/attachments`,c.body=JSON.stringify({attachments:n});break;case"deleteattachment":d+=`attachments/${i}`,c.method="DELETE"}fetch(d,c).then((e=>"deleteattachment"===t||"attachments"===t?e.text():200===e.status||201===e.status||e.status>=400&&e.status<500?e.json():e.ok?Promise.resolve("ok"):Promise.reject(e))).then((e=>{if(e.errors&&e.errors.length>0){if(e.errors[0].ValidationMessages)if(s&&"modalcontent"===s.id)wt(s,e.errors[0].ValidationMessages),L(me(e),s.previousElementSibling);else{const t=this.getRenderRoot().querySelector("#case-data");wt(t,e.errors[0].ValidationMessages),this.validationMsg=me(e)}else this.errorMsg=`Error ${e.errors[0].ID}: ${e.errors[0].message}`;this.clearLoadingIndicator(),s&&"BUTTON"===s.tagName&&(s.disabled=!1,s.textContent="Save")}else if(e.access_token)this.token=e.access_token;else{const i=this.getRenderRoot().querySelector("#case-data");if("refreshcase"===t||"refreshassignment"===t||"refreshnew"===t){if(!i)return void console.error("Error: case data are not present");L("refreshnew"===t?ge(e.creation_page.groups[0].layout.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,this):he(e.view.groups,"Obj",this.actionAreaCancel,"true"===this.bShowSave?this.actionAreaSave:null,this),i)}else if("savecase"===t){if(this.sendExternalEvent(t),this.fetchData("case",{id:this.caseID,target:s}),a)return void a();""!==this.assignmentID&&this.fetchData("assignment",{id:this.assignmentID})}else if("deleteattachment"===t||"attachments"===t)this.fetchData("attachments",{id:this.caseID,target:s});else if("uploadattachment"===t){let t=n.name.lastIndexOf(".");-1===t&&(t=n.name.length);const a=n.name.substring(t+1),i=[{type:"File",category:n.category,fileType:a,name:n.displayName,ID:e.ID}];return void this.sendData("attachments",{id:this.caseID,actionid:i,target:s})}e.ID&&(this.caseID=e.ID),e.nextAssignmentID?(i&&(L(ee(),i),this.requestUpdate()),this.bShowNew=!1,this.assignmentID=e.nextAssignmentID,this.sendExternalEvent(t),this.fetchData("assignment",{id:this.assignmentID})):e.nextPageID&&(i&&(L(ee(),i),this.requestUpdate()),this.sendExternalEvent(t),"Confirm"===e.nextPageID||"Review"===e.nextPageID?(this.bShowConfirm=!0,this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"}),this.fetchData("case",{id:this.caseID})):this.fetchData("page",{id:this.caseID,actionid:e.nextPageID}))}this.requestUpdate()})).catch((t=>{this.genErrorMessage(t)}))}}const ia=(t,e,a,i)=>O`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${t} (${e})</h2>
    <span class='badge-bg-info centered'><span class='badge_text'>${a}</span></span>
    ${i?O`<div class="flex layout-content-inline_middle margin-l-auto">
        ${ne("Attachments",Tt(),"Simple",i)}
      </div>`:""}
  </div>
  <div class="flex layout-content-inline_middle success">
    Thank you. Your information has been submitted.
  </div>
  <h3>Case information</h3>
  <div id="case-data">${ee()}</div>`,na=(t,e)=>O`
  <div class="error">${t}
  ${null!=e?O`
    <button type='button' title="Click to close the banner" class="pzhc pzbutton Light" @click="${e}">
    ${It()}</button>`:""}
  </div>`,sa=(t,e,a,i,n,s)=>O`
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
      ${ie("Create","Create a new case",a,n)}
    </div>
  </div>
  ${e.length>0?O`
        <table class='responsive'>
          <thead>
            <tr>
              <th span='col'>Name</th>
              <th span='col'>case ID</th>
              <th span='col' class="right-aligned">Urgency</th>
              <th span='col' class="right-aligned">Action</th>
            </tr>
          </thead>
          <tbody>
            ${e.map((t=>O`
                <tr>
                  <td data-title='Name'>${t.name}</td>
                  <td data-title='Case ID'>${t.caseID}</td>
                  <td data-title='Urgency' class="right-aligned">${t.urgency}</td>
                  <td data-title='Action' class="right-aligned">
                    <button @click="${s}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">Open</button>
                  </td>
                </tr>
              `))}
          </tbody>
        </table>
      `:O`
        <div class="margin-t-2x">no assignments</div>
      `}
`;class ra extends aa{constructor(...t){super(...t),this.resetError=t=>{this.errorMsg="",this.validationMsg="",this.actionAreaCancel(t)},this.reloadWorkList=t=>{this.cases=[],this.requestUpdate(),this.actionAreaCancel(t)},this.actionAreaCancel=t=>{if(t&&t.preventDefault(),t.target&&null!==t.target.closest(".mashup-modal")){const e=t.target.closest(".mashup-modal").querySelector("button");if(null!==e)return void e.click()}this.bShowConfirm=!1,this.bShowNew=!1,this.caseID="",this.data={},this.content={},this.casedata={},this.attachmentcategories=[],this.casepyStatusWork="",this.assignmentID="",this.actionID="",this.errorMsg="",this.numAttachments=0,this.validationMsg="",this.name="","workList"===this.action?this.fetchData("worklist"):this.dispatchEvent(new CustomEvent("message",{detail:{type:"cancel"}}))},this.actionAreaSave=t=>{t&&t.preventDefault(),null===t.target.getAttribute("data-submit")&&(t.target.textContent="Saving...",t.target.disabled=!0);const e=this.getRenderRoot().querySelector("#case-data");e&&(this.content=xt(this.casedata),$t(e,this.content),""!==this.assignmentID?this.sendData("savecase",{id:this.caseID,actionid:"",target:t.target}):this.sendData("savecase",{id:this.caseID,actionid:this.actionID,target:t.target}))},this.actionRefresh=()=>{const t=this.getRenderRoot().querySelector("#case-data");t&&(this.content=xt(this.casedata),this.validationMsg="",$t(t,this.content),this.requestUpdate(),""!==this.assignmentID?this.fetchData("assignmentaction",{id:this.assignmentID,actionid:this.actionID}):this.fetchData("caseaction",{id:this.caseID,actionid:this.actionID}))},this.displayCasesTypes=()=>(t=>{const e=[],a=Object.entries(t);for(const t of a)"true"===t[1].canCreate&&e.push(O`
          <li role="menuitem" tabindex="-1" data-value="${t[0]}">${t[1].name}</li>
        `);return O`
    ${e}
  `})(this.casetypes),this.displayActions=()=>this.data.actions?fe(this.name,this.data):this.casedata.actions?fe(this.name,this.casedata):null,this.displayAttachments=t=>{this.fetchData("attachmentcategories",{id:this.caseID}),this.fetchData("attachments",{id:this.caseID,target:t})},this.displayLocalAction=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");if(a&&(this.content=xt(this.casedata),$t(a,this.content),""!==this.assignmentID)){const a=this;this.sendData("savecase",{id:this.caseID},(()=>{this.actionID=t,a.fetchData("assignmentaction",{id:this.assignmentID,actionid:t,target:e})}))}},this.reloadAssignment=t=>{this.actionID=t,this.fetchData("assignmentaction",{id:this.assignmentID,actionid:t})},this.submitForm=(t,e)=>{if(t.preventDefault(),t.target&&null!==t.target.closest(".mashup-modal")){const e=t.target.closest("#modalcontent");this.content=xt(this.casedata),$t(e,this.content),e.checkValidity()?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID,target:e}):e.reportValidity()}else{const t=this.getRenderRoot().querySelector("#case-data");this.content=xt(this.casedata),$t(t,this.content),t.checkValidity()?"create"!==e?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID}):this.sendData("newwork",{id:this.casetype}):t.reportValidity()}return!1},this.createCase=t=>{if(this.name="New Case",this.bShowNew=!0,t){let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&(this.casetype=e.getAttribute("data-value"),this.name=`New ${e.textContent} `)}this.content=this.initialContent,this.caseID="",this.data={},this.casedata={},this.casetypes[this.casetype]?"true"===this.casetypes[this.casetype].requiresFieldsToCreate?this.fetchData("newwork",{id:this.casetype}):this.sendData("newwork",{id:this.casetype}):(this.errorMsg=`Case '${this.casetype}' is not defined`,console.error(`Case '${this.casetype}' is not defined`)),this.requestUpdate()},this.runAction=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&null!==e.getAttribute("data-value")&&(this.actionID=e.getAttribute("data-value"),this.actionRefresh());const a=this.getRenderRoot().querySelector("#case-data");null!=a&&L(ee(),a)},this.openCase=t=>{t.preventDefault(),this.caseID=t.target.getAttribute("data-id"),this.name="",this.data={},this.casedata={},0===this.caseID.indexOf("ASSIGN-WORKLIST")?(this.assignmentID=this.caseID,this.caseID=""):this.assignmentID="";const e=this.getRenderRoot().querySelector("#case-data");null!=e&&L(ee(),e),this.requestUpdate()},this.getData=(t,e)=>{this.dataPages[t]?L(be(this.dataPages[t]),e.nextElementSibling):this.fetchData("data",{id:t,element:e})},this.refreshAssignment=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");let i=t;if(a){if(this.content=xt(this.casedata),$t(a,this.content),i){"svg"===i.tagName&&(i=i.parentNode);const t=i.getAttribute("data-action-click"),e=i.getAttribute("data-ref");null!==e&&null!==t&&("addRow"===t?gt(this.content,e,i.getAttribute("data-newrow")):"deleteRow"===t&&mt(this.content,e))}!0===this.bShowNew?this.sendData("refreshnew",{id:this.casetype,refreshFor:e}):this.sendData("refreshassignment",{id:this.assignmentID,actionid:this.actionID,refreshFor:e})}},this.clickHandler=t=>{let e=t.target;"svg"===e.tagName&&(e=e.parentNode);const a=e.getAttribute("data-action-click");e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e),ft(e,"click")?(this.refreshAssignment(e,bt(e,"click")),t.preventDefault()):"BUTTON"===e.tagName&&(t.preventDefault(),null!==e.getAttribute("data-submit")&&"save"!==e.getAttribute("data-submit")?this.submitForm(t,e.getAttribute("data-submit")):("addRow"===a||"deleteRow"===a)&&this.refreshAssignment(e))},this.changeHandler=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e.setCustomValidity(""),e.classList.remove("error-field"),ft(e,"change")&&this.refreshAssignment(e,bt(e,"change"))},this.keyupHandler=t=>{const e=t.target;"TEXTAREA"===e.tagName&&(e.style.cssText="height:auto; padding:0;",e.style.cssText=`height:${e.scrollHeight}px`)},this.focusHandler=t=>{const e=t.target;e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e)}}displayContent(){return""!==this.errorMsg?na(this.errorMsg,"true"===this.bShowCancel?this.resetError:null):"oauth2password"!==this.authentication&&"oauth2clientcredentials"!==this.authentication||""!==this.token?(this.casetypes||"createNewWork"!==this.action&&"workList"!==this.action?""===this.name&&("openAssignment"===this.action&&""===this.assignmentID&&(this.assignmentID=this.caseID),""!==this.assignmentID?this.fetchData("assignment",{id:this.assignmentID}):""!==this.caseID&&this.fetchData("case",{id:this.caseID})):(this.fetchData("casetypes"),"createNewWork"===this.action?(this.bShowNew=!0,this.casetypes[this.casetype]&&this.fetchData("newwork",{id:this.casetype})):"workList"===this.action&&(this.bShowCancel="true",this.fetchData("worklist"))),this.bShowConfirm?ia(this.casedata.content.pyLabel,this.casedata.content.pyID,this.casepyStatusWork,"true"===this.bShowAttachments?this.displayAttachments:null):""!==this.caseID||""!==this.assignmentID||this.bShowNew?O`
        ${de(this.name,this.data,this.casedata,this.casepyStatusWork,this.numAttachments,this.displayActions,this.runAction,this.openCase,"true"===this.bShowAttachments?this.displayAttachments:null)}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
        <form id="case-data">${ee()}</form>
      `:"workList"===this.action?sa(this.title,this.cases,this.displayCasesTypes,this.reloadWorkList,"true"===this.bShowCreate?this.createCase:null,this.openCase):null):(this.sendData("authenticate",{}),null)}async firstUpdated(){const t=this.getRenderRoot();t&&(t.addEventListener("click",this.clickHandler),t.addEventListener("focusin",this.focusHandler),t.addEventListener("change",this.changeHandler),t.addEventListener("keyup",this.keyupHandler))}}const oa=()=>O`
  <style>
    label {
      color: var(--generalLabelColor);
      line-height: 1.5;
    }
    .helper-text {
      color: var(--generalLabelColor);
      font-size: var(--generalHelperTextFontSize);
      line-height: 1;
      margin-top: 0.3rem;
      flex: 0 0 100%;
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

    .flex.content > .field-checkbox {
      flex-flow: row-reverse;
      margin-right: auto;
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
`;var la,ca,da,ha,ua,pa,ga;G("pega-mashup")(class extends ra{createRenderRoot(){return this.attachShadow({mode:"open"})}getRenderRoot(){return this.shadowRoot}render(){return O`
      ${oa()} ${this.displayContent()}
    `}}),G("pega-mashup-light")(class extends ra{createRenderRoot(){return this}getRenderRoot(){return this}render(){return O`
      ${this.displayContent()}
    `}});const ma=t=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20px" height="20px" fill="currentColor">${t}</svg>`;let fa=(la=G("rich-text-editor"),ca=K({type:String}),da=K({type:Element}),la((pa=ve((ua=class extends it{createRenderRoot(){return this}constructor(t,e,a){super(),ye(this,"content",pa,this),ye(this,"root",ga,this),this.content=t;const i=(new DOMParser).parseFromString(this.content,"text/html");document.execCommand("defaultParagraphSeparator",!1,"br");const n=document.createElement("div"),s=i.querySelector("body");n.setAttribute("contenteditable","true"),n.setAttribute("data-ref",e),n.setAttribute("id",a),n.innerHTML=s.innerHTML,this.root=n}render(){return O`<div class='rich-text-main'>
      <div class="editor-actions">
        <div class="toolbar">
          ${this.renderToolbar(((t,e)=>{document.execCommand(t,!1,e)}))}
        </div>
      </div>
      <div class="editor">${this.root}</div>
    </div>`}async firstUpdated(){document.addEventListener("selectionchange",(()=>{this.requestUpdate()}))}renderToolbar(t){const e=document.getSelection?document.getSelection():null,a=[];if(e&&"Range"===e.type){let t=e.baseNode;if(t)for(;null!=t;){const e=t&&t.tagName?t.tagName.toLowerCase().trim():void 0;e&&a.push(e),t=t.parentNode}}const i=[{icon:"Clear",title:"Remove all styling",command:"removeFormat"},{title:"Change format",command:"formatblock",values:[{name:"Normal Text",value:"--"},{name:"Heading 1",value:"h1"},{name:"Heading 2",value:"h2"},{name:"Heading 3",value:"h3"},{name:"Heading 4",value:"h4"},{name:"Heading 5",value:"h5"},{name:"Heading 6",value:"h6"},{name:"Paragraph",value:"p"},{name:"Pre-Formatted",value:"pre"}]},{title:"Change font size",command:"fontsize",values:[{name:"Font Size",value:"--"},{name:"Very Small",value:"1"},{name:"Small",value:"2"},{name:"Normal",value:"3"},{name:"Medium Large",value:"4"},{name:"Large",value:"5"},{name:"Very Large",value:"6"},{name:"Maximum",value:"7"}]},{icon:()=>ma('<path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"></path>'),title:"Bold",command:"bold",active:a.includes("b")},{icon:()=>ma('<path d="m9.586 14.633.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"></path>'),title:"Italic",command:"italic",active:a.includes("i")},{icon:()=>ma('<path d="M3 18v-1.5h14V18zm2.2-8V3.6c0-.4.4-.6.8-.6.3 0 .7.2.7.6v6.2c0 2 1.3 2.8 3.2 2.8 1.9 0 3.4-.9 3.4-2.9V3.6c0-.3.4-.5.8-.5.3 0 .7.2.7.5V10c0 2.7-2.2 4-4.9 4-2.6 0-4.7-1.2-4.7-4z"></path>'),title:"Underline",command:"underline",active:a.includes("u")},{icon:()=>ma('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"></path>'),title:"Align left",command:"justifyleft"},{icon:()=>ma('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"></path>'),title:"Align middle",command:"justifycenter"},{icon:()=>ma('<path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"></path>'),title:"Align right",command:"justifyright"},{icon:()=>ma('<path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"></path>'),title:"Numbered list",command:"insertorderedlist",active:a.includes("ol")},{icon:()=>ma('<path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"></path>'),title:"Bullet list",command:"insertunorderedlist",active:a.includes("ul")},{icon:()=>ma('<path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"></path>'),command:"formatblock",title:"Format block quote",command_value:"blockquote"},{icon:()=>ma('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zm1.618-9.55L.98 9.358a.4.4 0 0 0 .013.661l3.39 2.207A.4.4 0 0 0 5 11.892V7.275a.4.4 0 0 0-.632-.326z"></path>'),title:"decrease indent",command:"outdent"},{icon:()=>ma('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zM1.632 6.95 5.02 9.358a.4.4 0 0 1-.013.661l-3.39 2.207A.4.4 0 0 1 1 11.892V7.275a.4.4 0 0 1 .632-.326z"></path>'),title:"Increase indent",command:"indent"},{icon:()=>ma('<path d="m5.042 9.367 2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z"></path>'),title:"Undo",command:"undo"},{icon:()=>ma('<path d="m14.958 9.367-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z"></path>'),title:"Redo",command:"redo"},{icon:()=>ma('<path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"></path>'),title:"Add link",active:a.includes("a"),deactivate:"unlink",command:()=>{const e=prompt("Enter the URL","");e&&""!==e&&t("createlink",e)}},{icon:()=>ma('<path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"></path>'),title:"Add image",active:a.includes("img"),command:()=>{const e=prompt("Enter the image URL","");e&&""!==e&&t("insertImage",e)}}];return O`
      ${i.map((e=>O`
          ${e.values?O` <select aria-label="${e.title}" tabindex=-1
        @change=${a=>{a.preventDefault();const i=a.target.value;"--"===i?t("removeFormat",void 0):"string"==typeof e.command&&t(e.command,i)}}>
    ${e.values.map((t=>O` <option value=${t.value}>${t.name}</option>`))}
              </select>`:O` <button aria-label="${e.title}" tabindex=-1
                class="${e.active?"active":"inactive"}"
                @click=${a=>{a.preventDefault(),e.active&&e.deactivate?"string"==typeof e.deactivate?t(e.deactivate,e.command_value):e.deactivate():"string"==typeof e.command?t(e.command,e.command_value):e.command()}}>${"function"==typeof e.icon?document.createRange().createContextualFragment(`${e.icon()}`):e.icon}</button>`}
        `))}
    `}}).prototype,"content",[ca],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),ga=ve(ua.prototype,"root",[da],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),ha=ua))||ha);const ba=(t,e)=>{if(t.helperText&&""!==t.helperText)return`${e}-info`},ya=t=>{if(t.placeholder&&""!==t.placeholder)return ct(t.placeholder).replace("@L ","")},va=(t,e,a,i)=>void 0===e||""===e?O`
      ${i}
    `:O`
    <div class="flex content-item field-item ${a}" ?disabled="${t.disabledstate}">
      ${((t,e,a)=>{if(void 0===e)return null;const i=t.requiredstate?"icon-required":"";return"field-checkbox"===a?t.label&&""!==t.label?O`<legend class="field-caption">${ct(t.label).replace("@L ","")}</legend>`:null:O`
    ${""!==t.label?O`<label class="field-caption dataLabelForWrite ${i}" 
    for="${st(e)}">${ct(t.label).replace("@L ","")}
    </label>`:null}
  `})(t,e,a)}${i}${((t,e)=>t.helperText&&""!==t.helperText?O`<span id=${`${e}-info`} class="helper-text">${ct(t.helperText).replace("@L ","")}</span>`:null)(t,e)}
    </div>
  `,$a=(t,e,a,i,n)=>{if(!1===t.config.visibility)return null;let s=!1;if(t.config.displayvalue="",t.config.value){let e=t.config.value.replace("@P .","");if(t.config.reference=void 0===n||""===n?e:`${n}.${e}`,t.config.displayvalue=ht(i.casedata.content,t.config.reference),"string"==typeof t.config.datasource&&0===t.config.datasource.indexOf("@ASSOCIATED")){e=t.config.datasource.replace("@ASSOCIATED .","");let a="";i.data.context_data?a=i.data.context_data.content:i.data.uiResources.context_data&&i.data.uiResources.context_data.caseInfo&&i.data.uiResources.context_data.caseInfo.content&&(a=i.data.uiResources.context_data.caseInfo.content);const s=""===n?a:ht(a,n);if(s&&(t.config.options=s.summary_of_associated_lists__[e]),void 0===t.config.options&&(a=i.data.uiResources.resources.fields[e],a&&a.datasource))if(a.datasource.records)t.config.options=a.datasource.records;else if(a.datasource.name&&i.data.data.shared[a.datasource.name]){const e=i.data.data.shared[a.datasource.name];if(Object.keys(e).length>0){const i=Object.keys(e)[0];if(e[i].pxResults){const n=a.datasource.propertyForValue.replace("@P .",""),s=a.datasource.propertyForDisplayText.replace("@P .","");t.config.options=[];for(const a in e[i].pxResults){const r=e[i].pxResults[a];t.config.options[a]={key:r[n],value:r[s]}}}}}}else if("object"==typeof t.config.datasource&&t.config.datasource.source&&0===t.config.datasource.source.indexOf("@DATASOURCE")){const e=t.config.datasource.source.replace("@DATASOURCE ","").replace(".pxResults","");if(i.data.data[e]&&i.data.data[e].pxResults)t.config.options=i.data.data[e].pxResults;else if(i.data.uiResources.context_data&&i.data.uiResources.context_data.caseInfo&&i.data.uiResources.context_data.caseInfo.content){const a=i.data.uiResources.context_data.caseInfo.content;if(a[n]&&a[n].summary_of_lists__[e]&&a[n].summary_of_lists__[e].pxResults){const s=a[n].summary_of_lists__[e].pxResults.replace(".pxResults","");if(i.data.data[s]&&i.data.data[s].pxResults){t.config.options=[];const e=t.config.datasource.fields.key.replace("@P .",""),a=t.config.datasource.fields.text.replace("@P .","");for(const n in i.data.data[s].pxResults){const r=i.data.data[s].pxResults[n];t.config.options[n]={key:r[e],value:r[a]}}}}}}t.config.options||(t.config.options=[]),t.config.displayvalue?"object"!=typeof t.config.displayvalue&&(t.config.displayvalue=`${t.config.displayvalue}`):t.config.displayvalue="",i.data.uiResources&&i.data.uiResources.resources&&i.data.uiResources.resources.fields&&i.data.uiResources.resources.fields[e]&&i.data.uiResources.resources.fields[e].isDeclarativeTarget&&(s=!0,i.isDeclarativeTarget=!0)}if(!0===a)return va(t.config,e,"field-text",xa(t.config,t.type,e));"string"!=typeof t.config.visibility&&"string"!=typeof t.config.readOnly&&"string"!=typeof t.config.disabled&&"string"!=typeof t.config.required||(i.refreshOnChange=!0);const r=i.data.data.caseInfo.content;if("string"==typeof t.config.visibility){if(!vt(t.config.visibility,r))return null}else if(!1===t.config.visibility||"false"===t.config.visibility)return null;switch(t.config.readonlystate=!1,"string"==typeof t.config.readOnly?t.config.readonlystate=vt(t.config.readOnly,r):(t.config.readOnly||"true"===t.config.readOnly||s)&&(t.config.readonlystate=!0),t.config.requiredstate=!1,"string"==typeof t.config.required?t.config.requiredstate=vt(t.config.required,r):(t.config.required||"true"===t.config.required)&&(t.config.requiredstate=!0),t.config.disabledstate=!1,"string"==typeof t.config.disabled?t.config.disabledstate=vt(t.config.disabled,r):(t.config.disabled||"true"===t.config.disabled)&&(t.config.disabledstate=!0),t.config.disabledstate&&(t.config.requiredstate=!1,t.config.readonlystate=!1),t.type){case"Decimal":case"TextInput":return va(t.config,e,"field-textinput",wa(t.config,e));case"Phone":return va(t.config,e,"field-phoneinput",Ca(t.config,e));case"Email":return va(t.config,e,"field-emailinput",_a(t.config,e));case"Integer":return va(t.config,e,"field-numberinput",Sa(t.config,e));case"Percentage":return va(t.config,e,"field-percentage",Da(t.config,e));case"Currency":return va(t.config,e,"field-currencyinput",ka(t.config,e));case"RadioButtons":return va(t.config,e,"field-radiogroup",za(t.config,e));case"TextArea":return va(t.config,e,"field-textarea",Ia(t.config,e));case"RichText":return va(t.config,e,"field-richtext",Aa(t.config,e));case"Checkbox":return va(t.config,e,"field-checkbox",Ta(t.config,e));case"Dropdown":return va(t.config,e,"field-dropdown",Ra(t.config,e));case"DateTime":return va(t.config,e,"field-datetime",Na(t.config,e));case"Date":return va(t.config,e,"field-date",Ea(t.config,e));case"Time":return va(t.config,e,"field-time",Ma(t.config,e));case"AutoComplete":return va(t.config,e,"field-autocomplete",La(t.config,e));case"SemanticLink":return va(t.config,e,"field-semanticlink",Pa(t.config));case"Attachment":return va(t.config,e,"field-attachment",Oa(t.config,e,i));default:return null}},xa=(t,e,a)=>{let i=t.displayvalue;if(""!==i){if("Phone"===e)return O`<a data-ref="${t.reference}" id="${st(a)}" href="${`tel:${i}`}">${i}</a>`;if("Date"===e){const e={year:"numeric",month:"short",day:"numeric"};i=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}else if("DateTime"===e){i=lt(t.displayvalue);const e={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};i=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}else if("Time"===e){const e={hour:"numeric",minute:"numeric"};i=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}}return O`
    <span class="dataValueRead" data-ref="${t.reference}" id="${st(a)}">${ct(i)}</span>
  `},wa=(t,e)=>O`
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${st(ya(t))}"
    type="text"
    aria-describedby="${st(ba(t,e))}"
    id="${st(e)}"
    value="${ct(t.displayvalue)}"
  />
`,Ca=(t,e)=>{let a="";for(const e of t.options)0===t.displayvalue.indexOf(e.pyCallingCode)&&(a=e.pyCallingCode);return t.displayvalue=t.displayvalue.substring(a.length),O`
<div> 
<select
  class="field-countrycode"
  ?readonly="${t.readonlystate}"
  ?disabled="${t.disabledstate}"
  aria-label="select country code">
  ${t.options.map((t=>O`<option ?selected=${t.pyCallingCode===a} 
  value='${t.pyCallingCode}'>${t.pyCallingCode}</option>`))}
</select>
 <input
   data-ref="${t.reference}"
   ?required="${t.requiredstate}"
   ?readonly="${t.readonlystate}"
   ?disabled="${t.disabledstate}"
   placeholder="${st(ya(t))}"
   type="tel"
   aria-describedby="${st(ba(t,e))}"
   id="${st(e)}"
   value="${ct(t.displayvalue)}"
 />
 </div>
`},Sa=(t,e)=>O`
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${st(ya(t))}"
    type="number"
    aria-describedby="${st(ba(t,e))}"
    id="${st(e)}"
    value="${ct(t.displayvalue)}"
  />
`,Da=(t,e)=>O`
 <input
   data-ref="${t.reference}"
   ?required="${t.requiredstate}"
   ?readonly="${t.readonlystate}"
   ?disabled="${t.disabledstate}"
   placeholder="${st(ya(t))}"
   type="text"
   aria-describedby="${st(ba(t,e))}"
   id="${st(e)}"
   value="${ct(t.displayvalue)}"
 />
`,ka=(t,e)=>O`
  <div ?readonly="${t.readOnly}">
  <span class="currency-symbol">$</span>
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${st(ya(t))}"
    type="number"
    aria-describedby="${st(ba(t,e))}"
    id="${st(e)}"
    value="${ct(t.displayvalue)}"
  />
  </div>
`,_a=(t,e)=>O`
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${st(ya(t))}"
    type="email"
    aria-describedby="${st(ba(t,e))}"
    id="${st(e)}"
    value="${ct(t.displayvalue)}"
  />
`,Ia=(t,e)=>O`
  <textarea
    rows="3"
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${st(ya(t))}"
    type="email"
    aria-describedby="${st(ba(t,e))}"
    id="${st(e)}"
  >${ct(t.displayvalue)}</textarea>
`,Aa=(t,e)=>new fa(ct(t.displayvalue),t.reference,e),Ta=(t,e)=>{const a=t.requiredstate?"icon-required":"";return O`
  <input
  data-ref="${t.reference}"
  ?required="${t.requiredstate}"
  ?readonly="${t.readonlystate}"
  onclick="${st(t.readonlystate?"return false;":void 0)}"
  ?disabled="${t.disabledstate}"
  aria-describedby="${st(ba(t,e))}"
  id=${st(e)}
  type="checkbox" ?checked=${"true"===t.displayvalue||!0===t.displayvalue}
  />
  <label class=${a} for=${st(e)}>
  ${ct(t.caption).replace("@L ","")}
    </label>
`},za=(t,e)=>{let a=[{value:"true"},{value:"false"}];return t.options&&(a=t.options),O`
    ${a.map(((a,i)=>{const n=`rb-${e}-${i}`;return O`
        <div>
          <input
            data-ref="${t.reference}"
            name=${st(e)}
            id=${n}
            type="radio"
            ?readonly="${t.readonlystate}"
            ?disabled="${t.disabledstate}"
            value="${a.key}"
            onclick="${st(t.readonlystate?"return false;":void 0)}"
            ?checked="${a.key===t.displayvalue}"
          />
          <label for="${n}">${a.value}</label>
        </div>
      `}))}
  `},Ra=(t,e)=>O`<select
  data-ref="${t.reference}"
  aria-describedby="${st(ba(t,e))}"
  id=${st(e)}
  ?required="${t.requiredstate}"
  ?readonly="${t.readonlystate}"
  ?disabled="${t.disabledstate}">
  placeholder="${st(ya(t))}"
    <option value="" title="Select...">Select...</option>
    ${t.options.map((e=>O`<option ?selected=${e.key===t.displayvalue} value='${e.key}'>${e.value}</option>`))}
  </select>`,Na=(t,e)=>{let a=t.displayvalue;if(""!==a){let e=lt(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${e.getFullYear()}-${ot(e.getMonth()+1)}-${ot(e.getDate())}T${ot(e.getHours())}:${ot(e.getMinutes())}`):8===t.displayvalue.length?a=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(4,6)}-${t.displayvalue.substring(6,8)}T00:00`:24===t.displayvalue.length&&(a=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(5,7)}-${t.displayvalue.substring(8,10)}T${t.displayvalue.substring(11,13)}:${t.displayvalue.substring(14,16)}`)}return O`
    <input
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="datetime-local"
      aria-describedby="${st(ba(t,e))}"
      id="${st(e)}"
      value="${a}"
    />
  `},Ea=(t,e)=>{let a=t.displayvalue;if(""!==a){let e=lt(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${e.getFullYear()}-${ot(e.getMonth()+1)}-${ot(e.getDate())}`):8===t.displayvalue.length&&(a=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(4,6)}-${t.displayvalue.substring(6,8)}`)}return O`
    <input
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="date"
      aria-describedby="${st(ba(t,e))}"
      id="${st(e)}"
      value="${a}"
    />
  `},Ma=(t,e)=>{let a=t.displayvalue;if(""!==a){let e=lt(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${ot(e.getHours())}-${ot(e.getMinutes())}-${ot(e.getSeconds())}`):8===t.displayvalue.length&&(a=`${t.displayvalue.substring(9,10)}:${t.displayvalue.substring(10,11)}:${t.displayvalue.substring(11,12)}`)}return O`
    <input
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="time"
      aria-describedby="${st(ba(t,e))}"
      id="${st(e)}"
      value="${a}"
    />
  `},La=(t,e)=>t.options?O`
      <input
        data-ref="${t.reference}"
        list="${t.reference}"
        ?required="${t.requiredstate}"
        ?readonly="${t.readonlystate}"
        ?disabled="${t.disabledstate}"
        placeholder="${st(ya(t))}"
        type="text"
        class="combobox loaded"
        aria-describedby="${st(ba(t,e))}"
        id="${st(e)}"
        value="${ct(t.displayvalue)}"
      />
      <datalist id="${t.reference}">
        ${t.options.map((t=>O`
            <option value="${t.key}">
              ${t.value}
            </option>
          `))}
      </datalist>
    `:null,Pa=()=>O`
 <a>semantic link</a>
`,Oa=(t,e,a)=>{let i=[];return t.displayvalue&&t.displayvalue.pxResults&&t.displayvalue.pxResults.length>0&&(i=t.displayvalue.pxResults),se(void 0,i,a.caseID,a)},qa=(t,e)=>O`
  ${t.map((t=>O`
    <th scope='col'>${t.config.label.replace("@L ","")}</th>`))}${e?null:O`<th></th>`}
`,Ua=(t,e)=>{if(!e){const e=[];t.config.children[0].children.map(((t,a)=>(e[a]=t.config.value.replace("@P .",""),null)));const a=t.config.referenceList.replace("@P .","");return O`
      <div class="table-action-area">
        <button type="button" class="pzhc pzbutton Simple" aria-label="Add row" data-newrow="${e.join()}"
        data-ref=${a} data-action-click="addRow">${_t()}Add item</button>
      </div>
    `}return null},Fa=(t,e,a)=>{const i=t.config.referenceList.replace("@P .",""),n=t.config.children[0].children,s=a.data.data.caseInfo.content[i];return s?O`
  ${s.map(((t,s)=>O`
    <tr>
    ${n.map((t=>{const n=t,r=t.config.label.replace("@L ","");return O`
    <td data-title="${r}">${$a(n,"",e,a,`${i}(${s+1})`)}</td>`}))}${e?null:O`<td><button type="button" class="pzhc pzbutton Simple" aria-label="Delete row" data-ref=${`${i}(${s+1}).pyTemplate`}  
  data-action-click='deleteRow'>${At()}</button></td>`}
    </tr>`))}
`:null},ja=(t,e,a,i,n)=>{if(void 0===t)return null;if(!t.config||!t.config.template)return O`${t.map(((t,s)=>{const r=`${e}-${s}`;if("Region"===t.type)return ja(t.children,`${e}-0`,!0,i,n);if("reference"===t.type&&"view"===t.config.type){let e="";if(t.config.context&&(e=t.config.context),t.config.inheritedProps&&1===t.config.inheritedProps.length&&"label"===t.config.inheritedProps[0].prop){const s=t.config.inheritedProps[0].value.replace("@L ",""),o=i.data.uiResources.resources.views[t.config.name];if(o){const t="SimpleTable"===o.config.template||"ListView"===o.config.template?"field-table":"field-subview";return O`<div class='flex content-item field-item ${t}'><h4>${s}</h4>${ja(o,r,a,i,""===n?e.substring(1):n+e)}</div>`}}return ja(i.data.uiResources.resources.views[t.config.name],r,a,i,n&&""!==n?n+e:e.substring(1))}return $a(t,r,a,i,n)}))}`;if("SimpleTable"===t.config.template)return((t,e,a)=>{const i=e||"Editable"!==t.config.renderMode;return O`
  <table class='responsive'>
    <thead>
      <tr>
        ${qa(t.config.children[0].children,e)}
      </tr>
    </thead>
    <tbody>
      ${Fa(t,i,a)}
    </tbody>
  </table>
  ${Ua(t,i)}`})(t,a,i);if("ListView"===t.config.template)return((t,e,a)=>(a.sendData("dataviews",{id:t.config.referenceList,content:{paging:{pageNumber:1,pageSize:41}}}),O`
  <table class='responsive'>
    <thead>
      <tr>
        ${qa(t.config.presets[0].children[0].children,e)}
      </tr>
    </thead>
    <tbody>${ee()}
    </tbody>
  </table>`))(t,a,i);switch("DataReference"===t.config.template&&(i.isDeclarativeTarget=!0),"TwoColumn"===t.config.template&&1===t.children.length&&(t.config.template="OneColumn"),t.config.template){case"TwoColumn":return O`
          <div class="flex layout-content-inline_grid_double">
            <div class="flex layout-content-stacked">${ja(t.children[0].children,`${e}-0`,a,i,n)}</div>
            <div class="flex layout-content-stacked">${ja(t.children[1].children,`${e}-1`,a,i,n)}</div>
          </div>
        `;case"DefaultForm":return O`
          <div class="${`flex layout-content-default-form layout-content-default-form-${t.config.NumCols}`}">
            ${ja(t.children[0].children,`${e}-0`,a,i,n)}
          </div>
        `;case"DataReference":return O`
          <div class="flex layout-content-stacked">
            ${ja(t.children,`${e}-0`,a,i,n)}
          </div>
        `;case"OneColumn":return O`
          <div class="flex layout-content-stacked">
            ${ja(t.children[0].children,`${e}-0`,a,i,n)}
          </div>
        `;case"Details":return O`
          <div class="flex layout-content-stacked_with_labels_left">
            ${ja(t.children[0].children,`${e}-0`,!0,i,n)}
          </div>
        `;default:return null}},Ha=(t,e,a,i,n,s,r,o,l)=>{const c=O`${Tt()}<span class='count-badge'>${n}</span>`;if(void 0===e.caseID&&a.content){const t=a.content.pyID.split(" ")[1];return O`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${e.data.caseInfo.name} (${t})</h2>
      ${""!==i?O`<span class='badge-bg-info centered'><span class='badge_text'>${i}</span></span>`:""}
      <div class="flex layout-content-inline_middle margin-l-auto">
        ${l?ne("Attachments",c,"Simple",l):""}
        ${a.actions&&a.actions.length>0?O`
          ${ie("Actions","Start a new action",s,r)}`:""}
      </div>
    </div>
    ${((t,e)=>t&&0!==t.length?O`
  <h3>
    Assignments
  </h3>
  <table class='responsive'>
    <thead>
      <tr>
        <th span='col'>Priority</th>
        <th span='col'>Task</th>
        <th span='col'>Assigned to</th>
        <th  span='col' class="right-aligned">Action</th>
      </tr>
    </thead>
      <tbody>
        ${t.map((t=>O`
        <tr>
          <td data-title='Priority'>${t.urgency}</td>
          <td data-title='Task'>${t.name}</td>
          <td data-title='Assigned'>${t.assigneeInfo.name}</td>
          <td data-title='Action' class="right-aligned">
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
      ${l?ne("Attachments",c,"Simple",l):""}
      ${e.actions&&e.actions.length>0?O`
        ${ie("Actions","Start a new action",s,r)}`:""}
    </div>
  </div>
 <h3>${t}</h3>`},Va=(t,e,a,i,n)=>O`
  <div>${ja(t,e,!1,n,"")}</div>
  ${((t,e)=>O`
  <div class="action-button-area">
    ${null!==t?O`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    ${null!==e?O`<button type="button" class="pzhc pzbutton" @click="${e}">Save</button>`:""}
    <button type="button" data-submit="submit" class="Strong pzhc pzbutton">Submit</button>
  </div>
`)(a,i)}
`,Ba=(t,e,a,i)=>O`
  <div>${ja(t,e,!0,i)}</div>
  ${(t=>null===t?null:O`
  <div class="action-button-area">
  ${null!==t?O`<button type="button" class="pzhc pzbutton Strong" @click="${t}">Close</button>`:""}
  </div>`)(a)}
`,Wa=(t,e)=>{const a=[],i=Object.entries(e.actions);for(const e of i)e[1].name!==t&&a.push(O`
          <li role="menuitem" tabindex="-1" data-value="${e[1].ID}">${e[1].name}</li>
        `);return O`
    ${a}
  `};class Za extends ea{clearLoadingIndicator(){const t=this.getRenderRoot().querySelector("#case-data");t&&null!==t.querySelector(".loading")&&L(null,t)}sendExternalEvent(t){this.dispatchEvent(new CustomEvent("message",{detail:{type:t}}))}genErrorMessage(t){this.clearLoadingIndicator(),t.message&&-1!==t.message.indexOf("JSON.parse")?console.error("Error:",t):t.message&&-1!==t.message.indexOf("Unexpected token")?(this.errorMsg="Error 404: Resource not found",this.requestUpdate(),console.error(this.errorMsg)):(t.status?""!==t.statusText?this.errorMsg=`Error ${t.status}: ${t.statusText}`:401===t.status?this.errorMsg="Error 401: Authentication error":423===t.status?this.errorMsg="Error 423: Resource is locked by another user":500===t.status?this.errorMsg="Error 500: Internal server error":this.errorMsg=`Error ${t.status}`:t.name&&t.message?this.errorMsg=`Error ${t.name}: ${t.message}`:this.errorMsg="string"==typeof t?t:"Critical error",this.requestUpdate(),console.error("Error:",t))}fetchData(t,e){const{id:a,actionid:i,target:n}=e||{};let s="";""!==this.authentication&&"basic"!==this.authentication||(s=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(s=`Bearer ${this.token}`);const r={method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:s},mode:"cors"};let o=`${this.url}/api/application/v2/`;switch(t){case"portal":o+=`portals/${this.portalName}`;break;case"assignment":o+=`assignments/${a}`;break;case"view":o+=`cases/${a}/views/${i}`;break;case"caseaction":o+=`cases/${a}/actions/${i}`;break;case"attachment":o+=`attachments/${a}`;break;case"attachments":o+=`cases/${a}/attachments`;break;case"attachmentcategories":o+=`cases/${a}/attachment_categories`}fetch(o,r).then((a=>{if("assignment"===t)this.etag=a.headers.get("etag");else if("attachment"===t)return a.text();return a.ok||404===a.status?a.json():401===a.status?(this.token="",this.sendData("authenticate",{...e,type:t,cmd:"fetchData"}),a.json()):Promise.reject(a)})).then((e=>{try{if(e.errors&&e.errors.length>0)return;if(e.pyLocalizedValue)return this.errorMsg=`Error: ${e.pyLocalizedValue}`,void this.requestUpdate();if(e.errorDetails&&e.errorDetails.length>0)return this.errorMsg=`Error ${e.errorDetails[0].message}: ${e.localizedValue}`,this.clearLoadingIndicator(),this.requestUpdate(),void console.error("Error:",e);const s=this.getRenderRoot().querySelector("#case-data");switch(t){case"portal":this.casetypes={};let t=[];e.data&&e.data.D_pzCasesAvailableToCreateForPortal&&e.data.D_pzCasesAvailableToCreateForPortal.pxResults?t=e.data.D_pzCasesAvailableToCreateForPortal.pxResults:e.data&&e.data.pyPortal&&e.data.pyPortal.pyCaseTypesAvailableToCreate&&(t=e.data.pyPortal.pyCaseTypesAvailableToCreate);for(const e of t)"workList"===this.action&&""!==this.casetype&&this.casetype!==e.pyClassName||(this.casetypes[e.pyClassName]={canCreate:!0,name:e.pyLabel});this.cases=[];let r=[];if(e.data&&e.data.D_pyUserWorkList&&e.data.D_pyUserWorkList.pxResults?r=e.data.D_pyUserWorkList.pxResults:e.uiResources.context_data.pyPortal.summary_of_lists__.D_pyMyWorkList.pxResults&&(r=e.data[e.uiResources.context_data.pyPortal.summary_of_lists__.D_pyMyWorkList.pxResults.replace(".pxResults","")].pxResults),r.length>0)for(const t of r)this.cases.push({name:t.pyLabel,caseID:t.pxRefObjectKey,urgency:t.pxUrgencyAssign,ID:t.pzInsKey});this.requestUpdate();break;case"assignment":this.isDeclarativeTarget=!1,this.refreshOnChange=!1,this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel,this.caseID=this.casedata.ID,this.data.caseID=this.caseID,this.data.ID=a,this.actionID=this.casedata.content.pyViewName,this.casepyStatusWork=this.casedata.status,this.data.actions=this.casedata.availableActions,this.name=this.casedata.stageLabel,this.content={},L(Va(e.uiResources.resources.views[this.actionID],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),s),this.requestUpdate(),s.focus();break;case"view":if(!s){console.error("Error: case data are not present when retrieving the page");break}this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel?this.casedata.content.pyLabel:this.casedata.name,this.casedata.actions=this.casedata.availableActions,this.casedata.content.pyID=this.casedata.ID,this.data.ID=this.casedata.ID,this.casepyStatusWork=this.casedata.status,this.name=this.casedata.stageLabel,this.content={},"true"===this.bShowAttachments&&this.fetchData("attachments",{id:this.caseID}),this.name=e.data.caseInfo.name,L(Ba(e.uiResources.resources.views[i],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,this),s),this.requestUpdate(),s.focus();break;case"caseaction":this.isDeclarativeTarget=!1,this.refreshOnChange=!1,this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel,this.caseID=this.casedata.ID,this.data.caseID=this.caseID,this.data.ID="",this.casepyStatusWork=this.casedata.status,this.data.actions=this.casedata.availableActions,this.name=this.casedata.stageLabel,this.content={},L(Va(e.uiResources.resources.views[e.uiResources.root.config.name],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),s),this.requestUpdate(),s.focus();break;case"attachments":let o=e.attachments;o||(o=[]),this.numAttachments=o.length,n&&L(se(n,o,this.caseID,this),n),this.requestUpdate();break;case"attachmentcategories":this.attachmentcategories=e.attachment_categories;break;case"attachment":n(e)}}catch(t){this.errorMsg=`Error: ${t}`,this.requestUpdate(),console.error("Error:",t)}})).catch((t=>{this.genErrorMessage(t)}))}sendData(t,e){const{id:a,actionid:i,target:n}=e;let s="";""!==this.authentication&&"basic"!==this.authentication||(s=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(s=`Bearer ${this.token}`);const r={"Content-Type":"application/json;charset=UTF-8",Authorization:s},o={method:"POST",headers:r,mode:"cors"};let l=`${this.url}/api/application/v2/`;switch(this.validationMsg="",t){case"authenticate":"oauth2password"===this.authentication?o.body=`grant_type=password&client_id=${this.clientid}&client_secret=${this.clientsecret}&username=${this.username}&password=${this.password}`:"oauth2clientcredentials"===this.authentication&&(o.body=`grant_type=client_credentials&client_id=${this.clientid}&client_secret=${this.clientsecret}`),o.headers["Content-Type"]="application/x-www-form-urlencoded",l=`${this.url}/PRRestService/oauth2/v1/token`;break;case"newwork":l+="cases?viewType=form",o.body=JSON.stringify({caseTypeID:a,processID:"pyStartCase",content:{}});break;case"submitassignment":o.body=JSON.stringify({content:this.content}),o.method="PATCH",o.headers["If-Match"]=this.etag,l+=`assignments/${a}/actions/${i}?viewType=form`;break;case"submitcaseaction":o.body=JSON.stringify({content:this.content}),o.method="PATCH",o.headers["If-Match"]=this.etag,l+=`cases/${a}/actions/${i}?viewType=form`;break;case"refreshassignment":l+=`assignments/${a}/actions/${i}/refresh`,o.headers["If-Match"]=this.etag,o.method="PATCH",o.body=JSON.stringify({content:this.content,contextData:!0});break;case"dataviews":l+=`data_views/${a}`,o.body=JSON.stringify(e.content);break;case"uploadattachment":l+="attachments/upload",delete r["Content-Type"];const t=new FormData;t.append("File",i,i.name),o.body=t;break;case"attachments":l+=`cases/${a}/attachments`,o.body=JSON.stringify({attachments:i});break;case"deleteattachment":l+=`attachments/${a}`,o.method="DELETE"}fetch(l,o).then((a=>"deleteattachment"===t||"attachments"===t?a.text():("submitassignment"!==t&&"newwork"!==t||(this.etag=a.headers.get("etag")),200===a.status||201===a.status||a.status>=400&&a.status<500||500===a.status?(401===a.status&&(this.token="",this.sendData("authenticate",{...e,type:t,cmd:"sendData"})),a.json()):a.ok?Promise.resolve("ok"):Promise.reject(a)))).then((a=>{if(!(a.errors&&a.errors.length>0)){if(a.access_token)this.token=a.access_token,e!=={}&&e.type&&e.cmd&&("sendData"===e.cmd?this.sendData(e.type,e):this.fetchData(e.type,e));else if(a.errorDetails&&a.errorDetails.length>0){if(a.errorDetails[0].localizedValue){const t=this.getRenderRoot().querySelector("#case-data");wt(t,a.errorDetails),this.validationMsg=(t=>t.errorDetails?O`
    <ul>
      ${t.errorDetails.map((t=>"Error_Validation_Fail"===t.message?null:O`<li>${ct(t.localizedValue)}</li>`))}
    </ul>`:null)(a)}else this.errorMsg=`Error ${a.errorDetails[0].message}: ${a.localizedValue}`;this.clearLoadingIndicator(),n&&(n.disabled=!1,n.textContent="Save"),"submitassignment"===t&&this.fetchData("assignment",{id:this.assignmentID})}else{const e=this.getRenderRoot().querySelector("#case-data");if("refreshassignment"===t)return void(e&&a.data.caseInfo&&a.data.caseInfo.content&&(this.data.data.caseInfo.content=a.data.caseInfo.content,L(Va(this.data.uiResources.resources.views[this.actionID],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),e)));if("deleteattachment"===t)n&&!n.classList.contains("attach-files")&&this.fetchData("attachments",{id:this.caseID,target:n});else if("attachments"===t)this.fetchData("attachments",{id:this.caseID,target:n});else if("uploadattachment"===t){let t=i.name.lastIndexOf(".");-1===t&&(t=i.name.length);const e=i.name.substring(t+1),s=[{type:"File",category:i.category,fileType:e,name:i.displayName,ID:a.ID}];return void this.sendData("attachments",{id:this.caseID,actionid:s,target:n})}a.confirmationNote?(this.bShowConfirm=!0,this.caseID=a.data.caseInfo.ID,this.fetchData("view",{id:this.caseID,actionid:"pyReview"})):a.uiResources&&(this.bShowNew=!1,this.assignmentID=a.nextAssignmentInfo.ID,this.sendExternalEvent(t),this.data=a,this.casedata.content=a.data.caseInfo.content,this.data.name=this.casedata.content.pyLabel?this.casedata.content.pyLabel:this.casedata.name,this.caseID=this.casedata.content.pzInsKey,this.data.caseID=a.data.caseInfo.ID,this.data.ID=this.assignmentID,this.actionID=a.uiResources.root.config.name,this.casepyStatusWork=a.data.caseInfo.status,this.data.actions=a.data.caseInfo.availableActions,this.name=a.data.caseInfo.stageLabel,e&&(L(Va(a.uiResources.resources.views[this.actionID],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),e),e.focus()))}this.requestUpdate()}})).catch((t=>{this.genErrorMessage(t)}))}}class Ja extends Za{constructor(...t){super(...t),this.resetError=t=>{this.errorMsg="",this.validationMsg="",this.actionAreaCancel(t)},this.reloadWorkList=t=>{this.cases=[],this.requestUpdate(),this.actionAreaCancel(t)},this.actionAreaCancel=t=>{t&&t.preventDefault(),this.bShowConfirm=!1,this.bShowNew=!1,this.caseID="",this.data={},this.content={},this.casedata={},this.attachmentcategories=[],this.casepyStatusWork="",this.assignmentID="",this.actionID="",this.errorMsg="",this.numAttachments=0,this.validationMsg="",this.name="","workList"===this.action?this.fetchData("portal"):this.dispatchEvent(new CustomEvent("message",{detail:{type:"cancel"}}))},this.actionAreaSave=t=>{t&&t.preventDefault(),null===t.target.getAttribute("data-submit")&&(t.target.textContent="Saving...",t.target.disabled=!0);const e=this.getRenderRoot().querySelector("#case-data");e&&(this.content={},$t(e,this.content),""!==this.assignmentID?this.sendData("savecase",{id:this.caseID,actionid:"",target:t.target}):this.sendData("savecase",{id:this.caseID,actionid:this.actionID,target:t.target}))},this.actionRefresh=()=>{const t=this.getRenderRoot().querySelector("#case-data");t&&(this.content={},this.validationMsg="",$t(t,this.content),this.requestUpdate(),this.fetchData("caseaction",{id:this.caseID,actionid:this.actionID}))},this.displayCasesTypes=()=>(t=>{const e=[],a=Object.entries(t);for(const t of a)e.push(O`
        <li role="menuitem" tabindex="-1" data-value="${t[0]}">${t[1].name}</li>
      `);return O`
    ${e}
  `})(this.casetypes),this.displayActions=()=>this.data.actions?Wa(this.name,this.data):this.casedata.actions?Wa(this.name,this.casedata):null,this.displayAttachments=t=>{this.fetchData("attachmentcategories",{id:this.caseID}),this.fetchData("attachments",{id:this.caseID,target:t})},this.submitForm=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");return this.content={},$t(a,this.content),a.checkValidity()?"create"!==e?""!==this.data.ID?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID}):this.sendData("submitcaseaction",{id:this.data.caseID,actionid:this.actionID}):this.sendData("newwork",{id:this.casetype}):a.reportValidity(),t.preventDefault(),!1},this.createCase=t=>{if(this.name="New Case",this.bShowNew=!0,t){let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&(this.casetype=e.getAttribute("data-value"),this.name=`New ${e.textContent} `)}this.content=this.initialContent,this.caseID="",this.data={},this.casedata={},this.casetypes[this.casetype]?this.sendData("newwork",{id:this.casetype}):(this.errorMsg=`Case '${this.casetype}' is not defined`,console.error(`Case '${this.casetype}' is not defined`)),this.requestUpdate()},this.runAction=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&null!==e.getAttribute("data-value")&&(this.actionID=e.getAttribute("data-value"),this.name=e.innerText,this.data.ID="",this.actionRefresh());const a=this.getRenderRoot().querySelector("#case-data");null!=a&&L(ee(),a)},this.openCase=t=>{t.preventDefault(),this.caseID=t.target.getAttribute("data-id"),this.name="",this.data={},this.casedata={},0===this.caseID.indexOf("ASSIGN-WORKLIST")?(this.assignmentID=this.caseID,this.caseID=""):this.assignmentID="";const e=this.getRenderRoot().querySelector("#case-data");null!=e&&L(ee(),e),this.requestUpdate()},this.getData=(t,e)=>{this.dataPages[t]?L(be(this.dataPages[t]),e.nextElementSibling):this.fetchData("data",{id:t,element:e})},this.refreshAssignment=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");let i=t;if(a){if(this.content={},$t(a,this.content),i){"svg"===i.tagName&&(i=i.parentNode);const t=i.getAttribute("data-action-click"),n=i.getAttribute("data-ref");null!==n&&null!=t&&("addRow"===t?(gt(this.content,n,i.getAttribute("data-newrow")),e=a):"deleteRow"===t&&mt(this.content,n))}!0===this.bShowNew?this.sendData("refreshnew",{id:this.casetype,refreshFor:e}):this.sendData("refreshassignment",{id:this.assignmentID,actionid:this.actionID,refreshFor:e})}},this.clickHandler=t=>{let e=t.target;"svg"===e.tagName&&(e=e.parentNode);const a=e.getAttribute("data-action-click");e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e),ft(e,"click")?(this.refreshAssignment(e,bt(e,"click")),t.preventDefault()):"BUTTON"===e.tagName&&(t.preventDefault(),null!==e.getAttribute("data-submit")&&"save"!==e.getAttribute("data-submit")?this.submitForm(t,e.getAttribute("data-submit")):("addRow"===a||"deleteRow"===a)&&this.refreshAssignment(e))},this.changeHandler=t=>{let e=t.target;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e.setCustomValidity(""),e.classList.remove("error-field"),ft(e,"change")||this.isDeclarativeTarget)this.refreshAssignment(e,bt(e,"change"));else if(this.refreshOnChange){const t=this.getRenderRoot().querySelector("#case-data"),e=this.data.data.caseInfo.content;$t(t,e),L(Va(this.data.uiResources.resources.views[this.actionID],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),t)}},this.keyupHandler=t=>{const e=t.target;"TEXTAREA"===e.tagName&&(e.style.cssText="height:auto; padding:0;",e.style.cssText=`height:${e.scrollHeight}px`)},this.focusHandler=t=>{const e=t.target;e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e)}}displayContent(){if(this.bShowSave="false",""!==this.errorMsg)return na(this.errorMsg,"true"===this.bShowCancel?this.resetError:null);if(("oauth2password"===this.authentication||"oauth2clientcredentials"===this.authentication)&&""===this.token)return this.sendData("authenticate",{}),null;if(this.casetypes||"createNewWork"!==this.action&&"workList"!==this.action?"createNewWork"===this.action&&""===this.caseID&&this.casetypes&&this.casetypes[this.casetype]?this.sendData("newwork",{id:this.casetype}):""===this.name&&("openAssignment"===this.action&&""===this.assignmentID&&(this.assignmentID=this.caseID),""!==this.assignmentID?this.fetchData("assignment",{id:this.assignmentID}):""!==this.caseID&&this.fetchData("view",{id:this.caseID,actionid:"pyReview"})):(this.fetchData("portal"),"createNewWork"===this.action?this.bShowNew=!0:"workList"===this.action&&(this.bShowCancel="true")),this.bShowConfirm){const t=this.data.ID.split(" ")[1];return ia(this.casedata.name,t,this.casepyStatusWork,"true"===this.bShowAttachments?this.displayAttachments:null)}return""!==this.caseID||""!==this.assignmentID||this.bShowNew?O`
        ${Ha(this.name,this.data,this.casedata,this.casepyStatusWork,this.numAttachments,this.displayActions,this.runAction,this.openCase,"true"===this.bShowAttachments?this.displayAttachments:null)}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
        <form id="case-data">${ee()}</form>
      `:"workList"===this.action?sa(this.title,this.cases,this.displayCasesTypes,this.reloadWorkList,"true"===this.bShowCreate?this.createCase:null,this.openCase):null}async firstUpdated(){const t=this.getRenderRoot();t&&(t.addEventListener("click",this.clickHandler),t.addEventListener("focusin",this.focusHandler),t.addEventListener("change",this.changeHandler),t.addEventListener("keyup",this.keyupHandler))}}G("pega-mashup-v2")(class extends Ja{createRenderRoot(){return this.attachShadow({mode:"open"})}getRenderRoot(){return this.shadowRoot}render(){return O`
      ${oa()} ${this.displayContent()}
    `}}),G("pega-mashup-light-v2")(class extends Ja{createRenderRoot(){return this}getRenderRoot(){return this}render(){return O`
      ${this.displayContent()}
    `}})}();
