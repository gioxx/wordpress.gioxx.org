import { BadgeCheck } from "lucide-react";
import type { Plugin } from "@/data/plugins";
import { GithubIcon } from "@/components/github-icon";
import { useI18n } from "@/lib/i18n";

/** Where a plugin can be installed from: the official WordPress.org directory or GitHub only. */
export type Distribution = "wporg" | "github";

export const distributionOf = (plugin: Plugin): Distribution => (plugin.wporg ? "wporg" : "github");

// The icon and the dashed border keep these labels from reading as one more topic tag
// (several plugins also carry a "GitHub" tag).
const styles: Record<Distribution, string> = {
  wporg: "text-[#3858e9] dark:text-[#8fa3ff] border-[#3858e9]/30 bg-[#3858e9]/5",
  github: "text-foreground/70 border-dashed border-foreground/25",
};

/**
 * Small label telling whether the plugin is also listed on WordPress.org.
 * Coming-soon plugins aren't distributed anywhere yet, so they get no label.
 */
export function DistributionBadge({
  plugin,
  className = "",
}: {
  plugin: Plugin;
  className?: string;
}) {
  const { t } = useI18n();
  if (plugin.status === "coming-soon") return null;
  const kind = distributionOf(plugin);
  const Icon = kind === "wporg" ? BadgeCheck : GithubIcon;
  return (
    <span
      title={kind === "wporg" ? t.distribution.wporgTitle : t.distribution.githubTitle}
      className={`inline-flex items-center gap-1 font-mono uppercase border px-2 py-0.5 rounded shrink-0 ${styles[kind]} ${className}`}
    >
      <Icon className="size-[1.1em] shrink-0" />
      {kind === "wporg" ? t.distribution.wporg : t.distribution.github}
    </span>
  );
}
