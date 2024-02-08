"use client";

import {
  fetchProducts,
  getProductsList,
  isProductLoading,
} from "@/redux/products/slice";
import { ProductListResponse } from "@/redux/products/types";
import { AppDispatch } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  ProductCardLoading,
  SectionDescription,
  ProductCard,
} from "@/atoms";

export interface IDynamicProductsProps {
  allowLoadMore?: boolean;
  withExtraDescription?: boolean;
}

const DynamicProductsSection: React.FunctionComponent<
  IDynamicProductsProps
> = ({ allowLoadMore = false, withExtraDescription = true }) => {
  const [page, setPage] = useState<number>(1);
  const dispatch = useDispatch<AppDispatch>();
  const productLoading: boolean = useSelector(isProductLoading);
  const productList: ProductListResponse = useSelector(getProductsList);
  const canLoadMore = productList.limit * page < productList.total;

  useEffect(() => {
    dispatch(fetchProducts({ page: page, append: allowLoadMore }));
  }, [dispatch, page, allowLoadMore]);

  const loadMore = () => {
    if (canLoadMore) setPage((pg) => pg + 1);
  };

  return (
    <section
      className={`py-10 margin-small-screen flex flex-col ${
        withExtraDescription ? "gap-16" : "gap-8"
      }`}
    >
      <SectionDescription withExtraDescription={withExtraDescription} />
      {!withExtraDescription && <hr />}
      <div className="grid grid-cols-5 gap-6">
        {productLoading &&
          page == 1 &&
          Array.from(Array(10)).map((_, i) => <ProductCardLoading key={i} />)}
        {productList.products.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            brand={item.brand}
            thumbnail={item.thumbnail}
          />
        ))}
      </div>
      {allowLoadMore && (
        <div className="flex justify-center">
          <Button
            loading={productLoading}
            disabled={!canLoadMore}
            onClick={loadMore}
            variant="ghost"
          >
            Load more products
          </Button>
        </div>
      )}
    </section>
  );
};

export default DynamicProductsSection;
