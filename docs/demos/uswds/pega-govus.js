var PegaGovUS=function(t){"use strict";
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
     */const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},a=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${a}--\x3e`,n=new RegExp(`${a}|${i}`),r="$lit$";class o{constructor(t,e){this.parts=[],this.element=e;const s=[],i=[],o=document.createTreeWalker(e.content,133,null,!1);let l=0,u=-1,p=0;const{strings:g,values:{length:f}}=t;for(;p<f;){const t=o.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let a=0;for(let t=0;t<s;t++)c(e[t].name,r)&&a++;for(;a-- >0;){const e=g[p],s=h.exec(e)[2],a=s.toLowerCase()+r,i=t.getAttribute(a);t.removeAttribute(a);const o=i.split(n);this.parts.push({type:"attribute",index:u,name:s,strings:o}),p+=o.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(a)>=0){const a=t.parentNode,i=e.split(n),o=i.length-1;for(let e=0;e<o;e++){let s,n=i[e];if(""===n)s=d();else{const t=h.exec(n);null!==t&&c(t[2],r)&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-r.length)+t[3]),s=document.createTextNode(n)}a.insertBefore(s,t),this.parts.push({type:"node",index:++u})}""===i[o]?(a.insertBefore(d(),t),s.push(t)):t.data=i[o],p+=o}}else if(8===t.nodeType)if(t.data===a){const e=t.parentNode;null!==t.previousSibling&&u!==l||(u++,e.insertBefore(d(),t)),l=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(s.push(t),u--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(a,e+1));)this.parts.push({type:"node",index:-1}),p++}}else o.currentNode=i.pop()}for(const t of s)t.parentNode.removeChild(t)}}const c=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},l=t=>-1!==t.index,d=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(t,e){const{element:{content:s},parts:a}=t,i=document.createTreeWalker(s,133,null,!1);let n=g(a),r=a[n],o=-1,c=0;const l=[];let d=null;for(;i.nextNode();){o++;const t=i.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(l.push(t),null===d&&(d=t)),null!==d&&c++;void 0!==r&&r.index===o;)r.index=null!==d?-1:r.index-c,n=g(a,n),r=a[n]}l.forEach((t=>t.parentNode.removeChild(t)))}const p=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)e++;return e},g=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(l(e))return s}return-1};
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
const f=new WeakMap,y=t=>"function"==typeof t&&f.has(t),m={},b={};
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
class v{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),s=[],a=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let n,r=0,o=0,c=i.nextNode();for(;r<a.length;)if(n=a[r],l(n)){for(;o<n.index;)o++,"TEMPLATE"===c.nodeName&&(s.push(c),i.currentNode=c.content),null===(c=i.nextNode())&&(i.currentNode=s.pop(),c=i.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,n.name,n.strings,this.options));r++}else this.__parts.push(void 0),r++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
     */const _=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),w=` ${a} `;class ${constructor(t,e,s,a){this.strings=t,this.values=e,this.type=s,this.processor=a}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let n=0;n<t;n++){const t=this.strings[n],o=t.lastIndexOf("\x3c!--");s=(o>-1||s)&&-1===t.indexOf("--\x3e",o+1);const c=h.exec(t);e+=null===c?t+(s?w:i):t.substr(0,c.index)+c[1]+c[2]+r+c[3]+a}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==_&&(e=_.createHTML(e)),t.innerHTML=e,t}}
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
     */const C=t=>null===t||!("object"==typeof t||"function"==typeof t),S=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class x{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new k(this)}_getValue(){const t=this.strings,e=t.length-1,s=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=s[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!S(t))return t}let a="";for(let i=0;i<e;i++){a+=t[i];const e=s[i];if(void 0!==e){const t=e.value;if(C(t)||!S(t))a+="string"==typeof t?t:String(t);else for(const e of t)a+="string"==typeof e?e:String(e)}}return a+=t[e],a}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class k{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===m||C(t)&&t===this.value||(this.value=t,y(t)||(this.committer.dirty=!0))}commit(){for(;y(this.value);){const t=this.value;this.value=m,t(this)}this.value!==m&&this.committer.commit()}}class D{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(d()),this.endNode=t.appendChild(d())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=d()),t.__insert(this.endNode=d())}insertAfterPart(t){t.__insert(this.startNode=d()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;y(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}const t=this.__pendingValue;t!==m&&(C(t)?t!==this.value&&this.__commitText(t):t instanceof $?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):S(t)?this.__commitIterable(t):t===b?(this.value=b,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof v&&this.value.template===e)this.value.update(t.values);else{const s=new v(e,t.processor,this.options),a=s._clone();s.update(t.values),this.__commitNode(a),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,a=0;for(const i of t)s=e[a],void 0===s&&(s=new D(this.options),e.push(s),0===a?s.appendIntoPart(this):s.insertAfterPart(e[a-1])),s.setValue(i),s.commit(),a++;a<e.length&&(e.length=a,this.clear(s&&s.endNode))}clear(t=this.startNode){s(this.startNode.parentNode,t.nextSibling,this.endNode)}}class I{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;y(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}if(this.__pendingValue===m)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=m}}class A extends x{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends k{}let E=!1;(()=>{try{const t={get capture(){return E=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class R{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;y(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}if(this.__pendingValue===m)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),a=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),a&&(this.__options=N(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=m}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const N=t=>t&&(E?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
     */;function P(t){let e=B.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},B.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(a);return s=e.keyString.get(i),void 0===s&&(s=new o(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const B=new Map,O=new WeakMap,M=(t,e,a)=>{let i=O.get(e);void 0===i&&(s(e,e.firstChild),O.set(e,i=new D(Object.assign({templateFactory:P},a))),i.appendInto(e)),i.setValue(t),i.commit()};
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
     */const L=new
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
class{handleAttributeExpressions(t,e,s,a){const i=e[0];if("."===i){return new A(t,e.slice(1),s).parts}if("@"===i)return[new R(t,e.slice(1),a.eventContext)];if("?"===i)return[new I(t,e.slice(1),s)];return new x(t,e,s).parts}handleTextExpression(t){return new D(t)}};
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
     */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const z=(t,...e)=>new $(t,e,"html",L)
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
     */,q=(t,e)=>`${t}--${e}`;let U=!0;void 0===window.ShadyCSS?U=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),U=!1);const V=t=>e=>{const s=q(e.type,t);let i=B.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},B.set(s,i));let n=i.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(a);if(n=i.keyString.get(r),void 0===n){const s=e.getTemplateElement();U&&window.ShadyCSS.prepareTemplateDom(s,t),n=new o(e,s),i.keyString.set(r,n)}return i.stringsArray.set(e.strings,n),n},j=["html","svg"],F=new Set,H=(t,e,s)=>{F.add(t);const a=s?s.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:n}=i;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(a,t);const r=document.createElement("style");for(let t=0;t<n;t++){const e=i[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{j.forEach((e=>{const s=B.get(q(e,t));void 0!==s&&s.keyString.forEach((t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{s.add(t)})),u(t,s)}))}))})(t);const o=a.content;s?function(t,e,s=null){const{element:{content:a},parts:i}=t;if(null==s)return void a.appendChild(e);const n=document.createTreeWalker(a,133,null,!1);let r=g(i),o=0,c=-1;for(;n.nextNode();)for(c++,n.currentNode===s&&(o=p(e),s.parentNode.insertBefore(e,s));-1!==r&&i[r].index===c;){if(o>0){for(;-1!==r;)i[r].index+=o,r=g(i,r);return}r=g(i,r)}}(s,r,o.firstChild):o.insertBefore(r,o.firstChild),window.ShadyCSS.prepareTemplateStyles(a,t);const c=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(s){o.insertBefore(r,o.firstChild);const t=new Set;t.add(r),u(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const W={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},K=(t,e)=>e!==t&&(e==e||t==t),Z={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:K},J="finalized";class X extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,s)=>{const a=this._attributeNameForProperty(s,e);void 0!==a&&(this._attributeToPropertyMap.set(a,s),t.push(a))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=Z){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`,a=this.getPropertyDescriptor(t,s,e);void 0!==a&&Object.defineProperty(this.prototype,t,a)}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(a){const i=this[t];this[e]=a,this.requestUpdateInternal(t,i,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||Z}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(J)||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=K){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,a=e.converter||W,i="function"==typeof a?a:a.fromAttribute;return i?i(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,a=e.converter;return(a&&a.toAttribute||W.toAttribute)(t,s)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=Z){const a=this.constructor,i=a._attributeNameForProperty(t,s);if(void 0!==i){const t=a._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const s=this.constructor,a=s._attributeToPropertyMap.get(t);if(void 0!==a){const t=s.getPropertyOptions(a);this._updateState=16|this._updateState,this[a]=s._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,s){let a=!0;if(void 0!==t){const i=this.constructor;s=s||i.getPropertyOptions(t),i._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):a=!1}!this._hasRequestedUpdate&&a&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}X.finalized=!0;
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
const G=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Y=Symbol();class Q{constructor(t,e){if(e!==Y)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(G?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const tt={};class et extends X{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,s)=>t.reduceRight(((t,s)=>Array.isArray(s)?e(s,t):(t.add(s),t)),s),s=e(t,new Set),a=[];s.forEach((t=>a.unshift(t))),this._styles=a}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!G){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new Q(String(e),Y)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?G?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==tt&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return tt}}et.finalized=!0,et.render=(t,e,a)=>{if(!a||"object"!=typeof a||!a.scopeName)throw new Error("The `scopeName` option is required.");const i=a.scopeName,n=O.has(e),r=U&&11===e.nodeType&&!!e.host,o=r&&!F.has(i),c=o?document.createDocumentFragment():e;if(M(t,c,Object.assign({templateFactory:V(i)},a)),o){const t=O.get(c);O.delete(c);const a=t.value instanceof v?t.value.template:void 0;H(i,c,a),s(e,e.firstChild),e.appendChild(c),O.set(e,t)}!n&&r&&window.ShadyCSS.styleElement(e.host)},et.shadowRootOptions={mode:"open"};const st=()=>z`
<span class="loading">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</span>
`,at=()=>z`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1140625,3.96875 C22.1140625,3.96875 22.1140625,3.96875 22.1140625,3.96875 C22.1140625,3.96875 17.46875,3.96875 17.46875,3.96875 C17.46875,3.96875 16.9898437,2.14921875 16.9898437,2.14921875 C16.9421875,1.8140625 16.7507812,1.57421875 16.5109375,1.33515625 C16.2234375,1.09609375 15.8882813,1 15.553125,1 C15.553125,1 15.553125,1 15.553125,1 C15.553125,1 9.03984375,1 9.03984375,1 C8.7046875,1 8.4171875,1.09609375 8.1296875,1.2875 C7.8421875,1.52734375 7.65078125,1.76640625 7.603125,2.1015625 C7.603125,2.1015625 7.603125,2.1015625 7.603125,2.1015625 C7.603125,2.1015625 7.12421875,3.96953125 7.12421875,3.96953125 C7.12421875,3.96953125 2.47890625,3.96953125 2.47890625,3.96953125 C2.14375,3.96953125 2,4.11328125 2,4.4484375 C2,4.78359375 2.14375,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 2.47890625,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 4.01171875,4.92734375 4.01171875,4.92734375 C4.01171875,4.92734375 4.921875,23.1742188 4.921875,23.1742188 C4.96953125,23.5570312 5.11328125,23.8929688 5.40078125,24.1320313 C5.63984375,24.4195312 5.97578125,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 6.40625,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 18.2359375,24.5632812 18.2359375,24.5632812 C18.6671875,24.5632812 19.0023438,24.4195312 19.2898438,24.1320313 C19.5289063,23.8929688 19.6726562,23.5570312 19.7210938,23.1742188 C19.7210938,23.1742188 19.7210938,23.1742188 19.7210938,23.1742188 C19.7210938,23.1742188 20.63125,4.92734375 20.63125,4.92734375 C20.63125,4.92734375 22.115625,4.92734375 22.115625,4.92734375 C22.4507812,4.92734375 22.5945312,4.78359375 22.5945312,4.4484375 C22.5945312,4.11328125 22.4507812,3.96953125 22.115625,3.96953125 L22.1140625,3.96875 Z M8.17734375,3.96875 C8.17734375,3.96875 8.56015625,2.38828125 8.56015625,2.38828125 C8.6078125,2.1484375 8.79921875,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 9.0390625,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 15.5523437,2.00546875 15.5523437,2.00546875 C15.7914062,2.00546875 15.9835937,2.14921875 16.03125,2.38828125 C16.03125,2.38828125 16.03125,2.38828125 16.03125,2.38828125 C16.03125,2.38828125 16.4140625,3.96875 16.4140625,3.96875 C16.4140625,3.96875 8.1765625,3.96875 8.1765625,3.96875 L8.17734375,3.96875 Z M19.6710938,4.9265625 C19.6710938,4.9265625 18.7609375,23.1257812 18.7609375,23.1257812 C18.7132812,23.4132812 18.521875,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 18.234375,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 6.4046875,23.5570312 6.4046875,23.5570312 C6.1171875,23.5570312 5.92578125,23.4132812 5.878125,23.1257812 C5.878125,23.1257812 5.878125,23.1257812 5.878125,23.1257812 C5.878125,23.1257812 4.96796875,4.9265625 4.96796875,4.9265625 C4.96796875,4.9265625 19.6710938,4.9265625 19.6710938,4.9265625 L19.6710938,4.9265625 Z M8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,18.1929687 8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,10.3382812 8.84765625,10.3382812 C8.84765625,10.003125 9.0390625,9.859375 9.37421875,9.859375 C9.37421875,9.859375 9.37421875,9.859375 9.37421875,9.859375 C9.709375,9.859375 9.853125,10.003125 9.853125,10.3382812 C9.853125,10.3382812 9.853125,10.3382812 9.853125,10.3382812 C9.853125,10.3382812 9.853125,18.1929687 9.853125,18.1929687 C9.853125,18.528125 9.709375,18.671875 9.37421875,18.671875 C9.37421875,18.671875 9.37421875,18.671875 9.37421875,18.671875 C9.0390625,18.671875 8.84765625,18.528125 8.84765625,18.1929687 Z M14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,18.1929687 14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,10.3382812 14.7382812,10.3382812 C14.7382812,10.003125 14.8820313,9.859375 15.2171875,9.859375 C15.2171875,9.859375 15.2171875,9.859375 15.2171875,9.859375 C15.5523437,9.859375 15.74375,10.003125 15.74375,10.3382812 C15.74375,10.3382812 15.74375,10.3382812 15.74375,10.3382812 C15.74375,10.3382812 15.74375,18.1929687 15.74375,18.1929687 C15.74375,18.528125 15.5523437,18.671875 15.2171875,18.671875 C15.2171875,18.671875 15.2171875,18.671875 15.2171875,18.671875 C14.8820313,18.671875 14.7382812,18.528125 14.7382812,18.1929687 Z M11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,19.1507813 11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,9.38046875 11.8164062,9.38046875 C11.8164062,9.0453125 11.9601563,8.85390625 12.2953125,8.85390625 C12.6304687,8.85390625 12.7742187,9.0453125 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,9.38046875 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,19.1507813 12.7742187,19.1507813 C12.7742187,19.4859375 12.6304687,19.6773437 12.2953125,19.6773437 C11.9601563,19.6773437 11.8164062,19.4859375 11.8164062,19.1507813 Z"/>
</svg>`,it=()=>z`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.5226562,11.6265625 C20.6664062,11.6265625 20.7617188,11.6742188 20.8578125,11.7703125 C20.9539062,11.8664063 21.0015625,11.9617188 21.0015625,12.1054688 C21.0015625,12.2492188 20.9539062,12.3445313 20.8578125,12.440625 C20.8578125,12.440625 20.8578125,12.440625 20.8578125,12.440625 C20.8578125,12.440625 13.2429687,20.0554687 13.2429687,20.0554687 C12.1414062,21.109375 10.8484375,21.6359375 9.41171875,21.6359375 C7.975,21.6359375 6.68203125,21.109375 5.58046875,20.0554687 C5.58046875,20.0554687 5.58046875,20.0554687 5.58046875,20.0554687 C4.5265625,19.0015625 4,17.75625 4,16.271875 C4,16.271875 4,16.271875 4,16.271875 C4,14.8351563 4.5265625,13.5421875 5.58046875,12.440625 C5.58046875,12.440625 5.58046875,12.440625 5.58046875,12.440625 C5.58046875,12.440625 14.9671875,3.14921875 14.9671875,3.14921875 C15.7335937,2.3828125 16.64375,2 17.7453125,2 C18.846875,2 19.7570312,2.3828125 20.5234375,3.14921875 C20.5234375,3.14921875 20.5234375,3.14921875 20.5234375,3.14921875 C21.2898437,3.86796875 21.6726562,4.77734375 21.6726562,5.87890625 C21.6726562,5.87890625 21.6726562,5.87890625 21.6726562,5.87890625 C21.6726562,6.98046875 21.2898437,7.890625 20.5234375,8.65703125 C20.5234375,8.65703125 20.5234375,8.65703125 20.5234375,8.65703125 C20.5234375,8.65703125 11.8546875,17.2773438 11.8546875,17.2773438 C11.3757813,17.75625 10.8007812,17.9960938 10.1304687,17.9960938 C10.1304687,17.9960938 10.1304687,17.9960938 10.1304687,17.9960938 C9.5078125,17.9960938 8.88515625,17.7570313 8.35859375,17.2773438 C8.35859375,17.2773438 8.35859375,17.2773438 8.35859375,17.2773438 C7.8796875,16.7984375 7.63984375,16.2234375 7.63984375,15.553125 C7.63984375,14.8828125 7.87890625,14.3078125 8.35859375,13.8289062 C8.35859375,13.8289062 8.35859375,13.8289062 8.35859375,13.8289062 C8.35859375,13.8289062 16.6921875,5.54375 16.6921875,5.54375 C16.7882812,5.44765625 16.93125,5.4 17.075,5.4 C17.075,5.4 17.075,5.4 17.075,5.4 C17.21875,5.4 17.3140625,5.44765625 17.4101562,5.54375 C17.50625,5.63984375 17.5539062,5.73515625 17.5539062,5.87890625 C17.5539062,5.87890625 17.5539062,5.87890625 17.5539062,5.87890625 C17.5539062,6.02265625 17.50625,6.16640625 17.4101562,6.26171875 C17.4101562,6.26171875 17.4101562,6.26171875 17.4101562,6.26171875 C17.4101562,6.26171875 9.0765625,14.4992187 9.0765625,14.4992187 C8.7890625,14.7867187 8.6453125,15.121875 8.6453125,15.553125 C8.6453125,15.984375 8.7890625,16.3195313 9.0765625,16.6070312 C9.3640625,16.8945312 9.69921875,17.0382813 10.1304687,17.0382813 C10.1304687,17.0382813 10.1304687,17.0382813 10.1304687,17.0382813 C10.5132812,17.0382813 10.8492187,16.8945312 11.1359375,16.6070312 C11.1359375,16.6070312 11.1359375,16.6070312 11.1359375,16.6070312 C11.1359375,16.6070312 19.8523437,7.98671875 19.8523437,7.98671875 C20.4273437,7.41171875 20.7140625,6.69375 20.7140625,5.8796875 C20.7140625,5.8796875 20.7140625,5.8796875 20.7140625,5.8796875 C20.7140625,5.065625 20.4265625,4.3953125 19.8523437,3.8203125 C19.8523437,3.8203125 19.8523437,3.8203125 19.8523437,3.8203125 C19.2296875,3.2453125 18.5117187,2.95859375 17.7453125,2.95859375 C17.7453125,2.95859375 17.7453125,2.95859375 17.7453125,2.95859375 C16.93125,2.95859375 16.2609375,3.24609375 15.6859375,3.8203125 C15.6859375,3.8203125 15.6859375,3.8203125 15.6859375,3.8203125 C15.6859375,3.8203125 6.29921875,13.159375 6.29921875,13.159375 C5.4375,13.9734375 5.00625,14.9789062 5.00625,16.2726562 C5.00625,16.2726562 5.00625,16.2726562 5.00625,16.2726562 C5.00625,17.5179688 5.4375,18.5234375 6.29921875,19.3375 C6.29921875,19.3375 6.29921875,19.3375 6.29921875,19.3375 C7.1609375,20.1992188 8.21484375,20.6304688 9.4125,20.6304688 C9.4125,20.6304688 9.4125,20.6304688 9.4125,20.6304688 C10.7054687,20.6304688 11.7117187,20.1992188 12.5257812,19.3375 C12.5257812,19.3375 12.5257812,19.3375 12.5257812,19.3375 C12.5257812,19.3375 20.1882812,11.7703125 20.1882812,11.7703125 C20.284375,11.6742188 20.3796875,11.6265625 20.5234375,11.6265625 L20.5226562,11.6265625 Z"/>
</svg>`,nt=()=>z`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1632813,6.753125 C22.1632813,6.753125 22.1632813,6.753125 22.1632813,6.753125 C22.1632813,6.753125 15.8414062,0.43125 15.8414062,0.43125 C15.6023437,0.14375 15.21875,0 14.7875,0 C14.7875,0 14.7875,0 14.7875,0 C14.7875,0 3.48515625,0 3.48515625,0 C3.05390625,0 2.71875,0.14375 2.43125,0.43125 C2.14375,0.71875 2,1.05390625 2,1.48515625 C2,1.48515625 2,1.48515625 2,1.48515625 C2,1.48515625 2,23.0367188 2,23.0367188 C2,23.4679688 2.14375,23.803125 2.43125,24.090625 C2.71875,24.378125 3.05390625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 3.48515625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 21.109375,24.521875 21.109375,24.521875 C21.540625,24.521875 21.8757812,24.378125 22.1632813,24.090625 C22.4507812,23.803125 22.5945312,23.4679688 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,23.0367188 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,7.80703125 22.5945312,7.80703125 C22.5945312,7.37578125 22.4507812,7.040625 22.1632813,6.753125 Z M15.6976563,1.6765625 C15.6976563,1.6765625 20.8703125,6.84921875 20.8703125,6.84921875 C20.8703125,6.84921875 16.225,6.84921875 16.225,6.84921875 C15.8898438,6.84921875 15.7460938,6.70546875 15.7460938,6.3703125 C15.7460938,6.3703125 15.7460938,6.3703125 15.7460938,6.3703125 C15.7460938,6.3703125 15.6984375,1.6765625 15.6984375,1.6765625 L15.6976563,1.6765625 Z M21.6367188,7.8546875 C21.6367188,7.8546875 21.6367188,23.0367188 21.6367188,23.0367188 C21.6367188,23.371875 21.4453125,23.515625 21.1101563,23.515625 C21.1101563,23.515625 21.1101563,23.515625 21.1101563,23.515625 C21.1101563,23.515625 3.4859375,23.515625 3.4859375,23.515625 C3.15078125,23.515625 2.959375,23.371875 2.959375,23.0367188 C2.959375,23.0367188 2.959375,23.0367188 2.959375,23.0367188 C2.959375,23.0367188 2.959375,1.48515625 2.959375,1.48515625 C2.959375,1.15 3.15078125,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 3.4859375,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 14.740625,0.95859375 14.740625,0.95859375 C14.740625,0.95859375 14.740625,6.3703125 14.740625,6.3703125 C14.740625,6.8015625 14.884375,7.13671875 15.171875,7.42421875 C15.459375,7.71171875 15.7945313,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 16.2257813,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 21.6375,7.85546875 21.6375,7.85546875 L21.6367188,7.8546875 Z"/>
</svg>`;class rt{static create(...t){return new this(...t)}mixIn(t){return Object.assign(this,t)}clone(){const t=new this.constructor;return Object.assign(t,this),t}}class ot extends rt{constructor(t=[],e=4*t.length){super();let s=t;if(s instanceof ArrayBuffer&&(s=new Uint8Array(s)),(s instanceof Int8Array||s instanceof Uint8ClampedArray||s instanceof Int16Array||s instanceof Uint16Array||s instanceof Int32Array||s instanceof Uint32Array||s instanceof Float32Array||s instanceof Float64Array)&&(s=new Uint8Array(s.buffer,s.byteOffset,s.byteLength)),s instanceof Uint8Array){const t=s.byteLength,e=[];for(let a=0;a<t;a+=1)e[a>>>2]|=s[a]<<24-a%4*8;this.words=e,this.sigBytes=t}else this.words=t,this.sigBytes=e}static random(t){const e=[],s=t=>{let e=t,s=987654321;const a=4294967295;return()=>{s=36969*(65535&s)+(s>>16)&a,e=18e3*(65535&e)+(e>>16)&a;let t=(s<<16)+e&a;return t/=4294967296,t+=.5,t*(Math.random()>.5?1:-1)}};for(let a,i=0;i<t;i+=4){const t=s(4294967296*(a||Math.random()));a=987654071*t(),e.push(4294967296*t()|0)}return new ot(e,t)}toString(t=ct){return t.stringify(this)}concat(t){const e=this.words,s=t.words,a=this.sigBytes,i=t.sigBytes;if(this.clamp(),a%4)for(let t=0;t<i;t+=1){const i=s[t>>>2]>>>24-t%4*8&255;e[a+t>>>2]|=i<<24-(a+t)%4*8}else for(let t=0;t<i;t+=4)e[a+t>>>2]=s[t>>>2];return this.sigBytes+=i,this}clamp(){const{words:t,sigBytes:e}=this;t[e>>>2]&=4294967295<<32-e%4*8,t.length=Math.ceil(e/4)}clone(){const t=super.clone.call(this);return t.words=this.words.slice(0),t}}const ct={stringify(t){const{words:e,sigBytes:s}=t,a=[];for(let t=0;t<s;t+=1){const s=e[t>>>2]>>>24-t%4*8&255;a.push((s>>>4).toString(16)),a.push((15&s).toString(16))}return a.join("")},parse(t){const e=t.length,s=[];for(let a=0;a<e;a+=2)s[a>>>3]|=parseInt(t.substr(a,2),16)<<24-a%8*4;return new ot(s,e/2)}},lt={stringify(t){const{words:e,sigBytes:s}=t,a=[];for(let t=0;t<s;t+=1){const s=e[t>>>2]>>>24-t%4*8&255;a.push(String.fromCharCode(s))}return a.join("")},parse(t){const e=t.length,s=[];for(let a=0;a<e;a+=1)s[a>>>2]|=(255&t.charCodeAt(a))<<24-a%4*8;return new ot(s,e)}},dt={stringify(t){try{return decodeURIComponent(escape(lt.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:t=>lt.parse(unescape(encodeURIComponent(t)))};class ht extends rt{constructor(){super(),this._minBufferSize=0}reset(){this._data=new ot,this._nDataBytes=0}_append(t){let e=t;"string"==typeof e&&(e=dt.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes}_process(t){let e;const{_data:s,blockSize:a}=this,i=s.words,n=s.sigBytes;let r=n/(4*a);r=t?Math.ceil(r):Math.max((0|r)-this._minBufferSize,0);const o=r*a,c=Math.min(4*o,n);if(o){for(let t=0;t<o;t+=a)this._doProcessBlock(i,t);e=i.splice(0,o),s.sigBytes-=c}return new ot(e,c)}clone(){const t=super.clone.call(this);return t._data=this._data.clone(),t}}class ut extends ht{constructor(t){super(),this.blockSize=16,this.cfg=Object.assign(new rt,t),this.reset()}static _createHelper(t){return(e,s)=>new t(s).finalize(e)}static _createHmacHelper(t){return(e,s)=>new pt(t,s).finalize(e)}reset(){super.reset.call(this),this._doReset()}update(t){return this._append(t),this._process(),this}finalize(t){t&&this._append(t);return this._doFinalize()}}class pt extends rt{constructor(t,e){super();const s=new t;this._hasher=s;let a=e;"string"==typeof a&&(a=dt.parse(a));const i=s.blockSize,n=4*i;a.sigBytes>n&&(a=s.finalize(e)),a.clamp();const r=a.clone();this._oKey=r;const o=a.clone();this._iKey=o;const c=r.words,l=o.words;for(let t=0;t<i;t+=1)c[t]^=1549556828,l[t]^=909522486;r.sigBytes=n,o.sigBytes=n,this.reset()}reset(){const t=this._hasher;t.reset(),t.update(this._iKey)}update(t){return this._hasher.update(t),this}finalize(t){const e=this._hasher,s=e.finalize(t);e.reset();return e.finalize(this._oKey.clone().concat(s))}}const gt=ot;class ft extends rt{constructor(t,e){super(),this.high=t,this.low=e}}class yt extends rt{constructor(t=[],e=8*t.length){super(),this.words=t,this.sigBytes=e}toX32(){const t=this.words,e=t.length,s=[];for(let a=0;a<e;a+=1){const e=t[a];s.push(e.high),s.push(e.low)}return gt.create(s,this.sigBytes)}clone(){const t=super.clone.call(this);t.words=this.words.slice(0);const{words:e}=t,s=e.length;for(let t=0;t<s;t+=1)e[t]=e[t].clone();return t}}const mt={stringify(t){const{words:e,sigBytes:s}=t,a=this._map;t.clamp();const i=[];for(let t=0;t<s;t+=3){const n=(e[t>>>2]>>>24-t%4*8&255)<<16|(e[t+1>>>2]>>>24-(t+1)%4*8&255)<<8|e[t+2>>>2]>>>24-(t+2)%4*8&255;for(let e=0;e<4&&t+.75*e<s;e+=1)i.push(a.charAt(n>>>6*(3-e)&63))}const n=a.charAt(64);if(n)for(;i.length%4;)i.push(n);return i.join("")},parse(t){let e=t.length;const s=this._map;let a=this._reverseMap;if(!a){this._reverseMap=[],a=this._reverseMap;for(let t=0;t<s.length;t+=1)a[s.charCodeAt(t)]=t}const i=s.charAt(64);if(i){const s=t.indexOf(i);-1!==s&&(e=s)}return((t,e,s)=>{const a=[];let i=0;for(let n=0;n<e;n+=1)if(n%4){const e=s[t.charCodeAt(n-1)]<<n%4*2|s[t.charCodeAt(n)]>>>6-n%4*2;a[i>>>2]|=e<<24-i%4*8,i+=1}return ot.create(a,i)})(t,e,a)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},bt=[];for(let t=0;t<64;t+=1)bt[t]=4294967296*Math.abs(Math.sin(t+1))|0;const vt=(t,e,s,a,i,n,r)=>{const o=t+(e&s|~e&a)+i+r;return(o<<n|o>>>32-n)+e},_t=(t,e,s,a,i,n,r)=>{const o=t+(e&a|s&~a)+i+r;return(o<<n|o>>>32-n)+e},wt=(t,e,s,a,i,n,r)=>{const o=t+(e^s^a)+i+r;return(o<<n|o>>>32-n)+e},$t=(t,e,s,a,i,n,r)=>{const o=t+(s^(e|~a))+i+r;return(o<<n|o>>>32-n)+e};class Ct extends ut{_doReset(){this._hash=new ot([1732584193,4023233417,2562383102,271733878])}_doProcessBlock(t,e){const s=t;for(let a=0;a<16;a+=1){const i=e+a,n=t[i];s[i]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8)}const a=this._hash.words,i=s[e+0],n=s[e+1],r=s[e+2],o=s[e+3],c=s[e+4],l=s[e+5],d=s[e+6],h=s[e+7],u=s[e+8],p=s[e+9],g=s[e+10],f=s[e+11],y=s[e+12],m=s[e+13],b=s[e+14],v=s[e+15];let _=a[0],w=a[1],$=a[2],C=a[3];_=vt(_,w,$,C,i,7,bt[0]),C=vt(C,_,w,$,n,12,bt[1]),$=vt($,C,_,w,r,17,bt[2]),w=vt(w,$,C,_,o,22,bt[3]),_=vt(_,w,$,C,c,7,bt[4]),C=vt(C,_,w,$,l,12,bt[5]),$=vt($,C,_,w,d,17,bt[6]),w=vt(w,$,C,_,h,22,bt[7]),_=vt(_,w,$,C,u,7,bt[8]),C=vt(C,_,w,$,p,12,bt[9]),$=vt($,C,_,w,g,17,bt[10]),w=vt(w,$,C,_,f,22,bt[11]),_=vt(_,w,$,C,y,7,bt[12]),C=vt(C,_,w,$,m,12,bt[13]),$=vt($,C,_,w,b,17,bt[14]),w=vt(w,$,C,_,v,22,bt[15]),_=_t(_,w,$,C,n,5,bt[16]),C=_t(C,_,w,$,d,9,bt[17]),$=_t($,C,_,w,f,14,bt[18]),w=_t(w,$,C,_,i,20,bt[19]),_=_t(_,w,$,C,l,5,bt[20]),C=_t(C,_,w,$,g,9,bt[21]),$=_t($,C,_,w,v,14,bt[22]),w=_t(w,$,C,_,c,20,bt[23]),_=_t(_,w,$,C,p,5,bt[24]),C=_t(C,_,w,$,b,9,bt[25]),$=_t($,C,_,w,o,14,bt[26]),w=_t(w,$,C,_,u,20,bt[27]),_=_t(_,w,$,C,m,5,bt[28]),C=_t(C,_,w,$,r,9,bt[29]),$=_t($,C,_,w,h,14,bt[30]),w=_t(w,$,C,_,y,20,bt[31]),_=wt(_,w,$,C,l,4,bt[32]),C=wt(C,_,w,$,u,11,bt[33]),$=wt($,C,_,w,f,16,bt[34]),w=wt(w,$,C,_,b,23,bt[35]),_=wt(_,w,$,C,n,4,bt[36]),C=wt(C,_,w,$,c,11,bt[37]),$=wt($,C,_,w,h,16,bt[38]),w=wt(w,$,C,_,g,23,bt[39]),_=wt(_,w,$,C,m,4,bt[40]),C=wt(C,_,w,$,i,11,bt[41]),$=wt($,C,_,w,o,16,bt[42]),w=wt(w,$,C,_,d,23,bt[43]),_=wt(_,w,$,C,p,4,bt[44]),C=wt(C,_,w,$,y,11,bt[45]),$=wt($,C,_,w,v,16,bt[46]),w=wt(w,$,C,_,r,23,bt[47]),_=$t(_,w,$,C,i,6,bt[48]),C=$t(C,_,w,$,h,10,bt[49]),$=$t($,C,_,w,b,15,bt[50]),w=$t(w,$,C,_,l,21,bt[51]),_=$t(_,w,$,C,y,6,bt[52]),C=$t(C,_,w,$,o,10,bt[53]),$=$t($,C,_,w,g,15,bt[54]),w=$t(w,$,C,_,n,21,bt[55]),_=$t(_,w,$,C,u,6,bt[56]),C=$t(C,_,w,$,v,10,bt[57]),$=$t($,C,_,w,d,15,bt[58]),w=$t(w,$,C,_,m,21,bt[59]),_=$t(_,w,$,C,c,6,bt[60]),C=$t(C,_,w,$,f,10,bt[61]),$=$t($,C,_,w,r,15,bt[62]),w=$t(w,$,C,_,p,21,bt[63]),a[0]=a[0]+_|0,a[1]=a[1]+w|0,a[2]=a[2]+$|0,a[3]=a[3]+C|0}_doFinalize(){const t=this._data,e=t.words,s=8*this._nDataBytes,a=8*t.sigBytes;e[a>>>5]|=128<<24-a%32;const i=Math.floor(s/4294967296),n=s;e[15+(a+64>>>9<<4)]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),e[14+(a+64>>>9<<4)]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8),t.sigBytes=4*(e.length+1),this._process();const r=this._hash,o=r.words;for(let t=0;t<4;t+=1){const e=o[t];o[t]=16711935&(e<<8|e>>>24)|4278255360&(e<<24|e>>>8)}return r}clone(){const t=super.clone.call(this);return t._hash=this._hash.clone(),t}}class St extends rt{constructor(t){super(),this.cfg=Object.assign(new rt,{keySize:4,hasher:Ct,iterations:1},t)}compute(t,e){let s;const{cfg:a}=this,i=a.hasher.create(),n=ot.create(),r=n.words,{keySize:o,iterations:c}=a;for(;r.length<o;){s&&i.update(s),s=i.update(t).finalize(e),i.reset();for(let t=1;t<c;t+=1)s=i.finalize(s),i.reset();n.concat(s)}return n.sigBytes=4*o,n}}class xt extends ht{constructor(t,e,s){super(),this.cfg=Object.assign(new rt,s),this._xformMode=t,this._key=e,this.reset()}static createEncryptor(t,e){return this.create(this._ENC_XFORM_MODE,t,e)}static createDecryptor(t,e){return this.create(this._DEC_XFORM_MODE,t,e)}static _createHelper(t){const e=t=>"string"==typeof t?Ot:Pt;return{encrypt:(s,a,i)=>e(a).encrypt(t,s,a,i),decrypt:(s,a,i)=>e(a).decrypt(t,s,a,i)}}reset(){super.reset.call(this),this._doReset()}process(t){return this._append(t),this._process()}finalize(t){t&&this._append(t);return this._doFinalize()}}xt._ENC_XFORM_MODE=1,xt._DEC_XFORM_MODE=2,xt.keySize=4,xt.ivSize=4;class kt extends xt{constructor(...t){super(...t),this.blockSize=1}_doFinalize(){return this._process(!0)}}class Dt extends rt{constructor(t,e){super(),this._cipher=t,this._iv=e}static createEncryptor(t,e){return this.Encryptor.create(t,e)}static createDecryptor(t,e){return this.Decryptor.create(t,e)}}function It(t,e,s){const a=t;let i;const n=this._iv;n?(i=n,this._iv=void 0):i=this._prevBlock;for(let t=0;t<s;t+=1)a[e+t]^=i[t]}class At extends Dt{}At.Encryptor=class extends At{processBlock(t,e){const s=this._cipher,{blockSize:a}=s;It.call(this,t,e,a),s.encryptBlock(t,e),this._prevBlock=t.slice(e,e+a)}},At.Decryptor=class extends At{processBlock(t,e){const s=this._cipher,{blockSize:a}=s,i=t.slice(e,e+a);s.decryptBlock(t,e),It.call(this,t,e,a),this._prevBlock=i}};const Tt={pad(t,e){const s=4*e,a=s-t.sigBytes%s,i=a<<24|a<<16|a<<8|a,n=[];for(let t=0;t<a;t+=4)n.push(i);const r=ot.create(n,a);t.concat(r)},unpad(t){const e=t,s=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=s}};class Et extends xt{constructor(t,e,s){super(t,e,Object.assign({mode:At,padding:Tt},s)),this.blockSize=4}reset(){let t;super.reset.call(this);const{cfg:e}=this,{iv:s,mode:a}=e;this._xformMode===this.constructor._ENC_XFORM_MODE?t=a.createEncryptor:(t=a.createDecryptor,this._minBufferSize=1),this._mode=t.call(a,this,s&&s.words),this._mode.__creator=t}_doProcessBlock(t,e){this._mode.processBlock(t,e)}_doFinalize(){let t;const{padding:e}=this.cfg;return this._xformMode===this.constructor._ENC_XFORM_MODE?(e.pad(this._data,this.blockSize),t=this._process(!0)):(t=this._process(!0),e.unpad(t)),t}}class Rt extends rt{constructor(t){super(),this.mixIn(t)}toString(t){return(t||this.formatter).stringify(this)}}const Nt={stringify(t){let e;const{ciphertext:s,salt:a}=t;return e=a?ot.create([1398893684,1701076831]).concat(a).concat(s):s,e.toString(mt)},parse(t){let e;const s=mt.parse(t),a=s.words;return 1398893684===a[0]&&1701076831===a[1]&&(e=ot.create(a.slice(2,4)),a.splice(0,4),s.sigBytes-=16),Rt.create({ciphertext:s,salt:e})}};class Pt extends rt{static encrypt(t,e,s,a){const i=Object.assign(new rt,this.cfg,a),n=t.createEncryptor(s,i),r=n.finalize(e),o=n.cfg;return Rt.create({ciphertext:r,key:s,iv:o.iv,algorithm:t,mode:o.mode,padding:o.padding,blockSize:n.blockSize,formatter:i.format})}static decrypt(t,e,s,a){let i=e;const n=Object.assign(new rt,this.cfg,a);i=this._parse(i,n.format);return t.createDecryptor(s,n).finalize(i.ciphertext)}static _parse(t,e){return"string"==typeof t?e.parse(t,this):t}}Pt.cfg=Object.assign(new rt,{format:Nt});const Bt={execute(t,e,s,a){let i=a;i||(i=ot.random(8));const n=St.create({keySize:e+s}).compute(t,i),r=ot.create(n.words.slice(e),4*s);return n.sigBytes=4*e,Rt.create({key:n,iv:r,salt:i})}};class Ot extends Pt{static encrypt(t,e,s,a){const i=Object.assign(new rt,this.cfg,a),n=i.kdf.execute(s,t.keySize,t.ivSize);i.iv=n.iv;const r=Pt.encrypt.call(this,t,e,n.key,i);return r.mixIn(n),r}static decrypt(t,e,s,a){let i=e;const n=Object.assign(new rt,this.cfg,a);i=this._parse(i,n.format);const r=n.kdf.execute(s,t.keySize,t.ivSize,i.salt);n.iv=r.iv;return Pt.decrypt.call(this,t,i,r.key,n)}}Ot.cfg=Object.assign(Pt.cfg,{kdf:Bt});const Mt=[],Lt=[],zt=t=>{const e=Math.sqrt(t);for(let s=2;s<=e;s+=1)if(!(t%s))return!1;return!0},qt=t=>4294967296*(t-(0|t))|0;let Ut=2,Vt=0;for(;Vt<64;)zt(Ut)&&(Vt<8&&(Mt[Vt]=qt(Ut**.5)),Lt[Vt]=qt(Ut**(1/3)),Vt+=1),Ut+=1;const jt=[];class Ft extends ut{_doReset(){this._hash=new ot(Mt.slice(0))}_doProcessBlock(t,e){const s=this._hash.words;let a=s[0],i=s[1],n=s[2],r=s[3],o=s[4],c=s[5],l=s[6],d=s[7];for(let s=0;s<64;s+=1){if(s<16)jt[s]=0|t[e+s];else{const t=jt[s-15],e=(t<<25|t>>>7)^(t<<14|t>>>18)^t>>>3,a=jt[s-2],i=(a<<15|a>>>17)^(a<<13|a>>>19)^a>>>10;jt[s]=e+jt[s-7]+i+jt[s-16]}const h=a&i^a&n^i&n,u=(a<<30|a>>>2)^(a<<19|a>>>13)^(a<<10|a>>>22),p=d+((o<<26|o>>>6)^(o<<21|o>>>11)^(o<<7|o>>>25))+(o&c^~o&l)+Lt[s]+jt[s];d=l,l=c,c=o,o=r+p|0,r=n,n=i,i=a,a=p+(u+h)|0}s[0]=s[0]+a|0,s[1]=s[1]+i|0,s[2]=s[2]+n|0,s[3]=s[3]+r|0,s[4]=s[4]+o|0,s[5]=s[5]+c|0,s[6]=s[6]+l|0,s[7]=s[7]+d|0}_doFinalize(){const t=this._data,e=t.words,s=8*this._nDataBytes,a=8*t.sigBytes;return e[a>>>5]|=128<<24-a%32,e[14+(a+64>>>9<<4)]=Math.floor(s/4294967296),e[15+(a+64>>>9<<4)]=s,t.sigBytes=4*e.length,this._process(),this._hash}clone(){const t=super.clone.call(this);return t._hash=this._hash.clone(),t}}class Ht extends Ft{_doReset(){this._hash=new ot([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])}_doFinalize(){const t=super._doFinalize.call(this);return t.sigBytes-=4,t}}Ft._createHelper(Ht),Ft._createHmacHelper(Ht);const Wt=[new ft(1116352408,3609767458),new ft(1899447441,602891725),new ft(3049323471,3964484399),new ft(3921009573,2173295548),new ft(961987163,4081628472),new ft(1508970993,3053834265),new ft(2453635748,2937671579),new ft(2870763221,3664609560),new ft(3624381080,2734883394),new ft(310598401,1164996542),new ft(607225278,1323610764),new ft(1426881987,3590304994),new ft(1925078388,4068182383),new ft(2162078206,991336113),new ft(2614888103,633803317),new ft(3248222580,3479774868),new ft(3835390401,2666613458),new ft(4022224774,944711139),new ft(264347078,2341262773),new ft(604807628,2007800933),new ft(770255983,1495990901),new ft(1249150122,1856431235),new ft(1555081692,3175218132),new ft(1996064986,2198950837),new ft(2554220882,3999719339),new ft(2821834349,766784016),new ft(2952996808,2566594879),new ft(3210313671,3203337956),new ft(3336571891,1034457026),new ft(3584528711,2466948901),new ft(113926993,3758326383),new ft(338241895,168717936),new ft(666307205,1188179964),new ft(773529912,1546045734),new ft(1294757372,1522805485),new ft(1396182291,2643833823),new ft(1695183700,2343527390),new ft(1986661051,1014477480),new ft(2177026350,1206759142),new ft(2456956037,344077627),new ft(2730485921,1290863460),new ft(2820302411,3158454273),new ft(3259730800,3505952657),new ft(3345764771,106217008),new ft(3516065817,3606008344),new ft(3600352804,1432725776),new ft(4094571909,1467031594),new ft(275423344,851169720),new ft(430227734,3100823752),new ft(506948616,1363258195),new ft(659060556,3750685593),new ft(883997877,3785050280),new ft(958139571,3318307427),new ft(1322822218,3812723403),new ft(1537002063,2003034995),new ft(1747873779,3602036899),new ft(1955562222,1575990012),new ft(2024104815,1125592928),new ft(2227730452,2716904306),new ft(2361852424,442776044),new ft(2428436474,593698344),new ft(2756734187,3733110249),new ft(3204031479,2999351573),new ft(3329325298,3815920427),new ft(3391569614,3928383900),new ft(3515267271,566280711),new ft(3940187606,3454069534),new ft(4118630271,4000239992),new ft(116418474,1914138554),new ft(174292421,2731055270),new ft(289380356,3203993006),new ft(460393269,320620315),new ft(685471733,587496836),new ft(852142971,1086792851),new ft(1017036298,365543100),new ft(1126000580,2618297676),new ft(1288033470,3409855158),new ft(1501505948,4234509866),new ft(1607167915,987167468),new ft(1816402316,1246189591)],Kt=[];for(let t=0;t<80;t+=1)Kt[t]=new ft;class Zt extends ut{constructor(){super(),this.blockSize=32}_doReset(){this._hash=new yt([new ft(1779033703,4089235720),new ft(3144134277,2227873595),new ft(1013904242,4271175723),new ft(2773480762,1595750129),new ft(1359893119,2917565137),new ft(2600822924,725511199),new ft(528734635,4215389547),new ft(1541459225,327033209)])}_doProcessBlock(t,e){const s=this._hash.words,a=s[0],i=s[1],n=s[2],r=s[3],o=s[4],c=s[5],l=s[6],d=s[7],h=a.high;let u=a.low;const p=i.high;let g=i.low;const f=n.high;let y=n.low;const m=r.high;let b=r.low;const v=o.high;let _=o.low;const w=c.high;let $=c.low;const C=l.high;let S=l.low;const x=d.high;let k=d.low,D=h,I=u,A=p,T=g,E=f,R=y,N=m,P=b,B=v,O=_,M=w,L=$,z=C,q=S,U=x,V=k;for(let s=0;s<80;s+=1){let a,i;const n=Kt[s];if(s<16)n.high=0|t[e+2*s],i=n.high,n.low=0|t[e+2*s+1],a=n.low;else{const t=Kt[s-15],e=t.high,r=t.low,o=(e>>>1|r<<31)^(e>>>8|r<<24)^e>>>7,c=(r>>>1|e<<31)^(r>>>8|e<<24)^(r>>>7|e<<25),l=Kt[s-2],d=l.high,h=l.low,u=(d>>>19|h<<13)^(d<<3|h>>>29)^d>>>6,p=(h>>>19|d<<13)^(h<<3|d>>>29)^(h>>>6|d<<26),g=Kt[s-7],f=g.high,y=g.low,m=Kt[s-16],b=m.high,v=m.low;a=c+y,i=o+f+(a>>>0<c>>>0?1:0),a+=p,i=i+u+(a>>>0<p>>>0?1:0),a+=v,i=i+b+(a>>>0<v>>>0?1:0),n.high=i,n.low=a}const r=B&M^~B&z,o=O&L^~O&q,c=D&A^D&E^A&E,l=I&T^I&R^T&R,d=(D>>>28|I<<4)^(D<<30|I>>>2)^(D<<25|I>>>7),h=(I>>>28|D<<4)^(I<<30|D>>>2)^(I<<25|D>>>7),u=(B>>>14|O<<18)^(B>>>18|O<<14)^(B<<23|O>>>9),p=(O>>>14|B<<18)^(O>>>18|B<<14)^(O<<23|B>>>9),g=Wt[s],f=g.high,y=g.low;let m=V+p,b=U+u+(m>>>0<V>>>0?1:0);m+=o,b=b+r+(m>>>0<o>>>0?1:0),m+=y,b=b+f+(m>>>0<y>>>0?1:0),m+=a,b=b+i+(m>>>0<a>>>0?1:0);const v=h+l;U=z,V=q,z=M,q=L,M=B,L=O,O=P+m|0,B=N+b+(O>>>0<P>>>0?1:0)|0,N=E,P=R,E=A,R=T,A=D,T=I,I=m+v|0,D=b+(d+c+(v>>>0<h>>>0?1:0))+(I>>>0<m>>>0?1:0)|0}a.low=u+I,u=a.low,a.high=h+D+(u>>>0<I>>>0?1:0),i.low=g+T,g=i.low,i.high=p+A+(g>>>0<T>>>0?1:0),n.low=y+R,y=n.low,n.high=f+E+(y>>>0<R>>>0?1:0),r.low=b+P,b=r.low,r.high=m+N+(b>>>0<P>>>0?1:0),o.low=_+O,_=o.low,o.high=v+B+(_>>>0<O>>>0?1:0),c.low=$+L,$=c.low,c.high=w+M+($>>>0<L>>>0?1:0),l.low=S+q,S=l.low,l.high=C+z+(S>>>0<q>>>0?1:0),d.low=k+V,k=d.low,d.high=x+U+(k>>>0<V>>>0?1:0)}_doFinalize(){const t=this._data,e=t.words,s=8*this._nDataBytes,a=8*t.sigBytes;e[a>>>5]|=128<<24-a%32,e[30+(a+128>>>10<<5)]=Math.floor(s/4294967296),e[31+(a+128>>>10<<5)]=s,t.sigBytes=4*e.length,this._process();return this._hash.toX32()}clone(){const t=super.clone.call(this);return t._hash=this._hash.clone(),t}}class Jt extends Zt{_doReset(){this._hash=new yt([new ft(3418070365,3238371032),new ft(1654270250,914150663),new ft(2438529370,812702999),new ft(355462360,4144912697),new ft(1731405415,4290775857),new ft(2394180231,1750603025),new ft(3675008525,1694076839),new ft(1203062813,3204075428)])}_doFinalize(){const t=super._doFinalize.call(this);return t.sigBytes-=16,t}}Zt._createHelper(Jt),Zt._createHmacHelper(Jt);const Xt=[],Gt=[],Yt=[];let Qt=1,te=0;for(let t=0;t<24;t+=1){Xt[Qt+5*te]=(t+1)*(t+2)/2%64;const e=(2*Qt+3*te)%5;Qt=te%5,te=e}for(let t=0;t<5;t+=1)for(let e=0;e<5;e+=1)Gt[t+5*e]=e+(2*t+3*e)%5*5;let ee=1;for(let t=0;t<24;t+=1){let e=0,s=0;for(let t=0;t<7;t+=1){if(1&ee){const a=(1<<t)-1;a<32?s^=1<<a:e^=1<<a-32}128&ee?ee=ee<<1^113:ee<<=1}Yt[t]=ft.create(e,s)}const se=[];for(let t=0;t<25;t+=1)se[t]=ft.create();
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
    */ot.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),ot.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),ot.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),ot.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),ot.create([0,1518500249,1859775393,2400959708,2840853838]),ot.create([1352829926,1548603684,1836072691,2053994217,0]);const ae=[],ie=[],ne=[],re=[],oe=[],ce=[],le=[],de=[],he=[],ue=[],pe=[];for(let t=0;t<256;t+=1)pe[t]=t<128?t<<1:t<<1^283;let ge=0,fe=0;for(let t=0;t<256;t+=1){let t=fe^fe<<1^fe<<2^fe<<3^fe<<4;t=t>>>8^255&t^99,ae[ge]=t,ie[t]=ge;const e=pe[ge],s=pe[e],a=pe[s];let i=257*pe[t]^16843008*t;ne[ge]=i<<24|i>>>8,re[ge]=i<<16|i>>>16,oe[ge]=i<<8|i>>>24,ce[ge]=i,i=16843009*a^65537*s^257*e^16843008*ge,le[t]=i<<24|i>>>8,de[t]=i<<16|i>>>16,he[t]=i<<8|i>>>24,ue[t]=i,ge?(ge=e^pe[pe[pe[a^e]]],fe^=pe[pe[fe]]):(fe=1,ge=fe)}const ye=[0,1,2,4,8,16,32,64,128,27,54];(class extends Et{_doReset(){let t;if(this._nRounds&&this._keyPriorReset===this._key)return;this._keyPriorReset=this._key;const e=this._keyPriorReset,s=e.words,a=e.sigBytes/4;this._nRounds=a+6;const i=4*(this._nRounds+1);this._keySchedule=[];const n=this._keySchedule;for(let e=0;e<i;e+=1)e<a?n[e]=s[e]:(t=n[e-1],e%a?a>6&&e%a==4&&(t=ae[t>>>24]<<24|ae[t>>>16&255]<<16|ae[t>>>8&255]<<8|ae[255&t]):(t=t<<8|t>>>24,t=ae[t>>>24]<<24|ae[t>>>16&255]<<16|ae[t>>>8&255]<<8|ae[255&t],t^=ye[e/a|0]<<24),n[e]=n[e-a]^t);this._invKeySchedule=[];const r=this._invKeySchedule;for(let e=0;e<i;e+=1){const s=i-e;t=e%4?n[s]:n[s-4],r[e]=e<4||s<=4?t:le[ae[t>>>24]]^de[ae[t>>>16&255]]^he[ae[t>>>8&255]]^ue[ae[255&t]]}}encryptBlock(t,e){this._doCryptBlock(t,e,this._keySchedule,ne,re,oe,ce,ae)}decryptBlock(t,e){const s=t;let a=s[e+1];s[e+1]=s[e+3],s[e+3]=a,this._doCryptBlock(s,e,this._invKeySchedule,le,de,he,ue,ie),a=s[e+1],s[e+1]=s[e+3],s[e+3]=a}_doCryptBlock(t,e,s,a,i,n,r,o){const c=t,l=this._nRounds;let d=c[e]^s[0],h=c[e+1]^s[1],u=c[e+2]^s[2],p=c[e+3]^s[3],g=4;for(let t=1;t<l;t+=1){const t=a[d>>>24]^i[h>>>16&255]^n[u>>>8&255]^r[255&p]^s[g];g+=1;const e=a[h>>>24]^i[u>>>16&255]^n[p>>>8&255]^r[255&d]^s[g];g+=1;const o=a[u>>>24]^i[p>>>16&255]^n[d>>>8&255]^r[255&h]^s[g];g+=1;const c=a[p>>>24]^i[d>>>16&255]^n[h>>>8&255]^r[255&u]^s[g];g+=1,d=t,h=e,u=o,p=c}const f=(o[d>>>24]<<24|o[h>>>16&255]<<16|o[u>>>8&255]<<8|o[255&p])^s[g];g+=1;const y=(o[h>>>24]<<24|o[u>>>16&255]<<16|o[p>>>8&255]<<8|o[255&d])^s[g];g+=1;const m=(o[u>>>24]<<24|o[p>>>16&255]<<16|o[d>>>8&255]<<8|o[255&h])^s[g];g+=1;const b=(o[p>>>24]<<24|o[d>>>16&255]<<16|o[h>>>8&255]<<8|o[255&u])^s[g];g+=1,c[e]=f,c[e+1]=y,c[e+2]=m,c[e+3]=b}}).keySize=8;const me=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],be=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],ve=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],_e=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],we=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679];function $e(t,e){const s=(this._lBlock>>>t^this._rBlock)&e;this._rBlock^=s,this._lBlock^=s<<t}function Ce(t,e){const s=(this._rBlock>>>t^this._lBlock)&e;this._lBlock^=s,this._rBlock^=s<<t}class Se extends Et{_doReset(){const t=this._key.words,e=[];for(let s=0;s<56;s+=1){const a=me[s]-1;e[s]=t[a>>>5]>>>31-a%32&1}this._subKeys=[];const s=this._subKeys;for(let t=0;t<16;t+=1){s[t]=[];const a=s[t],i=ve[t];for(let t=0;t<24;t+=1)a[t/6|0]|=e[(be[t]-1+i)%28]<<31-t%6,a[4+(t/6|0)]|=e[28+(be[t+24]-1+i)%28]<<31-t%6;a[0]=a[0]<<1|a[0]>>>31;for(let t=1;t<7;t+=1)a[t]>>>=4*(t-1)+3;a[7]=a[7]<<5|a[7]>>>27}this._invSubKeys=[];const a=this._invSubKeys;for(let t=0;t<16;t+=1)a[t]=s[15-t]}encryptBlock(t,e){this._doCryptBlock(t,e,this._subKeys)}decryptBlock(t,e){this._doCryptBlock(t,e,this._invSubKeys)}_doCryptBlock(t,e,s){const a=t;this._lBlock=t[e],this._rBlock=t[e+1],$e.call(this,4,252645135),$e.call(this,16,65535),Ce.call(this,2,858993459),Ce.call(this,8,16711935),$e.call(this,1,1431655765);for(let t=0;t<16;t+=1){const e=s[t],a=this._lBlock,i=this._rBlock;let n=0;for(let t=0;t<8;t+=1)n|=_e[t][((i^e[t])&we[t])>>>0];this._lBlock=i,this._rBlock=a^n}const i=this._lBlock;this._lBlock=this._rBlock,this._rBlock=i,$e.call(this,1,1431655765),Ce.call(this,8,16711935),Ce.call(this,2,858993459),$e.call(this,16,65535),$e.call(this,4,252645135),a[e]=this._lBlock,a[e+1]=this._rBlock}}Se.keySize=2,Se.ivSize=2,Se.blockSize=2;class xe extends Et{_doReset(){const t=this._key.words;if(2!==t.length&&4!==t.length&&t.length<6)throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");const e=t.slice(0,2),s=t.length<4?t.slice(0,2):t.slice(2,4),a=t.length<6?t.slice(0,2):t.slice(4,6);this._des1=Se.createEncryptor(ot.create(e)),this._des2=Se.createEncryptor(ot.create(s)),this._des3=Se.createEncryptor(ot.create(a))}encryptBlock(t,e){this._des1.encryptBlock(t,e),this._des2.decryptBlock(t,e),this._des3.encryptBlock(t,e)}decryptBlock(t,e){this._des3.decryptBlock(t,e),this._des2.encryptBlock(t,e),this._des1.decryptBlock(t,e)}}function ke(){const t=this._S;let e=this._i,s=this._j,a=0;for(let i=0;i<4;i+=1){e=(e+1)%256,s=(s+t[e])%256;const n=t[e];t[e]=t[s],t[s]=n,a|=t[(t[e]+t[s])%256]<<24-8*i}return this._i=e,this._j=s,a}xe.keySize=6,xe.ivSize=2,xe.blockSize=2;class De extends kt{_doReset(){const t=this._key,e=t.words,s=t.sigBytes;this._S=[];const a=this._S;for(let t=0;t<256;t+=1)a[t]=t;for(let t=0,i=0;t<256;t+=1){const n=t%s,r=e[n>>>2]>>>24-n%4*8&255;i=(i+a[t]+r)%256;const o=a[t];a[t]=a[i],a[i]=o}this._j=0,this._i=this._j}_doProcessBlock(t,e){t[e]^=ke.call(this)}}function Ie(t,e,s,a){const i=t;let n;const r=this._iv;r?(n=r.slice(0),this._iv=void 0):n=this._prevBlock,a.encryptBlock(n,0);for(let t=0;t<s;t+=1)i[e+t]^=n[t]}De.keySize=8,De.ivSize=0;class Ae extends Dt{}Ae.Encryptor=class extends Ae{processBlock(t,e){const s=this._cipher,{blockSize:a}=s;Ie.call(this,t,e,a,s),this._prevBlock=t.slice(e,e+a)}},Ae.Decryptor=class extends Ae{processBlock(t,e){const s=this._cipher,{blockSize:a}=s,i=t.slice(e,e+a);Ie.call(this,t,e,a,s),this._prevBlock=i}};class Te extends Dt{}Te.Encryptor=class extends Te{processBlock(t,e){const s=t,a=this._cipher,{blockSize:i}=a,n=this._iv;let r=this._counter;n&&(this._counter=n.slice(0),r=this._counter,this._iv=void 0);const o=r.slice(0);a.encryptBlock(o,0),r[i-1]=r[i-1]+1|0;for(let t=0;t<i;t+=1)s[e+t]^=o[t]}},Te.Decryptor=Te.Encryptor;const Ee=t=>{let e=t;if(255==(t>>24&255)){let s=t>>16&255,a=t>>8&255,i=255&t;255===s?(s=0,255===a?(a=0,255===i?i=0:i+=1):a+=1):s+=1,e=0,e+=s<<16,e+=a<<8,e+=i}else e+=1<<24;return e};
/** @preserve
     * Counter block mode compatible with  Dr Brian Gladman fileenc.c
     * derived from CryptoJS.mode.CTR
     * Jan Hruby jhruby.web@gmail.com
     */
class Re extends Dt{}Re.Encryptor=class extends Re{processBlock(t,e){const s=t,a=this._cipher,{blockSize:i}=a,n=this._iv;let r=this._counter;n&&(this._counter=n.slice(0),r=this._counter,this._iv=void 0),(t=>{const e=t;e[0]=Ee(e[0]),0===e[0]&&(e[1]=Ee(e[1]))})(r);const o=r.slice(0);a.encryptBlock(o,0);for(let t=0;t<i;t+=1)s[e+t]^=o[t]}},Re.Decryptor=Re.Encryptor;class Ne extends Dt{}Ne.Encryptor=class extends Ne{processBlock(t,e){this._cipher.encryptBlock(t,e)}},Ne.Decryptor=class extends Ne{processBlock(t,e){this._cipher.decryptBlock(t,e)}};class Pe extends Dt{}Pe.Encryptor=class extends Pe{processBlock(t,e){const s=t,a=this._cipher,{blockSize:i}=a,n=this._iv;let r=this._keystream;n&&(this._keystream=n.slice(0),r=this._keystream,this._iv=void 0),a.encryptBlock(r,0);for(let t=0;t<i;t+=1)s[e+t]^=r[t]}},Pe.Decryptor=Pe.Encryptor;const Be=t=>`0${t}`.slice(-2),Oe=t=>{if(t.endsWith(" GMT")&&23===t.length)return new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T${t.substring(9,11)}:${t.substring(11,13)}:${t.substring(13,19)}Z`);if(8===t.length){let e=new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T00:00:00.000Z`);return e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),e}if(10===t.length){let e=new Date(`${t.substring(6,10)}-${t.substring(0,2)}-${t.substring(3,5)}T00:00:00.000Z`);return e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),e}return null},Me=t=>t&&"string"==typeof t?t.replace(/&amp;|&lt;|&gt;|&#39;|&#40;|&#41;|&quot;/g,(t=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&#40;":"(","&#41;":")","&quot;":'"'}[t]||t))):"",Le=(t,e,s,a,i)=>{if("string"!=typeof e)return;if(a){const t=qe(a,e);if(t===i||`${t}`==`${i}`||null===t&&""===i)return}const n=e.lastIndexOf(".");if(-1===n)return void(t[e]=i);if(!s)return void ze(t,e,i);const r={};let o=e.substring(0,n);r[e.substring(n+1)]=i;const c=o.indexOf("(");if(-1===c)s.push({instruction:"UPDATE",target:o,content:r});else{const t=o.substring(c+1,o.length-1);o=o.substring(0,c),s.push({instruction:"UPDATE",target:o,listIndex:parseInt(t,10),content:r})}},ze=(t,e,s)=>{if("string"!=typeof e)return;const a=e.split(".");let i=t;for(const t in a){let e=a[t];const n=e.indexOf("(");if(-1===n)t<a.length-1?void 0===i[e]&&(i[e]={}):i[e]=s,i=i[e];else{const t=e.substring(n+1,e.length-1);e=e.substring(0,n),void 0===i[e]&&(i[e]=[]);for(let s=i[e].length;s<t;s++)i[e].push({});i=i[e][t-1]}}},qe=(t,e)=>{if("string"!=typeof e)return null;let s=t;const a=e.split(".");for(const t in a){const e=a[t],i=e.indexOf("(");if(-1===i){if(void 0===s[e])return null;s=s[e]}else{const t=e.substring(i+1,e.length-1),a=s[e.substring(0,i)];if(!(a&&Array.isArray(a)&&a.length>=t))return null;s=a[t-1]}}return s},Ue=t=>{for(const e in t)"object"==typeof t[e]?Ue(t[e]):"string"==typeof t[e]&&(t[e]="")},Ve=(t,e)=>{const s=t.getAttribute(`data-action-${e}`);return!(!s||"postValue"!==s&&0!==s.indexOf("refresh"))},je=(t,e)=>{const s=t.getAttribute(`data-action-${e}`);return s&&0===s.indexOf("refresh")?s.replace("refresh-",""):""};function Fe(t,e,s){try{switch(e){case">":return parseInt(t,10)>parseInt(s,10);case"<":return parseInt(t,10)<parseInt(s,10);case">=":return parseInt(t,10)>=parseInt(s,10);case"<=":return parseInt(t,10)<=parseInt(s,10);case"==":return`${t}`==`${s}`;case"!=":return`${t}`!=`${s}`}}catch(t){}return!1}const He=(t,e)=>{const s=t.replace("@E ","").split("&&");for(const t in s){const a=s[t].trim().match(/[\w.]+|[><=!]+|'[^']+'/g);if(3===a.length){const t=e[a[0].substring(1)];if(void 0!==t&&!Fe(t,a[1],a[2].replace(/^'|'$/g,"")))return!1}}return!0},We=(t,e,s,a)=>{for(const n of t.elements)if("INPUT"===n.tagName||"TEXTAREA"===n.tagName||"SELECT"===n.tagName){const t=n.getAttribute("data-ref");if(null!==t&&"pyID"!==t)if("INPUT"===n.tagName){const r=n.getAttribute("type");if(n.classList.contains("input-date-day")||n.classList.contains("input-date-month")||n.classList.contains("input-date-year")){if(n.classList.contains("input-date-day")){const r=n.closest(".input-date").parentNode,o=r.querySelector(".input-date-month"),c=r.querySelector(".input-date-year");if(null!==o&&null!==c&&""!==n.value&&""!==o.value&&""!==c.value){const r=`${Be(o.value)}/${Be(n.value)}/${i=c.value,`0${i}`.slice(-4)}`;Le(e,t,s,a,r)}}}else if("checkbox"===r)Le(e,t,s,a,n.checked);else if("radio"===r)n.checked&&Le(e,t,s,a,n.value);else if("tel"===r){let i=n.value;"SELECT"===n.parentNode.firstElementChild.tagName&&"field-countrycode"===n.parentNode.firstElementChild.className&&(i=n.parentNode.firstElementChild.value+i),Le(e,t,s,a,i)}else if("date"===r){let i;n.valueAsDate&&(i=new Date(n.valueAsDate)),i&&i instanceof Date&&i.getTime()==i.getTime()||(i=new Date(n.value)),i&&i instanceof Date&&i.getTime()==i.getTime()?(i=new Date(i.getTime()+6e4*i.getTimezoneOffset()),Le(e,t,s,a,`${Be(i.getMonth()+1)}/${Be(i.getDate())}/${i.getFullYear()}`)):Le(e,t,s,a,n.value)}else Le(e,t,s,a,n.value)}else Le(e,t,s,a,n.value)}var i,n;if(t&&t.querySelectorAll){const i=t.querySelectorAll("[contenteditable]");for(let t=0;t<i.length;t++){const r=i[t],o=r.getAttribute("data-ref");Le(e,o,s,a,(n=r.innerHTML)&&"string"==typeof n?n.replace(/[&<>'"]/g,(t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","(":"&#40;",")":"&#41;",'"':"&quot;"}[t]||t))):"")}}},Ke=(t,e,s,a,i)=>{if(null==a)return null;let n;const r=`${Math.random().toString(36).substr(2,9)}`,o=document.createElement("ul");o.setAttribute("id",`menu-overlay-${r}`),o.setAttribute("role","menu"),o.setAttribute("aria-labelledby",`menubutton-${r}`),o.setAttribute("tabindex","-1");const c=()=>{document.body.removeEventListener("click",d),document.body.removeEventListener("keydown",l),o&&(o.previousElementSibling&&(o.previousElementSibling.setAttribute("aria-expanded","false"),o.previousElementSibling.focus()),o.remove())},l=t=>{38===t.keyCode?(n=n.previousElementSibling,null===n&&(n=o.lastElementChild),n.focus()):40===t.keyCode?(n=n.nextElementSibling,null===n&&(n=o.firstElementChild),n.focus()):27===t.keyCode||9===t.keyCode?c():13===t.keyCode&&(a(t),c())},d=t=>{if(t){let e=t.target;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&e.nextElementSibling===o)return;e.parentNode===o&&a(t),c()}},h=t=>{if("keydown"===t.type&&40!==t.keyCode)return;if(t.preventDefault(),t.stopPropagation(),"blur"===t.type)return void d(t);const e=t.currentTarget;"BUTTON"!==e.tagName?(a(t),c()):null===e.nextElementSibling?(e.parentNode.appendChild(o),e.setAttribute("aria-expanded","true"),M(s(),o),n=e.nextElementSibling.firstElementChild,n.focus(),document.body.addEventListener("click",d),document.body.addEventListener("keydown",l)):c()};return z`
    <div class="button-menu">
    <button type='button' id="${`menubutton-${r}`}" aria-haspopup="true" aria-controls="${`menu-overlay-${r}`}" aria-expanded="false"
    @click="${h}" @keydown="${h}" @blur="${h}"
    class="${`pzhc pzbutton Simple ${i||"action-menu"}`}" aria-label="${i18n.t(e)}">${i18n.t(t)}</button>
    </div>
  `},Ze=(t,e,s,a,i)=>{let n=0;const r=t=>{if(void 0===t||"string"==typeof t&&""===t)return;if("URL"===e[n].category)return void window.open(t);let s=e[n].fileName;if(void 0===s&&(s=e[n].name),void 0===s&&(s=e[n].pyAttachName),!s)return;const a=window.document.createElement("a");if("Correspondence"===e[n].category){s=`${e[n].name}.html`;const i=`<html><head><title>${e[n].name}</title></head><body>${t}</body></html>`,r=new Blob([i],{type:"text"});a.href=window.URL.createObjectURL(r)}else{const e=function(t){const e=window.atob(t),s=e.length,a=new Uint8Array(s);for(let t=0;t<s;t++){const s=e.charCodeAt(t);a[t]=s}return a}(t),s=new Blob([e],{type:"octet/stream"});a.href=window.URL.createObjectURL(s)}a.download=s,document.body.appendChild(a),a.click(),document.body.removeChild(a)},o=t=>{t.stopPropagation();const s=t.target;n=s.getAttribute("data-id"),a.fetchData.call(a,"attachment",{id:e[n].ID,target:r})},c=s=>{s.preventDefault(),s.stopPropagation();const i=s.target.closest("button");n=i.getAttribute("data-id"),a.sendData.call(a,"deleteattachment",{id:e[n].ID,target:t})},l=r=>{r.stopPropagation();const o=r.target.closest("button");n=parseInt(o.getAttribute("data-id"),10),i.splice(n,1),M(Ze(t,e,s,a,i),t)},d=t=>{t.stopPropagation(),t.preventDefault();const e=t.target;if(n=e.getAttribute("data-id"),"INPUT"===e.tagName){const t=e.getAttribute("data-prop-id");i[n][t]=e.value}else"SELECT"===e.tagName&&(i[n].category=e.value)},h=e=>{e.preventDefault();const s=e.target,a=e.relatedTarget,i=null===s?null:s.closest(".attach-files"),n=null===a?null:a.closest(".attach-files");if("dragenter"===e.type||"dragover"===e.type?null!=i&&i.classList.add("drop-file-hover"):"dragleave"!==e.type&&"drop"!==e.type||null===n&&null!==i&&i.classList.remove("drop-file-hover"),"drop"===e.type){const a=e.dataTransfer.files;t||(t=s.closest(".attach-files")),p(s,a)}},u=n=>{n&&(n.stopPropagation(),n.preventDefault());for(let n=0;n<i.length;n++){const r=i[n];delete r.editing,r.loading=!0,"URL"===r.type?(e.unshift(r),a.sendData.call(a,"attachments",{id:s,actionid:[r],target:t})):(e.unshift({name:r.displayName,extension:r.extension,loading:!0}),a.sendData.call(a,"uploadattachment",{actionid:r,target:t}))}M(Ze(t,e,s,a),t)},p=(i,n)=>{const r=[];for(let t=0;t<n.length;t++){const e=n[t];let s=e.name.lastIndexOf(".");-1===s&&(s=e.name.length),e.displayName=e.name.substring(0,s),e.extension=e.name.substring(s+1),e.editing=!0,e.category="File",r.push(e)}M(Ze(t,e,s,a,r),t)},g=e=>{e.stopPropagation();let s=e.target;if("BUTTON"===s.tagName)return s=e.target.parentNode.parentNode.firstElementChild,void s.click();t||(t=s.closest(".attach-files")),p(s,s.files)},f=i=>{i.stopPropagation();M(Ze(t,e,s,a,[{type:"URL",category:"URL",name:"",url:"",editing:!0}]),t)},y=i=>{i.stopPropagation(),M(Ze(t,e,s,a),t)},m=(t,e)=>{let s=new Date(e.createTime);return s=s.toLocaleDateString(void 0,{year:"numeric",month:"numeric",day:"numeric"}),z`
    <div class='list-item-title'>
      <button type='button' class='Light'  data-id="${t}" @click="${o}">${e.name}</button>
      ${e.loading?"":z`
      <span class='list-item-meta'><span>${e.createdBy}</span><span>${s}</span><span>${i18n.t("Category:")} ${e.category}</span></span>`}
    </div>`},b=()=>z`<li role="menuitem" tabindex="-1" data-value="Download">${i18n.t("Download")}</li>
  <li role="menuitem" tabindex="-1" data-value="Delete">${i18n.t("Delete")}</li>`,v=i=>{let o=i.target;if(i.path&&i.path.length>0?o=i.path[0]:i.originalTarget&&(o=i.originalTarget),o){const i=o.getAttribute("data-value"),c=e[n].pzInsKey||e[n].ID;"Download"===i?a.fetchData.call(a,"attachment",{id:c,target:r}):"Delete"===i&&(a.sendData.call(a,"deleteattachment",{id:c,target:t}),M(Ze(void 0,[],s,a,[]),t))}},_=t=>z`<div class='row-item'>
    <span class='doc-icon'>${nt()}<span>${t.extension}</span></span>
    <div class='list-item-title'><span>${t.pyAttachName||t.name}</span>
    <span class="list-item-meta"><span>${t.pyCategoryName||t.category}</span>
    <span>${t.pxCreateOperator||t.createdBy}</span></span></div>
    ${Ke(z`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
<path d="M14.353125,6.353125 C13.9703125,6.7359375 13.4914062,6.928125 12.9640625,6.928125 C12.4367188,6.928125 11.9585938,6.73671875 11.575,6.353125 C11.1921875,5.9703125 11,5.49140625 11,4.9640625 C11,4.43671875 11.1914062,3.95859375 11.575,3.575 C11.9578125,3.1921875 12.4367188,3 12.9640625,3 C13.4914063,3 13.9695312,3.19140625 14.353125,3.575 C14.7359375,3.9578125 14.928125,4.43671875 14.928125,4.9640625 C14.928125,5.49140625 14.7367187,5.96953125 14.353125,6.353125 Z M14.353125,13.7289063 C13.9703125,14.1117188 13.4914062,14.3039063 12.9640625,14.3039063 C12.4367188,14.3039063 11.9585938,14.1125 11.575,13.7289063 C11.1921875,13.3460938 11,12.8671875 11,12.3398438 C11,11.8125 11.1914062,11.334375 11.575,10.9507813 C11.9578125,10.5679688 12.4367188,10.3757813 12.9640625,10.3757813 C13.4914063,10.3757813 13.9695312,10.5671875 14.353125,10.9507813 C14.7359375,11.3335938 14.928125,11.8125 14.928125,12.3398438 C14.928125,12.8671875 14.7367187,13.3453125 14.353125,13.7289063 Z M14.353125,21.1039062 C13.9703125,21.4867187 13.4914062,21.6789062 12.9640625,21.6789062 C12.4367188,21.6789062 11.9585938,21.4875 11.575,21.1039062 C11.1921875,20.7210938 11,20.2421875 11,19.7148438 C11,19.1875 11.1914062,18.709375 11.575,18.3257813 C11.9578125,17.9429688 12.4367188,17.7507813 12.9640625,17.7507813 C13.4914063,17.7507813 13.9695312,17.9421875 14.353125,18.3257813 C14.7359375,18.7085937 14.928125,19.1875 14.928125,19.7148438 C14.928125,20.2421875 14.7367187,20.7203125 14.353125,21.1039062 Z"></path>
</svg>`,"Actions",b,v,"button-action")}
  </div>`,w=(t,e)=>e.loading?z`${m(t,e)}${st()}`:e.editing?"URL"===e.type?z`
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
    ${a.attachmentcategories.map((t=>z`
      <option ?selected=${t.ID===e}>${t.ID}</option>
    `))}
    </select>`)(t,e.category)}
      <span class='flex-all'>${e.name}</span>
      <span>${Math.round(e.size/1e3)}Kb</span>
      <button type='button' data-id="${t}" @click="${l}" class='pzhc pzbutton Simple' 
      aria-label=${i18n.t("Delete")}>${at()}</button>`:z`${m(t,e)}
    <button type='button' data-id="${t}" @click="${c}" class='pzhc pzbutton Simple' 
    aria-label=${i18n.t("Delete")}>${at()}</button>`,$=t=>{if(!s)return st();const e=[];if(void 0!==t){const s=Object.entries(t);for(const t of s){let s=t[1].extension;void 0===s&&(s=t[1].type),s||(s=""),s.length>5&&(s=s.substring(0,5)),"URL"===t[1].type&&t[1].editing?e.push(z`<div class='flex layout-content-stacked content-items-maxwidth'>
              ${w(t[0],t[1])}
            </div>`):e.push(z`<div class='row-item'>
              <span class='doc-icon'>${nt()}<span>${s}</span></span>
              ${w(t[0],t[1])}
            </div>`)}}return e&&e.length>0?e:z`<div class='empty'>${i18n.t("no attachments found")}</div>`};if(!t){if(e&&e.length>0&&e[0].pyAttachName){n=0,e[0].extension="";const t=e[0].pyAttachName.split(".");return t.length>1&&(e[0].extension=t[t.length-1]),_(e[0])}return z`<div @dragenter="${h}" @dragover="${h}" @dragleave="${h}"  
    @drop="${h}" class='attach-files list-items'>
      <div class="file-upload">
        <input @change="${g}" type="file">
        ${it()}<span>${i18n.t(" Drag and drop or ")}
        <button type='button' aria-labelledby='${i18n.t("click to attach a file")}' class='Light' @click="${g}">${i18n.t("choose file")}</button>
      </div>
    </div>`}if(t&&t.classList.contains("attach-files")){if(i&&i.length>0)return a.sendData.call(a,"uploadattachment",{actionid:i[0],target:t}),C=i[0],S=!0,z`<div class='row-item'>
    <span class='doc-icon'>${nt()}<span>${C.extension}</span></span>
    <div class='list-item-title'><span>${C.displayName}</span>${S?z`<span class="list-item-meta"><span>
    ${i18n.t("Uploading...")}</span></span>`:""}</div>
  </div>`;if(e&&e.length>0)return _(e[0])}var C,S;let x="Attachments";return void 0!==i&&i.length>0&&(x="URL"===i[0].type?"Attach a link":"Attach files"),z`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${i18n.t(x)}</h2>
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
        <div class='upload-content'>${$(i)}</div>
        <div class="action-button-area">
          <button type="button" class="pzhc pzbutton" @click="${y}">${i18n.t("Cancel")}</button>
          <button type="button" class="Strong pzhc pzbutton" @click="${u}">${i18n.t("Upload")}</button>
        </div>
      </div>`:z`
      <form id="modalcontent" @dragenter="${h}" @dragover="${h}" @dragleave="${h}"  
      @drop="${h}" class='attach-files list-items'>
        <div class="file-upload">
          <input @change="${g}" type="file" multiple="">
          ${it()}<span>${i18n.t(" Drag and drop files, attach ")}
          <button type='button' aria-label='${i18n.t("click to attach a file")}' class='Light' @click="${g}">
          ${i18n.t("files")}</button> ${i18n.t("or add a")} 
          <button type='button' aria-label='${i18n.t("click to add a URL link")}' class='Light' @click="${f}">
          ${i18n.t("link")}</button></span>
        </div>
        ${$(e)}
      </form>
    `}
  `};class Je extends et{static get properties(){return{url:{},caseID:{},username:{},password:{},title:{},bShowCreate:{},bShowCancel:{},bShowAttachments:{},bShowSave:{},authentication:{},token:{},clientid:{},clientsecret:{},initialContent:{},action:{},casetype:{},portalName:{},langTokens:{}}}constructor(){super(),this.url="",this.title="My worklist",this.caseID="",this.username="",this.password="",this.bShowCreate="true",this.bShowCancel="true",this.bShowAttachments="false",this.bShowSave="true",this.authentication="",this.token="",this.clientid="",this.clientsecret="",this.initialContent="",this.action="",this.casetype="",this.portalName="",this.cases=[],this.dataPages={},this.name="",this.etag="",this.casepyStatusWork="",this.casedata={},this.data={},this.numAttachments=0,this.attachmentcategories=[],this.assignmentID="",this.actionID="",this.content={},this.pageInstructions=[],this.errorMsg="",this.validationMsg="",this.bShowConfirm=!1,this.bShowNew=!1,this.refreshOnChange=!1,this.isDeclarativeTarget=!1;const t=this;window.i18n||(window.i18n={t:function(e){if(!e)return"";if("string"!=typeof e)return e;let s=e;if(0===s.indexOf("@L ")&&(s=s.substring(3)),s=s.replace(/^"|"$/g,"").trim(),s=Me(s),"object"!=typeof t.langTokens)return s;const a=t.langTokens[s];return a&&""!==a?a.trim():(console.log(s),s)}})}clearLoadingIndicator(){const t=this.getRenderRoot().querySelector("#case-data");t&&null!==t.querySelector(".loading")&&M(null,t)}sendExternalEvent(t){this.dispatchEvent(new CustomEvent("message",{detail:{...t}}))}}class Xe extends Je{resetError=t=>{this.errorMsg="",this.validationMsg="",this.actionAreaCancel(t)};reloadWorkList=t=>{this.cases=[],this.requestUpdate(),this.actionAreaCancel(t)};actionAreaCancel=t=>{t&&t.preventDefault(),this.bShowConfirm=!1,this.bShowNew=!1,this.caseID="",this.data={},this.content={},this.pageInstructions=[],this.casedata={},this.attachmentcategories=[],this.casepyStatusWork="",this.assignmentID="",this.actionID="",this.errorMsg="",this.numAttachments=0,this.validationMsg="",this.name="","workList"===this.action&&this.fetchData("portal"),this.sendExternalEvent({type:"cancel"})};actionAreaSave=t=>{t&&t.preventDefault(),null===t.target.getAttribute("data-submit")&&(t.target.textContent="Saving...",t.target.disabled=!0);const e=this.getRenderRoot().querySelector("#case-data");e&&(We(e,this.content,this.pageInstructions,this.data.data.caseInfo.content),""!==this.assignmentID?this.sendData("savecase",{id:this.caseID,actionid:"",target:t.target}):this.sendData("savecase",{id:this.caseID,actionid:this.actionID,target:t.target}))};actionRefresh=()=>{const t=this.getRenderRoot().querySelector("#case-data");t&&(this.validationMsg="",We(t,this.content,this.pageInstructions,this.data.data.caseInfo.content),this.fetchData("caseaction",{id:this.caseID,actionid:this.actionID}))};displayActions=()=>this.data.actions?this.genActionsList(this.name,this.data):this.casedata.actions?this.genActionsList(this.name,this.casedata):null;displayAttachments=t=>{this.fetchData("attachmentcategories",{id:this.caseID}),this.fetchData("attachments",{id:this.caseID,target:t})};submitForm=(t,e)=>{const s=this.getRenderRoot().querySelector("#case-data");return We(s,this.content,this.pageInstructions,this.data.data.caseInfo.content),this.validateForm(s)?"create"!==e?""!==this.data.ID?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID}):this.sendData("submitcaseaction",{id:this.data.caseID,actionid:this.actionID}):this.sendData("newwork",{id:this.casetype}):this.reportFormValidity(s),t.preventDefault(),!1};createCase=t=>{if(this.name="New Case",this.bShowNew=!0,t){let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&(this.casetype=e.getAttribute("data-value"),this.name=`New ${e.textContent} `)}this.content=this.initialContent,this.pageInstructions=[],this.caseID="",this.data={},this.casedata={},this.casetypes[this.casetype]?this.sendData("newwork",{id:this.casetype}):(this.errorMsg=`Case '${this.casetype}' is not defined`,console.error(`Case '${this.casetype}' is not defined`)),this.requestUpdate()};runAction=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&null!==e.getAttribute("data-value")&&(this.actionID=e.getAttribute("data-value"),this.name=e.innerText,this.data.ID="",this.actionRefresh());const s=this.getRenderRoot().querySelector("#case-data");null!=s&&M(this.genLoadingIndicator(),s)};openCase=t=>{t.preventDefault(),this.caseID=t.target.getAttribute("data-id"),this.name="",this.data={},this.casedata={},0===this.caseID.indexOf("ASSIGN-WORKLIST")?(this.sendExternalEvent({type:"openassignment",id:this.caseID}),this.assignmentID=this.caseID,this.caseID=""):(this.sendExternalEvent({type:"opencase",id:this.caseID}),this.assignmentID="");const e=this.getRenderRoot().querySelector("#case-data");null!=e&&M(this.genLoadingIndicator(),e),this.requestUpdate()};getData=(t,e)=>{this.dataPages[t]?M(this.showDataList(this.dataPages[t]),e.nextElementSibling):this.fetchData("data",{id:t,element:e})};applyAction=t=>{const e=this.getRenderRoot().querySelector("#case-data");let s=t;if(e){if(s){"path"===s.tagName&&(s=s.parentNode),"svg"===s.tagName&&(s=s.parentNode);const t=s.getAttribute("data-action-click"),e=s.getAttribute("data-ref");if(null!==e&&null!=t){if("addRow"===t){const t=((t,e,s)=>{let a=qe(t,e);if(null===a&&(a=[],ze(t,e,a)),!Array.isArray(a))return null;if(s&&"string"==typeof s){const t={},i=s.split(",");for(const e in i)t[i[e]]="";return a.push(t),{instruction:"APPEND",target:e,content:t}}if(0===a.length)return null;const i={...a[0]};return Ue(i),a.push(i),{instruction:"APPEND",target:e,content:i}})(this.data.data.caseInfo.content,e,s.getAttribute("data-newrow"));return void(null!==t&&this.pageInstructions.push(t))}if("deleteRow"===t){const t=((t,e)=>{let s,a=e;-1!==e.indexOf(").pyTemplate")&&(s=parseInt(a.substring(e.lastIndexOf("(")+1,e.lastIndexOf(")")),10),a=a.substring(0,e.lastIndexOf("(")));const i=qe(t,a);if(!Array.isArray(i))return null;if(1===i.length){for(const t in i[0])"pxObjClass"!==t&&(i[0][t]="");return null}return s?i.length<s?null:(i.splice(s-1,1),{instruction:"DELETE",target:a,listIndex:s}):(i.length-=1,{instruction:"DELETE",target:a,listIndex:i.length})})(this.data.data.caseInfo.content,e);return void(null!==t&&this.pageInstructions.push(t))}}}We(e,this.content,this.pageInstructions,this.data.data.caseInfo.content)}};refreshAssignment=(t,e)=>{this.applyAction(t),!0===this.bShowNew?this.sendData("refreshnew",{id:this.casetype,refreshFor:e}):this.sendData("refreshassignment",{id:this.assignmentID,actionid:this.actionID,refreshFor:e})};genErrorMessage(t){this.clearLoadingIndicator(),t.message&&-1!==t.message.indexOf("JSON.parse")?console.error("Error:",t):t.message&&-1!==t.message.indexOf("Unexpected token")?(this.errorMsg="Error 404: Resource not found",this.requestUpdate(),console.error(this.errorMsg)):(t.status?""!==t.statusText?this.errorMsg=`Error ${t.status}: ${t.statusText}`:401===t.status?this.errorMsg="Error 401: Authentication error":423===t.status?this.errorMsg="Error 423: Resource is locked by another user":500===t.status?this.errorMsg="Error 500: Internal server error":this.errorMsg=`Error ${t.status}`:t.name&&t.message?this.errorMsg=`Error ${t.name}: ${t.message}`:this.errorMsg="string"==typeof t?t:"Critical error",this.requestUpdate(),console.error("Error:",t))}fetchData(t,e){const{id:s,actionid:a,target:i}=e||{};let n="";""!==this.authentication&&"basic"!==this.authentication||(n=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(n=`Bearer ${this.token}`);const r={method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:n},mode:"cors"};let o=`${this.url}/api/application/v2/`;switch(t){case"portal":o+=`portals/${this.portalName}`;break;case"assignment":o+=`assignments/${s}`;break;case"view":o+=`cases/${s}/views/${a}`;break;case"caseaction":o+=`cases/${s}/actions/${a}`;break;case"attachment":o+=`attachments/${s}`;break;case"attachments":o+=`cases/${s}/attachments`;break;case"attachmentcategories":o+=`cases/${s}/attachment_categories`}fetch(o,r).then((s=>{if("assignment"===t)this.etag=s.headers.get("etag");else if("attachment"===t)return s.text();return s.ok||404===s.status?s.json():401===s.status?(this.token="",this.sendData("authenticate",{...e,type:t,cmd:"fetchData"}),s.json()):Promise.reject(s)})).then((e=>{try{if(e.errors&&e.errors.length>0)return;if(e.pyLocalizedValue)return this.errorMsg=`Error: ${e.pyLocalizedValue}`,void this.requestUpdate();if(e.errorDetails&&e.errorDetails.length>0)return this.errorMsg=`Error ${e.errorDetails[0].message}: ${e.localizedValue}`,this.clearLoadingIndicator(),this.requestUpdate(),void console.error("Error:",e);const n=this.getRenderRoot().querySelector("#case-data");switch(t){case"portal":if(this.content={},this.pageInstructions=[],!this.casetypes){this.casetypes={};let t=[];e.data&&e.data.D_pzCasesAvailableToCreateForPortal&&e.data.D_pzCasesAvailableToCreateForPortal.pxResults?t=e.data.D_pzCasesAvailableToCreateForPortal.pxResults:e.data&&e.data.pyPortal&&e.data.pyPortal.pyCaseTypesAvailableToCreate&&(t=e.data.pyPortal.pyCaseTypesAvailableToCreate);for(const e of t)"workList"===this.action&&""!==this.casetype&&this.casetype!==e.pyClassName||(this.casetypes[e.pyClassName]={canCreate:!0,name:e.pyLabel})}this.cases=[];let t=[];if(e.data&&e.data.D_pyUserWorkList&&e.data.D_pyUserWorkList.pxResults?t=e.data.D_pyUserWorkList.pxResults:e.uiResources.context_data.pyPortal.summary_of_lists__.D_pyMyWorkList.pxResults&&(t=e.data[e.uiResources.context_data.pyPortal.summary_of_lists__.D_pyMyWorkList.pxResults.replace(".pxResults","")].pxResults),t.length>0)for(const e of t)this.cases.push({name:e.pyLabel,caseID:e.pxRefObjectKey,urgency:e.pxUrgencyAssign,ID:e.pzInsKey,label:e.pxTaskLabel});this.requestUpdate();break;case"assignment":this.content={},this.pageInstructions=[],this.isDeclarativeTarget=!1,this.refreshOnChange=!1,this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel,this.caseID=this.casedata.ID,this.data.caseID=this.caseID,this.data.ID=s;for(const t of this.casedata.assignments)if(s===t.ID&&t.actions&&t.actions.length>0){this.actionID=t.actions[0].ID;break}this.casepyStatusWork=this.casedata.status,this.data.actions=this.casedata.availableActions,this.name=this.casedata.stageLabel;const r=this.getRenderRoot().querySelector("#case-data");r&&We(r,this.casedata.content),this.content={},M(this.renderMainLayout(e.uiResources.resources.views[this.casedata.content.pyViewName],"Obj"),n),this.requestUpdate(),n.focus();break;case"view":if(!n){console.error("Error: case data are not present when retrieving the page");break}this.content={},this.pageInstructions=[],this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel?this.casedata.content.pyLabel:this.casedata.name,this.casedata.actions=this.casedata.availableActions,this.casedata.content.pyID=this.casedata.ID,this.data.ID=this.casedata.ID,this.casepyStatusWork=this.casedata.status,this.name=this.casedata.stageLabel,this.content={},"true"===this.bShowAttachments&&this.fetchData("attachments",{id:this.caseID}),this.name=e.data.caseInfo.name,M(this.renderReviewLayout(e.uiResources.resources.views[a],"Obj"),n),this.requestUpdate(),n.focus();break;case"caseaction":this.content={},this.pageInstructions=[],this.isDeclarativeTarget=!1,this.refreshOnChange=!1,this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel,this.caseID=this.casedata.ID,this.data.caseID=this.caseID,this.data.ID="",this.casepyStatusWork=this.casedata.status,this.data.actions=this.casedata.availableActions,this.name=this.casedata.stageLabel,this.content={},M(this.renderMainLayout(e.uiResources.resources.views[e.uiResources.root.config.name],"Obj"),n),this.requestUpdate(),n.focus();break;case"attachments":let o=e.attachments;o||(o=[]),this.numAttachments=o.length,i&&M(Ze(i,o,this.caseID,this),i),this.requestUpdate();break;case"attachmentcategories":this.attachmentcategories=e.attachment_categories;break;case"attachment":i(e)}}catch(t){this.errorMsg=`Error: ${t}`,this.requestUpdate(),console.error("Error:",t)}})).catch((t=>{this.genErrorMessage(t)}))}sendData(t,e){const{id:s,actionid:a,target:i}=e;let n="";""!==this.authentication&&"basic"!==this.authentication||(n=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(n=`Bearer ${this.token}`);const r={"Content-Type":"application/json;charset=UTF-8",Authorization:n},o={method:"POST",headers:r,mode:"cors"},{pageInstructions:c,pageupdate:l}=((t,e)=>{const s=e||[],a={};for(const[e,i]of Object.entries(t))if("string"==typeof i||"boolean"==typeof i)a[e]=i;else if("object"==typeof i&&Array.isArray(i))for(const t in i){const a={instruction:"UPDATE",target:e,listIndex:parseInt(t,10)+1,content:i[t]};s.push(a)}return{pageInstructions:s,pageupdate:a}})(this.content,this.pageInstructions);let d=`${this.url}/api/application/v2/`;switch(this.validationMsg="",t){case"authenticate":"oauth2password"===this.authentication?o.body=`grant_type=password&client_id=${this.clientid}&client_secret=${this.clientsecret}&username=${this.username}&password=${this.password}`:"oauth2clientcredentials"===this.authentication?o.body=`grant_type=client_credentials&client_id=${this.clientid}&client_secret=${this.clientsecret}`:"authorizationcode"===this.authentication&&(o.body=`grant_type=authorization_code&client_id=${this.clientid}&code_verifier=${window.history.state.verifier}&code=${window.history.state.code}&redirect_uri=${encodeURIComponent(`${window.location.href.substring(0,window.location.href.lastIndexOf("/"))}/auth.html`)}`),o.headers["Content-Type"]="application/x-www-form-urlencoded",d=`${this.url}/PRRestService/oauth2/v1/token`;break;case"newwork":d+="cases?viewType=form",o.body=JSON.stringify({caseTypeID:s,processID:"pyStartCase",content:{}});break;case"submitassignment":o.body=JSON.stringify({content:l,pageInstructions:c}),o.method="PATCH",o.headers["If-Match"]=this.etag,d+=`assignments/${s}/actions/${a}?viewType=form`;break;case"submitcaseaction":o.body=JSON.stringify({content:l,pageInstructions:c}),o.method="PATCH",o.headers["If-Match"]=this.etag,d+=`cases/${s}/actions/${a}?viewType=form`;break;case"refreshassignment":d+=`assignments/${s}/actions/${a}/refresh`,o.headers["If-Match"]=this.etag,o.method="PATCH",o.body=JSON.stringify({content:l,pageInstructions:c,contextData:!0});break;case"dataviews":d+=`data_views/${s}`,o.body=JSON.stringify(e.content);break;case"uploadattachment":d+="attachments/upload",delete r["Content-Type"];const t=new FormData;t.append("File",a,a.name),o.body=t;break;case"attachments":d+=`cases/${s}/attachments`,o.body=JSON.stringify({attachments:a});break;case"deleteattachment":d+=`attachments/${s}`,o.method="DELETE"}fetch(d,o).then((s=>"deleteattachment"===t||"attachments"===t?s.text():("submitassignment"!==t&&"newwork"!==t||(this.etag=s.headers.get("etag")),200===s.status||201===s.status||s.status>=400&&s.status<500||500===s.status?(401===s.status&&"authenticate"!==t&&(this.token="",this.sendData("authenticate",{...e,type:t,cmd:"sendData"})),s.json()):s.ok?Promise.resolve("ok"):Promise.reject(s)))).then((s=>{if(s.errors&&s.errors.length>0)return this.errorMsg=`Error: ${s.errors[0].message.trim()}`,void this.requestUpdate();if(s.access_token)this.token=s.access_token,window.history.replaceState({token:this.token},"",window.location.href),e!=={}&&e.type&&e.cmd&&("sendData"===e.cmd?this.sendData(e.type,e):this.fetchData(e.type,e));else if(s.errorDetails&&s.errorDetails.length>0){if(s.errorDetails[0].localizedValue){const t=this.getRenderRoot().querySelector("#case-data");((t,e,s)=>{for(const a of t.elements)if("INPUT"===a.tagName||"TEXTAREA"===a.tagName||"SELECT"===a.tagName){const t=`.${a.getAttribute("data-ref")}`;if(null!==t&&"pyID"!==t)for(const i in e){if(e[i].Path===t){s.setInlineError(a,e[i].ValidationMessage);break}if(e[i].erroneousInputOutputFieldInPage===t){s.setInlineError(a,e[i].localizedValue);break}}}})(t,s.errorDetails,this),this.validationMsg=this.genPageValidationErrors(s,t)}else this.errorMsg=`Error ${s.errorDetails[0].message}: ${s.localizedValue}`;this.clearLoadingIndicator(),i&&(i.disabled=!1,i.textContent="Save"),"submitassignment"===t&&this.fetchData("assignment",{id:this.assignmentID})}else{const e=this.getRenderRoot().querySelector("#case-data");if("newwork"===t&&s.data.caseInfo.ID&&""!==s.data.caseInfo.ID&&this.sendExternalEvent({type:"newwork",id:s.data.caseInfo.ID}),"refreshassignment"===t)return void(e&&s.data.caseInfo&&s.data.caseInfo.content&&(this.data.data.caseInfo.content=s.data.caseInfo.content,this.casedata.content=s.data.caseInfo.content,M(this.renderMainLayout(this.data.uiResources.resources.views[this.actionID],"Obj"),e)));if("deleteattachment"===t)i&&!i.classList.contains("attach-files")&&this.fetchData("attachments",{id:this.caseID,target:i});else if("attachments"===t)this.fetchData("attachments",{id:this.caseID,target:i});else if("uploadattachment"===t){let t=a.name.lastIndexOf(".");-1===t&&(t=a.name.length);const e=a.name.substring(t+1),n=[{type:"File",category:a.category,fileType:e,name:a.displayName,ID:s.ID}];return void this.sendData("attachments",{id:this.caseID,actionid:n,target:i})}if(s.confirmationNote)this.bShowConfirm=!0,this.caseID=s.data.caseInfo.ID,this.fetchData("view",{id:this.caseID,actionid:"pyReview"});else if(s.uiResources){if(this.bShowNew=!1,this.content={},this.pageInstructions=[],this.assignmentID=s.nextAssignmentInfo.ID,this.data=s,this.casedata=s.data.caseInfo,this.data.name=this.casedata.content.pyLabel?this.casedata.content.pyLabel:this.casedata.name,this.caseID=this.casedata.content.pzInsKey,this.data.caseID=s.data.caseInfo.ID,this.data.ID=this.assignmentID,this.casedata.content.pyViewName=s.uiResources.root.config.name,this.actionID=this.casedata.content.pyViewName,this.casedata.assignments)for(const t of this.casedata.assignments)if("pzQuestionPageScr"===t.processID&&this.data.ID===t.ID&&t.actions&&t.actions.length>0){this.actionID=t.actions[0].ID;break}this.casepyStatusWork=s.data.caseInfo.status,this.data.actions=s.data.caseInfo.availableActions,this.name=s.data.caseInfo.stageLabel,e&&(M(this.renderMainLayout(s.uiResources.resources.views[this.casedata.content.pyViewName],"Obj"),e),e.focus())}}this.requestUpdate()})).catch((t=>{this.genErrorMessage(t)}))}}
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
     */const Ge=new WeakMap,Ye=(Qe=t=>e=>{const s=Ge.get(e);if(void 0===t&&e instanceof k){if(void 0!==s||!Ge.has(e)){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else t!==s&&e.setValue(t);Ge.set(e,t)},(...t)=>{const e=Qe(...t);return f.set(e,!0),e});var Qe;const ts=(t,e,s)=>{if(void 0===e)return null;const a=t.requiredstate?z` <abbr title="required" class="usa-hint usa-hint--required">*</abbr>`:"";return"field-checkbox"===s?t.label&&""!==t.label?z`<legend>${t.displaylabel}</legend>`:null:z`
    ${""!==t.label?z`<label class="usa-label"
    for="${Ye(e)}">${t.displaylabel}${a}
    </label>`:null}
  `},es=(t,e)=>{if(t.helperText&&""!==t.helperText)return`${e}-info`},ss=t=>{if(t.placeholder&&""!==t.placeholder)return t.displayplaceholder},as=(t,e,s,a)=>void 0===e||""===e?z`
      ${a}
    `:z`
    <div class="usa-field" ?disabled="${t.disabledstate}">
      ${ts(t,e,s)}${((t,e)=>t.helperText&&""!==t.helperText?z`<div id=${`${e}-info`} class="usa-hint">${t.displayhelperText}</div>`:null)(t,e)}${a}
    </div>
  `,is=(t,e,s,a,i)=>{if(!1===t.config.visibility)return null;let n=!1;if(t.config.displayvalue="",t.config.displaylabel=i18n.t(t.config.label),t.config.displayplaceholder=i18n.t(t.config.placeholder),t.config.displayhelperText=i18n.t(t.config.helperText),t.config.displaycaption=i18n.t(t.config.caption),t.config.value){let e=t.config.value.replace("@P .","");if(t.config.reference=void 0===i||""===i?e:`${i}.${e}`,t.config.displayvalue=qe(a.casedata.content,t.config.reference),"string"==typeof t.config.datasource&&0===t.config.datasource.indexOf("@ASSOCIATED")){e=t.config.datasource.replace("@ASSOCIATED .","");let s="";a.data.context_data?s=a.data.context_data.content:a.data.uiResources.context_data&&a.data.uiResources.context_data.caseInfo&&a.data.uiResources.context_data.caseInfo.content&&(s=a.data.uiResources.context_data.caseInfo.content);const n=""===i?s:qe(s,i);if(n&&(t.config.options=n.summary_of_associated_lists__[e]),void 0===t.config.options&&(s=a.data.uiResources.resources.fields[e],s&&s.datasource))if(s.datasource.records)t.config.options=s.datasource.records;else if(s.datasource.name&&a.data.data.shared[s.datasource.name]){const e=a.data.data.shared[s.datasource.name];if(Object.keys(e).length>0){const a=Object.keys(e)[0];if(e[a].pxResults){const i=s.datasource.propertyForValue.replace("@P .",""),n=s.datasource.propertyForDisplayText.replace("@P .","");t.config.options=[];for(const s in e[a].pxResults){const r=e[a].pxResults[s];t.config.options[s]={key:r[i],value:r[n]}}}}}}else if("object"==typeof t.config.datasource&&t.config.datasource.source&&0===t.config.datasource.source.indexOf("@DATASOURCE")){const e=t.config.datasource.source.replace("@DATASOURCE ","").replace(".pxResults","");if(a.data.data[e]&&a.data.data[e].pxResults)t.config.options=a.data.data[e].pxResults;else if(a.data.uiResources.context_data&&a.data.uiResources.context_data.caseInfo&&a.data.uiResources.context_data.caseInfo.content){const s=a.data.uiResources.context_data.caseInfo.content;if(s[i]&&s[i].summary_of_lists__[e]&&s[i].summary_of_lists__[e].pxResults){const n=s[i].summary_of_lists__[e].pxResults.replace(".pxResults","");if(a.data.data[n]&&a.data.data[n].pxResults){t.config.options=[];const e=t.config.datasource.fields.key.replace("@P .",""),s=t.config.datasource.fields.text.replace("@P .","");for(const i in a.data.data[n].pxResults){const r=a.data.data[n].pxResults[i];t.config.options[i]={key:r[e],value:r[s]}}}}}}t.config.options||(t.config.options=[]),t.config.displayvalue?"object"!=typeof t.config.displayvalue&&(t.config.displayvalue=`${t.config.displayvalue}`):t.config.displayvalue="",a.data.uiResources&&a.data.uiResources.resources&&a.data.uiResources.resources.fields&&a.data.uiResources.resources.fields[e]&&a.data.uiResources.resources.fields[e].isDeclarativeTarget&&(n=!0,a.isDeclarativeTarget=!0)}if(!0===s)return((t,e,s,a)=>z`<div>
    <dt class="usa-field">
      ${ts(t,e,s)}
      </dt>
    <dd>${a}</dd>
    </div>
  `)(t.config,e,"field-text",ns(t.config,t.type,e));"string"!=typeof t.config.visibility&&"string"!=typeof t.config.readOnly&&"string"!=typeof t.config.disabled&&"string"!=typeof t.config.required||(a.refreshOnChange=!0);const r=a.data.data.caseInfo.content;if("string"==typeof t.config.visibility&&"true"!==t.config.visibility){if(!He(t.config.visibility,r))return null}else if(!1===t.config.visibility||"false"===t.config.visibility)return null;switch(t.config.readonlystate=!1,"string"==typeof t.config.readOnly&&"false"!==t.config.readOnly?t.config.readonlystate=He(t.config.readOnly,r):(!0===t.config.readOnly||"true"===t.config.readOnly||n)&&(t.config.readonlystate=!0),t.config.requiredstate=!1,"string"==typeof t.config.required&&"false"!==t.config.required?t.config.requiredstate=He(t.config.required,r):!0!==t.config.required&&"true"!==t.config.required||(t.config.requiredstate=!0),t.config.disabledstate=!1,"string"==typeof t.config.disabled&&"false"!==t.config.disabled?t.config.disabledstate=He(t.config.disabled,r):!0!==t.config.disabled&&"true"!==t.config.disabled||(t.config.disabledstate=!0),t.config.disabledstate&&(t.config.requiredstate=!1,t.config.readonlystate=!1),t.type){case"Decimal":case"TextInput":return as(t.config,e,"field-textinput",rs(t.config,e));case"Phone":return as(t.config,e,"field-phoneinput",os(t.config,e));case"Email":return as(t.config,e,"field-emailinput",hs(t.config,e));case"Integer":return as(t.config,e,"field-numberinput",cs(t.config,e));case"Percentage":return as(t.config,e,"field-percentage",ls(t.config,e));case"Currency":return as(t.config,e,"field-currencyinput",ds(t.config,e));case"RadioButtons":return as(t.config,e,"field-radiogroup",gs(t.config,e));case"TextArea":return as(t.config,e,"field-textarea",us(t.config,e));case"Checkbox":return as(t.config,e,"field-checkbox",ps(t.config,e));case"Dropdown":return as(t.config,e,"field-dropdown",fs(t.config,e));case"DateTime":return as(t.config,e,"field-datetime",ys(t.config,e));case"Date":return as(t.config,e,"field-date",ms(t.config,e));case"Time":return as(t.config,e,"field-time",bs(t.config,e));case"AutoComplete":return as(t.config,e,"field-autocomplete",vs(t.config,e));case"SemanticLink":return as(t.config,e,"field-semanticlink",_s(t.config));case"Location":return as(t.config,e,"field-location",ws(t.config,e));default:return null}},ns=(t,e,s)=>{let a=t.displayvalue;if(""!==a){if("Phone"===e)return z`<a data-ref="${t.reference}" id="${Ye(s)}" href="${`tel:${a}`}">${a}</a>`;if("Date"===e){const e={year:"numeric",month:"short",day:"numeric"};a=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}else if("DateTime"===e){a=Oe(t.displayvalue);const e={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};a=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}else if("Time"===e){const e={hour:"numeric",minute:"numeric"};a=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}}return z`
    <span class="dataValueRead" data-ref="${t.reference}" id="${Ye(s)}">${Me(a)}</span>
  `},rs=(t,e)=>z`
  <input
    class="usa-input"
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${Ye(ss(t))}"
    type="text"
    aria-describedby="${Ye(es(t,e))}"
    id="${Ye(e)}"
    value="${Me(t.displayvalue)}"
  />
