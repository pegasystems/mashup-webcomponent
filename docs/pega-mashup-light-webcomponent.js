var PegaMashupLightWebComponent=function(){"use strict";
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
     */const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,a=null)=>{for(;e!==a;){const a=e.nextSibling;t.removeChild(e),e=a}},a=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${a}--\x3e`,s=new RegExp(`${a}|${i}`),n="$lit$";class r{constructor(t,e){this.parts=[],this.element=e;const i=[],r=[],l=document.createTreeWalker(e.content,133,null,!1);let h=0,u=-1,p=0;const{strings:g,values:{length:m}}=t;for(;p<m;){const t=l.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:a}=e;let i=0;for(let t=0;t<a;t++)o(e[t].name,n)&&i++;for(;i-- >0;){const e=g[p],a=d.exec(e)[2],i=a.toLowerCase()+n,r=t.getAttribute(i);t.removeAttribute(i);const o=r.split(s);this.parts.push({type:"attribute",index:u,name:a,strings:o}),p+=o.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),l.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(a)>=0){const a=t.parentNode,r=e.split(s),l=r.length-1;for(let e=0;e<l;e++){let i,s=r[e];if(""===s)i=c();else{const t=d.exec(s);null!==t&&o(t[2],n)&&(s=s.slice(0,t.index)+t[1]+t[2].slice(0,-n.length)+t[3]),i=document.createTextNode(s)}a.insertBefore(i,t),this.parts.push({type:"node",index:++u})}""===r[l]?(a.insertBefore(c(),t),i.push(t)):t.data=r[l],p+=l}}else if(8===t.nodeType)if(t.data===a){const e=t.parentNode;null!==t.previousSibling&&u!==h||(u++,e.insertBefore(c(),t)),h=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(i.push(t),u--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(a,e+1));)this.parts.push({type:"node",index:-1}),p++}}else l.currentNode=r.pop()}for(const t of i)t.parentNode.removeChild(t)}}const o=(t,e)=>{const a=t.length-e.length;return a>=0&&t.slice(a)===e},l=t=>-1!==t.index,c=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(t,e){const{element:{content:a},parts:i}=t,s=document.createTreeWalker(a,133,null,!1);let n=p(i),r=i[n],o=-1,l=0;const c=[];let d=null;for(;s.nextNode();){o++;const t=s.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==r&&r.index===o;)r.index=null!==d?-1:r.index-l,n=p(i,n),r=i[n]}c.forEach((t=>t.parentNode.removeChild(t)))}const u=t=>{let e=11===t.nodeType?0:1;const a=document.createTreeWalker(t,133,null,!1);for(;a.nextNode();)e++;return e},p=(t,e=-1)=>{for(let a=e+1;a<t.length;a++){const e=t[a];if(l(e))return a}return-1};
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
class y{constructor(t,e,a){this.__parts=[],this.template=t,this.processor=e,this.options=a}update(t){let e=0;for(const a of this.__parts)void 0!==a&&a.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),a=[],i=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let n,r=0,o=0,c=s.nextNode();for(;r<i.length;)if(n=i[r],l(n)){for(;o<n.index;)o++,"TEMPLATE"===c.nodeName&&(a.push(c),s.currentNode=c.content),null===(c=s.nextNode())&&(s.currentNode=a.pop(),c=s.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,n.name,n.strings,this.options));r++}else this.__parts.push(void 0),r++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
     */const v=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),$=` ${a} `;class C{constructor(t,e,a,i){this.strings=t,this.values=e,this.type=a,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let r=0;r<t;r++){const t=this.strings[r],o=t.lastIndexOf("\x3c!--");s=(o>-1||s)&&-1===t.indexOf("--\x3e",o+1);const l=d.exec(t);e+=null===l?t+(s?$:i):t.substr(0,l.index)+l[1]+l[2]+n+l[3]+a}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==v&&(e=v.createHTML(e)),t.innerHTML=e,t}}
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
     */const w=t=>null===t||!("object"==typeof t||"function"==typeof t),S=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class x{constructor(t,e,a){this.dirty=!0,this.element=t,this.name=e,this.strings=a,this.parts=[];for(let t=0;t<a.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new k(this)}_getValue(){const t=this.strings,e=t.length-1,a=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=a[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!S(t))return t}let i="";for(let s=0;s<e;s++){i+=t[s];const e=a[s];if(void 0!==e){const t=e.value;if(w(t)||!S(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class k{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===f||w(t)&&t===this.value||(this.value=t,m(t)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const t=this.value;this.value=f,t(this)}this.value!==f&&this.committer.commit()}}class _{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=c()),t.__insert(this.endNode=c())}insertAfterPart(t){t.__insert(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}const t=this.__pendingValue;t!==f&&(w(t)?t!==this.value&&this.__commitText(t):t instanceof C?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):S(t)?this.__commitIterable(t):t===b?(this.value=b,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,a="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=a:this.__commitNode(document.createTextNode(a)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const a=new y(e,t.processor,this.options),i=a._clone();a.update(t.values),this.__commitNode(i),this.value=a}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let a,i=0;for(const s of t)a=e[i],void 0===a&&(a=new _(this.options),e.push(a),0===i?a.appendIntoPart(this):a.insertAfterPart(e[i-1])),a.setValue(s),a.commit(),i++;i<e.length&&(e.length=i,this.clear(a&&a.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class D{constructor(t,e,a){if(this.value=void 0,this.__pendingValue=void 0,2!==a.length||""!==a[0]||""!==a[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=a}setValue(t){this.__pendingValue=t}commit(){for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=f}}class A extends x{constructor(t,e,a){super(t,e,a),this.single=2===a.length&&""===a[0]&&""===a[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends k{}let I=!1;(()=>{try{const t={get capture(){return I=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class E{constructor(t,e,a){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=a,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=this.__pendingValue,e=this.value,a=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||a);a&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=N(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=f}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const N=t=>t&&(I?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
     */;function P(t){let e=R.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},R.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const s=t.strings.join(a);return i=e.keyString.get(s),void 0===i&&(i=new r(t,t.getTemplateElement()),e.keyString.set(s,i)),e.stringsArray.set(t.strings,i),i}const R=new Map,z=new WeakMap,O=(t,a,i)=>{let s=z.get(a);void 0===s&&(e(a,a.firstChild),z.set(a,s=new _(Object.assign({templateFactory:P},i))),s.appendInto(a)),s.setValue(t),s.commit()};
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
class{handleAttributeExpressions(t,e,a,i){const s=e[0];if("."===s){return new A(t,e.slice(1),a).parts}if("@"===s)return[new E(t,e.slice(1),i.eventContext)];if("?"===s)return[new D(t,e.slice(1),a)];return new x(t,e,a).parts}handleTextExpression(t){return new _(t)}};
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
     */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const M=(t,...e)=>new C(t,e,"html",L)
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
     */,U=(t,e)=>`${t}--${e}`;let q=!0;void 0===window.ShadyCSS?q=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),q=!1);const V=t=>e=>{const i=U(e.type,t);let s=R.get(i);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},R.set(i,s));let n=s.stringsArray.get(e.strings);if(void 0!==n)return n;const o=e.strings.join(a);if(n=s.keyString.get(o),void 0===n){const a=e.getTemplateElement();q&&window.ShadyCSS.prepareTemplateDom(a,t),n=new r(e,a),s.keyString.set(o,n)}return s.stringsArray.set(e.strings,n),n},F=["html","svg"],j=new Set,W=(t,e,a)=>{j.add(t);const i=a?a.element:document.createElement("template"),s=e.querySelectorAll("style"),{length:n}=s;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(i,t);const r=document.createElement("style");for(let t=0;t<n;t++){const e=s[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{F.forEach((e=>{const a=R.get(U(e,t));void 0!==a&&a.keyString.forEach((t=>{const{element:{content:e}}=t,a=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{a.add(t)})),h(t,a)}))}))})(t);const o=i.content;a?function(t,e,a=null){const{element:{content:i},parts:s}=t;if(null==a)return void i.appendChild(e);const n=document.createTreeWalker(i,133,null,!1);let r=p(s),o=0,l=-1;for(;n.nextNode();)for(l++,n.currentNode===a&&(o=u(e),a.parentNode.insertBefore(e,a));-1!==r&&s[r].index===l;){if(o>0){for(;-1!==r;)s[r].index+=o,r=p(s,r);return}r=p(s,r)}}(a,r,o.firstChild):o.insertBefore(r,o.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const l=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(a){o.insertBefore(r,o.firstChild);const t=new Set;t.add(r),h(a,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const B={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},H=(t,e)=>e!==t&&(e==e||t==t),Z={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:H},J="finalized";class Y extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,a)=>{const i=this._attributeNameForProperty(a,e);void 0!==i&&(this._attributeToPropertyMap.set(i,a),t.push(i))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=Z){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const a="symbol"==typeof t?Symbol():`__${t}`,i=this.getPropertyDescriptor(t,a,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,a){return{get(){return this[e]},set(i){const s=this[t];this[e]=i,this.requestUpdateInternal(t,s,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||Z}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(J)||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const a of e)this.createProperty(a,t[a])}}static _attributeNameForProperty(t,e){const a=e.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,a=H){return a(t,e)}static _propertyValueFromAttribute(t,e){const a=e.type,i=e.converter||B,s="function"==typeof i?i:i.fromAttribute;return s?s(t,a):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const a=e.type,i=e.converter;return(i&&i.toAttribute||B.toAttribute)(t,a)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,a){e!==a&&this._attributeToProperty(t,a)}_propertyToAttribute(t,e,a=Z){const i=this.constructor,s=i._attributeNameForProperty(t,a);if(void 0!==s){const t=i._propertyValueToAttribute(e,a);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(s):this.setAttribute(s,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const a=this.constructor,i=a._attributeToPropertyMap.get(t);if(void 0!==i){const t=a.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=a._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,a){let i=!0;if(void 0!==t){const s=this.constructor;a=a||s.getPropertyOptions(t),s._valueHasChanged(this[t],e,a.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==a.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,a))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}Y.finalized=!0;
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
const X=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(a){a.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(a){a.createProperty(e.key,t)}};function G(t){return(e,a)=>void 0!==a?((t,e,a)=>{e.constructor.createProperty(a,t)})(t,e,a):X(t,e)}
/**
    @license
    Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */const K=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class tt{constructor(t,e){if(e!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const et={};class at extends Y{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,a)=>t.reduceRight(((t,a)=>Array.isArray(a)?e(a,t):(t.add(a),t)),a),a=e(t,new Set),i=[];a.forEach((t=>i.unshift(t))),this._styles=i}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!K){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new tt(String(e),Q)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==et&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return et}}at.finalized=!0,at.render=(t,a,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const s=i.scopeName,n=z.has(a),r=q&&11===a.nodeType&&!!a.host,o=r&&!j.has(s),l=o?document.createDocumentFragment():a;if(O(t,l,Object.assign({templateFactory:V(s)},i)),o){const t=z.get(l);z.delete(l);const i=t.value instanceof y?t.value.template:void 0;W(s,l,i),e(a,a.firstChild),a.appendChild(l),z.set(a,t)}!n&&r&&window.ShadyCSS.styleElement(a.host)};
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
const it=new WeakMap,st=(nt=t=>e=>{const a=it.get(e);if(void 0===t&&e instanceof k){if(void 0!==a||!it.has(e)){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else t!==a&&e.setValue(t);it.set(e,t)},(...t)=>{const e=nt(...t);return g.set(e,!0),e});var nt;const rt=t=>`0${t}`.slice(-2),ot=t=>{if(t.endsWith(" GMT")&&23===t.length)return new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T${t.substring(9,11)}:${t.substring(11,13)}:${t.substring(13,19)}Z`);if(8===t.length){let e=new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T00:00:00.000Z`);return e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),e}if(10===t.length){let e=new Date(`${t.substring(6,10)}-${t.substring(0,2)}-${t.substring(3,5)}T00:00:00.000Z`);return e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),e}return null},lt=t=>t.replace(/&amp;|&lt;|&gt;|&#39;|&#40;|&#41;|&quot;/g,(t=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&#40;":"(","&#41;":")","&quot;":'"'}[t]||t))),ct=(t,e,a)=>{if("string"!=typeof e)return;const i=e.split(".");let s=t;for(const t in i){let e=i[t];const n=e.indexOf("(");if(-1===n)t<i.length-1?void 0===s[e]&&(s[e]={}):s[e]=a,s=s[e];else{const t=e.substring(n+1,e.length-1);e=e.substring(0,n),void 0===s[e]&&(s[e]=[]);for(let a=s[e].length;a<t;a++)s[e].push({});s=s[e][t-1]}}},dt=(t,e)=>{if("string"!=typeof e)return null;let a=t;const i=e.split(".");for(const t in i){const e=i[t],s=e.indexOf("(");if(-1===s){if(!a[e])return null;a=a[e]}else{const t=e.substring(s+1,e.length-1),i=a[e.substring(0,s)];if(!(i&&Array.isArray(i)&&i.length>=t))return null;a=i[t-1]}}return a},ht=t=>{for(const e in t)"object"==typeof t[e]?ht(t[e]):"string"==typeof t[e]&&(t[e]="")},ut=(t,e)=>{for(const a in t)if("fieldID"===a)e.push(t.fieldID);else{const i=t[a];i.fieldID?e.push(i.fieldID):"object"==typeof i&&ut(i,e)}},pt=(t,e)=>{const a=t.getAttribute(`data-action-${e}`);return!(!a||"postValue"!==a&&0!==a.indexOf("refresh"))},gt=(t,e)=>{const a=t.getAttribute(`data-action-${e}`);return a&&0===a.indexOf("refresh")?a.replace("refresh-",""):""},mt=(t,e)=>{for(const a in t.elements){const i=t.elements[a];if("INPUT"===i.tagName||"TEXTAREA"===i.tagName||"SELECT"===i.tagName){const t=i.getAttribute("data-ref");if(null!==t&&"pyID"!==t)if("INPUT"===i.tagName){const a=i.getAttribute("type");if("checkbox"===a)ct(e,t,i.checked);else if("radio"===a)i.checked&&ct(e,t,i.value);else if("date"===a){let a;i.valueAsDate&&(a=new Date(i.valueAsDate)),a&&a instanceof Date&&a.getTime()==a.getTime()||(a=new Date(i.value)),a&&a instanceof Date&&a.getTime()==a.getTime()?(a=new Date(a.getTime()+6e4*a.getTimezoneOffset()),ct(e,t,`${rt(a.getMonth()+1)}/${rt(a.getDate())}/${a.getFullYear()}`)):ct(e,t,i.value)}else ct(e,t,i.value)}else ct(e,t,i.value)}}},ft=t=>{if(void 0===t.content)return{};const e={};for(const a in t.content){const i=t.content[a];"object"!=typeof i||0===a.indexOf("px")||Array.isArray(i)||"pyWorkParty"===a||(e[a]=i)}return e},bt=(t,e)=>{if(t.control&&t.control.actionSets&&t.control.actionSets.length>0)for(const a in t.control.actionSets){const i=t.control.actionSets[a];if(i.events.length>0&&i.actions.length>0&&i.events[0].event===e){let t=i.actions[0].action;return"refresh"===t&&""!==i.actions[0].refreshFor&&(t+=`-${i.actions[0].refreshFor}`),t}}},yt=t=>"pyTemplateButton"!==t.reference?t.reference:t.control&&t.control.modes?t.control.modes[1].tooltip:null,vt=(t,e,a)=>{if(void 0===e)return null;const i=t.required&&!0!==t.readOnly?"icon-required":"";return"field-checkbox"===a?""!==t.label||!0===t.showLabel?M`<div class="field-caption dataLabelForWrite ${i}">${lt(t.label)}</div>`:null:"field-text"===a&&!0===t.readOnly&&"pxCheckbox"===t.control.type&&t.control.label?M`<label class="field-caption dataLabelForWrite">${lt(t.control.label)}</label>`:""!==t.label||!0===t.showLabel||!0===t.labelReserveSpace?M`<label class="field-caption dataLabelForWrite ${i}" for="${st(e)}">${lt(t.label)}</label>`:null},$t=(t,e,a,i)=>void 0===e?M`
      ${i}
    `:"field-button"!==a||(t=>!!(t.control&&t.control.actionSets&&t.control.actionSets.length>0))(t)?"field-radiogroup"===a?M`
    <div class="flex content-item field-item ${a}"><fieldset><legend>${vt(t,e,a)}</legend>${i}</fielset></div>
  `:M`
    <div class="flex content-item field-item ${a}">${vt(t,e,a)}${i}</div>
  `:null,Ct=()=>M`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.3375,3 C20.3375,3 21.7742187,4.43671875 21.7742187,4.43671875 C21.7742187,4.43671875 4.43671875,21.4867188 4.43671875,21.4867188 C4.43671875,21.4867188 3,20.19375 3,20.19375 C3,20.19375 20.3375,3 20.3375,3 Z M21.7265625,20.0976563 C21.7265625,20.0976563 20.3859375,21.534375 20.3859375,21.534375 C20.3859375,21.534375 3.00078125,4.3890625 3.00078125,4.3890625 C3.00078125,4.3890625 4.38984375,3 4.38984375,3 C4.38984375,3 21.7273438,20.0976563 21.7273438,20.0976563 L21.7265625,20.0976563 Z"/>
</svg>`,wt=()=>M`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1140625,3.96875 C22.1140625,3.96875 22.1140625,3.96875 22.1140625,3.96875 C22.1140625,3.96875 17.46875,3.96875 17.46875,3.96875 C17.46875,3.96875 16.9898437,2.14921875 16.9898437,2.14921875 C16.9421875,1.8140625 16.7507812,1.57421875 16.5109375,1.33515625 C16.2234375,1.09609375 15.8882813,1 15.553125,1 C15.553125,1 15.553125,1 15.553125,1 C15.553125,1 9.03984375,1 9.03984375,1 C8.7046875,1 8.4171875,1.09609375 8.1296875,1.2875 C7.8421875,1.52734375 7.65078125,1.76640625 7.603125,2.1015625 C7.603125,2.1015625 7.603125,2.1015625 7.603125,2.1015625 C7.603125,2.1015625 7.12421875,3.96953125 7.12421875,3.96953125 C7.12421875,3.96953125 2.47890625,3.96953125 2.47890625,3.96953125 C2.14375,3.96953125 2,4.11328125 2,4.4484375 C2,4.78359375 2.14375,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 2.47890625,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 4.01171875,4.92734375 4.01171875,4.92734375 C4.01171875,4.92734375 4.921875,23.1742188 4.921875,23.1742188 C4.96953125,23.5570312 5.11328125,23.8929688 5.40078125,24.1320313 C5.63984375,24.4195312 5.97578125,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 6.40625,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 18.2359375,24.5632812 18.2359375,24.5632812 C18.6671875,24.5632812 19.0023438,24.4195312 19.2898438,24.1320313 C19.5289063,23.8929688 19.6726562,23.5570312 19.7210938,23.1742188 C19.7210938,23.1742188 19.7210938,23.1742188 19.7210938,23.1742188 C19.7210938,23.1742188 20.63125,4.92734375 20.63125,4.92734375 C20.63125,4.92734375 22.115625,4.92734375 22.115625,4.92734375 C22.4507812,4.92734375 22.5945312,4.78359375 22.5945312,4.4484375 C22.5945312,4.11328125 22.4507812,3.96953125 22.115625,3.96953125 L22.1140625,3.96875 Z M8.17734375,3.96875 C8.17734375,3.96875 8.56015625,2.38828125 8.56015625,2.38828125 C8.6078125,2.1484375 8.79921875,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 9.0390625,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 15.5523437,2.00546875 15.5523437,2.00546875 C15.7914062,2.00546875 15.9835937,2.14921875 16.03125,2.38828125 C16.03125,2.38828125 16.03125,2.38828125 16.03125,2.38828125 C16.03125,2.38828125 16.4140625,3.96875 16.4140625,3.96875 C16.4140625,3.96875 8.1765625,3.96875 8.1765625,3.96875 L8.17734375,3.96875 Z M19.6710938,4.9265625 C19.6710938,4.9265625 18.7609375,23.1257812 18.7609375,23.1257812 C18.7132812,23.4132812 18.521875,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 18.234375,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 6.4046875,23.5570312 6.4046875,23.5570312 C6.1171875,23.5570312 5.92578125,23.4132812 5.878125,23.1257812 C5.878125,23.1257812 5.878125,23.1257812 5.878125,23.1257812 C5.878125,23.1257812 4.96796875,4.9265625 4.96796875,4.9265625 C4.96796875,4.9265625 19.6710938,4.9265625 19.6710938,4.9265625 L19.6710938,4.9265625 Z M8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,18.1929687 8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,10.3382812 8.84765625,10.3382812 C8.84765625,10.003125 9.0390625,9.859375 9.37421875,9.859375 C9.37421875,9.859375 9.37421875,9.859375 9.37421875,9.859375 C9.709375,9.859375 9.853125,10.003125 9.853125,10.3382812 C9.853125,10.3382812 9.853125,10.3382812 9.853125,10.3382812 C9.853125,10.3382812 9.853125,18.1929687 9.853125,18.1929687 C9.853125,18.528125 9.709375,18.671875 9.37421875,18.671875 C9.37421875,18.671875 9.37421875,18.671875 9.37421875,18.671875 C9.0390625,18.671875 8.84765625,18.528125 8.84765625,18.1929687 Z M14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,18.1929687 14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,10.3382812 14.7382812,10.3382812 C14.7382812,10.003125 14.8820313,9.859375 15.2171875,9.859375 C15.2171875,9.859375 15.2171875,9.859375 15.2171875,9.859375 C15.5523437,9.859375 15.74375,10.003125 15.74375,10.3382812 C15.74375,10.3382812 15.74375,10.3382812 15.74375,10.3382812 C15.74375,10.3382812 15.74375,18.1929687 15.74375,18.1929687 C15.74375,18.528125 15.5523437,18.671875 15.2171875,18.671875 C15.2171875,18.671875 15.2171875,18.671875 15.2171875,18.671875 C14.8820313,18.671875 14.7382812,18.528125 14.7382812,18.1929687 Z M11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,19.1507813 11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,9.38046875 11.8164062,9.38046875 C11.8164062,9.0453125 11.9601563,8.85390625 12.2953125,8.85390625 C12.6304687,8.85390625 12.7742187,9.0453125 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,9.38046875 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,19.1507813 12.7742187,19.1507813 C12.7742187,19.4859375 12.6304687,19.6773437 12.2953125,19.6773437 C11.9601563,19.6773437 11.8164062,19.4859375 11.8164062,19.1507813 Z"/>
</svg>`,St=()=>M`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.5226562,11.6265625 C20.6664062,11.6265625 20.7617188,11.6742188 20.8578125,11.7703125 C20.9539062,11.8664063 21.0015625,11.9617188 21.0015625,12.1054688 C21.0015625,12.2492188 20.9539062,12.3445313 20.8578125,12.440625 C20.8578125,12.440625 20.8578125,12.440625 20.8578125,12.440625 C20.8578125,12.440625 13.2429687,20.0554687 13.2429687,20.0554687 C12.1414062,21.109375 10.8484375,21.6359375 9.41171875,21.6359375 C7.975,21.6359375 6.68203125,21.109375 5.58046875,20.0554687 C5.58046875,20.0554687 5.58046875,20.0554687 5.58046875,20.0554687 C4.5265625,19.0015625 4,17.75625 4,16.271875 C4,16.271875 4,16.271875 4,16.271875 C4,14.8351563 4.5265625,13.5421875 5.58046875,12.440625 C5.58046875,12.440625 5.58046875,12.440625 5.58046875,12.440625 C5.58046875,12.440625 14.9671875,3.14921875 14.9671875,3.14921875 C15.7335937,2.3828125 16.64375,2 17.7453125,2 C18.846875,2 19.7570312,2.3828125 20.5234375,3.14921875 C20.5234375,3.14921875 20.5234375,3.14921875 20.5234375,3.14921875 C21.2898437,3.86796875 21.6726562,4.77734375 21.6726562,5.87890625 C21.6726562,5.87890625 21.6726562,5.87890625 21.6726562,5.87890625 C21.6726562,6.98046875 21.2898437,7.890625 20.5234375,8.65703125 C20.5234375,8.65703125 20.5234375,8.65703125 20.5234375,8.65703125 C20.5234375,8.65703125 11.8546875,17.2773438 11.8546875,17.2773438 C11.3757813,17.75625 10.8007812,17.9960938 10.1304687,17.9960938 C10.1304687,17.9960938 10.1304687,17.9960938 10.1304687,17.9960938 C9.5078125,17.9960938 8.88515625,17.7570313 8.35859375,17.2773438 C8.35859375,17.2773438 8.35859375,17.2773438 8.35859375,17.2773438 C7.8796875,16.7984375 7.63984375,16.2234375 7.63984375,15.553125 C7.63984375,14.8828125 7.87890625,14.3078125 8.35859375,13.8289062 C8.35859375,13.8289062 8.35859375,13.8289062 8.35859375,13.8289062 C8.35859375,13.8289062 16.6921875,5.54375 16.6921875,5.54375 C16.7882812,5.44765625 16.93125,5.4 17.075,5.4 C17.075,5.4 17.075,5.4 17.075,5.4 C17.21875,5.4 17.3140625,5.44765625 17.4101562,5.54375 C17.50625,5.63984375 17.5539062,5.73515625 17.5539062,5.87890625 C17.5539062,5.87890625 17.5539062,5.87890625 17.5539062,5.87890625 C17.5539062,6.02265625 17.50625,6.16640625 17.4101562,6.26171875 C17.4101562,6.26171875 17.4101562,6.26171875 17.4101562,6.26171875 C17.4101562,6.26171875 9.0765625,14.4992187 9.0765625,14.4992187 C8.7890625,14.7867187 8.6453125,15.121875 8.6453125,15.553125 C8.6453125,15.984375 8.7890625,16.3195313 9.0765625,16.6070312 C9.3640625,16.8945312 9.69921875,17.0382813 10.1304687,17.0382813 C10.1304687,17.0382813 10.1304687,17.0382813 10.1304687,17.0382813 C10.5132812,17.0382813 10.8492187,16.8945312 11.1359375,16.6070312 C11.1359375,16.6070312 11.1359375,16.6070312 11.1359375,16.6070312 C11.1359375,16.6070312 19.8523437,7.98671875 19.8523437,7.98671875 C20.4273437,7.41171875 20.7140625,6.69375 20.7140625,5.8796875 C20.7140625,5.8796875 20.7140625,5.8796875 20.7140625,5.8796875 C20.7140625,5.065625 20.4265625,4.3953125 19.8523437,3.8203125 C19.8523437,3.8203125 19.8523437,3.8203125 19.8523437,3.8203125 C19.2296875,3.2453125 18.5117187,2.95859375 17.7453125,2.95859375 C17.7453125,2.95859375 17.7453125,2.95859375 17.7453125,2.95859375 C16.93125,2.95859375 16.2609375,3.24609375 15.6859375,3.8203125 C15.6859375,3.8203125 15.6859375,3.8203125 15.6859375,3.8203125 C15.6859375,3.8203125 6.29921875,13.159375 6.29921875,13.159375 C5.4375,13.9734375 5.00625,14.9789062 5.00625,16.2726562 C5.00625,16.2726562 5.00625,16.2726562 5.00625,16.2726562 C5.00625,17.5179688 5.4375,18.5234375 6.29921875,19.3375 C6.29921875,19.3375 6.29921875,19.3375 6.29921875,19.3375 C7.1609375,20.1992188 8.21484375,20.6304688 9.4125,20.6304688 C9.4125,20.6304688 9.4125,20.6304688 9.4125,20.6304688 C10.7054687,20.6304688 11.7117187,20.1992188 12.5257812,19.3375 C12.5257812,19.3375 12.5257812,19.3375 12.5257812,19.3375 C12.5257812,19.3375 20.1882812,11.7703125 20.1882812,11.7703125 C20.284375,11.6742188 20.3796875,11.6265625 20.5234375,11.6265625 L20.5226562,11.6265625 Z"/>
</svg>`,xt=(t,e,a)=>{if(void 0===t||void 0===t.control||void 0===t.control.type)return null;if(t.customAttributes&&"none"===t.customAttributes.display)return null;if(!0===a||!0===t.readOnly||"pxHidden"===t.control.type)return $t(t,e,"field-text",kt(t,e));switch(t.control.type){case"pxPhone":case"pxTextInput":return $t(t,e,"field-textinput",_t(t,e));case"pxInteger":case"pxNumber":return $t(t,e,"field-numberinput",At(t,e));case"pxCurrency":return $t(t,e,"field-currencyinput",Tt(t,e));case"pxEmail":return $t(t,e,"field-emailinput",It(t,e));case"pxTextArea":return $t(t,e,"field-textarea",Et(t,e));case"pxRadioButtons":return $t(t,e,"field-radiogroup",Ut(t,e));case"pxCheckbox":return $t(t,e,"field-checkbox",qt(t,e));case"pxDropdown":return $t(t,e,"field-dropdown",Vt(t,e));case"pxDisplayText":return $t(t,e,"field-text",kt(t,e));case"pxIcon":return $t(t,e,"field-icon",Nt(t,e));case"pxLink":case"pxURL":return $t(t,e,"field-url",Pt(t,e));case"pxIconDeleteItem":return $t(t,e,"field-button",zt(t,e));case"pxButton":return $t(t,e,"field-button",Rt(t,e));case"pxDateTime":return"TimeOfDay"===t.type?$t(t,e,"field-time",Mt(t,e)):"Date"===t.type?$t(t,e,"field-date",Lt(t,e)):$t(t,e,"field-datetime",Ot(t,e));case"pxAutoComplete":return $t(t,e,"field-combobox",Ft(t,e));case"pxSlider":return $t(t,e,"field-slider",Dt(t,e));default:return null}},kt=(t,e)=>{if("pxDate"===t.control.type){let a=ot(t.value);if(a)if(t.control&&2===t.control.modes.length){let e={};switch(t.control.modes[1].dateFormat){case"DateTime-Short-YYYY":case"Date-DayMonthYear-Custom":case"Date-Mediun":e={year:"numeric",month:"short",day:"numeric"};break;case"Date-Short":e={year:"numeric",month:"numeric",day:"numeric"};break;case"Date-Long":e={year:"numeric",month:"long",day:"numeric"};break;case"Date-Full":e={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;default:e={}}a=new Intl.DateTimeFormat([],e).format(a)}else a=(new Intl.DateTimeFormat).format(a);else a=t.value;return M`
      <span class="dataValueRead" data-ref="${t.reference}" id="${st(e)}">${a}</span>
    `}if("pxDateTime"===t.control.type){let a=ot(t.value);if(a)if(t.control&&2===t.control.modes.length){let e={};switch(t.control.modes[1].dateTimeFormat){case"DateTime-Short-YYYY":e={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};break;default:e={}}a=new Intl.DateTimeFormat([],e).format(a)}else a=(new Intl.DateTimeFormat).format(a);else a=t.value;return M`
      <span class="dataValueRead" data-ref="${t.reference}" id="${st(e)}">${a}</span>
    `}if("pxTime"===t.control.type){let a=ot(t.value);if(a)if(t.control&&2===t.control.modes.length){const t={hour:"numeric",minute:"numeric"};a=new Intl.DateTimeFormat([],t).format(a)}else a=(new Intl.DateTimeFormat).format(a);else a=t.value;return M`
      <span class="dataValueRead" data-ref="${t.reference}" id="${st(e)}">${a}</span>
    `}if("pxHidden"===t.control.type)return M`
    <input type="text" style="display:none" data-ref="${t.reference}" id="${st(e)}" value="${lt(t.value)}"/>
    `;let a=t.value;if(t.control&&2===t.control.modes.length&&"locallist"===t.control.modes[0].listSource)for(const e in t.control.modes[0].options){const i=t.control.modes[0].options[e];i.key===a&&(a=i.value)}return"pxCurrency"===t.control.type&&(a=`$${a}`),M`
    <span class="dataValueRead" data-ref="${t.reference}" id="${st(e)}">${lt(a)}</span>
  `},_t=(t,e)=>M`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="text"
    id="${st(e)}"
    value="${lt(t.value)}"
    data-action-change="${st(bt(t,"change"))}"
    data-action-click="${st(bt(t,"click"))}"
  />
`,Dt=(t,e)=>M`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="range"
    id="${st(e)}"
    value="${lt(t.value)}"
    data-action-change="${st(bt(t,"change"))}"
    data-action-click="${st(bt(t,"click"))}"
  />
`,At=(t,e)=>M`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="number"
    id="${st(e)}"
    value="${t.value}"
    data-action-change="${st(bt(t,"change"))}"
    data-action-click="${st(bt(t,"click"))}"
  />
`,Tt=(t,e)=>M`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="number"
    id="${st(e)}"
    value="${t.value}"
    data-action-change="${st(bt(t,"change"))}"
    data-action-click="${st(bt(t,"click"))}"
  />
`,It=(t,e)=>M`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="email"
    id="${st(e)}"
    value="${t.value}"
    data-action-change="${st(bt(t,"change"))}"
    data-action-click="${st(bt(t,"click"))}"
  />
`,Et=(t,e)=>M`
  <textarea
    data-ref="${t.reference}"
    rows="3"
    ?required="${!0===t.required}"
    id="${st(e)}"
    data-action-change="${st(bt(t,"change"))}"
    data-action-click="${st(bt(t,"click"))}"
  >
${lt(t.value)}</textarea
  >
`,Nt=(t,e)=>M`
  <i
    class="${t.control.modes[1].iconStyle}"
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    id="${st(e)}"
    value="${t.value}"
  />
`,Pt=(t,e)=>M`
  <a id="${st(e)}" data-ref="${t.reference}" href="${t.value}">${t.control.label}</a>
`,Rt=(t,e)=>{const a=bt(t,"click");return"deleteRow"===a?zt(t,e):M`
  <button
  type='button' 
    class="${st(t.control.modes[1].controlFormat)} pzhc pzbutton"
    id="${st(e)}"
    data-ref="${st(yt(t))}"
    data-action-click="${st(a)}"
  >${t.control.label}</button>`},zt=(t,e)=>M`
  <button
    type='button' 
    class="pzhc pzbutton Icon"
    title="Delete row"
    id="${st(e)}"
    data-ref="${st(yt(t))}"
    data-action-click="deleteRow"
  >${wt()}</button>
`,Ot=(t,e)=>{let a=t.value;if(""!==a){let e=ot(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${e.getFullYear()}-${rt(e.getMonth()+1)}-${rt(e.getDate())}T${rt(e.getHours())}:${rt(e.getMinutes())}`):8===t.value.length&&(a=`${t.value.substring(0,4)}-${t.value.substring(4,6)}-${t.value.substring(6,8)}T00:00`)}return M`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      type="datetime-local"
      id="${st(e)}"
      value="${a}"
      data-action-change="${st(bt(t,"change"))}"
    data-action-click="${st(bt(t,"click"))}"
    />
  `},Lt=(t,e)=>{let a=t.value;if(""!==a){let e=ot(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${e.getFullYear()}-${rt(e.getMonth()+1)}-${rt(e.getDate())}`):8===t.value.length&&(a=`${t.value.substring(0,4)}-${t.value.substring(4,6)}-${t.value.substring(6,8)}`)}return M`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      type="date"
      id="${st(e)}"
      value="${a}"
      data-action-change="${st(bt(t,"change"))}"
    data-action-click="${st(bt(t,"click"))}"
    />
  `},Mt=(t,e)=>{let a=t.value;if(""!==a){let e=ot(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${rt(e.getHours())}-${rt(e.getMinutes())}-${rt(e.getSeconds())}`):8===t.value.length&&(a=`${t.value.substring(9,10)}:${t.value.substring(10,11)}:${t.value.substring(11,12)}`)}return M`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      type="time"
      id="${st(e)}"
      value="${a}"
      data-action-change="${st(bt(t,"change"))}"
      data-action-click="${st(bt(t,"click"))}"
    />
  `},Ut=(t,e)=>{let a;return t.control&&t.control.modes&&t.control.modes[0].options?a=t.control.modes[0].options:"True-False"===t.type&&(a=[{value:"true"},{value:"false"}]),void 0===a?null:M`
    ${a.map(((a,i)=>{const s=`rb-${e}-${i}`;return M`
        <div>
          <input
            data-ref="${t.reference}"
            name=${st(e)}
            id="${s}"
            type="radio"
            value="${a.key}"
            ?required="${!0===t.required}"
            ?checked="${a.key===t.value}"
            data-action-change="${st(bt(t,"change"))}"
          />
          <label for="${s}">${a.value}</label>
        </div>
      `}))}
  `},qt=(t,e)=>M`
<div>
  <input
  data-ref="${t.reference}" 
  id="${st(e)}"
  type="checkbox" 
  ?checked=${"true"===t.value}
  data-action-change="${st(bt(t,"change"))}"
  data-action-click="${st(bt(t,"click"))}"
  />
  <label for="${st(e)}">${t.control.label}</label>
  </div>
`,Vt=(t,e)=>t.control&&t.control.modes[0]&&t.control.modes[0].options?M`<select
      data-ref="${t.reference}"
      id=${st(e)}
      ?required="${!0===t.required}"
      data-action-change="${st(bt(t,"change"))}"
      data-action-click="${st(bt(t,"click"))}">
        <option value="" title="Select...">Select...</option>
        ${t.control.modes[0].options.map((e=>M`
            <option ?selected=${e.key===t.value} value='${e.key}'>${e.value}</option>
          `))}
      </select>`:M`<input
      type='text'
      data-ref="${t.reference}"
      id=${st(e)}
      ?required="${!0===t.required}"
      data-action-change="${st(bt(t,"change"))}"
      data-action-click="${st(bt(t,"click"))}">
      </input>`,Ft=(t,e)=>{if(t.control.modes&&t.control.modes[0]&&t.control.modes[0].options)return M`
      <input
        data-ref="${t.reference}"
        list="${t.reference}"
        ?required="${!0===t.required}"
        type="text"
        class="combobox loaded"
        id="${st(e)}"
        value="${lt(t.value)}"
        data-action-change="${st(bt(t,"change"))}"
        data-action-click="${st(bt(t,"click"))}"
      />
      <datalist id="${t.reference}">
        ${t.control.modes[0].options.map((t=>M`
            <option value="${t.value}">
              ${t.key}
            </option>
          `))}
      </datalist>
    `;let a="";return t.control&&t.control.modes&&t.control.modes[0]&&t.control.modes[0].dataPageID&&(a=t.control.modes[0].dataPageID),M`
    <input
      data-ref="${t.reference}"
      list="${t.reference}"
      data-pageid="${a}"
      ?required="${!0===t.required}"
      type="text"
      class="combobox"
      id="${st(e)}"
      value="${t.value}"
      data-action-change="${st(bt(t,"change"))}"
      data-action-click="${st(bt(t,"click"))}"
    />
    <datalist id="${t.reference}"></datalist>
  `},jt=t=>""!==t.title?M`
      <div class="header-bar">
        <div class="header-content"><h3 class="header-title">${t.title}</h3></div>
      </div>
    `:null,Wt=(t,e)=>{let a=t.fieldListID;if(void 0!==t.reference&&(a=t.reference),"."===a.charAt(0)&&(a=a.substring(1)),t.newRow&&!0!==e){const e=[];return ut(t.newRow,e),M`
      <div class="table-action-area">
        ${"add-row"===t.testID?M`<button type="button" class="pzhc pzbutton Simple" data-newrow="${st(e.join())}"
        data-ref=${a} data-action-click="addRow">${M`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
<path d="M11.290625,2 C11.290625,2 13.2539062,2 13.2539062,2 C13.2539062,2 13.2539062,22.59375 13.2539062,22.59375 C13.2539062,22.59375 11.290625,22.59375 11.290625,22.59375 C11.290625,22.59375 11.290625,2 11.290625,2 Z M22.59375,11.3390625 C22.59375,11.3390625 22.59375,13.2546875 22.59375,13.2546875 C22.59375,13.2546875 2,13.2546875 2,13.2546875 C2,13.2546875 2,11.3390625 2,11.3390625 C2,11.3390625 22.59375,11.3390625 22.59375,11.3390625 L22.59375,11.3390625 Z"/>
</svg>`}Add item</button>`:""}
      </div>
    `}return null},Bt=t=>M`
  ${t.map((t=>M`
    <th>${t.caption?M`${t.caption.value}`:""}</th>`))}
`,Ht=t=>M`
  ${t.map((t=>M`
    <tr>
      ${t.groups.map((t=>M`
      <td>${xt(t.field)}</td>`))}
    </tr>`))}
`,Zt=()=>M`
<span class="loading">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</span>
`,Jt=(t,e,a,i)=>((t,e,a,i)=>{const s=document.createElement("div");s.setAttribute("role","alertdialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-labelledby",t),s.setAttribute("aria-describedby",""),s.setAttribute("class","mashup-modal");const n=document.createElement("div");s.appendChild(n);const r=()=>{document.body.removeEventListener("click",o),s&&(s.previousElementSibling&&(s.previousElementSibling.removeAttribute("aria-hidden"),s.previousElementSibling.focus()),s.remove())},o=t=>{if(t){let e=t.target;if(e.download)return;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e){const t=e.closest("button");if((null===t||"close"!==t.getAttribute("data-action-id"))&&!e.classList.contains("mashup-modal")&&null!==e.closest(".mashup-modal"))return}r()}};return M`
  <div class='modalcontent'>
    <button type="button" @click="${t=>{t.preventDefault(),t.stopPropagation();const e=t.target.closest(".modalcontent");null===e?r():1===e.children.length?(e.firstElementChild.setAttribute("aria-hidden","true"),s.style.opacity=0,e.appendChild(s),i(n),document.body.addEventListener("click",o),s.offsetHeight,s.style=""):r()}}" class="pzhc pzbutton ${a}" title="${t}">${e}</button>
  </div>`})(t,e,a,(t=>{O(Yt(t,[]),t),i(t)})),Yt=(t,e,a,i,s)=>{let n=0;const r=t=>{if(void 0===t||"string"==typeof t&&""===t)return;if("URL"===e[n].category)return void window.open(t);let a=e[n].fileName;void 0===a&&(a=e[n].name);const i=window.document.createElement("a");if("Correspondence"===e[n].category){a=`${e[n].name}.html`;const s=`<html><head><title>${e[n].name}</title></head><body>${t}</body></html>`,r=new Blob([s],{type:"text"});i.href=window.URL.createObjectURL(r)}else{const e=function(t){const e=window.atob(t),a=e.length,i=new Uint8Array(a);for(let t=0;t<a;t++){const a=e.charCodeAt(t);i[t]=a}return i}(t),a=new Blob([e],{type:"octet/stream"});i.href=window.URL.createObjectURL(a)}i.download=a,document.body.appendChild(i),i.click(),document.body.removeChild(i)},o=t=>{t.stopPropagation();const a=t.target;n=a.getAttribute("data-id"),i.fetchData.call(i,"attachment",{id:e[n].ID,target:r})},l=a=>{a.preventDefault(),a.stopPropagation();const s=a.target.closest("button");n=s.getAttribute("data-id"),i.sendData.call(i,"deleteattachment",{id:e[n].ID,target:t})},c=r=>{r.stopPropagation();const o=r.target.closest("button");n=parseInt(o.getAttribute("data-id"),10),s.splice(n,1),O(Yt(t,e,a,i,s),t)},d=t=>{t.stopPropagation(),t.preventDefault();const e=t.target;if(n=e.getAttribute("data-id"),"INPUT"===e.tagName){const t=e.getAttribute("data-prop-id");s[n][t]=e.value}else"SELECT"===e.tagName&&(s[n].category=e.value)},h=t=>{t.preventDefault();const e=t.target,a=t.relatedTarget,i=null===e?null:e.closest(".attach-files"),s=null===a?null:a.closest(".attach-files");if("dragenter"===t.type||"dragover"===t.type?null!=i&&i.classList.add("drop-file-hover"):"dragleave"!==t.type&&"drop"!==t.type||null===s&&null!==i&&i.classList.remove("drop-file-hover"),"drop"===t.type){const a=t.dataTransfer.files;p(e,a)}},u=n=>{n.stopPropagation(),n.preventDefault();for(let n=0;n<s.length;n++){const r=s[n];delete r.editing,r.loading=!0,"URL"===r.type?(e.unshift(r),i.sendData.call(i,"attachments",{id:a,actionid:[r],target:t})):(e.unshift({name:r.displayName,extension:r.extension,loading:!0}),i.sendData.call(i,"uploadattachment",{actionid:r,target:t}))}O(Yt(t,e,a,i),t)},p=(s,n)=>{const r=[];for(let t=0;t<n.length;t++){const e=n[t];let a=e.name.lastIndexOf(".");-1===a&&(a=e.name.length),e.displayName=e.name.substring(0,a),e.extension=e.name.substring(a+1),e.editing=!0,e.category="File",r.push(e)}O(Yt(t,e,a,i,r),t)},g=t=>{t.stopPropagation();let e=t.target;if("BUTTON"===e.tagName)return e=t.target.parentNode.parentNode.firstElementChild,void e.click();p(e,e.files)},m=s=>{s.stopPropagation();O(Yt(t,e,a,i,[{type:"URL",category:"URL",name:"",url:"",editing:!0}]),t)},f=s=>{s.stopPropagation(),O(Yt(t,e,a,i),t)},b=(t,e)=>{let a=new Date(e.createTime);return a=a.toLocaleDateString(void 0,{year:"numeric",month:"numeric",day:"numeric"}),M`
    <div class='list-item-title'>
      <button type='button' class='Light'  data-id="${t}" @click="${o}">${e.name}</button>
      ${e.loading?"":M`
      <span class='list-item-meta'><span>${e.createdBy}</span><span>${a}</span><span>category: ${e.category}</span></span>`}
    </div>`},y=(t,e)=>e.loading?M`${b(t,e)}${Zt()}`:e.editing?"URL"===e.type?M`
      <div class='flex content-item field-item'>
        <label for='url-name'>Name</label>
        <input type='text' id='url-name' data-prop-id='name' @change="${d}" data-id="${t}" value="${e.name}" aria-label='name'/>
      </div>
      <div class='flex content-item field-item'>
        <label for='url-url'>URL</label>
        <input type='text' id='url-url' data-prop-id='url' @change="${d}" data-id="${t}" value="${e.url}" aria-label='URL'/>
      </div>`:M`
      <input type='text' data-prop-id='displayName' class='flex-all' @change="${d}" 
      data-id="${t}" value="${e.displayName}" aria-label='name'/>
      ${((t,e)=>M`
    <select data-id="${t}" @change="${d}" class='flex-all' aria-label='category'>
    ${i.attachmentcategories.map((t=>M`
      <option ?selected=${t.ID===e}>${t.ID}</option>
    `))}
    </select>`)(t,e.category)}
      <span class='flex-all'>${e.name}</span>
      <span>${Math.round(e.size/1e3)}Kb</span>
      <button type='button' data-id="${t}" @click="${c}" class='pzhc pzbutton Simple' title='Delete'>${wt()}</button>`:M`${b(t,e)}
    <button type='button' data-id="${t}" @click="${l}" class='pzhc pzbutton Simple' title='Delete'>${wt()}</button>`,v=t=>{if(!a)return Zt();const e=[];if(void 0!==t){const a=Object.entries(t);for(const t of a){let a=t[1].extension;void 0===a&&(a=t[1].type),"URL"===t[1].type&&t[1].editing?e.push(M`<div class='flex layout-content-stacked content-items-maxwidth'>
              ${y(t[0],t[1])}
            </div>`):e.push(M`<div class='row-item'>
              <span class='doc-icon'>${M`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1632813,6.753125 C22.1632813,6.753125 22.1632813,6.753125 22.1632813,6.753125 C22.1632813,6.753125 15.8414062,0.43125 15.8414062,0.43125 C15.6023437,0.14375 15.21875,0 14.7875,0 C14.7875,0 14.7875,0 14.7875,0 C14.7875,0 3.48515625,0 3.48515625,0 C3.05390625,0 2.71875,0.14375 2.43125,0.43125 C2.14375,0.71875 2,1.05390625 2,1.48515625 C2,1.48515625 2,1.48515625 2,1.48515625 C2,1.48515625 2,23.0367188 2,23.0367188 C2,23.4679688 2.14375,23.803125 2.43125,24.090625 C2.71875,24.378125 3.05390625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 3.48515625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 21.109375,24.521875 21.109375,24.521875 C21.540625,24.521875 21.8757812,24.378125 22.1632813,24.090625 C22.4507812,23.803125 22.5945312,23.4679688 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,23.0367188 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,7.80703125 22.5945312,7.80703125 C22.5945312,7.37578125 22.4507812,7.040625 22.1632813,6.753125 Z M15.6976563,1.6765625 C15.6976563,1.6765625 20.8703125,6.84921875 20.8703125,6.84921875 C20.8703125,6.84921875 16.225,6.84921875 16.225,6.84921875 C15.8898438,6.84921875 15.7460938,6.70546875 15.7460938,6.3703125 C15.7460938,6.3703125 15.7460938,6.3703125 15.7460938,6.3703125 C15.7460938,6.3703125 15.6984375,1.6765625 15.6984375,1.6765625 L15.6976563,1.6765625 Z M21.6367188,7.8546875 C21.6367188,7.8546875 21.6367188,23.0367188 21.6367188,23.0367188 C21.6367188,23.371875 21.4453125,23.515625 21.1101563,23.515625 C21.1101563,23.515625 21.1101563,23.515625 21.1101563,23.515625 C21.1101563,23.515625 3.4859375,23.515625 3.4859375,23.515625 C3.15078125,23.515625 2.959375,23.371875 2.959375,23.0367188 C2.959375,23.0367188 2.959375,23.0367188 2.959375,23.0367188 C2.959375,23.0367188 2.959375,1.48515625 2.959375,1.48515625 C2.959375,1.15 3.15078125,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 3.4859375,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 14.740625,0.95859375 14.740625,0.95859375 C14.740625,0.95859375 14.740625,6.3703125 14.740625,6.3703125 C14.740625,6.8015625 14.884375,7.13671875 15.171875,7.42421875 C15.459375,7.71171875 15.7945313,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 16.2257813,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 21.6375,7.85546875 21.6375,7.85546875 L21.6367188,7.8546875 Z"/>
</svg>`}<span>${a.substring(0,5)}</span></span>
              ${y(t[0],t[1])}
            </div>`)}}return e&&e.length>0?e:M`<div class='empty'>no attachments found</div>`};let $="Attachments";return void 0!==s&&s.length>0&&($="URL"===s[0].type?"Attach a link":"Attach files"),M`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${$}</h2>
      <div class="flex layout-content-inline_middle margin-l-auto">
        <button type='button' data-action-id='close'
        class="pzhc pzbutton Simple" title="Close">${Ct()}</button>
      </div>
    </div>
    ${void 0!==s&&s.length>0?M`
      <div class='attach-files list-items'>
        <div class='upload-content'>${v(s)}</div>
        <div class="action-button-area">
          <button type="button" class="pzhc pzbutton" @click="${f}">Cancel</button>
          <button type="button" class="Strong pzhc pzbutton" @click="${u}">Upload</button>
        </div>
      </div>`:M`
      <form id="modalcontent" @dragenter="${h}" @dragover="${h}" @dragleave="${h}"  
      @drop="${h}" class='attach-files list-items'>
        <div class="file-upload">
          <input @change="${g}" type="file" multiple="">
          ${St()}<span> Drag and drop files, attach 
          <button type='button' aria-labelledby='click to attach a file' class='Light' @click="${g}">files</button> or add a 
          <button type='button' aria-labelledby='click to add a URL link' class='Light' @click="${m}">link</button></span>
        </div>
        ${v(e)}
      </form>
    `}
  `},Xt=(t,e,a,i)=>M`
  ${t.map(((t,s)=>{const n=`${e}-${s}`;if(t.layout){""!==t.layout.groupFormat.trim()&&"CENTER"!==t.layout.groupFormat||(t.layout.groupFormat="default");const e=t.layout.groupFormat.replace(/ /g,"_").toLowerCase(),s=`flex content layout-content-${e} content-${e}`;if(t.layout.view&&t.layout.view.groups)return M`
          <div class="${s}">${Xt(t.layout.view.groups,n,a,i)}</div>
        `;if(t.layout.groups){let e="";if("string"==typeof t.layout.title&&""!==t.layout.title&&(t.layout.titleFormat,1))switch(t.layout.titleFormat){case"h2":e=M`<h2>${t.layout.title}</h2>`;break;case"h3":e=M`<h3>${t.layout.title}</h3>`;break;case"h4":e=M`<h4>${t.layout.title}</h4>`;break;default:e=M`<h2>${t.layout.title}</h2>`}return M`
        ${e}<div class="${s}">${Xt(t.layout.groups,n,a,i)}</div>
        `}return t.layout.rows?t.layout.header?((t,e,a)=>M`
  ${jt(t.layout)}
  <table>
    <thead>
      <tr>
        ${Bt(t.layout.header.groups)}
      </tr>
    </thead>
    <tbody>
      ${Ht(t.layout.rows)}
    </tbody>
  </table>
  ${Wt(t.layout,a)}
