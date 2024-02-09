import {
  BetterExperienceSection,
  DynamicProductsSection,
  FeaturedPostSection,
  HomeMainSection,
  NotesSection,
  SocialSection,
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
      <SocialSection />
    </main>
  );
}
