import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    // Off on purpose: it saves a scroll key in the browser, and the cookie policy promises only `lang`.
    scrollRestoration: false,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
