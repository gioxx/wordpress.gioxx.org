import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/github-icon";
import { useI18n } from "@/lib/i18n";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${siteConfig.name}` },
      {
        name: "description",
        content: `The developer behind the ${siteConfig.product.name} plugin collection: philosophy, contributions and contact.`,
      },
      { property: "og:title", content: `About — ${siteConfig.name}` },
      {
        property: "og:description",
        content: `The developer behind the ${siteConfig.product.name} plugin collection.`,
      },
    ],
  }),
  component: About,
});

function About() {
  const { t } = useI18n();
  const links = [
    { href: siteConfig.githubUserUrl, label: t.about.github, icon: GithubIcon },
    {
      href: siteConfig.contactUrl,
      label: t.about.contact,
      icon: ExternalLink,
    },
  ];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="max-w-2xl mx-auto px-6 py-16">
        <div className="animate-fade-in">
          <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
            {t.about.eyebrow}
          </span>
          <h1 className="font-display font-semibold tracking-tight text-2xl md:text-3xl mt-3 mb-6 text-balance leading-[1.2]">
            {t.about.title}
          </h1>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              {t.about.p1Pre}
              <a
                href={siteConfig.product.homeUrl}
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

          <div className="mt-12 border-t border-border">
            {links.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 py-4 border-b border-border hover:text-accent transition-colors"
              >
                <span className="flex items-center gap-3 font-medium text-sm">
                  <span className="icon-badge size-8 rounded-full flex items-center justify-center shrink-0 bg-accent/10 text-accent transition-transform duration-200 group-hover:scale-110">
                    <Icon className="size-4" />
                  </span>
                  {label}
                </span>
                <ExternalLink className="size-3.5 text-muted-foreground/60 group-hover:text-accent transition-colors" />
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-xl">
            {t.about.contactNote}
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
