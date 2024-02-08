export interface ProductResponse {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductListResponse {
  products: ProductResponse[];
  total: number;
  skip: number;
  limit: number;
}

export interface ProductsState {
  list: ProductListResponse;
  loading: boolean;
  product: ProductResponse | null;
  error: any;
}

export interface ProductsPayload {
  limit?: number;
  page?: number;
  append?: boolean;
}

export interface SingleProductPayload {
  id: number;
}