`,os=(t,e)=>{let s="";for(const e of t.options)0===t.displayvalue.indexOf(e.pyCallingCode)&&(s=e.pyCallingCode);return t.displayvalue=t.displayvalue.substring(s.length),z`
<div class='field-phoneinput'>
<select
  class="usa-select field-countrycode"
  ?readonly="${t.readonlystate}"
  ?disabled="${t.disabledstate}"
  aria-label="${i18n.t("Select country code")}">
  ${t.options.map((t=>z`<option ?selected=${t.pyCallingCode===s}
  value='${t.pyCallingCode}'>${t.pyCallingCode}</option>`))}
</select>
 <input
   class="usa-input"
   data-ref="${t.reference}"
   ?required="${t.requiredstate}"
   ?readonly="${t.readonlystate}"
   ?disabled="${t.disabledstate}"
   placeholder="${Ye(ss(t))}"
   type="tel"
   aria-describedby="${Ye(es(t,e))}"
   id="${Ye(e)}"
   value="${Me(t.displayvalue)}"
 />
 </div>
`},cs=(t,e)=>z`
  <input
    class="usa-input"
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${Ye(ss(t))}"
    type="number"
    aria-describedby="${Ye(es(t,e))}"
    id="${Ye(e)}"
    value="${Me(t.displayvalue)}"
  />
