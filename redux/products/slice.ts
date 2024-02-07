"user client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  Product,
  ProductInitialState,
  ProductsPayload,
  SingleProductPayload,
} from "./types";
import axios, { AxiosError } from "axios";

const initialState: ProductInitialState = {
  product: null,
  list: [],
  loading: false,
  error: null,
};

interface RejectValue {
  rejectValue: any;
}

// get multiple products with limit
export const fetchProducts = createAsyncThunk<
  Product[],
  ProductsPayload,
  RejectValue
>(
  "products/fetchProducts",
  async ({ limit = 10 }: ProductsPayload, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=${limit}`
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
  Product,
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
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchSingleProduct.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
