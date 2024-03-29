import { priceCalc } from "@/utils";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { RootState } from "../store";
import {
  IsProductExistOnWishlistType,
  SingleWishlist,
  WishlistState,
} from "./types";

const initialState: WishlistState = {
  data: [],
};

export const wishlistSlice = createSlice({
  name: "whishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const newList: SingleWishlist[] = [action.payload].concat(state.data);
      // make the list always unique to avoid duplicate ids
      const makeListUnique: Set<SingleWishlist> = new Set(newList);
      state.data = Array.from(makeListUnique);
      toast.success("Successfully added to wishlist", { duration: 3000 });
    },
    removeFromWishlist(state, action) {
      const newList = state.data.filter((item) => item.id != action.payload);
      state.data = newList;
      toast.success("Successfully remove wishlist item", {
        duration: 3000,
      });
    },
  },
});

export const getWishlistData = (state: RootState): SingleWishlist[] =>
  state.wishlist.data;

export const getWishlistCount = (state: RootState): number =>
  state.wishlist.data.length;

export const getWishlistTotalSum = (state: RootState): number =>
  state.wishlist.data.reduce((accumulator, wishlist) => {
    return accumulator + priceCalc(wishlist.price, wishlist.discountPercentage);
  }, 0);

export const isProductExistOnWishlist: IsProductExistOnWishlistType =
  createSelector(
    [getWishlistData, (_wishlist, productId: number) => productId],
    (wishlist: SingleWishlist[], productId: number) =>
      wishlist.filter((wishlist) => wishlist.id == productId).length > 0
  );

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
