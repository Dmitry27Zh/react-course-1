import { InputChange } from '../components/Order/types'
import { defaultInputData } from '../components/Order/inputs'
import { makeAutoObservable } from 'mobx'
import { Store } from '.'

export class Order {
  store: Store
  data = defaultInputData

  constructor(store: Store) {
    makeAutoObservable(this)
    this.store = store
  }

  update = (change: InputChange) => {
    this.data = { ...this.data, ...change }
  }
}
