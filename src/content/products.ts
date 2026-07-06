import type { Locale } from "./i18n";

export type ProductKind = "mac" | "extension" | "mcp";

export interface Product {
  slug: string;
  letter: string;
  name: string;
  latinName: string;
  title: string;
  kind: ProductKind;
  accent: "diduny" | "browsercat" | "papuga" | "sidebarny" | "wayforpay" | "ukraine";
  summary: string;
  homepageSummary: string;
  primaryCta: string;
  primaryUrl: string;
  secondaryCta?: string;
  secondaryUrl?: string;
  installCommand?: string;
  image: {
    src: string;
    alt: string;
    variant: "app" | "panel" | "docs";
  };
  badges: string[];
  privacyTitle: string;
  privacyBody: string;
  features: Array<{ title: string; body: string; tone?: "read" | "gated" }>;
  faq: Array<{ question: string; answer: string }>;
  finalCta: string;
}

export const products: Product[] = [
  {
    slug: "diduny",
    letter: "D",
    name: "Дідуня",
    latinName: "Diduny",
    title: "Voice dictation for your whole Mac",
    kind: "mac",
    accent: "diduny",
    summary:
      "Speak naturally and let Diduny type into the app you are already using. Records, transcribes, and pastes without forcing you into a separate editor.",
    homepageSummary: "Voice dictation for your whole Mac - speak, it types.",
    primaryCta: "Download for Mac",
    primaryUrl: "https://github.com/rmarinsky/Diduny/releases/latest",
    secondaryCta: "View source",
    secondaryUrl: "https://github.com/rmarinsky/Diduny",
    image: {
      src: "/images/products/diduny-overview.png",
      alt: "Diduny macOS app overview screen with dictation statistics and recent recordings",
      variant: "app",
    },
    badges: ["macOS app", "notarized", "auto-updates", "open source"],
    privacyTitle: "Audio stays under your control",
    privacyBody:
      "Diduny is built as a local Mac utility first. Any transcription routing should be explicit, documented, and controlled from the app settings.",
    features: [
      { title: "Menu-bar workflow", body: "Trigger dictation without switching away from the app where you need the text." },
      { title: "Dynamic Notch", body: "Uses native Mac UI patterns so recording state is visible without stealing focus." },
      { title: "Built for daily notes", body: "Short commands, messages, and rough notes are the core use case." },
      { title: "Open development", body: "The app is public, inspectable, and shipped with a practical release flow." },
    ],
    faq: [
      { question: "Does it replace a full transcription studio?", answer: "No. It is a fast dictation utility for getting text into the Mac apps you already use." },
      { question: "Is it free?", answer: "The project is open source. Distribution details can change by release, so use the latest release notes as source of truth." },
      { question: "Where do I report issues?", answer: "Use the GitHub repository issues or contact Roman directly from the About page." },
    ],
    finalCta: "Stop retyping short thoughts",
  },
  {
    slug: "browsercat",
    letter: "B",
    name: "Браузер Киця",
    latinName: "BrowserCat",
    title: "Open every link in the right browser",
    kind: "mac",
    accent: "browsercat",
    summary:
      "Pick which browser, profile, or app should open each link. BrowserCat is a small Mac utility for people who live across work, personal, and test contexts.",
    homepageSummary: "Open every link in the right browser.",
    primaryCta: "Download for Mac",
    primaryUrl: "https://github.com/rmarinsky/BrowserCat/releases/latest",
    secondaryCta: "View source",
    secondaryUrl: "https://github.com/rmarinsky/BrowserCat",
    image: {
      src: "/images/products/browsercat-overview.png",
      alt: "BrowserCat macOS app overview screen with link routing statistics and suggested rules",
      variant: "app",
    },
    badges: ["macOS app", "menu bar", "rules", "open source"],
    privacyTitle: "Rules are local",
    privacyBody:
      "BrowserCat does not need an account to decide where a link should open. Rules are designed as a local productivity tool.",
    features: [
      { title: "Per-domain rules", body: "Route work, personal, staging, and test links to the browser that belongs to that context." },
      { title: "Profile-aware", body: "Use browser profiles deliberately instead of cleaning up sessions by hand." },
      { title: "Quick picker", body: "Choose a target when automation would be wrong." },
      { title: "Native Mac utility", body: "Small surface area, menu-bar presence, and predictable behavior." },
    ],
    faq: [
      { question: "Who is it for?", answer: "QA engineers, developers, support, and anyone switching between multiple browsers or profiles." },
      { question: "Does it track browsing?", answer: "It is designed as a local routing utility. Review the source and release notes for exact behavior." },
      { question: "Can I contribute rules?", answer: "Open a GitHub issue or pull request with a concrete use case." },
    ],
    finalCta: "Make every link open where it belongs",
  },
  {
    slug: "papuga",
    letter: "P",
    name: "Папуга",
    latinName: "Papuga",
    title: "Виправляй текст, набраний не тією розкладкою",
    kind: "mac",
    accent: "papuga",
    summary:
      "Папуга миттєво конвертує виділений текст між розкладками - ghbdsn стає «привіт» прямо в полі. Без копіпаст-акробатики.",
    homepageSummary: "Fix text typed in the wrong layout.",
    primaryCta: "Download for Mac",
    primaryUrl: "https://github.com/rmarinsky/papuga/releases/latest",
    secondaryCta: "View source",
    secondaryUrl: "https://github.com/rmarinsky/papuga",
    installCommand: "brew install --cask papuga",
    image: {
      src: "/images/products/papuga-overview.png",
      alt: "Papuga macOS app overview screen with keyboard layout rescue statistics and recent fixes",
      variant: "app",
    },
    badges: ["macOS 14+", "Apple-notarized", "Sparkle updates", "free", "open source"],
    privacyTitle: "Private by design",
    privacyBody:
      "Keystrokes and clipboard text are processed locally. History is kept on-device and there is no account or tracking layer.",
    features: [
      { title: "Select the text", body: "Highlight gibberish in any app - chat, form, browser, or document." },
      { title: "Hit your shortcut", body: "Use the default shortcut or your own hotkey." },
      { title: "Fixed in place", body: "Papuga converts, pastes the result, and switches your layout." },
      { title: "Learns your habits", body: "Add allowlist entries and rules after repeated fixes." },
    ],
    faq: [
      { question: "Як виправити текст, набраний не тією розкладкою?", answer: "Виділіть текст і викличте shortcut. Папуга конвертує його між системними розкладками і вставить готовий результат." },
      { question: "Does it work with any keyboard layout?", answer: "Papuga builds conversions from active macOS input sources, so custom behavior depends on installed layouts." },
      { question: "Чи безпечно це?", answer: "Обробка відбувається локально. Для релізу все одно треба звірити privacy copy з актуальною поведінкою app." },
      { question: "Is it free?", answer: "Yes, the app is free and open source." },
    ],
    finalCta: "Stop fighting your keyboard layout",
  },
  {
    slug: "sidebarny",
    letter: "S",
    name: "SideBarny",
    latinName: "Sidebar.next",
    title: "An AI side panel for your browser",
    kind: "extension",
    accent: "sidebarny",
    summary:
      "Open LLMs beside any page, capture text or HTML with a click, and parse LinkedIn threads without leaving the tab. Built for QA, devs, product, and support.",
    homepageSummary: "An AI side panel for your browser.",
    primaryCta: "Add to Chrome",
    primaryUrl: "https://github.com/rmarinsky/sidebarny-extension",
    secondaryCta: "View source",
    secondaryUrl: "https://github.com/rmarinsky/sidebarny-extension",
    image: {
      src: "/images/products/sidebarny-sidepanel.png",
      alt: "SideBarny Chrome side panel UI with provider selector and capture controls",
      variant: "panel",
    },
    badges: ["Chrome extension", "8 AI providers", "free", "minimal permissions"],
    privacyTitle: "Your data stays private",
    privacyBody:
      "Captured page content goes only to the AI provider you pick. The extension should not proxy, store, sell, or read content beyond the requested action.",
    features: [
      { title: "8 AI providers", body: "ChatGPT, Claude, Gemini, Grok, Copilot, Rovo, Poe, and HuggingChat side by side." },
      { title: "Element picker", body: "Hover and grab the page element you actually need." },
      { title: "Capture text or HTML", body: "Send visible text or full markup straight into the chat." },
      { title: "LinkedIn parsing", body: "Grab the whole thread - names, roles, replies." },
      { title: "Auto-paste", body: "Captured content lands in the provider input. No manual paste ritual." },
      { title: "Minimal permissions", body: "Extended access should be requested only when needed." },
    ],
    faq: [
      { question: "Which browsers are supported?", answer: "Chrome and Chromium-based browsers. Exact distribution depends on Chrome Web Store publication state." },
      { question: "Чи безпечно давати доступ до сторінок?", answer: "Доступ має запитуватись лише за потреби, а захоплений контент має йти тільки в обраний LLM." },
      { question: "Is it free?", answer: "Yes. Some AI providers may require their own account." },
    ],
    finalCta: "Stop tab-switching to your AI",
  },
  {
    slug: "wayforpay-mcp",
    letter: "W",
    name: "WayForPay MCP",
    latinName: "WayForPay MCP",
    title: "WayForPay, inside Claude & Cursor",
    kind: "mcp",
    accent: "wayforpay",
    summary:
      "Ask your AI for merchant balance, transactions, invoices, and refunds - and let it act with gated mutations. Model Context Protocol, installed with one copy-paste.",
    homepageSummary: "Payments inside Claude and Cursor.",
    primaryCta: "Copy install config",
    primaryUrl: "https://github.com/rmarinsky/wayforpay-mcp",
    secondaryCta: "Read the docs",
    secondaryUrl: "https://github.com/rmarinsky/wayforpay-mcp#readme",
    installCommand:
      'npx @rmarinsky/wayforpay-mcp',
    image: {
      src: "/images/products/wayforpay-mcp-readme.png",
      alt: "WayForPay MCP README tool table showing read and gated write operations",
      variant: "docs",
    },
    badges: ["npm", "MIT license", "Claude", "Cursor", "5 tools", "open source"],
    privacyTitle: "Your keys never touch our servers",
    privacyBody:
      "WayForPay credentials are read from your local client config and sent only to WayForPay APIs. Mutations should be gated and require explicit approval.",
    features: [
      { title: "get_merchant_balance", body: "Current available balance.", tone: "read" },
      { title: "list_transactions", body: "Filterable payment history.", tone: "read" },
      { title: "list_regular_payments", body: "Recurring and subscription payments.", tone: "read" },
      { title: "create_invoice", body: "Generate a payment link.", tone: "gated" },
      { title: "refund", body: "Refund a transaction.", tone: "gated" },
      { title: "settle", body: "Settle a held payment.", tone: "gated" },
    ],
    faq: [
      { question: "Which clients are supported?", answer: "Any MCP client that accepts a standard mcpServers config, including Claude Desktop, Claude Code, Cursor, and VS Code-style clients." },
      { question: "Чи безпечні мої платіжні дані?", answer: "Ключі читаються з локальної конфігурації. Будь-які мутації мають вимагати явного підтвердження." },
      { question: "How do I keep it updated?", answer: "npx fetches the latest published version on launch, unless your client pins a package version." },
    ],
    finalCta: "Let your AI talk to WayForPay",
  },
  {
    slug: "ukraine-com-ua-mcp",
    letter: "U",
    name: "ukraine.com.ua MCP",
    latinName: "ukraine.com.ua MCP",
    title: "Domains, DNS, and hosting from chat",
    kind: "mcp",
    accent: "ukraine",
    summary:
      "Manage domains, DNS records, backups, and account checks for ukraine.com.ua / adm.tools through a narrow MCP server with backup-first safety.",
    homepageSummary: "Domains, DNS and hosting from chat.",
    primaryCta: "Copy install config",
    primaryUrl: "https://github.com/rmarinsky/ukraine-com-ua-mcp",
    secondaryCta: "Read the docs",
    secondaryUrl: "https://github.com/rmarinsky/ukraine-com-ua-mcp#readme",
    installCommand: "npx @rmarinsky/ukraine-com-ua-mcp",
    image: {
      src: "/images/products/ukraine-mcp-readme.png",
      alt: "ukraine.com.ua MCP README tool table showing domain, DNS, backup, and restore operations",
      variant: "docs",
    },
    badges: ["npm", "adm.tools", "DNS backup", "open source"],
    privacyTitle: "Backup-first DNS changes",
    privacyBody:
      "Write tools require a fresh DNS backup id before mutation. That catches stale zones and gives you a rollback path.",
    features: [
      { title: "List domains", body: "Find registered domains and their ids before making changes.", tone: "read" },
      { title: "Audit DNS records", body: "Read A, CNAME, MX, TXT, and other records from adm.tools.", tone: "read" },
      { title: "Backup zone", body: "Snapshot a zone before writes.", tone: "read" },
      { title: "Create record", body: "Add DNS records after backup verification.", tone: "gated" },
      { title: "Update record", body: "Change records with stale-zone protection.", tone: "gated" },
      { title: "Restore zone", body: "Replay a backup if a DNS change went wrong.", tone: "gated" },
    ],
    faq: [
      { question: "Does it replace the adm.tools UI?", answer: "No. It covers routine API-backed DNS workflows. Some hosting and SSL actions still require the web UI." },
      { question: "Why require backups?", answer: "DNS has no transaction semantics here. Backup verification prevents overwriting a zone that changed after you read it." },
      { question: "Is it safe for destructive actions?", answer: "Destructive actions require explicit confirmation and a fresh backup. Still review every mutation before running it." },
    ],
    finalCta: "Manage DNS without opening a control panel",
  },
];

