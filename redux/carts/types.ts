import { ProductResponse } from "../products/types";
import { RootState } from "../store";

export interface SingleCart extends ProductResponse {
  quantity: number;
}

export interface CartsState {
  data: SingleCart[];
}

export type IsProductExistOnCartType = (
  state: RootState,
  productId: number
) => boolean;
