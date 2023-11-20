import { makeAutoObservable } from 'mobx'
import { Store } from '.'
import { PRODUCTS } from '../data/products'

export default class Products {
  store: Store
  data = PRODUCTS

  constructor(store: Store) {
    makeAutoObservable(store)
    this.store = store
  }

  getById = (id: number) => {
    return this.data.find((product) => product.id === id)
  }
}
