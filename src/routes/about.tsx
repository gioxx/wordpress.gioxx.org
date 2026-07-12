import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/github-icon";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — gioxx/WordPress" },
      {
        name: "description",
        content:
          "The developer behind the WordPress plugin collection: philosophy, contributions and contact.",
      },
      { property: "og:title", content: "About — gioxx/WordPress" },
      {
        property: "og:description",
        content: "The developer behind the WordPress plugin collection.",
      },
    ],
  }),
  component: About,
});

function About() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <div className="animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              {t.about.eyebrow}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-balance leading-[1.05]">
            {t.about.title}
          </h1>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              {t.about.p1Pre}
              <a
                href="https://wordpress.org"
                target="_blank"
                rel="noreferrer"
                className="text-foreground underline decoration-accent/40 hover:decoration-accent"
              >
                {t.about.p1Mid}
              </a>
              {t.about.p1Post}
            </p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>
          <div className="mt-12 space-y-6">
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/gioxx"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <GithubIcon className="size-4" />
                {t.about.github}
              </a>
              <a
                href="https://gioxx.org/about/#giovanni_contattami"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 ring-1 ring-border rounded-lg text-sm font-medium hover:bg-card transition-all"
              >
                <ExternalLink className="size-4" />
                {t.about.contact}
              </a>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
              {t.about.contactNote}
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