`,ls=(t,e)=>z`
 <input
   class="usa-input"
   data-ref="${t.reference}"
   ?required="${t.requiredstate}"
   ?readonly="${t.readonlystate}"
   ?disabled="${t.disabledstate}"
   placeholder="${Ye(ss(t))}"
   type="text"
   aria-describedby="${Ye(es(t,e))}"
   id="${Ye(e)}"
   value="${Me(t.displayvalue)}"
 />
`,ds=(t,e)=>z`
  <div ?readonly="${t.readOnly}">
  <span class="currency-symbol">$</span>
  <input
    class="usa-input"
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${Ye(ss(t))}"
    type="number"
    aria-describedby="${Ye(es(t,e))}"
    id="${Ye(e)}"
    value="${Me(t.displayvalue)}"
  />
  </div>
`,hs=(t,e)=>z`
  <input
    class="usa-input"
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${Ye(ss(t))}"
    type="email"
    aria-describedby="${Ye(es(t,e))}"
    id="${Ye(e)}"
    value="${Me(t.displayvalue)}"
  />
`,us=(t,e)=>z`
  <textarea
    class="usa-textarea"
    rows="3"
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${Ye(ss(t))}"
    type="email"
    aria-describedby="${Ye(es(t,e))}"
    id="${Ye(e)}"
  >${Me(t.displayvalue)}</textarea>
