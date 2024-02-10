import { ProductResponse } from "../products/types";
import { RootState } from "../store";

export interface SingleWishlist extends ProductResponse {}

export interface WishlistState {
  data: SingleWishlist[];
}

export type IsProductExistOnWishlistType = (
  state: RootState,
  productId: number
) => boolean;

export interface WishlistPayload {
  select: number[];
}
