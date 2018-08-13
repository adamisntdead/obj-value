# obj-value

> Safely access javascript object values [![NpmVersion](https://img.shields.io/npm/v/obj-value.svg)](https://www.npmjs.com/package/obj-value)

## Usage

First you need to install:

```bash
$ npm install obj-value
```

Then you can use it in your program:

```js
const get = require('obj-value')

const obj = { a: { b: { c: 'd' } } }

get(obj, 'a.b.c') // returns 'd'
get(obj, 'a.b.d') // returns `null`
```

## License

MIT
