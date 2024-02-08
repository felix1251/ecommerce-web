import { DynamicProductsSection, HomeMainSection } from "@/molecules";

export default function Home() {
  return (
    <main>
      <HomeMainSection />
      <DynamicProductsSection allowLoadMore />
    </main>
  );
}
