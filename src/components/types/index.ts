export type Product = {
  id: number
  title: string
  price: number
  rest: number
  current: number
}

export type Products = Product[]

export type ProductChange = Partial<Product>

export type GetProductChange = (oldProduct: Product) => ProductChange
