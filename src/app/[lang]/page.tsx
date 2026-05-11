import { notFound } from "next/navigation";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Features from "@/components/features";
import Screenshots from "@/components/screenshots";
import DownloadCTA from "@/components/download-cta";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { getDictionary, isLocale } from "@/lib/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <>
      <Nav lang={lang} dict={dict.nav} switcher={dict.switcher} />
      <main>
        <Hero dict={dict.hero} storeDict={dict.download} lang={lang} />
        <Stats dict={dict.stats} />
        <Features dict={dict.features} />
        <Screenshots dict={dict.screenshots} />
        <DownloadCTA dict={dict.download} />
        <Contact dict={dict.contact} />
      </main>
      <Footer dict={dict.footer} />
    </>
  );
}
