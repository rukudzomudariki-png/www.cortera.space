/* eslint-disable */
const fs = require("fs");
const path = require("path");

const root = path.join(process.cwd(), "src");
let bad = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(ts|tsx|js|jsx)$/.test(entry.name)) scan(full);
  }
}

function scan(file) {
  const lines = fs.readFileSync(file, "utf8").split(/\r?\n/);
  lines.forEach((line, i) => {
    if (/<form\b/i.test(line)) {
      bad.push(`${file}:${i + 1}: <form> element found`);
    }
    if (/(fetch|XMLHttpRequest|axios)\s*\(/i.test(line) && /contact/i.test(line)) {
      bad.push(`${file}:${i + 1}: contact endpoint call found`);
    }
  });
}

walk(root);

if (bad.length) {
  console.error("check:no-forms FAILED:");
  bad.forEach((b) => console.error("  " + b));
  process.exit(1);
}
console.log("check:no-forms: OK");
