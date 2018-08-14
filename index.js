"use strict";

// This is a function for safe property access,
// acting quite like the `get` function from lodash

function get(object) {
  var key =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var defaultVal =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  var keys = Array.isArray(key) ? key : key.split(".");
  var result = keys.reduce(function(res, key) {
    if (res && key in res) {
      return res[key];
    }
    return false;
  }, object);

  return result || defaultVal;
}

module.exports = get;
