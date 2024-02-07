"user client";

import { createSlice } from "@reduxjs/toolkit";
import { ProductInitialState } from "./types";

const initialState: ProductInitialState = {
  list: [],
  product: null
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct: (state, action) => {
      state = action.payload;
    },
  },
});

export const { getProduct } = productSlice.actions;

export default productSlice.reducer;
