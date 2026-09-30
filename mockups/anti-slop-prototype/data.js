export const variants={
 A:{uk:['Авторська майстерня','Особистий вступ, великі демонстрації, спокійний ритм.','Рекомендований напрям'],en:['The workshop','A personal introduction, large demos, a quiet reading rhythm.','Recommended direction']},
 B:{uk:['Каталог інструментів','Компактний вступ, демонстрація та короткий каталог.','Коли важливіший швидкий вибір'],en:['The tool index','A compact introduction, demonstration and short catalogue.','For faster decisions']},
 C:{uk:['Спочатку демонстрація','Мінімум вступу. Спершу дія на екрані, потім деталі.','Коли відео має вести сторінку'],en:['Show it first','Less introduction. An action on screen, then the details.','When the demo leads the page']}
};
export const products=[
 {id:'papuga',repo:'papuga',version:'1.8.0',date:'18.09.2026',kind:'mac',name:{uk:'Папуга',en:'Papuga'},
  title:{uk:'Набрав не тією розкладкою?\nНе набирай ще раз.',en:'Wrong keyboard layout?\nKeep what you typed.'},
  short:{uk:'Виправити розкладку й повернути скопійоване.',en:'Fix keyboard layout. Recover what you copied.'},
  intro:{uk:'Виділи текст і виклич Папугу. Вона перетворить символи на потрібну розкладку. AutoFix може пропонувати виправлення ще під час набору.',en:'Select your text and invoke Papuga to convert its keyboard layout. AutoFix can also suggest corrections while you type.'},
  demo:{uk:'Розкладка: до → після',en:'Keyboard layout: before → after'},
  examples:{uk:['Набрати «ghbdsn»','Викликати ручне виправлення','Отримати «привіт»'],en:['Type “ghbdsn”','Invoke manual correction','Get “привіт”']},
  jobs:{uk:[['Повернути текст','Виправляй виділення або щойно набраний фрагмент за своєю комбінацією клавіш.'],['Керувати AutoFix','Приймай підказку, скасовуй правку або вимкни AutoFix для окремої програми.'],['Зберегти свої слова','Власні правила та список «Не чіпати» для назв, команд і термінів.'],['Знайти скопійоване','Історія буфера з пошуком, відновленням і налаштуванням терміну зберігання.']],en:[['Recover your text','Convert a selection or recently typed fragment with your shortcut.'],['Control AutoFix','Accept a suggestion, undo a correction or exclude an app.'],['Keep your vocabulary','Use your own rules and an ignore list for names, commands and terms.'],['Find a clipboard item','Search, restore and set how long clipboard history is kept.']]},
  boundary:{uk:'Потрібні Accessibility та Input Monitoring. Вставлення залежить від поля й застосунку. Скасування AutoFix працює через підказку або shortcut, не Backspace.',en:'Requires Accessibility and Input Monitoring. Pasting depends on the target app. Undo AutoFix with its prompt or shortcut, not Backspace.'},
  privacy:{uk:'Правила, журнал рішень і clipboard history зберігаються локально. Вони можуть містити чутливий текст. Для перевірки оновлень потрібна мережа.',en:'Rules, decisions and clipboard history are stored locally and can contain sensitive text. Update checks use the network.'},
  question:{uk:'Це перекладач?',en:'Does it translate?'},answer:{uk:'Ні. Перетворення розкладки відновлює символи, які ти хотів набрати. Воно не перекладає зміст.',en:'No. Layout conversion restores the characters you meant to type. It does not translate meaning.'}},
 {id:'appcat',repo:'AppCat',version:'2.3.2',date:'21.09.2026',kind:'mac',name:{uk:'AppCat',en:'AppCat'},
  title:{uk:'Це посилання -\nу робочий браузер.',en:'This link belongs\nin your work browser.'},
  short:{uk:'Відкривати посилання, файли й потрібні вікна.',en:'Route links, open files and switch windows.'},
  intro:{uk:'AppCat запитує, де відкрити посилання. Обери браузер, підтриманий профіль або застосунок. Для повторюваних адрес створи правило.',en:'AppCat asks where a link should open. Choose a browser, supported profile or native app. Add a rule for addresses you open often.'},
  demo:{uk:'Посилання → вибір профілю',en:'Link → profile selection'},
  examples:{uk:['Відкрити посилання на документ','Обрати робочий профіль','Продовжити у потрібному браузері'],en:['Open a document link','Choose your work profile','Continue in the right browser']},
  jobs:{uk:[['Розділити контексти','Робочі й особисті посилання відкриваються в обраному браузері або підтриманому профілі.'],['Прибрати повторний вибір','Правила за доменом, частиною URL або регулярним виразом.'],['Відкрити файл','Обирай програму, налаштовуй формати або передавай кілька файлів одним вибором.'],['Повернути потрібне вікно','Викликай перемикач клавіатурою та переходь до програми або конкретного вікна.']],en:[['Separate contexts','Open work and personal links in the browser or supported profile you choose.'],['Skip repeat decisions','Match a domain, URL fragment or regular expression to a destination.'],['Open a file','Choose an app, adjust file formats or send several files together.'],['Return to a window','Use keyboard controls to switch to an app or a specific window.']]},
  boundary:{uk:'Для маршрутизації AppCat має бути типовим браузером. Профілі підтримуються не в усіх браузерах; керування вікнами потребує Accessibility.',en:'Set AppCat as the default browser for routing. Profile support varies. Window switching requires Accessibility.'},
  privacy:{uk:'Історія й правила локальні. Для іконок AppCat передає домен Google S2, а для перевірки перенаправлень робить запити до адрес посилань.',en:'History and rules are local. Favicon requests send domains to Google S2; redirect resolution makes requests to link destinations.'},
  question:{uk:'Чи може він завжди відкривати приватно?',en:'Does private mode always stay private?'},answer:{uk:'Ні. Підтримка залежить від браузера; при помилці можливий перехід до звичайного відкриття.',en:'No. Support depends on the browser, and a failed private launch can fall back to a regular window.'}},
 {id:'diduny',repo:'Diduny',version:'2.4.0',date:'14.09.2026',kind:'mac',name:{uk:'Дідуня',en:'Diduny'},
  title:{uk:'Скажи думку.\nПродовжуй із текстом.',en:'Say what you mean.\nContinue with text.'},
  short:{uk:'Диктувати, записувати зустрічі й розбирати аудіо.',en:'Dictate, record meetings and transcribe audio.'},
  intro:{uk:'Надиктуй повідомлення й отримай текст у поточному полі. Зустрічі, файли та YouTube-записи можна обробляти окремо й зберігати в бібліотеці.',en:'Dictate a message and get text in the current field. Process meetings, files and YouTube recordings separately and keep results in your library.'},
  demo:{uk:'Думка → повідомлення',en:'A thought → a message'},
  examples:{uk:['Викликати диктування','Сказати коротке повідомлення','Вставити готовий текст у поле'],en:['Invoke dictation','Speak a short message','Insert the resulting text']},
  jobs:{uk:[['Надиктувати повідомлення','Глобальна клавіша, запис, transcript і вставлення в активне поле або clipboard.'],['Зберегти зустріч','Запис системного звуку й мікрофона, live transcript та повторна обробка. Speaker labels залежать від Cloud.'],['Розібрати готові записи','Локальна транскрипція аудіо, відео та окремих YouTube URL. Об’єднуй джерела в batches.'],['Повернутися до результату','Пошук у бібліотеці, версії transcript, відтворення, повторний переклад і TXT export.']],en:[['Dictate a message','A global shortcut, recording, transcription and delivery to a field or clipboard.'],['Keep a meeting','System audio and microphone recording, live text and reprocessing. Speaker labels depend on Cloud.'],['Process existing recordings','Local transcription for audio, video and individual YouTube URLs. Group sources into batches.'],['Return to a result','Search the library, compare transcript versions, replay, translate and export TXT.']]},
  boundary:{uk:'Для вставлення потрібен Accessibility, для системного звуку - Screen Recording. Локальний Whisper перекладає лише в англійську. Хмарні функції залежать від акаунта й ліміту.',en:'Pasting requires Accessibility; system audio needs Screen Recording access. Local Whisper translates only into English. Cloud features depend on your account and quota.'},
  privacy:{uk:'Аудіо й бібліотека можуть зберігатися на Mac. Але локальне розпізнавання не означає повністю локальну обробку: очищення тексту може звертатися до backend.',en:'Audio and the library can stay on your Mac. Local recognition does not mean every step is local: text cleanup can call the backend.'},
  question:{uk:'Чи працює без інтернету?',en:'Can it work offline?'},answer:{uk:'Локальне розпізнавання потребує завантаженої Whisper-моделі. Cloud, очищення через backend і хмарний переклад потребують мережі.',en:'Local recognition needs a downloaded Whisper model. Cloud recognition, backend cleanup and cloud translation need a connection.'}},
 {id:'sidebarny',repo:'sidebarny-extension',version:'1.2.2',date:'24.03.2026',kind:'browser',name:{uk:'SideBarny',en:'SideBarny'},
  title:{uk:'Фрагмент сторінки.\nЧат поруч.',en:'A piece of the page.\nA chat alongside it.'},
  short:{uk:'Передавати текст або HTML у бічну панель AI-чату.',en:'Put selected page text or HTML into an AI sidebar.'},
  intro:{uk:'Обери елемент сторінки й передай його в один із восьми AI-чатів. SideBarny вставляє контекст у поле; надсилання залишається за тобою.',en:'Pick a page element and pass it to one of eight AI chats. SideBarny fills the input; you choose when to send.'},
  examples:{uk:['Обрати елемент сторінки','Перевірити текст у чаті','Надіслати власний запит'],en:['Pick a page element','Review text in the chat','Send your request']},
  jobs:{uk:[['Обрати провайдера','ChatGPT, Claude, Gemini, Rovo, Copilot, Grok, Poe або HuggingChat. Один чат одночасно.'],['Передати контекст','Текст або HTML вибраного елемента. Вміст також потрапляє в clipboard.'],['Розібрати обговорення','Захоплення вже завантажених LinkedIn-коментарів разом зі структурою відповідей.'],['Продовжити у вкладці','Відкрити розмову окремо або повторити завантаження провайдера.']],en:[['Choose a provider','ChatGPT, Claude, Gemini, Rovo, Copilot, Grok, Poe or HuggingChat. One at a time.'],['Pass context','Text or HTML of a selected element. Capture also replaces the clipboard.'],['Read a discussion','Capture loaded LinkedIn comments and their reply structure.'],['Continue in a tab','Open the conversation separately or reload the provider.']]},
  boundary:{uk:'Встановлення з GitHub. Chrome Web Store listing не підтверджено. Робота вставлення залежить від поточного інтерфейсу AI-провайдера.',en:'Install from GitHub. A Chrome Web Store listing has not been verified. Insertion depends on the provider’s current interface.'},
  privacy:{uk:'На захоплення запитується доступ до сторінок. Вибраний вміст копіюється в clipboard і передається в поле зовнішнього AI-сайту. Розширення змінює headers для його вбудовування.',en:'Capture requests access to pages. Selected content goes to the clipboard and the external AI site’s input. The extension changes headers to allow embedding.'},
  question:{uk:'Воно читає всю сторінку автоматично?',en:'Does it automatically read the whole page?'},answer:{uk:'Релізний сценарій починається з вибору елемента. Повний scrape і автоматичне надсилання не є цим сценарієм.',en:'The released flow starts with you picking an element. It is not a full-page scraper or an automatic sender.'}},
 {id:'wayforpay-mcp',repo:'wayforpay-mcp',version:'1.0.0',date:'02.05.2026',kind:'mcp',name:{uk:'WayForPay MCP',en:'WayForPay MCP'},
  title:{uk:'Знайти платіж.\nРозібратися зі статусом.',en:'Find a payment.\nUnderstand its status.'},
  short:{uk:'Баланс, пошук платежів і операції через MCP-клієнт.',en:'Balances, payment search and actions through MCP.'},
  intro:{uk:'Підключи merchant account до свого MCP-клієнта. Перевіряй баланс, шукай транзакції й отримуй зведення. Операції, що змінюють платежі, вмикаються окремо.',en:'Connect a merchant account to your MCP client. Check balances, find transactions and get summaries. Payment mutations are enabled separately.'},
  examples:{uk:['Запитати про платіж','Викликати wfp_search_transactions','Перевірити статус і суму'],en:['Ask about a payment','Call wfp_search_transactions','Review its status and amount']},
  jobs:{uk:[['Побачити стан рахунку','Кілька merchant profiles, баланс, merchant info та перевірка з’єднання.'],['Знайти потрібний платіж','Пошук за email, orderReference, сумою або статусом; зведення за період.'],['Виконати операцію','Інвойс, повернення, settlement та керування відомими recurring payments після увімкнення write tools.'],['Підготувати звіт','6 готових prompts: звіт, огляд дня, звірка, підписки, пошук і порівняння.']],en:[['Check the account','Multiple merchant profiles, balances, merchant info and connection checks.'],['Find a payment','Search by email, order reference, amount or status; summarise a period.'],['Take an action','Invoices, refunds, settlement and known recurring payments with write tools enabled.'],['Prepare a report','6 prompts for reports, daily review, reconciliation, subscriptions, search and comparison.']]},
  boundary:{uk:'Потрібні credentials WayForPay, MCP-клієнт, Node 20+ та Bun 1.1+ для релізного entrypoint. 21 tool, з них 6 для змін. Prompt не є фоновим моніторингом; confirm не доводить згоду людини.',en:'Requires WayForPay credentials, an MCP client, Node 20+ and Bun 1.1+ for the release entrypoint. 21 tools, including 6 mutations. A prompt is not a background monitor; confirm is not proof of human approval.'},
  privacy:{uk:'Конфігурація локальна, запити йдуть до WayForPay. Результати платежів отримує MCP-клієнт і, залежно від нього, AI-провайдер.',en:'Configuration is local; requests go to WayForPay. Payment results reach the MCP client and, depending on it, an AI provider.'},
  question:{uk:'Це заміна кабінету WayForPay?',en:'Does it replace the WayForPay portal?'},answer:{uk:'Ні. Це конкретний набір читань і операцій. Наприклад, стан підписки перевіряється за відомим orderReference.',en:'No. It exposes a defined set of queries and operations. A recurring payment requires a known order reference.'}},
 {id:'ukraine-com-ua-mcp',repo:'ukraine-com-ua-mcp',version:'0.1.3',date:'15.06.2026',kind:'mcp',name:{uk:'ukraine.com.ua MCP',en:'ukraine.com.ua MCP'},
  title:{uk:'DNS-записи.\nІ копія перед змінами.',en:'DNS records.\nA snapshot before changes.'},
  short:{uk:'Перевіряти домени, зберігати зони й змінювати DNS.',en:'Inspect domains, save zones and change DNS.'},
  intro:{uk:'Переглянь DNS-зону, збережи локальну копію, а тоді зміни запис. Сервер перевіряє свіжість і відповідність копії за типової конфігурації.',en:'Inspect a zone, save a local snapshot, then change a record. By default, the server checks snapshot age and whether the zone still matches.'},
  examples:{uk:['Прочитати DNS-зону','Створити backup_dns_zone','Змінити record зі свіжим backup'],en:['Inspect the DNS zone','Run backup_dns_zone','Change a record with a fresh backup']},
  jobs:{uk:[['Перевірити домени','Список акаунта, доступність імені та баланс. Без реєстрації нового домену.'],['Побачити зону','DNS records з фільтром типу й pagination. Підтримано 10 типів записів.'],['Зберегти перед зміною','Локальний JSON snapshot, перевірка віку й відповідності поточній зоні.'],['Відновити з копії','Послідовність create/update/delete зі звітом про лічильники й помилки.']],en:[['Inspect domains','List account domains, check name availability and balance. No domain registration.'],['Read a zone','Filter and paginate DNS records. Ten record types supported.'],['Save before editing','Local JSON snapshots with age and current-zone checks.'],['Restore a snapshot','A sequence of creates, updates and deletes, with counts and errors.']]},
  boundary:{uk:'Потрібні Node 20+, API token і MCP-клієнт. 9 tools. Write tools увімкнені типово. Restore неатомарний і може завершитися частково. Прямий CLI не використовує MCP guards.',en:'Requires Node 20+, an API token and an MCP client. 9 tools. Write tools are on by default. Restore is non-atomic and may partially fail. The standalone CLI does not use MCP guards.'},
  privacy:{uk:'Token зберігається в локальній конфігурації та надсилається до adm.tools для авторизації. Запити також ідуть до adm.tools; backups лишаються локально. DNS-дані повертаються MCP-клієнту. Вимогу backup можна вимкнути в конфігурації.',en:'The token is stored in local configuration and sent to adm.tools for authentication. Requests also go to adm.tools; backups remain local. DNS data reaches the MCP client. The backup requirement can be disabled in configuration.'},
  question:{uk:'Чи керує він усім хостингом?',en:'Does it manage the whole hosting account?'},answer:{uk:'Ні. У цьому каталозі підтверджені домени, DNS, backup/restore і баланс. SSL та поштові скриньки не входять до цього набору.',en:'No. This release covers domain discovery, DNS, snapshots, restore and balance, not SSL or mailbox management.'}}
];
export const pageNames={uk:{home:'Головна',discover:'Знайти інструмент',updates:'Оновлення',update:'Окреме оновлення',about:'Про Романа',legal:'Дані та умови','404':'Сторінка 404'},en:{home:'Home',discover:'Find a tool',updates:'Updates',update:'Update detail',about:'About Roman',legal:'Data & terms','404':'404 page'}};
export const improvements={
 home:['Великий слоган і колаж схожих dashboard screenshots.','Короткий авторський вступ, одне головне демо й каталог без версій. Без повторного блоку автора. Інтеграції винесені нижче.'],
 papuga:['Оглядова статистика замість виправлення тексту.','Показати хибну розкладку → дію → правильний текст. Clipboard винести окремим сценарієм.'],
 appcat:['Один screenshot для профілів, файлів і вікон.','Демо вибору робочого профілю. Нижче - окремі входи до правил, файлів і перемикання вікон.'],
 diduny:['Диктування, meetings і переклад сховані за одним overview.','Демо повідомлення, потім чіткі групи: зустрічі, готові записи, бібліотека. Пояснити локальний/хмарний шлях.'],
 sidebarny:['«Add to Chrome» без підтвердженого Store link; обіцянка цілого thread.','Показати вибір фрагмента і поле чату. Назвати фактичне встановлення з GitHub і межу завантаженого DOM.'],
 'wayforpay-mcp':['«5 tools», застарілі назви й розмитий approval.','Один конкретний read-only приклад, потім tools за задачами. Write mode пояснити перед конфігурацією.'],
 'ukraine-com-ua-mcp':['Широка обіцянка керування хостингом і безпечного rollback.','Показати read → backup → change. Назвати межі restore і фактичні 9 tools.'],
 discover:['Ще одна довга вітрина з повторенням карток.','Пошук за задачею й прості фільтри. Результат одразу пояснює, який продукт підійде.'],
 updates:['Оформлення кожного запису як окремого рекламного лендингу.','Компактний журнал із датою, продуктом і зрозумілим заголовком. Не створювати фіктивних новин.'],
 update:['Повторення «що боліло / що зробив / результат» у великих картках.','Одна коротка стаття з контекстом і посиланням на доказ. Читання без зайвого декору.'],
 about:['Порожній блок під фото, великі лічильники й абстрактна цитата про AI.','Ім’я, місце, реальні продукти та спільноти. Фото додати лише справжнє; поки обійтися без заглушки.'],
 legal:['Загальні заяви про всі продукти в одному тексті.','Розділити сайт і апки. Дати коротку карту даних по кожному продукту та контакт; не вигадувати юридичних гарантій.'],
 '404':['Глухий кут із загальним повідомленням.','Одразу дати пошук інструмента, каталог і шлях на головну.']
};

