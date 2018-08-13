// This is a function for safe property access,
// acting quite like the `get` function from lodash

function get(object, key = [], defaultVal = null) {
  const keys = Array.isArray(key) ? key : key.split('.')
  const result = keys.reduce((res, key) => {
    if (res && key in res) {
      return res[key]
    }
    return false
  }, object)

  return result || defaultVal
}

module.exports = get

