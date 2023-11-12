import { ValidObjKeys } from '../types'

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

export const makeMap = <O extends object, T extends keyof O, U extends keyof O>(
  items: readonly O[],
  indexKey: T,
  valueKey: U
): O[T] extends ValidObjKeys ? { [key in O[T]]: O[U] } : never => {
  const result: any = {}
  items.forEach((item) => (result[item[indexKey]] = item[valueKey]))

  return result
}
