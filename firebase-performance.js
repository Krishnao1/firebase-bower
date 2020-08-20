!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).firebase)}(this,function(Ue){"use strict";try{(function(){Ue=Ue&&Object.prototype.hasOwnProperty.call(Ue,"default")?Ue.default:Ue;var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};var u=function(){return(u=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function h(t,a,s,c){return new(s=s||Promise)(function(n,e){function r(t){try{o(c.next(t))}catch(t){e(t)}}function i(t){try{o(c.throw(t))}catch(t){e(t)}}function o(t){var e;t.done?n(t.value):((e=t.value)instanceof s?e:new s(function(t){t(e)})).then(r,i)}o((c=c.apply(t,a||[])).next())})}function d(n,r){var i,o,a,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},t={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,o&&(a=2&e[0]?o.return:e[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,e[1])).done)return a;switch(o=0,a&&(e=[2&e[0],a.value]),e[0]){case 0:case 1:a=e;break;case 4:return s.label++,{value:e[1],done:!1};case 5:s.label++,o=e[1],e=[0];continue;case 7:e=s.ops.pop(),s.trys.pop();continue;default:if(!(a=0<(a=s.trys).length&&a[a.length-1])&&(6===e[0]||2===e[0])){s=0;continue}if(3===e[0]&&(!a||e[1]>a[0]&&e[1]<a[3])){s.label=e[1];break}if(6===e[0]&&s.label<a[1]){s.label=a[1],a=e;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(e);break}a[2]&&s.ops.pop(),s.trys.pop();continue}e=r.call(n,s)}catch(t){e=[6,t],o=0}finally{i=a=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}}function s(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function r(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),a=[];try{for(;(void 0===e||0<e--)&&!(r=o.next()).done;)a.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}(arguments[e]));return t}function o(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),i=0,e=0;e<n;e++)for(var o=arguments[e],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}var i,t,e,a="FirebaseError",g=(i=Error,n(t=l,e=i),t.prototype=null===e?Object.create(e):(c.prototype=e.prototype,new c),l);function c(){this.constructor=t}function l(t,e){var n=i.call(this,e)||this;return n.code=t,n.name=a,Object.setPrototypeOf(n,l.prototype),Error.captureStackTrace&&Error.captureStackTrace(n,f.prototype.create),n}var f=(p.prototype.create=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];for(var r,i=e[0]||{},o=this.service+"/"+t,a=this.errors[t],s=a?(r=i,a.replace(v,function(t,e){var n=r[e];return null!=n?String(n):"<"+e+"?>"})):"Error",c=this.serviceName+": "+s+" ("+o+").",u=new g(o,c),l=0,f=Object.keys(i);l<f.length;l++){var p=f[l];"_"!==p.slice(-1)&&(p in u&&console.warn('Overwriting FirebaseError base field "'+p+'" can cause unexpected behavior.'),u[p]=i[p])}return u},p);function p(t,e,n){this.service=t,this.serviceName=e,this.errors=n}var v=/\{\$([^}]+)}/g,m=(y.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},y.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},y.prototype.setServiceProps=function(t){return this.serviceProps=t,this},y);function y(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}function b(n){return new Promise(function(t,e){n.onsuccess=function(){t(n.result)},n.onerror=function(){e(n.error)}})}function _(n,r,i){var o,t=new Promise(function(t,e){b(o=n[r].apply(n,i)).then(t,e)});return t.request=o,t}function w(t,n,e){e.forEach(function(e){Object.defineProperty(t.prototype,e,{get:function(){return this[n][e]},set:function(t){this[n][e]=t}})})}function I(e,n,r,t){t.forEach(function(t){t in r.prototype&&(e.prototype[t]=function(){return _(this[n],t,arguments)})})}function S(e,n,r,t){t.forEach(function(t){t in r.prototype&&(e.prototype[t]=function(){return this[n][t].apply(this[n],arguments)})})}function E(t,r,e,n){n.forEach(function(n){n in e.prototype&&(t.prototype[n]=function(){return t=this[r],(e=_(t,n,arguments)).then(function(t){if(t)return new A(t,e.request)});var t,e})})}function T(t){this._index=t}function A(t,e){this._cursor=t,this._request=e}function k(t){this._store=t}function O(n){this._tx=n,this.complete=new Promise(function(t,e){n.oncomplete=function(){t()},n.onerror=function(){e(n.error)},n.onabort=function(){e(n.error)}})}function N(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new O(n)}function P(t){this._db=t}w(T,"_index",["name","keyPath","multiEntry","unique"]),I(T,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),E(T,"_index",IDBIndex,["openCursor","openKeyCursor"]),w(A,"_cursor",["direction","key","primaryKey","value"]),I(A,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(n){n in IDBCursor.prototype&&(A.prototype[n]=function(){var e=this,t=arguments;return Promise.resolve().then(function(){return e._cursor[n].apply(e._cursor,t),b(e._request).then(function(t){if(t)return new A(t,e._request)})})})}),k.prototype.createIndex=function(){return new T(this._store.createIndex.apply(this._store,arguments))},k.prototype.index=function(){return new T(this._store.index.apply(this._store,arguments))},w(k,"_store",["name","keyPath","indexNames","autoIncrement"]),I(k,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),E(k,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),S(k,"_store",IDBObjectStore,["deleteIndex"]),O.prototype.objectStore=function(){return new k(this._tx.objectStore.apply(this._tx,arguments))},w(O,"_tx",["objectStoreNames","mode"]),S(O,"_tx",IDBTransaction,["abort"]),N.prototype.createObjectStore=function(){return new k(this._db.createObjectStore.apply(this._db,arguments))},w(N,"_db",["name","version","objectStoreNames"]),S(N,"_db",IDBDatabase,["deleteObjectStore","close"]),P.prototype.transaction=function(){return new O(this._db.transaction.apply(this._db,arguments))},w(P,"_db",["name","version","objectStoreNames"]),S(P,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(o){[k,T].forEach(function(t){o in t.prototype&&(t.prototype[o.replace("open","iterate")]=function(){var t,e=(t=arguments,Array.prototype.slice.call(t)),n=e[e.length-1],r=this._store||this._index,i=r[o].apply(r,e.slice(0,-1));i.onsuccess=function(){n(i.result)}})})}),[T,k].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(t,n){var r=this,i=[];return new Promise(function(e){r.iterateCursor(t,function(t){t?(i.push(t.value),void 0===n||i.length!=n?t.continue():e(i)):e(i)})})})});var R,M="0.4.16",C=1e4,j="w:"+M,B="FIS_v2",D="https://firebaseinstallations.googleapis.com/v1",L=36e5,x=((R={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',R["not-registered"]="Firebase Installation is not registered.",R["installation-not-found"]="Firebase Installation not found.",R["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',R["app-offline"]="Could not process request. Application offline.",R["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",R),U=new f("installations","Installations",x);function q(t){return t instanceof g&&t.code.includes("request-failed")}function F(t){var e=t.projectId;return D+"/projects/"+e+"/installations"}function H(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}function V(r,i){return h(this,void 0,void 0,function(){var e,n;return d(this,function(t){switch(t.label){case 0:return[4,i.json()];case 1:return e=t.sent(),n=e.error,[2,U.create("request-failed",{requestName:r,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})]}})})}function K(t){var e=t.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function W(t,e){var n=e.refreshToken,r=K(t);return r.append("Authorization",B+" "+n),r}function $(n){return h(this,void 0,void 0,function(){var e;return d(this,function(t){switch(t.label){case 0:return[4,n()];case 1:return 500<=(e=t.sent()).status&&e.status<600?[2,n()]:[2,e]}})})}function G(e){return new Promise(function(t){setTimeout(t,e)})}var J=/^[cdef][\w-]{21}$/,z="";function Y(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;var e=function(t){return btoa(String.fromCharCode.apply(String,r(t))).replace(/\+/g,"-").replace(/\//g,"_")}(t).substr(0,22);return J.test(e)?e:z}catch(t){return z}}function Z(t){return t.appName+"!"+t.appId}var Q=new Map;function X(t,e){var n=Z(t);tt(n,e),function(t,e){var n=nt();n&&n.postMessage({key:t,fid:e});rt()}(n,e)}function tt(t,e){var n,r,i=Q.get(t);if(i)try{for(var o=s(i),a=o.next();!a.done;a=o.next()){(0,a.value)(e)}}catch(t){n={error:t}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}var et=null;function nt(){return!et&&"BroadcastChannel"in self&&((et=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(t){tt(t.data.key,t.data.fid)}),et}function rt(){0===Q.size&&et&&(et.close(),et=null)}var it,ot,at,st,ct="firebase-installations-database",ut=1,lt="firebase-installations-store",ft=null;function pt(){var e,t,n;return ft||(e=function(t){switch(t.oldVersion){case 0:t.createObjectStore(lt)}},t=_(indexedDB,"open",[ct,ut]),(n=t.request)&&(n.onupgradeneeded=function(t){e&&e(new N(n.result,t.oldVersion,n.transaction))}),ft=t.then(function(t){return new P(t)})),ft}function ht(a,s){return h(this,void 0,void 0,function(){var e,n,r,i,o;return d(this,function(t){switch(t.label){case 0:return e=Z(a),[4,pt()];case 1:return n=t.sent(),r=n.transaction(lt,"readwrite"),[4,(i=r.objectStore(lt)).get(e)];case 2:return o=t.sent(),[4,i.put(s,e)];case 3:return t.sent(),[4,r.complete];case 4:return t.sent(),o&&o.fid===s.fid||X(a,s.fid),[2,s]}})})}function dt(i){return h(this,void 0,void 0,function(){var e,n,r;return d(this,function(t){switch(t.label){case 0:return e=Z(i),[4,pt()];case 1:return n=t.sent(),[4,(r=n.transaction(lt,"readwrite")).objectStore(lt).delete(e)];case 2:return t.sent(),[4,r.complete];case 3:return t.sent(),[2]}})})}function gt(s,c){return h(this,void 0,void 0,function(){var e,n,r,i,o,a;return d(this,function(t){switch(t.label){case 0:return e=Z(s),[4,pt()];case 1:return n=t.sent(),r=n.transaction(lt,"readwrite"),[4,(i=r.objectStore(lt)).get(e)];case 2:return o=t.sent(),void 0!==(a=c(o))?[3,4]:[4,i.delete(e)];case 3:return t.sent(),[3,6];case 4:return[4,i.put(a,e)];case 5:t.sent(),t.label=6;case 6:return[4,r.complete];case 7:return t.sent(),!a||o&&o.fid===a.fid||X(s,a.fid),[2,a]}})})}function vt(i){return h(this,void 0,void 0,function(){var r,e,n;return d(this,function(t){switch(t.label){case 0:return[4,gt(i,function(t){var e=yt(t||{fid:Y(),registrationStatus:0}),n=function(t,e){{if(0!==e.registrationStatus)return 1===e.registrationStatus?{installationEntry:e,registrationPromise:function(o){return h(this,void 0,void 0,function(){var e,n,r,i;return d(this,function(t){switch(t.label){case 0:return[4,mt(o)];case 1:e=t.sent(),t.label=2;case 2:return 1!==e.registrationStatus?[3,5]:[4,G(100)];case 3:return t.sent(),[4,mt(o)];case 4:return e=t.sent(),[3,2];case 5:return 0!==e.registrationStatus?[3,7]:[4,vt(o)];case 6:return n=t.sent(),r=n.installationEntry,(i=n.registrationPromise)?[2,i]:[2,r];case 7:return[2,e]}})})}(t)}:{installationEntry:e};if(!navigator.onLine){var n=Promise.reject(U.create("app-offline"));return{installationEntry:e,registrationPromise:n}}var r={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=function(r,i){return h(this,void 0,void 0,function(){var e,n;return d(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,7]),[4,function(s,t){var c=t.fid;return h(this,void 0,void 0,function(){var e,n,r,i,o,a;return d(this,function(t){switch(t.label){case 0:return e=F(s),n=K(s),r={fid:c,authVersion:B,appId:s.appId,sdkVersion:j},i={method:"POST",headers:n,body:JSON.stringify(r)},[4,$(function(){return fetch(e,i)})];case 1:return(o=t.sent()).ok?[4,o.json()]:[3,3];case 2:return a=t.sent(),[2,{fid:a.fid||c,registrationStatus:2,refreshToken:a.refreshToken,authToken:H(a.authToken)}];case 3:return[4,V("Create Installation",o)];case 4:throw t.sent()}})})}(r,i)];case 1:return e=t.sent(),[2,ht(r,e)];case 2:return q(n=t.sent())&&409===n.serverCode?[4,dt(r)]:[3,4];case 3:return t.sent(),[3,6];case 4:return[4,ht(r,{fid:i.fid,registrationStatus:0})];case 5:t.sent(),t.label=6;case 6:throw n;case 7:return[2]}})})}(t,r);return{installationEntry:r,registrationPromise:i}}}(i,e);return r=n.registrationPromise,n.installationEntry})];case 1:return(e=t.sent()).fid!==z?[3,3]:(n={},[4,r]);case 2:return[2,(n.installationEntry=t.sent(),n)];case 3:return[2,{installationEntry:e,registrationPromise:r}]}})})}function mt(t){return gt(t,function(t){if(!t)throw U.create("installation-not-found");return yt(t)})}function yt(t){return 1===(e=t).registrationStatus&&e.registrationTime+C<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e}function bt(t,l){var f=t.appConfig,p=t.platformLoggerProvider;return h(this,void 0,void 0,function(){var r,i,o,a,s,c,u;return d(this,function(t){switch(t.label){case 0:return e=f,n=l.fid,r=F(e)+"/"+n+"/authTokens:generate",i=W(f,l),(o=p.getImmediate({optional:!0}))&&i.append("x-firebase-client",o.getPlatformInfoString()),a={installation:{sdkVersion:j}},s={method:"POST",headers:i,body:JSON.stringify(a)},[4,$(function(){return fetch(r,s)})];case 1:return(c=t.sent()).ok?[4,c.json()]:[3,3];case 2:return u=t.sent(),[2,H(u)];case 3:return[4,V("Generate Auth Token",c)];case 4:throw t.sent()}var e,n})})}function _t(s,c){return void 0===c&&(c=!1),h(this,void 0,void 0,function(){var a,e,n;return d(this,function(t){switch(t.label){case 0:return[4,gt(s.appConfig,function(t){if(!It(t))throw U.create("not-registered");var e,n,r,i=t.authToken;if(c||2!==(r=i).requestStatus||function(t){var e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+L}(r)){if(1===i.requestStatus)return a=function(r,i){return h(this,void 0,void 0,function(){var e,n;return d(this,function(t){switch(t.label){case 0:return[4,wt(r.appConfig)];case 1:e=t.sent(),t.label=2;case 2:return 1!==e.authToken.requestStatus?[3,5]:[4,G(100)];case 3:return t.sent(),[4,wt(r.appConfig)];case 4:return e=t.sent(),[3,2];case 5:return 0===(n=e.authToken).requestStatus?[2,_t(r,i)]:[2,n]}})})}(s,c),t;if(!navigator.onLine)throw U.create("app-offline");var o=(e=t,n={requestStatus:1,requestTime:Date.now()},u(u({},e),{authToken:n}));return a=function(i,o){return h(this,void 0,void 0,function(){var e,n,r;return d(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,8]),[4,bt(i,o)];case 1:return e=t.sent(),r=u(u({},o),{authToken:e}),[4,ht(i.appConfig,r)];case 2:return t.sent(),[2,e];case 3:return!q(n=t.sent())||401!==n.serverCode&&404!==n.serverCode?[3,5]:[4,dt(i.appConfig)];case 4:return t.sent(),[3,7];case 5:return r=u(u({},o),{authToken:{requestStatus:0}}),[4,ht(i.appConfig,r)];case 6:t.sent(),t.label=7;case 7:throw n;case 8:return[2]}})})}(s,o),o}return t})];case 1:return e=t.sent(),a?[4,a]:[3,3];case 2:return n=t.sent(),[3,4];case 3:n=e.authToken,t.label=4;case 4:return[2,n]}})})}function wt(t){return gt(t,function(t){if(!It(t))throw U.create("not-registered");var e,n=t.authToken;return 1===(e=n).requestStatus&&e.requestTime+C<Date.now()?u(u({},t),{authToken:{requestStatus:0}}):t})}function It(t){return void 0!==t&&2===t.registrationStatus}function St(e,n){return void 0===n&&(n=!1),h(this,void 0,void 0,function(){return d(this,function(t){switch(t.label){case 0:return[4,function(n){return h(this,void 0,void 0,function(){var e;return d(this,function(t){switch(t.label){case 0:return[4,vt(n)];case 1:return(e=t.sent().registrationPromise)?[4,e]:[3,3];case 2:t.sent(),t.label=3;case 3:return[2]}})})}(e.appConfig)];case 1:return t.sent(),[4,_t(e,n)];case 2:return[2,t.sent().token]}})})}function Et(s,c){return h(this,void 0,void 0,function(){var r,i,o,a;return d(this,function(t){switch(t.label){case 0:return e=s,n=c.fid,r=F(e)+"/"+n,i=W(s,c),o={method:"DELETE",headers:i},[4,$(function(){return fetch(r,o)})];case 1:return(a=t.sent()).ok?[3,3]:[4,V("Delete Installation",a)];case 2:throw t.sent();case 3:return[2]}var e,n})})}function Tt(t,r){var i=t.appConfig;return function(t,e){nt();var n=Z(t),r=Q.get(n);r||(r=new Set,Q.set(n,r)),r.add(e)}(i,r),function(){var t,e,n;t=r,e=Z(i),(n=Q.get(e))&&(n.delete(t),0===n.size&&Q.delete(e),rt())}}function At(t){return U.create("missing-app-config-values",{valueName:t})}function kt(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),i=0,e=0;e<n;e++)for(var o=arguments[e],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}(it=Ue).INTERNAL.registerComponent(new m("installations",function(t){var e=t.getProvider("app").getImmediate(),n={appConfig:function(t){var e,n;if(!t||!t.options)throw At("App Configuration");if(!t.name)throw At("App Name");try{for(var r=s(["projectId","apiKey","appId"]),i=r.next();!i.done;i=r.next()){var o=i.value;if(!t.options[o])throw At(o)}}catch(t){e={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e),platformLoggerProvider:t.getProvider("platform-logger")};return{app:e,getId:function(){return function(i){return h(this,void 0,void 0,function(){var e,n,r;return d(this,function(t){switch(t.label){case 0:return[4,vt(i.appConfig)];case 1:return e=t.sent(),n=e.installationEntry,(r=e.registrationPromise)?r.catch(console.error):_t(i).catch(console.error),[2,n.fid]}})})}(n)},getToken:function(t){return St(n,t)},delete:function(){return function(r){return h(this,void 0,void 0,function(){var e,n;return d(this,function(t){switch(t.label){case 0:return[4,gt(e=r.appConfig,function(t){if(!t||0!==t.registrationStatus)return t})];case 1:if(!(n=t.sent()))return[3,6];if(1!==n.registrationStatus)return[3,2];throw U.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw U.create("app-offline");case 3:return[4,Et(e,n)];case 4:return t.sent(),[4,dt(e)];case 5:t.sent(),t.label=6;case 6:return[2]}})})}(n)},onIdChange:function(t){return Tt(n,t)}}},"PUBLIC")),it.registerVersion("@firebase/installations",M),(st=at=at||{})[st.DEBUG=0]="DEBUG",st[st.VERBOSE=1]="VERBOSE",st[st.INFO=2]="INFO",st[st.WARN=3]="WARN",st[st.ERROR=4]="ERROR",st[st.SILENT=5]="SILENT";function Ot(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(e<t.logLevel)){var i=(new Date).toISOString(),o=Rt[e];if(!o)throw new Error("Attempted to log a message with an invalid logType (value: "+e+")");console[o].apply(console,kt(["["+i+"]  "+t.name+":"],n))}}var Nt={debug:at.DEBUG,verbose:at.VERBOSE,info:at.INFO,warn:at.WARN,error:at.ERROR,silent:at.SILENT},Pt=at.INFO,Rt=((ot={})[at.DEBUG]="log",ot[at.VERBOSE]="log",ot[at.INFO]="info",ot[at.WARN]="warn",ot[at.ERROR]="error",ot),Mt=(Object.defineProperty(Ct.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in at))throw new TypeError('Invalid value "'+t+'" assigned to `logLevel`');this._logLevel=t},enumerable:!1,configurable:!0}),Ct.prototype.setLogLevel=function(t){this._logLevel="string"==typeof t?Nt[t]:t},Object.defineProperty(Ct.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!1,configurable:!0}),Object.defineProperty(Ct.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!1,configurable:!0}),Ct.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,kt([this,at.DEBUG],t)),this._logHandler.apply(this,kt([this,at.DEBUG],t))},Ct.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,kt([this,at.VERBOSE],t)),this._logHandler.apply(this,kt([this,at.VERBOSE],t))},Ct.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,kt([this,at.INFO],t)),this._logHandler.apply(this,kt([this,at.INFO],t))},Ct.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,kt([this,at.WARN],t)),this._logHandler.apply(this,kt([this,at.WARN],t))},Ct.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,kt([this,at.ERROR],t)),this._logHandler.apply(this,kt([this,at.ERROR],t))},Ct);function Ct(t){this.name=t,this._logLevel=Pt,this._logHandler=Ot,this._userLogHandler=null}var jt,Bt,Dt,Lt="0.4.0",xt="FB-PERF-TRACE-MEASURE",Ut="@firebase/performance/config",qt="@firebase/performance/configexpire",Ft="Performance",Ht=((jt={})["trace started"]="Trace {$traceName} was started before.",jt["trace stopped"]="Trace {$traceName} is not running.",jt["no window"]="Window is not available.",jt["no app id"]="App id is not available.",jt["no project id"]="Project id is not available.",jt["no api key"]="Api key is not available.",jt["invalid cc log"]="Attempted to queue invalid cc event",jt["FB not default"]="Performance can only start when Firebase app instance is the default one.",jt["RC response not ok"]="RC response is not ok",jt["invalid attribute name"]="Attribute name {$attributeName} is invalid.",jt["invalid attribute value"]="Attribute value {$attributeValue} is invalid.",jt["invalid custom metric name"]="Custom metric name {$customMetricName} is invalid",jt["invalid String merger input"]="Input for String merger is invalid, contact support team to resolve.",jt),Vt=new f("performance",Ft,Ht),Kt=new Mt(Ft);Kt.logLevel=at.INFO;var Wt,$t=(Gt.prototype.getUrl=function(){return this.windowLocation.href.split("?")[0]},Gt.prototype.mark=function(t){this.performance&&this.performance.mark&&this.performance.mark(t)},Gt.prototype.measure=function(t,e,n){this.performance&&this.performance.measure&&this.performance.measure(t,e,n)},Gt.prototype.getEntriesByType=function(t){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(t):[]},Gt.prototype.getEntriesByName=function(t){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(t):[]},Gt.prototype.getTimeOrigin=function(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)},Gt.prototype.requiredApisAvailable=function(){return fetch&&Promise&&this.navigator&&this.navigator.cookieEnabled?"indexedDB"in self&&null!==indexedDB||(Kt.info("IndexedDB is not supported by current browswer"),!1):(Kt.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1)},Gt.prototype.setupObserver=function(t,i){this.PerformanceObserver&&new this.PerformanceObserver(function(t){for(var e=0,n=t.getEntries();e<n.length;e++){var r=n[e];i(r)}}).observe({entryTypes:[t]})},Gt.getInstance=function(){return void 0===Bt&&(Bt=new Gt(Dt)),Bt},Gt);function Gt(t){if(!(this.window=t))throw Vt.create("no window");this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay)}function Jt(t,e){var n=t.length-e.length;if(n<0||1<n)throw Vt.create("invalid String merger input");for(var r=[],i=0;i<t.length;i++)r.push(t.charAt(i)),e.length>i&&r.push(e.charAt(i));return r.join("")}var zt,Yt,Zt,Qt=(Xt.prototype.getAppId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.appId;if(!t)throw Vt.create("no app id");return t},Xt.prototype.getProjectId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.projectId;if(!t)throw Vt.create("no project id");return t},Xt.prototype.getApiKey=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.apiKey;if(!t)throw Vt.create("no api key");return t},Xt.prototype.getFlTransportFullUrl=function(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)},Xt.getInstance=function(){return void 0===Wt&&(Wt=new Xt),Wt},Xt);function Xt(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=Jt("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=Jt("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}(Zt=Yt=Yt||{})[Zt.UNKNOWN=0]="UNKNOWN",Zt[Zt.VISIBLE=1]="VISIBLE",Zt[Zt.HIDDEN=2]="HIDDEN";var te=["firebase_","google_","ga_"],ee=new RegExp("^[a-zA-Z]\\w*$");function ne(){switch($t.getInstance().document.visibilityState){case"visible":return Yt.VISIBLE;case"hidden":return Yt.HIDDEN;default:return Yt.UNKNOWN}}var re="0.0.1",ie={loggingEnabled:!0},oe="FIREBASE_INSTALLATIONS_AUTH";function ae(t){var r,e=function(){var t=$t.getInstance().localStorage;if(!t)return;var e=t.getItem(qt);if(!e||!function(t){return Number(t)>Date.now()}(e))return;var n=t.getItem(Ut);if(!n)return;try{return JSON.parse(n)}catch(t){return}}();return e?(ce(e),Promise.resolve()):(r=t,function(){var t=Qt.getInstance().installationsService.getToken();return t.then(function(t){}),t}().then(function(t){var e="https://firebaseremoteconfig.googleapis.com/v1/projects/"+Qt.getInstance().getProjectId()+"/namespaces/fireperf:fetch?key="+Qt.getInstance().getApiKey(),n=new Request(e,{method:"POST",headers:{Authorization:oe+" "+t},body:JSON.stringify({app_instance_id:r,app_instance_id_token:t,app_id:Qt.getInstance().getAppId(),app_version:Lt,sdk_version:re})});return fetch(n).then(function(t){if(t.ok)return t.json();throw Vt.create("RC response not ok")})}).catch(function(){Kt.info(se)}).then(ce).then(function(t){var e=$t.getInstance().localStorage;if(!t||!e)return;e.setItem(Ut,JSON.stringify(t)),e.setItem(qt,String(Date.now()+60*Qt.getInstance().configTimeToLive*60*1e3))},function(){}))}var se="Could not fetch config, will use default configs";function ce(t){if(!t)return t;var e=Qt.getInstance(),n=t.entries||{};return e.loggingEnabled=void 0!==n.fpr_enabled?"true"===String(n.fpr_enabled):ie.loggingEnabled,n.fpr_log_source&&(e.logSource=Number(n.fpr_log_source)),n.fpr_log_endpoint_url&&(e.logEndPointUrl=n.fpr_log_endpoint_url),n.fpr_log_transport_key&&(e.transportKey=n.fpr_log_transport_key),void 0!==n.fpr_vc_network_request_sampling_rate&&(e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate)),void 0!==n.fpr_vc_trace_sampling_rate&&(e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate)),e.logTraceAfterSampling=ue(e.tracesSamplingRate),e.logNetworkAfterSampling=ue(e.networkRequestsSamplingRate),t}function ue(t){return Math.random()<=t}var le,fe=1;function pe(){return fe=2,le=le||function(){var n=$t.getInstance().document;return new Promise(function(t){var e;n&&"complete"!==n.readyState?(e=function(){"complete"===n.readyState&&(n.removeEventListener("readystatechange",e),t())},n.addEventListener("readystatechange",e)):t()})}().then(function(){return(t=Qt.getInstance().installationsService.getId()).then(function(t){zt=t}),t;var t}).then(ae).then(he,he)}function he(){fe=3}var de,ge=1e4,ve=5500,me=3,ye=me,be=[],_e=!1;function we(t){setTimeout(function(){if(0!==ye)return be.length?void function(){var t=o(be);be=[];var e=t.map(function(t){return{source_extension_json_proto3:t.message,event_time_ms:String(t.eventTime)}});(function(t,i){return function(t){var e=Qt.getInstance().getFlTransportFullUrl();return fetch(e,{method:"POST",body:JSON.stringify(t)})}(t).then(function(t){return t.ok||Kt.info("Call to Firebase backend failed."),t.json()}).then(function(t){var e=Number(t.nextRequestWaitMillis),n=ge;isNaN(e)||(n=Math.max(e,n));var r=t.logResponseDetails;Array.isArray(r)&&0<r.length&&"RETRY_REQUEST_LATER"===r[0].responseAction&&(be=o(i,be),Kt.info("Retry transport request later.")),ye=me,we(n)})})({request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:Qt.getInstance().logSource,log_event:e},t).catch(function(){be=o(t,be),ye--,Kt.info("Tries left: "+ye+"."),we(ge)})}():we(ge)},t)}function Ie(n){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];!function(t){if(!t.eventTime||!t.message)throw Vt.create("invalid cc log");be=o(be,[t])}({message:n.apply(void 0,t),eventTime:Date.now()})}}function Se(t,e){(de=de||Ie(Ae))(t,e)}function Ee(t){var e=Qt.getInstance();!e.instrumentationEnabled&&t.isAuto||(e.dataCollectionEnabled||t.isAuto)&&$t.getInstance().requiredApisAvailable()&&(t.isAuto&&ne()!==Yt.VISIBLE||e.loggingEnabled&&e.logTraceAfterSampling&&(3===fe?Te(t):pe().then(function(){return Te(t)},function(){return Te(t)})))}function Te(t){zt&&setTimeout(function(){return Se(t,1)},0)}function Ae(t,e){return 0===e?(r={url:(n=t).url,http_method:n.httpMethod||0,http_response_code:200,response_payload_bytes:n.responsePayloadBytes,client_start_time_us:n.startTimeUs,time_to_response_initiated_us:n.timeToResponseInitiatedUs,time_to_response_completed_us:n.timeToResponseCompletedUs},i={application_info:ke(),network_request_metric:r},JSON.stringify(i)):function(t){var e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs};0!==Object.keys(t.counters).length&&(e.counters=t.counters);var n=t.getAttributes();0!==Object.keys(n).length&&(e.custom_attributes=n);var r={application_info:ke(),trace_metric:e};return JSON.stringify(r)}(t);var n,r,i}function ke(){return{google_app_id:Qt.getInstance().getAppId(),app_instance_id:zt,web_app_info:{sdk_version:Lt,page_url:$t.getInstance().getUrl(),service_worker_status:"serviceWorker"in(t=$t.getInstance().navigator)?t.serviceWorker.controller?2:3:1,visibility_state:ne(),effective_connection_type:function(){var t=$t.getInstance().navigator.connection;switch(t&&t.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}()},application_process_state:0};var t}var Oe=["_fp","_fcp","_fid"];var Ne=(Pe.prototype.start=function(){if(1!==this.state)throw Vt.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2},Pe.prototype.stop=function(){if(2!==this.state)throw Vt.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),Ee(this)},Pe.prototype.record=function(t,e,n){if(this.durationUs=Math.floor(1e3*e),this.startTimeUs=Math.floor(1e3*t),n&&n.attributes&&(this.customAttributes=u({},n.attributes)),n&&n.metrics)for(var r=0,i=Object.keys(n.metrics);r<i.length;r++){var o=i[r];isNaN(Number(n.metrics[o]))||(this.counters[o]=Number(Math.floor(n.metrics[o])))}Ee(this)},Pe.prototype.incrementMetric=function(t,e){void 0===e&&(e=1),void 0===this.counters[t]?this.putMetric(t,e):this.putMetric(t,this.counters[t]+e)},Pe.prototype.putMetric=function(t,e){if(i=t,o=this.name,0===i.length||100<i.length||!(o&&o.startsWith("_wt_")&&-1<Oe.indexOf(i))&&i.startsWith("_"))throw Vt.create("invalid custom metric name",{customMetricName:t});var n,r,i,o;this.counters[t]=(n=e,(r=Math.floor(n))<n&&Kt.info("Metric value should be an Integer, setting the value as : "+r+"."),r)},Pe.prototype.getMetric=function(t){return this.counters[t]||0},Pe.prototype.putAttribute=function(t,e){var n,r,i=!(0===(n=t).length||40<n.length||te.some(function(t){return n.startsWith(t)})||!n.match(ee)),o=0!==(r=e).length&&r.length<=100;if(i&&o)this.customAttributes[t]=e;else{if(!i)throw Vt.create("invalid attribute name",{attributeName:t});if(!o)throw Vt.create("invalid attribute value",{attributeValue:e})}},Pe.prototype.getAttribute=function(t){return this.customAttributes[t]},Pe.prototype.removeAttribute=function(t){void 0!==this.customAttributes[t]&&delete this.customAttributes[t]},Pe.prototype.getAttributes=function(){return u({},this.customAttributes)},Pe.prototype.setStartTime=function(t){this.startTimeUs=t},Pe.prototype.setDuration=function(t){this.durationUs=t},Pe.prototype.calculateTraceMetrics=function(){var t=this.api.getEntriesByName(this.traceMeasure),e=t&&t[0];e&&(this.durationUs=Math.floor(1e3*e.duration),this.startTimeUs=Math.floor(1e3*(e.startTime+this.api.getTimeOrigin())))},Pe.createOobTrace=function(t,e,n){var r,i,o,a,s=$t.getInstance().getUrl();s&&(r=new Pe("_wt_"+s,!0),i=Math.floor(1e3*$t.getInstance().getTimeOrigin()),r.setStartTime(i),t&&t[0]&&(r.setDuration(Math.floor(1e3*t[0].duration)),r.putMetric("domInteractive",Math.floor(1e3*t[0].domInteractive)),r.putMetric("domContentLoadedEventEnd",Math.floor(1e3*t[0].domContentLoadedEventEnd)),r.putMetric("loadEventEnd",Math.floor(1e3*t[0].loadEventEnd))),e&&((o=e.find(function(t){return"first-paint"===t.name}))&&o.startTime&&r.putMetric("_fp",Math.floor(1e3*o.startTime)),(a=e.find(function(t){return"first-contentful-paint"===t.name}))&&a.startTime&&r.putMetric("_fcp",Math.floor(1e3*a.startTime)),n&&r.putMetric("_fid",Math.floor(1e3*n))),Ee(r))},Pe.createUserTimingTrace=function(t){Ee(new Pe(t,!1,t))},Pe);function Pe(t,e,n){void 0===e&&(e=!1),this.name=t,this.isAuto=e,this.state=1,this.customAttributes={},this.counters={},this.api=$t.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark="FB-PERF-TRACE-START-"+this.randomId+"-"+this.name,this.traceStopMark="FB-PERF-TRACE-STOP-"+this.randomId+"-"+this.name,this.traceMeasure=n||xt+"-"+this.randomId+"-"+this.name,n&&this.calculateTraceMetrics())}function Re(t){var e,n,r,i,o,a,s,c,u,l,f=t;f&&void 0!==f.responseStart&&(e=$t.getInstance().getTimeOrigin(),n=Math.floor(1e3*(f.startTime+e)),r=f.responseStart?Math.floor(1e3*(f.responseStart-f.startTime)):void 0,i=Math.floor(1e3*(f.responseEnd-f.startTime)),o={url:f.name&&f.name.split("?")[0],responsePayloadBytes:f.transferSize,startTimeUs:n,timeToResponseInitiatedUs:r,timeToResponseCompletedUs:i},a=o,(l=Qt.getInstance()).instrumentationEnabled&&(s=a.url,c=l.logEndPointUrl.split("?")[0],u=l.flTransportEndpointUrl.split("?")[0],s!==c&&s!==u&&l.loggingEnabled&&l.logNetworkAfterSampling&&setTimeout(function(){return Se(a,0)},0)))}var Me=5e3;function Ce(){zt&&(setTimeout(function(){var t=$t.getInstance(),e=t.getEntriesByType("navigation"),n=t.getEntriesByType("paint");{var r;t.onFirstInputDelay?(r=setTimeout(function(){Ne.createOobTrace(e,n),r=void 0},Me),t.onFirstInputDelay(function(t){r&&(clearTimeout(r),Ne.createOobTrace(e,n,t))})):Ne.createOobTrace(e,n)}},0),setTimeout(function(){for(var t=$t.getInstance(),e=t.getEntriesByType("resource"),n=0,r=e;n<r.length;n++){Re(r[n])}t.setupObserver("resource",Re)},0),setTimeout(function(){for(var t=$t.getInstance(),e=t.getEntriesByType("measure"),n=0,r=e;n<r.length;n++){je(r[n])}t.setupObserver("measure",je)},0))}function je(t){var e=t.name;e.substring(0,xt.length)!==xt&&Ne.createUserTimingTrace(e)}var Be=(De.prototype.trace=function(t){return new Ne(t)},Object.defineProperty(De.prototype,"instrumentationEnabled",{get:function(){return Qt.getInstance().instrumentationEnabled},set:function(t){Qt.getInstance().instrumentationEnabled=t},enumerable:!1,configurable:!0}),Object.defineProperty(De.prototype,"dataCollectionEnabled",{get:function(){return Qt.getInstance().dataCollectionEnabled},set:function(t){Qt.getInstance().dataCollectionEnabled=t},enumerable:!1,configurable:!0}),De);function De(t){this.app=t,$t.getInstance().requiredApisAvailable()&&new Promise(function(t,e){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=window.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||window.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}).then(function(t){t&&(_e||(we(ve),_e=!0),pe().then(Ce,Ce))}).catch(function(t){Kt.info("Environment doesn't support IndexedDB: "+t)})}var Le;function xe(t,e){if("[DEFAULT]"!==t.name)throw Vt.create("FB not default");if("undefined"==typeof window)throw Vt.create("no window");return Dt=window,Qt.getInstance().firebaseAppInstance=t,Qt.getInstance().installationsService=e,new Be(t)}(Le=Ue).INTERNAL.registerComponent(new m("performance",function(t){var e=t.getProvider("app").getImmediate(),n=t.getProvider("installations").getImmediate();return xe(e,n)},"PUBLIC")),Le.registerVersion("@firebase/performance","0.4.0")}).apply(this,arguments)}catch(t){throw console.error(t),new Error("Cannot instantiate firebase-performance.js - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-performance.js.map
