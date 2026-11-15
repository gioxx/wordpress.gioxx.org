import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/plugins/wp-lsi")({
  loader: () => {
    throw redirect({ to: "/plugins/$slug", params: { slug: "reloaded-social-icons" }, statusCode: 301 });
  },
});