`,ps=(t,e)=>{const s=t.requiredstate?"icon-required":"";return z`<input
  class="usa-checkbox__input"
  data-ref="${t.reference}"
  ?required="${t.requiredstate}"
  ?readonly="${t.readonlystate}"
  onclick="${Ye(t.readonlystate?"return false;":void 0)}"
  ?disabled="${t.disabledstate}"
  aria-describedby="${Ye(es(t,e))}"
  id=${Ye(e)}
  type="checkbox" ?checked=${"true"===t.displayvalue||!0===t.displayvalue}
  />
  <label class="usa-checkbox__label ${s}" for=${Ye(e)}>
  ${t.displaycaption}
    </label></div>
`},gs=(t,e)=>{let s=[{value:"true"},{value:"false"}];return t.options&&(s=t.options),z`<fieldset class="usa-fieldset">
    ${s.map(((s,a)=>{const i=`rb-${e}-${a}`;return z`
        <div class="usa-radio">
          <input
            class="usa-radio__input"
            data-ref="${t.reference}"
            name=${Ye(e)}
            id=${i}
            type="radio"
            ?required="${t.requiredstate}"
            ?readonly="${t.readonlystate}"
            ?disabled="${t.disabledstate}"
            value="${s.key}"
            onclick="${Ye(t.readonlystate?"return false;":void 0)}"
            ?checked="${s.key===t.displayvalue}"
          />
          <label class="usa-radio__label" for="${i}">${s.value}</label>
        </div>
      `}))}
  </div>`},fs=(t,e)=>z`<select
  class="usa-select"
  data-ref="${t.reference}"
  aria-describedby="${Ye(es(t,e))}"
  id=${Ye(e)}
  ?required="${t.requiredstate}"
  ?readonly="${t.readonlystate}"
  ?disabled="${t.disabledstate}">
  placeholder="${Ye(ss(t))}"
    <option value="" title="${i18n.t("Select...")}">${i18n.t("Select...")}</option>
    ${t.options.map((e=>z`<option ?selected=${e.key===t.displayvalue} value='${e.key}'>${e.value}</option>`))}
  </select>`,ys=(t,e)=>{let s=t.displayvalue;if(""!==s){let e=Oe(s);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),s=`${e.getFullYear()}-${Be(e.getMonth()+1)}-${Be(e.getDate())}T${Be(e.getHours())}:${Be(e.getMinutes())}`):8===t.displayvalue.length?s=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(4,6)}-${t.displayvalue.substring(6,8)}T00:00`:24===t.displayvalue.length&&(s=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(5,7)}-${t.displayvalue.substring(8,10)}T${t.displayvalue.substring(11,13)}:${t.displayvalue.substring(14,16)}`)}return z`
    <input
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="datetime-local"
      aria-describedby="${Ye(es(t,e))}"
      id="${Ye(e)}"
      value="${s}"
    />
  `},ms=(t,e)=>{let s=t.displayvalue,a="",i="",n="";if(""!==s){let e=Oe(s);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),n=e.getFullYear(),a=e.getMonth()+1,i=e.getDate()):8===t.displayvalue.length&&(n=t.displayvalue.substring(0,4),a=t.displayvalue.substring(4,6),i=t.displayvalue.substring(6,8)),s=e}return z`
  <div class="input-date usa-memorable-date" id="${Ye(e)}"
  aria-describedby="${Ye(es(t,e))}" data-ref="${t.reference}">
  <div class="usa-form-group usa-form-group--month">
      <label class="usa-label" for="${`${e}-month`}">
      ${i18n.t("Month")}
      </label>
      <input data-ref="${t.reference}" ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}" class="input-date-month usa-input usa-input--inline"  value="${a}"
      id="${`${e}-month`}" name="${`${e}-month`}" type="text" pattern="[0-9]*" inputmode="numeric">
    </div>
    <div class="usa-form-group usa-form-group--day">
      <label class="usa-label" for="${`${e}-day`}">
        ${i18n.t("Day")}
      </label>
      <input data-ref="${t.reference}" ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}" class="input-date-day usa-input usa-input--inline" value="${i}"
      id="${`${e}-day`}" name="${`${e}-day`}" type="text" pattern="[0-9]*" inputmode="numeric">
    </div>
    <div class="usa-form-group usa-form-group--year">
      <label class="usa-label" for="${`${e}-year`}">
      ${i18n.t("Year")}
      </label>
      <input data-ref="${t.reference}" ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}" class="input-date-year usa-input usa-input--inline" value="${n}"
      id="${`${e}-year`}" name="${`${e}-year`}" type="text" pattern="[0-9]*" inputmode="numeric">
    </div>
