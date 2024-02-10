"use client";

import { Carousel } from "@/atoms";
import {
  fetchSingleProduct,
  getSingleProduct,
  isProductLoading,
} from "@/redux/products/slice";
import { ProductResponse } from "@/redux/products/types";
import { AppDispatch, RootState } from "@/redux/store";
import { discountedPrice, roundPrice } from "@/utils";
import { Rating } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
  const inStock: boolean | null = product && product.stock > 0;

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
          <div className="grid py-5 w-full">
            <div className="flex flex-col gap-5 w-full">
              <h2 className="text-4xl text-gray-800">{product.title}</h2>
              <div className="flex gap-3 items-center">
                <Rating
                  name="user-star"
                  readOnly={true}
                  value={product.rating}
                  size="large"
                />
                <span className="font-bold text-gray-500 text-xl">
                  10 reviews
                </span>
              </div>
              <div className="mt-2 space-y-3">
                <div className="flex gap-3">
                  <span className="text-4xl line-through font-bold text-zinc-400">
                    {roundPrice(product.price)}
                  </span>
                  <span className="text-4xl font-bold text-gray-800">
                    {discountedPrice(product.price, product.discountPercentage)}
                  </span>
                </div>
                <div className="flex gap-2 font-bold text-zinc-500 text-xl">
                  Availability:{" "}
                  <span className={inStock ? "text-primary" : "text-red-500"}>
                    {inStock ? "In Stock" : "Out of Stock"} ({product.stock})
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full">
              <hr className="border border-zinc-300" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleProduct;
