export type Product = {
  id: number
  title: string
  price: number
  rest: number
}

export type CartItem = {
  id: number
  current: number
}

export type Products = Product[]

export type CartItems = CartItem[]

export type CartItemChange = Partial<CartItem>

export type GetCartItemChange = (oldCartProduct: CartItem) => CartItemChange

export const isNode = (element: any): element is Node => element instanceof Node

export type InputType = 'text' | 'email' | 'tel' | 'password'

export type Input = {
  label: string
  name: string
  value: string
  validation: {
    [key: string]: {
      action: (value: string) => boolean
      message: string
    }
  }
  type?: InputType
}

export type Inputs = readonly Input[]

export type ValidObjKeys = string | number | symbol

export type Validation = {
  [key: string]: {
    status: string
    error: string
  }
}

export type Lang = 'en' | 'ru'
export type Theme = 'light' | 'dark'

export type Settings = {
  lang: Lang
  theme: Theme
}
