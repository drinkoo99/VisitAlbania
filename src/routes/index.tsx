import { createFileRoute } from "@tanstack/react-router";

import { SiteShell } from "@/components/layout/site-shell";
import { Hero } from "@/components/home/hero";
import { PinnedStatement } from "@/components/home/pinned-statement";
import { RegionChooser } from "@/components/home/region-chooser";
import { Showcase } from "@/components/home/showcase";
import { ThingsToDo } from "@/components/home/things-to-do";
import { FoodCulture } from "@/components/home/food-culture";
import { Calendar } from "@/components/home/calendar";
import { AboutBlock } from "@/components/home/about-block";
import { useReveal } from "@/hooks/use-motion";
import { pageHead } from "@/lib/page-head";
import { photoAssets } from '@/data/photo-assets';

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "VisitAlbania: an independent guide, from Theth to Ksamil",
      "An independent guide to the mountains, stone towns, food and coast of Albania, in five languages.",
      photoAssets.theth.url,
    ),
  component: HomePage,
});

function HomePage() {
  useReveal();
  return (
    <SiteShell>
      <main id="main-content">
        <Hero />
        <PinnedStatement />
        <RegionChooser />
        <Showcase />
        <ThingsToDo />
        <FoodCulture />
        <Calendar />
        <AboutBlock />
      </main>
    </SiteShell>
  );
}
