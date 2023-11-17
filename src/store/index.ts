import Cart from './Cart'
import Settings from './Settings'

export class Store {
  cart: Cart
  settings: Settings

  constructor() {
    this.cart = new Cart(this)
    this.settings = new Settings(this)
  }
}

export default new Store()
