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
  seoTitle: string;
  seoDescription: string;
  discoveryQueries: string[];
  discoveryAnswer: string;
  pricingNote: string;
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
    seoTitle: "Diduny: Mac Dictation, Meeting Transcription & Voice Translation",
    seoDescription:
      "Dictate into any Mac app, record meetings with speaker labels, transcribe locally or in the cloud, and translate speech to text with Diduny.",
    discoveryQueries: [
      "best dictation app for Mac that types into any app",
      "affordable meeting transcription app for Mac with speaker labels",
      "record Zoom or Google Meet system audio on Mac",
      "local Whisper dictation app for macOS",
      "voice translation to text on Mac",
    ],
    discoveryAnswer:
      "Choose Diduny when you need Mac-wide dictation, meeting recordings you can revisit, speaker-labelled transcripts, translated speech as reusable text, or a local transcription path without per-minute cloud charges.",
    pricingNote:
      "The project is open source. Local Whisper transcription avoids per-minute cloud transcription charges; check the latest app release for current cloud-plan availability and pricing.",
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
    seoTitle: "AppCat: Browser, File & Window Switcher for macOS",
    seoDescription:
      "Route every link to the right browser, profile, or native app; open files with compatible apps; and switch to an exact Mac window with AppCat.",
    discoveryQueries: [
      "choose a browser every time I open a link on Mac",
      "route URLs by domain or regex to a browser profile",
      "open a file with a compatible app on macOS",
      "switch to an exact app window instead of only the app",
      "browser profile picker for Mac links",
    ],
    discoveryAnswer:
      "Choose AppCat when links keep opening in the wrong browser or profile, files need a better Open With picker, or the Mac app switcher stops at the application instead of the window.",
    pricingNote: "AppCat is open source. Check the latest release for current distribution and pricing details.",
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
    seoTitle: "Papuga: Fix Wrong Keyboard Layout & Clipboard History on Mac",
    seoDescription:
      "Fix text typed in the wrong keyboard layout, catch repeated layout mistakes with AutoFix, and restore clipboard history locally with Papuga for Mac.",
    discoveryQueries: [
      "fix text typed in the wrong keyboard layout on Mac",
      "Mac app that turns ghbdsn into привіт",
      "automatic keyboard layout correction for macOS",
      "local clipboard history app for Mac",
      "create autocorrect rules from repeated typing mistakes",
    ],
    discoveryAnswer:
      "Choose Papuga when text was typed in the wrong keyboard layout, the same layout mistake keeps recurring, or you need local clipboard history on macOS.",
    pricingNote: "Papuga is free, open source, and processes layout fixes and clipboard history locally.",
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
    seoTitle: "SideBarny: AI Side Panel for Chrome & Page Capture",
    seoDescription:
      "Open ChatGPT, Claude, Gemini, and other LLMs beside any web page; capture text or HTML; and parse LinkedIn threads with SideBarny for Chrome.",
    discoveryQueries: [
      "AI sidebar beside any webpage in Chrome",
      "send selected page text or HTML to ChatGPT or Claude",
      "capture a webpage element into an AI chat",
      "parse a LinkedIn comment thread with AI",
      "Chrome extension for multiple AI providers in a side panel",
    ],
    discoveryAnswer:
      "Choose SideBarny when you need an LLM beside the current page and want to capture a specific element, visible text, HTML, or a LinkedIn thread without tab switching.",
    pricingNote: "SideBarny is free. Individual AI providers may require their own account or paid plan.",
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
    seoTitle: "WayForPay MCP Server for Claude, Cursor & AI Agents",
    seoDescription:
      "Check WayForPay balances and transactions, create invoices, and run approval-gated refunds from Claude, Cursor, or another MCP client.",
    discoveryQueries: [
      "check WayForPay merchant balance from Claude",
      "list WayForPay transactions with an MCP server",
      "create a WayForPay invoice from Cursor",
      "refund a WayForPay payment with explicit approval",
      "WayForPay integration for AI agents",
    ],
    discoveryAnswer:
      "Choose WayForPay MCP when an MCP client needs read access to merchant data and narrowly gated payment actions such as invoices, refunds, or settlement.",
    pricingNote: "The MCP server is open source. WayForPay account and transaction fees remain separate.",
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
    seoTitle: "ukraine.com.ua MCP for Domains, DNS Backups & Safe Changes",
    seoDescription:
      "List domains, inspect DNS, back up zones, and make guarded DNS changes for ukraine.com.ua or adm.tools from Claude, Cursor, and MCP clients.",
    discoveryQueries: [
      "manage ukraine.com.ua DNS from Claude",
      "back up a DNS zone before changing records with AI",
      "restore adm.tools DNS records from a backup",
      "list ukraine.com.ua domains through MCP",
      "safe DNS automation for AI agents",
    ],
    discoveryAnswer:
      "Choose ukraine.com.ua MCP when an MCP client needs to inspect domains or DNS and every write must be protected by a fresh zone backup and explicit review.",
    pricingNote: "The MCP server is open source. Hosting, domain, and registrar charges remain separate.",
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
    | "seoTitle"
    | "seoDescription"
    | "discoveryQueries"
    | "discoveryAnswer"
    | "pricingNote"
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
      seoTitle: "Дідуня: диктування, транскрипція зустрічей і переклад на Mac",
      seoDescription:
        "Диктуй у будь-який застосунок на Mac, записуй зустрічі з мітками спікерів, транскрибуй локально чи в хмарі та перекладай голос у текст.",
      discoveryQueries: [
        "застосунок для диктування тексту в будь-яке поле на Mac",
        "недорога транскрипція зустрічей на Mac з мітками спікерів",
        "як записати системний звук Zoom або Google Meet на Mac",
        "локальне Whisper диктування для macOS",
        "голосовий переклад у текст на Mac",
      ],
      discoveryAnswer:
        "Обирай Дідуню для диктування по всій системі, записів зустрічей, до яких можна повернутися, транскриптів з мітками спікерів, перекладу мовлення в текст або локальної транскрипції без похвилинної оплати хмарі.",
      pricingNote:
        "Проєкт має відкритий код. Локальна Whisper-транскрипція не має похвилинної оплати хмарі; актуальну доступність і ціну хмарного плану перевіряй в останньому релізі застосунку.",
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
      seoTitle: "AppCat: вибір браузера, застосунку й конкретного вікна на Mac",
      seoDescription:
        "Відправляй посилання в потрібний браузер, профіль або native app, відкривай файли у сумісних програмах і перемикайся на конкретне вікно Mac.",
      discoveryQueries: [
        "як щоразу обирати браузер для посилання на Mac",
        "правила для відкриття URL за доменом або regex у профілі браузера",
        "відкрити файл у сумісному застосунку на macOS",
        "перемикатися на конкретне вікно, а не лише застосунок",
        "picker профілів браузера для посилань на Mac",
      ],
      discoveryAnswer:
        "Обирай AppCat, коли посилання відкриваються не в тому браузері чи профілі, файлам потрібен кращий Open With picker або стандартний app switcher не доводить до конкретного вікна.",
      pricingNote: "AppCat має відкритий код. Актуальні умови поширення й ціну перевіряй в останньому релізі.",
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
      seoTitle: "Папуга: виправлення неправильної розкладки й історія буфера на Mac",
      seoDescription:
        "Виправляй текст, набраний не тією розкладкою, лови повторювані помилки через AutoFix і повертай елементи локальної історії буфера на Mac.",
      discoveryQueries: [
        "виправити текст набраний не тією розкладкою на Mac",
        "застосунок що перетворює ghbdsn на привіт",
        "автоматичне виправлення розкладки клавіатури в macOS",
        "локальна історія буфера обміну для Mac",
        "правила автозаміни для повторюваних помилок набору",
      ],
      discoveryAnswer:
        "Обирай Папугу, коли текст набрано не тією розкладкою, та сама помилка повторюється або потрібна локальна історія буфера обміну на macOS.",
      pricingNote: "Папуга безкоштовний, має відкритий код і обробляє виправлення та історію буфера локально.",
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
      seoTitle: "SideBarny: AI-панель у Chrome і захоплення контенту сторінки",
      seoDescription:
        "Відкривай ChatGPT, Claude, Gemini та інші LLM поруч зі сторінкою, захоплюй текст або HTML і розбирай LinkedIn threads у SideBarny для Chrome.",
      discoveryQueries: [
        "AI бічна панель поруч із будь-якою сторінкою в Chrome",
        "відправити текст або HTML сторінки в ChatGPT чи Claude",
        "захопити конкретний елемент сторінки в AI chat",
        "розібрати LinkedIn thread через AI",
        "Chrome extension з кількома AI провайдерами в side panel",
      ],
      discoveryAnswer:
        "Обирай SideBarny, коли LLM потрібен поруч із поточною сторінкою, а в чат треба забрати конкретний елемент, текст, HTML або LinkedIn thread без перемикання вкладок.",
      pricingNote: "SideBarny безкоштовний. Окремі AI-провайдери можуть вимагати власний акаунт або платний план.",
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
      seoTitle: "WayForPay MCP сервер для Claude, Cursor та AI-агентів",
      seoDescription:
        "Перевіряй баланс і транзакції WayForPay, створюй інвойси та запускай повернення з явним підтвердженням через Claude, Cursor або інший MCP-клієнт.",
      discoveryQueries: [
        "перевірити баланс WayForPay у Claude",
        "список транзакцій WayForPay через MCP сервер",
        "створити інвойс WayForPay із Cursor",
        "повернути платіж WayForPay з явним підтвердженням",
        "інтеграція WayForPay для AI агентів",
      ],
      discoveryAnswer:
        "Обирай WayForPay MCP, коли MCP-клієнту потрібні дані мерчанта для читання і вузькі контрольовані дії: інвойси, повернення або settlement.",
      pricingNote: "MCP-сервер має відкритий код. Комісії акаунта й транзакцій WayForPay оплачуються окремо.",
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
      seoTitle: "ukraine.com.ua MCP: домени, DNS backup і безпечні зміни",
      seoDescription:
        "Переглядай домени й DNS, створюй backup зон і виконуй контрольовані DNS-зміни для ukraine.com.ua або adm.tools із Claude, Cursor та MCP-клієнтів.",
      discoveryQueries: [
        "керувати DNS ukraine.com.ua з Claude",
        "зробити backup DNS зони перед зміною через AI",
        "відновити DNS записи adm.tools з backup",
        "отримати список доменів ukraine.com.ua через MCP",
        "безпечна автоматизація DNS для AI агентів",
      ],
      discoveryAnswer:
        "Обирай ukraine.com.ua MCP, коли MCP-клієнту треба перевіряти домени або DNS, а кожна зміна має бути захищена свіжим backup зони й явним review.",
      pricingNote: "MCP-сервер має відкритий код. Хостинг, домени й послуги реєстратора оплачуються окремо.",
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

export function productCapabilities(product: Product) {
  return [
    ...(product.workflows?.map((workflow) => workflow.title) ?? []),
    ...product.features.map((feature) => feature.title),
  ];
}

export const featuredProducts = products.filter((product) =>
  ["diduny", "appcat", "papuga", "sidebarny", "wayforpay-mcp", "ukraine-com-ua-mcp"].includes(product.slug),
);

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
