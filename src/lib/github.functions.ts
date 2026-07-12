import { createServerFn } from "@tanstack/react-start";
import { plugins } from "@/data/plugins";

export type RepoStats = {
  slug: string;
  stars: string | null;
  version: string | null;
  releaseUrl: string | null;
  releaseBody: string | null;
  downloadUrl: string | null;
  publishedAt: string | null;
  error?: string;
};

function parseRepo(url: string): { owner: string; repo: string } | null {
  const m = url.match(/github\.com\/([^/]+)\/([^/#?]+)/i);
  if (!m) return null;
  return { owner: m[1], repo: m[2].replace(/\.git$/, "") };
}

function formatStars(n: number): string {
  if (n >= 1000) return (n / 1000).toFixed(n >= 10000 ? 0 : 1).replace(/\.0$/, "") + "k";
  return String(n);
}

type ZipAsset = {
  browser_download_url: string;
  name: string;
  size?: number;
  content_type?: string;
};

function normalize(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

/**
 * Sceglie l'asset .zip più adatto per il download di una release.
 * Strategia:
 *  1. Solo asset .zip (esclude .sig/.asc/.sha256/.md5 e archivi sorgente generici)
 *  2. Punteggio per: match con nome repo/slug, presenza versione/tag, non "source"
 *  3. A parità di punteggio, preferisci il file più grande (di solito il bundle completo)
 */
function pickBestZipAsset(
  assets: ZipAsset[],
  repo: string,
  slug: string,
  tag?: string,
): string | null {
  if (!assets.length) return null;
  const repoN = normalize(repo);
  const slugN = normalize(slug);
  const tagN = tag ? normalize(tag) : "";

  const candidates = assets
    .filter((a) => {
      const n = a.name.toLowerCase();
      if (!n.endsWith(".zip")) return false;
      // Escludi firme/checksum che potrebbero finire in .zip.* (per sicurezza)
      if (/\.(sig|asc|sha\d+|md5|txt)$/i.test(a.name)) return false;
      return true;
    })
    .map((a) => {
      const n = normalize(a.name.replace(/\.zip$/i, ""));
      let score = 0;
      if (n.includes(repoN)) score += 5;
      if (slugN && n.includes(slugN)) score += 3;
      if (tagN && n.includes(tagN)) score += 2;
      if (/^source/i.test(a.name) || n === "sourcecode") score -= 4;
      if (a.content_type === "application/zip") score += 1;
      return { asset: a, score, size: a.size ?? 0 };
    })
    .sort((x, y) => y.score - x.score || y.size - x.size);

  return candidates[0]?.asset.browser_download_url ?? null;
}

async function ghFetch(path: string, token?: string) {
  return fetch(`https://api.github.com${path}`, {
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "archivio-ext",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
}

async function fetchOne(slug: string, github: string, token?: string): Promise<RepoStats> {
  const base: RepoStats = {
    slug,
    stars: null,
    version: null,
    releaseUrl: null,
    releaseBody: null,
    downloadUrl: null,
    publishedAt: null,
  };
  const parsed = parseRepo(github);
  if (!parsed) return { ...base, error: "invalid github url" };

  try {
    const [repoRes, relRes] = await Promise.all([
      ghFetch(`/repos/${parsed.owner}/${parsed.repo}`, token),
      ghFetch(`/repos/${parsed.owner}/${parsed.repo}/releases/latest`, token),
    ]);

    if (repoRes.ok) {
      const data = (await repoRes.json()) as { stargazers_count?: number; default_branch?: string };
      base.stars =
        typeof data.stargazers_count === "number" ? formatStars(data.stargazers_count) : null;
      base.downloadUrl = `https://github.com/${parsed.owner}/${parsed.repo}/archive/refs/heads/${data.default_branch ?? "main"}.zip`;
    }

    if (relRes.ok) {
      const data = (await relRes.json()) as {
        tag_name?: string;
        name?: string;
        html_url?: string;
        published_at?: string;
        zipball_url?: string;
        body?: string | null;
        assets?: Array<{
          browser_download_url: string;
          name: string;
          size?: number;
          content_type?: string;
        }>;
      };
      base.version = (data.tag_name ?? data.name ?? "").replace(/^v/, "") || null;
      base.releaseUrl = data.html_url ?? null;
      base.releaseBody = data.body ?? null;
      base.publishedAt = data.published_at ?? null;
      const bestZip = pickBestZipAsset(data.assets ?? [], parsed.repo, slug, data.tag_name);
      base.downloadUrl = bestZip ?? data.zipball_url ?? base.downloadUrl;
    }

    return base;
  } catch (err) {
    return { ...base, error: err instanceof Error ? err.message : "fetch failed" };
  }
}

const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minuti
type CacheEntry = { value: RepoStats; expiresAt: number };
const statsCache = new Map<string, CacheEntry>();

async function getCachedStats(slug: string, github: string, token?: string): Promise<RepoStats> {
  const key = `${slug}:${github}`;
  const now = Date.now();
  const cached = statsCache.get(key);
  if (cached && cached.expiresAt > now && !cached.value.error) {
    return cached.value;
  }
  const fresh = await fetchOne(slug, github, token);
  if (!fresh.error) {
    statsCache.set(key, { value: fresh, expiresAt: now + CACHE_TTL_MS });
    return fresh;
  }
  // In caso di errore, restituisci stale se disponibile
  if (cached) return cached.value;
  return fresh;
}

export const getRepoStats = createServerFn({ method: "GET" })
  .inputValidator((data: { slug: string }) => data)
  .handler(async ({ data }): Promise<RepoStats | null> => {
    const plugin = plugins.find((p) => p.slug === data.slug);
    if (!plugin) return null;
    return getCachedStats(plugin.slug, plugin.github, process.env.GITHUB_TOKEN);
  });

export const getAllRepoStats = createServerFn({ method: "GET" }).handler(
  async (): Promise<Record<string, RepoStats>> => {
    const token = process.env.GITHUB_TOKEN;
    const results = await Promise.all(plugins.map((p) => getCachedStats(p.slug, p.github, token)));
    return Object.fromEntries(results.map((r) => [r.slug, r]));
  },
);
