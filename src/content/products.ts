import type { Locale } from "./i18n";

export type ProductKind = "mac" | "extension" | "mcp";

export interface ProductWorkflow {
  id: string;
  title: string;
  problem: string;
  outcome: string;
  media: {
    src: string;
    poster?: string;
    mp4Src?: string;
    type: "image" | "video";
    alt: string;
  };
  steps: string[];
}

export interface Product {
  slug: string;
  letter: string;
  name: string;
  latinName: string;
  title: string;
  kind: ProductKind;
  accent: "diduny" | "appcat" | "papuga" | "sidebarny" | "wayforpay" | "ukraine";
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
  workflows?: ProductWorkflow[];
  proof?: string[];
  limitations?: string[];
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
      "Choose local or cloud transcription in settings. Recordings and previous results remain available in Diduny’s library; cloud processing is configured separately.",
    workflows: [
      {
        id: "dictation",
        title: "Speak and get clean text where you are already working",
        problem: "Typing a quick thought interrupts the task already open on your Mac.",
        outcome: "Cleaned text is inserted into the active field after you release the shortcut.",
        media: { src: "/images/products/diduny-overview.png", type: "image", alt: "Diduny overview with recent dictation recordings" },
        steps: ["Hold the global shortcut", "Speak while live transcription appears", "Release to clean and insert the text"],
      },
      {
        id: "meeting",
        title: "Keep a meeting you can return to",
        problem: "Notes disappear when the call ends and recordings are hard to search.",
        outcome: "A recording, speaker-labelled transcript, and playback controls stay in the library.",
        media: { src: "/images/products/diduny-overview.png", type: "image", alt: "Diduny recordings library and transcription overview" },
        steps: ["Record the meeting with system audio", "Follow live transcription with speaker labels", "Replay, seek, retranscribe, or translate later"],
      },
      {
        id: "translation",
        title: "Turn spoken input into translated text",
        problem: "Voice translation should end in text you can use, not a separate playback flow.",
        outcome: "Diduny produces translated text and keeps the result with the recording.",
        media: { src: "/images/products/diduny-overview.png", type: "image", alt: "Diduny transcription and translation controls" },
        steps: ["Choose the language pair", "Speak or process a recording", "Use the translated text in the current task"],
      },
    ],
    proof: ["Released in v1.17.0", "Global shortcut and push-to-talk", "Local and cloud transcription paths"],
    limitations: ["Diduny produces translated text. It does not promise spoken playback of translated output."],
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
    slug: "appcat",
    letter: "A",
    name: "AppCat",
    latinName: "AppCat",
    title: "Links, files, and windows go straight to the right place",
    kind: "mac",
    accent: "appcat",
    summary:
      "AppCat routes links, files, apps, and individual windows to the right place without making you clean up the context afterward.",
    homepageSummary: "Route links, files, and windows to the right place.",
    primaryCta: "Download for Mac",
    primaryUrl: "https://github.com/rmarinsky/AppCat/releases/latest",
    secondaryCta: "View source",
    secondaryUrl: "https://github.com/rmarinsky/AppCat",
    image: {
      src: "/images/products/appcat-overview.png",
      alt: "AppCat macOS overview with routing history and suggested rules",
      variant: "app",
    },
    badges: ["macOS app", "link and file routing", "window switcher", "open source"],
    privacyTitle: "The routing context stays on your Mac",
    privacyBody:
      "Rules, history, and statistics stay on the Mac. AppCat has no accounts, telemetry, or tracking. It only makes functional requests for favicons, page titles, redirects, and updates.",
    workflows: [
      {
        id: "link-picker",
        title: "Choose the right destination for a link",
        problem: "A work link, personal link, or deep link should not all open in the same browser session.",
        outcome: "Choose a browser, profile, or compatible native app from one picker.",
        media: { src: "/images/products/appcat-overview.png", type: "image", alt: "AppCat routing overview used as a temporary workflow poster" },
        steps: ["Open a link", "Pick a browser, profile, or native app", "Continue in the intended context"],
      },
      {
        id: "rules",
        title: "Let a matching rule route the next link",
        problem: "Repeated host and URL patterns create the same routing decision every day.",
        outcome: "AppCat matches host, substring, full URL, or regex rules and hands the link off automatically.",
        media: { src: "/images/products/appcat-overview.png", type: "image", alt: "AppCat rules and history overview" },
        steps: ["Create a matching rule", "Open the next matching link", "Confirm the automatic handoff"],
      },
      {
        id: "windows",
        title: "Switch to the exact app window",
        problem: "Application switching still leaves you looking for the right window.",
        outcome: "Use Option-Tab to select a specific window, not only an application.",
        media: { src: "/images/products/appcat-overview.png", type: "image", alt: "AppCat overview used as a temporary window switcher poster" },
        steps: ["Press Option-Tab", "Find the exact app window", "Switch directly to it"],
      },
      {
        id: "files",
        title: "Open a file with a compatible app",
        problem: "Finder does not always surface the editor you actually want for a known or unknown file type.",
        outcome: "Choose from a compatible-app picker and continue in the selected editor.",
        media: { src: "/images/products/appcat-overview.png", type: "image", alt: "AppCat overview used as a temporary file picker poster" },
        steps: ["Select a file in Finder", "Open the compatible-app picker", "Choose the editor"],
      },
    ],
    proof: ["Released in v2.1.0", "macOS link, file, app, and window switcher", "No account, telemetry, analytics, or tracking"],
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
    finalCta: "Put the next link, file, or window where it belongs",
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
    workflows: [
      {
        id: "selected-text",
        title: "Fix selected text without typing it again",
        problem: "A wrong keyboard layout turns an otherwise finished message into gibberish.",
        outcome: "ghbdsn becomes привіт in the field where you selected it.",
        media: { src: "/images/products/papuga-overview.png", type: "image", alt: "Papuga overview with recent layout corrections" },
        steps: ["Select ghbdsn", "Trigger Papuga", "Continue with привіт in place"],
      },
      {
        id: "autofix",
        title: "Let AutoFix catch a repeat mistake",
        problem: "The same layout mistake should not require the same manual rescue every time.",
        outcome: "Papuga fixes confidently matched text or suggests a correction when confidence is uncertain.",
        media: { src: "/images/products/papuga-overview.png", type: "image", alt: "Papuga overview used as a temporary AutoFix workflow poster" },
        steps: ["Keep AutoFix enabled", "Type with the wrong layout", "Accept a suggestion or undo a correction"],
      },
      {
        id: "rules",
        title: "Turn recurring mistakes into a rule",
        problem: "Repeated corrections should teach the utility without touching product names or commands.",
        outcome: "Create an auto-replacement rule or protect a term from a history or mistake row.",
        media: { src: "/images/products/papuga-overview.png", type: "image", alt: "Papuga history and rules overview" },
        steps: ["Review recent mistakes", "Create a rule or protect a term", "Keep the next correction intentional"],
      },
      {
        id: "clipboard",
        title: "Bring back an older clipboard item",
        problem: "Useful copied text disappears as the next thing replaces it.",
        outcome: "Search clipboard history and restore the item you need.",
        media: { src: "/images/products/papuga-overview.png", type: "image", alt: "Papuga overview used as a temporary clipboard history poster" },
        steps: ["Open clipboard history", "Search a previous item", "Restore it into the current task"],
      },
    ],
    proof: ["Released in v1.6.1", "Local layout conversion, history, clipboard data, and rules", "macOS 14+"],
    limitations: ["The released app does not include the unreleased prediction engine or AI-assisted batch classification workflow."],
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
    latinName: "SideBarny",
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
    | "name"
    | "title"
    | "summary"
    | "homepageSummary"
    | "primaryCta"
    | "secondaryCta"
    | "badges"
    | "privacyTitle"
    | "privacyBody"
    | "workflows"
    | "proof"
    | "limitations"
    | "features"
    | "faq"
    | "finalCta"
  > & { imageAlt: string }
>;

const productCopy: Record<string, Partial<Record<Locale, ProductLocalizedFields>>> = {
  diduny: {
    en: {
      name: "Diduny",
    },
    uk: {
      title: "Диктуй текст у будь-який застосунок на Mac",
      summary:
        "Говориш природно, а Дідуня записує, розпізнає і вставляє текст у той застосунок, де ти вже працюєш. Без окремого редактора і ручного перенесення.",
      homepageSummary: "Говориш - Mac друкує там, де треба.",
      primaryCta: "Завантажити для Mac",
      secondaryCta: "Дивитись код",
      badges: ["macOS застосунок", "нотаризований", "автооновлення", "відкритий код"],
      imageAlt: "Огляд macOS застосунку Дідуня зі статистикою диктування і останніми записами",
      privacyTitle: "Аудіо лишається під твоїм контролем",
      privacyBody:
        "У налаштуваннях можна обрати локальну або хмарну транскрипцію. Записи і попередні результати залишаються доступними в бібліотеці Дідуні, а хмарна обробка налаштовується окремо.",
      workflows: [
        { id: "dictation", title: "Надиктуй і отримай чистий текст там, де вже працюєш", problem: "Набір короткої думки перериває задачу, яка вже відкрита на Mac.", outcome: "Після відпускання shortcut очищений текст вставляється в активне поле.", media: { src: "/images/products/diduny-overview.png", type: "image", alt: "Огляд Дідуні з останніми записами диктування" }, steps: ["Затисни глобальний shortcut", "Говори, поки з'являється live transcript", "Відпусти, щоб очистити і вставити текст"] },
        { id: "meeting", title: "Збережи зустріч, до якої можна повернутися", problem: "Нотатки зникають після дзвінка, а записи важко знайти.", outcome: "Запис, транскрипт з мітками спікерів і playback controls лишаються в бібліотеці.", media: { src: "/images/products/diduny-overview.png", type: "image", alt: "Бібліотека записів і транскрипцій Дідуні" }, steps: ["Запиши зустріч із системним аудіо", "Стеж за live transcript з мітками спікерів", "Відтвори, перемотай, перетранскрибуй або переклади пізніше"] },
        { id: "translation", title: "Перетвори голос на перекладений текст", problem: "Голосовий переклад має закінчуватися текстом, який можна використати.", outcome: "Дідуня створює перекладений текст і зберігає результат біля запису.", media: { src: "/images/products/diduny-overview.png", type: "image", alt: "Керування транскрипцією і перекладом у Дідуні" }, steps: ["Обери мовну пару", "Говори або оброби запис", "Використай перекладений текст у поточній задачі"] },
      ],
      proof: ["Реліз v1.17.0", "Глобальний shortcut і push-to-talk", "Локальна та хмарна транскрипція"],
      limitations: ["Дідуня створює перекладений текст. Вона не обіцяє озвучення перекладу."],
      features: [
        { title: "Робота з меню", body: "Запускай диктування без перемикання з того застосунку, де потрібен текст." },
        { title: "Dynamic Notch", body: "Стан запису видно нативно для Mac, без крадіжки фокуса." },
        { title: "Для щоденних нотаток", body: "Короткі команди, повідомлення і чорнові думки - основний сценарій." },
        { title: "Відкрита розробка", body: "Проєкт публічний, його можна інспектити, а релізи мають зрозумілу історію змін." },
      ],
      faq: [
        { question: "Це заміна повноцінній студії транскрипції?", answer: "Ні. Це швидка утиліта для диктування, щоб занести текст у Mac-застосунки, якими ти вже користуєшся." },
        { question: "Він безкоштовний?", answer: "Проєкт має відкритий код. Умови поширення можуть змінюватися між релізами, тому останні release notes є джерелом правди." },
        { question: "Де повідомляти про проблеми?", answer: "У GitHub issues або напряму Роману через сторінку про автора." },
      ],
      finalCta: "Досить передруковувати короткі думки",
    },
  },
  appcat: {
    en: {},
    uk: {
      name: "AppCat",
      title: "Посилання, файли й вікна - одразу в правильне місце",
      summary:
        "AppCat перехоплює посилання, пропонує браузер, профіль або native app, відкриває файли у сумісних програмах і перемикає на конкретне вікно через ⌥Tab.",
      homepageSummary: "Відправляє посилання, файли й вікна туди, де їм місце.",
      primaryCta: "Завантажити для Mac",
      secondaryCta: "Дивитись код",
      badges: ["macOS застосунок", "посилання і файли", "перемикач вікон", "відкритий код"],
      imageAlt: "Огляд AppCat зі статистикою маршрутизації і пропозиціями правил",
      privacyTitle: "Контекст маршрутизації лишається на Mac",
      privacyBody:
        "Правила, історія і статистика лишаються на Mac. AppCat не має акаунтів, телеметрії чи трекінгу. Він виконує лише функціональні запити для favicon, назв сторінок, редіректів і оновлень.",
      features: [
        { title: "Правила URL", body: "Матчинг за host, частиною host, частиною повного URL або regex." },
        { title: "Профілі і native apps", body: "Обирай браузерний профіль або сумісний застосунок для deep link." },
        { title: "Конкретне вікно", body: "⌥Tab перемикає не тільки застосунок, а й потрібне вікно." },
        { title: "Вибір для файлів", body: "Відкривай відомі й невідомі типи файлів у сумісних програмах." },
      ],
      workflows: [
        { id: "link-picker", title: "Відкрий посилання там, де йому місце", problem: "Робоче, особисте і deep link не мають змішуватися в одній браузерній сесії.", outcome: "Обери браузер, профіль або native app в одному picker.", media: { src: "/images/products/appcat-overview.png", type: "image", alt: "Огляд AppCat як тимчасовий постер для picker посилань" }, steps: ["Відкрий посилання", "Обери браузер, профіль або native app", "Продовжуй у правильному контексті"] },
        { id: "rules", title: "Дай правилу маршрутизувати наступне посилання", problem: "Повторювані host і URL патерни щодня вимагають того самого рішення.", outcome: "AppCat матче правила за host, підрядком URL або regex і передає посилання автоматично.", media: { src: "/images/products/appcat-overview.png", type: "image", alt: "Огляд правил та історії AppCat" }, steps: ["Створи правило", "Відкрий відповідне посилання", "Підтвердь автоматичну передачу"] },
        { id: "windows", title: "Перемкнись на конкретне вікно", problem: "Перемикач застосунків все одно лишає пошук потрібного вікна.", outcome: "Через ⌥Tab обирай вікно, а не тільки застосунок.", media: { src: "/images/products/appcat-overview.png", type: "image", alt: "Огляд AppCat як тимчасовий постер для перемикача вікон" }, steps: ["Натисни ⌥Tab", "Знайди конкретне вікно", "Перемкнись одразу на нього"] },
        { id: "files", title: "Відкрий файл у сумісному застосунку", problem: "Finder не завжди показує редактор, який потрібен саме для цього файлу.", outcome: "Обери редактор у picker сумісних застосунків.", media: { src: "/images/products/appcat-overview.png", type: "image", alt: "Огляд AppCat як тимчасовий постер для picker файлів" }, steps: ["Виділи файл у Finder", "Відкрий picker сумісних застосунків", "Обери редактор"] },
      ],
      proof: ["Реліз v2.1.0", "Перемикач посилань, файлів, застосунків і вікон", "Без акаунтів, телеметрії, аналітики чи трекінгу"],
      faq: [
        { question: "Для кого це?", answer: "Для QA, розробників, support-команд і всіх, хто перемикається між кількома браузерами або профілями." },
        { question: "Він відстежує перегляд сторінок?", answer: "Це локальна утиліта маршрутизації. Точну поведінку перевіряй у коді та нотатках релізів." },
        { question: "Можна запропонувати правило?", answer: "Так, відкрий GitHub issue або pull request з конкретним сценарієм." },
      ],
      finalCta: "Нехай наступне посилання, файл чи вікно одразу будуть на місці",
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
      badges: ["macOS 14+", "нотаризація Apple", "оновлення Sparkle", "безкоштовно", "відкритий код"],
      imageAlt: "Огляд macOS застосунку Папуга зі статистикою виправлення розкладки і останніми правками",
      privacyTitle: "Приватність у базовій конструкції",
      privacyBody:
        "Натискання клавіш і текст з буфера обміну обробляються локально. Історія зберігається на пристрої, без акаунта і без шару трекінгу.",
      workflows: [
        { id: "selected-text", title: "Виправ текст без повторного набору", problem: "Неправильна розкладка перетворює готове повідомлення на нісенітницю.", outcome: "ghbdsn стає «привіт» у полі, де виділено текст.", media: { src: "/images/products/papuga-overview.png", type: "image", alt: "Огляд Папуги з останніми виправленнями розкладки" }, steps: ["Виділи ghbdsn", "Виклич Папугу", "Продовжуй з «привіт» на місці"] },
        { id: "autofix", title: "Дай AutoFix зловити повторювану помилку", problem: "Одна й та сама помилка розкладки не має вимагати ручного порятунку щоразу.", outcome: "Папуга виправляє впевнені матчі або пропонує правку, коли впевненість нижча.", media: { src: "/images/products/papuga-overview.png", type: "image", alt: "Огляд Папуги як тимчасовий постер для AutoFix" }, steps: ["Увімкни AutoFix", "Набери текст у неправильній розкладці", "Прийми підказку або скасуй виправлення"] },
        { id: "rules", title: "Перетвори повторювану помилку на правило", problem: "Повторювані правки мають навчати утиліту, не чіпаючи назви продуктів чи команди.", outcome: "Створи правило заміни або захисти термін прямо з історії помилок.", media: { src: "/images/products/papuga-overview.png", type: "image", alt: "Історія і правила Папуги" }, steps: ["Переглянь останні помилки", "Створи правило або захисти термін", "Залиш наступне виправлення контрольованим"] },
        { id: "clipboard", title: "Поверни старий елемент буфера обміну", problem: "Потрібний скопійований текст зникає після наступного copy.", outcome: "Знайди елемент в історії буфера й поверни його.", media: { src: "/images/products/papuga-overview.png", type: "image", alt: "Огляд Папуги як тимчасовий постер історії буфера" }, steps: ["Відкрий історію буфера", "Знайди старий елемент", "Поверни його в поточну задачу"] },
      ],
      proof: ["Реліз v1.6.1", "Локальні конвертація розкладки, історія, буфер і правила", "macOS 14+"],
      limitations: ["Реліз не включає prediction engine чи AI-assisted batch classification з unreleased гілки."],
      features: [
        { title: "Виділи текст", body: "Виділяєш нісенітницю в будь-якому застосунку: чаті, формі, браузері або документі." },
        { title: "Натисни скорочення", body: "Використовуй стандартне скорочення або власну гарячу клавішу." },
        { title: "Виправлено на місці", body: "Папуга конвертує, вставляє результат і перемикає розкладку." },
        { title: "Вчиться з рутини", body: "Додавай дозволені винятки і правила після повторюваних виправлень." },
      ],
      faq: [
        { question: "Як виправити текст, набраний не тією розкладкою?", answer: "Виділіть текст і викличте скорочення. Папуга конвертує його між системними розкладками і вставить готовий результат." },
        { question: "Працює з будь-якою розкладкою?", answer: "Папуга будує перетворення з активних macOS input sources, тому поведінка залежить від встановлених розкладок." },
        { question: "Чи безпечно це?", answer: "Обробка відбувається локально. Для кожного релізу все одно треба звіряти текст про приватність з реальною поведінкою застосунку." },
        { question: "Він безкоштовний?", answer: "Так, застосунок безкоштовний і має відкритий код." },
      ],
      finalCta: "Досить воювати з розкладкою",
    },
    en: {
      name: "Papuga",
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
      title: "Бічна AI-панель для браузера",
      summary:
        "Відкривай LLM поруч із будь-якою сторінкою, захоплюй текст або HTML одним кліком і розбирай LinkedIn threads без втечі з вкладки. Для QA, розробників, product і support.",
      homepageSummary: "AI-панель поруч зі сторінкою, яку ти вже читаєш.",
      primaryCta: "Додати в Chrome",
      secondaryCta: "Дивитись код",
      badges: ["Chrome extension", "8 AI-провайдерів", "безкоштовно", "мінімальні дозволи"],
      imageAlt: "Бічна панель SideBarny у Chrome з вибором провайдера і кнопками захоплення контенту",
      privacyTitle: "Твої дані лишаються приватними",
      privacyBody:
        "Захоплений вміст сторінки йде тільки в AI-провайдер, який ти обрав. Розширення не має проксувати, зберігати, продавати або читати більше, ніж потрібно для запитаної дії.",
      features: [
        { title: "8 AI-провайдерів", body: "ChatGPT, Claude, Gemini, Grok, Copilot, Rovo, Poe і HuggingChat поруч." },
        { title: "Вибір елемента", body: "Наводиш і береш саме той елемент сторінки, який потрібен." },
        { title: "Текст або HTML", body: "Відправляй видимий текст або розмітку прямо в чат." },
        { title: "LinkedIn parsing", body: "Забирай цілий thread: імена, ролі, відповіді." },
        { title: "Автовставка", body: "Захоплений контент одразу потрапляє в поле провайдера. Без ритуалу copy-paste." },
        { title: "Мінімальні дозволи", body: "Розширений доступ має запитуватись тільки коли він реально потрібен." },
      ],
      faq: [
        { question: "Які браузери підтримуються?", answer: "Chrome і браузери на Chromium. Точне поширення залежить від стану публікації в Chrome Web Store." },
        { question: "Чи безпечно давати доступ до сторінок?", answer: "Доступ має запитуватись лише за потреби, а захоплений контент має йти тільки в обраний LLM." },
        { question: "Він безкоштовний?", answer: "Так. Окремі AI-провайдери можуть вимагати власний акаунт." },
      ],
      finalCta: "Досить стрибати між табами і AI",
    },
  },
  "wayforpay-mcp": {
    uk: {
      title: "WayForPay всередині Claude і Cursor",
      summary:
        "Питай AI про баланс мерчанта, транзакції, інвойси і повернення коштів, але дозволяй дії тільки через контрольовані мутації. Model Context Protocol, встановлюється одним копіюванням.",
      homepageSummary: "Платежі всередині Claude і Cursor.",
      primaryCta: "Скопіювати конфігурацію",
      secondaryCta: "Читати документацію",
      badges: ["npm", "MIT license", "Claude", "Cursor", "5 tools", "відкритий код"],
      imageAlt: "WayForPay MCP README з таблицею read operations і контрольованих write operations",
      privacyTitle: "Ключі не торкаються моїх серверів",
      privacyBody:
        "WayForPay credentials читаються з локальної конфігурації клієнта і відправляються тільки у WayForPay API. Мутації мають бути контрольованими і вимагати явного підтвердження.",
      features: [
        { title: "get_merchant_balance", body: "Поточний доступний баланс.", tone: "read" },
        { title: "list_transactions", body: "Фільтрована історія платежів.", tone: "read" },
        { title: "list_regular_payments", body: "Регулярні і підпискові платежі.", tone: "read" },
        { title: "create_invoice", body: "Згенерувати платіжне посилання.", tone: "gated" },
        { title: "refund", body: "Повернути транзакцію.", tone: "gated" },
        { title: "settle", body: "Провести held payment.", tone: "gated" },
      ],
      faq: [
        { question: "Які клієнти підтримуються?", answer: "Будь-який MCP-клієнт зі стандартною mcpServers config: Claude Desktop, Claude Code, Cursor і VS Code-style clients." },
        { question: "Чи безпечні мої платіжні дані?", answer: "Ключі читаються з локальної конфігурації. Будь-які мутації мають вимагати явного підтвердження." },
        { question: "Як оновлювати?", answer: "npx підтягує останню опубліковану версію на старті, якщо клієнт не фіксує package version." },
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
      title: "Домени, DNS і хостинг прямо з чату",
      summary:
        "Керуй доменами, DNS records, backup і перевірками акаунта для ukraine.com.ua / adm.tools через вузький MCP-сервер з backup-first safety.",
      homepageSummary: "Домени, DNS і хостинг прямо з чату.",
      primaryCta: "Скопіювати конфігурацію",
      secondaryCta: "Читати документацію",
      badges: ["npm", "adm.tools", "DNS backup", "відкритий код"],
      imageAlt: "ukraine.com.ua MCP README з таблицею операцій для доменів, DNS, backup і restore",
      privacyTitle: "DNS-зміни починаються з backup",
      privacyBody:
        "Інструменти запису вимагають свіжий DNS backup id перед зміною. Це ловить застарілі зони і дає шлях відкату.",
      features: [
        { title: "List domains", body: "Знайти зареєстровані домени і ids перед змінами.", tone: "read" },
        { title: "Audit DNS records", body: "Читати A, CNAME, MX, TXT та інші записи DNS з adm.tools.", tone: "read" },
        { title: "Backup zone", body: "Зробити snapshot зони перед write operations.", tone: "read" },
        { title: "Create record", body: "Додати DNS record після backup verification.", tone: "gated" },
        { title: "Update record", body: "Змінити DNS record із stale-zone protection.", tone: "gated" },
        { title: "Restore zone", body: "Відкотити зону з backup, якщо DNS-зміна пішла не туди.", tone: "gated" },
      ],
      faq: [
        { question: "Це заміна adm.tools UI?", answer: "Ні. Це покриває рутинні DNS-сценарії через API. Частина хостингу і SSL actions все ще потребує вебінтерфейсу." },
        { question: "Навіщо вимагати backups?", answer: "DNS тут не має транзакційної семантики. Backup verification не дає перезаписати зону, яка змінилась після читання." },
        { question: "Це безпечно для destructive actions?", answer: "Destructive actions потребують explicit confirmation і fresh backup. Все одно переглядай кожну зміну перед запуском." },
      ],
      finalCta: "Керуй DNS без відкривання панелі керування",
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
  ["diduny", "appcat", "papuga", "sidebarny", "wayforpay-mcp", "ukraine-com-ua-mcp"].includes(product.slug),
);

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
