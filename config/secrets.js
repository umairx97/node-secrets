const camelize = require('camelcase')

const secrets = [
  'appUsername',
  'appPassword'
]
const base = Object.keys(process.env).reduce((acc, key) => {
  const camelized = camelize(key)
  if (secrets.includes(camelized)) acc[camelized] = process.env[key]

  return acc
}, {})

console.log(JSON.stringify(Object.assign({}, base)))