</div>`},bs=(t,e)=>{let s=t.displayvalue;if(""!==s){let e=Oe(s);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),s=`${Be(e.getHours())}-${Be(e.getMinutes())}-${Be(e.getSeconds())}`):8===t.displayvalue.length&&(s=`${t.displayvalue.substring(9,10)}:${t.displayvalue.substring(10,11)}:${t.displayvalue.substring(11,12)}`)}return z`
    <input
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="time"
      aria-describedby="${Ye(es(t,e))}"
      id="${Ye(e)}"
      value="${s}"
    />
  `},vs=(t,e)=>t.options?z`
    <div class="usa-combo-box loaded">
    <select class="usa-select"
        data-ref="${t.reference}"
        list="${t.reference}"
        ?required="${t.requiredstate}"
        ?readonly="${t.readonlystate}"
        ?disabled="${t.disabledstate}"
        placeholder="${Ye(ss(t))}"
        type="text"
         aria-describedby="${Ye(es(t,e))}"
        id="${Ye(e)}"
        value="${Me(t.displayvalue)}"
      />
        ${t.options.map((t=>z`
            <option value="${t.key}">
              ${t.value}
            </option>
          `))}
    </select>
    </div>`:null,_s=()=>z`
 <a>semantic link</a>
`,ws=(t,e)=>z`<input
 class="usa-input location"
 data-ref="${t.reference}"
 ?required="${t.requiredstate}"
 ?readonly="${t.readonlystate}"
 ?disabled="${t.disabledstate}"
 placeholder="${Ye(ss(t))}"
 type="text"
 aria-describedby="${Ye(es(t,e))}"
 id="${Ye(e)}"
 value="${Me(t.displayvalue)}"
