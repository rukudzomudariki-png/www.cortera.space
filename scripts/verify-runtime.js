/* eslint-disable */
const { spawn } = require("child_process");
const http = require("http");

const env = { ...process.env, PORT: "3000", BASE_URL: "http://localhost:3000" };
const proc = spawn("npm", ["run", "start"], { stdio: "inherit", shell: true, env });

function ready() {
  return new Promise((resolve, reject) => {
    const req = http.get("http://localhost:3000", (res) => { res.resume(); resolve(res.statusCode); });
    req.on("error", reject);
  });
}

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try { await ready(); return; } catch (e) { await new Promise((r) => setTimeout(r, 1000)); }
  }
  throw new Error("server not ready");
}

(async () => {
  try {
    await waitForServer();
    const seo = spawn("npm", ["run", "check:seo"], { stdio: "inherit", shell: true, env });
    const code = await new Promise((resolve) => seo.on("exit", resolve));
    if (code !== 0) throw new Error("check:seo failed");
    console.log("verify:runtime: OK");
  } catch (e) {
    console.error("verify:runtime FAILED:", e.message);
    proc.kill();
    process.exit(1);
  }
  proc.kill();
  process.exit(0);
})();
