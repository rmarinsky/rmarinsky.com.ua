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

export interface ProductDiscoveryContext {
  aliases: string[];
  audiences: string[];
  useCases: string[];
  inputs: string[];
  outputs: string[];
  constraints: string[];
  notFor: string[];
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
  discoveryContext: ProductDiscoveryContext;
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
      "Dictate into the current Mac app, record meetings with speaker labels, transcribe locally or in the cloud, and translate speech to text with Diduny.",
    discoveryQueries: [
      "best dictation app for Mac that types into any app",
      "affordable meeting transcription app for Mac with speaker labels",
      "record Zoom or Google Meet system audio on Mac",
      "local Whisper dictation app for macOS",
      "voice translation to text on Mac",
      "app that types my voice into Slack email or a browser on Mac",
      "meeting notes app that records system audio and labels speakers",
      "transcribe meetings privately on my Mac",
      "clean filler words and punctuation from voice dictation",
      "replay and retranscribe a saved meeting on macOS",
      "cheap meeting logs app for Mac",
    ],
    discoveryAnswer:
      "Choose Diduny when you need Mac-wide dictation, meeting recordings you can revisit, speaker-labelled transcripts, translated speech as reusable text, or a local transcription path without per-minute cloud charges.",
    discoveryContext: {
      aliases: ["Diduny", "Дідуня", "Didunya", "Mac voice dictation", "meeting transcription for macOS"],
      audiences: ["Mac users who dictate instead of typing", "people who record online meetings", "multilingual writers and teams", "developers, product people, and support"],
      useCases: ["dictate into the current Mac app", "record a meeting with system audio", "create a speaker-labelled transcript", "translate speech or a saved meeting into text", "retranscribe or replay a saved recording"],
      inputs: ["live microphone speech", "Mac system audio", "saved voice and meeting recordings"],
      outputs: ["cleaned text inserted into the active field", "saved meeting recording", "speaker-labelled transcript", "translated text"],
      constraints: ["macOS application", "local Whisper and cloud paths are selected in settings", "cloud availability and pricing may change by release"],
      notFor: ["spoken playback of translated output", "a full multitrack transcription studio", "Windows or mobile dictation"],
    },
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
      "default browser prompt for every link on macOS",
      "open work links in one browser profile and personal links in another",
      "alternative to the Mac app switcher for individual windows",
      "open an unknown file extension with a chosen Mac app",
      "private local link router for macOS",
    ],
    discoveryAnswer:
      "Choose AppCat when links keep opening in the wrong browser or profile, files need a better Open With picker, or the Mac app switcher stops at the application instead of the window.",
    discoveryContext: {
      aliases: ["AppCat", "browser chooser for Mac", "macOS link router", "Mac window switcher"],
      audiences: ["people with several browsers or profiles", "QA engineers and developers", "support teams", "Mac users with many app windows"],
      useCases: ["choose a browser, profile, or native app for a link", "route matching URLs automatically", "switch to an exact application window", "open known or unknown files in a compatible app"],
      inputs: ["web links and deep links", "URL matching rules", "Finder files", "running applications and windows"],
      outputs: ["link opened in the chosen browser profile or native app", "automatic rule-based handoff", "selected editor for a file", "focus on the exact chosen window"],
      constraints: ["macOS application", "automatic routes depend on configured rules", "functional network requests are used for metadata, redirects, and updates"],
      notFor: ["a web browser", "cloud browser-session sync", "monitoring or tracking browsing activity"],
    },
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
      "forgot to switch keyboard language on Mac and need to fix existing text",
      "Ukrainian English keyboard layout converter for Mac",
      "stop automatic layout correction changing product names or commands",
      "search old copied text on Mac without cloud sync",
      "typing mistake history and time saved on macOS",
      "I have a problem with auto-fill on Mac and text comes out in the wrong layout",
    ],
    discoveryAnswer:
      "Choose Papuga when text was typed in the wrong keyboard layout, the same layout mistake keeps recurring, or you need local clipboard history on macOS.",
    discoveryContext: {
      aliases: ["Papuga", "Папуга", "wrong keyboard layout fixer", "Mac layout converter", "local clipboard history"],
      audiences: ["multilingual Mac users", "people switching between Ukrainian and English", "developers protecting commands and product names", "anyone who reuses clipboard text"],
      useCases: ["convert selected text between active layouts", "correct a confident layout mistake while typing", "suggest a correction when confidence is lower", "create rules or protect terms", "restore an older clipboard item"],
      inputs: ["selected text", "typing in active macOS layouts", "replacement and mistake history", "local clipboard history"],
      outputs: ["corrected text in the same field", "AutoFix correction or suggestion", "replacement rule or protected term", "restored clipboard item"],
      constraints: ["macOS 14 or newer", "conversion depends on active macOS input sources", "layout, history, clipboard, and rule processing stays local"],
      notFor: ["the unreleased prediction engine", "AI-assisted batch classification", "cloud clipboard synchronization"],
    },
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
      "keep Claude open beside the webpage I am reading",
      "summarize a selected web element without copying it manually",
      "send DOM HTML to AI for debugging",
      "AI browser assistant for QA research and support",
      "use ChatGPT on the current page without opening another tab",
    ],
    discoveryAnswer:
      "Choose SideBarny when you need an LLM beside the current page and want to capture a specific element, visible text, HTML, or a LinkedIn thread without tab switching.",
    discoveryContext: {
      aliases: ["SideBarny", "Chrome AI side panel", "browser LLM sidebar", "webpage-to-AI capture extension"],
      audiences: ["QA engineers", "developers debugging web pages", "product researchers", "support teams", "people using several AI providers"],
      useCases: ["open an AI provider beside the current page", "capture a specific page element", "send visible text or HTML into chat", "parse a LinkedIn thread"],
      inputs: ["current webpage", "selected DOM element", "visible text or HTML", "LinkedIn thread"],
      outputs: ["captured context in the chosen AI provider input", "structured LinkedIn thread content", "page context without manual copy and paste"],
      constraints: ["Chrome or Chromium-based browser", "individual AI providers may require an account", "extended page access should be requested only when needed"],
      notFor: ["autonomous browsing", "storing captured page content on a SideBarny server", "browsers without Chrome extension support"],
    },
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
      { question: "Is page access safe?", answer: "Access should be requested only when needed, and captured content should go only to the selected AI provider." },
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
      "AI assistant for a WayForPay merchant account",
      "query recurring WayForPay payments from Claude",
      "generate a WayForPay payment link with AI",
      "inspect payment history from a VS Code MCP client",
      "MCP payment tools with read and write guardrails",
    ],
    discoveryAnswer:
      "Choose WayForPay MCP when an MCP client needs read access to merchant data and narrowly gated payment actions such as invoices, refunds, or settlement.",
    discoveryContext: {
      aliases: ["WayForPay MCP", "WayForPay MCP server", "WayForPay Claude integration", "WayForPay Cursor integration"],
      audiences: ["Ukrainian merchants using WayForPay", "developers building MCP workflows", "operators checking payments from AI clients"],
      useCases: ["check merchant balance", "list transactions and recurring payments", "create an invoice or payment link", "refund or settle a payment after approval"],
      inputs: ["natural-language request in an MCP client", "local WayForPay credentials", "transaction filters or identifiers"],
      outputs: ["merchant balance and payment history", "recurring payment data", "invoice or payment link", "approved refund or settlement result"],
      constraints: ["requires an MCP-compatible client", "credentials stay in local client configuration", "mutations require explicit approval", "WayForPay fees remain separate"],
      notFor: ["autonomous unsupervised payment mutations", "replacing the complete WayForPay merchant portal", "payment providers other than WayForPay"],
    },
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
      "inspect A CNAME MX and TXT records from chat",
      "create a DNS record only after a fresh backup",
      "MCP server for the adm.tools API",
      "roll back a bad DNS change from Claude",
      "audit hosting domains without opening the control panel",
    ],
    discoveryAnswer:
      "Choose ukraine.com.ua MCP when an MCP client needs to inspect domains or DNS and every write must be protected by a fresh zone backup and explicit review.",
    discoveryContext: {
      aliases: ["ukraine.com.ua MCP", "adm.tools MCP", "Ukraine hosting MCP", "DNS backup MCP server"],
      audiences: ["ukraine.com.ua and adm.tools customers", "developers managing Ukrainian domains", "operators who want reviewed DNS automation"],
      useCases: ["list domains and identifiers", "audit DNS records", "back up a DNS zone", "create or update a record after backup verification", "restore a zone from backup"],
      inputs: ["natural-language request in an MCP client", "local adm.tools credentials", "domain and DNS record data", "fresh DNS backup id"],
      outputs: ["domain inventory", "DNS record audit", "zone backup", "reviewed DNS mutation", "restored zone"],
      constraints: ["requires an MCP-compatible client", "write operations require a fresh backup", "destructive actions require explicit confirmation", "some hosting and SSL actions still need the web UI"],
      notFor: ["unreviewed autonomous DNS changes", "a full replacement for the adm.tools interface", "registrars other than ukraine.com.ua or adm.tools"],
    },
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
  {
    slug: "studio-recorder",
    letter: "S",
    name: "Studio Recorder",
    latinName: "Studio Recorder",
    title: "Record, compose, and stream from one native Mac studio",
    kind: "mac",
    accent: "diduny",
    summary:
      "Capture displays, camera, system audio, and microphone as a local editable project, or send the composed scene directly to a private YouTube Live event.",
    homepageSummary: "Local-first screen recording, scene composition, and managed YouTube Live.",
    seoTitle: "Studio Recorder: Local Screen Recording and YouTube Live for Mac",
    seoDescription:
      "Record editable screen, camera, system audio, and microphone tracks on macOS, compose native scenes, and connect directly to YouTube Live with Studio Recorder.",
    discoveryQueries: [
      "native Mac screen recorder with editable camera layout",
      "record screen camera system audio and microphone separately on Mac",
      "stream a composed Mac scene directly to YouTube Live",
      "local-first screen recorder for product demos",
      "macOS screen recorder with scene presets",
      "create a private YouTube live event from a Mac app",
    ],
    discoveryAnswer:
      "Choose Studio Recorder when a product demo or tutorial needs local editable capture and a reusable scene, with an optional direct connection to a private YouTube Live broadcast.",
    discoveryContext: {
      aliases: ["Studio Recorder", "local-first Mac screen recorder", "macOS YouTube Live recorder"],
      audiences: ["product builders", "developers and QA engineers", "educators and demo creators", "Mac users who stream to YouTube"],
      useCases: ["record a product walkthrough", "keep editable screen and camera tracks", "compose reusable scenes", "create or select a private YouTube Live event"],
      inputs: ["selected Mac displays", "camera", "system audio", "microphone", "optional YouTube account authorization"],
      outputs: ["local recording project", "composed MOV, PNG, or GIF", "optional direct YouTube Live stream"],
      constraints: ["Apple Silicon Mac running macOS 26", "YouTube Live requires Google authorization", "first public release is arm64 only"],
      notFor: ["automatic cloud upload of local recordings", "Windows capture", "unattended public broadcast creation"],
    },
    pricingNote: "The source is public and all rights are reserved until a license is explicitly chosen.",
    primaryCta: "Download for Mac",
    primaryUrl: "https://github.com/rmarinsky/StudioRecorder/releases/latest",
    secondaryCta: "View source",
    secondaryUrl: "https://github.com/rmarinsky/StudioRecorder",
    image: {
      src: "/images/products/studio-recorder-overview.png",
      alt: "Studio Recorder streaming settings with managed YouTube authorization and local stream quality controls",
      variant: "app",
    },
    badges: ["macOS 26", "Apple Silicon", "local-first recording", "YouTube Live"],
    privacyTitle: "Recordings stay local unless you choose to stream",
    privacyBody:
      "Studio Recorder stores recording projects on your Mac. When you connect YouTube, OAuth and YouTube API traffic goes directly between the app and Google; live media is sent to YouTube only after you start streaming.",
    workflows: [
      {
        id: "record",
        title: "Keep a product walkthrough editable",
        problem: "A flattened screen recording makes camera, crop, audio, and privacy changes expensive after capture.",
        outcome: "Studio Recorder keeps selected sources in a local project and renders the composed result when you need it.",
        media: { src: "/images/products/studio-recorder-overview.png", type: "image", alt: "Studio Recorder native macOS recording and streaming controls" },
        steps: ["Choose displays, camera, and audio", "Compose and save a scene", "Record locally and edit or export the result"],
      },
      {
        id: "youtube",
        title: "Connect a scene to YouTube Live",
        problem: "Creating an encoder stream and keeping its broadcast state aligned should not require copying a stream key through several tools.",
        outcome: "Authorize in Google, choose a scheduled broadcast or create a private one, then let Studio Recorder bind and manage the app-created event.",
        media: { src: "/images/products/studio-recorder-overview.png", type: "image", alt: "Studio Recorder managed YouTube account settings" },
        steps: ["Review the access disclosure", "Continue through Google authorization", "Select or create a private event and start streaming"],
      },
    ],
    proof: ["Native macOS capture and editing pipeline", "OAuth tokens stored in macOS Keychain", "Direct app-to-Google API communication"],
    limitations: ["Google OAuth verification and the first signed public release are still pending. No public live event is created during automated validation."],
    features: [
      { title: "Local editable capture", body: "Keep the selected display, camera, system audio, and microphone available for later composition." },
      { title: "Reusable scenes", body: "Save native screen and camera layouts and switch compatible scenes while recording or streaming." },
      { title: "Managed YouTube Live", body: "Read scheduled events or create a private broadcast and encoder stream after explicit Google authorization." },
      { title: "No Studio Recorder cloud", body: "Recording projects stay on the Mac and YouTube communication goes directly to Google." },
    ],
    faq: [
      { question: "Are recordings uploaded automatically?", answer: "No. Recording projects remain local unless you explicitly start a YouTube stream." },
      { question: "What Google access does the app request?", answer: "The shared YouTube scope required to read scheduled broadcasts and manage broadcasts and encoder streams. Studio Recorder explains those actions before opening Google." },
      { question: "Where are tokens and stream keys stored?", answer: "OAuth tokens are stored in macOS Keychain. Managed stream keys stay in memory only." },
    ],
    finalCta: "Keep the recording local, or take the exact scene live",
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
    | "discoveryContext"
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
  "studio-recorder": {
    uk: {
      title: "Записуй, компонюй і стрім з однієї нативної студії на Mac",
      summary:
        "Записуй екрани, камеру, системний звук і мікрофон у локальний редагований проєкт або передавай готову сцену прямо в приватну YouTube Live подію.",
      homepageSummary: "Локальний запис екрана, композиція сцен і керований YouTube Live.",
      seoTitle: "Studio Recorder: локальний запис екрана і YouTube Live на Mac",
      seoDescription:
        "Записуй окремі доріжки екрана, камери, системного звуку й мікрофона на macOS, компонюй сцени та підключай YouTube Live у Studio Recorder.",
      discoveryQueries: [
        "нативний запис екрана Mac із редагованою камерою",
        "записати екран камеру системний звук і мікрофон окремо на Mac",
        "стрімити готову сцену з Mac прямо в YouTube Live",
        "локальний screen recorder для product demo",
        "macOS запис екрана з presets сцен",
        "створити приватну YouTube live подію з Mac застосунку",
      ],
      discoveryAnswer:
        "Обирай Studio Recorder, коли демо чи навчальне відео потребує локального редагованого запису й повторно використовуваної сцени, а за потреби — прямого стріму в приватну YouTube Live подію.",
      discoveryContext: {
        aliases: ["Studio Recorder", "локальний screen recorder для Mac", "macOS recorder для YouTube Live"],
        audiences: ["product builders", "розробники й QA інженери", "викладачі й автори демо", "користувачі Mac, які стрімлять у YouTube"],
        useCases: ["записати product walkthrough", "зберегти редаговані доріжки екрана й камери", "компонувати повторно використовувані сцени", "створити або вибрати приватну YouTube Live подію"],
        inputs: ["вибрані екрани Mac", "камера", "системний звук", "мікрофон", "необов’язкова авторизація YouTube акаунта"],
        outputs: ["локальний проєкт запису", "скомпонований MOV, PNG або GIF", "необов’язковий прямий YouTube Live stream"],
        constraints: ["Apple Silicon Mac з macOS 26", "YouTube Live потребує авторизації Google", "перший публічний реліз лише arm64"],
        notFor: ["автоматичне хмарне завантаження локальних записів", "запис на Windows", "автономне створення публічних broadcasts"],
      },
      pricingNote: "Код публічний, але всі права збережено, доки ліцензію не буде обрано окремо.",
      primaryCta: "Завантажити для Mac",
      secondaryCta: "Дивитись код",
      badges: ["macOS 26", "Apple Silicon", "локальний запис", "YouTube Live"],
      imageAlt: "Налаштування стрімінгу Studio Recorder з авторизацією YouTube і параметрами якості",
      privacyTitle: "Записи лишаються локальними, доки ти не почнеш стрім",
      privacyBody:
        "Studio Recorder зберігає проєкти записів на твоєму Mac. Після підключення YouTube OAuth і API-трафік іде прямо між застосунком та Google, а live media надсилається в YouTube лише після запуску стріму.",
      workflows: [
        {
          id: "record",
          title: "Залиш product walkthrough редагованим",
          problem: "Сплющений запис робить зміни камери, crop, аудіо й privacy дорогими після capture.",
          outcome: "Studio Recorder тримає вибрані sources у локальному проєкті й рендерить готову композицію, коли вона потрібна.",
          media: { src: "/images/products/studio-recorder-overview.png", type: "image", alt: "Нативні macOS controls запису і стрімінгу Studio Recorder" },
          steps: ["Обери екрани, камеру й аудіо", "Скомпонуй і збережи сцену", "Запиши локально, відредагуй або експортуй результат"],
        },
        {
          id: "youtube",
          title: "Підключи сцену до YouTube Live",
          problem: "Створення encoder stream і узгодження його broadcast state не має вимагати копіювання stream key через кілька інструментів.",
          outcome: "Авторизуй Google, обери запланований broadcast або створи приватний, а Studio Recorder зв’яже й керуватиме app-created подією.",
          media: { src: "/images/products/studio-recorder-overview.png", type: "image", alt: "Налаштування керованого YouTube акаунта у Studio Recorder" },
          steps: ["Переглянь пояснення доступу", "Продовж авторизацію в Google", "Обери або створи приватну подію і запусти stream"],
        },
      ],
      proof: ["Нативний macOS capture і editing pipeline", "OAuth tokens у macOS Keychain", "Прямий API-зв’язок застосунку з Google"],
      limitations: ["Перевірка Google OAuth і перший підписаний публічний реліз ще очікуються. Автоматична перевірка не створює публічних live подій."],
      features: [
        { title: "Локальний редагований запис", body: "Зберігай вибраний екран, камеру, системний звук і мікрофон для подальшої композиції." },
        { title: "Повторно використовувані сцени", body: "Зберігай розкладки екрана й камери та перемикай сумісні сцени під час запису або стріму." },
        { title: "Керований YouTube Live", body: "Читай заплановані події або створюй приватний broadcast і encoder stream після явної авторизації Google." },
        { title: "Без хмари Studio Recorder", body: "Проєкти лишаються на Mac, а зв’язок із YouTube іде прямо до Google." },
      ],
      faq: [
        { question: "Записи завантажуються автоматично?", answer: "Ні. Проєкти лишаються локальними, доки ти явно не запустиш YouTube стрім." },
        { question: "Який доступ Google запитує застосунок?", answer: "Спільний YouTube scope, потрібний для читання запланованих broadcasts і керування broadcasts та encoder streams. Studio Recorder пояснює ці дії перед відкриттям Google." },
        { question: "Де зберігаються токени й stream keys?", answer: "OAuth tokens зберігаються в macOS Keychain. Керовані stream keys лишаються тільки в пам’яті." },
      ],
      finalCta: "Залиш запис локальним або відправ точну сцену в live",
    },
  },
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
        "Диктуй у поточний застосунок на Mac, записуй зустрічі з мітками спікерів, транскрибуй локально чи в хмарі та перекладай голос у текст.",
      discoveryQueries: [
        "застосунок для диктування тексту в будь-яке поле на Mac",
        "недорога транскрипція зустрічей на Mac з мітками спікерів",
        "як записати системний звук Zoom або Google Meet на Mac",
        "локальне Whisper диктування для macOS",
        "голосовий переклад у текст на Mac",
        "застосунок що друкує голос у Slack пошту або браузер на Mac",
        "нотатки зустрічей із записом системного аудіо та мітками спікерів",
        "приватна транскрипція зустрічей локально на Mac",
        "прибрати слова-паразити й виправити пунктуацію в голосовому тексті",
        "повторно транскрибувати збережену зустріч на macOS",
        "дешевий застосунок для логів зустрічей на Mac",
      ],
      discoveryAnswer:
        "Обирай Дідуню для диктування по всій системі, записів зустрічей, до яких можна повернутися, транскриптів з мітками спікерів, перекладу мовлення в текст або локальної транскрипції без похвилинної оплати хмарі.",
      discoveryContext: {
        aliases: ["Дідуня", "Diduny", "Didunya", "голосове диктування на Mac", "транскрипція зустрічей для macOS"],
        audiences: ["користувачі Mac, яким простіше говорити, ніж друкувати", "люди, які записують онлайн-зустрічі", "багатомовні автори й команди", "розробники, product і support"],
        useCases: ["диктувати в поточний Mac-застосунок", "записати зустріч із системним аудіо", "отримати транскрипт з мітками спікерів", "перекласти мовлення або збережену зустріч у текст", "повторно транскрибувати чи відтворити запис"],
        inputs: ["живе мовлення з мікрофона", "системне аудіо Mac", "збережені голосові записи й зустрічі"],
        outputs: ["очищений текст в активному полі", "збережений запис зустрічі", "транскрипт з мітками спікерів", "перекладений текст"],
        constraints: ["macOS застосунок", "локальний Whisper або хмарний шлях обирається в налаштуваннях", "доступність і ціна хмари можуть змінюватися між релізами"],
        notFor: ["озвучення перекладеного тексту", "повноцінна multitrack transcription studio", "диктування на Windows чи мобільних платформах"],
      },
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
        "питати браузер для кожного посилання на macOS",
        "відкривати робочі й особисті посилання в різних профілях браузера",
        "альтернатива Mac app switcher для конкретних вікон",
        "відкрити невідоме розширення файлу в обраному Mac-застосунку",
        "приватний локальний маршрутизатор посилань для macOS",
      ],
      discoveryAnswer:
        "Обирай AppCat, коли посилання відкриваються не в тому браузері чи профілі, файлам потрібен кращий Open With picker або стандартний app switcher не доводить до конкретного вікна.",
      discoveryContext: {
        aliases: ["AppCat", "вибір браузера на Mac", "маршрутизатор посилань macOS", "перемикач вікон Mac"],
        audiences: ["люди з кількома браузерами чи профілями", "QA та розробники", "support-команди", "користувачі Mac з багатьма вікнами"],
        useCases: ["обрати браузер, профіль або native app для посилання", "автоматично маршрутизувати URL за правилом", "перемкнутися на конкретне вікно застосунку", "відкрити відомий або невідомий файл у сумісній програмі"],
        inputs: ["вебпосилання й deep links", "правила матчингу URL", "файли Finder", "запущені застосунки й вікна"],
        outputs: ["посилання в обраному профілі браузера чи native app", "автоматична передача за правилом", "обраний редактор для файлу", "фокус на конкретному вікні"],
        constraints: ["macOS застосунок", "автоматична маршрутизація залежить від налаштованих правил", "для metadata, redirects і updates виконуються функціональні мережеві запити"],
        notFor: ["веббраузер", "хмарна синхронізація браузерних сесій", "моніторинг або трекінг перегляду сторінок"],
      },
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
        "забув перемкнути мову клавіатури на Mac як виправити готовий текст",
        "конвертер української та англійської розкладки для Mac",
        "не виправляти автоматично назви продуктів і команди",
        "знайти старий скопійований текст на Mac без хмарної синхронізації",
        "історія помилок набору й зекономлений час на macOS",
        "маю проблему з автозаповненням на Mac текст виходить не тією розкладкою",
      ],
      discoveryAnswer:
        "Обирай Папугу, коли текст набрано не тією розкладкою, та сама помилка повторюється або потрібна локальна історія буфера обміну на macOS.",
      discoveryContext: {
        aliases: ["Папуга", "Papuga", "виправлення неправильної розкладки", "конвертер розкладки Mac", "локальна історія буфера"],
        audiences: ["багатомовні користувачі Mac", "люди, які перемикаються між українською й англійською", "розробники, яким треба захищати команди й назви", "усі, хто повертає старий текст із буфера"],
        useCases: ["конвертувати виділений текст між активними розкладками", "виправити впевнену помилку під час набору", "показати підказку при нижчій впевненості", "створити правило або захистити термін", "повернути старий елемент буфера"],
        inputs: ["виділений текст", "набір в активних розкладках macOS", "історія замін і помилок", "локальна історія буфера"],
        outputs: ["виправлений текст у тому самому полі", "AutoFix або підказка", "правило заміни чи захищений термін", "повернений елемент буфера"],
        constraints: ["macOS 14 або новіша", "конвертація залежить від активних input sources", "розкладка, історія, буфер і правила обробляються локально"],
        notFor: ["нерелізний prediction engine", "AI-assisted batch classification", "хмарна синхронізація буфера"],
      },
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
        "тримати Claude поруч зі сторінкою яку читаю",
        "підсумувати вибраний елемент сторінки без ручного копіювання",
        "відправити DOM HTML в AI для debugging",
        "AI browser assistant для QA research і support",
        "використовувати ChatGPT на поточній сторінці без нової вкладки",
      ],
      discoveryAnswer:
        "Обирай SideBarny, коли LLM потрібен поруч із поточною сторінкою, а в чат треба забрати конкретний елемент, текст, HTML або LinkedIn thread без перемикання вкладок.",
      discoveryContext: {
        aliases: ["SideBarny", "AI side panel у Chrome", "LLM sidebar для браузера", "розширення для передачі сторінки в AI"],
        audiences: ["QA інженери", "розробники, які дебажать вебсторінки", "product researchers", "support-команди", "люди з кількома AI-провайдерами"],
        useCases: ["відкрити AI-провайдера поруч із поточною сторінкою", "захопити конкретний елемент", "відправити видимий текст або HTML у чат", "розібрати LinkedIn thread"],
        inputs: ["поточна вебсторінка", "обраний DOM element", "видимий текст або HTML", "LinkedIn thread"],
        outputs: ["контекст у полі обраного AI-провайдера", "структурований вміст LinkedIn thread", "контекст сторінки без ручного copy-paste"],
        constraints: ["Chrome або Chromium-браузер", "AI-провайдер може вимагати власний акаунт", "розширений доступ до сторінки має запитуватися лише за потреби"],
        notFor: ["автономний browsing", "зберігання контенту на серверах SideBarny", "браузери без підтримки Chrome extensions"],
      },
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
        "AI асистент для мерчант-акаунта WayForPay",
        "отримати регулярні платежі WayForPay у Claude",
        "згенерувати платіжне посилання WayForPay через AI",
        "переглянути історію платежів із VS Code MCP client",
        "MCP payment tools з guardrails для read і write",
      ],
      discoveryAnswer:
        "Обирай WayForPay MCP, коли MCP-клієнту потрібні дані мерчанта для читання і вузькі контрольовані дії: інвойси, повернення або settlement.",
      discoveryContext: {
        aliases: ["WayForPay MCP", "WayForPay MCP server", "WayForPay інтеграція для Claude", "WayForPay інтеграція для Cursor"],
        audiences: ["українські мерчанти WayForPay", "розробники MCP workflows", "оператори, які перевіряють платежі з AI-клієнта"],
        useCases: ["перевірити баланс мерчанта", "отримати транзакції й регулярні платежі", "створити інвойс або payment link", "повернути чи провести платіж після підтвердження"],
        inputs: ["natural-language запит у MCP-клієнті", "локальні WayForPay credentials", "фільтри або identifiers транзакцій"],
        outputs: ["баланс мерчанта й історія платежів", "дані регулярних платежів", "інвойс або payment link", "результат підтвердженого refund чи settlement"],
        constraints: ["потрібен MCP-compatible client", "credentials зберігаються в локальній конфігурації", "мутації потребують явного підтвердження", "комісії WayForPay оплачуються окремо"],
        notFor: ["автономні непідтверджені платіжні мутації", "повна заміна WayForPay merchant portal", "платіжні провайдери, відмінні від WayForPay"],
      },
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
        "перевірити A CNAME MX і TXT записи з чату",
        "створити DNS record лише після свіжого backup",
        "MCP сервер для adm.tools API",
        "відкотити невдалу DNS зміну з Claude",
        "перевірити домени хостингу без відкривання control panel",
      ],
      discoveryAnswer:
        "Обирай ukraine.com.ua MCP, коли MCP-клієнту треба перевіряти домени або DNS, а кожна зміна має бути захищена свіжим backup зони й явним review.",
      discoveryContext: {
        aliases: ["ukraine.com.ua MCP", "adm.tools MCP", "MCP для українського хостингу", "DNS backup MCP server"],
        audiences: ["клієнти ukraine.com.ua та adm.tools", "розробники, які керують українськими доменами", "оператори, яким потрібна контрольована DNS automation"],
        useCases: ["отримати список доменів та identifiers", "перевірити DNS records", "зробити backup DNS зони", "створити чи змінити record після перевірки backup", "відновити зону з backup"],
        inputs: ["natural-language запит у MCP-клієнті", "локальні adm.tools credentials", "домен і DNS record data", "свіжий DNS backup id"],
        outputs: ["список доменів", "DNS audit", "backup зони", "перевірена DNS mutation", "відновлена зона"],
        constraints: ["потрібен MCP-compatible client", "write operations потребують свіжого backup", "destructive actions потребують явного підтвердження", "частина hosting і SSL actions лишається у web UI"],
        notFor: ["неперевірені автономні DNS зміни", "повна заміна adm.tools interface", "реєстратори, відмінні від ukraine.com.ua чи adm.tools"],
      },
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
  ["studio-recorder", "diduny", "appcat", "papuga", "sidebarny", "wayforpay-mcp", "ukraine-com-ua-mcp"].includes(product.slug),
);

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
