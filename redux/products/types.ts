export interface Product {
  id: number
}

export interface ProductInitialState {
  list: Product[]
  product: Product | null
}
