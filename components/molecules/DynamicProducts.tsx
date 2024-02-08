import {
  fetchProducts,
  getProductsList,
  isProductLoading,
} from "@/redux/products/slice";
import { ProductListResponse } from "@/redux/products/types";
import { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export interface IDynamicProductsProps {
  allowLoadMore: boolean;
}

const DynamicProducts: React.FunctionComponent<IDynamicProductsProps> = ({
  allowLoadMore = false,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const productLoading: boolean = useSelector(isProductLoading);
  const productList: ProductListResponse = useSelector(getProductsList);

  useEffect(() => {
    dispatch(fetchProducts({ limit: 10 }));
  }, [dispatch]);

  return <div></div>;
};

export default DynamicProducts;
