import Cart from './Cart'
import { Order } from './Order'
import Products from './Products'
import Settings from './Settings'

export class Store {
  products: Products
  cart: Cart
  settings: Settings
  order: Order

  constructor() {
    this.cart = new Cart(this)
    this.settings = new Settings(this)
    this.order = new Order(this)
    this.products = new Products(this)
  }
}

export default new Store()
