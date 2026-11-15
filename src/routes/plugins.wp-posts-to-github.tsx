import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/plugins/wp-posts-to-github")({
  loader: () => {
    throw redirect({ to: "/plugins/$slug", params: { slug: "posts-to-github-md" }, statusCode: 301 });
  },
});
