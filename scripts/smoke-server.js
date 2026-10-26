/* eslint-disable */
const { spawn } = require("child_process");
const http = require("http");

const proc = spawn("npm", ["run", "start"], { stdio: "inherit", shell: true, env: { ...process.env, PORT: "3000" } });

function check() {
  return new Promise((resolve, reject) => {
    const req = http.get("http://localhost:3000", (res) => {
      if (res.statusCode === 200) resolve(); else reject(new Error("status " + res.statusCode));
      res.resume();
    });
    req.on("error", reject);
  });
}

let attempts = 0;
const interval = setInterval(async () => {
  attempts++;
  try { await check(); clearInterval(interval); console.log("smoke: OK"); proc.kill(); process.exit(0); }
  catch (e) { if (attempts > 30) { clearInterval(interval); console.error("smoke FAILED:", e.message); proc.kill(); process.exit(1); } }
}, 1000);
