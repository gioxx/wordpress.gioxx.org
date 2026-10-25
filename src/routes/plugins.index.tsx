import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/plugins/")({
  loader: () => {
    throw redirect({ to: "/", hash: "plugins" });
  },
});
