import type { Dictionary } from "@/lib/dictionaries/types";

export default function Footer({ dict }: { dict: Dictionary["footer"] }) {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display text-5xl font-medium leading-none tracking-tight text-accent md:text-6xl">
              GoGevgelija
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted">{dict.blurb}</p>
          </div>

          <Col title={dict.quickLinks}>
            {dict.quickLinksItems.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-foreground">
                {l.label}
              </a>
            ))}
          </Col>

          <Col title={dict.resources}>
            {dict.resourcesItems.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-foreground">
                {l.label}
              </a>
            ))}
          </Col>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <span>{dict.copyright}</span>
          <span className="flex flex-wrap gap-x-6">
            {dict.meta.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}

function Col({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.2em] text-muted">{title}</div>
      <div className="mt-4 flex flex-col gap-2 text-sm text-muted">{children}</div>
    </div>
  );
}
