import {
  BetterExperienceSection,
  DynamicProductsSection,
  FeaturedPostSection,
  HomeMainSection,
  NotesSection,
  WhatTheySayAboutUsSection,
} from "@/molecules";

export default function Home() {
  return (
    <main className="flex-1">
      <HomeMainSection />
      <DynamicProductsSection allowPagination />
      <NotesSection />
      <FeaturedPostSection />
      <WhatTheySayAboutUsSection />
      <BetterExperienceSection />
    </main>
  );
}
