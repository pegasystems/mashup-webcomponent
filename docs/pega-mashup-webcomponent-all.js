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
     */const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,a=null)=>{for(;e!==a;){const a=e.nextSibling;t.removeChild(e),e=a}},a=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${a}--\x3e`,i=new RegExp(`${a}|${s}`),n="$lit$";class o{constructor(t,e){this.parts=[],this.element=e;const s=[],o=[],c=document.createTreeWalker(e.content,133,null,!1);let h=0,u=-1,p=0;const{strings:g,values:{length:f}}=t;for(;p<f;){const t=c.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:a}=e;let s=0;for(let t=0;t<a;t++)r(e[t].name,n)&&s++;for(;s-- >0;){const e=g[p],a=d.exec(e)[2],s=a.toLowerCase()+n,o=t.getAttribute(s);t.removeAttribute(s);const r=o.split(i);this.parts.push({type:"attribute",index:u,name:a,strings:r}),p+=r.length-1}}"TEMPLATE"===t.tagName&&(o.push(t),c.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(a)>=0){const a=t.parentNode,o=e.split(i),c=o.length-1;for(let e=0;e<c;e++){let s,i=o[e];if(""===i)s=l();else{const t=d.exec(i);null!==t&&r(t[2],n)&&(i=i.slice(0,t.index)+t[1]+t[2].slice(0,-n.length)+t[3]),s=document.createTextNode(i)}a.insertBefore(s,t),this.parts.push({type:"node",index:++u})}""===o[c]?(a.insertBefore(l(),t),s.push(t)):t.data=o[c],p+=c}}else if(8===t.nodeType)if(t.data===a){const e=t.parentNode;null!==t.previousSibling&&u!==h||(u++,e.insertBefore(l(),t)),h=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(s.push(t),u--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(a,e+1));)this.parts.push({type:"node",index:-1}),p++}}else c.currentNode=o.pop()}for(const t of s)t.parentNode.removeChild(t)}}const r=(t,e)=>{const a=t.length-e.length;return a>=0&&t.slice(a)===e},c=t=>-1!==t.index,l=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(t,e){const{element:{content:a},parts:s}=t,i=document.createTreeWalker(a,133,null,!1);let n=p(s),o=s[n],r=-1,c=0;const l=[];let d=null;for(;i.nextNode();){r++;const t=i.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(l.push(t),null===d&&(d=t)),null!==d&&c++;void 0!==o&&o.index===r;)o.index=null!==d?-1:o.index-c,n=p(s,n),o=s[n]}l.forEach((t=>t.parentNode.removeChild(t)))}const u=t=>{let e=11===t.nodeType?0:1;const a=document.createTreeWalker(t,133,null,!1);for(;a.nextNode();)e++;return e},p=(t,e=-1)=>{for(let a=e+1;a<t.length;a++){const e=t[a];if(c(e))return a}return-1};
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
const g=new WeakMap,f=t=>"function"==typeof t&&g.has(t),m={},y={};
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
class b{constructor(t,e,a){this.__parts=[],this.template=t,this.processor=e,this.options=a}update(t){let e=0;for(const a of this.__parts)void 0!==a&&a.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),a=[],s=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let n,o=0,r=0,l=i.nextNode();for(;o<s.length;)if(n=s[o],c(n)){for(;r<n.index;)r++,"TEMPLATE"===l.nodeName&&(a.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=a.pop(),l=i.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));o++}else this.__parts.push(void 0),o++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
     */const v=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),w=` ${a} `;class ${constructor(t,e,a,s){this.strings=t,this.values=e,this.type=a,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let o=0;o<t;o++){const t=this.strings[o],r=t.lastIndexOf("\x3c!--");i=(r>-1||i)&&-1===t.indexOf("--\x3e",r+1);const c=d.exec(t);e+=null===c?t+(i?w:s):t.substr(0,c.index)+c[1]+c[2]+n+c[3]+a}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==v&&(e=v.createHTML(e)),t.innerHTML=e,t}}
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
     */const x=t=>null===t||!("object"==typeof t||"function"==typeof t),_=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class C{constructor(t,e,a){this.dirty=!0,this.element=t,this.name=e,this.strings=a,this.parts=[];for(let t=0;t<a.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new k(this)}_getValue(){const t=this.strings,e=t.length-1,a=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=a[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!_(t))return t}let s="";for(let i=0;i<e;i++){s+=t[i];const e=a[i];if(void 0!==e){const t=e.value;if(x(t)||!_(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class k{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===m||x(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=m,t(this)}this.value!==m&&this.committer.commit()}}class S{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(l()),this.endNode=t.appendChild(l())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=l()),t.__insert(this.endNode=l())}insertAfterPart(t){t.__insert(this.startNode=l()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}const t=this.__pendingValue;t!==m&&(x(t)?t!==this.value&&this.__commitText(t):t instanceof $?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):_(t)?this.__commitIterable(t):t===y?(this.value=y,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,a="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=a:this.__commitNode(document.createTextNode(a)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof b&&this.value.template===e)this.value.update(t.values);else{const a=new b(e,t.processor,this.options),s=a._clone();a.update(t.values),this.__commitNode(s),this.value=a}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let a,s=0;for(const i of t)a=e[s],void 0===a&&(a=new S(this.options),e.push(a),0===s?a.appendIntoPart(this):a.insertAfterPart(e[s-1])),a.setValue(i),a.commit(),s++;s<e.length&&(e.length=s,this.clear(a&&a.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class D{constructor(t,e,a){if(this.value=void 0,this.__pendingValue=void 0,2!==a.length||""!==a[0]||""!==a[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=a}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}if(this.__pendingValue===m)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=m}}class I extends C{constructor(t,e,a){super(t,e,a),this.single=2===a.length&&""===a[0]&&""===a[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends k{}let T=!1;(()=>{try{const t={get capture(){return T=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class z{constructor(t,e,a){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=a,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}if(this.__pendingValue===m)return;const t=this.__pendingValue,e=this.value,a=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||a);a&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=E(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=m}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const E=t=>t&&(T?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
     */;function R(t){let e=M.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},M.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(a);return s=e.keyString.get(i),void 0===s&&(s=new o(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const M=new Map,N=new WeakMap,L=(t,a,s)=>{let i=N.get(a);void 0===i&&(e(a,a.firstChild),N.set(a,i=new S(Object.assign({templateFactory:R},s))),i.appendInto(a)),i.setValue(t),i.commit()};
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
class{handleAttributeExpressions(t,e,a,s){const i=e[0];if("."===i){return new I(t,e.slice(1),a).parts}if("@"===i)return[new z(t,e.slice(1),s.eventContext)];if("?"===i)return[new D(t,e.slice(1),a)];return new C(t,e,a).parts}handleTextExpression(t){return new S(t)}};
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
     */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const B=(t,...e)=>new $(t,e,"html",P)
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
     */,O=(t,e)=>`${t}--${e}`;let q=!0;void 0===window.ShadyCSS?q=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),q=!1);const H=t=>e=>{const s=O(e.type,t);let i=M.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},M.set(s,i));let n=i.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(a);if(n=i.keyString.get(r),void 0===n){const a=e.getTemplateElement();q&&window.ShadyCSS.prepareTemplateDom(a,t),n=new o(e,a),i.keyString.set(r,n)}return i.stringsArray.set(e.strings,n),n},F=["html","svg"],U=new Set,j=(t,e,a)=>{U.add(t);const s=a?a.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:n}=i;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(s,t);const o=document.createElement("style");for(let t=0;t<n;t++){const e=i[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{F.forEach((e=>{const a=M.get(O(e,t));void 0!==a&&a.keyString.forEach((t=>{const{element:{content:e}}=t,a=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{a.add(t)})),h(t,a)}))}))})(t);const r=s.content;a?function(t,e,a=null){const{element:{content:s},parts:i}=t;if(null==a)return void s.appendChild(e);const n=document.createTreeWalker(s,133,null,!1);let o=p(i),r=0,c=-1;for(;n.nextNode();)for(c++,n.currentNode===a&&(r=u(e),a.parentNode.insertBefore(e,a));-1!==o&&i[o].index===c;){if(r>0){for(;-1!==o;)i[o].index+=r,o=p(i,o);return}o=p(i,o)}}(a,o,r.firstChild):r.insertBefore(o,r.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const c=r.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(a){r.insertBefore(o,r.firstChild);const t=new Set;t.add(o),h(a,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const V={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},W=(t,e)=>e!==t&&(e==e||t==t),Z={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:W},J="finalized";class X extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,a)=>{const s=this._attributeNameForProperty(a,e);void 0!==s&&(this._attributeToPropertyMap.set(s,a),t.push(s))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=Z){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const a="symbol"==typeof t?Symbol():`__${t}`,s=this.getPropertyDescriptor(t,a,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,a){return{get(){return this[e]},set(s){const i=this[t];this[e]=s,this.requestUpdateInternal(t,i,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||Z}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(J)||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const a of e)this.createProperty(a,t[a])}}static _attributeNameForProperty(t,e){const a=e.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,a=W){return a(t,e)}static _propertyValueFromAttribute(t,e){const a=e.type,s=e.converter||V,i="function"==typeof s?s:s.fromAttribute;return i?i(t,a):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const a=e.type,s=e.converter;return(s&&s.toAttribute||V.toAttribute)(t,a)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,a){e!==a&&this._attributeToProperty(t,a)}_propertyToAttribute(t,e,a=Z){const s=this.constructor,i=s._attributeNameForProperty(t,a);if(void 0!==i){const t=s._propertyValueToAttribute(e,a);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const a=this.constructor,s=a._attributeToPropertyMap.get(t);if(void 0!==s){const t=a.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=a._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,a){let s=!0;if(void 0!==t){const i=this.constructor;a=a||i.getPropertyOptions(t),i._valueHasChanged(this[t],e,a.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==a.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,a))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}X.finalized=!0;
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
const K=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Y=Symbol();class G{constructor(t,e){if(e!==Y)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const Q={};class tt extends X{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,a)=>t.reduceRight(((t,a)=>Array.isArray(a)?e(a,t):(t.add(a),t)),a),a=e(t,new Set),s=[];a.forEach((t=>s.unshift(t))),this._styles=s}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!K){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new G(String(e),Y)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Q&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return Q}}tt.finalized=!0,tt.render=(t,a,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const i=s.scopeName,n=N.has(a),o=q&&11===a.nodeType&&!!a.host,r=o&&!U.has(i),c=r?document.createDocumentFragment():a;if(L(t,c,Object.assign({templateFactory:H(i)},s)),r){const t=N.get(c);N.delete(c);const s=t.value instanceof b?t.value.template:void 0;j(i,c,s),e(a,a.firstChild),a.appendChild(c),N.set(a,t)}!n&&o&&window.ShadyCSS.styleElement(a.host)},tt.shadowRootOptions={mode:"open"};
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
const et=new WeakMap,at=(st=t=>e=>{const a=et.get(e);if(void 0===t&&e instanceof k){if(void 0!==a||!et.has(e)){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else t!==a&&e.setValue(t);et.set(e,t)},(...t)=>{const e=st(...t);return g.set(e,!0),e});var st;class it{static create(...t){return new this(...t)}mixIn(t){return Object.assign(this,t)}clone(){const t=new this.constructor;return Object.assign(t,this),t}}class nt extends it{constructor(t=[],e=4*t.length){super();let a=t;if(a instanceof ArrayBuffer&&(a=new Uint8Array(a)),(a instanceof Int8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array)&&(a=new Uint8Array(a.buffer,a.byteOffset,a.byteLength)),a instanceof Uint8Array){const t=a.byteLength,e=[];for(let s=0;s<t;s+=1)e[s>>>2]|=a[s]<<24-s%4*8;this.words=e,this.sigBytes=t}else this.words=t,this.sigBytes=e}static random(t){const e=[],a=t=>{let e=t,a=987654321;const s=4294967295;return()=>{a=36969*(65535&a)+(a>>16)&s,e=18e3*(65535&e)+(e>>16)&s;let t=(a<<16)+e&s;return t/=4294967296,t+=.5,t*(Math.random()>.5?1:-1)}};for(let s,i=0;i<t;i+=4){const t=a(4294967296*(s||Math.random()));s=987654071*t(),e.push(4294967296*t()|0)}return new nt(e,t)}toString(t=ot){return t.stringify(this)}concat(t){const e=this.words,a=t.words,s=this.sigBytes,i=t.sigBytes;if(this.clamp(),s%4)for(let t=0;t<i;t+=1){const i=a[t>>>2]>>>24-t%4*8&255;e[s+t>>>2]|=i<<24-(s+t)%4*8}else for(let t=0;t<i;t+=4)e[s+t>>>2]=a[t>>>2];return this.sigBytes+=i,this}clamp(){const{words:t,sigBytes:e}=this;t[e>>>2]&=4294967295<<32-e%4*8,t.length=Math.ceil(e/4)}clone(){const t=super.clone.call(this);return t.words=this.words.slice(0),t}}const ot={stringify(t){const{words:e,sigBytes:a}=t,s=[];for(let t=0;t<a;t+=1){const a=e[t>>>2]>>>24-t%4*8&255;s.push((a>>>4).toString(16)),s.push((15&a).toString(16))}return s.join("")},parse(t){const e=t.length,a=[];for(let s=0;s<e;s+=2)a[s>>>3]|=parseInt(t.substr(s,2),16)<<24-s%8*4;return new nt(a,e/2)}},rt={stringify(t){const{words:e,sigBytes:a}=t,s=[];for(let t=0;t<a;t+=1){const a=e[t>>>2]>>>24-t%4*8&255;s.push(String.fromCharCode(a))}return s.join("")},parse(t){const e=t.length,a=[];for(let s=0;s<e;s+=1)a[s>>>2]|=(255&t.charCodeAt(s))<<24-s%4*8;return new nt(a,e)}},ct={stringify(t){try{return decodeURIComponent(escape(rt.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:t=>rt.parse(unescape(encodeURIComponent(t)))};class lt extends it{constructor(){super(),this._minBufferSize=0}reset(){this._data=new nt,this._nDataBytes=0}_append(t){let e=t;"string"==typeof e&&(e=ct.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes}_process(t){let e;const{_data:a,blockSize:s}=this,i=a.words,n=a.sigBytes;let o=n/(4*s);o=t?Math.ceil(o):Math.max((0|o)-this._minBufferSize,0);const r=o*s,c=Math.min(4*r,n);if(r){for(let t=0;t<r;t+=s)this._doProcessBlock(i,t);e=i.splice(0,r),a.sigBytes-=c}return new nt(e,c)}clone(){const t=super.clone.call(this);return t._data=this._data.clone(),t}}class dt extends lt{constructor(t){super(),this.blockSize=16,this.cfg=Object.assign(new it,t),this.reset()}static _createHelper(t){return(e,a)=>new t(a).finalize(e)}static _createHmacHelper(t){return(e,a)=>new ht(t,a).finalize(e)}reset(){super.reset.call(this),this._doReset()}update(t){return this._append(t),this._process(),this}finalize(t){t&&this._append(t);return this._doFinalize()}}class ht extends it{constructor(t,e){super();const a=new t;this._hasher=a;let s=e;"string"==typeof s&&(s=ct.parse(s));const i=a.blockSize,n=4*i;s.sigBytes>n&&(s=a.finalize(e)),s.clamp();const o=s.clone();this._oKey=o;const r=s.clone();this._iKey=r;const c=o.words,l=r.words;for(let t=0;t<i;t+=1)c[t]^=1549556828,l[t]^=909522486;o.sigBytes=n,r.sigBytes=n,this.reset()}reset(){const t=this._hasher;t.reset(),t.update(this._iKey)}update(t){return this._hasher.update(t),this}finalize(t){const e=this._hasher,a=e.finalize(t);e.reset();return e.finalize(this._oKey.clone().concat(a))}}const ut=nt;class pt extends it{constructor(t,e){super(),this.high=t,this.low=e}}class gt extends it{constructor(t=[],e=8*t.length){super(),this.words=t,this.sigBytes=e}toX32(){const t=this.words,e=t.length,a=[];for(let s=0;s<e;s+=1){const e=t[s];a.push(e.high),a.push(e.low)}return ut.create(a,this.sigBytes)}clone(){const t=super.clone.call(this);t.words=this.words.slice(0);const{words:e}=t,a=e.length;for(let t=0;t<a;t+=1)e[t]=e[t].clone();return t}}const ft={stringify(t){const{words:e,sigBytes:a}=t,s=this._map;t.clamp();const i=[];for(let t=0;t<a;t+=3){const n=(e[t>>>2]>>>24-t%4*8&255)<<16|(e[t+1>>>2]>>>24-(t+1)%4*8&255)<<8|e[t+2>>>2]>>>24-(t+2)%4*8&255;for(let e=0;e<4&&t+.75*e<a;e+=1)i.push(s.charAt(n>>>6*(3-e)&63))}const n=s.charAt(64);if(n)for(;i.length%4;)i.push(n);return i.join("")},parse(t){let e=t.length;const a=this._map;let s=this._reverseMap;if(!s){this._reverseMap=[],s=this._reverseMap;for(let t=0;t<a.length;t+=1)s[a.charCodeAt(t)]=t}const i=a.charAt(64);if(i){const a=t.indexOf(i);-1!==a&&(e=a)}return((t,e,a)=>{const s=[];let i=0;for(let n=0;n<e;n+=1)if(n%4){const e=a[t.charCodeAt(n-1)]<<n%4*2|a[t.charCodeAt(n)]>>>6-n%4*2;s[i>>>2]|=e<<24-i%4*8,i+=1}return nt.create(s,i)})(t,e,s)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},mt=[];for(let t=0;t<64;t+=1)mt[t]=4294967296*Math.abs(Math.sin(t+1))|0;const yt=(t,e,a,s,i,n,o)=>{const r=t+(e&a|~e&s)+i+o;return(r<<n|r>>>32-n)+e},bt=(t,e,a,s,i,n,o)=>{const r=t+(e&s|a&~s)+i+o;return(r<<n|r>>>32-n)+e},vt=(t,e,a,s,i,n,o)=>{const r=t+(e^a^s)+i+o;return(r<<n|r>>>32-n)+e},wt=(t,e,a,s,i,n,o)=>{const r=t+(a^(e|~s))+i+o;return(r<<n|r>>>32-n)+e};class $t extends dt{_doReset(){this._hash=new nt([1732584193,4023233417,2562383102,271733878])}_doProcessBlock(t,e){const a=t;for(let s=0;s<16;s+=1){const i=e+s,n=t[i];a[i]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8)}const s=this._hash.words,i=a[e+0],n=a[e+1],o=a[e+2],r=a[e+3],c=a[e+4],l=a[e+5],d=a[e+6],h=a[e+7],u=a[e+8],p=a[e+9],g=a[e+10],f=a[e+11],m=a[e+12],y=a[e+13],b=a[e+14],v=a[e+15];let w=s[0],$=s[1],x=s[2],_=s[3];w=yt(w,$,x,_,i,7,mt[0]),_=yt(_,w,$,x,n,12,mt[1]),x=yt(x,_,w,$,o,17,mt[2]),$=yt($,x,_,w,r,22,mt[3]),w=yt(w,$,x,_,c,7,mt[4]),_=yt(_,w,$,x,l,12,mt[5]),x=yt(x,_,w,$,d,17,mt[6]),$=yt($,x,_,w,h,22,mt[7]),w=yt(w,$,x,_,u,7,mt[8]),_=yt(_,w,$,x,p,12,mt[9]),x=yt(x,_,w,$,g,17,mt[10]),$=yt($,x,_,w,f,22,mt[11]),w=yt(w,$,x,_,m,7,mt[12]),_=yt(_,w,$,x,y,12,mt[13]),x=yt(x,_,w,$,b,17,mt[14]),$=yt($,x,_,w,v,22,mt[15]),w=bt(w,$,x,_,n,5,mt[16]),_=bt(_,w,$,x,d,9,mt[17]),x=bt(x,_,w,$,f,14,mt[18]),$=bt($,x,_,w,i,20,mt[19]),w=bt(w,$,x,_,l,5,mt[20]),_=bt(_,w,$,x,g,9,mt[21]),x=bt(x,_,w,$,v,14,mt[22]),$=bt($,x,_,w,c,20,mt[23]),w=bt(w,$,x,_,p,5,mt[24]),_=bt(_,w,$,x,b,9,mt[25]),x=bt(x,_,w,$,r,14,mt[26]),$=bt($,x,_,w,u,20,mt[27]),w=bt(w,$,x,_,y,5,mt[28]),_=bt(_,w,$,x,o,9,mt[29]),x=bt(x,_,w,$,h,14,mt[30]),$=bt($,x,_,w,m,20,mt[31]),w=vt(w,$,x,_,l,4,mt[32]),_=vt(_,w,$,x,u,11,mt[33]),x=vt(x,_,w,$,f,16,mt[34]),$=vt($,x,_,w,b,23,mt[35]),w=vt(w,$,x,_,n,4,mt[36]),_=vt(_,w,$,x,c,11,mt[37]),x=vt(x,_,w,$,h,16,mt[38]),$=vt($,x,_,w,g,23,mt[39]),w=vt(w,$,x,_,y,4,mt[40]),_=vt(_,w,$,x,i,11,mt[41]),x=vt(x,_,w,$,r,16,mt[42]),$=vt($,x,_,w,d,23,mt[43]),w=vt(w,$,x,_,p,4,mt[44]),_=vt(_,w,$,x,m,11,mt[45]),x=vt(x,_,w,$,v,16,mt[46]),$=vt($,x,_,w,o,23,mt[47]),w=wt(w,$,x,_,i,6,mt[48]),_=wt(_,w,$,x,h,10,mt[49]),x=wt(x,_,w,$,b,15,mt[50]),$=wt($,x,_,w,l,21,mt[51]),w=wt(w,$,x,_,m,6,mt[52]),_=wt(_,w,$,x,r,10,mt[53]),x=wt(x,_,w,$,g,15,mt[54]),$=wt($,x,_,w,n,21,mt[55]),w=wt(w,$,x,_,u,6,mt[56]),_=wt(_,w,$,x,v,10,mt[57]),x=wt(x,_,w,$,d,15,mt[58]),$=wt($,x,_,w,y,21,mt[59]),w=wt(w,$,x,_,c,6,mt[60]),_=wt(_,w,$,x,f,10,mt[61]),x=wt(x,_,w,$,o,15,mt[62]),$=wt($,x,_,w,p,21,mt[63]),s[0]=s[0]+w|0,s[1]=s[1]+$|0,s[2]=s[2]+x|0,s[3]=s[3]+_|0}_doFinalize(){const t=this._data,e=t.words,a=8*this._nDataBytes,s=8*t.sigBytes;e[s>>>5]|=128<<24-s%32;const i=Math.floor(a/4294967296),n=a;e[15+(s+64>>>9<<4)]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),e[14+(s+64>>>9<<4)]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8),t.sigBytes=4*(e.length+1),this._process();const o=this._hash,r=o.words;for(let t=0;t<4;t+=1){const e=r[t];r[t]=16711935&(e<<8|e>>>24)|4278255360&(e<<24|e>>>8)}return o}clone(){const t=super.clone.call(this);return t._hash=this._hash.clone(),t}}const xt=dt._createHelper($t),_t=dt._createHmacHelper($t);class Ct extends it{constructor(t){super(),this.cfg=Object.assign(new it,{keySize:4,hasher:$t,iterations:1},t)}compute(t,e){let a;const{cfg:s}=this,i=s.hasher.create(),n=nt.create(),o=n.words,{keySize:r,iterations:c}=s;for(;o.length<r;){a&&i.update(a),a=i.update(t).finalize(e),i.reset();for(let t=1;t<c;t+=1)a=i.finalize(a),i.reset();n.concat(a)}return n.sigBytes=4*r,n}}class kt extends lt{constructor(t,e,a){super(),this.cfg=Object.assign(new it,a),this._xformMode=t,this._key=e,this.reset()}static createEncryptor(t,e){return this.create(this._ENC_XFORM_MODE,t,e)}static createDecryptor(t,e){return this.create(this._DEC_XFORM_MODE,t,e)}static _createHelper(t){const e=t=>"string"==typeof t?Lt:Mt;return{encrypt:(a,s,i)=>e(s).encrypt(t,a,s,i),decrypt:(a,s,i)=>e(s).decrypt(t,a,s,i)}}reset(){super.reset.call(this),this._doReset()}process(t){return this._append(t),this._process()}finalize(t){t&&this._append(t);return this._doFinalize()}}kt._ENC_XFORM_MODE=1,kt._DEC_XFORM_MODE=2,kt.keySize=4,kt.ivSize=4;class St extends kt{constructor(...t){super(...t),this.blockSize=1}_doFinalize(){return this._process(!0)}}class Dt extends it{constructor(t,e){super(),this._cipher=t,this._iv=e}static createEncryptor(t,e){return this.Encryptor.create(t,e)}static createDecryptor(t,e){return this.Decryptor.create(t,e)}}function It(t,e,a){const s=t;let i;const n=this._iv;n?(i=n,this._iv=void 0):i=this._prevBlock;for(let t=0;t<a;t+=1)s[e+t]^=i[t]}class At extends Dt{}At.Encryptor=class extends At{processBlock(t,e){const a=this._cipher,{blockSize:s}=a;It.call(this,t,e,s),a.encryptBlock(t,e),this._prevBlock=t.slice(e,e+s)}},At.Decryptor=class extends At{processBlock(t,e){const a=this._cipher,{blockSize:s}=a,i=t.slice(e,e+s);a.decryptBlock(t,e),It.call(this,t,e,s),this._prevBlock=i}};const Tt={pad(t,e){const a=4*e,s=a-t.sigBytes%a,i=s<<24|s<<16|s<<8|s,n=[];for(let t=0;t<s;t+=4)n.push(i);const o=nt.create(n,s);t.concat(o)},unpad(t){const e=t,a=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=a}};class zt extends kt{constructor(t,e,a){super(t,e,Object.assign({mode:At,padding:Tt},a)),this.blockSize=4}reset(){let t;super.reset.call(this);const{cfg:e}=this,{iv:a,mode:s}=e;this._xformMode===this.constructor._ENC_XFORM_MODE?t=s.createEncryptor:(t=s.createDecryptor,this._minBufferSize=1),this._mode=t.call(s,this,a&&a.words),this._mode.__creator=t}_doProcessBlock(t,e){this._mode.processBlock(t,e)}_doFinalize(){let t;const{padding:e}=this.cfg;return this._xformMode===this.constructor._ENC_XFORM_MODE?(e.pad(this._data,this.blockSize),t=this._process(!0)):(t=this._process(!0),e.unpad(t)),t}}class Et extends it{constructor(t){super(),this.mixIn(t)}toString(t){return(t||this.formatter).stringify(this)}}const Rt={stringify(t){let e;const{ciphertext:a,salt:s}=t;return e=s?nt.create([1398893684,1701076831]).concat(s).concat(a):a,e.toString(ft)},parse(t){let e;const a=ft.parse(t),s=a.words;return 1398893684===s[0]&&1701076831===s[1]&&(e=nt.create(s.slice(2,4)),s.splice(0,4),a.sigBytes-=16),Et.create({ciphertext:a,salt:e})}};class Mt extends it{static encrypt(t,e,a,s){const i=Object.assign(new it,this.cfg,s),n=t.createEncryptor(a,i),o=n.finalize(e),r=n.cfg;return Et.create({ciphertext:o,key:a,iv:r.iv,algorithm:t,mode:r.mode,padding:r.padding,blockSize:n.blockSize,formatter:i.format})}static decrypt(t,e,a,s){let i=e;const n=Object.assign(new it,this.cfg,s);i=this._parse(i,n.format);return t.createDecryptor(a,n).finalize(i.ciphertext)}static _parse(t,e){return"string"==typeof t?e.parse(t,this):t}}Mt.cfg=Object.assign(new it,{format:Rt});const Nt={execute(t,e,a,s){let i=s;i||(i=nt.random(8));const n=Ct.create({keySize:e+a}).compute(t,i),o=nt.create(n.words.slice(e),4*a);return n.sigBytes=4*e,Et.create({key:n,iv:o,salt:i})}};class Lt extends Mt{static encrypt(t,e,a,s){const i=Object.assign(new it,this.cfg,s),n=i.kdf.execute(a,t.keySize,t.ivSize);i.iv=n.iv;const o=Mt.encrypt.call(this,t,e,n.key,i);return o.mixIn(n),o}static decrypt(t,e,a,s){let i=e;const n=Object.assign(new it,this.cfg,s);i=this._parse(i,n.format);const o=n.kdf.execute(a,t.keySize,t.ivSize,i.salt);n.iv=o.iv;return Mt.decrypt.call(this,t,i,o.key,n)}}Lt.cfg=Object.assign(Mt.cfg,{kdf:Nt});const Pt=t=>t<<8&4278255360|t>>>8&16711935,Bt={stringify(t){const{words:e,sigBytes:a}=t,s=[];for(let t=0;t<a;t+=2){const a=e[t>>>2]>>>16-t%4*8&65535;s.push(String.fromCharCode(a))}return s.join("")},parse(t){const e=t.length,a=[];for(let s=0;s<e;s+=1)a[s>>>1]|=t.charCodeAt(s)<<16-s%2*16;return nt.create(a,2*e)}},Ot=Bt,qt={stringify(t){const{words:e,sigBytes:a}=t,s=[];for(let t=0;t<a;t+=2){const a=Pt(e[t>>>2]>>>16-t%4*8&65535);s.push(String.fromCharCode(a))}return s.join("")},parse(t){const e=t.length,a=[];for(let s=0;s<e;s+=1)a[s>>>1]|=Pt(t.charCodeAt(s)<<16-s%2*16);return nt.create(a,2*e)}},Ht=[];class Ft extends dt{_doReset(){this._hash=new nt([1732584193,4023233417,2562383102,271733878,3285377520])}_doProcessBlock(t,e){const a=this._hash.words;let s=a[0],i=a[1],n=a[2],o=a[3],r=a[4];for(let a=0;a<80;a+=1){if(a<16)Ht[a]=0|t[e+a];else{const t=Ht[a-3]^Ht[a-8]^Ht[a-14]^Ht[a-16];Ht[a]=t<<1|t>>>31}let c=(s<<5|s>>>27)+r+Ht[a];c+=a<20?1518500249+(i&n|~i&o):a<40?1859775393+(i^n^o):a<60?(i&n|i&o|n&o)-1894007588:(i^n^o)-899497514,r=o,o=n,n=i<<30|i>>>2,i=s,s=c}a[0]=a[0]+s|0,a[1]=a[1]+i|0,a[2]=a[2]+n|0,a[3]=a[3]+o|0,a[4]=a[4]+r|0}_doFinalize(){const t=this._data,e=t.words,a=8*this._nDataBytes,s=8*t.sigBytes;return e[s>>>5]|=128<<24-s%32,e[14+(s+64>>>9<<4)]=Math.floor(a/4294967296),e[15+(s+64>>>9<<4)]=a,t.sigBytes=4*e.length,this._process(),this._hash}clone(){const t=super.clone.call(this);return t._hash=this._hash.clone(),t}}const Ut=dt._createHelper(Ft),jt=dt._createHmacHelper(Ft),Vt=[],Wt=[],Zt=t=>{const e=Math.sqrt(t);for(let a=2;a<=e;a+=1)if(!(t%a))return!1;return!0},Jt=t=>4294967296*(t-(0|t))|0;let Xt=2,Kt=0;for(;Kt<64;)Zt(Xt)&&(Kt<8&&(Vt[Kt]=Jt(Xt**.5)),Wt[Kt]=Jt(Xt**(1/3)),Kt+=1),Xt+=1;const Yt=[];class Gt extends dt{_doReset(){this._hash=new nt(Vt.slice(0))}_doProcessBlock(t,e){const a=this._hash.words;let s=a[0],i=a[1],n=a[2],o=a[3],r=a[4],c=a[5],l=a[6],d=a[7];for(let a=0;a<64;a+=1){if(a<16)Yt[a]=0|t[e+a];else{const t=Yt[a-15],e=(t<<25|t>>>7)^(t<<14|t>>>18)^t>>>3,s=Yt[a-2],i=(s<<15|s>>>17)^(s<<13|s>>>19)^s>>>10;Yt[a]=e+Yt[a-7]+i+Yt[a-16]}const h=s&i^s&n^i&n,u=(s<<30|s>>>2)^(s<<19|s>>>13)^(s<<10|s>>>22),p=d+((r<<26|r>>>6)^(r<<21|r>>>11)^(r<<7|r>>>25))+(r&c^~r&l)+Wt[a]+Yt[a];d=l,l=c,c=r,r=o+p|0,o=n,n=i,i=s,s=p+(u+h)|0}a[0]=a[0]+s|0,a[1]=a[1]+i|0,a[2]=a[2]+n|0,a[3]=a[3]+o|0,a[4]=a[4]+r|0,a[5]=a[5]+c|0,a[6]=a[6]+l|0,a[7]=a[7]+d|0}_doFinalize(){const t=this._data,e=t.words,a=8*this._nDataBytes,s=8*t.sigBytes;return e[s>>>5]|=128<<24-s%32,e[14+(s+64>>>9<<4)]=Math.floor(a/4294967296),e[15+(s+64>>>9<<4)]=a,t.sigBytes=4*e.length,this._process(),this._hash}clone(){const t=super.clone.call(this);return t._hash=this._hash.clone(),t}}const Qt=dt._createHelper(Gt),te=dt._createHmacHelper(Gt);class ee extends Gt{_doReset(){this._hash=new nt([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])}_doFinalize(){const t=super._doFinalize.call(this);return t.sigBytes-=4,t}}const ae=Gt._createHelper(ee),se=Gt._createHmacHelper(ee),ie=[new pt(1116352408,3609767458),new pt(1899447441,602891725),new pt(3049323471,3964484399),new pt(3921009573,2173295548),new pt(961987163,4081628472),new pt(1508970993,3053834265),new pt(2453635748,2937671579),new pt(2870763221,3664609560),new pt(3624381080,2734883394),new pt(310598401,1164996542),new pt(607225278,1323610764),new pt(1426881987,3590304994),new pt(1925078388,4068182383),new pt(2162078206,991336113),new pt(2614888103,633803317),new pt(3248222580,3479774868),new pt(3835390401,2666613458),new pt(4022224774,944711139),new pt(264347078,2341262773),new pt(604807628,2007800933),new pt(770255983,1495990901),new pt(1249150122,1856431235),new pt(1555081692,3175218132),new pt(1996064986,2198950837),new pt(2554220882,3999719339),new pt(2821834349,766784016),new pt(2952996808,2566594879),new pt(3210313671,3203337956),new pt(3336571891,1034457026),new pt(3584528711,2466948901),new pt(113926993,3758326383),new pt(338241895,168717936),new pt(666307205,1188179964),new pt(773529912,1546045734),new pt(1294757372,1522805485),new pt(1396182291,2643833823),new pt(1695183700,2343527390),new pt(1986661051,1014477480),new pt(2177026350,1206759142),new pt(2456956037,344077627),new pt(2730485921,1290863460),new pt(2820302411,3158454273),new pt(3259730800,3505952657),new pt(3345764771,106217008),new pt(3516065817,3606008344),new pt(3600352804,1432725776),new pt(4094571909,1467031594),new pt(275423344,851169720),new pt(430227734,3100823752),new pt(506948616,1363258195),new pt(659060556,3750685593),new pt(883997877,3785050280),new pt(958139571,3318307427),new pt(1322822218,3812723403),new pt(1537002063,2003034995),new pt(1747873779,3602036899),new pt(1955562222,1575990012),new pt(2024104815,1125592928),new pt(2227730452,2716904306),new pt(2361852424,442776044),new pt(2428436474,593698344),new pt(2756734187,3733110249),new pt(3204031479,2999351573),new pt(3329325298,3815920427),new pt(3391569614,3928383900),new pt(3515267271,566280711),new pt(3940187606,3454069534),new pt(4118630271,4000239992),new pt(116418474,1914138554),new pt(174292421,2731055270),new pt(289380356,3203993006),new pt(460393269,320620315),new pt(685471733,587496836),new pt(852142971,1086792851),new pt(1017036298,365543100),new pt(1126000580,2618297676),new pt(1288033470,3409855158),new pt(1501505948,4234509866),new pt(1607167915,987167468),new pt(1816402316,1246189591)],ne=[];for(let t=0;t<80;t+=1)ne[t]=new pt;class oe extends dt{constructor(){super(),this.blockSize=32}_doReset(){this._hash=new gt([new pt(1779033703,4089235720),new pt(3144134277,2227873595),new pt(1013904242,4271175723),new pt(2773480762,1595750129),new pt(1359893119,2917565137),new pt(2600822924,725511199),new pt(528734635,4215389547),new pt(1541459225,327033209)])}_doProcessBlock(t,e){const a=this._hash.words,s=a[0],i=a[1],n=a[2],o=a[3],r=a[4],c=a[5],l=a[6],d=a[7],h=s.high;let u=s.low;const p=i.high;let g=i.low;const f=n.high;let m=n.low;const y=o.high;let b=o.low;const v=r.high;let w=r.low;const $=c.high;let x=c.low;const _=l.high;let C=l.low;const k=d.high;let S=d.low,D=h,I=u,A=p,T=g,z=f,E=m,R=y,M=b,N=v,L=w,P=$,B=x,O=_,q=C,H=k,F=S;for(let a=0;a<80;a+=1){let s,i;const n=ne[a];if(a<16)n.high=0|t[e+2*a],i=n.high,n.low=0|t[e+2*a+1],s=n.low;else{const t=ne[a-15],e=t.high,o=t.low,r=(e>>>1|o<<31)^(e>>>8|o<<24)^e>>>7,c=(o>>>1|e<<31)^(o>>>8|e<<24)^(o>>>7|e<<25),l=ne[a-2],d=l.high,h=l.low,u=(d>>>19|h<<13)^(d<<3|h>>>29)^d>>>6,p=(h>>>19|d<<13)^(h<<3|d>>>29)^(h>>>6|d<<26),g=ne[a-7],f=g.high,m=g.low,y=ne[a-16],b=y.high,v=y.low;s=c+m,i=r+f+(s>>>0<c>>>0?1:0),s+=p,i=i+u+(s>>>0<p>>>0?1:0),s+=v,i=i+b+(s>>>0<v>>>0?1:0),n.high=i,n.low=s}const o=N&P^~N&O,r=L&B^~L&q,c=D&A^D&z^A&z,l=I&T^I&E^T&E,d=(D>>>28|I<<4)^(D<<30|I>>>2)^(D<<25|I>>>7),h=(I>>>28|D<<4)^(I<<30|D>>>2)^(I<<25|D>>>7),u=(N>>>14|L<<18)^(N>>>18|L<<14)^(N<<23|L>>>9),p=(L>>>14|N<<18)^(L>>>18|N<<14)^(L<<23|N>>>9),g=ie[a],f=g.high,m=g.low;let y=F+p,b=H+u+(y>>>0<F>>>0?1:0);y+=r,b=b+o+(y>>>0<r>>>0?1:0),y+=m,b=b+f+(y>>>0<m>>>0?1:0),y+=s,b=b+i+(y>>>0<s>>>0?1:0);const v=h+l;H=O,F=q,O=P,q=B,P=N,B=L,L=M+y|0,N=R+b+(L>>>0<M>>>0?1:0)|0,R=z,M=E,z=A,E=T,A=D,T=I,I=y+v|0,D=b+(d+c+(v>>>0<h>>>0?1:0))+(I>>>0<y>>>0?1:0)|0}s.low=u+I,u=s.low,s.high=h+D+(u>>>0<I>>>0?1:0),i.low=g+T,g=i.low,i.high=p+A+(g>>>0<T>>>0?1:0),n.low=m+E,m=n.low,n.high=f+z+(m>>>0<E>>>0?1:0),o.low=b+M,b=o.low,o.high=y+R+(b>>>0<M>>>0?1:0),r.low=w+L,w=r.low,r.high=v+N+(w>>>0<L>>>0?1:0),c.low=x+B,x=c.low,c.high=$+P+(x>>>0<B>>>0?1:0),l.low=C+q,C=l.low,l.high=_+O+(C>>>0<q>>>0?1:0),d.low=S+F,S=d.low,d.high=k+H+(S>>>0<F>>>0?1:0)}_doFinalize(){const t=this._data,e=t.words,a=8*this._nDataBytes,s=8*t.sigBytes;e[s>>>5]|=128<<24-s%32,e[30+(s+128>>>10<<5)]=Math.floor(a/4294967296),e[31+(s+128>>>10<<5)]=a,t.sigBytes=4*e.length,this._process();return this._hash.toX32()}clone(){const t=super.clone.call(this);return t._hash=this._hash.clone(),t}}const re=dt._createHelper(oe),ce=dt._createHmacHelper(oe);class le extends oe{_doReset(){this._hash=new gt([new pt(3418070365,3238371032),new pt(1654270250,914150663),new pt(2438529370,812702999),new pt(355462360,4144912697),new pt(1731405415,4290775857),new pt(2394180231,1750603025),new pt(3675008525,1694076839),new pt(1203062813,3204075428)])}_doFinalize(){const t=super._doFinalize.call(this);return t.sigBytes-=16,t}}const de=oe._createHelper(le),he=oe._createHmacHelper(le),ue=[],pe=[],ge=[];let fe=1,me=0;for(let t=0;t<24;t+=1){ue[fe+5*me]=(t+1)*(t+2)/2%64;const e=(2*fe+3*me)%5;fe=me%5,me=e}for(let t=0;t<5;t+=1)for(let e=0;e<5;e+=1)pe[t+5*e]=e+(2*t+3*e)%5*5;let ye=1;for(let t=0;t<24;t+=1){let e=0,a=0;for(let t=0;t<7;t+=1){if(1&ye){const s=(1<<t)-1;s<32?a^=1<<s:e^=1<<s-32}128&ye?ye=ye<<1^113:ye<<=1}ge[t]=pt.create(e,a)}const be=[];for(let t=0;t<25;t+=1)be[t]=pt.create();class ve extends dt{constructor(t){super(Object.assign({outputLength:512},t))}_doReset(){this._state=[];const t=this._state;for(let e=0;e<25;e+=1)t[e]=new pt;this.blockSize=(1600-2*this.cfg.outputLength)/32}_doProcessBlock(t,e){const a=this._state,s=this.blockSize/2;for(let i=0;i<s;i+=1){let s=t[e+2*i],n=t[e+2*i+1];s=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),n=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8);const o=a[i];o.high^=n,o.low^=s}for(let t=0;t<24;t+=1){for(let t=0;t<5;t+=1){let e=0,s=0;for(let i=0;i<5;i+=1){const n=a[t+5*i];e^=n.high,s^=n.low}const i=be[t];i.high=e,i.low=s}for(let t=0;t<5;t+=1){const e=be[(t+4)%5],s=be[(t+1)%5],i=s.high,n=s.low,o=e.high^(i<<1|n>>>31),r=e.low^(n<<1|i>>>31);for(let e=0;e<5;e+=1){const s=a[t+5*e];s.high^=o,s.low^=r}}for(let t=1;t<25;t+=1){let e,s;const i=a[t],n=i.high,o=i.low,r=ue[t];r<32?(e=n<<r|o>>>32-r,s=o<<r|n>>>32-r):(e=o<<r-32|n>>>64-r,s=n<<r-32|o>>>64-r);const c=be[pe[t]];c.high=e,c.low=s}const e=be[0],s=a[0];e.high=s.high,e.low=s.low;for(let t=0;t<5;t+=1)for(let e=0;e<5;e+=1){const s=t+5*e,i=a[s],n=be[s],o=be[(t+1)%5+5*e],r=be[(t+2)%5+5*e];i.high=n.high^~o.high&r.high,i.low=n.low^~o.low&r.low}const i=a[0],n=ge[t];i.high^=n.high,i.low^=n.low}}_doFinalize(){const t=this._data,e=t.words,a=8*t.sigBytes,s=32*this.blockSize;e[a>>>5]|=1<<24-a%32,e[(Math.ceil((a+1)/s)*s>>>5)-1]|=128,t.sigBytes=4*e.length,this._process();const i=this._state,n=this.cfg.outputLength/8,o=n/8,r=[];for(let t=0;t<o;t+=1){const e=i[t];let a=e.high,s=e.low;a=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),s=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),r.push(s),r.push(a)}return new nt(r,n)}clone(){const t=super.clone.call(this);t._state=this._state.slice(0);const e=t._state;for(let t=0;t<25;t+=1)e[t]=e[t].clone();return t}}const we=dt._createHelper(ve),$e=dt._createHmacHelper(ve),xe=nt.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),_e=nt.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),Ce=nt.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),ke=nt.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),Se=nt.create([0,1518500249,1859775393,2400959708,2840853838]),De=nt.create([1352829926,1548603684,1836072691,2053994217,0]),Ie=(t,e,a)=>t^e^a,Ae=(t,e,a)=>t&e|~t&a,Te=(t,e,a)=>(t|~e)^a,ze=(t,e,a)=>t&a|e&~a,Ee=(t,e,a)=>t^(e|~a),Re=(t,e)=>t<<e|t>>>32-e;class Me extends dt{_doReset(){this._hash=nt.create([1732584193,4023233417,2562383102,271733878,3285377520])}_doProcessBlock(t,e){const a=t;for(let t=0;t<16;t+=1){const s=e+t,i=a[s];a[s]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8)}const s=this._hash.words,i=Se.words,n=De.words,o=xe.words,r=_e.words,c=Ce.words,l=ke.words;let d,h=s[0],u=s[1],p=s[2],g=s[3],f=s[4],m=s[0],y=s[1],b=s[2],v=s[3],w=s[4];for(let t=0;t<80;t+=1)d=h+a[e+o[t]]|0,d+=t<16?Ie(u,p,g)+i[0]:t<32?Ae(u,p,g)+i[1]:t<48?Te(u,p,g)+i[2]:t<64?ze(u,p,g)+i[3]:Ee(u,p,g)+i[4],d|=0,d=Re(d,c[t]),d=d+f|0,h=f,f=g,g=Re(p,10),p=u,u=d,d=m+a[e+r[t]]|0,d+=t<16?Ee(y,b,v)+n[0]:t<32?ze(y,b,v)+n[1]:t<48?Te(y,b,v)+n[2]:t<64?Ae(y,b,v)+n[3]:Ie(y,b,v)+n[4],d|=0,d=Re(d,l[t]),d=d+w|0,m=w,w=v,v=Re(b,10),b=y,y=d;d=s[1]+p+v|0,s[1]=s[2]+g+w|0,s[2]=s[3]+f+m|0,s[3]=s[4]+h+y|0,s[4]=s[0]+u+b|0,s[0]=d}_doFinalize(){const t=this._data,e=t.words,a=8*this._nDataBytes,s=8*t.sigBytes;e[s>>>5]|=128<<24-s%32,e[14+(s+64>>>9<<4)]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),t.sigBytes=4*(e.length+1),this._process();const i=this._hash,n=i.words;for(let t=0;t<5;t+=1){const e=n[t];n[t]=16711935&(e<<8|e>>>24)|4278255360&(e<<24|e>>>8)}return i}clone(){const t=super.clone.call(this);return t._hash=this._hash.clone(),t}}const Ne=dt._createHelper(Me),Le=dt._createHmacHelper(Me);class Pe extends it{constructor(t){super(),this.cfg=Object.assign(new it,{keySize:4,hasher:Ft,iterations:1},t)}compute(t,e){const{cfg:a}=this,s=ht.create(a.hasher,t),i=nt.create(),n=nt.create([1]),o=i.words,r=n.words,{keySize:c,iterations:l}=a;for(;o.length<c;){const t=s.update(e).finalize(n);s.reset();const a=t.words,o=a.length;let c=t;for(let t=1;t<l;t+=1){c=s.finalize(c),s.reset();const t=c.words;for(let e=0;e<o;e+=1)a[e]^=t[e]}i.concat(t),r[0]+=1}return i.sigBytes=4*c,i}}const Be=[],Oe=[],qe=[],He=[],Fe=[],Ue=[],je=[],Ve=[],We=[],Ze=[],Je=[];for(let t=0;t<256;t+=1)Je[t]=t<128?t<<1:t<<1^283;let Xe=0,Ke=0;for(let t=0;t<256;t+=1){let t=Ke^Ke<<1^Ke<<2^Ke<<3^Ke<<4;t=t>>>8^255&t^99,Be[Xe]=t,Oe[t]=Xe;const e=Je[Xe],a=Je[e],s=Je[a];let i=257*Je[t]^16843008*t;qe[Xe]=i<<24|i>>>8,He[Xe]=i<<16|i>>>16,Fe[Xe]=i<<8|i>>>24,Ue[Xe]=i,i=16843009*s^65537*a^257*e^16843008*Xe,je[t]=i<<24|i>>>8,Ve[t]=i<<16|i>>>16,We[t]=i<<8|i>>>24,Ze[t]=i,Xe?(Xe=e^Je[Je[Je[s^e]]],Ke^=Je[Je[Ke]]):(Ke=1,Xe=Ke)}const Ye=[0,1,2,4,8,16,32,64,128,27,54];class Ge extends zt{_doReset(){let t;if(this._nRounds&&this._keyPriorReset===this._key)return;this._keyPriorReset=this._key;const e=this._keyPriorReset,a=e.words,s=e.sigBytes/4;this._nRounds=s+6;const i=4*(this._nRounds+1);this._keySchedule=[];const n=this._keySchedule;for(let e=0;e<i;e+=1)e<s?n[e]=a[e]:(t=n[e-1],e%s?s>6&&e%s==4&&(t=Be[t>>>24]<<24|Be[t>>>16&255]<<16|Be[t>>>8&255]<<8|Be[255&t]):(t=t<<8|t>>>24,t=Be[t>>>24]<<24|Be[t>>>16&255]<<16|Be[t>>>8&255]<<8|Be[255&t],t^=Ye[e/s|0]<<24),n[e]=n[e-s]^t);this._invKeySchedule=[];const o=this._invKeySchedule;for(let e=0;e<i;e+=1){const a=i-e;t=e%4?n[a]:n[a-4],o[e]=e<4||a<=4?t:je[Be[t>>>24]]^Ve[Be[t>>>16&255]]^We[Be[t>>>8&255]]^Ze[Be[255&t]]}}encryptBlock(t,e){this._doCryptBlock(t,e,this._keySchedule,qe,He,Fe,Ue,Be)}decryptBlock(t,e){const a=t;let s=a[e+1];a[e+1]=a[e+3],a[e+3]=s,this._doCryptBlock(a,e,this._invKeySchedule,je,Ve,We,Ze,Oe),s=a[e+1],a[e+1]=a[e+3],a[e+3]=s}_doCryptBlock(t,e,a,s,i,n,o,r){const c=t,l=this._nRounds;let d=c[e]^a[0],h=c[e+1]^a[1],u=c[e+2]^a[2],p=c[e+3]^a[3],g=4;for(let t=1;t<l;t+=1){const t=s[d>>>24]^i[h>>>16&255]^n[u>>>8&255]^o[255&p]^a[g];g+=1;const e=s[h>>>24]^i[u>>>16&255]^n[p>>>8&255]^o[255&d]^a[g];g+=1;const r=s[u>>>24]^i[p>>>16&255]^n[d>>>8&255]^o[255&h]^a[g];g+=1;const c=s[p>>>24]^i[d>>>16&255]^n[h>>>8&255]^o[255&u]^a[g];g+=1,d=t,h=e,u=r,p=c}const f=(r[d>>>24]<<24|r[h>>>16&255]<<16|r[u>>>8&255]<<8|r[255&p])^a[g];g+=1;const m=(r[h>>>24]<<24|r[u>>>16&255]<<16|r[p>>>8&255]<<8|r[255&d])^a[g];g+=1;const y=(r[u>>>24]<<24|r[p>>>16&255]<<16|r[d>>>8&255]<<8|r[255&h])^a[g];g+=1;const b=(r[p>>>24]<<24|r[d>>>16&255]<<16|r[h>>>8&255]<<8|r[255&u])^a[g];g+=1,c[e]=f,c[e+1]=m,c[e+2]=y,c[e+3]=b}}Ge.keySize=8;const Qe=zt._createHelper(Ge),ta=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],ea=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],aa=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],sa=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],ia=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679];function na(t,e){const a=(this._lBlock>>>t^this._rBlock)&e;this._rBlock^=a,this._lBlock^=a<<t}function oa(t,e){const a=(this._rBlock>>>t^this._lBlock)&e;this._lBlock^=a,this._rBlock^=a<<t}class ra extends zt{_doReset(){const t=this._key.words,e=[];for(let a=0;a<56;a+=1){const s=ta[a]-1;e[a]=t[s>>>5]>>>31-s%32&1}this._subKeys=[];const a=this._subKeys;for(let t=0;t<16;t+=1){a[t]=[];const s=a[t],i=aa[t];for(let t=0;t<24;t+=1)s[t/6|0]|=e[(ea[t]-1+i)%28]<<31-t%6,s[4+(t/6|0)]|=e[28+(ea[t+24]-1+i)%28]<<31-t%6;s[0]=s[0]<<1|s[0]>>>31;for(let t=1;t<7;t+=1)s[t]>>>=4*(t-1)+3;s[7]=s[7]<<5|s[7]>>>27}this._invSubKeys=[];const s=this._invSubKeys;for(let t=0;t<16;t+=1)s[t]=a[15-t]}encryptBlock(t,e){this._doCryptBlock(t,e,this._subKeys)}decryptBlock(t,e){this._doCryptBlock(t,e,this._invSubKeys)}_doCryptBlock(t,e,a){const s=t;this._lBlock=t[e],this._rBlock=t[e+1],na.call(this,4,252645135),na.call(this,16,65535),oa.call(this,2,858993459),oa.call(this,8,16711935),na.call(this,1,1431655765);for(let t=0;t<16;t+=1){const e=a[t],s=this._lBlock,i=this._rBlock;let n=0;for(let t=0;t<8;t+=1)n|=sa[t][((i^e[t])&ia[t])>>>0];this._lBlock=i,this._rBlock=s^n}const i=this._lBlock;this._lBlock=this._rBlock,this._rBlock=i,na.call(this,1,1431655765),oa.call(this,8,16711935),oa.call(this,2,858993459),na.call(this,16,65535),na.call(this,4,252645135),s[e]=this._lBlock,s[e+1]=this._rBlock}}ra.keySize=2,ra.ivSize=2,ra.blockSize=2;const ca=zt._createHelper(ra);class la extends zt{_doReset(){const t=this._key.words;if(2!==t.length&&4!==t.length&&t.length<6)throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");const e=t.slice(0,2),a=t.length<4?t.slice(0,2):t.slice(2,4),s=t.length<6?t.slice(0,2):t.slice(4,6);this._des1=ra.createEncryptor(nt.create(e)),this._des2=ra.createEncryptor(nt.create(a)),this._des3=ra.createEncryptor(nt.create(s))}encryptBlock(t,e){this._des1.encryptBlock(t,e),this._des2.decryptBlock(t,e),this._des3.encryptBlock(t,e)}decryptBlock(t,e){this._des3.decryptBlock(t,e),this._des2.encryptBlock(t,e),this._des1.decryptBlock(t,e)}}la.keySize=6,la.ivSize=2,la.blockSize=2;const da=zt._createHelper(la),ha=[],ua=[],pa=[];function ga(){const t=this._X,e=this._C;for(let t=0;t<8;t+=1)ua[t]=e[t];e[0]=e[0]+1295307597+this._b|0,e[1]=e[1]+3545052371+(e[0]>>>0<ua[0]>>>0?1:0)|0,e[2]=e[2]+886263092+(e[1]>>>0<ua[1]>>>0?1:0)|0,e[3]=e[3]+1295307597+(e[2]>>>0<ua[2]>>>0?1:0)|0,e[4]=e[4]+3545052371+(e[3]>>>0<ua[3]>>>0?1:0)|0,e[5]=e[5]+886263092+(e[4]>>>0<ua[4]>>>0?1:0)|0,e[6]=e[6]+1295307597+(e[5]>>>0<ua[5]>>>0?1:0)|0,e[7]=e[7]+3545052371+(e[6]>>>0<ua[6]>>>0?1:0)|0,this._b=e[7]>>>0<ua[7]>>>0?1:0;for(let a=0;a<8;a+=1){const s=t[a]+e[a],i=65535&s,n=s>>>16,o=((i*i>>>17)+i*n>>>15)+n*n,r=((4294901760&s)*s|0)+((65535&s)*s|0);pa[a]=o^r}t[0]=pa[0]+(pa[7]<<16|pa[7]>>>16)+(pa[6]<<16|pa[6]>>>16)|0,t[1]=pa[1]+(pa[0]<<8|pa[0]>>>24)+pa[7]|0,t[2]=pa[2]+(pa[1]<<16|pa[1]>>>16)+(pa[0]<<16|pa[0]>>>16)|0,t[3]=pa[3]+(pa[2]<<8|pa[2]>>>24)+pa[1]|0,t[4]=pa[4]+(pa[3]<<16|pa[3]>>>16)+(pa[2]<<16|pa[2]>>>16)|0,t[5]=pa[5]+(pa[4]<<8|pa[4]>>>24)+pa[3]|0,t[6]=pa[6]+(pa[5]<<16|pa[5]>>>16)+(pa[4]<<16|pa[4]>>>16)|0,t[7]=pa[7]+(pa[6]<<8|pa[6]>>>24)+pa[5]|0}class fa extends St{constructor(...t){super(...t),this.blockSize=4,this.ivSize=2}_doReset(){const t=this._key.words,{iv:e}=this.cfg;for(let e=0;e<4;e+=1)t[e]=16711935&(t[e]<<8|t[e]>>>24)|4278255360&(t[e]<<24|t[e]>>>8);this._X=[t[0],t[3]<<16|t[2]>>>16,t[1],t[0]<<16|t[3]>>>16,t[2],t[1]<<16|t[0]>>>16,t[3],t[2]<<16|t[1]>>>16];const a=this._X;this._C=[t[2]<<16|t[2]>>>16,4294901760&t[0]|65535&t[1],t[3]<<16|t[3]>>>16,4294901760&t[1]|65535&t[2],t[0]<<16|t[0]>>>16,4294901760&t[2]|65535&t[3],t[1]<<16|t[1]>>>16,4294901760&t[3]|65535&t[0]];const s=this._C;this._b=0;for(let t=0;t<4;t+=1)ga.call(this);for(let t=0;t<8;t+=1)s[t]^=a[t+4&7];if(e){const t=e.words,a=t[0],i=t[1],n=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),o=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),r=n>>>16|4294901760&o,c=o<<16|65535&n;s[0]^=n,s[1]^=r,s[2]^=o,s[3]^=c,s[4]^=n,s[5]^=r,s[6]^=o,s[7]^=c;for(let t=0;t<4;t+=1)ga.call(this)}}_doProcessBlock(t,e){const a=t,s=this._X;ga.call(this),ha[0]=s[0]^s[5]>>>16^s[3]<<16,ha[1]=s[2]^s[7]>>>16^s[5]<<16,ha[2]=s[4]^s[1]>>>16^s[7]<<16,ha[3]=s[6]^s[3]>>>16^s[1]<<16;for(let t=0;t<4;t+=1)ha[t]=16711935&(ha[t]<<8|ha[t]>>>24)|4278255360&(ha[t]<<24|ha[t]>>>8),a[e+t]^=ha[t]}}const ma=St._createHelper(fa),ya=[],ba=[],va=[];function wa(){const t=this._X,e=this._C;for(let t=0;t<8;t+=1)ba[t]=e[t];e[0]=e[0]+1295307597+this._b|0,e[1]=e[1]+3545052371+(e[0]>>>0<ba[0]>>>0?1:0)|0,e[2]=e[2]+886263092+(e[1]>>>0<ba[1]>>>0?1:0)|0,e[3]=e[3]+1295307597+(e[2]>>>0<ba[2]>>>0?1:0)|0,e[4]=e[4]+3545052371+(e[3]>>>0<ba[3]>>>0?1:0)|0,e[5]=e[5]+886263092+(e[4]>>>0<ba[4]>>>0?1:0)|0,e[6]=e[6]+1295307597+(e[5]>>>0<ba[5]>>>0?1:0)|0,e[7]=e[7]+3545052371+(e[6]>>>0<ba[6]>>>0?1:0)|0,this._b=e[7]>>>0<ba[7]>>>0?1:0;for(let a=0;a<8;a+=1){const s=t[a]+e[a],i=65535&s,n=s>>>16,o=((i*i>>>17)+i*n>>>15)+n*n,r=((4294901760&s)*s|0)+((65535&s)*s|0);va[a]=o^r}t[0]=va[0]+(va[7]<<16|va[7]>>>16)+(va[6]<<16|va[6]>>>16)|0,t[1]=va[1]+(va[0]<<8|va[0]>>>24)+va[7]|0,t[2]=va[2]+(va[1]<<16|va[1]>>>16)+(va[0]<<16|va[0]>>>16)|0,t[3]=va[3]+(va[2]<<8|va[2]>>>24)+va[1]|0,t[4]=va[4]+(va[3]<<16|va[3]>>>16)+(va[2]<<16|va[2]>>>16)|0,t[5]=va[5]+(va[4]<<8|va[4]>>>24)+va[3]|0,t[6]=va[6]+(va[5]<<16|va[5]>>>16)+(va[4]<<16|va[4]>>>16)|0,t[7]=va[7]+(va[6]<<8|va[6]>>>24)+va[5]|0}class $a extends St{constructor(...t){super(...t),this.blockSize=4,this.ivSize=2}_doReset(){const t=this._key.words,{iv:e}=this.cfg;this._X=[t[0],t[3]<<16|t[2]>>>16,t[1],t[0]<<16|t[3]>>>16,t[2],t[1]<<16|t[0]>>>16,t[3],t[2]<<16|t[1]>>>16];const a=this._X;this._C=[t[2]<<16|t[2]>>>16,4294901760&t[0]|65535&t[1],t[3]<<16|t[3]>>>16,4294901760&t[1]|65535&t[2],t[0]<<16|t[0]>>>16,4294901760&t[2]|65535&t[3],t[1]<<16|t[1]>>>16,4294901760&t[3]|65535&t[0]];const s=this._C;this._b=0;for(let t=0;t<4;t+=1)wa.call(this);for(let t=0;t<8;t+=1)s[t]^=a[t+4&7];if(e){const t=e.words,a=t[0],i=t[1],n=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),o=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),r=n>>>16|4294901760&o,c=o<<16|65535&n;s[0]^=n,s[1]^=r,s[2]^=o,s[3]^=c,s[4]^=n,s[5]^=r,s[6]^=o,s[7]^=c;for(let t=0;t<4;t+=1)wa.call(this)}}_doProcessBlock(t,e){const a=t,s=this._X;wa.call(this),ya[0]=s[0]^s[5]>>>16^s[3]<<16,ya[1]=s[2]^s[7]>>>16^s[5]<<16,ya[2]=s[4]^s[1]>>>16^s[7]<<16,ya[3]=s[6]^s[3]>>>16^s[1]<<16;for(let t=0;t<4;t+=1)ya[t]=16711935&(ya[t]<<8|ya[t]>>>24)|4278255360&(ya[t]<<24|ya[t]>>>8),a[e+t]^=ya[t]}}const xa=St._createHelper($a);function _a(){const t=this._S;let e=this._i,a=this._j,s=0;for(let i=0;i<4;i+=1){e=(e+1)%256,a=(a+t[e])%256;const n=t[e];t[e]=t[a],t[a]=n,s|=t[(t[e]+t[a])%256]<<24-8*i}return this._i=e,this._j=a,s}class Ca extends St{_doReset(){const t=this._key,e=t.words,a=t.sigBytes;this._S=[];const s=this._S;for(let t=0;t<256;t+=1)s[t]=t;for(let t=0,i=0;t<256;t+=1){const n=t%a,o=e[n>>>2]>>>24-n%4*8&255;i=(i+s[t]+o)%256;const r=s[t];s[t]=s[i],s[i]=r}this._j=0,this._i=this._j}_doProcessBlock(t,e){t[e]^=_a.call(this)}}Ca.keySize=8,Ca.ivSize=0;const ka=St._createHelper(Ca);class Sa extends Ca{constructor(...t){super(...t),Object.assign(this.cfg,{drop:192})}_doReset(){super._doReset.call(this);for(let t=this.cfg.drop;t>0;t-=1)_a.call(this)}}const Da=St._createHelper(Sa);function Ia(t,e,a,s){const i=t;let n;const o=this._iv;o?(n=o.slice(0),this._iv=void 0):n=this._prevBlock,s.encryptBlock(n,0);for(let t=0;t<a;t+=1)i[e+t]^=n[t]}class Aa extends Dt{}Aa.Encryptor=class extends Aa{processBlock(t,e){const a=this._cipher,{blockSize:s}=a;Ia.call(this,t,e,s,a),this._prevBlock=t.slice(e,e+s)}},Aa.Decryptor=class extends Aa{processBlock(t,e){const a=this._cipher,{blockSize:s}=a,i=t.slice(e,e+s);Ia.call(this,t,e,s,a),this._prevBlock=i}};class Ta extends Dt{}Ta.Encryptor=class extends Ta{processBlock(t,e){const a=t,s=this._cipher,{blockSize:i}=s,n=this._iv;let o=this._counter;n&&(this._counter=n.slice(0),o=this._counter,this._iv=void 0);const r=o.slice(0);s.encryptBlock(r,0),o[i-1]=o[i-1]+1|0;for(let t=0;t<i;t+=1)a[e+t]^=r[t]}},Ta.Decryptor=Ta.Encryptor;const za=t=>{let e=t;if(255==(t>>24&255)){let a=t>>16&255,s=t>>8&255,i=255&t;255===a?(a=0,255===s?(s=0,255===i?i=0:i+=1):s+=1):a+=1,e=0,e+=a<<16,e+=s<<8,e+=i}else e+=1<<24;return e};
/** @preserve
     * Counter block mode compatible with  Dr Brian Gladman fileenc.c
     * derived from CryptoJS.mode.CTR
     * Jan Hruby jhruby.web@gmail.com
     */
class Ea extends Dt{}Ea.Encryptor=class extends Ea{processBlock(t,e){const a=t,s=this._cipher,{blockSize:i}=s,n=this._iv;let o=this._counter;n&&(this._counter=n.slice(0),o=this._counter,this._iv=void 0),(t=>{const e=t;e[0]=za(e[0]),0===e[0]&&(e[1]=za(e[1]))})(o);const r=o.slice(0);s.encryptBlock(r,0);for(let t=0;t<i;t+=1)a[e+t]^=r[t]}},Ea.Decryptor=Ea.Encryptor;class Ra extends Dt{}Ra.Encryptor=class extends Ra{processBlock(t,e){this._cipher.encryptBlock(t,e)}},Ra.Decryptor=class extends Ra{processBlock(t,e){this._cipher.decryptBlock(t,e)}};class Ma extends Dt{}Ma.Encryptor=class extends Ma{processBlock(t,e){const a=t,s=this._cipher,{blockSize:i}=s,n=this._iv;let o=this._keystream;n&&(this._keystream=n.slice(0),o=this._keystream,this._iv=void 0),s.encryptBlock(o,0);for(let t=0;t<i;t+=1)a[e+t]^=o[t]}},Ma.Decryptor=Ma.Encryptor;const Na={pad(t,e){const a=4*e,s=a-t.sigBytes%a;t.concat(nt.random(s-1)).concat(nt.create([s<<24],1))},unpad(t){const e=t,a=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=a}},La={pad(t,e){const a=t,s=4*e;a.clamp(),a.sigBytes+=s-(t.sigBytes%s||s)},unpad(t){const e=t,a=e.words;for(let t=e.sigBytes-1;t>=0;t-=1)if(a[t>>>2]>>>24-t%4*8&255){e.sigBytes=t+1;break}}},Pa={pad(t,e){t.concat(nt.create([2147483648],1)),La.pad(t,e)},unpad(t){const e=t;La.unpad(e),e.sigBytes-=1}},Ba={stringify:t=>t.ciphertext.toString(ot),parse(t){const e=ot.parse(t);return Et.create({ciphertext:e})}};var Oa={lib:{Base:it,WordArray:nt,BufferedBlockAlgorithm:lt,Hasher:dt,Cipher:kt,StreamCipher:St,BlockCipherMode:Dt,BlockCipher:zt,CipherParams:Et,SerializableCipher:Mt,PasswordBasedCipher:Lt},x64:{Word:pt,WordArray:gt},enc:{Hex:ot,Latin1:rt,Utf8:ct,Utf16:Ot,Utf16BE:Bt,Utf16LE:qt,Base64:ft},algo:{HMAC:ht,MD5:$t,SHA1:Ft,SHA224:ee,SHA256:Gt,SHA384:le,SHA512:oe,SHA3:ve,RIPEMD160:Me,PBKDF2:Pe,EvpKDF:Ct,AES:Ge,DES:ra,TripleDES:la,Rabbit:fa,RabbitLegacy:$a,RC4:Ca,RC4Drop:Sa},mode:{CBC:At,CFB:Aa,CTR:Ta,CTRGladman:Ea,ECB:Ra,OFB:Ma},pad:{Pkcs7:Tt,AnsiX923:{pad(t,e){const a=t,s=a.sigBytes,i=4*e,n=i-s%i,o=s+n-1;a.clamp(),a.words[o>>>2]|=n<<24-o%4*8,a.sigBytes+=n},unpad(t){const e=t,a=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=a}},Iso10126:Na,Iso97971:Pa,NoPadding:{pad(){},unpad(){}},ZeroPadding:La},format:{OpenSSL:Rt,Hex:Ba},kdf:{OpenSSL:Nt},MD5:xt,HmacMD5:_t,SHA1:Ut,HmacSHA1:jt,SHA224:ae,HmacSHA224:se,SHA256:Qt,HmacSHA256:te,SHA384:de,HmacSHA384:he,SHA512:re,HmacSHA512:ce,SHA3:we,HmacSHA3:$e,RIPEMD160:Ne,HmacRIPEMD160:Le,PBKDF2:(t,e,a)=>Pe.create(a).compute(t,e),EvpKDF:(t,e,a)=>Ct.create(a).compute(t,e),AES:Qe,DES:ca,TripleDES:da,Rabbit:ma,RabbitLegacy:xa,RC4:ka,RC4Drop:Da};const qa=t=>`0${t}`.slice(-2),Ha=t=>{if(t.endsWith(" GMT")&&23===t.length)return new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T${t.substring(9,11)}:${t.substring(11,13)}:${t.substring(13,19)}Z`);if(8===t.length){let e=new Date(`${t.substring(0,4)}-${t.substring(4,6)}-${t.substring(6,8)}T00:00:00.000Z`);return e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),e}if(10===t.length){let e=new Date(`${t.substring(6,10)}-${t.substring(0,2)}-${t.substring(3,5)}T00:00:00.000Z`);return e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),e}return null},Fa=t=>t&&"string"==typeof t?t.replace(/&amp;|&lt;|&gt;|&#39;|&#40;|&#41;|&quot;/g,(t=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&#40;":"(","&#41;":")","&quot;":'"'}[t]||t))):"",Ua=(t,e,a,s,i)=>{if("string"!=typeof e)return;if(s){const t=Va(s,e);if(t===i||`${t}`==`${i}`||null===t&&""===i)return}const n=e.lastIndexOf(".");if(-1===n)return void(t[e]=i);if(!a)return void ja(t,e,i);const o={};let r=e.substring(0,n);o[e.substring(n+1)]=i;const c=r.indexOf("(");if(-1===c)a.push({instruction:"UPDATE",target:r,content:o});else{const t=r.substring(c+1,r.length-1);r=r.substring(0,c),a.push({instruction:"UPDATE",target:r,listIndex:parseInt(t,10),content:o})}},ja=(t,e,a)=>{if("string"!=typeof e)return;const s=e.split(".");let i=t;for(const t in s){let e=s[t];const n=e.indexOf("(");if(-1===n)t<s.length-1?void 0===i[e]&&(i[e]={}):i[e]=a,i=i[e];else{const t=e.substring(n+1,e.length-1);e=e.substring(0,n),void 0===i[e]&&(i[e]=[]);for(let a=i[e].length;a<t;a++)i[e].push({});i=i[e][t-1]}}},Va=(t,e)=>{if("string"!=typeof e)return null;let a=t;const s=e.split(".");for(const t in s){const e=s[t],i=e.indexOf("(");if(-1===i){if(void 0===a[e])return null;a=a[e]}else{const t=e.substring(i+1,e.length-1),s=a[e.substring(0,i)];if(!(s&&Array.isArray(s)&&s.length>=t))return null;a=s[t-1]}}return a},Wa=t=>{for(const e in t)"object"==typeof t[e]?Wa(t[e]):"string"==typeof t[e]&&(t[e]="")},Za=(t,e)=>{for(const a in t)if("fieldID"===a)e.push(t.fieldID);else{const s=t[a];s.fieldID?e.push(s.fieldID):"object"==typeof s&&Za(s,e)}},Ja=(t,e,a)=>{let s=Va(t,e);if(null===s&&(s=[],ja(t,e,s)),!Array.isArray(s))return null;if(a&&"string"==typeof a){const t={},i=a.split(",");for(const e in i)t[i[e]]="";return s.push(t),{instruction:"APPEND",target:e,content:t}}if(0===s.length)return null;const i={...s[0]};return Wa(i),s.push(i),{instruction:"APPEND",target:e,content:i}},Xa=(t,e)=>{let a,s=e;-1!==e.indexOf(").pyTemplate")&&(a=parseInt(s.substring(e.lastIndexOf("(")+1,e.lastIndexOf(")")),10),s=s.substring(0,e.lastIndexOf("(")));const i=Va(t,s);if(!Array.isArray(i))return null;if(1===i.length){for(const t in i[0])"pxObjClass"!==t&&(i[0][t]="");return null}return a?i.length<a?null:(i.splice(a-1,1),{instruction:"DELETE",target:s,listIndex:a}):(i.length-=1,{instruction:"DELETE",target:s,listIndex:i.length})},Ka=(t,e)=>{const a=t.getAttribute(`data-action-${e}`);return!(!a||"postValue"!==a&&0!==a.indexOf("refresh"))},Ya=(t,e)=>{const a=t.getAttribute(`data-action-${e}`);return a&&0===a.indexOf("refresh")?a.replace("refresh-",""):""};function Ga(t,e,a){try{switch(e){case">":return parseInt(t,10)>parseInt(a,10);case"<":return parseInt(t,10)<parseInt(a,10);case">=":return parseInt(t,10)>=parseInt(a,10);case"<=":return parseInt(t,10)<=parseInt(a,10);case"==":return`${t}`==`${a}`;case"!=":return`${t}`!=`${a}`}}catch(t){}return!1}const Qa=(t,e)=>{const a=t.replace("@E ","").split("&&");for(const t in a){const s=a[t].trim().match(/[\w.]+|[><=!]+|'[^']+'/g);if(3===s.length){const t=e[s[0].substring(1)];if(void 0!==t&&!Ga(t,s[1],s[2].replace(/^'|'$/g,"")))return!1}}return!0},ts=(t,e,a,s)=>{for(const n of t.elements)if("INPUT"===n.tagName||"TEXTAREA"===n.tagName||"SELECT"===n.tagName){const t=n.getAttribute("data-ref");if(null!==t&&"pyID"!==t)if("INPUT"===n.tagName){const o=n.getAttribute("type");if(n.classList.contains("input-date-day")||n.classList.contains("input-date-month")||n.classList.contains("input-date-year")){if(n.classList.contains("input-date-day")){const o=n.closest(".input-date").parentNode,r=o.querySelector(".input-date-month"),c=o.querySelector(".input-date-year");if(null!==r&&null!==c&&""!==n.value&&""!==r.value&&""!==c.value){const o=`${qa(r.value)}/${qa(n.value)}/${i=c.value,`0${i}`.slice(-4)}`;Ua(e,t,a,s,o)}}}else if("checkbox"===o)Ua(e,t,a,s,n.checked);else if("radio"===o)n.checked&&Ua(e,t,a,s,n.value);else if("tel"===o){let i=n.value;"SELECT"===n.parentNode.firstElementChild.tagName&&"field-countrycode"===n.parentNode.firstElementChild.className&&(i=n.parentNode.firstElementChild.value+i),Ua(e,t,a,s,i)}else if("date"===o){let i;n.valueAsDate&&(i=new Date(n.valueAsDate)),i&&i instanceof Date&&i.getTime()==i.getTime()||(i=new Date(n.value)),i&&i instanceof Date&&i.getTime()==i.getTime()?(i=new Date(i.getTime()+6e4*i.getTimezoneOffset()),Ua(e,t,a,s,`${qa(i.getMonth()+1)}/${qa(i.getDate())}/${i.getFullYear()}`)):Ua(e,t,a,s,n.value)}else Ua(e,t,a,s,n.value)}else Ua(e,t,a,s,n.value)}var i,n;if(t&&t.querySelectorAll){const i=t.querySelectorAll("[contenteditable]");for(let t=0;t<i.length;t++){const o=i[t],r=o.getAttribute("data-ref");Ua(e,r,a,s,(n=o.innerHTML)&&"string"==typeof n?n.replace(/[&<>'"]/g,(t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","(":"&#40;",")":"&#41;",'"':"&quot;"}[t]||t))):"")}}},es=(t,e,a)=>{for(const s of t.elements)if("INPUT"===s.tagName||"TEXTAREA"===s.tagName||"SELECT"===s.tagName){const t=`.${s.getAttribute("data-ref")}`;if(null!==t&&"pyID"!==t)for(const i in e){if(e[i].Path===t){a.setInlineError(s,e[i].ValidationMessage);break}if(e[i].erroneousInputOutputFieldInPage===t){a.setInlineError(s,e[i].localizedValue);break}}}},as=(t,e)=>{const a=e||[],s={};for(const[e,i]of Object.entries(t))if("string"==typeof i||"boolean"==typeof i)s[e]=i;else if("object"==typeof i&&Array.isArray(i))for(const t in i){const s={instruction:"UPDATE",target:e,listIndex:parseInt(t,10)+1,content:i[t]};a.push(s)}return{pageInstructions:a,pageupdate:s}},ss=()=>B`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
<path d="M11.290625,2 C11.290625,2 13.2539062,2 13.2539062,2 C13.2539062,2 13.2539062,22.59375 13.2539062,22.59375 C13.2539062,22.59375 11.290625,22.59375 11.290625,22.59375 C11.290625,22.59375 11.290625,2 11.290625,2 Z M22.59375,11.3390625 C22.59375,11.3390625 22.59375,13.2546875 22.59375,13.2546875 C22.59375,13.2546875 2,13.2546875 2,13.2546875 C2,13.2546875 2,11.3390625 2,11.3390625 C2,11.3390625 22.59375,11.3390625 22.59375,11.3390625 L22.59375,11.3390625 Z"/>
</svg>`,is=()=>B`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.3375,3 C20.3375,3 21.7742187,4.43671875 21.7742187,4.43671875 C21.7742187,4.43671875 4.43671875,21.4867188 4.43671875,21.4867188 C4.43671875,21.4867188 3,20.19375 3,20.19375 C3,20.19375 20.3375,3 20.3375,3 Z M21.7265625,20.0976563 C21.7265625,20.0976563 20.3859375,21.534375 20.3859375,21.534375 C20.3859375,21.534375 3.00078125,4.3890625 3.00078125,4.3890625 C3.00078125,4.3890625 4.38984375,3 4.38984375,3 C4.38984375,3 21.7273438,20.0976563 21.7273438,20.0976563 L21.7265625,20.0976563 Z"/>
</svg>`,ns=()=>B`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1140625,3.96875 C22.1140625,3.96875 22.1140625,3.96875 22.1140625,3.96875 C22.1140625,3.96875 17.46875,3.96875 17.46875,3.96875 C17.46875,3.96875 16.9898437,2.14921875 16.9898437,2.14921875 C16.9421875,1.8140625 16.7507812,1.57421875 16.5109375,1.33515625 C16.2234375,1.09609375 15.8882813,1 15.553125,1 C15.553125,1 15.553125,1 15.553125,1 C15.553125,1 9.03984375,1 9.03984375,1 C8.7046875,1 8.4171875,1.09609375 8.1296875,1.2875 C7.8421875,1.52734375 7.65078125,1.76640625 7.603125,2.1015625 C7.603125,2.1015625 7.603125,2.1015625 7.603125,2.1015625 C7.603125,2.1015625 7.12421875,3.96953125 7.12421875,3.96953125 C7.12421875,3.96953125 2.47890625,3.96953125 2.47890625,3.96953125 C2.14375,3.96953125 2,4.11328125 2,4.4484375 C2,4.78359375 2.14375,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 2.47890625,4.92734375 2.47890625,4.92734375 C2.47890625,4.92734375 4.01171875,4.92734375 4.01171875,4.92734375 C4.01171875,4.92734375 4.921875,23.1742188 4.921875,23.1742188 C4.96953125,23.5570312 5.11328125,23.8929688 5.40078125,24.1320313 C5.63984375,24.4195312 5.97578125,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 6.40625,24.5632812 6.40625,24.5632812 C6.40625,24.5632812 18.2359375,24.5632812 18.2359375,24.5632812 C18.6671875,24.5632812 19.0023438,24.4195312 19.2898438,24.1320313 C19.5289063,23.8929688 19.6726562,23.5570312 19.7210938,23.1742188 C19.7210938,23.1742188 19.7210938,23.1742188 19.7210938,23.1742188 C19.7210938,23.1742188 20.63125,4.92734375 20.63125,4.92734375 C20.63125,4.92734375 22.115625,4.92734375 22.115625,4.92734375 C22.4507812,4.92734375 22.5945312,4.78359375 22.5945312,4.4484375 C22.5945312,4.11328125 22.4507812,3.96953125 22.115625,3.96953125 L22.1140625,3.96875 Z M8.17734375,3.96875 C8.17734375,3.96875 8.56015625,2.38828125 8.56015625,2.38828125 C8.6078125,2.1484375 8.79921875,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 9.0390625,2.00546875 9.0390625,2.00546875 C9.0390625,2.00546875 15.5523437,2.00546875 15.5523437,2.00546875 C15.7914062,2.00546875 15.9835937,2.14921875 16.03125,2.38828125 C16.03125,2.38828125 16.03125,2.38828125 16.03125,2.38828125 C16.03125,2.38828125 16.4140625,3.96875 16.4140625,3.96875 C16.4140625,3.96875 8.1765625,3.96875 8.1765625,3.96875 L8.17734375,3.96875 Z M19.6710938,4.9265625 C19.6710938,4.9265625 18.7609375,23.1257812 18.7609375,23.1257812 C18.7132812,23.4132812 18.521875,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 18.234375,23.5570312 18.234375,23.5570312 C18.234375,23.5570312 6.4046875,23.5570312 6.4046875,23.5570312 C6.1171875,23.5570312 5.92578125,23.4132812 5.878125,23.1257812 C5.878125,23.1257812 5.878125,23.1257812 5.878125,23.1257812 C5.878125,23.1257812 4.96796875,4.9265625 4.96796875,4.9265625 C4.96796875,4.9265625 19.6710938,4.9265625 19.6710938,4.9265625 L19.6710938,4.9265625 Z M8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,18.1929687 8.84765625,18.1929687 C8.84765625,18.1929687 8.84765625,10.3382812 8.84765625,10.3382812 C8.84765625,10.003125 9.0390625,9.859375 9.37421875,9.859375 C9.37421875,9.859375 9.37421875,9.859375 9.37421875,9.859375 C9.709375,9.859375 9.853125,10.003125 9.853125,10.3382812 C9.853125,10.3382812 9.853125,10.3382812 9.853125,10.3382812 C9.853125,10.3382812 9.853125,18.1929687 9.853125,18.1929687 C9.853125,18.528125 9.709375,18.671875 9.37421875,18.671875 C9.37421875,18.671875 9.37421875,18.671875 9.37421875,18.671875 C9.0390625,18.671875 8.84765625,18.528125 8.84765625,18.1929687 Z M14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,18.1929687 14.7382812,18.1929687 C14.7382812,18.1929687 14.7382812,10.3382812 14.7382812,10.3382812 C14.7382812,10.003125 14.8820313,9.859375 15.2171875,9.859375 C15.2171875,9.859375 15.2171875,9.859375 15.2171875,9.859375 C15.5523437,9.859375 15.74375,10.003125 15.74375,10.3382812 C15.74375,10.3382812 15.74375,10.3382812 15.74375,10.3382812 C15.74375,10.3382812 15.74375,18.1929687 15.74375,18.1929687 C15.74375,18.528125 15.5523437,18.671875 15.2171875,18.671875 C15.2171875,18.671875 15.2171875,18.671875 15.2171875,18.671875 C14.8820313,18.671875 14.7382812,18.528125 14.7382812,18.1929687 Z M11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,19.1507813 11.8164062,19.1507813 C11.8164062,19.1507813 11.8164062,9.38046875 11.8164062,9.38046875 C11.8164062,9.0453125 11.9601563,8.85390625 12.2953125,8.85390625 C12.6304687,8.85390625 12.7742187,9.0453125 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,9.38046875 12.7742187,9.38046875 C12.7742187,9.38046875 12.7742187,19.1507813 12.7742187,19.1507813 C12.7742187,19.4859375 12.6304687,19.6773437 12.2953125,19.6773437 C11.9601563,19.6773437 11.8164062,19.4859375 11.8164062,19.1507813 Z"/>
</svg>`,os=()=>B`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M20.5226562,11.6265625 C20.6664062,11.6265625 20.7617188,11.6742188 20.8578125,11.7703125 C20.9539062,11.8664063 21.0015625,11.9617188 21.0015625,12.1054688 C21.0015625,12.2492188 20.9539062,12.3445313 20.8578125,12.440625 C20.8578125,12.440625 20.8578125,12.440625 20.8578125,12.440625 C20.8578125,12.440625 13.2429687,20.0554687 13.2429687,20.0554687 C12.1414062,21.109375 10.8484375,21.6359375 9.41171875,21.6359375 C7.975,21.6359375 6.68203125,21.109375 5.58046875,20.0554687 C5.58046875,20.0554687 5.58046875,20.0554687 5.58046875,20.0554687 C4.5265625,19.0015625 4,17.75625 4,16.271875 C4,16.271875 4,16.271875 4,16.271875 C4,14.8351563 4.5265625,13.5421875 5.58046875,12.440625 C5.58046875,12.440625 5.58046875,12.440625 5.58046875,12.440625 C5.58046875,12.440625 14.9671875,3.14921875 14.9671875,3.14921875 C15.7335937,2.3828125 16.64375,2 17.7453125,2 C18.846875,2 19.7570312,2.3828125 20.5234375,3.14921875 C20.5234375,3.14921875 20.5234375,3.14921875 20.5234375,3.14921875 C21.2898437,3.86796875 21.6726562,4.77734375 21.6726562,5.87890625 C21.6726562,5.87890625 21.6726562,5.87890625 21.6726562,5.87890625 C21.6726562,6.98046875 21.2898437,7.890625 20.5234375,8.65703125 C20.5234375,8.65703125 20.5234375,8.65703125 20.5234375,8.65703125 C20.5234375,8.65703125 11.8546875,17.2773438 11.8546875,17.2773438 C11.3757813,17.75625 10.8007812,17.9960938 10.1304687,17.9960938 C10.1304687,17.9960938 10.1304687,17.9960938 10.1304687,17.9960938 C9.5078125,17.9960938 8.88515625,17.7570313 8.35859375,17.2773438 C8.35859375,17.2773438 8.35859375,17.2773438 8.35859375,17.2773438 C7.8796875,16.7984375 7.63984375,16.2234375 7.63984375,15.553125 C7.63984375,14.8828125 7.87890625,14.3078125 8.35859375,13.8289062 C8.35859375,13.8289062 8.35859375,13.8289062 8.35859375,13.8289062 C8.35859375,13.8289062 16.6921875,5.54375 16.6921875,5.54375 C16.7882812,5.44765625 16.93125,5.4 17.075,5.4 C17.075,5.4 17.075,5.4 17.075,5.4 C17.21875,5.4 17.3140625,5.44765625 17.4101562,5.54375 C17.50625,5.63984375 17.5539062,5.73515625 17.5539062,5.87890625 C17.5539062,5.87890625 17.5539062,5.87890625 17.5539062,5.87890625 C17.5539062,6.02265625 17.50625,6.16640625 17.4101562,6.26171875 C17.4101562,6.26171875 17.4101562,6.26171875 17.4101562,6.26171875 C17.4101562,6.26171875 9.0765625,14.4992187 9.0765625,14.4992187 C8.7890625,14.7867187 8.6453125,15.121875 8.6453125,15.553125 C8.6453125,15.984375 8.7890625,16.3195313 9.0765625,16.6070312 C9.3640625,16.8945312 9.69921875,17.0382813 10.1304687,17.0382813 C10.1304687,17.0382813 10.1304687,17.0382813 10.1304687,17.0382813 C10.5132812,17.0382813 10.8492187,16.8945312 11.1359375,16.6070312 C11.1359375,16.6070312 11.1359375,16.6070312 11.1359375,16.6070312 C11.1359375,16.6070312 19.8523437,7.98671875 19.8523437,7.98671875 C20.4273437,7.41171875 20.7140625,6.69375 20.7140625,5.8796875 C20.7140625,5.8796875 20.7140625,5.8796875 20.7140625,5.8796875 C20.7140625,5.065625 20.4265625,4.3953125 19.8523437,3.8203125 C19.8523437,3.8203125 19.8523437,3.8203125 19.8523437,3.8203125 C19.2296875,3.2453125 18.5117187,2.95859375 17.7453125,2.95859375 C17.7453125,2.95859375 17.7453125,2.95859375 17.7453125,2.95859375 C16.93125,2.95859375 16.2609375,3.24609375 15.6859375,3.8203125 C15.6859375,3.8203125 15.6859375,3.8203125 15.6859375,3.8203125 C15.6859375,3.8203125 6.29921875,13.159375 6.29921875,13.159375 C5.4375,13.9734375 5.00625,14.9789062 5.00625,16.2726562 C5.00625,16.2726562 5.00625,16.2726562 5.00625,16.2726562 C5.00625,17.5179688 5.4375,18.5234375 6.29921875,19.3375 C6.29921875,19.3375 6.29921875,19.3375 6.29921875,19.3375 C7.1609375,20.1992188 8.21484375,20.6304688 9.4125,20.6304688 C9.4125,20.6304688 9.4125,20.6304688 9.4125,20.6304688 C10.7054687,20.6304688 11.7117187,20.1992188 12.5257812,19.3375 C12.5257812,19.3375 12.5257812,19.3375 12.5257812,19.3375 C12.5257812,19.3375 20.1882812,11.7703125 20.1882812,11.7703125 C20.284375,11.6742188 20.3796875,11.6265625 20.5234375,11.6265625 L20.5226562,11.6265625 Z"/>
</svg>`,rs=()=>B`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
  <path d="M22.1632813,6.753125 C22.1632813,6.753125 22.1632813,6.753125 22.1632813,6.753125 C22.1632813,6.753125 15.8414062,0.43125 15.8414062,0.43125 C15.6023437,0.14375 15.21875,0 14.7875,0 C14.7875,0 14.7875,0 14.7875,0 C14.7875,0 3.48515625,0 3.48515625,0 C3.05390625,0 2.71875,0.14375 2.43125,0.43125 C2.14375,0.71875 2,1.05390625 2,1.48515625 C2,1.48515625 2,1.48515625 2,1.48515625 C2,1.48515625 2,23.0367188 2,23.0367188 C2,23.4679688 2.14375,23.803125 2.43125,24.090625 C2.71875,24.378125 3.05390625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 3.48515625,24.521875 3.48515625,24.521875 C3.48515625,24.521875 21.109375,24.521875 21.109375,24.521875 C21.540625,24.521875 21.8757812,24.378125 22.1632813,24.090625 C22.4507812,23.803125 22.5945312,23.4679688 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,23.0367188 22.5945312,23.0367188 C22.5945312,23.0367188 22.5945312,7.80703125 22.5945312,7.80703125 C22.5945312,7.37578125 22.4507812,7.040625 22.1632813,6.753125 Z M15.6976563,1.6765625 C15.6976563,1.6765625 20.8703125,6.84921875 20.8703125,6.84921875 C20.8703125,6.84921875 16.225,6.84921875 16.225,6.84921875 C15.8898438,6.84921875 15.7460938,6.70546875 15.7460938,6.3703125 C15.7460938,6.3703125 15.7460938,6.3703125 15.7460938,6.3703125 C15.7460938,6.3703125 15.6984375,1.6765625 15.6984375,1.6765625 L15.6976563,1.6765625 Z M21.6367188,7.8546875 C21.6367188,7.8546875 21.6367188,23.0367188 21.6367188,23.0367188 C21.6367188,23.371875 21.4453125,23.515625 21.1101563,23.515625 C21.1101563,23.515625 21.1101563,23.515625 21.1101563,23.515625 C21.1101563,23.515625 3.4859375,23.515625 3.4859375,23.515625 C3.15078125,23.515625 2.959375,23.371875 2.959375,23.0367188 C2.959375,23.0367188 2.959375,23.0367188 2.959375,23.0367188 C2.959375,23.0367188 2.959375,1.48515625 2.959375,1.48515625 C2.959375,1.15 3.15078125,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 3.4859375,0.95859375 3.4859375,0.95859375 C3.4859375,0.95859375 14.740625,0.95859375 14.740625,0.95859375 C14.740625,0.95859375 14.740625,6.3703125 14.740625,6.3703125 C14.740625,6.8015625 14.884375,7.13671875 15.171875,7.42421875 C15.459375,7.71171875 15.7945313,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 16.2257813,7.85546875 16.2257813,7.85546875 C16.2257813,7.85546875 21.6375,7.85546875 21.6375,7.85546875 L21.6367188,7.8546875 Z"/>
</svg>`,cs=(t,e)=>{if(t.control&&t.control.actionSets&&t.control.actionSets.length>0)for(const a of t.control.actionSets)if(a.events.length>0&&a.actions.length>0&&a.events[0].event===e){let t=a.actions[0].action;return"refresh"===t&&""!==a.actions[0].refreshFor&&(t+=`-${a.actions[0].refreshFor}`),t}},ls=t=>"pyTemplateButton"!==t.reference?t.reference:t.control&&t.control.modes?t.control.modes[1].tooltip:null,ds=(t,e,a)=>{if(void 0===e)return null;const s=t.required&&!0!==t.readOnly?"icon-required":"";return"field-checkbox"===a?""!==t.label||!0===t.showLabel?B`<div class="field-caption dataLabelForWrite ${s}">${Fa(t.label)}</div>`:null:"field-text"===a&&!0===t.readOnly&&"pxCheckbox"===t.control.type&&t.control.label?B`<label class="field-caption dataLabelForWrite">${Fa(t.control.label)}</label>`:""!==t.label||!0===t.showLabel||!0===t.labelReserveSpace?B`<label class="field-caption dataLabelForWrite ${s}" for="${at(e)}">${Fa(t.label)}</label>`:null},hs=(t,e,a,s)=>void 0===e?B`
      ${s}
    `:"field-button"!==a||(t=>!!(t.control&&t.control.actionSets&&t.control.actionSets.length>0))(t)?"field-radiogroup"===a?B`
    <div class="flex content-item field-item ${a}"><fieldset><legend>${ds(t,e,a)}</legend>${s}</fielset></div>
  `:"field-checkbox"===a?B`
    <div class="flex content-item field-item ${a}">${s}</div>
  `:B`
    <div class="flex content-item field-item ${a}">${ds(t,e,a)}${s}</div>
  `:null,us=(t,e,a)=>{if(void 0===t||void 0===t.control||void 0===t.control.type)return null;if(t.customAttributes&&"none"===t.customAttributes.display)return null;if(!0===a||!0===t.readOnly||"pxHidden"===t.control.type)return hs(t,e,"field-text",ps(t,e));switch(t.control.type){case"pxPhone":case"pxTextInput":return hs(t,e,"field-textinput",gs(t,e));case"pxInteger":case"pxNumber":return hs(t,e,"field-numberinput",ms(t,e));case"pxCurrency":return hs(t,e,"field-currencyinput",ys(t,e));case"pxEmail":return hs(t,e,"field-emailinput",bs(t,e));case"pxTextArea":return hs(t,e,"field-textarea",vs(t,e));case"pxRadioButtons":return hs(t,e,"field-radiogroup",Ds(t,e));case"pxCheckbox":return hs(t,e,"field-checkbox",Is(t,e));case"pxDropdown":return hs(t,e,"field-dropdown",As(t,e));case"pxDisplayText":return hs(t,e,"field-text",ps(t,e));case"pxIcon":return hs(t,e,"field-icon",ws(t,e));case"pxLink":case"pxURL":return hs(t,e,"field-url",$s(t,e));case"pxIconDeleteItem":return hs(t,e,"field-button",_s(t,e));case"pxButton":return hs(t,e,"field-button",xs(t,e));case"pxDateTime":return"TimeOfDay"===t.type?hs(t,e,"field-time",Ss(t,e)):"Date"===t.type?hs(t,e,"field-date",ks(t,e)):hs(t,e,"field-datetime",Cs(t,e));case"pxAutoComplete":return hs(t,e,"field-combobox",Ts(t,e));case"pxSlider":return hs(t,e,"field-slider",fs(t,e));default:return null}},ps=(t,e)=>{if("pxDate"===t.control.type){let a=Ha(t.value);if(a)if(t.control&&2===t.control.modes.length){let e={};switch(t.control.modes[1].dateFormat){case"DateTime-Short-YYYY":case"Date-DayMonthYear-Custom":case"Date-Mediun":e={year:"numeric",month:"short",day:"numeric"};break;case"Date-Short":e={year:"numeric",month:"numeric",day:"numeric"};break;case"Date-Long":e={year:"numeric",month:"long",day:"numeric"};break;case"Date-Full":e={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;default:e={}}a=new Intl.DateTimeFormat([],e).format(a)}else a=(new Intl.DateTimeFormat).format(a);else a=t.value;return B`
      <span class="dataValueRead" data-ref="${t.reference}" id="${at(e)}">${a}</span>
    `}if("pxDateTime"===t.control.type){let a=Ha(t.value);if(a)if(t.control&&2===t.control.modes.length){let e={};switch(t.control.modes[1].dateTimeFormat){case"DateTime-Short-YYYY":e={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};break;default:e={}}a=new Intl.DateTimeFormat([],e).format(a)}else a=(new Intl.DateTimeFormat).format(a);else a=t.value;return B`
      <span class="dataValueRead" data-ref="${t.reference}" id="${at(e)}">${a}</span>
    `}if("pxTime"===t.control.type){let a=Ha(t.value);if(a)if(t.control&&2===t.control.modes.length){const t={hour:"numeric",minute:"numeric"};a=new Intl.DateTimeFormat([],t).format(a)}else a=(new Intl.DateTimeFormat).format(a);else a=t.value;return B`
      <span class="dataValueRead" data-ref="${t.reference}" id="${at(e)}">${a}</span>
    `}if("pxHidden"===t.control.type)return B`
    <input type="text" style="display:none" data-ref="${t.reference}" id="${at(e)}" value="${Fa(t.value)}"/>
    `;let a=t.value;if(t.control&&2===t.control.modes.length&&"locallist"===t.control.modes[0].listSource)for(const e of t.control.modes[0].options)e.key===a&&(a=e.value);return"pxCurrency"===t.control.type&&(a=`$${a}`),B`
    <span class="dataValueRead" data-ref="${t.reference}" id="${at(e)}">${Fa(a)}</span>
  `},gs=(t,e)=>B`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="text"
    id="${at(e)}"
    value="${Fa(t.value)}"
    data-action-change="${at(cs(t,"change"))}"
    data-action-click="${at(cs(t,"click"))}"
  />
`,fs=(t,e)=>B`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="range"
    id="${at(e)}"
    value="${Fa(t.value)}"
    data-action-change="${at(cs(t,"change"))}"
    data-action-click="${at(cs(t,"click"))}"
  />
`,ms=(t,e)=>B`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="number"
    id="${at(e)}"
    value="${t.value}"
    data-action-change="${at(cs(t,"change"))}"
    data-action-click="${at(cs(t,"click"))}"
  />
`,ys=(t,e)=>B`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="number"
    id="${at(e)}"
    value="${t.value}"
    data-action-change="${at(cs(t,"change"))}"
    data-action-click="${at(cs(t,"click"))}"
  />
`,bs=(t,e)=>B`
  <input
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    type="email"
    id="${at(e)}"
    value="${t.value}"
    data-action-change="${at(cs(t,"change"))}"
    data-action-click="${at(cs(t,"click"))}"
  />
`,vs=(t,e)=>B`
  <textarea
    data-ref="${t.reference}"
    rows="3"
    ?required="${!0===t.required}"
    id="${at(e)}"
    data-action-change="${at(cs(t,"change"))}"
    data-action-click="${at(cs(t,"click"))}"
  >
${Fa(t.value)}</textarea
  >
`,ws=(t,e)=>B`
  <i
    class="${t.control.modes[1].iconStyle}"
    data-ref="${t.reference}"
    ?required="${!0===t.required}"
    id="${at(e)}"
    value="${t.value}"
  />
`,$s=(t,e)=>B`
  <a id="${at(e)}" data-ref="${t.reference}" href="${t.value}">${t.control.label}</a>
`,xs=(t,e)=>{const a=cs(t,"click");return"deleteRow"===a?_s(t,e):B`
  <button
  type='button' 
    class="${at(t.control.modes[1].controlFormat)} pzhc pzbutton"
    id="${at(e)}"
    data-ref="${at(ls(t))}"
    data-action-click="${at(a)}"
  >${t.control.label}</button>`},_s=(t,e)=>B`
  <button
    type='button' 
    class="pzhc pzbutton Icon"
    title="Delete row"
    id="${at(e)}"
    data-ref="${at(ls(t))}"
    data-action-click="deleteRow"
  >${ns()}</button>
`,Cs=(t,e)=>{let a=t.value;if(""!==a){let e=Ha(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${e.getFullYear()}-${qa(e.getMonth()+1)}-${qa(e.getDate())}T${qa(e.getHours())}:${qa(e.getMinutes())}`):8===t.value.length&&(a=`${t.value.substring(0,4)}-${t.value.substring(4,6)}-${t.value.substring(6,8)}T00:00`)}return B`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      type="datetime-local"
      id="${at(e)}"
      value="${a}"
      data-action-change="${at(cs(t,"change"))}"
    data-action-click="${at(cs(t,"click"))}"
    />
  `},ks=(t,e)=>{let a=t.value;if(""!==a){let e=Ha(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${e.getFullYear()}-${qa(e.getMonth()+1)}-${qa(e.getDate())}`):8===t.value.length&&(a=`${t.value.substring(0,4)}-${t.value.substring(4,6)}-${t.value.substring(6,8)}`)}return B`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      type="date"
      id="${at(e)}"
      value="${a}"
      data-action-change="${at(cs(t,"change"))}"
    data-action-click="${at(cs(t,"click"))}"
    />
  `},Ss=(t,e)=>{let a=t.value;if(""!==a){let e=Ha(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${qa(e.getHours())}-${qa(e.getMinutes())}-${qa(e.getSeconds())}`):8===t.value.length&&(a=`${t.value.substring(9,10)}:${t.value.substring(10,11)}:${t.value.substring(11,12)}`)}return B`
    <input
      data-ref="${t.reference}"
      ?required="${!0===t.required}"
      type="time"
      id="${at(e)}"
      value="${a}"
      data-action-change="${at(cs(t,"change"))}"
      data-action-click="${at(cs(t,"click"))}"
    />
  `},Ds=(t,e)=>{let a;return t.control&&t.control.modes&&t.control.modes[0].options?a=t.control.modes[0].options:"True-False"===t.type&&(a=[{value:"true"},{value:"false"}]),void 0===a?null:B`
    ${a.map(((a,s)=>{const i=`rb-${e}-${s}`;return B`
        <div>
          <input
            data-ref="${t.reference}"
            name=${at(e)}
            id="${i}"
            type="radio"
            value="${a.key}"
            ?required="${!0===t.required}"
            ?checked="${a.key===t.value}"
            data-action-change="${at(cs(t,"change"))}"
          />
          <label for="${i}">${a.value}</label>
        </div>
      `}))}
  `},Is=(t,e)=>B`
  <input
  data-ref="${t.reference}" 
  id="${at(e)}"
  type="checkbox" 
  ?checked=${"true"===t.value}
  data-action-change="${at(cs(t,"change"))}"
  data-action-click="${at(cs(t,"click"))}"
  />
  <label for="${at(e)}">${t.control.label}</label>
`,As=(t,e)=>t.control&&t.control.modes[0]&&t.control.modes[0].options?B`<select
      data-ref="${t.reference}"
      id=${at(e)}
      ?required="${!0===t.required}"
      data-action-change="${at(cs(t,"change"))}"
      data-action-click="${at(cs(t,"click"))}">
        <option value="" title="Select...">Select...</option>
        ${t.control.modes[0].options.map((e=>B`
            <option ?selected=${e.key===t.value} value='${e.key}'>${e.value}</option>
          `))}
      </select>`:B`<input
      type='text'
      data-ref="${t.reference}"
      id=${at(e)}
      ?required="${!0===t.required}"
      data-action-change="${at(cs(t,"change"))}"
      data-action-click="${at(cs(t,"click"))}">
      </input>`,Ts=(t,e)=>{if(t.control.modes&&t.control.modes[0]&&t.control.modes[0].options)return B`
      <input
        data-ref="${t.reference}"
        list="${t.reference}"
        ?required="${!0===t.required}"
        type="text"
        class="combobox loaded"
        id="${at(e)}"
        value="${Fa(t.value)}"
        data-action-change="${at(cs(t,"change"))}"
        data-action-click="${at(cs(t,"click"))}"
      />
      <datalist id="${t.reference}">
        ${t.control.modes[0].options.map((t=>B`
            <option value="${t.value}">
              ${t.key}
            </option>
          `))}
      </datalist>
    `;let a="";return t.control&&t.control.modes&&t.control.modes[0]&&t.control.modes[0].dataPageID&&(a=t.control.modes[0].dataPageID),B`
    <input
      data-ref="${t.reference}"
      list="${t.reference}"
      data-pageid="${a}"
      ?required="${!0===t.required}"
      type="text"
      class="combobox"
      id="${at(e)}"
      value="${t.value}"
      data-action-change="${at(cs(t,"change"))}"
      data-action-click="${at(cs(t,"click"))}"
    />
    <datalist id="${t.reference}"></datalist>
  `},zs=t=>""!==t.title?B`
      <div class="header-bar">
        <div class="header-content"><h3 class="header-title">${t.title}</h3></div>
      </div>
    `:null,Es=(t,e)=>{let a=t.fieldListID;if(void 0!==t.reference&&(a=t.reference),"."===a.charAt(0)&&(a=a.substring(1)),t.newRow&&!0!==e){const e=[];return Za(t.newRow,e),B`
      <div class="table-action-area">
        <button type="button" class="pzhc pzbutton Simple" data-newrow="${at(e.join())}"
        data-ref=${a} data-action-click="addRow">${ss()}Add item</button>
      </div>
    `}return null},Rs=t=>B`
  ${t.map((t=>B`
    <th scope='col'>${t.caption?B`${t.caption.value}`:""}</th>`))}
`,Ms=t=>B`
  ${t.map((t=>B`
    <tr>
      ${t.groups.map((t=>B`
      <td>${us(t.field)}</td>`))}
    </tr>`))}
`,Ns=()=>B`
<span class="loading">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</span>
`,Ls=(t,e,a,s,i)=>{const n=document.createElement("div");n.setAttribute("role","alertdialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-labelledby",t),n.setAttribute("aria-describedby",""),n.setAttribute("class","mashup-modal");const o=document.createElement("div");n.appendChild(o);const r='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',c=()=>{document.body.removeEventListener("click",l),document.body.removeEventListener("keydown",d),n&&(n.previousElementSibling&&(n.previousElementSibling.removeAttribute("aria-hidden"),n.previousElementSibling.focus()),n.remove()),i&&i()},l=t=>{if(t){let e=t.target;if(e.download)return;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e){const t=e.closest("button");if((null===t||"close"!==t.getAttribute("data-action-id"))&&!e.classList.contains("mashup-modal")&&null!==e.closest(".mashup-modal"))return}c()}},d=t=>{if("Escape"===t.key)return void l(t);if(!("Tab"===t.key||9===t.keyCode))return;const e=n.querySelectorAll(r),a=e[e.length-1],s=e[0];t.shiftKey?document.activeElement===s&&(a.focus(),t.preventDefault()):document.activeElement===a&&(s.focus(),t.preventDefault())};return B`
  <div class='modalcontent'>
    <button type="button" @click="${t=>{t.preventDefault(),t.stopPropagation();const e=t.target.closest(".modalcontent");if(null===e)c();else if(1===e.children.length){e.firstElementChild.setAttribute("aria-hidden","true"),n.style.opacity=0,e.appendChild(n),s(o);n.querySelectorAll(r)[0].focus(),document.body.addEventListener("click",l),document.body.addEventListener("keydown",d),n.offsetHeight,n.style=""}else c()}}" class="pzhc pzbutton ${a}" title="${i18n.t(t)}">${i18n.t(e)}</button>
  </div>`},Ps=(t,e,a,s,i)=>{if(null==s)return null;let n;const o=`${Math.random().toString(36).substr(2,9)}`,r=document.createElement("ul");r.setAttribute("id",`menu-overlay-${o}`),r.setAttribute("role","menu"),r.setAttribute("aria-labelledby",`menubutton-${o}`),r.setAttribute("tabindex","-1");const c=()=>{document.body.removeEventListener("click",d),document.body.removeEventListener("keydown",l),r&&(r.previousElementSibling&&(r.previousElementSibling.setAttribute("aria-expanded","false"),r.previousElementSibling.focus()),r.remove())},l=t=>{38===t.keyCode?(n=n.previousElementSibling,null===n&&(n=r.lastElementChild),n.focus()):40===t.keyCode?(n=n.nextElementSibling,null===n&&(n=r.firstElementChild),n.focus()):27===t.keyCode||9===t.keyCode?c():13===t.keyCode&&(s(t),c())},d=t=>{if(t){let e=t.target;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&e.nextElementSibling===r)return;e.parentNode===r&&s(t),c()}},h=t=>{if("keydown"===t.type&&40!==t.keyCode)return;if(t.preventDefault(),t.stopPropagation(),"blur"===t.type)return void d(t);const e=t.currentTarget;"BUTTON"!==e.tagName?(s(t),c()):null===e.nextElementSibling?(e.parentNode.appendChild(r),e.setAttribute("aria-expanded","true"),L(a(),r),n=e.nextElementSibling.firstElementChild,n.focus(),document.body.addEventListener("click",d),document.body.addEventListener("keydown",l)):c()};return B`
    <div class="button-menu">
    <button type='button' id="${`menubutton-${o}`}" aria-haspopup="true" aria-controls="${`menu-overlay-${o}`}" aria-expanded="false"
    @click="${h}" @keydown="${h}" @blur="${h}"
    class="${`pzhc pzbutton Simple ${i||"action-menu"}`}" aria-label="${i18n.t(e)}">${i18n.t(t)}</button>
    </div>
  `},Bs=(t,e,a,s)=>Ls(t,e,a,(t=>{L(Os(t,[]),t),s(t)})),Os=(t,e,a,s,i)=>{let n=0;const o=t=>{if(void 0===t||"string"==typeof t&&""===t)return;if("URL"===e[n].category)return void window.open(t);let a=e[n].fileName;if(void 0===a&&(a=e[n].name),void 0===a&&(a=e[n].pyAttachName),!a)return;const s=window.document.createElement("a");if("Correspondence"===e[n].category){a=`${e[n].name}.html`;const i=`<html><head><title>${e[n].name}</title></head><body>${t}</body></html>`,o=new Blob([i],{type:"text"});s.href=window.URL.createObjectURL(o)}else{const e=function(t){const e=window.atob(t),a=e.length,s=new Uint8Array(a);for(let t=0;t<a;t++){const a=e.charCodeAt(t);s[t]=a}return s}(t),a=new Blob([e],{type:"octet/stream"});s.href=window.URL.createObjectURL(a)}s.download=a,document.body.appendChild(s),s.click(),document.body.removeChild(s)},r=t=>{t.stopPropagation();const a=t.target;n=a.getAttribute("data-id"),s.fetchData.call(s,"attachment",{id:e[n].ID,target:o})},c=a=>{a.preventDefault(),a.stopPropagation();const i=a.target.closest("button");n=i.getAttribute("data-id"),s.sendData.call(s,"deleteattachment",{id:e[n].ID,target:t})},l=o=>{o.stopPropagation();const r=o.target.closest("button");n=parseInt(r.getAttribute("data-id"),10),i.splice(n,1),L(Os(t,e,a,s,i),t)},d=t=>{t.stopPropagation(),t.preventDefault();const e=t.target;if(n=e.getAttribute("data-id"),"INPUT"===e.tagName){const t=e.getAttribute("data-prop-id");i[n][t]=e.value}else"SELECT"===e.tagName&&(i[n].category=e.value)},h=e=>{e.preventDefault();const a=e.target,s=e.relatedTarget,i=null===a?null:a.closest(".attach-files"),n=null===s?null:s.closest(".attach-files");if("dragenter"===e.type||"dragover"===e.type?null!=i&&i.classList.add("drop-file-hover"):"dragleave"!==e.type&&"drop"!==e.type||null===n&&null!==i&&i.classList.remove("drop-file-hover"),"drop"===e.type){const s=e.dataTransfer.files;t||(t=a.closest(".attach-files")),p(a,s)}},u=n=>{n&&(n.stopPropagation(),n.preventDefault());for(let n=0;n<i.length;n++){const o=i[n];delete o.editing,o.loading=!0,"URL"===o.type?(e.unshift(o),s.sendData.call(s,"attachments",{id:a,actionid:[o],target:t})):(e.unshift({name:o.displayName,extension:o.extension,loading:!0}),s.sendData.call(s,"uploadattachment",{actionid:o,target:t}))}L(Os(t,e,a,s),t)},p=(i,n)=>{const o=[];for(let t=0;t<n.length;t++){const e=n[t];let a=e.name.lastIndexOf(".");-1===a&&(a=e.name.length),e.displayName=e.name.substring(0,a),e.extension=e.name.substring(a+1),e.editing=!0,e.category="File",o.push(e)}L(Os(t,e,a,s,o),t)},g=e=>{e.stopPropagation();let a=e.target;if("BUTTON"===a.tagName)return a=e.target.parentNode.parentNode.firstElementChild,void a.click();t||(t=a.closest(".attach-files")),p(a,a.files)},f=i=>{i.stopPropagation();L(Os(t,e,a,s,[{type:"URL",category:"URL",name:"",url:"",editing:!0}]),t)},m=i=>{i.stopPropagation(),L(Os(t,e,a,s),t)},y=(t,e)=>{let a=new Date(e.createTime);return a=a.toLocaleDateString(void 0,{year:"numeric",month:"numeric",day:"numeric"}),B`
    <div class='list-item-title'>
      <button type='button' class='Light'  data-id="${t}" @click="${r}">${e.name}</button>
      ${e.loading?"":B`
      <span class='list-item-meta'><span>${e.createdBy}</span><span>${a}</span><span>${i18n.t("Category:")} ${e.category}</span></span>`}
    </div>`},b=()=>B`<li role="menuitem" tabindex="-1" data-value="Download">${i18n.t("Download")}</li>
  <li role="menuitem" tabindex="-1" data-value="Delete">${i18n.t("Delete")}</li>`,v=i=>{let r=i.target;if(i.path&&i.path.length>0?r=i.path[0]:i.originalTarget&&(r=i.originalTarget),r){const i=r.getAttribute("data-value"),c=e[n].pzInsKey||e[n].ID;"Download"===i?s.fetchData.call(s,"attachment",{id:c,target:o}):"Delete"===i&&(s.sendData.call(s,"deleteattachment",{id:c,target:t}),L(Os(void 0,[],a,s,[]),t))}},w=t=>B`<div class='row-item'>
    <span class='doc-icon'>${rs()}<span>${t.extension}</span></span>
    <div class='list-item-title'><span>${t.pyAttachName||t.name}</span>
    <span class="list-item-meta"><span>${t.pyCategoryName||t.category}</span>
    <span>${t.pxCreateOperator||t.createdBy}</span></span></div>
    ${Ps(B`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
<path d="M14.353125,6.353125 C13.9703125,6.7359375 13.4914062,6.928125 12.9640625,6.928125 C12.4367188,6.928125 11.9585938,6.73671875 11.575,6.353125 C11.1921875,5.9703125 11,5.49140625 11,4.9640625 C11,4.43671875 11.1914062,3.95859375 11.575,3.575 C11.9578125,3.1921875 12.4367188,3 12.9640625,3 C13.4914063,3 13.9695312,3.19140625 14.353125,3.575 C14.7359375,3.9578125 14.928125,4.43671875 14.928125,4.9640625 C14.928125,5.49140625 14.7367187,5.96953125 14.353125,6.353125 Z M14.353125,13.7289063 C13.9703125,14.1117188 13.4914062,14.3039063 12.9640625,14.3039063 C12.4367188,14.3039063 11.9585938,14.1125 11.575,13.7289063 C11.1921875,13.3460938 11,12.8671875 11,12.3398438 C11,11.8125 11.1914062,11.334375 11.575,10.9507813 C11.9578125,10.5679688 12.4367188,10.3757813 12.9640625,10.3757813 C13.4914063,10.3757813 13.9695312,10.5671875 14.353125,10.9507813 C14.7359375,11.3335938 14.928125,11.8125 14.928125,12.3398438 C14.928125,12.8671875 14.7367187,13.3453125 14.353125,13.7289063 Z M14.353125,21.1039062 C13.9703125,21.4867187 13.4914062,21.6789062 12.9640625,21.6789062 C12.4367188,21.6789062 11.9585938,21.4875 11.575,21.1039062 C11.1921875,20.7210938 11,20.2421875 11,19.7148438 C11,19.1875 11.1914062,18.709375 11.575,18.3257813 C11.9578125,17.9429688 12.4367188,17.7507813 12.9640625,17.7507813 C13.4914063,17.7507813 13.9695312,17.9421875 14.353125,18.3257813 C14.7359375,18.7085937 14.928125,19.1875 14.928125,19.7148438 C14.928125,20.2421875 14.7367187,20.7203125 14.353125,21.1039062 Z"></path>
</svg>`,"Actions",b,v,"button-action")}
  </div>`,$=(t,e)=>e.loading?B`${y(t,e)}${Ns()}`:e.editing?"URL"===e.type?B`
      <div class='flex content-item field-item'>
        <label for='url-name'>Name</label>
        <input type='text' id='url-name' data-prop-id='name' @change="${d}" data-id="${t}" value="${e.name}"/>
      </div>
      <div class='flex content-item field-item'>
        <label for='url-url'>URL</label>
        <input type='text' id='url-url' data-prop-id='url' @change="${d}" data-id="${t}" value="${e.url}"/>
      </div>`:B`
      <input type='text' data-prop-id='displayName' class='flex-all' @change="${d}" 
      data-id="${t}" value="${e.displayName}" aria-label='${i18n.t("name")}'/>
      ${((t,e)=>B`
    <select data-id="${t}" @change="${d}" class='flex-all' aria-label='${i18n.t("Category")}'>
    ${s.attachmentcategories.map((t=>B`
      <option ?selected=${t.ID===e}>${t.ID}</option>
    `))}
    </select>`)(t,e.category)}
      <span class='flex-all'>${e.name}</span>
      <span>${Math.round(e.size/1e3)}Kb</span>
      <button type='button' data-id="${t}" @click="${l}" class='pzhc pzbutton Simple' 
      aria-label=${i18n.t("Delete")}>${ns()}</button>`:B`${y(t,e)}
    <button type='button' data-id="${t}" @click="${c}" class='pzhc pzbutton Simple' 
    aria-label=${i18n.t("Delete")}>${ns()}</button>`,x=t=>{if(!a)return Ns();const e=[];if(void 0!==t){const a=Object.entries(t);for(const t of a){let a=t[1].extension;void 0===a&&(a=t[1].type),a||(a=""),a.length>5&&(a=a.substring(0,5)),"URL"===t[1].type&&t[1].editing?e.push(B`<div class='flex layout-content-stacked content-items-maxwidth'>
              ${$(t[0],t[1])}
            </div>`):e.push(B`<div class='row-item'>
              <span class='doc-icon'>${rs()}<span>${a}</span></span>
              ${$(t[0],t[1])}
            </div>`)}}return e&&e.length>0?e:B`<div class='empty'>${i18n.t("no attachments found")}</div>`};if(!t){if(e&&e.length>0&&e[0].pyAttachName){n=0,e[0].extension="";const t=e[0].pyAttachName.split(".");return t.length>1&&(e[0].extension=t[t.length-1]),w(e[0])}return B`<div @dragenter="${h}" @dragover="${h}" @dragleave="${h}"  
    @drop="${h}" class='attach-files list-items'>
      <div class="file-upload">
        <input @change="${g}" type="file">
        ${os()}<span>${i18n.t(" Drag and drop or ")}
        <button type='button' aria-labelledby='${i18n.t("click to attach a file")}' class='Light' @click="${g}">${i18n.t("choose file")}</button>
      </div>
    </div>`}if(t&&t.classList.contains("attach-files")){if(i&&i.length>0)return s.sendData.call(s,"uploadattachment",{actionid:i[0],target:t}),_=i[0],C=!0,B`<div class='row-item'>
    <span class='doc-icon'>${rs()}<span>${_.extension}</span></span>
    <div class='list-item-title'><span>${_.displayName}</span>${C?B`<span class="list-item-meta"><span>
    ${i18n.t("Uploading...")}</span></span>`:""}</div>
  </div>`;if(e&&e.length>0)return w(e[0])}var _,C;let k="Attachments";return void 0!==i&&i.length>0&&(k="URL"===i[0].type?"Attach a link":"Attach files"),B`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${i18n.t(k)}</h2>
      <div class="flex layout-content-inline_middle margin-l-auto">
        <button type='button' data-action-id='close'
        class="pzhc pzbutton Simple" aria-label="${i18n.t("Close modal")}">${is()}</button>
      </div>
    </div>
    ${void 0!==i&&i.length>0?B`
      <div id="modalcontent" class='attach-files list-items'>
        <div class='upload-content'>${x(i)}</div>
        <div class="action-button-area">
          <button type="button" class="pzhc pzbutton" @click="${m}">${i18n.t("Cancel")}</button>
          <button type="button" class="Strong pzhc pzbutton" @click="${u}">${i18n.t("Upload")}</button>
        </div>
      </div>`:B`
      <form id="modalcontent" @dragenter="${h}" @dragover="${h}" @dragleave="${h}"  
      @drop="${h}" class='attach-files list-items'>
        <div class="file-upload">
          <input @change="${g}" type="file" multiple="">
          ${os()}<span>${i18n.t(" Drag and drop files, attach ")}
          <button type='button' aria-label='${i18n.t("click to attach a file")}' class='Light' @click="${g}">
          ${i18n.t("files")}</button> ${i18n.t("or add a")} 
          <button type='button' aria-label='${i18n.t("click to add a URL link")}' class='Light' @click="${f}">
          ${i18n.t("link")}</button></span>
        </div>
        ${x(e)}
      </form>
    `}
  `},qs=(t,e)=>B`
<div class="flex layout-content-inline_middle main-header">
  <h2>${i18n.t(t)}</h2>
  <div class="flex layout-content-inline_middle margin-l-auto">
    <button type='button' data-action-id='close'
    class="pzhc pzbutton Simple" aria-label="${i18n.t("Close modal")}">${is()}</button>
  </div>
</div>
<div class="validation" role="alert" aria-live="assertive"></div>
<form id="modalcontent">${e}</form>
`,Hs=(t,e,a,s)=>B`
  ${t.map(((t,i)=>{const n=`${e}-${i}`;if(t.layout){""!==t.layout.groupFormat.trim()&&"CENTER"!==t.layout.groupFormat||(t.layout.groupFormat="default");const e=t.layout.groupFormat.replace(/ /g,"_").toLowerCase(),i=`flex content layout-content-${e} content-${e}`;if(t.layout.view&&t.layout.view.groups)return B`
          <div class="${i}">${Hs(t.layout.view.groups,n,a,s)}</div>
        `;if(t.layout.groups){let e="";if("string"==typeof t.layout.title&&""!==t.layout.title&&(t.layout.titleFormat,1))switch(t.layout.titleFormat){case"h2":e=B`<h2>${t.layout.title}</h2>`;break;case"h3":e=B`<h3>${t.layout.title}</h3>`;break;case"h4":e=B`<h4>${t.layout.title}</h4>`;break;default:e=B`<h2>${t.layout.title}</h2>`}return B`
        ${e}<div class="${i}">${Hs(t.layout.groups,n,a,s)}</div>
        `}return t.layout.rows?t.layout.header?((t,e,a)=>B`
  ${zs(t.layout)}
  <table>
  <caption class="sr-only">${t.layout.title}</caption>
    <thead>
      <tr>
        ${Rs(t.layout.header.groups)}
      </tr>
    </thead>
    <tbody>
      ${Ms(t.layout.rows)}
    </tbody>
  </table>
  ${Es(t.layout,a)}
