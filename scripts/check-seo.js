/* eslint-disable */
const BASE = process.env.BASE_URL || "http://localhost:3000";
const routes = ["/","/physical-ai","/control-plane","/industries","/industries/mining","/industries/agriculture","/safety","/research","/company","/contact","/privacy","/terms","/announcements","/blog"];
const { getAllPosts } = require("../src/lib/content") || {};
let allRoutes = [...routes];
try {
  const c = require("../src/lib/content");
  for (const p of c.getAllPosts("announcements")) allRoutes.push("/announcements/"+p.slug);
  if (c.getAllPosts("blog").length) { allRoutes.push("/blog"); for (const p of c.getAllPosts("blog")) allRoutes.push("/blog/"+p.slug); }
} catch(e) {}

(async () => {
  const seenTitles=new Set(), seenDesc=new Set();
  let bad=[];
  for (const r of allRoutes) {
    let res;
    try { res = await fetch(BASE+r); } catch(e){ bad.push(r+": fetch failed"); continue; }
    if (res.status!==200) { bad.push(r+": status "+res.status); continue; }
    const html = await res.text();
    const title = (html.match(/<title[^>]*>([^<]*)<\/title>/i)||[])[1];
    const desc = (html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/i)||[])[1];
    const canon = (html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/i)||[])[1];
    const h1s = html.match(/<h1[\s>]/gi)||[];
    if (!title) bad.push(r+": missing title");
    else { if (seenTitles.has(title)) bad.push(r+": duplicate title"); seenTitles.add(title); if (title.length>70) bad.push(r+": title too long?"); }
    if (!desc) bad.push(r+": missing description");
    else { if (desc.length>=160) bad.push(r+": description >=160"); if (seenDesc.has(desc)) bad.push(r+": duplicate description"); seenDesc.add(desc); }
    if (!canon) bad.push(r+": missing canonical");
    else if (!canon.includes("www.cortera.space")) bad.push(r+": canonical wrong host "+canon);
    if (h1s.length===0) bad.push(r+": missing h1");
    if (h1s.length>1) bad.push(r+": multiple h1");
    // images without alt
    const imgs = html.match(/<img[^>]*>/gi)||[];
    for (const img of imgs) {
      if (!/alt=/.test(img)) bad.push(r+": img without alt");
    }
  }
  if (bad.length) { console.error("check:seo FAILED:"); bad.forEach(b=>console.error("  "+b)); process.exit(1); }
  console.log("check:seo: OK");
})();
