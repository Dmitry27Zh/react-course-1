import { Input } from '../pages/Order/types'
import { InputChange, ValidationParams } from '../pages/Order/types'
import { defaultInputData, defaultValidationData, inputValidationMap } from '../data/inputs'
import { makeAutoObservable } from 'mobx'
import { Store } from '.'
import api from '../api'
import { validate, isFormValid } from '../utils'

export class Order {
  store: Store
  data = defaultInputData
  validationData = defaultValidationData

  constructor(store: Store) {
    makeAutoObservable(this)
    this.store = store
  }

  update = (change: InputChange) => {
    this.data = { ...this.data, ...change }
    this.validateData(change)
  }

  send = () => {
    const orderData = { ...this.data, products: this.store.cart.items }
    api.send(orderData)
  }

  validateData = (data: InputChange) => {
    let newValidationData = {}
    Object.entries(data).forEach(([name, value]) => {
      const error = validate(inputValidationMap[name as Input['name']], value)
      const validationParams: ValidationParams = {
        status: error ? 'invalid' : 'valid',
        error,
      }
      newValidationData = { ...newValidationData, [name]: validationParams }
    })

    this.validationData = { ...this.validationData, ...newValidationData }
  }

  get isFormValid() {
    return isFormValid(this.validationData)
  }

  checkValidity = () => {
    this.validateData(this.data)

    return this.isFormValid
  }
}
