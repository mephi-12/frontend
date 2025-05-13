export const jsonParser = (key: any, value: any) => {
    if (typeof value === 'string' && value.toLowerCase() === 'undefined') {
      return undefined
    }
    return value
}
