import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import { PluginCard } from "@/components/plugin-card";
import { plugins } from "@/data/plugins";
import { getAllRepoStats } from "@/lib/github.functions";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  loader: () => getAllRepoStats(),
  head: () => ({
    meta: [
      { title: "gioxx/WordPress — My personal WordPress Plugin Gallery" },
      {
        name: "description",
        content:
          "A curated collection of open-source WordPress plugins: security, advanced analytics, performance and integrations.",
      },
      { property: "og:title", content: "gioxx/WordPress — My personal WordPress Plugin Gallery" },
      {
        property: "og:description",
        content:
          "Handcrafted extensions for your WordPress ecosystem. Open-source plugins focused on performance, security and analytics.",
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

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/10 selection:text-accent">
      <SiteNav />

      <main className="max-w-6xl mx-auto px-6 py-20">
        <section className="mb-24 animate-fade-in">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
            <div className="flex-1 max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-accent" />
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                  {t.home.eyebrow}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance mb-6 leading-[1.05]">
                {t.home.title}
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                {t.home.subtitle}
              </p>
            </div>
            <div className="hidden lg:block lg:flex-1 max-w-md">
              <div className="relative">
                <div className="bg-[var(--code-bg)] rounded-xl overflow-hidden ring-1 ring-foreground/10 shadow-2xl opacity-75">
                  <div className="flex items-center gap-1.5 px-4 py-3 bg-white/5 border-b border-white/5">
                    <div className="size-2.5 rounded-full bg-red-500/40" />
                    <div className="size-2.5 rounded-full bg-amber-500/40" />
                    <div className="size-2.5 rounded-full bg-emerald-500/40" />
                    <span className="ml-4 font-mono text-[10px] text-white/40 uppercase tracking-widest">
                      my-plugin.php
                    </span>
                  </div>
                  <div className="p-6 font-mono text-xs leading-loose select-none">
                    <div className="text-white/30 mb-2">{"<?php"}</div>
                    <div className="text-white/30 mb-4">{"/*"}</div>
                    <div className="flex gap-3 mb-1">
                      <span className="text-white/30 w-4 shrink-0">·</span>
                      <span className="text-white/40">
                        Plugin Name: <span className="text-accent/80">My WordPress Plugin</span>
                      </span>
                    </div>
                    <div className="flex gap-3 mb-4">
                      <span className="text-white/30 w-4 shrink-0">·</span>
                      <span className="text-white/40">
                        Author: <span className="text-white/60">gioxx</span>
                      </span>
                    </div>
                    <div className="text-white/30 mb-6">{"*/"}</div>
                    <div className="mb-4">
                      <span className="text-accent/70">add_action</span>
                      <span className="text-white/50">{"("}</span>
                    </div>
                    <div className="flex gap-3 mb-1">
                      <span className="text-white/20 w-4 shrink-0">·</span>
                      <span className="text-emerald-400/60">'admin_init'</span>
                      <span className="text-white/30">,</span>
                    </div>
                    <div className="flex gap-3 mb-4">
                      <span className="text-white/20 w-4 shrink-0">·</span>
                      <span className="text-emerald-400/60">'my_plugin_init'</span>
                    </div>
                    <div className="text-white/50 mb-6">{")"}</div>
                    <div className="mb-2">
                      <span className="text-accent/50">function </span>
                      <span className="text-white/50">my_plugin_init</span>
                      <span className="text-white/30">{"() {"}</span>
                    </div>
                    <div className="flex gap-3 mb-1">
                      <span className="text-white/20 w-4 shrink-0">·</span>
                      <span className="text-accent/50">add_option</span>
                      <span className="text-white/30">{"("}</span>
                    </div>
                    <div className="flex gap-3 mb-1">
                      <span className="text-white/20 w-4 shrink-0" />
                      <span className="text-white/20 w-4 shrink-0">·</span>
                      <span className="text-emerald-400/40">'enabled'</span>
                      <span className="text-white/20">, true</span>
                    </div>
                    <div className="flex gap-3 mb-2">
                      <span className="text-white/20 w-4 shrink-0">·</span>
                      <span className="text-white/30">{")"}</span>
                    </div>
                    <div className="text-white/30">{"}"}</div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent rounded-b-xl pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        <section id="plugins" className="scroll-mt-24">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {t.home.availableCount(plugins.length)}
            </h2>
            <a
              href="https://github.com/gioxx?tab=repositories&q=WordPress-&type=&language=&sort="
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.home.allRepos}
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
