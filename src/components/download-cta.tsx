"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/magnetic-button";
import type { Dictionary } from "@/lib/dictionaries/types";

export default function DownloadCTA({
  dict,
}: {
  dict: Dictionary["download"];
}) {
  return (
    <section
      id="download"
      className="relative overflow-hidden bg-background py-32 md:py-44"
    >
      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7 }}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-accent"
        >
          {dict.eyebrow}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="font-display mx-auto mt-6 max-w-3xl text-5xl font-medium md:text-7xl"
        >
          {dict.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-6 max-w-md text-muted"
        >
          {dict.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            href="https://apps.apple.com/mk/app/gogevgelija/id6753878546"
            className="inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-white"
          >
            <AppleIcon />
            <span className="flex flex-col items-start leading-tight">
              <span className="text-[10px] uppercase tracking-wider opacity-70">
                {dict.appStoreSmall}
              </span>
              <span className="text-base">{dict.appStoreBig}</span>
            </span>
          </MagneticButton>
          <MagneticButton
            href="https://play.google.com/store/apps/details?id=com.micevski239.gogevgelija"
            className="inline-flex items-center gap-3 rounded-full border border-foreground bg-background px-7 py-4 text-sm font-semibold text-foreground"
          >
            <PlayIcon />
            <span className="flex flex-col items-start leading-tight">
              <span className="text-[10px] uppercase tracking-wider opacity-60">
                {dict.playStoreSmall}
              </span>
              <span className="text-base">{dict.playStoreBig}</span>
            </span>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.48-2.09-.5-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
      <path d="M3.6 1.7c-.4.3-.6.8-.6 1.5v17.6c0 .7.2 1.2.6 1.5l9.5-10.3-9.5-10.3zM14.4 12.7l2.5 2.7-10.7 6.2c-.3.2-.6.2-.8.1l9-9zM5.4 1.4c.2-.1.5-.1.8.1l10.7 6.2-2.5 2.7-9-9zM18.1 8.5l3.6 2.1c.7.4.7 1.5 0 1.9l-3.6 2.1-2.7-3 2.7-3.1z" />
    </svg>
  );
}
