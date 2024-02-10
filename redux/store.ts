"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import productsReducer from "./products/slice";
import wislistReducer from "./wishlist/slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["wishlist"],
  blacklist: ["products"],
};

const wishlistConfig = {
  key: "wishlist",
  storage,
};

const rootReducer = combineReducers({
  wishlist: persistReducer(wishlistConfig, wislistReducer),
  products: productsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
