"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/dictionaries/types";

export default function Contact({ dict }: { dict: Dictionary["contact"] }) {
  return (
    <section id="contact" className="border-t border-border bg-background py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            {dict.eyebrow}
          </div>
          <h2 className="font-display mt-4 text-4xl font-medium md:text-6xl">
            {dict.title}
          </h2>
          <p className="mt-6 max-w-md text-muted">{dict.description}</p>

          <dl className="mt-12 space-y-6">
            <Field
              label={dict.emailLabel}
              value="info@gogevgelija.com"
              href="mailto:info@gogevgelija.com"
            />
            <Field
              label={dict.phoneLabel}
              value="+389 78 408 779"
              href="tel:+38978408779"
            />
            <Field label={dict.locationLabel} value={dict.locationValue} />
          </dl>

          <div className="mt-10 flex gap-3">
            <a
              href="https://www.instagram.com/gogevgelija/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition hover:border-foreground hover:text-foreground"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com/gogevgelija1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition hover:border-foreground hover:text-foreground"
            >
              <FacebookIcon />
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-6"
        >
          <input type="hidden" name="access_key" value="35b4b271-fd48-44b1-8c93-f44c8d6dd316" />
          <input type="hidden" name="subject" value="New business inquiry — GoGevgelija" />
          <input type="hidden" name="redirect" value="false" />
          <Input
            id="name"
            name="name"
            label={dict.fields.name}
            placeholder={dict.fields.namePlaceholder}
            required
          />
          <Input
            id="business"
            name="business"
            label={dict.fields.business}
            placeholder={dict.fields.businessPlaceholder}
            required
          />
          <Input
            id="email"
            name="email"
            label={dict.fields.email}
            type="email"
            placeholder={dict.fields.emailPlaceholder}
            required
          />
          <Input
            id="phone"
            name="phone"
            label={dict.fields.phone}
            type="tel"
            placeholder={dict.fields.phonePlaceholder}
          />
          <div>
            <label
              htmlFor="message"
              className="text-xs uppercase tracking-[0.2em] text-muted"
            >
              {dict.fields.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder={dict.fields.messagePlaceholder}
              className="mt-3 w-full resize-none border-b border-border bg-transparent py-3 text-foreground outline-none transition focus:border-foreground"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white shadow-sm shadow-accent/30 transition hover:bg-accent-strong"
          >
            {dict.submit}
            <span aria-hidden>→</span>
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="border-l border-border pl-5">
      <dt className="text-xs uppercase tracking-[0.2em] text-muted">{label}</dt>
      <dd className="mt-1 text-lg font-medium">
        {href ? (
          <a href={href} className="transition hover:text-accent">
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}

function Input({
  id,
  name,
  label,
  type = "text",
  placeholder,
  required,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs uppercase tracking-[0.2em] text-muted">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-3 w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition focus:border-foreground"
      />
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}
