"use client";

import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/slice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const AppDispath = typeof store.dispatch;
