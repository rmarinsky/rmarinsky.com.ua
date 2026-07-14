import { builder, site } from "./site";

export const locales = ["uk", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "uk";

export const siteDescriptions: Record<Locale, string> = {
  uk: "Застосунки Романа Маринського для диктування й транскрипції на Mac, маршрутизації посилань, виправлення розкладки, AI у браузері та MCP інтеграцій.",
  en: "Roman Marinsky builds Mac apps for dictation, meeting transcription, link routing, keyboard layout fixes, browser AI, and practical MCP integrations.",
};

export const localeMeta: Record<Locale, { label: string; lang: string; hreflang: string; ogLocale: string }> = {
  uk: { label: "UA", lang: "uk", hreflang: "uk-UA", ogLocale: "uk_UA" },
  en: { label: "EN", lang: "en", hreflang: "en", ogLocale: "en_US" },
};

function normalizePath(path: string) {
  if (!path || path === "/") {
    return "/";
  }

  const withLeadingSlash = path.startsWith("/") ? path : `/${path}`;
  const lastSegment = withLeadingSlash.split("/").filter(Boolean).at(-1) ?? "";
  const looksLikeFile = /\.[a-z0-9]+$/i.test(lastSegment);

  if (looksLikeFile) {
    return withLeadingSlash;
  }

  return withLeadingSlash.endsWith("/") ? withLeadingSlash : `${withLeadingSlash}/`;
}

export function stripLocalePrefix(path: string) {
  const [pathWithoutHash, hash] = path.split("#");
  const normalized = normalizePath(pathWithoutHash || "/");
  const stripped = normalized === "/en/" ? "/" : normalized.replace(/^\/en\//, "/");
  return hash ? `${stripped}#${hash}` : stripped;
}

export function localizedPath(path: string, locale: Locale) {
  const [pathWithoutHash, hash] = path.split("#");
  const basePath = stripLocalePrefix(pathWithoutHash || "/");
  const localized = locale === "en" ? normalizePath(`/en${basePath === "/" ? "" : basePath}`) : normalizePath(basePath);
  return hash ? `${localized}#${hash}` : localized;
}

export function absoluteLocalizedUrl(path: string, locale: Locale) {
  return new URL(localizedPath(path, locale), site.url).toString();
}

export function alternateLinks(path: string) {
  return locales.map((locale) => ({
    locale,
    href: absoluteLocalizedUrl(path, locale),
    hreflang: localeMeta[locale].hreflang,
  }));
}

export const ui = {
  uk: {
    nav: {
      discover: "Знайти за проблемою",
      macApps: "Mac застосунки",
      extension: "Розширення",
      mcp: "MCP",
      updates: "Апдейти",
      about: "Про Романа",
      open: "Відкрити навігацію",
    },
    footer: {
      discover: "Знайти інструмент",
      products: "Продукти",
      studio: "Студія",
      support: "Підтримка",
      legal: "Правове",
      updates: "Апдейти",
      about: "Про Романа",
      contact: "Контакт",
      howToInstall: "Як встановити",
      help: "Допомога",
      privacy: "Privacy",
      terms: "Terms",
      imprint: "Imprint",
      madeIn: "Зроблено в Україні",
    },
    home: {
      seoTitle: "Диктування, транскрипція, маршрутизація посилань і утиліти для Mac",
      seoDescription:
        "Знайди macOS застосунок для диктування й транскрипції зустрічей, вибору браузера, виправлення розкладки, AI у Chrome та безпечних MCP інтеграцій.",
      eyebrow: "macOS-утиліти для щоденної роботи",
      title: "Диктувати. Відкривати. Виправляти. Без зайвих рухів.",
      lead:
        "Дідуня перетворює голос і зустрічі на чистий текст. AppCat відкриває посилання, файли й потрібні вікна. Папуга виправляє розкладку та повторювані помилки.",
      browseProducts: "Дивитись продукти",
      findByProblem: "Знайти за проблемою",
      aboutRoman: "Про Романа",
      heroMeta: "6 продуктів · UA / EN · RSS + llms.txt · живе на GitHub Pages",
      heroBoardTitle: "Що бісило. Що зробив. Де перевірити.",
      heroBoardBody: "Релізи мають пояснювати людську проблему, а не переповідати git log.",
      macKicker: "Mac застосунки",
      macTitle: "Три короткі шляхи назад до роботи",
      macBody:
        "Кожен продукт починається з дії, яку не хочеться повторювати руками.",
      workflowOutcome: "Результат:",
      extensionKicker: "Browser Extension",
      extensionTitle: "AI поруч зі сторінкою, яку ти вже читаєш",
      extensionCardTitle: "Side panel, який памʼятає про провайдера",
      extensionCardBody:
        "SideBarny зроблений для досліджень, сапорту і QA: захопити елемент сторінки, відправити текст або HTML у потрібний LLM і не втратити контекст.",
      mcpKicker: "MCP сервери",
      mcpTitle: "Операційні API для AI без театру автономності",
      mcpBody:
        "MCP має сенс, коли відкриває вузькі, перевірні дії. Операції читання мають бути дешевими, зміни - з guardrails, а ключі - локально.",
      latestKicker: "Останній апдейт",
      latestTitle: "Що стало менше бісити",
      allUpdates: "Всі апдейти",
      aboutKicker: "Зроблено Романом Маринським",
      aboutTitle: "QA інженер, macOS developer і community builder",
      aboutBody:
        "Я працюю на перетині test automation, Mac productivity і практичних AI інтеграцій. Планка проста: інструмент має забирати friction, а не створювати ще один dashboard для няньчення.",
      moreContext: "Більше контексту",
    },
    product: {
      breadcrumbs: "Продукти",
      stanceKicker: "Позиція продукту",
      featuresKicker: "Що робить",
      featuresTitle: "Сфокусована поведінка, без театру",
      workflowsKicker: "Робочі сценарії",
      workflowsTitle: "Що відбувається від дії до результату",
      problemLabel: "Проблема:",
      outcomeLabel: "Результат:",
      discoveryKicker: "Пошук за проблемою",
      discoveryTitle: "Як цю проблему зазвичай формулюють",
      pricingLabel: "Ціна й умови:",
      contextKicker: "Контекст для вибору",
      contextTitle: "Кому підходить і де проходить межа",
      audienceTitle: "Для кого",
      useCasesTitle: "Коли використовувати",
      inputTitle: "Що подаєш",
      outputTitle: "Що отримуєш",
      constraintsTitle: "Умови",
      notForTitle: "Не для цього",
      allDiscovery: "Всі способи знайти інструмент",
      proofKicker: "Перевірний контекст",
      boundariesKicker: "Межі продукту",
      installKicker: "Встановлення",
      installTitle: "Одна команда, потім перевір README",
      installBody:
        "Для MCP-серверів тримай ключі у локальній конфігурації клієнта. Для Mac-застосунків останні нотатки релізу є джерелом правди по вимогах.",
      faqKicker: "FAQ",
      faqTitle: "Практичні деталі",
      updatesKicker: "Апдейти",
      updatesTitle: "Останні нотатки для",
      allUpdates: "Всі апдейти",
      moreKicker: "Ще продукти",
      moreTitle: "Інші інструменти з тієї ж полиці",
      back: "Назад до всіх продуктів",
    },
    updates: {
      title: "Апдейти",
      description: "Двомовні нотатки релізів і продуктові апдейти інструментів Романа Маринського.",
      eyebrow: "Release notes · UA / EN",
      heading: "Що стало менше бісити цього тижня",
      lead:
        "Практичні нотатки для Mac застосунків, браузерних інструментів і MCP серверів. Формат простий: що дратувало, що змінилось і чому продукт став спокійнішим.",
      read: "Читати апдейт ->",
      all: "Всі апдейти",
      relatedKicker: "Повʼязані продукти",
      relatedTitle: "Де цей апдейт має значення",
      problem: "Що бісило",
      fix: "Що зробив",
      outcome: "Що стало краще",
    },
    discovery: {
      title: "Знайти застосунок за проблемою",
      description:
        "Підбір інструментів Романа Маринського за реальною проблемою: диктування, транскрипція зустрічей, браузери, розкладка, AI у Chrome, платежі та DNS.",
      eyebrow: "Пошук за задачею · UA / EN",
      heading: "Опиши проблему так, як сказав би її людині",
      lead:
        "Не треба знати назву продукту. Тут зібрано задачі, вхідні дані, результати, обмеження й природні формулювання, за якими пошук або AI має знайти правильний інструмент.",
      audience: "Для кого",
      useCases: "Підходить для",
      inputs: "Вхід",
      outputs: "Результат",
      constraints: "Важливі умови",
      notFor: "Не підходить для",
      capabilities: "Перевірені можливості",
      queries: "Як це шукають",
      openProduct: "Перевірити можливості",
      sourceDocs: "Код / документація",
      sourceNote: "Фактичні можливості й обмеження звіряються з публічною сторінкою продукту, release notes та source/docs.",
    },
    about: {
      title: "Про Романа",
      description: "Роман Маринський робить QA, macOS, browser і practical AI інструменти зі Львова.",
      eyebrow: "Роман Маринський",
      heading: "12 років автоматизую тестування. Паралельно роблю macOS-утиліти й збираю технічні спільноти.",
      lead:
        "QA/Test Automation Expert та IT-підприємець зі Львова. Провів 1400+ технічних інтерв'ю, роблю AppCat, Папугу й Дідуню, організовую Party Hard і QA Club Lviv.",
      proof: ["12 років", "1400+ інтерв'ю", "3 macOS продукти", "Львів"],
      timeline: ["QA automation і тестова інженерія", "Технічні інтерв'ю та QA-спільнота", "AppCat, Папуга й Дідуня"],
      community: [
        { name: "QA Club Lviv", role: "організатор спільноти", url: "https://t.me/qa_club_lviv" },
      ],
      quote: "AI має забирати вузьку рутину. Відповідальність за дію лишається в людини.",
      workKicker: "Робота",
      workTitle: "Тестувальницький бекграунд, продуктові інстинкти",
      workBody:
        "Мій дефолтний погляд - quality engineering: чіткі межі, observable behavior, реалістичні failure modes і нуль сліпої віри в hype. Це видно в macOS-застосунках, browser extensions і MCP-серверах.",
      aiKicker: "AI позиція",
      aiTitle: "Асистент, не автопілот",
      aiBody:
        "AI інтеграції мають робити вузьку роботу швидшою і безпечнішою. Reads можуть бути широкими, writes потребують явних gates, а продукт має бути корисним навіть коли модель помиляється.",
      communityKicker: "Комʼюніті й освіта",
      communityTitle: "Проєкти навколо інструментів",
      manufaktura: "Практичні курси з автоматизації без bullshit, включно з AI-треком.",
      partyHard: "Благодійна tech-конференція про реальні розмови, а не тільки сценічний глянець.",
      qaClub: "Регулярні мітапи для QA людей, яким потрібна технічна глибина.",
      kuluary: "Медіа й коментарі про речі, які зазвичай не кажуть вголос.",
      ossKicker: "Open source",
      ossTitle: "Інструменти, які можна інспектити",
      ossAppCat: "macOS-утиліта для маршрутизації посилань, файлів і вікон між потрібними контекстами.",
      ossDiduny: "macOS застосунок для диктування і транскрипції з Dynamic Notch behavior.",
      ossUkraineMcp: "Backup-first MCP server для domain і DNS operations.",
    },
    legal: {
      title: "Правова інформація",
      description: "Privacy, terms і контактні деталі продуктів Романа Маринського.",
      updated: "Оновлено: 17 червня 2026",
      heading: "Правова інформація",
      lead:
        "Коротко: сайт статичний, поведінка продуктів описується в репозиторіях або нотатках релізів, а ключі мають залишатися у твоїх локальних інструментах.",
      navLabel: "Правові розділи",
      privacy: "Privacy",
      terms: "Terms",
      imprint: "Imprint",
      contact: "Contact",
      privacyTitle: "Privacy статичного сайту",
      privacyBody:
        "rmarinsky.com.ua не вимагає акаунт і не має власного tracking layer. Hosting providers можуть обробляти стандартні access logs для безпеки, abuse prevention і доставки сайту.",
      privacyBullets: [
        "Сторінки продуктів лінкують на GitHub, npm і distribution platforms з власними політиками.",
        "Mac-застосунки, browser extensions і MCP-сервери можуть обробляти дані по-різному; перевіряй відповідний репозиторій і нотатки релізів.",
        "Не публікуй API keys, payment credentials, hosting tokens або customer data в issues, chats чи screenshots.",
      ],
      termsTitle: "Використання софту",
      termsBody:
        "Продукти надаються відповідно до ліцензії й документації в кожному репозиторії або distribution channel. Open-source repositories регулюються своїми repository licenses.",
      termsBullets: [
        "Операційні інструменти використовуй з review і backups, особливо для DNS, payments і account changes.",
        "Жоден продукт на цьому сайті не є обіцянкою повністю автономної AI-поведінки.",
        "Availability, pricing і supported platforms можуть змінюватися від релізу до релізу.",
      ],
      publisherTitle: "Видавець",
      publisherBody:
        "Roman Marinsky, Lviv, Ukraine. Цей сайт представляє персональні software projects, community work і product documentation.",
      contactTitle: "Support і privacy requests",
      contactBody: "Для product issues по можливості використовуй GitHub repository. Для приватних запитів пиши на",
    },
    notFound: {
      title: "Не знайдено",
      description: "Запитану сторінку не знайдено.",
      heading: "Сторінку не знайдено",
      lead: "Продукт міг переїхати, або URL набрали вручну.",
      back: "На головну",
    },
  },
  en: {
    nav: {
      discover: "Find by problem",
      macApps: "Mac Apps",
      extension: "Extension",
      mcp: "MCP",
      updates: "Updates",
      about: "About",
      open: "Open navigation",
    },
    footer: {
      discover: "Find a tool",
      products: "Products",
      studio: "Studio",
      support: "Support",
      legal: "Legal",
      updates: "Updates",
      about: "About",
      contact: "Contact",
      howToInstall: "How to install",
      help: "Help",
      privacy: "Privacy",
      terms: "Terms",
      imprint: "Imprint",
      madeIn: "Made in Ukraine",
    },
    home: {
      seoTitle: "Mac Dictation, Meeting Transcription, Link Routing & Utilities",
      seoDescription:
        "Find a macOS app for dictation and meeting transcription, browser selection, keyboard layout fixes, AI beside Chrome pages, and guarded MCP integrations.",
      eyebrow: "macOS utilities for daily work",
      title: "Dictate. Route. Fix. Without the extra moves.",
      lead:
        "Diduny turns voice and meetings into clean text. AppCat routes links, files, and windows. Papuga fixes the wrong keyboard layout and recurring mistakes.",
      browseProducts: "Browse products",
      findByProblem: "Find by problem",
      aboutRoman: "About Roman",
      heroMeta: "6 products · UA / EN · RSS + llms.txt · live on GitHub Pages",
      heroBoardTitle: "What was annoying. What changed. Where to verify.",
      heroBoardBody: "Release notes should explain the human problem, not narrate a git log.",
      macKicker: "Mac Apps",
      macTitle: "Three short paths back to work",
      macBody:
        "Each product starts with an action you should not have to repeat by hand.",
      workflowOutcome: "Outcome:",
      extensionKicker: "Browser Extension",
      extensionTitle: "AI beside the page you are already reading",
      extensionCardTitle: "Provider-aware side panel",
      extensionCardBody:
        "SideBarny is built for real research and support work: capture selected elements, send text or HTML to the LLM you choose, and keep page context close.",
      mcpKicker: "MCP Servers",
      mcpTitle: "Operational APIs your AI can use without pretending to be autonomous",
      mcpBody:
        "MCP is useful when it exposes narrow, reviewable actions. Reads should be cheap, mutations should be gated, and credentials should stay local.",
      latestKicker: "Latest update",
      latestTitle: "What got less annoying",
      allUpdates: "All updates",
      aboutKicker: "Built by Roman Marinsky",
      aboutTitle: "QA engineer, macOS developer, and community builder",
      aboutBody:
        "I work at the intersection of test automation, Mac productivity, and practical AI integrations. The bar is simple: the tool should remove friction, not create another dashboard to babysit.",
      moreContext: "More context",
    },
    product: {
      breadcrumbs: "Products",
      stanceKicker: "Product stance",
      featuresKicker: "What it does",
      featuresTitle: "Focused behavior, no theatre",
      workflowsKicker: "Workflows",
      workflowsTitle: "What happens from action to outcome",
      problemLabel: "Problem:",
      outcomeLabel: "Outcome:",
      discoveryKicker: "Search by problem",
      discoveryTitle: "How people usually describe this problem",
      pricingLabel: "Price and terms:",
      contextKicker: "Selection context",
      contextTitle: "Who it fits and where the boundary is",
      audienceTitle: "Who it fits",
      useCasesTitle: "Use it when",
      inputTitle: "Input",
      outputTitle: "Output",
      constraintsTitle: "Constraints",
      notForTitle: "Not for",
      allDiscovery: "See every way to find a tool",
      proofKicker: "Verifiable context",
      boundariesKicker: "Product boundary",
      installKicker: "Install",
      installTitle: "One command, then review the app docs",
      installBody:
        "For MCP servers, keep credentials in your local client config. For Mac apps, use the latest release notes as the source of truth for requirements.",
      faqKicker: "FAQ",
      faqTitle: "Practical details",
      updatesKicker: "Updates",
      updatesTitle: "Latest notes for",
      allUpdates: "All updates",
      moreKicker: "More products",
      moreTitle: "Other tools from the same shelf",
      back: "Back to all products",
    },
    updates: {
      title: "Updates",
      description: "Bilingual release notes and product updates for Roman Marinsky tools.",
      eyebrow: "Release notes · UA / EN",
      heading: "What got less annoying this week",
      lead:
        "Practical update notes for the Mac apps, browser tools, and operational MCP servers. The format is simple: what was irritating, what changed, and why the product is calmer now.",
      read: "Read the release note ->",
      all: "All updates",
      relatedKicker: "Related products",
      relatedTitle: "Where this update matters",
      problem: "What was annoying",
      fix: "What changed",
      outcome: "What is better now",
    },
    discovery: {
      title: "Find an app by the problem",
      description:
        "Find Roman Marinsky tools by the real problem: Mac dictation, meeting transcription, browser routing, keyboard layout fixes, browser AI, payments, or DNS.",
      eyebrow: "Search by job · UA / EN",
      heading: "Describe the problem the way you would describe it to a person",
      lead:
        "You do not need to know the product name. This page maps jobs, inputs, outputs, constraints, and natural search phrasing to the tool that actually fits.",
      audience: "Who it fits",
      useCases: "Use it for",
      inputs: "Input",
      outputs: "Output",
      constraints: "Important constraints",
      notFor: "Not a fit for",
      capabilities: "Verified capabilities",
      queries: "How people search for it",
      openProduct: "Verify capabilities",
      sourceDocs: "Source / docs",
      sourceNote: "Capabilities and boundaries should be verified against the public product page, release notes, and linked source/docs.",
    },
    about: {
      title: "About",
      description: "Roman Marinsky builds QA, macOS, browser, and practical AI tools from Lviv, Ukraine.",
      eyebrow: "Roman Marinsky",
      heading: "12 years in test automation. In parallel, I build macOS utilities and technical communities.",
      lead:
        "QA/Test Automation Expert and IT entrepreneur from Lviv. I have run 1400+ technical interviews, build AppCat, Papuga, and Diduny, and organise Party Hard and QA Club Lviv.",
      proof: ["12 years", "1400+ interviews", "3 macOS products", "Lviv"],
      timeline: ["QA automation and quality engineering", "Technical interviews and the QA community", "AppCat, Papuga, and Diduny"],
      community: [
        { name: "QA Club Lviv", role: "community organiser", url: "https://t.me/qa_club_lviv" },
      ],
      quote: "AI should remove narrow routine. Responsibility for the action stays with the person.",
      workKicker: "Work",
      workTitle: "Testing background, product instincts",
      workBody:
        "My default lens is quality engineering: clear boundaries, observable behavior, realistic failure modes, and no blind faith in hype. That affects how I build macOS apps, browser extensions, and MCP servers.",
      aiKicker: "AI stance",
      aiTitle: "Assistant, not autopilot",
      aiBody:
        "AI integrations should make a narrow job faster and safer. Reads can be broad, writes need explicit gates, and every product should be useful even when the model is wrong.",
      communityKicker: "Community and education",
      communityTitle: "Projects around the tools",
      manufaktura: "Practical automation courses without bullshit, including AI-track work.",
      partyHard: "A charity tech conference built around real conversations, not stage polish.",
      qaClub: "Regular meetups for QA people who want useful technical depth.",
      kuluary: "Media and commentary about the parts people usually do not say out loud.",
      ossKicker: "Open source",
      ossTitle: "Tools I keep inspectable",
      ossAppCat: "A macOS utility for routing links, files, and windows across the right contexts.",
      ossDiduny: "A macOS dictation/transcription app with Dynamic Notch behavior.",
      ossUkraineMcp: "A backup-first MCP server for domain and DNS operations.",
    },
    legal: {
      title: "Legal",
      description: "Privacy, terms, and contact details for Roman Marinsky products.",
      updated: "Last updated: 17 June 2026",
      heading: "Legal",
      lead:
        "Short version: this site is static, product behavior is documented per repository or release, and credentials should stay in your local tools.",
      navLabel: "Legal sections",
      privacy: "Privacy",
      terms: "Terms",
      imprint: "Imprint",
      contact: "Contact",
      privacyTitle: "Static site privacy",
      privacyBody:
        "rmarinsky.com.ua does not require an account and does not include a custom tracking layer. Hosting providers may process standard access logs for security, abuse prevention, and delivery.",
      privacyBullets: [
        "Product pages link to GitHub, npm, and distribution platforms that have their own policies.",
        "Mac apps, browser extensions, and MCP servers may process data differently; check the relevant repository and release notes.",
        "Do not publish API keys, payment credentials, hosting tokens, or customer data in issues, chats, or screenshots.",
      ],
      termsTitle: "Software usage",
      termsBody:
        "Products are provided according to the license and documentation in each repository or distribution channel. Open-source repositories remain governed by their repository license.",
      termsBullets: [
        "Use operational tools with review and backups, especially for DNS, payments, and account changes.",
        "No product on this site is a promise of fully autonomous AI behavior.",
        "Availability, pricing, and supported platforms can change by release.",
      ],
      publisherTitle: "Publisher",
      publisherBody:
        "Roman Marinsky, Lviv, Ukraine. This site represents personal software projects, community work, and product documentation.",
      contactTitle: "Support and privacy requests",
      contactBody: "For product issues, use the linked GitHub repository when possible. For private requests, contact",
    },
    notFound: {
      title: "Not Found",
      description: "The requested page was not found.",
      heading: "Page not found",
      lead: "The product may have moved, or the URL was typed manually.",
      back: "Back to homepage",
    },
  },
} as const;

export function getSiteJsonLd(locale: Locale, includeWebsite = false) {
  const homeUrl = absoluteLocalizedUrl("/", locale);

  const person = {
    "@type": "Person",
    "@id": `${site.url}/#person`,
    name: builder.name,
    alternateName: builder.alternateNames,
    url: homeUrl,
    description: ui[locale].about.description,
    image: `${site.url}/images/products/diduny-overview.png`,
    jobTitle: builder.roles,
    hasOccupation: builder.roles.map((name) => ({ "@type": "Occupation", name })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lviv",
      addressCountry: "UA",
    },
    sameAs: [site.github, site.linkedin, site.npm, site.x],
    knowsAbout: [...builder.expertise, ...builder.products.map((product) => product.name)],
    subjectOf: [
      { "@type": "AboutPage", url: absoluteLocalizedUrl("/about/", locale) },
      ...builder.products.map((product) => ({
        "@type": "SoftwareApplication",
        name: product.name,
        url: absoluteLocalizedUrl(`/${product.slug}/`, locale),
      })),
    ],
  };

  if (!includeWebsite) {
    return { "@context": "https://schema.org", ...person };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: site.name,
        alternateName: [site.domain, "Roman Marinskyi"],
        url: site.url,
        inLanguage: ["uk-UA", "en"],
        publisher: { "@id": `${site.url}/#person` },
        description: siteDescriptions[locale],
      },
    ],
  };
}
