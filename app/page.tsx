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
    <main>
      <HomeMainSection />
      <DynamicProductsSection allowPagination />
      <NotesSection />
      <FeaturedPostSection />
      <WhatTheySayAboutUsSection />
      <BetterExperienceSection />
    </main>
  );
}
