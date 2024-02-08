"user client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  ProductsState,
  ProductsPayload,
  SingleProductPayload,
  ProductListResponse,
  ProductResponse,
} from "./types";
import axios, { AxiosError } from "axios";
import { RootState } from "../store";

const initialState: ProductsState = {
  product: null,
  list: {
    products: [],
    total: 0,
    skip: 0,
    limit: 10,
  },
  loading: false,
  error: null,
};

export interface RejectValue {
  rejectValue: any;
}

// get multiple products with limit
export const fetchProducts = createAsyncThunk<
  ProductListResponse,
  ProductsPayload,
  RejectValue
>(
  "products/fetchProducts",
  async ({ limit = 10, page = 1 }: ProductsPayload, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${
          (page - 1) * limit
        }`
      );
      return response.data;
    } catch (err) {
      const error: AxiosError<any> = err as any;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

// get single product
export const fetchSingleProduct = createAsyncThunk<
  ProductResponse,
  SingleProductPayload,
  RejectValue
>(
  "products/fetchSingleProduct",
  async ({ id }: SingleProductPayload, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      return response.data;
    } catch (err) {
      const error: AxiosError<any> = err as any;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        if (
          action.meta.arg?.append &&
          action.meta.arg?.page &&
          action.meta.arg?.page > 1
        ) {
          state.list.limit = action.payload.limit;
          state.list.skip = action.payload.skip;
          state.list.total = action.payload.total;
          state.list.products = state.list.products.concat(
            action.payload.products
          );
        } else {
          state.list = initialState.list;
          state.list = action.payload;
        }
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchSingleProduct.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.loading = false;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const getProductsList = (state: RootState): ProductListResponse =>
  state.products.list;
export const getSingleProduct = (state: RootState): ProductResponse | null =>
  state.products.product;
export const isProductLoading = (state: RootState): boolean =>
  state.products.loading;

export default productSlice.reducer;
