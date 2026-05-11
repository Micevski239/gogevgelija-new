import type { Dictionary } from "./types";

const en: Dictionary = {
  nav: {
    links: [
      { href: "#features", label: "Features" },
      { href: "#screenshots", label: "Screens" },
      { href: "#download", label: "Download" },
      { href: "#contact", label: "Contact" },
    ],
    cta: "Get the app",
  },
  hero: {
    badge: "iOS & Android · Macedonian & English",
    titleLine1: "Discover",
    titleLine2: "Gevgelija.",
    body: "Discover local places, events, deals, tourism and hidden recommendations across Gevgelija - in one modern app built for locals and visitors.",
    primaryCta: "Download the app",
    secondaryCta: "See what's inside",
    socialProof: "Loved by locals & visitors across Gevgelija.",
    floatingUpcomingLabel: "Upcoming",
    floatingUpcomingValue: "Fashion show · 13:00",
    floatingAiLabel: "GoAI",
    floatingAiValue: "Ask anything",
  },
  stats: {
    items: [
      { value: 35, suffix: "+", label: "Local places" },
      { value: 50, suffix: "+", label: "Events monthly" },
      { value: 17, suffix: "+", label: "Categories" },
      { value: 100, suffix: "%", label: "Free" },
    ],
  },
  features: {
    eyebrow: "Features",
    title: "Built to help you experience Gevgelija better.",
    description: "One city. One app. Countless discoveries.",
    items: [
      {
        title: "Home",
        subtitle: "Почетна",
        body: "Your starting point for Gevgelija - featured places, new events and recommendations worth discovering.",
        icon: "home",
      },
      {
        title: "Explore",
        subtitle: "Истражи",
        body: "Browse 17+ categories - restaurants, cafés, fitness, shopping, accommodation and much more.",
        icon: "explore",
      },
      {
        title: "Events",
        subtitle: "Настани",
        body: "Discover concerts, promotions, fashion shows, giveaways and local happenings you don't want to miss.",
        icon: "events",
      },
      {
        title: "Tourism",
        subtitle: "Туризам",
        body: "A practical travel guide for visitors - accommodation, food, currency, border information, services and dental tourism.",
        icon: "tourism",
      },
      {
        title: "Gallery",
        subtitle: "Галерија",
        body: "Authentic Gevgelija through the lens of local photographers - places, atmosphere and moments.",
        icon: "gallery",
      },
      {
        title: "Wishlist",
        subtitle: "Листа на желби",
        body: "Save your favorite places and events and organize your plans in one place.",
        icon: "wishlist",
      },
      {
        title: "GoAI Assistant",
        subtitle: "GoAI Асистент",
        body: "GoAI is your local AI assistant for Gevgelija - ask about places, events, deals, tourism or how to use the app.",
        icon: "goai",
      },
    ],
  },
  screenshots: {
    eyebrow: "Inside the app",
    title: "Designed for quick and effortless discovery.",
    description: "Scroll through the seven core screens of GoGevgelija.",
    counterTemplate: "{n} screens →",
    items: [
      {
        title: "Home",
        subtitle: "Почетна",
        src: "/screens/home.jpg",
        caption:
          "Personalized greeting, featured listings, and upcoming events at a glance.",
      },
      {
        title: "Explore",
        subtitle: "Категории",
        src: "/screens/explore.jpg",
        caption: "All 17+ categories in one tidy grid with instant search.",
      },
      {
        title: "Events",
        subtitle: "Настани",
        src: "/screens/events.jpg",
        caption:
          "Hero stories, category filters, and a full list of upcoming events.",
      },
      {
        title: "Tourism",
        subtitle: "Туризам",
        src: "/screens/tourism.jpg",
        caption: "A practical travel guide for visitors to Gevgelija.",
      },
      {
        title: "Gallery",
        subtitle: "Галерија",
        src: "/screens/gallery.jpg",
        caption:
          "Gevgelija through the lens - curated photography from local partners.",
      },
      {
        title: "Wishlist",
        subtitle: "Листа на желби",
        src: "/screens/wishlist.jpg",
        caption: "Save places and events to one organized list.",
      },
      {
        title: "GoAI",
        subtitle: "Асистент",
        src: "/screens/goai.jpg",
        caption: "An in-app AI assistant that knows Gevgelija inside out.",
      },
    ],
  },
  download: {
    eyebrow: "Available now",
    title: "Gevgelija, always with you.",
    description:
      "Download the app and start discovering places, events and recommendations in seconds.",
    appStoreSmall: "Download on",
    appStoreBig: "App Store",
    playStoreSmall: "Get it on",
    playStoreBig: "Google Play",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's collaborate.",
    description:
      "Questions, partnerships or suggestions? We'd love to hear from you.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    locationLabel: "Location",
    locationValue: "Gevgelija, North Macedonia",
    fields: {
      name: "Contact person",
      namePlaceholder: "John Doe",
      business: "Business name",
      businessPlaceholder: "Your restaurant, shop, hotel...",
      email: "Email",
      emailPlaceholder: "john@example.com",
      phone: "Phone (optional)",
      phonePlaceholder: "+389 ...",
      message: "Message (optional)",
      messagePlaceholder: "Tell us more...",
    },
    submit: "Send message",
  },
  footer: {
    blurb: "The modern city guide for Gevgelija.",
    quickLinks: "Quick links",
    quickLinksItems: [
      { href: "#top", label: "Home" },
      { href: "#features", label: "Features" },
      { href: "#screenshots", label: "Screenshots" },
      { href: "#download", label: "Download" },
      { href: "#contact", label: "Contact" },
    ],
    resources: "Information",
    resourcesItems: [
      { href: "#", label: "About" },
      { href: "#", label: "Privacy policy" },
      { href: "#", label: "Terms of service" },
      { href: "#", label: "Help center" },
      { href: "#", label: "FAQ" },
    ],
    copyright: "© 2026 GoGevgelija. All rights reserved.",
    meta: ["Version 4.1", "iOS & Android", "EN / MK"],
  },
  switcher: {
    label: "EN",
    other: "MK",
  },
};

export default en;
