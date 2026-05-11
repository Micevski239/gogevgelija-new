import type { Dictionary } from "./types";

const mk: Dictionary = {
  nav: {
    links: [
      { href: "#features", label: "Можности" },
      { href: "#screenshots", label: "Екрани" },
      { href: "#download", label: "Преземи" },
      { href: "#contact", label: "Контакт" },
    ],
    cta: "Преземи ја",
  },
  hero: {
    badge: "iOS & Android · Македонски и Англиски",
    titleLine1: "Откриј ја",
    titleLine2: "Гевгелија.",
    body: "Откриј локални места, настани, понуди, туризам и скриени препораки низ Гевгелија - во една модерна апликација создадена за локалци и посетители.",
    primaryCta: "Преземи ја апликацијата",
    secondaryCta: "Види што има внатре",
    socialProof: "Сакана од локалци и посетители низ Гевгелија.",
    floatingUpcomingLabel: "Претстојно",
    floatingUpcomingValue: "Модно шоу · 13:00",
    floatingAiLabel: "GoAI",
    floatingAiValue: "Прашај што сакаш",
  },
  stats: {
    items: [
      { value: 35, suffix: "+", label: "Локални места" },
      { value: 50, suffix: "+", label: "Настани месечно" },
      { value: 17, suffix: "+", label: "Категории" },
      { value: 100, suffix: "%", label: "Бесплатна" },
    ],
  },
  features: {
    eyebrow: "Можности",
    title: "Создадена да ти помогне да ја искусиш Гевгелија подобро.",
    description: "Еден град. Една апликација. Безброј откритија.",
    items: [
      {
        title: "Почетна",
        subtitle: "Home",
        body: "Твојата почетна точка за Гевгелија - истакнати места, нови настани и препораки што вреди да ги откриеш.",
        icon: "home",
      },
      {
        title: "Истражи",
        subtitle: "Explore",
        body: "Истражувај низ 17+ категории - ресторани, кафулиња, фитнес, шопинг, сместувања и многу повеќе.",
        icon: "explore",
      },
      {
        title: "Настани",
        subtitle: "Events",
        body: "Откриј концерти, промоции, модни шоуа, наградни игри и локални случувања што не сакаш да ги пропуштиш.",
        icon: "events",
      },
      {
        title: "Туризам",
        subtitle: "Tourism",
        body: "Практичен туристички водич за посетители - сместувања, храна, валути, гранични информации, сервиси и дентален туризам.",
        icon: "tourism",
      },
      {
        title: "Галерија",
        subtitle: "Gallery",
        body: "Автентична Гевгелија низ објективот на локални фотографи - места, атмосфера и моменти.",
        icon: "gallery",
      },
      {
        title: "Листа на желби",
        subtitle: "Wishlist",
        body: "Зачувај ги омилените места и настани и организирај ги твоите планови на едно место.",
        icon: "wishlist",
      },
      {
        title: "GoAI Асистент",
        subtitle: "GoAI Assistant",
        body: "GoAI е твојот локален AI асистент за Гевгелија - прашај за места, настани, понуди, туризам или како да ја користиш апликацијата.",
        icon: "goai",
      },
    ],
  },
  screenshots: {
    eyebrow: "Внатре во апликацијата",
    title: "Дизајнирана за брзо и лесно откривање.",
    description: "Скролај низ седумте главни екрани на GoGevgelija.",
    counterTemplate: "{n} екрани →",
    items: [
      {
        title: "Почетна",
        subtitle: "Home",
        src: "/screens/home.jpg",
        caption:
          "Личен поздрав, истакнати места и претстојни настани на еден поглед.",
      },
      {
        title: "Категории",
        subtitle: "Explore",
        src: "/screens/explore.jpg",
        caption: "Сите 17+ категории во една уредна мрежа со пребарување.",
      },
      {
        title: "Настани",
        subtitle: "Events",
        src: "/screens/events.jpg",
        caption:
          "Хиро приказни, филтри по категорија и листа на сите претстојни настани.",
      },
      {
        title: "Туризам",
        subtitle: "Tourism",
        src: "/screens/tourism.jpg",
        caption: "Практичен туристички водич за посетители на Гевгелија.",
      },
      {
        title: "Галерија",
        subtitle: "Gallery",
        src: "/screens/gallery.jpg",
        caption:
          "Гевгелија низ објективот - куратирана фотографија од локални партнери.",
      },
      {
        title: "Листа на желби",
        subtitle: "Wishlist",
        src: "/screens/wishlist.jpg",
        caption: "Зачувај места и настани во една организирана листа.",
      },
      {
        title: "GoAI",
        subtitle: "Асистент",
        src: "/screens/goai.jpg",
        caption: "Вграден AI асистент што ја знае Гевгелија одлично.",
      },
    ],
  },
  download: {
    eyebrow: "Достапна сега",
    title: "Гевгелија, секогаш со тебе.",
    description:
      "Преземи ја апликацијата и откривај места, настани и препораки за секунди.",
    appStoreSmall: "Преземи на",
    appStoreBig: "App Store",
    playStoreSmall: "Земи ја на",
    playStoreBig: "Google Play",
  },
  contact: {
    eyebrow: "Контакт",
    title: "Ајде да соработуваме.",
    description:
      "Прашања, партнерства или предлози? Со задоволство ќе слушнеме.",
    emailLabel: "Е-пошта",
    phoneLabel: "Телефон",
    locationLabel: "Локација",
    locationValue: "Гевгелија, Северна Македонија",
    fields: {
      name: "Контакт лице",
      namePlaceholder: "Иван Ивановски",
      business: "Назив на бизнис",
      businessPlaceholder: "Ваш ресторан, продавница, хотел...",
      email: "Е-пошта",
      emailPlaceholder: "ivan@example.com",
      phone: "Телефон (опционално)",
      phonePlaceholder: "+389 ...",
      message: "Порака (опционално)",
      messagePlaceholder: "Кажи ни повеќе...",
    },
    submit: "Прати порака",
  },
  footer: {
    blurb: "Модерниот градски водич за Гевгелија.",
    quickLinks: "Брзи линкови",
    quickLinksItems: [
      { href: "#top", label: "Почетна" },
      { href: "#features", label: "Можности" },
      { href: "#screenshots", label: "Екрани" },
      { href: "#download", label: "Преземи" },
      { href: "#contact", label: "Контакт" },
    ],
    resources: "Информации",
    resourcesItems: [
      { href: "#", label: "За нас" },
      { href: "#", label: "Политика на приватност" },
      { href: "#", label: "Услови за користење" },
      { href: "#", label: "Центар за помош" },
      { href: "#", label: "Често поставувани" },
    ],
    copyright: "© 2026 GoGevgelija. Сите права задржани.",
    meta: ["Верзија 4.1", "iOS & Android", "EN / MK"],
  },
  switcher: {
    label: "МК",
    other: "EN",
  },
};

export default mk;