`)(t,0,a):Fs(t,n,a):null}if(t.field){if(t.field.control&&"pxAttachContent"===t.field.control.type)return Bs("Upload file","Upload file","",s.displayAttachments);if(t.field.control&&t.field.control.actionSets&&t.field.control.actionSets.length>0&&t.field.control.actionSets[0]&&t.field.control.actionSets[0].actions[0]&&"localAction"===t.field.control.actionSets[0].actions[0].action){const e=s.actionID;return((t,e,a)=>{const s=t.control.actionSets[0].actions[0].actionProcess.localAction,i=t.control.actionSets[0].actions[0].actionProcess.target,n=t.control.modes[1].controlFormat?t.control.modes[1].controlFormat:"";if("modalDialog"===i){const i=a=>{L(qs(t.control.label,Ns()),a),e(s,a)};return Ls(s,t.control.label,n,i,a)}return B`<div><button type="button" @click="${()=>{e(s)}}" class="pzhc pzbutton ${n}">${i18n.t(t.control.label)}</button></<div>`})(t.field,s.displayLocalAction,(()=>{s.reloadAssignment(e)}))}return us(t.field,n,a)}return t.view&&t.view.groups?"pyAttachFieldOptional"===t.view.viewID&&"Embed-Attach-File"===t.view.appliesTo?Bs("Upload file","Upload file","",s.displayAttachments):Hs(t.view.groups,n,a,s):null}))}
`,Fs=(t,e,a)=>B`
  ${zs(t.layout)}
  <div class="rdl">
    ${Us(t.layout.rows,e,a)}
  </div>
  ${Es(t.layout,a)}
`,Us=(t,e,a)=>B`
  ${t.map(((t,s)=>{const i=`${e}-row${s}`;return t.groups?B`
        <div>
          ${Hs(t.groups,i,a)}
        </div>
      `:null}))}
`,js=(t,e,a,s,i,n,o,r,c)=>{const l=B`${os()}<span class='count-badge'>${i}</span>`;if(void 0===e.caseID&&a.content)return B`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${a.content.pyLabel} <span>(${a.content.pyID})</span></h2>
      ${""!==s?B`<span class='badge-bg-info centered'><span class='badge_text'>${s}</span></span>`:""}
      <div class="flex layout-content-inline_middle margin-l-auto">
        ${c?Bs("Attachments",l,"Simple",c):""}
        ${a.actions&&a.actions.length>0?B`
          ${Ps("Actions","Start a new action",n,o)}`:""}
      </div>
    </div>
    ${((t,e)=>t&&0!==t.length?B`
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
        ${t.map((t=>B`
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
    ${((t,e)=>t&&0!==t.length?B`
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
        ${t.map((t=>B`
        <tr>
          <td>${t.ID}</td>
          <td class="right-aligned">
            <button type='button' @click="${e}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">${i18n.t("Open")}</button>
          </td>
        </tr>`))}
  </tbody>
  </table>`:null)(a.childCases,r)}
    <h3>Case information</h3>`;if(""===t||void 0===e.caseID)return"";const d=e.caseID.split(" ")[1];return B`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${e.name} <span>(${d})</span></h2>
    ${""!==s?B`<span class='badge-bg-info centered'><span class='badge_text'>${s}</span></span>`:""}
    <div class="flex layout-content-inline_middle margin-l-auto">
      ${c?Bs("Attachments",l,"Simple",c):""}
      ${e.actions&&e.actions.length>0?B`
        ${Ps("Actions","Start a new action",n,o)}`:""}
    </div>
  </div>
 <h3>${t}</h3>`},Vs=(t,e,a,s,i)=>B`
  <div class="flex layout-content-stacked">${Hs(t,e,!1,i)}</div>
  ${((t,e)=>B`
  <div class="action-button-area">
    ${null!==t?B`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    ${null!==e?B`<button type="button" class="pzhc pzbutton" @click="${e}">Save</button>`:""}
    <button type="button" data-submit="submit" class="Strong pzhc pzbutton">Submit</button>
  </div>
`)(a,s)}
`,Ws=(t,e,a,s)=>B`
  <div class="flex layout-content-stacked">${Hs(t,e,!0,s)}</div>
  ${(t=>null===t?null:B`
  <div class="action-button-area">
  ${null!==t?B`<button type="button" class="pzhc pzbutton Strong" @click="${t}">Close</button>`:""}
  </div>`)(a)}
`,Zs=(t,e,a,s,i)=>B`
  <div class="flex layout-content-stacked">${Hs(t,e,!1,i)}</div>
  ${((t,e)=>B`
  <div class="action-button-area">
    ${null!==t?B`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    <button type="button" data-submit="save" class="pzhc pzbutton Strong" @click="${e}">Submit</button>
  </div>
`)(a,s)}
`,Js=(t,e,a,s)=>B`
  <div class="flex layout-content-stacked">${Hs(t,e,!1,s)}</div>
  ${(t=>B`
  <div class="action-button-area">
    ${null!==t?B`<button type="button" class="pzhc pzbutton" @click="${t}">Cancel</button>`:""}
    <button type="button" data-submit="create" class="Strong pzhc pzbutton">Create</button>
  </div>
`)(a)}
`,Xs=t=>t.errorDetails?B`
    <ul>
      ${t.errorDetails.map((t=>B`<li>${t.localizedValue}</li>`))}
    </ul>`:B`
  <ul>
    ${t.errors[0].ValidationMessages.map((t=>t.Path?B`
          <li>${t.Path.substring(1)}: ${t.ValidationMessage}</li>
        `:0===t.ValidationMessage.indexOf("Validation failed")?null:B`
    <li>${t.ValidationMessage}</li>
  `))}
  </ul>`,Ks=(t,e)=>{const a=[],s=Object.entries(e.actions);for(const e of s)e[1].name!==t&&a.push(B`
          <li role="menuitem" tabindex="-1" data-value="${e[1].ID}">${e[1].name}</li>
        `);return B`
    ${a}
  `},Ys=t=>B`
${t.pxResults.map((t=>B`
    <option>
      ${t.pyUserName}
    </option>`))}`;class Gs extends tt{static get properties(){return{url:{},caseID:{},username:{},password:{},title:{},bShowCreate:{},bShowCancel:{},bShowAttachments:{},bShowSave:{},authentication:{},token:{},clientid:{},clientsecret:{},initialContent:{},action:{},casetype:{},portalName:{},langTokens:{}}}constructor(){super(),this.url="",this.title="My worklist",this.caseID="",this.username="",this.password="",this.bShowCreate="true",this.bShowCancel="true",this.bShowAttachments="false",this.bShowSave="true",this.authentication="",this.token="",this.clientid="",this.clientsecret="",this.initialContent="",this.action="",this.casetype="",this.portalName="",this.cases=[],this.dataPages={},this.name="",this.etag="",this.casepyStatusWork="",this.casedata={},this.data={},this.numAttachments=0,this.attachmentcategories=[],this.assignmentID="",this.actionID="",this.content={},this.pageInstructions=[],this.errorMsg="",this.validationMsg="",this.bShowConfirm=!1,this.bShowNew=!1,this.refreshOnChange=!1,this.isDeclarativeTarget=!1;const t=this;window.i18n||(window.i18n={t:function(e){if(!e)return"";if("string"!=typeof e)return e;let a=e;if(0===a.indexOf("@L ")&&(a=a.substring(3)),a=a.replace(/^"|"$/g,"").trim(),a=Fa(a),"object"!=typeof t.langTokens)return a;const s=t.langTokens[a];return s&&""!==s?s.trim():(console.log(a),a)}})}clearLoadingIndicator(){const t=this.getRenderRoot().querySelector("#case-data");t&&null!==t.querySelector(".loading")&&L(null,t)}sendExternalEvent(t){this.dispatchEvent(new CustomEvent("message",{detail:{...t}}))}}class Qs extends Gs{genErrorMessage(t){this.clearLoadingIndicator(),t.message&&-1!==t.message.indexOf("JSON.parse")?console.error("Error:",t):t.message&&-1!==t.message.indexOf("Unexpected token")?(this.errorMsg="Error 404: Resource not found",this.requestUpdate(),console.error(this.errorMsg)):(t.status?""!==t.statusText?this.errorMsg=`Error ${t.status}: ${t.statusText}`:401===t.status?this.errorMsg="Error 401: Authentication error":500===t.status?this.errorMsg="Error 500: Internal server error":this.errorMsg=`Error ${t.status}`:t.name&&t.message?this.errorMsg=`Error ${t.name}: ${t.message}`:this.errorMsg="string"==typeof t?t:"Critical error",this.requestUpdate(),console.error("Error:",t))}fetchData(t,e){const{id:a,actionid:s,target:i,element:n}=e||{};let o="";""!==this.authentication&&"basic"!==this.authentication||(o=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(o=`Bearer ${this.token}`);const r={method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:o},mode:"cors"};let c=`${this.url}/api/v1/`;switch(t){case"worklist":c+="assignments";break;case"casetypes":c+="casetypes";break;case"newwork":c+=`casetypes/${a}`;break;case"assignment":c+=`assignments/${a}`;break;case"case":c+=`cases/${a}`;break;case"data":c+=`data/${a}`;break;case"page":c+=`cases/${a}/pages/${s}`;break;case"view":c+=`cases/${a}/views/${s}`;break;case"assignmentaction":c+=`assignments/${a}/actions/${s}`;break;case"caseaction":c+=`cases/${a}/actions/${s}`;break;case"attachment":c+=`attachments/${a}`;break;case"attachments":c+=`cases/${a}/attachments`;break;case"attachmentcategories":c+=`cases/${a}/attachment_categories`}fetch(c,r).then((e=>{if("case"===t)this.etag=e.headers.get("etag"),i&&(i.disabled=!1,i.textContent="Save");else if("attachment"===t)return e.text();return e.ok||404===e.status?e.json():Promise.reject(e)})).then((e=>{try{if(e.errors&&e.errors.length>0)return this.errorMsg=`Error ${e.errors[0].ID}: ${e.errors[0].message}`,this.clearLoadingIndicator(),this.requestUpdate(),void console.error("Error:",e);const o=this.getRenderRoot().querySelector("#case-data");switch(t){case"casetypes":this.casetypes={};for(const t of e.caseTypes)"workList"===this.action&&""!==this.casetype&&this.casetype!==t.ID||(this.casetypes[t.ID]={canCreate:t.CanCreate,name:t.name,requiresFieldsToCreate:!1});"createNewWork"===this.action&&this.createCase();break;case"worklist":this.cases=e.assignments,this.requestUpdate();break;case"assignment":this.data=e,this.caseID=e.caseID,""===this.name&&(this.name=" "),this.fetchData("case",{id:this.caseID}),e.actions.length>0&&e.actions[0].ID?(this.actionID=e.actions[0].ID,this.name=e.actions[0].name,this.fetchData("assignmentaction",{id:a,actionid:this.actionID})):this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"});break;case"case":this.casedata=e,this.content={},this.pageInstructions=[],this.numAttachments=0,""===this.name&&(this.name=this.casedata.content.pyLabel),this.casepyStatusWork=this.casedata.content.pyStatusWork,this.requestUpdate(),""===this.assignmentID&&this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"}),"true"===this.bShowAttachments&&this.fetchData("attachments",{id:this.caseID});break;case"data":if(this.dataPages[a]=e,!n.nextElementSibling){console.error("Error: case data are not present when retrieving the data");break}L(Ys(e),n.nextElementSibling);break;case"caseaction":if(!o){console.error("Error: case data are not present when retrieving the assignmentaction");break}if(!e.view.groups)return this.errorMsg="Error: view is not defined",this.clearLoadingIndicator(),void this.requestUpdate();L(Zs(e.view.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,this.actionAreaSave,this),o),o.focus();break;case"assignmentaction":if(!o){console.error("Error: case data are not present when retrieving the assignmentaction");break}if(!e.view.groups)return this.errorMsg="Error: view is not defined",this.clearLoadingIndicator(),void this.requestUpdate();i?(this.actionID=s,L(qs(e.name,Vs(e.view.groups,"Obj",this.actionAreaCancel,null,this)),i),i.focus()):(this.name=e.name,this.requestUpdate(),L(Vs(e.view.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),o),o.focus());break;case"page":if(!o){console.error("Error: case data are not present when retrieving the page");break}L(Vs(e.groups,"Obj",this),o),o.focus();break;case"view":if(!o){console.error("Error: case data are not present when retrieving the page");break}this.content={},this.pageInstructions=[],"pyCaseInformation"===s?(this.name=e.name,L(Ws(e.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,this),o)):(this.name=e.name,L(Vs(e.groups,"Obj",this),o)),o.focus();break;case"newwork":if(this.content={},this.pageInstructions=[],!o){console.error("Error: case data are not present when retrieving the newwork");break}L(Js(e.creation_page.groups[0].layout.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null),o),o.focus();const t=this.getRenderRoot().querySelector("#case-data");t&&((t,e)=>{for(const a of t.elements)if("INPUT"===a.tagName||"TEXTAREA"===a.tagName||"SELECT"===a.tagName){const t=a.getAttribute("data-ref");if(null!==t&&"pyID"!==t&&e[t]){const s=e[t];if("object"==typeof s)"radio"===a.type?a.value===s.value&&(a.checked=!0):"checkbox"===a.type?!0!==s.value&&"true"!==s.value||(a.checked=!0):s.value&&(a.value=s.value),s.disabled&&(a.disabled=!0);else if("datetime-local"===a.type)24===s.length?a.value=s.substring(0,23):a.value=s;else if("date"===a.type){let s;a.valueAsDate&&(s=new Date(a.valueAsDate)),s&&s instanceof Date&&s.getTime()==s.getTime()||(s=new Date(a.value)),s&&s instanceof Date&&s.getTime()==s.getTime()?(s=new Date(s.getTime()+6e4*s.getTimezoneOffset()),ja(e,t,`${qa(s.getMonth()+1)}/${qa(s.getDate())}/${s.getFullYear()}`)):ja(e,t,a.value)}else"string"==typeof s?"radio"===a.type?a.value===s&&(a.checked=!0):"checkbox"===a.type?"true"===s&&(a.checked=!0):a.value=s:"boolean"==typeof s&&"checkbox"===a.type?!0===s&&(a.checked=!0):a.value=s}}})(t,this.initialContent);break;case"attachments":let r=e.attachments;r||(r=[]),this.numAttachments=r.length,i&&L(Os(i,r,this.caseID,this),i),this.requestUpdate();break;case"attachmentcategories":this.attachmentcategories=e.attachment_categories;break;case"attachment":i(e)}}catch(t){this.errorMsg=`Error: ${t}`,this.requestUpdate(),console.error("Error:",t)}})).catch((t=>{this.genErrorMessage(t)}))}sendData(t,e,a){const{id:s,actionid:i,target:n,refreshFor:o}=e;let r="";""!==this.authentication&&"basic"!==this.authentication||(r=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(r=`Bearer ${this.token}`);const c={"Content-Type":"application/json;charset=UTF-8",Authorization:r},l={method:"POST",headers:c,mode:"cors"},{pageInstructions:d,pageupdate:h}=as(this.content,this.pageInstructions);let u=`${this.url}/api/v1/`;switch(this.validationMsg="",t){case"authenticate":"oauth2password"===this.authentication?l.body=`grant_type=password&client_id=${this.clientid}&client_secret=${this.clientsecret}&username=${this.username}&password=${this.password}`:"oauth2clientcredentials"===this.authentication&&(l.body=`grant_type=client_credentials&client_id=${this.clientid}&client_secret=${this.clientsecret}`),l.headers["Content-Type"]="application/x-www-form-urlencoded",u=`${this.url}/PRRestService/oauth2/v1/token`;break;case"newwork":u+="cases",l.body=JSON.stringify({content:h,pageInstructions:d,caseTypeID:s});break;case"submitassignment":l.body=JSON.stringify({content:h,pageInstructions:d}),u+=`assignments/${s}?actionID=${i}`;break;case"savecase":u+=`cases/${s}`,i&&""!==i&&(u+=`?actionID=${i}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:h,pageInstructions:d});break;case"refreshnew":u+=`casetypes/${s}/refresh`,o&&""!==o&&(u+=`?refreshFor=${o}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:h,pageInstructions:d});break;case"refreshassignment":u+=`assignments/${s}/actions/${i}/refresh`,o&&""!==o&&(u+=`?refreshFor=${o}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:h,pageInstructions:d});break;case"refreshcase":u+=`cases/${s}/actions/${i}/refresh`,o&&""!==o&&(u+=`?refreshFor=${o}`),l.headers["If-Match"]=this.etag,l.method="PUT",l.body=JSON.stringify({content:h,pageInstructions:d});break;case"uploadattachment":u+="attachments/upload",delete c["Content-Type"];const t=new FormData;t.append("File",i,i.name),l.body=t;break;case"attachments":u+=`cases/${s}/attachments`,l.body=JSON.stringify({attachments:i});break;case"deleteattachment":u+=`attachments/${s}`,l.method="DELETE"}fetch(u,l).then((e=>"deleteattachment"===t||"attachments"===t?e.text():200===e.status||201===e.status||e.status>=400&&e.status<500?e.json():e.ok?Promise.resolve("ok"):Promise.reject(e))).then((e=>{if(e.errors&&e.errors.length>0){if(e.errors[0].ValidationMessages)if(n&&"modalcontent"===n.id)es(n,e.errors[0].ValidationMessages,this),L(Xs(e),n.previousElementSibling);else{const t=this.getRenderRoot().querySelector("#case-data");es(t,e.errors[0].ValidationMessages,this),this.validationMsg=Xs(e)}else this.errorMsg=`Error ${e.errors[0].ID}: ${e.errors[0].message}`;this.clearLoadingIndicator(),n&&"BUTTON"===n.tagName&&(n.disabled=!1,n.textContent="Save")}else if(e.access_token)this.token=e.access_token;else{const s=this.getRenderRoot().querySelector("#case-data");if("refreshcase"===t||"refreshassignment"===t||"refreshnew"===t){if(!s)return void console.error("Error: case data are not present");L("refreshnew"===t?Js(e.creation_page.groups[0].layout.groups,"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,this):Vs(e.view.groups,"Obj",this.actionAreaCancel,"true"===this.bShowSave?this.actionAreaSave:null,this),s)}else if("savecase"===t){if(this.fetchData("case",{id:this.caseID,target:n}),a)return void a()}else if("deleteattachment"===t||"attachments"===t)this.fetchData("attachments",{id:this.caseID,target:n});else if("uploadattachment"===t){let t=i.name.lastIndexOf(".");-1===t&&(t=i.name.length);const a=i.name.substring(t+1),s=[{type:"File",category:i.category,fileType:a,name:i.displayName,ID:e.ID}];return void this.sendData("attachments",{id:this.caseID,actionid:s,target:n})}e.ID&&(this.caseID=e.ID,"newwork"===t&&this.sendExternalEvent({type:"newwork",id:this.caseID})),e.nextAssignmentID?(s&&(L(Ns(),s),this.requestUpdate()),this.bShowNew=!1,this.assignmentID=e.nextAssignmentID,this.fetchData("assignment",{id:this.assignmentID})):e.nextPageID&&(s&&(L(Ns(),s),this.requestUpdate()),"Confirm"===e.nextPageID||"Review"===e.nextPageID?(this.bShowConfirm=!0,this.fetchData("view",{id:this.caseID,actionid:"pyCaseInformation"}),this.fetchData("case",{id:this.caseID})):this.fetchData("page",{id:this.caseID,actionid:e.nextPageID}))}this.requestUpdate()})).catch((t=>{this.genErrorMessage(t)}))}}const ti=(t,e,a,s)=>B`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${i18n.t(t)} <span>(${e})</span></h2>
    <span class='badge-bg-info centered'><span class='badge_text'>${a}</span></span>
    ${s?B`<div class="flex layout-content-inline_middle margin-l-auto">
        ${Bs("Attachments",os(),"Simple",s)}
      </div>`:""}
  </div>
  <div class="flex layout-content-inline_middle success">
    ${i18n.t("Thank you. Your information has been submitted.")}
  </div>
  <h3>${i18n.t("Case information")}</h3>
  <div id="case-data">${Ns()}</div>`,ei=(t,e)=>B`
  <div class="error">${t}
  ${null!=e?B`
    <button type='button' aria-label="${i18n.t("Click to close the banner")}" class="pzhc pzbutton Light" @click="${e}">
    ${is()}</button>`:""}
  </div>`,ai=(t,e,a,s,i,n)=>B`
  <div class="flex layout-content-inline_middle main-header">
    <h2>
    ${i18n.t(t)}
      ${e.length>0?B`<span>(${e.length})</span>`:""}
    </h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      <button type='button' class="pzhc pzbutton Simple"
      title='${i18n.t("Click to refresh the worklist")}' @click="${s}">${i18n.t("Refresh")}</button>
      ${Ps("Create","Create a new case",a,i)}
    </div>
  </div>
  ${e.length>0?B`
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
            ${e.map((t=>B`
                <tr>
                  <td data-title='Name'>${i18n.t(t.name)}</td>
                  <td data-title='Case ID'>${t.caseID}</td>
                  <td data-title='Urgency' class="right-aligned">${t.urgency}</td>
                  <td data-title='Action' class="right-aligned">
                    <button @click="${n}" class="pzhc pzbutton" data-type="assignment" data-id="${t.ID}">
                    ${i18n.t("Open")}</button>
                  </td>
                </tr>
              `))}
          </tbody>
        </table>
      `:B`
        <div class="margin-t-2x">${i18n.t("no assignments")}</div>
      `}
`;class si extends Qs{displayContent(){return""!==this.errorMsg?ei(this.errorMsg,"true"===this.bShowCancel?this.resetError:null):"oauth2password"!==this.authentication&&"oauth2clientcredentials"!==this.authentication||""!==this.token?(this.casetypes||"createNewWork"!==this.action&&"workList"!==this.action?""===this.name&&("openAssignment"===this.action&&""===this.assignmentID&&(this.assignmentID=this.caseID),""!==this.assignmentID?this.fetchData("assignment",{id:this.assignmentID}):""!==this.caseID&&this.fetchData("case",{id:this.caseID})):(this.fetchData("casetypes"),"createNewWork"===this.action?(this.bShowNew=!0,this.casetypes[this.casetype]&&this.fetchData("newwork",{id:this.casetype})):"workList"===this.action&&(this.bShowCancel="true",this.fetchData("worklist"))),this.bShowConfirm?ti(this.casedata.content.pyLabel,this.casedata.content.pyID,this.casepyStatusWork,"true"===this.bShowAttachments?this.displayAttachments:null):""!==this.caseID||""!==this.assignmentID||this.bShowNew?B`
        ${js(this.name,this.data,this.casedata,this.casepyStatusWork,this.numAttachments,this.displayActions,this.runAction,this.openCase,"true"===this.bShowAttachments?this.displayAttachments:null)}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
        <form id="case-data">${Ns()}</form>
      `:"workList"===this.action?ai(this.title,this.cases,this.displayCasesTypes,this.reloadWorkList,"true"===this.bShowCreate?this.createCase:null,this.openCase):null):(this.sendData("authenticate",{}),null)}resetError=t=>{this.errorMsg="",this.validationMsg="",this.actionAreaCancel(t)};reloadWorkList=t=>{this.cases=[],this.requestUpdate(),this.actionAreaCancel(t)};actionAreaCancel=t=>{if(t&&t.preventDefault(),t.target&&null!==t.target.closest(".mashup-modal")){const e=t.target.closest(".mashup-modal").querySelector("button");if(null!==e)return void e.click()}this.bShowConfirm=!1,this.bShowNew=!1,this.caseID="",this.data={},this.content={},this.pageInstructions=[],this.casedata={},this.attachmentcategories=[],this.casepyStatusWork="",this.assignmentID="",this.actionID="",this.errorMsg="",this.numAttachments=0,this.validationMsg="",this.name="","workList"===this.action&&this.fetchData("worklist"),this.sendExternalEvent({type:"cancel"})};actionAreaSave=t=>{t&&t.preventDefault(),null===t.target.getAttribute("data-submit")&&(t.target.textContent="Saving...",t.target.disabled=!0);const e=this.getRenderRoot().querySelector("#case-data");e&&(ts(e,this.content,this.pageInstructions,this.casedata.content),""!==this.assignmentID?this.sendData("savecase",{id:this.caseID,actionid:"",target:t.target}):this.sendData("savecase",{id:this.caseID,actionid:this.actionID,target:t.target}))};actionRefresh=()=>{const t=this.getRenderRoot().querySelector("#case-data");t&&(this.validationMsg="",ts(t,this.content,this.pageInstructions,this.casedata.content),""!==this.assignmentID?this.fetchData("assignmentaction",{id:this.assignmentID,actionid:this.actionID}):this.fetchData("caseaction",{id:this.caseID,actionid:this.actionID}))};displayCasesTypes=()=>(t=>{const e=[],a=Object.entries(t);for(const t of a)"true"===t[1].canCreate&&e.push(B`
          <li role="menuitem" tabindex="-1" data-value="${t[0]}">${t[1].name}</li>
        `);return B`
    ${e}
  `})(this.casetypes);displayActions=()=>this.data.actions?Ks(this.name,this.data):this.casedata.actions?Ks(this.name,this.casedata):null;displayAttachments=t=>{this.fetchData("attachmentcategories",{id:this.caseID}),this.fetchData("attachments",{id:this.caseID,target:t})};displayLocalAction=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");if(a&&(ts(a,this.content,this.pageInstructions,this.casedata.content),""!==this.assignmentID)){const a=this;this.sendData("savecase",{id:this.caseID},(()=>{this.actionID=t,a.fetchData("assignmentaction",{id:this.assignmentID,actionid:t,target:e})}))}};reloadAssignment=t=>{this.actionID=t,this.fetchData("assignmentaction",{id:this.assignmentID,actionid:t})};submitForm=(t,e)=>{if(t.preventDefault(),t.target&&null!==t.target.closest(".mashup-modal")){const e=t.target.closest("#modalcontent");ts(e,this.content,this.pageInstructions,this.casedata.content),e.checkValidity()?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID,target:e}):e.reportValidity()}else{const t=this.getRenderRoot().querySelector("#case-data");ts(t,this.content,this.pageInstructions,this.casedata.content),t.checkValidity()?"create"!==e?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID}):this.sendData("newwork",{id:this.casetype}):t.reportValidity()}return!1};createCase=t=>{if(this.name="New Case",this.bShowNew=!0,t){let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&(this.casetype=e.getAttribute("data-value"),this.name=`New ${e.textContent} `)}this.content=this.initialContent,this.pageInstructions=[],this.caseID="",this.data={},this.casedata={},this.casetypes[this.casetype]?"true"===this.casetypes[this.casetype].requiresFieldsToCreate?this.fetchData("newwork",{id:this.casetype}):this.sendData("newwork",{id:this.casetype}):(this.errorMsg=`Case '${this.casetype}' is not defined`,console.error(`Case '${this.casetype}' is not defined`)),this.requestUpdate()};runAction=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&null!==e.getAttribute("data-value")&&(this.actionID=e.getAttribute("data-value"),this.actionRefresh());const a=this.getRenderRoot().querySelector("#case-data");null!=a&&L(Ns(),a)};openCase=t=>{t.preventDefault(),this.caseID=t.target.getAttribute("data-id"),this.name="",this.data={},this.casedata={},0===this.caseID.indexOf("ASSIGN-WORKLIST")?(this.sendExternalEvent({type:"openassignment",id:this.caseID}),this.assignmentID=this.caseID,this.caseID=""):(this.sendExternalEvent({type:"opencase",id:this.caseID}),this.assignmentID="");const e=this.getRenderRoot().querySelector("#case-data");null!=e&&L(Ns(),e),this.requestUpdate()};getData=(t,e)=>{this.dataPages[t]?L(Ys(this.dataPages[t]),e.nextElementSibling):this.fetchData("data",{id:t,element:e})};setInlineError=(t,e)=>{t.setCustomValidity(Fa(e)),t.classList.add("error-field"),t.reportValidity()};refreshAssignment=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");let s=t;if(a){if(ts(a,this.content,this.pageInstructions,this.casedata.content),s){"path"===s.tagName&&(s=s.parentNode),"svg"===s.tagName&&(s=s.parentNode);const t=s.getAttribute("data-action-click"),e=s.getAttribute("data-ref");if(null!==e&&null!==t)if("addRow"===t){const t=Ja(this.casedata.content,e,s.getAttribute("data-newrow"));null!==t&&this.pageInstructions.push(t)}else if("deleteRow"===t){const t=Xa(this.casedata.content,e);null!==t&&this.pageInstructions.push(t)}}!0===this.bShowNew?this.sendData("refreshnew",{id:this.casetype,refreshFor:e}):this.sendData("refreshassignment",{id:this.assignmentID,actionid:this.actionID,refreshFor:e})}};clickHandler=t=>{let e=t.target;"path"===e.tagName&&(e=e.parentNode),"svg"===e.tagName&&(e=e.parentNode);const a=e.getAttribute("data-action-click");e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e),Ka(e,"click")?(this.refreshAssignment(e,Ya(e,"click")),t.preventDefault()):"BUTTON"===e.tagName&&(t.preventDefault(),null!==e.getAttribute("data-submit")&&"save"!==e.getAttribute("data-submit")?this.submitForm(t,e.getAttribute("data-submit")):("addRow"===a||"deleteRow"===a)&&this.refreshAssignment(e))};changeHandler=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e.setCustomValidity(""),e.classList.remove("error-field"),Ka(e,"change")&&this.refreshAssignment(e,Ya(e,"change"))};keyupHandler=t=>{const e=t.target;"TEXTAREA"===e.tagName&&(e.style.cssText="height:auto; padding:0;",e.style.cssText=`height:${e.scrollHeight}px`)};focusHandler=t=>{const e=t.target;e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e)};async firstUpdated(){const t=this.getRenderRoot();t&&(t.addEventListener("click",this.clickHandler),t.addEventListener("focusin",this.focusHandler),t.addEventListener("change",this.changeHandler),t.addEventListener("keyup",this.keyupHandler))}}const ii=()=>B`
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
`;customElements.define("pega-mashup",class extends si{createRenderRoot(){return this.attachShadow({mode:"open"})}getRenderRoot(){return this.shadowRoot}render(){return B`
      ${ii()} ${this.displayContent()}
    `}});customElements.define("pega-mashup-light",class extends si{createRenderRoot(){return this}getRenderRoot(){return this}render(){return B`
      ${this.displayContent()}
    `}});const ni=()=>`${window.location.href.substring(0,window.location.href.lastIndexOf("/"))}/auth.html`,oi=(t,e)=>{const{urlparam:a,verifier:s}=(()=>{const t=`${Oa.lib.WordArray.random(16)}`;return{urlparam:`response_type=code&scope=openid&code_challenge=${Oa.SHA256(t)}&code_challenge_method=S256&response_mode=query&authentication_service=pega`,verifier:t}})(),i=`${t}/PRRestService/oauth2/v1/authorize?client_id=${e}&redirect_uri=${encodeURIComponent(ni())}&${a}&state=${s}`,n=B`<Button class="pzhc pzbutton" onclick="window.location='${i}'; return false;">${i18n.t("Pega with full page redirect")}</Button>`,o=B`<Button class="pzhc pzbutton" onclick="n=window.open('${i}', 'foo', 'width=600,height=600');n.focus(); return false;">
  ${i18n.t("Pega with popup")}</Button>`;return B`<div class='flex flex-col'><h2>${i18n.t("Log in to the application with one of the following:")}</h2>
  <div class='flex layout-content-inline_middle'>${o}${n}</div></div>`};class ri extends Gs{resetError=t=>{this.errorMsg="",this.validationMsg="",this.actionAreaCancel(t)};reloadWorkList=t=>{this.cases=[],this.requestUpdate(),this.actionAreaCancel(t)};actionAreaCancel=t=>{t&&t.preventDefault(),this.bShowConfirm=!1,this.bShowNew=!1,this.caseID="",this.data={},this.content={},this.pageInstructions=[],this.casedata={},this.attachmentcategories=[],this.casepyStatusWork="",this.assignmentID="",this.actionID="",this.errorMsg="",this.numAttachments=0,this.validationMsg="",this.name="","workList"===this.action&&this.fetchData("portal"),this.sendExternalEvent({type:"cancel"})};actionAreaSave=t=>{t&&t.preventDefault(),null===t.target.getAttribute("data-submit")&&(t.target.textContent="Saving...",t.target.disabled=!0);const e=this.getRenderRoot().querySelector("#case-data");e&&(ts(e,this.content,this.pageInstructions,this.data.data.caseInfo.content),""!==this.assignmentID?this.sendData("savecase",{id:this.caseID,actionid:"",target:t.target}):this.sendData("savecase",{id:this.caseID,actionid:this.actionID,target:t.target}))};actionRefresh=()=>{const t=this.getRenderRoot().querySelector("#case-data");t&&(this.validationMsg="",ts(t,this.content,this.pageInstructions,this.data.data.caseInfo.content),this.fetchData("caseaction",{id:this.caseID,actionid:this.actionID}))};displayActions=()=>this.data.actions?this.genActionsList(this.name,this.data):this.casedata.actions?this.genActionsList(this.name,this.casedata):null;displayAttachments=t=>{this.fetchData("attachmentcategories",{id:this.caseID}),this.fetchData("attachments",{id:this.caseID,target:t})};submitForm=(t,e)=>{const a=this.getRenderRoot().querySelector("#case-data");return ts(a,this.content,this.pageInstructions,this.data.data.caseInfo.content),this.validateForm(a)?"create"!==e?""!==this.data.ID?this.sendData("submitassignment",{id:this.data.ID,actionid:this.actionID}):this.sendData("submitcaseaction",{id:this.data.caseID,actionid:this.actionID}):this.sendData("newwork",{id:this.casetype}):this.reportFormValidity(a),t.preventDefault(),!1};createCase=t=>{if(this.name="New Case",this.bShowNew=!0,t){let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&(this.casetype=e.getAttribute("data-value"),this.name=`New ${e.textContent} `)}this.content=this.initialContent,this.pageInstructions=[],this.caseID="",this.data={},this.casedata={},this.casetypes[this.casetype]?this.sendData("newwork",{id:this.casetype}):(this.errorMsg=`Case '${this.casetype}' is not defined`,console.error(`Case '${this.casetype}' is not defined`)),this.requestUpdate()};runAction=t=>{let e=t.target;t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e&&null!==e.getAttribute("data-value")&&(this.actionID=e.getAttribute("data-value"),this.name=e.innerText,this.data.ID="",this.actionRefresh());const a=this.getRenderRoot().querySelector("#case-data");null!=a&&L(this.genLoadingIndicator(),a)};openCase=t=>{t.preventDefault(),this.caseID=t.target.getAttribute("data-id"),this.name="",this.data={},this.casedata={},0===this.caseID.indexOf("ASSIGN-WORKLIST")?(this.sendExternalEvent({type:"openassignment",id:this.caseID}),this.assignmentID=this.caseID,this.caseID=""):(this.sendExternalEvent({type:"opencase",id:this.caseID}),this.assignmentID="");const e=this.getRenderRoot().querySelector("#case-data");null!=e&&L(this.genLoadingIndicator(),e),this.requestUpdate()};getData=(t,e)=>{this.dataPages[t]?L(this.showDataList(this.dataPages[t]),e.nextElementSibling):this.fetchData("data",{id:t,element:e})};applyAction=t=>{const e=this.getRenderRoot().querySelector("#case-data");let a=t;if(e){if(a){"path"===a.tagName&&(a=a.parentNode),"svg"===a.tagName&&(a=a.parentNode);const t=a.getAttribute("data-action-click"),e=a.getAttribute("data-ref");if(null!==e&&null!=t){if("addRow"===t){const t=Ja(this.data.data.caseInfo.content,e,a.getAttribute("data-newrow"));return void(null!==t&&this.pageInstructions.push(t))}if("deleteRow"===t){const t=Xa(this.data.data.caseInfo.content,e);return void(null!==t&&this.pageInstructions.push(t))}}}ts(e,this.content,this.pageInstructions,this.data.data.caseInfo.content)}};refreshAssignment=(t,e)=>{this.applyAction(t),!0===this.bShowNew?this.sendData("refreshnew",{id:this.casetype,refreshFor:e}):this.sendData("refreshassignment",{id:this.assignmentID,actionid:this.actionID,refreshFor:e})};genErrorMessage(t){this.clearLoadingIndicator(),t.message&&-1!==t.message.indexOf("JSON.parse")?console.error("Error:",t):t.message&&-1!==t.message.indexOf("Unexpected token")?(this.errorMsg="Error 404: Resource not found",this.requestUpdate(),console.error(this.errorMsg)):(t.status?""!==t.statusText?this.errorMsg=`Error ${t.status}: ${t.statusText}`:401===t.status?this.errorMsg="Error 401: Authentication error":423===t.status?this.errorMsg="Error 423: Resource is locked by another user":500===t.status?this.errorMsg="Error 500: Internal server error":this.errorMsg=`Error ${t.status}`:t.name&&t.message?this.errorMsg=`Error ${t.name}: ${t.message}`:this.errorMsg="string"==typeof t?t:"Critical error",this.requestUpdate(),console.error("Error:",t))}fetchData(t,e){const{id:a,actionid:s,target:i}=e||{};let n="";""!==this.authentication&&"basic"!==this.authentication||(n=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(n=`Bearer ${this.token}`);const o={method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:n},mode:"cors"};let r=`${this.url}/api/application/v2/`;switch(t){case"portal":r+=`portals/${this.portalName}`;break;case"assignment":r+=`assignments/${a}`;break;case"view":r+=`cases/${a}/views/${s}`;break;case"caseaction":r+=`cases/${a}/actions/${s}`;break;case"attachment":r+=`attachments/${a}`;break;case"attachments":r+=`cases/${a}/attachments`;break;case"attachmentcategories":r+=`cases/${a}/attachment_categories`}fetch(r,o).then((a=>{if("assignment"===t)this.etag=a.headers.get("etag");else if("attachment"===t)return a.text();return a.ok||404===a.status?a.json():401===a.status?(this.token="",this.sendData("authenticate",{...e,type:t,cmd:"fetchData"}),a.json()):Promise.reject(a)})).then((e=>{try{if(e.errors&&e.errors.length>0)return;if(e.pyLocalizedValue)return this.errorMsg=`Error: ${e.pyLocalizedValue}`,void this.requestUpdate();if(e.errorDetails&&e.errorDetails.length>0)return this.errorMsg=`Error ${e.errorDetails[0].message}: ${e.localizedValue}`,this.clearLoadingIndicator(),this.requestUpdate(),void console.error("Error:",e);const n=this.getRenderRoot().querySelector("#case-data");switch(t){case"portal":if(this.content={},this.pageInstructions=[],!this.casetypes){this.casetypes={};let t=[];e.data&&e.data.D_pzCasesAvailableToCreateForPortal&&e.data.D_pzCasesAvailableToCreateForPortal.pxResults?t=e.data.D_pzCasesAvailableToCreateForPortal.pxResults:e.data&&e.data.pyPortal&&e.data.pyPortal.pyCaseTypesAvailableToCreate&&(t=e.data.pyPortal.pyCaseTypesAvailableToCreate);for(const e of t)"workList"===this.action&&""!==this.casetype&&this.casetype!==e.pyClassName||(this.casetypes[e.pyClassName]={canCreate:!0,name:e.pyLabel})}this.cases=[];let t=[];if(e.data&&e.data.D_pyUserWorkList&&e.data.D_pyUserWorkList.pxResults?t=e.data.D_pyUserWorkList.pxResults:e.uiResources.context_data.pyPortal.summary_of_lists__.D_pyMyWorkList.pxResults&&(t=e.data[e.uiResources.context_data.pyPortal.summary_of_lists__.D_pyMyWorkList.pxResults.replace(".pxResults","")].pxResults),t.length>0)for(const e of t)this.cases.push({name:e.pyLabel,caseID:e.pxRefObjectKey,urgency:e.pxUrgencyAssign,ID:e.pzInsKey,label:e.pxTaskLabel});this.requestUpdate();break;case"assignment":this.content={},this.pageInstructions=[],this.isDeclarativeTarget=!1,this.refreshOnChange=!1,this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel,this.caseID=this.casedata.ID,this.data.caseID=this.caseID,this.data.ID=a;for(const t of this.casedata.assignments)if(a===t.ID&&t.actions&&t.actions.length>0){this.actionID=t.actions[0].ID;break}this.casepyStatusWork=this.casedata.status,this.data.actions=this.casedata.availableActions,this.name=this.casedata.stageLabel;const o=this.getRenderRoot().querySelector("#case-data");o&&ts(o,this.casedata.content),this.content={},L(this.renderMainLayout(e.uiResources.resources.views[this.casedata.content.pyViewName],"Obj"),n),this.requestUpdate(),n.focus();break;case"view":if(!n){console.error("Error: case data are not present when retrieving the page");break}this.content={},this.pageInstructions=[],this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel?this.casedata.content.pyLabel:this.casedata.name,this.casedata.actions=this.casedata.availableActions,this.casedata.content.pyID=this.casedata.ID,this.data.ID=this.casedata.ID,this.casepyStatusWork=this.casedata.status,this.name=this.casedata.stageLabel,this.content={},"true"===this.bShowAttachments&&this.fetchData("attachments",{id:this.caseID}),this.name=e.data.caseInfo.name,L(this.renderReviewLayout(e.uiResources.resources.views[s],"Obj"),n),this.requestUpdate(),n.focus();break;case"caseaction":this.content={},this.pageInstructions=[],this.isDeclarativeTarget=!1,this.refreshOnChange=!1,this.data=e,this.casedata=e.data.caseInfo,this.data.name=this.casedata.content.pyLabel,this.caseID=this.casedata.ID,this.data.caseID=this.caseID,this.data.ID="",this.casepyStatusWork=this.casedata.status,this.data.actions=this.casedata.availableActions,this.name=this.casedata.stageLabel,this.content={},L(this.renderMainLayout(e.uiResources.resources.views[e.uiResources.root.config.name],"Obj"),n),this.requestUpdate(),n.focus();break;case"attachments":let r=e.attachments;r||(r=[]),this.numAttachments=r.length,i&&L(Os(i,r,this.caseID,this),i),this.requestUpdate();break;case"attachmentcategories":this.attachmentcategories=e.attachment_categories;break;case"attachment":i(e)}}catch(t){this.errorMsg=`Error: ${t}`,this.requestUpdate(),console.error("Error:",t)}})).catch((t=>{this.genErrorMessage(t)}))}sendData(t,e){const{id:a,actionid:s,target:i}=e;let n="";""!==this.authentication&&"basic"!==this.authentication||(n=`Basic ${btoa(`${this.username}:${this.password}`)}`),""!==this.token&&(n=`Bearer ${this.token}`);const o={"Content-Type":"application/json;charset=UTF-8",Authorization:n},r={method:"POST",headers:o,mode:"cors"},{pageInstructions:c,pageupdate:l}=as(this.content,this.pageInstructions);let d=`${this.url}/api/application/v2/`;switch(this.validationMsg="",t){case"authenticate":"oauth2password"===this.authentication?r.body=`grant_type=password&client_id=${this.clientid}&client_secret=${this.clientsecret}&username=${this.username}&password=${this.password}`:"oauth2clientcredentials"===this.authentication?r.body=`grant_type=client_credentials&client_id=${this.clientid}&client_secret=${this.clientsecret}`:"authorizationcode"===this.authentication&&(r.body=`grant_type=authorization_code&client_id=${this.clientid}&code_verifier=${window.history.state.verifier}&code=${window.history.state.code}&redirect_uri=${encodeURIComponent(ni())}`),r.headers["Content-Type"]="application/x-www-form-urlencoded",d=`${this.url}/PRRestService/oauth2/v1/token`;break;case"newwork":d+="cases?viewType=form",r.body=JSON.stringify({caseTypeID:a,processID:"pyStartCase",content:{}});break;case"submitassignment":r.body=JSON.stringify({content:l,pageInstructions:c}),r.method="PATCH",r.headers["If-Match"]=this.etag,d+=`assignments/${a}/actions/${s}?viewType=form`;break;case"submitcaseaction":r.body=JSON.stringify({content:l,pageInstructions:c}),r.method="PATCH",r.headers["If-Match"]=this.etag,d+=`cases/${a}/actions/${s}?viewType=form`;break;case"refreshassignment":d+=`assignments/${a}/actions/${s}/refresh`,r.headers["If-Match"]=this.etag,r.method="PATCH",r.body=JSON.stringify({content:l,pageInstructions:c,contextData:!0});break;case"dataviews":d+=`data_views/${a}`,r.body=JSON.stringify(e.content);break;case"uploadattachment":d+="attachments/upload",delete o["Content-Type"];const t=new FormData;t.append("File",s,s.name),r.body=t;break;case"attachments":d+=`cases/${a}/attachments`,r.body=JSON.stringify({attachments:s});break;case"deleteattachment":d+=`attachments/${a}`,r.method="DELETE"}fetch(d,r).then((a=>"deleteattachment"===t||"attachments"===t?a.text():("submitassignment"!==t&&"newwork"!==t||(this.etag=a.headers.get("etag")),200===a.status||201===a.status||a.status>=400&&a.status<500||500===a.status?(401===a.status&&"authenticate"!==t&&(this.token="",this.sendData("authenticate",{...e,type:t,cmd:"sendData"})),a.json()):a.ok?Promise.resolve("ok"):Promise.reject(a)))).then((a=>{if(a.errors&&a.errors.length>0)return this.errorMsg=`Error: ${a.errors[0].message.trim()}`,void this.requestUpdate();if(a.access_token)this.token=a.access_token,window.history.replaceState({token:this.token},"",window.location.href),e!=={}&&e.type&&e.cmd&&("sendData"===e.cmd?this.sendData(e.type,e):this.fetchData(e.type,e));else if(a.errorDetails&&a.errorDetails.length>0){if(a.errorDetails[0].localizedValue){const t=this.getRenderRoot().querySelector("#case-data");es(t,a.errorDetails,this),this.validationMsg=this.genPageValidationErrors(a,t)}else this.errorMsg=`Error ${a.errorDetails[0].message}: ${a.localizedValue}`;this.clearLoadingIndicator(),i&&(i.disabled=!1,i.textContent="Save"),"submitassignment"===t&&this.fetchData("assignment",{id:this.assignmentID})}else{const e=this.getRenderRoot().querySelector("#case-data");if("newwork"===t&&a.data.caseInfo.ID&&""!==a.data.caseInfo.ID&&this.sendExternalEvent({type:"newwork",id:a.data.caseInfo.ID}),"refreshassignment"===t)return void(e&&a.data.caseInfo&&a.data.caseInfo.content&&(this.data.data.caseInfo.content=a.data.caseInfo.content,this.casedata.content=a.data.caseInfo.content,L(this.renderMainLayout(this.data.uiResources.resources.views[this.actionID],"Obj"),e)));if("deleteattachment"===t)i&&!i.classList.contains("attach-files")&&this.fetchData("attachments",{id:this.caseID,target:i});else if("attachments"===t)this.fetchData("attachments",{id:this.caseID,target:i});else if("uploadattachment"===t){let t=s.name.lastIndexOf(".");-1===t&&(t=s.name.length);const e=s.name.substring(t+1),n=[{type:"File",category:s.category,fileType:e,name:s.displayName,ID:a.ID}];return void this.sendData("attachments",{id:this.caseID,actionid:n,target:i})}if(a.confirmationNote)this.bShowConfirm=!0,this.caseID=a.data.caseInfo.ID,this.fetchData("view",{id:this.caseID,actionid:"pyReview"});else if(a.uiResources){if(this.bShowNew=!1,this.content={},this.pageInstructions=[],this.assignmentID=a.nextAssignmentInfo.ID,this.data=a,this.casedata=a.data.caseInfo,this.data.name=this.casedata.content.pyLabel?this.casedata.content.pyLabel:this.casedata.name,this.caseID=this.casedata.content.pzInsKey,this.data.caseID=a.data.caseInfo.ID,this.data.ID=this.assignmentID,this.casedata.content.pyViewName=a.uiResources.root.config.name,this.actionID=this.casedata.content.pyViewName,this.casedata.assignments)for(const t of this.casedata.assignments)if("pzQuestionPageScr"===t.processID&&this.data.ID===t.ID&&t.actions&&t.actions.length>0){this.actionID=t.actions[0].ID;break}this.casepyStatusWork=a.data.caseInfo.status,this.data.actions=a.data.caseInfo.availableActions,this.name=a.data.caseInfo.stageLabel,e&&(L(this.renderMainLayout(a.uiResources.resources.views[this.casedata.content.pyViewName],"Obj"),e),e.focus())}}this.requestUpdate()})).catch((t=>{this.genErrorMessage(t)}))}}const ci=t=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20px" height="20px" fill="currentColor">${t}</svg>`;class li extends tt{static get properties(){return{content:{},root:{}}}createRenderRoot(){return this}constructor(t,e,a){super(),this.content=t,this.root="";const s=(new DOMParser).parseFromString(this.content,"text/html");document.execCommand("defaultParagraphSeparator",!1,"br");const i=document.createElement("div"),n=s.querySelector("body");i.setAttribute("contenteditable","true"),i.setAttribute("data-ref",e),i.setAttribute("id",a),i.innerHTML=n.innerHTML,this.root=i}render(){return B`<div class='rich-text-main'>
      <div class="editor-actions">
        <div class="toolbar">
          ${this.renderToolbar(((t,e)=>{document.execCommand(t,!1,e)}))}
        </div>
      </div>
      <div class="editor">${this.root}</div>
    </div>`}async firstUpdated(){document.addEventListener("selectionchange",(()=>{this.requestUpdate()}))}renderToolbar(t){const e=document.getSelection?document.getSelection():null,a=[];if(e&&"Range"===e.type){let t=e.baseNode;if(t)for(;null!=t;){const e=t&&t.tagName?t.tagName.toLowerCase().trim():void 0;e&&a.push(e),t=t.parentNode}}const s=[{icon:"Clear",title:"Remove all styling",command:"removeFormat"},{title:"Change format",command:"formatblock",values:[{name:"Normal Text",value:"--"},{name:"Heading 1",value:"h1"},{name:"Heading 2",value:"h2"},{name:"Heading 3",value:"h3"},{name:"Heading 4",value:"h4"},{name:"Heading 5",value:"h5"},{name:"Heading 6",value:"h6"},{name:"Paragraph",value:"p"},{name:"Pre-Formatted",value:"pre"}]},{title:"Change font size",command:"fontsize",values:[{name:"Font Size",value:"--"},{name:"Very Small",value:"1"},{name:"Small",value:"2"},{name:"Normal",value:"3"},{name:"Medium Large",value:"4"},{name:"Large",value:"5"},{name:"Very Large",value:"6"},{name:"Maximum",value:"7"}]},{icon:()=>ci('<path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"></path>'),title:"Bold",command:"bold",active:a.includes("b")},{icon:()=>ci('<path d="m9.586 14.633.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"></path>'),title:"Italic",command:"italic",active:a.includes("i")},{icon:()=>ci('<path d="M3 18v-1.5h14V18zm2.2-8V3.6c0-.4.4-.6.8-.6.3 0 .7.2.7.6v6.2c0 2 1.3 2.8 3.2 2.8 1.9 0 3.4-.9 3.4-2.9V3.6c0-.3.4-.5.8-.5.3 0 .7.2.7.5V10c0 2.7-2.2 4-4.9 4-2.6 0-4.7-1.2-4.7-4z"></path>'),title:"Underline",command:"underline",active:a.includes("u")},{icon:()=>ci('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"></path>'),title:"Align left",command:"justifyleft"},{icon:()=>ci('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"></path>'),title:"Align middle",command:"justifycenter"},{icon:()=>ci('<path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"></path>'),title:"Align right",command:"justifyright"},{icon:()=>ci('<path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"></path>'),title:"Numbered list",command:"insertorderedlist",active:a.includes("ol")},{icon:()=>ci('<path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"></path>'),title:"Bullet list",command:"insertunorderedlist",active:a.includes("ul")},{icon:()=>ci('<path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"></path>'),command:"formatblock",title:"Format block quote",command_value:"blockquote"},{icon:()=>ci('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zm1.618-9.55L.98 9.358a.4.4 0 0 0 .013.661l3.39 2.207A.4.4 0 0 0 5 11.892V7.275a.4.4 0 0 0-.632-.326z"></path>'),title:"decrease indent",command:"outdent"},{icon:()=>ci('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zM1.632 6.95 5.02 9.358a.4.4 0 0 1-.013.661l-3.39 2.207A.4.4 0 0 1 1 11.892V7.275a.4.4 0 0 1 .632-.326z"></path>'),title:"Increase indent",command:"indent"},{icon:()=>ci('<path d="m5.042 9.367 2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z"></path>'),title:"Undo",command:"undo"},{icon:()=>ci('<path d="m14.958 9.367-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z"></path>'),title:"Redo",command:"redo"},{icon:()=>ci('<path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"></path>'),title:"Add link",active:a.includes("a"),deactivate:"unlink",command:()=>{const e=prompt("Enter the URL","");e&&""!==e&&t("createlink",e)}},{icon:()=>ci('<path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"></path>'),title:"Add image",active:a.includes("img"),command:()=>{const e=prompt("Enter the image URL","");e&&""!==e&&t("insertImage",e)}}];return B`
      ${s.map((e=>B`
          ${e.values?B` <select aria-label="${i18n.t(e.title)}" tabindex=-1
        @change=${a=>{a.preventDefault();const s=a.target.value;"--"===s?t("removeFormat",void 0):"string"==typeof e.command&&t(e.command,s)}}>
    ${e.values.map((t=>B` <option value=${t.value}>${t.name}</option>`))}
              </select>`:B` <button aria-label="${i18n.t(e.title)}" title="${i18n.t(e.title)}" tabindex=-1
                class="${e.active?"active":"inactive"}"
                @click=${a=>{a.preventDefault(),e.active&&e.deactivate?"string"==typeof e.deactivate?t(e.deactivate,e.command_value):e.deactivate():"string"==typeof e.command?t(e.command,e.command_value):e.command()}}>${"function"==typeof e.icon?document.createRange().createContextualFragment(`${e.icon()}`):e.icon}</button>`}
        `))}
    `}}customElements.define("rich-text-editor",li);const di=(t,e)=>{if(t.helperText&&""!==t.helperText)return`${e}-info`},hi=t=>{if(t.placeholder&&""!==t.placeholder)return t.displayplaceholder},ui=(t,e,a,s)=>void 0===e||""===e?B`
      ${s}
    `:B`
    <div class="flex content-item field-item ${a}" ?disabled="${t.disabledstate}">
      ${((t,e,a)=>{if(void 0===e)return null;const s=t.requiredstate?"icon-required":"";return"field-checkbox"===a?t.label&&""!==t.label?B`<legend class="field-caption">${t.displaylabel}</legend>`:null:B`
    ${""!==t.label?B`<label class="field-caption dataLabelForWrite ${s}" 
    for="${at(e)}">${t.displaylabel}
    </label>`:null}
  `})(t,e,a)}${s}${((t,e)=>t.helperText&&""!==t.helperText?B`<span id=${`${e}-info`} class="helper-text">${t.displayhelperText}</span>`:null)(t,e)}
    </div>
  `,pi=(t,e,a,s,i)=>{if(!1===t.config.visibility)return null;let n=!1;if(t.config.displayvalue="",t.config.displaylabel=i18n.t(t.config.label),t.config.displayplaceholder=i18n.t(t.config.placeholder),t.config.displayhelperText=i18n.t(t.config.helperText),t.config.displaycaption=i18n.t(t.config.caption),t.config.value){let e=t.config.value.replace("@P .","");if(t.config.reference=void 0===i||""===i?e:`${i}.${e}`,t.config.displayvalue=Va(s.casedata.content,t.config.reference),"string"==typeof t.config.datasource&&0===t.config.datasource.indexOf("@ASSOCIATED")){e=t.config.datasource.replace("@ASSOCIATED .","");let a="";s.data.context_data?a=s.data.context_data.content:s.data.uiResources.context_data&&s.data.uiResources.context_data.caseInfo&&s.data.uiResources.context_data.caseInfo.content&&(a=s.data.uiResources.context_data.caseInfo.content);const n=""===i?a:Va(a,i);if(n&&(t.config.options=n.summary_of_associated_lists__[e]),void 0===t.config.options&&(a=s.data.uiResources.resources.fields[e],a&&a.datasource))if(a.datasource.records)t.config.options=a.datasource.records;else if(a.datasource.name&&s.data.data.shared[a.datasource.name]){const e=s.data.data.shared[a.datasource.name];if(Object.keys(e).length>0){const s=Object.keys(e)[0];if(e[s].pxResults){const i=a.datasource.propertyForValue.replace("@P .",""),n=a.datasource.propertyForDisplayText.replace("@P .","");t.config.options=[];for(const a in e[s].pxResults){const o=e[s].pxResults[a];t.config.options[a]={key:o[i],value:o[n]}}}}}}else if("object"==typeof t.config.datasource&&t.config.datasource.source&&0===t.config.datasource.source.indexOf("@DATASOURCE")){const e=t.config.datasource.source.replace("@DATASOURCE ","").replace(".pxResults","");if(s.data.data[e]&&s.data.data[e].pxResults)t.config.options=s.data.data[e].pxResults;else if(s.data.uiResources.context_data&&s.data.uiResources.context_data.caseInfo&&s.data.uiResources.context_data.caseInfo.content){const a=s.data.uiResources.context_data.caseInfo.content;if(a[i]&&a[i].summary_of_lists__[e]&&a[i].summary_of_lists__[e].pxResults){const n=a[i].summary_of_lists__[e].pxResults.replace(".pxResults","");if(s.data.data[n]&&s.data.data[n].pxResults){t.config.options=[];const e=t.config.datasource.fields.key.replace("@P .",""),a=t.config.datasource.fields.text.replace("@P .","");for(const i in s.data.data[n].pxResults){const o=s.data.data[n].pxResults[i];t.config.options[i]={key:o[e],value:o[a]}}}}}}t.config.options||(t.config.options=[]),t.config.displayvalue?"object"!=typeof t.config.displayvalue&&(t.config.displayvalue=`${t.config.displayvalue}`):t.config.displayvalue="",s.data.uiResources&&s.data.uiResources.resources&&s.data.uiResources.resources.fields&&s.data.uiResources.resources.fields[e]&&s.data.uiResources.resources.fields[e].isDeclarativeTarget&&(n=!0,s.isDeclarativeTarget=!0)}if(!0===a)return ui(t.config,e,"field-text",gi(t.config,t.type,e));"string"!=typeof t.config.visibility&&"string"!=typeof t.config.readOnly&&"string"!=typeof t.config.disabled&&"string"!=typeof t.config.required||(s.refreshOnChange=!0);const o=s.data.data.caseInfo.content;if("string"==typeof t.config.visibility&&"true"!==t.config.visibility){if(!Qa(t.config.visibility,o))return null}else if(!1===t.config.visibility||"false"===t.config.visibility)return null;switch(t.config.readonlystate=!1,"string"==typeof t.config.readOnly&&"false"!==t.config.readOnly?t.config.readonlystate=Qa(t.config.readOnly,o):(!0===t.config.readOnly||"true"===t.config.readOnly||n)&&(t.config.readonlystate=!0),t.config.requiredstate=!1,"string"==typeof t.config.required&&"false"!==t.config.required?t.config.requiredstate=Qa(t.config.required,o):!0!==t.config.required&&"true"!==t.config.required||(t.config.requiredstate=!0),t.config.disabledstate=!1,"string"==typeof t.config.disabled&&"false"!==t.config.disabled?t.config.disabledstate=Qa(t.config.disabled,o):!0!==t.config.disabled&&"true"!==t.config.disabled||(t.config.disabledstate=!0),t.config.disabledstate&&(t.config.requiredstate=!1,t.config.readonlystate=!1),t.type){case"Decimal":case"TextInput":return ui(t.config,e,"field-textinput",fi(t.config,e));case"Phone":return ui(t.config,e,"field-phoneinput",mi(t.config,e));case"Email":return ui(t.config,e,"field-emailinput",wi(t.config,e));case"Integer":return ui(t.config,e,"field-numberinput",yi(t.config,e));case"Percentage":return ui(t.config,e,"field-percentage",bi(t.config,e));case"Currency":return ui(t.config,e,"field-currencyinput",vi(t.config,e));case"RadioButtons":return ui(t.config,e,"field-radiogroup",Ci(t.config,e));case"TextArea":return ui(t.config,e,"field-textarea",$i(t.config,e));case"RichText":return ui(t.config,e,"field-richtext",xi(t.config,e));case"Checkbox":return ui(t.config,e,"field-checkbox",_i(t.config,e));case"Dropdown":return ui(t.config,e,"field-dropdown",ki(t.config,e));case"DateTime":return ui(t.config,e,"field-datetime",Si(t.config,e));case"Date":return ui(t.config,e,"field-date",Di(t.config,e));case"Time":return ui(t.config,e,"field-time",Ii(t.config,e));case"AutoComplete":return ui(t.config,e,"field-autocomplete",Ai(t.config,e));case"SemanticLink":return ui(t.config,e,"field-semanticlink",Ti(t.config));case"Attachment":return ui(t.config,e,"field-attachment",zi(t.config,e,s));case"Location":return ui(t.config,e,"field-location",Ei(t.config,e));default:return null}},gi=(t,e,a)=>{let s=t.displayvalue;if(""!==s){if("Phone"===e)return B`<a data-ref="${t.reference}" id="${at(a)}" href="${`tel:${s}`}">${s}</a>`;if("Date"===e){const e={year:"numeric",month:"short",day:"numeric"};s=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}else if("DateTime"===e){s=Ha(t.displayvalue);const e={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};s=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}else if("Time"===e){const e={hour:"numeric",minute:"numeric"};s=new Intl.DateTimeFormat([],e).format(new Date(t.displayvalue))}}return B`
    <span class="dataValueRead" data-ref="${t.reference}" id="${at(a)}">${Fa(s)}</span>
  `},fi=(t,e)=>B`
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${at(hi(t))}"
    type="text"
    aria-describedby="${at(di(t,e))}"
    id="${at(e)}"
    value="${Fa(t.displayvalue)}"
  />
`,mi=(t,e)=>{let a="";for(const e of t.options)0===t.displayvalue.indexOf(e.pyCallingCode)&&(a=e.pyCallingCode);return t.displayvalue=t.displayvalue.substring(a.length),B`
<div> 
<select
  class="field-countrycode"
  ?readonly="${t.readonlystate}"
  ?disabled="${t.disabledstate}"
  aria-label="${i18n.t("Select country code")}">
  ${t.options.map((t=>B`<option ?selected=${t.pyCallingCode===a} 
  value='${t.pyCallingCode}'>${t.pyCallingCode}</option>`))}
</select>
 <input
   data-ref="${t.reference}"
   ?required="${t.requiredstate}"
   ?readonly="${t.readonlystate}"
   ?disabled="${t.disabledstate}"
   placeholder="${at(hi(t))}"
   type="tel"
   aria-describedby="${at(di(t,e))}"
   id="${at(e)}"
   value="${Fa(t.displayvalue)}"
 />
 </div>
`},yi=(t,e)=>B`
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${at(hi(t))}"
    type="number"
    aria-describedby="${at(di(t,e))}"
    id="${at(e)}"
    value="${Fa(t.displayvalue)}"
  />
`,bi=(t,e)=>B`
 <input
   data-ref="${t.reference}"
   ?required="${t.requiredstate}"
   ?readonly="${t.readonlystate}"
   ?disabled="${t.disabledstate}"
   placeholder="${at(hi(t))}"
   type="text"
   aria-describedby="${at(di(t,e))}"
   id="${at(e)}"
   value="${Fa(t.displayvalue)}"
 />
`,vi=(t,e)=>B`
  <div ?readonly="${t.readOnly}">
  <span class="currency-symbol">$</span>
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${at(hi(t))}"
    type="number"
    aria-describedby="${at(di(t,e))}"
    id="${at(e)}"
    value="${Fa(t.displayvalue)}"
  />
  </div>
`,wi=(t,e)=>B`
  <input
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${at(hi(t))}"
    type="email"
    aria-describedby="${at(di(t,e))}"
    id="${at(e)}"
    value="${Fa(t.displayvalue)}"
  />
`,$i=(t,e)=>B`
  <textarea
    rows="3"
    data-ref="${t.reference}"
    ?required="${t.requiredstate}"
    ?readonly="${t.readonlystate}"
    ?disabled="${t.disabledstate}"
    placeholder="${at(hi(t))}"
    type="email"
    aria-describedby="${at(di(t,e))}"
    id="${at(e)}"
  >${Fa(t.displayvalue)}</textarea>
`,xi=(t,e)=>new li(Fa(t.displayvalue),t.reference,e),_i=(t,e)=>{const a=t.requiredstate?"icon-required":"";return B`
  <input
  data-ref="${t.reference}"
  ?required="${t.requiredstate}"
  ?readonly="${t.readonlystate}"
  onclick="${at(t.readonlystate?"return false;":void 0)}"
  ?disabled="${t.disabledstate}"
  aria-describedby="${at(di(t,e))}"
  id=${at(e)}
  type="checkbox" ?checked=${"true"===t.displayvalue||!0===t.displayvalue}
  />
  <label class=${a} for=${at(e)}>
  ${t.displaycaption}
    </label>
`},Ci=(t,e)=>{let a=[{value:"true"},{value:"false"}];return t.options&&(a=t.options),B`
    ${a.map(((a,s)=>{const i=`rb-${e}-${s}`;return B`
        <div>
          <input
            data-ref="${t.reference}"
            name=${at(e)}
            id=${i}
            type="radio"
            ?required="${t.requiredstate}"
            ?readonly="${t.readonlystate}"
            ?disabled="${t.disabledstate}"
            value="${a.key}"
            onclick="${at(t.readonlystate?"return false;":void 0)}"
            ?checked="${a.key===t.displayvalue}"
          />
          <label for="${i}">${a.value}</label>
        </div>
      `}))}
  `},ki=(t,e)=>B`<select
  data-ref="${t.reference}"
  aria-describedby="${at(di(t,e))}"
  id=${at(e)}
  ?required="${t.requiredstate}"
  ?readonly="${t.readonlystate}"
  ?disabled="${t.disabledstate}">
  placeholder="${at(hi(t))}"
    <option value="" title="${i18n.t("Select...")}">${i18n.t("Select...")}</option>
    ${t.options.map((e=>B`<option ?selected=${e.key===t.displayvalue} value='${e.key}'>${e.value}</option>`))}
  </select>`,Si=(t,e)=>{let a=t.displayvalue;if(""!==a){let e=Ha(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${e.getFullYear()}-${qa(e.getMonth()+1)}-${qa(e.getDate())}T${qa(e.getHours())}:${qa(e.getMinutes())}`):8===t.displayvalue.length?a=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(4,6)}-${t.displayvalue.substring(6,8)}T00:00`:24===t.displayvalue.length&&(a=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(5,7)}-${t.displayvalue.substring(8,10)}T${t.displayvalue.substring(11,13)}:${t.displayvalue.substring(14,16)}`)}return B`
    <input
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="datetime-local"
      aria-describedby="${at(di(t,e))}"
      id="${at(e)}"
      value="${a}"
    />
  `},Di=(t,e)=>{let a=t.displayvalue;if(""!==a){let e=Ha(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${e.getFullYear()}-${qa(e.getMonth()+1)}-${qa(e.getDate())}`):8===t.displayvalue.length&&(a=`${t.displayvalue.substring(0,4)}-${t.displayvalue.substring(4,6)}-${t.displayvalue.substring(6,8)}`)}return B`
    <input
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="date"
      aria-describedby="${at(di(t,e))}"
      id="${at(e)}"
      value="${a}"
    />
  `},Ii=(t,e)=>{let a=t.displayvalue;if(""!==a){let e=Ha(a);e instanceof Date&&e.getTime()==e.getTime()?(e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=`${qa(e.getHours())}-${qa(e.getMinutes())}-${qa(e.getSeconds())}`):8===t.displayvalue.length&&(a=`${t.displayvalue.substring(9,10)}:${t.displayvalue.substring(10,11)}:${t.displayvalue.substring(11,12)}`)}return B`
    <input
      data-ref="${t.reference}"
      ?required="${t.requiredstate}"
      ?readonly="${t.readonlystate}"
      ?disabled="${t.disabledstate}"
      type="time"
      aria-describedby="${at(di(t,e))}"
      id="${at(e)}"
      value="${a}"
    />
  `},Ai=(t,e)=>t.options?B`
      <input
        data-ref="${t.reference}"
        list="${t.reference}"
        ?required="${t.requiredstate}"
        ?readonly="${t.readonlystate}"
        ?disabled="${t.disabledstate}"
        placeholder="${at(hi(t))}"
        type="text"
        class="combobox loaded"
        aria-describedby="${at(di(t,e))}"
        id="${at(e)}"
        value="${Fa(t.displayvalue)}"
      />
      <datalist id="${t.reference}">
        ${t.options.map((t=>B`
            <option value="${t.key}">
              ${t.value}
            </option>
          `))}
      </datalist>
    `:null,Ti=()=>B`
 <a>semantic link</a>
`,zi=(t,e,a)=>{let s=[];return t.displayvalue&&t.displayvalue.pxResults&&t.displayvalue.pxResults.length>0&&(s=t.displayvalue.pxResults),Os(void 0,s,a.caseID,a)},Ei=(t,e)=>B`<input
 class="location"
 data-ref="${t.reference}"
 ?required="${t.requiredstate}"
 ?readonly="${t.readonlystate}"
 ?disabled="${t.disabledstate}"
 placeholder="${at(hi(t))}"
 type="text"
 aria-describedby="${at(di(t,e))}"
 id="${at(e)}"
 value="${Fa(t.displayvalue)}"
/>`,Ri=(t,e)=>B`
  ${t.map((t=>B`
    <th scope='col'>${i18n.t(t.config.label)}</th>`))}${e?null:B`<th></th>`}
`,Mi=(t,e)=>{if(!e){const e=[];t.config.children[0].children.map(((t,a)=>(e[a]=t.config.value.replace("@P .",""),null)));const a=t.config.referenceList.replace("@P .","");return B`
      <div class="table-action-area">
        <button type="button" class="pzhc pzbutton Simple" aria-label="${i18n.t("Add row")}" data-newrow="${e.join()}"
        data-ref=${a} data-action-click="addRow">${ss()}${i18n.t("Add item")}</button>
      </div>
    `}return null},Ni=(t,e,a)=>{const s=t.config.referenceList.replace("@P .",""),i=t.config.children[0].children,n=a.data.data.caseInfo.content[s];return n?B`
  ${n.map(((t,n)=>B`
    <tr>
    ${i.map((t=>{const i=t,o=i18n.t(t.config.label);return B`
    <td data-title="${o}">${pi(i,void 0,e,a,`${s}(${n+1})`)}</td>`}))}${e?null:B`<td><button type="button" class="pzhc pzbutton Simple" 
  aria-label="${i18n.t("Delete item")}" data-ref=${`${s}(${n+1}).pyTemplate`}  
  data-action-click='deleteRow'>${ns()}</button></td>`}
    </tr>`))}
`:null},Li=(t,e,a,s,i)=>{if(void 0===t)return null;if(!t.config||!t.config.template)return B`${t.map(((t,n)=>{const o=`${e}-${n}`;if("Region"===t.type)return Li(t.children,`${e}-0`,!0,s,i);if("reference"===t.type&&"view"===t.config.type){let e="";if(t.config.context&&(e=t.config.context),t.config.inheritedProps&&1===t.config.inheritedProps.length&&"label"===t.config.inheritedProps[0].prop){const n=i18n.t(t.config.inheritedProps[0].value),r=s.data.uiResources.resources.views[t.config.name];if(r){const t="SimpleTable"===r.config.template||"ListView"===r.config.template?"field-table":"field-subview";return B`<div class='flex content-item field-item ${t}'><h4>${n}</h4>${Li(r,o,a,s,""===i?e.substring(1):i+e)}</div>`}}return Li(s.data.uiResources.resources.views[t.config.name],o,a,s,i&&""!==i?i+e:e.substring(1))}return pi(t,o,a,s,i)}))}`;if("SimpleTable"===t.config.template)return((t,e,a)=>{const s=e||"Editable"!==t.config.renderMode;return B`
  <table class='responsive'>
    <thead>
      <tr>
        ${Ri(t.config.children[0].children,s)}
      </tr>
    </thead>
    <tbody>
      ${Ni(t,s,a)}
    </tbody>
  </table>
  ${Mi(t,s)}`})(t,a,s);if("ListView"===t.config.template)return((t,e,a)=>(a.sendData("dataviews",{id:t.config.referenceList,content:{paging:{pageNumber:1,pageSize:41}}}),B`
  <table class='responsive'>
    <thead>
      <tr>
        ${Ri(t.config.presets[0].children[0].children,e)}
      </tr>
    </thead>
    <tbody>${Ns()}
    </tbody>
  </table>`))(t,a,s);switch("DataReference"===t.config.template&&(s.isDeclarativeTarget=!0),"TwoColumn"===t.config.template&&1===t.children.length&&(t.config.template="OneColumn"),t.config.template){case"TwoColumn":return B`
          <div class="flex layout-content-inline_grid_double">
            <div class="flex layout-content-stacked">${Li(t.children[0].children,`${e}-0`,a,s,i)}</div>
            <div class="flex layout-content-stacked">${Li(t.children[1].children,`${e}-1`,a,s,i)}</div>
          </div>
        `;case"DefaultForm":return B`
          <div class="${`flex layout-content-default-form layout-content-default-form-${t.config.NumCols}`}">
            ${Li(t.children[0].children,`${e}-0`,a,s,i)}
          </div>
        `;case"DataReference":return B`
          <div class="flex layout-content-stacked">
            ${Li(t.children,`${e}-0`,a,s,i)}
          </div>
        `;case"OneColumn":return B`
          <div class="flex layout-content-stacked">
            ${Li(t.children[0].children,`${e}-0`,a,s,i)}
          </div>
        `;case"Details":return B`
          <div class="flex layout-content-stacked_with_labels_left">
            ${Li(t.children[0].children,`${e}-0`,!0,s,i)}
          </div>
        `;default:return null}},Pi=(t,e,a,s,i,n,o,r,c)=>{const l=B`${os()}<span class='count-badge'>${i}</span>`;if(void 0===e.caseID&&a.content){const t=a.content.pyID.split(" ")[1];return B`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${i18n.t(e.data.caseInfo.name)} <span>(${t})</span></h2>
      ${""!==s?B`<span class='badge-bg-info centered'><span class='badge_text'>${s}</span></span>`:""}
      <div class="flex layout-content-inline_middle margin-l-auto">
        ${c?Bs("Attachments",l,"Simple",c):""}
        ${a.actions&&a.actions.length>0?B`
          ${Ps("Actions","Start a new action",n,o)}`:""}
      </div>
    </div>
    ${((t,e)=>t&&0!==t.length?B`
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
        ${t.map((t=>B`
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
    <h3>${i18n.t("Case information")}</h3>`}if(""===t||void 0===e.caseID)return"";const d=e.caseID.split(" ")[1];return B`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${i18n.t(e.data.caseInfo.name)} <span>(${d})</span></h2>
    ${""!==s?B`<span class='badge-bg-info centered'><span class='badge_text'>${s}</span></span>`:""}
    <div class="flex layout-content-inline_middle margin-l-auto">
      ${c?Bs("Attachments",l,"Simple",c):""}
      ${e.actions&&e.actions.length>0?B`
        ${Ps("Actions","Start a new action",n,o)}`:""}
    </div>
  </div>
 <h3>${i18n.t(t)}</h3>`},Bi=(t,e,a,s,i)=>B`
  <div>${Li(t,e,!1,i,"")}</div>
  ${((t,e)=>B`
  <div class="action-button-area">
    ${null!==t?B`<button type="button" class="pzhc pzbutton" @click="${t}">${i18n.t("Cancel")}</button>`:""}
    ${null!==e?B`<button type="button" class="pzhc pzbutton" @click="${e}">${i18n.t("Save")}</button>`:""}
    <button type="button" data-submit="submit" class="Strong pzhc pzbutton">${i18n.t("Submit")}</button>
  </div>
`)(a,s)}
`,Oi=(t,e,a,s)=>B`
  <div>${Li(t,e,!0,s)}</div>
  ${(t=>null===t?null:B`
  <div class="action-button-area">
  ${null!==t?B`<button type="button" class="pzhc pzbutton Strong" @click="${t}">${i18n.t("Close")}</button>`:""}
  </div>`)(a)}
`;class qi extends ri{displayContent(){if(this.bShowSave="false",""!==this.errorMsg){if(-1===this.errorMsg.indexOf("The provided authorization code is expired"))return ei(this.errorMsg,"true"===this.bShowCancel?this.resetError:null);window.history.replaceState({},"","")}if(window.history.state&&window.history.state.token&&(this.token=window.history.state.token),("oauth2password"===this.authentication||"oauth2clientcredentials"===this.authentication)&&""===this.token)return this.sendData("authenticate",{}),null;if("authorizationcode"===this.authentication&&""===this.token)return window.history.state&&window.history.state.code?(this.sendData("authenticate",{}),null):oi(this.url,this.clientid);if(this.casetypes||"createNewWork"!==this.action&&"workList"!==this.action?"createNewWork"===this.action&&""===this.caseID&&this.casetypes&&this.casetypes[this.casetype]?this.sendData("newwork",{id:this.casetype}):""===this.name&&("openAssignment"===this.action&&""===this.assignmentID&&(this.assignmentID=this.caseID),""!==this.assignmentID?this.fetchData("assignment",{id:this.assignmentID}):""!==this.caseID&&this.fetchData("view",{id:this.caseID,actionid:"pyReview"})):(this.fetchData("portal"),"createNewWork"===this.action?this.bShowNew=!0:"workList"===this.action&&(this.bShowCancel="true")),this.bShowConfirm){const t=this.data.ID.split(" ")[1];return ti(this.casedata.name,t,this.casepyStatusWork,"true"===this.bShowAttachments?this.displayAttachments:null)}return""!==this.caseID||""!==this.assignmentID||this.bShowNew?B`
        ${Pi(this.name,this.data,this.casedata,this.casepyStatusWork,this.numAttachments,this.displayActions,this.runAction,this.openCase,"true"===this.bShowAttachments?this.displayAttachments:null)}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
        <form id="case-data">${Ns()}</form>
      `:"workList"===this.action?ai(this.title,this.cases,this.displayCasesTypes,this.reloadWorkList,"true"===this.bShowCreate?this.createCase:null,this.openCase):null}renderMainLayout=(t,e)=>Bi(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this);renderReviewLayout=(t,e)=>Oi(t,e,"true"===this.bShowCancel?this.actionAreaCancel:null,this);genPageValidationErrors=t=>(t=>t.errorDetails?B`
    <ul>
      ${t.errorDetails.map((t=>"Error_Validation_Fail"===t.message||"Validation failed: Errors Detected."===t.message?null:B`<li>${i18n.t(t.localizedValue)}</li>`))}
    </ul>`:null)(t);showDataList=t=>Ys(t);genActionsList=(t,e)=>((t,e)=>{const a=[],s=Object.entries(e.actions);for(const e of s)e[1].name!==t&&a.push(B`
          <li role="menuitem" tabindex="-1" data-value="${e[1].ID}">${i18n.t(e[1].name)}</li>
        `);return B`
    ${a}
  `})(t,e);displayCasesTypes=()=>(t=>{const e=[],a=Object.entries(t);for(const t of a)e.push(B`
        <li role="menuitem" tabindex="-1" data-value="${t[0]}">${i18n.t(t[1].name)}</li>
      `);return B`
    ${e}
  `})(this.casetypes);genLoadingIndicator=()=>Ns();setInlineError=(t,e)=>{t.setCustomValidity(Fa(e)),t.classList.add("error-field"),t.reportValidity()};validateForm=t=>t.checkValidity();reportFormValidity=t=>t.reportValidity();clickHandler=t=>{let e=t.target;"path"===e.tagName&&(e=e.parentNode),"svg"===e.tagName&&(e=e.parentNode);const a=e.getAttribute("data-action-click");e.classList.contains("combobox")&&!e.classList.contains("loaded")&&this.getData(e.getAttribute("data-pageid"),e),Ka(e,"click")?(this.refreshAssignment(e,Ya(e,"click")),t.preventDefault()):"BUTTON"===e.tagName&&(t.preventDefault(),null!==e.getAttribute("data-submit")&&"save"!==e.getAttribute("data-submit")?this.submitForm(t,e.getAttribute("data-submit")):("addRow"===a||"deleteRow"===a)&&this.refreshAssignment(e))};changeHandler=t=>{let e=t.target;if(t.path&&t.path.length>0?e=t.path[0]:t.originalTarget&&(e=t.originalTarget),e.setCustomValidity(""),e.classList.remove("error-field"),Ka(e,"change")||this.isDeclarativeTarget)this.refreshAssignment(e,Ya(e,"change"));else if(this.refreshOnChange){const t=this.getRenderRoot().querySelector("#case-data");ts(t,this.content,this.pageInstructions,this.data.data.caseInfo.content),L(Bi(this.data.uiResources.resources.views[this.casedata.content.pyViewName],"Obj","true"===this.bShowCancel?this.actionAreaCancel:null,"true"===this.bShowSave?this.actionAreaSave:null,this),t)}};keyupHandler=t=>{const e=t.target;"TEXTAREA"===e.tagName&&(e.style.cssText="height:auto; padding:0;",e.style.cssText=`height:${e.scrollHeight}px`)};focusHandler=t=>{const e=t.target;e.classList.contains("combobox")&&!e.classList.contains("loaded")?this.getData(e.getAttribute("data-pageid"),e):"INPUT"===e.tagName&&e.classList.contains("location")&&!e.classList.contains("pac-target-input")&&window.google&&window.google.maps&&window.google.maps.places&&new window.google.maps.places.Autocomplete(e)};async firstUpdated(){const t=this.getRenderRoot();t&&(t.addEventListener("click",this.clickHandler),t.addEventListener("focusin",this.focusHandler),t.addEventListener("change",this.changeHandler),t.addEventListener("keyup",this.keyupHandler))}}customElements.define("pega-mashup-v2",class extends qi{createRenderRoot(){return this.attachShadow({mode:"open"})}getRenderRoot(){return this.shadowRoot}render(){return B`
      ${ii()} ${this.displayContent()}
    `}});customElements.define("pega-mashup-light-v2",class extends qi{createRenderRoot(){return this}getRenderRoot(){return this}render(){return B`
      ${this.displayContent()}
    `}})}();
