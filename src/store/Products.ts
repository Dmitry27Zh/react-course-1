import { makeAutoObservable } from 'mobx'
import { Store } from '.'
import { PRODUCTS } from '../data/products'

export default class Products {
  store: Store
  products = PRODUCTS

  constructor(store: Store) {
    makeAutoObservable(store)
    this.store = store
  }
}
