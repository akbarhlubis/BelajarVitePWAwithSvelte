if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>s(e,t),l={module:{uri:t},exports:o,require:c};i[t]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-ab116399"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-17f0ce0f.js",revision:null},{url:"assets/index-5ed7b18f.css",revision:null},{url:"index.html",revision:"b6b8042fa9d57a9e44d84df599ec1f10"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icons/icon-512x512.png/",revision:"b218c77fbe6f475da1a8e0304a643e63"},{url:"manifest.webmanifest",revision:"02991bc1dece3e304788c63481da92e7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({url:e})=>e.pathname.startsWith("/api")),new e.CacheFirst({cacheName:"api-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
