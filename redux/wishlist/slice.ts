import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { WishlistState } from "./types";

const initialState: WishlistState = {
  listOfIds: [],
};

export const wishlistSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const newList = [action.payload].concat(state.listOfIds);
      // make the list always unique to avoid duplicate ids
      const makeListUnique = new Set(newList);
      state.listOfIds = Array.from(makeListUnique);
    },
    removeFromWishlist(state, action) {
      const newList = state.listOfIds.filter((id) => id != action.payload);

      state.listOfIds = newList;
    },
  },
});

export const getWishlistIds = (state: RootState): number[] =>
  state.wishlist.listOfIds;

type IsProductExistOnWishlistType = (
  state: RootState,
  productId: number
) => boolean;

export const isProductExistOnWishlist: IsProductExistOnWishlistType =
  createSelector(
    [getWishlistIds, (_wishlist, productId: number) => productId],
    (wishlist: number[], productId: number) => wishlist.includes(productId)
  );

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
