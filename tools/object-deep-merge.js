function objectDeepMerge(...objects) {
  const isObject = obj => obj && typeof obj === 'object'

  return objects.reduce((prev, obj) => {
    Object.keys(obj).forEach(key => {
      const pVal = prev[key]
      const oVal = obj[key]

      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        prev[key] = [...pVal, ...oVal].filter((el, i, arr) => arr.indexOf(el) === i)
      }
      else if (isObject(pVal) && isObject(oVal)) {
        prev[key] = objectDeepMerge(pVal, oVal)
      }
      else {
        prev[key] = oVal
      }
    })

    return prev
  }, {})
}

export default objectDeepMerge
