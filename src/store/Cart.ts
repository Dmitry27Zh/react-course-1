import { makeAutoObservable } from 'mobx'
import { PRODUCTS } from '../data/products'
import { GetProductChange } from '../types'

export class Cart {
  products = PRODUCTS

  constructor() {
    makeAutoObservable(this)
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

export default new Cart()
