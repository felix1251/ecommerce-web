import { createSelector, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { RootState } from "../store";
import { IsProductExistOnWishlistType, WishlistState } from "./types";

const initialState: WishlistState = {
  listOfIds: [],
};

export const wishlistSlice = createSlice({
  name: "whishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const newList: number[] = [action.payload].concat(state.listOfIds);
      // make the list always unique to avoid duplicate ids
      const makeListUnique: Set<number> = new Set(newList);
      state.listOfIds = Array.from(makeListUnique);
      toast.success("Successfully added to Wishlist", { duration: 3000 });
    },
    removeFromWishlist(state, action) {
      const newList = state.listOfIds.filter((id) => id != action.payload);

      state.listOfIds = newList;
    },
  },
});

export const getWishlistIds = (state: RootState): number[] =>
  state.wishlist.listOfIds;

export const getWishlistCount = (state: RootState): number =>
  state.wishlist.listOfIds.length;

export const isProductExistOnWishlist: IsProductExistOnWishlistType =
  createSelector(
    [getWishlistIds, (_wishlist, productId: number) => productId],
    (wishlist: number[], productId: number) => wishlist.includes(productId)
  );

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
