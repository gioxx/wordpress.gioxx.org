# WordPress: my plugins and side projects

Source code of [wordpress.gioxx.org](https://wordpress.gioxx.org) — a personal gallery of open-source plugins built for [WordPress](https://wordpress.org).

## What this is

A bilingual (EN/IT) web app that lists, describes and links all the WordPress plugins I maintain. Each plugin page includes an overview, key features, installation instructions and a changelog link.

## Plugins featured

_None yet — this is a fresh scaffold, plugins will be added to `src/data/plugins.ts` as they're published._

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
