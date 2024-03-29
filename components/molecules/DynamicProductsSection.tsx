"use client";

import {
  Button,
  ProductCard,
  ProductCardLoading,
  SectionDescription,
} from "@/atoms";
import {
  fetchProducts,
  getProductList,
  isProductListLoading,
} from "@/redux/products/slice";
import { ProductListResponse } from "@/redux/products/types";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export interface IDynamicProductsProps {
  allowPagination?: boolean;
  withExtraDescription?: boolean;
  limit?: number;
  gridCol?: string;
}

const DynamicProductsSection: React.FunctionComponent<
  IDynamicProductsProps
> = ({
  allowPagination = false,
  withExtraDescription = true,
  limit = 10,
  gridCol = "lg:grid-cols-5",
}: IDynamicProductsProps) => {
  const [page, setPage] = useState<number>(1);
  const dispatch = useDispatch<AppDispatch>();
  const productListLoading = useSelector<RootState, boolean>(
    isProductListLoading
  );
  const productList = useSelector<RootState, ProductListResponse>(
    getProductList
  );
  const canLoadMore: boolean = productList.limit * page < productList.total;

  useEffect(() => {
    dispatch(fetchProducts({ page: page, append: true, limit: limit }));
  }, [dispatch, page, limit]);

  const loadMore = () => {
    if (canLoadMore) setPage((pg) => pg + 1);
  };

  return (
    <section
      className={`py-10 margin-small-screen flex flex-col ${
        withExtraDescription ? "gap-16" : "gap-8"
      }`}
    >
      <SectionDescription
        withExtraDescription={withExtraDescription}
        label="Bestseller Products"
      />
      {!withExtraDescription && <hr />}
      <div
        className={`grid px-9 sm:py-0 sm:grid-cols-2 md:grid-cols-4 ${gridCol} gap-6`}
      >
        {productList.products.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            title={p.title}
            brand={p.brand}
            thumbnail={p.thumbnail}
            price={p.price}
            discountPercentage={p.discountPercentage}
          />
        ))}
        {!productList.products.length &&
          !canLoadMore &&
          Array.from(Array(10)).map((_, i) => <ProductCardLoading key={i} />)}
      </div>
      {allowPagination && canLoadMore && (
        <div className="flex justify-center">
          <Button
            loading={productListLoading}
            disabled={!canLoadMore || productListLoading}
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
