export function throttle(callback: Function, ms: number) {
  let isThrottle = false
  let context: any
  let args: any

  function wrapThrottle(this: any) {

    if (isThrottle) {
      context = this
      args = arguments
      return
    }

    callback.apply(context, args)
    isThrottle = true

    setTimeout(() => {
      isThrottle = false
      if (args) {
        wrapThrottle.apply(context, args)
        context = args = null
      }
    }, ms)

  }

  return wrapThrottle
}