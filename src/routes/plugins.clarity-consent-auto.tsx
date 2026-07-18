import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/plugins/clarity-consent-auto")({
  loader: () => {
    throw redirect({ to: "/plugins/$slug", params: { slug: "silent-consent-clarity" } });
  },
});
