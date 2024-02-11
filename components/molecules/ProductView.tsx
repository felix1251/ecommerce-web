"use client";

import { ProductDetails, ProductViewLoading } from "@/molecules";
import {
  fetchSingleProduct,
  getProductError,
  getSingleProduct,
  isProductLoading,
} from "@/redux/products/slice";
import { ProductResponse } from "@/redux/products/types";
import { AppDispatch, RootState } from "@/redux/store";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "../atoms";

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
  const productError = useSelector<RootState, string>(getProductError);

  useEffect(() => {
    dispatch(fetchSingleProduct({ id }));
  }, [dispatch, id]);

  return (
    <div className="py-10 margin-min-screen">
      {loading ? (
        <ProductViewLoading />
      ) : (
        <>
          {!productError && product ? (
            <div className="w-full justify-center flex flex-col lg:flex-row gap-10 md:gap-16">
              <Carousel images={product.images} />
              <ProductDetails product={product} />
            </div>
          ) : (
            <div className="grid place-items-center h-[20rem] sm:h-[24rem] md:h-[28rem]">
              <div className="flex flex-col justify-center items-center gap-5">
                <WarningAmberIcon
                  className="text-red-600"
                  style={{ fontSize: 140 }}
                />
                <h2 className="text-4xl w-full md:w-[500px] md:text-5xl text-center text-red-600 font-semibold">
                  {productError ?? "Something went wrong"}
                </h2>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductView;
