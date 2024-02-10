import { Breadcrumb } from "@/atoms";
import {
  DynamicProductsSection,
  ProductDescription,
  ProductView,
} from "@/molecules";

interface IProductPageProps {
  params: { id: string };
}

export default function Product({ params }: IProductPageProps) {
  return (
    <main className="flex-1">
      <div className="bg-zinc-50">
        <Breadcrumb />
        <ProductView id={params.id} />
        <ProductDescription />
        <DynamicProductsSection
          withExtraDescription={false}
          limit={8}
          gridCol={"lg:grid-cols-4"}
        />
      </div>
    </main>
  );
}
