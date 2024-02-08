import {
  DynamicProductsSection,
  FeaturedPostSection,
  HomeMainSection,
  NotesSection,
} from "@/molecules";

export default function Home() {
  return (
    <main>
      <HomeMainSection />
      <DynamicProductsSection allowPagination />
      <NotesSection />
      <FeaturedPostSection />
    </main>
  );
}
