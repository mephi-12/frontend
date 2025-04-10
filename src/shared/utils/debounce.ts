export const debounce = <Args>(func: (...args: Args[]) => void, wait: number) => {
  let stopped = false
  return (...args: Args[]) => {
    if (!stopped) {
      stopped = true
      setTimeout(() => {
        stopped = false
      }, wait)
      func(...args)
    }
  }
}