export const improvementsEn={
  "home": [
    "A large slogan and a collage of similar dashboard screenshots.",
    "A short introduction from the maker, three concrete tasks and a visible result. Integrations have their own section."
  ],
  "papuga": [
    "Overview statistics instead of a text correction.",
    "Show the wrong layout, the action and corrected text. Give clipboard history a separate workflow."
  ],
  "appcat": [
    "One overview screenshot stands for profiles, files and windows.",
    "Show the work-profile picker first, followed by separate explanations of rules, files and window switching."
  ],
  "diduny": [
    "Dictation, meetings and translation share one overview image.",
    "Demonstrate a short message, then group meetings, existing recordings and the library. Explain local and cloud processing."
  ],
  "sidebarny": [
    "An Add to Chrome label without a verified Store link, and an overbroad thread-capture claim.",
    "Show a selected excerpt and a filled chat input. Name GitHub installation and the loaded-page boundary."
  ],
  "wayforpay-mcp": [
    "An outdated tool count, old names and vague approval language.",
    "Start with a specific read-only example. Group tools by task and explain write mode before setup."
  ],
  "ukraine-com-ua-mcp": [
    "Broad hosting management and rollback promises.",
    "Show read, backup and change as separate steps. State restore limits and the actual nine tools."
  ],
  "discover": [
    "Another long showcase repeating the same product cards.",
    "Working task search and simple filters. Each result explains which tool fits and its requirements."
  ],
  "updates": [
    "Each entry looks like a separate promotional landing page.",
    "A compact dated work log, with concrete changes and evidence. Keep the existing entry rather than inventing news."
  ],
  "update": [
    "Repeated problem, change and outcome blocks in oversized cards.",
    "One short readable article with context and an evidence link."
  ],
  "about": [
    "An empty photo placeholder, big counters and an abstract AI statement.",
    "Name, location, real products and community links. Use a real photo when available; no placeholder portrait."
  ],
  "legal": [
    "General statements about every product in a single text.",
    "Separate website data from app data. Provide a tool-by-tool map and contact without inventing legal guarantees."
  ],
  "404": [
    "A generic error with only one way out.",
    "Offer the catalogue and the working task finder immediately."
  ]
};
