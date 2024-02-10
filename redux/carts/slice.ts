import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState: CartsState = {
  list: [],
};

export const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newList = [action.payload].concat(state.list);
      // make the list always unique to avoid duplicate record-
      const makeListUnique = new Set(newList);
      state.list = Array.from(makeListUnique);
      toast.success("Successfully added to Carts", { duration: 3000 });
    },
    removeFromCart(state, action) {
      const newList = state.list.filter((cart) => cart.id != action.payload);

      state.list = newList;
    },
    increseCartQuantity(state, action) {},
    deccreseCartQuantity(state, action) {},
  },
});

// export const getCartlist = (state: RootState): Cart[] => state.carts.list;

// export const isProductExistOnWishlist: IsProductExistOnWishlistType =
//   createSelector(
//     [getWishlistIds, (_wishlist, productId: number) => productId],
//     (wishlist: number[], productId: number) => wishlist.includes(productId)
//   );

export const {
  addToCart,
  removeFromCart,
  increseCartQuantity,
  deccreseCartQuantity,
} = cartsSlice.actions;

export default cartsSlice.reducer;
