/* eslint-disable */
const fs = require("fs");
const path = require("path");
const root = path.join(process.cwd(), "src");
let bad = [];
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (/\.(ts|tsx|js|jsx)$/.test(e.name)) scan(full);
  }
}
function scan(file) {
  const text = fs.readFileSync(file, "utf8");
  const matches = text.match(/process\.env\.([A-Z_]+)/g) || [];
  for (const m of matches) {
    const name = m.replace("process.env.", "");
    if (name.startsWith("VERCEL_")) continue;
    if (name === "NODE_ENV") continue;
    if (!name.startsWith("NEXT_PUBLIC_")) bad.push(file + ": non-public env var " + name);
  }
}
walk(root);
if (bad.length) { console.error("check:env FAILED:"); bad.forEach(b=>console.error("  "+b)); process.exit(1); }
console.log("check:env: OK");
