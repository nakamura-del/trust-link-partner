"use client";

import { useEffect, useRef } from "react";

type ParticlesProps = {
  /** Base color of particles in "r,g,b" form */
  color?: string;
  /** Number of particles (auto-scaled down on small screens) */
  count?: number;
  /** Whether particles react to the mouse */
  interactive?: boolean;
  /** Draw connecting lines between nearby particles */
  connect?: boolean;
  /** Max opacity of particles */
  maxOpacity?: number;
  className?: string;
};

type Dot = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  o: number;
};

/**
 * Lightweight canvas particle field. Used both on the light hero
 * (subtle blue dots) and the dark "Hidden Liabilities" section.
 */
export default function Particles({
  color = "35,139,203",
  count = 70,
  interactive = true,
  connect = true,
  maxOpacity = 0.6,
  className = "",
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -1000, y: -1000 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dots: Dot[] = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const parent = canvas.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = width < 640 ? 0.45 : 1;
      const n = Math.round(count * density);
      dots = Array.from({ length: n }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.6,
        o: Math.random() * maxOpacity + 0.1,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        d.x += d.vx;
        d.y += d.vy;

        if (d.x < 0 || d.x > width) d.vx *= -1;
        if (d.y < 0 || d.y > height) d.vy *= -1;

        // mouse attraction
        if (interactive) {
          const dx = d.x - mouse.current.x;
          const dy = d.y - mouse.current.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            const force = (130 - dist) / 130;
            d.x += (dx / (dist || 1)) * force * 1.6;
            d.y += (dy / (dist || 1)) * force * 1.6;
          }
        }

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${d.o})`;
        ctx.fill();

        if (connect) {
          for (let j = i + 1; j < dots.length; j++) {
            const o = dots[j];
            const dist = Math.hypot(d.x - o.x, d.y - o.y);
            if (dist < 120) {
              ctx.beginPath();
              ctx.moveTo(d.x, d.y);
              ctx.lineTo(o.x, o.y);
              ctx.strokeStyle = `rgba(${color},${
                0.12 * (1 - dist / 120)
              })`;
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }
        }
      }
      raf.current = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => {
      mouse.current = { x: -1000, y: -1000 };
    };

    resize();
    window.addEventListener("resize", resize);
    if (interactive) {
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseout", onLeave);
    }

    if (prefersReduced) {
      // render a single static frame
      draw();
      cancelAnimationFrame(raf.current);
      ctx.clearRect(0, 0, width, height);
      for (const d of dots) {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${d.o})`;
        ctx.fill();
      }
    } else {
      raf.current = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [color, count, interactive, connect, maxOpacity]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
