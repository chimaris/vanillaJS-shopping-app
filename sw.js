if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let o={};const t=e=>s(e,f),c={module:{uri:f},exports:o,require:t};i[f]=Promise.all(n.map((e=>c[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-2671632a"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/icon-192.png",revision:"45f0e9513ee33bdb3ff8879f7c2fc268"},{url:"assets/icon-384.png",revision:"3cf251a83522d13e74d40f753556f2a0"},{url:"assets/icon-512.png",revision:"69cea7d072d7e42f2bad8b6b1a562b09"},{url:"dexie.min.js",revision:"b13495b45cc618ff99998f1aacddc632"},{url:"index.css",revision:"9125e989df3cffff8345d8631b6c2e94"},{url:"index.html",revision:"f688d733211ff26aa8e7687036317903"},{url:"index.js",revision:"77fd6896133448c73fe9ddab471037c9"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map