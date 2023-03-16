/**
 * TinyMCE version 6.4.0 (2023-03-15)
 */
!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager");const t=e=>t=>typeof t===e,o=("string",e=>"string"===(e=>{const t=typeof e;return null===e?"null":"object"===t&&Array.isArray(e)?"array":"object"===t&&(o=n=e,(r=String).prototype.isPrototypeOf(o)||(null===(i=n.constructor)||void 0===i?void 0:i.name)===r.name)?"string":t;var o,n,r,i})(e));const n=t("boolean"),r=t("function"),i=e=>t=>t.options.get(e),s=i("quickbars_selection_toolbar"),a=i("quickbars_insert_toolbar"),l=i("quickbars_image_toolbar");let c=0;var u=tinymce.util.Tools.resolve("tinymce.Env"),d=tinymce.util.Tools.resolve("tinymce.util.Delay");const m=e=>{e.ui.registry.addButton("quickimage",{icon:"image",tooltip:"Insert image",onAction:()=>{(e=>new Promise((t=>{const o=document.createElement("input");o.type="file",o.accept="image/*",o.style.position="fixed",o.style.left="0",o.style.top="0",o.style.opacity="0.001",document.body.appendChild(o),o.addEventListener("change",(e=>{t(Array.prototype.slice.call(e.target.files))}));const n=r=>{const i=()=>{var e;t([]),null===(e=o.parentNode)||void 0===e||e.removeChild(o)};u.os.isAndroid()&&"remove"!==r.type?d.setEditorTimeout(e,i,0):i(),e.off("focusin remove",n)};e.on("focusin remove",n),o.click()})))(e).then((t=>{if(t.length>0){const o=t[0];(e=>new Promise((t=>{const o=new FileReader;o.onloadend=()=>{t(o.result.split(",")[1])},o.readAsDataURL(e)})))(o).then((t=>{((e,t,o)=>{const n=e.editorUpload.blobCache,r=n.create((e=>{const t=(new Date).getTime(),o=Math.floor(1e9*Math.random());return c++,"mceu_"+o+c+String(t)})(),o,t);n.add(r),e.insertContent(e.dom.createHTML("img",{src:r.blobUri()}))})(e,t,o)}))}}))}}),e.ui.registry.addButton("quicktable",{icon:"table",tooltip:"Insert table",onAction:()=>{((e,t,o)=>{e.execCommand("mceInsertTable",!1,{rows:2,columns:2})})(e)}})},g=(!1,()=>false);class h{constructor(e,t){this.tag=e,this.value=t}static some(e){return new h(!0,e)}static none(){return h.singletonNone}fold(e,t){return this.tag?t(this.value):e()}isSome(){return this.tag}isNone(){return!this.tag}map(e){return this.tag?h.some(e(this.value)):h.none()}bind(e){return this.tag?e(this.value):h.none()}exists(e){return this.tag&&e(this.value)}forall(e){return!this.tag||e(this.value)}filter(e){return!this.tag||e(this.value)?this:h.none()}getOr(e){return this.tag?this.value:e}or(e){return this.tag?this:e}getOrThunk(e){return this.tag?this.value:e()}orThunk(e){return this.tag?this:e()}getOrDie(e){if(this.tag)return this.value;throw new Error(null!=e?e:"Called getOrDie on None")}static from(e){return null==e?h.none():h.some(e)}getOrNull(){return this.tag?this.value:null}getOrUndefined(){return this.value}each(e){this.tag&&e(this.value)}toArray(){return this.tag?[this.value]:[]}toString(){return this.tag?`some(${this.value})`:"none()"}}h.singletonNone=new h(!1),"undefined"!=typeof window?window:Function("return this;")();var b=(e,t,o,n,i)=>e(o,n)?h.some(o):r(i)&&i(o)?h.none():t(o,n,i);const v=e=>{if(null==e)throw new Error("Node cannot be null or undefined");return{dom:e}},p=v,f=(e,t)=>{const o=e.dom;if(1!==o.nodeType)return!1;{const e=o;if(void 0!==e.matches)return e.matches(t);if(void 0!==e.msMatchesSelector)return e.msMatchesSelector(t);if(void 0!==e.webkitMatchesSelector)return e.webkitMatchesSelector(t);if(void 0!==e.mozMatchesSelector)return e.mozMatchesSelector(t);throw new Error("Browser lacks native selectors")}},y=(e,t,o)=>{let n=e.dom;const i=r(o)?o:g;for(;n.parentNode;){n=n.parentNode;const e=p(n);if(t(e))return h.some(e);if(i(e))break}return h.none()},k=(e,t,o)=>y(e,(e=>f(e,t)),o),w=e=>{const t=a(e);t.length>0&&e.ui.registry.addContextToolbar("quickblock",{predicate:t=>{const o=p(t),n=e.schema.getTextBlockElements(),r=t=>t.dom===e.getBody();return!((e,t)=>{const o=e.dom;return!(!o||!o.hasAttribute)&&o.hasAttribute("data-mce-bogus")})(o)&&((e,t,o)=>b(((e,t)=>f(e,t)),k,e,'table,[data-mce-bogus="all"]',o))(o,0,r).fold((()=>((e,t,o)=>((e,t,o)=>b(((e,t)=>t(e)),y,e,t,o))(e,t,o).isSome())(o,(t=>t.dom.nodeName.toLowerCase()in n&&e.dom.isEmpty(t.dom)),r)),g)},items:t,position:"line",scope:"editor"})};e.add("quickbars",(e=>{(e=>{const t=e.options.register,r=e=>t=>{const r=n(t)||o(t);return r?n(t)?{value:t?e:"",valid:r}:{value:t.trim(),valid:r}:{valid:!1,message:"Must be a boolean or string."}},i="bold italic | quicklink h2 h3 blockquote";t("quickbars_selection_toolbar",{processor:r(i),default:i});const s="quickimage quicktable";t("quickbars_insert_toolbar",{processor:r(s),default:s});const a="alignleft aligncenter alignright";t("quickbars_image_toolbar",{processor:r(a),default:a})})(e),m(e),w(e),(e=>{const t=e=>"IMG"===e.nodeName||"FIGURE"===e.nodeName&&/image/i.test(e.className),o=l(e);o.length>0&&e.ui.registry.addContextToolbar("imageselection",{predicate:t,items:o,position:"node"});const n=s(e);n.length>0&&e.ui.registry.addContextToolbar("textselection",{predicate:o=>!t(o)&&!e.selection.isCollapsed()&&(t=>"false"!==e.dom.getContentEditableParent(t))(o),items:n,position:"selection",scope:"editor"})})(e)}))}();