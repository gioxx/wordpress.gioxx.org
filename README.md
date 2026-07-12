# YOURLS: my plugins and side projects

Source code of [yourls.gioxx.org](https://yourls.gioxx.org) — a personal gallery of open-source plugins and side projects built for [YOURLS](https://yourls.org), the self-hosted PHP URL shortener.

## What this is

A bilingual (EN/IT) web app that lists, describes and links all the YOURLS plugins I maintain, plus a few collateral tools. Each plugin page includes an overview, key features, installation instructions and a changelog link.

## Plugins featured

| Plugin | Description |
|---|---|
| **Plugin Manager** | Install, update and remove YOURLS plugins directly from the admin panel |
| **Alternative Index** | Replace the default YOURLS public index with a custom landing page |
| **Change Notifier** | Email notifications when a short URL is created, edited or deleted |
| **Language Switcher** | Switch the YOURLS admin interface language from the dashboard |
| **Logo Suite** | Replace the YOURLS logo with your own brand image |
| **URL Fallback** | Redirect unknown short URLs to a configurable fallback destination |

## Collateral projects

- **[YOURLS-diff](https://github.com/gioxx/YOURLS-diff)** — Python CLI that generates a minimal ZIP with only the files changed between two YOURLS releases
- **[YOURLS-DockerCustom](https://github.com/gioxx/YOURLS-DockerCustom)** — Custom Docker image extending `yourls:latest` with php-zip, 4 language packs, Plugin Manager and Language Switcher preloaded

## Stack

- [TanStack Start](https://tanstack.com/start) — SSR framework (React + file-based routing)
- [Vite](https://vitejs.dev) + [`@lovable.dev/vite-tanstack-config`](https://lovable.dev) — build toolchain
- [Tailwind CSS v4](https://tailwindcss.com) — styling
- [shadcn/ui](https://ui.shadcn.com) + [Radix UI](https://www.radix-ui.com) — component primitives
- [Cloudflare Workers](https://workers.cloudflare.com) — deployment target (via `@cloudflare/vite-plugin`)
- [Bun](https://bun.sh) — package manager and runtime

## Local development

```bash
bun install
bun run dev
```

## Build & deploy

```bash
bun run build          # outputs to dist/
bunx wrangler deploy --config dist/server/wrangler.json
```

CI/CD is handled automatically via GitHub Actions on every push to `main`.

## License

MIT - [Gioxx](https://github.com/gioxx)
