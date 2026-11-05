import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/legal-page";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/privacy")({
  head: () => pageHead("Privacy Policy · VisitAlbania", "How VisitAlbania handles information: no accounts, analytics or tracking."),
  component: () => <LegalPage page="privacy" />,
});
