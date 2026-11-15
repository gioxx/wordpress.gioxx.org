import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import { PluginCard } from "@/components/plugin-card";
import { distributionOf, type Distribution } from "@/components/distribution-badge";
import { plugins } from "@/data/plugins";
import { getAllRepoStats } from "@/lib/github.functions";
import { useI18n } from "@/lib/i18n";
import { siteConfig } from "@/config/site";
import { BRAND_MARK_OUTLINE_VIEWBOX, BRAND_MARK_PATH } from "@/components/brand-mark";

/** Lengths (out of 100) of the stacked strokes that draw the hero snake. */
const HERO_SNAKE_LENGTH = 30;
const HERO_SNAKE_LAYERS = Array.from({ length: 20 }, (_, i) => ((i + 1) * HERO_SNAKE_LENGTH) / 20);

export const Route = createFileRoute("/")({
  // ?source=wporg|github filters the grid, so a filtered view can be linked.
  validateSearch: (search: Record<string, unknown>): { source?: Distribution } => ({
    source: search.source === "wporg" || search.source === "github" ? search.source : undefined,
  }),
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
      <p className="text-sm text-muted-foreground">
        {error instanceof Error ? error.message : String(error)}
      </p>
    </div>
  ),
  component: Index,
});

function Index() {
  const statsMap = Route.useLoaderData();
  const { source } = Route.useSearch();
  const navigate = Route.useNavigate();
  const { t } = useI18n();

  const categoryCount = useMemo(() => new Set(plugins.flatMap((p) => p.tags)).size, []);

  const counts = useMemo(
    () => ({
      wporg: plugins.filter((p) => distributionOf(p) === "wporg").length,
      github: plugins.filter((p) => distributionOf(p) === "github").length,
    }),
    [],
  );
  const visiblePlugins = source ? plugins.filter((p) => distributionOf(p) === source) : plugins;
  const filters: { value: Distribution | undefined; label: string; count: number }[] = [
    { value: undefined, label: t.distribution.filterAll, count: plugins.length },
    { value: "wporg", label: t.distribution.filterWporg, count: counts.wporg },
    { value: "github", label: t.distribution.filterGithub, count: counts.github },
  ];

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
            viewBox={BRAND_MARK_OUTLINE_VIEWBOX}
            fill="none"
            className="hidden md:block absolute right-12 lg:right-20 top-1/2 -translate-y-1/2 w-48 lg:w-60 h-auto text-accent pointer-events-none z-0"
            aria-hidden="true"
          >
            <path
              className="opacity-40 dark:opacity-25"
              fill="none"
              stroke="currentColor"
              strokeWidth={5}
              strokeLinejoin="round"
              d={BRAND_MARK_PATH}
            />
            {/* A snake of light runs along the outline: stacked strokes of growing
                length (each led by a gap, so all end at the same head) make it
                brightest in front and fade towards the tail. Hidden when motion
                is reduced. */}
            {HERO_SNAKE_LAYERS.map((length) => (
              <path
                key={length}
                className="hero-snake"
                pathLength={100}
                fill="none"
                stroke="currentColor"
                strokeWidth={5}
                strokeLinejoin="round"
                strokeDasharray={`0 ${HERO_SNAKE_LENGTH - length} ${length} ${100 - HERO_SNAKE_LENGTH}`}
                d={BRAND_MARK_PATH}
              />
            ))}
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
          <div
            role="group"
            aria-label={t.distribution.filterLabel}
            className="flex flex-wrap gap-2 mb-6"
          >
            {filters.map((f) => {
              const active = source === f.value;
              return (
                <button
                  key={f.value ?? "all"}
                  type="button"
                  aria-pressed={active}
                  onClick={() =>
                    navigate({ search: { source: f.value }, replace: true, resetScroll: false })
                  }
                  className={`font-mono text-[11px] uppercase tracking-widest px-3 py-1.5 rounded-[var(--radius)] ring-1 transition-colors ${
                    active
                      ? f.value === "wporg"
                        ? "ring-[#3858e9]/50 bg-[#3858e9]/10 text-[#3858e9] dark:text-[#8fa3ff]"
                        : "ring-accent/50 bg-accent/10 text-accent"
                      : "ring-border text-muted-foreground hover:ring-accent/40 hover:text-accent"
                  }`}
                >
                  {f.label} <span className="opacity-60">· {f.count}</span>
                </button>
              );
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visiblePlugins.map((p, i) => (
              <PluginCard key={p.slug} plugin={p} index={i} stats={statsMap[p.slug]} />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
