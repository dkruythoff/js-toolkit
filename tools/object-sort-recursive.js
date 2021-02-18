function objectSortRecursive(obj) {
  if (obj instanceof Array) {
    return obj.sort().map(item => objectSortRecursive(item))
  }
  if (typeof obj === 'object') {
    return Object.keys(obj).sort().reduce((o, key) => ({
      ...o,
      [key]: objectSortRecursive(obj[key])
    }), {})
  }
  return obj
}

export default objectSortRecursive