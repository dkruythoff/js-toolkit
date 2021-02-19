function objectPathGet(obj, path=[]) {
  if (!obj || typeof obj !== 'object' || !path.length) return undefined

  let value = obj
  for (let i in path) {
    if (typeof value[path[i]] === 'undefined') return undefined
    value = value[path[i]]
  }
  
  return value
}

export default objectPathGet