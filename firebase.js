var FB=(()=>{var Hs=Object.defineProperty;var Wf=Object.getOwnPropertyDescriptor;var Qf=Object.getOwnPropertyNames;var Jf=Object.prototype.hasOwnProperty;var Yf=(n,e)=>{for(var t in e)Hs(n,t,{get:e[t],enumerable:!0})},Xf=(n,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Qf(e))!Jf.call(n,i)&&i!==t&&Hs(n,i,{get:()=>e[i],enumerable:!(r=Wf(e,i))||r.enumerable});return n};var Zf=n=>Xf(Hs({},"__esModule",{value:!0}),n);var oI={};Yf(oI,{collection:()=>Jd,createUserWithEmailAndPassword:()=>zo,deleteDoc:()=>lf,doc:()=>Yd,getAuth:()=>Qo,getDoc:()=>cf,getFirestore:()=>Xd,initializeApp:()=>_o,onAuthStateChanged:()=>Ko,onSnapshot:()=>hf,sendPasswordResetEmail:()=>jo,setDoc:()=>uf,signInWithEmailAndPassword:()=>Go,signOut:()=>$o});var tl=function(n){let e=[],t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},ep=function(n){let e=[],t=0,r=0;for(;t<n.length;){let i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){let o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=n[t++],a=n[t++],u=n[t++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{let o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},nl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){let o=n[i],a=i+1<n.length,u=a?n[i+1]:0,h=i+2<n.length,d=h?n[i+2]:0,p=o>>2,E=(o&3)<<4|u>>4,b=(u&15)<<2|d>>6,S=d&63;h||(S=64,a||(b=64)),r.push(t[p],t[E],t[b],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(tl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ep(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){let o=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;let d=i<n.length?t[n.charAt(i)]:64;++i;let E=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||u==null||d==null||E==null)throw new Qs;let b=o<<2|u>>4;if(r.push(b),d!==64){let S=u<<4&240|d>>2;if(r.push(S),E!==64){let N=d<<6&192|E;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Qs=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},tp=function(n){let e=tl(n);return nl.encodeByteArray(e,!0)},Kn=function(n){return tp(n).replace(/\./g,"")},Ys=function(n){try{return nl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function np(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}var rp=()=>np().__FIREBASE_DEFAULTS__,ip=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},sp=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&Ys(n[1]);return e&&JSON.parse(e)},Wr=()=>{try{return rp()||ip()||sp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Xs=n=>{var e,t;return(t=(e=Wr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},rl=n=>{let e=Xs(n);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Zs=()=>{var n;return(n=Wr())===null||n===void 0?void 0:n.config},eo=n=>{var e;return(e=Wr())===null||e===void 0?void 0:e[`_${n}`]};var Hr=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}};function il(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Kn(JSON.stringify(t)),Kn(JSON.stringify(a)),""].join(".")}function oe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sl(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(oe())}function op(){var n;let e=(n=Wr())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ol(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function al(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cl(){let n=oe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ul(){return!op()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function to(){try{return typeof indexedDB=="object"}catch{return!1}}function ll(){return new Promise((n,e)=>{try{let t=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}var ap="FirebaseError",be=class n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=ap,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qe.prototype.create)}},Qe=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?cp(o,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new be(i,u,r)}};function cp(n,e){return n.replace(up,(t,r)=>{let i=e[r];return i!=null?String(i):`<${r}?>`})}var up=/\{\$([^}]+)}/g;function hl(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Rt(n,e){if(n===e)return!0;let t=Object.keys(n),r=Object.keys(e);for(let i of t){if(!r.includes(i))return!1;let o=n[i],a=e[i];if(el(o)&&el(a)){if(!Rt(o,a))return!1}else if(o!==a)return!1}for(let i of r)if(!t.includes(i))return!1;return!0}function el(n){return n!==null&&typeof n=="object"}function Jt(n){let e=[];for(let[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Yt(n){let e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Xt(n){let e=n.indexOf("?");if(!e)return"";let t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function dl(n,e){let t=new Js(n,e);return t.subscribe.bind(t)}var Js=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");lp(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ws),i.error===void 0&&(i.error=Ws),i.complete===void 0&&(i.complete=Ws);let o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function lp(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ws(){}var cI=4*60*60*1e3;function ce(n){return n&&n._delegate?n._delegate:n}var Re=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var Pt="[DEFAULT]";var no=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let r=new Hr;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dp(e))try{this.getOrInitializeService({instanceIdentifier:Pt})}catch{}for(let[t,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(t);try{let o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Pt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pt){return this.instances.has(e)}getOptions(e=Pt){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[o,a]of this.instancesDeferred.entries()){let u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(i)}return i}onInit(e,t){var r;let i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);let a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pt){return this.component?this.component.multipleInstances?e:Pt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function hp(n){return n===Pt?void 0:n}function dp(n){return n.instantiationMode==="EAGER"}var Qr=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new no(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var fp=[],B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));var pp={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},mp=B.INFO,gp={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},_p=(n,e,...t)=>{if(e<n.logLevel)return;let r=new Date().toISOString(),i=gp[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},lt=class{constructor(e){this.name=e,this._logLevel=mp,this._logHandler=_p,this._userLogHandler=null,fp.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}};var yp=(n,e)=>e.some(t=>n instanceof t),fl,pl;function Ip(){return fl||(fl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vp(){return pl||(pl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var ml=new WeakMap,io=new WeakMap,gl=new WeakMap,ro=new WeakMap,oo=new WeakMap;function wp(n){let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(xe(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ml.set(t,n)}).catch(()=>{}),oo.set(e,n),e}function Ep(n){if(io.has(n))return;let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});io.set(n,e)}var so={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return io.get(n);if(e==="objectStoreNames")return n.objectStoreNames||gl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return xe(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function _l(n){so=n(so)}function Tp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let r=n.call(Jr(this),e,...t);return gl.set(r,e.sort?e.sort():[e]),xe(r)}:vp().includes(n)?function(...e){return n.apply(Jr(this),e),xe(ml.get(this))}:function(...e){return xe(n.apply(Jr(this),e))}}function Ap(n){return typeof n=="function"?Tp(n):(n instanceof IDBTransaction&&Ep(n),yp(n,Ip())?new Proxy(n,so):n)}function xe(n){if(n instanceof IDBRequest)return wp(n);if(ro.has(n))return ro.get(n);let e=Ap(n);return e!==n&&(ro.set(n,e),oo.set(e,n)),e}var Jr=n=>oo.get(n);function Il(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){let a=indexedDB.open(n,e),u=xe(a);return r&&a.addEventListener("upgradeneeded",h=>{r(xe(a.result),h.oldVersion,h.newVersion,xe(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}var bp=["get","getKey","getAll","getAllKeys","count"],Sp=["put","add","delete","clear"],ao=new Map;function yl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ao.get(e))return ao.get(e);let t=e.replace(/FromIndex$/,""),r=e!==t,i=Sp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bp.includes(t)))return;let o=async function(a,...u){let h=this.transaction(a,i?"readwrite":"readonly"),d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),i&&h.done]))[0]};return ao.set(e,o),o}_l(n=>({...n,get:(e,t,r)=>yl(e,t)||n.get(e,t,r),has:(e,t)=>!!yl(e,t)||n.has(e,t)}));var uo=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Rp(t)){let r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}};function Rp(n){let e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}var lo="@firebase/app",vl="0.10.5";var Ct=new lt("@firebase/app"),Pp="@firebase/app-compat",Cp="@firebase/analytics-compat",Dp="@firebase/analytics",Np="@firebase/app-check-compat",kp="@firebase/app-check",Op="@firebase/auth",xp="@firebase/auth-compat",Vp="@firebase/database",Lp="@firebase/database-compat",Mp="@firebase/functions",Fp="@firebase/functions-compat",Up="@firebase/installations",qp="@firebase/installations-compat",Bp="@firebase/messaging",jp="@firebase/messaging-compat",zp="@firebase/performance",Gp="@firebase/performance-compat",Kp="@firebase/remote-config",$p="@firebase/remote-config-compat",Hp="@firebase/storage",Wp="@firebase/storage-compat",Qp="@firebase/firestore",Jp="@firebase/vertexai-preview",Yp="@firebase/firestore-compat",Xp="firebase",Zp="10.12.2";var ho="[DEFAULT]",em={[lo]:"fire-core",[Pp]:"fire-core-compat",[Dp]:"fire-analytics",[Cp]:"fire-analytics-compat",[kp]:"fire-app-check",[Np]:"fire-app-check-compat",[Op]:"fire-auth",[xp]:"fire-auth-compat",[Vp]:"fire-rtdb",[Lp]:"fire-rtdb-compat",[Mp]:"fire-fn",[Fp]:"fire-fn-compat",[Up]:"fire-iid",[qp]:"fire-iid-compat",[Bp]:"fire-fcm",[jp]:"fire-fcm-compat",[zp]:"fire-perf",[Gp]:"fire-perf-compat",[Kp]:"fire-rc",[$p]:"fire-rc-compat",[Hp]:"fire-gcs",[Wp]:"fire-gcs-compat",[Qp]:"fire-fst",[Yp]:"fire-fst-compat",[Jp]:"fire-vertex","fire-js":"fire-js",[Xp]:"fire-js-all"};var Yr=new Map,tm=new Map,fo=new Map;function wl(n,e){try{n.container.addComponent(e)}catch(t){Ct.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function dt(n){let e=n.name;if(fo.has(e))return Ct.debug(`There were multiple attempts to register component ${e}.`),!1;fo.set(e,n);for(let t of Yr.values())wl(t,n);for(let t of tm.values())wl(t,n);return!0}function Hn(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function De(n){return n.settings!==void 0}var nm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ht=new Qe("app","Firebase",nm);var po=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Re("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ht.create("app-deleted",{appName:this._name})}};var ft=Zp;function _o(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let r=Object.assign({name:ho,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ht.create("bad-app-name",{appName:String(i)});if(t||(t=Zs()),!t)throw ht.create("no-options");let o=Yr.get(i);if(o){if(Rt(t,o.options)&&Rt(r,o.config))return o;throw ht.create("duplicate-app",{appName:i})}let a=new Qr(i);for(let h of fo.values())a.addComponent(h);let u=new po(t,r,a);return Yr.set(i,u),u}function Xr(n=ho){let e=Yr.get(n);if(!e&&n===ho&&Zs())return _o();if(!e)throw ht.create("no-app",{appName:n});return e}function Ce(n,e,t){var r;let i=(r=em[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);let o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){let u=[`Unable to register library "${i}" with version "${e}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ct.warn(u.join(" "));return}dt(new Re(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var rm="firebase-heartbeat-database",im=1,$n="firebase-heartbeat-store",co=null;function bl(){return co||(co=Il(rm,im,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore($n)}catch(t){console.warn(t)}}}}).catch(n=>{throw ht.create("idb-open",{originalErrorMessage:n.message})})),co}async function sm(n){try{let t=(await bl()).transaction($n),r=await t.objectStore($n).get(Sl(n));return await t.done,r}catch(e){if(e instanceof be)Ct.warn(e.message);else{let t=ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ct.warn(t.message)}}}async function El(n,e){try{let r=(await bl()).transaction($n,"readwrite");await r.objectStore($n).put(e,Sl(n)),await r.done}catch(t){if(t instanceof be)Ct.warn(t.message);else{let r=ht.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ct.warn(r.message)}}}function Sl(n){return`${n.name}!${n.options.appId}`}var om=1024,am=30*24*60*60*1e3,mo=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new go(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Tl();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{let u=new Date(a.date).valueOf();return Date.now()-u<=am}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=Tl(),{heartbeatsToSend:r,unsentEntries:i}=cm(this._heartbeatsCache.heartbeats),o=Kn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}};function Tl(){return new Date().toISOString().substring(0,10)}function cm(n,e=om){let t=[],r=n.slice();for(let i of n){let o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Al(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Al(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}var go=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return to()?ll().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await sm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return El(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return El(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function Al(n){return Kn(JSON.stringify({version:2,heartbeats:n})).length}function um(n){dt(new Re("platform-logger",e=>new uo(e),"PRIVATE")),dt(new Re("heartbeat",e=>new mo(e),"PRIVATE")),Ce(lo,vl,n),Ce(lo,vl,"esm2017"),Ce("fire-js","")}um("");var lm="firebase",hm="10.12.2";Ce(lm,hm,"app");function Zr(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function zl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var Gl=zl,Kl=new Qe("auth","Firebase",zl());var si=new lt("@firebase/auth");function dm(n,...e){si.logLevel<=B.WARN&&si.warn(`Auth (${ft}): ${n}`,...e)}function ti(n,...e){si.logLevel<=B.ERROR&&si.error(`Auth (${ft}): ${n}`,...e)}function Ne(n,...e){throw Fo(n,...e)}function Le(n,...e){return Fo(n,...e)}function $l(n,e,t){let r=Object.assign(Object.assign({},Gl()),{[e]:t});return new Qe("auth","Firebase",r).create(e,{appName:n.name})}function Ye(n){return $l(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Fo(n,...e){if(typeof n!="string"){let t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Kl.create(n,...e)}function O(n,e,...t){if(!n)throw Fo(e,...t)}function Ve(n){let e="INTERNAL ASSERTION FAILED: "+n;throw ti(e),new Error(e)}function Xe(n,e){n||Ve(e)}function vo(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function fm(){return Rl()==="http:"||Rl()==="https:"}function Rl(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function pm(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fm()||ol()||"connection"in navigator)?navigator.onLine:!0}function mm(){if(typeof navigator=="undefined")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var Dt=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,Xe(t>e,"Short delay should be less than long delay!"),this.isMobile=sl()||al()}get(){return pm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function Uo(n,e){Xe(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var oi=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;Ve("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;Ve("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;Ve("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var gm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var _m=new Dt(3e4,6e4);function re(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function he(n,e,t,r,i={}){return Hl(n,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});let u=Jt(Object.assign({key:n.config.apiKey},a)).slice(1),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode),oi.fetch()(Wl(n,n.config.apiHost,t,u),Object.assign({method:e,headers:h,referrerPolicy:"no-referrer"},o))})}async function Hl(n,e,t){n._canInitEmulator=!1;let r=Object.assign(Object.assign({},gm),e);try{let i=new wo(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();let a=await o.json();if("needConfirmation"in a)throw Wn(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{let u=o.ok?a.errorMessage:a.error.message,[h,d]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wn(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw Wn(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw Wn(n,"user-disabled",a);let p=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw $l(n,p,d);Ne(n,p)}}catch(i){if(i instanceof be)throw i;Ne(n,"network-request-failed",{message:String(i)})}}async function mt(n,e,t,r,i={}){let o=await he(n,e,t,r,i);return"mfaPendingCredential"in o&&Ne(n,"multi-factor-auth-required",{_serverResponse:o}),o}function Wl(n,e,t,r){let i=`${e}${t}?${r}`;return n.config.emulator?Uo(n.config,i):`${n.config.apiScheme}://${i}`}function ym(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var wo=class{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Le(this.auth,"network-request-failed")),_m.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function Wn(n,e,t){let r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);let i=Le(n,e,r);return i.customData._tokenResponse=t,i}function Pl(n){return n!==void 0&&n.enterprise!==void 0}var Eo=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return ym(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}};async function Im(n,e){return he(n,"GET","/v2/recaptchaConfig",re(n,e))}async function vm(n,e){return he(n,"POST","/v1/accounts:delete",e)}async function Ql(n,e){return he(n,"POST","/v1/accounts:lookup",e)}function Qn(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Jl(n,e=!1){let t=ce(n),r=await t.getIdToken(e),i=qo(r);O(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");let o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Qn(yo(i.auth_time)),issuedAtTime:Qn(yo(i.iat)),expirationTime:Qn(yo(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function yo(n){return Number(n)*1e3}function qo(n){let[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ti("JWT malformed, contained fewer than 3 sections"),null;try{let i=Ys(t);return i?JSON.parse(i):(ti("Failed to decode base64 JWT payload"),null)}catch(i){return ti("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Cl(n){let e=qo(n);return O(e,"internal-error"),O(typeof e.exp!="undefined","internal-error"),O(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}async function Yn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof be&&wm(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function wm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var To=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;let i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var Xn=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qn(this.lastLoginAt),this.creationTime=Qn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function ai(n){var e;let t=n.auth,r=await n.getIdToken(),i=await Yn(n,Ql(t,{idToken:r}));O(i==null?void 0:i.users.length,t,"internal-error");let o=i.users[0];n._notifyReloadListener(o);let a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Xl(o.providerUserInfo):[],u=Em(n.providerData,a),h=n.isAnonymous,d=!(n.email&&o.passwordHash)&&!(u!=null&&u.length),p=h?d:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Xn(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(n,E)}async function Yl(n){let e=ce(n);await ai(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Em(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Xl(n){return n.map(e=>{var{providerId:t}=e,r=Zr(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}async function Tm(n,e){let t=await Hl(n,{},async()=>{let r=Jt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=Wl(n,i,"/v1/token",`key=${o}`),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",oi.fetch()(a,{method:"POST",headers:u,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Am(n,e){return he(n,"POST","/v2/accounts:revokeToken",re(n,e))}var Jn=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken!="undefined","internal-error"),O(typeof e.refreshToken!="undefined","internal-error");let t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Cl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){O(e.length!==0,"internal-error");let t=Cl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:i,expiresIn:o}=await Tm(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){let{refreshToken:r,accessToken:i,expirationTime:o}=t,a=new n;return r&&(O(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(O(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return Ve("not implemented")}};function pt(n,e){O(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}var en=class n{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=Zr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new To(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Xn(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){let t=await Yn(this,this.stsTokenManager.getToken(this.auth,e));return O(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Jl(this,e)}reload(){return Yl(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ai(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(De(this.auth.app))return Promise.reject(Ye(this.auth));let e=await this.getIdToken();return await Yn(this,vm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,a,u,h,d,p;let E=(r=t.displayName)!==null&&r!==void 0?r:void 0,b=(i=t.email)!==null&&i!==void 0?i:void 0,S=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,N=(a=t.photoURL)!==null&&a!==void 0?a:void 0,x=(u=t.tenantId)!==null&&u!==void 0?u:void 0,D=(h=t._redirectEventId)!==null&&h!==void 0?h:void 0,q=(d=t.createdAt)!==null&&d!==void 0?d:void 0,z=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:G,emailVerified:Y,isAnonymous:Ie,providerData:W,stsTokenManager:I}=t;O(G&&I,e,"internal-error");let m=Jn.fromJSON(this.name,I);O(typeof G=="string",e,"internal-error"),pt(E,e.name),pt(b,e.name),O(typeof Y=="boolean",e,"internal-error"),O(typeof Ie=="boolean",e,"internal-error"),pt(S,e.name),pt(N,e.name),pt(x,e.name),pt(D,e.name),pt(q,e.name),pt(z,e.name);let _=new n({uid:G,auth:e,email:b,emailVerified:Y,displayName:E,isAnonymous:Ie,photoURL:N,phoneNumber:S,tenantId:x,stsTokenManager:m,createdAt:q,lastLoginAt:z});return W&&Array.isArray(W)&&(_.providerData=W.map(y=>Object.assign({},y))),D&&(_._redirectEventId=D),_}static async _fromIdTokenResponse(e,t,r=!1){let i=new Jn;i.updateFromServerResponse(t);let o=new n({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ai(o),o}static async _fromGetAccountInfoResponse(e,t,r){let i=t.users[0];O(i.localId!==void 0,"internal-error");let o=i.providerUserInfo!==void 0?Xl(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),u=new Jn;u.updateFromIdToken(r);let h=new n({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Xn(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,d),h}};var Dl=new Map;function Je(n){Xe(n instanceof Function,"Expected a class definition");let e=Dl.get(n);return e?(Xe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Dl.set(n,e),e)}var ci=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};ci.type="NONE";var Ao=ci;function ni(n,e,t){return`firebase:${n}:${e}:${t}`}var ui=class n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:i,name:o}=this.auth;this.fullUserKey=ni(this.userKey,i.apiKey,o),this.fullPersistenceKey=ni("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?en._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new n(Je(Ao),e,r);let i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d),o=i[0]||Je(Ao),a=ni(r,e.config.apiKey,e.name),u=null;for(let d of t)try{let p=await d._get(a);if(p){let E=en._fromJSON(e,p);d!==o&&(u=E),o=d;break}}catch{}let h=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new n(o,e,r):(o=h[0],u&&await o._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new n(o,e,r))}};function Nl(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(th(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rh(e))return"Blackberry";if(ih(e))return"Webos";if(Bo(e))return"Safari";if((e.includes("chrome/")||eh(e))&&!e.includes("edge/"))return"Chrome";if(nh(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Zl(n=oe()){return/firefox\//i.test(n)}function Bo(n=oe()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function eh(n=oe()){return/crios\//i.test(n)}function th(n=oe()){return/iemobile/i.test(n)}function nh(n=oe()){return/android/i.test(n)}function rh(n=oe()){return/blackberry/i.test(n)}function ih(n=oe()){return/webos/i.test(n)}function Pi(n=oe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function bm(n=oe()){var e;return Pi(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Sm(){return cl()&&document.documentMode===10}function sh(n=oe()){return Pi(n)||nh(n)||ih(n)||rh(n)||/windows phone/i.test(n)||th(n)}function Rm(){try{return!!(window&&window!==window.top)}catch{return!1}}function oh(n,e=[]){let t;switch(n){case"Browser":t=Nl(oe());break;case"Worker":t=`${Nl(oe())}-${n}`;break;default:t=n}let r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ft}/${r}`}var bo=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=o=>new Promise((a,u)=>{try{let h=e(o);a(h)}catch(h){u(h)}});r.onAbort=t,this.queue.push(r);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(let i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}};async function Pm(n,e={}){return he(n,"GET","/v2/passwordPolicy",re(n,e))}var Cm=6,So=class{constructor(e){var t,r,i,o;let a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Cm,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,o,a,u;let h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(t=h.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(i=h.containsLowercaseLetter)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(a=h.containsNumericCharacter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(u=h.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),h}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}};var Ro=class{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new li(this),this.idTokenSubscription=new li(this),this.beforeStateQueue=new bo(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Je(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ui.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await Ql(this,{idToken:e}),r=await en._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(De(this.app)){let a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i==null?void 0:i._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===u)&&(h!=null&&h.user)&&(i=h.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ai(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(De(this.app))return Promise.reject(Ye(this));let t=e?ce(e):null;return t&&O(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return De(this.app)?Promise.reject(Ye(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return De(this.app)?Promise.reject(Ye(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Je(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await Pm(this),t=new So(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qe("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Am(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&Je(e)||this._popupRedirectResolver;O(t,this,"argument-error"),this.redirectPersistenceManager=await ui.create(this,[Je(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};let o=typeof t=="function"?t:t.next.bind(t),a=!1,u=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(u,this,"internal-error"),u.then(()=>{a||o(this.currentUser)}),typeof t=="function"){let h=e.addObserver(t,r,i);return()=>{a=!0,h()}}else{let h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=oh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&dm(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}};function Ze(n){return ce(n)}var li=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=dl(t=>this.observer=t)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var Ci={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Dm(n){Ci=n}function ah(n){return Ci.loadJS(n)}function Nm(){return Ci.recaptchaEnterpriseScript}function km(){return Ci.gapiScript}function ch(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var Om="recaptcha-enterprise",xm="NO_RECAPTCHA",Po=class{constructor(e){this.type=Om,this.auth=Ze(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,u)=>{Im(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{let d=new Eo(h);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(h=>{u(h)})})}function i(o,a,u){let h=window.grecaptcha;Pl(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(xm)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,a)=>{r(this.auth).then(u=>{if(!t&&Pl(window.grecaptcha))i(u,o,a);else{if(typeof window=="undefined"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let h=Nm();h.length!==0&&(h+=u),ah(h).then(()=>{i(u,o,a)}).catch(d=>{a(d)})}}).catch(u=>{a(u)})})}};async function kl(n,e,t,r=!1){let i=new Po(n),o;try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}let a=Object.assign({},e);return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function hi(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let o=await kl(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let a=await kl(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(o)})}function uh(n,e){let t=Hn(n,"auth");if(t.isInitialized()){let i=t.getImmediate(),o=t.getOptions();if(Rt(o,e!=null?e:{}))return i;Ne(i,"already-initialized")}return t.initialize({options:e})}function Vm(n,e){let t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Je);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lh(n,e,t){let r=Ze(n);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");let i=!!(t!=null&&t.disableWarnings),o=hh(e),{host:a,port:u}=Lm(e),h=u===null?"":`:${u}`;r.config.emulator={url:`${o}//${a}${h}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Mm()}function hh(n){let e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Lm(n){let e=hh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};let r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let o=i[1];return{host:o,port:Ol(r.substr(o.length+1))}}else{let[o,a]=r.split(":");return{host:o,port:Ol(a)}}}function Ol(n){if(!n)return null;let e=Number(n);return isNaN(e)?null:e}function Mm(){function n(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}var Nt=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ve("not implemented")}_getIdTokenResponse(e){return Ve("not implemented")}_linkToIdToken(e,t){return Ve("not implemented")}_getReauthenticationResolver(e){return Ve("not implemented")}};async function Fm(n,e){return he(n,"POST","/v1/accounts:signUp",e)}async function Um(n,e){return mt(n,"POST","/v1/accounts:signInWithPassword",re(n,e))}async function qm(n,e){return he(n,"POST","/v1/accounts:sendOobCode",re(n,e))}async function Bm(n,e){return qm(n,e)}async function jm(n,e){return mt(n,"POST","/v1/accounts:signInWithEmailLink",re(n,e))}async function zm(n,e){return mt(n,"POST","/v1/accounts:signInWithEmailLink",re(n,e))}var Zn=class n extends Nt{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new n(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new n(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hi(e,t,"signInWithPassword",Um);case"emailLink":return jm(e,{email:this._email,oobCode:this._password});default:Ne(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hi(e,r,"signUpPassword",Fm);case"emailLink":return zm(e,{idToken:t,email:this._email,oobCode:this._password});default:Ne(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function Zt(n,e){return mt(n,"POST","/v1/accounts:signInWithIdp",re(n,e))}var Gm="http://localhost",kt=class n extends Nt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ne("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=Zr(t,["providerId","signInMethod"]);if(!r||!i)return null;let a=new n(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){let t=this.buildRequest();return Zt(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,Zt(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,Zt(e,t)}buildRequest(){let e={requestUri:Gm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Jt(t)}return e}};async function Km(n,e){return he(n,"POST","/v1/accounts:sendVerificationCode",re(n,e))}async function $m(n,e){return mt(n,"POST","/v1/accounts:signInWithPhoneNumber",re(n,e))}async function Hm(n,e){let t=await mt(n,"POST","/v1/accounts:signInWithPhoneNumber",re(n,e));if(t.temporaryProof)throw Wn(n,"account-exists-with-different-credential",t);return t}var Wm={USER_NOT_FOUND:"user-not-found"};async function Qm(n,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return mt(n,"POST","/v1/accounts:signInWithPhoneNumber",re(n,t),Wm)}var er=class n extends Nt{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return $m(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Hm(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Qm(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:o}=e;return!r&&!t&&!i&&!o?null:new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:o})}};function Jm(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ym(n){let e=Yt(Xt(n)).link,t=e?Yt(Xt(e)).deep_link_id:null,r=Yt(Xt(n)).deep_link_id;return(r?Yt(Xt(r)).link:null)||r||t||e||n}var di=class n{constructor(e){var t,r,i,o,a,u;let h=Yt(Xt(e)),d=(t=h.apiKey)!==null&&t!==void 0?t:null,p=(r=h.oobCode)!==null&&r!==void 0?r:null,E=Jm((i=h.mode)!==null&&i!==void 0?i:null);O(d&&p&&E,"argument-error"),this.apiKey=d,this.operation=E,this.code=p,this.continueUrl=(o=h.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(a=h.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(u=h.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){let t=Ym(e);try{return new n(t)}catch{return null}}};var Ot=class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,t){return Zn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=di.parseLink(t);return O(r,"argument-error"),Zn._fromEmailAndCode(e,r.code,r.tenantId)}};Ot.PROVIDER_ID="password";Ot.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ot.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var fi=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var xt=class extends fi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var tr=class n extends xt{constructor(){super("facebook.com")}static credential(e){return kt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";tr.PROVIDER_ID="facebook.com";var nr=class n extends xt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return kt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return n.credential(t,r)}catch{return null}}};nr.GOOGLE_SIGN_IN_METHOD="google.com";nr.PROVIDER_ID="google.com";var rr=class n extends xt{constructor(){super("github.com")}static credential(e){return kt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};rr.GITHUB_SIGN_IN_METHOD="github.com";rr.PROVIDER_ID="github.com";var ir=class n extends xt{constructor(){super("twitter.com")}static credential(e,t){return kt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return n.credential(t,r)}catch{return null}}};ir.TWITTER_SIGN_IN_METHOD="twitter.com";ir.PROVIDER_ID="twitter.com";async function Xm(n,e){return mt(n,"POST","/v1/accounts:signUp",re(n,e))}var tn=class n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){let o=await en._fromIdTokenResponse(e,r,i),a=xl(r);return new n({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let i=xl(r);return new n({user:e,providerId:i,_tokenResponse:r,operationType:t})}};function xl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}var Co=class n extends be{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,n.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new n(e,t,r,i)}};function dh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Co._fromErrorAndOperation(n,o,e,r):o})}async function Zm(n,e,t=!1){let r=await Yn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return tn._forOperation(n,"link",r)}async function eg(n,e,t=!1){let{auth:r}=n;if(De(r.app))return Promise.reject(Ye(r));let i="reauthenticate";try{let o=await Yn(n,dh(r,i,e,n),t);O(o.idToken,r,"internal-error");let a=qo(o.idToken);O(a,r,"internal-error");let{sub:u}=a;return O(n.uid===u,r,"user-mismatch"),tn._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ne(r,"user-mismatch"),o}}async function fh(n,e,t=!1){if(De(n.app))return Promise.reject(Ye(n));let r="signIn",i=await dh(n,r,e),o=await tn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}async function ph(n,e){return fh(Ze(n),e)}function tg(n,e,t){var r;O(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),O(typeof t.dynamicLinkDomain=="undefined"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(O(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(O(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}async function mh(n){let e=Ze(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function jo(n,e,t){let r=Ze(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&tg(r,i,t),await hi(r,i,"getOobCode",Bm)}async function zo(n,e,t){if(De(n.app))return Promise.reject(Ye(n));let r=Ze(n),a=await hi(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Xm).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&mh(n),h}),u=await tn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(u.user),u}function Go(n,e,t){return De(n.app)?Promise.reject(Ye(n)):ph(ce(n),Ot.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&mh(n),r})}function gh(n,e,t,r){return ce(n).onIdTokenChanged(e,t,r)}function _h(n,e,t){return ce(n).beforeAuthStateChanged(e,t)}function Ko(n,e,t,r){return ce(n).onAuthStateChanged(e,t,r)}function $o(n){return ce(n).signOut()}function ng(n,e){return he(n,"POST","/v2/accounts/mfaEnrollment:start",re(n,e))}function rg(n,e){return he(n,"POST","/v2/accounts/mfaEnrollment:finalize",re(n,e))}function ig(n,e){return he(n,"POST","/v2/accounts/mfaEnrollment:start",re(n,e))}function sg(n,e){return he(n,"POST","/v2/accounts/mfaEnrollment:finalize",re(n,e))}var pi="__sak";var mi=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(pi,"1"),this.storage.removeItem(pi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};function og(){let n=oe();return Bo(n)||Pi(n)}var ag=1e3,cg=10,gi=class extends mi{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=og()&&Rm(),this.fallbackToPolling=sh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,h)=>{this.notifyListeners(a,h)});return}let r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}let i=()=>{let a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);Sm()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cg):i()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},ag)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};gi.type="LOCAL";var yh=gi;var _i=class extends mi{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};_i.type="SESSION";var Ho=_i;function ug(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var yi=class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;let r=new n(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:r,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});let u=Array.from(a).map(async d=>d(t.origin,o)),h=await ug(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};yi.receivers=[];function Wo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}var Do=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((u,h)=>{let d=Wo("",20);i.port1.start();let p=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(E){let b=E;if(b.data.eventId===d)switch(b.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(b.data.response);break;default:clearTimeout(p),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}};function Me(){return window}function lg(n){Me().location.href=n}function Ih(){return typeof Me().WorkerGlobalScope!="undefined"&&typeof Me().importScripts=="function"}async function hg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function fg(){return Ih()?self:null}var vh="firebaseLocalStorageDb",pg=1,Ii="firebaseLocalStorage",wh="fbase_key",Vt=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function Di(n,e){return n.transaction([Ii],e?"readwrite":"readonly").objectStore(Ii)}function mg(){let n=indexedDB.deleteDatabase(vh);return new Vt(n).toPromise()}function No(){let n=indexedDB.open(vh,pg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let r=n.result;try{r.createObjectStore(Ii,{keyPath:wh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{let r=n.result;r.objectStoreNames.contains(Ii)?e(r):(r.close(),await mg(),e(await No()))})})}async function Vl(n,e,t){let r=Di(n,!0).put({[wh]:e,value:t});return new Vt(r).toPromise()}async function gg(n,e){let t=Di(n,!1).get(e),r=await new Vt(t).toPromise();return r===void 0?null:r.value}function Ll(n,e){let t=Di(n,!0).delete(e);return new Vt(t).toPromise()}var _g=800,yg=3,vi=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await No(),this.db)}async _withRetries(e){let t=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(t++>yg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ih()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yi._getInstance(fg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await hg(),!this.activeServiceWorker)return;this.sender=new Do(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await No();return await Vl(e,pi,"1"),await Ll(e,pi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(r=>gg(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ll(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(i=>{let o=Di(i,!1).getAll();return new Vt(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],r=new Set;if(e.length!==0)for(let{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_g)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};vi.type="LOCAL";var Eh=vi;function Ig(n,e){return he(n,"POST","/v2/accounts/mfaSignIn:start",re(n,e))}function vg(n,e){return he(n,"POST","/v2/accounts/mfaSignIn:finalize",re(n,e))}function wg(n,e){return he(n,"POST","/v2/accounts/mfaSignIn:finalize",re(n,e))}var VI=ch("rcb"),LI=new Dt(3e4,6e4);var Eg="recaptcha";async function Tg(n,e,t){var r;let i=await t.verify();try{O(typeof i=="string",n,"argument-error"),O(t.type===Eg,n,"argument-error");let o;if(typeof e=="string"?o={phoneNumber:e}:o=e,"session"in o){let a=o.session;if("phoneNumber"in o)return O(a.type==="enroll",n,"internal-error"),(await ng(n,{idToken:a.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{O(a.type==="signin",n,"internal-error");let u=((r=o.multiFactorHint)===null||r===void 0?void 0:r.uid)||o.multiFactorUid;return O(u,n,"missing-multi-factor-info"),(await Ig(n,{mfaPendingCredential:a.credential,mfaEnrollmentId:u,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{let{sessionInfo:a}=await Km(n,{phoneNumber:o.phoneNumber,recaptchaToken:i});return a}}finally{t._reset()}}var sr=class n{constructor(e){this.providerId=n.PROVIDER_ID,this.auth=Ze(e)}verifyPhoneNumber(e,t){return Tg(this.auth,e,ce(t))}static credential(e,t){return er._fromVerification(e,t)}static credentialFromResult(e){let t=e;return n.credentialFromTaggedObject(t)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?er._fromTokenResponse(t,r):null}};sr.PROVIDER_ID="phone";sr.PHONE_SIGN_IN_METHOD="phone";function Ag(n,e){return e?Je(e):(O(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}var or=class extends Nt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Zt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Zt(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function bg(n){return fh(n.auth,new or(n),n.bypassAuthState)}function Sg(n){let{auth:e,user:t}=n;return O(t,e,"internal-error"),eg(t,new or(n),n.bypassAuthState)}async function Rg(n){let{auth:e,user:t}=n;return O(t,e,"internal-error"),Zm(t,new or(n),n.bypassAuthState)}var wi=class{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:a,type:u}=e;if(a){this.reject(a);return}let h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bg;case"linkViaPopup":case"linkViaRedirect":return Rg;case"reauthViaPopup":case"reauthViaRedirect":return Sg;default:Ne(this.auth,"internal-error")}}resolve(e){Xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var Pg=new Dt(2e3,1e4);var ko=class n extends wi{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){Xe(this.filter.length===1,"Popup operations only handle one event");let e=Wo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Le(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Le(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Le(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Pg.get())};e()}};ko.currentPopupAction=null;var Cg="pendingRedirect",ri=new Map,Oo=class extends wi{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ri.get(this.auth._key());if(!e){try{let r=await Dg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ri.set(this.auth._key(),e)}return this.bypassAuthState||ri.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function Dg(n,e){let t=Og(e),r=kg(n);if(!await r._isAvailable())return!1;let i=await r._get(t)==="true";return await r._remove(t),i}function Ng(n,e){ri.set(n._key(),e)}function kg(n){return Je(n._redirectPersistence)}function Og(n){return ni(Cg,n.config.apiKey,n.name)}async function xg(n,e,t=!1){if(De(n.app))return Promise.reject(Ye(n));let r=Ze(n),i=Ag(r,e),a=await new Oo(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}var Vg=10*60*1e3,xo=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Lg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Th(e)){let i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Le(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Vg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ml(e))}saveEventToCache(e){this.cachedEventUids.add(Ml(e)),this.lastProcessedEventTime=Date.now()}};function Ml(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Th({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Lg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Th(n);default:return!1}}async function Mg(n,e={}){return he(n,"GET","/v1/projects",e)}var Fg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ug=/^https?/;async function qg(n){if(n.config.emulator)return;let{authorizedDomains:e}=await Mg(n);for(let t of e)try{if(Bg(t))return}catch{}Ne(n,"unauthorized-domain")}function Bg(n){let e=vo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){let a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Ug.test(t))return!1;if(Fg.test(n))return r===n;let i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}var jg=new Dt(3e4,6e4);function Fl(){let n=Me().___jsl;if(n!=null&&n.H){for(let e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function zg(n){return new Promise((e,t)=>{var r,i,o;function a(){Fl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fl(),t(Le(n,"network-request-failed"))},timeout:jg.get()})}if(!((i=(r=Me().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Me().gapi)===null||o===void 0)&&o.load)a();else{let u=ch("iframefcb");return Me()[u]=()=>{gapi.load?a():t(Le(n,"network-request-failed"))},ah(`${km()}?onload=${u}`).catch(h=>t(h))}}).catch(e=>{throw ii=null,e})}var ii=null;function Gg(n){return ii=ii||zg(n),ii}var Kg=new Dt(5e3,15e3),$g="__/auth/iframe",Hg="emulator/auth/iframe",Wg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jg(n){let e=n.config;O(e.authDomain,n,"auth-domain-config-required");let t=e.emulator?Uo(e,Hg):`https://${n.config.authDomain}/${$g}`,r={apiKey:e.apiKey,appName:n.name,v:ft},i=Qg.get(n.config.apiHost);i&&(r.eid=i);let o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Jt(r).slice(1)}`}async function Yg(n){let e=await Gg(n),t=Me().gapi;return O(t,n,"internal-error"),e.open({where:document.body,url:Jg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wg,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});let a=Le(n,"network-request-failed"),u=Me().setTimeout(()=>{o(a)},Kg.get());function h(){Me().clearTimeout(u),i(r)}r.ping(h).then(h,()=>{o(a)})}))}var Xg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zg=500,e_=600,t_="_blank",n_="http://localhost",Ei=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function r_(n,e,t,r=Zg,i=e_){let o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString(),u="",h=Object.assign(Object.assign({},Xg),{width:r.toString(),height:i.toString(),top:o,left:a}),d=oe().toLowerCase();t&&(u=eh(d)?t_:t),Zl(d)&&(e=e||n_,h.scrollbars="yes");let p=Object.entries(h).reduce((b,[S,N])=>`${b}${S}=${N},`,"");if(bm(d)&&u!=="_self")return i_(e||"",u),new Ei(null);let E=window.open(e||"",u,p);O(E,n,"popup-blocked");try{E.focus()}catch{}return new Ei(E)}function i_(n,e){let t=document.createElement("a");t.href=n,t.target=e;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}var s_="__/auth/handler",o_="emulator/auth/handler",a_=encodeURIComponent("fac");async function Ul(n,e,t,r,i,o){O(n.config.authDomain,n,"auth-domain-config-required"),O(n.config.apiKey,n,"invalid-api-key");let a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ft,eventId:i};if(e instanceof fi){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",hl(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(let[p,E]of Object.entries(o||{}))a[p]=E}if(e instanceof xt){let p=e.getScopes().filter(E=>E!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);let u=a;for(let p of Object.keys(u))u[p]===void 0&&delete u[p];let h=await n._getAppCheckToken(),d=h?`#${a_}=${encodeURIComponent(h)}`:"";return`${c_(n)}?${Jt(u).slice(1)}${d}`}function c_({config:n}){return n.emulator?Uo(n,o_):`https://${n.authDomain}/${s_}`}var Io="webStorageSupport",Vo=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ho,this._completeRedirectFn=xg,this._overrideRedirectResult=Ng}async _openPopup(e,t,r,i){var o;Xe((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");let a=await Ul(e,t,r,vo(),i);return r_(e,a,Wo())}async _openRedirect(e,t,r,i){await this._originValidation(e);let o=await Ul(e,t,r,vo(),i);return lg(o),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(Xe(o,"If manager is not set, promise should be"),o)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await Yg(e),r=new xo(e);return t.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Io,{type:Io},i=>{var o;let a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Io];a!==void 0&&t(!!a),Ne(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=qg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return sh()||Bo()||Pi()}},Ah=Vo,Ti=class{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Ve("unexpected MultiFactorSessionType")}}},Lo=class n extends Ti{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n(e)}_finalizeEnroll(e,t,r){return rg(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return vg(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},Ai=class{constructor(){}static assertion(e){return Lo._fromCredential(e)}};Ai.FACTOR_ID="phone";var bi=class{static assertionForEnrollment(e,t){return Si._fromSecret(e,t)}static assertionForSignIn(e,t){return Si._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let r=e;O(typeof((t=r.user)===null||t===void 0?void 0:t.auth)!="undefined","internal-error");let i=await ig(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return Ri._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)}};bi.FACTOR_ID="totp";var Si=class n extends Ti{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new n(t,void 0,e)}static _fromEnrollmentId(e,t){return new n(t,e)}async _finalizeEnroll(e,t,r){return O(typeof this.secret!="undefined",e,"argument-error"),sg(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){O(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return wg(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},Ri=class n{constructor(e,t,r,i,o,a,u){this.sessionInfo=a,this.auth=u,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=o}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let i=!1;return(ei(e)||ei(t))&&(i=!0),i&&(ei(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),ei(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function ei(n){return typeof n=="undefined"||(n==null?void 0:n.length)===0}var ql="@firebase/auth",Bl="1.7.4";var Mo=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function u_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function l_(n){dt(new Re("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;O(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});let h={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oh(n)},d=new Ro(r,i,o,h);return Vm(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),dt(new Re("auth-internal",e=>{let t=Ze(e.getProvider("auth").getImmediate());return(r=>new Mo(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ce(ql,Bl,u_(n)),Ce(ql,Bl,"esm2017")}var h_=5*60,d_=eo("authIdTokenMaxAge")||h_,jl=null,f_=n=>async e=>{let t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>d_)return;let i=t==null?void 0:t.token;jl!==i&&(jl=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Qo(n=Xr()){let e=Hn(n,"auth");if(e.isInitialized())return e.getImmediate();let t=uh(n,{popupRedirectResolver:Ah,persistence:[Eh,yh,Ho]}),r=eo("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){let o=new URL(r,location.origin);if(location.origin===o.origin){let a=f_(o.toString());_h(t,a,()=>a(t.currentUser)),gh(t,u=>a(u))}}let i=Xs("auth");return i&&lh(t,`http://${i}`),t}function p_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Dm({loadJS(n){return new Promise((e,t)=>{let r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{let o=Le("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",p_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});l_("Browser");var bh=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Sh={};var gt,Jo;(function(){var n;function e(I,m){function _(){}_.prototype=m.prototype,I.D=m.prototype,I.prototype=new _,I.prototype.constructor=I,I.C=function(y,v,T){for(var g=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)g[$e-2]=arguments[$e];return m.prototype[v].apply(y,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var v=0;16>v;++v)y[v]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(v=0;16>v;++v)y[v]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=I.g[0],_=I.g[1],v=I.g[2];var T=I.g[3],g=m+(T^_&(v^T))+y[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=T+(v^m&(_^v))+y[1]+3905402710&4294967295,T=m+(g<<12&4294967295|g>>>20),g=v+(_^T&(m^_))+y[2]+606105819&4294967295,v=T+(g<<17&4294967295|g>>>15),g=_+(m^v&(T^m))+y[3]+3250441966&4294967295,_=v+(g<<22&4294967295|g>>>10),g=m+(T^_&(v^T))+y[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=T+(v^m&(_^v))+y[5]+1200080426&4294967295,T=m+(g<<12&4294967295|g>>>20),g=v+(_^T&(m^_))+y[6]+2821735955&4294967295,v=T+(g<<17&4294967295|g>>>15),g=_+(m^v&(T^m))+y[7]+4249261313&4294967295,_=v+(g<<22&4294967295|g>>>10),g=m+(T^_&(v^T))+y[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=T+(v^m&(_^v))+y[9]+2336552879&4294967295,T=m+(g<<12&4294967295|g>>>20),g=v+(_^T&(m^_))+y[10]+4294925233&4294967295,v=T+(g<<17&4294967295|g>>>15),g=_+(m^v&(T^m))+y[11]+2304563134&4294967295,_=v+(g<<22&4294967295|g>>>10),g=m+(T^_&(v^T))+y[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=T+(v^m&(_^v))+y[13]+4254626195&4294967295,T=m+(g<<12&4294967295|g>>>20),g=v+(_^T&(m^_))+y[14]+2792965006&4294967295,v=T+(g<<17&4294967295|g>>>15),g=_+(m^v&(T^m))+y[15]+1236535329&4294967295,_=v+(g<<22&4294967295|g>>>10),g=m+(v^T&(_^v))+y[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=T+(_^v&(m^_))+y[6]+3225465664&4294967295,T=m+(g<<9&4294967295|g>>>23),g=v+(m^_&(T^m))+y[11]+643717713&4294967295,v=T+(g<<14&4294967295|g>>>18),g=_+(T^m&(v^T))+y[0]+3921069994&4294967295,_=v+(g<<20&4294967295|g>>>12),g=m+(v^T&(_^v))+y[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=T+(_^v&(m^_))+y[10]+38016083&4294967295,T=m+(g<<9&4294967295|g>>>23),g=v+(m^_&(T^m))+y[15]+3634488961&4294967295,v=T+(g<<14&4294967295|g>>>18),g=_+(T^m&(v^T))+y[4]+3889429448&4294967295,_=v+(g<<20&4294967295|g>>>12),g=m+(v^T&(_^v))+y[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=T+(_^v&(m^_))+y[14]+3275163606&4294967295,T=m+(g<<9&4294967295|g>>>23),g=v+(m^_&(T^m))+y[3]+4107603335&4294967295,v=T+(g<<14&4294967295|g>>>18),g=_+(T^m&(v^T))+y[8]+1163531501&4294967295,_=v+(g<<20&4294967295|g>>>12),g=m+(v^T&(_^v))+y[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=T+(_^v&(m^_))+y[2]+4243563512&4294967295,T=m+(g<<9&4294967295|g>>>23),g=v+(m^_&(T^m))+y[7]+1735328473&4294967295,v=T+(g<<14&4294967295|g>>>18),g=_+(T^m&(v^T))+y[12]+2368359562&4294967295,_=v+(g<<20&4294967295|g>>>12),g=m+(_^v^T)+y[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=T+(m^_^v)+y[8]+2272392833&4294967295,T=m+(g<<11&4294967295|g>>>21),g=v+(T^m^_)+y[11]+1839030562&4294967295,v=T+(g<<16&4294967295|g>>>16),g=_+(v^T^m)+y[14]+4259657740&4294967295,_=v+(g<<23&4294967295|g>>>9),g=m+(_^v^T)+y[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=T+(m^_^v)+y[4]+1272893353&4294967295,T=m+(g<<11&4294967295|g>>>21),g=v+(T^m^_)+y[7]+4139469664&4294967295,v=T+(g<<16&4294967295|g>>>16),g=_+(v^T^m)+y[10]+3200236656&4294967295,_=v+(g<<23&4294967295|g>>>9),g=m+(_^v^T)+y[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=T+(m^_^v)+y[0]+3936430074&4294967295,T=m+(g<<11&4294967295|g>>>21),g=v+(T^m^_)+y[3]+3572445317&4294967295,v=T+(g<<16&4294967295|g>>>16),g=_+(v^T^m)+y[6]+76029189&4294967295,_=v+(g<<23&4294967295|g>>>9),g=m+(_^v^T)+y[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=T+(m^_^v)+y[12]+3873151461&4294967295,T=m+(g<<11&4294967295|g>>>21),g=v+(T^m^_)+y[15]+530742520&4294967295,v=T+(g<<16&4294967295|g>>>16),g=_+(v^T^m)+y[2]+3299628645&4294967295,_=v+(g<<23&4294967295|g>>>9),g=m+(v^(_|~T))+y[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=T+(_^(m|~v))+y[7]+1126891415&4294967295,T=m+(g<<10&4294967295|g>>>22),g=v+(m^(T|~_))+y[14]+2878612391&4294967295,v=T+(g<<15&4294967295|g>>>17),g=_+(T^(v|~m))+y[5]+4237533241&4294967295,_=v+(g<<21&4294967295|g>>>11),g=m+(v^(_|~T))+y[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=T+(_^(m|~v))+y[3]+2399980690&4294967295,T=m+(g<<10&4294967295|g>>>22),g=v+(m^(T|~_))+y[10]+4293915773&4294967295,v=T+(g<<15&4294967295|g>>>17),g=_+(T^(v|~m))+y[1]+2240044497&4294967295,_=v+(g<<21&4294967295|g>>>11),g=m+(v^(_|~T))+y[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=T+(_^(m|~v))+y[15]+4264355552&4294967295,T=m+(g<<10&4294967295|g>>>22),g=v+(m^(T|~_))+y[6]+2734768916&4294967295,v=T+(g<<15&4294967295|g>>>17),g=_+(T^(v|~m))+y[13]+1309151649&4294967295,_=v+(g<<21&4294967295|g>>>11),g=m+(v^(_|~T))+y[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=T+(_^(m|~v))+y[11]+3174756917&4294967295,T=m+(g<<10&4294967295|g>>>22),g=v+(m^(T|~_))+y[2]+718787259&4294967295,v=T+(g<<15&4294967295|g>>>17),g=_+(T^(v|~m))+y[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(v+(g<<21&4294967295|g>>>11))&4294967295,I.g[2]=I.g[2]+v&4294967295,I.g[3]=I.g[3]+T&4294967295}r.prototype.u=function(I,m){m===void 0&&(m=I.length);for(var _=m-this.blockSize,y=this.B,v=this.h,T=0;T<m;){if(v==0)for(;T<=_;)i(this,I,T),T+=this.blockSize;if(typeof I=="string"){for(;T<m;)if(y[v++]=I.charCodeAt(T++),v==this.blockSize){i(this,y),v=0;break}}else for(;T<m;)if(y[v++]=I[T++],v==this.blockSize){i(this,y),v=0;break}}this.h=v,this.o+=m},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;var _=8*this.o;for(m=I.length-8;m<I.length;++m)I[m]=_&255,_/=256;for(this.u(I),I=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)I[_++]=this.g[m]>>>y&255;return I};function o(I,m){var _=u;return Object.prototype.hasOwnProperty.call(_,I)?_[I]:_[I]=m(I)}function a(I,m){this.h=m;for(var _=[],y=!0,v=I.length-1;0<=v;v--){var T=I[v]|0;y&&T==m||(_[v]=T,y=!1)}this.g=_}var u={};function h(I){return-128<=I&&128>I?o(I,function(m){return new a([m|0],0>m?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return E;if(0>I)return D(d(-I));for(var m=[],_=1,y=0;I>=_;y++)m[y]=I/_|0,_*=4294967296;return new a(m,0)}function p(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return D(p(I.substring(1),m));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),y=E,v=0;v<I.length;v+=8){var T=Math.min(8,I.length-v),g=parseInt(I.substring(v,v+T),m);8>T?(T=d(Math.pow(m,T)),y=y.j(T).add(d(g))):(y=y.j(_),y=y.add(d(g)))}return y}var E=h(0),b=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(x(this))return-D(this).m();for(var I=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);I+=(0<=y?y:4294967296+y)*m,m*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(N(this))return"0";if(x(this))return"-"+D(this).toString(I);for(var m=d(Math.pow(I,6)),_=this,y="";;){var v=Y(_,m).g;_=q(_,v.j(m));var T=((0<_.g.length?_.g[0]:_.h)>>>0).toString(I);if(_=v,N(_))return T+y;for(;6>T.length;)T="0"+T;y=T+y}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function N(I){if(I.h!=0)return!1;for(var m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function x(I){return I.h==-1}n.l=function(I){return I=q(this,I),x(I)?-1:N(I)?0:1};function D(I){for(var m=I.g.length,_=[],y=0;y<m;y++)_[y]=~I.g[y];return new a(_,~I.h).add(b)}n.abs=function(){return x(this)?D(this):this},n.add=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],y=0,v=0;v<=m;v++){var T=y+(this.i(v)&65535)+(I.i(v)&65535),g=(T>>>16)+(this.i(v)>>>16)+(I.i(v)>>>16);y=g>>>16,T&=65535,g&=65535,_[v]=g<<16|T}return new a(_,_[_.length-1]&-2147483648?-1:0)};function q(I,m){return I.add(D(m))}n.j=function(I){if(N(this)||N(I))return E;if(x(this))return x(I)?D(this).j(D(I)):D(D(this).j(I));if(x(I))return D(this.j(D(I)));if(0>this.l(S)&&0>I.l(S))return d(this.m()*I.m());for(var m=this.g.length+I.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var v=0;v<I.g.length;v++){var T=this.i(y)>>>16,g=this.i(y)&65535,$e=I.i(v)>>>16,Sn=I.i(v)&65535;_[2*y+2*v]+=g*Sn,z(_,2*y+2*v),_[2*y+2*v+1]+=T*Sn,z(_,2*y+2*v+1),_[2*y+2*v+1]+=g*$e,z(_,2*y+2*v+1),_[2*y+2*v+2]+=T*$e,z(_,2*y+2*v+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new a(_,0)};function z(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function G(I,m){this.g=I,this.h=m}function Y(I,m){if(N(m))throw Error("division by zero");if(N(I))return new G(E,E);if(x(I))return m=Y(D(I),m),new G(D(m.g),D(m.h));if(x(m))return m=Y(I,D(m)),new G(D(m.g),m.h);if(30<I.g.length){if(x(I)||x(m))throw Error("slowDivide_ only works with positive integers.");for(var _=b,y=m;0>=y.l(I);)_=Ie(_),y=Ie(y);var v=W(_,1),T=W(y,1);for(y=W(y,2),_=W(_,2);!N(y);){var g=T.add(y);0>=g.l(I)&&(v=v.add(_),T=g),y=W(y,1),_=W(_,1)}return m=q(I,v.j(m)),new G(v,m)}for(v=E;0<=I.l(m);){for(_=Math.max(1,Math.floor(I.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),T=d(_),g=T.j(m);x(g)||0<g.l(I);)_-=y,T=d(_),g=T.j(m);N(T)&&(T=b),v=v.add(T),I=q(I,g)}return new G(v,I)}n.A=function(I){return Y(this,I).h},n.and=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&I.i(y);return new a(_,this.h&I.h)},n.or=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|I.i(y);return new a(_,this.h|I.h)},n.xor=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^I.i(y);return new a(_,this.h^I.h)};function Ie(I){for(var m=I.g.length+1,_=[],y=0;y<m;y++)_[y]=I.i(y)<<1|I.i(y-1)>>>31;return new a(_,I.h)}function W(I,m){var _=m>>5;m%=32;for(var y=I.g.length-_,v=[],T=0;T<y;T++)v[T]=0<m?I.i(T+_)>>>m|I.i(T+_+1)<<32-m:I.i(T+_);return new a(v,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Jo=Sh.Md5=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,gt=Sh.Integer=a}).apply(typeof bh!="undefined"?bh:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var Ni=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},et={};var Yo,Xo,nn,Zo,ar,ki,ea,ta,na;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,l){return s==Array.prototype||s==Object.prototype||(s[c]=l.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ni=="object"&&Ni];for(var c=0;c<s.length;++c){var l=s[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=t(this);function i(s,c){if(c)e:{var l=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var w=s[f];if(!(w in l))break e;l=l[w]}s=s[s.length-1],f=l[s],c=c(f),c!=f&&c!=null&&e(l,s,{configurable:!0,writable:!0,value:c})}}function o(s,c){s instanceof String&&(s+="");var l=0,f=!1,w={next:function(){if(!f&&l<s.length){var A=l++;return{value:c(A,s[A]),done:!1}}return f=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}i("Array.prototype.values",function(s){return s||function(){return o(this,function(c,l){return l})}});var a=a||{},u=this||self;function h(s){var c=typeof s;return c=c!="object"?c:s?Array.isArray(s)?"array":c:"null",c=="array"||c=="object"&&typeof s.length=="number"}function d(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function p(s,c,l){return s.call.apply(s.bind,arguments)}function E(s,c,l){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,f),s.apply(c,w)}}return function(){return s.apply(c,arguments)}}function b(s,c,l){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:E,b.apply(null,arguments)}function S(s,c){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function N(s,c){function l(){}l.prototype=c.prototype,s.aa=c.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(f,w,A){for(var C=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)C[Q-2]=arguments[Q];return c.prototype[w].apply(f,C)}}function x(s){let c=s.length;if(0<c){let l=Array(c);for(let f=0;f<c;f++)l[f]=s[f];return l}return[]}function D(s,c){for(let l=1;l<arguments.length;l++){let f=arguments[l];if(h(f)){let w=s.length||0,A=f.length||0;s.length=w+A;for(let C=0;C<A;C++)s[w+C]=f[C]}else s.push(f)}}class q{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function z(s){return/^[\s\xa0]*$/.test(s)}function G(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function Y(s){return Y[" "](s),s}Y[" "]=function(){};var Ie=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function W(s,c,l){for(let f in s)c.call(l,s[f],f,s)}function I(s,c){for(let l in s)c.call(void 0,s[l],l,s)}function m(s){let c={};for(let l in s)c[l]=s[l];return c}let _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,c){let l,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(l in f)s[l]=f[l];for(let A=0;A<_.length;A++)l=_[A],Object.prototype.hasOwnProperty.call(f,l)&&(s[l]=f[l])}}function v(s){var c=1;s=s.split(":");let l=[];for(;0<c&&s.length;)l.push(s.shift()),c--;return s.length&&l.push(s.join(":")),l}function T(s){u.setTimeout(()=>{throw s},0)}function g(){var s=Es;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class $e{constructor(){this.h=this.g=null}add(c,l){let f=Sn.get();f.set(c,l),this.h?this.h.next=f:this.g=f,this.h=f}}var Sn=new q(()=>new pf,s=>s.reset());class pf{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Rn,Pn=!1,Es=new $e,Zc=()=>{let s=u.Promise.resolve(void 0);Rn=()=>{s.then(mf)}};var mf=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(l){T(l)}var c=Sn;c.j(s),100>c.h&&(c.h++,s.next=c.g,c.g=s)}Pn=!1};function ot(){this.s=this.s,this.C=this.C}ot.prototype.s=!1,ot.prototype.ma=function(){this.s||(this.s=!0,this.N())},ot.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var gf=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{let l=()=>{};u.addEventListener("test",l,c),u.removeEventListener("test",l,c)}catch{}return s}();function Cn(s,c){if(fe.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget){if(Ie){e:{try{Y(c.nodeName);var w=!0;break e}catch{}w=!1}w||(c=null)}}else l=="mouseover"?c=s.fromElement:l=="mouseout"&&(c=s.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:_f[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Cn.aa.h.call(this)}}N(Cn,fe);var _f={2:"touch",3:"pen",4:"mouse"};Cn.prototype.h=function(){Cn.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Dn="closure_listenable_"+(1e6*Math.random()|0),yf=0;function If(s,c,l,f,w){this.listener=s,this.proxy=null,this.src=c,this.type=l,this.capture=!!f,this.ha=w,this.key=++yf,this.da=this.fa=!1}function Dr(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Nr(s){this.src=s,this.g={},this.h=0}Nr.prototype.add=function(s,c,l,f,w){var A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);var C=As(s,c,f,w);return-1<C?(c=s[C],l||(c.fa=!1)):(c=new If(c,this.src,A,!!f,w),c.fa=l,s.push(c)),c};function Ts(s,c){var l=c.type;if(l in s.g){var f=s.g[l],w=Array.prototype.indexOf.call(f,c,void 0),A;(A=0<=w)&&Array.prototype.splice.call(f,w,1),A&&(Dr(c),s.g[l].length==0&&(delete s.g[l],s.h--))}}function As(s,c,l,f){for(var w=0;w<s.length;++w){var A=s[w];if(!A.da&&A.listener==c&&A.capture==!!l&&A.ha==f)return w}return-1}var bs="closure_lm_"+(1e6*Math.random()|0),Ss={};function eu(s,c,l,f,w){if(f&&f.once)return nu(s,c,l,f,w);if(Array.isArray(c)){for(var A=0;A<c.length;A++)eu(s,c[A],l,f,w);return null}return l=Ds(l),s&&s[Dn]?s.K(c,l,d(f)?!!f.capture:!!f,w):tu(s,c,l,!1,f,w)}function tu(s,c,l,f,w,A){if(!c)throw Error("Invalid event type");var C=d(w)?!!w.capture:!!w,Q=Ps(s);if(Q||(s[bs]=Q=new Nr(s)),l=Q.add(c,l,f,C,A),l.proxy)return l;if(f=vf(),l.proxy=f,f.src=s,f.listener=l,s.addEventListener)gf||(w=C),w===void 0&&(w=!1),s.addEventListener(c.toString(),f,w);else if(s.attachEvent)s.attachEvent(iu(c.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function vf(){function s(l){return c.call(s.src,s.listener,l)}let c=wf;return s}function nu(s,c,l,f,w){if(Array.isArray(c)){for(var A=0;A<c.length;A++)nu(s,c[A],l,f,w);return null}return l=Ds(l),s&&s[Dn]?s.L(c,l,d(f)?!!f.capture:!!f,w):tu(s,c,l,!0,f,w)}function ru(s,c,l,f,w){if(Array.isArray(c))for(var A=0;A<c.length;A++)ru(s,c[A],l,f,w);else f=d(f)?!!f.capture:!!f,l=Ds(l),s&&s[Dn]?(s=s.i,c=String(c).toString(),c in s.g&&(A=s.g[c],l=As(A,l,f,w),-1<l&&(Dr(A[l]),Array.prototype.splice.call(A,l,1),A.length==0&&(delete s.g[c],s.h--)))):s&&(s=Ps(s))&&(c=s.g[c.toString()],s=-1,c&&(s=As(c,l,f,w)),(l=-1<s?c[s]:null)&&Rs(l))}function Rs(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[Dn])Ts(c.i,s);else{var l=s.type,f=s.proxy;c.removeEventListener?c.removeEventListener(l,f,s.capture):c.detachEvent?c.detachEvent(iu(l),f):c.addListener&&c.removeListener&&c.removeListener(f),(l=Ps(c))?(Ts(l,s),l.h==0&&(l.src=null,c[bs]=null)):Dr(s)}}}function iu(s){return s in Ss?Ss[s]:Ss[s]="on"+s}function wf(s,c){if(s.da)s=!0;else{c=new Cn(c,this);var l=s.listener,f=s.ha||s.src;s.fa&&Rs(s),s=l.call(f,c)}return s}function Ps(s){return s=s[bs],s instanceof Nr?s:null}var Cs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ds(s){return typeof s=="function"?s:(s[Cs]||(s[Cs]=function(c){return s.handleEvent(c)}),s[Cs])}function pe(){ot.call(this),this.i=new Nr(this),this.M=this,this.F=null}N(pe,ot),pe.prototype[Dn]=!0,pe.prototype.removeEventListener=function(s,c,l,f){ru(this,s,c,l,f)};function ve(s,c){var l,f=s.F;if(f)for(l=[];f;f=f.F)l.push(f);if(s=s.M,f=c.type||c,typeof c=="string")c=new fe(c,s);else if(c instanceof fe)c.target=c.target||s;else{var w=c;c=new fe(f,s),y(c,w)}if(w=!0,l)for(var A=l.length-1;0<=A;A--){var C=c.g=l[A];w=kr(C,f,!0,c)&&w}if(C=c.g=s,w=kr(C,f,!0,c)&&w,w=kr(C,f,!1,c)&&w,l)for(A=0;A<l.length;A++)C=c.g=l[A],w=kr(C,f,!1,c)&&w}pe.prototype.N=function(){if(pe.aa.N.call(this),this.i){var s=this.i,c;for(c in s.g){for(var l=s.g[c],f=0;f<l.length;f++)Dr(l[f]);delete s.g[c],s.h--}}this.F=null},pe.prototype.K=function(s,c,l,f){return this.i.add(String(s),c,!1,l,f)},pe.prototype.L=function(s,c,l,f){return this.i.add(String(s),c,!0,l,f)};function kr(s,c,l,f){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();for(var w=!0,A=0;A<c.length;++A){var C=c[A];if(C&&!C.da&&C.capture==l){var Q=C.listener,le=C.ha||C.src;C.fa&&Ts(s.i,C),w=Q.call(le,f)!==!1&&w}}return w&&!f.defaultPrevented}function su(s,c,l){if(typeof s=="function")l&&(s=b(s,l));else if(s&&typeof s.handleEvent=="function")s=b(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(s,c||0)}function ou(s){s.g=su(()=>{s.g=null,s.i&&(s.i=!1,ou(s))},s.l);let c=s.h;s.h=null,s.m.apply(null,c)}class Ef extends ot{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ou(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Nn(s){ot.call(this),this.h=s,this.g={}}N(Nn,ot);var au=[];function cu(s){W(s.g,function(c,l){this.g.hasOwnProperty(l)&&Rs(c)},s),s.g={}}Nn.prototype.N=function(){Nn.aa.N.call(this),cu(this)},Nn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ns=u.JSON.stringify,Tf=u.JSON.parse,Af=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function ks(){}ks.prototype.h=null;function uu(s){return s.h||(s.h=s.i())}function lu(){}var kn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Os(){fe.call(this,"d")}N(Os,fe);function xs(){fe.call(this,"c")}N(xs,fe);var Tt={},hu=null;function Or(){return hu=hu||new pe}Tt.La="serverreachability";function du(s){fe.call(this,Tt.La,s)}N(du,fe);function On(s){let c=Or();ve(c,new du(c))}Tt.STAT_EVENT="statevent";function fu(s,c){fe.call(this,Tt.STAT_EVENT,s),this.stat=c}N(fu,fe);function we(s){let c=Or();ve(c,new fu(c,s))}Tt.Ma="timingevent";function pu(s,c){fe.call(this,Tt.Ma,s),this.size=c}N(pu,fe);function xn(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},c)}function Vn(){this.g=!0}Vn.prototype.xa=function(){this.g=!1};function bf(s,c,l,f,w,A){s.info(function(){if(s.g)if(A)for(var C="",Q=A.split("&"),le=0;le<Q.length;le++){var $=Q[le].split("=");if(1<$.length){var me=$[0];$=$[1];var ge=me.split("_");C=2<=ge.length&&ge[1]=="type"?C+(me+"="+$+"&"):C+(me+"=redacted&")}}else C=null;else C=A;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+c+`
`+l+`
`+C})}function Sf(s,c,l,f,w,A,C){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+c+`
`+l+`
`+A+" "+C})}function $t(s,c,l,f){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+Pf(s,l)+(f?" "+f:"")})}function Rf(s,c){s.info(function(){return"TIMEOUT: "+c})}Vn.prototype.info=function(){};function Pf(s,c){if(!s.g)return c;if(!c)return null;try{var l=JSON.parse(c);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var f=l[s];if(!(2>f.length)){var w=f[1];if(Array.isArray(w)&&!(1>w.length)){var A=w[0];if(A!="noop"&&A!="stop"&&A!="close")for(var C=1;C<w.length;C++)w[C]=""}}}}return Ns(l)}catch{return c}}var xr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},mu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Vs;function Vr(){}N(Vr,ks),Vr.prototype.g=function(){return new XMLHttpRequest},Vr.prototype.i=function(){return{}},Vs=new Vr;function at(s,c,l,f){this.j=s,this.i=c,this.l=l,this.R=f||1,this.U=new Nn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new gu}function gu(){this.i=null,this.g="",this.h=!1}var _u={},Ls={};function Ms(s,c,l){s.L=1,s.v=Ur(He(c)),s.m=l,s.P=!0,yu(s,null)}function yu(s,c){s.F=Date.now(),Lr(s),s.A=He(s.v);var l=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),ku(l.i,"t",f),s.C=0,l=s.j.J,s.h=new gu,s.g=Ju(s.j,l?c:null,!s.m),0<s.O&&(s.M=new Ef(b(s.Y,s,s.g),s.O)),c=s.U,l=s.g,f=s.ca;var w="readystatechange";Array.isArray(w)||(w&&(au[0]=w.toString()),w=au);for(var A=0;A<w.length;A++){var C=eu(l,w[A],f||c.handleEvent,!1,c.h||c);if(!C)break;c.g[C.key]=C}c=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,c)):(s.u="GET",s.g.ea(s.A,s.u,null,c)),On(),bf(s.i,s.u,s.A,s.l,s.R,s.m)}at.prototype.ca=function(s){s=s.target;let c=this.M;c&&We(s)==3?c.j():this.Y(s)},at.prototype.Y=function(s){try{if(s==this.g)e:{let ge=We(this.g);var c=this.g.Ba();let Qt=this.g.Z();if(!(3>ge)&&(ge!=3||this.g&&(this.h.h||this.g.oa()||Uu(this.g)))){this.J||ge!=4||c==7||(c==8||0>=Qt?On(3):On(2)),Fs(this);var l=this.g.Z();this.X=l;t:if(Iu(this)){var f=Uu(this.g);s="";var w=f.length,A=We(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){At(this),Ln(this);var C="";break t}this.h.i=new u.TextDecoder}for(c=0;c<w;c++)this.h.h=!0,s+=this.h.i.decode(f[c],{stream:!(A&&c==w-1)});f.length=0,this.h.g+=s,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=l==200,Sf(this.i,this.u,this.A,this.l,this.R,ge,l),this.o){if(this.T&&!this.K){t:{if(this.g){var Q,le=this.g;if((Q=le.g?le.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(Q)){var $=Q;break t}}$=null}if(l=$)$t(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Us(this,l);else{this.o=!1,this.s=3,we(12),At(this),Ln(this);break e}}if(this.P){l=!0;let Pe;for(;!this.J&&this.C<C.length;)if(Pe=Cf(this,C),Pe==Ls){ge==4&&(this.s=4,we(14),l=!1),$t(this.i,this.l,null,"[Incomplete Response]");break}else if(Pe==_u){this.s=4,we(15),$t(this.i,this.l,C,"[Invalid Chunk]"),l=!1;break}else $t(this.i,this.l,Pe,null),Us(this,Pe);if(Iu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ge!=4||C.length!=0||this.h.h||(this.s=1,we(16),l=!1),this.o=this.o&&l,!l)$t(this.i,this.l,C,"[Invalid Chunked Response]"),At(this),Ln(this);else if(0<C.length&&!this.W){this.W=!0;var me=this.j;me.g==this&&me.ba&&!me.M&&(me.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),Ks(me),me.M=!0,we(11))}}else $t(this.i,this.l,C,null),Us(this,C);ge==4&&At(this),this.o&&!this.J&&(ge==4?$u(this.j,this):(this.o=!1,Lr(this)))}else $f(this.g),l==400&&0<C.indexOf("Unknown SID")?(this.s=3,we(12)):(this.s=0,we(13)),At(this),Ln(this)}}}catch{}finally{}};function Iu(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Cf(s,c){var l=s.C,f=c.indexOf(`
`,l);return f==-1?Ls:(l=Number(c.substring(l,f)),isNaN(l)?_u:(f+=1,f+l>c.length?Ls:(c=c.slice(f,f+l),s.C=f+l,c)))}at.prototype.cancel=function(){this.J=!0,At(this)};function Lr(s){s.S=Date.now()+s.I,vu(s,s.I)}function vu(s,c){if(s.B!=null)throw Error("WatchDog timer not null");s.B=xn(b(s.ba,s),c)}function Fs(s){s.B&&(u.clearTimeout(s.B),s.B=null)}at.prototype.ba=function(){this.B=null;let s=Date.now();0<=s-this.S?(Rf(this.i,this.A),this.L!=2&&(On(),we(17)),At(this),this.s=2,Ln(this)):vu(this,this.S-s)};function Ln(s){s.j.G==0||s.J||$u(s.j,s)}function At(s){Fs(s);var c=s.M;c&&typeof c.ma=="function"&&c.ma(),s.M=null,cu(s.U),s.g&&(c=s.g,s.g=null,c.abort(),c.ma())}function Us(s,c){try{var l=s.j;if(l.G!=0&&(l.g==s||qs(l.h,s))){if(!s.K&&qs(l.h,s)&&l.G==3){try{var f=l.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){e:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)Gr(l),jr(l);else break e;Gs(l),we(18)}}else l.za=w[1],0<l.za-l.T&&37500>w[2]&&l.F&&l.v==0&&!l.C&&(l.C=xn(b(l.Za,l),6e3));if(1>=Tu(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else St(l,11)}else if((s.K||l.g==s)&&Gr(l),!z(c))for(w=l.Da.g.parse(c),c=0;c<w.length;c++){let $=w[c];if(l.T=$[0],$=$[1],l.G==2)if($[0]=="c"){l.K=$[1],l.ia=$[2];let me=$[3];me!=null&&(l.la=me,l.j.info("VER="+l.la));let ge=$[4];ge!=null&&(l.Aa=ge,l.j.info("SVER="+l.Aa));let Qt=$[5];Qt!=null&&typeof Qt=="number"&&0<Qt&&(f=1.5*Qt,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;let Pe=s.g;if(Pe){let $r=Pe.g?Pe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($r){var A=f.h;A.g||$r.indexOf("spdy")==-1&&$r.indexOf("quic")==-1&&$r.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Bs(A,A.h),A.h=null))}if(f.D){let $s=Pe.g?Pe.g.getResponseHeader("X-HTTP-Session-Id"):null;$s&&(f.ya=$s,X(f.I,f.D,$s))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var C=s;if(f.qa=Qu(f,f.J?f.ia:null,f.W),C.K){Au(f.h,C);var Q=C,le=f.L;le&&(Q.I=le),Q.B&&(Fs(Q),Lr(Q)),f.g=C}else Gu(f);0<l.i.length&&zr(l)}else $[0]!="stop"&&$[0]!="close"||St(l,7);else l.G==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?St(l,7):zs(l):$[0]!="noop"&&l.l&&l.l.ta($),l.v=0)}}On(4)}catch{}}var Df=class{constructor(s,c){this.g=s,this.map=c}};function wu(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Eu(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Tu(s){return s.h?1:s.g?s.g.size:0}function qs(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function Bs(s,c){s.g?s.g.add(c):s.h=c}function Au(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}wu.prototype.cancel=function(){if(this.i=bu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let s of this.g.values())s.cancel();this.g.clear()}};function bu(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let c=s.i;for(let l of s.g.values())c=c.concat(l.D);return c}return x(s.i)}function Nf(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map!="undefined"&&s instanceof Map||typeof Set!="undefined"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var c=[],l=s.length,f=0;f<l;f++)c.push(s[f]);return c}c=[],l=0;for(f in s)c[l++]=s[f];return c}function kf(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map!="undefined"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set!="undefined"&&s instanceof Set)){if(h(s)||typeof s=="string"){var c=[];s=s.length;for(var l=0;l<s;l++)c.push(l);return c}c=[],l=0;for(let f in s)c[l++]=f;return c}}}function Su(s,c){if(s.forEach&&typeof s.forEach=="function")s.forEach(c,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,c,void 0);else for(var l=kf(s),f=Nf(s),w=f.length,A=0;A<w;A++)c.call(void 0,f[A],l&&l[A],s)}var Ru=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Of(s,c){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var f=s[l].indexOf("="),w=null;if(0<=f){var A=s[l].substring(0,f);w=s[l].substring(f+1)}else A=s[l];c(A,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function bt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof bt){this.h=s.h,Mr(this,s.j),this.o=s.o,this.g=s.g,Fr(this,s.s),this.l=s.l;var c=s.i,l=new Un;l.i=c.i,c.g&&(l.g=new Map(c.g),l.h=c.h),Pu(this,l),this.m=s.m}else s&&(c=String(s).match(Ru))?(this.h=!1,Mr(this,c[1]||"",!0),this.o=Mn(c[2]||""),this.g=Mn(c[3]||"",!0),Fr(this,c[4]),this.l=Mn(c[5]||"",!0),Pu(this,c[6]||"",!0),this.m=Mn(c[7]||"")):(this.h=!1,this.i=new Un(null,this.h))}bt.prototype.toString=function(){var s=[],c=this.j;c&&s.push(Fn(c,Cu,!0),":");var l=this.g;return(l||c=="file")&&(s.push("//"),(c=this.o)&&s.push(Fn(c,Cu,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(Fn(l,l.charAt(0)=="/"?Lf:Vf,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",Fn(l,Ff)),s.join("")};function He(s){return new bt(s)}function Mr(s,c,l){s.j=l?Mn(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function Fr(s,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);s.s=c}else s.s=null}function Pu(s,c,l){c instanceof Un?(s.i=c,Uf(s.i,s.h)):(l||(c=Fn(c,Mf)),s.i=new Un(c,s.h))}function X(s,c,l){s.i.set(c,l)}function Ur(s){return X(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Mn(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Fn(s,c,l){return typeof s=="string"?(s=encodeURI(s).replace(c,xf),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function xf(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Cu=/[#\/\?@]/g,Vf=/[#\?:]/g,Lf=/[#\?]/g,Mf=/[#\?@]/g,Ff=/#/g;function Un(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function ct(s){s.g||(s.g=new Map,s.h=0,s.i&&Of(s.i,function(c,l){s.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}n=Un.prototype,n.add=function(s,c){ct(this),this.i=null,s=Ht(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(c),this.h+=1,this};function Du(s,c){ct(s),c=Ht(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function Nu(s,c){return ct(s),c=Ht(s,c),s.g.has(c)}n.forEach=function(s,c){ct(this),this.g.forEach(function(l,f){l.forEach(function(w){s.call(c,w,f,this)},this)},this)},n.na=function(){ct(this);let s=Array.from(this.g.values()),c=Array.from(this.g.keys()),l=[];for(let f=0;f<c.length;f++){let w=s[f];for(let A=0;A<w.length;A++)l.push(c[f])}return l},n.V=function(s){ct(this);let c=[];if(typeof s=="string")Nu(this,s)&&(c=c.concat(this.g.get(Ht(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)c=c.concat(s[l])}return c},n.set=function(s,c){return ct(this),this.i=null,s=Ht(this,s),Nu(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=this.V(s),0<s.length?String(s[0]):c):c};function ku(s,c,l){Du(s,c),0<l.length&&(s.i=null,s.g.set(Ht(s,c),x(l)),s.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let s=[],c=Array.from(this.g.keys());for(var l=0;l<c.length;l++){var f=c[l];let A=encodeURIComponent(String(f)),C=this.V(f);for(f=0;f<C.length;f++){var w=A;C[f]!==""&&(w+="="+encodeURIComponent(String(C[f]))),s.push(w)}}return this.i=s.join("&")};function Ht(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function Uf(s,c){c&&!s.j&&(ct(s),s.i=null,s.g.forEach(function(l,f){var w=f.toLowerCase();f!=w&&(Du(this,f),ku(this,w,l))},s)),s.j=c}function qf(s,c){let l=new Vn;if(u.Image){let f=new Image;f.onload=S(ut,l,"TestLoadImage: loaded",!0,c,f),f.onerror=S(ut,l,"TestLoadImage: error",!1,c,f),f.onabort=S(ut,l,"TestLoadImage: abort",!1,c,f),f.ontimeout=S(ut,l,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else c(!1)}function Bf(s,c){let l=new Vn,f=new AbortController,w=setTimeout(()=>{f.abort(),ut(l,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:f.signal}).then(A=>{clearTimeout(w),A.ok?ut(l,"TestPingServer: ok",!0,c):ut(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),ut(l,"TestPingServer: error",!1,c)})}function ut(s,c,l,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(l)}catch{}}function jf(){this.g=new Af}function zf(s,c,l){let f=l||"";try{Su(s,function(w,A){let C=w;d(w)&&(C=Ns(w)),c.push(f+A+"="+encodeURIComponent(C))})}catch(w){throw c.push(f+"type="+encodeURIComponent("_badmap")),w}}function qn(s){this.l=s.Ub||null,this.j=s.eb||!1}N(qn,ks),qn.prototype.g=function(){return new qr(this.l,this.j)},qn.prototype.i=function(s){return function(){return s}}({});function qr(s,c){pe.call(this),this.D=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(qr,pe),n=qr.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=c,this.readyState=1,jn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(c.body=s),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,jn(this)),this.g&&(this.readyState=3,jn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream!="undefined"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ou(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ou(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?Bn(this):jn(this),this.readyState==3&&Ou(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Bn(this))},n.Qa=function(s){this.g&&(this.response=s,Bn(this))},n.ga=function(){this.g&&Bn(this)};function Bn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,jn(s)}n.setRequestHeader=function(s,c){this.u.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let s=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=c.next();return s.join(`\r
`)};function jn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(qr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function xu(s){let c="";return W(s,function(l,f){c+=f,c+=":",c+=l,c+=`\r
`}),c}function js(s,c,l){e:{for(f in l){var f=!1;break e}f=!0}f||(l=xu(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):X(s,c,l))}function Z(s){pe.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Z,pe);var Gf=/^https?$/i,Kf=["POST","PUT"];n=Z.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,c,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vs.g(),this.v=this.o?uu(this.o):uu(Vs),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(A){Vu(this,A);return}if(s=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)l.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(let A of f.keys())l.set(A,f.get(A));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),w=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Kf,c,void 0))||f||w||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[A,C]of l)this.g.setRequestHeader(A,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fu(this),this.u=!0,this.g.send(s),this.u=!1}catch(A){Vu(this,A)}};function Vu(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.m=5,Lu(s),Br(s)}function Lu(s){s.A||(s.A=!0,ve(s,"complete"),ve(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,ve(this,"complete"),ve(this,"abort"),Br(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Br(this,!0)),Z.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Mu(this):this.bb())},n.bb=function(){Mu(this)};function Mu(s){if(s.h&&typeof a!="undefined"&&(!s.v[1]||We(s)!=4||s.Z()!=2)){if(s.u&&We(s)==4)su(s.Ea,0,s);else if(ve(s,"readystatechange"),We(s)==4){s.h=!1;try{let C=s.Z();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var l;if(!(l=c)){var f;if(f=C===0){var w=String(s.D).match(Ru)[1]||null;!w&&u.self&&u.self.location&&(w=u.self.location.protocol.slice(0,-1)),f=!Gf.test(w?w.toLowerCase():"")}l=f}if(l)ve(s,"complete"),ve(s,"success");else{s.m=6;try{var A=2<We(s)?s.g.statusText:""}catch{A=""}s.l=A+" ["+s.Z()+"]",Lu(s)}}finally{Br(s)}}}}function Br(s,c){if(s.g){Fu(s);let l=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,c||ve(s,"ready");try{l.onreadystatechange=f}catch{}}}function Fu(s){s.I&&(u.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function We(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<We(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),Tf(c)}};function Uu(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function $f(s){let c={};s=(s.g&&2<=We(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(z(s[f]))continue;var l=v(s[f]);let w=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();let A=c[w]||[];c[w]=A,A.push(l)}I(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zn(s,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||c}function qu(s){this.Aa=0,this.i=[],this.j=new Vn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zn("baseRetryDelayMs",5e3,s),this.cb=zn("retryDelaySeedMs",1e4,s),this.Wa=zn("forwardChannelMaxRetries",2,s),this.wa=zn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new wu(s&&s.concurrentRequestLimit),this.Da=new jf,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=qu.prototype,n.la=8,n.G=1,n.connect=function(s,c,l,f){we(0),this.W=s,this.H=c||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=Qu(this,null,this.W),zr(this)};function zs(s){if(Bu(s),s.G==3){var c=s.U++,l=He(s.I);if(X(l,"SID",s.K),X(l,"RID",c),X(l,"TYPE","terminate"),Gn(s,l),c=new at(s,s.j,c),c.L=2,c.v=Ur(He(l)),l=!1,u.navigator&&u.navigator.sendBeacon)try{l=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!l&&u.Image&&(new Image().src=c.v,l=!0),l||(c.g=Ju(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Lr(c)}Wu(s)}function jr(s){s.g&&(Ks(s),s.g.cancel(),s.g=null)}function Bu(s){jr(s),s.u&&(u.clearTimeout(s.u),s.u=null),Gr(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function zr(s){if(!Eu(s.h)&&!s.s){s.s=!0;var c=s.Ga;Rn||Zc(),Pn||(Rn(),Pn=!0),Es.add(c,s),s.B=0}}function Hf(s,c){return Tu(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=c.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=xn(b(s.Ga,s,c),Hu(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;let w=new at(this,this.j,s),A=this.o;if(this.S&&(A?(A=m(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(w.H=A,A=null),this.P)e:{for(var c=0,l=0;l<this.i.length;l++){t:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=l;break e}if(c===4096||l===this.i.length-1){c=l+1;break e}}c=1e3}else c=1e3;c=zu(this,w,c),l=He(this.I),X(l,"RID",s),X(l,"CVER",22),this.D&&X(l,"X-HTTP-Session-Id",this.D),Gn(this,l),A&&(this.O?c="headers="+encodeURIComponent(String(xu(A)))+"&"+c:this.m&&js(l,this.m,A)),Bs(this.h,w),this.Ua&&X(l,"TYPE","init"),this.P?(X(l,"$req",c),X(l,"SID","null"),w.T=!0,Ms(w,l,null)):Ms(w,l,c),this.G=2}}else this.G==3&&(s?ju(this,s):this.i.length==0||Eu(this.h)||ju(this))};function ju(s,c){var l;c?l=c.l:l=s.U++;let f=He(s.I);X(f,"SID",s.K),X(f,"RID",l),X(f,"AID",s.T),Gn(s,f),s.m&&s.o&&js(f,s.m,s.o),l=new at(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),c&&(s.i=c.D.concat(s.i)),c=zu(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Bs(s.h,l),Ms(l,f,c)}function Gn(s,c){s.H&&W(s.H,function(l,f){X(c,f,l)}),s.l&&Su({},function(l,f){X(c,f,l)})}function zu(s,c,l){l=Math.min(s.i.length,l);var f=s.l?b(s.l.Na,s.l,s):null;e:{var w=s.i;let A=-1;for(;;){let C=["count="+l];A==-1?0<l?(A=w[0].g,C.push("ofs="+A)):A=0:C.push("ofs="+A);let Q=!0;for(let le=0;le<l;le++){let $=w[le].g,me=w[le].map;if($-=A,0>$)A=Math.max(0,w[le].g-100),Q=!1;else try{zf(me,C,"req"+$+"_")}catch{f&&f(me)}}if(Q){f=C.join("&");break e}}}return s=s.i.splice(0,l),c.D=s,f}function Gu(s){if(!s.g&&!s.u){s.Y=1;var c=s.Fa;Rn||Zc(),Pn||(Rn(),Pn=!0),Es.add(c,s),s.v=0}}function Gs(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=xn(b(s.Fa,s),Hu(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Ku(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=xn(b(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,we(10),jr(this),Ku(this))};function Ks(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function Ku(s){s.g=new at(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var c=He(s.qa);X(c,"RID","rpc"),X(c,"SID",s.K),X(c,"AID",s.T),X(c,"CI",s.F?"0":"1"),!s.F&&s.ja&&X(c,"TO",s.ja),X(c,"TYPE","xmlhttp"),Gn(s,c),s.m&&s.o&&js(c,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=Ur(He(c)),l.m=null,l.P=!0,yu(l,s)}n.Za=function(){this.C!=null&&(this.C=null,jr(this),Gs(this),we(19))};function Gr(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function $u(s,c){var l=null;if(s.g==c){Gr(s),Ks(s),s.g=null;var f=2}else if(qs(s.h,c))l=c.D,Au(s.h,c),f=1;else return;if(s.G!=0){if(c.o)if(f==1){l=c.m?c.m.length:0,c=Date.now()-c.F;var w=s.B;f=Or(),ve(f,new pu(f,l)),zr(s)}else Gu(s);else if(w=c.s,w==3||w==0&&0<c.X||!(f==1&&Hf(s,c)||f==2&&Gs(s)))switch(l&&0<l.length&&(c=s.h,c.i=c.i.concat(l)),w){case 1:St(s,5);break;case 4:St(s,10);break;case 3:St(s,6);break;default:St(s,2)}}}function Hu(s,c){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*c}function St(s,c){if(s.j.info("Error code "+c),c==2){var l=b(s.fb,s),f=s.Xa;let w=!f;f=new bt(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Mr(f,"https"),Ur(f),w?qf(f.toString(),l):Bf(f.toString(),l)}else we(2);s.G=0,s.l&&s.l.sa(c),Wu(s),Bu(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),we(2)):(this.j.info("Failed to ping google.com"),we(1))};function Wu(s){if(s.G=0,s.ka=[],s.l){let c=bu(s.h);(c.length!=0||s.i.length!=0)&&(D(s.ka,c),D(s.ka,s.i),s.h.i.length=0,x(s.i),s.i.length=0),s.l.ra()}}function Qu(s,c,l){var f=l instanceof bt?He(l):new bt(l);if(f.g!="")c&&(f.g=c+"."+f.g),Fr(f,f.s);else{var w=u.location;f=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;var A=new bt(null);f&&Mr(A,f),c&&(A.g=c),w&&Fr(A,w),l&&(A.l=l),f=A}return l=s.D,c=s.ya,l&&c&&X(f,l,c),X(f,"VER",s.la),Gn(s,f),f}function Ju(s,c,l){if(c&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Ca&&!s.pa?new Z(new qn({eb:l})):new Z(s.pa),c.Ha(s.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yu(){}n=Yu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Kr(){}Kr.prototype.g=function(s,c){return new Ae(s,c)};function Ae(s,c){pe.call(this),this.g=new qu(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(s?s["X-WebChannel-Client-Profile"]=c.va:s={"X-WebChannel-Client-Profile":c.va}),this.g.S=s,(s=c&&c.Sb)&&!z(s)&&(this.g.m=s),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!z(c)&&(this.g.D=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new Wt(this)}N(Ae,pe),Ae.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ae.prototype.close=function(){zs(this.g)},Ae.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=Ns(s),s=l);c.i.push(new Df(c.Ya++,s)),c.G==3&&zr(c)},Ae.prototype.N=function(){this.g.l=null,delete this.j,zs(this.g),delete this.g,Ae.aa.N.call(this)};function Xu(s){Os.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){e:{for(let l in c){s=l;break e}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}N(Xu,Os);function Zu(){xs.call(this),this.status=1}N(Zu,xs);function Wt(s){this.g=s}N(Wt,Yu),Wt.prototype.ua=function(){ve(this.g,"a")},Wt.prototype.ta=function(s){ve(this.g,new Xu(s))},Wt.prototype.sa=function(s){ve(this.g,new Zu)},Wt.prototype.ra=function(){ve(this.g,"b")},Kr.prototype.createWebChannel=Kr.prototype.g,Ae.prototype.send=Ae.prototype.o,Ae.prototype.open=Ae.prototype.m,Ae.prototype.close=Ae.prototype.close,na=et.createWebChannelTransport=function(){return new Kr},ta=et.getStatEventTarget=function(){return Or()},ea=et.Event=Tt,ki=et.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},xr.NO_ERROR=0,xr.TIMEOUT=8,xr.HTTP_ERROR=6,ar=et.ErrorCode=xr,mu.COMPLETE="complete",Zo=et.EventType=mu,lu.EventType=kn,kn.OPEN="a",kn.CLOSE="b",kn.ERROR="c",kn.MESSAGE="d",pe.prototype.listen=pe.prototype.K,nn=et.WebChannel=lu,Xo=et.FetchXmlHttpFactory=qn,Z.prototype.listenOnce=Z.prototype.L,Z.prototype.getLastError=Z.prototype.Ka,Z.prototype.getLastErrorCode=Z.prototype.Ba,Z.prototype.getStatus=Z.prototype.Z,Z.prototype.getResponseJson=Z.prototype.Oa,Z.prototype.getResponseText=Z.prototype.oa,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Ha,Yo=et.XhrIo=Z}).apply(typeof Ni!="undefined"?Ni:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var Rh="@firebase/firestore";var ue=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};ue.UNAUTHENTICATED=new ue(null),ue.GOOGLE_CREDENTIALS=new ue("google-credentials-uid"),ue.FIRST_PARTY=new ue("first-party-uid"),ue.MOCK_USER=new ue("mock-user");var Tn="10.12.1";var Ut=new lt("@firebase/firestore");function cr(){return Ut.logLevel}function k(n,...e){if(Ut.logLevel<=B.DEBUG){let t=e.map(Mc);Ut.debug(`Firestore (${Tn}): ${n}`,...t)}}function nt(n,...e){if(Ut.logLevel<=B.ERROR){let t=e.map(Mc);Ut.error(`Firestore (${Tn}): ${n}`,...t)}}function ln(n,...e){if(Ut.logLevel<=B.WARN){let t=e.map(Mc);Ut.warn(`Firestore (${Tn}): ${n}`,...t)}}function Mc(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}function M(n="Unexpected state"){let e=`FIRESTORE (${Tn}) INTERNAL ASSERTION FAILED: `+n;throw nt(e),new Error(e)}function J(n,e){n||M()}function F(n,e){return n}var R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},V=class extends be{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var qe=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var Mi=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},aa=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ue.UNAUTHENTICATED))}shutdown(){}},ca=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}},ua=class{constructor(e){this.t=e,this.currentUser=ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i,i=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve(),o=new qe;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new qe,e.enqueueRetryable(()=>i(this.currentUser))};let a=()=>{let h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},u=h=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){let h=this.t.getImmediate({optional:!0});h?u(h):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new qe)}},0),a()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new Mi(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new ue(e)}},la=class{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=ue.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}},ha=class{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new la(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}},da=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},fa=class{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let r=o=>{o.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);let a=o.token!==this.R;return this.R=o.token,k("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};let i=o=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){let o=this.A.getImmediate({optional:!0});o?i(o):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(J(typeof t.token=="string"),this.R=t.token,new da(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};function m_(n){let e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}var Fi=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let i=m_(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%e.length))}return r}};function H(n,e){return n<e?-1:n>e?1:0}function hn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}var de=class n{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new V(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return n.fromMillis(Date.now())}static fromDate(e){return n.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new n(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};var U=class n{constructor(e){this.timestamp=e}static fromTimestamp(e){return new n(e)}static min(){return new n(new de(0,0))}static max(){return new n(new de(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var Ui=class n{constructor(e,t,r){t===void 0?t=0:t>e.length&&M(),r===void 0?r=e.length-t:r>e.length-t&&M(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return n.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let i=0;i<r;i++){let o=e.get(i),a=t.get(i);if(o<a)return-1;if(o>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}},te=class n extends Ui{construct(e,t,r){return new n(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new V(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new n(t)}static emptyPath(){return new n([])}},g_=/^[_a-zA-Z][_a-zA-Z0-9]*$/,Se=class n extends Ui{construct(e,t,r){return new n(e,t,r)}static isValidIdentifier(e){return g_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new n(["__name__"])}static fromServerFormat(e){let t=[],r="",i=0,o=()=>{if(r.length===0)throw new V(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},a=!1;for(;i<e.length;){let u=e[i];if(u==="\\"){if(i+1===e.length)throw new V(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new V(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(o(),i++)}if(o(),a)throw new V(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new n(t)}static emptyPath(){return new n([])}};var L=class n{constructor(e){this.path=e}static fromPath(e){return new n(te.fromString(e))}static fromName(e){return new n(te.fromString(e).popFirst(5))}static empty(){return new n(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return te.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new n(new te(e.slice()))}};var pa=class{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}};pa.UNKNOWN_ID=-1;function __(n,e){let t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=U.fromTimestamp(r===1e9?new de(t+1,0):new de(t,r));return new qt(i,L.empty(),e)}function y_(n){return new qt(n.readTime,n.key,-1)}var qt=class n{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new n(U.min(),L.empty(),-1)}static max(){return new n(U.max(),L.empty(),-1)}};function I_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:H(n.largestBatchId,e.largestBatchId))}var v_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",ma=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function Sr(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==v_)throw n;k("LocalStore","Unexpectedly lost primary lease")}var P=class n{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof n?t:n.resolve(t)}catch(t){return n.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):n.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):n.reject(t)}static resolve(e){return new n((t,r)=>{t(e)})}static reject(e){return new n((t,r)=>{r(e)})}static waitFor(e){return new n((t,r)=>{let i=0,o=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++o,a&&o===i&&t()},h=>r(h))}),a=!0,o===i&&t()})}static or(e){let t=n.resolve(!1);for(let r of e)t=t.next(i=>i?n.resolve(i):r());return t}static forEach(e,t){let r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new n((r,i)=>{let o=e.length,a=new Array(o),u=0;for(let h=0;h<o;h++){let d=h;t(e[d]).next(p=>{a[d]=p,++u,u===o&&r(a)},p=>i(p))}})}static doWhile(e,t){return new n((r,i)=>{let o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}};function w_(n){let e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Rr(n){return n.name==="IndexedDbTransactionError"}var pr=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}};pr.oe=-1;function ms(n){return n==null}function mr(n){return n===0&&1/n==-1/0}function E_(n){return typeof n=="number"&&Number.isInteger(n)&&!mr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}var T_=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ew=[...T_,"documentOverlays"],A_=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],b_=A_,tw=[...b_,"indexConfiguration","indexState","indexEntries"];function Ph(n){let e=0;for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function An(n,e){for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function nd(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}var ne=class n{constructor(e,t){this.comparator=e,this.root=t||Be.EMPTY}insert(e,t){return new n(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new an(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new an(this.root,e,this.comparator,!1)}getReverseIterator(){return new an(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new an(this.root,e,this.comparator,!0)}},an=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Be=class n{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r!=null?r:n.RED,this.left=i!=null?i:n.EMPTY,this.right=o!=null?o:n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new n(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,i!=null?i:this.left,o!=null?o:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this,o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return n.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();let e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}};Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(e,t,r,i,o){return this}insert(e,t,r){return new Be(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var ye=class n{constructor(e){this.comparator=e,this.data=new ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new qi(this.data.getIterator())}getIteratorFrom(e){return new qi(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new n(this.comparator);return t.data=e,t}},qi=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var Ue=class n{constructor(e){this.fields=e,e.sort(Se.comparator)}static empty(){return new n([])}unionWith(e){let t=new ye(Se.comparator);for(let r of this.fields)t=t.add(r);for(let r of e)t=t.add(r);return new n(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return hn(this.fields,e.fields,(t,r)=>t.isEqual(r))}};var Bi=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var Ee=class n{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(i){try{return atob(i)}catch(o){throw typeof DOMException!="undefined"&&o instanceof DOMException?new Bi("Invalid base64 string: "+o):o}}(e);return new n(t)}static fromUint8Array(e){let t=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};Ee.EMPTY_BYTE_STRING=new Ee("");var S_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rt(n){if(J(!!n),typeof n=="string"){let e=0,t=S_.exec(n);if(J(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}let r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ee(n.seconds),nanos:ee(n.nanos)}}function ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function It(n){return typeof n=="string"?Ee.fromBase64String(n):Ee.fromUint8Array(n)}function Fc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Uc(n){let e=n.mapValue.fields.__previous_value__;return Fc(e)?Uc(e):e}function gr(n){let e=rt(n.mapValue.fields.__local_write_time__.timestampValue);return new de(e.seconds,e.nanos)}var ga=class{constructor(e,t,r,i,o,a,u,h,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d}},ji=class n{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new n("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof n&&e.projectId===this.projectId&&e.database===this.database}};var Oi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Bt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Fc(n)?4:rd(n)?9007199254740991:10:M()}function Ge(n,e){if(n===e)return!0;let t=Bt(n);if(t!==Bt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return gr(n).isEqual(gr(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;let a=rt(i.timestampValue),u=rt(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return It(i.bytesValue).isEqual(It(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return ee(i.geoPointValue.latitude)===ee(o.geoPointValue.latitude)&&ee(i.geoPointValue.longitude)===ee(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return ee(i.integerValue)===ee(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){let a=ee(i.doubleValue),u=ee(o.doubleValue);return a===u?mr(a)===mr(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return hn(n.arrayValue.values||[],e.arrayValue.values||[],Ge);case 10:return function(i,o){let a=i.mapValue.fields||{},u=o.mapValue.fields||{};if(Ph(a)!==Ph(u))return!1;for(let h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!Ge(a[h],u[h])))return!1;return!0}(n,e);default:return M()}}function _r(n,e){return(n.values||[]).find(t=>Ge(t,e))!==void 0}function dn(n,e){if(n===e)return 0;let t=Bt(n),r=Bt(e);if(t!==r)return H(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,e.booleanValue);case 2:return function(o,a){let u=ee(o.integerValue||o.doubleValue),h=ee(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,e);case 3:return Ch(n.timestampValue,e.timestampValue);case 4:return Ch(gr(n),gr(e));case 5:return H(n.stringValue,e.stringValue);case 6:return function(o,a){let u=It(o),h=It(a);return u.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){let u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){let p=H(u[d],h[d]);if(p!==0)return p}return H(u.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){let u=H(ee(o.latitude),ee(a.latitude));return u!==0?u:H(ee(o.longitude),ee(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(o,a){let u=o.values||[],h=a.values||[];for(let d=0;d<u.length&&d<h.length;++d){let p=dn(u[d],h[d]);if(p)return p}return H(u.length,h.length)}(n.arrayValue,e.arrayValue);case 10:return function(o,a){if(o===Oi.mapValue&&a===Oi.mapValue)return 0;if(o===Oi.mapValue)return 1;if(a===Oi.mapValue)return-1;let u=o.fields||{},h=Object.keys(u),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let E=0;E<h.length&&E<p.length;++E){let b=H(h[E],p[E]);if(b!==0)return b;let S=dn(u[h[E]],d[p[E]]);if(S!==0)return S}return H(h.length,p.length)}(n.mapValue,e.mapValue);default:throw M()}}function Ch(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return H(n,e);let t=rt(n),r=rt(e),i=H(t.seconds,r.seconds);return i!==0?i:H(t.nanos,r.nanos)}function fn(n){return _a(n)}function _a(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){let r=rt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return It(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return L.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(let o of t.values||[])i?i=!1:r+=",",r+=_a(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){let r=Object.keys(t.fields||{}).sort(),i="{",o=!0;for(let a of r)o?o=!1:i+=",",i+=`${a}:${_a(t.fields[a])}`;return i+"}"}(n.mapValue):M()}function ya(n){return!!n&&"integerValue"in n}function qc(n){return!!n&&"arrayValue"in n}function Dh(n){return!!n&&"nullValue"in n}function Nh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Vi(n){return!!n&&"mapValue"in n}function lr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let e={mapValue:{fields:{}}};return An(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=lr(r)),e}if(n.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=lr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function rd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}var ke=class n{constructor(e){this.value=e}static empty(){return new n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Vi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=lr(t)}setAll(e){let t=Se.emptyPath(),r={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){let h=this.getFieldsMap(t);this.applyChanges(h,r,i),r={},i=[],t=u.popLast()}a?r[u.lastSegment()]=lr(a):i.push(u.lastSegment())});let o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){let t=this.field(e.popLast());Vi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ge(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Vi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){An(t,(i,o)=>e[i]=o);for(let i of r)delete e[i]}clone(){return new n(lr(this.value))}};function id(n){let e=[];return An(n.fields,(t,r)=>{let i=new Se([t]);if(Vi(r)){let o=id(r.mapValue).fields;if(o.length===0)e.push(i);else for(let a of o)e.push(i.child(a))}else e.push(i)}),new Ue(e)}var Oe=class n{constructor(e,t,r,i,o,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(e){return new n(e,0,U.min(),U.min(),U.min(),ke.empty(),0)}static newFoundDocument(e,t,r,i){return new n(e,1,t,U.min(),r,i,0)}static newNoDocument(e,t){return new n(e,2,t,U.min(),U.min(),ke.empty(),0)}static newUnknownDocument(e,t){return new n(e,3,t,U.min(),U.min(),ke.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var pn=class{constructor(e,t){this.position=e,this.inclusive=t}};function kh(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){let o=e[i],a=n.position[i];if(o.field.isKeyField()?r=L.comparator(L.fromName(a.referenceValue),t.key):r=dn(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Oh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ge(n.position[t],e.position[t]))return!1;return!0}var mn=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function R_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}var zi=class{},ae=class n extends zi{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new va(e,t,r):t==="array-contains"?new Ta(e,r):t==="in"?new Aa(e,r):t==="not-in"?new ba(e,r):t==="array-contains-any"?new Sa(e,r):new n(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new wa(e,r):new Ea(e,r)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(dn(t,this.value)):t!==null&&Bt(this.value)===Bt(t)&&this.matchesComparison(dn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},Ke=class n extends zi{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new n(e,t)}matches(e){return sd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}};function sd(n){return n.op==="and"}function od(n){return P_(n)&&sd(n)}function P_(n){for(let e of n.filters)if(e instanceof Ke)return!1;return!0}function Ia(n){if(n instanceof ae)return n.field.canonicalString()+n.op.toString()+fn(n.value);if(od(n))return n.filters.map(e=>Ia(e)).join(",");{let e=n.filters.map(t=>Ia(t)).join(",");return`${n.op}(${e})`}}function ad(n,e){return n instanceof ae?function(r,i){return i instanceof ae&&r.op===i.op&&r.field.isEqual(i.field)&&Ge(r.value,i.value)}(n,e):n instanceof Ke?function(r,i){return i instanceof Ke&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,u)=>o&&ad(a,i.filters[u]),!0):!1}(n,e):void M()}function cd(n){return n instanceof ae?function(t){return`${t.field.canonicalString()} ${t.op} ${fn(t.value)}`}(n):n instanceof Ke?function(t){return t.op.toString()+" {"+t.getFilters().map(cd).join(" ,")+"}"}(n):"Filter"}var va=class extends ae{constructor(e,t,r){super(e,t,r),this.key=L.fromName(r.referenceValue)}matches(e){let t=L.comparator(e.key,this.key);return this.matchesComparison(t)}},wa=class extends ae{constructor(e,t){super(e,"in",t),this.keys=ud("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},Ea=class extends ae{constructor(e,t){super(e,"not-in",t),this.keys=ud("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function ud(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>L.fromName(r.referenceValue))}var Ta=class extends ae{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return qc(t)&&_r(t.arrayValue,this.value)}},Aa=class extends ae{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&_r(this.value.arrayValue,t)}},ba=class extends ae{constructor(e,t){super(e,"not-in",t)}matches(e){if(_r(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&!_r(this.value.arrayValue,t)}},Sa=class extends ae{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!qc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>_r(this.value.arrayValue,r))}};var Ra=class{constructor(e,t=null,r=[],i=[],o=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=u,this.ue=null}};function xh(n,e=null,t=[],r=[],i=null,o=null,a=null){return new Ra(n,e,t,r,i,o,a)}function Bc(n){let e=F(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ia(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),ms(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>fn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>fn(r)).join(",")),e.ue=t}return e.ue}function jc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!R_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ad(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Oh(n.startAt,e.startAt)&&Oh(n.endAt,e.endAt)}function Pa(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}var gn=class{constructor(e,t=null,r=[],i=[],o=null,a="F",u=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}};function C_(n,e,t,r,i,o,a,u){return new gn(n,e,t,r,i,o,a,u)}function gs(n){return new gn(n)}function Vh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function D_(n){return n.collectionGroup!==null}function hr(n){let e=F(n);if(e.ce===null){e.ce=[];let t=new Set;for(let o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ye(Se.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new mn(o,r))}),t.has(Se.keyField().canonicalString())||e.ce.push(new mn(Se.keyField(),r))}return e.ce}function je(n){let e=F(n);return e.le||(e.le=N_(e,hr(n))),e.le}function N_(n,e){if(n.limitType==="F")return xh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{let o=i.dir==="desc"?"asc":"desc";return new mn(i.field,o)});let t=n.endAt?new pn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new pn(n.startAt.position,n.startAt.inclusive):null;return xh(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ca(n,e,t){return new gn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function _s(n,e){return jc(je(n),je(e))&&n.limitType===e.limitType}function ld(n){return`${Bc(je(n))}|lt:${n.limitType}`}function rn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>cd(i)).join(", ")}]`),ms(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>fn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>fn(i)).join(",")),`Target(${r})`}(je(n))}; limitType=${n.limitType})`}function ys(n,e){return e.isFoundDocument()&&function(r,i){let o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):L.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(let o of hr(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(let o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,u,h){let d=kh(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,hr(r),i)||r.endAt&&!function(a,u,h){let d=kh(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,hr(r),i))}(n,e)}function k_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function hd(n){return(e,t)=>{let r=!1;for(let i of hr(n)){let o=O_(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function O_(n,e,t){let r=n.field.isKeyField()?L.comparator(e.key,t.key):function(o,a,u){let h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?dn(h,d):M()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}var vt=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(let[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){let r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){An(this.inner,(t,r)=>{for(let[i,o]of r)e(i,o)})}isEmpty(){return nd(this.inner)}size(){return this.innerSize}};var x_=new ne(L.comparator);function it(){return x_}var dd=new ne(L.comparator);function ur(...n){let e=dd;for(let t of n)e=e.insert(t.key,t);return e}function fd(n){let e=dd;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Lt(){return dr()}function pd(){return dr()}function dr(){return new vt(n=>n.toString(),(n,e)=>n.isEqual(e))}var V_=new ne(L.comparator),L_=new ye(L.comparator);function j(...n){let e=L_;for(let t of n)e=e.add(t);return e}var M_=new ye(H);function F_(){return M_}function md(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mr(e)?"-0":e}}function gd(n){return{integerValue:""+n}}function U_(n,e){return E_(e)?gd(e):md(n,e)}var _n=class{constructor(){this._=void 0}};function q_(n,e,t){return n instanceof yn?function(i,o){let a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Fc(o)&&(o=Uc(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(t,e):n instanceof jt?yd(n,e):n instanceof zt?Id(n,e):function(i,o){let a=_d(i,o),u=Lh(a)+Lh(i.Pe);return ya(a)&&ya(i.Pe)?gd(u):md(i.serializer,u)}(n,e)}function B_(n,e,t){return n instanceof jt?yd(n,e):n instanceof zt?Id(n,e):t}function _d(n,e){return n instanceof In?function(r){return ya(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}var yn=class extends _n{},jt=class extends _n{constructor(e){super(),this.elements=e}};function yd(n,e){let t=vd(e);for(let r of n.elements)t.some(i=>Ge(i,r))||t.push(r);return{arrayValue:{values:t}}}var zt=class extends _n{constructor(e){super(),this.elements=e}};function Id(n,e){let t=vd(e);for(let r of n.elements)t=t.filter(i=>!Ge(i,r));return{arrayValue:{values:t}}}var In=class extends _n{constructor(e,t){super(),this.serializer=e,this.Pe=t}};function Lh(n){return ee(n.integerValue||n.doubleValue)}function vd(n){return qc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function j_(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof jt&&i instanceof jt||r instanceof zt&&i instanceof zt?hn(r.elements,i.elements,Ge):r instanceof In&&i instanceof In?Ge(r.Pe,i.Pe):r instanceof yn&&i instanceof yn}(n.transform,e.transform)}var Da=class{constructor(e,t){this.version=e,this.transformResults=t}},_t=class n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n}static exists(e){return new n(void 0,e)}static updateTime(e){return new n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function Li(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}var vn=class{};function wd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new yr(n.key,_t.none()):new Gt(n.key,n.data,_t.none());{let t=n.data,r=ke.empty(),i=new ye(Se.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new st(n.key,r,new Ue(i.toArray()),_t.none())}}function z_(n,e,t){n instanceof Gt?function(i,o,a){let u=i.value.clone(),h=Fh(i.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof st?function(i,o,a){if(!Li(i.precondition,o))return void o.convertToUnknownDocument(a.version);let u=Fh(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Ed(i)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function fr(n,e,t,r){return n instanceof Gt?function(o,a,u,h){if(!Li(o.precondition,a))return u;let d=o.value.clone(),p=Uh(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof st?function(o,a,u,h){if(!Li(o.precondition,a))return u;let d=Uh(o.fieldTransforms,h,a),p=a.data;return p.setAll(Ed(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(E=>E.field))}(n,e,t,r):function(o,a,u){return Li(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function G_(n,e){let t=null;for(let r of n.fieldTransforms){let i=e.data.field(r.field),o=_d(r.transform,i||null);o!=null&&(t===null&&(t=ke.empty()),t.set(r.field,o))}return t||null}function Mh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&hn(r,i,(o,a)=>j_(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}var Gt=class extends vn{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},st=class extends vn{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}};function Ed(n){let e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let r=n.data.field(t);e.set(t,r)}}),e}function Fh(n,e,t){let r=new Map;J(n.length===t.length);for(let i=0;i<t.length;i++){let o=n[i],a=o.transform,u=e.data.field(o.field);r.set(o.field,B_(a,u,t[i]))}return r}function Uh(n,e,t){let r=new Map;for(let i of n){let o=i.transform,a=t.data.field(i.field);r.set(i.field,q_(o,a,e))}return r}var yr=class extends vn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},Na=class extends vn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var ka=class{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){let o=this.mutations[i];o.key.isEqual(e.key)&&z_(o,e,r[i])}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=fr(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=fr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=pd();return this.mutations.forEach(i=>{let o=e.get(i.key),a=o.overlayedDocument,u=this.applyToLocalView(a,o.mutatedFields);u=t.has(i.key)?null:u;let h=wd(a,u);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),j())}isEqual(e){return this.batchId===e.batchId&&hn(this.mutations,e.mutations,(t,r)=>Mh(t,r))&&hn(this.baseMutations,e.baseMutations,(t,r)=>Mh(t,r))}},Oa=class n{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){J(e.mutations.length===r.length);let i=function(){return V_}(),o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new n(e,t,r,i)}};var xa=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var Va=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var ie,K;function K_(n){switch(n){default:return M();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function Td(n){if(n===void 0)return nt("GRPC error has no .code"),R.UNKNOWN;switch(n){case ie.OK:return R.OK;case ie.CANCELLED:return R.CANCELLED;case ie.UNKNOWN:return R.UNKNOWN;case ie.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case ie.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case ie.INTERNAL:return R.INTERNAL;case ie.UNAVAILABLE:return R.UNAVAILABLE;case ie.UNAUTHENTICATED:return R.UNAUTHENTICATED;case ie.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case ie.NOT_FOUND:return R.NOT_FOUND;case ie.ALREADY_EXISTS:return R.ALREADY_EXISTS;case ie.PERMISSION_DENIED:return R.PERMISSION_DENIED;case ie.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case ie.ABORTED:return R.ABORTED;case ie.OUT_OF_RANGE:return R.OUT_OF_RANGE;case ie.UNIMPLEMENTED:return R.UNIMPLEMENTED;case ie.DATA_LOSS:return R.DATA_LOSS;default:return M()}}(K=ie||(ie={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";var qh=null;function $_(){return new TextEncoder}var H_=new gt([4294967295,4294967295],0);function Bh(n){let e=$_().encode(n),t=new Jo;return t.update(e),new Uint8Array(t.digest())}function jh(n){let e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new gt([t,r],0),new gt([i,o],0)]}var La=class n{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Mt(`Invalid padding: ${t}`);if(r<0)throw new Mt(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Mt(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Mt(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=gt.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(gt.fromNumber(r)));return i.compare(H_)===1&&(i=new gt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;let t=Bh(e),[r,i]=jh(t);for(let o=0;o<this.hashCount;o++){let a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(e,t,r){let i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new n(o,i,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.Ie===0)return;let t=Bh(e),[r,i]=jh(t);for(let o=0;o<this.hashCount;o++){let a=this.Ee(r,i,o);this.Ae(a)}}Ae(e){let t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}},Mt=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var Gi=class n{constructor(e,t,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let i=new Map;return i.set(e,Ir.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new n(U.min(),i,new ne(H),it(),j())}},Ir=class n{constructor(e,t,r,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new n(r,t,j(),j(),j())}};var cn=class{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}},Ki=class{constructor(e,t){this.targetId=e,this.me=t}},$i=class{constructor(e,t,r=Ee.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}},Hi=class{constructor(){this.fe=0,this.ge=Gh(),this.pe=Ee.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=j(),t=j(),r=j();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:M()}}),new Ir(this.pe,this.ye,e,t,r)}ve(){this.we=!1,this.ge=Gh()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,J(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}},Ma=class{constructor(e){this.Le=e,this.Be=new Map,this.ke=it(),this.qe=zh(),this.Qe=new ne(H)}Ke(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{let r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:M()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){let t=e.targetId,r=e.me.count,i=this.Je(t);if(i){let o=i.target;if(Pa(o))if(r===0){let a=new L(o.path);this.Ue(t,a,Oe.newNoDocument(a,U.min()))}else J(r===1);else{let a=this.Ye(t);if(a!==r){let u=this.Ze(e),h=u?this.Xe(u,e,a):1;if(h!==0){this.je(t);let d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}qh==null||qh.et(function(p,E,b,S,N){var x,D,q,z,G,Y;let Ie={localCacheCount:p,existenceFilterCount:E.count,databaseId:b.database,projectId:b.projectId},W=E.unchangedNames;return W&&(Ie.bloomFilter={applied:N===0,hashCount:(x=W==null?void 0:W.hashCount)!==null&&x!==void 0?x:0,bitmapLength:(z=(q=(D=W==null?void 0:W.bits)===null||D===void 0?void 0:D.bitmap)===null||q===void 0?void 0:q.length)!==null&&z!==void 0?z:0,padding:(Y=(G=W==null?void 0:W.bits)===null||G===void 0?void 0:G.padding)!==null&&Y!==void 0?Y:0,mightContain:I=>{var m;return(m=S==null?void 0:S.mightContain(I))!==null&&m!==void 0&&m}}),Ie}(a,e.me,this.Le.tt(),u,h))}}}}Ze(e){let t=e.me.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=t,a,u;try{a=It(r).toUint8Array()}catch(h){if(h instanceof Bi)return ln("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new La(a,i,o)}catch(h){return ln(h instanceof Mt?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.Ie===0?null:u}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){let r=this.Le.getRemoteKeysForTarget(t),i=0;return r.forEach(o=>{let a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(u)||(this.Ue(t,o,null),i++)}),i}rt(e){let t=new Map;this.Be.forEach((o,a)=>{let u=this.Je(a);if(u){if(o.current&&Pa(u.target)){let h=new L(u.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,Oe.newNoDocument(h,e))}o.be&&(t.set(a,o.Ce()),o.ve())}});let r=j();this.qe.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{let d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(e));let i=new Gi(e,t,this.Qe,this.ke,r);return this.ke=it(),this.qe=zh(),this.Qe=new ne(H),i}$e(e,t){if(!this.ze(e))return;let r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;let i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){let t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Hi,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ye(H),this.qe=this.qe.insert(e,t)),t}ze(e){let t=this.Je(e)!==null;return t||k("WatchChangeAggregator","Detected inactive target",e),t}Je(e){let t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Hi),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}};function zh(){return new ne(L.comparator)}function Gh(){return new ne(L.comparator)}var W_={asc:"ASCENDING",desc:"DESCENDING"},Q_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},J_={and:"AND",or:"OR"},Fa=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function Ua(n,e){return n.useProto3Json||ms(e)?e:{value:e}}function Wi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ad(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Y_(n,e){return Wi(n,e.toTimestamp())}function ze(n){return J(!!n),U.fromTimestamp(function(t){let r=rt(t);return new de(r.seconds,r.nanos)}(n))}function zc(n,e){return qa(n,e).canonicalString()}function qa(n,e){let t=function(i){return new te(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function bd(n){let e=te.fromString(n);return J(Dd(e)),e}function Ba(n,e){return zc(n.databaseId,e.path)}function ra(n,e){let t=bd(e);if(t.get(1)!==n.databaseId.projectId)throw new V(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(Rd(t))}function Sd(n,e){return zc(n.databaseId,e)}function X_(n){let e=bd(n);return e.length===4?te.emptyPath():Rd(e)}function ja(n){return new te(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Rd(n){return J(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Kh(n,e,t){return{name:Ba(n,e),fields:t.value.mapValue.fields}}function Z_(n,e){let t;if("targetChange"in e){e.targetChange;let r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(J(p===void 0||typeof p=="string"),Ee.fromBase64String(p||"")):(J(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Ee.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){let p=d.code===void 0?R.UNKNOWN:Td(d.code);return new V(p,d.message||"")}(a);t=new $i(r,i,o,u||null)}else if("documentChange"in e){e.documentChange;let r=e.documentChange;r.document,r.document.name,r.document.updateTime;let i=ra(n,r.document.name),o=ze(r.document.updateTime),a=r.document.createTime?ze(r.document.createTime):U.min(),u=new ke({mapValue:{fields:r.document.fields}}),h=Oe.newFoundDocument(i,o,a,u),d=r.targetIds||[],p=r.removedTargetIds||[];t=new cn(d,p,h.key,h)}else if("documentDelete"in e){e.documentDelete;let r=e.documentDelete;r.document;let i=ra(n,r.document),o=r.readTime?ze(r.readTime):U.min(),a=Oe.newNoDocument(i,o),u=r.removedTargetIds||[];t=new cn([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;let r=e.documentRemove;r.document;let i=ra(n,r.document),o=r.removedTargetIds||[];t=new cn([],o,i,null)}else{if(!("filter"in e))return M();{e.filter;let r=e.filter;r.targetId;let{count:i=0,unchangedNames:o}=r,a=new Va(i,o),u=r.targetId;t=new Ki(u,a)}}return t}function ey(n,e){let t;if(e instanceof Gt)t={update:Kh(n,e.key,e.value)};else if(e instanceof yr)t={delete:Ba(n,e.key)};else if(e instanceof st)t={update:Kh(n,e.key,e.data),updateMask:uy(e.fieldMask)};else{if(!(e instanceof Na))return M();t={verify:Ba(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){let u=a.transform;if(u instanceof yn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof jt)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof zt)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof In)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw M()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Y_(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M()}(n,e.precondition)),t}function ty(n,e){return n&&n.length>0?(J(e!==void 0),n.map(t=>function(i,o){let a=i.updateTime?ze(i.updateTime):ze(o);return a.isEqual(U.min())&&(a=ze(o)),new Da(a,i.transformResults||[])}(t,e))):[]}function ny(n,e){return{documents:[Sd(n,e.path)]}}function ry(n,e){let t={structuredQuery:{}},r=e.path,i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Sd(n,i);let o=function(d){if(d.length!==0)return Cd(Ke.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);let a=function(d){if(d.length!==0)return d.map(p=>function(b){return{field:sn(b.field),direction:oy(b.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);let u=Ua(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:i}}function iy(n){let e=X_(n.parent),t=n.structuredQuery,r=t.from?t.from.length:0,i=null;if(r>0){J(r===1);let p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=function(E){let b=Pd(E);return b instanceof Ke&&od(b)?b.getFilters():[b]}(t.where));let a=[];t.orderBy&&(a=function(E){return E.map(b=>function(N){return new mn(on(N.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(b))}(t.orderBy));let u=null;t.limit&&(u=function(E){let b;return b=typeof E=="object"?E.value:E,ms(b)?null:b}(t.limit));let h=null;t.startAt&&(h=function(E){let b=!!E.before,S=E.values||[];return new pn(S,b)}(t.startAt));let d=null;return t.endAt&&(d=function(E){let b=!E.before,S=E.values||[];return new pn(S,b)}(t.endAt)),C_(e,i,a,o,u,"F",h,d)}function sy(n,e){let t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Pd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let r=on(t.unaryFilter.field);return ae.create(r,"==",{doubleValue:NaN});case"IS_NULL":let i=on(t.unaryFilter.field);return ae.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let o=on(t.unaryFilter.field);return ae.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let a=on(t.unaryFilter.field);return ae.create(a,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(n):n.fieldFilter!==void 0?function(t){return ae.create(on(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ke.create(t.compositeFilter.filters.map(r=>Pd(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M()}}(t.compositeFilter.op))}(n):M()}function oy(n){return W_[n]}function ay(n){return Q_[n]}function cy(n){return J_[n]}function sn(n){return{fieldPath:n.canonicalString()}}function on(n){return Se.fromServerFormat(n.fieldPath)}function Cd(n){return n instanceof ae?function(t){if(t.op==="=="){if(Nh(t.value))return{unaryFilter:{field:sn(t.field),op:"IS_NAN"}};if(Dh(t.value))return{unaryFilter:{field:sn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Nh(t.value))return{unaryFilter:{field:sn(t.field),op:"IS_NOT_NAN"}};if(Dh(t.value))return{unaryFilter:{field:sn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sn(t.field),op:ay(t.op),value:t.value}}}(n):n instanceof Ke?function(t){let r=t.getFilters().map(i=>Cd(i));return r.length===1?r[0]:{compositeFilter:{op:cy(t.op),filters:r}}}(n):M()}function uy(n){let e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Dd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}var vr=class n{constructor(e,t,r,i,o=U.min(),a=U.min(),u=Ee.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(e){return new n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var za=class{constructor(e){this.ct=e}};function ly(n){let e=iy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ca(e,e.limit,"L"):e}var Qi=class{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(ee(e.integerValue));else if("doubleValue"in e){let r=ee(e.doubleValue);isNaN(r)?this.Et(t,13):(this.Et(t,15),mr(r)?t.dt(0):t.dt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Et(t,20),typeof r=="string"&&(r=rt(r)),t.At(`${r.seconds||""}`),t.dt(r.nanos||0)}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(It(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Et(t,45),t.dt(r.latitude||0),t.dt(r.longitude||0)}else"mapValue"in e?rd(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):M()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){let r=e.fields||{};this.Et(t,55);for(let i of Object.keys(r))this.Rt(i,t),this.It(r[i],t)}wt(e,t){let r=e.values||[];this.Et(t,50);for(let i of r)this.It(i,t)}gt(e,t){this.Et(t,37),L.fromName(e).path.forEach(r=>{this.Et(t,60),this.St(r,t)})}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}};Qi.bt=new Qi;var Ga=class{constructor(){this._n=new Ka}addToCollectionParentIndex(e,t){return this._n.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(qt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(qt.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}},Ka=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ye(te.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ye(te.comparator)).toArray()}};var rw=new Uint8Array(0);var Fe=class n{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new n(e,n.DEFAULT_COLLECTION_PERCENTILE,n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}};Fe.DEFAULT_COLLECTION_PERCENTILE=10,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Fe.DEFAULT=new Fe(41943040,Fe.DEFAULT_COLLECTION_PERCENTILE,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Fe.DISABLED=new Fe(-1,0,0);var wr=class n{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new n(0)}static Ln(){return new n(-1)}};var $a=class{constructor(){this.changes=new vt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Oe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var Ha=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var Wa=class{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&fr(r.mutation,i,Ue.empty(),de.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,j()).next(()=>r))}getLocalViewOfDocuments(e,t,r=j()){let i=Lt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let a=ur();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){let r=Lt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,j()))}populateOverlays(e,t,r){let i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,i){let o=it(),a=dr(),u=function(){return dr()}();return t.forEach((h,d)=>{let p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof st)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),fr(p.mutation,d,p.mutation.getFieldMask(),de.now())):a.set(d.key,Ue.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var E;return u.set(d,new Ha(p,(E=a.get(d))!==null&&E!==void 0?E:null))}),u))}recalculateAndSaveOverlays(e,t){let r=dr(),i=new ne((a,u)=>a-u),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(let u of a)u.keys().forEach(h=>{let d=t.get(h);if(d===null)return;let p=r.get(h)||Ue.empty();p=u.applyToLocalView(d,p),r.set(h,p);let E=(i.get(u.batchId)||j()).add(h);i=i.insert(u.batchId,E)})}).next(()=>{let a=[],u=i.getReverseIterator();for(;u.hasNext();){let h=u.getNext(),d=h.key,p=h.value,E=pd();p.forEach(b=>{if(!o.has(b)){let S=wd(t.get(b),r.get(b));S!==null&&E.set(b,S),o=o.add(b)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,E))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return L.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):D_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{let a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):P.resolve(Lt()),u=-1,h=o;return a.next(d=>P.forEach(d,(p,E)=>(u<E.largestBatchId&&(u=E.largestBatchId),o.get(p)?P.resolve():this.remoteDocumentCache.getEntry(e,p).next(b=>{h=h.insert(p,b)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,j())).next(p=>({batchId:u,changes:fd(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(r=>{let i=ur();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){let o=t.collectionGroup,a=ur();return this.indexManager.getCollectionParents(e,o).next(u=>P.forEach(u,h=>{let d=function(E,b){return new gn(b,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((E,b)=>{a=a.insert(E,b)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(a=>{o.forEach((h,d)=>{let p=d.getKey();a.get(p)===null&&(a=a.insert(p,Oe.newInvalidDocument(p)))});let u=ur();return a.forEach((h,d)=>{let p=o.get(h);p!==void 0&&fr(p.mutation,d,Ue.empty(),de.now()),ys(t,d)&&(u=u.insert(h,d))}),u})}};var Qa=class{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return P.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:ze(i.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(i){return{name:i.name,query:ly(i.bundledQuery),readTime:ze(i.readTime)}}(t)),P.resolve()}};var Ja=class{constructor(){this.overlays=new ne(L.comparator),this.hr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){let r=Lt();return P.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.ht(e,t,o)}),P.resolve()}removeOverlaysForBatchId(e,t,r){let i=this.hr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){let i=Lt(),o=t.length+1,a=new L(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){let h=u.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return P.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new ne((d,p)=>d-p),a=this.overlays.getIterator();for(;a.hasNext();){let d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=Lt(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}let u=Lt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=i)););return P.resolve(u)}ht(e,t,r){let i=this.overlays.get(r.key);if(i!==null){let a=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new xa(t,r));let o=this.hr.get(t);o===void 0&&(o=j(),this.hr.set(t,o)),this.hr.set(t,o.add(r.key))}};var Er=class{constructor(){this.Pr=new ye(se.Ir),this.Tr=new ye(se.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){let r=new se(e,t);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ar(new se(e,t))}Rr(e,t){e.forEach(r=>this.removeReference(r,t))}Vr(e){let t=new L(new te([])),r=new se(t,e),i=new se(t,e+1),o=[];return this.Tr.forEachInRange([r,i],a=>{this.Ar(a),o.push(a.key)}),o}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){let t=new L(new te([])),r=new se(t,e),i=new se(t,e+1),o=j();return this.Tr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){let t=new se(e,0),r=this.Pr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}},se=class{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return L.comparator(e.key,t.key)||H(e.pr,t.pr)}static Er(e,t){return H(e.pr,t.pr)||L.comparator(e.key,t.key)}};var Ya=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new ye(se.Ir)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){let o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let a=new ka(o,t,r,i);this.mutationQueue.push(a);for(let u of i)this.wr=this.wr.add(new se(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){let r=t+1,i=this.br(r),o=i<0?0:i;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new se(t,0),i=new se(t,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,i],a=>{let u=this.Sr(a.pr);o.push(u)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ye(H);return t.forEach(i=>{let o=new se(i,0),a=new se(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,a],u=>{r=r.add(u.pr)})}),P.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,o=r;L.isDocumentKey(o)||(o=o.child(""));let a=new se(new L(o),0),u=new ye(H);return this.wr.forEachWhile(h=>{let d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(u=u.add(h.pr)),!0)},a),P.resolve(this.Dr(u))}Dr(e){let t=[];return e.forEach(r=>{let i=this.Sr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){J(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return P.forEach(t.mutations,i=>{let o=new se(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,t){let r=new se(t,0),i=this.wr.firstAfterOrEqual(r);return P.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){let t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var Xa=class{constructor(e){this.vr=e,this.docs=function(){return new ne(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.vr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():Oe.newInvalidDocument(t))}getEntries(e,t){let r=it();return t.forEach(i=>{let o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Oe.newInvalidDocument(i))}),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=it(),a=t.path,u=new L(a.child("")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){let{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||I_(y_(p),r)<=0||(i.has(p.key)||ys(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(e,t,r,i){M()}Fr(e,t){return P.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Za(this)}getSize(e){return P.resolve(this.size)}},Za=class extends $a{constructor(e){super(),this.ar=e}applyChanges(e){let t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),P.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}};var ec=class{constructor(e){this.persistence=e,this.Mr=new vt(t=>Bc(t),jc),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Er,this.targetCount=0,this.Lr=wr.Nn()}forEachTarget(e,t){return this.Mr.forEach((r,i)=>t(i)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Or&&(this.Or=t),P.resolve()}qn(e){this.Mr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Lr=new wr(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.qn(t),P.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let i=0,o=[];return this.Mr.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.Mr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),P.waitFor(o).next(()=>i)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){let r=this.Mr.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.Nr.dr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.Nr.Rr(t,r);let i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),P.resolve()}getMatchingKeysForTargetId(e,t){let r=this.Nr.gr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.Nr.containsKey(t))}};var tc=class{constructor(e,t){this.Br={},this.overlays={},this.kr=new pr(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new ec(this),this.indexManager=new Ga,this.remoteDocumentCache=function(i){return new Xa(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new za(t),this.$r=new Qa(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ja,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new Ya(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,r){k("MemoryPersistence","Starting transaction:",e);let i=new nc(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(o=>this.referenceDelegate.Wr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Gr(e,t){return P.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}},nc=class extends ma{constructor(e){super(),this.currentSequenceNumber=e}},rc=class n{constructor(e){this.persistence=e,this.zr=new Er,this.jr=null}static Hr(e){return new n(e)}get Jr(){if(this.jr)return this.jr;throw M()}addReference(e,t,r){return this.zr.addReference(r,t),this.Jr.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.zr.removeReference(r,t),this.Jr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),P.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(i=>this.Jr.add(i.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Jr,r=>{let i=L.fromPath(r);return this.Yr(e,i).next(o=>{o||t.removeEntry(i,U.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(r=>{r?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return P.or([()=>P.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}};var ic=class n{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.qi=r,this.Qi=i}static Ki(e,t){let r=j(),i=j();for(let o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new n(e,t.fromCache,r,i)}};var sc=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var oc=class{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return ul()?8:w_(oe())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,r,i){let o={result:null};return this.ji(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Hi(e,t,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;let a=new sc;return this.Ji(e,t,a).next(u=>{if(o.result=u,this.Ui)return this.Yi(e,t,a,u.size)})}).next(()=>o.result)}Yi(e,t,r,i){return r.documentReadCount<this.Wi?(cr()<=B.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",rn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),P.resolve()):(cr()<=B.DEBUG&&k("QueryEngine","Query:",rn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(cr()<=B.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",rn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,je(t))):P.resolve())}ji(e,t){if(Vh(t))return P.resolve(null);let r=je(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ca(t,null,"F"),r=je(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{let a=j(...o);return this.zi.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(h=>{let d=this.Zi(t,u);return this.Xi(t,d,a,h.readTime)?this.ji(e,Ca(t,null,"F")):this.es(e,d,t,h)}))})))}Hi(e,t,r,i){return Vh(t)||i.isEqual(U.min())?P.resolve(null):this.zi.getDocuments(e,r).next(o=>{let a=this.Zi(t,o);return this.Xi(t,a,r,i)?P.resolve(null):(cr()<=B.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),rn(t)),this.es(e,a,t,__(i,-1)).next(u=>u))})}Zi(e,t){let r=new ye(hd(e));return t.forEach((i,o)=>{ys(e,o)&&(r=r.add(o))}),r}Xi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;let o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ji(e,t,r){return cr()<=B.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",rn(t)),this.zi.getDocumentsMatchingQuery(e,t,qt.min(),r)}es(e,t,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}};var ac=class{constructor(e,t,r,i){this.persistence=e,this.ts=t,this.serializer=i,this.ns=new ne(H),this.rs=new vt(o=>Bc(o),jc),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Wa(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}};function hy(n,e,t,r){return new ac(n,e,t,r)}async function Nd(n,e){let t=F(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t._s(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{let a=[],u=[],h=j();for(let d of i){a.push(d.batchId);for(let p of d.mutations)h=h.add(p.key)}for(let d of o){u.push(d.batchId);for(let p of d.mutations)h=h.add(p.key)}return t.localDocuments.getDocuments(r,h).next(d=>({us:d,removedBatchIds:a,addedBatchIds:u}))})})}function dy(n,e){let t=F(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{let i=e.batch.keys(),o=t.os.newChangeBuffer({trackRemovals:!0});return function(u,h,d,p){let E=d.batch,b=E.keys(),S=P.resolve();return b.forEach(N=>{S=S.next(()=>p.getEntry(h,N)).next(x=>{let D=d.docVersions.get(N);J(D!==null),x.version.compareTo(D)<0&&(E.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),p.addEntry(x)))})}),S.next(()=>u.mutationQueue.removeMutationBatch(h,E))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=j();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function kd(n){let e=F(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function fy(n,e){let t=F(n),r=e.snapshotVersion,i=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{let a=t.os.newChangeBuffer({trackRemovals:!0});i=t.ns;let u=[];e.targetChanges.forEach((p,E)=>{let b=i.get(E);if(!b)return;u.push(t.Qr.removeMatchingKeys(o,p.removedDocuments,E).next(()=>t.Qr.addMatchingKeys(o,p.addedDocuments,E)));let S=b.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(E)!==null?S=S.withResumeToken(Ee.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),i=i.insert(E,S),function(x,D,q){return x.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(b,S,p)&&u.push(t.Qr.updateTargetData(o,S))});let h=it(),d=j();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))}),u.push(py(o,a,e.documentUpdates).next(p=>{h=p.cs,d=p.ls})),!r.isEqual(U.min())){let p=t.Qr.getLastRemoteSnapshotVersion(o).next(E=>t.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(p)}return P.waitFor(u).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(t.ns=i,o))}function py(n,e,t){let r=j(),i=j();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=it();return t.forEach((u,h)=>{let d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(u)),h.isNoDocument()&&h.version.isEqual(U.min())?(e.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(u,h)):k("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{cs:a,ls:i}})}function my(n,e){let t=F(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function gy(n,e){let t=F(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Qr.getTargetData(r,e).next(o=>o?(i=o,P.resolve(i)):t.Qr.allocateTargetId(r).next(a=>(i=new vr(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{let i=t.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ns=t.ns.insert(r.targetId,r),t.rs.set(e,r.targetId)),r})}async function cc(n,e,t){let r=F(n),i=r.ns.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Rr(a))throw a;k("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function $h(n,e,t){let r=F(n),i=U.min(),o=j();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){let E=F(h),b=E.rs.get(p);return b!==void 0?P.resolve(E.ns.get(b)):E.Qr.getTargetData(d,p)}(r,a,je(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.ts.getDocumentsMatchingQuery(a,e,t?i:U.min(),t?o:j())).next(u=>(_y(r,k_(e),u),{documents:u,hs:o})))}function _y(n,e,t){let r=n.ss.get(e)||U.min();t.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ss.set(e,r)}var Ji=class{constructor(){this.activeTargetIds=F_()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var uc=class{constructor(){this.no=new Ji,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,r){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Ji,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var lc=class{io(e){}shutdown(){}};var Yi=class{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(let e of this.uo)e(0)}ao(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(let e of this.uo)e(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var xi=null;function ia(){return xi===null?xi=function(){return 268435456+Math.round(2147483648*Math.random())}():xi++,"0x"+xi.toString(16)}var yy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};var hc=class{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}};var _e="WebChannelConnection",dc=class extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;let r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+t.host,this.So=`projects/${i}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Do(){return!1}Co(t,r,i,o,a){let u=ia(),h=this.vo(t,r.toUriEncodedString());k("RestConnection",`Sending RPC '${t}' ${u}:`,h,i);let d={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(d,o,a),this.Mo(t,h,d,i).then(p=>(k("RestConnection",`Received RPC '${t}' ${u}: `,p),p),p=>{throw ln("RestConnection",`RPC '${t}' ${u} failed with error: `,p,"url: ",h,"request:",i),p})}xo(t,r,i,o,a,u){return this.Co(t,r,i,o,a)}Fo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Tn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>t[a]=o),i&&i.headers.forEach((o,a)=>t[a]=o)}vo(t,r){let i=yy[t];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,r,i){let o=ia();return new Promise((a,u)=>{let h=new Yo;h.setWithCredentials(!0),h.listenOnce(Zo.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case ar.NO_ERROR:let p=h.getResponseJson();k(_e,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),a(p);break;case ar.TIMEOUT:k(_e,`RPC '${e}' ${o} timed out`),u(new V(R.DEADLINE_EXCEEDED,"Request time out"));break;case ar.HTTP_ERROR:let E=h.getStatus();if(k(_e,`RPC '${e}' ${o} failed with status:`,E,"response text:",h.getResponseText()),E>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);let S=b==null?void 0:b.error;if(S&&S.status&&S.message){let N=function(D){let q=D.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(q)>=0?q:R.UNKNOWN}(S.status);u(new V(N,S.message))}else u(new V(R.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new V(R.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{k(_e,`RPC '${e}' ${o} completed.`)}});let d=JSON.stringify(i);k(_e,`RPC '${e}' ${o} sending request:`,i),h.send(t,"POST",d,r,15)})}Oo(e,t,r){let i=ia(),o=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=na(),u=ta(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.xmlHttpFactory=new Xo({})),this.Fo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;let p=o.join("");k(_e,`Creating RPC '${e}' stream ${i}: ${p}`,h);let E=a.createWebChannel(p,h),b=!1,S=!1,N=new hc({lo:D=>{S?k(_e,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(b||(k(_e,`Opening RPC '${e}' stream ${i} transport.`),E.open(),b=!0),k(_e,`RPC '${e}' stream ${i} sending:`,D),E.send(D))},ho:()=>E.close()}),x=(D,q,z)=>{D.listen(q,G=>{try{z(G)}catch(Y){setTimeout(()=>{throw Y},0)}})};return x(E,nn.EventType.OPEN,()=>{S||(k(_e,`RPC '${e}' stream ${i} transport opened.`),N.mo())}),x(E,nn.EventType.CLOSE,()=>{S||(S=!0,k(_e,`RPC '${e}' stream ${i} transport closed`),N.po())}),x(E,nn.EventType.ERROR,D=>{S||(S=!0,ln(_e,`RPC '${e}' stream ${i} transport errored:`,D),N.po(new V(R.UNAVAILABLE,"The operation could not be completed")))}),x(E,nn.EventType.MESSAGE,D=>{var q;if(!S){let z=D.data[0];J(!!z);let G=z,Y=G.error||((q=G[0])===null||q===void 0?void 0:q.error);if(Y){k(_e,`RPC '${e}' stream ${i} received error:`,Y);let Ie=Y.status,W=function(_){let y=ie[_];if(y!==void 0)return Td(y)}(Ie),I=Y.message;W===void 0&&(W=R.INTERNAL,I="Unknown error status: "+Ie+" with message "+Y.message),S=!0,N.po(new V(W,I)),E.close()}else k(_e,`RPC '${e}' stream ${i} received:`,z),N.yo(z)}}),x(u,ea.STAT_EVENT,D=>{D.stat===ki.PROXY?k(_e,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===ki.NOPROXY&&k(_e,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.fo()},0),N}};function sa(){return typeof document!="undefined"?document:null}function Is(n){return new Fa(n,!0)}var Xi=class{constructor(e,t,r=1e3,i=1.5,o=6e4){this.oi=e,this.timerId=t,this.No=r,this.Lo=i,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();let t=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,t-r);i>0&&k("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}};var Zi=class{constructor(e,t,r,i,o,a,u,h){this.oi=e,this.Go=r,this.zo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Xi(e,t)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(nt(t.toString()),nt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;let e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===t&&this.u_(r,i)},r=>{e(()=>{let i=new V(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,t){let r=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return k("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget(()=>this.jo===e?t():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},fc=class extends Zi{constructor(e,t,r,i,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}l_(e,t){return this.connection.Oo("Listen",e,t)}onMessage(e){this.Yo.reset();let t=Z_(this.serializer,e),r=function(o){if(!("targetChange"in o))return U.min();let a=o.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?ze(a.readTime):U.min()}(e);return this.listener.h_(t,r)}P_(e){let t={};t.database=ja(this.serializer),t.addTarget=function(o,a){let u,h=a.target;if(u=Pa(h)?{documents:ny(o,h)}:{query:ry(o,h)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Ad(o,a.resumeToken);let d=Ua(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){u.readTime=Wi(o,a.snapshotVersion.toTimestamp());let d=Ua(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);let r=sy(this.serializer,e);r&&(t.labels=r),this.i_(t)}I_(e){let t={};t.database=ja(this.serializer),t.removeTarget=e,this.i_(t)}},pc=class extends Zi{constructor(e,t,r,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,t){return this.connection.Oo("Write",e,t)}onMessage(e){if(J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();let t=ty(e.writeResults,e.commitTime),r=ze(e.commitTime);return this.listener.A_(r,t)}return J(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){let e={};e.database=ja(this.serializer),this.i_(e)}d_(e){let t={streamToken:this.lastStreamToken,writes:e.map(r=>ey(this.serializer,r))};this.i_(t)}};var mc=class extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new V(R.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(e,qa(t,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(R.UNKNOWN,o.toString())})}xo(e,t,r,i,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.xo(e,qa(t,r),i,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(R.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}},gc=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(nt(t),this.y_=!1):k("OnlineStateTracker",t)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}};var _c=class{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(a=>{r.enqueueAndForget(async()=>{Kt(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(h){let d=F(h);d.M_.add(4),await Pr(d),d.N_.set("Unknown"),d.M_.delete(4),await vs(d)}(this))})}),this.N_=new gc(r,i)}};async function vs(n){if(Kt(n))for(let e of n.x_)await e(!0)}async function Pr(n){for(let e of n.x_)await e(!1)}function Od(n,e){let t=F(n);t.F_.has(e.targetId)||(t.F_.set(e.targetId,e),Hc(t)?$c(t):bn(t).Xo()&&Kc(t,e))}function Gc(n,e){let t=F(n),r=bn(t);t.F_.delete(e),r.Xo()&&xd(t,e),t.F_.size===0&&(r.Xo()?r.n_():Kt(t)&&t.N_.set("Unknown"))}function Kc(n,e){if(n.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){let t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}bn(n).P_(e)}function xd(n,e){n.L_.xe(e),bn(n).I_(e)}function $c(n){n.L_=new Ma({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.F_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),bn(n).start(),n.N_.w_()}function Hc(n){return Kt(n)&&!bn(n).Zo()&&n.F_.size>0}function Kt(n){return F(n).M_.size===0}function Vd(n){n.L_=void 0}async function Iy(n){n.N_.set("Online")}async function vy(n){n.F_.forEach((e,t)=>{Kc(n,e)})}async function wy(n,e){Vd(n),Hc(n)?(n.N_.D_(e),$c(n)):n.N_.set("Unknown")}async function Ey(n,e,t){if(n.N_.set("Online"),e instanceof $i&&e.state===2&&e.cause)try{await async function(i,o){let a=o.cause;for(let u of o.targetIds)i.F_.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.F_.delete(u),i.L_.removeTarget(u))}(n,e)}catch(r){k("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await es(n,r)}else if(e instanceof cn?n.L_.Ke(e):e instanceof Ki?n.L_.He(e):n.L_.We(e),!t.isEqual(U.min()))try{let r=await kd(n.localStore);t.compareTo(r)>=0&&await function(o,a){let u=o.L_.rt(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){let p=o.F_.get(d);p&&o.F_.set(d,p.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{let p=o.F_.get(h);if(!p)return;o.F_.set(h,p.withResumeToken(Ee.EMPTY_BYTE_STRING,p.snapshotVersion)),xd(o,h);let E=new vr(p.target,h,d,p.sequenceNumber);Kc(o,E)}),o.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){k("RemoteStore","Failed to raise snapshot:",r),await es(n,r)}}async function es(n,e,t){if(!Rr(e))throw e;n.M_.add(1),await Pr(n),n.N_.set("Offline"),t||(t=()=>kd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await t(),n.M_.delete(1),await vs(n)})}function Ld(n,e){return e().catch(t=>es(n,t,e))}async function ws(n){let e=F(n),t=wt(e),r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;Ty(e);)try{let i=await my(e.localStore,r);if(i===null){e.v_.length===0&&t.n_();break}r=i.batchId,Ay(e,i)}catch(i){await es(e,i)}Md(e)&&Fd(e)}function Ty(n){return Kt(n)&&n.v_.length<10}function Ay(n,e){n.v_.push(e);let t=wt(n);t.Xo()&&t.E_&&t.d_(e.mutations)}function Md(n){return Kt(n)&&!wt(n).Zo()&&n.v_.length>0}function Fd(n){wt(n).start()}async function by(n){wt(n).V_()}async function Sy(n){let e=wt(n);for(let t of n.v_)e.d_(t.mutations)}async function Ry(n,e,t){let r=n.v_.shift(),i=Oa.from(r,e,t);await Ld(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ws(n)}async function Py(n,e){e&&wt(n).E_&&await async function(r,i){if(function(a){return K_(a)&&a!==R.ABORTED}(i.code)){let o=r.v_.shift();wt(r).t_(),await Ld(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await ws(r)}}(n,e),Md(n)&&Fd(n)}async function Hh(n,e){let t=F(n);t.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");let r=Kt(t);t.M_.add(3),await Pr(t),r&&t.N_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.M_.delete(3),await vs(t)}async function Cy(n,e){let t=F(n);e?(t.M_.delete(2),await vs(t)):e||(t.M_.add(2),await Pr(t),t.N_.set("Unknown"))}function bn(n){return n.B_||(n.B_=function(t,r,i){let o=F(t);return o.f_(),new fc(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Po:Iy.bind(null,n),To:vy.bind(null,n),Ao:wy.bind(null,n),h_:Ey.bind(null,n)}),n.x_.push(async e=>{e?(n.B_.t_(),Hc(n)?$c(n):n.N_.set("Unknown")):(await n.B_.stop(),Vd(n))})),n.B_}function wt(n){return n.k_||(n.k_=function(t,r,i){let o=F(t);return o.f_(),new pc(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:by.bind(null,n),Ao:Py.bind(null,n),R_:Sy.bind(null,n),A_:Ry.bind(null,n)}),n.x_.push(async e=>{e?(n.k_.t_(),await ws(n)):(await n.k_.stop(),n.v_.length>0&&(k("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}var yc=class n{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new qe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){let a=Date.now()+r,u=new n(e,t,a,i,o);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function Wc(n,e){if(nt("AsyncQueue",`${e}: ${n}`),Rr(n))return new V(R.UNAVAILABLE,`${e}: ${n}`);throw n}var ts=class n{constructor(e){this.comparator=e?(t,r)=>e(t,r)||L.comparator(t.key,r.key):(t,r)=>L.comparator(t.key,r.key),this.keyedMap=ur(),this.sortedSet=new ne(this.comparator)}static emptySet(e){return new n(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let i=t.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let r=new n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}};var ns=class{constructor(){this.q_=new ne(L.comparator)}track(e){let t=e.doc.key,r=this.q_.get(t);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(t,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(t):e.type===1&&r.type===2?this.q_=this.q_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):M():this.q_=this.q_.insert(t,e)}Q_(){let e=[];return this.q_.inorderTraversal((t,r)=>{e.push(r)}),e}},wn=class n{constructor(e,t,r,i,o,a,u,h,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,o){let a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new n(e,t,ts.emptySet(t),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_s(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}};var Ic=class{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}},vc=class{constructor(){this.queries=new vt(e=>ld(e),_s),this.onlineState="Unknown",this.z_=new Set}};async function Ud(n,e){let t=F(n),r=3,i=e.query,o=t.queries.get(i);o?!o.W_()&&e.G_()&&(r=2):(o=new Ic,r=e.G_()?0:1);try{switch(r){case 0:o.K_=await t.onListen(i,!0);break;case 1:o.K_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){let u=Wc(a,`Initialization of query '${rn(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,o),o.U_.push(e),e.j_(t.onlineState),o.K_&&e.H_(o.K_)&&Qc(t)}async function qd(n,e){let t=F(n),r=e.query,i=3,o=t.queries.get(r);if(o){let a=o.U_.indexOf(e);a>=0&&(o.U_.splice(a,1),o.U_.length===0?i=e.G_()?0:1:!o.W_()&&e.G_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Dy(n,e){let t=F(n),r=!1;for(let i of e){let o=i.query,a=t.queries.get(o);if(a){for(let u of a.U_)u.H_(i)&&(r=!0);a.K_=i}}r&&Qc(t)}function Ny(n,e,t){let r=F(n),i=r.queries.get(e);if(i)for(let o of i.U_)o.onError(t);r.queries.delete(e)}function Qc(n){n.z_.forEach(e=>{e.next()})}var wc,Wh;(Wh=wc||(wc={})).J_="default",Wh.Cache="cache";var rs=class{constructor(e,t,r){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){let r=[];for(let i of e.docChanges)i.type!==3&&r.push(i);e=new wn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache||!this.G_())return!0;let r=t!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ea(e){if(e.docChanges.length>0)return!0;let t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}na(e){e=wn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==wc.Cache}};var is=class{constructor(e){this.key=e}},ss=class{constructor(e){this.key=e}},Ec=class{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=j(),this.mutatedKeys=j(),this.Ia=hd(e),this.Ta=new ts(this.Ia)}get Ea(){return this.la}da(e,t){let r=t?t.Aa:new ns,i=t?t.Ta:this.Ta,o=t?t.mutatedKeys:this.mutatedKeys,a=i,u=!1,h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,E)=>{let b=i.get(p),S=ys(this.query,E)?E:null,N=!!b&&this.mutatedKeys.has(b.key),x=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations),D=!1;b&&S?b.data.isEqual(S.data)?N!==x&&(r.track({type:3,doc:S}),D=!0):this.Ra(b,S)||(r.track({type:2,doc:S}),D=!0,(h&&this.Ia(S,h)>0||d&&this.Ia(S,d)<0)&&(u=!0)):!b&&S?(r.track({type:0,doc:S}),D=!0):b&&!S&&(r.track({type:1,doc:b}),D=!0,(h||d)&&(u=!0)),D&&(S?(a=a.add(S),o=x?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){let p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Ta:a,Aa:r,Xi:u,mutatedKeys:o}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){let o=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;let a=e.Aa.Q_();a.sort((p,E)=>function(S,N){let x=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return x(S)-x(N)}(p.type,E.type)||this.Ia(p.doc,E.doc)),this.Va(r),i=i!=null&&i;let u=t&&!i?this.ma():[],h=this.Pa.size===0&&this.current&&!i?1:0,d=h!==this.ha;return this.ha=h,a.length!==0||d?{snapshot:new wn(this.query,e.Ta,o,a,e.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:u}:{fa:u}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new ns,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(t=>this.la=this.la.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.la=this.la.delete(t)),this.current=e.current)}ma(){if(!this.current)return[];let e=this.Pa;this.Pa=j(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});let t=[];return e.forEach(r=>{this.Pa.has(r)||t.push(new ss(r))}),this.Pa.forEach(r=>{e.has(r)||t.push(new is(r))}),t}pa(e){this.la=e.hs,this.Pa=j();let t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return wn.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}},Tc=class{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}},Ac=class{constructor(e){this.key=e,this.wa=!1}},bc=class{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new vt(u=>ld(u),_s),this.Da=new Map,this.Ca=new Set,this.va=new ne(L.comparator),this.Fa=new Map,this.Ma=new Er,this.xa={},this.Oa=new Map,this.Na=wr.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}};async function ky(n,e,t=!0){let r=$d(n),i,o=r.ba.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.ya()):i=await Bd(r,e,t,!0),i}async function Oy(n,e){let t=$d(n);await Bd(t,e,!0,!1)}async function Bd(n,e,t,r){let i=await gy(n.localStore,je(e)),o=i.targetId,a=t?n.sharedClientState.addLocalQueryTarget(o):"not-current",u;return r&&(u=await xy(n,e,o,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Od(n.remoteStore,i),u}async function xy(n,e,t,r,i){n.Ba=(E,b,S)=>async function(x,D,q,z){let G=D.view.da(q);G.Xi&&(G=await $h(x.localStore,D.query,!1).then(({documents:I})=>D.view.da(I,G)));let Y=z&&z.targetChanges.get(D.targetId),Ie=z&&z.targetMismatches.get(D.targetId)!=null,W=D.view.applyChanges(G,x.isPrimaryClient,Y,Ie);return Jh(x,D.targetId,W.fa),W.snapshot}(n,E,b,S);let o=await $h(n.localStore,e,!0),a=new Ec(e,o.hs),u=a.da(o.documents),h=Ir.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(u,n.isPrimaryClient,h);Jh(n,t,d.fa);let p=new Tc(e,t,a);return n.ba.set(e,p),n.Da.has(t)?n.Da.get(t).push(e):n.Da.set(t,[e]),d.snapshot}async function Vy(n,e,t){let r=F(n),i=r.ba.get(e),o=r.Da.get(i.targetId);if(o.length>1)return r.Da.set(i.targetId,o.filter(a=>!_s(a,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await cc(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Gc(r.remoteStore,i.targetId),Sc(r,i.targetId)}).catch(Sr)):(Sc(r,i.targetId),await cc(r.localStore,i.targetId,!0))}async function Ly(n,e){let t=F(n),r=t.ba.get(e),i=t.Da.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Gc(t.remoteStore,r.targetId))}async function My(n,e,t){let r=Gy(n);try{let i=await function(a,u){let h=F(a),d=de.now(),p=u.reduce((S,N)=>S.add(N.key),j()),E,b;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let N=it(),x=j();return h.os.getEntries(S,p).next(D=>{N=D,N.forEach((q,z)=>{z.isValidDocument()||(x=x.add(q))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,N)).next(D=>{E=D;let q=[];for(let z of u){let G=G_(z,E.get(z.key).overlayedDocument);G!=null&&q.push(new st(z.key,G,id(G.value.mapValue),_t.exists(!0)))}return h.mutationQueue.addMutationBatch(S,d,q,u)}).next(D=>{b=D;let q=D.applyToLocalDocumentSet(E,x);return h.documentOverlayCache.saveOverlays(S,D.batchId,q)})}).then(()=>({batchId:b.batchId,changes:fd(E)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,u,h){let d=a.xa[a.currentUser.toKey()];d||(d=new ne(H)),d=d.insert(u,h),a.xa[a.currentUser.toKey()]=d}(r,i.batchId,t),await Cr(r,i.changes),await ws(r.remoteStore)}catch(i){let o=Wc(i,"Failed to persist write");t.reject(o)}}async function jd(n,e){let t=F(n);try{let r=await fy(t.localStore,e);e.targetChanges.forEach((i,o)=>{let a=t.Fa.get(o);a&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.wa=!0:i.modifiedDocuments.size>0?J(a.wa):i.removedDocuments.size>0&&(J(a.wa),a.wa=!1))}),await Cr(t,r,e)}catch(r){await Sr(r)}}function Qh(n,e,t){let r=F(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){let i=[];r.ba.forEach((o,a)=>{let u=a.view.j_(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){let h=F(a);h.onlineState=u;let d=!1;h.queries.forEach((p,E)=>{for(let b of E.U_)b.j_(u)&&(d=!0)}),d&&Qc(h)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Fy(n,e,t){let r=F(n);r.sharedClientState.updateQueryState(e,"rejected",t);let i=r.Fa.get(e),o=i&&i.key;if(o){let a=new ne(L.comparator);a=a.insert(o,Oe.newNoDocument(o,U.min()));let u=j().add(o),h=new Gi(U.min(),new Map,new ne(H),a,u);await jd(r,h),r.va=r.va.remove(o),r.Fa.delete(e),Jc(r)}else await cc(r.localStore,e,!1).then(()=>Sc(r,e,t)).catch(Sr)}async function Uy(n,e){let t=F(n),r=e.batch.batchId;try{let i=await dy(t.localStore,e);Gd(t,r,null),zd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Cr(t,i)}catch(i){await Sr(i)}}async function qy(n,e,t){let r=F(n);try{let i=await function(a,u){let h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return h.mutationQueue.lookupMutationBatch(d,u).next(E=>(J(E!==null),p=E.keys(),h.mutationQueue.removeMutationBatch(d,E))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>h.localDocuments.getDocuments(d,p))})}(r.localStore,e);Gd(r,e,t),zd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Cr(r,i)}catch(i){await Sr(i)}}function zd(n,e){(n.Oa.get(e)||[]).forEach(t=>{t.resolve()}),n.Oa.delete(e)}function Gd(n,e,t){let r=F(n),i=r.xa[r.currentUser.toKey()];if(i){let o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function Sc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(let r of n.Da.get(e))n.ba.delete(r),t&&n.Sa.ka(r,t);n.Da.delete(e),n.isPrimaryClient&&n.Ma.Vr(e).forEach(r=>{n.Ma.containsKey(r)||Kd(n,r)})}function Kd(n,e){n.Ca.delete(e.path.canonicalString());let t=n.va.get(e);t!==null&&(Gc(n.remoteStore,t),n.va=n.va.remove(e),n.Fa.delete(t),Jc(n))}function Jh(n,e,t){for(let r of t)r instanceof is?(n.Ma.addReference(r.key,e),By(n,r)):r instanceof ss?(k("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,e),n.Ma.containsKey(r.key)||Kd(n,r.key)):M()}function By(n,e){let t=e.key,r=t.path.canonicalString();n.va.get(t)||n.Ca.has(r)||(k("SyncEngine","New document in limbo: "+t),n.Ca.add(r),Jc(n))}function Jc(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){let e=n.Ca.values().next().value;n.Ca.delete(e);let t=new L(te.fromString(e)),r=n.Na.next();n.Fa.set(r,new Ac(t)),n.va=n.va.insert(t,r),Od(n.remoteStore,new vr(je(gs(t.path)),r,"TargetPurposeLimboResolution",pr.oe))}}async function Cr(n,e,t){let r=F(n),i=[],o=[],a=[];r.ba.isEmpty()||(r.ba.forEach((u,h)=>{a.push(r.Ba(h,e,t).then(d=>{if((d||t)&&r.isPrimaryClient){let p=d&&!d.fromCache;r.sharedClientState.updateQueryState(h.targetId,p?"current":"not-current")}if(d){i.push(d);let p=ic.Ki(h.targetId,d);o.push(p)}}))}),await Promise.all(a),r.Sa.h_(i),await async function(h,d){let p=F(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>P.forEach(d,b=>P.forEach(b.qi,S=>p.persistence.referenceDelegate.addReference(E,b.targetId,S)).next(()=>P.forEach(b.Qi,S=>p.persistence.referenceDelegate.removeReference(E,b.targetId,S)))))}catch(E){if(!Rr(E))throw E;k("LocalStore","Failed to update sequence numbers: "+E)}for(let E of d){let b=E.targetId;if(!E.fromCache){let S=p.ns.get(b),N=S.snapshotVersion,x=S.withLastLimboFreeSnapshotVersion(N);p.ns=p.ns.insert(b,x)}}}(r.localStore,o))}async function jy(n,e){let t=F(n);if(!t.currentUser.isEqual(e)){k("SyncEngine","User change. New user:",e.toKey());let r=await Nd(t.localStore,e);t.currentUser=e,function(o,a){o.Oa.forEach(u=>{u.forEach(h=>{h.reject(new V(R.CANCELLED,a))})}),o.Oa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Cr(t,r.us)}}function zy(n,e){let t=F(n),r=t.Fa.get(e);if(r&&r.wa)return j().add(r.key);{let i=j(),o=t.Da.get(e);if(!o)return i;for(let a of o){let u=t.ba.get(a);i=i.unionWith(u.view.Ea)}return i}}function $d(n){let e=F(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=jd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Fy.bind(null,e),e.Sa.h_=Dy.bind(null,e.eventManager),e.Sa.ka=Ny.bind(null,e.eventManager),e}function Gy(n){let e=F(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Uy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qy.bind(null,e),e}var os=class{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Is(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return hy(this.persistence,new oc,e.initialUser,this.serializer)}createPersistence(e){return new tc(rc.Hr,this.serializer)}createSharedClientState(e){return new uc}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};var Rc=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Qh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jy.bind(null,this.syncEngine),await Cy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vc}()}createDatastore(e){let t=Is(e.databaseInfo.databaseId),r=function(o){return new dc(o)}(e.databaseInfo);return function(o,a,u,h){return new mc(o,a,u,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,a,u){return new _c(r,i,o,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>Qh(this.syncEngine,t,0),function(){return Yi.D()?new Yi:new lc}())}createSyncEngine(e,t){return function(i,o,a,u,h,d,p){let E=new bc(i,o,a,u,h,d);return p&&(E.La=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(r){let i=F(r);k("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Pr(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}};var as=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):nt("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}};var Pc=class{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=ue.UNAUTHENTICATED,this.clientId=Fi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{k("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(k("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new qe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let r=Wc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}};async function oa(n,e){n.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");let t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Nd(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Yh(n,e){n.asyncQueue.verifyOperationInProgress();let t=await $y(n);k("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Hh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Hh(e.remoteStore,i)),n._onlineComponents=e}function Ky(n){return n.name==="FirebaseError"?n.code===R.FAILED_PRECONDITION||n.code===R.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function $y(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){k("FirestoreClient","Using user provided OfflineComponentProvider");try{await oa(n,n._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!Ky(t))throw t;ln("Error using user provided cache. Falling back to memory cache: "+t),await oa(n,new os)}}else k("FirestoreClient","Using default OfflineComponentProvider"),await oa(n,new os);return n._offlineComponents}async function Hd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(k("FirestoreClient","Using user provided OnlineComponentProvider"),await Yh(n,n._uninitializedComponentsProvider._online)):(k("FirestoreClient","Using default OnlineComponentProvider"),await Yh(n,new Rc))),n._onlineComponents}function Hy(n){return Hd(n).then(e=>e.syncEngine)}async function Cc(n){let e=await Hd(n),t=e.eventManager;return t.onListen=ky.bind(null,e.syncEngine),t.onUnlisten=Vy.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Oy.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Ly.bind(null,e.syncEngine),t}function Wy(n,e,t={}){let r=new qe;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){let p=new as({next:b=>{a.enqueueAndForget(()=>qd(o,E));let S=b.docs.has(u);!S&&b.fromCache?d.reject(new V(R.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&b.fromCache&&h&&h.source==="server"?d.reject(new V(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(b)},error:b=>d.reject(b)}),E=new rs(gs(u.path),p,{includeMetadataChanges:!0,ra:!0});return Ud(o,E)}(await Cc(n),n.asyncQueue,e,t,r)),r.promise}function Wd(n){let e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}var Xh=new Map;function Qd(n,e,t){if(!t)throw new V(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Qy(n,e,t,r){if(e===!0&&r===!0)throw new V(R.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Zh(n){if(!L.isDocumentKey(n))throw new V(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ed(n){if(L.isDocumentKey(n))throw new V(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Yc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{let e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":M()}function tt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=Yc(n);throw new V(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}var cs=class{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Qy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wd((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new V(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new V(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new V(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},En=class{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cs({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cs(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new aa;switch(r.type){case"firstParty":return new ha(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let r=Xh.get(t);r&&(k("ComponentProvider","Removing Datastore"),Xh.delete(t),r.terminate())}(this),Promise.resolve()}};function Jy(n,e,t,r={}){var i;let o=(n=tt(n,En))._getSettings(),a=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&ln("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=ue.MOCK_USER;else{u=il(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);let d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new V(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new ue(d)}n._authCredentials=new ca(new Mi(u,h))}}var us=class n{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new n(this.firestore,e,this._query)}},Te=class n{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n(this.firestore,e,this._key)}},yt=class n extends us{constructor(e,t,r){super(e,t,gs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new Te(this.firestore,null,new L(e))}withConverter(e){return new n(this.firestore,e,this._path)}};function Jd(n,e,...t){if(n=ce(n),Qd("collection","path",e),n instanceof En){let r=te.fromString(e,...t);return ed(r),new yt(n,null,r)}{if(!(n instanceof Te||n instanceof yt))throw new V(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(te.fromString(e,...t));return ed(r),new yt(n.firestore,null,r)}}function Yd(n,e,...t){if(n=ce(n),arguments.length===1&&(e=Fi.newId()),Qd("doc","path",e),n instanceof En){let r=te.fromString(e,...t);return Zh(r),new Te(n,null,new L(r))}{if(!(n instanceof Te||n instanceof yt))throw new V(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(te.fromString(e,...t));return Zh(r),new Te(n.firestore,n instanceof yt?n.converter:null,new L(r))}}var Dc=class{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Xi(this,"async_queue_retry"),this.hu=()=>{let t=sa();t&&k("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};let e=sa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;let t=sa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});let t=new qe;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Rr(e))throw e;k("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){let t=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;let i=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw nt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=t,t}enqueueAfterDelay(e,t,r){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);let i=yc.createAndSchedule(this,e,t,r,o=>this.Eu(o));return this._u.push(i),i}Pu(){this.au&&M()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(let t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(let t of this._u)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){let t=this._u.indexOf(e);this._u.splice(t,1)}};function td(n){return function(t,r){if(typeof t!="object"||t===null)return!1;let i=t;for(let o of r)if(o in i&&typeof i[o]=="function")return!0;return!1}(n,["next","error","complete"])}var Et=class extends En{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new Dc}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Zd(this),this._firestoreClient.terminate()}};function Xd(n,e){let t=typeof n=="object"?n:Xr(),r=typeof n=="string"?n:e||"(default)",i=Hn(t,"firestore").getImmediate({identifier:r});if(!i._initialized){let o=rl("firestore");o&&Jy(i,...o)}return i}function Xc(n){return n._firestoreClient||Zd(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Zd(n){var e,t,r;let i=n._freezeSettings(),o=function(u,h,d,p){return new ga(u,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Wd(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new Pc(n._authCredentials,n._appCheckCredentials,n._queue,o),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}var Tr=class n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n(Ee.fromBase64String(e))}catch(t){throw new V(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new n(Ee.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}};var Ar=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Se(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var ls=class{constructor(e){this._methodName=e}};var br=class{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}};var Yy=/^__.*__$/,Nc=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new st(e,this.data,this.fieldMask,t,this.fieldTransforms):new Gt(e,this.data,t,this.fieldTransforms)}};function ef(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}var kc=class n{constructor(e,t,r,i,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return hs(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(ef(this.fu)&&Yy.test(e))throw this.Du('Document fields cannot begin and end with "__"')}},Oc=class{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Is(e)}Fu(e,t,r,i=!1){return new kc({fu:e,methodName:t,vu:r,path:Se.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function Xy(n){let e=n._freezeSettings(),t=Is(n._databaseId);return new Oc(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Zy(n,e,t,r,i,o={}){let a=n.Fu(o.merge||o.mergeFields?2:0,e,t,i);sf("Data must be an object, but it was:",a,r);let u=nf(r,a),h,d;if(o.merge)h=new Ue(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){let p=[];for(let E of o.mergeFields){let b=eI(e,E,t);if(!a.contains(b))throw new V(R.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);nI(p,b)||p.push(b)}h=new Ue(p),d=a.fieldTransforms.filter(E=>h.covers(E.field))}else h=null,d=a.fieldTransforms;return new Nc(new ke(u),h,d)}function tf(n,e){if(rf(n=ce(n)))return sf("Unsupported field value:",e,n),nf(n,e);if(n instanceof ls)return function(r,i){if(!ef(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);let o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){let o=[],a=0;for(let u of r){let h=tf(u,i.bu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=ce(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return U_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let o=de.fromDate(r);return{timestampValue:Wi(i.serializer,o)}}if(r instanceof de){let o=new de(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wi(i.serializer,o)}}if(r instanceof br)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Tr)return{bytesValue:Ad(i.serializer,r._byteString)};if(r instanceof Te){let o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:zc(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Yc(r)}`)}(n,e)}function nf(n,e){let t={};return nd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):An(n,(r,i)=>{let o=tf(i,e.pu(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function rf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof de||n instanceof br||n instanceof Tr||n instanceof Te||n instanceof ls)}function sf(n,e,t){if(!rf(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){let r=Yc(t);throw r==="an object"?e.Du(n+" a custom object"):e.Du(n+" "+r)}}function eI(n,e,t){if((e=ce(e))instanceof Ar)return e._internalPath;if(typeof e=="string")return of(n,e);throw hs("Field path arguments must be of type string or ",n,!1,void 0,t)}var tI=new RegExp("[~\\*/\\[\\]]");function of(n,e,t){if(e.search(tI)>=0)throw hs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ar(...e.split("."))._internalPath}catch{throw hs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function hs(n,e,t,r,i){let o=r&&!r.isEmpty(),a=i!==void 0,u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new V(R.INVALID_ARGUMENT,u+n+h)}function nI(n,e){return n.some(t=>t.isEqual(e))}var ds=class{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Te(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new xc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(af("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},xc=class extends ds{data(){return super.data()}};function af(n,e){return typeof e=="string"?of(n,e):e instanceof Ar?e._internalPath:e._delegate._internalPath}function rI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var Vc=class{convertValue(e,t="none"){switch(Bt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(It(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw M()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return An(e,(i,o)=>{r[i]=this.convertValue(o,t)}),r}convertGeoPoint(e){return new br(ee(e.latitude),ee(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=Uc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(gr(e));default:return null}}convertTimestamp(e){let t=rt(e);return new de(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=te.fromString(e);J(Dd(r));let i=new ji(r.get(1),r.get(3)),o=new L(r.popFirst(5));return i.isEqual(t)||nt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}};function iI(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}var Ft=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},fs=class extends ds{constructor(e,t,r,i,o,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new un(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(af("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},un=class extends fs{data(e={}){return super.data(e)}},Lc=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Ft(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new un(this._firestore,this._userDataWriter,r.key,r,new Ft(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{let h=new un(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Ft(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{let h=new un(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Ft(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter),d=-1,p=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:sI(u.type),doc:h,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function sI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}function cf(n){n=tt(n,Te);let e=tt(n.firestore,Et);return Wy(Xc(e),n._key).then(t=>ff(e,n,t))}var ps=class extends Vc{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tr(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new Te(this.firestore,null,t)}};function uf(n,e,t){n=tt(n,Te);let r=tt(n.firestore,Et),i=iI(n.converter,e,t);return df(r,[Zy(Xy(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,_t.none())])}function lf(n){return df(tt(n.firestore,Et),[new yr(n._key,_t.none())])}function hf(n,...e){var t,r,i;n=ce(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||td(e[a])||(o=e[a],a++);let u={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(td(e[a])){let E=e[a];e[a]=(t=E.next)===null||t===void 0?void 0:t.bind(E),e[a+1]=(r=E.error)===null||r===void 0?void 0:r.bind(E),e[a+2]=(i=E.complete)===null||i===void 0?void 0:i.bind(E)}let h,d,p;if(n instanceof Te)d=tt(n.firestore,Et),p=gs(n._key.path),h={next:E=>{e[a]&&e[a](ff(d,n,E))},error:e[a+1],complete:e[a+2]};else{let E=tt(n,us);d=tt(E.firestore,Et),p=E._query;let b=new ps(d);h={next:S=>{e[a]&&e[a](new Lc(d,b,E,S))},error:e[a+1],complete:e[a+2]},rI(n._query)}return function(b,S,N,x){let D=new as(x),q=new rs(S,D,N);return b.asyncQueue.enqueueAndForget(async()=>Ud(await Cc(b),q)),()=>{D.$a(),b.asyncQueue.enqueueAndForget(async()=>qd(await Cc(b),q))}}(Xc(d),p,u,h)}function df(n,e){return function(r,i){let o=new qe;return r.asyncQueue.enqueueAndForget(async()=>My(await Hy(r),i,o)),o.promise}(Xc(n),e)}function ff(n,e,t){let r=t.docs.get(e._key),i=new ps(n);return new fs(n,i,e._key,r,new Ft(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){Tn=i})(ft),dt(new Re("firestore",(r,{instanceIdentifier:i,options:o})=>{let a=r.getProvider("app").getImmediate(),u=new Et(new ua(r.getProvider("auth-internal")),new fa(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new V(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ji(d.options.projectId,p)}(a,i),a);return o=Object.assign({useFetchStreams:t},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Ce(Rh,"4.6.3",e),Ce(Rh,"4.6.3","esm2017")})();return Zf(oI);})();
/*! Bundled license information:

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
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
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
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
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
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
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
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
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
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
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
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
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

firebase/app/dist/esm/index.esm.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)
  (**
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
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)
  (**
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
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
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
   *)
  (**
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
   *)

@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
  *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2018 Google LLC
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2018 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
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
   *)
*/