/>`,$s=()=>z`
<span class="loading">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</span>
`,Cs=(t,e)=>z`
  ${t.map((t=>z`
    <th scope='col'>${i18n.t(t.config.label)}</th>`))}${e?null:z`<th></th>`}
`,Ss=(t,e)=>{if(!e){const e=[];t.config.children[0].children.map(((t,s)=>(e[s]=t.config.value.replace("@P .",""),null)));const s=t.config.referenceList.replace("@P .","");return z`
      <div class="table-action-area">
        <button type="button" class="usa-button"
        aria-label="${i18n.t("Add row")}" data-newrow="${e.join()}"
        data-ref=${s} data-action-click="addRow">${i18n.t("Add item")}</button>
      </div>
    `}return null},xs=(t,e,s)=>{const a=t.config.referenceList.replace("@P .",""),i=t.config.children[0].children,n=s.data.data.caseInfo.content[a];return n?z`
  ${n.map(((t,n)=>z`
    <tr>
    ${i.map((t=>z`
    <td>${is(t,void 0,e,s,`${a}(${n+1})`)}</td>`))}${e?null:z`<td><button type="button" class="usa-button"
  aria-label="${i18n.t("Delete item")}" data-ref=${`${a}(${n+1}).pyTemplate`}
  data-action-click='deleteRow'>Delete</button></td>`}
    </tr>`))}
