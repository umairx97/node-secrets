const camelize = require('camelcase')

const secrets = [
  'appUsername',
  'appPassword'
]

const base = Object.entries(process.env).reduce((acc, [key, value]) => {
  const camelized = camelize(key)
  if (secrets.includes(camelized)) acc[camelized] = value

  return acc
}, {})

console.log(JSON.stringify(Object.assign({}, base)))
