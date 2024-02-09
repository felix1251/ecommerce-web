import { Breadcrumb } from "@/atoms";
import { DynamicProductsSection, SingleProduct } from "@/components/molecules";

interface IProductProps {
  params: { id: string };
}

export default function Product({ params }: IProductProps) {
  return (
    <main className="flex-1">
      <div className="bg-zinc-50">
        <Breadcrumb />
        <SingleProduct id={params.id} />
        <DynamicProductsSection
          withExtraDescription={false}
          limit={8}
          gridCol={"lg:grid-cols-4"}
        />
      </div>
    </main>
  );
}
