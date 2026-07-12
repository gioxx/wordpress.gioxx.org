import type { LucideIcon } from "lucide-react";
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
  status: "stable" | "beta";
  wpMin: string;
  phpCompat: string;
  github: string;
  download: string;
  features: Localized<string[]>;
  install: string[];
  featured?: boolean;
};

const GH_USER = "gioxx";
const repo = (name: string) => `https://github.com/${GH_USER}/${name}`;
const dl = (name: string) => `https://github.com/${GH_USER}/${name}/archive/refs/heads/main.zip`;

export const plugins: Plugin[] = [
  // Ordine alfabetico — un plugin per volta man mano che vengono aggiunti
];

export const getPlugin = (slug: string) => plugins.find((p) => p.slug === slug);
