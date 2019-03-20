/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.3 (2019-03-19)
 */
!function(f){"use strict";var r=function(t){var e=t,n=function(){return e};return{get:n,set:function(t){e=t},clone:function(){return r(n())}}},t=tinymce.util.Tools.resolve("tinymce.PluginManager"),a=tinymce.util.Tools.resolve("tinymce.util.Tools");function n(t,e){return i(f.document.createElement("canvas"),t,e)}function o(t){return t.getContext("2d")}function i(t,e,n){return t.width=e,t.height=n,t}var e,u,c,s,l={create:n,clone:function De(t){var e;return o(e=n(t.width,t.height)).drawImage(t,0,0),e},resize:i,get2dContext:o,get3dContext:function je(t){var e=null;try{e=t.getContext("webgl")||t.getContext("experimental-webgl")}catch(n){}return e||(e=null),e}},d={getWidth:function Ue(t){return t.naturalWidth||t.width},getHeight:function Be(t){return t.naturalHeight||t.height}},h=window.Promise?window.Promise:function(){var t=function(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],s(t,r(o,this),r(u,this))},e=t.immediateFn||"function"==typeof window.setImmediate&&window.setImmediate||function(t){f.setTimeout(t,1)};function r(t,e){return function(){t.apply(e,arguments)}}var n=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function i(r){var o=this;null!==this._state?e(function(){var t=o._state?r.onFulfilled:r.onRejected;if(null!==t){var e;try{e=t(o._value)}catch(n){return void r.reject(n)}r.resolve(e)}else(o._state?r.resolve:r.reject)(o._value)}):this._deferreds.push(r)}function o(t){try{if(t===this)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var e=t.then;if("function"==typeof e)return void s(r(e,t),r(o,this),r(u,this))}this._state=!0,this._value=t,a.call(this)}catch(n){u.call(this,n)}}function u(t){this._state=!1,this._value=t,a.call(this)}function a(){for(var t=0,e=this._deferreds.length;t<e;t++)i.call(this,this._deferreds[t]);this._deferreds=null}function c(t,e,n,r){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.resolve=n,this.reject=r}function s(t,e,n){var r=!1;try{t(function(t){r||(r=!0,e(t))},function(t){r||(r=!0,n(t))})}catch(o){if(r)return;r=!0,n(o)}}return t.prototype["catch"]=function(t){return this.then(null,t)},t.prototype.then=function(n,r){var o=this;return new t(function(t,e){i.call(o,new c(n,r,t,e))})},t.all=function(){var c=Array.prototype.slice.call(1===arguments.length&&n(arguments[0])?arguments[0]:arguments);return new t(function(o,i){if(0===c.length)return o([]);var u=c.length;function a(e,t){try{if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if("function"==typeof n)return void n.call(t,function(t){a(e,t)},i)}c[e]=t,0==--u&&o(c)}catch(r){i(r)}}for(var t=0;t<c.length;t++)a(t,c[t])})},t.resolve=function(e){return e&&"object"==typeof e&&e.constructor===t?e:new t(function(t){t(e)})},t.reject=function(n){return new t(function(t,e){e(n)})},t.race=function(o){return new t(function(t,e){for(var n=0,r=o.length;n<r;n++)o[n].then(t,e)})},t}(),v=function(t){return function(){return t}},m=v(!1),g=v(!0),p=m,y=g,w=function(){return b},b=(s={fold:function(t,e){return t()},is:p,isSome:p,isNone:y,getOr:c=function(t){return t},getOrThunk:u=function(t){return t()},getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:c,orThunk:u,map:w,ap:w,each:function(){},bind:w,flatten:w,exists:p,forall:y,filter:w,equals:e=function(t){return t.isNone()},equals_:e,toArray:function(){return[]},toString:v("none()")},Object.freeze&&Object.freeze(s),s),T=function(n){var t=function(){return n},e=function(){return o},r=function(t){return t(n)},o={fold:function(t,e){return e(n)},is:function(t){return n===t},isSome:y,isNone:p,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:e,orThunk:e,map:function(t){return T(t(n))},ap:function(t){return t.fold(w,function(t){return T(t(n))})},each:function(t){t(n)},bind:r,flatten:t,exists:r,forall:r,filter:function(t){return t(n)?o:b},equals:function(t){return t.is(n)},equals_:function(t,e){return t.fold(p,function(t){return e(n,t)})},toArray:function(){return[n]},toString:function(){return"some("+n+")"}};return o},O={some:T,none:w,from:function(t){return null===t||t===undefined?b:T(t)}},I="undefined"!=typeof f.window?f.window:Function("return this;")(),x=function(t,e){return function(t,e){for(var n=e!==undefined&&null!==e?e:I,r=0;r<t.length&&n!==undefined&&null!==n;++r)n=n[t[r]];return n}(t.split("."),e)},C={getOrDie:function(t,e){var n=x(t,e);if(n===undefined||null===n)throw t+" not available on this browser";return n}};function E(){return new(C.getOrDie("FileReader"))}var S={atob:function(t){return C.getOrDie("atob")(t)},requestAnimationFrame:function(t){C.getOrDie("requestAnimationFrame")(t)}};function N(a){return new h(function(t,e){var n=f.URL.createObjectURL(a),r=new f.Image,o=function(){r.removeEventListener("load",i),r.removeEventListener("error",u)};function i(){o(),t(r)}function u(){o(),e("Unable to load data of type "+a.type+": "+n)}r.addEventListener("load",i),r.addEventListener("error",u),r.src=n,r.complete&&i()})}function A(r){return new h(function(t,n){var e=new f.XMLHttpRequest;e.open("GET",r,!0),e.responseType="blob",e.onload=function(){200==this.status&&t(this.response)},e.onerror=function(){var t,e=this;n(0===this.status?((t=new Error("No access to download image")).code=18,t.name="SecurityError",t):new Error("Error "+e.status+" downloading image"))},e.send()})}function _(t){var e=t.split(","),n=/data:([^;]+)/.exec(e[0]);if(!n)return O.none();for(var r,o=n[1],i=e[1],u=S.atob(i),a=u.length,c=Math.ceil(a/1024),s=new Array(c),f=0;f<c;++f){for(var l=1024*f,d=Math.min(l+1024,a),h=new Array(d-l),m=l,g=0;m<d;++g,++m)h[g]=u[m].charCodeAt(0);s[f]=(r=h,new(C.getOrDie("Uint8Array"))(r))}return O.some(function v(t,e){return new(C.getOrDie("Blob"))(t,e)}(s,{type:o}))}function R(n){return new h(function(t,e){_(n).fold(function(){e("uri is not base64: "+n)},t)})}function D(n){return new h(function(t){var e=E();e.onloadend=function(){t(e.result)},e.readAsDataURL(n)})}var j={blobToImage:N,imageToBlob:function Me(t){var e=t.src;return 0===e.indexOf("data:")?R(e):A(e)},blobToArrayBuffer:function Le(n){return new h(function(t){var e=E();e.onloadend=function(){t(e.result)},e.readAsArrayBuffer(n)})},blobToDataUri:D,blobToBase64:function ke(t){return D(t).then(function(t){return t.split(",")[1]})},dataUriToBlobSync:_,canvasToBlob:function Pe(t,n,r){return n=n||"image/png",f.HTMLCanvasElement.prototype.toBlob?new h(function(e){t.toBlob(function(t){e(t)},n,r)}):R(t.toDataURL(n,r))},canvasToDataURL:function Fe(t,e,n){return e=e||"image/png",t.then(function(t){return t.toDataURL(e,n)})},blobToCanvas:function He(t){return N(t).then(function(t){var e;return function n(t){f.URL.revokeObjectURL(t.src)}(t),e=l.create(d.getWidth(t),d.getHeight(t)),l.get2dContext(e).drawImage(t,0,0),e})},uriToBlob:function ze(t){return 0===t.indexOf("blob:")?A(t):0===t.indexOf("data:")?R(t):null}},U=function(t){return j.blobToImage(t)},B=function(t){return j.imageToBlob(t)};function M(t,e,n){var r=e.type;function o(e,n){return t.then(function(t){return j.canvasToDataURL(t,e,n)})}return{getType:v(r),toBlob:function i(){return h.resolve(e)},toDataURL:function u(){return n},toBase64:function a(){return n.split(",")[1]},toAdjustedBlob:function c(e,n){return t.then(function(t){return j.canvasToBlob(t,e,n)})},toAdjustedDataURL:o,toAdjustedBase64:function s(t,e){return o(t,e).then(function(t){return t.split(",")[1]})},toCanvas:function f(){return t.then(l.clone)}}}function L(e){return j.blobToDataUri(e).then(function(t){return M(j.blobToCanvas(e),e,t)})}var k={fromBlob:L,fromCanvas:function qe(e,t){return j.canvasToBlob(e,t).then(function(t){return M(h.resolve(e),t,e.toDataURL())})},fromImage:function Ge(t){return j.imageToBlob(t).then(function(t){return L(t)})},fromBlobAndUrlSync:function(t,e){return M(j.blobToCanvas(t),t,e)}};function P(t,e,n){return n<(t=parseFloat(t))?t=n:t<e&&(t=e),t}var F=[0,.01,.02,.04,.05,.06,.07,.08,.1,.11,.12,.14,.15,.16,.17,.18,.2,.21,.22,.24,.25,.27,.28,.3,.32,.34,.36,.38,.4,.42,.44,.46,.48,.5,.53,.56,.59,.62,.65,.68,.71,.74,.77,.8,.83,.86,.89,.92,.95,.98,1,1.06,1.12,1.18,1.24,1.3,1.36,1.42,1.48,1.54,1.6,1.66,1.72,1.78,1.84,1.9,1.96,2,2.12,2.25,2.37,2.5,2.62,2.75,2.87,3,3.2,3.4,3.6,3.8,4,4.3,4.7,4.9,5,5.5,6,6.5,6.8,7,7.3,7.5,7.8,8,8.4,8.7,9,9.4,9.6,9.8,10];function H(t,e){var n,r,o,i,u=[],a=new Array(10);for(n=0;n<5;n++){for(r=0;r<5;r++)u[r]=e[r+5*n];for(r=0;r<5;r++){for(o=i=0;o<5;o++)i+=t[r+5*o]*u[o];a[r+5*n]=i}}return a}function z(t,n){return n=P(n,0,1),t.map(function(t,e){return e%6==0?t=1-(1-t)*n:t*=n,P(t,0,1)})}var q={identity:function We(){return[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1]},adjust:z,multiply:H,adjustContrast:function $e(t,e){var n;return e=P(e,-1,1),H(t,[(n=(e*=100)<0?127+e/100*127:127*(n=0==(n=e%1)?F[e]:F[Math.floor(e)]*(1-n)+F[Math.floor(e)+1]*n)+127)/127,0,0,0,.5*(127-n),0,n/127,0,0,.5*(127-n),0,0,n/127,0,.5*(127-n),0,0,0,1,0,0,0,0,0,1])},adjustBrightness:function Xe(t,e){return H(t,[1,0,0,0,e=P(255*e,-255,255),0,1,0,0,e,0,0,1,0,e,0,0,0,1,0,0,0,0,0,1])},adjustSaturation:function Ve(t,e){var n;return H(t,[.3086*(1-(n=1+(0<(e=P(e,-1,1))?3*e:e)))+n,.6094*(1-n),.082*(1-n),0,0,.3086*(1-n),.6094*(1-n)+n,.082*(1-n),0,0,.3086*(1-n),.6094*(1-n),.082*(1-n)+n,0,0,0,0,0,1,0,0,0,0,0,1])},adjustHue:function Ye(t,e){var n,r,o,i,u;return e=P(e,-180,180)/180*Math.PI,H(t,[(o=.213)+.787*(n=Math.cos(e))+(r=Math.sin(e))*-o,(i=.715)+n*-i+r*-i,(u=.072)+n*-u+.928*r,0,0,o+n*-o+.143*r,i+n*(1-i)+.14*r,u+n*-u+-.283*r,0,0,o+n*-o+-.787*r,i+n*-i+r*i,u+.928*n+r*u,0,0,0,0,0,1,0,0,0,0,0,1])},adjustColors:function Je(t,e,n,r){return H(t,[e=P(e,0,2),0,0,0,0,0,n=P(n,0,2),0,0,0,0,0,r=P(r,0,2),0,0,0,0,0,1,0,0,0,0,0,1])},adjustSepia:function Ke(t,e){return H(t,z([.393,.769,.189,0,0,.349,.686,.168,0,0,.272,.534,.131,0,0,0,0,0,1,0,0,0,0,0,1],e=P(e,0,1)))},adjustGrayscale:function Qe(t,e){return H(t,z([.33,.34,.33,0,0,.33,.34,.33,0,0,.33,.34,.33,0,0,0,0,0,1,0,0,0,0,0,1],e=P(e,0,1)))}};function G(e,n){return e.toCanvas().then(function(t){return function i(t,e,n){var r,o=l.get2dContext(t);return r=function N(t,e){var n,r,o,i,u,a=t.data,c=e[0],s=e[1],f=e[2],l=e[3],d=e[4],h=e[5],m=e[6],g=e[7],v=e[8],p=e[9],y=e[10],w=e[11],b=e[12],T=e[13],O=e[14],I=e[15],x=e[16],C=e[17],E=e[18],S=e[19];for(u=0;u<a.length;u+=4)n=a[u],r=a[u+1],o=a[u+2],i=a[u+3],a[u]=n*c+r*s+o*f+i*l+d,a[u+1]=n*h+r*m+o*g+i*v+p,a[u+2]=n*y+r*w+o*b+i*T+O,a[u+3]=n*I+r*x+o*C+i*E+S;return t}(o.getImageData(0,0,t.width,t.height),n),o.putImageData(r,0,0),k.fromCanvas(t,e)}(t,e.getType(),n)})}function W(e,n){return e.toCanvas().then(function(t){return function u(t,e,n){var r,o,i=l.get2dContext(t);return r=i.getImageData(0,0,t.width,t.height),o=i.getImageData(0,0,t.width,t.height),o=function T(t,e,n){var r,o,i,u,a,c,s,f,l,d,h,m,g,v,p,y,w;function b(t,e,n){return n<t?t=n:t<e&&(t=e),t}for(i=Math.round(Math.sqrt(n.length)),u=Math.floor(i/2),r=t.data,o=e.data,y=t.width,w=t.height,c=0;c<w;c++)for(a=0;a<y;a++){for(s=f=l=0,h=0;h<i;h++)for(d=0;d<i;d++)m=b(a+d-u,0,y-1),g=b(c+h-u,0,w-1),v=4*(g*y+m),p=n[h*i+d],s+=r[v]*p,f+=r[v+1]*p,l+=r[v+2]*p;o[v=4*(c*y+a)]=b(s,0,255),o[v+1]=b(f,0,255),o[v+2]=b(l,0,255)}return e}(r,o,n),i.putImageData(o,0,0),k.fromCanvas(t,e)}(t,e.getType(),n)})}function $(c){return function(e,n){return e.toCanvas().then(function(t){return function(t,e,n){var r,o,i=l.get2dContext(t),u=new Array(256);for(o=0;o<u.length;o++)u[o]=c(o,n);return r=function a(t,e){var n,r=t.data;for(n=0;n<r.length;n+=4)r[n]=e[r[n]],r[n+1]=e[r[n+1]],r[n+2]=e[r[n+2]];return t}(i.getImageData(0,0,t.width,t.height),u),i.putImageData(r,0,0),k.fromCanvas(t,e)}(t,e.getType(),n)})}}function X(n){return function(t,e){return G(t,n(q.identity(),e))}}function V(e){return function(t){return W(t,e)}}(function Ze(e){return function(t){return G(t,e)}})([-1,0,0,0,255,0,-1,0,0,255,0,0,-1,0,255,0,0,0,1,0]),X(q.adjustBrightness),X(q.adjustHue),X(q.adjustSaturation),X(q.adjustContrast),X(q.adjustGrayscale),X(q.adjustSepia),V([0,-1,0,-1,5,-1,0,-1,0]),V([-2,-1,0,-1,1,1,0,1,2]),$(function(t,e){return 255*Math.pow(t/255,1-e)}),$(function(t,e){return 255*(1-Math.exp(-t/255*e))});var Y,J={scale:function tn(t,e,n){var r=d.getWidth(t),o=d.getHeight(t),i=e/r,u=n/o,a=!1;(i<.5||2<i)&&(i=i<.5?.5:2,a=!0),(u<.5||2<u)&&(u=u<.5?.5:2,a=!0);var c=function f(a,c,s){return new h(function(t){var e=d.getWidth(a),n=d.getHeight(a),r=Math.floor(e*c),o=Math.floor(n*s),i=l.create(r,o),u=l.get2dContext(i);u.drawImage(a,0,0,e,n,0,0,r,o),t(i)})}(t,i,u);return a?c.then(function(t){return tn(t,e,n)}):c}},K={rotate:function en(e,n){return e.toCanvas().then(function(t){return function a(t,e,n){var r=l.create(t.width,t.height),o=l.get2dContext(r),i=0,u=0;return 90!=(n=n<0?360+n:n)&&270!=n||l.resize(r,r.height,r.width),90!=n&&180!=n||(i=r.width),270!=n&&180!=n||(u=r.height),o.translate(i,u),o.rotate(n*Math.PI/180),o.drawImage(t,0,0),k.fromCanvas(r,e)}(t,e.getType(),n)})},flip:function nn(e,n){return e.toCanvas().then(function(t){return function i(t,e,n){var r=l.create(t.width,t.height),o=l.get2dContext(r);return"v"==n?(o.scale(1,-1),o.drawImage(t,0,-r.height)):(o.scale(-1,1),o.drawImage(t,-r.width,0)),k.fromCanvas(r,e)}(t,e.getType(),n)})},crop:function rn(e,n,r,o,i){return e.toCanvas().then(function(t){return function a(t,e,n,r,o,i){var u=l.create(o,i);return l.get2dContext(u).drawImage(t,-n,-r),k.fromCanvas(u,e)}(t,e.getType(),n,r,o,i)})},resize:function on(e,n,r){return e.toCanvas().then(function(t){return J.scale(t,n,r).then(function(t){return k.fromCanvas(t,e.getType())})})}},Q=(function(){function t(t){this.littleEndian=!1,this._dv=new DataView(t)}t.prototype.readByteAt=function(t){return this._dv.getUint8(t)},t.prototype.read=function(t,e){if(t+e>this.length())return null;for(var n=this.littleEndian?0:-8*(e-1),r=0,o=0;r<e;r++)o|=this.readByteAt(t+r)<<Math.abs(n+8*r);return o},t.prototype.BYTE=function(t){return this.read(t,1)},t.prototype.SHORT=function(t){return this.read(t,2)},t.prototype.LONG=function(t){return this.read(t,4)},t.prototype.SLONG=function(t){var e=this.read(t,4);return 2147483647<e?e-4294967296:e},t.prototype.CHAR=function(t){return String.fromCharCode(this.read(t,1))},t.prototype.STRING=function(t,e){return this.asArray("CHAR",t,e).join("")},t.prototype.SEGMENT=function(t,e){var n=this._dv.buffer;switch(arguments.length){case 2:return n.slice(t,t+e);case 1:return n.slice(t);default:return n}},t.prototype.asArray=function(t,e,n){for(var r=[],o=0;o<n;o++)r[o]=this[t](e+o);return r},t.prototype.length=function(){return this._dv?this._dv.byteLength:0}}(),function(t,e){return K.rotate(t,e)}),Z=function(t,e){return K.flip(t,e)},tt=Q,et=function(t){return k.fromBlob(t)},nt=function(){return C.getOrDie("URL")},rt=function(t){return nt().createObjectURL(t)},ot=function(t){nt().revokeObjectURL(t)},it=tinymce.util.Tools.resolve("tinymce.util.Delay"),ut=tinymce.util.Tools.resolve("tinymce.util.Promise"),at=tinymce.util.Tools.resolve("tinymce.util.URI"),ct={getImageSize:function un(t){var e,n;function r(t){return/^[0-9\.]+px$/.test(t)}return e=t.style.width,n=t.style.height,e||n?r(e)&&r(n)?{w:parseInt(e,10),h:parseInt(n,10)}:null:(e=t.width,n=t.height,e&&n?{w:parseInt(e,10),h:parseInt(n,10)}:null)},setImageSize:function an(t,e){var n,r;e&&(n=t.style.width,r=t.style.height,(n||r)&&(t.style.width=e.w+"px",t.style.height=e.h+"px",t.removeAttribute("data-mce-style")),n=t.width,r=t.height,(n||r)&&(t.setAttribute("width",e.w),t.setAttribute("height",e.h)))},getNaturalImageSize:function cn(t){return{w:t.naturalWidth,h:t.naturalHeight}}},st=(Y="function",function(t){return function(t){if(null===t)return"null";var e=typeof t;return"object"===e&&Array.prototype.isPrototypeOf(t)?"array":"object"===e&&String.prototype.isPrototypeOf(t)?"string":e}(t)===Y}),ft=function(t,e){for(var n=0,r=t.length;n<r;n++){var o=t[n];if(e(o,n,t))return O.some(o)}return O.none()};Array.prototype.slice;st(Array.from)&&Array.from;var lt,dt,ht,mt=function(t){return null!==t&&t!==undefined},gt=function(t,e){var n;return n=e.reduce(function(t,e){return mt(t)?t[e]:undefined},t),mt(n)?n:null},vt=function(e){return new ut(function(n){var t=E();t.onload=function(t){var e=t.target;n(e.result)},t.readAsText(e)})},pt=function(r,o,i){return new ut(function(t){var n;(n=function e(){return new(C.getOrDie("XMLHttpRequest"))}()).onreadystatechange=function(){4===n.readyState&&t({status:n.status,blob:this.response})},n.open("GET",r,!0),n.withCredentials=i,a.each(o,function(t,e){n.setRequestHeader(e,t)}),n.responseType="blob",n.send()})},yt=function(t){var e;try{e=JSON.parse(t)}catch(n){}return e},wt=[{code:404,message:"Could not find Image Proxy"},{code:403,message:"Rejected request"},{code:0,message:"Incorrect Image Proxy URL"}],bt=[{type:"key_missing",message:"The request did not include an api key."},{type:"key_not_found",message:"The provided api key could not be found."},{type:"domain_not_trusted",message:"The api key is not valid for the request origins."}],Tt=function(e){return"ImageProxy HTTP error: "+ft(wt,function(t){return e===t.code}).fold(v("Unknown ImageProxy error"),function(t){return t.message})},Ot=function(t){var e=Tt(t);return ut.reject(e)},It=function(e){return ft(bt,function(t){return t.type===e}).fold(v("Unknown service error"),function(t){return t.message})},xt=function(t,e){return vt(e).then(function(t){var e,n,r=(e=yt(t),"ImageProxy Service error: "+((n=gt(e,["error","type"]))?It(n):"Invalid JSON in service error message"));return ut.reject(r)})},Ct=function(t,e){return 400===(n=t)||403===n||500===n?xt(0,e):Ot(t);var n},Et=Ot,St=function(t,e){var n,r,o,i={"Content-Type":"application/json;charset=UTF-8","tiny-api-key":e};return pt((n=t,r=e,o=-1===n.indexOf("?")?"?":"&",/[?&]apiKey=/.test(n)||!r?n:n+o+"apiKey="+encodeURIComponent(r)),i,!1).then(function(t){return t.status<200||300<=t.status?Ct(t.status,t.blob):ut.resolve(t.blob)})},Nt=function(t,e,n){return e?St(t,e):function r(t,e){return pt(t,{},e).then(function(t){return t.status<200||300<=t.status?Et(t.status):ut.resolve(t.blob)})}(t,n)},At=function(t,e){var n=function(t,e){for(var n=0;n<t.length;n++){var r=t[n];if(r.test(e))return r}return undefined}(t,e);if(!n)return{major:0,minor:0};var r=function(t){return Number(e.replace(n,"$"+t))};return Rt(r(1),r(2))},_t=function(){return Rt(0,0)},Rt=function(t,e){return{major:t,minor:e}},Dt={nu:Rt,detect:function(t,e){var n=String(e).toLowerCase();return 0===t.length?_t():At(t,n)},unknown:_t},jt="Firefox",Ut=function(t,e){return function(){return e===t}},Bt=function(t){var e=t.current;return{current:e,version:t.version,isEdge:Ut("Edge",e),isChrome:Ut("Chrome",e),isIE:Ut("IE",e),isOpera:Ut("Opera",e),isFirefox:Ut(jt,e),isSafari:Ut("Safari",e)}},Mt={unknown:function(){return Bt({current:undefined,version:Dt.unknown()})},nu:Bt,edge:v("Edge"),chrome:v("Chrome"),ie:v("IE"),opera:v("Opera"),firefox:v(jt),safari:v("Safari")},Lt="Windows",kt="Android",Pt="Solaris",Ft="FreeBSD",Ht=function(t,e){return function(){return e===t}},zt=function(t){var e=t.current;return{current:e,version:t.version,isWindows:Ht(Lt,e),isiOS:Ht("iOS",e),isAndroid:Ht(kt,e),isOSX:Ht("OSX",e),isLinux:Ht("Linux",e),isSolaris:Ht(Pt,e),isFreeBSD:Ht(Ft,e)}},qt={unknown:function(){return zt({current:undefined,version:Dt.unknown()})},nu:zt,windows:v(Lt),ios:v("iOS"),android:v(kt),linux:v("Linux"),osx:v("OSX"),solaris:v(Pt),freebsd:v(Ft)},Gt=function(t,e){var n=String(e).toLowerCase();return ft(t,function(t){return t.search(n)})},Wt=function(t,n){return Gt(t,n).map(function(t){var e=Dt.detect(t.versionRegexes,n);return{current:t.name,version:e}})},$t=function(t,n){return Gt(t,n).map(function(t){var e=Dt.detect(t.versionRegexes,n);return{current:t.name,version:e}})},Xt=function(t,e){return-1!==t.indexOf(e)},Vt=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,Yt=function(e){return function(t){return Xt(t,e)}},Jt=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(t){return Xt(t,"edge/")&&Xt(t,"chrome")&&Xt(t,"safari")&&Xt(t,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,Vt],search:function(t){return Xt(t,"chrome")&&!Xt(t,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(t){return Xt(t,"msie")||Xt(t,"trident")}},{name:"Opera",versionRegexes:[Vt,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:Yt("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:Yt("firefox")},{name:"Safari",versionRegexes:[Vt,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(t){return(Xt(t,"safari")||Xt(t,"mobile/"))&&Xt(t,"applewebkit")}}],Kt=[{name:"Windows",search:Yt("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(t){return Xt(t,"iphone")||Xt(t,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:Yt("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:Yt("os x"),versionRegexes:[/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:Yt("linux"),versionRegexes:[]},{name:"Solaris",search:Yt("sunos"),versionRegexes:[]},{name:"FreeBSD",search:Yt("freebsd"),versionRegexes:[]}],Qt={browsers:v(Jt),oses:v(Kt)},Zt=function(t){var e,n,r,o,i,u,a,c,s,f,l,d=Qt.browsers(),h=Qt.oses(),m=Wt(d,t).fold(Mt.unknown,Mt.nu),g=$t(h,t).fold(qt.unknown,qt.nu);return{browser:m,os:g,deviceType:(n=m,r=t,o=(e=g).isiOS()&&!0===/ipad/i.test(r),i=e.isiOS()&&!o,u=e.isAndroid()&&3===e.version.major,a=e.isAndroid()&&4===e.version.major,c=o||u||a&&!0===/mobile/i.test(r),s=e.isiOS()||e.isAndroid(),f=s&&!c,l=n.isSafari()&&e.isiOS()&&!1===/safari/i.test(r),{isiPad:v(o),isiPhone:v(i),isTablet:v(c),isPhone:v(f),isTouch:v(s),isAndroid:e.isAndroid,isiOS:e.isiOS,isWebView:v(l)})}},te={detect:(lt=function(){var t=f.navigator.userAgent;return Zt(t)},ht=!1,function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return ht||(ht=!0,dt=lt.apply(null,t)),dt})},ee=function(t){if(null===t||t===undefined)throw new Error("Node cannot be null or undefined");return{dom:v(t)}},ne={fromHtml:function(t,e){var n=(e||f.document).createElement("div");if(n.innerHTML=t,!n.hasChildNodes()||1<n.childNodes.length)throw f.console.error("HTML does not have a single root node",t),new Error("HTML must have a single root node");return ee(n.childNodes[0])},fromTag:function(t,e){var n=(e||f.document).createElement(t);return ee(n)},fromText:function(t,e){var n=(e||f.document).createTextNode(t);return ee(n)},fromDom:ee,fromPoint:function(t,e,n){var r=t.dom();return O.from(r.elementFromPoint(e,n)).map(ee)}},re=(f.Node.ATTRIBUTE_NODE,f.Node.CDATA_SECTION_NODE,f.Node.COMMENT_NODE,f.Node.DOCUMENT_NODE,f.Node.DOCUMENT_TYPE_NODE,f.Node.DOCUMENT_FRAGMENT_NODE,f.Node.ELEMENT_NODE),oe=(f.Node.TEXT_NODE,f.Node.PROCESSING_INSTRUCTION_NODE,f.Node.ENTITY_REFERENCE_NODE,f.Node.ENTITY_NODE,f.Node.NOTATION_NODE,re),ie=(te.detect().browser.isIE(),0),ue=function(t){return te.detect().browser.isIE(),e=ne.fromDom(t),n="img",r=function(t){return function(t,e){var n=t.dom();if(n.nodeType!==oe)return!1;if(n.matches!==undefined)return n.matches(e);if(n.msMatchesSelector!==undefined)return n.msMatchesSelector(e);if(n.webkitMatchesSelector!==undefined)return n.webkitMatchesSelector(e);if(n.mozMatchesSelector!==undefined)return n.mozMatchesSelector(e);throw new Error("Browser lacks native selectors")}(t,n)},ft(e.dom().childNodes,(o=r,i=ne.fromDom,function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return o(i.apply(null,t))})).map(ne.fromDom);var e,n,r,o,i},ae=function(t,e){return t.dom.is(e,"figure")},ce=function(t,e){t.notificationManager.open({text:e,type:"error"})},se=function(t){var e=t.selection.getNode();return ae(t,e)?ue(e):O.some(ne.fromDom(e))},fe=function(t,e){var n=e.src;return 0===n.indexOf("data:")||0===n.indexOf("blob:")||new at(n).host===t.documentBaseURI.host},le=function(t,e){return-1!==a.inArray(t.getParam("imagetools_cors_hosts",[],"string[]"),new at(e.src).host)},de=function(t,e){var n,r,o,i,u=e.src;return le(t,e)?Nt(e.src,null,(r=t,o=e,-1!==a.inArray(r.getParam("imagetools_credentials_hosts",[],"string[]"),new at(o.src).host))):fe(t,e)?B(e):(u=t.getParam("imagetools_proxy"),u+=(-1===u.indexOf("?")?"?":"&")+"url="+encodeURIComponent(e.src),n=(i=t).getParam("api_key",i.getParam("imagetools_api_key","","string"),"string"),Nt(u,n,!1))},he=function(t,e){var n;return(n=t.editorUpload.blobCache.getByUri(e.src))?ut.resolve(n.blob()):de(t,e)},me=function(t){it.clearTimeout(t.get())},ge=function(a,c,s,f,l,d){return c.toBlob().then(function(t){var e,n,r,o,i,u;return r=a.editorUpload.blobCache,e=l.src,a.getParam("images_reuse_filename",!1,"boolean")&&(n=(o=r.getByUri(e))?(e=o.uri(),o.name()):(i=a,(u=e.match(/\/([^\/\?]+)?\.(?:jpeg|jpg|png|gif)(?:\?|$)/i))?i.dom.encode(u[1]):null)),o=r.create({id:"imagetools"+ie++,blob:t,base64:c.toBase64(),uri:e,name:n}),r.add(o),a.undoManager.transact(function(){a.$(l).on("load",function r(){var t,e,n;a.$(l).off("load",r),a.nodeChanged(),s?a.editorUpload.uploadImagesAuto():(me(f),t=a,e=f,n=it.setEditorTimeout(t,function(){t.editorUpload.uploadImagesAuto()},t.getParam("images_upload_timeout",3e4,"number")),e.set(n))}),d&&a.$(l).attr({width:d.w,height:d.h}),a.$(l).attr({src:o.blobUri()}).removeAttr("data-mce-src")}),o})},ve=function(n,r,t,o){return function(){return se(n).fold(function(){ce(n,"Could not find selected image")},function(e){return n._scanForImages().then(function(){return he(n,e.dom())}).then(et).then(t).then(function(t){return ge(n,t,!1,r,e.dom(),o)},function(t){ce(n,t)})})}},pe=function(e,n,r){return function(){var t=se(e).fold(function(){return null},function(t){var e=ct.getImageSize(t.dom());return e?{w:e.h,h:e.w}:null});return ve(e,n,function(t){return tt(t,r)},t)()}},ye=function(t,e,n){return function(){return ve(t,e,function(t){return Z(t,n)})()}},we=function(n,t){var e=function(t){return e=t,n.dom.is(e,"img:not([data-mce-object],[data-mce-placeholder])")&&(fe(n,t)||le(n,t)||n.settings.imagetools_proxy);var e};return ae(n,t)?ue(t).map(function(t){return e(t.dom())?O.some(t.dom()):O.none()}):e(t)?O.some(t):O.none()},be=me,Te=he,Oe=se,Ie=function(e,n,r,o,i){return new ut(function(t){U(i).then(function(t){var e=ct.getNaturalImageSize(t);return o.w===e.w&&o.h===e.h||ct.getImageSize(r)&&ct.setImageSize(r,e),ot(t.src),i}).then(et).then(function(t){return ge(e,t,!0,n,r)},function(){})})},xe=v("save-state"),Ce=v("disable"),Ee=v("enable"),Se=function(i,u){return function(){var r=Oe(i),o=r.map(function(t){return ct.getNaturalImageSize(t.dom())});Oe(i).each(function(e){we(i,e.dom()).each(function(t){Te(i,e.dom()).then(function(t){var e,n={blob:e=t,url:rt(e)};i.windowManager.open({title:"Edit Image",size:"large",body:{type:"panel",items:[{type:"imagetools",name:"imagetools",label:"Edit Image",currentState:n}]},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0,disabled:!0}],onSubmit:function(t){var n=t.getData().imagetools.blob;r.each(function(e){o.each(function(t){Ie(i,u,e.dom(),t,n)})}),t.close()},onCancel:function(){},onAction:function(t,e){switch(e.name){case xe():e.value?t.enable("save"):t.disable("save");break;case Ce():t.disable("save"),t.disable("cancel");break;case Ee():t.enable("cancel")}}})})})})}},Ne=function(n,t){a.each({mceImageRotateLeft:pe(n,t,-90),mceImageRotateRight:pe(n,t,90),mceImageFlipVertical:ye(n,t,"v"),mceImageFlipHorizontal:ye(n,t,"h"),mceEditImage:Se(n,t)},function(t,e){n.addCommand(e,t)})},Ae=function(n,r,o){n.on("NodeChange",function(t){var e=o.get();e&&e.src!==t.element.src&&(be(r),n.editorUpload.uploadImagesAuto(),o.set(null)),we(n,t.element).each(o.set)})},_e=function(r){var e=function(t){return function(){return r.execCommand(t)}};r.ui.registry.addButton("rotateleft",{tooltip:"Rotate counterclockwise",icon:"rotate-left",onAction:e("mceImageRotateLeft")}),r.ui.registry.addButton("rotateright",{tooltip:"Rotate clockwise",icon:"rotate-right",onAction:e("mceImageRotateRight")}),r.ui.registry.addButton("flipv",{tooltip:"Flip vertically",icon:"flip-vertically",onAction:e("mceImageFlipVertical")}),r.ui.registry.addButton("fliph",{tooltip:"Flip horizontally",icon:"flip-horizontally",onAction:e("mceImageFlipHorizontal")}),r.ui.registry.addButton("editimage",{tooltip:"Edit image",icon:"edit-image",onAction:e("mceEditImage"),onSetup:function(n){var t=function(){Oe(r).each(function(t){var e=we(r,t.dom()).isNone();n.setDisabled(e)})};return r.on("NodeChange",t),function(){r.off("NodeChange",t)}}}),r.ui.registry.addButton("imageoptions",{tooltip:"Image options",icon:"image-options",onAction:e("mceImage")}),r.ui.registry.addContextMenu("imagetools",{update:function(t){return we(r,t).fold(function(){return[]},function(t){return[{text:"Edit image",icon:"edit-image",onAction:e("mceEditImage")}]})}})},Re=function(e){var t;e.ui.registry.addContextToolbar("imagetools",{items:(t=e,t.getParam("imagetools_toolbar","rotateleft rotateright flipv fliph editimage imageoptions")),predicate:function(t){return we(e,t).isSome()},position:"node",scope:"node"})};t.add("imagetools",function(t){var e=r(0),n=r(null);Ne(t,e),_e(t),Re(t),Ae(t,e,n)}),function sn(){}}(window);