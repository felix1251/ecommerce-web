"use client";

import {
  fetchSingleProduct,
  getSingleProduct,
  isProductLoading,
} from "@/redux/products/slice";
import { ProductResponse } from "@/redux/products/types";
import { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "../atoms";

interface ISingleProduct {
  id: string;
}

const SingleProduct: React.FunctionComponent<ISingleProduct> = ({
  id,
}: ISingleProduct) => {
  const dispatch = useDispatch<AppDispatch>();
  const loading: boolean = useSelector(isProductLoading);
  const product: ProductResponse | null = useSelector(getSingleProduct);

  useEffect(() => {
    dispatch(fetchSingleProduct({ id }));
  }, [dispatch, id]);

  return (
    <div className="py-10 margin-max-screen">
      {!product || loading ? (
        <div>Loading....</div>
      ) : (
        <Carousel images={product?.images ?? []} />
      )}
    </div>
  );
};

export default SingleProduct;
