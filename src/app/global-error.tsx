"use client";
import Link from "next/link";
export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ background: "#0A0A0B", color: "#F2F1EC", fontFamily: "sans-serif" }}>
        <main style={{ padding: "96px 24px", textAlign: "center" }}>
          <h1>Something went wrong.</h1>
          <p>Please try again or contact team@cortera.space.</p>
          <button onClick={() => reset()}>Try again</button>
          <Link href="/" style={{ marginLeft: 16 }}>Home</Link>
        </main>
      </body>
    </html>
  );
}
