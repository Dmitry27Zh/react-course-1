import Cart from './Cart'
import { Order } from './Order'
import Settings from './Settings'

export class Store {
  cart: Cart
  settings: Settings
  order: Order

  constructor() {
    this.cart = new Cart(this)
    this.settings = new Settings(this)
    this.order = new Order(this)
  }
}

export default new Store()
