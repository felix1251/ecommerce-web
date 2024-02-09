"use client";

import { DynamicProductsSection } from "@/components/molecules";
import { fetchSingleProduct } from "@/redux/products/slice";
// import { ProductResponse } from "@/redux/products/types";
import { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

interface IProductProps {
  params: { id: string };
}

export default function Product({ params }: IProductProps) {
  const dispatch = useDispatch<AppDispatch>();
  // const product: ProductResponse = useSelector(getSingleProduct);
  const id = params.id;

  useEffect(() => {
    dispatch(fetchSingleProduct({ id }));
  }, [dispatch, id]);

  return (
    <main className="flex-1">
      <div className="bg-zinc-50">
        <DynamicProductsSection withExtraDescription={false} />
      </div>
    </main>
  );
}
