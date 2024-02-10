import { priceCalc } from "@/utils";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { RootState } from "../store";
import { CartsState, IsProductExistOnCartType, SingleCart } from "./types";

const initialState: CartsState = {
  data: [],
};

export const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart(state, action) {
      const cartObj: SingleCart = { ...action.payload, quantity: 1 };
      const newList: SingleCart[] = [cartObj].concat(state.data);
      // make the list always unique to avoid duplicate record-
      const makeListUnique: Set<SingleCart> = new Set(newList);
      state.data = Array.from(makeListUnique);
      toast.success("Successfully added to cart", { duration: 3000 });
    },
    removeFromCart(state, action) {
      const newList = state.data.filter((cart) => cart.id != action.payload);
      state.data = newList;
      toast.success("Successfully remove cart item", { duration: 3000 });
    },
    increseCartQuantity(state, action) {
      const cartIndex = state.data.findIndex(
        (cart) => cart.id == action.payload
      );
      state.data[cartIndex].quantity++;
    },
    deccreseCartQuantity(state, action) {
      const cartIndex = state.data.findIndex(
        (cart) => cart.id == action.payload
      );
      if (state.data[cartIndex].quantity <= 1) return;
      state.data[cartIndex].quantity--;
    },
  },
});

export const getCartlist = (state: RootState): SingleCart[] => state.carts.data;
export const getCartCount = (state: RootState): number =>
  state.carts.data.length;

export const getCartlistTotalSum = (state: RootState): number =>
  state.carts.data.reduce((accumulator, cart) => {
    return (
      accumulator +
      priceCalc(cart.price, cart.discountPercentage) * cart.quantity
    );
  }, 0);

export const isProductExistOnCart: IsProductExistOnCartType = createSelector(
  [getCartlist, (_carts, productId: number) => productId],
  (carts: SingleCart[], productId: number) =>
    carts.filter((cart) => cart.id == productId).length > 0
);

export const {
  addToCart,
  removeFromCart,
  increseCartQuantity,

  deccreseCartQuantity,
} = cartsSlice.actions;

export default cartsSlice.reducer;
