import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Heart, Coffee } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import { useI18n } from "@/lib/i18n";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: `Donate — ${siteConfig.name}` },
      {
        name: "description",
        content: `Support the development of ${siteConfig.name} plugins.`,
      },
      { property: "og:title", content: `Donate — ${siteConfig.name}` },
    ],
  }),
  component: Donate,
});

const methods = [
  {
    id: "github",
    icon: Heart,
    name: "GitHub Sponsors",
    url: siteConfig.donate.githubSponsors,
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
    url: siteConfig.donate.kofi,
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
    url: siteConfig.donate.buyMeACoffee,
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
      <main className="max-w-2xl mx-auto px-6 py-16">
        <div className="animate-fade-in">
          <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
            {lang === "it" ? "Sostieni" : "Donate"}
          </span>
          <h1 className="font-display font-semibold tracking-tight text-2xl md:text-3xl mt-3 mb-4 text-balance leading-[1.2]">
            {lang === "it" ? "Ogni caffè conta." : "Every coffee counts."}
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-xl">
            {lang === "it"
              ? "Tutti i plugin sono gratuiti e open-source. Se uno di essi ti è stato utile e vuoi supportare il lavoro che c'è dietro, ecco i modi per farlo."
              : "All plugins are free and open-source. If any of them saved you time or solved a real problem, here are the ways to show your appreciation."}
          </p>

          <div className="border-t border-border">
            {methods.map((m) => {
              const Icon = m.icon;
              return (
                <a
                  key={m.id}
                  href={m.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 py-5 border-b border-border transition-colors"
                >
                  <div className="size-10 rounded-full flex items-center justify-center shrink-0 bg-accent/10 text-accent transition-transform duration-200 group-hover:scale-110">
                    <Icon className="size-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm mb-0.5 group-hover:text-accent transition-colors">
                      {m.name}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {lang === "it" ? m.descIt : m.descEn}
                    </p>
                  </div>
                  <ExternalLink className="size-3.5 text-muted-foreground/60 shrink-0 group-hover:text-accent transition-colors" />
                </a>
              );
            })}
          </div>

          <p className="mt-8 text-sm text-muted-foreground/60 leading-relaxed">
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
