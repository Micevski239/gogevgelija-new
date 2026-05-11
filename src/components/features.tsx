"use client";

import { motion } from "framer-motion";
import type { Dictionary, FeatureCopy } from "@/lib/dictionaries/types";

export default function Features({ dict }: { dict: Dictionary["features"] }) {
  return (
    <section id="features" className="relative bg-background py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              {dict.eyebrow}
            </div>
            <h2 className="font-display mt-4 text-4xl font-medium md:text-6xl">
              {dict.title}
            </h2>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {dict.items.map((f, i) => (
            <FeatureCard key={f.title} index={i} feature={f} />
          ))}
          <div className="hidden bg-background md:block lg:col-span-2" />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: FeatureCopy; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col gap-5 bg-background p-8 transition-colors hover:bg-surface md:p-10"
    >
      <div className="flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
          <FeatureIcon name={feature.icon} />
        </span>
        <span className="font-mono text-xs text-muted">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.2em] text-muted">
          {feature.subtitle}
        </div>
        <h3 className="mt-2 text-2xl font-bold tracking-tight">{feature.title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-muted">{feature.body}</p>
    </motion.article>
  );
}

function FeatureIcon({ name }: { name: FeatureCopy["icon"] }) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-6 w-6",
  };
  switch (name) {
    case "home":
      return (
        <svg {...props}>
          <path d="M3 11l9-7 9 7" />
          <path d="M5 10v10h14V10" />
        </svg>
      );
    case "explore":
      return (
        <svg {...props}>
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
      );
    case "events":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 3v4M16 3v4" />
        </svg>
      );
    case "tourism":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M15 4.5l-4 7-4-3 4 14 4-7 4 3-4-14z" />
        </svg>
      );
    case "gallery":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="M21 16l-5-5-9 9" />
        </svg>
      );
    case "wishlist":
      return (
        <svg {...props}>
          <path d="M12 21s-7-4.5-9.5-9C.8 8.5 3 4 7 4c2 0 3.5 1.5 5 3 1.5-1.5 3-3 5-3 4 0 6.2 4.5 4.5 8-2.5 4.5-9.5 9-9.5 9z" />
        </svg>
      );
    case "goai":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2z" />
          <path d="M19 14l.9 2.6L22.5 17.5l-2.6.9L19 21l-.9-2.6L15.5 17.5l2.6-.9L19 14z" />
        </svg>
      );
  }
}
