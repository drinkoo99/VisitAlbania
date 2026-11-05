import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/legal-page";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/cookies")({
  head: () => pageHead("Cookie Policy · VisitAlbania", "VisitAlbania uses no cookies. The one setting saved in your browser is explained here."),
  component: () => <LegalPage page="cookies" />,
});
