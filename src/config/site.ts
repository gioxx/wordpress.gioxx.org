// Central place to swap identity/branding when reusing this site as a template
// for a different plugin/product gallery. Prose copy lives in src/lib/i18n.tsx
// and per-item content lives in src/data/*.ts — this file only holds the
// identifiers and URLs that repeat verbatim across components and routes.

export const siteConfig = {
  name: "gioxx/WordPress",
  author: "Gioxx",
  githubUser: "gioxx",
  githubUserUrl: "https://github.com/gioxx",
  blogUrl: "https://gioxx.org/tag/wordpress/",
  contactUrl: "https://gioxx.org/about/#giovanni_contattami",
  reposSearchUrl: "https://github.com/gioxx?tab=repositories&q=WordPress-&type=&language=&sort=",
  product: {
    name: "WordPress",
    homeUrl: "https://wordpress.org",
  },
  pluginDirectoryUrl: "https://wordpress.org/plugins/",
  donate: {
    githubSponsors: "https://github.com/sponsors/gioxx",
    kofi: "https://ko-fi.com/gioxx",
    buyMeACoffee: "https://www.buymeacoffee.com/gioxx",
  },
} as const;
