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
  isProductLoading,
} from "@/redux/products/slice";
import { ProductListResponse } from "@/redux/products/types";
import { AppDispatch } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export interface IDynamicProductsProps {
  allowPagination?: boolean;
  withExtraDescription?: boolean;
}

const DynamicProductsSection: React.FunctionComponent<
  IDynamicProductsProps
> = ({
  allowPagination = false,
  withExtraDescription = true,
}: IDynamicProductsProps) => {
  const [page, setPage] = useState<number>(1);
  const dispatch = useDispatch<AppDispatch>();
  const productLoading: boolean = useSelector(isProductLoading);
  const productList: ProductListResponse = useSelector(getProductList);
  const canLoadMore: boolean = productList.limit * page < productList.total;

  useEffect(() => {
    dispatch(fetchProducts({ page: page, append: true }));
  }, [dispatch, page]);

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
      <div className="grid px-9 sm:py-0 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
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
            price={item.price}
            discountPercentage={item.discountPercentage}
          />
        ))}
      </div>
      {allowPagination && (
        <div className="flex justify-center">
          <Button
            loading={productLoading}
            disabled={!canLoadMore || productLoading}
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
