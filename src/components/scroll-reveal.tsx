import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

export function ScrollReveal() {
  const routerStatus = useRouterState({ select: (s) => s.status });

  useEffect(() => {
    if (routerStatus !== "idle") return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.animationPlayState = "running";
            obs.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" },
    );

    const observeAll = () => {
      document.querySelectorAll<HTMLElement>(".animate-fade-in").forEach((el) => {
        obs.observe(el);
      });
    };
    observeAll();

    // Content that mounts after this effect's initial scan (e.g. a slow
    // loader on a direct page load) would otherwise stay paused at opacity 0
    // forever, since nothing re-scans the DOM. Keep watching for it.
    const mutationObs = new MutationObserver(observeAll);
    mutationObs.observe(document.body, { childList: true, subtree: true });

    return () => {
      obs.disconnect();
      mutationObs.disconnect();
    };
  }, [routerStatus]);

  return null;
}
