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

    document.querySelectorAll<HTMLElement>(".animate-fade-in").forEach((el) => {
      obs.observe(el);
    });

    return () => obs.disconnect();
  }, [routerStatus]);

  return null;
}
