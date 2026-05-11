"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Dictionary } from "@/lib/dictionaries/types";

export default function Screenshots({
  dict,
}: {
  dict: Dictionary["screenshots"];
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const txRef = useRef(0);

  useEffect(() => {
    const update = () => {
      if (!trackRef.current || !outerRef.current || !stickyRef.current) return;
      const vh = window.innerHeight;
      const tx = Math.max(0, trackRef.current.scrollWidth - window.innerWidth);
      txRef.current = tx;
      outerRef.current.style.height = `${vh + tx}px`;
      stickyRef.current.style.height = `${vh}px`;
    };
    requestAnimationFrame(update);
    const ro = new ResizeObserver(update);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const { scrollY } = useScroll();

  const x = useTransform(scrollY, () => {
    if (!outerRef.current || txRef.current === 0) return 0;
    const progress = Math.max(
      0,
      Math.min(1, -outerRef.current.getBoundingClientRect().top / txRef.current),
    );
    return -progress * txRef.current;
  });

  return (
    <div ref={outerRef} style={{ height: "100vh" }}>
      <div
        ref={stickyRef}
        className="sticky top-0 overflow-hidden bg-foreground"
        style={{ height: "100vh" }}
      >
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex h-full w-max items-center gap-6 px-8"
        >
          {dict.items.map((s, i) => (
            <article key={s.src} className="flex shrink-0 flex-col">
              <div
                className="relative rounded-[1.8rem] border border-white/15 bg-white/5 p-1.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.6)]"
                style={{
                  aspectRatio: "9/19.5",
                  height: "min(600px, calc(100vh - 8rem))",
                  minHeight: "260px",
                }}
              >
                <div className="absolute inset-x-0 top-0 z-10 mx-auto h-4 w-16 rounded-b-xl bg-black/80" />
                <div className="relative h-full w-full overflow-hidden rounded-[1.4rem] bg-background">
                  <Image
                    src={s.src}
                    alt={`${s.title} screen`}
                    fill
                    sizes="220px"
                    className="object-cover object-bottom"
                  />
                </div>
              </div>
              <div className="mt-4 flex items-baseline gap-2 px-1">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-semibold tracking-tight text-white">
                  {s.title}
                </h3>
              </div>
            </article>
          ))}
          <div className="w-8 shrink-0" />
        </motion.div>
      </div>
    </div>
  );
}
