import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Heart, Coffee } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — gioxx/WordPress" },
      {
        name: "description",
        content: "Support the development of gioxx/WordPress plugins.",
      },
      { property: "og:title", content: "Donate — gioxx/WordPress" },
    ],
  }),
  component: Donate,
});

const methods = [
  {
    id: "github",
    icon: Heart,
    name: "GitHub Sponsors",
    url: "https://github.com/sponsors/gioxx",
    descEn:
      "The most direct way to support via GitHub. Recurring or one-time sponsorship, with full visibility on the platform where all the code lives.",
    descIt:
      "Il modo più diretto per supportare tramite GitHub. Sponsorizzazione ricorrente o una-tantum, con piena visibilità sulla piattaforma dove vive tutto il codice.",
    cta: "Sponsor on GitHub",
    ctaIt: "Sponsorizza su GitHub",
    accent: true,
  },
  {
    id: "kofi",
    icon: Coffee,
    name: "Ko-fi",
    url: "https://ko-fi.com/gioxx",
    descEn:
      "Buy me a coffee (literally). Ko-fi is simple, no subscriptions required, just a one-time contribution if something I built saved you time.",
    descIt:
      "Offrimi un caffè (letteralmente). Ko-fi è semplice, nessun abbonamento, solo un contributo una-tantum se qualcosa che ho fatto ti ha fatto risparmiare tempo.",
    cta: "Support on Ko-fi",
    ctaIt: "Supporta su Ko-fi",
    accent: false,
  },
  {
    id: "bmc",
    icon: Coffee,
    name: "Buy Me a Coffee",
    url: "https://www.buymeacoffee.com/gioxx",
    descEn:
      "Another simple way to say thanks. Same idea as Ko-fi — if a plugin solved a real problem for you, a coffee is always appreciated.",
    descIt:
      "Un altro modo semplice per dire grazie. Stessa idea di Ko-fi — se un plugin ti ha risolto un problema reale, un caffè è sempre apprezzato.",
    cta: "Buy me a coffee",
    ctaIt: "Offrimi un caffè",
    accent: false,
  },
];

function Donate() {
  const { lang } = useI18n();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <div className="animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              {lang === "it" ? "Sostieni" : "Donate"}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance leading-[1.05]">
            {lang === "it"
              ? "Ogni caffè conta."
              : "Every coffee counts."}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-16 max-w-xl">
            {lang === "it"
              ? "Tutti i plugin sono gratuiti e open-source. Se uno di essi ti è stato utile e vuoi supportare il lavoro che c'è dietro, ecco i modi per farlo."
              : "All plugins are free and open-source. If any of them saved you time or solved a real problem, here are the ways to show your appreciation."}
          </p>

          <div className="space-y-4">
            {methods.map((m) => {
              const Icon = m.icon;
              return (
                <a
                  key={m.id}
                  href={m.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`group flex flex-col sm:flex-row sm:items-center gap-6 p-6 rounded-xl ring-1 transition-all duration-200 hover:-translate-y-0.5 ${
                    m.accent
                      ? "bg-accent/5 ring-accent/20 hover:ring-accent/40"
                      : "bg-card ring-border hover:ring-accent/30"
                  }`}
                >
                  <div
                    className={`size-12 rounded-xl flex items-center justify-center shrink-0 ring-1 ${
                      m.accent
                        ? "bg-accent/10 ring-accent/20 text-accent"
                        : "bg-muted ring-border text-muted-foreground group-hover:text-accent group-hover:bg-accent/10 group-hover:ring-accent/20 transition-colors"
                    }`}
                  >
                    <Icon className="size-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-base mb-1">{m.name}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {lang === "it" ? m.descIt : m.descEn}
                    </p>
                  </div>
                  <div
                    className={`inline-flex items-center gap-2 text-sm font-medium shrink-0 ${
                      m.accent ? "text-accent" : "text-muted-foreground group-hover:text-accent transition-colors"
                    }`}
                  >
                    {lang === "it" ? m.ctaIt : m.cta}
                    <ExternalLink className="size-3.5" />
                  </div>
                </a>
              );
            })}
          </div>

          <p className="mt-12 text-sm text-muted-foreground/60 leading-relaxed">
            {lang === "it"
              ? "Non hai budget? Nessun problema. Una stella su GitHub o un feedback costruttivo vale quanto un caffè."
              : "No budget? No problem. A GitHub star or a constructive issue is worth just as much as a coffee."}
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
