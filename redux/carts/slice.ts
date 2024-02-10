import { createSelector, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { RootState } from "../store";
import { CartType, CartsState, IsProductExistOnCartType } from "./types";

const initialState: CartsState = {
  list: [],
};

export const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart(state, action) {
      const cartObj: CartType = { id: action.payload, quantity: 1 };
      const newList: CartType[] = [cartObj].concat(state.list);
      // make the list always unique to avoid duplicate record-
      const makeListUnique: Set<CartType> = new Set(newList);
      state.list = Array.from(makeListUnique);
      toast.success("Successfully added to Cart", { duration: 3000 });
    },
    removeFromCart(state, action) {
      const newList = state.list.filter((cart) => cart.id != action.payload);

      state.list = newList;
    },
    increseCartQuantity(state, action) {},
    deccreseCartQuantity(state, action) {},
  },
});

export const getCartlist = (state: RootState): CartType[] => state.carts.list;
export const getCartCount = (state: RootState): number =>
  state.carts.list.length;

export const isProductExistOnCart: IsProductExistOnCartType = createSelector(
  [getCartlist, (_carts, productId: number) => productId],
  (carts: CartType[], productId: number) =>
    carts.filter((cart) => cart.id == productId).length > 0
);

export const {
  addToCart,
  removeFromCart,
  increseCartQuantity,
  deccreseCartQuantity,
} = cartsSlice.actions;

export default cartsSlice.reducer;
