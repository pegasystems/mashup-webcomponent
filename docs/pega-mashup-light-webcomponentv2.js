var PegaMashupLightWebComponentv2=function(){"use strict";
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
     */const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},i=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${i}--\x3e`,a=new RegExp(`${i}|${s}`),n="$lit$";class r{constructor(t,e){this.parts=[],this.element=e;const s=[],r=[],l=document.createTreeWalker(e.content,133,null,!1);let h=0,u=-1,p=0;const{strings:g,values:{length:m}}=t;for(;p<m;){const t=l.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let s=0;for(let t=0;t<i;t++)o(e[t].name,n)&&s++;for(;s-- >0;){const e=g[p],i=d.exec(e)[2],s=i.toLowerCase()+n,r=t.getAttribute(s);t.removeAttribute(s);const o=r.split(a);this.parts.push({type:"attribute",index:u,name:i,strings:o}),p+=o.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),l.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const i=t.parentNode,r=e.split(a),l=r.length-1;for(let e=0;e<l;e++){let s,a=r[e];if(""===a)s=c();else{const t=d.exec(a);null!==t&&o(t[2],n)&&(a=a.slice(0,t.index)+t[1]+t[2].slice(0,-n.length)+t[3]),s=document.createTextNode(a)}i.insertBefore(s,t),this.parts.push({type:"node",index:++u})}""===r[l]?(i.insertBefore(c(),t),s.push(t)):t.data=r[l],p+=l}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&u!==h||(u++,e.insertBefore(c(),t)),h=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(s.push(t),u--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),p++}}else l.currentNode=r.pop()}for(const t of s)t.parentNode.removeChild(t)}}const o=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},l=t=>-1!==t.index,c=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(t,e){const{element:{content:i},parts:s}=t,a=document.createTreeWalker(i,133,null,!1);let n=p(s),r=s[n],o=-1,l=0;const c=[];let d=null;for(;a.nextNode();){o++;const t=a.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==r&&r.index===o;)r.index=null!==d?-1:r.index-l,n=p(s,n),r=s[n]}c.forEach((t=>t.parentNode.removeChild(t)))}const u=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},p=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(l(e))return i}return-1};
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
class y{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],s=this.template.parts,a=document.createTreeWalker(e,133,null,!1);let n,r=0,o=0,c=a.nextNode();for(;r<s.length;)if(n=s[r],l(n)){for(;o<n.index;)o++,"TEMPLATE"===c.nodeName&&(i.push(c),a.currentNode=c.content),null===(c=a.nextNode())&&(a.currentNode=i.pop(),c=a.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,n.name,n.strings,this.options));r++}else this.__parts.push(void 0),r++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
     */const v=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),C=` ${i} `;class w{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",a=!1;for(let r=0;r<t;r++){const t=this.strings[r],o=t.lastIndexOf("\x3c!--");a=(o>-1||a)&&-1===t.indexOf("--\x3e",o+1);const l=d.exec(t);e+=null===l?t+(a?C:s):t.substr(0,l.index)+l[1]+l[2]+n+l[3]+i}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==v&&(e=v.createHTML(e)),t.innerHTML=e,t}}
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
     */const $=t=>null===t||!("object"==typeof t||"function"==typeof t),S=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class _{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new x(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!S(t))return t}let s="";for(let a=0;a<e;a++){s+=t[a];const e=i[a];if(void 0!==e){const t=e.value;if($(t)||!S(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class x{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===f||$(t)&&t===this.value||(this.value=t,m(t)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const t=this.value;this.value=f,t(this)}this.value!==f&&this.committer.commit()}}class D{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=c()),t.__insert(this.endNode=c())}insertAfterPart(t){t.__insert(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}const t=this.__pendingValue;t!==f&&($(t)?t!==this.value&&this.__commitText(t):t instanceof w?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):S(t)?this.__commitIterable(t):t===b?(this.value=b,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const i=new y(e,t.processor,this.options),s=i._clone();i.update(t.values),this.__commitNode(s),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const a of t)i=e[s],void 0===i&&(i=new D(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(a),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class k{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=f}}class A extends _{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends x{}let I=!1;(()=>{try{const t={get capture(){return I=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class N{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=E(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=f}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const E=t=>t&&(I?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
     */;function P(t){let e=R.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},R.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const a=t.strings.join(i);return s=e.keyString.get(a),void 0===s&&(s=new r(t,t.getTemplateElement()),e.keyString.set(a,s)),e.stringsArray.set(t.strings,s),s}const R=new Map,L=new WeakMap,z=(t,i,s)=>{let a=L.get(i);void 0===a&&(e(i,i.firstChild),L.set(i,a=new D(Object.assign({templateFactory:P},s))),a.appendInto(i)),a.setValue(t),a.commit()};
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
class{handleAttributeExpressions(t,e,i,s){const a=e[0];if("."===a){return new A(t,e.slice(1),i).parts}if("@"===a)return[new N(t,e.slice(1),s.eventContext)];if("?"===a)return[new k(t,e.slice(1),i)];return new _(t,e,i).parts}handleTextExpression(t){return new D(t)}};
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
     */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.0");const U=(t,...e)=>new w(t,e,"html",O)
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
     */,M=(t,e)=>`${t}--${e}`;let q=!0;void 0===window.ShadyCSS?q=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),q=!1);const V=t=>e=>{const s=M(e.type,t);let a=R.get(s);void 0===a&&(a={stringsArray:new WeakMap,keyString:new Map},R.set(s,a));let n=a.stringsArray.get(e.strings);if(void 0!==n)return n;const o=e.strings.join(i);if(n=a.keyString.get(o),void 0===n){const i=e.getTemplateElement();q&&window.ShadyCSS.prepareTemplateDom(i,t),n=new r(e,i),a.keyString.set(o,n)}return a.stringsArray.set(e.strings,n),n},j=["html","svg"],F=new Set,W=(t,e,i)=>{F.add(t);const s=i?i.element:document.createElement("template"),a=e.querySelectorAll("style"),{length:n}=a;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(s,t);const r=document.createElement("style");for(let t=0;t<n;t++){const e=a[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{j.forEach((e=>{const i=R.get(M(e,t));void 0!==i&&i.keyString.forEach((t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{i.add(t)})),h(t,i)}))}))})(t);const o=s.content;i?function(t,e,i=null){const{element:{content:s},parts:a}=t;if(null==i)return void s.appendChild(e);const n=document.createTreeWalker(s,133,null,!1);let r=p(a),o=0,l=-1;for(;n.nextNode();)for(l++,n.currentNode===i&&(o=u(e),i.parentNode.insertBefore(e,i));-1!==r&&a[r].index===l;){if(o>0){for(;-1!==r;)a[r].index+=o,r=p(a,r);return}r=p(a,r)}}(i,r,o.firstChild):o.insertBefore(r,o.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const l=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){o.insertBefore(r,o.firstChild);const t=new Set;t.add(r),h(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const H={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},B=(t,e)=>e!==t&&(e==e||t==t),Z={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:B},J="finalized";class K extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,i)=>{const s=this._attributeNameForProperty(i,e);void 0!==s&&(this._attributeToPropertyMap.set(s,i),t.push(s))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=Z){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const a=this[t];this[e]=s,this.requestUpdateInternal(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||Z}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(J)||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=B){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,s=e.converter||H,a="function"==typeof s?s:s.fromAttribute;return a?a(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,s=e.converter;return(s&&s.toAttribute||H.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=Z){const s=this.constructor,a=s._attributeNameForProperty(t,i);if(void 0!==a){const t=s._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(a):this.setAttribute(a,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(t);if(void 0!==s){const t=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let s=!0;if(void 0!==t){const a=this.constructor;i=i||a.getPropertyOptions(t),a._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}K.finalized=!0;
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
const Y=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function G(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):Y(t,e)}
/**
    @license
    Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */const X=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class tt{constructor(t,e){if(e!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(X?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.0");const et={};class it extends K{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight(((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t)),i),i=e(t,new Set),s=[];i.forEach((t=>s.unshift(t))),this._styles=s}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!X){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new tt(String(e),Q)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?X?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==et&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return et}}it.finalized=!0,it.render=(t,i,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const a=s.scopeName,n=L.has(i),r=q&&11===i.nodeType&&!!i.host,o=r&&!F.has(a),l=o?document.createDocumentFragment():i;if(z(t,l,Object.assign({templateFactory:V(a)},s)),o){const t=L.get(l);L.delete(l);const s=t.value instanceof y?t.value.template:void 0;W(a,l,s),e(i,i.firstChild),i.appendChild(l),L.set(i,t)}!n&&r&&window.ShadyCSS.styleElement(i.host)},it.shadowRootOptions={mode:"open"};
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
const st=new WeakMap,at=(nt=t=>e=>{const i=st.get(e);if(void 0===t&&e instanceof x){if(void 0!==i||!st.has(e)){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else t!==i&&e.setValue(t);st.set(e,t)},(...t)=>{const e=nt(...t);return g.set(e,!0),e});var nt;const rt=t=>`0${t}`.slice(-2),ot=t=>{if(t.endsWith(" GMT")&&23===t.length)return new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T${t.substring(9,11)}:${t.substring(11,13)}:${t.substring(13,19)}Z`);if(8===t.length){let e=new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T00:00:00.000Z`);return e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),e}if(10===t.length){let e=new Date(`${t.substring(6,10)}-${t.substring(0,2)}-${t.substring(3,5)}T00:00:00.000Z`);return e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),e}return null},lt=t=>t.replace(/&amp;|&lt;|&gt;|&#39;|&#40;|&#41;|&quot;/g,(t=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&#40;":"(","&#41;":")","&quot;":'"'}[t]||t))),ct=(t,e,i)=>{if("string"!=typeof e)return;const s=e.split(".");let a=t;for(const t in s){let e=s[t];const n=e.indexOf("(");if(-1===n)t<s.length-1?void 0===a[e]&&(a[e]={}):a[e]=i,a=a[e];else{const t=e.substring(n+1,e.length-1);e=e.substring(0,n),void 0===a[e]&&(a[e]=[]);for(let i=a[e].length;i<t;i++)a[e].push({});a=a[e][t-1]}}},dt=(t,e)=>{if("string"!=typeof e)return null;let i=t;const s=e.split(".");for(const t in s){const e=s[t],a=e.indexOf("(");if(-1===a){if(!i[e])return null;i=i[e]}else{const t=e.substring(a+1,e.length-1),s=i[e.substring(0,a)];if(!(s&&Array.isArray(s)&&s.length>=t))return null;i=s[t-1]}}return i},ht=t=>{for(const e in t)"object"==typeof t[e]?ht(t[e]):"string"==typeof t[e]&&(t[e]="")},ut=(t,e)=>{const i=t.getAttribute(`data-action-${e}`);return!(!i||"postValue"!==i&&0!==i.indexOf("refresh"))},pt=(t,e)=>{const i=t.getAttribute(`data-action-${e}`);return i&&0===i.indexOf("refresh")?i.replace("refresh-",""):""},gt=(t,e)=>{for(const i in t.elements){const s=t.elements[i];if("INPUT"===s.tagName||"TEXTAREA"===s.tagName||"SELECT"===s.tagName){const t=s.getAttribute("data-ref");if(null!==t&&"pyID"!==t)if("INPUT"===s.tagName){const i=s.getAttribute("type");if("checkbox"===i)ct(e,t,s.checked);else if("radio"===i)s.checked&&ct(e,t,s.value);else if("date"===i){let i;s.valueAsDate&&(i=new Date(s.valueAsDate)),i&&i instanceof Date&&i.getTime()==i.getTime()||(i=new Date(s.value)),i&&i instanceof Date&&i.getTime()==i.getTime()?(i=new Date(i.getTime()+6e4*i.getTimezoneOffset()),ct(e,t,`${rt(i.getMonth()+1)}/${rt(i.getDate())}/${i.getFullYear()}`)):ct(e,t,s.value)}else ct(e,t,s.value)}else ct(e,t,s.value)}}},mt=(t,e,i,s)=>void 0===e?U`
      ${s}
    `:U`
    <div class="flex content-item field-item ${i}">
      ${((t,e,i)=>{if(void 0===e)return null;const s=t.required?"icon-required":"";return"field-checkbox"===i?U`
    ${""!==t.label?U`<div class="field-caption dataLabelForWrite ${s}" >${lt(t.label?t.label:t.caption).replace("@L ","")}
    </div>`:null}
  `:U`
    ${""!==t.label?U`<label class="field-caption dataLabelForWrite ${s}" 
    for="${at(e)}">${lt(t.label?t.label:t.caption).replace("@L ","")}
    </label>`:null}
  `})(t,e,i)}${s}
    </div>
  `,ft=(t,e,i)=>{let s=t.value;if("Date"===e)if(s=ot(t.value),s){const t={year:"numeric",month:"short",day:"numeric"};s=new Intl.DateTimeFormat([],t).format(s)}else s=t.value;else if("DateTime"===e)if(s=ot(t.value),s){const t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};s=new Intl.DateTimeFormat([],t).format(s)}else s=t.value;else if("Time"===e)if(s=ot(t.value),s){const t={hour:"numeric",minute:"numeric"};s=new Intl.DateTimeFormat([],t).format(s)}else s=t.value;return U`
    <span class="dataValueRead" data-ref="${t.reference}" id="${at(i)}">${lt(s)}</span>
  `},bt=(t,e)=>U`
  <input
    data-ref="${t.reference}"
    ?required="${"true"===t.required}"
    type="text"
    id="${at(e)}"
    value="${lt(t.value)}"
  />
`,yt=(t,e)=>U`
  <input
    data-ref="${t.reference}"
    ?required="${"true"===t.required}"
    type="number"
    id="${at(e)}"
    value="${lt(t.value)}"
  />
`,vt=(t,e)=>U`
  <input
    data-ref="${t.reference}"
    ?required="${"true"===t.required}"
    type="number"
    id="${at(e)}"
    value="${lt(t.value)}"
  />
`,Ct=(t,e)=>U`
  <input
    data-ref="${t.reference}"
    ?required="${"true"===t.required}"
    type="email"
    id="${at(e)}"
    value="${lt(t.value)}"
  />
`,wt=(t,e)=>U`
  <textarea
    rows="3"
    data-ref="${t.reference}"
    ?required="${"true"===t.required}"
    type="email"
    id="${at(e)}"
  >${lt(t.value)}</textarea>
`,$t=(t,e)=>U`
  <input
  data-ref="${t.reference}"
  id=${at(e)}
  type="checkbox" ?checked=${"true"===t.value}
  />
`,St=(t,e)=>{let i=[{value:"true"},{value:"false"}];return t.options&&(i=t.options),U`
    ${i.map(((i,s)=>{const a=`rb-${e}-${s}`;return U`
        <div>
          <input
            data-ref="${t.reference}"
            name=${at(e)}
            id=${a}
            type="radio"
            value="${i.key}"
            ?checked="${i.key===t.value}"
          />
          <label for="${a}">${i.value}</label>
        </div>
      `}))}
  `},_t=(t,e)=>U`<select
  data-ref="${t.reference}"
  id=${at(e)}
  ?required="${"true"===t.required}">
    <option value="" title="Select...">Select...</option>
    ${t.options.map((e=>U`<option ?selected=${e.key===t.value} value='${e.key}'>${e.value}</option>`))}
  </select>`,xt=(t,e)=>{let i=t.value;if(""!==i){let e=ot(i);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),i=`${e.getFullYear()}-${rt(e.getMonth()+1)}-${rt(e.getDate())}T${rt(e.getHours())}:${rt(e.getMinutes())}`):8===t.value.length&&(i=`${t.value.substring(0,4)}-${t.value.substring(4,6)}-${t.value.substring(6,8)}T00:00`)}return U`
    <input
      data-ref="${t.reference}"
      ?required="${"true"===t.required}"
      pattern="\\d{4}-\\d{2}-\\d{2}"
      placeholder="mm/dd/yyyy"
      type="datetime-local"
      id="${at(e)}"
      value="${i}"
    />
  `},Dt=(t,e)=>{let i=t.value;if(""!==i){let e=ot(i);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),i=`${e.getFullYear()}-${rt(e.getMonth()+1)}-${rt(e.getDate())}`):8===t.value.length&&(i=`${t.value.substring(0,4)}-${t.value.substring(4,6)}-${t.value.substring(6,8)}`)}return U`
    <input
      data-ref="${t.reference}"
      ?required="${"true"===t.required}"
      type="date"
      id="${at(e)}"
      value="${i}"
    />
  `},kt=(t,e)=>{let i=t.value;if(""!==i){let e=ot(i);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),i=`${rt(e.getHours())}-${rt(e.getMinutes())}-${rt(e.getSeconds())}`):8===t.value.length&&(i=`${t.value.substring(9,10)}:${t.value.substring(10,11)}:${t.value.substring(11,12)}`)}return U`
    <input
      data-ref="${t.reference}"
      ?required="${"true"===t.required}"
      type="time"
      id="${at(e)}"
      value="${i}"
    />
  `},At=(t,e,i,s,a)=>{if(void 0===t)return null;if(!t.config||!t.config.template)return U`${t.map(((t,n)=>{const r=`${e}-${n}`;if("reference"===t.type&&"view"===t.config.type){let e="";return t.config.context&&(e=t.config.context),At(s.data.uiResources.resources.views[t.config.name],r,i,s,""===a?e.substring(1):a+e)}return((t,e,i,s,a)=>{const n=t.config.value.replace("@P .","");if(t.config.reference=void 0===a||""===a?n:`${a}.${n}`,t.config.value=dt(s.casedata.content,t.config.reference),t.config.datasource&&0===t.config.datasource.indexOf("@ASSOCIATED")){const e=s.data.context_data?s.data.context_data.content:s.data.uiResources.context_data.caseInfo.content,i=""===a?e:dt(e,a);i&&(t.config.options=i.summary_of_associated_lists__[n])}if(t.config.options||(t.config.options=[]),t.config.value?t.config.value=`${t.config.value}`:t.config.value="",!0===i||"true"===t.config.readOnly)return mt(t.config,e,"field-text",ft(t.config,t.type,e));switch(t.type){case"Decimal":case"TextInput":return mt(t.config,e,"field-textinput",bt(t.config,e));case"Email":return mt(t.config,e,"field-emailinput",Ct(t.config,e));case"Integer":return mt(t.config,e,"field-numberinput",yt(t.config,e));case"Currency":return mt(t.config,e,"field-currencyinput",vt(t.config,e));case"RadioButtons":return mt(t.config,e,"field-radiogroup",St(t.config,e));case"TextArea":return mt(t.config,e,"field-textarea",wt(t.config,e));case"Checkbox":return mt(t.config,e,"field-checkbox",$t(t.config,e));case"Dropdown":return mt(t.config,e,"field-dropdown",_t(t.config,e));case"DateTime":return mt(t.config,e,"field-datetime",xt(t.config,e));case"Date":return mt(t.config,e,"field-date",Dt(t.config,e));case"Time":return mt(t.config,e,"field-time",kt(t.config,e));default:return null}})(t,r,i,s,a)}))}`;switch("TwoColumn"===t.config.template&&1===t.children.length&&(t.config.template="OneColumn"),t.config.template){case"TwoColumn":return U`
          <div class="flex layout-content-inline_grid_double">
            <div class="flex layout-content-stacked">${At(t.children[0].children,`${e}-0`,i,s,a)}</div>
            <div class="flex layout-content-stacked">${At(t.children[1].children,`${e}-1`,i,s,a)}</div>
          </div>
        `;case"OneColumn":return U`
          <div class="flex layout-content-stacked">
            ${At(t.children[0].children,`${e}-0`,i,s,a)}
          </div>
        `;case"Details":return U`
          <div class="flex layout-content-stacked_with_labels_left">
            ${At(t.children[0].children,`${e}-0`,i,s,a)}
          </div>
        `;default:return null}},Tt=(t,e,i,s)=>{if(null==s)return null;let a;const n=`${Math.random().toString(36).substr(2,9)}`,r=document.createElement("ul");r.setAttribute("id",`menu-overlay-${n}`),r.setAttribute("role","menu"),r.setAttribute("aria-labelledby",`menubutton-${n}`),r.setAttribute("tabindex","-1");const o=()=>{document.body.removeEventListener("click",c),document.body.removeEventListener("keydown",l),r&&(r.previousElementSibling&&(r.previousElementSibling.setAttribute("aria-expanded","false"),r.previousElementSibling.focus()),r.remove())},l=t=>{38===t.keyCode?(a=a.previousElementSibling,null===a&&(a=r.lastElementChild),a.focus()):40===t.keyCode?(a=a.nextElementSibling,null===a&&(a=r.firstElementChild),a.focus()):27===t.keyCode||9===t.keyCode?o():13===t.keyCode&&(s(t),o())},c=t=>{if(t){let e=t.target;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&e.nextElementSibling===r)return;e.parentNode===r&&s(t),o()}},d=t=>{if("keydown"===t.type&&40!==t.keyCode)return;if(t.preventDefault(),"blur"===t.type)return void c(t);const e=t.target;"BUTTON"!==e.tagName?(s(t),o()):null===e.nextElementSibling?(t.target.parentNode.appendChild(r),e.setAttribute("aria-expanded","true"),z(i(),r),a=e.nextElementSibling.firstElementChild,a.focus(),document.body.addEventListener("click",c),document.body.addEventListener("keydown",l)):o()};return U`
    <div class="button-menu">
    <button type='button' id="${`menubutton-${n}`}" aria-haspopup="true" aria-controls="${`menu-overlay-${n}`}" aria-expanded="false"
    @click="${d}" @keydown="${d}" @blur="${d}"
    class="pzhc pzbutton Simple action-menu" title="${e}" aria-label="${e}">${t}</button>
    </div>
  `},It=()=>U`
<span class="loading">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</span>
`,Nt=()=>U`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.3375,3 C20.3375,3 21.7742187,4.43671875 21.7742187,4.43671875 C21.7742187,4.43671875 4.43671875,21.4867188 4.43671875,21.4867188 C4.43671875,21.4867188 3,20.19375 3,20.19375 C3,20.19375 20.3375,3 20.3375,3 Z M21.7265625,20.0976563 C21.7265625,20.0976563 20.3859375,21.534375 20.3859375,21.534375 C20.3859375,21.534375 3.00078125,4.3890625 3.00078125,4.3890625 C3.00078125,4.3890625 4.38984375,3 4.38984375,3 C4.38984375,3 21.7273438,20.0976563 21.7273438,20.0976563 L21.7265625,20.0976563 Z"/>
</svg>`,Et=()=>U`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1140625,3.96875 C22.1140625,3.96875 22.1140625,3.96875 22.1140625,3.96875 C22.1140625,3.96875 17.46875,3.96875 17.46875,3.96875 C17.46875,3.96875 16.9898437,2.14921875 16.9898437,2.14921875 C16.9421875,1.8140625 16.7507812,1.57421875 16.5109375,1.33515625 C16.2234375,1.09609375 15.8882813,1 15.553125,1 C15.553125,1 15.553125,1 15.553125,1 C15.553125,1 9.03984375,1 9.03984375,1 C8.7046875,1 8.4171875,1.09609375 8.1296875,1.2875 C7.8421875,1.52734375 7.65078125,1.76640625 7.603125,2.1015625 C7.603125,2.1015625 7.603125,2.1015625 7.603125,2.1015625 C7.603125,2.1015625 7.12421875,3.96953125 7.12421875,3.96953125 C7.12421875,3.96953125 2.47890625,3.96953125 2.47890625,3.96953125 C2.14375,3.96953125 2,4.11328125 2,4.4484375 C2,4.78359375 2.14375,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 2.47890625,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 4.01171875,4.92734375 4.01171875,4.92734375 C4.01171875,4.92734375 4.921875,23.1742188 4.921875,23.1742188 C4.96953125,23.5570312 5.11328125,23.8929688 5.40078125,24.1320313 C5.63984375,24.4195312 5.97578125,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 6.40625,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 18.2359375,24.5632812 18.2359375,24.5632812 C18.6671875,24.5632812 19.0023438,24.4195312 19.2898438,24.1320313 C19.5289063,23.8929688 19.6726562,23.5570312 19.7210938,23.1742188 C19.7210938,23.1742188 19.7210938,23.1742188 19.7210938,23.1742188 C19.7210938,23.1742188 20.63125,4.92734375 20.63125,4.92734375 C20.63125,4.92734375 22.115625,4.92734375 22.115625,4.92734375 C22.4507812,4.92734375 22.5945312,4.78359375 22.5945312,4.4484375 C22.5945312,4.11328125 22.4507812,3.96953125 22.115625,3.96953125 L22.1140625,3.96875 Z M8.17734375,3.96875 C8.17734375,3.96875 8.56015625,2.38828125 8.56015625,2.38828125 C8.6078125,2.1484375 8.79921875,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 9.0390625,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 15.5523437,2.00546875 15.5523437,2.00546875 C15.7914062,2.00546875 15.9835937,2.14921875 16.03125,2.38828125 C16.03125,2.38828125 16.03125,2.38828125 16.03125,2.38828125 C16.03125,2.38828125 16.4140625,3.96875 16.4140625,3.96875 C16.4140625,3.96875 8.1765625,3.96875 8.1765625,3.96875 L8.17734375,3.96875 Z M19.6710938,4.9265625 C19.6710938,4.9265625 18.7609375,23.1257812 18.7609375,23.1257812 C18.7132812,23.4132812 18.521875,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 18.234375,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 6.4046875,23.5570312 6.4046875,23.5570312 C6.1171875,23.5570312 5.92578125,23.4132812 5.878125,23.1257812 C5.878125,23.1257812 5.878125,23.1257812 5.878125,23.1257812 C5.878125,23.1257812 4.96796875,4.9265625 4.96796875,4.9265625 C4.96796875,4.9265625 19.6710938,4.9265625 19.6710938,4.9265625 L19.6710938,4.9265625 Z M8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,18.1929687 8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,10.3382812 8.84765625,10.3382812 C8.84765625,10.003125 9.0390625,9.859375 9.37421875,9.859375 C9.37421875,9.859375 9.37421875,9.859375 9.37421875,9.859375 C9.709375,9.859375 9.853125,10.003125 9.853125,10.3382812 C9.853125,10.3382812 9.853125,10.3382812 9.853125,10.3382812 C9.853125,10.3382812 9.853125,18.1929687 9.853125,18.1929687 C9.853125,18.528125 9.709375,18.671875 9.37421875,18.671875 C9.37421875,18.671875 9.37421875,18.671875 9.37421875,18.671875 C9.0390625,18.671875 8.84765625,18.528125 8.84765625,18.1929687 Z M14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,18.1929687 14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,10.3382812 14.7382812,10.3382812 C14.7382812,10.003125 14.8820313,9.859375 15.2171875,9.859375 C15.2171875,9.859375 15.2171875,9.859375 15.2171875,9.859375 C15.5523437,9.859375 15.74375,10.003125 15.74375,10.3382812 C15.74375,10.3382812 15.74375,10.3382812 15.74375,10.3382812 C15.74375,10.3382812 15.74375,18.1929687 15.74375,18.1929687 C15.74375,18.528125 15.5523437,18.671875 15.2171875,18.671875 C15.2171875,18.671875 15.2171875,18.671875 15.2171875,18.671875 C14.8820313,18.671875 14.7382812,18.528125 14.7382812,18.1929687 Z M11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,19.1507813 11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,9.38046875 11.8164062,9.38046875 C11.8164062,9.0453125 11.9601563,8.85390625 12.2953125,8.85390625 C12.6304687,8.85390625 12.7742187,9.0453125 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,9.38046875 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,19.1507813 12.7742187,19.1507813 C12.7742187,19.4859375 12.6304687,19.6773437 12.2953125,19.6773437 C11.9601563,19.6773437 11.8164062,19.4859375 11.8164062,19.1507813 Z"/>
</svg>`,Pt=()=>U`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.5226562,11.6265625 C20.6664062,11.6265625 20.7617188,11.6742188 20.8578125,11.7703125 C20.9539062,11.8664063 21.0015625,11.9617188 21.0015625,12.1054688 C21.0015625,12.2492188 20.9539062,12.3445313 20.8578125,12.440625 C20.8578125,12.440625 20.8578125,12.440625 20.8578125,12.440625 C20.8578125,12.440625 13.2429687,20.0554687 13.2429687,20.0554687 C12.1414062,21.109375 10.8484375,21.6359375 9.41171875,21.6359375 C7.975,21.6359375 6.68203125,21.109375 5.58046875,20.0554687 C5.58046875,20.0554687 5.58046875,20.0554687 5.58046875,20.0554687 C4.5265625,19.0015625 4,17.75625 4,16.271875 C4,16.271875 4,16.271875 4,16.271875 C4,14.8351563 4.5265625,13.5421875 5.58046875,12.440625 C5.58046875,12.440625 5.58046875,12.440625 5.58046875,12.440625 C5.58046875,12.440625 14.9671875,3.14921875 14.9671875,3.14921875 C15.7335937,2.3828125 16.64375,2 17.7453125,2 C18.846875,2 19.7570312,2.3828125 20.5234375,3.14921875 C20.5234375,3.14921875 20.5234375,3.14921875 20.5234375,3.14921875 C21.2898437,3.86796875 21.6726562,4.77734375 21.6726562,5.87890625 C21.6726562,5.87890625 21.6726562,5.87890625 21.6726562,5.87890625 C21.6726562,6.98046875 21.2898437,7.890625 20.5234375,8.65703125 C20.5234375,8.65703125 20.5234375,8.65703125 20.5234375,8.65703125 C20.5234375,8.65703125 11.8546875,17.2773438 11.8546875,17.2773438 C11.3757813,17.75625 10.8007812,17.9960938 10.1304687,17.9960938 C10.1304687,17.9960938 10.1304687,17.9960938 10.1304687,17.9960938 C9.5078125,17.9960938 8.88515625,17.7570313 8.35859375,17.2773438 C8.35859375,17.2773438 8.35859375,17.2773438 8.35859375,17.2773438 C7.8796875,16.7984375 7.63984375,16.2234375 7.63984375,15.553125 C7.63984375,14.8828125 7.87890625,14.3078125 8.35859375,13.8289062 C8.35859375,13.8289062 8.35859375,13.8289062 8.35859375,13.8289062 C8.35859375,13.8289062 16.6921875,5.54375 16.6921875,5.54375 C16.7882812,5.44765625 16.93125,5.4 17.075,5.4 C17.075,5.4 17.075,5.4 17.075,5.4 C17.21875,5.4 17.3140625,5.44765625 17.4101562,5.54375 C17.50625,5.63984375 17.5539062,5.73515625 17.5539062,5.87890625 C17.5539062,5.87890625 17.5539062,5.87890625 17.5539062,5.87890625 C17.5539062,6.02265625 17.50625,6.16640625 17.4101562,6.26171875 C17.4101562,6.26171875 17.4101562,6.26171875 17.4101562,6.26171875 C17.4101562,6.26171875 9.0765625,14.4992187 9.0765625,14.4992187 C8.7890625,14.7867187 8.6453125,15.121875 8.6453125,15.553125 C8.6453125,15.984375 8.7890625,16.3195313 9.0765625,16.6070312 C9.3640625,16.8945312 9.69921875,17.0382813 10.1304687,17.0382813 C10.1304687,17.0382813 10.1304687,17.0382813 10.1304687,17.0382813 C10.5132812,17.0382813 10.8492187,16.8945312 11.1359375,16.6070312 C11.1359375,16.6070312 11.1359375,16.6070312 11.1359375,16.6070312 C11.1359375,16.6070312 19.8523437,7.98671875 19.8523437,7.98671875 C20.4273437,7.41171875 20.7140625,6.69375 20.7140625,5.8796875 C20.7140625,5.8796875 20.7140625,5.8796875 20.7140625,5.8796875 C20.7140625,5.065625 20.4265625,4.3953125 19.8523437,3.8203125 C19.8523437,3.8203125 19.8523437,3.8203125 19.8523437,3.8203125 C19.2296875,3.2453125 18.5117187,2.95859375 17.7453125,2.95859375 C17.7453125,2.95859375 17.7453125,2.95859375 17.7453125,2.95859375 C16.93125,2.95859375 16.2609375,3.24609375 15.6859375,3.8203125 C15.6859375,3.8203125 15.6859375,3.8203125 15.6859375,3.8203125 C15.6859375,3.8203125 6.29921875,13.159375 6.29921875,13.159375 C5.4375,13.9734375 5.00625,14.9789062 5.00625,16.2726562 C5.00625,16.2726562 5.00625,16.2726562 5.00625,16.2726562 C5.00625,17.5179688 5.4375,18.5234375 6.29921875,19.3375 C6.29921875,19.3375 6.29921875,19.3375 6.29921875,19.3375 C7.1609375,20.1992188 8.21484375,20.6304688 9.4125,20.6304688 C9.4125,20.6304688 9.4125,20.6304688 9.4125,20.6304688 C10.7054687,20.6304688 11.7117187,20.1992188 12.5257812,19.3375 C12.5257812,19.3375 12.5257812,19.3375 12.5257812,19.3375 C12.5257812,19.3375 20.1882812,11.7703125 20.1882812,11.7703125 C20.284375,11.6742188 20.3796875,11.6265625 20.5234375,11.6265625 L20.5226562,11.6265625 Z"/>
</svg>`,Rt=(t,e,i,s)=>((t,e,i,s,a)=>{const n=document.createElement("div");n.setAttribute("role","alertdialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-labelledby",t),n.setAttribute("aria-describedby",""),n.setAttribute("class","mashup-modal");const r=document.createElement("div");n.appendChild(r);const o=()=>{document.body.removeEventListener("click",l),n&&(n.previousElementSibling&&(n.previousElementSibling.removeAttribute("aria-hidden"),n.previousElementSibling.focus()),n.remove()),a&&a()},l=t=>{if(t){let e=t.target;if(e.download)return;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e){const t=e.closest("button");if((null===t||"close"!==t.getAttribute("data-action-id"))&&!e.classList.contains("mashup-modal")&&null!==e.closest(".mashup-modal"))return}o()}};return U`
  <div class='modalcontent'>
    <button type="button" @click="${t=>{t.preventDefault(),t.stopPropagation();const e=t.target.closest(".modalcontent");null===e?o():1===e.children.length?(e.firstElementChild.setAttribute("aria-hidden","true"),n.style.opacity=0,e.appendChild(n),s(r),document.body.addEventListener("click",l),n.offsetHeight,n.style=""):o()}}" class="pzhc pzbutton ${i}" title="${t}">${e}</button>
  </div>`})(t,e,i,(t=>{z(Lt(t,[]),t),s(t)})),Lt=(t,e,i,s,a)=>{let n=0;const r=t=>{if(void 0===t||"string"==typeof t&&""===t)return;if("URL"===e[n].category)return void window.open(t);let i=e[n].fileName;void 0===i&&(i=e[n].name);const s=window.document.createElement("a");if("Correspondence"===e[n].category){i=`${e[n].name}.html`;const a=`<html><head><title>${e[n].name}</title></head><body>${t}</body></html>`,r=new Blob([a],{type:"text"});s.href=window.URL.createObjectURL(r)}else{const e=function(t){const e=window.atob(t),i=e.length,s=new Uint8Array(i);for(let t=0;t<i;t++){const i=e.charCodeAt(t);s[t]=i}return s}(t),i=new Blob([e],{type:"octet/stream"});s.href=window.URL.createObjectURL(i)}s.download=i,document.body.appendChild(s),s.click(),document.body.removeChild(s)},o=t=>{t.stopPropagation();const i=t.target;n=i.getAttribute("data-id"),s.fetchData.call(s,"attachment",{id:e[n].ID,target:r})},l=i=>{i.preventDefault(),i.stopPropagation();const a=i.target.closest("button");n=a.getAttribute("data-id"),s.sendData.call(s,"deleteattachment",{id:e[n].ID,target:t})},c=r=>{r.stopPropagation();const o=r.target.closest("button");n=parseInt(o.getAttribute("data-id"),10),a.splice(n,1),z(Lt(t,e,i,s,a),t)},d=t=>{t.stopPropagation(),t.preventDefault();const e=t.target;if(n=e.getAttribute("data-id"),"INPUT"===e.tagName){const t=e.getAttribute("data-prop-id");a[n][t]=e.value}else"SELECT"===e.tagName&&(a[n].category=e.value)},h=t=>{t.preventDefault();const e=t.target,i=t.relatedTarget,s=null===e?null:e.closest(".attach-files"),a=null===i?null:i.closest(".attach-files");if("dragenter"===t.type||"dragover"===t.type?null!=s&&s.classList.add("drop-file-hover"):"dragleave"!==t.type&&"drop"!==t.type||null===a&&null!==s&&s.classList.remove("drop-file-hover"),"drop"===t.type){const i=t.dataTransfer.files;p(e,i)}},u=n=>{n.stopPropagation(),n.preventDefault();for(let n=0;n<a.length;n++){const r=a[n];delete r.editing,r.loading=!0,"URL"===r.type?(e.unshift(r),s.sendData.call(s,"attachments",{id:i,actionid:[r],target:t})):(e.unshift({name:r.displayName,extension:r.extension,loading:!0}),s.sendData.call(s,"uploadattachment",{actionid:r,target:t}))}z(Lt(t,e,i,s),t)},p=(a,n)=>{const r=[];for(let t=0;t<n.length;t++){const e=n[t];let i=e.name.lastIndexOf(".");-1===i&&(i=e.name.length),e.displayName=e.name.substring(0,i),e.extension=e.name.substring(i+1),e.editing=!0,e.category="File",r.push(e)}z(Lt(t,e,i,s,r),t)},g=t=>{t.stopPropagation();let e=t.target;if("BUTTON"===e.tagName)return e=t.target.parentNode.parentNode.firstElementChild,void e.click();p(e,e.files)},m=a=>{a.stopPropagation();z(Lt(t,e,i,s,[{type:"URL",category:"URL",name:"",url:"",editing:!0}]),t)},f=a=>{a.stopPropagation(),z(Lt(t,e,i,s),t)},b=(t,e)=>{let i=new Date(e.createTime);return i=i.toLocaleDateString(void 0,{year:"numeric",month:"numeric",day:"numeric"}),U`
    <div class='list-item-title'>
      <button type='button' class='Light'  data-id="${t}" @click="${o}">${e.name}</button>
      ${e.loading?"":U`
      <span class='list-item-meta'><span>${e.createdBy}</span><span>${i}</span><span>category: ${e.category}</span></span>`}
    </div>`},y=(t,e)=>e.loading?U`${b(t,e)}${It()}`:e.editing?"URL"===e.type?U`
      <div class='flex content-item field-item'>
        <label for='url-name'>Name</label>
        <input type='text' id='url-name' data-prop-id='name' @change="${d}" data-id="${t}" value="${e.name}" aria-label='name'/>
      </div>
      <div class='flex content-item field-item'>
        <label for='url-url'>URL</label>
        <input type='text' id='url-url' data-prop-id='url' @change="${d}" data-id="${t}" value="${e.url}" aria-label='URL'/>
      </div>`:U`
      <input type='text' data-prop-id='displayName' class='flex-all' @change="${d}" 
      data-id="${t}" value="${e.displayName}" aria-label='name'/>
      ${((t,e)=>U`
    <select data-id="${t}" @change="${d}" class='flex-all' aria-label='category'>
    ${s.attachmentcategories.map((t=>U`
      <option ?selected=${t.ID===e}>${t.ID}</option>
    `))}
    </select>`)(t,e.category)}
      <span class='flex-all'>${e.name}</span>
      <span>${Math.round(e.size/1e3)}Kb</span>
      <button type='button' data-id="${t}" @click="${c}" class='pzhc pzbutton Simple' title='Delete'>${Et()}</button>`:U`${b(t,e)}
    <button type='button' data-id="${t}" @click="${l}" class='pzhc pzbutton Simple' title='Delete'>${Et()}</button>`,v=t=>{if(!i)return It();const e=[];if(void 0!==t){const i=Object.entries(t);for(const t of i){let i=t[1].extension;void 0===i&&(i=t[1].type),"URL"===t[1].type&&t[1].editing?e.push(U`<div class='flex layout-content-stacked content-items-maxwidth'>
              ${y(t[0],t[1])}
            </div>`):e.push(U`<div class='row-item'>
              <span class='doc-icon'>${U`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1632813,6.753125 C22.1632813,6.753125 22.1632813,6.753125 22.1632813,6.753125 C22.1632813,6.753125 15.8414062,0.43125 15.8414062,0.43125 C15.6023437,0.14375 15.21875,0 14.7875,0 C14.7875,0 14.7875,0 14.7875,0 C14.7875,0 3.48515625,0 3.48515625,0 C3.05390625,0 2.71875,0.14375 2.43125,0.43125 C2.14375,0.71875 2,1.05390625 2,1.48515625 C2,1.48515625 2,1.48515625 2,1.48515625 C2,1.48515625 2,23.0367188 2,23.0367188 C2,23.4679688 2.14375,23.803125 2.43125,24.090625 C2.71875,24.378125 3.05390625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 3.48515625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 21.109375,24.521875 21.109375,24.521875 C21.540625,24.521875 21.8757812,24.378125 22.1632813,24.090625 C22.4507812,23.803125 22.5945312,23.4679688 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,23.0367188 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,7.80703125 22.5945312,7.80703125 C22.5945312,7.37578125 22.4507812,7.040625 22.1632813,6.753125 Z M15.6976563,1.6765625 C15.6976563,1.6765625 20.8703125,6.84921875 20.8703125,6.84921875 C20.8703125,6.84921875 16.225,6.84921875 16.225,6.84921875 C15.8898438,6.84921875 15.7460938,6.70546875 15.7460938,6.3703125 C15.7460938,6.3703125 15.7460938,6.3703125 15.7460938,6.3703125 C15.7460938,6.3703125 15.6984375,1.6765625 15.6984375,1.6765625 L15.6976563,1.6765625 Z M21.6367188,7.8546875 C21.6367188,7.8546875 21.6367188,23.0367188 21.6367188,23.0367188 C21.6367188,23.371875 21.4453125,23.515625 21.1101563,23.515625 C21.1101563,23.515625 21.1101563,23.515625 21.1101563,23.515625 C21.1101563,23.515625 3.4859375,23.515625 3.4859375,23.515625 C3.15078125,23.515625 2.959375,23.371875 2.959375,23.0367188 C2.959375,23.0367188 2.959375,23.0367188 2.959375,23.0367188 C2.959375,23.0367188 2.959375,1.48515625 2.959375,1.48515625 C2.959375,1.15 3.15078125,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 3.4859375,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 14.740625,0.95859375 14.740625,0.95859375 C14.740625,0.95859375 14.740625,6.3703125 14.740625,6.3703125 C14.740625,6.8015625 14.884375,7.13671875 15.171875,7.42421875 C15.459375,7.71171875 15.7945313,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 16.2257813,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 21.6375,7.85546875 21.6375,7.85546875 L21.6367188,7.8546875 Z"/>
</svg>`}<span>${i.substring(0,5)}</span></span>
              ${y(t[0],t[1])}
            </div>`)}}return e&&e.length>0?e:U`<div class='empty'>no attachments found</div>`};let C="Attachments";return void 0!==a&&a.length>0&&(C="URL"===a[0].type?"Attach a link":"Attach files"),U`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${C}</h2>
      <div class="flex layout-content-inline_middle margin-l-auto">
        <button type='button' data-action-id='close'
        class="pzhc pzbutton Simple" title="Close">${Nt()}</button>
      </div>
    </div>
    ${void 0!==a&&a.length>0?U`
      <div id="modalcontent" class='attach-files list-items'>
        <div class='upload-content'>${v(a)}</div>
        <div class="action-button-area">
          <button type="button" class="pzhc pzbutton" @click="${f}">Cancel</button>
          <button type="button" class="Strong pzhc pzbutton" @click="${u}">Upload</button>
        </div>
      </div>`:U`
      <form id="modalcontent" @dragenter="${h}" @dragover="${h}" @dragleave="${h}"  
      @drop="${h}" class='attach-files list-items'>
        <div class="file-upload">
          <input @change="${g}" type="file" multiple="">
          ${Pt()}<span> Drag and drop files, attach 
          <button type='button' aria-labelledby='click to attach a file' class='Light' @click="${g}">files</button> or add a 
          <button type='button' aria-labelledby='click to add a URL link' class='Light' @click="${m}">link</button></span>
        </div>
        ${v(e)}
      </form>
    `}
  `},zt=(t,e,i,s,a,n,r,o,l)=>{const c=U`${Pt()}<span class='count-badge'>${a}</span>`;if(void 0===e.caseID&&i.content){const t=i.content.pyID.split(" ")[1];return U`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${e.data.caseInfo.name} (${t})</h2>
      ${""!==s?U`<span class='badge-bg-info centered'><span class='badge_text'>${s}</span></span>`:""}
      <div class="flex layout-content-inline_middle margin-l-auto">
        ${l?Rt("Attachments",c,"Simple",l):""}
        ${i.actions&&i.actions.length>0?U`
          ${Tt("Actions","Start a new action",n,r)}`:""}
      </div>
    </div>
    ${((t,e)=>t&&0!==t.length?U`
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
        ${t.map((t=>U`
        <tr>
          <td>${t.urgency}</td>
          <td>${t.name}</td>
          <td>${t.assigneeInfo.name}</td>
          <td class="right-aligned">
            <button type='button' @click="${e}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">Open</button>
          </td>
        </tr>`))}
  </tbody >
  </table > `:null)(i.assignments,o)}
    <h3>Case information</h3>`}if(""===t||void 0===e.caseID)return"";const d=e.caseID.split(" ")[1];return U`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${e.data.caseInfo.name} (${d})</h2>
    ${""!==s?U`<span class='badge-bg-info centered'><span class='badge_text'>${s}</span></span>`:""}
    <div class="flex layout-content-inline_middle margin-l-auto">
      ${l?Rt("Attachments",c,"Simple",l):""}
      ${e.actions&&e.actions.length>0?U`
        ${Tt("Actions","Start a new action",n,r)}`:""}
    </div>
  </div>
 <h3>${t}</h3>`},Ot=(t,e,i,s,a)=>U`
  <div>${At(t,e,!1,a,"")}</div>
  ${((t,e)=>U`
  <div class="action-button-area">
    ${null!==t?U`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    ${null!==e?U`<button type="button" class="pzhc pzbutton" @click="${e}">Save</button>`:""}
    <button type="button" data-submit="submit" class="Strong pzhc pzbutton">Submit</button>
  </div>
`)(i,s)}
`,Ut=(t,e,i,s)=>U`
  <div>${At(t,e,!0,s)}</div>
  ${(t=>null===t?null:U`
  <div class="action-button-area">
  ${null!==t?U`<button type="button" class="pzhc pzbutton Strong" @click="${t}">Close</button>`:""}
  </div>`)(i)}
`,Mt=(t,e)=>{const i=[],s=Object.entries(e.actions);for(const e of s)e[1].name!==t&&i.push(U`
          <li role="menuitem" tabindex="-1" data-value="${e[1].ID}">${e[1].name}</li>
        `);return U`
    ${i}
  `};function qt(t,e,i,s){i&&Object.defineProperty(t,e,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(s):void 0})}function Vt(t,e,i,s,a){var n={};return Object.keys(s).forEach((function(t){n[t]=s[t]})),n.enumerable=!!n.enumerable,n.configurable=!!n.configurable,("value"in n||n.initializer)&&(n.writable=!0),n=i.slice().reverse().reduce((function(i,s){return s(t,e,i)||i}),n),a&&void 0!==n.initializer&&(n.value=n.initializer?n.initializer.call(a):void 0,n.initializer=void 0),void 0===n.initializer&&(Object.defineProperty(t,e,n),n=null),n}var jt,Ft,Wt,Ht,Bt,Zt,Jt,Kt,Yt,Gt,Xt,Qt,te,ee,ie,se,ae,ne,re,oe,le,ce,de,he,ue,pe,ge,me,fe,be,ye,ve,Ce,we,$e;let Se=(jt=G({type:String}),Ft=G({type:String}),Wt=G({type:String}),Ht=G({type:String}),Bt=G({type:String}),Zt=G({type:String}),Jt=G({type:String}),Kt=G({type:String}),Yt=G({type:String}),Gt=G({type:String}),Xt=G({type:String}),Qt=G({type:String}),te=G({type:String}),ee=G({type:Object}),ie=G({type:String}),se=G({type:String}),ae=G({type:String}),re=Vt((ne=class extends it{constructor(){super(),qt(this,"url",re,this),qt(this,"caseID",oe,this),qt(this,"username",le,this),qt(this,"password",ce,this),qt(this,"title",de,this),qt(this,"bShowCreate",he,this),qt(this,"bShowCancel",ue,this),qt(this,"bShowAttachments",pe,this),qt(this,"bShowSave",ge,this),qt(this,"authentication",me,this),qt(this,"token",fe,this),qt(this,"clientid",be,this),qt(this,"clientsecret",ye,this),qt(this,"initialContent",ve,this),qt(this,"action",Ce,this),qt(this,"casetype",we,this),qt(this,"portalName",$e,this),this.cases=[],this.dataPages={},this.name="",this.etag="",this.casepyStatusWork="",this.casedata={},this.data={},this.numAttachments=0,this.attachmentcategories=[],this.assignmentID="",this.actionID="",this.content={},this.errorMsg="",this.validationMsg="",this.bShowConfirm=!1,this.bShowNew=!1}}).prototype,"url",[jt],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),oe=Vt(ne.prototype,"caseID",[Ft],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),le=Vt(ne.prototype,"username",[Wt],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),ce=Vt(ne.prototype,"password",[Ht],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),de=Vt(ne.prototype,"title",[Bt],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"My worklist"}}),he=Vt(ne.prototype,"bShowCreate",[Zt],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"true"}}),ue=Vt(ne.prototype,"bShowCancel",[Jt],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"true"}}),pe=Vt(ne.prototype,"bShowAttachments",[Kt],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"false"}}),ge=Vt(ne.prototype,"bShowSave",[Yt],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"true"}}),me=Vt(ne.prototype,"authentication",[Gt],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),fe=Vt(ne.prototype,"token",[Xt],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),be=Vt(ne.prototype,"clientid",[Qt],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),ye=Vt(ne.prototype,"clientsecret",[te],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),ve=Vt(ne.prototype,"initialContent",[ee],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Ce=Vt(ne.prototype,"action",[ie],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),we=Vt(ne.prototype,"casetype",[se],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),$e=Vt(ne.prototype,"portalName",[ae],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),ne);class _e extends Se{clearLoadingIndicator(){const t=this.getRenderRoot().querySelector("#case-data");t&&null!==t.querySelector(".loading")&&z(null,t)}sendExternalEvent(t){this.dispatchEvent(new CustomEvent("message",{detail:{type:t}}))}genErrorMessage(t){this.clearLoadingIndicator(),t.message&&-1!==t.message.indexOf("JSON.parse")?console.error("Error:",t):t.message&&-1!==t.message.indexOf("Unexpected token")?(this.errorMsg="Error 404: Resource not found",this.requestUpdate(),console.error(this.errorMsg)):(t.status?""!==t.statusText?this.errorMsg=`Error ${t.status}: ${t.statusText}`:401===t.status?this.errorMsg="Error 401: Authentication error":500===t.status?this.errorMsg="Error 500: Internal server error":this.errorMsg=`Error ${t.status}`:t.name&&t.message?this.errorMsg=`Error ${t.name}: ${t.message}`:this.errorMsg="string"==typeof t?t:"Critical error",this.requestUpdate(),console.error("Error:",t))}fetchData(t,e){const{id:i,actionid:s,target:a}=e||{};let n="";""!==this.authentication&&"basic"!==this.authentication||(n=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(n=`Bearer ${this.token}`);const r={method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:n},mode:"cors"};let o=`${this.url}/api/application/v2/`;switch(t){case"portal":o+=`portals/${this.portalName}`;break;case"assignment":o+=`assignments/${i}`;break;case"view":o+=`cases/${i}/views/${s}`;break;case"caseaction":o+=`cases/${i}/actions/${s}`;break;case"attachment":o+=`attachments/${i}`;break;case"attachments":o+=`cases/${i}/attachments`;break;case"attachmentcategories":o+=`cases/${i}/attachment_categories`}fetch(o,r).then((i=>{if("assignment"===t)this.etag=i.headers.get("etag");else if("attachment"===t)return i.text();return i.ok||404===i.status?i.json():401===i.status?(this.token="",this.sendData("authenticate",{...e,type:t,cmd:"fetchData"}),i.json()):Promise.reject(i)})).then((e=>{try{if(e.errors&&e.errors.length>0)return;if(e.errorDetails&&e.errorDetails.length>0)return this.errorMsg=`Error ${e.errorDetails[0].message}: ${e.localizedValue}`,this.clearLoadingIndicator(),this.requestUpdate(),void console.error("Error:",e);const n=this.getRenderRoot().querySelector("#case-data");switch(t){case"portal":this.casetypes={};for(const t in e.data.D_pzCasesAvailableToCreateForPortal.pxResults){const i=e.data.D_pzCasesAvailableToCreateForPortal.pxResults[t];"workList"===this.action&&""!==this.casetype&&this.casetype!==i.pyClassName||(this.casetypes[i.pyClassName]={canCreate:!0,name:i.pyLabel})}if(this.cases=[],e.data.D_pyUserWorkList.pxResults.length>0)for(const t in e.data.D_pyUserWorkList.pxResults){const i=e.data.D_pyUserWorkList.pxResults[t];this.cases.push({name:i.pyLabel,caseID:i.pxRefObjectKey,urgency:i.pxUrgencyAssign,ID:i.pzInsKey})}this.requestUpdate();break;case"assignment":this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel,this.caseID=this.casedata.content.pzInsKey,this.data.caseID=this.caseID,this.data.ID=i,this.actionID=this.casedata.content.pyViewName,this.casepyStatusWork=this.casedata.status,this.data.actions=this.casedata.availableActions,this.name=this.casedata.stageLabel,z(Ot(e.uiResources.resources.views[this.actionID],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),n),this.requestUpdate(),n.focus();break;case"view":if(!n){console.error("Error: case data are not present when retrieving the page");break}this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel?this.casedata.content.pyLabel:this.casedata.name,this.casedata.actions=this.casedata.availableActions,this.casedata.content.pyID=this.casedata.ID,this.data.ID=this.casedata.ID,this.casepyStatusWork=this.casedata.status,this.name=this.casedata.stageLabel,this.content={},"true"===this.bShowAttachments&&this.fetchData("attachments",{id:this.caseID}),this.name=e.data.caseInfo.name,z(Ut(e.uiResources.resources.views[s],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,this),n),this.requestUpdate(),n.focus();break;case"caseaction":z(Ot(e.uiResources.resources.views[e.uiResources.root.config.name],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),n),this.requestUpdate(),n.focus();break;case"attachments":let t=e.attachments;t||(t=[]),this.numAttachments=t.length,a&&z(Lt(a,t,this.caseID,this),a),this.requestUpdate();break;case"attachmentcategories":this.attachmentcategories=e.attachment_categories;break;case"attachment":a(e)}}catch(t){this.errorMsg=`Error: ${t}`,this.requestUpdate(),console.error("Error:",t)}})).catch((t=>{this.genErrorMessage(t)}))}sendData(t,e){const{id:i,actionid:s,target:a}=e;let n="";""!==this.authentication&&"basic"!==this.authentication||(n=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(n=`Bearer ${this.token}`);const r={"Content-Type":"application/json;charset=UTF-8",Authorization:n},o={method:"POST",headers:r,mode:"cors"};let l=`${this.url}/api/application/v2/`;switch(this.validationMsg="",t){case"authenticate":"oauth2password"===this.authentication?o.body=`grant_type=password&client_id=${this.clientid}&client_secret=${this.clientsecret}&username=${this.username}&password=${this.password}`:"oauth2clientcredentials"===this.authentication&&(o.body=`grant_type=client_credentials&client_id=${this.clientid}&client_secret=${this.clientsecret}`),o.headers["Content-Type"]="application/x-www-form-urlencoded",l=`${this.url}/PRRestService/oauth2/v1/token`;break;case"newwork":l+="cases?viewType=form",o.body=JSON.stringify({caseTypeID:i,processID:"pyStartCase",content:{}});break;case"submitassignment":o.body=JSON.stringify({content:this.content}),o.method="PATCH",o.headers["If-Match"]=this.etag,l+=`assignments/${i}/actions/${s}?viewType=form`;break;case"submitcaseaction":o.body=JSON.stringify({content:this.content}),o.method="PATCH",o.headers["If-Match"]=this.etag,l+=`cases/${i}/actions/${s}?viewType=form`;break;case"uploadattachment":l+="attachments/upload",delete r["Content-Type"];const t=new FormData;t.append("File",s,s.name),o.body=t;break;case"attachments":l+=`cases/${i}/attachments`,o.body=JSON.stringify({attachments:s});break;case"deleteattachment":l+=`attachments/${i}`,o.method="DELETE"}fetch(l,o).then((i=>"deleteattachment"===t||"attachments"===t?i.text():("submitassignment"!==t&&"newwork"!==t||(this.etag=i.headers.get("etag")),200===i.status||201===i.status||i.status>=400&&i.status<500||500===i.status?(401===i.status&&(this.token="",this.sendData("authenticate",{...e,type:t,cmd:"sendData"})),i.json()):i.ok?Promise.resolve("ok"):Promise.reject(i)))).then((i=>{if(!(i.errors&&i.errors.length>0)){if(i.access_token)this.token=i.access_token,e!=={}&&e.type&&e.cmd&&("sendData"===e.cmd?this.sendData(e.type,e):this.fetchData(e.type,e));else if(i.errorDetails&&i.errorDetails.length>0){if(i.errorDetails[0].localizedValue){((t,e)=>{for(const i in t.elements){const s=t.elements[i];if("INPUT"===s.tagName||"TEXTAREA"===s.tagName||"SELECT"===s.tagName){const t=`.${s.getAttribute("data-ref")}`;if(null!==t&&"pyID"!==t)for(const i in e){if(e[i].Path===t){s.setCustomValidity(e[i].ValidationMessage),s.classList.add("error-field"),s.reportValidity();break}if(e[i].erroneousInputOutputFieldInPage===t){s.setCustomValidity(e[i].localizedValue),s.classList.add("error-field"),s.reportValidity();break}}}}})(this.getRenderRoot().querySelector("#case-data"),i.errorDetails),this.validationMsg=(t=>t.errorDetails?U`
    <ul>
      ${t.errorDetails.map((t=>"Error_Validation_Fail"===t.message?null:U`<li>${t.localizedValue}</li>`))}
    </ul>`:null)(i)}else this.errorMsg=`Error ${i.errorDetails[0].message}: ${i.localizedValue}`;this.clearLoadingIndicator(),a&&(a.disabled=!1,a.textContent="Save"),"submitassignment"===t&&this.fetchData("assignment",{id:this.assignmentID})}else{const e=this.getRenderRoot().querySelector("#case-data");if("deleteattachment"===t||"attachments"===t)this.fetchData("attachments",{id:this.caseID,target:a});else if("uploadattachment"===t){let t=s.name.lastIndexOf(".");-1===t&&(t=s.name.length);const e=s.name.substring(t+1),n=[{type:"File",category:s.category,fileType:e,name:s.displayName,ID:i.ID}];return void this.sendData("attachments",{id:this.caseID,actionid:n,target:a})}i.confirmationNote?(this.bShowConfirm=!0,this.caseID=i.data.caseInfo.ID,this.fetchData("view",{id:this.caseID,actionid:"pyReview"})):i.uiResources&&(this.bShowNew=!1,this.assignmentID=i.nextAssignmentInfo.ID,this.sendExternalEvent(t),this.data=i,this.casedata.content=i.data.caseInfo.content,this.data.name=this.casedata.content.pyLabel?this.casedata.content.pyLabel:this.casedata.name,this.caseID=this.casedata.content.pzInsKey,this.data.caseID=i.data.caseInfo.ID,this.data.ID=this.assignmentID,this.actionID=i.uiResources.root.config.name,this.casepyStatusWork=i.data.caseInfo.status,this.data.actions=i.data.caseInfo.availableActions,this.name=i.data.caseInfo.stageLabel,e&&(z(Ot(i.uiResources.resources.views[this.actionID],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),e),e.focus()))}this.requestUpdate()}})).catch((t=>{this.genErrorMessage(t)}))}}class xe extends _e{constructor(...t){super(...t),this.resetError=t=>{this.errorMsg="",this.validationMsg="",this.actionAreaCancel(t)},this.reloadWorkList=t=>{this.cases=[],this.requestUpdate(),this.actionAreaCancel(t)},this.actionAreaCancel=t=>{t&&t.preventDefault(),this.bShowConfirm=!1,this.bShowNew=!1,this.caseID="",this.data={},this.content={},this.casedata={},this.attachmentcategories=[],this.casepyStatusWork="",this.assignmentID="",this.actionID="",this.errorMsg="",this.numAttachments=0,this.validationMsg="",this.name="","workList"===this.action?this.fetchData("portal"):this.dispatchEvent(new CustomEvent("message",{detail:{type:"cancel"}}))},this.actionAreaSave=t=>{t&&t.preventDefault(),null===t.target.getAttribute("data-submit")&&(t.target.textContent="Saving...",t.target.disabled=!0);const e=this.getRenderRoot().querySelector("#case-data");e&&(this.content={},gt(e,this.content),""!==this.assignmentID?this.sendData("savecase",{id:this.caseID,actionid:"",target:t.target}):this.sendData("savecase",{id:this.caseID,actionid:this.actionID,target:t.target}))},this.actionRefresh=()=>{const t=this.getRenderRoot().querySelector("#case-data");t&&(this.content={},this.validationMsg="",gt(t,this.content),this.requestUpdate(),this.fetchData("caseaction",{id:this.caseID,actionid:this.actionID}))},this.displayCasesTypes=()=>(t=>{const e=[],i=Object.entries(t);for(const t of i)e.push(U`
        <li role="menuitem" tabindex="-1" data-value="${t[0]}">${t[1].name}</li>
      `);return U`
    ${e}
  `})(this.casetypes),this.displayActions=()=>this.data.actions?Mt(this.name,this.data):this.casedata.actions?Mt(this.name,this.casedata):null,this.displayAttachments=t=>{this.fetchData("attachmentcategories",{id:this.caseID}),this.fetchData("attachments",{id:this.caseID,target:t})},this.submitForm=(t,e)=>{const i=this.getRenderRoot().querySelector("#case-data");return this.content={},gt(i,this.content),i.checkValidity()?"create"!==e?""!==this.data.ID?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID}):this.sendData("submitcaseaction",{id:this.data.caseID,actionid:this.actionID}):this.sendData("newwork",{id:this.casetype}):i.reportValidity(),t.preventDefault(),!1},this.createCase=t=>{if(this.name="New Case",this.bShowNew=!0,t){let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&(this.casetype=e.getAttribute("data-value"),this.name=`New ${e.textContent} `)}this.content=this.initialContent,this.caseID="",this.data={},this.casedata={},this.casetypes[this.casetype]?this.sendData("newwork",{id:this.casetype}):(this.errorMsg=`Case '${this.casetype}' is not defined`,console.error(`Case '${this.casetype}' is not defined`)),this.requestUpdate()},this.runAction=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&null!==e.getAttribute("data-value")&&(this.actionID=e.getAttribute("data-value"),this.name=e.innerText,this.data.ID="",this.actionRefresh());const i=this.getRenderRoot().querySelector("#case-data");null!=i&&z(It(),i)},this.openCase=t=>{t.preventDefault(),this.caseID=t.target.getAttribute("data-id"),this.name="",this.data={},this.casedata={},0===this.caseID.indexOf("ASSIGN-WORKLIST")?(this.assignmentID=this.caseID,this.caseID=""):this.assignmentID="";const e=this.getRenderRoot().querySelector("#case-data");null!=e&&z(It(),e),this.requestUpdate()},this.getData=(t,e)=>{var i;this.dataPages[t]?z((i=this.dataPages[t],U`
${i.pxResults.map((t=>U`
    <option>
      ${t.pyUserName}
    </option>`))}`),e.nextElementSibling):this.fetchData("data",{id:t,element:e})},this.refreshAssignment=(t,e)=>{const i=this.getRenderRoot().querySelector("#case-data");let s=t;if(i){if(this.content={},gt(i,this.content),s){"svg"===s.tagName&&(s=s.parentNode);const t=s.getAttribute("data-action-click"),e=s.getAttribute("data-ref");null!==e&&null!=t&&("addRow"===t?((t,e,i)=>{let s=dt(t,e);if(null===s&&(s=[],ct(t,e,s)),Array.isArray(s))if(i&&"string"==typeof i){const t={},e=i.split(",");for(const i in e)t[e[i]]="";s.push(t)}else{if(0===s.length)return;const t={...s[0]};ht(t),s.push(t)}})(this.content,e,s.getAttribute("data-newrow")):"deleteRow"===t&&((t,e)=>{let i,s=e;-1!==e.indexOf(").pyTemplate")&&(i=s.substring(e.lastIndexOf("(")+1,e.lastIndexOf(")")),s=s.substring(0,e.lastIndexOf("(")));const a=dt(t,s);if(Array.isArray(a))if(1!==a.length)if(i){if(a.length<i)return;a.splice(i-1,1)}else a.length-=1;else for(const t in a[0])"pxObjClass"!==t&&(a[0][t]="")})(this.content,e))}!0===this.bShowNew?this.sendData("refreshnew",{id:this.casetype,refreshFor:e}):this.sendData("refreshassignment",{id:this.assignmentID,actionid:this.actionID,refreshFor:e})}},this.clickHandler=t=>{let e=t.target;"svg"===e.tagName&&(e=e.parentNode);const i=e.getAttribute("data-action-click");e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e),ut(e,"click")?(this.refreshAssignment(e,pt(e,"click")),t.preventDefault()):"BUTTON"===e.tagName&&(t.preventDefault(),null!==e.getAttribute("data-submit")&&"save"!==e.getAttribute("data-submit")?this.submitForm(t,e.getAttribute("data-submit")):("addRow"===i||"deleteRow"===i)&&this.refreshAssignment(e))},this.changeHandler=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e.setCustomValidity(""),e.classList.remove("error-field"),ut(e,"change")&&this.refreshAssignment(e,pt(e,"change"))},this.keyupHandler=t=>{const e=t.target;"TEXTAREA"===e.tagName&&(e.style.cssText="height:auto; padding:0;",e.style.cssText=`height:${e.scrollHeight}px`)},this.focusHandler=t=>{const e=t.target;e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e)}}displayContent(){if(console.log("displayContent v2"),this.bShowSave="false",""!==this.errorMsg)return t=this.errorMsg,e="true"===this.bShowCancel?this.resetError:null,U`
  <div class="error">${t}
  ${null!=e?U`
    <button type='button' title="Click to close the banner" class="pzhc pzbutton Light" @click="${e}">
    ${Nt()}</button>`:""}
  </div>`;var t,e,i,s,a,n,r,o;if(("oauth2password"===this.authentication||"oauth2clientcredentials"===this.authentication)&&""===this.token)return this.sendData("authenticate",{}),null;if(this.casetypes||"createNewWork"!==this.action&&"workList"!==this.action?"createNewWork"===this.action&&""===this.caseID&&this.casetypes&&this.casetypes[this.casetype]?this.sendData("newwork",{id:this.casetype}):""===this.name&&("openAssignment"===this.action&&""===this.assignmentID&&(this.assignmentID=this.caseID),""!==this.assignmentID?this.fetchData("assignment",{id:this.assignmentID}):""!==this.caseID&&this.fetchData("view",{id:this.caseID,actionid:"pyReview"})):(this.fetchData("portal"),"createNewWork"===this.action?this.bShowNew=!0:"workList"===this.action&&(this.bShowCancel="true")),this.bShowConfirm){const t=this.data.ID.split(" ")[1];return((t,e,i,s)=>U`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${t} (${e})</h2>
    <span class='badge-bg-info centered'><span class='badge_text'>${i}</span></span>
    ${s?U`<div class="flex layout-content-inline_middle margin-l-auto">
        ${Rt("Attachments",Pt(),"Simple",s)}
      </div>`:""}
  </div>
  <div class="flex layout-content-inline_middle success">
    Thank you. Your information has been submitted.
  </div>
  <h3>Case information</h3>
  <div id="case-data">${It()}</div>`)(this.casedata.name,t,this.casepyStatusWork,"true"===this.bShowAttachments?this.displayAttachments:null)}return""!==this.caseID||""!==this.assignmentID||this.bShowNew?U`
        ${zt(this.name,this.data,this.casedata,this.casepyStatusWork,this.numAttachments,this.displayActions,this.runAction,this.openCase,"true"===this.bShowAttachments?this.displayAttachments:null)}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
        <form id="case-data">${It()}</form>
      `:"workList"===this.action?(i=this.title,s=this.cases,a=this.displayCasesTypes,n=this.reloadWorkList,r="true"===this.bShowCreate?this.createCase:null,o=this.openCase,U`
  <div class="flex layout-content-inline_middle main-header">
    <h2>
      ${i}
      ${s.length>0?U`
            (${s.length})
          `:""}
    </h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      <button type='button' class="pzhc pzbutton Simple" arial-label='Click to refresh the worklist'
      title='Click to refresh the worklist' @click="${n}">Refresh</button>
      ${Tt("Create","Create a new case",a,r)}
    </div>
  </div>
  ${s.length>0?U`
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
            ${s.map((t=>U`
                <tr>
                  <td>${t.name}</td>
                  <td>${t.caseID}</td>
                  <td class="right-aligned">${t.urgency}</td>
                  <td class="right-aligned">
                    <button @click="${o}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">Open</button>
                  </td>
                </tr>
              `))}
          </tbody>
        </table>
      `:U`
        <div class="margin-t-2x">no assignments</div>
      `}
`):null}firstUpdated(){console.log("Initialization of the Web Component v2");const t=this.getRenderRoot();t&&(t.addEventListener("click",this.clickHandler),t.addEventListener("focusin",this.focusHandler),t.addEventListener("change",this.changeHandler),t.addEventListener("keyup",this.keyupHandler))}}var De;var ke;return ke="pega-mashup-light-v2",(t=>"function"==typeof t?((t,e)=>(window.customElements.define(t,e),e))(ke,t):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(ke,t))(De=class extends xe{createRenderRoot(){return this}getRenderRoot(){return this}render(){return U`
      ${this.displayContent()}
    `}})||De}();
