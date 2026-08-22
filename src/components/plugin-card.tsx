import { Link } from "@tanstack/react-router";
import type { Plugin } from "@/data/plugins";
import type { RepoStats } from "@/lib/github.functions";
import { useI18n } from "@/lib/i18n";

export function PluginCard({
  plugin,
  index = 0,
  stats,
}: {
  plugin: Plugin;
  index?: number;
  stats?: RepoStats | null;
}) {
  const { lang, t } = useI18n();
  const Icon = plugin.icon;
  const comingSoon = plugin.status === "coming-soon";
  const stars = stats?.stars ?? plugin.stars;
  const version = stats?.version ?? plugin.version;
  return (
    <Link
      to="/plugins/$slug"
      params={{ slug: plugin.slug }}
      className={`card-lift group relative bg-card ring-1 rounded-[var(--radius)] p-6 animate-fade-in flex flex-col ${plugin.featured ? "ring-accent/30 hover:ring-accent/60" : "ring-border hover:ring-accent/40"}`}
      style={{ animationDelay: `${100 + index * 50}ms` }}
    >
      <div className="flex items-start justify-between mb-6 gap-3">
        <div className="icon-badge size-10 rounded-full flex items-center justify-center shrink-0 bg-accent/10 text-accent">
          <Icon className="size-5" />
        </div>
        <div className="flex flex-wrap justify-end gap-1.5">
          {comingSoon ? (
            <span className="font-mono text-[9px] uppercase tracking-widest text-amber-600 dark:text-amber-400 border border-amber-500/30 bg-amber-500/5 px-2 py-0.5 rounded shrink-0">
              {t.card.comingSoon}
            </span>
          ) : (
            plugin.featured && (
              <span className="font-mono text-[9px] uppercase tracking-widest text-accent border border-accent/30 bg-accent/5 px-2 py-0.5 rounded shrink-0">
                {lang === "it" ? "In evidenza" : "Featured"}
              </span>
            )
          )}
          {plugin.wporg && (
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#3858e9] dark:text-[#8fa3ff] border border-[#3858e9]/30 bg-[#3858e9]/5 px-2 py-0.5 rounded shrink-0">
              WordPress.org
            </span>
          )}
        </div>
      </div>
      <div className="flex justify-between items-start mb-2 gap-3">
        <h3 className="font-display font-semibold text-lg leading-tight">{plugin.name}</h3>
        {!comingSoon && (
          <span className="font-mono text-[11px] text-muted-foreground shrink-0 mt-1">
            ★ {stars}
          </span>
        )}
      </div>
      <p className="text-sm text-muted-foreground mb-3 leading-relaxed flex-1">
        {plugin.tagline[lang]}
      </p>
      {!comingSoon && version && (
        <div className="font-mono text-[10px] text-muted-foreground mb-4">v{version}</div>
      )}
      <div className="flex flex-wrap gap-2 mb-6">
        {plugin.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-mono border border-border px-2 py-0.5 rounded uppercase text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="w-full py-2.5 rounded-[var(--radius)] border border-border text-sm font-medium text-center group-hover:border-accent group-hover:text-accent transition-colors">
        {t.card.explore}
      </div>
    </Link>
  );
}
