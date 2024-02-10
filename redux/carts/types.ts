import { RootState } from "../store";

export interface CartType {
  id: number;
  quantity: number;
}

export interface CartsState {
  list: CartType[];
}

export type IsProductExistOnCartType = (
  state: RootState,
  productId: number
) => boolean;
