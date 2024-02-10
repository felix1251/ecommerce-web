"use client";

import { Carousel } from "@/atoms";
import { ProductDetails } from "@/molecules";
import {
  fetchSingleProduct,
  getSingleProduct,
  isProductLoading,
} from "@/redux/products/slice";
import { ProductResponse } from "@/redux/products/types";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface IProductViewProps {
  id: string;
}

const ProductView: React.FunctionComponent<IProductViewProps> = ({
  id,
}: IProductViewProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector<RootState, boolean>(isProductLoading);
  const product = useSelector<RootState, ProductResponse | null>(
    getSingleProduct
  );

  useEffect(() => {
    dispatch(fetchSingleProduct({ id }));
  }, [dispatch, id]);

  return (
    <div className="py-10 margin-min-screen">
      {!product || loading ? (
        <div>Loading....</div>
      ) : (
        <div className="w-full flex gap-16">
          <Carousel images={product.images} />
          <ProductDetails product={product} />
        </div>
      )}
    </div>
  );
};

export default ProductView;
