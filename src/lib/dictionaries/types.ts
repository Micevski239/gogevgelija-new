export type FeatureIcon =
  | "home"
  | "explore"
  | "events"
  | "tourism"
  | "gallery"
  | "wishlist"
  | "goai";

export type FeatureCopy = {
  title: string;
  subtitle: string;
  body: string;
  icon: FeatureIcon;
};

export type ScreenshotCopy = {
  title: string;
  subtitle: string;
  src: string;
  caption: string;
};

export type StatCopy = {
  value: number;
  suffix: string;
  label: string;
};

export type Dictionary = {
  nav: {
    links: { href: string; label: string }[];
    cta: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    socialProof: string;
    floatingUpcomingLabel: string;
    floatingUpcomingValue: string;
    floatingAiLabel: string;
    floatingAiValue: string;
  };
  stats: {
    items: StatCopy[];
  };
  features: {
    eyebrow: string;
    title: string;
    description: string;
    items: FeatureCopy[];
  };
  screenshots: {
    eyebrow: string;
    title: string;
    description: string;
    counterTemplate: string;
    items: ScreenshotCopy[];
  };
  download: {
    eyebrow: string;
    title: string;
    description: string;
    appStoreSmall: string;
    appStoreBig: string;
    playStoreSmall: string;
    playStoreBig: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    locationValue: string;
    fields: {
      name: string;
      namePlaceholder: string;
      business: string;
      businessPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      message: string;
      messagePlaceholder: string;
    };
    submit: string;
  };
  footer: {
    blurb: string;
    quickLinks: string;
    quickLinksItems: { href: string; label: string }[];
    resources: string;
    resourcesItems: { href: string; label: string }[];
    copyright: string;
    meta: string[];
  };
  switcher: {
    label: string;
    other: string;
  };
};
