"user client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { RootState } from "../store";
import {
  ProductListResponse,
  ProductResponse,
  ProductsPayload,
  ProductsState,
  SingleProductPayload,
} from "./types";

const ProductList: ProductListResponse = {
  products: [],
  total: 0,
  skip: 0,
  limit: 10,
};

const initialState: ProductsState = {
  product: null,
  productLoading: false,
  list: ProductList,
  listLoading: false,
  error: "",
};

interface AsyncThunkOptions {
  rejectValue: any;
}

// get multiple products with limit
export const fetchProducts = createAsyncThunk<
  ProductListResponse,
  ProductsPayload,
  AsyncThunkOptions
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
  AsyncThunkOptions
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
        state.error = "";
        state.listLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        if (
          action.meta.arg.append &&
          action.meta.arg.page &&
          action.meta.arg.page > 1
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
        state.listLoading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.listLoading = false;
        state.error = action.payload.message;
      })
      .addCase(fetchSingleProduct.pending, (state, _action) => {
        state.error = "";
        state.productLoading = true;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.productLoading = false;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.productLoading = false;
        state.error = action.payload.message;
      });
  },
});

export const getProductList = (state: RootState): ProductListResponse =>
  state.products.list;
export const getSingleProduct = (state: RootState): ProductResponse | null =>
  state.products.product;
export const isProductListLoading = (state: RootState): boolean =>
  state.products.listLoading;
export const isProductLoading = (state: RootState): boolean =>
  state.products.productLoading;
export const getProductError = (state: RootState): string =>
  state.products.error;

export default productSlice.reducer;
