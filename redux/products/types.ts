export interface Product {
  id: number;
}

export interface ProductInitialState {
  list: Product[];
  loading: boolean;
  product: Product | null;
  error: any;
}

export interface ProductsPayload {
  limit: number;
}

export interface SingleProductPayload {
  id: number;
}
