"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/dictionaries/types";

export default function Stats({ dict }: { dict: Dictionary["stats"] }) {
  return (
    <section className="border-y border-border bg-surface py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4">
          {dict.items.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="border-l border-border px-6 [&:nth-child(odd)]:border-l-0 md:[&:nth-child(odd)]:border-l md:first:border-l-0 md:px-8"
            >
              <div className="font-display text-5xl font-medium md:text-6xl">
                {s.value}
                <span className="text-accent">{s.suffix}</span>
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
