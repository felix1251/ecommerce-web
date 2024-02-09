"use client";

import { fetchSingleProduct } from "@/redux/products/slice";
import { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

interface ISingleProduct {
  id: string;
}

const SingleProduct: React.FunctionComponent<ISingleProduct> = ({
  id,
}: ISingleProduct) => {
  const dispatch = useDispatch<AppDispatch>();
  // const product: ProductResponse = useSelector(getSingleProduct);

  useEffect(() => {
    dispatch(fetchSingleProduct({ id }));
  }, [dispatch, id]);

  return <div className="py-10 margin-max-screen">SingleProduct</div>;
};

export default SingleProduct;
