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
    <main>
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
