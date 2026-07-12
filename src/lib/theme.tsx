import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

export type Theme = "light" | "dark" | "system";
const STORAGE_KEY = "archivio-theme";

type Ctx = { theme: Theme; setTheme: (t: Theme) => void; resolved: "light" | "dark" };
const ThemeCtx = createContext<Ctx | null>(null);

function applyTheme(theme: Theme): "light" | "dark" {
  if (typeof document === "undefined") return "light";
  const sys = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const resolved = theme === "system" ? sys : theme;
  document.documentElement.classList.toggle("dark", resolved === "dark");
  return resolved;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolved, setResolved] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = (localStorage.getItem(STORAGE_KEY) as Theme | null) ?? "system";
    setThemeState(stored);
    setResolved(applyTheme(stored));
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const current = (localStorage.getItem(STORAGE_KEY) as Theme | null) ?? "system";
      if (current === "system") setResolved(applyTheme("system"));
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const setTheme = (t: Theme) => {
    localStorage.setItem(STORAGE_KEY, t);
    setThemeState(t);
    setResolved(applyTheme(t));
  };

  return <ThemeCtx.Provider value={{ theme, setTheme, resolved }}>{children}</ThemeCtx.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const order: Theme[] = ["light", "dark", "system"];
  const next = () => setTheme(order[(order.indexOf(theme) + 1) % order.length]);
  const Icon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;
  const label = theme === "light" ? "Light" : theme === "dark" ? "Dark" : "System";
  return (
    <button
      type="button"
      onClick={next}
      aria-label={`Theme: ${label} (click to switch)`}
      title={`Theme: ${label}`}
      className="size-8 grid place-items-center rounded-lg ring-1 ring-border hover:bg-foreground/5 transition-colors"
    >
      <Icon className="size-4" />
    </button>
  );
}
