/**
 * TinyMCE version 6.4.0 (2023-03-15)
 */
!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager");const t=e=>t=>(e=>{const t=typeof e;return null===e?"null":"object"===t&&Array.isArray(e)?"array":"object"===t&&(s=r=e,(o=String).prototype.isPrototypeOf(s)||(null===(n=r.constructor)||void 0===n?void 0:n.name)===o.name)?"string":t;var s,r,o,n})(t)===e,s=t("string"),r=t("object"),o=t("array"),n=("function",e=>"function"==typeof e);var c=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),i=tinymce.util.Tools.resolve("tinymce.EditorManager"),l=tinymce.util.Tools.resolve("tinymce.Env"),a=tinymce.util.Tools.resolve("tinymce.util.Tools");const p=e=>t=>t.options.get(e),u=p("importcss_merge_classes"),m=p("importcss_exclusive"),f=p("importcss_selector_converter"),y=p("importcss_selector_filter"),d=p("importcss_groups"),h=p("importcss_append"),_=p("importcss_file_filter"),g=p("skin"),v=p("skin_url"),b=Array.prototype.push,x=/^\.(?:ephox|tiny-pageembed|mce)(?:[.-]+\w+)+$/,T=e=>s(e)?t=>-1!==t.indexOf(e):e instanceof RegExp?t=>e.test(t):e,S=(e,t)=>{let s={};const r=/^(?:([a-z0-9\-_]+))?(\.[a-z0-9_\-\.]+)$/i.exec(t);if(!r)return;const o=r[1],n=r[2].substr(1).split(".").join(" "),c=a.makeMap("a,img");return r[1]?(s={title:t},e.schema.getTextBlockElements()[o]?s.block=o:e.schema.getBlockElements()[o]||c[o.toLowerCase()]?s.selector=o:s.inline=o):r[2]&&(s={inline:"span",title:t.substr(1),classes:n}),u(e)?s.classes=n:s.attributes={class:n},s},k=(e,t)=>null===t||m(e),w=e=>{e.on("init",(()=>{const t=(()=>{const e=[],t=[],s={};return{addItemToGroup:(e,r)=>{s[e]?s[e].push(r):(t.push(e),s[e]=[r])},addItem:t=>{e.push(t)},toFormats:()=>{return(r=t,n=e=>{const t=s[e];return 0===t.length?[]:[{title:e,items:t}]},(e=>{const t=[];for(let s=0,r=e.length;s<r;++s){if(!o(e[s]))throw new Error("Arr.flatten item "+s+" was not an array, input: "+e);b.apply(t,e[s])}return t})(((e,t)=>{const s=e.length,r=new Array(s);for(let o=0;o<s;o++){const s=e[o];r[o]=t(s,o)}return r})(r,n))).concat(e);var r,n}}})(),r={},n=T(y(e)),p=(e=>a.map(e,(e=>a.extend({},e,{original:e,selectors:{},filter:T(e.filter)}))))(d(e)),u=(t,s)=>{if(((e,t,s,r)=>!(k(e,s)?t in r:t in s.selectors))(e,t,s,r)){((e,t,s,r)=>{k(e,s)?r[t]=!0:s.selectors[t]=!0})(e,t,s,r);const o=((e,t,s,r)=>{let o;const n=f(e);return o=r&&r.selector_converter?r.selector_converter:n||(()=>S(e,s)),o.call(t,s,r)})(e,e.plugins.importcss,t,s);if(o){const t=o.name||c.DOM.uniqueId();return e.formatter.register(t,o),{title:o.title,format:t}}}return null};a.each(((e,t,r)=>{const o=[],n={},c=(t,n)=>{let p,u=t.href;if(u=(e=>{const t=l.cacheSuffix;return s(e)&&(e=e.replace("?"+t,"").replace("&"+t,"")),e})(u),u&&(!r||r(u,n))&&!((e,t)=>{const s=g(e);if(s){const r=v(e),o=r?e.documentBaseURI.toAbsolute(r):i.baseURL+"/skins/ui/"+s,n=i.baseURL+"/skins/content/";return t===o+"/content"+(e.inline?".inline":"")+".min.css"||-1!==t.indexOf(n)}return!1})(e,u)){a.each(t.imports,(e=>{c(e,!0)}));try{p=t.cssRules||t.rules}catch(e){}a.each(p,(e=>{e.styleSheet?c(e.styleSheet,!0):e.selectorText&&a.each(e.selectorText.split(","),(e=>{o.push(a.trim(e))}))}))}};a.each(e.contentCSS,(e=>{n[e]=!0})),r||(r=(e,t)=>t||n[e]);try{a.each(t.styleSheets,(e=>{c(e)}))}catch(e){}return o})(e,e.getDoc(),T(_(e))),(e=>{if(!x.test(e)&&(!n||n(e))){const s=((e,t)=>a.grep(e,(e=>!e.filter||e.filter(t))))(p,e);if(s.length>0)a.each(s,(s=>{const r=u(e,s);r&&t.addItemToGroup(s.title,r)}));else{const s=u(e,null);s&&t.addItem(s)}}}));const m=t.toFormats();e.dispatch("addStyleModifications",{items:m,replace:!h(e)})}))};e.add("importcss",(e=>((e=>{const t=e.options.register,o=e=>s(e)||n(e)||r(e);t("importcss_merge_classes",{processor:"boolean",default:!0}),t("importcss_exclusive",{processor:"boolean",default:!0}),t("importcss_selector_converter",{processor:"function"}),t("importcss_selector_filter",{processor:o}),t("importcss_file_filter",{processor:o}),t("importcss_groups",{processor:"object[]"}),t("importcss_append",{processor:"boolean",default:!1})})(e),w(e),(e=>({convertSelectorToFormat:t=>S(e,t)}))(e))))}();