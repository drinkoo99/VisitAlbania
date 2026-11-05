import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/legal-page";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/terms")({
  head: () => pageHead("Terms of Use · VisitAlbania", "The terms for using the VisitAlbania guide."),
  component: () => <LegalPage page="terms" />,
});
