import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/plugins/wp-simplealexa")({
  loader: () => {
    throw redirect({ to: "/plugins/$slug", params: { slug: "simple-alexa-news-briefing" }, statusCode: 301 });
  },
});
