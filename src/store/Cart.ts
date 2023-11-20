import { makeAutoObservable } from 'mobx'
import { CartItems, GetCartItemChange } from '../types'
import { Store } from '.'

export default class Cart {
  store: Store
  items: CartItems = []

  constructor(store: Store) {
    makeAutoObservable(this)
    this.store = store
  }

  get total() {
    return this.items.reduce((result, item) => {
      const product = this.store.products.getById(item.id)!
      const currentTotal = item.current * product.price

      return result + currentTotal
    }, 0)
  }

  get totalItems() {
    return this.items.reduce((result, product) => result + product.current, 0)
  }

  changeItem = (id: number, getCartItemChange: GetCartItemChange) => {
    this.items = this.items.map((item) => {
      if (item.id === id) {
        const itemChange = getCartItemChange(item)
        item = { ...item, ...itemChange }
      }

      return item
    })
  }

  get isEmpty() {
    return this.items.length === 0
  }

  getItem = (id: number) => {
    return this.items.find((item) => item.id === id)
  }

  hasItem = (id: number) => {
    return this.items.some((item) => item.id === id)
  }

  addItem = (id: number) => {
    if (!this.hasItem(id)) {
      this.items.push({ id, current: 1 })
    }
  }

  removeItem = (id: number) => {
    this.items = this.items.filter((item) => item.id !== id)
  }
}
