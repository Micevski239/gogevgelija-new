import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import { isLocale } from "@/lib/i18n";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  axes: ["SOFT", "opsz"],
});

export const metadata: Metadata = {
  title: "GoGevgelija - Discover Gevgelija",
  description:
    "Places, events, tourism, gallery, wishlist and a built-in AI assistant - your local guide to Gevgelija, North Macedonia. iOS & Android.",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "mk" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${inter.variable} ${fraunces.variable} antialiased`}
    >
      <body className="bg-background text-foreground">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
