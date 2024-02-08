import {
  DynamicProductsSection,
  HomeMainSection,
  NotesSections,
} from "@/molecules";

export default function Home() {
  return (
    <main>
      <HomeMainSection />
      <DynamicProductsSection allowLoadMore />
      <NotesSections />
    </main>
  );
}
