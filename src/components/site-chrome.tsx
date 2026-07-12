import { Link } from "@tanstack/react-router";
import { GithubIcon } from "@/components/github-icon";
import { ThemeToggle } from "@/lib/theme";
import { LanguageToggle, useI18n } from "@/lib/i18n";

export function SiteNav() {
  const { t } = useI18n();
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 font-bold tracking-tighter text-lg uppercase">
            <img src="/favicon.svg" alt="" className="size-5 shrink-0" />
            gioxx/WordPress
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link to="/" hash="plugins" className="hover:text-foreground transition-colors">
              {t.nav.plugins}
            </Link>
            <Link to="/" hash="collateral" className="hover:text-foreground transition-colors">
              {t.nav.collateral}
            </Link>
            <Link to="/about" className="hover:text-foreground transition-colors">
              {t.nav.about}
            </Link>
            <Link to="/donate" className="hover:text-foreground transition-colors">
              {t.footer.support}
            </Link>
            <span className="w-px h-3.5 bg-border" />
            <a
              href="https://gioxx.org/tag/wordpress/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {t.nav.blog}
            </a>
            <span className="w-px h-3.5 bg-border" />
            <a
              href="https://wordpress.org"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Download WordPress
            </a>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <a
            href="https://github.com/gioxx"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="size-8 grid place-items-center rounded-lg ring-1 ring-border hover:bg-foreground/5 transition-colors"
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
  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <p className="text-sm font-bold tracking-tighter uppercase mb-1">© {new Date().getFullYear()} GIOXX/WORDPRESS</p>
        <p className="text-xs text-muted-foreground mb-6">{t.footer.tagline}</p>
        <p className="text-[10px] leading-relaxed text-muted-foreground/70">
          {t.footer.disclaimer}
        </p>
      </div>
    </footer>
  );
}
