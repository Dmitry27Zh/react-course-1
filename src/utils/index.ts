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
