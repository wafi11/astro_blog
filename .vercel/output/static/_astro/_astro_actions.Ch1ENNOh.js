var _e={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},at=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],i=t[n++],a=t[n++],c=((s&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const o=t[n++],i=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|i&63)}}return e.join("")},Be={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const o=t[s],i=s+1<t.length,a=i?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,_=o>>2,f=(o&3)<<4|a>>4;let p=(a&15)<<2|l>>6,g=l&63;c||(g=64,i||(p=64)),r.push(n[_],n[f],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ne(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):at(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||a==null||l==null||f==null)throw new ct;const p=o<<2|a>>4;if(r.push(p),l!==64){const g=a<<4&240|l>>2;if(r.push(g),f!==64){const w=l<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ct extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lt=function(t){const e=Ne(t);return Be.encodeByteArray(e,!0)},W=function(t){return lt(t).replace(/\./g,"")},ut=function(t){try{return Be.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=()=>ht().__FIREBASE_DEFAULTS__,ft=()=>{if(typeof process>"u"||typeof _e>"u")return;const t=_e.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pt=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ut(t[1]);return e&&JSON.parse(e)},Pe=()=>{try{return dt()||ft()||pt()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_t=t=>{var e,n;return(n=(e=Pe())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gt=t=>{const e=_t(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ue=()=>{var t;return(t=Pe())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[W(JSON.stringify(n)),W(JSON.stringify(i)),""].join(".")}function Et(){try{return typeof indexedDB=="object"}catch{return!1}}function yt(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="FirebaseError";class L extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=wt,Object.setPrototypeOf(this,L.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ke.prototype.create)}}class ke{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],i=o?It(o,r):"Error",a=`${this.serviceName}: ${i} (${s}).`;return new L(s,a,r)}}function It(t,e){return t.replace(Rt,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Rt=/\{\$([^}]+)}/g;function ne(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const o=t[s],i=e[s];if(ge(o)&&ge(i)){if(!ne(o,i))return!1}else if(o!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ge(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t){return t&&t._delegate?t._delegate:t}class F{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new mt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(St(e))try{this.getOrInitializeService({instanceIdentifier:C})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=C){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=C){return this.instances.has(e)}getOptions(e=C){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&i.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const i=this.instances.get(s);return i&&e(i,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:At(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=C){return this.component?this.component.multipleInstances?e:C:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function At(t){return t===C?void 0:t}function St(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Tt(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var u;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(u||(u={}));const Ot={debug:u.DEBUG,verbose:u.VERBOSE,info:u.INFO,warn:u.WARN,error:u.ERROR,silent:u.SILENT},Ct=u.INFO,vt={[u.DEBUG]:"log",[u.VERBOSE]:"log",[u.INFO]:"info",[u.WARN]:"warn",[u.ERROR]:"error"},Nt=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=vt[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bt{constructor(e){this.name=e,this._logLevel=Ct,this._logHandler=Nt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in u))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ot[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,u.DEBUG,...e),this._logHandler(this,u.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,u.VERBOSE,...e),this._logHandler(this,u.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,u.INFO,...e),this._logHandler(this,u.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,u.WARN,...e),this._logHandler(this,u.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,u.ERROR,...e),this._logHandler(this,u.ERROR,...e)}}const Pt=(t,e)=>e.some(n=>t instanceof n);let me,be;function Ut(){return me||(me=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kt(){return be||(be=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Le=new WeakMap,re=new WeakMap,Me=new WeakMap,J=new WeakMap,le=new WeakMap;function Lt(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(S(t.result)),s()},i=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&Le.set(n,t)}).catch(()=>{}),le.set(e,t),e}function Mt(t){if(re.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});re.set(t,e)}let se={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return re.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Me.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return S(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xt(t){se=t(se)}function Ft(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Y(this),e,...n);return Me.set(r,e.sort?e.sort():[e]),S(r)}:kt().includes(t)?function(...e){return t.apply(Y(this),e),S(Le.get(this))}:function(...e){return S(t.apply(Y(this),e))}}function $t(t){return typeof t=="function"?Ft(t):(t instanceof IDBTransaction&&Mt(t),Pt(t,Ut())?new Proxy(t,se):t)}function S(t){if(t instanceof IDBRequest)return Lt(t);if(J.has(t))return J.get(t);const e=$t(t);return e!==t&&(J.set(t,e),le.set(e,t)),e}const Y=t=>le.get(t);function Ht(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(t,e),a=S(i);return r&&i.addEventListener("upgradeneeded",c=>{r(S(i.result),c.oldVersion,c.newVersion,S(i.transaction),c)}),n&&i.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const jt=["get","getKey","getAll","getAllKeys","count"],Vt=["put","add","delete","clear"],Z=new Map;function Ee(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Z.get(e))return Z.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Vt.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||jt.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Z.set(e,o),o}xt(t=>({...t,get:(e,n,r)=>Ee(e,n)||t.get(e,n,r),has:(e,n)=>!!Ee(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Wt(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Wt(t){const e=t.getComponent();return e?.type==="VERSION"}const oe="@firebase/app",ye="0.10.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=new Bt("@firebase/app"),Xt="@firebase/app-compat",Gt="@firebase/analytics-compat",qt="@firebase/analytics",Kt="@firebase/app-check-compat",Jt="@firebase/app-check",Yt="@firebase/auth",Zt="@firebase/auth-compat",Qt="@firebase/database",en="@firebase/database-compat",tn="@firebase/functions",nn="@firebase/functions-compat",rn="@firebase/installations",sn="@firebase/installations-compat",on="@firebase/messaging",an="@firebase/messaging-compat",cn="@firebase/performance",ln="@firebase/performance-compat",un="@firebase/remote-config",hn="@firebase/remote-config-compat",dn="@firebase/storage",fn="@firebase/storage-compat",pn="@firebase/firestore",_n="@firebase/vertexai-preview",gn="@firebase/firestore-compat",mn="firebase",bn="10.12.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie="[DEFAULT]",En={[oe]:"fire-core",[Xt]:"fire-core-compat",[qt]:"fire-analytics",[Gt]:"fire-analytics-compat",[Jt]:"fire-app-check",[Kt]:"fire-app-check-compat",[Yt]:"fire-auth",[Zt]:"fire-auth-compat",[Qt]:"fire-rtdb",[en]:"fire-rtdb-compat",[tn]:"fire-fn",[nn]:"fire-fn-compat",[rn]:"fire-iid",[sn]:"fire-iid-compat",[on]:"fire-fcm",[an]:"fire-fcm-compat",[cn]:"fire-perf",[ln]:"fire-perf-compat",[un]:"fire-rc",[hn]:"fire-rc-compat",[dn]:"fire-gcs",[fn]:"fire-gcs-compat",[pn]:"fire-fst",[gn]:"fire-fst-compat",[_n]:"fire-vertex","fire-js":"fire-js",[mn]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=new Map,yn=new Map,ae=new Map;function we(t,e){try{t.container.addComponent(e)}catch(n){N.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function X(t){const e=t.name;if(ae.has(e))return N.debug(`There were multiple attempts to register component ${e}.`),!1;ae.set(e,t);for(const n of $.values())we(n,t);for(const n of yn.values())we(n,t);return!0}function wn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},D=new ke("app","Firebase",In);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new F("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw D.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=bn;function xe(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ie,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw D.create("bad-app-name",{appName:String(s)});if(n||(n=Ue()),!n)throw D.create("no-options");const o=$.get(s);if(o){if(ne(n,o.options)&&ne(r,o.config))return o;throw D.create("duplicate-app",{appName:s})}const i=new Dt(s);for(const c of ae.values())i.addComponent(c);const a=new Rn(n,r,i);return $.set(s,a),a}function An(t=ie){const e=$.get(t);if(!e&&t===ie&&Ue())return xe();if(!e)throw D.create("no-app",{appName:t});return e}function Ie(){return Array.from($.values())}function k(t,e,n){var r;let s=(r=En[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),i=e.match(/\s|\//);if(o||i){const a=[`Unable to register library "${s}" with version "${e}":`];o&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),N.warn(a.join(" "));return}X(new F(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="firebase-heartbeat-database",Dn=1,H="firebase-heartbeat-store";let Q=null;function Fe(){return Q||(Q=Ht(Sn,Dn,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(H)}catch(n){console.warn(n)}}}}).catch(t=>{throw D.create("idb-open",{originalErrorMessage:t.message})})),Q}async function On(t){try{const n=(await Fe()).transaction(H),r=await n.objectStore(H).get($e(t));return await n.done,r}catch(e){if(e instanceof L)N.warn(e.message);else{const n=D.create("idb-get",{originalErrorMessage:e?.message});N.warn(n.message)}}}async function Re(t,e){try{const r=(await Fe()).transaction(H,"readwrite");await r.objectStore(H).put(e,$e(t)),await r.done}catch(n){if(n instanceof L)N.warn(n.message);else{const r=D.create("idb-set",{originalErrorMessage:n?.message});N.warn(r.message)}}}function $e(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=1024,vn=30*24*60*60*1e3;class Nn{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Pn(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Te();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(i=>i.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=vn}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Te(),{heartbeatsToSend:r,unsentEntries:s}=Bn(this._heartbeatsCache.heartbeats),o=W(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Te(){return new Date().toISOString().substring(0,10)}function Bn(t,e=Cn){const n=[];let r=t.slice();for(const s of t){const o=n.find(i=>i.agent===s.agent);if(o){if(o.dates.push(s.date),Ae(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ae(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pn{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Et()?yt().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await On(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Re(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Re(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ae(t){return W(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(t){X(new F("platform-logger",e=>new zt(e),"PRIVATE")),X(new F("heartbeat",e=>new Nn(e),"PRIVATE")),k(oe,ye,t),k(oe,ye,"esm2017"),k("fire-js","")}Un("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="firebasestorage.googleapis.com",je="storageBucket",kn=2*60*1e3,Ln=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d extends L{constructor(e,n,r=0){super(ee(e),`Firebase Storage: ${n} (${ee(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,d.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ee(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var h;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(h||(h={}));function ee(t){return"storage/"+t}function ue(){const t="An unknown error occurred, please check the error payload for server response.";return new d(h.UNKNOWN,t)}function Mn(t){return new d(h.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function xn(t){return new d(h.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Fn(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new d(h.UNAUTHENTICATED,t)}function $n(){return new d(h.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Hn(t){return new d(h.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function jn(){return new d(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Vn(){return new d(h.CANCELED,"User canceled the upload/download.")}function zn(t){return new d(h.INVALID_URL,"Invalid URL '"+t+"'.")}function Wn(t){return new d(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Xn(){return new d(h.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+je+"' property when initializing the app?")}function Gn(){return new d(h.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function qn(){return new d(h.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Kn(t){return new d(h.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ce(t){return new d(h.INVALID_ARGUMENT,t)}function Ve(){return new d(h.APP_DELETED,"The Firebase app was deleted.")}function Jn(t){return new d(h.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function x(t,e){return new d(h.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function M(t){throw new d(h.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=y.makeFromUrl(e,n)}catch{return new y(e,"")}if(r.path==="")return r;throw Wn(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function o(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+s+i,"i"),c={bucket:1,path:3};function l(E){E.path_=decodeURIComponent(E.path)}const _="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${_}/b/${s}/o${p}`,"i"),w={bucket:1,path:3},P=n===He?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",U=new RegExp(`^https?://${P}/${s}/${b}`,"i"),I=[{regex:a,indices:c,postModify:o},{regex:g,indices:w,postModify:l},{regex:U,indices:{bucket:1,path:2},postModify:l}];for(let E=0;E<I.length;E++){const j=I[E],q=j.regex.exec(e);if(q){const it=q[j.indices.bucket];let K=q[j.indices.path];K||(K=""),r=new y(it,K),j.postModify(r);break}}if(r==null)throw zn(e);return r}}class Yn{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t,e,n){let r=1,s=null,o=null,i=!1,a=0;function c(){return a===2}let l=!1;function _(...b){l||(l=!0,e.apply(null,b))}function f(b){s=setTimeout(()=>{s=null,t(g,c())},b)}function p(){o&&clearTimeout(o)}function g(b,...U){if(l){p();return}if(b){p(),_.call(null,b,...U);return}if(c()||i){p(),_.call(null,b,...U);return}r<64&&(r*=2);let I;a===1?(a=2,I=0):I=(r+Math.random())*1e3,f(I)}let w=!1;function P(b){w||(w=!0,p(),!l&&(s!==null?(b||(a=2),clearTimeout(s),f(0)):b||(a=1)))}return f(0),o=setTimeout(()=>{i=!0,P(!0)},n),P}function Qn(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t){return t!==void 0}function tr(t){return typeof t=="object"&&!Array.isArray(t)}function he(t){return typeof t=="string"||t instanceof String}function Se(t){return de()&&t instanceof Blob}function de(){return typeof Blob<"u"}function De(t,e,n,r){if(r<e)throw ce(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ce(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function ze(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var v;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(v||(v={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||s||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n,r,s,o,i,a,c,l,_,f,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=_,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,w)=>{this.resolve_=g,this.reject_=w,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new V(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const a=o.getErrorCode()===v.NO_ERROR,c=o.getStatus();if(!a||nr(c,this.additionalRetryCodes_)&&this.retry){const _=o.getErrorCode()===v.ABORT;r(!1,new V(!1,null,_));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new V(l,o))})},n=(r,s)=>{const o=this.resolve_,i=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());er(c)?o(c):o()}catch(c){i(c)}else if(a!==null){const c=ue();c.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,c)):i(c)}else if(s.canceled){const c=this.appDelete_?Ve():Vn();i(c)}else{const c=jn();i(c)}};this.canceled_?n(!1,new V(!1,null,!0)):this.backoffId_=Zn(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Qn(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class V{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function sr(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function or(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ir(t,e){e&&(t["X-Firebase-GMPID"]=e)}function ar(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function cr(t,e,n,r,s,o,i=!0){const a=ze(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return ir(l,e),sr(l,n),or(l,o),ar(l,r),new rr(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ur(...t){const e=lr();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(de())return new Blob(t);throw new d(h.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function hr(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t){if(typeof atob>"u")throw Kn("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class te{constructor(e,n){this.data=e,this.contentType=n||null}}function fr(t,e){switch(t){case R.RAW:return new te(We(e));case R.BASE64:case R.BASE64URL:return new te(Xe(t,e));case R.DATA_URL:return new te(_r(e),gr(e))}throw ue()}function We(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=r,i=t.charCodeAt(++n);r=65536|(o&1023)<<10|i&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function pr(t){let e;try{e=decodeURIComponent(t)}catch{throw x(R.DATA_URL,"Malformed data URL.")}return We(e)}function Xe(t,e){switch(t){case R.BASE64:{const s=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(s||o)throw x(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case R.BASE64URL:{const s=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(s||o)throw x(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=dr(e)}catch(s){throw s.message.includes("polyfill")?s:x(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Ge{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw x(R.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=mr(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function _r(t){const e=new Ge(t);return e.base64?Xe(R.BASE64,e.rest):pr(e.rest)}function gr(t){return new Ge(t).contentType}function mr(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e,n){let r=0,s="";Se(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Se(this.data_)){const r=this.data_,s=hr(r,e,n);return s===null?null:new A(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new A(r,!0)}}static getBlob(...e){if(de()){const n=e.map(r=>r instanceof A?r.data_:r);return new A(ur.apply(null,n))}else{const n=e.map(i=>he(i)?fr(R.RAW,i).data:i.data_);let r=0;n.forEach(i=>{r+=i.byteLength});const s=new Uint8Array(r);let o=0;return n.forEach(i=>{for(let a=0;a<i.length;a++)s[o++]=i[a]}),new A(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t){let e;try{e=JSON.parse(t)}catch{return null}return tr(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Er(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Ke(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t,e){return e}class m{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||yr}}let z=null;function wr(t){return!he(t)||t.length<2?t:Ke(t)}function Je(){if(z)return z;const t=[];t.push(new m("bucket")),t.push(new m("generation")),t.push(new m("metageneration")),t.push(new m("name","fullPath",!0));function e(o,i){return wr(i)}const n=new m("name");n.xform=e,t.push(n);function r(o,i){return i!==void 0?Number(i):i}const s=new m("size");return s.xform=r,t.push(s),t.push(new m("timeCreated")),t.push(new m("updated")),t.push(new m("md5Hash",null,!0)),t.push(new m("cacheControl",null,!0)),t.push(new m("contentDisposition",null,!0)),t.push(new m("contentEncoding",null,!0)),t.push(new m("contentLanguage",null,!0)),t.push(new m("contentType",null,!0)),t.push(new m("metadata","customMetadata",!0)),z=t,z}function Ir(t,e){function n(){const r=t.bucket,s=t.fullPath,o=new y(r,s);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function Rr(t,e,n){const r={};r.type="file";const s=n.length;for(let o=0;o<s;o++){const i=n[o];r[i.local]=i.xform(r,e[i.server])}return Ir(r,t),r}function Ye(t,e,n){const r=qe(e);return r===null?null:Rr(t,r,n)}function Tr(t,e,n,r){const s=qe(e);if(s===null||!he(s.downloadTokens))return null;const o=s.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(l=>{const _=t.bucket,f=t.fullPath,p="/b/"+i(_)+"/o/"+i(f),g=fe(p,n,r),w=ze({alt:"media",token:l});return g+w})[0]}function Ar(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const o=e[s];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}class Ze{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t){if(!t)throw ue()}function Sr(t,e){function n(r,s){const o=Ye(t,s,e);return Qe(o!==null),o}return n}function Dr(t,e){function n(r,s){const o=Ye(t,s,e);return Qe(o!==null),Tr(o,s,t.host,t._protocol)}return n}function et(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=$n():s=Fn():n.getStatus()===402?s=xn(t.bucket):n.getStatus()===403?s=Hn(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Or(t){const e=et(t);function n(r,s){let o=e(r,s);return r.getStatus()===404&&(o=Mn(t.path)),o.serverResponse=s.serverResponse,o}return n}function Cr(t,e,n){const r=e.fullServerUrl(),s=fe(r,t.host,t._protocol),o="GET",i=t.maxOperationRetryTime,a=new Ze(s,o,Dr(t,n),i);return a.errorHandler=Or(e),a}function vr(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Nr(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=vr(null,e)),r}function Br(t,e,n,r,s){const o=e.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function a(){let I="";for(let E=0;E<2;E++)I=I+Math.random().toString().slice(2);return I}const c=a();i["Content-Type"]="multipart/related; boundary="+c;const l=Nr(e,r,s),_=Ar(l,n),f="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+_+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,p=`\r
--`+c+"--",g=A.getBlob(f,r,p);if(g===null)throw Gn();const w={name:l.fullPath},P=fe(o,t.host,t._protocol),b="POST",U=t.maxUploadRetryTime,O=new Ze(P,b,Sr(t,n),U);return O.urlParams=w,O.headers=i,O.body=g.uploadData(),O.errorHandler=et(e),O}class Pr{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=v.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=v.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=v.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw M("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw M("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw M("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw M("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw M("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Ur extends Pr{initXhr(){this.xhr_.responseType="text"}}function tt(){return new Ur}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,n){this._service=e,n instanceof y?this._location=n:this._location=y.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new B(e,n)}get root(){const e=new y(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ke(this._location.path)}get storage(){return this._service}get parent(){const e=br(this._location.path);if(e===null)return null;const n=new y(this._location.bucket,e);return new B(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Jn(e)}}function kr(t,e,n){t._throwIfRoot("uploadBytes");const r=Br(t.storage,t._location,Je(),new A(e,!0),n);return t.storage.makeRequestWithTokens(r,tt).then(s=>({metadata:s,ref:t}))}function Lr(t){t._throwIfRoot("getDownloadURL");const e=Cr(t.storage,t._location,Je());return t.storage.makeRequestWithTokens(e,tt).then(n=>{if(n===null)throw qn();return n})}function Mr(t,e){const n=Er(t._location.path,e),r=new y(t._location.bucket,n);return new B(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(t){return/^[A-Za-z]+:\/\//.test(t)}function Fr(t,e){return new B(t,e)}function nt(t,e){if(t instanceof pe){const n=t;if(n._bucket==null)throw Xn();const r=new B(n,n._bucket);return e!=null?nt(r,e):r}else return e!==void 0?Mr(t,e):t}function $r(t,e){if(e&&xr(e)){if(t instanceof pe)return Fr(t,e);throw ce("To use ref(service, url), the first argument must be a Storage instance.")}else return nt(t,e)}function Oe(t,e){const n=e?.[je];return n==null?null:y.makeFromBucketSpec(n,t)}function Hr(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:bt(s,t.app.options.projectId))}class pe{constructor(e,n,r,s,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=He,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=kn,this._maxUploadRetryTime=Ln,this._requests=new Set,s!=null?this._bucket=y.makeFromBucketSpec(s,this._host):this._bucket=Oe(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=y.makeFromBucketSpec(this._url,e):this._bucket=Oe(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){De("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){De("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new B(this,e)}_makeRequest(e,n,r,s,o=!0){if(this._deleted)return new Yn(Ve());{const i=cr(e,this._appId,r,s,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Ce="@firebase/storage",ve="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="storage";function ts(t,e,n){return t=G(t),kr(t,e,n)}function ns(t){return t=G(t),Lr(t)}function rs(t,e){return t=G(t),$r(t,e)}function jr(t=An(),e){t=G(t);const r=wn(t,rt).getImmediate({identifier:e}),s=gt("storage");return s&&Vr(r,...s),r}function Vr(t,e,n,r={}){Hr(t,e,n,r)}function zr(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new pe(n,r,s,e,Tn)}function Wr(){X(new F(rt,zr,"PUBLIC").setMultipleInstances(!0)),k(Ce,ve,""),k(Ce,ve,"esm2017")}Wr();var Xr="firebase",Gr="10.12.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */k(Xr,Gr,"app");const qr={apiKey:{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:void 0,ASSETS_PREFIX:void 0,ACTIONS_PATH:"D:/astroblog/src/actions"}.NEXT_PUBLIC_FIREBASE_API_KEY,authDomain:{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:void 0,ASSETS_PREFIX:void 0,ACTIONS_PATH:"D:/astroblog/src/actions"}.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,projectId:{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:void 0,ASSETS_PREFIX:void 0,ACTIONS_PATH:"D:/astroblog/src/actions"}.NEXT_PUBLIC_FIREBASE_PROJECT_ID,storageBucket:{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:void 0,ASSETS_PREFIX:void 0,ACTIONS_PATH:"D:/astroblog/src/actions"}.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,messagingSenderId:{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:void 0,ASSETS_PREFIX:void 0,ACTIONS_PATH:"D:/astroblog/src/actions"}.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,appId:{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:void 0,ASSETS_PREFIX:void 0,ACTIONS_PATH:"D:/astroblog/src/actions"}.NEXT_PUBLIC_FIREBASE_APP_ID,measurementId:{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:void 0,ASSETS_PREFIX:void 0,ACTIONS_PATH:"D:/astroblog/src/actions"}.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID};let Kr=Ie().length===0?xe(qr):Ie()[0];const Jr="gs://tapaksuci-33bab.appspot.com",ss=jr(Kr,Jr),st={BAD_REQUEST:400,UNAUTHORIZED:401,FORBIDDEN:403,NOT_FOUND:404,TIMEOUT:405,CONFLICT:409,PRECONDITION_FAILED:412,PAYLOAD_TOO_LARGE:413,UNSUPPORTED_MEDIA_TYPE:415,UNPROCESSABLE_CONTENT:422,TOO_MANY_REQUESTS:429,CLIENT_CLOSED_REQUEST:499,INTERNAL_SERVER_ERROR:500},Yr=Object.entries(st).reduce((t,[e,n])=>({...t,[n]:e}),{});class T extends Error{type="AstroActionError";code="INTERNAL_SERVER_ERROR";status=500;constructor(e){super(e.message),this.code=e.code,this.status=T.codeToStatus(e.code),e.stack&&(this.stack=e.stack)}static codeToStatus(e){return st[e]}static statusToCode(e){return Yr[e]??"INTERNAL_SERVER_ERROR"}static async fromResponse(e){const n=await e.clone().json();return typeof n=="object"&&n?.type==="AstroActionInputError"&&Array.isArray(n.issues)?new Zr(n.issues):typeof n=="object"&&n?.type==="AstroActionError"?new T(n):new T({message:e.statusText,code:T.statusToCode(e.status)})}}class Zr extends T{type="AstroActionInputError";issues;fields;constructor(e){super({message:`Failed to validate: ${JSON.stringify(e,null,2)}`,code:"BAD_REQUEST"}),this.issues=e,this.fields={};for(const n of e)if(n.path.length>0){const r=n.path[0].toString();this.fields[r]??=[],this.fields[r]?.push(n.message)}}}async function Qr(t){try{return{data:await t(),error:void 0}}catch(e){return e instanceof T?{data:void 0,error:e}:{data:void 0,error:new T({message:e instanceof Error?e.message:"Unknown error",code:"INTERNAL_SERVER_ERROR"})}}}new Proxy({},{get(){throw new Error("[astro:action] `z` unexpectedly used on the client.")}});function ot(t={},e="/_actions/"){return new Proxy(t,{get(n,r){if(r in n)return n[r];const s=e+r.toString(),o=i=>es(i,s);return o.toString=()=>s,o.safe=i=>Qr(()=>o(i)),o.safe.toString=()=>s,o.$$FORM_ACTION=function(){const i=new FormData;return i.set("_astroAction",o.toString()),{method:"POST",name:o.toString(),data:i}},o.safe.$$FORM_ACTION=function(){const i=new FormData;return i.set("_astroAction",o.toString()),i.set("_astroActionSafe","true"),{method:"POST",name:o.toString(),data:i}},ot(o,s+".")}})}async function es(t,e){const n=new Headers;n.set("Accept","application/json");let r=t;if(!(r instanceof FormData)){try{r=t?JSON.stringify(t):void 0}catch(i){throw new T({code:"BAD_REQUEST",message:`Failed to serialize request body to JSON. Full error: ${i.message}`})}n.set("Content-Type","application/json"),n.set("Content-Length",r?.length.toString()??"0")}const s=await fetch(e,{method:"POST",body:r,headers:n});if(!s.ok)throw await T.fromResponse(s);return s.status===204?void 0:await s.json()}const os=ot();export{os as a,ns as g,rs as r,ss as s,ts as u};
