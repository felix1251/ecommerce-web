"use client";

import { Carousel } from "@/atoms";
import {
  fetchSingleProduct,
  getSingleProduct,
  isProductLoading,
} from "@/redux/products/slice";
import { ProductResponse } from "@/redux/products/types";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductDetails } from ".";

interface ISingleProduct {
  id: string;
}

const SingleProduct: React.FunctionComponent<ISingleProduct> = ({
  id,
}: ISingleProduct) => {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector<RootState, boolean>(isProductLoading);
  const product = useSelector<RootState, ProductResponse | null>(
    getSingleProduct
  );

  useEffect(() => {
    dispatch(fetchSingleProduct({ id }));
  }, [dispatch, id]);

  return (
    <div className="py-10 margin-min-screen flex gap-16">
      {!product || loading ? (
        <div>Loading....</div>
      ) : (
        <>
          <Carousel images={product.images} />
          <ProductDetails product={product} />
        </>
      )}
    </div>
  );
};

export default SingleProduct;