`:null},ks=(t,e,s,a,i)=>{if(void 0===t)return null;if(!t.config||!t.config.template)return z`${t.map(((t,n)=>{const r=`${e}-${n}`;if("Region"===t.type)return ks(t.children,`${e}-0`,!0,a,i);if("reference"===t.type&&"view"===t.config.type){let e="";if(t.config.context&&(e=t.config.context),t.config.inheritedProps&&1===t.config.inheritedProps.length&&"label"===t.config.inheritedProps[0].prop){const n=i18n.t(t.config.inheritedProps[0].value),o=a.data.uiResources.resources.views[t.config.name];if(o){const t="SimpleTable"===o.config.template||"ListView"===o.config.template?"field-table":"field-subview";return z`<div class='${t}'><h4>${n}</h4>${ks(o,r,s,a,""===i?e.substring(1):i+e)}</div>`}}return ks(a.data.uiResources.resources.views[t.config.name],r,s,a,i&&""!==i?i+e:e.substring(1))}return is(t,r,s,a,i)}))}`;if("SimpleTable"===t.config.template)return((t,e,s)=>{const a=e||"Editable"!==t.config.renderMode;return z`
  <table class="usa-table usa-table--borderless">
    <caption class="sr-only">${t.config.name}</caption>
    <thead>
      <tr>
        ${Cs(t.config.children[0].children,a)}
      </tr>
    </thead>
    <tbody>
      ${xs(t,a,s)}
    </tbody>
  </table>
  ${Ss(t,a)}`})(t,s,a);if("ListView"===t.config.template)return((t,e,s)=>(s.sendData("dataviews",{id:t.config.referenceList,content:{paging:{pageNumber:1,pageSize:41}}}),z`
  <table class="usa-table usa-table--borderless">
    <caption class="sr-only">${t.config.name}</caption>
    <thead>
      <tr>
        ${Cs(t.config.presets[0].children[0].children,e)}
      </tr>
    </thead>
    <tbody>${$s()}
    </tbody>
  </table>`))(t,s,a);switch("DataReference"===t.config.template&&(a.isDeclarativeTarget=!0),"TwoColumn"===t.config.template&&1===t.children.length&&(t.config.template="OneColumn"),t.config.template){case"TwoColumn":return z`
          <div class='grid-row grid-gap'>
            <div class='mobile-lg:grid-col-6'>${ks(t.children[0].children,`${e}-0`,s,a,i)}</div>
            <div class='mobile-lg:grid-col-6'>${ks(t.children[1].children,`${e}-1`,s,a,i)}</div>
          </div>
        `;case"DefaultForm":return z`
          <div>
            ${ks(t.children[0].children,`${e}-0`,s,a,i)}
          </div>
        `;case"DataReference":return z`
          <div>
            ${ks(t.children,`${e}-0`,s,a,i)}
          </div>
        `;case"OneColumn":return z`
          <div>
            ${ks(t.children[0].children,`${e}-0`,s,a,i)}
          </div>
        `;case"Details":return z`
          <div>
            ${ks(t.children[0].children,`${e}-0`,!0,a,i)}
          </div>
        `;default:return null}},Ds=(t,e,s,a)=>{return void 0===e.caseID&&s.content?z`
    <div>
      <h2>${i18n.t(e.data.caseInfo.name)}</h2>
    </div>
    ${((t,e)=>t&&0!==t.length?z`<button type='button' @click="${e}" class="usa-button" data-type="assignment" data-id="${t[0].ID}">${i18n.t("Continue")}</button>`:null)(s.assignments,a)}`:e.uiResources&&e.uiResources.navigation&&e.uiResources.navigation.steps?(i=e.uiResources.navigation.steps)&&i.length>1?z`<div class="usa-step-indicator" aria-label="progress">
    <ol class="usa-step-indicator__segments">
    ${i.map((t=>{let e,s="";return"success"===t.visited_status?s="usa-step-indicator__segment--complete":"current"===t.visited_status&&(s="usa-step-indicator__segment--current",e="current"),z`<li
      class=${`usa-step-indicator__segment ${s}`}
      aria-current=${Ye(e)}>
      <span class="usa-step-indicator__segment-label">${t.name}
      <span class="usa-sr-only">completed</span></span>
    </li>`}))}
    </ol></div>`:null:"";var i},Is=(t,e,s,a,i)=>{let n=i.data.name;return i.data&&i.data.data&&(n&&""!==n||(n=i.data.data.caseInfo.name),""!==i.data.data.caseInfo.assignments[0].instructions&&(n=i.data.data.caseInfo.assignments[0].instructions)),z`
  <fieldset class='usa-fieldset'><legend class="usa-legend usa-legend--large">${i18n.t(n)}</legend>
  ${ks(t,e,!1,i,"")}</fieldset>
  ${((t,e)=>z`
<ul class="usa-button-group">
    ${null!==t?z`<li class="usa-button-group__item">
    <button type="button" class="usa-button" @click="${t}">${i18n.t("Cancel")}</button></li>`:""}
    ${null!==e?z`<li class="usa-button-group__item">
    <button type="button" class="usa-button" @click="${e}">${i18n.t("Save")}</button></li>`:""}
    <li class="usa-button-group__item">
    <button type="button" data-submit="submit" class="usa-button">${i18n.t("Submit")}</button></li>
  </ul>
`)(s,a)}
`},As=(t,e,s,a)=>z`
  <div>${ks(t,e,!0,a)}</div>
  ${(t=>null===t?null:z`
  <ul class="usa-button-group">
  ${null!==t?z`<li class="usa-button-group__item"><button type="button" class="usa-button"
  @click="${t}">${i18n.t("Close")}</button></li>`:""}
  </ul>`)(s)}
