import { makeAutoObservable } from 'mobx'
import { PRODUCTS } from '../data/products'
import { GetProductChange } from '../types'
import { Store } from '.'

export default class Cart {
  store: Store
  products = PRODUCTS

  constructor(store: Store) {
    makeAutoObservable(this)
    this.store = store
  }

  get total() {
    return this.products.reduce((result, product) => result + product.current * product.price, 0)
  }

  changeProduct = (id: number, getProductChange: GetProductChange) => {
    this.products = this.products.map((product) => {
      if (product.id === id) {
        const productChange = getProductChange(product)
        product = { ...product, ...productChange }
      }

      return product
    })
  }

  removeProduct = (id: number) => {
    this.products = this.products.filter((product) => product.id !== id)
  }
}
