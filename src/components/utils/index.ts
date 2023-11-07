export const debounce = (cb: Function, ms: number) => {
  let timerId: number | null = null
  console.log('debounce ska')

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