`;class Ts extends Xe{displayContent(){if(this.bShowSave="false",""!==this.errorMsg)return t=this.errorMsg,e="true"===this.bShowCancel?this.resetError:null,z`
<div class="usa-alert usa-alert--error" role="alert">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">${t}</h4>
  ${null!=e?z`
    <button type='button' aria-label="${i18n.t("Click to close the banner")}" class="usa-button" 
    @click="${e}">${i18n.t("Close")}</button>`:""}
  </div>
  </div>`;var t,e,s,a,i;if(("oauth2password"===this.authentication||"oauth2clientcredentials"===this.authentication)&&""===this.token)return this.sendData("authenticate",{}),null;if(this.casetypes||"createNewWork"!==this.action&&"workList"!==this.action?"createNewWork"===this.action&&""===this.caseID&&this.casetypes&&this.casetypes[this.casetype]?this.sendData("newwork",{id:this.casetype}):""===this.name&&("openAssignment"===this.action&&""===this.assignmentID&&(this.assignmentID=this.caseID),""!==this.assignmentID?this.fetchData("assignment",{id:this.assignmentID}):""!==this.caseID&&this.fetchData("view",{id:this.caseID,actionid:"pyReview"})):(this.fetchData("portal"),"createNewWork"===this.action?this.bShowNew=!0:"workList"===this.action&&(this.bShowCancel="true")),this.bShowConfirm){this.data.ID.split(" ")[1];return s=this.casedata.name,this.casepyStatusWork,"true"===this.bShowAttachments&&this.displayAttachments,z`
  <legend class="usa-legend usa-legend--large">${i18n.t(s)}</legend>
  <div>
  </div>
  <div class="usa-alert usa-alert--success">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Success status</h4>
    <p class="usa-alert__text">
    ${i18n.t("Thank you. Your information has been submitted.")}
    </p>
  </div>
</div>
  <div id="case-data">${$s()}</div>`}return""!==this.caseID||""!==this.assignmentID||this.bShowNew?z`
        ${Ds(this.name,this.data,this.casedata,this.openCase)}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
        <form class="usa-form" id="case-data">${$s()}</form>
      `:"workList"===this.action?(a=this.cases,i=this.openCase,z`
  ${a.length>0?z`
        <table class="usa-table usa-table--borderless">
          <caption>
            ${i18n.t("My pending cases")}
          </caption>
          <thead>
            <tr>
              <th span="col">${i18n.t("Name")}</th>
              <th span="col">${i18n.t("Status")}</th>
              <th span="col">${i18n.t("Action")}</th>
            </tr>
          </thead>
          <tbody>
            ${a.map((t=>z`
                <tr>
                  <td scope="row">${i18n.t(t.name)}</td>
                  <td>${t.label}</td>
                  <td>
                    <button @click="${i}" class="usa-button" data-module="govuk-button" data-type="assignment" data-id="${t.ID}">
                      ${i18n.t("Open")}
                    </button>
                  </td>
                </tr>
              `))}
          </tbody>
        </table>
      `:z`
        <div style='line-height: 50px;text-align:center'>${i18n.t("you do not have any pending cases.")}</div>
      `}
`):null}renderMainLayout=(t,e)=>Is(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this);renderReviewLayout=(t,e)=>As(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,this);genPageValidationErrors=t=>(t=>t.errorDetails?z`<div class="usa-alert usa-alert--error" role="alert">
    <div class="usa-alert__body">
      <h4 class="usa-alert__heading">Error</h4>
      ${t.errorDetails.map((t=>"Error_Validation_Fail"===t.message||"Validation failed: Errors Detected."===t.message?null:z`<p class="usa-alert__text">${i18n.t(t.localizedValue)}</p>`))}
    </div>
  </div>`:null)(t);showDataList=t=>z`
${t.pxResults.map((t=>z`
    <option>
      ${t.pyUserName}
    </option>`))}`;genActionsList=(t,e)=>((t,e)=>{const s=[],a=Object.entries(e.actions);for(const e of a)e[1].name!==t&&s.push(z`
          <li role="menuitem" tabindex="-1" data-value="${e[1].ID}">${i18n.t(e[1].name)}</li>
        `);return z`
    ${s}
  `})(t,e);displayCasesTypes=()=>(t=>{const e=[],s=Object.entries(t);for(const t of s)e.push(z`
        <li role="menuitem" tabindex="-1" data-value="${t[0]}">${i18n.t(t[1].name)}</li>
      `);return z`
    ${e}
  `})(this.casetypes);genLoadingIndicator=()=>$s();setInlineError=(t,e)=>{t.setCustomValidity(Me(e)),t.classList.add("error-field"),t.reportValidity()};validateForm=t=>t.checkValidity();reportFormValidity=t=>t.reportValidity();clickHandler=t=>{let e=t.target;"path"===e.tagName&&(e=e.parentNode),"svg"===e.tagName&&(e=e.parentNode);const s=e.getAttribute("data-action-click");e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e),Ve(e,"click")?(this.refreshAssignment(e,je(e,"click")),t.preventDefault()):"BUTTON"===e.tagName&&(t.preventDefault(),null!==e.getAttribute("data-submit")&&"save"!==e.getAttribute("data-submit")?this.submitForm(t,e.getAttribute("data-submit")):("addRow"===s||"deleteRow"===s)&&this.refreshAssignment(e))};changeHandler=t=>{let e=t.target;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e.setCustomValidity(""),e.classList.remove("error-field"),Ve(e,"change")||this.isDeclarativeTarget)this.refreshAssignment(e,je(e,"change"));else if(this.refreshOnChange){const t=this.getRenderRoot().querySelector("#case-data");We(t,this.content,this.pageInstructions,this.data.data.caseInfo.content),M(Is(this.data.uiResources.resources.views[this.casedata.content.pyViewName],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),t)}};focusHandler=t=>{const e=t.target;e.classList.contains("usa-combo-box")&&!e.classList.contains("loaded")?this.getData(e.getAttribute("data-pageid"),e):"INPUT"===e.tagName&&e.classList.contains("location")&&!e.classList.contains("pac-target-input")&&window.google&&window.google.maps&&window.google.maps.places&&new window.google.maps.places.Autocomplete(e)};async firstUpdated(){const t=this.getRenderRoot();t&&(t.addEventListener("click",this.clickHandler),t.addEventListener("focusin",this.focusHandler),t.addEventListener("change",this.changeHandler))}}class Es extends Ts{createRenderRoot(){return this}getRenderRoot(){return this}render(){return z`
      ${this.displayContent()}
    `}}return customElements.define("pega-govus",Es),t.PegaGovUS=Es,Object.defineProperty(t,"__esModule",{value:!0}),t}({});
