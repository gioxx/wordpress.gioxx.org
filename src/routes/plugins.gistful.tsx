import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/plugins/gistful")({
  loader: () => {
    throw redirect({
      to: "/plugins/$slug",
      params: { slug: "gistful-for-github" },
      statusCode: 301,
    });
  },
});
