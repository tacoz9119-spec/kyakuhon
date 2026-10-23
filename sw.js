/* オフラインでも起動できるように、アプリのファイルを端末に保存しておく。
   起動時は端末に保存した版をすぐ使い、裏で新しい版を取りに行く（更新は次回の起動から反映）。
   ファイルを更新したら、下の CACHE の番号を1つ増やすと、確実に入れ替わる。
   選べる書体のうち、最初の明朝体（細め）以外のフォントは、初めて使ったときに端末に保存する。 */
const CACHE='genko-v41';
const FILES=['./','index.html','firebase-config.js','firebase.js','jspdf.umd.min.js','notoserifjp-300-v.ttf','notoserifjp-300-screen.woff2','manifest.webmanifest','icon-180.png','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET') return;
  const url=new URL(req.url); if(url.origin!==self.location.origin) return;
  e.respondWith(caches.open(CACHE).then(async c=>{
    const key=req.mode==='navigate'?'index.html':req;
    const hit=await c.match(key,{ignoreSearch:true});
    const net=fetch(req).then(res=>{ if(res&&res.ok&&res.type==='basic') c.put(key,res.clone()); return res; }).catch(()=>null);
    if(hit){ e.waitUntil(net); return hit; }
    const res=await net; return res||new Response('オフラインのため開けません',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});
  }));
});
