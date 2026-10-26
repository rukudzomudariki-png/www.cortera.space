/* eslint-disable */
const fs = require("fs");
const path = require("path");

const roots = ["src", "content"];
const forbidden = [
  "lorem ipsum",
  "TODO",
  "TBD",
  "coming soon",
  "trusted by",
  "SOC 2",
  "ISO 27001",
  "HIPAA",
  "GDPR compliant",
  "enterprise-grade",
  "bank-level",
  "revolutionary",
  "game-changing",
  "world-class",
  "best-in-class",
];

let bad = [];
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (/\.(ts|tsx|js|jsx|md|mdx|json)$/.test(e.name)) scan(full);
  }
}
function scan(file) {
  const text = fs.readFileSync(file, "utf8");
  const lines = text.split(/\r?\n/);
  lines.forEach((line, i) => {
    if (line.includes("allow-claim")) return;
    for (const term of forbidden) {
      if (line.toLowerCase().includes(term.toLowerCase())) {
        bad.push(file + ":" + (i + 1) + ': forbidden term "' + term + '"');
      }
    }
    if (/\.(md|mdx)$/.test(file)) {
      if (/\d+\s*%|\d+x\s*faster/i.test(line)) {
        bad.push(file + ":" + (i + 1) + ": percentage/speed claim");
      }
    }
  });
  if (!file.includes("/privacy/") && !file.includes("/terms/")) {
    const emailMatches = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g) || [];
    for (const em of emailMatches) {
      if (em !== "team@cortera.space") {
        bad.push(file + ": hardcoded email " + em);
      }
    }
  }
}
for (const r of roots) if (fs.existsSync(r)) walk(r);

function walkComp(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walkComp(full);
    else if (/customer.*logo|logo.*customer/i.test(e.name)) bad.push("customer logo component: " + full);
  }
}
if (fs.existsSync("src/components")) walkComp("src/components");

if (bad.length) {
  console.error("check:claims FAILED:");
  bad.forEach((b) => console.error("  " + b));
  process.exit(1);
}
console.log("check:claims: OK");
