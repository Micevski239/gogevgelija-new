"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import MagneticButton from "@/components/ui/magnetic-button";
import type { Dictionary } from "@/lib/dictionaries/types";
import type { Locale } from "@/lib/i18n";

const ROTATION_SCREENS = [
  "/screens/home.jpg",
  "/screens/explore.jpg",
  "/screens/events.jpg",
  "/screens/tourism.jpg",
];

const ROTATION_INTERVAL = 3500;

export default function Hero({
  dict,
  storeDict,
  lang,
}: {
  dict: Dictionary["hero"];
  storeDict: Dictionary["download"];
  lang: Locale;
}) {
  const loginSrc = lang === "mk" ? "/screens/login_mk.png" : "/screens/login_en.png";

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20 md:pt-32"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 md:gap-16 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-[clamp(2.75rem,7vw,6.5rem)] font-medium leading-[0.95]">
            {dict.titleLine1}
            <br />
            <span className="text-accent">{dict.titleLine2}</span>
          </h1>

          <p className="mt-8 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            {dict.body}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <MagneticButton
              href="https://apps.apple.com/mk/app/gogevgelija/id6753878546"
              className="inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-white"
            >
              <AppleIcon />
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px] uppercase tracking-wider opacity-70">
                  {storeDict.appStoreSmall}
                </span>
                <span className="text-base">{storeDict.appStoreBig}</span>
              </span>
            </MagneticButton>
            <MagneticButton
              href="https://play.google.com/store/apps/details?id=com.micevski239.gogevgelija"
              className="inline-flex items-center gap-3 rounded-full border border-foreground bg-background px-8 py-3.5 text-sm font-semibold text-foreground"
            >
              <PlayIcon />
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px] uppercase tracking-wider opacity-60">
                  {storeDict.playStoreSmall}
                </span>
                <span className="text-base">{storeDict.playStoreBig}</span>
              </span>
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto"
        >
          <RotatingPhone initialSrc={loginSrc} alt="GoGevgelija app preview" />
        </motion.div>
      </div>
    </section>
  );
}

function RotatingPhone({
  initialSrc,
  alt,
}: {
  initialSrc: string;
  alt: string;
}) {
  const reduceMotion = useReducedMotion();
  const screens = [initialSrc, ...ROTATION_SCREENS];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % screens.length);
    }, ROTATION_INTERVAL);
    return () => window.clearInterval(id);
  }, [reduceMotion, screens.length]);

  return (
    <div className="relative mx-auto aspect-[9/19.5] w-[200px] rounded-[2.6rem] border border-foreground/90 bg-foreground p-2 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.35)] sm:w-[260px] md:w-[300px] lg:w-[340px]">
      <div className="absolute inset-x-0 top-0 z-10 mx-auto h-6 w-32 rounded-b-2xl bg-foreground" />
      <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-background">
        {screens.map((src, i) => (
          <motion.div
            key={src}
            initial={false}
            animate={{ opacity: index === i ? 1 : 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 340px, (min-width: 640px) 300px, 260px"
              className="object-cover object-bottom"
              priority={i === 0}
            />
          </motion.div>
        ))}
      </div>
    </div>
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
