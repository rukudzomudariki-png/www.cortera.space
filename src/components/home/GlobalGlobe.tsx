"use client";

import { useEffect, useRef } from "react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display } from "@/components/ui/Display";
import { Lede } from "@/components/ui/Lede";
import { Container } from "@/components/ui/Container";

export function GlobalGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const N = 2000;
    const pts: { x: number; y: number; z: number }[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      pts.push({ x: Math.cos(theta) * r, y, z: Math.sin(theta) * r });
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let size = 0;
    const resize = () => {
      size = Math.min(wrap.clientWidth, 640);
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      canvas.style.width = size + "px";
      canvas.style.height = size + "px";
    };
    resize();
    window.addEventListener("resize", resize);

    let rotY = 0;
    let dragging = false;
    let lastX = 0;
    let visible = true;
    const observer = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0 });
    observer.observe(wrap);

    const onDown = (e: PointerEvent) => { dragging = true; lastX = e.clientX; canvas.setPointerCapture(e.pointerId); };
    const onMove = (e: PointerEvent) => { if (!dragging) return; rotY += (e.clientX - lastX) * 0.005; lastX = e.clientX; };
    const onUp = (e: PointerEvent) => { dragging = false; try { canvas.releasePointerCapture(e.pointerId); } catch {} };
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);

    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    let last = performance.now();
    const draw = (now: number) => {
      if (!visible) { raf = requestAnimationFrame(draw); return; }
      const dt = (now - last) / 1000;
      last = now;
      if (!reduced && visible && !dragging) rotY += 0.05 * dt;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const R = (size * dpr) * 0.42;
      for (const p of pts) {
        const cos = Math.cos(rotY), sin = Math.sin(rotY);
        const x = p.x * cos + p.z * sin;
        const z = -p.x * sin + p.z * cos;
        const scale = 1 / (1 + z * 0.3);
        const px = cx + x * R * scale;
        const py = cy + p.y * R * scale;
        const alpha = (0.35 * (0.6 + 0.4 * (1 - z) / 2)) * scale;
        ctx.fillStyle = `rgba(242,241,236,${alpha})`;
        ctx.beginPath();
        ctx.arc(px, py, 1.5 * dpr * scale, 0, Math.PI * 2);
        ctx.fill();
      }
      // rim light
      const grd = ctx.createRadialGradient(cx, cy, R * 0.9, cx, cy, R * 1.15);
      grd.addColorStop(0, "rgba(59,130,246,0)");
      grd.addColorStop(1, "rgba(59,130,246,0.08)");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (visible) raf = requestAnimationFrame(draw);
      else raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
    };
  }, []);

  return (
    <Section variant="dark" id="global">
      <Container className="py-[var(--section-padding)]">
        <Eyebrow>BUILT FOR THE GLOBE</Eyebrow>
        <Display level={2} className="mt-4">
          Mines and farms run in every climate. So does Cortera.
        </Display>
        <Lede className="mt-6 max-w-[60ch]">
          Frontier Physical and cloud AI should not depend on where you operate. We design for harsh conditions, remote sites and different regulatory regimes from the start.
        </Lede>
        <div ref={wrapRef} className="mt-12 flex justify-center" style={{ width: "min(80vw, 640px)", height: "min(80vw, 640px)", margin: "0 auto" }}>
          <canvas ref={canvasRef} aria-hidden="true" />
          <span className="sr-only">Decorative rotating globe</span>
        </div>
      </Container>
    </Section>
  );
}
