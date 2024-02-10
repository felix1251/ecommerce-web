"use client";

import { Button, RoundedButtonIcon } from "@/atoms";
import { RootState } from "@/redux/store";
import {
  addToWishlist,
  isProductExistOnWishlist,
} from "@/redux/wishlist/slice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";

interface IProductDetailsOptionsProps {
  productId: number;
}

const ProductDetailsOptions: React.FunctionComponent<
  IProductDetailsOptionsProps
> = ({ productId }: IProductDetailsOptionsProps) => {
  const dispath = useDispatch();

  const wishlistExist = useSelector<RootState, boolean>((state: RootState) =>
    isProductExistOnWishlist(state, productId)
  );

  const addProductToWishlist = () => dispath(addToWishlist(productId));

  return (
    <div className="w-full flex flex-col gap-6">
      <hr className="border border-zinc-300" />
      <div className="flex gap-5 items-center">
        <Button size="lg">Select Options</Button>
        <RoundedButtonIcon
          onClick={addProductToWishlist}
          disabled={wishlistExist}
        >
          <FavoriteBorderIcon />
        </RoundedButtonIcon>
        <RoundedButtonIcon disabled={false}>
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
