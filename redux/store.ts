"use client";

import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/slice";
import wislistReducer from "./wishlist/slice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    wishlist: wislistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
