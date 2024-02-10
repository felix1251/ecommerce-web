"use client";

import { Button, RoundedButtonIcon } from "@/atoms";
import { addToCart, isProductExistOnCart } from "@/redux/carts/slice";
import { ProductResponse } from "@/redux/products/types";
import { AppDispatch, RootState } from "@/redux/store";
import {
  addToWishlist,
  isProductExistOnWishlist,
} from "@/redux/wishlist/slice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";

interface IProductDetailsOptionsProps {
  product: ProductResponse;
}

const ProductDetailsOptions: React.FunctionComponent<
  IProductDetailsOptionsProps
> = ({ product }: IProductDetailsOptionsProps) => {
  const dispath = useDispatch<AppDispatch>();

  const isWishlistExist = useSelector<RootState, boolean>((state: RootState) =>
    isProductExistOnWishlist(state, product.id)
  );
  const isCartExist = useSelector<RootState, boolean>((state: RootState) =>
    isProductExistOnCart(state, product.id)
  );

  const addProductToWishlist = () => dispath(addToWishlist(product));
  const addProductToCart = () => dispath(addToCart(product));

  return (
    <div className="w-full flex flex-col gap-4 md:gap-8">
      <hr className="border border-zinc-300" />
      <div className="flex gap-3 sm:gap-5 items-center w-full">
        <Button size="lg">Select Options</Button>
        <RoundedButtonIcon
          onClick={addProductToWishlist}
          disabled={isWishlistExist}
        >
          <FavoriteBorderIcon />
        </RoundedButtonIcon>
        <RoundedButtonIcon onClick={addProductToCart} disabled={isCartExist}>
          <ShoppingCartOutlined />
        </RoundedButtonIcon>
        <RoundedButtonIcon>
          <RemoveRedEyeIcon />
        </RoundedButtonIcon>
      </div>
    </div>
  );
};

export default ProductDetailsOptions;
