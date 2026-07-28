import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import { PluginCard } from "@/components/plugin-card";
import { plugins } from "@/data/plugins";
import { getAllRepoStats } from "@/lib/github.functions";
import { useI18n } from "@/lib/i18n";
import { siteConfig } from "@/config/site";
import { WORDPRESS_MARK_PATH } from "@/components/wordpress-mark";

export const Route = createFileRoute("/")({
  loader: () => getAllRepoStats(),
  head: () => ({
    meta: [
      { title: `${siteConfig.name} — My personal ${siteConfig.product.name} Plugin Gallery` },
      {
        name: "description",
        content: `A curated collection of open-source ${siteConfig.product.name} plugins: security, advanced analytics, performance and integrations.`,
      },
      {
        property: "og:title",
        content: `${siteConfig.name} — My personal ${siteConfig.product.name} Plugin Gallery`,
      },
      {
        property: "og:description",
        content: `Handcrafted extensions for your ${siteConfig.product.name} ecosystem. Open-source plugins focused on performance, security and analytics.`,
      },
    ],
  }),
  errorComponent: ({ error }) => (
    <div className="min-h-screen grid place-items-center p-6 text-center">
      <p className="text-sm text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: Index,
});

function Index() {
  const statsMap = Route.useLoaderData();
  const { t } = useI18n();

  const categoryCount = useMemo(() => new Set(plugins.flatMap((p) => p.tags)).size, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/10 selection:text-accent">
      <SiteNav />

      <main className="max-w-6xl mx-auto px-6 py-16">
        <section className="relative overflow-hidden mb-16 animate-fade-in">
          <div className="max-w-2xl relative z-10">
            <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
              {t.home.eyebrow}
            </span>
            <h1 className="font-display font-semibold tracking-tight text-3xl md:text-4xl text-balance mt-3 mb-4 leading-[1.15]">
              {t.home.title}
            </h1>
            <p className="text-muted-foreground text-pretty leading-relaxed mb-4">
              {t.home.subtitle}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              {plugins.length} {t.home.statPlugins} · {categoryCount} {t.home.statCategories} · EN /
              IT
            </p>
          </div>
          <svg
            viewBox="0 0 1920 1920"
            fill="none"
            className="hidden md:block absolute right-12 lg:right-20 top-1/2 -translate-y-1/2 w-48 lg:w-60 h-auto text-accent opacity-40 dark:opacity-25 pointer-events-none z-0"
            aria-hidden="true"
          >
            <path fillRule="evenodd" fill="currentColor" d={WORDPRESS_MARK_PATH} />
          </svg>
        </section>

        <section id="plugins" className="scroll-mt-24">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              {t.home.availableCount(plugins.length)}
            </h2>
            <a
              href={siteConfig.reposSearchUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
            >
              {t.home.allRepos}
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {plugins.map((p, i) => (
              <PluginCard key={p.slug} plugin={p} index={i} stats={statsMap[p.slug]} />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