type ProductLocalizedFields = Partial<
  Pick<
    Product,
    | "title"
    | "summary"
    | "homepageSummary"
    | "primaryCta"
    | "secondaryCta"
    | "badges"
    | "privacyTitle"
    | "privacyBody"
    | "features"
    | "faq"
    | "finalCta"
  > & { imageAlt: string }
>;

const productCopy: Record<string, Partial<Record<Locale, ProductLocalizedFields>>> = {
  diduny: {
    uk: {
      title: "Диктування голосом для всього Mac",
      summary:
        "Говориш нормальною мовою, а Дідуня друкує в тому застосунку, де ти вже працюєш. Записує, транскрибує і вставляє текст без окремого редактора.",
      homepageSummary: "Говориш - Mac друкує. Без зайвих вікон.",
      primaryCta: "Завантажити для Mac",
      secondaryCta: "Дивитись код",
      badges: ["macOS app", "notarized", "auto-updates", "open source"],
      imageAlt: "Огляд macOS застосунку Дідуня зі статистикою диктування і останніми записами",
      privacyTitle: "Аудіо лишається під твоїм контролем",
      privacyBody:
        "Дідуня спершу задуманий як локальна Mac-утиліта. Будь-який routing транскрипції має бути явним, задокументованим і керованим у налаштуваннях.",
      features: [
        { title: "Menu-bar workflow", body: "Запускай диктування без перемикання з того застосунку, де потрібен текст." },
        { title: "Dynamic Notch", body: "Стан запису видно нативно для Mac, без крадіжки фокуса." },
        { title: "Для щоденних нотаток", body: "Короткі команди, повідомлення і чорнові думки - основний сценарій." },
        { title: "Відкрита розробка", body: "Проєкт публічний, inspectable і шипиться через практичний release flow." },
      ],
      faq: [
        { question: "Це заміна повноцінній transcription studio?", answer: "Ні. Це швидка dictation utility, щоб занести текст у Mac apps, якими ти вже користуєшся." },
        { question: "Він безкоштовний?", answer: "Проєкт open source. Distribution details можуть змінюватися по релізах, тому latest release notes - джерело правди." },
        { question: "Де репортити проблеми?", answer: "У GitHub issues або напряму Роману через сторінку About." },
      ],
      finalCta: "Досить передруковувати короткі думки",
    },
  },
  browsercat: {
    uk: {
      title: "Відкривай кожен лінк у правильному браузері",
      summary:
        "Обирай, який браузер, профіль або застосунок має відкривати конкретний лінк. Браузер Киця для людей, які живуть між work, personal і test contexts.",
      homepageSummary: "Кожен лінк відкривається там, де має.",
      primaryCta: "Завантажити для Mac",
      secondaryCta: "Дивитись код",
      badges: ["macOS app", "menu bar", "rules", "open source"],
      imageAlt: "Огляд macOS застосунку BrowserCat зі статистикою routing rules і suggested rules",
      privacyTitle: "Rules живуть локально",
      privacyBody:
        "BrowserCat не потребує акаунта, щоб вирішити, де відкривати лінк. Rules спроєктовані як локальна productivity-утиліта.",
      features: [
        { title: "Rules по доменах", body: "Роуть work, personal, staging і test links у браузер, який належить цьому контексту." },
        { title: "Profile-aware", body: "Використовуй browser profiles свідомо, а не прибирай sessions вручну." },
        { title: "Quick picker", body: "Обирай target руками, коли automation буде неправою." },
        { title: "Нативна Mac-утиліта", body: "Маленька поверхня, menu-bar presence і передбачувана поведінка." },
      ],
      faq: [
        { question: "Для кого це?", answer: "Для QA, developers, support і всіх, хто перемикається між кількома браузерами або профілями." },
        { question: "Він трекає browsing?", answer: "Це локальна routing utility. Точну поведінку перевіряй у source code і release notes." },
        { question: "Можна запропонувати rule?", answer: "Так, відкрий GitHub issue або pull request з конкретним use case." },
      ],
      finalCta: "Нехай кожен лінк відкривається де треба",
    },
  },
  papuga: {
    uk: {
      title: "Виправляй текст, набраний не тією розкладкою",
      summary:
        "Папуга миттєво конвертує виділений текст між розкладками - ghbdsn стає «привіт» прямо в полі. Без копіпаст-акробатики.",
      homepageSummary: "Виправляє текст, набраний не тією розкладкою.",
      primaryCta: "Завантажити для Mac",
      secondaryCta: "Дивитись код",
      badges: ["macOS 14+", "Apple-notarized", "Sparkle updates", "free", "open source"],
      imageAlt: "Огляд macOS застосунку Папуга зі статистикою виправлення розкладки і останніми fixes",
      privacyTitle: "Приватність by design",
      privacyBody:
        "Keystrokes і clipboard text обробляються локально. History зберігається on-device, без акаунта і tracking layer.",
      features: [
        { title: "Виділи текст", body: "Виділяєш gibberish у будь-якому app - чаті, формі, браузері або документі." },
        { title: "Натисни shortcut", body: "Використовуй default shortcut або свій hotkey." },
        { title: "Виправлено на місці", body: "Папуга конвертує, вставляє результат і перемикає layout." },
        { title: "Вчиться з рутини", body: "Додавай allowlist entries і rules після повторюваних fixes." },
      ],
      faq: [
        { question: "Як виправити текст, набраний не тією розкладкою?", answer: "Виділіть текст і викличте shortcut. Папуга конвертує його між системними розкладками і вставить готовий результат." },
        { question: "Працює з будь-якою розкладкою?", answer: "Папуга будує conversions з активних macOS input sources, тому custom behavior залежить від встановлених layouts." },
        { question: "Чи безпечно це?", answer: "Обробка відбувається локально. Для релізу все одно треба звірити privacy copy з актуальною поведінкою app." },
        { question: "Він безкоштовний?", answer: "Так, застосунок free і open source." },
      ],
      finalCta: "Досить воювати з розкладкою",
    },
    en: {
      title: "Fix text typed in the wrong keyboard layout",
      summary:
        "Papuga converts selected text between keyboard layouts instantly - ghbdsn becomes 'привіт' right in the field. No copy-paste circus.",
      homepageSummary: "Fix text typed in the wrong layout.",
      primaryCta: "Download for Mac",
      secondaryCta: "View source",
      imageAlt: "Papuga macOS app overview screen with keyboard layout rescue statistics and recent fixes",
      privacyTitle: "Private by design",
      privacyBody:
        "Keystrokes and clipboard text are processed locally. History is kept on-device and there is no account or tracking layer.",
      features: [
        { title: "Select the text", body: "Highlight gibberish in any app - chat, form, browser, or document." },
        { title: "Hit your shortcut", body: "Use the default shortcut or your own hotkey." },
        { title: "Fixed in place", body: "Papuga converts, pastes the result, and switches your layout." },
        { title: "Learns your habits", body: "Add allowlist entries and rules after repeated fixes." },
      ],
      faq: [
        { question: "How do I fix text typed in the wrong layout?", answer: "Select the text and trigger the shortcut. Papuga converts it between system layouts and pastes the result back." },
        { question: "Does it work with any keyboard layout?", answer: "Papuga builds conversions from active macOS input sources, so custom behavior depends on installed layouts." },
        { question: "Is it safe?", answer: "Processing happens locally. Still verify privacy copy against the exact behavior of each release." },
        { question: "Is it free?", answer: "Yes, the app is free and open source." },
      ],
      finalCta: "Stop fighting your keyboard layout",
    },
  },
  sidebarny: {
    uk: {
      title: "AI side panel для браузера",
      summary:
        "Відкривай LLM поруч із будь-якою сторінкою, захоплюй текст або HTML одним кліком і парси LinkedIn threads без втечі з таба. Для QA, devs, product і support.",
      homepageSummary: "AI side panel для браузера.",
      primaryCta: "Додати в Chrome",
      secondaryCta: "Дивитись код",
      badges: ["Chrome extension", "8 AI providers", "free", "minimal permissions"],
      imageAlt: "SideBarny Chrome side panel з provider selector і capture controls",
      privacyTitle: "Твої дані лишаються приватними",
      privacyBody:
        "Захоплений page content іде тільки в AI provider, який ти обрав. Extension не має проксувати, зберігати, продавати або читати більше, ніж потрібно для requested action.",
      features: [
        { title: "8 AI providers", body: "ChatGPT, Claude, Gemini, Grok, Copilot, Rovo, Poe і HuggingChat поруч." },
        { title: "Element picker", body: "Наводиш і береш саме той page element, який потрібен." },
        { title: "Capture text або HTML", body: "Відправляй видимий текст або markup прямо в chat." },
        { title: "LinkedIn parsing", body: "Забирай цілий thread - names, roles, replies." },
        { title: "Auto-paste", body: "Captured content одразу потрапляє в provider input. Без paste ritual." },
        { title: "Minimal permissions", body: "Розширений доступ має запитуватись тільки коли він реально потрібен." },
      ],
      faq: [
        { question: "Які браузери підтримуються?", answer: "Chrome і Chromium-based browsers. Точна distribution залежить від стану Chrome Web Store publication." },
        { question: "Чи безпечно давати доступ до сторінок?", answer: "Доступ має запитуватись лише за потреби, а захоплений контент має йти тільки в обраний LLM." },
        { question: "Він безкоштовний?", answer: "Так. Окремі AI providers можуть вимагати власний account." },
      ],
      finalCta: "Досить стрибати між табами і AI",
    },
  },
  "wayforpay-mcp": {
    uk: {
      title: "WayForPay всередині Claude і Cursor",
      summary:
        "Питай AI про merchant balance, transactions, invoices і refunds - і давай йому діяти тільки через gated mutations. Model Context Protocol, встановлюється одним copy-paste.",
      homepageSummary: "Платежі всередині Claude і Cursor.",
      primaryCta: "Скопіювати install config",
      secondaryCta: "Читати docs",
      badges: ["npm", "MIT license", "Claude", "Cursor", "5 tools", "open source"],
      imageAlt: "WayForPay MCP README з таблицею read і gated write operations",
      privacyTitle: "Ключі не торкаються моїх серверів",
      privacyBody:
        "WayForPay credentials читаються з локальної client config і відправляються тільки у WayForPay APIs. Mutations мають бути gated і вимагати явного підтвердження.",
      features: [
        { title: "get_merchant_balance", body: "Поточний available balance.", tone: "read" },
        { title: "list_transactions", body: "Фільтрована payment history.", tone: "read" },
        { title: "list_regular_payments", body: "Recurring і subscription payments.", tone: "read" },
        { title: "create_invoice", body: "Згенерувати payment link.", tone: "gated" },
        { title: "refund", body: "Повернути transaction.", tone: "gated" },
        { title: "settle", body: "Settle held payment.", tone: "gated" },
      ],
      faq: [
        { question: "Які clients підтримуються?", answer: "Будь-який MCP client зі стандартним mcpServers config: Claude Desktop, Claude Code, Cursor і VS Code-style clients." },
        { question: "Чи безпечні мої платіжні дані?", answer: "Ключі читаються з локальної конфігурації. Будь-які мутації мають вимагати явного підтвердження." },
        { question: "Як оновлювати?", answer: "npx підтягує latest published version на старті, якщо client не pin-ить package version." },
      ],
      finalCta: "Дай AI говорити з WayForPay, але з guardrails",
    },
    en: {
      faq: [
        { question: "Which clients are supported?", answer: "Any MCP client that accepts a standard mcpServers config, including Claude Desktop, Claude Code, Cursor, and VS Code-style clients." },
        { question: "Are my payment credentials safe?", answer: "Keys are read from local configuration. Every mutation should require explicit confirmation." },
        { question: "How do I keep it updated?", answer: "npx fetches the latest published version on launch, unless your client pins a package version." },
      ],
    },
  },
  "ukraine-com-ua-mcp": {
    uk: {
      title: "Domains, DNS і hosting прямо з чату",
      summary:
        "Керуй domains, DNS records, backups і account checks для ukraine.com.ua / adm.tools через вузький MCP server з backup-first safety.",
      homepageSummary: "Домени, DNS і hosting прямо з чату.",
      primaryCta: "Скопіювати install config",
      secondaryCta: "Читати docs",
      badges: ["npm", "adm.tools", "DNS backup", "open source"],
      imageAlt: "ukraine.com.ua MCP README з таблицею domain, DNS, backup і restore operations",
      privacyTitle: "DNS зміни починаються з backup",
      privacyBody:
        "Write tools вимагають свіжий DNS backup id перед mutation. Це ловить stale zones і дає rollback path.",
      features: [
        { title: "List domains", body: "Знайти registered domains і ids перед змінами.", tone: "read" },
        { title: "Audit DNS records", body: "Читати A, CNAME, MX, TXT та інші records з adm.tools.", tone: "read" },
        { title: "Backup zone", body: "Зробити snapshot zone перед writes.", tone: "read" },
        { title: "Create record", body: "Додати DNS records після backup verification.", tone: "gated" },
        { title: "Update record", body: "Змінити records із stale-zone protection.", tone: "gated" },
        { title: "Restore zone", body: "Відкотити zone з backup, якщо DNS change пішов не туди.", tone: "gated" },
      ],
      faq: [
        { question: "Це заміна adm.tools UI?", answer: "Ні. Це покриває routine API-backed DNS workflows. Частина hosting і SSL actions все ще потребує web UI." },
        { question: "Навіщо вимагати backups?", answer: "DNS тут не має transaction semantics. Backup verification не дає перезаписати zone, яка змінилась після read." },
        { question: "Це безпечно для destructive actions?", answer: "Destructive actions потребують explicit confirmation і fresh backup. Все одно переглядай кожну mutation перед запуском." },
      ],
      finalCta: "Керуй DNS без відкривання control panel",
    },
  },
};

export function localizeProduct(product: Product, locale: Locale): Product {
  const copy = productCopy[product.slug]?.[locale];

  if (!copy) {
    return product;
  }

  const { imageAlt, ...textCopy } = copy;

  return {
    ...product,
    ...textCopy,
    image: imageAlt ? { ...product.image, alt: imageAlt } : product.image,
  };
}

export function localizedProducts(locale: Locale) {
  return products.map((product) => localizeProduct(product, locale));
}

export const featuredProducts = products.filter((product) =>
  ["diduny", "browsercat", "papuga", "sidebarny", "wayforpay-mcp", "ukraine-com-ua-mcp"].includes(product.slug),
);

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
