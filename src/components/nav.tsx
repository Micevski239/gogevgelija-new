"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import type { Dictionary } from "@/lib/dictionaries/types";
import type { Locale } from "@/lib/i18n";

const COOKIE_NAME = "NEXT_LOCALE";

export default function Nav({
  lang,
  dict,
  switcher,
}: {
  lang: Locale;
  dict: Dictionary["nav"];
  switcher: Dictionary["switcher"];
}) {
  const { scrollY } = useScroll();
  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.95)"],
  );
  const border = useTransform(
    scrollY,
    [0, 80],
    ["rgba(236,236,238,0)", "rgba(236,236,238,1)"],
  );
  const blur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(12px)"]);

  const [menuOpen, setMenuOpen] = useState(false);
  const otherLang: Locale = lang === "en" ? "mk" : "en";

  function persistLocale(target: Locale) {
    document.cookie = `${COOKIE_NAME}=${target}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
  }

  return (
    <motion.header
      style={{
        backgroundColor: bg,
        borderBottomColor: border,
        backdropFilter: blur,
        WebkitBackdropFilter: blur,
      }}
      className="fixed inset-x-0 top-0 z-50 border-b"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-display text-[1.75rem] font-medium leading-none tracking-tight text-accent md:text-[2rem]"
          onClick={() => setMenuOpen(false)}
        >
          GoGevgelija
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {dict.links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={`/${otherLang}`}
            onClick={() => persistLocale(otherLang)}
            aria-label={`Switch to ${switcher.other}`}
            className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold tracking-wide text-muted transition hover:border-foreground hover:text-foreground"
          >
            <span className="text-foreground">{switcher.label}</span>
            <span aria-hidden className="text-border">/</span>
            <span>{switcher.other}</span>
          </Link>
          {/* Hamburger — mobile only */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="ml-1 flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`block h-0.5 w-5 bg-foreground transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-foreground transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-foreground transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border bg-background/95 px-6 py-6 backdrop-blur-sm md:hidden">
          <nav className="flex flex-col gap-5 text-base text-muted">
            {dict.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="transition hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </motion.header>
  );
}
