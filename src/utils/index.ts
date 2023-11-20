import { ID_REG } from './../constants'
import { VALID_OBJ_KEYS } from '../constants'
import { Input, ValidObjKeys } from '../types'

export const debounce = (cb: Function, ms: number) => {
  let timerId: number | null = null

  return function () {
    if (timerId) {
      clearTimeout(timerId)
      timerId = null
    }

    timerId = window.setTimeout(() => {
      cb.call(null, ...arguments)
      timerId = null
    }, ms)
  }
}

export const clamp = (min: number, max: number, number: number) => Math.max(min, Math.min(number, max))

const isValidObjKey = (key: any): key is ValidObjKeys => {
  const keyType: any = typeof key

  return VALID_OBJ_KEYS.includes(keyType)
}

export const makeMap = <O extends object, T extends keyof O, U extends keyof O>(
  items: readonly O[],
  indexKey: T,
  valueKey: U
): O[T] extends ValidObjKeys ? { [key in O[T]]: O[U] } : never => {
  const result: any = {}
  items.forEach((item) => {
    if (!isValidObjKey(indexKey)) {
      throw new Error('Invalid Map Object key')
    }

    result[item[indexKey]] = item[valueKey]
  })

  return result
}

export const validate = (validation: Input['validation'], value: string): string => {
  for (let name in validation) {
    const { action, message } = validation[name]
    const isValid = action(value)

    if (!isValid) {
      return message
    }
  }

  return ''
}

export const checkId = (id: string) => {
  return ID_REG.test(id)
}
