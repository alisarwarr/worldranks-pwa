if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,t,i)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const a={uri:location.origin+s.slice(1)};return Promise.all(t.map((s=>{switch(s){case"exports":return n;case"module":return a;default:return e(s)}}))).then((e=>{const s=i(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/KdgTkr0oMNSGDvSnEwjOZ/_buildManifest.js",revision:"KdgTkr0oMNSGDvSnEwjOZ"},{url:"/_next/static/KdgTkr0oMNSGDvSnEwjOZ/_ssgManifest.js",revision:"KdgTkr0oMNSGDvSnEwjOZ"},{url:"/_next/static/chunks/170-86b5f0ecc990f6d33034.js",revision:"KdgTkr0oMNSGDvSnEwjOZ"},{url:"/_next/static/chunks/911-2edb9848433aa94e79cd.js",revision:"KdgTkr0oMNSGDvSnEwjOZ"},{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"KdgTkr0oMNSGDvSnEwjOZ"},{url:"/_next/static/chunks/main-da1bc8f8d312ca485cee.js",revision:"KdgTkr0oMNSGDvSnEwjOZ"},{url:"/_next/static/chunks/pages/_app-ac2cc2a280bf750fd56c.js",revision:"KdgTkr0oMNSGDvSnEwjOZ"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"KdgTkr0oMNSGDvSnEwjOZ"},{url:"/_next/static/chunks/pages/country/%5Bname%5D-52f89d01d4204b530795.js",revision:"KdgTkr0oMNSGDvSnEwjOZ"},{url:"/_next/static/chunks/pages/index-b377e1c202a0ad126e97.js",revision:"KdgTkr0oMNSGDvSnEwjOZ"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"KdgTkr0oMNSGDvSnEwjOZ"},{url:"/_next/static/chunks/webpack-fb76148cfcfb42ca18eb.js",revision:"KdgTkr0oMNSGDvSnEwjOZ"},{url:"/_next/static/css/07daeaf452cfe214f29b.css",revision:"KdgTkr0oMNSGDvSnEwjOZ"},{url:"/_next/static/css/30d195da92eaf21adfef.css",revision:"KdgTkr0oMNSGDvSnEwjOZ"},{url:"/_next/static/css/ea547749c87affab383d.css",revision:"KdgTkr0oMNSGDvSnEwjOZ"},{url:"/favicon.ico",revision:"44d18e53978c0f6d0084fe9a7fcb532c"},{url:"/img/icon-192x192.png",revision:"20a723032f2f998ffce33687c582c046"},{url:"/img/icon-256x256.png",revision:"6ebeea4f087f6ede27d1589b472f347e"},{url:"/img/icon-384x384.png",revision:"9b57b373c2dd5c4fcb54fbe4d6bff67b"},{url:"/img/icon-512x512.png",revision:"f98f4d77f9eec0869359740c2740cfc6"},{url:"/manifest.json",revision:"5af7f7518cb6dad3a43e2ad27722df30"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
