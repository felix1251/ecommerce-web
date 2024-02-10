import { RootState } from "../store";

export interface WishlistState {
  listOfIds: number[];
}

export type IsProductExistOnWishlistType = (
  state: RootState,
  productId: number
) => boolean;
