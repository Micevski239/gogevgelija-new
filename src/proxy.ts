import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, locales, type Locale } from "@/lib/i18n";

const COOKIE_NAME = "NEXT_LOCALE";

function parseAcceptLanguage(header: string | null): Locale {
  if (!header) return defaultLocale;

  const tags = header
    .split(",")
    .map((part) => {
      const [tag, ...rest] = part.trim().split(";");
      const qPart = rest.find((s) => s.trim().startsWith("q="));
      const q = qPart ? parseFloat(qPart.split("=")[1]) : 1;
      return { tag: tag.toLowerCase(), q: isNaN(q) ? 1 : q };
    })
    .filter((t) => t.tag)
    .sort((a, b) => b.q - a.q);

  for (const { tag } of tags) {
    const base = tag.split("-")[0];
    if ((locales as readonly string[]).includes(base)) return base as Locale;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = (locales as readonly string[]).some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return;

  const cookieLocale = request.cookies.get(COOKIE_NAME)?.value;
  const locale: Locale =
    cookieLocale && (locales as readonly string[]).includes(cookieLocale)
      ? (cookieLocale as Locale)
      : parseAcceptLanguage(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  const response = NextResponse.redirect(url);
  response.cookies.set(COOKIE_NAME, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico|screens|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico)).*)",
  ],
};
