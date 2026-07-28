import { Link } from "@tanstack/react-router";
import { GithubIcon } from "@/components/github-icon";
import { ThemeToggle } from "@/lib/theme";
import { LanguageToggle, useI18n } from "@/lib/i18n";
import { plugins } from "@/data/plugins";
import { siteConfig } from "@/config/site";
import { WordPressMark } from "@/components/wordpress-mark";

export function SiteNav() {
  const { t } = useI18n();
  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6 min-w-0">
          <Link
            to="/"
            className="flex items-center gap-2 font-display font-semibold tracking-tight text-[15px] shrink-0"
          >
            <WordPressMark className="size-5 text-accent shrink-0" />
            {siteConfig.name}
          </Link>
          <div className="hidden md:block w-px h-5 bg-border shrink-0" aria-hidden="true" />
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/" hash="plugins" className="hover:text-foreground transition-colors">
              {t.nav.plugins}
            </Link>
            <Link to="/about" className="hover:text-foreground transition-colors">
              {t.nav.about}
            </Link>
            <Link to="/donate" className="hover:text-foreground transition-colors">
              {t.footer.support}
            </Link>
            <a
              href={siteConfig.blogUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {t.nav.blog}
            </a>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <LanguageToggle />
          <ThemeToggle />
          <a
            href={siteConfig.githubUserUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="size-8 grid place-items-center rounded-full ring-1 ring-border hover:ring-accent/50 hover:text-accent transition-colors"
          >
            <GithubIcon className="size-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  const { t } = useI18n();
  const topPlugins = plugins.slice(0, 5);
  return (
    <footer className="mt-24 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pb-10">
          <div className="col-span-2 sm:col-span-1">
            <Link
              to="/"
              className="font-display font-semibold tracking-tight text-lg mb-1.5 inline-block"
            >
              {siteConfig.name}
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.footer.tagline}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
              {t.nav.plugins}
            </p>
            <ul className="space-y-2 text-sm">
              {topPlugins.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/plugins/$slug"
                    params={{ slug: p.slug }}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/" hash="plugins" className="text-accent hover:underline">
                  {t.home.allRepos.replace(" →", "")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
              {t.footer.about}
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  to="/donate"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.footer.support}
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.githubUserUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
              {t.footer.community}
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={siteConfig.product.homeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Download {siteConfig.product.name}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.pluginDirectoryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  WordPress.org Plugins
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.blogUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.nav.blog}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.author}
          </p>
          <p className="text-[10px] leading-relaxed text-muted-foreground/70 max-w-2xl">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
