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

export const isNode = (element: any): element is Node => element instanceof Node

export type InputType = 'text' | 'email' | 'tel' | 'password'

export type Input = {
  label: string
  name: string
  value: string
  type?: InputType
  validation: (value: string) => boolean
}

export type Inputs = readonly Input[]

export type ValidObjKeys = string | number | symbol
