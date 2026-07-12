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
    slug: "clarity-consent-auto",
    name: "Clarity Consent Auto",
    tagline: {
      en: "Automatically grants Microsoft Clarity consent on internal and corporate sites.",
      it: "Concede automaticamente il consenso per Microsoft Clarity sui siti interni e aziendali.",
    },
    description: {
      en: "Clarity Consent Auto is a lightweight consent layer that sits on top of the official Microsoft Clarity plugin. It automatically applies Ad Storage and Analytics Storage consent without touching Clarity's own configuration — meant for protected, corporate sites where cookie acceptance isn't strictly required under GDPR. It is not a replacement for Microsoft Clarity: both plugins need to be installed and active.",
      it: "Clarity Consent Auto è un layer di consenso leggero che si appoggia al plugin ufficiale Microsoft Clarity. Applica automaticamente il consenso su Ad Storage e Analytics Storage senza toccare la configurazione di Clarity — pensato per siti protetti e aziendali dove l'accettazione dei cookie non è strettamente richiesta dal GDPR. Non sostituisce Microsoft Clarity: entrambi i plugin devono essere installati e attivi.",
    },
    icon: ShieldCheck,
    tags: ["Clarity", "GDPR", "Privacy"],
    stars: "—",
    version: "2.0.1",
    status: "beta",
    wpMin: "6.0+",
    phpCompat: "7.4+",
    github: repo("clarity-consent-auto"),
    download: dl("clarity-consent-auto"),
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
      "git clone https://github.com/gioxx/clarity-consent-auto",
      "# Activate 'Clarity Consent Auto' and set your consent preferences under Settings > Clarity Consent",
    ],
  },
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
    slug: "wp-lsi",
    name: "Lightweight Social Icons (mod)",
    tagline: {
      en: "A maintained fork of Lightweight Social Icons with Mastodon, Telegram and refreshed icons.",
      it: "Un fork mantenuto di Lightweight Social Icons con Mastodon, Telegram e icone aggiornate.",
    },
    description: {
      en: "The original Lightweight Social Icons plugin hasn't seen any development in years. This mod keeps it alive with a newer Fontello icon font that adds Mastodon and Telegram and drops the defunct Google+. It's meant as a drop-in replacement: swap the plugin files over FTP and your existing configuration is preserved. A proper rewrite is planned for an eventual official release — for now, this custom version is what's available.",
      it: "Il plugin originale Lightweight Social Icons non riceve sviluppo da anni. Questo mod lo mantiene vivo con una versione più recente del font Fontello, che aggiunge Mastodon e Telegram e rimuove il defunto Google+. È pensato come sostituzione diretta: sostituisci i file del plugin via FTP e la tua configurazione esistente viene preservata. È prevista una riscrittura per un'eventuale release ufficiale — per ora è disponibile solo questa versione custom.",
    },
    icon: Share2,
    tags: ["Social", "Icons", "Widget"],
    stars: "—",
    version: "1.1.2",
    status: "stable",
    wpMin: "4.5+",
    phpCompat: "—",
    github: repo("wp-lsi"),
    download: dl("wp-lsi"),
    features: {
      en: [
        "Updated Fontello icon font: adds Mastodon and Telegram.",
        "Removes the defunct Google+ icon.",
        "Drop-in replacement over FTP — keeps your existing configuration.",
        "Editable Fontello JSON config included to customize icons further.",
      ],
      it: [
        "Font Fontello aggiornato: aggiunge Mastodon e Telegram.",
        "Rimuove l'icona del defunto Google+.",
        "Sostituzione diretta via FTP — mantiene la configurazione esistente.",
        "Configurazione Fontello JSON inclusa e modificabile per personalizzare ulteriormente le icone.",
      ],
    },
    install: [
      "# Requires the original Lightweight Social Icons plugin already installed",
      "cd wp-content/plugins/lightweight-social-icons",
      "# Replace the plugin files with the ones from this repo via FTP/SFTP",
      "# Your existing widget configuration is preserved",
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

  // Coming soon — repository privati, non ancora pubblicati
  {
    slug: "wp-ai-tags-optimizer",
    name: "AI Tags Optimizer",
    tagline: {
      en: "Uses the Claude API to suggest tag merges and flag unused tags — always with manual approval.",
      it: "Usa le API di Claude per suggerire l'unione dei tag e segnalare quelli inutilizzati — sempre con approvazione manuale.",
    },
    description: {
      en: "AI Tags Optimizer analyzes your WordPress tags with the Claude API (Anthropic) to suggest merges for duplicates and synonyms and flag tags that are no longer used. Every suggestion requires manual approval before anything changes — nothing is merged or deleted automatically. Currently in private development.",
      it: "AI Tags Optimizer analizza i tag di WordPress con le API di Claude (Anthropic) per suggerire l'unione di duplicati e sinonimi e segnalare i tag non più utilizzati. Ogni suggerimento richiede approvazione manuale prima di qualsiasi modifica — nulla viene unito o eliminato automaticamente. Attualmente in sviluppo privato.",
    },
    icon: Tags,
    tags: ["AI", "Tags", "Claude"],
    stars: "—",
    version: "0.13.0",
    status: "coming-soon",
    wpMin: "6.0+",
    phpCompat: "7.4+",
    github: repo("wp-ai-tags-optimizer"),
    download: "",
    features: {
      en: [
        "Detects duplicate and synonymous tags via the Claude API.",
        "Flags tags that are no longer used on any post.",
        "Every merge or cleanup suggestion requires manual approval.",
        "No automatic changes to your taxonomy.",
      ],
      it: [
        "Rileva tag duplicati e sinonimi tramite le API di Claude.",
        "Segnala i tag non più utilizzati in nessun articolo.",
        "Ogni suggerimento di unione o pulizia richiede approvazione manuale.",
        "Nessuna modifica automatica alla tassonomia.",
      ],
    },
    install: ["# Coming soon — not yet publicly available"],
  },
  {
    slug: "wp-posts-to-github",
    name: "WordPress Posts to GitHub",
    tagline: {
      en: "Exports published posts as Markdown files, with YAML front matter, to a GitHub repository.",
      it: "Esporta gli articoli pubblicati come file Markdown, con front matter YAML, verso un repository GitHub.",
    },
    description: {
      en: "WordPress Posts to GitHub exports published posts as Markdown files complete with YAML front matter and pushes them to a GitHub repository, keeping a version-controlled mirror of your content outside WordPress. Currently in private development.",
      it: "WordPress Posts to GitHub esporta gli articoli pubblicati come file Markdown completi di front matter YAML e li invia a un repository GitHub, mantenendo una copia versionata dei tuoi contenuti al di fuori di WordPress. Attualmente in sviluppo privato.",
    },
    icon: FileCode2,
    tags: ["GitHub", "Markdown", "Export"],
    stars: "—",
    version: "1.5.4",
    status: "coming-soon",
    wpMin: "6.0+",
    phpCompat: "7.4+",
    github: repo("wp-posts-to-github"),
    download: "",
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
    install: ["# Coming soon — not yet publicly available"],
  },
];

export const getPlugin = (slug: string) => plugins.find((p) => p.slug === slug);
