import {
  UserMinus,
  Radio,
  MessageCircle,
  Share2,
  ShieldCheck,
  FileCode2,
  Tags,
  type LucideIcon,
} from "lucide-react";
import type { Lang } from "@/lib/i18n";

export type Localized<T> = Record<Lang, T>;

export type Plugin = {
  slug: string;
  name: string;
  tagline: Localized<string>;
  description: Localized<string>;
  icon: LucideIcon;
  tags: string[];
  stars: string;
  version: string;
  status: "stable" | "beta" | "coming-soon";
  wpMin: string;
  phpCompat: string;
  github: string;
  download: string;
  features: Localized<string[]>;
  install: string[];
  featured?: boolean;
  /** Official WordPress.org plugin directory listing, if published there. */
  wporg?: string;
};

const GH_USER = "gioxx";
const repo = (name: string) => `https://github.com/${GH_USER}/${name}`;
const dl = (name: string) => `https://github.com/${GH_USER}/${name}/archive/refs/heads/main.zip`;

export const plugins: Plugin[] = [
  // Ordine alfabetico
  {
    slug: "disqus-recent-comments",
    name: "Disqus Recent Comments",
    tagline: {
      en: "A widget that displays your latest Disqus comments, powered by the Disqus API.",
      it: "Un widget che mostra gli ultimi commenti Disqus del tuo sito, tramite le API di Disqus.",
    },
    description: {
      en: "Disqus Recent Comments is a simple widget that pulls the latest comments from your Disqus forum using the Disqus API 3.0 (JSON) and displays them anywhere widgets are supported. A self-hosted update checker keeps it in sync with new releases published on GitHub.",
      it: "Disqus Recent Comments è un widget semplice che recupera gli ultimi commenti dal tuo forum Disqus tramite le API 3.0 di Disqus (JSON) e li mostra ovunque siano supportati i widget. Un update checker self-hosted lo mantiene allineato alle nuove release pubblicate su GitHub.",
    },
    icon: MessageCircle,
    tags: ["Disqus", "Widget", "Comments"],
    stars: "—",
    version: "0.3",
    status: "stable",
    wpMin: "—",
    phpCompat: "—",
    github: repo("disqus-recent-comments"),
    download: dl("disqus-recent-comments"),
    features: {
      en: [
        "Fetches latest comments from Disqus via API 3.0 (JSON).",
        "Drop-in widget for any widget-ready area.",
        "Self-hosted update checker, updates directly from GitHub releases.",
        "No database bloat — no local storage of comment data.",
      ],
      it: [
        "Recupera gli ultimi commenti da Disqus tramite API 3.0 (JSON).",
        "Widget pronto all'uso per qualsiasi area widget.",
        "Update checker self-hosted, aggiornamenti direttamente dalle release GitHub.",
        "Nessun appesantimento del database — nessun dato salvato in locale.",
      ],
    },
    install: [
      "cd wp-content/plugins",
      "git clone https://github.com/gioxx/disqus-recent-comments",
      "# Activate 'Disqus Recent Comments' and add the widget from Appearance > Widgets",
    ],
  },
  {
    slug: "email-user-cleaner",
    name: "E-mail User Cleaner",
    tagline: {
      en: "Export, review and delete WordPress users by email — including duplicate detection.",
      it: "Esporta, controlla ed elimina gli utenti WordPress tramite email — inclusa la rilevazione dei duplicati.",
    },
    description: {
      en: "E-mail User Cleaner adds a dedicated maintenance page to the WordPress admin. Export a CSV of every registered user, delete users by pasting a list of email addresses, or find duplicate accounts (matched on first name, last name and email) and remove them with an eye on their last login date. The account matching the site administrator's email is always protected from deletion.",
      it: "E-mail User Cleaner aggiunge una pagina di manutenzione dedicata nell'admin di WordPress. Esporta un CSV con tutti gli utenti registrati, elimina utenti incollando un elenco di indirizzi email, oppure individua account duplicati (per nome, cognome ed email) e rimuovili tenendo conto della data dell'ultimo accesso. L'account corrispondente all'email dell'amministratore è sempre protetto dall'eliminazione.",
    },
    icon: UserMinus,
    tags: ["Maintenance", "Users", "CSV"],
    stars: "—",
    version: "1.7.2",
    status: "stable",
    wpMin: "6.0+",
    phpCompat: "7.4+",
    github: repo("email-user-cleaner"),
    download: dl("email-user-cleaner"),
    wporg: "https://wordpress.org/plugins/email-user-cleaner/",
    features: {
      en: [
        "Export a CSV with the complete list of registered users.",
        "Delete users by pasting one email address per line.",
        "Detect duplicate users by first name, last name and email.",
        "Reference the last login date when choosing which duplicates to remove.",
        "The administrator's own account is never deleted.",
      ],
      it: [
        "Esporta un CSV con l'elenco completo degli utenti registrati.",
        "Elimina utenti incollando un indirizzo email per riga.",
        "Rileva utenti duplicati per nome, cognome ed email.",
        "Fa riferimento alla data dell'ultimo accesso per scegliere quali duplicati rimuovere.",
        "L'account dell'amministratore non viene mai eliminato.",
      ],
    },
    install: [
      "cd wp-content/plugins",
      "git clone https://github.com/gioxx/email-user-cleaner",
      "# Activate 'E-mail User Cleaner' — also available on the official WordPress.org directory",
    ],
    featured: true,
  },
  {
    slug: "wp-lsi-reloaded",
    name: "Lightweight Social Icons Reloaded",
    tagline: {
      en: "An independent, modernized fork of Lightweight Social Icons with Discord, WhatsApp, TikTok, Threads and Bluesky.",
      it: "Un fork indipendente e modernizzato di Lightweight Social Icons con Discord, WhatsApp, TikTok, Threads e Bluesky.",
    },
    description: {
      en: "The original Lightweight Social Icons plugin hasn't seen any development in years. Reloaded is a full, standalone relaunch: it addresses security issues, refreshes the icon set with current platforms (Discord, WhatsApp, TikTok, Threads, Bluesky) and drops defunct ones, and no longer depends on the original plugin's files. Install it, activate it, then deactivate the original — your widget instance, configured icons, colors and sidebar placement carry over automatically.",
      it: "Il plugin originale Lightweight Social Icons non riceve sviluppo da anni. Reloaded è un rilancio completo e indipendente: risolve problemi di sicurezza, aggiorna il set di icone con le piattaforme attuali (Discord, WhatsApp, TikTok, Threads, Bluesky) e rimuove quelle defunte, senza più dipendere dai file del plugin originale. Installalo, attivalo, poi disattiva l'originale — l'istanza del widget, le icone configurate, i colori e la posizione nella sidebar vengono mantenuti automaticamente.",
    },
    icon: Share2,
    tags: ["Social", "Icons", "Widget"],
    stars: "—",
    version: "1.0.0",
    status: "stable",
    wpMin: "6.0+",
    phpCompat: "7.4+",
    github: repo("wp-lsi-reloaded"),
    download: dl("wp-lsi-reloaded"),
    features: {
      en: [
        "Independent fork — no longer requires the original plugin's files.",
        "Refreshed icon set: adds Discord, WhatsApp, TikTok, Threads and Bluesky.",
        "Removes defunct platforms from the original icon set.",
        "Existing widget configuration (icons, colors, sidebar placement) carries over automatically.",
        "Addresses security issues present in the unmaintained original.",
      ],
      it: [
        "Fork indipendente — non richiede più i file del plugin originale.",
        "Set di icone aggiornato: aggiunge Discord, WhatsApp, TikTok, Threads e Bluesky.",
        "Rimuove le piattaforme defunte dal set di icone originale.",
        "La configurazione esistente del widget (icone, colori, posizione in sidebar) viene mantenuta automaticamente.",
        "Risolve problemi di sicurezza presenti nell'originale non più mantenuto.",
      ],
    },
    install: [
      "cd wp-content/plugins",
      "git clone https://github.com/gioxx/wp-lsi-reloaded",
      "# Activate 'Lightweight Social Icons Reloaded', then deactivate the original plugin",
      "# Your existing widget configuration is preserved automatically",
    ],
  },
  {
    slug: "wp-posts-to-github",
    name: "Posts to GitHub",
    tagline: {
      en: "Exports published posts as Markdown files, with YAML front matter, to a GitHub repository.",
      it: "Esporta gli articoli pubblicati come file Markdown, con front matter YAML, verso un repository GitHub.",
    },
    description: {
      en: "Posts to GitHub exports published posts as Markdown files complete with YAML front matter and pushes them to a GitHub repository, keeping a version-controlled mirror of your content outside WordPress.",
      it: "Posts to GitHub esporta gli articoli pubblicati come file Markdown completi di front matter YAML e li invia a un repository GitHub, mantenendo una copia versionata dei tuoi contenuti al di fuori di WordPress.",
    },
    icon: FileCode2,
    tags: ["GitHub", "Markdown", "Export"],
    stars: "—",
    version: "1.5.5",
    status: "stable",
    wpMin: "6.0+",
    phpCompat: "7.4+",
    github: repo("wp-posts-to-github"),
    download: dl("wp-posts-to-github"),
    features: {
      en: [
        "Exports published posts as Markdown with YAML front matter.",
        "Pushes exported files directly to a GitHub repository.",
        "Keeps a version-controlled mirror of your content.",
      ],
      it: [
        "Esporta gli articoli pubblicati in Markdown con front matter YAML.",
        "Invia i file esportati direttamente a un repository GitHub.",
        "Mantiene una copia versionata dei tuoi contenuti.",
      ],
    },
    install: [
      "cd wp-content/plugins",
      "git clone https://github.com/gioxx/wp-posts-to-github",
      "# Activate 'Posts to GitHub' and configure your repository under Settings",
    ],
  },
  {
    slug: "silent-consent-clarity",
    name: "Silent Consent Clarity",
    tagline: {
      en: "Automatically grants Microsoft Clarity consent on internal and corporate sites.",
      it: "Concede automaticamente il consenso per Microsoft Clarity sui siti interni e aziendali.",
    },
    description: {
      en: "Silent Consent Clarity is a lightweight consent layer that sits on top of the official Microsoft Clarity plugin. It automatically applies Ad Storage and Analytics Storage consent without touching Clarity's own configuration — meant for protected, corporate sites where cookie acceptance isn't strictly required under GDPR. It is not a replacement for Microsoft Clarity: both plugins need to be installed and active.",
      it: "Silent Consent Clarity è un layer di consenso leggero che si appoggia al plugin ufficiale Microsoft Clarity. Applica automaticamente il consenso su Ad Storage e Analytics Storage senza toccare la configurazione di Clarity — pensato per siti protetti e aziendali dove l'accettazione dei cookie non è strettamente richiesta dal GDPR. Non sostituisce Microsoft Clarity: entrambi i plugin devono essere installati e attivi.",
    },
    icon: ShieldCheck,
    tags: ["Clarity", "GDPR", "Privacy"],
    stars: "—",
    version: "2.0.1",
    status: "beta",
    wpMin: "6.0+",
    phpCompat: "7.4+",
    github: repo("silent-consent-clarity"),
    download: dl("silent-consent-clarity"),
    features: {
      en: [
        "Automatic consent management for Microsoft Clarity.",
        "Works as a layer on top of the official Microsoft Clarity plugin.",
        "Configurable Ad Storage and Analytics Storage consent.",
        "Automatic Project ID detection from an existing Clarity installation.",
        "Multi-language support (English and Italian included).",
        "Zero interference with Microsoft Clarity's own functionality.",
      ],
      it: [
        "Gestione automatica del consenso per Microsoft Clarity.",
        "Funziona come layer sopra il plugin ufficiale Microsoft Clarity.",
        "Consenso configurabile per Ad Storage e Analytics Storage.",
        "Rilevazione automatica del Project ID da un'installazione Clarity esistente.",
        "Supporto multilingua (Inglese e Italiano inclusi).",
        "Zero interferenza con le funzionalità di Microsoft Clarity.",
      ],
    },
    install: [
      "# Requires the official Microsoft Clarity plugin, installed and configured",
      "cd wp-content/plugins",
      "git clone https://github.com/gioxx/silent-consent-clarity",
      "# Activate 'Silent Consent Clarity' and set your consent preferences under Settings > Clarity Consent",
    ],
  },
  {
    slug: "wp-simplealexa",
    name: "Simple Alexa News Briefing",
    tagline: {
      en: "Turn your latest posts into an Alexa Flash Briefing feed via a REST endpoint.",
      it: "Trasforma i tuoi ultimi articoli in un feed Alexa Flash Briefing tramite REST endpoint.",
    },
    description: {
      en: "Simple Alexa News Briefing exposes your latest WordPress posts as an Alexa Flash Briefing feed through a REST API endpoint (/wp-json/simplealexa/v1/briefing). Set a default number of items from the dashboard, or override it per request with a count query parameter.",
      it: "Simple Alexa News Briefing espone i tuoi ultimi articoli WordPress come feed Alexa Flash Briefing tramite un endpoint REST API (/wp-json/simplealexa/v1/briefing). Imposta un numero predefinito di elementi dalla bacheca, oppure sovrascrivilo per singola richiesta con il parametro count.",
    },
    icon: Radio,
    tags: ["Alexa", "REST API", "Briefing"],
    stars: "—",
    version: "1.2.2",
    status: "stable",
    wpMin: "6.0+",
    phpCompat: "7.4+",
    github: repo("wp-simplealexa"),
    download: dl("wp-simplealexa"),
    features: {
      en: [
        "Exposes the feed via WP REST API (/wp-json/simplealexa/v1/briefing).",
        "Admin setting for the default number of items.",
        "Optional ?count= query parameter to override the default.",
        "Internationalization ready — bring your own .po/.mo files.",
        "Git Updater compatible for updates straight from GitHub.",
      ],
      it: [
        "Espone il feed tramite WP REST API (/wp-json/simplealexa/v1/briefing).",
        "Impostazione admin per il numero predefinito di elementi.",
        "Parametro opzionale ?count= per sovrascrivere il valore predefinito.",
        "Pronto per l'internazionalizzazione — porta i tuoi file .po/.mo.",
        "Compatibile con Git Updater per aggiornamenti diretti da GitHub.",
      ],
    },
    install: [
      "cd wp-content/plugins",
      "git clone https://github.com/gioxx/wp-simplealexa",
      "# Activate 'Simple Alexa News Briefing', then set the default count under Settings > Alexa Briefing",
    ],
  },
  {
    slug: "wp-smart-tags",
    name: "Smart Tags for WordPress",
    tagline: {
      en: "Manage WordPress tags manually or with Claude API suggestions — always with manual approval.",
      it: "Gestisci i tag di WordPress manualmente o con i suggerimenti delle API di Claude — sempre con approvazione manuale.",
    },
    description: {
      en: "Smart Tags for WordPress sends your post tags to the Claude API (Anthropic) in batches and asks it to spot near-duplicates, semantic overlaps, and low-usage tags that could be merged into a broader existing tag. Nothing is changed automatically: every suggestion is queued for review and only applied when you approve it. Alongside the AI analysis, a 'Manage Tags' tab covers manual, non-AI tag housekeeping: usage statistics, search, merge, and delete.",
      it: "Smart Tags for WordPress invia i tag dei tuoi articoli alle API di Claude (Anthropic) in batch, chiedendo di individuare quasi-duplicati, sovrapposizioni semantiche e tag poco usati che potrebbero essere uniti a un tag più generale già esistente. Nulla viene modificato automaticamente: ogni suggerimento viene messo in coda per la revisione e applicato solo dopo la tua approvazione. Oltre all'analisi AI, una scheda 'Manage Tags' copre la manutenzione manuale, non-AI, dei tag: statistiche d'uso, ricerca, unione ed eliminazione.",
    },
    icon: Tags,
    tags: ["AI", "Tags", "Claude"],
    stars: "—",
    version: "0.19.0",
    status: "stable",
    wpMin: "6.0+",
    phpCompat: "7.4+",
    github: repo("wp-smart-tags"),
    download: dl("wp-smart-tags"),
    features: {
      en: [
        "Batch analysis of all tags via the Claude API, with a live processing log, progress tracking, and a stop button.",
        "Merge suggestions grouped by type: near-duplicates, semantic overlaps, low-usage tags.",
        "Per-suggestion Approve/Reject/Restore, plus multi-select bulk actions on each suggestions table.",
        "Rejected suggestions are kept, not discarded, and can be restored to pending at any time.",
        "A 'Manage Tags' tab for non-AI housekeeping: usage histogram, searchable/sortable/paginated tag table, individual or bulk deletion, and a manual merge tool.",
        "Unused tag detection (0 posts) with bulk delete and a tool to recount drifted tag counts.",
        "Configurable AI model, batch size, and response language for Claude's suggestion text.",
        "Git Updater compatible for updates straight from GitHub.",
      ],
      it: [
        "Analisi in batch di tutti i tag tramite API Claude, con log di elaborazione in tempo reale, avanzamento e pulsante di stop.",
        "Suggerimenti di unione raggruppati per tipo: quasi-duplicati, sovrapposizioni semantiche, tag poco usati.",
        "Approvazione/rifiuto/ripristino per singolo suggerimento, più azioni bulk multi-selezione su ogni tabella.",
        "I suggerimenti rifiutati vengono conservati, non scartati, e possono essere ripristinati in sospeso in qualsiasi momento.",
        "Una scheda 'Manage Tags' per la manutenzione non-AI: istogramma d'uso, tabella tag ricercabile/ordinabile/paginata, eliminazione singola o bulk e uno strumento di unione manuale.",
        "Rilevazione tag non utilizzati (0 articoli) con eliminazione bulk e uno strumento per ricalcolare i conteggi disallineati.",
        "Modello AI, dimensione batch e lingua delle risposte configurabili per il testo dei suggerimenti di Claude.",
        "Compatibile con Git Updater per aggiornamenti diretti da GitHub.",
      ],
    },
    install: [
      "cd wp-content/plugins",
      "git clone https://github.com/gioxx/wp-smart-tags",
      "# Activate 'Smart Tags for WordPress' and enter your Anthropic API key under Tools > Smart Tags for WordPress: Settings",
    ],
  },
];

export const getPlugin = (slug: string) => plugins.find((p) => p.slug === slug);