`)(t,0,a):Gt(t,n,a):null}return t.field?t.field.control&&"pxAttachContent"===t.field.control.type?Jt("Upload file","Upload file","",i.displayAttachments):xt(t.field,n,a):t.view&&t.view.groups?"pyAttachFieldOptional"===t.view.viewID&&"Embed-Attach-File"===t.view.appliesTo?Jt("Upload file","Upload file","",i.displayAttachments):Xt(t.view.groups,n,a,i):null}))}
`,Gt=(t,e,a)=>M`
  ${jt(t.layout)}
  <div class="rdl">
    ${Kt(t.layout.rows,e,a)}
  </div>
  ${Wt(t.layout,a)}
`,Kt=(t,e,a)=>M`
  ${t.map(((t,i)=>{const s=`${e}-row${i}`;return t.groups?M`
        <div>
          ${Xt(t.groups,s,a)}
        </div>
      `:null}))}
`,Qt=(t,e,a,i)=>{if(null==i)return null;let s;const n=`${Math.random().toString(36).substr(2,9)}`,r=document.createElement("ul");r.setAttribute("id",`menu-overlay-${n}`),r.setAttribute("role","menu"),r.setAttribute("aria-labelledby",`menubutton-${n}`),r.setAttribute("tabindex","-1");const o=()=>{document.body.removeEventListener("click",c),document.body.removeEventListener("keydown",l),r&&(r.previousElementSibling&&(r.previousElementSibling.setAttribute("aria-expanded","false"),r.previousElementSibling.focus()),r.remove())},l=t=>{38===t.keyCode?(s=s.previousElementSibling,null===s&&(s=r.lastElementChild),s.focus()):40===t.keyCode?(s=s.nextElementSibling,null===s&&(s=r.firstElementChild),s.focus()):27===t.keyCode||9===t.keyCode?o():13===t.keyCode&&(i(t),o())},c=t=>{if(t){let e=t.target;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&e.nextElementSibling===r)return;e.parentNode===r&&i(t),o()}},d=t=>{if("keydown"===t.type&&40!==t.keyCode)return;if(t.preventDefault(),"blur"===t.type)return void c(t);const e=t.target;"BUTTON"!==e.tagName?(i(t),o()):null===e.nextElementSibling?(t.target.parentNode.appendChild(r),e.setAttribute("aria-expanded","true"),O(a(),r),s=e.nextElementSibling.firstElementChild,s.focus(),document.body.addEventListener("click",c),document.body.addEventListener("keydown",l)):o()};return M`
    <div class="button-menu">
    <button type='button' id="${`menubutton-${n}`}" aria-haspopup="true" aria-controls="${`menu-overlay-${n}`}" aria-expanded="false"
    @click="${d}" @keydown="${d}" @blur="${d}"
    class="pzhc pzbutton Simple action-menu" title="${e}" aria-label="${e}">${t}</button>
    </div>
  `},te=(t,e,a,i,s,n,r,o,l)=>{const c=M`${St()}<span class='count-badge'>${s}</span>`;if(void 0===e.caseID&&a.content)return M`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${a.content.pyLabel} (${a.content.pyID})</h2>
      ${""!==i?M`<span class='badge-bg-info centered'><span class='badge_text'>${i}</span></span>`:""}
      <div class="flex layout-content-inline_middle margin-l-auto">
        ${l?Jt("Attachments",c,"Simple",l):""}
        ${a.actions&&a.actions.length>0?M`
          ${Qt("Actions","Start a new action",n,r)}`:""}
      </div>
    </div>
    ${((t,e)=>t&&0!==t.length?M`
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
        ${t.map((t=>M`
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
    ${((t,e)=>t&&0!==t.length?M`
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
        ${t.map((t=>M`
        <tr>
          <td>${t.ID}</td>
          <td class="right-aligned">
            <button type='button' @click="${e}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">Open</button>
          </td>
        </tr>`))}
  </tbody >
  </table > `:null)(a.childCases,o)}
    <h3>Case information</h3>`;if(""===t||void 0===e.caseID)return"";const d=e.caseID.split(" ")[1];return M`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${e.name} (${d})</h2>
    ${""!==i?M`<span class='badge-bg-info centered'><span class='badge_text'>${i}</span></span>`:""}
    <div class="flex layout-content-inline_middle margin-l-auto">
      ${l?Jt("Attachments",c,"Simple",l):""}
      ${e.actions&&e.actions.length>0?M`
        ${Qt("Actions","Start a new action",n,r)}`:""}
    </div>
  </div>
 <h3>${t}</h3>`},ee=(t,e,a,i,s)=>M`
  <div class="flex layout-content-stacked">${Xt(t,e,!1,s)}</div>
  ${((t,e)=>M`
  <div class="action-button-area">
    ${null!==t?M`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    ${null!==e?M`<button type="button" class="pzhc pzbutton" @click="${e}">Save</button>`:""}
    <button type="button" data-submit="submit" class="Strong pzhc pzbutton">Submit</button>
  </div>
`)(a,i)}
`,ae=(t,e,a,i)=>M`
  <div class="flex layout-content-stacked">${Xt(t,e,!0,i)}</div>
  ${(t=>null===t?null:M`
  <div class="action-button-area">
  ${null!==t?M`<button type="button" class="pzhc pzbutton Strong" @click="${t}">Close</button>`:""}
  </div>`)(a)}
`,ie=(t,e,a,i,s)=>M`
  <div class="flex layout-content-stacked">${Xt(t,e,!1,s)}</div>
  ${((t,e)=>M`
  <div class="action-button-area">
    ${null!==t?M`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    <button type="button" data-submit="save" class="pzhc pzbutton Strong" @click="${e}">Submit</button>
  </div>
`)(a,i)}
`,se=(t,e,a,i)=>M`
  <div class="flex layout-content-stacked">${Xt(t,e,!1,i)}</div>
  ${(t=>M`
  <div class="action-button-area">
    ${null!==t?M`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    <button type="button" data-submit="create" class="Strong pzhc pzbutton">Create</button>
  </div>
`)(a)}
`,ne=(t,e)=>{const a=[],i=Object.entries(e.actions);for(const e of i)e[1].name!==t&&a.push(M`
          <li role="menuitem" tabindex="-1" data-value="${e[1].ID}">${e[1].name}</li>
        `);return M`
    ${a}
  `},re=t=>M`
${t.pxResults.map((t=>M`
    <option>
      ${t.pyUserName}
    </option>`))}`;function oe(t,e,a,i){a&&Object.defineProperty(t,e,{enumerable:a.enumerable,configurable:a.configurable,writable:a.writable,value:a.initializer?a.initializer.call(i):void 0})}function le(t,e,a,i,s){var n={};return Object.keys(i).forEach((function(t){n[t]=i[t]})),n.enumerable=!!n.enumerable,n.configurable=!!n.configurable,("value"in n||n.initializer)&&(n.writable=!0),n=a.slice().reverse().reduce((function(a,i){return i(t,e,a)||a}),n),s&&void 0!==n.initializer&&(n.value=n.initializer?n.initializer.call(s):void 0,n.initializer=void 0),void 0===n.initializer&&(Object.defineProperty(t,e,n),n=null),n}var ce,de,he,ue,pe,ge,me,fe,be,ye,ve,$e,Ce,we,Se,xe,ke,_e,De,Ae,Te,Ie,Ee,Ne,Pe,Re,ze,Oe,Le,Me,Ue,qe,Ve,Fe,je;let We=(ce=G({type:String}),de=G({type:String}),he=G({type:String}),ue=G({type:String}),pe=G({type:String}),ge=G({type:String}),me=G({type:String}),fe=G({type:String}),be=G({type:String}),ye=G({type:String}),ve=G({type:String}),$e=G({type:String}),Ce=G({type:String}),we=G({type:Object}),Se=G({type:String}),xe=G({type:String}),ke=G({type:String}),De=le((_e=class extends at{constructor(){super(),oe(this,"url",De,this),oe(this,"caseID",Ae,this),oe(this,"username",Te,this),oe(this,"password",Ie,this),oe(this,"title",Ee,this),oe(this,"bShowCreate",Ne,this),oe(this,"bShowCancel",Pe,this),oe(this,"bShowAttachments",Re,this),oe(this,"bShowSave",ze,this),oe(this,"authentication",Oe,this),oe(this,"token",Le,this),oe(this,"clientid",Me,this),oe(this,"clientsecret",Ue,this),oe(this,"initialContent",qe,this),oe(this,"action",Ve,this),oe(this,"casetype",Fe,this),oe(this,"portalName",je,this),this.cases=[],this.dataPages={},this.name="",this.etag="",this.casepyStatusWork="",this.casedata={},this.data={},this.numAttachments=0,this.attachmentcategories=[],this.assignmentID="",this.actionID="",this.content={},this.errorMsg="",this.validationMsg="",this.bShowConfirm=!1,this.bShowNew=!1}}).prototype,"url",[ce],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Ae=le(_e.prototype,"caseID",[de],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Te=le(_e.prototype,"username",[he],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Ie=le(_e.prototype,"password",[ue],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Ee=le(_e.prototype,"title",[pe],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"My worklist"}}),Ne=le(_e.prototype,"bShowCreate",[ge],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"true"}}),Pe=le(_e.prototype,"bShowCancel",[me],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"true"}}),Re=le(_e.prototype,"bShowAttachments",[fe],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"false"}}),ze=le(_e.prototype,"bShowSave",[be],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"true"}}),Oe=le(_e.prototype,"authentication",[ye],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Le=le(_e.prototype,"token",[ve],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Me=le(_e.prototype,"clientid",[$e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Ue=le(_e.prototype,"clientsecret",[Ce],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),qe=le(_e.prototype,"initialContent",[we],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Ve=le(_e.prototype,"action",[Se],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Fe=le(_e.prototype,"casetype",[xe],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),je=le(_e.prototype,"portalName",[ke],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),_e);class Be extends We{clearLoadingIndicator(){const t=this.getRenderRoot().querySelector("#case-data");t&&null!==t.querySelector(".loading")&&O(null,t)}sendExternalEvent(t){this.dispatchEvent(new CustomEvent("message",{detail:{type:t}}))}genErrorMessage(t){this.clearLoadingIndicator(),t.message&&-1!==t.message.indexOf("JSON.parse")?console.error("Error:",t):t.message&&-1!==t.message.indexOf("Unexpected token")?(this.errorMsg="Error 404: Resource not found",this.requestUpdate(),console.error(this.errorMsg)):(t.status?""!==t.statusText?this.errorMsg=`Error ${t.status}: ${t.statusText}`:401===t.status?this.errorMsg="Error 401: Authentication error":500===t.status?this.errorMsg="Error 500: Internal server error":this.errorMsg=`Error ${t.status}`:t.name&&t.message?this.errorMsg=`Error ${t.name}: ${t.message}`:this.errorMsg="string"==typeof t?t:"Critical error",this.requestUpdate(),console.error("Error:",t))}fetchData(t,e){const{id:a,actionid:i,target:s,element:n}=e||{};let r="";""!==this.authentication&&"basic"!==this.authentication||(r=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(r=`Bearer ${this.token}`);const o={method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:r},mode:"cors"};let l=`${this.url}/api/v1/`;switch(t){case"worklist":l+="assignments";break;case"casetypes":l+="casetypes";break;case"newwork":l+=`casetypes/${a}`;break;case"assignment":l+=`assignments/${a}`;break;case"case":l+=`cases/${a}`;break;case"data":l+=`data/${a}`;break;case"page":l+=`cases/${a}/pages/${i}`;break;case"view":l+=`cases/${a}/views/${i}`;break;case"assignmentaction":l+=`assignments/${a}/actions/${i}`;break;case"caseaction":l+=`cases/${a}/actions/${i}`;break;case"attachment":l+=`attachments/${a}`;break;case"attachments":l+=`cases/${a}/attachments`;break;case"attachmentcategories":l+=`cases/${a}/attachment_categories`}fetch(l,o).then((e=>{if("case"===t)this.etag=e.headers.get("etag"),s&&(s.disabled=!1,s.textContent="Save");else if("attachment"===t)return e.text();return e.ok||404===e.status?e.json():Promise.reject(e)})).then((e=>{try{if(e.errors&&e.errors.length>0)return this.errorMsg=`Error ${e.errors[0].ID}: ${e.errors[0].message}`,this.clearLoadingIndicator(),this.requestUpdate(),void console.error("Error:",e);const r=this.getRenderRoot().querySelector("#case-data");switch(t){case"casetypes":this.casetypes={};for(const t in e.caseTypes){const a=e.caseTypes[t];"workList"===this.action&&""!==this.casetype&&this.casetype!==a.ID||(this.casetypes[a.ID]={canCreate:a.CanCreate,name:a.name,requiresFieldsToCreate:!1})}"createNewWork"===this.action&&this.createCase();break;case"worklist":this.cases=e.assignments,this.requestUpdate();break;case"assignment":this.data=e,this.caseID=e.caseID,this.fetchData("case",{id:this.caseID}),e.actions.length>0&&e.actions[0].ID?(this.actionID=e.actions[0].ID,this.fetchData("assignmentaction",{id:a,actionid:this.actionID})):this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"});break;case"case":this.casedata=e,this.numAttachments=0,""===this.name&&(this.name=this.casedata.content.pyLabel),this.casepyStatusWork=this.casedata.content.pyStatusWork,this.requestUpdate(),""===this.assignmentID&&this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"}),"true"===this.bShowAttachments&&this.fetchData("attachments",{id:this.caseID});break;case"data":if(this.dataPages[a]=e,!n.nextElementSibling){console.error("Error: case data are not present when retrieving the data");break}O(re(e),n.nextElementSibling);break;case"caseaction":if(!r){console.error("Error: case data are not present when retrieving the assignmentaction");break}O(ie(e.view.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,this.actionAreaSave,this),r),r.focus();break;case"assignmentaction":if(this.name=e.name,!r){console.error("Error: case data are not present when retrieving the assignmentaction");break}this.requestUpdate(),O(ee(e.view.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),r),r.focus();break;case"page":if(!r){console.error("Error: case data are not present when retrieving the page");break}O(ee(e.groups,"Obj",this),r),r.focus();break;case"view":if(!r){console.error("Error: case data are not present when retrieving the page");break}this.content={},"pyCaseInformation"===i?(this.name=e.name,O(ae(e.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,this),r)):(this.name=e.name,O(ee(e.groups,"Obj",this),r)),r.focus();break;case"newwork":if(this.content={},!r){console.error("Error: case data are not present when retrieving the newwork");break}O(se(e.creation_page.groups[0].layout.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null),r),r.focus();const t=this.getRenderRoot().querySelector("#case-data");t&&((t,e)=>{for(const a in t.elements){const i=t.elements[a];if("INPUT"===i.tagName||"TEXTAREA"===i.tagName||"SELECT"===i.tagName){const t=i.getAttribute("data-ref");if(null!==t&&"pyID"!==t&&e[t]){const a=e[t];"object"==typeof a?("radio"===i.type?i.value===a.value&&(i.checked=!0):"checkbox"===i.type?!0!==a.value&&"true"!==a.value||(i.checked=!0):a.value&&(i.value=a.value),a.disabled&&(i.disabled=!0)):"string"==typeof a?"radio"===i.type?i.value===a&&(i.checked=!0):"checkbox"===i.type?"true"===a&&(i.checked=!0):i.value=a:"boolean"==typeof a&&"checkbox"===i.type&&!0===a&&(i.checked=!0)}}}})(t,this.initialContent);break;case"attachments":let o=e.attachments;o||(o=[]),this.numAttachments=o.length,s&&O(Yt(s,o,this.caseID,this),s),this.requestUpdate();break;case"attachmentcategories":this.attachmentcategories=e.attachment_categories;break;case"attachment":s(e)}}catch(t){this.errorMsg=`Error: ${t}`,this.requestUpdate(),console.error("Error:",t)}})).catch((t=>{this.genErrorMessage(t)}))}sendData(t,e){const{id:a,actionid:i,target:s,refreshFor:n}=e;let r="";""!==this.authentication&&"basic"!==this.authentication||(r=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(r=`Bearer ${this.token}`);const o={"Content-Type":"application/json;charset=UTF-8",Authorization:r},l={method:"POST",headers:o,mode:"cors"};let c=`${this.url}/api/v1/`;switch(this.validationMsg="",t){case"authenticate":"oauth2password"===this.authentication?l.body=`grant_type=password&client_id=${this.clientid}&client_secret=${this.clientsecret}&username=${this.username}&password=${this.password}`:"oauth2clientcredentials"===this.authentication&&(l.body=`grant_type=client_credentials&client_id=${this.clientid}&client_secret=${this.clientsecret}`),l.headers["Content-Type"]="application/x-www-form-urlencoded",c=`${this.url}/PRRestService/oauth2/v1/token`;break;case"newwork":c+="cases",l.body=JSON.stringify({content:this.content,caseTypeID:a});break;case"submitassignment":l.body=JSON.stringify({content:this.content}),c+=`assignments/${a}?actionID=${i}`;break;case"savecase":c+=`cases/${a}`,i&&""!==i&&(c+=`?actionID=${i}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:this.content});break;case"refreshnew":c+=`casetypes/${a}/refresh`,n&&""!==n&&(c+=`?refreshFor=${n}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:this.content});break;case"refreshassignment":c+=`assignments/${a}/actions/${i}/refresh`,n&&""!==n&&(c+=`?refreshFor=${n}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:this.content});break;case"refreshcase":c+=`cases/${a}/actions/${i}/refresh`,n&&""!==n&&(c+=`?refreshFor=${n}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:this.content});break;case"uploadattachment":c+="attachments/upload",delete o["Content-Type"];const t=new FormData;t.append("File",i,i.name),l.body=t;break;case"attachments":c+=`cases/${a}/attachments`,l.body=JSON.stringify({attachments:i});break;case"deleteattachment":c+=`attachments/${a}`,l.method="DELETE"}fetch(c,l).then((e=>"deleteattachment"===t||"attachments"===t?e.text():200===e.status||201===e.status||e.status>=400&&e.status<500?e.json():e.ok?Promise.resolve("ok"):Promise.reject(e))).then((e=>{if(e.errors&&e.errors.length>0){if(e.errors[0].ValidationMessages){((t,e)=>{for(const a in t.elements){const i=t.elements[a];if("INPUT"===i.tagName||"TEXTAREA"===i.tagName||"SELECT"===i.tagName){const t=`.${i.getAttribute("data-ref")}`;if(null!==t&&"pyID"!==t)for(const a in e){if(e[a].Path===t){i.setCustomValidity(e[a].ValidationMessage),i.classList.add("error-field"),i.reportValidity();break}if(e[a].erroneousInputOutputFieldInPage===t){i.setCustomValidity(e[a].localizedValue),i.classList.add("error-field"),i.reportValidity();break}}}}})(this.getRenderRoot().querySelector("#case-data"),e.errors[0].ValidationMessages),this.validationMsg=(t=>t.errorDetails?M`
    <ul>
      ${t.errorDetails.map((t=>M`<li>${t.localizedValue}</li>`))}
    </ul>`:M`
  <ul>
    ${t.errors[0].ValidationMessages.map((t=>t.Path?M`
          <li>${t.Path.substring(1)}: ${t.ValidationMessage}</li>
        `:0===t.ValidationMessage.indexOf("Validation failed")?null:M`
    <li>${t.ValidationMessage}</li>
  `))}
  </ul>`)(e)}else this.errorMsg=`Error ${e.errors[0].ID}: ${e.errors[0].message}`;this.clearLoadingIndicator(),s&&(s.disabled=!1,s.textContent="Save")}else if(e.access_token)this.token=e.access_token;else{const a=this.getRenderRoot().querySelector("#case-data");if("refreshcase"===t||"refreshassignment"===t||"refreshnew"===t){if(!a)return void console.error("Error: case data are not present");O("refreshnew"===t?se(e.creation_page.groups[0].layout.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,this):ee(e.view.groups,"Obj",this.actionAreaCancel,"true"===this.bShowSave?this.actionAreaSave:null,this),a)}else if("savecase"===t)this.sendExternalEvent(t),this.fetchData("case",{id:this.caseID,target:s}),""!==this.assignmentID&&this.fetchData("assignment",{id:this.assignmentID});else if("deleteattachment"===t||"attachments"===t)this.fetchData("attachments",{id:this.caseID,target:s});else if("uploadattachment"===t){let t=i.name.lastIndexOf(".");-1===t&&(t=i.name.length);const a=i.name.substring(t+1),n=[{type:"File",category:i.category,fileType:a,name:i.displayName,ID:e.ID}];return void this.sendData("attachments",{id:this.caseID,actionid:n,target:s})}e.ID&&(this.caseID=e.ID),e.nextAssignmentID?(a&&(O(Zt(),a),this.requestUpdate()),this.bShowNew=!1,this.assignmentID=e.nextAssignmentID,this.sendExternalEvent(t),this.fetchData("assignment",{id:this.assignmentID})):e.nextPageID&&(a&&(O(Zt(),a),this.requestUpdate()),this.sendExternalEvent(t),"Confirm"===e.nextPageID||"Review"===e.nextPageID?(this.bShowConfirm=!0,this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"}),this.fetchData("case",{id:this.caseID})):this.fetchData("page",{id:this.caseID,actionid:e.nextPageID}))}this.requestUpdate()})).catch((t=>{this.genErrorMessage(t)}))}}class He extends Be{constructor(...t){super(...t),this.resetError=t=>{this.errorMsg="",this.validationMsg="",this.actionAreaCancel(t)},this.reloadWorkList=t=>{this.cases=[],this.requestUpdate(),this.actionAreaCancel(t)},this.actionAreaCancel=t=>{t&&t.preventDefault(),this.bShowConfirm=!1,this.bShowNew=!1,this.caseID="",this.data={},this.content={},this.casedata={},this.attachmentcategories=[],this.casepyStatusWork="",this.assignmentID="",this.actionID="",this.errorMsg="",this.numAttachments=0,this.validationMsg="",this.name="","workList"===this.action?this.fetchData("worklist"):this.dispatchEvent(new CustomEvent("message",{detail:{type:"cancel"}}))},this.actionAreaSave=t=>{t&&t.preventDefault(),null===t.target.getAttribute("data-submit")&&(t.target.textContent="Saving...",t.target.disabled=!0);const e=this.getRenderRoot().querySelector("#case-data");e&&(this.content=ft(this.casedata),mt(e,this.content),""!==this.assignmentID?this.sendData("savecase",{id:this.caseID,actionid:"",target:t.target}):this.sendData("savecase",{id:this.caseID,actionid:this.actionID,target:t.target}))},this.actionRefresh=()=>{const t=this.getRenderRoot().querySelector("#case-data");t&&(this.content=ft(this.casedata),this.validationMsg="",mt(t,this.content),this.requestUpdate(),""!==this.assignmentID?this.fetchData("assignmentaction",{id:this.assignmentID,actionid:this.actionID}):this.fetchData("caseaction",{id:this.caseID,actionid:this.actionID}))},this.displayCasesTypes=()=>(t=>{const e=[],a=Object.entries(t);for(const t of a)"true"===t[1].canCreate&&e.push(M`
          <li role="menuitem" tabindex="-1" data-value="${t[0]}">${t[1].name}</li>
        `);return M`
    ${e}
  `})(this.casetypes),this.displayActions=()=>this.data.actions?ne(this.name,this.data):this.casedata.actions?ne(this.name,this.casedata):null,this.displayAttachments=t=>{this.fetchData("attachmentcategories",{id:this.caseID}),this.fetchData("attachments",{id:this.caseID,target:t})},this.submitForm=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");return this.content=ft(this.casedata),mt(a,this.content),a.checkValidity()?"create"!==e?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID}):this.sendData("newwork",{id:this.casetype}):a.reportValidity(),t.preventDefault(),!1},this.createCase=t=>{if(this.name="New Case",this.bShowNew=!0,t){let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&(this.casetype=e.getAttribute("data-value"),this.name=`New ${e.textContent} `)}this.content=this.initialContent,this.caseID="",this.data={},this.casedata={},this.casetypes[this.casetype]?"true"===this.casetypes[this.casetype].requiresFieldsToCreate?this.fetchData("newwork",{id:this.casetype}):this.sendData("newwork",{id:this.casetype}):(this.errorMsg=`Case '${this.casetype}' is not defined`,console.error(`Case '${this.casetype}' is not defined`)),this.requestUpdate()},this.runAction=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&null!==e.getAttribute("data-value")&&(this.actionID=e.getAttribute("data-value"),this.actionRefresh());const a=this.getRenderRoot().querySelector("#case-data");null!=a&&O(Zt(),a)},this.openCase=t=>{t.preventDefault(),this.caseID=t.target.getAttribute("data-id"),this.name="",this.data={},this.casedata={},0===this.caseID.indexOf("ASSIGN-WORKLIST")?(this.assignmentID=this.caseID,this.caseID=""):this.assignmentID="";const e=this.getRenderRoot().querySelector("#case-data");null!=e&&O(Zt(),e),this.requestUpdate()},this.getData=(t,e)=>{this.dataPages[t]?O(re(this.dataPages[t]),e.nextElementSibling):this.fetchData("data",{id:t,element:e})},this.refreshAssignment=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");let i=t;if(a){if(this.content=ft(this.casedata),mt(a,this.content),i){"svg"===i.tagName&&(i=i.parentNode);const t=i.getAttribute("data-action-click"),e=i.getAttribute("data-ref");null!==e&&null!=t&&("addRow"===t?((t,e,a)=>{let i=dt(t,e);if(null===i&&(i=[],ct(t,e,i)),Array.isArray(i))if(a&&"string"==typeof a){const t={},e=a.split(",");for(const a in e)t[e[a]]="";i.push(t)}else{if(0===i.length)return;const t={...i[0]};ht(t),i.push(t)}})(this.content,e,i.getAttribute("data-newrow")):"deleteRow"===t&&((t,e)=>{let a,i=e;-1!==e.indexOf(").pyTemplate")&&(a=i.substring(e.lastIndexOf("(")+1,e.lastIndexOf(")")),i=i.substring(0,e.lastIndexOf("(")));const s=dt(t,i);if(Array.isArray(s))if(1!==s.length)if(a){if(s.length<a)return;s.splice(a-1,1)}else s.length-=1;else for(const t in s[0])"pxObjClass"!==t&&(s[0][t]="")})(this.content,e))}!0===this.bShowNew?this.sendData("refreshnew",{id:this.casetype,refreshFor:e}):this.sendData("refreshassignment",{id:this.assignmentID,actionid:this.actionID,refreshFor:e})}},this.clickHandler=t=>{let e=t.target;"svg"===e.tagName&&(e=e.parentNode);const a=e.getAttribute("data-action-click");e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e),pt(e,"click")?(this.refreshAssignment(e,gt(e,"click")),t.preventDefault()):"BUTTON"===e.tagName&&(t.preventDefault(),null!==e.getAttribute("data-submit")&&"save"!==e.getAttribute("data-submit")?this.submitForm(t,e.getAttribute("data-submit")):("addRow"===a||"deleteRow"===a)&&this.refreshAssignment(e))},this.changeHandler=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e.setCustomValidity(""),e.classList.remove("error-field"),pt(e,"change")&&this.refreshAssignment(e,gt(e,"change"))},this.keyupHandler=t=>{const e=t.target;"TEXTAREA"===e.tagName&&(e.style.cssText="height:auto; padding:0;",e.style.cssText=`height:${e.scrollHeight}px`)},this.focusHandler=t=>{const e=t.target;e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e)}}displayContent(){return console.log("displayContent v1"),""!==this.errorMsg?(t=this.errorMsg,e="true"===this.bShowCancel?this.resetError:null,M`
  <div class="error">${t}
  ${null!=e?M`
    <button type='button' title="Click to close the banner" class="pzhc pzbutton Light" @click="${e}">
    ${Ct()}</button>`:""}
  </div>`):"oauth2password"!==this.authentication&&"oauth2clientcredentials"!==this.authentication||""!==this.token?(this.casetypes||"createNewWork"!==this.action&&"workList"!==this.action?""===this.name&&("openAssignment"===this.action&&""===this.assignmentID&&(this.assignmentID=this.caseID),""!==this.assignmentID?this.fetchData("assignment",{id:this.assignmentID}):""!==this.caseID&&this.fetchData("case",{id:this.caseID})):(this.fetchData("casetypes"),"createNewWork"===this.action?(this.bShowNew=!0,this.casetypes[this.casetype]&&this.fetchData("newwork",{id:this.casetype})):"workList"===this.action&&(this.bShowCancel="true",this.fetchData("worklist"))),this.bShowConfirm?(a=this.casedata.content.pyLabel,i=this.casedata.content.pyID,s=this.casepyStatusWork,n="true"===this.bShowAttachments?this.displayAttachments:null,M`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${a} (${i})</h2>
    <span class='badge-bg-info centered'><span class='badge_text'>${s}</span></span>
    ${n?M`<div class="flex layout-content-inline_middle margin-l-auto">
        ${Jt("Attachments",St(),"Simple",n)}
      </div>`:""}
  </div>
  <div class="flex layout-content-inline_middle success">
    Thank you. Your information has been submitted.
  </div>
  <h3>Case information</h3>
  <div id="case-data">${Zt()}</div>`):""!==this.caseID||""!==this.assignmentID||this.bShowNew?M`
        ${te(this.name,this.data,this.casedata,this.casepyStatusWork,this.numAttachments,this.displayActions,this.runAction,this.openCase,"true"===this.bShowAttachments?this.displayAttachments:null)}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
        <form id="case-data">${Zt()}</form>
      `:"workList"===this.action?(r=this.title,o=this.cases,l=this.displayCasesTypes,c=this.reloadWorkList,d="true"===this.bShowCreate?this.createCase:null,h=this.openCase,M`
  <div class="flex layout-content-inline_middle main-header">
    <h2>
      ${r}
      ${o.length>0?M`
            (${o.length})
          `:""}
    </h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      <button type='button' class="pzhc pzbutton Simple" arial-label='Click to refresh the worklist'
      title='Click to refresh the worklist' @click="${c}">Refresh</button>
      ${Qt("Create","Create a new case",l,d)}
    </div>
  </div>
  ${o.length>0?M`
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
            ${o.map((t=>M`
                <tr>
                  <td>${t.name}</td>
                  <td>${t.caseID}</td>
                  <td class="right-aligned">${t.urgency}</td>
                  <td class="right-aligned">
                    <button @click="${h}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">Open</button>
                  </td>
                </tr>
              `))}
          </tbody>
        </table>
      `:M`
        <div class="margin-t-2x">no assignments</div>
      `}
`):null):(this.sendData("authenticate",{}),null);var t,e,a,i,s,n,r,o,l,c,d,h}firstUpdated(){console.log("Initialization of the Web Component v1");const t=this.getRenderRoot();t&&(t.addEventListener("click",this.clickHandler),t.addEventListener("focusin",this.focusHandler),t.addEventListener("change",this.changeHandler),t.addEventListener("keyup",this.keyupHandler))}}var Ze;var Je;return Je="pega-mashup-light",(t=>"function"==typeof t?((t,e)=>(window.customElements.define(t,e),e))(Je,t):((t,e)=>{const{kind:a,elements:i}=e;return{kind:a,elements:i,finisher(e){window.customElements.define(t,e)}}})(Je,t))(Ze=class extends He{createRenderRoot(){return this}getRenderRoot(){return this}render(){return M`
      ${this.displayContent()}
    `}})||Ze}();
